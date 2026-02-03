import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteMetadata } from "@/content/metadata";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  ...siteMetadata,
  icons: {
    icon: "/c-pec-assets/favicon.png",
    apple: "/c-pec-assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Crown Power & Equipment Company Limited",
              alternateName: "C-PEC",
              address: {
                "@type": "PostalAddress",
                streetAddress: "PLOT 128 OLD KIRA ROAD, BUKOTO FLOOR 1, OFFICE 3",
                addressLocality: "Kampala",
                addressCountry: "UG",
              },
              telephone: "+256757157479",
              email: "info@c-pec.com",
              url: "https://www.c-pec.com",
              areaServed: "Uganda",
              serviceType: "Power Equipment Supply and Installation",
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <Toaster />
        {/* Google Analytics placeholder - replace with your GA4 measurement ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
