import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, Code, Github } from 'lucide-react';
import TiltCard from './TiltCard';

const Experience = () => {
    const experienceData = {
        role: "AI/ML Engineer",
        company: "Intelligic Software Pvt. Ltd.",
        period: "Feb - 2024",
        projectTitle: "Intelligent Document Question Answering System (RAG + LLM)",
        techStack: ["Python", "Streamlit", "FAISS", "Ollama", "Llama3", "Sentence Transformers"],
        highlights: [
            "Developed a RAG-based document QA system using FAISS and Sentence Transformers.",
            "Implemented PDF text extraction, semantic search, and context-aware answer generation.",
            "Integrated Ollama and Llama3 for local LLM inference.",
            "Built an interactive Streamlit application."
        ],
        github: "https://github.com/RushikeshGade"
    };

    return (
        <section id="experience" className="py-20 relative overflow-hidden bg-black/10">
            {/* Background blur decorative blobs */}
            <div className="absolute top-1/3 right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/3 left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Work <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        My professional journey and hands-on work with AI/ML systems.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <TiltCard className="bg-surface/30 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative group hover:border-white/10 transition-all duration-300">
                        {/* Interactive floating elements */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-3xl -z-10 group-hover:scale-110 transition-transform duration-300" />
                        
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/5 pb-6">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                                        <Briefcase size={22} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                        {experienceData.role}
                                    </h3>
                                </div>
                                <p className="text-gray-300 font-medium text-lg ml-11 md:ml-0">
                                    {experienceData.company}
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-full text-gray-400 text-sm font-medium w-fit ml-11 md:ml-0">
                                <Calendar size={16} className="text-secondary" />
                                <span>{experienceData.period}</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-bold text-white mb-3">
                                    {experienceData.projectTitle}
                                </h4>
                                <ul className="space-y-3">
                                    {experienceData.highlights.map((highlight, index) => (
                                        <motion.li 
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            className="flex items-start gap-3 text-gray-300 font-light leading-relaxed"
                                        >
                                            <ChevronRight size={18} className="text-primary mt-1 shrink-0" />
                                            <span>{highlight}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <div className="flex flex-wrap gap-2 items-center mb-6">
                                    <span className="text-xs font-bold text-gray-400 flex items-center gap-1.5 mr-2">
                                        <Code size={14} className="text-secondary" /> Tech Stack:
                                    </span>
                                    {experienceData.techStack.map(tag => (
                                        <span key={tag} className="text-xs font-semibold text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={experienceData.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 text-white hover:text-primary px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-[1.02]"
                                >
                                    <Github size={18} />
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                        </TiltCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
