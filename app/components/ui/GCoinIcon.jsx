'use client';

/**
 * GCoinIcon - the brand mark for Ai-GCoins.
 * Renders /public/gcoin.svg so the artwork matches gp-platform exactly. Pass
 * `size` (px, applied to width and height), an optional className, and an
 * optional accessible `title`.
 */
export default function GCoinIcon({ size = 18, className = '', title, style, ...rest }) {
  return (
    <img
      src="/gcoin.svg"
      alt={title || ''}
      width={size}
      height={size}
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      aria-hidden={title ? undefined : true}
      {...rest}
    />
  );
}
