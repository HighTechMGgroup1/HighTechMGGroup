import { Check, X, ArrowRight } from "lucide-react";

export default function PricingPage() {
    return (
        <main className="bg-[#F9F8F6] text-[#1A1A1A] selection:bg-rose-500/10">

            {/* ================= PRICING HERO ================= */}
            <section className="relative pt-32 md:pt-24 pb-32">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-24 left-20 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />
                    <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-stone-300/40 blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative overflow-hidden rounded-[48px] bg-white/80 backdrop-blur border border-stone-200 shadow-xl px-10 py-20 md:px-20">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.08),transparent_60%)]" />

                        <div className="relative z-10 grid gap-16 md:grid-cols-2 items-start">

                            {/* LEFT */}
                            <div>
                                <span className="block mb-6 text-sm font-semibold tracking-widest text-rose-600">
                                    PRICING
                                </span>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-tight">
                                    Simple pricing. <br />
                                    <span className="text-rose-600">Serious engineering.</span>
                                </h1>

                                <p className="mt-10 text-xl text-stone-600 leading-relaxed max-w-xl">
                                    We price based on scope, system complexity, and long-term
                                    maintainability — not templates or shortcuts.
                                </p>
                            </div>

                            {/* RIGHT */}
                            <div className="rounded-[32px] border border-stone-200 bg-white p-10 md:p-12">
                                <h2 className="text-2xl md:text-3xl font-semibold text-stone-900">
                                    How pricing works
                                </h2>

                                <ul className="mt-8 space-y-4 text-lg text-stone-600 leading-relaxed">
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
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

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
                        <div className="relative w-full rounded-[36px] bg-white border-2 border-rose-500 p-10 md:p-12 shadow-xl transition hover:-translate-y-1">
                            <span className="absolute -top-3 left-6 rounded-full bg-rose-500 px-4 py-1 text-xs font-semibold text-white">
                                Recommended
                            </span>

                            <h3 className="text-2xl font-bold">Pro</h3>
                            <p className="mt-2 text-stone-600">
                                Serious systems for growing businesses.
                            </p>

                            <p className="mt-6 text-4xl font-extrabold">₹40k+</p>

                            <ul className="mt-10 space-y-4 text-stone-600">
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
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-center">
                        What Pro really includes
                    </h2>

                    <div className="mt-20 grid gap-10 md:grid-cols-3">

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
            <section className="py-36">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative overflow-hidden rounded-[56px] bg-gradient-to-r from-[#2a0f1d] via-[#0f0f0f] to-[#0f0f0f] px-10 py-20 md:px-20">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(236,72,153,0.25),transparent_55%)]" />

                        <div className="relative z-10 grid gap-12 md:grid-cols-2 md:items-center">

                            <div>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                                    Not sure which plan fits?
                                </h2>

                                <p className="mt-6 max-w-3xl text-xl md:text-2xl text-white/80 leading-relaxed">
                                    Share your requirements — we’ll recommend the right solution with
                                    clear scope and realistic pricing.
                                </p>
                            </div>

                            <div className="flex md:justify-end">
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-14 py-6 text-xl font-semibold text-white shadow-2xl transition-all hover:scale-[1.04]"
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

function PricingCard({
    title,
    price,
    desc,
    children,
}: {
    title: string;
    price: string;
    desc: string;
    children: React.ReactNode;
}) {
    return (
        <div className="w-full rounded-[32px] bg-white border border-stone-200 p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="mt-2 text-stone-600">{desc}</p>
            <p className="mt-6 text-4xl font-extrabold">{price}</p>
            <ul className="mt-10 space-y-4 text-stone-600">{children}</ul>
        </div>
    );
}

function DetailCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-[28px] border border-stone-200 p-10 text-center transition hover:border-rose-300">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                {children}
            </p>
        </div>
    );
}

function Feature({
    children,
    ok = false,
}: {
    children: React.ReactNode;
    ok?: boolean;
}) {
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
