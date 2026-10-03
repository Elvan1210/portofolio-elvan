export interface GalleryImage {
  src: string
  caption: string
  width?: number
  height?: number
}

export interface TabGallery {
  label: string
  images: GalleryImage[]
}

export interface ProjectGallery {
  type: 'tabs' | 'strip' | 'browser' | 'none'
  tabs?: TabGallery[]       // for 'tabs' type (MyPSKD)
  images?: GalleryImage[]   // for 'strip' and 'browser' types
}

export interface Feature {
  title: string
  description: string
}

export interface Challenge {
  challenge: string
  solution: string
}

export interface Project {
  slug: string
  title: string
  shortTitle: string
  emoji: string
  tagline: string
  role: string
  team: string
  period: string
  stack: string[]
  summary: string
  problem?: string
  solution?: string
  myRole: string[]
  features: Feature[]
  challenges: Challenge[]
  gallery: ProjectGallery
  liveUrl: string | null
  githubUrl: string | null
  youtubeUrl?: string | null
  apkUrl?: string | null
  note?: string
  accentColor: string
  thumbnailSrc: string | null
  thumbnailType: 'phone' | 'browser' | 'strip' | 'none'
}

export const projects: Project[] = [
  /* ─────────────────── MyPSKD ─────────────────── */
  {
    slug: 'mypskd',
    title: 'MyPSKD — Learning Management System',
    shortTitle: 'MyPSKD',
    emoji: '🎓',
    tagline: 'Platform LMS terpadu: kelas, materi, tugas, kuis, presensi, dan chat real-time.',
    role: 'Team Leader & Full-Stack Developer',
    team: '5 Developer',
    period: '2024',
    stack: ['Next.js', 'Node.js', 'Firebase Auth', 'Firestore', 'Cloudinary'],
    summary:
      'MyPSKD adalah platform Learning Management System (LMS) terpadu yang mengelola keseluruhan siklus pembelajaran — mulai dari manajemen kelas, pengunggahan materi, penugasan, kuis dengan fitur Secure Exam, presensi, rekap nilai, hingga komunikasi chat real-time antar pengguna. Terinspirasi dari konsep Binus Maya, platform ini dirancang untuk menjembatani guru, siswa, dan admin dalam satu ekosistem digital.',
    problem:
      'Pengelolaan kelas secara manual atau dengan alat yang terpisah-pisah (Google Classroom untuk tugas, WhatsApp untuk komunikasi, absensi manual) menciptakan fragmentasi dan inefisiensi bagi guru maupun siswa.',
    solution:
      'Membangun satu platform terpadu dengan tiga peran berbeda (Siswa, Guru, Admin), komunikasi real-time berbasis Firestore, dan sistem ujian aman yang meminimalisir kecurangan secara teknis.',
    myRole: [
      'Memimpin tim 5 developer, membagi tugas, dan menetapkan standar kode bersama',
      'Merancang ulang UI/UX dari wireframe hingga implementasi komponen',
      'Merancang arsitektur database Firestore (koleksi, relasi, keamanan rules)',
      'Membangun API backend (Node.js/Express) untuk fitur penugasan, kuis, dan presensi',
      'Mengimplementasikan sistem autentikasi dengan Firebase Auth',
      'Menyelesaikan konflik kode (merge conflict) saat anggota mengerjakan fitur secara paralel',
      'Menangani deployment ke Vercel dan konfigurasi CI/CD secara mandiri',
    ],
    features: [
      {
        title: 'Role-Based Access Control 3 Peran',
        description: 'Siswa, Guru, dan Admin memiliki dashboard dan akses fitur yang berbeda sesuai perannya.',
      },
      {
        title: 'Chat Real-Time & Channel Kelas',
        description: 'Pesan personal antar pengguna dan channel diskusi per kelas menggunakan Firestore real-time listener.',
      },
      {
        title: 'Pengumuman & Notifikasi',
        description: 'Guru dapat broadcast pengumuman ke seluruh siswa kelas dengan notifikasi otomatis.',
      },
      {
        title: 'Presensi Digital & Rekap',
        description: 'Absensi berbasis sesi kelas dengan jurnal kehadiran dan rekap persentase otomatis.',
      },
      {
        title: 'Penugasan & Unggah File',
        description: 'Siswa dapat mengumpulkan tugas berupa file atau link; guru menilai langsung di platform.',
      },
      {
        title: 'Secure Exam & Live Cheating Monitor',
        description: 'Kuis dengan mode ujian aman: larangan pindah aplikasi, larangan copy-paste, setiap pelanggaran dicatat. Guru bisa memantau aktivitas siswa secara real-time.',
      },
      {
        title: 'Rekap Nilai',
        description: 'Nilai tugas dan kuis terekap otomatis per siswa per kelas dengan ringkasan performa.',
      },
      {
        title: 'Fitur Live Meeting',
        description: 'Integrasi link meeting (Zoom) langsung di dalam kelas untuk sesi pembelajaran daring.',
      },
    ],
    challenges: [
      {
        challenge: 'Konflik kode saat banyak anggota mengerjakan fitur secara paralel di branch yang sama.',
        solution: 'Menerapkan Git Flow dengan branch per fitur, review wajib sebelum merge, dan sesi daily sync untuk koordinasi pengerjaan.',
      },
      {
        challenge: 'Merancang sistem ujian yang aman agar siswa tidak bisa curang secara teknis.',
        solution: 'Menggunakan Visibility API untuk mendeteksi perpindahan tab, mencegah copy-paste via event handler, dan menyimpan setiap pelanggaran ke Firestore yang bisa dipantau guru secara real-time.',
      },
      {
        challenge: 'Sinkronisasi data real-time (chat, notifikasi) yang efisien tanpa membebani kuota Firestore.',
        solution: 'Menggunakan Firestore onSnapshot listener dengan unsubscribe cleanup, dan membatasi query hanya pada data yang relevan (per kelas, per pengguna).',
      },
    ],
    gallery: {
      type: 'tabs',
      tabs: [
        {
          label: 'Siswa',
          images: [
            { src: '/project/mypskd/siswa/Login-siswa.png',             caption: 'Login Siswa',              width: 230, height: 420 },
            { src: '/project/mypskd/siswa/Dashboard-siswa.png',         caption: 'Dashboard Siswa',          width: 230, height: 420 },
            { src: '/project/mypskd/siswa/Dalam-Kelas-siswa.png',       caption: 'Dalam Kelas',              width: 230, height: 420 },
            { src: '/project/mypskd/siswa/Presensi-siswa.png',          caption: 'Presensi Digital',         width: 230, height: 420 },
            { src: '/project/mypskd/siswa/Daftar-Tugas-siswa.png',      caption: 'Daftar Tugas',             width: 230, height: 420 },
            { src: '/project/mypskd/siswa/Pengumpulan-Tuags-siswa.png', caption: 'Pengumpulan Tugas',        width: 230, height: 420 },
            { src: '/project/mypskd/siswa/Daftar-Kuis-siswa.png',       caption: 'Daftar Kuis',              width: 230, height: 420 },
            { src: '/project/mypskd/siswa/Mulai-Kuis-siswa.png',        caption: 'Mulai Kuis (Secure Exam)', width: 230, height: 420 },
            { src: '/project/mypskd/siswa/Nilai-siswa.png',             caption: 'Rekap Nilai',              width: 230, height: 420 },
            { src: '/project/mypskd/siswa/Chat-siswa.png',              caption: 'Chat Siswa',               width: 230, height: 420 },
          ],
        },
        {
          label: 'Guru',
          images: [
            { src: '/project/mypskd/guru/Buat-Kelas-guru.png',       caption: 'Buat Kelas',              width: 230, height: 420 },
            { src: '/project/mypskd/guru/Kelola-Kelas-guru.png',      caption: 'Kelola Kelas',            width: 230, height: 420 },
            { src: '/project/mypskd/guru/Pengumuman-guru.png',        caption: 'Broadcast Pengumuman',    width: 230, height: 420 },
            { src: '/project/mypskd/guru/Presensi-guru.png',          caption: 'Input Presensi',          width: 230, height: 420 },
            { src: '/project/mypskd/guru/Unggah-Materi-guru.png',     caption: 'Unggah Materi',           width: 230, height: 420 },
            { src: '/project/mypskd/guru/Buat-Tugas-guru.png',        caption: 'Buat Tugas',              width: 230, height: 420 },
            { src: '/project/mypskd/guru/Buat-Kuis-guru.png',         caption: 'Buat Kuis',               width: 230, height: 420 },
            { src: '/project/mypskd/guru/Live-Monitoring-guru.png',   caption: 'Live Cheating Monitor',  width: 230, height: 420 },
            { src: '/project/mypskd/guru/Fitur-Meeting-guru.png',     caption: 'Fitur Live Meeting',      width: 230, height: 420 },
          ],
        },
        {
          label: 'Admin',
          images: [
            { src: '/project/mypskd/admin/User-Management-admin.png',  caption: 'Manajemen Pengguna', width: 230, height: 420 },
            { src: '/project/mypskd/admin/Kelas-Management-admin.png', caption: 'Manajemen Kelas',    width: 230, height: 420 },
          ],
        },
      ],
    },
    liveUrl:   null,
    githubUrl: null,
    accentColor: '#E5B94E',
    thumbnailSrc: '/project/mypskd/siswa/Dashboard-siswa.png',
    thumbnailType: 'phone',
  },

  /* ─────────────────── Untarest ─────────────────── */
  {
    slug: 'untarest',
    title: 'Untarest — Aplikasi Sosial Media Mobile',
    shortTitle: 'Untarest',
    emoji: '📸',
    tagline: 'Aplikasi berbagi foto bergaya Pinterest dengan chat real-time dan trending regional.',
    role: 'Team Leader & Mobile Developer',
    team: '5 Orang',
    period: '2024',
    stack: ['Flutter', 'Dart', 'Provider/Riverpod', 'Firebase Auth', 'Firestore', 'Cloudinary', 'NewsAPI'],
    summary:
      'Untarest adalah aplikasi mobile sosial media berbagi foto bergaya Pinterest yang dibangun dengan Flutter. Pengguna dapat mengikuti satu sama lain, mengunggah foto dari kamera atau galeri, memberikan like, bookmark, dan komentar secara real-time, serta berkomunikasi lewat chat. Platform ini menampilkan trending feed berdasarkan wilayah dan pencarian dengan auto-suggest.',
    problem:
      'Aplikasi sosial media berbagi foto yang ada (Instagram, Pinterest) tidak menampilkan konten berdasarkan lokasi/wilayah pengguna dan tidak ada sistem login berbasis username yang familiar bagi pengguna Indonesia.',
    solution:
      'Membangun aplikasi mobile cross-platform dengan Flutter yang mengintegrasikan Firebase untuk data real-time, Cloudinary untuk penyimpanan foto, dan sistem login berbasis username yang dipetakan ke email Firebase Auth.',
    myRole: [
      'Memimpin tim 5 orang dan mengkoordinasikan pembagian fitur',
      'Membangun sistem chat real-time: unread count, read receipt, hapus pesan dengan swipe',
      'Mengimplementasikan follow/unfollow dengan counter real-time di Firestore',
      'Membangun fitur like, bookmark (save), dan komentar dengan update real-time',
      'Mengintegrasikan Cloudinary untuk upload foto dari kamera/galeri dengan preview dan caption',
      'Membangun sistem login berbasis username yang dipetakan ke email Firebase Auth',
      'Mengelola alur routing dan state management dari UI ke Firestore',
      'Menyelesaikan konflik kode saat merge fitur upload dengan branch lain',
      'Mengintegrasikan NewsAPI untuk konten trending',
    ],
    features: [
      {
        title: 'Chat Real-Time',
        description: 'Pesan antar pengguna dengan unread count, read receipt, dan hapus pesan menggunakan swipe gesture.',
      },
      {
        title: 'Follow/Unfollow & Counter Real-Time',
        description: 'Sistem follow dengan jumlah followers/following yang terupdate secara real-time di semua perangkat.',
      },
      {
        title: 'Like, Bookmark & Komentar',
        description: 'Interaksi foto real-time: like, simpan ke koleksi, dan komentar yang terlihat langsung tanpa refresh.',
      },
      {
        title: 'Upload Foto dengan Preview',
        description: 'Upload foto dari kamera atau galeri dengan preview, tambahan caption, dan penyimpanan otomatis ke Cloudinary.',
      },
      {
        title: 'Login Berbasis Username',
        description: 'Login dengan username (bukan email) yang dipetakan secara internal ke Firebase Auth berbasis email.',
      },
      {
        title: 'Pencarian & Auto-Suggest',
        description: 'Pencarian konten dan pengguna dengan fitur auto-suggest saat mengetik.',
      },
      {
        title: 'Region Filter & Trending Feed',
        description: 'Filter konten trending berdasarkan wilayah/region untuk menampilkan konten yang relevan secara lokal.',
      },
      {
        title: 'Profil dengan Tab',
        description: 'Halaman profil dengan tab Photos (diunggah), Liked (disukai), dan Saved (disimpan).',
      },
    ],
    challenges: [
      {
        challenge: 'Sinkronisasi counter real-time (followers, unread messages) di banyak perangkat secara konsisten.',
        solution: 'Menggunakan Firestore transactions untuk update counter atomik, dan onSnapshot listener yang dikelola dengan baik untuk mencegah memory leak.',
      },
      {
        challenge: 'Login berbasis username di atas Firebase Authentication yang hanya mendukung email.',
        solution: 'Menyimpan mapping username → email di Firestore collection terpisah; saat login, query dulu collection ini untuk mendapatkan email, kemudian autentikasi dengan Firebase Auth.',
      },
      {
        challenge: 'Konflik kode saat merge fitur upload foto dengan branch yang mengubah state management.',
        solution: 'Melakukan code review bersama, menulis ulang bagian state yang konflik dengan pendekatan yang disepakati tim, dan menambahkan test manual untuk memastikan fitur lain tidak rusak.',
      },
    ],
    gallery: {
      type: 'strip',
      images: [
        { src: '/project/untarest/SignUp-untarest.png',          caption: 'Registrasi Akun',               width: 700, height: 420 },
        { src: '/project/untarest/Homepage-untarest.png',        caption: 'Beranda & Feed',                width: 700, height: 420 },
        { src: '/project/untarest/Search-untarest.png',          caption: 'Pencarian Konten & Pengguna',   width: 700, height: 420 },
        { src: '/project/untarest/Upload-untarest.png',          caption: 'Upload Foto',                   width: 700, height: 420 },
        { src: '/project/untarest/LikeSaveKomen-untarest.png',   caption: 'Like, Simpan & Komentar',       width: 700, height: 420 },
        { src: '/project/untarest/Komen-untarest.png',           caption: 'Kolom Komentar',                width: 700, height: 420 },
        { src: '/project/untarest/Profile-untarest.png',         caption: 'Profil Pengguna',               width: 700, height: 420 },
        { src: '/project/untarest/Profile-sendiri-untarest.png', caption: 'Profil Saya',                   width: 700, height: 420 },
        { src: '/project/untarest/Fitur-Chat-untarest.png',      caption: 'Fitur Chat Real-Time',          width: 700, height: 420 },
      ],
    },
    liveUrl:    null,
    githubUrl:  'https://github.com/Elvan1210/Mobile-Programming-Untarest',
    youtubeUrl: null,
    apkUrl:     null,
    note: 'Aplikasi ini berjalan di emulator Android/iOS. Screenshot di atas menampilkan gabungan beberapa layar yang diambil saat demo di emulator.',
    accentColor: '#54C5F8',
    thumbnailSrc: '/project/untarest/Homepage-untarest.png',
    thumbnailType: 'strip',
  },

  /* ─────────────────── Kantin Kita ─────────────────── */
  {
    slug: 'kantin-kita',
    title: 'Kantin Kita — Sistem Kasir Offline-First',
    shortTitle: 'Kantin Kita',
    emoji: '🏪',
    tagline: 'Aplikasi kasir web yang tetap berfungsi penuh meski tanpa koneksi internet.',
    role: 'Team Leader & Lead Full-Stack Developer',
    team: '4 Orang',
    period: '2024',
    stack: ['Next.js', 'TypeScript', 'Bootstrap 5', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Cloudinary'],
    summary:
      'Kantin Kita adalah sistem kasir berbasis web dengan arsitektur Offline-First yang dikembangkan khusus untuk Kantin Rajawali, Jakarta (Panin Dai-ichi Life Center). Aplikasi ini memecahkan masalah utama UMKM kantin di basement atau area dengan sinyal tidak stabil: sistem kasir online konvensional berhenti total saat internet mati, sedangkan Kantin Kita tetap berfungsi penuh dan menyinkronkan data secara otomatis saat koneksi kembali.',
    problem:
      'UMKM kantin Rajawali berlokasi di basement gedung dengan koneksi internet yang tidak stabil. Sistem kasir berbasis cloud konvensional berhenti total saat offline, menyebabkan transaksi gagal dan kehilangan data.',
    solution:
      'Mengimplementasikan arsitektur Offline-First: semua transaksi disimpan terlebih dahulu di local storage/IndexedDB saat offline, kemudian otomatis disinkronkan ke server MongoDB saat koneksi internet kembali tersedia.',
    myRole: [
      'Memimpin tim 4 developer sebagai Team Leader',
      'Menjadi kontributor utama kode front-end (Next.js + Bootstrap 5) dan back-end (Express.js + MongoDB)',
      'Merancang dan mengimplementasikan arsitektur Offline-First',
      'Membangun API endpoint untuk produk, transaksi, dan autentikasi (JWT)',
      'Mengembangkan custom React Hooks untuk integrasi API dan state management',
      'Mengimplementasikan fitur manajemen menu (CRUD) dengan upload gambar ke Cloudinary',
      'Merancang skema database MongoDB dengan Mongoose',
      'Koordinasi deployment dan environment configuration',
    ],
    features: [
      {
        title: 'Arsitektur Offline-First',
        description: 'Transaksi tersimpan lokal saat offline dan otomatis sinkron ke server MongoDB saat koneksi tersedia kembali.',
      },
      {
        title: 'Login Split-Screen dengan Pemilihan Peran',
        description: 'Halaman login elegan dengan tampilan split-screen, Admin dan Kasir memiliki akses yang berbeda.',
      },
      {
        title: 'Dashboard Pendapatan',
        description: 'Ringkasan pendapatan harian, jumlah transaksi, dan menu paling populer dalam tampilan dashboard yang bersih.',
      },
      {
        title: 'Kasir dengan Keranjang',
        description: 'Antarmuka kasir yang cepat dengan keranjang pesanan, jumlah item, dan kalkulasi total otomatis.',
      },
      {
        title: 'Manajemen Menu (CRUD)',
        description: 'Admin dapat menambah, mengedit, menghapus menu beserta harga, stok, dan gambar (upload ke Cloudinary).',
      },
      {
        title: 'Histori Transaksi',
        description: 'Riwayat semua transaksi dengan filter dan detail per transaksi.',
      },
      {
        title: 'Autentikasi JWT',
        description: 'Sistem autentikasi berbasis JSON Web Token yang aman dan stateless.',
      },
    ],
    challenges: [
      {
        challenge: 'Memastikan transaksi tidak hilang saat koneksi internet putus di tengah operasional.',
        solution: 'Mengimplementasikan queue transaksi di IndexedDB. Setiap transaksi baru pertama masuk queue lokal, lalu background sync otomatis mengirimkannya ke server saat koneksi tersedia.',
      },
      {
        challenge: 'Sinkronisasi data antara penyimpanan lokal dan server MongoDB tanpa duplikasi transaksi.',
        solution: 'Memberi setiap transaksi UUID unik yang dihasilkan di client. Server menolak duplikat berdasarkan UUID ini saat proses sinkronisasi.',
      },
    ],
    gallery: {
      type: 'browser',
      images: [
        { src: '/project/kantin-kita/Login.png',              caption: 'Login Split-Screen',    width: 800, height: 500 },
        { src: '/project/kantin-kita/Dashboard.png',          caption: 'Dashboard Pendapatan', width: 800, height: 500 },
        { src: '/project/kantin-kita/Menu.png',               caption: 'Menu Kasir',           width: 800, height: 500 },
        { src: '/project/kantin-kita/Kelola-Menu.png',        caption: 'Kelola Menu',          width: 800, height: 500 },
        { src: '/project/kantin-kita/History-Transaksi.png',  caption: 'Riwayat Transaksi',   width: 800, height: 500 },
        { src: '/project/kantin-kita/History-Transaksi2.png', caption: 'Detail Transaksi',     width: 800, height: 500 },
      ],
    },
    liveUrl:   null,
    githubUrl: null,
    accentColor: '#F97316',
    thumbnailSrc: '/project/kantin-kita/Dashboard.png',
    thumbnailType: 'browser',
  },

  /* ─────────────────── Weather App ─────────────────── */
  {
    slug: 'weather-app',
    title: 'Weather App — Backend API',
    shortTitle: 'Weather App',
    emoji: '⛅',
    tagline: 'Backend REST API untuk data cuaca dengan autentikasi dan manajemen database.',
    role: 'Backend Developer (Member)',
    team: 'Tim',
    period: '2024',
    stack: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    summary:
      'Kontribusi sebagai Backend Developer pada proyek aplikasi cuaca berbasis Laravel. Fokus pada pembuatan endpoint REST API untuk data cuaca, pengelolaan routing, implementasi autentikasi, dan pengamanan operasi database.',
    myRole: [
      'Membuat endpoint REST API untuk data cuaca (fetch, filter, paginasi)',
      'Mengimplementasikan routing dan middleware autentikasi',
      'Mengamankan operasi database dengan validasi input dan query builder',
      'Berkolaborasi dengan tim frontend untuk mendefinisikan kontrak API',
    ],
    features: [
      {
        title: 'REST API Endpoint Cuaca',
        description: 'Endpoint untuk mengambil data cuaca dengan filter lokasi dan paginasi hasil.',
      },
      {
        title: 'Autentikasi & Middleware',
        description: 'Sistem autentikasi untuk mengamankan akses ke endpoint API.',
      },
      {
        title: 'Manajemen Database',
        description: 'Operasi database dengan ORM Eloquent dan query yang aman dari SQL injection.',
      },
    ],
    challenges: [],
    gallery: {
      type: 'browser',
      images: [
        { src: '/project/weather-app/Authentication-200-weather.png', caption: 'Auth Login 200 OK', width: 800, height: 500 },
        { src: '/project/weather-app/Authentication-400-weather.png', caption: 'Auth Login 400 Bad Request', width: 800, height: 500 },
        { src: '/project/weather-app/Authentication-403-weather.png', caption: 'Auth 403 Forbidden', width: 800, height: 500 },
        { src: '/project/weather-app/Weather-station-200.png', caption: 'Get Weather Station 200', width: 800, height: 500 },
        { src: '/project/weather-app/Weather-station-404.png', caption: 'Weather Station 404 Not Found', width: 800, height: 500 },
        { src: '/project/weather-app/Post-200-weather.png', caption: 'POST Station 200 Created', width: 800, height: 500 },
        { src: '/project/weather-app/Update-Role-weather.png', caption: 'Update Role API', width: 800, height: 500 },
        { src: '/project/weather-app/Delete-200-weather.png', caption: 'Delete Station 200 OK', width: 800, height: 500 },
        { src: '/project/weather-app/Get-User-Admin-weather.png', caption: 'Get User Admin', width: 800, height: 500 },
      ],
    },
    liveUrl:   null,
    githubUrl: null,
    accentColor: '#60A5FA',
    thumbnailSrc: '/project/weather-app/Authentication-200-weather.png',
    thumbnailType: 'browser',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
