<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LeadController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'perusahaan' => 'nullable|string|max:255',
            'kota' => 'required|string|max:255',
            'kebutuhan' => 'required|string|max:255',
            'no_wa' => 'required|string|max:20',
        ]);

        try {
            $lead = Lead::create($validated);

            Log::info('New lead created', [
                'lead_id' => $lead->id,
                'nama' => $validated['nama'],
                'perusahaan' => $validated['perusahaan'],
                'kota' => $validated['kota'],
                'kebutuhan' => $validated['kebutuhan'],
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Terima kasih! Tim kami akan segera menghubungi Anda.',
                'data' => $lead,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Failed to create lead', ['error' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Terjadi kesalahan. Silakan coba lagi.',
            ], 500);
        }
    }
}
