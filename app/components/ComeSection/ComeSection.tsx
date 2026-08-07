import type { EventCopy } from "../../content/eventCopy";
import styles from "./ComeSection.module.css";

export function ComeSection({ copy }: { copy: EventCopy }) {
  return (
    <section className={styles.come} id="come">
      <div>
        <h2>{copy.final}</h2>
      </div>
      <div className={styles.card}>
        <p className={styles.eventName}>CATS &amp; FRIENDS</p>
        <p className={styles.largeDate}>{copy.date}</p>
        <p className={styles.details}>
          15:00–18:00
          <br />
          Ray Bar, Novi Sad
        </p>
        <a
          className="button button-light"
          href="https://tally.so/r/gDVp1D"
          target="_blank"
          rel="noreferrer"
        >
          {copy.help} <span>↗</span>
        </a>
        <p className={styles.registrationNote}>{copy.registrationNote}</p>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.56672616!2d19.843388677078657!3d45.25655357107124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1136a12c41b9%3A0x2ad0aafbb5557fba!2sRay%20bar!5e0!3m2!1sen!2srs!4v1786052580282!5m2!1sen!2srs"
          title={copy.mapTitle}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
