# Cursor project folder

Canonical, versioned home for shared agent context on this Hugo site.
Keep it small — prefer updating existing files over adding new ones.

## Layout

| Path | Purpose |
|------|---------|
| [`context/PROJECT.md`](context/PROJECT.md) | Stack, layout, commands, conventions |
| [`context/TIMELINE.md`](context/TIMELINE.md) | Living log of ownership, infra, and product milestones |
| [`rules/`](rules/) | Cursor rules (`.mdc`) |
| [`plans/`](plans/) | Short-lived feature/chore plans (delete when done) |

Root pointers: [`AGENTS.md`](../AGENTS.md). Human docs: [`README.md`](../README.md).

## Conventions

- **Timeline**: newest entries at the top. One short bullet per material change.
- **Plans**: name descriptively; delete when finished rather than letting them rot.
- **Rules**: keep under ~50 lines; one concern per file.
- Context updates belong in the same PR as the code they describe.
