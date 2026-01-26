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
│   ├── hero/        # Hero section images
│   ├── logo/        # Logo variations
│   └── headshot.webp
├── downloads/       # Downloadable files (PDFs, etc.)
├── favicon.png      # Light mode favicon
└── favicon-dark.png # Dark mode favicon
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
<!-- Hero Section -->
<section class="bg-gradient-to-br from-light-bg to-soft-gray dark:from-dark-bg dark:to-navy py-16 md:py-24">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-navy dark:text-soft-gray mb-6">
      Page Heading
    </h1>
    <p class="text-xl text-navy/70 dark:text-soft-gray/70">
      Subheading text
    </p>
  </div>
</section>

<!-- Content Section -->
<section class="py-16 md:py-24">
  <div class="max-w-4xl mx-auto px-4">
    <!-- Content here -->
  </div>
</section>

<!-- CTA Section -->
<section class="bg-navy py-16 md:py-24">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold text-white mb-4">Call to Action</h2>
    <a href="/contact" class="inline-block bg-steel-blue text-white ...">
      Button Text
    </a>
  </div>
</section>
```

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
| Hero images | `public/images/hero/` | `hero-light.webp` |
| Logos | `public/images/logo/` | `logo.svg` |
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
| `Header.astro` | Site navigation |
| `Footer.astro` | Site footer |
| `Hero.astro` | Hero sections |
| `ServiceCard.astro` | Service offering cards |
| `PricingCard.astro` | Pricing tier cards |
| `FAQ.astro` | FAQ accordion |
| `Testimonials.astro` | Customer testimonials |
| `LeadCapture.astro` | Email capture modal |

## Styling

This site uses Tailwind CSS. Common utility classes:

### Colors (with dark mode support)

```html
<!-- Text colors -->
<p class="text-navy dark:text-soft-gray">Main text</p>
<p class="text-navy/70 dark:text-soft-gray/70">Secondary text</p>
<p class="text-steel-blue">Accent text</p>

<!-- Background colors -->
<div class="bg-white dark:bg-navy">...</div>
<div class="bg-soft-gray/30 dark:bg-navy/50">...</div>
```

### Spacing & Layout

```html
<!-- Section padding -->
<section class="py-16 md:py-24">

<!-- Container with max-width -->
<div class="max-w-4xl mx-auto px-4">

<!-- Grid layouts -->
<div class="grid md:grid-cols-2 gap-8">
```

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

Ensure elements have both light and dark classes:
```html
<p class="text-navy dark:text-soft-gray">...</p>
```
