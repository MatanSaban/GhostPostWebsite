import 'server-only';
import { getSiteSeo, getPageSeo } from '@/i18n/get-dictionary';
import { locales, defaultLocale } from '@/i18n/config';

/**
 * Build dynamic OG image URL
 * @param {object} options
 * @returns {string}
 */
function buildOgImageUrl({ title, description, page, locale }) {
  const siteUrl = 'https://ghostpost.co.il';
  const params = new URLSearchParams({
    title: title || 'Ghost Post',
    description: description?.substring(0, 100) || '',
    page: page || 'default',
    locale: locale || 'en'
  });
  return `${siteUrl}/api/og?${params.toString()}`;
}

/**
 * Generate Next.js metadata object for a page
 * @param {object} options
 * @param {string} options.locale - Current locale
 * @param {string} options.page - Page name (home, about, contact, etc.)
 * @param {boolean} options.useDraft - Whether to use draft SEO (for preview)
 * @param {object} options.overrides - Override any SEO values
 * @returns {Promise<object>} - Next.js metadata object
 */
export async function generatePageMetadata({ locale, page, useDraft = false, overrides = {} }) {
  const [siteSeo, pageSeo] = await Promise.all([
    getSiteSeo(),
    getPageSeo(locale, page, useDraft)
  ]);

  const siteUrl = siteSeo.siteUrl || 'https://ghostpost.co.il';
  const siteName = siteSeo.siteName?.[locale] || siteSeo.siteName?.en || 'Ghost Post';
  
  // Build canonical URL
  const pathPrefix = locale === defaultLocale ? '' : `/${locale}`;
  const pagePath = pageSeo.canonical || (page === 'home' ? '/' : `/${page}`);
  const canonicalUrl = `${siteUrl}${pathPrefix}${pagePath === '/' ? '' : pagePath}`;

  // Build alternates for all locales
  const alternates = {
    canonical: canonicalUrl,
    languages: {}
  };

  for (const loc of locales) {
    const prefix = loc === defaultLocale ? '' : `/${loc}`;
    const path = pagePath === '/' ? '' : pagePath;
    alternates.languages[loc] = `${siteUrl}${prefix}${path}`;
  }

  // Determine locale codes for Open Graph
  const localeMap = {
    en: 'en_US',
    he: 'he_IL',
    fr: 'fr_FR'
  };

  // Get OG image - use dynamic if no static image specified
  const title = overrides.title || pageSeo.title || siteName;
  const description = overrides.description || pageSeo.description || '';
  const ogImage = overrides.ogImage || pageSeo.ogImage || buildOgImageUrl({
    title,
    description,
    page,
    locale
  });

  // Build metadata object
  const metadata = {
    title,
    description,
    alternates,
    openGraph: {
      title: overrides.ogTitle || pageSeo.ogTitle || title,
      description: overrides.ogDescription || pageSeo.ogDescription || description,
      url: canonicalUrl,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteName
        }
      ],
      type: pageSeo.ogType || 'website',
      locale: localeMap[locale] || 'en_US'
    },
    twitter: {
      card: pageSeo.twitterCard || 'summary_large_image',
      site: siteSeo.twitterHandle,
      title: overrides.ogTitle || pageSeo.ogTitle || title,
      description: overrides.ogDescription || pageSeo.ogDescription || description,
      images: [ogImage]
    },
    robots: overrides.robots || pageSeo.robots || siteSeo.defaultRobots
  };

  return metadata;
}

/**
 * Generate JSON-LD structured data for a page
 * @param {string} locale - Current locale
 * @param {string} page - Page name
 * @param {boolean} useDraft - Whether to use draft SEO
 * @returns {Promise<object|null>} - JSON-LD object or null
 */
export async function getJsonLd(locale, page, useDraft = false) {
  const pageSeo = await getPageSeo(locale, page, useDraft);
  return pageSeo.jsonLd || null;
}

/**
 * Generate organization JSON-LD (for homepage)
 * @returns {object}
 */
export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ghost Post',
    url: 'https://ghostpost.co.il',
    logo: 'https://ghostpost.co.il/ghostpost_logo.png',
    description: 'AI-Powered SEO Automation Platform',
    sameAs: [
      'https://twitter.com/ghostpost',
      'https://linkedin.com/company/ghostpost'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'office@ghostpost.co.il',
      telephone: '+972-52-798-4133',
      contactType: 'customer service'
    }
  };
}

/**
 * Generate breadcrumb JSON-LD
 * @param {string} locale - Current locale
 * @param {Array<{name: string, url: string}>} items - Breadcrumb items
 * @returns {object}
 */
export function getBreadcrumbJsonLd(locale, items) {
  const siteUrl = 'https://ghostpost.co.il';
  const prefix = locale === defaultLocale ? '' : `/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${prefix}${item.url}`
    }))
  };
}

/**
 * Component to render JSON-LD in page
 * Usage: <JsonLd data={jsonLd} />
 */
export function JsonLd({ data }) {
  if (!data) return null;
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
