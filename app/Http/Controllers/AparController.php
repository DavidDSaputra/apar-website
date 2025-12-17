<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AparController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('AparLanding');
    }
}
