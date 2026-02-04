import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Server,
  Database,
  Layers,
  Rocket,
  ShieldCheck,
} from "lucide-react";

/* ===================== SEO METADATA ===================== */
export const metadata: Metadata = {
  title: "Mukesh Lilawat & Gaurav Kumawat | Founders of MG Tech Studio",
  description:
    "MG Tech Studio is founded by Mukesh Lilawat (Spring Boot Backend Engineer) and Gaurav Kumawat (Full Stack Developer). We build scalable, production-ready web applications.",
  keywords: [
    "Mukesh Lilawat",
    "Mukesh Lilawat Spring Boot Developer",
    "Mukesh Lilawat Backend Engineer",
    "Gaurav Kumawat",
    "Gaurav Full Stack Developer",
    "MG Tech Studio founders",
    "MG Tech Studio About",
  ],
};
export default function AboutPage() {
  return (
    <main className="bg-[#F7F6F4] text-stone-800">

      {/* ================= ABOUT INTRO ================= */}
      <section className="py-28 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6 grid gap-20 lg:grid-cols-2 items-start">

          {/* LEFT — STATEMENT */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] font-semibold text-rose-600">
              About MG Tech Studio
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-stone-900">
              We build software
              <br />
              <span className="text-rose-600">
                that survives production.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg md:text-xl text-stone-600 leading-relaxed">
              MG Tech Studio is a full-stack development studio focused on
              <span className="text-stone-800 font-medium">
                {" "}scalable, production-ready systems
              </span>{" "}
              with clean architecture and long-term value.
            </p>
          </div>

          {/* RIGHT — PHILOSOPHY */}
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-stone-900">
              <span className="text-rose-600">
                Engineers first.
              </span>{" "}
              Everything else later.
            </h2>

            <p className="mt-6 text-lg md:text-xl text-stone-600 leading-relaxed">
              MG Tech Studio is built by engineers — not marketers.
            </p>

            <p className="mt-4 text-lg md:text-xl text-stone-600 leading-relaxed">
              We focus on clean code, scalable systems and software that performs
              reliably in real-world production environments.
            </p>

            <p className="mt-4 text-lg md:text-xl text-stone-600 leading-relaxed">
              Our expertise spans enterprise backend systems using{" "}
              <span className="font-medium text-stone-800">
                Spring Boot
              </span>{" "}
              and modern JavaScript stacks like{" "}
              <span className="font-medium text-stone-800">
                Node.js, React and Next.js
              </span>.
            </p>
          </div>

        </div>
      </section>


      {/* ================= FOUNDERS ================= */}
      <section className="py-32 bg-[#F7F6F4]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* Mukesh */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[440px] rounded-[28px] overflow-hidden shadow-lg">
              <Image
                src="/mukesh.webp"
                alt="Mukesh Lilawat Backend Engineer"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-stone-900">
                Mukesh Lilawat
              </h3>

              <p className="mt-2 text-sm uppercase tracking-widest text-rose-600">
                Backend Engineer · Spring Boot
              </p>

              <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                Mukesh builds backend systems that scale — APIs, authentication,
                databases and enterprise-grade architecture.
              </p>

              <div className="mt-6 flex gap-8 text-sm font-medium">
                <Link href="https://github.com/mukeshlilawat1" target="_blank">
                  GitHub →
                </Link>
                <a href="https://mukeshlilawat.online" target="_blank">
                  Portfolio →
                </a>
              </div>
            </div>
          </div>

          {/* Gaurav */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-stone-900">
                Gaurav Kumawat
              </h3>

              <p className="mt-2 text-sm uppercase tracking-widest text-rose-600">
                Full Stack Developer
              </p>

              <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                Gaurav focuses on frontend architecture, performance and
                end-to-end system delivery.
              </p>

              <div className="mt-6 flex gap-8 text-sm font-medium">
                <Link href="https://github.com/Gaurav786kumawat" target="_blank">
                  GitHub →
                </Link>
                <a href="https://portfolio.gauravkumawat.online/" target="_blank">
                  Portfolio →
                </a>
              </div>
            </div>

            <div className="relative h-[440px] rounded-[28px] overflow-hidden shadow-lg">
              <Image
                src="/gaurav.png"
                alt="Gaurav Kumawat Full Stack Developer"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900">
            What we actually do
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Code2, title: "Frontend Engineering" },
              { icon: Server, title: "Backend Systems" },
              { icon: Database, title: "Database Design" },
              { icon: Layers, title: "Architecture" },
              { icon: Rocket, title: "Performance" },
              { icon: ShieldCheck, title: "Security" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-stone-200 p-8"
              >
                <div className="mb-4 text-rose-600">
                  <item.icon size={24} />
                </div>
                <p className="font-medium text-stone-800">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= STRUCTURED DATA (FOUNDERS) ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MG Tech Studio",
            founders: [
              {
                "@type": "Person",
                name: "Mukesh Lilawat",
                jobTitle: "Backend Engineer",
                url: "https://mukeshlilawat.online",
              },
              {
                "@type": "Person",
                name: "Gaurav Kumawat",
                jobTitle: "Full Stack Developer",
                url: "https://portfolio.gauravkumawat.online/",
              },
            ],
          }),
        }}
      />

    </main>
  );
}
