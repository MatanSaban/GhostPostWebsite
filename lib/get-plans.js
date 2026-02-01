import 'server-only';

// API URL for gp-platform
const API_BASE_URL = process.env.PLATFORM_API_URL || 'http://localhost:3000';

/**
 * Fetch plans from the CMS API
 * @param {string} locale - The locale for translations (en, fr, he)
 * @returns {Promise<object[]>} - Array of plan objects
 */
export async function getPlans(locale = 'he') {
  try {
    // Map locale to API lang format
    const lang = locale.toLowerCase();
    
    const url = `${API_BASE_URL}/api/public/plans?lang=${lang}`;
    const response = await fetch(url, {
      next: { 
        revalidate: 300, // Cache for 5 minutes
        tags: ['plans']
      }
    });
    
    if (!response.ok) {
      console.warn(`[plans] API returned ${response.status}`);
      return null;
    }
    
    const result = await response.json();
    return result.plans || null;
  } catch (error) {
    console.warn(`[plans] Failed to fetch from API:`, error.message);
    return null;
  }
}

/**
 * Get fallback static plans (used when API is unavailable)
 */
export function getStaticPlans() {
  return [
    {
      name: "Starter",
      slug: "starter",
      monthlyPrice: 99,
      yearlyPrice: 948,
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10,000 monthly visitors",
        "5 content pieces per month",
        "Basic keyword tracking",
        "Technical SEO automation",
        "Email support"
      ],
      popular: false,
    },
    {
      name: "Professional",
      slug: "pro",
      monthlyPrice: 299,
      yearlyPrice: 2870,
      description: "For growing businesses serious about SEO",
      features: [
        "Up to 100,000 monthly visitors",
        "20 content pieces per month",
        "Advanced keyword strategy",
        "Full SEO automation",
        "Link building assistance",
        "Priority support"
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      slug: "enterprise",
      monthlyPrice: null,
      yearlyPrice: null,
      description: "For large organizations with complex needs",
      features: [
        "Unlimited traffic",
        "Unlimited content",
        "Multi-site support",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support"
      ],
      popular: false,
    },
  ];
}
