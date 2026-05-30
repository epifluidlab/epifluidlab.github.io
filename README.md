# EpiFluid Lab Website

Built with [Astro](https://astro.build). Automatically deploys to GitHub Pages when you push to `master`.

---

## Running locally

```
npm install
npm run dev
```

Then open `http://localhost:4321` in your browser.

---

## Deploying

Just push to `master`. GitHub Actions will build and deploy automatically. Takes about a minute.

```
git add .
git commit -m "your message"
git push
```

---

## How to update things

### Publications (`src/data/publications.ts`)

Each publication is an object with these fields:

- `title` — full paper title
- `authors` — author string; wrap lab members in `<strong>...</strong>` to bold them
- `journal` — journal name
- `year` — publication year
- `doi` — DOI without the `https://doi.org/` prefix
- `link` — full URL to the paper
- `tags` — array of tags, e.g. `['Computational Methods', 'EpiFluidLab']`
- `journalIcon` — path to journal logo image in `public/images/journals/`
- `sourceLink` — (optional) GitHub or code link
- `sourceText` — (optional) label for the code link, e.g. `'Source Code'`

To add a new paper, copy an existing entry and fill in the fields.

---

### Team (`src/data/members.ts`)

Each member has: `name`, `image`, `title`, `email`, `bio`.

Profile photos go in `public/images/`. Reference them as `/images/filename.jpg`.

---

### Software (`src/data/tools.ts`)

Each tool has: `name`, `description`, `details`, `tags`, `links`, `image`.

Tool images go in `public/images/tools/`.

---

### Photos (`src/pages/photos.astro`)

Add a new entry to the `photos` array at the top of the file:

```js
{ src: '/images/group_photos/filename.jpg', year: 2026, caption: 'Your caption here' },
```

Photo files go in `public/images/group_photos/`.

---

### Navigation

Edit `src/layouts/Layout.astro`. There is a small array near the top listing nav links.

---

### Favicon

The favicon is `public/images/logo.epifluidlab.png`.

---

## File structure

```
public/
  images/
    group_photos/   — photos page images
    journals/       — journal logo icons
    tools/          — software page images

src/
  data/
    members.ts      — team members
    publications.ts — publications list
    tools.ts        — software tools
  pages/
    index.astro     — home page
    research.astro  — research page
    publications.astro
    software.astro
    team.astro
    photos.astro
    contact.astro
  layouts/
    Layout.astro    — shared nav, footer, head
```
