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
enableMapSet();
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'models', element: <ModelsPage /> },
      { path: 'use-cases', element: <UseCasesPage /> },
      // Placeholder routes for future phases
      { path: 'use-cases/:slug', element: <div>Use Case Detail Page</div> },
      { path: 'comparisons/:slug', element: <div>Comparison Page</div> },
      { path: 'faq', element: <div>FAQ Page</div> },
      { path: 'about', element: <div>About Page</div> },
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