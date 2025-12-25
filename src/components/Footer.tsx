import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../lib/animations';

const Footer = () => {
    return (
        <footer className="relative bg-dark-950 border-t border-dark-800 pt-20 pb-10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-10" />

            {/* Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

            <div className="relative section-container">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
                >
                    {/* Brand Column */}
                    <motion.div variants={staggerItem} className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
                                <div className="relative bg-gradient-to-r from-primary-600 to-accent-600 text-white px-3 py-1.5 rounded-lg font-bold">
                                    AIO
                                </div>
                            </div>
                            <span className="font-bold text-xl gradient-text">INFINITY</span>
                        </Link>
                        <p className="text-dark-400 text-sm leading-relaxed">
                            A DPIIT-Recognized enterprise, building tomorrow's digital infrastructure in partnership with Meta, WhatsApp, AWS, and the world's most influential technology companies.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <Facebook size={18} />, href: '#' },
                                { icon: <Twitter size={18} />, href: '#' },
                                { icon: <Instagram size={18} />, href: '#' },
                                { icon: <Linkedin size={18} />, href: '#' }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services Column */}
                    <motion.div variants={staggerItem}>
                        <h3 className="text-lg font-semibold mb-6 gradient-text">Services</h3>
                        <ul className="space-y-3 text-dark-400 text-sm">
                            {['SaaS Development', 'Web Development', 'ERP & HRMS Systems', 'CRM Solutions', 'Mobile Apps', 'Cloud Architecture'].map((service, index) => (
                                <li key={index}>
                                    <Link to="/services" className="hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-dark-700 group-hover:bg-primary-500 transition-colors" />
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Column */}
                    <motion.div variants={staggerItem}>
                        <h3 className="text-lg font-semibold mb-6 gradient-text">Company</h3>
                        <ul className="space-y-3 text-dark-400 text-sm">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Team', path: '/team' },
                                { name: 'Careers', path: '/careers' },
                                { name: 'Culture', path: '/culture' },
                                { name: 'Contact', path: '/contact' }
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path} className="hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                                        <span className="w-1 h-1 rounded-full bg-dark-700 group-hover:bg-primary-500 transition-colors" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div variants={staggerItem}>
                        <h3 className="text-lg font-semibold mb-6 gradient-text">Contact Us</h3>
                        <ul className="space-y-4 text-dark-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-0.5 shrink-0 text-primary-400" />
                                <span>54, Old Subhash Nagar, Bhopal, Madhya Pradesh, India, 462023</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary-400" />
                                <a href="mailto:contact@aioinfinity.in" className="hover:text-primary-400 transition-colors">
                                    contact@aioinfinity.in
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary-400" />
                                <a href="tel:+911234567890" className="hover:text-primary-400 transition-colors">
                                    +91 123 456 7890
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-dark-500 text-sm">
                        © 2025 AIO INFINITY PRIVATE LIMITED. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 text-dark-500 text-sm">
                        <Link to="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
