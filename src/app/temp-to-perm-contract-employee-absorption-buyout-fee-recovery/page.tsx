import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import TempToPermTableOfContents from "./TempToPermTableOfContents";
import TempToPermScenarioTabs from "./TempToPermScenarioTabs";
import TempToPermCTA from "./TempToPermCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Client Absorbed Temp Staff Without Paying C2H Buyout Fee?",
  description:
    "Client converted your contract associates to direct payroll or another vendor without paying C2H buyout fees? Enforce Contract Act s.73/74 & recover dues.",
  alternates: {
    canonical: `${SITE_URL}/temp-to-perm-contract-employee-absorption-buyout-fee-recovery`,
  },
  openGraph: {
    title: "Client Absorbed Temp Staff Without Paying C2H Buyout Fee?",
    description:
      "Client converted your contract associates to direct payroll or another vendor without paying C2H buyout fees? Enforce Contract Act s.73/74 & recover dues.",
    url: `${SITE_URL}/temp-to-perm-contract-employee-absorption-buyout-fee-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Temp-to-Perm C2H Conversion and Rebadging Fee Recovery Playbook",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Absorbed Temp Staff Without Paying C2H Buyout Fee?",
    description:
      "Client converted your contract associates to direct payroll or another vendor without paying C2H buyout fees? Enforce Contract Act s.73/74 & recover dues.",
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
    title: "The Indian Contract Act, 1872 (Sections 73 & 74 — Compensation for Loss Caused by Breach & Liquidated Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Indian Contract Act, 1872 (Section 70 — Obligation of Person Enjoying Benefit of Non-Gratuitous Act)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Indian Contract Act, 1872 (Section 27 — Agreement in Restraint of Trade Void vs Inter-Corporate Non-Solicitation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(i) & Section 12A — Pre-Institution Mediation & Settlement)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
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
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records: EPFO UAN Logs, Email Trails & Timesheets)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Contract Labour (Regulation and Abolition) Act, 1970 (Section 21(4) — Principal Employer Responsibility for Wages)",
    url: "https://www.indiacode.nic.in/handle/123456789/1517",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Delhi High Court on Section 27: Inter-Corporate Non-Solicitation & Buyout Covenants Are Valid and Binding",
    parties: "Wipro Ltd. v. Beckman Coulter International S.A.",
    citation: "2006 (3) ARBLR 118 Del, High Court of Delhi",
    date: "Judgment Dated 20 July 2006",
    facts:
      "A commercial contract contained a non-solicitation clause barring the client from employing or engaging the vendor's personnel directly. The defendant argued that the clause was void under Section 27 of the Indian Contract Act, 1872 as an unlawful restraint of trade.",
    holding:
      "The High Court held that Section 27 invalidates restraints on an individual employee's right to pursue a profession, but does NOT invalidate a commercial covenant between two corporate entities regulating non-solicitation or mandating commercial fee compensation upon hiring. A contract between two independent businesses agreeing to pay conversion compensation or liquidated damages for taking over deployed personnel is a standard commercial protection and does not restrain the employee's fundamental liberty.",
    amount: "Doctrine of Inter-Corporate Commercial Covenants — Section 27 Defense Defeated",
    takeaway:
      "Enterprise clients cannot dodge C2H buyout fees by hiding behind Section 27. The restriction operates against the client corporate entity as an agreed commercial debt, not against the individual worker.",
  },
  {
    title: "Supreme Court on Liquidated Damages & Genuine Pre-Estimate of Loss under Section 74",
    parties: "Oil & Natural Gas Corporation Ltd. v. Saw Pipes Ltd.",
    citation: "(2003) 5 SCC 705, Supreme Court of India",
    date: "Judgment Dated 17 April 2003",
    facts:
      "The respondent challenged the deduction of liquidated damages specified in a commercial agreement, claiming the claimant had not proved actual, penny-for-penny financial loss resulting from the breach.",
    holding:
      "The Supreme Court ruled that where parties have stipulated in their contract a genuine pre-estimate of damages resulting from a specific commercial breach, the court is fully competent to award the stipulated amount without requiring minute, line-by-line proof of actual damages, provided it is not an unconscionable penalty. In staffing contracts, tiered buyout matrix percentages (e.g., 15%–25% CTC) represent the agreed commercial compensation for recruitment, technical screening, background verification, and business disruption.",
    amount: "Contractual Buyout Matrix Slabs Upheld as Valid Liquidated Compensation",
    takeaway:
      "When a contract defines explicit C2H buyout percentages based on tenure of deployment, staffing agencies can recover the full contractual fee under Section 74 without having to prove separate administrative sourcing expenses.",
  },
  {
    title: "Supreme Court on Quantum Meruit: Non-Gratuitous Value Cannot Be Retained Without Compensation",
    parties: "State of West Bengal v. B.K. Mondal & Sons",
    citation: "AIR 1962 SC 779, Supreme Court of India",
    date: "Judgment Dated 15 December 1961",
    facts:
      "The plaintiff executed extensive civil construction works for the state government without a formal, executed contract under Article 299 of the Constitution. The state government accepted and utilized the completed structures but refused payment citing the absence of a signed agreement.",
    holding:
      "The 5-Judge Constitution Bench ruled that under Section 70 of the Indian Contract Act, 1872, where a person lawfully does anything for another person, not intending to do so gratuitously, and such other person enjoys the benefit thereof, the recipient is legally bound to make compensation in respect of, or to restore, the thing so done or delivered. Even if an enterprise client's formal MSA expired or was unsigned, the client cannot retain the productive deployment and permanent onboarding of trained personnel without paying quantum meruit placement fees.",
    amount: "Section 70 Mandatory Compensation Doctrine — Client Cannot Claim Free Workforce Absorption",
    takeaway:
      "Even if a client argues that a purchase order or master agreement lacked an explicit conversion rate, they must pay fair market placement fees (8.33%–16% CTC) for retaining the deployed workforce.",
  },
  {
    title: "Supreme Court on Mandatory Commercial Pre-Institution Mediation & Urgent Relief",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Judgment Dated 17 August 2022",
    facts:
      "A commercial plaintiff filed a recovery suit without first exhausting pre-institution mediation under Section 12A of the Commercial Courts Act, 2015, where no urgent interim relief was prayed for.",
    holding:
      "The Supreme Court declared Section 12A mandatory for all commercial suits that do not contemplate urgent interim relief. However, where a defaulting client attempts to dissipate assets, transfer contracts to a rival vendor, or withhold pass-through funds to coerce waivers, staffing creditors can seek urgent interim protection (e.g., Order 38 Rule 5 attachment or Section 9 interim measures) to bypass Section 12A and secure fast-track judicial intervention.",
    amount: "Commercial Dispute Gateway Established — 3-Month Fast-Track Resolution Rail",
    takeaway:
      "Staffing agencies can invoke Section 12A for swift 90-day settlement or apply for urgent commercial injunctions if a client attempts hostile workforce rebadging.",
  },
];

const FAQS = [
  {
    question: "Can our client legally absorb contract employees onto their direct payroll without paying our C2H conversion fee?",
    answer:
      "No. If your Master Services Agreement (MSA), Statement of Work (SOW), or Terms of Business (ToB) contains a Contract-to-Hire (C2H) buyout clause, conversion matrix, or non-solicitation covenant, the client is contractually bound under Sections 73 and 74 of the Indian Contract Act, 1872. Absorbing deployed personnel onto direct internal payroll without notifying the vendor and settling the agreed buyout fee constitutes an actionable breach of contract. Staffing vendors can enforce payment through an advocate statutory demand notice, pre-institution commercial mediation, or a Commercial Court summary suit under Order 37 CPC.",
  },
  {
    question: "Does Section 27 of the Indian Contract Act void our contract non-solicitation and buyout clauses?",
    answer:
      "No. Corporate legal departments often cite Section 27 (agreements in restraint of trade are void) to scare staffing agencies. However, the Delhi High Court in Wipro Ltd. v. Beckman Coulter International S.A. conclusively established that Section 27 invalidates restraints placed on individual employees restricting their right to work, but does NOT invalidate commercial covenants between two corporate business entities. A buyout clause does not bar the employee from working; it simply requires the hiring corporation to pay an agreed commercial placement fee to the staffing agency that sourced, trained, and deployed that worker.",
  },
  {
    question: "What if the client forces deployed workers to 'rebadge' to another staffing vendor with lower markup?",
    answer:
      "Hostile workforce 'rebadging'—where an enterprise shifts 20 to 200 deployed associates to a competitor offering a 1% lower markup—constitutes both contractual breach and tortious interference with business relations. Staffing agencies have a two-fold remedy: first, quantify the collective buyout fee under the contract's non-solicitation liquidated damages clause; second, immediately freeze all ongoing handovers and serve a statutory demand notice for all pending pass-through payroll invoices under CLRA Section 21(4) and the MSMED Act.",
  },
  {
    question: "Can the client hold back our past 60 to 90 days of payroll invoices while negotiating the buyout dispute?",
    answer:
      "Absolutely not. Past payroll invoices represent pass-through wages, employee provident fund (EPF), employee state insurance (ESIC), and 18% GST already disbursed by the staffing firm out-of-pocket. Under Section 21(4) of the Contract Labour (R&A) Act, 1970, the principal employer is statutorily liable for worker wages. Furthermore, under Section 16 of the MSMED Act, withholding MSME payments beyond 45 days attracts mandatory compound interest at 3 times the RBI Bank Rate, and triggers income tax expense disallowance under Section 43B(h). Buyout fee disputes cannot be used to hold statutory pass-through funds hostage.",
  },
  {
    question: "How do we legally prove that a contract associate was onboarded by the client when they keep it secret?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records are admissible with an electronic evidence certificate. Staffing firms prove covert absorption through three ironclad electronic audit rails: (1) EPFO Universal Account Number (UAN) transfer records showing the client's PF establishment code and employment joining date; (2) Client corporate email addresses (`@clientdomain.com`) and Active Directory / Slack user logs; and (3) Public LinkedIn work history updates, internal client organization charts, and gate pass / biometric identity cards.",
  },
  {
    question: "What if the original MSA expired and the client claims there is no signed agreement governing the absorption?",
    answer:
      "Under Section 8 of the Indian Contract Act, 1872 and Section 10A of the Information Technology Act, 2000, contracts are renewed and sustained through conduct. If the client continued accepting candidate timesheets, paying monthly invoices, and utilizing deployed personnel after the formal MSA expiry date, the substantive terms (including C2H conversion matrices) remain legally active. Even if a court treats the contract as non-formalized, Section 70 (Quantum Meruit) as affirmed in State of West Bengal v. B.K. Mondal mandates that the client must pay fair commercial recruitment compensation (standard market rate of 8.33% to 16.66% CTC) for retaining the deployed workforce.",
  },
  {
    question: "How does Section 43B(h) and the MSMED Act help recover unpaid buyout fees and invoices?",
    answer:
      "If your staffing agency is registered under the MSMED Act (Udyam Registration), all commercial invoices must be settled within the statutory limit of 45 days. Any delay attracts mandatory compound interest at 3 times the RBI Bank Rate with monthly rests under Section 16. Additionally, under Section 43B(h) of the Income Tax Act, 1961, any invoice from an MSME vendor left unpaid past March 31 cannot be deducted as an expense, increasing the client's corporate tax bill by 25%–30% plus penal interest, creating massive commercial leverage for immediate settlement.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Temp-to-Perm Conversion & 'Rebadging' Fee Recovery: When a Client Moves Your Contract Workforce to Internal Payroll or a Cheaper Vendor",
  description:
    "Client converted your contract associates to direct payroll or another vendor without paying C2H buyout fees? Enforce Contract Act s.73/74 & recover dues.",
  datePublished: "2026-11-17T10:00:00+05:30",
  dateModified: "2026-11-17T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/temp-to-perm-contract-employee-absorption-buyout-fee-recovery`,
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
    name: "Temp-to-Perm Conversion & Rebadging Fee Recovery",
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
      name: "Business Dues Recovery",
      item: `${SITE_URL}/recovery/business-dues`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Staffing & Manpower Hub",
      item: `${SITE_URL}/industries/staffing-recruitment-manpower-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "C2H Buyout & Rebadging Fee Recovery",
      item: `${SITE_URL}/temp-to-perm-contract-employee-absorption-buyout-fee-recovery`,
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

export default function TempToPermBuyoutRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const breadcrumbItems = [
    { label: "Business Dues", href: "/recovery/business-dues" },
    {
      label: "Staffing & Recruitment Hub",
      href: "/industries/staffing-recruitment-manpower-recovery",
    },
    {
      label: "C2H Buyout & Rebadging Recovery",
      href: "/temp-to-perm-contract-employee-absorption-buyout-fee-recovery",
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section matching Master Plan exactly */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Contract Act s.73/74</span>
              <span className="text-red-500">&bull;</span>
              <span>Commercial Courts Act</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-11 Staffing &amp; Recruitment</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Temp-to-Perm Conversion &amp; &apos;Rebadging&apos; Fee Recovery: When a Client Moves Your Contract Workforce to Internal Payroll or a Cheaper Vendor
            </h1>

            {/* Executive Statutory Summary Box (40–60 words) with inline parent Hub link in first 250 words */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; C2H Statutory Recovery SOP
              </span>
              <p>
                When an enterprise client absorbs deployed contract associates onto internal rolls or executes a forced workforce rebadging to a cheaper vendor without settling agreed conversion fees, the staffing agency possesses an immediate, enforceable claim under Sections 73, 74, and 70 of the Indian Contract Act, 1872. As outlined in our institutional{" "}
                <Link
                  href="/industries/staffing-recruitment-manpower-recovery"
                  className="text-red-400 font-bold underline hover:text-red-300 transition-colors"
                >
                  Staffing &amp; Recruitment Recovery Hub
                </Link>
                , Delhi High Court precedents confirm that inter-corporate buyout clauses do not violate Section 27, enabling full recovery of 15%–25% CTC conversion fees alongside statutory 3x RBI compound interest on held-back pass-through payroll invoices.
              </p>
            </div>

            {/* 4-Card Hero Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15%–25%</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Contractual C2H Buyout Slab</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Section 73/74</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Liquidated Damages Pre-Estimate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">EPFO UAN</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Conclusive Electronic Joining Proof</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Zero s.27 Bar</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Inter-Corporate Covenant Upheld</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs Navigation */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar Table of Contents */}
            <TempToPermTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Commercial Reality of C2H Evasion & Rebadging */}
              <section
                id="heading-overview"
                aria-labelledby="heading-overview-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-overview-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    The Commercial Anatomy of C2H Buyout Evasion and Mass Workforce Rebadging
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    How enterprise clients destroy contract staffing margins by poaching trained talent and holding final invoices hostage
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Contract-to-Hire (C2H) staffing, IT staff augmentation, and engineering deputation models are built on a delicate financial balance. Staffing vendors invest heavily upfront—spending ₹40,000 to ₹1,50,000 per associate on multi-stage technical screening, client interview scheduling, background verification (BGV), statutory compliance onboarding, and hardware provisioning. This capital outlay is amortized over a narrow service markup (typically 8% to 15%) across an anticipated 12 to 24-month billing lifecycle.
                  </p>
                  <p>
                    When an enterprise client unilaterally absorbs high-performing associates onto its internal rolls at month 4, or orchestrates a mass &quot;rebadging&quot; of 50 to 200 contractors to a rival vendor at a 1% lower markup, the staffing vendor faces immediate margin destruction. The vendor absorbs the full acquisition cost, while the client retains the fully onboarded, productive talent without compensating the agency.
                  </p>
                  <p>
                    Even worse, corporate procurement desks routinely employ a coercive playbook: they withhold the outgoing staffing agency&apos;s last 60 to 90 days of pass-through payroll invoices under the guise of &quot;pending exit audits,&quot; &quot;asset handovers,&quot; or &quot;transition formalities.&quot; This leaves the staffing vendor trapped with massive cash holes for salaries, EPF, and ESIC already disbursed out-of-pocket. Enforcing your contractual rights through structured legal notices and commercial court remedies is the only viable path to full financial recovery.
                  </p>
                </div>

                {/* Sourcing vs Break-Even Metric Callouts */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Upfront Sourcing Cost
                    </span>
                    <strong className="text-base text-slate-900 block font-bold">₹40K–₹1.5 Lakh</strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Technical screening, BGV, drug tests &amp; onboarding overheads per deputed contractor.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Break-Even Horizon
                    </span>
                    <strong className="text-base text-slate-900 block font-bold">9 to 12 Months</strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Time required at standard 10%–12% billing markup to recover sourcing and compliance outlays.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Typical Buyout Matrix Slabs
                    </span>
                    <strong className="text-base text-slate-900 block font-bold">15%–25% CTC</strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Standard liquidated damages tier if converted in 0–6 months; 10%–15% if 6–12 months.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs sm:text-sm text-slate-600">
                    Related reading: Explore our dedicated guide on{" "}
                    <Link
                      href="/backdoor-hiring-candidate-circumvention-placement-fee-recovery-india"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      Backdoor Hiring &amp; Candidate Circumvention Placement Fee Recovery
                    </Link>{" "}
                    and review our playbook on{" "}
                    <Link
                      href="/contract-staffing-temp-payroll-pf-esic-invoice-default-recovery"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      Contract Staffing Payroll, PF &amp; ESIC Invoice Default Recovery
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 2: Statutory Framework & The Section 27 Myth */}
              <section
                id="heading-statutory-basis"
                aria-labelledby="heading-statutory-basis-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-basis-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Statutory Framework: Debunking the Section 27 Restraint Myth under Indian Law
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Why corporate legal counsel cannot hide behind employee freedom of trade to evade commercial C2H conversion fees
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    The most common defense raised by corporate in-house legal teams when presented with a C2H conversion invoice is: <em>&quot;Under Section 27 of the Indian Contract Act, 1872, all agreements in restraint of trade, profession, or business are void. The employee has a constitutional right to work anywhere; therefore, your buyout clause is legally unenforceable.&quot;</em>
                  </p>
                  <p>
                    <strong>This legal argument is fundamentally flawed and repeatedly rejected by Indian High Courts.</strong> Section 27 of the Contract Act is designed to protect individual workmen and employees from being restrained from earning a livelihood. It does <em>not</em> prohibit two commercial corporate entities from agreeing upon terms that govern commercial recruitment compensation, non-solicitation, and conversion liquidated damages.
                  </p>
                  <p>
                    In the landmark ruling of <em>Wipro Ltd. v. Beckman Coulter International S.A.</em>, the Delhi High Court explicitly drew this distinction: a non-solicitation covenant between two contracting companies does not restrain the employee from working—the employee remains entirely free to accept the job. However, the hiring corporate client is contractually bound to pay the agreed commercial compensation to the vendor for sourcing and supplying that employee. The clause operates as a valid commercial debt between companies, not a restriction on individual liberty.
                  </p>
                </div>

                {/* Statutory Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-red-600 block mb-1">
                      Indian Contract Act &bull; Sections 73 &amp; 74
                    </span>
                    <strong className="text-sm sm:text-base font-bold text-slate-900 block mb-1">
                      Enforceability of Pre-Estimated Buyout Slabs
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Where the contract sets out tiered conversion percentages (e.g. 20% CTC for conversion under 6 months), Section 74 treats this as a valid liquidated pre-estimate of recruitment and operational loss. Under the Supreme Court&apos;s <em>Saw Pipes</em> doctrine, courts enforce contractual liquidated damages without requiring minute accounting of recruitment expenses.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-red-600 block mb-1">
                      Indian Contract Act &bull; Section 70
                    </span>
                    <strong className="text-sm sm:text-base font-bold text-slate-900 block mb-1">
                      Quantum Meruit for Unsigned or Expired SOWs
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Even if the client claims the written MSA or SOW expired before the conversion occurred, Section 70 prevents unjust enrichment. Under <em>State of West Bengal v. B.K. Mondal</em>, any entity that accepts and enjoys the benefit of a non-gratuitous service is legally bound to pay fair market value (benchmarked at standard 8.33% to 15% placement fees).
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-red-600 block mb-1">
                      Commercial Courts Act 2015 &bull; Section 2(1)(c)
                    </span>
                    <strong className="text-sm sm:text-base font-bold text-slate-900 block mb-1">
                      Fast-Track Commercial Suit &amp; Summary Relief
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Contracts for the deputation and supply of manpower constitute commercial disputes under Section 2(1)(c)(i) and (xviii). Creditors can invoke mandatory Section 12A pre-institution mediation for a 90-day resolution or file for immediate interim attachment under Order 38 Rule 5 CPC if the client is transferring vendor contracts to competitors.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-red-600 block mb-1">
                      MSMED Act s.16 &amp; Section 43B(h)
                    </span>
                    <strong className="text-sm sm:text-base font-bold text-slate-900 block mb-1">
                      3x Compound Interest &amp; Tax Disallowance
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      For Udyam-registered staffing agencies, outstanding invoices and undisputed buyout dues carry mandatory compound interest at 3 times the RBI Bank Rate under Section 16. Furthermore, invoices unpaid beyond 45 days face corporate income tax deduction disallowance under{" "}
                      <Link
                        href="/law/section-43bh-msme-payment-rule"
                        className="text-[#DC2626] font-semibold underline hover:text-red-700"
                      >
                        Section 43B(h)
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Landmark Judicial Precedents */}
              <section
                id="heading-precedents"
                aria-labelledby="heading-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Judicial Precedents Supporting Creditor Staffing Firms
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Supreme Court and High Court rulings upholding commercial non-solicitation covenants, liquidated damages, and quantum meruit
                  </p>
                </div>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((p, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-[#DC2626] bg-slate-50/80 rounded-r-xl p-4 sm:p-5 space-y-2 border border-slate-200/80 shadow-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-xs font-extrabold uppercase tracking-wide text-[#DC2626]">
                          {p.title}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500">
                          {p.date}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {p.parties} &mdash; <span className="text-slate-600 font-semibold">{p.citation}</span>
                      </h3>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        <strong className="text-slate-900">Facts &amp; Dispute: </strong>
                        {p.facts}
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        <strong className="text-slate-900">Judicial Holding: </strong>
                        {p.holding}
                      </p>
                      <div className="pt-2 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                          {p.amount}
                        </span>
                        <span className="font-medium text-slate-600">
                          <strong>Operational Takeaway: </strong>
                          {p.takeaway}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: 5-Stage Recovery Decision Tree */}
              <section
                id="heading-decision-tree"
                aria-labelledby="heading-decision-tree-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-decision-tree-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    5-Stage Operational Decision Tree for C2H Buyout &amp; Rebadging Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Systematic escalation pathway from electronic UAN discovery to Commercial Court summary attachment
                  </p>
                </div>

                {/* SVG Visual Flowchart for Desktop */}
                <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-2xl border border-slate-800 text-white shadow-inner">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-400 block mb-4 text-center">
                    C2H Buyout Evasion &amp; Rebadging Legal Recovery Architecture
                  </span>
                  <svg
                    viewBox="0 0 900 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto max-w-4xl mx-auto"
                    width={900}
                    height={240}
                    aria-label="C2H Buyout & Rebadging Escalation Flowchart"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="30" width="150" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="85" y="60" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1</text>
                    <text x="85" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Electronic Audit</text>
                    <text x="85" y="100" textAnchor="middle" fill="#94A3B8" fontSize="10">EPFO UAN / BSA s.63</text>

                    {/* Arrow 1-2 */}
                    <path d="M160 75 L190 75" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="190" y="30" width="150" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="265" y="60" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="bold">STAGE 2</text>
                    <text x="265" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Invoice Ring-Fence</text>
                    <text x="265" y="100" textAnchor="middle" fill="#94A3B8" fontSize="10">De-link Past Payroll</text>

                    {/* Arrow 2-3 */}
                    <path d="M340 75 L370 75" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="370" y="30" width="150" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <text x="445" y="60" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 3</text>
                    <text x="445" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">C2H Buyout Debit</text>
                    <text x="445" y="100" textAnchor="middle" fill="#94A3B8" fontSize="10">Apply SOW Slabs</text>

                    {/* Arrow 3-4 */}
                    <path d="M520 75 L550 75" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="550" y="30" width="150" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="625" y="60" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 4</text>
                    <text x="625" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Advocate Notice</text>
                    <text x="625" y="100" textAnchor="middle" fill="#94A3B8" fontSize="10">Tri-Channel 15-Day</text>

                    {/* Arrow 4-5 */}
                    <path d="M700 75 L730 75" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="730" y="30" width="155" height="90" rx="10" fill="#1E293B" stroke="#34D399" strokeWidth="2" />
                    <text x="807" y="60" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 5</text>
                    <text x="807" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Court / MSEFC</text>
                    <text x="807" y="100" textAnchor="middle" fill="#94A3B8" fontSize="10">Commercial Suit / 3x Int</text>

                    {/* Arrow marker definition */}
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                      </marker>
                    </defs>

                    {/* Subtitle / Note */}
                    <rect x="180" y="160" width="540" height="45" rx="8" fill="#0F172A" stroke="#334155" />
                    <text x="450" y="188" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                      Statutory Enforcement via Contract Act s.73/74 + MSMED Act s.18 + Commercial Courts Act s.12A
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Step Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  <div className="p-4 bg-slate-50 border-l-4 border-red-500 rounded-r-xl">
                    <span className="text-[10px] font-bold uppercase text-red-600">Stage 1</span>
                    <h3 className="text-sm font-bold text-slate-900">Electronic Audit &amp; UAN Extraction</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Download EPFO UAN transfer records, employee email headers, and biometric exit stamps under Section 63 BSA 2023.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border-l-4 border-slate-500 rounded-r-xl">
                    <span className="text-[10px] font-bold uppercase text-slate-600">Stage 2</span>
                    <h3 className="text-sm font-bold text-slate-900">Pass-Through Payroll Ring-Fencing</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Formally separate undisputed historical payroll/PF invoices from the buyout dispute, invoking Section 43B(h).
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r-xl">
                    <span className="text-[10px] font-bold uppercase text-amber-600">Stage 3</span>
                    <h3 className="text-sm font-bold text-slate-900">C2H Conversion Slabs Crystallization</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Apply contractual tenure slabs (15%–25% CTC) to calculate the liquidated damages owed per absorbed associate.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border-l-4 border-red-500 rounded-r-xl">
                    <span className="text-[10px] font-bold uppercase text-red-600">Stage 4</span>
                    <h3 className="text-sm font-bold text-slate-900">Advocate Tri-Channel Legal Demand Notice</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Issue formal 15-day statutory demand via Speed Post RPAD, email, and WhatsApp citing Contract Act Sections 73/74.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border-l-4 border-emerald-500 rounded-r-xl">
                    <span className="text-[10px] font-bold uppercase text-emerald-600">Stage 5</span>
                    <h3 className="text-sm font-bold text-slate-900">Commercial Court Summary Suit / MSME Samadhaan</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Initiate Order 37 CPC summary recovery or file before the MSEFC Council for mandatory 3x compound interest.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Dark-Header Statutory Recovery Matrix Table */}
              <section
                id="heading-statutory-matrix"
                aria-labelledby="heading-statutory-matrix-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Statutory Recovery Matrix: Forums &amp; Legal Remedies Compared
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Objective evaluation of legal avenues available to staffing creditors for C2H buyout and rebadging dues
                  </p>
                </div>

                <div className="w-full overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Legal Forum / Remedy</th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Statutory Basis</th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Pecuniary Threshold</th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Statutory Timelines</th>
                        <th className="p-3 sm:p-4 font-bold">Interim Asset Freeze</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-100">
                          Commercial Court Summary Suit
                        </td>
                        <td className="p-3 sm:p-4 border-r border-slate-100">
                          Order XXXVII CPC read with Commercial Courts Act 2015 s.2(1)(c)
                        </td>
                        <td className="p-3 sm:p-4 border-r border-slate-100">
                          ₹3 Lakh+ (Specified Value)
                        </td>
                        <td className="p-3 sm:p-4 border-r border-slate-100">
                          6 to 12 Months
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          Yes (Order 38 Rule 5 CPC)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-100">
                          MSME Samadhaan (MSEFC)
                        </td>
                        <td className="p-3 sm:p-4 border-r border-slate-100">
                          MSMED Act 2006 Sections 15–18 (Mandatory 3x Bank Rate Interest)
                        </td>
                        <td className="p-3 sm:p-4 border-r border-slate-100">
                          Zero minimum (Any Udyam Registered Micro/Small Unit)
                        </td>
                        <td className="p-3 sm:p-4 border-r border-slate-100">
                          90 Days statutory target
                        </td>
                        <td className="p-3 sm:p-4 text-amber-700 font-bold">
                          No (Award enforceable via Civil Court)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-100">
                          Commercial Arbitration
                        </td>
                        <td className="p-3 sm:p-4 border-r border-slate-100">
                          Arbitration &amp; Conciliation Act 1996 s.11 &amp; s.29B fast-track
                        </td>
                        <td className="p-3 sm:p-4 border-r border-slate-100">
                          As specified in MSA arbitration agreement
                        </td>
                        <td className="p-3 sm:p-4 border-r border-slate-100">
                          6 Months (Section 29B)
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          Yes (Section 9 interim measures)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-100">
                          IBC Insolvency Trigger (Operational Debt)
                        </td>
                        <td className="p-3 sm:p-4 border-r border-slate-100">
                          Insolvency &amp; Bankruptcy Code 2016 Sections 8 &amp; 9
                        </td>
                        <td className="p-3 sm:p-4 border-r border-slate-100">
                          ₹1 Crore minimum default (Pass-through wages + buyouts)
                        </td>
                        <td className="p-3 sm:p-4 border-r border-slate-100">
                          10-Day Statutory Demand Notice
                        </td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          Corporate Insolvency Risk
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: Interactive 4-Scenario Explorer */}
              <section
                id="heading-scenario-tabs"
                aria-labelledby="heading-scenario-tabs-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    4 Commercial Default Scenarios &amp; Tailored Recovery Rails
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Explore actionable playbooks for covert absorption, hostile workforce rebadging, disguised contractors, and expired MSAs
                  </p>
                </div>

                <TempToPermScenarioTabs />
              </section>

              {/* Section 7: Worked Financial & Interest Calculation Box */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Worked Financial Recovery Ledger: 15-Associate Absorption &amp; Rebadging Default
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Detailed mathematical illustration of contractual buyout fee computation, held-back payroll arrears, and MSMED statutory interest
                  </p>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                        Institutional Recovery Simulation
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        Mid-Market IT Staffing Vendor vs Enterprise BFSI Client
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-red-950/80 border border-red-800 text-red-400 rounded-full text-xs font-bold self-start sm:self-auto">
                      Total Claim: ₹48,64,800
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-2">
                      <strong className="text-slate-200 block text-xs uppercase tracking-wider font-extrabold text-emerald-400">
                        Dispute Parameters &amp; Headcount
                      </strong>
                      <div className="flex justify-between border-b border-slate-700/60 pb-1">
                        <span className="text-slate-400">Deputed Associates Absorbed:</span>
                        <span className="text-white font-bold">15 Senior Engineers</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/60 pb-1">
                        <span className="text-slate-400">Average Annual CTC:</span>
                        <span className="text-white font-bold">₹12,00,000 per associate</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/60 pb-1">
                        <span className="text-slate-400">Deployment Duration:</span>
                        <span className="text-white font-bold">5 Months (Tier 1: 0–6 Mos)</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/60 pb-1">
                        <span className="text-slate-400">Contractual Buyout Matrix Slab:</span>
                        <span className="text-white font-bold">15% of Annual CTC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Unpaid Pass-Through Invoices:</span>
                        <span className="text-white font-bold">60 Days (₹18,00,000 + GST)</span>
                      </div>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-2">
                      <strong className="text-slate-200 block text-xs uppercase tracking-wider font-extrabold text-amber-400">
                        Statutory Interest &amp; Tax Exposure
                      </strong>
                      <div className="flex justify-between border-b border-slate-700/60 pb-1">
                        <span className="text-slate-400">MSMED Act Section 16 Interest:</span>
                        <span className="text-emerald-400 font-bold">3x RBI Bank Rate (20.25% p.a.)</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/60 pb-1">
                        <span className="text-slate-400">Compounding Frequency:</span>
                        <span className="text-white font-bold">Monthly Rests</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-700/60 pb-1">
                        <span className="text-slate-400">Section 43B(h) Corporate Tax Penalty:</span>
                        <span className="text-red-400 font-bold">₹10,56,000 (30% disallowance)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Dispute Aging:</span>
                        <span className="text-white font-bold">120 Days Delinquent</span>
                      </div>
                    </div>
                  </div>

                  {/* Itemized Recovery Breakdown Table */}
                  <div className="border border-slate-700 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-800 text-slate-300 font-bold">
                        <tr>
                          <th className="p-3">Claim Head</th>
                          <th className="p-3">Computation Formula</th>
                          <th className="p-3 text-right">Recoverable Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-300">
                        <tr>
                          <td className="p-3 font-medium">Contractual C2H Conversion Buyout Fee</td>
                          <td className="p-3">15 associates &times; ₹12,00,000 CTC &times; 15%</td>
                          <td className="p-3 text-right font-bold text-white">₹27,00,000</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">18% GST on C2H Conversion Services</td>
                          <td className="p-3">18% &times; ₹27,00,000</td>
                          <td className="p-3 text-right font-bold text-white">₹4,86,000</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Held-Back Pass-Through Payroll Invoices (2 Mos)</td>
                          <td className="p-3">Pure salaries, EPF, ESIC, and 18% GST</td>
                          <td className="p-3 text-right font-bold text-white">₹21,24,000</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">MSMED Act Statutory Compound Interest (120 Days)</td>
                          <td className="p-3">20.25% p.a. compounded monthly on overdue sums</td>
                          <td className="p-3 text-right font-bold text-emerald-400">₹3,54,800</td>
                        </tr>
                        <tr className="bg-slate-800/90 text-white font-bold text-sm">
                          <td className="p-3" colSpan={2}>
                            Total Crystallized Recovery Claim
                          </td>
                          <td className="p-3 text-right text-emerald-400 font-black">
                            ₹56,64,800
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[11px] text-slate-400 italic">
                    Note: To test exact interest computations under the MSMED Act for your agency&apos;s pending invoices, utilize our interactive{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-emerald-400 underline hover:text-emerald-300"
                    >
                      MSME Delayed Payment Interest Calculator
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 8: 7-Step Legal Recovery SOP */}
              <section
                id="heading-operational-sop"
                aria-labelledby="heading-operational-sop-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-operational-sop-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    7-Step Operational Recovery Playbook for Staffing Creditors
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Practitioner SOP to dismantle corporate delay tactics, isolate pass-through wages, and enforce C2H buyout dues
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      1
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Execute Electronic UAN Audit &amp; Forensic Timestamping
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Before alerting the client, pull EPFO Unified Portal Member ID records. Extract the exact date of exit from your establishment and the subsequent date of joining under the client&apos;s PF code. Capture LinkedIn profile updates, Slack/Teams screenshots, and corporate email headers under Section 63 BSA 2023.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      2
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Formally De-Link Pass-Through Payroll Invoices from Exit Handover
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Reject client assertions that historical payroll invoices cannot be cleared until the buyout dispute is resolved. Issue a formal communication stating that pass-through salaries, EPF, and ESIC represent statutory outlays under CLRA Section 21(4) and must be remitted immediately under Section 43B(h).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      3
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Issue Formal C2H Buyout Invoices with GST Compliance
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Generate tax invoices explicitly detailing each absorbed associate&apos;s name, designation, deployment start date, absorption date, annual CTC, and contractual buyout percentage. Ensure GSTR-1 filing reflects the supply of recruitment services under SAC 998512.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      4
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Serve Advocate-Vetted Tri-Channel Statutory Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Dispatch a 15-day statutory demand notice drafted by legal recovery counsel. Deliver simultaneously via Speed Post RPAD with tracking receipt, registered corporate email to Directors and CFO, and verified WhatsApp with read receipts. Format based on our{" "}
                        <Link
                          href="/templates/recruitment-backdoor-hiring-and-staffing-invoice-legal-notice"
                          className="text-[#DC2626] font-semibold underline hover:text-red-700"
                        >
                          Recruitment &amp; Staffing Invoice Legal Notice Template
                        </Link>
                        .
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      5
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Notify Board of Directors Regarding Section 43B(h) Disallowance
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If your staffing firm has Udyam registration, inform the client&apos;s statutory auditors and CFO that non-payment beyond 45 days triggers permanent expense disallowance for the financial year, adding 25%–30% corporate income tax exposure plus Section 234 penal interest.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      6
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Initiate Section 12A Pre-Institution Commercial Mediation
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Under the Commercial Courts Act, 2015, file for pre-institution mediation before the District Legal Services Authority (DLSA). The statutory 3-month window provides a confidential, court-annexed forum where enterprise clients routinely settle to avoid public litigation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      7
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        File Order XXXVII CPC Summary Suit or MSME Samadhaan Petition
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If mediation fails to yield full recovery, file a Summary Suit under Order 37 CPC based on written contractual admissions and timesheets, or initiate proceedings before the Micro and Small Enterprise Facilitation Council (MSEFC) to obtain a binding award with 3x compound interest.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: BSA 2023 Section 63 Electronic Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    BSA 2023 Section 63 Electronic Evidence Audit Checklist
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Mandatory documentary and electronic exhibits required to build an airtight C2H conversion and rebadging claim
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block">
                      Contractual &amp; Deployment Documents
                    </span>
                    <ul className="text-xs text-slate-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&#10003;</span>
                        <span>Executed Master Services Agreement (MSA) or Statement of Work (SOW) containing C2H buyout slabs and non-solicitation clauses.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&#10003;</span>
                        <span>Deputation letters and client onboarding email confirmations specifying associate names and roles.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&#10003;</span>
                        <span>Approved monthly timesheets, biometric punch logs, and milestone sign-offs.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block">
                      Electronic Proof of Absorption &amp; Rebadging
                    </span>
                    <ul className="text-xs text-slate-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&#10003;</span>
                        <span>EPFO Unified Portal Member ID transfer records showing client&apos;s PF establishment code.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&#10003;</span>
                        <span>Corporate email directory screenshot (`@clientdomain.com`) and Active Directory presence.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&#10003;</span>
                        <span>LinkedIn employment updates, Slack/Teams channel messages, and resignation trail.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block">
                      Financial Ledgers &amp; Statutory Outlays
                    </span>
                    <ul className="text-xs text-slate-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&#10003;</span>
                        <span>Bank NEFT salary disbursement statements for all deployed months.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&#10003;</span>
                        <span>EPFO ECR receipts and ESIC monthly contribution payment challans.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&#10003;</span>
                        <span>GSTR-1 and GSTR-3B filings establishing tax remittance on all billed amounts.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block">
                      Legal Compliance &amp; Certificate
                    </span>
                    <ul className="text-xs text-slate-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&#10003;</span>
                        <span>Electronic Evidence Certificate under Section 63 BSA 2023 executed by IT/HR custodian.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&#10003;</span>
                        <span>Udyam Registration Certificate establishing MSME enterprise status and registration date.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">&#10003;</span>
                        <span>India Post Speed Post tracking report with confirmed delivery status to corporate registered office.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 10: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions for Staffing &amp; Recruitment Creditors
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Clear legal and procedural answers to the most common C2H conversion and workforce rebadging disputes
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 transition-colors open:bg-white open:border-red-200"
                    >
                      <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-xs sm:text-sm list-none select-none">
                        <span className="pr-4">{faq.question}</span>
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs group-open:rotate-180 group-open:bg-[#DC2626] group-open:text-white transition-all shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Framework & Citations */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight"
                  >
                    Primary Statutory Citations &amp; Legal Authorities
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Official bare acts, gazette notifications, and statutory repositories
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#DC2626]/50 hover:bg-red-50/30 transition-all flex flex-col justify-between"
                    >
                      <span className="text-xs font-bold text-slate-900 line-clamp-2">
                        {source.title}
                      </span>
                      <span className="text-[11px] font-semibold text-[#DC2626] mt-2 inline-flex items-center gap-1">
                        View Official Statute &rarr;
                      </span>
                    </a>
                  ))}
                </div>
              </section>

              {/* Dual-Track B2B Conversion CTA Section */}
              <section aria-label="Recovery Actions" className="pt-2">
                <TempToPermCTA />
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links Component */}
        <RelatedRecoveryGuides currentPath="/temp-to-perm-contract-employee-absorption-buyout-fee-recovery" />
      </div>
    </>
  );
}
