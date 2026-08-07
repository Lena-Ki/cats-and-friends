import type { EventCopy } from "../../content/eventCopy";
import styles from "./CatsSection.module.css";

export function CatsSection({ copy }: { copy: EventCopy }) {
  return (
    <section className={styles.meet} id="cats">
      <div className={styles.heading}>
        <h2>{copy.meet}</h2>
        <p>{copy.meetCopy}</p>
      </div>
      <div className={styles.posterGrid}>
        <article className={styles.posterCard}>
          <img src="thor-poster.jpg" alt={copy.thorAlt} />
          <div className={styles.posterCaption}>
            <strong>THOR</strong>
            <span>{copy.thorTrait}</span>
          </div>
        </article>
        <article className={`${styles.posterCard} ${styles.mitsa}`}>
          <img src="mitsa-poster.jpg" alt={copy.mitsaAlt} />
          <div className={styles.posterCaption}>
            <strong>MITSA</strong>
            <span>{copy.mitsaTrait}</span>
          </div>
        </article>
        <div className={styles.moreCats}>
          <p className={styles.scribble}>{copy.more}</p>
        </div>
      </div>
    </section>
  );
}
