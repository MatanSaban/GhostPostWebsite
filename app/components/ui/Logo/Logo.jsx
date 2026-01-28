import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

export function Logo({ size = "medium" }) {
  const sizes = {
    small: 32,
    medium: 40,
    large: 48,
  };

  return (
    <Link href="/" className={styles.logo}>
      <Image
        src="/logo.png"
        alt="Ghost Post"
        width={sizes[size]}
        height={sizes[size]}
        className={styles.image}
      />
      <span className={`${styles.text} ${styles[size]}`}>Ghost Post</span>
    </Link>
  );
}
