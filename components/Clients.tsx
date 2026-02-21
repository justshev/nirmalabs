"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
    { value: "250+", label: "Successful projects" },
    { value: "10+", label: "Years experience" },
    { value: "5 ★", label: "Google rating" },
    { value: "$50M", label: "Client revenue" },
];

export default function Clients() {
    return (
        <section className="py-24 md:py-48 bg-brand text-black overflow-hidden relative" id="clients">

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <AnimatedSection className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] uppercase">
                        Numbers that <br className="hidden md:block" /> <span className="font-light italic">speak volumes</span>
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 border-t border-b border-black/10 py-16">
                    {stats.map((stat, index) => (
                        <AnimatedSection
                            key={index}
                            delay={index * 0.1}
                            className={`flex flex-col items-center justify-center ${index !== stats.length - 1 ? "md:border-r md:border-black/10" : ""}`}
                        >
                            <span className="text-6xl md:text-[7rem] font-bold mb-4 tracking-tighter leading-none">{stat.value}</span>
                            <span className="text-sm md:text-base font-medium tracking-widest uppercase opacity-60">{stat.label}</span>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

            {/* Marquee Banner Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black py-5 flex items-center whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="flex gap-16 text-white uppercase tracking-widest text-sm font-bold items-center"
                >
                    {Array(10).fill(0).map((_, i) => (
                        <span key={i} className="flex items-center gap-16">
                            <span>Nirmalabs Partners</span>
                            <span className="text-brand">✺</span>
                        </span>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}
