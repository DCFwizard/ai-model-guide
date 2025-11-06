import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://whichaimodeltouseforwhat.com';

export function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'AI Model Guide',
    'url': SITE_URL,
    'logo': `${SITE_URL}/logo.svg`,
    'description': 'A practical, no-hype guide to choosing the right AI model for your task. Compare capabilities, costs, and use cases to build better with AI.',
    'sameAs': [
      // Add social media profiles here when available
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Service',
      'url': `${SITE_URL}/contact`,
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'AI Model Guide',
    'url': SITE_URL,
    'description': 'A practical, no-hype guide to choosing the right AI model for your task.',
    'publisher': {
      '@type': 'Organization',
      'name': 'AI Model Guide',
      'logo': {
        '@type': 'ImageObject',
        'url': `${SITE_URL}/logo.svg`,
      },
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${SITE_URL}/models?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}
