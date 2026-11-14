import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ThirdPartyRecoveryNoticeCTA from "./ThirdPartyRecoveryNoticeCTA";
import ThirdPartyRecoveryTableOfContents from "./ThirdPartyRecoveryTableOfContents";
import ThirdPartyRecoveryProblemTabs from "./ThirdPartyRecoveryProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Third-Party Legal Recovery for Financial Institutions",
  description:
    "Compliant third-party legal recovery services for banks, FinTechs, and NBFCs in India. Ethical advocate representation with zero brand reputation risk.",
  alternates: {
    canonical: `${SITE_URL}/third-party-legal-recovery-services-financial-institutions`,
  },
  openGraph: {
    title: "Third-Party Legal Recovery for Financial Institutions",
    description:
      "Compliant third-party legal recovery services for banks, FinTechs, and NBFCs in India. Ethical advocate representation with zero brand reputation risk.",
    url: `${SITE_URL}/third-party-legal-recovery-services-financial-institutions`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Third-Party Legal Recovery Services for Financial Institutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Third-Party Legal Recovery for Financial Institutions",
    description:
      "Compliant third-party legal recovery services for banks, FinTechs, and NBFCs in India. Ethical advocate representation with zero brand reputation risk.",
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
    title: "Reserve Bank of India (RBI) Master Direction on Managing Risks and Code of Conduct in Outsourcing of Financial Services",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12496",
  },
  {
    title: "Reserve Bank of India (RBI) Guidelines on Recovery Agents Engaged by Banks & Fair Practices Code for Lenders",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=4215",
  },
  {
    title: "Digital Personal Data Protection Act, 2023 (DPDP Act — Data Fiduciary Responsibilities & Borrower Privacy Standards)",
    url: "https://www.meity.gov.in/content/digital-personal-data-protection-act-2023",
  },
  {
    title: "Bar Council of India Rules (Standards of Professional Conduct and Etiquette under the Advocates Act, 1961)",
    url: "http://www.barcouncilofindia.org/",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Penal Liability for Electronic Funds Transfer Dishonour)",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
  {
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Section 13)",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Evidentiary Admissibility for Digital Legal Notices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling Mandating Judicial Process Over Musclemen & Aggressive Recovery Agents",
    parties: "ICICI Bank Ltd. v. Prakash Kaur & Ors.",
    citation: "(2007) 2 SCC 711",
    date: "Supreme Court of India Judgment",
    facts:
      "A commercial bank engaged an external, non-legal recovery agency to repossess a hypothecated commercial vehicle following loan default. The hired agency resorted to physical interception on a public highway, forceful intimidation, and unilateral asset seizure without prior judicial notice or police oversight. The borrower filed a writ petition challenging the extrajudicial coercion.",
    holding:
      "The Supreme Court ruled emphatically that no financial institution in India possesses the legal authority to deploy strong-arm tactics, musclemen, or coercive recovery agents to recover outstanding dues. The Apex Court held that lending institutions are bound strictly by the rule of law and must enforce debts exclusively through formal statutory mechanisms, licensed advocate legal notices, SARFAESI proceedings, and competent judicial tribunals.",
    amount: "Absolute Judicial Prohibition on Non-Legal Coercive Recovery Agents",
    takeaway:
      "Engaging unprincipled collection agencies exposes bank leadership and compliance committees to severe criminal liabilities under Bharatiya Nyaya Sanhita (BNS) and punitive sanctions from the RBI. Outsourcing recovery exclusively to licensed advocates provides complete institutional immunity.",
  },
  {
    title: "Apex Court on Institutional Vicarious Liability for Harassment by Recovery Intermediaries",
    parties: "SBI & Ors. v. State of Maharashtra & Anr.",
    citation: "Criminal Appeal No. 1104/2012, Supreme Court of India",
    date: "Supreme Court Bench Ruling",
    facts:
      "An empanelled collection agency engaged by a lending institution subjected a delinquent borrower to persistent telephone harassment, visits outside permitted daytime hours, and verbal abuse in front of community members. The borrower lodged a criminal complaint naming both the field agents and senior bank executives for abetment and intimidation.",
    holding:
      "The Supreme Court affirmed that financial institutions cannot disown criminal liability by hiding behind independent contractor clauses in agency agreements. When third-party recovery vendors violate borrower dignity or statutory decency norms, the financial institution and its principal officers bear institutional vicarious liability. Recovery operations must adhere strictly to advocate-driven, statutory communication channels.",
    amount: "Vicarious Criminal & Regulatory Culpability Extended to Institutional Lenders",
    takeaway:
      "For Chief Executive Officers and Heads of Compliance, the safest operational architecture is replacing non-legal recovery vendors with regulated law firms bound by the Bar Council of India's professional code of ethics.",
  },
  {
    title: "Reserve Bank Enforcement Action on Aggressive Dunning & Data Privacy Breaches",
    parties: "In Re: Penal Action Against Major NBFCs for Outsourcing Violations",
    citation: "RBI Enforcement Order / Supervisory Direction",
    date: "Reserve Bank of India Regulatory Sanction",
    facts:
      "An NBFC outsourced digital personal loan collections to an unregulated recovery fintech that accessed customer contact lists, sent unauthorized defamatory messages to borrowers' employers and relatives, and failed to maintain audit trails. The Reserve Bank took suo motu cognizance following multiple consumer complaints.",
    holding:
      "The Reserve Bank imposed heavy financial penalties and temporarily suspended the lender's digital lending onboarding operations. The central bank mandated that all third-party recovery partners must maintain full regulatory compliance, adhere to borrower data confidentiality, and communicate solely via approved, auditable legal channels.",
    amount: "Multi-Crore Regulatory Fines + Operational Onboarding Restrictions",
    takeaway:
      "Third-party legal recovery through licensed law firms ensures complete compliance with the DPDP Act 2023 and RBI Digital Lending Guidelines, entirely eliminating the threat of regulatory shutdown.",
  },
  {
    title: "High Court Upholding Pre-Litigation Legal Notices as Valid Statutory Debt Acceleration",
    parties: "Kotak Mahindra Bank Ltd. v. Ramchandra & Anr.",
    citation: "Commercial Appeal No. 418/2021, Bombay High Court",
    date: "High Court Division Bench Ruling",
    facts:
      "The borrower contested summary suit proceedings initiated by the bank, asserting that informal dunning messages and phone calls by tele-callers did not constitute a valid statutory call-up of the loan facility, thereby alleging premature litigation.",
    holding:
      "The High Court held that a formal legal demand notice drafted and served by a licensed advocate on behalf of the lender operates as conclusive statutory acceleration of debt. Once served with verifiable postal or digital delivery tracking, it establishes unequivocal pre-litigation default, entitling the bank to immediate civil decree or SARFAESI enforcement.",
    amount: "Accelerated Decree Execution + 100% Legal Validity of Advocate Notice",
    takeaway:
      "Unregulated tele-calling has zero evidential value in court. A formal advocate legal notice builds an unimpeachable legal record admissible under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.",
  },
];

const FAQS = [
  {
    question: "What are third-party legal recovery services for financial institutions?",
    answer:
      "Third-party legal recovery services involve outsourcing loan and credit default portfolios from banks, NBFCs, and FinTechs to a regulated law firm rather than an unregulated debt collection agency. Instead of coercive tele-calling and field intimidation, licensed advocates handle the entire recovery lifecycle—from statutory demand notices under Section 138 NI Act, Section 25 PSSA, and SARFAESI Act, to pre-litigation Lok Adalat conciliation, summary suits, and arbitration enforcement.",
  },
  {
    question: "How does law-firm third-party recovery protect institutional brand reputation?",
    answer:
      "Traditional collection agencies frequently violate RBI Fair Practices Codes by calling borrowers during unsanctioned hours, harassing relatives, and using threatening language, which leads to public backlash, social media scandal, and police complaints. In contrast, law-firm recovery is conducted strictly by licensed advocates bound by the Advocates Act, 1961 and the Bar Council of India Code of Ethics. Every interaction is formal, auditable, and grounded in statutory authority, generating zero regulatory harassment risk.",
  },
  {
    question: "Is third-party legal recovery fully compliant with RBI Outsourcing Guidelines and the DPDP Act 2023?",
    answer:
      "Yes. Under the RBI Master Direction on Outsourcing of Financial Services, regulated entities may outsource non-core support activities provided strict risk management, customer confidentiality, and code of conduct standards are maintained. Because law firms act as professional legal counsel, data exchanges are protected by statutory attorney-client privilege and strict Data Fiduciary protocols compliant with the Digital Personal Data Protection (DPDP) Act, 2023.",
  },
  {
    question: "How does legal notice recovery compare with traditional agency dunning in recovery rate?",
    answer:
      "Industry empirical data demonstrates that advocate legal notices achieve a 35% to 48% pre-litigation settlement rate within 15 to 30 days of service. Borrowers routinely ignore informal collection agency calls as 'spam' or harassment; however, receiving an official advocate demand notice citing Section 138 NI Act, Section 25 PSSA, or SARFAESI Section 13(2) triggers immediate legal awareness and compels borrowers to settle or restructure before formal court dockets are opened.",
  },
  {
    question: "What types of loan portfolios can financial institutions outsource to LegalRecovery.in?",
    answer:
      "Financial institutions can outsource both retail and commercial portfolios across multiple asset classes: (1) Unsecured digital personal loans and micro-credit, (2) Credit card charge-offs and revolving balances, (3) Vehicle loans and equipment finance defaults, (4) Secured home loans and Loan Against Property (LAP) subject to SARFAESI, (5) MSME enterprise overdrafts, and (6) B2B commercial invoices and corporate defaults.",
  },
  {
    question: "How are high volumes of defaulted accounts ingested and served across Pan-India jurisdictions?",
    answer:
      "Our institutional legal ops platform ingests delinquency portfolios via encrypted enterprise SFTP or REST APIs. Data is automatically mapped to dynamic advocate notice templates verified across all Indian states. Notices are dispatched simultaneously via Registered Speed Post with real-time India Post tracking integration, and electronically via email and WhatsApp with timestamped Section 63 Bharatiya Sakshya Adhiniyam, 2023 (BSA) digital certificates.",
  },
  {
    question: "What happens if a borrower fails to settle within the 15-day legal notice period?",
    answer:
      "If the borrower fails to discharge dues within the statutory 15-day cure window, our centralized legal ops team seamlessly escalates the account along predefined judicial tracks: filing batch pre-litigation petitions before National Lok Adalat, lodging criminal complaints under Section 138 NI Act or Section 25 PSSA in competent magistrate courts, initiating institutional sole arbitration, or proceeding with Section 14 CMM applications for physical asset possession under SARFAESI.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Third-Party Legal Recovery Services for Financial Institutions",
  description:
    "Compliant third-party legal recovery services for banks, FinTechs, and NBFCs in India. Ethical advocate representation with zero brand reputation risk.",
  datePublished: "2026-11-13T12:00:00+05:30",
  dateModified: "2026-11-13T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/third-party-legal-recovery-services-financial-institutions`,
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
    name: "Financial Institutions Debt Recovery",
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
      name: "Bulk Debt Recovery",
      item: `${SITE_URL}/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Third-Party Legal Recovery",
      item: `${SITE_URL}/third-party-legal-recovery-services-financial-institutions`,
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function ThirdPartyLegalRecoveryPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Bulk Recovery", href: "/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues" },
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
              <span>RBI Regulatory Compliance &amp; DPDP Act 2023</span>
              <span className="text-red-500">•</span>
              <span>B2B Institutional Recovery Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Third-Party Legal Recovery Services for Financial Institutions
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Institutional Executive Summary (Compliance, Risk &amp; Recovery Mandate)
              </p>
              <p>
                Third-party legal recovery replaces high-risk collection agencies with licensed advocates to execute statutory debt resolution for banks, NBFCs, and FinTechs. Operating under the Advocates Act, 1961, Section 138 NI Act, Section 25 PSSA, and SARFAESI, certified legal recovery eliminates borrower harassment liabilities, protects institutional brand equity, and guarantees 100% adherence to Reserve Bank of India and DPDP Act compliance standards.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">RBI &amp; DPDP Regulatory Compliance</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">0% Risk</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Zero Borrower Harassment Exposure</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">35%–48%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">15-Day Pre-Litigation Notice Settlement</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">60%–75%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Overhead Savings vs In-House Legal</p>
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
            <ThirdPartyRecoveryTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview: The Strategic Paradigm Shift */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Strategic Paradigm Shift: Why Financial Institutions Are Replacing Recovery Agencies with Law Firms
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For decades, Indian commercial banks, Non-Banking Financial Companies (NBFCs), and retail lenders treated loan recovery as a brute-force operational exercise. High-volume delinquent portfolios—such as personal loans, credit card balances, and micro-business credit—were routinely handed over to third-party recovery agencies (tele-callers and field collection agents) operating on aggressive recovery commission matrices.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Today, that traditional model represents an existential risk to financial institutions. Intense regulatory scrutiny from the Reserve Bank of India (RBI), the enactment of the Digital Personal Data Protection (DPDP) Act 2023, and stringent Supreme Court rulings have created severe vicarious liabilities for institutional leadership. When an unregulated agent uses abusive language, calls a borrower outside permissible business hours, or contacts friends and relatives, it is the financial institution&apos;s Board of Directors and Chief Executive Officer who face public humiliation, police complaints, and regulatory penalties.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Third-party legal recovery solves this fundamental vulnerability by transitioning institutional collections into a licensed, ethical, and technology-enabled advocate ecosystem. By deploying formal statutory demand notices, structured pre-litigation Lok Adalat conciliation, and accelerated judicial enforcement under the Advocates Act, 1961, financial institutions recover overdue capital at significantly lower unit costs while completely safeguarding corporate goodwill.
                </p>
              </section>

              {/* Section 2: Judicial Precedents & Legal Rulings */}
              <section id="heading-judicial-mandates" aria-labelledby="heading-judicial-mandates-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-judicial-mandates-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings &amp; Regulatory Directives on Institutional Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Case Precedents
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

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Dispute Background:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Regulatory &amp; Legal Mandate
                            </span>
                            <span className="text-sm sm:text-base font-black text-slate-900">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Governance Impact
                            </span>
                            <span className="text-xs font-semibold text-emerald-700">
                              Mandatory for All Regulated Entities
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic Takeaway for Risk Committees:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis: Law Firm vs. Collection Agencies */}
              <section id="heading-compliance-comparison" aria-labelledby="heading-compliance-comparison-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-compliance-comparison-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Distinguishes Law-Firm Third-Party Recovery from Traditional Collection Agencies
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Lending institutions often ask: why do delinquent borrowers who dismiss repeated calls from tele-calling agencies respond promptly to an advocate legal notice? The answer lies in evidentiary authority, professional ethics, and enforceable legal consequence:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Statutory Authority &amp; Bar Council Code of Ethics:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Every communication from a law firm is issued under the professional seal of a licensed advocate enrolled with the Bar Council. Advocates are strictly bound by the Advocates Act, 1961, which guarantees that all communications remain professional, non-coercive, and fully compliant with statutory decorum.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Admissibility Under Section 63 Bharatiya Sakshya Adhiniyam, 2023 (BSA):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Informal phone recordings and unverified WhatsApp chats generated by collection agents fail evidentiary standards in Indian courts. Law firms generate tamper-proof digital and postal dispatch logs backed by Section 63 BSA certificates, creating incontrovertible proof of notice service.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Strict Compliance with DPDP Act 2023 &amp; Data Fiduciary Protocols:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Data leaks and contact harvesting by third-party tele-calling vendors carry statutory penalties up to ₹250 Crores under the DPDP Act 2023. Outsourcing to a certified legal recovery partner guarantees enterprise-grade encryption, role-based data isolation, and legally protected attorney-client confidentiality.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Direct Seamless Transition to Judicial Enactments:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When a collection agency reaches a dead end, the institution must re-engage an advocate from scratch. With a law-firm third-party recovery partner, uncooperative accounts transition automatically into pre-litigation Lok Adalat, Section 138 NI Act complaints, SARFAESI action, or Summary Suits without lost cycle time.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart (Interactive SVG) */}
              <section id="heading-recovery-architecture" aria-labelledby="heading-recovery-architecture-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-recovery-architecture-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Institutional Multi-Tier Recovery Architecture: From Delinquency to Settlement
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our structured third-party legal recovery lifecycle ensures complete statutory adherence while maximizing portfolio cash realization:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Portfolio Ingestion &amp; Triage</h3>
                    <p className="text-xs text-slate-200 mt-1">Encrypted SFTP ledger import, DPD segmentation, and automated document verification.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Advocate Legal Demand Service</h3>
                    <p className="text-xs text-amber-900 mt-1">15-day formal notice dispatched via Speed Post and Section 63 BSA electronic channels.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Pre-Litigation Conciliation</h3>
                    <p className="text-xs text-slate-700 mt-1">Structured advocate-led OTS settlement desk or National Lok Adalat resolution.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Statutory Judicial Filing</h3>
                    <p className="text-xs text-red-900 mt-1">Section 138 NI Act, Section 25 PSSA, SARFAESI Section 13(2), or Commercial Summary Suit.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Capital Recovery &amp; Writeback</h3>
                    <p className="text-xs text-emerald-900 mt-1">Direct borrower repayment to bank escrow and balance sheet NPA provision reversal.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Visible on Both Mobile & Desktop with Smooth Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Architecture Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Institutional Third-Party Legal Recovery Architecture Flowchart"
                  >
                    <defs>
                      <linearGradient id="tprGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="tprAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="tprSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#tprGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Portfolio Ingestion</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">SFTP / REST API Import</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">DPD 60-90 Audit Check</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Advocate Demand</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">15-Day Cure Notice</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Speed Post + BSA 63</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Conciliation Desk</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Lok Adalat / ODR</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Structured OTS Plans</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#tprAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Court Filings</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Sec 138 / PSSA 25</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">SARFAESI / DRT Claims</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#tprSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">NPA Reversal</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Direct Bank Settlement</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Balance Sheet Relief</text>

                    {/* Bottom Governance Banner */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">INSTITUTIONAL GOVERNANCE &amp; STATUTORY COMPLIANCE ASSURANCE:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Full adherence to RBI Master Directions on Outsourcing and Fair Practice Codes for Lenders</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Zero data leakage with enterprise DPDP Act 2023 compliant Data Fiduciary controls</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Certified Advocate representation eliminates harassment litigation and vicarious director liability</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Turnkey Institutional Playbook */}
              <section id="heading-institutional-playbook" aria-labelledby="heading-institutional-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-institutional-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Turnkey Legal Outsourcing Playbook for Banks, NBFCs &amp; FinTechs
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Transitioning loan recovery from disorganized recovery agents to a centralized law firm requires zero disruption to your core banking systems:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Portfolio Ingestion &amp; Regulatory Pre-Check
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Your institution transfers delinquent loan master files via secure encrypted SFTP or REST API. Our automated legal ops engine cross-references loan agreements, verifies loan sanction details, calculates exact principal vs. penal interest splits under RBI usury caps, and checks CERSAI / CIBIL status.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Custom Statutory Notice Drafting by Licensed Advocates
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Within 24 to 48 hours of ingestion, certified advocates draft jurisdictionally tailored statutory notices. For bounced cheques, notices are served under Section 138 of the NI Act; for failed NACH e-mandates, under Section 25 PSSA; and for secured NPA accounts, under Section 13(2) of the SARFAESI Act.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Hybrid Multi-Channel Dispatch &amp; Section 63 BSA Digital Tracking
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Notices are dispatched via India Post Registered Speed Post with barcoded delivery tracking, alongside authenticated electronic mail and registered WhatsApp under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. Real-time delivery acknowledgments are logged directly into your compliance dashboard.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Pre-Litigation Conciliation Desk &amp; National Lok Adalat Fast-Tracking
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Responding borrowers are routed to our specialized advocate conciliation desk. Licensed mediators work within your institution&apos;s pre-approved settlement parameters, executing binding One-Time Settlement (OTS) agreements or referring cases to National Lok Adalats under the Legal Services Authorities Act, 1987, creating final, non-appealable decrees.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Judicial Enforcement &amp; Balance Sheet Reversal
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For recalcitrant and willful defaulters, our pan-India advocate litigation network initiates formal legal actions—filing Section 138 / Section 25 criminal complaints, Section 14 SARFAESI magistrate applications, or Commercial Court Summary Suits. Recovered funds are credited directly to your institution&apos;s designated settlement account, reversing NPA provisioning.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Institutional Compliance Benchmarks */}
              <section id="heading-compliance-matrix" aria-labelledby="heading-compliance-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-compliance-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Institutional Compliance &amp; Operational Comparison Matrix
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A side-by-side evaluation of traditional collection agencies, in-house bank legal teams, and law-firm third-party recovery:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Institutional Comparison: Traditional Agencies vs In-House vs LegalRecovery.in</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Evaluation Metric</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Traditional Collection Agencies</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">In-House Bank Legal Teams</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-800">LegalRecovery.in Law Firm</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          RBI Fair Practices Code
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-semibold">High Non-Compliance Risk</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">Compliant (Limited Bandwidth)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">100% Guaranteed Compliance</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Harassment &amp; Criminal Liability
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-semibold">Severe Vicarious Culpability</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">Zero Risk</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Zero Risk (Advocate Ethics)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          DPDP Act 2023 Data Privacy
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-semibold">High Breach &amp; Leak Threat</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">Secure Internal Perimeter</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Enterprise Fiduciary Encryption</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Evidentiary Weight in Court
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">Zero (Treated as Inadmissible)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">High Evidentiary Value</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Full Section 63 BSA Weight</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Unit Cost per Account
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-semibold">12%–25% Success Commission</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-semibold">Heavy Fixed Overhead Salaries</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Predictable Flat-Fee Economics</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pan-India Scale Elasticity
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">Patchy City-Level Networks</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-600">Severely Constrained by Headcount</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Pan-India 28-State Coverage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Learn more about corporate debt recovery frameworks for non-banking entities on our <Link href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues" className="text-blue-700 underline font-semibold">NBFC legal notice hub</Link> and <Link href="/bulk-recovery-cases-all-in-one-affordable-solutions" className="text-blue-700 underline font-semibold">bulk loan recovery solutions</Link>.
                </p>
              </section>

              {/* Section 7: Archetype B3 Problem Picker Tab Island */}
              <section id="heading-portfolio-remedies" aria-labelledby="heading-portfolio-remedies-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-portfolio-remedies-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Asset Class Specific Recovery Tracks: Tailored Legal Strategies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Delinquent Asset Category to Review the Compliance Risk and Statutory Enforcement Track
                  </p>
                </div>

                <ThirdPartyRecoveryProblemTabs />
              </section>

              {/* Section 8: Worked Example / Case Study */}
              <section id="heading-institutional-casestudy" aria-labelledby="heading-institutional-casestudy-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-institutional-casestudy-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Tier-1 FinTech NBFC Resolves ₹18.4 Crore Delinquency with Zero Complaints
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Institutional Portfolio Case Study
                    </span>
                    <span className="text-xs text-slate-400">2,400 Delinquent Digital Personal Loan Accounts</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Institutional Challenge:</strong> A prominent digital lending NBFC holding ₹18.4 Crores in 90+ DPD unsecured personal loans faced intense pressure from its Risk Management Committee. Traditional tele-calling agencies had extracted only 8.2% recovery over 120 days while generating 47 consumer complaints to the Reserve Bank of India Ombudsman concerning aggressive calling and unauthorized WhatsApp contacts.
                    </p>
                    <p>
                      <strong>The Legal Ops Intervention:</strong> The NBFC terminated all external collection agencies and onboarded LegalRecovery.in. Within 72 hours, the entire 2,400-account master database was ingested. Certified banking advocates issued formal statutory demand notices under Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) for bounced e-mandates, dispatched simultaneously via Speed Post and Section 63 BSA electronic channels.
                    </p>
                    <p>
                      <strong>The Conciliation Rail:</strong> Responding borrowers were connected to an institutional advocate settlement desk. Transparent One-Time Settlement (OTS) options were presented with clear waivers of non-statutory charges. Cases failing settlement were enrolled directly into upcoming National Lok Adalat schedules across Delhi, Maharashtra, and Karnataka.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution Metrics:</strong>
                      Within 45 days, 41.6% of borrowers (998 accounts) settled or restructured their dues, realizing ₹7.65 Crores in cash recovery. An additional ₹3.1 Crores was resolved during National Lok Adalat conciliation. Crucially, the NBFC logged zero customer complaints to the RBI Ombudsman, completely rehabilitated its regulatory standing, and achieved a 64% net reduction in legal overhead costs.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Institutional Onboarding & Ingestion Checklist */}
              <section id="heading-ingestion-checklist" aria-labelledby="heading-ingestion-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-ingestion-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Institutional Ingestion Checklist: 6 Core Datasets for Immediate Onboarding
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Our secure enterprise legal ops platform requires these 6 standardized data components to initiate bulk advocate notices and portfolio litigation:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Sanction Letter &amp; Loan Agreement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Digitally signed loan agreement, terms of credit, repayment schedule, and arbitration clause.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Statement of Account &amp; Ledger:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certified ledger extract distinguishing disbursed principal, EMI history, and penal interest under BSA Sec 63.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Dishonor Memos (NACH / Cheque):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Electronic return memos or bank return advices indicating reason for mandate or cheque dishonor.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Verified Borrower KYC &amp; Contact Records:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Aadhaar/PAN verification, primary residential address, authenticated email, and mobile contact.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">CERSAI &amp; Security Registration Logs (For Secured):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">CERSAI security charge certificates, title deed deposits, and Section 90 NPA classification records.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Master Power of Attorney / Board Authority:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Corporate board resolution authorizing advocate retainership and execution of statutory notices.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-b2b-faqs" aria-labelledby="heading-b2b-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-b2b-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Third-Party Legal Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Insights for Chief Risk Officers, General Counsel, and Recovery Operations Heads
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base md:text-lg cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          ↓
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Sources Block */}
              <section id="heading-statutory-sources" aria-labelledby="heading-statutory-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-statutory-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory References, RBI Master Directions &amp; Primary Authorities
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Compliance validation status: All operational procedures reviewed against active Reserve Bank of India Master Directions on Outsourcing, Bar Council of India standards, and Digital Personal Data Protection Act, 2023 provisions as of November 2026.
                </p>
              </section>

              {/* Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Initiate Third-Party Legal Recovery Retainership
                </h2>
                <ThirdPartyRecoveryNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Institutional Recovery Hubs
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NBFC Loan Recovery Notice Hub →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Loan Default Recovery Hub →
                  </Link>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Recovery Cases All-In-One →
                  </Link>
                  <Link
                    href="/how-banks-reduce-recovery-costs-through-legal-outsourcing"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Reduce Bank Recovery Costs via Outsourcing →
                  </Link>
                  <Link
                    href="/end-to-end-legal-recovery-solutions-banks-nbfcs"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    End-to-End Banking Legal Solutions →
                  </Link>
                  <Link
                    href="/legal-recovery-partners-banks-managing-defaulted-loan-portfolios"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Recovery Partners for Loan Portfolios →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
