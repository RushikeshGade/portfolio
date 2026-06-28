import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ChevronRight, BarChart2, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

const Projects = () => {
    const projects = [
        {
            title: "Smart Hire (AI-Powered ATS)",
            description: "AI-driven recruitment and applicant tracking system (ATS) that parses, extracts, and ranks candidate resumes using Natural Language Processing.",
            highlights: [
                "Developed a resume parsing pipeline using spaCy and NLTK to extract contact info, skills, and experience from PDFs.",
                "Implemented candidate-job matching utilizing Sentence Transformers and Cosine Similarity.",
                "Built an interactive recruiter dashboard with Streamlit."
            ],
            tags: ["Python", "Streamlit", "spaCy", "Sentence Transformers", "NLTK", "FAISS"],
            color: "from-purple-600 to-indigo-600",
            github: "https://github.com/RushikeshGade/Smart-Hire"
        },
        {
            title: "Surface Crack Detection using CNN",
            description: "Industrial defect detection system leveraging Convolutional Neural Networks for classifying surfaces.",
            highlights: [
                "Developed an industrial defect detection system using Convolutional Neural Networks.",
                "Performed image preprocessing, augmentation, model training, and evaluation.",
                "Implemented binary classification for crack and non-crack images."
            ],
            tags: ["Python", "TensorFlow", "Keras", "OpenCV"],
            color: "from-blue-600 to-cyan-600",
            github: "https://github.com/RushikeshGade"
        },
        {
            title: "Financial Time Series Forecasting using LSTM",
            description: "Deep learning stock price forecasting system analyzing historical sequences and predicting trends.",
            highlights: [
                "Built a stock price forecasting system using LSTM networks.",
                "Applied sequence generation and time-series prediction techniques.",
                "Evaluated performance using MAE, MSE, and RMSE."
            ],
            tags: ["Python", "TensorFlow", "Keras", "Pandas", "LSTM"],
            color: "from-indigo-600 to-violet-600",
            github: "https://github.com/RushikeshGade"
        },
        {
            title: "Transformer-Based Sentiment Analysis",
            description: "NLP transformer classifier custom-built for sentiment analysis on text datasets.",
            highlights: [
                "Developed a Transformer-based model for sentiment classification of text data.",
                "Implemented tokenization, embeddings, positional encoding, and Multi-Head Self-Attention.",
                "Trained and evaluated the model to classify Positive and Negative sentiments."
            ],
            tags: ["Python", "TensorFlow", "Keras", "Transformers", "NLP", "NumPy"],
            color: "from-pink-600 to-rose-600",
            github: "https://github.com/RushikeshGade"
        },
        {
            title: "ML & DL Case Studies",
            description: "A comprehensive compilation of standard data science projects applying classification, regression, and clustering algorithms.",
            caseStudies: [
                "Titanic Survival Prediction",
                "Diabetes Detection System",
                "Breast Cancer Detection",
                "House Price Prediction",
                "Customer Segmentation using K-Means",
                "Loan Default Prediction",
                "Ad Click Prediction"
            ],
            tags: ["Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Clustering", "EDA"],
            color: "from-emerald-600 to-teal-600",
            github: "https://github.com/RushikeshGade"
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
                        Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Showcasing practical application of machine learning, deep learning, automation, and computer vision.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <TiltCard className="group bg-surface/30 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full">
                            {/* Abstract Gradient Header */}
                            <div className={`h-3 bg-gradient-to-r ${project.color} w-full`} />

                            <div className="p-8 flex flex-col flex-grow relative">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-primary group-hover:scale-110 transition-transform duration-300">
                                        <Folder size={24} />
                                    </div>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl border border-white/5 transition-all"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>

                                <div className="mb-6 flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-450 text-sm leading-relaxed mb-6 font-light">
                                        {project.description}
                                    </p>

                                    {/* Highlights or Case Studies list */}
                                    {project.highlights ? (
                                        <ul className="space-y-2 mb-6">
                                            {project.highlights.map((highlight, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed font-light">
                                                    <ChevronRight size={14} className="text-primary mt-0.5 shrink-0" />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : project.caseStudies ? (
                                        <div className="mb-6 bg-black/10 p-4 rounded-2xl border border-white/5">
                                            <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5 mb-2.5">
                                                <BarChart2 size={14} className="text-secondary" /> Included Case Studies:
                                            </span>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {project.caseStudies.map((study, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300 font-light">
                                                        <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                                                        <span>{study}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : null}
                                </div>

                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
