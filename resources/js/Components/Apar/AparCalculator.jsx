import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calculator, Building2, Warehouse, Factory, Flame, MessageCircle } from 'lucide-react';

const areaTypes = [
    { id: 'office', name: 'Kantor / Perkantoran', icon: Building2, multiplier: 1, recommended: 'Powder ABC' },
    { id: 'warehouse', name: 'Gudang / Storage', icon: Warehouse, multiplier: 1.5, recommended: 'Powder ABC / Foam' },
    { id: 'factory', name: 'Pabrik / Industri', icon: Factory, multiplier: 2, recommended: 'Powder ABC / CO₂' },
    { id: 'kitchen', name: 'Dapur Komersial', icon: Flame, multiplier: 1.2, recommended: 'Wet Chemical' },
];

export default function AparCalculator() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [areaSize, setAreaSize] = useState('');
    const [areaType, setAreaType] = useState('office');
    const [floors, setFloors] = useState(1);
    const [result, setResult] = useState(null);

    const calculateApar = () => {
        if (!areaSize || isNaN(areaSize)) return;

        const area = parseFloat(areaSize);
        const type = areaTypes.find(t => t.id === areaType);
        const multiplier = type?.multiplier || 1;

        // Standard: 1 APAR per 200-250 sqm, adjusted by type and floors
        const baseUnits = Math.ceil((area * floors) / 200);
        const adjustedUnits = Math.ceil(baseUnits * multiplier);

        // Calculate capacity recommendation
        let capacityRec = '6 kg';
        if (area > 500) capacityRec = '9-12 kg';
        if (area > 1000) capacityRec = '12-25 kg';

        setResult({
            units: adjustedUnits,
            capacity: capacityRec,
            type: type?.recommended || 'Powder ABC',
            totalArea: area * floors,
        });
    };

    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 bg-red-50 text-red-600 font-medium rounded-full text-sm mb-4">
                        Kalkulator APAR
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Hitung Kebutuhan APAR Anda
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Estimasi jumlah APAR yang dibutuhkan berdasarkan luas area dan jenis bangunan
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Input Form */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Jenis Area
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {areaTypes.map((type) => (
                                            <button
                                                key={type.id}
                                                onClick={() => setAreaType(type.id)}
                                                className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all text-left ${areaType === type.id
                                                        ? 'border-red-500 bg-red-50 text-red-700'
                                                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                                                    }`}
                                            >
                                                <type.icon size={18} />
                                                <span className="text-sm font-medium">{type.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Luas Area (m²)
                                    </label>
                                    <input
                                        type="number"
                                        value={areaSize}
                                        onChange={(e) => setAreaSize(e.target.value)}
                                        placeholder="Contoh: 500"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Jumlah Lantai
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setFloors(Math.max(1, floors - 1))}
                                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                        >
                                            -
                                        </button>
                                        <span className="text-2xl font-bold text-gray-900 w-12 text-center">{floors}</span>
                                        <button
                                            onClick={() => setFloors(floors + 1)}
                                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <motion.button
                                    onClick={calculateApar}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl shadow-lg shadow-red-500/30"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Calculator size={20} />
                                    <span>Hitung Kebutuhan</span>
                                </motion.button>
                            </div>

                            {/* Result */}
                            <div className="flex items-center justify-center">
                                {result ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 w-full text-center"
                                    >
                                        <div className="text-6xl font-bold text-red-600 mb-2">{result.units}</div>
                                        <div className="text-lg text-gray-600 mb-6">Unit APAR Dibutuhkan</div>

                                        <div className="space-y-3 text-left bg-gray-50 rounded-xl p-4">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-500">Total Luas:</span>
                                                <span className="font-medium text-gray-900">{result.totalArea.toLocaleString()} m²</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-500">Kapasitas Saran:</span>
                                                <span className="font-medium text-gray-900">{result.capacity}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-500">Jenis APAR:</span>
                                                <span className="font-medium text-gray-900">{result.type}</span>
                                            </div>
                                        </div>

                                        <motion.a
                                            href={`https://api.whatsapp.com/send?phone=6281258887895&text=Halo,%20saya%20butuh%20${result.units}%20unit%20APAR%20${result.capacity}%20untuk%20area%20${result.totalArea}m²`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full mt-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <MessageCircle size={18} />
                                            <span>Minta Penawaran</span>
                                        </motion.a>
                                    </motion.div>
                                ) : (
                                    <div className="text-center text-gray-400 py-12">
                                        <Calculator size={64} className="mx-auto mb-4 opacity-50" />
                                        <p>Masukkan data area untuk melihat estimasi kebutuhan APAR</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <p className="text-xs text-gray-400 mt-6 text-center">
                            * Estimasi berdasarkan standar umum. Untuk perhitungan akurat sesuai regulasi, konsultasikan dengan tim kami.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
