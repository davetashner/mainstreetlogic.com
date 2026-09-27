# Art Direction

The identity comes from the Main Street Logic logo: a brick storefront on a lamp-lit small-town main street, beside a heavy serif wordmark with "Main Street" in navy and "Logic" in olive, and the tagline *Technology solutions & custom software*. The site should feel like that street: classic, trustworthy, local, and warm, with modern software behind it.

## Palette

All colors are sampled from the logo artwork.

| Token         | Light     | Dark      | Use                                               |
| ------------- | --------- | --------- | ------------------------------------------------- |
| `paper`       | `#FEFDF9` | `#0F263A` | Page background (the logo's cream and night navy) |
| `ink`         | `#0C2135` | `#FEFDF8` | Text (the "Main Street" navy)                     |
| `accent`      | `#4D612D` | `#9CAF64` | "Logic" olive: links, primary buttons             |
| `accent-soft` | `#EEF1E6` | `#132D44` | Tinted sections                                   |
| `band`        | `#0F263A` | `#0A1C2C` | Navy closing band                                 |
| `lamp`        | `#F2C46D` | `#F2C46D` | Lamplight: focus rings and selection only         |
| `brick`       | `#A8452B` | `#E0805F` | Storefront brick: rare secondary accent           |

Olive is the only button color. Lamp amber is for focus and highlight, never decoration.

## Type

- **Source Serif 4** (variable, weights 200–900): headlines at 800 with tight tracking, which matches the wordmark, and body text at 400.
- **Montserrat** (variable): interface text only, meaning navigation, buttons, form labels, and the logo tagline. It matches the tagline in the logo.
- The system monospace font appears only on the receipt.

## Logo

- `src/components/Logo.astro` is the storefront illustration plus a live-text wordmark. It switches to the lamp-lit night illustration in dark mode. Pass `tagline` to show the tagline.
- The illustrations (`public/images/brand/storefront-light.webp` and `storefront-dark.webp`) are cropped from the logo sheet at 552px wide.
- `public/logo.png` is the full horizontal lockup.
- The favicons (`favicon.png`, `apple-touch-icon.png`, `icon-512.png`) are an "M" monogram on navy with the logo's olive dot.
- The rule, olive dot, rule divider under the wordmark is available as `.ornament`.

**To do:** get the logo as a transparent PNG or SVG at 2x or higher. The current illustration crops are 552px wide, which looks soft on high-density screens at hero size.

## Photography

Real photos beat generated ones for a one-person business. People are hiring **you**.

1. **Headshot.** The current one is good and stays.
2. **Upgrade: an environmental portrait** for the About page. Shoot on a real Central Virginia main street, or at a client's counter, laptop open, natural light, in a green or neutral top. Landscape 3:2. This would be the single most valuable new image.
3. **Work shots.** Real screenshots of real projects, like the Supply Checkout phone shot in `public/images/work/`. Add one per new project.

## Generated art: prompt options

These work with any current image model. The style lock-in paragraph matters most. Keep it word for word so every piece matches.

**Style lock-in (append to every prompt):** it matches the logo illustration.

```
Flat vector illustration in the style of a modern small-town storefront
logo: clean shapes with subtle shading, warm lamplit windows (#F2C46D),
red-brick buildings (#A8452B), navy details (#0C2135), olive-green
awnings and trees (#4D612D, #9CAF64), cream background (#FEFDF9).
Friendly and classic, not cartoonish. No text or lettering, no people's
faces, no gradients beyond soft window glow.
```

### A. Optional hero or About-page illustration (pick one, 3:2)

1. **Street at opening time.** `A row of three small-town brick storefronts at 7am, one with its striped scalloped awning half-rolled-down, a sandwich-board sign on the sidewalk, lights on inside one window, a clipboard and a laptop visible through the glass.`
2. **Behind the counter.** `View from behind a small shop counter: an old till, a receipt spooling out, a barcode scanner, a coffee mug, and a laptop, with the shop window and a scalloped awning edge visible beyond.`
3. **Supply closet.** `An open supply closet with labeled shelves of boxes and paper towel rolls, a phone on a shelf scanning a barcode on one box, and a paper sign-out sheet on a clipboard hanging on the door.` This one pairs with the Supply Checkout story.

### B. Service spot illustrations (optional, 1:1, one per service)

Use `Small centered spot illustration, generous empty paper around it:` + subject + style lock-in.

| Service                          | Subject                                                                  |
| -------------------------------- | ------------------------------------------------------------------------ |
| Automate the repetitive work     | `a stack of invoices feeding itself through a small hand-cranked press`   |
| Connect the tools you pay for    | `two shop signs joined by a single strung line of bunting`                |
| Build a tool that fits           | `a phone held over a cardboard box, scanning its barcode label`          |
| Websites that do their job       | `a shop window with an OPEN-style blank hanging sign, seen straight on`  |
| Software cost check-up           | `a long paper receipt with several lines crossed out by a pencil`        |
| Hourly help and advice           | `two coffee cups on a counter beside an open notebook`                   |

Use these sparingly. The ruled service list reads fine without pictures, and six little drawings can tip it into clip-art. If you use them, try them on the Services page first and keep them small (96–128px).

### C. Social card background (optional, 1200×630)

`Wide, quiet street-level view of the top edge of a scalloped shop awning running across the whole frame, with empty paper-colored sky below it for text.` + style lock-in. The headline is added in HTML afterward, not by the image model.

## After generating

1. Reject anything with lettering, extra colors, gradients, or faces.
2. Convert to WebP (`cwebp -q 82 in.png -o out.webp`). Keep files under about 150KB.
3. Save to `public/images/art/` and give each image real `alt` text, or `alt=""` if it's purely decorative.

## Retired

These are retired; don't bring them back:
- The steel-blue and orange palette, wave and network hero art, geometric and topographic backgrounds, and the navy block logo (removed in #56)
- The four `section_header_*` spot illustrations (removed in #56)
- The interim awning-green and sign-yellow identity, the Zilla Slab and Public Sans type, and the SVG storefront mark (replaced by the current logo)
