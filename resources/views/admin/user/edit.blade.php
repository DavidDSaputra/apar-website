@extends('layoutsadmin.app')

@section('title', 'Edit Pengguna')
@section('page-title', 'Edit Pengguna')

@section('content')
    <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-6 animate-fade-in-up">
        <div class="mb-6">
            <a href="{{ route('admin.users.index') }}"
                class="theme-text-secondary hover:text-blue-500 transition duration-150 flex items-center">
                <i class="fas fa-arrow-left mr-2"></i>Kembali ke Daftar
            </a>
        </div>

        <form action="{{ route('admin.users.update', $user->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Main Content -->
                <div class="lg:col-span-2 space-y-6">
                    <div class="bg-white/5 p-6 rounded-xl theme-border border">
                        <h3 class="font-bold text-lg theme-text-primary mb-4">Informasi Akun</h3>

                        <div class="mb-4">
                            <label for="nama_lengkap" class="block text-sm font-semibold theme-text-secondary mb-2">Nama
                                Lengkap</label>
                            <input type="text" name="nama_lengkap" id="nama_lengkap"
                                value="{{ old('nama_lengkap', $user->nama_lengkap) }}"
                                class="w-full px-4 py-2.5 rounded-lg theme-bg-secondary theme-border border theme-text-primary focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                required>
                            @error('nama_lengkap')
                                <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <div class="mb-4">
                            <label for="email" class="block text-sm font-semibold theme-text-secondary mb-2">Email</label>
                            <input type="email" name="email" id="email" value="{{ old('email', $user->email) }}"
                                class="w-full px-4 py-2.5 rounded-lg theme-bg-secondary theme-border border theme-text-primary focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                required>
                            @error('email')
                                <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <div class="mb-4">
                            <label for="no_telepon" class="block text-sm font-semibold theme-text-secondary mb-2">No.
                                Telepon</label>
                            <input type="text" name="no_telepon" id="no_telepon"
                                value="{{ old('no_telepon', $user->no_telepon) }}"
                                class="w-full px-4 py-2.5 rounded-lg theme-bg-secondary theme-border border theme-text-primary focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200">
                            @error('no_telepon')
                                <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <div class="bg-white/5 p-6 rounded-xl theme-border border">
                        <h3 class="font-bold text-lg theme-text-primary mb-4">Keamanan (Opsional)</h3>
                        <p class="text-xs theme-text-secondary opacity-70 mb-4">Isi hanya jika ingin mengubah password</p>

                        <div class="mb-4">
                            <label for="password" class="block text-sm font-semibold theme-text-secondary mb-2">Password
                                Baru</label>
                            <input type="password" name="password" id="password"
                                class="w-full px-4 py-2.5 rounded-lg theme-bg-secondary theme-border border theme-text-primary focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200">
                            @error('password')
                                <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <div class="mb-4">
                            <label for="password_confirmation"
                                class="block text-sm font-semibold theme-text-secondary mb-2">Konfirmasi Password</label>
                            <input type="password" name="password_confirmation" id="password_confirmation"
                                class="w-full px-4 py-2.5 rounded-lg theme-bg-secondary theme-border border theme-text-primary focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200">
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="space-y-6">
                    <div class="bg-white/5 p-6 rounded-xl theme-border border">
                        <h3 class="font-bold text-lg theme-text-primary mb-4">Role & Akses</h3>

                        <div class="mb-4">
                            <label for="role" class="block text-sm font-semibold theme-text-secondary mb-2">Role</label>
                            <select name="role" id="role"
                                class="w-full px-4 py-2.5 rounded-lg theme-bg-secondary theme-border border theme-text-primary focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                required>
                                <option value="">Pilih Role</option>
                                @foreach($roles as $value => $label)
                                    <option value="{{ $value }}" {{ old('role', $user->role) == $value ? 'selected' : '' }}>
                                        {{ $label }}
                                    </option>
                                @endforeach
                            </select>
                            @error('role')
                                <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <div class="bg-white/5 p-6 rounded-xl theme-border border">
                        <h3 class="font-bold text-lg theme-text-primary mb-4">Avatar</h3>

                        <div class="mb-4">
                            <label for="avatar" class="block text-sm font-semibold theme-text-secondary mb-2">Upload
                                Avatar</label>
                            @if($user->avatar)
                                <div class="mb-3">
                                    <img src="{{ Storage::url($user->avatar) }}" alt="Current Avatar"
                                        class="h-20 w-20 rounded-full object-cover ring-2 ring-blue-500/50">
                                </div>
                            @endif
                            <input type="file" name="avatar" id="avatar" accept="image/*"
                                class="w-full text-sm theme-text-secondary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer">
                            <p class="text-xs theme-text-secondary opacity-70 mt-1">Biarkan kosong jika tidak ingin mengubah
                                avatar</p>
                            @error('avatar')
                                <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                            @enderror
                        </div>
                    </div>

                    <button type="submit"
                        class="w-full bg-gradient-primary hover:shadow-lg text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105">
                        Update Pengguna
                    </button>
                </div>
            </div>
        </form>
    </div>
@endsection