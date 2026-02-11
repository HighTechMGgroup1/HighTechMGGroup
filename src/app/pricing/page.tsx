import { Check, X, ArrowRight, Sparkles, Star, Zap } from "lucide-react";

export default function PricingPage() {
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
          PRICING HERO SECTION
      ====================================================== */}
      <section className="relative min-h-[70vh] flex items-center grain">
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
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2 items-center">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium backdrop-blur-sm mb-6">
                <Sparkles
                  size={12}
                  className="text-amber-400 sm:w-3.5 sm:h-3.5"
                />
                <span className="text-amber-300">Transparent Pricing</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Simple pricing.{" "}
                <span className="gradient-text">Serious engineering.</span>
              </h1>

              <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-xl">
                We price based on{" "}
                <span className="font-semibold text-amber-400">scope</span>,{" "}
                <span className="font-semibold text-amber-400">
                  system complexity
                </span>
                , and{" "}
                <span className="font-semibold text-amber-400">
                  long-term maintainability
                </span>{" "}
                — not templates or shortcuts.
              </p>
            </div>

            {/* RIGHT - How Pricing Works Card */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/20">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-amber-500/20" />

              <div className="relative">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
                  How pricing works
                </h2>

                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-zinc-300">
                  <li className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="mt-0.5 text-amber-400 flex-shrink-0"
                    />
                    <span>Clear scope before development starts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="mt-0.5 text-amber-400 flex-shrink-0"
                    />
                    <span>No hidden costs or surprise upgrades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="mt-0.5 text-amber-400 flex-shrink-0"
                    />
                    <span>Flexible plans as your product grows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="mt-0.5 text-amber-400 flex-shrink-0"
                    />
                    <span>Engineering-first decision making</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRICING CARDS SECTION
      ====================================================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black">
              Choose your <span className="gradient-text">growth path</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
              From simple presence to complex platforms — we scale with your
              vision.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {/* BASIC */}
            <PricingCard
              title="Basic"
              price="₹5,000"
              desc="For simple business presence."
              badge={false}
            >
              <Feature ok>Responsive website</Feature>
              <Feature ok>WhatsApp enquiry button</Feature>
              <Feature ok>Static pages</Feature>
              <Feature ok>Mobile-friendly UI</Feature>
              <Feature>No admin panel</Feature>
              <Feature>No backend / database</Feature>
            </PricingCard>

            {/* STANDARD */}
            <PricingCard
              title="Standard"
              price="₹15k – ₹25k"
              desc="Structured & professional websites."
              badge={false}
            >
              <Feature ok>Next.js frontend</Feature>
              <Feature ok>Multiple pages & sections</Feature>
              <Feature ok>WhatsApp enquiry flow</Feature>
              <Feature ok>Improved UI / UX</Feature>
              <Feature ok>Basic SEO setup</Feature>
              <Feature>No complex admin dashboard</Feature>
            </PricingCard>

            {/* PRO - Featured */}
            <div className="relative rounded-xl sm:rounded-2xl border-2 border-amber-500 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-8 md:p-10 shadow-2xl shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
              {/* Recommended Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-1.5 text-xs font-bold text-zinc-950 shadow-lg">
                <Star size={12} fill="currentColor" />
                RECOMMENDED
              </div>

              {/* Animated glow */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="relative mt-4">
                <h3 className="text-2xl sm:text-3xl font-black">Pro</h3>
                <p className="mt-2 text-sm sm:text-base text-zinc-400">
                  Serious systems for growing businesses.
                </p>

                <div className="mt-6">
                  <span className="text-4xl sm:text-5xl font-black gradient-text">
                    ₹40k+
                  </span>
                </div>

                <ul className="mt-8 sm:mt-10 space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <Feature ok>Full-stack web application</Feature>
                  <Feature ok>Backend APIs & database</Feature>
                  <Feature ok>Admin dashboard</Feature>
                  <Feature ok>Auth & role-based access</Feature>
                  <Feature ok>Scalable architecture</Feature>
                  <Feature ok>Deployment & production setup</Feature>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRO DETAILS SECTION
      ====================================================== */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 grain">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-yellow-500/10 to-orange-500/10 blur-3xl animate-glow" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 sm:mb-16 md:mb-20">
            What <span className="gradient-text">Pro</span> really includes
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <DetailCard icon={<Zap size={28} />} title="Architecture">
              Clean backend structure, scalable design patterns, and long-term
              maintainability that grows with your business.
            </DetailCard>

            <DetailCard icon={<Check size={28} />} title="Security & Control">
              Secure authentication, authorization, admin dashboard, and
              role-based access control for enterprise peace of mind.
            </DetailCard>

            <DetailCard
              icon={<ArrowRight size={28} />}
              title="Performance & Scale"
            >
              Optimized APIs, database performance, monitoring, and future
              extensibility built into every layer.
            </DetailCard>
          </div>
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
                Not sure which plan{" "}
                <span className="gradient-text">fits your vision</span>?
              </h2>

              <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
                Share your requirements — we'll recommend the right solution
                with clear scope, realistic timelines, and transparent pricing.
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

/* ================= REUSABLE COMPONENTS ================= */

function PricingCard({ title, price, desc, children, badge }: any) {
  return (
    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10">
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-amber-500/20" />

      <div className="relative">
        <h3 className="text-2xl sm:text-3xl font-black">{title}</h3>
        <p className="mt-2 text-sm sm:text-base text-zinc-400">{desc}</p>

        <div className="mt-6">
          <span className="text-3xl sm:text-4xl font-black text-white">
            {price}
          </span>
        </div>

        <ul className="mt-8 sm:mt-10 space-y-3 sm:space-y-4 text-sm sm:text-base">
          {children}
        </ul>
      </div>
    </div>
  );
}

function DetailCard({ icon, title, children }: any) {
  return (
    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-8 md:p-10 text-center backdrop-blur-sm transition-all duration-500 hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/20">
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-amber-500/20" />

      <div className="relative">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 text-amber-400 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-4">{title}</h3>

        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

function Feature({ children, ok = false }: any) {
  return (
    <li className="flex items-start gap-3 text-zinc-300">
      {ok ? (
        <Check className="mt-0.5 text-amber-400 flex-shrink-0" size={18} />
      ) : (
        <X className="mt-0.5 text-zinc-600 flex-shrink-0" size={18} />
      )}
      <span>{children}</span>
    </li>
  );
}
