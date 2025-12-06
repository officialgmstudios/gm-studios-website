"use client"
import Image from 'next/image';
import { motion, useTransform } from 'framer-motion';
import type { InteractiveShapeProps } from '@/types/index';

export default function InteractiveShape({ data, smoothMouseX, smoothMouseY }: InteractiveShapeProps) {
    
    // Hooks are correctly called at the top level
    const x = useTransform(smoothMouseX, (val: number) => val * data.depth);
    const y = useTransform(smoothMouseY, (val: number) => val * data.depth);
    
    // We only include the motion values (x, y) in the inline style object.
    // Static positioning (top, left, etc.) must be handled by CSS/className.
    const motionStyle = {
        x, 
        y
    };
    
    // Initial Fade-in animation for shapes
    const initialShape = { opacity: 0, scale: 0.8 };
    const animateShape = { opacity: 1, scale: 1 }; 

    return (
        <motion.div
            key={data.id}
            className="shape" // CSS handles positioning via #id
            id={data.id}
            style={motionStyle} // ⬅️ FIXED: Only contains Framer Motion values (x, y)
            initial={initialShape}
            animate={animateShape}
            transition={{ 
                duration: 1.5, 
                delay: 0.5 + Math.random() * 0.5, 
                type: "spring",
                stiffness: 50
            }}
        >
            <motion.div
                whileHover={{ rotate: [-2, 2, 0], scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'inline-block' }}
            >
                <Image
                    src={data.src}
                    alt={data.alt}
                    width={data.size} 
                    height={data.size}
                    priority={true}
                />
            </motion.div>
        </motion.div>
    );
}