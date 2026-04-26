'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthModal } from '../../../context/auth-modal-context';
import styles from './AuthModal.module.css';

const PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_URL || 'http://localhost:3000';

const translations = {
  en: {
    createAccount: 'Create Account',
    systemAccess: 'System Access',
    joinSubtitle: 'Join GhostSEO and automate your SEO',
    connectSubtitle: 'Connect to your GhostSEO workspace',
    signUpForPlan: (name) => `Sign up for the ${name} plan`,
    login: 'Login',
    register: 'Register',
    fullName: 'Full Name',
    fullNamePlaceholder: 'John Doe',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    password: 'Password',
    passwordPlaceholder: 'Create a strong password',
    confirmPassword: 'Confirm Password',
    confirmPasswordPlaceholder: 'Confirm your password',
    forgotPassword: 'Forgot password?',
    termsPrefix: 'I agree to the ',
    termsOfService: 'Terms of Service',
    termsAnd: ' and ',
    privacyPolicy: 'Privacy Policy',
    connecting: 'Connecting...',
    connect: 'Connect',
    orContinueWith: 'Or continue with',
    continueWithGoogle: 'Continue with Google',
  },
  he: {
    createAccount: 'יצירת חשבון',
    systemAccess: 'התחברות',
    joinSubtitle: 'הצטרף ל-GhostSEO ואוטומט את ה-SEO שלך',
    connectSubtitle: 'התחבר לסביבת העבודה שלך ב-GhostSEO',
    signUpForPlan: (name) => `הרשמה לתוכנית ${name}`,
    login: 'התחברות',
    register: 'הרשמה',
    fullName: 'שם מלא',
    fullNamePlaceholder: 'ישראל ישראלי',
    email: 'אימייל',
    emailPlaceholder: 'your@email.com',
    password: 'סיסמה',
    passwordPlaceholder: 'צור סיסמה חזקה',
    confirmPassword: 'אימות סיסמה',
    confirmPasswordPlaceholder: 'הזן את הסיסמה שוב',
    forgotPassword: 'שכחת סיסמה?',
    termsPrefix: 'אני מסכים ל',
    termsOfService: 'תנאי השימוש',
    termsAnd: ' ול',
    privacyPolicy: 'מדיניות הפרטיות',
    connecting: 'מתחבר...',
    connect: 'התחבר',
    orContinueWith: 'או המשך עם',
    continueWithGoogle: 'המשך עם Google',
  },
};

export function AuthModal({ locale, dict }) {
  const router = useRouter();
  const { isOpen, mode, setMode, selectedPlan, close } = useAuthModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = translations[locale] || translations.en;

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') close();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (mode === 'register') {
      const form = e.target;
      const fullName = form.querySelector('#auth-name')?.value || '';
      const email = form.querySelector('#auth-email')?.value || '';

      // Split full name into first/last
      const nameParts = fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Build redirect URL with pre-filled data
      const params = new URLSearchParams();
      if (firstName) params.set('firstName', firstName);
      if (lastName) params.set('lastName', lastName);
      if (email) params.set('email', email);
      if (selectedPlan?.slug) params.set('plan', selectedPlan.slug);

      close();
      window.location.href = `${PLATFORM_URL}/auth/register?${params.toString()}`;
      return;
    }
    
    // Login flow - simulate
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    close();
    router.push('/dashboard');
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={close} />

      {/* Modal */}
      <div className={styles.modal}>
        <div className={styles.card}>
          {/* Glow effect */}
          <div className={styles.glow} />

          {/* Close Button */}
          <button onClick={close} className={styles.closeButton} aria-label="Close modal">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title */}
          <div className={styles.header}>
            <h2 className={styles.title}>
              {mode === 'login' ? t.systemAccess : t.createAccount}
            </h2>
            <p className={styles.subtitle}>
              {mode === 'login' 
                ? t.connectSubtitle
                : selectedPlan
                  ? t.signUpForPlan(selectedPlan.name)
                  : t.joinSubtitle}
            </p>
          </div>

          {/* Mode Toggle */}
          <div className={styles.modeToggle}>
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`${styles.modeButton} ${mode === 'login' ? styles.active : ''}`}
            >
              {t.login}
            </button>
            <button
              type="button"
              onClick={() => setMode('register')}
              className={`${styles.modeButton} ${mode === 'register' ? styles.active : ''}`}
            >
              {t.register}
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Name Field (Register only) */}
            {mode === 'register' && (
              <div className={styles.formGroup}>
                <label htmlFor="auth-name" className={styles.label}>{t.fullName}</label>
                <input
                  type="text"
                  id="auth-name"
                  placeholder={t.fullNamePlaceholder}
                  className={styles.input}
                  required
                />
              </div>
            )}

            {/* Email Field */}
            <div className={styles.formGroup}>
              <label htmlFor="auth-email" className={styles.label}>{t.email}</label>
              <input
                type="email"
                id="auth-email"
                defaultValue={mode === 'login' ? 'demo@ghostpost.ai' : ''}
                placeholder={mode === 'register' ? t.emailPlaceholder : ''}
                className={styles.input}
                readOnly={mode === 'login'}
                required
              />
            </div>

            {/* Password Field */}
            <div className={styles.formGroup}>
              <label htmlFor="auth-password" className={styles.label}>{t.password}</label>
              <input
                type="password"
                id="auth-password"
                defaultValue={mode === 'login' ? '••••••••' : ''}
                placeholder={mode === 'register' ? t.passwordPlaceholder : ''}
                className={styles.input}
                readOnly={mode === 'login'}
                required
              />
            </div>

            {/* Confirm Password Field (Register only) */}
            {mode === 'register' && (
              <div className={styles.formGroup}>
                <label htmlFor="auth-confirm-password" className={styles.label}>{t.confirmPassword}</label>
                <input
                  type="password"
                  id="auth-confirm-password"
                  placeholder={t.confirmPasswordPlaceholder}
                  className={styles.input}
                  required
                />
              </div>
            )}

            {/* Forgot Password (Login only) */}
            {mode === 'login' && (
              <div className={styles.forgotPassword}>
                <button type="button" className={styles.forgotLink}>
                  {t.forgotPassword}
                </button>
              </div>
            )}

            {/* Terms (Register only) */}
            {mode === 'register' && (
              <div className={styles.terms}>
                <input type="checkbox" id="auth-terms" className={styles.checkbox} required />
                <label htmlFor="auth-terms" className={styles.termsLabel}>
                  {t.termsPrefix}
                  <a href="/terms" className={styles.termsLink}>{t.termsOfService}</a>
                  {t.termsAnd}
                  <a href="/privacy" className={styles.termsLink}>{t.privacyPolicy}</a>
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              <span>{isSubmitting
                ? t.connecting
                : mode === 'login'
                  ? t.connect
                  : t.createAccount}</span>
              {!isSubmitting && (
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              )}
            </button>
          </form>

          {/* Social Login Divider */}
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>{t.orContinueWith}</span>
            <div className={styles.dividerLine} />
          </div>

          {/* Google Auth Button */}
          <div className={styles.socialButtons}>
            <button
              type="button"
              className={styles.socialButton}
              aria-label={t.continueWithGoogle}
              onClick={() => {
                window.location.href = mode === 'register'
                  ? `${PLATFORM_URL}/api/auth/google?mode=register&consent=true`
                  : `${PLATFORM_URL}/api/auth/google?mode=login`;
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>{t.continueWithGoogle}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
