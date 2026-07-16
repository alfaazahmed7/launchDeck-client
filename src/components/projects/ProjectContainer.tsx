"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";
import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectContainerProps {
    initialProjects: Project[];
}

export default function ProjectContainer({ initialProjects }: ProjectContainerProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Initialize input states directly from the active URL parameter structure
    const [search, setSearch] = useState(searchParams.get("search") || "");

    // Tracks active selections across individual filter categories
    const activeCategory = searchParams.get("category") || "";
    const activeDifficulty = searchParams.get("difficulty") || "";
    const activeStatus = searchParams.get("status") || "";
    const activeTech = searchParams.get("tech") || "";
    const activeSort = searchParams.get("sort") || "newest";
    const activePage = Number(searchParams.get("page")) || 1;

    // Reusable utility to update individual URL query params safely
    const updateQuery = (key: string, value: string) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));

        if (!value || value === "all") {
            current.delete(key);
        } else {
            current.set(key, value);
        }

        // Always reset to page 1 whenever filters change
        if (key !== "page") current.delete("page");

        router.push(`/projects?${current.toString()}`);
    };

    // Clear all filters simultaneously back to original state
    const handleReset = () => {
        setSearch("");
        router.push("/projects");
    };

    // Debounce search text inputs: Updates query params 400ms after user stops typing
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            updateQuery("search", search);
        }, 400);

        return () => clearTimeout(delayDebounce);
    }, [search]);

    return (
        <div className="space-y-8">

            {/* Controls Bar */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                {/* Search Input Box */}
                <div className="relative lg:col-span-4">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search name, tech, category..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-xl border border-slate-800 bg-slate-900/60 py-3 pl-12 pr-4 text-sm text-white placeholder-slate-500 outline-none backdrop-blur-sm transition-all focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                </div>

                {/* Dropdown Selector Layout Arrays mapped directly to browser routing controls */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:col-span-6">
                    <select
                        value={activeCategory}
                        onChange={(e) => updateQuery("category", e.target.value)}
                        className="select select-bordered w-full rounded-xl border-slate-800 bg-slate-900 text-xs text-slate-300 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                    >
                        <option value="all">All Categories</option>
                        <option value="Analytics">Analytics</option>
                        <option value="SaaS">SaaS</option>
                        <option value="Web3">Web3</option>
                    </select>

                    <select
                        value={activeDifficulty}
                        onChange={(e) => updateQuery("difficulty", e.target.value)}
                        className="select select-bordered w-full rounded-xl border-slate-800 bg-slate-900 text-xs text-slate-300 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                    >
                        <option value="all">All Levels</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>

                    <select
                        value={activeStatus}
                        onChange={(e) => updateQuery("status", e.target.value)}
                        className="select select-bordered w-full rounded-xl border-slate-800 bg-slate-900 text-xs text-slate-300 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                    >
                        <option value="all">All Statuses</option>
                        <option value="Idea">Idea</option>
                        <option value="Development">Development</option>
                        <option value="Production">Production</option>
                    </select>

                    <select
                        value={activeTech}
                        onChange={(e) => updateQuery("tech", e.target.value)}
                        className="select select-bordered w-full rounded-xl border-slate-800 bg-slate-900 text-xs text-slate-300 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                    >
                        <option value="all">All Tech</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="Next.js">Next.js</option>
                        <option value="Prisma">Prisma</option>
                        <option value="Tailwind CSS">Tailwind CSS</option>
                    </select>
                </div>

                {/* Sorting Selection Block */}
                <div className="lg:col-span-2">
                    <select
                        value={activeSort}
                        onChange={(e) => updateQuery("sort", e.target.value)}
                        className="select select-bordered w-full rounded-xl border-slate-800 bg-slate-900 text-xs text-slate-300 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="az">Project Name (A–Z)</option>
                        <option value="za">Project Name (Z–A)</option>
                    </select>
                </div>
            </div>

            {/* Grid Results Target Renderer */}
            <div className="relative min-h-[400px]">
                <AnimatePresence mode="wait">
                    {initialProjects.length === 0 ? (
                        /* Empty State Display Window */
                        <motion.div
                            key="empty-state"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/20 py-20 text-center backdrop-blur-sm"
                        >
                            <div className="rounded-full bg-slate-900 p-4 text-slate-500 border border-slate-800 mb-4">
                                <SlidersHorizontal size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white">No projects found.</h3>
                            <p className="mt-1 text-sm text-slate-400 max-w-xs">
                                We could not find any projects matching your exact query or selected parameters.
                            </p>
                            <button
                                onClick={handleReset}
                                className="mt-6 flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-slate-900 transition-all hover:bg-emerald-400"
                            >
                                <RotateCcw size={16} />
                                Reset All Filters
                            </button>
                        </motion.div>
                    ) : (
                        /* Active Animated Project Grid Layout */
                        <motion.div
                            key={`grid-${activeCategory}-${activeDifficulty}-${activeStatus}-${activeTech}-${activeSort}-${activePage}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                        >
                            {initialProjects.map((project) => {
                                const cardKey = project._id?.$oid || project.id;
                                return (
                                    <div key={cardKey} className="h-full w-full">
                                        <ProjectCard project={project} />
                                    </div>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Interactive Pagination Controller Elements */}
            {initialProjects.length > 0 && (
                <div className="flex justify-center pt-6">
                    <div className="join border border-slate-800 bg-slate-900/40 backdrop-blur-sm rounded-xl">
                        <button
                            disabled={activePage <= 1}
                            onClick={() => updateQuery("page", String(activePage - 1))}
                            className="join-item btn btn-sm bg-transparent border-none text-slate-400 hover:bg-slate-800 hover:text-white disabled:bg-transparent disabled:text-slate-700"
                        >
                            «
                        </button>
                        <button className="join-item btn btn-sm bg-emerald-500 border-none text-slate-950 font-bold hover:bg-emerald-400">
                            {activePage}
                        </button>
                        <button
                            onClick={() => updateQuery("page", String(activePage + 1))}
                            className="join-item btn btn-sm bg-transparent border-none text-slate-400 hover:bg-slate-800 hover:text-white"
                        >
                            »
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}