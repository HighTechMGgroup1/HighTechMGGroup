import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Server,
  Database,
  Layers,
  Rocket,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  Users,
  Target,
} from "lucide-react";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Mukesh Lilawat & Gaurav Kumawat | Founders of MG Tech Studio",
  description:
    "MG Tech Studio is founded by Mukesh Lilawat (Spring Boot Backend Engineer) and Gaurav Kumawat (Full Stack Developer). We build scalable, production-ready web applications.",
  keywords: [
    "Mukesh Lilawat",
    "Mukesh Lilawat Spring Boot Developer",
    "Mukesh Lilawat Backend Engineer",
    "Gaurav Kumawat",
    "Gaurav Full Stack Developer",
    "MG Tech Studio founders",
    "MG Tech Studio About",
  ],
};

export default function AboutPage() {
  return (
    <main
      className="relative min-h-screen bg-zinc-950 text-white overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');

        .about-display { font-family: 'Playfair Display', serif; }

        .about-grad {
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #ea580c);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes aboutFloat  { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-16px)} }
        @keyframes aboutGlow   { 0%,100%{opacity:.35}               50%{opacity:.65} }
        @keyframes aboutFadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes aboutSlideL { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }
        @keyframes aboutSlideR { from{opacity:0;transform:translateX(40px)}  to{opacity:1;transform:translateX(0)} }
        @keyframes aboutScale  { from{opacity:0;transform:scale(0.95)} to{opacity:1;transform:scale(1)} }

        .about-float  { animation: aboutFloat  7s ease-in-out infinite; }
        .about-glow   { animation: aboutGlow   4s ease-in-out infinite; }
        .about-fadeup { animation: aboutFadeUp .8s ease-out both; }
        .about-slL    { animation: aboutSlideL .8s ease-out both; }
        .about-slR    { animation: aboutSlideR .8s ease-out both; }
        .about-scale  { animation: aboutScale .8s ease-out both; }

        /* Grid background */
        .about-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.011) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.011) 1px, transparent 1px);
          background-size: 72px 72px;
        }

        /* Badge */
        .about-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 14px; border-radius: 999px;
          border: 1px solid rgba(251,191,36,.2);
          background: rgba(251,191,36,.08);
          color: #fbbf24; font-size: .7rem; font-weight: 700; 
          letter-spacing:.09em; text-transform:uppercase;
        }

        /* Section divider */
        .about-hr {
          height:1px; border:none;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.07) 50%, transparent);
          margin: 56px 0;
        }

        /* Founder card */
        .about-founder {
          padding: 24px; border-radius: 18px;
          border: 1px solid rgba(255,255,255,.06);
          background: rgba(255,255,255,.02);
          backdrop-filter: blur(8px);
          transition: border-color .3s, transform .3s, background .3s;
        }
        .about-founder:hover {
          border-color: rgba(251,191,36,.25);
          background: rgba(251,191,36,.03);
          transform: translateY(-4px);
        }

        /* Capability card */
        .about-capability {
          padding: 28px 24px; border-radius: 16px;
          border: 1px solid rgba(255,255,255,.06);
          background: rgba(255,255,255,.02);
          transition: border-color .3s, transform .3s, background .3s;
        }
        .about-capability:hover {
          border-color: rgba(251,191,36,.2);
          background: rgba(251,191,36,.04);
          transform: translateY(-3px);
        }

        /* Image frame */
        .about-frame {
          border-radius: 22px; overflow: hidden;
          border: 1px solid rgba(251,191,36,.18);
          box-shadow: 0 0 50px rgba(245,158,11,.1), 0 24px 60px rgba(0,0,0,.55);
          position: relative;
        }
        .about-frame::after {
          content:''; position:absolute; inset:0;
          background: linear-gradient(to top, rgba(9,9,11,.75) 0%, transparent 45%);
        }

        /* Link styling */
        .about-link {
          display: inline-flex; align-items: center; gap: 6px;
          color: #71717a; font-weight: 600; font-size: .85rem;
          text-decoration: none; transition: color .2s, gap .2s;
        }
        .about-link:hover { color: #fbbf24; gap: 8px; }

        /* Primary button */
        .about-btn {
          display: inline-flex; align-items:center; gap:8px;
          background: linear-gradient(135deg, #f59e0b, #ea580c);
          color: #1c1917; font-weight:700; font-size:.85rem;
          padding: 12px 24px; border-radius: 10px;
          box-shadow: 0 4px 20px rgba(245,158,11,.22);
          transition: transform .25s, box-shadow .25s;
          text-decoration:none;
        }
        .about-btn:hover { 
          transform:scale(1.04); 
          box-shadow:0 6px 28px rgba(245,158,11,.38); 
        }

        /* Stat number */
        .about-stat-num {
          font-size: 3.5rem; font-weight: 900; line-height: 1;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Philosophy card */
        .about-philosophy {
          padding: 32px; border-radius: 20px;
          border: 1px solid rgba(251,191,36,.12);
          background: rgba(251,191,36,.04);
          backdrop-filter: blur(12px);
        }

        /* Value card */
        .about-value {
          padding: 20px; border-radius: 14px;
          border: 1px solid rgba(255,255,255,.05);
          background: rgba(255,255,255,.02);
        }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none about-grid">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-amber-500/6 blur-3xl about-glow" />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-600/6 blur-3xl about-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-amber-400/4 blur-3xl about-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* ══════════════════════════════════
            HERO / INTRO
        ══════════════════════════════════ */}
        <div className="about-fadeup mb-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-zinc-600 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              MG Tech Studio
            </Link>
            <span>/</span>
            <span className="text-zinc-500">About</span>
          </div>

          <div className="about-badge mb-8">
            <Sparkles size={10} /> Our Story
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div className="about-slL">
              <h1 className="about-display text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight">
                We build software
                <br />
                <span className="about-grad">that survives production.</span>
              </h1>
            </div>

            {/* Right */}
            <div className="about-slR">
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
                MG Tech Studio is a full-stack development studio focused on{" "}
                <span className="text-amber-400 font-semibold">
                  scalable, production-ready systems
                </span>{" "}
                with clean architecture and long-term value.
              </p>

              <p className="mt-6 text-lg text-zinc-500 leading-relaxed">
                We're engineers first — not marketers. We focus on clean code,
                scalable systems and software that performs reliably in
                real-world production environments.
              </p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════
            PHILOSOPHY SECTION
        ══════════════════════════════════ */}
        <div
          className="about-philosophy about-fadeup mb-24"
          style={{ animationDelay: ".15s" }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="about-display text-3xl md:text-4xl font-black mb-4">
                <span className="about-grad">Engineers first.</span>
                <br />
                Everything else later.
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Our expertise spans enterprise backend systems using{" "}
                <span className="font-semibold text-zinc-200">Spring Boot</span>{" "}
                and modern JavaScript stacks like{" "}
                <span className="font-semibold text-zinc-200">
                  Node.js, React and Next.js
                </span>
                . We build systems that scale, perform, and last.
              </p>
            </div>

            {/* Stats mini */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "2", label: "Co-Founders" },
                { num: "7+", label: "Tech Domains" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30"
                >
                  <div className="text-3xl font-black about-grad">{s.num}</div>
                  <div className="text-xs text-zinc-600 mt-1 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-hr" />

        {/* ══════════════════════════════════
            FOUNDERS SECTION
        ══════════════════════════════════ */}
        <div className="mb-16">
          <div className="about-fadeup" style={{ animationDelay: ".2s" }}>
            <div className="about-badge mb-6">
              <Users size={10} /> The Team
            </div>
            <h2 className="about-display text-4xl md:text-5xl font-black">
              Meet the <span className="about-grad">Founders</span>
            </h2>
            <p className="mt-3 text-zinc-500 text-lg max-w-2xl">
              Two engineers building production-grade systems with precision and
              care.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {/* Mukesh */}
          <div
            className="about-founder about-fadeup"
            style={{ animationDelay: ".25s" }}
          >
            <div className="about-frame mb-6" style={{ height: "340px" }}>
              <Image
                src="/mukesh.webp"
                alt="Mukesh Lilawat Backend Engineer"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                <div className="text-xs text-zinc-400 mb-0.5">
                  Backend Engineer · Spring Boot
                </div>
                <div className="text-white font-bold text-lg">
                  Mukesh Lilawat
                </div>
                <div className="text-amber-400 text-xs mt-0.5">Founder</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-zinc-100 mb-2">
              Mukesh Lilawat
            </h3>
            <p className="text-sm text-amber-500/80 font-semibold uppercase tracking-wider mb-4">
              Backend Engineer · Spring Boot
            </p>
            <p className="text-zinc-400 text-sm leading-7 mb-6">
              Mukesh builds backend systems that scale — APIs, authentication,
              databases and enterprise-grade architecture. From microservices to
              DevOps pipelines, he ensures production systems stay reliable.
            </p>

            <div className="flex gap-6">
              <Link
                href="https://github.com/mukeshlilawat1"
                target="_blank"
                className="about-link"
              >
                GitHub <ArrowUpRight size={14} />
              </Link>
              <a
                href="https://mukeshlilawat.online"
                target="_blank"
                className="about-link"
              >
                Portfolio <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Gaurav */}
          <div
            className="about-founder about-fadeup"
            style={{ animationDelay: ".3s" }}
          >
            <div className="about-frame mb-6" style={{ height: "340px" }}>
              <Image
                src="/gaurav.png"
                alt="Gaurav Kumawat Full Stack Developer"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                <div className="text-xs text-zinc-400 mb-0.5">
                  Full Stack Developer · MERN
                </div>
                <div className="text-white font-bold text-lg">
                  Gaurav Kumawat
                </div>
                <div className="text-amber-400 text-xs mt-0.5">Co-Founder</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-zinc-100 mb-2">
              Gaurav Kumawat
            </h3>
            <p className="text-sm text-amber-500/80 font-semibold uppercase tracking-wider mb-4">
              Full Stack Developer
            </p>
            <p className="text-zinc-400 text-sm leading-7 mb-6">
              Gaurav focuses on frontend architecture, performance and
              end-to-end system delivery. From pixel-perfect UIs to optimized
              server logic, he crafts complete solutions with precision.
            </p>

            <div className="flex gap-6">
              <Link
                href="https://github.com/Gaurav786kumawat"
                target="_blank"
                className="about-link"
              >
                GitHub <ArrowUpRight size={14} />
              </Link>
              <a
                href="https://portfolio.gauravkumawat.online/"
                target="_blank"
                className="about-link"
              >
                Portfolio <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="about-hr" />

        {/* ══════════════════════════════════
            CAPABILITIES
        ══════════════════════════════════ */}
        <div className="mb-24">
          <div className="about-fadeup" style={{ animationDelay: ".35s" }}>
            <div className="about-badge mb-6">
              <Target size={10} /> What We Do
            </div>
            <h2 className="about-display text-4xl md:text-5xl font-black mb-3">
              Core <span className="about-grad">Capabilities</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mb-12">
              From concept to deployment — we handle every layer of modern web
              development.
            </p>
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 about-scale"
            style={{ animationDelay: ".4s" }}
          >
            {[
              {
                icon: Code2,
                title: "Frontend Engineering",
                desc: "React, Next.js, TypeScript with performance-first architecture.",
              },
              {
                icon: Server,
                title: "Backend Systems",
                desc: "Spring Boot, Node.js, REST APIs, and microservices.",
              },
              {
                icon: Database,
                title: "Database Design",
                desc: "MySQL, PostgreSQL, MongoDB with optimized schemas.",
              },
              {
                icon: Layers,
                title: "System Architecture",
                desc: "Scalable, maintainable designs for production workloads.",
              },
              {
                icon: Rocket,
                title: "Performance",
                desc: "Speed optimization, caching, CDN integration.",
              },
              {
                icon: ShieldCheck,
                title: "Security",
                desc: "JWT auth, OAuth, encryption, and secure data handling.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="about-capability"
                style={{ animationDelay: `${0.45 + i * 0.05}s` }}
              >
                <div className="mb-4 text-amber-500">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-zinc-100 mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-hr" />

        {/* ══════════════════════════════════
            VALUES / PRINCIPLES
        ══════════════════════════════════ */}
        <div className="about-fadeup mb-24" style={{ animationDelay: ".5s" }}>
          <h2 className="about-display text-4xl md:text-5xl font-black mb-12 text-center">
            Our <span className="about-grad">Principles</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Production First",
                desc: "Every line of code is written with production reliability in mind. No shortcuts, no tech debt.",
              },
              {
                title: "Clean Architecture",
                desc: "Scalable systems start with clean code. We build for maintainability and long-term growth.",
              },
              {
                title: "Engineer-Led",
                desc: "Technical decisions made by engineers who understand the full stack — not by trends or hype.",
              },
            ].map((v) => (
              <div key={v.title} className="about-value">
                <h4 className="text-lg font-bold text-zinc-100 mb-2">
                  {v.title}
                </h4>
                <p className="text-sm text-zinc-500 leading-6">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════
            CTA SECTION
        ══════════════════════════════════ */}
        <div
          className="about-philosophy text-center about-fadeup"
          style={{ animationDelay: ".55s" }}
        >
          <h2 className="about-display text-3xl md:text-4xl font-black mb-4">
            Let's build something <span className="about-grad">together</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
            Ready to work with engineers who understand both code and
            production?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="about-btn">
              Start a Project <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/"
              className="about-link text-base"
              style={{ padding: "12px 24px" }}
            >
              View Our Work <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MG Tech Studio",
            founders: [
              {
                "@type": "Person",
                name: "Mukesh Lilawat",
                jobTitle: "Backend Engineer",
                url: "https://mukeshlilawat.online",
              },
              {
                "@type": "Person",
                name: "Gaurav Kumawat",
                jobTitle: "Full Stack Developer",
                url: "https://portfolio.gauravkumawat.online/",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
