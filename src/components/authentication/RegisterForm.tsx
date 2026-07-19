"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Terminal, Loader2, AlertCircle } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { CgGoogle } from 'react-icons/cg';
import toast from 'react-hot-toast';
import { BsGithub } from 'react-icons/bs';

export default function RegisterForm() {
    const router = useRouter();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
            setError("All input fields are strictly required.");
            return;
        }
        if (password.length < 8) {
            setError("Password criteria not met. Must be at least 8 characters.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Password confirmation match error. Fields must be identical.");
            return;
        }

        setIsLoading(true);

        try {
            const { error: authError } = await authClient.signUp.email({
                email,
                password,
                name: fullName,
                callbackURL: '/'
            });

            if (authError) {
                setError(authError.message || "An account with this email may already exist.");
                setIsLoading(false);
            } else {
                toast.success(`You have successfully register to LaunchDeck`);
                router.push('/login');
                router.refresh();
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
            setIsLoading(false);
        }
    };

    const handleSocialLogin = async (provider: 'google' | 'github') => {
        setError(null);
        try {
            await authClient.signIn.social({
                provider,
                callbackURL: '/'
            });
        } catch (err) {
            setError(`Failed to connect via ${provider}.`);
            toast.error(`${provider} registration failed`);
        }
    };

    return (
        // Adjusted sizing parameters to create a unified, perfectly scaled layout
        <div className="w-full max-w-5xl bg-slate-900/40 border border-slate-900 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl backdrop-blur-md">

            {/* --- LEFT PANEL: ONBOARDING STEPS --- */}
            <div className="w-full md:w-[42%] bg-gradient-to-b from-emerald-600 to-teal-950 p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden text-slate-950">
                <div className="absolute inset-0 bg-slate-950/10 mix-blend-overlay" />

                <div className="relative z-10 flex items-center gap-2 text-slate-950 font-black tracking-tight text-sm">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-950 text-emerald-400">
                        <Terminal size={14} strokeWidth={3} />
                    </div>
                    LaunchDeck
                </div>

                {/* Onboarding Dynamic Progression Framework */}
                <div className="relative z-10 my-auto py-8 space-y-6">
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-slate-950 lg:text-3xl leading-tight">
                            Unlock Your <br />Workspace
                        </h2>
                        <p className="mt-1 text-xs font-semibold text-teal-950/80 max-w-xs">
                            Create your account instantly to gain complete platform privileges.
                        </p>
                    </div>

                    <div className="space-y-2.5">
                        {/* Step 1: Current Active Phase */}
                        <div className="flex items-center gap-3 bg-slate-950 p-2.5 rounded-xl border border-slate-900 shadow-lg text-slate-100">
                            <span className="h-5 w-5 shrink-0 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center text-xs font-black">1</span>
                            <span className="text-xs font-bold tracking-tight">Create developer profile layer</span>
                        </div>

                        {/* Step 2: Unlocked Next Privileges */}
                        <div className="flex items-center gap-3 bg-slate-950/20 p-2.5 rounded-xl text-teal-950/80 font-medium">
                            <span className="h-5 w-5 shrink-0 rounded-full bg-slate-950/10 flex items-center justify-center text-xs font-bold">2</span>
                            <span className="text-xs font-bold tracking-tight">Unlock unlimited project submissions</span>
                        </div>

                        {/* Step 3: Unlocked Next Privileges */}
                        <div className="flex items-center gap-3 bg-slate-950/20 p-2.5 rounded-xl text-teal-950/80 font-medium">
                            <span className="h-5 w-5 shrink-0 rounded-full bg-slate-950/10 flex items-center justify-center text-xs font-bold">3</span>
                            <span className="text-xs font-bold tracking-tight">Access live stack analytics dashboard</span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 text-[9px] font-bold text-teal-950/60 tracking-wider uppercase">
                    © LaunchDeck System Dev Layer
                </div>
            </div>

            {/* --- RIGHT PANEL: INTERACTIVE FORM ELEMENTS --- */}
            <div className="w-full md:w-[58%] p-8 lg:p-10 flex flex-col justify-center bg-slate-950/60">
                <div className="w-full max-w-md mx-auto space-y-4">

                    <div>
                        <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                            Sign Up Account
                        </h1>
                        <p className="text-xs text-slate-500 mt-0.5 font-medium">
                            Enter your credentials below to initialize your cloud workspace layer.
                        </p>
                    </div>

                    {error && (
                        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 flex items-start gap-2 text-xs text-red-400 font-medium">
                            <AlertCircle size={14} className="shrink-0 mt-0.5" />
                            <span>{error}</span>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            onClick={() => handleSocialLogin('google')}
                            className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/30 px-3 py-2.5 text-xs font-bold text-slate-200 transition-all hover:border-slate-700 hover:bg-slate-900 cursor-pointer"
                        >
                            <CgGoogle size={14} className="text-red-400" /> Google
                        </button>
                        <button
                            type="button"
                            onClick={() => handleSocialLogin('github')}
                            className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/30 px-3 py-2.5 text-xs font-bold text-slate-200 transition-all hover:border-slate-700 hover:bg-slate-900 cursor-pointer"
                        >
                            <BsGithub size={14} /> Github
                        </button>
                    </div>

                    <div className="relative flex items-center justify-center py-1">
                        <div className="absolute w-full border-t border-slate-900" />
                        <span className="relative bg-[#0d1527] px-3 text-[9px] font-bold tracking-wider text-slate-600 uppercase">
                            Or continue with
                        </span>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-3.5">

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Full Name</label>
                            <input
                                type="text"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="eg. John Francisco"
                                className="w-full rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50 focus:bg-slate-900/70"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="eg. johnfrans@gmail.com"
                                className="w-full rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50 focus:bg-slate-900/70"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1 relative">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter password"
                                        className="w-full rounded-xl border border-slate-800 bg-slate-900/40 pl-3 pr-9 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50 focus:bg-slate-900/70"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400"
                                    >
                                        {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-1 relative">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Repeat password"
                                        className="w-full rounded-xl border border-slate-800 bg-slate-900/40 pl-3 pr-9 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all focus:border-emerald-500/50 focus:bg-slate-900/70"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400"
                                    >
                                        {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] text-slate-600 font-medium">Must be at least 8 characters long.</p>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-slate-950 transition-all hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2 shadow-xl"
                        >
                            {isLoading ? (
                                <>Initializing Base... <Loader2 size={12} className="animate-spin text-emerald-600" /></>
                            ) : (
                                "Sign Up"
                            )}
                        </button>
                    </form>

                    <p className="text-center text-xs text-slate-500 font-medium pt-1">
                        Already have an account?{' '}
                        <Link href="/login" className="text-emerald-400 font-bold hover:underline transition-all">
                            Log in
                        </Link>
                    </p>

                </div>
            </div>

        </div>
    );
}