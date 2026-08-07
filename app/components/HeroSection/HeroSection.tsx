import type { EventCopy, Language } from "../../content/eventCopy";
import { LANGUAGE_ROUTES } from "../../constants/languageRoutes";
import styles from "./HeroSection.module.css";

export function HeroSection({ language, copy }: { language: Language; copy: EventCopy }) {
  const languageLink = (targetLanguage: Language) =>
    language === targetLanguage ? "#top" : LANGUAGE_ROUTES[targetLanguage];

  return (
    <section className={styles.hero} id="top">
      <nav className={styles.nav} aria-label={copy.navLabel}>
        <a className={styles.wordmark} href="#top">
          CATS
          <br />
          &amp; FRIENDS
        </a>
        <div className={styles.navActions}>
          <a
            className={styles.languageSwitch}
            href={languageLink("en")}
            aria-current={language === "en" ? "page" : undefined}
          >
            EN
          </a>
          <span>/</span>
          <a
            className={styles.languageSwitch}
            href={languageLink("ru")}
            aria-current={language === "ru" ? "page" : undefined}
          >
            RU
          </a>
          <span>/</span>
          <a
            className={styles.languageSwitch}
            href={languageLink("sr")}
            aria-current={language === "sr" ? "page" : undefined}
          >
            SR
          </a>
          <a className={styles.navLink} href="#come">
            {copy.nav}
          </a>
        </div>
      </nav>
      <div className={styles.content}>
        <h1>{copy.heroHeading}</h1>
        <div className={styles.eventInfo}>
          <article className={styles.dateCard}>
            <p className={styles.eventDate}>{copy.heroDate}</p>
            <div className={styles.timeRow}>
              <p className={styles.eventTime}>{copy.heroTime}</p>
              <p className={styles.freeEntry}>{copy.heroFreeEntry}</p>
            </div>
          </article>
          <a className={styles.placeCard} href="#come">
            <p className={styles.placeIntro}>{copy.heroPlaceIntro}</p>
            <div className={styles.placeHeading}>
              <span className={styles.mapPin} aria-hidden="true">
                📍
              </span>
              <p>{copy.heroPlace}</p>
            </div>
          </a>
        </div>
        <div className={styles.actions}>
          <a className="button button-dark" href="#cats">
            {copy.cta} <span>↘</span>
          </a>
          <a
            className="button button-light"
            href="https://tally.so/r/gDVp1D"
            target="_blank"
            rel="noreferrer"
          >
            {copy.help} <span>↗</span>
          </a>
        </div>
        <p className={styles.registrationNote}>{copy.heroRegistrationNote}</p>
      </div>
    </section>
  );
}
