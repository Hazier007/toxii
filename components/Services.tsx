"use client";

import Reveal from "./Reveal";
import { site } from "@/lib/site";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <Reveal>
        <span className="eyebrow">Work With Toxii</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className={`${styles.head} display`}>Bookings &amp; Collaborations</h2>
      </Reveal>

      <div className={styles.grid}>
        {site.services.map((s, i) => (
          <Reveal key={i} delay={0.1 + i * 0.08} className={styles.cardWrap}>
            <div className={styles.card}>
              <span className={`${styles.index} display`}>
                0{i + 1}
              </span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
