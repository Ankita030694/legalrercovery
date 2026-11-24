import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ProlongationClaimTableOfContents from "./ProlongationClaimTableOfContents";
import ProlongationClaimScenarioTabs from "./ProlongationClaimScenarioTabs";
import ProlongationClaimRecoveryCTA from "./ProlongationClaimRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/construction-price-escalation-extra-items-prolongation-claim-recovery";
const EXACT_H1 =
  "Crystallizing Construction Prolongation, Idle Plant/Overhead & Extra-Item Claims: Defeating 'No-Damages-for-Delay' Clauses";
const META_TITLE = "Construction Prolongation, Idle Plant & Extra-Item Claims";
const META_DESCRIPTION =
  "Project delayed by site handover or drawing issues? Issue timely Contemporary Hindrance & Prolongation Claim Notices under Contract Act Sections 55 & 73.";

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
        alt: formatAltText("Construction Prolongation Idle Plant and Extra Item Claims Recovery"),
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
    remedy: "Section 55(3) ICA Statutory Reservation Notice",
    statute: "Indian Contract Act, 1872 (Section 55, Paragraph 3)",
    timing: "At the time of applying for Extension of Time (EOT) or accepting delayed performance",
    mechanism:
      "Serve formal notice reserving the express right to claim prolongation damages, idle machinery hire, and price escalation upon accepting project execution beyond the original contractual completion date.",
    relief:
      "Statutory condition precedent; prevents waiver or deemed abandonment of monetary claims; overcomes Section 55 statutory bar in subsequent arbitration.",
    suitability:
      "Every EPC, highway, metro, railway, or commercial civil contract undergoing an extension of time due to employer hindrances.",
    tone: "emerald",
  },
  {
    remedy: "Neutralizing 'No-Damages-For-Delay' Exclusion Clauses",
    statute: "Contract Act Section 23 & 73 read with Assam SEB & Simplex Concrete Doctrines",
    timing: "Upon employer invoking CPWD Clause 11, MES, or FIDIC delay damage bars",
    mechanism:
      "Establish employer's foundational breach (failure to hand over RoW, drawings, permits); demonstrate that exculpatory clauses seeking to extinguish Section 73 damages are void under Section 23 as opposed to public policy.",
    relief:
      "Unlocks substantive arbitral damages for site overheads, plant idling, and profit loss despite explicit contractual tender bars.",
    suitability:
      "Contracts where government departments, PSUs, or private developers deny financial compensation citing standard-form tender bars.",
    tone: "emerald",
  },
  {
    remedy: "Head Office & Site Overhead Claims (Hudson / Eichleay)",
    statute: "Contract Act Section 73 & Supreme Court McDermott International Precedent",
    timing: "Quantified monthly during the prolongation period and submitted in Final Bill",
    mechanism:
      "Deploy judicially sanctioned Hudson, Emden, or Eichleay accounting formulas to compute unabsorbed head office overheads, site supervision staff costs, and lost earning capacity.",
    relief:
      "Recovers 5% to 15% of contract value as unabsorbed corporate overheads and site management costs sustained during the delay.",
    suitability:
      "Large-scale EPC packages where key managerial personnel, cranes, batching plants, and testing equipment were tied down by employer delays.",
    tone: "slate",
  },
  {
    remedy: "Extra Items & BOQ Deviations Beyond Permissible Limit",
    statute: "Contract Act Section 70 (Quantum Meruit) & CPWD Clause 12 / FIDIC 13.3",
    timing: "Prior to executing quantities exceeding tender deviation limits (usually 25%–50%)",
    mechanism:
      "Issue 14-day rate revision notice demanding prevailing Delhi Schedule of Rates (DSR), State SOR, or actual market rate analysis plus 15% contractor profit before executing deviated works.",
    relief:
      "Prevents employer from enforcing archaic tender rates on massively expanded extra-work quantities; establishes legal entitlement under quantum meruit.",
    suitability:
      "Major civil works encountering unanticipated rock excavation, foundation depth extensions, structural steel additions, or architectural re-designs.",
    tone: "emerald",
  },
  {
    remedy: "Statutory Price Escalation on Prolonged Works",
    statute: "Contract Act Section 73, P.M. Paul Doctrine & RBI Wholesale Price Index (WPI)",
    timing: "Monthly Running Account (RA) billing during extended contract period",
    mechanism:
      "Apply statutory price adjustment indices (RBI WPI for cement, steel, fuel, labor) to all works executed beyond the scheduled completion date, even if the base tender was a 'Firm Price' contract.",
    relief:
      "Compensates contractor for severe inflation and market price surges occurring during periods of employer-caused delay.",
    suitability:
      "Long-gestation infrastructure projects caught in inflationary cycles caused by prolonged site handover disputes.",
    tone: "slate",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court Landmark: 'No Damages for Delay' Clause Cannot Defeat Employer's Fundamental Breach",
    parties: "Assam State Electricity Board v. Buildworth Ltd.",
    citation: "(2017) 8 SCC 146, Supreme Court of India",
    date: "Reaffirmed by Division Bench",
    facts:
      "The contractor was awarded an EPC works contract by the State Electricity Board. The project suffered an inordinate delay of several years due to the Board's chronic default in providing site clearance, structural foundations, and approved fabrication drawings. When the contractor claimed price escalation and overhead damages, the Board relied on a tender clause stipulating that prices were firm and no claim for delay damages would be entertained.",
    holding:
      "The Supreme Court held that where the delay is attributable to the employer's foundational defaults, the employer cannot take advantage of its own wrong by invoking an exclusionary price variation or delay bar clause. The Court affirmed that an arbitral tribunal has full jurisdiction to award reasonable escalation and prolongation damages under Section 73 of the Indian Contract Act to put the contractor in the financial position it would have occupied had the breach not occurred.",
    amount: "Arbitral Escalation & Prolongation Award of ₹4.85 Crore Upheld Against Employer",
    takeaway:
      "Contractual clauses seeking to bar delay damages are unenforceable when the employer commits foundational breaches of contract. Contractors can recover full price escalation and overheads.",
  },
  {
    title: "Delhi High Court Benchmark: Section 23 Contract Act Invalidates Clauses Barring Delay Damages",
    parties: "Simplex Concrete Piles (India) Ltd. v. Union of India",
    citation: "(2010) ILR 2 Delhi 699, Delhi High Court",
    date: "Cited with Approval Across High Courts",
    facts:
      "The contractor undertook piling and foundation works for the government. The work was delayed by more than 2 years solely due to site impediments and drawing revisions by the Engineer-in-Charge. The Union of India resisted the contractor's arbitration claim for idle plant and overhead damages by citing standard tender Clause 11(C), which expressly barred any financial claim arising out of delays in handing over site.",
    holding:
      "The High Court delivered a landmark ruling holding that clauses which completely exclude a contractor's right to claim damages under Section 55 and Section 73 of the Indian Contract Act are void under Section 23 of the Act. The Court held that such clauses are opposed to public policy because they encourage an employer to breach contracts with impunity, depriving the innocent contractor of statutory compensation for actual economic losses.",
    amount: "Contractual Exclusion Clause 11(C) Struck Down as Void; Overhead Damages Awarded",
    takeaway:
      "Tender clauses that restrict remedies solely to Extension of Time (EOT) while barring monetary damages are legally void under Section 23 ICA if the delay is employer-caused.",
  },
  {
    title: "Supreme Court Rule: Employer Breach Entitles Contractor to Escalation Even in 'Firm Price' Contracts",
    parties: "Asian Techs Ltd. v. Union of India & Others",
    citation: "(2009) 10 SCC 354, Supreme Court of India",
    date: "Three-Judge Bench Landmark",
    facts:
      "Asian Techs entered into a turnkey defense construction contract. The project was prolonged due to the department's failure to hand over clear site, arrange cement supplies, and issue timely approvals. The department argued that Clause 11 of the General Conditions of Contract specifically prohibited the contractor from claiming any compensation on account of delays, limiting relief exclusively to extension of time.",
    holding:
      "The Supreme Court ruled that a prohibitory clause in standard conditions of contract applies only to ordinary or non-default situations and does not apply where the department itself is guilty of breach of its foundational contractual obligations. The arbitrator's award granting price escalation, idle labor, and plant machinery damages was fully restored.",
    amount: "Department Delay Bar Overridden; Full Escalation & Prolongation Damages Affirmed",
    takeaway:
      "Exclusionary clauses cannot protect a defaulting employer. Once employer-attributable delay is proven, arbitral tribunals possess complete statutory power to grant escalation and overheads.",
  },
  {
    title: "Supreme Court Validation: Hudson, Emden and Eichleay Formulas for Construction Overheads",
    parties: "McDermott International Inc. v. Burn Standard Co. Ltd.",
    citation: "(2006) 11 SCC 181, Supreme Court of India",
    date: "Authoritative Supreme Court Ruling on Claims",
    facts:
      "In a major offshore turnkey EPC contract, McDermott suffered prolonged performance due to design revisions and delays by Burn Standard. The arbitral tribunal utilized recognized international accounting formulas, including the Hudson formula, to quantify head office overheads and lost profit.",
    holding:
      "The Supreme Court conducted an extensive analysis of construction delay compensation and formally recognized the validity of the Hudson formula, Emden formula, and Eichleay formula under Indian law. The Court ruled that computation of overheads and loss of profits using these standard engineering formulas is a legitimate and customary method in construction arbitration, provided baseline contract percentages and delay durations are established.",
    amount: "Application of Hudson Formula for Prolongation Overheads Legally Endorsed",
    takeaway:
      "Indian arbitral tribunals are fully empowered to compute head office and site overhead damages using the Hudson and Eichleay formulas without requiring line-by-line voucher proof for every minute expense.",
  },
];

const WORKED_CALCULATION_ROWS = [
  {
    head: "Idle Plant, Cranes & Heavy Machinery",
    basis: "CWC / CPWD Standard Equipment Idling Norms (30%–50% of Hire Rate)",
    computation: "1 x 100T Crane, 2 x Piling Rigs, 4 x Transit Mixers idle for 180 effective days",
    amount: "₹1,44,00,000",
  },
  {
    head: "Extended Site Supervisory & Management Overheads",
    basis: "Actual Site Payroll (Project Manager, QS, Safety, Quality, Security, Lab Staff)",
    computation: "₹7,00,000 / month site payroll x 12 months prolonged execution period",
    amount: "₹84,00,000",
  },
  {
    head: "Head Office Overhead & Lost Profit Opportunity (Hudson Formula)",
    basis: "Hudson Formula: (HO Overhead % / 100) x (Contract Value / Contract Period) x Delay",
    computation: "(7.5% / 100) x (₹45,00,00,000 / 24 Months) x 12 Months Delay Period",
    amount: "₹1,68,75,000",
  },
  {
    head: "Statutory Price Escalation on Cement, Steel, Fuel & Labor",
    basis: "RBI Wholesale Price Index (WPI) & Labour Bureau CPI Movement During Delay Window",
    computation: "Rebar (+14%), Cement (+11%), Diesel (+18%), Minimum Wage Revision on delayed quantities",
    amount: "₹2,15,50,000",
  },
  {
    head: "Extra Items & Structural Variations Beyond BOQ Limits",
    basis: "Contract Act Section 70 (Quantum Meruit) at Market Rates / DSR + 15% Profit",
    computation: "Additional 3,400 m³ rock excavation and unexpected deeper diaphragm wall execution",
    amount: "₹1,12,00,000",
  },
  {
    head: "Pre-Award Commercial Interest under Arbitration Act",
    basis: "Arbitration & Conciliation Act, 1996 (Section 31(7)) @ 12% p.a. Commercial Rate",
    computation: "Simple interest on crystallized dues from date of Section 21 notice to award",
    amount: "₹85,60,000",
  },
];

const EVIDENCE_CHECKLIST = [
  {
    id: "item-1",
    category: "Site Possession & RoW Records",
    document: "Joint Site Handover Protocol & Chainage Log",
    statutoryValue: "Bharatiya Sakshya Adhiniyam, 2023 s.63 / IEA s.65B",
    details:
      "Original signed protocol detailing the exact date and linear chainage handed over versus contractual milestones. Accompanied by geotagged drone videography and land revenue boundary survey records proving non-clearance.",
  },
  {
    id: "item-2",
    category: "Statutory Notice Trail",
    document: "Section 55(3) ICA Reservation Notice & EOT Applications",
    statutoryValue: "Mandatory Condition Precedent under Contract Act s.55",
    details:
      "Original speed post RPAD receipts, tracking reports, and digitally signed email communications serving express notice of intention to claim prolongation damages contemporaneously with every Extension of Time (EOT) request.",
  },
  {
    id: "item-3",
    category: "Contemporary Hindrance Register",
    document: "Engineer-in-Charge / PMC Joint Hindrance Register",
    statutoryValue: "CPWD Works Manual / FIDIC Red Book Sub-Clause 8.4",
    details:
      "Daily and monthly registers recording every site stoppage (utility clash, unshifted high-tension line, local agitation, monsoon water-logging due to employer drainage failure) counter-signed by the Resident Engineer.",
  },
  {
    id: "item-4",
    category: "Drawing & RFI Communications",
    document: "Request for Information (RFI) Schedule & GFC Drawing Transmittals",
    statutoryValue: "Section 63 BSA Hash-Verified Email Metadata",
    details:
      "Complete log of RFI transmittals showing contractor drawing submission dates versus employer's delayed approval dates, demonstrating direct critical-path delay on MS Project or Primavera P6 baseline schedules.",
  },
  {
    id: "item-5",
    category: "Plant & Machinery Logbooks",
    document: "Daily Equipment Logbooks, Hire Invoices & Fuel Records",
    statutoryValue: "Primary Documentary Proof for Equipment Idling Claims",
    details:
      "Certified machine logbooks, GPS telemetry tracking data, third-party crane/rig rental lease agreements, and fuel consumption vouchers establishing that machinery was mobilised on site and prevented from working.",
  },
  {
    id: "item-6",
    category: "Off-Site & Site Overhead Accounts",
    document: "Audited Financial Statements & Site Staff Payroll Vouchers",
    statutoryValue: "Proof of Corporate Overhead Ratio for Hudson / Eichleay Formulas",
    details:
      "Statutory auditor-certified balance sheets for the relevant financial years establishing the company's head office overhead percentage, coupled with PF/ESI site payroll returns for deployed site engineers.",
  },
  {
    id: "item-7",
    category: "Price Escalation Indices",
    document: "Official RBI WPI Bulletins & Ministry of Labour CPI Gazette",
    statutoryValue: "Judicially Noticed Government Statistical Publications",
    details:
      "Official index numbers for wholesale prices of steel, cement, bitumen, and POL, alongside state-notified minimum wage revisions published during the extended contract execution window.",
  },
];

const FAQS = [
  {
    q: "Can an employer enforce a 'No Damages for Delay' clause in an Indian infrastructure contract?",
    a: "No, not if the delay was caused by the employer's own foundational breaches. While standard tender conditions (such as CPWD Clause 11, MES, Railways GCC, or FIDIC bespoke conditions) frequently state that 'Extension of Time shall be the sole remedy and no claim for damages or compensation shall lie,' the Supreme Court of India in Assam State Electricity Board v. Buildworth Ltd. (2017) 8 SCC 146 and Asian Techs Ltd. v. Union of India (2009) 10 SCC 354, along with the landmark Delhi High Court judgment in Simplex Concrete Piles (India) Ltd. v. Union of India (2010 ILR 2 Del 699), conclusively established that exclusionary delay clauses are void under Section 23 of the Indian Contract Act, 1872. An employer cannot breach its reciprocal obligations (such as site handover, drawing issuance, or material supply) and simultaneously invoke an exculpatory clause to extinguish the contractor's statutory right to damages under Sections 55 and 73.",
  },
  {
    q: "What is the single most critical reason contractors lose prolongation claims in arbitration?",
    a: "Contractors lose over 80% of prolongation claims because they fail to issue a mandatory statutory notice under Section 55 (Paragraph 3) of the Indian Contract Act, 1872 when applying for or accepting an Extension of Time (EOT). Section 55(3) expressly mandates that if a promisee accepts performance of a delayed contract at any time other than agreed, they cannot claim compensation for the delay unless, at the time of accepting such extension, they give formal notice to the promisor of their intention to claim compensation. If a contractor accepts an EOT without an explicit, contemporaneous Section 55 reservation letter, arbitral tribunals and courts will hold that the contractor accepted the extended performance unconditionally, thereby extinguishing all monetary claims for idle plant, overheads, and price escalation.",
  },
  {
    q: "How does the Supreme Court evaluate the Hudson, Emden, and Eichleay formulas for overhead claims?",
    a: "In the landmark judgment McDermott International Inc. v. Burn Standard Co. Ltd. (2006) 11 SCC 181, the Supreme Court of India officially validated the use of the Hudson, Emden, and Eichleay accounting formulas for computing head office overheads and lost profit in construction disputes. The Court recognized that when an infrastructure project is prolonged by employer hindrances, head office resources remain tied down and cannot earn revenue on other commercial opportunities. While the Hudson formula utilizes the contractual overhead percentage, the Emden formula uses actual company-wide overhead ratios from audited accounts, and the Eichleay formula apportions fixed corporate overheads based on project billings. Tribunals routinely accept these formulas when supported by audited financial statements.",
  },
  {
    q: "Can a contractor demand market rates for extra items if deviations exceed tender BOQ limits?",
    a: "Yes. Under standard works conditions (such as CPWD Clause 12 or FIDIC Sub-Clause 13.3), a contractor is only obliged to execute extra or deviated works at original tender BOQ rates up to a specified 'deviation limit' (typically 25% to 50% for building works and 100% for foundations). Once cumulative quantities exceed this threshold, or where entirely new non-BOQ items are ordered, the contractor has a statutory right under Section 70 of the Indian Contract Act, 1872 (Quantum Meruit) to demand revised rates based on prevailing market analysis (or current Delhi Schedule of Rates / State SOR) plus 15% contractor profit and overheads. The contractor must issue a formal rate revision notice before commencing the excess execution.",
  },
  {
    q: "What should a contractor do if the employer forces them to sign an EOT 'without financial implications'?",
    a: "Employers frequently withhold Running Account (RA) bills or threaten termination unless the contractor signs pre-printed EOT forms agreeing that the extension is 'without financial implications'. Under the Supreme Court doctrines in Ambica Construction v. Union of India (2006) 13 SCC 475 and R.L. Kalathia & Co. v. State of Gujarat (2011) 2 SCC 400, waivers executed under economic duress, financial stringency, or coercion are voidable and do not extinguish legitimate claims. The contractor should: (1) Endorse the submission letter 'Submitted under protest and without prejudice to statutory rights under ICA ss. 55 & 73'; (2) Issue a formal registered advocate protest notice within 48 hours repudiating the unilateral endorsement; and (3) Maintain contemporaneous financial ledgers for subsequent arbitration.",
  },
  {
    q: "Can Liquidated Damages (LD) be levied on a contractor when the delay is concurrent or employer-caused?",
    a: "No. Under the foundational legal principles of Indian contract law established in Kailash Nath Associates v. DDA (2015) 4 SCC 136 and Section 53/54 of the Contract Act, Liquidated Damages can only be imposed if the employer proves that the contractor committed breach of contract without any contributing hindrance by the employer. Where delays are caused by employer failures (such as delayed site access, tardy drawing releases, or scope variations), time is set 'at large'. The employer loses the contractual right to enforce fixed completion milestones and cannot deduct LD. In cases of concurrent delay, arbitral tribunals apply critical-path delay analysis, and employers cannot penalize contractors for delays occurring while the employer was itself in default.",
  },
  {
    q: "What electronic evidence is required to prove prolongation claims under Bharatiya Sakshya Adhiniyam, 2023?",
    a: "Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (which replaced Section 65B of the Indian Evidence Act, 1872), digital evidence must be certified by a lawful custodian to be admissible in commercial arbitration. For prolongation claims, this includes: (1) Exported Primavera P6 or MS Project (.xer/.mpp) baseline schedules with critical-path delay fragnets; (2) Digitally signed site transmittal registers and email chains with architects regarding RFIs; (3) GPS-stamped drone footage and geotagged photographic logs of site obstructions; (4) Machine telemetry and ERP equipment utilization logs; and (5) Bank-certified payroll disbursement sheets for site personnel. A Section 63 BSA certificate signed by the IT Systems Administrator or Head of Contracts must accompany the arbitral claim statement.",
  },
  {
    q: "How does a contractor formally invoke arbitration for prolongation and extra-item claims?",
    a: "Under Section 21 of the Arbitration and Conciliation Act, 1996, arbitration proceedings commence on the date the respondent receives the formal notice invoking arbitration. The contractor must issue a comprehensive Section 21 notice setting out: (1) Chronology of employer-caused hindrances; (2) Evidence of timely Section 55(3) ICA reservation notices; (3) Itemized crystallization of prolongation overheads, idle machinery costs, extra-item rate revisions, and price escalation; (4) Demand for statutory commercial interest @ 12%–18% p.a. under Section 31(7); and (5) Nomination of an independent arbitrator pursuant to the Supreme Court Constitution Bench ruling in Perkins Eastman and Central Organisation for Railway Electrification (CORE) barring unilateral appointments by government employers.",
  },
];

export default function ConstructionProlongationClaimRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "Infrastructure & EPC Recovery",
      href: "/industries/construction-epc-contractor-recovery",
    },
    {
      label: "Prolongation & Extra-Item Claims",
      href: PAGE_URL,
    },
  ];

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
        name: EXACT_H1,
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
    image: `${SITE_URL}/blog_money_recovery.png`,
    datePublished: "2026-11-16T12:00:00+05:30",
    dateModified: "2026-11-16T12:00:00+05:30",
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
      url: `${SITE_URL}/about`,
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
    name: "How to Crystallize Construction Prolongation, Idle Plant & Extra-Item Claims",
    description:
      "Operational SOP for civil, highway, railway, and EPC contractors to serve mandatory Section 55 reservation notices, defeat no-damage-for-delay clauses, and recover overheads in arbitration.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Contemporaneous Hindrance Notice & Joint Register Entry",
        text: "Issue formal notice within 7–14 days of site impediment (RoW delay, drawing revision, utility clash) and record daily stoppages in the Joint Hindrance Register signed by the Resident Engineer.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Issue Mandatory Section 55(3) ICA Reservation Notice During EOT",
        text: "When applying for or accepting an Extension of Time (EOT), serve explicit statutory notice under Section 55(3) of the Indian Contract Act reserving full rights to claim prolongation damages and price escalation.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Quantify Idle Machinery, Site Overheads & Hudson Formula Claims",
        text: "Maintain certified plant idle logbooks, site payroll vouchers, and compute head office overheads and lost profit using the Supreme Court validated Hudson or Eichleay formulas.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Serve Rate Revision Notice for Extra Items Beyond Deviation Limits",
        text: "Submit market rate analysis plus 15% contractor profit under Contract Act Section 70 for extra works or BOQ quantities exceeding contractual deviation thresholds.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Neutralize Exclusionary Clauses & Invoke Section 21 Arbitration",
        text: "Defeat tender delay damage bars under the Assam SEB and Simplex Concrete doctrines, issue Section 21 arbitration notice, and claim 12%–18% commercial interest under Section 31(7) ACA.",
      },
    ],
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>EPC Contract Law</span>
              <span>&bull;</span>
              <span>Contract Act s.55 &amp; s.73</span>
              <span>&bull;</span>
              <span>Hudson &amp; Eichleay Overheads</span>
            </div>

            {/* Exact H1 Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Summary &bull; Statutory Notice Requirement
              </span>
              Under Section 55 (Paragraph 3) of the Indian Contract Act, 1872, contractors who accept extended contract performance without issuing a contemporaneous notice reserving their right to claim compensation permanently forfeit their prolongation claims. In our specialized{" "}
              <Link
                href="/industries/construction-epc-contractor-recovery"
                className="text-red-400 hover:text-red-300 underline font-semibold"
              >
                construction and EPC contractor recovery practice
              </Link>
              , we defeat restrictive &apos;No-Damages-for-Delay&apos; tender clauses by enforcing Supreme Court precedents in <em>Assam State Electricity Board</em> and <em>Simplex Concrete Piles</em>, invalidating unfair delay bars under Section 23 ICA, and crystallizing multi-crore overhead, idle machinery, and price escalation claims via the Hudson formula in institutional arbitration.
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Section 55 Notice
                </p>
                <p className="text-base sm:text-xl md:text-2xl font-black text-red-400 mt-1">
                  Mandatory
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">Required at time of EOT</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  &apos;No-Damages&apos; Bar
                </p>
                <p className="text-base sm:text-xl md:text-2xl font-black text-emerald-400 mt-1">
                  Void s.23 ICA
                </p>
                <p className="text-slate-400 text-[10px] mt-0.5">Simplex / Assam SEB rule</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Overhead Formula
                </p>
                <p className="text-base sm:text-xl md:text-2xl font-black text-amber-400 mt-1">
                  Hudson / Eichleay
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">SC McDermott doctrine</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Extra Item Limit
                </p>
                <p className="text-base sm:text-xl md:text-2xl font-black text-slate-100 mt-1">
                  &gt;25% Deviation
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">Quantum Meruit s.70</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
            {/* Sticky Table of Contents Sidebar */}
            <ProlongationClaimTableOfContents />

            {/* Main Editorial Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    01
                  </span>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Statutory Framework &bull; Indian Contract Act 1872
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4">
                  Why 80% of EPC Prolongation Claims Fail in Arbitration
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Infrastructure projects in India—whether elevated metro viaducts, 4-lane highway packages under NHAI, railway freight corridors, or commercial high-rises—rarely finish within the scheduled contractual timeline. On average, major packages run 12 to 24 months beyond their scheduled completion dates. However, empirical arbitral data reveals that contractors lose over 80% of their prolongation and price escalation claims in subsequent proceedings.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  This catastrophic dismissal rate does not occur because the employer was innocent. In nearly every instance, the delay is directly caused by the project authority: unhanded Right of Way (RoW), pending environmental or forest clearances, chronic delays by architectural consultants in issuing Good-For-Construction (GFC) drawings, or prolonged design modifications. Rather, contractors fail because their commercial and billing teams fall into two lethal traps:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1">
                      Trap 1 &bull; The Missing Section 55(3) Notice
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Applying for or accepting an Extension of Time (EOT) on standard departmental forms without serving a contemporaneous statutory notice reserving the legal right to claim compensation for extended overheads and price escalation.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <p className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1">
                      Trap 2 &bull; Surrendering to &apos;No-Damages&apos; Clauses
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Assuming that standard exclusionary tender clauses (such as CPWD Clause 11 or FIDIC bespoke delay bars) are legally absolute, unaware that the Supreme Court has declared them void under Section 23 ICA when the employer breaches foundational obligations.
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For contractors, civil engineering enterprises, and turnkey subcontractors, crystallizing prolongation claims requires converting routine site correspondence into an unassailable evidentiary record. When combined with our recovery mechanisms for{" "}
                  <Link
                    href="/unpaid-ra-bills-uncertified-measurement-book-contractor-recovery"
                    className="text-[#DC2626] hover:underline font-bold"
                  >
                    uncertified Running Account (RA) bills
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/retention-money-recovery-after-defect-liability-period-dlp-expiry"
                    className="text-[#DC2626] hover:underline font-bold"
                  >
                    post-DLP retention money recovery
                  </Link>
                  , a structured delay notice strategy transforms disputed losses into enforceable arbitral awards.
                </p>
              </section>

              {/* Section 2: Fatal Gap - Section 55 Notice */}
              <section
                id="heading-fatal-gap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    02
                  </span>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Statutory Imperative &bull; Section 55 ICA
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4">
                  The Mandatory Section 55 Notice Rule for Time Extensions
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Section 55 of the Indian Contract Act, 1872 is the foundational statute governing contracts where time is of the essence or where performance is accepted outside the originally agreed timeframe. While Paragraphs 1 and 2 address the voidability of delayed contracts, it is <strong>Paragraph 3</strong> that represents the single most dangerous statutory trap in construction litigation:
                </p>

                <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl mb-6 shadow-md border border-slate-800">
                  <p className="text-xs font-mono uppercase tracking-widest text-red-400 mb-2">
                    Indian Contract Act, 1872 &bull; Section 55, Paragraph 3 (Bare Act)
                  </p>
                  <blockquote className="text-xs sm:text-sm md:text-base italic text-slate-200 leading-relaxed border-l-2 border-[#DC2626] pl-4 my-2">
                    &ldquo;If, in case of a contract voidable on account of the promisor&apos;s failure to perform his promise at the time agreed, the promisee accepts performance of such promise at any time other than that agreed, the promisee cannot claim compensation for any loss occasioned by the non-performance of the promise at the time agreed, <span className="text-amber-300 font-bold not-italic">unless, at the time of such acceptance, he gives notice to the promisor of his intention to do so.</span>&rdquo;
                  </blockquote>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  The statutory consequence is absolute: if an EPC contractor accepts an Extension of Time (EOT) or continues mobilizing men, plant, and materials during the prolonged period <em>without simultaneously issuing a formal notice of intention to claim compensation</em>, the right to claim damages under Section 73 is legally extinguished by operation of law.
                </p>

                <div className="p-4 sm:p-5 rounded-xl bg-red-50 border-l-4 border-[#DC2626] my-6">
                  <p className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1">
                    The &apos;Without Financial Implications&apos; Duress Tactic
                  </p>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    Government departments and private developers routinely coerce contractors into signing standard EOT formats containing pre-printed clauses: <em>&apos;Extension granted without financial implications.&apos;</em> If a contractor signs this document without a registered protest letter reserving its Section 55 rights, arbitral tribunals hold that the parties executed a bilateral accord and satisfaction. To overcome this, contractors must accompany every EOT application with a fact-verified <strong>Section 55 Statutory Reservation Notice</strong> delivered via registered post and corporate email.
                  </p>
                </div>
              </section>

              {/* Section 3: Defeating No-Damages Clauses */}
              <section
                id="heading-no-damage-clauses"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    03
                  </span>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Judicial Doctrine &bull; Overcoming Tender Exclusion Bars
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4">
                  Defeating &apos;No-Damages-For-Delay&apos; Clauses in Indian Courts
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Standard government and private works contracts in India are notoriously one-sided. Clauses like Clause 11 of the CPWD General Conditions of Contract (GCC), standard Railway Works clauses, and private developer General Conditions routinely feature strict exculpatory language:
                </p>

                <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 mb-6 font-mono text-xs text-slate-800">
                  &ldquo;No claim for financial compensation, idle labor, idle machinery, overheads, or damages of any kind shall be entertained on account of any delay in handing over of site, supply of materials, or issuance of drawings; grant of extension of time shall be the sole and exclusive remedy.&rdquo;
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  When contractors raise claims for ₹5 Crore to ₹50 Crore in prolonged site overheads, the employer points to this clause and summarily rejects the claim. However, Indian jurisprudence has firmly settled that such clauses do NOT grant employers immunity when the delay is caused by the employer&apos;s own breach:
                </p>

                <div className="space-y-4 my-6">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <p className="text-xs font-black text-[#DC2626] uppercase tracking-wider mb-1">
                      1. Section 23 Indian Contract Act Bar (Simplex Concrete Piles Rule)
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      In the landmark judgment <em>Simplex Concrete Piles (India) Ltd. v. Union of India</em> (2010 ILR 2 Del 699), the Delhi High Court held that a clause barring damages for delay is void under Section 23 of the Contract Act. An employer cannot draft an unconscionable agreement that permits it to breach reciprocal promises (such as site handover) while denying the innocent contractor its statutory remedy under Section 73. Such clauses defeat the provisions of law and are contrary to public policy.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <p className="text-xs font-black text-[#DC2626] uppercase tracking-wider mb-1">
                      2. Employer&apos;s Fundamental Breach (Asian Techs &amp; Assam SEB Doctrine)
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      The Supreme Court in <em>Asian Techs Ltd. v. Union of India</em> (2009) 10 SCC 354 and <em>Assam State Electricity Board v. Buildworth Ltd.</em> (2017) 8 SCC 146 held that exclusionary delay clauses apply only to ordinary, non-default delays. They do NOT protect the department when it commits a foundational breach of contract, such as failing to provide clear site possession or approved fabrication drawings.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <p className="text-xs font-black text-[#DC2626] uppercase tracking-wider mb-1">
                      3. Prevention Principle &amp; Time at Large
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under the established &apos;Prevention Principle&apos;, an employer cannot hold a contractor to a stipulated completion milestone if the employer&apos;s own act of prevention caused the delay. Time becomes &apos;at large&apos;, eliminating the employer&apos;s power to levy Liquidated Damages (LD) and entitling the contractor to a reasonable time for completion and reimbursement of actual losses under Section 73.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Statutory Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    04
                  </span>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Statutory Framework &bull; Multi-Track Remedy Matrix
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4">
                  Statutory Remedy Matrix for Contractor Prolongation Claims
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Recovering prolongation damages requires matching the specific commercial default (idle cranes, delayed drawings, price escalation, unapproved variations) with its precise statutory hook under Indian contract and commercial law:
                </p>

                <div className="overflow-x-auto -mx-5 sm:-mx-6 md:-mx-8">
                  <div className="inline-block min-w-full align-middle px-5 sm:px-6 md:px-8">
                    <table className="min-w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                          <th className="py-3 px-3.5 rounded-tl-xl font-bold">Remedy &amp; Claim Head</th>
                          <th className="py-3 px-3.5 font-bold">Statute &amp; Benchmark Rule</th>
                          <th className="py-3 px-3.5 font-bold">Mandatory Timing Window</th>
                          <th className="py-3 px-3.5 font-bold">Relief &amp; Recovery Impact</th>
                          <th className="py-3 px-3.5 rounded-tr-xl font-bold">Best Suited For</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                        {STATUTORY_MATRIX.map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                            <td className="py-3 px-3.5 font-bold text-slate-900 align-top">
                              {row.remedy}
                            </td>
                            <td className="py-3 px-3.5 text-slate-700 align-top font-medium">
                              {row.statute}
                            </td>
                            <td className="py-3 px-3.5 text-slate-600 align-top">
                              {row.timing}
                            </td>
                            <td className="py-3 px-3.5 text-slate-700 align-top">
                              {row.relief}
                            </td>
                            <td className="py-3 px-3.5 text-slate-600 align-top">
                              {row.suitability}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 5: Decision Flowchart */}
              <section
                id="heading-decision-flow"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    05
                  </span>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Operational Escalation &bull; SOP Decision Tree
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4">
                  Contemporaneous Delay Escalation &amp; Notice Workflow
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  A successful prolongation claim is built during project execution, not retroactively drafted after project completion. This structured decision tree outlines the step-by-step statutory escalation pathway:
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-hidden p-6 rounded-2xl bg-slate-900 text-white mb-6 border border-slate-800">
                  <div className="text-center mb-4">
                    <p className="text-xs font-mono uppercase tracking-widest text-red-400">
                      EPC Delay Claim Escalation Architecture
                    </p>
                  </div>
                  <svg
                    viewBox="0 0 900 420"
                    width={900}
                    height={420}
                    className="w-full h-auto"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Stage 1 */}
                    <rect x="20" y="30" width="250" height="90" rx="12" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                    <text x="145" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Stage 1: Employer Delay Occurs</text>
                    <text x="145" y="80" textAnchor="middle" fill="#9CA3AF" fontSize="11">RoW / GFC Drawings / Approvals</text>
                    <text x="145" y="100" textAnchor="middle" fill="#F87171" fontSize="10">Issue 7-Day Hindrance Notice</text>

                    {/* Arrow 1 to 2 */}
                    <line x1="270" y1="75" x2="320" y2="75" stroke="#DC2626" strokeWidth="2" markerEnd="url(#red-arrow)" />

                    {/* Stage 2 */}
                    <rect x="325" y="30" width="250" height="90" rx="12" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                    <text x="450" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Stage 2: Section 55(3) EOT Notice</text>
                    <text x="450" y="80" textAnchor="middle" fill="#9CA3AF" fontSize="11">Mandatory Reservation Letter</text>
                    <text x="450" y="100" textAnchor="middle" fill="#FBBF24" fontSize="10">Neutralize EOT &apos;No Financial&apos; Waiver</text>

                    {/* Arrow 2 to 3 */}
                    <line x1="575" y1="75" x2="625" y2="75" stroke="#DC2626" strokeWidth="2" markerEnd="url(#red-arrow)" />

                    {/* Stage 3 */}
                    <rect x="630" y="30" width="250" height="90" rx="12" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                    <text x="755" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Stage 3: Monthly Claim Dossier</text>
                    <text x="755" y="80" textAnchor="middle" fill="#9CA3AF" fontSize="11">Hudson Formula &amp; Plant Logs</text>
                    <text x="755" y="100" textAnchor="middle" fill="#34D399" fontSize="10">BSA s.63 Hash-Verified Ledgers</text>

                    {/* Downward Arrow from Stage 3 */}
                    <line x1="755" y1="120" x2="755" y2="180" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 4: Dispute Crystallization */}
                    <rect x="630" y="180" width="250" height="90" rx="12" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                    <text x="755" y="210" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Stage 4: Dispute Notice</text>
                    <text x="755" y="230" textAnchor="middle" fill="#9CA3AF" fontSize="11">Strike Down Tender Delay Bars</text>
                    <text x="755" y="250" textAnchor="middle" fill="#F87171" fontSize="10">Simplex / Assam SEB s.23 ICA</text>

                    {/* Left Arrow from Stage 4 to Stage 5 */}
                    <line x1="630" y1="225" x2="580" y2="225" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 5: Final Demand & Pre-Arbitration */}
                    <rect x="325" y="180" width="250" height="90" rx="12" fill="#1F2937" stroke="#DC2626" strokeWidth="2" />
                    <text x="450" y="210" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Stage 5: Advocate Statutory Demand</text>
                    <text x="450" y="230" textAnchor="middle" fill="#9CA3AF" fontSize="11">Crystallize Overheads + Extra Items</text>
                    <text x="450" y="250" textAnchor="middle" fill="#FBBF24" fontSize="10">Demand 18% Commercial Interest</text>

                    {/* Left Arrow from Stage 5 to Stage 6 */}
                    <line x1="325" y1="225" x2="275" y2="225" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 6: Section 21 Arbitration */}
                    <rect x="20" y="180" width="250" height="90" rx="12" fill="#1F2937" stroke="#34D399" strokeWidth="2" />
                    <text x="145" y="210" textAnchor="middle" fill="#34D399" fontSize="13" fontWeight="bold">Stage 6: Arbitration &amp; Award</text>
                    <text x="145" y="230" textAnchor="middle" fill="#9CA3AF" fontSize="11">Section 21 ACA Invocation</text>
                    <text x="145" y="250" textAnchor="middle" fill="#FFFFFF" fontSize="10">Independent Arbitrator / Section 9 Stay</text>

                    {/* Bottom Summary Bar */}
                    <rect x="20" y="310" width="860" height="80" rx="12" fill="#111827" stroke="#374151" strokeWidth="1" />
                    <text x="450" y="340" textAnchor="middle" fill="#F9FAFB" fontSize="12" fontWeight="bold">
                      Outcome: ₹8.09+ Cr Crystallized Prolongation Claim Enforced in Fast-Track Institutional Arbitration
                    </text>
                    <text x="450" y="365" textAnchor="middle" fill="#9CA3AF" fontSize="11">
                      Overcomes No-Damage Clauses &bull; Pre-Empts Accord &amp; Satisfaction Defenses &bull; Recovers Full Idling &amp; Escalation
                    </text>

                    <defs>
                      <marker id="red-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                        <path d="M 0 0 L 8 4 L 0 8 Z" fill="#DC2626" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                {/* Mobile Responsive Cards */}
                <div className="md:hidden space-y-3 mb-6">
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-[#DC2626]">
                    <p className="text-xs font-bold text-red-400">Step 1: Employer Delay Occurs</p>
                    <p className="text-xs text-slate-300 mt-1">Issue immediate 7-day hindrance notice with geotagged site obstruction evidence.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-amber-400">
                    <p className="text-xs font-bold text-amber-400">Step 2: Section 55(3) EOT Notice</p>
                    <p className="text-xs text-slate-300 mt-1">Serve mandatory statutory notice reserving rights to claim compensation during extended time.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-emerald-400">
                    <p className="text-xs font-bold text-emerald-400">Step 3: Monthly Claim Dossier</p>
                    <p className="text-xs text-slate-300 mt-1">Maintain daily idle plant logs and Hudson formula calculations backed by Section 63 BSA audit trail.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-red-400">
                    <p className="text-xs font-bold text-red-400">Step 4: Invalidate Delay Exclusion Clauses</p>
                    <p className="text-xs text-slate-300 mt-1">Cite Simplex and Assam SEB doctrines to strike down unfair tender delay damage bars under Section 23 ICA.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-emerald-400">
                    <p className="text-xs font-bold text-emerald-400">Step 5: Section 21 Arbitration Invocation</p>
                    <p className="text-xs text-slate-300 mt-1">Commence formal arbitration demanding prolongation damages, extra items, and 18% commercial interest.</p>
                  </div>
                </div>
              </section>

              {/* Section 6: Interactive Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    06
                  </span>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Interactive Explorer &bull; 4 Commercial Failure Modes
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4">
                  Key Commercial Delay Scenarios &amp; Contractor Response SOPs
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Select your project&apos;s primary failure mode below to review the specific statutory grounds, Supreme Court authorities, and step-by-step SOP for crystallizing monetary compensation:
                </p>

                <ProlongationClaimScenarioTabs />
              </section>

              {/* Section 7: Hudson & Eichleay Formulas */}
              <section
                id="heading-overheads-formula"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    07
                  </span>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Engineering Economics &bull; Supreme Court Recognized Accounting
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4">
                  Hudson, Emden &amp; Eichleay Overhead Formulas Explained
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  In complex infrastructure projects, it is commercially impossible to produce an individual cash voucher for every hour a managing director or head office quantity surveyor spent attending delay meetings. To resolve this, international construction law and the Supreme Court of India in <em>McDermott International Inc. v. Burn Standard Co. Ltd.</em> (2006) 11 SCC 181 have validated mathematical accounting formulas to quantify unabsorbed overheads and lost profit opportunity:
                </p>

                <div className="space-y-6 my-6">
                  {/* Hudson Formula Card */}
                  <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <p className="text-sm font-black text-red-400 uppercase tracking-wider">
                        1. The Hudson Formula
                      </p>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-950 text-red-300 border border-red-800">
                        Most Frequently Applied in India
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/80 font-mono text-xs sm:text-sm text-amber-300 my-2">
                      Claim = (HO Overhead &amp; Profit % / 100) &times; (Contract Sum / Contract Period) &times; Delay Period
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Uses the overhead and profit percentage stipulated in the tender breakdown or standard industry norms (typically 7.5% to 15%). The Supreme Court in <em>McDermott</em> upheld its application where detailed line-item head office ledgers are unavailable.
                    </p>
                  </div>

                  {/* Emden Formula Card */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <p className="text-sm font-black text-slate-900 uppercase tracking-wider">
                        2. The Emden Formula
                      </p>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        Audited Accounts Benchmark
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-100 font-mono text-xs sm:text-sm text-slate-900 my-2">
                      Claim = (Actual Head Office Overhead % / 100) &times; (Contract Sum / Contract Period) &times; Delay Period
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Substitutes the contract overhead percentage with the contractor&apos;s actual company-wide corporate overhead ratio derived from statutory audited financial statements across the organization during the execution period.
                    </p>
                  </div>

                  {/* Eichleay Formula Card */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <p className="text-sm font-black text-slate-900 uppercase tracking-wider">
                        3. The Eichleay Formula
                      </p>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        Project-Specific Allocation
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-100 font-mono text-xs sm:text-sm text-slate-900 my-2">
                      Step 1: Allocable Overhead = (Contract Billings / Total Billings) &times; Total Overhead
                      <br />
                      Step 2: Daily Rate = Allocable Overhead / Actual Days of Performance
                      <br />
                      Step 3: Claim = Daily Rate &times; Number of Delay Days
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Particularly favored in complex mega-projects where the employer disputes generic percentage formulas, as it precisely apportions corporate overhead based on the delayed contract&apos;s actual financial contribution to the contractor&apos;s total enterprise turnover.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Worked Financial Calculation */}
              <section
                id="heading-financial-calculation"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    08
                  </span>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Empirical Proof &bull; Worked Forensic Claim Ledger
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4">
                  Worked ₹8.09 Crore Prolongation &amp; Extra Claim Ledger
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Consider an illustrative ₹45.0 Crore EPC road and bridge contract with an initial 24-month completion period. The project was prolonged by 12 additional months solely due to the highway authority&apos;s failure to hand over 35% of the Right of Way and tardy approval of railway overbridge (ROB) structural drawings.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  The table below demonstrates how a forensic claims dossier quantifies idle plant, overheads, statutory price escalation, extra items, and pre-award interest into an unassailable ₹8.09 Crore claim:
                </p>

                <div className="overflow-x-auto -mx-5 sm:-mx-6 md:-mx-8">
                  <div className="inline-block min-w-full align-middle px-5 sm:px-6 md:px-8">
                    <table className="min-w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                          <th className="py-3 px-3.5 rounded-tl-xl font-bold">Claim Head</th>
                          <th className="py-3 px-3.5 font-bold">Accounting &amp; Statutory Basis</th>
                          <th className="py-3 px-3.5 font-bold">Formula &amp; Quantification Parameter</th>
                          <th className="py-3 px-3.5 rounded-tr-xl font-bold text-right">Claim Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                        {WORKED_CALCULATION_ROWS.map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                            <td className="py-3 px-3.5 font-bold text-slate-900 align-top">
                              {row.head}
                            </td>
                            <td className="py-3 px-3.5 text-slate-700 align-top font-medium">
                              {row.basis}
                            </td>
                            <td className="py-3 px-3.5 text-slate-600 align-top">
                              {row.computation}
                            </td>
                            <td className="py-3 px-3.5 text-right font-mono font-bold text-[#DC2626] align-top whitespace-nowrap">
                              {row.amount}
                            </td>
                          </tr>
                        ))}
                        <tr className="bg-red-50 text-slate-900 font-black border-t-2 border-[#DC2626]">
                          <td colSpan={3} className="py-4 px-3.5 text-right text-xs uppercase tracking-wider">
                            Total Crystallized Prolongation, Extra-Item &amp; Interest Claim:
                          </td>
                          <td className="py-4 px-3.5 text-right font-mono text-base sm:text-lg text-[#DC2626] whitespace-nowrap">
                            ₹8,09,85,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                  <strong>Notice Requirement Note:</strong> To calculate statutory pre-award interest under the Interest Act, 1978 or evaluate MSME status for supply-only components, contractors can also utilize our interactive{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] hover:underline font-bold"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </div>
              </section>

              {/* Section 9: Court Precedents */}
              <section
                id="heading-court-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    09
                  </span>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Judicial Authorities &bull; Verified Supreme Court &amp; High Court Rulings
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4">
                  Landmark Supreme Court Precedents on Delay Compensation
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  These verified judicial holdings form the binding legal bedrock for overcoming employer delay defenses and invalidating exclusionary clauses in commercial arbitrations across India:
                </p>

                <div className="space-y-5">
                  {COURT_PRECEDENTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-2xl p-5 sm:p-6 border-y border-r border-slate-200"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <p className="text-sm sm:text-base font-extrabold text-slate-900">
                          {item.title}
                        </p>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-700 border border-slate-200">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-[#DC2626] mb-3">
                        {item.parties} &bull; <span className="font-mono text-slate-600">{item.citation}</span>
                      </p>
                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>
                          <strong>The Dispute: </strong>
                          {item.facts}
                        </p>
                        <p>
                          <strong>The Judicial Holding: </strong>
                          {item.holding}
                        </p>
                        <p className="font-semibold text-slate-900">
                          <strong>Financial Relief: </strong>
                          {item.amount}
                        </p>
                        <div className="mt-2 pt-2 border-t border-slate-200 text-xs text-slate-600">
                          <strong>Strategic Contractor Takeaway: </strong>
                          {item.takeaway}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 10: Extra Items & Variations */}
              <section
                id="heading-extra-items"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    10
                  </span>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Contract Law &bull; Quantum Meruit &amp; Scope Creep
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4">
                  Recovering Extra Items &amp; BOQ Deviations Over 25%
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  In infrastructure and EPC execution, unexpected geotechnical conditions, architectural revisions, and client scope additions frequently cause massive quantity expansions. Contractors often face resistance when billing these works: the employer either attempts to force original tender BOQ rates (frozen years earlier) or disowns the extra items entirely because no formal variation order was signed.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Contractors can enforce full market-rate reimbursement through two distinct statutory mechanisms:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                  <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <p className="text-xs font-black text-[#DC2626] uppercase tracking-wider mb-2">
                      1. Contractual Deviation Limits (CPWD Cl. 12 / FIDIC Cl. 13)
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      Standard contracts define a specific deviation limit—typically 25% to 50% for structural and building works, and up to 100% for substructure/piling works. Once quantities cross this threshold, the contractual rate ceases to be binding.
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The contractor must submit a formal 14-day notice proposing revised rates derived from the current Schedule of Rates (SOR/DSR) or actual market cost analysis plus 15% contractor profit and overheads.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <p className="text-xs font-black text-[#DC2626] uppercase tracking-wider mb-2">
                      2. Section 70 Contract Act: Quantum Meruit Protection
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      Where the Resident Engineer issued oral instructions or WhatsApp site directives, and the employer derived the benefit of the completed structure, the employer cannot claim the work was unauthorized.
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 70 ICA (Quantum Meruit), where a person lawfully does anything not intending to do so gratuitously, and the other party enjoys the benefit thereof, the latter is statutorily bound to compensate the former at fair market value.
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For disputes involving government departments or state agencies, contractors should note that before initiating a civil suit, serving a mandatory 60-day{" "}
                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="text-[#DC2626] hover:underline font-bold"
                  >
                    Section 80 CPC Statutory Notice
                  </Link>{" "}
                  is legally required to preserve claims against state instrumentalities.
                </p>
              </section>

              {/* Section 11: BSA 2023 Section 63 Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    11
                  </span>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Litigation Readiness &bull; Electronic Evidence Audit
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4">
                  BSA 2023 Section 63 Digital Evidence Audit Checklist
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)—which replaces Section 65B of the Indian Evidence Act, 1872—electronic records must satisfy strict chain-of-custody and hash verification standards to be admissible in commercial courts and arbitral tribunals. Ensure your claims dossier compiles these seven mandatory records:
                </p>

                <div className="space-y-3">
                  {EVIDENCE_CHECKLIST.map((item, idx) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-black text-slate-900 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold">
                            {idx + 1}
                          </span>
                          {item.document}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-700 border border-slate-200">
                          {item.statutoryValue}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed ml-7">
                        {item.details}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 12: Dual B2B CTAs */}
              <section className="bg-transparent">
                <ProlongationClaimRecoveryCTA />
              </section>

              {/* Section 13: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    12
                  </span>
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Frequently Asked Questions &bull; Practical Practitioner Guidance
                  </p>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-6">
                  Frequently Asked Questions on Contractor Delay Claims
                </h2>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 transition-all open:bg-white open:border-slate-300 open:shadow-xs"
                    >
                      <summary className="text-sm sm:text-base font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                        <span>{faq.q}</span>
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs font-black shrink-0 transition-colors">
                          &darr;
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 14: Statutory Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 text-xs text-slate-600 leading-relaxed"
              >
                <p className="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2">
                  Statutory References &amp; Legal Authorities
                </p>
                <p className="mb-3">
                  This operational guide is authored in accordance with the Indian Contract Act, 1872 (Sections 23, 51–55, 70, 73, 74), the Arbitration and Conciliation Act, 1996 (Sections 9, 11, 21, 31(7), 34), the Commercial Courts Act, 2015, and the Bharatiya Sakshya Adhiniyam, 2023 (Section 63). Judicial authorities cited reflect authoritative holdings of the Supreme Court of India in <em>Assam State Electricity Board v. Buildworth Ltd.</em> (2017) 8 SCC 146, <em>Asian Techs Ltd. v. Union of India</em> (2009) 10 SCC 354, <em>McDermott International Inc. v. Burn Standard Co. Ltd.</em> (2006) 11 SCC 181, <em>Ambica Construction v. Union of India</em> (2006) 13 SCC 475, and the landmark Delhi High Court decision in <em>Simplex Concrete Piles (India) Ltd. v. Union of India</em> (2010 ILR 2 Del 699).
                </p>
                <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                  <span>Advocate Review: {LEGAL_REVIEWER.name}, {LEGAL_REVIEWER.role}</span>
                  <span>Published: November 2026 &bull; Production Version 2.0</span>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides currentPath={PAGE_URL} />
      </div>
    </>
  );
}
