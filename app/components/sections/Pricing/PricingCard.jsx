import Link from "next/link";
import styles from "./PricingCard.module.css";

export function PricingCard({ name, price, period, description, features, limitations, cta, popular, popularLabel }) {
  return (
    <div className={`${styles.card} ${popular ? styles.popular : ""}`}>
      {popular && <div className={styles.popularBadge}>{popularLabel || "Most Popular"}</div>}
      <div className={styles.glow}></div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{price}</span>
          <span className={styles.period}>{period}</span>
        </div>
        <ul className={styles.features}>
          {/* Limitations */}
          {limitations?.map((limitation, index) => {
            const label = typeof limitation === 'string' ? limitation : limitation.label;
            return (
              <li key={`limit-${index}`} className={styles.feature}>
                <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{label}</span>
              </li>
            );
          })}
          {/* Features */}
          {features?.map((feature, index) => {
            const label = typeof feature === 'string' ? feature : feature.label;
            return (
              <li key={`feature-${index}`} className={styles.feature}>
                <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{label}</span>
              </li>
            );
          })}
        </ul>
        <Link
          href="/register"
          className={`${styles.cta} ${popular ? styles.ctaPrimary : styles.ctaSecondary}`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
