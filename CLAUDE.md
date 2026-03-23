# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hebrew RTL photography portfolio for "הילה" (Hila). Single-page React app with hardcoded content (no CMS/API). All UI text is in Hebrew.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run lint     # ESLint (flat config, ESLint 9)
```

## Tech Stack

- **React 19** with JSX (no TypeScript)
- **Vite 8** with `@vitejs/plugin-react`
- **Tailwind CSS 4** via `@tailwindcss/vite` — theme defined in `@theme` block in `src/index.css`, not a separate config file
- **Google Fonts**: Frank Ruhl Libre (serif, headings) + Heebo (sans, body) — loaded in `index.html`

## Architecture

Single-page app. `App.jsx` composes all sections in order: Navbar → Hero → About → Services → Gallery → Testimonials → Contact → Footer. Each section is a standalone component in `src/components/`. No routing, no state management, no API calls.

Content data (services list, gallery images, testimonials) is defined as module-level constants inside each component.

## Hebrew / RTL Rules

These are **mandatory** — violating them breaks the design:

- `dir="rtl"` and `lang="he"` are set on `<html>` in `index.html`
- **CSS logical properties only** — use `inset-inline-start` not `left`, `margin-block-start` not `margin-top`, etc.
- **No `letter-spacing`** on Hebrew text (breaks letter connections)
- **No `font-style: italic`** on Hebrew text (renders poorly)
- **No `text-transform: uppercase`** (Hebrew has no case distinction)
- Line-height: 1.7 for body, 1.4 for headings
- Font weight 300 (light) is the default aesthetic — keep it elegant, not bold

## Design System

Colors use OKLCH format and are registered as Tailwind theme tokens in `src/index.css`:
- `cream`, `cream-dark`, `sand` — warm light backgrounds
- `taupe` — muted text/secondary
- `warm-brown` — hover/accent states
- `charcoal` — primary text
- `soft-black` — headings, dark backgrounds
- `off-white` — page background

Use these as Tailwind classes: `bg-cream`, `text-charcoal`, `hover:text-warm-brown`, etc.

## Placeholder Content

- Images are from Unsplash CDN URLs — replace with real photos
- WhatsApp number is `972500000000` in `Contact.jsx` — update to real number
- Instagram link points to `https://instagram.com` — update to real profile
