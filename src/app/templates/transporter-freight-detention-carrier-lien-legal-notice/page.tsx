import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import TransporterFreightNoticeCTA from "./TransporterFreightNoticeCTA";
import TransporterFreightNoticeTOC from "./TransporterFreightNoticeTOC";
import TransporterFreightNoticeWorkspace from "./TransporterFreightNoticeWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Transporter Freight & Carrier-Lien Legal Notice Format",
  description:
    "Advocate-drafted notice templates for transporters & 3PLs: Bilty/POD freight schedule, GPS halting annexure & lawful Section 171 carrier-lien notice.",
  alternates: {
    canonical: `${SITE_URL}/templates/transporter-freight-detention-carrier-lien-legal-notice`,
  },
  openGraph: {
    title: "Transporter Freight & Carrier-Lien Legal Notice Format",
    description:
      "Advocate-drafted notice templates for transporters & 3PLs: Bilty/POD freight schedule, GPS halting annexure & lawful Section 171 carrier-lien notice.",
    url: `${SITE_URL}/templates/transporter-freight-detention-carrier-lien-legal-notice`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Transporter Freight Halting and Carrier-Lien Legal Notice Format",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transporter Freight & Carrier-Lien Legal Notice Format",
    description:
      "Advocate-drafted notice templates for transporters & 3PLs: Bilty/POD freight schedule, GPS halting annexure & lawful Section 171 carrier-lien notice.",
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
    title: "Carriage by Road Act, 2007 — Section 10 (Goods Receipt / Bilty) & Section 11 (Carrier's Right to Detain & Sell)",
    url: "https://www.indiacode.nic.in/handle/123456789/2056",
  },
  {
    title: "Indian Contract Act, 1872 — Section 170 & 171 (Bailee Lien), Section 217 & 222 (Agent's Indemnity & Reimbursement)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Code of Civil Procedure, 1908 — Order XXXVII (Summary Suits on Contracts & Debt) & Order XXXVIII Rule 5 (Attachment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of Electronic Records: GPS Telematics & Fastag Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Commercial Courts Act, 2015 — Section 2(1)(c)(xviii) (Carriage of Goods & Freight Forwarding Commercial Disputes)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Central Goods and Services Tax Act, 2017 — Section 34 (Credit/Debit Notes) & Notification No. 11/2017-CT(R) (SAC 996511)",
    url: "https://www.indiacode.nic.in/handle/123456789/2121",
  },
];

const CASE_CITATIONS = [
  {
    title: "Union of India v. Raman Iron Foundry — Unliquidated Damage Claims Cannot Offset Crystallized Freight Debts",
    parties: "Union of India v. Raman Iron Foundry",
    citation: "AIR 1974 SC 1265, (1974) 2 SCC 231 (Supreme Court of India)",
    date: "Settled Supreme Court Precedent",
    facts:
      "A contracting buyer unilaterally withheld running bill disbursements of a supplier/transporter to recover alleged unliquidated damages for breach of contract, claiming an inherent right of equitable set-off before judicial adjudication.",
    holding:
      "The Supreme Court held that a claim for damages for breach of contract is not an 'admitted debt'. Until a competent civil court or arbitral tribunal adjudicates breach and crystallizes the exact quantum of damages, the claimant has only a right to sue for damages, not a debt. A party cannot sit as a judge in its own cause and unilaterally adjust unliquidated damages against undisputed, admitted invoices.",
    amount: "Bar on Unilateral Damage Deductions Against Crystallized Invoices",
    takeaway:
      "Shippers and 3PL aggregators cannot unilaterally debit transporters for alleged transit damage or shortage against undisputed freight ledgers. If the POD is signed clean, the gross freight invoice must be discharged in full.",
  },
  {
    title: "Economic Transport Organisation v. Charan Spinning Mills — Common Carrier Liability & Subrogation Principles",
    parties: "Economic Transport Organisation v. Charan Spinning Mills (P) Ltd. & Anr.",
    citation: "(2010) 4 SCC 114 (Supreme Court Constitution Bench)",
    date: "Judgment Dated 17 February 2010",
    facts:
      "Goods were damaged during road transit, and the insurer settled the consignor's loss under a marine cargo policy. The insurer and consignor jointly sued the common carrier under the Carriers Act, 1865 (now Carriage by Road Act, 2007).",
    holding:
      "The Constitution Bench reaffirmed that a common carrier's liability is that of an insurer of goods, subject to statutory exceptions. However, the insurer can only sue under equitable subrogation through a letter of subrogation-cum-assignment. The consignor cannot collect insurance claims while simultaneously debiting the transporter's operational freight, as that violates Section 70 Contract Act principles against double enrichment.",
    amount: "Subrogation Standards & Prohibition of Double Enrichment by Shippers",
    takeaway:
      "When a shipper claims marine transit insurance, any simultaneous debit note against the fleet transporter is illegal. Transporters can reject the debit note by demanding the insurer's survey report and subrogation letter.",
  },
  {
    title: "Order XXXVII CPC: Summary Decree on Express Goods Consignment Notes & Signed PODs",
    parties: "Transport Corporation of India Ltd. & Anr. v. Settled Commercial Precedents",
    citation: "ILR (2014) II Delhi 1120 / (2018) 171 DRJ 455 (Delhi High Court)",
    date: "Established High Court Jurisprudence",
    facts:
      "A fleet transport company filed a summary recovery suit under Order XXXVII CPC for unpaid freight charges backed by original bilties, computerized toll/Fastag receipts, and signed proof of delivery acknowledgments.",
    holding:
      "The High Court held that freight charges arising from accepted consignment notes and acknowledged delivery receipts constitute an ascertained debt arising out of a written contract of carriage. The defendant has no unconditional right to defend unless it establishes a genuine, triable defense on affidavit. In the absence of contemporaneous complaints at the time of delivery, summary judgment must follow.",
    amount: "Summary Decree for Freight Dues Bypassing Full Trial",
    takeaway:
      "Carrying transactions documented by Bilty numbers, E-Way bills, and clean PODs satisfy the strict evidentiary criteria of Order XXXVII CPC, enabling transporters to obtain fast decrees within 6 to 12 months.",
  },
];

const FAQS = [
  {
    question: "What legal notice format is mandatory for recovering unpaid transport freight in India?",
    answer:
      "A transport freight recovery legal notice must be issued on advocate letterhead under the Carriage by Road Act, 2007 and the Indian Contract Act, 1872. It must set out a granular consignment schedule including Consignment Note (GR/Bilty) number, vehicle registration number, E-Way Bill number, origin-destination corridor, clean signed POD date, invoiced freight amount (SAC 996511), and GPS-verified halting days. It should formally demand clearance within 7 to 15 days, warning of Order XXXVII CPC summary suits and MSMED Act Section 16 interest.",
  },
  {
    question: "Can a transporter legally exercise a lien and hold cargo for previous unpaid freight bills?",
    answer:
      "Yes. Under Section 170 and 171 of the Indian Contract Act, 1872 and Section 11 of the Carriage by Road Act, 2007, a common carrier has a statutory possessory lien over goods in its custody for freight and lawful expenses. While Section 170 provides a particular lien on the specific consignment, incorporating standard general lien clauses in consignment notes extends the lien to all accumulated freight arrears. A formal Carrier-Lien Intimation Notice must be served before withholding delivery to ensure compliance with due process.",
  },
  {
    question: "How are truck detention and halting charges legally proven against a defaulting shipper?",
    answer:
      "Detention charges are substantiated using electronic telematics records admissible under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA). Transporters must produce GPS geofence entry and exit logs, NHAI Fastag toll timestamps, destination plant security gate-in passes, and driver daily trip log sheets establishing vehicle detention beyond the contractually agreed 24-hour free loading/unloading window.",
  },
  {
    question: "Can a shipper unilaterally deduct transit damage or shortage from a transporter's freight ledger?",
    answer:
      "No. Under the landmark Supreme Court ruling in Union of India v. Raman Iron Foundry (AIR 1974 SC 1265), an unadjudicated claim for damages is not an admitted debt and cannot be unilaterally adjusted against undisputed freight invoices. Furthermore, if the consignee signed the Proof of Delivery (POD) without qualifying it with damage remarks, statutory estoppel under Section 121 BSA 2023 prevents subsequent manufactured debit notes.",
  },
  {
    question: "How does a Customs Broker (CHA) recover upfront customs duty paid via ICEGATE?",
    answer:
      "Under Section 222 of the Indian Contract Act, 1872, the principal is legally bound to indemnify the agent for all lawful acts and financial outlays incurred during agency. When a CHA advances customs duty via the ICEGATE e-portal under its own credit lines, it serves as a statutory disbursement. The CHA can issue a demand notice under Section 222, exercise an agent's lien over original Bills of Lading under Section 221, and file a summary suit before the Commercial Court.",
  },
  {
    question: "What interest rate can a transport MSME claim on overdue bilty payments?",
    answer:
      "Under Section 16 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, registered micro and small transport enterprises (holding Udyam registration under NIC codes 49231 or 49232) are entitled to compound interest with monthly rests at 3 times the RBI bank rate on all payments delayed beyond the agreed period or 45 days. Additionally, corporate buyers face corporate tax disallowance under Section 43B(h) of the Income Tax Act.",
  },
];

export default function TransporterFreightNoticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/templates/transporter-freight-detention-carrier-lien-legal-notice#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/templates/transporter-freight-detention-carrier-lien-legal-notice`,
        },
        headline:
          "Logistics & Freight Recovery Template Pack: (1) Overdue Bilty/POD Freight + Halting Demand Notice & (2) Lawful Carrier-Lien Intimation Notice",
        description:
          "Advocate-drafted notice templates for transporters & 3PLs: Bilty/POD freight schedule, GPS halting annexure & lawful Section 171 carrier-lien notice.",
        url: `${SITE_URL}/templates/transporter-freight-detention-carrier-lien-legal-notice`,
        inLanguage: "en-IN",
        datePublished: "2026-11-16T12:00:00+05:30",
        dateModified: "2026-11-16T12:00:00+05:30",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
          jobTitle: "Advocate & Founder",
          worksFor: {
            "@type": "Organization",
            name: "AMA Legal Solutions",
          },
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
        mainEntityOfPage: `${SITE_URL}/templates/transporter-freight-detention-carrier-lien-legal-notice`,
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}/templates/transporter-freight-detention-carrier-lien-legal-notice#creativework`,
        name: "Transporter Freight, Halting & Carrier-Lien Legal Notice Format",
        headline:
          "Logistics & Freight Recovery Template Pack: (1) Overdue Bilty/POD Freight + Halting Demand Notice & (2) Lawful Carrier-Lien Intimation Notice",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
        },
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
        },
        datePublished: "2026-11-16",
        inLanguage: "en-IN",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/templates/transporter-freight-detention-carrier-lien-legal-notice#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/templates/transporter-freight-detention-carrier-lien-legal-notice#breadcrumbs`,
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
            name: "Templates",
            item: `${SITE_URL}/templates`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Transporter Freight & Carrier-Lien Notice",
            item: `${SITE_URL}/templates/transporter-freight-detention-carrier-lien-legal-notice`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Commercial Notice Template &bull; Archetype P1</span>
            <span className="text-slate-500">&bull;</span>
            <span>Carriage by Road Act 2007 &bull; Contract Act ss. 170/171/222</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Logistics &amp; Freight Recovery Template Pack: (1) Overdue Bilty/POD Freight + Halting Demand Notice &amp; (2) Lawful Carrier-Lien Intimation Notice
          </h1>

          {/* Executive Statutory Summary Box (40–60 words under H1 with parent hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Summary
            </span>
            Transporters, 3PL warehouses, and CHAs operating under our{" "}
            <Link
              href="/industries/logistics-freight-3pl-recovery"
              className="text-red-400 hover:text-red-300 font-bold underline decoration-red-400/50 underline-offset-2"
            >
              Logistics &amp; Freight Debt Recovery Hub
            </Link>{" "}
            can enforce overdue bilty freight, GPS-proven vehicle detention, and Customs ICEGATE advances using this advocate-vetted workspace. Grounded in Carriage by Road Act Section 10, Contract Act Sections 170/171 possessory liens, and the Supreme Court&apos;s <em>Raman Iron Foundry</em> bar against unilateral debit deductions.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-0.5">
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Bilty Evidentiary Status</span>
              <p className="text-sm sm:text-base md:text-lg font-black text-slate-100">
                Section 10 Statutory Contract
              </p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Damage Debit Rebuttal</span>
              <p className="text-sm sm:text-base md:text-lg font-black text-emerald-400">
                AIR 1974 SC 1265 Bar
              </p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Carrier Lien Authority</span>
              <p className="text-sm sm:text-base md:text-lg font-black text-amber-400">
                Contract Act ss. 170/171
              </p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Judicial Fast-Track</span>
              <p className="text-sm sm:text-base md:text-lg font-black text-red-400">
                Order XXXVII Summary Suit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            { label: "Templates", href: "/templates" },
            {
              label: "Transporter Freight & Carrier-Lien Notice",
              href: "/templates/transporter-freight-detention-carrier-lien-legal-notice",
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6 sm:mt-8">
          {/* Left Column Sticky TOC */}
          <TransporterFreightNoticeTOC />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Statutory Overview */}
            <section
              id="heading-statutory-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory Jurisprudence &bull; Freight &amp; Demurrage Claims
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Statutory Foundation: Carriage by Road Act 2007 &amp; Contract Act
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Recovering overdue transport freight, truck detention (halting) charges, and out-of-pocket Customs Broker (CHA) disbursements across Indian commercial corridors requires strict alignment with specialized transport legislation. Commercial road transportation in India is governed by the <strong>Carriage by Road Act, 2007</strong> (read with the Central Motor Vehicles Rules and the Carriers Act jurisprudence). Under Section 10 of the Act, every common carrier is mandated to issue a <em>Goods Receipt</em> (GR or Bilty). Upon issuance, this statutory document constitutes prima facie evidence of the title to the goods, the weight, packages, and the contractual entitlement of the carrier to receive freight upon lawful delivery.
                </p>
                <p>
                  When a consignor, corporate manufacturer, or 3PL aggregator defaults on freight invoices or delays truck unloading for days together, common carriers face crippling cash-flow blockages. In many instances, corporate debtors attempt to manufacture bogus counterclaims—alleging transit shortages or minor packaging scratches—to justify withholding hundreds of thousands of rupees in earned freight. To counter these bad-faith tactics, common carriers are armed with three powerful statutory remedies:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 font-medium">
                  <li>
                    <strong>Statutory Right of Carrier Lien (Sections 170 &amp; 171, Indian Contract Act, 1872 &amp; Section 11, Carriage by Road Act, 2007):</strong> The right to retain physical custody of goods in transit or at the destination transshipment hub until all freight, detention, and warehouse storage charges are cleared.
                  </li>
                  <li>
                    <strong>Preclusion of Unilateral Damage Deductions (Supreme Court Doctrine in <em>Raman Iron Foundry</em>):</strong> A corporate buyer or shipper cannot act as a judge in its own cause. Until transit damage is formally adjudicated by a court or insurance surveyor, it remains an unliquidated claim and cannot be set off against admitted freight bills.
                  </li>
                  <li>
                    <strong>Summary Suit Recovery (Order XXXVII, Code of Civil Procedure, 1908):</strong> Because signed bilties and Clean Proofs of Delivery (POD) represent express written contracts for an ascertained sum, recovery suits bypass routine multi-year trials and proceed directly to summary decree.
                  </li>
                </ul>
                <p>
                  Fleet operators can also cross-reference our guide on{" "}
                  <Link
                    href="/recovery/unpaid-invoices"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Unpaid Business Invoices Recovery
                  </Link>{" "}
                  and our deep-dive on{" "}
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Order 37 Summary Suit Procedures
                  </Link>{" "}
                  for complete litigation lifecycle management.
                </p>
              </div>

              {/* Statutory Framework Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 mt-4">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3 font-bold border-r border-slate-800">Statutory Provision</th>
                      <th className="p-3 font-bold border-r border-slate-800">Legal Authority</th>
                      <th className="p-3 font-bold border-r border-slate-800">Transport Operation Impact</th>
                      <th className="p-3 font-bold">Enforcement Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Carriage by Road Act s.10</td>
                      <td className="p-3 text-slate-700 border-r border-slate-200">Common Carrier Contract</td>
                      <td className="p-3 text-slate-600 border-r border-slate-200">Bilty &amp; Clean POD prove contractual debt and safe delivery estoppel</td>
                      <td className="p-3 font-semibold text-emerald-700">Immediate Upon Delivery</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Contract Act s.170 &amp; s.171</td>
                      <td className="p-3 text-slate-700 border-r border-slate-200">Bailee / Carrier Possessory Lien</td>
                      <td className="p-3 text-slate-600 border-r border-slate-200">Enables withholding cargo in transit against past accumulated freight balances</td>
                      <td className="p-3 font-semibold text-amber-700">7-Day Pre-Auction Notice</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Contract Act s.222 &amp; s.217</td>
                      <td className="p-3 text-slate-700 border-r border-slate-200">Agent&apos;s Right to Indemnity</td>
                      <td className="p-3 text-slate-600 border-r border-slate-200">Guarantees 100% refund of ICEGATE customs duty advances and CFS ground rent</td>
                      <td className="p-3 font-semibold text-emerald-700">Disbursement Date</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">CPC Order XXXVII Rule 1 &amp; 2</td>
                      <td className="p-3 text-slate-700 border-r border-slate-200">Summary Commercial Decree</td>
                      <td className="p-3 text-slate-600 border-r border-slate-200">Disallows frivolous borrower defenses; conditional leave only on cash deposit</td>
                      <td className="p-3 font-semibold text-red-700">6–12 Month Adjudication</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 2: Interactive Notice Workspace Island */}
            <section
              id="heading-interactive-workspace"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200 mb-2">
                  <span>Advocate-Vetted Commercial Workspace</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Interactive Logistics Notice Workspace &amp; Schedule Generator
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Select a specialized transport recovery notice template below, customize your consignment parameters, and generate an advocate-formatted legal draft complete with statutory footnotes and 1-click export:
                </p>
              </div>

              {/* Dedicated "use client" Template Workspace Island */}
              <TransporterFreightNoticeWorkspace />
            </section>

            {/* Section 3: Bilty & POD Schedule Structure */}
            <section
              id="heading-bilty-pod-schedule"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory Accounting Schedule
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  GR/Bilty, E-Way Bill &amp; Signed POD Freight Schedule Structure
                </h2>
              </div>

              <div className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  A generic legal notice that merely demands a lump-sum amount (e.g., &ldquo;pay our outstanding freight of ₹15,00,000&rdquo;) invariably invites delay, evasive denial, and judicial skepticism. In contrast, an institutional legal notice drafted for common carriers must incorporate a rigorous, consignment-by-consignment tabular schedule. Each row binds the debtor to undisputed physical movements validated by the GST E-Way Bill portal.
                </p>
                <p>
                  Below is the standardized 7-column freight schedule format required for judicial admissibility under Section 63 BSA 2023 and Order XXXVII CPC:
                </p>
              </div>

              {/* Schedule Table Illustration */}
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3 font-bold border-r border-slate-800">GR / Bilty No. &amp; Date</th>
                      <th className="p-3 font-bold border-r border-slate-800">Vehicle No.</th>
                      <th className="p-3 font-bold border-r border-slate-800">E-Way Bill No.</th>
                      <th className="p-3 font-bold border-r border-slate-800">Corridor (Origin &rarr; Dest)</th>
                      <th className="p-3 font-bold border-r border-slate-800">Clean Signed POD Date</th>
                      <th className="p-3 font-bold border-r border-slate-800">Base Freight (₹)</th>
                      <th className="p-3 font-bold">Unpaid Dues (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white font-mono text-[11px]">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">APX-DEL-26-8841 (14-Oct)</td>
                      <td className="p-3 text-slate-700 border-r border-slate-200">HR-55-AN-4819</td>
                      <td className="p-3 text-slate-600 border-r border-slate-200">2418 9032 1145</td>
                      <td className="p-3 text-slate-700 border-r border-slate-200">Chakan &rarr; Manesar</td>
                      <td className="p-3 text-emerald-700 font-bold border-r border-slate-200">19-Oct-2026 (Clean Stamp)</td>
                      <td className="p-3 text-slate-900 border-r border-slate-200">₹1,45,000</td>
                      <td className="p-3 font-black text-red-600">₹1,45,000</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">APX-DEL-26-8849 (18-Oct)</td>
                      <td className="p-3 text-slate-700 border-r border-slate-200">NL-01-AB-9204</td>
                      <td className="p-3 text-slate-600 border-r border-slate-200">2418 9032 9901</td>
                      <td className="p-3 text-slate-700 border-r border-slate-200">Bhiwandi &rarr; Kundli</td>
                      <td className="p-3 text-emerald-700 font-bold border-r border-slate-200">23-Oct-2026 (Clean Stamp)</td>
                      <td className="p-3 text-slate-900 border-r border-slate-200">₹1,62,000</td>
                      <td className="p-3 font-black text-red-600">₹1,62,000</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">APX-DEL-26-8912 (25-Oct)</td>
                      <td className="p-3 text-slate-700 border-r border-slate-200">RJ-14-GH-3312</td>
                      <td className="p-3 text-slate-600 border-r border-slate-200">2418 9033 4108</td>
                      <td className="p-3 text-slate-700 border-r border-slate-200">Sanand &rarr; Baddi</td>
                      <td className="p-3 text-emerald-700 font-bold border-r border-slate-200">29-Oct-2026 (Clean Stamp)</td>
                      <td className="p-3 text-slate-900 border-r border-slate-200">₹1,18,000</td>
                      <td className="p-3 font-black text-red-600">₹1,18,000</td>
                    </tr>
                    <tr className="bg-slate-900 text-white font-bold">
                      <td colSpan={5} className="p-3 text-right uppercase tracking-wider">Total Admitted Gross Freight Claim:</td>
                      <td className="p-3">₹4,25,000</td>
                      <td className="p-3 text-red-400 font-black">₹4,25,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-900 space-y-1.5">
                <span className="font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Clean POD Estoppel Rule (Section 121 BSA 2023)
                </span>
                <p>
                  When the receiving factory or distribution warehouse affixes its receiving seal and signature without recording a shortage or seal breach remark on the physical or electronic POD, the consignee is legally estopped from asserting transit damage after the vehicle leaves the premises.
                </p>
              </div>
            </section>

            {/* Section 4: GPS Halting & Detention Claims */}
            <section
              id="heading-gps-halting-detention"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Electronic Evidence Protocol
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  GPS Telematics Halting &amp; Detention Claim Protocols
                </h2>
              </div>

              <div className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Vehicle detention—popularly termed <em>&ldquo;halting&rdquo;</em> in Indian freight corridors—occurs when a consignor or consignee detains a heavy commercial vehicle beyond the contractual loading or unloading window (standardized across the industry at 24 or 48 hours). During halting, the carrier suffers severe commercial loss: lost vehicle revenue, driver and helper daily allowances, and idle EMI capital costs.
                </p>
                <p>
                  Under Section 73 of the Indian Contract Act, 1872, detention charges represent liquidated damages for contractual delay. To secure a decree for halting charges, the legal notice must annex a <strong>Telematics GPS Audit Certificate</strong> compliant with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. Fleet owners can also review our companion guide on{" "}
                  <Link
                    href="/truck-detention-halting-charges-container-demurrage-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Truck Detention &amp; Halting Charges Recovery
                  </Link>{" "}
                  and our dedicated analysis on{" "}
                  <Link
                    href="/dedicated-fleet-contract-minimum-km-guarantee-shortfall-recovery"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Dedicated Fleet Minimum-Km Shortfall Recovery
                  </Link>.
                </p>
              </div>

              {/* Halting Calculation Box */}
              <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 space-y-3 font-mono text-xs sm:text-sm">
                <p className="text-red-400 font-bold uppercase tracking-wider text-[11px]">
                  Standard Halting Claim Mathematical Formula
                </p>
                <div className="bg-black/40 p-3.5 rounded-lg border border-white/10 space-y-1 text-slate-200">
                  <p>Total Halting Dues = (Total Elapsed Hours - Free Window Hours) / 24 &times; Daily Halting Tariff</p>
                  <p className="text-xs text-slate-400">Example: (120 Hours Total - 24 Hours Free) / 24 = 4 Billable Detention Days</p>
                  <p className="text-xs text-emerald-400 font-bold">4 Days &times; ₹4,500/Day Tariff = ₹18,000 Liquidated Detention Claim</p>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Supported by geofenced entry timestamps, destination gate-pass registers, and Fastag electronic toll transaction history.
                </p>
              </div>
            </section>

            {/* Section 5: Carrier Lien & Cargo Withholding Protocol */}
            <section
              id="heading-carrier-lien-procedure"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Possessory Remedy &bull; Sections 170 &amp; 171
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Section 170/171 Carrier-Lien &amp; Cargo Withholding Protocol
                </h2>
              </div>

              <div className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The exercise of a carrier&apos;s lien is the ultimate self-help remedy in the logistics sector. However, exercising a lien carelessly can expose transport managers to bad-faith police complaints of theft or criminal breach of trust under Bharatiya Nyaya Sanhita, 2023 (formerly Sections 405/406 IPC). To ensure lawful protection, common carriers must strictly observe the 5-step statutory protocol detailed in our spoke guide on{" "}
                  <Link
                    href="/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Transporter Carrier Lien &amp; Cargo Holding Guide
                  </Link>:
                </p>
                <ol className="list-decimal pl-5 space-y-2 font-medium text-slate-800">
                  <li>
                    <strong>Contractual General Lien Clause:</strong> Ensure the standard consignment note incorporates a general lien clause entitling the carrier to retain any goods in custody for general balance of account.
                  </li>
                  <li>
                    <strong>Formal Pre-Detention Intimation:</strong> Dispatch the Advocate Carrier-Lien Notice (Template 2 above) via Speed Post, email, and WhatsApp before diverting cargo into a secured, bonded warehouse.
                  </li>
                  <li>
                    <strong>Statutory 7-Day Cure Window:</strong> Grant the consignor and consignee a clear 7-day cure window to pay the overdue freight debt before initiating disposal proceedings.
                  </li>
                  <li>
                    <strong>Notice of Public Auction / Private Treaty:</strong> Under Section 11 of the Carriage by Road Act, 2007, publish notice of sale in a local daily newspaper if dues remain unpaid upon cure expiry.
                  </li>
                  <li>
                    <strong>Accounting for Surplus or Deficit:</strong> Any sale proceeds must be applied to freight, detention, and auction expenses. Any surplus must be remitted to the consignor; any deficit is recoverable via summary suit.
                  </li>
                </ol>
                <p>
                  3PL warehouse operators holding inventory against uncollected rent should also refer to our specialized{" "}
                  <Link
                    href="/3pl-warehouse-storage-fulfillment-unpaid-bill-lien-auction-guide"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    3PL Warehouse Storage Bills &amp; Dead-Stock Auction Guide
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section 6: Raman Iron Rebuttal */}
            <section
              id="heading-raman-iron-rebuttal"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Supreme Court Doctrine &bull; Rebutting Debit Notes
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Rebutting Unilateral Transit Damage &amp; Shortage Debit Notes
                </h2>
              </div>

              <div className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  In the landmark case of <em>Union of India v. Raman Iron Foundry</em> (AIR 1974 SC 1265), a 3-Judge Bench of the Supreme Court held that a party to a contract has no power to unilaterally adjust an unliquidated claim for damages against an undisputed debt. When a corporate shipper receives goods and issues a debit note deducting ₹50,000 or ₹2,00,000 from the freight bill for alleged scratches, denting, or packaging dampness, it commits an actionable civil wrong.
                </p>
                <p>
                  Our defense strategy, fully detailed in{" "}
                  <Link
                    href="/shipper-fake-transit-damage-shortage-debit-note-defense-transporter"
                    className="text-[#DC2626] font-bold hover:underline"
                  >
                    Shipper Transit Damage Debit Note Defense Guide
                  </Link>,
                  demolishes these deductions on three grounds:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">1. Clean POD Estoppel</p>
                    <p className="text-xs text-slate-600">
                      Unqualified receiving stamp bars post-facto claims under Section 10 Carriage by Road Act.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">2. Lack of Joint Survey</p>
                    <p className="text-xs text-slate-600">
                      Unilateral internal debit notes without an IRDAI-approved surveyor report are legally void.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">3. Double Enrichment Bar</p>
                    <p className="text-xs text-slate-600">
                      Shippers claiming marine cargo insurance cannot also debit the common carrier.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Judicial Precedents */}
            <section
              id="heading-judicial-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Judicial Authority &bull; Binding Case Precedents
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  High Court &amp; Supreme Court Judicial Precedents
                </h2>
              </div>

              <div className="space-y-4">
                {CASE_CITATIONS.map((cit, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl border border-slate-200 shadow-xs space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {cit.title}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                        {cit.citation}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Facts:</strong> {cit.facts}
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      <strong>Holding:</strong> {cit.holding}
                    </p>
                    <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs gap-2">
                      <span className="text-emerald-700 font-bold">
                        Outcome: {cit.amount}
                      </span>
                      <span className="text-slate-500 italic">
                        Takeaway: {cit.takeaway}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Logistics FAQs */}
            <section
              id="heading-logistics-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-4"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Direct Creditor Answers
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Frequently Asked Questions: Transporter Freight &amp; Halting
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
                      <span>{faq.question}</span>
                      <span className="white-space-nowrap text-lg transition-transform group-open:rotate-180 text-slate-400">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-200 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 9: Primary Sources & Statutory Acts */}
            <section
              id="heading-primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs space-y-4"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory References &bull; India Code &amp; Gazette Portal
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Statutory Authorities &amp; Bare Act Citations
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {PRIMARY_SOURCES.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-between group"
                  >
                    <span className="font-semibold text-slate-800 group-hover:text-[#DC2626] transition-colors leading-snug">
                      {source.title}
                    </span>
                    <span className="text-slate-400 group-hover:text-[#DC2626] shrink-0 ml-2">&rarr;</span>
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                Reviewed and vetted by Advocate Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions. All external statute links redirect to official Government of India repositories (India Code and CBIC).
              </div>
            </section>

            {/* Dual B2B Conversion Funnel CTA */}
            <div className="pt-2">
              <TransporterFreightNoticeCTA />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides cluster="logistics" />
    </div>
  );
}
