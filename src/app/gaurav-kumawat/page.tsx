import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Gaurav Kumawat | Full Stack Developer & Frontend Specialist",
  description:
    "Gaurav Kumawat is a Full Stack Developer and Frontend Specialist building scalable MERN stack apps with Next.js, React, Node.js, and MongoDB. Co-founder of MG Tech Studio.",
  keywords: [
    "Gaurav Kumawat",
    "Gaurav Kumawat Full Stack Developer",
    "Gaurav Kumawat React Developer",
    "Gaurav Kumawat Next.js Developer",
    "Gaurav Kumawat MERN Stack",
    "MG Tech Studio Co Founder",
  ],
  alternates: { canonical: "https://hightechmg.in/gaurav-kumawat" },
};

/* ─── SVG Icons ─── */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const GlobeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="17"
    height="17"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="17"
    height="17"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const ServicesIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="17"
    height="17"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const socials = [
  {
    label: "GitHub",
    handle: "@Gaurav786kumawat",
    href: "https://github.com/Gaurav786kumawat",
    icon: <GitHubIcon />,
    cls: "gk-s-gh",
  },
  {
    label: "LinkedIn",
    handle: "@gauravkumawatkirodiwal",
    href: "https://linkedin.com/in/gauravkumawatkirodiwal",
    icon: <LinkedInIcon />,
    cls: "gk-s-li",
  },
  {
    label: "Portfolio",
    handle: "portfolio.gauravkumawat.online",
    href: "https://portfolio.gauravkumawat.online/",
    icon: <GlobeIcon />,
    cls: "gk-s-wb",
  },
  {
    label: "Services",
    handle: "services.gauravkumawat.online",
    href: "https://services.gauravkumawat.online",
    icon: <ServicesIcon />,
    cls: "gk-s-sv",
  },
  {
    label: "Email",
    handle: "gaurav18kumawat@gmail.com",
    href: "mailto:gaurav18kumawat@gmail.com",
    icon: <MailIcon />,
    cls: "gk-s-em",
  },
];

const techCategories = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Framer Motion",
      "Redux",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git / GitHub", "Docker", "Vercel", "Netlify"],
  },
  {
    category: "Currently Learning",
    items: [
      "TensorFlow.js",
      "LangChain",
      "Prisma",
      "Serverless",
      "Performance Optimization",
    ],
  },
  {
    category: "Problem Solving",
    items: ["DSA — 150+ Problems", "LeetCode", "GFG"],
  },
];

const projects = [
  {
    title: "Web Agency — Business Websites & Tools",
    tech: "Next.js · Tailwind CSS · Server Components · Vercel",
    desc: "Full-featured web agency platform for business websites with modern server-side rendering.",
    github: "https://github.com/Gaurav786kumawat/web-agency",
    live: "https://services.gauravkumawat.online",
  },
  {
    title: "Portfolio Website",
    tech: "Next.js · Tailwind · Framer Motion",
    desc: "Performance-first portfolio with Framer Motion animations and server-side optimizations.",
    github: "https://github.com/Gaurav786kumawat/portfolio/",
    live: "https://portfolio.gauravkumawat.online/",
  },
  {
    title: "AI Chatbot",
    tech: "React · Node.js · OpenAI API",
    desc: "AI-powered chat interface integrating OpenAI with conversational memory and prompt controls.",
    github: "https://github.com/Gaurav786kumawat/",
    live: "https://chatgpt-demo.vercel.app",
  },
  {
    title: "E-Commerce Dashboard",
    tech: "Next.js · MongoDB · Stripe",
    desc: "Full-stack admin dashboard with analytics, product management, and Stripe payment integration.",
    github: "https://github.com/Gaurav786kumawat/",
    live: "https://store-demo.vercel.app",
  },
];

export default function GauravKumawatPage() {
  return (
    <main
      className="relative min-h-screen bg-zinc-950 text-white overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');

        .gk-display { font-family: 'Playfair Display', serif; }

        .gk-grad {
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #ea580c);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes gkFloat  { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-16px)} }
        @keyframes gkGlow   { 0%,100%{opacity:.35}               50%{opacity:.65} }
        @keyframes gkFadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes gkSlideL { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }
        @keyframes gkSlideR { from{opacity:0;transform:translateX(40px)}  to{opacity:1;transform:translateX(0)} }

        .gk-float  { animation: gkFloat  7s ease-in-out infinite; }
        .gk-glow   { animation: gkGlow   4s ease-in-out infinite; }
        .gk-fadeup { animation: gkFadeUp .8s ease-out both; }
        .gk-slL    { animation: gkSlideL .8s ease-out both; }
        .gk-slR    { animation: gkSlideR .8s ease-out both; }

        .gk-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.011) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.011) 1px, transparent 1px);
          background-size: 72px 72px;
        }

        .gk-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 14px; border-radius: 999px;
          border: 1px solid rgba(251,191,36,.2);
          background: rgba(251,191,36,.08);
          color: #fbbf24; font-size: .7rem; font-weight: 700; letter-spacing:.09em; text-transform:uppercase;
        }

        .gk-stat {
          padding: 16px 14px; border-radius: 12px; text-align:center;
          border: 1px solid rgba(255,255,255,.07);
          background: rgba(255,255,255,.03);
        }

        .gk-frame {
          border-radius: 22px; overflow: hidden;
          border: 1px solid rgba(251,191,36,.18);
          box-shadow: 0 0 50px rgba(245,158,11,.1), 0 24px 60px rgba(0,0,0,.55);
          position: relative;
        }
        .gk-frame::after {
          content:''; position:absolute; inset:0;
          background: linear-gradient(to top, rgba(9,9,11,.75) 0%, transparent 45%);
        }

        .gk-section-label {
          font-size: .62rem; font-weight:700; letter-spacing:.14em;
          text-transform:uppercase; color:#3f3f46; margin-bottom:14px; display:block;
        }

        .gk-hr {
          height:1px; border:none;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.07) 50%, transparent);
          margin: 56px 0;
        }

        .gk-chip {
          display: inline-flex; align-items:center;
          padding: 5px 13px; border-radius: 7px; font-size:.78rem; font-weight:600;
          border: 1px solid rgba(251,191,36,.14);
          background: rgba(251,191,36,.05); color: #d4a017;
          transition: border-color .2s, background .2s, transform .2s;
          cursor: default;
        }
        .gk-chip:hover { border-color:rgba(251,191,36,.38); background:rgba(251,191,36,.1); transform:translateY(-2px); }

        /* Learning chips — slightly different tint */
        .gk-chip-learn {
          border-color: rgba(139,92,246,.18);
          background: rgba(139,92,246,.06); color: #a78bfa;
        }
        .gk-chip-learn:hover { border-color:rgba(139,92,246,.4); background:rgba(139,92,246,.12); }

        .gk-cat {
          padding: 18px 20px; border-radius: 14px;
          border: 1px solid rgba(255,255,255,.06);
          background: rgba(255,255,255,.02);
          transition: border-color .25s;
        }
        .gk-cat:hover { border-color: rgba(251,191,36,.2); }

        .gk-social {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 14px; border-radius: 11px;
          border: 1px solid rgba(255,255,255,.07);
          background: rgba(255,255,255,.025);
          text-decoration: none;
          transition: transform .2s, border-color .2s, background .2s;
        }
        .gk-social:hover { transform: translateX(5px); }
        .gk-s-gh:hover { border-color:rgba(200,200,210,.35); background:rgba(200,200,210,.06); }
        .gk-s-li:hover { border-color:rgba(10,102,194,.4);  background:rgba(10,102,194,.09); }
        .gk-s-wb:hover { border-color:rgba(251,191,36,.4);  background:rgba(251,191,36,.08); }
        .gk-s-sv:hover { border-color:rgba(34,197,94,.4);   background:rgba(34,197,94,.08); }
        .gk-s-em:hover { border-color:rgba(251,191,36,.4);  background:rgba(251,191,36,.08); }

        .gk-project {
          padding: 18px 20px; border-radius: 14px;
          border: 1px solid rgba(255,255,255,.06);
          background: rgba(255,255,255,.02);
          transition: border-color .25s, transform .25s, background .25s;
        }
        .gk-project:hover {
          border-color: rgba(251,191,36,.25);
          background: rgba(251,191,36,.03);
          transform: translateY(-3px);
        }

        .gk-btn-primary {
          display: inline-flex; align-items:center; gap:8px;
          background: linear-gradient(135deg, #f59e0b, #ea580c);
          color: #1c1917; font-weight:700; font-size:.83rem;
          padding: 11px 22px; border-radius: 10px;
          box-shadow: 0 4px 20px rgba(245,158,11,.22);
          transition: transform .25s, box-shadow .25s;
          text-decoration:none;
        }
        .gk-btn-primary:hover { transform:scale(1.04); box-shadow:0 6px 28px rgba(245,158,11,.38); }

        .gk-btn-outline {
          display: inline-flex; align-items:center; gap:8px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.04);
          color: #a1a1aa; font-weight:600; font-size:.83rem;
          padding: 11px 22px; border-radius: 10px;
          transition: border-color .25s, color .25s, background .25s;
          text-decoration:none;
        }
        .gk-btn-outline:hover { border-color:rgba(251,191,36,.4); color:#fbbf24; background:rgba(251,191,36,.06); }

        .gk-proj-link {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: .75rem; font-weight: 600; color: #71717a;
          text-decoration: none; transition: color .2s;
        }
        .gk-proj-link:hover { color: #fbbf24; }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none gk-grid">
        <div className="absolute top-0 right-1/3 w-[700px] h-[700px] rounded-full bg-amber-500/6 blur-3xl gk-glow" />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-600/6 blur-3xl gk-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-amber-400/4 blur-3xl gk-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* ══════════════ HERO ══════════════ */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-6">
          {/* Image — left on Gaurav's page for variety */}
          <div className="gk-slL gk-float order-2 md:order-1">
            <div className="gk-frame" style={{ height: "520px" }}>
              <Image
                src="/gaurav.png"
                alt="Gaurav Kumawat — Full Stack Developer"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                <div className="text-xs text-zinc-400 mb-0.5">
                  Full Stack Developer · MERN Stack
                </div>
                <div className="text-white font-bold text-lg">
                  Gaurav Kumawat
                </div>
                <div className="text-amber-400 text-xs mt-0.5">
                  MG Tech Studio · Co-Founder
                </div>
              </div>
            </div>
          </div>

          {/* Text — right */}
          <div className="gk-slR order-1 md:order-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-zinc-600 mb-6">
              <Link href="/" className="hover:text-amber-400 transition-colors">
                MG Tech Studio
              </Link>
              <span>/</span>
              <span className="text-zinc-500">Gaurav Kumawat</span>
            </div>

            <div className="gk-badge mb-6">
              <Briefcase size={10} /> Co-Founder · MG Tech Studio
            </div>

            <h1 className="gk-display text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight">
              Gaurav
              <br />
              <span className="gk-grad">Kumawat</span>
            </h1>

            <p className="mt-2 text-base font-semibold text-zinc-500 tracking-wide">
              Full Stack Developer · MERN Stack Expert · DSA Enthusiast
            </p>

            <p className="mt-5 text-base text-zinc-400 leading-7 max-w-lg">
              Crafting scalable web solutions from concept to deployment.
              Blending{" "}
              <span className="text-amber-400 font-semibold">
                modern frontend precision
              </span>{" "}
              with{" "}
              <span className="text-amber-400 font-semibold">
                robust backend logic
              </span>{" "}
              — building high-performance apps that are fast, secure, and
              beautifully designed.
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm text-zinc-600">
              <MapPin size={12} className="text-amber-500" />
              Rajasthan, India
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://portfolio.gauravkumawat.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="gk-btn-primary"
              >
                View Portfolio <ArrowUpRight size={14} />
              </a>
              <a
                href="https://github.com/Gaurav786kumawat"
                target="_blank"
                rel="noopener noreferrer"
                className="gk-btn-outline"
              >
                <GitHubIcon /> GitHub
              </a>
            </div>

            {/* Stats */}
            <div className="mt-9 grid grid-cols-4 gap-3">
              {[
                { num: "2+", label: "Years Exp." },
                { num: "10+", label: "Projects Built" },
                { num: "150+", label: "DSA Problems" },
                { num: "4+", label: "Tech Domains" },
              ].map((s) => (
                <div key={s.label} className="gk-stat">
                  <div className="text-xl font-black gk-grad">{s.num}</div>
                  <div className="text-xs text-zinc-600 mt-1 font-medium leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gk-hr" />

        {/* ══════════════ TECH STACK ══════════════ */}
        <div className="gk-fadeup" style={{ animationDelay: ".2s" }}>
          <div className="mb-10">
            <h2 className="gk-display text-3xl md:text-4xl font-black">
              Tech <span className="gk-grad">Stack</span>
            </h2>
            <p className="mt-2 text-zinc-500 text-sm">
              MERN · Next.js · TypeScript · DevOps · DSA · and growing
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techCategories.map((cat) => (
              <div key={cat.category} className="gk-cat">
                <span className="gk-section-label">{cat.category}</span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`gk-chip ${cat.category === "Currently Learning" ? "gk-chip-learn" : ""}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gk-hr" />

        {/* ══════════════ PROJECTS + SOCIALS ══════════════ */}
        <div className="grid md:grid-cols-2 gap-14">
          {/* Projects */}
          <div className="gk-fadeup" style={{ animationDelay: ".25s" }}>
            <h2 className="gk-display text-3xl md:text-4xl font-black mb-2">
              Featured <span className="gk-grad">Projects</span>
            </h2>
            <p className="text-zinc-500 text-sm mb-8">
              Production-grade full-stack applications.
            </p>
            <div className="flex flex-col gap-3">
              {projects.map((p) => (
                <div key={p.title} className="gk-project">
                  <div className="text-sm font-bold text-zinc-100">
                    {p.title}
                  </div>
                  <div className="text-xs text-amber-500/80 font-medium mt-1">
                    {p.tech}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1.5 leading-5">
                    {p.desc}
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gk-proj-link"
                    >
                      <GitHubIcon /> Code
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gk-proj-link"
                    >
                      <ArrowUpRight size={13} /> Live Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="gk-fadeup" style={{ animationDelay: ".35s" }}>
            <h2 className="gk-display text-3xl md:text-4xl font-black mb-2">
              Find me <span className="gk-grad">online</span>
            </h2>
            <p className="text-zinc-500 text-sm mb-8">
              Connect across platforms.
            </p>
            <div className="flex flex-col gap-2.5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`gk-social ${s.cls}`}
                >
                  <span className="text-zinc-500 flex-shrink-0">{s.icon}</span>
                  <div className="min-w-0">
                    <div className="text-xs text-zinc-600 font-medium">
                      {s.label}
                    </div>
                    <div className="text-sm font-semibold text-zinc-200 truncate">
                      {s.handle}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="ml-auto text-zinc-700 flex-shrink-0"
                  />
                </a>
              ))}
            </div>

            {/* Testimonials */}
            <div className="mt-8">
              <span className="gk-section-label">What people say</span>
              <div className="flex flex-col gap-3">
                {[
                  {
                    quote:
                      "Gaurav elevated our product UI — pixel perfect and fast.",
                    name: "Rahul",
                    role: "Designer",
                  },
                  {
                    quote:
                      "Reliable, communicates clearly, and ships production-quality features.",
                    name: "Pritam",
                    role: "Product Manager",
                  },
                ].map((t, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-12 border border-zinc-800/60 bg-zinc-900/30 rounded-xl"
                  >
                    <p className="text-zinc-400 text-xs leading-6 italic">
                      "{t.quote}"
                    </p>
                    <p className="text-xs text-amber-400/80 font-semibold mt-2">
                      — {t.name}{" "}
                      <span className="text-zinc-600 font-normal">
                        ({t.role})
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="gk-hr" />

        {/* ══════════════ ABOUT STRIP ══════════════ */}
        <div
          className="rounded-2xl border border-amber-500/10 bg-amber-500/4 px-8 py-8 gk-fadeup"
          style={{ animationDelay: ".4s" }}
        >
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2">
              <h3 className="gk-display text-2xl font-black mb-3">
                About <span className="gk-grad">Gaurav</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-7">
                Gaurav Kumawat is a Full Stack Web Developer passionate about
                building scalable and performant applications — from crafting
                responsive, user-friendly interfaces to designing robust backend
                systems with Node.js, Express, and MongoDB. With a strong
                foundation in DSA (150+ problems solved), he writes clean,
                optimized, and maintainable code. Certified in Full Stack Web
                Development &amp; DSA from{" "}
                <span className="text-amber-400 font-semibold">
                  Apna College
                </span>
                , he is currently exploring AI/ML tooling with TensorFlow.js and
                LangChain as co-founder of{" "}
                <span className="text-amber-400 font-semibold">
                  MG Tech Studio
                </span>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              {[
                { label: "Speciality", val: "Frontend · Full Stack · MERN" },
                { label: "Focus", val: "Next.js · TypeScript · DSA" },
                { label: "Learning", val: "AI/ML · LangChain · GraphQL" },
                { label: "Cert.", val: "Full Stack + DSA — Apna College" },
              ].map((r) => (
                <div key={r.label} className="flex gap-3">
                  <span className="text-zinc-600 font-medium w-20 flex-shrink-0">
                    {r.label}
                  </span>
                  <span className="text-zinc-400">{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Gaurav Kumawat",
            jobTitle: "Full Stack Developer",
            url: "https://hightechmg.in/gaurav-kumawat",
            email: "gaurav18kumawat@gmail.com",
            sameAs: [
              "https://github.com/Gaurav786kumawat",
              "https://portfolio.gauravkumawat.online/",
              "https://linkedin.com/in/gauravkumawatkirodiwal",
              "https://services.gauravkumawat.online",
            ],
            worksFor: { "@type": "Organization", name: "MG Tech Studio" },
          }),
        }}
      />
    </main>
  );
}
