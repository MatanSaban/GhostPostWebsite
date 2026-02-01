import { PricingCard } from "./PricingCard";
import styles from "./Pricing.module.css";

const defaultPlans = [
  {
    name: "Starter",
    monthlyPrice: 99,
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 10,000 monthly visitors",
      "5 content pieces per month",
      "Basic keyword tracking",
      "Technical SEO automation",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 299,
    description: "For growing businesses serious about SEO",
    features: [
      "Up to 100,000 monthly visitors",
      "20 content pieces per month",
      "Advanced keyword strategy",
      "Full SEO automation",
      "Link building assistance",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    description: "For large organizations with complex needs",
    features: [
      "Unlimited traffic",
      "Unlimited content",
      "Multi-site support",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
    ],
    popular: false,
  },
];

export function Pricing({ dict, locale, plans: propPlans }) {
  const t = dict?.pricing || {};
  
  // Use plans from props (API) or fall back to defaults
  const plans = propPlans || t.plans || defaultPlans;
  
  // Format plans for display
  const formattedPlans = plans.map((plan) => ({
    name: plan.name,
    price: plan.monthlyPrice ? `$${plan.monthlyPrice}` : (t.custom || "Custom"),
    period: plan.monthlyPrice ? (t.perMonth || "/month") : "",
    description: plan.description,
    features: plan.features || [],
    limitations: plan.limitations || [],
    cta: plan.popular ? (t.startFreeTrial || "Start Free Trial") : 
         (plan.monthlyPrice ? (t.startFreeTrial || "Start Free Trial") : (t.contactSales || "Contact Sales")),
    popular: plan.popular || false,
  }));

  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t.titlePrefix || "Simple,"} <span className={styles.titleGradient}>{t.titleHighlight || "Transparent Pricing"}</span>
          </h2>
          <p className={styles.subtitle}>
            {t.subtitle || "Choose the plan that fits your business. No hidden fees, cancel anytime."}
          </p>
        </div>

        <div className={styles.grid}>
          {formattedPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} popularLabel={t.popularBadge} />
          ))}
        </div>
      </div>
    </section>
  );
}
