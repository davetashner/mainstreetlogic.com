# mainstreetlogic.com

Marketing site for Main Street Logic: custom software, automation, and websites for small businesses.

Built with Astro and Tailwind CSS v4. It deploys to S3/CloudFront via GitHub Actions (see `.github/workflows/` and `infrastructure/`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build to dist/
npm test          # Playwright smoke tests (against npm run preview)
```

- `docs/CONTENT-GUIDE.md`: how to edit pages and content
- `docs/ART-DIRECTION.md`: palette, type, logo, and prompts for new art
