import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MessageCircle, CheckCircle, Loader2, AlertCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

const kebutuhanOptions = [
    'APAR Baru',
    'Refill / Isi Ulang',
    'Instalasi & Bracket',
    'Konsultasi / Audit K3',
    'Sewa APAR untuk Event',
    'Lainnya',
];

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [formData, setFormData] = useState({
        nama: '',
        perusahaan: '',
        kota: '',
        kebutuhan: '',
        no_wa: '',
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.nama.trim()) newErrors.nama = 'Nama wajib diisi';
        if (!formData.kota.trim()) newErrors.kota = 'Kota wajib diisi';
        if (!formData.kebutuhan) newErrors.kebutuhan = 'Pilih kebutuhan';
        if (!formData.no_wa.trim()) {
            newErrors.no_wa = 'Nomor WhatsApp wajib diisi';
        } else if (!/^[0-9+\-\s]{10,15}$/.test(formData.no_wa.replace(/\s/g, ''))) {
            newErrors.no_wa = 'Nomor WhatsApp tidak valid';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }

        setStatus('loading');
        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    nama: '',
                    perusahaan: '',
                    kota: '',
                    kebutuhan: '',
                    no_wa: '',
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="kontak" className="py-24 bg-white overflow-hidden" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Form & CTA Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
                    {/* Left - CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 bg-red-50 text-red-600 font-bold rounded-full text-sm mb-4 uppercase tracking-wider">
                            Hubungi Kami
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                            Siap Lindungi Bisnis Anda?
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Isi form untuk mendapat penawaran terbaik atau hubungi langsung via WhatsApp untuk konsultasi cepat dengan tim ahli kami.
                        </p>

                        <motion.a
                            href="https://api.whatsapp.com/send?phone=6281258887895&text=Halo,%20saya%20ingin%20konsultasi%20tentang%20APAR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-2xl shadow-2xl shadow-green-500/30 hover:shadow-green-500/40 transition-all text-lg group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
                            <span>Konsultasi Gratis via WhatsApp</span>
                        </motion.a>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 flex-shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Jam Operasional</p>
                                    <p className="font-bold text-gray-900">Senin - Sabtu<br />08:00 - 17:00</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 flex-shrink-0">
                                    <Send size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Respon Time</p>
                                    <p className="font-bold text-gray-900">&lt; 30 Menit<br />di jam kerja</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-2xl shadow-gray-200/50 relative">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                Minta Penawaran
                                <div className="h-1 w-10 bg-red-600 rounded-full"></div>
                            </h3>

                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle size={40} className="text-green-600" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Terkirim Berhasil!</h4>
                                    <p className="text-gray-600 mb-8">
                                        Data Anda telah masuk. Tim kami akan segera menghubungi Anda melalui WhatsApp.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                                    >
                                        Kirim Data Lain
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest pl-1">
                                                Nama Lengkap <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="nama"
                                                value={formData.nama}
                                                onChange={handleChange}
                                                className={`w-full px-5 py-4 rounded-2xl border ${errors.nama ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50'
                                                    } focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all`}
                                                placeholder="Nama lengkap"
                                            />
                                            {errors.nama && (
                                                <p className="text-red-500 text-xs mt-1 pl-1 flex items-center gap-1">
                                                    <AlertCircle size={12} /> {errors.nama}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest pl-1">
                                                Nama Perusahaan
                                            </label>
                                            <input
                                                type="text"
                                                name="perusahaan"
                                                value={formData.perusahaan}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                                                placeholder="Opsional"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest pl-1">
                                            Kota <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="kota"
                                            value={formData.kota}
                                            onChange={handleChange}
                                            className={`w-full px-5 py-4 rounded-2xl border ${errors.kota ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50'
                                                } focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all`}
                                            placeholder="Kota domisili / pengiriman"
                                        />
                                        {errors.kota && (
                                            <p className="text-red-500 text-xs mt-1 pl-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.kota}
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest pl-1">
                                                Kebutuhan <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                name="kebutuhan"
                                                value={formData.kebutuhan}
                                                onChange={handleChange}
                                                className={`w-full px-5 py-4 rounded-2xl border ${errors.kebutuhan ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50'
                                                    } focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all`}
                                            >
                                                <option value="">Pilih...</option>
                                                {kebutuhanOptions.map((opt) => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest pl-1">
                                                WhatsApp <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="no_wa"
                                                value={formData.no_wa}
                                                onChange={handleChange}
                                                className={`w-full px-5 py-4 rounded-2xl border ${errors.no_wa ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50'
                                                    } focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all`}
                                                placeholder="08xxxxxxxxxx"
                                            />
                                        </div>
                                    </div>

                                    {status === 'error' && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-sm flex items-center gap-2">
                                            <AlertCircle size={18} /> Terjadi kesalahan. Coba lagi.
                                        </div>
                                    )}

                                    <motion.button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-2xl shadow-xl shadow-red-500/30 hover:shadow-red-500/40 transition-all disabled:opacity-70 group"
                                        whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                                        whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                                    >
                                        {status === 'loading' ? (
                                            <Loader2 size={24} className="animate-spin" />
                                        ) : (
                                            <>
                                                <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                                <span>Kirim Permintaan Sekarang</span>
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Map Section Integrated */}
                <div className="border-t border-gray-100 pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Lokasi Kantor Kami</h3>
                        <div className="h-1.5 w-24 bg-red-600 rounded-full mx-auto"></div>
                    </motion.div>

                    <div className="w-full lg:w-4/5 mx-auto bg-gray-50 p-3 sm:p-5 rounded-[3rem] border border-gray-100 shadow-2xl group transition-all duration-500 hover:shadow-red-900/5">
                        <div className="aspect-[21/9] sm:aspect-[16/6] rounded-[2.5rem] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5121880363977!2d106.68162930910695!3d-6.327610293635491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e584fc0182df%3A0x4df102fa610467ef!2sPT%20JOULWINN%20GELVIS%20HOTAPEA!5e0!3m2!1sid!2sid!4v1765877244832!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi PT Joulwinn Gelvis Hotapea"
                                className="transition-all duration-[2000ms] group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
