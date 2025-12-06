"use client"

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
    { title: 'Aether Nexus', category: 'Platform Development', image: '/project-aether.jpg' },
    { title: 'The Fractal DAO', category: 'Governance Design', image: '/project-fractal.jpg' },
    { title: 'Quantum Leap Brand', category: 'Identity & Strategy', image: '/project-quantum.jpg' },
];

export default function Projects() {
    return (
        <section className="projects-section">
            <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="section-title"
            >
                Featured Projects
            </motion.h2>
            
            <div className="project-grid">
                {projects.map((project, index) => (
                    <motion.div 
                        key={project.title} 
                        className="project-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <p className="project-category">{project.category}</p>
                            <h3>{project.title}</h3>
                            <a href={`/projects/${project.title}`} className="project-link">
                                Explore <ArrowRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <a href="/projects" className="cta-button projects-cta">
                View All Projects
            </a>
        </section>
    );
}