import React, { useEffect, useRef } from 'react';

const StarlightBackground = () => {
    const canvasRef = useRef(null);
    const starsRef = useRef([]);
    const mouseRef = useRef({ x: null, y: null, radius: 110 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            const starCount = Math.floor((canvas.width * canvas.height) / 10000); // Dynamic density based on resolution
            const stars = [];
            
            for (let i = 0; i < Math.min(starCount, 160); i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                stars.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    size: Math.random() * 1.5 + 0.4,
                    alpha: Math.random() * 0.8 + 0.2,
                    twinkleSpeed: Math.random() * 0.012 + 0.003,
                    fadeDirection: Math.random() > 0.5 ? 1 : -1,
                    glowFactor: 0
                });
            }
            starsRef.current = stars;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const stars = starsRef.current;
            const mouse = mouseRef.current;
            
            stars.forEach((star) => {
                // 1. Twinkling Effect (Alpha manipulation)
                star.alpha += star.twinkleSpeed * star.fadeDirection;
                if (star.alpha >= 1) {
                    star.alpha = 1;
                    star.fadeDirection = -1;
                } else if (star.alpha <= 0.15) {
                    star.alpha = 0.15;
                    star.fadeDirection = 1;
                }

                // 2. Mouse Magnetic Pull / Push Interaction
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - star.x;
                    const dy = mouse.y - star.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouse.radius) {
                        // Increase star brightness on mouse proximity
                        const force = (mouse.radius - distance) / mouse.radius;
                        star.glowFactor += (force * 2.0 - star.glowFactor) * 0.1;

                        // Push star slightly away from cursor
                        const angle = Math.atan2(dy, dx);
                        const pushDistance = (mouse.radius - distance) * 0.08;
                        const targetX = star.baseX - Math.cos(angle) * pushDistance;
                        const targetY = star.baseY - Math.sin(angle) * pushDistance;
                        
                        star.x += (targetX - star.x) * 0.08;
                        star.y += (targetY - star.y) * 0.08;
                    } else {
                        // Gently spring back to original base coordinates
                        star.glowFactor += (0 - star.glowFactor) * 0.05;
                        star.x += (star.baseX - star.x) * 0.05;
                        star.y += (star.baseY - star.y) * 0.05;
                    }
                } else {
                    star.glowFactor += (0 - star.glowFactor) * 0.05;
                    star.x += (star.baseX - star.x) * 0.05;
                    star.y += (star.baseY - star.y) * 0.05;
                }

                // 3. Drawing the Star
                const currentAlpha = Math.min(star.alpha + star.glowFactor, 1.0);
                const currentRadius = star.size * (1 + star.glowFactor * 0.5);
                
                ctx.beginPath();
                ctx.arc(star.x, star.y, currentRadius, 0, Math.PI * 2);
                
                // Fetch dynamic root colors or default white-blue stars
                ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
                ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
                ctx.shadowBlur = star.glowFactor > 0 ? star.glowFactor * 4 : 0;
                ctx.fill();
                
                // Clear shadows after drawing for performance
                ctx.shadowBlur = 0;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Event Listeners
        window.addEventListener('resize', resizeCanvas);
        
        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        // Run
        resizeCanvas();
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-screen h-screen pointer-events-none -z-20 opacity-40 transition-opacity duration-300"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default StarlightBackground;
