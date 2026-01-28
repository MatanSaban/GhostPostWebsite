"use client";

import { useState } from "react";
import styles from "./page.module.css";

export function PricingFAQ({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
          >
            {faq.question}
            <svg
              className={`${styles.faqIcon} ${openFaq === index ? styles.open : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openFaq === index && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
