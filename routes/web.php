<?php

use App\Http\Controllers\AparController;
use Illuminate\Support\Facades\Route;

Route::get('/', [AparController::class, 'index'])->name('home');

Route::get('/apar', [AparController::class, 'index'])->name('apar.index');
