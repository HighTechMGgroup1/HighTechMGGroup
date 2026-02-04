"use client";

import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Clock, MapPin, ShieldCheck } from "lucide-react";

import { useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [business, setBusiness] = useState("");
    const [notes, setNotes] = useState("");

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `
Hey Mukesh,
I want a website for my ${business} business.

Name: ${name}
Mobile: ${mobile}
Business: ${business}

Additional Details:
${notes}
    `;

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "916377072190";

        window.open(
            `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
            "_blank"
        );
    };

    return (
        <main className="bg-[#F9F8F6] text-stone-900">

            {/* ================= CONTACT HERO ================= */}
            <section className="relative pt-16 md:pt-24 pb-24 md:pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="rounded-[48px] bg-white border border-stone-200 shadow-xl px-10 py-16 md:px-20 md:py-24">
                        <div className="grid gap-20 md:grid-cols-2 items-start">

                            {/* LEFT */}
                            <div>
                                <span className="block mb-8 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-rose-600">
                                    Contact
                                </span>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                                    Let’s talk about <br />
                                    your project.
                                </h1>

                                <p className="mt-8 max-w-xl text-lg md:text-xl text-stone-600 leading-relaxed">
                                    Tell us what you’re building.
                                    We’ll help you turn it into a reliable, production-ready system.
                                </p>
                            </div>

                            {/* RIGHT */}
                            <div className="md:pt-24">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                                    What happens next
                                </h2>

                                <ul className="space-y-4 text-base md:text-lg text-stone-600">
                                    <li>• We review your requirement carefully</li>
                                    <li>• Suggest the right technical approach</li>
                                    <li>• Share timelines & cost transparently</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CONTACT FORM ================= */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 grid gap-20 lg:grid-cols-2 items-start">

                    {/* FORM CARD */}
                    <div className="rounded-[36px] bg-white border border-stone-200 p-10 md:p-14 shadow-sm">
                        <h2 className="text-3xl font-semibold">
                            Start a conversation
                        </h2>

                        <p className="mt-4 text-stone-600">
                            This will open WhatsApp with your details pre-filled.
                        </p>

                        <form onSubmit={handleWhatsAppSubmit} className="mt-10 space-y-6">

                            <input
                                required
                                placeholder="Your name"
                                className="w-full rounded-xl border border-stone-300 px-5 py-4"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <input
                                required
                                placeholder="Mobile number"
                                className="w-full rounded-xl border border-stone-300 px-5 py-4"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />

                            <input
                                required
                                placeholder="Business name"
                                className="w-full rounded-xl border border-stone-300 px-5 py-4"
                                value={business}
                                onChange={(e) => setBusiness(e.target.value)}
                            />

                            {/* Optional */}
                            <textarea
                                placeholder="Additional details (optional)"
                                rows={4}
                                className="w-full rounded-xl border border-stone-300 px-5 py-4"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />

                            <button
                                type="submit"
                                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-10 py-5 text-lg font-semibold text-white shadow-lg hover:scale-[1.03] transition"
                            >
                                Send via WhatsApp
                                <MessageCircle size={22} />
                            </button>

                        </form>
                    </div>

                    {/* CONTACT INFO */}
                    <div>
                        <h2 className="text-3xl font-semibold">
                            Direct contact
                        </h2>

                        <p className="mt-6 text-lg text-stone-600 max-w-md">
                            Prefer to reach us directly?
                        </p>

                        <div className="mt-10 space-y-6 text-lg text-stone-700">

                            <div className="flex items-center gap-4">
                                <Mail className="text-rose-500" />
                                <span>hightechmg@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <Phone className="text-rose-500" />
                                <span>+91 63770 72190</span> &
                                <span>+91 78785 83600</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <MessageCircle className="text-rose-500" />
                                <span>WhatsApp available</span>
                            </div>

                        </div>
                        <div className="mt-12 space-y-6 text-lg text-stone-700">

                            <div className="flex items-center gap-4">
                                <Clock className="text-rose-500" />
                                <span>Response time: within 24 hours</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <MapPin className="text-rose-500" />
                                <span>Working with clients across India</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <ShieldCheck className="text-rose-500" />
                                <span>Project discussions kept confidential</span>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= FOOT NOTE ================= */}
            <section className="pb-32 text-center">
                <p className="text-stone-500 max-w-3xl mx-auto">
                    We usually respond within 24 hours.
                    Clear requirements help us give accurate timelines and pricing.
                </p>
            </section>

        </main>
    );
}
