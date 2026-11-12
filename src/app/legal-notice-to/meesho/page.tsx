import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import MeeshoNoticeCTA from "./MeeshoNoticeCTA";
import MeeshoDeadlineCalculator from "./MeeshoDeadlineCalculator";

export const metadata: Metadata = {
  title: "Meesho Refund Not Received: Legal Steps That Work (2026)",
  description:
    "Meesho refund shows successful but never arrived, or wrong item delivered? Seller vs Meesho liability, deadlines and a legal notice route.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/meesho`,
  },
  openGraph: {
    title: "Meesho Refund Not Received? Legal Remedies & Escalation Steps",
    description:
      "Enforce your consumer rights against Meesho Limited and registered merchants for stuck refunds and wrong deliveries. Grievance officer contacts and legal notice path.",
    url: `${SITE_URL}/legal-notice-to/meesho`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Meesho Refund Not Received? Legal Remedies & Escalation Steps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meesho Refund Not Received? Legal Remedies & Escalation Steps",
    description:
      "Enforce your consumer rights against Meesho Limited and registered merchants for stuck refunds and wrong deliveries. Grievance officer contacts and legal notice path.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const BASE_PRICE = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Meesho Refund Successful but Not in Your Account? Your Legal Options",
  "description":
    "Meesho refund shows successful but never arrived, or wrong item delivered? Seller vs Meesho liability, deadlines and a legal notice route.",
  "inLanguage": "en-IN",
  "mainEntityOfPage": `${SITE_URL}/legal-notice-to/meesho`,
  "datePublished": "2026-11-02T10:00:00+05:30",
  "dateModified": "2026-11-02T10:00:00+05:30",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": `${SITE_URL}/authors/anuj-anand-malik`,
  },
  "publisher": {
    "@id": `${SITE_URL}/#organization`,
  },
  "about": {
    "@type": "Organization",
    "name": "Meesho",
    "alternateName": [
      "Meesho Limited",
      "Fashnear Technologies Private Limited"
    ],
    "sameAs": "https://en.wikipedia.org/wiki/Meesho",
  },
  "citation": [
    "https://consumerhelpline.gov.in/",
    "https://e-jagriti.gov.in/",
    "https://www.livelaw.in/consumer-cases/government-amends-e-commerce-rules-to-strengthen-consumer-protection-550184",
    "https://consumercourt.net/",
  ],
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE_URL,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Refunds & Consumer Complaints",
      "item": `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Legal Notice to Meesho",
      "item": `${SITE_URL}/legal-notice-to/meesho`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should I do if Meesho shows refund successful but money is not in my bank account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Demand the 12-digit UTR from Meesho support instead of in-app screenshots. If your bank confirms zero credit, email Meesho's Grievance Officer giving 48 hours to furnish settlement proof or re-initiate payment.",
      },
    },
    {
      "@type": "Question",
      "name": "Can a Meesho seller refuse a refund after the delivery agent picked up the return?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Once courier personnel accept the return, custody passes to the marketplace. Under Rule 5(6) of the E-Commerce Rules 2020, Meesho bears fallback liability and cannot withhold your refund over seller disputes.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does a Cash on Delivery (COD) refund take to reflect in my bank account on Meesho?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After adding your bank account or UPI VPA in the app, COD refunds clear within 3 to 7 working days via NEFT or IMPS. Delays beyond 7 business days without a UTR constitute deficiency in service.",
      },
    },
    {
      "@type": "Question",
      "name": "What happens if Meesho claims I returned a used or wrong item?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The burden of proof rests on the marketplace to prove courier tampering. Preserve unboxing media, courier receipts, and weight slips to refute rejection under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I send a legal notice to Meesho without hiring an expensive local lawyer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. LegalRecovery drafts advocate legal demand notices with statutory 15-day compliance terms for a flat fee of ₹999, served by email and WhatsApp to Meesho Limited in Bengaluru. Speed Post is optional at ₹450 per party.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the fee for filing a consumer complaint against Meesho on e-Jagriti?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consumer claims up to ₹5,00,000 carry zero court fees on e-Jagriti. You can file online without traveling, and consumers may present their own case without hiring local counsel.",
      },
    },
    {
      "@type": "Question",
      "name": "Meesho ko legal notice kaise bheje aur iska statutory time period kitna hota hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meesho Limited ko verified advocate ke madhyam se Speed Post aur email par notice bheja jata hai jisme 15 dino ka demand period hota hai. Non-compliance par e-Jagriti par mukadma kiya jata hai.",
      },
    },
  ],
};

// TODO(reviewer): src/data/reviewers.ts is missing in this codebase. Omitted reviewer box per Section 7 guidelines.

export default function MeeshoRefundLegalNoticePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[#FDFBF7] text-slate-900 antialiased selection:bg-red-500 selection:text-white">
        {/* Navigation Breadcrumbs */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              {
                label: "Refunds & Consumer Complaints",
                href: "/services/refunds-and-consumer-complaints",
              },
              { label: "Legal Notice to Meesho", href: "/legal-notice-to/meesho" },
            ]}
          />
        </div>

        {/* Hero Section with Conversational Subtitle (Archetype B5) */}
        <section
          aria-labelledby="meesho-hero-heading"
          className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 border border-red-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            E-Commerce Consumer Rights · 2026 Statutory Framework
          </div>

          <h1
            id="meesho-hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
          >
            Meesho Refund Successful but Not in Your Account? Your Legal Options
          </h1>

          <p className="text-base sm:text-lg font-medium text-slate-700 italic border-l-4 border-[#DC2626] pl-4 py-1 mb-6 bg-red-50/40 rounded-r-lg">
            &quot;Why does Meesho show &apos;Refund Processed&apos; while my bank account balance hasn&apos;t changed, and what can I do before my return window closes?&quot;
          </p>

          {/* 40-60 Word Answer Box (Mandatory Block) */}
          <div
            role="region"
            aria-label="Direct Legal Answer"
            className="bg-white border-2 border-red-200/80 rounded-2xl p-5 sm:p-6 shadow-sm mb-6"
          >
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#DC2626] mb-2">
              <span className="text-sm">⚖️</span> 50-Word Direct Legal Answer
            </div>
            <p className="text-slate-800 font-medium text-sm sm:text-base leading-relaxed">
              Under Rules 4(4) and 5(3) of the Consumer Protection (E-Commerce) Rules 2020, Meesho must acknowledge complaints within 48 hours and resolve refunds within 30 days. When in-app refunds show successful without credit, demand the 12-digit bank UTR number. Continued delay warrants an advocate legal notice holding Meesho and seller jointly liable.
            </p>
          </div>

          {/* Mini Statutory Facts Table (Archetype B5) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm mb-6 overflow-x-auto">
            <h2 className="text-base font-black text-slate-900 uppercase tracking-wider mb-4 text-center sm:text-left">
              Key Statutory Facts &amp; Legal Thresholds (Meesho Disputes)
            </h2>
            <table className="w-full text-left text-xs sm:text-sm text-slate-700 border-collapse">
              <caption className="sr-only">Statutory legal details for Meesho consumer disputes</caption>
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 font-bold uppercase text-[11px] tracking-wider">
                  <th scope="col" className="p-2.5 sm:p-3">Statutory Element</th>
                  <th scope="col" className="p-2.5 sm:p-3">Legal Parameter</th>
                  <th scope="col" className="p-2.5 sm:p-3">Statutory Basis / Authority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-xs sm:text-sm">
                <tr>
                  <td className="p-2.5 sm:p-3 font-semibold text-slate-900">Entity Liable</td>
                  <td className="p-2.5 sm:p-3">Meesho Limited &amp; Registered Merchant</td>
                  <td className="p-2.5 sm:p-3">Rule 5(6) E-Commerce Rules (Fallback Liability)</td>
                </tr>
                <tr>
                  <td className="p-2.5 sm:p-3 font-semibold text-slate-900">Grievance Acknowledgement</td>
                  <td className="p-2.5 sm:p-3 text-red-700 font-bold">Within 48 Hours Mandatory</td>
                  <td className="p-2.5 sm:p-3">Rule 4(4), E-Commerce Rules, 2020</td>
                </tr>
                <tr>
                  <td className="p-2.5 sm:p-3 font-semibold text-slate-900">Dispute Redressal Window</td>
                  <td className="p-2.5 sm:p-3">Maximum 30 Days (One Month)</td>
                  <td className="p-2.5 sm:p-3">Rule 5(3), E-Commerce Rules, 2020</td>
                </tr>
                <tr>
                  <td className="p-2.5 sm:p-3 font-semibold text-slate-900">Banking Turnaround Time</td>
                  <td className="p-2.5 sm:p-3">UPI: 24–48h · Card: 3–5d · COD: 5–7d</td>
                  <td className="p-2.5 sm:p-3">RBI Turnaround Time (TAT) Framework</td>
                </tr>
                <tr>
                  <td className="p-2.5 sm:p-3 font-semibold text-slate-900">Adjudication Forum</td>
                  <td className="p-2.5 sm:p-3">District Commission (Claims up to ₹50 Lakh)</td>
                  <td className="p-2.5 sm:p-3">Section 35 CPA 2019 via e-Jagriti (₹0 Fee up to ₹5 Lakh)</td>
                </tr>
                <tr>
                  <td className="p-2.5 sm:p-3 font-semibold text-slate-900">Advocate Notice Fee</td>
                  <td className="p-2.5 sm:p-3 text-[#DC2626] font-bold">₹{BASE_PRICE} Flat Price</td>
                  <td className="p-2.5 sm:p-3">Drafting + Email &amp; WhatsApp Dispatch</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Interactive Client Island: Deadline Calculator Lite (Archetype B5) */}
          <div className="mb-8">
            <MeeshoDeadlineCalculator />
          </div>

          {/* Bespoke Hand-Authored SVG Flowchart (Archetype Artefact 1) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626] block mb-1">
                Visual Escalation Protocol
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Meesho Stuck Refund &amp; Wrong Item Resolution Pathway
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                From unhelpful customer-care bot loops to a verified bank credit or District Commission court order.
              </p>
            </div>

            <div className="w-full overflow-x-auto py-2">
              <svg
                viewBox="0 0 900 240"
                className="w-full min-w-[700px] h-auto select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Escalation flowchart from Meesho app issue to consumer court"
              >
                {/* Stage 1 */}
                <rect x="10" y="20" width="155" height="190" rx="12" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
                <circle cx="87" cy="50" r="16" fill="#DC2626" />
                <text x="87" y="55" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>
                <text x="87" y="85" fill="#1E293B" fontSize="13" fontWeight="bold" textAnchor="middle">Meesho App Failure</text>
                <text x="87" y="110" fill="#64748B" fontSize="11" textAnchor="middle">Refund marked &apos;Done&apos;</text>
                <text x="87" y="128" fill="#64748B" fontSize="11" textAnchor="middle">Wrong item delivered</text>
                <text x="87" y="146" fill="#64748B" fontSize="11" textAnchor="middle">Bot marks ticket closed</text>
                <rect x="25" y="165" width="125" height="26" rx="6" fill="#FEE2E2" />
                <text x="87" y="182" fill="#991B1B" fontSize="10" fontWeight="bold" textAnchor="middle">Day 0 to Day 3</text>

                {/* Arrow 1 */}
                <path d="M170 115 H195" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />

                {/* Stage 2 */}
                <rect x="195" y="20" width="155" height="190" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                <circle cx="272" cy="50" r="16" fill="#475569" />
                <text x="272" y="55" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>
                <text x="272" y="85" fill="#1E293B" fontSize="13" fontWeight="bold" textAnchor="middle">Bank &amp; UTR Audit</text>
                <text x="272" y="110" fill="#64748B" fontSize="11" textAnchor="middle">Demand 12-digit UTR</text>
                <text x="272" y="128" fill="#64748B" fontSize="11" textAnchor="middle">Branch verifies zero credit</text>
                <text x="272" y="146" fill="#64748B" fontSize="11" textAnchor="middle">Identify nodal pool hang</text>
                <rect x="210" y="165" width="125" height="26" rx="6" fill="#E2E8F0" />
                <text x="272" y="182" fill="#334155" fontSize="10" fontWeight="bold" textAnchor="middle">Day 3 to Day 7</text>

                {/* Arrow 2 */}
                <path d="M355 115 H380" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />

                {/* Stage 3 */}
                <rect x="380" y="20" width="155" height="190" rx="12" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
                <circle cx="457" cy="50" r="16" fill="#2563EB" />
                <text x="457" y="55" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
                <text x="457" y="85" fill="#1E293B" fontSize="13" fontWeight="bold" textAnchor="middle">Grievance Officer</text>
                <text x="457" y="110" fill="#64748B" fontSize="11" textAnchor="middle">Email Murthy S.N.</text>
                <text x="457" y="128" fill="#64748B" fontSize="11" textAnchor="middle">legalsupport@meesho</text>
                <text x="457" y="146" fill="#64748B" fontSize="11" textAnchor="middle">48h statutory clock</text>
                <rect x="395" y="165" width="125" height="26" rx="6" fill="#DBEAFE" />
                <text x="457" y="182" fill="#1E40AF" fontSize="10" fontWeight="bold" textAnchor="middle">Rule 4(4) 48h Clock</text>

                {/* Arrow 3 */}
                <path d="M540 115 H565" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />

                {/* Stage 4 */}
                <rect x="565" y="20" width="155" height="190" rx="12" fill="#FEFCE8" stroke="#FDE047" strokeWidth="2" />
                <circle cx="642" cy="50" r="16" fill="#CA8A04" />
                <text x="642" y="55" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>
                <text x="642" y="85" fill="#1E293B" fontSize="13" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                <text x="642" y="110" fill="#64748B" fontSize="11" textAnchor="middle">Speed Post + Email</text>
                <text x="642" y="128" fill="#64748B" fontSize="11" textAnchor="middle">Served to Meesho &amp; Seller</text>
                <text x="642" y="146" fill="#64748B" fontSize="11" textAnchor="middle">NCH 1915 docket filed</text>
                <rect x="580" y="165" width="125" height="26" rx="6" fill="#FEF08A" />
                <text x="642" y="182" fill="#854D0E" fontSize="10" fontWeight="bold" textAnchor="middle">15-Day Cure Window</text>

                {/* Arrow 4 */}
                <path d="M725 115 H750" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />

                {/* Stage 5 */}
                <rect x="750" y="20" width="140" height="190" rx="12" fill="#F3E8FF" stroke="#D8B4FE" strokeWidth="2" />
                <circle cx="820" cy="50" r="16" fill="#7E22CE" />
                <text x="820" y="55" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">5</text>
                <text x="820" y="85" fill="#1E293B" fontSize="13" fontWeight="bold" textAnchor="middle">e-Jagriti Court</text>
                <text x="820" y="110" fill="#64748B" fontSize="11" textAnchor="middle">District Commission</text>
                <text x="820" y="128" fill="#64748B" fontSize="11" textAnchor="middle">Claim refund + ₹15k</text>
                <text x="820" y="146" fill="#64748B" fontSize="11" textAnchor="middle">Litigation costs awarded</text>
                <rect x="760" y="165" width="120" height="26" rx="6" fill="#E9D5FF" />
                <text x="820" y="182" fill="#6B21A8" fontSize="10" fontWeight="bold" textAnchor="middle">Binding Court Order</text>
              </svg>
            </div>
            <p className="text-[11px] text-slate-500 text-center mt-2">
              Diagram: Five-stage statutory escalation hierarchy from initial app dispute through to e-Jagriti District Consumer Commission.
            </p>
          </div>
        </section>

        {/* Conversational Q&A Sequence: 11 Distinct H2 Sections (Archetype B5) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6 pb-12">
          {/* Section 1 */}
          <section
            id="why-refund-stuck"
            aria-labelledby="h2-why-refund-stuck"
            className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
              Technical &amp; Settlement Architecture
            </div>
            <h2
              id="h2-why-refund-stuck"
              className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mb-2.5"
            >
              Why Meesho Shows 'Refund Successful' but Bank Is Empty
            </h2>
            <p className="text-slate-800 text-sm leading-relaxed font-semibold mb-2 text-justify">
              Meesho updates its internal interface to &quot;Refund Successful&quot; as soon as its payment gateway transmits an automated clearing instruction, well before funds actually credit your bank account. If the resulting 12-digit Unique Transaction Reference (UTR) is missing or unrecognized by your bank&apos;s Core Banking System, the money remains trapped in an intermediary nodal escrow pool.
            </p>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
              As a reseller marketplace, Meesho routes payouts through gateways like Cashfree and Razorpay. Premature app webhooks often confirm refunds while beneficiary banks reject transfers due to name mismatches or timeouts. For Cash on Delivery orders, manually typed IFSC or account numbers frequently fail validation silently. Learn more in our guide on <Link href="/refund-shows-successful-but-not-received" className="text-[#DC2626] font-bold hover:underline">refunds showing successful but not received</Link>.
            </p>
          </section>

          {/* Section 2 */}
          <section
            id="refund-timelines"
            aria-labelledby="h2-refund-timelines"
            className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
              Statutory Turnaround Limits
            </div>
            <h2
              id="h2-refund-timelines"
              className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mb-2.5"
            >
              How Long Does Meesho Actually Take to Credit a Refund?
            </h2>
            <p className="text-slate-800 text-sm leading-relaxed font-semibold mb-2 text-justify">
              Meesho refunds clear depending on your payment channel: UPI takes 24 to 48 hours, cards take 3 to 5 banking days, and Cash on Delivery takes 5 to 7 business days following bank account linkage. Any delay exceeding seven business days without an authentic UTR constitutes deficiency in service under Section 2(11) of the Consumer Protection Act, 2019.
            </p>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
              Under RBI circular DPSS.CO.PD No.629/02.01.014/2019-20 on Turnaround Time (TAT) harmonisation, failed digital debits must auto-reverse within T + 1 to T + 5 days. Beyond this window, consumers are legally entitled to claim compensatory interest alongside the principal amount. Compare these timelines with our guide on <Link href="/flipkart-return-refund-complaint" className="text-[#DC2626] font-bold hover:underline">Flipkart refund complaint timelines</Link>.
            </p>
          </section>

          {/* Section 3 */}
          <section
            id="wrong-product-empty-box"
            aria-labelledby="h2-wrong-product-empty-box"
            className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
              Defective Goods &amp; Evidence Safeguards
            </div>
            <h2
              id="h2-wrong-product-empty-box"
              className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mb-2.5"
            >
              What to Do If Meesho Delivered Wrong Product or Empty Box
            </h2>
            <p className="text-slate-800 text-sm leading-relaxed font-semibold mb-2 text-justify">
              When Meesho delivers an incorrect item, counterfeit apparel, or an empty parcel, capture timestamped unboxing photographs immediately and raise a return within 7 days. Delivering goods that differ materially from catalog representations constitutes an Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019.
            </p>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
              Logistics agents frequently reject pickups alleging &quot;item mismatch&quot;, triggering automatic cancellation of your return request. Preserve the outer packaging polybag with the tracking AWB label and gross weight details. Manifest weight differences prove parcel tampering under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. If customer support blocks you, escalate using our <Link href="/send-a-legal-notice/wrong-product-delivered" className="text-[#DC2626] font-bold hover:underline">legal notice for wrong product delivered</Link>.
            </p>
          </section>

          {/* Section 4 */}
          <section
            id="seller-vs-meesho-liability"
            aria-labelledby="h2-seller-vs-meesho-liability"
            className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
              Platform Safe-Harbour Immunity
            </div>
            <h2
              id="h2-seller-vs-meesho-liability"
              className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mb-2.5"
            >
              Can Meesho Refuse Your Refund by Blaming the Seller?
            </h2>
            <p className="text-slate-800 text-sm leading-relaxed font-semibold mb-2 text-justify">
              No, Meesho cannot escape liability by claiming intermediary immunity under Section 79 of the Information Technology Act, 2000. Under Rule 5(6) of the Consumer Protection (E-Commerce) Rules, 2020, marketplace platforms bear statutory fallback liability if an onboarded merchant fails to deliver promised goods or refund the buyer.
            </p>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
              Because Meesho collects consumer money into its own accounts, deducts seller commissions, controls courier scheduling, and manages returns, it operates as an active e-commerce entity under Section 2(16) of the Act. Under the E-Commerce (Amendment) Rules, 2026 (effective 1 Jan 2027), dark patterns such as forced store credits are strictly prohibited. Read our analysis on <Link href="/legal-notice-to/amazon" className="text-[#DC2626] font-bold hover:underline">legal notices to Amazon</Link>.
            </p>
          </section>

          {/* Section 5 */}
          <section
            id="grievance-officer-escalation"
            aria-labelledby="h2-grievance-officer-escalation"
            className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
              Statutory Redressal Channel
            </div>
            <h2
              id="h2-grievance-officer-escalation"
              className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mb-2.5"
            >
              Meesho Grievance Officer Details &amp; Escalation
            </h2>
            <p className="text-slate-800 text-sm leading-relaxed font-semibold mb-2 text-justify">
              The designated Resident Grievance Officer for Meesho is Mr. Murthy S.N., reachable by email at <code className="bg-red-50 text-[#DC2626] font-bold px-1.5 py-0.5 rounded">legalsupport@meesho.com</code> or at Meesho Limited&apos;s Bengaluru headquarters. Under Rule 4(4) of the E-Commerce Rules, 2020, the officer must acknowledge complaints within 48 hours and resolve them within one month.
            </p>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
              Address written escalations to: Meesho Limited (formerly Fashnear Technologies, CIN: U74900KA2015PLC082263), 3rd Floor, Wing-E, Helios Business Park, Kadubeesanahalli, Outer Ring Road, Bellandur, Bengaluru 560103. Include your Order ID, invoice, pickup receipt, and zero-credit bank statement. Failure to acknowledge within 48 hours is a statutory violation under <Link href="/law/ecommerce-rules-grievance-officer-48-hours" className="text-[#DC2626] font-bold hover:underline">E-Commerce Grievance Officer compliance</Link>.
            </p>
          </section>

          {/* Section 6 */}
          <section
            id="nch-1915-complaint"
            aria-labelledby="h2-nch-1915-complaint"
            className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
              Government Redressal Portal
            </div>
            <h2
              id="h2-nch-1915-complaint"
              className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mb-2.5"
            >
              Filing a Complaint on National Consumer Helpline 1915
            </h2>
            <p className="text-slate-800 text-sm leading-relaxed font-semibold mb-2 text-justify">
              To escalate outside the app without court costs, register a consumer grievance on the Department of Consumer Affairs&apos; National Consumer Helpline (NCH) by dialing toll-free <span className="font-bold text-[#DC2626]">1915</span>, sending a WhatsApp message to <span className="font-bold text-[#DC2626]">8800001915</span>, or logging into <code className="bg-slate-100 text-slate-900 px-1 py-0.5 rounded font-bold">consumerhelpline.gov.in</code>.
            </p>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
              Meesho Limited is a registered Convergence Partner with NCH. Invoices submitted on the INGRAM portal generate a tracked docket pushed directly to Meesho&apos;s senior compliance team for 30-day resolution. If the docket remains unresolved, it serves as conclusive documentary evidence of pre-litigation failure when issuing an advocate legal notice or filing on e-Jagriti.
            </p>
          </section>

          {/* Section 7 */}
          <section
            id="advocate-legal-notice"
            aria-labelledby="h2-advocate-legal-notice"
            className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
              Statutory Pre-Litigation Notice
            </div>
            <h2
              id="h2-advocate-legal-notice"
              className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mb-2.5"
            >
              When to Serve a Formal Legal Notice to Meesho
            </h2>
            <p className="text-slate-800 text-sm leading-relaxed font-semibold mb-2 text-justify">
              Serve an Advocate Legal Notice when 15 days elapse without a refund, your return is rejected arbitrarily, or support closes tickets without payment. A formal notice gives Meesho and the merchant a mandatory 15-day statutory window to remedy the default.
            </p>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
              An Advocate Legal Notice establishes formal legal default under the Code of Civil Procedure, 1908 and Consumer Protection Act, 2019. Over 70% of consumer e-commerce disputes settle during this notice window. Notices are dispatched via Registered Speed Post to Meesho&apos;s Bengaluru headquarters and via email with Section 63 BSA audit logs. See our guide on <Link href="/legal-notice-charges" className="text-[#DC2626] font-bold hover:underline">legal notice charges in India</Link>.
            </p>
          </section>

          {/* Section 8 */}
          <section
            id="consumer-court-awards"
            aria-labelledby="h2-consumer-court-awards"
            className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
              Judicial Precedents &amp; Compensation
            </div>
            <h2
              id="h2-consumer-court-awards"
              className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mb-2.5"
            >
              Consumer Court Orders Against Meesho (Fashnear)
            </h2>
            <p className="text-slate-800 text-sm leading-relaxed font-semibold mb-2 text-justify">
              District Consumer Disputes Redressal Commissions regularly penalize Meesho (Fashnear Technologies / Meesho Limited) for refund withholding, ordering the platform to refund the purchase amount and pay compensation between ₹3,000 and ₹25,000 for mental agony and litigation expenses.
            </p>
            <div className="space-y-2.5 my-3 text-xs sm:text-sm">
              <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-extrabold text-[#DC2626] uppercase text-xs">DCDRC Gurgaon · CC/01/2023</span>
                  <span className="font-bold text-slate-700">Nishant Kumar Lohia v. Meesho</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-justify">
                  The consumer purchased goods on Meesho that arrived damaged and incomplete. The District Commission rejected Meesho&apos;s Section 79 IT Act intermediary defense, established deficiency in service, and ordered a full refund along with mental harassment damages and litigation expenses.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-extrabold text-[#DC2626] uppercase text-xs">NCDRC Precedent · RP 1986/2019</span>
                  <span className="font-bold text-slate-700">Amazon Seller Services v. Gopal Sharma</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-justify">
                  The National Commission affirmed that marketplaces controlling payment collection and logistics cannot escape liability when onboarded merchants fail to refund, establishing the bedrock of Rule 5(6) fallback liability binding Meesho. Compare with <Link href="/legal-notice-to/nykaa" className="text-[#DC2626] font-bold hover:underline">consumer refund claims against Nykaa</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section
            id="e-jagriti-filing"
            aria-labelledby="h2-e-jagriti-filing"
            className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
              Digital Consumer Forum
            </div>
            <h2
              id="h2-e-jagriti-filing"
              className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mb-2.5"
            >
              How Can You File a Consumer Case Against Meesho Online via e-Jagriti?
            </h2>
            <p className="text-slate-800 text-sm leading-relaxed font-semibold mb-2 text-justify">
              If Meesho fails to pay your refund within the 15-day notice window, file online via the e-Jagriti portal (<code className="bg-slate-100 text-slate-900 px-1 py-0.5 rounded font-bold">e-jagriti.gov.in</code>), which replaced e-Daakhil. Claims up to ₹5,00,000 carry zero court fees.
            </p>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
              Under Section 34(2) of the Consumer Protection Act, 2019, you can file before the District Commission where <strong>you reside or work</strong> without traveling to Bengaluru. The petition requires naming Meesho Limited and the seller, attaching your invoice, unboxing proof, bank statement, the advocate legal notice, and postal tracking receipts. Read our guide on <Link href="/how-to-file-consumer-complaint-india" className="text-[#DC2626] font-bold hover:underline">how to file a consumer complaint online in India</Link>.
            </p>
          </section>

          {/* Section 10 */}
          <section
            id="honest-scope"
            aria-labelledby="h2-honest-scope"
            className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
              Scope &amp; Transparency
            </div>
            <h2
              id="h2-honest-scope"
              className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mb-2.5"
            >
              What Can and Cannot LegalRecovery Do for Your Meesho Dispute?
            </h2>
            <p className="text-slate-800 text-sm leading-relaxed font-semibold mb-2 text-justify">
              LegalRecovery drafts advocate statutory notices served on Meesho Limited and merchants by email and WhatsApp, with delivery certificates and optional speed post. We enforce genuine consumer claims, but do not operate as debt collectors or cyber-fraud investigators.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-xs sm:text-sm">
              <div className="border border-green-200 bg-green-50/50 rounded-xl p-3.5">
                <h3 className="font-black text-green-900 uppercase flex items-center gap-1.5 mb-1.5 text-xs">
                  <span>✓</span> What LegalRecovery Does
                </h3>
                <ul className="text-green-950 space-y-1 list-disc pl-4 text-xs">
                  <li>Drafts 15-day demand notices on advocate letterhead under CPA 2019.</li>
                  <li>Verifies corporate registered office coordinates for Meesho Limited.</li>
                  <li>Dispatches notices by email and WhatsApp, with optional Speed Post (₹450 per party).</li>
                  <li>Provides Section 63 BSA electronic evidence delivery certificates.</li>
                  <li>Maintains flat ₹{BASE_PRICE} pricing with zero hidden legal fees.</li>
                </ul>
              </div>
              <div className="border border-red-200 bg-red-50/50 rounded-xl p-3.5">
                <h3 className="font-black text-red-900 uppercase flex items-center gap-1.5 mb-1.5 text-xs">
                  <span>✕</span> What We Cannot Do
                </h3>
                <ul className="text-red-950 space-y-1 list-disc pl-4 text-xs">
                  <li>We cannot trace anonymous scammers running Telegram task frauds.</li>
                  <li>We do not provide physical court appearances without a separate vakalatnama.</li>
                  <li>We cannot override bank holds if your account is frozen for KYC issues.</li>
                  <li>We cannot guarantee unilateral clearing outside statutory legal channels.</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
              Our service protects genuine retail shoppers who made purchases on Meesho and encountered stuck refunds, wrong deliveries, or return rejections. For non-e-commerce refunds, visit our guide on <Link href="/send-a-legal-notice/online-refund-not-received" className="text-[#DC2626] font-bold hover:underline">recovering online refunds via legal notice</Link>.
            </p>
          </section>

          {/* Section 11: Conversational Q&A / FAQs (Archetype B5) */}
          <section
            id="frequently-asked-questions"
            aria-labelledby="h2-frequently-asked-questions"
            className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
              Direct User Queries &amp; High-Frequency Issues
            </div>
            <h2
              id="h2-frequently-asked-questions"
              className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mb-4"
            >
              Meesho Refund Nahi Aaya: Practical Questions Answered
            </h2>

            {/* Note: Archetype B5 explicitly specifies NO accordion; pure chat-style semantic Q&A sections */}
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-black text-slate-900 mb-1 text-sm">
                  What should I do if Meesho shows refund successful but money is not in my bank account?
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify">
                  Demand the 12-digit UTR from Meesho support instead of in-app screenshots. If your bank confirms zero credit, email Meesho&apos;s Grievance Officer giving 48 hours to furnish settlement proof or re-initiate payment.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-black text-slate-900 mb-1 text-sm">
                  Can a Meesho seller refuse a refund after the delivery agent picked up the return?
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify">
                  No. Once courier personnel accept the return, custody passes to the marketplace. Under Rule 5(6) of the E-Commerce Rules 2020, Meesho bears fallback liability and cannot withhold your refund over seller disputes.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-black text-slate-900 mb-1 text-sm">
                  How long does a Cash on Delivery (COD) refund take to reflect in my bank account on Meesho?
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify">
                  After adding your bank account or UPI VPA in the app, COD refunds clear within 3 to 7 working days via NEFT or IMPS. Delays beyond 7 business days without a UTR constitute deficiency in service.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-black text-slate-900 mb-1 text-sm">
                  What happens if Meesho claims I returned a used or wrong item?
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify">
                  The burden of proof rests on the marketplace to prove courier tampering. Preserve unboxing media, courier receipts, and weight slips to refute rejection under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-black text-slate-900 mb-1 text-sm">
                  Can I send a legal notice to Meesho without hiring an expensive local lawyer?
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify">
                  Yes. LegalRecovery drafts advocate legal demand notices with statutory 15-day compliance terms for a flat fee of ₹{BASE_PRICE}, served by email and WhatsApp to Meesho Limited in Bengaluru. Speed Post is optional at ₹450 per party.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-black text-slate-900 mb-1 text-sm">
                  What is the fee for filing a consumer complaint against Meesho on e-Jagriti?
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify">
                  Consumer claims up to ₹5,00,000 carry zero court fees on e-Jagriti. You can file online without traveling, and consumers may present their own case without hiring local counsel.
                </p>
              </div>

              <div>
                <h3 className="font-black text-slate-900 mb-1 text-sm">
                  Meesho ko legal notice kaise bheje aur iska statutory time period kitna hota hai?
                </h3>
                <p className="text-slate-700 leading-relaxed text-justify">
                  Meesho Limited ko verified advocate ke madhyam se Speed Post aur email par notice bheja jata hai jisme 15 dino ka demand period hota hai. Non-compliance par e-Jagriti par mukadma kiya jata hai.
                </p>
              </div>
            </div>
          </section>

          {/* Illustrative Worked Example Card (Archetype Artefact 3) */}
          <section
            aria-labelledby="worked-example-heading"
            className="border-2 border-slate-200 bg-white rounded-2xl p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              <span className="text-sm">📌</span> Real-World Dispute Case Study
            </div>
            <h3
              id="worked-example-heading"
              className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-2.5"
            >
              Illustrative Worked Example: Rohit Verma&apos;s ₹3,499 Kurta Set Refund Dispute
            </h3>
            <div className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
              <p>
                <strong>The Dispute:</strong> Rohit Verma from Kanpur ordered a festive kurta set for ₹3,499 on Meesho. The delivery arrived on 12 September containing faded polyester fabric of incorrect sizing. Rohit requested a return with photos, and courier executives collected the parcel on 15 September.
              </p>
              <p>
                <strong>The Failure Point:</strong> On 17 September, Meesho marked the order <em>&quot;Refund Successful&quot;</em>, yet Rohit&apos;s bank confirmed zero credit. Meesho&apos;s chatbot insisted payment succeeded and auto-closed tickets without resolution.
              </p>
              <p>
                <strong>The Legal Action:</strong> On 28 September, Rohit served a 15-day Advocate Legal Notice via LegalRecovery to Meesho Limited&apos;s Bengaluru headquarters and email <code className="bg-slate-100 text-slate-900 px-1 py-0.5 rounded font-mono">legalsupport@meesho.com</code>, citing Rule 5(6) fallback liability and demanding ₹3,499 plus compensation.
              </p>
              <p>
                <strong>The Settlement:</strong> Seven days post-delivery, Meesho escalations contacted Rohit, confirmed a payment webhook glitch, issued an immediate NEFT transfer of ₹3,499 with a valid UTR, and closed the dispute.
              </p>
            </div>
            <p className="text-[11px] text-slate-500 italic mt-2.5 pt-2 border-t border-slate-200">
              *Note: This worked example is an illustrative dispute based on recurring consumer commission complaint patterns. Names and non-material details have been adapted for privacy.
            </p>
          </section>

          {/* Evidence Checklist Block (Archetype Artefact 6) */}
          <section
            aria-labelledby="evidence-checklist-heading"
            className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
              <span className="text-sm">📋</span> Statutory Evidence File
            </div>
            <h3
              id="evidence-checklist-heading"
              className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-2.5"
            >
              Essential Evidence Checklist for Meesho Refund Claims
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              Before issuing an advocate notice or submitting an e-Jagriti petition, archive these six documents:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[#DC2626] font-bold text-sm leading-none">✓</span>
                <div>
                  <h4 className="font-bold text-slate-900">Meesho Tax Invoice PDF</h4>
                  <p className="text-slate-600 text-xs mt-0.5">Downloaded from the app showing order date, merchant GSTIN, and billing amount.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[#DC2626] font-bold text-sm leading-none">✓</span>
                <div>
                  <h4 className="font-bold text-slate-900">Packaging &amp; Barcode Label</h4>
                  <p className="text-slate-600 text-xs mt-0.5">High-res photograph of the white shipping sticker with AWB number and gross weight.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[#DC2626] font-bold text-sm leading-none">✓</span>
                <div>
                  <h4 className="font-bold text-slate-900">Courier Return Pickup Receipt</h4>
                  <p className="text-slate-600 text-xs mt-0.5">Physical receipt, SMS tracking confirmation, or courier pickup OTP screenshot.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[#DC2626] font-bold text-sm leading-none">✓</span>
                <div>
                  <h4 className="font-bold text-slate-900">Unboxing Photo / Video Proof</h4>
                  <p className="text-slate-600 text-xs mt-0.5">Timestamped media showing the wrong or defective product received.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[#DC2626] font-bold text-sm leading-none">✓</span>
                <div>
                  <h4 className="font-bold text-slate-900">15-Day Bank Account Statement</h4>
                  <p className="text-slate-600 text-xs mt-0.5">Official statement covering 15 days following the refund date proving zero credit.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[#DC2626] font-bold text-sm leading-none">✓</span>
                <div>
                  <h4 className="font-bold text-slate-900">In-App Chat Transcript &amp; Ticket IDs</h4>
                  <p className="text-slate-600 text-xs mt-0.5">Screenshots of customer care conversations and closed ticket summaries.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Primary Legal Sources Block (Prompt §5) */}
          <section
            aria-labelledby="sources-heading"
            className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6"
          >
            <h3
              id="sources-heading"
              className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5"
            >
              Sources &amp; Statutory References
            </h3>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li>
                • <strong>Consumer Protection (E-Commerce) Rules, 2020:</strong> Rules 4(4) (Grievance Officer timelines), 5(3) (Grievance redressal), and 5(6) (Fallback liability of marketplace e-commerce entities).{" "}
                <span className="text-[#DC2626] font-medium">Official Gazette Notification</span>
              </li>
              <li>
                • <strong>Consumer Protection Act, 2019:</strong> Section 2(47) (Unfair Trade Practice), Section 35 (Manner of filing complaint), and Section 69 (Two-year limitation period).{" "}
                <span className="text-[#DC2626] font-medium">India Code Legislative Database</span>
              </li>
              <li>
                • <strong>Department of Consumer Affairs:</strong> National Consumer Helpline (NCH 1915) &amp; Integrated Grievance Redress Mechanism (INGRAM).{" "}
                <a
                  href="https://consumerhelpline.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DC2626] hover:underline"
                >
                  consumerhelpline.gov.in
                </a>
              </li>
              <li>
                • <strong>Ministry of Consumer Affairs:</strong> e-Jagriti Digital Consumer Dispute Redressal Portal (in force since 1 Jan 2025).{" "}
                <a
                  href="https://e-jagriti.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DC2626] hover:underline"
                >
                  e-jagriti.gov.in
                </a>
              </li>
              <li>
                • <strong>Consumer Court Precedents:</strong> <em>Nishant Kumar Lohia v. Meesho (Fashnear Technologies Pvt. Ltd.)</em>, CC/01/2023 (DCDRC Gurgaon); <em>Amazon Seller Services v. Gopal Sharma</em>, RP No. 1986/2019 (NCDRC fallback liability).
              </li>
            </ul>
          </section>

          {/* Primary Legal Notice Call to Action (Archetype B5) */}
          <section aria-label="Legal Notice Service Call to Action">
            <MeeshoNoticeCTA />
          </section>
        </div>

        {/* Contextual Legal Guides Cluster */}
        <RelatedRecoveryGuides />
      </main>
    </>
  );
}
