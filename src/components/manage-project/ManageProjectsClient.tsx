"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Eye, Edit3, Trash2, FolderCode, Calendar, ShieldAlert, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { UserAddedProjects } from '@/types/add-project';

interface ManageProjectsClientProps {
    initialProjects: UserAddedProjects[];
}

export default function ManageProjectsClient({ initialProjects }: ManageProjectsClientProps) {
    const router = useRouter();
    const [projects, setProjects] = useState<UserAddedProjects[]>(initialProjects);

    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [activeDeleteId, setActiveDeleteId] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL!;

    const promptDelete = (id: string) => {
        setActiveDeleteId(id);
        setIsConfirmOpen(true);
    };

    const confirmDelete = async () => {
        if (!activeDeleteId) return;
        setIsDeleting(true);

        try {
            const response = await fetch(`${baseUrl}/api/projects/${activeDeleteId}`, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error("Could not drop architecture document record.");

            // FIX: Uses flat _id string evaluation safely
            setProjects(projects.filter(p => p._id !== activeDeleteId));
            toast.success("Project architecture dropped from deployment feed.");
            router.refresh();
        } catch (err: any) {
            toast.error(err.message || "Failed to finalize project destruction safely.");
        } finally {
            setIsDeleting(false);
            setIsConfirmOpen(false);
            setActiveDeleteId(null);
        }
    };

    const getStatusStyles = (status: string) => {
        switch (status?.toLowerCase()) {
            case 'production':
                return 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400';
            case 'development':
                return 'border-amber-500/20 bg-amber-500/10 text-amber-400';
            default:
                return 'border-blue-500/20 bg-blue-500/10 text-blue-400';
        }
    };

    if (projects.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm">
                <FolderCode size={40} className="text-slate-600 mb-4" />
                <h3 className="text-sm font-bold text-slate-300">No Projects Found</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">You haven't initialized any system deployments to this profile layer yet.</p>
                <Link href="/projects/add" className="mt-4 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-all">
                    Publish First Project
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-4">

            {projects.map((project) => (
                <div
                    key={project._id} // FIX: Now targets the real flat property token string directly
                    className="group relative flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-slate-900 bg-slate-900/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-slate-800/80 hover:bg-slate-900/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.02)]"
                >
                    <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">

                        <div className="relative h-24 w-full sm:w-36 rounded-xl overflow-hidden border border-slate-800 shrink-0 bg-slate-950 transition-transform duration-300 group-hover:scale-[1.02]">
                            {project.thumbnailImage ? (
                                <Image
                                    src={project.thumbnailImage}
                                    alt={project.name}
                                    fill
                                    sizes="(max-w-5xl) 150px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="h-full w-full flex items-center justify-center text-slate-700 bg-slate-950">
                                    <FolderCode size={20} />
                                </div>
                            )}
                        </div>

                        <div className="text-center sm:text-left space-y-1.5 max-w-md">
                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                                <h3 className="text-base font-bold text-white transition-colors duration-200 group-hover:text-emerald-400">
                                    {project.name}
                                </h3>
                                <span className={`inline-flex items-center rounded px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase border ${getStatusStyles(project.status)}`}>
                                    {project.status}
                                </span>
                            </div>

                            <p className="text-xs text-slate-400 line-clamp-1 font-medium leading-relaxed">
                                {project.tagline}
                            </p>

                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-[10px] font-semibold text-slate-500 pt-0.5">
                                <span className="bg-slate-950 border border-slate-900 px-2 py-0.5 rounded text-slate-400 font-mono">
                                    {project.category}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} className="text-slate-600" />
                                    {project.publishedDate}
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Action Buttons Hub */}
                    <div className="flex items-center justify-center gap-2 border-t border-slate-900/60 pt-4 w-full sm:w-auto sm:border-t-0 sm:pt-0">
                        <Link
                            href={`/projects/details/${project._id}`} // FIX: Flat matching layout navigation parameter strings
                            className="flex h-9 items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/40 px-3.5 text-xs font-bold text-slate-300 transition-all hover:border-slate-700 hover:text-white hover:bg-slate-900"
                        >
                            <Eye size={13} />
                            <span className="sm:inline">View</span>
                        </Link>
                        <Link
                            href={`/projects/edit/${project._id}`} // FIX: Flat matching layout navigation parameter strings
                            className="flex h-9 items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/40 px-3.5 text-xs font-bold text-slate-300 transition-all hover:border-emerald-500/30 hover:text-emerald-400 hover:bg-emerald-500/5"
                        >
                            <Edit3 size={13} />
                            <span className="sm:inline">Edit</span>
                        </Link>
                        <button
                            type="button"
                            onClick={() => promptDelete(project._id)} // FIX: Flat targeting allocation trigger
                            className="flex h-9 items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950/40 px-3.5 text-xs font-bold text-slate-400 transition-all hover:border-red-500/30 hover:text-red-400 hover:bg-red-500/5 cursor-pointer"
                        >
                            <Trash2 size={13} />
                            <span className="sm:inline">Delete</span>
                        </button>
                    </div>

                </div>
            ))}

            {/* Delete Overlay Modal Box */}
            {isConfirmOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
                    <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl text-center space-y-4">
                        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                            <ShieldAlert size={20} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-white">Confirm Removal Protocol</h3>
                            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                                Are you sure you want to drop this deployment record? This operation deletes records permanently from the MongoDB cluster index.
                            </p>
                        </div>
                        <div className="flex gap-2.5 pt-2">
                            <button
                                type="button"
                                disabled={isDeleting}
                                onClick={() => setIsConfirmOpen(false)}
                                className="flex-1 rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs font-bold text-slate-400 transition-all hover:border-slate-700 hover:text-slate-200 disabled:opacity-50 cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                disabled={isDeleting}
                                onClick={confirmDelete}
                                className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-red-500 px-4 py-2.5 text-xs font-bold text-slate-950 transition-all hover:bg-red-400 disabled:opacity-50 cursor-pointer"
                            >
                                {isDeleting ? (
                                    <>Dropping... <Loader2 size={12} className="animate-spin text-slate-950" /></>
                                ) : (
                                    "Confirm"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}