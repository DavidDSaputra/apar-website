<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Testimoni;

class TestimoniSeeder extends Seeder
{
    public function run(): void
    {
        $testimonis = [
            [
                'nama' => 'Budi Santoso',
                'pekerjaan' => 'Manager PT. Maju Jaya',
                'isi' => 'Pelayanan sangat memuaskan! APAR yang kami beli berkualitas tinggi dan tim Joulwinn sangat profesional dalam instalasi. Sangat direkomendasikan untuk kebutuhan proteksi kebakaran perusahaan.',
                'rating' => 5,
                'foto' => null,
            ],
            [
                'nama' => 'Siti Nurhaliza',
                'pekerjaan' => 'Owner Restoran Sedap',
                'isi' => 'Harga kompetitif dengan kualitas terbaik. Sudah 2 tahun menggunakan APAR dari Joulwinn dan tidak pernah mengecewakan. Maintenance rutin juga sangat membantu.',
                'rating' => 5,
                'foto' => null,
            ],
            [
                'nama' => 'Ahmad Rizki',
                'pekerjaan' => 'Facility Manager Hotel Bintang Lima',
                'isi' => 'Produk APAR lengkap dan bersertifikat. Tim sales sangat membantu dalam menentukan jenis APAR yang sesuai untuk setiap area hotel kami. Terima kasih Joulwinn!',
                'rating' => 5,
                'foto' => null,
            ],
            [
                'nama' => 'Dewi Lestari',
                'pekerjaan' => 'HSE Coordinator PT. Industri Mandiri',
                'isi' => 'Pengiriman cepat dan packaging rapi. APAR yang diterima sesuai spesifikasi dan sudah termasuk training penggunaan untuk tim kami. Sangat puas!',
                'rating' => 5,
                'foto' => null,
            ],
            [
                'nama' => 'Eko Prasetyo',
                'pekerjaan' => 'Kepala Gudang PT. Logistik Nusantara',
                'isi' => 'Sudah bekerja sama dengan Joulwinn selama 3 tahun untuk kebutuhan APAR di seluruh cabang kami. Konsisten dalam kualitas dan pelayanan after sales yang responsif.',
                'rating' => 5,
                'foto' => null,
            ],
            [
                'nama' => 'Linda Wijaya',
                'pekerjaan' => 'Pemilik Apartemen Green Valley',
                'isi' => 'Konsultasi gratis sangat membantu dalam menentukan jumlah dan jenis APAR yang dibutuhkan. Harga terjangkau untuk kualitas premium. Highly recommended!',
                'rating' => 5,
                'foto' => null,
            ],
        ];

        foreach ($testimonis as $testimoni) {
            Testimoni::create($testimoni);
        }
    }
}
