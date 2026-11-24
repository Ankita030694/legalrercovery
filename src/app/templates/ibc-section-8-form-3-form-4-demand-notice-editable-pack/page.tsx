import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import IbcNoticeCTA from "./IbcNoticeCTA";
import IbcNoticeTOC from "./IbcNoticeTOC";
import IbcNoticeWorkspace from "./IbcNoticeWorkspace";

export const revalidate = 86400;

const PAGE_PATH = "/templates/ibc-section-8-form-3-form-4-demand-notice-editable-pack";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Statutory IBC Section 8 Operational Creditor Pack: Editable Form 3, Form 4, Default-Computation Sheet & Board Resolution (Rule 5 Compliant)";

const META_TITLE = "IBC Section 8 Form 3 & Form 4 Demand Notice Word Pack";
const META_DESCRIPTION =
  "NCLT rejects Section 9 petitions if Form 3/Form 4 omits Rule 5 clauses or Board Resolution. Download editable Word pack + have AMA Legal serve & track.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("IBC Section 8 Form 3 and Form 4 Demand Notice Word Pack"),
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

const FAQS = [
  {
    question: "Should an operational creditor serve Form 3 or Form 4 under Rule 5?",
    answer:
      "Under Rule 5(1) of the Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016, Form 3 is the primary statutory demand notice detailing the operational debt, default date, and supporting documents. Form 4 is a shorter covering notice specifically attached to copies of unpaid invoices demanding payment. In practice, corporate litigators serve Form 3 accompanied by Form 4 and the unpaid invoices together so the Corporate Debtor cannot raise technical objections at the NCLT Section 9 admission stage.",
  },
  {
    question: "Is a Board Resolution mandatory before issuing an IBC Section 8 Demand Notice?",
    answer:
      "Yes. While the Supreme Court in Macquarie Bank Ltd. v. Shilpi Cable Technologies Ltd. (2018) 2 SCC 674 clarified that an advocate or authorised agent may issue a Section 8 demand notice on the creditor's behalf, NCLT benches routinely scrutinise whether the signatory or instructing officer held valid authority under Section 179 of the Companies Act, 2013 on the date of issuance. Enclosing a certified Board Resolution (or LLP Partner Authorisation) prevents fatal maintainability challenges.",
  },
  {
    question: "Can contractual interest be added to principal to cross the ₹1 Crore IBC threshold?",
    answer:
      "Yes, provided the underlying contract, purchase order, or mutually accepted tax invoice contains an express interest clause. NCLAT rulings confirm that interest agreed in writing forms part of the 'operational debt' under Section 5(21) of the IBC for meeting the ₹1,00,00,000 threshold under Section 4. Unilateral interest printed only at the bottom of an unsigned delivery challan without prior contractual assent is frequently disallowed.",
  },
  {
    question: "What must the Tabular Computation-of-Default Working Sheet contain?",
    answer:
      "Item 4 of Form 3 mandates a tabular working sheet showing each invoice number, invoice date, credit period expiry (due date), exact date of default, principal unpaid, contractual interest calculation, and part-payments adjusted. It must also explicitly confirm that the date of default falls outside the Section 10A suspension window (25 March 2020 to 24 March 2021).",
  },
  {
    question: "How must Form 3 and Form 4 be served under Rule 5(2) for NCLT validity?",
    answer:
      "Rule 5(2) requires delivery at the Corporate Debtor's registered office by hand, registered post, or speed post with acknowledgement due, OR by electronic mail to a whole-time director, designated partner, or key managerial personnel (KMP) of the Corporate Debtor. Best practice is dual simultaneous service—Speed Post RPAD to the MCA-registered office plus KMP email—backed by a BSA 2023 Section 63 certificate.",
  },
  {
    question: "What happens if the Corporate Debtor replies within 10 days with a sham dispute?",
    answer:
      "Under Section 8(2), the Corporate Debtor has 10 days from receipt to show either full repayment or an existing dispute raised prior to the demand notice. Under Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (2018) 1 SCC 353, the NCLT rejects Section 9 only if the dispute is plausible and pre-existing—not a spurious, unsupported assertion fabricated after receiving Form 3.",
  },
  {
    question: "How does AMA Legal Solutions assist with ₹1 Crore+ IBC Section 8 notices?",
    answer:
      "Through LegalRecovery.in, AMA Legal's insolvency and commercial litigation desk audits your invoices, POs, and email correspondence for pre-existing dispute traps, drafts bespoke Rule 5 Form 3/Form 4 packs with Board Resolution and Computation Sheets, and dispatches verifiable Speed Post RPAD and KMP email service with BSA Section 63 electronic evidence logs.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Insolvency and Bankruptcy Code, 2016 — Sections 4, 5(20), 5(21), 8, 9 & 10A (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2154",
  },
  {
    title: "IBBI (Application to Adjudicating Authority) Rules, 2016 — Rule 5, Form 3 & Form 4",
    url: "https://ibbi.gov.in/en/legal-framework/rules",
  },
  {
    title: "Supreme Court: Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (2018) 1 SCC 353",
    url: "https://main.sci.gov.in/supremecourt/2017/25478/25478_2017_Judgement_21-Sep-2017.pdf",
  },
  {
    title: "Ministry of Corporate Affairs (MCA) — Company Master Data & KMP Verification Portal",
    url: "https://www.mca.gov.in/content/mca/global/en/mca/master-data/MDS.html",
  },
  {
    title: "National Company Law Tribunal (NCLT) — e-Filing & Practice Directions",
    url: "https://nclt.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-20T10:00:00+05:30",
  dateModified: "2026-11-20T10:00:00+05:30",
  mainEntityOfPage: PAGE_URL,
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
};

const CREATIVE_WORK_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "IBC Section 8 Form 3, Form 4, Default-Computation Sheet & Board Resolution Editable Word Pack",
  description:
    "Fact-verified Rule 5(1)(a)/(b) statutory demand notice templates, tabular computation of default annexure, and Section 179 Board Resolution for ₹1 Crore+ operational creditors.",
  url: PAGE_URL,
  inLanguage: "en-IN",
  isAccessibleForFree: true,
  encodingFormat: "application/msword",
  author: {
    "@type": "Organization",
    name: "AMA Legal Solutions / LegalRecovery.in",
    url: SITE_URL,
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
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
      name: "Templates",
      item: `${SITE_URL}/templates`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "IBC Section 8 Form 3 & Form 4 Pack",
      item: PAGE_URL,
    },
  ],
};

export default function IbcSection8TemplatePackPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CREATIVE_WORK_SCHEMA) }}
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
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IBC 2016 &bull; Rule 5(1)(a)/(b) Workspace</span>
            <span className="text-slate-500">&bull;</span>
            <span>₹1 Crore+ Operational Creditors</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; Rule 5 Compliance
            </span>
            Under Section 8 of the Insolvency and Bankruptcy Code, 2016 read with Rule 5 of the Adjudicating Authority Rules, 2016, an operational creditor chasing{" "}
            <strong className="text-white">&ge; ₹1,00,00,000</strong> must serve a complete Form 3 demand notice (or Form 4 with unpaid invoices), a tabular default-computation sheet, and a valid Board Resolution before filing Section 9 CIRP. Part of our{" "}
            <Link
              href="/b2b-debt-recovery-india"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Enterprise B2B Debt Recovery India
            </Link>{" "}
            core suite.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-100">
                ₹1 Crore+
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Section 4 Statutory Default Floor
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400">
                4-in-1 Pack
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Form 3, Form 4, Sheet &amp; Resolution
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-amber-400">
                10 Days
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Mandatory s.8(2) Response Window
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-red-400">
                Rule 5(2)
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                RPAD + KMP Email Service Proof
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
              { label: "Templates", href: "/templates" },
              {
                label: "IBC Section 8 Form 3 & Form 4 Pack",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <IbcNoticeTOC />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-nclt-rejection-risks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why NCLT Registries Reject Unverified Form 3 &amp; Form 4 Drafts
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For General Counsel, Chief Financial Officers, and corporate litigators pursuing unpaid commercial invoices above{" "}
                <strong>₹1,00,00,000</strong>, Section 8 of the Insolvency and Bankruptcy Code, 2016 (IBC) is the single highest-leverage statutory demand instrument in India. Unlike a routine civil reminder, a valid Section 8 Demand Notice triggers a strict 10-day statutory clock under Section 8(2) after which the Corporate Debtor faces a Section 9 Corporate Insolvency Resolution Process (CIRP) petition before the National Company Law Tribunal (NCLT).
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                However, generic Form 3 templates circulated online frequently fail scrutiny at the NCLT Registry or during preliminary Section 9 admission hearings. Common fatal defects include: omitting the tabular Computation of Default under Item 4 of Form 3, failing to expressly exclude the Section 10A suspension period (25 March 2020 to 24 March 2021), serving the notice on a generic branch address instead of the MCA-registered office or Key Managerial Personnel (KMP), and lacking a contemporaneous Section 179 Board Resolution authorising the signatory.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For a deeper statutory commentary on pre-existing dispute screening and threshold clubbing, review our{" "}
                <Link
                  href="/law/ibc-section-8-demand-notice-form-3-form-4-operational-creditor"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  IBC Section 8 Operational Creditor Law Guide
                </Link>
                . If your portfolio includes smaller tickets between ₹3 Lakh and ₹99.99 Lakh, route those matters through{" "}
                <Link
                  href="/law/section-12a-commercial-courts-act-pre-institution-mediation-guide"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Section 12A Commercial Courts Mediation
                </Link>{" "}
                or our{" "}
                <Link
                  href="/recovery-of-unpaid-dues-for-my-business"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  B2B Unpaid Dues Recovery Desk
                </Link>
                .
              </p>

              {/* Desktop SVG Escalation Architecture */}
              <div className="hidden md:block bg-slate-900 rounded-xl p-5 border border-slate-800 overflow-x-auto">
                <p className="text-[11px] font-bold uppercase tracking-widest text-red-400 mb-3">
                  Rule 5 Execution &amp; Section 9 Escalation Architecture
                </p>
                <svg
                  width="820"
                  height="170"
                  viewBox="0 0 820 170"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Four-stage IBC Section 8 Rule 5 execution workflow"
                  className="w-full h-auto"
                >
                  <rect x="8" y="20" width="182" height="125" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="22" y="45" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 &bull; DAY 0</text>
                  <text x="22" y="68" fill="#FFFFFF" fontSize="13" fontWeight="700">Board Resolution &amp;</text>
                  <text x="22" y="86" fill="#FFFFFF" fontSize="13" fontWeight="700">Default Audit</text>
                  <text x="22" y="110" fill="#94A3B8" fontSize="11">s.179 Authority +</text>
                  <text x="22" y="126" fill="#94A3B8" fontSize="11">s.10A &amp; ₹1Cr Check</text>

                  <path d="M194 82 H214" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="214,76 224,82 214,88" fill="#DC2626" />

                  <rect x="226" y="20" width="182" height="125" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="240" y="45" fill="#F87171" fontSize="11" fontWeight="700">STAGE 2 &bull; DAY 1</text>
                  <text x="240" y="68" fill="#FFFFFF" fontSize="13" fontWeight="700">Form 3 + Form 4</text>
                  <text x="240" y="86" fill="#FFFFFF" fontSize="13" fontWeight="700">Rule 5(2) Service</text>
                  <text x="240" y="110" fill="#94A3B8" fontSize="11">Speed Post RPAD +</text>
                  <text x="240" y="126" fill="#94A3B8" fontSize="11">KMP Email (BSA s.63)</text>

                  <path d="M412 82 H432" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="432,76 442,82 432,88" fill="#DC2626" />

                  <rect x="444" y="20" width="182" height="125" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="458" y="45" fill="#FBBF24" fontSize="11" fontWeight="700">STAGE 3 &bull; DAYS 1–10</text>
                  <text x="458" y="68" fill="#FFFFFF" fontSize="13" fontWeight="700">Section 8(2) Reply</text>
                  <text x="458" y="86" fill="#FFFFFF" fontSize="13" fontWeight="700">Evaluation Window</text>
                  <text x="458" y="110" fill="#94A3B8" fontSize="11">Verify Payment Proof</text>
                  <text x="458" y="126" fill="#94A3B8" fontSize="11">or Mobilox Dispute</text>

                  <path d="M630 82 H650" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="650,76 660,82 650,88" fill="#DC2626" />

                  <rect x="662" y="20" width="150" height="125" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="674" y="45" fill="#FECACA" fontSize="11" fontWeight="700">STAGE 4 &bull; DAY 11+</text>
                  <text x="674" y="68" fill="#FFFFFF" fontSize="13" fontWeight="700">NCLT Form 5</text>
                  <text x="674" y="86" fill="#FFFFFF" fontSize="13" fontWeight="700">Section 9 CIRP</text>
                  <text x="674" y="110" fill="#FCA5A5" fontSize="11">Affidavit s.9(3)(b) +</text>
                  <text x="674" y="126" fill="#FCA5A5" fontSize="11">NeSL Form C Record</text>
                </svg>
              </div>

              {/* Mobile Stacked Stage Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  { step: "Stage 1 • Day 0", title: "Board Resolution & Default Audit", desc: "s.179 Authority + s.10A & ₹1 Cr threshold check" },
                  { step: "Stage 2 • Day 1", title: "Form 3 + Form 4 Rule 5(2) Service", desc: "Speed Post RPAD + KMP Email with BSA s.63" },
                  { step: "Stage 3 • Days 1–10", title: "Section 8(2) Reply Window", desc: "Verify repayment proof or Mobilox dispute" },
                  { step: "Stage 4 • Day 11+", title: "NCLT Form 5 Section 9 CIRP", desc: "s.9(3)(b) Affidavit + NeSL Form C record" },
                ].map((card) => (
                  <div key={card.step} className="bg-slate-900 text-white p-3.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold uppercase text-red-400 block">{card.step}</span>
                    <p className="text-xs font-bold mt-0.5">{card.title}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Interactive Workspace */}
            <section
              id="heading-interactive-rule5-pack"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Interactive Rule 5 Pack: Form 3, Form 4 &amp; Board Resolution
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select an industry preset or enter your exact company particulars below. Every tab updates in real time with statutory Rule 5 clauses, Section 10A exclusion language, and tabular default calculations—ready to copy, print, or export as an editable Microsoft Word (<code>.doc</code>) file.
              </p>

              <IbcNoticeWorkspace />
            </section>

            {/* Section 3: Form 3 vs Form 4 */}
            <section
              id="heading-form3-vs-form4-rule5"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Rule 5(1)(a) vs Rule 5(1)(b): Choosing Form 3 or Form 4
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Rule 5(1) of the Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016 prescribes two distinct formats depending on how the demand is anchored. Understanding the distinction prevents technical objections from the Corporate Debtor&rsquo;s counsel at NCLT.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statutory Dimension</th>
                      <th className="p-3.5 font-bold">Form 3 &mdash; Rule 5(1)(a)</th>
                      <th className="p-3.5 font-bold">Form 4 &mdash; Rule 5(1)(b)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Legal Character</td>
                      <td className="p-3.5 text-slate-700">Comprehensive statutory Demand Notice containing 9 mandatory particulars of debt and default.</td>
                      <td className="p-3.5 text-slate-700">Covering Notice accompanying copies of unpaid invoices demanding immediate payment.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Best Commercial Fit</td>
                      <td className="p-3.5 text-slate-700">EPC RA bills, retention money, SaaS lock-in claims, or multi-PO consolidated ledgers.</td>
                      <td className="p-3.5 text-slate-700">Clean, undisputed GST tax invoices with signed delivery challans and e-way bills.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Mandatory Enclosures</td>
                      <td className="p-3.5 text-slate-700">Tabular Default Computation, Contract/PO, Bank Statement, NeSL Record &amp; Board Resolution.</td>
                      <td className="p-3.5 text-slate-700">Certified copies of every unpaid invoice demanding payment + Computation Sheet.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Advocate Practice Rule</td>
                      <td className="p-3.5 text-emerald-700 font-semibold" colSpan={2}>
                        Serve Form 3 + Form 4 together as a unified Rule 5 docket to eliminate any technical defect plea under Section 9(5)(ii)(a).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Default Computation Sheet */}
            <section
              id="heading-computation-of-default"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Mandatory Computation-of-Default Working Sheet Annexure
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Item 4 of Form 3 explicitly requires the operational creditor to attach workings for the computation of the amount and dates of default in tabular form. NCLT benches dismiss incomplete Section 9 petitions where creditors state only a lump-sum ledger balance without tying each overdue invoice to a specific due date and date of default.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                    Section 10A Exclusion Guardrail
                  </p>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    Any default occurring between <strong>25 March 2020 and 24 March 2021</strong> is permanently barred from Section 9 CIRP under Section 10A IBC. Your working sheet must isolate pre- or post-10A invoices and ensure the remaining eligible default independently crosses <strong>₹1,00,00,000</strong>.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    MSME Interest &amp; Threshold Clubbing
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    Where a contract provides written interest—or where statutory MSMED interest is adjudicated—compute accrued interest cleanly up to the notice date. Use our{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="font-bold underline text-emerald-900"
                    >
                      MSME Delayed Payment Interest Calculator
                    </Link>{" "}
                    for statutory compound calculations.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Board Resolution & Authorized Signatory */}
            <section
              id="heading-board-resolution-execution"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Board Resolution &amp; Authorized Signatory Execution Rules
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Corporate debtors routinely challenge Section 9 petitions on the ground that the individual who signed Form 3 or instructed the advocate lacked specific corporate authority. Under Section 179 of the Companies Act, 2013, a company acts through a Board Resolution—a generic power of attorney executed years earlier for routine banking or tender work is often attacked as insufficient for initiating insolvency proceedings.
              </p>

              <div className="bg-slate-50 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Verified Supreme Court Precedent &bull; Advocate Issuance
                </p>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  <strong>Macquarie Bank Ltd. v. Shilpi Cable Technologies Ltd.</strong>, (2018) 2 SCC 674: The Supreme Court held that a demand notice under Section 8 of the IBC may be issued by an advocate or authorised agent on behalf of the operational creditor, provided the advocate holds valid instructions and authority from the creditor. Attaching the Section 179 Board Resolution (Tab 4 in our workspace) to the notice removes all ambiguity.
                </p>
              </div>
            </section>

            {/* Section 6: Rule 5(2) Service Matrix */}
            <section
              id="heading-rule5-service-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Rule 5(2) Service Matrix: Registered Post, Speed Post &amp; Email
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Proof of valid service is jurisdictional under Section 9(5)(ii)(c). Always verify the Corporate Debtor&rsquo;s current registered office and signatory email on the MCA Master Data portal on the day of dispatch, and preserve digital delivery evidence under a{" "}
                <Link
                  href="/law/bsa-section-63-electronic-evidence-certificate-tally-erp-whatsapp-b2b"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  BSA 2023 Section 63 Electronic Evidence Certificate
                </Link>
                . You can also automate multi-channel service via our{" "}
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Email, WhatsApp &amp; Speed Post Dispatch Solution
                </Link>
                .
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Service Channel (Rule 5(2))</th>
                      <th className="p-3.5 font-bold">Statutory Target</th>
                      <th className="p-3.5 font-bold">Mandatory NCLT Proof</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Speed Post / Registered Post AD</td>
                      <td className="p-3.5 text-slate-700">MCA Registered Office Address</td>
                      <td className="p-3.5 text-slate-700">Original Postal Receipt + India Post Tracking Delivery Report</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Electronic Mail (Rule 5(2)(b))</td>
                      <td className="p-3.5 text-slate-700">Whole-Time Director, Designated Partner, or KMP</td>
                      <td className="p-3.5 text-slate-700">Full PDF Attachment Email + Non-Bounce Header + BSA s.63 Certificate</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">Hand Delivery / Courier</td>
                      <td className="p-3.5 text-slate-700">Registered Office Reception</td>
                      <td className="p-3.5 text-slate-700">Company Stamp + Receiver Signature, Name &amp; Date</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Worked ₹1.48 Crore Default Ledger */}
            <section
              id="heading-worked-default-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked ₹1.48 Crore Operational Debt Default Schedule
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Below is a model Annexure-A Computation of Default table demonstrating how an industrial supplier clubs three unpaid GST invoices and contractual 18% p.a. simple interest to establish a clear ₹1.48 Crore default above the Section 4 threshold. Empirical recovery outcomes across ticket tiers are benchmarked in our{" "}
                <Link
                  href="/reports/legal-notice-outcomes-study"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Legal Notice Outcomes Study
                </Link>
                .
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 font-bold">Invoice No.</th>
                      <th className="p-3 font-bold">Default Date</th>
                      <th className="p-3 font-bold">Principal (₹)</th>
                      <th className="p-3 font-bold">Interest @18% (₹)</th>
                      <th className="p-3 font-bold">Total Default (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 font-semibold">VPC/25-26/0184</td>
                      <td className="p-3">18 Jul 2025</td>
                      <td className="p-3">₹44,20,000</td>
                      <td className="p-3">₹8,10,000</td>
                      <td className="p-3 font-bold">₹52,30,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">VPC/25-26/0209</td>
                      <td className="p-3">12 Aug 2025</td>
                      <td className="p-3">₹41,80,000</td>
                      <td className="p-3">₹7,15,000</td>
                      <td className="p-3 font-bold">₹48,95,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">VPC/25-26/0231</td>
                      <td className="p-3">05 Sep 2025</td>
                      <td className="p-3">₹40,50,000</td>
                      <td className="p-3">₹6,25,000</td>
                      <td className="p-3 font-bold">₹46,75,000</td>
                    </tr>
                    <tr className="bg-emerald-50 font-extrabold text-emerald-900">
                      <td className="p-3" colSpan={2}>TOTAL ELIGIBLE OPERATIONAL DEBT (s.4 COMPLIANT)</td>
                      <td className="p-3">₹1,26,50,000</td>
                      <td className="p-3">₹21,50,000</td>
                      <td className="p-3">₹1,48,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section
              id="heading-dual-track-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Dispatch One IBC Notice or Upload Multi-Debtor CSV Batch
                </h2>
              </div>

              <IbcNoticeCTA />
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: IBC Form 3, Form 4 &amp; Rule 5
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border border-slate-200 rounded-xl bg-slate-50/70 p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Statutory Authorities & Related Guides */}
            <section
              id="heading-statutory-authorities"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Authorities, IBBI Rules &amp; Related B2B Guides
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                <p>
                  Reviewed by <strong>Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions. Statutory references verified against the Insolvency and Bankruptcy Code, 2016 and IBBI Adjudicating Authority Rules, 2016.
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
