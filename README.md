# Portofolio Elvan Mariano — Software Engineer (MBKM 2026 Ready)

Website portofolio interaktif dan modern milik **Elvan Mariano**, mahasiswa S1 Teknik Informatika (Semester 5) Universitas Tarumanagara. Didesain khusus untuk menarik minat HRD & Recruiter magang MBKM (Software Engineer / Full-Stack / Front-End Developer).

![Elvan Mariano Portfolio](/og-image.jpg)

## 🚀 Fitur & Keunggulan Website

- ⚡ **10-Second Impression**: Design ultra-premium (glassmorphism, aurora ambient lighting, typography Space Grotesk + Inter, smooth micro-animations).
- 📱 **Showcase Proyek Interaktif (Bukti Nyata)**:
  - **MyPSKD**: Aplikasi Mobile/Web PWA Sekolah dengan **3 Tab Gallery** (Siswa, Guru, Admin) & frame mock Smartphone.
  - **Untarest**: Social media discovery platform UNTAR dengan **Strip Gallery**.
  - **Kantin Kita**: Web e-commerce kantin sekolah dengan **Browser Frame Gallery** & thumbnail selector.
  - **ElvanStream**: Streaming platform media.
- 🔍 **Interactive Fullscreen Lightbox**: Klik gambar manapun untuk melihat screenshot aplikasi dalam ukuran penuh (dengan dukungan keyboard navigation Esc & panah).
- 🌓 **Dark / Light Mode**: Theme toggle otomatis dengan flash prevention script.
- 🎯 **Count-up Stats**: Statistik interaktif IPK 3.86, 400+ pengguna aktif, 4+ proyek real.
- 📄 **Integrasi CV & Contact Form**: Direct mail generator & link langsung download CV PDF.
- 📱 **Fully Responsive & Accessible**: Dioptimalkan untuk Mobile, Tablet, dan Desktop.
- 🔍 **SEO & OpenGraph Ready**: JSON-LD Person schema, sitemap.xml, robots.txt, metadata lengkap.

---

## 🛠️ Stack Teknologi

- **Framework**: Next.js 15 (App Router)
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Space Grotesk & Inter (Google Fonts)

---

## 📂 Struktur Project

```
portofolio-elvan/
├── public/                # Asset screenshot real proyek & foto profil
├── src/
│   ├── app/               # Next.js App Router (layout, page, projects/[slug], sitemap, robots)
│   ├── components/
│   │   ├── sections/      # Navbar, Hero, Stats, About, Skills, Projects, Leadership, Github, Contact, Footer
│   │   └── ui/            # PhoneFrame, BrowserFrame, Lightbox, Gallery, ThemeToggle, ScrollProgress, CountUp, CursorGlow
│   ├── data/              # Data terpusat (meta.ts, projects.ts, skills.ts)
│   └── lib/               # Utility functions (utils.ts)
└── tailwind.config.ts     # Design tokens & color system
```

---

## 💻 Cara Menjalankan Secara Lokal

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka browser di
http://localhost:3000
```

---

## 🚀 Cara Deploy ke Vercel (Gratis)

1. Push project ini ke GitHub repositori Anda: `https://github.com/Elvan1210/portofolio-elvan`.
2. Buka [Vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
3. Klik **"Add New Project"** -> Pilih repositori `portofolio-elvan`.
4. Klik **"Deploy"** (Vercel akan otomatis mendeteksi Next.js).
5. Dalam 1 menit, portofolio Anda sudah live online dengan HTTPS gratis!

---

© 2026 Elvan Mariano — Universitas Tarumanagara. All rights reserved.
