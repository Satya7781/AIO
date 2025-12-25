import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Heart, Users, Lightbulb, Target, Zap, Award } from 'lucide-react';
import { sectionReveal, staggerContainer, staggerItem, cardHover, iconRotate } from '../lib/animations';

const Culture = () => {
    const values = [
        {
            icon: <Heart size={28} />,
            title: 'Innovation First',
            description: 'We embrace cutting-edge technologies and encourage creative problem-solving.',
            color: 'from-red-500 to-pink-500'
        },
        {
            icon: <Users size={28} />,
            title: 'Collaborative Spirit',
            description: 'Teamwork and open communication drive our success.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Lightbulb size={28} />,
            title: 'Continuous Learning',
            description: 'We invest in our team\'s growth through training and development.',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: <Target size={28} />,
            title: 'Excellence Driven',
            description: 'We set high standards and consistently deliver quality results.',
            color: 'from-purple-500 to-indigo-500'
        },
        {
            icon: <Zap size={28} />,
            title: 'Agile & Adaptive',
            description: 'We respond quickly to change and embrace new challenges.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: <Award size={28} />,
            title: 'Recognition & Growth',
            description: 'We celebrate achievements and provide clear career progression paths.',
            color: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <div className="min-h-screen bg-dark-950">
            <Navbar />
            <PageHeader
                title="Our Culture"
                subtitle="A workplace where innovation meets collaboration, and talent thrives."
            />

            <div className="section-container">
                <motion.div
                    {...sectionReveal}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="gradient-text">Building a Culture of Excellence</span>
                    </h2>
                    <p className="text-dark-300 text-lg leading-relaxed">
                        At AIO INFINITY, we believe that our people are our greatest asset. We've cultivated a culture that
                        encourages innovation, values collaboration, and supports continuous growth. Our team is empowered
                        to take ownership, experiment with new ideas, and push the boundaries of what's possible.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
                >
                    {values.map((value, index) => (
                        <motion.div key={index} variants={staggerItem} className="group">
                            <motion.div
                                variants={cardHover}
                                whileHover="hover"
                                className="card-hover h-full"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                                <div className="relative z-10 space-y-4">
                                    <motion.div
                                        variants={iconRotate}
                                        className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                                    >
                                        {value.icon}
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-dark-100">{value.title}</h3>
                                    <p className="text-dark-400 leading-relaxed">{value.description}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    {...sectionReveal}
                    className="card-hover text-center p-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                        Join Our Team
                    </h3>
                    <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
                        We're always looking for talented individuals who share our passion for technology and innovation.
                    </p>
                    <motion.a
                        href="/careers"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary inline-block"
                    >
                        View Open Positions
                    </motion.a>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default Culture;
