import { getDictionary } from '../../../i18n/get-dictionary';
import { Badge } from '../../components/ui/Badge';
import styles from '../../features/page.module.css';

const features = [
  {
    category: "content",
    icon: "brain",
    titleKey: "aiContent",
    descriptionKey: "aiContentDesc",
    benefitsKey: "aiContentBenefits",
    stats: { value: "10,000+", labelKey: "articlesGenerated" },
  },
  {
    category: "research",
    icon: "search",
    titleKey: "keywordResearch",
    descriptionKey: "keywordResearchDesc",
    benefitsKey: "keywordResearchBenefits",
    stats: { value: "50M+", labelKey: "keywordsAnalyzed" },
  },
  {
    category: "links",
    icon: "link",
    titleKey: "linkBuilding",
    descriptionKey: "linkBuildingDesc",
    benefitsKey: "linkBuildingBenefits",
    stats: { value: "100K+", labelKey: "backlinksBuilt" },
  },
  {
    category: "technical",
    icon: "settings",
    titleKey: "technicalSeo",
    descriptionKey: "technicalSeoDesc",
    benefitsKey: "technicalSeoBenefits",
    stats: { value: "99.9%", labelKey: "issueDetection" },
  },
  {
    category: "media",
    icon: "image",
    titleKey: "mediaOptimization",
    descriptionKey: "mediaOptimizationDesc",
    benefitsKey: "mediaOptimizationBenefits",
    stats: { value: "5M+", labelKey: "imagesOptimized" },
  },
  {
    category: "analytics",
    icon: "chart",
    titleKey: "analytics",
    descriptionKey: "analyticsDesc",
    benefitsKey: "analyticsBenefits",
    stats: { value: "1B+", labelKey: "dataPointsTracked" },
  },
];

const icons = {
  brain: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  search: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  link: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  settings: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  image: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  chart: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.features?.metaTitle || "Features - Ghost Post",
    description: dict.features?.metaDescription || "Explore 100+ automated SEO features powered by AI",
  };
}

export default async function FeaturesPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  // Fallback to English content if translations not available
  const t = dict.features || {};

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Badge>{t.pageBadge || t.badge || "100+ Automated Features"}</Badge>
          <h1 className={styles.title}>
            {locale === 'he' ? (
              <>
                {t.pageTitle || "כל התכונות של"}{" "}
                <span className={styles.gradient}>{t.pageTitleHighlight || "Ghost Post"}</span>
              </>
            ) : (
              <>
                {t.pageTitle || t.title || "All Features of"}{" "}
                <span className={styles.gradient}>{t.pageTitleHighlight || t.titleHighlight || "Ghost Post"}</span>
              </>
            )}
          </h1>
          <p className={styles.subtitle}>
            {t.pageSubtitle || t.subtitle || "Everything you need to dominate search rankings, powered by autonomous AI that works 24/7."}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <div className={styles.featureIcon}>{icons[feature.icon]}</div>
                  <h3 className={styles.featureTitle}>
                    {t[feature.titleKey] || feature.titleKey}
                  </h3>
                </div>
                <p className={styles.featureDescription}>
                  {t[feature.descriptionKey] || feature.descriptionKey}
                </p>
                <ul className={styles.benefitsList}>
                  {(t[feature.benefitsKey] || []).map((benefit, i) => (
                    <li key={i} className={styles.benefitItem}>
                      <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className={styles.featureStats}>
                  <span className={styles.statsValue}>{feature.stats.value}</span>
                  <span className={styles.statsLabel}>
                    {t[feature.stats.labelKey] || feature.stats.labelKey}
                  </span>
                </div>
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
              {t.ctaTitle || "Ready to automate your SEO?"}
            </h2>
            <p className={styles.ctaDescription}>
              {t.ctaDescription || "Start your 14-day free trial and experience the power of AI-driven SEO."}
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
