import styles from "./page.module.css";
import { Badge } from "../components/ui/Badge";

const workflowSteps = [
  {
    step: "01",
    icon: "upload",
    title: "Connect Your Website",
    description: "Simple one-click integration with your CMS or custom platform",
    details: [
      "Add a single line of code or install our plugin",
      "Ghost analyzes your entire site structure",
      "No coding knowledge required",
      "Takes less than 5 minutes to set up",
    ],
    duration: "5 min",
  },
  {
    step: "02",
    icon: "scan",
    title: "Comprehensive Site Audit",
    description: "Ghost performs a deep analysis of your website's SEO health",
    details: [
      "Scans all pages for technical issues",
      "Analyzes content quality and keyword usage",
      "Evaluates site speed and Core Web Vitals",
      "Checks for broken links and redirects",
    ],
    duration: "15-30 min",
  },
  {
    step: "03",
    icon: "target",
    title: "Interview & Strategy",
    description: "Our AI learns about your business, goals, and target audience",
    details: [
      "Answer 10-15 questions about your business",
      "Define your target audience and goals",
      "Identify your main competitors",
      "Set traffic and ranking targets",
    ],
    duration: "10 min",
  },
  {
    step: "04",
    icon: "brain",
    title: "AI Optimization Plan",
    description: "Ghost creates a custom SEO strategy tailored to your business",
    details: [
      "Prioritizes high-impact improvements",
      "Creates content calendar based on opportunities",
      "Identifies quick wins for immediate results",
      "Plans long-term keyword strategy",
    ],
    duration: "30 min",
  },
  {
    step: "05",
    icon: "zap",
    title: "Automated Execution",
    description: "Ghost starts working autonomously to improve your SEO",
    details: [
      "Fixes technical issues automatically",
      "Optimizes existing content and meta tags",
      "Generates new SEO-optimized content",
      "Builds internal linking structure",
    ],
    duration: "Ongoing 24/7",
  },
  {
    step: "06",
    icon: "trending",
    title: "Results & Reporting",
    description: "Track your growth with real-time analytics and insights",
    details: [
      "Daily ranking updates",
      "Traffic growth reports",
      "Content performance metrics",
      "ROI calculations",
    ],
    duration: "Real-time",
  },
];

const icons = {
  upload: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  ),
  scan: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  target: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  brain: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  zap: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  trending: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

export const metadata = {
  title: "How It Works - Ghost Post",
  description: "From setup to success in 6 simple steps",
};

export default function HowItWorksPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Badge>Your SEO, Automated</Badge>
          <h1 className={styles.title}>
            How Ghost Post <span className={styles.gradient}>Works</span>
          </h1>
          <p className={styles.subtitle}>
            From setup to success in 6 simple steps. Our AI agent handles everything autonomously, so you can focus on running your business while your organic traffic grows.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className={styles.stepsSection}>
        <div className={styles.container}>
          <div className={styles.stepsGrid}>
            {workflowSteps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.step}</div>
                <div className={styles.stepContent}>
                  <div className={styles.stepIcon}>{icons[step.icon]}</div>
                  <div className={styles.stepInfo}>
                    <div className={styles.stepHeader}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <span className={styles.stepDuration}>{step.duration}</span>
                    </div>
                    <p className={styles.stepDescription}>{step.description}</p>
                    <ul className={styles.stepDetails}>
                      {step.details.map((detail, i) => (
                        <li key={i} className={styles.detailItem}>
                          <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className={styles.connector}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to get started?</h2>
            <p className={styles.ctaDescription}>
              Connect your website and let Ghost handle your SEO automatically.
            </p>
            <a href="/register" className={styles.ctaButton}>
              Start Free Trial
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
