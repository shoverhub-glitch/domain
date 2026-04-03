import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './AppRouter';
import './index.css';

// GitHub Pages SPA fallback: recover the original client-side route after 404 redirect.
const ghPagesRedirect = window.location.search.match(/^\?\/(.*)$/);
if (ghPagesRedirect) {
  const decodedPath = ghPagesRedirect[1].replace(/~and~/g, '&');
  const restoredUrl = `${window.location.pathname}${decodedPath}${window.location.hash}`;
  window.history.replaceState(null, '', restoredUrl);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
