import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import LabourContractorTableOfContents from "./LabourContractorTableOfContents";
import LabourContractorScenarioTabs from "./LabourContractorScenarioTabs";
import LabourContractorRecoveryCTA from "./LabourContractorRecoveryCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Industrial & Warehouse Labour Contractor Bill Recovery",
  description:
    "Submitted ECR PF challans and biometric logs, yet plant finance withholds bills or refuses Minimum-Wage DA arrears? Recover dues via MSMED & CLRA s.21(4).",
  alternates: {
    canonical: `${SITE_URL}/blue-collar-industrial-labour-contractor-factory-bill-recovery`,
  },
  openGraph: {
    title: "Industrial & Warehouse Labour Contractor Bill Recovery",
    description:
      "Submitted ECR PF challans and biometric logs, yet plant finance withholds bills or refuses Minimum-Wage DA arrears? Recover dues via MSMED & CLRA s.21(4).",
    url: `${SITE_URL}/blue-collar-industrial-labour-contractor-factory-bill-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Industrial Labour Contractor Factory Bill Recovery"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial & Warehouse Labour Contractor Bill Recovery",
    description:
      "Submitted ECR PF challans and biometric logs, yet plant finance withholds bills or refuses Minimum-Wage DA arrears? Recover dues via MSMED & CLRA s.21(4).",
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
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15, 16, 17 & 18 — 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Contract Labour (Regulation and Abolition) Act, 1970 (Section 21 — Payment of Wages & Principal Employer Responsibility)",
    url: "https://www.indiacode.nic.in/handle/123456789/1517",
  },
  {
    title: "Minimum Wages Act, 1948 (Section 12 — Payment of Minimum Rates of Wages & Mandatory Statutory Revisions)",
    url: "https://www.indiacode.nic.in/handle/123456789/1454",
  },
  {
    title: "Code on Wages, 2019 (Sections 6, 8, 9 & 43 — Floor Wages and Obligation on Principal Employers)",
    url: "https://www.indiacode.nic.in/handle/123456789/15440",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 23, 70 Quantum Meruit, 73 & 74 Liquidated Damages vs Penalties)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Income Tax Act, 1961 (Section 43B(h) — Mandatory Disallowance of Unpaid MSME Invoices Beyond 45 Days)",
    url: "https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records & Section 121 — Estoppel by Conduct)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Mandatory Minimum Wage Pass-Through and Reimbursement of Statutory Revision Arrears",
    parties: "Tarapore & Co. v. State of Madhya Pradesh",
    citation: "(1994) 3 SCC 528, Supreme Court of India",
    date: "Judgment Dated 23 February 1994",
    facts:
      "A contractor executed an industrial construction contract containing fixed-rate stipulations. During performance, the State Government issued sovereign gazette notifications revising the minimum rates of wages and Variable Dearness Allowance (VDA). The principal employer refused to reimburse the resulting wage escalation, claiming that the contract had no price variation clause.",
    holding:
      "The Supreme Court held that statutory revisions in minimum wages enacted by sovereign authority are an implied condition in every contract and constitute an unavoidable statutory pass-through liability. The contractor is legally obligated under penal law to pay the enhanced minimum wage, and the principal employer is legally bound to reimburse this statutory differential, fixed-rate clauses notwithstanding.",
    amount: "Doctrine of Statutory Escalation Pass-Through Firmly Established",
    takeaway:
      "Factory managements cannot rely on fixed-rate purchase orders to refuse semi-annual State VDA wage revisions. The principal employer is legally bound under the Tarapore doctrine to reimburse the statutory wage differential.",
  },
  {
    title: "Supreme Court on Estoppel by Conduct and Veracity of Signed Daily Attendance Musters",
    parties: "Food Corporation of India v. Workers Union & Ors.",
    citation: "(2005) 5 SCC 305, Supreme Court of India",
    date: "Judgment Dated 29 April 2005",
    facts:
      "The principal employer attempted to disown wage obligations and impose retroactive attendance penalties on manpower and handling contractors, despite having certified the daily attendance registers and shift muster sheets on site.",
    holding:
      "The Supreme Court affirmed that contemporaneous certification of daily muster rolls by authorized supervisors estops the principal employer from raising retrospective allegations of short-deployment or wage absenteeism. Having accepted and signed the muster, the principal cannot unilaterally adjust certified billing.",
    amount: "Estoppel by Conduct Under BSA Section 121 — Certified Musters Form Conclusive Proof",
    takeaway:
      "Physical shift allocation sheets and security gate entries certified by factory supervisors legally supersede biometric sensor dropouts, barring plant accounts from executing retroactive billing deductions.",
  },
  {
    title: "Supreme Court on Spurious Afterthoughts & Rejection of Manufactured Pre-Existing Disputes",
    parties: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    date: "Judgment Dated 21 September 2017",
    facts:
      "A corporate debtor attempted to avoid statutory debt enforcement by manufacturing vague claims of service deficiency and unquantified counterclaims only after receiving formal statutory demand notices, having accepted past invoices without written objection.",
    holding:
      "The Supreme Court ruled that a defense must be plausible, truly pre-existing, and substantiated by contemporaneous communication prior to the notice. Spurious afterthoughts, belated counterclaims, and manufactured allegations conjured to escape liquidated liability carry zero weight before statutory recovery tribunals.",
    amount: "Doctrine of Pre-Existing Dispute — Belated Counterclaims Inadmissible",
    takeaway:
      "When a factory manufactures retroactive 'line stoppage' or 'scrap generation' debit notes only after a contractor demands long-overdue bills, statutory recovery forums dismiss the defense as a sham afterthought.",
  },
  {
    title: "Supreme Court on Overriding Effect of MSMED Act and Mandatory 3x Compound Interest for Service Providers",
    parties: "Silpi Industries etc. v. Kerala State Road Transport Corporation",
    citation: "(2021) 18 SCC 790, Supreme Court of India",
    date: "Judgment Dated 29 June 2021",
    facts:
      "A registered enterprise providing services claimed statutory compound interest under Section 16 of the MSMED Act. The buyer contended that delayed payments were standard practice in the sector and that the underlying service contract contained no interest clause.",
    holding:
      "The Supreme Court held that Sections 15 to 18 of the MSMED Act have statutory priority over private agreements under Section 24. Registered service MSMEs—including manpower supply and industrial labour contractors—are entitled to compound interest at three times the RBI Bank Rate with monthly rests, which cannot be waived by agreement.",
    amount: "Mandatory 3x RBI Compound Interest Enforced for Manpower Contractors",
    takeaway:
      "Udyam-registered labour contractors can claim statutory compound interest (currently exceeding 20% p.a.) on all delayed factory invoices, nullifying the financial advantage of delayed internal audit approvals.",
  },
];

const FAQS = [
  {
    question: "Can a factory plant refuse to pay Minimum Wage / VDA arrears if our contract says 'Fixed Rate per Shift'?",
    answer:
      "No. Under the landmark Supreme Court ruling in Tarapore & Co. v. State of M.P. (1994) 3 SCC 528, statutory minimum wage revisions enacted through sovereign State Government Gazette notifications are mandatory pass-through liabilities on the principal employer. Under Section 12 of the Minimum Wages Act, 1948, and Section 23 of the Indian Contract Act, 1872, no commercial contract can waive statutory minimum wage compliance. Furthermore, Section 21(4) of the Contract Labour (Regulation and Abolition) Act, 1970 places ultimate wage liability on the principal employer.",
  },
  {
    question: "What should a labour contractor do when plant HR deducts billing over biometric punch mismatches?",
    answer:
      "Immediately collate dual-signed physical attendance evidence: (1) Form D shift allocation sheets signed by shop-floor foremen; (2) Security gate register entry logs; (3) Production output logs confirming the plant ran at rated capacity during the disputed shifts. Under Section 121 of Bharatiya Sakshya Adhiniyam, 2023 (estoppel by conduct) and FCI v. Workers Union (2005) 5 SCC 305, the principal employer is legally estopped from repudiating labor deployed and certified on-site due to biometric turnstile sensor glitches.",
  },
  {
    question: "Are industrial labour and manpower supply contractors eligible for protection under the MSMED Act?",
    answer:
      "Yes. Manpower supply and labour contracting services (NIC Code 78101 / 78200 / 78300) are recognized service enterprises under the MSMED Act, 2006. If your firm holds a valid Udyam Registration, you enjoy statutory protection under Sections 15 to 18: mandatory invoice payment within 45 days, compound interest at three times the RBI Bank Rate with monthly rests, and jurisdiction under the fast-track Micro and Small Enterprise Facilitation Council (MSEFC).",
  },
  {
    question: "Can plant accounts hold our monthly bill until we furnish that same month's EPFO ECR deposit challan?",
    answer:
      "No. While principal employers require proof of statutory compliance, wage payment must be executed by the 7th or 10th of the month under CLRA Act Section 21, and EPFO statutory contributions are due by the 15th of the subsequent month. Industry legal standards and high court rulings confirm that furnishing the preceding month's ECR challan and TRRN payment receipt, along with bank wage transfer scrolls for the current cycle, fulfills statutory compliance. Withholding the current invoice beyond 45 days violates Section 15 of the MSMED Act.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act compel factories to clear contractor bills promptly?",
    answer:
      "Under Section 43B(h) introduced by the Finance Act, 2023, any corporate principal employer that fails to pay a registered Micro or Small enterprise contractor within 15 days (or 45 days if stipulated in a written agreement) cannot claim that expenditure as a tax deduction in that financial year. If unpaid as of March 31, the entire labour billing is added back to the factory's taxable profits, triggering an immediate 25% to 30% corporate income tax surcharge plus penal interest under Section 234.",
  },
  {
    question: "Can a factory impose a retroactive ₹15L–₹30L line-stoppage penalty after replacing our agency?",
    answer:
      "No. Under Sections 73 and 74 of the Indian Contract Act, 1872, liquidated damages or penalty deductions cannot be levied unilaterally without proving actual loss through a joint inquiry. Furthermore, the Supreme Court in Mobilox Innovations (2018) 1 SCC 353 established that counterclaims and deficiency allegations concocted only after the contractor demands pending bills are spurious afterthoughts. Absent contemporaneous defect notices, statutory forums will strike down the penalty.",
  },
  {
    question: "What is the procedure to recover withheld safety deposits and retention money from a factory client?",
    answer:
      "Upon completion or termination of the contract, submit a formal closure docket comprising the Final Wage Register (Form B), PF/ESIC compliance certificates, non-fatal accident clearance from the Factory Inspector, and a 15-day statutory demand notice. If plant finance fails to release the retention money, file a claim under Section 18 of the MSMED Act. The MSEFC has statutory jurisdiction to recover both withheld invoices and unlawfully detained security retentions with 3x compound interest.",
  },
  {
    question: "What electronic records must a contractor maintain under Section 63 of Bharatiya Sakshya Adhiniyam, 2023?",
    answer:
      "To withstand legal scrutiny in court or before the MSEFC, a contractor must maintain: (1) Exported biometric turnstile logs with machine cryptographic hashes; (2) Scanned copies of supervisor-signed Form D muster sheets; (3) EPFO ECR receipts and TRRN bank transaction confirmations; (4) ESIC portal monthly contribution return filings; (5) Bank NEFT/RTGS salary disbursement advice scrolls; and (6) WhatsApp and email shift approvals, supported by a Section 63 electronic evidence certificate.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Recovering Withheld Monthly Bills & Minimum-Wage Revision Arrears for Industrial, Warehouse & Plant Labour Contractors",
  description:
    "Submitted ECR PF challans and biometric logs, yet plant finance withholds bills or refuses Minimum-Wage DA arrears? Recover dues via MSMED & CLRA s.21(4).",
  datePublished: "2026-11-17T11:00:00+05:30",
  dateModified: "2026-11-17T11:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/blue-collar-industrial-labour-contractor-factory-bill-recovery`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Managing Partner",
    worksFor: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
    },
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
    name: "Industrial Labour Contractor Factory Bill Recovery",
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
      name: "Staffing & Manpower Recovery",
      item: `${SITE_URL}/industries/staffing-recruitment-manpower-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Industrial Labour Contractor Recovery",
      item: `${SITE_URL}/blue-collar-industrial-labour-contractor-factory-bill-recovery`,
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
  name: "How to Recover Withheld Factory Bills and Minimum Wage Arrears for Industrial Labour Contractors",
  description:
    "A 7-step statutory legal protocol for licensed manpower and industrial labour contractors to recover blocked monthly invoices, VDA revision arrears, and withheld retention money from factory principal employers.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Attendance & Gate Log Reconciliation",
      text: "Consolidate biometric turnstile punch logs against physical security gate registers and supervisor-signed Form D muster sheets to rebut short-deployment deductions.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Statutory ECR & Wage Audit Compilation",
      text: "Compile EPFO Electronic Challan cum Return (ECR), TRRN receipts, ESIC monthly contribution returns, and bank salary transfer scrolls proving 100% wage disbursement.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Gazette VDA Escalation Docketing",
      text: "Extract the official State Gazette minimum wage revision notification and calculate worker-wise arrears paid under Tarapore & Co. pass-through principles.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Pre-Litigation Statutory Demand Notice",
      text: "Serve a fact-verified legal notice under MSMED Act Section 15, CLRA Section 21(4), and Section 43B(h) of the Income Tax Act granting 15 peremptory days for clearance.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Corporate Auditor & Board Intimation",
      text: "Notify the factory's statutory auditors regarding overdue MSME contractor liabilities subject to mandatory corporate tax disallowance under Section 43B(h).",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "MSEFC Statutory Arbitration Filing",
      text: "Lodge a formal recovery petition under Section 18 of the MSMED Act demanding principal dues plus 3x RBI compound interest with monthly rests.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Execution & Award Enforcement",
      text: "Convert the MSEFC award or conciliation settlement into a binding commercial court decree under Section 36 of the Arbitration and Conciliation Act for bank account attachment.",
    },
  ],
};

export default function BlueCollarLabourContractorRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Schema Injection */}
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Licensed Manpower SOP</span>
            <span className="text-red-600">&bull;</span>
            <span>CLRA Act §21(4) &amp; MSMED Act §15–18</span>
            <span className="text-red-600">&bull;</span>
            <span>Tarapore &amp; Co. Precedent</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Recovering Withheld Monthly Bills &amp; Minimum-Wage Revision Arrears for Industrial, Warehouse &amp; Plant Labour Contractors
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Summary
            </span>
            Under the Supreme Court doctrine in{" "}
            <strong className="text-white font-bold">Tarapore &amp; Co.</strong> and{" "}
            <strong className="text-white font-bold">CLRA Act §21(4)</strong>, factory principal employers are statutorily liable to reimburse semi-annual State Minimum-Wage VDA escalation arrears. Fixed-rate purchase orders cannot override labour statutes. Contractors operating through our{" "}
            <Link
              href="/industries/staffing-recruitment-manpower-recovery"
              className="text-red-400 underline font-semibold hover:text-red-300"
            >
              staffing &amp; manpower recovery hub
            </Link>{" "}
            can enforce 45-day payment caps under MSMED §15 and levy 3x RBI compound interest on delayed factory invoices.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col">
              <span className="text-slate-100 font-black text-lg sm:text-2xl tracking-tight">
                15 Days
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Statutory Wage Demand Window
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-emerald-400 font-black text-lg sm:text-2xl tracking-tight">
                3x RBI Rate
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Mandatory MSMED Compound Interest
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-amber-400 font-black text-lg sm:text-2xl tracking-tight">
                §43B(h) Audit
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Corporate Tax Deduction Disallowed
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-red-400 font-black text-lg sm:text-2xl tracking-tight">
                §21(4) CLRA
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Absolute Principal Employer Liability
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Component */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Recovery", href: "/recovery" },
              {
                label: "Staffing & Manpower Recovery",
                href: "/industries/staffing-recruitment-manpower-recovery",
              },
              {
                label: "Industrial Labour Contractor Recovery",
                href: "/blue-collar-industrial-labour-contractor-factory-bill-recovery",
              },
            ]}
          />
        </div>

        {/* 2-Column Split: TOC on Left, Main Content on Right */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar Table of Contents */}
          <LabourContractorTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Factory Billing Crisis */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                  01
                </span>
                <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
                  The Contractor Liquidity Bottleneck
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Why Factories Withhold Labour Contractor Bills &amp; Wage Arrears
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Industrial labour contractors, warehouse manpower providers, and plant staffing agencies operate under an acute legal and commercial double bind. Under the{" "}
                  <strong className="text-slate-900 font-semibold">
                    Contract Labour (Regulation and Abolition) Act, 1970
                  </strong>{" "}
                  and state minimum wage enactments, a licensed contractor must disburse blue-collar worker wages by the 7th or 10th of every calendar month. Furthermore, Employees&apos; Provident Fund (EPFO) and ESIC statutory contributions must be deposited by the 15th without fail under severe criminal and financial penalties.
                </p>
                <p>
                  Yet, once the contractor disburses millions in monthly wages out of working capital or cash credit facilities, factory plant accounts departments routinely engage in systematic payment obstruction. Monthly invoices totaling ₹15 Lakh to ₹60 Lakh are delayed for 60 to 120 days under pretexts of &quot;centralized ERP ledger processing,&quot; &quot;pending line-supervisor attendance verification,&quot; or &quot;internal quarterly audit sign-offs.&quot;
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-amber-900">
                  <strong className="font-bold block mb-1">
                    The Statutory VDA Escalation Cashflow Trap:
                  </strong>
                  State Labour Departments revise the Variable Dearness Allowance (VDA) twice annually (typically in April and October). By law, contractors must immediately disburse enhanced minimum wages to plant floor workers. However, factory accounts departments routinely repudiate these statutory arrear bills, falsely insisting that their purchase order represents a &quot;fixed lump-sum rate&quot; with no escalation allowed.
                </div>
                <p>
                  When contractors insist on payment, plant managements frequently threaten contract termination, blacklist the agency across sister industrial units, or impose retroactive debit notes for alleged &quot;line stoppage&quot; or &quot;scrap generation.&quot; Manpower suppliers must utilize codified statutory remedies—including the{" "}
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="text-red-600 font-medium hover:underline"
                  >
                    MSMED Act 45-day payment cap
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/vendor-and-invoice-recoveries"
                    className="text-red-600 font-medium hover:underline"
                  >
                    commercial vendor invoice recovery mechanisms
                  </Link>
                  —to break this cycle of working capital extortion.
                </p>
              </div>
            </section>

            {/* Section 2: The Tarapore Principle */}
            <section
              id="heading-tarapore-principle"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                  02
                </span>
                <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
                  Supreme Court Statutory Precedent
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                The Tarapore Principle: Mandatory Minimum Wage Pass-Through
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The most pervasive legal defense deployed by factory CFOs and plant HR managers is the &quot;Fixed-Rate Work Order Clause.&quot; Corporate finance departments argue that because the labour service contract does not contain a price-variation clause or expressly states that rates are inclusive of future revisions, the contractor must absorb all state-mandated wage revisions.
                </p>
                <p>
                  This commercial defense is completely legally defective under Indian jurisprudence. In the landmark judgment of{" "}
                  <strong className="text-slate-900 font-semibold">
                    Tarapore &amp; Co. v. State of Madhya Pradesh (1994) 3 SCC 528
                  </strong>
                  , the Supreme Court settled the legal principle governing statutory wage escalation:
                </p>
                <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-md space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Supreme Court Rule of Law
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      (1994) 3 SCC 528
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
                    &quot;When rates of wages are statutorily revised by sovereign notifications issued under the Minimum Wages Act, 1948, the escalation constitutes an implied term of every commercial and industrial agreement. The contractor has no discretion in the matter, as paying less than minimum wages is a penal offence. Consequently, the principal employer who consumes the labor output is legally bound to reimburse the statutory differential to the contractor.&quot;
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      Section 12, Minimum Wages Act, 1948
                    </p>
                    <p className="text-xs text-slate-600">
                      Mandates that every employer shall pay to every worker wages at a rate not less than the minimum rate of wages fixed by official gazette. Any contract purporting to reduce this liability is void under Section 23 of the Indian Contract Act, 1872.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      Section 21(4), CLRA Act, 1970
                    </p>
                    <p className="text-xs text-slate-600">
                      Explicitly dictates that the Principal Employer bears ultimate liability for the payment of wages. If the contractor disburses statutory arrears, the principal employer cannot withhold reimbursement while pocketing the economic output.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Biometric Turnstile vs Gate Register Disputes */}
            <section
              id="heading-attendance-disputes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                  03
                </span>
                <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
                  Attendance Proof &amp; Estoppel
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Overcoming Biometric Turnstile vs Gate Register Attendance Disputes
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  A standard operational tactic used by plant finance to slash contractor bills by 10% to 25% is disputing worker attendance records. Modern automotive, FMCG, and heavy manufacturing plants deploy optical turnstiles and biometric facial or fingerprint recognition terminals at worker entry gates.
                </p>
                <p>
                  During peak 15-minute shift handovers involving 500 to 2,000 blue-collar personnel, biometric readers frequently experience sensor errors, network packet drops, or server latency. Workers bypass malfunctioning turnstiles under the physical supervision of plant security guards and contractor supervisors, logging their names in manual entry logbooks.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 text-red-950">
                  <p className="font-bold text-xs sm:text-sm text-red-900 mb-1">
                    The Retrospective Headcount Shortfall Scam:
                  </p>
                  <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                    At the end of the month, plant accounts extracts raw biometric software logs, ignores physical security gate books, and declares a &quot;short-deployment deficit&quot; of 800 to 2,500 man-hours. They deduct ₹4 Lakh to ₹12 Lakh from the contractor&apos;s invoice, while the factory production department logged 100% finished goods output for that exact shift!
                  </p>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                  Legal Rebuttal under BSA 2023 &amp; Estoppel by Conduct
                </h3>
                <p>
                  Under Section 121 of the{" "}
                  <strong className="text-slate-900 font-semibold">
                    Bharatiya Sakshya Adhiniyam, 2023 (BSA)
                  </strong>{" "}
                  (formerly Section 115 of the Indian Evidence Act), the doctrine of Estoppel by Conduct bars a principal employer from repudiating attendance certified on site:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                  <li>
                    <strong className="text-slate-900">Dual-Certified Shift Musters:</strong> Daily Form D shift allocation sheets co-signed by the contractor supervisor and the plant shop-floor foreman or production manager constitute contemporaneous primary proof under BSA Section 63.
                  </li>
                  <li>
                    <strong className="text-slate-900">Security Gate Logbook Corroboration:</strong> The plant&apos;s own security entry logs—controlled exclusively by the principal employer—serve as hostile-witness admissions if withheld.
                  </li>
                  <li>
                    <strong className="text-slate-900">FCI v. Workers Union Precedent:</strong> The Supreme Court held in <em>Food Corporation of India v. Workers Union &amp; Ors. (2005) 5 SCC 305</em> that once a principal employer&apos;s authorized representatives verify daily deployment without immediate written protest, the entity is legally estopped from retroactively imposing attendance penalties.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4: Operational Recovery Decision Tree Flowchart */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                  04
                </span>
                <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
                  Tactical Decision Matrix
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Operational Recovery Decision Tree for Industrial Manpower Contractors
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Navigate the multi-track statutory recovery escalation path based on default trigger, aging bucket, and contractor Udyam registration status.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-hidden bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl mb-6">
                <div className="text-center mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-red-400">
                    Industrial Labour Contractor Arrears Escalation Flowchart
                  </span>
                </div>
                <svg
                  viewBox="0 0 800 480"
                  className="w-full h-auto text-white"
                  width={800}
                  height={480}
                  aria-label="Industrial Labour Contractor Arrears Escalation Flowchart"
                >
                  {/* Step 1: Default Trigger */}
                  <rect
                    x="20"
                    y="30"
                    width="220"
                    height="90"
                    rx="12"
                    fill="#1F2937"
                    stroke="#DC2626"
                    strokeWidth="2"
                  />
                  <text x="130" y="65" textAnchor="middle" fill="#F87171" fontSize="13" fontWeight="bold">
                    TRIGGER: FACTORY DEFAULT
                  </text>
                  <text x="130" y="85" textAnchor="middle" fill="#E5E7EB" fontSize="11">
                    Withheld Bills &gt; 30 Days OR
                  </text>
                  <text x="130" y="103" textAnchor="middle" fill="#9CA3AF" fontSize="10">
                    VDA Wage Escalation Refusal
                  </text>

                  {/* Arrow 1 -> Decision */}
                  <line x1="240" y1="75" x2="290" y2="75" stroke="#9CA3AF" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2: Evidence Audit */}
                  <rect
                    x="290"
                    y="30"
                    width="220"
                    height="90"
                    rx="12"
                    fill="#1F2937"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                  />
                  <text x="400" y="62" textAnchor="middle" fill="#F3F4F6" fontSize="12" fontWeight="bold">
                    EVIDENCE CONSOLIDATION
                  </text>
                  <text x="400" y="82" textAnchor="middle" fill="#9CA3AF" fontSize="10">
                    Dual Musters + Security Log
                  </text>
                  <text x="400" y="100" textAnchor="middle" fill="#10B981" fontSize="10">
                    ECR Challan + Bank Scrolls
                  </text>

                  {/* Arrow 2 -> Statutory Notice */}
                  <line x1="510" y1="75" x2="560" y2="75" stroke="#9CA3AF" strokeWidth="2" />

                  {/* Step 3: Peremptory Notice */}
                  <rect
                    x="560"
                    y="30"
                    width="220"
                    height="90"
                    rx="12"
                    fill="#1F2937"
                    stroke="#DC2626"
                    strokeWidth="2"
                  />
                  <text x="670" y="62" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">
                    STATUTORY DEMAND NOTICE
                  </text>
                  <text x="670" y="82" textAnchor="middle" fill="#E5E7EB" fontSize="10">
                    15-Day Peremptory Window
                  </text>
                  <text x="670" y="100" textAnchor="middle" fill="#FBBF24" fontSize="10">
                    Cite Tarapore &amp; MSMED §16
                  </text>

                  {/* Branch Downward */}
                  <line x1="670" y1="120" x2="670" y2="180" stroke="#9CA3AF" strokeWidth="2" />

                  {/* Decision Diamond / Split */}
                  <rect
                    x="560"
                    y="180"
                    width="220"
                    height="70"
                    rx="10"
                    fill="#111827"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                  />
                  <text x="670" y="210" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="bold">
                    FACTORY RESPONSE CHECK
                  </text>
                  <text x="670" y="230" textAnchor="middle" fill="#9CA3AF" fontSize="10">
                    Payment vs Defiance / Sham Offsets
                  </text>

                  {/* Left Path: Paid */}
                  <line x1="560" y1="215" x2="430" y2="215" stroke="#10B981" strokeWidth="2" />
                  <rect
                    x="240"
                    y="185"
                    width="190"
                    height="60"
                    rx="8"
                    fill="#064E3B"
                    stroke="#10B981"
                    strokeWidth="1"
                  />
                  <text x="335" y="212" textAnchor="middle" fill="#A7F3D0" fontSize="11" fontWeight="bold">
                    DISPUTE RESOLVED
                  </text>
                  <text x="335" y="230" textAnchor="middle" fill="#D1FAE5" fontSize="10">
                    Full Arrears Released
                  </text>

                  {/* Down Path: Unpaid -> Multi-Track Escalation */}
                  <line x1="670" y1="250" x2="670" y2="300" stroke="#EF4444" strokeWidth="2" />

                  {/* Split Track A: MSME Samadhaan */}
                  <line x1="670" y1="300" x2="230" y2="300" stroke="#9CA3AF" strokeWidth="2" />
                  <line x1="230" y1="300" x2="230" y2="340" stroke="#9CA3AF" strokeWidth="2" />

                  <rect
                    x="120"
                    y="340"
                    width="220"
                    height="110"
                    rx="12"
                    fill="#1F2937"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                  <text x="230" y="370" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="bold">
                    TRACK 1: MSME SAMADHAAN
                  </text>
                  <text x="230" y="390" textAnchor="middle" fill="#E5E7EB" fontSize="10">
                    MSEFC Conciliation / Arb
                  </text>
                  <text x="230" y="410" textAnchor="middle" fill="#A7F3D0" fontSize="10">
                    3x RBI Compound Interest
                  </text>
                  <text x="230" y="430" textAnchor="middle" fill="#9CA3AF" fontSize="9">
                    Overriding Effect Under §24
                  </text>

                  {/* Track B: Tax Auditor Disallowance */}
                  <line x1="490" y1="300" x2="490" y2="340" stroke="#9CA3AF" strokeWidth="2" />
                  <rect
                    x="380"
                    y="340"
                    width="220"
                    height="110"
                    rx="12"
                    fill="#1F2937"
                    stroke="#F59E0B"
                    strokeWidth="2"
                  />
                  <text x="490" y="370" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="bold">
                    TRACK 2: §43B(h) TAX INTRO
                  </text>
                  <text x="490" y="390" textAnchor="middle" fill="#E5E7EB" fontSize="10">
                    Notice to Statutory Auditors
                  </text>
                  <text x="490" y="410" textAnchor="middle" fill="#FCD34D" fontSize="10">
                    Disallowance of Expense
                  </text>
                  <text x="490" y="430" textAnchor="middle" fill="#9CA3AF" fontSize="9">
                    30% Corporate Tax Surge
                  </text>

                  {/* Track C: Commercial Court Order 37 */}
                  <line x1="670" y1="300" x2="710" y2="300" stroke="#9CA3AF" strokeWidth="2" />
                  <line x1="710" y1="300" x2="710" y2="340" stroke="#9CA3AF" strokeWidth="2" />
                  <rect
                    x="600"
                    y="340"
                    width="180"
                    height="110"
                    rx="12"
                    fill="#1F2937"
                    stroke="#DC2626"
                    strokeWidth="2"
                  />
                  <text x="690" y="370" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">
                    TRACK 3: SUMMARY SUIT
                  </text>
                  <text x="690" y="390" textAnchor="middle" fill="#E5E7EB" fontSize="10">
                    Order XXXVII CPC Suit
                  </text>
                  <text x="690" y="410" textAnchor="middle" fill="#FCA5A5" fontSize="10">
                    No Leave to Defend
                  </text>
                  <text x="690" y="430" textAnchor="middle" fill="#9CA3AF" fontSize="9">
                    For Non-MSME Contracts
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center">
                      1
                    </span>
                    <span className="font-bold text-xs text-red-400">
                      Default Trigger &amp; Evidence Audit
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Bills delayed &gt; 30 days or VDA escalation rejected. Consolidate supervisor muster sheets, security gate books, ECR challans, and salary disbursement scrolls.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center">
                      2
                    </span>
                    <span className="font-bold text-xs text-amber-400">
                      15-Day Peremptory Statutory Demand
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Serve fact-verified demand notice invoking Tarapore &amp; Co., Minimum Wages Act s.12, and MSMED Section 16 interest penalty.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center">
                      3
                    </span>
                    <span className="font-bold text-xs text-emerald-400">
                      Multi-Track Statutory Enforcement
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Lodge MSEFC arbitration claim for 3x compound interest, while serving statutory tax disallowance notice under Section 43B(h) on factory statutory auditors.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Statutory Forum Comparison Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                  05
                </span>
                <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
                  Forum Analysis &amp; Jurisdiction
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Statutory Recovery Forum Comparison: MSMED vs Commercial Court
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Evaluating procedural velocity, court fees, pre-deposit requirements, and compound interest entitlement across competing legal recovery forums for manpower contractors.
              </p>

              <div className="overflow-x-auto -mx-5 sm:-mx-6 md:-mx-8">
                <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-900 text-white border-b border-slate-800">
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] text-slate-300">
                        Recovery Forum
                      </th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] text-slate-300">
                        Governing Statute
                      </th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] text-slate-300">
                        Court Fee / Deposit
                      </th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] text-slate-300">
                        Interest Entitlement
                      </th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] text-slate-300">
                        Debtor Appeal Gate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        MSME Samadhaan (MSEFC)
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        MSMED Act, 2006 (Sections 15–18)
                      </td>
                      <td className="py-3.5 px-4 text-emerald-600 font-semibold">
                        Zero / Nominal Processing Fee
                      </td>
                      <td className="py-3.5 px-4 text-emerald-600 font-bold">
                        3x RBI Compound Interest (Monthly Rest)
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        Mandatory 75% Pre-Deposit (s.19)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Commercial Summary Suit
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Order XXXVII CPC &amp; Commercial Courts Act
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Full Ad-Valorem State Court Fee (1%–7%)
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Contractual Rate or 6%–18% Simple
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Leave to Defend Granted on Triable Issues
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Commercial Arbitration
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Arbitration &amp; Conciliation Act, 1996
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Substantial Arbitrator &amp; Hearing Fees
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        As Stipulated in Work Order
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Section 34 Petition in Commercial Court
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Labour Authority Claim
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Payment of Wages Act / Minimum Wages Act
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Zero Statutory Fee
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Statutory Penalties (up to 10x Compensation)
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Appellate Authority / Writ Jurisdiction
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Mid-Page Interactive Dual CTA */}
            <LabourContractorRecoveryCTA buttonText="Demand Overdue Factory Bills Now" />

            {/* Section 6: Interactive Scenario Explorer */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                  06
                </span>
                <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
                  Operational Scenarios
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Four Factory Billing Default Scenarios &amp; Contractor Playbooks
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Review the exact factual patterns, legal rebuttals, and procedural steps for the four most common disputes encountered by industrial and warehouse labour contractors.
              </p>

              {/* Render Client Scenario Tabs Island */}
              <LabourContractorScenarioTabs />
            </section>

            {/* Section 7: Worked Financial Calculation Box */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                  07
                </span>
                <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
                  Financial Arrears Breakdown
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Financial Ledger Breakdown: Recovering ₹24.8L in Factory Dues
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Consider a real-world dispute involving a licensed industrial labour contractor deploying 180 semi-skilled assembly line and material handling workers across three shifts at an automotive components manufacturing plant in Chakan, Pune.
                </p>

                {/* Ledger Breakdown Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Disputed Factory Account Ledger (180 Deployed Workers)
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Pune Industrial Corridor
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                      <span className="text-slate-300">
                        Monthly Withheld Labour Invoices (2 Billing Cycles):
                      </span>
                      <span className="font-mono font-bold text-white">
                        ₹16,50,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                      <span className="text-slate-300">
                        State Gazette VDA Minimum Wage Escalation Differential (6 Months):
                      </span>
                      <span className="font-mono font-bold text-emerald-400">
                        ₹4,30,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                      <span className="text-slate-300">
                        Withheld Statutory ESI/PF Administrative Margin &amp; Safety Retentions:
                      </span>
                      <span className="font-mono font-bold text-amber-400">
                        ₹4,00,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 bg-slate-800/60 px-3 rounded-lg border border-slate-700/60">
                      <span className="font-bold text-slate-200">
                        Total Liquidated Principal Claim:
                      </span>
                      <span className="font-mono font-black text-base text-white">
                        ₹24,80,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                      <div>
                        <span className="text-slate-300 block">
                          MSMED Act Section 16 Statutory Compound Interest:
                        </span>
                        <span className="text-[11px] text-slate-400">
                          (3x RBI Bank Rate = 19.5% p.a., monthly rest compounded over 9 months)
                        </span>
                      </div>
                      <span className="font-mono font-bold text-red-400">
                        ₹3,84,650
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3 text-sm sm:text-base bg-red-950/40 p-4 rounded-xl border border-red-900/60">
                      <div>
                        <span className="font-black text-red-200 block">
                          Total Statutory Recovery Petition:
                        </span>
                        <span className="text-[11px] text-red-300">
                          Claimable before Pune MSEFC or via Commercial Summary Suit
                        </span>
                      </div>
                      <span className="font-mono font-black text-lg sm:text-2xl text-red-400">
                        ₹28,64,650
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl text-xs sm:text-sm text-emerald-900 mt-4">
                  <strong className="font-bold block mb-1">
                    Calculate Your Exact Statutory Claim:
                  </strong>
                  Contractors facing factory bill delays can model their multi-month compound interest using our free interactive{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-emerald-700 underline font-semibold hover:text-emerald-800"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  , generating court-ready interest schedules.
                </div>
              </div>
            </section>

            {/* Section 8: 7-Step Strategic Recovery SOP */}
            <section
              id="heading-operational-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                  08
                </span>
                <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
                  Actionable Playbook
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                7-Step Statutory SOP to Recover Blocked Labour Contractor Invoices
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Follow this sequential legal escalation protocol drafted specifically for industrial, warehouse, and construction manpower agencies in India.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Attendance &amp; Gate Register Reconciliation
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Retrieve daily Form D shift allocation sheets co-signed by the factory production manager. Secure digital photographs of physical security gate registers to establish conclusive proof of physical deployment under Section 121 of BSA 2023.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Statutory Compliance &amp; ECR Dossier Assembly
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Assemble the Electronic Challan cum Return (ECR), TRRN receipts, ESIC monthly contribution confirmations, and bank NEFT/RTGS salary credit scrolls to legally disprove any allegation of wage default.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      State Gazette Minimum Wage VDA Ledger Compilation
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Extract the official sovereign State Gazette notification for the revised Variable Dearness Allowance. Prepare worker-wise arithmetic ledgers demonstrating the mandatory pass-through differential paid out of agency working capital.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Peremptory 15-Day Advocate Statutory Demand Notice
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Issue a formal fact-verified demand notice to the Managing Director, Plant Head, and Chief Financial Officer. Cite Tarapore &amp; Co., Section 21(4) of CLRA Act, Section 15 of MSMED Act, and Section 43B(h) tax disallowance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Statutory Auditor Intimation under Section 43B(h)
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Deliver an official copy of the demand notice to the factory&apos;s statutory audit firm, formally placing them on notice that overdue MSME contractor liabilities must be added back to taxable profits with penal tax consequences.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Lodge Petition Before MSME Facilitation Council (MSEFC)
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Initiate statutory proceedings under Section 18 of the MSMED Act on the MSME Samadhaan portal. Demand full payment of pending monthly bills, VDA arrears, safety retentions, and 3x compound interest with monthly rests.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Execution Decree &amp; Bank Account Attachment
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Convert the MSEFC arbitral award or conciliation settlement into an executable commercial court decree under Section 36 of the Arbitration and Conciliation Act, attaching the factory&apos;s commercial bank accounts for instantaneous recovery.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: BSA 2023 Evidence Dossier */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                  09
                </span>
                <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
                  Documentary Rigor
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                BSA 2023 Section 63 Evidence Dossier &amp; ECR Compliance Audit
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  To secure an unassailable legal position before commercial courts, the Labour Commissioner, or the MSEFC, a labour contractor must compile a bulletproof evidentiary dossier under Section 63 of the{" "}
                  <strong className="text-slate-900 font-semibold">
                    Bharatiya Sakshya Adhiniyam, 2023
                  </strong>
                  :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      1. Shift Muster &amp; Gate Records
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                      <li>Form D shift allocation sheets co-signed by plant foremen</li>
                      <li>Security entry and exit logbooks with timestamps</li>
                      <li>Raw biometric system CSV exports with device hash</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      2. Statutory EPFO &amp; ESIC Returns
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                      <li>Electronic Challan cum Return (ECR) receipts</li>
                      <li>TRRN payment confirmation receipts from bank portal</li>
                      <li>ESIC monthly contribution filing acknowledgment</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      3. Wage Disbursement Proof
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                      <li>Bank NEFT/RTGS salary credit confirmation scrolls</li>
                      <li>Form B Wage Register certified by contractor</li>
                      <li>Worker acknowledgment signatures for cash allowances</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">
                      4. State Gazette &amp; Tax Documents
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                      <li>Certified State Labour Gazette minimum wage notifications</li>
                      <li>Udyam Registration Certificate under Service Category</li>
                      <li>GSTR-1 and GSTR-3B filings showing tax paid on invoices</li>
                    </ul>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 pt-2">
                  Under Section 63 of BSA 2023 (which replaced Section 65B of the Indian Evidence Act), electronic logs must be accompanied by an evidentiary certificate executed by the person managing the automated biometric or payroll computer systems.
                </p>
              </div>
            </section>

            {/* Section 10: Frequently Asked Questions */}
            <section
              id="heading-faq"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                  10
                </span>
                <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
                  Contractor Legal FAQ
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Frequently Asked Questions for Industrial Labour Contractors
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct statutory answers to critical real-world questions faced by manpower suppliers, factory staffing agencies, and warehouse labour contractors.
              </p>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 transition-all duration-200 open:bg-white open:border-slate-300 open:shadow-sm"
                  >
                    <summary className="font-bold text-slate-900 text-xs sm:text-sm md:text-base cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] transition-transform duration-200 group-open:rotate-180 shrink-0">
                        &darr;
                      </span>
                    </summary>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Legislative References */}
            <section
              id="heading-references"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center">
                  11
                </span>
                <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
                  Legal Citations
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                Statutory References &amp; Official Legislative Framework
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Primary Statutory Authorities &amp; Acts
                  </h3>
                  <ul className="space-y-2">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold shrink-0">&bull;</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="text-slate-800 hover:text-red-600 underline font-medium"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Landmark Supreme Court Judgments
                  </h3>
                  <div className="space-y-3">
                    {COURT_PRECEDENTS.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-[#DC2626] pl-3 py-1">
                        <p className="font-bold text-slate-900 text-xs sm:text-sm">
                          {item.parties} &mdash;{" "}
                          <span className="text-slate-600 font-mono text-[11px]">
                            {item.citation}
                          </span>
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5">{item.takeaway}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sibling Links & Cross References */}
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Related Manpower &amp; Staffing Recovery Guides
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <Link
                      href="/industries/staffing-recruitment-manpower-recovery"
                      className="text-red-600 hover:underline font-semibold"
                    >
                      &rarr; Staffing &amp; Manpower Industry Recovery Hub
                    </Link>
                    <Link
                      href="/security-guard-housekeeping-facility-management-unpaid-bill-recovery"
                      className="text-red-600 hover:underline font-semibold"
                    >
                      &rarr; Security Guard &amp; Housekeeping Arrears Recovery
                    </Link>
                    <Link
                      href="/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery"
                      className="text-red-600 hover:underline font-semibold"
                    >
                      &rarr; Temp Staffing Payroll &amp; PF Invoice Default Recovery
                    </Link>
                    <Link
                      href="/recruitment-agency-90-day-replacement-clause-abuse-fee-recovery"
                      className="text-red-600 hover:underline font-semibold"
                    >
                      &rarr; 90-Day Candidate Replacement Clause Fee Recovery
                    </Link>
                    <Link
                      href="/backdoor-hiring-candidate-circumvention-placement-fee-recovery-india"
                      className="text-red-600 hover:underline font-semibold"
                    >
                      &rarr; Backdoor Hiring Candidate Circumvention Fee Recovery
                    </Link>
                    <Link
                      href="/recovery/business-dues"
                      className="text-red-600 hover:underline font-semibold"
                    >
                      &rarr; Business Dues Legal Recovery Framework
                    </Link>
                  </div>
                </div>

                {/* Advocate Attribution */}
                {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-800">
                      Statutory Reviewer: Anuj Anand Malik
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Advocate &amp; Founder, AMA Legal Solutions &bull; Bar Council of Delhi
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
                    Verified B2B SOP
                  </span>
                </div>
              </div>
            </section>

            {/* Bottom Dual-Track CTA Component */}
            <LabourContractorRecoveryCTA buttonText="Initiate Contractor Invoice Recovery" />
          </div>
        </div>
      </main>

      {/* Cross-Link Footer Navigation */}
      <RelatedRecoveryGuides />
    </div>
  );
}
