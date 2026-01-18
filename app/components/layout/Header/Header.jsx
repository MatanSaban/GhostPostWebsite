import { Logo } from "../../ui/Logo";
import { ThemeToggle } from "../../ui/ThemeToggle";
import { LanguageSwitcher } from "../../ui/LanguageSwitcher";
import { NavLinks } from "./NavLinks";
import { AuthButtons } from "./AuthButtons";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

export function Header({ locale, dict }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <NavLinks locale={locale} dict={dict} />

        <div className={styles.actions}>
          <LanguageSwitcher currentLocale={locale} />
          <ThemeToggle />
          <AuthButtons dict={dict} />
        </div>

        <MobileMenu locale={locale} dict={dict} />
      </div>
    </header>
  );
}
