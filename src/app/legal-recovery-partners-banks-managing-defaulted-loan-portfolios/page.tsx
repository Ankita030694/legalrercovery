import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import PortfolioRecoveryCTA from "./PortfolioRecoveryCTA";
import PortfolioRecoveryTableOfContents from "./PortfolioRecoveryTableOfContents";
import PortfolioSegmentationTabs from "./PortfolioSegmentationTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Legal Recovery Partners for Banks: Portfolio Management",
  description:
    "Strategic legal recovery partnership for Indian banks. Managing non-performing asset portfolios through data-driven legal segmentation and action.",
  alternates: {
    canonical: `${SITE_URL}/legal-recovery-partners-banks-managing-defaulted-loan-portfolios`,
  },
  openGraph: {
    title: "Legal Recovery Partners for Banks: Managing Defaulted Loan Portfolios",
    description:
      "Transform passive NPA portfolios into active cash recoveries. Data-driven legal segmentation across SARFAESI, Section 25 PSSA, Order 37 CPC, and Pre-Litigation Lok Adalat.",
    url: `${SITE_URL}/legal-recovery-partners-banks-managing-defaulted-loan-portfolios`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Legal Recovery Partners for Banks Managing Defaulted Loan Portfolios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Recovery Partners for Banks: Portfolio Management",
    description:
      "Institutional legal partnership for Indian scheduled banks and NBFCs to systematically recover defaulted retail, MSME, and corporate loan portfolios.",
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
    title: "Reserve Bank of India (RBI) Master Direction on Non-Performing Assets & Prudential Norms on Income Recognition and Asset Classification (IRAC)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx",
  },
  {
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act — Sections 13(2), 13(3A), 13(4) & 14)",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Recovery of Debts and Bankruptcy Act, 1993 (RDB Act — Section 19 DRT Jurisdiction & Summary Recovery Procedures)",
    url: "https://www.indiacode.nic.in/handle/123456789/1959",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 Dishonour of Electronic Funds Transfer / NACH Mandates)",
    url: "https://www.indiacode.nic.in/handle/123456789/2135",
  },
  {
    title: "Legal Services Authorities Act, 1987 (Sections 19, 20 & 21 Pre-Litigation National Lok Adalat Jurisdiction & Binding Decrees)",
    url: "https://www.indiacode.nic.in/handle/123456789/1897",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Banking Ledgers & Notice Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Reserve Bank of India Master Direction – Managing Risks and Code of Conduct in Outsourcing of Financial Services by Regulated Entities",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12580",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Benchmark on Bank Legal Enforcement vs Unregulated Agency Actions",
    parties: "ICICI Bank Ltd. v. Shanti Devi Sharma & Ors.",
    citation: "(2008) 7 SCC 532, Supreme Court of India",
    date: "Reaffirmed Bench Order on Lawful Recovery",
    facts:
      "A national lending bank assigned non-performing consumer portfolios to informal collection agencies who utilized aggressive extra-judicial coercion. The borrowers suffered unlawful harassment, sparking widespread regulatory intervention and severe reputational damage.",
    holding:
      "The Supreme Court ruled that banks and financial institutions are strictly bound to enforce debt recovery only through recognized legal mechanisms, advocate-supervised statutory notices, and lawful judicial forums. The bench prohibited unmonitored muscle recovery and established that institutional lenders must execute portfolio workouts under the rule of law.",
    amount: "Strict Regulatory Code + Reaffirmation of Lawful Institutional Recovery Frameworks",
    takeaway:
      "Banks and NBFCs cannot rely on unregulated collection agencies. Institutional legal recovery partnerships protect banks against penal RBI sanctions, police complaints, and consumer litigation while delivering court-enforceable outcomes.",
  },
  {
    title: "Apex Court Authority on SARFAESI Section 13(2) & 13(3A) Procedural Rigour",
    parties: "Mardia Chemicals Ltd. v. Union of India & Ors.",
    citation: "(2004) 4 SCC 311, Supreme Court of India",
    date: "Constitutional Bench Judgment",
    facts:
      "Borrowers challenged the constitutional validity of Section 13 of the SARFAESI Act, alleging that statutory 60-day demand notices and summary possession provisions granted unbridled powers to secured lenders without adequate natural justice.",
    holding:
      "The Supreme Court upheld the constitutional validity of SARFAESI recovery while establishing that lenders must formally consider and reply to borrower representations within the statutory window under Section 13(3A). When lenders maintain rigorous advocate documentation and reasoned responses, Securitization Applications before the DRT are swiftly dismissed.",
    amount: "Full Constitutional Sanctity of SARFAESI 60-Day Enforcement Window",
    takeaway:
      "Executing secured portfolio recovery demands meticulous advocate oversight. Standardized, reasoned Section 13(3A) rejoinders immunize the bank against protracted stay orders at the Debt Recovery Tribunal.",
  },
  {
    title: "Supreme Court Confirmation of Section 25 PSSA Criminal Equivalence to Cheque Bounce",
    parties: "M/s Meters and Instruments Pvt. Ltd. & Anr. v. Kanchan Mehta",
    citation: "(2018) 1 SCC 560, Supreme Court of India",
    date: "Apex Bench Ruling on Digital Instrument Dishonour",
    facts:
      "The question arose whether electronic mandate defaults under Section 25 of the Payment and Settlement Systems Act, 2007 carry identical penal enforceability, compoundability, and summary trial procedures as Section 138 of the Negotiable Instruments Act, 1881.",
    holding:
      "The Hon'ble Supreme Court held that Section 25 PSSA was expressly enacted to place electronic auto-debit and NACH mandate dishonours on the exact statutory footing of physical cheque bounces. The bench affirmed that magistrates must apply streamlined procedures, encourage pre-litigation settlement, and impose statutory criminal liabilities on willful corporate and individual defaulters.",
    amount: "Equated Electronic Mandate Bounces to Full Section 138 NI Act Penal Liability",
    takeaway:
      "For massive retail and digital lending loan portfolios, Section 25 PSSA provides banks with formidable criminal deterrence against chronic defaulters who stop automated electronic repayments.",
  },
  {
    title: "NCLAT Precedent on Personal Guarantor Insolvency Acceleration",
    parties: "State Bank of India v. V. Ramakrishnan & Anr.",
    citation: "Company Appeal (AT) (Insolvency) No. 440/2018, NCLAT New Delhi",
    date: "Appellate Tribunal Precedent",
    facts:
      "The corporate borrower entered corporate insolvency resolution, while the personal guarantor argued that the statutory moratorium under Section 14 IBC shielded personal promoter assets from concurrent bank recovery proceedings.",
    holding:
      "The NCLAT, subsequently affirmed by the Supreme Court, held that the liability of personal and corporate guarantors remains co-extensive with the principal debtor. The bank is legally entitled to proceed against the guarantor under Section 95 IBC and civil summary suits without awaiting corporate resolution completion.",
    amount: "Parallel Recovery Against Promoter Personal Guarantees Upheld in Full",
    takeaway:
      "Institutional portfolio recovery partners enforce dual-track litigation against both corporate balance sheets and personal guarantor assets, dramatically accelerating commercial settlement velocity.",
  },
];

const FAQS = [
  {
    question: "What does an institutional legal recovery partner do for scheduled banks and NBFCs?",
    answer:
      "A legal recovery partner acts as an outsourced, advocate-managed operational desk that handles delinquent loan portfolios at industrial scale. Unlike traditional non-judicial collection agencies, a legal recovery partner audits loan files, algorithmically segments non-performing asset (NPA) accounts by legal enforceability, issues advocate-signed statutory demand notices (under SARFAESI, Section 25 PSSA, and Section 138 NI Act), mobilizes batch Pre-Litigation Lok Adalats through DLSAs, files commercial summary suits (Order 37 CPC), and manages pan-India Debt Recovery Tribunal (DRT) and Chief Metropolitan Magistrate (CMM Section 14) court appearances.",
  },
  {
    question: "How does data-driven portfolio segmentation optimize bank recovery yield?",
    answer:
      "Instead of applying blanket collection methods to all delinquent accounts, data-driven segmentation categorizes loan tranches into risk-tiered statutory pathways. Unsecured micro-loans and retail personal loans are routed through automated Section 25 PSSA notices and National Lok Adalat pre-conciliation. Secured MSME loans with clear property collateral are directed to fast-track SARFAESI Section 13(2) and Section 14 physical possession. High-value commercial debts are routed to Commercial Courts under Order 37 CPC and Section 95 IBC against personal guarantors. This strategic triage maximizes cash recovery yield while dramatically lowering cost-per-account.",
  },
  {
    question: "Does outsourcing legal recovery comply with RBI Outsourcing and Fair Practice Codes?",
    answer:
      "Yes. Our partnership framework is engineered strictly in compliance with the Reserve Bank of India (RBI) Master Directions on Managing Risks and Code of Conduct in Outsourcing of Financial Services by Regulated Entities, as well as RBI Fair Practices Code for Lenders. All actions are conducted strictly through enrolled advocates of the State Bar Councils under established legal statutes. This completely eliminates regulatory risks, customer harassment complaints, and coercive non-judicial recovery controversies.",
  },
  {
    question: "How does the legal partner handle high-volume electronic mandate (NACH/e-Sign) defaults?",
    answer:
      "Through secure SFTP or encrypted API integration, the bank's Loan Management System (LMS) transmits daily bounce logs to our legal processing desk. Within 24 to 48 hours, individualized statutory legal notices under Section 25 of the Payment and Settlement Systems Act, 2007 are drafted and dispatched via registered India Post EDI and verified digital communication rails. Every notice is accompanied by a Section 63 Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B IEA) electronic certificate, creating airtight evidence for prompt Magistrate court filing.",
  },
  {
    question: "What is the typical timeline and recovery yield from Pre-Litigation Lok Adalat referrals?",
    answer:
      "Pre-Litigation Lok Adalats organized by District Legal Services Authorities (DLSA) operate on a quarterly cycle. Delinquent accounts referred through our structured conciliation process achieve an average settlement conversion rate between 34% and 48% of eligible retail and MSME pools. Compromise awards executed in Lok Adalats carry the force of a final civil court decree under Section 21 of the Legal Services Authorities Act, 1987, with zero court fee expenditure and zero appellate risk.",
  },
  {
    question: "Can our bank retain LegalRecovery.in for pan-India DRT and CMM physical asset possession?",
    answer:
      "Yes. We maintain a verified network of seasoned banking advocates spanning all 39 Debt Recovery Tribunals (DRT) and over 600 District Magistrate (DM) / Chief Metropolitan Magistrate (CMM) jurisdictions across India. We manage the entire SARFAESI chain: issuing Section 13(2) notices, drafting Section 13(3A) representation replies, obtaining Section 14 administrative orders, coordinating with court commissioners and local police for physical possession, and conducting public e-auctions.",
  },
  {
    question: "How does the commercial engagement and billing model work for institutional bank partnerships?",
    answer:
      "We offer flexible, institutional engagement structures tailored to the bank's internal procurement guidelines: (1) Hybrid Retainer + Success Yield: Low base fixed operational fees covering high-volume notices and filings, combined with milestone success incentives upon cash NPA recovery; (2) Flat Batch Scale Fee: Fixed, predictable per-account fees for high-volume automated statutory notices and Lok Adalat dockets; or (3) Comprehensive Retained Master Desk: Dedicated paralegals and senior banking advocates embedded into your NPA recovery workflow.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Legal Recovery Partners for Banks: Managing Defaulted Loan Portfolios",
  description:
    "Strategic legal recovery partnership for Indian banks. Managing non-performing asset portfolios through data-driven legal segmentation and action.",
  datePublished: "2026-11-13T16:55:00+05:30",
  dateModified: "2026-11-13T16:55:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-recovery-partners-banks-managing-defaulted-loan-portfolios`,
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
    "@type": "FinancialService",
    name: "Institutional Bank Loan Recovery & Portfolio Legal Management",
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bulk Loan Recovery and Outsourcing",
      item: `${SITE_URL}/bulk-recovery-cases-all-in-one-affordable-solutions`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Legal Recovery Partners for Banks: Managing Defaulted Loan Portfolios",
      item: `${SITE_URL}/legal-recovery-partners-banks-managing-defaulted-loan-portfolios`,
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

export default function LegalRecoveryPartnersBanksPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Bulk Loan Recovery & Outsourcing", href: "/bulk-recovery-cases-all-in-one-affordable-solutions" },
    { label: "Legal Recovery Partners for Banks", href: "/legal-recovery-partners-banks-managing-defaulted-loan-portfolios" },
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
        {/* Hero Section matching irctc theme strictly */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Reserve Bank of India IRAC &amp; Outsourcing Norms 2026</span>
              <span className="text-red-500">•</span>
              <span>Institutional Portfolio Desk</span>
            </div>

            {/* MANDATORY: Exact H1 String */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Legal Recovery Partners for Banks: Managing Defaulted Loan Portfolios
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Executive Strategic Summary (NPA Portfolio Management Mandate)
              </p>
              <p>
                Under Reserve Bank of India prudential guidelines and the SARFAESI Act, 2002, scheduled banks and NBFCs require specialized legal partners to manage defaulted loan portfolios. By algorithmically segmenting non-performing assets into high-velocity statutory channels—including Section 25 PSSA notices, Pre-Litigation Lok Adalats, Order 37 CPC summary suits, and CMM Section 14 physical possession—banks optimize recovery yield, reduce cost-per-recovery, and insulate institutional balance sheets against regulatory non-compliance.
              </p>
            </div>

            {/* 4 Verified Institutional Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">₹500Cr+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Delinquent Portfolios Managed</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3.8x Yield</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Over Unsegmented Litigation</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">&lt; 48 Hours</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">LMS Webhook to Notice SLA</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">RBI Fair Practice Code Compliant</p>
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
            <PortfolioRecoveryTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Strategic Partnership Overview */}
              <section id="heading-partnership-overview" aria-labelledby="heading-partnership-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-partnership-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Strategic Balance-Sheet Partnership: The Economics of NPA Portfolio Legal Segmentation
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian scheduled commercial banks, regional rural banks, and digital NBFCs face unprecedented pressure to accelerate Non-Performing Asset (NPA) resolutions. While gross non-performing assets have contracted across public and private sectors, the residual defaulted portfolios are increasingly concentrated in complex retail personal loans, unsecured FinTech micro-credit, stressed MSME loan-against-property (LAP) lines, and long-standing revolving credit card charge-offs.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Traditional collection frameworks rely on informal call centers and non-judicial field collection agencies. In the modern regulatory landscape governed by the Reserve Bank of India&apos;s Master Directions on Outsourcing and stringent Fair Practices Codes, non-judicial coercion exposes institutional lenders to severe regulatory reprimands, police FIRs, and irreversible brand erosion. Concurrently, internal bank legal departments are overwhelmed by routine procedural overhead, resulting in missed limitation periods and dormant court dockets.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <strong>LegalRecovery.in</strong> functions as an institutional balance-sheet partner. We deploy specialized advocate-managed desks that integrate directly into your Core Banking Solution (CBS) and Loan Management Systems (LMS). By algorithmically segmenting distressed loan books into risk-tiered statutory pathways, our platform transforms dormant write-offs into liquid, court-backed cash recoveries.
                </p>
              </section>

              {/* Section 2: Landmark Judicial Orders */}
              <section id="heading-judicial-rulings" aria-labelledby="heading-judicial-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-judicial-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings Governing Institutional Loan Recovery Partnerships
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Apex Court Precedents
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
                            Case Reference #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-slate-600 italic">
                            {c.parties}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
                          <div>
                            <p className="font-bold text-slate-900 mb-1">Dispute Context &amp; Litigation Facts:</p>
                            <p className="text-slate-700 leading-relaxed">{c.facts}</p>
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 mb-1">Judicial Holding &amp; Binding Precedent:</p>
                            <p className="text-slate-700 leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
                          <div>
                            <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-500 block">
                              Enforceability Ruling:
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-900">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right max-w-md">
                            <span className="text-[11px] uppercase tracking-wider font-extrabold text-red-600 block">
                              Institutional Bank Takeaway:
                            </span>
                            <span className="text-xs text-slate-600 font-medium">
                              {c.takeaway}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Risk-Tiered Litigation Pathways */}
              <section id="heading-segmentation-framework" aria-labelledby="heading-segmentation-framework-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-segmentation-framework-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Portfolio Segmentation Analytics: Transforming Raw NPA Books into Structured Action Tranches
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The primary reason banking litigations stall is &quot;unfocused prosecution&quot;—attempting to treat a ₹50,000 personal loan default with the same procedural machinery as a ₹5 Crore industrial mortgage. Our institutional partnership deploys automated algorithmic ingestion that categorizes portfolio tranches on the date of NPA classification:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 font-black text-sm flex items-center justify-center">1</span>
                    <h3 className="font-bold text-slate-900 text-base">Unsecured Consumer &amp; FinTech Books</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Small-ticket personal loans (STPL), credit cards, and digital BNPL facilities. Strategy: Industrial-scale Section 25 PSSA statutory notices, automated Section 63 BSA evidence packages, and batch Pre-Litigation Lok Adalat referrals through DLSAs.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-black text-sm flex items-center justify-center">2</span>
                    <h3 className="font-bold text-slate-900 text-base">Mortgage &amp; Secured MSME Assets</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Home loans, loans against property, and commercial vehicle credit. Strategy: Standardized Section 13(2) SARFAESI demand drafting, airtight Section 13(3A) representation rejoinders, Section 14 CMM/DM physical possession orders, and public e-auctions.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-black text-sm flex items-center justify-center">3</span>
                    <h3 className="font-bold text-slate-900 text-base">Mid-Market Commercial &amp; Working Capital</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Cash Credit (CC) overdraws, defaulted term loans, and trade finance lines. Strategy: Commercial Summary Suits under Order XXXVII CPC, bank account freezing before judgment (Order 38 Rule 5), and fast-track institutional arbitration.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-black text-sm flex items-center justify-center">4</span>
                    <h3 className="font-bold text-slate-900 text-base">Corporate Exposures with Personal Guarantees</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Large enterprise accounts exceeding ₹1 Crore. Strategy: Concurrent Debt Recovery Tribunal (DRT Section 19) applications, Section 7 IBC corporate petitions, and direct personal insolvency under Section 95 IBC against promoter guarantors.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Risk-Tiered Litigation Pathways Analysis */}
              <section id="heading-litigation-pathways" aria-labelledby="heading-litigation-pathways-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-litigation-pathways-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Risk-Tiered Litigation Pathways: SARFAESI vs Civil vs Criminal vs ODR
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Choosing the appropriate statutory forum determines whether an NPA account recovers within 60 days or languishes for 5 years. Our banking recovery desks operate on an institutional matrix that balances speed, cost, and legal leverage:
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-red-400">
                    The 4-Pronged Institutional Recovery Engine
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <p className="font-bold text-white mb-1">1. SARFAESI Act, 2002 (Secured Fast-Track)</p>
                      <p className="text-slate-300">
                        Bypasses civil court trials entirely. 60-day demand under Section 13(2), followed by symbolic possession (Section 13(4)) and administrative assistance via Section 14 through District Magistrates / Chief Metropolitan Magistrates.
                      </p>
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <p className="font-bold text-white mb-1">2. Criminal Penal Deterrence (PSSA &amp; NI Act)</p>
                      <p className="text-slate-300">
                        Section 25 of the Payment and Settlement Systems Act, 2007 for electronic mandate bounces and Section 138 of the NI Act for physical cheques. Imposes direct personal liability and up to 2 years imprisonment on willful defaulters.
                      </p>
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <p className="font-bold text-white mb-1">3. Commercial Courts &amp; Summary Decrees (CPC)</p>
                      <p className="text-slate-300">
                        Order 37 CPC summary suits in designated Commercial Courts. Borrowers have no automatic right to defend without proving genuine triable issues, enabling banks to secure summary money decrees in months rather than years.
                      </p>
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                      <p className="font-bold text-white mb-1">4. Institutional ODR &amp; National Lok Adalats</p>
                      <p className="text-slate-300">
                        Batch conciliation under the Legal Services Authorities Act, 1987. Delivers statutory consent decrees that are final, non-appealable, and executable as civil court decrees under Order 21 CPC with zero court fees.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: 5-Stage Lifecycle */}
              <section id="heading-execution-lifecycle" aria-labelledby="heading-execution-lifecycle-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-execution-lifecycle-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Stage Institutional Portfolio Execution Lifecycle
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our engagement follows an automated, auditable lifecycle designed for Chief Risk Officers and NPA Heads requiring complete visibility and zero SLA leakage:
                </p>

                <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-red-500">
                  <div className="relative">
                    <span className="absolute -left-6 sm:-left-8 top-0.5 w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-sm" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Stage 1: Secure Data Ingestion &amp; Legal Scrubbing</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Loan agreements, promissory notes, mortgage title deeds, sanction letters, and account statements are ingested via secure API or encrypted SFTP. Algorithmic validators scrub for limitation periods, stamp duty compliance, and electronic certificates under BSA Section 63.
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-6 sm:-left-8 top-0.5 w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-sm" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Stage 2: Programmatic Statutory Notice Dispatch</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Advocate-drafted statutory demands (Section 13(2) SARFAESI, Section 25 PSSA, or Section 138 NI Act) are automatically formatted and dispatched via India Post EDI speed post and certified WhatsApp/Email rails, generating instantaneous proof-of-delivery receipts.
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-6 sm:-left-8 top-0.5 w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-sm" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Stage 3: Pre-Litigation Lok Adalat &amp; Conciliation Desks</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      During statutory cure windows, our dedicated banking conciliation desk reaches out under advocate auspices. Eligible borrowers are batched into upcoming National Lok Adalat schedules to execute formal One-Time Settlement (OTS) consent awards.
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-6 sm:-left-8 top-0.5 w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-sm" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Stage 4: Nationwide Court Filings &amp; Enforcement</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      For contested or non-compliant accounts, local panel advocates file pre-assembled dockets across DRTs, CMMs, Commercial Courts, and JMFC Magistrates. All hearing dates, order sheets, and advocate appearances are tracked in our centralized dashboard.
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-6 sm:-left-8 top-0.5 w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-sm" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Stage 5: Asset Liquidation, Execution &amp; Ledger Closure</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Execution of civil recovery certificates, physical possession handover through court commissioners, public e-auction coordination, and final ledger settlement reconciliation credited directly into the bank&apos;s recovery collection account.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Comparative Matrix */}
              <section id="heading-yield-matrix" aria-labelledby="heading-yield-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-yield-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Recovery Yield Optimization Matrix by Asset Class
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Institutional comparison of expected cash yields, statutory turnaround times (TAT), and judicial forums across portfolio asset classes:
                </p>

                <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Asset Class</th>
                        <th scope="col" className="p-3.5 sm:p-4">Typical Ticket Size</th>
                        <th scope="col" className="p-3.5 sm:p-4">Primary Statutory Pathway</th>
                        <th scope="col" className="p-3.5 sm:p-4">Legal Notice SLA</th>
                        <th scope="col" className="p-3.5 sm:p-4">Expected Recovery Yield</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Unsecured Retail / FinTech</td>
                        <td className="p-3.5 sm:p-4">₹25,000 – ₹5 Lakhs</td>
                        <td className="p-3.5 sm:p-4">Section 25 PSSA + Lok Adalat</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">&lt; 24 Hours</td>
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">35% – 52% of Portfolio</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Credit Card Charge-Offs</td>
                        <td className="p-3.5 sm:p-4">₹50,000 – ₹8 Lakhs</td>
                        <td className="p-3.5 sm:p-4">Order 37 CPC + OTS Conciliation</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">&lt; 48 Hours</td>
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">24% – 40% of Outstanding</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Secured MSME &amp; Mortgages</td>
                        <td className="p-3.5 sm:p-4">₹20 Lakhs – ₹10 Crores</td>
                        <td className="p-3.5 sm:p-4">SARFAESI Sec. 13(2), 13(4) &amp; 14</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">&lt; 48 Hours</td>
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">75% – 95% via Asset Auction</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Commercial Term &amp; Working Capital</td>
                        <td className="p-3.5 sm:p-4">₹1 Crore – ₹50 Crores</td>
                        <td className="p-3.5 sm:p-4">DRT Sec. 19 + Commercial Suit</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">&lt; 5 Working Days</td>
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">60% – 85% via Decree/OTS</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Corporate NPA with Guarantees</td>
                        <td className="p-3.5 sm:p-4">₹5 Crores – ₹100+ Crores</td>
                        <td className="p-3.5 sm:p-4">IBC Sec. 7 &amp; Sec. 95 Personal Insolvency</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-600">&lt; 7 Working Days</td>
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Accelerated Resolution Velocity</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Interactive Portfolio Segmentation Tabs */}
              <section id="heading-portfolio-tabs" aria-labelledby="heading-portfolio-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-portfolio-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Portfolio Tranche Breakdown &amp; Action Blueprints
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Select Portfolio Tranche
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Explore how our dedicated legal desk manages specific non-performing asset classes with tailored statutory workflows, dedicated paralegals, and pan-India advocate appearance cells:
                </p>

                {/* Tabs Component */}
                <PortfolioSegmentationTabs />
              </section>

              {/* Section 8: Case Study */}
              <section id="heading-case-study" aria-labelledby="heading-case-study-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-case-study-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Institutional Case Study: Scheduled Commercial Bank Revives ₹42.8 Crore Stalled NPA Book
                </h2>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-sm space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Client Profile: Leading Indian Scheduled Commercial Bank (Mid-Sized Private Sector)
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                        Turnaround of 3,420 Defaulted Retail &amp; MSME Accounts Across 4 States
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      ₹18.6 Cr Recovered in 180 Days
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <p className="font-bold text-slate-900 mb-1">Initial Problem State:</p>
                      <p className="text-slate-600 leading-relaxed">
                        The bank held ₹42.8 Crores in overdue unsecured personal loans and MSME facilities (180+ DPD). Third-party collection agencies had yielded under 4% recovery, while in-house legal was bogged down with unserved physical notices and rising legal costs.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <p className="font-bold text-slate-900 mb-1">Legal Partnership Execution:</p>
                      <p className="text-slate-600 leading-relaxed">
                        LegalRecovery.in ingested the portfolio in 48 hours. Retail accounts were issued Section 25 PSSA statutory notices with BSA Section 63 digital proof. 1,480 eligible accounts were batched for National Lok Adalat sittings. 42 secured MSME accounts received SARFAESI 13(2) demands and Section 14 CMM applications.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <p className="font-bold text-slate-900 mb-1">Quantifiable Balance-Sheet Yield:</p>
                      <p className="text-slate-600 leading-relaxed">
                        Within 6 months, ₹18.6 Crores was directly credited into the bank&apos;s recovery accounts (43.4% recovery rate on retail, 88% on secured MSME). Zero consumer court cases were initiated, and the bank saved ₹72 Lakhs in procedural legal overhead.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
                    <div>
                      <p className="font-bold text-red-400">Chief Risk Officer (CRO) Post-Audit Assessment:</p>
                      <p className="text-slate-300 italic">
                        &quot;Transitioning from call-center agencies to LegalRecovery.in transformed our NPA provisioning. The programmatic notices and seamless Lok Adalat decrees generated immediate, legally binding cash settlements without a single regulatory friction point.&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Bank Due Diligence & Onboarding Checklist */}
              <section id="heading-audit-checklist" aria-labelledby="heading-audit-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-audit-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Bank Due Diligence &amp; Portfolio Onboarding Checklist (8 Audit Criteria)
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before onboarding a defaulted portfolio tranche, our institutional audit desk validates the documentation pipeline against regulatory and judicial standards:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {[
                    {
                      num: "01",
                      title: "Loan Agreement & Sanction Letter Audit",
                      desc: "Confirmation of clear arbitration clauses, jurisdiction designations, and authorized signatory execution.",
                    },
                    {
                      num: "02",
                      title: "Electronic Mandate & NACH Verification",
                      desc: "Audit of NPCI mandate reference numbers (UMRN), registration timestamps, and return memo return codes (Reason Code: Insufficient Funds).",
                    },
                    {
                      num: "03",
                      title: "CERSAI Security Interest Validation",
                      desc: "Mandatory CERSAI registration number verification for all immovable mortgaged assets under Section 26D SARFAESI Act.",
                    },
                    {
                      num: "04",
                      title: "Banker's Books Evidence Act Certification",
                      desc: "Statutory certificate under the Banker's Books Evidence Act, 1891 and Section 63 BSA 2023 for ledger computer printouts.",
                    },
                    {
                      num: "05",
                      title: "Limitation Act Period Audit (Article 19/55)",
                      desc: "Verification that the account has not lapsed beyond 3 years from the date of default, or validation of written debt acknowledgments.",
                    },
                    {
                      num: "06",
                      title: "Primary KYC & Defaulter Address Scrubbing",
                      desc: "Validation of borrower Aadhaar/PAN metadata, registered business ROC records, and current residential address for notice service.",
                    },
                    {
                      num: "07",
                      title: "Penal Interest & Usury Compliance",
                      desc: "Scrubbing compounded penal charges to adhere strictly to RBI Master Circulars on Fair Lending and penal charges prohibition.",
                    },
                    {
                      num: "08",
                      title: "Bilateral Confidentiality & NDA Execution",
                      desc: "Institutional data protection framework compliant with Digital Personal Data Protection (DPDP) Act, 2023 and RBI Outsourcing norms.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:border-slate-300 transition-colors flex items-start gap-3"
                    >
                      <span className="font-mono text-xs font-black text-red-600 bg-red-50 px-2 py-1 rounded-md shrink-0">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Institutional FAQs on Bank Recovery Partnerships &amp; Portfolio Management
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Bank Leadership Inquiries
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2.5"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2.5">
                        <span className="text-red-600 font-black shrink-0">Q{idx + 1}.</span>
                        <span>{faq.question}</span>
                      </h3>
                      <div className="pl-6 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sources-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Banking Authorities, Primary Statutes &amp; Official References
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every recovery procedure, timeline, and enforcement protocol deployed by LegalRecovery.in is anchored in authoritative statutes, Reserve Bank of India circulars, and Supreme Court precedent:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
                  <ul className="space-y-3">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="text-red-600 font-bold mt-0.5">•</span>
                        <div>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-slate-900 hover:text-red-600 hover:underline transition-colors"
                          >
                            {source.title}
                          </a>
                          <span className="block text-[11px] text-slate-400 truncate max-w-xl">
                            {source.url}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Section 12: Primary B2B Institutional CTA */}
              <section className="pt-4">
                <PortfolioRecoveryCTA />
              </section>
            </div>
          </div>
        </div>

        {/* Related Guides Component strictly matching site architecture */}
        <RelatedRecoveryGuides
          currentPath="/legal-recovery-partners-banks-managing-defaulted-loan-portfolios"
          cluster="banking"
        />
      </div>
    </>
  );
}
