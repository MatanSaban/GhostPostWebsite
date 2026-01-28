import { FeatureCard } from "./FeatureCard";
import styles from "./Features.module.css";

const defaultFeatures = [
  {
    icon: "brain",
    title: "Autonomous AI Agent",
    description: "Ghost works 24/7 analyzing, optimizing, and implementing SEO strategies without human intervention.",
    color: "purple",
  },
  {
    icon: "sparkles",
    title: "Content Generation",
    description: "Automatically creates SEO-optimized content based on keyword research and competitor analysis.",
    color: "blue",
  },
  {
    icon: "trending",
    title: "Real-Time Optimization",
    description: "Continuously monitors rankings and adapts strategies to maintain top search positions.",
    color: "green",
  },
  {
    icon: "zap",
    title: "Smart Automations",
    description: "Automate meta tags, internal linking, image optimization, and technical SEO fixes.",
    color: "purple",
  },
  {
    icon: "clock",
    title: "Time Machine Mode",
    description: "Set it and forget it. Ghost handles everything from keyword research to content publishing.",
    color: "blue",
  },
  {
    icon: "shield",
    title: "Safe & Compliant",
    description: "Follows Google guidelines and best practices to ensure sustainable, penalty-free growth.",
    color: "green",
  },
];

export function Features({ dict, locale }) {
  const t = dict?.features || {};
  const features = t.items || defaultFeatures;

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t.titlePrefix || "Why Choose"} <span className={styles.titleGradient}>{t.titleHighlight || "Ghost Post"}</span>
          </h2>
          <p className={styles.subtitle}>
            {t.subtitle || "Powerful features that work together to dominate search rankings"}
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
