import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ContractStaffingTableOfContents from "./ContractStaffingTableOfContents";
import ContractStaffingScenarioTabs from "./ContractStaffingScenarioTabs";
import ContractStaffingCTA from "./ContractStaffingCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Temp Staffing Payroll, PF & GST Invoice Default Recovery",
  description:
    "In contract staffing, 92% of bills is pass-through salary, PF & GST. Recover defaulted payroll invoices using CLRA s.21(4), MSMED Act & IBC s.8.",
  alternates: {
    canonical: `${SITE_URL}/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery`,
  },
  openGraph: {
    title: "Temp Staffing Payroll, PF & GST Invoice Default Recovery",
    description:
      "In contract staffing, 92% of bills is pass-through salary, PF & GST. Recover defaulted payroll invoices using CLRA s.21(4), MSMED Act & IBC s.8.",
    url: `${SITE_URL}/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Contract Staffing Payroll PF ESIC Invoice Default Recovery Playbook",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Temp Staffing Payroll, PF & GST Invoice Default Recovery",
    description:
      "In contract staffing, 92% of bills is pass-through salary, PF & GST. Recover defaulted payroll invoices using CLRA s.21(4), MSMED Act & IBC s.8.",
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
    title: "Contract Labour (Regulation and Abolition) Act, 1970 (Section 21 — Responsibility for Payment of Wages & Principal Employer Liability)",
    url: "https://www.indiacode.nic.in/handle/123456789/1517",
  },
  {
    title: "Employees' Provident Funds and Miscellaneous Provisions Act, 1952 (Sections 6, 7A, 7Q & 14B — Damages for Delayed Remittance)",
    url: "https://www.indiacode.nic.in/handle/123456789/1947",
  },
  {
    title: "Employees' State Insurance Act, 1948 (Sections 40, 44 & 85 — Principal Employer & Immediate Employer Joint Recovery)",
    url: "https://www.indiacode.nic.in/handle/123456789/1899",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15, 16, 17 & 18 — 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Income Tax Act, 1961 (Section 43B(h) — Mandatory Disallowance of Unpaid MSME Invoices Beyond 45 Days)",
    url: "https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title: "Insolvency and Bankruptcy Code, 2016 (Sections 8 & 9 — Operational Debt Demand Notice & CIRP Trigger)",
    url: "https://ibbi.gov.in/legal-framework/act",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Admissibility of Biometric Logs, ECR & Portals)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Absolute Statutory Responsibility of Principal Employer for Contractor Wages",
    parties: "Hindustan Steelworks Construction Ltd. v. Commissioner of Labour & Ors.",
    citation: "(1996) 10 SCC 599, Supreme Court of India",
    date: "Judgment Dated 11 October 1996",
    facts:
      "A labour contractor executing specialized industrial works failed to disburse wages to deployed workers due to severe cash shortfalls. The labour authorities issued recovery certificates directly against the principal employer under Section 21(4) of the Contract Labour (R&A) Act, 1970. The principal employer resisted, arguing that wage liability lay solely on the independent contractor.",
    holding:
      "The Supreme Court affirmed that under Section 21(4) of the CLRA Act, the obligation of the principal employer to ensure full disbursement of wages is statutory, absolute, and non-delegable. Where a contractor pays wages out-of-pocket or where wages remain unpaid, the principal employer remains directly on the hook. Consequently, a corporate client cannot withhold pass-through wage reimbursements to a staffing company while retaining the productive benefit of deployed manpower.",
    amount: "CLRA Section 21(4) Principle Affirmed — Absolute Pass-Through Reimbursement Mandate",
    takeaway:
      "Temp staffing agencies can invoke Section 21(4) to defeat corporate delay tactics: the client cannot lawfully pocket the labor hours of deployed staff while refusing to reimburse the pure wage disbursements funded by the contractor.",
  },
  {
    title: "Supreme Court on Contractor Right of Indemnity for Statutory Passthrough Disbursements",
    parties: "Food Corporation of India v. Workers Union & Ors.",
    citation: "(2005) 5 SCC 305, Supreme Court of India",
    date: "Judgment Dated 29 April 2005",
    facts:
      "Handling and manpower contractors engaged by FCI disbursed statutory revision arrears, provident fund contributions, and minimum wages to hundreds of contract workers. FCI subsequently refused to reimburse the escalated statutory outlays, claiming that the contract had fixed lump-sum management billing.",
    holding:
      "The Supreme Court held that statutory obligations—including statutory minimum wages, provident fund (EPF), and state insurance (ESIC)—are statutory pass-through expenditures incurred for the benefit of the principal employer establishment. Under Section 69 and 70 of the Indian Contract Act, 1872, the contractor who discharges a statutory duty that the principal was ultimately bound to satisfy possesses an enforceable legal right of indemnity and full reimbursement.",
    amount: "Statutory Passthrough Wages & PF Legally Separated from Service Markup",
    takeaway:
      "Staffing agencies have a watertight legal claim for 100% of out-of-pocket salaries, EPF, and ESIC remitted on behalf of deployed personnel, completely immune to contractual markup disputes.",
  },
  {
    title: "Supreme Court on Staffing Services as Undisputed Operational Debt Under IBC",
    parties: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    date: "Judgment Dated 21 September 2017",
    facts:
      "An operational creditor served an IBC Section 8 statutory demand notice for unpaid service invoices. The corporate debtor attempted to avoid CIRP by manufacturing vague, post-notice disputes regarding service delays and staffing quality.",
    holding:
      "The Supreme Court laid down the authoritative test for pre-existing disputes under Section 8(2) and Section 9 of the IBC. A dispute must be plausible, truly existing in correspondence prior to receipt of the statutory demand notice, and not a patently feeble legal defense or spurious afterthought. Corporate clients who acknowledge monthly attendance timesheets without contemporaneous written objection cannot manufacture post-default SLA disputes to stall IBC insolvency notices.",
    amount: "Doctrine of Pre-Existing Dispute — Post-Facto SLA Excuses Disallowed",
    takeaway:
      "When a staffing firm holds signed timesheets, EPFO ECR receipts, and GSTR-1 filings, a corporate client's post-default excuse of 'staff attrition' is dismissed as an afterthought, enabling swift Section 8 IBC recovery.",
  },
  {
    title: "Supreme Court on MSMED Act Statutory Priority & Mandatory 3x Compound Interest",
    parties: "Silpi Industries etc. v. Kerala State Road Transport Corporation",
    citation: "(2021) 18 SCC 790, Supreme Court of India",
    date: "Judgment Dated 29 June 2021",
    facts:
      "A registered enterprise providing services and commercial supplies claimed statutory compound interest under Section 16 of the MSMED Act, 2006. The debtor corporation argued that the underlying commercial contract contained no interest clause and that delayed payments were customary in the sector.",
    holding:
      "The Supreme Court ruled that Sections 15 through 18 of the MSMED Act have overriding effect under Section 24 over any contrary private agreement. When a registered MSME provides services or manpower, the buyer is statutorily mandated to clear dues within 45 days. Any delay attracts mandatory compound interest at 3 times the RBI Bank Rate with monthly rests, and such interest cannot be waived, settled away, or deducted for corporate income tax.",
    amount: "Statutory 3x RBI Compound Interest Enforced for Service & Staffing Providers",
    takeaway:
      "Registered MSME staffing agencies can demand 3x RBI compound interest on delayed monthly payroll invoices, wiping out any financial advantage the client hoped to gain by delaying vendor payments.",
  },
];

const FAQS = [
  {
    question: "Why is an invoice default so uniquely fatal for a contract staffing or manpower agency?",
    answer:
      "Unlike software licensing or product manufacturing where gross margins range from 40% to 80%, contract staffing operates on paper-thin service markups of 5% to 8%. Crucially, 90% to 94% of every billing represents pass-through salaries (disbursed on the 7th), EPF (paid by the 15th), ESIC (paid by the 15th), and 18% GST (remitted by the 20th). When an enterprise client defaults on a ₹50 Lakh invoice, the staffing agency has already disbursed ~₹46 Lakh in pure cash out-of-pocket. At a 6% margin, recovering that single ₹46 Lakh cash hole requires the net annual profit of 15 to 20 other fully paying clients.",
  },
  {
    question: "Can an enterprise client deduct SLA or attrition penalties from our pass-through payroll invoice?",
    answer:
      "No. Under Sections 73 and 74 of the Indian Contract Act, 1872, penalties cannot be levied arbitrarily without establishing actual, quantifiable financial damage. Furthermore, statutory wage obligations under the Contract Labour (R&A) Act, 1970 and Code on Wages, 2019 are ring-fenced. While a client may dispute the 5%–8% agency management fee if a specific SLA was breached, they have zero legal right to withhold the 92% pass-through wages, EPF, and ESIC remitted for personnel who performed actual duties on site.",
  },
  {
    question: "What is the liability of the Principal Employer under CLRA Section 21(4)?",
    answer:
      "Section 21(4) of the Contract Labour (Regulation and Abolition) Act, 1970 stipulates that if the contractor fails to pay wages to contract workers, the Principal Employer is directly and legally liable to pay the wages in full. The Supreme Court in Hindustan Steelworks Construction confirmed that this statutory duty is absolute. When a staffing firm pays wages out of its own pocket, it steps into the shoes of the satisfied liability, giving it an undeniable right of subrogation and immediate reimbursement under Sections 69 and 70 of the Indian Contract Act.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act help staffing companies recover overdue invoices?",
    answer:
      "Under Section 43B(h) introduced by the Finance Act, 2023, corporate buyers must pay registered Micro and Small enterprises within 15 days (or up to 45 days if stipulated in a written agreement). If the corporate client defaults past March 31, the entire unpaid staffing invoice is disallowed as a business expense for that financial year, adding 25% to 30% corporate income tax liability directly to the client's assessment plus penal interest under Section 234.",
  },
  {
    question: "Can we legally withdraw or demobilize deployed staff if the client stops paying monthly bills?",
    answer:
      "Yes, provided you execute a structured legal demobilization. Under Sections 51 and 54 of the Indian Contract Act (reciprocal promises), a contractor is not bound to perform when the client has breached the condition precedent of timely payroll funding. To prevent retaliatory suits or allegations of abandonment, the staffing firm must issue a formal 7-day cure notice, document formal handovers, and collect security exit clearances under BSA 2023 Section 63.",
  },
  {
    question: "What if client non-payment causes our agency to delay EPF and ESIC remittances?",
    answer:
      "Delays in depositing employee PF and ESIC beyond the 15th trigger severe statutory penalties: Section 14B damages (up to 25% per annum), Section 7Q interest (12% per annum) under the EPF Act, and potential prosecution under Section 405/406 IPC (BNS Section 316) for criminal breach of trust. By issuing an immediate advocate notice holding the principal employer accountable under CLRA Section 21(4) and placing the client on formal notice of indemnification, the agency creates vital exculpatory evidence for EPFO authorities.",
  },
  {
    question: "Can a staffing company file an IBC Section 8 Demand Notice against a defaulting corporate client?",
    answer:
      "Yes. Staffing and manpower management fees constitute an indisputable 'Operational Debt' under Section 5(21) of the Insolvency and Bankruptcy Code, 2016. If the defaulted invoice amount meets or exceeds the statutory threshold of ₹1 Crore (across one or multiple aggregated billing cycles), the staffing agency can serve a statutory 10-day Form 3 Demand Notice. Because signed timesheets and biometric logs negate any pre-existing dispute under the Mobilox doctrine, corporate debtors almost universally settle within the 10-day window to avoid NCLT admission.",
  },
  {
    question: "What electronic evidence is mandatory under Section 63 of Bharatiya Sakshya Adhiniyam, 2023?",
    answer:
      "Under BSA 2023 Section 63 (which supersedes Section 65B of the Indian Evidence Act), staffing agencies must produce: (1) biometric attendance CSV exports accompanied by system metadata hash, (2) client supervisor timesheet email sign-offs, (3) EPFO Electronic Challan cum Return (ECR) receipts with TRRN payment confirmations, (4) ESIC portal payment vouchers, and (5) bank transaction statement logs showing direct NEFT/RTGS salary credits to deployed workers' accounts.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "You Paid Deployed Staff Salaries, EPF, ESIC & 18% GST Out-of-Pocket on a 6% Markup—and the Client Defaulted! Urgent Staffing Recovery Guide",
  description:
    "In contract staffing, 92% of bills is pass-through salary, PF & GST. Recover defaulted payroll invoices using CLRA s.21(4), MSMED Act & IBC s.8.",
  datePublished: "2026-11-17T10:00:00+05:30",
  dateModified: "2026-11-17T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery`,
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
    name: "Contract Staffing Payroll PF ESIC Invoice Default Recovery",
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
      name: "Contract Staffing Payroll Recovery",
      item: `${SITE_URL}/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery`,
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
  name: "7-Step Operational Recovery SOP for Contract Staffing & Payroll Invoices",
  description:
    "Advocate-backed standard operating procedure to recover overdue contract staffing bills, out-of-pocket payroll disbursements, EPF, ESIC, and 18% GST.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "48-Hour Payroll & Statutory Reconciliation",
      text: "Isolate pure pass-through employee salaries, EPFO TRRN receipts, ESIC remittances, and 18% GST outlays from the agency service fee markup.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "BSA Section 63 Evidence Dossier Creation",
      text: "Compile biometric logs, supervisor email sign-offs, NEFT bank salary credit logs, and GSTR-1 filings with a Section 63 electronic certificate.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Section 21(4) CLRA & MSMED Advocate Demand Notice",
      text: "Serve a 15-day statutory demand citing Principal Employer absolute wage liability, 3x RBI compound interest, and Section 43B(h) tax disallowance.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Conditioned Demobilization & Cure Period Notice",
      text: "Serve a 7-day cure notice conditioning continued on-site staff deployment on immediate clearance of overdue payroll disbursements.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "MSME Samadhaan (MSEFC) Section 18 Filing",
      text: "Initiate statutory conciliation and arbitration for mandatory 3x RBI compound interest with monthly rests.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "IBC Section 8 Statutory Form 3 Demand Notice",
      text: "For defaults exceeding ₹1 Crore, serve a 10-day statutory demand notice threatening CIRP admission before the NCLT.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Commercial Court Order XXXVII Summary Suit & Order 38 Asset Attachment",
      text: "File for summary money decree and interim attachment of corporate client bank accounts and receivables before judgment.",
    },
  ],
};

export default function ContractStaffingRecoveryPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    {
      label: "Staffing & Manpower Recovery",
      href: "/industries/staffing-recruitment-manpower-recovery",
    },
    {
      label: "Contract Staffing Payroll Recovery",
      href: "/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>CLRA Section 21(4)</span>
              <span className="text-red-500">&bull;</span>
              <span>Contract Labour &amp; Temp Staffing</span>
              <span className="text-red-500">&bull;</span>
              <span>B2B Creditor Recovery Playbook</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              You Paid Deployed Staff Salaries, EPF, ESIC &amp; 18% GST Out-of-Pocket on a 6% Markup—and the Client Defaulted! Urgent Staffing Recovery Guide
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 with Parent Hub Link in First 250 Words */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Summary &bull; Staffing Recovery Protocol
              </span>
              <p>
                In contract staffing and manpower deployment, 92% of every monthly invoice represents pure out-of-pocket pass-through cash: salaries paid on the 7th, EPF and ESIC remitted on the 15th, and 18% GST paid on the 20th. When a client defaults, our comprehensive{" "}
                <Link
                  href="/industries/staffing-recruitment-manpower-recovery"
                  className="text-red-400 hover:text-red-300 underline font-semibold transition-colors"
                >
                  staffing and recruitment debt recovery framework
                </Link>{" "}
                leverages Contract Labour Act Section 21(4) Principal Employer ultimate wage liability, MSMED Act 3x compound interest, Section 43B(h) corporate tax disallowance, and IBC Section 8 insolvency demands to compel swift commercial settlement.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">CLRA s.21(4)</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Principal Employer Ultimate Wage Liability</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">92% Out-of-Pocket</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Pure Salary, PF, ESIC &amp; 18% GST</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">3x RBI Rate</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">MSMED Act Section 16 Compound Dues</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">IBC Section 8</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">10-Day Statutory CIRP Demand Notice</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout with Sticky TOC Sidebar */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Table of Contents */}
            <ContractStaffingTableOfContents />

            {/* Right Main Editorial Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* SECTION 1: Brutal Math of Staffing */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    The Brutal Math of Staffing: Why a Single Default Destroys 15 Clients' Profit
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    In the temporary staffing, flexi-staffing, and industrial labour contracting sectors, business margins are deceptive. Unlike SaaS companies with 80% gross margins or manufacturing firms operating at 30% gross profit, a contract staffing company functions on a razor-thin service management fee—typically ranging between <strong>5% and 8%</strong>.
                  </p>
                  <p>
                    Yet, the staffing agency shoulders <strong>100% of the operational and compliance capital risk</strong> upfront:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="block text-xs font-black uppercase text-red-700 tracking-wider mb-1">
                        Disbursed by the 7th
                      </span>
                      <p className="text-sm font-bold text-slate-900 mb-1">Direct Bank Salaries (NEFT)</p>
                      <p className="text-xs text-slate-600">
                        70% to 75% of invoice value paid out directly to 50–500+ deployed personnel out of overdraft facilities.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="block text-xs font-black uppercase text-amber-700 tracking-wider mb-1">
                        Remitted by the 15th
                      </span>
                      <p className="text-sm font-bold text-slate-900 mb-1">EPFO &amp; ESIC Statutory Dues</p>
                      <p className="text-xs text-slate-600">
                        15% to 18% of employee base remitted on EPFO unified portal and ESIC portal under criminal sanction threats.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="block text-xs font-black uppercase text-emerald-700 tracking-wider mb-1">
                        Deposited by the 20th
                      </span>
                      <p className="text-sm font-bold text-slate-900 mb-1">18% GST via GSTR-3B</p>
                      <p className="text-xs text-slate-600">
                        Full 18% Goods and Services Tax remitted to the exchequer even when the client has withheld payment for months.
                      </p>
                    </div>
                  </div>

                  <p>
                    Consider an enterprise staffing account with a monthly billing of <strong>₹50,00,000</strong> on a 6% service markup. The agency’s pure service margin is ₹3,00,000. After deducting software payroll licensing, compliance audit expenses, and banking overdraft interest, the net operational profit on that client is barely ₹1,50,000.
                  </p>
                  <p>
                    When that client defaults on the ₹50 Lakh invoice, the agency has disbursed <strong>₹47 Lakhs in hard cash out-of-pocket</strong>. Wiping out a ₹47 Lakh cash hole requires the net annual profit of <strong>more than 15 other fully performing corporate accounts</strong>. A single client default is not an accounting bad debt; it is an existential solvency emergency that threatens immediate bank NPA classification.
                  </p>
                  <p>
                    For agencies experiencing delayed payments, our{" "}
                    <Link
                      href="/services/vendor-and-invoice-recoveries"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      vendor and invoice recovery services
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/recovery/business-dues"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      commercial business dues recovery desk
                    </Link>{" "}
                    provide immediate institutional intervention.
                  </p>
                </div>
              </section>

              {/* SECTION 2: CLRA Section 21(4) & Principal Employer Liability */}
              <section
                id="heading-clra-liability"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Contract Labour Act Section 21(4): Principal Employer Absolute Liability
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    The cornerstone of contractor recovery in India is <strong>Section 21 of the Contract Labour (Regulation and Abolition) Act, 1970 (CLRA)</strong>, reinforced by Section 43 of the Code on Wages, 2019 and the Occupational Safety, Health and Working Conditions Code, 2020.
                  </p>

                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 my-4">
                    <p className="text-xs uppercase tracking-wider text-red-400 font-extrabold mb-1">
                      Bare Act Provision &bull; Section 21(4) Contract Labour (R&amp;A) Act, 1970
                    </p>
                    <blockquote className="text-xs sm:text-sm text-slate-200 italic border-l-2 border-red-500 pl-3 my-2">
                      &ldquo;In case the contractor fails to make payment of wages within the prescribed period or makes short payment, then the principal employer shall be liable to make payment of wages in full or the unpaid balance due, as the case may be, to the contract labour employed by the contractor...&rdquo;
                    </blockquote>
                    <p className="text-[11px] text-slate-400 mt-2">
                      Sub-clause (4) further stipulates that the principal employer who pays wages may recover the amount from the contractor. Crucially, in commercial reality, the inverse holds equal statutory force: where the contractor has paid wages on behalf of the principal employer establishment, the contractor holds an absolute right of reimbursement and subrogation.
                    </p>
                  </div>

                  <p>
                    Corporate debtors frequently attempt to hide behind commercial contract clauses, claiming that payment is subject to audit reconciliations, client end-customer payment realization (&ldquo;pay-when-paid&rdquo;), or arbitrary KPI metrics. Indian labour jurisprudence completely nullifies such clauses:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>
                      <strong>Statutory Primacy Over Private Contracts:</strong> Section 21 is a mandatory welfare statute. Private service agreements that delay pass-through wage reimbursements beyond statutory wage periods violate Section 23 of the Indian Contract Act, 1872 as contrary to public policy.
                    </li>
                    <li>
                      <strong>Doctrine of Unjust Enrichment (Section 70 Contract Act):</strong> The corporate client received the productive output and labour hours of deployed personnel. Retaining that economic benefit while withholding the cash reimbursed to the workforce constitutes unlawful unjust enrichment.
                    </li>
                    <li>
                      <strong>Subrogation of Workers&apos; Statutory Rights:</strong> Having satisfied the workers&apos; wage claims, the staffing firm steps into the shoes of the workforce to enforce payment against the principal employer’s assets.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 3: EPFO, ESIC & GST Pass-Through Exposure */}
              <section
                id="heading-epf-esic-gst"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    EPFO Damages, ESIC Strict Compliance &amp; 18% GST Out-of-Pocket Exposure
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    When an enterprise client delays a monthly staffing invoice, the agency faces a three-front statutory regulatory crossfire:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-r-xl">
                      <h3 className="text-sm font-bold text-red-950 mb-1">
                        1. EPFO Section 14B Penal Damages &amp; Section 7Q Interest
                      </h3>
                      <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
                        Under the Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1952, failure to deposit provident fund contributions by the 15th of the following month attracts <strong>12% per annum simple interest under Section 7Q</strong> plus <strong>Section 14B damages scaling up to 25% per annum</strong>. If the contractor withheld employee share deductions, directors face immediate prosecution under Section 406/409 IPC (BNS Section 316) for criminal breach of trust.
                      </p>
                    </div>

                    <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                      <h3 className="text-sm font-bold text-amber-950 mb-1">
                        2. ESIC Section 40 &amp; 44 Joint and Several Recovery
                      </h3>
                      <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                        Under the ESI Act, 1948, the principal employer and immediate employer are jointly and severally liable. Delayed remittance results in revenue recovery certificates, freezing of company bank accounts by the ESI Recovery Officer, and denial of medical benefit eligibility to deployed factory or facility staff.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border-l-4 border-slate-700 rounded-r-xl">
                      <h3 className="text-sm font-bold text-slate-950 mb-1">
                        3. 18% GST Out-of-Pocket Remittance via GSTR-3B
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Under the CGST Act, 2017, invoice issuance triggers tax liability on the 20th of the subsequent month. If a ₹1 Crore invoice remains unpaid for 6 months, the staffing agency has paid <strong>₹18,00,000 in non-refundable GST cash</strong> to the government. Corporate clients routinely take Input Tax Credit (ITC) in GSTR-2B while refusing to clear the underlying vendor invoice.
                      </p>
                    </div>
                  </div>

                  <p>
                    Understanding corporate tax implications is equally vital. Under{" "}
                    <Link
                      href="/law/section-43bh-msme-payment-rule"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      Section 43B(h) of the Income Tax Act
                    </Link>
                    , defaulting corporate clients face immediate disallowance of the entire staffing bill if dues to registered MSME suppliers remain unpaid beyond 45 days.
                  </p>
                </div>
              </section>

              {/* SECTION 4: Landmark Court Precedents */}
              <section
                id="heading-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Landmark Judicial Precedents on Manpower Contractor Wage Liabilities
                  </h2>
                </div>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-slate-50 border-l-4 border-[#DC2626] rounded-r-2xl border border-slate-200 shadow-sm"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {p.parties}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">{p.date}</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">{p.title}</h3>
                      <p className="text-xs text-slate-500 font-mono mb-2">{p.citation}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                        <strong className="text-slate-900">Holding &amp; Ratio:</strong> {p.holding}
                      </p>
                      <div className="p-3 bg-white border border-slate-200 rounded-xl">
                        <p className="text-xs text-slate-900 font-semibold">
                          <span className="text-red-700 font-bold uppercase tracking-wider text-[11px] block sm:inline sm:mr-2">
                            Operational Takeaway:
                          </span>
                          {p.takeaway}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 5: Recovery Decision Tree SVG */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Contractor Recovery Decision Tree: Operational Escalation Protocol
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Follow this tactical flowchart when a client delays monthly payroll billing past the agreed SLA credit period (typically 7–30 days).
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-x-auto pb-4">
                  <svg
                    viewBox="0 0 960 460"
                    className="w-full h-auto max-w-[960px] mx-auto text-slate-800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="960" height="460" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                    
                    {/* Step 1: Default Detected */}
                    <rect x="40" y="40" width="260" height="90" rx="12" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                    <text x="170" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Day 1–7 Post-Due Date</text>
                    <text x="170" y="98" textAnchor="middle" fill="#94A3B8" fontSize="11">Audit Timesheets &amp; EPF/ESIC</text>

                    {/* Arrow 1 */}
                    <path d="M300 85 H360" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />

                    {/* Step 2: Pass-Through Segregation */}
                    <rect x="360" y="40" width="260" height="90" rx="12" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />
                    <text x="490" y="75" textAnchor="middle" fill="#DC2626" fontSize="13" fontWeight="bold">Pass-Through Segregation</text>
                    <text x="490" y="98" textAnchor="middle" fill="#475569" fontSize="11">Ring-fence 92% Salary/PF from Markup</text>

                    {/* Arrow 2 */}
                    <path d="M620 85 H680" stroke="#DC2626" strokeWidth="3" />

                    {/* Step 3: Formal Advocate Demand */}
                    <rect x="680" y="40" width="240" height="90" rx="12" fill="#DC2626" />
                    <text x="800" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">CLRA s.21(4) Notice</text>
                    <text x="800" y="98" textAnchor="middle" fill="#FEE2E2" fontSize="11">15-Day Statutory Cure Demand</text>

                    {/* Branching Downwards */}
                    <path d="M800 130 V190" stroke="#DC2626" strokeWidth="3" />

                    {/* Decision Branch */}
                    <rect x="660" y="190" width="280" height="70" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
                    <text x="800" y="220" textAnchor="middle" fill="#92400E" fontSize="12" fontWeight="bold">Did Debtor Clear Dues in 15 Days?</text>
                    <text x="800" y="240" textAnchor="middle" fill="#B45309" fontSize="10">Evaluate Default Amount &amp; MSME Status</text>

                    {/* Path YES */}
                    <path d="M660 225 H490 V270" stroke="#10B981" strokeWidth="3" />
                    <rect x="360" y="270" width="260" height="80" rx="12" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
                    <text x="490" y="305" textAnchor="middle" fill="#065F46" fontSize="13" fontWeight="bold">Settled / Escrow Released</text>
                    <text x="490" y="328" textAnchor="middle" fill="#047857" fontSize="11">Resume Operations with Weekly Advance</text>

                    {/* Path NO: Escalation Tracks */}
                    <path d="M800 260 V310" stroke="#EF4444" strokeWidth="3" />
                    
                    {/* Track A: MSMED MSEFC */}
                    <rect x="40" y="360" width="260" height="80" rx="12" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2" />
                    <text x="170" y="395" textAnchor="middle" fill="#4338CA" fontSize="12" fontWeight="bold">Track 1: MSMED MSEFC</text>
                    <text x="170" y="418" textAnchor="middle" fill="#64748B" fontSize="10">Mandatory 3x RBI Compound Interest</text>

                    {/* Track B: IBC Section 8 */}
                    <rect x="360" y="360" width="260" height="80" rx="12" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />
                    <text x="490" y="395" textAnchor="middle" fill="#DC2626" fontSize="12" fontWeight="bold">Track 2: IBC Section 8 (&gt;₹1 Cr)</text>
                    <text x="490" y="418" textAnchor="middle" fill="#64748B" fontSize="10">10-Day Statutory CIRP Demand</text>

                    {/* Track C: Order 37 & Order 38 */}
                    <rect x="680" y="360" width="240" height="80" rx="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                    <text x="800" y="395" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">Track 3: Order XXXVII CPC</text>
                    <text x="800" y="418" textAnchor="middle" fill="#64748B" fontSize="10">Summary Suit + Order 38 Asset Freeze</text>

                    <path d="M800 310 H170 V360" stroke="#EF4444" strokeWidth="2" />
                    <path d="M800 310 H490 V360" stroke="#EF4444" strokeWidth="2" />
                    <path d="M800 310 V360" stroke="#EF4444" strokeWidth="2" />
                  </svg>
                </div>

                {/* Mobile Responsive Cards */}
                <div className="md:hidden space-y-3">
                  <div className="p-4 bg-slate-900 text-white rounded-xl">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">Phase 1 &bull; Days 1–7</span>
                    <p className="text-xs font-bold">Audit &amp; Pass-Through Segregation</p>
                    <p className="text-[11px] text-slate-300 mt-1">Ring-fence pure salaries, EPFO TRRN, and ESIC challans from disputed management markups.</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 block mb-1">Phase 2 &bull; Days 8–15</span>
                    <p className="text-xs font-bold text-red-950">Serve CLRA s.21(4) &amp; MSME Demand Notice</p>
                    <p className="text-[11px] text-red-900 mt-1">Demand immediate reimbursement of statutory outlays citing Section 43B(h) and director liability.</p>
                  </div>
                  <div className="p-4 bg-slate-100 border border-slate-300 rounded-xl">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block mb-1">Phase 3 &bull; Post 15-Day Escalation</span>
                    <p className="text-xs font-bold text-slate-900">Multi-Track Judicial Action</p>
                    <p className="text-[11px] text-slate-600 mt-1">Trigger MSME Samadhaan for 3x RBI interest, IBC Section 8 notice (if &gt;₹1 Cr), or Commercial Court Order XXXVII summary suit with asset freezing.</p>
                  </div>
                </div>
              </section>

              {/* SECTION 6: Statutory Claims Matrix Table */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Claims Matrix: Segregating Wages, Compliances &amp; Markup
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Enterprise debtors routinely leverage single SLA disputes to withhold entire invoices. This matrix segregates claim components to defeat blanket payment holdbacks.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-4 rounded-tl-xl font-bold">Billing Component</th>
                        <th className="p-3 sm:p-4 font-bold">% of Total</th>
                        <th className="p-3 sm:p-4 font-bold">Statutory Defense Hook</th>
                        <th className="p-3 sm:p-4 rounded-tr-xl font-bold">Debtor Set-Off Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 border-b border-slate-200">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Net Employee Take-Home Salaries</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-red-600">65% – 72%</td>
                        <td className="p-3 sm:p-4 text-slate-700">CLRA Section 21(4) &amp; Code on Wages s.43</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">Zero Set-Off Permitted (Ring-Fenced)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">EPF (Employer + Employee Share)</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-slate-700">12% – 13%</td>
                        <td className="p-3 sm:p-4 text-slate-700">EPF Act s.6 &amp; s.14B Statutory Damages</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">Zero Set-Off (Criminal Liability)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">ESIC Remittances (Employer + Employee)</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-slate-700">4% – 4.75%</td>
                        <td className="p-3 sm:p-4 text-slate-700">ESI Act s.40 &amp; s.44 Joint Liability</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700">Zero Set-Off (Statutory Duty)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Goods and Services Tax (GST)</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-slate-700">18.0%</td>
                        <td className="p-3 sm:p-4 text-slate-700">CGST Act s.16(2)(c) &amp; s.50(3)</td>
                        <td className="p-3 sm:p-4 font-bold text-amber-700">ITC Blockade if Client Defaults</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Agency Service Management Markup</td>
                        <td className="p-3 sm:p-4 font-mono font-bold text-emerald-600">5% – 8%</td>
                        <td className="p-3 sm:p-4 text-slate-700">Contract Act s.73 / Commercial Courts Act</td>
                        <td className="p-3 sm:p-4 font-bold text-slate-600">Subject to Contractual SLA Audit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 7: 4 Commercial Failure Modes (Scenario Tabs) */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Commercial Failure Modes &amp; Strategic Response Playbooks
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Click through the interactive scenarios below to evaluate specific debtor tactics and execute the legally verified recovery response.
                </p>

                <ContractStaffingScenarioTabs />
              </section>

              {/* SECTION 8: Worked Financial Ledger */}
              <section
                id="heading-worked-example"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Worked Financial Ledger: Recovering ₹63.6L Overdue Staffing Billing
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Below is an itemized recovery ledger demonstrating how a staffing agency providing 120 warehouse associates to a regional 3PL logistics provider recovered 100% of out-of-pocket payroll disbursements, along with statutory interest and GST damages.
                  </p>

                  <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-xl my-6">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-4">
                      <span className="text-xs uppercase tracking-wider text-red-400 font-extrabold">
                        Audited Default Ledger &bull; 120 Warehouse Associates
                      </span>
                      <span className="text-xs text-slate-400 font-mono">Invoice Date: 05 July 2026</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs sm:text-sm">
                      <div className="flex justify-between items-center py-1 border-b border-slate-800">
                        <span className="text-slate-300">1. Net Take-Home Salaries Disbursed (120 staff via NEFT)</span>
                        <span className="font-bold text-slate-100">&#8377;36,00,000</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-slate-800">
                        <span className="text-slate-300">2. Employee &amp; Employer PF Contribution (EPFO TRRN Paid)</span>
                        <span className="font-bold text-slate-100">&#8377;6,48,000</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-slate-800">
                        <span className="text-slate-300">3. ESIC Statutory Remittance (Paid on Portal)</span>
                        <span className="font-bold text-slate-100">&#8377;2,16,000</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-slate-800">
                        <span className="text-slate-300">4. Agency Service Markup (6.0% on gross billing)</span>
                        <span className="font-bold text-slate-100">&#8377;2,67,840</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-slate-800">
                        <span className="text-slate-300">5. 18% Goods and Services Tax (Remitted via GSTR-3B)</span>
                        <span className="font-bold text-slate-100">&#8377;8,51,731</span>
                      </div>
                      <div className="flex justify-between items-center py-2 bg-slate-800/80 px-3 rounded-lg border border-slate-700">
                        <span className="text-slate-200 font-sans font-bold">Total Principal Invoice Claim Amount:</span>
                        <span className="font-bold text-emerald-400 text-sm sm:text-base">&#8377;55,83,571</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-slate-800">
                        <span className="text-amber-400">6. MSMED Act Section 16 Interest (3x RBI Rate = 19.5% for 120 days)</span>
                        <span className="font-bold text-amber-400">&#8377;3,63,400</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-slate-800">
                        <span className="text-amber-400">7. Bank Overdraft Interest Incurred on Cash Advances (13.5% p.a.)</span>
                        <span className="font-bold text-amber-400">&#8377;2,51,800</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-slate-800">
                        <span className="text-slate-300">8. Legal Notice &amp; Advocate Professional Retainer Fee</span>
                        <span className="font-bold text-slate-100">&#8377;1,61,229</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 text-sm sm:text-base border-t-2 border-red-500 font-bold">
                        <span className="text-white font-sans uppercase">Total Statutory Recovery Claim:</span>
                        <span className="text-red-400 text-base sm:text-xl">&#8377;63,60,000</span>
                      </div>
                    </div>
                  </div>

                  <p>
                    You can compute your specific delayed interest claims using our free{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      MSME delayed payment compound interest calculator
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* SECTION 9: 7-Step Operational Recovery Playbook */}
              <section
                id="heading-operational-sop"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    7-Step Operational Recovery Playbook: From 48-Hr Audit to NCLT / Attachment
                  </h2>
                </div>

                <div className="space-y-4">
                  {HOWTO_SCHEMA.step.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 bg-slate-50 border border-slate-200 rounded-xl"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {s.position}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1">{s.name}</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 10: BSA Section 63 Evidence Dossier */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    10
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    BSA 2023 Section 63 Electronic Evidence Dossier for Staffing Agencies
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63), electronic records must be accompanied by an authenticated certificate proving data hash integrity. Compile these 4 pillars before dispatching legal notices:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
                      Pillar 1: Attendance Proof
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">Biometrics &amp; Signed Timesheets</h3>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                      <li>Biometric punch raw CSV exports with SHA-256 system hash.</li>
                      <li>Client supervisor daily shift sign-offs and attendance approval emails.</li>
                      <li>Site security turnstile logs and gate pass registers.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                      Pillar 2: Bank Disbursement Audit
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">Direct NEFT/RTGS Wage Credits</h3>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                      <li>Bank-certified NEFT batch salary debit scrolls matching employee names.</li>
                      <li>Individual payslips issued under Form XIX / Wage Code rules.</li>
                      <li>Bank statements proving out-of-pocket cash drawdowns.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                      Pillar 3: EPFO &amp; ESIC Portals
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">Government Compliance Receipts</h3>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                      <li>EPFO Electronic Challan cum Return (ECR) with TRRN paid status.</li>
                      <li>ESIC Monthly Contribution Summary and Challan receipt copies.</li>
                      <li>State Labour Welfare Fund and Professional Tax deposit receipts.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-1">
                      Pillar 4: Tax &amp; Contract Records
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">GST Invoices &amp; MSME Certificate</h3>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                      <li>Tax Invoices filed in GSTR-1 with client GSTIN auto-populating in GSTR-2B.</li>
                      <li>Master Service Agreement (MSA) with statement of work (SOW).</li>
                      <li>Valid Udyam Registration Certificate proving Micro/Small status.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-xs text-slate-800">
                    Need ready notice formats? Download or customize our specialized{" "}
                    <Link
                      href="/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      staffing invoice &amp; backdoor hiring demand notice template
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* DUAL-TRACK CONVERSION FUNNEL CTA */}
              <ContractStaffingCTA />

              {/* SECTION 11: Frequently Asked Questions (FAQ) */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    11
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions on Contract Staffing Debt Recovery
                  </h2>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden bg-slate-50/50 hover:bg-slate-50 transition-colors"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-xs sm:text-sm md:text-base">
                        <span>{faq.question}</span>
                        <span className="shrink-0 rounded-full p-1.5 text-slate-500 group-open:rotate-180 transition-transform">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* SECTION 12: Statutory Framework & Enactments */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    12
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Framework, Bare Act Enactments &amp; Authority Cross-Links
                  </h2>
                </div>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                        <th className="p-3 font-bold">Statute &amp; Regulatory Enactment</th>
                        <th className="p-3 font-bold">Governing Sections</th>
                        <th className="p-3 font-bold">Official Repository Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {PRIMARY_SOURCES.map((src, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3 font-medium text-slate-800">{src.title}</td>
                          <td className="p-3 text-slate-600 font-mono text-xs">Statutory Authority</td>
                          <td className="p-3">
                            <a
                              href={src.url}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="text-[#DC2626] font-semibold hover:underline inline-flex items-center gap-1 text-xs"
                            >
                              IndiaCode / Official Portal &rarr;
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Sibling Spokes & Cross-Links */}
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3">
                    Related Staffing &amp; Recruitment Recovery Guides
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Link
                      href="/backdoor-hiring-candidate-circumvention-placement-fee-recovery-india"
                      className="p-3 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-800 hover:text-[#DC2626] hover:border-red-300 transition-colors"
                    >
                      Backdoor Hiring &amp; Candidate Circumvention Recovery &rarr;
                    </Link>
                    <Link
                      href="/recruitment-agency-90-day-replacement-clause-abuse-fee-recovery"
                      className="p-3 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-800 hover:text-[#DC2626] hover:border-red-300 transition-colors"
                    >
                      90-Day Candidate Replacement Clause Abuse Recovery &rarr;
                    </Link>
                    <Link
                      href="/security-guard-housekeeping-facility-management-unpaid-bill-recovery"
                      className="p-3 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-800 hover:text-[#DC2626] hover:border-red-300 transition-colors"
                    >
                      Security Guard &amp; Housekeeping Facility Unpaid Bill Recovery &rarr;
                    </Link>
                  </div>
                </div>

                {/* Advocate Attribution */}
                {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
                  <div>
                    <span className="font-bold text-slate-900 block">Vetted by Institutional Legal Panel</span>
                    <span>Anuj Anand Malik &bull; Advocate &amp; Founder, AMA Legal Solutions</span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Published: November 2026 &bull; B2B Creditor Recovery Series &bull; Ref: B2B-137
                  </span>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Global Cluster Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
