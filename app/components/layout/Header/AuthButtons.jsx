"use client";

import { useAuthModal } from "../../../context/auth-modal-context";
import styles from "./Header.module.css";

export function AuthButtons({ dict }) {
  const { openLogin, openRegister } = useAuthModal();

  return (
    <>
      <button onClick={openLogin} className={styles.loginButton}>
        {dict?.nav?.login || "Login"}
      </button>
      <button onClick={openRegister} className={styles.signupButton}>
        {dict?.nav?.signUp || "Sign Up"}
      </button>
    </>
  );
}
