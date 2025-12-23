<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

use App\Models\Produk;

class AparController extends Controller
{
    public function index(): Response
    {
        $products = Produk::with('gambar')->get();
        return Inertia::render('AparLanding', [
            'products' => $products
        ]);
    }
}
