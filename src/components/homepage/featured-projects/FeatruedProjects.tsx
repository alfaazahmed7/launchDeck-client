import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/api/projects";
import FeaturedProjectsList from "./FeaturedProjectsList";

const FeaturedProjects = async () => {
    // Calling your specific backend utility function directly on the server
    const featuredProjects = await getFeaturedProjects();

    return (
        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                
                {/* Section Header */}
                <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
                    <div className="text-center sm:text-left">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
                            Curated Selection
                        </span>
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            Featured <span className="text-emerald-400">Projects</span>
                        </h2>
                        <p className="mt-2 text-slate-400 max-w-md">
                            A showcase of premium platforms and innovative applications pushing technical limits.
                        </p>
                    </div>

                    {/* View All Projects CTA Link */}
                    <Link
                        href="/projects"
                        className="group flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-6 py-3.5 text-sm font-bold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-800 hover:text-white"
                    >
                        View All Projects
                        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Grid UI presentation layer handling data list */}
                <FeaturedProjectsList projects={featuredProjects} />

            </div>
        </section>
    );
};

export default FeaturedProjects;