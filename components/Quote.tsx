"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";
import styles from "./Quote.module.css";

export default function Quote() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section className={styles.wrap} ref={ref}>
      <motion.p className={`${styles.quote} display`} style={{ x }}>
        {site.quote}
      </motion.p>
    </section>
  );
}
