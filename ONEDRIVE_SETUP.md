# OneDrive / SharePoint policy embeds

Policy PDFs live in Microsoft 365 (SharePoint / OneDrive). The site embeds each document with an `iframe_url` in the policy page front matter.

## Intended sharing settings

For each file used on the public site:

1. **Share** → **Anyone with the link**
2. **Can view** only
3. **Block download**
4. **No password**

Organisation and site external sharing must allow **Anyone** links, or signed-out visitors will be asked to sign in with Microsoft. See Microsoft docs: [Manage sharing settings](https://learn.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off).

## Get the embed URL

1. Open the file in SharePoint/OneDrive.
2. **⋯ → Embed → Generate**.
3. Copy only the iframe `src` URL (typically `https://….sharepoint.com/sites/…/_layouts/15/embed.aspx?UniqueId=…`).
4. Test in a private window **signed out** of Microsoft.

## Put it on the site

In `content/policies/*.md`:

```yaml
iframe_url: "https://….sharepoint.com/sites/…/_layouts/15/embed.aspx?UniqueId=…"
password_required: false
```

Leave `iframe_url` empty only if the document should not show a viewer yet — do not leave broken placeholders.
