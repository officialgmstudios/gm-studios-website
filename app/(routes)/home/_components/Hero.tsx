// components/Hero.tsx
'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, Variants } from 'framer-motion';
import InteractiveShape from './InteractiveState';
import type { ShapeData } from "@/types/index"; // Import the type

// --- SHAPE CONFIGURATION ---
const shapeData: ShapeData[] = [
    { id: 'shape-sphere', src: '/sphere.png', alt: 'Sphere', depth: 30, initialTop: '15%', initialRight: '30%', size: 300 },
    { id: 'shape-knot', src: '/random4.png', alt: 'Knot Shape', depth: 40, initialBottom: '15%', initialLeft: '10%', size: 200 },
    { id: 'shape-torus', src: '/torus.png', alt: 'Torus Ring', depth: 15, initialTop: '50%', initialLeft: '10%', size: 350 },
    { id: 'shape-helix', src: '/random3.png', alt: 'Helix Shape', depth: 25, initialBottom: '20%', initialRight: '5%', size: 200 },
    { id: 'shape-star', src: '/random1.png', alt: 'Star Blob', depth: 50, initialTop: '5%', initialLeft: '45%', size: 150 },
];

// --- TEXT ANIMATION VARIANTS (using Framer Motion's Variants type) ---
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        }
    }
};

const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function Hero() {
    // 1. Setup Motion Values to track raw mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // 2. Setup Spring for smoothed movement
    const springConfig = { stiffness: 150, damping: 15 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const moveX = (centerX - e.clientX) / centerX;
            const moveY = (centerY - e.clientY) / centerY;

            mouseX.set(moveX);
            mouseY.set(moveY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <header className="hero-section">
            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p className="collective-tag" variants={textVariants}>THE COLLECTIVE</motion.p>
                <motion.h1 className="hero-title" variants={textVariants}>
                    We are the **igniion point**<br/>for the impossible.
                </motion.h1>
                <motion.p className="hero-subtitle" variants={textVariants}>
                    GM Studios is not just a network, it is a **sanctuary for the obsessed**. 
                    Unite fragmented communities into a singular, high-trust force designed to turn &quot;what if&quot; into &quot;**what is**&quot;
                </motion.p>
                <motion.a href="#" className="cta-button" variants={textVariants}>
                    Join The Collective
                </motion.a>
            </motion.div>

            {/* --- Interactive Shapes Container --- */}
            <div className="interactive-shapes">
                {shapeData.map(data => (
                    // This must be a JSX element (<InteractiveShape />), not an expression returning a plain object.
                    <InteractiveShape
                        key={data.id}
                        data={data}
                        smoothMouseX={smoothMouseX}
                        smoothMouseY={smoothMouseY}
                    />
                ))}
            </div>
        </header>
    );
}