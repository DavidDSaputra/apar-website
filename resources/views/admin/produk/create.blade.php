@extends('layoutsadmin.app')

@section('title', 'Tambah Produk')

@section('content')
    <script src="https://cdn.tiny.cloud/1/pxtqyte6btxrd0039qdxzx1frknn13n8l8nbob563irb7q96/tinymce/8/tinymce.min.js"
        referrerpolicy="origin" crossorigin="anonymous"></script>
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 animate-fade-in-up">
            <h1 class="text-2xl font-bold theme-text-primary">Tambah Produk</h1>
            <a href="{{ route('admin.produk.index') }}"
                class="inline-flex items-center px-4 py-2 theme-bg-secondary theme-border border hover:border-red-400 theme-text-primary rounded-lg transition-colors">
                <i class="fas fa-arrow-left mr-2"></i>
                Kembali
            </a>
        </div>

        <!-- Form Card -->
        <div
            class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg animate-fade-in-up delay-100">
            <div class="p-6 theme-border border-b">
                <h2 class="text-lg font-semibold theme-text-primary">Form Tambah Produk</h2>
            </div>

            <form action="{{ route('admin.produk.store') }}" method="POST" enctype="multipart/form-data" class="p-6">
                @csrf

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Left Column -->
                    <div class="space-y-6">
                        <!-- Nama Produk -->
                        <div>
                            <label for="nama_produk" class="block text-sm font-medium theme-text-secondary mb-2">
                                Nama Produk <span class="text-red-500">*</span>
                            </label>
                            <input type="text" id="nama_produk" name="nama_produk" value="{{ old('nama_produk') }}" required
                                class="w-full px-4 py-2 theme-bg-secondary theme-border border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent theme-text-primary @error('nama_produk') border-red-500 @enderror">
                            @error('nama_produk')
                                <p class="mt-1 text-sm text-red-500">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Deskripsi with TinyMCE -->
                        <div>
                            <label for="deskripsi_lengkap" class="block text-sm font-medium theme-text-secondary mb-2">
                                Deskripsi Lengkap
                            </label>
                            <textarea id="deskripsi_lengkap" name="deskripsi_lengkap"
                                class="tinymce-editor">{{ old('deskripsi_lengkap') }}</textarea>
                            @error('deskripsi_lengkap')
                                <p class="mt-1 text-sm text-red-500">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <!-- Right Column -->
                    <div class="space-y-6">
                        <!-- Gambar Utama -->
                        <div>
                            <label for="gambar_utama" class="block text-sm font-medium theme-text-secondary mb-2">
                                Gambar Utama
                            </label>
                            <input type="file" id="gambar_utama" name="gambar_utama" accept="image/*"
                                class="w-full px-4 py-2 theme-bg-secondary theme-border border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent theme-text-primary @error('gambar_utama') border-red-500 @enderror">
                            <p class="mt-1 text-xs theme-text-secondary opacity-70">Format: JPG, PNG, GIF (Max: 2MB)</p>
                            @error('gambar_utama')
                                <p class="mt-1 text-sm text-red-500">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Galeri Produk -->
                        <div>
                            <label for="gambar_produk" class="block text-sm font-medium theme-text-secondary mb-2">
                                Galeri Produk (Multiple)
                            </label>
                            <input type="file" id="gambar_produk" name="gambar_produk[]" accept="image/*" multiple
                                class="w-full px-4 py-2 theme-bg-secondary theme-border border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent theme-text-primary @error('gambar_produk') border-red-500 @enderror">
                            <p class="mt-1 text-xs theme-text-secondary opacity-70">Pilih beberapa gambar sekaligus untuk
                                galeri produk</p>
                            @error('gambar_produk')
                                <p class="mt-1 text-sm text-red-500">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>
                </div>

                <!-- SEO Section -->
                <div class="mt-8 pt-6 theme-border border-t">
                    <h3 class="text-lg font-semibold theme-text-primary mb-4">SEO & Meta Tags</h3>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <!-- Meta Title -->
                        <div>
                            <label for="meta_title" class="block text-sm font-medium theme-text-secondary mb-2">
                                Meta Title
                            </label>
                            <input type="text" id="meta_title" name="meta_title" value="{{ old('meta_title') }}"
                                class="w-full px-4 py-2 theme-bg-secondary theme-border border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent theme-text-primary @error('meta_title') border-red-500 @enderror">
                            @error('meta_title')
                                <p class="mt-1 text-sm text-red-500">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Meta Keywords -->
                        <div>
                            <label for="meta_keywords" class="block text-sm font-medium theme-text-secondary mb-2">
                                Meta Keywords
                            </label>
                            <input type="text" id="meta_keywords" name="meta_keywords" value="{{ old('meta_keywords') }}"
                                placeholder="keyword1, keyword2, keyword3"
                                class="w-full px-4 py-2 theme-bg-secondary theme-border border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent theme-text-primary @error('meta_keywords') border-red-500 @enderror">
                            @error('meta_keywords')
                                <p class="mt-1 text-sm text-red-500">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Meta Description -->
                        <div class="lg:col-span-2">
                            <label for="meta_description" class="block text-sm font-medium theme-text-secondary mb-2">
                                Meta Description
                            </label>
                            <textarea id="meta_description" name="meta_description" rows="3"
                                class="w-full px-4 py-2 theme-bg-secondary theme-border border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent theme-text-primary @error('meta_description') border-red-500 @enderror">{{ old('meta_description') }}</textarea>
                            @error('meta_description')
                                <p class="mt-1 text-sm text-red-500">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- OG Image -->
                        <div>
                            <label for="og_image" class="block text-sm font-medium theme-text-secondary mb-2">
                                OG Image (Social Media)
                            </label>
                            <input type="file" id="og_image" name="og_image" accept="image/*"
                                class="w-full px-4 py-2 theme-bg-secondary theme-border border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent theme-text-primary @error('og_image') border-red-500 @enderror">
                            @error('og_image')
                                <p class="mt-1 text-sm text-red-500">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Canonical URL -->
                        <div>
                            <label for="canonical_url" class="block text-sm font-medium theme-text-secondary mb-2">
                                Canonical URL
                            </label>
                            <input type="url" id="canonical_url" name="canonical_url" value="{{ old('canonical_url') }}"
                                class="w-full px-4 py-2 theme-bg-secondary theme-border border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent theme-text-primary @error('canonical_url') border-red-500 @enderror">
                            @error('canonical_url')
                                <p class="mt-1 text-sm text-red-500">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>
                </div>

                <!-- Submit Button -->
                <div class="mt-8 flex justify-end gap-4">
                    <a href="{{ route('admin.produk.index') }}"
                        class="px-6 py-2 theme-bg-secondary theme-border border hover:bg-white/5 theme-text-primary rounded-lg transition-colors">
                        Batal
                    </a>
                    <button type="submit"
                        class="px-6 py-2 bg-gradient-primary hover:shadow-lg text-white rounded-lg transition-colors">
                        <i class="fas fa-save mr-2"></i>
                        Simpan Produk
                    </button>
                </div>
            </form>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Initialize TinyMCE
            tinymce.init({
                selector: '.tinymce-editor',
                height: 500,
                menubar: true,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'wordcount', 'paste'
                ],
                toolbar: 'undo redo | formatselect | bold italic underline strikethrough | ' +
                    'forecolor backcolor | alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | link image media | removeformat code fullscreen',
                paste_as_text: false,
                paste_retain_style_properties: 'color font-size font-weight font-style text-decoration',
                paste_word_valid_elements: 'b,strong,i,em,h1,h2,h3,h4,h5,h6,p,ul,ol,li,a[href],span[style],div[align]',
                paste_webkit_styles: 'color font-size font-weight font-style',
                paste_merge_formats: true,
                content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial; font-size: 16px; line-height: 1.6; color: #374151; } ' +
                    'p { margin: 0 0 1rem 0; } ' +
                    'h1 { font-size: 2.25rem; font-weight: 700; margin: 2rem 0 1.5rem; } ' +
                    'h2 { font-size: 1.875rem; font-weight: 700; margin: 1.75rem 0 1.25rem; } ' +
                    'h3 { font-size: 1.5rem; font-weight: 700; margin: 1.5rem 0 1rem; }',
                automatic_uploads: false,
                link_default_target: '_blank',
                link_title: false,
                verify_html: false,
                mobile: {
                    theme: 'mobile',
                    plugins: ['autosave', 'lists', 'autolink'],
                    toolbar: ['undo', 'bold', 'italic', 'styleselect']
                },
                setup: function (editor) {
                    editor.on('init', function () {
                        console.log('TinyMCE initialized for product description');
                    });
                }
            });
        });
    </script>

    <style>
        .tox-tinymce {
            border: 1px solid #4B5563 !important;
            /* gray-600 */
            border-radius: 0.5rem !important;
        }

        .tox-tinymce:focus-within {
            border-color: #3B82F6 !important;
            /* red-500 */
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
        }
    </style>
@endsection