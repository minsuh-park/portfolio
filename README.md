# Minsuh Park — Portfolio

A one-page portfolio for product marketing and marketing analytics roles. It is built with plain HTML, CSS, and vanilla JavaScript: no frameworks and no build step. It is hosted on GitHub Pages.

**Live site:** https://minsuh-park.github.io/portfolio/

<!-- TODO: Take a screenshot of the live site, save it as assets/screenshot.png, and remove this comment. -->
![Screenshot of the portfolio homepage](assets/screenshot.png)

## Design

The site follows the "Refined" editorial design system. The typography carries the design.

- **Type:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) for all headings, body text, and buttons. [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for technical tool tags.
- **Scale:** 12 / 14 / 16 / 20 / 24 / 32px, plus one fluid display size for the hero name.
- **Color:** near-black `#111827` on white `#FFFFFF`. Primary `#3B82F6` is used only for link underlines and focus rings. Secondary `#8B5CF6` is used only for the timeline markers.
- **Spacing:** 4px base unit (4 / 8 / 12 / 16 / 24 / 32). Sections are separated by 64–96px.

## Project structure

```
.
├── index.html      # The whole site: hero, about, work, skills, experience, contact
├── 404.html        # Custom "page not found" page
├── favicon.svg
├── css/
│   └── styles.css  # Design tokens at the top, then components
├── js/
│   ├── data.js     # ← Case study content: edit your projects here
│   └── main.js     # Renders projects, mobile menu, active-section highlight
└── assets/         # Screenshot, OG image, résumé, etc. (add as needed)
```

## Editing the content

Every place you need to personalize is marked with `TODO:`. To list them all, run:

```bash
grep -rn "TODO" --include="*.html" --include="*.js" --include="*.css" --include="*.md" .
```

- **Projects:** edit the objects in `js/data.js`. Each has `title`, `summary`, `problem`, `approach`, `results` (value and label pairs), `tags`, and an optional `link`. Add or remove objects to change the number of cards.
- **Bio, skills, timeline, contact:** edit the matching section in `index.html`. Each section is marked with a comment banner.
- **Dates:** replace each `20XX` in the timeline.
- **Social preview image:** add a 1200×630 `assets/og-image.png`, then uncomment the `og:image` tags in `index.html`.

## Running locally

No install is needed. From the project folder, run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` directly also works.

> Note: `404.html` uses absolute `/portfolio/...` paths so it works at any URL depth on GitHub Pages. It will look unstyled when you preview it locally, which is expected.

## Deploying

The site deploys from the `main` branch root through GitHub Pages (**Settings → Pages → Deploy from a branch → `main` / `/ (root)`**). To publish a change:

```bash
git add .
git commit -m "Update projects"
git push
```

GitHub Pages rebuilds automatically, usually within a minute.

**Changed CSS or JS?** Increase the `?v=` number on the stylesheet and script tags in `index.html` (and the stylesheet in `404.html`). GitHub Pages lets browsers cache files for 10 minutes, so without a new version number, returning visitors may see the old files. Content-only edits in `index.html` don't need this.

## Accessibility

The site targets WCAG 2.2 AA:
- Semantic landmarks and a skip link.
- Visible `:focus-visible` rings on every interactive element.
- A keyboard-operable mobile menu (`aria-expanded`; Esc closes it).
- Text contrast of 7.6:1 or better.
- Respects `prefers-reduced-motion` and forced-colors mode.
