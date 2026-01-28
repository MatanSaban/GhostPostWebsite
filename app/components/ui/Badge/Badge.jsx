import styles from "./Badge.module.css";

export function Badge({ children, withIndicator = true }) {
  return (
    <div className={styles.badge}>
      {withIndicator && <span className={styles.indicator}></span>}
      {children}
    </div>
  );
}
