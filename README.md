# ChronoAtlas v2.0 - Peta Historis Interaktif Andalusia

> **Media Pembelajaran Digital Sejarah Kebudayaan Islam (SKI) & PAI Kelas VIII (Fase D)**  
> **Tema Pokok:** Khazanah Emas Semenanjung Iberia (711–1492 M) • Kurikulum Merdeka

---

## 📌 Gambaran Umum
**ChronoAtlas v2.0** adalah aplikasi web interaktif (*Single-Page Application*) mandiri yang dirancang untuk mendukung pembelajaran sejarah peradaban Islam di Al-Andalus (Spanyol & Portugal). Aplikasi ini memadukan kartografi historis berbasis vektor SVG, garis waktu interaktif 8 babak, serta modul ajar digital dan Lembar Kerja Peserta Didik (LKPD) yang selaras dengan Capaian Pembelajaran (CP) Fase D.

---

## 🚀 Fitur Unggulan

### 1. 🗺️ Peta Historis Interaktif Semenanjung Iberia
- **12 Titik Lokasi Sejarah**: Córdoba, Granada, Sevilla, Toledo, Zaragoza, Jabal Thariq (Gibraltar), Algeciras, Wadi Bakkah, Ronda, Madīnat az-Zahrā, Mérida, dan Valencia.
- **Rute Ekspedisi Teranimasi**:
  - *Rute Thariq bin Ziyad (711 M)*: Pendaratan Gibraltar $\rightarrow$ Lembah Guadalete $\rightarrow$ Córdoba $\rightarrow$ Toledo.
  - *Rute Musa bin Nushair (712 M)*: Algeciras $\rightarrow$ Sevilla $\rightarrow$ Mérida $\rightarrow$ Zaragoza.
- **Pencarian Cepat Kota & Tokoh**: Kotak pencarian otomatis menyorot dan membuka info kota terkait.
- **Laci Detail Interaktif**: Menampilkan nama Arab, era kekuasaan, tokoh pembaharu, monumen cagar budaya, dan pertanyaan reflektif siswa.

### 2. ⏳ Garis Waktu Kronologi Emas (711–1492 M)
- **8 Babak Periodisasi Sejarah**:
  1. *711 M*: Pendaratan Thariq bin Ziyad & Pertempuran Guadalete.
  2. *756 M*: Berdirinya Keamiran Umayyah II oleh Abdurrahman Ad-Dakhil (*Sang Rajawali Quraisy*).
  3. *912–961 M*: Puncak Kekhalifahan Córdoba di bawah Abdurrahman III (An-Nashir).
  4. *961–976 M*: Pemerintahan Al-Hakam II & Perpustakaan Terbesar Dunia (400.000 jilid buku).
  5. *1031–1086 M*: Runtuhnya Khilafah & Era Muluk ath-Thawaif (Negara Kota).
  6. *1086–1232 M*: Era Dinasti Murabithun, Muwahhidun, & Filsuf Ibnu Rusyd (Averroes).
  7. *1238–1492 M*: Dinasti Nashriyyah & Kemegahan Istana Alhambra Granada.
  8. *1492 M*: Penyerahan Kunci Granada oleh Sultan Boabdil (Abu Abdillah).
- **Filter Cepat**: Mengelompokkan babak menjadi *Awal*, *Puncak Khilafah*, dan *Muluk Thawaif/Granada*.

### 3. 📖 Panduan Guru & Modul Ajar Digital
- **Format Baku BSKAP No. 033/H/KR/2022**: Memuat Identitas Modul, Capaian Pembelajaran (CP), dan 4 Alur Tujuan Pembelajaran (ATP).
- **Skenario Pembelajaran 3 Fase**: Apersepsi & Orientasi (15 menit), Eksplorasi Digital Inkuiri (50 menit), dan Refleksi/Penutup (15 menit).
- **Kalkulator Rubrik Penilaian KKTP Interaktif**: Memungkinkan guru menghitung skor capaian siswa (1–12 poin) dan predikat secara otomatis.
- **Unduh Lembar Kerja Siswa (LKPD)**: Tombol unduh otomatis berkas `LKPD_SKI_Kelas_VIII_Al_Andalus.txt`.
- **Cetak / Ekspor PDF**: Tata letak otomatis disesuaikan untuk mode cetak (`window.print()`).

### 4. 🎮 Kuis Kilat & Gamifikasi Belajar
- **Kuis 3 Soal Interaktif**: Evaluasi kilat pemahaman materi dengan skor instan.
- **Chip Indikator Progres Eksplorasi**: Melacak jumlah kota dan materi yang telah dibuka siswa secara *real-time* (tersimpan di `localStorage`).
- **Efek Audio Sintetis (Web Audio API)**: Suara lonceng interaktif saat memilih kota dan menyelesaikan kuis (dapat dinyalakan/dimatikan kapan saja tanpa aset audio eksternal).

### 5. 📱 Desain Responsif & Navigasi Mobile
- **Bottom Navigation Bar**: Menu navigasi bawah khusus layar ponsel (Beranda, Peta, Garis Waktu, Guru) sesuai standar aplikasi modern.

---

## 📂 Struktur Berkas
```text
chronoatlas/
├── index.html   # File aplikasi tunggal (HTML5, Tailwind CSS, SVG Map, Vanilla JS)
└── README.md    # Dokumentasi resmi dan petunjuk pengoperasian
```

---

## 💻 Cara Menjalankan Aplikasi

### Opsi 1: Buka Langsung (Paling Mudah)
Klik ganda berkas `index.html` pada File Explorer untuk membukanya di peramban favorit Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari).

### Opsi 2: Live Server (VS Code / Antigravity)
Jika menggunakan ekstensi *Live Server*:
1. Buka folder `chronoatlas`.
2. Klik kanan pada `index.html` $\rightarrow$ **Open with Live Server**.
3. Aplikasi akan berjalan di `http://localhost:5500`.

---

## 👥 Pengembang & Hak Cipta
Dirancang sebagai perangkat ajar interaktif terpadu untuk pembelajaran Sejarah Kebudayaan Islam (SKI) & Pendidikan Agama Islam (PAI) tingkat Menengah Pertama (SMP/MTs). Sesuai dengan semangat Profil Pelajar Pancasila & Rahmatan lil 'Alamin.
