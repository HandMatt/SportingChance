# Testimonials refresh (+ carousel)

**Status:** In progress — implementing on `feature/testimonials-refresh`  
**Priority:** Medium — next (OneDrive policies on hold)  
**Branch:** `feature/testimonials-refresh` from `develop`

## Goal

Publish new professional and family testimonials with privacy-safe naming, and add a **carousel** on the homepage and `/testimonials`. Imagery / broader copy stay in [content-testimonials-imagery.md](content-testimonials-imagery.md).

## Existing building blocks

- Page: `content/Testimonials.md` — three `feedback-quote` sections + “More testimonials coming soon”
- Block: `layouts/partials/blocks/feedback-quote.html` — one quote per section (stacked)
- Same block reused on homepage (`content/_index.md`), About, Services
- JS: `src/js/main.js` is CSS-only today — **no carousel library** yet

## Locked decisions

| # | Decision |
|---|----------|
| 1 | **Carousel** shows the **three CAMHS extracts** (A1–A3). **Full letter** appears on `/testimonials` (below or after the carousel, not as a carousel slide). |
| 2 | **Attribution:** role + personal name when available. CAMHS extracts currently have **roles only** → use role as `name` / caption; add a personal name later only if provided. |
| 3 | **Keep** existing quotes (Mrs K, Cory N, Cory O) but **newest first** — new content before legacy. Obfuscate legacy names a little more (see naming rules). |
| 4 | **Carousel** on **homepage** and **`/testimonials`**. |
| 5 | In quote body and attribution, **first names → first letter only** (e.g. Hazel → H, Liane → L). |

## Naming / privacy rules

Apply everywhere quotes are published (carousel slides, full letter, legacy quotes):

- **Young people / parents / mentors in prose:** first initial only — `H`, `W`, `L`, `J` (for Jordan in the full letter), etc.
- **Attribution lines:** same rule — e.g. `L` (not Liane); `B, R and W` (not Becky, Rick and Will).
- **Legacy:** tighten slightly — e.g. `Mrs K` → keep surname initial style; `Cory N` / `Cory O` → `C. N.` / `C. O.` (or `C` + caption if preferred at implement time).
- **Roles** stay in full (Nurse Prescriber / Clinical Nurse Specialist, etc.).

## Content (as published)

### A. CAMHS / young persons wellbeing (professional)

**Carousel slides (A1–A3)** — newest block; order as listed:

| # | Quote | Attribution |
|---|-------|-------------|
| A1 | I feel that Sporting Chance Project through their positive and trusting relationship with the young person gave me the opportunity to support and advocate for the young person in their engagement and assessment with CAMHS | Nurse Prescriber / Clinical Nurse Specialist |
| A2 | Mentors were approachable, positive, professional and created a trusting relationship with the young person, parents and other professionals in the network | Fellow professional |
| A3 | Thank you for your support and professional approach, commitment and dedication as an individual and as a team to really advocate and support a positive experience and relationship with them and also myself as a professional. Really amazing to have been able to be part of the journey and supporting my role with the young person, family and network | Neurodevelopmental Specialist Community Public Health Nurse |

**Full letter on `/testimonials` only** — redact first names to initials (e.g. Jordan → J). Use the source letter from Tony; do not invent wording. Optional small heading e.g. “Full feedback from a CAMHS / wellbeing professional”.

### B. Family — boxing (attribution: `L`)

Obfuscate `Hazel` → `H` in body.

| # | Notes |
|---|-------|
| B1 | Thanks for patience / encouragement / boxing confidence; grateful journey continues |
| B2 | Thanks to everyone who worked with H; positive difference; chapter ending |

### C. Family — (attribution: `B, R and W`)

Obfuscate `Will` → `W` in body.

| # | Notes |
|---|-------|
| C1 | Thanks to everyone at SCP for progress with W; right time for a new chapter |

### Legacy (after new content)

| Current | Publish as (approx.) |
|---------|----------------------|
| Mrs K — Mother of a student | Mrs K (or equivalent); keep caption; redact any remaining full first names in body if present |
| Cory N — apprentice caption | `C. N.` + caption |
| Cory O — travel caption | `C. O.` + caption |

## Page layout

### Homepage

- One `feedback-quote-carousel` with **5 slides**, wellbeing and parents **interspersed**: A1, B1, A2, C1, A3.
- Do **not** put the full CAMHS letter or legacy quotes on the homepage.
- Keep out of the hero / first-viewport clutter (same band as the old success-story quote).

### `/testimonials`

1. Intro header (existing generic-header).
2. **Carousel** interspersed then legacy: A1, B1, A2, B2, A3, C1, then Mrs K / C. N. / C. O.
3. **Full CAMHS letter** (initials only) as `centred-text` below the carousel.
4. Remove “More testimonials coming soon”.

## Carousel implementation

1. New partial: `layouts/partials/blocks/feedback-quote-carousel.html`
2. Front matter: list of `{ quote, name, caption }` (and optional `header`)
3. Vanilla JS in `src/js/` — prev/next, dots, pause on hover/focus; honour `prefers-reduced-motion`
4. Match existing quote look (quote icon, typography, greys / `sc-*`) — not a card redesign
5. Keep single `feedback-quote` for About / Services one-offs if still used
6. Rebuild assets via Docker / `yarn build`

## Implementation checklist

1. Obfuscate all quote bodies + attributions per naming rules.
2. Add carousel partial + JS/CSS; wire homepage + `Testimonials.md`.
3. Add full CAMHS letter section on testimonials only.
4. Newest-first order; legacy last; drop “coming soon”.
5. Visual + keyboard QA (desktop/mobile); PR into `develop`.
6. Delete this plan when shipped; update [REQUIREMENTS.md](REQUIREMENTS.md).

## Still open (minor)

- [x] Homepage slide set: **CAMHS three (A1–A3) + family highlights B1 and C1** (not full legacy set).
- [ ] Full letter: plain `centred-text` / new `testimonial-letter` partial vs styled like quote block? → prefer `centred-text` or light letter partial at implement time.
- [x] Leave in-quote branding as written (“Sporting Chance” / “SCP”) unless Tony edits.

## Out of scope

- New photography / imagery
- Broader homepage/about copy rewrite
- OneDrive policies
- Rebrand / styling pass
- Reciprocal SCP-site banner (separate site)
