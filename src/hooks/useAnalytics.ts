/**
 * Analytics Hook
 * 
 * Provides Google Analytics 4 integration for tracking page views and events.
 * 
 * // TODO: Replace with client analytics ID in .env file
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Google Analytics 4 Measurement ID
// TODO: Replace with client Google Analytics ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID || "G-XXXXXXXXXX";

/**
 * Initialize Google Analytics
 */
export const initAnalytics = (): void => {
  if (typeof window === "undefined") return;

  // Only initialize in production
  if (import.meta.env.PROD && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX") {
    // Load gtag.js script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
};

/**
 * Track page view
 */
export const trackPageView = (path: string): void => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
};

/**
 * Track custom event
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

/**
 * Analytics event categories
 */
export const EventCategories = {
  NAVIGATION: "navigation",
  ENGAGEMENT: "engagement",
  FORM: "form",
  SEARCH: "search",
  SOCIAL: "social",
  ARTICLE: "article",
} as const;

/**
 * Analytics event actions
 */
export const EventActions = {
  // Navigation
  PAGE_VIEW: "page_view",
  MENU_CLICK: "menu_click",
  
  // Engagement
  SCROLL_DEPTH: "scroll_depth",
  TIME_ON_PAGE: "time_on_page",
  
  // Form
  FORM_SUBMIT: "form_submit",
  FORM_ERROR: "form_error",
  
  // Search
  SEARCH_QUERY: "search_query",
  
  // Social
  SOCIAL_SHARE: "social_share",
  SOCIAL_CLICK: "social_click",
  
  // Article
  ARTICLE_READ: "article_read",
  ARTICLE_CLICK: "article_click",
} as const;

export default {
  initAnalytics,
  trackPageView,
  trackEvent,
  EventCategories,
  EventActions,
};
