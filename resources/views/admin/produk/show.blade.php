@extends('layoutsadmin.app')

@section('title', 'Detail Produk')

@section('content')
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 animate-fade-in-up">
            <h1 class="text-2xl font-bold theme-text-primary">Detail Produk</h1>
            <div class="flex gap-2">
                <a href="{{ route('admin.produk.edit', $produk->id) }}"
                    class="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors">
                    <i class="fas fa-edit mr-2"></i>
                    Edit
                </a>
                <a href="{{ route('admin.produk.index') }}"
                    class="inline-flex items-center px-4 py-2 theme-bg-secondary theme-border border hover:border-blue-400 theme-text-primary rounded-lg transition-colors">
                    <i class="fas fa-arrow-left mr-2"></i>
                    Kembali
                </a>
            </div>
        </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up delay-100">
            <!-- Images Column -->
            <div class="lg:col-span-1 space-y-4">
                <!-- Main Image -->
                <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-4">
                    <h3 class="text-sm font-semibold theme-text-secondary mb-3">Gambar Utama</h3>
                    @if($produk->gambar_utama)
                        <img src="{{ asset('storage/' . $produk->gambar_utama) }}" alt="{{ $produk->nama_produk }}"
                            class="w-full h-64 object-cover rounded-lg theme-border border">
                    @else
                        <div
                            class="w-full h-64 theme-bg-secondary rounded-lg flex items-center justify-center border theme-border border-dashed">
                            <p class="theme-text-secondary opacity-70">Tidak ada gambar</p>
                        </div>
                    @endif
                </div>

                <!-- OG Image -->
                @if($produk->og_image)
                    <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-4">
                        <h3 class="text-sm font-semibold theme-text-secondary mb-3">OG Image</h3>
                        <img src="{{ asset('storage/' . $produk->og_image) }}" alt="OG Image"
                            class="w-full h-48 object-cover rounded-lg theme-border border">
                    </div>
                @endif
            </div>

            <!-- Details Column -->
            <div class="lg:col-span-2 space-y-6">
                <!-- Basic Info -->
                <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-6">
                    <h3 class="text-lg font-semibold theme-text-primary mb-4">Informasi Produk</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p class="text-sm theme-text-secondary">Nama Produk</p>
                            <p class="text-base font-medium theme-text-primary">{{ $produk->nama_produk }}</p>
                        </div>
                        <div>
                            <p class="text-sm theme-text-secondary">Slug</p>
                            <p class="text-base font-medium theme-text-primary">{{ $produk->slug }}</p>
                        </div>
                        <div>
                            <p class="text-sm theme-text-secondary">Dibuat</p>
                            <p class="text-base font-medium theme-text-primary">
                                {{ $produk->created_at->format('d M Y H:i') }}
                            </p>
                        </div>
                    </div>

                    @if($produk->deskripsi_lengkap)
                        <div class="mt-4 pt-4 theme-border border-t">
                            <p class="text-sm theme-text-secondary mb-2">Deskripsi</p>
                            <div class="text-base theme-text-primary whitespace-pre-line prose prose-invert max-w-none">
                                {!! $produk->deskripsi_lengkap !!}
                            </div>
                        </div>
                    @endif
                </div>

                <!-- Gallery -->
                @if($produk->gambar->count() > 0)
                    <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-6">
                        <h3 class="text-lg font-semibold theme-text-primary mb-4">Galeri Produk ({{ $produk->gambar->count() }}
                            gambar)</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            @foreach($produk->gambar as $gambar)
                                <a href="{{ asset('storage/' . $gambar->nama_file) }}" target="_blank" class="group relative block">
                                    <div class="aspect-square rounded-lg overflow-hidden theme-border border">
                                        <img src="{{ asset('storage/' . $gambar->nama_file) }}" alt="Gallery Image"
                                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                                    </div>
                                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg">
                                    </div>
                                </a>
                            @endforeach
                        </div>
                    </div>
                @endif

                <!-- SEO Info -->
                <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-6">
                    <h3 class="text-lg font-semibold theme-text-primary mb-4">SEO & Meta Tags</h3>
                    <div class="space-y-3">
                        @if($produk->meta_title)
                            <div>
                                <p class="text-sm theme-text-secondary">Meta Title</p>
                                <p class="text-base theme-text-primary">{{ $produk->meta_title }}</p>
                            </div>
                        @endif

                        @if($produk->meta_description)
                            <div>
                                <p class="text-sm theme-text-secondary">Meta Description</p>
                                <p class="text-base theme-text-primary">{{ $produk->meta_description }}</p>
                            </div>
                        @endif

                        @if($produk->meta_keywords)
                            <div>
                                <p class="text-sm theme-text-secondary">Meta Keywords</p>
                                <p class="text-base theme-text-primary">{{ $produk->meta_keywords }}</p>
                            </div>
                        @endif

                        @if($produk->canonical_url)
                            <div>
                                <p class="text-sm theme-text-secondary">Canonical URL</p>
                                <a href="{{ $produk->canonical_url }}" target="_blank"
                                    class="text-base text-blue-400 hover:text-blue-300 transition-colors">
                                    {{ $produk->canonical_url }}
                                </a>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection