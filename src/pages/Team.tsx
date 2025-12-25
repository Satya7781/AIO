import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { sectionReveal, staggerContainer, staggerItem, cardHover } from '../lib/animations';

const Team = () => {
    const leadership = [
        {
            name: 'Mr. Dinesh Kumar Sahu',
            role: 'Co-Founder & CEO',
            bio: 'Visionary leader with extensive experience in enterprise technology and business strategy.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'Mr. Devansh D Sahu',
            role: 'Co-Founder & CTO',
            bio: 'Technology expert driving innovation and technical excellence across all products.',
            color: 'from-purple-500 to-pink-500'
        }
    ];

    const departments = [
        {
            name: 'Engineering',
            count: '15+',
            description: 'Full-stack developers, mobile engineers, and DevOps specialists',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'Product & Design',
            count: '5+',
            description: 'Product managers, UI/UX designers, and design researchers',
            color: 'from-purple-500 to-pink-500'
        },
        {
            name: 'Business & Operations',
            count: '8+',
            description: 'Sales, marketing, HR, and operations professionals',
            color: 'from-orange-500 to-red-500'
        },
        {
            name: 'Data & Analytics',
            count: '2+',
            description: 'Data engineers and business intelligence analysts',
            color: 'from-green-500 to-emerald-500'
        }
    ];

    return (
        <div className="min-h-screen bg-dark-950">
            <Navbar />
            <PageHeader
                title="Our Team"
                subtitle="Meet the talented individuals driving innovation at AIO INFINITY."
            />

            <div className="section-container">
                {/* Leadership Section */}
                <motion.div
                    {...sectionReveal}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="gradient-text">Leadership Team</span>
                    </h2>
                    <p className="text-dark-300 text-lg max-w-3xl mx-auto">
                        Our founders bring decades of combined experience in technology, business, and innovation.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto"
                >
                    {leadership.map((leader, index) => (
                        <motion.div key={index} variants={staggerItem} className="group">
                            <motion.div
                                variants={cardHover}
                                whileHover="hover"
                                className="card-hover text-center"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${leader.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                                <div className="relative z-10">
                                    <div className={`w-24 h-24 bg-gradient-to-br ${leader.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                                        {leader.name.split(' ').map(n => n[0]).join('')}
                                    </div>

                                    <h3 className="text-2xl font-bold text-dark-100 mb-2">{leader.name}</h3>
                                    <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${leader.color} bg-clip-text text-transparent`}>
                                        {leader.role}
                                    </p>
                                    <p className="text-dark-400 leading-relaxed mb-6">{leader.bio}</p>

                                    <div className="flex items-center justify-center gap-4">
                                        <motion.a
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            href="#"
                                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${leader.color} flex items-center justify-center text-white shadow-lg`}
                                        >
                                            <Linkedin size={18} />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            href="#"
                                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${leader.color} flex items-center justify-center text-white shadow-lg`}
                                        >
                                            <Mail size={18} />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Departments Section */}
                <motion.div
                    {...sectionReveal}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="gradient-text">Our Departments</span>
                    </h2>
                    <p className="text-dark-300 text-lg max-w-3xl mx-auto">
                        30+ talented professionals across multiple departments working together to deliver excellence.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {departments.map((dept, index) => (
                        <motion.div key={index} variants={staggerItem} className="group">
                            <motion.div
                                variants={cardHover}
                                whileHover="hover"
                                className="card-hover text-center h-full"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                                <div className="relative z-10">
                                    <div className={`text-5xl font-bold mb-4 bg-gradient-to-r ${dept.color} bg-clip-text text-transparent`}>
                                        {dept.count}
                                    </div>
                                    <h3 className="text-xl font-bold text-dark-100 mb-3">{dept.name}</h3>
                                    <p className="text-dark-400 text-sm leading-relaxed">{dept.description}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default Team;
