import {
    Code2,
    LayoutDashboard,
    MessageCircle,
    Rocket,
    ArrowRight,
    ChevronRight,
} from "lucide-react";

export default function ServicesPage() {
    const pinkHex = "#FF1A75";

    const services = [
        {
            title: "Modern Frontend Engineering",
            desc: "Ultra-fast, SEO-optimized interfaces built with Next.js. Designed for smooth interactions and calm, premium aesthetics.",
            icon: Code2,
        },
        {
            title: "WhatsApp Commerce Systems",
            desc: "Turn customer conversations into high-converting sales flows with seamless WhatsApp-based ordering systems.",
            icon: MessageCircle,
        },
        {
            title: "Admin Dashboards",
            desc: "Custom-built dashboards that give you absolute clarity over data, users, and business operations.",
            icon: LayoutDashboard,
        },
        {
            title: "Performance & SEO",
            desc: "Systems engineered for speed, Core Web Vitals, and long-term search visibility from day one.",
            icon: Rocket,
        },
    ];

    return (
        <main className="bg-[#F9F8F6] text-[#1A1A1A] selection:bg-[#FF1A75]/10">

            {/* ================= SERVICES HERO CARD ================= */}
            <section className="relative pt-14 md:pt-30 pb-24 md:pb-16 bg-[#F9F8F6]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* CARD */}
                    <div className="relative overflow-hidden rounded-[48px] bg-white shadow-xl border border-stone-200 px-10 py-16 md:px-20 md:py-24">

                        {/* subtle pink gradient */}
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(236,72,153,0.10),transparent_60%)]" />

                        <div className="relative z-10 grid gap-16 md:grid-cols-2 items-start">

                            {/* LEFT — CORE STATEMENT */}
                            <div>
                                <span className="block mb-6 text-sm font-semibold tracking-widest text-rose-600 uppercase">
                                    Services & Capabilities
                                </span>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 leading-tight">
                                    We don’t build websites.
                                    <br />
                                    <span className="text-rose-600">We build systems.</span>
                                </h1>

                                <p className="mt-8 max-w-xl text-lg md:text-xl text-stone-600 leading-relaxed">
                                    High-performance, conversion-focused web systems designed to scale,
                                    earn trust, and simplify real business operations.
                                </p>
                            </div>

                            {/* RIGHT — HOW WE DO IT */}
                            <div className="rounded-[28px] border border-stone-200 bg-white p-8 md:p-10">
                                <h2 className="text-xl md:text-2xl font-semibold text-stone-900 mb-6">
                                    What this means in practice
                                </h2>

                                <ul className="space-y-4 text-base md:text-lg text-stone-600 leading-relaxed">
                                    <li>• Clean, scalable frontend and backend architecture</li>
                                    <li>• Systems designed for real production traffic</li>
                                    <li>• Engineering decisions driven by long-term maintainability</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </section>



            {/* ================= SERVICES GRID ================= */}
            <section className="py-8 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">

                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="
            relative bg-white
            border border-stone-200/70
            p-10 md:p-14
            rounded-[32px] md:rounded-[44px]
          "
                            >
                                {/* Icon */}
                                <div
                                    className="
              mb-10 inline-flex items-center justify-center
              h-14 w-14 md:h-16 md:w-16
              rounded-2xl bg-stone-100
            "
                                    style={{ color: pinkHex }}
                                >
                                    <service.icon size={30} strokeWidth={1.6} />
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5 text-stone-900">
                                    {service.title}
                                </h2>

                                {/* Description */}
                                <p className="text-stone-600 leading-relaxed text-base md:text-lg">
                                    {service.desc}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* ================= CTA ================= */}
            <section className="pb-28 md:pb-44 px-4 md:px-6">
                <div className="max-w-7xl mx-auto bg-[#141414] rounded-[36px] md:rounded-[56px] p-10 md:p-24 relative overflow-hidden">
                    <div
                        className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full blur-[140px] opacity-30"
                        style={{ backgroundColor: pinkHex }}
                    />

                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-14">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
                                Let’s build <br />something serious.
                            </h2>

                            <p className="text-stone-400 text-lg md:text-xl leading-relaxed">
                                If you want a long-term system partner — not just another website
                                — let’s talk.
                            </p>
                        </div>

                        <a
                            href="/contact"
                            className="
                inline-flex items-center gap-3
                rounded-full px-12 py-6
                text-lg font-bold text-white
                transition-all
                hover:scale-105 active:scale-95
                shadow-xl
              "
                            style={{ backgroundColor: pinkHex }}
                        >
                            Book a Consultation
                            <ArrowRight size={22} />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
