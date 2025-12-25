import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { staggerContainer, staggerItem, buttonHover } from '../lib/animations';

const Contact = () => {
    const contactInfo = [
        {
            icon: <MapPin size={24} />,
            title: 'Visit Us',
            content: '54, Old Subhash Nagar, Bhopal,\nMadhya Pradesh, India, 462023',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Mail size={24} />,
            title: 'Email Us',
            content: 'contact@aioinfinity.in',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Phone size={24} />,
            title: 'Call Us',
            content: '+91 123 456 7890',
            color: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <div className="min-h-screen bg-dark-950">
            <Navbar />
            <PageHeader
                title="Contact Us"
                subtitle="Ready to transform your business? Let's talk."
            />

            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        <h2 className="text-3xl font-bold gradient-text mb-8">
                            Get in Touch
                        </h2>
                        <p className="text-dark-300 mb-12 text-lg">
                            Whether you have a question about our services, pricing, or need a custom solution, our team is ready to answer all your questions.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={staggerItem}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg shrink-0`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-dark-100 mb-2">{item.title}</h3>
                                        <p className="text-dark-400 whitespace-pre-line">{item.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="card-hover">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-dark-300 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-dark-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-dark-300 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-dark-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-dark-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-dark-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-dark-300 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-dark-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    variants={buttonHover}
                                    whileHover="hover"
                                    whileTap="tap"
                                    type="submit"
                                    className="w-full btn-primary flex items-center justify-center gap-2"
                                >
                                    Send Message <Send size={18} />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
