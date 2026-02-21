"use client";

import AnimatedSection from "./AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Highlights() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section id="about" className="py-24 md:py-48 bg-[#050505] relative overflow-hidden text-white border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12" ref={containerRef}>

                {/* About Headline */}
                <AnimatedSection className="max-w-4xl mb-24 md:mb-40">
                    <p className="text-brand font-bold tracking-widest uppercase text-sm mb-6">About Us</p>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.2]">
                        We're Nirmalabs. A digital collective driven by <span className="font-bold">profit-enhancing design</span>, intelligent <span className="font-bold">software engineering</span>, and immersive <span className="font-bold">3D production</span>.
                    </h2>
                </AnimatedSection>

                {/* Vision, Mission, Motivation Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">

                    <AnimatedSection delay={0.1} className="bg-white/[0.02] border border-white/5 p-10 md:p-14 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                        <h3 className="text-2xl font-bold mb-6 relative z-10 text-white group-hover:text-brand transition-colors">
                            Vision
                        </h3>
                        <p className="text-white/60 text-lg leading-relaxed relative z-10 font-light">
                            To be the pinnacle of digital transformation, crafting experiences that blur the lines between technology, art, and commerce. We want to redefine 'outstanding'.
                        </p>
                        <span className="absolute -bottom-10 -right-4 text-[12rem] font-black text-white/[0.02] leading-none pointer-events-none group-hover:text-white/[0.04] transition-colors duration-500">01</span>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} className="bg-brand text-black p-10 md:p-14 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">
                                Mission
                            </h3>
                            <p className="text-black/80 text-lg leading-relaxed font-medium">
                                Delivering high-performance, aesthetically premium digital solutions. From robust SEO to complex AI automation, we build platforms that scale your business.
                            </p>
                        </div>
                        {/* Decorative background element */}
                        <motion.div
                            style={{ y, rotate }}
                            className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 blur-3xl rounded-full mix-blend-overlay"
                        />
                        <span className="absolute -bottom-10 -right-4 text-[12rem] font-black text-black/[0.05] leading-none pointer-events-none">02</span>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3} className="bg-white/[0.02] border border-white/5 p-10 md:p-14 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                        <h3 className="text-2xl font-bold mb-6 relative z-10 text-white group-hover:text-brand transition-colors">
                            Motivation
                        </h3>
                        <p className="text-white/60 text-lg leading-relaxed relative z-10 font-light">
                            We seek perfection in performance and aesthetics. Every pixel, every line of code, and every model is an opportunity to outdo ourselves for our clients.
                        </p>
                        <span className="absolute -bottom-10 -right-4 text-[12rem] font-black text-white/[0.02] leading-none pointer-events-none group-hover:text-white/[0.04] transition-colors duration-500">03</span>
                    </AnimatedSection>

                </div>
            </div>
        </section>
    );
}
