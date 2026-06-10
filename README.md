# Suma Reddy Studio — Luxury Indian Ethnic Fashion House

> *Where Tradition Meets Timeless Elegance.*

A world-class, conversion-focused luxury ethnic fashion storefront built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn-style UI primitives**, and **Framer Motion**. Designed to feel like a premium fashion house — editorial, spacious, feminine — and engineered to be perfectly responsive from 320px to 2560px.

---

## 1. Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (53 static routes)
npm run start      # serve the production build
```

Requires Node 18.18+ (built & verified on Node 24).

---

## 2. Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack, RSC) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 + custom design tokens |
| UI primitives | shadcn-style (CVA `Button`, custom components) |
| Animation | Framer Motion (scroll reveals, mega menu, carousels) |
| Icons | lucide-react |
| Fonts | Cormorant Garamond (display serif) · Jost (body sans) via `next/font` |
| Images | `next/image`-ready; editorial gradient placeholders ship in the box |

---

## 3. Brand Design System

**Color palette** (`tailwind.config.ts`)

| Token | Hex | Use |
| --- | --- | --- |
| `pink.DEFAULT` | `#FF8DA7` | Primary accent, CTAs, highlights |
| `lavender.DEFAULT` | `#9993CF` | Secondary brand |
| `lavender.soft` | `#9C87CC` | Tertiary brand |
| `lavender.royal` | `#6D5D8E` | Eyebrows, deep accents |
| `lavender.mist` | `#EDEAF6` | Soft section backgrounds |
| `ink.DEFAULT` | `#0A0A15` | Luxury black — headings, dark sections |
| `cream` | `#FBFAF8` | Page background |
| `#FFFFFF` | white | Cards, contrast |

**Typography scale** — fluid `clamp()` tokens (`text-display-xl/lg/md`) keep the hero between 32–40px (mobile), 48–60px (tablet), and 64–80px (desktop) with no clipping. Body steps 14→16→18px.

**Reusable utilities** — `.container-luxe`, `.eyebrow`, `.link-underline`, `.placeholder-luxe`, and the `Reveal` motion wrapper enforce a consistent luxury rhythm across every section.

---

## 4. Sitemap & Architecture

```
/                         Home (17 editorial sections)
/collections/[slug]       Listing — filters + sorting (sarees, lehengas, bridal,
                          anarkalis, gowns, kurta-sets, co-ord-sets, new-arrivals,
                          festive, wedding, silk-edit, organza-edit, cotton-stories,
                          bridal-couture, handcrafted-luxury, signature, + occasions)
/product/[slug]           PDP — gallery + zoom, accordions, reviews, related, recently viewed
/about                    Brand story, founder note, vision/mission, values, timeline
/contact                  Channels (call/WhatsApp/email), form, store cards, map
/stores                   Interactive store locator (search, map, directions)
/sitemap.xml /robots.txt  Auto-generated SEO routes
```

**Folder structure**

```
src/
├─ app/
│  ├─ layout.tsx                 # fonts, metadata, announcement+header+footer shell
│  ├─ page.tsx                   # home — composes all sections + Organization JSON-LD
│  ├─ globals.css                # tokens, base styles, luxury utilities
│  ├─ collections/[slug]/page.tsx
│  ├─ product/[slug]/page.tsx
│  ├─ about | contact | stores/page.tsx
│  ├─ sitemap.ts | robots.ts | not-found.tsx
├─ components/
│  ├─ layout/      announcement-bar, header (+mega menu), mobile-menu, search-overlay, footer, logo
│  ├─ home/        hero, featured-collections, new-arrivals, shop-by-occasion, summer-campaign,
│  │               curated-collections, best-sellers, saree-showcase, bridal-showcase,
│  │               testimonials, brand-story, store-experience, instagram-gallery, newsletter
│  ├─ collection/  collection-view (filters + sort + mobile drawer)
│  ├─ product/     product-gallery, product-info, reviews, recently-viewed
│  ├─ contact/     contact-form
│  ├─ stores/      store-locator
│  └─ ui/          button, product-card, section-heading, page-header, placeholder-image, reveal
└─ lib/            types, data (mock catalogue), navigation, utils
```

**Server/Client split** — pages and static sections are Server Components; only interactive pieces (header, carousels, filters, forms, gallery zoom, wishlist) are `'use client'`. This keeps JS payload lean and Core Web Vitals green.

---

## 5. Home Page Sections (all 17 delivered)

Announcement bar (scrolling marquee) → Premium sticky header + mega menu → Hero → Featured Collections → New Arrivals → Shop by Occasion → Summer Crush Campaign → Curated Collections → Best Sellers (carousel) → Designer Saree Showcase (editorial) → Bridal Showcase → Testimonials (carousel) → Brand Story → Store Experience → Instagram Gallery → Newsletter (Inner Circle) → Luxury footer.

---

## 6. Responsive Strategy

- **Mobile-first** Tailwind breakpoints; verified visual targets 320 / 375 / 390 / 414 / 430 / 768 / 820 / 1024 / 1280 / 1366 / 1440 / 1600 / 1920 / 2560.
- `overflow-x: hidden` on `body` + `text-wrap: balance/pretty` prevent horizontal scroll, clipping, and orphan headings.
- Grids collapse predictably: 6→3→2 (collections), 4→2 (products/occasions), 12-col editorial → stacked.
- Aspect-ratio wrappers on **every** image surface eliminate CLS and distortion — swap `PlaceholderImage` for `next/image` at the same call site with zero layout change.
- Full-screen animated mobile menu (search, categories, wishlist, cart, account); filters become a slide-in drawer.

---

## 7. SEO Strategy

- Per-route `generateMetadata` (titles, descriptions, canonicals, OpenGraph/Twitter).
- Structured data: `ClothingStore` (home) + `Product` w/ `AggregateRating` & `Offer` (PDP).
- Auto `sitemap.xml` (all collections, occasions, products) + `robots.txt`.
- Semantic landmarks, skip-link, breadcrumb nav, descriptive `alt`/`aria-label`s, accessible focus rings.
- `next/font` with `display: swap`; AVIF/WebP image formats enabled.

---

## 8. Conversion Optimization

- Dual hero CTAs (Shop / New Arrivals) above the fold; persistent sticky header.
- Product cards: hover Quick View, one-tap wishlist, rating + review count, discount badges, compare-at pricing.
- PDP: sticky mobile Add-to-Bag, Buy-It-Now, trust row (free shipping / returns / secure), size guide, social proof reviews with rating breakdown.
- Scarcity & freshness cues (New / -% badges), Recently Viewed, Related Products, Best Sellers.
- Bridal lead-gen: "Book an Appointment" funnels to the contact form; newsletter Inner Circle capture.

---

## 9. Imagery

The build ships with branded editorial **gradient placeholders** (`components/ui/placeholder-image.tsx`) so the layout reads as fully designed. To go live with real photography:

1. Drop optimized assets into `/public` (or a CDN whitelisted in `next.config.mjs`).
2. Replace `<PlaceholderImage />` with `<Image fill sizes=... />` at each call site — wrappers already enforce aspect ratio.

**Recommended shots:** silk & organza saree drapes, bridal lehenga close-ups (zardozi detail), full-length lehenga twirls, anarkali movement, boutique interiors, editorial campaign portraits — all on a lavender/pink/ivory grade for a cohesive feed.

---

## 10. Animation Spec

Easing `cubic-bezier(0.22, 1, 0.36, 1)` throughout. Scroll reveals fade-up 28px / 0.7s, staggered 80ms. Mega menu 0.22s, overlays 0.25–0.3s, carousels spring to snap points. `whileInView` with `once: true` so animations fire once and never block scroll. Reduced, fast, premium — never gratuitous.

---

*Mock catalogue lives in `src/lib/data.ts` — wire it to your commerce backend (Shopify, Medusa, custom API) by swapping the data functions; component contracts stay identical.*
