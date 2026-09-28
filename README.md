# Brand website

Static marketing site built with [Astro](https://astro.build). It builds to plain HTML, CSS and a small amount of JS, so it's fast and can be hosted anywhere.

## Run it locally

Requires Node 22.12+.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then outputs the static site to dist/
npm run preview  # serves the built site
```

## Where things live

| Path | What goes there |
| --- | --- |
| `src/site.ts` | Brand name, tagline, description, order links, socials |
| `src/styles/global.css` | Design tokens (colours, fonts, spacing) and base styles |
| `src/pages/` | One file per page (`index.astro` is the home page) |
| `src/components/` | Reusable sections (header, footer, hero, …) |
| `src/layouts/Base.astro` | Page shell: `<head>`, SEO and social tags |
| `src/assets/` | Images. Astro resizes and compresses these at build time |
| `public/media/` | Video files (e.g. Higgsfield exports), served as-is |
| `public/` | Favicon, robots.txt and other files served at the site root |

## Deploying

Import the repo into [Vercel](https://vercel.com/new) or [Netlify](https://app.netlify.com/start). Both detect Astro automatically: build command `npm run build`, output directory `dist`. Every push to `main` then redeploys.

Once the domain is known, set `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`.
