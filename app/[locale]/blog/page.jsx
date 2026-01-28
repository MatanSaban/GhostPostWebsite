import Link from "next/link";
import { getDictionary } from '../../../i18n/get-dictionary';
import { Badge } from '../../components/ui/Badge';
import { BlogContent } from '../../blog/BlogContent';
import styles from '../../blog/page.module.css';

const blogPosts = [
  {
    id: 1,
    titleKey: "post1Title",
    excerptKey: "post1Excerpt",
    categoryKey: "categoryAI",
    date: "2026-01-15",
    readTime: 8,
    featured: true,
  },
  {
    id: 2,
    titleKey: "post2Title",
    excerptKey: "post2Excerpt",
    categoryKey: "categorySEO",
    date: "2026-01-12",
    readTime: 6,
  },
  {
    id: 3,
    titleKey: "post3Title",
    excerptKey: "post3Excerpt",
    categoryKey: "categoryTechnical",
    date: "2026-01-10",
    readTime: 12,
  },
  {
    id: 4,
    titleKey: "post4Title",
    excerptKey: "post4Excerpt",
    categoryKey: "categoryContent",
    date: "2026-01-08",
    readTime: 10,
  },
  {
    id: 5,
    titleKey: "post5Title",
    excerptKey: "post5Excerpt",
    categoryKey: "categoryCaseStudies",
    date: "2026-01-05",
    readTime: 7,
    featured: true,
  },
  {
    id: 6,
    titleKey: "post6Title",
    excerptKey: "post6Excerpt",
    categoryKey: "categoryTechnical",
    date: "2026-01-03",
    readTime: 9,
  },
  {
    id: 7,
    titleKey: "post7Title",
    excerptKey: "post7Excerpt",
    categoryKey: "categorySEO",
    date: "2025-12-28",
    readTime: 11,
  },
  {
    id: 8,
    titleKey: "post8Title",
    excerptKey: "post8Excerpt",
    categoryKey: "categoryContent",
    date: "2025-12-25",
    readTime: 8,
  },
];

const categoryKeys = ["all", "categorySEO", "categoryContent", "categoryTechnical", "categoryAI", "categoryCaseStudies"];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  return {
    title: dict.blog?.metaTitle || "Blog - Ghost Post",
    description: dict.blog?.metaDescription || "Insights, strategies, and stories about AI-powered SEO",
  };
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const t = dict.blog || {};

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Badge>{t.badge || "Latest Insights"}</Badge>
          <h1 className={styles.title}>
            {t.titleBefore ? (
              <>
                {t.title || "Blog"} <span className={styles.gradient}>{t.titleHighlight || "Ghost Post"}</span>{t.titleSuffix ? ` ${t.titleSuffix}` : ''}
              </>
            ) : (
              <>
                <span className={styles.gradient}>{t.titleHighlight || "Ghost Post"}</span> {t.title || "Blog"}
              </>
            )}
          </h1>
          <p className={styles.subtitle}>
            {t.subtitle || "Insights, strategies, and stories about AI-powered SEO and autonomous marketing automation."}
          </p>
        </div>
      </section>

      {/* Blog Content with Categories, Featured, and Posts */}
      <BlogContent 
        blogPosts={blogPosts}
        categoryKeys={categoryKeys}
        dict={t}
        locale={locale}
      />
    </div>
  );
}

