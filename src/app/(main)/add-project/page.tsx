import AddProjectForm from '@/components/add-project/AddProjectForm';
import React from 'react';

export const metadata = {
    title: 'Publish New Project - LaunchDeck',
    description: 'Showcase your application architecture to the global builder network.',
};

export default function AddProjectPage() {
    return (
        <div className="min-h-[calc(100vh-64px)] bg-slate-950 text-slate-100 flex justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl">
                {/* Header Block */}
                <div className="mb-8 text-center sm:text-left">
                    <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
                        Creator Studio
                    </span>
                    <h1 className="text-3xl font-extrabold tracking-tight text-white">
                        Publish Your <span className="text-emerald-400">Project</span>
                    </h1>
                    <p className="mt-2 text-xs text-slate-400 max-w-xl">
                        Fill in your system metadata framework below to deploy your showcase architecture onto the directory feed.
                    </p>
                </div>

                <AddProjectForm />
            </div>
        </div>
    );
}