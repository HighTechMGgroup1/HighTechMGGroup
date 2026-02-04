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
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-stone-50 text-stone-900">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-stone-100 via-rose-50 to-stone-200">
        {/* ambient blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-rose-300/30 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-stone-300/40 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-5 py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-6 py-2 text-sm font-medium backdrop-blur border border-stone-200">
            <Sparkles size={16} className="text-rose-500" />
            Premium Web Experiences
          </div>

          <h1 className="mt-10 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            Websites that feel
            <span className="block bg-gradient-to-r from-stone-800 via-rose-500 to-stone-800 bg-clip-text text-transparent">
              calm, premium & powerful
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-stone-600 leading-relaxed">
            We design and develop modern websites that don’t just look good —
            they build <span className="font-semibold text-stone-800">trust</span>,
            improve <span className="font-semibold text-stone-800">conversions</span>
            and elevate your brand presence.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-12 py-5 text-lg font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              Book Free Consultation
              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-stone-300 px-12 py-5 text-lg font-semibold text-stone-800 hover:bg-white transition"
            >
              View Our Work
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-stone-500">
            <span className="flex items-center gap-2">
              <CheckCircle size={16} className="text-rose-500" />
              Mobile-first design
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={16} className="text-rose-500" />
              SEO friendly
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={16} className="text-rose-500" />
              Fast delivery
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
    PROBLEM / PAIN SECTION — LUXURY VERSION
====================================================== */}
      <section className="relative py-16 bg-gradient-to-br from-stone-50 via-rose-50 to-stone-100">
        {/* Ambient blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-16 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
          <div className="absolute bottom-24 right-20 h-80 w-80 rounded-full bg-stone-300/40 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-5 text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900">
            Why most websites fail
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-stone-600 leading-relaxed">
            Beautiful websites are easy to find.
            Websites that actually{" "}
            <span className="font-semibold text-stone-800">convert visitors into clients</span>{" "}
            are extremely rare.
          </p>

          {/* Cards */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Confusing Experience",
                desc: "Looks attractive, but users don’t know what to do next.",
              },
              {
                title: "Slow on Mobile",
                desc: "Heavy pages kill attention and bounce users instantly.",
              },
              {
                title: "No Clear CTA",
                desc: "Visitors scroll, but never take action.",
              },
              {
                title: "Outdated Design",
                desc: "Old patterns reduce brand trust subconsciously.",
              },
              {
                title: "Low Credibility",
                desc: "Poor visuals & copy fail to build confidence.",
              },
              {
                title: "No Emotional Hook",
                desc: "Nothing makes users feel connected or understood.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
            group rounded-3xl
            bg-white/70 backdrop-blur
            border border-stone-200
            p-8 text-left
            shadow-sm
            hover:shadow-xl hover:-translate-y-1
            transition
          "
              >
                {/* Accent bar */}
                <div className="mb-5 h-1.5 w-12 rounded-full bg-gradient-to-r from-rose-400 to-pink-500" />

                <h3 className="text-xl font-semibold text-stone-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          SOLUTION / FEATURES
      ====================================================== */}
      <section className="py-28 bg-gradient-to-br from-stone-100 via-rose-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Our approach is different
            </h2>
            <p className="mt-5 text-lg text-stone-600">
              We mix design psychology, clean engineering and performance
              optimization.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: <Layers size={26} />,
                title: "Clean Structure",
                desc: "Scalable architecture that grows with your business.",
              },
              {
                icon: <Rocket size={26} />,
                title: "Fast Performance",
                desc: "Optimized for speed, SEO & smooth interactions.",
              },
              {
                icon: <ShieldCheck size={26} />,
                title: "Secure by Default",
                desc: "Best practices baked in from day one.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-rose-600 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT TYPES
      ====================================================== */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            What we can build for you
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Business Website",
                desc: "Professional, conversion-focused sites for brands.",
              },
              {
                title: "Admin Dashboards",
                desc: "Secure dashboards with analytics & role-based access.",
              },
              {
                title: "Full-Stack Platforms",
                desc: "Custom web apps with backend & databases.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-8 hover:bg-white transition"
              >
                <FolderKanban className="text-rose-500" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUILT WITH MODERN TECH ================= */}
      <section className="relative py-28 bg-gradient-to-br from-stone-100 via-rose-50 to-stone-100">
        {/* ambient blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-16 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />
          <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-stone-300/40 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900">
            Built With Modern Tech
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-stone-600">
            We use battle-tested tools to ensure{" "}
            <span className="font-semibold text-stone-800">performance</span>,{" "}
            <span className="font-semibold text-stone-800">scalability</span> and{" "}
            <span className="font-semibold text-stone-800">
              long-term maintainability
            </span>.
          </p>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                icon: <Code2 size={26} />,
                title: "Clean Code",
                desc: "Maintainable and scalable architecture.",
              },
              {
                icon: <Layers size={26} />,
                title: "Modern Stack",
                desc: "Next.js, React, Tailwind & TypeScript.",
              },
              {
                icon: <Rocket size={26} />,
                title: "High Performance",
                desc: "Fast load times & optimized UX.",
              },
              {
                icon: <ShieldCheck size={26} />,
                title: "Secure & Reliable",
                desc: "Best practices for safety & stability.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-stone-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-stone-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOCIAL PROOF
      ====================================================== */}
      <section className="py-28 bg-stone-100">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Clients love the experience
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex gap-1 text-rose-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-stone-600">
                  “The website feels premium and converts better than our
                  previous one. Totally worth it.”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative py-36 bg-gradient-to-br from-rose-100 via-stone-100 to-rose-200">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Ready to upgrade your website?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-stone-600">
            Let’s build something calm, premium and powerful — tailored exactly
            for your business.
          </p>

          <a
            href="/contact"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-16 py-6 text-xl font-semibold text-white shadow-xl hover:scale-105 transition"
          >
            Start Your Project
            <ArrowRight size={24} />
          </a>
        </div>
      </section>
      {/* ===================== FAQ SCHEMA ===================== */}
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
