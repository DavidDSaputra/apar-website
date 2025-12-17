<?php

use App\Http\Controllers\AparController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/apar', [AparController::class, 'index'])->name('apar.index');
