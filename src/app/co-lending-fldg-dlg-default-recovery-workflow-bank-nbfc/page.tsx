import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CoLendingTableOfContents from "./CoLendingTableOfContents";
import CoLendingScenarioTabs from "./CoLendingScenarioTabs";
import CoLendingCTA from "./CoLendingCTA";

export const revalidate = 86400;

const PAGE_PATH = "/co-lending-fldg-dlg-default-recovery-workflow-bank-nbfc";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Legal Recovery in 80:20 Co-Lending & RBI 5% DLG (FLDG) Structures: Locus Standi, POA & Borrower Notice Architecture";
const META_TITLE = "Co-Lending & 5% DLG (FLDG) Default Recovery Legal Workflow";
const META_DESCRIPTION =
  "Who sends Section 25/SARFAESI notices in 80:20 Bank-NBFC Co-Lending or after a 5% DLG payout? Solve locus standi, POA & subrogation traps.";
const OG_ALT = formatAltText(
  "80:20 Bank-NBFC Co-Lending and 5% DLG Default Legal Recovery Architecture"
);

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
        alt: OG_ALT,
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

const COMPARISON_MATRIX_ROWS = [
  {
    dimension: "Legally Competent Notice Sender",
    clm1: "Lead Bank & Originating NBFC jointly, or NBFC expressly as 'Constituted Attorney & Servicer' for the 80:20 pool.",
    clm2: "Partner Bank (for 80% assigned tranche) + Originating NBFC (for 20% retained tranche), or Servicer under notarized POA.",
    dlgLsp: "Regulated Entity (Bank/NBFC) remains sole creditor unless formal s.130 TPA Assignment Deed follows 5% DLG payout.",
  },
  {
    dimension: "Section 25 PSS Act / s.138 NI Act Payee",
    clm1: "Sponsor Bank / Escrow Account Holder named as Payee on NPCI e-NACH Mandate.",
    clm2: "Destination Escrow Trustee or Servicing NBFC matching NPCI Utility Code & Return Memo.",
    dlgLsp: "RE/Escrow Account only; an unregulated LSP cannot file s.25 criminal complaints in its own name without RE POA.",
  },
  {
    dimension: "SARFAESI s.13(2) & s.13(9) Eligibility",
    clm1: "Bank invokes s.13(2) on 80% + 20% with joint lender consent (>=60% value under s.13(9)).",
    clm2: "Partner Bank bypasses NBFC ₹100 Cr asset / ₹20 Lakh loan floor; CERSAI joint charge mandatory.",
    dlgLsp: "Unregulated LSPs have zero SARFAESI standing; only notified NBFCs (>=₹100 Cr) or Partner Banks qualify.",
  },
  {
    dimension: "Power of Attorney (POA) Requirement",
    clm1: "Master Co-Lending Agreement (MCLA) Servicing & Litigation POA Schedule executed by both Boards.",
    clm2: "Back-to-back Assignment + Servicing POA authorizing NBFC to issue recall, arbitration & s.25 notices.",
    dlgLsp: "DLG Agreement + LSP Agreement must separate collection agency authority from litigation POA.",
  },
  {
    dimension: "Escrow Waterfall & NPA Tagging",
    clm1: "Single borrower-level SMA/NPA classification mirrored across Bank (80%) and NBFC (20%) books.",
    clm2: "Daily/T+1 escrow waterfall splits principal, interest, and penal charges per RBI IRACP norms.",
    dlgLsp: "5% DLG invocation within 120 days does NOT upgrade borrower NPA status or extinguish debt.",
  },
  {
    dimension: "Primary Borrower Defense Trap",
    clm1: "\"NBFC lacked privity for Bank's 80% share\" (Order VII Rule 11 CPC / s.25 quashing plea).",
    clm2: "\"Assignment to Bank stripped NBFC of locus standi\" without disclosed POA.",
    dlgLsp: "\"5% FLDG payout by Fintech/LSP discharged the borrower's debt under Contract Act s.41.\"",
  },
];

const FAQS = [
  {
    question: "Whose name should appear on a legal notice in an 80:20 Bank–NBFC co-lending loan?",
    answer:
      "The notice must explicitly name both the Partner Bank (80% Co-Lender) and the Originating NBFC (20% Co-Lender and Authorized Servicing Agent), or be issued by the Servicing NBFC expressly acting as the 'Constituted Attorney and Authorized Servicer' under the Master Co-Lending Agreement (MCLA) Power of Attorney. Issuing a notice solely in the NBFC's or LSP's name without disclosing the 80:20 co-lending capacity invites dismissal for lack of locus standi.",
  },
  {
    question: "Does a 5% DLG (FLDG) payout by the Fintech/NBFC extinguish the borrower's debt?",
    answer:
      "No. Under the RBI Guidelines on Default Loss Guarantee (DLG) in Digital Lending, the 5% capped guarantee is a bilateral credit-risk arrangement between the Regulated Entity (RE) and the DLG Provider, invoked within 120 days of overdue. It is not a third-party discharge under Section 41 of the Indian Contract Act, 1872. The borrower remains 100% liable for the entire principal, interest, and compliant penal charges, and any subsequent recovery flows back through the escrow waterfall.",
  },
  {
    question: "Can an LSP or Fintech file a Section 25 PSS Act complaint for e-NACH bounce after DLG invocation?",
    answer:
      "Only the 'Payee' named in the NPCI e-NACH mandate (typically the Escrow Account Trustee, Partner Bank, or Servicing NBFC) has statutory standing under Section 25 of the Payment and Settlement Systems Act, 2007 read with Section 142 of the NI Act. An unregulated Lending Service Provider (LSP) cannot prosecute a Section 25 complaint in its own name unless it holds a valid Deed of Assignment or acts strictly as an authorized POA representative of the Payee per Supreme Court norms in A.C. Narayanan v. State of Maharashtra.",
  },
  {
    question: "How does a mid-size NBFC below ₹100 Crore asset size enforce SARFAESI in a co-lending LAP loan?",
    answer:
      "Under SARFAESI Act notifications, an NBFC with assets below ₹100 Crore (or loans below ₹20 Lakh) cannot invoke SARFAESI independently. However, in an 80:20 co-lending arrangement with a Scheduled Commercial Bank, the Partner Bank holds 80% of the exposure and faces no NBFC asset-size bar. With joint lender consent exceeding 60% in value under Section 13(9) of the SARFAESI Act and proper CERSAI registration, the Partner Bank can issue the 60-day Section 13(2) demand notice for the secured asset.",
  },
  {
    question: "How should NPA tagging and the 120-day DLG invocation clock be aligned with legal notices?",
    answer:
      "RBI Co-Lending Master Circular norms require borrower-level (not tranche-level) asset classification: if a loan hits 90+ DPD, both the Bank's 80% share and the NBFC's 20% share must be tagged NPA simultaneously. Simultaneously, the DLG provider must honour the 5% DLG invocation within 120 days of overdue. Best practice is to serve the Tri-Channel Loan Recall & Section 25 Notice at 30–60 DPD so recovery or ODR settlement occurs before the 90-day NPA cliff and 120-day DLG trigger.",
  },
  {
    question: "What subrogation rights arise if the DLG provider pays the Bank and wants to recover from the borrower?",
    answer:
      "Under Section 140 of the Indian Contract Act, 1872, a surety/guarantor who pays a guaranteed debt is invested with the creditor's rights, but in capped 5% DLG structures, partial payout of a portfolio pool does not automatically transfer individual loan titles. To litigate directly in its own name, the DLG provider must execute a formal Deed of Subrogation or Assignment of Actionable Claim under Section 130 of the Transfer of Property Act, 1882; otherwise, recovery proceedings must continue in the name of the Regulated Entity.",
  },
  {
    question: "What digital records are mandatory under BSA 2023 s.63 for co-lending default litigation?",
    answer:
      "Courts and ODR arbitrators require a Section 63 Bharatiya Sakshya Adhiniyam, 2023 electronic evidence certificate covering: (1) the click-wrap/eSign Key Fact Statement (KFS) and Sanction Letter disclosing the 80:20 co-lending split, (2) the NPCI e-NACH registration and bounce return memo, (3) the consolidated 80:20 escrow waterfall statement of account, and (4) the email, WhatsApp, and Speed Post RPAD delivery logs of the recall notice.",
  },
];

const STATUTORY_SOURCES = [
  {
    title: "RBI Guidelines on Default Loss Guarantee (DLG) in Digital Lending (5% Cap & 120-Day Invocation)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12514",
  },
  {
    title: "RBI Master Circular / Directions on Co-Lending by Banks and NBFCs to Priority Sector (CLM-1 & CLM-2)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11991",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer)",
    url: "https://www.indiacode.nic.in/handle/123456789/2080",
  },
  {
    title: "SARFAESI Act, 2002 (Sections 2(1)(m), 13(2), 13(9) & CERSAI Registration)",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 41, 140, 141 & 182–202 — Subrogation & Power of Attorney)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Loan & Notice Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

export default function CoLendingDlgRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    datePublished: "2026-11-14",
    dateModified: "2026-11-14",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
  };

  const TABLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Table",
    about:
      "Comparison of Legal Recovery Authority, Locus Standi, Section 25 PSS Act Payee, SARFAESI Eligibility, and Subrogation across CLM-1, CLM-2, and 5% DLG (FLDG) Structures",
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
        name: "NBFC & Fintech Loan Recovery",
        item: `${SITE_URL}/industries/nbfc-fintech-loan-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Co-Lending & 5% DLG Recovery Workflow",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-02 &bull; Bank–NBFC Co-Lending &amp; RBI 5% DLG SOP</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Reviewed by Anuj Anand Malik, Advocate</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + Parent Hub Link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            In 80:20 Bank–NBFC Co-Lending and RBI 5% DLG (FLDG) pools, an originating NBFC or LSP
            cannot enforce recovery alone without a disclosed Servicing Power of Attorney. A 5% DLG
            payout never extinguishes borrower liability. Coordinate joint notices under our{" "}
            <Link
              href="/industries/nbfc-fintech-loan-recovery"
              className="text-red-300 underline underline-offset-2 hover:text-white font-semibold"
            >
              NBFC &amp; Fintech Loan Recovery Hub
            </Link>{" "}
            to defeat <em>locus standi</em> and subrogation challenges.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">80 : 20</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Bank–NBFC Co-Lending Split Title &amp; Joint Notice
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">5% Cap</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                RBI DLG (FLDG) Ceiling &amp; 120-Day Invocation
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">100% Debt</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Borrower Liability Intact Post-DLG Payout
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">30 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Section 25 PSS Act e-NACH Notice Window
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
                label: "NBFC & Fintech Loan Recovery",
                href: "/industries/nbfc-fintech-loan-recovery",
              },
              { label: "Co-Lending & 5% DLG Recovery Workflow" },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CoLendingTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Locus Standi Trap */}
            <section
              id="heading-locus-standi-gap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why Co-Lending &amp; DLG Notices Fail in Court: The Locus Standi Trap
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across India, Scheduled Commercial Banks and mid-market NBFCs or Lending Service
                Providers (LSPs) originate billions in credit under the Reserve Bank of India (RBI)
                Co-Lending Model (CLM-1 and CLM-2) and the 5% Default Loss Guarantee (DLG/FLDG)
                framework. Yet when an 80:20 borrower defaults at 60+ or 90+ DPD, legal recovery
                routinely stalls on a preventable procedural defect: <strong>mismatch between the
                legal notice sender, the NPCI e-NACH payee, and the underlying title holder</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Defaulters&apos; counsel increasingly file Order VII Rule 11 CPC rejection
                applications, Section 34 arbitration objections, and Section 482 BNSS/CrPC quashing
                petitions alleging two fatal flaws: first, that the originating NBFC or Fintech LSP
                lacks <em>locus standi</em> to demand or sue for the Partner Bank&apos;s 80%
                assigned tranche; and second, that once the DLG provider pays the 5% FLDG pool to
                the Bank, the borrower&apos;s debt stands extinguished. Fixing this requires
                structuring your{" "}
                <Link
                  href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  NBFC legal notice workflow
                </Link>{" "}
                around explicit Servicing Power of Attorney (POA) disclosures and non-extinguishment
                covenants.
              </p>
            </section>

            {/* Section 2: G2 Comparison Matrix */}
            <section
              id="heading-comparison-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Comparison Matrix: CLM-1 vs. CLM-2 vs. 5% DLG (FLDG) Recovery Rights
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before dispatching a Loan Recall, Section 25 PSS Act, or SARFAESI Section 13(2)
                notice, Co-Lending Heads and General Counsel must verify which entity holds
                enforceable standing under each RBI-permitted structure.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[720px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="p-3.5 font-bold border-b border-slate-800 w-1/4">
                        Legal &amp; Compliance Criteria
                      </th>
                      <th className="p-3.5 font-bold border-b border-slate-800 w-1/4">
                        CLM-1 (Joint 80:20 Origination)
                      </th>
                      <th className="p-3.5 font-bold border-b border-slate-800 w-1/4">
                        CLM-2 (80% Back-to-Back Assignment)
                      </th>
                      <th className="p-3.5 font-bold border-b border-slate-800 w-1/4">
                        5% DLG / FLDG (Digital Lending LSP)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    {COMPARISON_MATRIX_ROWS.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                        <td className="p-3.5 font-bold text-slate-900 align-top">
                          {row.dimension}
                        </td>
                        <td className="p-3.5 align-top leading-relaxed">{row.clm1}</td>
                        <td className="p-3.5 align-top leading-relaxed">{row.clm2}</td>
                        <td className="p-3.5 align-top leading-relaxed">{row.dlgLsp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Escrow & Notice Architecture SVG */}
            <section
              id="heading-waterfall-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Escrow Waterfall, NPA Tagging &amp; Borrower Notice Architecture
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A court-proof co-lending recovery architecture synchronizes the{" "}
                <strong>Escrow Waterfall</strong>, <strong>120-day DLG invocation clock</strong>,
                and <strong>Tri-Channel Legal Notice</strong> so that internal risk-sharing between
                Bank and NBFC never creates a borrower defense.
              </p>

              {/* Desktop SVG Diagram */}
              <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 bg-slate-900 p-5">
                <svg
                  width="820"
                  height="310"
                  viewBox="0 0 820 310"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="80:20 Co-Lending and 5% DLG Escrow Waterfall and Legal Notice Architecture"
                  className="w-full h-auto"
                >
                  {/* Box 1: Borrower / e-NACH Bounce */}
                  <rect x="16" y="24" width="170" height="84" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="101" y="50" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">1. BORROWER DEFAULT</text>
                  <text x="101" y="70" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">e-NACH Bounce / 30+ DPD</text>
                  <text x="101" y="88" textAnchor="middle" fill="#94A3B8" fontSize="10">Payee: Escrow / Servicer</text>

                  {/* Arrow 1 -> 2 */}
                  <path d="M186 66 H226" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Box 2: Joint / POA Notice */}
                  <rect x="228" y="24" width="186" height="84" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="321" y="50" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">2. POA-CURED NOTICE</text>
                  <text x="321" y="70" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">80% Bank + 20% NBFC</text>
                  <text x="321" y="88" textAnchor="middle" fill="#94A3B8" fontSize="10">s.25 PSS + Recall (BSA s.63)</text>

                  {/* Arrow 2 -> 3 */}
                  <path d="M414 66 H454" stroke="#DC2626" strokeWidth="2" />

                  {/* Box 3: 90 DPD NPA & 120d DLG */}
                  <rect x="456" y="24" width="170" height="84" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="541" y="50" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="700">3. NPA &amp; 5% DLG</text>
                  <text x="541" y="70" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">90d NPA | 120d DLG</text>
                  <text x="541" y="88" textAnchor="middle" fill="#94A3B8" fontSize="10">Debt NOT Extinguished</text>

                  {/* Arrow 3 -> 4 */}
                  <path d="M626 66 H660" stroke="#10B981" strokeWidth="2" />

                  {/* Box 4: Enforcement */}
                  <rect x="662" y="24" width="142" height="84" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="733" y="50" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="700">4. FORUM TRACK</text>
                  <text x="733" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">SARFAESI / ODR</text>
                  <text x="733" y="88" textAnchor="middle" fill="#A7F3D0" fontSize="10">Bank s.13(2) / s.29B</text>

                  {/* Bottom Escrow Waterfall Bar */}
                  <rect x="16" y="154" width="788" height="132" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                  <text x="36" y="182" fill="#F8FAFC" fontSize="13" fontWeight="700">
                    CO-LENDING ESCROW WATERFALL (POST-RECOVERY CREDIT PRIORITY)
                  </text>
                  <rect x="36" y="198" width="175" height="68" rx="8" fill="#1E293B" stroke="#475569" />
                  <text x="123" y="224" textAnchor="middle" fill="#E2E8F0" fontSize="11" fontWeight="700">Tier 1: Statutory Costs</text>
                  <text x="123" y="244" textAnchor="middle" fill="#94A3B8" fontSize="10">Notice, ODR &amp; Court Fees</text>

                  <rect x="227" y="198" width="175" height="68" rx="8" fill="#1E293B" stroke="#475569" />
                  <text x="314" y="224" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="700">Tier 2: 80% Bank Share</text>
                  <text x="314" y="244" textAnchor="middle" fill="#94A3B8" fontSize="10">Senior Principal &amp; Interest</text>

                  <rect x="418" y="198" width="175" height="68" rx="8" fill="#1E293B" stroke="#475569" />
                  <text x="505" y="224" textAnchor="middle" fill="#93C5FD" fontSize="11" fontWeight="700">Tier 3: 20% NBFC Share</text>
                  <text x="505" y="244" textAnchor="middle" fill="#94A3B8" fontSize="10">Originating Tranche + Fees</text>

                  <rect x="609" y="198" width="175" height="68" rx="8" fill="#1E293B" stroke="#F59E0B" />
                  <text x="696" y="224" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="700">Tier 4: DLG Replenish</text>
                  <text x="696" y="244" textAnchor="middle" fill="#94A3B8" fontSize="10">Subrogation / 5% Pool</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards Fallback */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "1. Borrower Default (30+ DPD)",
                    detail: "NPCI e-NACH bounce return memo issued to Escrow / Servicing Payee.",
                  },
                  {
                    step: "2. POA-Cured Tri-Channel Notice",
                    detail: "Joint 80:20 Recall + s.25 PSS Notice citing Servicing POA & BSA s.63 logs.",
                  },
                  {
                    step: "3. 90-Day NPA & 120-Day DLG",
                    detail: "Borrower-level NPA tagging; 5% DLG payout never extinguishes borrower debt.",
                  },
                  {
                    step: "4. Enforcement & Escrow Waterfall",
                    detail: "Bank SARFAESI s.13(2) or ODR Award; recovery replenishes Bank -> NBFC -> DLG.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-slate-900 text-white p-4 border border-slate-800"
                  >
                    <p className="text-xs font-bold text-red-400 uppercase">{item.step}</p>
                    <p className="text-xs text-slate-300 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Scenario Matrix */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Interactive Scenario Selector: Solve 4 Co-Lending &amp; DLG Traps
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select your alliance structure or delinquency trigger below to inspect the legally
                competent notice sender, borrower defense plea, and creditor-safe execution SOP.
              </p>
              <CoLendingScenarioTabs />
            </section>

            {/* Section 5: Statutory Rules (CLM, DLG, Subrogation) */}
            <section
              id="heading-statutory-rules"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  RBI 5% DLG Guidelines, Subrogation &amp; Multi-Channel Notice Rules
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/60 space-y-2">
                  <h3 className="text-base font-extrabold text-slate-900">
                    1. 5% DLG Cap &amp; 120-Day Invocation Rule
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    RBI&apos;s Digital Lending DLG Guidelines cap Default Loss Guarantee cover at{" "}
                    <strong>5% of the loan portfolio</strong> and mandate invocation within{" "}
                    <strong>120 days</strong> of overdue unless the borrower cures the default.
                    Critically, DLG invocation is an inter-se credit enhancement between the RE and
                    the DLG Provider—never a settlement with the borrower.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/60 space-y-2">
                  <h3 className="text-base font-extrabold text-slate-900">
                    2. Subrogation vs. Assignment (s.140 Contract Act)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    While Section 140 of the Indian Contract Act grants a surety subrogation rights
                    upon full payment, a capped 5% portfolio DLG payout does not automatically
                    assign individual borrower loans. Unless a Section 130 Transfer of Property Act
                    Assignment Deed is executed, litigation must remain in the RE&apos;s name.
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For high-volume co-lending books, combine{" "}
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  tri-channel Email, WhatsApp, and Speed Post RPAD dispatch
                </Link>{" "}
                with{" "}
                <Link
                  href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  RBI-compliant legal escalation
                </Link>{" "}
                and{" "}
                <Link
                  href="/online-dispute-resolution-india"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  Online Dispute Resolution (ODR)
                </Link>{" "}
                before the 120-day DLG trigger. To verify whether your secured co-lending ticket
                qualifies for DRT or SARFAESI, run our{" "}
                <Link
                  href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  SARFAESI &amp; DRT Recovery Forum Calculator
                </Link>{" "}
                or draft your recall demand with our{" "}
                <Link
                  href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                  className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  Loan Recall cum Guarantee Invocation Notice Template
                </Link>
                .
              </p>
            </section>

            {/* Section 6: Cost & Time-to-Recovery Numerical Illustration */}
            <section
              id="heading-numerical-illustration"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Financial Illustration: ₹18 Lakh 80:20 Co-Lending Loan
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider an ₹18,00,000 MSME term loan originated in an 80:20 CLM-2 structure
                (₹14,40,000 Bank share; ₹3,60,000 NBFC share) backed by a 5% portfolio DLG pool and
                an e-NACH mandate. Below is the financial and timeline impact of a defective
                LSP-only notice versus a POA-cured Joint Notice.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="rounded-xl border border-red-200 bg-red-50/60 p-5 space-y-2.5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                    Track A: Defective LSP-Only Notice (Common Mistake)
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <li>&bull; <strong>Notice Sender:</strong> Fintech LSP alone (no Bank POA cited)</li>
                    <li>&bull; <strong>Borrower Plea:</strong> Order VII Rule 11 / s.25 payee mismatch</li>
                    <li>&bull; <strong>30-Day s.25 Window:</strong> Lapses during technical dismissal</li>
                    <li>&bull; <strong>Delay Cost:</strong> 8–14 months lost + ₹65,000+ wasted litigation fee</li>
                    <li>&bull; <strong>Net Recovery Risk:</strong> Unsecured write-off after 120d DLG hit</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 space-y-2.5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    Track B: POA-Cured 80:20 Joint Tri-Channel Notice
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <li>&bull; <strong>Notice Sender:</strong> NBFC as Constituted Attorney for 80% Bank + 20% Self</li>
                    <li>&bull; <strong>Statutory Hook:</strong> s.25 PSS Act + Non-Extinguishment DLG Clause</li>
                    <li>&bull; <strong>Dispatch Cost:</strong> ₹999 per case (or lower in bulk CSV batches)</li>
                    <li>&bull; <strong>Timeline:</strong> Served Day 1 via Email/WhatsApp/RPAD; 15-day cure</li>
                    <li>&bull; <strong>Waterfall Credit:</strong> ₹14.4L Bank + ₹3.6L NBFC + DLG pool preserved</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7: POA & BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-poa-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Servicing POA &amp; BSA 2023 s.63 Litigation Readiness Checklist
                </h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                {[
                  "Notarized Servicing & Litigation Power of Attorney (POA) Schedule in the Master Co-Lending Agreement.",
                  "Board Resolutions of both Partner Bank and Originating NBFC authorizing named officers to sign plaints/s.25 complaints.",
                  "Key Fact Statement (KFS) & Sanction Letter disclosing 80:20 co-lending ratio and Non-Extinguishment of Debt post-DLG.",
                  "NPCI e-NACH Mandate & Bounce Return Memo matching the exact Payee / Escrow Account named in the Section 25 notice.",
                  "CERSAI Joint / Pari-Passu Security Interest Registration (mandatory before Partner Bank issues SARFAESI s.13(2) notice).",
                  "Bharatiya Sakshya Adhiniyam, 2023 (BSA s.63) Certificate covering 80:20 escrow ledger and tri-channel notice delivery logs.",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <span className="text-emerald-600 font-bold mt-0.5">&check;</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Dual-Track B2B Conversion Funnel */}
            <CoLendingCTA />

            {/* Section 8: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  FAQs: Co-Lending Locus Standi, 5% DLG &amp; Recovery Notices
                </h2>
              </div>
              <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
                {FAQS.map((faq, idx) => (
                  <details key={idx} className="group bg-white">
                    <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 hover:bg-slate-50 transition-colors">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-extrabold text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 9: Statutory References */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Official RBI Master Directions &amp; Statutory Authorities
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {STATUTORY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#DC2626] font-bold">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline underline-offset-2 font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
