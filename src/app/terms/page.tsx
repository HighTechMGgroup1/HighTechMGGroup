"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const sections = [
    {
        title: "Services",
        content:
            "MG Tech Studio provides full-stack web development services including frontend, backend systems, databases, and deployment. All services are delivered as per mutually agreed requirements.",
    },
    {
        title: "Project Scope & Changes",
        content:
            "Project scope, timelines, and features are finalized before development. Any changes after approval may impact delivery time and cost.",
    },
    {
        title: "Payments",
        content:
            "Payments must follow agreed milestones. Failure to complete payments may result in service suspension or termination.",
    },
    {
        title: "Intellectual Property",
        content:
            "After full payment, ownership of the final project is transferred to the client unless stated otherwise. MG Tech Studio may showcase work for portfolio purposes.",
    },
    {
        title: "Client Responsibilities",
        content:
            "Clients must provide accurate requirements, content, and timely feedback. Delays in communication can affect project timelines.",
    },
    {
        title: "Limitation of Liability",
        content:
            "MG Tech Studio is not responsible for indirect, incidental, or consequential damages arising from use of delivered services.",
    },
    {
        title: "Termination",
        content:
            "Either party may terminate the agreement if terms are breached. Completed work until termination must be compensated.",
    },
    {
        title: "Changes to These Terms",
        content:
            "We may update these terms anytime. Continued use of services implies acceptance of revised terms.",
    },
];

export default function TermsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <main className="bg-gradient-to-b from-rose-50 via-stone-50 to-stone-100 text-stone-700">

            {/* ================= HERO ================= */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CARD (was right in privacy) */}
                    <div className="rounded-3xl bg-white/70 backdrop-blur border border-rose-200 p-10 md:p-14 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                        <h2 className="text-2xl md:text-3xl font-semibold text-stone-800">
                            Clear terms. Honest collaboration.
                        </h2>

                        <ul className="mt-6 space-y-4 text-lg text-stone-600">
                            <li>• Transparent scope & pricing</li>
                            <li>• Fair usage & responsibilities</li>
                            <li>• IP protection & ownership clarity</li>
                            <li>• Built for long-term trust</li>
                        </ul>
                    </div>

                    {/* RIGHT CONTENT (was left in privacy) */}
                    <div className="space-y-8">
                        <span className="inline-block rounded-full bg-gradient-to-r from-pink-200 to-rose-200 px-5 py-2 text-sm font-medium text-stone-800">
                            Legal Agreement
                        </span>

                        <h1 className="text-4xl md:text-6xl font-semibold text-stone-900 leading-tight">
                            Terms & <br />
                            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                                Conditions
                            </span>
                        </h1>

                        <p className="text-xl text-stone-600 max-w-xl leading-relaxed">
                            These terms define how we work together — clearly, professionally,
                            and without surprises.
                        </p>
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
                                        className={`transition-transform ${open
                                                ? "rotate-180 text-rose-500"
                                                : "text-stone-400"
                                            }`}
                                    />
                                </button>

                                {open && (
                                    <div className="px-8 pb-8 text-lg text-stone-600 leading-relaxed animate-in fade-in slide-in-from-top-2">
                                        {section.content}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* ================= CTA ================= */}
                    <div className="mt-16 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-12 py-5 text-lg font-medium text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
                        >
                            Contact us
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Footer */}
                    <div className="pt-12 text-sm text-stone-500 text-center">
                        Last updated: {new Date().toLocaleDateString()}
                    </div>

                </div>
            </section>
        </main>
    );
}
