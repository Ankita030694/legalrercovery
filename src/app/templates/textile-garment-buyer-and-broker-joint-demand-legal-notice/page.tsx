import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import TextileNoticeCTA from "./TextileNoticeCTA";
import TextileNoticeTOC from "./TextileNoticeTOC";
import TextileNoticeWorkspace from "./TextileNoticeWorkspace";

export const revalidate = 86400;

const PAGE_PATH = "/templates/textile-garment-buyer-and-broker-joint-demand-legal-notice";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository; attributed to Anuj Anand Malik (Advocate & Founder, AMA Legal Solutions).
const EXACT_H1 =
  "Editable Legal Demand Notice for Textile Mills & Garment Manufacturers (Includes Co-Noticee Textile Broker / Agent Clause)";

const EXACT_TITLE = "Textile & Garment Unpaid Bill Notice (Buyer + Broker)";

const EXACT_DESCRIPTION =
  "Indian textile trade notice format: Bijak/LR/E-Way Bill schedule, 7-day bale-inspection bar, Section 43B(h) tax warning & Co-Noticee Broker clause.";

export const metadata: Metadata = {
  title: EXACT_TITLE,
  description: EXACT_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Textile & Garment Unpaid Bill Legal Notice Format"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Sale of Goods Act, 1930 — Section 42 (Acceptance of Goods & Expiry of Reasonable Bale Inspection Window)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "MSMED Act, 2006 — Sections 15 to 18 (45-Day Credit Ceiling, 3x RBI Bank Rate Compound Interest & MSEFC Reference)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Income Tax Act, 1961 — Section 43B(h) (Tax Disallowance on Delayed Payments to Micro & Small Textile Suppliers)",
    url: "https://www.indiacode.nic.in/handle/123456789/2435",
  },
  {
    title: "Indian Contract Act, 1872 — Sections 170 & 182–238 (Bailee's Particular Lien on Processed Fabric & Agency / Broker Liability)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Electronic Admissibility of WhatsApp Dispatch Confirmations, LR & E-Way Bills)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question: "Why should a textile mill serve the introducing broker (Adatiya) as Noticee #2?",
    answer:
      "In Indian textile mandis such as Surat, Bhiwandi, Tirupur, Ludhiana, and Delhi, outstation credit is extended primarily on the introduction and goodwill of the commission agent or Adatiya. When a buyer defaults or vanishes ('party uth gayi'), serving a formal legal notice solely on the buyer often leads to silence. Joining the introducing broker as Noticee #2 / Proforma Party—with an optional copy to the local Textile Market Association—creates immediate peer and market-reputation pressure, compelling the broker to bring the buyer to the settlement table within 72 hours.",
  },
  {
    question: "How does Section 42 of the Sale of Goods Act block late garment return or shrinkage claims?",
    answer:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have accepted the goods when they intimate acceptance, cut/process the fabric, or retain the bales beyond a reasonable inspection period without communicating rejection. Most textile Bijaks print a strict 7-day or 15-day bale-inspection clause prior to cutting or dyeing. Once the buyer retains or sells the seasonal stock for 60–90 days, Section 42 bars them from inventing afterthought 'colour-bleeding' or 'shrinkage' excuses to avoid payment.",
  },
  {
    question: "Can a dyeing or printing process house retain grey or finished fabric for unpaid job-work bills?",
    answer:
      "Yes. Under Section 170 of the Indian Contract Act, 1872, a bailee (dyeing, bleaching, printing, or embroidery job-worker) who has rendered skill and labour on goods bailed to them has a statutory Particular Lien to retain the processed fabric until their job-work charges are paid in full. Toggle the Section 170 Lien clause in our workspace above to invoke this right formally in your demand notice.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act force textile buyers to clear dues before 31 March?",
    answer:
      "If your textile mill, weaving unit, or garment factory holds a valid MSME Udyam Registration as a Micro or Small Enterprise, Section 43B(h) of the Income Tax Act, 1961 prohibits the buyer from claiming your unpaid invoice as a tax-deductible business expense unless paid within the 45-day MSMED Act limit. Putting this warning in writing notifies the buyer's Chartered Accountant that the unpaid bill will be added back to taxable profit at ~30% tax plus audit reporting in Form 3CD Clause 22.",
  },
  {
    question: "Can we recover textile dues if there was no formal written contract—only Bijak, Parchi, and Transport LR?",
    answer:
      "Yes. Under Section 10 of the Indian Contract Act and commercial trade usage, a printed Bijak or GST Tax Invoice paired with a Lorry Receipt (LR), GST E-Way Bill, and WhatsApp dispatch confirmation constitutes a binding written contract for Order XXXVII CPC summary recovery and MSME Samadhaan proceedings. You do not need a stamped 20-page agreement.",
  },
  {
    question: "What is the fastest way to dispatch this joint notice to both buyer and broker?",
    answer:
      "Serve both Noticee #1 (Buyer & Directors) and Noticee #2 (Broker / Adatiya) simultaneously via three channels: (1) Registered Speed Post RPAD for statutory presumption of delivery under Section 27 of the General Clauses Act; (2) Official Email to accounts and management; and (3) WhatsApp PDF dispatch preserved with a Section 63 BSA 2023 Electronic Evidence Certificate.",
  },
];

export default function TextileJointDemandNoticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_PATH}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${PAGE_PATH}`,
          url: `${SITE_URL}${PAGE_PATH}`,
          name: EXACT_TITLE,
          description: EXACT_DESCRIPTION,
        },
        headline: EXACT_H1,
        description: EXACT_DESCRIPTION,
        inLanguage: "en-IN",
        mainEntityOfPage: `${SITE_URL}${PAGE_PATH}`,
        datePublished: "2026-11-17T10:00:00+05:30",
        dateModified: "2026-11-17T10:00:00+05:30",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
          url: `${SITE_URL}/authors/anuj-anand-malik`,
        },
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}${PAGE_PATH}#template`,
        name: "Editable Textile & Garment Buyer + Co-Noticee Broker Joint Demand Legal Notice",
        headline: EXACT_H1,
        description: EXACT_DESCRIPTION,
        genre: "Commercial Legal Demand Notice Template",
        inLanguage: "en-IN",
        creator: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${PAGE_PATH}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${PAGE_PATH}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Templates",
            item: `${SITE_URL}/templates`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Textile Buyer & Broker Joint Notice",
            item: `${SITE_URL}${PAGE_PATH}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-13 Textile &amp; Apparel Recovery</span>
            <span className="text-red-600">•</span>
            <span>Buyer + Co-Noticee Broker Format</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (with Parent Hub Link in first 250 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Built for Indian textile mills, garment makers, and dyeing process houses under our{" "}
            <Link
              href="/industries/textiles-apparel-garment-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Textiles &amp; Apparel Recovery Hub
            </Link>
            , this dual-party legal notice serves both the defaulting Buyer (Noticee #1) and the introducing Commission Agent / <em>Adatiya</em> (Noticee #2) with a Bijak/LR schedule, 7-day bale-inspection expiry bar under Sale of Goods Act s.42, MSMED s.16 interest, and Section 43B(h) tax disallowance warning.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-emerald-400">72 Hours</div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                Typical Broker Mediation Trigger
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-slate-100">7–15 Days</div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                SOGA s.42 Bale Inspection Bar
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-amber-400">3x RBI Rate</div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                MSMED s.16 Compound Interest
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-lg sm:text-2xl font-black text-red-400">Sec. 43B(h)</div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                ~30% Buyer Tax Disallowance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            { label: "Templates", href: "/templates" },
            {
              label: "Textile Buyer & Broker Joint Notice",
              href: PAGE_PATH,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          <TextileNoticeTOC />

          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Interactive Workspace */}
            <section
              id="interactive-workspace"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Interactive Textile &amp; Garment Notice Workspace
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Select your textile trade scenario below—Surat/Bhiwandi fabric supply, Tirupur/Noida garment rejection bar, or dyeing process-house lien—and customize the Bijak, Transport LR, E-Way Bill, and Co-Noticee Broker details. Download the formatted Word (<code>.doc</code>) draft or copy it directly for advocate review.
              </p>

              <TextileNoticeWorkspace />
            </section>

            {/* Section 2: Co-Noticee Broker Catalyst + SVG Diagram */}
            <section
              id="broker-co-noticee-catalyst"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Why Joining the Textile Broker Triggers 72-Hour Settlement
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Across India&apos;s wholesale textile corridors—Surat&apos;s Ring Road markets, Bhiwandi powerlooms, Tirupur knitwear clusters, Ludhiana hosiery, and Delhi&apos;s Chandni Chowk—outstation credit relies on the introducing commission agent (<em>Adatiya</em> / <em>Dalal</em>). When an outstation buyer stops answering phone calls or threatens to return seasonal stock after 90 days, a single-party notice sent only to the buyer lacks commercial urgency.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Joining the introducing broker as <strong>Noticee #2 / Proforma Party</strong> (with an optional copy to the local Textile Trade Association / <em>Mahajan Panch</em>) activates market-reputation accountability. Because a broker&apos;s livelihood depends on trust across hundreds of mills, receiving a formal advocate notice forces the broker to intervene immediately, verify the ledger, and pressure Noticee #1 into paying before the dispute escalates to association blacklisting or MSEFC arbitration.
              </p>

              {/* Desktop SVG Tri-Party Pressure Flow */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <svg
                  viewBox="0 0 800 240"
                  width="800"
                  height="240"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Tri-party legal pressure loop between Textile Mill, Buyer, and Introducing Broker"
                >
                  <rect x="20" y="75" width="190" height="90" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="115" y="108" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">CREDITOR MILL / UNIT</text>
                  <text x="115" y="128" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Bijak + LR + E-Way Bill</text>
                  <text x="115" y="146" textAnchor="middle" fill="#94A3B8" fontSize="10">MSMED s.16 &amp; s.43B(h)</text>

                  <line x1="210" y1="100" x2="310" y2="55" stroke="#DC2626" strokeWidth="2" />
                  <line x1="210" y1="140" x2="310" y2="185" stroke="#F59E0B" strokeWidth="2" />

                  <rect x="310" y="15" width="220" height="80" rx="12" fill="#1E293B" stroke="#EF4444" strokeWidth="2" />
                  <text x="420" y="42" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold">NOTICEE #1: BUYER</text>
                  <text x="420" y="61" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Principal + Tax Disallowance</text>
                  <text x="420" y="79" textAnchor="middle" fill="#94A3B8" fontSize="10">SOGA s.42 Return Bar</text>

                  <rect x="310" y="145" width="220" height="80" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                  <text x="420" y="172" textAnchor="middle" fill="#FCD34D" fontSize="11" fontWeight="bold">NOTICEE #2: BROKER / ADATIYA</text>
                  <text x="420" y="191" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Agency &amp; Trade Accountability</text>
                  <text x="420" y="209" textAnchor="middle" fill="#94A3B8" fontSize="10">Contract Act ss. 182–238</text>

                  <line x1="530" y1="55" x2="600" y2="105" stroke="#10B981" strokeWidth="2" />
                  <line x1="530" y1="185" x2="600" y2="135" stroke="#10B981" strokeWidth="2" />

                  <rect x="600" y="75" width="180" height="90" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                  <text x="690" y="108" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="bold">72-HOUR OUTCOME</text>
                  <text x="690" y="128" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">RTGS / PDC Settlement</text>
                  <text x="690" y="146" textAnchor="middle" fill="#A7F3D0" fontSize="10">Or Mahajan / MSEFC Filing</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold uppercase text-red-400">Step 1</span>
                  <p className="text-sm font-bold">Mill Dispatches Joint Notice (Bijak + LR + E-Way Bill)</p>
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <span className="text-[10px] font-bold uppercase text-[#DC2626]">Step 2</span>
                  <p className="text-sm font-bold text-slate-900">Noticee #1 (Buyer) Faces s.43B(h) Tax &amp; s.42 Return Bar</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <span className="text-[10px] font-bold uppercase text-amber-700">Step 3</span>
                  <p className="text-sm font-bold text-slate-900">Noticee #2 (Broker) Intervenes to Protect Mandi Reputation</p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="statutory-framework"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory Hooks Behind Every Textile Notice Clause
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Each paragraph in the template above is engineered to pre-empt the four most common excuses used by defaulting apparel brands, wholesalers, and outstation traders.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute &amp; Section</th>
                      <th className="p-3.5 font-bold">Textile Dispute Trigger</th>
                      <th className="p-3.5 font-bold">Legal Effect on Buyer / Broker</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Sale of Goods Act, 1930 (s.42)</td>
                      <td className="p-3.5 text-slate-600">Late 60–90 day fabric shrinkage, shade, or unsold return claims</td>
                      <td className="p-3.5 text-slate-700">Deemed acceptance after 7/15-day Bijak bale-inspection window; buyer estopped from returning stock.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">MSMED Act, 2006 (ss. 15–18)</td>
                      <td className="p-3.5 text-slate-600">Credit stretched beyond 45 days by large retail or wholesale buyers</td>
                      <td className="p-3.5 text-slate-700">Mandatory compound interest at 3x RBI Bank Rate (~21.75% p.a.) + MSEFC 90-day conciliation/arbitration.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Income Tax Act, 1961 (s.43B(h))</td>
                      <td className="p-3.5 text-slate-600">Year-end unpaid invoices owed to Micro &amp; Small textile suppliers</td>
                      <td className="p-3.5 text-slate-700">Full invoice disallowed as business expense; added back to buyer&apos;s taxable income (~30% tax hit).</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Contract Act, 1872 (ss. 182–238)</td>
                      <td className="p-3.5 text-slate-600">Broker claims zero responsibility after buyer defaults</td>
                      <td className="p-3.5 text-slate-700">Binds introducing <em>Adatiya</em> for credit verification, ledger reconciliation, and <em>del credere</em> trade custom.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Contract Act, 1872 (s.170)</td>
                      <td className="p-3.5 text-slate-600">Unpaid dyeing, bleaching, printing, or embroidery job-work bills</td>
                      <td className="p-3.5 text-slate-700">Confers statutory Bailee&apos;s Particular Lien to retain processed fabric in godown until full payment.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Evidence & BSA s.63 Checklist */}
            <section
              id="annexure-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Mandatory Bijak, LR &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Before dispatching your joint legal notice, compile these six annexures so your claim is immediately ready for Order XXXVII CPC summary proceedings or{" "}
                <Link
                  href="/msme-odr-portal-delayed-payment-guide"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSME ODR / Samadhaan filing
                </Link>
                :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Printed Bijak / GST Tax Invoices",
                    desc: "Ensure the 7/15-day bale-inspection bar, interest clause, and local jurisdiction are clearly legible on the invoice copy.",
                  },
                  {
                    title: "2. Transport Lorry Receipts (LR) & Delivery POD",
                    desc: "Attach VRL, TCI, or mandi transport biltis showing bale count, gross weight, and consignee stamp.",
                  },
                  {
                    title: "3. GST E-Way Bills & GSTR-1 Reflection",
                    desc: "Prove physical movement of goods and buyer's Input Tax Credit (ITC) claim on the GST portal—estopping non-receipt defenses.",
                  },
                  {
                    title: "4. Broker WhatsApp & Parchi Trail",
                    desc: "Export WhatsApp chats where the Adatiya introduced the buyer, confirmed rates, or acknowledged brokerage.",
                  },
                  {
                    title: "5. MSME Udyam Registration Certificate",
                    desc: "Essential to trigger MSMED s.16 compound interest and Income Tax s.43B(h) disallowance warnings.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Certificate",
                    desc: "Mandatory electronic evidence certificate authenticating WhatsApp exports, ledger PDFs, and email delivery logs.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5"
                  >
                    <h3 className="text-sm font-extrabold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Service Protocol */}
            <section
              id="service-protocol"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  3-Channel Service Protocol (Buyer + Broker + Association)
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Dispatch Channel</th>
                      <th className="p-3.5 font-bold">Recipient Parties</th>
                      <th className="p-3.5 font-bold">Evidentiary Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Speed Post RPAD</td>
                      <td className="p-3.5 text-slate-600">Buyer Registered Office, Directors &amp; Broker Office</td>
                      <td className="p-3.5 text-slate-700">Statutory presumption of service under Section 27, General Clauses Act, 1897.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Official Email + CC</td>
                      <td className="p-3.5 text-slate-600">Buyer Accounts/Directors, Broker &amp; Trade Association</td>
                      <td className="p-3.5 text-slate-700">Instant timestamped delivery under BSA 2023 s.63; alerts buyer&apos;s CA to s.43B(h).</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">WhatsApp PDF Dispatch</td>
                      <td className="p-3.5 text-slate-600">Buyer Proprietor/Partner &amp; Introducing Broker Mobile</td>
                      <td className="p-3.5 text-slate-700">Double-tick read receipt; triggers immediate broker-to-buyer settlement calls.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Dual-Track CTA */}
            <TextileNoticeCTA />

            {/* Section 6: Cluster Cross-Links */}
            <section
              id="related-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Related Textile Recovery Guides &amp; Tools
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <Link
                  href="/textile-commission-agent-broker-adatiya-buyer-default-liability"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase text-[#DC2626] block mb-1">
                    Broker Liability Playbook
                  </span>
                  <p className="font-bold text-slate-900">
                    Textile Commission Agent / Adatiya Liability for Buyer Default
                  </p>
                </Link>
                <Link
                  href="/retail-fashion-brand-sor-sale-or-return-rejection-garment-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase text-[#DC2626] block mb-1">
                    SOR &amp; Quality Rejection
                  </span>
                  <p className="font-bold text-slate-900">
                    Fashion Brand SOR &amp; Late Garment Rejection Recovery Guide
                  </p>
                </Link>
                <Link
                  href="/dyeing-printing-bleaching-embroidery-job-work-fabric-lien-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase text-[#DC2626] block mb-1">
                    Process House Lien
                  </span>
                  <p className="font-bold text-slate-900">
                    Dyeing, Printing &amp; Embroidery Job-Work Fabric Lien Recovery
                  </p>
                </Link>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase text-emerald-700 block mb-1">
                    Interactive Calculator
                  </span>
                  <p className="font-bold text-slate-900">
                    MSME Delayed Payment 3x RBI Interest Calculator
                  </p>
                </Link>
                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                    Tax Disallowance Law
                  </span>
                  <p className="font-bold text-slate-900">
                    Section 43B(h) 45-Day MSME Payment Rule Explained
                  </p>
                </Link>
                <Link
                  href="/how-to-recover-money-without-written-agreement"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                    Informal Credit Recovery
                  </span>
                  <p className="font-bold text-slate-900">
                    How to Recover Business Dues Without a Written Agreement
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 7: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Frequently Asked Questions: Textile Joint Demand Notice
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50/60 p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Statutory Sources */}
            <section className="bg-slate-900 text-slate-200 rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-3">
              <h2 className="text-base sm:text-lg font-extrabold text-white">
                Primary Statutory Sources Referenced
              </h2>
              <ul className="space-y-2 text-xs text-slate-300">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.title}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-red-400 underline transition-colors"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
