<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $posts = \App\Models\Artikel::with('penulis')
            ->latest()
            ->paginate(9);

        return Inertia::render('Blog/Index', [
            'posts' => $posts
        ]);
    }

    public function show($slug)
    {
        $post = \App\Models\Artikel::with('penulis')
            ->where('slug', $slug)
            ->firstOrFail();

        // Increment views
        $post->increment('views');

        // Get related posts (exclude current)
        $related = \App\Models\Artikel::where('id', '!=', $post->id)
            ->inRandomOrder()
            ->take(3)
            ->get();

        return Inertia::render('Blog/Show', [
            'post' => $post,
            'related' => $related
        ]);
    }
}
