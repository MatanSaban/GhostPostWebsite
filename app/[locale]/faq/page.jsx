import { getDictionary } from '../../../i18n/get-dictionary';
import { Badge } from '../../components/ui/Badge';
import { FAQInteractive } from '../../faq/FAQInteractive';
import styles from '../../faq/page.module.css';

const defaultFaqCategories = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'features', label: 'Features' },
  { id: 'technical', label: 'Technical' }
];

const defaultFaqs = [
  {
    id: 1,
    category: 'general',
    question: 'What is GhostPost?',
    answer: 'GhostPost is an AI-powered SEO platform that helps businesses improve their search engine rankings through automated content creation, keyword optimization, and technical SEO improvements. Our platform uses advanced machine learning to analyze your website and provide actionable recommendations.'
  },
  {
    id: 2,
    category: 'general',
    question: 'How does GhostPost work?',
    answer: 'GhostPost works in three simple steps: First, we connect to your website and perform a comprehensive audit. Then, our AI analyzes your content and competitors to identify opportunities. Finally, we provide automated optimizations and content suggestions that you can implement with a single click.'
  },
  {
    id: 3,
    category: 'general',
    question: 'Is my data secure with GhostPost?',
    answer: 'Absolutely. We take security very seriously. All data is encrypted in transit and at rest using industry-standard encryption protocols. We never share your data with third parties, and you maintain full ownership of all your content and analytics.'
  },
  {
    id: 4,
    category: 'pricing',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and wire transfers for Enterprise plans. All payments are processed securely through our payment partners.'
  },
  {
    id: 5,
    category: 'pricing',
    question: 'Can I cancel my subscription at any time?',
    answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to your plan until the end of your billing period. We don't offer refunds for partial months, but you won't be charged again after cancellation."
  },
  {
    id: 6,
    category: 'pricing',
    question: 'Do you offer a free trial?',
    answer: "Yes! We offer a 14-day free trial on all plans. No credit card required. You'll have full access to all features during the trial period so you can see exactly how GhostPost can help your business."
  },
  {
    id: 7,
    category: 'features',
    question: 'How does AI content generation work?',
    answer: 'Our AI content generator uses advanced natural language processing to create SEO-optimized content. It analyzes top-ranking content in your niche, identifies key topics and keywords, and generates unique, high-quality articles that match your brand voice and style guidelines.'
  },
  {
    id: 8,
    category: 'features',
    question: 'Can I integrate GhostPost with my existing tools?',
    answer: 'Yes! GhostPost integrates with popular platforms including WordPress, Shopify, Webflow, Google Analytics, Google Search Console, Ahrefs, SEMrush, and many more. We also offer a REST API for custom integrations.'
  },
  {
    id: 9,
    category: 'features',
    question: 'How accurate are the keyword recommendations?',
    answer: 'Our keyword recommendations are highly accurate, powered by data from multiple sources including search volume estimates, competition analysis, and trend data. We update our keyword database daily to ensure you have the most current information.'
  },
  {
    id: 10,
    category: 'technical',
    question: 'What CMS platforms does GhostPost support?',
    answer: 'GhostPost supports all major CMS platforms including WordPress, Shopify, Wix, Squarespace, Webflow, Drupal, and custom-built websites. Our universal JavaScript snippet works on any platform.'
  },
  {
    id: 11,
    category: 'technical',
    question: 'Does GhostPost affect my website performance?',
    answer: "No. Our optimization scripts are lightweight and load asynchronously, meaning they won't impact your page load times. In fact, our technical SEO recommendations often help improve overall site performance."
  },
  {
    id: 12,
    category: 'technical',
    question: 'How often is the SEO data updated?',
    answer: 'Rankings and traffic data are updated daily. Content recommendations are refreshed weekly, and our keyword database is updated every 24 hours to reflect the latest search trends and volumes.'
  }
];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.faq?.metaTitle || "FAQ - Ghost Post",
    description: dict.faq?.metaDescription || "Frequently asked questions about Ghost Post",
  };
}

export default async function FAQPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const t = dict.faq || {};

  // Get localized categories or use defaults
  const faqCategories = t.categories || defaultFaqCategories;
  
  // Get localized FAQs or use defaults
  const faqs = t.items || defaultFaqs;

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Badge>{t.badge || "Got Questions?"}</Badge>
          <h1 className={styles.title}>
            {t.title || "Frequently Asked"} <span className={styles.gradient}>{t.titleHighlight || "Questions"}</span>
          </h1>
          <p className={styles.subtitle}>
            {t.subtitle || "Find answers to common questions about GhostPost. Can't find what you're looking for? Contact our support team."}
          </p>

          <FAQInteractive categories={faqCategories} faqs={faqs} dict={t} />
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>{t.ctaTitle || "Still have questions?"}</h2>
            <p className={styles.ctaDescription}>
              {t.ctaDescription || "Our support team is here to help. Reach out and we'll get back to you within 24 hours."}
            </p>
            <a href={`/${locale}/contact`} className={styles.ctaButton}>
              {t.ctaButton || "Contact Support"}
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
