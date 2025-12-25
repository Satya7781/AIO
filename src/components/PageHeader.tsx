import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/animations';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
    return (
        <div className="relative bg-dark-950 pt-32 pb-20 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 grid-pattern opacity-20" />

            {/* Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
            />

            <div className="relative section-container text-center">
                <motion.h1
                    {...fadeInUp}
                    className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
                >
                    <span className="gradient-text text-shadow">{title}</span>
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-dark-300 text-lg max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
        </div>
    );
};

export default PageHeader;
