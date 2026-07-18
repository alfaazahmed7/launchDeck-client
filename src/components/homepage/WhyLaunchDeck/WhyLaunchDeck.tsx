import React from "react";
import { MonitorDot, Compass, Terminal, Sparkles } from "lucide-react";

// Mapped layout dataset configuration matching the architectural criteria
const BENEFITS_CONFIG = [
    {
        title: "Showcase Your Work",
        description: "Publish your open-source utilities and production apps to a global network of builders and creators looking for inspiration.",
        icon: MonitorDot,
    },
    {
        title: "Discover Great Projects",
        description: "Explore elite engineering assets, SaaS platforms, and innovative Web3 prototypes built with state-of-the-art tech stacks.",
        icon: Compass,
    },
    {
        title: "Learn New Technologies",
        description: "Dive into real-world code structures and see how production-ready tech like Next.js, Prisma, and Tailwind CSS are configured.",
        icon: Terminal,
    },
    {
        title: "Inspire Other Developers",
        description: "Contribute to the creator economy by sharing your development blueprints, unique design decisions, and database schemas.",
        icon: Sparkles,
    },
];

const WhyLaunchDeck = () => {
    return (
        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Section Header Text Layout */}
                <div className="mb-16 text-center">
                    <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
                        Platform Benefits
                    </span>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Why <span className="text-emerald-400">LaunchDeck</span>?
                    </h2>
                    <p className="mt-3 text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                        The ultimate ecosystem built to accelerate discovery, code clarity, and portfolio growth for modern software engineers.
                    </p>
                </div>

                {/* 4-Column Responsive Value Propositions Deck */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {BENEFITS_CONFIG.map((benefit) => {
                        const IconComponent = benefit.icon;

                        return (
                            <div
                                key={benefit.title}
                                className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-900/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.05)]"
                            >
                                {/* Visual Glow Layer Effect Accent */}
                                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/[0.01] rounded-2xl" />

                                {/* Styled Icon Container Frame Box */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800/80 text-slate-400 transition-colors duration-300 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 group-hover:text-emerald-400 mb-5">
                                    <IconComponent size={22} />
                                </div>

                                {/* Card Typographic Metadata */}
                                <h3 className="text-base font-bold text-white tracking-tight transition-colors duration-200 group-hover:text-emerald-400">
                                    {benefit.title}
                                </h3>

                                <p className="mt-2 text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-200">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default WhyLaunchDeck;