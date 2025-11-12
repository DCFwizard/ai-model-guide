import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { enableMapSet } from 'immer';
import '@/lib/errorReporter';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import { SEOProvider } from '@/components/SEO';
import { PageLoader } from '@/components/PageLoader';
import '@/index.css';
import { Layout } from '@/pages/Layout';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('@/pages/HomePage').then(m => ({ default: m.HomePage })));
const ModelsPage = lazy(() => import('@/pages/ModelsPage').then(m => ({ default: m.ModelsPage })));
const ModelDetailPage = lazy(() => import('@/pages/ModelDetailPage').then(m => ({ default: m.ModelDetailPage })));
const UseCasesPage = lazy(() => import('@/pages/UseCasesPage').then(m => ({ default: m.UseCasesPage })));
const UseCaseDetailPage = lazy(() => import('@/pages/UseCaseDetailPage').then(m => ({ default: m.UseCaseDetailPage })));
const ComparisonPage = lazy(() => import('@/pages/ComparisonPage').then(m => ({ default: m.ComparisonPage })));
const ComparisonsPage = lazy(() => import('@/pages/ComparisonsPage').then(m => ({ default: m.ComparisonsPage })));
const DynamicComparisonPage = lazy(() => import('@/pages/DynamicComparisonPage').then(m => ({ default: m.DynamicComparisonPage })));
const BlogPage = lazy(() => import('@/pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
const FaqPage = lazy(() => import('@/pages/FaqPage').then(m => ({ default: m.FaqPage })));
const AboutPage = lazy(() => import('@/pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('@/pages/TermsPage').then(m => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

enableMapSet();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <Suspense fallback={<PageLoader />}><HomePage /></Suspense> },
      { path: 'models', element: <Suspense fallback={<PageLoader />}><ModelsPage /></Suspense> },
      { path: 'models/:id', element: <Suspense fallback={<PageLoader />}><ModelDetailPage /></Suspense> },
      { path: 'use-cases', element: <Suspense fallback={<PageLoader />}><UseCasesPage /></Suspense> },
      { path: 'use-cases/:slug', element: <Suspense fallback={<PageLoader />}><UseCaseDetailPage /></Suspense> },
      { path: 'comparisons', element: <Suspense fallback={<PageLoader />}><ComparisonsPage /></Suspense> },
      { path: 'comparisons/gpt-vs-claude', element: <Suspense fallback={<PageLoader />}><ComparisonPage /></Suspense> },
      { path: 'compare', element: <Suspense fallback={<PageLoader />}><DynamicComparisonPage /></Suspense> },
      { path: 'blog', element: <Suspense fallback={<PageLoader />}><BlogPage /></Suspense> },
      { path: 'blog/:slug', element: <Suspense fallback={<PageLoader />}><BlogPostPage /></Suspense> },
      { path: 'faq', element: <Suspense fallback={<PageLoader />}><FaqPage /></Suspense> },
      { path: 'about', element: <Suspense fallback={<PageLoader />}><AboutPage /></Suspense> },
      { path: 'contact', element: <Suspense fallback={<PageLoader />}><ContactPage /></Suspense> },
      { path: 'privacy', element: <Suspense fallback={<PageLoader />}><PrivacyPage /></Suspense> },
      { path: 'terms', element: <Suspense fallback={<PageLoader />}><TermsPage /></Suspense> },
      { path: '*', element: <Suspense fallback={<PageLoader />}><NotFoundPage /></Suspense> },
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