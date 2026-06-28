import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className = "" }) => {
    const cardRef = useRef(null);

    // Initial motion values between -0.5 and 0.5
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Use springs to smooth out mouse movement
    const xSpring = useSpring(x, { stiffness: 300, damping: 25 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 25 });

    // Map the relative mouse position values to rotation angles (degrees)
    const rotateX = useTransform(ySpring, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], [-10, 10]);

    // Simple light glare sheen gradient calculation
    const glareX = useTransform(xSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(ySpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        // Mouse coordinate relative to the center of the card
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;
        
        // Relative coordinates bounded between -0.5 and 0.5
        x.set(mouseX / width);
        y.set(mouseY / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div style={{ perspective: 1000 }}>
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className={`relative overflow-hidden cursor-pointer ${className}`}
            >
                {/* Embedded dynamic light sheen effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-30"
                    style={{
                        background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.12) 0%, transparent 60%)`,
                    }}
                />
                
                {/* Render wrapped card contents */}
                <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="h-full flex flex-col">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

export default TiltCard;
