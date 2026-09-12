# GianSubrtHolly.github.io

Static portfolio website for games art.

## Pages

- `index.html` - landing page and featured project
- `games.html` - games overview and visual direction
- `work.html` - selected projects, with project anchors
- `about.html` - artist profile
- `contact.html` - email and social links
- `.pages.yml` - Pages CMS editor configuration

## Assets

- `assets/images/` - artwork, stills, and poster images
- `assets/videos/` - trailers and process reels

The site uses relative links, so the tab navigation works directly on GitHub Pages or from a local folder. On the homepage, duplicate a `.project-button` link in the project grid to add another tile. Change its `href`, title, category text, and image class. The matching `project-*.html` file is the detailed destination for that tile.

Replace the portrait placeholder in `index.html` with an `<img>` pointing to `assets/images/your-name.jpg`. Replace the detail-page gallery placeholders with `<img>` or `<video>` elements pointing to files in the asset folders.

## Private project editor

This site can stay on GitHub Pages while projects are edited through [Pages CMS](https://pagescms.org/). The editor uses GitHub login and repository permissions, so only accounts with access to this repository can edit content.

1. Sign in at Pages CMS with the GitHub account that owns this repository.
2. Select `GianSubrtHolly/GianSubrtHolly.github.io`.
3. Open the `Project library` editor.
4. Add a project, choose its category, fill in the description, and save.

Projects are stored as separate files in `content/projects/`, so the CMS keeps the library tidy and each item can be renamed or reorganized independently. A GitHub Action rebuilds `content/projects.json` whenever a project file changes; the Projects page and homepage read that generated index automatically.

Each project starts with required title, category, web address name, short description, and header image fields. The `Page sections` control lets you add blocks in any order: Text, Subheader, Image, Image with link, Video, or HTTPS Embed. Save the entry, then open `project.html?slug=your-project-name` to preview the exact public layout. Pages CMS does not currently expose a custom live iframe preview for unsaved block changes, so the preview becomes available after the CMS commit is saved and GitHub Pages rebuilds.

Each project can include a large header image, title line, overview label, lede, main text, role, tools, and any number of extra content boxes. Each box can contain an explanation and an optional picture. New projects automatically appear in Recent Projects and open on the reusable project template.