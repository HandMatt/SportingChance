# Restore accessible policy documents (OneDrive)

**Status:** Identified (Tony / Matt) — brief only; detailed planning when work starts  
**Priority:** High — policies are currently not accessible on the live site  
**Suggested branch:** rebase / finish `feature/update-policies-and-procedures` onto `develop` (or a fresh `feature/onedrive-policy-embeds` from `develop` if cleaner)

## Problem

Policy PDFs moved off Google Drive onto OneDrive (Microsoft 365). The live site still points at Google Drive embeds (or placeholders), so visitors cannot view policies.

## Existing work

Local WIP branch `feature/update-policies-and-procedures` already:

- Replaces `GOOGLE_DRIVE_SETUP.md` with `ONEDRIVE_SETUP.md`
- Clears / retargets `iframe_url` front matter on policy pages
- Tweaks `layouts/policies/single.html` copy for OneDrive

Embed URLs were left TBD (`iframe_url: ""` on at least safeguarding). That branch predates `chore/cursor-project-context` / `develop` — rebase or cherry-pick before finishing.

## Brief plan

1. Confirm with Tony where the canonical OneDrive/SharePoint folder lives and that “Anyone + password” sharing is allowed on the tenant.
2. For each policy page under `content/policies/`, generate a OneDrive/SharePoint **embed** URL and set `iframe_url` (see `ONEDRIVE_SETUP.md` on the WIP branch).
3. Smoke-test each policy page: iframe loads, password prompt works, mobile layout OK.
4. Land docs + content via PR into `develop`; delete the plan file when shipped.

## Open questions (defer to task kickoff)

- Exact list of policies that must ship (all current pages vs a subset)
- Whether passwords stay the same as the old Google Drive ones
- Whether download should be blocked on the share links
