<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

use App\Models\Produk;
use App\Models\Testimoni;

class AparController extends Controller
{
    public function index(): Response
    {
        $products = Produk::with([
            'gambar' => function ($query) {
                $query->orderBy('urutan', 'asc');
            }
        ])->inRandomOrder()->take(3)->get();

        $footerProducts = Produk::inRandomOrder()->take(6)->get();

        $testimonis = Testimoni::latest()->get();

        return Inertia::render('AparLanding', [
            'products' => $products,
            'footerProducts' => $footerProducts,
            'testimonis' => $testimonis
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('Contact');
    }
}
