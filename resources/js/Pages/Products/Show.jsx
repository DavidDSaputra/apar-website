import { motion } from 'framer-motion';
import { ChevronRight, Home, MessageCircle, ImageIcon } from 'lucide-react';
import { Link, Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

import { useState } from 'react';

export default function Show({ product }) {
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
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
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
                                    <p className="text-center sm:text-left text-sm text-gray-400 italic">
                                        * Konsultasi gratis dengan tim ahli kami
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
