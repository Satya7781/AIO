import { motion } from 'framer-motion';
import { sectionReveal } from '../lib/animations';

const technologies = [
    "React", "Next.js", "Nuxt.js", "Node.js", "TypeScript", "Python", "Django",
    "Go", "Java", "Laravel", "Swift", "Kotlin", "AWS", "GCP", "Docker",
    "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "Flutter"
];

const TechStack = () => {
    return (
        <section className="relative py-24 bg-gradient-to-b from-dark-950 to-dark-900 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-pattern opacity-10" />

            <div className="relative section-container mb-12 text-center">
                <motion.div {...sectionReveal}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        <span className="gradient-text">Powered by Modern Tech</span>
                    </h2>
                    <p className="text-dark-300 text-lg max-w-2xl mx-auto">
                        We leverage the most advanced frameworks and tools to build robust, scalable, and future-proof solutions.
                    </p>
                </motion.div>
            </div>

            {/* Scrolling Marquee - Row 1 */}
            <div className="relative flex overflow-hidden mb-4">
                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="flex gap-8 py-6 whitespace-nowrap"
                >
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={index}
                            className="group relative px-6 py-3 rounded-xl glass border border-dark-800 hover:border-primary-500/50 transition-all duration-300"
                        >
                            <span className="text-2xl md:text-3xl font-bold text-dark-500 group-hover:text-primary-400 transition-colors font-mono">
                                {tech}
                            </span>
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 rounded-xl transition-colors duration-300" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scrolling Marquee - Row 2 (Reverse) */}
            <div className="relative flex overflow-hidden">
                <motion.div
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                    className="flex gap-8 py-6 whitespace-nowrap"
                >
                    {[...technologies, ...technologies].reverse().map((tech, index) => (
                        <div
                            key={index}
                            className="group relative px-6 py-3 rounded-xl glass border border-dark-800 hover:border-accent-500/50 transition-all duration-300"
                        >
                            <span className="text-2xl md:text-3xl font-bold text-dark-500 group-hover:text-accent-400 transition-colors font-mono">
                                {tech}
                            </span>
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/5 rounded-xl transition-colors duration-300" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent pointer-events-none" />
        </section>
    );
};

export default TechStack;
