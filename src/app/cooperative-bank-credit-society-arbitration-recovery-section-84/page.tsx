import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CoopBankTableOfContents from "./CoopBankTableOfContents";
import CoopBankScenarioTabs from "./CoopBankScenarioTabs";
import CoopBankCTA from "./CoopBankCTA";

export const revalidate = 86400;

const PAGE_PATH = "/cooperative-bank-credit-society-arbitration-recovery-section-84";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const HERO_IMAGE_URL = `${SITE_URL}/blog_money_recovery.png`;

const EXACT_H1 =
  "Loan Recovery Playbook for Urban Cooperative Banks & Credit Societies: Registrar Arbitration, s.84 & SARFAESI";
const META_TITLE =
  "Cooperative Bank & Credit Society Recovery: s.84 & SARFAESI";
const META_DESCRIPTION =
  "Legal recovery guide for Urban Cooperative Banks & Credit Societies: SARFAESI (Pandurang Chaugule SC), MSCS Act s.84 arbitration & two-surety notices.";

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
        url: HERO_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: formatAltText(
          "Cooperative Bank and Credit Society Loan Recovery Section 84 SARFAESI",
          "Cooperative Bank Recovery Guide"
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
    images: [HERO_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const STATUTORY_PRECEDENTS = [
  {
    title: "5-Judge Constitution Bench Confirms Cooperative Banks Can Invoke SARFAESI Directly",
    parties: "Pandurang Ganpati Chaugule v. Vishwasrao Patil Murgud Sahakari Bank Ltd.",
    citation: "(2020) 9 SCC 215, Supreme Court of India (5-Judge Constitution Bench)",
    date: "Decided 5 May 2020",
    holding:
      "The Constitution Bench held that State Cooperative Banks, District Central Cooperative Banks (DCCBs), Urban Cooperative Banks (UCBs), and Multi-State Cooperative Banks engaged in banking under Section 5(c) read with Section 56 of the Banking Regulation Act, 1949 are 'banks' under Section 2(1)(c)(iva) of the SARFAESI Act, 2002. Parliament holds full legislative competence under Entry 45, List I to empower cooperative banks to enforce security interests under Sections 13 and 14 without Civil Court intervention. Conversely, non-banking cooperative credit societies without an RBI licence remain outside SARFAESI and must enforce dues via MSCS Act s.84 or State Co-operative Societies Act Recovery Certificates.",
    takeaway:
      "Every RBI-licensed UCB and DCCB can bypass multi-year Registrar trials on mortgaged loans above ₹1 Lakh (subject to CERSAI registration under s.26D) and execute non-judicial SARFAESI possession and auction.",
  },
  {
    title: "Cooperative Banks Excluded From DRT Under RDB Act 1993 — Statutory Arbitration Controls Unsecured Suits",
    parties: "Greater Bombay Co-operative Bank Ltd. v. United Yarn Tex (P) Ltd. & Ors.",
    citation: "(2007) 6 SCC 236, Supreme Court of India",
    date: "Decided 4 April 2007",
    holding:
      "The Supreme Court ruled that cooperative banks constituted under State Co-operative Societies Acts or the Multi-State Co-operative Societies Act, 2002 do not fall within the definition of 'banking company' under Section 2(d) of the Recovery of Debts and Bankruptcy (RDB) Act, 1993. Consequently, cooperative banks cannot file Original Applications before Debt Recovery Tribunals (DRTs) and must instead utilize the specialized statutory machinery under Section 84 of the MSCS Act or State Co-operative Acts for money decrees, alongside SARFAESI for secured assets.",
    takeaway:
      "Because DRT is unavailable to cooperative banks, maintaining defect-free MSCS s.84 arbitration dossiers and State Registrar Recovery Certificate workflows is mission-critical for unsecured and shortfall recovery.",
  },
  {
    title: "Advocate Commissioner Execution Approved for Cooperative Bank SARFAESI Section 14 Possession",
    parties: "NKGSB Cooperative Bank Ltd. v. Subir Chakravarty & Ors.",
    citation: "(2022) 10 SCC 286, Supreme Court of India",
    date: "Decided 25 February 2022",
    holding:
      "In an appeal filed by a prominent Multi-State Urban Cooperative Bank, the Supreme Court confirmed that District Magistrates and Chief Metropolitan Magistrates exercising ministerial powers under Section 14(1A) of the SARFAESI Act are fully empowered to appoint an Advocate Commissioner to take physical possession of mortgaged assets, break locks, draw panchnamas, and hand over custody to the cooperative bank's Authorized Officer.",
    takeaway:
      "UCBs do not have to wait indefinitely for overburdened revenue Tehsildars; requesting an Advocate Commissioner under s.14(1A) compresses physical possession timelines dramatically.",
  },
];

const FAQS = [
  {
    question: "Can Urban Cooperative Banks (UCBs) and DCCBs invoke the SARFAESI Act, 2002?",
    answer:
      "Yes. In Pandurang Ganpati Chaugule v. Vishwasrao Patil Murgud Sahakari Bank Ltd. (2020) 9 SCC 215, a 5-Judge Constitution Bench of the Supreme Court settled that RBI-licensed Urban Cooperative Banks, District Central Cooperative Banks, State Cooperative Banks, and Multi-State Cooperative Banks are fully empowered to invoke Sections 13 and 14 of the SARFAESI Act to enforce secured mortgages, provided the security interest is registered on CERSAI under Section 26D and the overdue debt exceeds ₹1 Lakh (excluding agricultural land under Section 31(i)).",
  },
  {
    question: "Can a non-banking Credit Co-operative Society use SARFAESI to seize mortgaged property?",
    answer:
      "No. Non-banking Primary Credit Co-operative Societies, Employee Thrift Societies, and Multi-State Credit Societies that do not hold an RBI banking licence under Section 22 read with Section 56 of the Banking Regulation Act, 1949 cannot invoke SARFAESI. They must enforce secured and unsecured defaults through Multi-State Co-operative Societies Act Section 84 arbitration (if multi-state) or State Registrar Recovery Certificates / Co-operative Court proceedings (e.g., Maharashtra s.101/s.91, Karnataka/Delhi/UP s.70, Gujarat s.96/106) and Special Recovery Officers.",
  },
  {
    question: "Why do Registrar Recovery Certificate and s.84 arbitration petitions get dismissed or delayed?",
    answer:
      "The single most common failure point across UCBs and credit societies is a defective pre-arbitration notice: sending casual branch reminders only to the principal borrower while failing to serve simultaneous statutory demand notices on both sureties (guarantors), omitting the Managing Committee resolution, or capitalizing penal interest contrary to RBI Penal Charges norms. Courts routinely set aside ex-parte Recovery Certificates under Article 226 or Section 34 when notice service to all three obligors (Borrower + Surety 1 + Surety 2) is not proved via Speed Post RPAD and BSA 2023 s.63 records.",
  },
  {
    question: "How does Section 84 arbitration under the Multi-State Co-operative Societies Act, 2002 work?",
    answer:
      "Under Section 84(1)(b) of the MSCS Act, 2002, any claim by a multi-state co-operative bank or society for a debt or demand due from a member, past member, or surety must be referred to an Arbitrator appointed by the Central Registrar of Co-operative Societies (CRCS). Under Section 84(5), the Arbitration and Conciliation Act, 1996 governs the proceedings. Once the arbitral award attains finality, Section 94 allows execution directly as a Civil Court decree, through the District Collector as arrears of land revenue, or through the Registrar by attachment and auction.",
  },
  {
    question: "Can a cooperative society attach the salary of a defaulting member or their two sureties?",
    answer:
      "Yes. Under Section 60 of the Multi-State Co-operative Societies Act, 2002 and parallel State provisions (such as Section 49 of the Maharashtra Co-operative Societies Act and Section 48 of the Tamil Nadu Act), if the member or surety executed a written agreement authorizing employer salary deduction at loan sanction, the employer or Drawing & Disbursing Officer (DDO) is statutorily bound to deduct the requisitioned EMI from salary and remit it to the society. Where no prior deduction agreement exists, salary attachment can be executed post-award/Recovery Certificate under CPC Section 60(1)(i).",
  },
  {
    question: "Can a cooperative bank file a recovery case in the Debt Recovery Tribunal (DRT)?",
    answer:
      "No. Under Greater Bombay Co-operative Bank Ltd. v. United Yarn Tex (P) Ltd. (2007) 6 SCC 236, cooperative banks registered under State Co-operative Acts or the MSCS Act are outside the jurisdiction of DRTs under the RDB Act, 1993. Therefore, cooperative banks use a dual-track strategy: SARFAESI (ss.13–14) for secured non-agricultural mortgages, and MSCS s.84 arbitration or State Registrar Recovery Certificates (plus NI Act s.138 / PSS s.25 and Pre-Litigation Lok Adalat) for unsecured loans and post-auction shortfalls.",
  },
  {
    question: "What limitation period applies to Section 84 arbitration and State Registrar recovery?",
    answer:
      "Under Section 85(1)(a) of the Multi-State Co-operative Societies Act, 2002, the limitation period for a dispute relating to recovery of any sum (including interest) due to a multi-state society from a member or surety is six (6) years from the date on which the member died or ceased to be a member, or as specified for continuing member claims under the Act and applicable Rules—whereas State Acts typically prescribe 3 to 6 years depending on whether the debtor remains an active member. Best institutional practice is to trigger statutory demand notices at 61–90 DPD (SMA-2 / NPA) so every parallel remedy (SARFAESI, s.84, s.101, and NI s.138) remains strictly within limitation.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Multi-State Co-operative Societies Act, 2002 (Sections 59, 60, 84, 85 & 94 — CRCS Arbitration, Salary Deduction & Execution)",
    url: "https://www.indiacode.nic.in/handle/123456789/1914",
  },
  {
    title: "SARFAESI Act, 2002 (Section 2(1)(c)(iva), Sections 13, 14, 26D CERSAI & Section 31 — As Interpreted in Pandurang Ganpati Chaugule)",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Central Registrar of Co-operative Societies (CRCS) Portal — Ministry of Cooperation, Government of India",
    url: "https://crcs.gov.in/",
  },
  {
    title: "Reserve Bank of India (RBI) — Master Circulars & Penal Charges Direction for Urban Co-operative Banks (UCBs)",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of CBS Electronic Statements & Digital Notice Service Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Central Registry of Securitisation Asset Reconstruction and Security Interest of India (CERSAI Portal)",
    url: "https://www.cersai.org.in/",
  },
];

export default function CooperativeBankArbitrationSection84Page() {
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
        name: "Banks & Cooperative Banks Recovery Hub",
        item: `${SITE_URL}/industries/banks-loan-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cooperative Bank & Credit Society Recovery (s.84 & SARFAESI)",
        item: CANONICAL_URL,
      },
    ],
  };

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
    image: [HERO_IMAGE_URL],
    datePublished: "2026-11-19T00:00:00+05:30",
    dateModified: "2026-11-19T00:00:00+05:30",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      worksFor: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
        url: SITE_URL,
      },
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

  const HOW_TO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Urban Cooperative Banks & Credit Societies Recover NPAs via SARFAESI, MSCS s.84 & Registrar Certificates",
    description:
      "End-to-end creditor workflow for cooperative bank CEOs and credit society recovery officers covering forum triage, borrower + two-surety notices, statutory arbitration, salary attachment, and SARFAESI possession.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit Licence & Collateral Eligibility (Pandurang Chaugule Triage)",
        text: "Confirm whether the institution holds an RBI banking licence under BR Act s.22/56 (SARFAESI-eligible for CERSAI-registered non-agricultural mortgages > ₹1 Lakh) or is a non-banking credit society routed to MSCS s.84 or State Registrar Recovery Certificates.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Pass Board Resolution & Certify Non-Compounded CBS Ledger",
        text: "Adopt a formal Managing Committee / Board resolution authorizing recovery action and extract a certified statement of account under Bankers' Books Evidence Act s.2A/4 and BSA 2023 s.63 separating principal, contractual interest, and non-capitalized penal charges.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Dispatch Simultaneous Borrower + Two-Surety Pre-Arbitration Legal Notice",
        text: "Serve a 15-day statutory demand notice (or 60-day SARFAESI s.13(2) notice for secured UCB accounts) simultaneously to the borrower and both sureties via Speed Post RPAD, email, and WhatsApp with BSA s.63 dispatch proofs.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Exercise Share Capital Lien & Employer Salary Deduction Requisition",
        text: "Adjust defaulting member share capital and thrift deposits under MSCS s.59 (or State equivalents) and serve a binding salary-deduction requisition under MSCS s.60 / State s.49 on the borrower's and sureties' employers.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "File MSCS s.84 Arbitration / State Registrar Certificate or SARFAESI s.14",
        text: "Escalate unresolved defaults to the CRCS-appointed Arbitrator (MSCS s.84), State Registrar (e.g., MCS s.101 / KCS-DCS s.70), or DM/CMM under SARFAESI s.14 with parallel NI Act s.138 / PSS s.25 prosecution on dishonoured cheques or e-NACH mandates.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Execute Award via Section 94, Special Recovery Officer (SRO) or Auction",
        text: "Enforce the final s.84 award under Section 94 (civil decree or land-revenue arrears), execute State Recovery Certificates via SRO property attachment and auction, or complete SARFAESI Rule 8/9 e-auction.",
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-01 Banking &amp; Co-op Playbook</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-slate-300">MSCS Act s.84 &bull; State Co-op Acts &bull; SARFAESI</span>
          </div>

          {/* Single Page H1 (Verbatim == ARTICLE_SCHEMA.headline) */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 Words + Parent Hub Link in first 250 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer for Co-operative Bank CEOs &amp; Recovery Officers
            </span>
            <p>
              Under the 5-Judge Supreme Court verdict in <em>Pandurang Ganpati Chaugule</em> (2020), RBI-licensed Urban, District, and Multi-State Co-operative Banks can enforce secured mortgages directly via SARFAESI ss.13–14, while non-banking Credit Societies and unsecured co-op portfolios must enforce via MSCS Act s.84 arbitration or State Registrar Recovery Certificates following a mandatory borrower + two-surety notice. Part of our{" "}
              <Link
                href="/industries/banks-loan-recovery"
                className="text-red-400 font-bold underline hover:text-red-300 transition-colors"
              >
                Scheduled Commercial &amp; Cooperative Banks Recovery Hub
              </Link>
              .
            </p>
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <span className="block text-lg sm:text-2xl font-black text-slate-100 tracking-tight">
                1,400+ UCBs
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 leading-snug block mt-0.5">
                &amp; 1,00,000+ Credit Societies Underserved
              </span>
            </div>
            <div>
              <span className="block text-lg sm:text-2xl font-black text-emerald-400 tracking-tight">
                SARFAESI Live
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 leading-snug block mt-0.5">
                5-Judge SC Confirmed for RBI-Licensed Co-ops
              </span>
            </div>
            <div>
              <span className="block text-lg sm:text-2xl font-black text-amber-400 tracking-tight">
                1 + 2 Obligors
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 leading-snug block mt-0.5">
                Borrower + Two Sureties Pre-Arbitration Rule
              </span>
            </div>
            <div>
              <span className="block text-lg sm:text-2xl font-black text-red-400 tracking-tight">
                &lt; 24 Hours
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 leading-snug block mt-0.5">
                Tri-Channel RPAD + Email + WhatsApp Dispatch
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            { label: "Banks & Co-op Recovery Hub", href: "/industries/banks-loan-recovery" },
            {
              label: "Cooperative Bank & Credit Society Recovery (s.84 & SARFAESI)",
              href: PAGE_PATH,
            },
          ]}
        />

        {/* 2-Column Split: Left Sticky TOC + Main Content Column */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          <CoopBankTableOfContents />

          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1: The Co-op Recovery Gap */}
            <section
              id="heading-cooperative-npa-gap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why 1,400+ Cooperative Banks &amp; 1L+ Credit Societies Stall on NPAs
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  India&apos;s cooperative credit architecture—comprising more than 1,400 RBI-regulated Urban Co-operative Banks (UCBs), 350+ District Central Co-operative Banks (DCCBs), 34 State Co-operative Banks, and over 1,00,000 primary and multi-state credit co-operative societies—finances small traders, salaried employees, transport operators, and regional SMEs that scheduled commercial banks often decline. Yet enterprise fintech collection suites ignore cooperative institutions entirely, leaving CEOs, General Managers, and Recovery Officers trapped between outdated paper registers and procedural rejections.
                </p>
                <p>
                  Three structural bottlenecks routinely lock cooperative capital into Sub-Standard and Doubtful NPA buckets for 24 to 48 months:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Bottleneck 1 &bull; Under-Used SARFAESI
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Dozens of UCBs and DCCBs still file slow Registrar disputes on ₹10 Lakh–₹2 Crore mortgaged properties instead of exercising their 5-Judge Supreme Court SARFAESI right under <em>Pandurang Ganpati Chaugule</em>.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-1">
                      Bottleneck 2 &bull; Defective Surety Notices
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Registrar Recovery Certificates (Maharashtra s.101, Karnataka/Delhi s.70) and MSCS s.84 awards get stayed or remanded because branches serve informal slips only on the borrower, omitting the two mandatory sureties.
                    </p>
                  </div>
                  <div className="bg-slate-100 border border-slate-200 rounded-xl p-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block mb-1">
                      Bottleneck 3 &bull; Zero DRT Access
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under <em>Greater Bombay Co-op. Bank v. United Yarn Tex</em> (2007), cooperative banks cannot access DRTs under the RDB Act, 1993—making defect-free statutory arbitration and SRO execution non-negotiable.
                    </p>
                  </div>
                </div>

                <p>
                  This institutional playbook gives cooperative bank CEOs, legal advisors, and credit society secretaries a strict statutory decision tree—matching each account to its fastest enforceable forum while standardizing borrower + two-surety pre-arbitration notices with court-admissible{" "}
                  <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA s.63)</strong> electronic delivery certificates. For broader commercial bank workflows across all loan buckets, see our{" "}
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Bank Legal Notice Dispatch Portal
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* SECTION 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Forum Decision Tree: SARFAESI vs MSCS s.84 vs State Registrar
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Before issuing a single legal notice, the Recovery Officer must classify the defaulting account across three legal gates: <strong>(1) RBI Banking Licence Status</strong>, <strong>(2) Multi-State vs Single-State Registration</strong>, and <strong>(3) CERSAI-Registered Collateral vs Unsecured Surety Loan</strong>. Choosing the wrong forum triggers jurisdictional dismissal and wastes 12–18 months.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-950 rounded-2xl p-6 border border-slate-800">
                <svg
                  viewBox="0 0 920 430"
                  width={920}
                  height={430}
                  className="w-full h-auto"
                  role="img"
                  aria-label="Cooperative Bank and Credit Society Loan Recovery Forum Decision Tree Flowchart"
                >
                  <defs>
                    <marker
                      id="arrowRed"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                    </marker>
                    <marker
                      id="arrowEmerald"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#10B981" />
                    </marker>
                    <marker
                      id="arrowAmber"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#F59E0B" />
                    </marker>
                  </defs>

                  {/* Root Node */}
                  <rect x="275" y="16" width="370" height="58" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="460" y="39" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">
                    GATE 1 &bull; CO-OPERATIVE LENDER TRIAGE (61–90+ DPD)
                  </text>
                  <text x="460" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="800">
                    RBI Banking Licence (BR Act s.22/56) + Non-Agri Mortgage?
                  </text>

                  {/* Connector Left (YES -> SARFAESI) */}
                  <path d="M 350 74 L 160 132" stroke="#10B981" strokeWidth="2.5" fill="none" markerEnd="url(#arrowEmerald)" />
                  <rect x="195" y="88" width="118" height="22" rx="6" fill="#064E3B" />
                  <text x="254" y="103" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="700">
                    YES (UCB / DCCB)
                  </text>

                  {/* Connector Right (NO -> Arbitration / Registrar) */}
                  <path d="M 570 74 L 700 132" stroke="#F59E0B" strokeWidth="2.5" fill="none" markerEnd="url(#arrowAmber)" />
                  <rect x="595" y="88" width="170" height="22" rx="6" fill="#78350F" />
                  <text x="680" y="103" textAnchor="middle" fill="#FDE68A" fontSize="10" fontWeight="700">
                    NO / UNSECURED / SOCIETY
                  </text>

                  {/* Left Branch: SARFAESI Track */}
                  <rect x="24" y="138" width="275" height="92" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="161" y="160" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="800">
                    TRACK A: SARFAESI ACT 2002
                  </text>
                  <text x="161" y="179" textAnchor="middle" fill="#FFFFFF" fontSize="11">
                    Pandurang Chaugule (5-Judge SC)
                  </text>
                  <text x="161" y="196" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Verify CERSAI s.26D &bull; Debt &gt; ₹1L
                  </text>
                  <text x="161" y="213" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Serve s.13(2) 60-Day Notice -&gt; s.13(4) / s.14
                  </text>

                  {/* Right Branch Gate 2: Multi-State vs State */}
                  <rect x="520" y="138" width="365" height="62" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="702" y="162" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="700">
                    GATE 2 &bull; REGISTRATION STATUTE
                  </text>
                  <text x="702" y="182" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    Multi-State Co-op Act 2002 or State Co-op Act?
                  </text>

                  {/* Gate 2 Left: MSCS s.84 */}
                  <path d="M 610 200 L 490 256" stroke="#DC2626" strokeWidth="2" fill="none" markerEnd="url(#arrowRed)" />
                  <rect x="335" y="262" width="270" height="92" rx="12" fill="#1F2937" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="470" y="284" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="800">
                    TRACK B: MSCS ACT s.84 ARBITRATION
                  </text>
                  <text x="470" y="302" textAnchor="middle" fill="#FFFFFF" fontSize="11">
                    Multi-State Co-op Banks &amp; Societies
                  </text>
                  <text x="470" y="319" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Borrower + 2-Surety Notice -&gt; CRCS Arbitrator
                  </text>
                  <text x="470" y="336" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Execute Award via s.94 (Decree / Collector)
                  </text>

                  {/* Gate 2 Right: State Registrar */}
                  <path d="M 760 200 L 760 256" stroke="#DC2626" strokeWidth="2" fill="none" markerEnd="url(#arrowRed)" />
                  <rect x="625" y="262" width="272" height="92" rx="12" fill="#1F2937" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="761" y="284" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="800">
                    TRACK C: STATE REGISTRAR CERTIFICATE
                  </text>
                  <text x="761" y="302" textAnchor="middle" fill="#FFFFFF" fontSize="11">
                    State Credit Societies &amp; Unsecured UCB Loans
                  </text>
                  <text x="761" y="319" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    MCS s.101 / KCS-DCS-UPCS s.70 / Guj s.96
                  </text>
                  <text x="761" y="336" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Special Recovery Officer (SRO) Attachment
                  </text>

                  {/* Bottom Parallel Boosters Bar */}
                  <path d="M 161 230 L 161 378" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M 470 354 L 470 378" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M 761 354 L 761 378" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 4" />

                  <rect x="24" y="378" width="873" height="40" rx="10" fill="#7F1D1D" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="460" y="403" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800">
                    PARALLEL ACCELERATORS (ALL TRACKS): Share Lien (s.59) + Employer Salary Deduction (s.60/s.49) + NI s.138 / PSS s.25 + Lok Adalat
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Tree Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    Track A &bull; RBI-Licensed UCB / DCCB + Mortgage
                  </span>
                  <p className="text-xs font-bold text-slate-900 mb-1">
                    SARFAESI Act ss.13(2), 13(4) &amp; 14 (Pandurang Chaugule SC)
                  </p>
                  <p className="text-xs text-slate-700">
                    Verify CERSAI registration (s.26D) and overdue &gt; ₹1 Lakh. Issue 60-day s.13(2) notice and enforce physical possession via DM/CMM Advocate Commissioner.
                  </p>
                </div>
                <div className="bg-slate-900 text-white border border-slate-800 rounded-xl p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                    Track B &bull; Multi-State Co-op Bank / Society
                  </span>
                  <p className="text-xs font-bold text-white mb-1">
                    MSCS Act 2002 Section 84 Statutory Arbitration
                  </p>
                  <p className="text-xs text-slate-300">
                    Serve borrower + two-surety pre-arbitration notice, refer claim to CRCS-appointed Arbitrator, and execute the award under Section 94 as a decree or land-revenue arrears.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                    Track C &bull; State Credit Society / Unsecured UCB
                  </span>
                  <p className="text-xs font-bold text-slate-900 mb-1">
                    State Registrar Recovery Certificate (MCS s.101 / KCS-DCS s.70)
                  </p>
                  <p className="text-xs text-slate-700">
                    Pass Board resolution, serve tri-party statutory demand notice, secure summary certificate, and execute through the Special Recovery Officer (SRO).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: Pandurang Ganpati Chaugule & SARFAESI Eligibility */}
            <section
              id="heading-pandurang-sarfaesi"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Pandurang Ganpati Chaugule (5-Judge SC) &amp; SARFAESI Eligibility
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  For nearly a decade after the 2003 Central Government notification extending SARFAESI to cooperative banks, defaulting borrowers stalled recoveries by challenging Parliament&apos;s legislative competence before High Courts—arguing that cooperative societies fell strictly under Entry 32 of the State List. On <strong>5 May 2020</strong>, a 5-Judge Constitution Bench of the Supreme Court in <strong><em>Pandurang Ganpati Chaugule v. Vishwasrao Patil Murgud Sahakari Bank Ltd.</em>, (2020) 9 SCC 215</strong> closed that debate permanently.
                </p>
                <p>
                  The Bench ruled that while incorporation and governance of a cooperative society fall under State List Entry 32, the <strong>activity of &ldquo;banking&rdquo;</strong> carried on by Urban Cooperative Banks, District Central Cooperative Banks, State Cooperative Banks, and Multi-State Cooperative Banks under Section 5(c) read with Section 56 of the Banking Regulation Act, 1949 falls squarely within <strong>Union List Entry 45</strong>. Therefore, all RBI-licensed cooperative banks are fully authorized &ldquo;secured creditors&rdquo; under SARFAESI Section 2(1)(c)(iva).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 block mb-2">
                      Eligible for SARFAESI ss.13–14
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                      <li>RBI-licensed Primary (Urban) Co-operative Banks (UCBs)</li>
                      <li>District Central Co-operative Banks (DCCBs) &amp; State Co-op Banks</li>
                      <li>Multi-State Co-operative Banks holding BR Act s.22/56 licence</li>
                      <li>Account classified as NPA with overdue exceeding ₹1,00,000</li>
                      <li>Non-agricultural mortgaged asset registered on CERSAI (s.26D)</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <span className="text-xs font-black uppercase tracking-wider text-[#DC2626] block mb-2">
                      Excluded From SARFAESI (Use s.84 / State Registrar)
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                      <li>Non-banking Primary Agricultural Credit Societies (PACS)</li>
                      <li>Urban / Employee Credit Co-operative Societies (No RBI banking licence)</li>
                      <li>Multi-State Credit Co-operative Societies (must invoke MSCS s.84)</li>
                      <li>Agricultural land security interests barred under SARFAESI s.31(i)</li>
                      <li>Unsecured surety loans or loans where remaining due is &lt;20% of principal + interest (s.31(j))</li>
                    </ul>
                  </div>
                </div>

                <p>
                  Once a UCB confirms SARFAESI eligibility, its Authorized Officer must adhere strictly to Security Interest (Enforcement) Rules, 2002—specifically itemized 60-day demand schedules under Section 13(2) and 15-day reasoned replies under Section 13(3A). Review our dedicated practitioner manuals on{" "}
                  <Link
                    href="/law/sarfaesi-section-13-2-demand-notice-bank-guide"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    SARFAESI Section 13(2) &amp; 13(3A) Bank Compliance
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/sarfaesi-section-14-dm-cmm-physical-possession-workflow"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    SARFAESI Section 14 DM/CMM Physical Possession
                  </Link>{" "}
                  before initiating enforcement.
                </p>
              </div>
            </section>

            {/* SECTION 4: Dark-Header Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Matrix: MSCS s.84, State Co-op Acts &amp; SARFAESI
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Compare statutory remedies across institution types, pecuniary ceilings, pre-filing notice mandates, and execution speed. Because cooperative lenders are barred from DRT under <em>United Yarn Tex</em>, combining the primary statutory rail with parallel criminal/salary remedies yields the highest cash conversion.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[740px]">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3.5 font-bold">Statutory Rail</th>
                      <th className="p-3.5 font-bold">Eligible Institutions</th>
                      <th className="p-3.5 font-bold">Mandatory Pre-Filing Notice</th>
                      <th className="p-3.5 font-bold">Execution Mechanism</th>
                      <th className="p-3.5 font-bold">Typical Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        SARFAESI Act ss.13–14
                      </td>
                      <td className="p-3.5 text-slate-700">
                        RBI-licensed UCBs, DCCBs, State &amp; Multi-State Co-op Banks (Secured &gt; ₹1L)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        60-day s.13(2) notice to Borrower + Mortgagor + Guarantors + CERSAI s.26D proof
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Non-judicial s.13(4) / DM s.14 possession &amp; Rule 8/9 e-Auction
                      </td>
                      <td className="p-3.5 font-mono text-xs text-slate-800">4–8 Months</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        MSCS Act 2002 s.84 Arbitration
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Multi-State Co-op Banks &amp; Multi-State Credit Societies (Unsecured / Shortfalls)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        15-day statutory demand notice to Borrower + Both Sureties (RPAD + Digital)
                      </td>
                      <td className="p-3.5 text-slate-800 font-semibold">
                        s.94 Execution as Civil Decree or via Collector as Land Revenue Arrears
                      </td>
                      <td className="p-3.5 font-mono text-xs text-slate-800">6–12 Months</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        State Registrar Certificate (MCS s.101 / KCS-DCS-UPCS s.70 / Guj s.96)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        State UCBs, DCCBs, Urban &amp; Agricultural Credit Co-op Societies
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Itemized 15-day notice to Borrower + 2 Sureties + Board Resolution (e.g., Rules 86A–86F)
                      </td>
                      <td className="p-3.5 text-slate-800 font-semibold">
                        Special Recovery Officer (SRO) property attachment, mutation &amp; auction
                      </td>
                      <td className="p-3.5 font-mono text-xs text-slate-800">5–10 Months</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Salary Deduction &amp; Share Lien (MSCS ss.59–60 / MCS s.49)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Salaried Employee / PSU / Teachers&apos; Credit Societies &amp; Co-op Banks
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Statutory requisition notice to Employer / DDO enclosing signed s.60/s.49 undertaking
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Direct monthly payroll deduction + instant share/thrift deposit set-off
                      </td>
                      <td className="p-3.5 font-mono text-xs text-slate-800">30–45 Days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act s.138 / PSS s.25 &amp; Pre-Litigation Lok Adalat
                      </td>
                      <td className="p-3.5 text-slate-700">
                        All Cooperative Banks &amp; Credit Societies (Parallel Pressure Track)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Strict 30-day demand notice post cheque/e-NACH bounce; 15-day cure window
                      </td>
                      <td className="p-3.5 text-[#DC2626] font-semibold">
                        Criminal summons + s.143A 20% interim compensation or s.21 Lok Adalat decree
                      </td>
                      <td className="p-3.5 font-mono text-xs text-slate-800">30–90 Days (OTS)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Interactive 4-Scenario Playbook Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Cooperative Bank &amp; Credit Society Default Playbooks
                </h2>
              </div>
              <CoopBankScenarioTabs />
            </section>

            {/* SECTION 6: Mandatory Borrower + Two-Surety Pre-Arbitration Notice Protocol */}
            <section
              id="heading-two-surety-notice"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Mandatory Borrower + Two-Surety Pre-Arbitration Notice Protocol
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Cooperative credit relies structurally on peer accountability: almost every Urban Co-operative Bank personal/business loan and Credit Co-operative Society loan is backed by <strong>two member sureties (guarantors)</strong> whose liability is co-extensive with the principal borrower under Section 128 of the Indian Contract Act, 1872. Yet over 60% of branch-level defaults stall before the Registrar or Arbitrator because the bank sends an informal branch reminder solely to the borrower.
                </p>
                <p>
                  When a cooperative society files an MSCS Section 84 arbitration claim or a State Section 101 / Section 70 Recovery Certificate petition without proving prior written demand on <strong>all three obligors</strong>, sureties routinely challenge the award before the Co-operative Appellate Tribunal, District Court (under Section 34 of the Arbitration Act), or High Court citing denial of natural justice—causing 12–24 months of procedural remand.
                </p>

                <div className="bg-slate-900 text-white rounded-xl p-5 space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-red-400 block">
                    The 6 Mandatory Elements of a Bulletproof Co-op Pre-Arbitration Notice
                  </span>
                  <ol className="space-y-2.5 text-xs sm:text-sm text-slate-200 list-decimal pl-5">
                    <li>
                      <strong className="text-white">Simultaneous Tri-Party Service:</strong> Address and dispatch identical statutory demand notices simultaneously to the Principal Borrower, Surety No. 1, and Surety No. 2 at both their residential KYC addresses and official employer/workplace addresses.
                    </li>
                    <li>
                      <strong className="text-white">Explicit Loan &amp; Membership Identifiers:</strong> Cite the Member Folio Number, Loan Account Number, Loan Sanction Date, Deed of Guarantee / Surety Bond date, and Managing Committee sanction resolution number.
                    </li>
                    <li>
                      <strong className="text-white">RBI-Compliant Non-Compounded Ledger Split:</strong> Break out Principal Overdue, Contractual Interest (with agreed rate), and Non-Capitalized Penal Charges separately—complying with the RBI Penal Charges Master Direction (effective April 2024 for UCBs/DCCBs) so borrowers cannot attack interest capitalization.
                    </li>
                    <li>
                      <strong className="text-white">Invocation of Co-Extensive Liability &amp; Set-Off Warning:</strong> Expressly invoke Contract Act s.128, declare intent to adjust member share capital/thrift deposits (MSCS s.59 / State equivalent), and warn of employer salary-deduction requisition (MSCS s.60 / State s.49).
                    </li>
                    <li>
                      <strong className="text-white">Clear 15-Day Cure &amp; Forum Election Clause:</strong> Specify that non-payment within 15 days triggers mandatory statutory arbitration under MSCS s.84 / State Registrar Recovery Certificate filing (or 60 days if drafted as a SARFAESI s.13(2) demand).
                    </li>
                    <li>
                      <strong className="text-white">Tri-Channel Dispatch + BSA 2023 s.63 Proof:</strong> Dispatch via India Post Speed Post RPAD (retaining signed AD cards / India Post tracking PDFs) simultaneously with verified Email and WATI WhatsApp logs certified under BSA s.63.
                    </li>
                  </ol>
                </div>

                <p className="text-xs sm:text-sm text-slate-600">
                  Operational impact: In institutional cooperative portfolios, serving a formal advocate-signed notice simultaneously on both sureties creates immediate social and workplace pressure—frequently settling sub-₹5 Lakh unsecured accounts within 14 days without ever paying Registrar filing costs. For standardized recall clauses, see our{" "}
                  <Link
                    href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Bank Loan Recall &amp; Guarantee Invocation Notice Template
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* SECTION 7: Salary Attachment, Share Lien & Recovery Certificate Execution */}
            <section
              id="heading-salary-certificate"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Salary Attachment, Share Lien &amp; Recovery Certificate Execution
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Securing an arbitration award or Recovery Certificate is only half the recovery cycle; institutional liquidity returns only when execution converts paper orders into cash. Cooperative statutes provide three powerful execution mechanisms that commercial civil litigants do not enjoy:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-xs font-black uppercase tracking-wider text-[#DC2626] block mb-1.5">
                      1. Statutory Share &amp; Deposit Set-Off
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under <strong>MSCS Act s.59</strong> (and equivalent State clauses), a society holds a statutory first charge and right of set-off over a defaulting member&apos;s paid-up share capital, compulsory thrift deposits, and dividends. Recover 10%–25% of principal immediately by Board adjustment resolution without waiting for a court order.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 block mb-1.5">
                      2. Direct Employer Salary Deduction
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under <strong>MSCS Act s.60</strong>, <strong>Maharashtra s.49</strong>, and <strong>Tamil Nadu s.48</strong>, where the borrower or surety signed an irrevocable payroll-deduction agreement, the society serves a statutory requisition on the employer / DDO. Non-compliant employers become personally liable to the society for the unremitted instalments.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-700 block mb-1.5">
                      3. SRO &amp; Collector Arrears Auction
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under <strong>MSCS s.94</strong> and State SRO frameworks (such as <strong>MCS s.156</strong>), an award or Recovery Certificate is executed like arrears of land revenue: the Special Recovery Officer enters an encumbrance on revenue records (7/12 extract / property card), attaches vehicles/gold/bank accounts, and auctions immovable assets.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-amber-950">
                  <strong>CPC Section 60(1)(i) Statutory Cap Reminder:</strong> When executing a post-award salary attachment against a salaried surety or borrower without a voluntary s.60/s.49 deduction agreement, civil execution respects the statutory exemption threshold under Section 60(1)(i) of the Code of Civil Procedure (first ₹1,000 plus two-thirds of the remainder exempt, capped at 24 months continuously). Always pair salary attachment with parallel{" "}
                  <Link
                    href="/law/lok-adalat-pre-litigation-money-recovery"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Pre-Litigation Lok Adalat settlement drives
                  </Link>{" "}
                  for lump-sum closure.
                </div>
              </div>
            </section>

            {/* SECTION 8: Worked Financial & Recovery Calculation Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Ledger: ₹18L UCB Mortgage vs ₹3.6L Surety Loan
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                To illustrate the institutional balance-sheet impact of correct forum selection and non-compounded RBI penal-charge ledgers, compare two representative cooperative NPA files processed under this SOP:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Case A: UCB Secured Mortgage */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                      Case Study A &bull; Urban Co-op Bank (RBI Licensed)
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
                      ₹18,00,000 Secured Commercial Shop Mortgage NPA
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm font-mono">
                    <div className="flex justify-between text-slate-300">
                      <span>Principal Outstanding (91 DPD NPA)</span>
                      <span className="text-white font-bold">&#8377;18,00,000</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Contractual Interest (12.5% p.a. &times; 6m)</span>
                      <span className="text-white font-bold">&#8377;1,12,500</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Non-Capitalized Penal Charges (2% p.a.)</span>
                      <span className="text-amber-400 font-bold">&#8377;18,000</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-700 pt-2 text-emerald-400 font-bold">
                      <span>Total s.13(2) Certified Demand</span>
                      <span>&#8377;19,30,500</span>
                    </div>
                  </div>

                  <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-3.5 text-xs text-slate-200 leading-relaxed">
                    <strong className="text-emerald-400 block mb-1">Forum Economics (SARFAESI vs Registrar):</strong>
                    Invoking <strong>SARFAESI ss.13(2)–14</strong> (CERSAI-verified shop worth ₹28L) resolves via borrower OTS or auction in <strong>~5.5 months</strong> with zero ad-valorem court fee, saving <strong>~₹4.15 Lakh</strong> in carrying interest &amp; provisioning erosion compared to a 24-month Co-operative Court trial.
                  </div>
                </div>

                {/* Case B: Credit Society Unsecured Two-Surety Loan */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                      Case Study B &bull; Multi-State / Employee Credit Society
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
                      ₹3,60,000 Unsecured Two-Surety Salaried Loan
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm font-mono">
                    <div className="flex justify-between text-slate-300">
                      <span>Principal + Accrued Interest (120 DPD)</span>
                      <span className="text-white font-bold">&#8377;3,60,000</span>
                    </div>
                    <div className="flex justify-between text-emerald-400">
                      <span>Less: Share Capital &amp; Thrift Lien (s.59)</span>
                      <span className="font-bold">- &#8377;54,000</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Net Claim in Borrower + 2-Surety Notice</span>
                      <span className="text-white font-bold">&#8377;3,06,000</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-700 pt-2 text-amber-400 font-bold">
                      <span>DDO Salary Requisition (s.60 / s.49)</span>
                      <span>&#8377;18,000 / month</span>
                    </div>
                  </div>

                  <div className="bg-red-950/40 border border-red-800/60 rounded-xl p-3.5 text-xs text-slate-200 leading-relaxed">
                    <strong className="text-red-300 block mb-1">Tri-Party Notice Multiplier:</strong>
                    Serving formal advocate notices simultaneously on <strong>Both Co-Employee Sureties</strong> + DDO requisition triggers immediate surety intervention—converting 100% of the net ₹3.06L balance via payroll deduction or lump-sum closure without spending ₹25,000+ in contested arbitration hearings.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: Registrar Arbitration Dossier & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Registrar Arbitration Dossier &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Every MSCS s.84 arbitration petition, State s.101/s.70 Recovery Certificate application, or SARFAESI s.14 affidavit must carry an audit-ready evidentiary bundle. Verify all 8 items before filing:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Managing Committee / Board Resolution",
                    desc: "Certified extract authorizing the CEO, Secretary, or Authorized Officer to issue statutory notices, invoke SARFAESI, or institute s.84 / Registrar recovery proceedings.",
                  },
                  {
                    title: "2. Loan Application, Bond & Two-Surety Deeds",
                    desc: "Original stamped promissory note, loan agreement, membership admission register extract, and signed joint-and-several Guarantee/Surety Bonds.",
                  },
                  {
                    title: "3. Certified CBS Ledger (Bankers' Books s.2A/4)",
                    desc: "Complete statement of account from disbursement to NPA date certified under Bankers' Books Evidence Act s.2A/4 with separate columns for principal, contractual interest, and non-capitalized penal charges.",
                  },
                  {
                    title: "4. BSA 2023 Section 63 Electronic Certificate",
                    desc: "Mandatory Part A & Part B digital evidence certificate authenticating CBS server printouts, Email delivery logs, WATI WhatsApp read receipts, and India Post digital tracking PDFs.",
                  },
                  {
                    title: "5. Tri-Party Pre-Arbitration Notice & RPAD Proof",
                    desc: "Copies of advocate notices dispatched simultaneously to Borrower, Surety 1, and Surety 2 with original postal receipts, signed AD cards, or 'Refused / Left' endorsements.",
                  },
                  {
                    title: "6. CERSAI Form I & Registered Mortgage (UCBs)",
                    desc: "Mandatory under SARFAESI s.26D for any cooperative bank enforcing immovable security; attach title search report, equitable mortgage memorandum, and CERSAI Asset ID.",
                  },
                  {
                    title: "7. Signed Employer Salary Deduction Undertaking",
                    desc: "Irrevocable Form under MSCS s.60 / Maharashtra s.49 / State Rules countersigned by the member's employer / DDO for instant payroll recovery.",
                  },
                  {
                    title: "8. Cheque / e-NACH Return Memos (Parallel Track)",
                    desc: "Bank return memos with exact bounce reason codes ('Funds Insufficient' / 'Payment Stopped') and UMRN mandates to preserve parallel NI s.138 and PSS s.25 prosecution.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-md bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      &check;
                    </span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 10: Dual-Track B2B Conversion CTA */}
            <section id="heading-cta-desk" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Deploy a ₹999 Test Notice or Bulk Cooperative Society CSV Drive
                </h2>
              </div>
              <CoopBankCTA variant="primary" />
            </section>

            {/* SECTION 11: Mandatory IND-01 Hub, Calculators, Templates & Sibling Network */}
            <section
              id="heading-internal-network"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  IND-01 Banking Recovery Hub, Calculators &amp; Notice Templates
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Explore companion statutory playbooks, interactive calculators, and advocate-vetted notice formats across LegalRecovery&apos;s institutional banking cluster:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {[
                  {
                    tag: "Parent Hub (IH1)",
                    title: "Banks & Cooperative Banks Recovery Hub",
                    href: "/industries/banks-loan-recovery",
                    desc: "Master multi-track NPA recovery matrix across UCBs, SFBs, and Scheduled Banks.",
                  },
                  {
                    tag: "Interactive Tool (T1)",
                    title: "SARFAESI & DRT Forum Eligibility Calculator",
                    href: "/tools/sarfaesi-drt-bank-recovery-forum-calculator",
                    desc: "Check CERSAI s.26D, ₹1L SARFAESI floor, and optimal institutional recovery forum.",
                  },
                  {
                    tag: "Notice Template (P1)",
                    title: "Bank Loan Recall & Guarantee Invocation Notice",
                    href: "/templates/bank-loan-recall-cum-guarantee-invocation-notice",
                    desc: "Customize borrower + surety demand notices with RBI non-compounded penal schedules.",
                  },
                  {
                    tag: "SARFAESI s.13(2)",
                    title: "SARFAESI Section 13(2) & 13(3A) Compliance Guide",
                    href: "/law/sarfaesi-section-13-2-demand-notice-bank-guide",
                    desc: "60-day demand notice schedules, Rule 3 affixture, and 15-day reasoned replies.",
                  },
                  {
                    tag: "SARFAESI s.14",
                    title: "SARFAESI Section 14 DM/CMM Physical Possession",
                    href: "/sarfaesi-section-14-dm-cmm-physical-possession-workflow",
                    desc: "9-point statutory affidavit, Advocate Commissioner execution & Article 226 writs.",
                  },
                  {
                    tag: "Sub-₹20L Matrix",
                    title: "Bank Recovery Below ₹20 Lakh DRT Threshold",
                    href: "/bank-loan-recovery-below-20-lakhs-drt-threshold-options",
                    desc: "Compare Order 37, PSS s.25, Fast-Track Arbitration, and Lok Adalat recovery routes.",
                  },
                  {
                    tag: "Bulk Lok Adalat",
                    title: "Bank Pre-Litigation Lok Adalat Bulk NPA Playbook",
                    href: "/bank-pre-litigation-lok-adalat-bulk-npa-settlement-guide",
                    desc: "Convert quarterly National Lok Adalats into zero-court-fee s.21 binding decrees.",
                  },
                  {
                    tag: "Bulk CSV Desk",
                    title: "Bulk Legal Recovery Solutions (10–10,000+ Cases)",
                    href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                    desc: "Institutional spreadsheet upload for multi-branch borrower & surety notices.",
                  },
                  {
                    tag: "e-DRT Reference",
                    title: "e-DRT Section 19 Original Application Playbook",
                    href: "/e-drt-original-application-filing-guide-for-banks",
                    desc: "CBS Bankers' Books s.2A certification & BSA 2023 s.63 evidentiary standards.",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group block bg-slate-50 hover:bg-red-50/50 border border-slate-200 hover:border-red-300 rounded-xl p-4 transition-all"
                  >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {link.tag}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1">
                      {link.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{link.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* SECTION 12: Frequently Asked Questions */}
            <section
              id="heading-faq"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FAQs: Cooperative Bank SARFAESI, MSCS s.84 &amp; Surety Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900 hover:text-[#DC2626] transition-colors">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-open:bg-[#DC2626] group-open:text-white group-open:border-[#DC2626] shrink-0 text-sm font-bold transition-colors">
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

            {/* SECTION 13: Verified Precedents & Statutory Authorities */}
            <section
              id="heading-primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  13
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Verified Statutes, 5-Judge SC Precedents &amp; Official Portals
                </h2>
              </div>

              {/* Precedent Cards with Crimson Left Accent Bar */}
              <div className="space-y-4 mb-6">
                {STATUTORY_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="pl-3 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-black text-slate-900">
                          {item.parties}
                        </h3>
                        <span className="text-[11px] font-mono font-semibold text-[#DC2626] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                          {item.citation}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-500">
                        {item.title} &bull; {item.date}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {item.holding}
                      </p>
                      <p className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 font-medium">
                        <strong>Creditor Takeaway:</strong> {item.takeaway}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Official External Portals (Strictly nofollow) */}
              <div className="bg-slate-900 text-white rounded-xl p-5 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-red-400 block">
                  Primary Bare Acts &amp; Regulatory Portals
                </span>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">&rarr;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-200 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Institutional Legal Attribution Footer */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
                <div>
                  <strong className="text-slate-800">Authored &amp; Vetted By:</strong> Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions (LegalRecovery.in Institutional Banking Desk)
                </div>
                <div className="font-mono text-[11px] text-slate-400">
                  Last Verified: 19 November 2026 &bull; B2B-011
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Outside Main */}
      <RelatedRecoveryGuides />
    </div>
  );
}
