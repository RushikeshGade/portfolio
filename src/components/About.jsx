import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Calendar, CheckCircle, Award, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* Background decorative blob */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl rounded-full -z-10 animate-pulse" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start"
                >
                    {/* Left Column: Career Objective */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
                        </h2>
                        <div className="bg-surface/30 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-xl md:mr-4">
                            <h3 className="text-xl font-bold mb-4 text-white">
                                Career <span className="text-primary">Objective</span>
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                                Aspiring Python Developer and AI Engineer with hands-on 2 years of experience in Python
                                Automation, Machine Learning, Deep Learning, and Generative AI. Developed real-world projects in
                                Computer Vision, NLP, RAG-based systems, and Intelligent Automation.
                            </p>
                            <p className="text-gray-400 mb-8 font-light leading-relaxed">
                                Seeking an opportunity to contribute technical skills while gaining industry experience in AI-driven software
                                development. Experienced in developing REST APIs using Django and deploying scalable solutions using AWS.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-4 text-gray-300 bg-black/20 p-4 rounded-xl border border-white/5">
                                    <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500">Location</span>
                                        <span className="text-sm font-medium">Pune, India (411028)</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300 bg-black/20 p-4 rounded-xl border border-white/5">
                                    <div className="p-2 bg-secondary/20 rounded-lg text-secondary">
                                        <Calendar size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500">Availability</span>
                                        <span className="text-sm font-medium">Available Immediately</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Education & Achievements */}
                    <div className="space-y-10">
                        {/* Education */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="p-2 bg-white/10 rounded-lg">
                                    <BookOpen className="text-white" size={22} />
                                </span>
                                Education
                            </h3>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-surface/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg"
                            >
                                <span className="text-xs text-primary font-bold tracking-wider uppercase">
                                    Bachelor of Engineering in Computer Science
                                </span>
                                <h4 className="text-xl font-bold text-white mt-1 mb-2">
                                    SKN Sinhgad Institute Technology & Sci. Pune
                                </h4>
                                <div className="flex flex-wrap items-center gap-4 mt-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                                        <Calendar size={14} className="text-secondary" />
                                        <span>2019 - 2023</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                                        <CheckCircle size={14} className="text-green-400" />
                                        <span>CGPA - 7.24</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Key Achievements */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="p-2 bg-white/10 rounded-lg">
                                    <Award className="text-white" size={22} />
                                </span>
                                Key Achievements
                            </h3>

                            <div className="bg-surface/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-lg space-y-4">
                                {[
                                    "Completed training in Python, Automation, Machine Learning, Deep Learning, and Generative AI.",
                                    "Developed 50+ hands-on projects in AI, ML, automation, and Data Science.",
                                    "Built applications in Computer Vision, NLP, Time Series Forecasting, and RAG Systems.",
                                    "Active GitHub portfolio showcasing practical implementations."
                                ].map((achievement, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle size={18} className="text-secondary mt-1 shrink-0" />
                                        <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                                            {achievement}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Row: Authenticity Declaration */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 max-w-4xl mx-auto"
                >
                    <div className="bg-surface/20 backdrop-blur-sm p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-lg">
                        <div className="flex items-center gap-3 text-gray-400">
                            <ShieldCheck size={24} className="text-green-400 shrink-0" />
                            <p className="text-sm font-light leading-relaxed">
                                The above mentioned information is authentic to the best of my knowledge.
                            </p>
                        </div>
                        <div className="shrink-0 bg-white/5 border border-white/5 px-4 py-2 rounded-xl">
                            <span className="font-serif italic text-gray-300 tracking-wide text-lg">
                                ~ Rushikesh Gade
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
