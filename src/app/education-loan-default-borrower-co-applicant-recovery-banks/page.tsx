import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import EduLoanTableOfContents from "./EduLoanTableOfContents";
import EduLoanScenarioTabs from "./EduLoanScenarioTabs";
import EduLoanCTA from "./EduLoanCTA";

export const revalidate = 86400;

const PAGE_URL = "/education-loan-default-borrower-co-applicant-recovery-banks";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const EXACT_H1 =
  "Recovering Defaulted Education Loans When the Student Moves Abroad: Co-Obligor & Electronic Service Guide";
const META_TITLE = "Education Loan NPA Recovery: NRI Student & Co-Borrower";
const META_DESCRIPTION =
  "Serve valid CPC Order V Rule 25 electronic notices on NRI student defaulters while enforcing Contract Act s.43 parent co-obligor liability & CGFSEL.";
const OG_ALT = formatAltText(
  "Education Loan NPA Recovery for Banks: NRI Student Electronic Notice and Parent Co-Obligor Enforcement"
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

const PRIMARY_SOURCES = [
  {
    title:
      "Indian Contract Act, 1872 (Section 43 — Joint & Several Liability of Co-Obligors & Section 128 — Co-Extensive Surety Liability)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Code of Civil Procedure, 1908 (Order V Rule 25 — Out-of-India Electronic Service, Order XXI Rule 48/46A — Garnishee & Section 44A)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Email Headers, WhatsApp Delivery Logs & CBS Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "National Credit Guarantee Trustee Company (NCGTC) — Credit Guarantee Fund Scheme for Education Loans (CGFSEL) Guidelines",
    url: "https://www.ncgtc.in/en/product-details/CGFSEL/Credit-Guarantee-Fund-Scheme-for-Education-Loans-(CGFSEL)",
  },
  {
    title:
      "SARFAESI Act, 2002 (Sections 13(2), 13(3A), 13(4), 14 & 26D CERSAI Enforcement for Mortgaged Overseas Education Loans)",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title:
      "Reserve Bank of India — Fair Lending Practice: Penal Charges in Loan Accounts (Non-Capitalized Separate Penal Charge Mandate)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12527&Mode=0",
  },
];

const FAQS = [
  {
    question:
      "Can an Indian bank recover a defaulted education loan directly from the parent co-applicant if the student lives abroad?",
    answer:
      "Yes. Under Section 43 of the Indian Contract Act, 1872, where a parent or guardian executes the education loan agreement as a co-borrower or joint obligor, their liability is joint and several. The Supreme Court in State Bank of India v. Indexport Registered (1992) and Industrial Investment Bank of India v. Biswanath Jhunjhunwala (2009) confirmed that a creditor is not required to exhaust remedies against the principal borrower abroad before enforcing full recovery against the Indian co-obligor or domestic collateral.",
  },
  {
    question:
      "How does a bank serve a court-admissible legal notice on an NRI student borrower who changed their Indian SIM card?",
    answer:
      "Under CPC Order V Rule 25 and the Supreme Court's Suo Motu WP(C) No. 3 of 2020 directions (July 2020), electronic service via verified email, fax, and instant messaging (WhatsApp) is legally recognized for defendants residing abroad alongside international registered post or courier. To make electronic service bulletproof in Civil Court, DRT, or CGFSEL audits, banks must preserve raw SMTP headers, WATI WhatsApp delivery/read logs, and last-known postal receipts certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA).",
  },
  {
    question:
      "What is the difference in legal recovery between collateral-free loans up to ₹7.5 Lakh and secured overseas loans above ₹7.5 Lakh?",
    answer:
      "Under the IBA Model Educational Loan Scheme, loans up to ₹7.5 Lakh require zero tangible collateral and are eligible for 75% default guarantee cover under CGFSEL (NCGTC); banks recover these via simultaneous co-obligor notices, Pre-Litigation Lok Adalat (zero court fee), Order XXXVII CPC summary suits, and PSS Act s.25 e-NACH complaints. Loans above ₹7.5 Lakh backed by Indian residential or commercial property mortgages allow immediate non-judicial enforcement under SARFAESI Section 13(2)/14 (for loans above ₹1 Lakh with CERSAI s.26D registration) plus e-DRT Section 19 Original Applications once total dues reach ₹20 Lakh.",
  },
  {
    question:
      "Does initiating legal action against the Indian parent co-obligor affect CGFSEL 75% guarantee claim eligibility?",
    answer:
      "On the contrary, initiating verifiable recovery action is mandatory to keep CGFSEL cover valid. NCGTC norms require Member Lending Institutions (MLIs) to demonstrate active recovery steps—starting with recall/demand notices to both borrower and co-borrower and initiation of legal or Lok Adalat proceedings—before or alongside lodging the first-tranche 75% guarantee claim and remitting post-claim recoveries proportionally.",
  },
  {
    question:
      "Can a bank attach the salary of a defaulting parent co-obligor or returned graduate working in India?",
    answer:
      "Yes. Once the bank obtains a Civil Court decree (Order XXXVII Summary Suit), a DRT Recovery Certificate, or a Pre-Litigation Lok Adalat Section 21 deemed decree, it can file an execution petition under CPC Order XXI Rule 48 directing the Drawing & Disbursing Officer (DDO) or corporate HR payroll to deduct attachable monthly salary directly (subject to statutory exemption ceilings under CPC Section 60(1)(i)) and garnish Indian bank balances under Order XXI Rule 46A.",
  },
  {
    question:
      "Can an Indian Civil Court or DRT decree be enforced directly against an NRI student's assets in the US, UK, Canada, or UAE?",
    answer:
      "Direct execution depends on CPC Section 44A reciprocating territory notifications. Decrees from superior Indian courts can be pursued under reciprocating frameworks in jurisdictions such as the UK, Singapore, UAE, and Hong Kong subject to local procedural verification. In non-reciprocating countries like the United States, Australia, or Germany, banks would need to file a fresh substantive suit abroad—which is commercially uneconomical for sub-₹50 Lakh retail loans, making Indian co-obligor enforcement, domestic mortgage execution, and Indian asset garnishment the primary recovery engine.",
  },
  {
    question:
      "How do banks handle borrower disputes over uncredited CSIS interest subsidy or requests for moratorium extension?",
    answer:
      "Banks should reconcile Canara Bank nodal CSIS claims and document exact course-completion and contractual moratorium expiry dates inside the initial Advocate Legal Notice annexure. Separating simple moratorium interest, contractual post-moratorium interest, and uncompounded RBI-compliant penal charges eliminates accounting ambiguities, defeats Order XXXVII leave-to-defend stalling tactics, and insulates the bank from RBI Banking Ombudsman complaints.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  url: CANONICAL_URL,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: `${SITE_URL}/blog_money_recovery.png`,
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  inLanguage: "en-IN",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/about`,
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
  about: [
    "Education Loan NPA Recovery India",
    "Indian Contract Act Section 43 Co-Obligor Liability",
    "CPC Order V Rule 25 Electronic Notice Service",
    "CGFSEL Credit Guarantee Fund Scheme for Education Loans",
  ],
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Indian Banks Recover Defaulted Overseas Education Loans from NRI Students and Indian Co-Applicants",
  description:
    "Step-by-step institutional recovery SOP combining CPC Order V Rule 25 electronic service, Contract Act s.43 co-obligor enforcement, CGFSEL claim alignment, and garnishee/SARFAESI execution.",
  totalTime: "P60D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Segment Collateral Tier, CGFSEL Cover & CSIS Subsidy Ledger",
      text: "Audit whether the loan is unsecured (<= ₹7.5 Lakh under CGFSEL) or mortgage-backed (> ₹7.5 Lakh with CERSAI s.26D), verify contractual moratorium expiry, and reconcile CSIS subsidy credits and uncompounded RBI penal charges.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve Dual-Jurisdiction Tri-Channel Fact-Verified Legal Notice",
      text: "Dispatch simultaneous recall-cum-demand notices under Contract Act s.43 to the Indian parent co-obligor via Speed Post RPAD + Email + WhatsApp and to the overseas student via verified Email + international WhatsApp + last-known foreign courier under CPC Order V Rule 25.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Compile BSA 2023 Section 63 Electronic Service Proof",
      text: "Archive raw SMTP delivery logs, WATI WhatsApp delivery/read metadata, India Post RPAD tracking receipts, and Bankers' Books Evidence Act s.2A CBS statements certified under BSA 2023 s.63.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Trigger Domestic Enforcement Track Against Co-Obligor & Security",
      text: "Route unsecured sub-₹7.5L accounts to Pre-Litigation National Lok Adalat or Order XXXVII CPC summary suits (plus PSS Act s.25 on bounced Indian e-NACH mandates); route mortgaged accounts to SARFAESI s.13(2)/s.14 and e-DRT s.19 OA (>= ₹20L).",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Execute Decree via Employer Garnishee or Lodge CGFSEL 75% Claim",
      text: "Enforce Civil/Lok Adalat decrees via CPC Order XXI Rule 48 salary attachment and Rule 46A bank garnishment on Indian co-obligors, while filing compliant NCGTC CGFSEL guarantee claims within statutory timelines.",
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
      name: "Banks Loan Recovery Hub",
      item: `${SITE_URL}/industries/banks-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Education Loan NPA & Co-Obligor Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function EducationLoanRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data */}
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-01 Banking Recovery Playbook</span>
            <span>&bull;</span>
            <span>Contract Act s.43 &middot; CPC O.V R.25 &middot; CGFSEL</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            When an education loan borrower relocates overseas and abandons Indian SIM cards, banks do not need foreign litigation first. Under Contract Act s.43, Indian parent co-obligors carry immediate joint and several liability, while CPC Order V Rule 25 and BSA s.63 validate international Email/WhatsApp service—part of our{" "}
            <Link
              href="/industries/banks-loan-recovery"
              className="text-red-300 hover:text-white underline underline-offset-2 font-bold"
            >
              Indian Banks NPA Legal Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-red-400">6%–8%+</p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Historical retail NPA stress band in PSU unsecured education portfolios
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">s.43 Joint</p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Direct Indian recovery against parent co-obligors without chasing NRI first
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-amber-400">75% Cover</p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                NCGTC CGFSEL guarantee ceiling on collateral-free loans up to &#8377;7.5 Lakh
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-slate-100">O.V R.25</p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Court-admissible international Email &amp; WhatsApp service + BSA s.63 proof
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Banks Loan Recovery Hub", href: "/industries/banks-loan-recovery" },
              {
                label: "Education Loan NPA & Co-Obligor Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <EduLoanTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Problem Framing */}
            <section
              id="heading-edu-npa-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Overseas Education Loans Hit 6–8%+ Retail NPA in PSU Banks
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across Scheduled Commercial Banks, Public Sector Banks (PSBs), and Regional Rural Banks, education loans consistently carry one of the steepest gross NPA ratios in the retail asset book—historically ranging between 6% and 8%+ in sub-&#8377;7.5 Lakh collateral-free tranches and spiking whenever graduates relocate abroad for STEM, management, or medical careers. Unlike home or auto loans where borrowers stay anchored to one Indian city and physical collateral is inspected annually, education loans suffer a built-in <strong>3-to-5 year moratorium blind spot</strong>.
                </p>
                <p>
                  By the time repayment holiday expires (course duration plus 12 months, or 6 months after securing employment), three operational failures routinely cripple branch recovery teams:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                  <li className="bg-red-50/70 border border-red-200 rounded-xl p-4">
                    <span className="text-xs font-black uppercase tracking-wider text-[#DC2626] block mb-1.5">
                      1. Dead Indian SIM &amp; RPAD
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Graduates deactivate Indian prepaid numbers upon landing in the UK, US, Canada, Germany, or Australia. Traditional Speed Post letters return marked &ldquo;Addressee Left India,&rdquo; leaving branches stuck without valid service proof.
                    </p>
                  </li>
                  <li className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-800 block mb-1.5">
                      2. Co-Obligor Under-Utilization
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Branch officers treat the parent co-applicant as a polite reminder contact rather than a co-equal primary debtor under Indian Contract Act Section 43, delaying legal escalation until limitation risks mount.
                    </p>
                  </li>
                  <li className="bg-slate-100 border border-slate-200 rounded-xl p-4">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-800 block mb-1.5">
                      3. Sub-&#8377;20L Forum Paralysis
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Over 80% of domestic and mid-tier overseas education loans fall below the &#8377;20 Lakh DRT pecuniary floor, leaving branches unsure how to coordinate Lok Adalat, Order XXXVII summary suits, and NCGTC CGFSEL guarantee filings.
                    </p>
                  </li>
                </ul>
                <p>
                  Most articles online coach students on seeking moratorium extensions or writing hardship emails. This operational SOP flips the lens strictly to the <strong>Retail Loan Recovery Head and Overseas Education Loan Desk</strong>: equipping bank legal teams to execute simultaneous court-admissible international electronic service on the NRI student while enforcing binding domestic recovery against Indian parent co-obligors, salaried guarantors, and mortgaged family property.
                </p>
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Stacked Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Escalation Decision Tree: Collateral Tier &amp; NRI Location Map
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Before issuing recall notices or incurring court fees, segment every education loan NPA along two axes: <strong>IBA Collateral Tier</strong> (Unsecured &le; &#8377;7.5L vs. Collateralized &gt; &#8377;7.5L vs. DRT-Eligible &ge; &#8377;20L) and <strong>Domestic Co-Obligor Liquidity</strong>. Follow this statutory escalation workflow:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-950 rounded-2xl p-6 border border-slate-800 shadow-inner">
                <svg
                  width={860}
                  height={370}
                  viewBox="0 0 860 370"
                  role="img"
                  aria-label="Education Loan NPA Recovery Decision Tree by Collateral Tier and Co-Obligor Liability"
                  className="w-full h-auto max-w-[860px] mx-auto"
                >
                  <defs>
                    <marker
                      id="eduArrow"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#94A3B8" />
                    </marker>
                  </defs>

                  {/* Root Node */}
                  <rect x="230" y="14" width="400" height="58" rx="12" fill="#DC2626" />
                  <text x="430" y="39" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">
                    DAY-90 NPA / MORATORIUM EXPIRY DEFAULT
                  </text>
                  <text x="430" y="58" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="600">
                    Audit CSIS Subsidy + RBI Penal Charges + Co-Obligor Asset Profile
                  </text>

                  {/* Connector to Step 2 */}
                  <line x1="430" y1="72" x2="430" y2="104" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#eduArrow)" />

                  {/* Unified Tri-Channel Notice Node */}
                  <rect x="170" y="106" width="520" height="56" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="430" y="130" textAnchor="middle" fill="#F8FAFC" fontSize="12.5" fontWeight="800">
                    MANDATORY TRI-CHANNEL ADVOCATE RECALL NOTICE (CONTRACT ACT s.43)
                  </text>
                  <text x="430" y="148" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    NRI Student: Email + Int&apos;l WhatsApp (CPC O.V R.25) | Parent Co-Obligor: RPAD + Email + WhatsApp + BSA s.63
                  </text>

                  {/* Three Branch Connectors */}
                  <line x1="430" y1="162" x2="430" y2="184" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="145" y1="184" x2="715" y2="184" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="145" y1="184" x2="145" y2="210" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#eduArrow)" />
                  <line x1="430" y1="184" x2="430" y2="210" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#eduArrow)" />
                  <line x1="715" y1="184" x2="715" y2="210" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#eduArrow)" />

                  {/* Track A: Unsecured <= 7.5L */}
                  <rect x="20" y="212" width="250" height="142" rx="12" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
                  <rect x="20" y="212" width="250" height="28" rx="12" fill="#065F46" />
                  <text x="145" y="230" textAnchor="middle" fill="#ECFDF5" fontSize="11.5" fontWeight="800">
                    TRACK A: UNSECURED &le; &#8377;7.5L
                  </text>
                  <text x="34" y="258" fill="#E2E8F0" fontSize="11" fontWeight="700">1. Pre-Litigation Lok Adalat (0% Fee)</text>
                  <text x="34" y="278" fill="#CBD5E1" fontSize="10.5">2. PSS Act s.25 (e-NACH Bounce)</text>
                  <text x="34" y="298" fill="#CBD5E1" fontSize="10.5">3. Order XXXVII Summary Suit</text>
                  <text x="34" y="318" fill="#34D399" fontSize="10.5" fontWeight="700">4. Lodge CGFSEL 75% Claim (NCGTC)</text>
                  <text x="34" y="338" fill="#94A3B8" fontSize="10">Target: Indian Parent Co-Obligor</text>

                  {/* Track B: Secured >7.5L to <20L */}
                  <rect x="305" y="212" width="250" height="142" rx="12" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
                  <rect x="305" y="212" width="250" height="28" rx="12" fill="#92400E" />
                  <text x="430" y="230" textAnchor="middle" fill="#FEF3C7" fontSize="11.5" fontWeight="800">
                    TRACK B: MORTGAGED &#8377;7.5L–&#8377;19.99L
                  </text>
                  <text x="319" y="258" fill="#E2E8F0" fontSize="11" fontWeight="700">1. SARFAESI s.13(2) (60-Day Notice)</text>
                  <text x="319" y="278" fill="#CBD5E1" fontSize="10.5">2. Rule 3 Dual Service + Paper Ad</text>
                  <text x="319" y="298" fill="#CBD5E1" fontSize="10.5">3. s.13(4) &amp; s.14 DM/CMM Possession</text>
                  <text x="319" y="318" fill="#FBBF24" fontSize="10.5" fontWeight="700">4. Order XXI R.48 Salary Garnishee</text>
                  <text x="319" y="338" fill="#94A3B8" fontSize="10">Sub-DRT Shortfall: Civil Summary Suit</text>

                  {/* Track C: High-Ticket >= 20L */}
                  <rect x="590" y="212" width="250" height="142" rx="12" fill="#0F172A" stroke="#EF4444" strokeWidth="1.5" />
                  <rect x="590" y="212" width="250" height="28" rx="12" fill="#991B1B" />
                  <text x="715" y="230" textAnchor="middle" fill="#FEF2F2" fontSize="11.5" fontWeight="800">
                    TRACK C: OVERSEAS SECURED &ge; &#8377;20L
                  </text>
                  <text x="604" y="258" fill="#E2E8F0" fontSize="11" fontWeight="700">1. Parallel SARFAESI + e-DRT s.19 OA</text>
                  <text x="604" y="278" fill="#CBD5E1" fontSize="10.5">2. s.19(12) Indian Asset Attachment</text>
                  <text x="604" y="298" fill="#CBD5E1" fontSize="10.5">3. Auction Parent&apos;s Mortgaged Flat</text>
                  <text x="604" y="318" fill="#F87171" fontSize="10.5" fontWeight="700">4. CPC s.44A (UK/UAE/SG Only)</text>
                  <text x="604" y="338" fill="#94A3B8" fontSize="10">Lookout / Travel Restraint via DRT</text>
                </svg>
              </div>

              {/* Mobile Stacked Workflow Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-slate-900 text-white rounded-xl p-4 border-l-4 border-[#DC2626]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                    Step 0 &bull; Universal Prerequisite
                  </span>
                  <p className="text-sm font-bold mt-1">
                    Dual-Jurisdiction Advocate Recall Notice (Contract Act s.43 + CPC O.V R.25)
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    Serve NRI student via Email + Int&apos;l WhatsApp and Indian parent co-obligor via Speed Post RPAD + Email + WhatsApp with BSA s.63 audit logs.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <span className="text-[10px] font-black uppercase text-emerald-800">
                    Track A &bull; Unsecured &le; &#8377;7.5 Lakh (CGFSEL)
                  </span>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Pre-Litigation National Lok Adalat (0% fee) &rarr; PSS Act s.25 e-NACH notice &rarr; Order XXXVII Summary Suit against Indian co-obligor &rarr; Lodge NCGTC CGFSEL 75% claim.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <span className="text-[10px] font-black uppercase text-amber-800">
                    Track B &bull; Mortgaged &#8377;7.5L to &#8377;19.99L
                  </span>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    SARFAESI s.13(2) 60-day notice (CERSAI s.26D verified) &rarr; s.13(4)/s.14 DM possession &rarr; Civil Summary Suit + Order XXI Rule 48 salary garnishee for balance shortfall.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <span className="text-[10px] font-black uppercase text-[#DC2626]">
                    Track C &bull; Overseas Secured &ge; &#8377;20 Lakh
                  </span>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Simultaneous SARFAESI enforcement + e-DRT s.19 Original Application with interim asset attachment on parent&apos;s Indian properties + CPC s.44A execution where reciprocating.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Contract Act s.43 Co-Obligor Doctrine */}
            <section
              id="heading-co-obligor-s43"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Contract Act s.43: Enforcing Indian Parent Co-Obligor Liability
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  The single highest-leverage legal weapon on an education loan recovery desk is already sitting inside the original loan sanction file: the parent&apos;s signature as <strong>Co-Borrower / Joint Promisor</strong>. Under IBA Model Educational Loan Scheme guidelines, almost every undergraduate and overseas postgraduate loan requires a parent, spouse, or earning guardian resident in India to execute the loan agreement as a joint executant.
                </p>
                <p>
                  Under <strong>Section 43 of the Indian Contract Act, 1872</strong>, when two or more persons make a joint promise, the promisee (the bank) may, in the absence of an express agreement to the contrary, <em>compel any one or more of such joint promisors to perform the whole of the promise</em>. Even where a third party signs separately as a guarantor or surety rather than a joint borrower, <strong>Section 128 of the Contract Act</strong> renders the surety&apos;s liability co-extensive with that of the principal debtor.
                </p>

                {/* Precedent Cards with Crimson Accent Bars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 pl-5 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <p className="text-xs font-black text-slate-900 mb-1">
                      State Bank of India v. Indexport Registered (1992) 3 SCC 159
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A three-judge Supreme Court bench firmly established that a creditor decree-holder cannot be forced to exhaust mortgaged security or pursue the principal borrower first before executing against a guarantor or co-obligor. The choice of execution order rests exclusively with the bank.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 pl-5 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <p className="text-xs font-black text-slate-900 mb-1">
                      Industrial Investment Bank of India v. Biswanath Jhunjhunwala (2009) 9 SCC 478
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Reaffirmed that liability of the guarantor/co-obligor is immediate, joint, and several. A parent co-applicant cannot stall Indian recovery proceedings by arguing that the bank must first trace the earning student in the US, UK, or Canada.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950">
                  <strong className="font-bold">Critical Co-Obligor Drafting Rule:</strong> Never issue a recall notice addressed solely to the student &ldquo;c/o Parent.&rdquo; Draft the Fact-Verified Legal Notice expressly naming both <strong>Noticee No. 1 (Principal Student Borrower)</strong> and <strong>Noticee No. 2 (Indian Parent Co-Obligor / Mortgagor)</strong>, invoking Section 43 joint liability, CIBIL/CIC adverse credit-score reporting (30-day RBI pre-reporting alert), and domestic execution against Indian immovable assets, bank accounts, and pension/salaried receivables (respecting CPC s.60 exemptions). For deeper guarantor invocation mechanics, consult our{" "}
                  <Link
                    href="/personal-guarantor-invocation-notice-bank-loan-recovery"
                    className="text-[#DC2626] hover:underline font-bold"
                  >
                    Personal Guarantor Invocation Notice Guide
                  </Link>
                  .
                </div>
              </div>
            </section>

            {/* Section 4: CPC Order V Rule 25 & BSA s.63 */}
            <section
              id="heading-nri-electronic-service"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  CPC Order V Rule 25 &amp; BSA s.63: Serving Overseas NRI Students
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Even when the bank intends to execute primarily against the Indian parent co-obligor or domestic collateral, <strong>valid notice service on the overseas student remains procedurally vital</strong>. Under SARFAESI Rule 3(1) and Order XXXVII CPC summary procedures, defaulting parents routinely seek stays or DRT Securitisation Application (SA) quashing on the technical plea that the principal student borrower was never served a valid recall notice.
                </p>
                <p>
                  <strong>Code of Civil Procedure, 1908 — Order V Rule 25</strong> directly solves cross-border service when a defendant resides outside India and has no empowered agent in India. The rule explicitly authorizes courts and plaintiffs to dispatch summons and statutory notices to the defendant&apos;s overseas residence via postal dispatch <em>or by electronic mail service, fax message, or approved courier service</em>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 pl-5 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <p className="text-xs font-black text-slate-900 mb-1">
                      In Re: Cognizance for Extension of Limitation — SC Suo Motu WP(C) 3/2020 (July 10, 2020)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The Supreme Court of India explicitly permitted service of notices, summons, and pleadings via email, fax, and instant messaging services (including WhatsApp), confirming that verified electronic transmission plus delivery receipt satisfies service requirements.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 pl-5 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <p className="text-xs font-black text-slate-900 mb-1">
                      CERC v. NHPC (2010) 10 SCC 280 &amp; SBI Cards v. Rohidas Jadhav (Bom HC, 2018)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Judicially validated commercial email notices alongside postal dispatch (CERC v. NHPC) and recognized WhatsApp delivery/blue-tick logs as proof that the noticee received the legal notice in real time (SBI Cards).
                    </p>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 pt-2">
                  The 4-Channel Overseas Service Protocol (Zero Technical Quashing)
                </h3>
                <ol className="space-y-2.5 list-decimal list-inside text-sm text-slate-700">
                  <li>
                    <strong>Verified Email Dispatch (Primary Overseas Rail):</strong> Transmit the signed PDF Fact-Verified Recall Notice to the student&apos;s personal email on loan KYC, university alumni email (if on record), and any active correspondence email—preserving raw SMTP headers, Message-ID, and non-bounce server confirmation.
                  </li>
                  <li>
                    <strong>WhatsApp Business API (WATI) Dispatch:</strong> Deliver the notice PDF to both the student&apos;s last registered Indian WhatsApp (many NRI students retain Indian WhatsApp accounts over Wi-Fi despite swapping SIMs) and any known international mobile number, logging timestamped message IDs, delivery status, and read receipts.
                  </li>
                  <li>
                    <strong>Last-Known Indian Permanent Address (RPAD + Section 27 General Clauses Act):</strong> Dispatch physical India Post Speed Post RPAD to the student&apos;s permanent Indian residential address shared with the parents. Under Section 27 of the General Clauses Act, 1897, properly stamped and addressed registered post raises a statutory presumption of deemed service even if returned &ldquo;Refused&rdquo; or &ldquo;Left.&rdquo;
                  </li>
                  <li>
                    <strong>BSA 2023 Section 63 Electronic Certificate:</strong> Bind the SMTP log, WhatsApp webhook receipt, and CBS loan ledger into a statutory certificate signed by the person in charge of the dispatch/CBS computer system and counter-verified by an expert as mandated under Section 63(4) of the Bharatiya Sakshya Adhiniyam, 2023.
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 5: Dark-Header Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Matrix: Collateral Tiers, CGFSEL &amp; Recovery Forums
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Use this institutional segmentation matrix to map every education loan NPA tier under the IBA Model Education Loan Scheme to its legally optimal recovery forum and credit guarantee action:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Loan Tier &amp; Security</th>
                      <th className="py-3.5 px-4 font-bold">Primary Target &amp; Statute</th>
                      <th className="py-3.5 px-4 font-bold">Optimal Legal Forum</th>
                      <th className="py-3.5 px-4 font-bold">Guarantee / Cost Lever</th>
                      <th className="py-3.5 px-4 font-bold">Typical Recovery Window</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Up to &#8377;4.0 Lakh
                        <span className="block text-[11px] font-normal text-slate-500">
                          Nil Collateral &middot; Parent Joint Borrower
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Indian Parent Co-Obligor (Contract Act s.43) + PSS Act s.25
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Pre-Litigation National Lok Adalat (s.20(2)) / Civil Summary Suit
                      </td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        0% Lok Adalat Court Fee + CGFSEL 75% Cover
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">30–90 Days (OTS / Award)</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-100/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        &#8377;4.01L to &#8377;7.50 Lakh
                        <span className="block text-[11px] font-normal text-slate-500">
                          Collateral-Free &middot; CGFSEL Eligible
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        NRI Student (CPC O.V R.25) + Parent Co-Obligor (s.43)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Lok Adalat / Order XXXVII CPC Suit + Order XXI R.48 Garnishee
                      </td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        CGFSEL 75% Guarantee (Mandatory Legal Initiation)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">60–150 Days + Claim Tranche</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        &#8377;7.51L to &#8377;19.99 Lakh
                        <span className="block text-[11px] font-normal text-slate-500">
                          Tangible Indian Mortgage &middot; Sub-DRT
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Parent Mortgagor + NRI Student (SARFAESI s.13(2)/s.14)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        SARFAESI Possession + Civil Court Order XXXVII (Shortfall)
                      </td>
                      <td className="py-3.5 px-4 text-amber-700 font-semibold">
                        Non-Judicial Enforcement (Verify CERSAI s.26D)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">90–180 Days (Possession / OTS)</td>
                    </tr>
                    <tr className="bg-slate-50/70 hover:bg-slate-100/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        &#8377;20.0 Lakh &amp; Above
                        <span className="block text-[11px] font-normal text-slate-500">
                          Overseas STEM/MBA &middot; High-Value Mortgage
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        SARFAESI s.13/14 + RDB Act s.19 (DRT) + Contract Act s.43
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Parallel SARFAESI + e-DRT OA &amp; s.19(12) Attachment
                      </td>
                      <td className="py-3.5 px-4 text-[#DC2626] font-semibold">
                        Dual Leverage: Flat Auction + Indian FD/Salary Freeze
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">4–10 Months (Full Liquidation)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                For sub-&#8377;20 Lakh unsecured loans excluded from DRT pecuniary jurisdiction, compare all five statutory options in our{" "}
                <Link
                  href="/bank-loan-recovery-below-20-lakhs-drt-threshold-options"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  Sub-&#8377;20 Lakh Bank Recovery Forum Guide
                </Link>
                .
              </p>
            </section>

            {/* Section 6: Interactive 4-Scenario Playbook Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Education Loan NPA Scenarios: Unsecured, NRI &amp; Collateral
                </h2>
              </div>

              <EduLoanScenarioTabs />
            </section>

            {/* Section 7: CSIS & CGFSEL 75% Guarantee Norms */}
            <section
              id="heading-csis-cgfsel"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  CSIS Subsidy Audit &amp; CGFSEL 75% Guarantee Claim Prerequisites
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Two government-backed schemes directly govern recovery economics on PSU and private bank education loan portfolios: the <strong>Credit Guarantee Fund Scheme for Education Loans (CGFSEL)</strong> administered by the National Credit Guarantee Trustee Company (NCGTC), and the <strong>Central Sector Interest Subsidy (CSIS)</strong> scheme (now integrated alongside PM-Vidyalaxmi frameworks for eligible EWS students). Mishandling either scheme leads to rejected guarantee payouts or avoidable Ombudsman reversals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 block">
                      CGFSEL 75% Guarantee Protection Rules
                    </span>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>Covers collateral-free education loans up to <strong>&#8377;7.50 Lakh</strong> sanctioned under IBA norms without third-party tangible security.</li>
                      <li>Guarantee cover extends to <strong>75% of the defaulted amount</strong> (principal + accrued interest up to NPA date, excluding unapproved penal charges).</li>
                      <li>MLIs must ensure timely annual guarantee fee remittance, accurate NPA date reporting, and <strong>documented initiation of legal/recovery proceedings</strong> (Advocate Notice + Lok Adalat / Civil Suit) to prevent NCGTC claim rejection.</li>
                      <li>Any post-claim recovery collected from the NRI student or Indian co-obligor must be shared proportionally with NCGTC after deducting permitted legal expenses.</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-800 block">
                      CSIS &amp; Moratorium Dispute Pre-Emption
                    </span>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>CSIS applies solely during the <strong>moratorium period</strong> for eligible Economically Weaker Section (EWS) domestic technical/professional courses—never for overseas post-moratorium defaults.</li>
                      <li>Before issuing a recall notice, pull the Canara Bank nodal portal subsidy claim log and reflect credited/rejected CSIS amounts in the Statement of Account annexure.</li>
                      <li>Comply strictly with RBI&apos;s <strong>Penal Charges Direction</strong> (effective April 1, 2024): penal charges cannot be capitalized into principal for compounding interest.</li>
                      <li>Pre-empting accounting disputes inside the initial Advocate Notice shuts down borrower attempts to obtain unconditional leave to defend in Order XXXVII summary suits.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Employer Garnishee & Reciprocating Country Decrees */}
            <section
              id="heading-garnishee-foreign"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Employer Garnishee Attachment &amp; Reciprocating Country Decrees
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Securing a paper decree without an execution roadmap merely shifts an NPA from branch books to dusty court files. Once the bank holds an executable decree—whether from a <strong>Pre-Litigation National Lok Adalat</strong> (Section 21 Legal Services Authorities Act), an <strong>Order XXXVII CPC Summary Suit</strong>, or a <strong>DRT Recovery Certificate</strong>—two post-decree execution tracks unlock cash recovery:
                </p>

                <div className="space-y-3">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                      1. Domestic Employer Garnishee &amp; Bank Account Attachment (CPC Order XXI Rules 48 &amp; 46A)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Where the Indian parent co-obligor (or a returned graduate employed in India) draws a regular salary from a PSU, government department, or private corporation, the bank moves an execution application under <strong>Order XXI Rule 48 / 48A CPC</strong>. The executing court serves a mandatory attachment order directly on the employer&apos;s Disbursing Officer / Payroll HR to remit the attachable salary portion (calculated after exempting the first &#8377;1,000 and two-thirds of the remainder under <strong>CPC Section 60(1)(i)</strong>, up to 24 months continuous attachment). In parallel, <strong>Order XXI Rule 46A</strong> garnishee orders freeze non-bank fixed deposits, mutual funds, and third-party receivables held in India.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                      2. Cross-Border Reality Check: CPC Section 44A Reciprocating vs. Non-Reciprocating Countries
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      For ultra-high-ticket overseas loans (&#8377;50 Lakh–&#8377;1.5 Crore+) where domestic collateral falls short, banks must distinguish between <strong>CPC Section 44A reciprocating jurisdictions</strong> (notified countries such as the United Kingdom, Singapore, UAE, Hong Kong, Malaysia, and New Zealand—where superior court decrees follow streamlined foreign-judgment recognition frameworks subject to reciprocity and natural justice) versus <strong>non-reciprocating destinations</strong> (United States, Canada, Australia, Germany—requiring a fresh local lawsuit costing &#8377;15–&#8377;40 Lakh in foreign counsel fees). Consequently, for 95% of retail education NPAs, <strong>domestic parent co-obligor enforcement, Indian collateral SARFAESI auctions, and credit-bureau (CIBIL) + Indian asset freezes</strong> deliver far superior net recovery yields.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Ledger: &#8377;7.2L CGFSEL Unsecured vs &#8377;34L Overseas Mortgage
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Compare net institutional recovery economics across the two most frequent education NPA cohorts when banks replace passive branch follow-ups with structured Tri-Channel Advocate Notices and statutory escalation:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Ledger A */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-lg flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800 mb-3">
                      Case A &bull; Unsecured CGFSEL Tier (&le; &#8377;7.5L)
                    </span>
                    <h3 className="text-base font-black text-white mb-3">
                      &#8377;7,20,000 Engineering/PG Loan &middot; Student in Canada &middot; Salaried Parent in Pune
                    </h3>
                    <div className="space-y-2 text-xs font-mono border-t border-slate-800 pt-3">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Sanctioned Principal:</span>
                        <span className="text-white font-bold">&#8377;7,20,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Accrued Simple Moratorium Int. (10.5%):</span>
                        <span className="text-white">&#8377;1,51,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Uncompounded RBI Penal Charges (2%):</span>
                        <span className="text-amber-300">&#8377;14,400</span>
                      </div>
                      <div className="flex justify-between border-t border-slate-700 pt-2 text-sm">
                        <span className="text-slate-200 font-bold">Total Recall Demand:</span>
                        <span className="text-emerald-400 font-black">&#8377;8,85,600</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-300">
                    <p>
                      <strong className="text-white">Action Stack:</strong> Tri-Channel Fact-Verified Notice (&#8377;999) &rarr; Pre-Litigation Lok Adalat (&#8377;0 Court Fee) + PSS s.25 e-NACH notice to salaried parent.
                    </p>
                    <p className="text-emerald-300 font-semibold">
                      Backstop: Even if OTS fails, valid legal initiation unlocks NCGTC CGFSEL 75% payout (~&#8377;5.4L–&#8377;6.5L eligible base) while Order XXI R.48 attaches parent salary.
                    </p>
                  </div>
                </div>

                {/* Ledger B */}
                <div className="bg-emerald-50 text-slate-900 rounded-2xl p-5 border border-emerald-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-red-400 mb-3">
                      Case B &bull; Overseas Secured Tier (&ge; &#8377;20L)
                    </span>
                    <h3 className="text-base font-black text-slate-900 mb-3">
                      &#8377;34,00,000 US MS Loan &middot; Student Stopped EMIs &middot; &#8377;65L Family Flat Mortgaged
                    </h3>
                    <div className="space-y-2 text-xs font-mono border-t border-emerald-200 pt-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Disbursed Principal:</span>
                        <span className="text-slate-900 font-bold">&#8377;34,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Contractual Interest (11.25% p.a.):</span>
                        <span className="text-slate-900">&#8377;7,65,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Separate RBI Penal Charges (Uncompounded):</span>
                        <span className="text-amber-800">&#8377;68,000</span>
                      </div>
                      <div className="flex justify-between border-t border-emerald-300 pt-2 text-sm">
                        <span className="text-slate-900 font-bold">Total SARFAESI + DRT Claim:</span>
                        <span className="text-[#DC2626] font-black">&#8377;42,33,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-emerald-200 space-y-1.5 text-xs text-slate-700">
                    <p>
                      <strong className="text-slate-900">Action Stack:</strong> Dual-Jurisdiction SARFAESI s.13(2) (NRI Email/WhatsApp + Parent RPAD) + Parallel e-DRT s.19 OA (&#8377;45,000 Rule 7 DRT Fee).
                    </p>
                    <p className="text-emerald-800 font-semibold">
                      Outcome: 100% LTV coverage via parent&apos;s &#8377;65L Indian residential flat; Rule 3 electronic proof blocks DRT SA quashing and accelerates full settlement before s.14 physical possession.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Overseas Education NPA Dossier &amp; Electronic Service Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Assemble these 8 evidentiary records before filing an Order XXXVII CPC summary suit, SARFAESI Section 14 DM application, e-DRT Original Application, or CGFSEL guarantee claim:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Sanction Letter & Joint Loan Agreement",
                    desc: "Original stamped agreement signed by both Student (Principal Borrower) and Parent (Co-Obligor/Joint Promisor) specifying moratorium expiry and Section 43 joint liability.",
                  },
                  {
                    title: "2. Foreign University Offer, Visa & Passport Copy",
                    desc: "KYC file establishing overseas country of residence, foreign university email domain, and last-known foreign residential address for CPC Order V Rule 25 service.",
                  },
                  {
                    title: "3. Certified CBS Statement (BBEA s.2A + BSA s.63)",
                    desc: "Itemized Core Banking Statement separating principal, moratorium simple interest, post-moratorium interest, CSIS credits, and uncompounded RBI penal charges.",
                  },
                  {
                    title: "4. CERSAI s.26D Registration & Title Deeds (>₹7.5L)",
                    desc: "Memorandum of Deposit of Title Deeds (MODTD), original sale deed, and CERSAI Asset ID printout mandatory before issuing SARFAESI Section 13(2) notices.",
                  },
                  {
                    title: "5. NCGTC CGFSEL Guarantee Cover Certificate (≤₹7.5L)",
                    desc: "CGPAN / Guarantee ID, annual guarantee fee receipts, and NPA classification log confirming compliance with NCGTC claim initiation deadlines.",
                  },
                  {
                    title: "6. Tri-Channel Notice Dispatch & BSA s.63 Hash Log",
                    desc: "Signed Advocate Recall Notice PDF, raw SMTP email delivery header, WATI WhatsApp delivery/read receipt, and India Post Speed Post RPAD tracking proof.",
                  },
                  {
                    title: "7. NPCI e-NACH Return Memo / Security Cheque Memo",
                    desc: "Certified electronic return memo for bounced Indian co-obligor installments to support parallel Section 25 PSS Act or Section 138 NI Act criminal prosecution.",
                  },
                  {
                    title: "8. Indian Co-Obligor Income & Asset Trace Sheet",
                    desc: "Form 16 / employer payroll address (for CPC Order XXI Rule 48 salary garnishee), Indian bank account details, and encumbrance search of unmortgaged family properties.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      &check;
                    </span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 11: Dual-Track B2B CTA */}
            <section
              id="heading-cta-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Dispatch a Single Co-Obligor Notice or Bulk Education NPA CSV
                </h2>
              </div>

              <EduLoanCTA />
            </section>

            {/* Section 12: Mandatory Internal Linking Network */}
            <section
              id="heading-internal-network"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Banking Recovery Hub, Forum Calculator &amp; Recall Notice Pack
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Integrate this Overseas Education Loan playbook with our live IND-01 Banking Recovery Hub, interactive statutory calculator, ready-to-use notice template, and sibling institutional workflows:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/industries/banks-loan-recovery"
                  className="group block bg-slate-900 text-white rounded-xl p-4 border border-slate-800 hover:border-[#DC2626] transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                    Parent Pillar Hub &bull; IND-01
                  </span>
                  <h3 className="text-sm font-black text-white group-hover:text-red-300 mt-1">
                    Scheduled Commercial, SFB &amp; Cooperative Banks Recovery Hub &rarr;
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Complete multi-track institutional NPA recovery architecture across SARFAESI, DRT, Lok Adalat, and bulk branch CSV drives.
                  </p>
                </Link>

                <Link
                  href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                  className="group block bg-emerald-50 rounded-xl p-4 border border-emerald-200 hover:border-emerald-400 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Interactive T1 Calculator
                  </span>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-[#DC2626] mt-1">
                    SARFAESI vs DRT vs Sub-&#8377;20L Bank Recovery Forum Calculator &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Enter education loan principal, collateral status, and DPD bucket to compute optimal forum, court fees, and timelines.
                  </p>
                </Link>

                <Link
                  href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                  className="group block bg-amber-50 rounded-xl p-4 border border-amber-200 hover:border-amber-400 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                    Editable P1 Notice Template
                  </span>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Bank Loan Recall cum Co-Obligor / Guarantee Invocation Notice &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Fact-verified RBI penal-charge compliant recall notice with Schedule A interest breakup ready for co-applicants.
                  </p>
                </Link>

                <Link
                  href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                  className="group block bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-[#DC2626] transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Live Bank Service Portal
                  </span>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Send Legal Notice for Banks to Recover Unpaid Dues &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Dedicated advocate notice dispatch for bank retail desks with simultaneous Email, WhatsApp, and Speed Post RPAD.
                  </p>
                </Link>

                <Link
                  href="/law/sarfaesi-section-13-2-demand-notice-bank-guide"
                  className="group block bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-[#DC2626] transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Sibling Spoke &bull; Mortgaged &gt;&#8377;7.5L
                  </span>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-[#DC2626] mt-1">
                    SARFAESI Section 13(2) &amp; 13(3A) Bank Demand Notice Guide &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Bulletproof Rule 3 service, CERSAI s.26D verification, and 15-day objection replies for mortgaged family property.
                  </p>
                </Link>

                <Link
                  href="/sarfaesi-section-14-dm-cmm-physical-possession-workflow"
                  className="group block bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-[#DC2626] transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Sibling Spoke &bull; Possession SOP
                  </span>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-[#DC2626] mt-1">
                    SARFAESI Section 14 DM/CMM Physical Possession Workflow &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    9-point Section 14 affidavit protocol and 30–60 day DM/CMM possession execution for high-value overseas loan collateral.
                  </p>
                </Link>

                <Link
                  href="/law/lok-adalat-pre-litigation-money-recovery"
                  className="group block bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-[#DC2626] transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Seed Guide &bull; Zero Court Fee
                  </span>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Pre-Litigation Lok Adalat Money Recovery Law &amp; Awards &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Convert sub-&#8377;7.5 Lakh unsecured education NPAs into final, non-appealable Section 21 deemed decrees at 0% court fee.
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="group block bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-[#DC2626] transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Enterprise Bulk Portal
                  </span>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Bulk NPA Legal Notice &amp; Institutional Recovery Solutions &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Upload 10 to 10,000+ education loan defaulters via CSV for centralized zonal tracking, reply triage, and BSA s.63 logs.
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 13: FAQs */}
            <section
              id="heading-faq"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  13
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FAQs: Education Loan NPA, NRI Notice Service &amp; Parent Liability
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-100/80 transition-colors">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center shrink-0 group-open:bg-[#DC2626] group-open:text-white group-open:border-[#DC2626] transition-colors text-sm font-black">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/70">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 14: Verified Primary Sources */}
            <section
              id="heading-primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0">
                  14
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Verified Bare Acts, SC Precedents &amp; Official Scheme Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2.5">
                    <span className="text-[#DC2626] font-black mt-0.5">&rarr;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline underline-offset-2 font-medium leading-relaxed"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500">
                <span>
                  Legal Review Attribution: <strong className="text-slate-700">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
                </span>
                <span>Updated: November 19, 2026 &bull; Institutional Creditor Guide (B2B-012)</span>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Footer Contextual Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
