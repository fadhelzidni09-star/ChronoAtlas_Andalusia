# Deploy ChronoAtlas ke Vercel

## Struktur
```
public/index.html     # aplikasi (sudah terhubung ke API)
public/hasil.html     # halaman hasil kuis untuk guru  -> /hasil.html
api/quiz-submit.js    # POST  nilai kuis di server + simpan hasil
api/progress.js       # GET/POST  sinkron progres eksplorasi
api/results.js        # GET  daftar hasil (khusus guru, butuh TEACHER_KEY)
api/health.js         # GET  cek status
lib/                  # penyimpanan (Upstash Redis / memori) & helper
```

## Langkah
1. Upload folder ini ke repo GitHub (atau pakai `npx vercel` dari terminal).
2. Vercel -> Add New Project -> pilih repo. Framework Preset: **Other**. Klik Deploy.
3. Di dashboard project: **Storage / Marketplace -> Upstash Redis -> Create**, lalu connect ke project
   (env `KV_REST_API_URL` dan `KV_REST_API_TOKEN` terisi otomatis).
4. **Settings -> Environment Variables**: tambah `TEACHER_KEY` = kata sandi pilihanmu (bebas, panjang lebih baik).
5. **Redeploy** supaya env terbaca.
6. Cek `https://NAMA-APP.vercel.app/api/health` -> harus `"storage":"redis"`.
7. Guru buka `https://NAMA-APP.vercel.app/hasil.html`, masukkan TEACHER_KEY.

## Tes lokal
```
npm i -g vercel
npm install
vercel dev      # tanpa Redis, data disimpan di memori
```
