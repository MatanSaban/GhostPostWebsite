import Image from "next/image";
import { Button } from "../../ui/Button";
import { HeroVisualization } from "./HeroVisualization";
import styles from "./Hero.module.css";

export function Hero({ dict, locale }) {
  const stats = [
    { 
      value: "247%", 
      label: locale === 'he' ? "עלייה בתנועה ממוצעת" : locale === 'fr' ? "Augmentation trafic" : "Avg Traffic Increase" 
    },
    { 
      value: "24/7", 
      label: locale === 'he' ? "ניטור AI" : locale === 'fr' ? "Surveillance IA" : "AI Monitoring" 
    },
    { 
      value: locale === 'he' ? "10 דק׳" : "10min", 
      label: locale === 'he' ? "זמן התקנה" : locale === 'fr' ? "Temps d'installation" : "Setup Time" 
    },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeIndicator}></span>
            {dict?.hero?.badge || "AI-Powered SEO"} • {locale === 'he' ? "אוטומציית SEO 24/7" : locale === 'fr' ? "Automatisation SEO 24/7" : "24/7 SEO Automation"}
          </div>

          <h1 className={styles.title}>
            <span>{dict?.hero?.title || "Your Website's SEO on"}</span>
            <span className={styles.titleGradient}>{dict?.hero?.titleHighlight || "Autopilot"}</span>
          </h1>

          <p className={styles.description}>
            {dict?.hero?.subtitle || "The first autonomous AI agent that optimizes, writes, and manages your site's SEO while you sleep. Set it and forget it."}
          </p>

          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.ctas}>
            <Button href={`/${locale}/register`} variant="primary" size="large">
              {dict?.hero?.cta || "Start Free Trial"}
              <svg className={styles.ctaIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href={`/${locale}/login`} variant="secondary" size="large">
              {dict?.hero?.secondaryCta || "Watch Demo"}
            </Button>
          </div>
        </div>

        <HeroVisualization locale={locale} />
      </div>
    </section>
  );
}
