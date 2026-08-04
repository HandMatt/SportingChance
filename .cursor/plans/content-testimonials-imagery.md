# Content update, testimonials, and imagery

**Status:** Identified (Tony / Matt) — brief only; detailed planning when work starts  
**Priority:** Medium — refresh site copy and social proof; imagery blocked on sourcing  
**Suggested branch:** `feature/content-and-testimonials` from `develop` (split imagery into a follow-up PR if photos arrive late)

## Goal

Update site content with Tony, add/refresh **testimonials**, and bring in new **pictures** once assets are sourced and cleared for use.

## Existing building blocks

- Testimonials page: `content/Testimonials.md` (uses `feedback-quote` sections)
- Quote block: `layouts/partials/blocks/feedback-quote.html`
- Homepage / about / services already embed some quotes via the same template
- Images live under `static/img/` (mix of Unsplash stock and older site assets)

## Brief plan

1. **Copy pass with Tony** — Agree which pages need rewrites (home, about, services, ALP, mentoring, etc.) and collect final wording.
2. **Testimonials** — Gather new quotes (attribution, consent, anonymisation rules). Add to `/testimonials` and decide which appear on home / key service pages.
3. **Imagery** — List shots needed (hero, about, activity, team/partner). Arrange sourcing with Tony (own photos vs commissioned vs stock). Confirm model/parent consent and usage rights before committing files.
4. Implement approved copy + quotes in `content/`; drop cleared images into `static/img/` and wire paths in front matter / templates.
5. Visual QA on desktop and mobile; PR into `develop`. Delete this plan when shipped.

## Dependencies / sequencing

- Content and testimonials can land without new photos if needed.
- Picture work waits on sourcing + consent — do not block the copy PR on assets that are still outstanding.

## Open questions (defer to task kickoff)

- Full list of pages in scope for this pass
- Whether old testimonials stay, get edited, or are replaced
- Photo style (real provision photos preferred over more stock)
- Who stores originals / naming conventions for new assets
