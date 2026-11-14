import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BnplEconomicsTableOfContents from "./BnplEconomicsTableOfContents";
import BnplEconomicsScenarioTabs from "./BnplEconomicsScenarioTabs";
import BnplEconomicsCTA from "./BnplEconomicsCTA";

export const revalidate = 86400;

const PAGE_URL = "/small-ticket-digital-personal-loan-bnpl-recovery-economics";
const EXACT_H1 =
  "Unit-Economics Playbook for Small-Ticket Fintech & BNPL Defaults (₹5,000–₹1,00,000): Digital Notices, CIC Leverage & Batch ODR";
const META_TITLE = "Small-Ticket Digital Loan & BNPL Recovery (₹5K–₹1L)";
const META_DESCRIPTION =
  "Don't spend ₹15K litigating an ₹18K BNPL default. Learn unit-positive BSA s.63 digital notices, 30-day CIC pre-reporting alerts & s.29B batch ODR.";

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
        alt: formatAltText("Small-Ticket Digital Loan and BNPL Recovery Economics Playbook India"),
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

const FORUM_MATRIX_ROWS = [
  {
    forum: "Traditional Civil Suit / Order 37 CPC",
    floor: "No statutory floor (economically unviable < ₹2,00,000)",
    cost: "₹15,000 – ₹45,000+ (Ad valorem court fee + counsel appearances)",
    timeline: "24 – 60 months",
    interimFreeze: "Order 38 Rule 5 (Rarely granted on unsecured retail)",
    enforceability: "Civil Court Decree (Order 21 execution)",
    verdict: "Negative ROI below ₹1L",
    verdictTone: "red",
  },
  {
    forum: "Traditional Physical Law Firm Notice",
    floor: "₹5,000+ (Manual drafting)",
    cost: "₹3,500 – ₹10,000 per account",
    timeline: "15 – 30 days",
    interimFreeze: "None (Pre-litigation demand)",
    enforceability: "Evidentiary demand only",
    verdict: "Erodes 20%–50% of ₹18K loan",
    verdictTone: "red",
  },
  {
    forum: "Wave-1 Digital Advocate Notice + 30-Day CICRA Pre-Alert",
    floor: "₹5,000 – ₹1,00,000+",
    cost: "Low unit cost (Batch digital dispatch)",
    timeline: "24 hours dispatch; 7–15 day cure window",
    interimFreeze: "Bureau score impact disclosure (CICRA 2005)",
    enforceability: "BSA 2023 s.63 certified email & WhatsApp logs",
    verdict: "Unit-Positive (Wave-1)",
    verdictTone: "emerald",
  },
  {
    forum: "Wave-2 Selective Speed Post RPAD",
    floor: "₹15,000+ or Wave-1 engaged cohorts",
    cost: "At-cost postal + advocate dispatch",
    timeline: "5 – 10 days postal delivery + tracking",
    interimFreeze: "Formal statutory recall & Section 25 PSS warning",
    enforceability: "Section 27 General Clauses Act deemed service",
    verdict: "Unit-Positive (Targeted)",
    verdictTone: "emerald",
  },
  {
    forum: "Institutional Batch ODR Arbitration (s.29B)",
    floor: "₹35,000 – ₹1,00,000+ (Batch CSV)",
    cost: "Fraction of civil court cost via batch slabs",
    timeline: "90 – 180 days (Documents-only Fast Track)",
    interimFreeze: "Section 17 interim relief (where warranted)",
    enforceability: "Section 36 Decree-Equivalent Arbitral Award",
    verdict: "Positive above ₹50K cohort",
    verdictTone: "emerald",
  },
  {
    forum: "Pre-Litigation Lok Adalat (NALSA / SLSA)",
    floor: "₹5,000 – ₹1,00,000",
    cost: "Zero court fee",
    timeline: "30 – 90 days (Quarterly/Special Lok Adalat sittings)",
    interimFreeze: "None (Consent-based settlement)",
    enforceability: "Section 21 Legal Services Authorities Act Decree",
    verdict: "Zero-fee settlement rail",
    verdictTone: "amber",
  },
];

const STATUTORY_SOURCES = [
  {
    title:
      "Credit Information Companies (Regulation) Act, 2005 (CICRA) & Rules — Credit Bureau Reporting & Pre-Adverse Notice Standards",
    url: "https://www.indiacode.nic.in/handle/123456789/2049",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records & Hash Certificates)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Arbitration and Conciliation Act, 1996 (Sections 7, 12(5), 21, 25(b), 29B Fast-Track & 36 Execution)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer / e-NACH Mandates)",
    url: "https://www.indiacode.nic.in/handle/123456789/2067",
  },
  {
    title:
      "Reserve Bank of India (RBI) — Master Direction on Digital Lending & Fair Practices Code for NBFCs",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11566",
  },
  {
    title:
      "Information Technology Act, 2000 (Section 10A — Validity of Contracts Formed Through Electronic Means)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
];

const FAQS = [
  {
    question:
      "Why do traditional law firms fail on ₹5,000 to ₹50,000 BNPL and digital personal loan defaults?",
    answer:
      "Traditional law firms price per-case drafting, physical Speed Post, and court appearances between ₹5,000 and ₹25,000. On an ₹18,000 BNPL default or ₹30,000 app-based personal loan, spending ₹10,000–₹15,000 upfront produces negative recovery unit economics even before factoring in 20%–40% non-traceable borrower attrition. A digital-first Wave-1 advocate notice funnel keeps initial legal spend low enough to preserve positive net yield across the entire 30+ DPD cohort.",
  },
  {
    question:
      "How does a 30-day CICRA pre-adverse reporting notice increase small-ticket recovery?",
    answer:
      "Under the Credit Information Companies (Regulation) Act, 2005 (CICRA) and RBI credit-reporting directions, lenders report 30+, 60+, and 90+ DPD delinquencies to CIBIL, Experian, CRIF High Mark, and Equifax. When an advocate's Wave-1 digital notice attaches a clear 30-day pre-reporting schedule explaining how a default or 'Settled' flag blocks future home, auto, and credit-card approvals, salaried and prime-adjacent BNPL borrowers prioritize curing the overdue EMI before bureau lock-in.",
  },
  {
    question:
      "Are WhatsApp blue-tick and email advocate notices legally admissible under Indian evidence law?",
    answer:
      "Yes. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA, replacing Section 65B of the Indian Evidence Act, 1872), electronic records—including verified business WhatsApp delivery/read-receipt logs, email SMTP transmission headers, and timestamped PDF hashes—are admissible in arbitral tribunals and courts when accompanied by a statutory Section 63 certificate.",
  },
  {
    question:
      "When should an NBFC or fintech escalate from Wave-1 Digital Notice to Wave-2 Speed Post RPAD?",
    answer:
      "To protect portfolio unit economics, Wave-2 physical Speed Post RPAD should not be blasted blindly across ₹5,000–₹15,000 accounts. Instead, deploy RPAD selectively on: (1) accounts above ₹15,000–₹25,000 principal, (2) borrowers who opened or read Wave-1 digital notices without paying, or (3) accounts slated for Section 25 PSS Act e-NACH prosecution or Institutional Batch ODR where Section 27 General Clauses Act postal proof strengthens ex-parte service.",
  },
  {
    question:
      "Can click-wrap OTP loan agreements be enforced in Institutional Batch ODR under Section 29B?",
    answer:
      "Yes. Section 10A of the Information Technology Act, 2000 validates contracts formed electronically, and Section 7(4)(b) of the Arbitration and Conciliation Act, 1996 recognizes arbitration clauses in electronic records. Moreover, the 7-Judge Supreme Court Constitution Bench in In Re: Interplay between Arbitration Agreements and the Indian Stamp Act (2023) held that stamp duty defects do not void the arbitration clause at inception.",
  },
  {
    question:
      "How does an NBFC avoid Perkins Eastman invalidation in high-volume ODR arbitration?",
    answer:
      "Following Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020) and the 2024 Constitution Bench ruling in Central Organisation for Railway Electrification (CORE), a lender cannot unilaterally appoint its own empaneled advocate or internal officer as sole arbitrator. Fintechs and NBFCs must refer batch disputes to an independent ODR institution maintaining a neutral, transparent panel compliant with Section 12(5) and the Seventh Schedule.",
  },
  {
    question:
      "Can our fintech test LegalRecovery.in on one overdue BNPL account before uploading a 5,000-row CSV?",
    answer:
      "Yes. Track 1 allows your collections or legal ops team to run a single live overdue account at ₹999 (advocate-drafted Email + WhatsApp + optional Speed Post RPAD) to inspect our BSA s.63 delivery audit trail and borrower reply triage before activating Track 2 CSV batch processing for 10 to 10,000+ cases.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  inLanguage: "en-IN",
};

const TABLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Table",
  name: "Small-Ticket Digital Loan & BNPL Recovery Forum Comparison Matrix (₹5,000–₹1,00,000)",
  about:
    "Side-by-side comparison of Civil Suits, Traditional Law Firm Notices, Wave-1 Digital Advocate Notices with CICRA Pre-Alerts, Wave-2 Selective Speed Post RPAD, Batch ODR s.29B, and Lok Adalat.",
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
      name: "Small-Ticket & BNPL Recovery Economics",
      item: `${SITE_URL}${PAGE_URL}`,
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

export default function SmallTicketBnplRecoveryEconomicsPage() {
  const breadcrumbItems = [
    { label: "NBFC & Fintech Recovery", href: "/industries/nbfc-fintech-loan-recovery" },
    { label: "Small-Ticket & BNPL Economics", href: PAGE_URL },
  ];

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-02 &bull; Fintech &amp; BNPL Collections</span>
              <span className="text-red-500">&bull;</span>
              <span>CICRA 2005 &amp; BSA s.63</span>
              <span className="text-red-500">&bull;</span>
              <span>Batch ODR s.29B</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Creditor Summary Box (40-60 words + Parent Hub link) */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer (Small-Ticket Unit Economics)
              </span>
              <p>
                Within our{" "}
                <Link
                  href="/industries/nbfc-fintech-loan-recovery"
                  className="text-red-300 underline hover:text-white font-bold"
                >
                  NBFC &amp; Fintech Loan Recovery Playbook
                </Link>
                , portfolios between ₹5,000 and ₹1,00,000 cannot absorb ₹15,000 traditional litigation fees. Creditors achieve positive net yield by staging Wave-1 BSA s.63 digital advocate notices with 30-day CICRA bureau pre-reporting alerts, reserving Speed Post RPAD for engaged cohorts, and routing ₹50K+ defaults into Section 29B batch ODR.
              </p>
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl md:text-3xl font-black text-slate-100">
                  ₹5K–₹1L
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Target BNPL &amp; Digital PL Ticket Band
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl md:text-3xl font-black text-emerald-400">
                  30-Day CIC
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  CICRA Pre-Adverse Reporting Leverage
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl md:text-3xl font-black text-amber-400">
                  BSA s.63
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Certified WhatsApp &amp; Email Service
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl md:text-3xl font-black text-red-400">
                  90–180d
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Batch ODR s.29B Award Target
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <BnplEconomicsTableOfContents />

            <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Unit Economics Gap */}
              <section
                id="heading-unit-economics-gap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Why Traditional Litigation Fails Under ₹1,00,000
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For a Digital Lending Fintech, Consumer Durable NBFC, or BNPL issuer, the central collections paradox is mathematical: you cannot spend ₹15,000 litigating an ₹18,000 default. Traditional law firms quote ₹5,000 to ₹25,000 per file across drafting, physical postal dispatch, court fees, and advocate appearances. When applied to 5,000 small-ticket 60+ DPD accounts, upfront legal fees exceed gross recoverable principal before a single decree is passed.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Meanwhile, relying solely on telecalling agencies exposes regulated entities to RBI Fair Practices Code and Digital Lending Directions scrutiny—especially around calling-hour violations (8:00 AM–7:00 PM limits) and third-party harassment complaints before the RBI Ombudsman. Replacing unstructured call pressure with a{" "}
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    staged digital advocate notice workflow
                  </Link>{" "}
                  restores statutory deterrence while keeping cost-per-account aligned with small-ticket margins.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-xl bg-red-50 border border-red-200 p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      Traditional Firm Trap
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium">
                      ₹5,000–₹25,000 fixed per-case fee destroys IRR on ₹10K–₹50K loans.
                    </p>
                  </div>
                  <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-1">
                      Telecalling Ceiling
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium">
                      Call-centre fatigue sets in after 45 DPD with zero statutory or bureau consequence.
                    </p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-1">
                      Staged Funnel Cure
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium">
                      Wave-1 digital + CICRA alert filters payers; Wave-2 RPAD &amp; ODR target survivors.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: G2 Forum & Remedy Comparison Matrix */}
              <section
                id="heading-forum-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Small-Ticket Forum &amp; Remedy Comparison Matrix
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  CFOs and Heads of Legal evaluating recovery channels for ₹5,000–₹1,00,000 unsecured portfolios must benchmark every forum on six institutional criteria: pecuniary floor, per-case cost, statutory timeline, interim leverage, enforceability, and net unit-economics viability.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">Forum / Escalation Track</th>
                        <th className="p-3.5 font-bold">Ticket Floor</th>
                        <th className="p-3.5 font-bold">Cost Structure</th>
                        <th className="p-3.5 font-bold">Timeline</th>
                        <th className="p-3.5 font-bold">Enforceability</th>
                        <th className="p-3.5 font-bold">CFO Verdict</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {FORUM_MATRIX_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors align-top">
                          <td className="p-3.5 font-bold text-slate-900">{row.forum}</td>
                          <td className="p-3.5 text-slate-700">{row.floor}</td>
                          <td className="p-3.5 text-slate-700">{row.cost}</td>
                          <td className="p-3.5 text-slate-700">{row.timeline}</td>
                          <td className="p-3.5 text-slate-700">{row.enforceability}</td>
                          <td className="p-3.5">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                                row.verdictTone === "emerald"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : row.verdictTone === "amber"
                                    ? "bg-amber-50 text-amber-700 border-amber-200"
                                    : "bg-red-50 text-[#DC2626] border-red-200"
                              }`}
                            >
                              {row.verdict}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-slate-500">
                  Need to compare DRT or Commercial Court thresholds for larger SME/LAP books above ₹20 Lakh? Run our{" "}
                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="text-[#DC2626] font-semibold underline"
                  >
                    SARFAESI &amp; DRT Recovery Forum Calculator
                  </Link>
                  .
                </p>
              </section>

              {/* Section 3: 3-Wave Funnel Architecture (SVG + Mobile Cards) */}
              <section
                id="heading-wave-architecture"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    3-Wave Funnel Architecture: Notice to Batch ODR
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Instead of committing full litigation or physical postal spend on Day 1 of delinquency, unit-positive fintech collections operate as a gated funnel. Each wave filters out self-curing borrowers before incremental legal capital is deployed on the next tier.
                </p>

                {/* Desktop SVG Diagram */}
                <div className="hidden md:block w-full overflow-x-auto rounded-xl border border-slate-200 bg-slate-900 p-4">
                  <svg
                    viewBox="0 0 840 240"
                    width={840}
                    height={240}
                    role="img"
                    aria-label="3-Wave Small-Ticket BNPL and Digital Loan Recovery Funnel"
                    className="w-full h-auto"
                  >
                    <rect x="15" y="25" width="240" height="190" rx="14" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="35" y="55" fill="#F87171" fontSize="12" fontWeight="700">WAVE 1 &bull; DAY 15–30 DPD</text>
                    <text x="35" y="80" fill="#FFFFFF" fontSize="15" fontWeight="800">Digital Advocate Notice</text>
                    <text x="35" y="106" fill="#CBD5E1" fontSize="12">&bull; WhatsApp Blue-Tick + Email</text>
                    <text x="35" y="128" fill="#CBD5E1" fontSize="12">&bull; 30-Day CICRA Pre-Alert</text>
                    <text x="35" y="150" fill="#CBD5E1" fontSize="12">&bull; Instant UPI / QR Pay Link</text>
                    <text x="35" y="185" fill="#34D399" fontSize="11" fontWeight="700">BSA s.63 Electronic Proof</text>

                    <path d="M260 120 L295 120" stroke="#94A3B8" strokeWidth="2.5" />
                    <polygon points="295,114 307,120 295,126" fill="#DC2626" />

                    <rect x="310" y="25" width="240" height="190" rx="14" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                    <text x="330" y="55" fill="#FBBF24" fontSize="12" fontWeight="700">WAVE 2 &bull; DAY 35–55 DPD</text>
                    <text x="330" y="80" fill="#FFFFFF" fontSize="15" fontWeight="800">Selective Speed Post RPAD</text>
                    <text x="330" y="106" fill="#CBD5E1" fontSize="12">&bull; Responsive / ₹15K+ Cohorts</text>
                    <text x="330" y="128" fill="#CBD5E1" fontSize="12">&bull; Sec 25 PSS e-NACH Warning</text>
                    <text x="330" y="150" fill="#CBD5E1" fontSize="12">&bull; Inbound Reply Triage Desk</text>
                    <text x="330" y="185" fill="#FBBF24" fontSize="11" fontWeight="700">Sec 27 GC Act Deemed Service</text>

                    <path d="M555 120 L590 120" stroke="#94A3B8" strokeWidth="2.5" />
                    <polygon points="590,114 602,120 590,126" fill="#10B981" />

                    <rect x="605" y="25" width="220" height="190" rx="14" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="625" y="55" fill="#34D399" fontSize="12" fontWeight="700">WAVE 3 &bull; DAY 60+ DPD</text>
                    <text x="625" y="80" fill="#FFFFFF" fontSize="15" fontWeight="800">Batch ODR (s.29B)</text>
                    <text x="625" y="106" fill="#CBD5E1" fontSize="12">&bull; ₹50K–₹1L+ &amp; Salaried</text>
                    <text x="625" y="128" fill="#CBD5E1" fontSize="12">&bull; Neutral s.12(5) Panel</text>
                    <text x="625" y="150" fill="#CBD5E1" fontSize="12">&bull; Ex-Parte s.25(b) Award</text>
                    <text x="625" y="185" fill="#34D399" fontSize="11" fontWeight="700">s.36 Decree-Force Award</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden grid grid-cols-1 gap-3">
                  <div className="rounded-xl bg-slate-900 text-white p-4 border-l-4 border-[#DC2626]">
                    <p className="text-[11px] font-bold text-red-400 uppercase">Wave 1 &bull; Day 15–30 DPD</p>
                    <p className="font-bold text-sm mt-0.5">Digital Advocate Notice + 30-Day CICRA Pre-Alert</p>
                    <p className="text-xs text-slate-300 mt-1">WhatsApp blue-tick + email dispatch with UPI payment link and BSA s.63 logs.</p>
                  </div>
                  <div className="rounded-xl bg-slate-900 text-white p-4 border-l-4 border-amber-400">
                    <p className="text-[11px] font-bold text-amber-400 uppercase">Wave 2 &bull; Day 35–55 DPD</p>
                    <p className="font-bold text-sm mt-0.5">Selective Speed Post RPAD on Engaged Cohorts</p>
                    <p className="text-xs text-slate-300 mt-1">Physical dispatch on ₹15K+ or Wave-1 engaged accounts + Section 25 PSS Act warning.</p>
                  </div>
                  <div className="rounded-xl bg-slate-900 text-white p-4 border-l-4 border-emerald-400">
                    <p className="text-[11px] font-bold text-emerald-400 uppercase">Wave 3 &bull; Day 60+ DPD</p>
                    <p className="font-bold text-sm mt-0.5">Institutional Batch ODR (Section 29B)</p>
                    <p className="text-xs text-slate-300 mt-1">CSV batch filing for ₹50K+ &amp; salaried accounts via neutral Section 12(5) arbitral panels.</p>
                  </div>
                </div>
              </section>

              {/* Section 4: Interactive Ticket-Tier & Cohort Escalation Matrix */}
              <section
                id="heading-cohort-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Interactive Ticket-Tier &amp; Cohort Escalation Matrix
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select a principal ticket band below to inspect the exact unit-economics constraint, statutory hooks, and 3-step execution sequence recommended for fintech and NBFC collections desks.
                </p>
                <BnplEconomicsScenarioTabs />
              </section>

              {/* Section 5: Statutory Levers */}
              <section
                id="heading-statutory-levers"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    CICRA 2005 Pre-Adverse Alerts &amp; BSA s.63 Proof
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      1. CICRA 2005 Pre-Adverse Reporting Leverage
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under the Credit Information Companies (Regulation) Act, 2005 and RBI bureau-reporting mandates, issuing a structured 30-day pre-adverse alert inside an advocate notice signals that non-payment will crystallize as a 60+/90+ DPD or &ldquo;Written-Off&rdquo; remark across all four Indian credit bureaus—creating immediate credit-access urgency without filing a suit.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      2. Bharatiya Sakshya Adhiniyam, 2023 Section 63
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Every Wave-1 WhatsApp blue-tick receipt, email SMTP delivery log, and borrower OTP click-wrap audit trail is preserved with a Section 63 BSA electronic record certificate, ensuring seamless admissibility if the account escalates to{" "}
                      <Link
                        href="/online-dispute-resolution-india"
                        className="text-[#DC2626] font-semibold underline"
                      >
                        Online Dispute Resolution (ODR)
                      </Link>
                      .
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      3. Fast-Track Batch ODR (Section 29B &amp; Section 25(b))
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      For ₹50,000–₹1,00,000+ cohorts, documents-only fast-track arbitration under Section 29B of the Arbitration and Conciliation Act, 1996—administered by neutral Section 12(5) panels compliant with <em>Perkins Eastman</em>—allows tribunals to pass ex-parte Section 25(b) awards within 90–180 days.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      4. Section 25 PSS Act e-NACH Parity
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Where a digital borrower&apos;s e-NACH or UPI AutoPay mandate bounces for insufficient funds, Section 25 of the Payment and Settlement Systems Act, 2007 grants criminal-complaint parity with Section 138 NI Act upon serving a 15-day statutory demand notice.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Cost & Time-to-Recovery Numerical Ledger */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Cost &amp; Time-to-Recovery Ledger: ₹18K vs ₹75K
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The illustrative comparison below demonstrates why gating legal spend by ticket size and Wave-1 engagement protects portfolio IRR across a 1,000-account delinquent fintech cohort.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 space-y-3 border border-slate-800">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase bg-red-950 text-red-400 border border-red-800">
                      Cohort A: ₹18,000 BNPL Default
                    </span>
                    <h3 className="text-base sm:text-lg font-bold">
                      Traditional Law Firm vs Wave-1 Digital + CIC Alert
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <li className="flex justify-between border-b border-slate-800 pb-1.5">
                        <span>Traditional Civil / Law Firm Spend:</span>
                        <span className="font-bold text-red-400">₹15,000 (83% of principal)</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-800 pb-1.5">
                        <span>Recommended Track:</span>
                        <span className="font-bold text-emerald-400">Wave-1 Digital + 30d CIC Alert</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-800 pb-1.5">
                        <span>Wave-2 RPAD Trigger:</span>
                        <span className="font-bold text-amber-400">Engaged / Responsive Only</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Litigation / ODR Filing:</span>
                        <span className="font-bold text-slate-200">Avoided (Lok Adalat / Write-Off)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-emerald-50/70 text-slate-900 p-5 sm:p-6 space-y-3 border border-emerald-200">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                      Cohort B: ₹75,000 Digital Personal Loan
                    </span>
                    <h3 className="text-base sm:text-lg font-bold">
                      3-Wave Funnel + Batch ODR (Section 29B)
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li className="flex justify-between border-b border-emerald-200 pb-1.5">
                        <span>Wave-1 Digital + CICRA Notice:</span>
                        <span className="font-bold text-slate-900">Day 15–30 DPD</span>
                      </li>
                      <li className="flex justify-between border-b border-emerald-200 pb-1.5">
                        <span>Wave-2 Speed Post RPAD + s.25 PSS:</span>
                        <span className="font-bold text-slate-900">Day 35–50 DPD</span>
                      </li>
                      <li className="flex justify-between border-b border-emerald-200 pb-1.5">
                        <span>Wave-3 Batch ODR (s.29B):</span>
                        <span className="font-bold text-emerald-700">90–180 Days Award</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Execution Screen:</span>
                        <span className="font-bold text-slate-900">s.36 + Order 21 (Salaried)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600">
                  For compliant loan recall and guarantee invocation phrasing on higher-ticket SME/fintech books, review our{" "}
                  <Link
                    href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                    className="text-[#DC2626] font-semibold underline"
                  >
                    Advocate-Vetted Loan Recall Notice Template
                  </Link>
                  .
                </p>
              </section>

              {/* Section 7: Dual-Track B2B Conversion CTA */}
              <section
                id="heading-cta-desk"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Portfolio Deployment: Single Test vs 10,000-Row CSV
                  </h2>
                </div>
                <BnplEconomicsCTA />
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
                    FAQs: Fintech &amp; BNPL Small-Ticket Recovery
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

              {/* Section 9: Statutory Authorities & Official Portals */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Authorities &amp; Official Portals
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
                  <span>Updated 14 Nov 2026 &bull; India B2B Recovery Standard</span>
                </div>
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-2 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related NBFC, Fintech &amp; ODR Recovery Guides
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
                    href="/recover-small-ticket-personal-loans-legally-banks"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Small-Ticket Personal Loan Recovery &rarr;
                  </Link>
                  <Link
                    href="/arbitration-personal-loan-defaults-bank-recovery-mechanism"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Personal Loan Arbitration Mechanism &rarr;
                  </Link>
                  <Link
                    href="/law/lok-adalat-pre-litigation-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Lok Adalat Pre-Litigation Recovery &rarr;
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
