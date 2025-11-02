import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
interface SEOProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}
const DEFAULT_TITLE = 'Which AI Model To Use For What?';
const DEFAULT_DESCRIPTION = 'A practical guide to choosing the right AI model for your task. Compare GPT, Claude, Llama, and more for summarization, RAG, coding, and other use cases.';
export function SEO({ title, description, children }: SEOProps) {
  const pageTitle = title ? `${title} | AI Model Guide` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {children}
    </Helmet>
  );
}
export function SEOProvider({ children }: { children: React.ReactNode }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}