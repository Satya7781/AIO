import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { staggerContainer, staggerItem, buttonHover, float } from '../lib/animations';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950 pt-20">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            {/* Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-8"
                >
                    {/* Badge */}
                    <motion.div variants={staggerItem} className="flex justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-dark-700 text-sm font-medium text-dark-200">
                            <Sparkles size={16} className="text-primary-400" />
                            <span>DPIIT-Recognized Enterprise</span>
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={staggerItem}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                    >
                        <span className="block gradient-text text-shadow mb-4">
                            AIO INFINITY
                        </span>
                        <span className="block text-2xl md:text-4xl font-light text-dark-300 tracking-normal">
                            THE HOUSE OF TECHNOLOGY
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={staggerItem}
                        className="max-w-3xl mx-auto text-lg md:text-xl text-dark-300 leading-relaxed"
                    >
                        A DPIIT-Recognized enterprise, building tomorrow's digital infrastructure in partnership with{' '}
                        <span className="text-primary-400 font-medium">Meta</span>,{' '}
                        <span className="text-primary-400 font-medium">WhatsApp</span>,{' '}
                        <span className="text-primary-400 font-medium">AWS</span>, and the world's most influential technology companies.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                            <Link to="/contact" className="btn-primary group">
                                Start Your Project
                                <ArrowRight size={18} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                        <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                            <Link to="/services" className="btn-secondary">
                                Explore Services
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Partner Logos */}
                    <motion.div variants={staggerItem} className="pt-12">
                        <p className="text-xs text-dark-500 uppercase tracking-widest mb-6 font-mono">
                            Trusted Partners
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            {['Meta', 'WhatsApp', 'AWS', 'GCP', 'GreytHR'].map((partner, index) => (
                                <motion.div
                                    key={partner}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="text-xl md:text-2xl font-bold text-dark-600 hover:text-primary-400 transition-colors cursor-default"
                                >
                                    {partner}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                {...float}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-dark-500 uppercase tracking-widest font-mono">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-dark-700 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
