# HANDOFF — Hila Landing Page

## Goal
Hebrew RTL photography portfolio for הילה. Current task: integrate client-provided
"מה ללבוש לצילומים" styling guide text as a designed section.

## Completed
- [x] New `StylingGuide` section (`src/components/StylingGuide.jsx`) — editorial layout:
  serif pull-quote ("שיהיה נוח. באמת נוח."), body copy, two seasonal palette cards with
  real OKLCH color swatches (summer/spring + autumn/winter), personal note from Hila
  with WhatsApp CTA, closing statement 🤍
- [x] Swatch cascade animation (`.palette-swatch` in `src/index.css`) — staggered
  reveal right→left, follows existing `.service-inset` pattern, respects
  `prefers-reduced-motion`
- [x] Placed between Packages and Contact in `App.jsx` (demonstrates the
  "ליווי והכוונה" promise from Packages, bridges into contact form)
- [x] Navbar: added "מה ללבוש" link (#styling) + fixed pre-existing 768px tightness
  (logo 200px at md, graduated gaps gap-5/lg:gap-8/xl:gap-10, whitespace-nowrap)
- [x] Verified: lint clean, production build clean, Playwright screenshots at
  375/768/1280 — no overflow, no wrapping, swatches fit one row on desktop
- [x] Em/en-dash cleanup across ALL visible site copy (user: dashes scream AI slop):
  StylingGuide, Services (6 paragraphs), About, Testimonials quote, Packages,
  Contact select option. Replaced with colons/commas/periods. Only code comments
  still contain em-dashes (invisible to visitors). Rule going forward: NO em-dashes
  in any user-facing Hebrew copy on this site.

## Key Decisions
- **Placement after Packages**: Packages promises "ליווי והכוונה לפני הצילומים" —
  this section demonstrates it, then flows into Contact
- **Color swatches as the visual signature**: palette colors rendered as real dots
  (muted OKLCH tones harmonized with site palette) — unique moment, no other section
  uses color as content
- **Section bg**: `bg-dusty-rose` (warm tan) between two white sections (Packages/Contact)

## Content Edits vs Client's Original Text (flag to client if needed)
- Title shortened: "איך בוחרים מה ללבוש לצילומים?" → "מה ללבוש לצילומים?"
- "תשלחי לי" → "תשלחו לי" (normalized to plural, matching the rest of her text)
- 🎨 emoji dropped from "פלטת צבעים" heading (swatches replace it visually)
- "וכו…" → "ועוד…" at end of winter items list
- Personal note ("תשלחו לי אופציות") moved after the palette cards as bridge-to-CTA
- "שמלות קלילות שמתנופפות ברוח..." placed as summer card footer (belongs there contextually)

## Known Issues
- Pre-existing: `tracking-wider` on Hebrew text in Packages.jsx:78 (letter-spacing
  violates Hebrew typography rules) — not touched, out of scope
- Playwright screenshots: use `channel: 'chrome'` + NODE_PATH to npx cache
  (`C:\Users\User\AppData\Local\npm-cache\_npx\e41f203b7505f1fb\node_modules`) —
  bundled browsers for local playwright versions are not installed

## Next Steps
1. Show client the new section, confirm content edits listed above
2. Merge `feature/styling-guide-section` → `main` after approval
3. Consider fixing the pre-existing `tracking-wider` in Packages.jsx

## Important Files
- `src/components/StylingGuide.jsx` — the new section (all content as module constants)
- `src/index.css` — `.palette-swatch` animation block
- `src/App.jsx` — section composition order
- `src/components/Navbar.jsx` — nav links array + responsive sizing

## Branch
Work is on `feature/styling-guide-section` (a hook blocks edits on main).
Dev server: `npm run dev` → http://localhost:5173
