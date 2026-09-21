# Joseph Villanueva: Portfolio

My personal site: Systems Analyst & UI/UX Lead, engineer-turned-product.

**Live:** https://joseph-villanueva-portfolio.vercel.app

## What's on it

- **About:** background across engineering, UX, and product
- **Experience:** product, analysis, design, and engineering skills
- **Services:** what I help teams with
- **Portfolio:** side projects with live demos and source
- **Testimonials:** from people I've worked with
- **Contact:** a form that sends email through EmailJS, with no backend to run

## Tech stack

- **React 19** on **Vite 8**
- **Tailwind CSS 4** alongside per-section CSS
- **Swiper** for the testimonials carousel, **Framer Motion** for animation
- **EmailJS** for the contact form
- ESLint 9 with `jsx-a11y` for accessibility linting

## Running locally

Requires Node 22 (see `.nvmrc`).

```bash
git clone https://github.com/josephvillanueva/React-Portfolio.git
cd React-Portfolio
npm install
npm run dev
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  components/
    header/  nav/  about/  experience/  services/
    portfolio/  testimonials/  contact/  footer/
  assets/      images and resume
  App.jsx      composes the sections in page order
```

Each section is a self-contained component with its own stylesheet.
