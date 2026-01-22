import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, MapPin, Calendar, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-16 items-start"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
                        </h2>
                        <div className="bg-surface/30 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-xl md:mr-8">
                            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                                To seeking a responsible position in an organisation, which gives me a
                                chance to improve knowledge, enhance my skills and <span className="text-primary font-semibold">enable me to strive</span> towards the overall development of the organisation.
                            </p>
                            <p className="text-gray-400 mb-8 font-light">
                                I am a disciplined and self-motivated Computer Engineer with a strong work ethic.
                                I excel at decision-making under pressure and have a knack for crisis and risk management.
                            </p>

                            <div className="grid grid-cols-1 gap-4 mb-8">
                                <div className="flex items-center gap-4 text-gray-300 bg-black/20 p-3 rounded-xl border border-white/5">
                                    <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <span>Pune, India (411028)</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300 bg-black/20 p-3 rounded-xl border border-white/5">
                                    <div className="p-2 bg-secondary/20 rounded-lg text-secondary">
                                        <Calendar size={20} />
                                    </div>
                                    <span>Available immediately</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-white">
                                <span className="text-primary">Personal</span> Information
                            </h3>
                            <div className="space-y-3 bg-black/20 p-6 rounded-2xl border border-white/5">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-400">Date of Birth</span>
                                    <span className="text-gray-200">06-04-2000</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-400">Nationality</span>
                                    <span className="text-gray-200">Indian</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-400">Languages</span>
                                    <span className="text-gray-200 text-right">English, Hindi, Marathi</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-400">Marital Status</span>
                                    <span className="text-gray-200">Single</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Father's Name</span>
                                    <span className="text-gray-200">Hanumant Gade</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl rounded-full -z-10" />

                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="p-2 bg-white/10 rounded-lg"><BookOpen className="text-white" size={24} /></span>
                                Education Journey
                            </h3>

                            <div className="space-y-8 relative pl-8 border-l-2 border-white/10">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] top-0 p-2 bg-background rounded-full border-2 border-primary">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                    <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                                        <span className="text-sm text-primary font-bold tracking-wider">BACHELOR OF ENGINEERING</span>
                                        <h4 className="text-xl font-bold text-white mt-1 mb-2">Computer Engineering</h4>
                                        <p className="text-gray-400 text-sm mb-4">SKN Sinhgad Institute Tech & Sci</p>
                                        <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 w-fit px-3 py-1 rounded-full">
                                            <CheckCircle size={14} className="text-green-400" />
                                            <span>72.24% Score</span>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] top-0 p-2 bg-background rounded-full border-2 border-secondary">
                                        <div className="w-2 h-2 bg-secondary rounded-full" />
                                    </div>
                                    <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 hover:border-secondary/30 transition-colors">
                                        <span className="text-sm text-secondary font-bold tracking-wider">HIGHER SECONDARY</span>
                                        <h4 className="text-xl font-bold text-white mt-1 mb-2">12th Standard (HSC)</h4>
                                        <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 w-fit px-3 py-1 rounded-full">
                                            <CheckCircle size={14} className="text-green-400" />
                                            <span>56.75% Score</span>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] top-0 p-2 bg-background rounded-full border-2 border-gray-500">
                                        <div className="w-2 h-2 bg-gray-500 rounded-full" />
                                    </div>
                                    <div className="bg-surface/50 p-6 rounded-2xl border border-white/5 hover:border-gray-500/30 transition-colors">
                                        <span className="text-sm text-gray-400 font-bold tracking-wider">SECONDARY SCHOOL</span>
                                        <h4 className="text-xl font-bold text-white mt-1 mb-2">10th Standard (SSC)</h4>
                                        <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 w-fit px-3 py-1 rounded-full">
                                            <CheckCircle size={14} className="text-green-400" />
                                            <span>60.20% Score</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="p-2 bg-white/10 rounded-lg"><BookOpen className="text-white" size={24} /></span>
                                Certifications
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-surface/50 p-5 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors flex gap-4 items-center">
                                    <div className="min-w-[48px] h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500">
                                        <BookOpen size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">C, C++, Java, DSA</h4>
                                        <p className="text-gray-400 text-sm">Marvellous Infosystems</p>
                                    </div>
                                </div>
                                <div className="bg-surface/50 p-5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors flex gap-4 items-center">
                                    <div className="min-w-[48px] h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                                        <BookOpen size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">Python & Data Science (ML & AI)</h4>
                                        <p className="text-gray-400 text-sm">Marvellous Infosystems</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
