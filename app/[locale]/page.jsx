import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Pricing } from "../components/sections/Pricing";
import { CTA } from "../components/sections/CTA";
import { getDictionary } from "../../i18n/get-dictionary";
import { getPlans, getStaticPlans } from "../../lib/get-plans";
import { getOrganizationJsonLd, JsonLd } from "../../lib/metadata";
import styles from "../page.module.css";

export default async function Home({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  // Fetch plans from CMS API
  const apiPlans = await getPlans(locale);
  const plans = apiPlans || getStaticPlans();

  // Organization JSON-LD for homepage
  const organizationJsonLd = getOrganizationJsonLd();

  return (
    <div className={styles.page}>
      <JsonLd data={organizationJsonLd} />
      <Hero dict={dict} locale={locale} />
      <Features dict={dict} locale={locale} />
      <HowItWorks dict={dict} locale={locale} />
      <Pricing dict={dict} locale={locale} plans={plans} />
      <CTA dict={dict} locale={locale} />
    </div>
  );
}
