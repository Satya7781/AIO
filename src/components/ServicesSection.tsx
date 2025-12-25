import { motion } from 'framer-motion';
import { Code, Cloud, Smartphone, Database, Globe, BarChart } from 'lucide-react';
import { sectionReveal, staggerContainer, staggerItem, cardHover, iconRotate } from '../lib/animations';

const services = [
    {
        icon: <Globe size={28} />,
        title: 'SaaS Development',
        description: 'Scalable platforms built for performance.',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: <Code size={28} />,
        title: 'Web Development',
        description: 'Enterprise-grade frontend, backend, and full-stack solutions.',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: <BarChart size={28} />,
        title: 'ERP & HRMS Systems',
        description: 'Streamlined operations for complex organizations.',
        color: 'from-orange-500 to-red-500'
    },
    {
        icon: <Database size={28} />,
        title: 'CRM Solutions',
        description: 'Intelligent customer management at scale.',
        color: 'from-green-500 to-emerald-500'
    },
    {
        icon: <Smartphone size={28} />,
        title: 'Mobile Apps',
        description: 'Native iOS & Android solutions.',
        color: 'from-indigo-500 to-blue-500'
    },
    {
        icon: <Cloud size={28} />,
        title: 'Cloud Architecture',
        description: 'Expertise across AWS, GCP, hybrid infrastructure.',
        color: 'from-violet-500 to-purple-500'
    }
];

const ServicesSection = () => {
    return (
        <section className="relative py-24 bg-dark-950 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className="relative section-container">
                <motion.div
                    {...sectionReveal}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        <span className="gradient-text">Our Expertise</span>
                    </h2>
                    <p className="text-dark-300 text-lg leading-relaxed">
                        From enterprise SaaS platforms to full-stack web development, we engineer systems that scale.
                        We do not just build software. We design ecosystems.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
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
                                {/* Gradient Glow on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                                <div className="relative z-10 space-y-4">
                                    {/* Icon */}
                                    <motion.div
                                        variants={iconRotate}
                                        className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                                    >
                                        {service.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-dark-100">{service.title}</h3>
                                    <p className="text-dark-400 leading-relaxed">{service.description}</p>

                                    {/* Hover Arrow */}
                                    <div className="flex items-center gap-2 text-sm font-medium text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span>Learn more</span>
                                        <motion.span
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Border Gradient */}
                                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    style={{
                                        background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                                        padding: '1px',
                                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                        WebkitMaskComposite: 'xor',
                                        maskComposite: 'exclude'
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
