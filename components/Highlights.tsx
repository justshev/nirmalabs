"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PreviewKind =
  | "phones"
  | "cubes"
  | "editorial"
  | "device"
  | "identity"
  | "profile";

type FeaturedWork = {
  title: string;
  label: string;
  disciplines: string;
  summary: string;
  year: string;
  preview: PreviewKind;
  size: "compact" | "wide" | "hero";
  palette: string;
};

const featuredWorks: FeaturedWork[] = [
  {
    title: "Pulse Run",
    label: "Mobile Product",
    disciplines: "PRODUCT / MOBILE / UI",
    summary:
      "A cleaner, calmer health app system designed around pace, clarity, and retention.",
    year: "2025",
    preview: "phones",
    size: "wide",
    palette: "#4a4f47",
  },
  {
    title: "Kacha",
    label: "3D Packaging",
    disciplines: "BRAND / 3D / MOTION",
    summary:
      "Packaging studies and motion-ready assets for a launch that needed warmth and memorability.",
    year: "2025",
    preview: "cubes",
    size: "wide",
    palette: "#e28371",
  },
  {
    title: "Mavence",
    label: "Campaign System",
    disciplines: "BRAND / WEB / CAMPAIGN",
    summary:
      "An editorial rollout balancing high-contrast messaging with a softer premium visual system.",
    year: "2024",
    preview: "editorial",
    size: "compact",
    palette: "#b4e50d",
  },
  {
    title: "Moda",
    label: "3D Direction",
    disciplines: "3D / BRAND / GRAPHIC",
    summary:
      "A monochrome visual identity anchored by product renders, motion depth, and sharper typography.",
    year: "2024",
    preview: "device",
    size: "hero",
    palette: "#1a1a1a",
  },
  {
    title: "Therapeutic",
    label: "Identity Refresh",
    disciplines: "BRAND / UI / MOTION",
    summary:
      "A blue-led identity system with modular layouts, UI foundations, and flexible campaign assets.",
    year: "2024",
    preview: "identity",
    size: "wide",
    palette: "#465eff",
  },
  {
    title: "Atlas ID",
    label: "Profile System",
    disciplines: "GRAPHIC / SYSTEM / UI",
    summary:
      "A profile-first card system tuned for recognition, quick scanning, and cleaner information hierarchy.",
    year: "2023",
    preview: "profile",
    size: "compact",
    palette: "#0f817a",
  },
];

const sizeClasses: Record<FeaturedWork["size"], string> = {
  compact: "w-[76vw] sm:w-[60vw] md:w-[20rem] lg:w-[22rem]",
  wide: "w-[84vw] sm:w-[66vw] md:w-[24rem] lg:w-[26rem]",
  hero: "w-[88vw] sm:w-[70vw] md:w-[27rem] lg:w-[30rem]",
};

const boxLayouts = [
  "left-[8%] top-[14%]",
  "left-[34%] top-[6%]",
  "left-[60%] top-[16%]",
  "left-[18%] top-[42%]",
  "left-[50%] top-[38%]",
  "left-[8%] top-[68%]",
  "left-[34%] top-[74%]",
  "left-[62%] top-[66%]",
];

function WorkPreview({ preview }: { preview: PreviewKind }) {
  if (preview === "phones") {
    return (
      <div className="absolute inset-0 bg-[#454943]">
        <div className="absolute inset-x-10 bottom-6 top-8 flex items-end justify-center gap-4">
          {[0, 1, 2].map((phone) => (
            <div
              key={phone}
              className="relative h-[78%] w-[31%] rounded-[2rem] border border-white/20 bg-[#2f322d] p-2 shadow-[0_22px_50px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute left-1/2 top-3 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/12" />
              <div className="flex h-full flex-col gap-2 rounded-[1.4rem] bg-[#1f2220] px-3 py-6">
                <div className="space-y-1">
                  <div className="h-2.5 w-20 rounded-full bg-[#cad984]/90" />
                  <div className="h-1.5 w-14 rounded-full bg-white/25" />
                </div>
                <div className="flex-1 space-y-2 pt-2">
                  {[0, 1, 2, 3].map((row) => (
                    <div
                      key={row}
                      className={cn(
                        "rounded-2xl border border-white/6 bg-white/5 px-3 py-2.5",
                        phone === 2 && row === 1 && "bg-[#cad984]/14",
                      )}
                    >
                      <div className="h-1.5 w-full rounded-full bg-white/12" />
                      <div className="mt-2 h-1.5 w-2/3 rounded-full bg-white/8" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((dot) => (
                    <div
                      key={dot}
                      className={cn(
                        "h-8 rounded-full bg-white/7",
                        phone === 2 && dot === 1 && "bg-[#cad984]",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (preview === "cubes") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#efe2d5]">
        {boxLayouts.map((position, index) => (
          <div
            key={position}
            className={cn(
              "absolute h-28 w-28 rounded-[1.75rem] border border-[#d17466] bg-[#e28573] p-4 text-white shadow-[0_22px_50px_rgba(171,95,82,0.22)]",
              position,
              index % 2 === 0 ? "rotate-[10deg]" : "-rotate-[8deg]",
            )}
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/70">
                <span>Ka</span>
                <span>25</span>
              </div>
              <div className="space-y-2">
                <div className="h-7 w-7 rounded-lg border border-white/60" />
                <div className="h-1.5 w-16 rounded-full bg-white/80" />
                <div className="h-1.5 w-11 rounded-full bg-white/45" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (preview === "editorial") {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#eef0ed] via-[#f5f5f2] to-[#d8ddd7] p-6">
        <div className="grid h-full grid-cols-3 gap-3">
          <div className="rounded-[2rem] bg-[#dbe0da]" />
          <div className="rounded-[2rem] bg-[#eff1eb] p-4">
            <div className="text-[1.85rem] font-medium leading-none tracking-tight text-[#2d473f]">
              fast trades
            </div>
            <div className="mt-2 text-[0.72rem] uppercase tracking-[0.25em] text-[#48685f]/70">
              future of trading
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#ebeddf] p-4 text-right">
            <div className="text-[3.2rem] font-light leading-none tracking-[-0.08em] text-[#2d473f]">
              01
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#d7ec63] p-4">
            <div className="h-full rounded-[1.4rem] border border-black/8 bg-[#b4e50d] p-4">
              <div className="text-[2.2rem] font-light leading-none tracking-tight text-white">
                mavence
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#315148] p-4">
            <div className="text-[2.25rem] font-medium leading-none tracking-tight text-[#eff1eb]">
              zero friction
            </div>
            <div className="mt-4 flex items-center gap-2">
              {[0, 1, 2].map((circle) => (
                <div
                  key={circle}
                  className="h-8 w-8 rounded-full bg-[#d7ec63]"
                />
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#f4f4f1] p-4">
            <div className="space-y-3">
              <div className="h-3 w-20 rounded-full bg-[#315148]/15" />
              <div className="h-3 w-28 rounded-full bg-[#315148]/10" />
              <div className="grid grid-cols-2 gap-2 pt-3">
                {[0, 1, 2, 3].map((tile) => (
                  <div
                    key={tile}
                    className={cn(
                      "h-16 rounded-2xl border border-black/5",
                      tile === 1 ? "bg-[#d7ec63]" : "bg-[#e4e6df]",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (preview === "device") {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_top_right,#6d6b6e_0%,#3b393d_36%,#1b1a1d_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.15),transparent_35%)]" />
        <div className="absolute -left-[5%] top-[18%] h-[70%] w-[115%] rounded-[3rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] opacity-30 blur-[2px]" />
        <div className="absolute left-1/2 top-[12%] h-[78%] w-[44%] -translate-x-1/2 rotate-[24deg] rounded-[2.6rem] border border-white/15 bg-[#0e0e10] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
          <div className="absolute left-1/2 top-3 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/12" />
          <div className="flex h-full flex-col rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,#0c0c0d_0%,#141416_100%)] px-5 py-8">
            <div className="text-[2.5rem] font-semibold uppercase leading-none tracking-[-0.08em] text-white">
              moda
            </div>
            <div className="mt-auto">
              <div className="mx-auto h-28 w-28 rounded-full border border-white/10 bg-[conic-gradient(from_90deg,#25262b_0deg,#61656d_120deg,#1c1d21_220deg,#44484f_360deg)]" />
              <div className="mt-6 space-y-2">
                <div className="h-2 w-28 rounded-full bg-white/25" />
                <div className="h-2 w-20 rounded-full bg-white/12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (preview === "identity") {
    return (
      <div className="absolute inset-0 bg-[#d9deff] p-5">
        <div className="grid h-full grid-cols-3 gap-3">
          <div className="col-span-2 rounded-[2rem] bg-white p-4">
            <div className="flex h-full items-center justify-between gap-4 rounded-[1.5rem] border border-[#465eff]/10 px-4">
              <div className="space-y-2">
                <div className="h-3 w-28 rounded-full bg-[#111c55]/20" />
                <div className="h-12 w-12 rounded-2xl bg-[#465eff]" />
              </div>
              <div className="h-16 w-16 rounded-full bg-[#0f1a4d]" />
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#0f1a4d] p-4 text-white">
            <div className="text-xl font-medium tracking-tight">Mulish</div>
            <div className="mt-3 flex gap-2 text-[11px] uppercase tracking-[0.24em] text-white/60">
              <span>Bold</span>
              <span>Light</span>
            </div>
          </div>
          {[0, 1, 2, 3, 4, 5].map((panel) => (
            <div
              key={panel}
              className={cn(
                "rounded-[2rem] p-4",
                panel % 2 === 0 ? "bg-[#465eff] text-white" : "bg-white",
              )}
            >
              <div className="space-y-3">
                <div
                  className={cn(
                    "h-3 rounded-full",
                    panel % 2 === 0 ? "bg-white/30" : "bg-[#111c55]/10",
                  )}
                />
                <div
                  className={cn(
                    "h-16 rounded-[1.3rem]",
                    panel % 2 === 0 ? "bg-white/12" : "bg-[#d9deff]",
                  )}
                />
                <div
                  className={cn(
                    "h-3 w-2/3 rounded-full",
                    panel % 2 === 0 ? "bg-white/20" : "bg-[#111c55]/12",
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0d7a76]">
      <div className="absolute -right-10 top-6 h-72 w-72 rounded-full border border-white/16" />
      <div className="absolute -right-[4.5rem] bottom-8 h-96 w-96 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-[10%] h-16 w-14 -translate-x-1/2 rounded-b-xl bg-[#dad4c5] shadow-[0_10px_20px_rgba(0,0,0,0.18)]" />
      <div className="absolute left-1/2 top-[18%] h-[58%] w-[44%] -translate-x-1/2 rounded-[2.2rem] bg-[#f7f5ef] p-4 shadow-[0_25px_55px_rgba(0,0,0,0.18)]">
        <div className="rounded-[1.8rem] bg-[#bdf548] p-4">
          <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.26em] text-[#0d7a76]/70">
            <span>Atlas</span>
            <span>2023</span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-24 w-20 rounded-[1.4rem] bg-[#0d7a76]" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-full rounded-full bg-[#0d7a76]/25" />
              <div className="h-3 w-4/5 rounded-full bg-[#0d7a76]/18" />
              <div className="h-10 rounded-2xl bg-[#0d7a76]/10" />
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-[1.6rem] bg-[#0d7a76] p-4 text-white">
          <div className="text-lg font-medium tracking-tight">James Gunn</div>
          <div className="mt-1 text-xs uppercase tracking-[0.28em] text-white/60">
            Product Manager
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Highlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [hasMeasured, setHasMeasured] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const stickyEnabled = false;
  const carouselHeightClass =
    "min-h-[360px] sm:min-h-[400px] md:min-h-[470px] lg:min-h-[500px]";

  useEffect(() => {
    if (!stickyEnabled) {
      return;
    }

    const updateMeasurements = () => {
      const viewportWidth =
        viewportRef.current?.clientWidth ?? window.innerWidth;
      const contentWidth = trackRef.current?.scrollWidth ?? 0;
      setScrollDistance(Math.max(0, contentWidth - viewportWidth));
      setHasMeasured(true);
    };

    updateMeasurements();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => updateMeasurements())
        : null;

    if (viewportRef.current && resizeObserver) {
      resizeObserver.observe(viewportRef.current);
    }

    if (trackRef.current && resizeObserver) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", updateMeasurements);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateMeasurements);
    };
  }, [stickyEnabled]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#f4f0e8] text-[#050505]"
      style={
        stickyEnabled
          ? {
              height: hasMeasured
                ? `calc(100vh + ${scrollDistance}px)`
                : "240vh",
            }
          : undefined
      }
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#050505_0%,rgba(5,5,5,0.68)_30%,rgba(5,5,5,0)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#050505_0%,rgba(5,5,5,0.68)_30%,rgba(5,5,5,0)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,17,17,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(17,17,17,0.09) 0.8px, transparent 0.8px)",
            backgroundSize: "28px 28px",
            backgroundPosition: "14px 14px",
          }}
        />
        <div className="absolute -top-24 right-[-8%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(180,229,13,0.18)_0%,rgba(180,229,13,0.06)_35%,rgba(180,229,13,0)_72%)] blur-[80px]" />
        <div className="absolute -bottom-28 left-[-10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(17,17,17,0.14)_0%,rgba(17,17,17,0.05)_38%,rgba(17,17,17,0)_72%)] blur-[90px]" />
      </div>

      <div
        className={cn(
          stickyEnabled
            ? "sticky top-0 z-10 h-screen overflow-hidden"
            : "relative z-10 overflow-hidden py-28 md:py-36",
        )}
      >
        <div className="mx-auto grid h-full max-w-[1600px] grid-rows-[auto_auto_minmax(0,1fr)] px-6 pb-8 pt-24 md:px-12 md:pb-10 md:pt-28">
          <div className="grid gap-10 border-b border-black/10 pb-8 md:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.9fr)] md:gap-14 md:pb-10">
            <div>
              <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-black/45">
                Featured Works
              </p>
              <h2 className="max-w-[24ch] text-balance text-[clamp(2.4rem,5vw,4.8rem)] font-light leading-[0.95] tracking-[-0.05em] text-[#111111] md:max-w-[20ch]">
                Selected work with sharper structure and cleaner pacing.
              </h2>
            </div>

            <div className="flex flex-col justify-end gap-7 md:max-w-xl md:pb-2">
              <p className="max-w-[32rem] text-lg leading-[1.5] text-black/68 md:text-[1.35rem] md:leading-[1.36]">
                A tighter rail of product, brand, and motion work. Each card is
                structured to make the title, focus area, and project context
                easier to scan at a glance.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  View all work
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full border border-black/12 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-colors duration-300 hover:border-black/40 hover:bg-black/5"
                >
                  Start a project
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 py-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-black/46 md:text-[0.78rem]">
            <span>Based in Yogyakarta, Indonesia</span>
            <span className="justify-self-center text-black/28">-</span>
            <span className="justify-self-end text-right">Curated rail</span>
          </div>

          <div
            ref={viewportRef}
            className={cn(
              "relative min-h-0",
              carouselHeightClass,
              stickyEnabled
                ? "overflow-hidden"
                : "overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            )}
          >
            <motion.div
              ref={trackRef}
              style={stickyEnabled ? { x } : undefined}
              className="flex h-full items-stretch gap-5 pr-6 md:gap-7 md:pr-12"
            >
              {featuredWorks.map((work, index) => (
                <article
                  key={work.title}
                  className={cn(
                    "group flex h-full shrink-0 flex-col",
                    sizeClasses[work.size],
                  )}
                >
                  <div className="relative flex-1 overflow-hidden rounded-[2rem] border border-black/7 bg-white/88 shadow-[0_10px_30px_rgba(15,15,15,0.04)] transition-transform duration-500 group-hover:-translate-y-1">
                    <div
                      className="relative h-full min-h-[320px] overflow-hidden rounded-[2rem] border border-black/6"
                      style={{
                        backgroundColor: `${work.palette}18`,
                      }}
                    >
                      <WorkPreview preview={work.preview} />
                      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2">
                        <span className="rounded-full bg-white/88 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-black/55 shadow-[0_8px_24px_rgba(255,255,255,0.45)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="rounded-full border border-white/65 bg-white/35 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-black/55 backdrop-blur-sm">
                          {work.label}
                        </span>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-black/4 transition duration-500 group-hover:ring-black/12" />
                    <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                    <div
                      className="absolute inset-x-0 bottom-0 h-24"
                      style={{
                        background: `linear-gradient(180deg, transparent 0%, ${work.palette}22 100%)`,
                      }}
                    />
                  </div>

                  <div className="mt-4 rounded-[1.4rem] border border-black/7 bg-white/58 px-4 py-4 backdrop-blur-sm md:px-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="max-w-[18rem]">
                        <div className="text-[clamp(1.85rem,2.35vw,2.55rem)] font-medium leading-[0.94] tracking-[-0.05em] text-[#101010]">
                          {work.title}
                        </div>
                        <p className="mt-2 text-[0.94rem] leading-6 text-black/58 md:text-[0.98rem]">
                          {work.summary}
                        </p>
                      </div>
                      <div className="pt-1 text-right text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-black/38">
                        <div>{work.year}</div>
                        <div className="mt-2 text-black/28">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-black/8 pt-4">
                      <span className="rounded-full bg-black/[0.03] px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-black/55">
                        {work.label}
                      </span>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-black/42">
                        {work.disciplines}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
