# Sebastian Photos portfolio

React/Vite public site for GitHub Pages. Gallery and package changes come from the separate editing service; initial content is bundled for a graceful fallback. Photo and package administration happens at the editing service, with password access configured by the site owner.

Run `npm ci` and `npm run dev` to work locally. `npm run build` prepares the static site. GitHub Actions publishes `dist` on pushes to main.
