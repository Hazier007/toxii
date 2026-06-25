# TOXII — Bodymod website

Dark, cinematic one-page site for **Toxii Bodymod** (Toxii Daniëlle).
Built with **Next.js + framer-motion**. The centerpiece is a scroll-driven
**morph gallery** where her photos crossfade/scale into each other as you scroll.

---

## ▶ Run it locally

```bash
npm install
npm run dev      # open http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

Deploy: push to GitHub and import in **Vercel** (zero config).

---

## 🖼 Drop in the real photos

All images live in **`public/images/`**. Your real photos are already in place
(normalized to lowercase `.jpg` so they work on Vercel). To swap any of them,
just overwrite the file keeping the **same filename**. Tip: compress big shots
(e.g. TinyPNG) — some are 6000px+ and will load faster if reduced to ~2000px.

| File            | Use this photo                                   | Best shape        |
|-----------------|--------------------------------------------------|-------------------|
| `logo.png`      | The cartoon **TOXII BODY MOD** logo              | transparent PNG   |
| `hero.jpg`      | Big wide shot — e.g. fur coat + spiked choker    | landscape (wide)  |
| `photo-1.jpg`   | Red portrait, horns, finger to lips              | square            |
| `photo-2.jpg`   | Black & white grill close-up                     | square            |
| `photo-3.jpg`   | Red-lit skull full look                          | portrait (tall)   |
| `photo-4.jpg`   | B&W profile, looking up                          | landscape         |
| `photo-5.jpg`   | B&W extreme close-up detail                      | portrait (tall)   |

> Want more or fewer gallery photos? Edit the `galleryImages` list in
> **`lib/site.ts`** — the morph timeline and counter adjust automatically.

---

## ✏️ Edit text, links & services

Everything editable lives in **`lib/site.ts`**:

- name, tagline, the about text & pull-quote (her own bio is already in)
- `email` for the booking button
- `socials` — **replace the placeholder URLs** with her real
  Instagram / TikTok / X / Linktree links
- `services` — the three "work with Toxii" cards

No code knowledge needed — it's all plain text in that one file.

---

## 📁 Structure

```
app/            layout, global styles, page
components/     Nav, Hero, MorphGallery, Quote, About, Services, Contact, Footer
lib/site.ts     ← all editable content
public/images/  ← all photos + logo
```
