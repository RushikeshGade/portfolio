import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, BrainCircuit, Cog, Database, Terminal } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code2 className="text-blue-400" size={24} />,
            skills: ["Python", "Java", "C++", "C"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Python Libraries & tools",
            icon: <Terminal className="text-teal-400" size={24} />,
            skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "Keras", "OpenCV", "Django", "API Development"],
            color: "from-teal-500 to-emerald-500"
        },
        {
            title: "Machine & Deep Learning",
            icon: <Cpu className="text-purple-400" size={24} />,
            skills: ["Regression", "Classification", "Clustering", "Feature Engineering", "Model Evaluation", "CNN", "RNN", "LSTM", "Computer Vision", "NLP"],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Generative AI & LLMs",
            icon: <BrainCircuit className="text-pink-400" size={24} />,
            skills: ["Hugging Face Transformers", "GPT/BERT", "DALL-E", "Ollama", "Llama3", "Sentence Transformers", "RAG Systems"],
            color: "from-pink-500 to-rose-500"
        },
        {
            title: "Automation & Databases",
            icon: <Database className="text-amber-400" size={24} />,
            skills: ["OS Scripting", "Email Automation (smtplib)", "Scheduling", "Logging", "MySQL", "MongoDB", "Vector DB (FAISS)"],
            color: "from-amber-500 to-orange-500"
        },
        {
            title: "Tools & Environments",
            icon: <Cog className="text-indigo-400" size={24} />,
            skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Anaconda", "Jupyter Notebook", "AWS"],
            color: "from-indigo-500 to-violet-500"
        }
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        A robust set of skills developed through professional training, academic coursework, and extensive project development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="bg-surface/30 backdrop-blur-md p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1.5 group flex flex-col h-full"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                    {category.title}
                                </h3>
                            </div>
                            
                            <div className="flex flex-wrap gap-2.5 mt-auto">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-xl border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300"
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
