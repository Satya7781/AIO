import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { sectionReveal, staggerContainer, staggerItem, cardHover } from '../lib/animations';

const Careers = () => {
    const openings = [
        {
            title: 'Senior Full Stack Developer',
            department: 'Engineering',
            location: 'Bhopal, India',
            type: 'Full-time',
            description: 'Build scalable web applications using React, Node.js, and cloud technologies.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'DevOps Engineer',
            department: 'Infrastructure',
            location: 'Bhopal, India',
            type: 'Full-time',
            description: 'Manage CI/CD pipelines, containerization, and cloud infrastructure.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Bhopal, India',
            type: 'Full-time',
            description: 'Create beautiful, intuitive user experiences for enterprise applications.',
            color: 'from-orange-500 to-red-500'
        },
        {
            title: 'Product Manager',
            department: 'Product',
            location: 'Bhopal, India',
            type: 'Full-time',
            description: 'Drive product strategy and roadmap for our SaaS platforms.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Mobile App Developer',
            department: 'Engineering',
            location: 'Bhopal, India',
            type: 'Full-time',
            description: 'Develop native iOS and Android applications using Swift and Kotlin.',
            color: 'from-indigo-500 to-blue-500'
        },
        {
            title: 'Data Engineer',
            department: 'Data',
            location: 'Bhopal, India',
            type: 'Full-time',
            description: 'Build and maintain data pipelines and analytics infrastructure.',
            color: 'from-violet-500 to-purple-500'
        }
    ];

    return (
        <div className="min-h-screen bg-dark-950">
            <Navbar />
            <PageHeader
                title="Careers"
                subtitle="Join our team and help shape the future of enterprise technology."
            />

            <div className="section-container">
                <motion.div
                    {...sectionReveal}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="gradient-text">Open Positions</span>
                    </h2>
                    <p className="text-dark-300 text-lg leading-relaxed">
                        We're looking for talented, passionate individuals to join our growing team.
                        Explore our current openings and find your next opportunity.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20"
                >
                    {openings.map((job, index) => (
                        <motion.div key={index} variants={staggerItem} className="group">
                            <motion.div
                                variants={cardHover}
                                whileHover="hover"
                                className="card-hover h-full"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${job.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${job.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                            <Briefcase size={22} />
                                        </div>
                                        <span className="text-xs font-semibold text-dark-500 uppercase tracking-wider bg-dark-800 px-3 py-1 rounded-full">
                                            {job.department}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-dark-100">{job.title}</h3>
                                    <p className="text-dark-400 leading-relaxed">{job.description}</p>

                                    <div className="flex flex-wrap gap-4 text-sm text-dark-500">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} />
                                            <span>{job.type}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm font-semibold text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                                        <span>Apply Now</span>
                                        <motion.span
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <ArrowRight size={16} />
                                        </motion.span>
                                    </div>
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
                        Don't See a Perfect Fit?
                    </h3>
                    <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
                        We're always interested in hearing from talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary inline-block"
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default Careers;
