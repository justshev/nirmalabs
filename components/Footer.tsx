"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#000000] text-white pt-32 md:pt-48 pb-10 overflow-hidden border-t border-white/5"
      id="contact"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col h-full justify-between">
        {/* Massive Call to Action */}
        <div className="flex flex-col items-start justify-center text-left mb-32 md:mb-64">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] font-black tracking-tighter leading-[0.85] uppercase"
          >
            Start A
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] font-black tracking-tighter leading-[0.85] uppercase text-brand flex items-center gap-6"
          >
            Project
            <svg
              className="w-[8vw] h-[8vw] hidden md:block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16"
          >
            <a
              href="mailto:hello@nirmalabs.com"
              className="inline-block relative group"
            >
              <span className="text-3xl md:text-5xl font-light tracking-tight text-white/80 group-hover:text-white transition-colors">
                hello@nirmalabs.com
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-brand scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
            </a>
          </motion.div>
        </div>

        {/* Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 border-t border-white/10 pt-16">
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
