import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import NbfcSaasTableOfContents from "./NbfcSaasTableOfContents";
import NbfcVendorScenarioTabs from "./NbfcVendorScenarioTabs";
import NbfcVendorComparisonCTA from "./NbfcVendorComparisonCTA";

export const revalidate = 86400;

const PAGE_URL = "/credgenics-spocto-alternative-mid-market-nbfc-legal-notice-platform";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Debt Collection SaaS vs Pay-Per-Notice Legal Desk for NBFCs";
const PAGE_DESCRIPTION =
  "Comparing Credgenics/Spocto enterprise SaaS suites vs LegalRecovery's zero-lock-in Advocate Notice + Email/WhatsApp/Speed Post RPAD + Reply Triage engine.";
const H1_TEXT =
  "Enterprise Collection SaaS vs Advocate-Backed Bulk Legal Desk: A CFO's Comparison for Mid-Market NBFCs & Fintechs";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQS = [
  {
    question:
      "Can pure debt collection SaaS platforms issue formal Legal Notices under Indian law?",
    answer:
      "No. Under Sections 29 and 33 of the Advocates Act, 1961, only an Advocate enrolled with a State Bar Council is legally authorized to practice law and issue formal Advocate Legal Notices. Software platforms can automate SMS, WhatsApp, or generic dunning reminders, but an NBFC using pure SaaS must still empanel and pay external law firms separately to issue statutory demand notices under Section 25 PSS Act, Section 138 NI Act, or Section 21 Arbitration Act.",
  },
  {
    question:
      "Why do mid-market NBFCs (₹50 Cr–₹2,000 Cr AUM) struggle with enterprise collection SaaS contracts?",
    answer:
      "Enterprise collection suites are typically priced for Tier-1 banks with massive monthly delinquency volumes, bundling multi-lakh annual platform licenses, minimum monthly seat commitments, and 8–16 week API integration cycles. Mid-market NBFCs and digital lenders issuing 150 to 2,500 legal notices per month end up paying a high fixed SaaS overhead on top of separate external advocate fees.",
  },
  {
    question:
      "How does LegalRecovery.in differ from Credgenics or Spocto for legal notice automation?",
    answer:
      "Credgenics and Spocto operate primarily as enterprise debt collection SaaS suites covering dialers, field app tracking, and workflow automation, where legal notices still depend on external advocate panels. LegalRecovery.in is an Advocate-backed Bulk Legal Desk that bundles batch CSV notice automation (Email + WATI WhatsApp + India Post Speed Post RPAD) with in-house legal representation from AMA Legal Solutions on a zero-lock-in, pay-per-notice or flexible retainer model.",
  },
  {
    question:
      "Does LegalRecovery.in handle borrower replies and dispute claims after bulk dispatch?",
    answer:
      "Yes. Unlike pure software tools that leave inbound borrower emails and advocate counter-notices in an unmonitored ticketing queue, LegalRecovery.in provides structured Reply Triage. AMA Legal Solutions advocates categorize replies into settlement offers, EMI restructuring requests, genuine billing disputes, or tactical delays, issuing compliant responses and routing unresolved accounts to Online Dispute Resolution (ODR).",
  },
  {
    question:
      "How are Email and WhatsApp legal notices made admissible in Indian courts?",
    answer:
      "Every Email and WATI WhatsApp notice dispatched through LegalRecovery.in is logged with timestamped delivery receipts, server headers, and cryptographic hash metadata backed by a Section 63 certificate under the Bharatiya Sakshya Adhiniyam (BSA), 2023—which replaced Section 65B of the Indian Evidence Act. Paired with India Post Speed Post RPAD tracking, this creates an audit-proof evidentiary record.",
  },
  {
    question:
      "Can an NBFC test the platform on one overdue loan before signing a bulk arrangement?",
    answer:
      "Yes. CFOs and VP Collections can run a live single-case test for ₹999 via /user/new-recovery—covering Advocate drafting, Email, WhatsApp, and Speed Post RPAD—without annual commitments. Once satisfied with turnaround time and settlement response, teams can upload 10 to 10,000+ accounts via CSV through the Institutional Batch Desk.",
  },
  {
    question:
      "Is the bundled Advocate Legal Desk compliant with RBI Fair Practices Code and Digital Lending Guidelines?",
    answer:
      "Yes. Shifting 30–90 DPD accounts from aggressive telecalling to formal Advocate Legal Notices eliminates 8 AM–7 PM calling-window violations, third-party shaming exposure, and rogue recovery agent liability, while maintaining transparent, uncompounded penal charge disclosures in line with RBI directives.",
  },
];

const PRIMARY_SOURCES = [
  {
    title:
      "The Advocates Act, 1961 (Sections 29 & 33 — Advocates Alone Entitled to Practice Law & Issue Formal Legal Notices)",
    url: "https://www.indiacode.nic.in/handle/123456789/1631",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records & Server Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer / e-NACH)",
    url: "https://www.indiacode.nic.in/handle/123456789/2067",
  },
  {
    title:
      "Reserve Bank of India (RBI) — Master Direction on Regulatory Framework for Digital Lending & Recovery Conduct",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12382",
  },
  {
    title:
      "India Post — Registered Post & Speed Post Tracking Portal (Physical RPAD Service Verification)",
    url: "https://www.indiapost.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-14T15:00:00+05:30",
  dateModified: "2026-11-14T15:00:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/authors`,
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
};

const TABLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Table",
  about:
    "CFO Vendor Evaluation Matrix comparing Enterprise Collection SaaS Suites (Credgenics / Spocto) against LegalRecovery.in Advocate-Backed Bulk Legal Desk for Mid-Market NBFCs and Fintechs",
  mainEntityOfPage: CANONICAL_URL,
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
      name: "NBFC & Fintech Recovery Hub",
      item: `${SITE_URL}/industries/nbfc-fintech-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Enterprise SaaS vs Bulk Legal Desk",
      item: CANONICAL_URL,
    },
  ],
};

export default function CredgenicsSpoctoAlternativeNbfcPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TABLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-02 &bull; Mid-Market NBFC &amp; Fintech Procurement</span>
              <span>&bull;</span>
              <span>CFO Vendor Comparison</span>
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 word Executive Creditor Answer with inline Parent Hub link */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer
              </span>
              Under the Advocates Act, 1961, pure collection SaaS suites like Credgenics or Spocto
              cannot issue formal Legal Notices without separate external law-firm panels. Within
              our{" "}
              <Link
                href="/industries/nbfc-fintech-loan-recovery"
                className="text-red-300 underline hover:text-white font-bold"
              >
                NBFC &amp; Fintech Loan Recovery Hub
              </Link>
              , LegalRecovery.in bundles CSV batch dispatch (Email + WATI WhatsApp + Speed Post
              RPAD) with AMA Legal Solutions representation on a zero-lock-in per-notice model.
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">₹0 Lock-In</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  No Annual SaaS Platform Fee
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">1-Stop Desk</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Software + AMA Legal Advocates
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">Tri-Channel</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Email + WATI + Speed Post RPAD
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">BSA s.63</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Hash Logs + Reply Triage
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs
            items={[
              {
                label: "NBFC & Fintech Recovery Hub",
                href: "/industries/nbfc-fintech-loan-recovery",
              },
              {
                label: "Enterprise SaaS vs Bulk Legal Desk",
                href: PAGE_URL,
              },
            ]}
          />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
            <NbfcSaasTableOfContents />

            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Advocates Act 1961 Gap */}
              <section
                id="heading-advocates-act-gap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    The Advocates Act 1961 Gap in Pure Collection SaaS
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  When a mid-market NBFC or digital lending fintech (₹50 Cr to ₹2,000 Cr AUM)
                  evaluates debt collection automation, procurement teams typically demo enterprise
                  SaaS platforms such as Credgenics or Spocto. Those suites are engineered for
                  high-headcount bank collection floors: predictive dialers, field-agent GPS
                  tracking, and omnichannel dunning workflows. However, CFOs and General Counsel
                  frequently uncover a structural statutory surprise only after signing an annual
                  platform contract.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Under <strong>Sections 29 and 33 of the Advocates Act, 1961</strong>, software
                  companies cannot practice law or issue formal pre-litigation Legal Notices in
                  their own corporate capacity. Only an enrolled Advocate registered with a State Bar
                  Council—or an empaneled law firm—can issue a legally valid statutory demand notice
                  for{" "}
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="text-[#DC2626] font-semibold underline hover:text-red-800"
                  >
                    NBFC unpaid dues recovery
                  </Link>
                  , Section 25 PSS Act e-NACH dishonours, or Section 21 Arbitration invocations.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
                    The Hidden &ldquo;Two-Vendor Tax&rdquo; for Mid-Market Lenders
                  </p>
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                    Buying a pure collection SaaS license solves message orchestration, not legal
                    representation. Your NBFC still has to separately empanel external advocates,
                    negotiate per-notice drafting fees, hand over borrower KYC extracts, reconcile
                    India Post Speed Post RPAD slips, and hire internal legal executives to triage
                    borrower replies.
                  </p>
                </div>
              </section>

              {/* Section 2: Side-by-Side Comparison Matrix */}
              <section
                id="heading-vendor-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Vendor Matrix: Enterprise SaaS vs Advocate-Backed Legal Desk
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Below is an objective CFO evaluation matrix comparing enterprise collection SaaS
                  suites against LegalRecovery.in&apos;s bundled batch-dispatch and AMA Legal
                  Solutions advocate representation model for mid-market NBFCs and fintechs.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold border-b border-slate-700">
                          Evaluation Criterion
                        </th>
                        <th className="p-3.5 font-bold border-b border-slate-700">
                          Enterprise Collection SaaS (Credgenics / Spocto Class)
                        </th>
                        <th className="p-3.5 font-bold border-b border-slate-700 text-red-300">
                          LegalRecovery.in + AMA Legal Solutions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white">
                        <td className="p-3.5 font-bold text-slate-900">
                          Commercial &amp; Lock-In Model
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Annual SaaS subscription + setup/implementation fee + minimum monthly
                          volume commitments
                        </td>
                        <td className="p-3.5 text-emerald-800 font-semibold bg-emerald-50/40">
                          Zero annual lock-in; pay-per-notice (₹999 single test) or flexible batch
                          CSV retainer
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          Advocates Act, 1961 Authority
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Software vendor only; NBFC must separately empanel &amp; pay external law
                          firms
                        </td>
                        <td className="p-3.5 text-emerald-800 font-semibold bg-emerald-50/40">
                          Bundled AMA Legal Solutions enrolled Advocates sign &amp; issue every
                          statutory notice
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3.5 font-bold text-slate-900">
                          Tri-Channel Batch Dispatch
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Requires configuring separate SMS/WhatsApp BSPs, email relays, and postal
                          vendors
                        </td>
                        <td className="p-3.5 text-emerald-800 font-semibold bg-emerald-50/40">
                          Turnkey Email + verified WATI WhatsApp + India Post Speed Post RPAD in one
                          engine
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          Borrower Reply Triage
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Ticket queue routed back to NBFC&apos;s internal ops or legal team
                        </td>
                        <td className="p-3.5 text-emerald-800 font-semibold bg-emerald-50/40">
                          Advocate-led Reply Triage (Settlement vs Restructuring vs Dispute) + ODR
                          handoff
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3.5 font-bold text-slate-900">
                          BSA 2023 s.63 Admissibility
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Delivery logs exported; NBFC counsel drafts Section 63 certificates
                          manually
                        </td>
                        <td className="p-3.5 text-emerald-800 font-semibold bg-emerald-50/40">
                          Timestamped server-hash logs + Speed Post RPAD slips archived for court
                          filing
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          Time to First Legal Notice
                        </td>
                        <td className="p-3.5 text-slate-700">
                          6–14 weeks (API/LOS integration, UAT, and external law-firm onboarding)
                        </td>
                        <td className="p-3.5 text-emerald-800 font-semibold bg-emerald-50/40">
                          Same-day single-case test; &lt;24–48 hours for 10 to 10,000+ CSV batch
                          launch
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3.5 font-bold text-slate-900">
                          Post-Notice Escalation Continuity
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Separate litigation vendor required for s.25 PSS Act, ODR, or Arbitration
                        </td>
                        <td className="p-3.5 text-emerald-800 font-semibold bg-emerald-50/40">
                          Seamless transition into ODR, Section 25 PSS Act, or Section 21
                          Arbitration
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Architecture SVG Diagram */}
              <section
                id="heading-architecture-flow"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Architecture: SaaS Fragmentation vs Bundled Legal Desk
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  The operational difference between a software-only collection suite and an
                  Advocate-backed legal notice desk comes down to eliminating vendor handoff
                  latency. Every handoff between LOS export, SaaS workflow, external law firm, and
                  postal printer adds 5–12 days of slippage—often risking the 30-day statutory clock
                  under Section 25 of the Payment and Settlement Systems Act.
                </p>

                {/* Desktop SVG Flow */}
                <div className="hidden md:block bg-slate-900 rounded-2xl p-5 border border-slate-800 overflow-x-auto">
                  <svg
                    viewBox="0 0 820 310"
                    width={820}
                    height={310}
                    className="w-full h-auto"
                    role="img"
                    aria-label="Architecture comparison between two-vendor Enterprise SaaS plus Law Firm model versus single-desk LegalRecovery plus AMA Legal Solutions model"
                  >
                    {/* Track A Label */}
                    <text x="20" y="30" fill="#94A3B8" fontSize="12" fontWeight="700">
                      LEGACY 2-VENDOR MODEL (ENTERPRISE SAAS + SEPARATE LAW FIRM)
                    </text>

                    {/* Track A Boxes */}
                    <rect x="20" y="45" width="165" height="68" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="102" y="73" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">1. Annual SaaS License</text>
                    <text x="102" y="93" textAnchor="middle" fill="#94A3B8" fontSize="10">Setup Fee + Seat Lock-In</text>

                    <line x1="185" y1="79" x2="215" y2="79" stroke="#64748B" strokeWidth="2" />
                    <polygon points="215,74 225,79 215,84" fill="#64748B" />

                    <rect x="225" y="45" width="175" height="68" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="312" y="73" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">2. External Law Panel</text>
                    <text x="312" y="93" textAnchor="middle" fill="#F59E0B" fontSize="10">Advocates Act s.29/33 Fee</text>

                    <line x1="400" y1="79" x2="430" y2="79" stroke="#64748B" strokeWidth="2" />
                    <polygon points="430,74 440,79 430,84" fill="#64748B" />

                    <rect x="440" y="45" width="175" height="68" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="527" y="73" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">3. Disconnected RPAD</text>
                    <text x="527" y="93" textAnchor="middle" fill="#94A3B8" fontSize="10">Manual Tracking &amp; Logs</text>

                    <line x1="615" y1="79" x2="645" y2="79" stroke="#64748B" strokeWidth="2" />
                    <polygon points="645,74 655,79 645,84" fill="#64748B" />

                    <rect x="655" y="45" width="145" height="68" rx="10" fill="#450A0A" stroke="#DC2626" strokeWidth="1.5" />
                    <text x="727" y="73" textAnchor="middle" fill="#FCA5A5" fontSize="12" fontWeight="700">4. Unmanaged Replies</text>
                    <text x="727" y="93" textAnchor="middle" fill="#FECACA" fontSize="10">Internal Legal Bottleneck</text>

                    {/* Divider */}
                    <line x1="20" y1="145" x2="800" y2="145" stroke="#334155" strokeDasharray="6 4" strokeWidth="1.5" />

                    {/* Track B Label */}
                    <text x="20" y="180" fill="#FCA5A5" fontSize="12" fontWeight="800">
                      BUNDLED LEGALRECOVERY.IN + AMA LEGAL SOLUTIONS DESK (ZERO LOCK-IN)
                    </text>

                    {/* Track B Boxes */}
                    <rect x="20" y="198" width="175" height="78" rx="10" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                    <text x="107" y="226" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="800">1. CSV / ₹999 Test</text>
                    <text x="107" y="246" textAnchor="middle" fill="#E2E8F0" fontSize="10">Zero Annual Platform Fee</text>
                    <text x="107" y="262" textAnchor="middle" fill="#94A3B8" fontSize="10">10 to 10,000+ Cases</text>

                    <line x1="195" y1="237" x2="225" y2="237" stroke="#10B981" strokeWidth="2" />
                    <polygon points="225,232 235,237 225,242" fill="#10B981" />

                    <rect x="235" y="198" width="180" height="78" rx="10" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                    <text x="325" y="226" textAnchor="middle" fill="#FCA5A5" fontSize="12" fontWeight="800">2. Advocate Drafting</text>
                    <text x="325" y="246" textAnchor="middle" fill="#E2E8F0" fontSize="10">AMA Legal Solutions Panel</text>
                    <text x="325" y="262" textAnchor="middle" fill="#94A3B8" fontSize="10">PSS s.25 / NI s.138 / Arb s.21</text>

                    <line x1="415" y1="237" x2="445" y2="237" stroke="#10B981" strokeWidth="2" />
                    <polygon points="445,232 455,237 445,242" fill="#10B981" />

                    <rect x="455" y="198" width="175" height="78" rx="10" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                    <text x="542" y="226" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="800">3. Tri-Channel Serve</text>
                    <text x="542" y="246" textAnchor="middle" fill="#E2E8F0" fontSize="10">Email + WATI + Speed Post</text>
                    <text x="542" y="262" textAnchor="middle" fill="#94A3B8" fontSize="10">BSA 2023 s.63 Hash Logs</text>

                    <line x1="630" y1="237" x2="660" y2="237" stroke="#10B981" strokeWidth="2" />
                    <polygon points="660,232 670,237 660,242" fill="#10B981" />

                    <rect x="670" y="198" width="130" height="78" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                    <text x="735" y="226" textAnchor="middle" fill="#A7F3D0" fontSize="12" fontWeight="800">4. Reply Triage</text>
                    <text x="735" y="246" textAnchor="middle" fill="#ECFDF5" fontSize="10">Settlement / ODR</text>
                    <text x="735" y="262" textAnchor="middle" fill="#A7F3D0" fontSize="10">Single-Desk Closure</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1">
                      Legacy 2-Vendor SaaS + Law Firm Loop
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Annual SaaS License &rarr; Separate Law-Firm Empanelment &rarr; Disconnected
                      RPAD Tracking &rarr; Unmanaged Borrower Replies.
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
                      Bundled LegalRecovery + AMA Legal Desk
                    </p>
                    <p className="text-xs text-emerald-950 leading-relaxed">
                      Zero-Lock-In CSV / ₹999 Test &rarr; Enrolled Advocate Drafting &rarr; Email +
                      WATI WhatsApp + Speed Post RPAD &rarr; Advocate Reply Triage &amp; ODR.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Selector */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Scenario Selector: Mid-Market NBFC &amp; Fintech Vendor Fit
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Select your lending profile below to evaluate how enterprise collection SaaS
                  contracts compare against a bundled, pay-per-notice Advocate Legal Desk across
                  AUM tiers, e-NACH velocity, Reply Triage, and multi-statute portfolios.
                </p>

                <NbfcVendorScenarioTabs />
              </section>

              {/* Section 5: Worked CFO TCO Ledger */}
              <section
                id="heading-tco-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Total Cost of Ownership: ₹250 Cr AUM NBFC Ledger
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  To make the boardroom math concrete, consider an illustrative mid-market NBFC with{" "}
                  <strong>₹250 Cr AUM</strong> issuing approximately{" "}
                  <strong>2,400 formal legal notices per year</strong> (200 overdue accounts/month
                  crossing 30–60 DPD or e-NACH bounce). Below is how fixed SaaS overhead plus
                  external advocate fees compare against a zero-lock-in bundled desk.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                      Model A: Enterprise SaaS + External Law Panel
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li className="flex justify-between border-b border-slate-200 pb-1.5">
                        <span>Annual SaaS Platform &amp; Setup Allocation</span>
                        <span className="font-bold text-slate-900">Fixed Annual Capex/Opex</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-200 pb-1.5">
                        <span>External Advocate Drafting (2,400 notices)</span>
                        <span className="font-bold text-slate-900">Separate Law-Firm Billing</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-200 pb-1.5">
                        <span>Speed Post RPAD + WATI BSP + Email Relay</span>
                        <span className="font-bold text-slate-900">3 Separate Vendor Invoices</span>
                      </li>
                      <li className="flex justify-between pt-1">
                        <span>Internal Ops Hours (Reply &amp; RPAD Sync)</span>
                        <span className="font-bold text-[#DC2626]">High Reconciliation Overhead</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-2">
                      Model B: LegalRecovery.in + AMA Legal Solutions
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
                      <li className="flex justify-between border-b border-emerald-200 pb-1.5">
                        <span>Annual SaaS Platform / Seat Lock-In</span>
                        <span className="font-bold text-emerald-700">₹0 (Zero Lock-In)</span>
                      </li>
                      <li className="flex justify-between border-b border-emerald-200 pb-1.5">
                        <span>Single Live Pilot Test (1 Case)</span>
                        <span className="font-bold text-emerald-700">₹999 All-Inclusive</span>
                      </li>
                      <li className="flex justify-between border-b border-emerald-200 pb-1.5">
                        <span>Batch CSV (Advocate + Email + WATI + RPAD)</span>
                        <span className="font-bold text-emerald-700">1 Unified Per-Notice Invoice</span>
                      </li>
                      <li className="flex justify-between pt-1">
                        <span>Reply Triage &amp; ODR Escalation</span>
                        <span className="font-bold text-emerald-700">Bundled AMA Legal Desk</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For small-ticket digital loans and BNPL books, you can also review our{" "}
                  <Link
                    href="/small-ticket-digital-personal-loan-bnpl-recovery-economics"
                    className="text-[#DC2626] font-semibold underline hover:text-red-800"
                  >
                    Small-Ticket Digital Loan &amp; BNPL Recovery Economics
                  </Link>{" "}
                  blueprint, or model statutory timelines with our{" "}
                  <Link
                    href="/tools/cheque-bounce-deadline-calculator"
                    className="text-[#DC2626] font-semibold underline hover:text-red-800"
                  >
                    Cheque &amp; e-NACH Bounce Deadline Calculator
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="text-[#DC2626] font-semibold underline hover:text-red-800"
                  >
                    SARFAESI &amp; DRT Recovery Forum Calculator
                  </Link>
                  .
                </p>
              </section>

              {/* Section 6: Tri-Channel Dispatch, Reply Triage & BSA s.63 */}
              <section
                id="heading-dispatch-triage"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Tri-Channel Dispatch, Reply Triage &amp; BSA s.63 Readiness
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  High-performing NBFC recovery is not about sending generic reminders; it is about
                  establishing legally unimpeachable service and converting borrower responses into
                  collections. Our{" "}
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="text-[#DC2626] font-semibold underline hover:text-red-800"
                  >
                    Bulk Email, WhatsApp &amp; Speed Post RPAD Solution
                  </Link>{" "}
                  executes three coordinated layers on every CSV batch:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/70">
                    <h3 className="text-sm font-black text-slate-900 mb-1.5">
                      1. Tri-Channel Statutory Service
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every notice goes out simultaneously via verified Email, official WATI
                      WhatsApp Business API, and physical India Post Speed Post RPAD—preventing
                      &ldquo;address not found&rdquo; or &ldquo;never received&rdquo; defences in
                      court.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/70">
                    <h3 className="text-sm font-black text-slate-900 mb-1.5">
                      2. Advocate Reply Triage &amp; ODR
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Inbound borrower replies are triaged by legal associates into settlement,
                      part-payment, or dispute buckets, with seamless escalation to{" "}
                      <Link
                        href="/online-dispute-resolution-india"
                        className="text-[#DC2626] font-semibold underline hover:text-red-800"
                      >
                        Online Dispute Resolution (ODR)
                      </Link>
                      .
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/70">
                    <h3 className="text-sm font-black text-slate-900 mb-1.5">
                      3. BSA 2023 s.63 &amp; RBI Audit Logs
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Server timestamps, cryptographic hashes, and Speed Post RPAD tracking IDs are
                      archived per Loan ID—keeping your NBFC compliant with{" "}
                      <Link
                        href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                        className="text-[#DC2626] font-semibold underline hover:text-red-800"
                      >
                        RBI Recovery Agent Directions
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Need a reference format for your internal legal team before batch onboarding?
                  Review our{" "}
                  <Link
                    href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                    className="text-[#DC2626] font-semibold underline hover:text-red-800"
                  >
                    Bank &amp; NBFC Loan Recall cum Guarantee Invocation Notice Template
                  </Link>
                  .
                </p>
              </section>

              {/* Section 7: CFO Procurement Checklist */}
              <section
                id="heading-cfo-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    CFO Vendor Evaluation Checklist Before Signing Annual SaaS
                  </h2>
                </div>

                <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal pl-5">
                  <li>
                    <strong>Verify Advocates Act s.29/s.33 Coverage:</strong> Confirm whether the
                    vendor includes enrolled Advocate signatures on letterhead or requires a
                    separate external law-firm retainer.
                  </li>
                  <li>
                    <strong>Audit Total Year-1 TCO:</strong> Add platform license + API setup fee +
                    minimum monthly commitment + external advocate fee + Speed Post RPAD + WhatsApp
                    BSP charges before comparing quotes.
                  </li>
                  <li>
                    <strong>Test Reply Triage Ownership:</strong> Ask who reads and responds to
                    borrower counter-notices and Ombudsman threats after a 1,000-notice batch goes
                    live.
                  </li>
                  <li>
                    <strong>Inspect BSA 2023 s.63 Evidence Exports:</strong> Ensure the platform
                    generates court-admissible electronic server logs alongside India Post RPAD
                    receipts.
                  </li>
                  <li>
                    <strong>Check RBI Penal Charges Separation:</strong> Verify that notice ledgers
                    separate principal, contractual interest, and uncompounded penal charges.
                  </li>
                  <li>
                    <strong>Demand a Single-Case Live Pilot:</strong> Run 1 real overdue loan (for
                    example, our ₹999 test) before committing to an annual enterprise contract.
                  </li>
                </ol>
              </section>

              {/* Dual-Track B2B CTA */}
              <NbfcVendorComparisonCTA />

              {/* Section 8: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    FAQs: Credgenics &amp; Spocto Alternatives for Mid-Market NBFCs
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-slate-200 bg-slate-50/70 p-4 open:bg-white open:shadow-xs transition-all"
                    >
                      <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-black text-lg leading-none group-open:rotate-45 transition-transform">
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

              {/* Section 9: Statutory Authorities & Official Regulatory Portals */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Statutory Authorities &amp; Official Regulatory Portals
                  </h2>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                      >
                        {source.title}
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
    </>
  );
}
