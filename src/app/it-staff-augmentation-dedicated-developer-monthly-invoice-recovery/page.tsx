import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ItStaffAugmentationNoticeCTA from "./ItStaffAugmentationNoticeCTA";
import ItStaffAugmentationRecoveryTableOfContents from "./ItStaffAugmentationRecoveryTableOfContents";
import ItStaffAugmentationScenarioTabs from "./ItStaffAugmentationScenarioTabs";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
// Legal Reviewer Attribution: Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "IT Staff Augmentation & C2C Vendor Unpaid Invoice Recovery",
  description:
    "Deployed React/Java engineers with unpaid timesheets? Overcome Tier-1 back-to-back excuses using Jira logs, MSMED Act, Section 43B(h) & Order 37.",
  alternates: {
    canonical: `${SITE_URL}/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery`,
  },
  openGraph: {
    title: "IT Staff Augmentation & C2C Vendor Unpaid Invoice Recovery",
    description:
      "Deployed React/Java engineers with unpaid timesheets? Overcome Tier-1 back-to-back excuses using Jira logs, MSMED Act, Section 43B(h) & Order 37.",
    url: `${SITE_URL}/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("IT Staff Augmentation and C2C Vendor Unpaid Invoice Recovery Playbook"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Staff Augmentation & C2C Vendor Unpaid Invoice Recovery",
    description:
      "Deployed React/Java engineers with unpaid timesheets? Overcome Tier-1 back-to-back excuses using Jira logs, MSMED Act, Section 43B(h) & Order 37.",
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
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18, 23 & 24) — Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Income Tax Act, 1961 (Section 43B(h) — Timely Payments to Micro & Small Enterprises) — Central Board of Direct Taxes",
    url: "https://incometaxindia.gov.in/Pages/acts/income-tax-act.aspx",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Jira/DevOps Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Liquidated Commercial Debts & Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Commercial Courts Act, 2015 (Sections 2(1)(c)(xviii) & 12A Mandatory Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2138",
  },
  {
    title: "Copyright Act, 1957 (Sections 17 & 19 — Retention of Software Copyright Until Full Consideration Payment)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on MSMED Act Statutory Supremacy Over Commercial Arbitration Covenants",
    parties: "Silpi Industries etc. v. Kerala State Road Transport Corporation & Anr.",
    citation: "2021 SCC OnLine SC 439, Supreme Court of India",
    facts:
      "A principal buyer sought to defeat statutory interest and conciliation proceedings initiated by an MSME supplier by invoking an exclusive private arbitration clause stipulated in the signed Master Services Agreement.",
    holding:
      "The Supreme Court held that Sections 15 through 23 of the MSMED Act contain statutory non-obstante provisions under Section 24. Any overriding contract clause or unilateral dispute forum agreed between the parties yields to the statutory jurisdiction of the MSEFC. Furthermore, buyers are statutorily bound to pay compound interest at 3x the RBI Bank Rate regardless of private contract caps.",
    takeaway:
      "Tier-1 System Integrators cannot block MSEFC statutory recovery filings or force costly LCIA/SIAC arbitrations against registered Indian MSME IT vendors.",
  },
  {
    title: "Delhi High Court on Invalidation of Contingent 'Pay-When-Paid' Traps for Subcontractors",
    parties: "NHPC Ltd. v. Hindustan Construction Co. Ltd. & Ors.",
    citation: "OMP (COMM) No. 248/2019, High Court of Delhi",
    facts:
      "The main contractor withheld approved work dues from a specialized sub-vendor, asserting that the employer had not disbursed the corresponding project funds and citing a pay-when-paid provision in the subcontract.",
    holding:
      "The High Court affirmed that in commercial subcontracting, pay-when-paid clauses operate as provisions fixing a reasonable time for payment rather than conditions precedent that transfer project financing risks to the sub-vendor. Once services or man-hours are performed and verified, the debt matures independently of the primary employer's payment timeline.",
    takeaway:
      "IT staffing vendors are not financiers of Tier-1 SIs; approved developer timesheets mature into liquidated debts payable regardless of end-client billing status.",
  },
  {
    title: "Delhi High Court on Validity of B2B Commercial Non-Solicitation and Conversion Buyout Fees",
    parties: "Wipro Limited v. Beckman Coulter International S.A.",
    citation: "2006 (3) ARBLR 118 (Delhi), High Court of Delhi",
    facts:
      "A software services provider challenged a corporate client that directly recruited key technical specialists deployed on a client project, in violation of a mutual commercial non-solicitation agreement.",
    holding:
      "The High Court ruled that while employee-facing post-employment non-compete covenants are void under Section 27 of the Indian Contract Act, 1872, inter-corporate non-solicitation clauses and contract conversion buyout fees between commercial entities are valid, reasonable, and enforceable to protect vendor investments.",
    takeaway:
      "If a client covertly hires your deployed React/DevOps engineers, you can legally claim contractual conversion fees (20%–30% of annual CTC) alongside unpaid monthly invoices.",
  },
  {
    title: "Supreme Court on Summary Decree on Electronic Invoices & Uncontested Ledger Admissions",
    parties: "M/s Jindal Steel & Power Ltd. v. M/s N.S. Steel Traders",
    citation: "Civil Appeal No. 8942 of 2022, Supreme Court of India",
    facts:
      "The creditor filed a recovery action supported by electronically generated tax invoices, delivery acknowledgments, and bank payment ledgers. The debtor attempted to raise vague oral quality disputes without contemporaneous written notice.",
    holding:
      "The Supreme Court affirmed that where commercial delivery is acknowledged and no written objection was raised within contractual inspection windows, spurious post-facto defenses are inadmissible. The claim represents a liquidated debt entitling the creditor to an expedited summary decree under Order XXXVII CPC.",
    takeaway:
      "Approved Jira sprint timesheets and signed Delivery Sign-Off emails constitute indisputable liquidated admissions under Order 37 CPC.",
  },
];

const FAQS = [
  {
    question: "Can a Tier-1 SI legally withhold vendor payments because their end-client has not paid them?",
    answer:
      "No. Under Indian Contract Law and settled Commercial Court jurisprudence, a subcontractor is an independent vendor, not an equity co-venturer sharing the main contractor's business risk. Unless the SOW contains explicit, unequivocal 'Pay-if-Paid' conditional covenants that unambiguously extinguish debt upon client insolvency, Indian courts interpret 'Pay-When-Paid' clauses solely as timing mechanisms that cannot indefinitely postpone payment. Furthermore, for Udyam-registered IT suppliers, Section 15 and Section 24 of the MSMED Act, 2006 override all contrary private contract terms, mandating payment within a maximum statutory cap of 45 days.",
  },
  {
    question: "How do approved Jira and Azure DevOps timesheets serve as legal evidence under BSA 2023?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA, which replaced Section 65B of the Indian Evidence Act), electronic logs—including Jira sprint task burndowns, Azure DevOps board transitions, GitHub pull request merges, Slack approvals, and VPN access records—are fully admissible as primary electronic evidence. When accompanied by a statutory Section 63 Electronic Certificate signed by the IT vendor's engineering or systems head certifying hash integrity and uninterrupted server operation, these logs prove that dedicated engineering hours were delivered and accepted by the client.",
  },
  {
    question: "Can an IT staffing company pull developers from a client's project if invoices are overdue?",
    answer:
      "Yes, provided it is executed under a formal 15-day statutory cure notice. Under Sections 51, 52, and 54 of the Indian Contract Act, 1872, continuous professional services represent reciprocal promises: the vendor's obligation to supply skilled labor is contingent upon the client performing their reciprocal obligation of timely payment. Once an invoice exceeds agreed credit terms, the vendor can serve a formal Notice of Reciprocal Suspension. A defaulting client cannot maintain a claim for SLA damages or project delay when the work stoppage was directly provoked by their own financial default.",
  },
  {
    question: "What is the penalty for enterprise debtors under Section 43B(h) of the Income Tax Act?",
    answer:
      "Under Section 43B(h) of the Income Tax Act, 1961, any enterprise buyer who fails to settle invoices due to a registered Micro or Small enterprise within the MSMED Act timeline (15 days without agreement, or up to 45 days under a written contract) is statutorily disallowed from claiming that expenditure as a tax deduction in that financial year. The unpaid amount is added back to the debtor company's taxable income, subjecting them to immediate corporate income tax liabilities of up to 25%–30% plus surcharges, in addition to MSMED Section 16 compound interest.",
  },
  {
    question: "What rate of interest can IT staffing agencies claim on delayed monthly invoices?",
    answer:
      "For Udyam-registered Micro and Small IT staffing companies, Section 16 of the MSMED Act, 2006 mandates compound interest with monthly rests at three times the RBI Bank Rate (currently amounting to ~19.5% to 20.25% per annum) starting immediately from the 46th day following the date of invoice or timesheet approval. This statutory interest is non-deductible for corporate tax purposes under Section 23 of the MSMED Act, creating an escalating financial liability for defaulting debtors.",
  },
  {
    question: "What legal remedy prevents a client from poaching deployed software engineers directly?",
    answer:
      "While individual employee non-compete clauses are generally unenforceable under Section 27 of the Indian Contract Act, B2B commercial covenants—such as Client Conversion Fees, Liquidated Recruitment Buyout Fees, and Direct Placement Charges—are fully valid between corporate entities (as upheld in Wipro v. Beckman Coulter). If a client circumvents the vendor and hires deployed engineers directly, the vendor can serve an advocate demand notice and file a commercial suit to recover both unpaid monthly invoices and contractually agreed conversion buyout fees (typically 20% to 30% of each engineer's annual CTC).",
  },
  {
    question: "Does the IT staffing company retain software copyright until invoices are settled?",
    answer:
      "Yes. Under Section 17 and Section 19 of the Copyright Act, 1957, intellectual property created by independent software contractors does not automatically transfer to the client upon creation unless full contractual consideration has been paid. Well-structured Master Services Agreements expressly state that IP transfer is a condition subsequent to full receipt of invoice payments. Unpaid clients deploying that software code into production commit actionable copyright infringement under Section 51, entitling the vendor to seek commercial injunctions and takedowns.",
  },
  {
    question: "What is the limitation period for filing an IT staff-augmentation recovery suit in India?",
    answer:
      "Under the Limitation Act, 1963 (Articles 18 and 113), the limitation period for recovering unpaid service invoices is 3 years from the date each specific monthly invoice fell due for payment. Each monthly invoice carries an independent limitation clock. A formal written acknowledgment of debt, part-payment via bank transfer, or reconciliation email resets the 3-year limitation clock under Section 18 and Section 19 of the Limitation Act.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Recovering Unpaid T&M & C2C Staff-Augmentation Invoices: Jira/Timesheet Evidence, Tier-1 SI Back-to-Back Traps & MSME 45-Day Law",
  description:
    "Deployed React/Java engineers with unpaid timesheets? Overcome Tier-1 back-to-back excuses using Jira logs, MSMED Act, Section 43B(h) & Order 37.",
  datePublished: "2026-11-16T12:00:00+05:30",
  dateModified: "2026-11-16T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery`,
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
    name: "IT Staff Augmentation and Dedicated Developer Monthly Invoice Recovery",
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "IT & SaaS Recovery",
      item: `${SITE_URL}/industries/it-saas-software-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Staff Augmentation Invoices",
      item: `${SITE_URL}/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery`,
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

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Recover Unpaid IT Staff-Augmentation & Dedicated Developer Invoices",
  description:
    "A 5-stage legal and operational escalation protocol for IT staffing vendors to recover unpaid monthly developer invoices from Tier-1 SIs and enterprise clients.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit Electronic Work Logs & Freeze Jira Telemetry",
      text: "Export approved Jira sprint boards, Azure DevOps task logs, and Git commit histories. Generate a Section 63 BSA electronic evidence certificate signed by the engineering lead.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Issue 15-Day Cure Notice & Bench Pullback Warning",
      text: "Serve a formal pre-litigation cure notice establishing reciprocal obligations under Section 51 of the Indian Contract Act and reserving resource suspension rights.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Execute Bench Withdrawal & Rebut Counterclaims",
      text: "Withdraw deployed engineers from active sprint channels. Issue a formal rebuttal rejecting invalid 'Pay-When-Paid' or spurious SLA damage counterclaims.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Serve Fact-Verified Statutory Demand Notice",
      text: "Issue a 15-day fact-verified legal notice invoking MSMED Act Section 16 compound interest (3x RBI rate) and Section 43B(h) corporate income tax disallowance.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "File MSEFC Statutory Claim or Order XXXVII CPC Summary Suit",
      text: "Initiate recovery through State MSEFC Samadhaan proceedings or file a Commercial Court Summary Suit under Order 37 CPC for an expedited money decree.",
    },
  ],
};

export default function ItStaffAugmentationRecoveryPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    { label: "IT & SaaS Recovery", href: "/industries/it-saas-software-recovery" },
    {
      label: "Staff Augmentation Invoices",
      href: "/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery",
    },
  ];

  return (
    <>
      {/* Structured Data Scripts */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>MSMED Act ss.15–18</span>
              <span className="text-red-500">&bull;</span>
              <span>Income Tax s.43B(h)</span>
              <span className="text-red-500">&bull;</span>
              <span>BSA 2023 s.63 Digital Proof</span>
              <span className="text-red-500">&bull;</span>
              <span>Order XXXVII CPC</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Recovering Unpaid T&amp;M &amp; C2C Staff-Augmentation Invoices: Jira/Timesheet Evidence, Tier-1 SI Back-to-Back Traps &amp; MSME 45-Day Law
            </h1>

            {/* Executive Statutory Summary (40–60 words under H1 with inline parent Hub link) */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &middot; Tech Staffing Law
              </span>
              <p>
                Under Section 15 of the MSMED Act and Section 70 of the Indian Contract Act, IT staffing vendors deploying dedicated engineers can bypass Tier-1 &ldquo;Pay-When-Paid&rdquo; excuses. As detailed in our{" "}
                <Link
                  href="/industries/it-saas-software-recovery"
                  className="text-red-400 underline hover:text-red-300 font-bold"
                >
                  IT &amp; SaaS Recovery Hub
                </Link>
                , approved Jira timesheets certified under BSA Section 63 constitute liquidated debts recoverable through 15-day bench pullbacks, Section 43B(h) corporate tax disallowance, and Order 37 CPC summary suits.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">45 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  MSME Statutory Hard Stop (s.15)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3x RBI Rate</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  MSMED Compound Interest (s.16)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Section 43B(h)</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Tax Deduction Disallowance Weapon
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Order 37</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  CPC Fast-Track Summary Money Decree
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout with Sticky Sidebar */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar Table of Contents */}
            <ItStaffAugmentationRecoveryTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: C2C Cashflow Dilemma */}
              <section
                id="heading-c2c-cashflow-crisis"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
              >
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      01
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Industry Commercial Reality
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    The C2C IT Staffing Cash-Flow Squeeze: Salary Commitments vs 90-Day Payment Delays
                  </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    India&apos;s IT staff-augmentation ecosystem operates on an aggressive working-capital asymmetry. Every month, thousands of specialized engineering agencies, bench-deployment boutiques, and Corp-to-Corp (C2C) vendors supply dedicated React, Node, Python, Java, Cloud, and AI/ML engineers to Tier-1 System Integrators (SIs), IT service conglomerates, and venture-backed product startups. On the 1st of every calendar month, the staffing vendor must unfailingly disburse salaries, TDS remittances, provident fund (EPF) contributions, and ESIC dues to its deployed software engineers from operational working capital or high-interest bank overdraft lines.
                  </p>
                  <p>
                    In contrast, Tier-1 prime contractors and enterprise buyers routinely enforce predatory 60-day, 90-day, or 120-day credit cycles. Worse still, when payment maturation arrives, creditors are confronted with the infamous &ldquo;Back-to-Back&rdquo; or &ldquo;Pay-When-Paid&rdquo; barrier: the Tier-1 vendor withholds vendor disbursements under the pretext that the ultimate enterprise or offshore client has not yet audited timesheets or released milestone funding.
                  </p>
                  <p>
                    This commercial deadlock is legally untenable. Under Indian contract law and statutory micro-enterprise protections, staffing vendors are not subordinate financiers or risk-insurers of the main contractor&apos;s commercial deliverables. Once dedicated resource hours are logged, sprint tasks are completed, and monthly timesheets are verified by project leads, the financial liability of the debtor is absolute, liquidated, and enforceable under the law.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Direct Payroll Exposure
                    </p>
                    <p className="text-base font-extrabold text-slate-900">100% Fixed Monthly Cost</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Vendors cannot delay employee wages or statutory PF/TDS without facing severe labor penalties under the Wage Code.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                      Pretextual SI Delays
                    </p>
                    <p className="text-base font-extrabold text-red-600">60–120 Days Aging</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Tier-1 vendors exploit &ldquo;end-client payment receipt&rdquo; clauses to preserve their own cash liquidity at subcontractor expense.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
                      Statutory Defense
                    </p>
                    <p className="text-base font-extrabold text-emerald-600">MSMED 45-Day Cap</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Section 15 establishes an overriding statutory limitation that voids conflicting extended credit terms for registered MSMEs.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Decision Tree Escalation SVG + Mobile Cards */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      02
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Operational Protocol
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    5-Stage Escalation Protocol for Defaulted Staffing Invoices
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Systematic operational roadmap from electronic timesheet audit to Order XXXVII summary decree.
                  </p>
                </div>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full bg-slate-900 rounded-xl p-6 border border-slate-800">
                  <svg
                    viewBox="0 0 880 260"
                    width={880}
                    height={260}
                    className="w-full h-auto"
                    aria-label="5-Stage IT Staff Augmentation Recovery Flowchart"
                  >
                    <defs>
                      <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#B91C1C" />
                      </linearGradient>
                    </defs>

                    {/* Stage 1 */}
                    <g transform="translate(10, 20)">
                      <rect width="150" height="210" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">1</text>
                      <text x="50" y="32" fill="#F8FAFC" fontSize="12" fontWeight="bold">Days 1–15</text>
                      <text x="16" y="65" fill="#38BDF8" fontSize="11" fontWeight="bold">Evidence Lock</text>
                      <text x="16" y="85" fill="#94A3B8" fontSize="9.5">
                        <tspan x="16" dy="0">&bull; Jira sprint export</tspan>
                        <tspan x="16" dy="16">&bull; Azure DevOps logs</tspan>
                        <tspan x="16" dy="16">&bull; Git pull requests</tspan>
                        <tspan x="16" dy="16">&bull; BSA s.63 hash freeze</tspan>
                        <tspan x="16" dy="16">&bull; Soft finance nudge</tspan>
                      </text>
                    </g>

                    <path d="M 165 125 L 185 125" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <g transform="translate(185, 20)">
                      <rect width="150" height="210" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">2</text>
                      <text x="50" y="32" fill="#F8FAFC" fontSize="12" fontWeight="bold">Days 16–30</text>
                      <text x="16" y="65" fill="#FBBF24" fontSize="11" fontWeight="bold">Pre-Litigation Cure</text>
                      <text x="16" y="85" fill="#94A3B8" fontSize="9.5">
                        <tspan x="16" dy="0">&bull; 15-day cure notice</tspan>
                        <tspan x="16" dy="16">&bull; Bench withdrawal alert</tspan>
                        <tspan x="16" dy="16">&bull; Invalidate pay-when-paid</tspan>
                        <tspan x="16" dy="16">&bull; Contract Act s.51 cited</tspan>
                        <tspan x="16" dy="16">&bull; Executive escalations</tspan>
                      </text>
                    </g>

                    <path d="M 340 125 L 360 125" stroke="#DC2626" strokeWidth="2.5" />

                    {/* Stage 3 */}
                    <g transform="translate(360, 20)">
                      <rect width="150" height="210" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">3</text>
                      <text x="50" y="32" fill="#F8FAFC" fontSize="12" fontWeight="bold">Days 31–45</text>
                      <text x="16" y="65" fill="#EF4444" fontSize="11" fontWeight="bold">Bench Pullback</text>
                      <text x="16" y="85" fill="#94A3B8" fontSize="9.5">
                        <tspan x="16" dy="0">&bull; Resource withdrawal</tspan>
                        <tspan x="16" dy="16">&bull; Revoke developer credentials</tspan>
                        <tspan x="16" dy="16">&bull; Rebut SLA damage claims</tspan>
                        <tspan x="16" dy="16">&bull; Section 43B(h) warning</tspan>
                        <tspan x="16" dy="16">&bull; Formal audit notice</tspan>
                      </text>
                    </g>

                    <path d="M 515 125 L 535 125" stroke="#DC2626" strokeWidth="2.5" />

                    {/* Stage 4 */}
                    <g transform="translate(535, 20)">
                      <rect width="150" height="210" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">4</text>
                      <text x="50" y="32" fill="#F8FAFC" fontSize="12" fontWeight="bold">Days 46–60</text>
                      <text x="16" y="65" fill="#A855F7" fontSize="11" fontWeight="bold">Advocate Notice</text>
                      <text x="16" y="85" fill="#94A3B8" fontSize="9.5">
                        <tspan x="16" dy="0">&bull; Advocate legal notice</tspan>
                        <tspan x="16" dy="16">&bull; Email + WhatsApp + RPAD</tspan>
                        <tspan x="16" dy="16">&bull; 3x RBI compound int.</tspan>
                        <tspan x="16" dy="16">&bull; Director personal notice</tspan>
                        <tspan x="16" dy="16">&bull; 15-day strict window</tspan>
                      </text>
                    </g>

                    <path d="M 690 125 L 710 125" stroke="#DC2626" strokeWidth="2.5" />

                    {/* Stage 5 */}
                    <g transform="translate(710, 20)">
                      <rect width="160" height="210" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                      <circle cx="28" cy="28" r="14" fill="#DC2626" />
                      <text x="28" y="32" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">5</text>
                      <text x="50" y="32" fill="#F8FAFC" fontSize="12" fontWeight="bold">Days 61+</text>
                      <text x="16" y="65" fill="#34D399" fontSize="11" fontWeight="bold">Judicial Recovery</text>
                      <text x="16" y="85" fill="#94A3B8" fontSize="9.5">
                        <tspan x="16" dy="0">&bull; State MSEFC filing</tspan>
                        <tspan x="16" dy="16">&bull; Order XXXVII CPC suit</tspan>
                        <tspan x="16" dy="16">&bull; Bank account freezing</tspan>
                        <tspan x="16" dy="16">&bull; Conversion fee claim</tspan>
                        <tspan x="16" dy="16">&bull; Summary money decree</tspan>
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Mobile Responsive Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold">1</span>
                      <p className="text-xs font-bold text-sky-400">Stage 1 (Days 1–15): Evidence Audit &amp; BSA Hash Lock</p>
                    </div>
                    <p className="text-xs text-slate-300">Export approved Jira sprint tasks, Azure DevOps commit logs, and Slack sign-offs; lock timestamp hashes under BSA 2023 s.63.</p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold">2</span>
                      <p className="text-xs font-bold text-amber-400">Stage 2 (Days 16–30): Pre-Litigation 15-Day Cure Notice</p>
                    </div>
                    <p className="text-xs text-slate-300">Serve formal contractual cure notice repudiating pay-when-paid defenses under Indian Contract Act Section 51.</p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold">3</span>
                      <p className="text-xs font-bold text-red-400">Stage 3 (Days 31–45): Bench Pullback &amp; Access Revocation</p>
                    </div>
                    <p className="text-xs text-slate-300">Withdraw dedicated developers, revoke code repo access, rebut spurious SLA delay claims, and issue Section 43B(h) warning.</p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold">4</span>
                      <p className="text-xs font-bold text-purple-400">Stage 4 (Days 46–60): Advocate Statutory Demand Notice</p>
                    </div>
                    <p className="text-xs text-slate-300">Serve 15-day formal legal notice by Speed Post RPAD, email, and WhatsApp, demanding principal plus 3x RBI compound interest.</p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold">5</span>
                      <p className="text-xs font-bold text-emerald-400">Stage 5 (Days 61+): State MSEFC or Order XXXVII CPC Suit</p>
                    </div>
                    <p className="text-xs text-slate-300">Initiate statutory MSEFC Samadhaan arbitration or file Commercial Court Summary Suit for swift execution decrees.</p>
                  </div>
                </div>
              </section>

              {/* Section 3: Statutory Matrix Table */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      03
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Statutory Blueprint
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Statutory Recovery Matrix: Legal Forums, Timelines &amp; Remedies
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Multi-forum legal strategy comparing MSMED Act, Order XXXVII CPC, Section 43B(h), and Commercial Mediation.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-bold">Recovery Forum / Instrument</th>
                        <th className="py-3.5 px-4 font-bold">Governing Statute</th>
                        <th className="py-3.5 px-4 font-bold">Statutory Deadline</th>
                        <th className="py-3.5 px-4 font-bold">Financial / Legal Leverage</th>
                        <th className="py-3.5 px-4 font-bold">Applicability for Staffing</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          State MSEFC Samadhaan
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          MSMED Act, 2006 (ss. 15–18)
                        </td>
                        <td className="py-3 px-4 font-semibold text-emerald-700">
                          45-Day Statutory Cap
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Compound interest @ 3x RBI Bank Rate (monthly rests); 75% pre-deposit mandatory under Section 19 for appeal
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Registered Udyam Micro &amp; Small staffing agencies deploying engineering pods
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Corporate Tax Disallowance
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Income Tax Act, 1961 (s. 43B(h))
                        </td>
                        <td className="py-3 px-4 font-semibold text-amber-700">
                          31st March Annual Audit
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Disallowance of expense deduction; increases debtor&apos;s taxable income by 25%–30% plus surcharges
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          All Indian corporate clients and Tier-1 SIs purchasing from Micro/Small vendors
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Commercial Summary Suit
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Code of Civil Procedure, 1908 (Order XXXVII)
                        </td>
                        <td className="py-3 px-4 font-semibold text-slate-800">
                          10 Days for Appearance
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          No automatic right to defend; defendant must deposit disputed amount or prove substantial defense
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Liquidated claims on signed SOWs, accepted tax invoices &amp; approved timesheets
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Pre-Institution Mediation
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Commercial Courts Act, 2015 (s. 12A)
                        </td>
                        <td className="py-3 px-4 font-semibold text-slate-800">
                          3 to 5 Months (DLSA)
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Settlement agreement carries force of a Civil Court decree under Commercial Courts Act s.12A(5)
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Mandatory prerequisite before filing commercial suits where urgent interim relief is not sought
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Non-Solicitation Buyout Claim
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Indian Contract Act, 1872 (ss. 73 &amp; 74)
                        </td>
                        <td className="py-3 px-4 font-semibold text-red-700">
                          3 Years (Limitation Act)
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Recovery of 20%–30% CTC conversion fees per poached developer alongside unpaid monthly billing
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          Clients hiring deployed engineers directly in breach of B2B MSA covenants
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs Component */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      04
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Interactive Analysis
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    4 Common Staffing Default Modes &amp; Operational Responses
                  </h2>
                </div>

                <ItStaffAugmentationScenarioTabs />
              </section>

              {/* Section 5: Dismantling the Pay-When-Paid Defense */}
              <section
                id="heading-back-to-back-defense"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
              >
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      05
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Contractual Defense Dismantling
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Defeating &ldquo;Pay-When-Paid&rdquo; Traps: Why Tier-1 SIs Cannot Withhold Vendor Payments
                  </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    The most ubiquitous defense asserted by Tier-1 System Integrators against Tier-2 staffing vendors is the &ldquo;Back-to-Back&rdquo; or &ldquo;Pay-When-Paid&rdquo; defense. Large IT primes incorporate boilerplate clauses in their Master Subcontractor Agreements declaring that vendor compensation is contingent upon the prime contractor receiving corresponding disbursements from the end-client (such as an overseas bank, retail enterprise, or public entity). When the end-client disputes milestone deliverables or slows payments, the Tier-1 SI issues an email stating: <em>&ldquo;Your invoices are approved internally, but we cannot disburse payment until the end-client releases funds to us.&rdquo;</em>
                  </p>
                  <p>
                    Under Indian commercial law, this argument fails on three fundamental legal grounds:
                  </p>

                  <div className="space-y-3 pt-1">
                    <div className="p-4 bg-slate-50 border-l-4 border-[#DC2626] rounded-r-xl">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                        1. Distinction Between &ldquo;Pay-When-Paid&rdquo; (Timing) and &ldquo;Pay-if-Paid&rdquo; (Condition Precedent)
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        In landmark construction and service contract decisions (including <em>NHPC v. HCC</em>), Indian High Courts have established that &ldquo;Pay-When-Paid&rdquo; clauses merely designate a convenient or expected time for payment, rather than establishing a conditional barrier that extinguishes the subcontractor&apos;s debt. Unless the contract contains express, unambiguous language explicitly transferring the risk of end-client insolvency or default to the subcontractor, the main contractor cannot postpone payment beyond a reasonable duration.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border-l-4 border-emerald-600 rounded-r-xl">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                        2. Section 70 Quantum Meruit &amp; Section 73 Liquidated Damages
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Under Section 70 of the Indian Contract Act, 1872, where a person lawfully does anything for another person, not intending to do so gratuitously, and such other person enjoys the benefit thereof, the latter is legally bound to make compensation. Having accepted the benefit of thousands of software development hours to fulfill their main contract obligations, Tier-1 SIs are unjustly enriched if they withhold vendor payment.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border-l-4 border-amber-600 rounded-r-xl">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                        3. Statutory Non-Obstante Override of MSMED Act (Section 24)
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        If the staffing supplier is registered under Udyam as a Micro or Small enterprise, Section 24 of the MSMED Act contains an overriding non-obstante clause that trumps any contrary agreement between the parties. In <em>Silpi Industries</em>, the Supreme Court confirmed that private contractual conditions cannot diminish the statutory right to payment within 45 days. Private &ldquo;pay-when-paid&rdquo; agreements are legally void to the extent of their inconsistency with Section 15.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: 15-Day Resource Pullback */}
              <section
                id="heading-bench-pullback"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
              >
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      06
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Operational Remedy
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    15-Day Bench Pullback Protocol: Reciprocal Promises &amp; Rebutting SLA Counter-Claims
                  </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Staff-augmentation founders frequently hesitate to withdraw engineers from defaulting clients, fearing retaliatory threats of SLA penalties, project derailment claims, or loss of future business. However, continuing to supply developer talent to an account that is 60+ days overdue severely compounds working-capital drain while increasing financial exposure.
                  </p>
                  <p>
                    To safely withdraw engineering resources without exposing your firm to valid counter-claims for breach of contract, staffing founders must execute a legally airtight <strong>15-Day Reciprocal Suspension Protocol</strong> governed by Sections 51, 52, and 54 of the Indian Contract Act, 1872:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Step 1: The Formal Cure Notice
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Issue a written communication specifying the overdue invoice numbers, aggregate principal debt, and approved timesheet dates. Formally state that under Section 51 of the Indian Contract Act, performance of ongoing services is contingent upon prompt receipt of agreed monthly retainer payments.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Step 2: 15-Day Suspension Deadline
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Grant the debtor a strict 15-day cure window to release all mature receivables. Explicitly notify the client that if payment is not credited by Day 15, deployed engineering resources will be suspended and placed on internal bench reassignment without further notice.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Step 3: Access Revocation &amp; Handover
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Upon expiry of the 15 days, instruct deployed engineers to document all in-flight Git branches, push committed code to client repositories, and transition sprint tickets to &ldquo;Blocked &mdash; Awaiting Client Payment.&rdquo; Revoke developer availability from client Slack and Jira boards.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Step 4: Immediate Rebuttal of SLA Claims
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        If the client responds with legal threats alleging project delays or SLA breaches, immediately issue an advocate rejoinder establishing that a defaulting party who provoked a work stoppage cannot claim damages for consequences stemming entirely from their own material financial breach.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: MSME 45-Day Law & Section 43B(h) */}
              <section
                id="heading-msme-45-days"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
              >
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      07
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Statutory Enforcement
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Enforcing MSME 45-Day Rules &amp; Section 43B(h) Corporate Tax Leverage
                  </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Indian IT staffing boutiques and bench-deployment firms registered under the Udyam scheme hold immense statutory leverage against corporate defaulters under the <strong>MSMED Act, 2006</strong> and the landmark <strong>Section 43B(h) of the Income Tax Act, 1961</strong>.
                  </p>
                  <p>
                    Prior to recent tax amendments, large enterprises routinely delayed vendor payments without immediate regulatory repercussions. Today, Section 43B(h) imposes severe, direct fiscal penalties on debtor companies that fail to pay registered Micro and Small enterprises within the statutory window:
                  </p>

                  <div className="p-5 bg-slate-900 text-white rounded-xl space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                        Section 43B(h) Operational Mechanism
                      </span>
                      <span className="text-xs font-semibold text-emerald-400">
                        Mandatory Statutory Compliance
                      </span>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-300 space-y-2.5">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold shrink-0">&bull;</span>
                        <span><strong>15-Day / 45-Day Statutory Window:</strong> Under Section 15 of the MSMED Act, payment must be made within 15 days if no written contract exists, or within a maximum agreed credit period of 45 days. Any contract clause specifying credit terms exceeding 45 days is void ab initio.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold shrink-0">&bull;</span>
                        <span><strong>Mandatory Disallowance of Business Expenditure:</strong> If a client company fails to pay the staffing vendor before the close of the financial year (March 31st), the entire unpaid invoice amount is disallowed as a business expense under Section 43B(h).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold shrink-0">&bull;</span>
                        <span><strong>Direct Corporate Tax Escalation:</strong> The disallowed invoice amount is added back to the client&apos;s taxable corporate profits. At standard corporate tax rates of 25% to 30% plus surcharges and cess, an unpaid invoice of ₹50,00,000 creates an immediate corporate tax penalty of ₹12,50,000 to ₹15,00,000 on the debtor&apos;s balance sheet.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold shrink-0">&bull;</span>
                        <span><strong>Section 16 Compound Interest @ 3x RBI Bank Rate:</strong> Simultaneously, the debtor incurs compound interest with monthly rests at 3x the RBI Bank Rate from the 46th day. Under Section 23 of the MSMED Act, this penal interest can never be claimed as a tax-deductible expense by the debtor.</span>
                      </li>
                    </ul>
                  </div>

                  <p>
                    For detailed calculations of penal compound interest under the MSMED Act, see our{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-red-600 font-bold underline hover:text-red-700"
                    >
                      Interactive MSME Delayed Payment Interest Calculator
                    </Link>
                    , and consult our deep-dive analysis on{" "}
                    <Link
                      href="/law/section-43bh-msme-payment-rule"
                      className="text-red-600 font-bold underline hover:text-red-700"
                    >
                      Section 43B(h) MSME Payment Rules
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 8: Worked Financial Calculation Box */}
              <section
                id="heading-worked-example"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      08
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Financial Quantification
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Worked Financial Ledger: ₹37.5 Lakh Default Escalation Model
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Realistic commercial accounting ledger showing principal debt, MSMED compound interest, and debtor tax impact.
                  </p>
                </div>

                {/* Case Scenario Narrative */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                  <p className="font-bold text-slate-900">
                    Commercial Scenario: 5 Senior Engineers Deployed to Tier-1 SI
                  </p>
                  <p>
                    An Udyam-registered Bangalore IT staffing vendor deploys 5 Senior Full-Stack Engineers to a Tier-1 SI at an agreed rate of ₹2,50,000 per engineer/month (₹12,50,000 + 18% GST = ₹14,75,000 gross monthly billing). The SI approves Jira timesheets for October, November, and December but fails to disburse payment, citing end-client funding freezes.
                  </p>
                </div>

                {/* Breakdown Ledger Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs">
                      <tr>
                        <th className="py-3 px-4 font-bold">Billing Cycle</th>
                        <th className="py-3 px-4 font-bold">Approved Resources</th>
                        <th className="py-3 px-4 font-bold">Net Base Invoice</th>
                        <th className="py-3 px-4 font-bold">GST @ 18%</th>
                        <th className="py-3 px-4 font-bold">Gross Invoice Debt</th>
                        <th className="py-3 px-4 font-bold">Days Overdue (at 180d)</th>
                        <th className="py-3 px-4 font-bold">MSMED s.16 Interest</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-slate-900">Month 1 (Oct)</td>
                        <td className="py-2.5 px-4">5 Senior Developers</td>
                        <td className="py-2.5 px-4">₹12,50,000</td>
                        <td className="py-2.5 px-4">₹2,25,000</td>
                        <td className="py-2.5 px-4 font-bold text-slate-900">₹14,75,000</td>
                        <td className="py-2.5 px-4 text-red-600 font-semibold">180 Days</td>
                        <td className="py-2.5 px-4 text-emerald-700 font-bold">₹1,47,320</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-slate-900">Month 2 (Nov)</td>
                        <td className="py-2.5 px-4">5 Senior Developers</td>
                        <td className="py-2.5 px-4">₹12,50,000</td>
                        <td className="py-2.5 px-4">₹2,25,000</td>
                        <td className="py-2.5 px-4 font-bold text-slate-900">₹14,75,000</td>
                        <td className="py-2.5 px-4 text-red-600 font-semibold">150 Days</td>
                        <td className="py-2.5 px-4 text-emerald-700 font-bold">₹1,21,840</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-semibold text-slate-900">Month 3 (Dec)</td>
                        <td className="py-2.5 px-4">5 Senior Developers</td>
                        <td className="py-2.5 px-4">₹12,50,000</td>
                        <td className="py-2.5 px-4">₹2,25,000</td>
                        <td className="py-2.5 px-4 font-bold text-slate-900">₹14,75,000</td>
                        <td className="py-2.5 px-4 text-red-600 font-semibold">120 Days</td>
                        <td className="py-2.5 px-4 text-emerald-700 font-bold">₹96,750</td>
                      </tr>
                      <tr className="bg-slate-50 font-bold text-slate-900 border-t-2 border-slate-300">
                        <td className="py-3 px-4 uppercase text-xs">Total Ledger Exposure</td>
                        <td className="py-3 px-4">15 Man-Months</td>
                        <td className="py-3 px-4">₹37,50,000</td>
                        <td className="py-3 px-4">₹6,75,000</td>
                        <td className="py-3 px-4 text-slate-950 font-black text-sm">₹44,25,000</td>
                        <td className="py-3 px-4 text-red-700">Average 150d</td>
                        <td className="py-3 px-4 text-emerald-700 font-black text-sm">₹3,65,910</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Comparative Impact Callout Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                      Total Creditor Legal Claim
                    </p>
                    <p className="text-2xl font-black text-emerald-700">₹47,90,910</p>
                    <p className="text-xs text-slate-600 mt-1">
                      ₹44,25,000 Gross Principal + ₹3,65,910 MSMED Section 16 compound interest at 3x RBI Bank Rate (19.5% p.a.).
                    </p>
                  </div>

                  <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-red-900 mb-1">
                      Debtor Fiscal Exposure (s.43B(h))
                    </p>
                    <p className="text-2xl font-black text-red-600">₹11,06,250 Tax Penalty</p>
                    <p className="text-xs text-slate-600 mt-1">
                      25% corporate tax surcharge on ₹44.25L disallowed expenses if unpaid by March 31, plus personal audit scrutiny.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: BSA 2023 Section 63 Evidence Checklist */}
              <section
                id="heading-bsa-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      09
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Evidence Protocol
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    BSA Section 63 Digital Proof Dossier: Jira, Git &amp; Timesheets
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Mandatory electronic evidence collation protocol to ensure immediate admissibility under the Bharatiya Sakshya Adhiniyam, 2023.
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    In staff-augmentation disputes, debtors often attempt to avoid payment by alleging that deployed engineers were unproductive, absent, or produced defective code. Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which governs the admissibility of electronic records in Indian courts, electronic logs and audit trails carry primary evidential weight when properly certified.
                  </p>
                  <p>
                    Before serving a statutory demand notice or filing a summary suit, staffing creditors must preserve and package the following five-part Digital Evidence Dossier:
                  </p>

                  <div className="space-y-3 pt-1">
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-bold text-slate-900 uppercase">
                          1. Immutable Jira / Azure DevOps Work Logs
                        </p>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          Sprint Verification
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Export complete sprint burndown reports, ticket status transitions (In Progress &rarr; Code Review &rarr; Done), user story assignees, and logged hours signed off by the client&apos;s Scrum Master or Engineering Director.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-bold text-slate-900 uppercase">
                          2. Git Repository Commits &amp; Pull Request Merges
                        </p>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          Code Production Proof
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Collate Git commit histories, GitHub/GitLab pull request reviews, approvals, and production merges displaying deployed developer usernames, timestamps, and lines of code merged into the client&apos;s codebase.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-bold text-slate-900 uppercase">
                          3. Contemporaneous Slack &amp; Teams Communications
                        </p>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          Admissions of Performance
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Archive daily stand-up messages, sprint review acknowledgments, client praise, and absence of contemporaneous defect notifications. Under BSA s.63, contemporaneous positive communications invalidate retrospective quality defenses.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-bold text-slate-900 uppercase">
                          4. Signed Timesheet Approvals &amp; GST Invoices
                        </p>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          Liquidated Debt Admissions
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Combine monthly email timesheet approvals from client managers, formal SOW rate cards, and electronically dispatched GST Tax Invoices reflecting matching e-way / IRN digital signatures.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-bold text-slate-900 uppercase">
                          5. Mandatory Section 63 BSA Electronic Certificate
                        </p>
                        <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-full">
                          Statutory Certificate
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Execute a formal certificate under Section 63(4) of Bharatiya Sakshya Adhiniyam, 2023, signed by the staffing agency&apos;s Chief Technology Officer or IT Administrator, certifying device hash integrity, unbroken server logs, and lawful system custody.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Dual-Track B2B Conversion Funnel CTA */}
              <section
                id="heading-cta"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      10
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Action Gate
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Initiate Recovery: Test 1 Case or Deploy Institutional Bulk Desk
                  </h2>
                </div>

                <ItStaffAugmentationNoticeCTA />
              </section>

              {/* Section 11: Frequently Asked Questions Accordions */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
              >
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      11
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Judicial FAQ
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions: IT Staffing &amp; Developer Invoice Recovery
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Practitioner answers to complex contractual, statutory, and jurisdictional challenges in C2C recovery.
                  </p>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 open:bg-white open:border-slate-300 open:shadow-xs"
                    >
                      <summary className="flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none select-none">
                        <span className="pr-4 leading-snug">{faq.question}</span>
                        <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs shrink-0 transition-colors">
                          &darr;
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Statutory Sources & Judicial Precedents */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-6"
              >
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      12
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Legal Authority
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Statutory Authorities &amp; Verified Court Precedents
                  </h2>
                </div>

                {/* Precedent Cards */}
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Landmark High Court &amp; Supreme Court Rulings
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {COURT_PRECEDENTS.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200 border-l-4 border-l-[#DC2626] space-y-2"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <p className="text-xs sm:text-sm font-bold text-slate-900">
                            {item.title}
                          </p>
                          <span className="text-[11px] font-mono text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                            {item.citation}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-700">
                          {item.parties}
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          <strong>Holding:</strong> {item.holding}
                        </p>
                        <div className="pt-2 border-t border-slate-200 text-xs font-medium text-emerald-800">
                          <strong>Strategic Takeaway:</strong> {item.takeaway}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Statutes Links */}
                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Primary Statutory Authorities &amp; Acts
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <a
                        key={idx}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-800 transition-colors group"
                      >
                        <span className="truncate pr-2 font-medium">{source.title}</span>
                        <span className="text-slate-400 group-hover:text-red-600 shrink-0">&rarr;</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Sibling Links & Cross-Cluster Navigation */}
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Related IT &amp; SaaS Commercial Recovery Playbooks
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <Link
                      href="/b2b-saas-annual-subscription-early-cancellation-unpaid-invoice-recovery"
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 block text-xs transition-colors"
                    >
                      <span className="font-bold text-slate-900 block mb-1">
                        B2B SaaS ACV Recovery
                      </span>
                      <span className="text-slate-500">
                        Enforcing annual committed contracts &amp; discount clawbacks.
                      </span>
                    </Link>

                    <Link
                      href="/software-uat-sign-off-delay-scope-creep-milestone-payment-recovery"
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 block text-xs transition-colors"
                    >
                      <span className="font-bold text-slate-900 block mb-1">
                        Software UAT Sign-Off Delays
                      </span>
                      <span className="text-slate-500">
                        Overcoming milestone stalls, scope creep &amp; deemed UAT sign-offs.
                      </span>
                    </Link>

                    <Link
                      href="/client-poached-deployed-developer-non-solicitation-fee-recovery"
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 block text-xs transition-colors"
                    >
                      <span className="font-bold text-slate-900 block mb-1">
                        Poached Developer Buyout Fees
                      </span>
                      <span className="text-slate-500">
                        Recovering B2B conversion &amp; placement fees under Section 27 exceptions.
                      </span>
                    </Link>

                    <Link
                      href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 block text-xs transition-colors"
                    >
                      <span className="font-bold text-slate-900 block mb-1">
                        Cross-Border Tech Invoices
                      </span>
                      <span className="text-slate-500">
                        Recovering unpaid USD/EUR invoices from foreign tech buyers.
                      </span>
                    </Link>

                    <Link
                      href="/copyright-not-transferred-until-paid-freelancer"
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 block text-xs transition-colors"
                    >
                      <span className="font-bold text-slate-900 block mb-1">
                        Copyright Retention Lever
                      </span>
                      <span className="text-slate-500">
                        Withholding IP assignment until final invoice settlement.
                      </span>
                    </Link>

                    <Link
                      href="/recovery/consultancy-fees"
                      className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 block text-xs transition-colors"
                    >
                      <span className="font-bold text-slate-900 block mb-1">
                        Consultancy Fees &amp; Retainers
                      </span>
                      <span className="text-slate-500">
                        Enforcing professional retainers and quantum meruit claims.
                      </span>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Global Footer Cross-Links Cluster */}
        <RelatedRecoveryGuides currentPath="/it-staff-augmentation-dedicated-developer-monthly-invoice-recovery" />
      </div>
    </>
  );
}
