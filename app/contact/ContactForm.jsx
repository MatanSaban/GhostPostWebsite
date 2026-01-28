'use client';

import { useState } from 'react';
import styles from './page.module.css';

const icons = {
  send: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  )
};

export function ContactForm({ dict }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Support both flat keys and nested form/success objects
  const t = dict || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  if (submitted) {
    return (
      <div className={styles.successMessage}>
        <div className={styles.successIcon}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={styles.successTitle}>{t.successTitle || t.success?.title || "Message Sent!"}</h3>
        <p className={styles.successText}>
          {t.successMessage || t.success?.message || "Thank you for reaching out. We'll get back to you within 24 hours."}
        </p>
        <button 
          className={styles.resetButton}
          onClick={() => setSubmitted(false)}
        >
          {t.sendAnother || t.success?.sendAnother || "Send Another Message"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>{t.name || t.form?.name || "Name"}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.namePlaceholder || t.form?.namePlaceholder || "John Doe"}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>{t.email || t.form?.email || "Email"}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.emailPlaceholder || t.form?.emailPlaceholder || "john@example.com"}
            className={styles.input}
            required
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="company" className={styles.label}>{t.company || t.form?.company || "Company (Optional)"}</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={t.companyPlaceholder || t.form?.companyPlaceholder || "Your Company"}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject" className={styles.label}>{t.subject || t.form?.subject || "Subject"}</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="">{t.selectSubject || t.form?.selectSubject || "Select a subject"}</option>
            <option value="general">{t.subjectGeneral || t.form?.subjects?.general || "General Inquiry"}</option>
            <option value="sales">{t.subjectSales || t.form?.subjects?.sales || "Sales"}</option>
            <option value="support">{t.subjectSupport || t.form?.subjects?.support || "Technical Support"}</option>
            <option value="partnership">{t.subjectPartnership || t.form?.subjects?.partnership || "Partnership"}</option>
            <option value="other">{t.subjectOther || t.form?.subjects?.other || "Other"}</option>
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>{t.message || t.form?.message || "Message"}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t.messagePlaceholder || t.form?.messagePlaceholder || "Tell us how we can help..."}
          rows={6}
          className={styles.textarea}
          required
        />
      </div>

      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className={styles.loading}>{t.sending || t.form?.sending || "Sending..."}</span>
        ) : (
          <>
            {t.submit || t.form?.submit || "Send Message"}
            {icons.send}
          </>
        )}
      </button>
    </form>
  );
}
