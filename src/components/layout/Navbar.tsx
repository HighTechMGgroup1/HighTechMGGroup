"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Sparkles,
  Home,
  Briefcase,
  FolderKanban,
  CreditCard,
  Info,
  Phone,
  Layers,
  Rocket,
  ShieldCheck,
  Code2,
  Server,
  Database,
  ChevronDown,
  Zap,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  /* SCROLL EFFECT */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* LOCK BODY SCROLL WHEN MENU OPEN */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  /* CLOSE FEATURES DROPDOWN ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        featuresRef.current &&
        !featuresRef.current.contains(e.target as Node)
      ) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Space+Mono:wght@700&family=DM+Sans:wght@500;700&display=swap');
        
        .font-display {
          font-family: 'Playfair Display', serif;
        }
        
        .font-mono {
          font-family: 'Space Mono', monospace;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
        
        .glow-text {
          text-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
        }
        
        .nav-gradient {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #ea580c 100%);
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 z-40 w-full transition-all duration-500
          ${
            scrolled
              ? "bg-zinc-950/95 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl shadow-amber-500/5"
              : "bg-zinc-950/80 backdrop-blur-sm"
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* ================= LOGO ================= */}
            <Link
              href="/"
              className="group flex items-center gap-2 sm:gap-2.5 text-lg sm:text-xl font-bold transition-transform hover:scale-105"
            >
              <span className="relative inline-flex items-center gap-1 sm:gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-2.5 sm:px-3 py-1.5 shadow-lg shadow-amber-500/20 transition-all group-hover:shadow-amber-500/30">
                <Zap size={14} className="text-zinc-950 sm:w-4 sm:h-4" />
                <span className="font-display text-base sm:text-lg font-black text-zinc-950">
                  MG
                </span>
              </span>
              <span className="font-display text-white text-sm sm:text-base">
                Tech Studio
              </span>
            </Link>

            {/* ================= DESKTOP MENU ================= */}
            <div className="hidden lg:flex items-center gap-1 text-sm font-semibold">
              <NavLink
                href="/"
                active={isActive("/")}
                icon={<Home size={15} />}
              >
                Home
              </NavLink>

              {/* ================= FEATURES DROPDOWN ================= */}
              <div ref={featuresRef} className="relative">
                <button
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 transition-all duration-300 font-semibold
                    ${
                      featuresOpen || isActive("/features")
                        ? "bg-gradient-to-r from-amber-500 to-orange-600 text-zinc-950 shadow-md shadow-amber-500/20"
                        : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                    }
                  `}
                >
                  <Sparkles size={15} />
                  Features
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${featuresOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* DROPDOWN MENU */}
                <div
                  className={`absolute left-0 top-full mt-3 w-[450px]
                    rounded-xl bg-zinc-900 border border-amber-500/20 shadow-2xl shadow-black/50
                    transition-all duration-300 origin-top overflow-hidden
                    ${
                      featuresOpen
                        ? "opacity-100 scale-100 translate-y-0 animate-slide-down"
                        : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
                    }
                  `}
                >
                  {/* Gradient accent */}
                  <div className="h-0.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500" />

                  <div className="p-3">
                    <div className="grid grid-cols-2 gap-2">
                      {FEATURES.map((item, i) => (
                        <Link
                          key={item.title}
                          href="/features"
                          onClick={() => setFeaturesOpen(false)}
                          className="group flex items-start gap-2.5 rounded-lg p-3.5 bg-zinc-950/50 border border-zinc-800 hover:border-amber-500/30 hover:bg-zinc-800/50 transition-all duration-300"
                          style={{
                            animationDelay: `${i * 0.05}s`,
                          }}
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-amber-400 transition-transform group-hover:scale-110">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-white text-sm mb-0.5">
                              {item.title}
                            </p>
                            <p className="text-xs text-zinc-400">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <NavLink
                href="/services"
                active={isActive("/services")}
                icon={<Briefcase size={15} />}
              >
                Services
              </NavLink>

              <NavLink
                href="/projects"
                active={isActive("/projects")}
                icon={<FolderKanban size={15} />}
              >
                Projects
              </NavLink>

              <NavLink
                href="/pricing"
                active={isActive("/pricing")}
                icon={<CreditCard size={15} />}
              >
                Pricing
              </NavLink>

              <NavLink
                href="/about"
                active={isActive("/about")}
                icon={<Info size={15} />}
              >
                About
              </NavLink>

              <NavLink
                href="/contact"
                active={isActive("/contact")}
                icon={<Phone size={15} />}
              >
                Contact
              </NavLink>
            </div>

            {/* ================= DESKTOP CTA ================= */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2 text-sm font-semibold text-zinc-950 shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <Zap size={14} />
                  Get Started
                </span>
              </Link>
            </div>

            {/* ================= MOBILE TOGGLE ================= */}
            <button
              className="lg:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/30 bg-zinc-900 text-amber-400 backdrop-blur-sm hover:bg-zinc-800 transition-all active:scale-95 shadow-lg"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE MENU - OUTSIDE HEADER ================= */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 z-[45] bg-black/70 backdrop-blur-sm"
            style={{ top: "4rem" }}
            onClick={() => setOpen(false)}
          />

          {/* Menu Content - Higher z-index than backdrop */}
          <div
            className="lg:hidden fixed left-0 right-0 bottom-0 z-50 bg-zinc-950 border-t border-amber-500/20 overflow-y-auto"
            style={{ top: "4rem" }}
          >
            <div className="px-4 sm:px-6 py-6 space-y-2.5">
              {/* Mobile Links */}
              <MobileLink href="/" active={isActive("/")} setOpen={setOpen}>
                <Home size={16} />
                Home
              </MobileLink>

              <MobileLink
                href="/features"
                active={isActive("/features")}
                setOpen={setOpen}
              >
                <Sparkles size={16} />
                Features
              </MobileLink>

              <MobileLink
                href="/services"
                active={isActive("/services")}
                setOpen={setOpen}
              >
                <Briefcase size={16} />
                Services
              </MobileLink>

              <MobileLink
                href="/projects"
                active={isActive("/projects")}
                setOpen={setOpen}
              >
                <FolderKanban size={16} />
                Projects
              </MobileLink>

              <MobileLink
                href="/pricing"
                active={isActive("/pricing")}
                setOpen={setOpen}
              >
                <CreditCard size={16} />
                Pricing
              </MobileLink>

              <MobileLink
                href="/about"
                active={isActive("/about")}
                setOpen={setOpen}
              >
                <Info size={16} />
                About
              </MobileLink>

              <MobileLink
                href="/contact"
                active={isActive("/contact")}
                setOpen={setOpen}
              >
                <Phone size={16} />
                Contact
              </MobileLink>

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-4 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
              >
                <Zap size={16} />
                Get Started
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

/* ================= DATA ================= */

const FEATURES = [
  {
    title: "Clean Architecture",
    desc: "Scalable & maintainable systems",
    icon: <Layers size={20} />,
  },
  {
    title: "High Performance",
    desc: "Lightning-fast load times",
    icon: <Rocket size={20} />,
  },
  {
    title: "Fort Knox Security",
    desc: "Enterprise-grade protection",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "Modern Frontend",
    desc: "Next.js, React & Tailwind",
    icon: <Code2 size={20} />,
  },
  {
    title: "Powerful Backend",
    desc: "Node.js & Spring Boot",
    icon: <Server size={20} />,
  },
  {
    title: "Optimized Database",
    desc: "Performance-tuned schemas",
    icon: <Database size={20} />,
  },
];

/* ================= COMPONENTS ================= */

function NavLink({
  href,
  active,
  icon,
  children,
}: {
  href: string;
  active: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 font-semibold transition-all duration-300
        ${
          active
            ? "bg-gradient-to-r from-amber-500 to-orange-600 text-zinc-950 shadow-md shadow-amber-500/20"
            : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
        }
      `}
    >
      {icon}
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  active,
  setOpen,
  children,
}: {
  href: string;
  active: boolean;
  setOpen: (v: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={`flex items-center gap-3 rounded-lg px-4 py-3.5 text-sm font-semibold border transition-all duration-300 active:scale-95
        ${
          active
            ? "bg-gradient-to-r from-amber-500 to-orange-600 text-zinc-950 border-transparent shadow-md shadow-amber-500/20"
            : "bg-zinc-900/50 text-zinc-300 border-zinc-800 hover:border-amber-500/30 hover:bg-zinc-800/50"
        }
      `}
    >
      {children}
    </Link>
  );
}
