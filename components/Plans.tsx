"use client";

import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import PricingCard from "@/components/PricingCard"; // Make sure the path is correct

// Animation variants for each word
const blurWordVariants = {
    hidden: { opacity: 0, filter: "blur(8px)", x: -10 },
    visible: (i: number) => ({
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: i * 0.15,
        },
    }),
};

// Your pricing data
const plansData = [
    {
        title: "Abcd Vintage",
        description: "Perfect for balanced, all-level traders looking for consistency and solid growth.",
        price: "$100",
        risk: "Moderate",
        features: [
            "from 0.2 pips",
            "No Commission",
            "1-Unlimited leverage",
            "0.01 Minimum Lot Size",
            "200 trades during peak hours",
            "Unlimited open positions",
            "0% Stop Out",
            "30% Margin Call",
            "0% Swap",
            "Forex, Crypto, Stocks, Commodities, Indices",
        ],
    },
    {
        title: "Abcd Cent",
        description: "Designed for beginners ready to step into the trading world with minimal risk.",
        price: "$10",
        risk: "Low",
        features: [
            "from 0.3 pips",
            "Zero Commission",
            "1-Unlimited leverage",
            "0.01 Minimum Lot Size",
            "200 trades during peak hours",
            "Unlimited open positions",
            "0% Stop Out",
            "30% Margin Call",
            "0% Swap",
            "Forex, Crypto, Stocks, Commodities, Indices",
        ],
    },
    {
        title: "Abcd Pro",
        description: "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
        price: "$500",
        risk: "High",
        features: [
            "from 0.1 pips",
            "No Commission",
            "1-Unlimited leverage",
            "0.01 Minimum Lot Size",
            "200 trades during peak hours",
            "Unlimited open positions",
            "0% Stop Out",
            "30% Margin Call",
            "0% Swap",
            "Forex, Crypto, Stocks, Commodities, Indices",
        ],
    },
];

export default function Plans() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const heading = "Start Small, Scale Big".split(" ");

    return (
        <div className="flex justify-center items-center flex-col text-center px-4 py-10 font-manrope">
            <Button className="text-base px-6 py-5 m-3 text-[#C5B6E9] rounded-3xl" variant="outline">
                Compare Plans
            </Button>

            <div ref={ref} className="mt-4">
                <h2 className="text-2xl md:text-6xl font-semibold text-white flex flex-wrap justify-center gap-x-2">
                    {heading.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={blurWordVariants}
                            className={word === "Scale" ? "text-[#A35CA2]" : ""}
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-3 text-lg text-gray-300"
                >
                    Flexible Deposits for Every Trader
                </motion.p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="flex flex-col md:flex-row gap-0">
                {plansData.map((plan, index) => (
                    <PricingCard
                        key={plan.title}
                        {...plan}
                        className={
                            index === 0
                                ? "rounded-l-2xl"
                                : index === plansData.length - 1
                                    ? "rounded-r-2xl"
                                    : "rounded-none"
                        }
                    />
                ))}
            </div>

        </div>
    );
}
