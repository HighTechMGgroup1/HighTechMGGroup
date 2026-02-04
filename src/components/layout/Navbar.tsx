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
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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
            {/* ================= BLUR OVERLAY (MOBILE MENU) ================= */}
            <div
                className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
                onClick={() => setOpen(false)}
            />

            <header
                className={`fixed top-0 left-0 z-50 w-full transition-all duration-300
          ${scrolled
                        ? "bg-white/80 backdrop-blur border-b border-stone-200 shadow-sm"
                        : "bg-gradient-to-r from-stone-100 via-rose-50 to-stone-100"
                    }
        `}
            >
                <nav className="max-w-7xl mx-auto px-5">
                    <div className="flex h-20 items-center justify-between">
                        {/* LOGO */}
                        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold">
                            <span className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-3 py-1 text-white shadow">
                                <Sparkles size={16} />
                                MG
                            </span>
                            <span className="text-stone-900">Tech</span>
                        </Link>

                        {/* ================= DESKTOP MENU ================= */}
                        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
                            <NavLink href="/" active={isActive("/")} icon={<Home size={16} />}>
                                Home
                            </NavLink>

                            {/* FEATURES */}
                            <div ref={featuresRef} className="relative">
                                <Link
                                    href="/features"
                                    onClick={(e) => {
                                        if (!featuresOpen) {
                                            e.preventDefault(); // pehle dropdown open
                                            setFeaturesOpen(true);
                                        }
                                    }}
                                    className={`flex items-center gap-2 rounded-full px-4 py-2 transition
                    ${featuresOpen || isActive("/features")
                                            ? "bg-rose-100 text-rose-600"
                                            : "text-stone-700 hover:bg-stone-100"
                                        }
                  `}
                                >
                                    <Sparkles size={16} />
                                    Features
                                </Link>

                                {/* DROPDOWN */}
                                <div
                                    className={`absolute left-0 top-full mt-4 w-[420px]
                    rounded-2xl bg-white border border-stone-200 shadow-xl p-4
                    transition-all duration-300 origin-top
                    ${featuresOpen
                                            ? "opacity-100 scale-100 translate-y-0"
                                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                        }
                  `}
                                >
                                    <div className="grid grid-cols-2 gap-2">
                                        {FEATURES.map((item) => (
                                            <Link
                                                key={item.title}
                                                href="/features"
                                                onClick={() => setFeaturesOpen(false)}
                                                className="flex items-start gap-3 rounded-xl p-3 hover:bg-rose-50 transition"
                                            >
                                                <div className="text-rose-500 mt-1">{item.icon}</div>
                                                <div>
                                                    <p className="font-semibold text-stone-900">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-xs text-stone-500">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <NavLink href="/services" active={isActive("/services")} icon={<Briefcase size={16} />}>
                                Services
                            </NavLink>

                            <NavLink href="/projects" active={isActive("/projects")} icon={<FolderKanban size={16} />}>
                                Projects
                            </NavLink>

                            <NavLink href="/pricing" active={isActive("/pricing")} icon={<CreditCard size={16} />}>
                                Pricing
                            </NavLink>

                            <NavLink href="/about" active={isActive("/about")} icon={<Info size={16} />}>
                                About
                            </NavLink>

                            <NavLink href="/contact" active={isActive("/contact")} icon={<Phone size={16} />}>
                                Contact
                            </NavLink>
                        </div>

                        {/* DESKTOP CTA */}
                        <div className="hidden lg:block">
                            <Link
                                href="/contact"
                                className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-7 py-3 text-sm font-semibold text-white shadow hover:scale-105 transition"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* MOBILE TOGGLE */}
                        <button
                            className="lg:hidden relative z-50 text-stone-800"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </nav>

                {/* ================= MOBILE MENU ================= */}
                <div
                    className={`lg:hidden fixed left-0 right-0 top-20 z-50
            transition-all duration-300 ease-out
            ${open
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-6 pointer-events-none"
                        }
          `}
                >
                    <div className="bg-white border-t border-stone-200 shadow-xl">
                        <div className="px-6 py-6 grid grid-cols-2 gap-5 text-sm font-medium">
                            <MobileLink href="/" active={isActive("/")} setOpen={setOpen}>Home</MobileLink>
                            <MobileLink href="/features" active={isActive("/features")} setOpen={setOpen}>Features</MobileLink>
                            <MobileLink href="/services" active={isActive("/services")} setOpen={setOpen}>Services</MobileLink>
                            <MobileLink href="/projects" active={isActive("/projects")} setOpen={setOpen}>Projects</MobileLink>
                            <MobileLink href="/pricing" active={isActive("/pricing")} setOpen={setOpen}>Pricing</MobileLink>
                            <MobileLink href="/about" active={isActive("/about")} setOpen={setOpen}>About</MobileLink>
                            <MobileLink href="/contact" active={isActive("/contact")} setOpen={setOpen}>Contact</MobileLink>

                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className="col-span-2 mt-6 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-4 text-center font-semibold text-white shadow"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

/* ================= DATA ================= */

const FEATURES = [
    { title: "Clean Architecture", desc: "Scalable systems", icon: <Layers size={20} /> },
    { title: "High Performance", desc: "Fast UX", icon: <Rocket size={20} /> },
    { title: "Security", desc: "Best practices", icon: <ShieldCheck size={20} /> },
    { title: "Frontend", desc: "Next.js & React", icon: <Code2 size={20} /> },
    { title: "Backend", desc: "Node & Spring", icon: <Server size={20} /> },
    { title: "Database", desc: "Optimized schemas", icon: <Database size={20} /> },
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
            className={`flex items-center gap-2 rounded-full px-4 py-2 transition
        ${active ? "bg-rose-100 text-rose-600" : "text-stone-700 hover:bg-stone-100"}
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
            className={`rounded-2xl px-4 py-4 text-center text-sm font-medium border transition
        ${active
                    ? "bg-rose-100 text-rose-600 border-rose-200"
                    : "bg-white text-stone-800 border-stone-200 hover:bg-stone-50"
                }
      `}
        >
            {children}
        </Link>
    );
}
