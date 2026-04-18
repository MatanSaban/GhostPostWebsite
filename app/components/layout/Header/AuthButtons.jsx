"use client";

import Link from "next/link";
import { useAuthModal } from "../../../context/auth-modal-context";
import styles from "./Header.module.css";

export function AuthButtons({ locale, dict }) {
  const { openLogin } = useAuthModal();

  return (
    <>
      <button onClick={openLogin} className={styles.loginButton}>
        {dict?.nav?.login || "Login"}
      </button>
      <Link href={`/${locale}/pricing`} className={styles.signupButton}>
        {dict?.nav?.signUp || "Sign Up"}
      </Link>
    </>
  );
}
