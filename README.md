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

The editor updates `content/projects.json`; the Projects page reads that file automatically. GitHub Pages will publish the update after the commit is pushed.

Each project can include a large header image, title line, overview label, lede, main text, role, tools, and any number of extra content boxes. Each box can contain an explanation and an optional picture. New projects automatically appear in Recent Projects and open on the reusable project template.