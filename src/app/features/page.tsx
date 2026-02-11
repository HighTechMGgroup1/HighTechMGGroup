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
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Enterprise Architecture",
    description:
      "Scalable, maintainable systems built with clean architecture patterns. Modular design that evolves with your business without breaking.",
    icon: Layers,
  },
  {
    title: "Lightning Performance",
    description:
      "Sub-second load times and butter-smooth interactions. Optimized rendering, lazy loading, and code splitting for speed that converts.",
    icon: Rocket,
  },
  {
    title: "Fort Knox Security",
    description:
      "Enterprise-grade authentication, authorization, encryption, and validation. Your data protected with industry best practices.",
    icon: ShieldCheck,
  },
  {
    title: "Modern Frontend Stack",
    description:
      "React, Next.js, TypeScript. Component-driven development with accessible, responsive, and pixel-perfect interfaces.",
    icon: Code2,
  },
  {
    title: "Battle-Tested Backend",
    description:
      "Node.js & Spring Boot powerhouses. RESTful APIs, microservices architecture, and rock-solid business logic that scales infinitely.",
    icon: Server,
  },
  {
    title: "Database Mastery",
    description:
      "Optimized schemas, smart indexing, efficient queries. Relational and NoSQL databases designed for performance and reliability.",
    icon: Database,
  },
  {
    title: "Git Workflow Excellence",
    description:
      "Professional version control with atomic commits, feature branching, and code reviews. Collaboration without chaos.",
    icon: GitBranch,
  },
  {
    title: "Cloud-Native Ready",
    description:
      "Built for AWS, Azure, Google Cloud. Containerized, auto-scaling, and production-ready infrastructure from day one.",
    icon: Cloud,
  },
  {
    title: "Smart Configuration",
    description:
      "Environment-aware configs, centralized logging, real-time monitoring. Control everything across dev, staging, and production.",
    icon: Settings,
  },
  {
    title: "Mobile-First Design",
    description:
      "Responsive across every device and screen size. Touch-optimized, gesture-ready. One codebase, infinite compatibility.",
    icon: MonitorSmartphone,
  },
];

export default function FeaturesSection() {
  return (
    <main className="relative overflow-hidden bg-zinc-950 text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap');
        
        * {
          font-family: 'DM Sans', sans-serif;
        }
        
        .font-display {
          font-family: 'Playfair Display', serif;
        }
        
        .font-mono {
          font-family: 'Space Mono', monospace;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #ea580c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .grain {
          position: relative;
        }
        
        .grain::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
        }
      `}</style>

      {/* =====================================================
          FEATURES SECTION
      ====================================================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 grain">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-orange-500/20 to-amber-600/20 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-yellow-500/10 to-orange-500/10 blur-3xl animate-glow" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium backdrop-blur-sm mb-6 sm:mb-8">
              <Sparkles
                size={12}
                className="text-amber-400 sm:w-3.5 sm:h-3.5"
              />
              <span className="text-amber-300">World-Class Engineering</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Built on{" "}
              <span className="gradient-text">rock-solid principles</span>
            </h2>

            <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              We don't just write code — we engineer systems that{" "}
              <span className="font-semibold text-amber-400">perform</span>,{" "}
              <span className="font-semibold text-amber-400">scale</span>, and{" "}
              <span className="font-semibold text-amber-400">dominate</span>.
              Every line serves a purpose. Every decision backed by experience.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/20"
              >
                {/* Hover gradient blob */}
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-amber-500/20" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-4 sm:mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 text-amber-400 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <item.icon size={24} className="sm:w-7 sm:h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-base sm:text-lg text-zinc-400">
              Ready to experience engineering excellence?{" "}
              <a
                href="/contact"
                className="group inline-flex items-center gap-1.5 sm:gap-2 font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                Let's build something extraordinary
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 sm:w-4 sm:h-4"
                />
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
