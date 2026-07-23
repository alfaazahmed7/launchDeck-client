export default function Loading() {
    return (
        <div className="min-h-screen text-slate-100 pb-24 animate-pulse">
            {/* --- HERO SECTION SKELETON --- */}
            <div className="relative border-b border-slate-800 bg-slate-900/40 py-12 backdrop-blur-sm lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Back link placeholder */}
                    <div className="h-4 w-32 bg-slate-800 rounded mb-6" />

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
                        {/* Title and Badges Column Skeleton */}
                        <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                            <div className="h-6 w-24 bg-slate-800 rounded-md mx-auto lg:mx-0" />
                            <div className="h-10 sm:h-12 w-3/4 bg-slate-800 rounded-lg mx-auto lg:mx-0" />
                            <div className="space-y-2 max-w-2xl mx-auto lg:mx-0 pt-1">
                                <div className="h-4 w-full bg-slate-800/80 rounded" />
                                <div className="h-4 w-5/6 bg-slate-800/80 rounded mx-auto lg:mx-0" />
                            </div>
                            {/* Tech stack badges */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                                <div className="h-7 w-20 bg-slate-800 rounded-lg" />
                                <div className="h-7 w-24 bg-slate-800 rounded-lg" />
                                <div className="h-7 w-16 bg-slate-800 rounded-lg" />
                                <div className="h-7 w-28 bg-slate-800 rounded-lg" />
                            </div>
                        </div>

                        {/* Banner Frame Column Skeleton */}
                        <div className="lg:col-span-5">
                            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl relative aspect-[16/10]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- CORE CONTENT PANELS SKELETON --- */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {/* Primary Content Section */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Overview Skeleton */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 md:p-8 backdrop-blur-sm space-y-4">
                            <div className="h-6 w-32 bg-slate-800 rounded-md" />
                            <div className="space-y-2 pt-2">
                                <div className="h-4 w-full bg-slate-800/70 rounded" />
                                <div className="h-4 w-full bg-slate-800/70 rounded" />
                                <div className="h-4 w-4/5 bg-slate-800/70 rounded" />
                            </div>
                        </div>

                        {/* Key Features Skeleton */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 md:p-8 backdrop-blur-sm space-y-6">
                            <div className="h-6 w-36 bg-slate-800 rounded-md" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <div className="h-5 w-5 bg-slate-800 rounded-md shrink-0" />
                                        <div className="h-4 w-full bg-slate-800/70 rounded" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Project Gallery Skeleton */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 md:p-8 backdrop-blur-sm space-y-6">
                            <div className="h-6 w-40 bg-slate-800 rounded-md" />
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="aspect-video bg-slate-800 rounded-xl" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Meta Specifications & Links Sidebar Skeleton */}
                    <div className="space-y-6">
                        {/* Project Metrics */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm shadow-xl space-y-6">
                            <div className="h-4 w-28 bg-slate-800 rounded" />
                            <div className="divide-y divide-slate-800/60">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="flex items-center justify-between py-3.5">
                                        <div className="h-4 w-24 bg-slate-800/70 rounded" />
                                        <div className="h-4 w-20 bg-slate-800/70 rounded" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Links CTA Block */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm shadow-xl space-y-3">
                            <div className="h-11 w-full bg-slate-800 rounded-xl" />
                            <div className="h-11 w-full bg-slate-800/60 rounded-xl" />
                        </div>
                    </div>

                </div>

                {/* --- RELATED CATEGORY SHOWCASE SKELETON --- */}
                <div className="mt-20 pt-10 border-t border-slate-800/80 space-y-6">
                    <div className="space-y-2">
                        <div className="h-7 w-48 bg-slate-800 rounded-md" />
                        <div className="h-4 w-64 bg-slate-800/60 rounded" />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-2">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 space-y-4">
                                <div className="aspect-[16/10] bg-slate-800 rounded-xl w-full" />
                                <div className="h-5 w-3/4 bg-slate-800 rounded" />
                                <div className="h-4 w-full bg-slate-800/60 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}