'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames } from '../../../../i18n/config';
import styles from './LanguageSwitcher.module.css';

function setCookie(name, value, days) {
  if (typeof document !== 'undefined') {
    document.cookie = `${name}=${value}; path=/; max-age=${days * 24 * 60 * 60}`;
  }
}

export function LanguageSwitcher({ currentLocale }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = useCallback((newLocale) => {
    // Remove current locale from pathname and add new one
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    
    // Set cookie for persistence
    setCookie('NEXT_LOCALE', newLocale, 365);
    
    router.push(newPath);
  }, [pathname, router]);

  return (
    <div className={styles.switcher}>
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`${styles.localeButton} ${currentLocale === locale ? styles.active : ''}`}
          aria-label={`Switch to ${localeNames[locale]}`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
