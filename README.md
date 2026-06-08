# NEXUS AI — B2B Agency Website

> "Where Brands Become Cinema."

A production-quality, cinematic B2B agency website for **NEXUS AI** — an AI-powered ad generation studio based in Dubai/Sharjah, UAE. The site is designed to attract premium brand clients seeking AI-generated commercials, brand films, and campaign content.

---

## Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| Framework    | React 19 + Vite 8                 |
| Routing      | React Router v6 (multi-page SPA)  |
| Animations   | Framer Motion                     |
| Styling      | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) |
| Icons        | Lucide React                      |
| Typography   | Google Fonts (`@import` in CSS)   |
| Forms        | Formspree (external submission)   |

---

## Brand & Visual Identity

- **Base color:** `#080808` (near-black)
- **Primary accent:** `#C8A96E` (warm gold)
- **Secondary:** `#FFFFFF` (white text)
- **Card/section fills:** `#1a1a1a`, `#111111`
- **Typography:**
  - Display/Hero → `Bebas Neue`
  - Sub-headings → `Space Grotesk` (700)
  - Body → `Inter` (400, 500)
  - Labels/Mono → `JetBrains Mono`
- **Aesthetic:** Luxury film studio meets AI tech company. Dark, editorial, premium.

---

## Pages (5 total)

| Route       | Page     | Description                                                        |
|-------------|----------|--------------------------------------------------------------------|
| `/`         | Home     | Hero with animated headline, services grid, portfolio teaser, process steps, testimonials |
| `/services` | Services | 6 detailed service blocks with alternating layouts, deliverables   |
| `/work`     | Work     | Filterable 9-card portfolio grid (placeholder visuals)             |
| `/about`    | About    | Studio philosophy, stats, team cards, belief statements            |
| `/contact`  | Contact  | Info panel + Formspree-powered contact form with success state     |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed glassmorphism nav, mobile hamburger, scroll-aware
│   ├── Footer.jsx          # 3-column footer, social links, copyright
│   ├── CustomCursor.jsx    # Gold circular cursor, hover scale, hidden on touch
│   ├── MarqueeStrip.jsx    # Infinite scrolling service categories with fade edges
│   └── PageTransition.jsx  # Framer Motion fade wrapper for route transitions
├── pages/
│   ├── Home.jsx            # Full homepage with all sections
│   ├── Services.jsx        # Service blocks with deliverables
│   ├── Work.jsx            # Portfolio grid with filter tabs
│   ├── About.jsx           # Studio info, team, beliefs
│   └── Contact.jsx         # Contact form + info panel
├── App.jsx                 # Router setup + AnimatePresence
├── main.jsx                # Entry point with BrowserRouter
└── index.css               # Tailwind, Google Fonts, utilities, animations
```

---

## Key Implementation Details

### Animations (Framer Motion)
- **Hero headline:** Letter-by-letter entrance with 3D rotation (`rotateX`)
- **Section headings:** Fade + slide up triggered by `useInView`
- **Cards:** Staggered entrance with cascading delays
- **Page transitions:** `AnimatePresence` with fade in/out between routes
- **Process steps:** Sequential reveal on scroll
- **Nav indicator:** Animated underline using `layoutId`

### CSS Utilities (defined in `index.css`)
- `.btn-primary` / `.btn-secondary` — Rounded buttons with gradient, glow on hover
- `.card-hover` — Lift + shadow transition on hover
- `.grid-pattern` — Subtle gold grid lines as background texture
- `.spotlight` — Radial gradient glow from top
- `.section-divider` — Horizontal gradient line between sections
- `.glow-gold` / `.glow-gold-strong` — Box-shadow glow utilities
- `.text-glow-gold` — Text shadow glow
- `.noise-overlay` — Film grain SVG texture overlay (fixed, pointer-events: none)
- `.animate-marquee` — Infinite horizontal scroll animation

### Custom Cursor
- Follows mouse with CSS transition (no JS `requestAnimationFrame` needed)
- Scales up on hoverable elements (links, buttons)
- Hidden on touch devices via `(pointer: coarse)` media query
- Uses `MutationObserver` to detect dynamically added elements

### Contact Form
- Posts to Formspree (`https://formspree.io/f/YOUR_ID`)
- **Replace `YOUR_ID`** with your actual Formspree form ID before going live
- Shows confirmation message on successful submission
- Fields: Company, Role, Email, Campaign Type (dropdown), Brief (textarea)

### Responsive Design
- Mobile-first grid layouts that collapse to single column
- Hamburger menu with animated entrance on mobile
- All font sizes scale between mobile/desktop breakpoints
- Touch device awareness (cursor hidden, appropriate tap targets)

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## What's Left / Next Steps for New Developer

1. **Replace Formspree ID** — In `src/pages/Contact.jsx`, replace `YOUR_ID` with your real Formspree form ID
2. **Add real portfolio images** — Replace CSS gradient placeholders in Work cards with actual project screenshots/videos
3. **Add client logos** — Replace the 6 placeholder boxes in the Home testimonials section
4. **Add real testimonials** — Update quotes, company names, and industries with real client feedback
5. **SEO & Meta** — Add Open Graph tags, structured data, and per-page meta descriptions (consider `react-helmet-async`)
6. **Analytics** — Add Google Analytics or Plausible tracking
7. **Custom domain** — Deploy to Vercel/Netlify and connect `nexusai.studio` domain
8. **Favicon** — Replace the default Vite favicon with a custom NEXUS AI logo
9. **Performance** — Consider lazy-loading pages with `React.lazy()` + `Suspense`
10. **Accessibility** — Add `aria-label` attributes to interactive elements, ensure contrast ratios pass WCAG

---

## Design Decisions & Notes

- **No images used** — All visual placeholders are pure CSS gradients + patterns. This keeps the repo lightweight and load time instant. Real assets should be optimized (WebP, lazy-loaded).
- **Tailwind v4 with `@theme`** — Colors and fonts are defined using the new `@theme` directive in `index.css`, not a `tailwind.config.js` file. This is the Tailwind v4 approach.
- **No `tailwind.config.js`** — All configuration lives in `src/index.css` under `@theme { }`.
- **Lucide React icon names** — Some icon names (like `Instagram`, `Linkedin`) don't exist in newer Lucide versions. We use `ExternalLink` as a fallback. Check exports before adding new icons.
- **Gold color usage** — The gold (`#C8A96E`) is used sparingly: accents, buttons, highlights. Never as a background fill for large areas. This maintains the luxury feel.

---

## License

Private project. All rights reserved by NEXUS AI.
