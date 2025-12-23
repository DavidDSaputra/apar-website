import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link } from '@inertiajs/react';

const menuItems = [
    { name: 'Beranda', href: '/', isAnchor: false },
    { name: 'Produk', href: '/produk', isAnchor: false },
    { name: 'Layanan', href: '/#layanan', isAnchor: true },
    { name: 'Sertifikasi', href: '/#sertifikasi', isAnchor: true },
    { name: 'Testimoni', href: '/#testimoni', isAnchor: true },
    { name: 'FAQ', href: '/#faq', isAnchor: true },
    { name: 'Blog', href: '/blog', isAnchor: false },
    { name: 'Kontak', href: '/kontak', isAnchor: false },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e, item) => {
        if (!item.isAnchor) return;

        const anchor = item.href.split('#')[1];
        const target = document.getElementById(anchor);

        if (window.location.pathname === '/' && target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'py-3 glass shadow-lg border-b border-gray-100'
                : 'py-5 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group"
                    >
                        <motion.div
                            className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform"
                            whileHover={{ rotate: 5 }}
                        >
                            <span className="text-white font-bold text-lg">J</span>
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors">
                                JOULWINN
                            </span>
                            <span className="text-xs text-gray-500 -mt-0.5">APAR Bersertifikat</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleSmoothScroll(e, item)}
                                className="text-gray-600 hover:text-red-600 font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">

                        <motion.a
                            href="https://api.whatsapp.com/send?phone=6281258887895&text=Halo,%20saya%20ingin%20konsultasi%20tentang%20APAR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/40 transition-all"
                            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(220, 38, 38, 0.4)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <MessageCircle size={18} />
                            <span>Chat WhatsApp</span>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMobileMenuOpen ? 'auto' : 0,
                        opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                    className="lg:hidden overflow-hidden"
                >
                    <div className="py-4 space-y-3">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleSmoothScroll(e, item)}
                                className="block px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-3 border-t border-gray-100">
                            <a
                                href="https://api.whatsapp.com/send?phone=6281258887895&text=Halo,%20saya%20ingin%20konsultasi%20tentang%20APAR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 mx-4 px-5 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full shadow-lg"
                            >
                                <MessageCircle size={18} />
                                <span>Chat WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}
