import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import { SeoLandingPage, landingPages } from './seo-pages';

export default function AppRouter() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        {landingPages.map((page) => (
          <Route key={page.slug} path={`/${page.slug}`} element={<SeoLandingPage page={page} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
