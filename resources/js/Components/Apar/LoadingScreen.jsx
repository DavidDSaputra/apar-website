import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loading screen after content loads
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center"
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/30">
                            <span className="text-white font-bold text-3xl">J</span>
                        </div>
                    </motion.div>

                    {/* Brand name */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-center mb-8"
                    >
                        <h1 className="text-2xl font-bold text-gray-900">JOULWINN</h1>
                        <p className="text-gray-500 text-sm">APAR Bersertifikat</p>
                    </motion.div>

                    {/* Loading animation */}
                    <div className="flex items-center gap-1">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-3 h-3 bg-red-500 rounded-full"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                }}
                            />
                        ))}
                    </div>

                    {/* Loading text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 text-sm mt-6"
                    >
                        Memuat...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
