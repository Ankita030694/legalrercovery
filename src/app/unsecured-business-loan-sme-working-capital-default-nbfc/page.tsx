import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SmeBusinessLoanTableOfContents from "./SmeBusinessLoanTableOfContents";
import SmeBusinessLoanScenarioTabs from "./SmeBusinessLoanScenarioTabs";
import SmeBusinessLoanCTA from "./SmeBusinessLoanCTA";

export const revalidate = 86400;

const PAGE_URL = "/unsecured-business-loan-sme-working-capital-default-nbfc";
const EXACT_H1 =
  "Recovering ₹5L–₹75L Unsecured SME Business Loans & Merchant Cash Advances (EDI): Dual Criminal + Commercial Attachment Strategy";
const META_TITLE = "Unsecured SME Business Loan & Merchant Cash Advance Recovery";
const META_DESCRIPTION =
  "Borrower routing POS/UPI sales to dodge EDI or EMIs? Deploy PSS Act s.25 criminal notices + Commercial Court Order 38 Rule 5 attachment.";

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
        alt: formatAltText("Unsecured SME Business Loan and Merchant Cash Advance Recovery Strategy"),
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

const STATUTORY_MATRIX = [
  {
    remedy: "PSS Act, 2007 (Section 25)",
    trigger: "Dishonour of e-NACH, ECS, UPI AutoPay, or EDI daily electronic mandate",
    timeline: "15-day statutory demand post-return; 30-day Magistrate filing window",
    interimPower: "Criminal summons, bailable/non-bailable warrants & s.143A-parity pressure",
    targetAssets: "Promoter / Authorised Signatory personal liberty & s.25(5) director liability",
    verdict: "Primary Criminal Lever",
    tone: "emerald",
  },
  {
    remedy: "NI Act, 1881 (Sections 138 & 141)",
    trigger: "Dishonour of security PDCs or loan recall cheques (insufficient funds / account closed)",
    timeline: "30-day notice from bank memo; 15-day cure; 30-day complaint filing",
    interimPower: "Section 143A interim compensation up to 20% of cheque amount",
    targetAssets: "Company + Managing/Signatory Directors under Section 141",
    verdict: "Parallel Criminal Lever",
    tone: "emerald",
  },
  {
    remedy: "Commercial Courts Act (s.12A + CPC Order XXXVII)",
    trigger: "Liquidated loan debt >= ₹3 Lakh (Specified Value) on written sanction & ledger",
    timeline: "3–9 months in Summary Suit (no leave to defend without triable issue)",
    interimPower: "Section 12A mandatory mediation bypassed where urgent interim relief sought",
    targetAssets: "Borrower enterprise + Co-extensive Personal Guarantor (s.128 Contract Act)",
    verdict: "Fast-Track Money Decree",
    tone: "emerald",
  },
  {
    remedy: "CPC Order XXXVIII Rule 5 + Order XXI Rule 46",
    trigger: "Evidence of QR/POS diversion, bank switching, or asset dissipation with active GSTIN",
    timeline: "Urgent ex-parte / short-notice show-cause attachment before judgment",
    interimPower: "Freezes alternate bank current accounts, PG escrow payouts & B2B receivables",
    targetAssets: "Alternate bank balances, Razorpay/Paytm/POS settlements & GST B2B debtors",
    verdict: "Cashflow Freeze Weapon",
    tone: "amber",
  },
  {
    remedy: "Arbitration Act (s.9 / s.29B Fast-Track)",
    trigger: "Written / digital arbitration clause in SME loan or MCA facility agreement",
    timeline: "Section 9 interim freeze in 7–21 days; Section 29B award in 90–180 days",
    interimPower: "Section 9 / s.17 interim restraint on bank accounts & receivables",
    targetAssets: "Section 36 decree-equivalent execution across Pan-India jurisdictions",
    verdict: "Contractual Fast-Track",
    tone: "amber",
  },
];

const EVIDENCE_CHECKLIST = [
  {
    title: "1. Active GSTIN & Diverted Turnover Proof",
    detail:
      "Capture public GSTN filing status (monthly GSTR-1/GSTR-3B continuity), E-Way bill generation indicators, or field verification photos of switched third-party UPI QR standees/POS terminals at the borrower's premises.",
  },
  {
    title: "2. NPCI / Sponsor Bank Return Memos (e-NACH & EDI)",
    detail:
      "Preserve exact NPCI UMNR / mandate reference numbers, bounce reason codes (e.g., Insufficient Funds, Mandate Cancelled, Account Frozen), and timestamped return memos within the 30-day statutory notice window.",
  },
  {
    title: "3. Executed Loan Agreement, Escrow Covenant & Personal Guarantee",
    detail:
      "Compile the signed or Aadhaar/OTP e-signed facility agreement (valid under IT Act s.10A), POS/UPI escrow routing covenant, and Deed of Personal Guarantee executed by promoters/directors.",
  },
  {
    title: "4. MCA DIR-12 & Signatory Authority Trail",
    detail:
      "For Private Limited SMEs and LLPs, attach MCA master data, DIR-12 director filings, and the board resolution authorizing the e-NACH/cheque signatory to satisfy Section 141 NI Act / Section 25(5) PSS Act pleading standards.",
  },
  {
    title: "5. Certified Ledger & Statement of Account",
    detail:
      "Generate a chronological disbursement-to-default ledger showing principal, EDI/EMI sweeps credited, penal charges, and total recall balance as on date of notice.",
  },
  {
    title: "6. BSA 2023 Section 63 Electronic Evidence Certificate",
    detail:
      "Execute a formal Section 63 Bharatiya Sakshya Adhiniyam, 2023 certificate (replacing IEA s.65B) covering digital sanction logs, WhatsApp/email notice delivery receipts, and LOS/LMS database extracts.",
  },
];

const FAQS = [
  {
    question: "What can an NBFC do when an EDI merchant switches POS or UPI QR codes to another bank?",
    answer:
      "When a merchant cash advance (EDI) borrower routes daily POS or UPI sales to a new bank account to starve the lender's escrow sweep, the NBFC should deploy a simultaneous Dual-Track response: (1) serve a 15-day criminal notice under Section 25 of the PSS Act, 2007 for every bounced e-NACH/EDI debit, and (2) file a Commercial Suit under Order XXXVII CPC accompanied by an urgent Order XXXVIII Rule 5 attachment application (bypassing Section 12A mediation under the Yamini Manohar urgent-relief test) to freeze the alternate bank account or payment aggregator payout.",
  },
  {
    question: "Can an NBFC attach a borrower's new bank account or B2B receivables before final judgment?",
    answer:
      "Yes. Under Order XXXVIII Rule 5 of the Code of Civil Procedure (CPC), if the lender demonstrates with concrete prima facie material—such as active GSTIN GSTR-1 filings coupled with sudden e-NACH cancellation or switched QR codes—that the borrower is obstructing or delaying execution by diverting cashflows, the Commercial Court can order conditional attachment before judgment of alternate bank balances and receivables.",
  },
  {
    question: "How do we bypass mandatory Section 12A pre-institution mediation in Commercial Courts?",
    answer:
      "Under Section 12A of the Commercial Courts Act, 2015, pre-institution mediation is mandatory for commercial disputes >= ₹3 Lakh unless the suit contemplates urgent interim relief. As clarified by the Supreme Court in Yamini Manohar v. T.K.D. Keerthi (2023), where the plaintiff pleads genuine urgency—such as active diversion of POS/UPI cashflows requiring an immediate Order XXXVIII Rule 5 or Order XXXIX restraint—the Commercial Court can entertain the suit directly without waiting for mediation.",
  },
  {
    question: "Are directors personally liable for an unsecured Pvt Ltd SME loan default?",
    answer:
      "Directors face two distinct legal exposures: (1) Vicarious criminal liability under Section 25(5) of the PSS Act and Section 141 of the NI Act if they are signatories or in charge of day-to-day company affairs when e-NACH mandates or security cheques bounce; and (2) Co-extensive civil liability under Section 128 of the Indian Contract Act, 1872 if they executed a Deed of Personal Guarantee, allowing the NBFC to pursue their personal assets directly.",
  },
  {
    question: "How does active GSTIN status help an NBFC win faster recovery in ₹10L–₹50L SME defaults?",
    answer:
      "Borrowers frequently stall collections by claiming business closure. Presenting live GSTN filing continuity (monthly GSTR-1/3B) and E-Way bill activity proves to the Commercial Court and Magistrate that the borrower has active revenue and is willfully diverting liquidity—justifying Order XXXVIII Rule 5 attachment, denial of unconditional leave to defend under Order XXXVII, and Garnishee notices under Order XXI Rule 46 to the borrower's B2B customers.",
  },
  {
    question: "Should an NBFC choose Order XXXVII Summary Suit or Arbitration for ₹5L–₹75L unsecured SME loans?",
    answer:
      "If the loan agreement contains a valid arbitration clause, Section 9 of the Arbitration Act offers rapid interim bank/receivable freezes (7–21 days) followed by a 90–180 day Section 29B fast-track award. Where no arbitration clause exists—or where the borrower is in a Commercial Court jurisdiction with strong summary dockets and the claim exceeds ₹3 Lakh—an Order XXXVII Summary Suit with Order XXXVIII Rule 5 attachment provides a direct court decree without the risk of unilateral arbitrator challenges.",
  },
  {
    question: "Can LegalRecovery.in handle bulk Section 25 and Loan Recall notices for SME loan portfolios?",
    answer:
      "Yes. NBFCs and fintech lenders can test a single live ₹5L–₹75L SME or EDI account via our ₹999 self-serve advocate desk, or upload 10 to 10,000+ delinquent accounts via CSV on our institutional bulk desk for tri-channel dispatch (Email + WhatsApp + Speed Post RPAD) with BSA 2023 s.63 electronic service certificates.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer)",
    url: "https://www.indiacode.nic.in/handle/123456789/2079",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 12A — Pre-Institution Mediation & Urgent Interim Relief)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suits, Order XXXVIII Rule 5 & Order XXI Rule 46)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Reserve Bank of India (RBI) Master Direction — Fair Practices Code & Digital Lending Guidelines",
    url: "https://www.rbi.org.in/",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-14T10:00:00+05:30",
  dateModified: "2026-11-14T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Unsecured SME Business Loan and Merchant Cash Advance (EDI) Default Recovery for NBFCs",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How NBFCs Recover ₹5L–₹75L Unsecured SME Loans & Diverted EDI Cash Advances",
  description:
    "Step-by-step dual criminal (PSS Act s.25) and commercial attachment (Order XXXVIII Rule 5) recovery SOP for NBFC SME collections heads.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Document Active GSTIN & Diverted POS/UPI Evidence",
      text: "Verify live GSTR-1/3B filings, NPCI e-NACH return memos, and switched QR/POS terminal proof to establish willful cashflow diversion.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve Simultaneous PSS Act s.25 + Loan Recall & PG Invocation Notice",
      text: "Dispatch tri-channel advocate notices (Email + WhatsApp + Speed Post RPAD) within 30 days of mandate return, impleading directors under s.141/s.25(5) and invoking personal guarantees under s.128 Contract Act.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "File Parallel Criminal Complaint & Commercial Court Attachment",
      text: "Initiate Magistrate proceedings on expiry of the 15-day cure window while filing an Order XXXVII Summary Suit with Order XXXVIII Rule 5 urgent attachment (bypassing s.12A mediation) to freeze alternate bank accounts and B2B receivables.",
    },
  ],
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
      name: "Unsecured SME Business Loan & EDI Recovery",
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

export default function UnsecuredBusinessLoanSmeDefaultNbfcPage() {
  const breadcrumbItems = [
    { label: "NBFC & Fintech Loan Recovery", href: "/industries/nbfc-fintech-loan-recovery" },
    { label: "SME Business Loan & EDI Recovery", href: PAGE_URL },
  ];

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
            <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              IND-02 NBFC &amp; Fintech Playbook &bull; ₹5L–₹75L Unsecured SME &amp; EDI Loans
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Creditor Answer Box (40-60 words + inline Parent Hub link) */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer
              </span>
              When an unsecured SME or Merchant Cash Advance (EDI) borrower switches QR codes or routes sales to another bank while keeping an active GSTIN, NBFCs under our{" "}
              <Link
                href="/industries/nbfc-fintech-loan-recovery"
                className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
              >
                NBFC &amp; Fintech Loan Recovery Hub
              </Link>{" "}
              deploy simultaneous Section 25 PSS Act criminal notices and Commercial Court Order XXXVIII Rule 5 bank/receivable attachments to freeze diverted cashflows fast.
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">₹5L – ₹75L</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  SME Term &amp; EDI Cash Advance Band
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">15 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  PSS s.25 / NI s.138 Statutory Cure Window
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">Order 38 R.5</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Pre-Judgment Bank &amp; PG Attachment
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">s.12A Bypass</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Urgent Interim Relief Commercial Filing
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
            {/* Left Sticky TOC */}
            <SmeBusinessLoanTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1 */}
              <section
                id="heading-qr-diversion-gap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Why Unsecured SME &amp; EDI Loans Fail When Borrowers Switch QR Codes
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Digital lending NBFCs and fintechs underwriting ₹5 Lakh to ₹75 Lakh unsecured SME working capital loans and Merchant Cash Advances (Equated Daily Installment / EDI) rely on two underwriting anchors: verified GST turnover and automated cashflow capture via POS terminals, UPI QR escrows, or e-NACH mandates. Unlike secured Loan Against Property (LAP) books, there is no mortgage collateral for SARFAESI enforcement.
                  </p>
                  <p>
                    When an SME borrower experiences liquidity stress—or decides to execute a strategic default—the classic evasion tactic is <strong>cashflow diversion</strong>. The merchant keeps their storefront open, maintains active GSTIN billing, and processes brisk daily UPI/card sales, but quietly swaps out the lender-mapped POS machine or QR standee for a fresh current account opened at an unencumbered bank or in a relative&apos;s trade name.
                  </p>
                  <p>
                    Traditional collection playbooks fail completely against this tactic. Telecalling agencies are bound by{" "}
                    <Link
                      href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      RBI Recovery Agent Fair Practices Directions
                    </Link>{" "}
                    (8 AM–7 PM call windows, zero coercion), while standard civil money suits drag on for 3 to 5 years—by which time the borrower has drained the alternate account. To recover principal before liquidity vanishes, NBFC Collections Heads must strike both the <strong>promoter&apos;s personal criminal exposure</strong> and the <strong>diverted commercial cashflow</strong> simultaneously.
                  </p>
                </div>
              </section>

              {/* Section 2: Decision Tree SVG + Mobile Cards */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Dual-Track Decision Tree: Criminal s.25 + Commercial Attachment
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Instead of waiting 90+ DPD for NPA classification, NBFC litigation teams should trigger parallel criminal and commercial attachment rails the moment an e-NACH/EDI bounce coincides with active GSTIN or switched QR signals.
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                  <svg
                    viewBox="0 0 860 310"
                    width={860}
                    height={310}
                    className="w-full h-auto"
                    role="img"
                    aria-label="Dual-Track SME and EDI Loan Recovery Decision Tree"
                  >
                    <rect x="15" y="110" width="185" height="90" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="107" y="140" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">TRIGGER EVENT</text>
                    <text x="107" y="160" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">e-NACH / EDI Bounce</text>
                    <text x="107" y="178" textAnchor="middle" fill="#CBD5E1" fontSize="10">+ Active GSTIN / QR Switch</text>

                    {/* Arrows to Track A & Track B */}
                    <path d="M200 135 L265 70" stroke="#94A3B8" strokeWidth="2" fill="none" />
                    <path d="M200 175 L265 240" stroke="#94A3B8" strokeWidth="2" fill="none" />

                    {/* Track A: Criminal */}
                    <rect x="265" y="20" width="265" height="105" rx="12" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="397" y="45" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="700">TRACK A: CRIMINAL EXPOSURE</text>
                    <text x="397" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">PSS Act s.25 / NI Act s.138</text>
                    <text x="397" y="83" textAnchor="middle" fill="#CBD5E1" fontSize="10">15-Day Notice within 30d of Memo</text>
                    <text x="397" y="100" textAnchor="middle" fill="#CBD5E1" fontSize="10">Implead Signatory &amp; Directors (s.141)</text>

                    {/* Track B: Commercial Attachment */}
                    <rect x="265" y="185" width="265" height="105" rx="12" fill="#1E293B" stroke="#34D399" strokeWidth="1.5" />
                    <text x="397" y="210" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="700">TRACK B: CASHFLOW ATTACHMENT</text>
                    <text x="397" y="230" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Commercial Court Order 37 + 38 R.5</text>
                    <text x="397" y="248" textAnchor="middle" fill="#CBD5E1" fontSize="10">Urgent s.12A Bypass (Yamini Manohar)</text>
                    <text x="397" y="265" textAnchor="middle" fill="#CBD5E1" fontSize="10">Freeze Alternate Bank &amp; GST Debtors</text>

                    {/* Arrows to Outcome */}
                    <path d="M530 72 L610 135" stroke="#94A3B8" strokeWidth="2" fill="none" />
                    <path d="M530 237 L610 175" stroke="#94A3B8" strokeWidth="2" fill="none" />

                    {/* Outcome Box */}
                    <rect x="610" y="95" width="230" height="120" rx="12" fill="#DC2626" />
                    <text x="725" y="125" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="700">CONVERGENT RESOLUTION</text>
                    <text x="725" y="148" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">Escrow Re-Sweep /</text>
                    <text x="725" y="166" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">Full OTS Settlement</text>
                    <text x="725" y="190" textAnchor="middle" fill="#FECACA" fontSize="10">Or Decree + Warrant Execution</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  <div className="bg-slate-900 text-white rounded-xl p-4 border-l-4 border-[#DC2626]">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-red-400">Trigger</p>
                    <p className="text-sm font-bold">e-NACH / EDI Bounce + Active GSTIN / QR Switch</p>
                  </div>
                  <div className="bg-slate-900 text-white rounded-xl p-4 border-l-4 border-sky-400">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-sky-400">Track A: Criminal</p>
                    <p className="text-sm font-bold">PSS Act s.25 / NI Act s.138 (15-Day Notice + s.141 Director Liability)</p>
                  </div>
                  <div className="bg-slate-900 text-white rounded-xl p-4 border-l-4 border-emerald-400">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Track B: Commercial Freeze</p>
                    <p className="text-sm font-bold">Order 37 Summary Suit + Order 38 Rule 5 Alternate Bank &amp; GST Debtor Attachment</p>
                  </div>
                </div>
              </section>

              {/* Section 3: Statutory Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Statutory Matrix: PSS s.25, Order 37, Order 38 Rule 5 &amp; s.12A
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Each statutory weapon serves a distinct operational purpose in ₹5L–₹75L unsecured SME recovery. Criminal remedies target promoter liberty; commercial remedies lock down business liquidity. Use our{" "}
                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Bank &amp; NBFC Recovery Forum Calculator
                  </Link>{" "}
                  to benchmark pecuniary thresholds before filing.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                        <th className="p-3.5 font-bold">Statute / Forum</th>
                        <th className="p-3.5 font-bold">Trigger Event</th>
                        <th className="p-3.5 font-bold">Timeline</th>
                        <th className="p-3.5 font-bold">Interim / Attachment Power</th>
                        <th className="p-3.5 font-bold">Strategic Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                      {STATUTORY_MATRIX.map((row) => (
                        <tr key={row.remedy} className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">{row.remedy}</td>
                          <td className="p-3.5 text-slate-700">{row.trigger}</td>
                          <td className="p-3.5 text-slate-700">{row.timeline}</td>
                          <td className="p-3.5 text-slate-700">{row.interimPower}</td>
                          <td className="p-3.5">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                row.tone === "emerald"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : "bg-amber-50 text-amber-700 border border-amber-200"
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
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Interactive Playbook: 4 SME &amp; Merchant Cash Advance Failure Modes
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Select a specific SME or EDI default pattern below to inspect the exact statutory hooks, notice sequence, and Commercial Court attachment steps.
                </p>

                <SmeBusinessLoanScenarioTabs />
              </section>

              {/* Section 5: Garnishee & Bank Attachment SOP */}
              <section
                id="heading-gst-garnishee"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Garnishee &amp; Bank Attachment on Active GSTIN &amp; Diverted POS Sweeps
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    The decisive advantage in ₹10L–₹75L SME defaults is that the borrower is rarely insolvent—they are actively trading under a live GSTIN while starving the NBFC&apos;s repayment mandate. When filing in the Commercial Court (for any Specified Value dispute of ₹3,00,000 or more), NBFC counsel must overcome two procedural hurdles:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="bg-slate-50 border-l-4 border-[#DC2626] rounded-r-xl p-4">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                        Urgent s.12A Mediation Bypass
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        While <em>Patil Automation Pvt. Ltd. v. Rakheja Engineers</em> made Section 12A pre-institution mediation mandatory for ordinary commercial suits, the Supreme Court in <em>Yamini Manohar v. T.K.D. Keerthi (2023)</em> confirmed that suits genuinely contemplating urgent interim relief—such as freezing a diverted POS/UPI settlement account before daily funds are swept out—are exempt from waiting 3 months in mediation.
                      </p>
                    </div>
                    <div className="bg-slate-50 border-l-4 border-emerald-600 rounded-r-xl p-4">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-1">
                        Meeting the Raman Tech Order 38 Rule 5 Bar
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Courts do not grant Order XXXVIII Rule 5 attachment on vague allegations (<em>Raman Tech &amp; Process Engg. Co. v. Solanki Traders</em>). NBFCs meet this threshold by exhibiting: (a) the contractual escrow/EDI routing covenant, (b) live GSTN filing continuity proving active revenue, and (c) evidence of the switched QR code or cancelled e-NACH mandate.
                      </p>
                    </div>
                  </div>

                  <p>
                    Once an Order XXXVIII Rule 5 or Arbitration Section 9 interim restraint is obtained—or upon securing an Order XXXVII / Section 36 decree—the NBFC serves <strong>Order XXI Rule 46 Garnishee Notices</strong> directly on the borrower&apos;s payment aggregator (Razorpay, Paytm, Pine Labs, PhonePe Business), alternate sponsor bank, or top B2B corporate buyers, legally barring them from releasing payouts to the defaulter. Pair this with our{" "}
                    <Link
                      href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      Loan Recall &amp; Personal Guarantee Invocation Notice Template
                    </Link>{" "}
                    to lock in guarantor liability simultaneously.
                  </p>
                </div>
              </section>

              {/* Section 6: Worked Recovery Ledger */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Worked Recovery Ledger: ₹28.5L Diverted-EDI SME Default
                  </h2>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Illustrative NBFC Case Economics (₹28,50,000 Principal Outstanding)
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      Net Yield Comparison: Passive Suit vs. Dual-Track Strategy
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700 space-y-2">
                      <p className="font-bold text-red-400 uppercase text-xs">
                        Track 0: Passive Telecalling + Ordinary Civil Suit
                      </p>
                      <ul className="space-y-1.5 text-slate-300">
                        <li>&bull; <strong>Timeline:</strong> 36–54 months to decree</li>
                        <li>&bull; <strong>Cashflow Leakage:</strong> Borrower shifts ₹18L/mo POS sales to new bank</li>
                        <li>&bull; <strong>Court Fee + Counsel Cost:</strong> ~₹1,65,000+ over 3 years</li>
                        <li>&bull; <strong>Provisioning Impact:</strong> 100% NPA write-down at 180+ DPD</li>
                      </ul>
                    </div>

                    <div className="bg-emerald-950/50 rounded-xl p-4 border border-emerald-700/60 space-y-2">
                      <p className="font-bold text-emerald-400 uppercase text-xs">
                        Dual-Track: PSS s.25 + Order 37 / Order 38 Rule 5
                      </p>
                      <ul className="space-y-1.5 text-slate-200">
                        <li>&bull; <strong>Day 7:</strong> Tri-channel s.25 + Recall + PG Notice (₹999 / batch)</li>
                        <li>&bull; <strong>Day 24:</strong> Magistrate s.25 + Commercial Court Order 38 R.5</li>
                        <li>&bull; <strong>Day 35–45:</strong> Alternate POS/Bank payout restrained; promoter settles</li>
                        <li>&bull; <strong>Realization:</strong> ₹28.5L Principal + ₹2.4L accrued interest &amp; costs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: BSA 2023 s.63 Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    BSA 2023 s.63 Evidence &amp; Pre-Attachment Dossier Checklist
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Before moving a Magistrate under Section 25 PSS Act or a Commercial Judge under Order XXXVIII Rule 5, ensure your legal ops team compiles these six evidentiary pillars:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {EVIDENCE_CHECKLIST.map((item) => (
                    <div
                      key={item.title}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                    >
                      <p className="text-sm font-bold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 8: Dual-Track CTA */}
              <section
                id="heading-cta-desk"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Deploy Dual-Track SME Recovery: Single ₹999 Test or Bulk CSV Desk
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Explore our dedicated{" "}
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    NBFC Unpaid Dues Notice Service
                  </Link>
                  ,{" "}
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Tri-Channel Bulk Notice Automation
                  </Link>
                  , or{" "}
                  <Link
                    href="/online-dispute-resolution-india"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Online Dispute Resolution (ODR) Desk
                  </Link>{" "}
                  below:
                </p>

                <SmeBusinessLoanCTA />
              </section>

              {/* Section 9: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    FAQs: Unsecured SME Business Loan &amp; EDI Recovery for NBFCs
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group bg-slate-50 border border-slate-200 rounded-xl p-4 transition-colors open:bg-white open:border-slate-300"
                    >
                      <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-extrabold text-lg shrink-0 group-open:rotate-45 transition-transform">
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

              {/* Section 10: Statutory Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Statutory Authorities, Commercial Courts &amp; NPCI Reference Portals
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
                        className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <span>
                    Reviewed by <strong>{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
                  </span>
                  <span>
                    Related:{" "}
                    <Link
                      href="/small-ticket-digital-personal-loan-bnpl-recovery-economics"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Small-Ticket BNPL Economics
                    </Link>{" "}
                    &middot;{" "}
                    <Link
                      href="/co-lending-fldg-dlg-default-recovery-workflow-bank-nbfc"
                      className="text-[#DC2626] hover:underline font-semibold"
                    >
                      Co-Lending &amp; 5% DLG Workflow
                    </Link>
                  </span>
                </div>
              </section>
            </div>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
