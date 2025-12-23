import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials({ testimonis }) {
    // If no data from database, don't render the section
    if (!testimonis || testimonis.length === 0) return null;

    const activeTestimonials = testimonis.map(t => ({
        id: t.id,
        name: t.nama,
        role: t.pekerjaan,
        company: '', // Optional in DB, kept for layout consistency
        image: t.foto,
        rating: t.rating || 5,
        text: t.isi
    }));

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const maxIndex = activeTestimonials.length - 1;

    useEffect(() => {
        if (!isAutoPlaying || maxIndex <= 0) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, currentIndex, maxIndex]);

    const nextSlide = () => {
        if (maxIndex <= 0) return;
        setDirection(1);
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        if (maxIndex <= 0) return;
        setDirection(-1);
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9,
        }),
    };

    return (
        <section id="testimoni" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-5 py-2 bg-red-100 text-red-600 font-bold rounded-full text-xs uppercase tracking-widest mb-6 inline-block">
                            Testimonials
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Apa Kata Pelanggan Kami
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Kepercayaan Anda adalah prioritas kami. Simak bagaimana solusi proteksi kebakaran kami membantu menjaga aset berharga pelanggan.
                        </p>
                    </motion.div>
                </div>

                <div className="relative max-w-4xl mx-auto h-[550px] md:h-[480px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.3 },
                                scale: { duration: 0.4 }
                            }}
                            className="absolute inset-0"
                        >
                            <div className="group relative bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/40 h-full flex flex-col items-center justify-center text-center">
                                {/* Large Quote Icon Background */}
                                <Quote className="absolute top-8 left-8 text-red-50 w-20 h-20 md:w-24 md:h-24 -z-10 group-hover:scale-110 transition-transform duration-500" />

                                <div className="flex gap-1 mb-4 md:mb-6">
                                    {[...Array(activeTestimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>

                                <blockquote className="text-lg md:text-2xl font-semibold text-gray-800 italic leading-relaxed mb-6 md:mb-8">
                                    "{activeTestimonials[currentIndex].text}"
                                </blockquote>

                                <div className="flex flex-col items-center mt-auto">
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-xl shadow-red-200 mb-3 md:mb-4 transform group-hover:rotate-6 transition-transform overflow-hidden">
                                        {activeTestimonials[currentIndex].image ? (
                                            <img
                                                src={`/storage/${activeTestimonials[currentIndex].image}`}
                                                alt={activeTestimonials[currentIndex].name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            activeTestimonials[currentIndex].name.charAt(0)
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold text-gray-900">{activeTestimonials[currentIndex].name}</h4>
                                        <p className="text-[10px] md:text-sm font-medium text-gray-500 uppercase tracking-widest">
                                            {activeTestimonials[currentIndex].role} {activeTestimonials[currentIndex].company && `— `}<span className="text-red-600">{activeTestimonials[currentIndex].company}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 right-4 md:-right-16 flex justify-between pointer-events-none">
                        <motion.button
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevSlide}
                            className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center text-gray-800 hover:text-red-600 hover:bg-white transition-all pointer-events-auto border border-white/50"
                        >
                            <ChevronLeft size={28} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextSlide}
                            className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center text-gray-800 hover:text-red-600 hover:bg-white transition-all pointer-events-auto border border-white/50"
                        >
                            <ChevronRight size={28} />
                        </motion.button>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3 mt-16">
                    {activeTestimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                                setIsAutoPlaying(false);
                            }}
                            className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex
                                ? 'bg-red-600 w-12'
                                : 'bg-gray-300 w-2 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
