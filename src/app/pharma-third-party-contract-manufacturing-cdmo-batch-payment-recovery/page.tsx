import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CdmoBatchTableOfContents from "./CdmoBatchTableOfContents";
import CdmoBatchScenarioTabs from "./CdmoBatchScenarioTabs";
import CdmoBatchCTA from "./CdmoBatchCTA";

export const revalidate = 86400;

const PAGE_URL = "/pharma-third-party-contract-manufacturing-cdmo-batch-payment-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const EXACT_H1 =
  "PCD or Pharma Marketing Company Not Paying or Not Lifting Manufactured Drug Batches? CDMO Legal Recovery Playbook";
const META_TITLE = "Pharma Third-Party / CDMO Unpaid & Unlifted Batch Recovery";
const META_DESCRIPTION =
  "Baddi, Haridwar & Gujarat pharma CDMOs stuck with custom-printed batches? Recover 70% balance + storage via MSME s.15–18, 43B(h), s.44 SoGA & NI s.138.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Pharma Third-Party CDMO Unpaid Batch Legal Recovery Playbook"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
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
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 & 23) — Legislative Department",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 (Section 43B(h) — Mandatory 15/45-Day Deduction Rule for MSME Suppliers)",
    url: "https://www.indiacode.nic.in/handle/123456789/2435",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 41, 42, 44 & 55 — Buyer Refusal to Take Delivery & Deemed Acceptance)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Drugs and Cosmetics Act, 1940 & Rules, 1945 (Schedule M, Form 25A/28A Loan License & Section 17 Misbranding)",
    url: "https://www.indiacode.nic.in/handle/123456789/2413",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Section 138 & Section 143A — Dishonour of Security Cheques & Interim Relief)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "MSME Samadhaan Portal — Ministry of Micro, Small & Medium Enterprises (MSEFC Delayed Payment Filing)",
    url: "https://samadhaan.msme.gov.in/",
  },
];

const FAQS = [
  {
    question:
      "Can a third-party pharma manufacturer legally re-label and sell unlifted branded drug batches to another buyer?",
    answer:
      "No. Under Section 17 of the Drugs and Cosmetics Act, 1940 and Section 29 of the Trade Marks Act, 1999, erasing, over-labelling, or de-blistering custom brand-printed alu-alu foils, cartons, or labels bearing a marketing company's trademark and marketing address constitutes statutory misbranding and trademark infringement. Because the batch cannot legally be resold in the open market, the manufacturer is entitled to recover 100% of the unpaid 70% balance, storage charges under Sale of Goods Act Section 44, and statutory destruction costs.",
  },
  {
    question:
      "How does Sale of Goods Act Section 44 protect a CDMO when a PCD firm refuses to lift a ready batch?",
    answer:
      "Section 44 of the Sale of Goods Act, 1930 states that when the seller is ready and willing to deliver goods and requests the buyer to take delivery, and the buyer neglects or refuses to do so within a reasonable time, the buyer is liable to the seller for any loss occasioned by such neglect or refusal, as well as a reasonable charge for the care and custody (warehouse/quarantine storage) of the goods.",
  },
  {
    question:
      "Does Income Tax Section 43B(h) apply if the PCD marketing company never lifted the manufactured goods?",
    answer:
      "Section 43B(h) applies when an expense is payable to a registered Micro or Small enterprise beyond the 15-day (or 45-day written agreement) limit under MSMED Act Section 15. Where the tax invoice is raised upon batch completion/appropriation under the contract or where conversion/job-work services are billed, any unpaid balance remaining beyond 31 March triggers mandatory disallowance of the buyer's deduction in that financial year, creating immediate CFO-level settlement pressure.",
  },
  {
    question:
      "What if the marketing company rejects the batch claiming poor quality after we already issued an approved COA?",
    answer:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer cannot raise belated, unsubstantiated quality objections after accepting samples or failing to conduct timely inspection. If your QA lab has issued a signed Certificate of Analysis (COA) matching IP/BP/USP pharmacopoeia standards and preserved sealed retention samples under Schedule M, issue a 7-day notice demanding joint NABL/Form 39 lab testing at the buyer's expense; failure to participate waives the quality excuse in Order XXXVII CPC or MSEFC proceedings.",
  },
  {
    question:
      "Can Baddi, Haridwar, or Gujarat MSME pharma units file on MSME Samadhaan if they only received a 30% advance?",
    answer:
      "Yes, provided the manufacturer holds a valid Micro or Small Udyam Registration predating the Purchase Order or Manufacturing Agreement. Once the batch is manufactured against a confirmed PO and the 70% balance invoice or readiness demand falls overdue beyond 45 days, the Micro/Small unit can file on the MSME Samadhaan portal before its jurisdictional MSEFC (e.g., Shimla/Solan for Baddi, Dehradun for Haridwar, Gandhinagar for Changodar/Ahmedabad) claiming principal plus 3x RBI Bank Rate compound monthly interest under Section 16.",
  },
  {
    question:
      "Can we present the PCD company's undated security cheque for the unpaid 70% batch balance and storage charges?",
    answer:
      "Yes. Under Section 20 of the Negotiable Instruments Act, 1881 and the Supreme Court rulings in Bir Singh v. Mukesh Kumar and Sripati Singh v. State of Jharkhand, an inchoate security cheque handed over under a manufacturing agreement can be lawfully filled for the crystallized debt (unpaid 70% balance plus agreed/quantified charges) once the debt becomes due. Always serve a 7-day prior written crystallization notice before presenting the cheque to pre-empt 'security cheque' defenses under Section 138 NI Act.",
  },
  {
    question:
      "Who bears the cost of bio-medical waste (BMW) destruction if the unlifted drug batch crosses its expiry date?",
    answer:
      "If the manufacturer served a timely Notice of Batch Readiness and pre-destruction demand under Section 44 of the Sale of Goods Act and Section 73 of the Indian Contract Act, the defaulting buyer bears 100% of the batch price, accrued quarantine storage charges, and witnessed Pollution Control Board / BMW incineration charges. Keeping dated quarantine logs and QA destruction certificates protects the manufacturer from State Drug Controller liability.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/blog_money_recovery.png`,
    },
  },
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Pharma Contract Manufacturers Recover Unpaid 70% Batch Balances & Unlifted Stock",
  description:
    "5-step legal recovery workflow for Baddi, Haridwar, Gujarat, Hyderabad & Sikkim pharma CDMOs facing defaulting PCD or marketing companies.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock QA Retention Samples & Issue Section 44 Notice of Readiness",
      text: "Preserve sealed Schedule M retention samples, attach the signed COA and BMR summary, and serve a formal Notice of Batch Readiness starting the Sale of Goods Act Section 44 storage-charge clock.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve 15-Day Fact-Verified Notice Invoking MSMED s.16 & Income Tax s.43B(h)",
      text: "Issue a Fact-Verified Legal Notice demanding the 70% balance plus custom foil/carton sunk costs, warning of 3x RBI compound interest and Form 3CD Clause 22 Section 43B(h) tax disallowance.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Neutralize Quality Excuses With 7-Day NABL / Form 39 Testing Ultimatum",
      text: "Put the buyer on a strict 7-day notice for joint NABL laboratory testing against your approved COA to foreclose sham quality defenses under Sale of Goods Act Section 42.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Crystallize & Present Security Cheques Under Section 138 NI Act",
      text: "Serve a 7-day pre-presentation crystallization notice, deposit the security cheque, and file a Section 138 criminal complaint with Section 143A 20% interim compensation upon dishonour.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Escalate to MSEFC Samadhaan or Order XXXVII Commercial Suit Before Expiry",
      text: "File an MSEFC conciliation/arbitration reference under MSMED Act Section 18 or an Order XXXVII CPC Summary Suit before the batch shelf life expires.",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pharma & Medical Devices Recovery",
      item: `${SITE_URL}/industries/pharma-medical-devices-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CDMO Unpaid & Unlifted Batch Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function PharmaCdmoBatchRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            IND-04 Pharma CDMO &amp; Loan-License Playbook &bull; Baddi &bull; Haridwar &bull; Gujarat
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 word Executive Statutory Summary Box with inline Hub link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/pharma-medical-devices-recovery"
              className="text-red-300 underline decoration-red-400/70 underline-offset-4 hover:text-white font-bold"
            >
              Pharma &amp; Medical Devices Legal Recovery Hub
            </Link>
            , contract manufacturers stuck with custom-printed unlifted batches can immediately
            enforce <strong>Sale of Goods Act s.44</strong> (storage &amp; refusal losses),{" "}
            <strong>MSMED Act ss.15–18</strong> (3x RBI compound interest),{" "}
            <strong>Income Tax s.43B(h)</strong> buyer tax disallowance, and{" "}
            <strong>NI Act s.138</strong> security-cheque prosecution before shelf-life expiry.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3&times; RBI</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Compound monthly interest under MSMED s.16
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-amber-400">45 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Max credit ceiling triggering s.43B(h) tax disallowance
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-slate-100">s.44 SoGA</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Quarantine storage &amp; buyer refusal damages
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-red-400">15 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Advocate demand + s.138 cheque crystallization window
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Pharma & Medical Devices",
                href: "/industries/pharma-medical-devices-recovery",
              },
              {
                label: "CDMO Batch Payment Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CdmoBatchTableOfContents />

          {/* Main Article Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why Pharma CDMOs Get Trapped With Unlifted Branded Batches
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across India&apos;s primary formulation hubs—<strong>Baddi, Solan, and Paonta Sahib</strong>{" "}
                in Himachal Pradesh, <strong>Haridwar and Dehradun</strong> in Uttarakhand,{" "}
                <strong>Changodar and Sanand</strong> in Gujarat, <strong>Jeedimetla</strong> in
                Hyderabad, and <strong>Rangpo</strong> in Sikkim—thousands of WHO-GMP certified
                third-party and loan-license manufacturers operate on a standard{" "}
                <strong>30% advance / 70% balance against dispatch</strong> commercial model.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike generic steel, yarn, or packaging suppliers, a pharmaceutical contract
                manufacturer faces a severe statutory trap the moment a PCD or marketing company
                defaults on the 70% balance. Every tablet strip, alu-alu blister foil, mono-carton,
                and outer shipper is custom-printed with the marketing company&apos;s{" "}
                <strong>registered brand name, trademark, MRP, batch number, and &ldquo;Marketed By&rdquo; address</strong>.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                  The Dual Regulatory &amp; Shelf-Life Squeeze
                </p>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  Under <strong>Section 17 of the Drugs and Cosmetics Act, 1940</strong> and{" "}
                  <strong>Section 29 of the Trade Marks Act, 1999</strong>, a manufacturer cannot
                  legally strip, over-label, or sell custom-branded formulations to a third party.
                  Meanwhile, the 24-month or 36-month shelf-life clock ticks down inside your
                  finished-goods quarantine bay, blocking working capital and threatening{" "}
                  <strong>Bio-Medical Waste (BMW) destruction liability</strong> if left unresolved.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Waiting passively for verbal assurances from the PCD marketing firm destroys your
                recovery leverage. Once a batch drops below 12 months of remaining shelf life,
                stockists refuse to accept it even if the buyer eventually settles. Your legal
                escalation must begin on <strong>Day 7 after Batch Readiness Intimation</strong>.
              </p>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Unlifted Pharma Batch Escalation Decision Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select the fastest statutory rail based on your Udyam registration status, whether
                the buyer holds an approved Certificate of Analysis (COA), and whether you hold an
                undated security cheque.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-5 border border-slate-800 overflow-x-auto">
                <svg
                  width="820"
                  height="310"
                  viewBox="0 0 820 310"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="CDMO Unlifted Batch Legal Recovery Decision Tree"
                >
                  {/* Node 1 */}
                  <rect x="20" y="110" width="175" height="86" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="107" y="140" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">
                    DAY 0: BATCH READY
                  </text>
                  <text x="107" y="159" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    70% Balance Unpaid
                  </text>
                  <text x="107" y="177" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Serve s.44 Readiness + COA
                  </text>

                  {/* Arrow 1 -> 2A, 2B, 2C */}
                  <path d="M195 135 L255 55" stroke="#64748B" strokeWidth="2" />
                  <path d="M195 153 L255 153" stroke="#64748B" strokeWidth="2" />
                  <path d="M195 171 L255 250" stroke="#64748B" strokeWidth="2" />

                  {/* Track A: Micro/Small Udyam */}
                  <rect x="255" y="18" width="235" height="74" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="372" y="42" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="700">
                    MICRO / SMALL UDYAM UNIT
                  </text>
                  <text x="372" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    MSMED s.16 + s.43B(h) Notice
                  </text>
                  <text x="372" y="77" textAnchor="middle" fill="#A7F3D0" fontSize="10">
                    3x RBI Interest + Tax Disallowance
                  </text>

                  {/* Track B: Sham Quality Dispute */}
                  <rect x="255" y="116" width="235" height="74" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="372" y="140" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="700">
                    BUYER ALLEGES QUALITY ISSUE
                  </text>
                  <text x="372" y="158" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    7-Day NABL / Form 39 Ultimatum
                  </text>
                  <text x="372" y="175" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Lock QA Control Sample (s.42 SoGA)
                  </text>

                  {/* Track C: Security Cheque */}
                  <rect x="255" y="214" width="235" height="74" rx="10" fill="#450A0A" stroke="#EF4444" strokeWidth="1.5" />
                  <text x="372" y="238" textAnchor="middle" fill="#FCA5A5" fontSize="10" fontWeight="700">
                    SECURITY CHEQUE ON FILE
                  </text>
                  <text x="372" y="256" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    7-Day Crystallization + s.138
                  </text>
                  <text x="372" y="273" textAnchor="middle" fill="#FECACA" fontSize="10">
                    20% Interim Relief u/s 143A NI Act
                  </text>

                  {/* Arrows to Enforcement */}
                  <path d="M490 55 L560 115" stroke="#64748B" strokeWidth="2" />
                  <path d="M490 153 L560 153" stroke="#64748B" strokeWidth="2" />
                  <path d="M490 250 L560 190" stroke="#64748B" strokeWidth="2" />

                  {/* Final Enforcement Box */}
                  <rect x="560" y="95" width="240" height="116" rx="12" fill="#DC2626" />
                  <text x="680" y="125" textAnchor="middle" fill="#FEE2E2" fontSize="10" fontWeight="700">
                    PARALLEL RECOVERY RAIL
                  </text>
                  <text x="680" y="147" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">
                    MSEFC / Order XXXVII CPC
                  </text>
                  <text x="680" y="168" textAnchor="middle" fill="#FFFFFF" fontSize="11">
                    70% Balance + s.44 Storage
                  </text>
                  <text x="680" y="187" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                    + Custom Foil &amp; BMW Disposal Cost
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold uppercase text-emerald-700">
                    Track A: Micro / Small Udyam Unit
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    MSMED s.16 + Income Tax s.43B(h) Notice
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Enforces 3x RBI compound interest and buyer tax disallowance at financial year-end.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <p className="text-xs font-bold uppercase text-amber-700">
                    Track B: Sham Quality Dispute
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    7-Day NABL / Form 39 Lab Testing Ultimatum
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Locks Schedule M QA retention samples and establishes deemed acceptance u/s 42 SoGA.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <p className="text-xs font-bold uppercase text-[#DC2626]">
                    Track C: Security Cheque Held
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    7-Day Crystallization + NI Act s.138 &amp; s.143A
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Lawfully completes cheque for unpaid 70% balance and triggers criminal summons.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Enforcement Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  CDMO Statutory Enforcement Matrix
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Contract manufacturers recover faster when they stack commercial, tax, and criminal
                remedies simultaneously instead of relying on a single civil suit.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="p-3.5 font-bold">Statute &amp; Provision</th>
                      <th className="p-3.5 font-bold">CDMO Trigger Condition</th>
                      <th className="p-3.5 font-bold">Financial &amp; Legal Leverage</th>
                      <th className="p-3.5 font-bold">Forum / Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">
                        Sale of Goods Act, 1930 (ss. 44 &amp; 55)
                      </td>
                      <td className="p-3.5">
                        Buyer refuses to pay 70% balance or lift ready custom-printed batch
                      </td>
                      <td className="p-3.5">
                        Full unpaid price + daily warehouse/quarantine storage &amp; custody charges
                      </td>
                      <td className="p-3.5">Commercial Court / Order XXXVII CPC (6–12 mo)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        MSMED Act, 2006 (ss. 15–18)
                      </td>
                      <td className="p-3.5">
                        Micro/Small Udyam unit unpaid &gt; 45 days from batch readiness/invoice
                      </td>
                      <td className="p-3.5">
                        Principal + <strong>3&times; RBI Bank Rate</strong> compound monthly interest;
                        75% pre-deposit for buyer appeal (s.19)
                      </td>
                      <td className="p-3.5">MSEFC Samadhaan (90-day statutory target)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">
                        Income Tax Act, 1961 (s. 43B(h))
                      </td>
                      <td className="p-3.5">
                        Buyer fails to pay Micro/Small manufacturer within 15/45 days
                      </td>
                      <td className="p-3.5">
                        Disallows buyer&apos;s purchase expense deduction in Form 3CD Clause 22,
                        adding ~30% corporate tax hit
                      </td>
                      <td className="p-3.5">Pre-31 March CFO Tax Advisory Notice</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act, 1881 (ss. 20, 138 &amp; 143A)
                      </td>
                      <td className="p-3.5">
                        Dishonour of PDC or crystallized dealer/PCD security cheque
                      </td>
                      <td className="p-3.5">
                        Criminal prosecution + up to 20% mandatory interim compensation u/s 143A
                      </td>
                      <td className="p-3.5">JMFC Court at manufacturer&apos;s home bank</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">
                        Drugs &amp; Cosmetics Act / Contract Act s.73
                      </td>
                      <td className="p-3.5">
                        Custom foil/carton stock nears expiry and cannot be re-labelled (s.17)
                      </td>
                      <td className="p-3.5">
                        Indemnity for unused printed cylinders/foils + BMW incineration cost
                      </td>
                      <td className="p-3.5">Pre-Destruction Notice + Civil/MSEFC Claim</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: COA & Sham Rejections */}
            <section
              id="heading-coa-rejection"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Defeating Sham Quality Rejections With Approved COA
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a PCD marketing company runs out of liquidity, its most common stalling tactic
                is sending a vague WhatsApp message claiming &ldquo;tablet mottling,&rdquo;
                &ldquo;strip pin-hole,&rdquo; or &ldquo;assay variation&rdquo; weeks after the
                batch cleared Quality Assurance. Under <strong>Section 42 of the Sale of Goods Act, 1930</strong>,
                a buyer cannot manufacture an unverified quality dispute after approving pre-dispatch
                samples or failing to inspect within the contractual window.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Your QA Evidentiary Shield
                  </p>
                  <ul className="text-xs sm:text-sm text-emerald-900 space-y-1.5 list-disc pl-4">
                    <li>Signed Certificate of Analysis (COA) aligned with IP/BP/USP monographs</li>
                    <li>Batch Manufacturing Record (BMR) &amp; Batch Packaging Record (BPR)</li>
                    <li>Buyer&apos;s written email/WhatsApp sign-off on cylinder &amp; carton artwork</li>
                    <li>Sealed Schedule M retention/control samples in stability chambers</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                    How to Foreclose the &ldquo;Pre-Existing Dispute&rdquo; Trap
                  </p>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    If you plan to escalate to NCLT under IBC or MSEFC arbitration, never leave a
                    quality email unanswered. Immediately serve an Advocate Rebuttal offering{" "}
                    <strong>7-day joint testing at an NABL / CDSCO-approved Form 39 lab</strong> at
                    the buyer&apos;s cost. When the buyer refuses to pay for joint testing, their
                    objection is exposed as a sham defense.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 CDMO Batch Failure Scenarios &amp; Action Protocols
                </h2>
              </div>

              <CdmoBatchScenarioTabs />
            </section>

            {/* Section 6: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Recovery Ledger: ₹18L Baddi Formulation Batch
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider a typical Micro/Small formulation unit in Baddi manufacturing 1,00,000
                tablets (10,000 boxes) for a Chandigarh PCD marketing company at ₹18,00,000 total
                value. The buyer pays ₹5,40,000 (30% advance) and stalls the ₹12,60,000 balance for
                120 days after COA readiness.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Statutory Claim Computation (Illustrative @ 6.5% RBI Bank Rate)
                  </span>
                  <span className="text-xs text-slate-400">MSMED s.16 + SoGA s.44</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-300">Total Batch Contract Value</span>
                    <span className="font-bold text-white">&#8377;18,00,000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-300">Less: 30% Advance Received</span>
                    <span className="font-bold text-emerald-400">- &#8377;5,40,000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-300">Unpaid 70% Principal Balance</span>
                    <span className="font-bold text-white">&#8377;12,60,000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-300">
                      s.44 Quarantine Storage &amp; Unused Foil Stock
                    </span>
                    <span className="font-bold text-amber-400">+ &#8377;85,000</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-300">
                      MSMED s.16 Interest (19.5% p.a. compound, 120d)
                    </span>
                    <span className="font-bold text-red-400">+ &#8377;82,950</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-300">Buyer s.43B(h) Tax Disallowance Exposure</span>
                    <span className="font-bold text-amber-300">~&#8377;3,78,000 extra tax</span>
                  </div>
                </div>

                <div className="bg-emerald-950/60 border border-emerald-700/60 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-emerald-300 font-bold">
                      Total Enforceable Creditor Claim (Excluding Tax Hit)
                    </p>
                    <p className="text-xs text-slate-300">
                      Verify exact monthly compounding on your invoices using our interactive tool.
                    </p>
                  </div>
                  <p className="text-2xl font-black text-emerald-400">&#8377;14,27,950</p>
                </div>
              </div>
            </section>

            {/* Section 7: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  CDMO Evidence &amp; BSA 2023 Section 63 Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before serving a statutory demand or filing before MSEFC / Commercial Court,
                compile this 8-point dossier certified under{" "}
                <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> for
                electronic records:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {[
                  "Signed Third-Party / Loan-License Manufacturing Agreement & PO",
                  "30% Advance Bank UTR / RTGS Credit Advice",
                  "Email / WhatsApp Artwork Approval for Branded Foil & Cartons",
                  "Signed Certificate of Analysis (COA) & BMR Summary",
                  "Written Notice of Batch Readiness & Proforma / GST Tax Invoice",
                  "Dated Quarantine Bay Photographs & Storage Cost Schedule",
                  "Valid Udyam Registration Certificate (Micro or Small)",
                  "Copy of Security Cheque & 7-Day Crystallization Notice",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <span className="text-emerald-600 font-black mt-0.5">&#10003;</span>
                    <span className="text-slate-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: 5-Step Playbook & Dual-Track CTA */}
            <section
              id="heading-action-playbook"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  5-Step CDMO Recovery Playbook &amp; Immediate Notice Dispatch
                </h2>
              </div>

              <ol className="space-y-3 text-sm text-slate-700 list-decimal pl-5">
                <li>
                  <strong>Day 1–7:</strong> Issue formal Batch Readiness + COA Notice triggering Sale
                  of Goods Act s.44 quarantine storage charges.
                </li>
                <li>
                  <strong>Day 8–15:</strong> Dispatch Fact-Verified Legal Notice citing MSMED s.16 (3x RBI
                  compound interest) and Income Tax s.43B(h) disallowance.
                </li>
                <li>
                  <strong>Day 16–22:</strong> Counter any quality excuse with a 7-day NABL / Form 39
                  joint-testing ultimatum.
                </li>
                <li>
                  <strong>Day 23–30:</strong> Serve 7-day security cheque crystallization notice and
                  present cheque for s.138 NI Act prosecution.
                </li>
                <li>
                  <strong>Day 45+:</strong> File online on MSME Samadhaan (MSEFC) or institute an
                  Order XXXVII CPC Summary Suit before shelf-life erosion.
                </li>
              </ol>

              <CdmoBatchCTA />
            </section>

            {/* Section 9: Related Pharma Tools & Guides */}
            <section
              id="heading-related-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Pharma Recovery Tools, Notice Templates &amp; Sibling Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-[#DC2626]">
                    Interactive Calculator (T1)
                  </span>
                  <span className="font-bold text-slate-900">
                    MSME Delayed Payment 3x RBI Compound Interest Calculator
                  </span>
                </Link>
                <Link
                  href="/templates/pharma-surgical-stockist-ledger-demand-legal-notice"
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-[#DC2626]">
                    Editable Notice Workspace (P1)
                  </span>
                  <span className="font-bold text-slate-900">
                    Pharma &amp; Surgical Stockist Demand Notice Format
                  </span>
                </Link>
                <Link
                  href="/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice"
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-[#DC2626]">
                    Tax Disallowance Pack (P1)
                  </span>
                  <span className="font-bold text-slate-900">
                    2-Stage Section 43B(h) CFO Advisory &amp; s.16 Notice
                  </span>
                </Link>
                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-slate-500">
                    Statute Deep-Dive
                  </span>
                  <span className="font-bold text-slate-900">
                    Section 43B(h) MSME 45-Day Payment Rule Explained
                  </span>
                </Link>
                <Link
                  href="/pharma-expired-goods-breakage-credit-note-dispute-stockist-recovery"
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-slate-500">
                    Sibling Spoke
                  </span>
                  <span className="font-bold text-slate-900">
                    Defeating Arbitrary Expired &amp; Breakage Return Deductions
                  </span>
                </Link>
                <Link
                  href="/cardiac-stent-orthopedic-implant-hospital-consignment-dues-recovery"
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-slate-500">
                    Sibling Spoke
                  </span>
                  <span className="font-bold text-slate-900">
                    Cardiac Stent &amp; Ortho Implant Hospital Consignment Recovery
                  </span>
                </Link>
                <Link
                  href="/medical-equipment-hospital-supply-amc-cmc-payment-default-recovery"
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-slate-500">
                    Sibling Spoke
                  </span>
                  <span className="font-bold text-slate-900">
                    Medical Equipment Milestone &amp; Hospital AMC/CMC Recovery
                  </span>
                </Link>
                <Link
                  href="/send-a-legal-notice/pharmacy-invoice-not-cleared"
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase text-slate-500">
                    Seed Asset
                  </span>
                  <span className="font-bold text-slate-900">
                    Send Legal Notice for Uncleared Pharmacy &amp; Distributor Invoices
                  </span>
                </Link>
                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors sm:col-span-2"
                >
                  <span className="block text-[10px] font-bold uppercase text-slate-500">
                    Channel Recovery Seed
                  </span>
                  <span className="font-bold text-slate-900">
                    Distributor &amp; Dealer Channel Credit Dues Recovery Guide
                  </span>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: Pharma CDMO Batch Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors"
                  >
                    <summary className="cursor-pointer list-none p-4 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline underline-offset-4"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-slate-500 pt-3 border-t border-slate-100">
                Reviewed by <strong>Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal
                Solutions. This operational playbook provides statutory guidance for B2B
                pharmaceutical manufacturers and does not substitute case-specific legal counsel.
              </p>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
