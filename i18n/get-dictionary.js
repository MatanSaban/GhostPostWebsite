import 'server-only';

// API URL for CMS (gp-platform)
const CMS_URL = process.env.PLATFORM_API_URL || 'http://localhost:3000';

// Static fallback dictionaries
const staticDictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  he: () => import('./dictionaries/he.json').then((module) => module.default),
};

// Cache for site-wide SEO config
let siteSeoCache = null;

/**
 * Fetch content and SEO from the CMS API
 * @param {string} locale - The locale to fetch
 * @param {boolean} useDraft - Whether to fetch draft content (for preview)
 * @returns {Promise<{content: object, seo: object}|null>}
 */
async function fetchLocaleFromCMS(locale, useDraft = false) {
  try {
    const draftParam = useDraft ? '?draft=true' : '';
    const url = `${CMS_URL}/api/public/website/locale/${locale}${draftParam}`;
    const response = await fetch(url, {
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: [`content-${locale}`, `website-${locale}`]
      }
    });
    
    if (!response.ok) {
      console.warn(`[CMS] API returned ${response.status} for locale ${locale}`);
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.warn(`[CMS] Failed to fetch locale ${locale}:`, error.message);
    return null;
  }
}

/**
 * Fetch site-wide SEO configuration
 * @returns {Promise<object>}
 */
export async function getSiteSeo() {
  if (siteSeoCache) return siteSeoCache;
  
  try {
    const url = `${CMS_URL}/api/public/website/seo`;
    const response = await fetch(url, {
      next: { 
        revalidate: 3600,
        tags: ['website-seo']
      }
    });
    
    if (response.ok) {
      siteSeoCache = await response.json();
      return siteSeoCache;
    }
  } catch (error) {
    console.warn(`[CMS] Failed to fetch site SEO:`, error.message);
  }
  
  // Return defaults if CMS unavailable
  return {
    siteName: { en: 'Ghost Post', he: 'גוסט פוסט', fr: 'Ghost Post' },
    siteUrl: 'https://ghostpost.co.il',
    defaultOgImage: '/og/default.png',
    twitterHandle: '@ghostpost',
    defaultRobots: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
  };
}

/**
 * Fetch SEO for a specific page
 * @param {string} locale - The locale
 * @param {string} page - The page name (home, about, etc.)
 * @param {boolean} useDraft - Whether to fetch draft SEO
 * @returns {Promise<object>}
 */
export async function getPageSeo(locale, page, useDraft = false) {
  try {
    const draftParam = useDraft ? '?draft=true' : '';
    const url = `${CMS_URL}/api/public/website/seo/${locale}/${page}${draftParam}`;
    const response = await fetch(url, {
      next: { 
        revalidate: 3600,
        tags: [`seo-${locale}-${page}`, `website-seo-${locale}`]
      }
    });
    
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn(`[CMS] Failed to fetch page SEO for ${page}/${locale}:`, error.message);
  }
  
  // Return minimal defaults
  return {
    title: 'Ghost Post',
    description: 'AI-Powered SEO Automation',
    canonical: page === 'home' ? '/' : `/${page}`,
    robots: 'index, follow'
  };
}

/**
 * Get dictionary for a locale
 * Tries CMS first, falls back to static files
 * @param {string} locale - The locale to get
 * @param {boolean} useDraft - Whether to fetch draft content
 * @returns {Promise<object>} - The dictionary object
 */
export const getDictionary = async (locale, useDraft = false) => {
  const validLocale = staticDictionaries[locale] ? locale : 'he';
  
  // Try to fetch from CMS first
  const cmsData = await fetchLocaleFromCMS(validLocale, useDraft);
  if (cmsData?.content && Object.keys(cmsData.content).length > 0) {
    return cmsData.content;
  }
  
  // Fallback to static files if CMS is unavailable
  console.warn(`[i18n] Using static fallback for locale ${validLocale}`);
  return staticDictionaries[validLocale]();
};

/**
 * Get both dictionary and SEO for a locale
 * Useful for pages that need both
 * @param {string} locale - The locale
 * @param {boolean} useDraft - Whether to fetch draft content
 * @returns {Promise<{content: object, seo: object}>}
 */
export async function getLocaleData(locale, useDraft = false) {
  const validLocale = staticDictionaries[locale] ? locale : 'he';
  
  const cmsData = await fetchLocaleFromCMS(validLocale, useDraft);
  if (cmsData?.content) {
    return {
      content: cmsData.content,
      seo: cmsData.seo || {}
    };
  }
  
  // Fallback
  const content = await staticDictionaries[validLocale]();
  return { content, seo: {} };
}
