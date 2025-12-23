import { motion } from 'framer-motion';

export default function MapBox() {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Lokasi Kantor Kami</h2>
                    <div className="h-1.5 w-20 bg-red-600 rounded-full mx-auto"></div>
                </motion.div>

                <div className="w-full lg:w-4/5 mx-auto aspect-[21/9] sm:aspect-[16/6] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl group transition-all duration-500 hover:shadow-red-900/5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5121880363977!2d106.68162930910695!3d-6.327610293635491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e584fc0182df%3A0x4df102fa610467ef!2sPT%20JOULWINN%20GELVIS%20HOTAPEA!5e0!3m2!1sid!2sid!4v1765877244832!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokasi PT Joulwinn Gelvis Hotapea"
                        className="grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                    />
                </div>
            </div>
        </section>
    );
}
