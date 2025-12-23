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
        ])->latest()->paginate(9);

        return view('landing.produk.index', compact('products'));
    }

    public function show($slug)
    {
        $product = Produk::with([
            'gambar' => function ($query) {
                $query->orderBy('urutan', 'asc');
            }
        ])->where('slug', $slug)->firstOrFail();

        $relatedProducts = Produk::where('id', '!=', $product->id)
            ->with([
                'gambar' => function ($query) {
                    $query->orderBy('urutan', 'asc');
                }
            ])
            ->inRandomOrder()
            ->take(3)
            ->get();

        return view('landing.produk.show', compact('product', 'relatedProducts'));
    }
}
