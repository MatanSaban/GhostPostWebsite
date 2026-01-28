import Link from "next/link";
import { getDictionary } from '../../../../i18n/get-dictionary';
import styles from '../../../blog/post.module.css';

// Helper function to format date based on locale
function formatDate(dateString, locale) {
  const date = new Date(dateString);
  const localeMap = {
    en: 'en-US',
    fr: 'fr-FR',
    he: 'he-IL'
  };
  return date.toLocaleDateString(localeMap[locale] || 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Blog posts data (in a real app, this would come from a CMS or database)
const blogPostsData = {
  1: {
    titleKey: "post1Title",
    excerptKey: "post1Excerpt",
    categoryKey: "categoryAI",
    date: "2026-01-15",
    readTime: 8,
    author: {
      name: "Sarah Chen",
      role: "headOfSEO",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    tagsKeys: ["tagAI", "tagSEO", "tagAutomation", "tagFuture"],
    contentKey: "post1Content"
  },
  2: {
    titleKey: "post2Title",
    excerptKey: "post2Excerpt",
    categoryKey: "categorySEO",
    date: "2026-01-12",
    readTime: 6,
    author: {
      name: "Michael Torres",
      role: "seoSpecialist",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    tagsKeys: ["tagSEO", "tagStrategy", "tagRankings"],
    contentKey: "post2Content"
  },
  3: {
    titleKey: "post3Title",
    excerptKey: "post3Excerpt",
    categoryKey: "categoryTechnical",
    date: "2026-01-10",
    readTime: 12,
    author: {
      name: "Alex Kim",
      role: "technicalLead",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tagsKeys: ["tagTechnical", "tagSEO", "tagGuide"],
    contentKey: "post3Content"
  },
  4: {
    titleKey: "post4Title",
    excerptKey: "post4Excerpt",
    categoryKey: "categoryContent",
    date: "2026-01-08",
    readTime: 10,
    author: {
      name: "Emily Watson",
      role: "contentStrategist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    tagsKeys: ["tagContent", "tagMarketing", "tagStrategy"],
    contentKey: "post4Content"
  },
  5: {
    titleKey: "post5Title",
    excerptKey: "post5Excerpt",
    categoryKey: "categoryCaseStudies",
    date: "2026-01-05",
    readTime: 7,
    author: {
      name: "David Park",
      role: "caseStudyAuthor",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    tagsKeys: ["tagCaseStudy", "tagSuccess", "tagGrowth"],
    contentKey: "post5Content"
  },
  6: {
    titleKey: "post6Title",
    excerptKey: "post6Excerpt",
    categoryKey: "categoryTechnical",
    date: "2026-01-03",
    readTime: 9,
    author: {
      name: "Lisa Chang",
      role: "performanceExpert",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    tagsKeys: ["tagTechnical", "tagPerformance", "tagGoogle"],
    contentKey: "post6Content"
  },
  7: {
    titleKey: "post7Title",
    excerptKey: "post7Excerpt",
    categoryKey: "categorySEO",
    date: "2025-12-28",
    readTime: 11,
    author: {
      name: "James Wilson",
      role: "seoResearcher",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    tagsKeys: ["tagKeywords", "tagAI", "tagResearch"],
    contentKey: "post7Content"
  },
  8: {
    titleKey: "post8Title",
    excerptKey: "post8Excerpt",
    categoryKey: "categoryContent",
    date: "2025-12-25",
    readTime: 8,
    author: {
      name: "Rachel Green",
      role: "contentManager",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80"
    },
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80",
    tagsKeys: ["tagContent", "tagPlanning", "tagStrategy"],
    contentKey: "post8Content"
  }
};

export async function generateMetadata({ params }) {
  const { locale, id } = await params;
  const dict = await getDictionary(locale);
  const t = dict.blog || {};
  const post = blogPostsData[id];
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${t[post.titleKey] || post.titleKey} - Ghost Post Blog`,
    description: t[post.excerptKey] || post.excerptKey,
  };
}

export default async function BlogPostPage({ params }) {
  const { locale, id } = await params;
  const dict = await getDictionary(locale);
  const isRtl = locale === 'he';

  const t = dict.blog || {};
  const tp = dict.blogPost || {};
  const post = blogPostsData[id];

  if (!post) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <h1>{tp.notFound || "Post not found"}</h1>
          <Link href={`/${locale}/blog`} className={styles.backLink}>
            {isRtl ? '→' : '←'} {tp.backToBlog || "Back to Blog"}
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (excluding current post)
  const relatedPostIds = Object.keys(blogPostsData)
    .filter(postId => postId !== id)
    .slice(0, 3);

  return (
    <div className={styles.page}>
      {/* Back Button */}
      <div className={styles.backContainer}>
        <Link href={`/${locale}/blog`} className={styles.backLink}>
          <svg className={styles.backIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {tp.backToBlog || "Back to Blog"}
        </Link>
      </div>

      {/* Article */}
      <article className={styles.article}>
        {/* Header */}
        <header className={styles.header}>
          {/* Category & Meta */}
          <div className={styles.meta}>
            <span className={styles.category}>
              {t[post.categoryKey] || post.categoryKey}
            </span>
            <div className={styles.metaInfo}>
              <span className={styles.metaItem}>
                <svg className={styles.metaIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.date, locale)}
              </span>
              <span className={styles.metaItem}>
                <svg className={styles.metaIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime} {t.minRead || "min read"}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className={styles.title}>
            {t[post.titleKey] || post.titleKey}
          </h1>

          {/* Author & Actions */}
          <div className={styles.authorSection}>
            <div className={styles.author}>
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className={styles.authorAvatar}
              />
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>{post.author.name}</div>
                <div className={styles.authorRole}>{tp[post.author.role] || post.author.role}</div>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.actionButton} aria-label={tp.bookmark || "Bookmark"}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
              <button className={styles.actionButton} aria-label={tp.share || "Share"}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className={styles.featuredImage}>
          <div className={styles.imageGlow}></div>
          <img 
            src={post.image} 
            alt={t[post.titleKey] || post.titleKey}
            className={styles.image}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <p className={styles.excerpt}>
            {t[post.excerptKey] || post.excerptKey}
          </p>
          
          <p>
            {tp.contentPlaceholder || "This is where the full article content would be displayed. In a production environment, this content would be fetched from a CMS or database and rendered with proper formatting, including headings, paragraphs, lists, quotes, and images."}
          </p>

          <h2>{tp.sectionTitle1 || "Key Takeaways"}</h2>
          <ul>
            <li>{tp.takeaway1 || "AI-powered SEO tools are becoming essential for staying competitive"}</li>
            <li>{tp.takeaway2 || "Automation handles repetitive tasks while humans focus on strategy"}</li>
            <li>{tp.takeaway3 || "Data-driven decisions lead to better outcomes"}</li>
            <li>{tp.takeaway4 || "Continuous optimization is key to long-term success"}</li>
          </ul>

          <h2>{tp.sectionTitle2 || "Conclusion"}</h2>
          <p>
            {tp.conclusion || "The future of SEO is here, and it's powered by AI. By embracing these new tools and technologies, businesses can achieve better results with less manual effort. The key is to find the right balance between automation and human creativity."}
          </p>
        </div>

        {/* Tags */}
        <div className={styles.tags}>
          <svg className={styles.tagIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          {post.tagsKeys.map((tagKey) => (
            <span key={tagKey} className={styles.tag}>
              {tp[tagKey] || tagKey.replace('tag', '')}
            </span>
          ))}
        </div>

        {/* Share Section */}
        <div className={styles.shareSection}>
          <h3 className={styles.shareTitle}>{tp.shareArticle || "Share this article"}</h3>
          <div className={styles.shareButtons}>
            <button className={`${styles.shareButton} ${styles.twitter}`}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>Twitter</span>
            </button>
            <button className={`${styles.shareButton} ${styles.facebook}`}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </button>
            <button className={`${styles.shareButton} ${styles.linkedin}`}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className={styles.relatedSection}>
        <h2 className={styles.relatedTitle}>{tp.relatedArticles || "Related Articles"}</h2>
        <div className={styles.relatedGrid}>
          {relatedPostIds.map((postId) => {
            const relatedPost = blogPostsData[postId];
            return (
              <Link 
                key={postId}
                href={`/${locale}/blog/${postId}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedImageContainer}>
                  <img 
                    src={relatedPost.image} 
                    alt={t[relatedPost.titleKey] || relatedPost.titleKey}
                    className={styles.relatedImage}
                  />
                </div>
                <div className={styles.relatedContent}>
                  <span className={styles.relatedCategory}>
                    {t[relatedPost.categoryKey] || relatedPost.categoryKey}
                  </span>
                  <h3 className={styles.relatedPostTitle}>
                    {t[relatedPost.titleKey] || relatedPost.titleKey}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
