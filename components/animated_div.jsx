import { motion } from "framer-motion";

const AnimatedDiv = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-blue-500 text-white rounded"
        >
            {children}
        </motion.div>
    );
};

export default AnimatedDiv;