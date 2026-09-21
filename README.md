# Personal Portfolio — Joseph Villanueva

A single-page personal portfolio built with React and Vite.

**Live site:** https://josephvillanueva.github.io/React-Porfoltio

## Tech stack

| | |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Carousel | Swiper 14 |
| Icons | react-icons |
| Contact form | EmailJS |
| Hosting | GitHub Pages |

## Getting started

Requires Node.js 20.19+ (or 22.12+).

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173/React-Porfoltio/.

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

## Deployment

`npm run deploy` builds the site and pushes it to the `gh-pages` branch via the
`gh-pages` package. The `base` option in `vite.config.js` must stay in sync with
the repository name so asset paths resolve correctly on GitHub Pages.

## Project structure

```
src/
├── assets/              images and CV
├── components/          one folder per section, each with its own CSS
│   ├── header/          hero, CTA buttons, social links
│   ├── nav/             floating bottom nav
│   ├── about/           bio and highlight cards
│   ├── experience/      skill lists
│   ├── services/        service offerings
│   ├── portfolio/       project cards
│   ├── testimonials/    character references carousel
│   ├── contact/         contact options and EmailJS form
│   └── footer/
├── App.jsx
├── main.jsx             entry point
└── index.css            global styles and CSS variables
```
