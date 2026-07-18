import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const CallToAction = () => {
    return (
        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">

                {/* Dynamic Card Container Box */}
                <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-slate-900/60 p-8 text-center backdrop-blur-sm sm:p-12 shadow-2xl">

                    {/* Subtle Ambient Glow Mesh Behind Content */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500/0 via-transparent to-emerald-500/[0.02]" />

                    {/* Tagline Badge Accent Element */}
                    <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-4">
                        Join the Community
                    </span>

                    {/* Heading Text Elements */}
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Ready to Showcase <br className="hidden sm:inline" /> Your Next <span className="text-emerald-400">Project</span>?
                    </h2>

                    <p className="mt-4 text-xs leading-relaxed text-slate-400 max-w-lg mx-auto">
                        Get your open-source software platforms, innovative developer utilities, and production apps discovered by thousands of creators and builders global wide.
                    </p>

                    {/* Interactive Action Redirect Buttons Grid Layout */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

                        {/* Primary Action Button */}
                        <Link
                            href="/register"
                            className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-xs font-bold text-slate-950 transition-all duration-200 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] sm:w-auto"
                        >
                            Register Now
                            <ArrowUpRight size={14} />
                        </Link>

                        {/* Secondary Option Button */}
                        <Link
                            href="/projects"
                            className="group flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950 px-6 py-3.5 text-xs font-bold text-slate-300 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 hover:text-white sm:w-auto"
                        >
                            Explore Projects
                            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default CallToAction;