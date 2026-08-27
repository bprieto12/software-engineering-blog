# Software Engineering Blog

Built with [Astro](https://astro.build). Deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Commands

| Command             | Action                                       |
| :------------------- | :-------------------------------------------- |
| `npm install`         | Install dependencies                          |
| `npm run dev`         | Start local dev server at `localhost:4321`    |
| `npm run build`       | Build production site to `./dist/`            |
| `npm run preview`     | Preview the build locally before deploying    |

## Writing posts

Add a new Markdown or MDX file to `src/content/blog/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repo's **Settings → Pages**, set the source to **GitHub Actions** (one-time setup).

Site: https://bprieto12.github.io/software-engineering-blog/
