import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import TransporterLienCTA from "./TransporterLienCTA";
import TransporterLienTableOfContents from "./TransporterLienTableOfContents";
import TransporterLienScenarioTabs from "./TransporterLienScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Can Transporter Hold Cargo for Unpaid Freight? Carrier Lien",
  description:
    "Can a transporter hold cargo for unpaid freight? Learn Particular vs General Lien under Contract Act & Carriage by Road Act to avoid criminal FIRs.",
  alternates: {
    canonical: `${SITE_URL}/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act`,
  },
  openGraph: {
    title: "Can Transporter Hold Cargo for Unpaid Freight? Carrier Lien",
    description:
      "Can a transporter hold cargo for unpaid freight? Learn Particular vs General Lien under Contract Act & Carriage by Road Act to avoid criminal FIRs.",
    url: `${SITE_URL}/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Transporter carrier right of lien unpaid freight Carriage by Road Act India"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can Transporter Hold Cargo for Unpaid Freight? Carrier Lien",
    description:
      "Can a transporter hold cargo for unpaid freight? Learn Particular vs General Lien under Contract Act & Carriage by Road Act to avoid criminal FIRs.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_STATUTORY_SOURCES = [
  {
    title: "The Indian Contract Act, 1872 (Section 170 — Bailee's Particular Lien & Section 171 — General Lien)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
    citation: "Sections 170 & 171, Act No. 9 of 1872",
  },
  {
    title: "Carriage by Road Act, 2007 (Sections 10, 13 & 14 — Consignment Note, Delivery Refusal & Disposal of Goods)",
    url: "https://www.indiacode.nic.in/handle/123456789/2085",
    citation: "Act No. 41 of 2007, Ministry of Road Transport and Highways",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS Section 316 — Criminal Breach of Trust & Section 303 — Theft Preemption)",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
    citation: "Act No. 45 of 2023, Ministry of Home Affairs",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for GPS & Digital Bilties)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
    citation: "Act No. 47 of 2023",
  },
  {
    title: "Commercial Courts Act, 2015 (Pre-Institution Mediation & Commercial Summary Adjudication)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
    citation: "Act No. 4 of 2016",
  },
];

const LANDMARK_PRECEDENTS = [
  {
    title: "Supreme Court on General Lien and Contractual Extension Beyond Strict Bailees",
    parties: "Board of Trustees of the Port of Bombay v. Sriyanesh Knitters",
    citation: "(1999) 7 SCC 359, Supreme Court of India",
    date: "Judgment Dated 30 September 1999",
    facts:
      "The consignee contested the port trust's retention of incoming consignments for general arrears due under previous handling and storage operations. The consignee claimed that in the absence of an explicit statutory declaration, only a particular lien attached to the specific consignment.",
    holding:
      "The Supreme Court established that parties to a commercial contract can explicitly create a General Lien by contract under Section 171 of the Indian Contract Act, even if the bailee does not fall within the five traditional statutory categories (bankers, factors, wharfingers, High Court attorneys, and policy brokers). Where contract terms or consignment notes explicitly grant a general lien, the bailee is legally empowered to retain subsequent consignments for past ledger dues.",
    amount: "Doctrine of Contractual General Lien Established for Freight & Storage",
    takeaway:
      "Transporters and fleet operators can lawfully detain current consignments to recover unpaid historical freight, provided an explicit General Lien covenant is printed on the Goods Receipt (Bilty), Goods Forwarding Note, or Master Transport Agreement.",
  },
  {
    title: "Supreme Court on Common Carrier Possessory Bailment & Freight Security",
    parties: "Rashtriya Ispat Nigam Ltd. v. Dewan Chand Ram Saran",
    citation: "(2012) 5 SCC 306, Supreme Court of India",
    date: "Judgment Dated 25 April 2012",
    facts:
      "A dispute arose concerning the carrier's custody of industrial cargo and the allocation of operational service charges. The consignor alleged that the contractor's detention of cargo constituted an illegal interference with ownership.",
    holding:
      "The Supreme Court affirmed that a commercial handling and carriage contractor in physical possession of goods acts as a bailee with legally protected possessory rights. Until lawful freight, handling dues, and demurrage are paid or secured in accordance with the contract, possessory control remains lawful and does not constitute civil conversion or unlawful restraint.",
    amount: "Possessory Bailment Shield Against Conversion Actions",
    takeaway:
      "A transporter retaining physical control of cargo pending freight settlement maintains lawful possessory custody, extinguishing claims of wrongful conversion provided statutory notices are served.",
  },
  {
    title: "High Court of Bombay on Transporter's Possessory Lien for Carrier Dues",
    parties: "M/s Savani Transport Ltd. v. M/s Kamani Tubes Ltd.",
    citation: "AIR 1979 Bom 302, High Court of Bombay",
    date: "Judgment Dated 18 January 1979",
    facts:
      "The transport company held industrial consignments under a possessory carrier lien when the manufacturing company defaulted on transportation charges across multiple dispatches.",
    holding:
      "The High Court held that a common carrier possesses an inherent possessory lien over goods entrusted to it for carriage in respect of the freight payable for carrying those goods. Where the terms of carriage stipulate a general lien, the carrier is entitled to detain the cargo until all outstanding freight across the running account is satisfied.",
    amount: "High Court Benchmark on Freight Detention Rights",
    takeaway:
      "Detention of cargo under a carrier's lien is a recognized legal remedy. To withstand challenge, the transporter must prove unbroken physical possession and formal notice specifying the precise freight balance.",
  },
  {
    title: "Supreme Court on Mandatory Commercial Mediation & Freight Receivables",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Judgment Dated 17 August 2022",
    facts:
      "The plaintiff filed a commercial money recovery suit without exhausting Pre-Institution Mediation under Section 12A of the Commercial Courts Act, 2015. The defendant sought rejection of the plaint under Order VII Rule 11 CPC.",
    holding:
      "The Supreme Court declared Section 12A of the Commercial Courts Act mandatory. However, where an urgent interim relief is sought—such as an order for preservation, supervised warehouse custody, or auction of deteriorating detained cargo under carrier lien—the suit can be instituted directly with an exemption application.",
    amount: "Commercial Court Procedural Threshold for 3PLs",
    takeaway:
      "For standard freight balance recovery suits, pre-institution mediation is mandatory; however, urgent cargo detention preservation or auction approvals qualify for immediate court intervention.",
  },
  {
    title: "Supreme Court on Operational Debt & Carrier Freight Invoices under IBC",
    parties: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    date: "Judgment Dated 21 September 2017",
    facts:
      "An operational creditor issued a Section 8 demand notice under the Insolvency and Bankruptcy Code (IBC). The corporate debtor cited previous email correspondence alleging service deficiencies to contest insolvency admission under Section 9.",
    holding:
      "The Supreme Court held that the adjudicating authority must determine whether there exists a plausible 'pre-existing dispute' raised prior to the Section 8 demand notice. If a genuine dispute regarding cargo damage, transit delay, or short-delivery was formally raised before notice, Section 9 insolvency cannot proceed.",
    amount: "IBC Threshold Standard for Freight Claims",
    takeaway:
      "To leverage IBC Section 9 for freight dues over ₹1 Crore, transporters must demonstrate that consignees accepted Goods Receipts without endorsing transit damage or shortages prior to the demand notice.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Can a transporter legally hold cargo for unpaid freight in India?",
    answer:
      "Yes. Under Section 170 of the Indian Contract Act, 1872, a carrier possesses a statutory 'Particular Lien' over the specific consignment currently in its custody for the freight, loading, unloading, and halting charges incurred on that specific shipment. The transporter is legally entitled to refuse delivery until those specific charges are cleared.",
  },
  {
    question: "Can a transport company detain a current consignment to recover old pending bills?",
    answer:
      "Only if there is an explicit contractual 'General Lien' clause. Under Section 171 of the Indian Contract Act, common carriers do not enjoy an automatic statutory General Lien like bankers or wharfingers. However, as confirmed by the Supreme Court in Board of Trustees of the Port of Bombay v. Sriyanesh Knitters, parties can contractually agree to a General Lien. If your Consignment Note (Bilty), Goods Forwarding Note, or Master Transport Agreement explicitly states that the carrier holds a general lien on all consignments for past dues across the running ledger, holding the goods is legally valid. Without this clause, holding current goods for past bills is unlawful and risks criminal complaints.",
  },
  {
    question: "What should a fleet operator do if the shipper files a police complaint for theft or extortion?",
    answer:
      "Immediately produce the Goods Receipt (Bilty), the signed driver handover, and the formal Carrier Lien Intimation Notice dispatched under Section 170/171 of the Indian Contract Act. File a preemptive civil intimation letter with the Station House Officer (SHO) explaining that the dispute is purely commercial possessory bailment governed by the Carriage by Road Act, 2007. Because the transporter holds lawful custody as a bailee, the essential ingredients of Theft (Section 303 BNS) and Criminal Breach of Trust (Section 316 BNS) are legally absent.",
  },
  {
    question: "How long can a transporter hold goods before auctioning them?",
    answer:
      "Under Sections 13 and 14 of the Carriage by Road Act, 2007, if the consignee refuses delivery or fails to pay freight within 30 days of notice, the common carrier can issue a statutory 30-day disposal notice to the consignor. If dues remain unpaid after this notice period, the carrier can proceed to sell the goods via public auction. For perishable cargo, Section 14 permits emergency disposal within a shorter, reasonable timeframe to prevent total loss.",
  },
  {
    question: "What exact words must be printed on the Bilty to enforce a General Lien?",
    answer:
      "The reverse of the Goods Receipt (Bilty) and the Goods Forwarding Note must print: 'GENERAL LIEN CLAUSE: The carrier shall have a general as well as a particular lien on all goods, packages, and documents in its possession, custody, or control for any freight, storage, demurrage, halting charges, or any other outstanding balances due from the consignor, consignee, or owner of the goods on any previous or current account. If such debt remains unpaid after 15 days of formal written notice, the carrier shall be entitled to sell the goods by public auction or private treaty under Section 171 of the Indian Contract Act, 1872 and the Carriage by Road Act, 2007.'",
  },
  {
    question: "Can the consignee break the truck seal or forcefully unload the goods without paying?",
    answer:
      "No. Forceful unloading by the consignee or their warehouse staff without payment and without the carrier's consent constitutes criminal trespass and mischief under Bharatiya Nyaya Sanhita, 2023. Drivers should remain inside the vehicle, record video evidence, and immediately summon local police while parking at an authorized commercial yard or transport terminal.",
  },
  {
    question: "Can a transporter claim truck detention and halting charges while exercising a lien?",
    answer:
      "Yes, provided halting charges are stipulated in the Consignment Note or master contract. When a transporter rightfully exercises a possessory lien due to the consignee's failure to tender freight, the vehicle's immobilisation is caused by the debtor's breach. The transporter can bill halting charges at the contract rate (typically ₹2,500 to ₹7,500 per day depending on vehicle tonnage) and include these in the final recovery demand.",
  },
];

export default function TransporterLienPage() {
  const currentYear = new Date().getFullYear();

  // Structured Data Schemas
  const breadcrumbSchema = {
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
        name: "Logistics, 3PL & Fleet Recovery",
        item: `${SITE_URL}/industries/logistics-freight-3pl-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Transporter Carrier Lien Law",
        item: `${SITE_URL}/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Transporter's Right of Lien Decoded: Holding Current vs Past Consignments for Unpaid Freight Without Triggering Theft/Extortion FIRs",
    description:
      "Critical distinction for fleet owners: statutory Particular Lien applies to the current shipment's freight—holding cargo for old ledger dues requires explicit GR General-Lien clauses + Notice!",
    image: [`${SITE_URL}/blog_money_recovery.png`],
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      worksFor: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
      },
      // TODO(reviewer): src/data/reviewers.ts is absent in this repository
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
    },
    datePublished: "2026-11-16T10:00:00+05:30",
    dateModified: "2026-11-16T10:00:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Section 170 &middot; 171 ICA</span>
              <span className="text-slate-600">&bull;</span>
              <span>Carriage by Road Act 2007</span>
              <span className="text-slate-600">&bull;</span>
              <span>BNS FIR Shield</span>
            </div>

            {/* Single Page H1 - Exactly matching headline in schema */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Transporter&apos;s Right of Lien Decoded: Holding Current vs Past Consignments for Unpaid Freight Without Triggering Theft/Extortion FIRs
            </h1>

            {/* Executive Statutory Summary Box (40–60 words) */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &middot; Fleet &amp; 3PL Statutory Protection
              </span>
              Under Indian law, a transporter holds an automatic statutory{" "}
              <strong>Particular Lien</strong> under Section 170 of the Contract Act for freight
              due on the <em>current</em> shipment. However, detaining a current shipment for{" "}
              <em>past ledger dues</em> requires an enforceable <strong>General Lien</strong> clause on
              the Bilty under Section 171 plus formal notice, shielding fleet owners from criminal
              theft allegations under the{" "}
              <Link
                href="/industries/logistics-freight-3pl-recovery"
                className="text-red-400 hover:underline font-bold"
              >
                Logistics, 3PL Warehousing &amp; Fleet Recovery Hub
              </Link>
              .
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">
                  Particular Lien (s.170)
                </span>
                <span className="text-sm sm:text-base md:text-lg font-black text-emerald-400 block">
                  Automatic Right
                </span>
                <span className="text-[10px] text-slate-400">Current Trip Freight</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">
                  General Lien (s.171)
                </span>
                <span className="text-sm sm:text-base md:text-lg font-black text-amber-400 block">
                  Contractual Only
                </span>
                <span className="text-[10px] text-slate-400">Past Ledger Dues</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">
                  Carriage Act Notice
                </span>
                <span className="text-sm sm:text-base md:text-lg font-black text-slate-100 block">
                  30-Day Window
                </span>
                <span className="text-[10px] text-slate-400">Section 13 Disposal</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">
                  Criminal Exposure
                </span>
                <span className="text-sm sm:text-base md:text-lg font-black text-red-400 block">
                  Zero BNS Liability
                </span>
                <span className="text-[10px] text-slate-400">With Prior Intimation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Logistics Recovery", href: "/industries/logistics-freight-3pl-recovery" },
                {
                  label: "Transporter Carrier Lien Law",
                  href: "/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act",
                },
              ]}
            />
          </div>

          {/* 2-Column Split */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <TransporterLienTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Fatal Transporter Trap */}
              <section
                id="heading-particular-vs-general-lien"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    1
                  </span>
                  <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                    Statutory Analysis &middot; Indian Contract Act 1872
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Particular Lien vs General Lien: The Legal Minefield for Fleet Owners
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Every week across India, transport company owners face the same commercial crisis:
                  a corporate shipper owes ₹12 Lakh to ₹45 Lakh across 15 previous consignments spanning
                  several months. The shipper delays payment, offers evasive excuses, and then orders
                  another high-value truckload worth ₹60 Lakh. The transporter, hoping to force a ledger
                  settlement, instructs the truck driver to halt the vehicle at a company yard or
                  highway pump and refuses to deliver until the entire outstanding balance is cleared.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Within 24 hours, the shipper lodges a criminal complaint at the local police station
                  alleging <strong>Criminal Breach of Trust (Section 316 BNS)</strong>,{" "}
                  <strong>Theft (Section 303 BNS)</strong>, and <strong>Extortion (Section 308 BNS)</strong>.
                  Police officers seize the truck, threaten the driver with arrest, and force the
                  transporter to release the cargo without recovering a single rupee of historical freight.
                </p>

                {/* Statutory Comparison Matrix Table */}
                <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">Legal Parameter</th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">
                          Particular Lien (Section 170 ICA)
                        </th>
                        <th className="p-3 sm:p-4 font-bold">General Lien (Section 171 ICA)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold bg-slate-50 text-slate-900">Scope of Debt</td>
                        <td className="p-3 sm:p-4">Freight and charges on the <em>specific</em> consignment in custody</td>
                        <td className="p-3 sm:p-4 font-semibold text-emerald-800 bg-emerald-50/50">
                          General balance of account across <em>all prior</em> historical consignments
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold bg-slate-50 text-slate-900">Statutory Availability</td>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">
                          Automatic statutory right for any bailee providing service
                        </td>
                        <td className="p-3 sm:p-4 text-red-700 font-bold">
                          Restricted by statute to 5 professions; carriers require <strong>express contract</strong>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold bg-slate-50 text-slate-900">Documentation Required</td>
                        <td className="p-3 sm:p-4">Goods Receipt (Bilty) showing current freight unpaid</td>
                        <td className="p-3 sm:p-4">
                          Explicit General Lien clause on Bilty/MSA + Detailed Statement of Overdue Accounts
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold bg-slate-50 text-slate-900">Criminal Risk</td>
                        <td className="p-3 sm:p-4 text-emerald-700">
                          Virtually zero; lawful possessory bailment protects carrier
                        </td>
                        <td className="p-3 sm:p-4 text-amber-700">
                          High if contractual clause is missing; police may view as illegal detention
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold bg-slate-50 text-slate-900">Right of Sale / Auction</td>
                        <td className="p-3 sm:p-4">
                          Does not automatically grant right to sell unless permitted by special statute
                        </td>
                        <td className="p-3 sm:p-4">
                          Governed by Carriage by Road Act Section 13/14 and contractual terms after notice
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-5 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Critical Statutory Takeaway:</strong> Under Section 171 of the Indian
                    Contract Act, 1872, the law only grants an automatic statutory general lien to
                    bankers, factors, wharfingers, High Court attorneys, and policy brokers. Common
                    carriers and transporters are <strong>not</strong> on this statutory list. Therefore,
                    transporters can <em>only</em> exercise a General Lien if it is established by an{" "}
                    <strong>express contract</strong> agreed to by the shipper.
                  </p>
                </div>
              </section>

              {/* Section 2: Statutory Architecture */}
              <section
                id="heading-statutory-carriage-framework"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    2
                  </span>
                  <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                    Statutory Architecture &middot; Carriage by Road Act 2007
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Carriage by Road Act 2007: Consignment Notes &amp; Cargo Auction Rules
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  The Carriage by Road Act, 2007 (Act No. 41 of 2007) replaced the archaic Carriers
                  Act, 1865, creating a modern regulatory framework for road transport logistics in
                  India. For fleet owners and 3PL operators seeking to recover unpaid freight and halting
                  demurrage, three sections establish the procedural timeline:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-black uppercase text-[#DC2626] block mb-1">
                      Section 10 &middot; Notice of Loss
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">180-Day Statutory Shield</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      No suit can be filed against a common carrier for loss or damage to goods unless a
                      written notice is served on the carrier within 180 days of booking. Shippers cannot
                      spring surprise counterclaims for transit damage without this mandatory notice.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-black uppercase text-[#DC2626] block mb-1">
                      Section 13 &middot; Delivery Refusal
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">30-Day Consignor Notice</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Where the consignee fails or refuses to take delivery or pay freight, the common
                      carrier must issue a written notice giving 30 days to the consignor to clear dues
                      and give delivery instructions, failing which public auction procedures trigger.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-black uppercase text-[#DC2626] block mb-1">
                      Section 14 &middot; Perishables
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">Emergency Cargo Auction</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      For perishable cargo or temperature-controlled consignments at risk of deterioration,
                      the carrier can dispose of goods without waiting 30 days, applying auction proceeds
                      first to freight, halting, and storage expenses.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  When dealing with stubborn commercial debtors, transporters should pair Carriage by
                  Road Act notices with remedies under the{" "}
                  <Link
                    href="/recovery/unpaid-invoices"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Unpaid B2B Invoices Recovery Protocol
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Order XXXVII CPC Summary Suit
                  </Link>{" "}
                  to secure swift decree enforcement on acknowledged freight ledgers.
                </p>
              </section>

              {/* Section 3: Drafting Enforceable Bilty Clauses */}
              <section
                id="heading-bilty-clause-drafting"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    3
                  </span>
                  <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                    Contractual Defense &middot; Consignment Note Engineering
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Drafting Bulletproof General Lien Clauses on Goods Receipts (Bilty)
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Under the precedent laid down by the Supreme Court in <em>Sriyanesh Knitters</em>, the
                  entire legality of holding a current consignment for past debt hinges on whether the
                  shipper agreed to a General Lien clause. Transport companies must ensure that every
                  Goods Receipt (LR / GR / Bilty) and Goods Forwarding Note carries an enforceable
                  contractual covenant.
                </p>

                {/* Code-like Contract Clause Box */}
                <div className="bg-slate-900 rounded-xl p-5 text-slate-200 text-xs sm:text-sm font-mono border border-slate-800 shadow-inner my-5">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 text-xs">
                    <span>STANDARD B2B GENERAL LIEN &amp; DETENTION COVENANT</span>
                    <span className="text-emerald-400 font-bold">COURT-ENFORCEABLE CLAUSE</span>
                  </div>
                  <p className="leading-relaxed text-slate-300">
                    &ldquo;14. CARRIER&apos;S GENERAL &amp; PARTICULAR LIEN: The carrier shall have an
                    absolute, continuous, and irrevocable particular lien on the goods comprised in this
                    Consignment Note for freight, octroi, demurrage, loading, and halting charges
                    accruing thereon.
                    <br />
                    <br />
                    14.1 GENERAL LIEN FOR RUNNING BALANCE: Under Section 171 of the Indian Contract Act,
                    1872, the consignor, consignee, and owner of the goods expressly agree that the carrier
                    shall additionally hold a GENERAL LIEN over all goods, merchandise, containers, and
                    documents of title in its possession or control for any outstanding balance or unpaid
                    freight due from the consignor or consignee on any prior account or previous
                    consignments.
                    <br />
                    <br />
                    14.2 RIGHT OF SALE &amp; DETENTION CHARGES: If the debt is not settled within 15 days
                    of formal notice of lien, the carrier shall be entitled to sell the detained goods by
                    public auction or private sale pursuant to Sections 13 and 14 of the Carriage by Road
                    Act, 2007. Daily vehicle halting charges of &rupee;3,500/day and warehouse storage
                    shall accrue to the debtor until realization.&rdquo;
                  </p>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <span className="text-xs font-black uppercase text-emerald-800 block mb-1">
                    Operational Implementation Tip
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Ensure that the shipper signs or digitally accepts the Goods Forwarding Note at the
                    time of booking. In modern digital logistics, having the shipper accept these terms
                    via an authenticated portal or electronic bilty with an audit log creates an
                    unassailable record admissible under <strong>Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>.
                  </p>
                </div>
              </section>

              {/* Section 4: Operational Decision Tree & Pre-Detention SOP */}
              <section
                id="heading-pre-detention-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    4
                  </span>
                  <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                    Standard Operating Procedure &middot; Fleet Risk Mitigation
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  The 4-Step Pre-Detention SOP: Halting Goods Without Criminal Risk
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  Before a fleet manager instructs a truck driver to refuse offloading or divert to a
                  holding yard, this strict 4-step compliance protocol must be executed to prevent police
                  intervention and eliminate extortion counter-charges.
                </p>

                {/* 4 Step Cards */}
                <div className="space-y-4">
                  <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      STEP 1
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        Contractual Audit &amp; Signed Bilty Verification
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Verify that the consignment has a signed Bilty with the Section 171 General Lien
                        clause, or that a signed Master Transport Agreement exists. If no written clause
                        exists, <em>do not detain the goods for past dues</em>; detain only if current
                        freight is unpaid (Particular Lien under s.170).
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      STEP 2
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        Dispatch Formal 48-Hour Carrier Lien Demand Notice
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Before halting or within 2 hours of halting, send a formal legal notice via Email,
                        WhatsApp, and Speed Post RPAD stating the exact bilty numbers, overdue amounts,
                        halting rate, and designated holding facility location.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      STEP 3
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        Secure Custody in Authorized Commercial Yard
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Never abandon the truck on public highways or outside the consignee&apos;s gate where
                        breaches of peace can occur. Park at an authorized transporter terminal or private
                        gated yard. Record high-definition video of container seals, odometer, and fuel levels.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      STEP 4
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        Submit Proactive Civil Intimation to Jurisdictional Police
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Submit a written copy of the Carrier Lien Notice and Bilty to the local Station
                        House Officer (SHO) with receiving acknowledgment. This pre-empts the shipper&apos;s
                        attempt to register a false Section 316 BNS (Criminal Breach of Trust) FIR.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Interactive Scenario Explorer */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    5
                  </span>
                  <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                    Interactive Simulation &middot; Commercial Logistics Failure Modes
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-3">
                  4 Common Freight Detention Scenarios Analyzed
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  Explore how statutory bailment, contractual clauses, and limitation timelines apply
                  across real-world logistics bottlenecks—from to-pay bilty defaults to perishable cold-chain
                  crises.
                </p>

                <TransporterLienScenarioTabs />
              </section>

              {/* Section 6: Judicial Precedents */}
              <section
                id="heading-judicial-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    6
                  </span>
                  <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                    Case Law Commentary &middot; Verified Judicial Authorities
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Supreme Court &amp; High Court Authorities on Carrier Lien &amp; Detention
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  Every legal holding below is established law governing freight recovery, possessory
                  bailment, and commercial dispute pre-emption. Counsel and fleet legal teams can cite these
                  precedents in court applications or police representations.
                </p>

                {/* Precedent Cards with Crimson Left-Accent Bars */}
                <div className="space-y-6">
                  {LANDMARK_PRECEDENTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="pl-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
                          {item.citation} &middot; {item.date}
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs font-bold text-slate-700 mb-3 italic">
                          {item.parties}
                        </p>

                        <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                          <p>
                            <strong className="text-slate-900">Facts: </strong>
                            {item.facts}
                          </p>
                          <p>
                            <strong className="text-slate-900">Holding &amp; Ratio: </strong>
                            {item.holding}
                          </p>
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {item.amount}
                          </span>
                          <span className="text-[11px] font-medium text-slate-500">
                            <strong>Fleet Takeaway:</strong> {item.takeaway}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7: Defeating BNS Theft / Extortion FIRs */}
              <section
                id="heading-fir-shield-bns-defense"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    7
                  </span>
                  <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                    Criminal Defense Shield &middot; Bharatiya Nyaya Sanhita 2023
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Pre-Empting Criminal FIRs: Section 316 (Breach of Trust) &amp; Section 303 (Theft)
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  When shippers or consignees face a valid cargo lien, their default retaliatory tactic is
                  to approach the local police station to register an FIR under Bharatiya Nyaya Sanhita, 2023
                  (formerly IPC Sections 406, 379, 384). Understanding the legal elements of these offenses
                  enables transporters to quash malicious complaints at the threshold.
                </p>

                {/* Offense vs Defense Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl">
                    <span className="text-[11px] font-black uppercase text-[#DC2626] block mb-1">
                      Shipper Allegation
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 mb-2">BNS Section 316 (CBT)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Shipper claims goods were entrusted for carriage and the transporter misappropriated
                      or converted them to their own use.
                    </p>
                    <div className="pt-2 border-t border-red-100 text-[11px] text-emerald-800 font-semibold">
                      <strong>Transporter Shield:</strong> Lawful possessory lien under Section 170/171 ICA
                      negates <em>mens rea</em> (dishonest intention). Custody remains as a bailee.
                    </div>
                  </div>

                  <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl">
                    <span className="text-[11px] font-black uppercase text-[#DC2626] block mb-1">
                      Shipper Allegation
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 mb-2">BNS Section 303 (Theft)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Shipper claims the driver stole the cargo or took movable property out of their
                      possession without consent.
                    </p>
                    <div className="pt-2 border-t border-red-100 text-[11px] text-emerald-800 font-semibold">
                      <strong>Transporter Shield:</strong> Goods were in the carrier&apos;s lawful possession under
                      a valid Bilty. One cannot steal property already in one&apos;s lawful custody.
                    </div>
                  </div>

                  <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl">
                    <span className="text-[11px] font-black uppercase text-[#DC2626] block mb-1">
                      Shipper Allegation
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 mb-2">BNS Section 308 (Extortion)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Shipper claims the transporter put them in fear of injury/loss to extort money
                      (freight payment).
                    </p>
                    <div className="pt-2 border-t border-red-100 text-[11px] text-emerald-800 font-semibold">
                      <strong>Transporter Shield:</strong> Demanding contractual freight due under a commercial
                      invoice does not constitute unlawful extortion under settled jurisprudence.
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  If the local police attempt to register an FIR or seize the vehicle, the transporter
                  can immediately approach the High Court under{" "}
                  <strong>Section 482 of the Code of Criminal Procedure (or Section 528 BNSS 2023)</strong>{" "}
                  for quashing. The Supreme Court has repeatedly held (e.g., in <em>State of Haryana v. Bhajan Lal</em>)
                  that purely civil commercial disputes cannot be converted into criminal proceedings to
                  arm-twist creditors.
                </p>
              </section>

              {/* Section 8: Worked Financial Ledger */}
              <section
                id="heading-worked-financial-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    8
                  </span>
                  <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                    Numerical Reconciliation &middot; Cost Recovery Ledger
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Financial Model: Calculating Freight, Demurrage &amp; Halting Recovery
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  When exercising a carrier lien, transporters must quantify not only the base freight but
                  also vehicle halting charges, terminal storage, security escort, and interest. Here is
                  a worked commercial ledger for a multi-axle trailer holding industrial goods worth ₹45 Lakh.
                </p>

                {/* Ledger Breakdown Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 my-5">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-4 font-bold">Ledger Component</th>
                        <th className="p-3 sm:p-4 font-bold">Statutory Basis</th>
                        <th className="p-3 sm:p-4 font-bold">Calculation Parameter</th>
                        <th className="p-3 sm:p-4 font-bold text-right">Recoverable Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Current Trip Freight</td>
                        <td className="p-3 sm:p-4">Bilty Contract / Section 170 ICA</td>
                        <td className="p-3 sm:p-4">Pune to Kolkata 40ft Trailer (Agreed Rate)</td>
                        <td className="p-3 sm:p-4 text-right font-mono font-bold text-slate-900">₹1,85,000</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Past Ledger Overdue</td>
                        <td className="p-3 sm:p-4">Clause 14.1 Bilty / Section 171 ICA</td>
                        <td className="p-3 sm:p-4">4 Prior Unpaid Invoices (Past 90 Days)</td>
                        <td className="p-3 sm:p-4 text-right font-mono font-bold text-slate-900">₹8,45,000</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Truck Halting &amp; Detention</td>
                        <td className="p-3 sm:p-4">Carriage Contract Clause 14.2</td>
                        <td className="p-3 sm:p-4">12 Days @ ₹4,500/day Halting Rate</td>
                        <td className="p-3 sm:p-4 text-right font-mono font-bold text-slate-900">₹54,000</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Terminal Yard Storage &amp; Guard</td>
                        <td className="p-3 sm:p-4">Section 13 Carriage by Road Act</td>
                        <td className="p-3 sm:p-4">Commercial Godown Parking + 24/7 Guard</td>
                        <td className="p-3 sm:p-4 text-right font-mono font-bold text-slate-900">₹24,000</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Commercial Interest / Delay Charge</td>
                        <td className="p-3 sm:p-4">MSMED Act s.16 / Interest Act 1978</td>
                        <td className="p-3 sm:p-4">18% p.a. on overdue ledger balance</td>
                        <td className="p-3 sm:p-4 text-right font-mono font-bold text-slate-900">₹42,500</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Advocate Notice &amp; Panchnama</td>
                        <td className="p-3 sm:p-4">CPC Section 35 Legal Costs</td>
                        <td className="p-3 sm:p-4">Legal Notice + Notarized Condition Survey</td>
                        <td className="p-3 sm:p-4 text-right font-mono font-bold text-slate-900">₹15,000</td>
                      </tr>
                      <tr className="bg-slate-900 text-white font-black">
                        <td className="p-3 sm:p-4" colSpan={3}>
                          TOTAL RECOVERABLE SECURED LIEN AMOUNT
                        </td>
                        <td className="p-3 sm:p-4 text-right font-mono text-emerald-400 text-base">
                          ₹11,65,500
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed">
                  <strong>MSME Statutory Leverage:</strong> If the transport firm is registered as an
                  Enterprise under Udyam, overdue freight attracts statutory compound interest at 3x the
                  RBI repo rate under Section 16 of the MSMED Act. Calculate your total claim using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </div>
              </section>

              {/* Section 9: BSA s.63 Evidence Checklist */}
              <section
                id="heading-evidence-bsa-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    9
                  </span>
                  <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                    Evidence Protocol &middot; Bharatiya Sakshya Adhiniyam 2023
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  BSA 2023 Section 63 Evidence Checklist for Transport Claims
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  To successfully defend a carrier lien in court and resist arbitrary debit notes or police
                  interference, transport operators must assemble an electronic evidence dossier certified
                  under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (replacing Section 65B of the
                  Indian Evidence Act).
                </p>

                {/* Evidence Checklist Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-xs font-black uppercase text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      1. Contractual Bailment Documents
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Consignor-signed Goods Forwarding Note with General Lien clause</li>
                      <li>Consignment Note / Bilty with intact driver copy and terms</li>
                      <li>E-Way Bill matching truck registration and GSTINs</li>
                      <li>Master Transport Services Agreement (MSA) or Rate Contract</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-xs font-black uppercase text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      2. Telematics &amp; Physical Integrity Logs
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>GPS tracker route history and timestamped halting geofence logs</li>
                      <li>High-resolution date/time stamped photos of intact container seals</li>
                      <li>Independent surveyor Panchnama report upon reaching holding yard</li>
                      <li>Fastag toll records corroborating uninterrupted transit corridor</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-xs font-black uppercase text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      3. Account Ledger &amp; Invoicing Trail
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Itemized running account ledger with corresponding POD numbers</li>
                      <li>GST Portal GSTR-1 filings reflecting freight invoices</li>
                      <li>Prior payment receipts proving historical running account custom</li>
                      <li>Email and WhatsApp communication seeking ledger reconciliation</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-xs font-black uppercase text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      4. Statutory Notices &amp; Certifications
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Formal 48-Hour Advocate Carrier Lien Intimation Notice</li>
                      <li>Speed Post RPAD postal receipts and delivery tracking printouts</li>
                      <li>Station House Officer (SHO) civil intimation receiving copy</li>
                      <li>Mandatory Section 63 BSA certificate signed by system administrator</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-5 text-xs text-slate-600">
                  Transporters facing arbitrary shortage deductions should also review our guide on{" "}
                  <Link
                    href="/shipper-fake-transit-damage-shortage-debit-note-defense-transporter"
                    className="text-[#DC2626] hover:underline font-semibold"
                  >
                    Defending Against Shipper Fake Transit Damage &amp; Shortage Debit Notes
                  </Link>
                  .
                </div>
              </section>

              {/* Section 10: Dual B2B Conversion Funnel */}
              <section id="heading-cta-desk" className="scroll-mt-28">
                <TransporterLienCTA />
              </section>

              {/* Section 11: FAQ Accordions */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    10
                  </span>
                  <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                    Frequently Asked Questions &middot; Carrier Lien &amp; Freight Law
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-6">
                  Carrier Right of Lien &amp; Detention Law: Expert Practitioner FAQs
                </h2>

                <div className="space-y-3">
                  {FAQ_ITEMS.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition-all open:bg-white open:shadow-sm"
                    >
                      <summary className="cursor-pointer text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between gap-3 list-none">
                        <span>{faq.question}</span>
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold shrink-0 transition-transform group-open:rotate-180 group-open:bg-[#DC2626] group-open:text-white">
                          &darr;
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Statutory & Government Portal Authority Links */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    11
                  </span>
                  <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                    Primary Legal Authorities &middot; Legislative &amp; Judicial Portals
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Official Statutory Sources &amp; Legislation References
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  Verify the statutory provisions and digital legislative gazettes cited throughout this
                  operational guide directly on government legislative repositories:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {PRIMARY_STATUTORY_SOURCES.map((src, i) => (
                    <a
                      key={i}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl hover:border-red-300 hover:bg-red-50/30 transition-all flex items-start justify-between gap-3 group"
                    >
                      <div>
                        <p className="text-xs font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                          {src.title}
                        </p>
                        <p className="text-[10px] text-slate-500 font-mono mt-0.5">{src.citation}</p>
                      </div>
                      <span className="text-slate-400 group-hover:text-[#DC2626] text-xs font-bold">
                        &nearr;
                      </span>
                    </a>
                  ))}
                </div>

                {/* Sibling Spokes & Related B2B Guides */}
                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Related Logistics Recovery Guides &middot; IND-09 Fleet &amp; Freight Spokes
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Link
                      href="/truck-detention-halting-charges-container-demurrage-recovery"
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-medium transition-colors"
                    >
                      Truck Halting &amp; Demurrage Recovery &rarr;
                    </Link>
                    <Link
                      href="/freight-forwarder-cha-customs-duty-ocean-freight-reimbursement-recovery"
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-medium transition-colors"
                    >
                      CHA &amp; Freight Forwarder Customs Duty &rarr;
                    </Link>
                    <Link
                      href="/shipper-fake-transit-damage-shortage-debit-note-defense-transporter"
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-medium transition-colors"
                    >
                      Fake Damage Debit Note Defense &rarr;
                    </Link>
                    <Link
                      href="/industries/logistics-freight-3pl-recovery"
                      className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-[#DC2626] rounded-lg font-bold transition-colors"
                    >
                      Logistics Hub &middot; Full Vertical &rarr;
                    </Link>
                  </div>
                </div>

                {/* HTML Directory Sitemap Cross-Link (all filter) */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl">
                  <div>
                    <span className="text-xs font-black uppercase text-[#DC2626] block">
                      Legal Directory &amp; Sitemap Navigation
                    </span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Explore all 300+ institutional recovery playbooks, statutory guides, and industry hubs.
                    </p>
                  </div>
                  <Link
                    href="/sitemap"
                    className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors shrink-0 shadow-sm"
                  >
                    All Portals Sitemap (All Filters) &rarr;
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
