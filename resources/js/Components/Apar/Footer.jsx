import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';

const productLinks = [
    { name: 'Dry Chemical Powder', href: '#produk' },
    { name: 'Carbon Dioxide CO₂', href: '#produk' },
    { name: 'Foam AFFF', href: '#produk' },
    { name: 'Clean Agent', href: '#produk' },
    { name: 'Wet Chemical', href: '#produk' },
    { name: 'Thermatic & Metronic', href: '#produk' },
];

export default function Footer({ products = [] }) {
    const { appUrl } = usePage().props;

    const quickLinks = [
        { name: 'Home', href: `${appUrl}`, isAnchor: false },
        { name: 'Products', href: `${appUrl}/produk`, isAnchor: false },
        { name: 'Testimoni', href: `${appUrl}/#testimoni`, isAnchor: true },
        { name: 'FAQ', href: `${appUrl}/#faq`, isAnchor: true },
        { name: 'Blog', href: `${appUrl}/blog`, isAnchor: false },
        { name: 'Contact', href: `${appUrl}/kontak`, isAnchor: false },
    ];
    const handleSmoothScroll = (e, item) => {
        if (!item.isAnchor) return;

        const anchor = item.href.split('#')[1];
        const target = document.getElementById(anchor);

        if (window.location.pathname === '/' && target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Use dynamic products if available, otherwise fallback to static ones
    const displayProducts = products.length > 0
        ? products.map(p => ({ name: p.nama_produk, href: '#produk' }))
        : productLinks;

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    <div>
                        <Link href={appUrl} className="flex items-center gap-2 mb-6 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                                <span className="text-white font-bold text-lg">J</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold group-hover:text-red-500 transition-colors">JOULWINN</span>
                                <span className="text-xs text-gray-500">APAR Bersertifikat</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            PT Joulwinn Gelvis Hotapea - Penyedia APAR berkualitas dengan sertifikasi SNI untuk perlindungan maksimal bisnis Anda.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Menu</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Produk SERVVO</h4>
                        <ul className="space-y-3">
                            {displayProducts.map((link, index) => (
                                <li key={`${link.name}-${index}`}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, { ...link, isAnchor: true })}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Kontak</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-red-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    BSD Ruko Boulevard, Jalan Raya Taman Tekhno Lt.2, Blok AA No. 7, Ciater, Kec. Serpong, Kota Tangerang Selatan, Banten 15323
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-red-500 flex-shrink-0" />
                                <a href="tel:+6281258887895" className="text-gray-400 hover:text-white transition-colors">
                                    +62 812-5888-7895
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-red-500 flex-shrink-0" />
                                <a href="mailto:joulwinnofficial@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                    joulwinnofficial@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock size={18} className="text-red-500 flex-shrink-0" />
                                <span className="text-gray-400">
                                    Sen - Sab: 08:00 - 17:00
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} PT Joulwinn Gelvis Hotapea. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span>Distributor Resmi APAR SERVVO</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <motion.a
                href="https://api.whatsapp.com/send?phone=6281258887895&text=Halo,%20saya%20ingin%20konsultasi%20tentang%20APAR"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: 'spring' }}
            >
                <MessageCircle size={28} />
            </motion.a>
        </footer>
    );
}
