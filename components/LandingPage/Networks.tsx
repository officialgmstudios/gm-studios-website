"use client"

import { motion } from 'framer-motion';

const logos = [
    { name: 'Partner A', src: '/logo-a.svg' },
    { name: 'Partner B', src: '/logo-b.svg' },
    { name: 'Partner C', src: '/logo-c.svg' },
    { name: 'Partner D', src: '/logo-d.svg' },
];

export default function Network() {
    return (
        <section className="network-section">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title"
            >
                Our Global Network
            </motion.h2>
            <p className="section-subtitle">A collective of high-trust organizations and dedicated innovators.</p>
            
            <div className="logo-grid">
                {logos.map((logo, index) => (
                    <motion.div 
                        key={logo.name} 
                        className="logo-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {/* Use Next.js Image component for logos */}
                        <img src={logo.src} alt={`${logo.name} Logo`} />
                    </motion.div>
                ))}
            </div>
            
            <motion.a 
                href="/network" 
                className="cta-button network-cta"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                View All Partners &rarr;
            </motion.a>
        </section>
    );
}