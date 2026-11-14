import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MedicalEquipmentTableOfContents from "./MedicalEquipmentTableOfContents";
import MedicalEquipmentScenarioTabs from "./MedicalEquipmentScenarioTabs";
import MedicalEquipmentRecoveryCTA from "./MedicalEquipmentRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/medical-equipment-hospital-supply-amc-cmc-payment-default-recovery";
const EXACT_H1 =
  "Recovering Unpaid Medical Equipment Milestones, 'Reagent-Rental' Minimum Shortfalls & Hospital CMC/AMC Invoices";
const META_TITLE = "Medical Equipment, Reagent & Hospital AMC/CMC Recovery";
const META_DESCRIPTION =
  "Defaulted on analyzer reagent-rentals, medical equipment milestones, or hospital AMC/CMC bills? Navigate Retention of Title & PCPNDT repossession rules.";

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
        alt: formatAltText("Medical Equipment Reagent Rental Hospital AMC Recovery"),
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
    remedy: "Retention of Title & Repossession Notice",
    statute: "Sale of Goods Act, 1930 (Section 25)",
    timing: "Day 1–30 upon milestone default or lease breach",
    mechanism: "Advocate demand asserting reservation of right of disposal and revoking bailee license to operate",
    relief: "Prevents debtor from creating third-party charges; lays legal foundation for court receiver handover",
    suitability: "Mandatory first step for unpaid MRI, CT, cath labs, and reagent-rental analyzer placements",
    tone: "slate",
  },
  {
    remedy: "PCPNDT Statutory Intimation & Safe Seizure",
    statute: "PCPNDT Act, 1994 (ss. 18, 23) & PCPNDT Rules 1996 (Rule 3A, 13)",
    timing: "Mandatory 30-day prior notice before ultrasound relocation",
    mechanism: "Statutory intimation to District Appropriate Authority (CMO/Civil Surgeon) detailing title default",
    relief: "Insulates OEM directors and service engineers from non-bailable criminal FIRs and license cancellations",
    suitability: "Compulsory prerequisite before repossessing any clinical ultrasound or color Doppler system",
    tone: "amber",
  },
  {
    remedy: "MSME Samadhaan Petition (3x RBI Interest)",
    statute: "Micro, Small & Medium Enterprises Development Act, 2006 (ss. 15–18)",
    timing: "45 days post-invoice or deemed acceptance date",
    mechanism: "Filing delayed payment reference before MSEFC; conciliation followed by statutory arbitration",
    relief: "Overwrites contract interest with statutory compound interest at 3x RBI Bank Rate with monthly rests",
    suitability: "Lethal recovery tool for Udyam-registered MedTech dealers, biomedical AMC firms & reagent suppliers",
    tone: "emerald",
  },
  {
    remedy: "Commercial Court Order XL Court Receiver",
    statute: "Commercial Courts Act, 2015 & CPC 1908 (Order XL Rule 1, Order XXXIX)",
    timing: "Upon threat of machine alienation, chip tampering, or grey-market reagents",
    mechanism: "Interim application for appointment of Court Receiver with police aid to seize and seal capital hardware",
    relief: "Immediate physical custody of multi-crore medical hardware transferred to OEM bonded storage",
    suitability: "Essential when hospital or diagnostic lab refuses physical entry or threatens criminal counter-complaints",
    tone: "emerald",
  },
  {
    remedy: "Order XXXVII CPC Summary Suit / Arbitration",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII) / Arbitration Act 1996 (s. 11)",
    timing: "Post-statutory notice cure period expiry (15–30 days)",
    mechanism: "Fast-track summary suit based on written supply contracts, signed delivery challans & invoices",
    relief: "Immediate money decree without full trial unless hospital deposits substantial security to defend",
    suitability: "Primary recovery rail for unpaid installation milestones, AMC/CMC balances, and spare parts ledgers",
    tone: "slate",
  },
];

const FAQS = [
  {
    question:
      "Can a medical equipment supplier physically repossess an unpaid machine from a hospital?",
    answer:
      "Yes, provided the underlying supply or lease contract contains an express 'Retention of Title' (Romalpa) clause under Section 25 of the Sale of Goods Act, 1930, reserving ownership in the seller until 100% of the invoice or milestone payments are settled. However, suppliers must never execute unilateral, forcible midnight self-help seizures. Forcing entry into a hospital ICU or diagnostic bay exposes company representatives to criminal trespass and extortion charges under Bharatiya Nyaya Sanhita (BNS). The legally bulletproof route is to serve a formal Advocate Statutory Notice revoking the hospital's bailee license, followed by obtaining an ex-parte Court Receiver order under Order XL Rule 1 of the Code of Civil Procedure (CPC) or Section 9 of the Arbitration Act from the Commercial Court.",
  },
  {
    question:
      "What are the strict PCPNDT Act rules for seizing a defaulted ultrasound machine in India?",
    answer:
      "Ultrasound machines and color Doppler imaging scanners are strictly governed by the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act, 1994 and Rules 3A and 13 of the PCPNDT Rules, 1996. Every ultrasound unit is registered with the District Appropriate Authority (District Magistrate / Chief Medical Officer / Civil Surgeon) linked to a specific clinic's Form B registration. Physically seizing or transporting an ultrasound machine without prior 30-day statutory written intimation to the District Appropriate Authority constitutes a non-bailable criminal offense under Section 23 of the PCPNDT Act, exposing OEM directors and service engineers to up to 3 years imprisonment and machine sealing under Section 30. Lawful repossession requires prior administrative intimation, obtaining a Commercial Court Receiver order, and executing the physical transit strictly in the presence of health department nodal officers.",
  },
  {
    question:
      "How do OEMs recover losses when a diagnostic lab breaches a Reagent-Rental contract?",
    answer:
      "In In-Vitro Diagnostic (IVD) 'Reagent-Rental' or 'Cost-Per-Test' (CPT) models, an automated biochemistry or immunoassay analyzer (worth ₹25L–₹60L) is placed with zero upfront capex in exchange for a 3-to-5 year exclusive minimum reagent purchase commitment. When a lab breaches its Minimum Monthly Guarantee (MMG) or uses pirated third-party reagents, the OEM can enforce three legal remedies: (1) Liquidated damages and accelerated shortfall recovery under Sections 73 and 74 of the Indian Contract Act, 1872; (2) Contractual termination and repossession of the analyzer under Section 25 of the Sale of Goods Act; and (3) Filing an urgent Section 9 petition in the Commercial Court for an interim injunction restraining the lab from loading unauthorized consumables or tampering with proprietary RFID barcode systems.",
  },
  {
    question:
      "What legal remedy exists when a hospital withholds the final 10%–20% FAT milestone for years?",
    answer:
      "Hospitals frequently withhold the final 10% to 20% milestone (FAT / Handover tranche) on high-value CT scanners, MRI machines, and Cath Labs by perpetually refusing to sign the formal installation or acceptance certificate, while simultaneously scanning dozens of paying patients daily. Under Section 42 of the Sale of Goods Act, 1930, when a buyer performs any act inconsistent with the seller's ownership—such as commercial clinical patient scanning and billing—the buyer is deemed in law to have accepted the goods. The supplier can issue a formal Notice of Deemed Acceptance and invoke Section 15 and 16 of the MSMED Act, 2006, claiming the full milestone balance plus statutory compound interest at three times the RBI Bank Rate.",
  },
  {
    question:
      "Can a biomedical AMC/CMC firm withdraw maintenance support if hospital bills remain unpaid?",
    answer:
      "Yes, but the withdrawal must follow strict medico-legal safe-harbor protocols to insulate the biomedical engineering firm from tortious liability and medical negligence accusations. Under Section 39 of the Indian Contract Act, 1872, non-payment of agreed quarterly AMC/CMC invoices constitutes a fundamental contractual breach entitling the provider to suspend performance. However, because equipment like ventilators, dialysis machines, and anesthesia workstations support human life, the service firm must issue a formal 30-day Cure-or-Suspend Statutory Notice marked to the Hospital Medical Superintendent, Chief Medical Officer, and State Clinical Establishments Authority, putting the clinical administration on notice to make alternate emergency arrangements.",
  },
  {
    question:
      "Does Section 43B(h) of the Income Tax Act apply to hospital equipment and reagent suppliers?",
    answer:
      "Yes. If the medical equipment dealer, reagent distributor, or biomedical AMC contractor is registered as a Micro or Small enterprise under the MSMED Act, 2006, corporate hospitals, private diagnostic centers, and nursing home entities are legally bound by Section 43B(h) of the Income Tax Act, 1961. Any payment delayed beyond 45 days (under written agreement) or 15 days (without written contract) is disallowed as a tax deduction from the hospital's taxable profits in that financial year, triggering immediate 25%–35% corporate tax liabilities plus statutory compound interest under Section 16 of the MSMED Act.",
  },
  {
    question:
      "What electronic evidence is required under Section 63 of Bharatiya Sakshya Adhiniyam (BSA 2023)?",
    answer:
      "To enforce debt claims and repossession before the Commercial Court or MSME Facilitation Council, digital audit trails must comply with Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Evidence Act). Required documents include: (1) Machine counter-logs, uptime telematics, and patient scan logs showing commercial utilization; (2) Digitally signed installation reports, calibration certificates, and delivery challans (PODs); (3) Electronic mail threads containing invoice submissions and hospital admissions of balance; (4) LIMS and reagent consumption telemetry demonstrating kit consumption rates; and (5) A formal Section 63 Certificate executed by the biomedical engineer or IT systems manager certifying electronic system integrity.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Sale of Goods Act, 1930 (Section 25 — Reservation of Right of Disposal & Section 42 Deemed Acceptance)",
    url: "https://www.indiacode.nic.in/handle/123456789/2389",
  },
  {
    title: "Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act, 1994 (Sections 18, 23 & 30)",
    url: "https://www.indiacode.nic.in/handle/123456789/1944",
  },
  {
    title: "PCPNDT Rules, 1996 (Rule 3A & Rule 13 — Ultrasound Machine Sale, Transfer & Relocation Rules)",
    url: "https://pib.gov.in/",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Commercial Courts Act, 2015 (Act 4 of 2016 — Section 2(1)(c)(i) & Summary Disposal)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    jobTitle: LEGAL_REVIEWER.role,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Medical Equipment Hospital Supply Reagent-Rental AMC CMC Payment Default Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Medical Equipment OEMs & AMC Contractors Legally Recover Unpaid Hospital Invoices & Repossess Defaulted Hardware",
  description:
    "A 5-stage institutional recovery playbook for medical device OEMs, diagnostic reagent distributors, ultrasound dealers, and biomedical service firms to recover installation milestones, minimum reagent shortfalls, and AMC balances.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit Telematics, Patient Scan Records & Deemed Acceptance",
      text: "Compile telemetry uptime logs, PACS scanning numbers, reagent consumption telemetry, and delivery challans certified under Section 63 Bharatiya Sakshya Adhiniyam 2023 to document active commercial exploitation.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Issue Retention-of-Title & Statutory Demand Notice",
      text: "Serve a comprehensive 15-day Advocate Legal Notice invoking Section 25 Sale of Goods Act (Reservation of Right of Disposal), Section 42 Deemed Acceptance, and Section 16 MSMED Act statutory compound interest.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Execute PCPNDT Statutory Intimation Protocol for Imaging Equipment",
      text: "Where ultrasound scanners are involved, lodge mandatory formal 30-day statutory intimation with the District Appropriate Authority (CMO/Civil Surgeon) under Rule 3A of PCPNDT Rules 1996 before scheduling relocation.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Obtain Commercial Court Receiver Order for Asset Custody",
      text: "Move the Commercial Court under Order XL Rule 1 CPC or Section 9 Arbitration Act for the appointment of a Court Receiver with police assistance to enter hospital premises, seal hardware, and safely transfer it to bonded OEM storage.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Fast-Track Financial Decrees via MSEFC or Order XXXVII Summary Suit",
      text: "Enforce balance money claims, unamortized capital asset costs, and 3x RBI Bank Rate compound interest through Micro & Small Enterprises Facilitation Council (MSEFC) arbitration or High Court / Commercial Court summary proceedings.",
    },
  ],
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
      name: "Pharma, Medical Devices & Surgical Recovery",
      item: `${SITE_URL}/industries/pharma-medical-devices-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Medical Equipment & AMC/CMC Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
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

export default function MedicalEquipmentRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "Pharma, Medical Devices & Surgical Recovery",
      href: "/industries/pharma-medical-devices-recovery",
    },
    { label: "Medical Equipment & AMC/CMC Recovery", href: PAGE_URL },
  ];

  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>MedTech OEM &amp; Distributor Recovery</span>
              <span className="text-red-500">&bull;</span>
              <span>Sale of Goods Act s.25 Title</span>
              <span className="text-red-500">&bull;</span>
              <span>PCPNDT Safe Seizure Rules</span>
              <span className="text-red-500">&bull;</span>
              <span>MSMED Act Sec 16 Interest</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-04 MedTech</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; MedTech Statutory Recovery Playbook
              </span>
              <p>
                Medical device OEMs, diagnostic reagent distributors, and biomedical service contractors face severe cash-flow traps when private hospitals and diagnostic centers withhold post-installation Final Acceptance Test (FAT) tranches, breach in-vitro diagnostic (IVD) reagent-rental minimum volume guarantees, or default on comprehensive AMC/CMC contracts. By asserting{" "}
                <strong>Reservation of Right of Disposal under Section 25 of the Sale of Goods Act, 1930</strong>, establishing statutory deemed acceptance under Section 42 through commercial patient scan logs, serving strict 30-day regulatory notices under{" "}
                <strong>PCPNDT Rules 1996 (Rule 3A)</strong> before sonography relocations, and securing Commercial Court Order XL Court Receivers, creditors can repossess high-value hardware and compel 3x RBI compound interest recovery under Section 16 of the MSMED Act, 2006. Governed under our{" "}
                <Link
                  href="/industries/pharma-medical-devices-recovery"
                  className="text-red-400 hover:text-red-300 underline font-semibold"
                >
                  Pharma, Medical Device &amp; Surgical Distributor Recovery Hub
                </Link>
                .
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 font-semibold block uppercase">
                  Avg. Milestone Delay
                </span>
                <span className="text-lg sm:text-2xl font-black text-red-400">
                  180–450 Days
                </span>
                <span className="text-[10px] text-slate-400 block">
                  FAT &amp; installation sign-off holds
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 font-semibold block uppercase">
                  MSMED Sec 16 Interest
                </span>
                <span className="text-lg sm:text-2xl font-black text-emerald-400">
                  3x RBI Rate
                </span>
                <span className="text-[10px] text-slate-400 block">
                  Mandatory monthly compound interest
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 font-semibold block uppercase">
                  PCPNDT Pre-Notice
                </span>
                <span className="text-lg sm:text-2xl font-black text-amber-400">
                  30 Days Rule 3A
                </span>
                <span className="text-[10px] text-slate-400 block">
                  Mandatory CMO/DAA intimation
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 font-semibold block uppercase">
                  Court Receiver Seizure
                </span>
                <span className="text-lg sm:text-2xl font-black text-slate-100">
                  Order XL CPC
                </span>
                <span className="text-[10px] text-slate-400 block">
                  Commercial Court ex-parte relief
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Breadcrumbs */}
        <div className="w-full bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* 2-Column Split Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar Table of Contents */}
            <MedicalEquipmentTableOfContents />

            {/* Main Editorial Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* SECTION 1: Overview & MedTech Receivables Crisis */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    01
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Macro Sector Analysis
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Medical Equipment Receivables: The Capital &amp; Reagent Liquidity Trap
                </h2>

                <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    India&apos;s healthcare infrastructure boom has driven unprecedented demand for advanced diagnostic imaging, critical care ventilators, surgical suites, and automated In-Vitro Diagnostic (IVD) pathology platforms. However, behind glossy corporate hospital lobbies and bustling diagnostic chains lies a systemic institutional receivables bottleneck. Medical equipment Original Equipment Manufacturers (OEMs), authorized tier-1 distributors, and biomedical engineering maintenance firms routinely suffer devastating liquidity freezes resulting from calculated buyer default strategies.
                  </p>
                  <p>
                    Hospital managements and private diagnostic centers exploit standard commercial contracting ambiguities across three primary deployment structures:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-800 font-medium">
                    <li>
                      <strong>The Withheld FAT Milestone (Capital Systems):</strong> For high-ticket CT scanners (₹1.5Cr–₹4.5Cr), 1.5T/3.0T MRI units (₹4Cr–₹10Cr), and digital Cath Labs, contracts typically specify a 30% advance, 60% on delivery/site readiness, and a final 10%–20% upon signing the Final Acceptance Test (FAT) certificate. Hospitals routinely pay the delivery milestone, start scanning paying clinical patients on day one, but indefinitely withhold the final ₹25L–₹1.5Cr FAT sign-off, fabricating frivolous software calibration or environmental chill complaints.
                    </li>
                    <li>
                      <strong>The IVD &apos;Reagent-Rental&apos; Piracy Trap:</strong> Diagnostic centers procure advanced automated clinical chemistry or chemiluminescence immunoassay analyzers (worth ₹20L–₹50L) without paying any capital equipment fee, entering a 5-year binding commitment to purchase a Minimum Monthly Guarantee (MMG) of proprietary test kits. Within 6–9 months, labs breach their volume commitments, hack the reagent RFID or barcode locks, and feed cheap unauthorized grey-market reagents into the machine, leaving the OEM with unamortized capital exposure and unpaid consumable shortfalls.
                    </li>
                    <li>
                      <strong>Biomedical AMC/CMC &amp; Spare Parts Default:</strong> Hospitals contract biomedical maintenance contractors for Annual Maintenance Contracts (AMC) and Comprehensive Maintenance Contracts (CMC) covering critical ICU equipment (ventilators, defibrillators, anesthesia workstations). When quarterly maintenance bills age past 180 days, hospitals withhold payment yet threaten engineers with criminal negligence under criminal law if they withdraw servicing or retrieve proprietary PCB circuit boards.
                    </li>
                  </ul>
                  <p>
                    Compounding this crisis is the acute regulatory exposure surrounding imaging machinery. Uninformed vendors attempting self-help repossession of unpaid ultrasound machines face non-bailable criminal FIRs under the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act, 1994. Recovering MedTech receivables requires a sophisticated convergence of the Sale of Goods Act, 1930, the MSMED Act, 2006, the Commercial Courts Act, 2015, and strict healthcare statutory protocols.
                  </p>
                </div>
              </section>

              {/* SECTION 2: 5-Stage Operational Recovery Rail (SVG Flowchart + Mobile) */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    02
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Operational Escalation Architecture
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  5-Stage Operational Recovery Rail for Unpaid MedTech Assets
                </h2>

                <p className="text-sm text-slate-600 mb-6">
                  Creditor-side operational decision tree transitioning from digital telemetry audit to Commercial Court receiver repossession and MSME Facilitation Council execution.
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-x-auto p-4 bg-slate-900 rounded-xl border border-slate-800 mb-6">
                  <svg
                    viewBox="0 0 920 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    width={920}
                    height={180}
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="25" width="160" height="130" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="90" y="55" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1 &bull; DAY 1–15</text>
                    <text x="90" y="80" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">Telemetry &amp; Audit</text>
                    <text x="90" y="105" fill="#94A3B8" fontSize="10" textAnchor="middle">PACS patient scans,</text>
                    <text x="90" y="122" fill="#94A3B8" fontSize="10" textAnchor="middle">LIMS kit logs &amp; BSA s.63</text>

                    {/* Arrow 1 */}
                    <path d="M170 90 L195 90" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="195" y="25" width="160" height="130" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="275" y="55" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2 &bull; DAY 16–30</text>
                    <text x="275" y="80" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">Statutory Notice</text>
                    <text x="275" y="105" fill="#94A3B8" fontSize="10" textAnchor="middle">Sale of Goods s.25 Title,</text>
                    <text x="275" y="122" fill="#94A3B8" fontSize="10" textAnchor="middle">Sec 42 Deemed Acceptance</text>

                    {/* Arrow 2 */}
                    <path d="M355 90 L380 90" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="380" y="25" width="160" height="130" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="460" y="55" fill="#FBBF24" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3 &bull; DAY 31–45</text>
                    <text x="460" y="80" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">PCPNDT Protocol</text>
                    <text x="460" y="105" fill="#94A3B8" fontSize="10" textAnchor="middle">Mandatory DAA intimation</text>
                    <text x="460" y="122" fill="#94A3B8" fontSize="10" textAnchor="middle">Rule 3A notice to CMO</text>

                    {/* Arrow 3 */}
                    <path d="M540 90 L565 90" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="565" y="25" width="160" height="130" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <text x="645" y="55" fill="#34D399" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4 &bull; DAY 46–60</text>
                    <text x="645" y="80" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">Court Receiver</text>
                    <text x="645" y="105" fill="#94A3B8" fontSize="10" textAnchor="middle">Commercial Court Order XL</text>
                    <text x="645" y="122" fill="#94A3B8" fontSize="10" textAnchor="middle">Seizure with police aid</text>

                    {/* Arrow 4 */}
                    <path d="M725 90 L750 90" stroke="#DC2626" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="750" y="25" width="160" height="130" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="830" y="55" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 5 &bull; DAY 61+</text>
                    <text x="830" y="80" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">MSEFC &amp; Decrees</text>
                    <text x="830" y="105" fill="#94A3B8" fontSize="10" textAnchor="middle">3x RBI compound interest,</text>
                    <text x="830" y="122" fill="#94A3B8" fontSize="10" textAnchor="middle">Bank account attachment</text>
                  </svg>
                </div>

                {/* Mobile Stacked Flow Cards */}
                <div className="md:hidden space-y-3 mb-6">
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-red-500">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-400 block mb-1">
                      Stage 1 &bull; Days 1–15
                    </span>
                    <h3 className="text-sm font-bold text-white mb-1">Telemetry &amp; BSA Audit</h3>
                    <p className="text-xs text-slate-300">
                      Extract PACS scan counters, LIMS reagent consumption logs, and remote diagnostics telemetry. Certify electronic chain of custody under BSA 2023 s.63.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-sky-500">
                    <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 block mb-1">
                      Stage 2 &bull; Days 16–30
                    </span>
                    <h3 className="text-sm font-bold text-white mb-1">Statutory Advocate Notice</h3>
                    <p className="text-xs text-slate-300">
                      Serve 15-day statutory demand asserting Title Retention (Sale of Goods Act s.25), Deemed Acceptance (s.42), and MSMED Section 16 interest.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-amber-500">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-1">
                      Stage 3 &bull; Days 31–45
                    </span>
                    <h3 className="text-sm font-bold text-white mb-1">PCPNDT Safe Seizure Notice</h3>
                    <p className="text-xs text-slate-300">
                      Submit 30-day statutory intimation to District Appropriate Authority (Civil Surgeon/CMO) under Rule 3A before repossessing ultrasound machines.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-emerald-500">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block mb-1">
                      Stage 4 &bull; Days 46–60
                    </span>
                    <h3 className="text-sm font-bold text-white mb-1">Commercial Court Receiver</h3>
                    <p className="text-xs text-slate-300">
                      File urgent Order XL Rule 1 CPC / Section 9 Arbitration petition for Court Receiver appointment with police aid to safely repossess capital equipment.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-red-600">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-400 block mb-1">
                      Stage 5 &bull; Day 61+
                    </span>
                    <h3 className="text-sm font-bold text-white mb-1">MSEFC &amp; Money Decree</h3>
                    <p className="text-xs text-slate-300">
                      File Section 18 MSME Samadhaan petition or Commercial Summary Suit to claim balance principal plus 3x RBI compound interest and attach hospital accounts.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: Statutory Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    03
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Legal &amp; Judicial Remedies
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Statutory Recovery Matrix: Sale of Goods, MSMED &amp; Commercial Courts
                </h2>

                <p className="text-sm text-slate-600 mb-6">
                  Comparative analysis of legal remedies available to medical equipment manufacturers, dealers, and biomedical service contractors under Indian commercial statutes.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="py-3 px-3 sm:px-4 font-bold border-r border-slate-800">Statutory Remedy</th>
                        <th className="py-3 px-3 sm:px-4 font-bold border-r border-slate-800">Governing Statute</th>
                        <th className="py-3 px-3 sm:px-4 font-bold border-r border-slate-800">Statutory Window</th>
                        <th className="py-3 px-3 sm:px-4 font-bold border-r border-slate-800">Enforceable Relief</th>
                        <th className="py-3 px-3 sm:px-4 font-bold">Ideal Commercial Trigger</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {STATUTORY_MATRIX.map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}
                        >
                          <td className="py-3 px-3 sm:px-4 font-extrabold text-slate-900 border-r border-slate-200">
                            {row.remedy}
                          </td>
                          <td className="py-3 px-3 sm:px-4 font-mono text-[11px] sm:text-xs text-slate-700 border-r border-slate-200">
                            {row.statute}
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-slate-700 border-r border-slate-200">
                            {row.timing}
                          </td>
                          <td className="py-3 px-3 sm:px-4 text-slate-700 border-r border-slate-200">
                            {row.relief}
                          </td>
                          <td className="py-3 px-3 sm:px-4 font-medium text-slate-800">
                            {row.suitability}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 4: 4 Commercial Failure Modes (Scenario Tabs) */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    04
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Commercial Failure Modes
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  4 Commercial Default Modes: Reagents, Ultrasound, MRI &amp; Hospital AMC
                </h2>

                <p className="text-sm text-slate-600 mb-6">
                  Select a commercial default profile to review the exact contractual stumbling block, statutory exposure, and advocate-vetted recovery rail.
                </p>

                <MedicalEquipmentScenarioTabs />
              </section>

              {/* SECTION 5: Gap 1 Deep Dive — The Reagent-Rental Trap */}
              <section
                id="heading-reagent-rental-trap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    05
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    High-Risk Industry Nuance &bull; Trap 1
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  The Reagent-Rental Trap: Minimum Purchase Shortfalls &amp; Pirated Kits
                </h2>

                <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    In the In-Vitro Diagnostics (IVD) industry, &apos;Reagent-Rental&apos; (also termed Placement or Cost-Per-Test / CPT) is the dominant commercial model. A diagnostic chain or corporate hospital takes a high-throughput fully automated analyzer—such as a clinical chemistry analyzer, 5-part hematology counter, or chemiluminescence immunoassay (CLIA) platform valued between ₹20 Lakhs and ₹60 Lakhs—at zero capital expenditure. In exchange, the lab executes a binding 3-to-5 year contract committing to purchase a guaranteed minimum monthly volume of proprietary reagents, calibrators, and quality-control packs exclusively from the OEM or its authorized distributor.
                  </p>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                    <h3 className="text-xs font-black uppercase tracking-wider text-amber-900 mb-1">
                      The Diagnostic Lab Evasion Playbook
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-950">
                      Within 6 to 12 months of machine installation, labs frequently experience cash flow stress or local test price wars. To preserve margins, the lab resorts to two illegal tactics: (1) It unilaterally drops reagent procurement below the Minimum Monthly Guarantee (MMG), paying only for kits ordered while ignoring accrued shortfall debits; and (2) It acquires open-market &quot;grey-market&quot; or counterfeit compatible reagents from unauthorized grey traders, employing third-party technicians to hack RFID barcode chips or bypass closed-system reagent sensors.
                    </p>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 pt-2">
                    Enforcing Reservation of Title &amp; Liquidated Shortfall Damages
                  </h3>
                  <p>
                    Under Indian law, the OEM is fully protected by two powerful statutory levers:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-slate-800">
                    <li>
                      <strong>Bailment &amp; Retention of Title (Sale of Goods Act Section 25 &amp; Contract Act Section 148):</strong> The placement agreement is a contract of bailment coupled with conditional supply. Title to the analyzer never passes to the lab. Loading unauthorized consumables constitutes misuse of bailed property under Section 153 and Section 154 of the Indian Contract Act, 1872, rendering the contract voidable at the option of the OEM and entitling the supplier to immediate repossession.
                    </li>
                    <li>
                      <strong>Accelerated Minimum Guarantee Shortfalls (Contract Act Section 74):</strong> Well-drafted placement agreements provide that upon default or unapproved kit usage, the OEM may terminate the arrangement and accelerate the entire unamortized capital cost of the analyzer alongside accrued MMG shortfalls as pre-estimated genuine liquidated damages under Section 74 (<em>Kailash Nath Associates v. DDA</em>).
                    </li>
                    <li>
                      <strong>Section 9 Commercial Injunctions:</strong> Because running pirated reagents voids regulatory IVD performance standards and damages sensitive optical flow-cells, OEMs can obtain urgent ad-interim injunctions from Commercial Courts under Section 9 of the Arbitration Act restraining the laboratory from loading non-OEM consumables.
                    </li>
                  </ol>
                  <p>
                    Where the diagnostic center owes more than 45 days of reagent invoices, suppliers registered under Udyam should simultaneously invoke Section 18 of the MSMED Act, 2006 to demand 3x RBI compound interest and trigger Section 43B(h) income tax disallowance against the lab.
                  </p>
                </div>
              </section>

              {/* SECTION 6: Gap 2 Deep Dive — PCPNDT Ultrasound Repossession */}
              <section
                id="heading-pcpndt-repossession"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    06
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    High-Risk Industry Nuance &bull; Trap 2
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  PCPNDT Ultrasound Machine Repossession: Avoiding Criminal FIRs
                </h2>

                <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    The single most dangerous legal trap in Indian medical equipment recovery occurs when an OEM, financier, or dealer attempts to repossess a defaulted Ultrasound machine or Color Doppler imaging system. Unlike standard commercial assets (such as CNC machines or commercial vehicles), ultrasound machines are classified as regulated reproductive diagnostic devices under the <strong>Pre-Conception and Pre-Natal Diagnostic Techniques (Prohibition of Sex Selection) Act, 1994 (PCPNDT Act)</strong>.
                  </p>

                  <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                    <h3 className="text-xs font-black uppercase tracking-wider text-red-900 mb-1">
                      The PCPNDT Criminal Liability Trap (Section 23 &amp; Section 30)
                    </h3>
                    <p className="text-xs sm:text-sm text-red-950 font-medium">
                      Under Section 18 of the PCPNDT Act and Rule 3A of the PCPNDT Rules, 1996, every ultrasound machine is registered to a specific physical premises under a clinical Genetic Clinic / Ultrasound Clinic Form B Certificate. Moving, transporting, or repossessing an ultrasound machine without strictly complying with statutory reporting rules constitutes a <strong>non-bailable, cognizable criminal offense under Section 23 and Section 27</strong>, punishable by up to 3 years imprisonment for OEM directors, recovery agents, and service engineers, alongside immediate equipment seizure under Section 30 and suspension of the manufacturer&apos;s dealer license.
                    </p>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 pt-2">
                    The 4-Step Bulletproof PCPNDT Repossession SOP
                  </h3>
                  <p>
                    To lawfully repossess a defaulted ultrasound unit without violating PCPNDT criminal provisions, MedTech creditors must execute this mandatory advocate-vetted protocol:
                  </p>

                  <div className="space-y-3">
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-slate-900 text-xs sm:text-sm block mb-1">
                        Step 1: Statutory Intimation to District Appropriate Authority (DAA)
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600">
                        Submit a formal 30-day statutory notice under Rule 3A and Rule 13 of the PCPNDT Rules to the District Appropriate Authority (District Magistrate / Chief Medical Officer / Civil Surgeon) placing on record the financing agreement, invoice default, and formal termination of the clinic&apos;s title and possession.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-slate-900 text-xs sm:text-sm block mb-1">
                        Step 2: Obtain Commercial Court Receiver with Police Aid
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600">
                        File an application under Order XL Rule 1 CPC (or Section 9 Arbitration Act) in the competent Commercial Court praying for the appointment of an advocate Court Receiver to take custody of the machine. The application must explicitly name the District Appropriate Authority as a statutory noticee to ensure inter-departmental harmony.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-slate-900 text-xs sm:text-sm block mb-1">
                        Step 3: Joint Physical Seizure in Presence of Health Nodal Officers
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600">
                        The Court Receiver, accompanied by local police officers and the District PCPNDT inspection officer, enters the clinic, executes a formal seizure panchnama, logs probe serial numbers, ensures patient sonography records remain undisturbed on hard drives, and affixes official seals.
                      </p>
                    </div>

                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="font-bold text-slate-900 text-xs sm:text-sm block mb-1">
                        Step 4: Bonded Transit &amp; Clinic Registration Amendment
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600">
                        The machine is transported directly to an authorized bonded warehouse licensed for medical device storage. The Court Receiver submits a compliance report to the Commercial Court and the District Appropriate Authority, officially deleting the machine from the defaulting clinic&apos;s Form B registration.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 7: Radiology Milestones & Withheld FAT Sign-Offs */}
              <section
                id="heading-radiology-milestones"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    07
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    High-Value Capital Systems
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Radiology Milestone Defaults: Overcoming Withheld FAT Sign-Offs
                </h2>

                <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    When selling multi-crore imaging assets—such as 64-slice/128-slice CT systems, 1.5T/3.0T MRI scanners, and flat-panel digital Cath Labs—procurement agreements typically structure payments in milestones: 20% advance with purchase order, 70% against dispatch/delivery challan, and 10% on Final Acceptance Test (FAT) or clinical application handover.
                  </p>
                  <p>
                    A ubiquitous industry abuse occurs where the hospital pays the delivery tranche, hooks the scanner to its Picture Archiving and Communication System (PACS), and begins scanning 30 to 60 paying clinical patients every single day. Yet, when the OEM demands the final 10% milestone (often ₹30L to ₹1 Crore), the hospital management refuses to sign the FAT sign-off document, citing unsubstantiated complaints regarding application software, chiller temperatures, or image noise.
                  </p>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 pt-2">
                    Dismantling Bad-Faith FAT Defenses under Section 42 Sale of Goods Act
                  </h3>
                  <p>
                    Indian contract law provides a definitive answer to bad-faith FAT withholding:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-800">
                    <li>
                      <strong>Statutory Deemed Acceptance (Section 42, Sale of Goods Act 1930):</strong> The Supreme Court and High Courts have consistently held that when a buyer utilizes machinery commercially for profit or revenue generation, that commercial exploitation constitutes an &quot;act inconsistent with the ownership of the seller.&quot; By operation of Section 42, the hospital is deemed in law to have accepted the equipment. The hospital loses its right to reject the goods or withhold milestone payments.
                    </li>
                    <li>
                      <strong>Order XXXVII CPC Summary Suit:</strong> Because the delivery is admitted, installation is evidenced by AERB (Atomic Energy Regulatory Board) operational licenses, and commercial patient scanning is recorded on PACS, the supplier can file a Summary Suit under Order XXXVII of the CPC. The hospital has no bona fide defense and must deposit the contested milestone amount into court as a condition for leave to defend.
                    </li>
                    <li>
                      <strong>MSMED Section 16 Interest Acceleration:</strong> For Udyam-registered suppliers, the 45-day statutory payment clock commences on the date of deemed acceptance. Under Section 16, interest accrues at 3x the RBI Bank Rate compounded monthly, transforming a withheld ₹50L milestone into an untenable financial liability for the defaulting hospital.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 8: Biomedical AMC/CMC Invoices & Spare Parts */}
              <section
                id="heading-amc-cmc-spares"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    08
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Biomedical Engineering &amp; ICU Maintenance
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Hospital Biomedical AMC/CMC Invoices &amp; Spare Parts Recovery SOP
                </h2>

                <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    Biomedical engineering maintenance organizations and third-party Multi-Vendor Service (MVS) contractors keep hospital ICU ventilators, dialysis units, patient monitors, and surgical electrosurgical units functioning 24x7. However, hospitals routinely place AMC/CMC and emergency spare parts bills at the bottom of their accounts payable hierarchy, accumulating 12 to 24 months of unpaid quarterly invoices.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
                      The Hospital &apos;Patient Care&apos; Coercion Trap
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      When maintenance firms demand long-overdue payments, hospital medical superintendents frequently threaten to report the firm for &quot;endangering patient lives&quot; if technicians pause preventive maintenance or retrieve replacement printed circuit boards (PCBs) and optical sensors installed on trial.
                    </p>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 pt-2">
                    The Medico-Legal Safe-Harbor Protocol for Suspending AMC Support
                  </h3>
                  <p>
                    Service firms are not indentured laborers. Under Section 39 of the Indian Contract Act, 1872, persistent non-payment of maintenance retainers constitutes fundamental contractual repudiation. To insulate engineers from negligence claims while forcing immediate settlement, contractors must adopt the following protocol:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-slate-800">
                    <li>
                      <strong>30-Day Cure-or-Suspend Statutory Legal Notice:</strong> Serve an Advocate Legal Notice itemizing all unpaid quarterly invoices and installed spare parts, granting 30 calendar days to cure arrears.
                    </li>
                    <li>
                      <strong>Statutory Administrative Disclosure:</strong> Concurrently serve copies of the notice on the District Chief Medical Officer (CMO), the State Directorate of Health Services, and the State Clinical Establishments Authority, formally placing the administrative onus of patient safety squarely upon hospital leadership.
                    </li>
                    <li>
                      <strong>Software &amp; Dongle Licensing Deactivation:</strong> For remote telematics, cloud diagnostics, or software-enabled diagnostic keys, formally terminate remote licenses in strict accordance with software end-user license agreements (EULA).
                    </li>
                    <li>
                      <strong>MSME Samadhaan Filing:</strong> File an immediate Section 18 reference before the MSEFC claiming all outstanding AMC/CMC invoices plus 3x RBI compound interest and replacement component costs.
                    </li>
                  </ol>
                </div>
              </section>

              {/* SECTION 9: Worked Financial Ledger */}
              <section
                id="heading-worked-calculation"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    09
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Empirical Recovery Accounting
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Worked Financial Ledger: Recovering an Unpaid ₹48,50,000 MedTech Asset
                </h2>

                <p className="text-sm text-slate-600 mb-6">
                  Real-world worked calculation detailing how an equipment dealer recovers unamortized capital placement value, minimum guarantee shortfalls, and statutory MSMED Act interest from a defaulting 150-bed multi-specialty hospital.
                </p>

                {/* Calculation Box */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-slate-800 gap-2">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-red-400 block">
                        Case Study &bull; Diagnostic Placement &amp; CMC Default
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        ₹48.5L Automated Immunoassay Analyzer &amp; ICU Maintenance Default
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-950 text-red-400 border border-red-800">
                      Default Aging: 380 Days
                    </span>
                  </div>

                  {/* Financial Breakdown Table */}
                  <div className="space-y-3 font-mono text-xs sm:text-sm">
                    <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                      <span>1. Unamortized Capital Value of Analyzer (Placement Breach)</span>
                      <span className="font-bold text-white">₹28,00,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                      <span>2. Accrued Minimum Monthly Guarantee (MMG) Reagent Shortfall</span>
                      <span className="font-bold text-white">₹8,50,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                      <span>3. Overdue ICU Ventilator CMC Quarterly Invoices (4 Quarters)</span>
                      <span className="font-bold text-white">₹7,20,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                      <span>4. Emergency Replacement Boards &amp; Oxygen Sensor Spares</span>
                      <span className="font-bold text-white">₹4,80,000</span>
                    </div>
                    <div className="flex justify-between py-2.5 border-b border-slate-700 text-slate-100 font-bold bg-white/5 px-2 rounded">
                      <span>TOTAL PRINCIPAL ADMITTED DEBT</span>
                      <span className="text-emerald-400">₹48,50,000</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800 text-amber-300">
                      <span>
                        5. MSMED Act Sec 16 Statutory Interest (3x RBI Bank Rate ~ 19.5% p.a. for 380d)
                      </span>
                      <span className="font-bold">₹10,54,300</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-800 text-red-300">
                      <span>6. Section 43B(h) Corporate Tax Disallowance Exposure for Hospital (30%)</span>
                      <span className="font-bold">₹14,55,000</span>
                    </div>
                    <div className="flex justify-between py-3 border-t-2 border-red-500 text-base sm:text-lg font-black text-white">
                      <span>TOTAL RECOVERABLE STATUTORY CLAIM</span>
                      <span className="text-red-400">₹59,04,300</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white block mb-1">CFO Tactical Leverage:</strong>
                    By coupling the demand for the ₹48.5L principal with statutory interest under{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-red-400 hover:text-red-300 underline font-semibold"
                    >
                      MSMED Act Section 16
                    </Link>{" "}
                    and highlighting the hospital&apos;s impending ₹14.55L tax disallowance under{" "}
                    <Link
                      href="/law/section-43bh-msme-payment-rule"
                      className="text-red-400 hover:text-red-300 underline font-semibold"
                    >
                      Section 43B(h)
                    </Link>
                    , MedTech creditors routinely secure 80%–100% upfront settlement within 21 days of notice service without entering prolonged trial litigation.
                  </div>
                </div>
              </section>

              {/* SECTION 10: BSA 2023 Section 63 Evidence Checklist */}
              <section
                id="heading-bsa-evidence"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    10
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Evidentiary Compliance
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Bharatiya Sakshya Adhiniyam (BSA) Section 63 Evidence Dossier
                </h2>

                <p className="text-sm text-slate-600 mb-6">
                  Prior to serving an advocate statutory notice or moving the Commercial Court for asset seizure, creditors must assemble an immutable digital evidence trail compliant with Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (replacing Evidence Act Section 65B).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center mb-2">
                      1
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Contract &amp; Title Clause</h3>
                    <p className="text-xs text-slate-600">
                      Executed Supply Agreement, Lease / Placement Contract, Purchase Order, and signed Delivery Challans containing explicit Section 25 Title Retention terms.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center mb-2">
                      2
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">PACS &amp; Telemetry Scan Logs</h3>
                    <p className="text-xs text-slate-600">
                      System-generated DICOM metadata logs, PACS patient scanning counters, and remote diagnostics records establishing active commercial exploitation under Section 42.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center mb-2">
                      3
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">LIMS &amp; Reagent Run Counts</h3>
                    <p className="text-xs text-slate-600">
                      Automated analyzer test run counters compared against authorized kit purchase invoices proving off-contract pirated consumable feeding.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center mb-2">
                      4
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">PCPNDT Form B &amp; Serial Ledger</h3>
                    <p className="text-xs text-slate-600">
                      Certified copies of the clinic&apos;s PCPNDT Form B registration, invoice mentioning ultrasound probe serial numbers, and District Authority intimation proofs.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center mb-2">
                      5
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">AMC Service Tickets &amp; Job Cards</h3>
                    <p className="text-xs text-slate-600">
                      Biomedical field service reports (FSR), customer preventive maintenance sign-offs, spare parts delivery challans, and breakdown resolution tickets.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center mb-2">
                      6
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Section 63 BSA Digital Certificate</h3>
                    <p className="text-xs text-slate-600">
                      Mandatory statutory declaration signed by the IT Systems Administrator or Lead Biomedical Engineer certifying server hash integrity and electronic device uptime.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 11: Deploy Dedicated Recovery Desk (CTA Component) */}
              <section
                id="heading-recovery-cta"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    11
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Institutional Debt Recovery Engine
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Deploy Dedicated MedTech Legal Recovery: Single Case or Bulk CSV
                </h2>

                <p className="text-sm text-slate-600 mb-6">
                  Select your recovery track below: test an individual high-risk hospital default or onboard your nationwide equipment lease and AMC portfolio via bulk CSV.
                </p>

                <MedicalEquipmentRecoveryCTA />
              </section>

              {/* SECTION 12: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    12
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Practitioner Insights
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Frequently Asked Questions on Medical Equipment Debt Recovery
                </h2>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all duration-200 open:bg-white open:shadow-sm"
                    >
                      <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm select-none">
                        <span className="pr-4">{faq.question}</span>
                        <span className="w-5 h-5 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs shrink-0 transition-colors">
                          &darr;
                        </span>
                      </summary>
                      <p className="pt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 mt-3 font-normal">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* SECTION 13: Primary Statutory Citations */}
              <section
                id="heading-primary-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    13
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Statutory Authorities &amp; Acts
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Primary Statutory Citations &amp; MedTech Regulatory Precedents
                </h2>

                <p className="text-sm text-slate-600 mb-6">
                  Official statutory citations, legislation repositories, and regulatory rules governing medical equipment transactions, ultrasound tracking, and institutional commercial debt recovery in India.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {PRIMARY_SOURCES.map((src, idx) => (
                    <a
                      key={idx}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="p-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex items-center justify-between group"
                    >
                      <span className="font-semibold text-slate-800 group-hover:text-[#DC2626] transition-colors pr-2">
                        {src.title}
                      </span>
                      <span className="text-slate-400 group-hover:text-[#DC2626] shrink-0 font-bold">
                        &nearr;
                      </span>
                    </a>
                  ))}
                </div>

                {/* Sibling & Hub Cross-Links */}
                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Related Sector Recovery Guides &amp; Sibling Spokes:
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Link
                      href="/industries/pharma-medical-devices-recovery"
                      className="px-3 py-1.5 rounded-lg bg-red-50 text-[#DC2626] font-bold hover:bg-red-100 transition-colors"
                    >
                      IND-04 Pharma &amp; MedTech Hub &rarr;
                    </Link>
                    <Link
                      href="/send-a-legal-notice/pharmacy-invoice-not-cleared"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
                    >
                      Chemist &amp; Pharmacy Notice
                    </Link>
                    <Link
                      href="/distributor-dealer-dues-recovery"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
                    >
                      Distributor &amp; Dealer Dues
                    </Link>
                    <Link
                      href="/cardiac-stent-orthopedic-implant-hospital-consignment-dues-recovery"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
                    >
                      Surgical Implant Consignment Recovery
                    </Link>
                    <Link
                      href="/pharma-third-party-contract-manufacturing-cdmo-batch-payment-recovery"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
                    >
                      CDMO &amp; Batch Payment Recovery
                    </Link>
                    <Link
                      href="/pharma-expired-goods-breakage-credit-note-dispute-stockist-recovery"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
                    >
                      Expiry &amp; Credit Note Dispute Recovery
                    </Link>
                    <Link
                      href="/law/order-37-summary-suit-money-recovery"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
                    >
                      Order 37 Summary Suit
                    </Link>
                    <Link
                      href="/law/section-43bh-msme-payment-rule"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
                    >
                      Section 43B(h) MSME Rule
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links Component */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
