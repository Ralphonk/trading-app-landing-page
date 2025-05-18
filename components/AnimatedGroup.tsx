'use client';

import { motion } from 'framer-motion';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AnimatedGroup() {
    return (
        <motion.div
            className="flex flex-col space-y-6 justify-center items-center text-6xl font-bold text-black dark:text-white mt-16 font-manrope"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <motion.div variants={item}>1</motion.div>
            <motion.div variants={item}>2</motion.div>
            <motion.div variants={item}>3</motion.div>
        </motion.div>
    );
}
