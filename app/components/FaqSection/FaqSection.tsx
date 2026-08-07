import type { EventSupplement } from "../../content/eventCopy";
import styles from "./FaqSection.module.css";

export function FaqSection({ copy }: { copy: EventSupplement }) {
  return (
    <section className={styles.faq} id="faq">
      <header>
        <h2>{copy.faqTitle}</h2>
      </header>
      <div className={styles.questions}>
        {copy.faqItems.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
