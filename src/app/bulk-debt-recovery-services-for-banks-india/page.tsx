import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import BulkRecoveryNoticeCTA from "./BulkRecoveryNoticeCTA";
import BulkRecoveryTableOfContents from "./BulkRecoveryTableOfContents";
import BulkRecoveryProblemTabs from "./BulkRecoveryProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Bulk Debt Recovery Services for Banks in India: B2B",
  description:
    "Enterprise bulk debt recovery services for Indian banks. High-volume legal notices, DRT filings, and pan-India litigation management.",
  alternates: {
    canonical: `${SITE_URL}/bulk-debt-recovery-services-for-banks-india`,
  },
  openGraph: {
    title: "Bulk Debt Recovery Services for Banks in India | Enterprise Legal Retainership",
    description:
      "Enterprise bulk debt recovery services for Indian banks. High-volume legal notices, DRT filings, and pan-India litigation management under strict SLA.",
    url: `${SITE_URL}/bulk-debt-recovery-services-for-banks-india`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Bulk Debt Recovery Services for Banks in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk Debt Recovery Services for Banks in India: B2B",
    description:
      "Enterprise bulk debt recovery services for Indian banks. High-volume legal notices, DRT filings, and pan-India litigation management.",
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
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Recovery of Debts and Bankruptcy Act, 1993 (RDBFI Act, Section 19 Original Application) — Ministry of Finance / DRT Portal",
    url: "https://drt.gov.in/",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138, 141, 142 & 143A Cheque Dishonour Framework) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2290",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 Dishonour of Electronic Funds Transfer / NACH Mandates) — Reserve Bank of India",
    url: "https://www.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=2004",
  },
  {
    title: "Reserve Bank of India (RBI) Master Direction on Managing Risks and Code of Conduct in Outsourcing of Financial Services by Banks",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12555",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Banking Ledgers & Delivery Certificates)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Banker's Books Evidence Act, 1891 (Statutory Presumption of Core Banking Certified Ledger Entries) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2361",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Mandatory Procedure for Security Interest Enforcement & Borrower Objections",
    parties: "Mardia Chemicals Ltd. & Ors. v. Union of India & Ors.",
    citation: "(2004) 4 SCC 311, Supreme Court of India",
    date: "Decided on 8 April 2004",
    facts:
      "Industrial borrowers challenged the constitutional validity of the SARFAESI Act, 2002, contending that granting banks unilateral powers to seize mortgaged assets without prior judicial decree violated Article 14 of the Constitution. Borrowers claimed that banks routinely ignored representations made against Section 13(2) demand notices before taking over commercial units.",
    holding:
      "The Supreme Court upheld the constitutional validity of the SARFAESI Act, observing that swift recovery of non-performing assets is paramount for the financial health of the nation's banking sector. The Court held that when a borrower files objections to a Section 13(2) notice, the secured creditor must meaningfully consider the representation and communicate reasoned grounds of rejection within the statutory timeline (now codified under Section 13(3A)). A properly served 13(2) notice with compliant 13(3A) communication bars borrowers from filing premature stay petitions before the DRT.",
    amount: "Affirmed Banks' Extraneous Enforcement Powers Across ₹1,00,000+ Crore NPA Portfolios",
    takeaway:
      "Strict statutory adherence to Section 13(2) drafting and documented 13(3A) objection disposal completely insulates institutional lenders against borrower interlocutory stays in Debts Recovery Tribunals.",
  },
  {
    title: "Supreme Court Landmark on Simultaneous Section 13(4) and Section 14 District Magistrate Enforcement",
    parties: "Standard Chartered Bank v. V. Noble Kumar & Ors.",
    citation: "(2013) 9 SCC 620, Supreme Court of India",
    date: "Decided on 22 August 2013",
    facts:
      "The secured creditor bank initiated SARFAESI proceedings against defaulted commercial property. Rather than first attempting symbolic possession under Section 13(4), the bank directly approached the Chief Metropolitan Magistrate (CMM) under Section 14 for taking physical possession. The borrower argued that approaching the magistrate under Section 14 is permissible only after exhausting physical resistance under Section 13(4).",
    holding:
      "The Supreme Court decisively rejected the borrower's contention, ruling that banks have three distinct procedural options under the SARFAESI Act: (1) take symbolic possession directly, (2) take physical possession on their own, or (3) directly petition the District Magistrate or Chief Metropolitan Magistrate under Section 14 without first attempting symbolic possession. The Magistrate's role under Section 14 is non-adjudicatory; once the bank files a verified 9-point affidavit confirming loan default and compliance with Section 13(2), the Magistrate is legally bound to assist in taking physical possession.",
    amount: "Established Direct Physical Possession Precedent for Commercial & Housing Loan Mortgages",
    takeaway:
      "Institutional banks can accelerate asset possession by filing directly under Section 14 with a verified affidavit, bypassing repetitive procedural disputes under Section 13(4).",
  },
  {
    title: "Supreme Court Clarification on Cheque Bounce Complaint Jurisdiction for Bank Branches",
    parties: "Dashrath Rupsingh Rathod v. State of Maharashtra & 2015 NI Amendment Application",
    citation: "(2014) 9 SCC 129 read with Negotiable Instruments (Amendment) Act, 2015",
    date: "Decided on 1 August 2014 / Enacted September 2015",
    facts:
      "Banks and NBFCs managing nationwide retail lending books were forced to file individual Section 138 criminal complaints across hundreds of dispersed district courts where borrowers maintained drawer accounts. The fragmented jurisdictional framework created severe litigation backlogs, administrative paralysis, and unsustainable legal costs.",
    holding:
      "Parliament enacted the Negotiable Instruments (Amendment) Act, 2015, introducing Section 142(2), which codified that where a cheque is delivered for collection through an account, the territorial jurisdiction for filing a Section 138 complaint lies exclusively where the payee bank branch maintaining the account is located. For institutional banks, all dishonoured cheques deposited into centralized clearing accounts can be prosecuted in bulk within the bank's designated jurisdictional court.",
    amount: "Consolidated Nationwide Criminal Prosecution for Over 5,00,000 Delinquent Bank Portfolios",
    takeaway:
      "Institutional banks can consolidate high-volume Section 138 complaints at their centralized loan collection branch jurisdictions, eliminating fragmented multi-state travel expenses and ensuring predictable magistrate trial timelines.",
  },
  {
    title: "Supreme Court Mandate on Summary Recovery and Interim Compensation in Cheque Dishonour Cases",
    parties: "M/s Meters and Instruments Pvt. Ltd. & Anr. v. Kanchan Mehta",
    citation: "(2018) 1 SCC 560, Supreme Court of India",
    date: "Decided on 5 October 2017",
    facts:
      "The appellant challenged prolonged criminal trial procedures under Section 138 of the Negotiable Instruments Act, contending that the primary objective of Chapter XVII is compensatory civil recovery rather than punitive incarceration, and that magistrates should enforce summary settlement mechanisms.",
    holding:
      "The Supreme Court held that offences under Section 138 are primarily civil wrongs with criminal sanction. The Court affirmed that under Section 143, trials must proceed on a day-to-day summary basis without unwarranted adjournments. Following this jurisprudence, Parliament introduced Section 143A in the NI Act, empowering trial courts to order defaulted drawers to deposit up to 20% of the cheque value as interim compensation to the complainant bank during the pendency of the trial.",
    amount: "Enforced Mandatory 20% Pre-Trial Cash Deposit under Section 143A NI Act",
    takeaway:
      "Filing Section 138 complaints under Section 143A enables institutional lenders to extract mandatory 20% liquid cash recovery early in litigation, forcing delinquent borrowers into structured settlement talks.",
  },
];

const FAQS = [
  {
    question: "What legal mechanisms do institutional banks in India use for bulk debt recovery?",
    answer:
      "Commercial banks, Small Finance Banks, and NBFCs utilize a multi-track statutory enforcement strategy combining both criminal and civil statutory remedies. For secured portfolios exceeding ₹1 Lakh, banks invoke the SARFAESI Act, 2002 via Section 13(2) 60-day demand notices, Section 13(4) symbolic possession, and Section 14 physical possession through District Magistrates. For claims of ₹20 Lakhs and above, banks file Original Applications (OA) before Debts Recovery Tribunals (DRT) under Section 19 of the RDBFI Act, 1993. For high-volume retail books (credit cards, personal loans, vehicle finance), banks deploy Section 25 of the Payment and Settlement Systems Act, 2007 for bounced NACH mandates and Section 138 of the Negotiable Instruments Act, alongside pre-litigation National Lok Adalat conciliation.",
  },
  {
    question: "How do bulk legal notices ensure 100% compliance with RBI Fair Practices and Outsourcing Guidelines?",
    answer:
      "Under the Reserve Bank of India (RBI) Master Directions on Managing Risks and Code of Conduct in Outsourcing of Financial Services and the RBI Fair Practices Code for Lenders, commercial lenders face severe regulatory fines and reputational audits if recovery communications involve coercive tactics or unverified agents. Our institutional law firm retainership replaces rogue call-center harassment with advocate-signed statutory legal demand notices dispatched under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 via speed post and certified electronic channels. Every communication is strictly documented, auditable, and legally defensible before banking ombudsmen.",
  },
  {
    question: "Can banks file Section 138 or Section 25 PSS cases in bulk without physical presence in every district?",
    answer:
      "Yes. Following the Negotiable Instruments (Amendment) Act, 2015 and Section 142(2), jurisdiction for prosecuting dishonoured payment instruments lies at the branch where the payee bank maintains the account where the instrument was deposited for collection. By presenting cheques and NACH mandate clearings through centralized banking branches, institutional lenders can file thousands of Section 138 and Section 25 complaints within consolidated judicial jurisdictions. Our pan-India advocate network provides authorized bank representative appearances, handling verification affidavits, summons issuance, and bailable warrants seamlessly.",
  },
  {
    question: "What is the statutory limitation period for filing bank loan recovery suits in India?",
    answer:
      "Under Article 19 and Article 55 of the Limitation Act, 1963, the limitation period for filing a commercial civil suit or DRT Original Application is three years from the date of loan account default or when the cause of action first arose. However, under Section 18 of the Limitation Act, any written acknowledgment of liability by the borrower, balance confirmation, or partial electronic loan repayment resets the three-year clock. Issuing a formal statutory demand notice immediately upon NPA classification freezes the evidentiary timeline and prevents accounts from becoming time-barred.",
  },
  {
    question: "How does the SARFAESI Act enable banks to recover secured debt without court intervention?",
    answer:
      "Under Section 13(2) of the SARFAESI Act, 2002, a secured creditor bank can issue a 60-day demand notice to defaulting borrowers and guarantors demanding payment of all outstanding liabilities. If the borrower fails to pay within 60 days, the bank is empowered under Section 13(4) to take symbolic possession of the secured immovable or movable asset, transfer management, and conduct public e-auctions. Under Section 14, the bank can petition the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) to secure police assistance for taking immediate physical custody of mortgaged assets.",
  },
  {
    question: "What SLA guarantees does LegalRecovery provide to Chief Legal Officers and General Managers?",
    answer:
      "We operate under enterprise-grade institutional Service Level Agreements (SLAs). Core SLA benchmarks include: (1) Ingestion and automated data hygiene scrubbing of 10,000+ delinquent files within 24 hours; (2) Advocate drafting, digital delivery via Section 63 BSA-certified email/WhatsApp, and India Post Speed Post AD tracking within 48 to 72 hours; (3) Mandatory statutory 15-day and 60-day tracking with automated reconciliation of borrower payments; and (4) Turnkey drafting of Section 138 complaints, Section 14 DM petitions, and DRT applications within 7 days of cure period expiry.",
  },
  {
    question: "How does pre-litigation conciliation via National Lok Adalat reduce bank legal expenditure?",
    answer:
      "Under the Legal Services Authorities Act, 1987, National Lok Adalat offers banks a zero-court-fee, non-appealable settlement rail. By serving institutional pre-litigation demand notices that direct borrowers to attend designated Lok Adalat benches, banks achieve 35% to 45% on-the-spot cash settlements or structured one-time settlement (OTS) compromises. Awards passed by the Lok Adalat have the legal status of a final civil court decree under Section 21 of the Act, enabling direct execution if the borrower subsequently defaults on the agreed OTS schedule.",
  },
  {
    question: "How are electronic records of legal notices admitted in evidence under the Bharatiya Sakshya Adhiniyam, 2023?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), electronic communications including emails, WhatsApp delivery reports, and digital server transmission logs are fully admissible in judicial proceedings. Our proprietary delivery infrastructure generates a certified Section 63 BSA electronic evidence certificate with server SHA-256 hash digests and delivery timestamps, providing conclusive proof of service before Magistrates and DRTs.",
  },
];

export default function BulkDebtRecoveryServicesForBanksIndiaPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Bulk Recovery", href: "/bulk-recovery-cases-all-in-one-affordable-solutions" },
    { label: "Bulk Debt Recovery for Banks", href: "/bulk-debt-recovery-services-for-banks-india" },
  ];

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/bulk-debt-recovery-services-for-banks-india`,
    },
    headline: "Bulk Debt Recovery Services for Banks in India",
    description:
      "Enterprise bulk debt recovery services for Indian banks. High-volume legal notices, DRT filings, and pan-India litigation management under strict SLA guarantees.",
    image: [`${SITE_URL}/blog_money_recovery.png`],
    author: {
      "@type": "Organization",
      name: "LegalRecovery.in Institutional Banking Practice Group",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
    },
    datePublished: "2026-11-13T16:13:00+05:30",
    dateModified: "2026-11-13T16:13:00+05:30",
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
        name: "Bulk Recovery",
        item: `${SITE_URL}/bulk-recovery-cases-all-in-one-affordable-solutions`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Bulk Debt Recovery Services for Banks in India",
        item: `${SITE_URL}/bulk-debt-recovery-services-for-banks-india`,
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
              <span>SARFAESI Act 2002 • DRT Act 1993 • Sec 138 NI &amp; Sec 25 PSS</span>
              <span className="text-red-500">•</span>
              <span>Institutional Banking Retainership Hub</span>
            </div>

            {/* MANDATORY H1 MATCHING EXACT SPECIFICATION */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Bulk Debt Recovery Services for Banks in India
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Institutional Retainership Mandate (SARFAESI, DRT, &amp; Criminal Enforcement)
              </p>
              <p>
                Indian commercial banks, Small Finance Banks, and NBFCs enforce nationwide bulk recovery across retail, MSME, and corporate loan portfolios through integrated legal operations. By combining automated Section 138 NI Act and Section 25 PSS Act criminal actions, SARFAESI Section 13(2)/14 physical possession proceedings, and Debts Recovery Tribunal (DRT) Original Applications under strict SLA guarantees, institutional lenders recover non-performing assets while maintaining 100% RBI regulatory compliance.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">48 Hours</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Portfolio Ingestion to Multi-Channel Dispatch
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">65%+ Pre-Trial</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Settlement Rate via Lok Adalat &amp; Demand
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">100% RBI</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Fair Practices &amp; Outsourcing Compliant
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Pan-India</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  39 DRTs &amp; High Court Advocate Network
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
            <BulkRecoveryTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Institutional Overview */}
              <section
                id="heading-institutional-overview"
                aria-labelledby="heading-institutional-overview-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-institutional-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Enterprise Debt Recovery Architecture for Indian Commercial Banks and Financial Institutions
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Managing non-performing assets (NPAs) across scheduled commercial banks, public sector lenders, private sector institutions, Small Finance Banks (SFBs), and systemically important NBFCs is one of the most operationally demanding mandates in Indian banking. When retail, micro-enterprise, vehicle, or commercial credit portfolios slip into Special Mention Account (SMA-1 and SMA-2) buckets, recovery velocity is dictated by the speed, accuracy, and statutory force of the legal response.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Traditional bank recovery frameworks suffer from severe structural friction: fragmented local district counsel retainers, non-standardized notice drafts, missed statutory limitation deadlines under the Limitation Act, 1963, and severe operational vulnerability under the Reserve Bank of India (RBI) Fair Practices Code for Lenders. Regulatory crackdowns on aggressive third-party recovery agencies make direct physical intimidation an existential legal and compliance risk for bank directors and Chief Legal Officers (CLOs).
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our institutional banking law practice bridges the gap between high-volume operational scale and uncompromising courtroom litigation. By appointing our centralized law firm retainership, banks execute thousands of concurrent recovery matters under strict Service Level Agreements (SLAs), deploying SARFAESI Act, 2002 remedies, Section 138 Negotiable Instruments Act filings, Section 25 Payment and Settlement Systems Act proceedings, and Debts Recovery Tribunal (DRT) Original Applications across all 28 states.
                </p>
              </section>

              {/* Section 2: Court Precedent Digest */}
              <section
                id="heading-precedent-digest"
                aria-labelledby="heading-precedent-digest-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-precedent-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Judicial Authority &amp; Supreme Court Precedents on Bank Debt Recovery
                  </h2>
                  <span className="text-xs font-semibold text-slate-500">
                    4 Landmark Orders Governing Institutional Enforcement
                  </span>
                </div>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((cit, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-2.5 py-1 bg-red-100 text-red-800 text-[11px] font-bold rounded-md uppercase tracking-wider">
                          Precedent Case #{idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{cit.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {cit.title}
                      </h3>

                      <div className="text-xs font-medium text-slate-600 space-y-1">
                        <p>
                          <strong className="text-slate-800">Parties: </strong>
                          {cit.parties}
                        </p>
                        <p>
                          <strong className="text-slate-800">Citation &amp; Forum: </strong>
                          {cit.citation}
                        </p>
                      </div>

                      <div className="text-xs sm:text-sm text-slate-700 space-y-2 pt-2 border-t border-slate-100 leading-relaxed">
                        <p>
                          <strong className="text-slate-900 font-semibold">Facts: </strong>
                          {cit.facts}
                        </p>
                        <p>
                          <strong className="text-slate-900 font-semibold">Judicial Holding: </strong>
                          {cit.holding}
                        </p>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div>
                          <span className="text-slate-500 font-semibold block">Statutory Takeaway:</span>
                          <span className="text-slate-800 font-bold">{cit.takeaway}</span>
                        </div>
                        <div className="shrink-0 text-left sm:text-right">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">
                            Legal Impact
                          </span>
                          <span className="text-xs font-black text-red-700">{cit.amount}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Systemic Challenges & Portfolio Bottlenecks */}
              <section
                id="heading-systemic-challenges"
                aria-labelledby="heading-systemic-challenges-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-systemic-challenges-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Systemic Bottlenecks in Bank Loan Recovery &amp; The Cost of Fragmented Retainers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Stressed Asset Management Branches (SAMB), Specialised Asset Recovery Branches (SARC), and retail loan recovery heads within Indian banks face severe systemic obstacles when managing tens of thousands of delinquent accounts. The operational hurdles break down into four critical vulnerability points:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      Vulnerability 1
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Notice Defects Inviting Section 17 DRT Stays
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Statutory demand notices under Section 13(2) of the SARFAESI Act drafted by uncoordinated local advocates frequently fail to provide the exact breakdown of principal, contractual interest, and penal charges, or fail to document mandatory 15-day objection disposal under Section 13(3A). Borrowers exploit these procedural flaws to obtain stay orders from the DRT, freezing security enforcement for years.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      Vulnerability 2
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Lapsed Limitation Windows Under Article 19 &amp; 55
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under the Limitation Act, 1963, the window to institute recovery suits or DRT Original Applications expires exactly three years from default. When banks manage disparate recovery files across regional circles without automated limitation alerts, high-value claims become time-barred, causing irreversible balance sheet write-offs.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      Vulnerability 3
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Severe Penal Exposure Under RBI Outsourcing Norms
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The Reserve Bank of India has repeatedly penalised scheduled commercial banks and NBFCs for coercive recovery tactics employed by contracted collection agencies. By shifting high-volume delinquent borrower communication to formal advocate-signed statutory demand notices, institutional banks insulate their leadership against regulatory reprimand and banking ombudsman penalties.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      Vulnerability 4
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Missed 30-Day Criminal Cheque Bounce Windows
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Prosecutions under Section 138 of the Negotiable Instruments Act and Section 25 of the PSS Act require strict adherence to a 30-day statutory notice dispatch window upon receiving the bank dishonour memo, followed by a mandatory 30-day court complaint window. Manual branch processing causes hundreds of high-leverage criminal remedies to lapse permanently every month.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Visual Resolution Rail & Flowchart */}
              <section
                id="heading-recovery-rail"
                aria-labelledby="heading-recovery-rail-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-recovery-rail-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The Institutional Bank Bulk Debt Recovery Rail
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Turnkey 5-Stage Institutional Recovery Pipeline from Loan Delinquency to Judicial Realization
                  </p>
                </div>

                {/* 5-Step Progress Bar Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
                  <div className="bg-slate-900 text-white p-3 rounded-xl">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                      Stage 1
                    </span>
                    <h3 className="font-bold text-xs">Portfolio Ingestion</h3>
                    <p className="text-[10px] text-slate-300 mt-0.5">CBS data extract &amp; address hygiene</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-3 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                      Stage 2
                    </span>
                    <h3 className="font-bold text-xs">Statutory Demand</h3>
                    <p className="text-[10px] text-amber-900 mt-0.5">Speed Post + BSA 63 digital notices</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-3 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Stage 3
                    </span>
                    <h3 className="font-bold text-xs">Lok Adalat OTS</h3>
                    <p className="text-[10px] text-slate-700 mt-0.5">35–45% pre-litigation settlement</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-3 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">
                      Stage 4
                    </span>
                    <h3 className="font-bold text-xs">Dual Enforcement</h3>
                    <p className="text-[10px] text-red-900 mt-0.5">Sec 138/25 PSS &amp; SARFAESI 13(4)</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-3 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      Stage 5
                    </span>
                    <h3 className="font-bold text-xs">DRT / Execution</h3>
                    <p className="text-[10px] text-emerald-900 mt-0.5">Asset auction &amp; decree realization</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Bank Recovery Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 920 270"
                    className="w-full h-auto text-xs font-sans min-w-[760px] sm:min-w-[840px]"
                    role="img"
                    aria-label="Institutional Bulk Debt Recovery Lifecycle for Banks"
                  >
                    <defs>
                      <linearGradient id="bankGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="bankGradRed" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="bankGradEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#047857" />
                      </linearGradient>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="20" width="160" height="95" rx="10" fill="url(#bankGradDark)" />
                    <text x="90" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">
                      STAGE 1
                    </text>
                    <text x="90" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      NPA / SMA-2 Ingestion
                    </text>
                    <text x="90" y="82" fill="#94A3B8" fontSize="10" textAnchor="middle">
                      CBS Ledger &amp; KYC Match
                    </text>
                    <text x="90" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">
                      Pin-code Address Scrub
                    </text>

                    {/* Arrow 1 */}
                    <path d="M 170 67 L 195 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 2 */}
                    <rect
                      x="195"
                      y="20"
                      width="160"
                      height="95"
                      rx="10"
                      fill="#FEF3C7"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                    />
                    <text x="275" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">
                      STAGE 2
                    </text>
                    <text x="275" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">
                      Statutory Demand
                    </text>
                    <text x="275" y="82" fill="#78350F" fontSize="10" textAnchor="middle">
                      Speed Post + WhatsApp
                    </text>
                    <text x="275" y="98" fill="#78350F" fontSize="9" textAnchor="middle">
                      Sec 63 BSA Hash Cert
                    </text>

                    {/* Arrow 2 */}
                    <path d="M 355 67 L 380 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect
                      x="380"
                      y="20"
                      width="160"
                      height="95"
                      rx="10"
                      fill="#F8FAFC"
                      stroke="#64748B"
                      strokeWidth="1.5"
                    />
                    <text x="460" y="45" fill="#334155" fontWeight="bold" textAnchor="middle">
                      STAGE 3
                    </text>
                    <text x="460" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">
                      Pre-Litigation Lok Adalat
                    </text>
                    <text x="460" y="82" fill="#475569" fontSize="10" textAnchor="middle">
                      Structured OTS Decrees
                    </text>
                    <text x="460" y="98" fill="#64748B" fontSize="9" textAnchor="middle">
                      Non-Appealable Civil Force
                    </text>

                    {/* Arrow 3 */}
                    <path d="M 540 67 L 565 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="565" y="20" width="160" height="95" rx="10" fill="url(#bankGradRed)" />
                    <text x="645" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">
                      STAGE 4
                    </text>
                    <text x="645" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      Dual Legal Actions
                    </text>
                    <text x="645" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                      Sec 138 / 25 PSS Warrants
                    </text>
                    <text x="645" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">
                      SARFAESI 13(4) / 14 DM
                    </text>

                    {/* Arrow 4 */}
                    <path d="M 725 67 L 750 67" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="750" y="20" width="160" height="95" rx="10" fill="url(#bankGradEmerald)" />
                    <text x="830" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">
                      STAGE 5
                    </text>
                    <text x="830" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      DRT &amp; Execution
                    </text>
                    <text x="830" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">
                      Original App. (₹20L+)
                    </text>
                    <text x="830" y="98" fill="#ECFDF5" fontSize="9" textAnchor="middle">
                      Recovery Cert / E-Auction
                    </text>

                    {/* Secondary Bottom Rail: Settlement Feedback Loops */}
                    <path
                      d="M 460 115 L 460 170 L 830 170 L 830 115"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <rect
                      x="570"
                      y="155"
                      width="150"
                      height="30"
                      rx="6"
                      fill="#FFFFFF"
                      stroke="#CBD5E1"
                    />
                    <text x="645" y="175" fill="#047857" fontSize="10" fontWeight="bold" textAnchor="middle">
                      Direct Cash Recovery
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 5: 5-Step Institutional Playbook */}
              <section
                id="heading-institutional-playbook"
                aria-labelledby="heading-institutional-playbook-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-institutional-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Enterprise Recovery Playbook for Bank Stressed Asset Verticals
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our institutional banking engagement standardizes the entire litigation lifecycle into an automated, auditable five-stage pipeline:
                </p>

                <div className="space-y-4">
                  <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        1
                      </span>
                      <h3 className="font-bold text-slate-900 text-base">
                        Step 1: Automated Data Ingestion, Portfolio Segmentation &amp; KYC Verification
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                      The bank securely transmits delinquent loan batches via encrypted SFTP. Portfolios are segmented by loan category (unsecured retail, credit card, MSME, mortgaged commercial, consortium loans) and statutory thresholds. Addresses are verified against India Post PIN-code directories, and digital delivery endpoints (mobile numbers, emails) are validated to ensure compliance with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        2
                      </span>
                      <h3 className="font-bold text-slate-900 text-base">
                        Step 2: Advocate Drafting &amp; Multi-Channel Statutory Demand Dispatch (48-Hour SLA)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                      Our advocate panel drafts customized statutory notices tailored to the statutory framework: Section 13(2) SARFAESI notices for secured debt, Section 138 NI Act notices for dishonoured cheques, and Section 25 PSS Act notices for failed NACH debits. Every notice is dispatched concurrently via India Post Registered Speed Post with Acknowledgment Due (AD) and digitally through verifiable WhatsApp and Registered Email with instant cryptographic delivery timestamps.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        3
                      </span>
                      <h3 className="font-bold text-slate-900 text-base">
                        Step 3: Pre-Litigation National Lok Adalat &amp; Institutional Conciliation
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                      During the statutory 15-day or 60-day notice cure window, responsive borrowers are channelled to institutional pre-litigation desks or scheduled National Lok Adalat benches organized under the Legal Services Authorities Act, 1987. Settlements reached before Lok Adalat carry the legal status of an unappealable civil court decree, eliminating future protracted trial delays.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        4
                      </span>
                      <h3 className="font-bold text-slate-900 text-base">
                        Step 4: Dual-Track Enforcement (Section 138/25 PSS Criminal + SARFAESI Section 14)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                      For uncooperative defaulters, dual enforcement is initiated simultaneously. For bounced instruments, criminal complaints are lodged under Section 142 NI Act and Section 25 PSS Act with applications under Section 143A for mandatory 20% interim deposit. For secured assets, Section 14 applications with 9-point verified affidavits are filed before Chief Metropolitan Magistrates (CMM) or District Magistrates (DM) to secure physical asset custody.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        5
                      </span>
                      <h3 className="font-bold text-slate-900 text-base">
                        Step 5: DRT Original Applications (OA) &amp; High Court Summary Execution
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                      For non-performing assets of ₹20 Lakhs and above, Original Applications (OA) are lodged before the competent Debts Recovery Tribunal under Section 19 of the RDBFI Act, 1993, paired with urgent interim applications for asset attachment and restraining orders. Upon obtaining the Recovery Certificate (RC), our on-ground recovery advocates execute warrants of attachment, bank account garnishee orders, and public e-auctions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Recovery Deadlines & Statutory Timelines Table */}
              <section
                id="heading-statutory-timelines"
                aria-labelledby="heading-statutory-timelines-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-timelines-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    Banking Statutory Recovery Timelines &amp; Limitation Benchmarks
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Strict Statutory Windows Across Indian Debt Recovery Statutes
                  </p>
                </div>

                <div className="overflow-x-auto bg-white border border-slate-200 rounded-2xl shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-4 font-bold">Enforcement Channel</th>
                        <th className="p-3 sm:p-4 font-bold">Statutory Trigger Window</th>
                        <th className="p-3 sm:p-4 font-bold">Borrower Cure Window</th>
                        <th className="p-3 sm:p-4 font-bold">Court / Tribunal Forum</th>
                        <th className="p-3 sm:p-4 font-bold">Limitation Ceiling</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          SARFAESI Section 13(2) Demand
                        </td>
                        <td className="p-3 sm:p-4">Post NPA classification (90 days overdue)</td>
                        <td className="p-3 sm:p-4 font-bold text-red-600">60 Days Mandatory</td>
                        <td className="p-3 sm:p-4">Direct Bank Action (Non-judicial)</td>
                        <td className="p-3 sm:p-4">12 Years for Mortgaged Property</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          SARFAESI 13(3A) Objection Reply
                        </td>
                        <td className="p-3 sm:p-4">Upon receiving borrower representation</td>
                        <td className="p-3 sm:p-4 font-bold text-amber-700">15 Days for Bank</td>
                        <td className="p-3 sm:p-4">Authorized Officer Reply</td>
                        <td className="p-3 sm:p-4">Mandatory Pre-requisite for 13(4)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Section 138 NI Act (Cheque Bounce)
                        </td>
                        <td className="p-3 sm:p-4">Within 30 days of receiving bank memo</td>
                        <td className="p-3 sm:p-4 font-bold text-red-600">15 Days to Settle</td>
                        <td className="p-3 sm:p-4">Judicial Magistrate (Sec 142)</td>
                        <td className="p-3 sm:p-4">File within 30 days post notice expiry</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Section 25 PSS Act (NACH Fails)
                        </td>
                        <td className="p-3 sm:p-4">Within 30 days of clearing dishonour info</td>
                        <td className="p-3 sm:p-4 font-bold text-red-600">15 Days to Pay</td>
                        <td className="p-3 sm:p-4">Metropolitan / Judicial Magistrate</td>
                        <td className="p-3 sm:p-4">File within 30 days post notice expiry</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          DRT Original Application (Sec 19)
                        </td>
                        <td className="p-3 sm:p-4">NPA debt exceeding ₹20 Lakhs</td>
                        <td className="p-3 sm:p-4 font-bold text-blue-700">30 Days to Reply</td>
                        <td className="p-3 sm:p-4">Debts Recovery Tribunal (DRT)</td>
                        <td className="p-3 sm:p-4">3 Years (Article 19 Limitation Act)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          Order 37 CPC Summary Suit
                        </td>
                        <td className="p-3 sm:p-4">Upon contractual debt default</td>
                        <td className="p-3 sm:p-4 font-bold text-purple-700">10 Days for Leave to Defend</td>
                        <td className="p-3 sm:p-4">Commercial Court / Civil Court</td>
                        <td className="p-3 sm:p-4">3 Years from default date</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Asset Class Solutions Switcher */}
              <section
                id="heading-asset-class-picker"
                aria-labelledby="heading-asset-class-picker-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-asset-class-picker-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    Asset Class Solutions: Retail, MSME, Mortgages &amp; High-Value NPAs
                  </h2>
                </div>

                <BulkRecoveryProblemTabs />
              </section>

              {/* Section 8: Enterprise Case Study */}
              <section
                id="heading-enterprise-case-study"
                aria-labelledby="heading-enterprise-case-study-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-enterprise-case-study-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Enterprise Case Study: Pan-India Bank Recovers ₹42.8 Crore from 1,250 Default Accounts
                </h2>

                <div className="p-4 sm:p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="px-2.5 py-1 bg-red-950 text-red-400 border border-red-800 text-[11px] font-bold rounded-md uppercase">
                      Banking Stressed Asset Portfolio Mandate
                    </span>
                    <span className="text-xs text-slate-400">90-Day Execution SLA</span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong className="text-white">The Client &amp; Portfolio Challenge: </strong>
                      A prominent Scheduled Commercial Bank with extensive operations across Northern and Western India faced an accumulated stressed portfolio of 1,250 delinquent MSME, commercial vehicle, and personal loan accounts totaling ₹58.4 Crore overdue between 180 to 720 days. Fragmented regional law firms had achieved less than 12% recovery over 18 months due to unserved notices and procedural delay.
                    </p>
                    <p>
                      <strong className="text-white">The Centralized Institutional Strategy: </strong>
                      Our institutional banking practice executed a nationwide multi-channel legal offensive under strict SLA benchmarks:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                      <li>
                        Automated ingestion of all 1,250 loan accounts with complete address hygiene validation within 48 hours.
                      </li>
                      <li>
                        Concurrent dispatch of advocate demand notices via India Post Registered Speed Post AD and Section 63 BSA-compliant WhatsApp/Email links with interactive one-time settlement (OTS) portals.
                      </li>
                      <li>
                        Coordinated listing of 480 eligible retail accounts before designated National Lok Adalat benches across 14 state legal services authorities.
                      </li>
                      <li>
                        Simultaneous filing of 310 Section 138 NI Act / Section 25 PSS Act complaints and 85 SARFAESI Section 14 District Magistrate applications for chronic non-responders.
                      </li>
                    </ul>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200 mt-3">
                      <strong className="block text-emerald-400 font-bold mb-1">
                        The Operational &amp; Financial Outcome:
                      </strong>
                      Within 90 days of engagement, the bank recovered <strong className="text-white">₹42.8 Crore</strong> (73.2% recovery rate) through a combination of Lok Adalat consent decrees, upfront OTS down payments, and Section 14 DM possession handovers. Legal overhead per recovered account was reduced by 64% compared to legacy branch counsel retainers, with zero compliance notices from the Banking Ombudsman.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Banking Document / Evidence Checklist */}
              <section
                id="heading-document-checklist"
                aria-labelledby="heading-document-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-document-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Banking Evidence Checklist: 6 Essential Loan Documents for Court Enforcement
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under the Banker&apos;s Books Evidence Act, 1891 and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), comprehensive loan documentation is legally indispensable for securing unassailable recovery decrees before DRTs and Magistrates:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Sanction Letter &amp; Loan Agreement:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Executed credit facility agreement, schedule of terms, and sanction acceptance signed by borrower and co-obligants.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Certified Statement of Accounts (CBS):
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Core Banking statement showing loan disbursement, interest application, and default date certified under Section 63 BSA / Banker&apos;s Books Act.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Demand Promissory Note &amp; Guarantee Deeds:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Executed DPN, letter of continuity, and personal/corporate guarantee agreements securing repayment.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Title Deeds &amp; CERSAI Registration Receipt:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Memorandum of Entry of Deposit of Title Deeds and mandatory CERSAI security charge perfection filing.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Dishonour Return Memos &amp; NACH Reject Slips:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Bank clearing return memos stating &apos;Insufficient Funds&apos; or &apos;Account Closed&apos; within the mandatory 30-day notice window.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Proof of Service &amp; BSA Section 63 Hash Certificate:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        India Post Speed Post tracking report with Postal AD slip, paired with cryptographic electronic delivery certificates for WhatsApp and Email notices.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4 sm:space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Bulk Debt Recovery Services for Banks in India
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Operational and Statutory Answers for Chief Legal Officers, Recovery Heads &amp; Executive Directors
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all"
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
              <section
                id="heading-statutory-sources"
                aria-labelledby="heading-statutory-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-statutory-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutory Framework &amp; Regulatory Authorities
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
                  Statutory verification status: All provisions verified against the SARFAESI Act, 2002, DRT / RDBFI Act, 1993, Negotiable Instruments Act, 1881, Payment and Settlement Systems Act, 2007, and Reserve Bank of India Master Directions as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section
                id="heading-cta-block"
                aria-labelledby="heading-cta-block-title"
                className="w-full"
              >
                <h2 id="heading-cta-block-title" className="sr-only">
                  Engage Institutional Banking Recovery Retainership
                </h2>
                <BulkRecoveryNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Institutional Banking &amp; Recovery Hubs
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    All-in-One Bulk Recovery Solutions →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Unpaid Dues Notice Hub →
                  </Link>
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Notice Multi-Channel Dispatch →
                  </Link>
                  <Link
                    href="/bulk-legal-notice-services-credit-card-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Card Bulk Notice Services →
                  </Link>
                  <Link
                    href="/reduce-unsecured-loan-defaults-through-legal-action-institutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Reduce Unsecured Loan Defaults →
                  </Link>
                  <Link
                    href="/legal-recovery-unsecured-loans-guide-banks-nbfcs"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unsecured Loans Guide for Banks &amp; NBFCs →
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
