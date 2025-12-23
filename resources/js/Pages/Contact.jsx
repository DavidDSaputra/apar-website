import Navbar from '@/Components/Apar/Navbar';
import Footer from '@/Components/Apar/Footer';
import ContactSection from '@/Components/Apar/ContactSection';
import { Head } from '@inertiajs/react';

export default function Contact() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Head title="Kontak & Lokasi - APAR Berkualitas" />
            <Navbar />

            <main className="pt-24 pb-20">
                {/* We use the existing ContactSection but styled as a full page */}
                <ContactSection isFullPage={true} />
            </main>

            <Footer />
        </div>
    );
}
