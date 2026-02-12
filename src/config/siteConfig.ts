/**
 * Site Configuration
 *
 * // TODO: Replace with client contact details
 * All placeholder contact information below should be updated with actual client data.
 */

export const siteConfig = {
  // Site Identity
  // TODO: Replace with client brand name
  name: "ДНЕВНИК",
  tagline: "Новините, които имат значение",

  // Contact Information
  // TODO: Replace with client contact details
  contact: {
    email: "contact@example.com",
    phone: "+359 2 123 4567",
    address: "бул. Витоша 100, 1000 София, България",
    workingHours: "Пон-Пет: 9:00 - 18:00",
  },

  // Social Media Links
  // TODO: Replace with client social media URLs
  social: {
    facebook: "https://facebook.com/dnevnik",
    twitter: "https://twitter.com/dnevnik",
    instagram: "https://instagram.com/dnevnik",
    youtube: "https://youtube.com/dnevnik",
    linkedin: "https://linkedin.com/company/dnevnik",
  },

  // SEO Configuration
  seo: {
    siteUrl: "https://dnevnik.bg",
    siteName: "ДНЕВНИК - Новините, които имат значение",
    defaultTitle: "ДНЕВНИК - Новини от България и света",
    defaultDescription:
      "Най-новите новини от България и света. Политика, спорт, култура, бизнес и още.",
    keywords: [
      "новини",
      "България",
      "политика",
      "спорт",
      "култура",
      "бизнес",
      "технологии",
    ],
    ogImage: "/og-image.jpg",
    twitterHandle: "@dnevnik",
  },

  // Analytics
  // TODO: Replace with client analytics IDs
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX",
    googleTagManagerId: "GTM-XXXXXXX",
  },

  // Features
  features: {
    newsletter: true,
    comments: false,
    darkMode: true,
  },

  // Legal
  // TODO: Replace with client legal information
  legal: {
    companyName: "ДНЕВНИК МЕДИА ООД",
    registrationNumber: "BG123456789",
    vatNumber: "BG123456789",
  },
};

export type SiteConfig = typeof siteConfig;
