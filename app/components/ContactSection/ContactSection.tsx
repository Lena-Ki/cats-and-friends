import type { EventCopy } from "../../content/eventCopy";
import styles from "./ContactSection.module.css";

export function ContactSection({ copy }: { copy: EventCopy }) {
  return (
    <section className={styles.contact} aria-labelledby="contact-title">
      <div>
        <h2 id="contact-title">{copy.contactTitle}</h2>
      </div>
      <div className={styles.details}>
        <p>{copy.contactText}</p>
        <a
          className="button button-dark"
          href="https://t.me/meow3o"
          target="_blank"
          rel="noreferrer"
        >
          {copy.contactButton} <span>↗</span>
        </a>
      </div>
    </section>
  );
}
