"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, X, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';

export default function AddProjectForm() {
    const router = useRouter();

    // 1. Form Field States
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [status, setStatus] = useState('');
    const [thumbnailImage, setThumbnailImage] = useState('');
    const [overview, setOverview] = useState('');
    const [liveDemo, setLiveDemo] = useState('');
    const [githubRepo, setGithubRepo] = useState('');

    // Dynamic Array States (Technologies, Features, Gallery)
    const [technologies, setTechnologies] = useState<string[]>([]);
    const [techInput, setTechInput] = useState('');

    const [features, setFeatures] = useState<string[]>([]);
    const [featureInput, setFeatureInput] = useState('');

    const [galleryImages, setGalleryImages] = useState<string[]>([]);
    const [galleryInput, setGalleryInput] = useState('');

    // UI Status Layer States
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    // Base URL
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL!;

    // Logged in user data
    const userData = authClient.useSession();
    const user = userData.data?.user;

    // Dynamic Helpers for Tag & Array Appending
    const addTech = () => {
        if (techInput.trim() && !technologies.includes(techInput.trim())) {
            setTechnologies([...technologies, techInput.trim()]);
            setTechInput('');
        }
    };

    const addFeature = () => {
        if (featureInput.trim() && !features.includes(featureInput.trim())) {
            setFeatures([...features, featureInput.trim()]);
            setFeatureInput('');
        }
    };

    const addGalleryImage = () => {
        if (galleryInput.trim() && !galleryImages.includes(galleryInput.trim())) {
            setGalleryImages([...galleryImages, galleryInput.trim()]);
            setGalleryInput('');
        }
    };

    const handleReset = () => {
        setName(''); setTagline(''); setCategory(''); setDifficulty(''); setStatus('');
        setThumbnailImage(''); setOverview(''); setLiveDemo(''); setGithubRepo('');
        setTechnologies([]); setFeatures([]); setGalleryImages([]); setGalleryInput('');
        setError(null); setSuccess(null);
    };

    // Form Submit Submission Protocol
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Core Requirement Validations
        if (!name || !tagline || !category || !difficulty || !status || !thumbnailImage || !overview) {
            setError("All textual structural fields are required.");
            return;
        }
        if (technologies.length === 0) {
            setError("Please append at least one core component framework to the technology stack.");
            return;
        }

        setIsLoading(true);

        // Map perfectly structured payload parameters to align with db schema
        const payload = {
            name,
            userId: user?.id,
            userEmail: user?.email,
            userName: user?.name,
            tagline,
            category,
            technologies,
            difficulty,
            status,
            publishedDate: new Date().toISOString().split('T')[0],
            thumbnailImage,
            overview,
            features,
            projectGallery: galleryImages,
            links: {
                liveDemo,
                githubRepo
            },
            featured: false
        };

        try {
            const response = await fetch(`${baseUrl}/api/add-project`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                toast.error("Failed to compile database record insertion.");
                throw new Error("Failed to compile database record insertion.");
            }

            // 1. Instantly stop the loader on the publish button
            setIsLoading(false);

            // 2. Clear out all inputs and reset form states completely
            handleReset();

            // 3. Inform the user of the successful submission
            setSuccess("Project blueprint published successfully!");
            toast.success('You have successfully posted a project in LaunchDeck');

            router.refresh();

        } catch (err: any) {
            setError(err.message || "An error occurred while uploading system metrics.");
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/40 border border-slate-900 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">

            {/* Context Feedback Banners */}
            {error && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 flex items-start gap-3 text-xs text-red-400 font-medium animate-fadeIn">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{error}</span>
                </div>
            )}
            {success && (
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 flex items-start gap-3 text-xs text-emerald-400 font-medium animate-fadeIn">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                    <span>{success}</span>
                </div>
            )}

            {/* Row 1: Primary Identity Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Project Name</label>
                    <input
                        type="text" required value={name} onChange={(e) => setName(e.target.value)}
                        placeholder="eg. Supabase Studio"
                        className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50"
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Short Tagline</label>
                    <input
                        type="text" required value={tagline} onChange={(e) => setTagline(e.target.value)}
                        placeholder="eg. The open-source Firebase alternative database dashboard."
                        className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50"
                    />
                </div>
            </div>

            {/* Row 2: Metadata Classifications */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Category</label>
                    <select
                        required value={category} onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-white outline-none transition-all focus:border-emerald-500/50 appearance-none"
                    >
                        <option value="" disabled className="text-slate-600">Select Category</option>
                        {["SaaS", "AI", "Dashboard", "E-commerce", "Productivity", "Education", "Developer Tools"].map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Difficulty</label>
                    <select
                        required value={difficulty} onChange={(e) => setDifficulty(e.target.value)}
                        className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-white outline-none transition-all focus:border-emerald-500/50"
                    >
                        <option value="" disabled>Select Tier</option>
                        {["Beginner", "Intermediate", "Advanced"].map(diff => (
                            <option key={diff} value={diff}>{diff}</option>
                        ))}
                    </select>
                </div>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Development Status</label>
                    <select
                        required value={status} onChange={(e) => setStatus(e.target.value)}
                        className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-white outline-none transition-all focus:border-emerald-500/50"
                    >
                        <option value="" disabled>Select Status</option>
                        {["Idea", "Development", "Production"].map(st => (
                            <option key={st} value={st}>{st}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Row 3: Full Project Overview */}
            <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Full Description (Overview)</label>
                <textarea
                    required rows={4} value={overview} onChange={(e) => setOverview(e.target.value)}
                    placeholder="Provide a detailed system execution description summary outlining your architecture..."
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50 resize-none leading-relaxed"
                />
            </div>

            {/* Row 4: Dynamic Interactive Lists Matrix (Tech Stack & Features) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Tech Stack Collector */}
                <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Technology Stack</label>
                    <div className="flex gap-2">
                        <input
                            type="text" value={techInput} onChange={(e) => setTechInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                            placeholder="Add tech (eg. Next.js)"
                            className="flex-1 rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none focus:border-emerald-500/50"
                        />
                        <button type="button" onClick={addTech} className="rounded-xl bg-emerald-500 p-2.5 text-slate-950 hover:bg-emerald-400 transition-all cursor-pointer">
                            <Plus size={16} strokeWidth={2.5} />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 min-h-[32px] p-2 bg-slate-950/40 rounded-xl border border-slate-900/60">
                        {technologies.map(tech => (
                            <span key={tech} className="inline-flex items-center gap-1 rounded bg-slate-950 border border-slate-800 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-300">
                                {tech}
                                <X size={10} className="text-slate-500 hover:text-red-400 cursor-pointer" onClick={() => setTechnologies(technologies.filter(t => t !== tech))} />
                            </span>
                        ))}
                    </div>
                </div>

                {/* Features Checklist Collector */}
                <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Key Features List</label>
                    <div className="flex gap-2">
                        <input
                            type="text" value={featureInput} onChange={(e) => setFeatureInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                            placeholder="Add feature capability"
                            className="flex-1 rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none focus:border-emerald-500/50"
                        />
                        <button type="button" onClick={addFeature} className="rounded-xl bg-emerald-500 p-2.5 text-slate-950 hover:bg-emerald-400 transition-all cursor-pointer">
                            <Plus size={16} strokeWidth={2.5} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-1 min-h-[32px] p-2 bg-slate-950/40 rounded-xl border border-slate-900/60">
                        {features.map(feat => (
                            <span key={feat} className="flex items-center justify-between gap-2 rounded bg-slate-950/80 border border-slate-850 px-2.5 py-1 text-[10px] text-slate-300">
                                <span className="truncate">{feat}</span>
                                <X size={12} className="text-slate-500 hover:text-red-400 cursor-pointer shrink-0" onClick={() => setFeatures(features.filter(f => f !== feat))} />
                            </span>
                        ))}
                    </div>
                </div>

            </div>

            {/* Row 5: Imagery URLs Layer */}
            <div className="space-y-4 border-t border-slate-900 pt-4">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Main Thumbnail Image URL</label>
                    <input
                        type="url" required value={thumbnailImage} onChange={(e) => setThumbnailImage(e.target.value)}
                        placeholder="https://images.unsplash.com/..."
                        className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50"
                    />
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Gallery Showcase Images</label>
                    <div className="flex gap-2">
                        <input
                            type="url" value={galleryInput} onChange={(e) => setGalleryInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addGalleryImage())}
                            placeholder="Append image gallery asset links"
                            className="flex-1 rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none focus:border-emerald-500/50"
                        />
                        <button type="button" onClick={addGalleryImage} className="rounded-xl bg-emerald-500 p-2.5 text-slate-950 hover:bg-emerald-400 transition-all cursor-pointer">
                            <Plus size={16} strokeWidth={2.5} />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-24 overflow-y-auto p-1">
                        {galleryImages.map(img => (
                            <span key={img} className="flex items-center justify-between gap-2 rounded bg-slate-950 border border-slate-800 px-2 py-1 text-[9px] text-slate-400">
                                <span className="truncate flex-1 font-mono">{img}</span>
                                <X size={12} className="text-slate-500 hover:text-red-400 cursor-pointer shrink-0" onClick={() => setGalleryImages(galleryImages.filter(g => g !== img))} />
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Row 6: External Hyperlinks Target Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-900 pt-4">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">GitHub Repository URL</label>
                    <input
                        type="url" value={githubRepo} onChange={(e) => setGithubRepo(e.target.value)}
                        placeholder="https://github.com/username/repo"
                        className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50"
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Live Demo URL</label>
                    <input
                        type="url" value={liveDemo} onChange={(e) => setLiveDemo(e.target.value)}
                        placeholder="https://domain.com"
                        className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50"
                    />
                </div>
            </div>

            {/* Form Actions Footer Panel */}
            <div className="mt-8 pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                    type="button" onClick={handleReset} disabled={isLoading}
                    className="w-full sm:w-auto rounded-xl border border-slate-800 bg-slate-950 px-5 py-3 text-xs font-bold text-slate-400 transition-all hover:border-slate-700 hover:text-slate-200 disabled:opacity-50 cursor-pointer"
                >
                    Reset Form
                </button>
                <button
                    type="submit" disabled={isLoading}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-xs font-bold text-slate-950 transition-all hover:bg-emerald-400 disabled:opacity-50 shadow-lg cursor-pointer"
                >
                    {isLoading ? (
                        <>Publishing... <Loader2 size={14} className="animate-spin text-slate-950" /></>
                    ) : (
                        "Publish Project"
                    )}
                </button>
            </div>

        </form>
    );
}