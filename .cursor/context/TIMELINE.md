# Timeline

Living log of material project changes. **Newest first.**
Update in the same PR as the change. Keep entries to one short bullet.

## 2026-09

- **Perf: Netlify cache headers** — Long-lived `Cache-Control` for `/fonts`, `/img`, icons; one-week revalidate for unhashed `/css` and `/app.js` (verify on a Netlify deploy, not `hugo server`).
- **Perf: self-hosted fonts + smaller logos** — Montserrat/Karla variable woff2 served from `/fonts` (no Google Fonts CSS chain); hero/nav/partner marks switched to display-sized WebP.
- **Education still with Sporting Chance until SCP cutover** — Homepage, Services, and ALP describe education as a spectrum (foundational literacy and maths through to accredited Functional Skills); SCP banner/CTAs use future-tense (“will be / coming soon”) so education is not shown as already moved.

## 2026-08

- **Contact thank-you page** — On-site `/contact/thanks/` for post-submit redirect; Jotform dashboard must point Thank You Page + notification email (`info@`) there (see `AGENTS.md`).
- **Dependabot** — Alerts + security updates enabled; `.github/dependabot.yml` set for weekly npm/Yarn version updates (grouped prod/dev) targeting `develop`.
- **Agent context aligned to global template** — Root `AGENTS.md` is now the primary brief (filled from `~/.cursor/templates/AGENTS.md`); removed duplicate `.cursor/context/PROJECT.md`; rules/README point at `AGENTS.md` + `TIMELINE.md`.
- **Rebrand styling pass 2** — Follow-up from feedback on `feature/rebrand-styling-pass-2`: tighter mobile gutters, partner logos on one row, coloured cross-service links, SCP CTA on the main Services page, native Jotform contact form.
- **Case studies section** — Long CAMHS professional account moved from Testimonials onto `/case-studies/` so quotes stay scannable and stories get their own URLs for SEO.
- **Rebrand shipped** — Leaflet green / teal / purple (teal default off service pages), parallax hero, quiet scroll reveals, Montserrat. Experiment branches and decision plans removed from `.cursor/plans/`.
- **Testimonials carousel shipped** — Professional and family quotes with homepage + `/testimonials` carousel (#18).
- **Photo strips deferred** — Homepage and service image-grid placeholders parked on `feature/photo-strips`; restore once real photos exist.
- **Three service pillars** — Mentoring & Life Skills, Construction Workshops, and Alternative Learning Provision pages live with leaflet-aligned copy, Services nav/hub updates, and SCP education CTAs (homepage + service pages).
- **Docker** — Moved local Node/Yarn into a Compose `assets` service so the site runs with Docker only; Netlify build unchanged.
- **Identified work (Tony / Matt)** — Captured brief plans for OneDrive policy embeds (restore access), a homepage banner to Supporting Children's Pathways, and a content/testimonials/imagery refresh; see `.cursor/plans/REQUIREMENTS.md`.
- **Cursor context** — Added `.cursor/` + `AGENTS.md` as the starting point for AI-assisted maintenance (this file, `PROJECT.md`, project rules).
- **`develop` branch** — Created from `master` as the integration branch; Netlify branch deploys for preview still pending account access.
- **Maintainer handover** — Lead maintenance moving to Matt / SCP; GitHub transfer and Netlify access requested from previous owner (`Ieuanoh`).
- **Policy docs** — Site direction is OneDrive (Microsoft 365) embeds with optional link passwords. Setup notes and embed URL wiring may still be in progress on a feature branch.

## Earlier (pre-handover)

- Hugo + Tailwind + Webpack site hosted on Netlify from `master`.
- Forestry.io used historically as a git-backed CMS for `content/`.
- Policies & procedures section added (list + single layouts under `layouts/policies/`).
