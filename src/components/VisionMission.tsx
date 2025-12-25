import { motion } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';
import { sectionReveal, staggerContainer, staggerItem, cardHover } from '../lib/animations';

const VisionMission = () => {
    const cards = [
        {
            icon: <Eye size={28} />,
            title: 'Our Vision',
            description: 'To be the global standard for enterprise technology, delivering solutions that not only solve problems but create new possibilities.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Target size={28} />,
            title: 'Our Mission',
            description: 'To empower businesses with scalable, secure, and intelligent technology infrastructure that drives growth and efficiency.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Users size={28} />,
            title: 'Our Team',
            description: '30+ talented professionals dedicated to delivering excellence in every project, combining innovation with expertise.',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: <Award size={28} />,
            title: 'Recognition',
            description: 'DPIIT-recognized startup with strategic partnerships with Meta, WhatsApp, AWS, GCP, and GreytHR.',
            color: 'from-green-500 to-emerald-500'
        }
    ];

    return (
        <section className="relative py-24 bg-dark-900/50 overflow-hidden">
            {/* Decorative Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

            <div className="section-container">
                <motion.div
                    {...sectionReveal}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Who We Are</span>
                    </h2>
                    <p className="text-dark-300 text-lg max-w-3xl mx-auto leading-relaxed">
                        Founded by <span className="text-primary-400 font-medium">Mr. Dinesh Kumar Sahu</span> and{' '}
                        <span className="text-primary-400 font-medium">Mr. Devansh D Sahu</span>, AIPL was built on a vision:
                        to create a global powerhouse of technology rooted in India, yet partnered with the world's most influential companies.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className="group"
                        >
                            <motion.div
                                variants={cardHover}
                                whileHover="hover"
                                className="relative h-full card-hover"
                            >
                                {/* Gradient Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                                <div className="relative z-10 space-y-4">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                        {card.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-dark-100">{card.title}</h3>
                                    <p className="text-dark-400 leading-relaxed">{card.description}</p>
                                </div>

                                {/* Animated Border */}
                                <div className="absolute inset-0 rounded-2xl border border-dark-700 group-hover:border-dark-600 transition-colors" />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default VisionMission;
