@extends('layoutsadmin.app')

@section('title', 'Detail Pengguna')
@section('page-title', 'Detail Pengguna')

@section('content')
    <div class="bg-gradient-card backdrop-blur-sm theme-border border rounded-xl shadow-lg p-6 animate-fade-in-up">
        <div class="mb-6 flex justify-between items-center">
            <a href="{{ route('admin.users.index') }}" class="theme-text-secondary hover:text-red-500 transition duration-150 flex items-center">
                <i class="fas fa-arrow-left mr-2"></i>Kembali ke Daftar
            </a>
            <div class="flex space-x-2">
                <a href="{{ route('admin.users.edit', $user->id) }}" class="bg-gradient-primary text-white px-4 py-2 rounded-lg transition duration-200 hover:shadow-lg transform hover:scale-105">
                    <i class="fas fa-edit mr-2"></i>Edit
                </a>
                <form action="{{ route('admin.users.destroy', $user->id) }}" method="POST" class="inline-block" onsubmit="return confirm('Apakah Anda yakin ingin menghapus pengguna ini?');">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200 shadow-md transform hover:scale-105">
                        <i class="fas fa-trash mr-2"></i>Hapus
                    </button>
                </form>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Main Content -->
            <div class="lg:col-span-2">
                <div class="flex items-center mb-8">
                    @if($user->avatar)
                        <img src="{{ Storage::url($user->avatar) }}" alt="{{ $user->nama_lengkap }}" class="h-24 w-24 rounded-full object-cover mr-6 ring-4 ring-red-500/20">
                    @else
                        <div class="h-24 w-24 rounded-full theme-bg-secondary mr-6 flex items-center justify-center ring-4 ring-red-500/20">
                            <i class="fas fa-user text-4xl theme-text-secondary"></i>
                        </div>
                    @endif
                    <div>
                        <h1 class="text-2xl font-bold theme-text-primary">{{ $user->nama_lengkap }}</h1>
                        <p class="theme-text-secondary">{{ $user->email }}</p>
                        <div class="mt-2">
                            @if($user->role == 'admin')
                                <span class="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-purple-500/20 text-purple-300">
                                    Administrator
                                </span>
                            @elseif($user->role == 'penulis')
                                <span class="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-red-500/20 text-red-300">
                                    Penulis
                                </span>
                            @else
                                <span class="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full theme-bg-secondary theme-text-secondary">
                                    User
                                </span>
                            @endif
                        </div>
                    </div>
                </div>
                
                <div class="bg-white/5 rounded-xl theme-border border p-6">
                    <h3 class="font-bold text-lg theme-text-primary mb-4 border-b theme-border pb-2">Informasi Kontak</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p class="text-xs theme-text-secondary uppercase mb-1">Email</p>
                            <p class="font-medium theme-text-primary break-all">{{ $user->email }}</p>
                        </div>
                        <div>
                            <p class="text-xs theme-text-secondary uppercase mb-1">No. Telepon</p>
                            <p class="font-medium theme-text-primary">{{ $user->no_telepon ?? '-' }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="space-y-6">
                <div class="bg-white/5 p-6 rounded-xl theme-border border">
                    <h3 class="font-bold text-lg theme-text-primary mb-4">Statistik</h3>
                    
                    <div class="space-y-3">
                        <div>
                            <p class="text-xs theme-text-secondary uppercase">Bergabung Sejak</p>
                            <p class="font-medium theme-text-primary">{{ $user->created_at->format('d M Y') }}</p>
                        </div>
                        
                        <div>
                            <p class="text-xs theme-text-secondary uppercase">Terakhir Login</p>
                            <p class="font-medium theme-text-primary">{{ $user->last_login ? \Carbon\Carbon::parse($user->last_login)->diffForHumans() : 'Belum pernah login' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
