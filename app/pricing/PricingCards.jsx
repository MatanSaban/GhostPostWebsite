"use client";

import { useState } from "react";
import styles from "./page.module.css";

export function PricingCards({ plans, dict, locale = 'en' }) {
  const [isAnnual, setIsAnnual] = useState(false);

  const formatPrice = (price) => {
    if (!price && price !== 0) return null;
    return `$${price}`;
  };

  return (
    <>
      {/* Billing Toggle */}
      <div className={styles.billingToggleWrapper}>
        <div className={styles.billingToggle}>
          <button
            className={`${styles.toggleButton} ${!isAnnual ? styles.active : ""}`}
            onClick={() => setIsAnnual(false)}
          >
            {dict?.monthly || "Monthly"}
          </button>
          <button
            className={`${styles.toggleButton} ${isAnnual ? styles.active : ""}`}
            onClick={() => setIsAnnual(true)}
          >
            {dict?.annual || "Annual"}
            <span className={styles.discount}>{dict?.save || "Save 20%"}</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.pricingGrid}>
            {plans.map((plan, index) => {
              const monthlyPrice = isAnnual ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice;
              return (
              <div
                key={index}
                className={`${styles.pricingCard} ${plan.popular ? styles.popular : ""}`}
              >
                {plan.popular && <div className={styles.popularBadge}>{dict?.popularBadge || "Most Popular"}</div>}
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                <div className={styles.priceContainer}>
                  {plan.monthlyPrice ? (
                    <>
                      <span className={styles.price}>
                        {plan.formattedPrice && !isAnnual
                          ? plan.formattedPrice
                          : formatPrice(monthlyPrice)}
                      </span>
                      <span className={styles.period}>{plan.period || dict?.perMonth || "/month"}</span>
                    </>
                  ) : (
                    <span className={styles.price}>
                      {plan.formattedPrice || dict?.custom || "Custom"}
                    </span>
                  )}
                </div>
                {isAnnual && plan.annualPrice && (
                  <p className={styles.annualNote}>
                    {(dict?.billedAnnually || "Billed ${amount}/year").replace('${amount}', formatPrice(plan.annualPrice))}
                  </p>
                )}
                <ul className={styles.featureList}>
                  {/* Limitations */}
                  {plan.limitations?.map((limitation, i) => {
                    const label = typeof limitation === 'string' ? limitation : limitation.label;
                    return (
                      <li key={`limit-${i}`} className={styles.featureItem}>
                        <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {label}
                      </li>
                    );
                  })}
                  {/* Features */}
                  {plan.features?.map((feature, i) => {
                    const label = typeof feature === 'string' ? feature : feature.label;
                    return (
                      <li key={`feature-${i}`} className={styles.featureItem}>
                        <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {label}
                      </li>
                    );
                  })}
                </ul>
                <a
                  href={plan.popular ? `/${locale}/register` : plan.monthlyPrice ? `/${locale}/register` : `/${locale}/contact`}
                  className={`${styles.ctaButton} ${plan.popular ? styles.primaryButton : styles.secondaryButton}`}
                >
                  {plan.cta}
                </a>
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
