import type { EventCopy } from "../../content/eventCopy";
import styles from "./ScheduleSection.module.css";

export function ScheduleSection({ copy }: { copy: EventCopy }) {
  return (
    <section className={styles.schedule} id="program">
      <div className={styles.title}>
        <h2>{copy.plan}</h2>
      </div>
      <div className={styles.programList}>
        {copy.program.map(([time, title, text], index) => (
          <article className={styles.programItem} key={time}>
            <time>{time}</time>
            <div>
              <h3>{title}</h3>
              {index === 1 && <p className={styles.veterinarian}>{copy.veterinarian}</p>}
              <p>{text}</p>
              {index === 1 && (
                <p className={styles.veterinarianLinks}>
                  <a
                    href="https://t.me/samsebevet"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={copy.veterinarianTelegram}
                    title={copy.veterinarianTelegram}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21.7 3.4 18.5 19c-.2 1.1-.8 1.4-1.7.9l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.1c.4-.4-.1-.6-.6-.2L6.2 12.7 1.4 11.2c-1-.3-1-1 .2-1.5L20.3 2.5c.9-.3 1.7.2 1.4.9Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/igolchenko.sergey"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={copy.veterinarianInstagram}
                    title={copy.veterinarianInstagram}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4.2" />
                      <circle className={styles.instagramDot} cx="17.4" cy="6.8" r="1.1" />
                    </svg>
                  </a>
                </p>
              )}
            </div>
          </article>
        ))}
        <div className={styles.allDay}>
          <strong>{copy.allDayLabel}</strong>
          <ul>
            {copy.allDay.map(([emoji, text]) => (
              <li key={text}>
                <span aria-hidden="true">{emoji}</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
