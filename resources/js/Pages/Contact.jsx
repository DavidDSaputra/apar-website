import ContactSection from '@/Components/Apar/ContactSection';
import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Contact() {
    return (
        <GuestLayout>
            <Head title="Kontak & Lokasi - APAR Berkualitas" />

            <div className="pt-24 pb-20">
                {/* We use the existing ContactSection but styled as a full page */}
                <ContactSection isFullPage={true} />
            </div>
        </GuestLayout>
    );
}
