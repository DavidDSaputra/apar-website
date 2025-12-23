@extends('layoutsadmin.app')

@section('title', 'Create Article')

@section('head')
@endsection

@section('content')
    <script src="https://cdn.tiny.cloud/1/pxtqyte6btxrd0039qdxzx1frknn13n8l8nbob563irb7q96/tinymce/8/tinymce.min.js"
        referrerpolicy="origin" crossorigin="anonymous"></script>
    <div class="container-fluid px-3 md:px-4">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 animate-fade-in-up">
            <div class="mb-4 md:mb-0">
                <div class="flex items-center space-x-2 text-sm theme-text-secondary mb-2">
                    <a href="{{ route('admin.artikels.index') }}"
                        class="theme-text-primary hover:text-blue-500 transition-colors duration-200">
                        Articles
                    </a>
                    <span>/</span>
                    <span>Create Article</span>
                </div>
                <h1 class="text-xl md:text-2xl font-bold theme-text-primary">Create New Article</h1>
                <p class="theme-text-secondary text-sm md:text-base">WordPress-style rich text editor</p>
            </div>
            <a href="{{ route('admin.artikels.index') }}"
                class="inline-flex items-center px-4 py-2 theme-bg-secondary theme-border border rounded-lg font-semibold text-xs theme-text-primary uppercase tracking-widest hover:bg-white/5 transition w-full md:w-auto justify-center mt-4 md:mt-0">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18">
                    </path>
                </svg>
                Back to List
            </a>
        </div>

        <!-- Storage Info Banner -->
        <div class="mb-6 bg-blue-500/10 theme-border border border-blue-500/20 rounded-lg p-4 animate-fade-in-up delay-75">
            <div class="flex items-start">
                <svg class="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                    <h4 class="text-sm font-medium text-blue-400">Cloudinary Storage Active</h4>
                    <p class="text-xs text-blue-300 mt-1">
                        Featured images will be automatically uploaded to Cloudinary for optimal performance and fast
                        delivery.
                        No manual upload needed - the system handles everything automatically.
                    </p>
                </div>
            </div>
        </div>

        <form action="{{ route('admin.artikels.store') }}" method="POST" enctype="multipart/form-data">
            @csrf

            <!-- Hidden Author Input (Auto-assigned) -->
            <input type="hidden" name="penulis_id" value="{{ auth()->id() }}">

            <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 animate-fade-in-up delay-100">
                <!-- Main Content -->
                <div class="xl:col-span-2 space-y-6">
                    <!-- Title Card -->
                    <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-4 md:p-6">
                        <label for="judul" class="block text-sm font-medium theme-text-secondary mb-2">Title *</label>
                        <input type="text" name="judul" id="judul" value="{{ old('judul') }}" required
                            class="w-full px-3 md:px-4 py-2 md:py-3 text-lg md:text-2xl font-semibold theme-bg-secondary theme-border border theme-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your article title here...">
                        @error('judul')
                            <p class="mt-2 text-sm text-red-500">{{ $message }}</p>
                        @enderror
                    </div>

                    <!-- Rich Text Editor Card -->
                    <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-4 md:p-6">
                        <label for="konten" class="block text-sm font-medium theme-text-secondary mb-2">
                            Content *
                            <span class="text-xs theme-text-secondary opacity-70 font-normal ml-2 hidden md:inline">
                                <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                                Paste from Word/Google Docs - formatting preserved!
                            </span>
                        </label>

                        <div class="theme-text-primary">
                            <textarea name="konten" id="konten" class="tinymce-editor">{{ old('konten') }}</textarea>
                        </div>

                        @error('konten')
                            <p class="mt-2 text-sm text-red-500">{{ $message }}</p>
                        @enderror
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="space-y-6 xl:col-span-1">
                    <!-- Submit Buttons Card -->
                    <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-4 md:p-6">
                        <h3 class="text-lg font-semibold theme-text-primary mb-4">Publish</h3>
                        <button type="submit"
                            class="w-full py-3 bg-gradient-primary hover:shadow-lg text-white font-semibold rounded-lg transition duration-200 transform hover:scale-105 mb-3 flex items-center justify-center">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                </path>
                            </svg>
                            Create Article
                        </button>
                        <a href="{{ route('admin.artikels.index') }}"
                            class="block w-full text-center py-3 theme-bg-secondary theme-border border hover:bg-white/5 theme-text-primary font-semibold rounded-lg transition duration-200">
                            Cancel
                        </a>
                    </div>

                    <!-- Featured Image Card -->
                    <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-4 md:p-6">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-semibold theme-text-primary">Featured Image</h3>
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                                Cloudinary
                            </span>
                        </div>

                        <div class="mb-4">
                            <label for="gambar_featured" class="block text-sm font-medium theme-text-secondary mb-2">Upload
                                Image</label>
                            <div
                                class="border-2 border-dashed theme-border rounded-lg p-4 text-center hover:border-blue-500 transition duration-150">
                                <input type="file" name="gambar_featured" id="gambar_featured" accept="image/*"
                                    class="hidden" onchange="previewImage(event)">
                                <label for="gambar_featured" class="cursor-pointer block">
                                    <div id="upload-placeholder">
                                        <i
                                            class="fas fa-cloud-upload-alt text-3xl theme-text-secondary opacity-50 mb-2"></i>
                                        <p class="text-xs theme-text-secondary opacity-70">Click to upload</p>
                                        <p class="text-[10px] theme-text-secondary opacity-50 mt-1">Max 5MB</p>
                                    </div>
                                    <img id="image-preview" class="hidden mx-auto max-h-40 rounded-lg">
                                </label>
                            </div>
                            @error('gambar_featured')
                                <p class="mt-1 text-sm text-red-500">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <!-- Publishing Options (SEO & Tags) -->
                    <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-4 md:p-6">
                        <h3 class="text-lg font-semibold theme-text-primary mb-4">Publishing Options</h3>

                        <!-- Tags -->
                        <div class="mb-4">
                            <label for="tags" class="block text-sm font-medium theme-text-secondary mb-2">Tags</label>
                            <input type="text" name="tags" id="tags" value="{{ old('tags') }}"
                                class="w-full px-3 py-2 theme-bg-secondary theme-border border theme-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="tag1, tag2, tag3">
                            <p class="mt-1 text-xs theme-text-secondary opacity-70">Separate with commas</p>
                        </div>

                        <!-- SEO Metadata -->
                        <div class="mb-4">
                            <label for="meta_title" class="block text-sm font-medium theme-text-secondary mb-2">Meta
                                Title</label>
                            <input type="text" name="meta_title" id="meta_title" value="{{ old('meta_title') }}"
                                class="w-full px-3 py-2 theme-bg-secondary theme-border border theme-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>

                        <div>
                            <label for="meta_description" class="block text-sm font-medium theme-text-secondary mb-2">Meta
                                Description</label>
                            <textarea name="meta_description" id="meta_description" rows="3"
                                class="w-full px-3 py-2 theme-bg-secondary theme-border border theme-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none">{{ old('meta_description') }}</textarea>
                        </div>
                    </div>

                    <!-- Auto-Generated Fields Notice -->
                    <div class="bg-green-500/10 theme-border border border-green-500/20 rounded-xl shadow-sm p-4 md:p-6">
                        <div class="flex items-center mb-3">
                            <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 class="text-lg font-semibold text-green-400">Auto-Generated</h3>
                        </div>
                        <ul class="space-y-2 text-sm text-green-300">
                            <li class="flex items-start">
                                <span class="font-bold mr-1">Slug:</span> Auto from title
                            </li>
                            <li class="flex items-start">
                                <span class="font-bold mr-1">Excerpt:</span> Auto from content (200 char)
                            </li>
                            <li class="flex items-start">
                                <span class="font-bold mr-1">Author:</span> {{ auth()->user()->name }}
                            </li>
                        </ul>
                    </div>

                    <!-- Editor Tips -->
                    <div class="bg-blue-500/10 theme-border border border-blue-500/20 rounded-xl shadow-sm p-4 md:p-6">
                        <div class="flex items-center mb-3">
                            <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 class="text-lg font-semibold text-blue-400">Editor Tips</h3>
                        </div>
                        <ul class="space-y-2 text-sm text-blue-300 list-disc list-inside">
                            <li>Copy-paste dari Word tetap rapi</li>
                            <li>Bold, italic, ukuran font ter-preserve</li>
                            <li>Gunakan toolbar untuk formatting</li>
                            <li>Insert gambar langsung di editor</li>
                        </ul>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Initialize TinyMCE (WordPress-like editor)
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

                // WordPress-like paste settings
                paste_as_text: false,
                paste_retain_style_properties: 'color font-size font-weight font-style text-decoration',
                paste_word_valid_elements: 'b,strong,i,em,h1,h2,h3,h4,h5,h6,p,ul,ol,li,a[href],span[style],div[align]',
                paste_webkit_styles: 'color font-size font-weight font-style',
                paste_merge_formats: true,

                // Content style - adapt to theme if possible, but keeping neutral for editor content
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
                        console.log('TinyMCE initialized');
                    });
                }
            });
        });

        function previewImage(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const preview = document.getElementById('image-preview');
                    const placeholder = document.getElementById('upload-placeholder');
                    preview.src = e.target.result;
                    preview.classList.remove('hidden');
                    placeholder.classList.add('hidden');
                };
                reader.readAsDataURL(file);
            }
        }
    </script>
@endsection