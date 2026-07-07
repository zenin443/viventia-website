# Vivential Real Estate — Premium Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a 10,000-level luxury real estate website for Vivential Real Estate — Dubai brokerage + property management + international owner services. Live-grade, production-ready.

**Architecture:** Next.js 16 App Router · Tailwind CSS · Framer Motion (animations) · Lucide React (SVG icons) · Cinzel + Josefin Sans (Google Fonts). Single-page with section routing. Fully responsive at 375/768/1024/1440px.

**Design System (UI/UX Pro Max output):**
- Style: Exaggerated Minimalism + Liquid Glass hybrid
- Typography: Cinzel (headings, serif luxury) + Josefin Sans (body, clean modern)
- Colors: Dark luxury (#07090f bg) · Gold (#c9a84c) · Warm white text (#f5f0e8)
- Effects: Oversized hero text clamp(60px,9vw,130px) · Frosted glass nav · Backdrop blur cards · Counter animations · Hover image zoom

---

## File Structure

```
src/
  app/
    layout.tsx          — fonts, metadata, global CSS import
    page.tsx            — page assembly
    globals.css         — design tokens, base styles, animations
  components/
    Navbar.tsx          — frosted glass, sticky, mobile drawer
    Hero.tsx            — fullscreen, parallax, oversized Cinzel headline
    Marquee.tsx         — infinite location ticker
    Services.tsx        — Buy · Sell · Manage three-pillar layout
    Properties.tsx      — featured listings grid with image zoom
    International.tsx   — international owner flow (the differentiator)
    Stats.tsx           — animated count-up statistics
    HowItWorks.tsx      — numbered process steps
    Areas.tsx           — Dubai neighborhoods served
    Testimonials.tsx    — client quote cards
    Contact.tsx         — premium 4-field form + WhatsApp
    Footer.tsx          — full nav, legal, social links
  lib/
    animations.ts       — shared Framer Motion variants
```

---

## Task 1: Install Dependencies + Design System Foundation

- [ ] Install framer-motion and lucide-react
```bash
cd vivential-website && npm install framer-motion lucide-react
```

- [ ] Write `src/app/globals.css` with full design token set:
  - CSS variables for all colors, typography, spacing
  - Cinzel + Josefin Sans Google Fonts import
  - Base reset, scrollbar, selection styles
  - Keyframe animations: fadeUp, fadeIn, shimmer, marquee, countUp

- [ ] Write `src/lib/animations.ts` with Framer Motion variants:
  - `fadeUpVariant` — y:40 → y:0, opacity 0→1
  - `staggerContainer` — staggerChildren: 0.1
  - `scaleOnHover` — scale 1→1.03

- [ ] Update `src/app/layout.tsx` with Cinzel + Josefin Sans, full metadata, OG image placeholder

---

## Task 2: Navbar — Frosted Glass Premium

- [ ] Build `Navbar.tsx`:
  - Transparent on load, frosted glass (backdrop-blur-xl) on scroll
  - Logo: SVG "V" mark + "Vivential" in Cinzel + "Real Estate" small caps
  - Desktop links: Buy & Sell · Management · International · Contact
  - CTA: gold "List Your Property" button with subtle glow
  - Mobile: hamburger → full-screen overlay drawer (not dropdown)
  - Framer Motion: fade-in on mount, smooth height transition on scroll

---

## Task 3: Hero — Fullscreen Luxury Statement

- [ ] Build `Hero.tsx`:
  - Full viewport height (100svh)
  - Dark gradient overlay on a high-quality Dubai skyline/property background
  - Use CSS `background-image` with a premium unsplash-style gradient placeholder (real photo slot)
  - **Oversized Cinzel headline:** `clamp(60px, 9vw, 130px)`, letter-spacing -3px
  - Two-line headline: "DUBAI PROPERTY" / "MANAGED GLOBALLY"
  - Subtext in Josefin Sans 400 weight, warm white 55% opacity
  - Two CTAs side by side: "Explore Properties" (gold) + "Manage My Property" (ghost)
  - Scroll indicator: animated chevron-down bouncing
  - Subtle parallax on headline via Framer Motion useScroll + useTransform
  - Gold horizontal rule line that animates width 0→100% on load

---

## Task 4: Marquee — Location Ticker

- [ ] Build `Marquee.tsx`:
  - Infinite horizontal scroll ticker
  - Text: "DUBAI · PALM JUMEIRAH · DOWNTOWN DUBAI · DUBAI MARINA · JVC · BUSINESS BAY · DIFC · ARABIAN RANCHES · CREEK HARBOUR · MBR CITY"
  - Gold separator dots between items
  - CSS animation `marquee` keyframe, `animation-duration: 30s, linear, infinite`
  - Gradient fade masks on left and right edges
  - Border top and bottom: 1px solid rgba(201,168,76,0.15)

---

## Task 5: Services — Three Pillars

- [ ] Build `Services.tsx`:
  - Section header: "WHAT WE DO" eyebrow + large Cinzel headline
  - Three full-width alternating sections (not cards):

  **Pillar 1 — Buy & Sell:**
  - Left: large section number "01" in gold outline font + headline + body
  - Right: grid of property type badges (Residential · Commercial · Off-Plan · Investment)
  - Hover: gold underline slide animation on headline

  **Pillar 2 — Property Management:**
  - Right: large "02" + headline + body
  - Left: vertical list of services with gold dot markers

  **Pillar 3 — International Owners:**
  - Left: large "03" + headline + body
  - Right: flow diagram (Tenant → Vivential → Landlord abroad) with animated connecting lines

  Each pillar: Framer Motion `whileInView` fade-up with 0.2s stagger

---

## Task 6: Properties — Featured Listings Showcase

- [ ] Build `Properties.tsx`:
  - Section header: "FEATURED LISTINGS" eyebrow + Cinzel headline
  - 3×2 masonry-style grid on desktop, 1-col on mobile
  - Each property card:
    - Full image (use CSS gradient placeholder in gold/dark palette)
    - Hover: image zooms 1.05 scale (300ms transition)
    - Overlay: gradient dark → transparent from bottom
    - Tag: "FOR SALE" / "FOR RENT" / "OFF-PLAN" badge in gold
    - Property name (Cinzel), location (Josefin Sans), price range
    - Bedroom/bathroom/sqft row with Lucide icons (Bed, Bath, SquareFootprint)
  - "View All Properties" CTA button centered below grid
  - Note in code: replace placeholder gradients with real property images

---

## Task 7: International Owners — The Differentiator

- [ ] Build `International.tsx` — premium treatment:
  - Full-bleed dark section with gold gradient overlay
  - Large eyebrow: "INTERNATIONAL OWNERS"
  - Split layout: left text, right visual flow

  **Left:**
  - Cinzel headline: "Your Dubai income. Your bank account. Anywhere."
  - Body: two short paragraphs about international disbursement
  - Three settlement badges: 🇺🇸 USD Wire · 🇬🇧🇪🇺 SWIFT · ₮ USDT/USDC
  - CTA: "Learn More" → scrolls to contact

  **Right:** Animated 3-step flow visual:
  ```
  [Tenant] → [Vivential Vault] → [Your Bank / Wallet]
  ```
  Each step is a card with connecting animated gold line (CSS stroke animation)
  - Step cards: frosted glass (backdrop-blur) on dark background

---

## Task 8: Stats — Animated Counters

- [ ] Build `Stats.tsx`:
  - Four stats in a horizontal strip
  - Each stat: large Cinzel number (count-up animation on viewport entry) + label
  - Stats: "500+" Properties · "12" Dubai Areas · "US · EU · UK" International Reach · "RERA" Licensed
  - Count-up: custom React hook `useCountUp(target, duration)` using `requestAnimationFrame`
  - Thin gold border-bottom on each stat block
  - Background: slightly lighter than page bg, full-bleed

---

## Task 9: How It Works — Process Steps

- [ ] Build `HowItWorks.tsx`:
  - Section header: "HOW IT WORKS" eyebrow + Cinzel headline
  - For each service type, tabs: "Buy & Sell" | "Property Management" | "International Owners"
  - Active tab: gold underline, Framer Motion layout animation
  - Steps per tab (3–4 steps):
    - Large step number (Cinzel, outlined/ghost style in gold)
    - Step title (Cinzel, 24px)
    - Step description (Josefin Sans, muted)
    - Vertical connector line between steps (animated on tab switch)
  - Framer Motion `AnimatePresence` for tab content transition

---

## Task 10: Areas — Dubai Neighborhoods

- [ ] Build `Areas.tsx`:
  - Section header: "WHERE WE OPERATE"
  - Horizontal scrollable row of area cards (snap scroll)
  - Each area card: dark card, area name in Cinzel, one-line description
  - Areas: Downtown Dubai · Dubai Marina · Palm Jumeirah · Business Bay · JVC · Arabian Ranches · DIFC · Creek Harbour · JBR · MBR City
  - Custom scrollbar hidden, scroll with mouse drag (cursor: grab)
  - Framer Motion `drag="x"` on the container

---

## Task 11: Testimonials — Social Proof

- [ ] Build `Testimonials.tsx`:
  - Section header: "CLIENT STORIES"
  - Three quote cards in a grid (2+1 on desktop, 1-col mobile)
  - Each card: frosted glass background, gold opening quotation mark (large Cinzel), quote text, client name + title + flag
  - Clients: international owner perspectives (US investor, UK landlord, EU buyer)
  - Card hover: subtle gold border glow

---

## Task 12: Contact — Premium Form

- [ ] Build `Contact.tsx`:
  - Two-column: left info + right form
  - Left:
    - Cinzel headline: "Let's work together"
    - Four info rows: Email · Location · RERA License · Response time
    - WhatsApp CTA button: "Chat on WhatsApp" with WhatsApp SVG icon (Lucide)
  - Right form (4 fields):
    - Name · Email · Service (dropdown with 5 options) · Message
    - All inputs: dark bg, gold focus border, Josefin Sans placeholder
    - Submit: full-width gold gradient button "Send Message"
    - Success state: animated checkmark + confirmation message
  - Form validation: HTML5 required + email type
  - Note: wire up to EmailJS or Formspree in production

---

## Task 13: Footer — Full Navigation

- [ ] Build `Footer.tsx`:
  - Three-column layout:
    - Col 1: Logo + tagline + social icons (LinkedIn, Instagram, WhatsApp — Lucide SVGs)
    - Col 2: Services links (Buy, Sell, Long-term, Short-term, International)
    - Col 3: Company links (About, Areas, Careers, Privacy, Terms)
  - Bottom bar: copyright + RERA license number + "Dubai Land Department Registered"
  - Full-bleed, slightly lighter than page bg, gold top border line

---

## Task 14: Page Assembly + Performance

- [ ] Update `page.tsx` with all components in order
- [ ] Add `loading="lazy"` hints where applicable
- [ ] Add `prefers-reduced-motion` CSS rule to disable animations
- [ ] Verify responsive breakpoints at 375, 768, 1024, 1440px
- [ ] Run `npm run build` — fix all TypeScript errors
- [ ] Verify no emojis in UI (use Lucide SVGs only)
- [ ] Verify `cursor-pointer` on all clickable elements
- [ ] Verify hover states with 150–300ms transitions throughout

---

## Pre-Delivery Checklist (UI/UX Pro Max)

- [ ] No emojis as icons — Lucide SVGs only
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states: smooth transitions 150-300ms
- [ ] Text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px tested

---

## Deployment

```bash
npm run build        # Verify clean build
vercel --prod        # Deploy to Vivential's Vercel project
# Or: drag vivential-website folder to vercel.com
```

Custom domain: `viventialrealestate.com` → point CNAME to vercel's DNS
