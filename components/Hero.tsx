"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";
import styles from "./Hero.module.css";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: image drifts up and scales, text drifts faster
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const letters = site.name.split("");

  return (
    <section id="top" ref={ref} className={styles.hero}>
      <motion.div
        className={styles.bg}
        style={{ y: imgY, scale: imgScale }}
      >
        <div
          className={styles.bgImg}
          style={{ backgroundImage: "url(/images/hero.jpg)" }}
        />
        <div className={styles.vignette} />
      </motion.div>

      <motion.div className={styles.content} style={{ y: textY, opacity: fade }}>
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {site.tagline}
        </motion.span>

        <h1 className={`${styles.title} display`}>
          {letters.map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 120, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 0.5 + i * 0.08,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              {l}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          Body modification artist &amp; model
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a href="#contact" className="btn btn-accent">Book</a>
          <a href="#gallery" className="btn">View work</a>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.scrollCue}
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <span>Scroll</span>
        <div className={styles.line} />
      </motion.div>
    </section>
  );
}
