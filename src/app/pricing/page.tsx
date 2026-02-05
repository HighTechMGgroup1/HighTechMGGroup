import { Check, X, ArrowRight } from "lucide-react";

export default function PricingPage() {
    return (
        <main className="bg-[#F9F8F6] text-[#1A1A1A] overflow-x-hidden selection:bg-rose-500/10">

            {/* ================= PRICING HERO ================= */}
            <section className="relative pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-28 md:pb-32">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-16 -left-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
                    <div className="absolute bottom-16 -right-24 h-80 w-80 rounded-full bg-stone-300/40 blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] md:rounded-[48px] bg-white/80 backdrop-blur border border-stone-200 shadow-xl px-6 sm:px-10 md:px-20 py-12 sm:py-16 md:py-20">

                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.08),transparent_60%)]" />

                        <div className="relative z-10 grid gap-12 md:gap-16 md:grid-cols-2 items-start">

                            {/* LEFT */}
                            <div>
                                <span className="block mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-widest text-rose-600">
                                    PRICING
                                </span>

                                <h1 className="font-extrabold tracking-tight leading-tight text-[clamp(2.2rem,6vw,3.75rem)] text-stone-900">
                                    Simple pricing. <br />
                                    <span className="text-rose-600">Serious engineering.</span>
                                </h1>

                                <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed max-w-xl">
                                    We price based on scope, system complexity, and long-term
                                    maintainability — not templates or shortcuts.
                                </p>
                            </div>

                            {/* RIGHT */}
                            <div className="rounded-[22px] sm:rounded-[28px] md:rounded-[32px] border border-stone-200 bg-white p-6 sm:p-8 md:p-12">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-stone-900">
                                    How pricing works
                                </h2>

                                <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-base sm:text-lg text-stone-600 leading-relaxed">
                                    <li>• Clear scope before development starts</li>
                                    <li>• No hidden costs or surprise upgrades</li>
                                    <li>• Flexible plans as your product grows</li>
                                    <li>• Engineering-first decision making</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PRICING CARDS ================= */}
            <section className="py-24 sm:py-28 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">

                        <PricingCard title="Basic" price="₹5,000" desc="For simple business presence.">
                            <Feature ok>Responsive website</Feature>
                            <Feature ok>WhatsApp enquiry button</Feature>
                            <Feature ok>Static pages</Feature>
                            <Feature ok>Mobile-friendly UI</Feature>
                            <Feature>No admin panel</Feature>
                            <Feature>No backend / database</Feature>
                        </PricingCard>

                        <PricingCard title="Standard" price="₹15k – ₹25k" desc="Structured & professional websites.">
                            <Feature ok>Next.js frontend</Feature>
                            <Feature ok>Multiple pages & sections</Feature>
                            <Feature ok>WhatsApp enquiry flow</Feature>
                            <Feature ok>Improved UI / UX</Feature>
                            <Feature ok>Basic SEO setup</Feature>
                            <Feature>No complex admin dashboard</Feature>
                        </PricingCard>

                        {/* PRO */}
                        <div className="relative w-full rounded-[28px] sm:rounded-[32px] md:rounded-[36px] bg-white border-2 border-rose-500 p-6 sm:p-8 md:p-12 shadow-xl transition hover:-translate-y-1">
                            <span className="absolute -top-3 left-6 rounded-full bg-rose-500 px-4 py-1 text-xs font-semibold text-white">
                                Recommended
                            </span>

                            <h3 className="text-2xl font-bold">Pro</h3>
                            <p className="mt-2 text-stone-600">
                                Serious systems for growing businesses.
                            </p>

                            <p className="mt-6 text-4xl font-extrabold">₹40k+</p>

                            <ul className="mt-8 sm:mt-10 space-y-3 sm:space-y-4 text-stone-600">
                                <Feature ok>Full-stack web application</Feature>
                                <Feature ok>Backend APIs & database</Feature>
                                <Feature ok>Admin dashboard</Feature>
                                <Feature ok>Auth & role-based access</Feature>
                                <Feature ok>Scalable architecture</Feature>
                                <Feature ok>Deployment & production setup</Feature>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= PRO DETAILS ================= */}
            <section className="py-24 sm:py-28 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
                        What Pro really includes
                    </h2>

                    <div className="mt-14 sm:mt-20 grid gap-8 sm:gap-10 md:grid-cols-3">
                        <DetailCard title="Architecture">
                            Clean backend structure, scalable design, and long-term maintainability.
                        </DetailCard>

                        <DetailCard title="Security & Control">
                            Secure authentication, authorization, admin dashboard, and role-based access.
                        </DetailCard>

                        <DetailCard title="Performance & Scale">
                            Optimized APIs, database performance, monitoring, and future extensibility.
                        </DetailCard>
                    </div>
                </div>
            </section>

            {/* ================= CTA CARD ================= */}
            <section className="py-28 sm:py-32 md:py-36">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="relative overflow-hidden rounded-[36px] sm:rounded-[48px] md:rounded-[56px] bg-gradient-to-r from-[#2a0f1d] via-[#0f0f0f] to-[#0f0f0f] px-6 sm:px-10 md:px-20 py-14 sm:py-16 md:py-20">

                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(236,72,153,0.25),transparent_55%)]" />

                        <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">

                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight">
                                    Not sure which plan fits?
                                </h2>

                                <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-xl md:text-2xl text-white/80 leading-relaxed">
                                    Share your requirements — we’ll recommend the right solution with
                                    clear scope and realistic pricing.
                                </p>
                            </div>

                            <div className="flex md:justify-end">
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 sm:px-14 py-5 sm:py-6 text-lg sm:text-xl font-semibold text-white shadow-2xl transition-all hover:scale-[1.04]"
                                >
                                    Talk to Us
                                    <span className="transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

/* ================= REUSABLE ================= */

function PricingCard({ title, price, desc, children }: any) {
    return (
        <div className="w-full rounded-[26px] sm:rounded-[32px] bg-white border border-stone-200 p-6 sm:p-8 md:p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="mt-2 text-stone-600">{desc}</p>
            <p className="mt-6 text-4xl font-extrabold">{price}</p>
            <ul className="mt-8 sm:mt-10 space-y-3 sm:space-y-4 text-stone-600">
                {children}
            </ul>
        </div>
    );
}

function DetailCard({ title, children }: any) {
    return (
        <div className="rounded-[24px] sm:rounded-[28px] border border-stone-200 p-6 sm:p-10 text-center transition hover:border-rose-300">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-stone-600 leading-relaxed">
                {children}
            </p>
        </div>
    );
}

function Feature({ children, ok = false }: any) {
    return (
        <li className="flex items-start gap-3">
            {ok ? (
                <Check className="mt-1 text-rose-500" size={18} />
            ) : (
                <X className="mt-1 text-stone-400" size={18} />
            )}
            <span>{children}</span>
        </li>
    );
}
