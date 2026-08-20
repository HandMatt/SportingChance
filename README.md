The Sporting Chance website, built using Hugo.

# Getting Started

- Install Docker
- First time (or after dependency changes):
  - `docker compose build assets`
  - `docker compose run --rm assets yarn install`
- Run the local site: `docker compose up` (or `yarn dev`) - Hugo and Webpack in Docker; open http://localhost:1313
- Optional: run with a local Hugo CLI and Node/Yarn if you prefer not to use Docker for everything

## Making styling updates

- The easiest way to restyle components is to modify the tailwind classes in the html files & partials - see [here](https://tailwindcss.com/)
- For additional styling changes, you can edit the files inside the `src` directory - these will get compiled to a production css build during deployment - the current brand colours are configured in the `tailwind.js` file and can be accessed using the `sc-` classnames

## CMS

- Forestry.io is currently setup as a static CMS for the site which links directly to the git repository - it writes it's content directly to the `/content` folder and all content can be found there. You can find global content in the `_index.md` file - additionally forestry writes some other metadata to the .forestry folder

## Deployment

- Netlify currently deploys the site on each push of the master branch of the repository
- Integration work should target the `develop` branch; promote to `master` for production

## Agent / AI context

Primary agent brief: [`AGENTS.md`](AGENTS.md). Living history and short-lived
plans: [`.cursor/`](.cursor/). Update [`.cursor/context/TIMELINE.md`](.cursor/context/TIMELINE.md)
when material ownership, hosting, or architecture facts change.
