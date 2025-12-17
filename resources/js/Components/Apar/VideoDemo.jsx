import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, X } from 'lucide-react';

export default function VideoDemo() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [isPlaying, setIsPlaying] = useState(false);

    // Replace with your actual YouTube video ID
    const videoId = 'dQw4w9WgXcQ'; // placeholder - replace with actual APAR demo video

    return (
        <section className="py-20 lg:py-32 bg-gray-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 font-medium rounded-full text-sm mb-4">
                        Video Demo
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Cara Penggunaan APAR
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Pelajari cara menggunakan APAR dengan benar untuk memaksimalkan perlindungan
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
                        {isPlaying ? (
                            <>
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                    title="APAR Demo Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                />
                                <button
                                    onClick={() => setIsPlaying(false)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
                                >
                                    <X size={20} />
                                </button>
                            </>
                        ) : (
                            <>
                                {/* Thumbnail placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🧯</div>
                                        <p className="text-gray-400">Tutorial Penggunaan APAR</p>
                                    </div>
                                </div>

                                {/* Play button */}
                                <motion.button
                                    onClick={() => setIsPlaying(true)}
                                    className="absolute inset-0 flex items-center justify-center group"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <motion.div
                                        className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/50 group-hover:bg-red-500 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Play size={32} className="text-white ml-1" fill="white" />
                                    </motion.div>
                                </motion.button>
                            </>
                        )}
                    </div>

                    {/* Video info cards */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        {[
                            { title: 'Teknik P.A.S.S', desc: 'Pull, Aim, Squeeze, Sweep' },
                            { title: 'Jarak Aman', desc: '2-3 meter dari api' },
                            { title: 'Waktu Semprot', desc: '8-15 detik tergantung kapasitas' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="bg-gray-800/50 backdrop-blur rounded-xl p-4 text-center border border-gray-700"
                            >
                                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
