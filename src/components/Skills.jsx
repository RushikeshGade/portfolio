import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Python (OOP)", "Java", "C", "C++", "JavaScript"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "AI & Machine Learning",
            skills: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "NLP"],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Generative AI",
            skills: ["Hugging Face", "Transformers", "LLMs", "RAG", "BERT/GPT"],
            color: "from-indigo-500 to-violet-500"
        },
        {
            title: "Web & Frameworks",
            skills: ["React", "Spring Boot", "Django", "HTML/CSS", "Tailwind"],
            color: "from-pink-500 to-rose-500"
        },
        {
            title: "Databases & Tools",
            skills: ["SQL", "MongoDB", "Git", "VS Code", "Jupyter", "Linux/OS"],
            color: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Technical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A comprehensive set of technical and interpersonal skills acquired through projects and education.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface/30 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 group"
                        >
                            <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
