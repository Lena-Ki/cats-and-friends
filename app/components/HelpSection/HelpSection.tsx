import type { EventSupplement } from "../../content/eventCopy";
import styles from "./HelpSection.module.css";

export function HelpSection({ copy }: { copy: EventSupplement }) {
  return (
    <section className={styles.help} id="help">
      <header className={styles.heading}>
        <h2>{copy.helpTitle}</h2>
      </header>
      <div className={styles.options}>
        {copy.helpOptions.map(([title, text], index) => (
          <article className={styles.option} key={title}>
            <span aria-hidden="true">0{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
