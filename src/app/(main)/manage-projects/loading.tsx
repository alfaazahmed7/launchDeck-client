import React from 'react';

export default function Loading() {
    return (
        <div className="min-h-[calc(100vh-64px)] bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 animate-pulse">
            <div className="mx-auto max-w-5xl">

                {/* Header Skeleton Block */}
                <div className="mb-10 text-center sm:text-left">
                    {/* Badge Accent Hint */}
                    <div className="inline-block h-5 w-28 rounded-full bg-slate-900 border border-slate-800/50 mb-3" />
                    {/* Title Heading Text Block */}
                    <div className="h-8 w-64 bg-slate-900 rounded-xl mx-auto sm:mx-0" />
                    {/* Subtitle Line Block */}
                    <div className="h-4 w-96 max-w-full bg-slate-900 rounded-lg mt-2 mx-auto sm:mx-0" />
                </div>

                {/* --- HORIZONTAL RECORD MATRIX MOCK SKELETONS GRID --- */}
                <div className="space-y-4">
                    {[1, 2, 3].map((index) => (
                        <div
                            key={index}
                            className="relative flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-slate-900/60 bg-slate-900/10 p-5"
                        >
                            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">

                                {/* Image Thumbnail Placeholder Frame */}
                                <div className="h-24 w-full sm:w-36 rounded-xl bg-slate-950 border border-slate-900 shrink-0" />

                                {/* Text Configuration Information Blocks */}
                                <div className="flex flex-col items-center sm:items-start space-y-2.5 w-full sm:w-64">
                                    {/* Project Title and Status Badge Combined Row */}
                                    <div className="flex items-center gap-3">
                                        <div className="h-5 w-32 bg-slate-900 rounded-lg" />
                                        <div className="h-4 w-16 bg-slate-900 rounded border border-slate-850" />
                                    </div>

                                    {/* Tagline Paragraph Preview Block */}
                                    <div className="h-3.5 w-full bg-slate-900 rounded-md" />

                                    {/* Lower Parameters Metadata Indicators */}
                                    <div className="flex items-center gap-4 pt-1 w-full justify-center sm:justify-start">
                                        <div className="h-4 w-16 bg-slate-950 border border-slate-900 rounded" />
                                        <div className="h-3.5 w-20 bg-slate-900 rounded" />
                                    </div>
                                </div>

                            </div>

                            {/* Actions Interaction Buttons Row Panel Block */}
                            <div className="flex items-center justify-center gap-2 border-t border-slate-900/60 pt-4 w-full sm:w-auto sm:border-t-0 sm:pt-0">
                                <div className="h-9 w-16 rounded-xl bg-slate-950 border border-slate-900" />
                                <div className="h-9 w-16 rounded-xl bg-slate-950 border border-slate-900" />
                                <div className="h-9 w-20 rounded-xl bg-slate-950 border border-slate-900" />
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}