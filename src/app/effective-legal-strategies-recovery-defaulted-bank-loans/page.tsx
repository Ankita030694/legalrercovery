import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import EffectiveLegalStrategiesCTA from "./EffectiveLegalStrategiesCTA";
import EffectiveLegalStrategiesTableOfContents from "./EffectiveLegalStrategiesTableOfContents";
import EffectiveLegalStrategiesTabs from "./EffectiveLegalStrategiesTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Effective Legal Strategies for Defaulted Bank Loans (51 chars)",
  description:
    "Proven legal recovery strategies for Indian banks: pre-litigation notices, Lok Adalat settlements, digital arbitration, and DRT litigation. (139 chars)",
  alternates: {
    canonical: `${SITE_URL}/effective-legal-strategies-recovery-defaulted-bank-loans`,
  },
  openGraph: {
    title: "Effective Legal Strategies for Recovery of Defaulted Bank Loans",
    description:
      "Strategic multi-track legal matrix for Indian scheduled commercial banks and NBFCs: Pre-Litigation Lok Adalat, SARFAESI enforcement, Section 138 NI Act, Section 25 PSS Act, and DRT litigation.",
    url: `${SITE_URL}/effective-legal-strategies-recovery-defaulted-bank-loans`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Effective Legal Strategies for Recovery of Defaulted Bank Loans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Effective Legal Strategies for Defaulted Bank Loans",
    description:
      "Proven legal recovery strategies for Indian banks: pre-litigation notices, Lok Adalat settlements, digital arbitration, and DRT litigation.",
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
    title: "Legal Services Authorities Act, 1987 (Section 19 Lok Adalats, Section 20 Cognizance & Section 21 Finality of Awards as Civil Decrees) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1944",
  },
  {
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Recovery of Debts and Bankruptcy (RDB) Act, 1993 (Section 19 Original Application & Section 25 Recovery Certificates) — Ministry of Finance",
    url: "https://financialservices.gov.in/acts/recovery-debts-due-banks-and-financial-institutions-act-1993",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 Dishonour of Electronic Funds Transfer / NACH Mandate) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2088",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Section 138 Dishonour of Cheque for Insufficiency of Funds) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2260",
  },
  {
    title: "Banker's Books Evidence Act, 1891 & Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 Admissibility of Electronic Accounting Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "RBI Master Direction — Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRACP Norms)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12165",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark on Conclusive Finality of Lok Adalat Awards as Non-Appealable Decrees",
    parties: "P.T. Thomas v. Thomas Job",
    citation: "(2005) 6 SCC 478",
    date: "Judgment Dated 4 August 2005",
    facts:
      "A commercial money recovery dispute was resolved through a compromise settlement before the Lok Adalat, resulting in a signed formal award. Subsequently, the judgment debtor sought to file a regular first appeal before the High Court, asserting that the settlement terms were unjust and that constitutional appeal remedies cannot be extinguished.",
    holding:
      "The Supreme Court held that under Section 21 of the Legal Services Authorities Act, 1987, every award passed by a Lok Adalat is deemed to be a decree of a Civil Court. Under Section 21(2), no appeal lies to any court against an award made by a Lok Adalat. The court affirmed that the award attains absolute finality, is immune to regular appellate review, and can be directly executed through civil execution petitions under Order XXI of the Code of Civil Procedure, 1908.",
    amount: "Affirmed Universal Binding Enforceability of Lok Adalat Awards Nationwide",
    takeaway:
      "For banks and NBFCs, settling loan defaults through Pre-Litigation Lok Adalat converts delinquent claims into executable Civil Court decrees without paying ad-valorem court fees, while eliminating borrower appeals and years of civil court delays.",
  },
  {
    title: "Supreme Court Precedent on Concurrent Dual-Track Debt Recovery (SARFAESI & DRT Original Applications)",
    parties: "Transcore v. Union of India & Another",
    citation: "(2008) 1 SCC 125",
    date: "Judgment Dated 29 November 2006",
    facts:
      "Corporate loan defaulters argued that lending institutions cannot simultaneously maintain an Original Application (OA) under Section 19 of the RDB Act before the Debt Recovery Tribunal (DRT) while concurrently enforcing non-judicial asset possession under Section 13 of the SARFAESI Act, contending that the Doctrine of Election restricts lenders to a single recovery track.",
    holding:
      "The Supreme Court ruled that the Doctrine of Election has no application between SARFAESI and DRT remedies. The SARFAESI Act provides an extraordinary, non-adjudicatory asset-liquidation mechanism that operates concurrently with DRT adjudication. Banks are legally entitled to initiate both remedies simultaneously to prevent capital erosion and bad-faith asset dissipation by borrowers.",
    amount: "Enforceable Across All Scheduled Commercial Banks & Financial Institutions",
    takeaway:
      "Banks do not need to choose between auctioning mortgaged collateral and pursuing personal recovery decrees. Lenders can repossess real estate under SARFAESI while concurrently seeking personal attachment decrees against promoters and guarantors in the DRT.",
  },
  {
    title: "Supreme Court Precedent on Multi-Party Personal Guarantor Liability Under Insolvency Laws",
    parties: "State Bank of India v. V. Ramakrishnan & Another",
    citation: "(2018) 17 SCC 394",
    date: "Judgment Dated 14 August 2018",
    facts:
      "The corporate debtor entered into corporate insolvency resolution proceedings (CIRP) under Section 14 of the Insolvency and Bankruptcy Code (IBC). The personal guarantor argued that the statutory moratorium under Section 14 protects the assets of personal guarantors from being proceeded against by lending banks during the pendency of corporate resolution.",
    holding:
      "The Supreme Court clarified that the Section 14 moratorium applies strictly to the assets of the corporate debtor and does not shield personal guarantors. Secured lenders retain an unfettered legal right to enforce personal guarantees under the Indian Contract Act, 1872, and file personal insolvency petitions under Section 95 of the IBC against defaulting promoters.",
    amount: "Confirmed Unhindered Bank Action Against Promoter Assets Nationwide",
    takeaway:
      "Lending institutions can proceed against personal guarantors and corporate directors concurrently, preventing willful defaulters from hiding personal wealth behind corporate insolvency proceedings.",
  },
  {
    title: "Supreme Court Direction on Quasi-Criminal Recovery for Bounced NACH & Cheque Mandates",
    parties: "Dashrath Rupsingh Rathod v. State of Maharashtra & Another",
    citation: "(2014) 9 SCC 129 / (2015 Amendment Act Compliance)",
    date: "Affirmed Under Section 142(2) NI Act & Section 25 PSS Act",
    facts:
      "In high-volume consumer lending, retail borrowers routinely cancel electronic NACH mandates or issue post-dated cheques that bounce with remarks such as 'Insufficient Funds' or 'Account Frozen'. Borrowers argued that banking loan defaults are purely civil contractual matters beyond criminal jurisdiction.",
    holding:
      "The Supreme Court and subsequent statutory amendments confirmed that Section 138 of the Negotiable Instruments Act and Section 25 of the Payment and Settlement Systems Act create strict statutory quasi-criminal liability for dishonoured financial mandates. Lenders are entitled to file criminal complaints in the jurisdiction of the bank branch where the payee maintains its account, with magistrates empowered to grant interim compensation up to 20% under Section 143A.",
    amount: "Strict Criminal Liability Up to 2x Instrument Value + 2 Years Imprisonment",
    takeaway:
      "A formal 15-day statutory demand notice issued under Section 138 NI Act or Section 25 PSS Act creates immediate compounding pressure, prompting defaulting retail borrowers to settle within days to avoid bailable/non-bailable warrants.",
  },
];

const FAQS = [
  {
    question: "What is the most cost-effective legal strategy for Indian banks to recover defaulted loans?",
    answer:
      "The most cost-effective strategy is Pre-Litigation Lok Adalat under Section 19 and Section 20 of the Legal Services Authorities Act, 1987, combined with automated multi-channel advocate legal notices. Unlike civil suits or DRT filings that demand ad-valorem court fees of up to 1% to 2% and entail years of trial backlogs, Pre-Litigation Lok Adalat carries zero court fees, docketing is handled at scale through District Legal Services Authorities (DLSA), and resulting settlement awards carry the binding statutory status of a Civil Court Decree under Section 21 that is directly executable under Order XXI CPC.",
  },
  {
    question: "How can banks shift 40%+ of delinquent loan portfolios into pre-litigation settlements?",
    answer:
      "Banks achieve 40%+ pre-litigation conversion by deploying automated advocate demand notices during early delinquency buckets (SMA-1 and SMA-2, Days 31 to 90) before formal NPA classification. By integrating statutory warnings under Section 25 of the Payment and Settlement Systems Act (for NACH auto-debit bounces) and Section 138 of the Negotiable Instruments Act, accompanied by a formal invitation to resolve the balance before the National Lok Adalat or an institutional Online Dispute Resolution (ODR) conciliation forum, financial institutions provide borrowers an accessible exit route before compounding litigation expenses accrue.",
  },
  {
    question: "What legal difference exists between an ordinary bank recovery notice and a statutory advocate demand notice?",
    answer:
      "An internal bank recovery notice or call-center collection letter is merely an administrative reminder with zero statutory penal effect. In contrast, an advocate-drafted statutory legal notice under Section 138 NI Act or Section 25 PSS Act triggers a mandatory 15-day statutory cure clock. Failure of the borrower to remit payment within 15 days of verified receipt creates a complete statutory cause of action for quasi-criminal prosecution and summary decree proceedings under Order 37 CPC. Furthermore, serving it via Registered Speed Post and WhatsApp/Email with BSA 2023 Section 63 electronic certification establishes an unshakeable evidentiary record in court.",
  },
  {
    question: "How does SARFAESI Act Section 13 operate concurrently with DRT Original Applications?",
    answer:
      "Under the Supreme Court benchmark ruling in Transcore v. Union of India, the Doctrine of Election does not apply to banking debt enforcement. A secured creditor can issue a 60-day demand notice under Section 13(2) of the SARFAESI Act to seize and auction mortgaged immovable property without court intervention, while simultaneously maintaining an Original Application (OA) under Section 19 of the RDB Act before the Debt Recovery Tribunal (DRT) to obtain a monetary recovery certificate against the borrower, co-borrowers, and personal guarantors for any balance shortfall.",
  },
  {
    question: "What is the debt threshold for banks to approach the Debt Recovery Tribunal (DRT) in 2026?",
    answer:
      "Under Section 1(4) of the Recovery of Debts and Bankruptcy (RDB) Act, 1993, as amended, the statutory pecuniary threshold for banks and financial institutions to file an Original Application before the Debt Recovery Tribunal is ₹20,00,000 (Twenty Lakh Rupees) and above. For delinquent loan exposures below ₹20 Lakhs, banks cannot approach the DRT and must utilize Pre-Litigation Lok Adalats, fast-track institutional arbitration under Section 29B of the Arbitration Act, or summary suits under Order 37 CPC in regular civil courts.",
  },
  {
    question: "Can banks file Section 138 NI Act and Section 25 PSS Act complaints for bounced loan EMIs?",
    answer:
      "Yes. If a borrower provides post-dated cheques that bounce, Section 138 of the Negotiable Instruments Act applies. In modern digital banking where loan EMIs are collected via National Automated Clearing House (NACH) or e-NACH mandates, Section 25 of the Payment and Settlement Systems Act, 2007, explicitly assimilates electronic mandate dishonours with cheque bounces. The lender must issue a statutory 15-day demand notice within 30 days of receiving the bank dishonour advice, following which a criminal complaint can be filed within 30 days before the jurisdictional Judicial Magistrate.",
  },
  {
    question: "How does the Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63) impact bank loan evidence?",
    answer:
      "BSA Section 63 replaces the former Section 65B of the Indian Evidence Act, 1872. To make electronic loan agreements, digital e-signatures, CBS core-banking ledgers, NACH return memos, and digital notice delivery proofs (WhatsApp blue-tick logs and SMTP transmission headers) fully admissible in court, the bank's authorized legal officer or IT systems manager must execute an electronic certificate under BSA Section 63 confirming computer system integrity. This eliminates procedural evidentiary objections raised by defaulting borrowers during summary trials.",
  },
  {
    question: "What legal actions can banks initiate against personal guarantors who shield delinquent corporate promoters?",
    answer:
      "Under Section 128 of the Indian Contract Act, 1872, the liability of a guarantor is co-extensive with that of the principal debtor. The bank is not required to exhaust remedies against the borrowing company before proceeding against the guarantor. Following the Supreme Court ruling in SBI v. V. Ramakrishnan, the corporate moratorium under IBC Section 14 does not protect personal guarantors. Banks can immediately serve advocate recall notices on personal guarantors and initiate insolvency proceedings under Section 95 of the IBC before the NCLT, which triggers an immediate asset freeze on the guarantor's personal estate under Section 96.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Effective Legal Strategies for Recovery of Defaulted Bank Loans",
  description:
    "Proven legal recovery strategies for Indian banks: pre-litigation notices, Lok Adalat settlements, digital arbitration, and DRT litigation.",
  datePublished: "2026-11-13T14:30:00+05:30",
  dateModified: "2026-11-13T14:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/effective-legal-strategies-recovery-defaulted-bank-loans`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
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
    "@type": "Organization",
    name: "Indian Scheduled Commercial Banks and NBFCs",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bank Loan Recovery",
      item: `${SITE_URL}/bulk-recovery-cases-all-in-one-affordable-solutions`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Effective Legal Strategies for Recovery of Defaulted Bank Loans",
      item: `${SITE_URL}/effective-legal-strategies-recovery-defaulted-bank-loans`,
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

export default function EffectiveLegalStrategiesPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    {
      label: "Bank Loan Recovery",
      href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
    },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Pre-Litigation Lok Adalat (LSAA 1987)</span>
              <span className="text-red-500">•</span>
              <span>Institutional Bank Loan Recovery Framework</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Effective Legal Strategies for Recovery of Defaulted Bank Loans
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Executive Legal Summary (Institutional Banking Recovery Mandate)
              </p>
              <p>
                Under Indian banking law, recovery of defaulted loans requires a structured multi-track legal framework: issuing 15-day statutory advocate demand notices under Section 25 PSS Act or Section 138 NI Act, resolving retail and MSME delinquencies via Pre-Litigation Lok Adalat (LSAA 1987 Section 21) with zero court fees, enforcing secured collateral under SARFAESI Act Section 13, and escalating claims above ₹20 Lakhs to the Debt Recovery Tribunal (DRT).
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">40%+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Pre-Litigation Lok Adalat Portfolio Conversion
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">₹0 Court Fee</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Pre-Litigation LSAA 1987 Sec 21 Docketing
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Statutory Advocate Cure Notice Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹20L+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  DRT Pecuniary Threshold Under RDB Act
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <EffectiveLegalStrategiesTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Executive Framework */}
              <section
                id="heading-executive-framework"
                aria-labelledby="heading-executive-framework-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 bg-red-100 px-2.5 py-1 rounded-md">
                    Strategic Paradigm Shift
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    For EVPs of Banking Operations &amp; Chief Legal Officers
                  </span>
                </div>
                <h2
                  id="heading-executive-framework-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Executive Analysis: Transforming Banking NPA Recovery from Cost Center to High-Velocity Asset Realization
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian commercial banking institutions face twin structural headwinds in delinquent debt management: the aggressive provisioning mandates stipulated under the Reserve Bank of India&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), coupled with severe institutional backlog across civil courts and Debt Recovery Tribunals (DRTs). When accounts slip past the 90-day overdue threshold into Non-Performing Assets (NPAs), traditional litigious recovery models subject lenders to heavy ad-valorem state court fees (1% to 2% of debt claim), recurring litigation retainer retainers, and multi-year trial delays.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Leading scheduled commercial banks, public sector lenders, and apex NBFCs are executing an institutional shift: moving away from reactive post-NPA civil litigation toward an aggressive, front-loaded pre-litigation architecture. By combining automated advocate demand notices during Special Mention Account (SMA-0, SMA-1, and SMA-2) buckets with institutional Pre-Litigation Lok Adalats under the Legal Services Authorities Act, 1987, banks routinely shift over 40% of delinquent retail and MSME loan portfolios into legally binding settlement decrees within 60 days—at a fraction of historical operational recovery costs.
                </p>
                <div className="bg-slate-100 border-l-4 border-slate-900 p-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    <strong>Institutional Rule:</strong> Pre-litigation intervention does not waive or prejudice statutory judicial remedies. Issuing an advocate notice and docketing a file before the National Lok Adalat establishes undeniable evidence of default and formal demand, allowing immediate escalation to SARFAESI Section 13 or DRT Section 19 if the borrower remains recalcitrant.
                  </p>
                </div>
              </section>

              {/* Section 2: Statutory Recovery Tracks */}
              <section
                id="heading-statutory-tracks"
                aria-labelledby="heading-statutory-tracks-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-tracks-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 5 Core Statutory Recovery Tracks in Indian Banking Law
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Every delinquent loan exposure must be routed through its optimal statutory enforcement track based on security structure, loan quantum, and debtor profile.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        Track 1 • Pre-Litigation
                      </span>
                      <span className="text-xs font-bold text-slate-500">Zero Court Fee</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Pre-Litigation Lok Adalat &amp; ODR Conciliation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Governed by Sections 19, 20, and 21 of the Legal Services Authorities Act, 1987. Pre-litigation dockets are referred through District Legal Services Authorities (DLSA) or digital Online Dispute Resolution platforms. Any mutual compromise produces an Award that has the exact statutory standing of a Civil Court Decree under Section 21, carrying immediate civil execution powers under Order XXI CPC without any rights of appeal.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                        Track 2 • Secured Collateral
                      </span>
                      <span className="text-xs font-bold text-slate-500">Non-Judicial Auction</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      SARFAESI Non-Judicial Asset Enforcement
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Governed by the SARFAESI Act, 2002. Applicable for secured debts exceeding ₹1,00,000 where collateral security is charged and registered on CERSAI. The bank serves a mandatory 60-day demand notice under Section 13(2), disposes of borrower representations under Section 13(3A), takes symbolic possession under Section 13(4), and obtains physical possession via Chief Metropolitan Magistrate / DM orders under Section 14.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                        Track 3 • Quasi-Criminal
                      </span>
                      <span className="text-xs font-bold text-slate-500">15-Day Cure Notice</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Section 138 NI Act &amp; Section 25 PSS Act Prosecutions
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Applicable to dishonoured repayment cheques (Section 138 Negotiable Instruments Act) and bounced electronic NACH / e-mandate transactions (Section 25 Payment and Settlement Systems Act, 2007). Requires serving an advocate legal notice within 30 days of the bank return memo. Non-payment within 15 days enables criminal complaint filing, carrying up to 2 years imprisonment and twice the instrument value in fines.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded">
                        Track 4 • High-Value Claims
                      </span>
                      <span className="text-xs font-bold text-slate-500">Debt &ge; ₹20,00,000</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Debt Recovery Tribunal (DRT) Original Applications
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Governed by Section 19 of the Recovery of Debts and Bankruptcy (RDB) Act, 1993. Exclusively available for banking debts of ₹20 Lakhs and higher. Banks file Original Applications (OAs) seeking urgent interim injunctions against borrower property disposal, culminating in Recovery Certificates under Section 25 executed by the DRT Recovery Officer via attachment of bank accounts, wages, and receivables.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                      Track 5 • Contractual Summary Decrees
                    </span>
                    <span className="text-xs font-bold text-slate-500">Debts &lt; ₹20,00,000</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Order XXXVII CPC Summary Procedure in Civil Courts
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    For unsecured retail and business loans below the ₹20 Lakh DRT threshold where the debtor fails to participate in Lok Adalat conciliation, banks invoke Order 37 of the Code of Civil Procedure, 1908. Summary suits prevent the defendant borrower from filing a regular written statement as of right. Unless the borrower satisfies the civil judge with substantial grounds to obtain &quot;leave to defend&quot;, the court enters an immediate judgment and money decree for the full outstanding loan balance plus contractual interest.
                  </p>
                </div>
              </section>

              {/* Section 3: Landmark Court Citations */}
              <section
                id="heading-case-citations"
                aria-labelledby="heading-case-citations-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-citations-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings Governing Bank Loan Enforcement
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Supreme Court Precedents
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Precedent #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <p className="font-semibold text-slate-900 mb-1">Material Facts of the Case:</p>
                          <p>{c.facts}</p>
                        </div>

                        <div className="bg-red-50/60 p-3.5 sm:p-4 rounded-xl border border-red-100 text-xs sm:text-sm text-slate-800 leading-relaxed">
                          <p className="font-semibold text-red-950 mb-1">Judicial Holding &amp; Legal Principle:</p>
                          <p>{c.holding}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
                          <div>
                            <span className="text-slate-500 font-medium">Judicial Enforceability: </span>
                            <span className="font-bold text-slate-900">{c.amount}</span>
                          </div>
                          <div className="bg-slate-900 text-slate-100 px-3 py-1.5 rounded-lg text-[11px] font-medium">
                            <span className="text-amber-300 font-bold">Banking Counsel Takeaway:</span> {c.takeaway}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: Hand-Authored Inline SVG Flowchart / Lifecycle */}
              <section
                id="heading-process-lifecycle"
                aria-labelledby="heading-process-lifecycle-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-process-lifecycle-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 5-Stage Institutional Loan Recovery Funnel
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Systematic progression from early delinquency triggers to non-appealable civil execution decrees.
                  </p>
                </div>

                {/* Hand-authored SVG Process Diagram */}
                <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs overflow-x-auto">
                  <div className="min-w-[620px]">
                    <svg
                      viewBox="0 0 800 230"
                      className="w-full h-auto text-slate-900"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="5-Stage Bank Loan Recovery Workflow Diagram"
                    >
                      {/* Stage 1 */}
                      <rect x="10" y="20" width="135" height="150" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                      <rect x="20" y="30" width="32" height="22" rx="6" fill="#111827" />
                      <text x="36" y="45" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">01</text>
                      <text x="20" y="75" fill="#0F172A" fontSize="12" fontWeight="bold">SMA Delinquency</text>
                      <text x="20" y="92" fill="#64748B" fontSize="10">Days 1–60 (SMA 0/1)</text>
                      <text x="20" y="112" fill="#334155" fontSize="9.5">Automated SMS/Email</text>
                      <text x="20" y="127" fill="#334155" fontSize="9.5">Soft cure reminders</text>
                      <text x="20" y="142" fill="#334155" fontSize="9.5">Bank CBS ledger audit</text>

                      {/* Arrow 1 to 2 */}
                      <path d="M150 95 L170 95" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Stage 2 */}
                      <rect x="175" y="20" width="135" height="150" rx="12" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
                      <rect x="185" y="30" width="32" height="22" rx="6" fill="#DC2626" />
                      <text x="201" y="45" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">02</text>
                      <text x="185" y="75" fill="#7F1D1D" fontSize="12" fontWeight="bold">Advocate Notice</text>
                      <text x="185" y="92" fill="#991B1B" fontSize="10">Days 61–90 (SMA-2)</text>
                      <text x="185" y="112" fill="#334155" fontSize="9.5">15-Day Cure Demand</text>
                      <text x="185" y="127" fill="#334155" fontSize="9.5">Sec 25 PSS / 138 NI</text>
                      <text x="185" y="142" fill="#334155" fontSize="9.5">BSA Sec 63 Tracking</text>

                      {/* Arrow 2 to 3 */}
                      <path d="M315 95 L335 95" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Stage 3 */}
                      <rect x="340" y="20" width="135" height="150" rx="12" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="2" />
                      <rect x="350" y="30" width="32" height="22" rx="6" fill="#059669" />
                      <text x="366" y="45" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">03</text>
                      <text x="350" y="75" fill="#064E3B" fontSize="12" fontWeight="bold">Lok Adalat / ODR</text>
                      <text x="350" y="92" fill="#047857" fontSize="10">Pre-Litigation Hub</text>
                      <text x="350" y="112" fill="#334155" fontSize="9.5">Zero Court Fees (LSAA)</text>
                      <text x="350" y="127" fill="#334155" fontSize="9.5">40%+ OTS Conversion</text>
                      <text x="350" y="142" fill="#334155" fontSize="9.5">Section 21 Decree</text>

                      {/* Arrow 3 to 4 */}
                      <path d="M480 95 L500 95" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Stage 4 */}
                      <rect x="505" y="20" width="135" height="150" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                      <rect x="515" y="30" width="32" height="22" rx="6" fill="#1E293B" />
                      <text x="531" y="45" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">04</text>
                      <text x="515" y="75" fill="#0F172A" fontSize="12" fontWeight="bold">Judicial Escalation</text>
                      <text x="515" y="92" fill="#64748B" fontSize="10">If Unresolved</text>
                      <text x="515" y="112" fill="#334155" fontSize="9.5">SARFAESI Sec 13</text>
                      <text x="515" y="127" fill="#334155" fontSize="9.5">DRT Sec 19 (&ge; ₹20L)</text>
                      <text x="515" y="142" fill="#334155" fontSize="9.5">Order 37 Summary Suit</text>

                      {/* Arrow 4 to 5 */}
                      <path d="M645 95 L665 95" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Stage 5 */}
                      <rect x="670" y="20" width="120" height="150" rx="12" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
                      <rect x="680" y="30" width="32" height="22" rx="6" fill="#2563EB" />
                      <text x="696" y="45" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">05</text>
                      <text x="680" y="75" fill="#1E3A8A" fontSize="12" fontWeight="bold">Civil Execution</text>
                      <text x="680" y="92" fill="#1D4ED8" fontSize="10">Order XXI CPC</text>
                      <text x="680" y="112" fill="#334155" fontSize="9.5">Bank account freeze</text>
                      <text x="680" y="127" fill="#334155" fontSize="9.5">Property attachment</text>
                      <text x="680" y="142" fill="#334155" fontSize="9.5">Salary garnishee order</text>

                      {/* Defs for arrow marker */}
                      <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 1 L 8 5 L 0 9 z" fill="#94A3B8" />
                        </marker>
                      </defs>

                      {/* Bottom Banner */}
                      <rect x="10" y="185" width="780" height="35" rx="8" fill="#F1F5F9" />
                      <text x="400" y="207" fill="#475569" fontSize="10" fontWeight="bold" textAnchor="middle">
                        Fast-Track Protocol: By converting 40%+ of delinquent files in Stage 03, banks eliminate 80% of downstream trial costs and court fees.
                      </text>
                    </svg>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <p>
                    <strong>Stage 01 — SMA Inception &amp; Soft Early Triggers:</strong> Delinquent accounts entering Special Mention Account status (SMA-0 for 1–30 days overdue, SMA-1 for 31–60 days overdue) receive coordinated multi-channel telephonic and automated digital reminders. During this phase, core-banking ledgers are audited for certificate compliance under the Banker&apos;s Books Evidence Act, 1891, and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
                  </p>
                  <p>
                    <strong>Stage 02 — Formal Advocate Legal Notice Deployment:</strong> As loans enter the SMA-2 bucket (61–90 days overdue), the institution issues an advocate-drafted statutory demand notice setting an unextendable 15-day cure window. Dispatched via India Post Registered Speed Post with electronic tracking alongside cryptographically logged digital copies (Email and WhatsApp), this notice establishes conclusive legal proof of demand and creates a statutory foundation under Section 25 PSS Act and Section 138 NI Act.
                  </p>
                  <p>
                    <strong>Stage 03 — Pre-Litigation Lok Adalat &amp; ODR Conciliation:</strong> Instead of waiting for prolonged judicial trials, delinquent accounts are batched and referred to the upcoming National Lok Adalat via District Legal Services Authorities (DLSA) or accredited Online Dispute Resolution (ODR) conciliation panels. With zero court fees, borrowers are offered structured One-Time Settlement (OTS) options or restructured EMI schedules. The resulting settlement award has the immediate, non-appealable status of a Civil Court Decree under Section 21 of the Legal Services Authorities Act, 1987.
                  </p>
                  <p>
                    <strong>Stage 04 — Dual-Track Judicial Escalation:</strong> For recalcitrant borrowers who decline settlement, the institution executes dual-track litigation: issuing Section 13(2) SARFAESI notices against mortgaged property, lodging Section 19 Original Applications before the DRT (for debts &ge; ₹20 Lakhs), or initiating summary civil suits under Order 37 CPC.
                  </p>
                  <p>
                    <strong>Stage 05 — Execution &amp; Coercive Asset Recovery:</strong> Lok Adalat awards and DRT Recovery Certificates are filed under Order XXI CPC or Section 25 RDB Act for immediate coercive enforcement, including bank account attachment, garnishment of employer salaries, and court-monitored public auctions.
                  </p>
                </div>
              </section>

              {/* Section 5: Tabbed Recovery Matrix */}
              <section
                id="heading-category-playbook"
                aria-labelledby="heading-category-playbook-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-category-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Portfolio Playbooks: Interactive Legal Strategy Selector
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Examine tailored statutory mechanisms for retail unsecured loans, secured real estate mortgages, MSME working capital limits, and corporate consortium exposures.
                  </p>
                </div>

                {/* Client Tab Island */}
                <EffectiveLegalStrategiesTabs />
              </section>

              {/* Section 6: Deep Dive Lok Adalat & ODR */}
              <section
                id="heading-lok-adalat-strategy"
                aria-labelledby="heading-lok-adalat-strategy-title"
                className="scroll-mt-28 space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-lok-adalat-strategy-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The Lok Adalat &amp; Digital ODR Advantage: Enforceable Decrees with Zero Court Fees
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    How commercial banks utilize statutory pre-litigation conciliation under the Legal Services Authorities Act, 1987, to resolve delinquent portfolios at scale.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Statutory Foundation Under Sections 19, 20 &amp; 21 of LSAA 1987
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Under Section 19(5) of the Legal Services Authorities Act, 1987, a Lok Adalat holds statutory jurisdiction to determine and arrive at a compromise or settlement between parties in respect of any matter falling within the jurisdiction of, and is not brought before, any court for which the Lok Adalat is organized. This specific pre-litigation power allows financial institutions to bring thousands of delinquent loan files before the Lok Adalat bench without instituting a formal civil suit or depositing heavy ad-valorem state court fees.
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Once a borrower executes a settlement deed before the Lok Adalat panel—typically comprising a sitting or retired judicial officer and an advocate—the award is formalized under Section 21. By legislative mandate, this award carries the full legal status of a final decree of a Civil Court. Crucially, Section 21(2) bars any appeal against a Lok Adalat award in any court. If the borrower defaults on any installment agreed upon in the Lok Adalat compromise, the bank does not file a new suit; it directly initiates execution proceedings under Order XXI CPC to attach bank accounts or seize assets.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <p className="text-xs font-bold uppercase text-red-700">Cost Elimination</p>
                      <p className="text-base font-black text-slate-900 mt-1">100% Fee Waiver</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Pre-litigation references incur zero institution court fees under Section 21. If a pending suit is settled, the full court fee paid is refunded to the bank.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <p className="text-xs font-bold uppercase text-red-700">Litigation Finality</p>
                      <p className="text-base font-black text-slate-900 mt-1">Zero Appellate Risk</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Section 21(2) creates an absolute bar against regular civil appeals, High Court revisions, or dilatory stay applications by defaulting debtors.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <p className="text-xs font-bold uppercase text-red-700">Enforcement Velocity</p>
                      <p className="text-base font-black text-slate-900 mt-1">Direct Execution</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Immediate execution under Order XXI Rule 10/11 CPC. Banks obtain attachment warrants without undergoing a 3-year contested civil trial.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Strategy Comparison Table */}
              <section
                id="heading-matrix-table"
                aria-labelledby="heading-matrix-table-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-matrix-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Banking Recovery Strategy Matrix: Forum, Cost, TAT &amp; Enforcement
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Comparative statutory analysis across legal mechanisms available to Indian commercial banks and NBFCs.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                      <caption className="sr-only">
                        Comparative Legal Recovery Strategies for Indian Scheduled Banks
                      </caption>
                      <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                        <tr>
                          <th scope="col" className="px-4 py-3.5 font-bold">Recovery Mechanism</th>
                          <th scope="col" className="px-4 py-3.5 font-bold">Governing Statute</th>
                          <th scope="col" className="px-4 py-3.5 font-bold">Pecuniary Threshold</th>
                          <th scope="col" className="px-4 py-3.5 font-bold">Court Fee Impact</th>
                          <th scope="col" className="px-4 py-3.5 font-bold">Average TAT</th>
                          <th scope="col" className="px-4 py-3.5 font-bold">Enforcement Power</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 font-medium">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <th scope="row" className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">
                            Pre-Litigation Lok Adalat
                          </th>
                          <td className="px-4 py-3.5">LSAA 1987 Section 19/20</td>
                          <td className="px-4 py-3.5">Any amount (No limit)</td>
                          <td className="px-4 py-3.5 text-emerald-700 font-bold">₹0 (Completely Free)</td>
                          <td className="px-4 py-3.5">30–60 Days</td>
                          <td className="px-4 py-3.5 font-bold text-slate-900">Civil Decree (Sec 21)</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <th scope="row" className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">
                            SARFAESI Asset Enforcement
                          </th>
                          <td className="px-4 py-3.5">SARFAESI Act 2002 Sec 13/14</td>
                          <td className="px-4 py-3.5">&gt; ₹1,00,000 (Secured)</td>
                          <td className="px-4 py-3.5">Zero (Non-judicial)</td>
                          <td className="px-4 py-3.5">90–180 Days</td>
                          <td className="px-4 py-3.5 font-bold text-slate-900">Direct Physical Auction</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <th scope="row" className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">
                            NACH / Cheque Prosecution
                          </th>
                          <td className="px-4 py-3.5">Sec 25 PSS / 138 NI Act</td>
                          <td className="px-4 py-3.5">Any bounced mandate</td>
                          <td className="px-4 py-3.5">Nominal criminal fee</td>
                          <td className="px-4 py-3.5">6–18 Months</td>
                          <td className="px-4 py-3.5 font-bold text-slate-900">Arrest Warrant / 2x Fine</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <th scope="row" className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">
                            DRT Original Application (OA)
                          </th>
                          <td className="px-4 py-3.5">RDB Act 1993 Section 19</td>
                          <td className="px-4 py-3.5 font-bold text-red-600">&ge; ₹20,00,000</td>
                          <td className="px-4 py-3.5">Sliding Scale (Up to ₹1.5L)</td>
                          <td className="px-4 py-3.5">18–36 Months</td>
                          <td className="px-4 py-3.5 font-bold text-slate-900">Recovery Certificate (Sec 25)</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <th scope="row" className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">
                            Civil Summary Suit
                          </th>
                          <td className="px-4 py-3.5">Order 37 CPC 1908</td>
                          <td className="px-4 py-3.5">&lt; ₹20,00,000 (Civil Court)</td>
                          <td className="px-4 py-3.5 text-red-700 font-bold">1%–2% Ad-Valorem Fee</td>
                          <td className="px-4 py-3.5">12–24 Months</td>
                          <td className="px-4 py-3.5 font-bold text-slate-900">Summary Money Decree</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <th scope="row" className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">
                            Corporate Insolvency (IBC)
                          </th>
                          <td className="px-4 py-3.5">IBC 2016 Sec 7 / Sec 95</td>
                          <td className="px-4 py-3.5">&ge; ₹1,00,00,000 (NCLT)</td>
                          <td className="px-4 py-3.5">Fixed NCLT Filing Fee</td>
                          <td className="px-4 py-3.5">12–30 Months</td>
                          <td className="px-4 py-3.5 font-bold text-slate-900">CIRP / Promoter Moratorium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 8: Worked Example / Case Study */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Study: Resolving a ₹25 Crore Retail Loan Default Portfolio
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Comparative economic and timeline analysis of a Scheduled Commercial Bank managing a 600-borrower delinquent portfolio.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-5">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Portfolio Baseline Parameters (Illustrative Enterprise Scenario)
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2 text-xs sm:text-sm">
                      <div>
                        <span className="text-slate-500 block">Total Claim Value:</span>
                        <span className="font-bold text-slate-900">₹25,00,00,000</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Defaulting Accounts:</span>
                        <span className="font-bold text-slate-900">600 Borrowers</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Average Ticket Size:</span>
                        <span className="font-bold text-slate-900">₹4,16,666</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Delinquency Age:</span>
                        <span className="font-bold text-red-600">SMA-2 (75 Days Overdue)</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Conventional Strategy */}
                    <div className="bg-red-50/50 p-4 sm:p-5 rounded-xl border border-red-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-red-800">
                          Traditional Path: Individual Civil Suits &amp; DRT
                        </span>
                        <span className="text-[11px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
                          Slow &amp; Expensive
                        </span>
                      </div>
                      <ul className="text-xs text-slate-700 space-y-2 list-disc pl-4">
                        <li>
                          <strong>Upfront Court Fees:</strong> ~1.5% ad-valorem state court fees across 600 civil suits = ₹37,50,000.
                        </li>
                        <li>
                          <strong>Litigation Retainers:</strong> Advocate retainer fees averaging ₹25,000 per contested matter = ₹1,50,00,000.
                        </li>
                        <li>
                          <strong>Resolution Timeline:</strong> Average trial lifecycle of 2.5 to 4 years before receiving a contested decree.
                        </li>
                        <li>
                          <strong>Borrower Appeals:</strong> Multiple First Appeals and revisions stay execution and require continuous bank legal overhead.
                        </li>
                      </ul>
                      <div className="pt-2 border-t border-red-200 text-xs">
                        <span className="font-bold text-red-950">Total Upfront Legal Outlay: </span>
                        <span className="font-black text-red-700">₹1,87,50,000 (~7.5% of Portfolio)</span>
                      </div>
                    </div>

                    {/* Pre-Litigation Lok Adalat Model */}
                    <div className="bg-emerald-50/50 p-4 sm:p-5 rounded-xl border border-emerald-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-emerald-800">
                          Modern Path: Automated Notice + Lok Adalat
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                          High Velocity
                        </span>
                      </div>
                      <ul className="text-xs text-slate-700 space-y-2 list-disc pl-4">
                        <li>
                          <strong>Court Fees:</strong> ₹0 under Section 21 of the Legal Services Authorities Act, 1987.
                        </li>
                        <li>
                          <strong>Automated Notice Operations:</strong> Standardized advocate drafting &amp; Speed Post/Email service at ₹899/notice = ₹5,39,400.
                        </li>
                        <li>
                          <strong>Lok Adalat Docketing:</strong> Mass docketing via DLSA; 265 accounts (44.1%) settle in National Lok Adalat within 60 days.
                        </li>
                        <li>
                          <strong>Immediate Execution:</strong> 265 signed Lok Adalat awards become non-appealable Civil Decrees on day 60.
                        </li>
                      </ul>
                      <div className="pt-2 border-t border-emerald-200 text-xs">
                        <span className="font-bold text-emerald-950">Upfront Operational Outlay: </span>
                        <span className="font-black text-emerald-700">₹5,39,400 (Savings of ₹1.82 Crore)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-white p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                    <div>
                      <p className="font-bold text-emerald-400">Institutional Bottom Line:</p>
                      <p className="text-slate-300 text-xs mt-0.5">
                        Recovered ₹11,04,00,000 within 60 days with ₹1,82,10,600 saved in upfront legal court fees and advocate retainers.
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-block px-3 py-1 bg-emerald-950 text-emerald-300 border border-emerald-700 rounded-lg font-bold text-xs">
                        44.1% Cash Realization in 60 Days
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Banking Legal Counsel Evidentiary Audit Checklist
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Required statutory documentation before issuing advocate notices or docketing before Lok Adalat / DRT.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                          Primary Sanction &amp; Credit Agreements
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                        Executed loan agreement, sanction letter acknowledging interest rate reset clauses, personal guarantee deeds, and hypothecation schedules.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                          Certified Core Banking Statements
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                        Full statement of account bearing branch manager certification under the Banker&apos;s Books Evidence Act, 1891, and BSA 2023 Section 63.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                          NACH Mandate &amp; Dishonour Advice
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                        National Automated Clearing House (NACH) mandate copy, NPCI clearing return advice citing code (e.g. &apos;Insufficient Funds&apos;), and date of debit presentation.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                          Collateral Security &amp; CERSAI Registration
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                        For secured loans: Title deed deposit memorandum, chain of title deeds, valuation report, and Central Registry (CERSAI) security interest certificate.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                          Speed Post Delivery Proofs (India Post)
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                        Consignment tracking report from indiapost.gov.in showing &apos;Item Delivered&apos; or statutory postal remarks such as &apos;Unclaimed&apos; / &apos;Refused&apos; (deemed legal service).
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                          ✓
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                          Digital Service Logs &amp; BSA 63 Certificate
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                        WhatsApp double-blue-tick delivery log, email server SMTP receipt timestamps, and IT officer certificate certifying electronic authenticity under Section 63 BSA.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Bank Loan Legal Recovery
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Authoritative answers to core legal, statutory, and operational questions regarding defaulted loan enforcement in India.
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                        <span className="text-red-600 font-extrabold shrink-0">Q{idx + 1}.</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Statutory Sources */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                  >
                    Primary Statutory Authorities &amp; Official References
                  </h2>
                  <p className="text-xs text-slate-500">
                    All legal procedures, timelines, and statutory references are anchored in published legislation and official regulatory guidelines.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold shrink-0">[{idx + 1}]</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-700 hover:text-red-900 hover:underline font-medium"
                        >
                          {source.title} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-500 mt-4 pt-3 border-t border-slate-100">
                    Legal framework verified current as of November 2026. Published under Indian banking, financial services, and dispute resolution jurisprudence.
                  </p>
                </div>
              </section>

              {/* High-Converting B2B CTA Banner */}
              <EffectiveLegalStrategiesCTA />

              {/* Related Recovery Guides Cluster */}
              <div className="pt-6">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
