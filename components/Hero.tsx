'use client';

import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { GlowingButton } from './ui/GlowingButton';
import Image from "next/image";

const steps = [
    { id: 1, title: "Register your account" },
    { id: 2, title: "Deposit your funds" },
    { id: 3, title: "Complete your KYC" },
    { id: 4, title: "Start Trading & Earn Profits" },
];


export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    return (
        <section
            ref={containerRef}
            className="relative min-h-[200vh] w-full flex flex-col justify-start items-center pt-32 text-center overflow-hidden tracking-tighter font-manrope"
        >

            {/* Background */}
            <Image
                src="/bg-hero.png"
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm brightness-75 z-0"
            />
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Header Content */}
            <div className="relative z-20 flex flex-col items-center">
                <Button className="text-base px-5 py-4 m-2 text-[#C5B6E9] rounded-3xl" variant="outline">
                    Our Process
                </Button>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-2xl md:text-6xl font-manrope text-white font-manrope"
                >
                    Become a <span className="text-[#A35CA2]">Abcd Pro</span> <br /> in sec...
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl text-center mx-auto"
                >
                    🚀 Sign up. Fund. Trade.
                </motion.p>
            </div>

            {/* Timeline */}
            <div className="relative z-30 flex flex-col items-center mt-16 w-full max-w-4xl mx-auto space-y-8">
                {steps.map((step, index) => {
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
                        <div key={step.id} className="relative w-full">
                            <div
                                ref={ref}
                                className="relative flex items-center justify-between w-full"
                            >
                                <div className="w-1/3" />
                                <div className="w-1/6 flex flex-col items-center relative">
                                    <div ref={numberRef}>
                                        <motion.div
                                            style={{ color }}
                                            className="text-4xl font-bold z-10 mt-2 mb-4"
                                        >
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
                                        transition={{ duration: 0.6, ease: 'easeOut' }}
                                    >
                                        <p className="text-sm text-white/70">Step {step.id}</p>
                                        <p className="text-lg font-semibold text-white">{step.title}</p>
                                    </motion.div>
                                </div>
                            </div>

                            {step.id === steps.length && (
                                <div className="mt-20 pb-32 flex justify-center">
                                    <GlowingButton>Open Free Account ↗</GlowingButton>
                                </div>

                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
