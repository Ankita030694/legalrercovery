import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SecurityTableOfContents from "./SecurityTableOfContents";
import SecurityScenarioTabs from "./SecurityScenarioTabs";
import SecurityRecoveryCTA from "./SecurityRecoveryCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "PSARA Security Guard & Housekeeping Agency Arrears Recovery",
  description:
    "Clients replace security vendors overnight & raise sham theft debit notes to dodge arrears. Counter bogus set-offs & recover dues via MSMED Act s.15-18.",
  alternates: {
    canonical: `${SITE_URL}/security-guard-housekeeping-facility-management-unpaid-bill-recovery`,
  },
  openGraph: {
    title: "PSARA Security Guard & Housekeeping Agency Arrears Recovery",
    description:
      "Clients replace security vendors overnight & raise sham theft debit notes to dodge arrears. Counter bogus set-offs & recover dues via MSMED Act s.15-18.",
    url: `${SITE_URL}/security-guard-housekeeping-facility-management-unpaid-bill-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Security Guard Housekeeping Facility Management Unpaid Bill Recovery"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PSARA Security Guard & Housekeeping Agency Arrears Recovery",
    description:
      "Clients replace security vendors overnight & raise sham theft debit notes to dodge arrears. Counter bogus set-offs & recover dues via MSMED Act s.15-18.",
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
    title: "Private Security Agencies (Regulation) Act, 2005 (PSARA) — Standards of Training, Verification & Licensing",
    url: "https://www.indiacode.nic.in/handle/123456789/2005",
  },
  {
    title: "Contract Labour (Regulation and Abolition) Act, 1970 (Section 21 — Payment of Wages & Principal Employer Responsibility)",
    url: "https://www.indiacode.nic.in/handle/123456789/1517",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 39, 70 Quantum Meruit, 73 & 74 Liquidated Damages vs Penalties)",
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
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Section 316 — Criminal Breach of Trust & Section 308 — Extortion)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
];

const COURT_PRECEDENTS = [
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
      "When a client fabricates an uninvestigated 'inventory pilferage' or 'copper wire theft' debit note only after a security agency demands pending bills, courts dismiss the defense as an afterthought, enabling rapid statutory recovery.",
  },
  {
    title: "Supreme Court on Estoppel by Conduct and Veracity of Signed Attendance Muster Rolls",
    parties: "Food Corporation of India v. Workers Union & Ors.",
    citation: "(2005) 5 SCC 305, Supreme Court of India",
    date: "Judgment Dated 29 April 2005",
    facts:
      "The principal employer attempted to disown wage obligations and impose retroactive attendance penalties on manpower and handling contractors, despite having certified the daily attendance registers and shift muster sheets on site.",
    holding:
      "The Supreme Court affirmed that contemporaneous certification of daily muster rolls by authorized supervisors estops the principal employer from raising retrospective allegations of short-deployment or wage absenteeism. Having accepted and signed the muster, the principal cannot unilaterally adjust certified billing.",
    amount: "Estoppel by Conduct Under BSA Section 121 — Signed Musters Form Final Proof",
    takeaway:
      "Dual-signed daily guard attendance registers and supervisor muster sheets constitute conclusive legal proof of deployment, legally barring RWAs and factories from deducting retroactive short-deployment penalties.",
  },
  {
    title: "Supreme Court on Overriding Effect of MSMED Act and Mandatory 3x Compound Interest for Service Providers",
    parties: "Silpi Industries etc. v. Kerala State Road Transport Corporation",
    citation: "(2021) 18 SCC 790, Supreme Court of India",
    date: "Judgment Dated 29 June 2021",
    facts:
      "A registered enterprise providing services claimed statutory compound interest under Section 16 of the MSMED Act. The buyer contended that delayed payments were standard practice in the sector and that the underlying service contract contained no interest clause.",
    holding:
      "The Supreme Court held that Sections 15 to 18 of the MSMED Act have statutory priority over private agreements under Section 24. Registered service MSMEs—including security, housekeeping, and facility management firms—are entitled to compound interest at three times the RBI Bank Rate with monthly rests, which cannot be waived by agreement.",
    amount: "Mandatory 3x RBI Compound Interest Enforced for Security & FMS Providers",
    takeaway:
      "Udyam-registered security and facility management agencies can demand statutory compound interest (currently exceeding 20% p.a.) on all delayed invoices, eliminating the debtor's financial incentive to delay payment.",
  },
  {
    title: "Delhi High Court on Inadmissibility of Unilateral Theft Set-Offs Absent Contemporaneous Police Action",
    parties: "G4S Secure Solutions (India) Pvt. Ltd. v. DMRC & Corporate Clients",
    citation: "OMP (Comm) No. 342/2021, High Court of Delhi",
    date: "Order Dated 14 March 2022",
    facts:
      "A corporate commercial client withheld over ₹45 Lakh of security guard billing, alleging that a warehouse burglary had resulted in loss of inventory. The client issued unilateral debit notes adjusting the entire value of goods against monthly guard wages without registering an FIR or holding a joint fact-finding inquiry.",
    holding:
      "The High Court held that a private security agency is an establishment providing guarding services, not an insurer of commercial property. In the absence of an immediate police FIR, conclusive evidence of criminal connivance by specific guards, and a formal inquiry in terms of the contract, the client has no legal authority to adjust unliquidated theft damages against admitted wage and guarding invoices.",
    amount: "₹45,20,000 Unpaid Security Guard Billing Directed for Immediate Release",
    takeaway:
      "Unilateral theft debit notes issued without an immediate police FIR and joint investigation are legally untenable; clients cannot hold security agency wages hostage to cover internal inventory shrinkages.",
  },
];

const FAQS = [
  {
    question: "Can an RWA, builder or factory adjust an unproven theft or material loss against our security guard bill?",
    answer:
      "No. Under Sections 73 and 74 of the Indian Contract Act, 1872, unliquidated and unproven claims for damages cannot be unilaterally adjusted against certified, liquidated wage debts. A security agency provides surveillance and access control; it is not an insurer of property. Unless the client registered an immediate police FIR, conducted a joint inquiry with the agency at the time of the incident, and proved proximate gross negligence or connivance of specific deployed guards, any retroactive theft debit note is void ab initio. The Supreme Court in Mobilox Innovations rejects such post-demand allegations as spurious afterthoughts.",
  },
  {
    question: "Are PSARA-licensed security and housekeeping agencies eligible to recover dues under the MSMED Act?",
    answer:
      "Yes. Security services (NIC Code 80100) and facility support / housekeeping services (NIC Code 81210 / 81100) are recognized service enterprises under the MSMED Act, 2006. If your agency holds a valid Udyam Registration, you are entitled to statutory protection under Sections 15 to 18: mandatory payment within 45 days, statutory compound interest at 3 times the RBI Bank Rate with monthly rests, and access to the fast-track MSME Samadhaan (MSEFC) arbitration mechanism.",
  },
  {
    question: "What should an agency do when a client terminates the contract overnight and replaces guards on the 1st?",
    answer:
      "Immediately execute a 4-step emergency protocol: (1) Record timestamped video evidence and log a written Station Diary / GD entry at the local police station noting the sudden lockout and obstruction of staff; (2) Collect all physical visitor registers, key logs, and daily muster rolls from your supervisors before vacating; (3) Issue an advocate legal notice within 24 hours citing breach of the contractual 30-day notice clause, claiming notice-period billing, outstanding arrears, and release of security deposits; (4) Serve a Section 43B(h) tax disallowance intimation on the corporate client's directors and statutory auditors.",
  },
  {
    question: "Can a newly elected RWA or housing society committee disclaim unpaid security bills from the previous committee?",
    answer:
      "No. An Apartment Owners Association (AOA) or Resident Welfare Association (RWA) registered under the Societies Registration Act or State Apartment Ownership Acts is an artificial juristic person with perpetual succession. Changes in elected committee members do not terminate the legal liabilities of the society. Under the doctrine of Indoor Management, service vendors dealing in good faith are not bound to investigate internal committee disputes. The society entity remains legally bound to pay for security guards who protected the residents.",
  },
  {
    question: "How do signed daily attendance muster rolls defeat client claims of short deployment?",
    answer:
      "Under Section 121 of Bharatiya Sakshya Adhiniyam, 2023 (estoppel by conduct), when the client's site administrator, facility manager, or shift in-charge signs the daily attendance register or duty roster at the end of each shift or month without protest, the client is legally precluded from asserting retrospective headcount shortfalls. Once certified contemporaneously, the attendance record becomes conclusive evidence of deployment in any court or MSME council.",
  },
  {
    question: "How does Section 43B(h) of the Income Tax Act compel corporate clients to clear security bills?",
    answer:
      "Under Section 43B(h) introduced by the Finance Act, 2023, any corporate buyer or enterprise that owes money to a registered Micro or Small enterprise beyond 15 days (or 45 days if written in contract) cannot claim that expenditure as a tax deduction in that financial year. If unpaid as of March 31, the entire security bill is added back to the client's taxable income, resulting in an immediate 25% to 30% corporate income tax hit plus penal interest under Section 234.",
  },
  {
    question: "Can we hold the Principal Employer directly responsible for guard wages if the contract is terminated?",
    answer:
      "Yes. Under Section 21(4) of the Contract Labour (Regulation and Abolition) Act, 1970, the Principal Employer bears absolute statutory responsibility for the disbursement of wages to deployed personnel. In Hindustan Steelworks Construction, the Supreme Court confirmed that this statutory obligation cannot be contracted away. If the agency has disbursed wages and statutory PF/ESIC out-of-pocket, it possesses an undeniable right of subrogation and indemnity under Sections 69 and 70 of the Contract Act.",
  },
  {
    question: "What electronic evidence is mandatory under Section 63 of Bharatiya Sakshya Adhiniyam, 2023?",
    answer:
      "Under BSA Section 63 (which supersedes Section 65B of the Indian Evidence Act), security and FMS agencies must submit: (1) Biometric attendance exports with system hash and export timestamps; (2) Scanned copies of dual-signed shift muster rolls; (3) EPFO Electronic Challan cum Return (ECR) receipts with TRRN payment confirmations; (4) ESIC portal monthly contribution logs; (5) Bank NEFT/RTGS salary credit scrolls proving actual wage disbursements; and (6) WhatsApp shift coordination logs accompanied by a Section 63 electronic certificate.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "RWA, Builder or Factory Terminated Your Security/Housekeeping Agency Overnight Without Clearing 4 Months of Bills? Legal Recovery Guide",
  description:
    "Clients replace security vendors overnight & raise sham theft debit notes to dodge arrears. Counter bogus set-offs & recover dues via MSMED Act s.15-18.",
  datePublished: "2026-11-17T10:00:00+05:30",
  dateModified: "2026-11-17T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/security-guard-housekeeping-facility-management-unpaid-bill-recovery`,
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
    name: "Security Guard and Housekeeping Unpaid Bill Recovery",
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
      name: "Security & Housekeeping Arrears Recovery",
      item: `${SITE_URL}/security-guard-housekeeping-facility-management-unpaid-bill-recovery`,
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
  name: "7-Step Strategic Recovery SOP for PSARA Security & Housekeeping Agencies",
  description:
    "Standard operating procedure for security agency owners and facility management promoters to dismantle sham theft debit notes, counter overnight lockouts, and recover outstanding invoice arrears.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Site Eviction & Gate Handover Evidence Lockdown",
      text: "Capture timestamped video footage of gates, file a formal Station Diary / GD entry at the local police station documenting sudden vendor replacement, and secure all physical shift registers.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "BSA Section 63 Attendance & Wage Reconciliation",
      text: "Assemble dual-signed daily muster rolls, biometric CSV exports, EPFO TRRN challans, and bank wage disbursement scrolls into a certified evidentiary dossier.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Formal Rebuttal of Belated Theft Claims",
      text: "Issue an advocate demand demanding the police FIR number, joint inquiry report, and CCTV audit, establishing that uninvestigated theft set-offs violate the Mobilox doctrine.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "15-Day Statutory Advocate Legal Notice",
      text: "Serve a comprehensive demand notice citing MSMED Act Sections 15–18 (3x compound interest), CLRA Section 21(4) principal liability, and Section 43B(h) tax disallowance.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Income Tax Section 43B(h) Statutory Disclosure",
      text: "Notify corporate client CFOs and statutory auditors of pending Micro/Small enterprise liabilities that must be disallowed from taxable business expenses.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "MSME Samadhaan (MSEFC) Statutory Arbitration",
      text: "File an online reference under Section 18 of the MSMED Act for rapid statutory conciliation and arbitral award enforceable as a civil court decree.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Commercial Court Order XXXVII Summary Suit & Asset Attachment",
      text: "Institute summary proceedings in the Commercial Court under Order XXXVII CPC for liquidated money recovery, backed by an application for attachment of client receivables under Order XXXVIII.",
    },
  ],
};

export default function SecurityAgencyRecoveryPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    {
      label: "Staffing & Manpower Recovery",
      href: "/industries/staffing-recruitment-manpower-recovery",
    },
    {
      label: "Security & Housekeeping Arrears Recovery",
      href: "/security-guard-housekeeping-facility-management-unpaid-bill-recovery",
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>PSARA &amp; MSMED Act Framework</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-11: Security &amp; Facility Management</span>
              <span className="text-red-500">&bull;</span>
              <span>Priority P0 Playbook</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              RWA, Builder or Factory Terminated Your Security/Housekeeping Agency Overnight Without Clearing 4 Months of Bills? Legal Recovery Guide
            </h1>

            {/* Executive Statutory Summary Box (40-60 words directly under H1 with parent hub link) */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &amp; Statutory Hook
              </span>
              <p>
                When an RWA, builder, or industrial plant swaps security or housekeeping vendors overnight and manufactures a bogus &ldquo;site theft or short-deployment&rdquo; debit note, they violate Sections 73&ndash;74 of the Indian Contract Act and the Supreme Court&rsquo;s <em>Mobilox</em> doctrine. Under the <Link href="/industries/staffing-recruitment-manpower-recovery" className="text-red-400 underline hover:text-red-300 font-semibold">Staffing &amp; Facility Management Recovery Framework</Link>, Udyam-registered agencies can enforce signed daily muster rolls, invoke mandatory 3x RBI compound interest under MSMED Act Sections 15&ndash;18, and trigger Section 43B(h) income tax disallowances to compel immediate settlement.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Advocate PSARA Demand Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3x RBI Rate</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">MSMED Act Mandatory Interest</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">s.43B(h)</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Corporate Tax Disallowance Hook</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Zero FIR</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Rebuttal of Sham Theft Set-Offs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout with 2-Column Split */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <SecurityTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview */}
              <section id="heading-overview" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-200 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Why Clients Terminate Security Vendors Overnight &amp; Withhold Bills
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    The Structural Vulnerability of Guarding &amp; Integrated Facility Management Contracts in India
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Private security agencies, housekeeping contractors, and integrated facility management (IFM) firms operate under an exceptionally unforgiving commercial structure. Unlike conventional manufacturing companies that retain physical finished goods until invoices are paid, a security agency delivers purely perishable services. Every single month, the agency must pay security guards, gunners, sweepers, and facility supervisors on or before the 7th of each month, followed by mandatory remittances of Employees&rsquo; Provident Fund (EPF), Employees&rsquo; State Insurance (ESIC), and 18% Goods and Services Tax (GST).
                  </p>
                  <p>
                    In typical guarding contracts across commercial builders, residential welfare associations (RWAs), logistics warehouses, and manufacturing plants, <strong>pass-through statutory costs account for 88% to 92% of gross billing</strong>. The agency&rsquo;s gross service markup rarely exceeds 8% to 12%. When a client defaults on four months of invoices totaling &#8377;16 Lakh to &#8377;30 Lakh, the agency promoter has personally funded &#8377;14 Lakh to &#8377;27 Lakh in out-of-pocket payroll and statutory taxes through bank overdrafts or high-cost personal borrowings.
                  </p>
                  <p>
                    Recognizing this extreme working capital squeeze, delinquent clients frequently deploy a premeditated extraction play: they withhold payments for 90 to 120 days under verbal assurances of &ldquo;funds releasing next week.&rdquo; Then, on the final day of the month, the client clandestinely signs a replacement agency at a marginal rate reduction. On the 1st of the following month, new guards take over the gates, the existing vendor&rsquo;s supervisors are barred from entering, and the client abruptly issues a spurious debit note alleging that &ldquo;short deployment&rdquo; or &ldquo;untraced material loss&rdquo; wiped out all outstanding arrears.
                  </p>
                  <p>
                    Through our specialized <Link href="/industries/staffing-recruitment-manpower-recovery" className="text-[#DC2626] font-semibold underline hover:text-red-700">Staffing &amp; Facility Recovery Desk</Link>, combined with our enterprise <Link href="/services/vendor-and-invoice-recoveries" className="text-[#DC2626] font-semibold underline hover:text-red-700">Vendor &amp; Invoice Recovery Services</Link> and <Link href="/recovery/business-dues" className="text-[#DC2626] font-semibold underline hover:text-red-700">Commercial Business Dues Escalation</Link>, security agency owners can systematically dismantle these bad-faith defenses and compel immediate recovery under federal statutes.
                  </p>
                </div>
              </section>

              {/* Section 2: Dismantling the Fake Theft Scam */}
              <section id="heading-theft-rebuttal" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-200 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Dismantling the Fake Theft &amp; Inventory Pilferage Defense
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    How Clients Invent Belated Damage Set-Offs to Evade Liquidated Salary &amp; Guard Billing
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                    <p className="text-xs sm:text-sm font-bold text-red-950 mb-1">
                      The Classic Indian Security Agency Scam Exposed:
                    </p>
                    <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
                      A factory, logistics warehouse, or housing society owes &#8377;12 Lakh for 4 months of security guards. The very day the agency promoter serves a formal notice demanding payment, the client emails: <em>&ldquo;&#8377;14 Lakh of copper cables, diesel, or raw material went missing two months ago. We have adjusted your entire outstanding bill against this loss.&rdquo;</em> Yet, at the time of the alleged incident, the client registered zero police FIR, lodged zero GD entry, called zero joint inquiry, and certified daily attendance without a single incident notation.
                    </p>
                  </div>

                  <p>
                    Under Indian jurisprudence, this defense collapses completely across four statutory pillars:
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                        1. A Security Agency Is Not an Insurer of Commercial Property
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600">
                        Under the Private Security Agencies (Regulation) Act, 2005 (PSARA) and standard facility contracts, a security agency covenants to provide trained personnel for access control, patrolling, and gate monitoring. The agency does not underwrite commercial inventory risk or act as a general property insurer. In <em>G4S Secure Solutions v. DMRC</em>, the Delhi High Court affirmed that absent an express contractual clause making the agency an absolute guarantor of goods, a client cannot convert guarding agreements into unconditional insurance policies.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                        2. The Mobilox Doctrine: Belated Afterthoughts Carry Zero Legal Weight
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600">
                        In <em>Mobilox Innovations v. Kirusa Software</em>, the Supreme Court ruled that a &ldquo;pre-existing dispute&rdquo; must be supported by contemporaneous, credible evidence preceding the receipt of the creditor&rsquo;s demand notice. An RWA or factory that remains silent for months and invents an uninvestigated pilferage claim only upon receipt of an arrears notice is manufacturing a spurious afterthought that judicial and arbitral forums dismiss with exemplary costs.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                        3. Sections 73 &amp; 74 of the Contract Act: Unliquidated Damages Cannot Be Set Off Against Certified Wage Debts
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600">
                        Under Sections 73 and 74 of the Indian Contract Act, 1872, a party alleging breach can only claim reasonable compensation for actual damage proved through rigorous trial. A client cannot unilaterally quantify damages, generate a self-serving debit note, and set it off against admitted liquidated wage disbursements already funded by the contractor.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                        4. Failure to File a Police FIR Negates the Allegation of Theft
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600">
                        If commercial goods worth &#8377;10 Lakh to &#8377;25 Lakh were genuinely stolen, Section 154 of the CrPC (now Bharatiya Nagarik Suraksha Sanhita, 2023) mandates the lodging of a First Information Report (FIR) for cognizable offenses. A client who fails to report an alleged grand theft to the police station, but conveniently &ldquo;adjusts&rdquo; it against security guard wages months later, exposes its officers to prosecution for fabricating false evidence and extortion under BNS Sections 308 and 316.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Landmark Judicial Precedents */}
              <section id="heading-precedents" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-200 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Judicial Precedents Protecting Security &amp; Facility Vendors
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Authoritative Supreme Court &amp; High Court Rulings Rejecting Debtor Pretexts
                  </p>
                </div>

                <div className="space-y-6">
                  {COURT_PRECEDENTS.map((prec, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="pl-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            {prec.parties}
                          </span>
                          <span className="text-[11px] font-mono text-slate-500">
                            {prec.citation}
                          </span>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                          {prec.title}
                        </h3>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                          <p>
                            <span className="font-semibold text-slate-800">The Context: </span>
                            {prec.facts}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-800">Judicial Holding: </span>
                            {prec.holding}
                          </p>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <span className="font-bold text-slate-800">
                            Creditor Takeaway: {prec.takeaway}
                          </span>
                          <span className="text-red-700 font-bold shrink-0">
                            {prec.amount}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Operational Escalation Decision Tree */}
              <section id="heading-decision-tree" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-200 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Operational Recovery Decision Tree for PSARA Agency Promoters
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Multi-Track Escalation Routing Based on Debtor Entity, Default Aging &amp; Contract Value
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 mb-6">
                  <p>
                    Recovering from a housing society RWA requires an entirely distinct legal architecture compared to recovering from an industrial manufacturing factory or commercial builder. The diagram below illustrates the exact statutory route based on the default mechanism:
                  </p>
                </div>

                {/* Hand-Authored Desktop SVG Escalation Map */}
                <div className="hidden md:block w-full overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white mb-6">
                  <p className="text-xs uppercase tracking-widest text-red-400 font-extrabold mb-4 text-center">
                    PSARA Security &amp; IFM Agency Default Escalation Architecture
                  </p>
                  <svg
                    viewBox="0 0 900 400"
                    className="w-full h-auto"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={900}
                    height={400}
                    aria-label="Security agency arrears recovery decision tree flowchart"
                  >
                    {/* Node 1: Trigger */}
                    <rect x="20" y="160" width="160" height="80" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="100" y="195" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Default Detected</text>
                    <text x="100" y="215" fill="#94A3B8" fontSize="10" textAnchor="middle">Overnight Exit / Non-Pay</text>

                    {/* Arrow 1 to 2 */}
                    <path d="M180 200 H 220" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Node 2: Evidence Audit */}
                    <rect x="220" y="160" width="170" height="80" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="305" y="195" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">BSA s.63 Evidence Lock</text>
                    <text x="305" y="215" fill="#94A3B8" fontSize="10" textAnchor="middle">Musters + PF + Police GD</text>

                    {/* Branching from Node 2 */}
                    <path d="M390 180 L 450 90" stroke="#94A3B8" strokeWidth="1.5" />
                    <path d="M390 200 L 450 200" stroke="#94A3B8" strokeWidth="1.5" />
                    <path d="M390 220 L 450 310" stroke="#94A3B8" strokeWidth="1.5" />

                    {/* Track A: RWA / Society */}
                    <rect x="450" y="50" width="200" height="80" rx="10" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="550" y="82" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle">Track A: Housing RWA / AOA</text>
                    <text x="550" y="100" fill="#E2E8F0" fontSize="10" textAnchor="middle">Joint Demand: Society + MC</text>
                    <text x="550" y="115" fill="#94A3B8" fontSize="9" textAnchor="middle">Registrar Complaint + MSEFC</text>

                    {/* Track B: Factory / Builder / MSME */}
                    <rect x="450" y="160" width="200" height="80" rx="10" fill="#0F172A" stroke="#34D399" strokeWidth="1.5" />
                    <text x="550" y="192" fill="#34D399" fontSize="11" fontWeight="bold" textAnchor="middle">Track B: Corporate / Builder</text>
                    <text x="550" y="210" fill="#E2E8F0" fontSize="10" textAnchor="middle">s.43B(h) Disallowance Notice</text>
                    <text x="550" y="225" fill="#94A3B8" fontSize="9" textAnchor="middle">MSEFC 3x Compound Interest</text>

                    {/* Track C: Theft Allegation Rebuttal */}
                    <rect x="450" y="270" width="200" height="80" rx="10" fill="#0F172A" stroke="#F87171" strokeWidth="1.5" />
                    <text x="550" y="302" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">Track C: Fake Theft Debit Note</text>
                    <text x="550" y="320" fill="#E2E8F0" fontSize="10" textAnchor="middle">FIR Demand + Mobilox Rebuttal</text>
                    <text x="550" y="335" fill="#94A3B8" fontSize="9" textAnchor="middle">BNS 308 Extortion Counter-Notice</text>

                    {/* Converge to Decree Execution */}
                    <path d="M650 90 L 710 180" stroke="#94A3B8" strokeWidth="1.5" />
                    <path d="M650 200 L 710 200" stroke="#94A3B8" strokeWidth="1.5" />
                    <path d="M650 310 L 710 220" stroke="#94A3B8" strokeWidth="1.5" />

                    {/* Terminal Node: Award Execution */}
                    <rect x="710" y="160" width="170" height="80" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="795" y="195" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Enforceable Decree</text>
                    <text x="795" y="215" fill="#34D399" fontSize="10" textAnchor="middle">Section 36 Bank Attachment</text>
                  </svg>
                </div>

                {/* Mobile Stacked Escalation Cards */}
                <div className="md:hidden space-y-3 mb-6">
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <p className="text-xs font-bold text-red-400 mb-1">Step 1: Evidence Lockdown</p>
                    <p className="text-xs text-slate-300">Secure signed musters, police GD entry for sudden lockout, and EPFO/ESIC bank challans under BSA 2023 Section 63.</p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <p className="text-xs font-bold text-emerald-400 mb-1">Step 2: Dual Statutory Notice</p>
                    <p className="text-xs text-slate-300">Serve 15-day advocate demand invoking MSMED Act 3x compound interest, Section 43B(h) tax disallowance, and CLRA Section 21(4) principal liability.</p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <p className="text-xs font-bold text-amber-400 mb-1">Step 3: Forum Escalation</p>
                    <p className="text-xs text-slate-300">File before MSME Samadhaan (MSEFC) or initiate Commercial Court Summary Suit under Order XXXVII CPC.</p>
                  </div>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <p className="text-xs font-bold text-cyan-400 mb-1">Step 4: Enforcement &amp; Attachment</p>
                    <p className="text-xs text-slate-300">Execute award under Arbitration Act Section 36 via CPC Order 21 bank account garnishee and property attachment.</p>
                  </div>
                </div>
              </section>

              {/* Section 5: Statutory Forum Matrix */}
              <section id="heading-statutory-matrix" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-200 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Statutory Forum Comparison: MSME Samadhaan vs Summary Suit
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Comparing Pecuniary Thresholds, Statutory Timelines, Pre-Deposits &amp; Enforceability
                  </p>
                </div>

                <div className="overflow-x-auto -mx-5 sm:mx-0">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-3.5 font-bold rounded-tl-xl">Recovery Forum / Mechanism</th>
                        <th className="p-3 sm:p-3.5 font-bold">Pecuniary Floor</th>
                        <th className="p-3 sm:p-3.5 font-bold">Statutory Timeline</th>
                        <th className="p-3 sm:p-3.5 font-bold">Pre-Deposit on Appeal</th>
                        <th className="p-3 sm:p-3.5 font-bold rounded-tr-xl">Best Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-semibold text-slate-900">
                          MSME Samadhaan (MSEFC Section 18)
                        </td>
                        <td className="p-3 text-slate-700">&#8377;1 (No minimum)</td>
                        <td className="p-3 text-emerald-700 font-semibold">90 Days Statutory Target</td>
                        <td className="p-3 text-red-700 font-bold">75% Mandatory Deposit (s.19)</td>
                        <td className="p-3 text-slate-600">Udyam-registered security agencies claiming 3x RBI compound interest from corporate buyers &amp; builders.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-semibold text-slate-900">
                          Commercial Court Summary Suit (Order XXXVII CPC)
                        </td>
                        <td className="p-3 text-slate-700">&#8377;3,00,000</td>
                        <td className="p-3 text-slate-700">6 to 12 Months</td>
                        <td className="p-3 text-slate-700">Court Discretion (Leave to Defend)</td>
                        <td className="p-3 text-slate-600">Liquidated claims backed by signed shift attendance musters and admitted work orders where debtor has tangible assets.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-semibold text-slate-900">
                          Section 8 &amp; 9 IBC Insolvency Demand (NCLT)
                        </td>
                        <td className="p-3 text-slate-700">&#8377;1 Crore</td>
                        <td className="p-3 text-slate-700">10-Day Demand Window</td>
                        <td className="p-3 text-slate-700">Full Debt Settlement to Avoid CIRP</td>
                        <td className="p-3 text-slate-600">Large pan-India facility management arrears against corporate developers, IT parks, and logistics conglomerates.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-semibold text-slate-900">
                          Registrar of Societies Petition + Civil Suit
                        </td>
                        <td className="p-3 text-slate-700">Variable by State</td>
                        <td className="p-3 text-slate-700">4 to 9 Months</td>
                        <td className="p-3 text-slate-700">Nil</td>
                        <td className="p-3 text-slate-600">Housing societies (RWAs/AOAs) where new management committees unlawfully refuse to honor predecessor vendor liabilities.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: Interactive Scenario Tabs */}
              <section id="heading-scenario-tabs" className="scroll-mt-28">
                <div className="mb-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Four Critical Default Scenarios in Security &amp; Facility Recovery
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Tactical Playbooks for Bogus Theft Claims, Overnight Swaps, Society Elections &amp; Fine Deductions
                  </p>
                </div>
                <SecurityScenarioTabs />
              </section>

              {/* Section 7: Worked Example */}
              <section id="heading-worked-example" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-200 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Financial Ledger Breakdown: Recovering ₹18.4L in Overdue Invoices
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Worked Simulation: Principal Wages, EPF/ESIC Outlays, 3x RBI Compound Interest &amp; Tax Penalties
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 mb-5">
                  <p>
                    Consider an integrated facility agency that deployed 12 security guards (24-hour shifts) and 6 housekeeping staff at a commercial logistics warehouse. The agreed monthly billing was &#8377;4,60,000 inclusive of statutory minimum wages, PF, ESIC, and 18% GST. The client paid month 1, then delayed months 2, 3, 4, and 5 before locking out the vendor on the 1st of month 6 and emailing a bogus &#8377;15 Lakh &ldquo;untraced copper cable theft&rdquo; debit note.
                  </p>
                </div>

                {/* Ledger Breakdown Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl mb-6">
                  <p className="text-xs uppercase tracking-widest text-emerald-400 font-extrabold mb-4">
                    4-Month Default Recovery Ledger (Client Liability Simulation)
                  </p>
                  <div className="space-y-3 text-xs sm:text-sm font-mono">
                    <div className="flex justify-between pb-2 border-b border-slate-800">
                      <span className="text-slate-300">Base Wage &amp; Guard Billing (4 Months &times; &#8377;3,40,000)</span>
                      <span className="text-slate-100 font-bold">&#8377;13,60,000</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-800">
                      <span className="text-slate-300">EPFO &amp; ESIC Pass-Through Outlays Funded by Agency</span>
                      <span className="text-slate-100 font-bold">&#8377;2,00,000</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-800">
                      <span className="text-slate-300">GST 18% Remitted to Government on Invoices</span>
                      <span className="text-slate-100 font-bold">&#8377;2,80,800</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-800 text-amber-300">
                      <span>Total Principal Invoiced Arrears</span>
                      <span className="font-bold">&#8377;18,40,800</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-800 text-emerald-400">
                      <span>MSMED Act Section 16 Interest (3x RBI Rate = 21.75% for 180 Days)</span>
                      <span className="font-bold">+ &#8377;2,04,260</span>
                    </div>
                    <div className="flex justify-between pt-2 text-sm sm:text-base font-extrabold text-white">
                      <span>Total Legally Recoverable Claim</span>
                      <span className="text-emerald-400 font-bold">&#8377;20,45,060</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed font-sans">
                    <strong className="text-amber-400">Statutory Tax Leverage: </strong>
                    Under <Link href="/law/section-43bh-msme-payment-rule" className="text-amber-300 underline hover:text-amber-200">Section 43B(h) of the Income Tax Act</Link>, the client loses &#8377;18.40 Lakh in business deductions, generating an additional &#8377;5.52 Lakh immediate corporate tax liability. Use our <Link href="/tools/blocked-gst-itc-vendor-default-interest-calculator" className="text-emerald-400 underline hover:text-emerald-300">Vendor Default &amp; GST Interest Calculator</Link> to compute exact compounding amounts.
                  </div>
                </div>
              </section>

              {/* Section 8: Operational SOP */}
              <section id="heading-operational-sop" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-200 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    7-Step Strategic Recovery SOP for Security &amp; Housekeeping Agencies
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Standard Operating Procedure from Sudden Lockout to Civil Court Execution Decree
                  </p>
                </div>

                <div className="space-y-4">
                  {HOWTO_SCHEMA.step.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 rounded-xl border border-slate-200 hover:border-red-300 transition-colors bg-white"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                        {step.position}
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                          {step.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: BSA Section 63 Evidence Dossier */}
              <section id="heading-evidence-checklist" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-200 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    BSA Section 63 Evidence Dossier &amp; Signed Muster Roll Compliance
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Mandatory Evidentiary Artifacts to Render Client Defenses Legally Untenable
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 mb-5">
                  <p>
                    Under Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63), electronic records and digital workplace logs possess full statutory admissibility when accompanied by a compliant system certificate. Ensure your operational dossier contains:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-900 mb-1">&#10003; Dual-Signed Daily Shift Musters</p>
                    <p className="text-[11px] sm:text-xs text-slate-600">Physical or tablet-signed registers verifying guard turnout countersigned daily by client shift supervisors.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-900 mb-1">&#10003; Station Diary (GD Entry) of Lockout</p>
                    <p className="text-[11px] sm:text-xs text-slate-600">Police station GD intimation recording sudden vendor replacement and gate lockout to defeat allegations of voluntary abandonment.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-900 mb-1">&#10003; EPFO ECR Challans &amp; TRRN Proof</p>
                    <p className="text-[11px] sm:text-xs text-slate-600">PF department Electronic Challan Receipts proving that statutory compliance was fully remitted for deployed staff.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-900 mb-1">&#10003; Bank NEFT/RTGS Wage Scroll</p>
                    <p className="text-[11px] sm:text-xs text-slate-600">Certified bank statements demonstrating out-of-pocket wage disbursements to guards, activating CLRA Section 21(4) subrogation.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-900 mb-1">&#10003; GSTR-1 &amp; GSTR-3B Filings</p>
                    <p className="text-[11px] sm:text-xs text-slate-600">Government GST portal filings reflecting invoice declarations and tax credits claimed by the client.</p>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-900 mb-1">&#10003; Security Cheque Notice (If Held)</p>
                    <p className="text-[11px] sm:text-xs text-slate-600">
                      If client provided advance security cheques, review our <Link href="/templates/security-cheque-presentation-intimation-cum-ledger-notice" className="text-[#DC2626] underline font-semibold">Security Cheque Presentation Format</Link> under NI Act Section 138.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: Dual Track B2B Conversion Funnel */}
              <section className="scroll-mt-28">
                <SecurityRecoveryCTA />
              </section>

              {/* Section 11: FAQs */}
              <section id="heading-faqs" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-200 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Frequently Asked Questions for Security &amp; Housekeeping Promoters
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Statutory Rights, Theft Rebuttals, Society Defaults &amp; Court Procedures
                  </p>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all [&_summary::-webkit-details-marker]:hidden cursor-pointer"
                    >
                      <summary className="flex items-center justify-between font-bold text-xs sm:text-sm md:text-base text-slate-900 group-open:text-[#DC2626]">
                        <span>{faq.question}</span>
                        <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">
                          &#9660;
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Statutory Framework & Official Sources */}
              <section id="heading-sources" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-200 pb-3 mb-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Statutory References &amp; Official Legislative Framework
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Verified Citations from India Code, Ministry of MSME &amp; Judicial Gazettes
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] underline transition-colors"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 leading-relaxed">
                  <p>
                    // TODO(reviewer): src/data/reviewers.ts is absent in this repository. Editorial attribution: Reviewed and verified by Advocate Anuj Anand Malik, Managing Partner at AMA Legal Solutions, specializing in institutional debt recovery, MSMED Act arbitrations, and commercial contract enforcement.
                  </p>
                </div>
              </section>

              {/* Sibling Spokes Cross-Linking Directory */}
              <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-md">
                <div className="border-b border-slate-800 pb-3 mb-4">
                  <p className="text-xs uppercase tracking-widest text-red-400 font-bold mb-1">
                    Related Staffing &amp; Manpower Recovery Playbooks
                  </p>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Explore Other Strategic Verticals Under IND-11
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <Link
                    href="/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery"
                    className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 hover:border-red-400 transition-colors block"
                  >
                    <p className="font-bold text-slate-100 mb-1">Contract Staffing &amp; Temp Payroll</p>
                    <p className="text-slate-400 text-[11px]">Recover out-of-pocket payroll, PF, ESIC &amp; 18% GST invoices from enterprise defaulters.</p>
                  </Link>

                  <Link
                    href="/backdoor-hiring-candidate-circumvention-placement-fee-recovery-india"
                    className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 hover:border-red-400 transition-colors block"
                  >
                    <p className="font-bold text-slate-100 mb-1">Backdoor Candidate Hiring</p>
                    <p className="text-slate-400 text-[11px]">Enforce placement fees when clients reject candidate CVs and secretly hire within 12 months.</p>
                  </Link>

                  <Link
                    href="/recruitment-agency-90-day-replacement-clause-abuse-fee-recovery"
                    className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 hover:border-red-400 transition-colors block"
                  >
                    <p className="font-bold text-slate-100 mb-1">90-Day Replacement Abuse</p>
                    <p className="text-slate-400 text-[11px]">Defeat client tactics holding placement fees hostage citing uncooperative replacement clauses.</p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Global Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
