# Rebrand / styling

**Status:** Direction locked 2026-08-17 — combined A + B + C  
**Priority:** Active  
**Suggested branch:** `feature/rebrand-styling` from `experiment/style-option-b` (leaflet + parallax already there)

## Goal

Printed-leaflet look with ALP-style depth and quiet scroll behaviour. Not a 100% A, B, or C merge — see [style-options-cherry-pick.md](style-options-cherry-pick.md) Keep list.

## Locked choices

- **Colours:** leaflet green / teal / purple. Teal is the site default (homepage, About, Contact, policies). Mentoring = green, Construction = teal, ALP = purple.
- **Type:** Montserrat headings.
- **Hero:** parallax photo, teal gradient washes, uppercase brand line, triangle edge, Explore chevron.
- **Motion:** parallax + icon-grid focus + scroll reveals. Interesting, not noisy. Soft homepage snap only. Honour `prefers-reduced-motion`.
- **Content from C:** mixed alignment, gutters, challenges icon list, back-to-top. Photo strips are parked on `feature/photo-strips` until real images exist.
- **Out:** SCP yellow / red / blue palette, C colour washes, tri-colour accent bars, watermarks, strong snap, C brand-cycling icon grid.

## Notes

- Leaflet bands stay a **maybe** — prefer B’s more transparent geometry over heavy stacked A panels on every generic page.
- **Carry-over from testimonials carousel:** on mobile the quote stage / type can feel a bit squashed (fixed height + long passages). Revisit spacing, stage height, and quote scale in this pass rather than blocking the content PR.

## Out of scope (for now)

- Photo strips / service-page image grids — parked on `feature/photo-strips`; wait for Tony’s images before merging
- Full detailed design system
