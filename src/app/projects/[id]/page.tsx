import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, Calendar, Layers, Activity, Trophy, ArrowLeft, GitBranchPlus } from 'lucide-react';
import { getProjectById, getRelatedProjects } from '@/lib/api/projects';
import GalleryViewer from '@/components/projects/GalleryViewer';
import ProjectCard from '@/components/projects/ProjectCard';

// Imported modular fetching functions directly from your service directory

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage({ params }: PageProps) {
    const resolvedParams = await params;
    const projectId = resolvedParams.id;

    // Fetch the single project document
    const project = await getProjectById(projectId);

    if (!project) {
        notFound();
    }

    // Fetch matching category recommendations via your separate logic file
    const relatedProjects = await getRelatedProjects(project.category, project._id?.$oid || project.id);

    // Color mapper for project complexity tiers
    const difficultyColors = {
        Beginner: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        Intermediate: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        Advanced: "bg-rose-500/10 text-rose-400 border-rose-500/20"
    };

    return (
        <div className="min-h-screen text-slate-100 pb-24">
            
            {/* --- HERO SECTION --- */}
            <div className="relative border-b border-slate-800 bg-slate-900/40 py-12 backdrop-blur-sm lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    
                    <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-emerald-400 transition-colors mb-6 group">
                        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> Back to explore
                    </Link>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
                        {/* Title and Badges Column */}
                        <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                            <span className="inline-flex items-center rounded-md bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                                {project.category}
                            </span>
                            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                                {project.name}
                            </h1>
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                {project.tagline}
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="rounded-lg bg-slate-950 border border-slate-800 px-3 py-1 text-xs font-mono text-slate-300 shadow-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Banner Frame Column */}
                        <div className="lg:col-span-5">
                            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl relative aspect-[16/10]">
                                <img 
                                    src={project.thumbnailImage} 
                                    alt={project.name} 
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- CORE CONTENT PANELS --- */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    
                    {/* Primary Text Data Section */}
                    <div className="lg:col-span-2 space-y-10">
                        
                        <section className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 md:p-8 backdrop-blur-sm">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="h-4 w-1 bg-emerald-400 rounded-full" /> Overview
                            </h2>
                            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                                {project.overview}
                            </p>
                        </section>

                        <section className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 md:p-8 backdrop-blur-sm">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="h-4 w-1 bg-emerald-400 rounded-full" /> Key Features
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-300">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                                            ✓
                                        </span>
                                        <span className="leading-normal">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {project.projectGallery && project.projectGallery.length > 0 && (
                            <section className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 md:p-8 backdrop-blur-sm">
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="h-4 w-1 bg-emerald-400 rounded-full" /> Project Gallery
                                </h2>
                                <GalleryViewer images={project.projectGallery} />
                            </section>
                        )}
                    </div>

                    {/* Meta Specifications & Links Sidebar Panel */}
                    <div className="space-y-6">
                        
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm shadow-xl space-y-6">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Project Metrics</h3>
                            
                            <div className="divide-y divide-slate-800/60">
                                <div className="flex items-center justify-between py-3.5">
                                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                        <Layers size={16} className="text-slate-500" /> Category
                                    </div>
                                    <span className="text-xs font-bold text-white">{project.category}</span>
                                </div>

                                <div className="flex items-center justify-between py-3.5">
                                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                        <Trophy size={16} className="text-slate-500" /> Difficulty
                                    </div>
                                    <span className={`rounded px-2 py-0.5 text-[11px] font-bold border ${difficultyColors[project.difficulty]}`}>
                                        {project.difficulty}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between py-3.5">
                                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                        <Activity size={16} className="text-slate-500" /> Status
                                    </div>
                                    <span className="text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">{project.status}</span>
                                </div>

                                <div className="flex items-center justify-between py-3.5">
                                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                        <Calendar size={16} className="text-slate-500" /> Released On
                                    </div>
                                    <span className="text-xs font-medium text-slate-300">
                                        {new Date(project.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm shadow-xl space-y-3">
                            <a 
                                href={project.links.liveDemo} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                            >
                                Launch Live Demo <ExternalLink size={16} />
                            </a>
                            <a 
                                href={project.links.githubRepo} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 border border-slate-800 py-3 text-sm font-bold text-slate-200 transition-all hover:bg-slate-900 hover:border-slate-700"
                            >
                                Source Repository <GitBranchPlus size={16} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* --- RELATED CATEGORY SHOWCASE --- */}
                {relatedProjects.length > 0 && (
                    <div className="mt-20 pt-10 border-t border-slate-800/80">
                        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
                            Related <span className="text-emerald-400">Projects</span>
                        </h2>
                        <p className="text-sm text-slate-400 mb-8">More software platforms inside the matching {project.category} ecosystem.</p>
                        
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {relatedProjects.map((relatedProject) => (
                                <ProjectCard key={relatedProject._id?.$oid || relatedProject.id} project={relatedProject} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}