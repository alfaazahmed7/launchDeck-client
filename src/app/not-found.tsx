import React from 'react';
import Link from 'next/link';
import { Home, Terminal, ShieldAlert } from 'lucide-react';

export const metadata = {
    title: '404 - Page Not Found',
    description: 'The requested deployment record or path could not be resolved within the LaunchDeck directory.',
};

export default function NotFound() {
    return (
        <div className="min-h-[calc(100vh-64px)] bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-md text-center space-y-6">

                {/* --- 404 HIGH-FIDELITY GRAPHIC ILLUSTRATION --- */}
                <div className="relative mx-auto w-full max-w-[280px] h-40 bg-slate-900/10 border border-slate-900 rounded-3xl backdrop-blur-sm flex flex-col items-center justify-center p-6 group transition-all duration-300 hover:border-slate-800/80">
                    {/* Floating Matrix Glitch Box Effects */}
                    <div className="absolute top-3 left-4 flex gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500/40" />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-800" />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-800" />
                    </div>

                    <div className="absolute top-3 right-4 text-[9px] font-mono text-slate-600 font-bold uppercase tracking-wider select-none">
                        ERR_RESOLVE
                    </div>

                    {/* Core Visual Construct Node */}
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-slate-950 text-red-400 border border-slate-900 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-red-500/5">
                        <Terminal size={24} />
                    </div>

                    {/* Structural Numeric Text Indicator */}
                    <h1 className="text-4xl font-black font-mono tracking-tighter text-white mt-4 select-none">
                        4<span className="text-red-500">0</span>4
                    </h1>
                </div>

                {/* --- FRIENDLY CONTEXT MESSAGE BLOCK --- */}
                <div className="space-y-2">
                    <h2 className="text-base font-bold text-white flex items-center justify-center gap-1.5">
                        <ShieldAlert size={16} className="text-red-400" /> Route Disconnected
                    </h2>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed font-medium">
                        The resource link you targeted either shifted locations, dropped out of active deployment feeds, or never existed in this MongoDB cluster cluster context.
                    </p>
                </div>

                {/* --- NAVIGATION CALL TO ACTION --- */}
                <div className="pt-2">
                    <Link
                        href="/"
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-2 text-xs font-bold text-slate-950 transition-all hover:bg-emerald-400 shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/10 group"
                    >
                        <Home size={13} className="transition-transform group-hover:-translate-y-0.5" /> Return to Safety Deck
                    </Link>
                </div>

            </div>
        </div>
    );
}