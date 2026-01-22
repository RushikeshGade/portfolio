import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Feel free to reach out for opportunities or collaborations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-3xl font-bold mb-8">Let's Talk</h3>
                        <div className="space-y-6">
                            <a href="mailto:rushigade0707@gmail.com" className="flex items-center gap-6 p-6 bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white shadow-lg">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Email Me</h4>
                                    <p className="text-gray-400 group-hover:text-primary transition-colors">rushigade0707@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+919307072042" className="flex items-center gap-6 p-6 bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-secondary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/5">
                                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Call Me</h4>
                                    <p className="text-gray-400 group-hover:text-secondary transition-colors">+91 9307072042</p>
                                    <p className="text-xs text-gray-500 mt-1">+91 9130094838</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 p-6 bg-surface/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/5">
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Location</h4>
                                    <p className="text-gray-400">Hadapsar, Pune</p>
                                    <p className="text-xs text-gray-500 mt-1">Maharastra, India 411028</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Simple Form (Visual Only) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-surface/30 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-2xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2 ml-1">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 resize-none"
                                    placeholder="Write your message here..."
                                />
                            </div>
                            <button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]">
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <footer className="mt-20 pt-8 border-t border-white/5 text-center px-4">
                <p className="text-gray-400">© 2026 Rushikesh Gade. All rights reserved.</p>
                <p className="mt-2 text-sm text-gray-600">Built with React, Tailwind CSS & Framer Motion</p>
            </footer>
        </section>
    );
};

export default Contact;
