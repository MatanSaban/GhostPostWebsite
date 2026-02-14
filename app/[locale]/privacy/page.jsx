import { getDictionary } from '../../../i18n/get-dictionary';
import { Badge } from '../../components/ui/Badge';
import styles from '../../legal/page.module.css';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.privacy?.metaTitle || "Privacy Policy - Ghost Post",
    description: dict.privacy?.metaDescription || "Learn how Ghost Post protects your personal information.",
  };
}

export default async function PrivacyPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const t = dict.privacy || {};
  const sections = t.sections || [];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Badge>{t.badge || "Privacy"}</Badge>
          <h1 className={styles.title}>
            {t.title || "Privacy"}{' '}
            <span className={styles.gradient}>{t.titleHighlight || "Policy"}</span>
          </h1>
          <p className={styles.lastUpdated}>
            {t.lastUpdated || "Last updated: February 2026"}
          </p>
          {t.intro && (
            <p className={styles.intro}>{t.intro}</p>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          {sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.sectionContent}>{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
