import Image from "next/image";
import styles from "./HeroVisualization.module.css";

const getCards = (locale) => [
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    text: locale === 'he' ? "דירוגים ↑ 127%" : locale === 'fr' ? "Classements ↑ 127%" : "Rankings ↑ 127%",
    colorClass: "card1",
    orbitSize: 200,
    duration: 15,
    startAngle: 45,
    direction: "normal",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    text: locale === 'he' ? "אופטימיזציה אוטומטית" : locale === 'fr' ? "Auto-Optimisation" : "Auto-Optimizing",
    colorClass: "card2",
    orbitSize: 280,
    duration: 23,
    startAngle: 180,
    direction: "reverse",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    text: locale === 'he' ? "AI מנתח" : locale === 'fr' ? "Analyse IA" : "AI Analyzing",
    colorClass: "card3",
    orbitSize: 360,
    duration: 31,
    startAngle: 270,
    direction: "normal",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    text: locale === 'he' ? "תוכן נוצר" : locale === 'fr' ? "Contenu Généré" : "Content Generated",
    colorClass: "card4",
    orbitSize: 440,
    duration: 39,
    startAngle: 0,
    direction: "reverse",
  },
];

export function HeroVisualization({ locale }) {
  const cards = getCards(locale);
  
  return (
    <div className={styles.visualization}>
      <div className={styles.center}>
        <div className={styles.glow}></div>

        <div className={styles.logoContainer}>
          <div className={styles.logoGlow}></div>
          <Image
            src="/logo.png"
            alt="Ghost"
            width={112}
            height={112}
            className={styles.logo}
          />
          <div className={styles.aiIndicator}>
            <div className={styles.aiIndicatorPing}></div>
          </div>
        </div>

        {/* Orbital rings with dots */}
        {[0, 1, 2, 3].map((i) => {
          const size = 200 + i * 80;
          const radius = size / 2;
          const nodeCount = i + 2;
          
          return (
            <div
              key={i}
              className={styles.orbit}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${15 + i * 8}s`,
                animationDirection: i % 2 === 0 ? "normal" : "reverse",
              }}
            >
              {[...Array(nodeCount)].map((_, nodeIndex) => {
                const angle = ((360 / nodeCount) * nodeIndex) * (Math.PI / 180);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={nodeIndex}
                    className={`${styles.node} ${styles[`node${nodeIndex % 3}`]}`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className={styles.nodePing}></div>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Card orbits - each card has its own orbit */}
        {cards.map((card, index) => {
          const radius = card.orbitSize / 2;
          const angle = card.startAngle * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          // Counter direction: if orbit is reverse, wrapper spins normal; if orbit is normal, wrapper spins reverse
          const counterDirection = card.direction === "reverse" ? "normal" : "reverse";

          return (
            <div
              key={index}
              className={styles.cardOrbit}
              style={{
                width: `${card.orbitSize}px`,
                height: `${card.orbitSize}px`,
                animationDuration: `${card.duration}s`,
                animationDirection: card.direction,
              }}
            >
              <div
                className={styles.cardWrapper}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  animationDuration: `${card.duration}s`,
                  animationDirection: counterDirection,
                }}
              >
                <div className={`${styles.card} ${styles[card.colorClass]}`}>
                  <span className={styles.cardIcon}>{card.icon}</span>
                  <span>{card.text}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
