import React from 'react';
import { Target, Eye, Code2, Terminal, User2, Mail, ExternalLink, Cpu } from 'lucide-react';

export default function AboutContent() {

    // Core Tech Stack alignment array matching your codebase specifications
    const platformStack = [
        { name: "Next.js", tier: "Frontend Framework", version: "v16.2 (Turbopack)" },
        { name: "TypeScript", tier: "Type Safety Layer", version: "Strict Mode" },
        { name: "Tailwind CSS", tier: "Utility Design Tokens", version: "Semantic Config" },
        { name: "Better-Auth", tier: "Session Authentication", version: "OAuth & Email Providers" },
        { name: "MongoDB", tier: "Persistence Layer", version: "Cluster Indexing" },
        { name: "Lucide React", tier: "System Vector Matrix", version: "Icon Libraries" }
    ];

    return (
        <div className="space-y-10">

            {/* --- SECTION 1: MISSION & VISION --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Platform Mission Card */}
                <div className="group relative flex flex-col justify-between p-6 rounded-2xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm transition-all duration-300 hover:border-slate-800/80 hover:bg-slate-900/40">
                    <div className="space-y-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                            <Target size={16} />
                        </div>
                        <h2 className="text-base font-bold text-white transition-colors duration-200 group-hover:text-emerald-400">Platform Mission</h2>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                            To empower developers worldwide by providing a high-performance showcase environment where open-source microservices, SaaS prototypes, and architectural stack directories can be cataloged, audited, and discovered instantly.
                        </p>
                    </div>
                </div>

                {/* Platform Vision Card */}
                <div className="group relative flex flex-col justify-between p-6 rounded-2xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm transition-all duration-300 hover:border-slate-800/80 hover:bg-slate-900/40">
                    <div className="space-y-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                            <Eye size={16} />
                        </div>
                        <h2 className="text-base font-bold text-white transition-colors duration-200 group-hover:text-emerald-400">Platform Vision</h2>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                            To bridge the gap between building application code and gaining structural visibility—becoming the global baseline repository display channel where builders analyze live production statuses and track technical milestones.
                        </p>
                    </div>
                </div>

            </div>

            {/* --- SECTION 2: WHY LAUNCHDECK WAS CREATED --- */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm space-y-4">
                <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 text-emerald-400 border border-slate-900">
                        <Terminal size={14} />
                    </div>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">Why LaunchDeck Was Created</h2>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed font-medium space-y-3">
                    <p>
                        Most traditional developer presentation pipelines are buried inside text readmes or hidden inside localized local environments. Builders frequently construct complex application layers, database frameworks, and integrated layouts only for them to remain visually isolated from the open web feed.
                    </p>
                    <p>
                        LaunchDeck was forged to remove this operational barrier. We engineered a unified directory dashboard environment that handles granular production statuses, system complexity parameters, tech stack categorizations, and validation links under a simple interface. It turns isolated code bases into accessible community modules.
                    </p>
                </div>
            </div>

            {/* --- SECTION 3: TECHNOLOGIES USED MATRIX --- */}
            <div className="space-y-3">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Cpu size={14} className="text-slate-500" /> Technologies Used
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {platformStack.map((tech) => (
                        <div key={tech.name} className="p-4 bg-slate-950 border border-slate-900 rounded-xl flex items-start gap-3">
                            <div className="mt-0.5 text-emerald-400 shrink-0">
                                <Code2 size={14} />
                            </div>
                            <div className="space-y-0.5">
                                <div className="text-xs font-bold text-slate-200 font-mono">{tech.name}</div>
                                <div className="text-[10px] font-semibold text-slate-500">{tech.tier}</div>
                                <div className="text-[9px] font-mono text-emerald-500/70">{tech.version}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- SECTION 4: DEVELOPER INFORMATION --- */}
            <div className="border-t border-slate-900 pt-8">
                <div className="group relative rounded-2xl border border-slate-900 bg-gradient-to-r from-slate-950 to-slate-900/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-300 hover:border-slate-800">
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                        {/* Mock Avatar Node Frame */}
                        <div className="h-12 w-12 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                            <User2 size={20} />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-base font-bold text-white">Alfaaz Ahmed</h3>
                            <p className="text-xs text-slate-400 font-medium">Core Platform Architect & Software Engineer</p>
                            <div className="flex items-center justify-center sm:justify-start gap-1 text-[10px] text-slate-500 font-semibold font-mono">
                                <Mail size={12} className="text-slate-600" /> alfaazahmed010@gmail.com
                            </div>
                        </div>
                    </div>

                    {/* Developer Portals Anchor links */}
                    <div className="flex items-center gap-2.5 shrink-0">
                        <a
                            href="https://github.com/alfaazahmed7" target="_blank" rel="noreferrer"
                            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950 px-3.5 text-xs font-bold text-slate-300 hover:border-slate-700 hover:text-white transition-all"
                        >
                            GitHub Profile <ExternalLink size={12} className="text-slate-500" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}