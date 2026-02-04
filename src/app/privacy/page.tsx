"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
    {
        title: "Information We Collect",
        content: [
            "Name, email address and contact details",
            "Project-related information you voluntarily share",
            "Basic technical data such as browser or device type",
        ],
    },
    {
        title: "How We Use Information",
        content: [
            "To respond to inquiries clearly and efficiently",
            "To understand business and project requirements",
            "To improve our website and service quality",
        ],
    },
    {
        title: "Data Protection",
        content:
            "We apply appropriate technical and organizational safeguards to protect your data from unauthorized access or misuse.",
    },
    {
        title: "Third-Party Services",
        content:
            "We do not sell your data. Any third-party services we use follow industry-standard privacy practices.",
    },
    {
        title: "Cookies",
        content:
            "Cookies help us improve user experience. You can disable them anytime via browser settings.",
    },
    {
        title: "Your Rights",
        content:
            "You can request access, correction, or deletion of your personal data by contacting us.",
    },
];

export default function PrivacyPolicyPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <main className="bg-gradient-to-b from-rose-50 via-stone-50 to-stone-100 text-stone-700">

            {/* ================= HERO ================= */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}
                    <div className="space-y-8">
                        <span className="inline-block rounded-full bg-gradient-to-r from-pink-200 to-rose-200 px-5 py-2 text-sm font-medium text-stone-800">
                            Legal & Trust
                        </span>

                        <h1 className="text-4xl md:text-6xl font-semibold text-stone-900 leading-tight">
                            Privacy built with <br />
                            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                                transparency & care
                            </span>
                        </h1>

                        <p className="text-xl text-stone-600 max-w-xl leading-relaxed">
                            We respect your data like we respect good engineering —
                            minimal, intentional, and protected.
                        </p>
                    </div>

                    {/* Right Card */}
                    <div className="rounded-3xl bg-white/70 backdrop-blur border border-rose-200 p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                        <h2 className="text-2xl font-semibold text-stone-800">
                            Our promise
                        </h2>

                        <ul className="mt-6 space-y-4 text-lg text-stone-600">
                            <li>• No data selling</li>
                            <li>• No shady tracking</li>
                            <li>• Security-first mindset</li>
                            <li>• You stay in control</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* ================= ACCORDION ================= */}
            <section className="pb-36">
                <div className="max-w-4xl mx-auto px-6 space-y-6">

                    {sections.map((section, i) => {
                        const open = openIndex === i;

                        return (
                            <div
                                key={i}
                                className={`rounded-2xl border bg-white/80 backdrop-blur transition-all
                ${open
                                        ? "border-rose-300 shadow-lg"
                                        : "border-stone-200 hover:border-rose-200 hover:shadow-md"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(open ? null : i)}
                                    className="w-full flex items-center justify-between px-8 py-6 text-left"
                                >
                                    <h3 className="text-xl font-medium text-stone-800">
                                        {section.title}
                                    </h3>

                                    <ChevronDown
                                        className={`transition-transform ${open ? "rotate-180 text-rose-500" : "text-stone-400"
                                            }`}
                                    />
                                </button>

                                {open && (
                                    <div className="px-8 pb-8 text-lg text-stone-600 space-y-3 animate-in fade-in slide-in-from-top-2">
                                        {Array.isArray(section.content) ? (
                                            section.content.map((item, idx) => (
                                                <p key={idx}>• {item}</p>
                                            ))
                                        ) : (
                                            <p>{section.content}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Footer */}
                    <div className="pt-10 text-sm text-stone-500 text-center">
                        Last updated: {new Date().toLocaleDateString()}
                    </div>

                </div>
            </section>
        </main>
    );
}
