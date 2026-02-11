"use client";

import {
  Code2,
  LayoutDashboard,
  MessageCircle,
  Rocket,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Zap,
  Target,
  ShieldCheck,
  TrendingUp,
  Layers,
} from "lucide-react";
import { useMemo } from "react";

export default function ServicesPage() {
  // Generate stable snowflakes data - prevents hydration errors
  const snowflakes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const colors = ["white", "amber", "orange"];
      return {
        id: i,
        colorClass: `snowflake-${colors[i % 3]}`,
        left: (i * 8.33) % 100,
        fontSize: 12 + (i % 8),
        duration: 12 + (i % 8),
        delay: i * 0.8,
        animationType:
          i % 3 === 0 ? "snowfall" : i % 3 === 1 ? "snowfall-2" : "snowfall-3",
      };
    });
  }, []);

  const services = [
    {
      title: "Modern Frontend Engineering",
      desc: "Ultra-fast, SEO-optimized interfaces built with Next.js and React. Designed for smooth interactions and premium aesthetics.",
      icon: Code2,
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
    },
    {
      title: "WhatsApp Commerce Systems",
      desc: "Turn customer conversations into high-converting sales flows with seamless WhatsApp-based ordering systems.",
      icon: MessageCircle,
      color: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-400",
    },
    {
      title: "Admin Dashboards",
      desc: "Custom-built dashboards that give you absolute clarity over data, users, and business operations.",
      icon: LayoutDashboard,
      color: "from-yellow-500/20 to-amber-500/20",
      iconColor: "text-yellow-400",
    },
    {
      title: "Performance & SEO",
      desc: "Systems engineered for speed, Core Web Vitals, and long-term search visibility from day one.",
      icon: Rocket,
      color: "from-amber-500/20 to-yellow-500/20",
      iconColor: "text-amber-400",
    },
  ];

  const capabilities = [
    {
      icon: <Layers size={24} />,
      title: "Clean Architecture",
      desc: "Scalable frontend and backend systems",
    },
    {
      icon: <Target size={24} />,
      title: "Production Ready",
      desc: "Built to handle real traffic from day one",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Long-term Focus",
      desc: "Decisions driven by maintainability",
    },
  ];

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
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -20px, 0); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from { 
            opacity: 0;
            transform: translate3d(-50px, 0, 0);
          }
          to { 
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0;
            transform: translate3d(50px, 0, 0);
          }
          to { 
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to { 
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale3d(0.8, 0.8, 1);
          }
          to { 
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }
        }
        
        /* SNOWFLAKES - OPTIMIZED */
        @keyframes snowfall {
          0% {
            transform: translate3d(0, -10vh, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate3d(100px, 110vh, 0) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes snowfall-2 {
          0% {
            transform: translate3d(0, -10vh, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate3d(-100px, 110vh, 0) rotate(-360deg);
            opacity: 0;
          }
        }
        
        @keyframes snowfall-3 {
          0% {
            transform: translate3d(0, -10vh, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate3d(50px, 110vh, 0) rotate(180deg);
            opacity: 0;
          }
        }
        
        .snowflake {
          position: fixed;
          top: -10vh;
          z-index: 50;
          user-select: none;
          pointer-events: none;
          will-change: transform, opacity;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          transform: translate3d(0, 0, 0);
        }
        
        .snowflake-white {
          color: rgba(255, 255, 255, 0.8);
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }
        
        .snowflake-amber {
          color: rgba(251, 191, 36, 0.7);
          text-shadow: 0 0 5px rgba(251, 191, 36, 0.4);
        }
        
        .snowflake-orange {
          color: rgba(249, 115, 22, 0.7);
          text-shadow: 0 0 5px rgba(249, 115, 22, 0.4);
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
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

      {/* SNOWFLAKES */}
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className={`snowflake ${flake.colorClass}`}
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.fontSize}px`,
            animation: `${flake.animationType} ${flake.duration}s linear ${flake.delay}s infinite`,
          }}
        >
          ❅
        </div>
      ))}

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative min-h-[85vh] flex items-center grain">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <div
                className="animate-fade-in-up inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium backdrop-blur-sm"
                style={{ animationDelay: "0.1s", opacity: 0 }}
              >
                <Sparkles
                  size={12}
                  className="text-amber-400 sm:w-3.5 sm:h-3.5"
                />
                <span className="text-amber-300">Services & Capabilities</span>
              </div>

              {/* Main Heading */}
              <h1 className="mt-8 sm:mt-10 font-display">
                <div
                  className="animate-slide-in-left text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight"
                  style={{ opacity: 0, animationDelay: "0.2s" }}
                >
                  We don't build websites.
                </div>
                <div
                  className="animate-slide-in-right mt-2 sm:mt-3 text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight gradient-text"
                  style={{ opacity: 0, animationDelay: "0.4s" }}
                >
                  We build systems.
                </div>
              </h1>

              {/* Subheading */}
              <p
                className="animate-fade-in-up mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300"
                style={{ opacity: 0, animationDelay: "0.6s" }}
              >
                High-performance, conversion-focused web systems designed to{" "}
                <span className="font-semibold text-amber-400">scale</span>,{" "}
                <span className="font-semibold text-amber-400">earn trust</span>
                , and{" "}
                <span className="font-semibold text-amber-400">
                  simplify real business operations
                </span>
                .
              </p>
            </div>

            {/* RIGHT - Capabilities Card */}
            <div
              className="animate-scale-in rounded-2xl sm:rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-8 md:p-10 backdrop-blur-sm lg:mt-20"
              style={{ opacity: 0, animationDelay: "0.8s" }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <CheckCircle size={14} className="text-amber-400" />
                <span className="text-amber-300">What this means</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-display font-bold mb-6">
                In practice
              </h2>

              <div className="space-y-4">
                {capabilities.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:bg-zinc-900"
                  >
                    <div className="flex-shrink-0 mt-0.5 text-amber-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES GRID
      ====================================================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">
              Our <span className="gradient-text">expertise</span>
            </h2>
            <p className="mt-4 sm:mt-5 max-w-3xl mx-auto text-base sm:text-lg text-zinc-400">
              Specialized services designed to solve real business problems
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-10 md:p-12 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
              >
                {/* Gradient accent */}
                <div
                  className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}
                />

                {/* Icon */}
                <div
                  className={`mb-6 sm:mb-8 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} ${service.iconColor} backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <service.icon size={28} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mb-4 sm:mb-5 text-2xl sm:text-3xl font-display font-bold tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {service.desc}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 grain">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">
              Why work <span className="gradient-text">with us</span>
            </h2>
            <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg text-zinc-400">
              Not just another agency. A technical partner invested in your
              success.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <ShieldCheck size={28} />,
                title: "Battle-Tested Stack",
                desc: "Next.js, React, Spring Boot, Node.js - proven technologies that scale",
              },
              {
                icon: <TrendingUp size={28} />,
                title: "Performance First",
                desc: "Sub-second load times and butter-smooth interactions, always",
              },
              {
                icon: <Target size={28} />,
                title: "Business Focused",
                desc: "Every technical decision tied to your revenue and growth goals",
              },
              {
                icon: <Layers size={28} />,
                title: "Clean Code",
                desc: "Maintainable, scalable architecture that grows with you",
              },
              {
                icon: <Zap size={28} />,
                title: "Fast Delivery",
                desc: "Production-ready systems delivered on time, every time",
              },
              {
                icon: <MessageCircle size={28} />,
                title: "Clear Communication",
                desc: "Regular updates, transparent pricing, no surprises",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div className="mb-4 sm:mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 text-amber-400 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {item.icon}
                </div>

                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative py-20 sm:py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-zinc-950 to-orange-950/30" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-3xl animate-glow" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Let's build{" "}
              <span className="gradient-text">something serious</span>
            </h2>

            <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-zinc-300 leading-relaxed">
              If you want a long-term system partner — not just another website
              — let's talk.
            </p>

            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="glow-border group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-zinc-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300 active:scale-95"
              >
                Book a Consultation
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-2 sm:w-5 sm:h-5"
                />
              </a>

              <a
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900/50 px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white backdrop-blur-sm hover:border-amber-500/50 hover:bg-zinc-800/50 transition-all duration-300 active:scale-95"
              >
                View Our Work
                <Zap
                  size={20}
                  className="text-amber-400 group-hover:animate-pulse sm:w-5 sm:h-5"
                />
              </a>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-zinc-500">
              → Free consultation • No commitments • Just real solutions
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
