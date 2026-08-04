# AGENTS.md

This repository uses [`.cursor/`](.cursor/) as the **canonical, versioned
home for shared agent context** (project notes, rules, timeline).

The folder is named `.cursor/` so Cursor auto-discovers `rules/`. Content
inside is plain Markdown and agent-agnostic.

## Where to look

| Need | Path |
|------|------|
| Project overview, stack, paths, commands | [`.cursor/context/PROJECT.md`](.cursor/context/PROJECT.md) |
| Living history of decisions & milestones | [`.cursor/context/TIMELINE.md`](.cursor/context/TIMELINE.md) |
| Agent rules (Cursor `.mdc`; body is plain Markdown) | [`.cursor/rules/`](.cursor/rules/) |
| Short-lived plans | [`.cursor/plans/`](.cursor/plans/) |
| Folder index | [`.cursor/README.md`](.cursor/README.md) |

Human docs: [`README.md`](README.md), [`ONEDRIVE_SETUP.md`](ONEDRIVE_SETUP.md).

## Keeping context alive

When a change alters how the site is built, deployed, or maintained, update
**TIMELINE.md** (and PROJECT.md if the overview is stale) in the same PR.
Do not create new context docs unless something does not fit those files.
