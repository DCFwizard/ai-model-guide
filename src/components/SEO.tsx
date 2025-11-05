import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
interface SEOProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}
const DEFAULT_TITLE = 'Which AI Model To Use For What?';
const DEFAULT_DESCRIPTION = 'A practical, no-hype guide to choosing the right model for your task. Compare capabilities, costs, and use cases to build better with AI.';
const SITE_URL = 'https://whichaimodeltouseforwhat.com';
const OG_IMAGE = `${SITE_URL}/og-image.svg`;
export function SEO({ title, description, children }: SEOProps) {
  const pageTitle = title ? `${title} | AI Model Guide` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : SITE_URL;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content="AI Model Guide" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {children}
    </Helmet>
  );
}
export function SEOProvider({ children }: { children: React.ReactNode }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}