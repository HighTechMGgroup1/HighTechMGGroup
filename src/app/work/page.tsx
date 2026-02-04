import Link from "next/link";
import {
    Code2,
    ExternalLink,
    Layers,
    CheckCircle2,
    Briefcase,
    ArrowRight,
} from "lucide-react";

const projects = [
    {
        title: "WhatsApp-Based E-Commerce Website",
        type: "Frontend + Integration",
        description:
            "A lightweight e-commerce website where customers place orders directly via WhatsApp. Designed for small businesses that need fast online presence without complex systems.",
        features: [
            "Product listing pages",
            "WhatsApp order integration",
            "Mobile-first UI",
            "Fast load performance",
        ],
        stack: ["Next.js", "Tailwind CSS"],
    },
    {
        title: "Admin Dashboard System",
        type: "Full-Stack Application",
        description:
            "A role-based admin dashboard to manage products, users and orders with secure authentication and clean backend architecture.",
        features: [
            "Role-based authentication",
            "REST APIs",
            "Dashboard analytics",
            "Secure data handling",
        ],
        stack: ["Spring Boot", "MySQL", "JWT", "React"],
    },
    {
        title: "Business Website for Local Startup",
        type: "Frontend Application",
        description:
            "A modern business website built for credibility, performance and SEO with clean UI and responsive layouts.",
        features: [
            "SEO-friendly pages",
            "Responsive design",
            "Clean UI/UX",
            "Fast deployment",
        ],
        stack: ["Next.js", "Tailwind CSS"],
    },
    {
        title: "Custom Full-Stack Web Platform",
        type: "Full-Stack System",
        description:
            "A scalable web platform with backend APIs, database integration and admin controls built for future growth.",
        features: [
            "Scalable backend architecture",
            "Database design",
            "API integrations",
            "Production deployment",
        ],
        stack: ["Spring Boot", "Node.js", "PostgreSQL", "Next.js"],
    },
];

export default function PortfolioPage() {
    return (
        <main className="bg-white">

            {/* ================= HERO ================= */}
            <section className="relative py-32 md:py-44 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-center">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-center mb-6">
                        <span className="flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700">
                            <Briefcase size={16} />
                            Our Work
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-zinc-900">
                        Real Projects. <br className="hidden sm:block" />
                        Real Engineering.
                    </h1>

                    <p className="mt-8 text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-4xl mx-auto">
                        A selection of production-ready systems we’ve built for real businesses —
                        focusing on performance, scalability and clean architecture.
                    </p>
                </div>
            </section>

            {/* ================= PROJECTS ================= */}
            <section className="py-24 md:py-36">
                <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-2">

                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group rounded-3xl border border-zinc-200 bg-white p-8 md:p-10 shadow-sm hover:shadow-xl transition"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3 text-indigo-600 mb-5">
                                <Layers size={22} />
                                <span className="text-sm font-semibold tracking-wide">
                                    {project.type}
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">
                                {project.title}
                            </h3>

                            <p className="mt-5 text-zinc-600 text-lg leading-relaxed">
                                {project.description}
                            </p>

                            {/* Features */}
                            <div className="mt-8">
                                <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-4">
                                    Key Highlights
                                </h4>

                                <ul className="space-y-3">
                                    {project.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-zinc-700">
                                            <CheckCircle2 size={18} className="mt-1 text-indigo-600" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="mt-8">
                                <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-3">
                                    Tech Stack
                                </h4>

                                <div className="flex flex-wrap gap-3">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-10">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline"
                                >
                                    Discuss this project
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="py-28 md:py-36 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-center text-white">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
                        Have a Similar Requirement?
                    </h2>

                    <p className="mt-8 text-lg sm:text-xl md:text-2xl text-white/90">
                        Let’s discuss your idea and design a solution
                        that fits your business — technically and practically.
                    </p>

                    <div className="mt-14">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-4 rounded-full bg-white px-12 py-6 text-lg font-semibold text-zinc-900 hover:bg-zinc-100 transition shadow-xl"
                        >
                            Start a Project
                            <ExternalLink size={20} />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
