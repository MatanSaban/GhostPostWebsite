import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

// xsmall is exactly 70% of medium so the header (which previously used
// medium = 40h × 111w) reads as 30% smaller without re-doing the asset.
const heights = { xsmall: 28, small: 32, medium: 40, large: 48 };
const widths = { xsmall: 78, small: 89, medium: 111, large: 133 };

// SVG aspect ratio (408 × 147), used when caller passes an explicit width.
const ASPECT = 408 / 147;

export function Logo({ size = "medium", width: widthProp }) {
  const width = widthProp ?? widths[size];
  const height = widthProp ? Math.round(widthProp / ASPECT) : heights[size];

  return (
    <Link href="/" className={styles.logo} aria-label="GhostSEO">
      <Image
        src="/logo-light.svg"
        alt="GhostSEO"
        width={width}
        height={height}
        className={`${styles.image} ${styles.lightLogo}`}
        priority
      />
      <Image
        src="/logo-dark.svg"
        alt="GhostSEO"
        width={width}
        height={height}
        className={`${styles.image} ${styles.darkLogo}`}
        priority
      />
    </Link>
  );
}
