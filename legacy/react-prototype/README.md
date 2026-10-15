# NCC Service Pages — Namoli Commercial Cleaning Mockups

React + Vite mockup site for Namoli Commercial Cleaning service pages, used for SEO copy and layout reviews. Includes a homepage and data-driven service pages (Schools, Childcare, Industrial, Medical, Office, Warehouse, Strata).

## Stack

- React 19 + TypeScript, bundled with Vite 6
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- React Router 7 (`BrowserRouter` with basename `/NCC-service-pages`)
- lucide-react icons

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev        # serves on http://localhost:3000
```

No environment variables are required.

## Build & preview

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
npm run lint       # type-check only (tsc --noEmit)
```

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys `dist/` to GitHub Pages via GitHub Actions.

- One-off repo setup: **Settings > Pages > Build and deployment > Source > GitHub Actions**.
- The site is served under `/NCC-service-pages/`. This is configured in two places that must stay in sync:
  - `base: '/NCC-service-pages/'` in `vite.config.ts`
  - `basename="/NCC-service-pages"` in `src/main.tsx`
- The workflow can also be run manually from the Actions tab (`workflow_dispatch`).

## Project structure

```
index.html            # Page shell + meta title/description
src/main.tsx          # Router setup
src/App.tsx           # Layout, homepage, shared ServicePage template
src/data.tsx          # All service page content (pagesData)
src/assets/           # Locally hosted images (e.g. strata-cleaning.png)
```

## Adding or editing a service page

All service page content lives in `src/data.tsx` as entries in `pagesData`. Add a new object with a unique `id` and `slug`, and the page is automatically routed at `/services/<slug>` and added to the nav and footer. To feature it on the homepage services grid, add a card to `serviceCards` in `src/App.tsx`.

Hero images are either hotlinked from the live site's media library (namoli.com.au) or imported from `src/assets/`.

## Notes

- `.gitignore` excludes `node_modules`, `dist`, logs, editor folders, and `.env*` files.
- The `@google/genai`, `express`, `dotenv`, and `motion` dependencies are unused leftovers from the original AI Studio scaffold and can be removed in a future cleanup.
