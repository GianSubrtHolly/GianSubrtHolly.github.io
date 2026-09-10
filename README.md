# GianSubrtHolly.github.io

Static portfolio website for games art.

## Pages

- `index.html` - landing page and featured project
- `work.html` - selected projects, with project anchors
- `about.html` - artist profile
- `contact.html` - email and social links

## Assets

- `assets/images/` - artwork, stills, and poster images
- `assets/videos/` - trailers and process reels

The site uses relative links, so the tab navigation works directly on GitHub Pages or from a local folder. On the homepage, duplicate a `.project-button` link in the project grid to add another tile. Change its `href`, title, category text, and image class. The matching `project-*.html` file is the detailed destination for that tile.

Replace the portrait placeholder in `index.html` with an `<img>` pointing to `assets/images/your-name.jpg`. Replace the detail-page gallery placeholders with `<img>` or `<video>` elements pointing to files in the asset folders.