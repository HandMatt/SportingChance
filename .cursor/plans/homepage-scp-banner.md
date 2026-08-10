# Homepage banner → Supporting Children's Pathways

**Status:** Ready to implement — three service pillars + education CTAs have shipped  
**Priority:** Medium — cross-site signposting for the sister charity  
**Suggested branch:** `feature/homepage-scp-banner` from `develop`  
**Depends on:** Done (Mentoring, Construction, Alternative Learning live)  
**Follows / precedes:** Before rebrand/styling.

## Goal

1. **Homepage** — subtle top bar → Supporting Children's Pathways  
   (https://www.supportingchildrenspathways.org/).
2. **SCP reciprocal banner** — out of scope; separate SCPCharity task.

## Context

- Service-page and homepage **Education provision** CTAs already ship on the three-pillars work; this task is the slim top-of-page bar only.
- Homepage already has a **hero**; this is a separate **slim site notice**, not a hero redesign.
- Nav is `fixed top-0`; hero uses `margin-top: 4.8rem`. Prefer bar **inside the fixed header stack**.
- Visual polish / rebrand is a later task — keep this shippable with existing `sc-*` tokens.

## Decisions (kickoff)

| Topic | Decision |
|-------|----------|
| Visual weight | Subtle full-width bar |
| CTA label | Learn more |
| Homepage bar | Homepage only |
| Education CTA | On **all three** service pages (stronger than the slim bar) |
| Dismissible | No |
| SCP reciprocal | Later — SCPCharity task |
| Destination URL | https://www.supportingchildrenspathways.org/ |

### Copy drafts (Tony)

Homepage bar:

1. Education provision is now with Supporting Children's Pathways. [Learn more]
2. Looking for education provision? Visit Supporting Children's Pathways. [Learn more]
3. Our education charity is Supporting Children's Pathways. [Learn more]

Service-page CTA: slightly fuller — spin-off / education provision → Learn more → SCP.

### Still confirm before build

1. Final wording.
2. Same tab vs new tab (`target="_blank"` + `rel="noopener"` recommended).

## Implementation plan

1. Agree final copy with Tony.
2. Slim banner partial; homepage-only via front matter / params; fix header/hero offsets.
3. Shared education CTA on Mentoring, Construction, and Alternative Learning pages.
4. Match existing Tailwind / `sc-*`; one job (signpost); no rebrand in this PR.
5. PR into `develop`; delete this plan when shipped.
6. File reciprocal banner task on SCPCharity.

## Out of scope

- Creating/renaming the three service pages (prior plan)
- Rebrand / per-pillar leaflet styling (later plan)
- Reciprocal banner on supportingchildrenspathways.org
- Hero redesign; site-wide notice; dismissible behaviour

## Done when

- [ ] Homepage subtle bar + Learn more → SCP
- [ ] Each of the three service pages has education CTA → SCP
- [ ] Offsets OK on desktop and mobile
- [ ] SCP reciprocal task noted elsewhere
- [ ] This plan file deleted after merge