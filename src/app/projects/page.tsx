import {
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Code2,
  Database,
  Zap,
  Eye,
} from "lucide-react";

/* ================= DATA ================= */

const projects = [
  {
    title: "ShopEase Frontend",
    category: "E-Commerce Frontend",
    description:
      "Luxury, responsive multi-page e-commerce frontend with cart functionality using localStorage and Unsplash imagery.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    live: "https://gaurav786kumawat.github.io/shopease-frontend",
    github: "https://github.com/gaurav786kumawat/shopease-frontend",
    highlight: "Frontend Excellence",
  },
  {
    title: "Modern Construction Site",
    category: "Business Website",
    description:
      "A clean and professional construction company website showcasing services, projects and contact flow.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://gaurav786kumawat.github.io/modern-construction-site/",
    github: "https://github.com/gaurav786kumawat/modern-construction-site",
    highlight: "Professional Design",
  },
  {
    title: "Web Agency Platform",
    category: "Next.js Platform",
    description:
      "A web agency platform featuring reusable templates, pricing pages, tools and scalable layout system.",
    tech: ["Next.js", "Tailwind CSS"],
    live: "https://services.gauravkumawat.online",
    github: "https://github.com/Gaurav786kumawat/web-agency",
    highlight: "Scalable Architecture",
  },
  {
    title: "Hotel Mountain Mirage",
    category: "Full-Stack Hotel Platform",
    description:
      "A real-world hotel booking and management system built with React.js and Spring Boot. Includes JWT authentication, role-based access, admin dashboard and AWS deployment.",
    tech: ["React", "Spring Boot", "JWT", "AWS"],
    live: "https://hotel-mountain-mirage.vercel.app",
    github: "https://github.com/mukeshlilawat1/Hotel-Mountain-Mirage",
    highlight: "Full-Stack Power",
    featured: true,
  },
  {
    title: "Marble Business Platform",
    category: "Industry Solution",
    description:
      "End-to-end marble business website with trust pages and 8 real-world calculators including flooring, cost estimation, slab weight and logistics.",
    tech: ["Next.js", "Tailwind", "Calculators"],
    live: "https://marble-website-nextjs.vercel.app",
    github: "https://github.com/Gaurav786kumawat/marble-website-nextjs",
    highlight: "Complex Business Logic",
  },
];

/* ================= PAGE ================= */

export default function ProjectsPage() {
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
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(-30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
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
        
        .glow-border {
          position: relative;
        }
        
        .glow-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #ea580c);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: -1;
        }
        
        .glow-border:hover::before {
          opacity: 0.6;
          filter: blur(8px);
        }
      `}</style>

      {/* =====================================================
          PROJECTS HERO SECTION
      ====================================================== */}
      <section className="relative min-h-[75vh] flex items-center grain">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-orange-500/20 to-amber-600/20 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium backdrop-blur-sm mb-6 sm:mb-8">
                <Sparkles
                  size={12}
                  className="text-amber-400 sm:w-3.5 sm:h-3.5"
                />
                <span className="text-amber-300">Live Projects</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Real products.{" "}
                <span className="gradient-text">Real systems.</span>
              </h1>

              <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
                Production-ready systems showcasing{" "}
                <span className="font-semibold text-amber-400">
                  frontend mastery
                </span>
                ,{" "}
                <span className="font-semibold text-amber-400">
                  backend architecture
                </span>
                , and{" "}
                <span className="font-semibold text-amber-400">
                  real business logic
                </span>
                .
              </p>
            </div>

            {/* RIGHT - Info Card */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/20">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-amber-500/20" />

              <div className="relative">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                  What you'll see here
                </h2>

                <ul className="space-y-4 text-sm sm:text-base text-zinc-300">
                  <li className="flex items-start gap-3">
                    <Code2
                      size={20}
                      className="mt-0.5 text-amber-400 flex-shrink-0"
                    />
                    <span>End-to-end product implementations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Database
                      size={20}
                      className="mt-0.5 text-amber-400 flex-shrink-0"
                    />
                    <span>Real authentication & dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap
                      size={20}
                      className="mt-0.5 text-amber-400 flex-shrink-0"
                    />
                    <span>Scalable backend APIs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles
                      size={20}
                      className="mt-0.5 text-amber-400 flex-shrink-0"
                    />
                    <span>Production-grade systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS SHOWCASE
      ====================================================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24 md:space-y-32">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start"
            >
              {/* LEFT - Project Info */}
              <div className="lg:col-span-5 space-y-6">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm">
                  <span className="text-amber-300">{project.category}</span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm ml-2">
                    <Sparkles size={12} className="text-orange-400" />
                    <span className="text-orange-300">Featured</span>
                  </div>
                )}

                {/* Title */}
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
                  {project.title}
                </h2>

                {/* Highlight */}
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400">
                  <div className="h-1 w-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                  {project.highlight}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-xs font-mono font-semibold text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-lg border border-amber-500/50 bg-amber-500/10 px-4 py-2.5 text-sm font-semibold text-amber-400 backdrop-blur-sm transition-all hover:border-amber-500 hover:bg-amber-500/20"
                  >
                    <Eye size={16} />
                    View Live
                    <ExternalLink
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* RIGHT - Project Preview */}
              <div className="lg:col-span-7">
                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl transition-all duration-500 hover:border-amber-500/50 hover:shadow-amber-500/20">
                  {/* Preview Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    {/* iframe */}
                    <iframe
                      src={project.live}
                      title={project.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full scale-100 origin-top transition-transform duration-700 group-hover:scale-105"
                      sandbox="allow-scripts allow-same-origin allow-forms"
                    />

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Hover CTA */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-zinc-950 shadow-lg opacity-0 transition-all duration-500 group-hover:opacity-100 hover:scale-105"
                    >
                      Open Live Project
                      <ArrowRight size={14} />
                    </a>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          FINAL CTA SECTION
      ====================================================== */}
      <section className="relative py-20 sm:py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-zinc-950 to-orange-950/30" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-3xl animate-glow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Want something <span className="gradient-text">like this</span>?
              </h2>

              <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
                If you're planning a{" "}
                <span className="font-semibold text-amber-400">
                  real product
                </span>{" "}
                — not just a landing page — let's build it with the same level
                of engineering excellence you see here.
              </p>
            </div>

            <div className="flex md:justify-end">
              <a
                href="/contact"
                className="glow-border group inline-flex items-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-zinc-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300 active:scale-95"
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-2 sm:w-5 sm:h-5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
