"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] selection:bg-brand selection:text-black pt-20">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
                        `,
            backgroundSize: "70px 70px",
          }}
        />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(180,229,13,0.15) 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
            backgroundPosition: "35px 35px",
          }}
        />
        {/* Brand-colored accent grid lines (sparse) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                            linear-gradient(rgba(180,229,13,0.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(180,229,13,0.07) 1px, transparent 1px)
                        `,
            backgroundSize: "280px 280px",
          }}
        />
        {/* Radial fade — softer so grid stays visible in center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_80%)]" />
      </div>

      {/* Animated horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(180,229,13,0.2), rgba(180,229,13,0.4), rgba(180,229,13,0.2), transparent)",
        }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Animated diagonal accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "200%", opacity: [0, 0.25, 0.25, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "linear",
          }}
          className="absolute top-[20%] w-[200%] h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent rotate-[15deg]"
        />
        <motion.div
          initial={{ x: "200%", opacity: 0 }}
          animate={{ x: "-100%", opacity: [0, 0.15, 0.15, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "linear",
            delay: 3,
          }}
          className="absolute top-[65%] w-[200%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent -rotate-[10deg]"
        />
      </div>

      {/* Floating particles — bigger and brighter */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: "15%", left: "10%", size: 5, delay: 0, duration: 6 },
          { top: "25%", left: "85%", size: 4, delay: 1, duration: 8 },
          { top: "70%", left: "20%", size: 4, delay: 2, duration: 7 },
          { top: "80%", left: "75%", size: 5, delay: 0.5, duration: 5 },
          { top: "45%", left: "92%", size: 3, delay: 3, duration: 9 },
          { top: "55%", left: "5%", size: 3, delay: 1.5, duration: 6.5 },
          { top: "35%", left: "50%", size: 4, delay: 2.5, duration: 7.5 },
          { top: "60%", left: "65%", size: 3, delay: 0.8, duration: 6 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand shadow-[0_0_8px_rgba(180,229,13,0.5)]"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Refined subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-brand/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      {/* Corner accent glow */}
      <div className="absolute -top-20 -right-20 w-[40vw] h-[40vw] bg-brand/[0.06] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[30vw] h-[30vw] bg-brand/[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-0 w-full"
        >
          <motion.div
            variants={itemVariants}
            className="overflow-hidden w-full"
          >
            <h1 className="text-[12vw] leading-[0.85] tracking-tighter font-black text-white uppercase text-left">
              The <span className="text-brand">Digital</span>
            </h1>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="overflow-hidden w-full flex justify-end"
          >
            <h1 className="text-[12vw] leading-[0.85] tracking-tighter font-black text-white uppercase text-right">
              Agency That
            </h1>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="overflow-hidden w-full"
          >
            <h1 className="text-[12vw] leading-[0.85] tracking-tighter font-black text-white uppercase text-left flex items-center gap-4 md:gap-8">
              <span className="h-[2px] w-[15vw] bg-white/30 hidden md:block"></span>
              <span className="italic font-light opacity-90">Delivers.</span>
            </h1>
          </motion.div>

          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-16 md:mt-24 gap-8">
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl text-white/50 max-w-xl font-light leading-relaxed"
            >
              We drive commercial results by fusing intelligent systemic
              engineering with world-class, premium aesthetic design.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-6">
              <a
                href="#projects"
                className="rounded-full bg-brand text-black font-bold px-10 py-5 text-sm md:text-base hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(180,229,13,0.3)]"
              >
                Selected Works
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/20 text-white font-semibold px-10 py-5 text-sm md:text-base hover:bg-white hover:text-black transition-colors duration-300 hidden sm:block"
              >
                Our Capabilities
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
