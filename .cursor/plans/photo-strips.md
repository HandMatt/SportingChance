# Photo strips (deferred)

**Status:** Parked — do not merge until real photos exist  
**Branch:** `feature/photo-strips`  
**Rebase onto:** `feature/rebrand-styling` (or `develop` after the rebrand lands)

Homepage + service-page image grids from the C experiment. Taken off the rebrand so we do not publish empty “Photo placeholder” tiles.

## When to merge

Have real `src` paths for every tile. Do not ship the fallback placeholder frames.

## Restore

1. In `src/css/main.css`, add: `@import './_image-strip.css';`
2. Homepage dispatcher (`layouts/index.html`), next to the other section partials:

   `{{- if eq .template "image-strip" -}}{{ partial "blocks/image-strip" (dict "Params" .) }}{{- end -}}`

3. Service pages (`layouts/page/single.html`): after the icon-grid partial, render root `photo_strip`:

   `{{ with $strip }}{{ partial "blocks/image-strip" (dict "Params" .) }}{{ end }}`

   with `{{- $strip := .Params.photo_strip -}}` at the top of the `main` block.

## Content (replace srcs before publish)

Homepage `content/_index.md` section (TOML), after the three service cards:

```toml
[[page_sections]]
template = "image-strip"
header = "Life at Sporting Chance"
subtext = ""
caption = ""
[[page_sections.items]]
title = "Mentoring in action"
wide = true
src = "/img/REPLACE.jpg"
alt = ""
[[page_sections.items]]
title = "Workshop skills"
src = "/img/REPLACE.jpg"
[[page_sections.items]]
title = "Classroom learning"
src = "/img/REPLACE.jpg"
[[page_sections.items]]
title = "Team activities"
src = "/img/REPLACE.jpg"
```

Service pages: YAML `photo_strip` at the **page root** (not nested inside `page_sections` — Hugo drops nested `template: image-strip` maps).

Mentoring (`content/mentoring-life-skills.md`):

```yaml
photo_strip:
  header: Moments from mentoring
  photo_titles:
    - One-to-one mentoring
    - Life skills session
    - Transition support
    - Group engagement
  photo_srcs:
    - "/img/REPLACE.jpg"
    - "/img/REPLACE.jpg"
    - "/img/REPLACE.jpg"
    - "/img/REPLACE.jpg"
```

Construction (`content/construction-workshops.md`):

```yaml
photo_strip:
  header: In the workshop
  photo_titles:
    - Hands-on trades
    - Safe workshop space
    - Skills progression
  photo_wide:
    - Hands-on trades
  photo_srcs:
    - "/img/REPLACE.jpg"
    - "/img/REPLACE.jpg"
    - "/img/REPLACE.jpg"
```

ALP (`content/alternative-learning-provision.md`):

```yaml
photo_strip:
  header: Learning in focus
  photo_titles:
    - Functional skills
    - Practical life skills
    - Sports and fitness
    - Personal development
  photo_wide:
    - Personal development
  photo_srcs:
    - "/img/REPLACE.jpg"
    - "/img/REPLACE.jpg"
    - "/img/REPLACE.jpg"
    - "/img/REPLACE.jpg"
```
