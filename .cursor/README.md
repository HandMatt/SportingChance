# Cursor project folder

Project-specific agent extras for this Hugo site. The primary brief is root
[`AGENTS.md`](../AGENTS.md) (from the global template). Keep this folder small.

## Layout

| Path | Purpose |
|------|---------|
| [`context/TIMELINE.md`](context/TIMELINE.md) | Living log of ownership, infra, and product milestones |
| [`rules/`](rules/) | Cursor rules (`.mdc`) — project-only; globals cover KISS / no-commit / etc. |
| [`plans/`](plans/) | Short-lived feature/chore plans (delete when done) |

Human docs: [`README.md`](../README.md).

## Conventions

- **Timeline**: newest entries at the top. One short bullet per material change.
- **Plans**: name descriptively; delete when finished rather than letting them rot.
- **Rules**: keep under ~50 lines; one concern per file; do not duplicate global rules.
- Prefer updating `AGENTS.md` / `TIMELINE.md` over adding new context docs.
