import {
    ExternalLink,
    Github,
    ArrowRight,
    Code2,
    Server,
    Globe,
} from "lucide-react";

const projects = [

    {
        title: "ShopEase Frontend",
        category: "E-Commerce Frontend",
        description:
            "Luxury, responsive multi-page e-commerce frontend with cart functionality using localStorage and Unsplash imagery.",
        tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        live: "https://gaurav786kumawat.github.io/shopease-frontend",
        github: "https://github.com/gaurav786kumawat/shopease-frontend",
    },
    {
        title: "Modern Construction Site",
        category: "Business Website",
        description:
            "A clean and professional construction company website showcasing services, projects and contact flow.",
        tech: ["HTML", "CSS", "JavaScript"],
        live: "https://gaurav786kumawat.github.io/modern-construction-site/",
        github: "https://github.com/gaurav786kumawat/modern-construction-site",
    },
    {
        title: "Web Agency Platform",
        category: "Next.js Platform",
        description:
            "A web agency platform featuring reusable templates, pricing pages, tools and scalable layout system.",
        tech: ["Next.js", "Tailwind CSS"],
        live: "https://services.gauravkumawat.online",
        github: "https://github.com/Gaurav786kumawat/web-agency",
    },
    {
        title: "Hotel Mountain Mirage",
        category: "Full-Stack Hotel Platform",
        description:
            "A real-world hotel booking and management system built with React.js and Spring Boot. Includes JWT authentication, role-based access, admin dashboard and AWS deployment.",
        tech: ["React", "Spring Boot", "JWT", "AWS"],
        live: "https://hotel-mountain-mirage.vercel.app",
        github: "https://github.com/mukeshlilawat1/Hotel-Mountain-Mirage",
    },
    {
        title: "Marble Business Platform",
        category: "Industry Solution",
        description:
            "End-to-end marble business website with trust pages and 8 real-world calculators including flooring, cost estimation, slab weight and logistics.",
        tech: ["Next.js", "Tailwind", "Calculators"],
        live: "https://marble-website-nextjs.vercel.app",
        github: "https://github.com/Gaurav786kumawat/marble-website-nextjs",
    },
];

export default function ProjectsPage() {
    const pink = "#FF1A75";

    return (
        <main className="bg-[#F9F8F6] text-[#1A1A1A] selection:bg-[#FF1A75]/10">

            {/* ================= PROJECTS HERO CARD ================= */}
            <section className="relative pt-16 md:pt-16 pb-12 md:pb-32 bg-[#F9F8F6]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* CARD */}
                    <div className="relative overflow-hidden rounded-[48px] bg-white border border-stone-200 shadow-xl px-10 py-16 md:px-20 md:py-24">

                        {/* subtle ambient glow */}
                        <div
                            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.12),transparent_60%)]"
                        />

                        <div className="relative z-10 grid gap-20 md:grid-cols-2 items-start">

                            {/* LEFT — CORE STATEMENT */}
                            <div>
                                <span
                                    className="inline-block mb-8 rounded-full px-5 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.25em]"
                                    style={{ backgroundColor: `${pink}15`, color: pink }}
                                >
                                    Projects
                                </span>

                                <h1 className="text-[11vw] sm:text-[9vw] md:text-[4.4rem] font-extrabold tracking-tight leading-[0.95] text-stone-900">
                                    Real products.
                                    <br />
                                    <span style={{ color: pink }}>Real systems.</span>
                                </h1>

                                <p className="mt-10 max-w-xl text-lg md:text-xl text-stone-600 leading-relaxed">
                                    A selection of production-ready systems showcasing frontend,
                                    backend architecture and real business logic.
                                </p>
                            </div>

                            {/* RIGHT — CONTEXT */}
                            <div className="md:pt-24">
                                <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-6">
                                    What you’ll see here
                                </h2>

                                <ul className="space-y-4 text-base md:text-lg text-stone-600 leading-relaxed">
                                    <li>• End-to-end product implementations</li>
                                    <li>• Real authentication, dashboards & workflows</li>
                                    <li>• Scalable backend APIs and data models</li>
                                    <li>• Systems built for real production traffic</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


            {/* ================= PROJECTS ================= */}
            <section className="py-24 md:py-36">
                <div className="max-w-7xl mx-auto px-6 space-y-20">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start"
                        >
                            {/* LEFT */}
                            <div className="lg:col-span-5">
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400">
                                    {project.category}
                                </span>

                                <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight">
                                    {project.title}
                                </h2>

                                <p className="mt-6 text-lg text-stone-500 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full bg-white border border-stone-200 px-4 py-2 text-sm font-semibold"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-10 flex flex-wrap gap-6">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
                                        style={{ color: pink }}
                                    >
                                        View Live <ExternalLink size={16} />
                                    </a>

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone-500 hover:text-black"
                                        >
                                            GitHub <Github size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* RIGHT (VISUAL PLACEHOLDER) */}
                            <div className="lg:col-span-7">
                                <div
                                    className="
      relative overflow-hidden
      h-[260px] md:h-[360px]
      rounded-[28px] md:rounded-[44px]
      border border-stone-200
      bg-white
      shadow-sm
      group
    "
                                >
                                    {/* iframe */}
                                    <iframe
                                        src={project.live}
                                        title={project.title}
                                        loading="lazy"
                                        className="
        absolute inset-0
        h-full w-full
        scale-[1.05]
        origin-top
        pointer-events-none
      "
                                        sandbox="allow-scripts allow-same-origin allow-forms"
                                    />

                                    {/* overlay for premium feel */}
                                    <div
                                        className="
        absolute inset-0
        bg-gradient-to-t from-black/50 via-black/10 to-transparent
        opacity-0 group-hover:opacity-100
        transition duration-500
      "
                                    />

                                    {/* CTA */}
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        className="
        absolute bottom-6 left-6
        inline-flex items-center gap-2
        rounded-full px-5 py-2
        text-sm font-bold text-white
        bg-black/70 backdrop-blur
        opacity-0 group-hover:opacity-100
        transition duration-500
      "
                                    >
                                        Open Live Project
                                        <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="pb-32 md:pb-44 px-6">
                <div className="max-w-7xl mx-auto bg-[#141414] rounded-[36px] md:rounded-[56px] p-10 md:p-24 relative overflow-hidden">
                    <div
                        className="absolute -bottom-24 -left-24 h-[420px] w-[420px] blur-[140px] opacity-30 rounded-full"
                        style={{ backgroundColor: pink }}
                    />

                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-14">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
                                Want something like this?
                            </h2>

                            <p className="text-stone-400 text-lg md:text-xl leading-relaxed">
                                If you’re planning a real product — not just a landing page —
                                let’s build it properly.
                            </p>
                        </div>

                        <a
                            href="/contact"
                            className="inline-flex items-center gap-4 rounded-full px-14 py-6 text-lg font-bold text-white shadow-xl hover:scale-105 transition"
                            style={{ backgroundColor: pink }}
                        >
                            Start Your Project
                            <ArrowRight size={22} />
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
}
