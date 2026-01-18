import Image from "next/image";
import styles from "./page.module.css";
import { Badge } from "../components/ui/Badge";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Former Google engineer with 15 years in AI and search technology.",
  },
  {
    name: "Sarah Johnson",
    role: "CTO & Co-Founder",
    bio: "Built AI systems at OpenAI before founding Ghost Post.",
  },
  {
    name: "Michael Torres",
    role: "VP of Engineering",
    bio: "Led engineering teams at Amazon and Microsoft.",
  },
  {
    name: "Emily Park",
    role: "Head of Product",
    bio: "Former product lead at HubSpot and Moz.",
  },
];

const values = [
  {
    icon: "brain",
    title: "Innovation First",
    description: "We push the boundaries of what's possible with AI-powered SEO automation.",
  },
  {
    icon: "users",
    title: "Customer Success",
    description: "Your growth is our success. We're committed to delivering measurable results.",
  },
  {
    icon: "shield",
    title: "Trust & Transparency",
    description: "We follow ethical SEO practices and are transparent about how our AI works.",
  },
  {
    icon: "zap",
    title: "Continuous Improvement",
    description: "We're always learning, adapting, and improving our technology.",
  },
];

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "10M+", label: "Pages Optimized" },
  { value: "247%", label: "Avg Traffic Increase" },
  { value: "24/7", label: "AI Monitoring" },
];

const icons = {
  brain: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  users: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  shield: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  zap: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

export const metadata = {
  title: "About - Ghost Post",
  description: "Learn about our mission to revolutionize SEO with AI",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Badge>Our Mission</Badge>
          <h1 className={styles.title}>
            About <span className={styles.gradient}>Ghost Post</span>
          </h1>
          <p className={styles.subtitle}>
            We&apos;re on a mission to democratize SEO by making enterprise-level automation accessible to businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.storyText}>
              Ghost Post was founded in 2024 by a team of AI researchers and SEO experts who saw an opportunity to revolutionize how businesses approach search engine optimization.
            </p>
            <p className={styles.storyText}>
              We believed that the future of SEO wasn't about manual optimization or hiring expensive agencies—it was about building intelligent systems that could learn, adapt, and execute SEO strategies autonomously.
            </p>
            <p className={styles.storyText}>
              Today, Ghost Post powers SEO for hundreds of businesses worldwide, from startups to enterprise companies, helping them achieve sustainable organic growth without the complexity and cost of traditional SEO.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{icons[value.icon]}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Leadership Team</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.avatar}>
                  <span>{member.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Join us on our mission</h2>
            <p className={styles.ctaDescription}>
              Ready to experience the future of SEO? Start your free trial today.
            </p>
            <a href="/register" className={styles.ctaButton}>
              Get Started Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
