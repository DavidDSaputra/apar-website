<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

use App\Models\Produk;

class AparController extends Controller
{
    public function index(): Response
    {
        $products = Produk::with([
            'gambar' => function ($query) {
                $query->orderBy('urutan', 'asc');
            }
        ])->inRandomOrder()->take(3)->get();

        return Inertia::render('AparLanding', [
            'products' => $products
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('Contact');
    }
}
