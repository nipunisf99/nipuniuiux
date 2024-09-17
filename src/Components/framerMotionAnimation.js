import { motion } from "framer-motion";

// Transition animation for page transitions
export const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
};

// Project Animation

// Define animation variants for section transitions
export const sectionVariants = {
    initial: { opacity: 1, x: -50 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
};

// Wrapper component for section animations
export const AnimatedSection = ({ children, key }) => (
    <motion.div
        key={key}
        variants={sectionVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
);
