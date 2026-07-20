import React from 'react';
import { Mail, MapPin, MessageSquareText } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const metadata = {
    title: 'Contact - LaunchDeck',
    description: 'Connect with LaunchDeck platform administration or submit system feedback inquiries.',
};

export default function ContactPage() {
    return (
        <div className="min-h-[calc(100vh-64px)] py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="w-full max-w-4xl space-y-12">

                {/* Section Header */}
                <div className="text-center sm:text-left">
                    <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
                        Inquiries Pipeline
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white">
                        Get in <span className="text-emerald-400">Touch</span>
                    </h1>
                    <p className="mt-2 text-xs text-slate-400 max-w-xl">
                        Have operational questions, framework suggestions, or architectural feedback? Drop a secure signal straight into our ingestion feed.
                    </p>
                </div>

                {/* Main Split Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

                    {/* Left Column: Context Channels Info (2 cols) */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="p-6 rounded-2xl border border-slate-900 bg-slate-900/10 backdrop-blur-sm space-y-6">

                            <div className="space-y-2">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">Direct Nodes</h2>
                                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                    Reach out directly through official platform directory networks for rapid human auditing.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {/* Email Anchor Node */}
                                <div className="flex items-start gap-3.5 group">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 text-emerald-400 border border-slate-900 shrink-0">
                                        <Mail size={14} />
                                    </div>
                                    <div className="space-y-0.5">
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Address</div>
                                        <a href="mailto:alfaazahmed010@gmail.com" className="text-xs font-medium text-slate-300 hover:text-emerald-400 transition-colors font-mono">
                                            alfaazahmed010@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* GitHub Anchor Node */}
                                <div className="flex items-start gap-3.5 group">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 text-emerald-400 border border-slate-900 shrink-0">
                                        <BsGithub size={14} />
                                    </div>
                                    <div className="space-y-0.5">
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">GitHub Link</div>
                                        <a href="https://github.com/alfaazahmed7" target="_blank" rel="noreferrer" className="text-xs font-medium text-slate-300 hover:text-emerald-400 transition-colors">
                                            github.com/alfaazahmed7
                                        </a>
                                    </div>
                                </div>

                                {/* LinkedIn Anchor Node */}
                                <div className="flex items-start gap-3.5 group">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 text-emerald-400 border border-slate-900 shrink-0">
                                        <BsLinkedin size={14} />
                                    </div>
                                    <div className="space-y-0.5">
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">LinkedIn Network</div>
                                        <a href="https://linkedin.com/in/alfaazahmed7" target="_blank" rel="noreferrer" className="text-xs font-medium text-slate-300 hover:text-emerald-400 transition-colors">
                                            linkedin.com/in/alfaazahmed7
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Fast Support Sub-Banner */}
                        <div className="p-4 rounded-xl border border-slate-900 bg-slate-900/5 flex gap-3 items-center">
                            <MessageSquareText size={16} className="text-emerald-500/60 shrink-0" />
                            <p className="text-[10px] font-medium text-slate-500 leading-normal">
                                Automated transmission processing runs 24/7. Average response queue verification window: less than 24 hours.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Interaction Transmission Hub Form Component (3 cols) */}
                    <div className="md:col-span-3">
                        <ContactForm />
                    </div>

                </div>

            </div>
        </div>
    );
}