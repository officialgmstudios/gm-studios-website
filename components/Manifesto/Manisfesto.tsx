"use client"
import { motion } from 'framer-motion';
import { Lightbulb, Share2 } from 'lucide-react'; // Example icons

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Manifesto() {
    return (
        <section className="manifesto-section">
            <div className="manifesto-grid">
                
                {/* Card 1: Challenge Your Reality */}
                <motion.div 
                    className="manifesto-card"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Lightbulb className="card-icon" size={32} color="#8A2BE2" />
                    <h2>Challenge Your Reality</h2>
                    <p>We exist to push boundaries. We don&apos;t settle for the standard. Every project, every collaboration, every line of code is a challenge to turn, "what if" into &quot;what is.&quot;</p>
                    <a href="#" className="card-link">JOIN THE COLLECTIVE &rarr;</a>
                </motion.div>

                {/* Card 2: The Meta-Community */}
                <motion.div 
                    className="manifesto-card"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Share2 className="card-icon" size={32} color="#8A2BE2" />
                    <h2>The Meta-Community</h2>
                    <p>We break down silos. GM Studios partners with multiple organizations to create a super-ecosystem. Access bigger events, smarter collaborations, and a reach far beyond the individual.</p>
                </motion.div>
                
            </div>
        </section>
    );
}