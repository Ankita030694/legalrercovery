import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import FreightForwarderRecoveryTableOfContents from "./FreightForwarderRecoveryTableOfContents";
import FreightForwarderRecoveryScenarioTabs from "./FreightForwarderRecoveryScenarioTabs";
import FreightForwarderRecoveryCTA from "./FreightForwarderRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/freight-forwarder-cha-customs-duty-ocean-freight-reimbursement-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "CHA & Forwarder Customs Duty & Ocean Freight Recovery";
const PAGE_DESCRIPTION =
  "Paid shipping line DO, CFS, or ICEGATE customs duty and importer defaulted? Enforce Contract Act s.222 indemnity & recover unpaid freight.";
const H1_TEXT =
  "Urgent Recovery for CHAs & Freight Forwarders: Unpaid Ocean/Air Freight, Upfront ICEGATE Duty/CFS Reimbursements & Abandoned Cargo Indemnity";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      name: "Logistics, Transporter & 3PL Debt Recovery Hub",
      item: `${SITE_URL}/industries/logistics-freight-3pl-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CHA Customs Duty & Ocean Freight Reimbursement Recovery",
      item: CANONICAL_URL,
    },
  ],
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: CANONICAL_URL,
  datePublished: "2026-11-16T12:00:00+05:30",
  dateModified: "2026-11-16T12:00:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder",
    worksFor: {
      "@type": "LegalService",
      name: "AMA Legal Solutions",
      url: "https://www.amalegalsolutions.com",
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
  image: `${SITE_URL}/blog_money_recovery.png`,
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Customs Brokers and Freight Forwarders Recover Advanced Customs Duty and Ocean Freight Under Indian Law",
  description:
    "A 5-stage legal and operational recovery protocol for CHAs, NVOCCs, and freight forwarders to enforce Section 222 Contract Act agency indemnity, hold Delivery Orders lawfully, freeze importer bank accounts, and defeat abandoned container demurrage claims.",
  totalTime: "P45D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Reconciliation of ICEGATE Duty Challans and Bank UTRs",
      text: "Audit and compile all Basic Customs Duty, IGST, CFS movement, and shipping line THC payments against the importer's signed CBLR Form-CA agency mandate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Lawful Assertion of Bailee and Carrier Lien over Delivery Order",
      text: "Exercise possessory and contractual lien under Indian Contract Act Sections 170 and 171 by withholding the original Delivery Order (DO) or House Bill of Lading (HBL) for current freight dues.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Issuance of Statutory Section 222 Agency Indemnity Demand Notice",
      text: "Serve a formal advocate legal demand notice under Section 222 of the Indian Contract Act, 1872, mandating full indemnity for lawful outlays plus 18% p.a. commercial interest within 7 to 15 days.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Section 48 Customs Cargo Auction and Demurrage De-stuffing Notice",
      text: "In cases of abandoned cargo, serve registered notices on the shipping line and port custodian under Customs Act Section 48 to de-stuff containers into bonded warehouses and stop demurrage accrual.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Commercial Suit and Order XXXVIII Rule 5 Bank Attachment",
      text: "File a commercial suit under Section 2(1)(c)(iv)/(v) of the Commercial Courts Act, 2015, or an Order XXXVII CPC Summary Suit with an ex-parte prayer for pre-judgment attachment of the defaulting importer's bank accounts.",
    },
  ],
};

const FAQS = [
  {
    question: "Can a CHA recover customs duty paid on behalf of an importer if the importer defaults?",
    answer:
      "Yes. Under Section 222 of the Indian Contract Act, 1872, an employer (the principal/importer) is statutorily bound to indemnify his agent (the Customs House Agent / Customs Broker) against the consequences of all lawful acts done in exercise of the authority conferred upon him. When a CHA pays Basic Customs Duty and IGST on ICEGATE pursuant to the importer's authorization under the Customs Brokers Licensing Regulations (CBLR 2018), this advance constitutes a liquidated statutory debt recoverable with interest under Order XXXVII CPC or Commercial Courts Act Section 2(1)(c).",
  },
  {
    question: "Can a freight forwarder legally withhold a Delivery Order (DO) for unpaid freight?",
    answer:
      "Yes, for freight and terminal charges due on the specific consignment, the forwarder holds a Particular Lien under Section 170 of the Indian Contract Act. For historical arrears across earlier shipments, the forwarder can enforce a General Lien under Section 171 provided the client agreed to standard credit trading conditions (such as FFFAI Standard Trading Conditions) granting general lien rights over all documents of title and cargo.",
  },
  {
    question: "Is a CHA or freight forwarder liable for shipping line demurrage if the importer abandons cargo?",
    answer:
      "No. The Supreme Court of India in Forbes Forbes Campbell & Co. v. Board of Trustees of the Port of Bombay settled that an agent or notify party is not the owner of the goods and cannot be saddled with indefinite container demurrage and port storage charges once the principal abandons the shipment. Forwarders can invoke Customs Act Section 48 to compel the port custodian to auction the cargo, while enforcing Contract Act Section 222 indemnity against the importer.",
  },
  {
    question: "Can an importer file a police FIR for extortion or theft if a forwarder holds the Delivery Order?",
    answer:
      "No. Holding a Delivery Order or Bill of Lading for disputed freight or duty reimbursement is purely a civil commercial dispute arising out of a carriage contract. The Supreme Court in Dalip Kaur v. Jagnar Singh held that a bona fide contractual dispute cannot be converted into a criminal prosecution for criminal breach of trust (Section 316 BNS / Section 406 IPC) or cheating (Section 318 BNS / Section 420 IPC).",
  },
  {
    question: "What interest rate can a freight forwarder claim on delayed customs and freight advances?",
    answer:
      "In commercial transactions involving mercantile agency, Indian courts routinely award commercial interest between 12% and 18% per annum under Section 73 and Section 222 of the Indian Contract Act, 1872, read with Section 34 of the CPC and the Interest Act, 1978, compensating the forwarder for bank overdraft costs and working capital erosion.",
  },
  {
    question: "How does a freight forwarder recover air freight defaults under IATA CASS?",
    answer:
      "Because IATA CASS imposes bi-monthly auto-debit cycles backed by severe bank guarantee forfeiture, forwarders must issue urgent 48-hour pre-litigation notices, lodge caveats before Commercial Courts under Section 2(1)(c)(v) of the Commercial Courts Act, 2015, and file applications under CPC Order XXXVIII Rule 5 for attachment of the exporter's bank accounts and export incentives (Duty Drawback / RoDTEP).",
  },
  {
    question: "Can a freight forwarder file an IBC Section 8 insolvency notice against a defaulting corporate importer?",
    answer:
      "Yes. If the defaulting importer is an incorporated company (Private Limited or Public Limited) and the unpaid operational debt for freight, handling, and duty reimbursements exceeds the statutory threshold of ₹1 Crore, the forwarder can serve a Form 3/Form 4 statutory demand notice under Section 8 of the Insolvency and Bankruptcy Code, 2016 (IBC).",
  },
];

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

const STATUTORY_HEADS = [
  {
    head: "Customs Duty & IGST Advance Reimbursement",
    statutoryBasis: "Contract Act 1872 s.222 & Customs Act s.146 (CBLR 2018)",
    applicability: "Assessed duty and integrated tax paid on ICEGATE on behalf of importer",
    enforceability: "Liquidated debt; recoverable under Order XXXVII CPC or Commercial Courts",
    interestRate: "18% p.a. commercial bank overdraft benchmark under Contract Act s.73",
  },
  {
    head: "Ocean / Air Freight & Terminal Handling Charges (THC)",
    statutoryBasis: "Commercial Courts Act s.2(1)(c)(iv)/(v) & Multimodal Act 1993",
    applicability: "Agreed port-to-port or door-to-door carriage charges on MBL/HBL/AWB",
    enforceability: "Protected by possessory lien on Delivery Order under Contract Act s.170",
    interestRate: "12% to 18% p.a. as per carrier trading conditions & Interest Act 1978",
  },
  {
    head: "Container Freight Station (CFS) Handling & Storage",
    statutoryBasis: "Contract Act s.170 Bailee Lien & Customs Act 1962 s.48",
    applicability: "De-stuffing, ground rent, lift-on/lift-off (Lo-Lo), and port examination dues",
    enforceability: "Recoverable from cargo proceeds under Customs Act s.150 or direct decree",
    interestRate: "Tariff prescribed by Port Authority / CFS Association of India",
  },
  {
    head: "Shipping Line Demurrage & Container Detention Indemnity",
    statutoryBasis: "Contract Act s.222/223 & SC Forbes Forbes Campbell Precedent",
    applicability: "Per-diem container retention charges incurred due to importer abandonment",
    enforceability: "Direct principal liability; forwarder immune once abandonment is notified",
    interestRate: "Actual shipping line tariff passed through to defaulting importer",
  },
  {
    head: "IATA CASS Air Cargo Bi-Monthly Settlement Dues",
    statutoryBasis: "Carriage by Air Act 1972 & IATA Cargo Agency Rules",
    applicability: "Unpaid international air freight debited from forwarder's bank guarantee",
    enforceability: "Summary suit decree based on signed Shipper's Letter of Instruction (SLI)",
    interestRate: "18% p.a. commercial compensatory interest under Contract Act s.73",
  },
];

const PRECEDENTS = [
  {
    title: "Supreme Court on Agent's Immunity from Indefinite Demurrage on Abandoned Cargo",
    citation: "Forbes Forbes Campbell & Co. Ltd. v. Board of Trustees of the Port of Bombay, (2015) 13 SCC 56",
    court: "Supreme Court of India",
    holding:
      "The Supreme Court definitively established that a steamer agent, customs broker, or freight forwarder is merely an intermediary and not the owner of imported goods. Once the importer fails or refuses to clear the cargo and effectively abandons it, the port trust or shipping line cannot indefinitely hold the agent liable for demurrage and storage charges. The statutory remedy lies in auctioning the goods under Section 48 of the Customs Act or Major Port Trusts Act.",
  },
  {
    title: "Statutory Principle of Agent's Absolute Right to Indemnification for Lawful Payments",
    citation: "K.S. Shivji & Co. v. Joint Director of Foreign Trade, AIR 1989 Cal 231",
    court: "Calcutta High Court",
    holding:
      "Held that under Section 222 and Section 223 of the Indian Contract Act, 1872, the right of an agent to be indemnified by the principal for expenses, statutory taxes, customs duties, and disbursements incurred during the lawful discharge of agency duties is absolute and unconditional. The principal cannot evade reimbursement by alleging subsequent commercial disputes or market fluctuations.",
  },
  {
    title: "Civil Breach of Carriage Contract Cannot Be Converted into Criminal Cheating FIR",
    citation: "Dalip Kaur & Ors. v. Jagnar Singh & Anr., (2009) 14 SCC 696",
    court: "Supreme Court of India",
    holding:
      "The Apex Court ruled that a dispute arising from the exercise of a commercial lien, withholding of shipping documentation, or non-payment of contractual dues is strictly of a civil nature. Police authorities have no jurisdiction to register FIRs for cheating (Section 420 IPC / Section 318 BNS) or criminal breach of trust (Section 406 IPC / Section 316 BNS) in the absence of fraudulent inducement at the inception of the contract.",
  },
  {
    title: "Mandatory Pre-Institution Mediation Waiver Under Commercial Courts Act",
    citation: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd., (2022) 10 SCC 1",
    court: "Supreme Court of India",
    holding:
      "The Supreme Court held that Section 12A of the Commercial Courts Act, 2015 is mandatory, but when urgent interim relief—such as attachment before judgment of the importer's bank accounts or restraining shipping lines from blacklisting forwarder codes—is prayed for under Order XXXVIII Rule 5 CPC, pre-institution mediation is lawfully dispensed with.",
  },
];

export default function FreightForwarderCustomsDutyRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>Maritime &amp; Customs Recovery SOP &bull; Section 222 Contract Act</span>
          </div>

          {/* Exact H1 Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Executive Creditor Protocol
            </span>
            Under Section 222 of the Indian Contract Act, 1872, an importer is statutorily mandated to indemnify their Customs House Agent (CHA) and freight forwarder for all lawful customs duty, IGST, ocean freight, and CFS charges advanced in good faith. As detailed in our comprehensive{" "}
            <Link
              href="/industries/logistics-freight-3pl-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              Logistics, Transporter &amp; 3PL Debt Recovery Hub
            </Link>
            , forwarders holding Delivery Orders (DO) can exercise a lawful bailee lien under Section 170/171, while the Supreme Court&apos;s <em>Forbes Forbes Campbell</em> doctrine protects forwarders from shipping line demurrage liabilities on abandoned cargo.
          </div>

          {/* Key Metrics 4-Card Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">s.222</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Contract Act Indemnity
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">100%</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Liquidated Duty Claim
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">30 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                s.48 Customs Auction
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">18% p.a.</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Commercial Overdraft Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Logistics & Freight Recovery Hub",
                href: "/industries/logistics-freight-3pl-recovery",
              },
              {
                label: "CHA & Freight Forwarder Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sticky Sidebar TOC + Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Table of Contents */}
          <FreightForwarderRecoveryTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Cash Trap */}
            <section
              id="heading-cash-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  01
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Commercial Asymmetry
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                CHA &amp; Forwarder Cash Trap: Advancing Millions for Tiny Margins
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                In India&apos;s multimodal logistics ecosystem, Customs House Agents (now officially designated as Customs Brokers under Regulation 146 of the Customs Act, 1962) and international freight forwarders operate under severe commercial asymmetry. For handling a standard 40-foot container consignment, an agent typically bills an agency clearance fee between ₹5,000 and ₹15,000. Yet, to facilitate smooth clearance through Indian Customs ports at Nhava Sheva (JNPT), Mundra, Chennai, or Kolkata, the agent is routinely pressured into advancing enormous capital sums: Basic Customs Duty (BCD) and IGST on ICEGATE, Container Freight Station (CFS) ground rent, Terminal Handling Charges (THC), shipping line ocean freight, and surveyor charges—often aggregating between ₹5,00,000 and ₹45,00,000 per shipment.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When an unscrupulous importer takes delivery of the Out-of-Charge (OOC) cargo and defaults on reimbursing these advances, the broker&apos;s entire working capital is frozen. Worse still, if the importer intentionally abandons cargo at the port due to price collapses or regulatory rejections, mega shipping lines (such as Maersk, MSC, or CMA CGM) aggressively target the Indian forwarder or CHA named as the &apos;Notify Party&apos; or &apos;Consignee&apos; on the Master Bill of Lading, demanding millions of rupees in container demurrage and detention while threatening to blacklist their national carrier booking codes.
              </p>
              <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl text-xs sm:text-sm text-slate-800">
                <strong className="text-[#DC2626] font-bold block mb-1">
                  The Legal Defense Imperative:
                </strong>
                CHAs and freight forwarders are statutory agents, not cargo buyers or banking institutions. The Indian legal framework—specifically the Indian Contract Act, 1872, the Customs Act, 1962, and the Commercial Courts Act, 2015—provides powerful statutory indemnities and expedited commercial remedies to recover every rupee advanced and discharge unlawful shipping line claims.
              </div>
            </section>

            {/* Section 2: Contract Act Section 222 */}
            <section
              id="heading-contract-act-222"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  02
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Statutory Agency Hook
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Contract Act Section 222: Statutory Right to Principal Indemnity
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The primary statutory foundation for recovering advanced customs duty, port charges, and ocean freight is Section 222 of the Indian Contract Act, 1872. Section 222 provides:
              </p>
              <blockquote className="bg-slate-900 text-slate-100 p-4 sm:p-5 rounded-xl border-l-4 border-red-500 text-xs sm:text-sm italic leading-relaxed">
                &ldquo;The employer of an agent is bound to indemnify him against the consequences of all lawful acts done by such agent in exercise of the authority conferred upon him.&rdquo;
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                This statutory protection is reinforced by Section 223, which guarantees indemnification even where an act done in good faith causes injury to the rights of third persons. When a Customs Broker files a Bill of Entry on the ICEGATE portal using the importer&apos;s authorization (mandated under the Customs Brokers Licensing Regulations, CBLR 2018), every payment of customs duty, interest, and port charges is a lawful act performed squarely within the scope of agency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">Liquidated Claim</span>
                  <p className="text-xs text-slate-600">
                    ICEGATE duty challans and bank debit UTRs establish indisputable, mathematically exact debt amounts under CPC Order XXXVII.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">Personal Liability</span>
                  <p className="text-xs text-slate-600">
                    Directors and partners who signed corporate guarantees or KYC authorizations can be joined for fraudulent inducement.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">Commercial Interest</span>
                  <p className="text-xs text-slate-600">
                    Section 73 entitles the forwarder to 18% p.a. interest reflecting commercial working capital and bank CC/OD borrowing rates.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Delivery Order Lien */}
            <section
              id="heading-delivery-order-lien"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  03
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Possessory Security
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Holding Delivery Orders (DO) &amp; House BLs: Lawful Lien vs Extortion
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The most potent immediate leverage available to an unpaid freight forwarder or CHA is withholding the Delivery Order (DO), Master Bill of Lading (MBL), House Bill of Lading (HBL), or Air Waybill (AWB). Without the physical or electronic Delivery Order, the port custodian or CFS operator cannot lawfully release the cargo to the importer.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                However, executing a document hold requires strict compliance with statutory lien boundaries under the Indian Contract Act, 1872:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide block">
                    Particular Lien (Section 170) &bull; Automatic Statutory Right
                  </span>
                  <p className="text-xs text-emerald-950 leading-relaxed">
                    A bailee or carrier who has rendered services involving the exercise of labor or skill in respect of goods has a right to retain possession until he receives due remuneration. A forwarder can unconditionally withhold the Delivery Order and cargo for freight, handling, and duty advances incurred on that <em>specific consignment</em>.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wide block">
                    General Lien (Section 171) &bull; Contractual Necessity
                  </span>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    Under Section 171, only bankers, factors, wharfingers, and attorneys hold statutory general liens. Freight forwarders and CHAs must ensure that their credit application forms, quotations, and House BLs explicitly incorporate a contractual General Lien clause (such as standard FFFAI terms) to retain current cargo for past running account ledger arrears.
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                For detailed operational rules on preventing criminal police harassment during cargo holds, consult our sister practitioner guide on{" "}
                <Link
                  href="/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act"
                  className="text-red-600 hover:text-red-800 underline font-semibold"
                >
                  Transporter Carrier Lien and Cargo Detention under Carriage by Road Act
                </Link>
                .
              </p>
            </section>

            {/* Section 4: Decision Tree Flowchart */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  04
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Operational SOP
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Decision Tree: Resolving Unpaid Freight &amp; Abandoned CFS Containers
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When an importer stalls payment or abandons cargo, every 24 hours of hesitation adds astronomical container demurrage and CFS ground rent. Follow this structured legal decision workflow to mitigate exposure and recover outlays:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <svg
                  viewBox="0 0 900 480"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={900}
                  height={480}
                  aria-label={formatAltText("CHA and Freight Forwarder Default Decision Tree Flowchart")}
                >
                  {/* Step 1 */}
                  <rect x="20" y="20" width="240" height="90" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="140" y="55" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                    1. Importer Payment Default
                  </text>
                  <text x="140" y="75" fill="#94A3B8" fontSize="11" textAnchor="middle">
                    Unpaid Duty, Freight or CFS Dues
                  </text>
                  <text x="140" y="92" fill="#38BDF8" fontSize="10" textAnchor="middle">
                    Audit ICEGATE &amp; BL Ledgers
                  </text>

                  {/* Arrow 1 to 2 */}
                  <path d="M260 65 H320" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="320" y="20" width="260" height="90" rx="12" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                  <text x="450" y="55" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                    2. Cargo Status Assessment
                  </text>
                  <text x="450" y="75" fill="#94A3B8" fontSize="11" textAnchor="middle">
                    Is Cargo Delivered or Still at CFS?
                  </text>
                  <text x="450" y="92" fill="#FBBF24" fontSize="10" textAnchor="middle">
                    Check OOC &amp; Gate Pass Status
                  </text>

                  {/* Down Arrow: Cargo Delivered */}
                  <path d="M450 110 V170" stroke="#DC2626" strokeWidth="2" />

                  {/* Right Arrow: Cargo at CFS */}
                  <path d="M580 65 H640" stroke="#38BDF8" strokeWidth="2" />

                  {/* Branch A: Cargo at CFS */}
                  <rect x="640" y="20" width="240" height="90" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                  <text x="760" y="55" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                    3A. Cargo Still at CFS / Port
                  </text>
                  <text x="760" y="75" fill="#A7F3D0" fontSize="11" textAnchor="middle">
                    Withhold Delivery Order (DO)
                  </text>
                  <text x="760" y="92" fill="#FFFFFF" fontSize="10" textAnchor="middle">
                    Exercise s.170 Particular Lien
                  </text>

                  {/* Branch B: Cargo Delivered */}
                  <rect x="330" y="170" width="240" height="90" rx="12" fill="#7F1D1D" stroke="#EF4444" strokeWidth="2" />
                  <text x="450" y="205" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                    3B. Cargo Delivered (OOC Given)
                  </text>
                  <text x="450" y="225" fill="#FCA5A5" fontSize="11" textAnchor="middle">
                    Lien Lost; s.222 Indemnity Suit
                  </text>
                  <text x="450" y="242" fill="#FFFFFF" fontSize="10" textAnchor="middle">
                    Serve 7-Day Advocate Notice
                  </text>

                  {/* Step 4: Cargo Abandoned Check */}
                  <path d="M760 110 V170" stroke="#10B981" strokeWidth="2" />
                  <rect x="640" y="170" width="240" height="90" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                  <text x="760" y="205" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                    4A. Abandonment Risk?
                  </text>
                  <text x="760" y="225" fill="#FCD34D" fontSize="11" textAnchor="middle">
                    If Unclaimed &gt; 30 Days at Port
                  </text>
                  <text x="760" y="242" fill="#38BDF8" fontSize="10" textAnchor="middle">
                    Serve s.48 De-Stuffing Notice
                  </text>

                  {/* Escalation to Court */}
                  <path d="M450 260 V320" stroke="#EF4444" strokeWidth="2" />
                  <path d="M760 260 V320" stroke="#F59E0B" strokeWidth="2" />

                  {/* Final Judicial Card */}
                  <rect x="320" y="320" width="560" height="110" rx="14" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                  <text x="600" y="355" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">
                    5. Expedited Commercial Enforcement
                  </text>
                  <text x="600" y="380" fill="#E2E8F0" fontSize="12" textAnchor="middle">
                    Commercial Suit s.2(1)(c) &bull; Order XXXVII CPC Summary Suit &bull; Order XXXVIII Rule 5 Bank Attachment
                  </text>
                  <text x="600" y="405" fill="#10B981" fontSize="11" textAnchor="middle">
                    Recover 100% Principal + 18% p.a. Commercial Interest + Absolute Shipping Line Indemnity
                  </text>

                  {/* Arrow marker definition */}
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Flowchart Cards */}
              <div className="md:hidden space-y-3">
                <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-red-500/40">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">Stage 1</span>
                  <p className="text-xs font-bold text-white">Importer Default on Duty or Freight</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">Audit ICEGATE duty receipts, UTR numbers, House BL, and signed credit terms.</p>
                </div>
                <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-blue-500/40">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block">Stage 2</span>
                  <p className="text-xs font-bold text-white">Verify Physical Cargo Custody</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">If cargo is at CFS, withhold Delivery Order under Section 170. If already delivered, initiate Section 222 indemnity suit.</p>
                </div>
                <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-amber-500/40">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">Stage 3</span>
                  <p className="text-xs font-bold text-white">De-Stuff Containers Under Customs Act s.48</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">Serve 30-day notice on shipping line and CFS to de-stuff cargo, halting daily container detention penalties.</p>
                </div>
                <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-emerald-500/40">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">Stage 4</span>
                  <p className="text-xs font-bold text-white">Order XXXVII Summary Suit &amp; Bank Freeze</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">File in Commercial Court under Section 2(1)(c)(iv)/(v) with Order XXXVIII Rule 5 attachment of debtor accounts.</p>
                </div>
              </div>
            </section>

            {/* Section 5: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  05
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Comparative Rights
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Statutory Recovery Matrix: Customs Duty, Demurrage &amp; Freight Dues
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Forwarders and CHAs must distinguish between different heads of expenditure. Each head carries a distinct statutory foundation, enforcement forum, and interest ceiling:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Claim Head</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Statutory Basis</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Enforcement Mechanism</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Statutory Interest Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {STATUTORY_HEADS.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">
                          {item.head}
                          <span className="block text-[11px] text-slate-500 font-normal mt-0.5">
                            {item.applicability}
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 font-mono text-[11px] sm:text-xs text-slate-800">
                          {item.statutoryBasis}
                        </td>
                        <td className="p-3 sm:p-4 text-xs">{item.enforceability}</td>
                        <td className="p-3 sm:p-4 font-semibold text-emerald-700 text-xs">
                          {item.interestRate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-2.5 px-2">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  06
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Commercial Failure Modes
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug px-2">
                Interactive Operational Scenarios: 4 Freight Default Playbooks
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed px-2">
                Explore real-world commercial failure modes encountered by Indian freight forwarders and customs brokers, together with court-tested statutory defenses and recovery timelines:
              </p>
              <FreightForwarderRecoveryScenarioTabs />
            </section>

            {/* Section 7: Abandoned Cargo Demurrage Defense */}
            <section
              id="heading-abandoned-cargo-demurrage"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  07
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Maritime Demurrage Defense
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                When Importers Abandon Cargo: Defending Shipping Line Demurrage
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                One of the most catastrophic risks in freight forwarding arises when an overseas supplier ships cargo to India, and the Indian buyer realizes that the local domestic market value is lower than the landed cost (import duty + ocean freight). The importer quietly vanishes, abandoning the container at the port or CFS. Months later, the ocean carrier slaps the forwarder with ₹30L to ₹1 Crore in container demurrage and detention charges, threatening to cancel the forwarder&apos;s credit lines and booking codes across Indian ports.
              </p>
              <div className="bg-slate-900 text-white p-5 rounded-xl space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  The Supreme Court 3-Pillar Abandoned Cargo Defense:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span>
                      <strong>Agent Non-Ownership (Forbes Forbes Campbell Doctrine):</strong> The Supreme Court affirmed that an agent is not the owner of imported goods. Section 2(26) of the Customs Act defines the importer as the owner or beneficial holder; an agent acting on commission cannot be held indefinitely liable for container detention once the owner abandons cargo.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span>
                      <strong>Mandatory Section 48 Auction Trigger:</strong> Under Section 48 of the Customs Act, 1962, if imported goods are not cleared within 30 days, the port/CFS custodian has a statutory duty to issue notice to the owner and auction the goods. Forwarders must formally serve Section 48 requisition notices on the carrier and CFS to freeze demurrage accrual.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&bull;</span>
                    <span>
                      <strong>De-Stuffing Mandate into Bonded Warehouses:</strong> Indian Courts have repeatedly ordered shipping lines to de-stuff cargo into Customs bonded warehouses under Section 49, releasing the empty marine containers back into circulation to arrest mounting per-diem detention fees.
                    </span>
                  </li>
                </ul>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                For fleet-side container transport and factory detention disputes, see our guide on{" "}
                <Link
                  href="/truck-detention-halting-charges-container-demurrage-recovery"
                  className="text-red-600 hover:text-red-800 underline font-semibold"
                >
                  Truck Halting and Container Demurrage Recovery
                </Link>
                .
              </p>
            </section>

            {/* Section 8: Financial Model */}
            <section
              id="heading-financial-model"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  08
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Quantified Ledger
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Financial Model: Quantifying Duty Advances, Port Dues &amp; Interest
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Below is a court-tested financial reconciliation model for a Customs Broker who cleared four 40-foot containers of imported industrial equipment at Nhava Sheva (JNPT) where the importer defaulted on clearance reimbursements:
              </p>

              <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Audit Sample: 4x40ft FCL Equipment Import Ledger
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    Bill of Entry No: 7842190 / ICEGATE Verified
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                    <span>1. Basic Customs Duty (BCD 7.5%) paid via ICEGATE</span>
                    <span className="font-mono text-white">₹7,42,500</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                    <span>2. Integrated Goods &amp; Services Tax (IGST 18%) on CIF</span>
                    <span className="font-mono text-white">₹6,88,200</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                    <span>3. Shipping Line Ocean Freight + Terminal Handling (THC)</span>
                    <span className="font-mono text-white">₹2,85,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                    <span>4. CFS Movement, Ground Rent &amp; De-stuffing Charges</span>
                    <span className="font-mono text-white">₹1,34,300</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                    <span>5. CHA Agency Filing &amp; Documentation Service Fee</span>
                    <span className="font-mono text-white">₹25,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700 font-bold text-white text-sm">
                    <span className="text-emerald-400">Total Liquidated Principal Advance (Section 222):</span>
                    <span className="font-mono text-emerald-400">₹18,75,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 text-amber-300">
                    <span>Statutory Commercial Interest (18% p.a. for 120 Days Default):</span>
                    <span className="font-mono">₹1,10,958</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-slate-700 font-black text-base text-white">
                    <span className="text-red-400">Total Court-Claim Amount (Order XXXVII CPC):</span>
                    <span className="font-mono text-red-400">₹19,85,958</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic pt-2">
                  *Calculate your exact statutory interest using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-400 hover:text-red-300 underline font-semibold"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  . For unpaid trade invoices and credit sales, consult our{" "}
                  <Link
                    href="/recovery/unpaid-invoices"
                    className="text-red-400 hover:text-red-300 underline font-semibold"
                  >
                    Unpaid Business Invoices Recovery Playbook
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 9: BSA 2023 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  09
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Evidentiary Standards
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                BSA 2023 Section 63 Evidence Trail: ICEGATE, BL &amp; Bank UTR Audit
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Under the Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023), electronic records are admissible under Section 63 provided a mandatory statutory certificate is produced. A successful commercial suit or summary decree depends upon compiling an airtight evidentiary dossier:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-800">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">1. Signed CBLR Form-CA &amp; KYC</span>
                  <p className="text-slate-600">
                    Client authorization letter on company letterhead appointing the broker under Customs Brokers Licensing Regulations, 2018.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">2. ICEGATE Duty Challan &amp; Bank UTR</span>
                  <p className="text-slate-600">
                    Official e-payment receipts generated from the ICEGATE portal showing duty payment linked to the broker&apos;s bank debit UTR.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">3. Bill of Entry &amp; Out-of-Charge (OOC)</span>
                  <p className="text-slate-600">
                    Assessed Bill of Entry with Customs stamp, assessment calculation worksheet, and final electronic OOC gate pass.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">4. Master &amp; House Bills of Lading</span>
                  <p className="text-slate-600">
                    MBL issued by shipping line, HBL issued by forwarder, and Air Waybills with explicit Standard Trading Conditions (STC).
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">5. CFS Invoices &amp; Gate Passes</span>
                  <p className="text-slate-600">
                    Invoices from Container Freight Stations (CFS) for handling, de-stuffing, examination, and container movement.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">6. BSA 2023 s.63 Affidavit</span>
                  <p className="text-slate-600">
                    Affidavit by the IT head or operations manager certifying system hash integrity, timestamp logs, and EDI email transmissions.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Expedited Judicial Remedies */}
            <section
              id="heading-summary-suits-order37"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  10
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Judicial Escalation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Expedited Judicial Remedies: Order 37 Summary Suits &amp; Asset Freeze
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When pre-litigation advocate demand notices are ignored, freight forwarders and CHAs have two high-velocity litigation tracks that bypass years of routine civil court delays:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-slate-900 block text-xs sm:text-sm">
                    Track A: Order XXXVII CPC Summary Suit
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Order XXXVII of the Code of Civil Procedure, a suit based on a written contract of carriage, bills of lading, and verified ICEGATE duty receipts places the burden on the defendant to seek &apos;Leave to Defend&apos;. Unless the importer demonstrates a genuine, substantial defense, the Commercial Court is statutorily required to pass an immediate money decree without prolonged oral trial. Learn more in our detailed analysis of{" "}
                    <Link
                      href="/law/order-37-summary-suit-money-recovery"
                      className="text-red-600 hover:text-red-800 underline font-semibold"
                    >
                      Order XXXVII Summary Suits for Commercial Receivables
                    </Link>
                    .
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-slate-900 block text-xs sm:text-sm">
                    Track B: Commercial Courts Act &amp; Order XXXVIII Rule 5 Attachment
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Carriage of goods by sea and air, export-import transactions, and mercantile agency contracts fall strictly within Section 2(1)(c)(iv) and (v) of the Commercial Courts Act, 2015. Under Supreme Court precedent in <em>Patil Automation</em>, filing an urgent application under Order XXXVIII Rule 5 for attachment before judgment of the importer&apos;s bank accounts and export duty drawbacks dispenses with mandatory Section 12A pre-institution mediation, securing immediate freezing orders.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  11
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Direct Answers
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                CHA, Freight Forwarder &amp; Customs Dues Recovery: Expert FAQs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct statutory answers to recurring questions faced by finance controllers, CHA directors, and forwarder CFOs navigating client defaults across Indian ports:
              </p>

              <div className="space-y-3 pt-2">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 open:bg-white open:border-red-200 open:shadow-sm"
                  >
                    <summary className="flex items-center justify-between p-4 cursor-pointer text-xs sm:text-sm font-bold text-slate-900 select-none hover:text-[#DC2626] transition-colors">
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform text-base shrink-0">
                        &darr;
                      </span>
                    </summary>
                    <div className="p-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  12
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                  Legal Authorities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Statutory Authorities, Customs Regulations &amp; Maritime References
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Practitioner-verified holdings and statutory provisions governing Customs Broker agency reimbursement, container abandonment, and freight lien enforcement:
              </p>

              <div className="space-y-3.5">
                {PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] border border-slate-200 space-y-1.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">{item.title}</span>
                      <span className="text-[11px] text-slate-500 font-mono">{item.court}</span>
                    </div>
                    <p className="text-xs font-semibold text-red-700 font-mono">{item.citation}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.holding}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-3 text-xs">
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  Indian Contract Act, 1872 &bull; India Code &rarr;
                </a>
                <a
                  href="https://www.cbic.gov.in"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  CBIC Customs Act &amp; CBLR 2018 &rarr;
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1538"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  Commercial Courts Act, 2015 &rarr;
                </a>
              </div>
            </section>

            {/* Dual B2B CTA Component */}
            <FreightForwarderRecoveryCTA />
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Cluster */}
      <RelatedRecoveryGuides />
    </div>
  );
}
