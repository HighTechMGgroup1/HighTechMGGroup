import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mukesh Lilawat | Full Stack Developer & Backend Engineer",
  description:
    "Mukesh Lilawat is a Full Stack Developer and Backend Engineer specializing in Spring Boot, REST APIs, database design, and scalable system architecture. Founder of MG Tech Studio.",
  keywords: [
    "Mukesh Lilawat",
    "Mukesh Lilawat Full Stack Developer",
    "Mukesh Lilawat Backend Engineer",
    "Mukesh Lilawat Spring Boot Developer",
    "Mukesh Lilawat Software Engineer",
    "MG Tech Studio Founder",
  ],
  alternates: {
    canonical: "https://hightechmg.in/mukesh-lilawat",
  },
};

export default function MukeshLilawatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-stone-50 to-stone-100 py-32">

      {/* ================= WRAPPER CARD ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[48px] bg-white/80 backdrop-blur border border-stone-200 shadow-xl">

          {/* ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.12),transparent_55%)]" />

          <div className="relative z-10 px-10 py-20 md:px-20">

            {/* ================= HEADER ================= */}
            <div className="mb-20 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-semibold text-stone-900 leading-tight">
                Mukesh Lilawat
              </h1>
              <p className="mt-6 text-xl text-stone-600">
                Full Stack Developer · Backend Engineer · Founder
              </p>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="grid gap-16 md:grid-cols-2 items-center">

              {/* LEFT — IMAGE */}
              <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/mukesh.webp"
                  alt="Mukesh Lilawat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* RIGHT — CONTENT */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-stone-800">
                  About
                </h2>

                <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                  Mukesh Lilawat is a Full Stack Developer and Backend Engineer
                  with deep experience in building scalable, production-ready
                  systems. His core strengths include Spring Boot, REST APIs,
                  database architecture, authentication systems, and performance
                  optimization.
                </p>

                <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                  As the founder of <strong>MG Tech Studio</strong>, he focuses on
                  clean architecture, system reliability, and long-term
                  maintainability — building software meant to last.
                </p>

                <div className="mt-10 flex gap-6">
                  <Link
                    href="https://github.com/mukeshlilawat1"
                    target="_blank"
                    className="inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-base font-medium text-stone-700 hover:border-rose-300 hover:text-stone-900 transition"
                  >
                    GitHub
                  </Link>

                  <Link
                    href="https://mukeshlilawat.online"
                    target="_blank"
                    className="inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-base font-medium text-stone-700 hover:border-rose-300 hover:text-stone-900 transition"
                  >
                    Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STRUCTURED DATA ================= */}
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
            ],
            worksFor: {
              "@type": "Organization",
              name: "MG Tech Studio",
            },
          }),
        }}
      />
    </main>
  );
}
