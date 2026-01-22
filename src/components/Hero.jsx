import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Phone, Code, Database, Globe, Cpu } from 'lucide-react';


const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const roles = ["Computer Engineer", "Problem Solver", "Full Stack Developer", "Tech Enthusiast"];

    useEffect(() => {

        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-700" />
            <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[80px]" />

            {/* Floating Icons Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-10 text-purple-500/20"
                >
                    <Code size={48} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/3 right-10 text-blue-500/20"
                >
                    <Database size={56} />
                </motion.div>
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/3 right-1/4 text-pink-500/20"
                >
                    <Globe size={40} />
                </motion.div>
                <motion.div
                    animate={{ rotate: [0, 10, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-20 left-1/4 text-indigo-500/20"
                >
                    <Cpu size={52} />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-lg md:text-2xl text-blue-400 font-medium mb-4 tracking-wide uppercase">
                            Hello, I'm
                        </h2>

                        <div className="text-6xl md:text-8xl font-black mb-6 tracking-tight flex flex-wrap justify-center gap-x-4">
                            {/* Animated First Name */}
                            <div className="flex">
                                {Array.from("Rushikesh").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, y: 50, rotate: -10 }}
                                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 120
                                        }}
                                        whileHover={{
                                            y: -10,
                                            color: "#a855f7",
                                            transition: { duration: 0.2 }
                                        }}
                                        className="inline-block bg-gradient-to-br from-white via-blue-100 to-gray-400 bg-clip-text text-transparent cursor-pointer"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Animated Last Name */}
                            <div className="flex">
                                {Array.from("Gade").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, y: 50, rotate: 10 }}
                                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.8 + (index * 0.1),
                                            type: "spring",
                                            stiffness: 120
                                        }}
                                        whileHover={{
                                            y: -10,
                                            color: "#3b82f6",
                                            transition: { duration: 0.2 }
                                        }}
                                        className="inline-block bg-gradient-to-br from-purple-500 via-violet-500 to-blue-500 bg-clip-text text-transparent cursor-pointer"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light min-h-[40px]">
                            <span>I am a </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold">
                                {text}
                            </span>
                            <span className="animate-pulse text-purple-400">|</span>
                        </h3>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed md:text-xl"
                    >
                        Passionate about building robust applications and solving complex problems.
                        Skilled in <span className="text-white font-semibold">C++</span>, <span className="text-white font-semibold">Java</span>, <span className="text-white font-semibold">Python</span>, and <span className="text-white font-semibold">Web Technologies</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
                    >
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)] hover:scale-105 overflow-hidden"
                        >
                            <span className="relative z-10">View Projects</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                        <a
                            href="#contact"
                            className="group px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm hover:scale-105"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Social Links with enhanced hover effects */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center justify-center gap-8 text-gray-400"
                    >
                        <a href="https://github.com/RushikeshGade" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 border border-white/5 hover:border-purple-500/50">
                            <Github size={28} />
                        </a>
                        <a href="mailto:rushigade0707@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-6 border border-white/5 hover:border-blue-500/50">
                            <Mail size={28} />
                        </a>
                        <a href="tel:+919307072042" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 border border-white/5 hover:border-pink-500/50">
                            <Phone size={28} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-gray-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
