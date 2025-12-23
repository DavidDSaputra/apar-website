@extends('layoutsadmin.app')

@section('title', 'Edit Article')

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
                            class="theme-text-primary hover:text-red-500 transition-colors duration-200">
                            Articles
                        </a>
                        <span>/</span>
                        <span>Edit Article</span>
                    </div>
                    <h1 class="text-xl md:text-2xl font-bold theme-text-primary">Edit Article</h1>
                    <p class="theme-text-secondary text-sm md:text-base">Update your content</p>
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
            <div class="mb-6 bg-red-500/10 theme-border border border-red-500/20 rounded-lg p-4 animate-fade-in-up delay-75">
                <div class="flex items-start">
                    <svg class="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        <h4 class="text-sm font-medium text-red-400">Cloudinary Storage Active</h4>
                        <p class="text-xs text-red-300 mt-1">
                            Featured images will be automatically uploaded to Cloudinary for optimal performance and fast
                            delivery.
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 animate-fade-in-up delay-100">
                <!-- Main Form -->
                <div class="xl:col-span-2">
                    <form action="{{ route('admin.artikels.update', $artikel->id) }}" method="POST"
                        enctype="multipart/form-data" class="space-y-6">
                        @csrf
                        @method('PUT')

                        <!-- Title Card -->
                        <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-4 md:p-6">
                            <label for="judul" class="block text-sm font-medium theme-text-secondary mb-2">Title *</label>
                            <input type="text" name="judul" id="judul" value="{{ old('judul', $artikel->judul) }}" required
                                class="w-full px-3 md:px-4 py-2 md:py-3 text-lg md:text-2xl font-semibold theme-bg-secondary theme-border border theme-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                                <textarea name="konten" id="konten"
                                    class="tinymce-editor">{{ old('konten', $artikel->konten) }}</textarea>
                            </div>

                            @error('konten')
                                <p class="mt-2 text-sm text-red-500">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Submit Button -->
                        <div class="flex justify-end">
                            <button type="submit"
                                class="px-6 py-3 bg-gradient-primary hover:shadow-lg text-white font-semibold rounded-lg transition duration-200 transform hover:scale-105">
                                Update Article
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Sidebar -->
                <div class="xl:col-span-1 space-y-6">
                    <!-- Featured Image Card -->
                    <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-4 md:p-6">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-semibold theme-text-primary">Featured Image</h3>
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01">
                                    </path>
                                </svg>
                                Cloudinary
                            </span>
                        </div>

                        @if($artikel->gambar_featured)
                            <div class="mb-4">
                                <p class="text-sm font-medium theme-text-secondary mb-2">Current Image:</p>
                                <img src="{{ Storage::url($artikel->gambar_featured) }}" alt="Current Featured Image"
                                    class="w-full rounded-lg theme-border border shadow-sm">
                            </div>
                        @endif

                        <div class="mb-4" form="main-form">
                            <!-- Note: Linked to form via JS or placing inside form if structural change needed. But here we are separating layouts. Wait, input must be inside form. -->
                            <!-- 
                                                   Wait, in the original file, the sidebar components were INSIDE the <form> tag?
                                                   Let's check the original file structure.
                                                   Original: <form ... class="space-y-6"> ... <div class="bg-white ...">Image stuff</div> ... </form>
                                                   The form wrapped the entire "Left Column" but the "Featured Image Card" was seemingly part of the flow?
                                                   Actually, line 54: grid-cols-1 xl:grid-cols-3
                                                   Line 56: xl:col-span-2 -> Form starts at line 57 inside this column.
                                                   Line 95: Featured Image Card is INSIDE the form in the original file? 
                                                   Looking closer at the original:
                                                   Line 57: <form ...>
                                                   Line 63: Title Card
                                                   Line 74: Rich Text Editor
                                                   Line 95: Featured Image Card
                                                   Line 151: End section.
                                                   So the form wrapped everything in the col-span-2?
                                                   But wait, where is the submit button? It wasn't visible in the view_file snippet.
                                                   Ah, line 54 is `grid-cols-1 xl:grid-cols-3`.
                                                   The form starts inside `xl:col-span-2`.
                                                   The featured image card is inside the form.
                                                   But visually, usually the side bar is separate. 
                                                   In the original file, it seems the form ONLY occupied the col-span-2 and there was NO content in the other column? 
                                                   Line 54 starts the grid.
                                                   Line 56 starts col-span-2.
                                                   Line 57 starts form.
                                                   The form closes... wait, the closing tag wasn't shown? Or I missed it.
                                                   Actually, if the form wraps the image card, then the image card is in the main column.
                                                   Let's restructure this to be better if possible, OR stick to the original structure but move styling.

                                                   If I move the image input OUTSIDE the form, it won't submit.
                                                   So I should wrap the grid WITH the form, or have inputs inside the form.

                                                   Structure Plan:
                                                   <form>
                                                     <div class="grid">
                                                        <div class="col-span-2">Title, Editor</div>
                                                        <div class="col-span-1">Image, Submit</div>
                                                     </div>
                                                   </form>

                                                   This is standard practice.
                                                -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- Re-implementing the Form properly wrapping the grid -->
            <form action="{{ route('admin.artikels.update', $artikel->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 animate-fade-in-up delay-100">
                    <!-- Main Content Column -->
                    <div class="xl:col-span-2 space-y-6">
                        <!-- Title Card -->
                        <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-4 md:p-6">
                            <label for="judul" class="block text-sm font-medium theme-text-secondary mb-2">Title *</label>
                            <input type="text" name="judul" id="judul" value="{{ old('judul', $artikel->judul) }}" required
                                class="w-full px-3 md:px-4 py-2 md:py-3 text-lg md:text-2xl font-semibold theme-bg-secondary theme-border border theme-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                                <textarea name="konten" id="konten"
                                    class="tinymce-editor">{{ old('konten', $artikel->konten) }}</textarea>
                            </div>
                            @error('konten')
                                <p class="mt-2 text-sm text-red-500">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <!-- Sidebar Column -->
                    <div class="xl:col-span-1 space-y-6">
                        <!-- Submit Button Card -->
                        <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-4 md:p-6">
                            <h3 class="text-lg font-semibold theme-text-primary mb-4">Publish</h3>
                            <button type="submit"
                                class="w-full py-3 bg-gradient-primary hover:shadow-lg text-white font-semibold rounded-lg transition duration-200 transform hover:scale-105 mb-3">
                                Update Article
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

                            @if($artikel->gambar_featured)
                                <div class="mb-4">
                                    <p class="text-sm font-medium theme-text-secondary mb-2">Current:</p>
                                    <img src="{{ Storage::url($artikel->gambar_featured) }}" alt="Current"
                                        class="w-full rounded-lg theme-border border shadow-sm">
                                </div>
                            @endif

                            <div class="mb-4">
                                <label for="gambar_featured" class="block text-sm font-medium theme-text-secondary mb-2">Change
                                    Image</label>
                                <div
                                    class="border-2 border-dashed theme-border rounded-lg p-4 text-center hover:border-red-500 transition duration-150">
                                    <input type="file" name="gambar_featured" id="gambar_featured" accept="image/*"
                                        class="hidden" onchange="previewImage(event)">
                                    <label for="gambar_featured" class="cursor-pointer block">
                                        <div id="upload-placeholder">
                                            <i
                                                class="fas fa-cloud-upload-alt text-3xl theme-text-secondary opacity-50 mb-2"></i>
                                            <p class="text-xs theme-text-secondary opacity-70">Click to upload</p>
                                        </div>
                                        <img id="image-preview" class="hidden mx-auto max-h-40 rounded-lg">
                                    </label>
                                </div>
                                @error('gambar_featured')
                                    <p class="mt-1 text-sm text-red-500">{{ $message }}</p>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <script>
            function previewImage(event) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        document.getElementById('image-preview').src = e.target.result;
                        document.getElementById('image-preview').classList.remove('hidden');
                        document.getElementById('upload-placeholder').classList.add('hidden');
                    }
                    reader.readAsDataURL(file);
                }
            }
        </script>
    @endsection
@endsection