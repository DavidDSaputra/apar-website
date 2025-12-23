import { motion } from 'framer-motion';
import { ChevronRight, Home, MessageCircle, ImageIcon, ExternalLink } from 'lucide-react';
import { Link, Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

import { useState } from 'react';

export default function Show({ product, relatedProducts = [] }) {
    const [activeImage, setActiveImage] = useState(product.gambar_utama);
    return (
        <GuestLayout>
            <Head title={`${product.nama_produk} - APAR Berkualitas`} />

            <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <div className="max-w-7xl mx-auto mb-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-red-600 transition-colors flex items-center gap-1">
                            <Home size={14} /> Beranda
                        </Link>
                        <ChevronRight size={14} />
                        <Link href="/produk" className="hover:text-red-600 transition-colors">
                            Produk
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-gray-900 font-medium">{product.nama_produk}</span>
                    </nav>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-24">
                        {/* Gallery Section */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div className="aspect-square bg-gray-50 rounded-[2.5rem] overflow-hidden shadow-inner flex items-center justify-center p-8">
                                {activeImage ? (
                                    <img
                                        src={`/storage/${activeImage}`}
                                        alt={product.nama_produk}
                                        className="max-w-full max-h-full object-contain transition-all duration-500"
                                    />
                                ) : (
                                    <ImageIcon size={100} className="text-gray-200" />
                                )}
                            </div>

                            {((product.gambar && product.gambar.length > 0) || product.gambar_utama) && (
                                <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                                    {/* Main Image Thumbnail */}
                                    <div
                                        onClick={() => setActiveImage(product.gambar_utama)}
                                        className={`aspect-square bg-gray-50 rounded-2xl p-2 border-2 flex items-center justify-center overflow-hidden transition-all cursor-pointer ${activeImage === product.gambar_utama ? 'border-red-600' : 'border-gray-100'}`}
                                    >
                                        <img
                                            src={`/storage/${product.gambar_utama}`}
                                            alt={product.nama_produk}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>

                                    {product.gambar.map((img, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setActiveImage(img.nama_file)}
                                            className={`aspect-square bg-gray-50 rounded-2xl p-2 border-2 flex items-center justify-center overflow-hidden transition-all cursor-pointer ${activeImage === img.nama_file ? 'border-red-600' : 'border-gray-100'}`}
                                        >
                                            <img
                                                src={`/storage/${img.nama_file}`}
                                                alt={img.alt_text}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 font-bold rounded-full text-sm mb-6 tracking-wide uppercase">
                                    Detail Produk
                                </span>
                                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                                    {product.nama_produk}
                                </h1>

                                <div className="prose prose-lg prose-red max-w-none mb-10">
                                    <div
                                        className="text-gray-600 leading-relaxed text-xl"
                                        dangerouslySetInnerHTML={{ __html: product.deskripsi_lengkap }}
                                    />
                                </div>

                                <div className="pt-10 border-t border-gray-100 space-y-4">
                                    <a
                                        href={`https://api.whatsapp.com/send?phone=6281258887895&text=Halo,%20saya%20ingin%20tanyakan%20tentang%20produk%20${encodeURIComponent(product.nama_produk)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-3xl transition-all flex items-center justify-center gap-4 shadow-xl shadow-red-200 text-xl hover:-translate-y-1 active:translate-y-0"
                                    >
                                        <MessageCircle size={28} fill="currentColor" />
                                        <span>Pesan & Konsultasi Sekarang</span>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Related Products Section */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-20 border-t border-gray-100 pt-20">
                            <div className="flex items-end justify-between mb-12">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900">Produk Terkait</h2>
                                    <div className="h-1.5 w-20 bg-red-600 rounded-full mt-4"></div>
                                </div>
                                <Link
                                    href="/produk"
                                    className="text-red-600 font-bold hover:translate-x-1 transition-transform flex items-center gap-2"
                                >
                                    Lihat Semua <ChevronRight size={20} />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {relatedProducts.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        whileHover={{ y: -5 }}
                                        className="bg-white rounded-[2rem] p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <Link href={`/produk/${item.slug}`}>
                                            <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-5">
                                                {item.gambar_utama ? (
                                                    <img
                                                        src={`/storage/${item.gambar_utama}`}
                                                        alt={item.nama_produk}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                        <ImageIcon size={48} strokeWidth={1} />
                                                    </div>
                                                )}
                                            </div>
                                            <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-1 mb-2">
                                                {item.nama_produk}
                                            </h3>
                                        </Link>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="text-sm text-gray-500 line-clamp-1 flex-1">
                                                Tersedia
                                            </div>
                                            <Link
                                                href={`/produk/${item.slug}`}
                                                className="p-2 bg-gray-50 text-gray-400 group-hover:bg-red-50 group-hover:text-red-600 rounded-xl transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </GuestLayout>
    );
}
