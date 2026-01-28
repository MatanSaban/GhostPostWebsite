import styles from "./HowItWorks.module.css";

const defaultSteps = [
  {
    step: "01",
    title: "Connect Your Site",
    description: "Simple one-click integration with your website. Ghost analyzes your current SEO state and identifies opportunities.",
  },
  {
    step: "02",
    title: "AI Takes Over",
    description: "Ghost creates a comprehensive SEO strategy, generates optimized content, and implements technical fixes automatically.",
  },
  {
    step: "03",
    title: "Watch Growth",
    description: "Monitor your rankings improve in real-time. Ghost continuously optimizes based on performance data.",
  },
];

export function HowItWorks({ dict, locale }) {
  const t = dict?.howItWorks || {};
  const steps = t.steps || defaultSteps;

  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t.titlePrefix || "How Ghost"} <span className={styles.titleGradient}>{t.titleHighlight || "Works"}</span>
          </h2>
          <p className={styles.subtitle}>
            {t.subtitle || "From setup to results, Ghost handles everything automatically"}
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((item, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{item.step}</div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
