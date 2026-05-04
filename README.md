# RDX — Website v1

Static marketing site for RDX stone procurement service.

## Stack

- Plain HTML / CSS / vanilla JS — no framework, no build step
- 4 languages: EN / DE / LT / UA — all fully translated, 5 pages each
- Deployed on Vercel

## Structure

```
website/
├── index.html              (EN Home)
├── granite-paving.html     (EN product)
├── how-we-work.html        (EN process + risk-pack + FAQ)
├── cases.html              (EN case scenarios)
├── contact.html            (EN RFQ form)
├── de/
│   ├── index.html
│   ├── natursteinpflaster.html
│   ├── so-arbeiten-wir.html
│   ├── projekte.html
│   └── kontakt.html
├── lt/
│   ├── index.html
│   ├── granito-trinkeles.html
│   ├── kaip-dirbame.html
│   ├── projektai.html
│   └── kontaktai.html
├── uk/
│   ├── index.html
│   ├── granitna-brukivka.html
│   ├── yak-my-pratsyuyemo.html
│   ├── proekty.html
│   └── kontakty.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/                (swap in real project photos here)
├── vercel.json
└── README.md
```

## Local preview

```bash
cd website
python3 -m http.server 8080
# Open http://localhost:8080
```

## Deploy

```bash
npx vercel --prod
```

## Before go-live — must-fix

- [ ] Replace placeholder phone number in footer and Contact page (all languages)
- [ ] Replace `hello@rdx.example` with real email
- [ ] Replace WhatsApp `#` href with real `wa.me/...` link
- [ ] Add real legal entity to footer + Contact page
- [ ] Add **Impressum** content — required for DE version
- [ ] Replace hero visual placeholders with real project photography (see `assets/img/`)
- [ ] Wire RFQ form to real backend (Formspree, Netlify Forms, or custom) — see `assets/js/main.js`
- [ ] Add Google Analytics (or Plausible) tag
- [ ] Add privacy policy + imprint pages per locale

## Post-launch

- [ ] Submit sitemap to Google Search Console per locale
- [ ] Set up form-fill event tracking
- [ ] Run PageSpeed check on all pages
- [ ] Set up uptime monitoring

## Source documents

- Positioning: `../Wedge MVP v1.md`
- Site brief: `../проект 1 сайт.md`
- Copy source: `../сайт — EN master copy v1.md`
