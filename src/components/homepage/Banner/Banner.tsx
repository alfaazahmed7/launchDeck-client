"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, Rocket } from "lucide-react";

export default function Banner() {
    return (
        <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

                    {/* Left: Text Content Area */}
                    <div className="text-center lg:col-span-7 lg:text-left">
                        {/* Glowing Accent Badge */}
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                            <Rocket size={14} className="animate-pulse" />
                            The Launchpad for Innovators
                        </span>

                        {/* Main Headline */}
                        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:leading-[1.1]">
                            Where Next-Gen Ideas <br className="hidden sm:inline" />
                            Meet Their{" "}
                            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                                Launch Deck.
                            </span>
                        </h1>

                        {/* Subtext Description */}
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 lg:text-xl">
                            LaunchDeck connects pioneering creators with the capital, communities, and collaborators they need to transition from brilliant code to world-shaping platforms.
                        </p>

                        {/* CTA Action Buttons */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                            {/* Primary: Publish Your Project */}
                            <Link
                                href="/add-project"
                                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-base font-bold text-slate-900 transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] sm:w-auto"
                            >
                                Publish Your Project
                                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>

                            {/* Secondary: Explore Projects */}
                            <Link
                                href="/projects"
                                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-8 py-4 text-base font-bold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-slate-600 hover:bg-slate-800 hover:text-white sm:w-auto"
                            >
                                <Compass size={18} />
                                Explore Projects
                            </Link>
                        </div>

                        {/* Quick Tech Stats */}
                        <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-800/85 pt-8 text-left max-w-lg mx-auto lg:mx-0">
                            <div>
                                <p className="text-2xl font-bold text-white">250+</p>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Projects Live</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">$4.2M</p>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Raised</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">40k+</p>
                                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Backers</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Elegant Mockup-Style Hero Illustration */}
                    <div className="relative flex justify-center lg:col-span-5">
                        <div className="relative w-full max-w-[450px]">
                            {/* Outer Decorative Gradient Border */}
                            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-emerald-500 opacity-30 blur-lg" />

                            {/* Hero Card */}
                            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl">
                                {/* Simulated App Header */}
                                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                                    <div className="flex space-x-2">
                                        <span className="h-3.5 w-3.5 rounded-full bg-rose-500/80" />
                                        <span className="h-3.5 w-3.5 rounded-full bg-amber-500/80" />
                                        <span className="h-3.5 w-3.5 rounded-full bg-emerald-500/80" />
                                    </div>
                                    <span className="text-xs font-mono text-slate-500">deck_v1.0.ts</span>
                                </div>

                                {/* Card Main Body Graphic */}
                                <div className="mt-6 rounded-xl bg-slate-950 p-4 border border-slate-800/50">
                                    <div className="h-28 w-full rounded-lg bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/10 via-slate-950/40 to-slate-950" />
                                        <Rocket size={44} className="text-emerald-400 relative z-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                                    </div>

                                    <div className="mt-5 space-y-3">
                                        <div className="h-4 w-2/3 rounded-md bg-slate-800" />
                                        <div className="h-3 w-full rounded-md bg-slate-800/50" />
                                        <div className="h-3 w-5/6 rounded-md bg-slate-800/50" />
                                    </div>

                                    {/* Funding Bar */}
                                    <div className="mt-6">
                                        <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5">
                                            <span>Fund Goal</span>
                                            <span className="text-emerald-400">82% Supported</span>
                                        </div>
                                        <div className="h-2 w-full rounded-full bg-slate-850 overflow-hidden">
                                            <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-blue-500 to-emerald-400" />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Micro-Card Indicator */}
                                <div className="absolute -bottom-6 -left-6 rounded-xl border border-slate-700/80 bg-slate-900/90 p-4 shadow-xl backdrop-blur-md hidden sm:flex items-center space-x-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                                        🚀
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400">New Launch</p>
                                        <p className="text-sm font-black text-white">Web3 Solar Grid</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}