"use client";

import Reveal from "./Reveal";
import { site } from "@/lib/site";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={styles.inner}>
        <Reveal>
          <span className="eyebrow">Get In Touch</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className={`${styles.head} display`}>
            Let&apos;s create<br />something bold
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className={styles.text}>
            For bookings, collaborations, press and appearances — reach out
            directly or follow along on socials.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a href={`mailto:${site.email}`} className="btn btn-accent">
            {site.email}
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <p className={styles.location}>{site.location}</p>
        </Reveal>

        <Reveal delay={0.25}>
          <ul className={styles.socials}>
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  <span className={styles.sLabel}>{s.label}</span>
                  <span className={styles.sHandle}>{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
