import { useEffect } from 'react';
import { onCLS, onFID, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals';

/**
 * Hook to measure and report Core Web Vitals
 *
 * Core Web Vitals tracked:
 * - LCP (Largest Contentful Paint) - Loading performance
 * - FID (First Input Delay) - Interactivity
 * - CLS (Cumulative Layout Shift) - Visual stability
 *
 * Additional metrics:
 * - FCP (First Contentful Paint)
 * - TTFB (Time to First Byte)
 * - INP (Interaction to Next Paint)
 */
export function useWebVitals() {
  useEffect(() => {
    // Send metrics to analytics or monitoring service
    const sendToAnalytics = (metric: Metric) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${metric.name}:`, {
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
        });
      }

      // In production, send to your analytics service
      // Example: Google Analytics 4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Example: Send to custom endpoint
      // navigator.sendBeacon('/api/web-vitals', JSON.stringify(metric));
    };

    // Track Core Web Vitals
    onCLS(sendToAnalytics); // Cumulative Layout Shift
    onFID(sendToAnalytics); // First Input Delay
    onLCP(sendToAnalytics); // Largest Contentful Paint

    // Track additional metrics
    onFCP(sendToAnalytics); // First Contentful Paint
    onTTFB(sendToAnalytics); // Time to First Byte
    onINP(sendToAnalytics); // Interaction to Next Paint

  }, []);
}

/**
 * Web Vitals thresholds
 *
 * Good ratings:
 * - LCP: ≤ 2.5s
 * - FID: ≤ 100ms
 * - CLS: ≤ 0.1
 * - FCP: ≤ 1.8s
 * - TTFB: ≤ 800ms
 * - INP: ≤ 200ms
 */
