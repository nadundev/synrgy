// Cookie consent utility functions

export const COOKIE_CONSENT_KEY = "cookie-consent";
export const COOKIE_CONSENT_DATE_KEY = "cookie-consent-date";

export type CookieConsent = "accepted" | "declined" | null;

/**
 * Get the current cookie consent status
 */
export const getCookieConsent = (): CookieConsent => {
  if (typeof window === "undefined") return null;

  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  return consent as CookieConsent;
};

/**
 * Check if cookies are accepted
 */
export const areCookiesAccepted = (): boolean => {
  return getCookieConsent() === "accepted";
};

/**
 * Check if user has made a cookie choice
 */
export const hasCookieChoice = (): boolean => {
  return getCookieConsent() !== null;
};

/**
 * Get when the cookie consent was given
 */
export const getCookieConsentDate = (): Date | null => {
  if (typeof window === "undefined") return null;

  const dateString = localStorage.getItem(COOKIE_CONSENT_DATE_KEY);
  return dateString ? new Date(dateString) : null;
};

/**
 * Clear cookie consent (for testing or reset)
 */
export const clearCookieConsent = (): void => {
  if (typeof window === "undefined") return;

  localStorage.removeItem(COOKIE_CONSENT_KEY);
  localStorage.removeItem(COOKIE_CONSENT_DATE_KEY);
};

/**
 * Check if consent is older than specified days
 */
export const isCookieConsentExpired = (days: number = 365): boolean => {
  const consentDate = getCookieConsentDate();
  if (!consentDate) return true;

  const expiryDate = new Date(consentDate);
  expiryDate.setDate(expiryDate.getDate() + days);

  return new Date() > expiryDate;
};
