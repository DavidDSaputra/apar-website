<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    public function index(): JsonResponse
    {
        $products = [
            [
                'id' => 1,
                'name' => 'APAR Powder',
                'type' => 'powder',
                'description' => 'APAR serbuk kimia kering untuk kebakaran kelas A, B, C',
                'capacities' => ['1 kg', '3 kg', '6 kg', '9 kg', '12 kg'],
                'fire_class' => ['A', 'B', 'C'],
                'recommended_for' => ['Kantor', 'Gudang', 'Pabrik', 'Rumah'],
                'price_range' => 'Rp 250.000 - Rp 1.500.000',
                'image' => '/images/apar-powder.png',
            ],
            [
                'id' => 2,
                'name' => 'APAR CO2',
                'type' => 'co2',
                'description' => 'APAR karbon dioksida untuk kebakaran listrik dan elektronik',
                'capacities' => ['2 kg', '3 kg', '5 kg', '7 kg'],
                'fire_class' => ['B', 'C', 'E'],
                'recommended_for' => ['Server Room', 'Laboratorium', 'Kantor', 'Elektronik'],
                'price_range' => 'Rp 500.000 - Rp 2.000.000',
                'image' => '/images/apar-co2.png',
            ],
            [
                'id' => 3,
                'name' => 'APAR Foam',
                'type' => 'foam',
                'description' => 'APAR busa untuk kebakaran cairan mudah terbakar',
                'capacities' => ['6 liter', '9 liter', '25 liter'],
                'fire_class' => ['A', 'B'],
                'recommended_for' => ['SPBU', 'Restoran', 'Dapur Industri', 'Bengkel'],
                'price_range' => 'Rp 400.000 - Rp 1.800.000',
                'image' => '/images/apar-foam.png',
            ],
            [
                'id' => 4,
                'name' => 'APAR Clean Agent',
                'type' => 'clean-agent',
                'description' => 'APAR ramah lingkungan tanpa residu untuk ruang sensitif',
                'capacities' => ['1 kg', '2 kg', '5 kg'],
                'fire_class' => ['A', 'B', 'C', 'E'],
                'recommended_for' => ['Data Center', 'Museum', 'Arsip', 'Ruang Server'],
                'price_range' => 'Rp 1.500.000 - Rp 5.000.000',
                'image' => '/images/apar-clean-agent.png',
            ],
            [
                'id' => 5,
                'name' => 'APAR Liquid Gas',
                'type' => 'liquid-gas',
                'description' => 'APAR gas cair untuk area dengan peralatan sensitif',
                'capacities' => ['2 kg', '4 kg', '6 kg'],
                'fire_class' => ['A', 'B', 'C'],
                'recommended_for' => ['Ruang Kontrol', 'Telekomunikasi', 'Panel Listrik'],
                'price_range' => 'Rp 800.000 - Rp 3.000.000',
                'image' => '/images/apar-liquid-gas.png',
            ],
            [
                'id' => 6,
                'name' => 'APAR Thermatic',
                'type' => 'thermatic',
                'description' => 'APAR otomatis dengan sensor panas untuk ruang tanpa pengawasan',
                'capacities' => ['3 kg', '5 kg', '8 kg'],
                'fire_class' => ['A', 'B', 'C'],
                'recommended_for' => ['Gudang', 'Garasi', 'Ruang Mesin', 'ATM'],
                'price_range' => 'Rp 1.200.000 - Rp 4.000.000',
                'image' => '/images/apar-thermatic.png',
            ],
        ];

        return response()->json([
            'success' => true,
            'data' => $products,
        ]);
    }
}
