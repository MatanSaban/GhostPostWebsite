"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

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
    month: 'short',
    day: 'numeric'
  });
}

export function BlogContent({ blogPosts, categoryKeys, dict, locale }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const isRtl = locale === 'he';
  const t = dict || {};

  // Filter posts based on active category
  const filteredPosts = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.categoryKey === activeCategory);

  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <>
      {/* Categories */}
      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <div className={styles.categories}>
            {categoryKeys.map((categoryKey) => (
              <button
                key={categoryKey}
                className={`${styles.categoryButton} ${activeCategory === categoryKey ? styles.active : ""}`}
                onClick={() => setActiveCategory(categoryKey)}
              >
                {t[categoryKey] || categoryKey}
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
              <div className={styles.featuredBadge}>{t.featured || "Featured"}</div>
              <span className={styles.featuredCategory}>
                {t[featuredPost.categoryKey] || featuredPost.categoryKey}
              </span>
              <h2 className={styles.featuredTitle}>
                {t[featuredPost.titleKey] || featuredPost.titleKey}
              </h2>
              <p className={styles.featuredExcerpt}>
                {t[featuredPost.excerptKey] || featuredPost.excerptKey}
              </p>
              <div className={styles.featuredMeta}>
                <span>{formatDate(featuredPost.date, locale)}</span>
                <span>•</span>
                <span>{featuredPost.readTime} {t.minRead || "min read"}</span>
              </div>
              <Link href={`/${locale}/blog/${featuredPost.id}`} className={styles.readMore}>
                {t.readArticle || "Read Article"}
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
          {regularPosts.length > 0 ? (
            <div className={styles.postsGrid}>
              {regularPosts.map((post) => (
                <article key={post.id} className={styles.postCard}>
                  <span className={styles.postCategory}>
                    {t[post.categoryKey] || post.categoryKey}
                  </span>
                  <h3 className={styles.postTitle}>
                    {t[post.titleKey] || post.titleKey}
                  </h3>
                  <p className={styles.postExcerpt}>
                    {t[post.excerptKey] || post.excerptKey}
                  </p>
                  <div className={styles.postMeta}>
                    <span>{formatDate(post.date, locale)}</span>
                    <span>•</span>
                    <span>{post.readTime} {t.minRead || "min read"}</span>
                  </div>
                  <Link href={`/${locale}/blog/${post.id}`} className={styles.postLink}>
                    {t.readMore || "Read More"} {isRtl ? '←' : '→'}
                  </Link>
                </article>
              ))}
            </div>
          ) : !featuredPost ? (
            <div className={styles.noResults}>
              <p>{t.noPostsFound || "No posts found in this category."}</p>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
