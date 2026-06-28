import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';
import StarlightBackground from './components/StarlightBackground';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background min-h-screen w-full relative overflow-x-hidden text-gray-200 selection:bg-primary/30 selection:text-white">
      <StarlightBackground />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-primary via-accent to-secondary origin-left z-[100] shadow-[0_0_12px_rgba(139,92,246,0.6)]"
        style={{ scaleX }}
      />
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
