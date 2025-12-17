import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MessageCircle, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const kebutuhanOptions = [
    'APAR Baru',
    'Refill / Isi Ulang',
    'Instalasi & Bracket',
    'Konsultasi / Audit K3',
    'Sewa APAR untuk Event',
    'Lainnya',
];

export default function LeadForm() {
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
        <section id="kontak" className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - CTA */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 bg-red-50 text-red-600 font-medium rounded-full text-sm mb-4">
                            Hubungi Kami
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Siap Lindungi Bisnis Anda?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Isi form untuk mendapat penawaran terbaik atau hubungi langsung via WhatsApp untuk konsultasi cepat dengan tim ahli kami.
                        </p>

                        <motion.a
                            href="https://api.whatsapp.com/send?phone=6281258887895&text=Halo,%20saya%20ingin%20konsultasi%20tentang%20APAR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-500/40 transition-all text-lg"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <MessageCircle size={24} />
                            <span>Konsultasi Gratis via WhatsApp</span>
                        </motion.a>

                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Jam Operasional</p>
                                <p className="font-semibold text-gray-900">Senin - Sabtu, 08:00 - 17:00</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Respon Time</p>
                                <p className="font-semibold text-gray-900">&lt; 30 menit di jam kerja</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Minta Penawaran</h3>

                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle size={32} className="text-green-600" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Terima Kasih!</h4>
                                    <p className="text-gray-600 mb-4">
                                        Tim kami akan segera menghubungi Anda via WhatsApp.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-red-600 font-medium hover:underline"
                                    >
                                        Kirim lagi
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nama Lengkap <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="nama"
                                            value={formData.nama}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.nama ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'
                                                } focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                            placeholder="Masukkan nama lengkap"
                                        />
                                        {errors.nama && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                <AlertCircle size={14} /> {errors.nama}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nama Perusahaan
                                        </label>
                                        <input
                                            type="text"
                                            name="perusahaan"
                                            value={formData.perusahaan}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                            placeholder="Opsional"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Kota <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="kota"
                                            value={formData.kota}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.kota ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'
                                                } focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                            placeholder="Kota domisili / pengiriman"
                                        />
                                        {errors.kota && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                <AlertCircle size={14} /> {errors.kota}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Kebutuhan <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="kebutuhan"
                                            value={formData.kebutuhan}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.kebutuhan ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'
                                                } focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                        >
                                            <option value="">Pilih kebutuhan</option>
                                            {kebutuhanOptions.map((opt) => (
                                                <option key={opt} value={opt}>
                                                    {opt}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.kebutuhan && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                <AlertCircle size={14} /> {errors.kebutuhan}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nomor WhatsApp <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="no_wa"
                                            value={formData.no_wa}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.no_wa ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'
                                                } focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all`}
                                            placeholder="08xxxxxxxxxx"
                                        />
                                        {errors.no_wa && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                <AlertCircle size={14} /> {errors.no_wa}
                                            </p>
                                        )}
                                    </div>

                                    {status === 'error' && (
                                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-2">
                                            <AlertCircle size={18} />
                                            Terjadi kesalahan. Silakan coba lagi.
                                        </div>
                                    )}

                                    <motion.button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                        whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                                        whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" />
                                                <span>Mengirim...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                <span>Kirim Permintaan</span>
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
