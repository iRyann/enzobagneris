import { useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { PageLayout } from '@/components/layout';
import { queryClient } from '@/lib/queryClient';
import { BlogPage, BlogPostPage, CVPage, HomePage, PortfolioPage, ServicesPage } from '@/pages';

/**
 * Gère le defilement automatique vers les ancres (#contact, etc.).
 */
function ScrollToAnchor() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

/**
 * Point d'entree de l'application.
 */
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <PageLayout>
          <ScrollToAnchor />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/about" element={<CVPage />} />
          </Routes>
        </PageLayout>
      </MemoryRouter>
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
