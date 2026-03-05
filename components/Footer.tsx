"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { ArrowRight } from "lucide-react";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

const floatingImages = [
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    alt: "Dashboard analytics",
  },
  {
    url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2574&auto=format&fit=crop",
    alt: "Mobile app design",
  },
  {
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    alt: "Code on screen",
  },
  {
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    alt: "Abstract 3D art",
  },
  {
    url: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2564&auto=format&fit=crop",
    alt: "Creative workspace",
  },
  {
    url: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2670&auto=format&fit=crop",
    alt: "React code",
  },
  {
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
    alt: "Digital matrix",
  },
  {
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
    alt: "3D abstract shapes",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "img",
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.15) },
    );
  }, [animate]);

  return (
    <footer
      className="relative overflow-hidden border-t border-white/5 bg-[#000000] pb-10 text-white"
      id="contact"
    >
      <div className="mb-24 md:mb-40">
        <div
          className="relative flex min-h-[700px] w-full items-center justify-center overflow-hidden bg-transparent"
          ref={scope}
        >
          {/* Subtle radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-brand/[0.06] blur-[120px] rounded-full pointer-events-none" />

          {/* CTA Content */}
          <motion.div
            className="z-50 text-center space-y-8 items-center flex flex-col px-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.88, delay: 0.3 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
              Start With{" "}
              <span className="text-brand italic font-light">Us</span>
            </h2>
            <p className="text-white/50 text-lg md:text-xl font-light max-w-xl leading-relaxed">
              Ready to elevate your digital presence? Let&apos;s build something
              extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="mailto:hello@nirmalabs.com"
                className="group rounded-full bg-brand text-black font-bold px-10 py-5 text-sm md:text-base hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(180,229,13,0.3)] flex items-center gap-3"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white/20 text-white font-semibold px-10 py-5 text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3"
              >
                Explore Projects
              </a>
            </div>
          </motion.div>

          {/* Parallax Floating Images */}
          <Floating sensitivity={-1} className="overflow-hidden">
            <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
              <motion.img
                initial={{ opacity: 0 }}
                src={floatingImages[0].url}
                alt={floatingImages[0].alt}
                className="w-16 h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </FloatingElement>
            <FloatingElement depth={1} className="top-[10%] left-[32%]">
              <motion.img
                initial={{ opacity: 0 }}
                src={floatingImages[1].url}
                alt={floatingImages[1].alt}
                className="w-20 h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </FloatingElement>
            <FloatingElement depth={2} className="top-[2%] left-[53%]">
              <motion.img
                initial={{ opacity: 0 }}
                src={floatingImages[2].url}
                alt={floatingImages[2].alt}
                className="w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </FloatingElement>
            <FloatingElement depth={1} className="top-[0%] left-[83%]">
              <motion.img
                initial={{ opacity: 0 }}
                src={floatingImages[3].url}
                alt={floatingImages[3].alt}
                className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </FloatingElement>
            <FloatingElement depth={1} className="top-[40%] left-[2%]">
              <motion.img
                initial={{ opacity: 0 }}
                src={floatingImages[4].url}
                alt={floatingImages[4].alt}
                className="w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </FloatingElement>
            <FloatingElement depth={2} className="top-[70%] left-[77%]">
              <motion.img
                initial={{ opacity: 0 }}
                src={floatingImages[5].url}
                alt={floatingImages[5].alt}
                className="w-28 h-28 md:w-36 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </FloatingElement>
            <FloatingElement depth={4} className="top-[73%] left-[15%]">
              <motion.img
                initial={{ opacity: 0 }}
                src={floatingImages[6].url}
                alt={floatingImages[6].alt}
                className="w-40 md:w-52 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </FloatingElement>
            <FloatingElement depth={1} className="top-[80%] left-[50%]">
              <motion.img
                initial={{ opacity: 0 }}
                src={floatingImages[7].url}
                alt={floatingImages[7].alt}
                className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </FloatingElement>
          </Floating>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 md:px-12">
        <div className="mb-20 text-center">
          <a
            href="mailto:hello@nirmalabs.com"
            className="inline-block relative group"
          >
            <span className="text-3xl font-light tracking-tight text-white/80 transition-colors group-hover:text-white md:text-5xl">
              hello@nirmalabs.com
            </span>
            <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100"></span>
          </a>
        </div>

        {/* Footer Links & Info */}
        <div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-16 md:grid-cols-4 md:gap-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.svg" alt="Nirmalabs" width={32} height={32} />
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed font-light">
              An independent digital agency focusing on elite marketing, design,
              and intelligent software solutions globally.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-brand">
              Connect
            </h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter (X)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-brand">
              Location
            </h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li>Jakarta, Indonesia</li>
              <li>South Quarter, Tower A</li>
              <li className="pt-4">+62 812 3456 7890</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/40 text-xs tracking-widest uppercase gap-4 font-semibold">
          <p>&copy; {currentYear} Nirmalabs. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
