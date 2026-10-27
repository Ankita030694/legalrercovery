import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import TimedPopupModal from "@/components/TimedPopupModal";
import { SITE_URL } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute:
      "Legal Recovery India – Recover Your Money Legally Online",
  },
  description:
    "Recover unpaid money, salary, refunds, deposits, invoices, and consumer claims legally through India's trusted legal platform. Start your claim online.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootKnowledgeGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LegalService", "Organization"],
        "@id": `${SITE_URL}/#organization`,
        name: "Legal Recovery India",
        alternateName: "LegalRecovery",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/favicon/favicon-96x96.png`,
        },
        description:
          "India's legal-tech money recovery and online legal notice platform. Advocate-drafted legal notices dispatched via Registered Speed Post, WhatsApp, and Email with Section 63 BSA evidentiary certification.",
        priceRange: "₹999 - ₹4,999",
        areaServed: {
          "@type": "Country",
          name: "India",
          sameAs: "https://en.wikipedia.org/wiki/India",
        },
        knowsAbout: [
          {
            "@type": "Thing",
            name: "Notice",
            sameAs: "https://en.wikipedia.org/wiki/Notice",
          },
          {
            "@type": "Thing",
            name: "Civil Procedure in India",
            sameAs: "https://en.wikipedia.org/wiki/Code_of_Civil_Procedure_(India)",
          },
          {
            "@type": "Thing",
            name: "Consumer Protection Act, 2019",
            sameAs: "https://en.wikipedia.org/wiki/Consumer_Protection_Act,_2019",
          },
          {
            "@type": "Thing",
            name: "Negotiable Instruments Act, 1881",
            sameAs: "https://en.wikipedia.org/wiki/Negotiable_Instruments_Act,_1881",
          },
          {
            "@type": "Thing",
            name: "Real Estate (Regulation and Development) Act, 2016",
            sameAs: "https://en.wikipedia.org/wiki/Real_Estate_(Regulation_and_Development)_Act,_2016",
          },
          {
            "@type": "Thing",
            name: "Micro, Small and Medium Enterprises Development Act, 2006",
            sameAs: "https://en.wikipedia.org/wiki/Micro,_Small_and_Medium_Enterprises_Development_Act,_2006",
          },
        ],
        makesOffer: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "999",
          highPrice: "4999",
          offerCount: "3",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Legal Recovery India",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F8F9FB] text-[#111827] overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootKnowledgeGraphSchema) }}
        />
        <Navbar />
        <main className="flex-1 min-h-0">
          {children}
        </main>
        <RelatedRecoveryGuides />
        <Footer />
        <TimedPopupModal />
        <Analytics />
      </body>
    </html>
  );
}
