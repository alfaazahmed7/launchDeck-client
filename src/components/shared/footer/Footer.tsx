import React from "react";
import Link from "next/link";
import {
    Mail,
    MapPin,
    Terminal,
    ArrowUpRight
} from "lucide-react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-slate-900 bg-slate-950/40 text-slate-400 backdrop-blur-sm px-4 pt-16 pb-8 sm:px-6 lg:px-8">

            {/* Glow highlight blending into layout grids */}
            <div className="absolute top-0 left-1/2 -z-10 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-12">

                    {/* Brand Presentation Panel (Takes 2 columns on wide viewports) */}
                    <div className="col-span-2 space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2 text-white font-extrabold tracking-tight text-lg">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-slate-950">
                                <Terminal size={18} strokeWidth={2.5} />
                            </div>
                            Launch<span className="text-emerald-400">Deck</span>
                        </Link>
                        <p className="text-xs leading-relaxed max-w-sm text-slate-500">
                            The premium open-source showcase platform built to help modern software engineers display code architectures, track production milestones, and discover exceptional systems.
                        </p>
                        {/* Social Links Matrix */}
                        <div className="flex items-center gap-3 pt-2">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/30 hover:border-slate-700 hover:text-white hover:bg-slate-900 transition-all duration-200" aria-label="GitHub">
                                <BsGithub size={15} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/30 hover:border-slate-700 hover:text-white hover:bg-slate-900 transition-all duration-200" aria-label="LinkedIn">
                                <LiaLinkedin size={15} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/30 hover:border-slate-700 hover:text-white hover:bg-slate-900 transition-all duration-200" aria-label="Twitter">
                                <BsTwitter size={15} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h3>
                        <ul className="space-y-2.5 text-xs font-medium">
                            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                            <li><Link href="/projects" className="hover:text-emerald-400 transition-colors">Explore</Link></li>
                            <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link></li>
                            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-white">Resources</h3>
                        <ul className="space-y-2.5 text-xs font-medium">
                            <li>
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-emerald-400 transition-colors">
                                    GitHub Repository <ArrowUpRight size={12} className="text-slate-600" />
                                </a>
                            </li>
                            <li><Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Information Column */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-white">Contact</h3>
                        <ul className="space-y-3 text-xs font-medium">
                            <li className="flex items-start gap-2.5 leading-relaxed text-slate-500">
                                <MapPin size={15} className="text-slate-600 shrink-0 mt-0.5" />
                                <span>Global Digital Hub<br />Ecosystem Infrastructure</span>
                            </li>
                            <li>
                                <a href="mailto:support@launchdeck.dev" className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors">
                                    <Mail size={15} className="text-slate-600 shrink-0" />
                                    <span>support@launchdeck.dev</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Horizontal Bar & Copyright Block */}
                <div className="mt-16 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-slate-500">
                    <p>© {currentYear} LaunchDeck Platform. All engineering assets reserved.</p>
                    <p className="flex items-center gap-1">
                        Built for builders <span className="text-emerald-500">✓</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}