import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import WrongfulLDTableOfContents from "./WrongfulLDTableOfContents";
import WrongfulLDScenarioTabs from "./WrongfulLDScenarioTabs";
import WrongfulLDRecoveryCTA from "./WrongfulLDRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/wrongful-liquidated-damages-ld-termination-works-contract-remedy";
const EXACT_H1 =
  "Countering Arbitrary 10% Liquidated Damages (LD) Deductions & 'Risk-and-Cost' Terminations: Enforcing *Kailash Nath* Actual-Loss Proof";
const META_TITLE = "Employer Deducted 10% LD? Contractor Recovery Under s.74";
const META_DESCRIPTION =
  "Developer deducted 10% LD to wipe out your final bill? Under Kailash Nath v. DDA, LD cannot be an automatic windfall without proving actual legal injury.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_URL}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Countering Arbitrary 10% Liquidated Damages Deductions and Risk-and-Cost Terminations"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const STATUTORY_MATRIX = [
  {
    remedy: "Section 74 Rebuttal & Actual-Loss Substantiation Demand",
    statute: "Indian Contract Act, 1872 (Section 74) & Supreme Court Kailash Nath Doctrine",
    timing: "Immediate upon receipt of 10% LD debit note or bill deduction intimation",
    mechanism:
      "Serve formal advocate demand challenging the unilateral penalty deduction; put employer to strict proof of legal injury and actual pecuniary loss; prove asset utilization or commercial monetization.",
    relief:
      "Invalidates automatic 10% LD set-off as an illegal contractual penalty; revives full payable balance of Running Account (RA) or Final Bill along with statutory interest.",
    suitability:
      "EPC, civil, and turnkey MEP contractors facing automatic 5%–10% delay damage deductions on final accounts without proof of employer loss.",
    tone: "emerald",
  },
  {
    remedy: "Invocation of Prevention Principle & 'Time at Large' Defense",
    statute: "Contract Act 1872 (ss. 51, 54 & 67) & Welspun Specialty Solutions v. ONGC",
    timing: "Prior to or along with formal application for Extension of Time (EOT)",
    mechanism:
      "File critical-path delay analysis establishing employer-caused hindrances (delayed GFC drawings, lack of unencumbered site access, delayed power/water, unapproved variation orders).",
    relief:
      "Sets time at large, strikes down stipulated milestone completion deadlines, and legally disentitles the employer from levying pre-estimated liquidated damages.",
    suitability:
      "Projects where delays were concurrent or predominantly triggered by client approvals, design changes, and site handover defaults.",
    tone: "emerald",
  },
  {
    remedy: "Protest Notice & Joint Inventory Requisition Against Termination",
    statute: "CPWD Works Manual / FIDIC Sub-Clause 15.2 & Contract Act ss. 73 & 75",
    timing: "Within 24 to 72 hours of receiving a 7-day or 14-day cure/termination notice",
    mechanism:
      "Issue registered statutory objection challenging illegal repudiation; demand mandatory Joint Measurement Book (MB) survey, raw material count, and machinery audit before site handover.",
    relief:
      "Prevents employer from fabricating retrospective defect or abandonment claims; creates binding evidentiary baseline defeating bogus 'risk-and-cost' retendering debits.",
    suitability:
      "Arbitrary or retaliatory contract terminations where the developer seeks to bring in a replacement contractor at inflated rates.",
    tone: "slate",
  },
  {
    remedy: "Commercial Court Section 9 Interim Bank Guarantee Injunction",
    statute: "Arbitration & Conciliation Act, 1996 (Section 9) & U.P. State Sugar Corp.",
    timing: "Urgent filing upon threat or notice of Performance Bank Guarantee (PBG) encashment",
    mechanism:
      "Move Commercial Court establishing special equities, irretrievable injury, and egregious fraud in invoking PBG to recover unadjudicated, disputed penal liquidated damages.",
    relief:
      "Restrains the employer and beneficiary bank from liquidating PBGs and Mobilization Guarantees pending arbitral adjudication.",
    suitability:
      "Contractors subjected to retaliatory PBG encashment threats immediately after demanding release of withheld final bills.",
    tone: "slate",
  },
  {
    remedy: "Arbitral Claim for Executed Dues & Loss of Profit (10%–15%)",
    statute: "Arbitration Act 1996 (s.21/s.31) & Supreme Court AT Brij Paul Singh Doctrine",
    timing: "Within 30 days of wrongful contract termination",
    mechanism:
      "Issue Section 21 Arbitration notice claiming unpaid certified/uncertified work, raw materials detained on site, idle plant/machinery compensation, and anticipated profit on unexecuted works.",
    relief:
      "Secures enforceable arbitral award granting 10%–15% overheads/loss of profit on remaining contract value, refund of security deposit, and 18% post-award interest under Section 31(7).",
    suitability:
      "Terminated turnkey contracts where the balance scope of work was re-awarded to a third party without contractor default.",
    tone: "emerald",
  },
];

const COURT_PRECEDENTS = [
  {
    citation: "Kailash Nath Associates v. Delhi Development Authority (2015) 4 SCC 136",
    court: "Supreme Court of India (Division Bench)",
    holding:
      "Section 74 of the Indian Contract Act does not dispense with the necessity of proving actual damage or loss. The expression 'whether or not actual damage or loss is proved to have been caused thereby' only applies to cases where damage or loss is impossible or difficult to prove. Where actual loss is capable of proof, the employer must plead and prove legal injury and pecuniary damage. Liquidated damages cannot be deducted as an automatic windfall.",
    significance:
      "Foundational charter protecting contractors against automatic 10% LD deductions when developers monetize, lease, or occupy project assets without actual pecuniary injury.",
  },
  {
    citation: "Fateh Chand v. Balkishan Dass (1964) 1 SCR 515 & Maula Bux v. UOI (1969) 2 SCC 554",
    court: "Supreme Court of India (Constitution Bench)",
    holding:
      "Section 74 emphasizes that the court or tribunal will award only 'reasonable compensation' not exceeding the named penalty. Forfeiture of substantial earnest money, retention, or contractual amounts without establishing actual loss is illegal and unenforceable as a penalty under Indian law.",
    significance:
      "Bars arbitrary forfeiture of cash security deposits and unproved risk-and-cost overheads without judicial quantification of real damage.",
  },
  {
    citation: "Welspun Specialty Solutions Ltd. v. ONGC (2022) 2 SCC 382",
    court: "Supreme Court of India",
    holding:
      "Time is not the essence of the contract where the contract provides for extension of time and imposition of liquidated damages. Where delays are caused by employer defaults (drawing approvals, front handovers) and the employer repeatedly grants extensions of time, it cannot mechanically levy liquidated damages. Time is set at large.",
    significance:
      "Prevents developers from extending contract milestones while simultaneously deducting delay penalties when design and site clearances were stalled.",
  },
  {
    citation: "AT Brij Paul Singh v. State of Gujarat (1984) 4 SCC 59 & Dwaraka Das v. State of M.P. (1999) 3 SCC 500",
    court: "Supreme Court of India",
    holding:
      "Where an employer wrongfully terminates a works contract, the contractor is entitled not only to payment for work actually executed but also to compensation for loss of anticipated profits that the contractor would have earned on the unexecuted portion of the contract, conventionally assessed between 10% and 15% of the balance contract value.",
    significance:
      "Turns the tables on developers: unlawful risk-and-cost termination exposes the employer to multi-crore loss-of-profit counterclaims.",
  },
  {
    citation: "MBL Infrastructures Ltd. v. Delhi Metro Rail Corp. (DMRC) (2023)",
    court: "Delhi High Court (Commercial Division)",
    holding:
      "An employer who is itself in default of fundamental contractual obligations—such as releasing timely Running Account payments and clearing work fronts—cannot terminate the contract at the contractor's risk and cost. An illegal termination converts the dispute into an employer breach, rendering risk-and-cost debits void ab initio.",
    significance:
      "Confirms that cash-flow starvation caused by unpaid interim bills is a complete statutory defense against termination and liquidated damages.",
  },
];

const DEBTOR_PREEMPTION_TABLE = [
  {
    excuse: "Contract Clause states 10% LD is pre-agreed genuine pre-estimate of loss",
    rebuttal:
      "Under Supreme Court Kailash Nath Associates, contract wording labeling LD as a 'genuine pre-estimate' does not override Section 74. The employer must still prove that it actually suffered legal injury and financial loss. If the project asset was occupied, leased, or put to immediate commercial use, zero loss was suffered, making the 10% deduction an illegal penalty.",
    action:
      "Serve Section 74 Legal Notice requiring production of employer's audited profit-and-loss accounts and rental realization records.",
  },
  {
    excuse: "Contractor failed to achieve intermediate milestone dates",
    rebuttal:
      "Milestone defaults are rendered unenforceable when the employer committed concurrent delays—such as delayed structural drawings, revised architectural layouts, or delayed site access. Under Welspun v. ONGC, intermediate milestone damages cannot be deducted where time was set at large.",
    action:
      "Produce comprehensive Hindrance Register correlating Request for Information (RFI) logs with drawing approval lag times.",
  },
  {
    excuse: "Extension of Time (EOT) was granted with explicit reservation of LD rights",
    rebuttal:
      "Unilateral EOT letters reserving liquidated damages are invalid if the underlying reasons for prolongation were attributable to the employer. Under Section 54 of the Contract Act, a defaulting promisor cannot grant conditional extensions for its own structural defaults.",
    action:
      "Issue immediate written protest rejecting conditional EOT and placing on record that extensions were required solely due to employer hindrances.",
  },
  {
    excuse: "Contractor was expelled and balance work retendered at risk-and-cost",
    rebuttal:
      "Risk-and-cost retendering is void if executed without a transparent, bipartisan Joint Measurement Book (MB) survey and inventory audit. Unilateral measurements recorded behind the contractor's back are legally inadmissible.",
    action:
      "File Section 9 Commercial Court petition for appointment of a Court Commissioner to freeze physical site status and record inventory.",
  },
  {
    excuse: "Performance Bank Guarantee (PBG) is unconditional and must be encashed",
    rebuttal:
      "Invocation of an unconditional bank guarantee to satisfy an unadjudicated, disputed penal claim of liquidated damages constitutes irretrievable injustice and bad faith under U.P. State Sugar Corp. and Gangotri Enterprises.",
    action:
      "Obtain ad-interim ex-parte injunction from Commercial Court restraining bank encashment while undertaking to keep guarantee alive.",
  },
];

const EVIDENCE_CHECKLIST = [
  {
    category: "Site Hindrance & Critical Path Records",
    items: [
      "Master Project Hindrance Register signed or acknowledged by Resident Engineer / PMC",
      "Request for Information (RFI) logs with date stamps showing prolonged design approval lags",
      "Notice of Site Unavailability / delayed unencumbered front handover letters",
      "Records of delayed water, electrical, and environmental clearance sanctions from authorities",
    ],
  },
  {
    category: "Execution, Measurements & Material Audits",
    items: [
      "Running Account (RA) Bills submitted along with detailed measurement sheets and Pour Cards",
      "Third-party Quality Testing Laboratory reports and Concrete Cube Test registers",
      "Material Delivery Challans and Gate Passes for steel, cement, and MEP equipment on site",
      "Drone survey footage, geocoded high-resolution site photographs, and CCTV time-lapse archives",
    ],
  },
  {
    category: "Contractual Notices & Extension Files",
    items: [
      "Extension of Time (EOT) applications citing specific hindrance days and weather delays",
      "Formal protest letters repudiating unilateral conditional EOTs or LD debit notes",
      "Notice under Contract Act Section 54 establishing suspension of work due to non-payment",
      "7-Day / 14-Day cure notice replies detailing active resource deployment on site",
    ],
  },
  {
    category: "BSA 2023 Section 63 Electronic Certification",
    items: [
      "Section 63 certificate affirming authenticity of email correspondence with Developer/PMC",
      "Exported WhatsApp site coordination group chats showing oral instructions and front updates",
      "ERP system audit logs detailing exact bill submission timestamps and workflow approvals",
      "Bank statements confirming irregular interim cash disbursements causing site starvation",
    ],
  },
];

const FAQ_ITEMS = [
  {
    question: "Can a real estate developer automatically deduct 10% Liquidated Damages from our final bill?",
    answer:
      "No. Under Indian law and Section 74 of the Indian Contract Act, 1872, liquidated damages clauses do not confer an automatic right of deduction. As conclusively ruled by the Supreme Court of India in Kailash Nath Associates v. DDA (2015) 4 SCC 136, a 10% LD clause merely establishes the maximum ceiling of compensation. The employer must plead and prove that it suffered actual legal injury and measurable pecuniary loss. If the developer occupied, rented out, or sold the units without financial detriment, an automatic 10% LD debit note is an illegal contractual penalty and must be refunded in full.",
  },
  {
    question: "What happens if project delay was caused both by the contractor and the employer?",
    answer:
      "When project delays are concurrent or predominantly attributable to the employer—such as delayed handover of unencumbered site fronts, late delivery of Good For Construction (GFC) drawings, structural design revisions, or delayed power connections—the legal 'Prevention Principle' applies. Under Supreme Court precedent (Welspun Specialty Solutions v. ONGC), where the employer's defaults prevent completion by the contract date, time is set at large. The employer loses the contractual right to enforce liquidated damages, and any attempt to deduct LD is void ab initio.",
  },
  {
    question: "How do we legally stop a developer from terminating our contract at 'Risk-and-Cost'?",
    answer:
      "To counter an illegal risk-and-cost termination, the contractor must take three immediate steps: First, serve an urgent statutory reply to the cure notice detailing all employer-caused hindrances, unpaid RA bills, and active site deployment. Second, issue a formal demand for an immediate Joint Measurement Book (MB) survey and inventory audit before any third-party enters the site. Third, if the employer locks the site gates or threatens to encash bank guarantees, immediately file a Section 9 petition before the Commercial Court seeking an interim injunction and the appointment of an independent Court Commissioner / Chartered Engineer to record site measurements.",
  },
  {
    question: "Can the employer forfeit our Performance Bank Guarantee (PBG) to recover disputed LD?",
    answer:
      "Generally, bank guarantees are independent contracts, but Indian courts strictly restrain encashment under established exceptions: egregious fraud, irretrievable injustice, and special equities. In Gangotri Enterprises Ltd. v. Union of India and U.P. State Sugar Corp., the Supreme Court held that invoking a performance guarantee to recover an unadjudicated, disputed penal claim of liquidated damages is legally impermissible. By filing a petition under Section 9 of the Arbitration and Conciliation Act, 1996 and offering to keep the PBG alive pending arbitration, contractors routinely secure ex-parte injunctions against retaliatory bank guarantee encashment.",
  },
  {
    question: "What damages can a contractor claim if the works contract was wrongfully terminated?",
    answer:
      "Under Sections 73 and 75 of the Indian Contract Act, 1872 and landmark rulings in AT Brij Paul Singh v. State of Gujarat and Dwaraka Das v. State of M.P., a contractor whose contract was wrongfully terminated is entitled to: (1) Payment for all work executed up to the date of termination at contract rates; (2) Refund of retained retention money and security deposits; (3) Compensation for raw materials, scaffolding, and plant/machinery unlawfully detained on site; (4) Idling charges for machinery and workforce; and (5) Compensation for loss of anticipated profits, conventionally awarded between 10% and 15% of the unexecuted balance contract value.",
  },
  {
    question: "Does accepting a part-payment or signing a conditional EOT waive our right to dispute LD?",
    answer:
      "Not if the payment or extension was protested. Under the Supreme Court doctrine established in Ambica Construction v. Union of India and R.L. Kalathia & Co. v. State of Gujarat, endorsements or undertakings signed under financial duress or economic coercion do not extinguish legitimate contractual claims. If the contractor issues an immediate protest notice within 24 to 48 hours of payment or Extension of Time issuance, the right to claim wrongful LD refund and project prolongation damages before an arbitral tribunal remains completely protected.",
  },
  {
    question: "How does Section 21 Arbitration work for recovering wrongful LD deductions?",
    answer:
      "Once an employer refuses to revoke a wrongful LD deduction or illegal termination notice, the contractor issues a formal Notice Invoking Arbitration under Section 21 of the Arbitration and Conciliation Act, 1996. The notice articulates the disputes, quantifies the withheld final bills and illegal LD debits, proposes an independent sole arbitrator, and stops statutory limitation under the Limitation Act, 1963. Under Section 29A, the arbitral tribunal is mandated to deliver an award within 12 months, which is enforceable as a court decree under Section 36 with 18% statutory interest.",
  },
];

export default function WrongfulLiquidatedDamagesRemedyPage() {
  const breadcrumbItems = [
    { label: "Infrastructure & EPC Recovery", href: "/industries/construction-epc-contractor-recovery" },
    { label: "Wrongful LD & Termination Remedy", href: PAGE_URL },
  ];

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    inLanguage: "en-IN",
    mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
    datePublished: "2026-11-16T00:00:00+05:30",
    dateModified: "2026-11-16T00:00:00+05:30",
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
      url: `${SITE_URL}/about-us`,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  const HOWTO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Rebut Wrongful 10% Liquidated Damages & Overturn Risk-and-Cost Termination",
    description:
      "A 4-step statutory procedure for EPC and civil contractors to reverse arbitrary 10% LD deductions, prevent illegal contract terminations, and recover withheld final bills under Indian Contract Act Section 74.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Serve Section 74 Actual-Loss Rebuttal Notice",
        text: "Issue a formal fact-verified notice demanding strict proof of actual financial loss and legal injury under Supreme Court Kailash Nath Associates v. DDA.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Establish Prevention Principle via Hindrance Register",
        text: "Produce critical-path hindrance logs proving project delays were caused by delayed drawings, unencumbered front delays, and client variations.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Secure Site Inventory via Section 9 Commercial Court Petition",
        text: "File an urgent Section 9 petition for appointment of a Court Commissioner to record joint inventory and restrain illegal Bank Guarantee encashment.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Invoke Section 21 Arbitration for Dues & 15% Lost Profits",
        text: "Commence commercial arbitration under Section 21 claiming unpaid final bills, wrongful LD refund, idle machinery overheads, and 10%–15% anticipated profits.",
      },
    ],
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
        name: "Infrastructure & EPC Recovery",
        item: `${SITE_URL}/industries/construction-epc-contractor-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Wrongful LD & Termination Remedy",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B Statutory Playbook</span>
            <span>&bull;</span>
            <span>Contract Act s.74 & Kailash Nath Doctrine</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Answer & Legal Scope
            </span>
            Under Section 74 of the Indian Contract Act, 1872 and the Supreme Court&apos;s landmark ruling in{" "}
            <em>Kailash Nath Associates v. DDA</em>, a 10% Liquidated Damages clause is merely an upper ceiling and cannot be deducted as an automatic windfall without strict proof of actual pecuniary loss. For construction, civil, and turnkey MEP contractors operating under our{" "}
            <Link
              href="/industries/construction-epc-contractor-recovery"
              className="text-red-400 hover:text-red-300 font-bold underline underline-offset-2"
            >
              Construction & EPC Contractor Recovery Hub
            </Link>
            , where delays stem from late drawings, hindered site fronts, or withheld interim payments, time is set at large. Retaliatory risk-and-cost terminations without joint inventory violate fundamental contract law, entitling contractors to full bill recovery plus 10%–15% loss of profits.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="border-r border-white/10 pr-2 sm:pr-4">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Contractual LD Cap
              </p>
              <p className="text-lg sm:text-2xl font-black text-slate-100">10% Ceiling</p>
              <p className="text-[10px] text-slate-400 mt-1">Not automatic entitlement</p>
            </div>
            <div className="border-r border-white/10 pr-2 sm:pr-4">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Statutory Burden
              </p>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">Actual Loss</p>
              <p className="text-[10px] text-slate-400 mt-1">Must plead & prove injury</p>
            </div>
            <div className="border-r border-white/10 pr-2 sm:pr-4">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Prevention Principle
              </p>
              <p className="text-lg sm:text-2xl font-black text-amber-400">Time At Large</p>
              <p className="text-[10px] text-slate-400 mt-1">Employer delay bars LD</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-1">
                Wrongful Termination
              </p>
              <p className="text-lg sm:text-2xl font-black text-red-400">10%–15% Profit</p>
              <p className="text-[10px] text-slate-400 mt-1">Awarded on balance work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Component */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Split: Sticky Sidebar TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar Table of Contents */}
          <WrongfulLDTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & The 10% LD Trap */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Developers Deduct Arbitrary 10% LD to Wipe Out Final Bills
                </h2>
              </div>
              <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  In the Indian infrastructure, civil contracting, and commercial real estate sectors, a recurring, predatory playbook is deployed against contractors upon practical completion of works. After completing 95% to 100% of the project scope and submitting a multi-crore Final Running Account (RA) Bill—which includes accumulated retention money, uncertified extra-item variations, and price escalation claims—the contractor is met with absolute silence, followed by an aggressive debit note.
                </p>
                <p>
                  The developer or employer invokes General Conditions of Contract (GCC) clauses to slap an automatic <strong>10% Liquidated Damages (LD) deduction</strong> for delay. If the total contract value was ₹15 Crore, the employer issues an arbitrary ₹1.5 Crore LD debit note—deliberately calculated to wipe out the contractor&apos;s pending ₹1.45 Crore final billing balance to zero. If the contractor protests, the employer threatens an immediate <em>&apos;Risk-and-Cost&apos;</em> termination and retaliatory encashment of Performance Bank Guarantees (PBGs).
                </p>
                <p>
                  What commercial developers conceal from project contractors is that this practice is fundamentally illegal under the Indian law of contracts. Under Section 74 of the Indian Contract Act, 1872, as interpreted by continuous Constitution Bench and Division Bench rulings of the Supreme Court of India, a liquidated damages clause is not an automatic forfeiture mechanism. An employer cannot simply sit in its air-conditioned corporate boardroom, calculate 10% of the total contract price, and deduct it from the contractor&apos;s hard-earned billing.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 my-4">
                  <p className="text-xs sm:text-sm font-bold text-red-900 mb-1">
                    The Commercial Extortion Dynamic in Works Contracts:
                  </p>
                  <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                    Developers routinely use 10% LD debit notes as financial leverage to coerce contractors into signing unconditional &apos;No-Claim Certificates&apos; (NDCs) or accepting 40%–50% haircuts on legitimate final accounts. If the contractor refuses to surrender, the developer manufactures retrospective defaults to justify illegal risk-and-cost retendering.
                  </p>
                </div>
                <p>
                  To overcome this trap, contractors must understand the statutory shields provided by Section 74, enforce the <em>Kailash Nath</em> actual-loss doctrine, weaponize detailed Site Hindrance Logs, and invoke commercial arbitration before bank guarantees are jeopardized.
                </p>
              </div>
            </section>

            {/* Section 2: Kailash Nath Associates v. DDA Doctrine */}
            <section
              id="heading-kailash-nath-doctrine"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  The Kailash Nath Mandate: No Automatic Windfall Without Actual Loss
                </h2>
              </div>
              <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  For decades, employers and public authorities argued that if a contract stipulated a sum by way of liquidated damages (such as 0.5% per week up to a maximum of 10%), the employer was automatically entitled to recover that full amount upon delay, without needing to prove any actual financial damage. In 2015, the Supreme Court of India in the landmark judgment of{" "}
                  <strong>Kailash Nath Associates v. Delhi Development Authority (2015) 4 SCC 136</strong> comprehensively shattered this fallacy.
                </p>
                <p>
                  Writing for the Court, Justice R.F. Nariman synthesized over six decades of jurisprudence dating back to the Constitution Bench judgments in <em>Fateh Chand v. Balkishan Dass</em> (1964) and <em>Maula Bux v. Union of India</em> (1969), establishing the definitive legal principles governing Section 74:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      1. Legal Injury is a Condition Precedent
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Compensation under Section 74 can only be awarded when the employer has actually suffered legal injury. If the breach resulted in zero financial loss, or if the employer suffered no pecuniary detriment, no liquidated damages can be deducted. Section 74 is compensatory, never penal.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      2. Actual Loss Must Be Pleaded & Proved
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The phrase &apos;whether or not actual damage or loss is proved to have been caused thereby&apos; applies strictly to cases where damage is impossible or extremely difficult to assess. In commercial construction contracts, financial losses (such as rental loss or extra financing cost) are fully capable of proof and must be proven with documentary ledgers.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      3. The 10% Clause is Merely a Ceiling
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The sum named in the contract represents only the maximum ceiling of compensation. The court or arbitrator will award only &apos;reasonable compensation&apos; based on proved loss, which may be a fraction of the 10% figure or zero if no loss is established.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      4. Asset Monetization Negates Damages
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Where the employer immediately took possession of the civil structure, leased it out to commercial tenants, or sold residential inventory at appreciated market rates, the employer benefited from the asset. Claiming delay damages while earning commercial revenue constitutes an impermissible windfall.
                    </p>
                  </div>
                </div>

                <p>
                  When armed with this statutory standard, a contractor facing a 10% LD deduction does not have to beg for mercy. Through a fact-verified demand notice, the contractor formally puts the developer to strict proof: <em>Produce your audited balance sheets, rent rolls, and banking interest ledgers proving exact rupee-for-rupee damage caused solely by the alleged delay.</em> In 95% of cases, developers cannot furnish such proof because none exists.
                </p>
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Matrix: ICA Section 74, Section 54 & Section 9 Injunctions
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Countering arbitrary liquidated damages and wrongful termination requires coordinating multiple statutory provisions across the Indian Contract Act, 1872, the Arbitration and Conciliation Act, 1996, and the Commercial Courts Act, 2015:
              </p>

              <div className="overflow-x-auto -mx-5 sm:mx-0">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 rounded-tl-xl font-bold uppercase tracking-wider text-[11px]">
                        Remedy & Strategic Action
                      </th>
                      <th className="p-3 sm:p-4 font-bold uppercase tracking-wider text-[11px]">
                        Governing Statute / Landmark Authority
                      </th>
                      <th className="p-3 sm:p-4 font-bold uppercase tracking-wider text-[11px]">
                        Trigger Point & Timing
                      </th>
                      <th className="p-3 sm:p-4 rounded-tr-xl font-bold uppercase tracking-wider text-[11px]">
                        Commercial Relief Obtained
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          <span className="block text-[#DC2626] mb-1">{row.remedy}</span>
                          <span className="text-[11px] font-normal text-slate-500">
                            {row.suitability}
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 align-top font-medium">
                          {row.statute}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          {row.timing}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 align-top">
                          <p className="mb-1">{row.relief}</p>
                          <p className="text-[11px] text-slate-500 italic">{row.mechanism}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Escalation Decision Flowchart SVG */}
            <section
              id="heading-decision-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Escalation Decision Map: From Cure Notice to Section 9 BG Injunction
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                When faced with arbitrary LD set-offs or a threat of risk-and-cost contract termination, follow this sequential tactical workflow to insulate contractor cash flows and preserve multi-crore arbitral claims:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-inner">
                <svg
                  viewBox="0 0 880 440"
                  className="w-full h-auto text-white select-none"
                  width={880}
                  height={440}
                >
                  <defs>
                    <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DC2626" />
                      <stop offset="100%" stopColor="#991B1B" />
                    </linearGradient>
                    <linearGradient id="slateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E293B" />
                      <stop offset="100%" stopColor="#0F172A" />
                    </linearGradient>
                  </defs>

                  {/* Step 1 */}
                  <rect x="20" y="40" width="240" height="90" rx="12" fill="url(#slateGrad)" stroke="#334155" strokeWidth="2" />
                  <text x="140" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold" letterSpacing="1">STAGE 1 &bull; NOTICE STAGE</text>
                  <text x="140" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Employer Serves 10% LD</text>
                  <text x="140" y="110" textAnchor="middle" fill="#94A3B8" fontSize="10">Debit Note or 7-Day Cure Notice</text>

                  {/* Arrow 1 -> 2 */}
                  <line x1="260" y1="85" x2="310" y2="85" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />
                  <polygon points="310,85 302,80 302,90" fill="#DC2626" />

                  {/* Step 2 */}
                  <rect x="320" y="40" width="250" height="90" rx="12" fill="url(#slateGrad)" stroke="#334155" strokeWidth="2" />
                  <text x="445" y="70" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="bold" letterSpacing="1">STAGE 2 &bull; STATUTORY REBUTTAL</text>
                  <text x="445" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Kailash Nath Demand Notice</text>
                  <text x="445" y="110" textAnchor="middle" fill="#94A3B8" fontSize="10">Demand Proof of Actual Legal Loss</text>

                  {/* Arrow 2 -> 3 */}
                  <line x1="570" y1="85" x2="620" y2="85" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="620,85 612,80 612,90" fill="#DC2626" />

                  {/* Step 3 */}
                  <rect x="630" y="40" width="230" height="90" rx="12" fill="url(#slateGrad)" stroke="#334155" strokeWidth="2" />
                  <text x="745" y="70" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold" letterSpacing="1">STAGE 3 &bull; DELAY MATRIX</text>
                  <text x="745" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Hindrance Log Mobilization</text>
                  <text x="745" y="110" textAnchor="middle" fill="#94A3B8" fontSize="10">Enforce Welspun 'Time At Large'</text>

                  {/* Arrow Down from Step 3 to Step 4 */}
                  <line x1="745" y1="130" x2="745" y2="180" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="745,180 740,172 750,172" fill="#DC2626" />

                  {/* Step 4 (Threat of Termination / PBG Invocation) */}
                  <rect x="520" y="190" width="340" height="100" rx="12" fill="url(#redGrad)" stroke="#EF4444" strokeWidth="2" />
                  <text x="690" y="220" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="bold" letterSpacing="1">HIGH-RISK ESCALATION</text>
                  <text x="690" y="242" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="black">Retaliatory PBG Threat / Lock-Out</text>
                  <text x="690" y="260" textAnchor="middle" fill="#FCA5A5" fontSize="10">Employer Threatens Risk-and-Cost Retendering</text>

                  {/* Branch to Court vs Arbitration */}
                  <line x1="520" y1="240" x2="410" y2="240" stroke="#F87171" strokeWidth="2.5" />
                  <polygon points="410,240 418,235 418,245" fill="#F87171" />

                  {/* Step 5: Section 9 Commercial Injunction */}
                  <rect x="90" y="190" width="310" height="100" rx="12" fill="url(#slateGrad)" stroke="#38BDF8" strokeWidth="2" />
                  <text x="245" y="220" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="bold" letterSpacing="1">COMMERCIAL COURT RELIEF</text>
                  <text x="245" y="242" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Section 9 Commercial Court Petition</text>
                  <text x="245" y="260" textAnchor="middle" fill="#94A3B8" fontSize="10">Restrain PBG Encashment + Appoint Court Receiver</text>

                  {/* Bottom Line to Final Resolution */}
                  <line x1="245" y1="290" x2="245" y2="330" stroke="#34D399" strokeWidth="2.5" />
                  <polygon points="245,330 240,322 250,322" fill="#34D399" />

                  {/* Step 6: Full Arbitration */}
                  <rect x="90" y="340" width="700" height="75" rx="12" fill="url(#slateGrad)" stroke="#34D399" strokeWidth="2" />
                  <text x="440" y="365" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold" letterSpacing="1">FINAL RECOVERY & MONETIZATION</text>
                  <text x="440" y="388" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Section 21 Arbitration: Reverse 10% LD + Recover Unpaid Bills + 15% Profit Award</text>
                  <text x="440" y="405" textAnchor="middle" fill="#94A3B8" fontSize="10">12-Month Mandated Arbitral Decree enforceable under Commercial Courts Act s.36</text>
                </svg>
              </div>

              {/* Mobile Stacked Flow Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
                    Stage 1 &bull; Notice Receipt
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    Employer Serves 10% LD Debit Note / Cure Notice
                  </p>
                  <p className="text-xs text-slate-300">
                    Developer attempts to wipe out pending RA bills with a unilateral delay penalty.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                    Stage 2 &bull; Statutory Rebuttal
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    Issue Kailash Nath Section 74 Demand Notice
                  </p>
                  <p className="text-xs text-slate-300">
                    Put employer to strict proof of actual pecuniary loss and legal injury.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                    Stage 3 &bull; Delay Matrix
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    Mobilize Hindrance Register & RFI Proof
                  </p>
                  <p className="text-xs text-slate-300">
                    Demonstrate employer defaults set time at large under Welspun Specialty Solutions.
                  </p>
                </div>
                <div className="bg-red-950/80 text-white p-4 rounded-xl border border-red-800">
                  <span className="text-[10px] font-bold text-red-300 uppercase tracking-wider block mb-1">
                    Stage 4 &bull; Court Protection
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    Section 9 Petition for PBG Stay & Court Commissioner
                  </p>
                  <p className="text-xs text-red-200">
                    Freeze site measurements and obtain injunction against retaliatory bank guarantee encashment.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-emerald-500/40">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                    Stage 5 &bull; Arbitral Enforcement
                  </span>
                  <p className="text-sm font-bold text-white mb-1">
                    Section 21 Arbitration & 15% Profit Counter-Claim
                  </p>
                  <p className="text-xs text-slate-300">
                    Crystallize claim under AT Brij Paul Singh for executed works, LD reversal, and lost profits.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Scenario Tabs Component */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Tactical Playbooks for 4 Common LD & Risk-and-Cost Failure Modes
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Select your specific operational bottleneck below to review the governing legal doctrine, statutory counter-arguments, and step-by-step dispute resolution SOP:
              </p>

              <WrongfulLDScenarioTabs />
            </section>

            {/* Section 6: Worked Financial Ledger & Calculation */}
            <section
              id="heading-financial-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Financial Ledger: Reversing ₹1.5 Cr LD & Prolongation Losses
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Consider a typical commercial civil contract of <strong>₹15,00,00,000 (₹15 Crore)</strong> where the developer unlawfully deducted 10% LD and terminated works 4 months prior to completion. Here is how our legal notice and claim dossier reverses the deduction and turns the dispute into a multi-crore net affirmative recovery:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                    Contract Dispute Baseline Ledger
                  </p>
                  <p className="text-base sm:text-lg font-bold text-white">
                    Commercial Package: ₹15.00 Cr Total Contract Value &middot; Scope Executed: ₹12.50 Cr
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">1. Unpaid Certified & Uncertified RA Bills Submitted</span>
                    <span className="font-mono font-bold text-slate-100">₹1,15,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">2. Accumulated Retention Money (5% of Executed ₹12.5 Cr)</span>
                    <span className="font-mono font-bold text-slate-100">₹62,50,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">3. Raw Materials & Scaffolding Detained on Site by Developer</span>
                    <span className="font-mono font-bold text-slate-100">₹38,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800 bg-red-950/40 px-3 rounded-lg">
                    <span className="text-red-300 font-semibold">
                      LESS: Employer&apos;s Arbitrary 10% LD Debit Note (Illegally Set-Off)
                    </span>
                    <span className="font-mono font-bold text-red-400">- ₹1,50,000,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700 bg-slate-800/60 px-3 rounded-lg">
                    <span className="text-slate-400 font-semibold">Developer&apos;s Purported Net Payable Balance to Contractor</span>
                    <span className="font-mono font-bold text-red-400">₹65,50,000 (after wiping ₹1.5 Cr)</span>
                  </div>
                </div>

                {/* The Counter-Claim Affirmative Reversal */}
                <div className="bg-emerald-950/50 border border-emerald-800/60 rounded-xl p-4 sm:p-5 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Affirmative Arbitral Claim After Enforcing Kailash Nath & AT Brij Paul Singh:
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-200">Reversal of Wrongful 10% LD Deduction (No actual loss proved)</span>
                      <span className="font-mono font-bold text-emerald-300">+ ₹1,50,00,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-200">Loss of Profit on Unexecuted Work (15% on balance ₹2.50 Cr)</span>
                      <span className="font-mono font-bold text-emerald-300">+ ₹37,50,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-200">Site Prolongation & Plant Idling Overheads (Hudson Formula, 4 months)</span>
                      <span className="font-mono font-bold text-emerald-300">+ ₹28,00,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-200">Statutory Pre-Award Interest (18% p.a. for 14 months delay)</span>
                      <span className="font-mono font-bold text-emerald-300">+ ₹42,10,000</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-emerald-800/80 flex justify-between items-center text-sm sm:text-base font-black">
                    <span className="text-white">TOTAL CONTRACTOR RECOVERY VALUE:</span>
                    <span className="text-emerald-400 font-mono text-base sm:text-xl">₹4,73,10,000</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic">
                  Note: Interest calculated under Section 31(7) of the Arbitration and Conciliation Act, 1996 and Commercial Courts Act, 2015. Use our{" "}
                  <Link
                    href="/tools/construction-retention-dlp-escalation-claim-calculator"
                    className="text-red-400 underline hover:text-red-300"
                  >
                    Construction Retention & Escalation Claim Calculator
                  </Link>{" "}
                  to model interest and escalation variables for your contract.
                </p>
              </div>
            </section>

            {/* Section 7: Court Precedents */}
            <section
              id="heading-court-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Binding Supreme Court Precedents Restraining Penalty Forfeiture
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Every demand notice, statement of claim, and Section 9 petition drafted by our construction litigation team incorporates these definitive, unassailable judicial authorities:
              </p>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-[#DC2626]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <p className="text-xs sm:text-sm font-black text-slate-900">
                        {item.citation}
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {item.court}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      <strong>Ruling:</strong> {item.holding}
                    </p>
                    <p className="text-xs text-[#DC2626] font-semibold">
                      <strong>Litigation Impact:</strong> {item.significance}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Debtor Defense Pre-emption */}
            <section
              id="heading-debtor-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Pre-empting Developer Defenses: Hindrance Logs vs Extension Waivers
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                When developers and PMC lawyers attempt to justify liquidated damages set-offs or contract termination, they rely on standardized contractual boilerplate. Here is how our operational playbook systematically dismantles each defense:
              </p>

              <div className="overflow-x-auto -mx-5 sm:mx-0">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 rounded-tl-xl font-bold uppercase tracking-wider text-[11px] w-1/4">
                        Developer Excuse / Defense
                      </th>
                      <th className="p-3 sm:p-4 font-bold uppercase tracking-wider text-[11px] w-1/2">
                        Statutory Rebuttal & Judicial Authority
                      </th>
                      <th className="p-3 sm:p-4 rounded-tr-xl font-bold uppercase tracking-wider text-[11px] w-1/4">
                        Contractor Action Step
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {DEBTOR_PREEMPTION_TABLE.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-red-900 bg-red-50/40 align-top">
                          {row.excuse}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 align-top leading-relaxed font-medium">
                          {row.rebuttal}
                        </td>
                        <td className="p-3 sm:p-4 text-slate-800 font-semibold align-top bg-slate-50">
                          {row.action}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: BSA 2023 Section 63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Digital Evidence Dossier: BSA Section 63 Protocol for Site Records
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)</strong>, which replaced Section 65B of the Indian Evidence Act, all digital site communications, ERP logs, WhatsApp approvals, and geocoded photographs must be certified to remain admissible in commercial arbitrations and court proceedings:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EVIDENCE_CHECKLIST.map((group, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      {group.category}
                    </p>
                    <ul className="space-y-2">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <span className="text-[#DC2626] font-bold shrink-0">&check;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 rounded-xl bg-slate-900 text-white text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="font-bold text-red-400 block mb-0.5">Need a Turnkey Section 63 Digital Affidavit?</span>
                  <span className="text-slate-300 text-xs">
                    Our technical forensics team validates site WhatsApp chats, email chains, and drone surveys into court-ready evidentiary exhibits.
                  </span>
                </div>
                <Link
                  href="/templates/construction-ra-bill-retention-money-arbitration-notice"
                  className="px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] rounded-lg font-bold text-white text-xs whitespace-nowrap"
                >
                  View Notice Format &rarr;
                </Link>
              </div>
            </section>

            {/* Mid-Article Dual-Track B2B Conversion Funnel CTA */}
            <div className="my-8">
              <WrongfulLDRecoveryCTA />
            </div>

            {/* Section 10: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Challenging LD & Contract Termination
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 open:bg-white open:shadow-xs transition-colors"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-xs sm:text-sm text-slate-900 gap-3 list-none">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] group-open:rotate-180 transition-transform text-base shrink-0">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Sources & Legal Authority */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Authorities, Arbitration Precedents & Legal Framework
                </h2>
              </div>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                <p>
                  This operational guide is published under the technical review of{" "}
                  <strong>{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role}) and adheres strictly to verified statutory codes and authoritative judicial pronouncements of the Supreme Court of India and High Court Commercial Divisions:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>
                    <strong>Indian Contract Act, 1872:</strong> Section 74 (Breach of contract where penalty stipulated / Liquidated damages), Section 73 (Compensation for loss or damage), Section 51–54 (Reciprocal promises and performance priority), Section 70 (Obligation of person enjoying benefit of non-gratuitous act), and Section 75 (Compensation for rightful rescission).
                  </li>
                  <li>
                    <strong>Arbitration and Conciliation Act, 1996:</strong> Section 9 (Interim measures by Commercial Court / Injunctions against PBG encashment), Section 11 (Appointment of independent arbitrators), Section 21 (Commencement of arbitral proceedings), Section 29A (12-month statutory award mandate), and Section 36 (Execution of arbitral awards as court decrees).
                  </li>
                  <li>
                    <strong>Commercial Courts Act, 2015:</strong> Section 2(1)(c)(vi) (Construction and infrastructure commercial disputes) and Order XXXVII CPC (Summary Suits on written contracts).
                  </li>
                  <li>
                    <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA):</strong> Section 63 (Admissibility of electronic records, site emails, ERP exports, and WhatsApp communications).
                  </li>
                  <li>
                    <strong>Supreme Court Precedents:</strong> <em>Kailash Nath Associates v. DDA</em> (2015) 4 SCC 136; <em>Fateh Chand v. Balkishan Dass</em> (1964) 1 SCR 515; <em>Maula Bux v. Union of India</em> (1969) 2 SCC 554; <em>Welspun Specialty Solutions v. ONGC</em> (2022) 2 SCC 382; <em>AT Brij Paul Singh v. State of Gujarat</em> (1984) 4 SCC 59; <em>Dwaraka Das v. State of M.P.</em> (1999) 3 SCC 500; <em>U.P. State Sugar Corp. v. Sumac International Ltd.</em> (1997) 1 SCC 568; <em>Gangotri Enterprises v. Union of India</em> (2016) 11 SCC 720.
                  </li>
                </ul>

                {/* Sibling & Hub Interlinks */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
                  <span className="font-bold text-slate-700">Explore Sibling Guides:</span>
                  <Link
                    href="/unpaid-ra-bills-uncertified-measurement-book-contractor-recovery"
                    className="text-[#DC2626] hover:underline"
                  >
                    Uncertified RA Bills & MB Stalling
                  </Link>
                  <span>&bull;</span>
                  <Link
                    href="/retention-money-recovery-after-defect-liability-period-dlp-expiry"
                    className="text-[#DC2626] hover:underline"
                  >
                    Post-DLP Retention Money Recovery
                  </Link>
                  <span>&bull;</span>
                  <Link
                    href="/works-contract-excluded-from-msme-samadhaan-contractor-alternatives"
                    className="text-[#DC2626] hover:underline"
                  >
                    Works Contracts MSME Samadhaan Alternatives
                  </Link>
                  <span>&bull;</span>
                  <Link
                    href="/subcontractor-payment-recovery-india"
                    className="text-[#DC2626] hover:underline"
                  >
                    Subcontractor Payment Recovery
                  </Link>
                  <span>&bull;</span>
                  <Link
                    href="/recovery/contractor-payment"
                    className="text-[#DC2626] hover:underline"
                  >
                    Contractor Payment Recovery
                  </Link>
                  <span>&bull;</span>
                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="text-[#DC2626] hover:underline"
                  >
                    Section 80 CPC Notice to Government
                  </Link>
                </div>
              </div>
            </section>

            {/* Bottom Conversion Funnel CTA */}
            <div className="pt-4">
              <WrongfulLDRecoveryCTA />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Related Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
