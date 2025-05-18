'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TimelineStep from './TimelineStep';

const steps = [
    { id: 1, title: "Register your account" },
    { id: 2, title: "Deposit your funds" },
    { id: 3, title: "Complete your KYC" },
    { id: 4, title: "Start Trading & Earn Profits" },
];

export default function Hero() {
    return (
        <section className="relative min-h-[200vh] w-full flex flex-col justify-start items-center pt-32 text-center overflow-hidden tracking-tighter font-manrope">

            {/* Background */}
            <Image
                src="/bg-hero.png"
                alt="Hero Background"
                fill
                className="object-cover scale-110 blur-sm brightness-75 z-0"
            />
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Header */}
            <div className="relative z-20 flex flex-col items-center">
                <Button className="text-base px-5 py-4 m-2 text-[#C5B6E9] rounded-3xl" variant="outline">
                    Our Process
                </Button>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-6xl font-manrope text-white"
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
                {steps.map((step) => (
                    <TimelineStep key={step.id} step={step} isLast={step.id === steps.length} />
                ))}
            </div>
        </section>
    );
}
