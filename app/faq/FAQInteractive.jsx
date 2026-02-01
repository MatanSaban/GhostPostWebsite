'use client';

import { useState } from 'react';
import styles from './page.module.css';

export function FAQInteractive({ categories, faqs, dict }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  const t = dict?.faq || {};

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* Search */}
      <div className={styles.searchWrapper}>
        <div className={styles.searchIcon}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder={t.searchPlaceholder || "Search questions..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          {/* Categories */}
          <div className={styles.categories}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className={styles.faqList}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className={`${styles.faqItem} ${openId === faq.id ? styles.open : ''}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className={styles.faqQuestion}
                  >
                    <span>{faq.question}</span>
                    <span className={styles.faqIcon}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noResults}>
                <p>{t.noResults || "No questions found matching your search."}</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className={styles.resetButton}
                >
                  {t.clearFilters || "Clear filters"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
