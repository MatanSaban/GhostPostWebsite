import { PricingCards } from "../../../pricing/PricingCards";
import styles from "./Pricing.module.css";

export function Pricing({ dict, locale, plans: propPlans }) {
  const t = dict?.pricing || {};
  
  // Use plans from props (API) or fall back to defaults
  const plans = propPlans || t.plans || [];

  // Format plans for the PricingCards component (same as pricing page)
  const formattedPlans = plans.map((plan) => ({
    name: plan.name,
    slug: plan.slug,
    monthlyPrice: plan.monthlyPrice,
    annualPrice: plan.yearlyPrice || (plan.monthlyPrice ? plan.monthlyPrice * 10 : null),
    description: plan.description,
    features: plan.features || [],
    limitations: plan.limitations || [],
    popular: plan.popular || false,
    formattedPrice: plan.formattedPrice || null,
    period: plan.period || null,
    currency: plan.currency || 'USD',
    ilsMonthlyPrice: plan.ilsMonthlyPrice || null,
    ilsYearlyPrice: plan.ilsYearlyPrice || null,
    cta: plan.cta || (plan.popular ? (t.startFreeTrial || "Get Started") : 
         (plan.monthlyPrice ? (t.startFreeTrial || "Get Started") : (t.contactSales || "Contact Sales"))),
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
      </div>

      <PricingCards plans={formattedPlans} dict={t} locale={locale} />
    </section>
  );
}
