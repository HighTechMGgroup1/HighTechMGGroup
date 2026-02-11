"use client";

import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  Zap,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [business, setBusiness] = useState("");
  const [notes, setNotes] = useState("");

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const message = `
Hey Mukesh,
I want a website for my ${business} business.

Name: ${name}
Mobile: ${mobile}
Business: ${business}

Additional Details:
${notes || "None"}
    `;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "916377072190";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

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
        
        @keyframes slideInLeft {
          from { 
            opacity: 0;
            transform: translateX(-50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0;
            transform: translateX(50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.8);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        /* SNOWFLAKES */
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes snowfall-2 {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(-100px) rotate(-360deg);
            opacity: 0;
          }
        }
        
        @keyframes snowfall-3 {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(50px) rotate(180deg);
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

        input, textarea {
          color: white;
        }
        
        input::placeholder, textarea::placeholder {
          color: rgba(161, 161, 170, 0.7);
        }
        
        input:focus, textarea:focus {
          outline: none;
          border-color: #f59e0b;
          box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
        }
      `}</style>

      {/* SNOWFLAKES */}
      {[...Array(20)].map((_, i) => {
        const colors = ["white", "amber", "orange"];
        const colorClass = `snowflake-${colors[i % 3]}`;
        const leftPosition = Math.random() * 100;
        const animationDuration = 10 + Math.random() * 10;
        const animationDelay = Math.random() * 10;
        const fontSize = 10 + Math.random() * 10;
        const animationType =
          i % 3 === 0 ? "snowfall" : i % 3 === 1 ? "snowfall-2" : "snowfall-3";

        return (
          <div
            key={i}
            className={`snowflake ${colorClass}`}
            style={{
              left: `${leftPosition}%`,
              fontSize: `${fontSize}px`,
              animation: `${animationType} ${animationDuration}s linear ${animationDelay}s infinite`,
            }}
          >
            ❅
          </div>
        );
      })}

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative min-h-[80vh] flex items-center grain">
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
          {/* Badge */}
          <div
            className="animate-fade-in-up inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium backdrop-blur-sm"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <Sparkles size={12} className="text-amber-400 sm:w-3.5 sm:h-3.5" />
            <span className="text-amber-300">Let's Build Together</span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-8 sm:mt-10 max-w-5xl font-display">
            <div
              className="animate-slide-in-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
              style={{ opacity: 0, animationDelay: "0.2s" }}
            >
              Let's talk about
            </div>
            <div
              className="animate-slide-in-right mt-2 sm:mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight gradient-text"
              style={{ opacity: 0, animationDelay: "0.4s" }}
            >
              your next project
            </div>
          </h1>

          {/* Subheading */}
          <p
            className="animate-fade-in-up mt-6 sm:mt-8 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300"
            style={{ opacity: 0, animationDelay: "0.6s" }}
          >
            Tell us what you're building. We'll turn it into a{" "}
            <span className="font-semibold text-amber-400">
              reliable, scalable
            </span>
            , and{" "}
            <span className="font-semibold text-amber-400">
              production-ready system
            </span>{" "}
            that drives real results.
          </p>

          {/* Process Steps */}
          <div
            className="animate-fade-in-up mt-10 sm:mt-12 grid gap-4 sm:gap-5 sm:grid-cols-3 max-w-4xl"
            style={{ opacity: 0, animationDelay: "0.8s" }}
          >
            {[
              {
                icon: <CheckCircle size={20} />,
                title: "Review Requirements",
                desc: "We analyze your needs carefully",
              },
              {
                icon: <Zap size={20} />,
                title: "Technical Strategy",
                desc: "Suggest the best approach",
              },
              {
                icon: <ShieldCheck size={20} />,
                title: "Transparent Pricing",
                desc: "Clear timelines & costs",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-sm"
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
      </section>

      {/* =====================================================
          CONTACT FORM + INFO SECTION
      ====================================================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* FORM CARD */}
            <div className="group rounded-2xl sm:rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-10 md:p-12 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/10">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-amber-500/10 blur-3xl transition-all duration-700 group-hover:scale-150 opacity-0 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                  <Send size={14} className="text-amber-400" />
                  <span className="text-amber-300">Start a Conversation</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-display font-black">
                  Send us a message
                </h2>

                <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                  This will open WhatsApp with your details pre-filled. Quick,
                  easy, and secure.
                </p>

                <form
                  onSubmit={handleWhatsAppSubmit}
                  className="mt-8 space-y-5"
                >
                  <div>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-5 py-4 text-white placeholder:text-zinc-500 transition-all duration-300 hover:border-zinc-600 focus:border-amber-500 focus:bg-zinc-900"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <input
                      required
                      type="tel"
                      placeholder="Mobile number"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-5 py-4 text-white placeholder:text-zinc-500 transition-all duration-300 hover:border-zinc-600 focus:border-amber-500 focus:bg-zinc-900"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>

                  <div>
                    <input
                      required
                      type="text"
                      placeholder="Business name"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-5 py-4 text-white placeholder:text-zinc-500 transition-all duration-300 hover:border-zinc-600 focus:border-amber-500 focus:bg-zinc-900"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Tell us about your project (optional)"
                      rows={5}
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-5 py-4 text-white placeholder:text-zinc-500 transition-all duration-300 hover:border-zinc-600 focus:border-amber-500 focus:bg-zinc-900 resize-none"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="glow-border group w-full inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-base font-semibold text-zinc-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] transition-all duration-300 active:scale-95"
                  >
                    Send via WhatsApp
                    <MessageCircle
                      size={20}
                      className="transition-transform group-hover:rotate-12"
                    />
                  </button>
                </form>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="lg:pt-16">
              <h2 className="text-3xl sm:text-4xl font-display font-black">
                Direct <span className="gradient-text">contact</span>
              </h2>

              <p className="mt-5 text-lg text-zinc-400 leading-relaxed max-w-md">
                Prefer to reach us directly? Choose your preferred method below.
              </p>

              {/* Contact Methods */}
              <div className="mt-10 space-y-4">
                {[
                  {
                    icon: <Mail size={22} />,
                    label: "Email us",
                    value: "hightechmg@gmail.com",
                    href: "mailto:hightechmg@gmail.com",
                  },
                  {
                    icon: <Phone size={22} />,
                    label: "Call us",
                    value: "+91 63770 72190 • +91 78785 83600",
                    href: "tel:+916377072190",
                  },
                  {
                    icon: <MessageCircle size={22} />,
                    label: "WhatsApp",
                    value: "Available for instant chat",
                    href: "https://wa.me/916377072190",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:bg-zinc-900 hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 mt-0.5 text-amber-400 transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-amber-400">
                        {item.label}
                      </div>
                      <div className="mt-1 text-base text-zinc-300">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 space-y-4">
                {[
                  {
                    icon: <Clock size={20} />,
                    text: "Response time: within 24 hours",
                  },
                  {
                    icon: <MapPin size={20} />,
                    text: "Working with clients across India",
                  },
                  {
                    icon: <ShieldCheck size={20} />,
                    text: "Project discussions kept confidential",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-zinc-400"
                  >
                    <div className="text-amber-400">{item.icon}</div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST SECTION
      ====================================================== */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 grain">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">
            Why clients <span className="gradient-text">trust us</span>
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <ShieldCheck size={28} />,
                title: "Transparent Process",
                desc: "No hidden costs, clear timelines",
              },
              {
                icon: <Zap size={28} />,
                title: "Fast Delivery",
                desc: "Quality work, delivered on time",
              },
              {
                icon: <CheckCircle size={28} />,
                title: "Post-Launch Support",
                desc: "We're here after deployment too",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 text-amber-400">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-zinc-500 max-w-3xl mx-auto text-sm sm:text-base">
            We usually respond within 24 hours. Clear requirements help us give
            accurate timelines and pricing upfront.
          </p>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-zinc-950 to-orange-950/30" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-3xl animate-glow" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Ready to start building{" "}
            <span className="gradient-text">something amazing</span>?
          </h2>

          <p className="mt-5 sm:mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto">
            One conversation could change your business trajectory. Let's make
            it happen.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/916377072190"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-border group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-base font-semibold text-zinc-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300 active:scale-95"
            >
              Chat on WhatsApp
              <MessageCircle
                size={20}
                className="transition-transform group-hover:rotate-12"
              />
            </a>

            <a
              href="mailto:hightechmg@gmail.com"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900/50 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:border-amber-500/50 hover:bg-zinc-800/50 transition-all duration-300 active:scale-95"
            >
              Send an Email
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
