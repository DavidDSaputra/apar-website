import React from 'react';
import Hero from '@/Components/Apar/Hero';

import ProblemSolution from '@/Components/Apar/ProblemSolution';
import ProductGrid from '@/Components/Apar/ProductGrid';
import { Link, usePage } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import Testimonials from '@/Components/Apar/Testimonials';
import BlogPreview from '@/Components/Apar/BlogPreview';
import FAQ from '@/Components/Apar/FAQ';
import GuestLayout from '@/Layouts/GuestLayout';

export default function AparLanding({ products, testimonis, articles }) {
    const { appUrl } = usePage().props;

    return (
        <GuestLayout>
            <Hero />

            <ProblemSolution />

            {/* Featured Products Section */}
            <div className="bg-gray-50/50 py-24 relative overflow-hidden">
                <ProductGrid dynamicProducts={products} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
                    <Link
                        href={`${appUrl}/produk`}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-red-600 text-red-600 font-bold rounded-2xl hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg shadow-red-100 group"
                    >
                        <span>Lihat Semua Produk</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            <Testimonials testimonis={testimonis} />
            <BlogPreview articles={articles} />
            <FAQ />
        </GuestLayout>
    );
}
