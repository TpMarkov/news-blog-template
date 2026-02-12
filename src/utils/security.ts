/**
 * Security Utilities
 *
 * Provides security-related functions for input validation, sanitization,
 * and protection against common web vulnerabilities.
 */

/**
 * Sanitize HTML to prevent XSS attacks
 * Removes potentially dangerous HTML tags and attributes
 */
export const sanitizeHTML = (html: string): string => {
  const temp = document.createElement("div");
  temp.textContent = html;
  return temp.innerHTML;
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Bulgarian format)
 */
export const isValidPhone = (phone: string): boolean => {
  // Bulgarian phone numbers: +359XXXXXXXXX or 0XXXXXXXXX
  const phoneRegex = /^(\+359|0)[0-9]{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

/**
 * Validate URL format
 */
export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Escape special characters for safe use in HTML attributes
 */
export const escapeAttribute = (value: string): string => {
  const escapeMap: Record<string, string> = {
    "\x26": "\x26amp;",
    "\x3C": "\x26lt;",
    "\x3E": "\x26gt;",
    "\x22": "\x26quot;",
    "\x27": "\x26#x27;",
  };

  return value.replace(/[&<>"']/g, (char) => escapeMap[char] || char);
};

/**
 * Generate a CSRF token
 */
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
};

/**
 * Content Security Policy headers for Vite
 * These should be configured on the server as well
 */
export const CSPHeaders = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://www.google-analytics.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; "),
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": ["camera=()", "microphone=()", "geolocation=()", "interest-cohort=()"].join(
    ", "
  ),
};

/**
 * Rate limiting configuration
 */
export const RateLimitConfig = {
  // Maximum requests per time window
  maxRequests: 100,
  // Time window in milliseconds (15 minutes)
  windowMs: 15 * 60 * 1000,
  // Routes to apply rate limiting
  routes: ["/api/contact", "/api/search", "/api/newsletter"],
};

/**
 * Input validation rule type
 */
interface ValidationRule {
  minLength: number;
  maxLength: number;
  pattern?: RegExp;
}

/**
 * Input validation rules
 */
export const ValidationRules: Record<string, ValidationRule> = {
  name: {
    minLength: 2,
    maxLength: 100,
    pattern: /^[a-zA-Zа-яА-Я\s\-']+$/,
  },
  email: {
    minLength: 5,
    maxLength: 255,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    minLength: 9,
    maxLength: 15,
    pattern: /^[\d\s\+\-()]+$/,
  },
  message: {
    minLength: 10,
    maxLength: 5000,
  },
  subject: {
    minLength: 3,
    maxLength: 200,
  },
};

/**
 * Validate input against rules
 */
export const validateInput = (
  value: string,
  ruleKey: string
): { valid: boolean; error?: string } => {
  const rule = ValidationRules[ruleKey];

  if (!rule) {
    return { valid: false, error: "Невалидно правило" };
  }

  if (value.length < rule.minLength) {
    return { valid: false, error: `Минимум ${rule.minLength} символа` };
  }

  if (value.length > rule.maxLength) {
    return { valid: false, error: `Максимум ${rule.maxLength} символа` };
  }

  if (rule.pattern && !rule.pattern.test(value)) {
    return { valid: false, error: "Невалиден формат" };
  }

  return { valid: true };
};

export default {
  sanitizeHTML,
  isValidEmail,
  isValidPhone,
  isValidURL,
  escapeAttribute,
  generateCSRFToken,
  CSPHeaders,
  RateLimitConfig,
  ValidationRules,
  validateInput,
};
