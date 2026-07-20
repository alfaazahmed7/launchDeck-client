"use client";

import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

interface FormFields {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormFields>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL!;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`${baseUrl}/api/contact/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error("Transmission array reject.");

            // Clear inputs and drop open the success pipeline component view
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            console.error("Transmission error intercepted:", err);
            // Optional local toast warning hook could fallback here
        } finally {
            setIsSubmitting(false);
        }
    };

    // Immersive, attractive validation card component shown upon clean submission lifecycle resolution
    if (submitSuccess) {
        return (
            <div className="flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm space-y-4 min-h-[420px] transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 size={24} />
                </div>
                <div className="space-y-2 max-w-sm">
                    <h3 className="text-base font-bold text-white">Transmission Synchronized</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-medium">
                        Your operational data package was successfully written into our database registry logs. The administration core has prioritized your signal routing.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-2 rounded-xl border border-slate-800 bg-slate-950 px-4 py-2 text-xs font-bold text-slate-400 transition-all hover:border-slate-700 hover:text-slate-200 cursor-pointer"
                >
                    Submit New Message
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="p-6 rounded-2xl border border-slate-900 bg-slate-900/20 backdrop-blur-sm space-y-4"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input Node */}
                <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Name</label>
                    <input
                        type="text" id="name" name="name" required
                        value={formData.name} onChange={handleInputChange}
                        placeholder="Alfaaz Ahmed"
                        className="w-full h-10 rounded-xl bg-slate-950 border border-slate-900 px-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                </div>

                {/* Email Input Node */}
                <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email</label>
                    <input
                        type="email" id="email" name="email" required
                        value={formData.email} onChange={handleInputChange}
                        placeholder="alfaaz@example.com"
                        className="w-full h-10 rounded-xl bg-slate-950 border border-slate-900 px-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                </div>
            </div>

            {/* Subject Input Node */}
            <div className="space-y-1.5">
                <label htmlFor="subject" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                <input
                    type="text" id="subject" name="subject" required
                    value={formData.subject} onChange={handleInputChange}
                    placeholder="Application Deployment Pipeline Inquiry"
                    className="w-full h-10 rounded-xl bg-slate-950 border border-slate-900 px-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
            </div>

            {/* Message Textarea Node */}
            <div className="space-y-1.5">
                <label htmlFor="message" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Message</label>
                <textarea
                    id="message" name="message" required rows={5}
                    value={formData.message} onChange={handleInputChange}
                    placeholder="Enter explicit inquiry, error logs, or feedback parameters here..."
                    className="w-full rounded-xl bg-slate-950 border border-slate-900 p-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none leading-relaxed"
                />
            </div>

            {/* Submit Action Block */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex h-10 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 transition-all hover:bg-emerald-400 disabled:opacity-50 cursor-pointer shadow-lg shadow-emerald-500/5"
            >
                {isSubmitting ? (
                    <>Processing Matrix... <Loader2 size={13} className="animate-spin text-slate-950" /></>
                ) : (
                    <>Transmit Data Package <Send size={13} /></>
                )}
            </button>
        </form>
    );
}