# Content Update Guide

This guide explains how to update website content for mainstreetlogic.com.

## Project Structure

```
src/
├── pages/           # Website pages (routes)
│   ├── index.astro         # Homepage (/)
│   ├── about.astro         # About page (/about)
│   ├── services.astro      # Services page (/services)
│   ├── pricing.astro       # Pricing page (/pricing)
│   ├── contact.astro       # Contact page (/contact)
│   ├── blog/
│   │   └── index.astro     # Blog listing (/blog)
│   └── resources/
│       └── tech-friction-checklist.astro  # Lead magnet page
├── components/      # Reusable UI components
├── layouts/         # Page layouts (BaseLayout.astro)
└── styles/          # Global CSS (global.css)

public/
├── images/          # Website images
│   ├── work/        # Screenshots of real projects
│   └── headshot.webp
├── downloads/       # Downloadable files (PDFs, etc.)
├── favicon.png      # Monogram favicon
├── logo.png         # Full horizontal logo (structured data)
└── og/default.png   # Social sharing card
```

## Local Development

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
# Opens at http://localhost:4321

# Build for production (to test)
npm run build

# Preview production build
npm run preview
```

## Updating Page Content

### Basic Page Structure

All pages use the same pattern - import the layout and wrap content:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Page Title"
  description="SEO description for this page"
>
  <!-- Your page content here -->
</BaseLayout>
```

### Editing an Existing Page

1. Open the relevant file in `src/pages/`
2. Find the section you want to edit
3. Update the HTML content within the `<BaseLayout>` tags
4. Save and check `http://localhost:4321` to preview

### Common Content Sections

Pages typically follow this structure:

```astro
<!-- Page intro -->
<section class="section">
  <div class="wrap">
    <h1>Page heading</h1>
    <p class="lede measure">One or two sentences of plain explanation.</p>
  </div>
</section>

<!-- Content section -->
<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>Section heading</h2>
    </div>
    <!-- Content here -->
  </div>
</section>
```

Headings get their font and size from the base styles, so you don't need classes on `h1`, `h2`, or `h3`.

## Managing Images

### Adding New Images

1. Place images in `public/images/` (or a subdirectory)
2. Reference them with absolute paths starting with `/`

```html
<img src="/images/my-image.webp" alt="Description" width="400" height="300" />
```

### Image Best Practices

- **Format**: Use `.webp` for photos (smaller file size)
- **Size**: Optimize images before adding (use tools like squoosh.app)
- **Alt text**: Always include descriptive `alt` attributes
- **Dimensions**: Include `width` and `height` to prevent layout shift
- **Loading**: Add `loading="lazy"` for below-the-fold images

### Image Locations

| Type | Directory | Example |
|------|-----------|---------|
| Project screenshots | `public/images/work/` | `supply-checkout-project.webp` |
| Illustrations (optional) | `public/images/art/` | see `ART-DIRECTION.md` |
| Logo | `src/components/Logo.astro`, `public/images/brand/` | |
| Profile photos | `public/images/` | `headshot.webp` |
| Downloadable files | `public/downloads/` | `checklist.pdf` |

## Reusable Components

Components are in `src/components/`. Use them by importing:

```astro
---
import ServiceCard from '../components/ServiceCard.astro';
---

<ServiceCard title="Service Name" description="Details..." />
```

### Available Components

| Component | Purpose |
|-----------|---------|
| `Header.astro` | Header with logo and navigation |
| `Footer.astro` | Site footer |
| `Logo.astro` | Storefront illustration and wordmark (`tagline` prop adds the tagline) |
| `Receipt.astro` | Home page hero receipt |
| `SupplyCheckout.astro` | Supply Checkout work sample with demo link |
| `ProcessSteps.astro` | The four steps of working together |
| `FAQ.astro` | FAQ disclosure list (pass `items`, or it uses `src/data/faqs.ts`) |

Shared content lives in `src/data/`: `services.ts` is used by the home and services pages, and `faqs.ts` holds the default FAQs.

## Styling

See `docs/ART-DIRECTION.md` for the palette, type, logo, and image guidelines.

Colors are CSS variables in `src/styles/global.css` that switch automatically in dark mode, so you don't need `dark:` classes:

```html
<p class="text-ink">Main text</p>
<p class="text-muted">Secondary text</p>
<div class="bg-accent-soft">Tinted section</div>
```

Reusable classes:

```html
<section class="section">          <!-- vertical section padding -->
  <div class="wrap">               <!-- page-width container with side gutters -->
    <p class="lede measure">…</p>  <!-- larger intro text at a readable width -->
    <a class="btn" href="/contact">Book a free call</a>   <!-- primary (olive) -->
    <a class="btn-outline" href="/pricing">See pricing</a> <!-- secondary -->
```

Voice: write in the first person ("I"). Use plain sentence case. Don't invent client results. Real work goes in its own section with a link people can check.

## Adding Blog Posts (Future)

Blog posts will go in `src/pages/blog/`. When ready:

1. Create a new `.astro` file: `src/pages/blog/post-slug.astro`
2. The filename becomes the URL: `/blog/post-slug`
3. Follow the same layout pattern as other pages

## Deployment

Content deploys automatically:

1. **Make changes** on a feature branch
2. **Create a PR** to `main`
3. **Staging preview** deploys automatically (link posted in PR comments)
4. **Merge to main** triggers production deployment

### Deployment Flow

```
Feature Branch → PR → Staging Preview → Merge → Production
                      (automatic)              (automatic)
```

### URLs

| Environment | URL |
|-------------|-----|
| Production | https://mainstreetlogic.com |
| Staging | PR-specific URL (posted in PR comments) |
| Local Dev | http://localhost:4321 |

## Common Tasks

### Change homepage hero text

Edit `src/pages/index.astro`, find the hero section (near top).

### Update service descriptions

Edit `src/pages/services.astro`, find the relevant service card.

### Add a new team member photo

1. Optimize the image as `.webp`
2. Place in `public/images/`
3. Reference in the relevant page

### Update footer links

Edit `src/components/Footer.astro`.

### Change site-wide metadata

Edit `src/layouts/BaseLayout.astro` for default meta tags.

## Code Formatting

Before committing, format your code:

```bash
npm run format
```

Or check formatting without changing files:

```bash
npm run format:check
```

## Troubleshooting

### Changes not showing

1. Check the terminal for errors
2. Hard refresh the browser (Cmd+Shift+R / Ctrl+Shift+R)
3. Restart the dev server: stop with Ctrl+C, run `npm run dev` again

### Build errors

Run `npm run build` locally to catch errors before pushing.

### Dark mode not working

Use the token colors (`text-ink`, `bg-paper`, `var(--accent)` and so on) instead of fixed hex values. The tokens switch automatically.
