import {
    Layers,
    Rocket,
    ShieldCheck,
    Code2,
    Database,
    Server,
    GitBranch,
    Cloud,
    Settings,
    MonitorSmartphone,
} from "lucide-react";

const features = [
    {
        title: "Clean Architecture",
        description:
            "Clean, modular and layered architecture patterns that make systems easier to maintain, scale and evolve over time.",
        icon: Layers,
    },
    {
        title: "High Performance",
        description:
            "Optimized frontend and backend systems focused on speed, efficiency and smooth user experience.",
        icon: Rocket,
    },
    {
        title: "Secure Systems",
        description:
            "Security-first development with authentication, authorization, validation and industry best practices.",
        icon: ShieldCheck,
    },
    {
        title: "Modern Frontend Engineering",
        description:
            "Component-driven frontend development using React and Next.js with accessible, responsive UI.",
        icon: Code2,
    },
    {
        title: "Robust Backend Systems",
        description:
            "Scalable backend architecture using Node.js or Spring Boot with clean business logic and APIs.",
        icon: Server,
    },
    {
        title: "Reliable Database Design",
        description:
            "Well-structured databases with indexing, relationships and performance-optimized queries.",
        icon: Database,
    },
    {
        title: "Version Control & Collaboration",
        description:
            "Professional Git workflows with clean commits, branching strategies and team collaboration standards.",
        icon: GitBranch,
    },
    {
        title: "Cloud & Deployment Ready",
        description:
            "Applications designed for modern cloud environments with production-ready configurations.",
        icon: Cloud,
    },
    {
        title: "Scalable Configuration",
        description:
            "Config-driven systems with environment separation, logging, monitoring and scalability.",
        icon: Settings,
    },
    {
        title: "Responsive & Device Ready",
        description:
            "Mobile-first and cross-device compatible interfaces for consistent experience everywhere.",
        icon: MonitorSmartphone,
    },
];

export default function FeaturesSection() {
    return (
        <section className="relative py-32 bg-gradient-to-br from-stone-50 via-rose-50 to-stone-100">
            {/* ===== AMBIENT BACKGROUND ===== */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-24 left-16 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
                <div className="absolute bottom-24 right-20 h-96 w-96 rounded-full bg-stone-300/40 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* ================= HEADER ================= */}
                <div className="max-w-4xl mb-24">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-900">
                        Engineering Principles
                    </h2>

                    <p className="mt-8 text-lg sm:text-xl md:text-2xl text-stone-600 leading-relaxed">
                        These principles guide how we design, build and deliver frontend,
                        backend and full-stack systems — with a strong focus on quality,
                        scalability and long-term value.
                    </p>
                </div>

                {/* ================= FEATURES GRID ================= */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="
                group relative rounded-3xl
                bg-white/70 backdrop-blur
                border border-stone-200
                p-10
                shadow-sm
                hover:shadow-xl hover:-translate-y-1
                transition
              "
                        >
                            {/* accent line */}
                            <div className="absolute top-0 left-8 h-1 w-16 rounded-full bg-gradient-to-r from-rose-400 to-pink-500" />

                            <div className="mb-8 inline-flex rounded-2xl bg-rose-100 p-5 text-rose-600 group-hover:scale-110 transition">
                                <feature.icon size={30} />
                            </div>

                            <h3 className="text-2xl font-semibold text-stone-900">
                                {feature.title}
                            </h3>

                            <p className="mt-5 text-stone-600 text-lg leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
