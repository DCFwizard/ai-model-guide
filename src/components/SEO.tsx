import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  noindex?: boolean;
  children?: React.ReactNode;
}
const DEFAULT_TITLE = 'Which AI Model To Use For What?';
const DEFAULT_DESCRIPTION = 'A practical, no-hype guide to choosing the right model for your task. Compare capabilities, costs, and use cases to build better with AI.';
const SITE_URL = 'https://whichaimodeltouseforwhat.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const LOGO_URL = `${SITE_URL}/logo.png`;
const TWITTER_IMAGE = `${SITE_URL}/twitter-image.png`;
export function SEO({ title, description, canonical, keywords, noindex = false, children }: SEOProps) {
  const pageTitle = title ? `${title} | AI Model Guide` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : SITE_URL;
  const canonicalUrl = canonical || currentUrl;

  // Schema.org Organization markup for Google Search
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Model Guide",
    "alternateName": "Which AI Model To Use For What",
    "url": SITE_URL,
    "logo": LOGO_URL,
    "description": DEFAULT_DESCRIPTION,
    "sameAs": []
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content="AI Model Guide" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={TWITTER_IMAGE} />

      {/* Schema.org JSON-LD for Google */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {children}
    </Helmet>
  );
}
export function SEOProvider({ children }: { children: React.ReactNode }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}