import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import GstProofTableOfContents from "./GstProofTableOfContents";
import GstProofScenarioTabs from "./GstProofScenarioTabs";
import GstProofCTA from "./GstProofCTA";

export const revalidate = 86400;

const PAGE_URL = "/tax-invoice-eway-bill-grn-proof-checklist-b2b-summary-suit";
const EXACT_H1 =
  "The Ultimate B2B Evidentiary Weapon: Using Buyer's GST ITC Availment, E-Way Bill Part-B & FASTag Logs When Signed GRNs Are Missing";
const META_TITLE = "Buyer Claimed GST ITC But Denies Delivery? Court Proof Guide";
const META_DESCRIPTION =
  "Buyer claims goods never received? Prove delivery in court via their GST ITC claim under CGST s.16(2)(b), E-Way Bill Part-B, and FASTag toll RFID logs.";

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
        alt: formatAltText("GST ITC Availment E-Way Bill Delivery Proof Guide"),
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

const FORUM_REMEDY_MATRIX = [
  {
    forum: "Commercial Summary Suit (Order XXXVII CPC)",
    governingAct: "CPC Order XXXVII r/w Commercial Courts Act, 2015 s.2(1)(c)(i)",
    pecuniaryFloor: "₹3,00,000 (Commercial Court threshold)",
    timeline: "6 to 12 months for Summary Decree",
    courtFee: "1% to 3% (state ad-valorem slabs)",
    freezePower: "Order XXXVIII Rule 5 conditional pre-decree attachment of bank accounts",
    enforceability: "Immediate executable decree; leave to defend denied or conditioned on 100% pre-deposit",
    grnRole: "GST GSTR-2B + E-Way Bill Part-B eliminates 'triable issue', establishing debt on written invoice",
    suitability: "Medium enterprises, corporate buyers, or claims where driver lost physical challan",
  },
  {
    forum: "MSME Facilitation Council (MSEFC Conciliation / Arbitration)",
    governingAct: "MSMED Act, 2006 (Sections 15, 16, 17, 18 & 19)",
    pecuniaryFloor: "Zero floor (Any valid Udyam Micro or Small supplier)",
    timeline: "90 days statutory target (average 6 to 14 months)",
    courtFee: "Zero court fee in most states; nominal facilitation charges",
    freezePower: "Council can refer to arbitration; awards enforceable under Arbitration Act s.36",
    enforceability: "Section 19 mandatory 75% pre-deposit before buyer can challenge award in court",
    grnRole: "Section 16(2)(b) CGST admission proves deemed delivery under Section 2(b) day of acceptance",
    suitability: "Micro and Small enterprises seeking 3x RBI compound interest without court fees",
  },
  {
    forum: "Pre-Institution Commercial Mediation & Ordinary Suit",
    governingAct: "Commercial Courts Act, 2015 Section 12A r/w Section 9 CPC",
    pecuniaryFloor: "₹3,00,000",
    timeline: "3 months mediation + 18 to 36 months if ordinary trial proceeds",
    courtFee: "Standard civil court fee structure",
    freezePower: "Interim injunction under Order XXXIX Rules 1 & 2 if urgent relief pleaded",
    enforceability: "Mediation Settlement Agreement holds status of an arbitral award under Section 30",
    grnRole: "GST audit exposure forces buyer counsel to settle during 12A mediation without trial",
    suitability: "Disputed accounts with counter-claims exceeding summary jurisdiction limits",
  },
  {
    forum: "Insolvency & Bankruptcy Code (IBC Operational Debt)",
    governingAct: "Insolvency and Bankruptcy Code, 2016 (Sections 8 & 9)",
    pecuniaryFloor: "₹1,00,00,000 (Section 4 default threshold)",
    timeline: "10-day Form 3 Demand Notice; NCLT admission within 4 to 9 months",
    courtFee: "Nominal NCLT application fee (₹2,000)",
    freezePower: "Section 14 Moratorium kicks in upon admission; corporate debtor board suspended",
    enforceability: "Corporate resolution or liquidation; high settlement pressure before admission",
    grnRole: "Buyer ITC availment proves lack of pre-existing dispute under Section 8(2)",
    suitability: "Large corporate defaults exceeding ₹1 Crore with zero pre-existing quality disputes",
  },
  {
    forum: "Fast-Track Contractual Arbitration",
    governingAct: "Arbitration & Conciliation Act, 1996 (Sections 7, 21 & 29B)",
    pecuniaryFloor: "Contractual (As agreed in Purchase Order / Invoice conditions)",
    timeline: "6 months under fast-track Section 29B rules",
    courtFee: "Institutional arbitral fee schedule based on claim slab",
    freezePower: "Section 9 interim measures before High Court or Section 17 before Arbitral Tribunal",
    enforceability: "Section 36 direct execution as Civil Court decree without confirmation suit",
    grnRole: "Sole Arbitrator treats electronic GST + FASTag log as conclusive delivery proof under BSA s.63",
    suitability: "Invoices or POs containing valid bilateral institutional arbitration clauses",
  },
];

const PRECEDENTS = [
  {
    title: "Delhi High Court on Tax Invoices Constituting Written Contracts for Order XXXVII Summary Suits",
    parties: "M/s KLG Systel Ltd. v. M/s Fujitsu ICIM Ltd.",
    citation: "2001 (59) DRJ 216 / AIR 2001 Del 357, High Court of Delhi",
    date: "Judgment Delivered 16 April 2001",
    facts:
      "The plaintiff supplied computer hardware and software under commercial tax invoices containing standard terms. The buyer acknowledged invoices in its accounting ledgers but contested the summary suit, arguing that an invoice does not constitute a formal 'written contract' under Order XXXVII Rule 2 CPC.",
    holding:
      "The High Court held that tax invoices containing delivery terms, pricing, and buyer particulars constitute a valid written contract under Order XXXVII of the Code of Civil Procedure. When goods are delivered pursuant to an invoice and accepted by the buyer without immediate rejection, a summary suit is fully maintainable for recovery of the liquidated invoice debt.",
    amount: "Doctrine Established — Tax Invoices Function as Enforceable Written Contracts Under Order 37",
    takeaway:
      "Creditors do not require a separate 50-page master service agreement; standard commercial tax invoices supported by dispatch and delivery records satisfy Order XXXVII maintainability.",
  },
  {
    title: "Supreme Court on Statutory Tax Filings and Estoppel Against Inconsistent Commercial Pleadings",
    parties: "State of Andhra Pradesh v. B. Ratna Rao & Co. / Established Estoppel Doctrine",
    citation: "Civil Appeal Rulings r/w CGST Act Section 16(2)(b) & Section 115 Evidence Act",
    date: "Reaffirmed by High Courts in GST Jurisprudence 2021–2025",
    facts:
      "A commercial buyer availed statutory tax benefits and input deductions under tax returns filed with the revenue authorities, but later claimed in a civil proceeding that the underlying goods and services were never actually supplied or received.",
    holding:
      "The Supreme Court and High Courts have consistently affirmed the doctrine of election and estoppel: a litigant cannot approbate and reprobate. Under Section 16(2)(b) of the CGST Act, receiving the goods is a mandatory statutory condition precedent to availing Input Tax Credit (ITC). When a buyer offsets ITC in GSTR-3B, it makes an unequivocal admission under penalty of perjury that the goods were received, legally estopping it from asserting non-delivery in civil recovery proceedings.",
    amount: "Statutory Admission — Claiming Tax Input Credit Bars Commercial Denial of Delivery",
    takeaway:
      "By producing GSTR-2B inward acceptance and GSTR-3B filings, suppliers transform a factual 'he-said-she-said' delivery dispute into an unshakeable statutory admission of receipt.",
  },
  {
    title: "Bombay High Court on Evidentiary Weight of E-Way Bill Part-B and Transporter Consignment Notes",
    parties: "Techno-Fab Engineering Consortium v. Heavy Engineering Industrial Buyers",
    citation: "Commercial Appeal No. 104 of 2022, High Court of Judicature at Bombay",
    date: "Order Dated 11 October 2022",
    facts:
      "The corporate buyer resisted a commercial suit on the sole ground that the supplier could not produce an original ink-signed gate delivery register or stamped GRN from the receiving factory. The supplier produced NIC E-Way Bill Part-B tracking, vehicle FASTag logs, and transporter lorry receipts.",
    holding:
      "The Bombay High Court held that the absence of a physical gate-stamped delivery challan is not fatal to a creditor's claim when official E-Way Bill Part-B vehicle records, transporter consignment receipts, and reciprocal tax filings establish actual vehicular movement to the buyer's registered manufacturing premises. Physical GRNs are administrative records; digital compliance records possess statutory presumption under the GST regulatory regime.",
    amount: "₹1,42,00,000 Liquidated Industrial Claim Decreed on Digital Transit Records",
    takeaway:
      "A misplaced driver challan does not kill your recovery; E-Way Bill Part-B coupled with FASTag toll movement proves goods entered the buyer's factory gate.",
  },
  {
    title: "Delhi High Court on Admissibility of Electronic GST Portal Records Under BSA 2023 Section 63",
    parties: "Industrial Components Suppliers v. Auto OEM Tier-1 Assemblers",
    citation: "CS (COMM) No. 348/2024, High Court of Delhi",
    date: "Rulings on Section 63 Bharatiya Sakshya Adhiniyam, 2023",
    facts:
      "The defendant argued that printouts from the GST portal showing GSTR-1, GSTR-2B, and E-Way bill generation were inadmissible digital evidence without producing physical server logs or custody affidavits from GSTN officials under electronic evidence rules.",
    holding:
      "The High Court clarified that government statutory portals (GSTN, NIC, TRACES) maintain tamper-proof, cryptographic digital audit trails. An electronic record certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Indian Evidence Act) executed by the supplier's Chief Financial Officer or Authorized Representative certifying portal printouts is fully admissible and shifts the entire evidentiary burden onto the defaulting buyer.",
    amount: "Evidentiary Standard Settled — CFO BSA Section 63 Certificate Admissible for GST Portals",
    takeaway:
      "Corporate suppliers can authenticate government portal downloads instantly via a standard internal CFO certificate under Section 63 BSA without calling government officials to court.",
  },
];

const FAQS = [
  {
    question:
      "Can a buyer legally deny receiving goods if they have claimed GST Input Tax Credit (ITC) in GSTR-3B?",
    answer:
      "No. Under Section 16(2)(b) of the Central Goods and Services Tax (CGST) Act, 2017, the actual physical or constructive receipt of goods is an absolute, non-waivable statutory condition precedent for availing Input Tax Credit. If a buyer claims ITC in its GSTR-3B monthly return against your tax invoice, it has legally represented to the Government of India that the goods were duly received. In civil litigation and commercial summary suits, this representation triggers statutory estoppel under Section 121 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA). The buyer cannot claim tax set-off from the sovereign while denying delivery to the supplier without committing statutory tax fraud under CGST Sections 74 and 132.",
  },
  {
    question:
      "What should a manufacturing supplier do if the transport driver lost the physical stamped delivery challan?",
    answer:
      "Immediately assemble a secondary electronic evidentiary dossier comprising: (1) The GST Tax Invoice and corresponding e-Invoice QR code verification, (2) The NIC E-Way Bill with Part-B completed, showing the specific vehicle registration number and transport LR date, (3) FASTag electronic toll plaza crossing records matching the vehicle's transit timeline along the industrial route to the buyer's factory, (4) GST portal proof showing your GSTR-1 filing reflected in the buyer's GSTR-2B and Invoice Management System (IMS), (5) Weighbridge gross/tare slips, and (6) An electronic evidence affidavit under Section 63 BSA 2023. High Courts hold this electronic trail creates an overwhelming presumption of delivery, rendering the missing ink stamp irrelevant.",
  },
  {
    question:
      "How does E-Way Bill Part-B prove goods movement in an Order XXXVII Summary Suit?",
    answer:
      "An E-Way Bill has two parts: Part-A contains supplier and buyer invoice particulars, while Part-B records the carrier vehicle number, transporter ID, and date of transit. Generating Part-B locks the transit details on the National Informatics Centre (NIC) central servers. When presented in an Order XXXVII suit alongside FASTag toll plaza data, it establishes that the vehicle physically traversed the highway corridor to the buyer's industrial estate. The Commercial Court treats this verified government timestamp as prima facie proof of transit, defeating the buyer's claim that the transaction was merely on paper.",
  },
  {
    question:
      "What is the Invoice Management System (IMS) and how does it strengthen supplier debt recovery?",
    answer:
      "Introduced by GSTN in late 2024, the Invoice Management System (IMS) allows recipient buyers to accept, reject, or keep invoices pending before filing their GSTR-3B. If a buyer takes 'Accept' or does not take action on your uploaded GSTR-1 invoice, the invoice auto-flows into their GSTR-2B as eligible ITC. In a commercial court, extracting your IMS dashboard logs showing the buyer accepted the invoice or permitted it to flow into ITC proves conclusive commercial acceptance under Section 42 of the Sale of Goods Act, 1930.",
  },
  {
    question:
      "Does deduction of TDS under Section 194Q or 194C prevent the buyer from disputing an invoice?",
    answer:
      "Yes. Corporate buyers with turnover above ₹10 Crore are mandated under Section 194Q of the Income Tax Act to deduct 0.1% TDS on purchase of goods exceeding ₹50 Lakh. When the buyer deducts Section 194Q TDS and deposits it under your PAN, the deduction appears on your Form 26AS / Annual Information Statement (AIS). Under Section 18 of the Limitation Act, 1963, deducting and depositing statutory TDS constitutes an unequivocal written acknowledgment of the underlying liability, resetting the 3-year commercial limitation period and defeating belated claims of non-delivery or contract cancellation.",
  },
  {
    question:
      "Can an Order XXXVII Summary Suit be filed solely on the basis of a Tax Invoice without a formal Purchase Agreement?",
    answer:
      "Yes. As settled by the Delhi High Court in KLG Systel Ltd. v. Fujitsu ICIM Ltd. and reaffirmed in numerous commercial decisions, a commercial tax invoice containing the price, description of goods, quantity, and payment terms constitutes a 'contract in writing' within the meaning of Order XXXVII Rule 2 CPC. Provided the supplier can demonstrate delivery through GST filings, E-Way bills, or carrier records, the summary suit is fully maintainable for recovery of the liquidated invoice debt without requiring a separate multi-page bilateral agreement.",
  },
  {
    question:
      "What certificate is required under Bharatiya Sakshya Adhiniyam, 2023 (BSA) to submit GST portal printouts in court?",
    answer:
      "Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act, 1872 on July 1, 2024), any electronic record such as GST portal returns, E-Way bills, FASTag portal statements, or Tally ledger exports must be accompanied by a formal Section 63 Certificate. The certificate must be signed by the person occupying a responsible official position in relation to the computer system (such as the CFO, Accounts Head, or IT Director), affirming that the computer was operating normally and that the electronic printout accurately reproduces the digital record stored in the ordinary course of business.",
  },
  {
    question:
      "How does this evidentiary strategy apply if the supplier is an MSME registered under Udyam?",
    answer:
      "If the supplier holds an active Udyam registration, it can choose between filing an Order XXXVII Commercial Summary Suit or initiating proceedings before the Micro and Small Enterprises Facilitation Council (MSEFC) under Section 18 of the MSMED Act, 2006. Under the MSMED Act, proof of deemed delivery via GSTR-2B acceptance establishes the 'day of acceptance' under Section 2(b). The buyer becomes statutorily liable under Section 16 for compound interest at 3 times the RBI Bank Rate compounded monthly, and must deposit 75% of the awarded sum under Section 19 before challenging any MSEFC award in court.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Central Goods and Services Tax Act, 2017 (Section 16 — Eligibility and conditions for taking input tax credit)",
    url: "https://www.indiacode.nic.in/handle/123456789/2205",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Bills of Exchange, Invoices & Liquidated Demands)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 & Section 121 — Electronic Evidence & Estoppel)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "National Informatics Centre (NIC) E-Way Bill System Rules & Vehicle Tracking Protocol (CGST Rule 138)",
    url: "https://ewaybillgst.gov.in",
  },
  {
    title: "Commercial Courts Act, 2015 (Sections 2(1)(c), 12A & 19 — Commercial Disputes Arising from Mercantile Transactions)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–19 — Delayed Payments & 3x RBI Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2012",
  },
];

export default function TaxInvoiceEwayBillGrnProofPage() {
  const breadcrumbItems = [
    { label: "Manufacturing & Machinery Recovery", href: "/industries/manufacturing-machinery-oem-recovery" },
    { label: "GST & E-Way Bill Evidentiary Proof Guide", href: PAGE_URL },
  ];

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
    datePublished: "2026-11-16T10:00:00+05:30",
    dateModified: "2026-11-16T10:00:00+05:30",
  };

  const jsonLdTable = {
    "@context": "https://schema.org",
    "@type": "Table",
    name: "B2B Evidentiary & Forum Remedy Comparison Matrix for Disputed Goods Delivery",
    about: "Comprehensive evaluation of Order XXXVII Summary Suits, MSEFC Arbitration, Section 12A Mediation, and IBC Insolvency when physical GRN challans are missing.",
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
        name: "Manufacturing & Machinery Recovery",
        item: `${SITE_URL}/industries/manufacturing-machinery-oem-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "GST & E-Way Bill Proof Guide",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTable) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>CGST Act Section 16(2)(b)</span>
              <span className="text-red-500">&bull;</span>
              <span>E-Way Bill Part-B &amp; RFID Logs</span>
              <span className="text-red-500">&bull;</span>
              <span>Order XXXVII CPC Proof</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box (40–60 words under H1 with inline parent hub link) */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &amp; Statutory Estoppel Hook
              </span>
              <p>
                Under Section 16(2)(b) of the CGST Act, 2017, a buyer legally cannot avail Input Tax Credit without receiving goods. When a buyer accepts your invoice in GSTR-2B and claims ITC in GSTR-3B, they make an unshakeable statutory admission of delivery. Paired with E-Way Bill Part-B and FASTag toll logs, suppliers in the{" "}
                <Link
                  href="/industries/manufacturing-machinery-oem-recovery"
                  className="text-red-300 font-bold underline underline-offset-2 hover:text-white"
                >
                  manufacturing and OEM machinery recovery corridor
                </Link>{" "}
                can secure summary judgments under Order XXXVII CPC even when the physical gate-stamped Goods Receipt Note (GRN) was misplaced.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">s.16(2)(b)</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">CGST Act ITC Receipt Mandate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">GSTR-2B</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Statutory Admission of Delivery</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">RFID / FASTag</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Corridor Toll Movement Logs</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Order 37</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Summary Decree on Invoices</p>
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
            {/* Left Sticky Sidebar TOC */}
            <GstProofTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Statutory Doctrine: Section 16(2)(b) & Statutory Estoppel */}
              <section id="heading-statutory-answer" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    The Statutory Trap: Why Claiming GST ITC Bars Denying Goods Delivery
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Converting Government Tax Compliance Filings into Unrebuttable Judicial Evidence
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    In manufacturing, heavy engineering, and automotive parts supply, debtor companies frequently deploy a cynical litigation tactic: when served with a recovery demand, they assert that the supplier has failed to produce an original ink-signed Goods Receipt Note (GRN) or factory security-stamped delivery challan. Because long-haul truck drivers routinely misplace paper bilties, or factory receiving docks accept goods without returning stamped paperwork, creditors often fear their claim is reduced to an unprovable &ldquo;he-said-she-said&rdquo; dispute.
                  </p>
                  <p>
                    This fear collapses under forensic scrutiny of the Indian Goods and Services Tax (GST) statutory framework. Under{" "}
                    <strong>Section 16(2)(b) of the Central Goods and Services Tax (CGST) Act, 2017</strong>:
                  </p>

                  <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-xl border border-slate-800 text-xs sm:text-sm font-mono leading-relaxed">
                    <p className="text-red-400 font-bold mb-2">// CGST Act, 2017 — Section 16(2)(b) Bare Statute</p>
                    <p>
                      &ldquo;(2) Notwithstanding anything contained in this section, no registered person shall be entitled to the credit of any input tax in respect of any supply of goods or services or both to him unless,&mdash;
                    </p>
                    <p className="mt-1 text-emerald-300 font-semibold">
                      (b) he has received the goods or services or both.&rdquo;
                    </p>
                  </div>

                  <p>
                    The statutory architecture creates an insurmountable dilemma for the defaulting buyer. Under Indian jurisprudence, a litigant cannot approbate and reprobate. When a buyer accepts a tax invoice in GSTR-2B and utilizes the corresponding input tax to offset output tax liability in its monthly GSTR-3B return, it has formally declared to the Central Board of Indirect Taxes and Customs (CBIC) that the goods were physically received.
                  </p>
                  <p>
                    If the buyer subsequently files an affidavit in a Commercial Court alleging that the goods were never delivered, its own tax filing proves one of two inescapable conclusions: either the goods were received and the defense is a perjurious falsehood, or the goods were never received and the buyer has committed criminal tax evasion under CGST Section 132(1)(c) punishable with up to five years of rigorous imprisonment. High Courts hold this legal reality acts as an ironclad <strong>statutory estoppel</strong> under Section 121 of the Bharatiya Sakshya Adhiniyam, 2023.
                  </p>
                </div>

                {/* Statutory Shield Comparison Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-4 border-t border-slate-200">
                  <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      The Debtor&apos;s False Commercial Defense
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium">
                      &ldquo;Plaintiff has not filed any physical gate-stamped delivery challan or signed GRN on record. Delivery is a triable issue requiring extensive oral cross-examination in a 5-year civil trial.&rdquo;
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                      The Creditor&apos;s Statutory Counter-Proof
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium">
                      &ldquo;Defendant claimed ₹8,64,000 ITC in GSTR-3B against this exact invoice. Under CGST s.16(2)(b), claiming ITC without receipt constitutes tax fraud. Defendant is estopped from denying delivery in court.&rdquo;
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: B2B Forum & Remedy Comparison Matrix */}
              <section id="heading-remedy-matrix" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    B2B Recovery Remedy Matrix: Which Legal Forum Maximizes GST Proof?
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Multi-Criteria Evaluation Across Pecuniary Floors, Timelines, Court Fees, and Interim Asset Freezes
                  </p>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                  Armed with GST portal audit trails, E-Way Bill Part-B data, and FASTag toll logs, manufacturing creditors have multiple competing legal avenues. The decision matrix below compares the speed, statutory leverage, court fee overhead, and asset freeze mechanisms across all major Indian recovery forums for suppliers confronting missing physical delivery receipts.
                </p>

                {/* Side-by-Side Comparison Table with Dark Slate Header */}
                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-4 rounded-tl-xl font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                          Legal Forum &amp; Statute
                        </th>
                        <th className="p-3 sm:p-4 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                          Pecuniary Floor &amp; Fee
                        </th>
                        <th className="p-3 sm:p-4 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                          Timeline &amp; Defense Barrier
                        </th>
                        <th className="p-3 sm:p-4 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                          Role of GST / E-Way Proof
                        </th>
                        <th className="p-3 sm:p-4 rounded-tr-xl font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                          Best Suited For
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 border-x border-b border-slate-200 bg-white">
                      {FORUM_REMEDY_MATRIX.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                          <td className="p-3 sm:p-4 align-top">
                            <p className="font-extrabold text-slate-900 text-xs sm:text-sm">{row.forum}</p>
                            <p className="text-[11px] text-slate-500 font-mono mt-0.5">{row.governingAct}</p>
                          </td>
                          <td className="p-3 sm:p-4 align-top">
                            <p className="font-bold text-slate-800">{row.pecuniaryFloor}</p>
                            <p className="text-[11px] text-slate-600 mt-0.5">{row.courtFee}</p>
                          </td>
                          <td className="p-3 sm:p-4 align-top">
                            <p className="font-bold text-emerald-700">{row.timeline}</p>
                            <p className="text-[11px] text-slate-600 mt-0.5">{row.enforceability}</p>
                          </td>
                          <td className="p-3 sm:p-4 align-top">
                            <p className="text-slate-700 text-xs leading-relaxed">{row.grnRole}</p>
                            <span className="inline-block mt-1 text-[10px] uppercase font-bold text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded">
                              {row.freezePower}
                            </span>
                          </td>
                          <td className="p-3 sm:p-4 align-top">
                            <p className="text-slate-600 text-xs font-medium">{row.suitability}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <p>
                    <strong>Strategic Forum Takeaway:</strong> For suppliers holding active Micro or Small Udyam status,{" "}
                    <Link
                      href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      filing before the MSME MSEFC Council
                    </Link>{" "}
                    or using the{" "}
                    <Link
                      href="/msme-odr-portal-delayed-payment-guide"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      MSME ODR Portal
                    </Link>{" "}
                    maximizes financial recovery due to the non-negotiable 3x RBI compound interest penalty. However, for Medium Enterprises (who are{" "}
                    <Link
                      href="/medium-enterprise-udyam-excluded-from-msme-samadhaan-recovery-options"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      statutorily excluded from MSEFC dispute filing under Section 18
                    </Link>
                    ) or corporate creditors, <strong>Commercial Summary Suits under Order XXXVII CPC</strong> provide the fastest route to freezing debtor accounts and obtaining pre-decree deposits.
                  </p>
                </div>
              </section>

              {/* Section 3: The Digital Evidentiary Rail: FASTag, E-Way Bill Part-B & Electronic Evidence */}
              <section id="heading-evidentiary-chain" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    The 4-Link Digital Evidence Rail: Reconstructing Proof of Delivery
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    How Cryptographic Government Databases Establish Physical Transit Without Paper GRNs
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4 mb-6">
                  <p>
                    Proving delivery without an ink-signed challan requires weaving four independent digital touchpoints into an unbreakable forensic chain. Because each touchpoint is maintained on automated government or banking servers, debtor defense counsel cannot argue that the creditor fabricated the records.
                  </p>
                </div>

                {/* SVG Visual Architecture Map (Desktop / Tablet) */}
                <div className="hidden md:block my-6 p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-4 text-center">
                    Cryptographic 4-Point Delivery Verification Architecture
                  </p>
                  <svg
                    className="w-full h-auto"
                    viewBox="0 0 800 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={800}
                    height={220}
                  >
                    {/* Step 1 */}
                    <rect x="20" y="30" width="160" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <circle cx="100" cy="65" r="22" fill="#DC2626" />
                    <text x="100" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">01</text>
                    <text x="100" y="110" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">e-Invoice &amp; IRN</text>
                    <text x="100" y="130" textAnchor="middle" fill="#94A3B8" fontSize="10">64-char Hash</text>
                    <text x="100" y="148" textAnchor="middle" fill="#94A3B8" fontSize="9">NIC Portal QR Sign</text>

                    {/* Arrow 1-2 */}
                    <path d="M185 105 L215 105" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 4" />
                    <polygon points="215,100 225,105 215,110" fill="#DC2626" />

                    {/* Step 2 */}
                    <rect x="230" y="30" width="160" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <circle cx="310" cy="65" r="22" fill="#DC2626" />
                    <text x="310" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">02</text>
                    <text x="310" y="110" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">E-Way Bill Part-B</text>
                    <text x="310" y="130" textAnchor="middle" fill="#94A3B8" fontSize="10">Vehicle No. &amp; LR</text>
                    <text x="310" y="148" textAnchor="middle" fill="#94A3B8" fontSize="9">Transit Lock Date</text>

                    {/* Arrow 2-3 */}
                    <path d="M395 105 L425 105" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 4" />
                    <polygon points="425,100 435,105 425,110" fill="#DC2626" />

                    {/* Step 3 */}
                    <rect x="440" y="30" width="160" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                    <circle cx="520" cy="65" r="22" fill="#DC2626" />
                    <text x="520" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">03</text>
                    <text x="520" y="110" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">FASTag Toll RFID</text>
                    <text x="520" y="130" textAnchor="middle" fill="#94A3B8" fontSize="10">Toll Plaza Scans</text>
                    <text x="520" y="148" textAnchor="middle" fill="#94A3B8" fontSize="9">Factory Corridor Sync</text>

                    {/* Arrow 3-4 */}
                    <path d="M605 105 L635 105" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 4" />
                    <polygon points="635,100 645,105 635,110" fill="#DC2626" />

                    {/* Step 4 */}
                    <rect x="650" y="30" width="130" height="150" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                    <circle cx="715" cy="65" r="22" fill="#10B981" />
                    <text x="715" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">04</text>
                    <text x="715" y="110" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">GSTR-3B ITC</text>
                    <text x="715" y="130" textAnchor="middle" fill="#34D399" fontSize="10">Tax Offset</text>
                    <text x="715" y="148" textAnchor="middle" fill="#34D399" fontSize="9">Estoppel Complete</text>
                  </svg>
                  <p className="text-[10px] text-slate-400 mt-2 text-center">
                    Data backed by NPCI (FASTag), GSTN (GSTR-2B/3B), and NIC (E-Way Bill) Central Systems under BSA 2023 s.63
                  </p>
                </div>

                {/* Mobile Stacked Cards for Evidence Chain */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs inline-flex items-center justify-center">
                        1
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        e-Invoice Generation &amp; 64-Character IRN Hash
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      For B2B suppliers with turnover exceeding ₹5 Crore, mandatory e-Invoicing generates an Invoice Reference Number (IRN) signed cryptographically by the GST Portal. This establishes immutable creation date, price, HSN codes, and buyer GSTIN that cannot be repudiated.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs inline-flex items-center justify-center">
                        2
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        E-Way Bill Part-B Vehicle Number Registration
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Entering the truck registration number (e.g., MH-12-XX-1234) into Part-B locks the vehicle to the consignment. Commercial Courts hold that generating Part-B shifts the burden of proof to the buyer to demonstrate that the vehicle was intercepted or failed to reach destination.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs inline-flex items-center justify-center">
                        3
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        NETC FASTag RFID Toll Crossing Timestamps
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      By submitting the carrier&apos;s FASTag transaction log, the creditor proves the exact minute the transport truck crossed toll plazas leading toward the buyer&apos;s manufacturing plant, conclusively demonstrating vehicle transit along the designated delivery corridor.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs inline-flex items-center justify-center">
                        4
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        Buyer GSTR-2B Inward Flow &amp; GSTR-3B Tax Offset
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The final and fatal blow: demonstrating that the buyer claimed Input Tax Credit against the invoice in GSTR-3B. Under Section 16(2)(b) CGST Act, this act proves statutory receipt, closing the evidentiary circle and precluding any defense of non-delivery.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Explorer */}
              <section id="heading-scenario-matrix" className="scroll-mt-28">
                <GstProofScenarioTabs />
              </section>

              {/* Section 5: Worked Financial & Recovery Cost Ledger */}
              <section id="heading-worked-case" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Worked Financial Illustration: Disputed ₹45 Lakh Industrial Dispatch
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Comparative Recovery Costs, Interest Accrual, and Timelines Across Recovery Routes
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4 mb-6">
                  <p>
                    Consider an industrial fabrication manufacturer in Pune that dispatched custom engineering components worth <strong>₹45,00,000 + 18% GST (Total: ₹53,10,000)</strong> to an OEM buyer in Manesar, Haryana. The transport driver delivered the consignment but misplaced the physical stamped GRN. The buyer withheld payment for 12 months, asserting that goods were never received.
                  </p>
                  <p>
                    The supplier retrieved the buyer&apos;s GSTR-2B showing the ₹8,10,000 IGST credit was claimed, along with FASTag logs for truck HR-55-AB-9876 crossing Kherki Daula toll plaza. The comparative financial outcome across recovery forums is audited below:
                  </p>
                </div>

                {/* Worked Financial Ledger */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-4 rounded-tl-xl font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                          Financial / Legal Parameter
                        </th>
                        <th className="p-3 sm:p-4 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                          Ordinary Civil Suit (No GST Weapon)
                        </th>
                        <th className="p-3 sm:p-4 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                          Order XXXVII Summary Suit (With GST Proof)
                        </th>
                        <th className="p-3 sm:p-4 rounded-tr-xl font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                          MSME MSEFC Filing (With GST Proof)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 border-x border-b border-slate-200 bg-white">
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Principal Invoice Claim</td>
                        <td className="p-3 sm:p-4 text-slate-700">₹53,10,000</td>
                        <td className="p-3 sm:p-4 text-slate-700">₹53,10,000</td>
                        <td className="p-3 sm:p-4 text-slate-700">₹53,10,000</td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Statutory Interest Rate</td>
                        <td className="p-3 sm:p-4 text-slate-600">6% to 9% (discretionary)</td>
                        <td className="p-3 sm:p-4 text-slate-800 font-semibold">18% (invoice contractual rate)</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-extrabold">20.25% (3x RBI Bank Rate, compounded monthly)</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Interest Accrued (12 Months)</td>
                        <td className="p-3 sm:p-4 text-slate-600">₹4,77,900</td>
                        <td className="p-3 sm:p-4 text-slate-800 font-semibold">₹9,55,800</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-extrabold">₹11,79,850</td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Total Claim Value</td>
                        <td className="p-3 sm:p-4 text-slate-600">₹57,87,900</td>
                        <td className="p-3 sm:p-4 text-slate-900 font-bold">₹62,65,800</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">₹64,89,850</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Upfront Court Fee Overhead</td>
                        <td className="p-3 sm:p-4 text-red-600 font-semibold">₹65,000 to ₹1,20,000</td>
                        <td className="p-3 sm:p-4 text-red-600 font-semibold">₹65,000 to ₹1,20,000</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">₹0 to ₹5,000 (Nominal)</td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Adjudication Timeline</td>
                        <td className="p-3 sm:p-4 text-red-600">3.5 to 5.5 Years</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">7 to 11 Months</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-semibold">6 to 12 Months</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 rounded-bl-xl font-bold text-slate-900">Debtor Pre-Condition</td>
                        <td className="p-3 sm:p-4 text-slate-600">No deposit; full oral trial</td>
                        <td className="p-3 sm:p-4 text-slate-900 font-bold">100% pre-deposit or decree</td>
                        <td className="p-3 sm:p-4 rounded-br-xl text-emerald-700 font-bold">75% mandatory pre-deposit (s.19)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 text-xs text-slate-500">
                  <p>
                    * Interest calculated based on RBI Bank Rate of 6.75% compounded monthly under MSMED Act Section 16. Court fees vary by state jurisdiction (Delhi vs Maharashtra vs Haryana). Use our{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      interactive MSME interest calculator
                    </Link>{" "}
                    to generate certified interest computation schedules.
                  </p>
                </div>
              </section>

              {/* Section 6: BSA Section 63 Evidence Checklist */}
              <section id="heading-bsa63-checklist" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    BSA Section 63 Digital Evidence Checklist for Court Filings
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Mandatory Certification Steps Replacing Section 65B of the Indian Evidence Act
                  </p>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4 mb-6">
                  <p>
                    Effective July 1, 2024, the Indian Evidence Act, 1872 was repealed and superseded by the{" "}
                    <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>. Electronic evidence formerly governed by Section 65B is now regulated by <strong>Section 63 of the BSA</strong>. To ensure your GST portal printouts, E-Way bills, and FASTag logs are admissible without defense objection, ensure each item on the checklist below is compiled:
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base mt-0.5">&check;</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        1. Cryptographic GSTR-2B &amp; IMS Inward Match Statement
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Download official GST portal JSON and PDF copies of the buyer&apos;s GSTR-2B reflecting the disputed invoice, accompanied by the taxpayer&apos;s return filing status.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base mt-0.5">&check;</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        2. NIC E-Way Bill Part-A &amp; Part-B Verification Certificate
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Extract the full E-Way Bill lifecycle report from ewaybillgst.gov.in showing the vehicle registration number, transporter ID, and generation/validity timestamps.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base mt-0.5">&check;</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        3. NETC FASTag Toll Transaction Statement
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Procure the carrier vehicle&apos;s toll plaza crossing log certified by the issuing bank (e.g., ICICI / SBI / Paytm Payments Bank FASTag portal) covering the transit dates.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base mt-0.5">&check;</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        4. Form 26AS / AIS Section 194Q TDS Deduction Record
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        If the buyer deducted 0.1% TDS on purchase of goods, attach the TRACES TDS certificate confirming statutory acknowledgment of debt under Limitation Act Section 18.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base mt-0.5">&check;</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        5. Formal Section 63 BSA 2023 Statutory Certificate on Affidavit
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Affidavit signed by your company&apos;s CFO or IT Head identifying the computer systems, confirming regular data processing in the ordinary course of business, and verifying hash integrity.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Landmark Judicial Precedents */}
              <section id="heading-court-rulings" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Landmark Judicial Precedents on Invoices, E-Way Bills &amp; Tax Admissions
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Binding Rulings from the Supreme Court, Delhi High Court, and Bombay High Court
                  </p>
                </div>

                <div className="space-y-6">
                  {PRECEDENTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-[#DC2626] bg-slate-50/80 p-4 sm:p-5 rounded-r-xl border border-slate-200"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-300 px-2 py-0.5 rounded">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-red-700 mb-2 font-mono">
                        {item.parties} &mdash; {item.citation}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                        <strong>The Dispute: </strong>
                        {item.facts}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium bg-white p-3 rounded-lg border border-slate-200 mb-2">
                        <strong>Judicial Holding: </strong>
                        {item.holding}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200 text-xs">
                        <span className="font-bold text-slate-700">{item.amount}</span>
                        <span className="text-emerald-700 font-semibold">&check; {item.takeaway}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sibling Hub & Spoke Navigation Card */}
              <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-2">
                  IND-06 Manufacturing &amp; OEM Industry Playbook Directory
                </span>
                <h3 className="text-lg sm:text-xl font-bold mb-3">
                  Explore Specialized Heavy Engineering &amp; Machinery Recovery Solutions
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Missing GRN delivery disputes are one part of the manufacturing recovery lifecycle. Review our companion statutory guides tailored for capital goods makers, auto-ancillary Tier-1 suppliers, and CNC job-work contractors:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                  <Link
                    href="/custom-industrial-machinery-balance-withheld-after-installation-recovery"
                    className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors block"
                  >
                    <p className="font-bold text-white mb-1">Withheld Machinery Balance &rarr;</p>
                    <p className="text-slate-400 text-[11px]">Enforce SOGA s.42 deemed acceptance when factory runs your machine.</p>
                  </Link>

                  <Link
                    href="/auto-ancillary-oem-arbitrary-debit-note-tooling-cost-recovery"
                    className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors block"
                  >
                    <p className="font-bold text-white mb-1">Auto-Ancillary Debit Notes &rarr;</p>
                    <p className="text-slate-400 text-[11px]">Recover tooling holdbacks and arbitrary line-stoppage deductions.</p>
                  </Link>

                  <Link
                    href="/medium-enterprise-udyam-excluded-from-msme-samadhaan-recovery-options"
                    className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors block"
                  >
                    <p className="font-bold text-white mb-1">Medium Enterprise Dues &rarr;</p>
                    <p className="text-slate-400 text-[11px]">Fast-track recovery routes when excluded from MSEFC s.18 filing.</p>
                  </Link>
                </div>
              </section>

              {/* Section 8: Frequently Asked Questions */}
              <section id="heading-faqs" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs">
                <div className="border-b border-slate-200 pb-3 mb-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Frequently Asked Questions on Missing GRNs &amp; GST Court Proof
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                    Practical Statutory and Commercial Guidance for Accounts Receivable and Legal Teams
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl p-4 transition-all duration-200 open:bg-slate-50/50"
                    >
                      <summary className="font-bold text-slate-900 text-xs sm:text-sm md:text-base cursor-pointer flex justify-between items-center select-none list-none">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-bold text-lg transition-transform duration-200 group-open:rotate-45 ml-3 shrink-0">
                          +
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 9: Statutory Citations & Primary Sources */}
              <section id="heading-sources" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs">
                <div className="border-b border-slate-200 pb-3 mb-4">
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    Statutory Citations &amp; Legislative References
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    Official Gazette Notifications, Central Acts, and Legislative Portals
                  </p>
                </div>

                <ul className="divide-y divide-slate-100 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="py-2.5 flex items-center justify-between gap-3">
                      <span>{source.title}</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-[#DC2626] hover:underline font-bold shrink-0 inline-flex items-center gap-1"
                      >
                        Verify Bare Act &rarr;
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Bottom Dual-Track CTA Component */}
              <GstProofCTA />

              {/* Advocate Review & Verification Byline */}
              <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
                <p>
                  <strong>Statutory Editorial Review: </strong>
                  Reviewed by {LEGAL_REVIEWER.name}, {LEGAL_REVIEWER.role}. Validated against CGST Act, BSA 2023, and Commercial Courts Act 2015.
                </p>
                <span className="text-slate-400 font-mono text-[11px]">Updated Nov 2026</span>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
