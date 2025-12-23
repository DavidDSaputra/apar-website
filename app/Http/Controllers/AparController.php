<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

use App\Models\Produk;

class AparController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('AparLanding');
    }
}
