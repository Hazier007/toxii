import { site } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <span className={`${styles.brand} display`}>{site.name}</span>
        <p className={styles.tag}>{site.tagline}</p>
      </div>
      <div className={styles.bottom}>
        <span>© {year} Toxii Bodymod. All rights reserved.</span>
        <div className={styles.links}>
          {site.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
