import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, ClipboardList, CreditCard, Truck, CheckCircle } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'Konsultasi',
        description: 'Hubungi tim kami via WhatsApp atau form untuk konsultasi kebutuhan APAR Anda',
        icon: MessageSquare,
    },
    {
        id: 2,
        title: 'Rekomendasi',
        description: 'Tim ahli merekomendasikan jenis dan jumlah APAR sesuai luas area dan risiko kebakaran',
        icon: ClipboardList,
    },
    {
        id: 3,
        title: 'Pembayaran',
        description: 'Pilih metode pembayaran yang nyaman: transfer, invoice, atau PO untuk perusahaan',
        icon: CreditCard,
    },
    {
        id: 4,
        title: 'Pengiriman Produk',
        description: 'Produk dikirim dengan aman menggunakan armada khusus ke lokasi Anda',
        icon: Truck,
    },
];

export default function HowItWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    return (
        <section className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-red-50 text-red-600 font-medium rounded-full text-sm mb-4">
                        Proses Mudah
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Cara Pemesanan
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hanya 4 langkah mudah untuk mendapatkan APAR berkualitas untuk kebutuhan perlindungan Anda.
                    </p>
                </motion.div>

                <div ref={containerRef} className="relative">
                    {/* Progress line */}
                    <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gray-200 rounded-full">
                        <motion.div
                            className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full origin-left"
                            style={{ scaleX: scrollYProgress }}
                        />
                    </div>

                    {/* Mobile progress line */}
                    <div className="lg:hidden absolute top-0 bottom-0 left-8 w-1 bg-gray-200 rounded-full">
                        <motion.div
                            className="w-full bg-gradient-to-b from-red-500 to-red-600 rounded-full origin-top"
                            style={{ scaleY: scrollYProgress }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative pl-16 lg:pl-0 lg:text-center"
                            >
                                {/* Step number - mobile */}
                                <div className="lg:hidden absolute left-0 top-0 w-16 flex justify-center">
                                    <div className="w-12 h-12 bg-white rounded-full border-4 border-red-500 flex items-center justify-center text-red-600 font-bold text-lg shadow-lg z-10">
                                        {step.id}
                                    </div>
                                </div>

                                {/* Step number - desktop */}
                                <div className="hidden lg:flex justify-center mb-8">
                                    <motion.div
                                        className="w-16 h-16 bg-white rounded-full border-4 border-red-500 flex items-center justify-center text-red-600 font-bold text-xl shadow-lg z-10"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {step.id}
                                    </motion.div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 lg:mt-4">
                                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mx-auto lg:mx-auto mb-4">
                                        <step.icon size={24} className="text-red-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
