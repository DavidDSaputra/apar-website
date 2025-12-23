<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use Illuminate\Http\Request;

class PublicProdukController extends Controller
{
    public function index()
    {
        $products = Produk::with([
            'gambar' => function ($query) {
                $query->orderBy('urutan', 'asc');
            }
        ])->latest()->get();

        return \Inertia\Inertia::render('Products/Index', [
            'products' => $products
        ]);
    }

    public function show($slug)
    {
        $product = Produk::with([
            'gambar' => function ($query) {
                $query->orderBy('urutan', 'asc');
            }
        ])->where('slug', $slug)->firstOrFail();

        return \Inertia\Inertia::render('Products/Show', [
            'product' => $product
        ]);
    }
}
