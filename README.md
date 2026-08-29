# PixelCraft Studio

A single-page conversion-focused landing site for a fictional web design & development agency. This is a concept/demo project — all content, client names, and stats are placeholders.

**Tagline:** "We build websites that convert."

## Overview

PixelCraft Studio is a landing page that persuades visitors to contact the agency and hire them for web design, development, and digital projects. Built as a static React/Vite single-page site with scrollable sections that guide the visitor toward reaching out.

## Sections

- Hero
- Services
- About
- Portfolio
- Testimonials
- CTA
- Footer

## Tech Stack

- React 19 + Vite
- CSS Modules for scoped, component-level styles
- Bootstrap Icons
- Google Fonts (Bricolage Grotesque, IBM Plex Sans, JetBrains Mono)
- Light/dark theme toggle (persisted via `localStorage`, FOUC-safe)
- Custom `ScrollReveal` component for scroll-triggered animations
- Fully responsive

## Getting Started

```bash
pnpm install
pnpm dev      # start the dev server
pnpm build    # production build
pnpm preview  # preview the production build
pnpm lint     # run ESLint
```

## Project Docs

- `PRODUCT.md` — product brief, positioning, and principles
- `DESIGN.md` — design system and visual details
