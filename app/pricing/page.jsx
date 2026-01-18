import styles from "./page.module.css";
import { Badge } from "../components/ui/Badge";
import { PricingCards } from "./PricingCards";
import { PricingFAQ } from "./PricingFAQ";

const pricingPlans = [
  {
    name: "Starter",
    monthlyPrice: 99,
    annualPrice: 948,
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 10,000 monthly visitors",
      "5 AI-generated content pieces per month",
      "Basic keyword tracking (50 keywords)",
      "Technical SEO automation",
      "Meta tag optimization",
      "Schema markup implementation",
      "Image SEO optimization",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 299,
    annualPrice: 2870,
    description: "For growing businesses serious about SEO",
    features: [
      "Up to 100,000 monthly visitors",
      "20 AI-generated content pieces per month",
      "Advanced keyword strategy (200 keywords)",
      "Full SEO automation suite",
      "Link building assistance & outreach",
      "Advanced competitor analysis",
      "Internal linking automation",
      "Priority support (24h response)",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    description: "For large organizations with complex needs",
    features: [
      "Unlimited traffic",
      "Unlimited AI-generated content",
      "Unlimited keywords",
      "Multi-site support (up to 10 sites)",
      "White-label reporting",
      "Custom integrations & workflows",
      "API access with high rate limits",
      "24/7 priority phone support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "Start with a 14-day free trial on any plan. No credit card required. Experience the full power of Ghost Post with all features unlocked.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately with prorated billing.",
  },
  {
    question: "What happens if I exceed my visitor limit?",
    answer:
      "We'll send you a notification when you're approaching 80% of your limit. You can either upgrade or continue with a small overage fee.",
  },
  {
    question: "Is Ghost Post safe for my website?",
    answer:
      "Absolutely. Ghost follows all Google Webmaster Guidelines and uses only white-hat, approved SEO techniques.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all plans. If you're not satisfied, we'll refund your payment in full.",
  },
];

export default function PricingPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Badge>14-Day Free Trial</Badge>
          <h1 className={styles.title}>
            Simple, <span className={styles.gradient}>Transparent Pricing</span>
          </h1>
          <p className={styles.subtitle}>
            Choose the plan that fits your business. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards with Billing Toggle */}
      <PricingCards plans={pricingPlans} />

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <PricingFAQ faqs={faqs} />
        </div>
      </section>
    </div>
  );
}
