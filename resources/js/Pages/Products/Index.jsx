import ProductGrid from '@/Components/Apar/ProductGrid';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Index({ products }) {
    return (
        <GuestLayout>
            <div className="pt-24 pb-20">
                {/* Breadcrumbs */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-red-600 transition-colors flex items-center gap-1">
                            <Home size={14} /> Beranda
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-gray-900 font-medium">Katalog Produk</span>
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
                            Katalog Produk APAR
                        </h1>
                        <p className="mt-3 text-lg text-gray-600 max-w-2xl">
                            Temukan berbagai jenis alat pemadam api ringan berkualitas tinggi yang telah memenuhi standar keamanan nasional.
                        </p>
                    </motion.div>
                </div>

                {/* Main Content */}
                <div className="relative">
                    <ProductGrid dynamicProducts={products} />
                </div>
            </div>
        </GuestLayout>
    );
}
