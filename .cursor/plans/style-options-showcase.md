# Style options — showcase guide

Three visual directions explored for the Sporting Chance site rebrand experiment.
Use the bullet lists below when walking stakeholders through each option.

**Baseline:** current production site on `develop` / `master` — existing SCP branding, centred layouts, minimal motion.

| Option | Branch | Status | Inspiration |
|--------|--------|--------|-------------|
| **A — Leaflet** | `experiment/style-option-a` | Concept absorbed into B; branch matches `develop` | Printed service leaflets (green / teal / purple per pillar) |
| **B — ALP depth** | `experiment/style-option-b` | WIP in git stash (not committed) | [South West ALP & Mentoring](https://www.southwestalpandmentoring.com/) — parallax, layered shapes |
| **C — Brand motion** | `experiment/style-option-c` | Active WIP (current work) | SCP yellow / red / blue + ALP-style scroll reveals |

---

## How to preview locally

```bash
docker compose up
# → http://127.0.0.1:1313/
```

| Option | Checkout / restore |
|--------|-------------------|
| **A** | No unique preview — same as `develop`. See **B** for leaflet-aligned work. |
| **B** | `git checkout experiment/style-option-b` then `git stash pop stash@{1}` (or `stash@{0}`). Resolve conflicts if any; restart Hugo. |
| **C** | `git checkout experiment/style-option-c` — current branch. |

Hard-refresh the browser after switching (`Ctrl+Shift+R`).

---

## Option A — Leaflet-aligned

**Concept:** Bring the printed leaflet look onto the web — each service pillar gets its own colour world, with clean panels and geometric accents rather than heavy animation.

**Best pages to show:** `/mentoring-life-skills`, `/construction-workshops`, `/alternative-learning-provision`, `/services`

### Showcase talking points

- **Per-service colour themes** — Mentoring = green, Construction = teal, Alternative Learning = purple; instantly signals which service you are viewing
- **Leaflet-style content bands** — light/dark panel sections that mirror the folded leaflet layout
- **Geometric overlays** — subtle angled shapes behind content for depth without distraction
- **Consistent panel typography** — titles and body copy styled as readable “panels”, not loose web paragraphs
- **Service hub clarity** — `/services` can colour-code each pillar block so the three offerings are visually distinct
- **Print-to-web continuity** — stakeholders already know these colours from physical materials; the site feels like an extension of the leaflet
- **Calm, professional tone** — minimal motion; suitable for education / local-authority audiences
- **Structured sections** — clear visual hierarchy between header, body, and call-to-action within each band

### Good for stakeholders who want…

- Brand consistency with existing print collateral
- A clear “which service am I on?” cue
- A restrained, brochure-like feel

### Limitations (why we moved on)

- Less differentiation from a standard marketing site
- No strong motion or “modern web” feel
- Work evolved into Option B (leaflet bands + ALP-inspired depth)

---

## Option B — ALP depth & parallax

**Concept:** Layered, editorial hero and service pages inspired by South West ALP — parallax photography, translucent triangles, logo watermarks, and interactive service grids.

**Best pages to show:** Homepage hero, any service page with icon grid, `/services`

### Showcase talking points

- **Parallax hero** — background photo moves at a different rate to the foreground; adds depth on first impression
- **Dual translucent triangles** — large ALP-style shapes over the hero image for a contemporary, confident look
- **SVG triangle edge** — decorative base transition from hero into page content
- **Logo watermarks** — faint SCP logo ghosted behind section panels; reinforces brand without clutter
- **Leaflet theme system** — green / teal / purple bands carried over from Option A, now with richer layering
- **Panel bands with geometry** — light and dark leaflet bands with overlapping shape accents
- **Icon grid focus effect** — hover/focus on service offering cards: one card enlarges while others recede (keyboard-accessible with `tabindex`)
- **Framed hero media** — consistent image frame treatment on service page headers
- **Uppercase hero brand line** — editorial typographic treatment in the hero
- **Service-specific atmosphere** — each pillar page feels visually distinct while sharing the same component system

### Good for stakeholders who want…

- A bold, premium first impression
- Visual parity with a modern ALP / mentoring sector site
- Strong service-page personality

### Limitations / notes

- Parallax and layered effects need performance and accessibility review
- More complex CSS; harder for non-devs to tweak
- Work is **stashed**, not on a deployable branch — needs consolidation before preview deploy
- Hero and bands may feel busy on smaller phones without further mobile pass

---

## Option C — Brand motion (current)

**Concept:** Keep SCP’s established yellow / red / blue palette and add modern scroll-driven UX — reveals, full-height snap sections, mixed alignment, and structured content blocks.

**Best pages to show:** Homepage (`/`), service pages for icon grid + image strip, scroll down for snap + back-to-top

### Showcase talking points

- **Original brand colours front and centre** — yellow, red, and blue gradients and soft bands, not leaflet green/teal/purple
- **Scroll-triggered reveals** — sections fade/slide in as you scroll (inspired by SW ALP waypoint style, tuned to trigger later and animate slower)
- **Mixed alignment** — left-, centre-, and right-aligned sections break up the old “everything centred” layout
- **Generous page gutters** — responsive side padding so text is not flush to the screen edge
- **Tri-colour hero accent bar** — yellow → red → blue strip at the base of the homepage hero
- **“Explore” scroll cue** — animated chevron invites users into content
- **Three-column services band** — each pillar column uses a brand colour overlay (yellow / red / blue) with left / centre / right text alignment
- **Photo placeholder strip** — “Life at Sporting Chance” grid ready for real imagery; shows where a richer visual story will go
- **Animated icon bullet list** — “Ready to overcome the challenges…” uses brand-coloured check icons with staggered reveal
- **Soft scroll snap** — homepage sections gently settle to full viewport height (hero, services band, challenges, testimonials, partners); image strip stays free-scroll
- **Strong snap toggle** — one config change (`scrollSnapMode = "mandatory"` in `config.toml`) to preview a firmer snap for comparison
- **Floating back-to-top** — gradient button on longer pages after ~¾ screen of scrolling
- **Accent bars** — gradient underline markers aligned to section text (left / centre / right)
- **Reduced-motion support** — snap and animations disabled when the user prefers reduced motion
- **Per-section snap control** — `snap = true` on individual blocks in content front matter

### Config quick reference (Option C only)

| Setting | Location | Values |
|---------|----------|--------|
| Snap strength | `config.toml` → `scrollSnapMode` | `"proximity"` (soft) / `"mandatory"` (strong) |
| Enable snap on a page | Page front matter | `scroll_snap = true` |
| Snap a specific block | `[[page_sections]]` | `snap = true` |
| Section alignment | `[[page_sections]]` | `align = "left"` / `"center"` / `"right"` |

### Good for stakeholders who want…

- Familiar SCP colours retained
- A noticeably more modern feel without a full redesign
- Motion and layout improvements that work on the existing Hugo block system

### Limitations / still to do

- Real photography not yet swapped in for placeholders
- Snap + reveal together may need further tuning on mobile
- Not yet merged to `develop`; needs stakeholder sign-off

---

## Side-by-side comparison (elevator pitch)

| | **A — Leaflet** | **B — ALP depth** | **C — Brand motion** |
|--|-----------------|-------------------|----------------------|
| **Colour story** | Green / teal / purple per service | Same + layered panels | Yellow / red / blue SCP brand |
| **Hero** | Standard photo banner | Parallax + triangles | Photo + tri-colour bar + scroll cue |
| **Motion** | Minimal | Parallax + hover focus | Scroll reveals + snap + icon animations |
| **Typography feel** | Panel / brochure | Editorial / uppercase hero | Mixed alignment, existing SCP fonts |
| **Service pages** | Theme per pillar | Theme + watermarks + icon focus | Icon grid + image strip + alignment |
| **Dev readiness** | Superseded | Stashed WIP | Active branch, closest to demo-ready |
| **Risk** | Low | Medium (perf / complexity) | Low–medium (motion tuning) |

---

## Suggested demo flow (15 minutes)

1. **Production baseline** — open live site or `develop`; note centred text and static sections.
2. **Option C (recommended first)** — homepage top to bottom:
   - Hero accent + scroll cue
   - Scroll slowly: reveals, snap on services band
   - Challenges section: icon bullets
   - Continue to testimonials; show back-to-top
   - Mention `scrollSnapMode` toggle if they want firmer snap
3. **Option B** — if stash restored: hero parallax + one service page icon grid hover
4. **Option A** — explain as the colour/theming foundation that B built on (leaflet palette vs SCP palette in C)

---

## Mix-and-match possibilities

If stakeholders like elements from more than one option:

- **C + B hero** — parallax hero on Option C’s brand-colour system
- **C + A theming** — per-service teal/green/purple on service pages only, homepage stays yellow/red/blue
- **B + C motion** — leaflet bands with Option C scroll reveals and snap
- **C without snap** — set `scroll_snap = false` on homepage for a simpler feel

---

## Decision checklist

Before choosing a direction, confirm:

- [ ] Are we keeping SCP yellow / red / blue as the primary web palette?
- [ ] Should each service page have its own colour world (A/B) or shared brand bands (C)?
- [ ] Is scroll motion acceptable for our audience (schools, councils, parents)?
- [ ] Do we have (or soon have) photography for the image strip?
- [ ] Is parallax worth the extra complexity (B)?
- [ ] Soft snap, strong snap, or no snap?

---

*Last updated: Aug 2026 — reflects `experiment/style-option-c` WIP and stashed Option B work.*
