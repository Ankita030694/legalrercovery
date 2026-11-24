import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CadDpRecoveryTableOfContents from "./CadDpRecoveryTableOfContents";
import CadDpScenarioTabs from "./CadDpScenarioTabs";
import CadDpRecoveryCTA from "./CadDpRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/foreign-buyer-not-retiring-cad-dp-documents-abandoned-container-port";
const EXACT_H1 =
  "Container Landed at Jebel Ali / Rotterdam / Mombasa and the Buyer Refuses to Retire CAD/DP Documents to Extort a 40% Discount? Emergency Playbook";
const META_TITLE = "Foreign Buyer Refusing CAD/DP Documents at Destination Port?";
const META_DESCRIPTION =
  "Buyer refusing CAD/DP documents as container demurrage hits $200/day? Execute RBI alternate-buyer resale, URC 522 bank protest & legal notice fast.";

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
        alt: formatAltText("Foreign Buyer Not Retiring CAD DP Documents Abandoned Container"),
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
    remedy: "URC 522 Article 26 Bank Protest & Mandatory Notice of Non-Payment",
    statute: "ICC Uniform Rules for Collections (URC 522, Articles 1, 9, 24 & 26)",
    timing: "Triggered immediately upon Collecting Bank notifying dishonour or drawee failure to pay within presentation window",
    mechanism: "Instruct Indian Remitting Bank via MT499/MT412 SWIFT to demand Collecting Bank execute a formal judicial protest for non-payment, fixing drawee liability in destination jurisdiction",
    relief: "Creates prima facie authenticated proof of wrongful repudiation; prevents Collecting Bank from surrendering documents or waiving interest",
    suitability: "All CAD (Cash Against Documents) and DP (Documents Against Payment) shipments handled via banking collection channels",
    tone: "emerald",
  },
  {
    remedy: "RBI Alternate-Buyer Resale & Up to 25% Export Value Reduction",
    statute: "RBI Master Direction No. 16/2015-16 on Export of Goods and Services (Para C.15 & C.16)",
    timing: "Invoked within 14–30 days of container landing to prevent demurrage wipeout",
    mechanism: "Authorised Dealer (AD Category-I) Bank permits exporter to change overseas consignee and reduce export value up to 25% without prior RBI approval (subject to track record)",
    relief: "Regularizes EDPMS shipping bill against alternate buyer remittances; eliminates FEMA non-realization penal prosecution risk",
    suitability: "Agricultural produce, ceramic tiles, bulk chemicals, and engineering exports facing buyer insolvency or extortionate price re-negotiation",
    tone: "emerald",
  },
  {
    remedy: "Emergency Shipper Mitigation: Bonded Off-Dock Destuffing & Demurrage Freeze",
    statute: "Indian Contract Act, 1872 (Section 73 Duty to Mitigate) & Admiralty Practice",
    timing: "Execute between Day 5 and Day 10 of container discharge before carrier line tariffs compound",
    mechanism: "Instruct shipping line and local port agent in writing to shift cargo from carrier box into customs bonded warehouse or off-dock CFS, capping container detention charges",
    relief: "Halts daily shipping line detention ($150–$350/box/day); preserves cargo value while commercial arbitration or resale negotiations conclude",
    suitability: "FCL (Full Container Load) shipments stuck at high-cost transshipment and hub ports (Jebel Ali, Rotterdam, Singapore, Durban, Mombasa)",
    tone: "slate",
  },
  {
    remedy: "ECGC Policy Default Intimation & Clause C.24 Mandatory Legal Notice",
    statute: "ECGC Single Buyer / Multi-Buyer Export Credit Insurance Policy Terms",
    timing: "Mandatory default declaration within 30–60 days of due date (or non-acceptance of bill of exchange)",
    mechanism: "Serve formal fact-verified legal notice on overseas defaulting buyer; file declaration of default with ECGC to preserve 80%–90% commercial risk indemnity cover",
    relief: "Validates claim settlement for unaccepted shipments (subject to contract frustration terms) and indemnifies exporter against resale losses",
    suitability: "Exporters holding valid ECGC Comprehensive Export Credit policies where buyer refuses to retire sight or usance collection documents",
    tone: "slate",
  },
  {
    remedy: "Customs Re-Importation of Unsold Cargo (Zero Duty Exemption)",
    statute: "Customs Notification No. 45/2017-Customs & Section 20 of Customs Act, 1962",
    timing: "Filed prior to port abandonment or carrier auction at destination port",
    mechanism: "Recall title documents through AD Bank; book return maritime freight and clear returned goods at Indian port against export proof without basic customs duty",
    relief: "Salvages high-value engineering machinery, precision goods, or branded apparel from overseas auction wipeout",
    suitability: "Non-perishable, high-margin, or proprietary manufactured goods where alternate overseas resale yields less than ocean return freight",
    tone: "amber",
  },
];

const FAQS = [
  {
    question: "What is the 'Destination Port Hostage Scam' faced by Indian exporters?",
    answer:
      "The 'Destination Port Hostage Scam' is an aggressive extortion tactic common in ports like Jebel Ali, Mombasa, Chittagong, and Rotterdam. The foreign buyer contracts on CAD/DP (Documents Against Payment) terms, wait until the vessel discharges and the 7–14 container free days expire, and then intentionally ignores or refuses to retire the original shipping documents from the local collecting bank. As demurrage and port storage climb at $150 to $350 per container per day, the buyer contacts the desperate Indian exporter demanding a 35% to 50% 'distress discount' or credit release, betting the exporter cannot afford return freight or carrier detention.",
  },
  {
    question: "Can an Indian exporter resell the stuck container to an alternate overseas buyer under RBI rules?",
    answer:
      "Yes. Under Reserve Bank of India (RBI) Master Direction on Export of Goods and Services (Para C.15 & C.16), Authorised Dealer (AD Category-I) banks are empowered to approve the change of buyer/consignee and permit a reduction in invoice value up to 25% of the original invoice, provided the exporter is not on the RBI caution list, the shipment was on bona fide commercial terms, and the AD bank is satisfied with genuine commercial distress. For discounts exceeding 25%, approval can be obtained through the AD Bank upon demonstrating port demurrage escalation and market price drops.",
  },
  {
    question: "What should the exporter instruct the Remitting Bank under URC 522 Article 26?",
    answer:
      "The exporter must immediately instruct their Indian Remitting Bank to transmit an urgent SWIFT MT499/MT412 message to the overseas Collecting Bank invoking ICC Uniform Rules for Collections (URC 522) Article 26. The instructions should direct the Collecting Bank to cause a formal judicial or notarial 'Protest for Non-Payment' against the drawee, demand written confirmation of cargo custody, and forbid releasing documents against trust receipts (T/R) or acceptance under Article 10.",
  },
  {
    question: "How does the exporter halt compounding shipping line container demurrage?",
    answer:
      "Under Section 73 of the Indian Contract Act and international maritime law, the shipper has an affirmative duty to mitigate losses. The exporter or their designated local agent must formally instruct the ocean carrier in writing to un-stuff (destuff) the container and place the cargo into a customs bonded warehouse or off-dock Container Freight Station (CFS). While quay warehouse rent continues, returning the empty container box to the carrier line immediately halts the crippling carrier detention clock ($150–$350/day).",
  },
  {
    question: "Who is legally liable for container demurrage if the foreign buyer abandons cargo?",
    answer:
      "Under standard ocean Bills of Lading and international maritime precedents, the carrier holds the 'Shipper' (the Indian exporter) jointly and severally liable for destination demurrage, detention, and disposal costs, regardless of Incoterms (even CIF or CFR). However, by serving an immediate legal notice on the defaulting buyer, the exporter establishes that all carrier charges represent direct consequential damages arising from the buyer's breach of contract under Section 73 of the Indian Contract Act, enabling cross-border indemnification proceedings.",
  },
  {
    question: "Can unsold export goods be re-imported into India without paying customs duty?",
    answer:
      "Yes. Under Customs Notification No. 45/2017-Customs (as amended) and Section 20 of the Customs Act, 1962, goods exported from India and re-imported unsold due to foreign buyer default are exempt from Basic Customs Duty (BCD) and Integrated GST (IGST), subject to conditions: the goods must be re-imported within 3 years (10 years for certain engineering goods), the identity of the exported cargo must be established, and any export incentives (RoDTEP, RoSCTL, Duty Drawback) previously claimed must be refunded to Indian Customs.",
  },
  {
    question: "How does an advocate legal notice help before the container is auctioned by foreign port customs?",
    answer:
      "Serving an advocate notice does three vital things: (1) It issues a strict 48-to-72-hour ultimatum to the buyer to retire the bill or face full commercial arbitration and tort damages, often forcing rogue buyers who need the cargo to pay; (2) It creates mandatory statutory documentation required by AD Banks and the RBI to approve alternate buyer resale discounts and close open EDPMS shipping bills; and (3) It satisfies the mandatory pre-litigation condition precedent under ECGC insurance policy clauses for default claim admission.",
  },
];

export default function ForeignBuyerCadDpAbandonedContainerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_URL}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${PAGE_URL}`,
        },
        headline: EXACT_H1,
        description: META_DESCRIPTION,
        url: `${SITE_URL}${PAGE_URL}`,
        inLanguage: "en-IN",
        mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
        datePublished: "2026-11-17T09:00:00+05:30",
        dateModified: "2026-11-17T17:00:00+05:30",
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
        image: `${SITE_URL}/blog_money_recovery.png`,
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}${PAGE_URL}#howto`,
        name: "Emergency 72-Hour Action Plan for Abandoned Container & CAD/DP Document Non-Retirement",
        description:
          "Statutory and maritime SOP for Indian exporters to halt destination container demurrage, execute URC 522 bank protest, and re-sell to alternate buyers under RBI Master Directions.",
        step: [
          {
            "@type": "HowToStep",
            name: "Hour 0–24: Instruct Remitting Bank for URC 522 Art. 26 Bank Protest",
            text: "Direct Indian AD Bank to issue urgent SWIFT MT499 to foreign collecting bank to demand formal legal protest for non-payment and confirm cargo documents remain secure.",
          },
          {
            "@type": "HowToStep",
            name: "Hour 24–48: Serve Formal Fact-Verified Legal Notice for Default & Demurrage Indemnity",
            text: "Serve statutory legal demand on foreign buyer detailing container demurrage liabilities, carrier indemnity, and giving 48 hours to retire documents before title is transferred.",
          },
          {
            "@type": "HowToStep",
            name: "Hour 48–72: Execute Cargo Destuffing or Alternate Buyer Re-Sale Under RBI Para C.15",
            text: "Instruct shipping line to shift cargo to bonded warehouse to freeze box detention fees; apply to AD Bank for buyer change and up to 25% price reduction under RBI export regulations.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${PAGE_URL}#faq`,
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
        "@id": `${SITE_URL}${PAGE_URL}#breadcrumb`,
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
            name: "Exporters & Cross-Border Trade Debt Recovery",
            item: `${SITE_URL}/industries/exporters-cross-border-trade-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Foreign Buyer Refusing CAD/DP Documents at Port",
            item: `${SITE_URL}${PAGE_URL}`,
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
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>URC 522 &bull; RBI Master Direction Para C.15 &bull; Cross-Border Default Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor SOP &amp; Statutory Summary
            </span>
            When an overseas buyer refuses to retire Cash Against Documents (CAD/DP) at Jebel Ali, Rotterdam, or Mombasa, demurrage compounds at $150–$350/day. Exporters must immediately: (1) demand an emergency URC 522 Article 26 Bank Protest via Remitting Bank, (2) serve a 48-hour advocate damages notice, (3) execute an alternate-buyer resale with up to 25% price reduction under RBI Master Direction Para C.15, and (4) destuff containers into off-dock bonded warehouses. Read our comprehensive{" "}
            <Link
              href="/industries/exporters-cross-border-trade-recovery"
              className="text-red-400 underline font-semibold hover:text-red-300"
            >
              Exporters &amp; Cross-Border Trade Debt Recovery Hub
            </Link>{" "}
            for complete trade finance compliance.
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Demurrage Burn Rate
              </p>
              <p className="text-lg sm:text-2xl font-black text-red-400 mt-1">
                $150–$350/day
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Per FCL 40ft High-Cube Box</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                RBI AD Bank Resale Slabs
              </p>
              <p className="text-lg sm:text-2xl font-black text-emerald-400 mt-1">
                Up to 25%
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Para C.15 Without Prior RBI</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Bank Protest Rail
              </p>
              <p className="text-lg sm:text-2xl font-black text-slate-100 mt-1">
                URC 522 Art. 26
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Judicial Non-Payment Proof</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                EDPMS Risk Mitigation
              </p>
              <p className="text-lg sm:text-2xl font-black text-amber-400 mt-1">
                Zero Caution
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Regularized Realization Rail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Exporters & Cross-Border Trade Debt Recovery",
              href: "/industries/exporters-cross-border-trade-recovery",
            },
            {
              label: "Foreign Buyer Refusing CAD/DP Documents at Port",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Sticky Table of Contents */}
          <CadDpRecoveryTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Port Hostage Scam */}
            <section
              id="heading-port-hostage-scam"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  The Anatomy of the &apos;Destination Port Hostage Scam&apos;
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                For decades, exporters of Morbi ceramic tiles, Unjha cumin seeds, Karnal Basmati rice, and engineering components have fallen prey to the oldest cross-border extortion play in international trade. The foreign buyer enters into a contract on <strong>CAD (Cash Against Documents)</strong> or <strong>DP (Documents Against Payment)</strong> at sight terms. The exporter manufactures, inspects, ships the container, and hands the complete document bundle (Original Ocean Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, and Inspection Certificate) to their Indian Authorised Dealer bank for foreign collection under ICC URC 522 rules.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The crisis unfolds the moment the vessel berths at Jebel Ali (Dubai), Mombasa (Kenya), Rotterdam (Netherlands), or Colombo (Sri Lanka). The buyer intentionally goes dark. Phone calls are met with silence or excuses (&quot;our CEO is travelling&quot;, &quot;the bank server is down&quot;). Meanwhile, the carrier line&apos;s 7 to 14 free days expire. On Day 15, container demurrage starts compounding at <strong>$150 to $350 per box per day</strong>. Quay rent and port storage charges mount alongside.
              </p>
              <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl my-5 text-xs sm:text-sm text-slate-800 leading-relaxed">
                <strong className="text-red-700 block mb-1">The Coercive Commercial Playbook:</strong>
                Once demurrage has accrued to $6,000–$15,000 per box, the buyer resurfaces with a calculated ultimatum: <em>&quot;The domestic market in our country has collapsed by 40%. We cannot retire the documents at the invoice price. If you grant us an immediate 40% discount and instruct your bank to release the B/L, we will clear the cargo today. Otherwise, abandon the box.&quot;</em>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The buyer calculates that the exporter cannot afford return freight ($2,500–$6,000/box plus origin customs re-importation hurdles) and will capitulate. Capitulating, however, causes severe capital erosion and triggers RBI EDPMS caution-listing under Indian exchange control laws. Exporters need an aggressive, statutory emergency counter-offensive. If you also manage pending domestic or overseas corporate invoices, consult our{" "}
                <Link
                  href="/recovery/export-dues"
                  className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                >
                  Export Dues Recovery Desk
                </Link>{" "}
                and review formal{" "}
                <Link
                  href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                  className="text-[#DC2626] underline font-semibold hover:text-[#B91C1C]"
                >
                  International Legal Notice Protocols
                </Link>.
              </p>
            </section>

            {/* Section 2: 72-Hour Action Rail */}
            <section
              id="heading-emergency-rail"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  The Emergency 72-Hour Recovery Rail (Operational Decision Tree)
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                When a container lands and the buyer refuses to retire shipping documents, hours matter. Demurrage accrues every 24 hours at midnight. Here is the step-by-step statutory response rail:
              </p>

              {/* Visual Decision Tree (Desktop) */}
              <div className="hidden md:block bg-slate-900 text-white p-6 rounded-2xl mb-6 border border-slate-800">
                <div className="text-xs uppercase tracking-wider text-red-400 font-bold mb-4">
                  Multi-Track Emergency Escalation Architecture
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                    <span className="text-xs font-bold text-red-400 block mb-1">STAGE 1 &bull; 0–24 HOURS</span>
                    <h3 className="text-sm font-bold text-white mb-2">URC 522 Bank Protest</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Issue SWIFT MT499 via Remitting Bank instructing overseas Collecting Bank to lodge Article 26 judicial non-payment protest. Lock document custody.
                    </p>
                  </div>
                  <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                    <span className="text-xs font-bold text-amber-400 block mb-1">STAGE 2 &bull; 24–48 HOURS</span>
                    <h3 className="text-sm font-bold text-white mb-2">Advocate Damages Notice</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Issue formal 48-hr legal demand for full contract value, container demurrage indemnity ($250/day), and notice of intent to resell to secondary buyer.
                    </p>
                  </div>
                  <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                    <span className="text-xs font-bold text-emerald-400 block mb-1">STAGE 3 &bull; 48–72 HOURS</span>
                    <h3 className="text-sm font-bold text-white mb-2">Destuff &amp; RBI Resale</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Instruct carrier to destuff box into bonded CFS to freeze container detention. Apply under RBI Para C.15 for alternate buyer resale at up to 25% discount.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-xs font-bold text-red-400 block mb-1">STAGE 1 &bull; 0–24 HOURS</span>
                  <h3 className="text-sm font-bold text-white mb-1">URC 522 Bank Protest via SWIFT</h3>
                  <p className="text-xs text-slate-300">
                    Instruct Remitting Bank to demand Collecting Bank lodge an official non-payment protest under Article 26.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-xs font-bold text-amber-400 block mb-1">STAGE 2 &bull; 24–48 HOURS</span>
                  <h3 className="text-sm font-bold text-white mb-1">Advocate Default &amp; Damages Demand</h3>
                  <p className="text-xs text-slate-300">
                    Serve legal notice establishing buyer liability for contract price and destination demurrage.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-xs font-bold text-emerald-400 block mb-1">STAGE 3 &bull; 48–72 HOURS</span>
                  <h3 className="text-sm font-bold text-white mb-1">Off-Dock Destuff &amp; RBI Resale</h3>
                  <p className="text-xs text-slate-300">
                    Move cargo to bonded CFS to halt container detention; execute alternate buyer resale under RBI rules.
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                By taking these coordinated steps within 72 hours, the exporter converts a passive hostage trap into an aggressive legal offensive that binds the defaulting buyer while protecting trade finance credit lines.
              </p>
            </section>

            {/* Section 3: Statutory & Maritime Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory, Banking &amp; Maritime Recovery Matrix
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Resolving an uncollected container involves five intersecting regulatory frameworks: international banking collection rules (URC 522), Indian foreign exchange regulations (RBI/FEMA), international maritime law, export credit insurance (ECGC), and Indian customs statutes:
              </p>

              <div className="overflow-x-auto -mx-5 sm:-mx-6 md:-mx-8 px-5 sm:px-6 md:px-8">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3 px-4 rounded-tl-xl font-bold">Remedy / Legal Rail</th>
                      <th className="py-3 px-4 font-bold">Statute &amp; Authority</th>
                      <th className="py-3 px-4 font-bold">Operational Mechanism</th>
                      <th className="py-3 px-4 rounded-tr-xl font-bold">Relief &amp; Strategic Value</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs divide-y divide-slate-200">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900 align-top">
                          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${row.tone === "emerald" ? "bg-emerald-500" : row.tone === "amber" ? "bg-amber-500" : "bg-[#DC2626]"}`} />
                          {row.remedy}
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 font-medium align-top">
                          {row.statute}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 align-top leading-relaxed">
                          {row.mechanism}
                        </td>
                        <td className="py-3.5 px-4 text-slate-800 font-semibold align-top leading-relaxed">
                          {row.relief}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                <strong>Crucial Regulatory Interplay:</strong> An exporter cannot simply abandon cargo or slash prices without bank and RBI alignment. Unapproved discounts result in unclosed shipping bills on RBI&apos;s EDPMS portal, leading to caution-listing. For deeper insights on managing EDPMS caution-listing notices, consult our specialized guide on{" "}
                <Link
                  href="/rbi-edpms-unrealized-shipping-bill-write-off-caution-list-legal-notice"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  RBI EDPMS Unrealized Shipping Bill Write-Offs
                </Link>.
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  4 Commercial Failure Modes Across Major Global Ports
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Different destination ports present radically different legal risks, demurrage tariffs, and customs auction rules. Select a corridor below to inspect the tailored countermeasure:
              </p>

              <CadDpScenarioTabs />
            </section>

            {/* Section 5: URC 522 Bank Protest Deep Dive */}
            <section
              id="heading-urc-522-protest"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Enforcing ICC URC 522 &amp; Directing Bank Protest Against the Drawee
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Almost all international documentary collections are subject to the <strong>International Chamber of Commerce (ICC) Uniform Rules for Collections (Publication No. 522)</strong>. Exporters frequently fail to leverage the statutory protections embedded within URC 522 when a buyer defaults on sight CAD/DP drafts:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    URC 522 Article 26: Protest for Non-Payment / Non-Acceptance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Article 26, the collection instruction must clearly state whether the bill of exchange or draft is to be protested in the event of non-payment. If instructed, the Collecting Bank is legally required to arrange for a notary public or court bailiff to formally protest the dishonour under the commercial law of the destination country. This notarial act creates unassailable, court-admissible evidence of insolvency or breach of contract.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    URC 522 Article 10: Strict Prohibition on Document Release Without Payment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Article 10 expressly stipulates that in DP collections, documents must be released <em>only against payment</em>, and the Collecting Bank is strictly prohibited from releasing documents against partial payments or promissory notes without explicit written authorization from the Remitting Bank. If a local bank releases original Bills of Lading to a favoured local merchant without funds, the bank commits conversion of title.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    URC 522 Article 20 &amp; 24: Collecting Bank Advice of Non-Payment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The Collecting Bank must send advice of non-payment or non-acceptance without delay by telecommunication (SWIFT MT410/MT412) to the Remitting Bank. If the foreign bank sits on the documents silently while demurrage mounts, it breaches its duty of reasonable care under Article 9.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If the dispute involves a Letter of Credit rather than a documentary collection, inspect our practitioner deep-dive on{" "}
                <Link
                  href="/letter-of-credit-lc-wrongful-discrepancy-dishonour-ucp-600-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  UCP 600 Letter of Credit Discrepancy Dishonour
                </Link>.
              </p>
            </section>

            {/* Section 6: RBI Resale Rules & 25% Discount */}
            <section
              id="heading-rbi-resale-rules"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  RBI Alternate-Buyer Resale &amp; the 25% Price-Reduction Window
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Under the Foreign Exchange Management Act (FEMA), 1999, an Indian exporter is legally obligated to realize the full export value of goods within 9 months from the date of export. When an overseas buyer defaults at destination, exporters cannot simply abandon cargo or slash prices informally without running afoul of the Reserve Bank of India.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The <strong>RBI Master Direction on Export of Goods and Services (FED Master Direction No. 16/2015-16)</strong> provides specific statutory pathways under Paragraphs C.15 and C.16 to regularize uncollected cargo:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl">
                  <h3 className="text-sm font-bold text-emerald-900 mb-2">
                    Para C.15: Reduction in Export Value up to 25%
                  </h3>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Authorised Dealer (AD Category-I) banks are permitted to allow reduction in invoice value up to <strong>25% of the total export value</strong> on their own authority, without prior RBI approval. The exporter must demonstrate: (a) genuine commercial distress or port demurrage risk, (b) the exporter is not on the RBI caution list, and (c) the original export transaction was conducted in good faith.
                  </p>
                </div>

                <div className="bg-slate-100 border border-slate-300 p-5 rounded-xl">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    Para C.16: Change of Consignee / Alternate Buyer Resale
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    AD Banks may permit change of buyer/consignee where original documents have been returned unretired. If the alternate overseas buyer purchases the goods at a discount within the 25% threshold, the AD Bank amends EDPMS records directly, issues the NOC to amend the Bill of Lading, and regularizes the realized proceeds without caution-listing the exporter.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs text-amber-900 leading-relaxed">
                <strong>What if the discount exceeds 25%?</strong> If the cargo has deteriorated (e.g., agricultural produce) or destination port demurrage requires a discount exceeding 25%, the AD Bank must submit an application to the Regional Office of the RBI. Serving an advocate legal notice on the defaulting buyer and securing an independent marine surveyor report provides the compulsory evidentiary foundation required for RBI discretionary approval.
              </div>
            </section>

            {/* Section 7: Shipping Line Demurrage Mitigation */}
            <section
              id="heading-shipping-line-demurrage"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Maritime Shipper Mitigation: Capping Shipping Line Demurrage &amp; Detention
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Exporters frequently make the catastrophic mistake of assuming that because their trade contract was CIF or CFR, destination demurrage is solely the buyer&apos;s problem. Under maritime law and ocean carrier contract conditions (standard carrier B/L tariffs from Maersk, MSC, CMA CGM, Hapag-Lloyd), the <strong>Shipper named on the Bill of Lading remains strictly liable</strong> to the carrier for container detention and port storage if the consignee abandons the cargo.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Under Section 73 of the Indian Contract Act, 1872, and the English common law maritime doctrine of loss mitigation (applicable in Dubai, Singapore, and international maritime arbitration), the shipper has an affirmative duty to mitigate damages:
              </p>

              <div className="space-y-3 my-5">
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Formal Written Destuffing Instruction:</strong>
                    Direct the carrier line in writing to un-stuff the container into an off-dock customs bonded warehouse. This returns the empty shipping container to the carrier line, immediately halting the compounding $150–$350/day container detention clock.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Carrier Notice of Cargo Abandonment / Salvage:</strong>
                    If the cargo value is lower than accrued demurrage, serve a formal notice of abandonment on the carrier line and port authority, establishing a cutoff date for shipper liability and demanding cargo auction under local customs rules to minimize deficit claims.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800">
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Preserving ECGC Insurance Recourse:</strong>
                    Under ECGC policy terms, the exporter must obtain ECGC approval before agreeing to cargo abandonment or resale at a distress price. Notice must be served on ECGC within the policy window. Read our guide on{" "}
                    <Link
                      href="/ecgc-export-credit-insurance-claim-legal-notice-default-procedure"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      ECGC Export Credit Insurance Claims &amp; Legal Notices
                    </Link>.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Worked Financial Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Worked Financial Ledger: Resolving a $118,500 Ceramic Tile Default at Jebel Ali
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Consider a Morbi tile manufacturer who shipped three 40ft containers of glazed vitrified tiles to Jebel Ali, Dubai on CAD sight collection terms. The invoice value was <strong>USD $118,500</strong>.
              </p>

              {/* Financial Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl space-y-4">
                <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wider text-red-400 font-bold">
                    Distress Extortion Breakdown (Morbi Tiles at Jebel Ali)
                  </span>
                  <span className="text-xs font-semibold text-slate-300">Port of Discharge: Jebel Ali</span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm font-mono">
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Original Commercial Invoice (CAD Sight):</span>
                    <span className="text-white font-bold">$118,500.00</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Container Demurrage (3 Boxes &times; 22 Days &times; $220/day):</span>
                    <span className="text-red-400 font-bold">$14,520.00</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Jebel Ali Port Storage &amp; Quay Rent:</span>
                    <span className="text-red-400 font-bold">$4,860.00</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Buyer Extortion Offer (Demanding 40% Discount):</span>
                    <span className="text-amber-400 font-bold">$71,100.00 (Loss of $47,400)</span>
                  </div>
                </div>

                <div className="bg-slate-800/90 rounded-xl p-4 border border-slate-700 space-y-2">
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                    Statutory Recovery Playbook Outcome
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    1. <strong>Advocate Demand Notice Served:</strong> Put buyer on notice for $14,520 demurrage damages; initiated URC 522 Art. 26 bank protest.<br />
                    2. <strong>Carrier Mitigation:</strong> Instructed carrier to destuff cargo into off-dock bonded warehouse at $2,100 total cost, freezing daily $660 container detention.<br />
                    3. <strong>RBI Para C.15 Resale:</strong> Secured secondary Dubai contractor at $101,910 (14% discount). AD Bank approved change of consignee within 48 hours.<br />
                    4. <strong>Net Realization:</strong> $94,950 realized vs $71,100 extortion capitulation. Exporter saved <strong>$23,850 in net cash</strong> and closed EDPMS shipping bills without RBI caution-listing.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Evidence & Maritime Audit Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Documentary Evidence &amp; Maritime Audit Checklist (BSA 2023 s.63)
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                To enforce cross-border claims, execute RBI resale regularizations, and establish compliance under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023), assemble the following complete evidentiary dossier:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2 text-xs">
                  <span className="font-bold text-slate-900 block text-sm">Commercial &amp; Contractual Records</span>
                  <ul className="space-y-1.5 text-slate-700 list-disc list-inside">
                    <li>Executed Sales Contract / Proforma Invoice with CAD/DP terms</li>
                    <li>Purchase Order (PO) with Incoterms 2020 definitions</li>
                    <li>Pre-shipment Inspection Certificate (SGS, Bureau Veritas, Eurofins)</li>
                    <li>Factory stuffing photos, seal verification logs, and tare weights</li>
                    <li>Original Commercial Invoice and Detailed Packing List</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2 text-xs">
                  <span className="font-bold text-slate-900 block text-sm">Banking &amp; Shipping Rail Evidence</span>
                  <ul className="space-y-1.5 text-slate-700 list-disc list-inside">
                    <li>Full set 3/3 Original Ocean Bills of Lading (Clean on Board)</li>
                    <li>Bank Collection Schedule citing URC 522 application</li>
                    <li>SWIFT MT410 (Advice of Acknowledgment) &amp; MT412 (Non-Payment Advice)</li>
                    <li>Carrier Arrival Notice &amp; Daily Demurrage Invoices</li>
                    <li>BSA 2023 Section 63 Electronic Evidence Certificate for WhatsApp/Email trails</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 10: Dual B2B CTA */}
            <section id="heading-cta" className="scroll-mt-28">
              <CadDpRecoveryCTA />
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Frequently Asked Questions (Cross-Border CAD/DP Recovery)
                </h2>
              </div>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/50 hover:bg-slate-50 transition-colors [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-slate-900 gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] shrink-0 text-lg transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-slate-100 rounded-2xl border border-slate-200 p-5 sm:p-6 text-xs text-slate-600 space-y-2"
            >
              <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Statutory Citations, Treaties &amp; Regulatory Precedents
              </h3>
              <p>
                1. <strong>ICC Uniform Rules for Collections (URC 522):</strong> Articles 1, 9, 10, 20, 24, and 26 governing document handling, due care, and protest for non-payment.
              </p>
              <p>
                2. <strong>Reserve Bank of India (RBI):</strong> Master Direction on Export of Goods and Services (FED Master Direction No. 16/2015-16), Paragraphs C.15 (Reduction in Export Value up to 25%) and C.16 (Change of Consignee / Alternate Buyer).
              </p>
              <p>
                3. <strong>Indian Contract Act, 1872:</strong> Section 73 (Compensation for loss or damage caused by breach of contract and common law duty to mitigate losses).
              </p>
              <p>
                4. <strong>Customs Act, 1962:</strong> Section 20 read with Notification No. 45/2017-Customs for duty-exempt re-importation of uncollected Indian export cargo.
              </p>
              <p>
                5. <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023):</strong> Section 63 statutory admissibility requirements for electronic communications, SWIFT copies, and maritime tracking records.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
