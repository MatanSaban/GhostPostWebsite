import { getDictionary } from '../../../i18n/get-dictionary';
import { Badge } from '../../components/ui/Badge';
import styles from '../../how-it-works/page.module.css';

const workflowSteps = [
  {
    step: "01",
    icon: "upload",
    titleKey: "step1Title",
    descriptionKey: "step1Description",
    detailsKey: "step1Details",
    durationKey: "step1Duration",
  },
  {
    step: "02",
    icon: "scan",
    titleKey: "step2Title",
    descriptionKey: "step2Description",
    detailsKey: "step2Details",
    durationKey: "step2Duration",
  },
  {
    step: "03",
    icon: "target",
    titleKey: "step3Title",
    descriptionKey: "step3Description",
    detailsKey: "step3Details",
    durationKey: "step3Duration",
  },
  {
    step: "04",
    icon: "brain",
    titleKey: "step4Title",
    descriptionKey: "step4Description",
    detailsKey: "step4Details",
    durationKey: "step4Duration",
  },
  {
    step: "05",
    icon: "zap",
    titleKey: "step5Title",
    descriptionKey: "step5Description",
    detailsKey: "step5Details",
    durationKey: "step5Duration",
  },
  {
    step: "06",
    icon: "trending",
    titleKey: "step6Title",
    descriptionKey: "step6Description",
    detailsKey: "step6Details",
    durationKey: "step6Duration",
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

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.howItWorks?.metaTitle || "How It Works - Ghost Post",
    description: dict.howItWorks?.metaDescription || "From setup to success in 6 simple steps",
  };
}

export default async function HowItWorksPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const t = dict.howItWorks || {};

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Badge>{t.badge || "Your SEO, Automated"}</Badge>
          <h1 className={styles.title}>
            {locale === 'he' ? (
              <>
                {t.titlePrefix || "איך"}{" "}
                <span className={styles.gradient}>Ghost Post</span>{" "}
                {t.titleHighlight || "עובד"}
              </>
            ) : (
              <>
                {t.title || "How Ghost Post"}{" "}
                <span className={styles.gradient}>{t.titleHighlight || "Works"}</span>
              </>
            )}
          </h1>
          <p className={styles.subtitle}>
            {t.subtitle || "From setup to success in 6 simple steps. Our AI agent handles everything autonomously, so you can focus on running your business while your organic traffic grows."}
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
                      <h3 className={styles.stepTitle}>
                        {t[step.titleKey] || step.titleKey}
                      </h3>
                      <span className={styles.stepDuration}>
                        {t[step.durationKey] || step.durationKey}
                      </span>
                    </div>
                    <p className={styles.stepDescription}>
                      {t[step.descriptionKey] || step.descriptionKey}
                    </p>
                    <ul className={styles.stepDetails}>
                      {(t[step.detailsKey] || []).map((detail, i) => (
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
            <h2 className={styles.ctaTitle}>
              {t.ctaTitle || "Ready to get started?"}
            </h2>
            <p className={styles.ctaDescription}>
              {t.ctaDescription || "Connect your website and let Ghost handle your SEO automatically."}
            </p>
            <a href={`/${locale}/register`} className={styles.ctaButton}>
              {t.ctaButton || "Start Free Trial"}
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
