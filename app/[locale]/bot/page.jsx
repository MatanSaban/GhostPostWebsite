import { getDictionary } from '../../../i18n/get-dictionary';
import { generatePageMetadata } from '../../../lib/metadata';
import styles from './page.module.css';

// Bot identity constants - kept in sync with gp-platform/lib/bot-identity.js.
// If GhostSEOBot's name/version changes there, mirror it here.
const GHOSTSEO_BOT_NAME = 'GhostSEOBot';
const GHOSTSEO_BOT_VERSION = '1.0';
const GHOSTSEO_BOT_CONTACT = 'support@ghostseo.ai';
const GHOSTSEO_BOT_UA = `Mozilla/5.0 (compatible; ${GHOSTSEO_BOT_NAME}/${GHOSTSEO_BOT_VERSION}; +https://ghostseo.ai/en/bot)`;

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const t = dict.bot || {};

  return await generatePageMetadata({
    locale,
    page: 'bot',
    useDraft: false,
    overrides: {
      // Indexable so external admins (and search engines) can find the page
      // when investigating an unknown UA in their server logs.
      robots: 'index, follow',
      title: `${t.title || 'GhostSEOBot'} - ${t.allowlistHeading || 'Bot identity & allowlist guide'}`,
      description: t.subtitle || 'GhostSEOBot is the GhostSEO platform automated site analyzer. Learn what it does, how often it crawls, and how to allowlist it in your firewall.',
    },
  });
}

export default async function BotInfoPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const t = dict.bot || {};

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{t.title || 'GhostSEOBot'}</h1>
        <p className={styles.subtitle}>{t.subtitle || ''}</p>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>{t.whatIsHeading || 'What is GhostSEOBot?'}</h2>
          <p>{t.whatIsBody || ''}</p>
        </section>

        <section className={styles.section}>
          <h2>{t.userAgentHeading || 'User-Agent'}</h2>
          <p>{t.userAgentBody || ''}</p>
          <div className={styles.codeBlock}>
            <code dir="ltr">{GHOSTSEO_BOT_UA}</code>
          </div>
          <dl className={styles.metaList}>
            <div><dt>{t.userAgentBotName || 'Bot name'}</dt><dd dir="ltr">{GHOSTSEO_BOT_NAME}</dd></div>
            <div><dt>{t.userAgentVersion || 'Version'}</dt><dd dir="ltr">{GHOSTSEO_BOT_VERSION}</dd></div>
            <div><dt>{t.userAgentContact || 'Contact'}</dt><dd dir="ltr"><a href={`mailto:${GHOSTSEO_BOT_CONTACT}`}>{GHOSTSEO_BOT_CONTACT}</a></dd></div>
          </dl>
        </section>

        <section className={styles.section}>
          <h2>{t.whatItDoesHeading || 'What it does'}</h2>
          <ul className={styles.list}>
            <li>{t.whatItDoesItem1 || ''}</li>
            <li>{t.whatItDoesItem2 || ''}</li>
            <li>{t.whatItDoesItem3 || ''}</li>
            <li>{t.whatItDoesItem4 || ''}</li>
            <li>{t.whatItDoesItem5 || ''}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>{t.whatItDoesNotHeading || 'What it does not do'}</h2>
          <ul className={`${styles.list} ${styles.listNeg}`}>
            <li>{t.whatItDoesNotItem1 || ''}</li>
            <li>{t.whatItDoesNotItem2 || ''}</li>
            <li>{t.whatItDoesNotItem3 || ''}</li>
            <li>{t.whatItDoesNotItem4 || ''}</li>
            <li>{t.whatItDoesNotItem5 || ''}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>{t.frequencyHeading || 'How often it crawls'}</h2>
          <p>{t.frequencyBody || ''}</p>
          <ul className={styles.list}>
            <li>{t.frequencyItem1 || ''}</li>
            <li>{t.frequencyItem2 || ''}</li>
            <li>{t.frequencyItem3 || ''}</li>
            <li>{t.frequencyItem4 || ''}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>{t.allowlistHeading || 'How to allowlist GhostSEOBot'}</h2>
          <p>{t.allowlistIntro || ''}</p>

          <div className={styles.scopeCallout}>
            <strong>{t.scopeHeading || 'Recommended scope'}</strong>
            <p>{t.scopeBody || ''}</p>
          </div>

          <div className={styles.pluginCard}>
            <h3>{t.pluginsWordfenceTitle || 'Wordfence'}</h3>
            <p>{t.pluginsWordfenceSteps || ''}</p>
          </div>

          <div className={styles.pluginCard}>
            <h3>{t.pluginsCloudflareTitle || 'Cloudflare'}</h3>
            <p>{t.pluginsCloudflareSteps || ''}</p>
          </div>

          <div className={styles.pluginCard}>
            <h3>{t.pluginsSucuriTitle || 'Sucuri / other plugins'}</h3>
            <p>{t.pluginsSucuriSteps || ''}</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t.removalHeading || "If GhostSEO isn't yours"}</h2>
          <p>{t.removalBody || ''}</p>
        </section>

        <section className={styles.section}>
          <h2>{t.contactHeading || 'Contact'}</h2>
          <p>
            {t.contactBody || ''}{' '}
            <a href={`mailto:${GHOSTSEO_BOT_CONTACT}`}>{GHOSTSEO_BOT_CONTACT}</a>
          </p>
        </section>
      </article>
    </div>
  );
}
