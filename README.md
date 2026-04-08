# 🍜 MealApp - Front-End Developer Practical Test

Project ini adalah hasil pengerjaan **Front-End Developer Practical Test** yang mendemonstrasikan kemampuan dalam membangun aplikasi web berbasis **React (TanStack Start)** dengan fokus pada performa (SSR), struktur kode atomik, dan antarmuka yang responsif.

---

## 📋 Pemenuhan Kriteria Tugas

Berdasarkan instruksi tes, berikut adalah fitur dan halaman yang telah diimplementasikan:

### 1. Halaman Ingredients (Daftar Bahan)
- **Status:** ✅ Selesai
- **Fitur:**
  - Menampilkan list data ingredients yang diambil dari endpoint *List of Ingredients*.
  - Dilengkapi dengan fitur **Search Ingredients by Name** di sisi front-end menggunakan state management yang efisien.
  - Setiap card bahan makanan dapat diklik untuk redirect ke halaman *Ingredients Detail*.
- **Komponen:** `IngredientGrid`, `IngredientCard`, `SearchInput`.

### 2. Halaman Ingredients Detail (Daftar Menu per Bahan)
- **Status:** ✅ Selesai
- **URL Parameter:** `ingredient-name`
- **Fitur:**
  - Menampilkan list data meals berdasarkan bahan yang dipilih melalui endpoint *Filter by Ingredients*.
  - Dilengkapi fitur **Search Meal by Name** spesifik di dalam daftar menu tersebut.
  - Setiap item menu menampilkan gambar dan judul yang menarik.
  - Klik pada menu akan melakukan redirect ke halaman *Meals Detail*.
- **Komponen:** `MealGrid`, `MealCard`, `SearchInput`.

### 3. Halaman Meals Detail (Opsional - Bonus)
- **Status:** ✅ Selesai (Diimplementasikan sebagai nilai tambah)
- **URL Parameter:** `meal-id`
- **Fitur:**
  - Menampilkan detail lengkap menu menggunakan endpoint *Detail Meal*.
  - **Konten:** Gambar Meal (Full-width), Nama Menu, Deskripsi/Tutorial Langkah demi Langkah, Daftar Recipe (Bahan & Ukuran).
  - **Media:** Menampilkan **YouTube Embedded** secara responsif untuk panduan visual.
- **Komponen:** `MealInfo`, `Tag`, `VideoEmbed`.

---

## 🛠️ Spesifikasi Teknis & Requirements
- **Framework:** **TanStack Start (NextJS-like SSR Framework)** - Memenuhi syarat penggunaan framework React dengan nilai lebih pada sisi Server-Side Rendering.
- **Styling:** **Tailwind CSS v4** - Memberikan tampilan modern, bersih, dan performa CSS yang sangat ringan.
- **Responsive Design:** Wajib mendukung Desktop, iPad (Tablets), dan Mobile. Implementasi menggunakan *Grid System* dan *Flexbox* yang adaptif.
- **Atomic Components:** Struktur folder disusun berdasarkan prinsip *Atomic Design* (`atoms`, `molecules`, `organisms`) untuk kemudahan penggunaan kembali komponen (*reusability*).

---

## 🎨 Kualitas Tampilan & Kreativitas
- **Micro-Animations:** Penggunaan transisi lembut dan *hover effects* pada setiap card untuk meningkatkan *engagement* pengguna.
- **Skeleton Loading:** Penggunaan komponen `Skeleton` untuk transisi antar halaman yang mulus dan menghindari *layout shift*.
- **Premium UI:** Tipografi menggunakan *Inter/Outfit* dengan palet warna *Slate & Blue*

---

## 🚀 Cara Menjalankan Project

### Prerequisites
- Node.js v18+
- pnpm

### Langkah Instalasi
1. Clone repository ini.
2. Jalankan `pnpm install` untuk menginstall dependensi.
3. Copy `.env.example` ke `.env` untuk konfigurasi API:
   ```bash
   cp .env.example .env
   ```
4. Jalankan aplikasi:
   ```bash
   pnpm dev
   ```
5. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---
**Kandidat:** [Anas Mufti]
**Posisi:** Front-End Developer (Part-Time)
