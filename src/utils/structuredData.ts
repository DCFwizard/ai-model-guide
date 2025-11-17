import { AIModel } from '@/types';

export function generateModelStructuredData(model: AIModel) {
  const avgRating = (
    (model.rating.speed + model.rating.quality + model.rating.cost) / 3
  ).toFixed(1);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": model.name,
    "description": model.description,
    "applicationCategory": model.category || "AI Model",
    "offers": {
      "@type": "Offer",
      "price": model.cost_tier,
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "creator": {
      "@type": "Organization",
      "name": model.provider
    },
    "url": `${window.location.origin}/models/${model.id}`,
    "datePublished": model.release_date,
    "operatingSystem": "Web-based"
  };
}

export function generateBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Model Guide",
    "url": window.location.origin,
    "logo": `${window.location.origin}/logo.png`,
    "description": "Comprehensive guide to AI models, their capabilities, pricing, and use cases"
  };
}
