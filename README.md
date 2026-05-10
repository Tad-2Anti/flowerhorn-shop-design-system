# FlowerHorn Shop — Design System

## Overview

**FlowerHorn Shop** is a specialty aquarium fish retailer based in Madurai, India, operating a physical storefront at #80, Kannimandai Main Road, Iyer Bungala, Madurai-625 014. The business sells flowerhorn fish, assorted aquarium fish, and accessories. This design system supports the creation of a full e-commerce website inspired by the style and structure of [cloningaquapets.com](https://www.cloningaquapets.com/) — a similarly scoped aquatics e-commerce storefront.

## Sources

- **Storefront photo**: `uploads/Screenshot 2026-05-10 153745.png` — physical store sign showing brand name in English + Tamil, color scheme (red/gold), and flowerhorn fish imagery.
- **Reference site**: https://www.cloningaquapets.com/ — used for structural and interaction reference; site was inaccessible at design system creation time. Design tokens below were derived from a provided token specification.
- **Design token spec**: provided inline — see token values in `colors_and_type.css`.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Concise and confident.** Short sentences. No fluff. Product details come first.
- **Informational, not salesy.** Trust is built through fish care specs and expertise, not marketing hyperbole.
- **Local warmth.** Tamil cultural context acknowledged — the brand serves a South Indian market. Copy should feel accessible to English-reading buyers in Madurai and online.
- **No emoji** in UI copy. Product listings may occasionally use ✓ checkmarks for feature lists.
- **Active voice**: "Buy live flowerhorn fish", not "Flowerhorn fish can be bought here".
- **Casing**: Sentence case for body, headlines, CTAs. Title case only for product names (e.g. "Red Dragon Flowerhorn").
- **First person**: The brand speaks as "we/us" in about sections. Product pages are neutral/descriptive.
- **Numbers**: Always use numerals (₹1,200; 6 inches; 26°C). Indian Rupee (₹) as currency symbol.

### Example Copy Patterns
- **Hero CTA**: "Shop live fish →" / "Browse all flowerhorns"
- **Product card**: "Red Dragon Flowerhorn — ₹3,500 | 5–6 inch | In stock"
- **Empty state**: "No fish found. Try adjusting your filters."
- **Error**: "We couldn't load the catalog. Please refresh."
- **Success**: "Added to cart. Keep browsing or checkout."
- **Out of stock**: "Currently unavailable — check back soon."

---

## VISUAL FOUNDATIONS

### Colors
- **Brand Red** `#C1321A` — from the physical store banner; primary action color, hero backgrounds, CTAs.
- **Brand Gold** `#E8A920` — accent from the store sign's yellow circle; highlights, badges, stars.
- **Aquatic Green** `#357e51` — deep plant/nature green; secondary buttons, success states, nature accents.
- **Ocean Blue** `#1559d5` — link color, focus rings, info states; water reference.
- **Near-Black** `#090909` — primary body text.
- **Warm Cream** `#faf4d8` — inverse text on dark surfaces; slightly warm to recall the sign's background.
- **Muted Surface** `#f2f4f3` — card backgrounds, form fields, neutral zones.
- **White** `#ffffff` — raised surfaces, modal backgrounds.
- **Dark Base** `#0a0f0d` — hero/footer backgrounds; near-black with green undertone for aquatic depth.

### Typography
- **Primary**: DM Sans (Google Fonts). Bold weight (700) as the base — matches the sign's confident lettering.
- **Scale**: xs=10px, sm=15px, md=16.56px, lg=18px (base), xl=20px, 2xl=28.8px, 3xl=30px.
- **Line height base**: 1.5 (27px at 18px). 
- **No secondary typeface.** DM Sans handles all weights from Regular to ExtraBold.
- **Display text**: ExtraBold (800) for hero headings. Bold (700) for section headings. Medium (500) for card labels.

### Spacing
- Very tight micro-scale (4–14px) for internal component padding.
- Standard 8px grid underlies the system (tokens map to multiples of 4/8).
- Page sections use larger multiples: 40px, 64px, 96px between major content blocks.

### Backgrounds & Surfaces
- **Hero**: Dark base `#0a0f0d` with red overlay or full-bleed flowerhorn fish photography.
- **Sections**: Alternating between `#ffffff` and `#f2f4f3` (muted surface) for rhythm.
- **Footer**: Dark base `#0a0f0d` with warm cream text.
- **Cards**: White `#ffffff` on muted `#f2f4f3` backgrounds; subtle border `1px solid rgba(0,0,0,0.08)`.
- No gradients except subtle scrim overlays on hero images.
- No patterns or textures — photography carries the visual weight.

### Animation & Motion
- `instant`: 100ms — micro-interactions (toggle, checkbox)
- `fast`: 300ms — button hover, card shadow lift
- `normal`: 400ms — modals, drawers, cart slide-in
- `slow`: 600ms — page transitions, hero fade-ins
- Easing: ease-out for entrances, ease-in-out for loops. No bounces — keep it credible and calm.

### Hover / Press States
- **Buttons**: Darken by 10% on hover; scale(0.98) on press.
- **Cards**: Box-shadow lifts from 0 to `0 4px 20px rgba(0,0,0,0.12)` on hover. Translate Y -2px.
- **Links**: Color shifts to `#0e40a8` (darker blue); underline appears.
- **Icons**: Opacity 0.7 on hover.

### Borders & Radius
- `radius.xs = 6px` — inputs, cards, badges
- `radius.sm = 50px` — pill buttons, chips, tags
- No razor-sharp 0px corners. No heavy 24px+ rounding on cards.

### Shadows
- `shadow.1`: `rgb(21, 89, 213) 0px -2px 0px 0px inset` — primary button bottom-border feel.
- Card hover: `0 4px 20px rgba(0,0,0,0.12)`
- Modal: `0 20px 60px rgba(0,0,0,0.3)`

### Corner Radii on Cards
- Product cards: `border-radius: 6px`
- Input fields: `border-radius: 6px`
- CTA buttons: `border-radius: 50px` (pill) for primary; `6px` for secondary/ghost.

### Imagery
- Full-bleed fish photography — close-ups of flowerhorn fish heads, side profiles.
- Warm, saturated color tone. Slightly high-contrast to pop against dark backgrounds.
- Avoid cold/desaturated imagery — fish are vivid and colorful.

### Use of Transparency & Blur
- Sticky header: `backdrop-filter: blur(12px)` with 90% opacity white.
- Modals: backdrop `rgba(0,0,0,0.5)`.
- No excessive glass-morphism.

---

## ICONOGRAPHY

- **No custom icon set.** Lucide Icons (CDN) used throughout — consistent stroke-based icons at 20px/24px.
- **CDN**: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`
- **Usage**: `<i data-lucide="fish"></i>` rendered via `lucide.createIcons()`.
- **Key icons in use**: `fish`, `shopping-cart`, `heart`, `search`, `star`, `map-pin`, `phone`, `mail`, `chevron-right`, `filter`, `package`, `droplets`, `thermometer`, `ruler`.
- **Emoji**: Not used in UI. Store sign uses Tamil script text only.
- **No PNG icon sprites** identified — all icons via Lucide.
- Logo: Recreated as SVG wordmark in `assets/logo.svg` and `assets/logo-dark.svg`.

---

## FILE INDEX

```
/
├── README.md                        ← This file
├── SKILL.md                         ← Agent skill definition
├── colors_and_type.css              ← All CSS custom properties (tokens)
├── uploads/
│   └── Screenshot 2026-05-10...png  ← Store photo (source asset)
├── assets/
│   ├── logo.svg                     ← Brand wordmark (light bg)
│   └── logo-dark.svg                ← Brand wordmark (dark bg)
├── preview/
│   ├── colors-brand.html            ← Brand palette swatches
│   ├── colors-semantic.html         ← Semantic color tokens
│   ├── type-scale.html              ← Font size scale
│   ├── type-specimens.html          ← Heading + body specimens
│   ├── spacing-tokens.html          ← Spacing scale tokens
│   ├── radii-shadows.html           ← Radius + shadow tokens
│   ├── buttons.html                 ← Button variants + states
│   ├── inputs.html                  ← Form input states
│   ├── cards.html                   ← Product card variants
│   ├── badges-chips.html            ← Badges, tags, status chips
│   └── navigation.html              ← Header nav component
└── ui_kits/
    └── storefront/
        ├── README.md                ← UI kit notes
        └── index.html               ← Full interactive storefront prototype
```
