"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Code, Megaphone, Cpu, Cuboid } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Digital Marketing",
    description:
      "Content planning, strategy, and execution that converts audiences into loyal customers.",
    icon: <Megaphone strokeWidth={1.5} />,
    highlights: ["SEO & SEM", "Social Media", "Content Strategy", "Analytics"],
    delay: 0.1,
  },
  {
    num: "02",
    title: "Software Development",
    description:
      "High-performance web & mobile applications engineered for scalability and seamless user experience.",
    icon: <Code strokeWidth={1.5} />,
    highlights: ["Web Apps", "Mobile Apps", "APIs", "Cloud Solutions"],
    delay: 0.2,
  },
  {
    num: "03",
    title: "AI Engineering",
    description:
      "Custom intelligent software, workflow automation, and machine learning models that redefine efficiency.",
    icon: <Cpu strokeWidth={1.5} />,
    highlights: ["Machine Learning", "Automation", "NLP", "Computer Vision"],
    delay: 0.3,
  },
  {
    num: "04",
    title: "3D Production",
    description:
      "High-fidelity 3D modeling and production for immersive product showcases and cinematic media.",
    icon: <Cuboid strokeWidth={1.5} />,
    highlights: ["3D Modeling", "Animation", "Visualization", "AR/VR"],
    delay: 0.4,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-48 relative overflow-hidden bg-[#050505]"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-brand/[0.03] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-brand/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start md:items-end mb-24 md:mb-32">
          <AnimatedSection className="max-w-2xl">
            <p className="text-brand font-bold tracking-widest uppercase text-sm mb-6">
              What We Do
            </p>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 leading-tight">
              Our <span className="font-bold">Expertise.</span>
            </h2>
            <p className="text-lg md:text-2xl text-white/50 font-light">
              End-to-end digital solutions engineered to drive growth. Focus on
              your business — we handle the rest.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="hidden md:block">
            <a
              href="#projects"
              className="group flex items-center gap-4 text-white hover:text-brand transition-colors text-lg uppercase tracking-widest font-semibold border-b border-white/20 pb-2 hover:border-brand"
            >
              See the Results
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </a>
          </AnimatedSection>
        </div>

        {/* Service Cards */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={service.delay}>
              <motion.div
                className="group relative border-t border-white/[0.06] last:border-b"
                whileHover="hover"
              >
                {/* Hover background glow */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-brand/[0.03] via-brand/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0 py-10 md:py-14 cursor-pointer">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-6 lg:w-[120px] shrink-0">
                    <span className="text-white/20 font-mono text-sm tracking-widest group-hover:text-brand/60 transition-colors duration-500">
                      {service.num}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/40 group-hover:text-brand group-hover:border-brand/30 group-hover:bg-brand/[0.08] transition-all duration-500 group-hover:scale-110">
                      <div className="w-5 h-5">{service.icon}</div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="lg:flex-1 lg:pl-8">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white group-hover:text-brand transition-colors duration-500">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description + Highlights */}
                  <div className="lg:w-[420px] lg:pl-8 flex flex-col gap-5">
                    <p className="text-white/40 text-base leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/[0.06] text-white/30 group-hover:border-brand/20 group-hover:text-brand/70 group-hover:bg-brand/[0.04] transition-all duration-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center justify-end lg:w-[80px] shrink-0">
                    <motion.div
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:border-brand group-hover:text-brand transition-all duration-500"
                      variants={{
                        hover: { x: 4, scale: 1.1 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
