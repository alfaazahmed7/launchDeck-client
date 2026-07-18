"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    // Tracks the index of the currently open accordion panel (null means all are closed)
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className={`overflow-hidden rounded-2xl border bg-slate-900/40 backdrop-blur-sm transition-all duration-300 ${isOpen ? "border-emerald-500/40 bg-slate-900/60" : "border-slate-800 hover:border-slate-700"
                            }`}
                    >
                        {/* Clickable Header Button Element */}
                        <button
                            type="button"
                            onClick={() => toggleAccordion(index)}
                            className="flex w-full items-center justify-between p-5 text-left transition-colors duration-200"
                        >
                            <span className={`text-sm font-bold tracking-tight text-white transition-colors duration-200 ${isOpen ? "text-emerald-400" : "group-hover:text-white"}`}>
                                {item.question}
                            </span>
                            <ChevronDown
                                size={18}
                                className={`text-slate-400 shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180 text-emerald-400" : ""
                                    }`}
                            />
                        </button>

                        {/* Content Drawer Box Layout */}
                        <div
                            className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="border-t border-slate-800/60 p-5 pt-0 text-xs leading-relaxed text-slate-400">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}