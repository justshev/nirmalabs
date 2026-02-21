"use client";

import AnimatedSection from "./AnimatedSection";

const team = [
    {
        name: "Alex",
        role: "Digital Marketing Director",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Sarah",
        role: "Lead UI/UX Designer",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "David",
        role: "AI & Systems Engineer",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Elena",
        role: "3D Production Artist",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop"
    }
];

export default function Team() {
    return (
        <section className="py-24 md:py-48 bg-[#050505] relative overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-32">
                    <AnimatedSection className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 uppercase">
                            The <span className="font-light italic text-brand">Core</span>
                        </h2>
                        <p className="text-xl text-white/50 font-light leading-relaxed">
                            A collective of industry veterans, artists, and engineers dedicated to absolute perfection. We don't settle for average.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {team.map((member, index) => (
                        <AnimatedSection
                            key={index}
                            delay={index * 0.15}
                            className="group cursor-pointer flex flex-col"
                        >
                            <div className="relative aspect-[3/4] w-full bg-[#0A0A0A] overflow-hidden mb-8 border border-white/5">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover scale-[1.03] group-hover:scale-100 filter grayscale-[80%] group-hover:grayscale-0 transition-all duration-[1s] ease-out"
                                />
                            </div>

                            <div className="border-t border-white/10 pt-6">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">{member.name}</h3>
                                <p className="text-brand font-medium mt-2 text-sm tracking-widest uppercase">{member.role}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

            </div>
        </section>
    );
}
