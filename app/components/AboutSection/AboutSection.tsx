import type { EventCopy } from "../../content/eventCopy";
import styles from "./AboutSection.module.css";

export function AboutSection({ copy }: { copy: EventCopy }) {
  return (
    <section className={styles.about}>
      <h2>{copy.aboutTitle}</h2>
      <div className={styles.copy}>
        {copy.aboutText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
