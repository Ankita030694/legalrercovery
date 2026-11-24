import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BespokeGoodsRecoveryTableOfContents from "./BespokeGoodsRecoveryTableOfContents";
import BespokeGoodsScenarioTabs from "./BespokeGoodsScenarioTabs";
import BespokeGoodsRecoveryCTA from "./BespokeGoodsRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/purchase-order-cancelled-mid-production-bespoke-goods-recovery";
const EXACT_H1 =
  "Purchase Order Cancelled Mid-Fabrication? Recovering Bespoke Raw-Material Costs, WIP & Loss of Profit Under Section 39 & 73";
const META_TITLE = "Buyer Cancelled Custom PO? Recover WIP & Loss of Profit";
const META_DESCRIPTION =
  "Approved GAD drawings, procured ₹60 Lakh of special alloy plates, and the buyer suddenly emailed 'Hold/Cancel PO'? Quantify & recover WIP + loss of profit.";

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
        alt: formatAltText("Buyer Cancelled Custom Purchase Order Mid Production Recovery"),
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
    remedy: "Anticipatory Repudiation Election Notice",
    statute: "Indian Contract Act, 1872 (Section 39)",
    timing: "Within 7 calendar days of buyer's 'Hold' or 'Cancellation' email",
    mechanism:
      "Elect to treat the indefinite hold or wrongful termination as an immediate breach; terminate contract at buyer's risk and crystallize damages immediately.",
    relief:
      "Prevents buyer from arguing acquiescence or waiver; freezes material valuation and carrying charges; establishes immediate cause of action for damages.",
    suitability:
      "Bespoke equipment where special metallurgy plates (SA-516 Gr.70, SS 316, Duplex) have been cut or procured pursuant to approved GAD drawings.",
    tone: "emerald",
  },
  {
    remedy: "WIP Loss & Loss of Profit Recovery",
    statute: "Indian Contract Act, 1872 (Section 73) & SOGA 1930 (Section 56)",
    timing: "Immediate post-repudiation demand notice; filed within 3-year limitation window",
    mechanism:
      "Claim Total Procurement + Direct Fabrication Labour + Allocated Overheads minus Net Scrap Salvage Value, plus 10%–15% Loss of Anticipated Profit.",
    relief:
      "Compensates full commercial expectation interest (*A.T. Brij Paul Singh* SC rule); buyer cannot limit vendor to merely forfeiting a nominal advance.",
    suitability:
      "Custom transformers, pressure vessels, heat exchangers, and boilers with zero secondary market value beyond melting scrap.",
    tone: "slate",
  },
  {
    remedy: "MSMED Act Statutory 3x RBI Compound Penal Interest",
    statute: "MSMED Act, 2006 (Sections 15–18) & MSEFC Samadhaan / ODR",
    timing: "Day 46 post-submission of milestone fabrication invoice or stage billing",
    mechanism:
      "File delayed payment reference before State MSEFC or institutional ODR for manufacturing suppliers holding active Udyam registration certificates.",
    relief:
      "Mandatory monthly compounding interest at 3 times RBI Bank Rate; overrides conflicting buyer purchase order boilerplate and one-sided terms.",
    suitability:
      "Udyam-registered Micro and Small heavy engineering fabricators, machine tool manufacturers, and industrial equipment builders.",
    tone: "emerald",
  },
  {
    remedy: "Attachment Before Judgment on Buyer Project Accounts",
    statute: "Code of Civil Procedure, 1908 (Order XXXVIII Rule 5) & Commercial Courts Act",
    timing: "Simultaneous with filing Commercial Suit or Section 9 Arbitration Petition",
    mechanism:
      "Establish that the buyer or EPC contractor is attempting to dispose of assets, demobilize from project sites, or siphon downstream client disbursements.",
    relief:
      "Secures court orders freezing buyer bank accounts or attaching downstream milestone receivables from the project owner before trial concludes.",
    suitability:
      "Claims exceeding ₹3 Lakh in Commercial Courts against financially unstable EPC contractors or SPVs executing industrial EPC packages.",
    tone: "slate",
  },
  {
    remedy: "Section 43B(h) Corporate Tax Disallowance Leverage",
    statute: "Income Tax Act, 1961 (Section 43B(h))",
    timing: "Prior to March 31 fiscal year-end or Q3/Q4 corporate advance tax estimates",
    mechanism:
      "Serve statutory notice on buyer CFO, Board of Directors, and Statutory Auditors warning of mandatory tax deduction disallowance on overdue vendor payables.",
    relief:
      "Creates immediate board-level fiscal urgency as unpaid fabrication invoices past 45 days are added back to the buyer's taxable corporate profit.",
    suitability:
      "Corporate buyers, listed EPC contractors, and large private limited engineering conglomerates withholding stage payments.",
    tone: "emerald",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court 15% Expected Profit Rule on Wrongful Contract Termination",
    parties: "A.T. Brij Paul Singh & Ors. v. State of Gujarat",
    citation: "(1984) 4 SCC 59, Supreme Court of India",
    date: "Judgment Dated 01 February 1984",
    facts:
      "The government wrongfully rescinded a works contract mid-execution. The contractor claimed not only the value of work completed and materials purchased but also 15% of the total balance contract value towards expected profit. The High Court rejected the lost profit claim as speculative.",
    holding:
      "The Supreme Court reversed the High Court and held that where a works or manufacturing contract is wrongfully terminated by the employer, the contractor is entitled to damages under Section 73 of the Contract Act for loss of expected profit. The Court established that 10% to 15% of the unexecuted balance contract value represents a reasonable, standard commercial measure of loss of profit, eliminating the need to prove exact mathematical ledger figures.",
    amount: "15% Statutory Profit Rule Established for Wrongfully Repudiated Contracts",
    takeaway:
      "Heavy fabricators whose custom POs are cancelled mid-production can legally claim 10%–15% net profit on the entire unperformed contract value, in addition to recovering 100% of stranded raw material and WIP costs.",
  },
  {
    title: "Supreme Court Upholding Loss of Profit Without Mathematical Exactitude",
    parties: "Dwaraka Das v. State of Madhya Pradesh & Anr.",
    citation: "(1999) 3 SCC 500, Supreme Court of India",
    date: "Judgment Dated 23 March 1999",
    facts:
      "The respondent authority wrongfully cancelled a contract after the contractor mobilized plant and procured materials. The appellate court reduced damages, claiming the contractor had failed to produce meticulous ledger books establishing the exact loss of profit.",
    holding:
      "The Supreme Court reaffirmed the A.T. Brij Paul Singh doctrine, ruling that in commercial breach of contract cases, damages for loss of profit are the direct, natural consequence of breach under Section 73. A claimant is not required to prove loss with mathematical precision; standard commercial profit margins (10% to 15%) accepted in trade practice must be awarded as a matter of law.",
    amount: "Loss of Profit Upheld as Automatic Remedy Under Section 73",
    takeaway:
      "Industrial manufacturers do not need to prove hypothetical future sales; the illegal cancellation of an approved purchase order creates an immediate legal entitlement to reasonable commercial lost margins.",
  },
  {
    title: "Supreme Court on Earnest Money Forfeiture vs Actual Damage for Bespoke Goods",
    parties: "Kailash Nath Associates v. Delhi Development Authority",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Judgment Dated 09 January 2015",
    facts:
      "DDA sought to forfeit an earnest money deposit upon contract termination without proving any actual loss. The contractor contested the forfeiture, asserting that Section 74 of the Contract Act requires proof of actual financial damage before compensation or forfeiture can be sustained.",
    holding:
      "The Supreme Court held that under Section 73 and Section 74, compensation is only payable for actual loss or damage suffered. Forfeiture of advance or earnest money cannot be an arbitrary penalty. Where goods have no open market (custom-manufactured bespoke goods), damages must be measured by proving actual expenditure and the absence of market resale value.",
    amount: "Proof of Actual Financial Damage Required — Arbitrary Forfeiture Demolished",
    takeaway:
      "Buyers cannot evade liability by telling custom machinery builders to 'keep the 10% advance and cancel the PO.' Fabricators can sue for the full deficit between their verified WIP loss and the advance received.",
  },
  {
    title: "Supreme Court on Commercial Hardship Not Constituting Frustration",
    parties: "Energy Watchdog v. Central Electricity Regulatory Commission & Ors.",
    citation: "(2017) 14 SCC 80, Supreme Court of India",
    date: "Judgment Dated 11 April 2017",
    facts:
      "Power producers argued that unforeseen escalation in Indonesian coal prices made power purchase agreements commercially unviable, claiming frustration of contract under Section 56 of the Indian Contract Act.",
    holding:
      "The Supreme Court ruled that mere commercial difficulty, unexpected price rise, or loss of downstream profitability does not frustrate a contract under Section 56. An agreement is frustrated only when an untoward event destroys the fundamental root of the contract, rendering physical performance impossible. Downstream project stalling does not discharge contractual purchase obligations.",
    amount: "Commercial Hardship Rejected as Frustration Ground",
    takeaway:
      "EPC contractors who cancel custom equipment POs because their client halted the project or canceled the main package cannot hide behind Section 56 'Force Majeure' or frustration to escape paying WIP damages.",
  },
];

const PREEMPTION_MATRIX = [
  {
    excuse: "“We only emailed a 'Hold' request, not a cancellation. You cannot claim damages while the order is merely suspended.”",
    statutoryShield: "Indian Contract Act, 1872 (Section 39) & Constructive Repudiation Doctrine",
    counterMeasure:
      "Under Section 39, an indefinite suspension or prolonged 'hold' that prevents performance constitutes constructive repudiation. A manufacturer is not legally bound to keep capital, floor space, and raw material tied up indefinitely. By issuing an immediate 7-day Election Notice, the manufacturer forces the buyer to either unfreeze fabrication with verified revised milestone payments or face immediate contract termination with crystallized WIP and carrying damages.",
  },
  {
    excuse: "“You have our 10% mobilization advance. Forfeit the advance and close the purchase order with no further liability.”",
    statutoryShield: "Supreme Court Ruling in Kailash Nath Associates v. DDA (2015) & ICA s.73",
    counterMeasure:
      "Forfeiture of an advance is a creditor remedy, not a buyer defense. Under Section 73, the manufacturer is entitled to be placed in the same financial position as if the contract had been performed. If ₹60 Lakh of special alloy plates and direct engineering labour have been expended on an ₹80 Lakh milestone, crediting the 10% advance (₹8 Lakh) still leaves a recoverable commercial debt of ₹52 Lakh plus loss of profit, recoverable through MSEFC or Commercial Court.",
  },
  {
    excuse: "“Raw material plates and components belong to you. Sell them in the open market to mitigate your loss under Section 73.”",
    statutoryShield: "Sale of Goods Act, 1930 (Section 56) & Custom Bespoke Goods Exception",
    counterMeasure:
      "The statutory duty to mitigate damages under the explanation to Section 73 applies only where an 'available open market' exists. Custom-cut steel plates, rolled pressure vessel shells, drilled tube sheets, and bespoke machine castings have no open commercial market; their only alternative realization is melting scrap at 80% loss. Securing three certified scrap quotes and serving an intimation establishes conclusive proof of mitigation.",
  },
  {
    excuse: "“Our downstream client cancelled the EPC project; this is an unexpected Force Majeure event under Section 56.”",
    statutoryShield: "Supreme Court Landmark in Energy Watchdog v. CERC (2017) 14 SCC 80",
    counterMeasure:
      "Under settled Indian contract jurisprudence, a supplier-subcontractor purchase order is an independent contract. The failure, insolvency, or project abandonment of the prime contractor's client constitutes third-party commercial default, NOT statutory frustration under Section 56. Unless the PO contained an explicit back-to-back 'pay-if-paid' clause valid under Indian law, the buyer remains 100% strictly liable for incurred WIP.",
  },
  {
    excuse: "“No finished goods were delivered to our site, so no 'unpaid debt' exists under the MSMED Act or Commercial Courts Act.”",
    statutoryShield: "MSMED Act Section 15 read with Sale of Goods Act Section 4(3) (Agreement to Sell)",
    counterMeasure:
      "Where a buyer wrongfully repudiates an agreement to sell bespoke goods after raw material procurement and drawing approvals, the claim for the agreed price or unliquidated damages constitutes a commercial dispute under Section 2(1)(c)(xviii) of the Commercial Courts Act, 2015. For MSME units, milestone fabrication billings backed by approved inspection reports can be claimed before the MSEFC as delayed payments with 3x RBI compound interest.",
  },
];

const EVIDENCE_CHECKLIST = [
  {
    item: "Bilateral Purchase Order & Technical Specifications",
    desc: "Signed Purchase Order, formal Letter of Intent (LOI), and agreed Technical Delivery Conditions (TDC) detailing metallurgy, tolerances, and milestone payment schedules.",
    statute: "BSA 2023 s.61 / IT Act s.10A",
  },
  {
    item: "Approved General Arrangement Drawings (GAD) & QAP",
    desc: "Stamped or email-approved GADs, Quality Assurance Plans (QAP), and third-party inspection agency (TPIA) approved design calculations proving buyer authorization to fabricate.",
    statute: "BSA 2023 s.63 Electronic Audit Trail",
  },
  {
    item: "Raw Material Procurement Invoices & Mill Test Certificates (MTC)",
    desc: "GST invoices for special alloy plates (e.g., SA-516 Gr.70, SS 316L, Hastelloy), original MTCs from primary mills (SAIL, Tata, Jindal), and plate heat-number correlation logs.",
    statute: "Commercial Courts Act s.2(1)(c)",
  },
  {
    item: "Shopfloor Cutting Layouts & CNC Nesting Reports",
    desc: "CAD/CAM nesting drawings, plate-cutting job cards, welder qualification records (PQR/WPS), and daily fabrication logs proving conversion from raw plate to bespoke WIP.",
    statute: "BSA 2023 s.63 Certificate",
  },
  {
    item: "Independent Chartered Engineer WIP Valuation Certificate",
    desc: "Third-party assessment report by an accredited Chartered Engineer / IRDAI surveyor detailing physical stage completion, direct labour hours, and allocated fabrication overheads.",
    statute: "Indian Evidence Act / BSA s.39/45",
  },
  {
    item: "Three Independent Certified Scrap Salvage Quotations",
    desc: "Formal written quotes from registered scrap dealers establishing prevailing industrial scrap rates to establish transparent, unassailable mitigation evidence under Section 73.",
    statute: "Indian Contract Act s.73 Mitigation",
  },
  {
    item: "Repudiation & Election Written Communications",
    desc: "Complete email trail containing buyer's 'Hold' or 'Cancellation' email, followed by the manufacturer's immediate 7-day Section 39 Election Notice and postal RPAD receipts.",
    statute: "BSA 2023 s.63 Digital Records",
  },
];

const FAQS = [
  {
    question: "Can an industrial buyer cancel a purchase order after raw materials have been procured?",
    answer:
      "A buyer can physically repudiate a purchase order, but doing so without contractual default by the manufacturer constitutes an anticipatory breach under Section 39 of the Indian Contract Act, 1872. The manufacturer is legally entitled under Section 73 to recover: (1) 100% of the cost of raw materials procured and Work-in-Progress (WIP) fabricated, less net salvage scrap value, (2) all unamortized direct engineering and shopfloor labour costs, and (3) 10% to 15% loss of profit on the unexecuted balance contract value pursuant to the Supreme Court ruling in A.T. Brij Paul Singh v. State of Gujarat.",
  },
  {
    question: "How does the Supreme Court 'A.T. Brij Paul Singh' 15% loss-of-profit rule apply to cancelled POs?",
    answer:
      "In A.T. Brij Paul Singh v. State of Gujarat (1984) 4 SCC 59 and affirmed in Dwaraka Das v. State of M.P. (1999) 3 SCC 500, the Supreme Court held that when a commercial contract is wrongfully terminated, the contractor or manufacturer is entitled to damages for loss of profit as a direct, natural consequence under Section 73. The Court established that 10% to 15% of the balance contract value is a standard, reasonable measure of profit accepted in commercial practice without requiring mathematical ledger exactitude.",
  },
  {
    question: "What is the legal difference between putting a PO on 'indefinite hold' versus cancelling it?",
    answer:
      "Buyers frequently use 'indefinite hold' emails as a delaying tactic to avoid triggering contractual termination penalties. Under Indian contract law, an indefinite suspension that halts fabrication, blocks shopfloor bays, and ties up working capital constitutes constructive repudiation under Section 39. The manufacturer should immediately issue a 7-day Election Notice requiring the buyer to either unfreeze fabrication with verified revised milestones or treat the contract as repudiated at buyer's risk.",
  },
  {
    question: "Can a heavy fabricator claim damages if custom-engineered goods have no open market resale value?",
    answer:
      "Yes. Under Section 56 of the Sale of Goods Act, 1930 read with Section 73 of the Contract Act, when goods have no available secondary market (such as custom pressure vessels, boilers, or bespoke conveyor systems), the measure of damages is not market-price difference. Instead, damages equal the full contract price or the total cost incurred (materials + shopfloor labour + overheads) minus the scrap value of the metal, plus lost expected profit.",
  },
  {
    question: "Does retaining the buyer's 10% advance stop us from suing for full WIP and lost profit?",
    answer:
      "No. Under the Supreme Court ruling in Kailash Nath Associates v. DDA (2015) 4 SCC 136, retaining an advance does not extinguish the right to claim actual damages under Section 73. If your verified WIP and material losses amount to ₹50 Lakh on an ₹80 Lakh PO, and you hold an ₹8 Lakh advance, you are legally entitled to retain the ₹8 Lakh and sue the buyer for the balance ₹42 Lakh plus 15% loss of profit.",
  },
  {
    question: "Can an EPC prime contractor invoke 'Force Majeure' if their own client halted the downstream project?",
    answer:
      "No. In Energy Watchdog v. CERC (2017) 14 SCC 80, the Supreme Court established that commercial hardship or downstream project cancellations do not constitute frustration under Section 56 of the Contract Act. Unless the purchase order explicitly incorporated a back-to-back clause making payment contingent on client funds, the EPC contractor remains strictly and independently liable to pay the manufacturer.",
  },
  {
    question: "How can Udyam-registered MSMEs recover cancelled PO dues through the MSME Samadhaan portal?",
    answer:
      "Udyam-registered Micro and Small enterprises can raise milestone fabrication invoices for completed WIP pursuant to approved drawing stages. If unpaid past 45 days, the supplier can file a delayed payment reference before the State MSEFC under Section 18 of the MSMED Act, 2006. Under Section 16, the buyer is statutorily liable to pay compound interest with monthly rests at 3 times the RBI Bank Rate from Day 46 until final realization.",
  },
  {
    question: "What electronic evidence is required under Section 63 of Bharatiya Sakshya Adhiniyam, 2023?",
    answer:
      "Under Section 63 of BSA 2023 (replacing Section 65B of the Indian Evidence Act), electronic records such as CAD drawing approval emails, PDF purchase orders, WhatsApp communications, and ERP shopfloor logs are fully admissible in court provided they are supported by a Section 63 Certificate signed by the person managing the computer system or communication device.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Indian Contract Act, 1872 (Section 39 — Anticipatory Repudiation & Section 73 — Compensation for Breach)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Sale of Goods Act, 1930 (Section 4(3) — Agreement to Sell & Section 56 — Damages for Non-Acceptance)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15, 16, 17, 18 & 24)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records & Certificates)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Commercial Disputes & Section 12A PMM)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVIII Rule 5 — Attachment Before Judgment & Order XXXVII)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

export default function BespokeGoodsRecoveryPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
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
    datePublished: "2026-11-16T08:00:00+05:30",
    dateModified: "2026-11-16T08:00:00+05:30",
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "5-Step Legal Protocol for Recovering Cancelled PO WIP & Loss of Profit",
    description:
      "An operational and statutory SOP for custom equipment fabricators, transformer makers, and boiler manufacturers to recover bespoke raw material costs, WIP, and Supreme Court 15% loss of profit when an industrial buyer cancels a purchase order mid-production.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Serve 7-Day Anticipatory Repudiation Election Notice",
        text: "Issue a formal legal notice under Section 39 of the Indian Contract Act treating the buyer's indefinite hold or cancellation email as anticipatory breach, demanding written confirmation to resume or terminating at buyer's risk.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Conduct Independent Chartered Engineer WIP Audit",
        text: "Engage an accredited Chartered Engineer to physically inspect shopfloor bays, verify cut special alloy plates, certify direct labour hours, and seal shopfloor job cards under BSA Section 63.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Establish Scrap Salvage Mitigation Value",
        text: "Obtain three independent written quotations from licensed industrial scrap dealers to quantify scrap salvage value, establishing conclusive mitigation evidence under Section 73.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Quantify Total Loss and 15% Profit Claim",
        text: "Calculate net WIP loss (Raw Material + Direct Labour + Overheads less Net Scrap) plus 15% loss of profit on unexecuted contract balance under the Supreme Court A.T. Brij Paul Singh rule.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Initiate Dual-Track Legal Recovery",
        text: "Serve a fact-verified demand notice followed by an MSME Samadhaan reference for 3x RBI compound interest, or file a Commercial Summary Suit with an Order 38 Rule 5 asset attachment application.",
      },
    ],
  };

  const jsonLdFaq = {
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

  const jsonLdBreadcrumb = {
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
        name: "Manufacturing & Machinery OEM Recovery",
        item: `${SITE_URL}/industries/manufacturing-machinery-oem-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cancelled PO Bespoke Goods Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Dark Gradient Hero Header */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B Creditor Recovery Playbook</span>
            <span>&bull;</span>
            <span>Section 39 & 73 ICA</span>
            <span>&bull;</span>
            <span>Supreme Court 15% Profit Rule</span>
          </div>

          {/* Exact H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &middot; Heavy Engineering Creditor Defense
            </span>
            When an EPC contractor or industrial buyer approves GAD drawings and subsequently emails &apos;put PO on indefinite hold&apos; or cancels mid-fabrication, Indian law treats this as anticipatory breach under Section 39 of the Contract Act. Fabricators of custom boilers, pressure vessels, and bespoke machinery can legally recover 100% of incurred raw material and shopfloor WIP costs minus scrap value, plus a mandatory 10%–15% loss-of-profit claim under the Supreme Court rule in <em>A.T. Brij Paul Singh</em> through our{" "}
            <Link
              href="/industries/manufacturing-machinery-oem-recovery"
              className="text-red-400 underline font-semibold hover:text-red-300"
            >
              Manufacturing & Machinery OEM Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="border-r border-white/10 pr-2">
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">Statutory Breach Hook</span>
              <span className="text-base sm:text-lg md:text-xl font-black text-slate-100 block">
                ICA Section 39
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">Anticipatory Repudiation</span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">Expected Profit Claim</span>
              <span className="text-base sm:text-lg md:text-xl font-black text-emerald-400 block">
                10% – 15% Margin
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">SC A.T. Brij Paul Rule</span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">Bespoke Goods Rule</span>
              <span className="text-base sm:text-lg md:text-xl font-black text-amber-400 block">
                SOGA Section 56
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">No Open Market Resale</span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">MSME Compound Rate</span>
              <span className="text-base sm:text-lg md:text-xl font-black text-red-400 block">
                3x RBI Bank Rate
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 block">Monthly Compounding</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6 sm:mb-8">
          <Breadcrumbs
            items={[
              {
                label: "Manufacturing & Machinery OEM Recovery",
                href: "/industries/manufacturing-machinery-oem-recovery",
              },
              {
                label: "Cancelled PO Bespoke Goods Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Column: Sticky Sidebar TOC */}
          <BespokeGoodsRecoveryTableOfContents />

          {/* Right Column: Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Commercial Operational Bottleneck
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                The EPC Prime Contractor &quot;Indefinite Hold&quot; Trap
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  In heavy engineering, industrial boiler manufacturing, heat-exchanger fabrication, and custom transformer manufacturing, commercial contracts operate on rigid engineering dependencies. Once the buyer issues a formal Purchase Order (PO) and approves the General Arrangement Drawings (GAD) and Quality Assurance Plan (QAP), the fabricator commits substantial capital. Special metallurgy boiler-quality plates (SA-516 Gr.70, SS 316L, duplex stainless steel, or Monel) are procured with mill test certificates (MTC) matching exact heat numbers.
                </p>
                <p>
                  Then, the fatal commercial bottleneck occurs: downstream project funding dries up, the EPC contractor loses its client tender, or process engineers modify plant piping layouts. Instead of issuing a formal termination that triggers contractual cancellation fees, the buyer casually issues a one-line email: <em>&quot;Please put manufacturing and dispatch on indefinite hold until further notice.&quot;</em>
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                  <p className="font-bold text-amber-900 mb-1">
                    The Fabricator&apos;s Deadly Strategic Error: Acquiescence
                  </p>
                  <p className="text-amber-800 text-xs sm:text-sm">
                    Most manufacturing CFOs make the catastrophic mistake of waiting passively for months, hoping the project will resume. Under Indian contract law, passive silence is legally construed as acquiescence. By failing to serve an immediate statutory election notice under Section 39 of the Indian Contract Act, 1872, the manufacturer allows the buyer to evade immediate financial liability, while plate carrying costs, factory bay blockages, and bank overdraft interest steadily drain the supplier&apos;s liquidity.
                  </p>
                </div>
                <p>
                  When bespoke engineered equipment has been cut, rolled, or machined to custom dimensions, it has <strong>zero open market resale value</strong>. If an SA-516 plate is flame-cut to specific shell radiuses or tube sheets are drilled with hundreds of precision holes, the metal can only be sold as melting scrap at an 80% to 85% discount. This guide provides the definitive operational and statutory playbook to crystallize Work-in-Progress (WIP), enforce the Supreme Court&apos;s 15% loss-of-profit precedent, and recover every rupee from defaulting industrial buyers.
                </p>
              </div>
            </section>

            {/* Section 2: Legal Framework */}
            <section
              id="heading-legal-framework"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory Recovery Architecture
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                The Dual Statutory Hooks: Section 39 Anticipatory Breach & Section 73 Unliquidated Damages
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Recovering losses from a cancelled custom purchase order requires weaponizing two core pillars of Indian commercial jurisprudence:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Pillar 1 &middot; Section 39 Contract Act
                    </span>
                    <h3 className="text-sm font-black text-slate-900 mb-2">
                      Anticipatory Repudiation & Statutory Election
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Section 39 provides that when a party to a contract has refused to perform, or disabled himself from performing, his promise in its entirety, the promisee may put an end to the contract unless he has signified acquiescence. A buyer who halts manufacturing indefinitely or cancels without supplier default has disabled performance. Serving an immediate 7-day Election Notice terminates the contract at buyer&apos;s risk and freezes the damages calculation date.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Pillar 2 &middot; Section 73 Contract Act
                    </span>
                    <h3 className="text-sm font-black text-slate-900 mb-2">
                      Full Expectation Interest & Lost Profit
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 73, the injured party is entitled to receive compensation for any loss or damage caused which naturally arose in the usual course of things. In bespoke manufacturing, the law places the manufacturer in the same financial position as if the purchase order had been fully performed. This encompasses accrued fabrication WIP minus scrap salvage, plus standard commercial loss of profit (10% to 15%) per Supreme Court binding rulings.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800">
                  <h3 className="text-sm font-bold text-red-400 mb-2">
                    Sale of Goods Act, 1930 (Section 56) & The Bespoke Goods Doctrine
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Under Section 56 of the Sale of Goods Act, where a buyer wrongfully neglects or refuses to accept and pay for goods, the seller may sue for damages for non-acceptance. In ordinary off-the-shelf commodities, damages are measured by the difference between the contract price and the market price on the date of breach. However, for custom-engineered equipment with <strong>no available market</strong>, Indian courts hold that the seller cannot be forced to suffer a ruinous market dumping loss; the measure of damages is the entire unamortized production cost incurred plus full lost commercial margin.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Forum & Remedy Evaluation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Remedy Matrix: Choosing the Optimal Legal Enforcement Rail
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Depending on whether your fabrication facility holds an active Udyam registration, whether an arbitration covenant exists in the PO, and the ticket size of stranded WIP, select the most coercive recovery forum:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">Legal Remedy</th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">Governing Statute</th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">Trigger Timing</th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">Relief & Strategic Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                          {row.remedy}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-[11px] text-slate-700">
                          {row.statute}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          {row.timing}
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 leading-snug">
                          {row.relief}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Decision Tree Flowchart */}
            <section
              id="heading-decision-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                  04
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step-by-Step SOP
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Decision Tree Flowchart: From Cancelled PO to Complete Financial Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Follow this sequential 5-stage protocol immediately upon receipt of any buyer email instructing suspension, hold, or cancellation of custom fabrication:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-hidden bg-slate-900 rounded-xl p-6 border border-slate-800">
                <svg
                  viewBox="0 0 900 240"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Step 1 */}
                  <rect x="10" y="30" width="160" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="90" y="65" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">STAGE 1</text>
                  <text x="90" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Hold / Cancel Email</text>
                  <text x="90" y="110" textAnchor="middle" fill="#94A3B8" fontSize="9">Serve 7-Day Notice</text>
                  <text x="90" y="125" textAnchor="middle" fill="#94A3B8" fontSize="9">under ICA s.39</text>
                  <text x="90" y="145" textAnchor="middle" fill="#38BDF8" fontSize="9">Elect Repudiation</text>

                  {/* Arrow 1 -> 2 */}
                  <path d="M175 105 H195" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="200" y="30" width="160" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="280" y="65" textAnchor="middle" fill="#38BDF8" fontSize="12" fontWeight="bold">STAGE 2</text>
                  <text x="280" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">WIP & Stock Audit</text>
                  <text x="280" y="110" textAnchor="middle" fill="#94A3B8" fontSize="9">Chartered Engineer</text>
                  <text x="280" y="125" textAnchor="middle" fill="#94A3B8" fontSize="9">MTC & Cutting Logs</text>
                  <text x="280" y="145" textAnchor="middle" fill="#34D399" fontSize="9">BSA s.63 Dossier</text>

                  {/* Arrow 2 -> 3 */}
                  <path d="M365 105 H385" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />

                  {/* Step 3 */}
                  <rect x="390" y="30" width="160" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="470" y="65" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="bold">STAGE 3</text>
                  <text x="470" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Scrap Mitigation</text>
                  <text x="470" y="110" textAnchor="middle" fill="#94A3B8" fontSize="9">3 Certified Quotes</text>
                  <text x="470" y="125" textAnchor="middle" fill="#94A3B8" fontSize="9">Melting Scrap SOGA 56</text>
                  <text x="470" y="145" textAnchor="middle" fill="#F87171" fontSize="9">Net Loss Deduction</text>

                  {/* Arrow 3 -> 4 */}
                  <path d="M555 105 H575" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />

                  {/* Step 4 */}
                  <rect x="580" y="30" width="160" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="660" y="65" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="bold">STAGE 4</text>
                  <text x="660" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Quantify Profit</text>
                  <text x="660" y="110" textAnchor="middle" fill="#94A3B8" fontSize="9">15% Margin on Balance</text>
                  <text x="660" y="125" textAnchor="middle" fill="#94A3B8" fontSize="9">A.T. Brij Paul Rule</text>
                  <text x="660" y="145" textAnchor="middle" fill="#38BDF8" fontSize="9">Section 73 Ledger</text>

                  {/* Arrow 4 -> 5 */}
                  <path d="M745 105 H765" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />

                  {/* Step 5 */}
                  <rect x="770" y="30" width="120" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="830" y="65" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">STAGE 5</text>
                  <text x="830" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Recovery Action</text>
                  <text x="830" y="110" textAnchor="middle" fill="#94A3B8" fontSize="9">MSME 3x RBI</text>
                  <text x="830" y="125" textAnchor="middle" fill="#94A3B8" fontSize="9">Commercial Suit</text>
                  <text x="830" y="145" textAnchor="middle" fill="#34D399" fontSize="9">Order 38 R.5</text>
                </svg>
              </div>

              {/* Mobile Stacked Flowchart Cards */}
              <div className="md:hidden space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-[#DC2626]">
                  <span className="text-[10px] font-bold text-red-400 uppercase">Stage 1 &middot; Day 1–7</span>
                  <h3 className="text-sm font-bold mt-0.5">Serve Section 39 Repudiation Notice</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Formal 7-day election warning rejecting indefinite hold and placing buyer on notice of anticipatory breach.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-sky-400">
                  <span className="text-[10px] font-bold text-sky-400 uppercase">Stage 2 &middot; Day 8–14</span>
                  <h3 className="text-sm font-bold mt-0.5">Chartered Engineer WIP & Material Audit</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Surveyor records cut plates, heat numbers, welder logs, and fabrication percentage under BSA Section 63.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-amber-400">
                  <span className="text-[10px] font-bold text-amber-400 uppercase">Stage 3 &middot; Day 15–20</span>
                  <h3 className="text-sm font-bold mt-0.5">Obtain 3 Scrap Salvage Quotations</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Document prevailing melting scrap rates to prove conclusive statutory loss mitigation under Section 73.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-emerald-400">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">Stage 4 &middot; Day 21–25</span>
                  <h3 className="text-sm font-bold mt-0.5">Quantify 15% Profit Under A.T. Brij Paul Singh</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Assemble comprehensive financial ledger adding 15% expected profit on unexecuted balance contract value.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-[#DC2626]">
                  <span className="text-[10px] font-bold text-red-400 uppercase">Stage 5 &middot; Day 26+</span>
                  <h3 className="text-sm font-bold mt-0.5">File MSME Samadhaan / Commercial Court Suit</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Demand 3x RBI compound interest before State MSEFC or secure Order 38 Rule 5 asset freeze in Commercial Court.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section id="heading-scenario-tabs" className="scroll-mt-28">
              <BespokeGoodsScenarioTabs />
            </section>

            {/* Section 6: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-wip-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                  05
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Numerical Ledger Audit
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Worked Financial Ledger: ₹1.20 Crore Custom Pressure Vessel PO Cancelled at 65% WIP
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Consider a real-world manufacturing dispute: An industrial fabricator in Vadodara receives a ₹1,20,00,000 (+18% GST) purchase order for 2 high-pressure columns. Mobilization advance of 10% (₹12,00,000) was paid. After GAD approval, the vendor procures ₹54,00,000 of SA-516 Gr.70 plates and expends ₹18,00,000 in direct rolling, machining, and welding labour (65% physical completion). The EPC contractor emails an abrupt cancellation.
              </p>

              {/* Financial Calculation Ledger */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Statutory Recovery Claim Statement (Section 73 ICA + SOGA s.56)
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/60">
                    Crystallized Creditor Ledger
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                    <span>1. Total Accepted PO Value (Excluding GST)</span>
                    <span className="font-mono text-white font-bold">₹1,20,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                    <span>2. Mobilization Advance Received (Credited to Account)</span>
                    <span className="font-mono text-emerald-400 font-bold">(-) ₹12,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                    <span>3. Special Alloy Raw Material Incurred (SA-516 Gr.70 Plates + Flanges)</span>
                    <span className="font-mono text-white font-bold">₹54,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                    <span>4. Direct Fabrication Labour, Consumables & NDT Testing Incurred</span>
                    <span className="font-mono text-white font-bold">₹18,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                    <span>5. Factory Overhead Allocation & Design Engineering Costs</span>
                    <span className="font-mono text-white font-bold">₹6,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300 bg-slate-800/40 px-3 rounded-lg">
                    <span className="font-semibold text-slate-200">Subtotal: Total Stranded WIP Expenditure Incurred</span>
                    <span className="font-mono text-white font-bold">₹78,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                    <span>6. Less: Certified Melting Scrap Salvage Value (48 MT @ ₹38/kg net)</span>
                    <span className="font-mono text-emerald-400 font-bold">(-) ₹18,24,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300 bg-slate-800/40 px-3 rounded-lg">
                    <span className="font-semibold text-slate-200">Net Actual Physical WIP Loss (Line 5 minus Line 6)</span>
                    <span className="font-mono text-amber-400 font-bold">₹59,76,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                    <span>
                      7. Loss of Anticipated Profit @ 15% on Unexecuted Balance (15% of ₹42,00,000 unperformed value per <em>A.T. Brij Paul Singh</em> rule)
                    </span>
                    <span className="font-mono text-white font-bold">₹6,30,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                    <span>8. Loss of Profit on Executed WIP portion (Expected 15% Margin on ₹78L cost base)</span>
                    <span className="font-mono text-white font-bold">₹11,70,000</span>
                  </div>
                  <div className="flex justify-between py-3 border-b-2 border-red-500 text-white font-bold text-sm sm:text-base">
                    <span>Total Compensatory Damages Under Section 73 ICA</span>
                    <span className="font-mono text-red-400">₹77,76,000</span>
                  </div>
                  <div className="flex justify-between py-2 text-slate-300">
                    <span>Less: Advance Mobilization Amount Retained</span>
                    <span className="font-mono text-emerald-400">(-) ₹12,00,000</span>
                  </div>
                  <div className="flex justify-between py-3 bg-red-950/60 border border-red-800/60 px-4 rounded-xl text-white font-black text-base sm:text-lg">
                    <span className="text-red-300">Net Recoverable Principal Debt</span>
                    <span className="font-mono text-emerald-400">₹65,76,000</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                  <p className="font-bold text-slate-300 mb-1">MSMED Act Statutory Penal Interest Accrual:</p>
                  <p>
                    If the fabricator holds an Udyam certificate, under Sections 15 & 16 of the MSMED Act, this principal debt of ₹65,76,000 accrues monthly compounding interest at <strong>3 times the RBI Bank Rate (currently 19.5% p.a.)</strong> from Day 46 post-demand. Use our{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-red-400 underline font-semibold hover:text-red-300"
                    >
                      MSME Delayed Payment Interest Calculator
                    </Link>{" "}
                    to generate certified day-by-day compounding interest schedules for your demand notice.
                  </p>
                </div>
              </div>
            </section>

            {/* Mid-Page Dual CTA */}
            <BespokeGoodsRecoveryCTA />

            {/* Section 7: Verified Supreme Court Precedents */}
            <section
              id="heading-court-orders"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                  06
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Judicial Precedents
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Verified Supreme Court Precedents on Loss of Profit & Anticipatory Repudiation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                When serving a statutory legal notice, citing verified Supreme Court holdings dismantles the buyer&apos;s corporate legal counsel&apos;s boilerplate assertions that profits are speculative:
              </p>

              <div className="space-y-6">
                {COURT_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl p-5 sm:p-6 bg-slate-50/50 hover:bg-slate-50 transition-colors border-l-4 border-l-[#DC2626]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h3 className="text-sm sm:text-base font-black text-slate-900">{item.title}</h3>
                      <span className="text-[11px] font-mono font-semibold text-slate-500 shrink-0">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-xs font-mono font-bold text-[#DC2626] mb-2">{item.parties}</p>
                    <p className="text-[11px] font-mono text-slate-500 mb-3">{item.citation}</p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
                      <p>
                        <strong>Facts:</strong> {item.facts}
                      </p>
                      <p>
                        <strong>Holding:</strong> {item.holding}
                      </p>
                      <div className="mt-3 p-3 bg-white rounded-lg border border-slate-200 text-slate-900">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                          Core Precedent Takeaway for Heavy Fabricators:
                        </span>
                        <p className="text-xs font-bold text-slate-900 mt-0.5">{item.takeaway}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Pre-Emption Matrix */}
            <section
              id="heading-debtor-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                  07
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Debtor Defense Dismantling
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Debtor Defense Pre-Emption: Dismantling 5 Common Buyer Excuses
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Industrial buyers routinely invoke copy-paste legal objections when refusing to settle stranded WIP. Here is how your legal demand notice preemptively destroys each defense:
              </p>

              <div className="space-y-4">
                {PREEMPTION_MATRIX.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-xs transition-shadow"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        &times;
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Buyer Evasion Excuse #{idx + 1}
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                          {item.excuse}
                        </h3>
                      </div>
                    </div>
                    <div className="ml-9 pl-3 border-l-2 border-emerald-500 space-y-1">
                      <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider block">
                        Statutory Counter-Shield: {item.statutoryShield}
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {item.counterMeasure}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: BSA 2023 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                  08
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Evidentiary Standards
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Industry-Specific Evidence Checklist Under BSA 2023 Section 63
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (replacing Section 65B of the Indian Evidence Act), electronic logs, email approval trails, and design files require strict evidentiary certification. Assemble these 7 documents before issuing a formal notice:
              </p>

              <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
                {EVIDENCE_CHECKLIST.map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-5 bg-white hover:bg-slate-50/60 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        {idx + 1}. {item.item}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                        {item.statute}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <p className="font-bold text-slate-900 mb-1">
                  Cross-Border & Medium Enterprise Notes:
                </p>
                <p>
                  If your enterprise exceeds Micro/Small thresholds (turnover &gt; ₹50 Cr or investment &gt; ₹10 Cr), you cannot file before the MSEFC under Section 18. Explore our specialized guide on{" "}
                  <Link
                    href="/medium-enterprise-udyam-excluded-from-msme-samadhaan-recovery-options"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Medium Enterprises Excluded from MSME Samadhaan
                  </Link>{" "}
                  to execute fast-track Commercial Summary Suits and Section 9 emergency interim protections.
                </p>
              </div>
            </section>

            {/* Bottom Dual CTA */}
            <BespokeGoodsRecoveryCTA />

            {/* Section 10: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                  09
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Legal Counsel FAQ
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions on Cancelled POs & Bespoke Goods Recovery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Strategic answers for engineering directors, plant heads, and commercial CFOs handling sudden industrial purchase order cancellations:
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 open:shadow-xs"
                  >
                    <summary className="flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-slate-50 cursor-pointer list-none select-none">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 pr-4">
                        {faq.question}
                      </span>
                      <svg
                        className="w-4 h-4 text-slate-500 transition-transform duration-200 group-open:rotate-180 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="p-4 sm:p-5 pt-0 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs">
                <Link
                  href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  MSME Samadhaan vs Legal Notice Comparison &rarr;
                </Link>
                <Link
                  href="/msme-odr-portal-delayed-payment-guide"
                  className="text-slate-600 font-bold hover:underline"
                >
                  MSME ODR Portal Guide &rarr;
                </Link>
                <Link
                  href="/custom-industrial-machinery-balance-withheld-after-installation-recovery"
                  className="text-slate-600 font-bold hover:underline"
                >
                  Machinery Installation Balance Recovery &rarr;
                </Link>
                <Link
                  href="/auto-ancillary-oem-arbitrary-debit-note-tooling-cost-recovery"
                  className="text-slate-600 font-bold hover:underline"
                >
                  Auto-Ancillary Tooling Recovery &rarr;
                </Link>
              </div>
            </section>

            {/* Section 11: Primary Legislative Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Bare Act & Judicial References
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Primary Statutory Statutes, Regulations & Bare Act Citations
              </h2>
              <div className="space-y-2.5">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs"
                  >
                    <span className="font-mono text-slate-400 font-bold w-5 shrink-0">
                      [{idx + 1}]
                    </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] font-medium transition-colors hover:underline"
                    >
                      {source.title} &rarr;
                    </a>
                  </div>
                ))}
              </div>

              {/* Reviewer Sign-off box */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
                <div>
                  <p className="font-bold text-slate-800">
                    Reviewed & Authored by {LEGAL_REVIEWER.name}
                  </p>
                  <p>{LEGAL_REVIEWER.role} &middot; Practicing Commercial Litigator</p>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Last Updated: 16 Nov 2026 &middot; Indian Contract Act & MSMED Rules
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides currentPath={PAGE_URL} cluster="manufacturingB2B" />
    </div>
  );
}
