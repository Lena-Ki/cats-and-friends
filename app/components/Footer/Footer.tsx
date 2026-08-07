import type { EventCopy } from "../../content/eventCopy";
import styles from "./Footer.module.css";

export function Footer({ copy }: { copy: EventCopy }) {
  return (
    <footer className={styles.footer}>
      <p>{copy.footer}</p>
      <a href="#top">{copy.top} ↑</a>
    </footer>
  );
}
