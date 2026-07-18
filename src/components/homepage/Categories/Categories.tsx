import React from "react";
import { serverFetch } from "@/lib/core/server";
import { Project } from "@/types/project";
import CategoriesGrid from "./CategoriesGrid";

// Hardcoded static configuration arrays mapping matching category metrics
const CATEGORIES_CONFIG = [
    {name: "Analytics", iconName: "ChartNoAxesCombined"},
    { name: "SaaS", iconName: "Layers" },
    { name: "AI", iconName: "Brain" },
    { name: "Dashboard", iconName: "LayoutDashboard" },
    { name: "E-commerce", iconName: "ShoppingBag" },
    { name: "Productivity", iconName: "CheckSquare" },
    { name: "Education", iconName: "GraduationCap" },
    { name: "Developer Tools", iconName: "Terminal" },
];

const Categories = async () => {
    let categoriesData = CATEGORIES_CONFIG.map(cat => ({ ...cat, count: 0 }));

    try {
        // Fetch all records on the server layer using your existing path strategy
        const allProjects: Project[] = await serverFetch("/api/projects/for=categories");

        if (Array.isArray(allProjects)) {
            // Dynamically calculate document counts matching each target category name string
            categoriesData = CATEGORIES_CONFIG.map((cat) => {
                const matchingCount = allProjects.filter(
                    (project) => project.category?.toLowerCase() === cat.name.toLowerCase()
                ).length;

                return {
                    ...cat,
                    count: matchingCount,
                };
            });
        }
    } catch (error) {
        console.error("Error aggregating home dashboard category counts:", error);
    }

    return (
        <section className="relative px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Section Typography Header Block */}
                <div className="mb-12 text-center md:text-left">
                    <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
                        Explore Collections
                    </span>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Browse by <span className="text-emerald-400">Category</span>
                    </h2>
                    <p className="mt-2 text-slate-400 max-w-md">
                        Find the exact software frameworks, code bases, and utilities built for your specific target ecosystem.
                    </p>
                </div>

                {/* Clean presentation layout controller */}
                <CategoriesGrid categories={categoriesData} />

            </div>
        </section>
    );
};

export default Categories;