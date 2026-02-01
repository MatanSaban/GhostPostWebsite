import { getDictionary } from '../../../i18n/get-dictionary';
import { Badge } from '../../components/ui/Badge';
import { PricingCards } from '../../pricing/PricingCards';
import { PricingFAQ } from '../../pricing/PricingFAQ';
import styles from '../../pricing/page.module.css';

const pricingPlans = [
  {
    name: "Starter",
    monthlyPrice: 99,
    annualPrice: 948,
    descriptionKey: "starterDescription",
    featuresKey: "starterFeatures",
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 299,
    annualPrice: 2870,
    descriptionKey: "proDescription",
    featuresKey: "proFeatures",
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    descriptionKey: "enterpriseDescription",
    featuresKey: "enterpriseFeatures",
    cta: "Contact Sales",
    popular: false,
  },
];

const defaultFaqs = [
  {
    question: "How does the free trial work?",
    answer: "Start with a 14-day free trial on any plan. No credit card required. Experience the full power of Ghost Post with all features unlocked.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately with prorated billing.",
  },
  {
    question: "What happens if I exceed my visitor limit?",
    answer: "We'll send you a notification when you're approaching 80% of your limit. You can either upgrade or continue with a small overage fee.",
  },
  {
    question: "Is Ghost Post safe for my website?",
    answer: "Absolutely. Ghost follows all Google Webmaster Guidelines and uses only white-hat, approved SEO techniques.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee on all plans. If you're not satisfied, we'll refund your payment in full.",
  },
];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.pricing?.metaTitle || "Pricing - Ghost Post",
    description: dict.pricing?.metaDescription || "Simple, transparent pricing for AI-powered SEO",
  };
}

export default async function PricingPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const t = dict.pricing || {};

  // Build localized plans with translated names and CTAs
  const localizedPlans = pricingPlans.map((plan, index) => {
    const nameKeys = ['starterName', 'proName', 'enterpriseName'];
    const ctaKeys = ['starterCta', 'proCta', 'enterpriseCta'];
    return {
      ...plan,
      name: t[nameKeys[index]] || plan.name,
      description: t[plan.descriptionKey] || plan.descriptionKey,
      features: t[plan.featuresKey] || [],
      cta: t[ctaKeys[index]] || plan.cta,
    };
  });

  // Get localized FAQs or use defaults
  const faqs = t.faqs || defaultFaqs;

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Badge>{t.badge || "14-Day Free Trial"}</Badge>
          <h1 className={styles.title}>
            {t.titlePrefix || "Simple,"} <span className={styles.gradient}>{t.titleHighlight || "Transparent Pricing"}</span>
          </h1>
          <p className={styles.subtitle}>
            {t.subtitle || "Choose the plan that fits your business. No hidden fees, cancel anytime."}
          </p>
        </div>
      </section>

      {/* Pricing Cards with Billing Toggle */}
      <PricingCards plans={localizedPlans} dict={t} locale={locale} />

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.faqTitle}>{t.faqTitle || "Frequently Asked Questions"}</h2>
          <PricingFAQ faqs={faqs} />
        </div>
      </section>
    </div>
  );
}
