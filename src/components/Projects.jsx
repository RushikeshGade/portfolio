import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "FLAN-T5 Summarizer & Q&A",
            description: "A Generative AI CLI tool for abstractive text summarization and Q&A. Optimized inference speed by 25% using Hugging Face Transformers and PyTorch.",
            tags: ["GenAI", "Transformers", "PyTorch", "HuggingFace"],
            color: "from-indigo-600 to-violet-600",
            links: { github: "https://github.com/RushikeshGade" }
        },
        {
            title: "Real-time Image Detection",
            description: "Deep Learning system using CNN and OpenCV capable of detecting 5 distinct objects in real-time with over 90% accuracy.",
            tags: ["Deep Learning", "TensorFlow", "Keras", "OpenCV"],
            color: "from-blue-600 to-cyan-600",
            links: { github: "https://github.com/RushikeshGade" }
        },
        {
            title: "Breast Cancer Detection",
            description: "Machine Learning model aimed at medical diagnostics, achieving 92% accuracy using Logistic Regression and SVM algorithms.",
            tags: ["Machine Learning", "Scikit-learn", "Pandas", "Healthcare"],
            color: "from-pink-600 to-rose-600",
            links: { github: "https://github.com/RushikeshGade" }
        },
        {
            title: "Duplicate File Cleaner & Log Auto",
            description: "Python automation scripts to remove duplicate files and automate log generation, integrated with email alerts. Improved system monitoring efficiency by 30%.",
            tags: ["Python", "Automation", "Scripting", "OS"],
            color: "from-orange-600 to-red-600",
            links: { github: "https://github.com/RushikeshGade" }
        },
        {
            title: "Marvellous Portal Application",
            description: "A comprehensive web application developed using Spring Boot, Java, and MongoDB. Implemented CRUD operations through RESTful APIs and ensured robust testing of endpoints using Postman.",
            tags: ["Spring Boot", "Java", "MongoDB", "REST API"],
            color: "from-pink-600 to-rose-600",
            links: { github: "https://github.com/RushikeshGade" }
        },
        {
            title: "Generalised Data Structures Library",
            description: "A comprehensive C++ library providing generic implementations of linear and non-linear data structures. Designed with object-oriented principles, it offers ready-made functionalities for fundamental and advanced operations.",
            tags: ["C++", "STL", "Generic Programming"],
            color: "from-blue-600 to-indigo-600",
            links: { github: "https://github.com/RushikeshGade" }
        },
        {
            title: "File Packer Unpacker",
            description: "A system programming tool that packs multiple files into a single archive with metadata and encryption capabilities. Includes functionality to unpack and restore files to their original state with data integrity.",
            tags: ["System Programming", "C/C++", "Encryption"],
            color: "from-emerald-600 to-teal-600",
            links: { github: "https://github.com/RushikeshGade" }
        },
        {
            title: "Chat Application",
            description: "A multi-client real-time chat application built using Java Socket programming. Features a server-client architecture allowing seamless communication efficiently across a network.",
            tags: ["Java", "Socket Programming", "Networking"],
            color: "from-purple-600 to-pink-600",
            links: { github: "https://github.com/RushikeshGade" }
        }
    ];

    return (
        <section id="projects" className="py-20 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Featured <span className="text-white">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Showcasing my technical expertise through practical applications and system-level programming.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
                        >
                            {/* Abstract Gradient Header */}
                            <div className={`h-24 bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="p-8 flex flex-col flex-grow relative">
                                {/* Floating Icon */}
                                <div className="absolute -top-10 left-8 p-4 bg-surface rounded-2xl border border-white/5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    <Code className="text-white" size={32} />
                                </div>

                                <div className="mt-8 mb-6">
                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-bold text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
                                    >
                                        View Source <Github size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
