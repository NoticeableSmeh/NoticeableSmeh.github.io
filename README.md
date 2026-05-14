# NoticeableSmeh.github.io

Static GitHub Pages portfolio for William de Try.

## Editing projects

Most portfolio content lives in `assets/js/data.js`.

To add a project:

1. Add a new object to `portfolioData.projects`.
2. Give it a unique `slug`, for example `my-new-game`.
3. Add images to `assets/images/` with descriptive names.
4. Create `projects/my-new-game.html` by copying one of the existing project pages and changing `data-project-detail` to the new slug.

The home page automatically shows projects with `featured: true`. The `projects/index.html` page shows every project.

## File structure

- `index.html`: Home page.
- `projects/`: Dedicated case study pages.
- `assets/css/style.css`: Shared visual design.
- `assets/js/data.js`: Portfolio content and links.
- `assets/js/site.js`: Shared rendering logic.
- `assets/images/`: Project images with descriptive filenames.
