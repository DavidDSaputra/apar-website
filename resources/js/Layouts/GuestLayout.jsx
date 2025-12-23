import Navbar from '@/Components/Apar/Navbar';
import Footer from '@/Components/Apar/Footer';
import LoadingScreen from '@/Components/Apar/LoadingScreen';
import { usePage } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    const { footerProducts } = usePage().props;

    return (
        <div className="min-h-screen bg-white font-sans">
            <LoadingScreen />
            <Navbar />
            <main>
                {children}
            </main>
            <Footer products={footerProducts} />
        </div>
    );
}
