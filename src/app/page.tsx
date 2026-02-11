import {
  ArrowRight,
  CheckCircle,
  Code2,
  FolderKanban,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

export default function HomePage() {
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
        
        /* SNOWFLAKES - ULTRA SMOOTH */
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
        
        /* White Snowflakes */
        .snowflake-white {
          color: rgba(255, 255, 255, 0.8);
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }
        
        /* Amber Snowflakes */
        .snowflake-amber {
          color: rgba(251, 191, 36, 0.7);
          text-shadow: 0 0 5px rgba(251, 191, 36, 0.4);
        }
        
        /* Orange Snowflakes */
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

      {/* =====================================================
          SNOWFLAKES - SMOOTH & COLORFUL
      ====================================================== */}
      {[...Array(20)].map((_, i) => {
        const colors = ["white", "amber", "orange"];
        const colorClass = `snowflake-${colors[i % 3]}`;
        const leftPosition = Math.random() * 100;
        const animationDuration = 10 + Math.random() * 10; // 10-20s
        const animationDelay = Math.random() * 10; // 0-10s
        const fontSize = 10 + Math.random() * 10; // 10-20px
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
          HERO SECTION - BOLD & CINEMATIC
      ====================================================== */}
      <section className="relative min-h-screen flex items-center grain">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          {/* Badge */}
          <div
            className="animate-fade-in-up inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium backdrop-blur-sm"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <Sparkles size={12} className="text-amber-400 sm:w-3.5 sm:h-3.5" />
            <span className="text-amber-300">Premium Web Experiences</span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-8 sm:mt-10 max-w-5xl font-display">
            <div
              className="animate-slide-in-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
              style={{ opacity: 0, animationDelay: "0.2s" }}
            >
              Websites that
            </div>
            <div
              className="animate-slide-in-right mt-2 sm:mt-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight gradient-text"
              style={{ opacity: 0, animationDelay: "0.4s" }}
            >
              dominate & convert
            </div>
          </h1>

          {/* Subheading */}
          <p
            className="animate-fade-in-up mt-6 sm:mt-8 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300"
            style={{ opacity: 0, animationDelay: "0.6s" }}
          >
            We architect digital experiences that don't just look stunning —{" "}
            <span className="font-semibold text-amber-400">they scale</span>,{" "}
            <span className="font-semibold text-amber-400">they perform</span>,
            and{" "}
            <span className="font-semibold text-amber-400">
              they generate revenue
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up mt-8 sm:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-5"
            style={{ opacity: 0, animationDelay: "0.8s" }}
          >
            <a
              href="/contact"
              className="group glow-border relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-zinc-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 active:scale-95"
            >
              Book Free Consultation
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1 sm:w-4 sm:h-4"
              />
            </a>

            <a
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/50 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-sm hover:border-amber-500/50 hover:bg-zinc-800/50 transition-all duration-300 active:scale-95"
            >
              View Our Work
              <Zap
                size={16}
                className="text-amber-400 group-hover:animate-pulse sm:w-4 sm:h-4"
              />
            </a>
          </div>

          {/* Features Pills */}
          <div
            className="animate-fade-in-up mt-8 sm:mt-12 flex flex-wrap gap-2 sm:gap-3 text-xs font-medium"
            style={{ opacity: 0, animationDelay: "1s" }}
          >
            {[
              { icon: <CheckCircle size={12} />, text: "Mobile-First" },
              { icon: <CheckCircle size={12} />, text: "SEO Optimized" },
              { icon: <CheckCircle size={12} />, text: "Lightning Fast" },
            ].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 sm:px-4 py-1.5 sm:py-2 text-amber-300 backdrop-blur-sm"
              >
                <span className="text-amber-400 sm:w-3.5 sm:h-3.5">
                  {item.icon}
                </span>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEM SECTION - ASYMMETRIC LAYOUT
      ====================================================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                Why 95% of websites{" "}
                <span className="gradient-text">fail miserably</span>
              </h2>
            </div>
            <div>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                Beautiful design is common. Websites that actually{" "}
                <span className="font-semibold text-amber-400">
                  convert browsers into buyers
                </span>{" "}
                are extraordinarily rare. Here's why most fail:
              </p>
            </div>
          </div>

          {/* Pain Points Grid */}
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Confusing UX",
                desc: "Beautiful interface, zero clarity. Users leave confused.",
                color: "from-red-500/20 to-orange-500/20",
              },
              {
                title: "Mobile Disaster",
                desc: "Desktop-first thinking kills 70% of your traffic instantly.",
                color: "from-orange-500/20 to-amber-500/20",
              },
              {
                title: "Weak CTA",
                desc: "Visitors scroll endlessly but never take action.",
                color: "from-amber-500/20 to-yellow-500/20",
              },
              {
                title: "Amateur Design",
                desc: "Template vibes destroy brand credibility subconsciously.",
                color: "from-yellow-500/20 to-amber-500/20",
              },
              {
                title: "Zero Trust Signals",
                desc: "No social proof, no credibility, no conversions.",
                color: "from-amber-500/20 to-orange-500/20",
              },
              {
                title: "Soulless Experience",
                desc: "Generic copy that fails to connect emotionally.",
                color: "from-orange-500/20 to-red-500/20",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-xl border border-zinc-800 bg-zinc-950/50 p-5 sm:p-6 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Gradient accent */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}
                />

                <div className="mb-3 h-0.5 sm:h-1 w-10 sm:w-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />

                <h3 className="mb-2 text-lg sm:text-xl font-bold text-white">
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
          SOLUTION SECTION - BOLD FEATURES
      ====================================================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 grain">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">
              Our approach is{" "}
              <span className="gradient-text">ruthlessly different</span>
            </h2>
            <p className="mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg text-zinc-400">
              Psychology-driven design. Performance-obsessed engineering. Zero
              compromises.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {[
              {
                icon: <Layers size={28} />,
                title: "Enterprise Architecture",
                desc: "Scalable systems built to handle growth from day one.",
              },
              {
                icon: <Rocket size={28} />,
                title: "Performance Obsessed",
                desc: "Sub-second load times. Butter-smooth interactions. Always.",
              },
              {
                icon: <ShieldCheck size={28} />,
                title: "Security First",
                desc: "Best practices baked into every line of code.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-8 transition-all duration-500 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/20"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-amber-500/20" />

                <div className="relative">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT TYPES - MAGAZINE STYLE
      ====================================================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="mb-12 sm:mb-16 font-display text-3xl sm:text-4xl md:text-5xl font-black">
            What we <span className="gradient-text">engineer</span>
          </h2>

          <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
            {[
              {
                icon: <Target size={24} />,
                title: "Conversion Machines",
                desc: "Business websites engineered to turn visitors into revenue.",
                accent: "amber",
              },
              {
                icon: <Code2 size={24} />,
                title: "Admin Dashboards",
                desc: "Data-rich interfaces with role-based access and real-time analytics.",
                accent: "orange",
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Full-Stack Platforms",
                desc: "Complex web applications with custom backends and databases.",
                accent: "yellow",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:border-${item.accent}-500/50 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div
                  className={`absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-${item.accent}-500/10 blur-3xl transition-all duration-700 group-hover:scale-150`}
                />

                <div className="relative">
                  <div className="mb-4 sm:mb-5 text-amber-400">{item.icon}</div>

                  <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-5 sm:mt-6 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-amber-400 group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                    Explore
                    <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECH STACK - DIAGONAL LAYOUT
      ====================================================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-zinc-950 via-amber-950/5 to-zinc-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-amber-500/10 to-orange-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">
              Built with{" "}
              <span className="gradient-text">battle-tested tech</span>
            </h2>
            <p className="mt-4 sm:mt-5 max-w-3xl mx-auto text-base sm:text-lg text-zinc-400">
              We use proven technologies that ensure{" "}
              <span className="font-semibold text-amber-400">performance</span>,{" "}
              <span className="font-semibold text-amber-400">scalability</span>,
              and{" "}
              <span className="font-semibold text-amber-400">
                maintainability
              </span>
              .
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5 grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Code2 size={24} />,
                title: "Clean Code",
                desc: "Maintainable & scalable architecture",
              },
              {
                icon: <Layers size={24} />,
                title: "Modern Stack",
                desc: "Next.js, React, Spring Boot & Node.js",
              },
              {
                icon: <Rocket size={24} />,
                title: "Blazing Fast",
                desc: "Optimized load times & smooth UX",
              },
              {
                icon: <ShieldCheck size={24} />,
                title: "Fort Knox Security",
                desc: "Enterprise-grade safety standards",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-lg sm:rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/50 hover:bg-zinc-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-amber-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  {item.icon}
                </div>

                <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg font-bold">
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
          TESTIMONIALS - MODERN CARDS
      ====================================================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="mb-12 sm:mb-16 text-center font-display text-3xl sm:text-4xl md:text-5xl font-black">
            Clients who <span className="gradient-text">trust us</span>
          </h2>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "The website transformed our business. Conversions up 340% in 3 months. Best investment ever.",
                name: "Rajesh Sharma",
                role: "CEO, TechCorp",
              },
              {
                quote:
                  "Premium quality, lightning-fast delivery. They understood our vision perfectly and executed flawlessly.",
                name: "Priya Patel",
                role: "Founder, StartupXYZ",
              },
              {
                quote:
                  "Finally a team that gets both design AND engineering. Our platform handles 100K+ users effortlessly.",
                name: "Amit Kumar",
                role: "CTO, ScaleSoft",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-xl sm:rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 sm:p-7 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div className="mb-3 sm:mb-4 flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      fill="#fbbf24"
                      className="text-amber-400 sm:w-4 sm:h-4"
                    />
                  ))}
                </div>

                <p className="mb-5 sm:mb-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  "{item.quote}"
                </p>

                <div className="border-t border-zinc-800 pt-4 sm:pt-5">
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {item.name}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-amber-400">
                    {item.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA - CINEMATIC
      ====================================================== */}
      <section className="relative py-20 sm:py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-zinc-950 to-orange-950/30" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-3xl animate-glow" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Ready to <span className="gradient-text">dominate your market</span>
            ?
          </h2>

          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-zinc-300">
            Let's build something extraordinary — a website that scales,
            performs, and prints money.
          </p>

          <a
            href="/contact"
            className="glow-border group mt-10 sm:mt-12 inline-flex items-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-zinc-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Start Your Project
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-2 sm:w-5 sm:h-5"
            />
          </a>

          <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-zinc-500">
            → Free consultation • No commitments • Just results
          </p>
        </div>
      </section>

      {/* =====================================================
          FAQ SCHEMA (HIDDEN)
      ====================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who is Mukesh Lilawat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mukesh Lilawat is a Full Stack Developer and Backend Engineer specializing in Spring Boot, REST APIs and scalable system architecture. He is the founder of MG Tech Studio.",
                },
              },
              {
                "@type": "Question",
                name: "Who is Gaurav Kumawat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Gaurav Kumawat is a Full Stack Developer and Frontend Specialist working with React, Next.js and Node.js. He is the founder of MG Tech Studio.",
                },
              },
              {
                "@type": "Question",
                name: "What is MG Tech Studio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MG Tech Studio is a full-stack web development studio building fast, scalable and production-ready web applications using modern technologies like Next.js, Spring Boot and Node.js.",
                },
              },
              {
                "@type": "Question",
                name: "Does MG Tech Studio provide full-stack development services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, MG Tech Studio provides complete full-stack development services including frontend, backend, APIs, databases and system architecture.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
