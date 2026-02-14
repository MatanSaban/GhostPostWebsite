import { getDictionary } from '../../../i18n/get-dictionary';
import { Badge } from '../../components/ui/Badge';
import styles from '../../legal/page.module.css';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.terms?.metaTitle || "Terms of Service - Ghost Post",
    description: dict.terms?.metaDescription || "Read Ghost Post's Terms of Service.",
  };
}

export default async function TermsPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const t = dict.terms || {};
  const sections = t.sections || [];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Badge>{t.badge || "Legal"}</Badge>
          <h1 className={styles.title}>
            {t.title || "Terms of"}{' '}
            <span className={styles.gradient}>{t.titleHighlight || "Service"}</span>
          </h1>
          <p className={styles.lastUpdated}>
            {t.lastUpdated || "Last updated: February 2026"}
          </p>
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
