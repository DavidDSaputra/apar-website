import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'Cara Memilih APAR yang Tepat untuk Bisnis Anda',
        excerpt: 'Panduan lengkap memilih jenis APAR berdasarkan risiko kebakaran di tempat kerja Anda.',
        category: 'Panduan',
        date: '15 Des 2024',
        readTime: '5 menit',
    },
    {
        id: 2,
        title: 'Kapan Waktunya Refill atau Ganti APAR?',
        excerpt: 'Tanda-tanda APAR perlu diisi ulang atau diganti dan cara merawatnya dengan benar.',
        category: 'Perawatan',
        date: '10 Des 2024',
        readTime: '4 menit',
    },
    {
        id: 3,
        title: 'Regulasi K3 tentang APAR di Tempat Kerja',
        excerpt: 'Peraturan terbaru mengenai kewajiban APAR di tempat kerja dan sanksinya.',
        category: 'Regulasi',
        date: '5 Des 2024',
        readTime: '6 menit',
    },
];

const categoryColors = {
    Panduan: 'bg-blue-100 text-blue-700',
    Perawatan: 'bg-green-100 text-green-700',
    Regulasi: 'bg-purple-100 text-purple-700',
};

export default function BlogPreview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
                >
                    <div>
                        <span className="inline-block px-4 py-2 bg-red-50 text-red-600 font-medium rounded-full text-sm mb-4">
                            Artikel & Tips
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Edukasi Keselamatan Kebakaran
                        </h2>
                        <p className="text-lg text-gray-600 max-w-xl">
                            Artikel dan panduan untuk meningkatkan keselamatan di tempat kerja Anda
                        </p>
                    </div>
                    <motion.a
                        href="#"
                        className="hidden md:flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition-colors mt-4 md:mt-0"
                        whileHover={{ x: 5 }}
                    >
                        <span>Lihat Semua Artikel</span>
                        <ArrowRight size={18} />
                    </motion.a>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                        >
                            {/* Thumbnail placeholder */}
                            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 group-hover:from-red-50 group-hover:to-red-100 transition-all">
                                <span className="text-4xl">📝</span>
                            </div>

                            <div className="p-6">
                                {/* Category & Meta */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                                        <Clock size={12} />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                {/* Date & Read more */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                    <motion.a
                                        href="#"
                                        className="text-red-600 font-medium text-sm hover:text-red-700 flex items-center gap-1"
                                        whileHover={{ x: 3 }}
                                    >
                                        Baca
                                        <ArrowRight size={14} />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Mobile view all link */}
                <div className="mt-8 text-center md:hidden">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-red-600 font-medium"
                    >
                        <span>Lihat Semua Artikel</span>
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}
