import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gaurav Kumawat | Full Stack Developer & Frontend Specialist",
  description:
    "Gaurav Kumawat is a Full Stack Developer and Frontend Specialist working with React, Next.js and Node.js. Co-founder of MG Tech Studio.",
  keywords: [
    "Gaurav Kumawat",
    "Gaurav Full Stack Developer",
    "Gaurav React Developer",
    "Gaurav Next.js Developer",
    "MG Tech Studio Co Founder",
  ],
  alternates: {
    canonical: "https://hightechmg.in/gaurav-kumawat",
  },
};

export default function GauravKumawatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-stone-50 to-stone-100 py-32">

      {/* ================= WRAPPER CARD ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[48px] bg-white/80 backdrop-blur border border-stone-200 shadow-xl">

          {/* subtle ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.12),transparent_55%)]" />

          <div className="relative z-10 px-10 py-20 md:px-20">

            {/* ================= HEADER ================= */}
            <div className="mb-20 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-semibold text-stone-900 leading-tight">
                Gaurav Kumawat
              </h1>
              <p className="mt-6 text-xl text-stone-600">
                Full Stack Developer · Founder
              </p>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="grid gap-16 md:grid-cols-2 items-center">

              {/* LEFT */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-stone-800">
                  About
                </h2>

                <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                  Gaurav Kumawat is a Full Stack Developer with a strong focus on
                  frontend engineering. He builds modern, high-performance web
                  interfaces using React, Next.js, and Node.js.
                </p>

                <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                  As a founder of <strong>MG Tech Studio</strong>, he works on
                  Full Stack architecture, user experience, and shipping
                  production-ready web systems with clarity and intent.
                </p>

                <div className="mt-10 flex gap-6">
                  <Link
                    href="https://github.com/Gaurav786kumawat"
                    target="_blank"
                    className="inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-base font-medium text-stone-700 hover:border-rose-300 hover:text-stone-900 transition"
                  >
                    GitHub
                  </Link>

                  <Link
                    href="https://portfolio.gauravkumawat.online/"
                    target="_blank"
                    className="inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-base font-medium text-stone-700 hover:border-rose-300 hover:text-stone-900 transition"
                  >
                    Portfolio
                  </Link>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative h-[460px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/gaurav.png"
                  alt="Gaurav Kumawat"
                  fill
                  className="object-cover"
                  priority
                />
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
            name: "Gaurav Kumawat",
            jobTitle: "Full Stack Developer",
            url: "https://hightechmg.in/gaurav-kumawat",
            sameAs: [
              "https://github.com/Gaurav786kumawat",
              "https://portfolio.gauravkumawat.online/",
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
