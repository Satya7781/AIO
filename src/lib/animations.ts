import type { Variants } from 'framer-motion';

// Reusable Framer Motion animation variants for consistent animations across the app

export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] as const }
};

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4 }
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] as const }
};

export const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] as const }
};

export const slideInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] as const }
};

// Container variants for staggered children
export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const staggerItem: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] as const }
    }
};

// Button hover variants
export const buttonHover: Variants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.02,
        transition: { duration: 0.2, ease: 'easeInOut' }
    },
    tap: { scale: 0.98 }
};

// Card hover variants
export const cardHover: Variants = {
    rest: { y: 0, scale: 1 },
    hover: {
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] as const }
    }
};

// Navbar scroll variants
export const navbarScroll: Variants = {
    top: {
        backgroundColor: 'rgba(2, 6, 23, 0)',
        boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
        backdropFilter: 'blur(0px)'
    },
    scrolled: {
        backgroundColor: 'rgba(2, 6, 23, 0.8)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        backdropFilter: 'blur(12px)',
        transition: { duration: 0.3 }
    }
};

// Page transition variants
export const pageTransition: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] as const }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 }
    }
};

// Section reveal on scroll
export const sectionReveal = {
    initial: { opacity: 0, y: 40 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] as const }
    },
    viewport: { once: true, margin: '-100px' }
};

// Icon rotation on hover
export const iconRotate: Variants = {
    rest: { rotate: 0 },
    hover: {
        rotate: 360,
        transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] as const }
    }
};

// Glow effect
export const glowEffect: Variants = {
    rest: {
        boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)'
    },
    hover: {
        boxShadow: '0 0 20px 0 rgba(59, 130, 246, 0.4)',
        transition: { duration: 0.3 }
    }
};

// Pulse animation
export const pulse = {
    animate: {
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut' as const
        }
    }
};

// Float animation
export const float = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut' as const
        }
    }
};
