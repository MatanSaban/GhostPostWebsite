import { Button } from "../../ui/Button";
import styles from "./CTA.module.css";

export function CTA({ dict, locale }) {
  const t = dict?.cta || {};

  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.glow}></div>
          <div className={styles.content}>
            <h2 className={styles.title}>{t.title || "Ready to Automate Your SEO?"}</h2>
            <p className={styles.description}>
              {t.description || "Join hundreds of businesses growing their organic traffic with Ghost Post"}
            </p>
            <Button href={`/${locale}/register`} variant="primary" size="large">
              {t.button || "Start Free Trial"}
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
