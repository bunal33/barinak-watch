# GrevTakip

Static, GitHub Pages friendly labor tracker for Türkiye. It maps worker deaths, ongoing and ended strikes, strike decisions, MESEM schools, and current labor / union arrests.

## Files

- `index.html` - app shell, modals, and static CDN dependencies.
- `styles.css` - desktop layout, mobile filter drawer, and mobile incident bottom sheet.
- `app.js` - Leaflet map, filters, bilingual UI, local/Supabase data loading, and submission fallback.
- `data/incidents.json` - reviewed incident records with source URLs.
- `data/mesem-schools.json` - generated MEB/Mesleğim Hayatım MESEM school layer, hidden by default.
- `data/seed-cases.json` - compatibility fallback copy of the incident seed records.
- `data/import-template.csv` - CSV field template for manual imports.
- `supabase/schema.sql` - Supabase-ready tables, enums, indexes, and public RLS policies.

## Local Run

```powershell
cd c:\Users\User\Documents\projects-git\grev-watch
python -m http.server 8090 --bind 127.0.0.1
```

Open `http://127.0.0.1:8090/`.

## Defaults

Default-visible layers are black recent worker deaths, red ongoing strikes, and orange current labor arrests. Green ended strikes, yellow MESEM schools, older worker deaths, strike decisions, postponed/banned strikes, and released arrests are available in filters but hidden at first load.

## Supabase

Leave `SUPABASE_URL` and `SUPABASE_ANON_KEY` blank in `app.js` to run entirely from static JSON. When configured, verified records are read from Supabase and public reports are inserted into `case_submissions` for editor review.
