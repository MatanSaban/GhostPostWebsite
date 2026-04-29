import { getDictionary } from '../../../i18n/get-dictionary';
import { generatePageMetadata } from '../../../lib/metadata';
import { blogPosts } from '../../../lib/blog-posts';
import { Badge } from '../../components/ui/Badge';
import { BlogContent } from '../../blog/BlogContent';
import styles from '../../blog/page.module.css';

const categoryKeys = ["all", "categorySEO", "categoryContent", "categoryTechnical", "categoryAI", "categoryCaseStudies"];

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return await generatePageMetadata({
    locale,
    page: 'blog',
    useDraft: false
  });
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
                {t.title || "Blog"} <span className={styles.gradient}>{t.titleHighlight || "GhostSEO"}</span>{t.titleSuffix ? ` ${t.titleSuffix}` : ''}
              </>
            ) : (
              <>
                <span className={styles.gradient}>{t.titleHighlight || "GhostSEO"}</span> {t.title || "Blog"}
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
