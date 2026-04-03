# domain

This project is ready to deploy to Cloudflare Pages.

## Cloudflare Pages

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

## SPA routing

This app uses React Router with client-side routes such as `/app-development`.

Cloudflare Pages needs a fallback rule so direct visits and refreshes on those routes resolve to the app entry point. That rule is already included in [public/_redirects](public/_redirects):

```text
/* /index.html 200
```

## Deploy steps

1. Push this repository to GitHub.
2. In Cloudflare Pages, create a new project and connect this repository.
3. Use the build settings listed above.
4. Deploy.

## Local verification

```bash
npm install
npm run build
```

The production build has been verified successfully.