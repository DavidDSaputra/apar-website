import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Building2, Factory, Warehouse, Store } from 'lucide-react';

// Placeholder gallery items - replace with actual project photos
const galleryItems = [
    {
        id: 1,
        title: 'APAR di Gedung Perkantoran',
        location: 'Jakarta Selatan',
        category: 'Office',
        icon: Building2,
    },
    {
        id: 2,
        title: 'Unit APAR di Pabrik Tekstil',
        location: 'Tangerang',
        category: 'Factory',
        icon: Factory,
    },
    {
        id: 3,
        title: 'APAR di Gudang Logistik',
        location: 'Bekasi',
        category: 'Warehouse',
        icon: Warehouse,
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
    {
        id: 4,
        title: 'Unit APAR di Restoran',
        location: 'BSD City',
        category: 'Restaurant',
        icon: Store,
    },
    {
        id: 5,
        title: 'APAR di Area Produksi',
        location: 'Cikarang',
        category: 'Factory',
        icon: Factory,
    },
    {
        id: 6,
        title: 'Unit APAR di Mall',
        location: 'Jakarta Barat',
        category: 'Commercial',
        icon: Building2,
    },
];

export default function Gallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [selectedImage, setSelectedImage] = useState(null);

    const handlePrev = () => {
        const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
        setSelectedImage(galleryItems[prevIndex].id);
    };

    const handleNext = () => {
        const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
        const nextIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
        setSelectedImage(galleryItems[nextIndex].id);
    };

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
                        Portfolio
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Penempatan Produk Kami
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Berbagai lokasi yang telah mempercayakan perlindungan aset mereka pada produk APAR kami.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedImage(item.id)}
                            className="group relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Placeholder with icon */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 group-hover:text-red-500 transition-colors">
                                <item.icon size={48} className="mb-2" />
                                <span className="text-sm font-medium">{item.category}</span>
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-white font-semibold">{item.title}</h3>
                                    <p className="text-white/70 text-sm">{item.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <button
                                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                                className="absolute left-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                <ChevronLeft size={28} />
                            </button>

                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                className="max-w-4xl w-full mx-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {(() => {
                                    const item = galleryItems.find(i => i.id === selectedImage);
                                    return (
                                        <div className="bg-gray-800 rounded-2xl overflow-hidden">
                                            <div className="aspect-video flex items-center justify-center text-gray-500">
                                                <item.icon size={120} />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                                                <p className="text-gray-400">{item.location}</p>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </motion.div>

                            <button
                                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                className="absolute right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
