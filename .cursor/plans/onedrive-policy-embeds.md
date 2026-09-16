# Restore accessible policy documents (OneDrive / SharePoint)

**Status:** Wired on `feature/onedrive-policy-embeds` — awaiting IT **Anyone** sharing for signed-out public access; then merge to `develop` / release  
**Branch:** `feature/onedrive-policy-embeds`

## Done

- Real SharePoint embed URLs on all four policy pages (`password_required: false`)
- Google Drive placeholders and password copy removed
- `ONEDRIVE_SETUP.md` replaces `GOOGLE_DRIVE_SETUP.md` (view-only + block download, no password)

## Still needed before production

1. M365 admin enables **Anyone with the link** for the SCP SharePoint site.
2. File shares: **Can view** + **Block download** (no password).
3. Smoke-test each `/policies/…` page **signed out**; then PR → `develop` → release.

## Embed URLs

| Page | UniqueId |
|------|----------|
| Safeguarding | `786f0475-f74e-40af-9165-1ac529358cc3` |
| Health & Safety | `558ceb75-179e-41fa-9841-d0e0f0a7d490` |
| Anti-bullying | `0338da5e-70ee-4fc1-b3d0-6c4c0eb9f53a` |
| Complaints | `386f6776-2c5f-4310-9504-ada6fb6c1515` |

Base: `https://supportingchildrenspathways.sharepoint.com/sites/SCP/_layouts/15/embed.aspx?UniqueId=`
