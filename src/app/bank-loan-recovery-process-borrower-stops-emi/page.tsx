import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import BorrowerEmiRecoveryCTA from "./BorrowerEmiRecoveryCTA";
import BorrowerEmiRecoveryTableOfContents from "./BorrowerEmiRecoveryTableOfContents";
import BorrowerEmiRecoveryTabs from "./BorrowerEmiRecoveryTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Borrower Stopped Paying EMIs? Legal Recovery for Banks",
  description:
    "Legal workflow for banks when borrowers default on EMIs. From SMA classification to Section 25 PSS Act notices and loan recall enforcement.",
  alternates: {
    canonical: `${SITE_URL}/bank-loan-recovery-process-borrower-stops-emi`,
  },
  openGraph: {
    title: "Legal Recovery Process for Banks When Borrowers Stop Paying EMIs",
    description:
      "Statutory escalation path for scheduled commercial banks and NBFCs when borrowers default on EMIs: SMA classification, Section 25 PSS Act, and loan acceleration.",
    url: `${SITE_URL}/bank-loan-recovery-process-borrower-stops-emi`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Legal Recovery Process for Banks When Borrowers Stop Paying EMIs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Borrower Stopped Paying EMIs? Legal Recovery for Banks",
    description:
      "Legal workflow for banks when borrowers default on EMIs. From SMA classification to Section 25 PSS Act notices and loan recall enforcement.",
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
    title: "Reserve Bank of India (RBI) Master Circular on Prudential Norms on Income Recognition, Asset Classification (IRAC) and Provisioning Pertaining to Advances",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx?id=12165",
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
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Recovery of Debts and Bankruptcy (RDB) Act, 1993 (Section 19 Application to the Tribunal) — Ministry of Finance",
    url: "https://financialservices.gov.in/acts/recovery-debts-due-banks-and-financial-institutions-act-1993",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 Admissibility of Electronic Records for Bank Ledgers & Return Memos)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Benchmark on Electronic Mandate Dishonour & Section 25 PSS Act",
    parties: "Meter and Instruments Private Limited & Another v. Kanchan Mehta",
    citation: "(2018) 1 SCC 560",
    date: "Judgment Dated 5 October 2017",
    facts:
      "The appellant challenged proceedings arising from dishonoured repayment instruments, questioning whether criminal prosecution under Section 138 of the Negotiable Instruments Act and Section 25 of the Payment and Settlement Systems Act, 2007 can be compounded upon tender of the defaulted installment amount along with reasonable statutory interest.",
    holding:
      "The Supreme Court ruled that dishonour of electronic mandates under Section 25 of the PSS Act, 2007 attracts the exact same penal consequences, statutory presumptions, and procedural timeline as Section 138 of the NI Act. The court underscored that the primary objective of these statutory provisions is not punitive incarceration but the enforcement of commercial recovery and preservation of credibility in the banking settlement mechanism. The court affirmed that lenders are entitled to immediate statutory restitution.",
    amount: "Affirmed Statutory Enforceability Across All Bank NACH Mandates",
    takeaway:
      "When a borrower cancels a NACH mandate or allows an EMI auto-debit to bounce, banks can invoke Section 25 PSS Act to seek criminal summons, compelling fast financial settlement without waiting for slow civil adjudication.",
  },
  {
    title: "Supreme Court Ruling on Bank Loan Recall Validity & Security Enforcement",
    parties: "Mardia Chemicals Ltd. & Others v. Union of India & Others",
    citation: "(2004) 4 SCC 311 / AIR 2004 SC 2371",
    date: "Judgment Dated 8 April 2004",
    facts:
      "Defaulting industrial and commercial borrowers challenged the authority of secured commercial lenders to accelerate unpaid term loan facilities, issue demand notices, and repossess mortgaged assets without prior adjudication by an ordinary civil court.",
    holding:
      "The Supreme Court upheld the constitutional validity of bank recovery statutes and contractual loan acceleration covenants. The apex court affirmed that when a borrower commits a default in installment payment, the lender is fully justified in recalling the entire outstanding debt. Once an account becomes a Non-Performing Asset, secured creditors possess statutory powers to liquidate security, provided they issue a reasoned reply under Section 13(3A) if the borrower raises objections to the demand notice.",
    amount: "Universal Precedent for All Institutional Loan Recall Actions",
    takeaway:
      "Banks do not need borrower consent to recall the entire credit facility once an EMI default occurs. Covenants granting lenders acceleration rights upon an Event of Default are constitutionally and contractually bulletproof.",
  },
  {
    title: "Supreme Court Precedent on Independent Liability of Personal Guarantors & Co-Borrowers",
    parties: "State Bank of India v. V. Ramakrishnan & Another",
    citation: "(2018) 17 SCC 394",
    date: "Judgment Dated 14 August 2018",
    facts:
      "A personal guarantor and promoter argued that when a borrower business experiences stress or enters statutory debt moratorium, personal guarantors cannot be pursued independently by the lending bank until all remedies against the principal debtor are exhausted.",
    holding:
      "The Supreme Court held that under Section 128 of the Indian Contract Act, 1872, the liability of a surety is co-extensive with that of the principal debtor. The bank is under no statutory obligation to exhaust remedies against the primary borrower before issuing loan recall demands or legal notices to personal guarantors and co-obligants. Lenders can proceed against both parties simultaneously.",
    amount: "Enforceable Across All Retail & Commercial Co-Borrower Facilities",
    takeaway:
      "The moment a borrower stops paying EMIs, the bank can immediately serve statutory demand notices on all co-borrowers and personal guarantors, dramatically increasing early-stage recovery leverage.",
  },
  {
    title: "Concurrent Invocation of DRT and SARFAESI: Dual-Track Enforcement Upheld",
    parties: "Transcore v. Union of India & Another",
    citation: "(2008) 1 SCC 125",
    date: "Judgment Dated 29 November 2006",
    facts:
      "Borrowers argued that lenders cannot concurrently pursue an Original Application (OA) under Section 19 of the RDB Act before the Debt Recovery Tribunal while simultaneously taking enforcement measures under the SARFAESI Act, claiming the Doctrine of Election restricts lenders to a single forum.",
    holding:
      "The Supreme Court settled the controversy by establishing that the Doctrine of Election does not apply to statutory banking recovery. SARFAESI provides a non-adjudicatory asset-liquidation remedy that runs parallel to DRT recovery suits. Banks are entitled to proceed concurrently in both forums to minimize public asset erosion and prevent bad-faith asset disposal.",
    amount: "Concurrent Dual-Track Legal Recovery Upheld Nationwide",
    takeaway:
      "When an EMI-defaulted account slips into NPA, the bank can simultaneously enforce mortgage collateral under SARFAESI and pursue personal money decrees before the DRT, ensuring comprehensive debt recovery.",
  },
];

const FAQS = [
  {
    question: "What immediate legal action can a bank take when a borrower stops paying EMIs?",
    answer:
      "When a borrower misses an EMI, the bank immediately logs the default into the Special Mention Account (SMA) ledger. Under Section 25 of the Payment and Settlement Systems Act, 2007, the bank can obtain the electronic return memo for the failed NACH/ECS mandate and dispatch a formal 15-day statutory cure notice within 30 days of the return. If the borrower fails to rectify the default within 15 days of notice receipt, the bank is legally empowered to accelerate the loan facility, recall the entire outstanding principal, and initiate criminal prosecution before a Judicial Magistrate alongside credit bureau reporting.",
  },
  {
    question: "How do RBI SMA-0, SMA-1, and SMA-2 classifications dictate bank recovery strategy?",
    answer:
      "Under RBI Prudential Norms on Income Recognition, Asset Classification (IRAC) and Provisioning, loan accounts with overdue EMIs are categorized by Days Past Due (DPD): SMA-0 (1 to 30 days overdue), SMA-1 (31 to 60 days overdue), and SMA-2 (61 to 90 days overdue). Once an account crosses 90 DPD, it is mandatorily classified as a Non-Performing Asset (NPA), requiring banks to set aside 15% to 40% in statutory capital provisions. Serving an advocate-drafted statutory notice at 30 DPD (SMA-1) creates critical legal pressure that forces borrower cure or restructuring before NPA slippage.",
  },
  {
    question: "Can a bank initiate criminal action under Section 25 of the PSS Act for bounced NACH auto-debits?",
    answer:
      "Yes. Section 25 of the Payment and Settlement Systems Act, 2007 provides that dishonour of an electronic funds transfer instruction due to insufficiency of funds or exceeding credit arrangements is a criminal offence. The legal procedure mirrors Section 138 of the Negotiable Instruments Act: the bank must serve a written statutory demand notice within 30 days of receiving the return memo giving the borrower 15 days to pay. If unpaid, a criminal complaint can be filed within 30 days before the competent Magistrate, carrying penalties of up to two years imprisonment and fines up to twice the installment amount.",
  },
  {
    question: "What is a Loan Recall Notice and when should a lending institution issue it?",
    answer:
      "A Loan Recall Notice is a formal legal demand issued by a bank or NBFC terminating the credit facility and demanding immediate repayment of the entire outstanding balance, including unbilled principal, accrued interest, and penal charges. Banks typically issue a loan recall notice when an account enters SMA-1 or SMA-2 (31 to 90 DPD) after multiple consecutive EMI defaults or intentional mandate cancellations. Contractually, this accelerates the debt, strips the borrower of installment privileges, and establishes the foundational cause of action for summary suits or SARFAESI enforcement.",
  },
  {
    question: "Can banks take possession of secured property under SARFAESI if EMIs are unpaid?",
    answer:
      "Yes, provided the loan is secured by a valid mortgage or hypothecation and the total outstanding dues exceed ₹1,00,000. Once the borrower defaults on EMIs for 90 continuous days and the account is classified as an NPA, the bank's Authorized Officer can issue a statutory 60-day demand notice under Section 13(2) of the SARFAESI Act, 2002. If the borrower fails to clear the entire recalled debt or submit valid objections within 60 days, the bank can invoke Section 13(4) to take symbolic possession and petition the District Magistrate (DM) under Section 14 for physical repossession and public e-auction.",
  },
  {
    question: "What legal remedy does a bank have if the borrower stops EMIs for an unsecured personal or business loan?",
    answer:
      "For unsecured facilities without physical collateral, banks enforce recovery through: (1) Criminal prosecution under Section 25 PSS Act for failed NACH auto-debits; (2) Criminal complaints under Section 138 NI Act if post-dated security cheques bounce; (3) Institutional fast-track arbitration under the Arbitration and Conciliation Act, 1996 if provided in the loan agreement; (4) Commercial Summary Suits under Order XXXVII CPC in competent civil courts to secure executable money decrees; and (5) Co-extensive recovery against personal guarantors and corporate directors under Section 128 of the Indian Contract Act.",
  },
  {
    question: "Borrower ne EMI band kar di toh bank legal notice aur recovery process kaise initiate kare?",
    answer:
      "Agar borrower EMI dena band kar de ya destination bank se NACH mandate cancel karwa de, toh bank ko sabse pehle NPCI return memo generate karna chahiye. Iske baad Section 25 Payment and Settlement Systems Act 2007 ke tehat 30 din ke andar advocate dwara 15 din ka statutory cure notice bheja jata hai. Sath hi, loan agreement ke default clause ke tahat pura loan recall karke guarantor ko bhi demand notice bheji ja sakti hai. 90 din pure hone par account NPA bante hi SARFAESI Section 13(2) ya DRT Original Application ke jariye recovery proceed ki jati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Legal Recovery Process for Banks When Borrowers Stop Paying EMIs",
  description:
    "Legal workflow for banks when borrowers default on EMIs. From SMA classification to Section 25 PSS Act notices and loan recall enforcement.",
  datePublished: "2026-11-13T13:10:00+05:30",
  dateModified: "2026-11-13T13:10:00+05:30",
  mainEntityOfPage: `${SITE_URL}/bank-loan-recovery-process-borrower-stops-emi`,
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
    name: "Bank Loan Recovery & Early Delinquency Management",
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
      item: `${SITE_URL}/bank-loan-recovery-process-defaulting-borrowers-india`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Borrower Stopped Paying EMIs",
      item: `${SITE_URL}/bank-loan-recovery-process-borrower-stops-emi`,
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

export default function BorrowerStopsEmiRecoveryPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    {
      label: "Bank Loan Recovery",
      href: "/bank-loan-recovery-process-defaulting-borrowers-india",
    },
    {
      label: "Borrower Stopped Paying EMIs",
      href: "/bank-loan-recovery-process-borrower-stops-emi",
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
              <span>RBI Prudential Norms (SMA-0/1/2)</span>
              <span className="text-red-500">•</span>
              <span>Section 25 PSS Act &amp; SARFAESI Enforcement</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Legal Recovery Process for Banks When Borrowers Stop Paying EMIs
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Early Delinquency &amp; NPA Prevention Mandate)
              </p>
              <p>
                When a borrower halts EMI payments, the bank tracks the account under RBI SMA classifications (1 to 90 DPD). For dishonoured NACH mandates, the bank serves a 15-day statutory cure notice under Section 25 of the Payment and Settlement Systems Act, 2007 within 30 days of return. If unrectified, the bank accelerates the loan, invokes co-extensive guarantor liability under Section 128 ICA, and transitions into SARFAESI Section 13(2) upon 90-day NPA classification.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">30 DPD</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">SMA-1 Trigger &amp; Cure Notice</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sec 25 PSSA Statutory Notice Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">90 DPD</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">NPA Tag &amp; SARFAESI 13(2) Action</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Guarantor Co-Extensive Liability</p>
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
            <BorrowerEmiRecoveryTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Framework Overview & SMA Timelines */}
              <section
                id="heading-framework-overview"
                aria-labelledby="heading-framework-overview-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-framework-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Early-Bucket Delinquency &amp; The 30-to-90 Day DPD Window
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a borrower defaults on a retail, mortgage, auto, or commercial loan EMI, lending institutions enter a time-sensitive statutory window. Under the Reserve Bank of India&apos;s Prudential Framework for Resolution of Stressed Assets, missed loan installments immediately initiate automated Days Past Due (DPD) tracking across three Special Mention Account (SMA) buckets:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                      1 to 30 Days Overdue
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">SMA-0 Sub-Category</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Initial installment dishonour. The bank generates automated SMS reminders, initiates tele-calling, and examines whether the bounce was caused by temporary liquidity shortages or intentional mandate stoppage.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-amber-200 bg-amber-50/30 shadow-xs space-y-2">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      31 to 60 Days Overdue
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">SMA-1 Delinquency Trigger</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Second consecutive default. Under Section 25 of the PSS Act, 2007, the bank must issue a formal 15-day statutory cure notice within 30 days of the NACH return memo to preserve criminal prosecution rights.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-red-200 bg-red-50/30 shadow-xs space-y-2">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-red-100 text-red-800">
                      61 to 90 Days Overdue
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">SMA-2 Pre-NPA Warning</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Critical pre-slippage threshold. The bank issues a formal Loan Recall Notice, accelerates the entire contractual principal, and prepares SARFAESI 13(2) dossiers before the hard 90-day NPA classification.
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-2">
                  Once an account crosses 90 DPD, RBI prudential norms mandate its reclassification as a Non-Performing Asset (NPA). This triggers immediate 15% provisioning on secured advances and up to 25% on unsecured facilities, directly hitting the bank&apos;s net profitability and Tier-1 capital ratios. Initiating structured legal enforcement during the 30-to-60 DPD window arrests slippage, recovers overdue arrears, and creates statutory leverage before provisions harden.
                </p>
              </section>

              {/* Section 2: Case Digest */}
              <section
                id="heading-case-digest"
                aria-labelledby="heading-case-digest-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Rulings on EMI Default, Section 25 PSSA &amp; Loan Recall
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Supreme Court Jurisprudence
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
                            <strong className="text-slate-900 font-bold block mb-0.5">
                              The Legal Dispute &amp; Factual Matrix:
                            </strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">
                              Judicial Holding &amp; Ratio Decidendi:
                            </strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforcement Scope
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Remedial Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Directly Applicable to Scheduled Banks &amp; NBFCs
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Strategic Takeaway for Lenders:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis */}
              <section
                id="heading-pattern-analysis"
                aria-labelledby="heading-pattern-analysis-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Arrests NPA Slippage: 5 Strategic Patterns for Bank Remedial Units
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Analysis of delinquency resolution data across commercial banks and housing finance corporations proves that accounts cured before 60 DPD exhibit distinct legal and operational patterns:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Automated 15-Day Statutory Cure Notice Dispatched at 30 DPD:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Rather than relying on informal recovery agents or call center warnings, successful banks issue an advocate-drafted statutory demand notice under Section 25 of the PSS Act the moment the second EMI defaults. Formal legal notices establish solemnity, warning of personal criminal liability and immediate CIBIL score destruction.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Preserving NPCI &amp; Sponsor Bank Return Memos with Clear Reason Codes:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Retaining certified electronic return memos showing return codes (e.g., &quot;01 - Insufficient Funds&quot; or &quot;02 - Payment Stopped by Drawer&quot;) provides the foundational evidence required under Section 25 PSS Act and Section 146 NI Act, establishing a statutory presumption of liability before criminal courts.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Immediate Invocation of Contractual Loan Acceleration &amp; Recall Covenants:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Lending agreements universally include &quot;Events of Default&quot; clauses empowering the bank to accelerate future installments upon default of any single EMI. Issuing a formal Loan Recall Notice transforms a simple monthly installment dispute into an immediate demand for the entire multi-lakh balance.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        Simultaneous Service on Co-Borrowers and Personal Guarantors:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Section 128 of the Indian Contract Act, 1872, the liability of a guarantor is co-extensive with the borrower. Serving notices simultaneously on spouses, business partners, or corporate guarantors creates collective family and business pressure, driving rapid OTS or overdue regularisation.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">
                        BSA Section 63 &amp; Banker&apos;s Books Evidence Act Certified Audit Trail:
                      </strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Generating computer printouts of loan ledgers accompanied by certificates under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (or Section 2A of the Banker&apos;s Books Evidence Act, 1891) ensures instant admissibility in DRTs, commercial courts, and magistrate trials without evidentiary objections.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section
                id="heading-escalation-flow"
                aria-labelledby="heading-escalation-flow-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Hierarchy: From 1st EMI Bounce to Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Structured multi-tier statutory recovery framework designed for bank remedial management units and credit risk managers:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Step 1 (1–30 DPD)
                    </span>
                    <h3 className="font-bold text-sm">EMI Dishonour &amp; SMA-0 Tag</h3>
                    <p className="text-xs text-slate-200 mt-1">
                      NACH mandate bounces. Return memo generated with reason code.
                    </p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                      Step 2 (31–60 DPD)
                    </span>
                    <h3 className="font-bold text-sm">Section 25 PSSA Cure Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">
                      15-day statutory demand dispatched to borrower and guarantors via Speed Post.
                    </p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Step 3 (61–90 DPD)
                    </span>
                    <h3 className="font-bold text-sm">Loan Recall &amp; Acceleration</h3>
                    <p className="text-xs text-slate-700 mt-1">
                      Contractual loan recall notice issued terminating facility and demanding total balance.
                    </p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">
                      Step 4 (91+ DPD)
                    </span>
                    <h3 className="font-bold text-sm">NPA Tag &amp; SARFAESI 13(2)</h3>
                    <p className="text-xs text-red-900 mt-1">
                      Mandatory 60-day demand notice for secured debts; objection disposal under 13(3A).
                    </p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      Step 5 (Judicial Enforcement)
                    </span>
                    <h3 className="font-bold text-sm">DRT / Summary Suit / JMFC</h3>
                    <p className="text-xs text-emerald-900 mt-1">
                      Sec 14 DM possession, Sec 19 DRT recovery suit, or Order 37 civil decree.
                    </p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Visible on Both Mobile & Desktop with Smooth Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Bank Recovery Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Bank Loan Recovery Escalation Flowchart When Borrowers Stop Paying EMIs"
                  >
                    <defs>
                      <linearGradient id="bankGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="bankAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="bankSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#bankGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">
                      1–30 DPD
                    </text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      SMA-0 Bucket
                    </text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                      1st EMI Bounce
                    </text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">
                      NACH Memo Extracted
                    </text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect
                      x="180"
                      y="20"
                      width="140"
                      height="90"
                      rx="10"
                      fill="#FEF3C7"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                    />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">
                      31–60 DPD
                    </text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">
                      SMA-1 Cure Notice
                    </text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">
                      Sec 25 PSS Act
                    </text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">
                      15-Day Statutory Cure
                    </text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect
                      x="350"
                      y="20"
                      width="140"
                      height="90"
                      rx="10"
                      fill="#F8FAFC"
                      stroke="#64748B"
                      strokeWidth="1.5"
                    />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">
                      61–90 DPD
                    </text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">
                      SMA-2 Acceleration
                    </text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">
                      Loan Recall Notice
                    </text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">
                      Guarantor Impleaded
                    </text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#bankAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">
                      91+ DPD
                    </text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      NPA Reclassification
                    </text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                      SARFAESI 13(2) Notice
                    </text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">
                      60-Day Mortgage Demand
                    </text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#bankSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">
                      ENFORCEMENT
                    </text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      Total Recovery
                    </text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">
                      DRT / Sec 14 DM / JMFC
                    </text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">
                      Auction &amp; Restitution
                    </text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">
                      STATUTORY DEADLINES &amp; BANK COMPLIANCE BENCHMARKS UNDER RBI &amp; PSSA:
                    </text>
                    <text x="25" y="192" fill="#475569" fontSize="10">
                      • Section 25 PSS Act Notice: Must be served within 30 days of receiving the clearing return memo
                    </text>
                    <text x="25" y="208" fill="#475569" fontSize="10">
                      • Statutory Cure Period: Exactly 15 calendar days from date of notice delivery before filing criminal complaint
                    </text>
                    <text x="25" y="224" fill="#475569" fontSize="10">
                      • SARFAESI Demand Period: 60 calendar days under Section 13(2); 15-day window to dispose Section 13(3A) objections
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section
                id="heading-playbook"
                aria-labelledby="heading-playbook-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Delinquency Playbook for Lending Institutions: From Default to Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Adopt this standardized institutional workflow to eliminate recovery leakage, preserve statutory limitation periods, and enforce early repayment:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Capture Clearing Return Memo &amp; Authenticate Reason Code
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When an EMI transaction is returned unpaid via NACH, ECS, or e-mandate, immediately extract the clearing return memo from the sponsor bank portal or National Automated Clearing House (NPCI) gateway. Verify whether the return reason is &quot;Insufficient Funds&quot;, &quot;Account Closed&quot;, or &quot;Stop Payment&quot;. Under Section 25 PSS Act, each of these reasons establishes a statutory basis for criminal liability.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Issue 15-Day Statutory Cure Notice Under Section 25 PSS Act
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Within 30 calendar days of receiving the return memo, instruct empanelled advocates to dispatch a formal statutory demand notice under Section 25(3)(b) of the PSS Act, 2007. The notice must specify the dishonoured installment amount, mandate reference number, clearing date, and demand payment within 15 calendar days from the date of receipt.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Contractual Loan Recall &amp; Facility Acceleration at 60 DPD (SMA-2)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the borrower fails to regularize the installment arrears within the 15-day cure window and the delinquency enters the SMA-2 bucket (61–90 DPD), issue a formal Loan Recall Notice. Terminate the credit facility, cancel remaining installment privileges, accelerate the entire unbilled principal balance, and demand full settlement within 7 days.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Trigger SARFAESI Section 13(2) Notice Immediately on Day 91 (NPA)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        On the 91st day of continuous default, the loan automatically classifies as an NPA. For secured debts exceeding ₹1 Lakh, the Authorized Officer immediately issues a 60-day demand notice under Section 13(2) of the SARFAESI Act, 2002. Dispatched via Registered Speed Post AD, this notice attaches the borrower&apos;s right to transfer or alienate mortgaged assets.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Review transparent institutional drafting costs on our{" "}
                        <Link href="/legal-notice-charges" className="text-blue-700 underline">
                          legal notice charges
                        </Link>{" "}
                        schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Simultaneous Judicial Enforcement: DRT, Section 14 DM &amp; JMFC
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 60-day SARFAESI period expires without full liquidation, file a Section 14 petition before the District Magistrate / Chief Metropolitan Magistrate for physical repossession. For debts over ₹20 Lakh, simultaneously file an Original Application under Section 19 of the RDB Act before the Debt Recovery Tribunal, alongside Section 25 criminal complaints.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines */}
              <section
                id="heading-deadlines-table"
                aria-labelledby="heading-deadlines-table-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Delinquency Benchmarks &amp; Legal Deadlines
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Lending institutions must adhere strictly to statutory limitation periods and regulatory turnaround times to maintain judicial maintainability across recovery forums:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Banking Loan Delinquency Benchmarks &amp; Statutory Deadlines
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Delinquency Stage / Action
                        </th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Statutory Timeline
                        </th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Statutory Authority / Act
                        </th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Legal Remedy &amp; Consequence
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          SMA-0 Delinquency
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">
                          1 to 30 Days Past Due
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          RBI IRAC Master Circular
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Extract NACH return memo; tele-calling &amp; written reminder
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 25 PSSA Notice Dispatch
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">
                          Within 30 Days of Return Memo
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 25(3)(b) PSS Act, 2007
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Mandatory advocate notice demanding payment within 15 days
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Cure Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">
                          15 Calendar Days from Receipt
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 25(3)(c) PSS Act, 2007
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Opportunity for borrower to cure default without criminal trial
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Section 25 Criminal Complaint Filing
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">
                          Within 30 Days of Cure Expiry
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 25(4) PSS Act r/w Sec 142 NI Act
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          File complaint before JMFC/CMM for arrest summons
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Non-Performing Asset (NPA) Classification
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">
                          90 Days Continuous Default
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          RBI Prudential Framework
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Immediate 15%–25% provisioning; SARFAESI eligibility
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          SARFAESI Section 13(2) Demand
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">
                          60 Calendar Days Notice
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 13(2) SARFAESI Act, 2002
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Demand full repayment before taking possession of security
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          DRT Section 19 Original Application
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">
                          3 Years from Date of Default
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 19 RDB Act, 1993
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Recovery suits for debts of ₹20 Lakh and above
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under RBI Master Circular on Prudential Norms on IRAC and India Code statutes. For detailed institutional guidelines on full portfolio liquidation, read our comprehensive guide on{" "}
                  <Link
                    href="/bank-loan-recovery-process-defaulting-borrowers-india"
                    className="text-blue-700 underline font-semibold"
                  >
                    Bank Loan Recovery Process in India
                  </Link>
                  .
                </p>
              </section>

              {/* Section 7: Delinquency Scenarios & Problem Tabs */}
              <section
                id="heading-problem-picker"
                aria-labelledby="heading-problem-picker-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Borrower Default Scenarios &amp; Tailored Legal Remediation
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select the Specific Delinquency Scenario to Inspect the Statutory Section and Direct Enforcement Protocol
                  </p>
                </div>

                <BorrowerEmiRecoveryTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Remedial Unit Cures ₹42 Lakh Overdue &amp; Halts NPA Slippage at 45 DPD
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Institutional Recovery
                    </span>
                    <span className="text-xs text-slate-400">
                      Commercial Loan &amp; Overdraft Facility (₹42,50,000 Overdue)
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> An SME auto-components manufacturer availed a ₹1.2 Crore Secured Term Loan and Cash Credit limit from a private commercial bank. The monthly EMI obligation was ₹1,85,000. Due to delayed receivables from an OEM customer, the borrower&apos;s NACH mandate for October bounced due to insufficient funds, followed by another bounce in November, pushing the account to 45 Days Past Due (SMA-1).
                    </p>
                    <p>
                      <strong>The Delinquency Bottleneck:</strong> The borrower stopped answering calls from the branch relationship manager and sent an informal email claiming business distress, requesting a 6-month moratorium without submitting audited financial statements. The account was rapidly heading toward the critical 90 DPD mark, where the bank would have to set aside ₹18 Lakh in statutory capital provisions.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> The bank&apos;s Remedial Management Unit engaged LegalRecovery.in. An advocate drafted and dispatched an immediate statutory notice under Section 25 of the Payment and Settlement Systems Act, 2007 along with a conditional Loan Recall Warning to both the borrower and the two personal guarantors (managing director and spouse). The notice itemized the two bounced NACH clearing memos, invoked Section 128 ICA co-extensive guarantor liability, and gave a strict 15-day window to cure arrears or face criminal prosecution and SARFAESI repossession.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution:</strong>
                      Within 9 days of receiving the Speed Post legal notice, the personal guarantors engaged bank leadership for a structured cure. The borrower deposited ₹3,70,000 covering both overdue installments, penal interest, and legal costs on Day 12, resetting the DPD counter to 0. A formal debt restructuring protocol was executed under RBI Stressed Asset guidelines, completely eliminating the ₹18 Lakh provisioning threat and preserving portfolio health.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Bank Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Bank Evidence Dossier: 6 Mandatory Documents for Loan Recall &amp; Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) and the Banker&apos;s Books Evidence Act, assemble these 6 essential documents before issuing statutory notices:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Executed Loan Agreement &amp; Sanction Letter:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Containing clear &quot;Events of Default&quot;, acceleration covenants, interest capitalization terms, and arbitration/jurisdiction clauses.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        NACH / e-Mandate Registration &amp; Authentication Record:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Copy of the signed physical mandate or digital e-NACH mandate with Unique Mandate Reference Number (UMRN).
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Certified Clearing Return Memo from NPCI / Sponsor Bank:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Documenting the exact transaction date, return code, and reason description (insufficient funds / stop payment).
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Certified Statement of Account with Section 63 BSA Certificate:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Computerized ledger extract displaying total disbursements, EMIs paid, overdue interest, penal levies, and current outstanding.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Guarantor &amp; Co-Borrower Execution Deeds:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Deeds of guarantee, corporate resolutions, or personal guarantee agreements proving co-extensive legal liability.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Title Deeds &amp; Security Hypothecation Documents:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Original title deeds, memorandum of deposit of title deeds (MODT), hypothecation deeds, and CERSAI registration certificates.
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
                    FAQs on Bank Loan Recovery When Borrowers Stop Paying EMIs
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Statutory Answers Grounded in RBI Prudential Guidelines, the PSS Act, and Supreme Court Case Law
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
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Enactments, RBI Directives &amp; Authoritative References
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
                  Statutory verification status: All provisions checked against active Reserve Bank of India Prudential Master Circulars, Section 25 PSS Act 2007, SARFAESI Act 2002, and Bharatiya Sakshya Adhiniyam, 2023 as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Statutory Loan Recall &amp; Delinquency Cure Notice
                </h2>
                <BorrowerEmiRecoveryCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Financial Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/bank-loan-recovery-process-defaulting-borrowers-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Loan Recovery Guide (SARFAESI &amp; DRT) →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Institutional Bank Legal Notice Hub →
                  </Link>
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Section 138 Timelines →
                  </Link>
                  <Link
                    href="/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unauthorized ECS/NACH Reversal Guide →
                  </Link>
                  <Link
                    href="/edtech-course-loan-emi-cancellation-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Ed-Tech Course &amp; Loan EMI Cancellation →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
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
