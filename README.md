# Portfolio — Amailuk Joseph Richard

M&E and data analytics consultant portfolio, built with [Astro](https://astro.build) and deployed on Vercel.

Spec: [amailuk/test_project#1](https://github.com/amailuk/test_project/issues/1) · Tickets: [amailuk/test_project#2](https://github.com/amailuk/test_project/issues/2)–[#8](https://github.com/amailuk/test_project/issues/8).

## Content is markdown

Case studies and page content are maintained as markdown files under `src/content/` — editing content never requires touching framework code. Per the spec, the landing page sections are: hero → services → featured work → more-work grid → about + CV → contact. Case studies live on their own pages.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Local dev server at `localhost:4321`        |
| `npm run build`   | Production build to `./dist/`               |
| `npm run preview` | Preview the production build locally        |

## Deploy

Auto-deploys to Vercel on every push to `main` (connection set up in ticket #3). The production build must pass before pushing — it is the site's content gate: invalid content fails the build rather than rendering wrong.
