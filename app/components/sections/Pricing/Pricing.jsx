import { PricingCard } from "./PricingCard";
import styles from "./Pricing.module.css";

const defaultPlans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 10,000 monthly visitors",
      "5 content pieces per month",
      "Basic keyword tracking",
      "Technical SEO automation",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "For growing businesses serious about SEO",
    features: [
      "Up to 100,000 monthly visitors",
      "20 content pieces per month",
      "Advanced keyword strategy",
      "Full SEO automation",
      "Link building assistance",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited traffic",
      "Unlimited content",
      "Multi-site support",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing({ dict, locale }) {
  const t = dict?.pricing || {};
  const plans = t.plans || defaultPlans;

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
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} popularLabel={t.popularBadge} />
          ))}
        </div>
      </div>
    </section>
  );
}
