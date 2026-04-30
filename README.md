# GrevTakip

Türkiye'deki grevleri, işçi eylemlerini, MESEM vakalarını ve sendikacılara yönelik gözaltı/tutuklama kayıtlarını izlemek için statik, GitHub Pages uyumlu MVP.

## Çalıştırma

```powershell
python -m http.server 8080
```

Ardından `http://localhost:8080` adresini açın.

## Veri

- `data/seed-cases.json`: Supabase yapılandırılmadan çalışan başlangıç veri seti.
- `data/import-template.csv`: Editörlerin toplu giriş/import için kullanabileceği alan şablonu.
- `supabase/schema.sql`: `cases`, `case_locations`, `case_sources`, `case_timeline` ve `case_submissions` tabloları ile enum/RLS tanımları.

`app.js` içindeki `SUPABASE_URL` ve `SUPABASE_ANON_KEY` boş bırakıldığında uygulama seed JSON ile çalışır. Değerler girildiğinde doğrulanmış kayıtları Supabase'den okur ve bildirimleri `case_submissions` kuyruğuna yazar.
