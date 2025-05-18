"use client";

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function GetFundedSection() {

    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { amount: 0.6 });

    const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

    // Custom scroll direction hook
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDir = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollDir("down");
            } else if (currentScrollY < lastScrollY) {
                setScrollDir("up");
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", updateScrollDir);
        return () => window.removeEventListener("scroll", updateScrollDir);
    }, []);

    return (
        <section className="relative flex flex-col items-center text-center px-4 py-16 bg-[#000000] text-white font-manrope">
            {/* Top Tag Button */}
            <Button
                variant="outline"
                className="mb-4 text-sm rounded-full border-white/30 text-[#C5B6E9] px-4 py-1 hover:bg-white/10"
            >
                Prop Firm
            </Button>

            {/* Heading */}
            <motion.h1
                ref={headingRef}
                key={`${isInView}-${scrollDir}`}
                initial={{ opacity: 0, x: scrollDir === "down" ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-semibold leading-tight mb-4"
            >
                Get Funded Up to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A35CA2] to-[#E6C1FF]">
                    $10,000
                </span>
            </motion.h1>

            {/* Subtext */}
            <p className="text-sm md:text-base text-white/70 max-w-md mb-10">
                Prove your skills, get funded, and trade like a pro.
            </p>

            {/* Looping Video */}
            <div className="w-80 h-80 md:w-[400px] md:h-[400px] mt-1 mb-10 relative rounded-xl overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/Famer-Funded-bg-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>

            {/* CTA Button */}
            <Button className="rounded-full px-6 py-3 bg-black border border-white/20 text-white hover:bg-white hover:text-black transition">
                Get Funded →
            </Button>
        </section>
    );
}
