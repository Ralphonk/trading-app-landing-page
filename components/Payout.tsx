"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const PayoutHero: React.FC = () => {
    const [count, setCount] = useState<number>(900000);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Counter animation
    useEffect(() => {
        let current = 900000;
        const target = 999345;
        const increment = Math.ceil((target - current) / 200);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                setCount(target);
            } else {
                setCount(current);
            }
        }, 20);

        return () => clearInterval(timer);
    }, []);

    // Scroll-based animation
    const textRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start end", "center center"],
    });

    const rawX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
    const smoothX = useSpring(rawX, {
        stiffness: 50,
        damping: 20,
        mass: 1,
    });

    //  Blur headline animation
    const headlineRef = useRef(null);
    const { scrollYProgress: headingScrollY } = useScroll({
        target: headlineRef,
        offset: ["start end", "center center"],
    });

    const blur = useTransform(headingScrollY, [0, 1], ["30px", "0px"]);
    const opacity = useTransform(headingScrollY, [0, 1], [0.3, 1]);



    return (
        <div className="relative w-full overflow-hidden bg-black text-white font-manrope">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/blackhole-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 bg-black/60">
                <Button className="rounded-full px-6 py-3 bg-black border border-white/20 text-[#C5B6E9] hover:bg-white hover:text-black transition">
                    Payouts
                </Button>

                {/* Animated headline with blur-to-clear effect */}
                <motion.h1
                    ref={headlineRef}
                    style={{ filter: blur, opacity }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-4"
                >
                    We’ve Paid Out Over <br />
                    <span className="text-white">$1M to Traders</span>
                </motion.h1>



                <p className="mt-2 text-gray-300 text-sm">
                    Your Trust is Our Fuel—Power Up with Abcd
                </p>

                {/* Counter */}
                <motion.div
                    className="mt-8 text-[4rem] sm:text-[5rem] md:text-[6rem] font-bold bg-gradient-to-r from-gray-100 to-violet-400 text-transparent bg-clip-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {isClient ? `$${count.toLocaleString("en-US")}+` : null}
                </motion.div>

                {/* CTA Button */}
                <Button
                    variant="secondary"
                    className="mt-6 text-white font-semibold bg-black hover:bg-gray-200"
                >
                    Are you Next?
                </Button>

                {/* Scroll-based heading and QR */}
                <div className="mt-20 flex flex-col items-center justify-center px-4">
                    {/* Animated heading */}
                    <div className="overflow-hidden w-full">
                        <motion.h2
                            ref={textRef}
                            style={{ x: smoothX }}
                            className="text-4xl sm:text-5xl font-bold text-center mb-10 whitespace-nowrap"
                        >
                            Trade Anytime, <span className="text-purple-400">Anywhere</span>
                        </motion.h2>
                    </div>

                    {/* QR Card */}
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 60px rgba(168, 85, 247, 0.7)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-44 h-44 bg-white p-2 rounded-xl shadow-xl flex items-center justify-center"
                    >
                        <Image
                            src="/qr-code-framer.webp"
                            alt="QR Code"
                            width={160}
                            height={160}
                            className="rounded-md"
                        />
                    </motion.div>

                    {/* Store Icons */}
                    <div className="mt-6 flex gap-4">
                        <Image
                            src="/play-store.webp"
                            alt="App Store"
                            width={120}
                            height={40}
                            priority // optional: tells Next.js to preload it
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayoutHero;
