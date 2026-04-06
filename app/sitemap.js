/**
 * Dynamic sitemap for Ghost Post Website
 * Automatically generates sitemap entries for all locales and pages
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import { locales, defaultLocale } from '../i18n/config';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ghostpost.io';

// Static pages that exist for all locales
const staticPages = [
  '',           // Home page
  '/about',
  '/blog',
  '/contact',
  '/faq',
  '/features',
  '/how-it-works',
  '/pricing',
  '/privacy',
  '/terms',
];

// Blog posts data - this can be fetched from API/database in the future
const blogPosts = [
  { id: 1, date: '2026-01-15' },
  { id: 2, date: '2026-01-12' },
  { id: 3, date: '2026-01-10' },
  { id: 4, date: '2026-01-08' },
  { id: 5, date: '2026-01-05' },
  { id: 6, date: '2026-01-03' },
  { id: 7, date: '2025-12-28' },
  { id: 8, date: '2025-12-25' },
];

export default async function sitemap() {
  const entries = [];
  const currentDate = new Date().toISOString();

  // Generate entries for all static pages across all locales
  for (const page of staticPages) {
    const alternates = {};
    
    // Build alternates for hreflang
    for (const locale of locales) {
      const localePath = locale === defaultLocale ? '' : `/${locale}`;
      alternates[locale] = `${siteUrl}${localePath}${page}`;
    }

    // Add entry for default locale (no prefix)
    entries.push({
      url: `${siteUrl}${page}`,
      lastModified: currentDate,
      changeFrequency: page === '' ? 'weekly' : 'monthly',
      priority: page === '' ? 1.0 : 0.8,
      alternates: {
        languages: alternates,
      },
    });

    // Add entries for other locales
    for (const locale of locales) {
      if (locale !== defaultLocale) {
        entries.push({
          url: `${siteUrl}/${locale}${page}`,
          lastModified: currentDate,
          changeFrequency: page === '' ? 'weekly' : 'monthly',
          priority: page === '' ? 1.0 : 0.8,
          alternates: {
            languages: alternates,
          },
        });
      }
    }
  }

  // Generate entries for blog posts across all locales
  for (const post of blogPosts) {
    const alternates = {};
    
    for (const locale of locales) {
      const localePath = locale === defaultLocale ? '' : `/${locale}`;
      alternates[locale] = `${siteUrl}${localePath}/blog/${post.id}`;
    }

    // Default locale entry
    entries.push({
      url: `${siteUrl}/blog/${post.id}`,
      lastModified: post.date,
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: alternates,
      },
    });

    // Other locales entries
    for (const locale of locales) {
      if (locale !== defaultLocale) {
        entries.push({
          url: `${siteUrl}/${locale}/blog/${post.id}`,
          lastModified: post.date,
          changeFrequency: 'monthly',
          priority: 0.6,
          alternates: {
            languages: alternates,
          },
        });
      }
    }
  }

  return entries;
}
