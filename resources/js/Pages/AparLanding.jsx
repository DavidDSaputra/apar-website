import Navbar from '@/Components/Apar/Navbar';
import Hero from '@/Components/Apar/Hero';
import TrustBar from '@/Components/Apar/TrustBar';
import ProblemSolution from '@/Components/Apar/ProblemSolution';
import ProductGrid from '@/Components/Apar/ProductGrid';
import ServicePackages from '@/Components/Apar/ServicePackages';
import Certification from '@/Components/Apar/Certification';
import HowItWorks from '@/Components/Apar/HowItWorks';
import Testimonials from '@/Components/Apar/Testimonials';
import FAQ from '@/Components/Apar/FAQ';
import LeadForm from '@/Components/Apar/LeadForm';
import Footer from '@/Components/Apar/Footer';

export default function AparLanding() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />
            <main>
                <Hero />
                <TrustBar />
                <ProblemSolution />
                <ProductGrid />
                <ServicePackages />
                <Certification />
                <HowItWorks />
                <Testimonials />
                <FAQ />
                <LeadForm />
            </main>
            <Footer />
        </div>
    );
}
