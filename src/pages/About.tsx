import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, cardHover } from '../lib/animations';

const About = () => {
    return (
        <div className="min-h-screen bg-dark-950">
            <Navbar />
            <PageHeader
                title="About Us"
                subtitle="AIO INFINITY PRIVATE LIMITED (AIPL) is more than a technology company. It is a house of multiple services, powering the future of enterprise IT."
            />

            <div className="section-container">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="max-w-4xl mx-auto space-y-8 text-lg text-dark-300 leading-relaxed"
                >
                    <motion.p variants={staggerItem}>
                        Founded by <span className="text-primary-400 font-semibold">Mr. Dinesh Kumar Sahu</span> and{' '}
                        <span className="text-primary-400 font-semibold">Mr. Devansh D Sahu</span>, AIPL was built on a vision:
                        to create a global powerhouse of technology rooted in India, yet partnered with the world's most influential companies.
                    </motion.p>

                    <motion.p variants={staggerItem}>
                        With recognition by the <span className="text-dark-100 font-semibold">Department for Promotion of Industry and Internal Trade (DPIIT)</span>,
                        and strategic partnerships with <span className="text-primary-400 font-semibold">Meta, WhatsApp, Instagram, AWS, GCP, and GreytHR</span>,
                        AIPL stands at the intersection of scale, innovation, and trust.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                        <motion.div variants={staggerItem}>
                            <motion.div
                                variants={cardHover}
                                whileHover="hover"
                                className="card-hover h-full"
                            >
                                <h3 className="text-2xl font-bold gradient-text mb-4">Our Vision</h3>
                                <p className="text-dark-400">
                                    To be the global standard for enterprise technology, delivering solutions that not only solve problems but create new possibilities.
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={staggerItem}>
                            <motion.div
                                variants={cardHover}
                                whileHover="hover"
                                className="card-hover h-full"
                            >
                                <h3 className="text-2xl font-bold gradient-text mb-4">Our Mission</h3>
                                <p className="text-dark-400">
                                    To empower businesses with scalable, secure, and intelligent technology infrastructure that drives growth and efficiency.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
