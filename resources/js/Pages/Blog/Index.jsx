import { motion } from 'framer-motion';
import { ChevronRight, Home, Calendar, User, Eye, ArrowRight } from 'lucide-react';
import { Link, Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Index({ posts }) {
    return (
        <GuestLayout>
            <Head title="Blog & Artikel - APAR Bersertifikat" />

            <div className="pt-24 pb-20">
                {/* Breadcrumbs */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-red-600 transition-colors flex items-center gap-1">
                            <Home size={14} /> Beranda
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-gray-900 font-medium">Blog & Artikel</span>
                    </nav>
                </div>

                {/* Page Header */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="border-l-4 border-red-600 pl-6"
                    >
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                            Wawasan & Edukasi APAR
                        </h1>
                        <p className="mt-3 text-lg text-gray-600 max-w-2xl">
                            Temukan artikel terbaru seputar keamanan kebakaran, tips perawatan APAR, dan regulasi keselamatan kerja.
                        </p>
                    </motion.div>
                </div>

                {/* Articles Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {posts.data.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.data.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
                                >
                                    {/* Image Section */}
                                    <Link href={`/blog/${post.slug}`} className="aspect-[16/9] relative overflow-hidden bg-gray-100 block">
                                        {post.gambar_featured ? (
                                            <img
                                                src={`/storage/${post.gambar_featured}`}
                                                alt={post.judul}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                                                <Eye size={48} strokeWidth={1} />
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-red-600 text-xs font-bold rounded-full shadow-sm">
                                                Artikel
                                            </span>
                                        </div>
                                    </Link>

                                    {/* Content Section */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} /> {new Date(post.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <User size={14} /> {post.penulis?.name || 'Admin'}
                                            </span>
                                        </div>

                                        <Link href={`/blog/${post.slug}`}>
                                            <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                                                {post.judul}
                                            </h2>
                                        </Link>

                                        <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-1">
                                            {post.konten ? post.konten.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...' : ''}
                                        </p>

                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all"
                                        >
                                            Baca Selengkapnya <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Belum ada artikel</h3>
                            <p className="text-gray-500">Silakan tambahkan artikel melalui panel admin.</p>
                        </div>
                    )}

                    {/* Simple Pagination teaser */}
                    {posts.last_page > 1 && (
                        <div className="mt-16 flex justify-center">
                            {/* For now just a simple hint, could be full pagination component */}
                            <nav className="flex gap-2">
                                {[...Array(posts.last_page)].map((_, i) => (
                                    <Link
                                        key={i}
                                        href={`/blog?page=${i + 1}`}
                                        className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${posts.current_page === i + 1
                                            ? 'bg-red-600 text-white shadow-lg shadow-red-200'
                                            : 'bg-white text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {i + 1}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </GuestLayout>
    );
}
