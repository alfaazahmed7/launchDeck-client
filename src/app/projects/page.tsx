import React from "react";
import ProjectContainer from "@/components/projects/ProjectContainer";
import { Project } from "@/types/project";
import { getProjects } from "@/lib/api/getProjects";

export default async function ProjectsPage() {
    let projects: Project[] = [];
    let error: string | null = null;

    try {
        // Calling your modular decoupled function wrapper directly
        projects = await getProjects();
        console.log(projects, 'projects');
    }
    catch (err) {
        error = "Failed to load projects. Please try again later.";
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Header Info */}
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Explore <span className="text-emerald-400">Projects</span>
                </h1>
                <p className="mt-2 text-slate-400">
                    Discover open-source utilities, innovative software platforms, and elite apps built by creators.
                </p>
            </div>

            {error ? (
                <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-4 text-center text-rose-400">
                    {error}
                </div>
            ) : (
                <ProjectContainer initialProjects={projects} />
            )}
        </div>
    );
}