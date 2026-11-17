import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ExportersHubTableOfContents from "./ExportersHubTableOfContents";
import ExportersHubScenarioTabs from "./ExportersHubScenarioTabs";
import ExportersHubCTA from "./ExportersHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/exporters-cross-border-trade-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Export & Cross-Border Debt Recovery | FEMA, EDPMS & ECGC";
const PAGE_DESCRIPTION =
  "Recover unpaid DA/DP/Open-Account export bills from US, EU, UK, UAE, Africa & LatAm buyers while protecting your IEC from RBI EDPMS Caution-Listing.";
const H1_TEXT =
  "International Buyer Default Recovery, ECGC Claim Compliance & RBI EDPMS Regularization for Indian Exporters & Importers";

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

interface IndustrySpoke {
  id: string;
  archetype: "G1" | "L1" | "P1" | "R1";
  archetypeLabel: string;
  track:
    | "FEMA EDPMS, ECGC & Customs Shield"
    | "Port Abandonment, LC & Import/BEC Fraud"
    | "Cross-Border Enforcement & Notice Format"
    | "Empirical Risk Benchmark";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_15_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-180",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "FEMA EDPMS, ECGC & Customs Shield",
    title: "RBI EDPMS Unrealized Shipping Bill Write-Off & Caution-List Legal Notice",
    url: "/rbi-edpms-unrealized-shipping-bill-write-off-caution-list-legal-notice",
    statute: "RBI Export Master Direction Para C.20/C.23/C.24",
    summary:
      "Satisfy AD Category-I Bank 'bonafide recovery effort' and 'disproportionate foreign litigation cost' requirements to clear aged EDPMS entries.",
  },
  {
    id: "B2B-181",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "FEMA EDPMS, ECGC & Customs Shield",
    title: "ECGC Export Credit Insurance Claim, Default Intimation & Clause C.24 Procedure",
    url: "/ecgc-export-credit-insurance-claim-legal-notice-default-procedure",
    statute: "ECGC Policy Terms & RBI Clause C.24",
    summary:
      "Meet strict ECGC default-declaration deadlines, serve buyer legal notices, and unlock unconditional EDPMS write-off without the 10% cap.",
  },
  {
    id: "B2B-186",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "FEMA EDPMS, ECGC & Customs Shield",
    title: "Customs Drawback & RoDTEP Show-Cause Notice Defense on Defaulted Exports",
    url: "/duty-drawback-rodtep-recovery-show-cause-notice-unrealized-export-defense",
    statute: "Customs Act s.75(1) Proviso & Drawback Rule 18(2)",
    summary:
      "Defend Rule 18 / Section 75 clawback demands when RBI writes off unrealized export proceeds on merits or ECGC settles the buyer default.",
  },
  {
    id: "B2B-182",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Port Abandonment, LC & Import/BEC Fraud",
    title: "Foreign Buyer Refusing CAD/DP Documents & Abandoned Container Port Playbook",
    url: "/foreign-buyer-not-retiring-cad-dp-documents-abandoned-container-port",
    statute: "ICC URC 522 & RBI Alternate-Buyer Rules",
    summary:
      "Stop foreign port demurrage extortion at Jebel Ali, Rotterdam, or Mombasa via 48-hour mitigation notices and AD-Bank approved cargo resale.",
  },
  {
    id: "B2B-183",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "Port Abandonment, LC & Import/BEC Fraud",
    title: "Letter of Credit (LC) Wrongful Discrepancy Dishonour Under UCP 600",
    url: "/letter-of-credit-lc-wrongful-discrepancy-dishonour-ucp-600-recovery",
    statute: "ICC UCP 600 Articles 14, 16(c) & 16(f)",
    summary:
      "Enforce the strict 5-banking-day preclusion rule against foreign issuing banks manufacturing trivial typographical discrepancies.",
  },
  {
    id: "B2B-184",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Port Abandonment, LC & Import/BEC Fraud",
    title: "Indian Importer TT Advance Recovery, Scrap Container Fraud & IDPMS Closure",
    url: "/indian-importer-advance-paid-foreign-supplier-non-shipment-scrap-fraud",
    statute: "RBI Import Master Direction (IDPMS >6 Months)",
    summary:
      "Recover unfulfilled TT advances from overseas suppliers, combat 'stones-in-container' fraud, and prevent ED referrals on aged IDPMS entries.",
  },
  {
    id: "B2B-185",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "Port Abandonment, LC & Import/BEC Fraud",
    title: "Business Email Compromise (BEC) & SWIFT IBAN Hijack Recovery for Exporters",
    url: "/business-email-compromise-bec-wire-fraud-swift-invoice-hijack-exporter",
    statute: "SWIFT MT199 Recall & Commercial BEC Liability",
    summary:
      "Establish that buyer payment to a hacker's spoofed IBAN does not discharge debt unless seller server negligence caused the compromise.",
  },
  {
    id: "B2B-187",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "Cross-Border Enforcement & Notice Format",
    title: "Enforcing Indian Court Decrees & Arbitral Awards in UAE, UK, USA & Singapore",
    url: "/enforcing-indian-court-decree-arbitral-award-uae-uk-usa-singapore",
    statute: "CPC s.44A Reciprocity & New York Convention 1958",
    summary:
      "Compare direct decree execution in reciprocating territories (UAE 2020, UK, Singapore) vs. New York Convention arbitral awards across 172 states.",
  },
  {
    id: "B2B-188",
    archetype: "P1",
    archetypeLabel: "P1 Notice Workspace",
    track: "Cross-Border Enforcement & Notice Format",
    title: "Advocate-Vetted International Export Legal Demand Notice (FEMA & ECGC Format)",
    url: "/templates/international-export-buyer-legal-demand-notice-fema-ecgc-format",
    statute: "UN CISG / RBI EDPMS Para C.20 / ECGC Audit",
    summary:
      "Generate an AD-Bank and ECGC compliant international demand notice annexing Shipping Bill, B/L, and BSA 2023 s.63 digital delivery proof.",
  },
  {
    id: "B2B-189",
    archetype: "R1",
    archetypeLabel: "R1 Benchmark Report",
    track: "Empirical Risk Benchmark",
    title: "2026–2027 Indian Export Receivables Risk & EDPMS Closure Benchmark Report",
    url: "/reports/indian-exporter-payment-defaults-edpms-trends-report",
    statute: "Corridor Risk & Payment Term Default Analysis",
    summary:
      "Data-backed default patterns across US, EU, UK, UAE, Africa, and LatAm corridors comparing CAD, DA, Open Account, and LC recovery velocity.",
  },
];

const SPOKE_GROUPS: {
  groupTitle: string;
  badgeClass: string;
  items: IndustrySpoke[];
}[] = [
  {
    groupTitle: "Track A: FEMA EDPMS Regularization, ECGC Claims & Customs Drawback Shield",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
    items: IND_15_SPOKES.filter((s) => s.track === "FEMA EDPMS, ECGC & Customs Shield"),
  },
  {
    groupTitle: "Track B: Port Container Abandonment, UCP 600 LC Dishonour, Importer Fraud & BEC",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
    items: IND_15_SPOKES.filter((s) => s.track === "Port Abandonment, LC & Import/BEC Fraud"),
  },
  {
    groupTitle: "Track C: Cross-Border Execution (CPC s.44A / NY Convention) & FEMA Notice Template",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    items: IND_15_SPOKES.filter((s) => s.track === "Cross-Border Enforcement & Notice Format"),
  },
  {
    groupTitle: "Track D: Export Corridor Default & EDPMS Closure Empirical Benchmark",
    badgeClass: "bg-slate-100 text-slate-800 border-slate-200",
    items: IND_15_SPOKES.filter((s) => s.track === "Empirical Risk Benchmark"),
  },
];

const FAQS = [
  {
    question:
      "How does an Advocate Legal Notice prevent RBI EDPMS Caution-Listing of our Importer-Exporter Code (IEC)?",
    answer:
      "Under the RBI Master Direction on Export of Goods and Services, export proceeds must ordinarily be realized within 9 months from the date of shipment. When an invoice remains open in EDPMS beyond 270 days, your AD Category-I Bank requires documented proof of 'bonafide recovery efforts' to process an extension or write-off under Para C.20/C.23. An Advocate-drafted Legal Demand Notice served on the overseas buyer—paired with international courier/email delivery receipts and, where applicable, a legal opinion on disproportionate foreign litigation costs—provides the exact audit trail AD Banks require to keep your IEC off the RBI Caution List.",
  },
  {
    question:
      "Is a formal legal notice to the foreign buyer mandatory before ECGC settles our export credit claim?",
    answer:
      "Yes. Standard ECGC policies (such as SCR, SME, and Specific Buyer Policies) require the exporter to take all reasonable steps to minimize loss and pursue recovery from the defaulting buyer, including timely default declaration and serving a formal legal demand notice. Furthermore, once ECGC settles your claim, RBI Export Master Direction Clause C.24 permits AD Category-I Banks to write off the unrealized Shipping Bill in EDPMS without the usual 10% self/AD-bank write-off ceiling.",
  },
  {
    question:
      "Can Customs claw back Duty Drawback and RoDTEP benefits if the overseas buyer defaults and never pays?",
    answer:
      "Under the proviso to Section 75(1) of the Customs Act, 1962 and Rule 18 of the Customs and Central Excise Duties Drawback Rules, Customs issues Show-Cause Notices demanding Drawback repayment when export proceeds are not realized within the FEMA period. However, Rule 18(2) protects the exporter from clawback where the RBI / AD Bank writes off the unrealized export proceeds on merits or where ECGC settles the claim under prescribed conditions—making proper EDPMS and ECGC documentation decisive.",
  },
  {
    question:
      "What can an Indian exporter do if a foreign buyer refuses to retire CAD/DP documents while container demurrage rises at Jebel Ali or Rotterdam?",
    answer:
      "Because the original Bill of Lading remains with the collecting bank under ICC URC 522, the buyer has no legal title to clear the cargo. Immediately instruct the presenting bank to record formal non-payment, serve a 48-hour Advocate Notice of Mitigation & Alternate Sale holding the buyer liable for port detention and price shortfall, and apply to your AD Category-I Bank with that notice for urgent approval to switch the consignee or re-import the goods.",
  },
  {
    question:
      "A foreign issuing bank rejected our Letter of Credit (LC) documents citing minor typos after 7 banking days. Can we still force payment?",
    answer:
      "Yes. Under ICC UCP 600 Article 16(c) and Article 16(f), an issuing bank has a strict maximum of 5 banking days following the day of presentation to issue a single, compliant refusal notice specifying every discrepancy and stating whether it holds or returns the documents. If the bank misses the 5-banking-day window or issues a defective refusal, it is strictly precluded from claiming non-compliance and must honour the LC.",
  },
  {
    question:
      "Our foreign buyer wired USD 150,000 to a hacker's bank account after a Business Email Compromise (BEC) spoof. Who bears the loss?",
    answer:
      "Under settled commercial law principles, a debtor's payment to an impostor or unauthorized third party does NOT discharge the debt owed to the Indian exporter unless the buyer proves the exporter's own email server negligence proximately caused the fraud. Exporters must immediately trigger a SWIFT MT199 recall, preserve raw MIME email headers under BSA 2023 s.63 to prove the buyer's domain was compromised, and issue a formal payment demand.",
  },
  {
    question:
      "How do Indian exporters enforce an Indian court decree or arbitral award in the UAE, UK, Singapore, or the USA?",
    answer:
      "Under Section 44A of the Code of Civil Procedure, 1908 (CPC), decrees from Indian 'superior courts' can be executed directly in notified reciprocating territories—most notably the UAE (notified in January 2020), the UK, Singapore, and Hong Kong—without filing a fresh suit. For non-reciprocating jurisdictions like the USA, or where contracts specify arbitration, awards under the New York Convention (1958) are enforceable across 172 signatory states.",
  },
  {
    question:
      "What happens if an Indian importer paid a 50% TT advance to a foreign supplier who never shipped, leaving RBI IDPMS open past 6 months?",
    answer:
      "Under the RBI Master Direction on Import of Goods and Services, failure to close an outward remittance entry in IDPMS within 6 months invites AD-Bank flagging and potential Enforcement Directorate (ED) scrutiny. To protect the importer, you must immediately log a formal cross-border Legal Demand Notice, initiate arbitral/civil or SWIFT recall proceedings, and submit the recovery dossier to your AD Category-I Bank as proof of bona fide trade.",
  },
];

const PRIMARY_SOURCES = [
  {
    title:
      "Reserve Bank of India (RBI) — Master Direction on Export of Goods and Services (EDPMS, 9-Month Rule & Para C.20/C.24 Write-Offs)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10395",
  },
  {
    title:
      "Reserve Bank of India (RBI) — Master Direction on Import of Goods and Services (IDPMS & Outward Remittance Monitoring)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10203",
  },
  {
    title:
      "Foreign Exchange Management Act (FEMA), 1999 (Section 7 & Export Realization Mandate) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1988",
  },
  {
    title:
      "ECGC Ltd. (Export Credit Guarantee Corporation of India) — Policy Claims, Default Declaration & Recovery Guidelines",
    url: "https://www.ecgc.in/",
  },
  {
    title:
      "Customs Act, 1962 (Section 75) & CBIC Duty Drawback / RoDTEP Realization Compliance",
    url: "https://www.cbic.gov.in/",
  },
  {
    title:
      "Directorate General of Foreign Trade (DGFT) — Importer-Exporter Code (IEC) & Foreign Trade Policy Portal",
    url: "https://www.dgft.gov.in/",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType:
    "Cross-Border B2B Export-Import Debt Recovery, RBI EDPMS Regularization & ECGC Claim Compliance Legal Services",
  provider: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/lrlogo.png`,
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  audience: {
    "@type": "Audience",
    audienceType:
      "Indian Export Directors, Treasury & FEMA Compliance Heads, Merchant Exporters, Buying Houses & Import Procurement Heads",
  },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/user/new-recovery`,
  },
  mainEntityOfPage: CANONICAL_URL,
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IND-15 Exporters, Merchant Exporters & Cross-Border Trade Recovery Spokes",
  numberOfItems: IND_15_SPOKES.length,
  itemListElement: IND_15_SPOKES.map((spoke, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: spoke.title,
    url: `${SITE_URL}${spoke.url}`,
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Exporters & Cross-Border Trade Recovery",
      item: CANONICAL_URL,
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

export default function ExportersCrossBorderTradeRecoveryPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Exporters & Cross-Border Trade Recovery", href: PAGE_URL },
  ];

  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const reviewerAttribution = {
    name: "Anuj Anand Malik",
    role: "Advocate & Founder, AMA Legal Solutions",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }}
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
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-15 Industry Pillar Hub</span>
              <span className="text-red-700">&bull;</span>
              <span>FEMA EDPMS &bull; ECGC &bull; UCP 600 &bull; CPC s.44A</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor &amp; Treasury Summary
              </span>
              When an overseas buyer defaults on DA, DP/CAD, or Open-Account bills, Indian exporters face three simultaneous threats: lost foreign exchange, rejected ECGC claims, and RBI EDPMS Caution-Listing that freezes your IEC and triggers Customs Duty Drawback/RoDTEP clawbacks. Serving an Advocate-vetted international demand notice creates the statutory proof required by AD Category-I Banks and ECGC.
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">9 Months</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  FEMA Export Realization Window Before EDPMS Flagging
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">Clause C.24</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Unconditional EDPMS Write-Off Upon ECGC Claim Settlement
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">5 Banking Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  UCP 600 Art. 16(f) Strict Preclusion on LC Refusals
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">&rupee;999 / CSV</p>
                <p className="text-[10px] sm:text-xs text-slate-400">
                  Single Test Notice or Bulk Shipping-Bill Portfolio Desk
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400">
              <span>
                Reviewed by <strong className="text-slate-200">{reviewerAttribution.name}</strong> ({reviewerAttribution.role})
              </span>
              <span>&bull;</span>
              <span>Jurisdiction: Pan-India IEC Holders &amp; Global Trade Corridors</span>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <ExportersHubTableOfContents />

            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The 3 Existential Pressures */}
              <section
                id="heading-exporter-trilemma"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Why Overseas Buyer Defaults Trigger a 3-Front Crisis for Indian CFOs
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Unlike domestic B2B receivables where a default only hits working capital, an unpaid export invoice across engineering goods, basmati rice, spices, gems and jewellery, leather, pharmaceuticals, specialty chemicals, or handicrafts sets off a cascading regulatory emergency in India. While general guides such as{" "}
                  <Link href="/recovery/export-dues" className="text-[#DC2626] font-semibold hover:underline">
                    export dues recovery
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    international client legal notices
                  </Link>{" "}
                  explain basic cross-border collection, export directors and treasury heads must simultaneously neutralize three distinct statutory risks:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
                      Pressure 1: Foreign Exchange Loss
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Overseas buyers in the US, EU, UK, UAE, Africa, and LatAm exploit cross-border enforcement friction—delaying 60–90 day DA or Open-Account bills, refusing to retire CAD/DP documents to extort 40% discounts, or disputing{" "}
                      <Link
                        href="/recovery/international-client-payment"
                        className="text-[#DC2626] font-semibold hover:underline"
                      >
                        international client payments
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-1.5">
                      Pressure 2: ECGC Claim Rejection
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      ECGC rejects protracted-default claims if the exporter misses mandatory overdue declaration windows, grants unauthorized credit extensions, or fails to produce verifiable proof of formal legal demand and loss-mitigation steps against the foreign buyer.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-1.5">
                      Pressure 3: EDPMS &amp; Customs Clawback
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Once a Shipping Bill crosses the 9-month FEMA realization deadline in RBI&apos;s Export Data Processing and Monitoring System (EDPMS), your AD Category-I Bank can push your IEC toward Caution-Listing—halting export finance while Customs serves Section 75 / Rule 18 notices to recover Duty Drawback and RoDTEP.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  The exact same regulatory urgency applies in reverse to Indian importers: if an outward TT advance paid to a Chinese, Turkish, or European machinery or scrap supplier results in non-shipment, the open entry in RBI&apos;s Import Data Processing and Monitoring System (IDPMS) beyond 6 months requires documented proof of bona fide legal recovery action to prevent Enforcement Directorate (ED) scrutiny.
                </p>
              </section>

              {/* Section 2: Multi-Track Cross-Border Escalation Matrix */}
              <section
                id="heading-escalation-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Multi-Track Cross-Border Escalation Matrix by Payment Term &amp; Ticket
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Selecting the wrong legal track wastes foreign counsel fees and misses RBI/ECGC statutory cutoffs. Use this institutional decision matrix to match each defaulted corridor and ticket size (USD 5,000 to USD 2M+) to the decisive legal mechanism:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="py-3.5 px-4 font-bold">Trade Scenario / Payment Term</th>
                        <th className="py-3.5 px-4 font-bold">Ticket &amp; Aging Trigger</th>
                        <th className="py-3.5 px-4 font-bold">Governing Law / Forum</th>
                        <th className="py-3.5 px-4 font-bold">Decisive Action &amp; FEMA / ECGC Shield</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          DA / Open-Account Export Default (US, EU, UK, LatAm)
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          USD 5K–500K | 90–270+ Days Overdue
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          FEMA Export Master Direction Para C.20/C.23 &amp; UN CISG
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          Serve Advocate Demand Notice (Email + Courier) + ECGC Default Form + AD-Bank Disproportionate-Cost Opinion for EDPMS write-off.
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70 hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          CAD / DP Port Container Abandonment (UAE, EU, Africa)
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          USD 15K–250K | Vessel Berthed / Demurrage Ticking
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          ICC URC 522 Art. 26 &amp; RBI Alternate-Buyer Rules
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          48-Hour Mitigation &amp; Resale Notice + Collecting Bank Non-Payment Memo + AD-Bank B/L switch to standby buyer.
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          Irrevocable Letter of Credit (LC) Discrepancy Dishonour
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          USD 50K–2M+ | Refusal &gt; 5 Banking Days
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          ICC UCP 600 Articles 14, 16(c) &amp; 16(f)
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          Invoke strict 5-banking-day preclusion against Issuing Bank; demand immediate honouring without applicant waiver.
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70 hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          High-Ticket Reciprocating Territory Enforcement
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          USD 100K–2M+ | UAE, UK, Singapore, Hong Kong
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          CPC Section 44A / New York Convention 1958
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          Execute Indian Commercial Court decree directly in UAE/UK/SG under CPC s.44A or enforce SIAC/institutional arbitral award.
                        </td>
                      </tr>
                      <tr className="bg-white hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          Importer TT Advance Fraud &amp; BEC IBAN Hijack
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          USD 20K–500K | IDPMS &gt; 6 Months / Wire Spoof
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          RBI Import Master Direction &amp; SWIFT MT199 Recall
                        </td>
                        <td className="py-3.5 px-4 text-slate-700">
                          72-hour SWIFT freeze + MIME header forensic preservation (BSA s.63) + IDPMS bona fide legal action dossier.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: FEMA EDPMS & ECGC Workflow SVG */}
              <section
                id="heading-edpms-workflow-svg"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    FEMA EDPMS Regularization &amp; ECGC Claim Compliance Workflow
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Every export default must run on a synchronized 4-stage compliance rail so your recovery notice simultaneously pressures the overseas buyer, preserves ECGC indemnity, and satisfies your AD Category-I Bank and Customs Commissionerate:
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-x-auto bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-4">
                  <svg
                    viewBox="0 0 840 210"
                    width="840"
                    height="210"
                    className="w-full h-auto"
                    role="img"
                    aria-label="4-stage FEMA EDPMS, ECGC claim and Customs Drawback protection workflow for Indian exporters"
                  >
                    <defs>
                      <marker
                        id="arrowRed"
                        markerWidth="10"
                        markerHeight="10"
                        refX="8"
                        refY="3"
                        orient="auto"
                      >
                        <path d="M0,0 L0,6 L9,3 z" fill="#DC2626" />
                      </marker>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="25" width="180" height="150" rx="14" fill="#0F172A" />
                    <text x="26" y="52" fill="#F87171" fontSize="11" fontWeight="700">
                      STAGE 1 &bull; DAY 1–180
                    </text>
                    <text x="26" y="76" fill="#FFFFFF" fontSize="14" fontWeight="800">
                      Shipping Bill &amp;
                    </text>
                    <text x="26" y="95" fill="#FFFFFF" fontSize="14" fontWeight="800">
                      9-Month FEMA Clock
                    </text>
                    <text x="26" y="122" fill="#CBD5E1" fontSize="11">
                      Track due date in EDPMS;
                    </text>
                    <text x="26" y="138" fill="#CBD5E1" fontSize="11">
                      avoid informal extensions
                    </text>
                    <text x="26" y="154" fill="#CBD5E1" fontSize="11">
                      that void ECGC cover.
                    </text>

                    <line
                      x1="190"
                      y1="100"
                      x2="218"
                      y2="100"
                      stroke="#DC2626"
                      strokeWidth="2.5"
                      markerEnd="url(#arrowRed)"
                    />

                    {/* Stage 2 */}
                    <rect
                      x="222"
                      y="25"
                      width="185"
                      height="150"
                      rx="14"
                      fill="#FFFFFF"
                      stroke="#DC2626"
                      strokeWidth="2"
                    />
                    <text x="238" y="52" fill="#DC2626" fontSize="11" fontWeight="700">
                      STAGE 2 &bull; OVERDUE +15D
                    </text>
                    <text x="238" y="76" fill="#0F172A" fontSize="14" fontWeight="800">
                      Advocate Legal
                    </text>
                    <text x="238" y="95" fill="#0F172A" fontSize="14" fontWeight="800">
                      Demand Notice
                    </text>
                    <text x="238" y="122" fill="#475569" fontSize="11">
                      Email + Courier + BSA s.63
                    </text>
                    <text x="238" y="138" fill="#475569" fontSize="11">
                      annexing B/L &amp; Invoice for
                    </text>
                    <text x="238" y="154" fill="#475569" fontSize="11">
                      AD-Bank &amp; ECGC audit trail.
                    </text>

                    <line
                      x1="407"
                      y1="100"
                      x2="435"
                      y2="100"
                      stroke="#DC2626"
                      strokeWidth="2.5"
                      markerEnd="url(#arrowRed)"
                    />

                    {/* Stage 3 */}
                    <rect
                      x="439"
                      y="25"
                      width="185"
                      height="150"
                      rx="14"
                      fill="#FFFBEB"
                      stroke="#D97706"
                      strokeWidth="2"
                    />
                    <text x="455" y="52" fill="#B45309" fontSize="11" fontWeight="700">
                      STAGE 3 &bull; ECGC / PORT
                    </text>
                    <text x="455" y="76" fill="#0F172A" fontSize="14" fontWeight="800">
                      ECGC Claim /
                    </text>
                    <text x="455" y="95" fill="#0F172A" fontSize="14" fontWeight="800">
                      Port Mitigation
                    </text>
                    <text x="455" y="122" fill="#475569" fontSize="11">
                      File ECGC default notice or
                    </text>
                    <text x="455" y="138" fill="#475569" fontSize="11">
                      AD-Bank alternate-buyer
                    </text>
                    <text x="455" y="154" fill="#475569" fontSize="11">
                      resale for CAD/DP cargo.
                    </text>

                    <line
                      x1="624"
                      y1="100"
                      x2="652"
                      y2="100"
                      stroke="#DC2626"
                      strokeWidth="2.5"
                      markerEnd="url(#arrowRed)"
                    />

                    {/* Stage 4 */}
                    <rect
                      x="656"
                      y="25"
                      width="174"
                      height="150"
                      rx="14"
                      fill="#ECFDF5"
                      stroke="#059669"
                      strokeWidth="2"
                    />
                    <text x="670" y="52" fill="#047857" fontSize="11" fontWeight="700">
                      STAGE 4 &bull; CLOSURE
                    </text>
                    <text x="670" y="76" fill="#0F172A" fontSize="14" fontWeight="800">
                      Clause C.24 &amp;
                    </text>
                    <text x="670" y="95" fill="#0F172A" fontSize="14" fontWeight="800">
                      Rule 18(2) Shield
                    </text>
                    <text x="670" y="122" fill="#065F46" fontSize="11">
                      Unconditional EDPMS
                    </text>
                    <text x="670" y="138" fill="#065F46" fontSize="11">
                      write-off + Customs
                    </text>
                    <text x="670" y="154" fill="#065F46" fontSize="11">
                      Drawback/RoDTEP safety.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                  <div className="p-4 rounded-xl bg-slate-900 text-white">
                    <p className="text-[10px] font-bold uppercase text-red-400 mb-1">
                      Stage 1 &bull; Day 1–180
                    </p>
                    <p className="text-sm font-extrabold mb-1">9-Month FEMA EDPMS Clock</p>
                    <p className="text-xs text-slate-300">
                      Track Shipping Bill due dates and avoid informal credit extensions that void ECGC cover.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border-2 border-[#DC2626]">
                    <p className="text-[10px] font-bold uppercase text-[#DC2626] mb-1">
                      Stage 2 &bull; Overdue +15D
                    </p>
                    <p className="text-sm font-extrabold text-slate-900 mb-1">
                      Advocate Legal Demand Notice
                    </p>
                    <p className="text-xs text-slate-600">
                      Serve Email + Courier notice annexing B/L &amp; Invoice for AD-Bank &amp; ECGC audit proof.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-300">
                    <p className="text-[10px] font-bold uppercase text-amber-800 mb-1">
                      Stage 3 &bull; ECGC / Port
                    </p>
                    <p className="text-sm font-extrabold text-slate-900 mb-1">
                      ECGC Claim or Cargo Mitigation
                    </p>
                    <p className="text-xs text-slate-700">
                      Lodge ECGC default declaration or obtain AD-Bank approval for alternate-buyer resale.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300">
                    <p className="text-[10px] font-bold uppercase text-emerald-800 mb-1">
                      Stage 4 &bull; Closure
                    </p>
                    <p className="text-sm font-extrabold text-slate-900 mb-1">
                      Clause C.24 &amp; Rule 18(2) Shield
                    </p>
                    <p className="text-xs text-emerald-900">
                      Unlock unconditional EDPMS write-off and defend Customs Drawback/RoDTEP clawbacks.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    4 Cross-Border Default Scenarios &amp; Statutory Counter-Moves
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Select your active export or import bottleneck below to inspect the exact statutory trigger, commercial trap, and 3-step execution protocol:
                </p>
                <ExportersHubScenarioTabs />
              </section>

              {/* Section 5: Dual-Track B2B Conversion Desk */}
              <section
                id="heading-dual-desk"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Dual-Track Export &amp; Import Recovery Desk (&rupee;999 Test or Bulk CSV)
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Whether you are testing recovery on one overdue European buyer invoice or clearing 150 aged Shipping Bills across multiple IEC entities before your AD Bank&apos;s quarterly RBI EDPMS review, choose your onboarding track:
                </p>
                <ExportersHubCTA />
              </section>

              {/* Section 6: Statutory Framework & Cross-Border Enforcement */}
              <section
                id="heading-statutory-framework"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    FEMA, ECGC, UCP 600 &amp; Cross-Border Enforcement Architecture
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-[#DC2626] bg-slate-50 p-4 rounded-r-xl">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      FEMA 1999 &amp; RBI Export Master Direction
                    </p>
                    <p className="text-sm font-bold text-slate-900 mb-1.5">
                      Para C.20 / C.23 Write-Offs &amp; Clause C.24 ECGC Carve-Out
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Self-write-offs (5%) and AD-Bank write-offs (10% of preceding year&apos;s export realization) require documentary evidence that the exporter exhausted reasonable legal steps or that foreign litigation costs are disproportionate. Under Clause C.24, once ECGC settles the claim, AD Category-I Banks write off the Shipping Bill unconditionally regardless of the 10% cap.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] bg-slate-50 p-4 rounded-r-xl">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      Customs Act s.75(1) &amp; Drawback Rule 18(2)
                    </p>
                    <p className="text-sm font-bold text-slate-900 mb-1.5">
                      Protecting Duty Drawback &amp; RoDTEP Scripts from Clawback
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Customs authorities automatically trigger Show-Cause Notices when export proceeds remain unrealized beyond FEMA timelines. Rule 18(2) of the Drawback Rules explicitly bars recovery of Drawback where RBI/AD-Bank writes off the unrealized proceeds on merits or ECGC settles the buyer-default claim.
                    </p>
                  </div>

                  <div className="border-l-4 border-slate-900 bg-slate-50 p-4 rounded-r-xl">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      CPC Section 44A vs. New York Convention 1958
                    </p>
                    <p className="text-sm font-bold text-slate-900 mb-1.5">
                      Enforcing Decrees in UAE, UK, Singapore vs. USA
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Indian Commercial Court money decrees are directly executable in reciprocating territories notified under CPC s.44A—including the UAE (notified Jan 2020), UK, Singapore, and Hong Kong. For buyers in non-reciprocating countries like the USA, an institutional arbitration clause enforceable under the 1958 New York Convention (172 states) eliminates re-litigation on merits.
                    </p>
                  </div>

                  <div className="border-l-4 border-slate-900 bg-slate-50 p-4 rounded-r-xl">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      ICC UCP 600 &amp; URC 522 Trade Finance Rules
                    </p>
                    <p className="text-sm font-bold text-slate-900 mb-1.5">
                      Strict 5-Banking-Day LC Preclusion &amp; Collection Title
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under UCP 600 Article 16(f), an issuing bank that fails to issue a single, compliant refusal notice within 5 banking days is barred from asserting discrepancies. On CAD/DP collections under URC 522, title remains with the exporter until payment, enabling controlled cargo diversion.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Worked Financial & Compliance Math */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Worked Treasury Math: USD 180,000 Unpaid Export Bill (&sim;&rupee;1.51 Cr)
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Consider a Moradabad/Ludhiana/Tirupur engineering or textile exporter facing a 240-day overdue USD 180,000 DA shipment with 4% Duty Drawback/RoDTEP (&sim;&rupee;6.05 Lakh) and ECGC SCR coverage (90% indemnity):
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-2">
                      Path A: Passive Follow-Ups Only (No Legal Notice)
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                      <li>&bull; <strong>Principal Lost:</strong> USD 180,000 (&rupee;1,51,20,000) unrecovered</li>
                      <li>&bull; <strong>ECGC Claim Status:</strong> Rejected for missing timely default notice &amp; legal action proof</li>
                      <li>&bull; <strong>EDPMS Impact:</strong> IEC flagged for Caution-Listing at Day 270+; PCFC/packing credit frozen</li>
                      <li>&bull; <strong>Customs Clawback:</strong> &rupee;6,04,800 Drawback/RoDTEP demanded back + 15% statutory interest + penalty</li>
                      <li className="pt-2 border-t border-red-200 font-black text-[#DC2626]">
                        Total Net Exposure: &rupee;1.57 Cr+ Loss + IEC Operational Freeze
                      </li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">
                      Path B: Advocate Notice + ECGC + Clause C.24 EDPMS Rail
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                      <li>&bull; <strong>Buyer Settlement / ECGC Payout:</strong> 100% recovery on settlement OR 90% ECGC indemnity (&sim;&rupee;1.36 Cr)</li>
                      <li>&bull; <strong>EDPMS Closure:</strong> Unconditional write-off via AD Bank under Clause C.24 (no 10% cap)</li>
                      <li>&bull; <strong>Customs Shield:</strong> &rupee;6,04,800 Drawback/RoDTEP retained under Drawback Rule 18(2)</li>
                      <li>&bull; <strong>IEC Status:</strong> Clean compliance record; uninterrupted export packing credit limits</li>
                      <li className="pt-2 border-t border-emerald-200 font-black text-emerald-800">
                        Total Protected Value: &rupee;1.42 Cr–&rupee;1.57 Cr + Zero Caution-Listing
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8: Complete IND-15 Spokes Directory */}
              <section
                id="heading-ind15-directory"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    IND-15 Exporters &amp; Cross-Border Trade Spokes (10 Guides, Templates &amp; Reports)
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Explore every specialized operational playbook, statute deep-dive, FEMA/ECGC notice workspace, and corridor benchmark report under the IND-15 vertical:
                </p>

                <div className="space-y-8">
                  {SPOKE_GROUPS.map((group) => (
                    <div key={group.groupTitle}>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-3 pb-2 border-b border-slate-200">
                        {group.groupTitle}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {group.items.map((spoke) => (
                          <Link
                            key={spoke.id}
                            href={spoke.url}
                            className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-2xl p-4 sm:p-5 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
                          >
                            <div>
                              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                <span
                                  className={`inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${group.badgeClass}`}
                                >
                                  {spoke.archetypeLabel}
                                </span>
                                <span className="text-[10px] font-bold text-slate-400">
                                  {spoke.id}
                                </span>
                              </div>
                              <h4 className="text-sm font-black text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug mb-1.5">
                                {spoke.title}
                              </h4>
                              <p className="text-[11px] font-semibold text-slate-500 mb-2">
                                {spoke.statute}
                              </p>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {spoke.summary}
                              </p>
                            </div>
                            <span className="text-[11px] font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-3 inline-flex items-center gap-1">
                              Open Spoke Playbook <span aria-hidden="true">&rarr;</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Live Cross-Border Seed Guides & Bulk Hub */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-3">
                    Live Cross-Border Seed Guides &amp; Institutional Bulk Desk
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link
                      href="/recovery/export-dues"
                      className="p-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center justify-between gap-3"
                    >
                      <div>
                        <p className="text-xs font-bold text-red-400 uppercase">Live Guide</p>
                        <p className="text-sm font-extrabold">Export Dues Recovery India</p>
                      </div>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                    <Link
                      href="/legal-notice-to-international-client-unpaid-invoice-recovery"
                      className="p-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center justify-between gap-3"
                    >
                      <div>
                        <p className="text-xs font-bold text-red-400 uppercase">Live Guide</p>
                        <p className="text-sm font-extrabold">
                          Legal Notice to International Client
                        </p>
                      </div>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                    <Link
                      href="/recovery/international-client-payment"
                      className="p-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center justify-between gap-3"
                    >
                      <div>
                        <p className="text-xs font-bold text-red-400 uppercase">Live Guide</p>
                        <p className="text-sm font-extrabold">
                          International Client Payment Recovery
                        </p>
                      </div>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="p-4 rounded-xl bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors flex items-center justify-between gap-3"
                    >
                      <div>
                        <p className="text-xs font-bold text-red-100 uppercase">Enterprise Desk</p>
                        <p className="text-sm font-extrabold">
                          Bulk CSV Export Ledger Recovery
                        </p>
                      </div>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 9: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions: Exporters, EDPMS &amp; ECGC
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors"
                    >
                      <summary className="cursor-pointer list-none px-4 sm:px-5 py-4 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-black text-lg leading-none shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 10: Statutory Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Authorities, Bare Acts &amp; Official Trade Portals
                  </h2>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="flex items-start gap-2.5">
                      <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-700 hover:text-[#DC2626] font-medium underline underline-offset-2"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </main>

        <RelatedRecoveryGuides currentPath={PAGE_URL} />
      </div>
    </>
  );
}
