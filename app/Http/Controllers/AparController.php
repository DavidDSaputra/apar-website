<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

use App\Models\Produk;
use App\Models\Testimoni;
use Illuminate\Support\Facades\Http;

class AparController extends Controller
{
    public function index(): Response
    {
        // Fetch products from API
        $products = [];
        try {
            $response = Http::get('https://joulwinn.com/api/products?nama=apar');

            if ($response->successful()) {
                $data = $response->json();
                if (isset($data['data'])) {
                    $products = collect($data['data'])->map(function ($product) {
                        return [
                            'id' => $product['id'],
                            'nama_produk' => $product['nama'],
                            'slug' => $product['slug'],
                            'gambar_utama' => !empty($product['gambar']) ? $product['gambar'][0]['url'] : null,
                            'deskripsi_lengkap' => $product['deskripsi']
                        ];
                    })->toArray();
                }
            }
        } catch (\Exception $e) {
            // Fallback strategy if API fails? For now just empty or log it.
            // \Log::error('API Error: ' . $e->getMessage());
        }

        // If API returns empty, maybe fallback to local DB? 
        // For now, based on instructions, we rely on API.

        // $products = Produk::with([
        //     'gambar' => function ($query) {
        //         $query->orderBy('urutan', 'asc');
        //     }
        // ])->inRandomOrder()->take(3)->get();


        $footerProducts = Produk::inRandomOrder()->take(6)->get();

        $testimonis = Testimoni::latest()->get();

        return Inertia::render('AparLanding', [
            'products' => $products,
            'testimonis' => $testimonis
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('Contact');
    }
}
