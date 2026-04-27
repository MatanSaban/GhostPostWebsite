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
    siteName: { en: 'GhostSEO', he: 'GhostSEO', fr: 'GhostSEO' },
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
    title: 'GhostSEO',
    description: 'AI-Powered SEO Automation',
    canonical: page === 'home' ? '/' : `/${page}`,
    robots: 'index, follow'
  };
}

/**
 * Get dictionary for a locale.
 *
 * Merge strategy: load the static dictionary, then layer CMS content on
 * top. CMS-managed sections (home, about, contact...) override the static
 * file; sections the CMS doesn't know about (bot, future docs pages)
 * fall through to their localized strings from the static file.
 *
 * Previous behavior replaced the static dict entirely with CMS content,
 * which meant any key not yet imported into the CMS lost its translations
 * on production - that broke /bot in Hebrew/French.
 *
 * @param {string} locale - The locale to get
 * @param {boolean} useDraft - Whether to fetch draft content
 * @returns {Promise<object>} - The dictionary object
 */
export const getDictionary = async (locale, useDraft = false) => {
  const validLocale = staticDictionaries[locale] ? locale : 'he';

  const staticDict = await staticDictionaries[validLocale]();
  const cmsData = await fetchLocaleFromCMS(validLocale, useDraft);

  if (cmsData?.content && Object.keys(cmsData.content).length > 0) {
    // Top-level merge: CMS section objects replace the static section
    // wholesale (sections are managed as one editable unit in the CMS),
    // but sections only the static file declares pass through unchanged.
    return { ...staticDict, ...cmsData.content };
  }

  console.warn(`[i18n] Using static fallback for locale ${validLocale}`);
  return staticDict;
};

/**
 * Get both dictionary and SEO for a locale.
 * Useful for pages that need both.
 *
 * Same merge strategy as getDictionary - CMS sections override static,
 * static-only sections fall through.
 *
 * @param {string} locale - The locale
 * @param {boolean} useDraft - Whether to fetch draft content
 * @returns {Promise<{content: object, seo: object}>}
 */
export async function getLocaleData(locale, useDraft = false) {
  const validLocale = staticDictionaries[locale] ? locale : 'he';

  const staticDict = await staticDictionaries[validLocale]();
  const cmsData = await fetchLocaleFromCMS(validLocale, useDraft);

  if (cmsData?.content && Object.keys(cmsData.content).length > 0) {
    return {
      content: { ...staticDict, ...cmsData.content },
      seo: cmsData.seo || {},
    };
  }

  return { content: staticDict, seo: {} };
}
