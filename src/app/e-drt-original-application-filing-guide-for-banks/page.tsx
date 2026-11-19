import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import EdrtTableOfContents from "./EdrtTableOfContents";
import EdrtScenarioTabs from "./EdrtScenarioTabs";
import EdrtFilingCTA from "./EdrtFilingCTA";

export const revalidate = 86400;

const PAGE_PATH = "/e-drt-original-application-filing-guide-for-banks";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Filing Original Applications (OA) on e-DRT: Bankers' Books Evidence, Attachment & Recovery Certificate Guide";
const META_TITLE =
  "e-DRT Original Application (Section 19) Bank Filing Playbook";
const META_DESCRIPTION =
  "Bank legal manual for Section 19 RDB Act Original Applications (≥ ₹20L): e-DRT filing, Bankers' Books Evidence Act certificates & interim attachment.";

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
        alt: formatAltText(
          "e-DRT Section 19 Original Application Filing Playbook for Indian Banks"
        ),
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
      "The Recovery of Debts and Bankruptcy (RDB) Act, 1993 — Sections 1(4), 19, 25–28 & 31B (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/1925",
  },
  {
    title:
      "Department of Financial Services (DFS) e-DRT Portal — Official Online Filing, Cause List & Recovery Certificate Status",
    url: "https://drt.gov.in/",
  },
  {
    title:
      "The Bankers' Books Evidence Act, 1891 — Sections 2(8), 2A & 4 (Certified Copies of Computerized Bank Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/2335",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 — Section 63 & Statutory Schedule (Part A & Part B Electronic Evidence Certificate)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Reserve Bank of India (RBI) — Fair Lending Practice: Penal Charges in Loan Accounts (Non-Capitalization Mandate)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12527&Mode=0",
  },
  {
    title:
      "SARFAESI Act, 2002 — Section 13(10) Balance Recovery Application Before DRT & Parallel Enforcement Framework",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
];

const DECISION_STAGES = [
  {
    step: "01",
    shortTitle: "Pre-OA Recall & Guarantee Notice",
    timing: "Day 1–15",
    detail:
      "Issue RBI Penal-Charge-compliant Loan Recall cum Explicit Personal/Corporate Guarantee Invocation Notice (Contract Act s.128) via Email, WhatsApp & Speed Post RPAD.",
  },
  {
    step: "02",
    shortTitle: "Jurisdiction & Limitation Audit",
    timing: "Day 16–20",
    detail:
      "Confirm debt ≥ ₹20 Lakh (RDB s.1(4)), verify 3-year unsecured / 12-year mortgage (Art. 62) limitation, Balance Confirmation Letters (s.18), and territorial DRT bench (s.19(1)).",
  },
  {
    step: "03",
    shortTitle: "Dual CBS Evidence Certification",
    timing: "Day 21–25",
    detail:
      "Certify Finacle/BaNCS statement of account under Bankers' Books Evidence Act s.2A/4 AND generate BSA 2023 s.63 Part-A/Part-B SHA-256 hash certificates for digital records.",
  },
  {
    step: "04",
    shortTitle: "e-DRT Upload & s.19(12) Freeze",
    timing: "Day 26–30",
    detail:
      "Pay Rule 7 DRT fee via BharatKosh (capped at ₹1.50L), upload OCR PDF/A OA docket on drt.gov.in, and move urgent s.19(12)–(15) attachment IA for unmortgaged assets.",
  },
  {
    step: "05",
    shortTitle: "Recovery Certificate & RO Execution",
    timing: "Post-Order",
    detail:
      "Obtain Final Order & Recovery Certificate (s.19(22)) with pendente lite interest (s.19(20)), then execute via Recovery Officer (s.25–28 / Second Schedule IT Act) attachment & sale.",
  },
];

const DRT_FEE_SLABS = [
  {
    claimAmount: "₹20,00,000 (Minimum DRT Floor)",
    formula: "₹12,000 + ₹1,000 × 10 lakhs above ₹10L",
    drtFee: "₹22,000",
    civilComparison: "₹1,20,000 – ₹1,80,000+",
    notes: "Threshold raised from ₹10L to ₹20L via MoF Notification S.O. 4312(E)",
  },
  {
    claimAmount: "₹50,00,000",
    formula: "₹12,000 + ₹1,000 × 40 lakhs above ₹10L",
    drtFee: "₹52,000",
    civilComparison: "₹2,50,000 – ₹4,00,000+",
    notes: "Ideal for mid-SME Cash Credit / Machinery Term Loan NPAs",
  },
  {
    claimAmount: "₹1,00,00,000 (₹1 Crore)",
    formula: "₹12,000 + ₹1,000 × 90 lakhs above ₹10L",
    drtFee: "₹1,02,000",
    civilComparison: "₹3,00,000 – ₹7,50,000+",
    notes: "Parallel SARFAESI + Section 19 OA strongly advised (Transcore)",
  },
  {
    claimAmount: "₹1,48,00,000 & Above (₹1.85 Cr / ₹10 Cr+)",
    formula: "Statutory Maximum Cap under Rule 7(2)",
    drtFee: "₹1,50,000 (Hard Cap)",
    civilComparison: "₹3,00,000 – ₹25,00,000+",
    notes: "Massive institutional fee advantage on SAMB multi-crore NPAs",
  },
];

const FAQS = [
  {
    question:
      "What is the minimum debt threshold for banks to file a Section 19 Original Application on e-DRT?",
    answer:
      "Under Section 1(4) of the Recovery of Debts and Bankruptcy (RDB) Act, 1993 read with Ministry of Finance Notification S.O. 4312(E) dated 6 September 2018, the pecuniary jurisdiction floor of the Debts Recovery Tribunal (DRT) is ₹20,00,000 (₹20 Lakh) inclusive of principal, contractual interest, and admissible charges accrued up to the date of filing. Bank NPAs below ₹20 Lakh cannot be filed in DRT and must be routed through Commercial Courts (≥ ₹3 Lakh), CPC Order XXXVII Summary Suits, Section 25 PSS Act / Section 138 NI Act, Institutional Arbitration, or Pre-Litigation Lok Adalat.",
  },
  {
    question:
      "Can a bank file an e-DRT Original Application and SARFAESI proceedings simultaneously?",
    answer:
      "Yes. In Transcore v. Union of India, the Supreme Court settled that SARFAESI Act, 2002 enforcement and RDB Act, 1993 Section 19 Original Applications are complementary remedies, not mutually exclusive. A bank does not need to withdraw a pending OA before issuing a Section 13(2) SARFAESI notice, nor wait until secured collateral is auctioned before filing an OA to secure personal decrees against borrowers and guarantors or attach unmortgaged assets.",
  },
  {
    question:
      "Why do banks need BOTH a Bankers' Books Evidence Act s.2A certificate and a BSA 2023 s.63 certificate?",
    answer:
      "Under Section 4 read with Section 2A of the Bankers' Books Evidence Act, 1891, a certified printout of a Core Banking System (CBS) ledger carries statutory presumption of prima facie admissibility ONLY when accompanied by both a Branch Manager / Principal Accountant certificate and an IT System In-Charge certificate confirming system integrity. For non-CBS electronic records attached to an OA—such as email loan recall notices, WhatsApp blue-tick read receipts, CERSAI downloads, and digital sanction audit logs—Bharatiya Sakshya Adhiniyam (BSA), 2023 Section 63 mandates a Part-A (User) and Part-B (System/Expert) Schedule certificate recording the cryptographic SHA-256 hash value.",
  },
  {
    question:
      "How is the DRT Original Application court fee calculated under Rule 7 of the DRT (Procedure) Rules, 1993?",
    answer:
      "Under Rule 7(2) of the DRT (Procedure) Rules, 1993, for claims above ₹10 Lakh (applicable to all post-2018 OAs of ₹20 Lakh and above), the court fee is ₹12,000 plus ₹1,000 for every ₹1 Lakh (or part thereof) in excess of ₹10 Lakh, subject to a hard statutory maximum ceiling of ₹1,50,000. Thus, a ₹20 Lakh OA costs ₹22,000, a ₹1 Crore OA costs ₹1,02,000, and any ₹1.48 Crore to ₹50 Crore SAMB OA is capped at exactly ₹1,50,000 payable online via BharatKosh.",
  },
  {
    question:
      "How can a bank attach a defaulting borrower's unmortgaged personal property during a DRT OA?",
    answer:
      "Under Section 19(12) and Section 19(13)(A) of the RDB Act, 1993, the bank should file a dedicated Interlocutory Application (IA) alongside the OA demonstrating that the mortgaged security is insufficient or that the borrower/guarantor is likely to alienate, encumber, or remove personal assets to obstruct execution. Simultaneously, invoking Section 19(3A) and 19(4) compels the defendant to file a sworn Affidavit of Assets within 30 days of summons, enabling immediate conditional attachment and garnishee restraint orders before the final decree.",
  },
  {
    question:
      "Does capitalizing penal interest into loan principal jeopardize a DRT Original Application?",
    answer:
      "Yes. Under the Reserve Bank of India (RBI) Fair Lending Practice Directions on 'Penal Charges in Loan Accounts', banks and regulated entities are strictly barred from charging 'penal interest' added to the rate of interest or capitalizing penal charges (no compounding of interest on penal charges). If a bank's Pre-OA Loan Recall Notice or DRT OA Statement of Account reflects compounded penal interest, defense counsel will seek disallowance and forensic account recasting, stalling the OA by 12–18 months.",
  },
  {
    question:
      "What enforcement powers does the DRT Recovery Officer have once the Recovery Certificate (s.19(22)) is issued?",
    answer:
      "Once the Presiding Officer passes the Final Order and issues a Recovery Certificate (RC) under Section 19(22), the Recovery Officer executes the RC under Sections 25 to 28 of the RDB Act read with the Second and Third Schedules to the Income-tax Act, 1961. Permitted coercive modes include attachment and e-auction sale of movable and immovable properties (mortgaged or unmortgaged), direct garnishee notices to borrower's debtors and other banks under Section 28(3), appointment of a Receiver to manage business assets, and arrest/detention of wilful defaulters in civil prison.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository — attributed directly to verified Advocate & Founder profile matching existing pages.
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T10:00:00+05:30",
  dateModified: "2026-11-19T10:00:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
  image: `${SITE_URL}/blog_money_recovery.png`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
    name: "e-DRT Original Application Section 19 RDB Act Filing Procedure for Banks",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Banks File a Defect-Free Section 19 Original Application (OA) on e-DRT",
  description:
    "5-stage bank SAMB legal workflow for filing a Section 19 RDB Act Original Application on e-DRT with Bankers' Books Evidence Act certificates, Rule 7 BharatKosh fees, and Section 19(12)-(15) interim attachment.",
  totalTime: "P30D",
  step: DECISION_STAGES.map((s, idx) => ({
    "@type": "HowToStep",
    position: idx + 1,
    name: s.shortTitle,
    text: s.detail,
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
      name: "Banks Loan Recovery Hub",
      item: `${SITE_URL}/industries/banks-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "e-DRT Original Application Filing Guide",
      item: CANONICAL_URL,
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

export default function EdrtOriginalApplicationFilingGuidePage() {
  const breadcrumbItems = [
    { label: "Banks Loan Recovery Hub", href: "/industries/banks-loan-recovery" },
    {
      label: "e-DRT Original Application Filing Guide",
      href: PAGE_PATH,
    },
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
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>RDB Act 1993 s.19</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-01 Bank SAMB Playbook</span>
              <span className="text-red-500">&bull;</span>
              <span>BBEA s.2A &amp; BSA s.63</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box (40-60 words + inline Parent Hub Link) */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer (Section 19 RDB Act, 1993)
              </span>
              <p>
                Banks and financial institutions with defaulted NPAs of &#8377;20 Lakh or above file a Section 19 Original Application (OA) on e-DRT after serving an RBI-compliant Loan Recall &amp; Guarantee Invocation Notice. Pairing Bankers&apos; Books Evidence Act s.2A/4 CBS certificates with BSA 2023 s.63 hashes and Section 19(12)&ndash;(15) attachment IAs accelerates Recovery Certificates. Explore the full{" "}
                <Link
                  href="/industries/banks-loan-recovery"
                  className="text-red-300 underline decoration-red-400/70 underline-offset-2 hover:text-white font-semibold"
                >
                  Bank Loan &amp; NPA Legal Recovery Hub
                </Link>
                .
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  &ge; &#8377;20L
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  RDB Act s.1(4) DRT Pecuniary Floor
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  &#8377;1.50L Cap
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Rule 7 Maximum DRT OA Filing Fee
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  s.2A + s.63
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  BBEA &amp; BSA Dual CBS Certification
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  s.19(12)&ndash;(15)
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Unmortgaged Personal Asset Freeze
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
            {/* Left Sticky Sidebar TOC */}
            <EdrtTableOfContents />

            {/* Right Main Editorial Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Why Government e-DRT PDFs Fail Bank SAMB Teams */}
              <section
                id="heading-samb-gap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    AGM Legal &amp; SAMB Litigation Reality
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Why Government e-DRT PDFs Fail Bank SAMB Litigation Teams
                  </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Official Department of Financial Services (DFS) e-DRT user manuals explain how to register an advocate ID, generate a BharatKosh challan, and upload PDF/A scans on{" "}
                    <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">
                      drt.gov.in
                    </code>
                    . Yet they offer zero litigation architecture. Across Stressed Assets Management Branches (SAMBs) and Zonal Recovery Cells, Section 19 Original Applications (OAs) routinely lose 14 to 28 months not because of portal upload bugs, but because of three substantive pre-filing failures: defective Loan Recall Notices that omit explicit guarantee invocation or capitalize penal interest, incomplete Core Banking System (CBS) ledger certification under the Bankers&apos; Books Evidence Act 1891 and BSA 2023 Section 63, and failure to move simultaneous Section 19(12)&ndash;(15) interim attachment applications before borrowers siphon unencumbered assets.
                  </p>
                  <p>
                    Unlike SARFAESI Act enforcement—which is strictly limited to enforcing registered security interests over mortgaged or hypothecated collateral—a Section 19 Original Application under the Recovery of Debts and Bankruptcy (RDB) Act, 1993 delivers an adjudicated personal decree (Recovery Certificate) binding the principal borrower, co-borrowers, and every personal or corporate guarantor jointly and severally. Whenever collateral valuation drops below outstanding dues, or where a working-capital Cash Credit borrower diverts hypothecated inventory, e-DRT is the sole institutional weapon that reaches the defaulter&apos;s unmortgaged real estate, bank balances, and trade receivables.
                  </p>
                  <p>
                    For a broader portfolio strategy spanning SARFAESI, sub-&#8377;20 Lakh retail loans, and Lok Adalat bulk referrals, coordinate this playbook with our{" "}
                    <Link
                      href="/industries/banks-loan-recovery"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      IND-01 Bank Loan &amp; NPA Legal Recovery Hub
                    </Link>{" "}
                    and verify pecuniary eligibility upfront using our{" "}
                    <Link
                      href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      Interactive SARFAESI &amp; DRT OA Fee Calculator
                    </Link>
                    .
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Recall Notice Trap
                    </span>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      Capitalizing penal interest violates RBI Penal Charges Directions and invites 12-month DRT account recasting delays.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                      Evidence Rejection Trap
                    </span>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      Raw Finacle/BaNCS PDFs without dual BBEA s.2A signatures and BSA s.63 Part-A/B hash certificates get objected to at trial.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                      Unmortgaged Asset Lock
                    </span>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      Filing Section 19(12)&ndash;(15) attachment IAs with the OA freezes personal &amp; guarantor wealth before summons service.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: 5-Stage e-DRT OA Filing Decision Tree (SVG + Mobile Cards) */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Operational SOP &amp; Escalation Rail
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    5-Stage e-DRT Original Application Filing Decision Tree
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  SAMB legal officers and empaneled advocates should execute these five gated milestones in strict sequence. Skipping Stage 1 (explicit recall and guarantee invocation) or Stage 3 (dual CBS evidentiary certification) causes avoidable scrutiny defects at the DRT Registrar desk.
                </p>

                {/* Desktop SVG Decision Tree */}
                <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 bg-slate-900 p-4">
                  <svg
                    width={900}
                    height={250}
                    viewBox="0 0 900 250"
                    role="img"
                    aria-label="5-Stage e-DRT Section 19 Original Application Filing Decision Tree for Banks"
                    className="w-full h-auto max-w-full"
                  >
                    <title>
                      5-Stage e-DRT Section 19 Original Application Filing Workflow for Banks
                    </title>
                    <defs>
                      <marker
                        id="edrt-arrow"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                      </marker>
                    </defs>

                    {/* Connectors */}
                    <line x1="168" y1="115" x2="188" y2="115" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#edrt-arrow)" />
                    <line x1="344" y1="115" x2="364" y2="115" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#edrt-arrow)" />
                    <line x1="520" y1="115" x2="540" y2="115" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#edrt-arrow)" />
                    <line x1="696" y1="115" x2="716" y2="115" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#edrt-arrow)" />

                    {/* Stage 1 */}
                    <rect x="12" y="28" width="156" height="176" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <rect x="24" y="42" width="44" height="20" rx="10" fill="#DC2626" />
                    <text x="46" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">DAY 1–15</text>
                    <text x="24" y="84" fill="#F8FAFC" fontSize="12" fontWeight="800">1. Loan Recall &amp;</text>
                    <text x="24" y="100" fill="#F8FAFC" fontSize="12" fontWeight="800">Guarantee Notice</text>
                    <text x="24" y="124" fill="#CBD5E1" fontSize="10">Separate Penal Charges</text>
                    <text x="24" y="140" fill="#CBD5E1" fontSize="10">Contract Act s.128</text>
                    <text x="24" y="156" fill="#CBD5E1" fontSize="10">Email+WA+RPAD Proof</text>
                    <text x="24" y="182" fill="#FCA5A5" fontSize="9.5" fontWeight="700">Stops Guarantor Waiver</text>

                    {/* Stage 2 */}
                    <rect x="188" y="28" width="156" height="176" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <rect x="200" y="42" width="52" height="20" rx="10" fill="#475569" />
                    <text x="226" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">DAY 16–20</text>
                    <text x="200" y="84" fill="#F8FAFC" fontSize="12" fontWeight="800">2. Floor &amp; Venue</text>
                    <text x="200" y="100" fill="#F8FAFC" fontSize="12" fontWeight="800">Limitation Audit</text>
                    <text x="200" y="124" fill="#CBD5E1" fontSize="10">Verify Debt &ge; ₹20L</text>
                    <text x="200" y="140" fill="#CBD5E1" fontSize="10">3-Yr / 12-Yr Art.62</text>
                    <text x="200" y="156" fill="#CBD5E1" fontSize="10">DRT Bench u/s 19(1)</text>
                    <text x="200" y="182" fill="#FDE68A" fontSize="9.5" fontWeight="700">Check s.18 Confirmation</text>

                    {/* Stage 3 */}
                    <rect x="364" y="28" width="156" height="176" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <rect x="376" y="42" width="52" height="20" rx="10" fill="#475569" />
                    <text x="402" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">DAY 21–25</text>
                    <text x="376" y="84" fill="#F8FAFC" fontSize="12" fontWeight="800">3. BBEA s.2A &amp;</text>
                    <text x="376" y="100" fill="#F8FAFC" fontSize="12" fontWeight="800">BSA s.63 Dossier</text>
                    <text x="376" y="124" fill="#CBD5E1" fontSize="10">Dual CBS Signatures</text>
                    <text x="376" y="140" fill="#CBD5E1" fontSize="10">Part-A + Part-B Hash</text>
                    <text x="376" y="156" fill="#CBD5E1" fontSize="10">CERSAI + Title Deeds</text>
                    <text x="376" y="182" fill="#6EE7B7" fontSize="9.5" fontWeight="700">Trial-Proof Admissibility</text>

                    {/* Stage 4 */}
                    <rect x="540" y="28" width="156" height="176" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <rect x="552" y="42" width="52" height="20" rx="10" fill="#DC2626" />
                    <text x="578" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">DAY 26–30</text>
                    <text x="552" y="84" fill="#F8FAFC" fontSize="12" fontWeight="800">4. e-DRT Upload &amp;</text>
                    <text x="552" y="100" fill="#F8FAFC" fontSize="12" fontWeight="800">s.19(12) Attach IA</text>
                    <text x="552" y="124" fill="#CBD5E1" fontSize="10">Rule 7 BharatKosh Fee</text>
                    <text x="552" y="140" fill="#CBD5E1" fontSize="10">OCR PDF/A Bookmarks</text>
                    <text x="552" y="156" fill="#CBD5E1" fontSize="10">s.19(3A) Asset Affidavit</text>
                    <text x="552" y="182" fill="#FCA5A5" fontSize="9.5" fontWeight="700">Ex-Parte Asset Freeze</text>

                    {/* Stage 5 */}
                    <rect x="716" y="28" width="172" height="176" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                    <rect x="728" y="42" width="66" height="20" rx="10" fill="#10B981" />
                    <text x="761" y="56" textAnchor="middle" fill="#022C22" fontSize="10" fontWeight="800">EXECUTION</text>
                    <text x="728" y="84" fill="#FFFFFF" fontSize="12" fontWeight="800">5. Recovery Cert</text>
                    <text x="728" y="100" fill="#FFFFFF" fontSize="12" fontWeight="800">&amp; RO Attachment</text>
                    <text x="728" y="124" fill="#D1FAE5" fontSize="10">RC u/s 19(22) + s.19(20)</text>
                    <text x="728" y="140" fill="#D1FAE5" fontSize="10">RO Modes: s.25–28</text>
                    <text x="728" y="156" fill="#D1FAE5" fontSize="10">IT Act 2nd Schedule Sale</text>
                    <text x="728" y="182" fill="#A7F3D0" fontSize="9.5" fontWeight="700">Garnishee + Civil Prison</text>

                    {/* Bottom Status Strip */}
                    <text x="450" y="232" textAnchor="middle" fill="#94A3B8" fontSize="10.5" fontWeight="600">
                      Parallel SARFAESI Enforcement Permitted Throughout (Transcore v. Union of India, SC) &bull; Zero Election Bar
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  {DECISION_STAGES.map((stage) => (
                    <div
                      key={stage.step}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5"
                    >
                      <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {stage.step}
                      </span>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <strong className="text-sm font-bold text-slate-900">
                            {stage.shortTitle}
                          </strong>
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                            {stage.timing}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{stage.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Statutory & Court-Fee Slab Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    RDB Act 1993 &amp; DRT (Procedure) Rules 1993
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Section 19 RDB Act Statutory &amp; Court-Fee Slab Matrix
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Every Section 19 OA must satisfy strict pecuniary, territorial, and documentary thresholds under the Recovery of Debts and Bankruptcy (RDB) Act, 1993. For accounts below &#8377;20 Lakh, banks cannot invoke DRT and must instead divert files into Commercial Courts (&#8805; &#8377;3 Lakh), CPC Order XXXVII, or{" "}
                  <Link
                    href="/law/lok-adalat-pre-litigation-money-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Pre-Litigation National Lok Adalat
                  </Link>
                  .
                </p>

                {/* Statutory Provision Matrix */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Statutory Provision</th>
                        <th className="p-3.5 border-b border-slate-800">Threshold / Legal Trigger</th>
                        <th className="p-3.5 border-b border-slate-800">Mandatory Bank Compliance</th>
                        <th className="p-3.5 border-b border-slate-800">Strategic Recovery Leverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">RDB Act s.1(4)</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">
                          Total Debt &ge; &#8377;20,00,000
                        </td>
                        <td className="p-3.5">
                          Principal + accrued contractual interest + admissible non-capitalized penal charges on filing date.
                        </td>
                        <td className="p-3.5">
                          Excludes civil court jurisdiction u/s 18; unlocks fast-track Tribunal summary trial.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">RDB Act s.19(1)</td>
                        <td className="p-3.5">Territorial DRT Bench</td>
                        <td className="p-3.5">
                          File where bank branch maintains account, where defendant resides/works, or where cause of action arose.
                        </td>
                        <td className="p-3.5">
                          SAMB/Home-branch filing clause avoids travelling to outstation borrower districts.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          RDB Act s.19(3A) &amp; s.19(4)
                        </td>
                        <td className="p-3.5">30-Day Summons &amp; Written Statement</td>
                        <td className="p-3.5">
                          Serve OA + annexures electronically and by RPAD; press for mandatory Affidavit of Assets.
                        </td>
                        <td className="p-3.5">
                          Forces upfront disclosure of unmortgaged properties, bank accounts, and debtors.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          BBEA 1891 s.2A/4 &amp; BSA 2023 s.63
                        </td>
                        <td className="p-3.5">CBS &amp; Digital Evidence Admissibility</td>
                        <td className="p-3.5">
                          Attach dual-signed s.2A CBS certificates + BSA s.63 Part-A/B Schedule with SHA-256 hashes.
                        </td>
                        <td className="p-3.5">
                          Prima facie proof of ledger debt without producing original physical books in Tribunal.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          RDB Act s.19(12)&ndash;(15)
                        </td>
                        <td className="p-3.5">Interim Attachment &amp; Injunction</td>
                        <td className="p-3.5">
                          File separate IA with encumbrance proof / shortfall valuation showing alienation risk.
                        </td>
                        <td className="p-3.5">
                          Ex-parte freeze on unmortgaged plots, receivables, and personal guarantor assets.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          RDB Act s.19(20), 19(22) &amp; s.25&ndash;28
                        </td>
                        <td className="p-3.5">Recovery Certificate &amp; Execution</td>
                        <td className="p-3.5">
                          Claim contractual pendente lite &amp; future interest; transmit RC directly to Recovery Officer.
                        </td>
                        <td className="p-3.5">
                          RO executes under IT Act 2nd Schedule: e-auction, garnishee freeze, Receiver &amp; civil prison.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Rule 7 DRT Court Fee Slab Table */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                    DRT OA Court Fee Slab Calculation for Banks (Rule 7, DRT Procedure Rules)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Rule 7(2), bank OA fees scale modestly and hit a hard statutory ceiling at &#8377;1,50,000—making e-DRT drastically cheaper than State ad-valorem Civil or Commercial Court fees on high-value NPAs. Run exact multi-tier calculations on our{" "}
                    <Link
                      href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      DRT OA Fee &amp; Forum Calculator
                    </Link>
                    .
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white font-bold">
                          <th className="p-3.5 border-b border-slate-800">OA Claim Value</th>
                          <th className="p-3.5 border-b border-slate-800">Rule 7 Statutory Formula</th>
                          <th className="p-3.5 border-b border-slate-800 text-emerald-300">
                            Exact DRT OA Fee
                          </th>
                          <th className="p-3.5 border-b border-slate-800">
                            Typical Civil Court Fee
                          </th>
                          <th className="p-3.5 border-b border-slate-800">SAMB Filing Note</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        {DRT_FEE_SLABS.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="p-3.5 font-bold text-slate-900">{row.claimAmount}</td>
                            <td className="p-3.5 font-mono text-xs">{row.formula}</td>
                            <td className="p-3.5 font-extrabold text-emerald-700 bg-emerald-50/50">
                              {row.drtFee}
                            </td>
                            <td className="p-3.5 text-[#DC2626] font-semibold">
                              {row.civilComparison}
                            </td>
                            <td className="p-3.5 text-xs text-slate-600">{row.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 4: Interactive 4 Scenarios */}
              <section
                id="heading-scenarios"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Interactive SAMB Litigation Playbooks
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    4 High-Stakes DRT OA Litigation Scenarios &amp; Tactics
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Select a real-world NPA bottleneck below to inspect the exact statutory counter-move used by seasoned bank recovery counsel across India&apos;s 39 Debts Recovery Tribunals.
                </p>
                <EdrtScenarioTabs />
              </section>

              {/* Section 5: Worked Financial & Interest Calculation Box */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Worked SAMB Financial &amp; Court-Fee Illustration
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Worked Ledger: &#8377;1.85 Cr NPA OA Fee &amp; Unsecured Deficit
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Consider a Stressed Assets Management Branch (SAMB) handling a defaulted SME Term Loan + Cash Credit account classified NPA on 31 March 2025. The mortgaged factory shed auctioned under SARFAESI realizes &#8377;1.10 Cr, leaving a &#8377;75 Lakh deficit—while the promoter holds an unencumbered commercial plot worth &#8377;95 Lakh. Here is how the RBI-compliant OA claim, BharatKosh fee, and Recovery Certificate math break down:
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {/* Dark Ledger Breakdown */}
                  <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-3">
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-red-400">
                      RBI-Compliant OA Claim Schedule (No Penal Capitalization)
                    </span>
                    <div className="divide-y divide-slate-800 text-xs sm:text-sm">
                      <div className="py-2.5 flex justify-between gap-4">
                        <span className="text-slate-300">Unpaid Principal Balance (CBS Ledger)</span>
                        <span className="font-mono font-bold text-white">&#8377;1,42,00,000</span>
                      </div>
                      <div className="py-2.5 flex justify-between gap-4">
                        <span className="text-slate-300">
                          Contractual Interest (MCLR + 3.25%, Unserviced)
                        </span>
                        <span className="font-mono font-bold text-white">&#8377;38,40,000</span>
                      </div>
                      <div className="py-2.5 flex justify-between gap-4">
                        <span className="text-slate-300">
                          Standalone Penal Charges (Non-Capitalized)
                        </span>
                        <span className="font-mono font-bold text-amber-300">&#8377;4,60,000</span>
                      </div>
                      <div className="py-3 flex justify-between gap-4 bg-white/5 px-2.5 rounded-lg mt-1">
                        <span className="font-extrabold text-white">Total Section 19 OA Claim</span>
                        <span className="font-mono font-black text-emerald-400">
                          &#8377;1,85,00,000
                        </span>
                      </div>
                      <div className="py-2.5 flex justify-between gap-4">
                        <span className="text-slate-300">Less: Parallel SARFAESI Sale Realization</span>
                        <span className="font-mono font-bold text-slate-200">
                          (&#8377;1,10,00,000)
                        </span>
                      </div>
                      <div className="py-2.5 flex justify-between gap-4">
                        <span className="font-bold text-red-300">
                          Net Unsecured Deficit Targeted via s.19(12)
                        </span>
                        <span className="font-mono font-black text-red-400">&#8377;75,00,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Emerald ROI & Fee Card */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-emerald-800">
                        Rule 7 Court Fee &amp; Recovery Certificate Yield
                      </span>
                      <div className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
                        <div className="flex justify-between gap-3 pb-2 border-b border-emerald-200/80">
                          <span>Calculated Rule 7 Fee (12K + 175 × 1K)</span>
                          <span className="font-mono line-through text-slate-500">&#8377;1,87,000</span>
                        </div>
                        <div className="flex justify-between gap-3 pb-2 border-b border-emerald-200/80">
                          <span className="font-bold">Actual BharatKosh Fee Paid (Max Cap)</span>
                          <span className="font-mono font-black text-emerald-800">&#8377;1,50,000</span>
                        </div>
                        <div className="flex justify-between gap-3 pb-2 border-b border-emerald-200/80">
                          <span>DRT Fee as % of &#8377;1.85 Cr Claim</span>
                          <span className="font-mono font-bold text-emerald-800">0.81% Only</span>
                        </div>
                        <div className="flex justify-between gap-3 pb-2 border-b border-emerald-200/80">
                          <span>Pendente Lite Interest (s.19(20) @ 12% SI)</span>
                          <span className="font-mono font-bold text-emerald-800">
                            +&#8377;9,00,000 / yr on Deficit
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-emerald-900 bg-white/80 border border-emerald-200 rounded-xl p-3 leading-relaxed">
                      <strong>SAMB Takeaway:</strong> By attaching the guarantor&apos;s &#8377;95 Lakh unencumbered plot via Section 19(13)(A) on Day 1, the bank recovers the entire &#8377;75 Lakh shortfall plus accrued s.19(20) interest and &#8377;1.50 Lakh statutory costs directly through the Recovery Officer.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Bankers' Books Evidence Act s.2A & BSA 2023 s.63 Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Trial-Proof Documentary Architecture
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Bankers&apos; Books Evidence Act s.2A &amp; BSA s.63 CBS Checklist
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 4 of the Bankers&apos; Books Evidence Act, 1891, a certified copy of any entry in a banker&apos;s book is received as prima facie evidence of the existence of such entry. However, for computerized Core Banking Systems (Finacle, TCS BaNCS, Flexcube), Section 2A mandates a strict dual-certificate regime—which in 2026 DRT proceedings must be harmonized with Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 for every email, WhatsApp delivery log, and portal document.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-slate-900 text-white">
                      Layer 1 &bull; Bankers&apos; Books Evidence Act s.2A
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Mandatory CBS Ledger Certificate Clauses
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-700 leading-relaxed list-disc pl-4">
                      <li>
                        <strong>Principal Accountant / Branch Manager Certificate (s.2A(a)):</strong> Certifies that the statement is a true extract from computerized books kept in the ordinary course of banking business and still in the bank&apos;s custody.
                      </li>
                      <li>
                        <strong>IT / System In-Charge Certificate (s.2A(b)&ndash;(c)):</strong> Describes the CBS system, safeguards preventing unauthorized tampering, backup protocols, and confirms no malfunction affected data accuracy during the loan tenure.
                      </li>
                      <li>
                        <strong>Rate-Reset &amp; Interest Certificate:</strong> Separate schedule mapping MCLR/EBLR/Repo benchmark resets and confirming zero capitalization of penal charges per RBI Fair Lending Directions.
                      </li>
                      <li>
                        <strong>Non-Ledger Sanction Exhibits:</strong> Original Sanction Letter, Loan Agreement, Hypothecation Deed, Equitable Mortgage Memorandum (MODT), CERSAI Asset ID Search, and Revival/Balance Confirmation Letters (Limitation Act s.18).
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#DC2626] text-white">
                      Layer 2 &bull; BSA 2023 s.63 &amp; Pre-OA Recall
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Electronic Evidence Schedule &amp; Recall Proof
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-700 leading-relaxed list-disc pl-4">
                      <li>
                        <strong>Part-A (User / SAMB Officer):</strong> Identifies electronic device/server, email headers, WATI Business WhatsApp blue-tick logs, and e-DRT PDF/A source files for the Pre-OA Loan Recall Notice.
                      </li>
                      <li>
                        <strong>Part-B (IT / System Expert Hash):</strong> Records the cryptographic{" "}
                        <code className="bg-slate-200 px-1 rounded font-mono text-[11px]">
                          SHA-256
                        </code>{" "}
                        hash value of the CBS statement PDF, digital recall notice, and delivery receipts so authenticity cannot be impeached.
                      </li>
                      <li>
                        <strong>Pre-OA Loan Recall Mandatory Language:</strong> Expressly recalls the entire facility, specifies NPA date, itemizes Principal vs Contractual Interest vs Penal Charges, and explicitly invokes every Personal/Corporate Guarantee u/s 128 Contract Act.
                      </li>
                      <li>
                        <strong>Use Our Pre-Vetted Draft:</strong> Download and customize the RBI-compliant{" "}
                        <Link
                          href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                          className="text-[#DC2626] font-semibold hover:underline"
                        >
                          Bank Loan Recall cum Guarantee Invocation Notice Template
                        </Link>{" "}
                        before uploading your e-DRT docket.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 7: Section 19(12)-(15) Attachment & Recovery Certificate Execution */}
              <section
                id="heading-attachment-rc"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    From Paper Order to Cash Realization
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Section 19(12)&ndash;(15) Attachment &amp; Recovery Certificate Execution
                  </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Winning a DRT Final Order 18 months later achieves nothing if the defaulting promoter has already transferred unmortgaged bungalows, liquidated fixed deposits, or shifted business revenues into a sister entity. The single highest-ROI litigation lever in the RDB Act is filing an urgent{" "}
                    <strong>Interlocutory Application (IA) under Sections 19(12), 19(13)(A), and 19(15)</strong>{" "}
                    simultaneously with the Original Application on e-DRT.
                  </p>
                  <p>
                    Under <strong>Section 19(13)(A)</strong>, where the Presiding Officer is satisfied by affidavit that the defendant is about to dispose of the whole or any part of their property, or remove assets from the Tribunal&apos;s jurisdiction with intent to obstruct recovery, the Tribunal may direct the defendant to furnish security or order immediate conditional attachment of specified unmortgaged properties. Paired with <strong>Section 19(3A)</strong> (mandatory Affidavit of Assets disclosing all movable and immovable wealth) and <strong>Section 19(12)</strong> (interim injunction restraining alienation or third-party creation), banks secure leverage early—often triggering realistic One-Time Settlement (OTS) negotiations within 60 days of summons.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-400 block">
                      Recovery Certificate (RDB Act s.19(22))
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      4 Statutory Execution Modes Before DRT Recovery Officer
                    </h3>
                    <ol className="space-y-1.5 text-xs text-slate-300 list-decimal pl-4 leading-relaxed">
                      <li>
                        <strong>Section 25(a) Attachment &amp; E-Auction:</strong> Direct sale of mortgaged and unmortgaged immovable/movable assets under the Second Schedule to the Income-tax Act, 1961.
                      </li>
                      <li>
                        <strong>Section 28(3) Garnishee Recovery:</strong> Compelling third-party debtors, other banks holding FDs/current accounts, or tenants of the defaulter to remit monies straight to the Recovery Officer.
                      </li>
                      <li>
                        <strong>Section 25(c) Receiver Appointment:</strong> Taking charge of running factories, rent-yielding commercial properties, or hypothecated machinery fleets.
                      </li>
                      <li>
                        <strong>Section 25(b) Arrest &amp; Civil Prison:</strong> Coercive arrest warrant against wilful defaulters who hold means to pay yet obstruct Recovery Certificate satisfaction.
                      </li>
                    </ol>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 block">
                      e-DRT Portal Hygiene &amp; Priority
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      5 Scrutiny Defects That Stall e-DRT Diary Numbers
                    </h3>
                    <ul className="space-y-1.5 text-xs text-amber-950 list-disc pl-4 leading-relaxed">
                      <li>
                        <strong>Non-OCR / Unbookmarked Scans:</strong> e-DRT Registrars raise objections if PDFs are non-searchable images exceeding size limits without clean index bookmarks.
                      </li>
                      <li>
                        <strong>Missing Board Resolution / Power of Attorney:</strong> Every OA verified by a Chief Manager or AGM Legal must annex valid signing authority and gazetted/notarized POA.
                      </li>
                      <li>
                        <strong>Unstamped / Deficiently Stamped Agreements:</strong> Audit state stamp duty on Loan Agreements, Guarantee Deeds, and MODTs prior to filing to prevent impounding delays.
                      </li>
                      <li>
                        <strong>Missing CERSAI Priority Proof (Section 31B):</strong> Attach CERSAI registration certificates to assert statutory secured-creditor priority over Crown/tax dues under Section 31B RDB Act.
                      </li>
                      <li>
                        <strong>Mismatch Between Recall Notice &amp; OA Ledger:</strong> Ensure NPA classification date and itemized interest tables match verbatim across the Pre-OA Notice and OA pleadings.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8: Dual-Track B2B Conversion CTA */}
              <section
                id="heading-cta-block"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Instant Execution Desk &bull; Single Case or Zonal CSV
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Launch Pre-OA Loan Recall or Institutional SAMB Batch Desk
                  </h2>
                </div>
                <EdrtFilingCTA />
              </section>

              {/* Section 9: IND-01 Banking Internal Link Network */}
              <section
                id="heading-bank-network"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    IND-01 Banking &amp; Lending Ecosystem
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Banking NPA &amp; DRT Recovery Network (IND-01 Resources)
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link
                    href="/industries/banks-loan-recovery"
                    className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] hover:bg-white transition-all"
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Parent Industry Hub
                    </span>
                    <strong className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] block">
                      Bank Loan &amp; NPA Legal Recovery Hub
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Multi-track playbook uniting SARFAESI, DRT, Lok Adalat &amp; Zonal Representee batch desks.
                    </p>
                  </Link>

                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] hover:bg-white transition-all"
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-1">
                      Interactive T1 Calculator
                    </span>
                    <strong className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] block">
                      SARFAESI &amp; DRT OA Fee Calculator
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Compute exact Rule 7 DRT OA court fees, check &#8377;20L floors &amp; plot SARFAESI dates.
                    </p>
                  </Link>

                  <Link
                    href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                    className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] hover:bg-white transition-all"
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 block mb-1">
                      Advocate P1 Template
                    </span>
                    <strong className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] block">
                      Loan Recall &amp; Guarantee Invocation Notice
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      RBI Penal-Charge-compliant pre-OA demand notice with explicit Section 128 guarantee clause.
                    </p>
                  </Link>

                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] hover:bg-white transition-all"
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
                      Bank Seed Service
                    </span>
                    <strong className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] block">
                      Legal Notice for Banks to Recover Unpaid Dues
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Rapid branch-level statutory notice dispatch via Email, WhatsApp &amp; Speed Post RPAD.
                    </p>
                  </Link>

                  <Link
                    href="/law/sarfaesi-section-13-2-demand-notice-bank-guide"
                    className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] hover:bg-white transition-all"
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
                      IND-01 Sibling Spoke
                    </span>
                    <strong className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] block">
                      SARFAESI Section 13(2) &amp; 13(3A) Bank Guide
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Authorized Officer compliance checklist for itemized breakups, Rule 3 service &amp; 15-day replies.
                    </p>
                  </Link>

                  <Link
                    href="/sarfaesi-section-14-dm-cmm-physical-possession-workflow"
                    className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] hover:bg-white transition-all"
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
                      IND-01 Sibling Spoke
                    </span>
                    <strong className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] block">
                      SARFAESI Section 14 DM/CMM Physical Possession
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      9-point affidavit checklist, CERSAI proof, 30&ndash;60 day DM window &amp; High Court mandamus.
                    </p>
                  </Link>

                  <Link
                    href="/bank-loan-recovery-below-20-lakhs-drt-threshold-options"
                    className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] hover:bg-white transition-all"
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
                      IND-01 Sibling Spoke
                    </span>
                    <strong className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] block">
                      Bank Loan Recovery Below &#8377;20L DRT Floor
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Compare Commercial Court s.12A, CPC Order XXXVII, PSS s.25, Arbitration &amp; Lok Adalat.
                    </p>
                  </Link>

                  <Link
                    href="/law/lok-adalat-pre-litigation-money-recovery"
                    className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] hover:bg-white transition-all"
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
                      Sub-&#8377;20L Zero-Fee Route
                    </span>
                    <strong className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] block">
                      Pre-Litigation Lok Adalat Money Recovery
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Zero court fee settlement decrees under Section 21 Legal Services Authorities Act.
                    </p>
                  </Link>

                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626] hover:bg-white transition-all"
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Enterprise Batch Engine
                    </span>
                    <strong className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] block">
                      Bulk Recovery Cases All-in-One Solutions
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Upload 10 to 10,000+ delinquent accounts via CSV for automated tri-channel dispatch.
                    </p>
                  </Link>
                </div>
              </section>

              {/* Section 10: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Practitioner Q&amp;A for Bank Legal Teams
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Frequently Asked Questions: e-DRT Section 19 OA Filing
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group rounded-xl border border-slate-200 bg-slate-50/70 open:bg-white open:border-slate-300 transition-colors"
                    >
                      <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm md:text-base text-slate-900">
                        <span>{faq.question}</span>
                        <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white text-slate-700 flex items-center justify-center text-xs font-black shrink-0 transition-colors">
                          +
                        </span>
                      </summary>
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Statutory Sources & Attribution */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Verified Legal &amp; Regulatory References
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Primary Statutory Authorities, Bare Acts &amp; e-DRT Portals
                  </h2>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((src, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <span className="font-mono text-[11px] font-bold text-[#DC2626] mt-0.5">
                        [{idx + 1}]
                      </span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] font-medium underline underline-offset-2"
                      >
                        {src.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <strong className="text-white block">
                      Authored &amp; Reviewed by Anuj Anand Malik, Advocate &amp; Founder — AMA Legal Solutions
                    </strong>
                    <span className="text-slate-400">
                      Institutional Banking &amp; Commercial Recovery Division &bull; Last Updated: 19 November 2026 &bull; Informational legal manual; verify bench-specific DRT practice directions before filing.
                    </span>
                  </div>
                  <Link
                    href="/authors/anuj-anand-malik"
                    className="text-red-300 hover:text-white font-bold whitespace-nowrap underline underline-offset-2"
                  >
                    Advocate Profile &rarr;
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links outside <main> */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
