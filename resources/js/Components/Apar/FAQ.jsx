import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        id: 1,
        question: 'Jenis APAR apa yang cocok untuk kebakaran listrik?',
        answer: 'Untuk kebakaran listrik/elektronik, kami merekomendasikan APAR CO2 atau APAR Clean Agent. Keduanya tidak meninggalkan residu dan aman untuk peralatan elektronik. APAR CO2 cocok untuk ruang server, panel listrik, dan laboratorium.',
    },
    {
        id: 2,
        question: 'Bagaimana cara merawat APAR agar tetap awet?',
        answer: 'Pastikan jarum pada pressure gauge selalu berada di area hijau. Simpan APAR di tempat yang kering, terhindar dari sinar matahari langsung, dan gunakan bracket yang sesuai untuk menggantung unit di ketinggian yang tepat.',
    },
    {
        id: 3,
        question: 'Apakah bisa kirim ke luar kota / luar pulau?',
        answer: 'Ya, kami melayani pengiriman ke seluruh Indonesia. Untuk area Jabodetabek pengiriman gratis (min. pembelian tertentu). Untuk luar Jawa, kami bekerja sama dengan ekspedisi terpercaya dengan biaya yang kompetitif.',
    },
    {
        id: 4,
        question: 'Apakah pembelian sudah termasuk bracket?',
        answer: 'Tentu! Setiap unit APAR yang kami jual sudah termasuk bracket standar untuk pemasangan di dinding, sehingga unit Anda siap untuk ditempatkan di area yang strategis.',
    },
    {
        id: 5,
        question: 'Berapa lama garansi produk APAR?',
        answer: 'Garansi standar adalah 1 tahun untuk Paket Basic dan Pro, serta 2 tahun untuk Paket Corporate. Garansi mencakup kerusakan tabung, valve, dan komponen lainnya yang bukan disebabkan oleh penggunaan tidak wajar.',
    },
    {
        id: 6,
        question: 'Apakah bisa proses dengan invoice dan PO?',
        answer: 'Ya, kami menerima pembayaran dengan sistem invoice dan Purchase Order (PO) untuk perusahaan. Dokumen yang kami sediakan lengkap untuk keperluan audit dan laporan keuangan perusahaan Anda.',
    },
];

export default function FAQ() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <section id="faq" className="py-20 lg:py-32 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-red-50 text-red-600 font-medium rounded-full text-sm mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Temukan jawaban untuk pertanyaan umum seputar produk APAR kami.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                        >
                            <button
                                onClick={() => toggleItem(faq.id)}
                                className="w-full p-6 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors"
                                aria-expanded={openItem === faq.id}
                            >
                                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <HelpCircle size={20} className="text-red-600" />
                                </div>
                                <span className="flex-1 font-medium text-gray-900">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openItem === faq.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"
                                >
                                    <ChevronDown size={18} className="text-gray-500" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openItem === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6">
                                            <div className="pl-14 pt-2 border-t border-gray-100">
                                                <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
