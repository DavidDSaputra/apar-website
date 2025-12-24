import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Shield, FileCheck, Award, CheckCircle, ChevronDown, BadgeCheck } from 'lucide-react';

const certifications = [
    {
        id: 'sni',
        title: 'Standar Nasional Indonesia (SNI)',
        icon: Shield,
        description: 'Seluruh produk APAR kami telah lulus uji dan tersertifikasi SNI, menjamin kualitas dan keamanan sesuai standar nasional.',
        details: [
            'Uji tekanan tabung sesuai standar',
            'Media pemadam api teruji efektivitas',
            'Komponen safety valve tervalidasi',
            'Label dan marking sesuai ketentuan',
        ],
    },
    {
        id: 'quality',
        title: 'Kualitas Industri',
        icon: Award,
        description: 'Produk diproduksi dengan standar kualitas industri, menggunakan material berkualitas tinggi.',
        details: [
            'Material tabung berkualitas',
            'Komponen tahan lama',
            'Proses produksi terkontrol',
            'Quality control ketat',
        ],
    },
    {
        id: 'hydrotest',
        title: 'Hydrotest Certificate',
        icon: FileCheck,
        description: 'Setiap tabung APAR telah menjalani uji tekanan hidrostatik untuk memastikan keamanan penggunaan.',
        details: [
            'Uji tekanan 25 bar',
            'Sertifikat per-unit',
            'Masa berlaku 5 tahun',
            'Re-test tersedia',
        ],
    },
    {
        id: 'safety',
        title: 'Fitur Keamanan',
        icon: BadgeCheck,
        description: 'Dilengkapi dengan sistem pengaman modern untuk mencegah kebocoran dan aktivasi yang tidak disengaja.',
        details: [
            'Safety pin berkualitas',
            'Sistem nozzle anti-sumbat',
            'Pressure gauge presisi',
            'Seal anti-korosi',
        ],
    },
];

export default function Certification() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <section id="sertifikasi" className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-red-50 text-red-600 font-medium rounded-full text-sm mb-4">
                        Jaminan Kualitas
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Sertifikasi & Standar
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Kepercayaan Anda adalah prioritas kami. Seluruh produk dilengkapi dokumen resmi dan sertifikasi lengkap.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
                        >
                            <button
                                onClick={() => toggleItem(cert.id)}
                                className="w-full p-6 flex items-center gap-4 text-left hover:bg-gray-100 transition-colors"
                                aria-expanded={openItem === cert.id}
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                    <cert.icon size={24} className="text-red-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                                    <p className="text-sm text-gray-500 line-clamp-1">{cert.description}</p>
                                </div>
                                <motion.div
                                    animate={{ rotate: openItem === cert.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"
                                >
                                    <ChevronDown size={18} className="text-gray-500" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openItem === cert.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6">
                                            <div className="pt-4 border-t border-gray-200">
                                                <p className="text-gray-600 mb-4">{cert.description}</p>
                                                <ul className="grid sm:grid-cols-2 gap-3">
                                                    {cert.details.map((detail, i) => (
                                                        <li key={i} className="flex items-center gap-2">
                                                            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                                                            <span className="text-sm text-gray-700">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
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
