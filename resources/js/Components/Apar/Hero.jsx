import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Truck, Award, Headphones, CheckCircle } from 'lucide-react';

export default function Hero() {
    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white via-white to-gray-50">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-red-100/40 to-red-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-gray-100/50 to-red-50/30 rounded-full blur-3xl" />
                <motion.div
                    className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full glow-red opacity-30"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.4, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6"
                        >
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-red-700">
                                Bersertifikat SNI & Terpercaya
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
                        >
                            APAR Bersertifikat{' '}
                            <span className="text-gradient-red">Perlindungan Maksimal</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg sm:text-xl text-gray-600 mb-6 max-w-xl leading-relaxed"
                        >
                            Kami menyediakan rangkaian Alat Pemadam Api Ringan (APAR) dengan kualitas industri,
                            dirancang untuk melindungi kantor, gedung, restoran, pabrik, kendaraan, hingga area berisiko tinggi.
                        </motion.p>

                        {/* Checklist */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-3 mb-8"
                        >
                            {[
                                'Bersertifikat SNI & terpercaya',
                                'Tersedia berbagai kapasitas & aplikasi',
                                'Cocok untuk penggunaan indoor maupun outdoor',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 mb-10"
                        >
                            <motion.a
                                href="#kontak"
                                onClick={(e) => handleSmoothScroll(e, '#kontak')}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full shadow-xl shadow-red-500/30 hover:shadow-red-500/40 transition-all text-lg"
                                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(220, 38, 38, 0.35)' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Minta Penawaran</span>
                                <ArrowRight size={20} />
                            </motion.a>
                            <motion.a
                                href="#produk"
                                onClick={(e) => handleSmoothScroll(e, '#produk')}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full border-2 border-gray-200 hover:border-red-200 hover:bg-red-50 transition-all text-lg"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Lihat Produk</span>
                                <ChevronDown size={20} />
                            </motion.a>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                        >
                            {[
                                { icon: Shield, text: 'SNI Certified' },
                                { icon: Truck, text: 'Siap Kirim' },
                                { icon: Award, text: 'Garansi Resmi' },
                                { icon: Headphones, text: 'Konsultasi Free' },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    className="flex items-center gap-2 text-gray-600"
                                >
                                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                                        <item.icon size={16} className="text-red-600" />
                                    </div>
                                    <span className="text-sm font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Main image placeholder */}
                            <motion.div
                                className="relative bg-gradient-to-br from-red-50 to-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-2xl"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="aspect-square max-w-md mx-auto flex items-center justify-center">
                                    {/* APAR Illustration Placeholder */}
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <motion.div
                                            className="w-32 h-64 bg-gradient-to-b from-red-600 to-red-700 rounded-t-full rounded-b-lg relative shadow-2xl"
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                        >
                                            {/* Tank body */}
                                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-48 bg-gradient-to-b from-red-500 to-red-700 rounded-t-3xl rounded-b-lg" />
                                            {/* Pressure gauge */}
                                            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center">
                                                <div className="w-1 h-3 bg-green-500 rounded origin-bottom rotate-45" />
                                            </div>
                                            {/* Nozzle */}
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-12 bg-gray-800 rounded-t-lg" />
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray-700 rounded-full" />
                                            {/* Handle */}
                                            <div className="absolute -top-4 left-full w-12 h-4 bg-gray-800 rounded-r-lg" />
                                            {/* Label */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                                                <span className="text-red-600 font-bold text-xs text-center">APAR<br />SNI</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <motion.div
                                    className="absolute -top-4 -right-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-100"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1, type: 'spring' }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <Shield size={16} className="text-green-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500">Certified</div>
                                            <div className="text-sm font-bold text-gray-900">SNI</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-4 -left-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-100"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2, type: 'spring' }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Truck size={16} className="text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500">Pengiriman</div>
                                            <div className="text-sm font-bold text-gray-900">Seluruh Indonesia</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <a
                    href="#trust"
                    onClick={(e) => handleSmoothScroll(e, '#trust')}
                    className="flex flex-col items-center gap-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                    <span className="text-sm font-medium">Scroll</span>
                    <ChevronDown size={20} />
                </a>
            </motion.div>
        </section>
    );
}
