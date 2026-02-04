import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import RouteTracker from "@/components/analytics/RouteTracker";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ===================== FONTS ===================== */

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: true,
});

/* ===================== VIEWPORT ===================== */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#4f46e5",
};

/* ===================== METADATA ===================== */

export const metadata: Metadata = {
  metadataBase: new URL("https://hightechmg.in"),

  title: {
    default: "MG Tech Studio | Full Stack Developers",
    template: "%s | MG Tech Studio",
  },

  description:
    "MG Tech Studio is a full-stack web development studio founded by Mukesh Lilawat and Gaurav. We build fast, scalable and production-ready web applications using Next.js, Spring Boot, Node.js and modern system architecture.",

  keywords: [
    "MG Tech Studio",
    "MG Tech",

    "Mukesh Lilawat",
    "Mukesh Lilawat Full Stack Developer",
    "Mukesh Lilawat Spring Boot Developer",
    "Mukesh Lilawat Backend Engineer",
    "Mukesh Lilawat Software Engineer",

    "Gaurav Kumawat",
    "Gaurav Full Stack Developer",
    "Gaurav Node.js Developer",
    "Gaurav React Developer",
    "Gaurav Next.js Developer",
    "Gaurav Software Engineer",

    "Full Stack Development",
    "Web Development Company India",
    "Next.js Developer India",
    "Spring Boot Developer India",
    "Node.js Developer India",
    "Admin Dashboard Development",
    "Custom Web Application Development",
    "Modern Web Applications",
    "High Performance Websites",
  ],

  authors: [
    { name: "Mukesh Lilawat", url: "https://mukeshlilawat.online" },
    { name: "Gaurav Kumawat", url: "https://portfolio.gauravkumawat.online" },
  ],

  creator: "MG Tech Studio",
  publisher: "MG Tech Studio",
  applicationName: "MG Tech Studio",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  /* ===================== VERIFICATION TAGS (ADDED) ===================== */

  verification: {
    google: "googleea250657558e647f",

    other: {
      bing: "BING_VERIFICATION_CODE_HERE",
    },

    yandex: "YANDEX_VERIFICATION_CODE_HERE",
  },

  /* ===================== FAVICON / LOGO ===================== */

  icons: {
    icon: [
      { url: "/MG.ico" },
      { url: "/MG.png", sizes: "32x32", type: "image/png" },
      { url: "/MG-16X16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://mgtechstudio.com",
  },

  openGraph: {
    title: "MG Tech Studio | Full Stack Developers",
    description:
      "Founded by Mukesh Lilawat and Gaurav, MG Tech Studio builds scalable full-stack applications using Next.js, Spring Boot and Node.js.",
    url: "https://mgtechstudio.online",
    siteName: "MG Tech Studio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MG Tech Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MG Tech Studio | Full Stack Developers",
    description:
      "Full-stack development studio by Mukesh Lilawat & Gaurav. Experts in scalable backend systems and modern frontend architectures.",
    creator: "@mgtechstudio",
  },

  category: "technology",
};

/* ===================== ROOT LAYOUT ===================== */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-zinc-50
          text-zinc-900
          min-h-screen
          flex
          flex-col
        `}
      >
        <Navbar />

        <div className="h-20" />

        <main className="flex-1">{children}</main>

        <Footer />

        {/* ================= STRUCTURED DATA ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MG Tech Studio",
              url: "https://hightechmg.in",
              founders: [
                {
                  "@type": "Person",
                  name: "Mukesh Lilawat",
                  jobTitle: "Full Stack Developer & Backend Engineer",
                  url: "https://mukeshlilawat.online",
                },
                {
                  "@type": "Person",
                  name: "Gaurav Kumawat",
                  jobTitle: "Full Stack Developer",
                  url: "https://portfolio.gauravkumawat.online",
                },
              ],
              sameAs: [
                "https://github.com/mukeshlilawat1",
                "https://github.com/gaurav786kumawat",
                "https://mukeshlilawat.online",
                "https://portfolio.gauravkumawat.online",
              ],
            }),
          }}
        />
        {/* ✅ GOOGLE ANALYTICS — MUST BE INSIDE BODY */}
        <GoogleAnalytics />
        <RouteTracker />
      </body>
    </html>
  );
}
