import Link from "next/link";
import styles from "./PricingCard.module.css";

export function PricingCard({ name, price, period, description, features, cta, popular, popularLabel }) {
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
          {features.map((feature, index) => (
            <li key={index} className={styles.feature}>
              <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
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
