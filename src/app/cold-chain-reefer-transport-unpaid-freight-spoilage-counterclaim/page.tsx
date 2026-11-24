import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ReeferFreightRecoveryCTA from "./ReeferFreightRecoveryCTA";
import ReeferFreightRecoveryTableOfContents from "./ReeferFreightRecoveryTableOfContents";
import ReeferFreightRecoveryScenarioTabs from "./ReeferFreightRecoveryScenarioTabs";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/cold-chain-reefer-transport-unpaid-freight-spoilage-counterclaim`;
const PAGE_H1 =
  "Cold-Chain & Reefer Fleet Freight Recovery: Using Pulp-Temp & Telematics Logs to Defeat Bogus 'Cargo Spoilage' Freight Deductions";

export const metadata: Metadata = {
  title: "Reefer Cold-Chain Freight Recovery: Defeat Spoilage Claims",
  description:
    "Reefer units maintain temp, not blast-freeze warm cargo! Stop shippers deducting spoiled cargo from freight bills under Carriage by Road Act & BSA s.63.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Reefer Cold-Chain Freight Recovery: Defeat Spoilage Claims",
    description:
      "Reefer units maintain temp, not blast-freeze warm cargo! Stop shippers deducting spoiled cargo from freight bills under Carriage by Road Act & BSA s.63.",
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Reefer Cold Chain Freight Recovery and Spoilage Counterclaim Defense Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reefer Cold-Chain Freight Recovery: Defeat Spoilage Claims",
    description:
      "Reefer units maintain temp, not blast-freeze warm cargo! Stop shippers deducting spoiled cargo from freight bills under Carriage by Road Act & BSA s.63.",
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
    title: "The Carriage by Road Act, 2007 (Sections 10, 12, 13 & 16 — Carrier Liability Exceptions & Limitation Bar)",
    url: "https://www.indiacode.nic.in/handle/123456789/2042",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility for Telematics & Data Loggers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "The Indian Contract Act, 1872 (Section 73 — Breach & Compensation; Sections 170-171 — Carrier Possessory Lien)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Commercial Disputes Arising Out of Carriage of Goods)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure for Liquidated Debts on Written Contracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15-18 — 3x RBI Bank Rate Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Food Safety and Standards Authority of India (FSSAI Guidelines on Cold Chain Logistics & Temperature Integrity)",
    url: "https://www.fssai.gov.in",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Bar on Unilateral Set-Off of Unadjudicated Damage Claims Against Contractual Dues",
    parties: "Union of India v. Raman Iron Foundry",
    citation: "(1974) 2 SCC 231, Supreme Court of India",
    date: "Judgment Dated 11 March 1974",
    facts:
      "A contracting buyer unilaterally withheld and deducted payments from pending bills for subsequent supplies, claiming alleged losses, delays, and damages arising out of an earlier transaction. The buyer claimed an inherent right of equitable set-off before any court had adjudicated their damage claim.",
    holding:
      "The Supreme Court laid down the foundational rule that a claim for unliquidated damages does not give rise to a debt until liability is determined and damages are assessed by a competent court or arbitral tribunal. A party has merely a right to sue for damages, and cannot unilaterally appropriate or deduct alleged damages from undisputed, liquidated debts arising out of other contract invoices.",
    amount: "Unilateral Debit Notes Struck Down; Admitted Invoices Ordered Paid in Full",
    takeaway:
      "Shippers cannot arbitrarily deduct ₹15 Lakhs of alleged spoiled cargo value from pending reefer freight bills. Unless adjudicated by a court, cargo damage claims cannot wipe out admitted freight debt.",
  },
  {
    title: "Supreme Court on Reaffirming Prohibition on Unilateral Adjustments Across Separate Bilties",
    parties: "Gangotri Enterprises Ltd. v. Union of India & Ors.",
    citation: "(2016) 11 SCC 440, Supreme Court of India",
    date: "Judgment Dated 05 May 2016",
    facts:
      "The respondent authority withheld sums payable to a contractor under a completed contract on the ground of an unadjudicated breach and unliquidated damages asserted under a completely different work order.",
    holding:
      "The Supreme Court affirmed the Raman Iron Foundry doctrine, ruling that damages claimed by one party are merely an inchoate claim. Until adjudicated and quantified by a decree, such claims cannot be adjusted or set off against admitted amounts due under separate transactions or completed bills.",
    amount: "Prohibition on Cross-Contract Ledger Withholding Upheld",
    takeaway:
      "A client who suffered temperature excursions on 1 reefer trip has zero legal authority to freeze payment for 40 other clean-POD consignments. Each bilty constitutes an independent contract of carriage.",
  },
  {
    title: "Supreme Court on Common Carrier Liability Exceptions & Consignor Act or Default",
    parties: "Patel Roadways Ltd. v. Birla Yamaha Ltd.",
    citation: "(2000) 4 SCC 91, Supreme Court of India",
    date: "Judgment Dated 28 March 2000",
    facts:
      "Consignments transported by a common carrier suffered destruction while housed in the carrier's transit facility. The carrier defended on the basis that the goods perished due to accidental fire and statutory exceptions.",
    holding:
      "The Supreme Court analyzed the statutory strict liability of common carriers, clarifying that while carriers are generally liable as insurers of goods, this liability is expressly subject to statutory exceptions, including act of God, inherent vice of the goods, and the act, neglect, or default of the consignor. Where damage is caused by the consignor's packaging failure or omission, the carrier is exonerated.",
    amount: "Statutory Exceptions Protect Carriers Against Consignor's Own Defaults",
    takeaway:
      "When a consignor loads warm fruit, un-chilled meat, or dairy without mandatory pre-cooling, the deterioration is caused by the consignor's default and inherent perishable vice under Section 10(1) Carriage by Road Act.",
  },
  {
    title: "Supreme Court on Mandatory Electronic Evidence Certification for Computerized Sensor Logs",
    parties: "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal",
    citation: "(2020) 7 SCC 1, 3-Judge Bench, Supreme Court of India",
    date: "Judgment Dated 14 July 2020",
    facts:
      "The admissibility of electronic records produced from computer systems and digital logging instruments was contested in the absence of a contemporaneous statutory certificate under Section 65B of the Indian Evidence Act, 1872.",
    holding:
      "The 3-Judge Bench established that production of a statutory certificate (now Section 63 of Bharatiya Sakshya Adhiniyam, 2023) by a person occupying a responsible official position in relation to the operation of the relevant device is a mandatory condition precedent for admitting computerized electronic records into evidence.",
    amount: "Telematics & Micro-Controller Sensor Logs Rendered Conclusive Proof",
    takeaway:
      "Reefer fleet owners who generate a Section 63 BSA certificate for digital data logger printouts and GPS telematics establish unassailable evidence that refrigeration machinery functioned without interruption.",
  },
];

const FAQS = [
  {
    question: "Can a shipper legally deduct the value of spoiled perishable cargo from unpaid reefer freight bills?",
    answer:
      "No. Under the landmark Supreme Court ruling in Union of India v. Raman Iron Foundry (1974) 2 SCC 231 and Gangotri Enterprises Ltd. v. Union of India (2016) 11 SCC 440, a claim for alleged cargo damage is an unliquidated claim for damages. It does not become an enforceable debt until adjudicated by a competent court or arbitral tribunal. A shipper has merely a 'right to sue' and cannot unilaterally issue debit notes to set off alleged spoilage against admitted, liquidated freight bills due on signed Lorry Receipts (Bilty). Unilateral freight deductions are illegal and constitute a direct breach of contract under Section 73 of the Indian Contract Act, 1872.",
  },
  {
    question: "What is the 'warm-loading' defense and how does Section 10 of the Carriage by Road Act, 2007 apply?",
    answer:
      "Mobile truck refrigeration units (e.g., Thermo King, Carrier Transicold) are engineered exclusively to maintain the temperature of cargo that has already been pre-cooled to its designated transit set-point; they are not industrial blast freezers designed to extract latent field heat. Under Section 10(1) and Section 12 of the Carriage by Road Act, 2007, a common carrier is completely exonerated from liability for loss or deterioration of goods where the damage arises from: (a) the act, neglect, or default of the consignor (such as failing to pre-cool fresh produce, loading warm meat above -18°C, or loading cargo directly from ambient sun), or (b) the inherent vice or natural perishability of the cargo. Once telematics prove the reefer unit blew air at the designated set-point, liability shifts entirely to the shipper.",
  },
  {
    question: "What happens if the shipper failed to serve a statutory notice under Section 16 within 180 days?",
    answer:
      "Under Section 16 of the Carriage by Road Act, 2007, no suit or legal proceeding can be instituted against a common carrier for loss of, or damage to, goods unless a formal notice in writing is served upon the carrier within 180 days from the date of booking of the consignment or the date of delivery. If a shipper issues arbitrary email complaints or informal debit notes without a formal statutory notice within 180 days, their counterclaim for cargo damage is permanently barred by limitation. The transporter can immediately enforce 100% of their unpaid freight through a Commercial Court summary suit under Order XXXVII CPC.",
  },
  {
    question: "How do digital data logger printouts and telematics logs prove the reefer was running properly?",
    answer:
      "Modern reefer telematics systems (Thermo King TracKing, Carrier DataCOLD, Euroscan, IoT return-air sensors) continuously record four critical parameters every 5 to 15 minutes: (1) Set-point temperature, (2) Supply-air temperature (air discharged from the evaporator into the cargo space), (3) Return-air temperature (air returning from the cargo box), and (4) Compressor engine operating status and RPM. If supply-air was consistently discharged at -20°C for frozen food or +2°C for chilled cargo, but return-air remained high, it provides incontrovertible scientific proof that the cargo was loaded hot and radiating sensible heat, rather than equipment failure. Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), these records are legally admissible in court when backed by a telematics administrator certificate.",
  },
  {
    question: "Is the transporter liable if the consignee delays plugging the reefer into shore power at the destination?",
    answer:
      "No. When a reefer truck arrives at a receiver's distribution center, cold storage warehouse, or container freight station (CFS), the common carrier's active transit obligation ends upon arrival and placement of the vehicle at the gate. If the consignee detains the trailer without an electrical reefer plug-in socket, or prohibits the driver from running the diesel refrigeration genset due to local noise or environmental restrictions, the resulting temperature excursion is an 'act, neglect, or default of the consignee' under Section 10(1) Carriage by Road Act. Furthermore, the transporter is entitled to claim per-diem detention and halting charges (₹7,500 to ₹12,000 per day) under Section 73 of the Indian Contract Act.",
  },
  {
    question: "Can a reefer fleet owner withhold cargo on a subsequent trip to recover unpaid freight for earlier trips?",
    answer:
      "Under Section 170 of the Indian Contract Act, 1872 and Section 13 of the Carriage by Road Act, 2007, a carrier holds a particular bailee lien over the specific goods transported for unpaid freight of that trip. If the transport contract or master logistics service agreement incorporates an express 'General Lien Clause' under Section 171 of the Indian Contract Act, the fleet operator can lawfully retain any cargo or containers belonging to the defaulting client currently in their custody until all accumulated freight ledger arrears are cleared in full.",
  },
  {
    question: "Can MSME reefer fleet operators claim compound interest on withheld freight bills?",
    answer:
      "Yes. If the reefer transport enterprise is registered under the MSMED Act, 2006 (Udyam Registration) as a micro or small service provider, Section 15 mandates payment within the agreed credit period (not exceeding 45 days). Under Section 16 of the MSMED Act, any buyer who fails to make payment is statutorily liable to pay compound interest with monthly rests at three times (3x) the Bank Rate notified by the Reserve Bank of India. The MSME Facilitation Council (MSEFC) has statutory authority under Section 18 to disallow arbitrary debit notes and pass binding recovery awards enforceable as court decrees.",
  },
  {
    question: "What is the procedure to file an Order XXXVII summary suit for unpaid reefer freight in Commercial Court?",
    answer:
      "Under Order XXXVII of the Code of Civil Procedure, 1908 read with Section 2(1)(c)(xviii) of the Commercial Courts Act, 2015, a reefer transporter can institute an expedited summary suit based on written consignment notes (Lorry Receipts), accepted freight invoices, electronic Proof of Delivery (e-POD), and telematics logs. In a summary suit, the debtor has no automatic right to defend; they must apply for leave to defend within 10 days of summons. Under the Supreme Court's Hubtown doctrine, where the defense of 'cargo spoilage' is a sham unsupported by a joint survey or Section 16 notice, the Commercial Court will refuse leave to defend and enter an immediate decree for the full freight amount plus 18% commercial interest.",
  },
];

const RECOVERABLE_HEADS = [
  {
    category: "Primary Line-Haul Reefer Freight",
    statutoryBasis: "Contract of Carriage / Carriage by Road Act, 2007 — Section 13 (Right to Freight Upon Delivery)",
    evidentiaryProof: "Consignment Note (Lorry Receipt / Bilty), signed delivery acknowledgment (POD), and GST invoice",
    enforceability: "Liquidated statutory debt recoverable via CPC Order XXXVII summary suit or MSMED Act Section 18.",
  },
  {
    category: "Unilateral Spoilage Debit Note Reversal",
    statutoryBasis: "Indian Contract Act, 1872 — Section 73 & Supreme Court Raman Iron Foundry Doctrine",
    evidentiaryProof: "Carrier telematics temperature graph, micro-controller download, and lack of joint inspection report",
    enforceability: "Unadjudicated debit note is legally void; 100% of withheld amount must be restored to the freight ledger.",
  },
  {
    category: "Truck Detention & Halting Charges (Gate Detention)",
    statutoryBasis: "Indian Contract Act, 1872 — Section 73 (Compensation for Detention Beyond Free Unloading Window)",
    evidentiaryProof: "AIS-140 GPS geofence in/out logs, gate-in entry slips, and WhatsApp/email detention alerts",
    enforceability: "Recoverable as contractual or customary damages at ₹7,500–₹12,000 per day per multi-axle reefer.",
  },
  {
    category: "Genset Diesel & Reefer Running Expenses During Delay",
    statutoryBasis: "Carriage by Road Act, 2007 — Section 13 & Contract Act Section 70 (Obligation of Person Enjoying Non-Gratuitous Act)",
    evidentiaryProof: "Reefer micro-controller auxiliary engine run logs, fuel dispensary receipts, and temperature maintenance records",
    enforceability: "Mandatory reimbursement of auxiliary fuel spent preserving cargo during consignee-caused delays.",
  },
  {
    category: "Statutory Interest on Delayed Freight",
    statutoryBasis: "MSMED Act, 2006 — Section 16 (Compound Interest at 3x RBI Bank Rate) / Interest Act, 1978",
    evidentiaryProof: "Udyam Registration Certificate, invoice due dates exceeding 45 days, and RBI notification rate table",
    enforceability: "Statutory mandate overriding any contrary contractual clause; non-taxable and non-waivable.",
  },
  {
    category: "Legal Notice & Telematics Forensic Costs",
    statutoryBasis: "Code of Civil Procedure, 1908 — Section 35 (Costs of Litigation & Notice Preparation)",
    evidentiaryProof: "Advocate statutory notice fee invoice, BSA 2023 s.63 electronic evidence certification charges",
    enforceability: "Awardable in Commercial Court decree as necessary legal disbursements.",
  },
];

export default function ColdChainReeferFreightRecoveryPage() {
  const breadcrumbItems = [
    { label: "Logistics & 3PL Debt Recovery", href: "/industries/logistics-freight-3pl-recovery" },
    {
      label: "Reefer Cold-Chain Freight Recovery",
      href: "/cold-chain-reefer-transport-unpaid-freight-spoilage-counterclaim",
    },
  ];

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: PAGE_H1,
    description:
      "Reefer units maintain temp, not blast-freeze warm cargo! Stop shippers deducting spoiled cargo from freight bills under Carriage by Road Act & BSA s.63.",
    image: [`${SITE_URL}/blog_money_recovery.png`],
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      affiliation: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
      },
    },
    // TODO(reviewer): src/data/reviewers.ts is absent in this repository
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: "2026-11-16T10:00:00+05:30",
    dateModified: "2026-11-16T10:00:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
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

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Reefer Fleet Owners Defeat Spoilage Debit Notes and Recover Unpaid Freight",
    description:
      "A 7-step statutory recovery procedure under the Carriage by Road Act, 2007 and Bharatiya Sakshya Adhiniyam, 2023 for cold-chain transporters to quash bogus cargo damage counterclaims.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Immediate Telematics & Micro-Controller Forensic Audit",
        text: "Download raw digital temperature logs (Thermo King TracKing / Carrier DataCOLD) and verify continuous supply-air discharge and zero engine alarms.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Generate Cryptographic BSA 2023 Section 63 Evidence Certificate",
        text: "Execute a statutory electronic evidence certificate certifying device calibration, uncorrupted data integrity, and hash authenticity.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Establish Warm-Loading Defect & Pre-Cooling Failure",
        text: "Demonstrate that cargo was presented with elevated core pulp temperature, invoking Section 10(1) Carriage by Road Act consignor default exceptions.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Check Section 16 Statutory 180-Day Limitation Bar",
        text: "Verify whether the shipper failed to serve a mandatory formal written damage notice within 180 days of booking, permanently barring their counterclaim.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Issue Formal Rebuttal & Strike Down Unilateral Debit Notes",
        text: "Serve a fact-verified demand notice citing the Supreme Court's Raman Iron Foundry ruling, rendering unilateral freight set-offs illegal.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Exercise Section 170/171 Possessory Carrier Lien",
        text: "Assert possessory bailee lien over ongoing consignments under Section 13 Carriage by Road Act until outstanding freight arrears are paid.",
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "Commercial Court Summary Suit or MSMED Council Filing",
        text: "File an Order XXXVII CPC summary recovery suit or an MSME Samadhaan claim for 100% freight plus 3x RBI compound interest.",
      },
    ],
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
        name: "Logistics & 3PL Debt Recovery",
        item: `${SITE_URL}/industries/logistics-freight-3pl-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Reefer Cold-Chain Freight Recovery",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Dark Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            IND-09 Logistics &bull; Carriage by Road Act s.10/12 &bull; BSA 2023 s.63 Telematics
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {PAGE_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; Statutory Protocol
            </span>
            Under Section 10(1) and Section 12 of the Carriage by Road Act, 2007, common carriers are exonerated from cargo deterioration caused by consignor pre-cooling failures and inherent perishable vice. Supported by{" "}
            <Link
              href="/industries/logistics-freight-3pl-recovery"
              className="text-red-400 hover:text-red-300 font-bold underline decoration-[#DC2626] underline-offset-2"
            >
              Logistics &amp; 3PL Debt Recovery
            </Link>{" "}
            standards, Supreme Court precedent in Raman Iron Foundry prohibits unilateral debit note deductions, enabling reefer fleet owners to defeat bogus spoilage claims and recover 100% unpaid freight via BSA 2023 Section 63 telematics logs and CPC Order XXXVII summary suits.
          </div>

          {/* 4-Card Hero Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Statutory Notice Bar
              </span>
              <p className="text-lg sm:text-2xl font-black text-amber-400">180 Days</p>
              <span className="text-[10px] text-slate-400 block">Carriage Act s.16 Limit</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Debit Note Legality
              </span>
              <p className="text-lg sm:text-2xl font-black text-red-400">0% Enforceable</p>
              <span className="text-[10px] text-slate-400 block">Raman Iron Foundry Rule</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Reefer Telematics Evidence
              </span>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">BSA s.63</p>
              <span className="text-[10px] text-slate-400 block">Digital Log Admissibility</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                MSME Delayed Interest
              </span>
              <p className="text-lg sm:text-2xl font-black text-slate-100">3x RBI Rate</p>
              <span className="text-[10px] text-slate-400 block">Compounded Monthly</span>
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

        {/* 2-Column Split: Left Sticky TOC + Right Content Column */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <ReeferFreightRecoveryTableOfContents />

          {/* Right Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Warm-Loading Ambush */}
            <section
              id="heading-warm-loading-ambush"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  01
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Operational Dilemma &bull; Physics vs Contract
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4">
                The Warm-Loading Ambush: How Shippers Blame Reefer Fleets for Spoilage
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Refrigerated transport fleet operators across India face an existential financial trap known in cold-chain logistics as the <strong>“warm-loading ambush”</strong>. Across key produce, dairy, frozen meat, pharmaceutical, and seafood corridors—such as the Nashik-Delhi fruit run, Punjab-JNPT frozen meat corridor, Andhra shrimp routes, and Baddi pharmaceutical lines—shippers routinely bypass expensive packhouse blast-chilling and pre-cooling cycles.
                </p>
                <p>
                  Instead, consignors load freshly harvested table grapes, mangoes, bananas, or cartonized frozen buffalo meat with high core pulp temperatures directly into refrigerated truck containers. A shipper who presents table grapes at +16°C or frozen meat at -5°C instructs the driver to maintain -18°C or +2°C, falsely assuming that a mobile diesel reefer unit functions as an industrial blast freezer.
                </p>
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl my-4 text-xs sm:text-sm text-amber-950">
                  <p className="font-bold mb-1 uppercase tracking-wider text-[11px] text-amber-900">
                    The Fundamental Physics of Transport Refrigeration:
                  </p>
                  A truck refrigeration unit (such as Thermo King SLXi or Carrier Transicold Vector) is engineered exclusively to <strong>maintain the temperature of pre-cooled cargo</strong> against external ambient heat ingress through insulated PUF walls. It possesses neither the cubic airflow velocity nor the multi-ton refrigeration capacity required to extract sensible heat and metabolic respiration heat from warm-loaded organic produce.
                </div>
                <p>
                  When warm-loaded cargo generates internal moisture, ethylene, and surface condensation during a 48 to 72-hour highway haul, the consignee at the terminal dock notices surface decay, softening, or ice crystal thawing. The consignee rejects the consignment or demands commercial discounts. In response, the shipper unilaterally issues a punitive debit note—arbitrarily deducting ₹15 Lakhs to ₹25 Lakhs not only from that single trip but across the transporter&apos;s entire monthly running ledger, holding dozens of unrelated clean-trip freight bills hostage.
                </p>
                <p>
                  For fleet owners carrying monthly EMIs of ₹85,000 to ₹1,40,000 per multi-axle reefer vehicle, such arbitrary deductions cause immediate liquidity paralysis. Understanding the statutory exceptions under the Carriage by Road Act, 2007 and enforcing the Raman Iron Foundry doctrine provides the only legal path to defeat these counterclaims and recover 100% of withheld freight.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Exceptions Under Carriage by Road Act */}
            <section
              id="heading-carriage-act-exceptions"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  02
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Statutory Defenses &bull; Carriage by Road Act, 2007
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4">
                Statutory Exceptions Under Carriage by Road Act s.10 &amp; s.12
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Corporate shippers routinely threaten transporters with Section 10 of the Carriage by Road Act, 2007, claiming that common carriers are strictly liable as absolute insurers of goods in transit. However, this argument ignores the explicit statutory exceptions enacted under Sections 10 and 12 of the Act.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      Section 10(1) Exoneration Clauses
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Section 10(1) expressly provides that the common carrier is <strong>not liable</strong> for loss, damage, or deterioration of any consignment where such loss arises from:
                    </p>
                    <ul className="list-disc pl-4 mt-2 space-y-1 text-xs text-slate-700">
                      <li><strong>Act, neglect, or default of the consignor or consignee:</strong> Including failure to pre-cool cargo, warm loading, defective cartons, or refusing genset plug-in.</li>
                      <li><strong>Inherent vice or natural deterioration:</strong> Natural rotting, moisture evaporation, ripening, or biological decomposition inherent to un-chilled produce.</li>
                      <li><strong>Act of God, war, or lawful authority:</strong> Road blockades, landslides, or state highway halts.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      Section 16: 180-Day Mandatory Notice Bar
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Section 16 establishes an absolute procedural bar against shippers:
                    </p>
                    <blockquote className="border-l-2 border-red-500 pl-3 py-1 my-2 text-xs italic text-slate-800 bg-red-50/50">
                      &ldquo;No suit or other legal proceeding shall be instituted against a common carrier for any loss of, or damage to, the consignment unless notice in writing of the loss or damage has been given to the common carrier within one hundred and eighty days from the date of the booking of the consignment.&rdquo;
                    </blockquote>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the shipper merely sent internal emails or informal WhatsApp complaints without a formal statutory notice within 180 days, their counterclaim is barred by law.
                    </p>
                  </div>
                </div>

                <p>
                  Furthermore, under Section 12 of the Carriage by Road Act, 2007, where the consignor failed to declare the value and specific condition of the goods, or committed fraud regarding cargo pre-treatment, the carrier&apos;s liability is strictly capped or eliminated entirely.
                </p>
              </div>
            </section>

            {/* Section 3: The Raman Iron Foundry Rule */}
            <section
              id="heading-unilateral-debit-notes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  03
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Supreme Court Doctrine &bull; Set-Off Prohibition
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4">
                The Raman Iron Foundry Rule: Why Unilateral Debit Notes Are Illegal
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  The most pervasive malpractice by corporate shippers is issuing unilateral debit notes against a transporter&apos;s pending freight ledger. For example, a shipper whose fruit cargo allegedly degraded during transit issues a ₹12 Lakh debit note and withholds that sum from 20 other completely unrelated freight invoices.
                </p>
                <p>
                  This practice is <strong>categorically illegal under Indian law</strong>. In the landmark case of <em>Union of India v. Raman Iron Foundry</em> (1974) 2 SCC 231, affirmed subsequently in <em>Gangotri Enterprises Ltd. v. Union of India</em> (2016) 11 SCC 440, the Supreme Court of India laid down the definitive legal distinction between an unadjudicated claim for damages and an existing debt:
                </p>

                <div className="p-4 bg-slate-900 text-white rounded-xl my-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-red-400 mb-2">
                    Core Judicial Holding &bull; Supreme Court of India:
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
                    &ldquo;A claim for unliquidated damages does not give rise to a debt until the liability is adjudicated and damages assessed by a decree or order of a court or other adjudicatory authority. When there is a breach of contract, the party who suffers breach has merely a right to sue for damages, and not an actionable claim for a sum of money... The plaintiff has no right to appropriate or adjust such unliquidated damages against undisputed contractual debts due to the contractor.&rdquo;
                  </p>
                </div>

                <p>
                  Applying this binding ratio to cold-chain logistics:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                  <li>
                    <strong>Each Lorry Receipt (Bilty) is an Independent Contract:</strong> Each consignment note represents a distinct contract of carriage. Once the transporter delivers cargo under a signed Proof of Delivery (POD), the freight charges for that trip become an undisputed liquidated debt.
                  </li>
                  <li>
                    <strong>Spoilage Allegations Require Judicial Adjudication:</strong> An allegation that cargo spoiled due to transporter negligence is merely an unliquidated damage claim. Until a court, arbitral tribunal, or MSME Facilitation Council conducts a trial and quantifies liability, the shipper has zero legal right to withhold or set off that sum from any freight bill.
                  </li>
                  <li>
                    <strong>Direct Remedy via CPC Order XXXVII:</strong> Because the unilateral debit note has no legal existence, the fleet owner can file a summary suit under Order XXXVII of the Code of Civil Procedure, 1908 in the Commercial Court, or file for recovery of{" "}
                    <Link
                      href="/recovery/unpaid-invoices"
                      className="text-red-600 hover:text-red-700 font-bold underline decoration-[#DC2626] underline-offset-2"
                    >
                      unpaid freight invoices
                    </Link>{" "}
                    with immediate interest.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4: Landmark Court Precedents */}
            <section
              id="heading-court-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  04
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Binding Judicial Authority &bull; Supreme Court Rulings
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4">
                Landmark Judicial Rulings on Carrier Liability &amp; Counterclaims
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                These verified judgments form the unassailable foundation for advocate legal notices and Commercial Court suits when defending against cargo spoilage deductions:
              </p>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-[#DC2626] space-y-2.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">{item.parties}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-900 text-[10px] sm:text-xs font-bold font-mono">
                        {item.citation}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-500">{item.title} &bull; {item.date}</p>

                    <div className="text-xs text-slate-700 space-y-1.5 pt-1">
                      <p><strong>Facts:</strong> {item.facts}</p>
                      <p><strong>Judicial Holding:</strong> {item.holding}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-emerald-800">{item.amount}</span>
                      <span className="text-xs text-slate-600 italic">Key Takeaway: {item.takeaway}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Operational Decision Tree SVG */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  05
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Operational SOP &bull; Visual Decision Flow
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4">
                Operational Decision Tree: Defeating Cargo Spoilage Deductions
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Follow this sequential statutory decision tree immediately upon receipt of a cargo rejection intimation, temperature excursion complaint, or unilateral debit note:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-hidden bg-slate-900 p-6 rounded-2xl border border-slate-800 my-4 text-white">
                <svg
                  viewBox="0 0 800 520"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={800}
                  height={520}
                >
                  {/* Step 1 */}
                  <rect x="50" y="30" width="220" height="70" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="160" y="58" fill="#F87171" fontSize="12" fontWeight="bold" textAnchor="middle">
                    STEP 1: INTIMATION RECEIVED
                  </text>
                  <text x="160" y="78" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                    Shipper claims spoilage / debit note
                  </text>

                  {/* Arrow 1 to 2 */}
                  <path d="M270 65 H340" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="340" y="30" width="220" height="70" rx="8" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
                  <text x="450" y="58" fill="#60A5FA" fontSize="12" fontWeight="bold" textAnchor="middle">
                    STEP 2: TELEMATICS AUDIT
                  </text>
                  <text x="450" y="78" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                    Download TracKing/DataCOLD logs
                  </text>

                  {/* Arrow 2 to Decision 1 */}
                  <path d="M450 100 V150" stroke="#94A3B8" strokeWidth="2" />

                  {/* Decision Diamond */}
                  <polygon points="450,150 560,200 450,250 340,200" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
                  <text x="450" y="196" fill="#FCD34D" fontSize="11" fontWeight="bold" textAnchor="middle">
                    SUPPLY AIR AT SET-POINT?
                  </text>
                  <text x="450" y="212" fill="#E2E8F0" fontSize="9" textAnchor="middle">
                    Reefer blew cold throughout?
                  </text>

                  {/* Branch YES: Warm Loading Defect */}
                  <path d="M340 200 H200 V270" stroke="#10B981" strokeWidth="2" />
                  <text x="260" y="190" fill="#34D399" fontSize="10" fontWeight="bold">
                    YES (Unit OK)
                  </text>

                  <rect x="90" y="270" width="220" height="90" rx="8" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                  <text x="200" y="295" fill="#A7F3D0" fontSize="11" fontWeight="bold" textAnchor="middle">
                    WARM LOADING / PRE-COOLING DEFECT
                  </text>
                  <text x="200" y="315" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                    Return Air high = sensible heat.
                  </text>
                  <text x="200" y="333" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                    Carriage Act s.10(1) Exoneration!
                  </text>

                  {/* Branch NO: Unit Alarm / Failure */}
                  <path d="M560 200 H700 V270" stroke="#EF4444" strokeWidth="2" />
                  <text x="590" y="190" fill="#F87171" fontSize="10" fontWeight="bold">
                    NO (Alarm)
                  </text>

                  <rect x="590" y="270" width="200" height="90" rx="8" fill="#450A0A" stroke="#EF4444" strokeWidth="2" />
                  <text x="690" y="295" fill="#FECACA" fontSize="11" fontWeight="bold" textAnchor="middle">
                    CHECK EXTERNAL CAUSE
                  </text>
                  <text x="690" y="315" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                    Consignee delayed genset plug-in?
                  </text>
                  <text x="690" y="333" fill="#E2E8F0" fontSize="9.5" textAnchor="middle">
                    Fuel stolen or gate detention?
                  </text>

                  {/* Both feed to Legal Notice */}
                  <path d="M200 360 V410 H360" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M690 360 V410 H540" stroke="#94A3B8" strokeWidth="2" />

                  {/* Final Escalation Box */}
                  <rect x="250" y="420" width="300" height="80" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="400" y="445" fill="#F87171" fontSize="12" fontWeight="bold" textAnchor="middle">
                    STATUTORY ENFORCEMENT
                  </text>
                  <text x="400" y="465" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                    Advocate Notice + Raman Iron Foundry Rebuttal
                  </text>
                  <text x="400" y="483" fill="#FCD34D" fontSize="10" fontWeight="bold" textAnchor="middle">
                    Order XXXVII CPC Suit &bull; MSMED Council 3x RBI
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Fallback Cards */}
              <div className="md:hidden space-y-3 my-4">
                <div className="p-4 bg-slate-900 text-white rounded-xl border-l-4 border-red-500">
                  <span className="text-[10px] uppercase font-bold text-red-400 block mb-1">Step 1: Receipt</span>
                  <p className="text-xs font-bold">Shipper Intimates Spoilage or Issues Debit Note</p>
                  <p className="text-[11px] text-slate-300 mt-1">Immediately freeze communications and secure telematics data before unit memory wraps.</p>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-xl border-l-4 border-blue-500">
                  <span className="text-[10px] uppercase font-bold text-blue-400 block mb-1">Step 2: Forensic Analysis</span>
                  <p className="text-xs font-bold">Extract Digital Telematics &amp; Supply-Air Graphs</p>
                  <p className="text-[11px] text-slate-300 mt-1">Correlate set-point vs supply-air vs return-air. If supply-air was cold, warm loading is proven.</p>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-xl border-l-4 border-amber-500">
                  <span className="text-[10px] uppercase font-bold text-amber-400 block mb-1">Step 3: Statutory Defense</span>
                  <p className="text-xs font-bold">Invoke Carriage by Road Act s.10(1) &amp; s.16 Bar</p>
                  <p className="text-[11px] text-slate-300 mt-1">Exonerate carrier due to shipper pre-cooling omission; verify 180-day limitation notice bar.</p>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-xl border-l-4 border-emerald-500">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">Step 4: Legal Recovery</span>
                  <p className="text-xs font-bold">Quash Debit Note &amp; File Order XXXVII CPC Suit</p>
                  <p className="text-[11px] text-slate-300 mt-1">Disallow unliquidated debit note under Raman Iron Foundry; recover 100% freight with 18% or 3x RBI interest.</p>
                </div>
              </div>
            </section>

            {/* Section 6: Statutory Heads of Freight & Detention Arrears */}
            <section
              id="heading-recoverable-heads"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  06
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Financial Claims Matrix &bull; Recoverable Heads
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4">
                Statutory Heads of Freight &amp; Detention Arrears Transporters Can Claim
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                When filing an advocate statutory notice, Commercial Court summary suit, or MSME Samadhaan claim, reefer fleet operators are entitled to demand multiple legally enforceable heads:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4 font-bold">Claim Head</th>
                      <th className="py-3.5 px-4 font-bold">Statutory Authority</th>
                      <th className="py-3.5 px-4 font-bold">Mandatory Proof</th>
                      <th className="py-3.5 px-4 font-bold">Legal Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {RECOVERABLE_HEADS.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                        <td className="py-3 px-4 font-bold text-slate-900">{row.category}</td>
                        <td className="py-3 px-4 text-slate-700 text-xs">{row.statutoryBasis}</td>
                        <td className="py-3 px-4 text-slate-600 text-xs">{row.evidentiaryProof}</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold text-xs">{row.enforceability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: 4 Commercial Reefer Failure Modes */}
            <section
              id="heading-failure-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  07
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Interactive Defense Tabs &bull; Failure Modes
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4">
                4 Commercial Reefer Failure Modes &amp; Defense Playbooks
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Explore each common failure mode to see the shipper&apos;s pretextual trap, the physical reality, and the specific statutory remedy:
              </p>

              <ReeferFreightRecoveryScenarioTabs />
            </section>

            {/* Section 8: Worked Calculation */}
            <section
              id="heading-worked-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  08
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Financial Ledger Simulation &bull; Real-World Example
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4">
                Worked Ledger: Disallowing ₹18.5 Lakh Debit Notes &amp; Calculating Due
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Consider an actual commercial scenario: A reefer fleet operator operates 15 dedicated 32-ft reefer trucks for a dairy and frozen food company. In August 2026, on one trip from Baramati to Kolkata (Trip #402), 1,200 cartons of premium butter and ice cream mix arrive with surface softening. The shipper issues a unilateral debit note of ₹18,50,000 for alleged stock loss, and completely withholds payment across 22 other clean, signed-POD trips.
                </p>

                {/* Ledger Breakdown Table */}
                <div className="rounded-xl border border-slate-200 overflow-hidden my-4">
                  <div className="bg-slate-900 text-white p-3 sm:p-4 text-xs sm:text-sm font-bold flex justify-between items-center">
                    <span>Reefer Fleet Running Account Audit Ledger (23 Trips)</span>
                    <span className="text-red-400 font-mono">Invoice Age: 90 Days Overdue</span>
                  </div>
                  <div className="divide-y divide-slate-200 text-xs sm:text-sm">
                    <div className="p-3 sm:p-4 flex justify-between bg-white">
                      <span className="text-slate-700 font-medium">1. Clean POD Completed Freight Invoices (22 Unrelated Trips)</span>
                      <span className="font-mono font-bold text-slate-900">₹24,20,000</span>
                    </div>
                    <div className="p-3 sm:p-4 flex justify-between bg-slate-50">
                      <span className="text-slate-700 font-medium">2. Disputed Trip #402 Freight (Baramati to Kolkata)</span>
                      <span className="font-mono font-bold text-slate-900">₹1,75,000</span>
                    </div>
                    <div className="p-3 sm:p-4 flex justify-between bg-white text-red-600">
                      <span className="font-medium">3. Less: Shippers Illegal Unilateral Spoilage Debit Note (Unliquidated)</span>
                      <span className="font-mono font-bold">- ₹18,50,000</span>
                    </div>
                    <div className="p-3 sm:p-4 flex justify-between bg-amber-50">
                      <span className="text-amber-900 font-medium">4. Net Amount Shipper Offered to Pay</span>
                      <span className="font-mono font-bold text-amber-900">₹7,45,000</span>
                    </div>
                    <div className="p-3 sm:p-4 flex justify-between bg-emerald-50 text-emerald-900">
                      <span className="font-bold">5. Raman Iron Foundry Legal Adjustment: Complete Debit Note Disallowance</span>
                      <span className="font-mono font-bold">+ ₹18,50,000</span>
                    </div>
                    <div className="p-3 sm:p-4 flex justify-between bg-white">
                      <span className="text-slate-700 font-medium">6. Consignee Gate Detention (3 Days Halting @ ₹9,000/day for Trip #402)</span>
                      <span className="font-mono font-bold text-slate-900">₹27,000</span>
                    </div>
                    <div className="p-3 sm:p-4 flex justify-between bg-white">
                      <span className="text-slate-700 font-medium">7. Auxiliary Reefer Diesel Fuel Expended During Detention (240 L @ ₹92/L)</span>
                      <span className="font-mono font-bold text-slate-900">₹22,080</span>
                    </div>
                    <div className="p-3 sm:p-4 flex justify-between bg-slate-50">
                      <span className="text-slate-800 font-bold">Total Liquidated Principal Due to Transporter</span>
                      <span className="font-mono font-extrabold text-slate-900">₹26,44,080</span>
                    </div>
                    <div className="p-3 sm:p-4 flex justify-between bg-emerald-100/70 text-emerald-950 font-bold">
                      <span>MSME Section 16 Compound Interest (3x RBI Bank Rate = 19.5% p.a. for 90 Days)</span>
                      <span className="font-mono text-emerald-900">+ ₹1,28,890</span>
                    </div>
                    <div className="p-4 bg-slate-900 text-white flex justify-between items-center text-sm sm:text-base font-black">
                      <span>Total Enforceable Statutory Claim:</span>
                      <span className="font-mono text-emerald-400">₹27,72,970</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600">
                  Calculate your exact statutory MSME compound interest claim using our dedicated{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-600 hover:text-red-700 font-bold underline decoration-[#DC2626] underline-offset-2"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>.
                </p>
              </div>
            </section>

            {/* Strategic Dual-Track CTA Placement 1 */}
            <ReeferFreightRecoveryCTA variant="primary" />

            {/* Section 9: 7-Step Statutory SOP */}
            <section
              id="heading-statutory-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  09
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Step-by-Step Playbook &bull; HowTo Guide
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4">
                7-Step Statutory SOP: From Telematics Audit to Freight Recovery
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Execute this rigorous operational protocol to dismantle bogus spoilage counterclaims and enforce freight recovery:
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Immediate Telematics & Micro-Controller Forensic Audit",
                    desc: "Before the vehicle leaves destination dock or data memory overwrites, download the raw .dcf / .dat telematics file via USB or OTA platform (Thermo King TracKing / Carrier DataCOLD). Extract continuous supply-air discharge graphs, return-air readings, defrost cycles, compressor engine run-hours, and micro-controller alarm codes.",
                  },
                  {
                    step: "02",
                    title: "Generate Cryptographic BSA 2023 Section 63 Certificate",
                    desc: "Prepare a formal statutory electronic evidence certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 signed by your IT or telematics fleet manager. The certificate must swear to the continuous proper functioning of the recording device, hash integrity of the telematics logs, and absence of manual tampering.",
                  },
                  {
                    step: "03",
                    title: "Establish Consignor's Warm-Loading Defect & Pre-Cooling Omission",
                    desc: "Compare supply-air vs return-air curves. If the reefer discharged air at -20°C (for frozen meat/dairy) or +2°C (for fruit) continuously, but return air stayed elevated, this scientifically proves sensible heat radiation from warm-loaded goods. Invoke Section 10(1) Carriage by Road Act exonerating the carrier.",
                  },
                  {
                    step: "04",
                    title: "Audit Section 16 Statutory 180-Day Limitation Bar",
                    desc: "Verify whether the shipper complied with Section 16 of the Carriage by Road Act, 2007. If the shipper did not serve a formal written notice of damage within 180 days of booking, their right to sue or counterclaim is extinguished by law. Email complaints and verbal objections do not satisfy Section 16.",
                  },
                  {
                    step: "05",
                    title: "Serve Fact-Verified Legal Notice Dismantling Unilateral Debit Notes",
                    desc: "Dispatch a fact-verified legal demand notice citing Raman Iron Foundry and Gangotri Enterprises. Formally reject the unilateral debit note, demand payment of all clean freight bills within 15 days, and notify them of 3x RBI compound interest liability under the MSMED Act, 2006.",
                  },
                  {
                    step: "06",
                    title: "Exercise Section 170/171 Carrier Possessory Lien on Active Cargo",
                    desc: "If the shipper has subsequent consignments currently in transit or at your transit depot, formally exercise a common carrier bailee lien under Section 170/171 Indian Contract Act and Section 13 Carriage by Road Act, conditioning release upon full settlement of past freight arrears.",
                  },
                  {
                    step: "07",
                    title: "File Commercial Court Order XXXVII Summary Suit or MSME Samadhaan",
                    desc: "Upon expiry of the 15-day notice period, file an expedited summary suit under CPC Order XXXVII in the Commercial Court or submit an online petition before the MSEFC. In summary suits, shippers who set up unadjudicated debit notes without joint survey reports are denied leave to defend.",
                  },
                ].map((s, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black shrink-0 font-mono">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">{s.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10: Evidentiary Dossier & BSA 2023 s.63 */}
            <section
              id="heading-bsa-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  10
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Trial-Ready Admissibility &bull; Electronic Evidence
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4">
                Evidentiary Dossier: BSA 2023 s.63 Telematics &amp; Pulp-Temp Proof
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  To secure an unconditional summary decree under{" "}
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="text-red-600 hover:text-red-700 font-bold underline decoration-[#DC2626] underline-offset-2"
                  >
                    Order 37 Summary Suit Money Recovery
                  </Link>{" "}
                  or win at the MSME Council, your legal team must submit a tamper-proof electronic evidence dossier compliant with Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B Indian Evidence Act).
                </p>

                <div className="rounded-xl border border-slate-200 overflow-hidden my-4">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Evidence Item</th>
                        <th className="py-3 px-4">Data Source &amp; Device</th>
                        <th className="py-3 px-4">Evidentiary Purpose</th>
                        <th className="py-3 px-4">BSA s.63 Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Loading Pulp-Temp Sheet</td>
                        <td className="py-3 px-4 text-slate-600">Calibrated insertion probe thermometer log</td>
                        <td className="py-3 px-4 text-slate-700">Proves core cargo was loaded warm by consignor</td>
                        <td className="py-3 px-4 text-emerald-700 font-medium">Signed driver entry on Bilty</td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="py-3 px-4 font-bold text-slate-900">Telematics Sensor Graph</td>
                        <td className="py-3 px-4 text-slate-600">Thermo King TracKing / Carrier DataCOLD</td>
                        <td className="py-3 px-4 text-slate-700">Proves supply air maintained set-point continuously</td>
                        <td className="py-3 px-4 text-emerald-700 font-medium">Hash-verified raw file download</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Micro-Controller Alarm Log</td>
                        <td className="py-3 px-4 text-slate-600">Reefer microprocessor event history</td>
                        <td className="py-3 px-4 text-slate-700">Proves zero engine shutdown or refrigeration cut-offs</td>
                        <td className="py-3 px-4 text-emerald-700 font-medium">Manufacturer diagnostic printout</td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="py-3 px-4 font-bold text-slate-900">AIS-140 GPS &amp; Geofence Logs</td>
                        <td className="py-3 px-4 text-slate-600">Government approved AIS-140 vehicle tracker</td>
                        <td className="py-3 px-4 text-slate-700">Proves exact arrival time and consignee gate detention</td>
                        <td className="py-3 px-4 text-emerald-700 font-medium">Server administrator certificate</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Contemporaneous Notice</td>
                        <td className="py-3 px-4 text-slate-600">WhatsApp / Email to shipper during delay</td>
                        <td className="py-3 px-4 text-slate-700">Proves driver alerted shipper of warm loading or unplugged delay</td>
                        <td className="py-3 px-4 text-emerald-700 font-medium">Phone extraction with metadata</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-slate-600">
                  Need a ready-to-use statutory notice format? Review our{" "}
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="text-red-600 hover:text-red-700 font-bold underline decoration-[#DC2626] underline-offset-2"
                  >
                    Legal Notice Reply &amp; Demand Template Workspace
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  11
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Legal FAQ &bull; Transporter Rights &amp; Remedies
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4">
                Frequently Asked Questions on Reefer Freight &amp; Spoilage Claims
              </h2>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-xs sm:text-sm md:text-base">
                      <span>{faq.question}</span>
                      <span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 shadow-xs group-open:-rotate-180 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-700 pt-2 border-t border-slate-200">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Citations & Sources */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  12
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                  Official Legal Citations &bull; Government Gazettes
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4">
                Statutory Authorities, Standards &amp; Cold-Chain Legal Framework
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                All statutory defenses and carrier rights detailed in this playbook are anchored in verified Central Acts and authoritative guidelines:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRIMARY_SOURCES.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium transition-colors flex items-center justify-between group"
                  >
                    <span className="line-clamp-2">{source.title}</span>
                    <svg
                      className="w-4 h-4 text-slate-400 group-hover:text-red-600 shrink-0 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Sibling Spokes Cross Links */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Related Logistics &amp; Fleet Operator Recovery Guides:
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act"
                    className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 rounded-lg font-medium transition-colors"
                  >
                    Transporter Carrier Lien Under Carriage Act &rarr;
                  </Link>
                  <Link
                    href="/truck-detention-halting-charges-container-demurrage-recovery"
                    className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 rounded-lg font-medium transition-colors"
                  >
                    Truck Detention &amp; Halting Charges Recovery &rarr;
                  </Link>
                  <Link
                    href="/freight-forwarder-cha-customs-duty-ocean-freight-reimbursement-recovery"
                    className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 rounded-lg font-medium transition-colors"
                  >
                    Freight Forwarder &amp; CHA Duty Reimbursement &rarr;
                  </Link>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 rounded-lg font-medium transition-colors"
                  >
                    Institutional Bulk Recovery Solutions &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Bottom Strategic Dual-Track CTA */}
            <ReeferFreightRecoveryCTA variant="primary" />
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Component */}
      <RelatedRecoveryGuides />
    </div>
  );
}
