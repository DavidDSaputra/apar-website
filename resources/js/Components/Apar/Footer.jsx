import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const quickLinks = [
    { name: 'Produk', href: '#produk' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Sertifikasi', href: '#sertifikasi' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#kontak' },
];

const productLinks = [
    { name: 'Dry Chemical Powder', href: '#produk' },
    { name: 'Carbon Dioxide CO₂', href: '#produk' },
    { name: 'Foam AFFF', href: '#produk' },
    { name: 'Clean Agent', href: '#produk' },
    { name: 'Wet Chemical', href: '#produk' },
    { name: 'Thermatic & Metronic', href: '#produk' },
];

export default function Footer() {
    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 text-white">
            {/* Map Section */}
            <div className="w-full h-64">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5121880363977!2d106.68162930910695!3d-6.327610293635491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e584fc0182df%3A0x4df102fa610467ef!2sPT%20JOULWINN%20GELVIS%20HOTAPEA!5e0!3m2!1sid!2sid!4v1765877244832!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi PT Joulwinn Gelvis Hotapea"
                />
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">J</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold">JOULWINN</span>
                                <span className="text-xs text-gray-500">APAR Bersertifikat</span>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            PT Joulwinn Gelvis Hotapea - Penyedia APAR berkualitas dengan sertifikasi SNI untuk perlindungan maksimal bisnis Anda.
                        </p>
                        <div className="flex gap-4">
                            <motion.a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Facebook size={18} />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Instagram size={18} />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Youtube size={18} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Menu</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Produk SERVVO</h4>
                        <ul className="space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
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
