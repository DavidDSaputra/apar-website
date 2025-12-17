import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Placeholder company logos - replace with actual client logos
const clients = [
    { name: 'PT Astra International', initial: 'AI' },
    { name: 'Bank BCA', initial: 'BCA' },
    { name: 'Telkom Indonesia', initial: 'TI' },
    { name: 'Pertamina', initial: 'P' },
    { name: 'PLN', initial: 'PLN' },
    { name: 'Garuda Indonesia', initial: 'GI' },
    { name: 'Unilever', initial: 'U' },
    { name: 'Indofood', initial: 'IF' },
];

export default function ClientLogos() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section className="py-16 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                        Dipercaya oleh Perusahaan Terkemuka
                    </p>
                </motion.div>

                <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="flex items-center justify-center"
                        >
                            <div
                                className="w-16 h-16 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 font-bold text-xs hover:shadow-md hover:border-red-100 transition-all cursor-default"
                                title={client.name}
                            >
                                {client.initial}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm text-gray-400 mt-8"
                >
                    + 500 perusahaan lainnya di seluruh Indonesia
                </motion.p>
            </div>
        </section>
    );
}
