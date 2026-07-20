import AboutContent from '@/components/about/AboutContent';
import React from 'react';

export const metadata = {
    title: 'About - LaunchDeck',
    description: 'Discover the system mission, core architecture, and developer network framework behind LaunchDeck.',
};

export default function AboutPage() {
    return (
        <div className="min-h-[calc(100vh-64px)] py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="w-full max-w-4xl space-y-12">
                
                {/* Section Meta Header */}
                <div className="text-center sm:text-left">
                    <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
                        System Overview
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white">
                        About <span className="text-emerald-400">LaunchDeck</span>
                    </h1>
                    <p className="mt-2 text-xs text-slate-400 max-w-xl">
                        Discover the underlying philosophy, technology framework layers, and execution metrics fueling the directory ecosystem.
                    </p>
                </div>

                <AboutContent />
            </div>
        </div>
    );
}