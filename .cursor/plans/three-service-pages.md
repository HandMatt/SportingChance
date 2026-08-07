# Three service pages (leaflet-aligned)

**Status:** Identified — do **before** homepage SCP banner  
**Priority:** High — structural/content prerequisite for clear signposting  
**Suggested branch:** `feature/three-service-pages` from `develop`  
**Copy source:** `Sporting Chance Project Leaflets (1).pdf` (3 pages)  
**Follows / blocks:** Blocks [homepage-scp-banner.md](homepage-scp-banner.md). Rebrand/styling is a later task.

## Goal

Align the site with the leaflet’s three pillars:

1. Mentoring & Life Skills  
2. Construction Workshops  
3. Alternative Learning (new page)

Wire nav + Services hub so each pillar has its own page and correct links.

## Context

- Site today: mentoring ✓; construction lives at `/alternative-learning-provision` titled “Vocational”; no dedicated Alternative Learning page.
- Naming collision: `/alternative-learning-provision` is construction content. Untangle when adding Alternative Learning.
- Leaflet ages/focus: Mentoring 5–18; Construction 14–18; Alternative Learning 5–18 (functional skills, cooking, money, animal care, sport, employability).

## Decisions / open questions (kickoff)

| Topic | Notes |
|-------|--------|
| Construction URL | Keep `/alternative-learning-provision` or move to `/construction-workshops` (+ redirect)? |
| New page slug | `/alternative-learning` (preferred if construction keeps or moves off the ALP slug) |
| Copy fidelity | Leaflet as source of truth for intros + “Our sessions include”; expand with existing page patterns |
| Cross-links | Mentoring ↔ Construction ↔ Alternative Learning on each page |
| SCP / education CTA | **Out of scope** — next plan (`homepage-scp-banner`) |

## Implementation plan

1. Retitle vocational page → Construction Workshops; optional URL rename + redirect.
2. Add Alternative Learning page (same templates: `generic-header`, `icon-grid`, `centred-text`, `cta-block`) from leaflet page 3.
3. Refresh Mentoring page from leaflet if needed (keep structure).
4. Update `config.toml` Services children → three items with correct labels/URLs.
5. Fix `content/services.md` three-columns + detail sections so links match the three pages.
6. Fix cross-links between the three service pages.
7. PR into `develop`; delete this plan when shipped.

## Out of scope

- Homepage SCP bar / education spin-off CTAs ([homepage-scp-banner.md](homepage-scp-banner.md))
- Visual rebrand / leaflet colour schemes per pillar
- Reciprocal banner on SCPCharity

## Done when

- [ ] Three service pages exist and match leaflet pillars
- [ ] Nav + Services hub list all three with correct links
- [ ] Old construction URL handled if renamed
- [ ] No SCP education CTA yet (that’s the next task)
- [ ] This plan file deleted after merge