import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Truck, Award, Headphones, CheckCircle } from 'lucide-react';

const stats = [
    { value: 500, suffix: '+', label: 'Perusahaan' },
    { value: 10000, suffix: '+', label: 'Unit Terjual' },
    { value: 15, suffix: '+', label: 'Tahun Pengalaman' },
    { value: 24, suffix: '/7', label: 'Support' },
];

const badges = [
    { icon: Shield, text: 'Sertifikasi SNI', subtext: 'Standar Nasional Indonesia' },
    { icon: Award, text: 'Garansi Resmi', subtext: 'Hingga 1 Tahun' },
    { icon: Truck, text: 'Gratis Pengiriman', subtext: 'Area Jabodetabek' },
    { icon: Headphones, text: 'Konsultasi Gratis', subtext: 'Tim Ahli Berpengalaman' },
];

function Counter({ value, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    const formatNumber = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K';
        }
        return num.toString();
    };

    return (
        <span ref={ref}>
            {formatNumber(count)}{suffix}
        </span>
    );
}

export default function TrustBar() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    return (
        <section id="trust" className="py-16 lg:py-24 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats */}
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-gray-500 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                    className="text-center mb-12"
                >
                    <p className="text-lg text-gray-600">
                        Dipercaya oleh <span className="font-semibold text-gray-900">500+ perusahaan</span> di seluruh Indonesia
                    </p>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
                >
                    {badges.map((badge, index) => (
                        <motion.div
                            key={badge.text}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:border-red-100 transition-all group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center group-hover:from-red-100 group-hover:to-red-200 transition-colors">
                                    <badge.icon size={24} className="text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{badge.text}</h3>
                                    <p className="text-sm text-gray-500">{badge.subtext}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Client logos placeholder */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                    className="mt-16 pt-12 border-t border-gray-100"
                >
                    <p className="text-center text-sm text-gray-400 mb-8">DIPERCAYA OLEH PERUSAHAAN TERKEMUKA</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50">
                        {['Pertamina', 'PLN', 'Bank Mandiri', 'Telkom', 'Astra'].map((company) => (
                            <div
                                key={company}
                                className="px-6 py-3 bg-gray-100 rounded-lg text-gray-600 font-semibold text-sm"
                            >
                                {company}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
