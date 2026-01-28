import Link from "next/link";
import styles from "./page.module.css";
import { Badge } from "../components/ui/Badge";

const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing SEO in 2026",
    excerpt:
      "Discover how autonomous AI agents are transforming the SEO landscape and what it means for your business growth strategy.",
    category: "AI & Automation",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "10 SEO Mistakes That Are Killing Your Rankings",
    excerpt:
      "Learn about the most common SEO mistakes that could be preventing your website from reaching the top of search results.",
    category: "SEO Strategy",
    date: "Jan 12, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "The Complete Guide to Technical SEO Audits",
    excerpt:
      "A comprehensive walkthrough of performing technical SEO audits to identify and fix critical issues on your website.",
    category: "Technical SEO",
    date: "Jan 10, 2026",
    readTime: "12 min read",
  },
  {
    id: 4,
    title: "Content Marketing Strategies That Actually Work",
    excerpt:
      "Proven content marketing strategies that drive traffic, engagement, and conversions in today's competitive digital landscape.",
    category: "Content Marketing",
    date: "Jan 8, 2026",
    readTime: "10 min read",
  },
  {
    id: 5,
    title: "Case Study: 300% Traffic Increase in 6 Months",
    excerpt:
      "How we helped an e-commerce client achieve a 300% increase in organic traffic using Ghost Post's AI-powered SEO automation.",
    category: "Case Studies",
    date: "Jan 5, 2026",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 6,
    title: "Understanding Core Web Vitals and Page Speed",
    excerpt:
      "Everything you need to know about Core Web Vitals and how to optimize your website for better performance and rankings.",
    category: "Technical SEO",
    date: "Jan 3, 2026",
    readTime: "9 min read",
  },
  {
    id: 7,
    title: "Link Building Strategies for 2026",
    excerpt:
      "Modern link building strategies that work in 2026, including white-hat techniques and automation tools.",
    category: "SEO Strategy",
    date: "Dec 28, 2025",
    readTime: "11 min read",
  },
  {
    id: 8,
    title: "How to Create SEO-Optimized Content at Scale",
    excerpt:
      "Learn how to produce high-quality, SEO-optimized content at scale using AI tools and proven content frameworks.",
    category: "Content Marketing",
    date: "Dec 25, 2025",
    readTime: "8 min read",
  },
];

const categories = [
  "All",
  "SEO Strategy",
  "Content Marketing",
  "Technical SEO",
  "AI & Automation",
  "Case Studies",
];

export const metadata = {
  title: "Blog - Ghost Post",
  description: "Insights, strategies, and stories about AI-powered SEO",
};

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Badge>Latest Insights</Badge>
          <h1 className={styles.title}>
            <span className={styles.gradient}>Ghost Post</span> Blog
          </h1>
          <p className={styles.subtitle}>
            Insights, strategies, and stories about AI-powered SEO and autonomous marketing automation.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <div className={styles.categories}>
            {categories.map((category) => (
              <button key={category} className={styles.categoryButton}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredBadge}>Featured</div>
              <span className={styles.featuredCategory}>{featuredPost.category}</span>
              <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
              <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
              <div className={styles.featuredMeta}>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <Link href={`/blog/${featuredPost.id}`} className={styles.readMore}>
                Read Article
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className={styles.postsSection}>
        <div className={styles.container}>
          <div className={styles.postsGrid}>
            {blogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <article key={post.id} className={styles.postCard}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className={styles.postLink}>
                    Read More →
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
