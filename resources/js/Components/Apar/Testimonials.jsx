import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Budi Santoso',
        role: 'HSE Officer',
        company: 'PT. Maju Bersama',
        image: null,
        rating: 5,
        text: 'Layanan sangat profesional dan responsif. APAR yang dikirim berkualitas tinggi dengan sertifikat lengkap. Tim instalasi juga sangat membantu dalam penempatan yang tepat.',
    },
    {
        id: 2,
        name: 'Siti Rahayu',
        role: 'Owner',
        company: 'Restoran Sedap Rasa',
        image: null,
        rating: 5,
        text: 'Awalnya bingung pilih jenis APAR untuk dapur restoran. Setelah konsultasi, tim memberikan rekomendasi yang tepat. Sekarang lebih tenang soal keamanan!',
    },
    {
        id: 3,
        name: 'Ahmad Wijaya',
        role: 'Admin Gedung',
        company: 'Graha Mandiri',
        image: null,
        rating: 5,
        text: 'Sudah 3 tahun langganan untuk kebutuhan APAR 5 lantai gedung. Pelayanan konsisten, harga kompetitif, dan selalu diingatkan jadwal refill. Highly recommended!',
    },
    {
        id: 4,
        name: 'Diana Kusuma',
        role: 'Procurement',
        company: 'CV. Karya Utama',
        image: null,
        rating: 5,
        text: 'Proses pengadaan sangat mudah, bisa invoice dan PO. Dokumen lengkap untuk audit K3. Produk sesuai spesifikasi yang dijanjikan.',
    },
    {
        id: 5,
        name: 'Rudi Hermawan',
        role: 'Factory Manager',
        company: 'PT. Industri Prima',
        image: null,
        rating: 5,
        text: 'Training penggunaan APAR untuk karyawan sangat bermanfaat. Tim trainer profesional dan materi mudah dipahami. Karyawan jadi lebih siap menghadapi situasi darurat.',
    },
    {
        id: 6,
        name: 'Lisa Permata',
        role: 'Event Organizer',
        company: 'Prima Event',
        image: null,
        rating: 5,
        text: 'Sewa APAR untuk event besar sangat praktis. Pengiriman tepat waktu dan kondisi APAR prima. Definitely akan pakai lagi untuk event berikutnya.',
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const itemsPerView = 3;
    const maxIndex = Math.ceil(testimonials.length / itemsPerView) - 1;

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, maxIndex]);

    const handlePrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    return (
        <section id="testimoni" className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-red-50 text-red-600 font-medium rounded-full text-sm mb-4">
                        Testimoni
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Apa Kata Pelanggan Kami
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Kepuasan pelanggan adalah prioritas utama. Simak pengalaman mereka bersama kami.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Navigation buttons */}
                    <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 -left-4 -right-4 z-10 pointer-events-none">
                        <motion.button
                            onClick={handlePrev}
                            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 hover:shadow-xl transition-all pointer-events-auto"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </motion.button>
                        <motion.button
                            onClick={handleNext}
                            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 hover:shadow-xl transition-all pointer-events-auto"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    </div>

                    {/* Testimonials carousel */}
                    <div
                        className="overflow-hidden"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <motion.div
                            className="flex gap-6"
                            animate={{ x: `-${currentIndex * 100}%` }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.1 }}
                                    className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] flex-shrink-0"
                                >
                                    <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100 hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                                                <p className="text-xs text-red-600">{testimonial.company}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>

                                        <div className="relative">
                                            <Quote size={24} className="absolute -top-2 -left-1 text-red-100" />
                                            <p className="text-gray-600 text-sm leading-relaxed pl-4">
                                                {testimonial.text}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(maxIndex + 1)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentIndex(i);
                                }}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
