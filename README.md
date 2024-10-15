# Proyek Marketplace

Aplikasi web marketplace sederhana yang dibangun menggunakan React, Vite, dan Tailwind CSS. Aplikasi ini memiliki halaman utama yang menampilkan daftar produk, slider produk unggulan, halaman login, bilah pencarian dengan rekomendasi produk, serta halaman detail untuk tiap produk.

## Fitur

- **Halaman Utama dengan Daftar Produk**: Menampilkan produk dalam format grid.
- **Slider Produk Unggulan**: Banner dengan fitur auto-slide untuk produk diskon atau unggulan.
- **Bilah Pencarian**: Pengguna dapat mencari produk berdasarkan nama dengan rekomendasi produk yang dapat diklik.
- **Halaman Detail Produk**: Menampilkan informasi lengkap tentang tiap produk.
- **Halaman Login**: Form login sederhana (hanya untuk demonstrasi, tanpa fungsi autentikasi).

## Struktur Proyek

```
project-root/
├── src/
│   ├── components/
│   │   └── SearchBar.jsx         # Komponen bilah pencarian dengan rekomendasi
│   ├── pages/
│   │   └── Login.jsx             # Halaman login
│   │   └── Marketplace.jsx       # Halaman utama dengan slider dan daftar produk
│   │   └── ProductPage.jsx       # Halaman detail untuk tiap produk
│   ├── App.jsx                   # Komponen utama aplikasi dengan routing
│   ├── main.jsx                  # Titik masuk aplikasi
│   └── index.css                 # Pengaturan Tailwind CSS
└── public/
    └── img/                      # Folder untuk gambar produk
```

## Instalasi

1. Clone repositori:
   ```bash
   git clone <repository-url>
   cd project-folder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```

4. Buka aplikasi di browser pada `http://localhost:3000`.

## Cara Penggunaan

- **Pencarian**: Ketik nama produk pada bilah pencarian dan klik "Search" untuk melihat rekomendasi. Klik salah satu rekomendasi untuk melihat detail produk.
- **Login**: Klik "Login" di sudut kanan atas untuk membuka form login.
- **Lihat Produk**: Klik produk pada daftar untuk melihat detail lebih lanjut.

## Dependencies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## Lisensi

Proyek ini bersifat open-source 
