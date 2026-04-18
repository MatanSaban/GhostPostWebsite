import 'server-only';

const API_BASE_URL = process.env.PLATFORM_API_URL || 'http://localhost:3000';

/**
 * Fetch FAQs from the CMS API for a specific page
 * @param {string} locale - The locale (en, he)
 * @param {string} page - The page name (pricing, faq)
 * @returns {Promise<object[]|null>} - Array of FAQ objects or null on failure
 */
export async function getFaqs(locale = 'he', page = 'pricing') {
  try {
    const url = `${API_BASE_URL}/api/public/website/faq?page=${page}&locale=${locale}`;
    const response = await fetch(url, {
      next: {
        revalidate: 300,
        tags: ['faqs'],
      },
    });

    if (!response.ok) {
      console.warn(`[faqs] API returned ${response.status}`);
      return null;
    }

    const result = await response.json();
    return result.faqs?.length > 0 ? result.faqs : null;
  } catch (error) {
    console.warn(`[faqs] Failed to fetch from API:`, error.message);
    return null;
  }
}
