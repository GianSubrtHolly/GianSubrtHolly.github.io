# Website style reference

This guide records the existing visual patterns for future page and component changes. `styles.css` is the source of truth; extend its shared tokens and selectors instead of introducing page-specific styles without a clear need.

## Foundations

### Color

Use the CSS custom properties in `:root`:

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#191b1a` | Main page background |
| `--ink` | `#f0f1eb` | Primary text and borders |
| `--muted` | `#9da39e` | Supporting copy, labels, and inactive navigation |
| `--line` | `rgba(240, 241, 235, .2)` | Subtle dividers and outlines |
| `--coral` | `#ee735e` | Arrows and small interaction accents |
| `--acid` | `#d7e75b` | Focus and highlight accent |
| `--blue` | `#8db8bd` | Secondary accent |

Prefer these tokens over new near-duplicate colors. Use dark gray (`#242725` / `#303331`) for image placeholders and raised panels.

### Typography

- **Space Grotesk** is the site-wide body and heading font. Body text defaults to 16px.
- **DM Mono** is reserved for navigation, uppercase section labels, metadata, and small captions.
- Headings share Space Grotesk, medium weight, tight line-height, and negative letter spacing. Their sizes vary by hierarchy and context; use the existing fluid `clamp()` patterns rather than forcing every heading to the same size.
- Supporting paragraphs generally use `--muted` with a line-height around `1.45`–`1.6`. Large introductory copy may use `--ink`.
- Section labels such as `.project-index` are muted, uppercase DM Mono at `.65rem`.
- Links are usually understated and underlined; use coral for the arrow/accent rather than coloring whole sections. A prominent primary action can use a coral-filled button with dark text and an acid hover state, as on Cliffhangers.

## Shared layout

- All pages use the shared header, navigation, and footer styles in `styles.css`.
- Wrap page content in `.page-shell` to center it at a maximum width of 1440px. Horizontal gutters are 32px per side by default and 18px per side below 700px.
- Use the existing page wrappers (`.inner-page`, `.project-detail`, `.project-browser-page`) for top and bottom spacing.
- Separate major sections with thin `--line` rules and generous vertical spacing.
- Use CSS Grid or Flexbox for two-column content. At narrow widths, stack content in reading order and keep image/text pairings readable.

## Page and project patterns

- The homepage uses a large name-led hero, a two-column introduction, then a three-column recent-project grid.
- Games use `.game-card`: artwork on the left, project summary on the right, and a simple border above and below.
- Project browsing uses a category rail and a scrollable project list.
- Individual CMS projects are rendered by `project.html` from `content/projects.json`; Pages CMS fields and section types are configured in `.pages.yml`. Reuse these section patterns instead of creating parallel project markup:
  - Text sections use a heading and supporting copy in two columns.
  - Subheaders are centered with a divider and centered supporting copy.
  - Media sections place imagery or embeds in the content column; multiple images use a two-column gallery.
- Static project pages can follow the same hierarchy: overview, project-specific sections, then clear navigation links.
- The Cliffhangers role section pairs role/team context on the left with grouped responsibilities on the right, and stacks the summary and groups on narrow screens.
- Cliffhangers’ always-visible “My Work” board groups images and explanatory notes in frames with software icon badges; content lives in `cliffhangers.html`, and pan/zoom behavior is in `scripts/cliffhangers-board.js`.

## Images and interaction

- Give every meaningful image descriptive alt text. Treat decorative images as decorative.
- Use `object-fit: cover` for cards and cropped editorial imagery; use `contain` when the entire artwork must remain visible.
- Keep media responsive (`max-width: 100%`) and use aspect ratios or existing size constraints to avoid layout shifts.
- Keep hover effects restrained (small lifts or saturation changes). Preserve visible keyboard focus, using the existing acid outline treatment where appropriate.
- The project template supports a keyboard-accessible image viewer; keep project-content images compatible with its `.project-block-copy img` selector.

## Responsive behavior and maintenance

- The main responsive breakpoint is 700px. Test layouts both above and below it; several page grids intentionally stack there.
- The Cliffhangers team photo and paragraph remain side by side down to 520px, then stack for narrower screens.
- When changing shared CSS, update the version query (`styles.css?v=...`) on every page that uses it so browsers fetch the new stylesheet. These version numbers are currently not uniform across pages.
- Prefer existing CSS classes and tokens; avoid inline presentation styles except where a template needs a content-driven value.
- Before finishing a layout change, check desktop and narrow/mobile widths, text wrapping beside images, and keyboard focus.
