# Style options A / B / C — cherry-pick sheet

Working notes for Matt + Tony. Mark each row **Keep / Drop / Maybe**, then we assemble a
fourth direction from the Keep pile. Options were experiments, not finished designs.

Demo branches: `experiment/style-option-a` · `experiment/style-option-b` · `experiment/style-option-c`  
Local: `docker compose up` → http://127.0.0.1:1313/ (hard-refresh after switching).

---

## How we got here

The live site is still the current SCP look: yellow / red / blue, mostly centred, little motion.

| | **A — Leaflet** | **B — ALP depth** | **C — Brand motion** |
|--|-----------------|-------------------|----------------------|
| **Idea** | Bring the printed leaflets onto the website | Same leaflet look, with more depth (like [ALP England](https://alpengland.co.uk/)) | Keep familiar SCP colours, add modern scroll behaviour (like [SW ALP](https://www.southwestalpandmentoring.com/)) |
| **Palette** | Green (Mentoring) / teal (Construction) / purple (ALP) | Same as A | Yellow / red / blue already on the site |
| **Feel** | Calm brochure | Premium, layered | Livelier, more “web” |
| **Motion** | Almost none | Parallax + hover | Scroll reveals, optional snap |
| **Risk** | Low | Medium (performance, busy on phones) | Low–medium (motion needs tuning) |

Assumption from our chats (change if you disagree): the finished site is **unlikely to be 100% A, B, or C**. C was built to be *distinct* from A/B so we had something else to pick from.

---

## 1. Big choices (pick one per row)

These set the overall direction. Smaller bits below can still mix.

| Decision | A | B | C | Mix we already discussed | Keep |
|----------|---|---|---|--------------------------|------|
| **Primary colours** | Leaflet green / teal / purple on service pages | Same as A | SCP yellow / red / blue everywhere | Homepage brand colours; leaflet colours only on the three service pages | A&B |
| **Headings** | Montserrat | Montserrat | Existing Carter One / Prism | — | A/B |
| **How much motion** | Static | Parallax + card focus | Reveals + optional snap | Reveals without snap, or parallax without leaflet colours | B/C  |

---

## 2. Cherry-pick list

Tick **K** keep · **D** drop · **?** maybe. Add a one-line note if useful.

### Colour & type

| | Ingredient | From | What it is | Watch-outs | K / D / ? | Note |
|--|------------|------|------------|------------|-----------|------|
| 1 | Per-service colour worlds | A, B | Mentoring = green, Construction = teal, ALP = purple — you always know which service you are on | Diverges from the current website (and from SCP / Supporting Children's Pathways yellow-red-blue) | K |  |
| 2 | Leaflet horizontal bands | A, B | Full-width colour panels like the folded leaflets (header → intro → sessions → CTA) | Can feel heavy if stacked on long pages | ? |  |
| 3 | Geometric triangle overlays | A, B | Translucent angled shapes overlapping the bands | A is stronger; B is more see-through (ALP-like). Can look busy | K | B |
| 4 | SCP yellow / red / blue as the web palette | C | Same colours as the live site and existing brand | Does **not** match the printed leaflets | D |  |
| 5 | Soft brand-colour washes | C | Light yellow / red / blue tints behind text sections, not full leaflet blocks | Quieter than A/B bands | D |  |
| 6 | Tri-colour accent bars | C | Thin yellow→red→blue underline under headings, plus a strip on the homepage hero | Small detail; easy to keep even if we drop C’s motion | D |  |
| 7 | Montserrat headings | A, B | Closer to the leaflet type | Drops Carter One, which is part of the current web identity | K |  |

### Homepage hero

| | Ingredient | From | What it is | Watch-outs | K / D / ? | Note |
|--|------------|------|------------|------------|-----------|------|
| 8 | Static photo hero | A | Standard banner, no extra effects | Safe; less distinctive | D |  |
| 9 | Parallax photo | B | Background moves slower than the text as you scroll | Extra JS; can feel jumpy on mobile; we already respect reduced-motion | K |  |
| 10 | Dual translucent triangles on the hero | B | Large diagonal overlays, ALP England style | Strong “designed” look; easy to overdo with parallax | K |  |
| 11 | Triangle cut on the bottom of the hero | B | Decorative edge into the next section | Cosmetic only | K |  |
| 12 | Editorial / uppercase brand line | B | More magazine-like hero type | May feel unlike SCP’s current voice | K |  |
| 13 | Tri-colour bar at the base of the hero | C | Yellow / red / blue strip | Lightweight brand cue | D |  |
| 14 | “Explore” chevron | C | Animated scroll hint | Some will find it gimmicky; off if reduced-motion is on | K |  |

### Homepage services band (the three pillars)

| | Ingredient | From | What it is | Watch-outs | K / D / ? | Note |
|--|------------|------|------------|------------|-----------|------|
| 15 | Leaflet-coloured columns | A, B | Green / teal / purple overlays on the three cards | Ties the hub to print; clashes if homepage stays yellow-red-blue | K |  |
| 16 | Brand-coloured columns | C | Yellow / red / blue overlays (one per pillar) | Matches live brand | D |  |
| 17 | Logo fade-in on hover | B | Card lifts and a faint SCP logo appears | Nicely branded; easy to miss on touch screens | K |  |
| 18 | Mixed left / centre / right text in the three cards | C | Breaks the “everything centred” habit | Readability on narrow phones | K |  |

### Service pages (Mentoring / Construction / ALP)

| | Ingredient | From | What it is | Watch-outs | K / D / ? | Note |
|--|------------|------|------------|------------|-----------|------|
| 19 | Leaflet “service” block | A | Sessions list, framed photos, contact / address strip closer to print | More layout work to maintain | K |  |
| 20 | Tinted text panels + watermark | A, B | Copy sits on a panel; large faint logo behind | Watermarks are stronger in B | D |  |
| 21 | Rounded 16:10 framed hero photos | A, B | Consistent photo treatment (no mixed circles / ovals) | Needs decent photos | K |  |
| 22 | Simple themed icon grid | A | Eight offering cards, coloured to the service, no fancy hover | Clear and calm | K |  |
| 23 | Icon-grid “focus” hover | B | One card grows (~107%); the other seven shrink and fade. Keyboard works; no sticky hover on phones | Fun in a demo; may be too much for schools / councils | K |  |
| 24 | Brand-cycling icon grid | C | Cards cycle yellow / blue / red with a small lift on hover | Distinct from A/B; not service-tinted | D |  |

### Motion & scrolling

| | Ingredient | From | What it is | Watch-outs | K / D / ? | Note |
|--|------------|------|------------|------------|-----------|------|
| 25 | Scroll-triggered reveals | C | Sections fade / slide in when they come into view. Tuned to start **later** and move **slower** after we said C appeared too quickly | Must stay off for reduced-motion. Too much can feel like every other agency site | K |  |
| 26 | Soft snap (proximity) | C | Homepage sections gently settle toward full-screen height | Image strip and some blocks were left free-scroll on purpose | K |  |
| 27 | Strong snap (mandatory) | C | Firmer “one section per screen” — already a one-line config toggle | Can frustrate people trying to read or use a mouse wheel | D |  |
| 28 | Animated checklist icons | C | “Ready to overcome the challenges…” uses staggered brand-coloured ticks | Homepage-only flavour | K |  |
| 29 | Reduced-motion fallbacks | B, C | Parallax, reveals, snap, and chevron switch off when the OS asks | Keep this if we keep **any** motion | K |  |

### Layout, photos, extras

| | Ingredient | From | What it is | Watch-outs | K / D / ? | Note |
|--|------------|------|------------|------------|-----------|------|
| 30 | Mixed left / centre / right page sections | C | Added because “there is a lot of centre-aligned content” | Don’t mix so much that pages feel messy | K |  |
| 31 | Wider side gutters | C | Text not glued to the screen edge | Generally worth keeping | K |  |
| 32 | Photo strip (“Life at Sporting Chance”) | C | Grid ready for real photos; placeholders until Tony has images | Copy currently admits they are placeholders — swap before launch | K | Parked on `feature/photo-strips`; do not merge until real images exist |
| 33 | Photo placeholders on service pages | C | Same idea on Mentoring / Construction / ALP | Same as above | K | Same branch |
| 34 | Floating back-to-top | C | Appears after ~¾ of a screen of scrolling, on longer pages | Low risk, useful on service pages | K |  |

---

## 3. Suggested mixes (starting points, not recommendations)

Use if the blank sheet is too open. Strike through anything you dislike.

1. **Familiar brand + quieter motion**  
   C colours + accent bars + gutters + mixed alignment + back-to-top.  
   Keep A’s framed photos. Drop leaflet greens, parallax, snap, and the B icon-grid focus.

2. **Print-faithful services, current homepage**  
   C (or current) homepage. A/B colour worlds + bands only on the three service pages.

3. **Depth without a re-palette**  
   C colours + B parallax and/or triangles on the hero. No leaflet green/teal/purple.

4. **Brochure site**  
   Mostly A. Keep C only for gutters and back-to-top.

---

## 4. Questions that unblock build

- [x] Website colours: leaflet, current SCP, or split (homepage vs service pages)? **Leaflet everywhere. Teal is the default on non-service pages.**
- [x] Is motion acceptable for schools, councils, and parents? If yes: reveals, parallax, snap — which of those? **Yes, but quiet: parallax + icon-grid focus + reveals. Not noisy.**
- [x] Snap: soft, strong, or off? **Soft (proximity) on the homepage. Strong snap off.**
- [ ] Do we wait for real photography before shipping the photo strip? **Yes — placeholders are off the rebrand; restore from `feature/photo-strips` only once Tony has images.**
- [x] Montserrat (leaflet) or keep Carter One on the web? **Montserrat.**

---

## 5. Our Keep list (locked 2026-08-17)

**Direction:** printed leaflet + ALP depth + scroll behaviour (A + B + C).  
**Palette:** Mentoring green / Construction teal / ALP purple. **Teal is the dominant colour** on homepage, About, Contact, and other non-service pages. Yellow / red / blue from C is dropped.  
**Type:** Montserrat headings (A/B).  
**Hero:** B parallax + dual triangles + uppercase brand line + triangle edge + C “Explore” chevron.  
**Service pages:** per-service colour worlds, A’s leaflet service block and framed 16:10 photos, B’s more transparent geometry, themed icon grid **with** B’s focus hover (kept quieter than the demo). No watermarks. No C brand-cycling cards.  
**Motion:** parallax + icon-grid focus + scroll reveals + animated checklist. Soft snap only. Strong snap, tri-colour bars, and C colour washes are out. Everything motion-related must honour reduced-motion.  
**C content opportunities (keep):** mixed left / centre / right, page gutters, back-to-top, structured “challenges” icon list. Photo strip / service photo grids stay **Keep** but live on `feature/photo-strips` until real images exist.  
**Leaflet bands:** Maybe — use B’s lighter / more transparent bands, not heavy stacked A panels on every generic page.

**Out:** 4, 5, 6, 8, 13, 16, 20, 24, 27.

Once this is filled in, the next build step is a single `feature/` branch that combines the Keep pile — not a merge of A+B+C as wholes.
