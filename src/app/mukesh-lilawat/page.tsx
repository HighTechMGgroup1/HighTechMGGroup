import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Mukesh Lilawat | Full Stack Developer & Backend Engineer",
  description:
    "Mukesh Lilawat is a Full Stack Developer and Backend Engineer specializing in Spring Boot, React, Microservices, Docker, Kubernetes, AWS, AI/ML and scalable system architecture. Founder of MG Tech Studio.",
  keywords: [
    "Mukesh Lilawat",
    "Mukesh Lilawat Full Stack Developer",
    "Mukesh Lilawat Backend Engineer",
    "Mukesh Lilawat Spring Boot Developer",
    "Mukesh Lilawat AI ML Developer",
    "MG Tech Studio Founder",
  ],
  alternates: { canonical: "https://hightechmg.in/mukesh-lilawat" },
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
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
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
const MediumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

/* ─── Data ─── */
const socials = [
  {
    label: "GitHub",
    handle: "@mukeshlilawat1",
    href: "https://github.com/mukeshlilawat1",
    icon: <GitHubIcon />,
    cls: "ml-s-gh",
  },
  {
    label: "LinkedIn",
    handle: "@mukeshlilawat1",
    href: "https://linkedin.com/in/mukeshlilawat1",
    icon: <LinkedInIcon />,
    cls: "ml-s-li",
  },
  {
    label: "Twitter / X",
    handle: "@coder_lilawat",
    href: "https://twitter.com/coder_lilawat",
    icon: <TwitterIcon />,
    cls: "ml-s-tw",
  },
  {
    label: "Instagram",
    handle: "@mukeshlilawat1",
    href: "https://instagram.com/mukeshlilawat1",
    icon: <InstagramIcon />,
    cls: "ml-s-ig",
  },
  {
    label: "Instagram",
    handle: "@mukeshlilawat7",
    href: "https://instagram.com/mukeshlilawat7",
    icon: <InstagramIcon />,
    cls: "ml-s-ig",
  },
  {
    label: "Discord",
    handle: "mukeshlilawat1",
    href: "https://discord.com/users/mukeshlilawat1",
    icon: <DiscordIcon />,
    cls: "ml-s-dc",
  },
  {
    label: "Medium",
    handle: "@mukeshkumarlilawat1",
    href: "https://medium.com/@mukeshkumarlilawat1",
    icon: <MediumIcon />,
    cls: "ml-s-md",
  },
  {
    label: "Portfolio",
    handle: "mukeshlilawat.online",
    href: "https://mukeshlilawat.online",
    icon: <GlobeIcon />,
    cls: "ml-s-wb",
  },
];

const techCategories = [
  {
    category: "Languages",
    color: "amber",
    items: ["Java", "JavaScript", "Python", "C", "C++"],
  },
  {
    category: "Frontend",
    color: "orange",
    items: ["React.js", "Next.js", "HTML / CSS"],
  },
  {
    category: "Backend",
    color: "amber",
    items: [
      "Spring Boot",
      "Spring Framework",
      "REST APIs",
      "Microservices",
      "Node.js",
    ],
  },
  {
    category: "Database",
    color: "orange",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "DevOps & Cloud",
    color: "amber",
    items: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Jenkins",
      "CI/CD Pipelines",
      "Git / GitHub",
      "Linux",
    ],
  },
  {
    category: "AI / ML & Data",
    color: "orange",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "AI/ML Engineering"],
  },
  {
    category: "System Design",
    color: "amber",
    items: [
      "HLD (High Level Design)",
      "LLD (Low Level Design)",
      "DSA & Problem Solving",
    ],
  },
];

const projects = [
  {
    title: "AI-Powered Tinder Clone",
    tech: "React · Spring Boot · OpenAI API",
    desc: "Full-stack dating app with AI-driven matching & chat suggestions.",
  },
  {
    title: "Food Delivery App",
    tech: "React · Spring Boot · MySQL",
    desc: "Real-time food ordering platform with menu browsing & order tracking.",
  },
  {
    title: "Hotel Mountain Mirage",
    tech: "React · Spring Boot · JWT",
    desc: "Hotel booking system with secure auth and scalable backend.",
  },
  {
    title: "Instagram Clone",
    tech: "React · Spring Boot · MySQL",
    desc: "Social platform with posts, likes, comments & follow system.",
  },
  {
    title: "Full-Stack Tech Blog",
    tech: "Spring Boot · React · Docker · PostgreSQL",
    desc: "Production-ready blog with JWT auth and Dockerized deployment.",
  },
];

export default function MukeshLilawatPage() {
  return (
    <main
      className="relative min-h-screen bg-zinc-950 text-white overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');

        .ml-display { font-family: 'Playfair Display', serif; }

        .ml-grad {
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #ea580c);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes mlFloat  { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-16px)} }
        @keyframes mlGlow   { 0%,100%{opacity:.35}               50%{opacity:.65} }
        @keyframes mlFadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes mlSlideL { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }
        @keyframes mlSlideR { from{opacity:0;transform:translateX(40px)}  to{opacity:1;transform:translateX(0)} }

        .ml-float  { animation: mlFloat  7s ease-in-out infinite; }
        .ml-glow   { animation: mlGlow   4s ease-in-out infinite; }
        .ml-fadeup { animation: mlFadeUp .8s ease-out both; }
        .ml-slL    { animation: mlSlideL .8s ease-out both; }
        .ml-slR    { animation: mlSlideR .8s ease-out both; }

        /* Grid bg */
        .ml-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.011) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.011) 1px, transparent 1px);
          background-size: 72px 72px;
        }

        /* Badge */
        .ml-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 14px; border-radius: 999px;
          border: 1px solid rgba(251,191,36,.2);
          background: rgba(251,191,36,.08);
          color: #fbbf24; font-size: .7rem; font-weight: 700; letter-spacing:.09em; text-transform:uppercase;
        }

        /* Logo badge */
        .ml-logo {
          display: inline-flex; align-items: center; gap: 5px;
          background: linear-gradient(135deg, #f59e0b, #ea580c);
          padding: 5px 12px 5px 9px; border-radius: 10px;
          color: #1c1917; font-weight: 900; font-size: .9rem;
          box-shadow: 0 3px 16px rgba(245,158,11,.22);
        }

        /* Stat card */
        .ml-stat {
          padding: 16px 14px; border-radius: 12px; text-align:center;
          border: 1px solid rgba(255,255,255,.07);
          background: rgba(255,255,255,.03);
          backdrop-filter: blur(8px);
        }

        /* Image frame */
        .ml-frame {
          border-radius: 22px; overflow: hidden;
          border: 1px solid rgba(251,191,36,.18);
          box-shadow: 0 0 50px rgba(245,158,11,.1), 0 24px 60px rgba(0,0,0,.55);
          position: relative;
        }
        .ml-frame::after {
          content:''; position:absolute; inset:0;
          background: linear-gradient(to top, rgba(9,9,11,.75) 0%, transparent 45%);
        }

        /* Section heading */
        .ml-section-label {
          font-size: .62rem; font-weight:700; letter-spacing:.14em;
          text-transform:uppercase; color:#3f3f46; margin-bottom:16px; display:block;
        }

        /* Divider */
        .ml-hr {
          height:1px; border:none;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.07) 50%, transparent);
          margin: 56px 0;
        }

        /* Tech chip */
        .ml-chip {
          display: inline-flex; align-items:center;
          padding: 5px 13px; border-radius: 7px; font-size:.78rem; font-weight:600;
          border: 1px solid rgba(251,191,36,.14);
          background: rgba(251,191,36,.05); color: #d4a017;
          transition: border-color .2s, background .2s, transform .2s;
          cursor: default;
        }
        .ml-chip:hover { border-color:rgba(251,191,36,.38); background:rgba(251,191,36,.1); transform:translateY(-2px); }

        /* Category card */
        .ml-cat {
          padding: 18px 20px; border-radius: 14px;
          border: 1px solid rgba(255,255,255,.06);
          background: rgba(255,255,255,.02);
          transition: border-color .25s;
        }
        .ml-cat:hover { border-color: rgba(251,191,36,.2); }

        /* Social link */
        .ml-social {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 14px; border-radius: 11px;
          border: 1px solid rgba(255,255,255,.07);
          background: rgba(255,255,255,.025);
          text-decoration: none;
          transition: transform .2s, border-color .2s, background .2s;
        }
        .ml-social:hover { transform: translateX(5px); }
        .ml-s-gh:hover { border-color:rgba(200,200,210,.35); background:rgba(200,200,210,.06); }
        .ml-s-li:hover { border-color:rgba(10,102,194,.4);  background:rgba(10,102,194,.09); }
        .ml-s-ig:hover { border-color:rgba(236,72,153,.4);  background:rgba(236,72,153,.08); }
        .ml-s-tw:hover { border-color:rgba(200,200,210,.35);background:rgba(200,200,210,.06); }
        .ml-s-dc:hover { border-color:rgba(88,101,242,.4);  background:rgba(88,101,242,.09); }
        .ml-s-md:hover { border-color:rgba(255,255,255,.2); background:rgba(255,255,255,.05); }
        .ml-s-wb:hover { border-color:rgba(251,191,36,.4);  background:rgba(251,191,36,.08); }

        /* Project card */
        .ml-project {
          padding: 18px 20px; border-radius: 14px;
          border: 1px solid rgba(255,255,255,.06);
          background: rgba(255,255,255,.02);
          transition: border-color .25s, transform .25s, background .25s;
        }
        .ml-project:hover {
          border-color: rgba(251,191,36,.25);
          background: rgba(251,191,36,.03);
          transform: translateY(-3px);
        }

        /* Buttons */
        .ml-btn-primary {
          display: inline-flex; align-items:center; gap:8px;
          background: linear-gradient(135deg, #f59e0b, #ea580c);
          color: #1c1917; font-weight:700; font-size:.83rem;
          padding: 11px 22px; border-radius: 10px;
          box-shadow: 0 4px 20px rgba(245,158,11,.22);
          transition: transform .25s, box-shadow .25s;
          text-decoration:none;
        }
        .ml-btn-primary:hover { transform:scale(1.04); box-shadow:0 6px 28px rgba(245,158,11,.38); }

        .ml-btn-outline {
          display: inline-flex; align-items:center; gap:8px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.04);
          color: #a1a1aa; font-weight:600; font-size:.83rem;
          padding: 11px 22px; border-radius: 10px;
          transition: border-color .25s, color .25s, background .25s;
          text-decoration:none;
        }
        .ml-btn-outline:hover { border-color:rgba(251,191,36,.4); color:#fbbf24; background:rgba(251,191,36,.06); }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none ml-grid">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full bg-amber-500/6 blur-3xl ml-glow" />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/6 blur-3xl ml-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-amber-400/4 blur-3xl ml-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* ══════════════════════════════════
            HERO
        ══════════════════════════════════ */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-6">
          {/* Left */}
          <div className="ml-slL">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-zinc-600 mb-6">
              <Link href="/" className="hover:text-amber-400 transition-colors">
                MG Tech Studio
              </Link>
              <span>/</span>
              <span className="text-zinc-500">Mukesh Lilawat</span>
            </div>

            <div className="ml-badge mb-6">
              <Briefcase size={10} /> Founder · MG Tech Studio
            </div>

            <h1 className="ml-display text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight">
              Mukesh
              <br />
              <span className="ml-grad">Lilawat</span>
            </h1>

            <p className="mt-2 text-base font-semibold text-zinc-500 tracking-wide">
              Full Stack Developer · Backend Engineer · AI/ML Enthusiast
            </p>

            <p className="mt-5 text-base text-zinc-400 leading-7 max-w-lg">
              Building scalable, production-ready systems with{" "}
              <span className="text-amber-400 font-semibold">Spring Boot</span>,{" "}
              <span className="text-amber-400 font-semibold">
                Microservices
              </span>
              , <span className="text-amber-400 font-semibold">Docker/K8s</span>{" "}
              and modern full-stack technologies. Passionate about clean
              architecture, DSA, and AI/ML engineering.
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm text-zinc-600">
              <MapPin size={12} className="text-amber-500" />
              Jodhpur / Jaipur, Rajasthan, India
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://mukeshlilawat.online"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-btn-primary"
              >
                View Portfolio <ArrowUpRight size={14} />
              </a>
              <a
                href="https://github.com/mukeshlilawat1"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-btn-outline"
              >
                <GitHubIcon /> GitHub
              </a>
            </div>

            {/* Stats */}
            <div className="mt-9 grid grid-cols-4 gap-3">
              {[
                { num: "2.4k+", label: "GitHub Followers" },
                { num: "3.5k+", label: "Twitter Followers" },
                { num: "20+", label: "Projects" },
                { num: "7+", label: "Tech Domains" },
              ].map((s) => (
                <div key={s.label} className="ml-stat">
                  <div className="text-xl font-black ml-grad">{s.num}</div>
                  <div className="text-xs text-zinc-600 mt-1 font-medium leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="ml-slR ml-float">
            <div className="ml-frame" style={{ height: "520px" }}>
              <Image
                src="/mukesh.webp"
                alt="Mukesh Lilawat — Full Stack Developer"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                <div className="text-xs text-zinc-400 mb-0.5">
                  Full Stack Developer · AI/ML
                </div>
                <div className="text-white font-bold text-lg">
                  Mukesh Lilawat
                </div>
                <div className="text-amber-400 text-xs mt-0.5">
                  MG Tech Studio · Founder
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-hr" />

        {/* ══════════════════════════════════
            TECH STACK
        ══════════════════════════════════ */}
        <div className="ml-fadeup" style={{ animationDelay: ".2s" }}>
          <div className="mb-10">
            <h2 className="ml-display text-3xl md:text-4xl font-black">
              Tech <span className="ml-grad">Stack</span>
            </h2>
            <p className="mt-2 text-zinc-500 text-sm">
              7+ domains · 25+ technologies · constantly expanding
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {techCategories.map((cat) => (
              <div key={cat.category} className="ml-cat">
                <span className="ml-section-label">{cat.category}</span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="ml-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ml-hr" />

        {/* ══════════════════════════════════
            PROJECTS + SOCIALS
        ══════════════════════════════════ */}
        <div className="grid md:grid-cols-2 gap-14">
          {/* Projects */}
          <div className="ml-fadeup" style={{ animationDelay: ".25s" }}>
            <h2 className="ml-display text-3xl md:text-4xl font-black mb-2">
              Featured <span className="ml-grad">Projects</span>
            </h2>
            <p className="text-zinc-500 text-sm mb-8">
              Real-world full-stack applications.
            </p>
            <div className="flex flex-col gap-3">
              {projects.map((p) => (
                <div key={p.title} className="ml-project">
                  <div className="text-sm font-bold text-zinc-100">
                    {p.title}
                  </div>
                  <div className="text-xs text-amber-500/80 font-medium mt-1">
                    {p.tech}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1.5 leading-5">
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="ml-fadeup" style={{ animationDelay: ".35s" }}>
            <h2 className="ml-display text-3xl md:text-4xl font-black mb-2">
              Find me <span className="ml-grad">online</span>
            </h2>
            <p className="text-zinc-500 text-sm mb-8">
              Connect across platforms.
            </p>
            <div className="flex flex-col gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ml-social ${s.cls}`}
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
          </div>
        </div>

        <div className="ml-hr" />

        {/* ══════════════════════════════════
            ABOUT STRIP
        ══════════════════════════════════ */}
        <div
          className="rounded-2xl border border-amber-500/10 bg-amber-500/4 px-8 py-8 ml-fadeup"
          style={{ animationDelay: ".4s" }}
        >
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2">
              <h3 className="ml-display text-2xl font-black mb-3">
                About <span className="ml-grad">Mukesh</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-7">
                From Jodhpur, Rajasthan — Mukesh is a passionate full-stack
                developer, lifelong learner and problem-solver. He specializes
                in Java backend systems, React frontends, and DevOps pipelines.
                He writes on{" "}
                <a
                  href="https://medium.com/@mukeshkumarlilawat1"
                  className="text-amber-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>{" "}
                and runs{" "}
                <span className="text-amber-400 font-semibold">
                  StackHunt by Lilawat
                </span>{" "}
                on YouTube. Beyond code he explores Arch Linux, Hyprland window
                managers, and lo-fi music while building the next big thing at{" "}
                <span className="text-amber-400 font-semibold">
                  MG Tech Studio
                </span>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              {[
                { label: "Education", val: "CSE — Computer Science & Engg." },
                { label: "Focus", val: "Backend · DevOps · AI/ML" },
                { label: "Blog", val: "StackHunt by Lilawat" },
                { label: "Location", val: "Jodhpur / Jaipur, Rajasthan" },
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

      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mukesh Lilawat",
            jobTitle: "Full Stack Developer & Backend Engineer",
            url: "https://hightechmg.in/mukesh-lilawat",
            sameAs: [
              "https://github.com/mukeshlilawat1",
              "https://mukeshlilawat.online",
              "https://linkedin.com/in/mukeshlilawat1",
              "https://instagram.com/mukeshlilawat1",
              "https://instagram.com/mukeshlilawat7",
              "https://twitter.com/coder_lilawat",
              "https://medium.com/@mukeshkumarlilawat1",
            ],
            worksFor: { "@type": "Organization", name: "MG Tech Studio" },
          }),
        }}
      />
    </main>
  );
}
