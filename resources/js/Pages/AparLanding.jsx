import Navbar from '@/Components/Apar/Navbar';
import Hero from '@/Components/Apar/Hero';
import TrustBar from '@/Components/Apar/TrustBar';
import ClientLogos from '@/Components/Apar/ClientLogos';
import ProblemSolution from '@/Components/Apar/ProblemSolution';
import ProductGrid from '@/Components/Apar/ProductGrid';
import ProductComparison from '@/Components/Apar/ProductComparison';
import AparCalculator from '@/Components/Apar/AparCalculator';
import ServicePackages from '@/Components/Apar/ServicePackages';
import Gallery from '@/Components/Apar/Gallery';
import VideoDemo from '@/Components/Apar/VideoDemo';
import Certification from '@/Components/Apar/Certification';
import HowItWorks from '@/Components/Apar/HowItWorks';
import Testimonials from '@/Components/Apar/Testimonials';
import BlogPreview from '@/Components/Apar/BlogPreview';
import FAQ from '@/Components/Apar/FAQ';
import LeadForm from '@/Components/Apar/LeadForm';
import Footer from '@/Components/Apar/Footer';
import LoadingScreen from '@/Components/Apar/LoadingScreen';
import PromoBanner from '@/Components/Apar/PromoBanner';

export default function AparLanding() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <LoadingScreen />
            <Navbar />
            <main>
                <Hero />
                <TrustBar />
                <ClientLogos />
                <ProblemSolution />
                <ProductGrid />
                <ProductComparison />
                <AparCalculator />
                <ServicePackages />
                <Gallery />
                <VideoDemo />
                <Certification />
                <HowItWorks />
                <Testimonials />
                <BlogPreview />
                <FAQ />
                <LeadForm />
            </main>
            <Footer />
            <PromoBanner />
        </div>
    );
}
