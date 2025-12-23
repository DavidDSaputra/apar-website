<?php

namespace Database\Seeders;

use App\Models\Artikel;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ArtikelSeeder extends Seeder
{
    public function run()
    {
        $user = User::first();
        if (!$user)
            return;

        $articles = [
            [
                'judul' => 'Pentingnya Memiliki APAR di Rumah Sesuai Standar SNI',
                'konten' => '<p>Kesadaran akan keselamatan kebakaran di lingkungan rumah tangga masih sering terabaikan. Padahal, memiliki Alat Pemadam Api Ringan (APAR) di rumah adalah langkah preventif yang sangat krusial.</p><h2>Mengapa Harus SNI?</h2><p>SNI menjamin bahwa produk telah melewati serangkaian uji coba ketat untuk memastikan efektivitasnya dalam memadamkan api. Jangan kompromi dengan keselamatan keluarga Anda dengan menggunakan produk tanpa sertifikasi yang jelas.</p><h3>Tips Penempatan APAR</h3><ul><li>Mudah terlihat dan dijangkau</li><li>Dekat dengan area berisiko (dapur)</li><li>Tidak terhalang benda lain</li></ul>',
                'meta_description' => 'Pelajari mengapa setiap rumah wajib memiliki APAR bersertifikat SNI untuk perlindungan maksimal keluarga Anda.',
                'meta_keywords' => 'APAR rumah, safety rumah, pemadam api SNI',
            ],
            [
                'judul' => 'Cara Merawat APAR Agar Selalu Siap Pakai',
                'konten' => '<p>Banyak orang membeli APAR namun lupa melakukan perawatan rutin. Padahal, APAR yang tidak terawat bisa gagal fungsi saat dibutuhkan.</p><h2>Langkah Perawatan Mandiri</h2><p>1. Cek tekanan pada manometer secara berkala (pastikan jarum di area hijau).<br>2. Bolak-balik tabung agar bubuk kimia tidak mengeras.<br>3. Pastikan segel masih utuh.</p>',
                'meta_description' => 'Tips mudah merawat APAR secara mandiri agar tetap berfungsi optimal saat situasi darurat.',
                'meta_keywords' => 'perawatan apar, maintenance apar, tips safety',
            ],
            [
                'judul' => 'Mengenal Berbagai Jenis Media Pemadam Api',
                'konten' => '<p>Tidak semua api bisa dipadamkan dengan media yang sama. Salah memilih media pemadam justru bisa membahayakan.</p><h2>Jenis-jenis Media:</h2><ol><li><strong>Dry Chemical Powder:</strong> Serbaguna untuk berbagai kelas kebakaran.</li><li><strong>CO2:</strong> Cocok untuk area kelistrikan karena tidak meninggalkan residu.</li><li><strong>Foam:</strong> Efektif untuk kebakaran cairan kimia/minyak.</li></ol>',
                'meta_description' => 'Panduan lengkap mengenal jenis media pemadam api seperti Powder, CO2, dan Foam beserta kegunaannya.',
                'meta_keywords' => 'jenis APAR, media pemadam, powder vs co2',
            ]
        ];

        foreach ($articles as $article) {
            Artikel::create([
                'judul' => $article['judul'],
                'slug' => Str::slug($article['judul']),
                'konten' => $article['konten'],
                'meta_title' => $article['judul'],
                'meta_description' => $article['meta_description'],
                'meta_keywords' => $article['meta_keywords'],
                'penulis_id' => $user->id,
                'published_at' => now(),
            ]);
        }
    }
}
