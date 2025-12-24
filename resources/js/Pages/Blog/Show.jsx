import { motion } from 'framer-motion';
import { ChevronRight, Home, Calendar, User, Eye, ArrowLeft, Share2 } from 'lucide-react';
import { Link, Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Show({ post, related }) {
    const formattedDate = new Date(post.created_at).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <GuestLayout>
            <Head>
                <title>{post.meta_title || post.judul}</title>
                <meta name="description" content={post.meta_description} />
                <meta name="keywords" content={post.meta_keywords} />
            </Head>

            <div className="pt-24 pb-20">
                {/* Breadcrumbs */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-red-600 transition-colors flex items-center gap-1">
                            <Home size={14} /> Beranda
                        </Link>
                        <ChevronRight size={14} />
                        <Link href="/blog" className="hover:text-red-600 transition-colors">
                            Blog
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-gray-900 font-medium line-clamp-1">{post.judul}</span>
                    </nav>
                </div>

                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
                                Artikel Edukasi
                            </span>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-[1.15]">
                                {post.judul}
                            </h1>

                            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm border-y border-gray-100 py-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                                        <User size={16} />
                                    </div>
                                    <span className="font-semibold text-gray-700">{post.penulis?.name || 'Admin'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-gray-400" />
                                    <span>{formattedDate}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Eye size={18} className="text-gray-400" />
                                    <span>{post.views} Dilihat</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Featured Image */}
                    {post.gambar_featured && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200"
                        >
                            <img
                                src={`/storage/${post.gambar_featured}`}
                                alt={post.judul}
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </motion.div>
                    )}

                    {/* Content */}
                    <div className="prose prose-lg prose-red max-w-none mb-20 bg-white">
                        <div
                            className="text-gray-700 leading-relaxed text-lg lg:text-xl space-y-6"
                            dangerouslySetInnerHTML={{ __html: post.konten }}
                        />
                    </div>

                    {/* Footer / Share */}
                    <div className="border-t border-gray-100 pt-10 mb-20 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <Link
                            href="/blog"
                            className="flex items-center gap-2 text-gray-600 hover:text-red-600 font-bold transition-colors"
                        >
                            <ArrowLeft size={18} /> Kembali ke Blog
                        </Link>

                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-400 font-medium">Bagikan:</span>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all">
                                    <Share2 size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Posts */}
                {related.length > 0 && (
                    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-end justify-between mb-12">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900">Artikel Terkait</h2>
                                    <div className="h-1.5 w-20 bg-red-600 rounded-full mt-4"></div>
                                </div>
                                <Link href="/blog" className="text-red-600 font-bold hover:underline mb-1">
                                    Lihat Semua
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {related.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/blog/${item.slug}`}
                                        className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 overflow-hidden"
                                    >
                                        <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-gray-100">
                                            {item.gambar_featured ? (
                                                <img
                                                    src={`/storage/${item.gambar_featured}`}
                                                    alt={item.judul}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                    <Calendar size={40} strokeWidth={1} />
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                                            {item.judul}
                                        </h3>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </GuestLayout>
    );
}
