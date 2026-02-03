import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.c-pec.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Crown Power & Equipment Company Limited (C-PEC) | Power Solutions for Uganda",
    template: "%s | Crown Power & Equipment Company Limited (C-PEC)",
  },
  description:
    "C-PEC supplies and installs generators, stabilizers, UPS systems, transformers, and changeover switches for institutions and factories across Uganda.",
  keywords: [
    "generators",
    "voltage stabilizers",
    "UPS systems",
    "transformers",
    "changeover switches",
    "power equipment",
    "Uganda",
    "power solutions",
    "backup power",
    "industrial power",
  ],
  authors: [{ name: "Crown Power & Equipment Company Limited" }],
  creator: "Crown Power & Equipment Company Limited",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Crown Power & Equipment Company Limited (C-PEC)",
    title: "Crown Power & Equipment Company Limited (C-PEC) | Power Solutions for Uganda",
    description:
      "C-PEC supplies and installs generators, stabilizers, UPS systems, transformers, and changeover switches for institutions and factories across Uganda.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "C-PEC - Power Solutions for Uganda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crown Power & Equipment Company Limited (C-PEC)",
    description:
      "Power continuity and voltage protection for institutions and factories across Uganda.",
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const pageMetadata: Record<string, Metadata> = {
  home: {
    title: "Home",
    description:
      "C-PEC supplies and installs generators, stabilizers, UPS systems, transformers, and changeover switches for institutions and factories across Uganda.",
  },
  products: {
    title: "Products",
    description:
      "Generators, stabilizers, UPS systems, transformers, and changeover switches for institutions and factories across Uganda.",
  },
  services: {
    title: "Services",
    description:
      "End-to-end power solutions: assessment, installation, and maintenance for institutions and factories across Uganda.",
  },
  about: {
    title: "About Us",
    description:
      "C-PEC supports factories, institutions, and growing businesses with power solutions across Uganda.",
  },
  contact: {
    title: "Contact",
    description: "Get in touch with C-PEC for power solutions and equipment quotes.",
  },
  "request-quote": {
    title: "Request a Quote",
    description: "Request a quote for generators, stabilizers, UPS systems, transformers, and changeover switches.",
  },
};
