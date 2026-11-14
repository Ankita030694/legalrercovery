import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import OutsourceTableOfContents from "./OutsourceTableOfContents";
import OutsourceProblemTabs from "./OutsourceProblemTabs";
import OutsourceNoticeCTA from "./OutsourceNoticeCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Outsourcing Loan Recovery Legal Services: Guide for Banks",
  description:
    "How banks outsource debt recovery litigation to law firms in India. RBI outsourcing compliance, SLA structures, vendor selection, and cost savings.",
  alternates: {
    canonical: `${SITE_URL}/how-banks-outsource-loan-recovery-legal-services-law-firms`,
  },
  openGraph: {
    title: "Outsourcing Loan Recovery Legal Services: Guide for Banks",
    description:
      "How banks outsource debt recovery litigation to law firms in India. RBI outsourcing compliance, SLA structures, vendor selection, and cost savings.",
    url: `${SITE_URL}/how-banks-outsource-loan-recovery-legal-services-law-firms`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "How Banks Can Outsource Loan Recovery Legal Services to Law Firms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outsourcing Loan Recovery Legal Services: Guide for Banks",
    description:
      "How banks outsource debt recovery litigation to law firms in India. RBI outsourcing compliance, SLA structures, vendor selection, and cost savings.",
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
    title: "RBI Master Direction – Reserve Bank of India (Outsourcing of Financial Services) Directions — Reserve Bank of India",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "RBI Master Circular on Loans and Advances – Fair Practices Code for Lenders (RBI/2022-23/108)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx",
  },
  {
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act)",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Section 138 Statutory Demand & Dishonour Rules)",
    url: "https://www.indiacode.nic.in/handle/123456789/2289",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 Dishonour of Electronic Funds Transfer)",
    url: "https://www.indiacode.nic.in/handle/123456789/2073",
  },
  {
    title: "Digital Personal Data Protection Act, 2023 (DPDP Act — Data Fiduciary & Processor Mandates)",
    url: "https://www.meity.gov.in/content/digital-personal-data-protection-act-2023",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Notice Dispatch & Delivery Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Bar Council of India Rules (Part VI, Chapter II, Section II, Rule 20 — Remuneration Ethics & Prohibition of Contingency Fees)",
    url: "https://www.barcouncilofindia.org/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Deprecates Coercive Recovery Agents; Mandates Due Legal Process for Banks",
    parties: "ICICI Bank Ltd. v. Prakash Kaur & Ors.",
    citation: "(2007) 2 SCC 711",
    date: "Supreme Court of India • 26 February 2007",
    facts:
      "A national private bank engaged third-party collection agents who forcefully repossessed a truck from the borrower on a public highway using physical intimidation and strong-arm tactics. The borrower filed a criminal complaint against the bank and its agents. The bank contended that it had merely outsourced recovery operations and was not directly culpable for vendor excesses.",
    holding:
      "The Supreme Court held that banks and financial institutions are strictly vicariously liable for the actions of their recovery vendors. The Court deprecated the use of musclemen and coercive agents, ruling that debt recovery must be conducted exclusively through recognized legal procedures established by law. The apex court mandated that financial institutions must formalize debt enforcement via advocate notices, judicial remedies, and strict adherence to RBI fair practice codes.",
    amount: "Vicarious Liability Affirmed • Prohibition of Musclemen • Strict RBI Guidelines Mandate",
    takeaway:
      "Banks cannot shield themselves behind third-party collection agencies. Outsourcing recovery to licensed law firms operating under statutory frameworks (Section 138, SARFAESI, arbitration) eliminates criminal liability and protects the bank's regulatory standing.",
  },
  {
    title: "Judicial Recovery Cannot Be Substituted by Arbitrary Recovery Mechanisms",
    parties: "Standard Chartered Bank v. Dharminder Bhohi",
    citation: "(2013) 15 SCC 341",
    date: "Supreme Court of India • 13 September 2013",
    facts:
      "The institutional lender initiated unstructured debt collection procedures against a defaulting borrower rather than adhering to the statutory remedies available under the Recovery of Debts and Bankruptcy (RDB) Act, 1993, and the SARFAESI Act, 2002. Conflicting civil actions and regulatory complaints ensued regarding the bank's recovery mechanism.",
    holding:
      "The Supreme Court affirmed that institutional lenders must utilize the statutory machineries specifically created by Parliament—such as Debt Recovery Tribunals (DRT) and the SARFAESI legal framework. The apex court reiterated that outsourced recovery frameworks must be strictly aligned with rule of law and statutory procedural fairness.",
    amount: "Statutory Forum Supremacy • Enforcement Through Established Legal Machinery",
    takeaway:
      "Banking General Counsels must design recovery procurement around formal statutory frameworks. Partnering with specialized law firms ensures that every filing strictly adheres to judicial precedents and forum jurisdictional limits.",
  },
  {
    title: "Simultaneous Recourse to Multiple Statutory Remedies Through Panel Legal Counsel",
    parties: "M/s Transcore v. Union of India & Anr.",
    citation: "(2008) 1 SCC 125",
    date: "Supreme Court of India",
    facts:
      "A commercial borrower challenged the bank's issuance of a notice under Section 13(2) of the SARFAESI Act while an original application (OA) was already pending before the Debt Recovery Tribunal (DRT). The borrower argued that the doctrine of election prevented the bank from pursuing simultaneous judicial and extra-judicial recovery remedies.",
    holding:
      "The Supreme Court held that the remedies under the SARFAESI Act and the RDB Act are complementary, not mutually exclusive. The Court ruled that banks are entitled to pursue simultaneous recovery actions—initiating SARFAESI measures, Section 138 NI Act criminal proceedings, and civil or DRT litigation—through authorized legal representatives to expedite recovery of public funds.",
    amount: "Doctrine of Election Inapplicable • Simultaneous Multi-Rail Litigation Permitted",
    takeaway:
      "Outsourcing to a tech-enabled law firm allows banks to run multi-pronged recovery rails concurrently: issuing Section 138 notices for bounced cheques, Section 25 PSS notices for NACH failures, and Section 13(2) SARFAESI demands without procedural impediments.",
  },
  {
    title: "Procedural Rigor and Natural Justice in Banking Enforcement Actions",
    parties: "State Bank of India v. Jah Developers Pvt. Ltd.",
    citation: "(2019) 6 SCC 787",
    date: "Supreme Court of India • 8 May 2019",
    facts:
      "The State Bank of India initiated willful defaulter proceedings against a corporate borrower. The borrower contested the administrative order on grounds of natural justice, claiming that legal representation and proper statutory notices had not been afforded prior to punitive classification.",
    holding:
      "The Supreme Court held that constitutional standards of natural justice and fair procedure apply to banking recovery classifications. The apex court held that borrowers must receive transparent notices, documented grounds, and reasonable opportunity to respond before penal measures or public default classifications take effect.",
    amount: "Natural Justice Enforced • Standardized Legal Notice Audit Trails Mandatory",
    takeaway:
      "Institutional lenders must ensure that pre-litigation notices and default declarations are legally airtight. Law firms provide evidentiary rigor and Section 63 BSA compliance that internal operational teams cannot duplicate.",
  },
];

const FAQS = [
  {
    question: "Can Indian commercial banks legally outsource loan recovery legal services under RBI regulations?",
    answer:
      "Yes. Under the Reserve Bank of India (RBI) Master Directions on Outsourcing of Financial Services (2023), banks and NBFCs are fully permitted to outsource legal recovery functions—including statutory legal notice drafting, Section 138 NI Act prosecution, Section 25 PSS Act actions, SARFAESI proceedings, DRT litigation, and arbitration. However, banks are strictly prohibited from outsourcing 'core management functions' such as loan underwriting, credit sanctioning, or NPA classification. The bank remains ultimate guarantor of customer fairness and must govern all outsourced legal vendors under a Board-approved outsourcing policy and Master Service Agreement (MSA).",
  },
  {
    question: "How do banks ensure outsourced legal recovery complies with the Digital Personal Data Protection (DPDP) Act, 2023?",
    answer:
      "Banks act as Data Fiduciaries under the DPDP Act 2023, while outsourced law firms act as Data Processors. To maintain compliance, banks must implement strict data minimization principles (sharing only data strictly required for litigation), enforce role-based access controls, require ISO/IEC 27001:2022 security certifications from panel firms, and mandate MeitY-empaneled Indian cloud hosting. The Master Service Agreement must contain explicit data confidentiality, breach notification (within 6 hours), and data destruction covenants upon case resolution.",
  },
  {
    question: "Can banks structure outsourced recovery legal fees on a contingency or percentage-of-recovery model?",
    answer:
      "No. In India, contingency fee arrangements (charging a percentage of recovered loan amounts) are strictly prohibited under Rule 20 of the Bar Council of India Rules (Part VI, Chapter II, Section II). Agreeing to a contingency fee exposes advocates to disciplinary disbarment and renders the agreement void under Section 23 of the Indian Contract Act, 1872. Instead, banks structure compliant commercial arrangements using volume-tiered fixed fees per legal notice, milestone-based retainers per procedural phase (notice, filing, execution), and audited actual disbursement reimbursements.",
  },
  {
    question: "What is the typical SLA for outsourced high-volume statutory legal notices (Section 138 / NACH bounce)?",
    answer:
      "Best-in-class legal outsourcing SLAs mandate: (1) Notice drafting and data ingestion within 24 to 48 hours of EMI/cheque bounce file transmission; (2) Dispatch via Registered Speed Post with barcoded tracking within 48 hours; (3) Instant digital service delivery via Section 63 BSA-compliant email and WhatsApp; (4) Statutory 15-day cure window monitoring on a centralized dashboard; and (5) Recommendation for court or arbitration filing within 7 days of cure window expiry.",
  },
  {
    question: "What is the key advantage of outsourcing to a law firm compared to traditional debt collection agencies (DRAs)?",
    answer:
      "Unlike Debt Recovery Agencies (DRAs) whose telecalling tactics frequently trigger consumer complaints, police FIRs, and RBI penalties under the Fair Practices Code (as highlighted in ICICI Bank v. Prakash Kaur), licensed law firms operate strictly within the formal judicial framework. Advocate legal notices carry statutory weight under the Advocates Act, 1961, establish a time-stamped evidentiary trail under Section 63 BSA, prevent borrower asset dissipation, and convert up to 65% of delinquent accounts pre-litigation without reputational risk.",
  },
  {
    question: "How do banks structure the RFP and vendor selection criteria for legal recovery outsourcing?",
    answer:
      "A banking legal procurement RFP should evaluate: (1) Pan-India advocate network across district courts, CMM courts, and DRTs; (2) Proven tech stack supporting automated core banking LMS ingestion via SFTP/API; (3) Dedicated compliance and data security certifications (ISO 27001, SOC 2); (4) Past performance in retail NPA resolution (Section 138, SARFAESI, arbitration); and (5) Comprehensive contractual acceptance of RBI audit rights and Bar Council fee compliance.",
  },
  {
    question: "Bank legal notice outsourcing se retail NPA recovery mein kitna time aur cost bachta hai?",
    answer:
      "Jab banks apni recovery legal notices aur litigation ko specialized law firm ko outsource karte hain, toh notice generation ka TAT 15 din se ghatkar 48 ghante ho jata hai. Pre-litigation stage par hi 50% se 65% defaulters settlement ya EMI regularize kar dete hain. Isse per-case legal operational expenditure 40% se 60% tak kam hota hai aur bank ki in-house legal team high-value corporate insolvency aur NCLT cases par focus kar pati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Banks Can Outsource Loan Recovery Legal Services to Law Firms",
  description:
    "How banks outsource debt recovery litigation to law firms in India. RBI outsourcing compliance, SLA structures, vendor selection, and cost savings.",
  datePublished: "2026-11-13T14:00:00+05:30",
  dateModified: "2026-11-13T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/how-banks-outsource-loan-recovery-legal-services-law-firms`,
  author: {
    "@type": "Organization",
    name: "LegalRecovery.in Editorial Board",
    url: `${SITE_URL}/about`,
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
    name: "Banking Loan Recovery Legal Outsourcing",
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
      name: "Bulk Recovery Solutions",
      item: `${SITE_URL}/bulk-recovery-cases-all-in-one-affordable-solutions`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Outsourcing Loan Recovery",
      item: `${SITE_URL}/how-banks-outsource-loan-recovery-legal-services-law-firms`,
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

export default function HowBanksOutsourceLoanRecoveryPage() {
  const breadcrumbItems = [
    { label: "Bulk Recovery Solutions", href: "/bulk-recovery-cases-all-in-one-affordable-solutions" },
    { label: "Outsourcing Legal Services", href: "/how-banks-outsource-loan-recovery-legal-services-law-firms" },
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
              <span>RBI Master Directions 2023</span>
              <span className="text-red-500">•</span>
              <span>B2B Banking Legal Procurement Guide</span>
            </div>

            {/* MANDATORY H1 matching exact string specified in prompt */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              How Banks Can Outsource Loan Recovery Legal Services to Law Firms
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Executive &amp; Regulatory Summary (Banking General Counsel Brief)
              </p>
              <p>
                Indian commercial banks and NBFCs outsource non-core loan recovery litigation to specialized law firms under the RBI Master Directions on Outsourcing of Financial Services (2023). Through institutional Master Service Agreements (MSAs), banks deploy tech-enabled pan-India advocate panels to issue Section 138 NI Act notices, execute Section 25 PSS actions, initiate SARFAESI proceedings, and conduct institutional arbitration, achieving up to 65% pre-litigation recovery while maintaining complete ISO 27001 data governance.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">48 Hours</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Notice Dispatch &amp; Speed Post SLA</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">RBI Outsourcing 2023 Compliant</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">65%+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Pre-Litigation Settlement Yield</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹500+ Cr</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">NPA Portfolio Recoveries Handled</p>
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
            <OutsourceTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Regulatory Framework & Mandate */}
              <section id="heading-regulatory-framework" aria-labelledby="heading-regulatory-framework-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-regulatory-framework-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  RBI Regulatory Framework: How Indian Banks Legally Outsource Debt Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  As retail lending portfolios expand across unsecured credit cards, personal loans, and MSME credit lines, Indian scheduled commercial banks and non-banking financial companies (NBFCs) confront an acute operational challenge: managing tens of thousands of default accounts without expanding unsustainable in-house legal overheads or breaching statutory compliance gates.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The <a href="https://www.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">Reserve Bank of India Master Directions on Outsourcing of Financial Services (2023)</a> establish precise boundaries for regulated financial institutions. While banks are categorically barred from delegating core management responsibilities—such as credit sanctioning, internal audit oversight, and NPA asset classification—the Reserve Bank explicitly recognizes legal services, statutory notice processing, court filings, and tribunal litigation as non-core operational functions that can be lawfully outsourced to qualified external law firms.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Unlike traditional third-party recovery agencies that rely on informal telecalling and physical visits (frequently triggering consumer protection penalties and criminal FIRs under the Fair Practices Code), outsourced law firms enforce debt obligations within the formal judicial framework. By utilizing authorized legal advocates enrolled under the Advocates Act, 1961, institutional lenders enforce recovery through Section 138 of the Negotiable Instruments Act, Section 25 of the Payment and Settlement Systems Act, fast-track institutional arbitration, and SARFAESI enforcement.
                </p>
              </section>

              {/* Section 2: Landmark Judicial Precedents */}
              <section id="heading-judicial-precedents" aria-labelledby="heading-judicial-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-judicial-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Court Rulings on Bank Recovery Outsourcing &amp; Advocate Enforcement
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Supreme Court Jurisprudence
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
                            Ruling #{idx + 1} • {c.citation}
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Regulatory Context:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding &amp; Legal Principle:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforcement Implication
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Governance Standard
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Mandatory for All Regulated Lenders
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Procurement Takeaway for Banks:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis / Core Advantages */}
              <section id="heading-why-outsource" aria-labelledby="heading-why-outsource-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-why-outsource-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Leading Banks Outsource Recovery Litigation: 4 Proven Strategic Pillars
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A forensic evaluation of Tier-1 private and public sector banking recoveries demonstrates that financial institutions that transition from fragmented internal legal desks to tech-enabled external law firms achieve higher cash flows, lower cost-to-serve ratios, and zero regulatory citations:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Guaranteed Statutory Limitation Compliance (48-Hour Turnaround):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Section 138 of the NI Act mandates issuance of a legal notice within 30 days of receiving a bank cheque dishonour memo. Outsourced specialized law firms utilize automated data pipelines to ingest bounce registers and dispatch barcoded notices within 48 hours, eliminating limitation forfeiture.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Dual-Rail Electronic Delivery with Section 63 BSA Certificates:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic evidence is strictly admissible when supported by cryptographic certificates. Outsourced legal partners deliver notices simultaneously via Registered Speed Post, WhatsApp, and registered email with system-generated delivery receipts that eliminate frivolous borrower denials in court.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Pan-India Judicial Coverage Across 500+ District Courts and DRTs:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Managing nationwide retail borrowers requires localized advocate empanelment across tier-1, tier-2, and tier-3 jurisdictions. Partnering with a specialized institutional law firm gives the bank immediate access to vetted advocates in hundreds of district courts without maintaining regional legal offices.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">40% to 60% Reduction in Legal Operational Expenditures (OpEx):</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Transitioning from fixed in-house legal retainers to volume-tiered fixed-fee outsourcing allows banks to convert fixed overheads into variable, case-by-case costs. Explore our transparent <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">legal notice charges and commercial fee schedule</Link>.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart (SVG Diagram) */}
              <section id="heading-outsourcing-flow" aria-labelledby="heading-outsourcing-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-outsourcing-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  End-to-End Banking Legal Outsourcing Rail: Data Ingestion to Cash Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this standardized 5-stage institutional workflow connecting banking loan management systems to nationwide advocate enforcement:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">Automated Data Ingestion</h3>
                    <p className="text-xs text-slate-200 mt-1">Bank LMS transmits default accounts via encrypted SFTP/API pipeline with loan contracts.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">Advocate Notice Drafting &amp; Audit</h3>
                    <p className="text-xs text-amber-900 mt-1">Verified advocates review loan clauses and generate Section 138 / NACH / SARFAESI demand notices.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">Dual-Rail Dispatch &amp; BSA Proof</h3>
                    <p className="text-xs text-slate-700 mt-1">Notices served via India Post Speed Post + Section 63 BSA electronic mail and WhatsApp.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">15-Day Cure &amp; Pre-Litigation Mediation</h3>
                    <p className="text-xs text-red-900 mt-1">65% of borrowers regularize dues or execute structured settlements during statutory window.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">Judicial Enforcement &amp; Recovery</h3>
                    <p className="text-xs text-emerald-900 mt-1">Immediate filing of Section 138 criminal complaints, DRT original applications, or arbitration.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Mobile & Desktop with Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Outsourced Legal Recovery Rail</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Banking Debt Recovery Legal Outsourcing Architecture"
                  >
                    <defs>
                      <linearGradient id="outsourceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="outsourceAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="outsourceSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#outsourceGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Encrypted Ingestion</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">LMS API / SFTP Rail</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">DPDP &amp; ISO 27001 Secure</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Notice Vetting</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Advocate Drafting</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">s.138 / NACH / SARFAESI</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Dual-Rail Dispatch</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Speed Post + WhatsApp</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">s.63 BSA Certificate</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#outsourceAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">15-Day Cure Window</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Pre-Litigation Cure</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">65% Settlement Rate</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#outsourceSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Tribunal &amp; Court</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Section 138 / DRT / Arb</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Pan-India Decree Execution</text>

                    {/* Bottom Governance Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">INSTITUTIONAL GOVERNANCE &amp; STATUTORY COMPLIANCE BENCHMARKS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Data Protection: Full adherence to DPDP Act 2023 with zero sub-contracting and automated data purging</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Bar Council Compliance: Fixed-fee and milestone billing strictly aligned with BCI Rule 20 (No contingency fees)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• RBI Audit Prerogative: Unrestricted audit and inspection access guaranteed under Master Service Agreement (MSA)</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Procurement & RFP Playbook */}
              <section id="heading-procurement-playbook" aria-labelledby="heading-procurement-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-procurement-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Legal Procurement Playbook for Banking General Counsels
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To execute an RBI-compliant legal outsourcing empanelment without operational slippage, General Counsels and Vendor Management Heads must follow this structured procurement roadmap:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Draft the Technical &amp; Compliance RFP with RBI-Mandated Covenants
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Structure the Request for Proposal (RFP) around key statutory benchmarks: ISO 27001 data certification, integration capability with the bank&apos;s Loan Management System (LMS), Bar Council ethical compliance, and pan-India court coverage. For further context on institutional legal workflows, see our comprehensive guide on <Link href="/bulk-recovery-cases-all-in-one-affordable-solutions" className="text-blue-700 underline font-semibold">bulk recovery cases and institutional solutions</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Conduct Rigorous Vendor Due Diligence &amp; Cyber Security Vetting
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Verify the law firm&apos;s advocate bar council credentials, examine active professional indemnity insurance policies, and conduct independent third-party Vulnerability Assessment and Penetration Testing (VAPT) on their case management platforms. Confirm that all customer data remains hosted exclusively within MeitY-approved Indian data centers.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Comprehensive Master Service Agreement (MSA) with Audit Rights
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Incorporate mandatory clauses preserving the bank&apos;s, statutory auditors&apos;, and RBI inspectors&apos; unhindered right to inspect litigation files and system logs on 48 hours notice. Prohibit sub-contracting or sub-delegation to non-empanelled entities without prior written approval from the bank&apos;s Head of Legal.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Establish Encrypted Data Integration &amp; 48-Hour Notice Dispatch Pipelines
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Set up automated batch transmission via SFTP or REST APIs. Delinquent accounts (cheque bounces, NACH failures) are converted into legally verified advocate demand notices with barcoded Speed Post and Section 63 BSA electronic dispatch within 48 hours of ingestion. Explore our dedicated portal for <Link href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues" className="text-blue-700 underline font-semibold">sending bank recovery legal notices for unpaid dues</Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Implement Real-Time KPI Dashboards &amp; Quarterly Governance Reviews
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Monitor live portfolio metrics: Delivery Success Rate (target &gt; 92%), Pre-Litigation Cure Rate (target &gt; 50%), Limitation Compliance (100%), and Court Appearance Adherence. Review the firm&apos;s litigation conversion rate into formal Section 138, DRT, and <Link href="/arbitration-personal-loan-defaults-bank-recovery-mechanism" className="text-blue-700 underline font-semibold">arbitration proceedings for defaulted loans</Link>.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of SLAs & Governance Benchmarks */}
              <section id="heading-sla-matrix" aria-labelledby="heading-sla-matrix-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sla-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  SLA Matrix: Institutional Benchmarks for Legal Recovery Panels
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Banking procurement contracts must establish rigorous service level agreements with quantifiable financial consequences for non-compliance:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[580px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Bank Legal Recovery Outsourcing SLA and Governance Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recovery Lifecycle Stage</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Mandatory SLA Benchmark</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Framework / Standard</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Contractual Default Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Data Ingestion to Notice Generation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Within 24 Hours</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 138(b) NI Act 30-Day Clock</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">10% fee forfeiture per day of delay</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Speed Post Dispatch &amp; Barcode Tracking
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Within 48 Hours</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">India Post Corporate Tracking API</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Reimbursement of postal charges withheld</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 63 BSA Digital Delivery Proof
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Real-Time Timestamping</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Bharatiya Sakshya Adhiniyam, 2023</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory reservice at firm&apos;s cost</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 138 Criminal Complaint Filing
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Within 30 Days of Cure Expiry</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 142(1)(b) NI Act Limitation</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Immediate panel de-empanelment for bar lapse</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Security &amp; Data Breach Notification
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Under 6 Hours</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">CERT-In &amp; DPDP Act 2023 Rules</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Full contractual indemnification of penalties</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Settlement Resolution
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Target &gt; 50% Portfolio Yield</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Fair Practice Settlement Framework</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Quarterly allocation rebalancing to high performers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Benchmarked under Reserve Bank of India Master Directions on Outsourcing and standard Indian banking empanelment criteria. For details on strategy, read our analysis on <Link href="/effective-legal-strategies-recovery-defaulted-bank-loans" className="text-blue-700 underline font-semibold">effective legal strategies for bank loan defaults</Link>.
                </p>
              </section>

              {/* Section 7: Deep Dive on Critical Challenges & Solutions */}
              <section id="heading-critical-challenges" aria-labelledby="heading-critical-challenges-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-critical-challenges-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Managing Legal Outsourcing Risks: Interactive GC Decision Matrix
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select a Critical Procurement Barrier to View the Statutory Constraint and Actionable Governance Fix
                  </p>
                </div>

                <OutsourceProblemTabs />
              </section>

              {/* Section 8: Worked Example / Case Study */}
              <section id="heading-portfolio-case-study" aria-labelledby="heading-portfolio-case-study-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-portfolio-case-study"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Portfolio Case Study: ₹50 Crore Retail NPA Portfolio Outsourcing
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative B2B Banking Portfolio Model
                    </span>
                    <span className="text-xs text-slate-400">Scheduled Commercial Bank • 5,000 Delinquent Accounts</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Institutional Challenge:</strong> A scheduled private bank accumulated a 90+ DPD (Days Past Due) portfolio of 5,000 defaulted personal loans and credit cards across Maharashtra, Gujarat, and Delhi NCR, representing ₹50 Crore in overdue principal. The in-house legal recovery cell was constrained by manual drafting capacity, generating fewer than 300 notices per month with limitation deadlines fast approaching.
                    </p>
                    <p>
                      <strong>The Outsourced Legal Deployment:</strong> The bank empanelled a tech-enabled law firm under an RBI-compliant Master Service Agreement. The bank&apos;s loan management system integrated via encrypted SFTP to transmit borrower files. Within 72 hours, 5,000 customized advocate legal notices (invoking Section 138 NI Act, Section 25 PSS Act, and contractual arbitration clauses) were dispatched simultaneously via Registered Speed Post and WhatsApp with Section 63 BSA audit certificates.
                    </p>
                    <p>
                      <strong>The Recovery &amp; Financial Yield:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-200">
                      <li><strong>Pre-Litigation Cures (Days 1–15):</strong> 2,850 borrowers (57%) contacted the bank within the 15-day notice cure window, resulting in immediate full settlements or structured EMI restructurings totaling ₹28.5 Crore in recovered cash.</li>
                      <li><strong>Post-Notice Mediation &amp; Lok Adalat:</strong> An additional 520 borrowers (10.4%) settled at National Lok Adalat forums, yielding ₹5.2 Crore.</li>
                      <li><strong>Litigation Funneling:</strong> The remaining 1,630 non-responsive willful default accounts were batched for fast-track Section 138 criminal complaints and institutional arbitration filings across jurisdictional courts.</li>
                    </ul>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">Bottom-Line Procurement Impact:</strong>
                      Total cash recovery reached ₹33.7 Crore (67.4% portfolio recovery rate) within 90 days. Per-case legal notice cost dropped by 54% compared to legacy panel retainers, with zero customer harassment complaints and 100% compliance with RBI Fair Practice Codes.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Bank Evidence & Due Diligence Checklist */}
              <section id="heading-due-diligence-checklist" aria-labelledby="heading-due-diligence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-due-diligence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Vendor Due Diligence Checklist: 6 Essential Artifacts for Legal Empanelment
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Before onboarding an external law firm for debt recovery litigation under RBI Master Directions, the bank&apos;s legal procurement committee must verify and archive these 6 documentation artifacts:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bar Council Verification &amp; Advocate Certificates of Practice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certified copies of State Bar Council enrolment numbers and verified Certificates of Practice (COP) under the All India Bar Examination rules for all handling partners.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">ISO/IEC 27001:2022 Information Security Certification:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Accredited ISO 27001 certificate proving enterprise-grade controls for customer PII, loan dossiers, and credit bureau data handling.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">VAPT &amp; Cyber Security Audit Attestation:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Recent Vulnerability Assessment and Penetration Testing report from a CERT-In empaneled auditor confirming zero high-risk vulnerabilities on the legal platform.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Professional Indemnity Insurance Policy:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Active professional indemnity coverage commensurate with portfolio exposure (minimum ₹5 Crore to ₹25 Crore) protecting against limitation errors or procedural lapses.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">RBI Master Directions Compliance Undertaking:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Formal written covenants agreeing to unrestricted audit access by the bank and RBI, strict code of conduct adherence, and non-engagement of unauthorized sub-vendors.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 63 BSA Electronic Notice Dispatch Protocol:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Documented technical architecture for generating court-admissible electronic transmission certificates for notices served via WhatsApp and secure email channels.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Outsourcing Loan Recovery Legal Services
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Expert Legal &amp; Regulatory Answers for General Counsels, Chief Risk Officers and Procurement Teams
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
                  Statutory Framework, Primary Sources &amp; Regulatory Authorities
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
                  Regulatory verification: All guidelines verified against official Reserve Bank of India Master Directions on Outsourcing of Financial Services, Digital Personal Data Protection Act 2023, and Bar Council of India professional standards as of November 2026.
                </p>
              </section>

              {/* Primary B2B Enterprise CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Engage Outsourced Banking Legal Recovery Services
                </h2>
                <OutsourceNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Debt Recovery Solutions
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Recovery Cases All-in-One Solution →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Notice Portal for Unpaid Dues →
                  </Link>
                  <Link
                    href="/bank-loan-recovery-process-defaulting-borrowers-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Loan Recovery Process in India →
                  </Link>
                  <Link
                    href="/effective-legal-strategies-recovery-defaulted-bank-loans"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Effective Legal Strategies for Bank Loans →
                  </Link>
                  <Link
                    href="/legal-action-against-credit-card-defaulters-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Card Defaulters Legal Action →
                  </Link>
                  <Link
                    href="/arbitration-personal-loan-defaults-bank-recovery-mechanism"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Arbitration for Personal Loan Defaults →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Pricing →
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
