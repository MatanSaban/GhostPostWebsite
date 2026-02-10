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
 * Get fallback static plans using dictionary translations
 * @param {object} pricingDict - The pricing section of the locale dictionary
 */
export function getStaticPlans(pricingDict = {}) {
  // If the dictionary has a plans array, use it directly
  if (pricingDict.plans && Array.isArray(pricingDict.plans) && pricingDict.plans.length > 0) {
    return pricingDict.plans.map((plan) => ({
      name: plan.name,
      slug: plan.name, // fallback slug
      monthlyPrice: typeof plan.price === 'number' ? plan.price : null,
      yearlyPrice: null,
      description: plan.description || '',
      features: plan.features || [],
      popular: plan.popular || false,
      cta: plan.cta || null,
      // Price is already formatted as a string in the dictionary (e.g. "$99", "₪349")
      formattedPrice: typeof plan.price === 'string' ? plan.price : null,
      period: plan.period || '',
    }));
  }

  // Use the flat dictionary keys as fallback
  return [
    {
      name: pricingDict.starterName || "Starter",
      slug: "starter",
      monthlyPrice: 99,
      yearlyPrice: 948,
      description: pricingDict.starterDescription || "Perfect for small businesses and startups",
      features: pricingDict.starterFeatures || [
        "Up to 10,000 monthly visitors",
        "5 content pieces per month",
        "Basic keyword tracking",
        "Technical SEO automation",
        "Email support"
      ],
      popular: false,
      cta: pricingDict.starterCta || pricingDict.startFreeTrial || "Start Free Trial",
    },
    {
      name: pricingDict.proName || "Professional",
      slug: "pro",
      monthlyPrice: 299,
      yearlyPrice: 2870,
      description: pricingDict.proDescription || "For growing businesses serious about SEO",
      features: pricingDict.proFeatures || [
        "Up to 100,000 monthly visitors",
        "20 content pieces per month",
        "Advanced keyword strategy",
        "Full SEO automation",
        "Link building assistance",
        "Priority support"
      ],
      popular: true,
      cta: pricingDict.proCta || pricingDict.startFreeTrial || "Start Free Trial",
    },
    {
      name: pricingDict.enterpriseName || "Enterprise",
      slug: "enterprise",
      monthlyPrice: null,
      yearlyPrice: null,
      description: pricingDict.enterpriseDescription || "For large organizations with complex needs",
      features: pricingDict.enterpriseFeatures || [
        "Unlimited traffic",
        "Unlimited content",
        "Multi-site support",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support"
      ],
      popular: false,
      cta: pricingDict.enterpriseCta || pricingDict.contactSales || "Contact Sales",
    },
  ];
}
