import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Code2,
  ShoppingCart,
  LayoutDashboard,
  Palette,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-rose-50 to-white border-t border-stone-200">
      {/* ================= BACKGROUND BLOBS ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-stone-300/40 blur-3xl" />
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div
        className="
          max-w-7xl mx-auto px-6 py-28
          grid gap-14
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-5
          text-stone-700
        "
      >
        {/* ========== BRAND (FULL WIDTH ON MOBILE) ========== */}
        <div className="sm:col-span-2 md:col-span-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">
            <span className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-3 py-1 text-white shadow">
              <Sparkles size={16} />
              MG
            </span>{" "}
            Tech
          </h2>

          <p className="mt-6 text-sm leading-6 text-stone-600 max-w-sm">
            MG Tech Studio is a full-stack development studio focused on building
            calm, premium and high-performance web experiences using modern
            technologies.
          </p>
        </div>

        {/* ========== SERVICES ========== */}
        <div>
          <h3 className="text-xs font-semibold text-stone-900 uppercase tracking-widest">
            Services
          </h3>

          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Code2 size={16} className="text-rose-500" />
              <Link href="/services" className="hover:text-rose-500 transition">
                Web Development
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <ShoppingCart size={16} className="text-rose-500" />
              <Link href="/services" className="hover:text-rose-500 transition">
                E-Commerce Solutions
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <LayoutDashboard size={16} className="text-rose-500" />
              <Link href="/services" className="hover:text-rose-500 transition">
                Admin Dashboards
              </Link>
            </li>

            <li className="flex items-center gap-3">
              <Palette size={16} className="text-rose-500" />
              <Link href="/services" className="hover:text-rose-500 transition">
                UI / UX Engineering
              </Link>
            </li>
          </ul>
        </div>

        {/* ========== COMPANY ========== */}
        <div>
          <h3 className="text-xs font-semibold text-stone-900 uppercase tracking-widest">
            Company
          </h3>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="/about" className="hover:text-rose-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-rose-500 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-rose-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-rose-500 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-rose-500 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* ========== FOUNDERS ========== */}
        <div>
          <h3 className="text-xs font-semibold text-stone-900 uppercase tracking-widest">
            Founders
          </h3>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link
                href="/mukesh-lilawat"
                className="hover:text-rose-500 transition"
              >
                Mukesh Lilawat
              </Link>
            </li>
            <li>
              <Link
                href="/gaurav-kumawat"
                className="hover:text-rose-500 transition"
              >
                Gaurav Kumawat
              </Link>
            </li>
          </ul>
        </div>

        {/* ========== CONTACT (FULL WIDTH ON MOBILE) ========== */}
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="text-xs font-semibold text-stone-900 uppercase tracking-widest">
            Contact
          </h3>

          <ul className="mt-6 space-y-4 text-sm text-stone-600">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-rose-500" />
              hightechmg@gmail.com
            </li>

            <li className="flex items-center gap-3">
              <Phone size={16} className="text-rose-500" />
              +91 6377072190 · +91 7878583600
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-rose-500" />
              India
            </li>
          </ul>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 mt-8 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-md hover:scale-105 transition"
          >
            Get in Touch
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-stone-200 bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
          <p>
            © {new Date().getFullYear()} MG Tech Studio. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-rose-500 transition">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-rose-500 transition">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
