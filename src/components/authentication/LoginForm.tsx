"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Terminal, Loader2, AlertCircle } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { CgGoogle } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import toast from 'react-hot-toast';

export default function LoginForm() {
    const router = useRouter();

    // Form Input States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // UI Interaction States
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Dynamic Login Handler using better-auth
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Validation Rules
        if (!email.trim() || !password) {
            setError("Email and password fields are strictly required.");
            return;
        }

        setIsLoading(true);

        try {
            const { error: authError } = await authClient.signIn.email({
                email,
                password,
                callbackURL: '/' // Redirect to home page upon authentication
            });

            if (authError) {
                setError(authError.message || "Invalid email or password combination.");
                setIsLoading(false);
            } else {
                toast.success(`Welcome to LaunchDeck`);
                router.push('/');
                router.refresh();
            }
        } catch (err) {
            setError("An unexpected error occurred. Please verify your connection.");
            setIsLoading(false);
        }
    };

    // Social Provider Handler using better-auth
    const handleSocialLogin = async (provider: 'google' | 'github') => {
        setError(null);
        try {
            await authClient.signIn.social({
                provider,
                callbackURL: '/'
            });
        } catch (err) {
            setError(`Failed to connect authentication framework via ${provider}.`);
            toast.error(`${provider} registration failed`);
        }
    };

    return (
        <div className="w-full max-w-5xl bg-slate-900/40 border border-slate-900 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl backdrop-blur-md">

            {/* --- LEFT PANEL: PLATFORM VALUE CHECKS --- */}
            <div className="w-full md:w-[42%] bg-gradient-to-b from-emerald-600 to-teal-950 p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden text-slate-950">
                <div className="absolute inset-0 bg-slate-950/10 mix-blend-overlay" />

                <div className="relative z-10 flex items-center gap-2 text-slate-950 font-black tracking-tight text-sm">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-950 text-emerald-400">
                        <Terminal size={14} strokeWidth={3} />
                    </div>
                    LaunchDeck
                </div>

                <div className="relative z-10 my-auto py-8 space-y-6">
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-slate-950 lg:text-3xl leading-tight">
                            Welcome Back <br />to LaunchDeck
                        </h2>
                        <p className="mt-1 text-xs font-semibold text-teal-950/80 max-w-xs">
                            Sign in to resume tracking production milestones and syncing codebases.
                        </p>
                    </div>

                    <div className="space-y-2.5">
                        <div className="flex items-center gap-3 bg-slate-950 p-2.5 rounded-xl border border-slate-900 shadow-lg text-slate-100">
                            <span className="h-5 w-5 shrink-0 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center text-xs font-black">✓</span>
                            <span className="text-xs font-bold tracking-tight">Manage showcase applications</span>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-950/20 p-2.5 rounded-xl text-teal-950/80 font-medium">
                            <span className="h-5 w-5 shrink-0 rounded-full bg-slate-950/10 flex items-center justify-center text-xs font-bold">✓</span>
                            <span className="text-xs font-bold tracking-tight">Track project statistics & engagement</span>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-950/20 p-2.5 rounded-xl text-teal-950/80 font-medium">
                            <span className="h-5 w-5 shrink-0 rounded-full bg-slate-950/10 flex items-center justify-center text-xs font-bold">✓</span>
                            <span className="text-xs font-bold tracking-tight">Connect with a network of builders</span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 text-[9px] font-bold text-teal-950/60 tracking-wider uppercase">
                    © LaunchDeck System Dev Layer
                </div>
            </div>

            {/* --- RIGHT PANEL: INTERACTIVE LOGIN INTERFACE --- */}
            <div className="w-full md:w-[58%] p-8 lg:p-10 flex flex-col justify-center bg-slate-950/60">
                <div className="w-full max-w-md mx-auto space-y-4">

                    <div>
                        <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                            Sign In Account
                        </h1>
                        <p className="text-xs text-slate-500 mt-0.5 font-medium">
                            Provide your cloud credentials to authenticate your profile session.
                        </p>
                    </div>

                    {error && (
                        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 flex items-start gap-2 text-xs text-red-400 font-medium">
                            <AlertCircle size={14} className="shrink-0 mt-0.5" />
                            <span>{error}</span>
                        </div>
                    )}

                    {/* OAuth Providers */}
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

                    {/* Email Sign In Form */}
                    <form onSubmit={handleLogin} className="space-y-3.5">

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

                        <div className="space-y-1 relative">
                            <div className="flex items-center justify-between">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Password</label>
                                <Link href="/forgot-password" className="text-[10px] font-bold text-emerald-500 hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your security password"
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

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-slate-950 transition-all hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4 shadow-xl cursor-pointer"
                        >
                            {isLoading ? (
                                <>Authenticating Session... <Loader2 size={12} className="animate-spin text-emerald-600" /></>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    <p className="text-center text-xs text-slate-500 font-medium pt-1">
                        Don't have an account yet?{' '}
                        <Link href="/register" className="text-emerald-400 font-bold hover:underline transition-all">
                            Sign up
                        </Link>
                    </p>

                </div>
            </div>

        </div>
    );
}