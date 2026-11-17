(() => {
  const board = document.querySelector('.cliffhangers-my-work');
  const viewport = board?.querySelector('[data-board-viewport]');
  const canvas = board?.querySelector('[data-board-canvas]');
  const zoomLevel = board?.querySelector('[data-board-zoom-level]');
  const zoomIn = board?.querySelector('[data-board-zoom-in]');
  const zoomOut = board?.querySelector('[data-board-zoom-out]');
  const reset = board?.querySelector('[data-board-reset]');

  if (!board || !viewport || !canvas || !zoomLevel || !zoomIn || !zoomOut || !reset) {
    throw new Error('Cliffhangers work board is missing required controls.');
  }

  const minZoom = 0.05;
  const maxZoom = 2.5;
  let zoom = 1;
  let offsetX = 0;
  let offsetY = 0;
  let pointer = null;

  function render() {
    canvas.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`;
    zoomLevel.value = `${Math.round(zoom * 100)}%`;
    zoomIn.disabled = zoom >= maxZoom;
    zoomOut.disabled = zoom <= minZoom;
  }

  function fitBoard() {
    const bounds = viewport.getBoundingClientRect();
    zoom = Math.max(minZoom, Math.min(
      1,
      (bounds.width - 48) / canvas.offsetWidth,
      (bounds.height - 48) / canvas.offsetHeight
    ));
    offsetX = (bounds.width - canvas.offsetWidth * zoom) / 2;
    offsetY = (bounds.height - canvas.offsetHeight * zoom) / 2;
    render();
  }

  function setZoom(nextZoom, pointX, pointY) {
    const bounds = viewport.getBoundingClientRect();
    const anchorX = pointX ?? bounds.width / 2;
    const anchorY = pointY ?? bounds.height / 2;
    const previousZoom = zoom;
    zoom = Math.min(maxZoom, Math.max(minZoom, nextZoom));
    offsetX = anchorX - (anchorX - offsetX) * (zoom / previousZoom);
    offsetY = anchorY - (anchorY - offsetY) * (zoom / previousZoom);
    render();
  }

  zoomIn.addEventListener('click', () => setZoom(zoom * 1.2));
  zoomOut.addEventListener('click', () => setZoom(zoom / 1.2));
  reset.addEventListener('click', fitBoard);

  viewport.addEventListener('wheel', (event) => {
    event.preventDefault();
    const bounds = viewport.getBoundingClientRect();
    const zoomFactor = Math.exp(-event.deltaY * 0.001);
    setZoom(zoom * zoomFactor, event.clientX - bounds.left, event.clientY - bounds.top);
  }, { passive: false });

  viewport.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add('is-panning');
    event.preventDefault();
  });

  viewport.addEventListener('pointermove', (event) => {
    if (!pointer || pointer.id !== event.pointerId) return;
    offsetX += event.clientX - pointer.x;
    offsetY += event.clientY - pointer.y;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    render();
  });

  function stopPanning(event) {
    if (!pointer || pointer.id !== event.pointerId) return;
    pointer = null;
    viewport.classList.remove('is-panning');
  }

  viewport.addEventListener('pointerup', stopPanning);
  viewport.addEventListener('pointercancel', stopPanning);
  viewport.addEventListener('lostpointercapture', stopPanning);
  viewport.addEventListener('keydown', (event) => {
    const panStep = 80;
    const directions = {
      ArrowLeft: [panStep, 0],
      ArrowRight: [-panStep, 0],
      ArrowUp: [0, panStep],
      ArrowDown: [0, -panStep]
    };
    const direction = directions[event.key];
    if (direction) {
      event.preventDefault();
      offsetX += direction[0];
      offsetY += direction[1];
      render();
    } else if (event.key === '+' || event.key === '=') {
      event.preventDefault();
      setZoom(zoom * 1.2);
    } else if (event.key === '-') {
      event.preventDefault();
      setZoom(zoom / 1.2);
    } else if (event.key === 'Home') {
      event.preventDefault();
      fitBoard();
    }
  });

  requestAnimationFrame(fitBoard);
})();
