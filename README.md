# domain

This project is configured for GitHub Pages without a custom domain.

## GitHub Pages setup

- Build command: `npm run build`
- Build output directory: `dist`
- Deploy method: manual upload (no GitHub Actions)
- Site URL format: `https://<your-github-username>.github.io/domain/`

## Base path

This repo is configured as a GitHub Pages project site using base path `/domain/` in `vite.config.ts`.
If you rename the repository, update the `base` value to match the new repo name.

## SPA routing on GitHub Pages

This app uses React Router with client-side routes (for example `/app-development`).

GitHub Pages does not support server rewrites, so this repository includes the SPA fallback approach:

- `public/404.html` redirects unknown paths to `/?/...`
- `src/main.tsx` restores the original route before React Router mounts

This keeps direct visits and browser refreshes on nested routes working on GitHub Pages.

## Manual deploy (without GitHub Actions)

1. Run `npm install` and `npm run build` locally.
2. Open `dist` and upload its contents to the branch used by GitHub Pages (commonly `gh-pages`), at repository root.
3. In GitHub: `Settings -> Pages -> Build and deployment -> Source`, select `Deploy from a branch`.
4. Select your Pages branch (for example `gh-pages`) and folder `/ (root)`.
5. Save.

For every new release, rebuild locally and upload updated `dist` contents again.

No DNS setup is required when using the default github.io URL.

## Local verification

```bash
npm install
npm run build
```