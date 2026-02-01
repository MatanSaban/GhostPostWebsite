import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Pricing } from "../components/sections/Pricing";
import { CTA } from "../components/sections/CTA";
import { getDictionary } from "../../i18n/get-dictionary";
import { getPlans, getStaticPlans } from "../../lib/get-plans";
import styles from "../page.module.css";

export default async function Home({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  // Fetch plans from CMS API
  const apiPlans = await getPlans(locale);
  const plans = apiPlans || getStaticPlans();

  return (
    <div className={styles.page}>
      <Hero dict={dict} locale={locale} />
      <Features dict={dict} locale={locale} />
      <HowItWorks dict={dict} locale={locale} />
      <Pricing dict={dict} locale={locale} plans={plans} />
      <CTA dict={dict} locale={locale} />
    </div>
  );
}
