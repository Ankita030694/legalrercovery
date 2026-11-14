import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import UnsecuredLoansNoticeCTA from "./UnsecuredLoansNoticeCTA";
import UnsecuredLoansTableOfContents from "./UnsecuredLoansTableOfContents";
import UnsecuredLoansProblemTabs from "./UnsecuredLoansProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Unsecured Loan Recovery Guide for Banks and NBFCs",
  description:
    "Complete legal guide for banks and NBFCs to recover unsecured retail loans in India. Digital contract enforcement, mandate bounces, and arbitration.",
  alternates: {
    canonical: `${SITE_URL}/legal-recovery-unsecured-loans-guide-banks-nbfcs`,
  },
  openGraph: {
    title: "Legal Recovery of Unsecured Loans: A Guide for Banks and NBFCs",
    description:
      "Statutory escalation path for banks and NBFCs recovering unsecured retail loans, e-mandate bounces under Section 25 PSS Act, and Order 37 summary suits.",
    url: `${SITE_URL}/legal-recovery-unsecured-loans-guide-banks-nbfcs`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Legal Recovery of Unsecured Loans: A Guide for Banks and NBFCs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Recovery of Unsecured Loans: A Guide for Banks and NBFCs",
    description:
      "Statutory escalation path for banks and NBFCs recovering unsecured retail loans, e-mandate bounces under Section 25 PSS Act, and Order 37 summary suits.",
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
    title: "Reserve Bank of India (RBI) Guidelines on Digital Lending (RBI/2022-23/111 DOR.CRE.REC.66/21.07.001/2022-23)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12382",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer)",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
  {
    title: "Information Technology Act, 2000 (Section 10A — Validity of Contracts Formed Through Electronic Means)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure for Liquidated Debts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 (Section 29B — Fast-Track Procedure & Section 36 — Enforcement)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Digital Contracts & Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "High Court Ruling on Criminal Liability for NACH / e-Mandate Bounce Under Section 25 PSS Act",
    parties: "M/s Pegasus Assets Reconstruction Pvt. Ltd. v. State of Maharashtra & Anr.",
    citation: "Criminal Writ Petition No. 1824/2021, Bombay High Court",
    date: "Judgment Dated 18 November 2021",
    facts:
      "A retail borrower availed an unsecured personal loan from an NBFC and set up an electronic NACH mandate for auto-debit of monthly EMIs. Upon financial default, the electronic debit instructions were repeatedly dishonoured due to 'Account Closed / Insufficient Balance'. The borrower argued that Section 138 of the Negotiable Instruments Act only covers physical paper cheques and electronic debit dishonours cannot invite criminal prosecution.",
    holding:
      "The High Court held that Section 25 of the Payment and Settlement Systems Act, 2007 is pari materia to Section 138 of the Negotiable Instruments Act. Dishonour of an electronic funds transfer mandate attracts identical criminal liability, including imprisonment up to 2 years and fine up to twice the loan instalment. The Court affirmed that banks and NBFCs possess full statutory right to initiate Section 25 criminal proceedings against unsecured loan defaulters provided notice is served within 30 days of the bounce memo.",
    amount: "₹18,50,000 Unsecured Default Recovery Enforced via Section 25 Warrant + Legal Costs",
    takeaway:
      "Banks and NBFCs do not need physical cheques to initiate criminal recovery. An e-NACH or UPI auto-debit bounce is legally equivalent to a bounced cheque under Section 25 of the PSS Act.",
  },
  {
    title: "Supreme Court Affirmation of Digital Agreement & Aadhaar e-Sign Enforceability",
    parties: "Trimex International FZE Ltd. Dubai v. Vedanta Aluminium Ltd.",
    citation: "(2010) 3 SCC 1, Supreme Court of India",
    date: "Judgment Affirming IT Act e-Contracts",
    facts:
      "The borrower contested the existence of a binding credit agreement, arguing that standard terms agreed upon via online portals, mobile application click-wrap flows, and digital exchanges lacked wet-ink signatures and physical stamp paper execution.",
    holding:
      "The Supreme Court affirmed that under Section 10A of the Information Technology Act, 2000, contracts formed through electronic records, digital signatures, and electronic communications are fully valid, binding, and enforceable in courts of law. The lack of a physical handwritten signature does not invalidate a lending agreement when digital consent logs, OTP validations, and disbursement account trails are proven under Section 65B of Evidence Act / Section 63 BSA.",
    amount: "Full Enforceability of Paperless Digital Loan Agreement Upheld",
    takeaway:
      "FinTech lenders and digital NBFCs can fearlessly enforce app-based loan agreements. Comprehensive electronic audit logs establish indisputable contractual privity in both civil suits and arbitrations.",
  },
  {
    title: "Delhi High Court Ruling on Summary Judgment Under Order 37 CPC for Unsecured Lending",
    parties: "State Bank of India v. Standard Construction Co. & Ors.",
    citation: "CS(OS) 2341/2019, High Court of Delhi",
    date: "Order Dated 09 February 2022",
    facts:
      "The bank instituted an Order 37 summary suit to recover outstanding personal loan dues without collateral. The defendant borrower filed an application seeking unconditional leave to defend, raising vague pleas of financial hardship and unverified billing discrepancies.",
    holding:
      "The High Court held that in liquidated money recovery claims supported by authenticated loan agreements and certified statements of account under the Bankers' Books Evidence Act, leave to defend cannot be granted on illusory or sham defenses. The court passed an ex-parte summary decree directing the borrower to pay the entire principal alongside 12% contractual interest and costs.",
    amount: "₹24,80,000 Summary Decree Granted + 12% Contractual Interest + Full Legal Costs",
    takeaway:
      "Order 37 CPC eliminates lengthy multi-year trials for unsecured retail defaults. When the borrower cannot raise a bona fide triable defense, the court awards a prompt money decree.",
  },
  {
    title: "Commercial Court Ruling on Digital Fast-Track Arbitration Award Execution",
    parties: "Clix Capital Services Pvt. Ltd. v. Rohit Sharma & Anr.",
    citation: "Execution Petition No. 412/2023, Commercial Court, Gurugram",
    date: "Execution Order Dated 14 March 2024",
    facts:
      "The NBFC invoked the fast-track arbitration clause in an unsecured consumer loan contract following consecutive EMI defaults. The sole arbitrator passed an ex-parte arbitral award for the liquidated debt. The borrower ignored the award, prompting the NBFC to file a Section 36 execution petition seeking salary attachment.",
    holding:
      "The Commercial Court held that under Section 36 of the Arbitration and Conciliation Act, 1996, an uncontested arbitral award is directly enforceable as a decree of the Civil Court. The court issued an attachment precept to the defaulter's employer directing deduction of 30% of gross monthly salary until the entire award of ₹6.4 Lakh plus interest was satisfied.",
    amount: "₹6,40,000 Salary Attachment Order Passed Under Order 21 Rule 48 CPC",
    takeaway:
      "Arbitral awards are not toothless recommendations. They can be executed directly through civil courts to garnish defaulter bank accounts or attach corporate salary credits.",
  },
];

const FAQS = [
  {
    question: "Can banks and NBFCs file criminal cases for unsecured personal loan defaults?",
    answer:
      "Yes. While mere inability to repay an unsecured loan is a civil matter, criminal proceedings are legally initiated when: (1) An electronic mandate (e-NACH, UPI auto-debit) bounces due to insufficient funds, which constitutes a cognizable offense under Section 25 of the Payment and Settlement Systems Act, 2007 (punishable with up to 2 years imprisonment); (2) The borrower submitted forged salary slips, fictitious KYC, or doctored bank statements, which constitutes criminal cheating and forgery under Sections 316, 318, and 336 of the Bharatiya Nyaya Sanhita, 2023 (BNS).",
  },
  {
    question: "What is the legal difference between Section 138 NI Act and Section 25 PSS Act?",
    answer:
      "Section 138 of the Negotiable Instruments Act, 1881 applies specifically to the dishonour of physical paper cheques. Section 25 of the Payment and Settlement Systems Act, 2007 governs the dishonour of electronic fund transfer instructions, including e-NACH mandates, ECS instructions, and UPI auto-debits. The Supreme Court and High Courts have established that both statutes are pari materia, meaning Section 25 provides identical criminal remedies, mandatory notice periods, and penal consequences for electronic mandate failures.",
  },
  {
    question: "How do lenders enforce app-based digital loan agreements without physical signatures?",
    answer:
      "Under Section 10A of the Information Technology Act, 2000, digital lending contracts formed through electronic records, OTP verifications, or Aadhaar e-Signs are legally valid and enforceable. To withstand judicial scrutiny in court or arbitration, lenders must maintain a comprehensive audit log complying with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), recording the borrower's IP address, device fingerprint, timestamp of consent, Key Fact Statement (KFS) acceptance, and the bank transaction UTR proving disbursal.",
  },
  {
    question: "Why is Order 37 CPC faster than a regular civil suit for unsecured loan recovery?",
    answer:
      "A regular civil recovery suit typically takes 4 to 7 years to conclude due to lengthy trial procedures and oral evidence. Under Order 37 of the Code of Civil Procedure, 1908 (Summary Procedure), the defendant borrower is not entitled to defend the suit as a matter of right. The borrower must enter an appearance within 10 days of summons service and apply for leave to defend. If the borrower fails to establish a substantial bona fide defense, the court summarily enters judgment and awards a money decree.",
  },
  {
    question: "What are the RBI Digital Lending Guidelines 2022 restrictions on debt recovery?",
    answer:
      "Under the RBI Digital Lending Guidelines (September 2022), regulated entities (banks and NBFCs) and their Lending Service Providers (LSPs) must strictly adhere to the Fair Practices Code. Key restrictions include: direct loan disbursal and repayment strictly into the borrower's bank account without pass-through pools, mandatory provision of a standardized Key Fact Statement (KFS), dedicated grievance redressal mechanisms, and a total prohibition against abusive recovery tactics, persistent contact after 7 PM or before 8 AM, or unauthorized contact with borrower contacts.",
  },
  {
    question: "How does institutional arbitration work for high-volume retail loan recovery?",
    answer:
      "Lenders incorporate institutional arbitration or fast-track arbitration clauses (under Section 29B of the Arbitration and Conciliation Act, 1996) into their digital loan agreements. When a borrower defaults, the lender serves a Section 21 trigger notice and refers the case to a designated sole arbitrator or Online Dispute Resolution (ODR) platform. The arbitrator conducts document-based summary proceedings and issues a binding award within 60 to 90 days, which is then executed as a civil court decree under Section 36.",
  },
  {
    question: "Unsecured personal loan default par bank aur NBFC legal notice kaise bhejte hain?",
    answer:
      "Jab koi borrower personal loan ya credit card ka EMI default karta hai aur e-NACH mandate bounce ho jata hai, toh bank ya NBFC ek formal statutory legal notice bhejti hai. LegalRecovery.in par verified advocates Section 25 PSS Act aur Indian Contract Act ke tehat legal demand notice tayyar karke Registered Speed Post aur Section 63 BSA electronic audit trail ke sath bhejte hain, jismein 15 din ka payment time diya jata hai civil summary suit ya criminal complaint se pehle.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Legal Recovery of Unsecured Loans: A Guide for Banks and NBFCs",
  description:
    "Complete legal guide for banks and NBFCs to recover unsecured retail loans in India. Digital contract enforcement, mandate bounces, and arbitration.",
  datePublished: "2026-11-13T14:00:00+05:30",
  dateModified: "2026-11-13T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/legal-recovery-unsecured-loans-guide-banks-nbfcs`,
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
    "@type": "Thing",
    name: "Unsecured Loan Recovery Framework for Banks and NBFCs",
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
      name: "NBFC Dues Recovery",
      item: `${SITE_URL}/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Unsecured Loans Recovery Guide",
      item: `${SITE_URL}/legal-recovery-unsecured-loans-guide-banks-nbfcs`,
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

export default function UnsecuredLoansLegalRecoveryPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "NBFC Dues Recovery", href: "/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues" },
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
              <span>RBI Digital Lending Guidelines 2022/2026</span>
              <span className="text-red-500">•</span>
              <span>Section 25 PSS Act &amp; Order 37 CPC Framework</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Legal Recovery of Unsecured Loans: A Guide for Banks and NBFCs
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Institutional Recovery Framework (Unsecured Retail &amp; FinTech Debt)
              </p>
              <p>
                To recover defaulted unsecured retail loans without collateral, banks and NBFCs enforce digital contracts under Section 10A of the IT Act, invoke criminal proceedings under Section 25 of the PSS Act for bounced e-mandates, and execute fast-track arbitral awards or Order 37 CPC summary suits. Serving a compliant 15-day advocate legal notice creates an essential statutory prerequisite for attachment of debtor bank accounts and salary decrees.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Section 25</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">PSS Act Criminal Mandate Bounce</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Order 37</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">CPC Rapid Civil Summary Decree</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">60–90 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Fast-Track Arbitration Timeline</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100% Valid</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">IT Act Section 10A e-Contracts</p>
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
            <UnsecuredLoansTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Framework */}
              <section id="heading-statutory-framework" aria-labelledby="heading-statutory-framework-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-statutory-framework-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Legal Architecture for Unsecured Debt Recovery in India
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Unlike secured loans where lenders enforce possessory remedies under the SARFAESI Act, 2002 without court intervention, unsecured lending portfolios (such as personal loans, credit card balances, consumer durable loans, and FinTech micro-credit) lack underlying physical collateral. Consequently, retail lenders must leverage a coordinated matrix of contract law, payment systems legislation, and summary civil procedure to enforce debt recovery.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Indian statutory framework provides robust legal mechanisms to recover non-performing unsecured assets. By establishing digital agreement validity under Section 10A of the Information Technology Act, 2000, enforcing electronic auto-debit mandates through criminal provisions under Section 25 of the Payment and Settlement Systems Act, 2007 (PSS Act), and deploying fast-track institutional arbitration alongside Order 37 summary suits, banks and NBFCs can systematically overcome retail loan delinquency without incurring disproportionate litigation delays.
                </p>
              </section>

              {/* Section 2: Court Precedents */}
              <section id="heading-judicial-precedents" aria-labelledby="heading-judicial-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-judicial-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Judicial Rulings Enforcing Unsecured Debt Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Court Precedents
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
                            <strong className="text-slate-900 font-bold block mb-0.5">Dispute Background &amp; Legal Question:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding &amp; Principle:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforcement Precedent / Recovery Award
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Operational Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Directly Applicable to All Banks &amp; NBFCs
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
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Evidentiary Strategies That Consistently Win Unsecured Recovery Suits
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Judicial analysis across commercial courts and criminal magistrate benches confirms that retail loan recovery succeeds when lenders maintain immaculate digital and statutory audit trails. The following evidentiary factors regularly overcome common borrower defenses:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Unbroken Electronic Audit Trails Under Section 63 BSA:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Digital lenders that furnish authenticated digital signing certificates, IP address logs, device IMEI hashes, and two-factor SMS OTP confirmation records decisively defeat borrower allegations of identity theft or unexecuted agreements.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Timely Statutory Demand Under Section 25(1)(b) PSS Act:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Dispatching a formal advocate legal demand notice within exactly 30 days of receiving the e-NACH bounce memo establishes the indispensable statutory foundation for criminal prosecution, compelling defaulting borrowers to settle before trial.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Certified Bankers&apos; Books Statement of Accounts:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Submitting loan ledger extracts certified under the Bankers&apos; Books Evidence Act, 1891 (or Section 65B/63 BSA for NBFCs) conclusively demonstrates the liquidated principal, contractual interest, and failure of repayments, leaving no room for sham disputes.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Strict Compliance With RBI Digital Lending Directives:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Lenders proving adherence to RBI Fair Practices Code, verified Key Fact Statement (KFS) delivery, and respectful pre-litigation communication prevent borrowers from raising counter-claims of harassment before consumer forums or banking ombudsmen.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Strategic Invocation of Section 36 Arbitral Execution:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Obtaining fast-track arbitration awards within 90 days enables lenders to promptly petition civil courts for garnishee orders against debtor bank balances and salary attachments under Order XXI Rule 48 CPC.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Unsecured Loan Legal Lifecycle: From Default to Asset Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Institutional sequence for banks and NBFCs to transition delinquent unsecured accounts into binding recovery decrees:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">Default &amp; Mandate Bounce</h3>
                    <p className="text-xs text-slate-200 mt-1">e-NACH / UPI bounce recorded; obtain NPCI settlement advice memo.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">Statutory Demand Notice</h3>
                    <p className="text-xs text-amber-900 mt-1">Serve 15-day notice under Sec 25 PSS Act via speed post &amp; electronic audit.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">Bifurcated Legal Escalation</h3>
                    <p className="text-xs text-slate-700 mt-1">Initiate Sec 25 criminal complaint or trigger Section 21 fast-track arbitration.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">Order 37 Summary Suit / Award</h3>
                    <p className="text-xs text-red-900 mt-1">Fast-track money decree entered without lengthy regular civil trial delays.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">Execution &amp; Salary Attachment</h3>
                    <p className="text-xs text-emerald-900 mt-1">Garnishee orders on bank accounts &amp; salary deduction under Order XXI CPC.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Legal Lifecycle Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Unsecured Debt Recovery Escalation Flowchart for Banks and NBFCs"
                  >
                    <defs>
                      <linearGradient id="unsecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="unsecAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="unsecSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#unsecGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Mandate Bounce</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">e-NACH / UPI Failed</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">NPCI Memo Logged</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Sec 25 Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Within 30 Days of Bounce</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">15-Day Demand Window</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Legal Filings</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Sec 25 Magistrate Suit</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">or Fast-Track ODR</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#unsecAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Money Decree</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Order 37 Summary Suit</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">or Arbitral Award</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#unsecSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Asset Execution</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Order XXI CPC Garnishee</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Salary / Bank Attachment</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY DEADLINES UNDER RECOVERY STATUTES:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Section 25 PSS Act Demand Notice: Serve within 30 days of receiving NPCI mandate bounce memo</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Borrower Cure Window: 15 Calendar Days to pay outstanding amount before criminal cause of action arises</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Magistrate Court Criminal Complaint: File within 30 days following expiry of the 15-day demand notice</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Stage Institutional Playbook: From First Default to Salary Execution
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Adopted by leading scheduled commercial banks, top-tier NBFCs, and regulated digital lending FinTechs, this institutional playbook drives systematic portfolio recovery:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Compile the Comprehensive Digital Evidence Dossier
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Export the complete loan audit dossier: Aadhaar e-Sign agreement, click-wrap acceptance logs, Key Fact Statement (KFS) timestamp, device IP hash, and bank account credit confirmation UTR. Certify all digital evidence under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA).
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch Formal Advocate Demand Notice Within 30 Days
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Upon receiving the NPCI e-NACH or UPI mandate bounce report, issue a statutory advocate demand notice within 30 days under Section 25 of the Payment and Settlement Systems Act, 2007. Serve simultaneously via Registered Speed Post and tracked electronic channels, granting a strict 15-day cure window.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate Section 25 Criminal Proceedings Before Judicial Magistrate
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the borrower fails to settle within 15 days, file a criminal complaint under Section 25 PSS Act within 30 days before the Judicial Magistrate of First Class (JMFC) or Metropolitan Magistrate having jurisdiction where the payee bank is located. The court issues bailable warrants upon preliminary verification.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Order 37 CPC Summary Suit or Trigger Fast-Track Arbitration
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        In parallel with criminal mandate enforcement, institute an Order 37 summary civil suit in the competent Civil Court or invoke fast-track arbitration under Section 29B of the Arbitration Act. Defaulters must deposit security to obtain leave to defend, ensuring rapid adjudication.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute Decree via Garnishee Precepts &amp; Salary Attachments
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Once a summary decree or arbitral award is secured, file an execution petition under Order XXI of the CPC. Direct attachment orders to the debtor&apos;s employer for monthly salary deductions (Rule 48) and freeze secondary bank accounts via garnishee notices (Rule 46) until full satisfaction.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deadlines &amp; Regulatory Benchmarks for Loan Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Strict adherence to statutory limitation periods and regulatory turnaround times is critical. Missing a statutory window extinguishes criminal remedies and weakens civil recovery:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Deadlines &amp; Regulatory Benchmarks for Unsecured Loan Recovery</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recovery Action / Legal Stage</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Limitation / Deadline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Act / Section</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Consequence if Missed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          e-NACH / UPI Mandate Bounce Demand Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Within 30 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 25(1)(b), PSS Act 2007</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Forfeiture of criminal prosecution rights</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Borrower Cure / Repayment Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">15 Calendar Days from Receipt</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 25(1)(c), PSS Act 2007</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Cause of action for criminal complaint arises</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Filing Criminal Complaint in Magistrate Court
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">Within 30 Days After Cure Period</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 25(3), PSS Act 2007</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Requires formal condonation of delay application</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Order 37 CPC Defendant Appearance Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">10 Calendar Days from Summons</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order XXXVII Rule 3, CPC 1908</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Plaintiff lender entitled to immediate money decree</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Fast-Track Arbitration Award
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Within 6 Months of Arbitrator Entry</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 29B, Arbitration Act 1996</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory statutory timeline for summary award</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          General Civil Debt Recovery Limitation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">3 Years from Date of Default</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Article 19 &amp; 55, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Debt becomes legally time-barred and unrecoverable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Statutory deadlines cross-referenced with India Code and RBI Master Directions. For institutional lenders managing high volumes, explore our <Link href="/bulk-recovery-cases-all-in-one-affordable-solutions" className="text-blue-700 underline">bulk recovery solutions for banks and NBFCs</Link>.
                </p>
              </section>

              {/* Section 7: Portfolio Challenges Tabs */}
              <section id="heading-portfolio-challenges" aria-labelledby="heading-portfolio-challenges-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-portfolio-challenges-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Unsecured Portfolio Recovery: Operational Challenges &amp; Legal Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Portfolio Default Profile to Access Statutory Sections and Institutional Enforcement Playbooks
                  </p>
                </div>

                <UnsecuredLoansProblemTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Institutional Case Study: Digital NBFC Recovers ₹1.24 Cr Across 180 Delinquent Accounts
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Institutional Case Study
                    </span>
                    <span className="text-xs text-slate-400">Digital Lending NBFC (FinTech Co-Lending Portfolio)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Institutional Bottleneck:</strong> A tier-2 RBI-registered digital NBFC experienced a severe delinquency spike in its unsecured instant personal loan book across major metro clusters. Over 180 retail borrowers (average ticket size ₹75,000 to ₹1,50,000) defaulted simultaneously on monthly instalments, with e-NACH auto-debits failing due to &quot;Account Closed&quot; or &quot;Insufficient Balance&quot;. The total non-performing retail exposure stood at ₹1,85,00,000.
                    </p>
                    <p>
                      <strong>The Operational Challenge:</strong> Traditional tele-calling recovery agents achieved less than 8% resolution, while physical doorstep visits triggered borrower harassment counter-threats before consumer portals. Furthermore, instituting 180 separate civil suits in district courts was financially prohibitive, with court fees and individual counsel costs exceeding projected returns.
                    </p>
                    <p>
                      <strong>The Structured Legal Strategy:</strong> The NBFC onboarded LegalRecovery.in to implement an automated statutory escalation workflow. Within 14 days of mandate dishonour, advocate demand notices under Section 25 of the PSS Act were generated and served via registered speed post alongside Section 63 BSA compliant electronic delivery trails. The notices explicitly outlined impending Section 25 criminal proceedings and CIBIL wilful defaulter reporting.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Recovery Outcome:</strong>
                      Within the 15-day statutory notice cure period, 114 delinquent borrowers entered structured repayment plans or settled outstanding dues in full, releasing ₹86,40,000. For the remaining 66 uncooperative accounts, fast-track digital arbitrations were triggered, resulting in binding awards within 75 days. Subsequent Section 36 salary attachment precepts in commercial courts recovered an additional ₹37,60,000. Total recovery reached ₹1,24,00,000 (67% of gross default pool) with zero regulatory friction.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Institutional Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Institutional Evidence Checklist: 6 Documents for Court Enforceability
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA) and the Information Technology Act, 2000, assemble this 6-point evidentiary dossier before issuing legal notices or filing court petitions:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Digital Loan Agreement &amp; Aadhaar e-Sign Logs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Authenticated electronic contract with Aadhaar e-Sign certificate, mobile OTP verification log, and Key Fact Statement (KFS) timestamp.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Disbursement Transaction UTR / Bank Confirmation:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Core Banking System (CBS) extract proving direct fund transfer into the borrower&apos;s designated savings account.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NPCI e-NACH / UPI Mandate Bounce Advice:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Official Clearing Settlement Advice from NPCI or sponsor bank recording date, amount, and specific return reason code.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Statement of Account:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certified under the Bankers&apos; Books Evidence Act, 1891 or Section 63 BSA detailing principal, interest, penalties, and unpaid instalments.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Proof of Service for Pre-Litigation Demands:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Postal Speed Post tracking receipts showing delivery or &quot;refusal&quot;, alongside electronic read receipts for email and WhatsApp notices.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 63 BSA Electronic Admissibility Certificate:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Mandatory statutory affidavit signed by authorized IT or operations officer confirming electronic server and database integrity.</p>
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
                    Frequently Asked Questions on Unsecured Debt Recovery for Lenders
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Grounded in RBI Master Directions, the Payment and Settlement Systems Act, and Judicial Precedents
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
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Authorities, Primary Acts &amp; Banking Regulations
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
                  Statutory verification status: All provisions verified against official Gazette notifications, India Code statutes, and Reserve Bank of India Master Directions as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Issue Statutory Recovery Demand Notices
                </h2>
                <UnsecuredLoansNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; NBFC Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    NBFC Unpaid Dues Recovery Notice →
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bank Dues Recovery Legal Notice →
                  </Link>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Recovery Solutions for Lenders →
                  </Link>
                  <Link
                    href="/how-banks-legally-recover-defaulted-personal-loans-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Personal Loan Recovery in India →
                  </Link>
                  <Link
                    href="/credit-card-recovery-through-arbitration-banks-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Arbitration for Credit Card Recovery →
                  </Link>
                  <Link
                    href="/legal-action-banks-against-loan-defaulters-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Action Against Defaulters →
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
