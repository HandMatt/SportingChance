# Policy PDFs

SharePoint remains the staff CMS / source of truth. The public site serves copies from
`static/pdfs/` through a self-hosted PDF.js viewer (`static/pdfjs/`).

**Caveat:** Hiding download/print in PDF.js is UX only. On a static site,
`/pdfs/*.pdf` remains publicly fetchable.

## Front end (shipped)

| Piece | Path |
|-------|------|
| Viewer (Mozilla PDF.js v6.3.289, trimmed) | `static/pdfjs/` |
| Policy PDFs | `static/pdfs/<stable-name>.pdf` |
| Shortcode | `layouts/shortcodes/secure-pdf.html` (`secure-pdf` with `src="/pdfs/….pdf"`) |
| Policy layout | `layouts/policies/single.html` reads front matter `pdf_src` |

**Viewer UX:** Desktop embeds PDF.js in-page (`#zoom=page-width`). Mobile shows a
**View full policy** button that opens the same viewer full-viewport (avoids nested
scroll). Desktop also has an **Open full screen** link.

Stable filenames:

- `/pdfs/safeguarding.pdf` (public statement)
- `/pdfs/health-and-safety.pdf` (public statement)
- `/pdfs/equality-and-diversity.pdf` (public statement)
- `/pdfs/anti-bullying.pdf` (full bullying & harassment policy)
- `/pdfs/complaints.pdf` (full policy)
- `/pdfs/safer-recruitment.pdf` (full policy)

Statement pages use front matter `statement: true` and tell visitors the full policy is available on request.

Vendor tree is trimmed: no `*.map`, no sample PDF, locales limited to `en-GB` / `en-US`.
Download/print toolbar controls are hidden in `viewer.html` + `viewer-overrides.css`.

## Adding / replacing a PDF

1. Place the file under `static/pdfs/` with the stable name above (see `static/pdfs/README.md`).
2. Confirm the matching policy page `pdf_src` still points at that path.
3. Push → Netlify rebuilds (no extra GitHub Actions).

## Task B — Power Automate sync (plan only)

When current PDFs are on the site and client IT is engaged:

```
SharePoint folder → Power Automate (file create/modify)
  → Get file content
  → Create/update file in GitHub: static/pdfs/<stable-name>.pdf
  → Netlify rebuilds from git push
```

IT builds the flow; contractor supplies:

| Deliverable | Notes |
|-------------|--------|
| Filename map | SharePoint display names → stable site names above |
| Path convention | Always `static/pdfs/<stable-name>.pdf` |
| PAT scope | Fine-grained GitHub PAT: this repo, **contents: write** only |
| Target branch | Prefer `develop`, or a bot branch + PR — **not** silent pushes to `master` |
| Smoke-test checklist | Trigger on update → file in repo → Netlify deploy → policy page loads PDF |

Out of scope until Task A is live with real PDFs: automation, GHA deploy pipeline, true DRM.
No tenant login is required for the contractor if IT owns the flow.
