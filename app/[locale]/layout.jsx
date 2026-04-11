import { AuthModalProvider } from "../context/auth-modal-context";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { AuthModal } from "../components/ui/AuthModal";
import { getDictionary } from "../../i18n/get-dictionary";
import { locales, isRtlLocale } from "../../i18n/config";
import { generatePageMetadata, getOrganizationJsonLd, JsonLd } from "../../lib/metadata";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// This provides default metadata that can be overridden by individual pages
export async function generateMetadata({ params }) {
  const { locale } = await params;
  
  // Use the new CMS-powered metadata system
  // Page-specific SEO will be fetched from the CMS
  return await generatePageMetadata({
    locale,
    page: 'home',
    useDraft: false
  });
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isRtl = isRtlLocale(locale);

  return (
    <div lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
      <AuthModalProvider>
        <Header locale={locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
        <AuthModal locale={locale} dict={dict} />
      </AuthModalProvider>
    </div>
  );
}
