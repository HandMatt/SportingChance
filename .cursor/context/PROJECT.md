# Sporting Chance — project context

Marketing / information site for **The Sporting Chance Project** (alternative
learning provision). Static site only — no app backend.

## Stack

| Layer | Choice |
|-------|--------|
| SSG | Hugo (`HUGO_VERSION` 0.121.0 on Netlify) |
| CSS | Tailwind 3 (`tailwind.js` brand tokens as `sc-*` classes) |
| JS/CSS build | Webpack 5 + PostCSS (`src/` → compiled assets) |
| Package manager | Yarn 4 (`packageManager` in `package.json`) |
| Local Hugo | Docker (`docker-compose.yml`, port 1313) |
| Hosting | Netlify — production deploys from `master` |
| CMS (legacy) | Forestry.io noted in README; content is plain Markdown in git |

## Repo layout

| Path | Role |
|------|------|
| `content/` | Page Markdown (home `_index.md`, about, services, policies, etc.) |
| `content/policies/` | Policy pages; embed OneDrive docs via `iframe_url` front matter |
| `layouts/` | Hugo templates (`_default`, `page`, `policies`, `partials/`) |
| `layouts/partials/blocks/` | Reusable content blocks |
| `src/css`, `src/js` | Source assets compiled by Webpack |
| `static/` | Static files served as-is |
| `config.toml` | Site config, main menu, params |
| `netlify.toml` | Build command + Hugo/Node versions |
| `ONEDRIVE_SETUP.md` | How to embed password-protected policy docs from OneDrive |

## Commands

```bash
yarn            # install
yarn dev        # Docker Hugo + webpack --watch → http://localhost:1313
yarn build      # webpack production build
yarn start      # hugo server (needs local Hugo; prefer yarn dev)
```

Netlify build: `yarn install && yarn build && hugo` → publish `public/`.

## Git workflow

| Branch | Role |
|--------|------|
| `master` | Production (Netlify production branch) |
| `develop` | Integration / staging (enable Netlify branch deploys when available) |
| `feature/*`, `chore/*` | Work branches → PR into `develop`, then promote to `master` |

## Conventions

- Prefer Tailwind utility classes in templates; brand colours via `sc-*` from `tailwind.js`.
- Content edits live in `content/**/*.md`; structural/UI in `layouts/`.
- Policy embeds: set `iframe_url` in front matter — see `ONEDRIVE_SETUP.md`.
- Do not commit on the user's behalf unless explicitly asked.
- After material ownership, hosting, or architecture changes, update
  [`TIMELINE.md`](TIMELINE.md) in the same PR.

## Ownership / access (as of Aug 2026)

- GitHub repo historically under `Ieuanoh/SportingChance`; transfer or fork
  to SCP/maintainer in progress.
- Netlify account access may still sit with the previous maintainer — confirm
  before changing deploy settings or domains.
