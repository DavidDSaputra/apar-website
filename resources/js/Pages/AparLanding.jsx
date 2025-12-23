import Navbar from '@/Components/Apar/Navbar';
import Hero from '@/Components/Apar/Hero';
import TrustBar from '@/Components/Apar/TrustBar';
import ProblemSolution from '@/Components/Apar/ProblemSolution';
import ProductGrid from '@/Components/Apar/ProductGrid';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import Testimonials from '@/Components/Apar/Testimonials';
import BlogPreview from '@/Components/Apar/BlogPreview';
import FAQ from '@/Components/Apar/FAQ';
import Footer from '@/Components/Apar/Footer';
import LoadingScreen from '@/Components/Apar/LoadingScreen';

export default function AparLanding({ products, footerProducts, testimonis }) {
    return (
        <div className="min-h-screen bg-white font-sans">
            <LoadingScreen />
            <Navbar />
            <main>
                <Hero />
                <TrustBar />
                <ProblemSolution />

                {/* Featured Products Section */}
                <div className="bg-gray-50/50 py-24 relative overflow-hidden">
                    <ProductGrid dynamicProducts={products} />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
                        <Link
                            href="/produk"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-red-600 text-red-600 font-bold rounded-2xl hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg shadow-red-100 group"
                        >
                            <span>Lihat Semua Produk</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <Testimonials testimonis={testimonis} />
                <BlogPreview />
                <FAQ />
            </main>
            <Footer products={footerProducts} />
        </div>
    );
}
