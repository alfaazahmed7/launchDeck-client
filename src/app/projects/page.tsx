import React from "react";
import ProjectContainer from "@/components/projects/ProjectContainer";
import { Project } from "@/types/project";
import { serverFetch } from "@/lib/core/server";

interface PageProps {
    searchParams: Promise<{
        search?: string;
        category?: string;
        difficulty?: string;
        status?: string;
        tech?: string;
        sort?: string;
        page?: string;
    }>;
}

export default async function ProjectsPage({ searchParams }: PageProps) {
    const params = await searchParams;
    let projects: Project[] = [];
    let error: string | null = null;

    try {
        // Build query string dynamically from active URL queries
        const queryString = new URLSearchParams(params as Record<string, string>).toString();

        // Pass the query string to your backend route (e.g., /api/get-projects?search=Umami&sort=newest)
        projects = await serverFetch(`/api/get-projects?${queryString}`);
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