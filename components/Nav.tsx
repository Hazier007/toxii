"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <a href="#top" className={styles.brand} aria-label={site.name}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={site.logo} alt={`${site.name} logo`} className={styles.logoImg} />
      </a>
      <ul className={styles.links}>
        <li><a href="#about">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#services">Work</a></li>
        <li><a href="#contact">Book</a></li>
      </ul>
    </motion.nav>
  );
}
