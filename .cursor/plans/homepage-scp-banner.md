# Homepage banner → Supporting Children's Pathways

**Status:** Identified (Tony / Matt) — brief only; detailed planning when work starts  
**Priority:** Medium — cross-site signposting for the sister charity  
**Suggested branch:** `feature/homepage-scp-banner` from `develop`

## Goal

Add a clear banner at the **top of the homepage** that links visitors to the sister site **Supporting Children's Pathways** (sibling repo: [`SCPCharity`](https://github.com/HandMatt/SCPCharity), production URL: https://www.supportingchildrenspathways.org/).

## Context

- This site already has a homepage **hero** (`hero_banner` → `layouts/partials/hero-banner.html`). The new item is a separate **top-of-page site notice / signpost**, not a hero redesign.
- Sister site is a different Hugo project under `/home/matt/development/work/SCPCharity`.

## Brief plan

1. Agree copy with Tony (one short line + CTA label) and confirm the destination URL (home vs a specific landing page).
2. Add a slim full-width banner above the main nav (or between nav and hero — decide at kickoff for visibility vs clutter).
3. Homepage-only unless Tony wants it site-wide; prefer content/config driven (front matter or `config.toml` params) over hardcoding in the template.
4. Match existing Tailwind / `sc-*` brand tokens; keep it one job (signpost), no card clutter.
5. Check mobile: dismissible or not (default: not dismissible unless requested); link opens in same or new tab (confirm).
6. PR into `develop`; delete this plan when shipped.

## Open questions (defer to task kickoff)

- Exact wording and visual weight (subtle bar vs stronger callout)
- Homepage only vs all pages
- Whether SCP should reciprocate with a banner back to Sporting Chance
