import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, Flame, FileWarning, CheckCircle, Shield, Users, Wrench } from 'lucide-react';

const problems = [
    {
        icon: Flame,
        title: 'Risiko Kebakaran Tinggi',
        description: 'Indonesia mencatat ribuan kasus kebakaran setiap tahun dengan kerugian miliaran rupiah.',
    },
    {
        icon: FileWarning,
        title: 'Kewajiban Hukum APAR',
        description: 'Peraturan K3 mewajibkan setiap gedung dan tempat usaha memiliki APAR yang terawat.',
    },
    {
        icon: AlertTriangle,
        title: 'Inspeksi Berkala Wajib',
        description: 'APAR harus diperiksa dan di-refill secara berkala untuk memastikan fungsi optimal.',
    },
];

const solutions = [
    {
        icon: Shield,
        title: 'APAR Berkualitas SNI',
        description: 'Produk bersertifikasi yang telah teruji dan memenuhi standar keselamatan nasional.',
    },
    {
        icon: Wrench,
        title: 'Instalasi & Bracket',
        description: 'Tim profesional untuk pemasangan dan penempatan APAR sesuai standar.',
    },
    {
        icon: Users,
        title: 'Training Penggunaan',
        description: 'Pelatihan singkat cara penggunaan APAR yang benar untuk tim Anda.',
    },
];

export default function ProblemSolution() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="py-20 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-red-50 text-red-600 font-medium rounded-full text-sm mb-4">
                        Mengapa APAR Penting?
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Lindungi Bisnis Anda dari Risiko Kebakaran
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Kebakaran bisa terjadi kapan saja. Persiapan yang tepat dapat menyelamatkan nyawa dan aset berharga Anda.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Problems */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                    <AlertTriangle className="text-red-600" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Tantangan yang Dihadapi</h3>
                            </div>
                            <div className="space-y-6">
                                {problems.map((problem, index) => (
                                    <motion.div
                                        key={problem.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="flex gap-4 p-4 rounded-xl hover:bg-red-50/50 transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <problem.icon size={20} className="text-red-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">{problem.title}</h4>
                                            <p className="text-sm text-gray-600">{problem.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Solutions */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 shadow-xl text-white">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <CheckCircle className="text-white" size={24} />
                                </div>
                                <h3 className="text-xl font-bold">Solusi Kami</h3>
                            </div>
                            <div className="space-y-6">
                                {solutions.map((solution, index) => (
                                    <motion.div
                                        key={solution.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="flex gap-4 p-4 rounded-xl hover:bg-white/10 transition-colors"
                                    >
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <solution.icon size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">{solution.title}</h4>
                                            <p className="text-sm text-red-100">{solution.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
