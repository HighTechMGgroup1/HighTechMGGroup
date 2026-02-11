import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);
const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="relative bg-zinc-950 text-white overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');

        .ft-display { font-family: 'Playfair Display', serif; }

        .ft-grad {
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #ea580c);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Animated top border */
        .ft-border-top {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(251,191,36,0.6) 30%, rgba(234,88,12,0.6) 70%, transparent);
        }

        /* Section heading */
        .ft-head {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #3f3f46;
          margin-bottom: 20px;
        }

        /* Nav links */
        .ft-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #71717a;
          font-size: 0.84rem;
          text-decoration: none;
          transition: color 0.2s, gap 0.2s;
          margin-bottom: 12px;
        }
        .ft-nav:hover { color: #fbbf24; gap: 12px; }
        .ft-nav-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: rgba(251,191,36,0.3);
          flex-shrink: 0;
          transition: background 0.2s, transform 0.2s;
        }
        .ft-nav:hover .ft-nav-dot { background: #fbbf24; transform: scale(1.6); }

        /* Social icon */
        .ft-social {
          width: 36px; height: 36px; border-radius: 9px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          display: inline-flex; align-items: center; justify-content: center;
          color: #52525b;
          text-decoration: none;
          transition: transform 0.22s, background 0.22s, border-color 0.22s, color 0.22s;
        }
        .ft-social:hover { transform: translateY(-3px); }
        .ft-s-li:hover { background: rgba(10,102,194,0.18);  border-color: rgba(10,102,194,0.45); color: #60a5fa; }
        .ft-s-ig:hover { background: rgba(236,72,153,0.18);  border-color: rgba(236,72,153,0.45); color: #f472b6; }
        .ft-s-tw:hover { background: rgba(200,200,210,0.18); border-color: rgba(200,200,210,0.45); color: #e4e4e7; }
        .ft-s-wa:hover { background: rgba(37,211,102,0.18);  border-color: rgba(37,211,102,0.45); color: #4ade80; }
        .ft-s-dc:hover { background: rgba(88,101,242,0.18);  border-color: rgba(88,101,242,0.45); color: #818cf8; }

        /* Founder card */
        .ft-founder {
          display: block;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.05);
          background: rgba(255,255,255,0.02);
          text-decoration: none;
          transition: border-color 0.22s, background 0.22s, transform 0.22s;
          margin-bottom: 8px;
        }
        .ft-founder:hover {
          border-color: rgba(251,191,36,0.22);
          background: rgba(251,191,36,0.04);
          transform: translateX(3px);
        }

        /* Contact row */
        .ft-contact {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          color: #71717a;
          font-size: 0.82rem;
        }
        .ft-contact:last-child { border-bottom: none; }
        .ft-contact-icon {
          width: 28px; height: 28px; border-radius: 7px; flex-shrink: 0;
          background: rgba(251,191,36,0.08);
          border: 1px solid rgba(251,191,36,0.13);
          display: flex; align-items: center; justify-content: center;
          color: #f59e0b;
        }

        /* CTA button */
        .ft-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #f59e0b, #ea580c);
          color: #1c1917; font-weight: 700; font-size: 0.8rem;
          padding: 10px 20px; border-radius: 10px;
          box-shadow: 0 4px 20px rgba(245,158,11,0.22);
          transition: transform 0.25s, box-shadow 0.25s;
          text-decoration: none; margin-top: 16px; display: inline-flex;
        }
        .ft-cta:hover { transform: scale(1.04); box-shadow: 0 6px 28px rgba(245,158,11,0.38); }
        .ft-cta:hover .ft-arrow { transform: translateX(3px); }
        .ft-arrow { transition: transform 0.25s; }

        /* Bottom bar */
        .ft-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(14px);
        }
        .ft-bot-link {
          font-size: 0.75rem; color: #52525b;
          text-decoration: none; transition: color 0.2s;
        }
        .ft-bot-link:hover { color: #fbbf24; }

        /* Logo badge */
        .ft-badge {
          display: inline-flex; align-items: center; gap: 5px;
          background: linear-gradient(135deg, #f59e0b, #ea580c);
          padding: 5px 12px 5px 9px; border-radius: 10px;
          color: #1c1917; font-weight: 900; font-size: 0.95rem;
          box-shadow: 0 3px 16px rgba(245,158,11,0.25);
        }

        /* Glow orbs */
        @keyframes ftGlow { 0%,100%{opacity:.25} 50%{opacity:.5} }
        .ft-orb { animation: ftGlow 5s ease-in-out infinite; }
      `}</style>

      {/* BG orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl ft-orb" />
        <div
          className="absolute -bottom-20 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/5 blur-3xl ft-orb"
          style={{ animationDelay: "2.5s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.009)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.009)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Top glow line */}
      <div className="ft-border-top" />

      {/* ═══════════════ MAIN GRID ═══════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* ── Col 1: Brand ── */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="ft-badge">
                <Sparkles size={12} />
                MG
              </span>
              <span className="ft-display text-xl font-black text-white">
                Tech
              </span>
            </div>

            <p className="text-sm leading-7 text-zinc-500">
              Building fast, scalable and premium web experiences with{" "}
              <span className="text-amber-400/80 font-medium">Next.js</span>,{" "}
              <span className="text-amber-400/80 font-medium">Spring Boot</span>{" "}
              &amp;{" "}
              <span className="text-amber-400/80 font-medium">Node.js</span>.
            </p>

            {/* Social icons */}
            <div className="mt-7">
              <p className="ft-head">Find us on</p>
              <div className="flex gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social ft-s-li"
                  title="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social ft-s-ig"
                  title="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social ft-s-tw"
                  title="Twitter"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://wa.me/916377072190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social ft-s-wa"
                  title="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-social ft-s-dc"
                  title="Discord"
                >
                  <DiscordIcon />
                </a>
              </div>
            </div>
          </div>

          {/* ── Col 2: Services ── */}
          <div className="md:col-span-1">
            <p className="ft-head">Services</p>
            {[
              "Web Development",
              "E-Commerce Solutions",
              "Admin Dashboards",
              "UI / UX Engineering",
            ].map((item) => (
              <Link key={item} href="/services" className="ft-nav">
                <span className="ft-nav-dot" />
                {item}
              </Link>
            ))}
          </div>

          {/* ── Col 3: Company ── */}
          <div className="md:col-span-1">
            <p className="ft-head">Company</p>
            {[
              { label: "About Us", href: "/about" },
              { label: "Projects", href: "/projects" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms & Conditions", href: "/terms" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="ft-nav">
                <span className="ft-nav-dot" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* ── Col 4: Founders ── */}
          <div className="md:col-span-1">
            <p className="ft-head">Founders</p>
            <Link href="/mukesh-lilawat" className="ft-founder">
              <span className="block text-sm font-semibold text-zinc-200">
                Mukesh Lilawat
              </span>
              <span className="block text-xs text-zinc-600 mt-0.5">
                Backend · Spring Boot
              </span>
            </Link>
            <Link href="/gaurav-kumawat" className="ft-founder">
              <span className="block text-sm font-semibold text-zinc-200">
                Gaurav Kumawat
              </span>
              <span className="block text-xs text-zinc-600 mt-0.5">
                Frontend · Next.js
              </span>
            </Link>
          </div>

          {/* ── Col 5: Contact ── */}
          <div className="md:col-span-1">
            <p className="ft-head">Contact Us</p>

            <div className="ft-contact">
              <div className="ft-contact-icon">
                <Mail size={11} />
              </div>
              hightechmg@gmail.com
            </div>
            <div className="ft-contact">
              <div className="ft-contact-icon">
                <Phone size={11} />
              </div>
              +91 6377072190
            </div>
            <div className="ft-contact">
              <div className="ft-contact-icon">
                <Phone size={11} />
              </div>
              +91 7878583600
            </div>
            <div className="ft-contact">
              <div className="ft-contact-icon">
                <MapPin size={11} />
              </div>
              Jaipur, Rajasthan, India
            </div>

            <a href="/contact" className="ft-cta">
              Get in Touch <ArrowRight size={13} className="ft-arrow" />
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════════ BOTTOM BAR ═══════════════ */}
      <div className="ft-bottom relative z-10">
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()}{" "}
            <span className="ft-grad font-semibold">MG Tech Studio</span>. All
            rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-bot-link"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-bot-link"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-bot-link"
            >
              Twitter
            </a>
            <a
              href="https://wa.me/916377072190"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-bot-link"
            >
              WhatsApp
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-bot-link"
            >
              Discord
            </a>
          </div>

          <p className="flex items-center gap-1.5 text-xs text-zinc-600">
            Crafted with <span className="text-amber-500">♥</span> by{" "}
            <span className="ft-grad font-semibold">ML &amp; GK</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
