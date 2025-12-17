<?php

use App\Http\Controllers\Api\LeadController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/products', [ProductController::class, 'index']);
Route::post('/leads', [LeadController::class, 'store']);
