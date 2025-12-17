import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Check, Package, Wrench, Building2, Star, ArrowRight } from 'lucide-react';

const packages = [
    {
        id: 'basic',
        name: 'Paket Basic',
        description: 'Cocok untuk kebutuhan dasar perlindungan',
        price: 'Mulai',
        priceValue: 'Rp 350.000',
        priceUnit: '/ unit',
        icon: Package,
        color: 'gray',
        popular: false,
        features: [
            { text: 'APAR pilihan (1-12 kg)', included: true },
            { text: 'Sertifikat SNI', included: true },
            { text: 'Garansi 1 tahun', included: true },
            { text: 'Gratis pengiriman Jabodetabek', included: true },
            { text: 'Bracket & instalasi', included: false },
            { text: 'Training penggunaan', included: false },
            { text: 'Audit kebutuhan', included: false },
        ],
    },
    {
        id: 'pro',
        name: 'Paket Pro',
        description: 'Lengkap dengan instalasi profesional',
        price: 'Mulai',
        priceValue: 'Rp 500.000',
        priceUnit: '/ unit',
        icon: Wrench,
        color: 'red',
        popular: true,
        features: [
            { text: 'APAR pilihan (1-12 kg)', included: true },
            { text: 'Sertifikat SNI', included: true },
            { text: 'Garansi 1 tahun', included: true },
            { text: 'Gratis pengiriman seluruh Indonesia', included: true },
            { text: 'Bracket & instalasi', included: true },
            { text: 'Training penggunaan singkat', included: true },
            { text: 'Audit kebutuhan', included: false },
        ],
    },
    {
        id: 'corporate',
        name: 'Paket Corporate',
        description: 'Solusi lengkap untuk perusahaan',
        price: 'Custom',
        priceValue: 'Hubungi Kami',
        priceUnit: '',
        icon: Building2,
        color: 'gray',
        popular: false,
        features: [
            { text: 'APAR pilihan (semua jenis)', included: true },
            { text: 'Sertifikat SNI + Dokumen lengkap', included: true },
            { text: 'Garansi 2 tahun', included: true },
            { text: 'Gratis pengiriman seluruh Indonesia', included: true },
            { text: 'Bracket & instalasi', included: true },
            { text: 'Training penggunaan + sertifikat', included: true },
            { text: 'Audit kebutuhan + konsultasi K3', included: true },
        ],
    },
];

export default function ServicePackages() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section id="layanan" className="py-20 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-red-50 text-red-600 font-medium rounded-full text-sm mb-4">
                        Paket Layanan
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Pilih Paket Sesuai Budget
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Dari kebutuhan dasar hingga solusi lengkap untuk perusahaan, kami siap membantu.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`relative bg-white rounded-3xl overflow-hidden ${pkg.popular
                                    ? 'shadow-2xl shadow-red-500/20 border-2 border-red-500 scale-105 z-10'
                                    : 'shadow-xl border border-gray-100'
                                }`}
                        >
                            {/* Popular badge */}
                            {pkg.popular && (
                                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white text-center py-2 text-sm font-semibold">
                                    <Star size={14} className="inline mr-1" />
                                    Paling Dipilih
                                </div>
                            )}

                            <div className={`p-8 ${pkg.popular ? 'pt-14' : ''}`}>
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${pkg.popular
                                                ? 'bg-gradient-to-br from-red-600 to-red-500 text-white'
                                                : 'bg-gray-100 text-gray-600'
                                            }`}
                                    >
                                        <pkg.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                                        <p className="text-sm text-gray-500">{pkg.description}</p>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="mb-8">
                                    <p className="text-sm text-gray-500">{pkg.price}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-3xl font-extrabold ${pkg.popular ? 'text-red-600' : 'text-gray-900'}`}>
                                            {pkg.priceValue}
                                        </span>
                                        <span className="text-gray-500">{pkg.priceUnit}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div
                                                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${feature.included
                                                        ? pkg.popular
                                                            ? 'bg-red-100 text-red-600'
                                                            : 'bg-green-100 text-green-600'
                                                        : 'bg-gray-100 text-gray-400'
                                                    }`}
                                            >
                                                <Check size={12} />
                                            </div>
                                            <span
                                                className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'
                                                    }`}
                                            >
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <motion.a
                                    href="#kontak"
                                    className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold transition-all ${pkg.popular
                                            ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/40'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Pilih Paket</span>
                                    <ArrowRight size={18} />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
