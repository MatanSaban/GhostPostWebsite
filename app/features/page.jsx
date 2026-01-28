import styles from "./page.module.css";
import { Badge } from "../components/ui/Badge";

const features = [
  {
    category: "content",
    icon: "brain",
    title: "AI-Powered Content Generation",
    description:
      "Ghost analyzes your niche, competitors, and top-ranking content to automatically generate SEO-optimized articles, product descriptions, and landing pages that rank.",
    benefits: [
      "Natural language processing for human-quality content",
      "Keyword optimization based on search intent",
      "Automatic content scheduling and publishing",
      "Competitor content gap analysis",
      "Multi-format content (blogs, products, FAQs)",
      "Brand voice customization",
    ],
    stats: { value: "10,000+", label: "Articles Generated Daily" },
  },
  {
    category: "research",
    icon: "search",
    title: "Intelligent Keyword Research",
    description:
      "Discover high-value keywords with low competition. Ghost continuously monitors search trends and identifies new opportunities before your competitors do.",
    benefits: [
      "Real-time keyword difficulty analysis",
      "Long-tail keyword discovery",
      "Search intent classification",
      "Seasonal trend predictions",
      "Keyword clustering and grouping",
      "SERP feature opportunities",
    ],
    stats: { value: "50M+", label: "Keywords Analyzed" },
  },
  {
    category: "links",
    icon: "link",
    title: "Automated Link Building",
    description:
      "Ghost identifies link-building opportunities, reaches out to relevant websites, and secures high-quality backlinks for your site automatically.",
    benefits: [
      "AI-powered outreach email generation",
      "Broken link opportunity detection",
      "Internal linking optimization",
      "Backlink quality monitoring",
      "Guest post opportunity finder",
      "Link reclamation",
    ],
    stats: { value: "100K+", label: "Backlinks Built" },
  },
  {
    category: "technical",
    icon: "settings",
    title: "Technical SEO Automation",
    description:
      "Automatically fix technical issues that hurt your rankings. Ghost handles meta tags, sitemaps, robots.txt, structured data, and more.",
    benefits: [
      "Auto-generated meta descriptions",
      "Schema markup implementation",
      "XML sitemap automatic updates",
      "Page speed optimization",
      "Mobile usability fixes",
      "Canonical tag management",
    ],
    stats: { value: "99.9%", label: "Issue Detection Rate" },
  },
  {
    category: "media",
    icon: "image",
    title: "Image & Media Optimization",
    description:
      "Compress images, generate alt text, and optimize media files for faster loading and better SEO without manual intervention.",
    benefits: [
      "Automatic image compression",
      "AI-generated alt text",
      "Lazy loading implementation",
      "WebP format conversion",
      "Responsive image sizing",
      "Image sitemap generation",
    ],
    stats: { value: "5M+", label: "Images Optimized" },
  },
  {
    category: "analytics",
    icon: "chart",
    title: "Advanced Analytics & Reporting",
    description:
      "Track your SEO performance with detailed analytics, competitor comparisons, and actionable insights delivered to your inbox.",
    benefits: [
      "Real-time ranking tracking",
      "Traffic source analysis",
      "ROI measurement",
      "Custom report generation",
      "Competitor traffic estimation",
      "Conversion funnel analysis",
    ],
    stats: { value: "1B+", label: "Data Points Tracked" },
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

export const metadata = {
  title: "Features - Ghost Post",
  description: "Explore 100+ automated SEO features powered by AI",
};

export default function FeaturesPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Badge>100+ Automated Features</Badge>
          <h1 className={styles.title}>
            Complete{" "}
            <span className={styles.gradient}>SEO Automation</span>
          </h1>
          <p className={styles.subtitle}>
            Everything you need to dominate search rankings, powered by autonomous AI that works 24/7.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{icons[feature.icon]}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <ul className={styles.benefitsList}>
                  {feature.benefits.map((benefit, i) => (
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
                  <span className={styles.statsLabel}>{feature.stats.label}</span>
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
            <h2 className={styles.ctaTitle}>Ready to automate your SEO?</h2>
            <p className={styles.ctaDescription}>
              Start your 14-day free trial and experience the power of AI-driven SEO.
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
