import React from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, Layers } from "lucide-react";
import { Project } from "@/types/project";

interface FeaturedProjectsListProps {
    projects: Project[];
}

export default function FeaturedProjectsList({ projects }: FeaturedProjectsListProps) {
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
        Advanced: "bg-black text-red-600",
    };

    return (
        /* FIXED: Configured to 3 columns per row on desktop (lg:grid-cols-3) */
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project) => {
                const projectId = project._id?.$oid || project.id;

                return (
                    <div
                        key={projectId}
                        className="group relative flex flex-col h-[450px] w-full overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/80 shadow-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                    >
                        {/* Dynamic Featured Glow Layer Effect */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500/0 via-transparent to-emerald-500/[0.02]" />

                        {/* Thumbnail Asset Wrapper Box */}
                        <div className="relative h-44 w-full shrink-0 overflow-hidden bg-slate-950">
                            <img
                                src={project.thumbnailImage}
                                alt={`${project.name} preview`}
                                className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                                loading="lazy"
                            />
                            {/* Floating Featured Indicator & Badges */}
                            <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                                <span className="rounded-md bg-gradient-to-r from-emerald-500 to-teal-500 px-2.5 py-1 text-[9px] font-black tracking-wider text-slate-950 uppercase shadow-md">
                                    Featured
                                </span>
                                <span className={`rounded-md px-2.5 py-1 text-[9px] font-bold tracking-wide uppercase border ${statusColors[project.status as keyof typeof statusColors] || statusColors.Idea}`}>
                                    {project.status}
                                </span>
                            </div>
                            <div className="absolute right-3 top-3">
                                <span className={`rounded-md px-2.5 py-1 text-[9px] font-bold tracking-wide uppercase ${difficultyColors[project.difficulty as keyof typeof difficultyColors] || difficultyColors.Intermediate}`}>
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

                            {/* View Details Button Layout */}
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

                    </div>
                );
            })}
        </div>
    );
}