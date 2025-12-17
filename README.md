# APAR Landing Page

Landing page produk APAR (Alat Pemadam Api Ringan) dengan desain modern, dominan putih, aksen merah elegan, dan animasi halus.

## Tech Stack

- **Backend**: Laravel 12
- **Frontend**: React via Inertia.js
- **Build Tool**: Vite
- **Styling**: TailwindCSS v4
- **Animation**: Framer Motion
- **Icons**: lucide-react

## Fitur

- ✅ Navbar sticky dengan blur effect
- ✅ Hero section dengan animasi text reveal
- ✅ Trust bar dengan counter animasi
- ✅ Problem → Solution section
- ✅ Product grid (6 varian APAR)
- ✅ Service packages (3 paket layanan)
- ✅ Certification accordion
- ✅ How it works dengan progress line
- ✅ Testimonials carousel
- ✅ FAQ accordion
- ✅ Lead form dengan validasi
- ✅ Footer dengan floating WhatsApp button

## Instalasi

### Prerequisites

- PHP 8.2+
- Composer
- Node.js 18+
- npm

### Langkah-langkah

1. **Clone repository**

```bash
cd apar-landing
```

2. **Install PHP dependencies**

```bash
composer install
```

3. **Install NPM dependencies**

```bash
npm install
```

4. **Setup environment**

```bash
cp .env.example .env
php artisan key:generate
```

5. **Jalankan migrasi database**

```bash
php artisan migrate
```

## Menjalankan Aplikasi

### Development

Buka 2 terminal:

**Terminal 1 - Laravel Server:**
```bash
php artisan serve
```

**Terminal 2 - Vite Dev Server:**
```bash
npm run dev
```

Akses aplikasi di: `http://localhost:8000/apar`

### Production Build

```bash
npm run build
php artisan serve
```

## API Endpoints

### GET /api/products

Menampilkan daftar produk APAR.

### POST /api/leads

Menyimpan data lead dari form.

**Request body:**
```json
{
    "nama": "string (required)",
    "perusahaan": "string (optional)",
    "kota": "string (required)",
    "kebutuhan": "string (required)",
    "no_wa": "string (required)"
}
```

## Struktur Komponen React

```
resources/js/
├── app.jsx                     # React entry point
├── Pages/
│   └── AparLanding.jsx         # Main landing page
└── Components/Apar/
    ├── Navbar.jsx              # Sticky navbar
    ├── Hero.jsx                # Hero section
    ├── TrustBar.jsx            # Stats & trust badges
    ├── ProblemSolution.jsx     # Problem vs Solution
    ├── ProductGrid.jsx         # Product cards
    ├── ServicePackages.jsx     # Pricing packages
    ├── Certification.jsx       # Certifications accordion
    ├── HowItWorks.jsx          # Process steps
    ├── Testimonials.jsx        # Testimonials carousel
    ├── FAQ.jsx                 # FAQ accordion
    ├── LeadForm.jsx            # Contact form
    └── Footer.jsx              # Footer
```

## Kustomisasi

### Warna Theme

Edit `resources/css/app.css`:

```css
:root {
    --color-primary: #DC2626;      /* Warna merah utama */
    --color-primary-light: #FEE2E2;
    --color-primary-dark: #991B1B;
    --color-background: #FFFFFF;
    --color-background-alt: #F7F7FB;
}
```

### Nomor WhatsApp

Cari dan ganti `6281234567890` dengan nomor WhatsApp bisnis Anda di:
- `Navbar.jsx`
- `ProductGrid.jsx`
- `LeadForm.jsx`
- `Footer.jsx`

## License

MIT License
