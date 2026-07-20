import React from 'react';
import { getUserProjects } from '@/lib/api/manageProject';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import ManageProjectsClient from '@/components/manage-project/ManageProjectsClient';

const ManageProjectPage = async () => {
    const user = await getUserSession();

    // Safety fallback block for non-authenticated users trying to hit the dashboard endpoint
    if (!user || !user.email) {
        redirect('/login');
    }

    const projects = await getUserProjects(user?.email);

    return (
        <div className="min-h-[calc(100vh-64px)] bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">

                {/* Dashboard Meta Header */}
                <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
                            Control Center
                        </span>
                        <h1 className="text-3xl font-extrabold tracking-tight text-white">
                            Manage Your <span className="text-emerald-400">Projects</span>
                        </h1>
                        <p className="mt-1 text-xs text-slate-400">
                            Monitor, modify, or archive your published system architectures inside the directory pipeline.
                        </p>
                    </div>
                </div>

                {/* Interactive Client List Controller Component */}
                <ManageProjectsClient initialProjects={projects} />

            </div>
        </div>
    );
};

export default ManageProjectPage;