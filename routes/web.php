<?php

use App\Http\Controllers\AparController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\DashboardController;

Route::get('/', [AparController::class, 'index'])->name('home');

Route::get('/apar', [AparController::class, 'index'])->name('apar.index');

// Auth Routes
Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('login', [LoginController::class, 'login']);
Route::post('logout', [LoginController::class, 'logout'])->name('logout');

// Public Product Routes
Route::get('/produk', [App\Http\Controllers\PublicProdukController::class, 'index'])->name('produk.index');
Route::get('/produk/{slug}', [App\Http\Controllers\PublicProdukController::class, 'show'])->name('produk.show');

// Blog Routes
Route::get('/blog', [App\Http\Controllers\BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [App\Http\Controllers\BlogController::class, 'show'])->name('blog.show');

// Admin routes dengan middleware yang benar
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Resource Routes
    Route::resource('artikels', ArtikelController::class);
    Route::delete('produk/gambar/{id}', [ProdukController::class, 'deleteImage'])->name('produk.delete-image');
    Route::resource('produk', ProdukController::class);
    Route::resource('users', \App\Http\Controllers\UserController::class);
    Route::resource('testimoni', \App\Http\Controllers\TestimoniController::class);
    Route::get('activity-logs', [\App\Http\Controllers\Admin\ActivityLogController::class, 'index'])->name('activity-logs.index');
});