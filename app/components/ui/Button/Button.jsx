import Link from "next/link";
import styles from "./Button.module.css";

export function Button({
  children,
  variant = "primary",
  size = "medium",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {children}
    </button>
  );
}
