"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../../ui/ThemeToggle";
import { LanguageSwitcher } from "../../ui/LanguageSwitcher";
import { useAuthModal } from "../../../context/auth-modal-context";
import styles from "./Header.module.css";

export function MobileMenu({ locale, dict }) {
  const pathname = usePathname();
  const { openLogin, openRegister } = useAuthModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}`, label: "Home", key: "home" },
    { href: `/${locale}/features`, label: dict?.nav?.features || "Features", key: "features" },
    { href: `/${locale}/pricing`, label: dict?.nav?.pricing || "Pricing", key: "pricing" },
    { href: `/${locale}/how-it-works`, label: dict?.nav?.howItWorks || "How It Works", key: "howItWorks" },
    { href: `/${locale}/blog`, label: dict?.nav?.blog || "Blog", key: "blog" },
    { href: `/${locale}/about`, label: dict?.nav?.about || "About", key: "about" },
    { href: `/${locale}/contact`, label: dict?.nav?.contact || "Contact", key: "contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className={styles.mobileActions}>
        <LanguageSwitcher currentLocale={locale} />
        <ThemeToggle />
        <button 
          className={styles.menuButton} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={closeMobileMenu}>
          <nav className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ""}`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className={styles.mobileMenuDivider}></div>
            <button 
              onClick={() => { openLogin(); closeMobileMenu(); }} 
              className={styles.mobileLoginButton}
            >
              {dict?.nav?.login || "Login"}
            </button>
            <button 
              onClick={() => { openRegister(); closeMobileMenu(); }} 
              className={styles.mobileSignupButton}
            >
              {dict?.nav?.signUp || "Sign Up"}
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
