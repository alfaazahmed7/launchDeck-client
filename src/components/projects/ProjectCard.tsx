"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Layers, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    // Badges sit on top of the thumbnail image, and that image is identical in
    // both themes — so the badge colors must be identical too. These reuse the
    // light-mode badge palette (opaque pastel chips) unconditionally, including
    // in dark mode, instead of the translucent `*-500/10` fills + low-chroma
    // text that washed out over photos. None of these utilities are in the
    // theme's `:root.light` palette remap, so light mode renders exactly the
    // same colors it did before.
    const statusColors = {
        Idea: "bg-blue-100 text-blue-700 border-blue-200",
        Development: "bg-amber-100 text-amber-700 border-amber-200",
        Production: "bg-emerald-100 text-emerald-700 border-emerald-200",
    };

    // Difficulty chips have no border of their own; the subtle one added here is
    // only visible on the light chip fills. Advanced keeps a solid red outline
    // so it reads clearly on any thumbnail.
    const difficultyColors = {
        Beginner: "bg-slate-800 text-slate-300 border border-slate-600",
        Intermediate: "bg-slate-700 text-emerald-300 border border-slate-600",
        Advanced: "text-red-600 bg-black font-bold",
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative flex flex-col h-[450px] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl transition-all duration-300 hover:border-slate-700/80 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
        >
            {/* Dynamic Hover Glow Layer Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500/0 via-emerald-500/0 to-emerald-500/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Thumbnail Asset Wrapper Box */}
            <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                <img
                    src={project.thumbnailImage}
                    alt={`${project.name} preview`}
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                />
                {/* Absolute Badges on Image */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                    <span className={`rounded-md px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase border ${statusColors[project.status] || statusColors.Idea}`}>
                        {project.status}
                    </span>
                </div>
                <div className="absolute right-3 top-3">
                    <span className={`rounded-md px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase ${difficultyColors[project.difficulty] || difficultyColors.Intermediate}`}>
                        {project.difficulty}
                    </span>
                </div>
            </div>

            {/* Primary Card Core Content Area */}
            <div className="flex flex-1 flex-col p-5">
                {/* Structural Info Header */}
                <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                        {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500">
                        <Calendar size={12} />
                        {new Date(project.publishedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                </div>

                {/* Project Title */}
                <h3 className="mt-2 text-lg font-bold text-white tracking-tight line-clamp-1 transition-colors group-hover:text-emerald-400">
                    {project.name}
                </h3>

                {/* Short Tagline Block */}
                <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-2">
                    {project.tagline}
                </p>

                {/* Tech Stack Horizontal Badges Container */}
                <div className="mt-4 flex flex-wrap gap-1.5 overflow-hidden max-h-[56px]">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="rounded bg-slate-950 px-2 py-0.5 text-[10px] font-medium font-mono text-slate-400 border border-slate-800/60"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="rounded bg-slate-950 px-1.5 py-0.5 text-[9px] font-bold font-mono text-slate-500 border border-slate-800/40">
                            +{project.technologies.length - 3} More
                        </span>
                    )}
                </div>

                {/* View Details Button Layout (Anchored to Card Bottom via flex-1 mt-auto) */}
                <div className="mt-auto pt-4">
                    <Link
                        href={`/projects/${project._id}`}
                        className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-950 border border-slate-800 py-2.5 text-xs font-bold text-slate-300 transition-all duration-200 hover:border-emerald-500/50 hover:bg-emerald-500 hover:text-slate-950"
                    >
                        View Details
                        <ArrowUpRight size={14} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}