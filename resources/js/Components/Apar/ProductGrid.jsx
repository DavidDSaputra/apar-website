import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, ChevronRight, ImageIcon, ExternalLink } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function ProductGrid({ dynamicProducts = [] }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section id="produk" className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                        Katalog Produk Kami
                    </h2>
                    <div className="mt-4 max-w-2xl mx-auto h-1.5 bg-red-600 rounded-full"></div>
                    <p className="mt-6 text-xl text-gray-600">
                        Solusi perlindungan kebakaran berkualitas tinggi untuk setiap kebutuhan Anda.
                    </p>
                </motion.div>

                {dynamicProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {dynamicProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col group"
                            >
                                {/* Image Section */}
                                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                                    {product.gambar_utama ? (
                                        <img
                                            src={`/storage/${product.gambar_utama}`}
                                            alt={product.nama_produk}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                                            <ImageIcon size={48} strokeWidth={1.5} />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <Link
                                            href={`/produk/${product.slug}`}
                                            className="w-full py-3 bg-white text-gray-900 rounded-xl font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                        >
                                            Lihat Detail <ChevronRight size={18} />
                                        </Link>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex-1">
                                        <Link href={`/produk/${product.slug}`}>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                                                {product.nama_produk}
                                            </h3>
                                        </Link>
                                        <div
                                            className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 prose prose-sm max-w-none"
                                            dangerouslySetInnerHTML={{ __html: product.deskripsi_lengkap }}
                                        />
                                    </div>

                                    <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                        <a
                                            href={`https://api.whatsapp.com/send?phone=6281258887895&text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.nama_produk)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                                        >
                                            <MessageCircle size={18} fill="currentColor" />
                                            <span>Hubungi Kami</span>
                                        </a>
                                        <Link
                                            href={`/produk/${product.slug}`}
                                            className="p-3 border border-gray-200 hover:border-red-600 hover:text-red-600 rounded-xl transition-all"
                                            title="Detail Produk"
                                        >
                                            <ExternalLink size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ImageIcon size={32} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Belum ada produk</h3>
                        <p className="text-gray-500">Silakan tambahkan produk melalui panel admin.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
