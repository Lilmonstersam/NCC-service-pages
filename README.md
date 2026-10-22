# NCC service-page mockup

Namoli's commercial cleaning overview, six service pages (including strata cleaning) and contact prototype, prepared for GitHub Pages. The current review copy and original branding are preserved. Every detail page has seven FAQs, collapsed by default and toggled by click or keyboard, plus an inline enquiry form.

## Local development

Requires Node.js 22 or newer. No API keys or runtime dependencies are required.

```sh
npm ci
npm run dev
```

Open [the local mockup](http://127.0.0.1:8767/preview/index.html). Edit the HTML files in `preview/`, shared behaviour in `preview/mockup.js`, and preview-specific styles in `preview/mockup.css`.

## Build and verify

```sh
npm run check
npm run build
npm run preview
```

The build validates local asset links, page structure, inline forms, JSON-LD and the 42 collapsed FAQs, then copies only `preview/` into `dist/`. The output includes `.nojekyll` and review-only `robots.txt`. It works under `/NCC-service-pages/` using relative URLs, including direct service-page links and refreshes.

To test that project path locally:

```sh
BASE_PATH=/NCC-service-pages/ PORT=8768 npm run preview
```

## GitHub Actions deployment

Pushing to `main` runs `.github/workflows/deploy.yml`. It validates and builds the mockup, uploads `dist/`, and deploys to GitHub Pages. Pull requests run the build without deploying. Manual deployment is available through the Actions tab.

The repository's Pages source must be **GitHub Actions** in Settings > Pages. The published address is [the NCC service-page mockup](https://lilmonstersam.github.io/NCC-service-pages/).

Only the site output is deployed. Downloaded WordPress captures, local research, generated reports, credentials, build output and dependency folders are excluded from Git. The earlier React application is preserved in `legacy/react-prototype/` for reference and is not part of this deployment. Its original scripts can be run from that directory independently.

## Source structure

```text
preview/                 Editable HTML, shared CSS/JS and bundled assets
scripts/check-site.mjs   Static validation used locally and in CI
scripts/build.mjs        Copies the validated site into dist/
serve.cjs                Local source and production preview server
.github/workflows/       Build and GitHub Pages deployment
legacy/react-prototype/  Previous repository application
```

The preview's local CSS, scripts and images are bundled in `preview/assets/`, including the strata hero (`strata-cleaning.jpg`). Some original hero imagery and font files remain hosted on Namoli's site and its font providers, as in the supplied design.

## Forms and review metadata

Service forms reproduce the live contact fields and service-specific facility choices. Native validation works, but submissions stay local. Production address lookup, hCaptcha and CRM submission are not connected. The separate contact prototype also does not send enquiries.

Pages retain `noindex, nofollow` and production Namoli canonical URLs because this is a design and copy review site. Update the review metadata and form integrations before using this implementation on the production website.
