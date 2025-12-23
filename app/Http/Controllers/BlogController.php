<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        $posts = \App\Models\Artikel::with('penulis')
            ->latest()
            ->paginate(9);

        return view('blog.index', compact('posts'));
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
            ->take(2)
            ->get();

        return view('blog.show', compact('post', 'related'));
    }
}
