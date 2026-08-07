The Sporting Chance website, built using Hugo.

# Getting Started

- Install Docker
- cd into the directory and install dependencies with `yarn`
- Run the local site: `yarn dev` - this will run a dockerised version of the site to save needing to install hugo locally, it will also compile the css and js assets in the `src` folder - you can access the local site at http://localhost:1313
- Alternatively, you can run it with the hugo cli if you don't want to use docker

## Making styling updates

- The easiest way to restyle components is to modify the tailwind classes in the html files & partials - see [here](https://tailwindcss.com/)
- For additional styling changes, you can edit the files inside the `src` directory - these will get compiled to a production css build during deployment - the current brand colours are configured in the `tailwind.js` file and can be accessed using the `sc-` classnames

## CMS

- Forestry.io is currently setup as a static CMS for the site which links directly to the git repository - it writes it's content directly to the `/content` folder and all content can be found there. You can find global content in the `_index.md` file - additionally forestry writes some other metadata to the .forestry folder

## Deployment

- Netlify currently deploys the site on each push of the master branch of the repository
- Integration work should target the `develop` branch; promote to `master` for production

## Agent / AI context

Shared project context for Cursor (and other agents) lives under [`.cursor/`](.cursor/) — start at [`AGENTS.md`](AGENTS.md). Update [`.cursor/context/TIMELINE.md`](.cursor/context/TIMELINE.md) when material ownership, hosting, or architecture facts change.
