import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ScfRecoveryTableOfContents from "./ScfRecoveryTableOfContents";
import ScfRecoveryScenarioTabs from "./ScfRecoveryScenarioTabs";
import ScfRecoveryCTA from "./ScfRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/supply-chain-finance-channel-invoice-discounting-default-recovery";
const EXACT_H1 =
  "Recovering Defaulted Supply-Chain Finance (SCF), Dealer Financing & Factoring Receivables in India";
const META_TITLE = "Supply Chain Finance & Invoice Discounting Default Recovery";
const META_DESCRIPTION =
  "SCF NBFC & Fintech recovery: enforce Factoring Act s.8/s.19 CERSAI assignments, anchor stop-supply covenants, Order 37 CPC & BNS s.318 dual-pledge fraud.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_URL}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Supply Chain Finance and Invoice Discounting Default Recovery India"),
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

const STATUTORY_MATRIX_ROWS = [
  {
    instrument: "Factoring Regulation Act, 2011 (s.8 & s.19)",
    trigger: "Assigned receivable unpaid on maturity; buyer pays vendor directly or disputes assignment",
    timeline: "Immediate s.19 CERSAI filing; 7–15 day s.8 Notice of Assignment",
    leverage: "Strips corporate buyer of discharge defence if buyer pays vendor post-s.8 notice",
    forum: "Commercial Court / Order XXXVII CPC",
    tone: "emerald",
  },
  {
    instrument: "Anchor Stop-Supply & Tripartite Lien Covenant",
    trigger: "Dealer diverts sales proceeds instead of settling 60–90 day channel finance tranche",
    timeline: "24–48 hour Anchor intimation + 7-day dealer cure window",
    leverage: "Halts OEM inventory dispatch & freezes dealer trade incentives/credit notes",
    forum: "Tripartite Contractual Enforcement + s.25 PSS Act",
    tone: "emerald",
  },
  {
    instrument: "RBI TReDS Guidelines & MSME Samadhaan",
    trigger: "Corporate buyer defaults on accepted Factoring Unit (FU) on RXIL / M1xchange / Invoicemart",
    timeline: "T+1 settlement default flag; 15-day statutory demand",
    leverage: "Irrefutable digital buyer acceptance log defeats fabricated quality disputes",
    forum: "Commercial Summary Suit / IBC s.7 (threshold met)",
    tone: "slate",
  },
  {
    instrument: "Order XXXVII CPC Summary Suit",
    trigger: "Liquidated unpaid invoice, accepted hundi/bill of exchange, or written recourse guarantee",
    timeline: "10-day defendant appearance window post-summons",
    leverage: "No automatic right to defend; conditional leave requires deposit of disputed sum",
    forum: "Commercial Division / District Civil Court",
    tone: "amber",
  },
  {
    instrument: "BNS 2023 s.318 / s.336 & PSS Act s.25",
    trigger: "Dual-invoice discounting across two lenders, fake GST e-Invoice, or e-NACH bounce",
    timeline: "48-hour criminal restitution notice (BNS); 15-day statutory demand (s.25 PSS)",
    leverage: "Promoter criminal liability + Order 38 Rule 5 attachment before judgment",
    forum: "Magistrate / EOW + Commercial Court",
    tone: "red",
  },
];

const EVIDENCE_CHECKLIST = [
  {
    title: "CERSAI Form I / II Factoring Registration (s.19)",
    detail:
      "Mandatory under Section 19 of the Factoring Regulation Act, 2011 (as amended in 2021) within prescribed timelines to establish priority over competing lenders and liquidators.",
  },
  {
    title: "Section 8 Written Notice of Assignment + Delivery Proof",
    detail:
      "Tri-channel proof (Speed Post RPAD + SMTP Email + WhatsApp) proving the corporate buyer received written notice directing payment solely to the Factor/NBFC.",
  },
  {
    title: "Tripartite Anchor-Financier MOU & Stop-Supply Clause",
    detail:
      "Executed Master Channel Finance Agreement containing explicit OEM/Anchor covenants for dispatch suspension, credit-note set-off, and dealer margin hold.",
  },
  {
    title: "GST e-Invoice IRN, e-Way Bill & Transporter Bilty",
    detail:
      "Underlying trade movement records from GSTN and logistics partners to refute sham-invoice defences and prove actual delivery of goods in BNS s.318 audits.",
  },
  {
    title: "TReDS Factoring Unit (FU) Acceptance / e-NACH Dishonour Memo",
    detail:
      "Timestamped digital acceptance log from the TReDS exchange or NPCI e-NACH return memo establishing liquidated debt under Order 37 CPC and Section 25 PSS Act.",
  },
  {
    title: "BSA 2023 Section 63 Electronic Record Certificate",
    detail:
      "Signed Section 63 Bharatiya Sakshya Adhiniyam certificate (replacing IEA s.65B) authenticating ERP ledgers, API disbursement logs, and digital notice delivery.",
  },
];

const FAQS = [
  {
    question: "How does Section 8 of the Factoring Regulation Act, 2011 protect an SCF NBFC when a buyer pays the vendor directly?",
    answer:
      "Under Section 8 of the Factoring Regulation Act, 2011, once the Factor or SCF NBFC serves a written Notice of Assignment on the debtor (the corporate buyer), the debtor is legally obligated to pay only the Factor. If the corporate buyer ignores the Section 8 notice and pays the vendor directly, that payment does not discharge the buyer's debt to the NBFC—allowing the NBFC to recover the full invoice value directly from the corporate buyer.",
  },
  {
    question: "Why is Section 19 CERSAI registration critical in invoice discounting and double-financing disputes?",
    answer:
      "Section 19 of the Factoring Regulation Act, 2011 mandates registration of every assignment of receivables with CERSAI (Central Registry of Securitisation Asset Reconstruction and Security Interest). In dual-financing or insolvency scenarios, the timestamped CERSAI filing establishes public notice and statutory priority against subsequent lenders, attaching creditors, or an Insolvency Resolution Professional.",
  },
  {
    question: "What legal leverage does an NBFC have when a dealer diverts sales proceeds under anchor-led channel financing?",
    answer:
      "In anchor-led dealer financing, the NBFC should immediately invoke the Tripartite MOU's Anchor Stop-Supply covenant via formal Advocate Intimation, requiring the Anchor OEM to halt fresh inventory dispatches and freeze dealer credit notes or trade incentives. Concurrently, the NBFC issues a Section 25 PSS Act / Section 138 NI Act demand upon e-NACH or security cheque bounce and invokes personal guarantees.",
  },
  {
    question: "What is the legal difference between with-recourse and without-recourse invoice discounting recovery?",
    answer:
      "In with-recourse discounting, the NBFC retains full contractual recourse against the vendor (seller) if the corporate buyer fails to pay on maturity—enabling joint and several demand notices against both the vendor and the buyer (post-Section 8 notice). In without-recourse factoring or TReDS financing, the NBFC absorbs buyer credit risk (absent vendor fraud/warranty breach) and must enforce directly against the corporate buyer using CERSAI s.19 priority and TReDS acceptance logs.",
  },
  {
    question: "How can an SCF lender prosecute a vendor for double-pledging or discounting fake invoices?",
    answer:
      "Discounting the same invoice across two lenders or fabricating GST e-Invoices/e-Way bills constitutes cheating and forgery under Sections 318 and 336 of the Bharatiya Nyaya Sanhita (BNS), 2023 (replacing IPC ss.420 and 468). The lender should immediately freeze CERSAI/GSTN audit trails under BSA 2023 s.63, serve a 48-hour criminal-civil restitution notice on the promoters, and move for Order 38 Rule 5 CPC attachment before judgment alongside an EOW/police complaint.",
  },
  {
    question: "Can a corporate buyer stall an Order XXXVII CPC Summary Suit by raising vague quality disputes months after TReDS acceptance?",
    answer:
      "No. Under Order XXXVII of the Code of Civil Procedure, 1908, once a corporate buyer has unconditionally accepted an invoice or TReDS Factoring Unit and the statutory credit period has lapsed without contemporaneous rejection, belated quality excuses are treated as sham or moonshine defences. Courts routinely refuse unconditional leave to defend or require the buyer to deposit the claimed amount in court.",
  },
  {
    question: "Can our SCF or Factoring desk test LegalRecovery.in on one defaulted account before uploading a bulk portfolio?",
    answer:
      "Yes. Your legal or collections team can initiate a single live ₹999 Advocate-drafted notice (covering Factoring s.8 assignment, Anchor Stop-Supply, or Recourse Recall) via /user/new-recovery to audit our BSA s.63 tri-channel delivery logs, and then scale to 10–10,000+ dealer or vendor accounts via our Bulk CSV Desk.",
  },
];

const STATUTORY_SOURCES = [
  {
    title: "The Factoring Regulation Act, 2011 (Sections 8, 9, 19 & 2021 Amendment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2099",
  },
  {
    title: "Reserve Bank of India (RBI) — Trade Receivables Discounting System (TReDS) Guidelines",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12516",
  },
  {
    title: "CERSAI — Central Registry of Securitisation Asset Reconstruction and Security Interest",
    url: "https://www.cersai.org.in/",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII Summary Procedure & Order XXXVIII Rule 5)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Nyaya Sanhita (BNS), 2023 (Sections 318 & 336) & Bharatiya Sakshya Adhiniyam, 2023 (Section 63)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

export default function ScfInvoiceDiscountingRecoveryPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
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
    datePublished: "2026-11-14",
    dateModified: "2026-11-14",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
  };

  const HOWTO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How SCF NBFCs & Fintechs Recover Defaulted Channel Finance & Factored Receivables",
    description:
      "Four-step legal recovery sequence for supply-chain finance, dealer credit lines, TReDS receivables, and dual-invoice fraud.",
    step: [
      {
        "@type": "HowToStep",
        name: "Audit CERSAI s.19 Registration & Product Recourse Structure",
        text: "Verify whether the facility is anchor-led dealer finance, with-recourse discounting, or without-recourse factoring/TReDS, and extract the Section 19 CERSAI filing.",
      },
      {
        "@type": "HowToStep",
        name: "Serve Section 8 Notice of Assignment or Trigger Anchor Stop-Supply",
        text: "Deliver a written Factoring Act s.8 Notice of Assignment to the corporate buyer or invoke the Anchor's contractual stop-supply covenant against a defaulting dealer.",
      },
      {
        "@type": "HowToStep",
        name: "Issue Statutory Demand (s.25 PSS / s.138 NI / BNS s.318)",
        text: "Serve BSA 2023 s.63-certified tri-channel Advocate Notices for e-NACH bounce, recourse buyback, or dual-financing criminal fraud.",
      },
      {
        "@type": "HowToStep",
        name: "Escalate to Order XXXVII Summary Suit, Batch ODR or EOW",
        text: "File Order 37 CPC Summary Suits on accepted invoices/TReDS FUs, or criminal complaints with Order 38 Rule 5 attachment for double-pledge fraud.",
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
        name: "NBFC & Fintech Recovery",
        item: `${SITE_URL}/industries/nbfc-fintech-loan-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Supply Chain Finance & Factoring Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <>
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              IND-02 NBFC &amp; Fintech Playbook &bull; Factoring Act 2011 &bull; TReDS &amp; BNS s.318
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* 40-60 Word Executive Statutory Summary + Parent Hub Link */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer
              </span>
              Part of our{" "}
              <Link
                href="/industries/nbfc-fintech-loan-recovery"
                className="text-red-300 underline hover:text-white font-semibold"
              >
                NBFC &amp; Fintech Loan Recovery Hub
              </Link>
              , this playbook equips SCF heads to enforce Factoring Regulation Act s.8 assignment notices, s.19 CERSAI priority, anchor stop-supply covenants, Order XXXVII CPC summary suits, and BNS s.318 criminal prosecution for dual-invoice fraud.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-base sm:text-xl font-black text-slate-100">s.8 &amp; s.19</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Factoring Act Notice &amp; CERSAI Priority
                </p>
              </div>
              <div>
                <p className="text-base sm:text-xl font-black text-emerald-400">Stop-Supply</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Anchor OEM Tripartite Leverage
                </p>
              </div>
              <div>
                <p className="text-base sm:text-xl font-black text-amber-400">Order 37 CPC</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  10-Day Summary Appearance Window
                </p>
              </div>
              <div>
                <p className="text-base sm:text-xl font-black text-red-400">BNS s.318</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Dual-Pledge &amp; Fake Invoice Prosecution
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "NBFC & Fintech Recovery", href: "/industries/nbfc-fintech-loan-recovery" },
                { label: "Supply Chain Finance & Factoring Recovery", href: PAGE_URL },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <ScfRecoveryTableOfContents />

            {/* Right Main Editorial Column */}
            <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Tripartite Overview */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Tripartite SCF Default Architecture &amp; Statutory Overview
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Unlike bilateral term loans, Supply-Chain Finance (SCF), dealer channel credit, and invoice discounting operate across a tripartite matrix: the <strong>Financier (NBFC / Factor / TReDS Participant)</strong>, the <strong>Vendor or Dealer (MSME Borrower)</strong>, and the <strong>Corporate Anchor / Buyer</strong>. When cashflows tighten, defaults rarely occur as simple repayment delays. Instead, SCF legal heads confront three acute failure modes: downstream dealers divert sales proceeds while continuing to draw stock; corporate buyers pay vendors directly to bypass the financier; or distressed vendors discount duplicate or fabricated invoices across competing lenders.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Generic consumer-style collection calls fail completely in SCF portfolios. Effective institutional recovery requires synchronizing the <strong>Factoring Regulation Act, 2011</strong> (specifically Section 8 written notices of assignment and Section 19 CERSAI registrations), <strong>RBI TReDS Master Guidelines</strong>, <strong>Order XXXVII of the Code of Civil Procedure, 1908</strong>, and criminal fraud remedies under <strong>Sections 318 and 336 of the Bharatiya Nyaya Sanhita (BNS), 2023</strong>. Where an NBFC also manages high-volume digital mandates, pairing SCF notices with{" "}
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                  >
                    dedicated NBFC statutory demand workflows
                  </Link>{" "}
                  prevents debtors from exploiting inter-party finger-pointing.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every escalation step must also preserve RBI Fair Practices Code compliance. As detailed in our{" "}
                  <Link
                    href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                    className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                  >
                    RBI-compliant legal escalation guide for NBFCs
                  </Link>
                  , replacing aggressive field-agent pressure with formal, advocate-signed tri-channel notices shields the lender from regulatory penalties while creating an admissible evidentiary trail under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023.
                </p>
              </section>

              {/* Section 2: Decision Tree SVG + Mobile Cards */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Decision Tree: Dealer vs. Vendor vs. Anchor Default Tracks
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before issuing a demand notice, SCF legal and credit teams must route the defaulted facility into the exact statutory track dictated by recourse structure and fraud indicators. Misclassifying a non-recourse TReDS default as a vendor recall, or missing a Section 8 notice to the corporate buyer, destroys recovery priority.
                </p>

                {/* Desktop SVG Decision Tree */}
                <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 bg-slate-900 p-4">
                  <svg
                    width="840"
                    height="260"
                    viewBox="0 0 840 260"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    role="img"
                    aria-label="Supply Chain Finance Default Escalation Decision Tree"
                  >
                    {/* Root Node */}
                    <rect x="20" y="95" width="175" height="70" rx="10" fill="#DC2626" />
                    <text x="107" y="124" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                      SCF / Factoring Default
                    </text>
                    <text x="107" y="142" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                      Triage Recourse &amp; Fraud
                    </text>

                    {/* Connector Lines */}
                    <path d="M195 130 H245 V35 H280" stroke="#94A3B8" strokeWidth="2" />
                    <path d="M245 130 V98 H280" stroke="#94A3B8" strokeWidth="2" />
                    <path d="M245 130 V162 H280" stroke="#94A3B8" strokeWidth="2" />
                    <path d="M245 130 V225 H280" stroke="#94A3B8" strokeWidth="2" />

                    {/* Branch 1 */}
                    <rect x="280" y="10" width="250" height="50" rx="8" fill="#1E293B" stroke="#475569" />
                    <text x="295" y="31" fill="#F8FAFC" fontSize="11" fontWeight="bold">
                      1. Dealer Sales Diversion (Channel)
                    </text>
                    <text x="295" y="47" fill="#94A3B8" fontSize="10">
                      Anchor Stop-Supply + s.25 PSS Notice
                    </text>

                    {/* Branch 2 */}
                    <rect x="280" y="73" width="250" height="50" rx="8" fill="#1E293B" stroke="#475569" />
                    <text x="295" y="94" fill="#F8FAFC" fontSize="11" fontWeight="bold">
                      2. With-Recourse Vendor Default
                    </text>
                    <text x="295" y="110" fill="#94A3B8" fontSize="10">
                      Factoring s.8 Buyer Notice + Vendor Recall
                    </text>

                    {/* Branch 3 */}
                    <rect x="280" y="137" width="250" height="50" rx="8" fill="#1E293B" stroke="#475569" />
                    <text x="295" y="158" fill="#F8FAFC" fontSize="11" fontWeight="bold">
                      3. Without-Recourse / TReDS Buyer
                    </text>
                    <text x="295" y="174" fill="#94A3B8" fontSize="10">
                      s.19 CERSAI Priority + Buyer Demand
                    </text>

                    {/* Branch 4 */}
                    <rect x="280" y="200" width="250" height="50" rx="8" fill="#450A0A" stroke="#DC2626" />
                    <text x="295" y="221" fill="#FECACA" fontSize="11" fontWeight="bold">
                      4. Double-Pledge / Fake Invoice
                    </text>
                    <text x="295" y="237" fill="#FCA5A5" fontSize="10">
                      48h BNS s.318/336 Notice + GST Audit
                    </text>

                    {/* Right Arrow Connectors */}
                    <path d="M530 35 H575" stroke="#10B981" strokeWidth="2" />
                    <path d="M530 98 H575" stroke="#10B981" strokeWidth="2" />
                    <path d="M530 162 H575" stroke="#F59E0B" strokeWidth="2" />
                    <path d="M530 225 H575" stroke="#EF4444" strokeWidth="2" />

                    {/* Forum Outcome Nodes */}
                    <rect x="575" y="10" width="245" height="50" rx="8" fill="#064E3B" />
                    <text x="697" y="31" textAnchor="middle" fill="#ECFDF5" fontSize="11" fontWeight="bold">
                      Order 37 CPC / Batch ODR
                    </text>
                    <text x="697" y="47" textAnchor="middle" fill="#A7F3D0" fontSize="10">
                      Freeze Anchor Credit Notes &amp; Attach
                    </text>

                    <rect x="575" y="73" width="245" height="50" rx="8" fill="#064E3B" />
                    <text x="697" y="94" textAnchor="middle" fill="#ECFDF5" fontSize="11" fontWeight="bold">
                      Joint &amp; Several Summary Suit
                    </text>
                    <text x="697" y="110" textAnchor="middle" fill="#A7F3D0" fontSize="10">
                      Enforce Guarantee + Direct Buyer Claim
                    </text>

                    <rect x="575" y="137" width="245" height="50" rx="8" fill="#78350F" />
                    <text x="697" y="158" textAnchor="middle" fill="#FEF3C7" fontSize="11" fontWeight="bold">
                      Commercial Court / IBC s.7
                    </text>
                    <text x="697" y="174" textAnchor="middle" fill="#FDE68A" fontSize="10">
                      TReDS FU Log Defeats Quality Excuse
                    </text>

                    <rect x="575" y="200" width="245" height="50" rx="8" fill="#7F1D1D" />
                    <text x="697" y="221" textAnchor="middle" fill="#FEF2F2" fontSize="11" fontWeight="bold">
                      EOW Criminal + Order 38 r.5
                    </text>
                    <text x="697" y="237" textAnchor="middle" fill="#FECACA" fontSize="10">
                      Promoter Liability &amp; Asset Freeze
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Decision Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  <div className="rounded-xl border border-slate-200 bg-slate-900 text-white p-4">
                    <p className="text-xs font-bold text-emerald-400 uppercase mb-1">Track 1: Dealer Diversion</p>
                    <p className="text-xs text-slate-200">Anchor Stop-Supply Covenant &rarr; s.25 PSS Act Notice &rarr; Order 37 CPC / ODR.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-900 text-white p-4">
                    <p className="text-xs font-bold text-emerald-400 uppercase mb-1">Track 2: With-Recourse Vendor</p>
                    <p className="text-xs text-slate-200">Factoring s.8 Buyer Notice + Vendor Recourse Recall &rarr; Joint Summary Suit.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-900 text-white p-4">
                    <p className="text-xs font-bold text-amber-400 uppercase mb-1">Track 3: Without-Recourse / TReDS</p>
                    <p className="text-xs text-slate-200">s.19 CERSAI Priority + TReDS Acceptance Audit &rarr; Commercial Court / IBC.</p>
                  </div>
                  <div className="rounded-xl border border-red-800 bg-red-950 text-white p-4">
                    <p className="text-xs font-bold text-red-300 uppercase mb-1">Track 4: Double-Pledge Fraud</p>
                    <p className="text-xs text-red-100">48h BNS s.318/336 Notice + GST IRN Audit &rarr; EOW Complaint + Order 38 r.5.</p>
                  </div>
                </div>
              </section>

              {/* Section 3: Statutory Matrix Table */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Matrix: Factoring Act, TReDS, Order 37 &amp; BNS s.318
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  SCF recovery succeeds when legal counsel stacks statutory remedies rather than relying on a single slow civil suit. Use this matrix to pair the underlying commercial trigger with the fastest statutory lever. For MSME vendor delayed-payment interest computations, pair your demand schedule with our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left border-collapse min-w-[680px]">
                    <thead>
                      <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                        <th className="p-3.5 font-bold">Statute / Mechanism</th>
                        <th className="p-3.5 font-bold">Default Trigger</th>
                        <th className="p-3.5 font-bold">Notice / Action Window</th>
                        <th className="p-3.5 font-bold">Creditor Leverage</th>
                        <th className="p-3.5 font-bold">Primary Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                      {STATUTORY_MATRIX_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">{row.instrument}</td>
                          <td className="p-3.5 text-slate-700">{row.trigger}</td>
                          <td className="p-3.5 text-slate-700">{row.timeline}</td>
                          <td className="p-3.5 text-slate-700">{row.leverage}</td>
                          <td className="p-3.5">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                row.tone === "emerald"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : row.tone === "amber"
                                  ? "bg-amber-50 text-amber-700 border border-amber-200"
                                  : row.tone === "red"
                                  ? "bg-red-50 text-[#DC2626] border border-red-200"
                                  : "bg-slate-100 text-slate-700 border border-slate-200"
                              }`}
                            >
                              {row.forum}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Operational Failure Modes in Channel &amp; Invoice Finance
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select an operational failure mode below to inspect the exact notice sequencing, tripartite covenants, and statutory escalation path for your SCF portfolio. If your borrowers frequently respond with boilerplate dispute letters, review our{" "}
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                  >
                    commercial legal notice &amp; reply format workspace
                  </Link>{" "}
                  or escalate unresolved mid-ticket disputes through{" "}
                  <Link
                    href="/online-dispute-resolution-india"
                    className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                  >
                    Online Dispute Resolution (ODR) in India
                  </Link>
                  .
                </p>

                <ScfRecoveryScenarioTabs />
              </section>

              {/* Section 5: Worked Financial & Recovery Ledger */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Worked Ledger: ₹42L Channel Default &amp; Dual-Pledge Recovery
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consider an NBFC SCF desk facing a <strong>₹42,00,000</strong> default across two linked exposures: ₹24,00,000 in overdue dealer channel tranches (90 DPD) and ₹18,00,000 in discounted vendor invoices where the corporate buyer claims it already paid the vendor directly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 space-y-3">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase bg-amber-100 text-amber-800">
                      Unstructured Civil Approach
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Generic Recovery Suit Without s.8 / Anchor Leverage
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li>&bull; <strong>Buyer Discharge Defence:</strong> Without proof of Factoring Act s.8 Notice of Assignment, buyer pleads valid discharge by paying vendor.</li>
                      <li>&bull; <strong>Ongoing Dealer Leakage:</strong> Dealer continues sourcing stock from Anchor while litigation drags.</li>
                      <li>&bull; <strong>Timeline &amp; Cost:</strong> 24–48 months in regular civil court; ₹2.5L+ legal &amp; court fees; high NPA provisioning drag.</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 space-y-3">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase bg-emerald-100 text-emerald-800">
                      Integrated SCF Playbook
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Anchor Stop-Supply + s.8 Buyer Notice + Order 37 / BNS s.318
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li>&bull; <strong>₹24L Dealer Line:</strong> Anchor Stop-Supply notice freezes ₹6.5L in dealer credit notes and halts dispatch within 72 hours, forcing structured settlement.</li>
                      <li>&bull; <strong>₹18L Factored Invoices:</strong> s.8 Notice + s.19 CERSAI priority strips buyer&apos;s discharge defence; Order 37 + BNS s.318 notice compels vendor buyback.</li>
                      <li>&bull; <strong>Timeline:</strong> 15–45 days pre-suit resolution or 10-day summary appearance trigger.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: BSA 2023 s.63 & CERSAI Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    BSA 2023 s.63, CERSAI &amp; TReDS Evidence Checklist
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  High-velocity SCF platforms originate and discount thousands of invoices via APIs. To survive Order XXXVII scrutiny or substantiate a BNS s.318 dual-pledge complaint, compile these six evidentiary records before dispatch. For multi-channel batch dispatch across hundreds of dealers, see our{" "}
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                  >
                    bulk email, WhatsApp &amp; Speed Post notice solution
                  </Link>
                  .
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {EVIDENCE_CHECKLIST.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5"
                    >
                      <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {idx + 1}. {item.title}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7: Dual-Track B2B CTA */}
              <section
                id="heading-deploy-cta"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Deploy SCF Recovery: Single ₹999 Test or Bulk CSV Desk
                  </h2>
                </div>
                <ScfRecoveryCTA />
              </section>

              {/* Section 8: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    FAQs: Supply-Chain Finance &amp; Factoring Default Recovery
                  </h2>
                </div>
                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group rounded-xl border border-slate-200 bg-slate-50/60 p-4 open:bg-white open:shadow-sm transition-all"
                    >
                      <summary className="cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 9: Statutory Portals */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Authorities, TReDS &amp; CERSAI Portals
                  </h2>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700">
                  {STATUTORY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span>
                    Reviewed by <strong className="text-slate-700">{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
                  </span>
                  <span>Updated 14 Nov 2026 &bull; India B2B SCF Recovery Standard</span>
                </div>
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-2 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related NBFC, Factoring &amp; Institutional Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/industries/nbfc-fintech-loan-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NBFC &amp; Fintech Recovery Hub &rarr;
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NBFC Unpaid Dues Legal Notice &rarr;
                  </Link>
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Email, WhatsApp &amp; Speed Post Notices &rarr;
                  </Link>
                  <Link
                    href="/online-dispute-resolution-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Online Dispute Resolution (ODR) India &rarr;
                  </Link>
                  <Link
                    href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    RBI Compliant NBFC Escalation &rarr;
                  </Link>
                  <Link
                    href="/small-ticket-digital-personal-loan-bnpl-recovery-economics"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Small-Ticket BNPL Recovery Economics &rarr;
                  </Link>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME Interest Calculator &rarr;
                  </Link>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk CSV Institutional Recovery Desk &rarr;
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
