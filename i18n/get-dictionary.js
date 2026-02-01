import 'server-only';

// API URL for translations (gp-platform)
const API_BASE_URL = process.env.PLATFORM_API_URL || 'http://localhost:3000';

// Static fallback dictionaries
const staticDictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  he: () => import('./dictionaries/he.json').then((module) => module.default),
};

/**
 * Fetch translations from the CMS API
 * @param {string} locale - The locale to fetch
 * @returns {Promise<object|null>} - The translations object or null if failed
 */
async function fetchFromAPI(locale) {
  try {
    const url = `${API_BASE_URL}/api/public/website/translations?locale=${locale}`;
    const response = await fetch(url, {
      next: { 
        revalidate: 300, // Cache for 5 minutes
        tags: [`website-translations-${locale}`]
      }
    });
    
    if (!response.ok) {
      console.warn(`[i18n] API returned ${response.status} for locale ${locale}`);
      return null;
    }
    
    const result = await response.json();
    return result.data || null;
  } catch (error) {
    console.warn(`[i18n] Failed to fetch from API for locale ${locale}:`, error.message);
    return null;
  }
}

/**
 * Get dictionary for a locale
 * Tries API first, falls back to static files
 * @param {string} locale - The locale to get
 * @returns {Promise<object>} - The dictionary object
 */
export const getDictionary = async (locale) => {
  const validLocale = staticDictionaries[locale] ? locale : 'he';
  
  // Always try to fetch from API first (CMS-managed content)
  const apiData = await fetchFromAPI(validLocale);
  if (apiData && Object.keys(apiData).length > 0) {
    return apiData;
  }
  
  // Fallback to static files if API is unavailable
  console.warn(`[i18n] Using static fallback for locale ${validLocale}`);
  return staticDictionaries[validLocale]();
};
