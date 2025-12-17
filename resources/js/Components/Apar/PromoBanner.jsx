import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight, Clock } from 'lucide-react';

export default function PromoBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Set promo end date (7 days from now)
    const promoEndDate = new Date();
    promoEndDate.setDate(promoEndDate.getDate() + 7);

    useEffect(() => {
        // Show banner after 2 seconds
        const showTimer = setTimeout(() => {
            const dismissed = sessionStorage.getItem('promoDismissed');
            if (!dismissed) {
                setIsVisible(true);
            }
        }, 2000);

        // Countdown timer
        const countdownInterval = setInterval(() => {
            const now = new Date();
            const difference = promoEndDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => {
            clearTimeout(showTimer);
            clearInterval(countdownInterval);
        };
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        sessionStorage.setItem('promoDismissed', 'true');
    };

    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const target = document.querySelector('#kontak');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        handleDismiss();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25 }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl shadow-2xl z-50 overflow-hidden"
                >
                    {/* Close button */}
                    <button
                        onClick={handleDismiss}
                        className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                        <X size={16} />
                    </button>

                    <div className="p-5">
                        {/* Badge */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                <Gift size={18} className="text-white" />
                            </div>
                            <span className="text-white/90 text-sm font-medium">Promo Terbatas!</span>
                        </div>

                        {/* Headline */}
                        <h3 className="text-white text-xl font-bold mb-2">
                            Diskon 10% untuk Pembelian Pertama
                        </h3>
                        <p className="text-white/80 text-sm mb-4">
                            Dapatkan potongan harga untuk pembelian APAR pertama Anda. Promo berlaku selama:
                        </p>

                        {/* Countdown */}
                        <div className="flex gap-2 mb-4">
                            {[
                                { value: timeLeft.days, label: 'Hari' },
                                { value: timeLeft.hours, label: 'Jam' },
                                { value: timeLeft.minutes, label: 'Menit' },
                                { value: timeLeft.seconds, label: 'Detik' },
                            ].map((item) => (
                                <div key={item.label} className="flex-1 bg-white/20 rounded-lg py-2 text-center">
                                    <div className="text-white text-lg font-bold">{String(item.value).padStart(2, '0')}</div>
                                    <div className="text-white/70 text-xs">{item.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.button
                            onClick={handleSmoothScroll}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Klaim Promo Sekarang</span>
                            <ArrowRight size={18} />
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
