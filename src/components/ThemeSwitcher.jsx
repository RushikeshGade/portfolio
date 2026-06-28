import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check } from 'lucide-react';

const ThemeSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTheme, setActiveTheme] = useState('midnight');

    const themes = [
        {
            id: 'midnight',
            name: 'Midnight Slate',
            className: '',
            colors: ['#8b5cf6', '#3b82f6'],
            bg: 'bg-[#1e1e2f]'
        },
        {
            id: 'emerald',
            name: 'Emerald Mint',
            className: 'theme-emerald',
            colors: ['#10b981', '#06b6d4'],
            bg: 'bg-[#061f18]'
        },
        {
            id: 'cyber',
            name: 'Cyberpunk Rose',
            className: 'theme-cyber',
            colors: ['#f43f5e', '#f59e0b'],
            bg: 'bg-[#1c0a35]'
        }
    ];

    // Read stored theme from localStorage on load
    useEffect(() => {
        const storedTheme = localStorage.getItem('portfolio-theme') || 'midnight';
        setTheme(storedTheme);
    }, []);

    const setTheme = (themeId) => {
        const selectedTheme = themes.find(t => t.id === themeId);
        if (!selectedTheme) return;

        // Update root classList
        const root = document.documentElement;
        themes.forEach(t => {
            if (t.className) {
                root.classList.remove(t.className);
            }
        });

        if (selectedTheme.className) {
            root.classList.add(selectedTheme.className);
        }

        setActiveTheme(themeId);
        localStorage.setItem('portfolio-theme', themeId);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="relative">
                {/* Trigger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-4 bg-surface/80 hover:bg-surface border border-white/10 hover:border-primary/50 text-white rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center group"
                >
                    <Palette size={24} className="group-hover:rotate-12 transition-transform" />
                </button>

                {/* Theme Menu Options */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-16 right-0 w-52 bg-surface/90 border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-md space-y-2.5"
                        >
                            <h4 className="text-xs font-bold text-gray-400 px-2 tracking-wider uppercase mb-1">
                                Choose Theme
                            </h4>
                            <div className="space-y-1">
                                {themes.map((theme) => (
                                    <button
                                        key={theme.id}
                                        onClick={() => {
                                            setTheme(theme.id);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all text-left text-sm ${
                                            activeTheme === theme.id
                                                ? 'bg-white/10 text-white font-semibold'
                                                : 'hover:bg-white/5 text-gray-300 hover:text-white'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {/* Preview Color Circles */}
                                            <div className="flex -space-x-1">
                                                <span
                                                    className="w-3 h-3 rounded-full border border-black/30"
                                                    style={{ backgroundColor: theme.colors[0] }}
                                                />
                                                <span
                                                    className="w-3 h-3 rounded-full border border-black/30"
                                                    style={{ backgroundColor: theme.colors[1] }}
                                                />
                                            </div>
                                            <span>{theme.name}</span>
                                        </div>
                                        {activeTheme === theme.id && (
                                            <Check size={14} className="text-primary shrink-0" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
