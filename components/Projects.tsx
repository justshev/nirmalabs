"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "E-Commerce Reimagined",
    category: "Web Design & Development",
    color: "#B4E50D",
    client: "Artemis & Co.",
  },
  {
    title: "Automated Workflow System",
    category: "AI Engineering",
    color: "#ffffff",
    client: "Nexus Global",
  },
  {
    title: "Future of Branding",
    category: "Digital Marketing",
    color: "#555555",
    client: "Studio Vertex",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="projects"
      className="py-24 md:py-48 bg-[#050505] relative overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-32 md:mb-48 border-t border-white/10 pt-16">
          <AnimatedSection>
            <h2 className="text-[10vw] md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase text-white">
              Selected{" "}
              <span className="text-brand italic font-light">Work</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-between gap-12 md:gap-24`}
            >
              <AnimatedSection className="w-full md:w-3/5">
                <div className="group relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-[#0A0A0A] border border-white/5">
                  <div
                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000 blur-[80px] mix-blend-screen"
                    style={{ backgroundColor: project.color }}
                  />

                  {/* Highly geometric mock representation */}
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <motion.div
                      style={{ y, rotate: index % 2 === 0 ? 5 : -5 }}
                      className="w-full h-full border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-[1.5s]"
                    >
                      <h3 className="text-[15vw] font-black text-white/5 uppercase select-none whitespace-nowrap leading-none absolute">
                        {project.title.substring(0, 3)}
                      </h3>
                    </motion.div>
                  </div>

                  <div className="absolute inset-0 border border-transparent group-hover:border-white/10 transition-colors duration-700 pointer-events-none" />
                </div>
              </AnimatedSection>

              <AnimatedSection
                delay={0.2}
                className="w-full md:w-2/5 flex flex-col justify-center"
              >
                <div className="flex items-center gap-6 mb-8 text-white/40 font-mono text-sm tracking-widest uppercase">
                  <span>No. {String(index + 1).padStart(2, "0")}</span>
                  <span className="w-px h-4 bg-white/20"></span>
                  <span>{project.category}</span>
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight leading-[1.1]">
                  {project.title}
                </h3>

                <p className="text-white/60 text-lg leading-relaxed font-light mb-12">
                  A comprehensive digital solution involving strategy,
                  execution, and continuous optimization designed specifically
                  for {project.client}.
                </p>

                <a
                  href="#"
                  className="flex items-center gap-4 group font-medium text-brand text-lg uppercase tracking-wide"
                >
                  Explore Case Study
                  <span className="w-8 h-px bg-brand group-hover:w-16 transition-all duration-300"></span>
                </a>
              </AnimatedSection>
            </div>
          ))}
        </div>

        {/* CTA - More Works */}
        <AnimatedSection delay={0.2} className="mt-32 md:mt-48">
          <div className="relative group">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-brand/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <a
              href="#"
              className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border border-white/10 group-hover:border-brand/40 p-10 md:p-16 transition-all duration-500 overflow-hidden"
            >
              {/* Background text decoration */}
              <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] group-hover:text-brand/[0.05] leading-none pointer-events-none select-none transition-colors duration-700 hidden md:block">
                →
              </span>

              <div className="relative z-10 flex flex-col gap-4">
                <span className="text-brand font-bold tracking-widest uppercase text-sm">
                  Want to see more?
                </span>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white group-hover:text-brand transition-colors duration-500">
                  Explore All Works
                </h3>
                <p className="text-white/40 text-lg font-light max-w-md">
                  Discover our full portfolio of digital experiences, brands,
                  and products we&apos;ve brought to life.
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-6">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white/20 group-hover:border-brand flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <motion.svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-brand transition-colors duration-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </motion.svg>
                </div>
              </div>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
