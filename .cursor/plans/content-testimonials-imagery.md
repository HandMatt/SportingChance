# Content update and imagery

**Status:** Identified — brief only; **testimonials moved** to [testimonials-refresh.md](testimonials-refresh.md)  
**Priority:** Medium — page copy + pictures; imagery blocked on sourcing  
**Suggested branch:** `feature/content-and-imagery` from `develop` (copy) plus `feature/photo-strips` (grids — already parked, rebase onto rebrand when photos exist)

## Goal

Broader site **copy refresh** with Tony and new **pictures** once assets are sourced and cleared. Quote/testimonial work is tracked separately.

## Existing building blocks

- Images live under `static/img/` (mix of Unsplash stock and older site assets)
- Page Markdown under `content/` for copy edits

## Brief plan

1. **Copy pass with Tony** — Agree which pages need rewrites (home, about, services, ALP, mentoring, etc.) and collect final wording.
2. **Imagery** — List shots needed (hero, about, activity, team/partner). Arrange sourcing with Tony (own photos vs commissioned vs stock). Confirm model/parent consent and usage rights before committing files.
3. Implement approved copy in `content/`; drop cleared images into `static/img/` and wire paths in front matter / templates.
4. Visual QA on desktop and mobile; PR into `develop`. Delete this plan when shipped.

## Dependencies / sequencing

- Copy can land without new photos if needed.
- Picture work waits on sourcing + consent — do not block the copy PR on assets that are still outstanding.
- Testimonials: see [testimonials-refresh.md](testimonials-refresh.md).

## Open questions (defer to task kickoff)

- Full list of pages in scope for this pass
- Photo style (real provision photos preferred over more stock)
- Who stores originals / naming conventions for new assets
