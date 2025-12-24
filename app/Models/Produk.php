<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Produk extends Model
{
    use HasFactory;

    protected $table = 'produk';

    protected $fillable = [
        'nama_produk',
        'slug',
        'deskripsi_lengkap',
        'rekomendasi',
        'gambar_utama',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'og_image',
        'canonical_url',
    ];

    public function gambar()
    {
        return $this->hasMany(GambarProduk::class, 'produk_id');
    }
}