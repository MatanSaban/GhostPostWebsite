/**
 * Dynamic robots.txt configuration for Ghost Post Website
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ghostpost.co.il';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/auth/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
