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

Projects are stored as separate files in `content/projects/`, so the CMS keeps the library tidy and each item can be renamed or reorganized independently. A GitHub Action rebuilds `content/projects.json` whenever a project file changes; the Projects page and homepage read that generated index automatically. The CMS's **Refresh project index** action can be cancelled while its workflow is active. The workflow reports the current stage and project-file count in its logs, and stops automatically if it runs for more than 10 minutes.

To delete a project, open its entry in the Project library and review its fields before using the CMS delete operation. Pages CMS asks you to confirm the deletion. The project file is removed from `content/projects/`, and the GitHub Action rebuilds the public project index automatically. The entry editor shows the project's field values; it does not display the raw JSON file in the confirmation dialog.

Each project starts with required title, category, web address name, short description, and header image fields. The `Page sections` control lets you add blocks in any order: Text, Subheader, Image, Image with link, Video, YouTube video, HTTPS Embed, or Website sideload. For a YouTube video, choose **YouTube video**, paste a standard YouTube or Shorts link, and provide its title; the site converts it to YouTube's privacy-enhanced player URL. YouTube links entered in the regular Embed block are converted as well. Website sideload displays an HTTPS website inside the project page in a larger, resizable frame; drag its corner or side handles to resize it (the top-center edge is fixed). Some websites disallow being embedded, in which case use the site's direct link instead. An Image block can contain multiple pictures, which display together in a two-column gallery with the block's description and caption. Click any image in the project content (not the header) to open the image viewer; zoom with the controls or mouse wheel, drag to pan, and click outside or press Escape to close. Save the entry, then open `project.html?slug=your-project-name` to preview the exact public layout. Pages CMS does not currently expose a custom live iframe preview for unsaved block changes, so the preview becomes available after the CMS commit is saved and GitHub Pages rebuilds.

Each project can include a large header image, title line, software icons shown beneath or over the header image, overview label, lede, main text, role, tools, and any number of extra content boxes. Card previews are optional; leaving one blank shows a plain dark background. Each content box can contain an explanation and an optional picture. New projects automatically appear in Recent Projects and open on the reusable project template.