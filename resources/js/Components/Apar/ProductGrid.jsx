import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    Flame, Zap, Droplets, Wind, Sparkles, ThermometerSun, MessageCircle, Car,
    Gauge, Cpu, Cable, Radio, Snowflake, Ship, Battery, ChevronDown, CheckCircle
} from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Dry Chemical Powder ABC',
        tagline: 'Paling umum & serbaguna',
        icon: Wind,
        description: 'Solusi serbaguna untuk kebakaran kelas A, B, dan C. Efektif untuk benda padat, cairan/gas mudah terbakar, dan peralatan listrik.',
        fireClass: ['A', 'B', 'C'],
        specs: ['Media: Dry Chemical Powder PC ABC 90%', 'Tekanan: Stored Pressure (N₂)'],
        variants: [
            { type: 'Portable', models: ['P 100 (1 kg)', 'P 200 (2 kg)', 'P 300 (3 kg)', 'P 450 (4,5 kg)', 'P 600 (6 kg)', 'P 900 (9 kg)', 'P 1200 (12 kg)'], use: 'kantor, sekolah, toko, rumah, gudang' },
            { type: 'Trolley', models: ['P 2500 (25 kg)', 'P 5000 (50 kg)', 'P 6800 (68 kg)', 'P 8000 (80 kg)'], use: 'pabrik, gudang besar, area industri' },
            { type: 'Big Wheel (APAB)', models: ['P 13600 (136 kg)', 'P 16000 (160 kg)'], use: 'SPBU, SPBE, pertambangan, industri berat' },
        ],
        color: 'from-red-500 to-orange-500',
        bgColor: 'bg-red-50',
    },
    {
        id: 2,
        name: 'Vehicle Extinguisher',
        tagline: 'Khusus mobil & kendaraan operasional',
        icon: Car,
        description: 'Perlindungan kebakaran khusus untuk sedan, MPV, SUV, pickup, hingga kendaraan industri. Ringkas, ringan, dan mudah dijangkau.',
        fireClass: ['A', 'B', 'C'],
        specs: ['Dilengkapi bracket / soft case', 'Media: Dry Chemical Powder'],
        variants: [
            { type: 'Portable', models: ['P 100 SA (1 kg)'], use: 'sedan, MPV, SUV, pickup, armada perusahaan' },
        ],
        color: 'from-gray-600 to-gray-800',
        bgColor: 'bg-gray-50',
    },
    {
        id: 3,
        name: 'Clean Agent SV-36',
        tagline: 'Aman untuk elektronik & ruang sensitif',
        icon: Sparkles,
        description: 'Pemadam api bersih yang tidak meninggalkan residu. Aman untuk perangkat elektronik, efektif untuk kebakaran kelas A, B, dan C.',
        fireClass: ['A', 'B', 'C'],
        specs: ['Tidak meninggalkan residu', 'Aman untuk perangkat elektronik'],
        variants: [
            { type: 'Portable', models: ['D 240', 'D 840', 'D 990', 'D 1430'], use: 'server room, panel listrik, laboratorium' },
            { type: 'Trolley', models: ['D 5000', 'D 10000'], use: 'data center, ruang arsip besar' },
        ],
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-50',
    },
    {
        id: 4,
        name: 'Fire Tubing',
        tagline: 'Pemadam otomatis berbasis selang panas',
        icon: Cable,
        description: 'Bekerja otomatis saat selang terkena panas api dan langsung melepaskan media pemadam. Tanpa operator.',
        fireClass: ['A', 'B', 'C'],
        specs: ['Aktivasi otomatis', 'Clean Agent SV-36'],
        variants: [
            { type: 'Fire Tubing', models: ['SFT 240', 'SFT 840', 'SFT 990', 'SFT 1430'], use: 'panel listrik, lemari mesin, ruang server' },
        ],
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-orange-50',
    },
    {
        id: 5,
        name: 'Automatic Fire Tubing',
        tagline: 'Fire tubing + alarm otomatis',
        icon: Radio,
        description: 'Fire Tubing dilengkapi pressure switch untuk aktivasi alarm secara otomatis saat media dilepas.',
        fireClass: ['A', 'B', 'C'],
        specs: ['Pressure switch terintegrasi', 'Aktivasi alarm otomatis'],
        variants: [
            { type: 'SAFT Series', models: ['SAFT 240', 'SAFT 840', 'SAFT 990', 'SAFT 1430'], use: 'panel listrik, lemari mesin, ruang server' },
        ],
        color: 'from-yellow-500 to-orange-500',
        bgColor: 'bg-yellow-50',
    },
    {
        id: 6,
        name: 'Thermatic',
        tagline: 'Aktif otomatis di suhu 57°C',
        icon: ThermometerSun,
        description: 'Sistem pemadam otomatis berbasis sensor panas. Aktif otomatis saat suhu mencapai 57°C.',
        fireClass: ['A', 'B', 'C'],
        specs: ['Sensor suhu 57°C', 'Clean Agent SV-36'],
        variants: [
            { type: 'Thermatic', models: ['TND 1100 SV-36'], use: 'plafon ruang server, lab, panel room' },
        ],
        color: 'from-rose-500 to-red-600',
        bgColor: 'bg-rose-50',
    },
    {
        id: 7,
        name: 'Metronic',
        tagline: 'Otomatis + Fire Alarm Panel',
        icon: Cpu,
        description: 'Terhubung langsung ke Fire Alarm Control Panel. Aktivasi thermal + elektrik, input 24V DC.',
        fireClass: ['A', 'B', 'C'],
        specs: ['Input 24V DC', 'Tanpa instalasi pipa'],
        variants: [
            { type: 'Metronic', models: ['SMT 1100 SV-36'], use: 'ruang server, BTS, laboratorium' },
        ],
        color: 'from-indigo-500 to-purple-600',
        bgColor: 'bg-indigo-50',
    },
    {
        id: 8,
        name: 'Carbon Dioxide (CO₂)',
        tagline: 'Tanpa residu, aman untuk listrik',
        icon: Snowflake,
        description: 'Pemadam api bersih untuk peralatan listrik dan cairan mudah terbakar. Non-konduktif.',
        fireClass: ['B', 'C'],
        specs: ['Tidak meninggalkan residu', 'Non-konduktif'],
        variants: [
            { type: 'Portable', models: ['C 200 (2 kg)', 'C 500 (5 kg)', 'C 680 (6,8 kg)', 'C 900 (9 kg)'], use: 'panel listrik, ruang mesin' },
            { type: 'Trolley', models: ['C 2300 (23 kg)', 'C 4500 (45 kg)'], use: 'industri, area besar' },
        ],
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50',
    },
    {
        id: 9,
        name: 'Foam AFFF 6%',
        tagline: 'Untuk cairan mudah terbakar',
        icon: Droplets,
        description: 'Membentuk lapisan film yang menutup permukaan cairan dan mencegah api menyala kembali.',
        fireClass: ['A', 'B'],
        specs: ['Foam AFFF 6%', 'Lapisan film pelindung'],
        variants: [
            { type: 'Portable', models: ['F 600 (6 L)', 'F 900 (9 L)'], use: 'SPBU, gudang BBM' },
            { type: 'Trolley', models: ['F 3000', 'F 5000', 'F 9000'], use: 'industri kimia, area besar' },
        ],
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-50',
    },
    {
        id: 10,
        name: 'Wet Chemical (Kelas K)',
        tagline: 'Khusus kebakaran dapur & minyak',
        icon: Flame,
        description: 'Solusi khusus untuk kebakaran minyak goreng (Kelas K). Efektif untuk dapur restoran dan dapur industri.',
        fireClass: ['A', 'K'],
        specs: ['Khusus minyak goreng', 'Kelas K'],
        variants: [
            { type: 'Portable', models: ['W 300 K (3 L)', 'W 600 K (6 L)', 'W 900 K (9 L)'], use: 'dapur restoran, dapur industri' },
        ],
        color: 'from-amber-500 to-yellow-500',
        bgColor: 'bg-amber-50',
    },
    {
        id: 11,
        name: 'SV-5 Solution',
        tagline: 'Multi risiko + Lithium-Ion Battery',
        icon: Battery,
        description: 'Teknologi pemadam modern untuk kebakaran kelas A, B, C, termasuk baterai Lithium-Ion. Cocok untuk EV dan gudang baterai.',
        fireClass: ['A', 'B', 'C', 'Li'],
        specs: ['Untuk baterai Lithium-Ion', 'Teknologi modern'],
        variants: [
            { type: 'Portable', models: ['B 60', 'B 100', 'B 300', 'B 600', 'B 900'], use: 'EV, gudang baterai' },
            { type: 'Trolley', models: ['B 3000', 'B 5000'], use: 'teknologi tinggi, area besar' },
        ],
        color: 'from-green-500 to-emerald-600',
        bgColor: 'bg-green-50',
    },
    {
        id: 12,
        name: 'Marine Series',
        tagline: 'APAR tahan korosi untuk laut & pantai',
        icon: Ship,
        description: 'Dilengkapi lapisan khusus anti karat, lulus Salt Spray Test. Untuk kapal, pelabuhan, dan lingkungan kadar garam tinggi.',
        fireClass: ['A', 'B', 'C'],
        specs: ['Lapisan anti karat', 'Lulus Salt Spray Test'],
        variants: [
            { type: 'All Variants', models: ['Tersedia di semua varian'], use: 'kapal, pelabuhan, offshore, pesisir' },
        ],
        color: 'from-sky-500 to-blue-600',
        bgColor: 'bg-sky-50',
    },
];

const fireClassColors = {
    A: 'bg-green-100 text-green-700',
    B: 'bg-yellow-100 text-yellow-700',
    C: 'bg-blue-100 text-blue-700',
    K: 'bg-orange-100 text-orange-700',
    Li: 'bg-purple-100 text-purple-700',
};

export default function ProductGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [expandedProduct, setExpandedProduct] = useState(null);

    const toggleProduct = (id) => {
        setExpandedProduct(expandedProduct === id ? null : id);
    };

    return (
        <section id="produk" className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-red-50 text-red-600 font-medium rounded-full text-sm mb-4">
                        Daftar Produk APAR
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Pilih APAR Sesuai Kebutuhan
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Seluruh produk diproduksi dengan standar SNI, menggunakan material berkualitas tinggi,
                        dan tersedia dalam berbagai jenis media pemadam sesuai kebutuhan kebakaran.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden group"
                        >
                            {/* Card Header */}
                            <div className={`${product.bgColor} p-5 relative overflow-hidden`}>
                                <div className="relative flex items-start gap-4">
                                    <motion.div
                                        className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                                        whileHover={{ rotate: 10 }}
                                    >
                                        <product.icon size={24} className="text-white" />
                                    </motion.div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{product.tagline}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5">
                                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                                {/* Fire Classes */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {product.fireClass.map((fc) => (
                                        <span
                                            key={fc}
                                            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${fireClassColors[fc]}`}
                                        >
                                            Kelas {fc}
                                        </span>
                                    ))}
                                </div>

                                {/* Specs */}
                                <div className="space-y-1 mb-4">
                                    {product.specs.map((spec, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                                            <span>{spec}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Expand/Collapse Button */}
                                <button
                                    onClick={() => toggleProduct(product.id)}
                                    className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
                                >
                                    <span>{expandedProduct === product.id ? 'Tutup Detail' : 'Lihat Varian'}</span>
                                    <motion.div
                                        animate={{ rotate: expandedProduct === product.id ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown size={18} />
                                    </motion.div>
                                </button>

                                {/* Expanded Variants */}
                                <AnimatePresence>
                                    {expandedProduct === product.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 border-t border-gray-100 space-y-4">
                                                {product.variants.map((variant, vi) => (
                                                    <div key={vi} className="bg-gray-50 rounded-xl p-4">
                                                        <p className="font-semibold text-gray-900 text-sm mb-2">{variant.type}</p>
                                                        <div className="flex flex-wrap gap-1.5 mb-2">
                                                            {variant.models.map((model, mi) => (
                                                                <span key={mi} className="px-2 py-0.5 bg-white border border-gray-200 rounded text-xs text-gray-700">
                                                                    {model}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <p className="text-xs text-gray-500">Cocok untuk: {variant.use}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* CTA */}
                                <motion.a
                                    href={`https://api.whatsapp.com/send?phone=6281258887895&text=Halo,%20saya%20ingin%20tanya%20tentang%20${encodeURIComponent(product.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 mt-4 bg-gray-900 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <MessageCircle size={18} />
                                    <span>Tanya Produk</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
