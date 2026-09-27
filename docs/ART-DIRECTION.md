# Art Direction

The visual identity is **storefront, not SaaS**. Main Street Logic helps shops, contractors, and offices on real main streets, so the look borrows from that world: shop awnings, sign-painter lettering, till receipts, and barcode labels. The site should feel like a trustworthy local business that happens to write software. It should not look like another tech startup.

The site ships **without any generated art**. Everything on it is type, CSS, SVG, a real headshot, and a real product screenshot. New art is optional. Commission or generate it only if it adds something the page can't say in words, and keep it in this system.

## Palette

| Token        | Light     | Dark      | Use                                           |
| ------------ | --------- | --------- | --------------------------------------------- |
| `paper`      | `#F6F7F2` | `#0F1914` | Page background                               |
| `ink`        | `#13201A` | `#E6ECE7` | Text                                          |
| `green`      | `#1D4B3B` | `#86C9A8` | Brand, links                                  |
| `awning`     | `#1D4B3B` | `#173D30` | Header band, closing band                     |
| `yellow`     | `#F0B429` | `#F0B429` | Primary buttons only, focus rings             |
| `green-soft` | `#E3ECE6` | `#15261E` | Tinted sections                               |

Yellow is reserved for "do this next." Don't use it for decoration.

## Type

- **Zilla Slab** 600/700: headlines. It's a sturdy slab serif, like painted shop signs.
- **Public Sans** (variable): everything else. It's plain and civic.
- The system monospace font appears only on the receipt, where a till would use it.

## Logo

`src/components/LogoMark.astro` / `public/favicon.svg` is a storefront: a green shop front under a scalloped yellow awning, with a window and a door. The wordmark is live text in Zilla Slab 700, so no image is needed. `public/logo.png`, `public/apple-touch-icon.png`, `public/favicon.png`, and `public/og/default.png` are rendered from the same SVG.

If you hire a designer to refine it, the brief is: _keep the storefront and the scallops; make it a little more hand-made, like a sign-painter's mark, and make sure it still reads at 16px._

## Photography

Real photos beat generated ones for a one-person business. People are hiring **you**.

1. **Headshot.** The current one is good and stays.
2. **Upgrade: an environmental portrait** for the About page. Shoot on a real Central Virginia main street, or at a client's counter, laptop open, natural light, in a green or neutral top. Landscape 3:2. This would be the single most valuable new image.
3. **Work shots.** Real screenshots of real projects, like the Supply Checkout phone shot in `public/images/work/`. Add one per new project.

## Generated art: prompt options

These work with any current image model. The style lock-in paragraph matters most. Keep it word for word so every piece matches.

**Style lock-in (append to every prompt):**

```
Two-color screenprint illustration on warm off-white paper (#F6F7F2).
Ink colors only: deep awning green (#1D4B3B) and sign yellow (#F0B429),
with the paper showing through as a third color. Slight ink misregistration
and fine paper grain, like a small-batch letterpress poster. Flat shapes,
no gradients, no glow, no 3D, no isometric, no people's faces, no text or
lettering anywhere in the image.
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

The steel-blue and orange palette, the wave and network hero art, the geometric and topographic backgrounds, and the navy block logo were removed in the 2026 redesign. The four `section_header_*` spot illustrations are retired too. Don't bring them back.
