"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { galleryImages } from "@/lib/site";
import styles from "./MorphGallery.module.css";

function MorphImage({
  src,
  alt,
  index,
  total,
  progress,
}: {
  src: string;
  alt: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Each image owns a slice of the scroll timeline and crossfades
  // with its neighbours, scaling + un-blurring as it becomes active.
  const seg = 1 / total;
  const start = index * seg;
  const mid = start + seg / 2;
  const end = start + seg;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    progress,
    [start - seg * 0.5, start, end, end + seg * 0.5],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
  );
  const scale = useTransform(
    progress,
    [start - seg * 0.5, mid, end + seg * 0.5],
    [1.18, 1.0, 1.18]
  );
  const blur = useTransform(
    progress,
    [start - seg * 0.5, mid, end + seg * 0.5],
    [14, 0, 14]
  );
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.div
      className={styles.frame}
      style={{ opacity, scale, filter, zIndex: total - index }}
      aria-hidden={index !== 0}
    >
      <div
        className={styles.img}
        role="img"
        aria-label={alt}
        style={{ backgroundImage: `url(${src})` }}
      />
    </motion.div>
  );
}

export default function MorphGallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const total = galleryImages.length;

  // Index counter (01 / 05) and a moving progress bar
  const counter = useTransform(scrollYProgress, (p) => {
    const i = Math.min(total - 1, Math.floor(p * total));
    return String(i + 1).padStart(2, "0");
  });
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="gallery"
      ref={ref}
      className={styles.section}
      style={{ height: `${total * 100}vh` }}
    >
      <div className={styles.sticky}>
        <div className={styles.stack}>
          {galleryImages.map((img, i) => (
            <MorphImage
              key={i}
              src={img.src}
              alt={img.alt}
              index={i}
              total={total}
              progress={scrollYProgress}
            />
          ))}
          <div className={styles.grad} />
        </div>

        <div className={styles.hud}>
          <span className="eyebrow">The Work</span>
          <h2 className={`${styles.bigword} display`}>Living Canvas</h2>
        </div>

        <div className={styles.meta}>
          <motion.span className={`${styles.counter} display`}>
            {counter}
          </motion.span>
          <span className={styles.total}>/ {String(total).padStart(2, "0")}</span>
        </div>

        <div className={styles.progress}>
          <motion.div className={styles.progressBar} style={{ scaleX: barScale }} />
        </div>
      </div>
    </section>
  );
}
