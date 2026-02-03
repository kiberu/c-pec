// Analytics utility for tracking events

export type AnalyticsEvent =
  | "quote_cta_click"
  | "form_submit"
  | "form_error"
  | "phone_click"
  | "whatsapp_click"
  | "email_click"
  | "product_view"
  | "service_view"
  | "faq_expand"
  | "navigation_click";

export interface AnalyticsEventData {
  event: AnalyticsEvent;
  location?: string;
  [key: string]: unknown;
}

// Track analytics events
export function trackEvent(event: AnalyticsEvent, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // Check if analytics is enabled (you can add a consent check here)
  const analyticsEnabled = true; // Replace with actual consent check

  if (!analyticsEnabled) return;

  // Google Analytics 4 example
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", event, {
      ...data,
    });
  }

  // Console log for development
  if (process.env.NODE_ENV === "development") {
    console.log("Analytics Event:", event, data);
  }

  // You can add other analytics providers here (e.g., Plausible, Mixpanel, etc.)
}

// Helper functions for common events
export const analytics = {
  trackQuoteCTA: (location: string) => {
    trackEvent("quote_cta_click", { location });
  },
  trackFormSubmit: (formType: string) => {
    trackEvent("form_submit", { form_type: formType });
  },
  trackFormError: (formType: string, field?: string) => {
    trackEvent("form_error", { form_type: formType, field });
  },
  trackPhoneClick: (phoneNumber: string) => {
    trackEvent("phone_click", { phone_number: phoneNumber });
  },
  trackWhatsAppClick: (phoneNumber: string) => {
    trackEvent("whatsapp_click", { phone_number: phoneNumber });
  },
  trackEmailClick: (email: string) => {
    trackEvent("email_click", { email });
  },
  trackProductView: (productId: string) => {
    trackEvent("product_view", { product_id: productId });
  },
  trackServiceView: (serviceId: string) => {
    trackEvent("service_view", { service_id: serviceId });
  },
  trackFAQExpand: (question: string) => {
    trackEvent("faq_expand", { question });
  },
  trackNavigationClick: (destination: string) => {
    trackEvent("navigation_click", { destination });
  },
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
