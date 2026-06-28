"use client";

import Reveal from "./Reveal";
import { site } from "@/lib/site";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <Reveal>
            <span className="eyebrow">About</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={`${styles.head} display`}>
              Beauty has<br />no single shape
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.lead}>{site.intro}</p>
          </Reveal>
        </div>

        <div className={styles.right}>
          {site.story.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <p className={styles.para}>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className={styles.stats}>
              <div>
                <span className={`${styles.num} display`}>Global</span>
                <span className={styles.label}>Following</span>
              </div>
              <div>
                <span className={`${styles.num} display`}>Netherlands</span>
                <span className={styles.label}>Origin</span>
              </div>
              <div>
                <span className={`${styles.num} display`}>Worldwide</span>
                <span className={styles.label}>Featured</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
