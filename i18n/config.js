export const locales = ['en', 'fr', 'he'];
export const defaultLocale = 'en';

export const localeNames = {
  en: 'English',
  fr: 'Français',
  he: 'עברית'
};

export const rtlLocales = ['he'];

export function isRtlLocale(locale) {
  return rtlLocales.includes(locale);
}
