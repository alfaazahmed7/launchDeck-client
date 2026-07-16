"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, ArrowUpDown, RotateCcw } from "lucide-react";
import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectContainerProps {
    initialProjects: Project[];
}

export default function ProjectContainer({ initialProjects }: ProjectContainerProps) {
    // States ready for upcoming structural filter integrations
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Switch to true to test the skeleton view

    // Mock array mapping for skeleton states matching document density requirements
    const skeletons = Array.from({ length: 8 });

    return (
        <div className="space-y-8">

            {/* Search, Filters, and Sorting Control Bar Layout */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                {/* Search Inputs */}
                <div className="relative lg:col-span-5">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search project name, technology, category..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-xl border border-slate-800 bg-slate-900/60 py-3 pl-12 pr-4 text-sm text-white placeholder-slate-500 outline-none backdrop-blur-sm transition-all focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                </div>

                {/* 4 Interactive Mock Filters (DaisyUI Select Component Styling applied) */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:col-span-5">
                    <select className="select select-bordered w-full rounded-xl border-slate-800 bg-slate-900 text-xs text-slate-300 backdrop-blur-sm focus:border-emerald-500 focus:outline-none">
                        <option disabled selected>Category</option>
                        <option>Analytics</option>
                        <option>SaaS</option>
                        <option>Web3</option>
                    </select>

                    <select className="select select-bordered w-full rounded-xl border-slate-800 bg-slate-900 text-xs text-slate-300 backdrop-blur-sm focus:border-emerald-500 focus:outline-none">
                        <option disabled selected>Difficulty</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>

                    <select className="select select-bordered w-full rounded-xl border-slate-800 bg-slate-900 text-xs text-slate-300 backdrop-blur-sm focus:border-emerald-500 focus:outline-none">
                        <option disabled selected>Status</option>
                        <option>Idea</option>
                        <option>Development</option>
                        <option>Production</option>
                    </select>

                    <select className="select select-bordered w-full rounded-xl border-slate-800 bg-slate-900 text-xs text-slate-300 backdrop-blur-sm focus:border-emerald-500 focus:outline-none">
                        <option disabled selected>Tech Stack</option>
                        <option>Next.js</option>
                        <option>TypeScript</option>
                        <option>Tailwind CSS</option>
                    </select>
                </div>

                {/* Sorting Engine Setup */}
                <div className="lg:col-span-2">
                    <select className="select select-bordered w-full rounded-xl border-slate-800 bg-slate-900 text-xs text-slate-300 backdrop-blur-sm focus:border-emerald-500 focus:outline-none">
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Project Name (A–Z)</option>
                        <option>Project Name (Z–A)</option>
                    </select>
                </div>
            </div>

            {/* Main Grid Viewport Renderer */}
            <div className="relative min-h-[400px]">
                {isLoading ? (
                    /* Loading State Skeletons */
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {skeletons.map((_, idx) => (
                            <div key={idx} className="flex h-[430px] flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5 animate-pulse space-y-4">
                                <div className="h-44 w-full rounded-xl bg-slate-800" />
                                <div className="h-6 w-3/4 rounded bg-slate-800" />
                                <div className="h-4 w-full rounded bg-slate-800" />
                                <div className="flex gap-2"><div className="h-5 w-16 rounded bg-slate-800" /><div className="h-5 w-16 rounded bg-slate-800" /></div>
                                <div className="mt-auto h-10 w-full rounded-xl bg-slate-800" />
                            </div>
                        ))}
                    </div>
                ) : initialProjects.length === 0 ? (
                    /* Empty State Window */
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/20 py-20 text-center backdrop-blur-sm"
                    >
                        <div className="rounded-full bg-slate-900 p-4 text-slate-500 border border-slate-800 mb-4">
                            <SlidersHorizontal size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white">No projects found.</h3>
                        <p className="mt-1 text-sm text-slate-400 max-w-xs">
                            We could not find any projects matching your exact query or selected parameters.
                        </p>
                        <button className="mt-6 flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-slate-900 transition-all hover:bg-emerald-400">
                            <RotateCcw size={16} />
                            Reset All Filters
                        </button>
                    </motion.div>
                ) : (
                    /* Complete Framer Motion Animated Grid Structure */
                    <motion.div
                        layout
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        <AnimatePresence mode="popLayout">
                            {initialProjects.map((project) => (
                                <ProjectCard key={project._id.$oid || project.id} project={project} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>

            {/* Mock Framework for Pagination Component Setup */}
            {initialProjects.length > 0 && !isLoading && (
                <div className="flex justify-center pt-6">
                    <div className="join border border-slate-800 bg-slate-900/40 backdrop-blur-sm rounded-xl">
                        <button className="join-item btn btn-sm bg-transparent border-none text-slate-400 hover:bg-slate-800 hover:text-white">«</button>
                        <button className="join-item btn btn-sm bg-emerald-500 border-none text-slate-950 font-bold hover:bg-emerald-400">1</button>
                        <button className="join-item btn btn-sm bg-transparent border-none text-slate-400 hover:bg-slate-800 hover:text-white">2</button>
                        <button className="join-item btn btn-sm bg-transparent border-none text-slate-400 hover:bg-slate-800 hover:text-white">3</button>
                        <button className="join-item btn btn-sm bg-transparent border-none text-slate-400 hover:bg-slate-800 hover:text-white">»</button>
                    </div>
                </div>
            )}

        </div>
    );
}