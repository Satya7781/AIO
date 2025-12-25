import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { sectionReveal, staggerContainer, staggerItem, cardHover } from '../lib/animations';

const Alliances = () => {
    const partners = [
        {
            name: 'Meta',
            category: 'Technology Partner',
            description: 'Strategic partnership for social media integration and business solutions.',
            benefits: [
                'Facebook Business API Integration',
                'Instagram Business Solutions',
                'WhatsApp Business Platform Access',
                'Meta Developer Support'
            ],
            color: 'from-blue-600 to-blue-400'
        },
        {
            name: 'WhatsApp',
            category: 'Messaging Platform',
            description: 'Official WhatsApp Business API partner for enterprise messaging solutions.',
            benefits: [
                'WhatsApp Business API',
                'Verified Business Account',
                'Automated Messaging Solutions',
                'Customer Support Integration'
            ],
            color: 'from-green-600 to-green-400'
        },
        {
            name: 'Amazon Web Services (AWS)',
            category: 'Cloud Infrastructure',
            description: 'AWS partner for cloud computing, storage, and enterprise solutions.',
            benefits: [
                'Cloud Infrastructure Services',
                'Scalable Computing Resources',
                'Advanced Security Features',
                'Global Data Centers'
            ],
            color: 'from-orange-600 to-orange-400'
        },
        {
            name: 'Google Cloud Platform (GCP)',
            category: 'Cloud Services',
            description: 'GCP partner for cloud infrastructure and AI/ML solutions.',
            benefits: [
                'Cloud Computing Services',
                'Machine Learning APIs',
                'BigQuery Analytics',
                'Kubernetes Engine'
            ],
            color: 'from-red-600 to-yellow-400'
        },
        {
            name: 'GreytHR',
            category: 'HR Technology',
            description: 'Integration partner for HR management and payroll solutions.',
            benefits: [
                'HRMS Integration',
                'Payroll Management',
                'Leave & Attendance Tracking',
                'Employee Self-Service Portal'
            ],
            color: 'from-purple-600 to-purple-400'
        },
        {
            name: 'DPIIT',
            category: 'Government Recognition',
            description: 'Recognized by Department for Promotion of Industry and Internal Trade.',
            benefits: [
                'Startup India Recognition',
                'Tax Benefits',
                'IPR Support',
                'Funding Opportunities'
            ],
            color: 'from-indigo-600 to-indigo-400'
        }
    ];

    return (
        <div className="min-h-screen bg-dark-950">
            <Navbar />
            <PageHeader
                title="Our Alliances"
                subtitle="Strategic partnerships that empower us to deliver world-class solutions."
            />

            <div className="section-container">
                <motion.div
                    {...sectionReveal}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="gradient-text">Trusted by Global Leaders</span>
                    </h2>
                    <p className="text-dark-300 text-lg leading-relaxed">
                        Our strategic alliances with industry leaders enable us to leverage cutting-edge technologies
                        and deliver exceptional value to our clients. These partnerships reflect our commitment to
                        excellence and innovation.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                    {partners.map((partner, index) => (
                        <motion.div key={index} variants={staggerItem} className="group">
                            <motion.div
                                variants={cardHover}
                                whileHover="hover"
                                className="card-hover h-full"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <div className={`w-14 h-14 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                            <Award size={28} />
                                        </div>
                                        <span className="text-xs font-semibold text-dark-500 uppercase tracking-wider bg-dark-800 px-3 py-1 rounded-full">
                                            {partner.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-dark-100">{partner.name}</h3>
                                    <p className="text-dark-400 leading-relaxed">{partner.description}</p>

                                    <div className="space-y-3 pt-2">
                                        <p className="text-sm font-semibold text-dark-300">Key Benefits:</p>
                                        {partner.benefits.map((benefit, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 * idx }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary-400" />
                                                <span className="text-dark-400 text-sm">{benefit}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    {...sectionReveal}
                    className="mt-20 card-hover text-center p-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                        Interested in Partnership?
                    </h3>
                    <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
                        We're always open to exploring new partnerships that can create value for our clients and the industry.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary inline-block"
                    >
                        Contact Us
                    </motion.a>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default Alliances;
