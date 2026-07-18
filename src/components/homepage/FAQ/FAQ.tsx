import React from "react";
import FAQAccordion from "./FAQAccordion";

// Hardcoded static configuration dataset array matching core platform questions
const FAQ_DATA = [
    {
        question: "What is LaunchDeck?",
        answer: "LaunchDeck is a premier, open-source showcase platform designed for software developers to publish their production apps, utilities, and SaaS systems, allowing other creators to discover engineering architectures and find inspiration.",
    },
    {
        question: "How do I list my project on the platform?",
        answer: "Currently, our directory data layer reads straight from our unified MongoDB database collection. You can structure your submission format using our clean Mongoose schema definitions including features list, technology array parameters, and repository linkages.",
    },
    {
        question: "Can I filter projects by specific technology stacks?",
        answer: "Yes! Our explore engine is fully dynamic. You can instantly refine your queries by specific parameters like TypeScript, Next.js, Prisma, or Tailwind CSS, alongside difficulty tiers (Beginner, Intermediate, Advanced) and execution statuses.",
    },
    {
        question: "Is LaunchDeck completely free to use?",
        answer: "Absolutely. LaunchDeck is built by creators for the global developer ecosystem. All source code repository links, live production demos, and system documentation profiles are fully public and accessible without paywalls.",
    },
    {
        question: "What makes Featured Projects special?",
        answer: "Featured projects are top-tier platforms curated directly onto the homepage array based on high code readability, robust implementation schemas, innovative feature matrices, and premium design presentation aesthetics.",
    },
];

const FAQ = () => {
    return (
        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">

                {/* Section Heading Panel */}
                <div className="mb-14 text-center">
                    <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
                        Got Questions?
                    </span>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Frequently Asked <span className="text-emerald-400">Questions</span>
                    </h2>
                    <p className="mt-2 text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                        Everything you need to know about navigating, filtering, and showcasing engineering builds inside our ecosystem.
                    </p>
                </div>

                {/* Dynamic Presentation Layout Layer */}
                <FAQAccordion items={FAQ_DATA} />

            </div>
        </section>
    );
};

export default FAQ;