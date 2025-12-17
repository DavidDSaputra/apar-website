import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X, Info } from 'lucide-react';

const products = [
    {
        name: 'Dry Chemical Powder',
        classA: true,
        classB: true,
        classC: true,
        classK: false,
        residue: true,
        electronic: false,
        outdoor: true,
        capacity: '1-160 kg',
        price: '💰',
        bestFor: 'Kantor, Gudang, Pabrik',
    },
    {
        name: 'Carbon Dioxide (CO₂)',
        classA: false,
        classB: true,
        classC: true,
        classK: false,
        residue: false,
        electronic: true,
        outdoor: false,
        capacity: '2-45 kg',
        price: '💰💰',
        bestFor: 'Panel Listrik, Server Room',
    },
    {
        name: 'Foam AFFF',
        classA: true,
        classB: true,
        classC: false,
        classK: false,
        residue: true,
        electronic: false,
        outdoor: true,
        capacity: '6-90 L',
        price: '💰💰',
        bestFor: 'SPBU, Gudang BBM',
    },
    {
        name: 'Clean Agent SV-36',
        classA: true,
        classB: true,
        classC: true,
        classK: false,
        residue: false,
        electronic: true,
        outdoor: false,
        capacity: '2.4-100 kg',
        price: '💰💰💰',
        bestFor: 'Data Center, Laboratorium',
    },
    {
        name: 'Wet Chemical',
        classA: true,
        classB: false,
        classC: false,
        classK: true,
        residue: true,
        electronic: false,
        outdoor: false,
        capacity: '3-9 L',
        price: '💰💰',
        bestFor: 'Dapur Restoran',
    },
];

const CheckIcon = () => (
    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
        <Check size={14} className="text-green-600" />
    </div>
);

const XIcon = () => (
    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
        <X size={14} className="text-gray-400" />
    </div>
);

export default function ProductComparison() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [showInfo, setShowInfo] = useState(null);

    return (
        <section className="py-20 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 bg-red-50 text-red-600 font-medium rounded-full text-sm mb-4">
                        Perbandingan Produk
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Pilih APAR yang Tepat
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Bandingkan fitur dan keunggulan masing-masing jenis APAR untuk kebutuhan Anda
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="px-6 py-4 text-left font-semibold">Jenis APAR</th>
                                    <th className="px-4 py-4 text-center font-semibold">Kelas A</th>
                                    <th className="px-4 py-4 text-center font-semibold">Kelas B</th>
                                    <th className="px-4 py-4 text-center font-semibold">Kelas C</th>
                                    <th className="px-4 py-4 text-center font-semibold">Kelas K</th>
                                    <th className="px-4 py-4 text-center font-semibold">
                                        <div className="flex items-center justify-center gap-1">
                                            Tanpa Residu
                                            <button
                                                onMouseEnter={() => setShowInfo('residue')}
                                                onMouseLeave={() => setShowInfo(null)}
                                                className="relative"
                                            >
                                                <Info size={14} />
                                                {showInfo === 'residue' && (
                                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg w-48 z-10">
                                                        Tidak meninggalkan sisa setelah pemakaian
                                                    </div>
                                                )}
                                            </button>
                                        </div>
                                    </th>
                                    <th className="px-4 py-4 text-center font-semibold">Aman Elektronik</th>
                                    <th className="px-4 py-4 text-center font-semibold">Kapasitas</th>
                                    <th className="px-4 py-4 text-center font-semibold">Cocok Untuk</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <motion.tr
                                        key={product.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                                            }`}
                                    >
                                        <td className="px-6 py-4">
                                            <span className="font-semibold text-gray-900">{product.name}</span>
                                        </td>
                                        <td className="px-4 py-4 text-center">{product.classA ? <CheckIcon /> : <XIcon />}</td>
                                        <td className="px-4 py-4 text-center">{product.classB ? <CheckIcon /> : <XIcon />}</td>
                                        <td className="px-4 py-4 text-center">{product.classC ? <CheckIcon /> : <XIcon />}</td>
                                        <td className="px-4 py-4 text-center">{product.classK ? <CheckIcon /> : <XIcon />}</td>
                                        <td className="px-4 py-4 text-center">{!product.residue ? <CheckIcon /> : <XIcon />}</td>
                                        <td className="px-4 py-4 text-center">{product.electronic ? <CheckIcon /> : <XIcon />}</td>
                                        <td className="px-4 py-4 text-center text-sm text-gray-600">{product.capacity}</td>
                                        <td className="px-4 py-4 text-center text-sm text-gray-600">{product.bestFor}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-center"
                >
                    <p className="text-sm text-gray-500 mb-4">
                        <strong>Keterangan Kelas Kebakaran:</strong> A = Benda padat (kayu, kertas) | B = Cairan (bensin, minyak) | C = Listrik | K = Minyak goreng
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
