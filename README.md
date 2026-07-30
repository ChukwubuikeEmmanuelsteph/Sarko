# Sarko — React + Vanilla CSS clone

## Run it
```
npm install
npm run dev
```
Open http://localhost:5173

## Folder structure
```
sarko/
  index.html
  vite.config.js
  package.json
  public/
    images/          ← put your image files here (see below)
  src/
    main.jsx
    App.jsx
    styles/
      variables.css   design tokens (colors, spacing, type scale)
      global.css      reset + .container, .btn, .reveal, .gradient-text
    components/
      Navbar/
      Hero/
      Services/
      About/
      Partners/
      Stats/
      Testimonials/
      CTA/
      Footer/
```
Each component folder has a matching `.jsx` and `.css` file, imported directly
into the component (no CSS Modules — classes are prefixed per component to
avoid collisions, e.g. `.hero__card`, `.services__card`).

## One thing left: images
The code references these paths but no image files exist yet — you'll see
broken image icons until you add real files:
- `/public/images/hero-bg.jpg`
- `/public/images/about-team.jpg`
- `/public/images/stats-team.jpg`
- `/public/images/cta-bg.jpg`
- `/public/images/avatar-1.jpg`, `avatar-2.jpg`
- `/public/images/testimonial-1.jpg`, `testimonial-2.jpg`, `testimonial-3.jpg`

Drop matching photos into `public/images/` with those exact filenames and
they'll show up immediately — Vite serves anything in `public/` at the root path.

## What I fixed from the pasted code
- **Navbar** didn't exist at all — built it from your screenshot (logo, 5 nav
  links, Get Started button, mobile hamburger with slide-in menu).
- **Hero.jsx** was missing (only `Hero.css` was provided) — built it from the
  screenshot copy and the 3-card layout.
- **Services.jsx**'s `.map()` render was cut off / malformed — rewritten so
  each card actually renders its icon, title, description, and link.
- **Stats.jsx**'s progress ring computed `circumference`/`offset` but never
  applied them to the SVG circle, so the rings would've rendered as plain
  static circles — added the second `<circle>` with `strokeDasharray`/
  `strokeDashoffset` so they actually show 95%/75% progress.
- **variables.css** didn't exist — every component's CSS references `var(--space-4)`
  etc., so I built the token file the rest of the CSS depends on.
