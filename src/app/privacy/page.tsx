"use client";

import { useState, useMemo } from "react";
import {
  ChevronDown,
  Shield,
  Lock,
  Eye,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    title: "Information We Collect",
    icon: <Eye size={20} />,
    content: [
      "Name, email address and contact details",
      "Project-related information you voluntarily share",
      "Basic technical data such as browser or device type",
    ],
  },
  {
    title: "How We Use Information",
    icon: <CheckCircle size={20} />,
    content: [
      "To respond to inquiries clearly and efficiently",
      "To understand business and project requirements",
      "To improve our website and service quality",
    ],
  },
  {
    title: "Data Protection",
    icon: <Shield size={20} />,
    content:
      "We apply appropriate technical and organizational safeguards to protect your data from unauthorized access or misuse.",
  },
  {
    title: "Third-Party Services",
    icon: <Lock size={20} />,
    content:
      "We do not sell your data. Any third-party services we use follow industry-standard privacy practices.",
  },
  {
    title: "Cookies",
    icon: <CheckCircle size={20} />,
    content:
      "Cookies help us improve user experience. You can disable them anytime via browser settings.",
  },
  {
    title: "Your Rights",
    icon: <Shield size={20} />,
    content:
      "You can request access, correction, or deletion of your personal data by contacting us.",
  },
];

export default function PrivacyPolicyPage() {
  const [openIndex, setOpenIndex] = useState(null);

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
        
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translate3d(0, -10px, 0);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translate3d(0, 0, 0);
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
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
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
      <section className="relative min-h-[75vh] flex items-center grain">
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
          <div className="grid gap-12 lg:grid-cols-2 items-center">
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
                <span className="text-amber-300">Legal & Trust</span>
              </div>

              {/* Main Heading */}
              <h1 className="mt-8 sm:mt-10 font-display">
                <div
                  className="animate-slide-in-left text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight"
                  style={{ opacity: 0, animationDelay: "0.2s" }}
                >
                  Privacy built with
                </div>
                <div
                  className="animate-slide-in-right mt-2 sm:mt-3 text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight gradient-text"
                  style={{ opacity: 0, animationDelay: "0.4s" }}
                >
                  transparency & care
                </div>
              </h1>

              {/* Subheading */}
              <p
                className="animate-fade-in-up mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300"
                style={{ opacity: 0, animationDelay: "0.6s" }}
              >
                We respect your data like we respect good engineering —{" "}
                <span className="font-semibold text-amber-400">minimal</span>,{" "}
                <span className="font-semibold text-amber-400">
                  intentional
                </span>
                , and{" "}
                <span className="font-semibold text-amber-400">protected</span>.
              </p>
            </div>

            {/* RIGHT - Promise Card */}
            <div
              className="animate-scale-in rounded-2xl sm:rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-10 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/10"
              style={{ opacity: 0, animationDelay: "0.8s" }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 text-amber-400">
                <Shield size={28} />
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6">
                Our promise
              </h2>

              <div className="space-y-4">
                {[
                  { icon: <Lock size={18} />, text: "No data selling" },
                  { icon: <Eye size={18} />, text: "No shady tracking" },
                  {
                    icon: <Shield size={18} />,
                    text: "Security-first mindset",
                  },
                  {
                    icon: <CheckCircle size={18} />,
                    text: "You stay in control",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-base sm:text-lg text-zinc-300"
                  >
                    <div className="flex-shrink-0 text-amber-400">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ACCORDION SECTION
      ====================================================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">
              Privacy <span className="gradient-text">details</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-zinc-400">
              Everything you need to know about how we handle your data
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {sections.map((section, i) => {
              const open = openIndex === i;

              return (
                <div
                  key={i}
                  className={`rounded-xl sm:rounded-2xl border bg-gradient-to-br from-zinc-900 to-zinc-950 backdrop-blur-sm transition-all duration-300 ${
                    open
                      ? "border-amber-500/50 shadow-xl shadow-amber-500/10"
                      : "border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left group"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className={`flex-shrink-0 transition-colors ${
                          open
                            ? "text-amber-400"
                            : "text-zinc-500 group-hover:text-amber-400"
                        }`}
                      >
                        {section.icon}
                      </div>
                      <h3
                        className={`text-base sm:text-lg md:text-xl font-semibold transition-colors ${
                          open
                            ? "text-white"
                            : "text-zinc-300 group-hover:text-white"
                        }`}
                      >
                        {section.title}
                      </h3>
                    </div>

                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 transition-all duration-300 ${
                        open
                          ? "rotate-180 text-amber-400"
                          : "text-zinc-500 group-hover:text-zinc-400"
                      }`}
                    />
                  </button>

                  {open && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 animate-slide-down">
                      <div className="pt-4 border-t border-zinc-800">
                        {Array.isArray(section.content) ? (
                          <div className="space-y-3">
                            {section.content.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-3 text-sm sm:text-base text-zinc-400"
                              >
                                <div className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
                                <p>{item}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                            {section.content}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3 backdrop-blur-sm">
              <CheckCircle size={16} className="text-amber-400" />
              <span className="text-sm text-zinc-400">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST BADGES
      ====================================================== */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 grain">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">
            Your data is <span className="gradient-text">safe with us</span>
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <Shield size={28} />,
                title: "Industry Standards",
                desc: "Following best practices for data protection",
              },
              {
                icon: <Lock size={28} />,
                title: "Secure Storage",
                desc: "Encrypted and protected infrastructure",
              },
              {
                icon: <Eye size={28} />,
                title: "Full Transparency",
                desc: "You know exactly what we collect and why",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 text-amber-400">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto">
            Questions about our privacy practices? Contact us anytime at{" "}
            <a
              href="mailto:hightechmg@gmail.com"
              className="text-amber-400 hover:text-amber-300 transition-colors underline"
            >
              hightechmg@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
