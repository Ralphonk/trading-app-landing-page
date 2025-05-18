'use client';

import { motion, useInView, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { GlowingButton } from './ui/GlowingButton';

interface Step {
    id: number;
    title: string;
}

export default function TimelineStep({ step, isLast }: { step: Step; isLast: boolean }) {
    const ref = useRef(null);
    const numberRef = useRef(null);
    const isInView = useInView(ref, {
        margin: '-40% 0px -40% 0px',
        once: false,
    });

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 40 });
        }
    }, [isInView, controls]);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center center'],
    });

    const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const color = useTransform(scrollYProgress, [0, 1], ['#12131D', '#fff']);

    return (
        <div className="relative w-full">
            <div ref={ref} className="relative flex items-center justify-between w-full">
                <div className="w-1/3" />
                <div className="w-1/6 flex flex-col items-center relative">
                    <div ref={numberRef}>
                        <motion.div style={{ color }} className="text-4xl font-bold z-10 mt-2 mb-4">
                            {String(step.id).padStart(2, '0')}
                        </motion.div>
                    </div>
                    <div className="relative h-64 mt-2 mb-2">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-[#151521]" />
                        <motion.div
                            style={{ height }}
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-white"
                        />
                    </div>
                </div>
                <div className="w-1/2 text-left pl-4">
                    <motion.div
                        animate={controls}
                        initial={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm text-white/70">Step {step.id}</p>
                        <p className="text-lg font-semibold text-white">{step.title}</p>
                    </motion.div>
                </div>
            </div>

            {isLast && (
                <div className="mt-20 pb-32 flex justify-center">
                    <GlowingButton>Open Free Account ↗</GlowingButton>
                </div>
            )}
        </div>
    );
}
