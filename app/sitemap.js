/**
 * Dynamic sitemap for GhostSEO Website
 * Automatically generates sitemap entries for all locales and pages
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import { locales, defaultLocale } from '../i18n/config';
import { blogPosts } from '../lib/blog-posts';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ghostseo.ai';

// Static pages (excluding /blog — blog has its own section below)
const staticPages = [
  '',           // Home page
  '/about',
  '/contact',
  '/faq',
  '/features',
  '/how-it-works',
  '/pricing',
  '/privacy',
  '/terms',
];

function buildLocaleAlternates(path) {
  const alternates = {};
  for (const locale of locales) {
    const localePath = locale === defaultLocale ? '' : `/${locale}`;
    alternates[locale] = `${siteUrl}${localePath}${path}`;
  }
  return alternates;
}

function pushLocalizedEntries(entries, path, { lastModified, changeFrequency, priority }) {
  const alternates = buildLocaleAlternates(path);

  entries.push({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages: alternates },
  });

  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    entries.push({
      url: `${siteUrl}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages: alternates },
    });
  }
}

export default async function sitemap() {
  const entries = [];
  const currentDate = new Date().toISOString();

  // Static pages
  for (const page of staticPages) {
    pushLocalizedEntries(entries, page, {
      lastModified: currentDate,
      changeFrequency: page === '' ? 'weekly' : 'monthly',
      priority: page === '' ? 1.0 : 0.8,
    });
  }

  // Blog index — higher priority and more frequent updates than other static pages
  pushLocalizedEntries(entries, '/blog', {
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  // Individual blog posts
  for (const post of blogPosts) {
    pushLocalizedEntries(entries, `/blog/${post.slug}`, {
      lastModified: post.date,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  return entries;
}
