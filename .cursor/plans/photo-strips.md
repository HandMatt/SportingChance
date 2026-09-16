# Photo strips

**Status:** Wired + gallery optimised on `feature/photo-strips`  
**Branch:** `feature/photo-strips`

Homepage + Mentoring / Construction / ALP image strips with lightbox, against compressed WebP under `static/img/gallery/`.

## Layout notes

1. `src/css/main.css` imports `_image-strip.css`.
2. Homepage: `template = "image-strip"` in `layouts/index.html` dispatcher.
3. Service pages: root `photo_strip` rendered in `layouts/page/single.html` **after generic-header / before icon-grid**.
4. Lightbox: `src/js/image-strip-lightbox.js` (click to enlarge, backdrop, prev/next, Esc).

## Assets

Gallery photos are WebP, long edge ≤1600px. Paths live in `content/_index.md` and the three pillar pages (`photo_strip` YAML).
