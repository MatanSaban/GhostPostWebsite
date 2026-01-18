"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export function NavLinks({ locale, dict }) {
  const pathname = usePathname();

  const navLinks = [
    { href: `/${locale}`, label: dict?.nav?.home || "Home", key: "home" },
    { href: `/${locale}/features`, label: dict?.nav?.features || "Features", key: "features" },
    { href: `/${locale}/pricing`, label: dict?.nav?.pricing || "Pricing", key: "pricing" },
    { href: `/${locale}/how-it-works`, label: dict?.nav?.howItWorks || "How It Works", key: "howItWorks" },
    { href: `/${locale}/blog`, label: dict?.nav?.blog || "Blog", key: "blog" },
    { href: `/${locale}/about`, label: dict?.nav?.about || "About", key: "about" },
    { href: `/${locale}/contact`, label: dict?.nav?.contact || "Contact", key: "contact" },
  ];

  return (
    <nav className={styles.nav}>
      {navLinks.map((link) => (
        <Link
          key={link.key}
          href={link.href}
          className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
