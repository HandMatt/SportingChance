# AGENTS.md

Sporting Chance Project marketing site. Keep this file lean; deeper history lives in
[`.cursor/context/TIMELINE.md`](.cursor/context/TIMELINE.md).

---

## Project

| Field | Value |
|-------|-------|
| **Name** | SportingChance |
| **Purpose** | Static marketing / information site for The Sporting Chance Project (alternative learning provision) |
| **Primary language(s)** | Markdown, HTML (Hugo templates), CSS (Tailwind), JavaScript |
| **Runtime / framework** | Hugo 0.121.0 (Netlify) + Tailwind 3 + Webpack 5; Yarn 4; local Docker Compose |

---

## Architecture stance

This project follows the user's global rules (KISS, YAGNI, DRY, separation of concerns).
When this file conflicts with global rules, **discuss before coding**.

**Layout model:**

- [x] **Other** — Hugo SSG: page copy in `content/`, templates in `layouts/`, compiled assets from `src/`, static files in `static/`. No app backend or Clean Architecture layers.

**Domain isolation:** N/A (no application domain layer). Do not add backend/API scaffolding.

---

## Repository map

```
/
├── AGENTS.md              ← you are here
├── content/               ← page Markdown (home, services, policies, …)
├── layouts/               ← Hugo templates + partials/blocks
├── src/css, src/js        ← Webpack + PostCSS sources
├── static/                ← files served as-is
├── config.toml            ← site config, menus, params
├── netlify.toml           ← Netlify build + Hugo/Node versions
├── docker-compose.yml     ← local hugo + assets services
├── tailwind.js            ← brand tokens (`sc-*` / leaflet theme classes)
└── .cursor/               ← rules, TIMELINE, short-lived plans
```

---

## Golden files (copy these patterns)

| Pattern | Path | Why |
|---------|------|-----|
| Base layout | `layouts/_default/baseof.html` | Shell, asset hooks, shared chrome |
| Content block | `layouts/partials/blocks/cta-block.html` | Reusable section partial style |
| Page content | `content/_index.md` | Front matter + Markdown body |
| Policy embed | `layouts/policies/single.html` + policy MD `iframe_url` | OneDrive iframe pattern |
| Brand / theme | `tailwind.js`, `layouts/partials/navbar.html` | Tokens and chrome patterns |

---

## Commands

```bash
# Install dependencies (Docker)
docker compose build assets
docker compose run --rm assets yarn install

# Run locally
docker compose up          # or: yarn dev → http://localhost:1313

# Build assets (host Node / Netlify)
yarn build

# Hugo only on host (needs Hugo installed)
yarn start
```

Netlify: `yarn install && yarn build && hugo` → publish `public/`.

---

## Conventions

### Naming / structure

- Page copy in `content/**/*.md`; structural/UI in `layouts/`; asset sources in `src/`.
- Prefer Tailwind utilities and existing `sc-*` / leaflet theme classes before custom CSS.
- Policy embeds: set `iframe_url` in front matter (OneDrive / Microsoft 365).

### Testing

- No automated test suite. Verify with local `docker compose up` / visual check of affected pages.
- Prefer PRs into `develop`; leave `master` for production (Netlify production branch).

---

## Feature areas

| Feature | Path | Notes |
|---------|------|-------|
| Home | `content/_index.md`, `layouts/index.html` | Hero, partners, CTAs |
| Services | `content/services.md`, service pillar pages | Mentoring, Construction, ALP |
| Policies | `content/policies/`, `layouts/policies/` | OneDrive embeds via `iframe_url` |
| Testimonials / case studies | `content/Testimonials.md`, `content/case-studies/` | Quotes + long-form stories |
| Contact | `content/contact.md`, `content/contact-thanks.md` (`/contact/thanks/`), `layouts/partials/blocks/contact-form.html`, `config.toml` `jotform_form_id` | Native HTML form → Jotform EU submit; on-site thank-you at `/contact/thanks/`; Jotform dashboard must redirect there and owns notification emails |

---

## Boundaries & out of scope

**Do not modify without explicit approval:**

- `netlify.toml` deploy settings / production domain wiring
- Generated `public/`, `resources/`, `node_modules/`

**Intentionally out of scope for the agent:**

- App/backend scaffolding, CMS migrations, secrets / Netlify account ownership transfers
- Inventing a large docs tree — prefer updating this file + `TIMELINE.md`

---

## Workflow reminders

- **Scope gate:** Large or multi-concern tasks → propose a micro-task checklist; confirm step 1.
- **Output:** One-sentence Architectural Intent before code; brief data-flow map after (when relevant).
- **Git:** Agent never commits. User runs `git commit` manually.
- **Living context:** Material ownership, hosting, or architecture changes → dated bullet in
  [`.cursor/context/TIMELINE.md`](.cursor/context/TIMELINE.md) (newest first) in the same PR.

---

## Project-specific notes

- Brand: leaflet green / teal / purple; teal default on non-service pages; Montserrat.
- Git: `master` = production; `develop` = integration; feature/chore branches → PR into `develop`.
- Ownership (Aug 2026): GitHub historically `Ieuanoh/SportingChance`; transfer and Netlify access still settling — confirm before changing deploy/domain settings.
- Human docs: [`README.md`](README.md). Short-lived plans: [`.cursor/plans/`](.cursor/plans/).
- **Jotform (contact):** Form ID in `config.toml` → `jotform_form_id` (`222916591903056`). Site posts to the EU submit endpoint in `contact-form.html`. Verify field names anytime with `yarn verify:jotform` (compares partial ↔ live form HTML). Ops (Jotform dashboard only — Hugo cannot change these):
  1. **Settings → Thank You Page** → redirect to `https://www.sportingchanceproject.co.uk/contact/thanks/` (or the live Netlify URL until DNS cuts over).
  2. **Settings → Emails** → notification recipient `info@sportingchanceproject.co.uk` (not `admin@`).
  3. Account access: whoever owns the Jotform login (check with Tony). On-page contact copy (`info@`) does not affect where Jotform sends alerts.
