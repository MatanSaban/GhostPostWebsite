import { getDictionary } from '../../../i18n/get-dictionary';
import { Badge } from '../../components/ui/Badge';
import styles from '../../about/page.module.css';

const teamMembers = [
  {
    nameKey: "member1Name",
    roleKey: "member1Role",
    bioKey: "member1Bio",
  },
  {
    nameKey: "member2Name",
    roleKey: "member2Role",
    bioKey: "member2Bio",
  },
  {
    nameKey: "member3Name",
    roleKey: "member3Role",
    bioKey: "member3Bio",
  },
  {
    nameKey: "member4Name",
    roleKey: "member4Role",
    bioKey: "member4Bio",
  },
];

const values = [
  {
    icon: "brain",
    titleKey: "value1Title",
    descriptionKey: "value1Description",
  },
  {
    icon: "users",
    titleKey: "value2Title",
    descriptionKey: "value2Description",
  },
  {
    icon: "shield",
    titleKey: "value3Title",
    descriptionKey: "value3Description",
  },
  {
    icon: "zap",
    titleKey: "value4Title",
    descriptionKey: "value4Description",
  },
];

const statKeys = [
  { valueKey: "stat1Value", labelKey: "stat1Label" },
  { valueKey: "stat2Value", labelKey: "stat2Label" },
  { valueKey: "stat3Value", labelKey: "stat3Label" },
  { valueKey: "stat4Value", labelKey: "stat4Label" },
];

const icons = {
  brain: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  users: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  shield: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  zap: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.about?.metaTitle || "About - Ghost Post",
    description: dict.about?.metaDescription || "Learn about our mission to revolutionize SEO with AI",
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const t = dict.about || {};

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Badge>{t.badge || "Our Mission"}</Badge>
          <h1 className={styles.title}>
            {t.title || "About"} <span className={styles.gradient}>{t.titleHighlight || "Ghost Post"}</span>
          </h1>
          <p className={styles.subtitle}>
            {t.subtitle || "We're on a mission to democratize SEO by making enterprise-level automation accessible to businesses of all sizes."}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {statKeys.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statValue}>{t[stat.valueKey] || stat.valueKey}</div>
                <div className={styles.statLabel}>{t[stat.labelKey] || stat.labelKey}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <h2 className={styles.sectionTitle}>{t.storyTitle || "Our Story"}</h2>
            <p className={styles.storyText}>
              {t.storyParagraph1 || "Ghost Post was founded in 2024 by a team of AI researchers and SEO experts who saw an opportunity to revolutionize how businesses approach search engine optimization."}
            </p>
            <p className={styles.storyText}>
              {t.storyParagraph2 || "We believed that the future of SEO wasn't about manual optimization or hiring expensive agencies—it was about building intelligent systems that could learn, adapt, and execute SEO strategies autonomously."}
            </p>
            <p className={styles.storyText}>
              {t.storyParagraph3 || "Today, Ghost Post powers SEO for hundreds of businesses worldwide, from startups to enterprise companies, helping them achieve sustainable organic growth without the complexity and cost of traditional SEO."}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.valuesTitle || "Our Values"}</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueHeader}>
                  <div className={styles.valueIcon}>{icons[value.icon]}</div>
                  <h3 className={styles.valueTitle}>{t[value.titleKey] || value.titleKey}</h3>
                </div>
                <p className={styles.valueDescription}>{t[value.descriptionKey] || value.descriptionKey}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t.teamTitle || "Leadership Team"}</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => {
              const name = t[member.nameKey] || member.nameKey;
              return (
                <div key={index} className={styles.teamCard}>
                  <div className={styles.avatar}>
                    <span>{name.split(" ").map((n) => n[0]).join("")}</span>
                  </div>
                  <h3 className={styles.memberName}>{name}</h3>
                  <p className={styles.memberRole}>{t[member.roleKey] || member.roleKey}</p>
                  <p className={styles.memberBio}>{t[member.bioKey] || member.bioKey}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>{t.ctaTitle || "Join us on our mission"}</h2>
            <p className={styles.ctaDescription}>
              {t.ctaDescription || "Ready to experience the future of SEO? Start your free trial today."}
            </p>
            <a href={`/${locale}/register`} className={styles.ctaButton}>
              {t.ctaButton || "Get Started Free"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
