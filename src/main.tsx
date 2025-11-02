import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { enableMapSet } from 'immer';
import '@/lib/errorReporter';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import { SEOProvider } from '@/components/SEO';
import '@/index.css';
import { Layout } from '@/pages/Layout';
import { HomePage } from '@/pages/HomePage';
import { ModelsPage } from '@/pages/ModelsPage';
import { UseCasesPage } from '@/pages/UseCasesPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ModelDetailPage } from '@/pages/ModelDetailPage';
import { UseCaseDetailPage } from '@/pages/UseCaseDetailPage';
import { ComparisonPage } from '@/pages/ComparisonPage';
import { FaqPage } from '@/pages/FaqPage';
import { AboutPage } from '@/pages/AboutPage';
enableMapSet();
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'models', element: <ModelsPage /> },
      { path: 'models/:id', element: <ModelDetailPage /> },
      { path: 'use-cases', element: <UseCasesPage /> },
      { path: 'use-cases/:slug', element: <UseCaseDetailPage /> },
      { path: 'comparisons/gpt-vs-claude', element: <ComparisonPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <div>Contact Page</div> },
      { path: 'privacy', element: <div>Privacy Page</div> },
      { path: 'terms', element: <div>Terms Page</div> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <SEOProvider>
        <RouterProvider router={router} />
      </SEOProvider>
    </ErrorBoundary>
  </StrictMode>
);