import React from "react";
import Link from "next/link";
// Importing the exact icons matching our mapped dataset
import {
    Layers,
    Brain,
    LayoutDashboard,
    ShoppingBag,
    CheckSquare,
    GraduationCap,
    Terminal,
    FolderDot
} from "lucide-react";

interface CategoryItem {
    name: string;
    iconName: string;
    count: number;
}

interface CategoriesGridProps {
    categories: CategoryItem[];
}

// Map strings cleanly to actual Lucide component instances to preserve compilation performance
const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
    Layers: Layers,
    Brain: Brain,
    LayoutDashboard: LayoutDashboard,
    ShoppingBag: ShoppingBag,
    CheckSquare: CheckSquare,
    GraduationCap: GraduationCap,
    Terminal: Terminal,
};

export default function CategoriesGrid({ categories }: CategoriesGridProps) {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => {
                const IconComponent = iconMap[category.iconName] || FolderDot;

                return (
                    <Link
                        key={category.name}
                        href={`/projects?category=${encodeURIComponent(category.name)}`}
                        className="group relative flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-slate-900/70 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]"
                    >
                        {/* Dynamic Card Internal Border Glow Highlight Accent */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/[0.01] rounded-2xl" />

                        {/* Left side: Icon Frame box matching your dark design token rules */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 border border-slate-800/80 text-slate-400 transition-colors duration-300 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 group-hover:text-emerald-400">
                            <IconComponent size={22} />
                        </div>

                        {/* Right side: Typographic category metadata */}
                        <div className="flex flex-col min-w-0">
                            <h3 className="text-sm font-bold text-white tracking-tight truncate group-hover:text-emerald-400 transition-colors duration-200">
                                {category.name}
                            </h3>
                            <span className="mt-0.5 text-xs font-semibold text-slate-500 group-hover:text-slate-400 transition-colors duration-200">
                                {category.count} {category.count === 1 ? "Project" : "Projects"}
                            </span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}