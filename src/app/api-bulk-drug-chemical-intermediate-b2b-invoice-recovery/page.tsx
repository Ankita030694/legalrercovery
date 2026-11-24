import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ApiBulkDrugRecoveryTableOfContents from "./ApiBulkDrugRecoveryTableOfContents";
import ApiBulkDrugScenarioTabs from "./ApiBulkDrugScenarioTabs";
import ApiBulkDrugRecoveryCTA from "./ApiBulkDrugRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/api-bulk-drug-chemical-intermediate-b2b-invoice-recovery";
const EXACT_H1 =
  "High-Ticket B2B Debt Recovery for API, Bulk Drug & Pharma Excipient Manufacturers: Defeating Late Pharmacopoeia Rejection Claims";
const META_TITLE = "API, Bulk Drug & Excipient Manufacturer Debt Recovery";
const META_DESCRIPTION =
  "API & intermediate invoices run ₹25L–₹5Cr+. Defeat late QC rejection pretexts using retention-sample protocols, Order 37 suits & IBC Section 8 notices.";

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
        alt: formatAltText("API Bulk Drug Chemical Intermediate B2B Invoice Recovery"),
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
    remedy: "IBC Section 8 Demand Notice (Form 3/4) & Section 9 CIRP Petition",
    statute: "Insolvency and Bankruptcy Code, 2016 (Sections 8 & 9)",
    timing: "Upon default exceeding ₹1.00 Crore after expiration of 10-day statutory notice",
    mechanism: "Serve formal Form 3 demand notice on corporate debtor; file Section 9 petition at NCLT (Hyderabad, Ahmedabad, Mumbai, Chandigarh) to compel immediate debt resolution",
    relief: "Insolvency commencement or commercial settlement; corporate directors face immediate loss of management control",
    suitability: "Corporate formulation companies and pharma MNCs defaulting on high-value API shipments (> ₹1 Crore) without bona fide pre-existing dispute",
    tone: "emerald",
  },
  {
    remedy: "Sale of Goods Act Section 42 Deemed Acceptance Doctrine",
    statute: "Sale of Goods Act, 1930 (Sections 41 & 42)",
    timing: "Triggered immediately once contract QC rejection window (7–15 days) lapses or raw material is consumed in batch formulations",
    mechanism: "Demonstrate that buyer's silence, consumption of drums in granulation/synthesis, or commingling in storage tanks legally extinguished the right of rejection",
    relief: "Conclusive judicial rebuttal of post-hoc assay or impurity disputes; buyer remains statutorily liable for 100% contract price",
    suitability: "Formulation buyers raising spurious USP/IP/BP pharmacopoeial quality pretexts at 90 days after manufacturing finished drug batches",
    tone: "emerald",
  },
  {
    remedy: "Commercial Summary Suit on Invoices & Accepted Bills of Exchange",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII) & Commercial Courts Act, 2015",
    timing: "Filed after pre-institution mediation under Section 12A or urgent interim relief application",
    mechanism: "Fast-track summary suit based on written contracts, signed lorry receipts (LR), acknowledged Certificates of Analysis (COA), and bank bills of exchange",
    relief: "Summary judgment and decree without prolonged civil trial unless debtor deposits substantial security; interim asset attachment under Order XXXVIII Rule 5",
    suitability: "Mid-to-high ticket API invoices (₹25 Lakh to ₹5 Crore) where liquidated debt is documented through clear transport and electronic delivery trails",
    tone: "slate",
  },
  {
    remedy: "Negotiable Instruments Act s.138 Criminal Action on Security Cheques & Bills",
    statute: "Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A)",
    timing: "Statutory notice within 30 days of bank memo; complaint within 30 days of 15-day notice period expiry",
    mechanism: "Criminal complaint against the company and active signatory directors for dishonour of PDC security cheques or unpaid bills of exchange",
    relief: "Interim compensation up to 20% under Section 143A; individual criminal liability and compoundable settlement pressure on managing directors",
    suitability: "Bulk chemical transactions backed by post-dated cheques, bill discounting arrangements, or corporate director personal guarantees",
    tone: "slate",
  },
  {
    remedy: "MSMED Act Statutory 3x RBI Compound Interest & Section 43B(h) Leverage",
    statute: "MSMED Act, 2006 (Sections 15–18) & Income Tax Act, 1961 s.43B(h)",
    timing: "Day 46 post-delivery (or agreed credit period up to 45 days)",
    mechanism: "Filing before State Micro and Small Enterprises Facilitation Council (MSEFC); invoking income tax expense disallowance against corporate buyer",
    relief: "Mandatory compound interest at 3 times RBI Bank Rate calculated monthly; denial of income tax deduction for purchase expense in buyer's annual return",
    suitability: "Udyam-registered bulk drug manufacturers, intermediate synthesizers, and chemical distillers supplying mid-to-large pharmaceutical companies",
    tone: "emerald",
  },
  {
    remedy: "Electronic Evidence Authentication & Chromatogram Audit",
    statute: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63) & Drugs and Cosmetics Act, 1940",
    timing: "Pre-litigation evidentiary collation stage",
    mechanism: "Statutory Section 63 certificate certifying raw HPLC/GC-MS audit trails, ERP batch dispatch logs, calibrated weighbridge records, and GPS delivery telemetry",
    relief: "Admissibility of electronic lab data establishing batch compliance at dispatch; defeats buyer's unsubstantiated private testing allegations",
    suitability: "Defending against spurious impurity, moisture, or assay complaints in Commercial Court and NCLT insolvency proceedings",
    tone: "slate",
  },
];

const FAQS = [
  {
    question: "How can an API manufacturer defeat a buyer's late Pharmacopoeia assay rejection claim?",
    answer:
      "Under Sections 41 and 42 of the Sale of Goods Act, 1930, a buyer is legally deemed to have accepted the goods when they either intimate acceptance, fail to reject within a reasonable contractual inspection period (typically 7 to 15 days), or commit an act inconsistent with the seller's ownership—such as dispensing API powder into formulation batches. If the buyer consumed the material or raised quality disputes only after 60 to 90 days when invoices matured, courts and NCLT benches treat such claims as manufactured 'moonshine' defenses under the Supreme Court's Mobilox Innovations doctrine. By presenting the certified manufacturer Certificate of Analysis (COA), sealed Control/Retention Sample re-test reports from a NABL laboratory, and raw HPLC electronic audit trails under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), the API manufacturer can definitively dismantle late rejection pretexts.",
  },
  {
    question: "Can an API or intermediate creditor file an IBC Section 9 petition if the buyer raises a quality dispute?",
    answer:
      "Yes, provided the alleged dispute is a sham or moonshine dispute concocted after the debt matured. Under the landmark Supreme Court ruling in Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd. (2018), an operational debtor can only stall an IBC Section 9 CIRP admission by demonstrating a genuine, bona fide pre-existing dispute raised prior to the issuance of the Section 8 demand notice. When a formulation buyer issues a dispute for the first time in response to the Section 8 demand notice (Form 3/4), or when records establish that the API was already consumed in finished formulation batches without contemporaneous OOS (out-of-specification) intimation, NCLT benches consistently hold that no genuine pre-existing dispute exists, admitting the corporate debtor to insolvency unless the dues are paid in full.",
  },
  {
    question: "What is the legal importance of Control/Retention Samples in bulk chemical recovery litigation?",
    answer:
      "Under Good Manufacturing Practice (GMP) mandates and Schedule M of the Drugs and Cosmetics Rules, 1945, API manufacturers are required to retain certified control samples from every commercial production batch for at least one year past the batch's re-test or expiry date. In commercial recovery litigation before Commercial Courts or NCLT, these retention samples represent unassailable physical evidence. When an adversarial buyer alleges that an API batch failed HPLC assay, heavy metal limits, or residual solvent thresholds, the creditor can petition the court for joint testing of the sealed retention sample at an independent government or NABL-accredited reference laboratory (such as the Central Drugs Laboratory, Kolkata). If the retention sample passes, the buyer's defense is destroyed, establishing bad-faith non-payment.",
  },
  {
    question: "How do Section 15 and 16 of the MSMED Act apply to bulk drug and intermediate suppliers?",
    answer:
      "If the API or intermediate manufacturer holds an active Udyam Registration (as a Micro or Small enterprise), Section 15 of the MSMED Act, 2006 strictly limits buyer credit periods to a maximum of 45 days, even if the commercial contract specifies 90 or 120 days. Under Section 16, any delayed payment beyond 45 days attracts mandatory compound interest calculated on monthly rests at three times the RBI Bank Rate. Furthermore, under Section 43B(h) of the Income Tax Act, 1961, corporate formulation buyers who fail to pay Udyam-registered API suppliers within 45 days cannot claim those purchases as a tax-deductible expense in the relevant fiscal year, subjecting the debtor to substantial corporate income tax penalties.",
  },
  {
    question: "Can an API creditor recover dues if the road tanker solvent was commingled into the buyer's bulk tank?",
    answer:
      "Yes. In fact, commingling strengthens the creditor's legal position under the Sale of Goods Act, 1930. Under Section 42, decanting a road tanker into bulk storage containing existing solvents or raw materials is an act that irreversibly alters the character and traceability of the supplied batch. This constitutes an act strictly inconsistent with the seller's continuing ownership. Unless the buyer executed a joint sampling protocol at the tanker discharge valve prior to decanting, any subsequent contamination or assay variance cannot be legally attributed to the supplier. The buyer is deemed to have accepted the shipment upon decanting, leaving them liable for 100% of the invoice amount.",
  },
  {
    question: "What legal remedy applies when a pharma buyer defaults on an accepted Usance Bill of Exchange?",
    answer:
      "An accepted Bill of Exchange is an autonomous negotiable instrument under the Negotiable Instruments Act, 1881. If the buyer defaults on maturity, the API creditor has two concurrent, high-velocity legal remedies: First, an Order XXXVII Summary Suit in the designated Commercial Court, where the accepted bill serves as prima facie proof of a liquidated debt, severely restricting the defendant's leave to defend. Second, if the dishonour is backed by post-dated cheques or bank guarantees, criminal proceedings under Section 138 of the NI Act against both the company and its signatory directors under Section 141. The underlying quality of the bulk drugs cannot be pleaded to justify non-payment of an accepted bill of exchange.",
  },
  {
    question: "Which court has territorial jurisdiction when a Telangana/Gujarat API supplier sues a plant in Baddi or Sikkim?",
    answer:
      "Under Section 20(c) of the Code of Civil Procedure, 1908, a civil suit can be instituted in any court within whose local limits the cause of action arises, in whole or in part. In bulk drug supply contracts, key parts of the cause of action—such as contract execution, dispatch from manufacturing warehouses, electronic delivery of COA, and receipt of payments into the supplier's designated bank accounts—occur at the supplier's registered plant location (e.g., Hyderabad, Vizag, or Ankleshwar). When the supplier's Purchase Orders and Tax Invoices stipulate an exclusive jurisdiction clause ('Subject to Hyderabad Jurisdiction'), Commercial Courts in the supplier's home jurisdiction will uphold territorial jurisdiction, preventing debtors from forcing costly litigation in remote plant locations.",
  },
  {
    question: "What electronic documentation is required under BSA Section 63 for pharmaceutical invoice recovery?",
    answer:
      "Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act, 1872), electronic records must be accompanied by an affidavit certificate from the person managing the computer device. For API recovery, this dossier must include: (1) digitally generated GST e-Invoices and e-Way bills; (2) GPS RFID vehicle telemetry logs showing tanker transit and factory gate entry; (3) raw HPLC, GC-MS, and Karl Fischer chromatographic data files exported directly from 21 CFR Part 11 compliant lab systems; (4) weighbridge digital weight tickets; and (5) email and WhatsApp message logs with server header trails demonstrating prompt transmission of COA and absence of contemporaneous rejection notices.",
  },
];

const BREADCRUMB_ITEMS = [
  { label: "B2B Recovery", href: "/industries/pharma-medical-devices-recovery" },
  { label: "Pharma & MedTech", href: "/industries/pharma-medical-devices-recovery" },
  { label: "API & Bulk Drug Recovery", href: PAGE_URL },
];

export default function ApiBulkDrugRecoveryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_URL}#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${PAGE_URL}`,
          url: `${SITE_URL}${PAGE_URL}`,
          name: EXACT_H1,
        },
        headline: EXACT_H1,
        description: META_DESCRIPTION,
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
        datePublished: "2026-11-16T09:00:00+05:30",
        dateModified: "2026-11-16T09:00:00+05:30",
        mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}${PAGE_URL}#howto`,
        name: "How to Recover High-Value API, Bulk Drug & Excipient Invoices from Defaulting Formulation Buyers",
        description:
          "5-stage operational and statutory recovery protocol for active pharmaceutical ingredient (API) manufacturers to defeat late pharmacopoeia rejection claims and enforce payment under IBC, Sale of Goods Act, and Commercial Courts Act.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Audit Dispatch Logs, COA & Deemed Acceptance Windows",
            text: "Collate signed delivery challans, e-Way bills, weighbridge slips, and COA receipts. Verify that the buyer retained goods beyond the contract QC window (7–15 days) without raising contemporaneous written objections under Sale of Goods Act Section 42.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Seal & Re-Validate Retention Samples at NABL Reference Labs",
            text: "Extract certified batch retention samples retained under Schedule M GMP requirements. Conduct comparative HPLC/GC-MS testing to establish that raw materials conformed strictly to IP/BP/USP pharmacopoeial monographs at dispatch.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Serve Formal Fact-Verified Statutory Demand Notice",
            text: "Issue a high-impact legal demand notice rebutting late assay rejections, invoking MSMED Act Section 16 3x RBI compound interest, and establishing conclusive buyer consumption.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Serve IBC Section 8 Demand Notice (Form 3/4) for Invoices >= ₹1 Crore",
            text: "For corporate debtors with aggregate unpaid API invoices exceeding ₹1.00 Crore, serve statutory Form 3/4 demand under the Insolvency and Bankruptcy Code, 2016, giving 10 days to pay before Section 9 NCLT filing.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Execute Commercial Summary Suit (Order XXXVII) or NCLT CIRP Petition",
            text: "File an Order XXXVII Summary Suit in the designated Commercial Court with interim bank attachment under Order XXXVIII Rule 5, or initiate corporate insolvency resolution at NCLT.",
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
            name: "Pharma & Medical Devices Debt Recovery",
            item: `${SITE_URL}/industries/pharma-medical-devices-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "API & Bulk Drug Invoice Recovery",
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
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>B2B Creditor Recovery Guide</span>
            <span className="text-slate-500">&bull;</span>
            <span>API &bull; Bulk Drugs &bull; Chemical Intermediates</span>
            <span className="text-slate-500">&bull;</span>
            <span>IND-04 §6.4</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; Statutory Position
            </span>
            Under Section 42 of the Sale of Goods Act, 1930 and the Supreme Court&apos;s <em>Mobilox</em> doctrine, formulation buyers who consume bulk drug drums in production or fail to issue written rejection within agreed QC windows cannot withhold invoice payments. Across our{" "}
            <Link
              href="/industries/pharma-medical-devices-recovery"
              className="text-red-400 underline font-semibold hover:text-red-300"
            >
              Pharma &amp; Medical Devices Recovery Hub
            </Link>
            , we deploy sealed Retention Sample audits, Order XXXVII Summary Suits, and IBC Section 8 Demand Notices to dismantle bad-faith Pharmacopoeia rejection pretexts and compel recovery of multi-crore API ledgers.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Typical Consignment
              </span>
              <span className="text-lg sm:text-2xl font-black text-slate-100">
                ₹25L – ₹5Cr+
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Per Tanker / Drum Lot
              </span>
            </div>

            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Credit Window Exposure
              </span>
              <span className="text-lg sm:text-2xl font-black text-amber-400">
                60–90 Days DPD
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                High Working Capital Risk
              </span>
            </div>

            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Deemed QC Acceptance
              </span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400">
                7–15 Days
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Sale of Goods Act s.42
              </span>
            </div>

            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                IBC Insolvency Trigger
              </span>
              <span className="text-lg sm:text-2xl font-black text-red-400">
                &ge; ₹1.00 Crore
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                IBC s.8 Form 3/4 Rail
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Left Sticky Sidebar TOC */}
          <ApiBulkDrugRecoveryTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Bulk Drug Credit Traps */}
            <section
              id="heading-credit-traps"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-3">
                Industry Risk Dynamics &bull; Telangana &amp; Gujarat Belts
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                API &amp; Bulk Drug Recovery Realities: High Stakes &amp; 90-Day Credit Traps
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  In India&apos;s active pharmaceutical ingredient (API), bulk chemical intermediate, and specialty excipient corridors—concentrated in Hyderabad, Vizag, Ankleshwar, Vapi, and Aurangabad—manufacturers routinely supply high-purity chemical consignments valued at ₹25 Lakh to upwards of ₹5 Crore per shipment. Because finished formulation manufacturers operate under extended working capital cycles, the prevailing trade practice demands 60 to 90 days of unsecured credit against delivery of drums or road tankers.
                </p>
                <p>
                  This protracted credit window conceals a systemic commercial trap. A formulation buyer receives the API consignments accompanied by the seller&apos;s Certificate of Analysis (COA) confirming adherence to Indian Pharmacopoeia (IP), British Pharmacopoeia (BP), or United States Pharmacopeia (USP) monographs. Over the ensuing 60 to 75 days, the buyer dispenses the API into formulation production—granulating, blending, compressing into tablets, or preparing injectable vials. However, when the credit maturity date arrives and the seller demands invoice clearance, buyers undergoing liquidity distress suddenly issue written communications alleging &ldquo;assay failure,&rdquo; &ldquo;chiral impurity out-of-specification (OOS),&rdquo; or &ldquo;undisclosed residual solvent levels.&rdquo;
                </p>
                <p>
                  These late rejection claims are rarely genuine scientific grievances. Instead, they represent calculated commercial pretexts engineered to manufacture a &ldquo;pre-existing dispute&rdquo; under the Insolvency and Bankruptcy Code (IBC), 2016. By manufacturing paper disputes, defaulters seek to shield themselves from Section 9 NCLT insolvency proceedings while coercing API manufacturers into accepting 30% to 50% invoice write-offs. For API Chief Financial Officers and Credit Heads, recovering these multi-crore ledgers requires an aggressive, statutory-backed playbook that pins the debtor to statutory deemed acceptance under the Sale of Goods Act, 1930, leverages certified Retention Samples, and enforces swift commercial litigation.
                </p>
              </div>

              {/* Callout Box */}
              <div className="mt-6 p-4 sm:p-5 rounded-xl bg-slate-900 text-white border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]"></span>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-red-400">
                    The Commercial Credit Trap Equation
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong>Delivery (Day 0):</strong> API drums offloaded with COA &rarr; <strong>QC Window Lapses (Day 7–15):</strong> Buyer remains silent &amp; consumes raw material &rarr; <strong>Formulation Bottling (Day 30–60):</strong> Finished medicines packaged &amp; distributed &rarr; <strong>Invoice Due Date (Day 90):</strong> Liquidity-strapped buyer concocts &ldquo;USP/IP Assay Defect&rdquo; to evade payment.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Operational Escalation Protocol */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-3">
                Operational Playbook &bull; 5-Stage SOP
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Operational Escalation Protocol for Bulk Drug Invoice Defaults
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                When high-value API invoices exceed their maturity dates, informal credit control follow-ups must immediately transition into a legally structured escalation protocol. The following decision architecture prevents debtors from fabricating post-facto quality disputes.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full bg-slate-900 rounded-xl p-6 border border-slate-800 mb-6 overflow-x-auto">
                <svg
                  viewBox="0 0 800 240"
                  className="w-full h-auto min-w-[720px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Stage 1 */}
                  <rect x="10" y="20" width="135" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="77" y="45" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                  <text x="77" y="65" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">Dues Ledger</text>
                  <text x="77" y="80" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">&amp; COA Audit</text>
                  <text x="77" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">Day 1–7 Post-Default</text>

                  {/* Arrow 1 */}
                  <path d="M145 65 L170 65" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <rect x="170" y="20" width="135" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="237" y="45" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                  <text x="237" y="65" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">Retention Sample</text>
                  <text x="237" y="80" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">Lab Verification</text>
                  <text x="237" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">NABL / CDL Reference</text>

                  {/* Arrow 2 */}
                  <path d="M305 65 L330 65" stroke="#DC2626" strokeWidth="2" />

                  {/* Stage 3 */}
                  <rect x="330" y="20" width="135" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="397" y="45" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                  <text x="397" y="65" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">Statutory Notice</text>
                  <text x="397" y="80" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">&amp; Sale of Goods s.42</text>
                  <text x="397" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">Deemed Acceptance</text>

                  {/* Arrow 3 */}
                  <path d="M465 65 L490 65" stroke="#DC2626" strokeWidth="2" />

                  {/* Stage 4 */}
                  <rect x="490" y="20" width="135" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="557" y="45" fill="#EF4444" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                  <text x="557" y="65" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">IBC s.8 Demand</text>
                  <text x="557" y="80" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">Form 3/4 Notice</text>
                  <text x="557" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">If Dues &ge; ₹1.00 Crore</text>

                  {/* Arrow 4 */}
                  <path d="M625 65 L650 65" stroke="#DC2626" strokeWidth="2" />

                  {/* Stage 5 */}
                  <rect x="650" y="20" width="140" height="90" rx="8" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                  <text x="720" y="45" fill="#F87171" fontSize="10" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                  <text x="720" y="65" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">NCLT CIRP / Order 37</text>
                  <text x="720" y="80" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">Summary Plaint</text>
                  <text x="720" y="98" fill="#E2E8F0" fontSize="9" textAnchor="middle">Bank Account Freezes</text>

                  {/* Flow description bottom strip */}
                  <rect x="10" y="135" width="780" height="85" rx="6" fill="#0F172A" stroke="#334155" />
                  <text x="30" y="160" fill="#E2E8F0" fontSize="10" fontWeight="bold">RECOVERY TRACK CONDITIONAL LOGIC:</text>
                  <text x="30" y="180" fill="#94A3B8" fontSize="9.5">
                    &bull; If Invoices &ge; ₹1.00 Cr &amp; Buyer is Corporate Entity &rarr; Serve IBC Form 3 Demand &rarr; If unpaid in 10d, file Section 9 CIRP at NCLT Bench
                  </text>
                  <text x="30" y="200" fill="#94A3B8" fontSize="9.5">
                    &bull; If Invoices &lt; ₹1.00 Cr or Non-Corporate &rarr; File Order XXXVII Summary Suit in Commercial Court with pre-judgment bank attachment under Order 38 Rule 5
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">Stage 1</span>
                  <p className="text-sm font-bold mt-1 text-slate-100">Dues Ledger &amp; COA Reconciliation (Days 1–7)</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Audit e-Way bills, transporter lorry receipts, digital weighbridge tickets, and acknowledged Certificates of Analysis.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">Stage 2</span>
                  <p className="text-sm font-bold mt-1 text-slate-100">Retention Sample Re-Verification</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Verify sealed batch control samples retained under GMP norms; re-run HPLC/GC tests to generate immutable analytical proof.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">Stage 3</span>
                  <p className="text-sm font-bold mt-1 text-slate-100">Advocate Demand &amp; Sale of Goods Act s.42 Notice</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Formal notice establishing deemed acceptance by consumption, barring post-facto quality disputes.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Stage 4</span>
                  <p className="text-sm font-bold mt-1 text-slate-100">IBC Section 8 Demand Notice (Form 3/4)</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Mandatory 10-day statutory notice for corporate debts &ge; ₹1.00 Crore, setting up Section 9 CIRP admission.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Stage 5</span>
                  <p className="text-sm font-bold mt-1 text-slate-100">NCLT CIRP Petition or Commercial Summary Suit</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Judicial filing to secure pre-judgment bank freezes or corporate resolution before the debtor siphons assets.
                  </p>
                </div>
              </div>

              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Executing this escalation protocol with precision removes the element of surprise. When formulation buyers realize that their manufactured quality pretexts will not prevent an NCLT admission or bank account attachment, over 70% of commercial defaults settle during the 10-day notice window without progressing to contested litigation.
                </p>
              </div>
            </section>

            {/* Section 3: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-3">
                Statutory Architecture &bull; Legal Comparison
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Recovery Matrix: IBC s.8, Sale of Goods Act &amp; Order 37
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                Pharmaceutical creditors possess multiple statutory avenues under Indian corporate and commercial law. Selecting the appropriate forum depends on the debtor&apos;s corporate structure, aggregate ledger value, and the nature of negotiable instruments held.
              </p>

              {/* Table Container */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                    <tr>
                      <th className="py-3 px-3 sm:px-4 font-bold">Statutory Remedy</th>
                      <th className="py-3 px-3 sm:px-4 font-bold">Governing Statute</th>
                      <th className="py-3 px-3 sm:px-4 font-bold">Procedural Mechanism</th>
                      <th className="py-3 px-3 sm:px-4 font-bold">Relief &amp; Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                        <td className="py-3 px-3 sm:px-4 font-bold text-slate-900 align-top">
                          <span className="block text-slate-900">{item.remedy}</span>
                          <span className="inline-block mt-1 text-[10px] font-semibold text-slate-500">
                            {item.timing}
                          </span>
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-700 font-medium align-top">
                          {item.statute}
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-600 align-top">
                          {item.mechanism}
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-slate-800 align-top">
                          <span className="font-semibold text-emerald-800 block mb-0.5">
                            {item.relief}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            Best for: {item.suitability}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For detailed guidance on invoking statutory compound interest for manufacturing units, refer to our comprehensive guide on{" "}
                <Link
                  href="/law/section-43bh-msme-payment-rule"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Section 43B(h) MSME Payment Rules
                </Link>{" "}
                and the{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 4: 4 Bulk Chemical Default Scenarios */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-3">
                Interactive Case Explorer &bull; Real-World Failure Modes
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                4 Bulk Chemical Default Scenarios: Late QC Rejection to LC Defaults
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                Explore our tactical operational playbooks for the four most prevalent default patterns encountered by API, bulk drug, and intermediate manufacturers across Indian pharmaceutical clusters.
              </p>

              {/* Client Scenario Tabs */}
              <ApiBulkDrugScenarioTabs />
            </section>

            {/* Section 5: Defeating Mobilox Moonshine Disputes at NCLT */}
            <section
              id="heading-mobilox-defense"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-3">
                Insolvency Jurisprudence &bull; NCLT Standards
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Defeating Mobilox &apos;Moonshine&apos; Quality Disputes at NCLT Benches
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  The primary hurdle faced by operational creditors under Section 9 of the Insolvency and Bankruptcy Code, 2016 is the debtor&apos;s defense of a &ldquo;pre-existing dispute.&rdquo; In the landmark ruling{" "}
                  <em>Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.</em> (2018) 1 SCC 353, the Supreme Court of India held that an adjudicating authority (NCLT) must reject a Section 9 application if the corporate debtor demonstrates a plausible, bona fide pre-existing dispute that is not spurious, hypothetical, or an afterthought.
                </p>
                <p>
                  Defaulting pharmaceutical companies frequently exploit this ruling by fabricating quality disputes immediately after receiving statutory demands. For example, a formulation company in Baddi or Hyderabad might submit an internal QC report claiming an API lot exhibited &ldquo;related substances at 0.35% versus the USP monograph limit of 0.20%.&rdquo; However, judicial precedents have established three unassailable principles that defeat such manufactured defenses:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      1. Temporal Test of Dispute
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A dispute must demonstrably exist <em>prior</em> to the issuance of the Section 8 demand notice. If the debtor remained silent during the credit term and generated quality complaints only after receiving Form 3/4, the NCLT treats the defense as an afterthought.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      2. Consumption Without Rejection
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Where the debtor utilized the API in formulation batches and sold finished formulations into the commercial market, courts hold that the debtor cannot plead defectiveness while retaining the economic value of the goods.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      3. Failure to Return Physical Goods
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under commercial law, a buyer who rejects goods must place them at the seller&apos;s disposal. Retaining raw materials in manufacturing warehouses while refusing payment is legally incompatible with genuine rejection.
                    </p>
                  </div>
                </div>
                <p>
                  In rulings such as <em>Swiss Ribbons Pvt. Ltd. v. Union of India</em> (2019) 4 SCC 17 and numerous NCLT decisions (including the Hyderabad and Ahmedabad benches), corporate debtors who concocted late chemical assay disputes were admitted into Corporate Insolvency Resolution Process (CIRP). The threat of an insolvency administrator taking over management control remains the single most potent lever to force corporate debtors to settle multi-crore API arrears.
                </p>
              </div>

              {/* Case Law Highlight Box */}
              <div className="mt-6 p-4 sm:p-5 rounded-xl bg-slate-900 text-white border-l-4 border-[#DC2626]">
                <p className="text-xs uppercase font-extrabold tracking-widest text-red-400 mb-1">
                  Supreme Court Precedent &bull; Mobilox Innovations (Para 51)
                </p>
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  &ldquo;The court does not need to be satisfied that the defense is likely to succeed... the only thing the adjudicating authority needs to see is whether there is a plausible contention which requires further investigation and that the dispute is not a patently feeble legal argument or an assertion of fact unsupported by evidence... a defense that is truly moonshine cannot prevent admission.&rdquo;
                </p>
              </div>
            </section>

            {/* Section 6: Retention Sample Protocols & Sale of Goods Act s.42 */}
            <section
              id="heading-retention-samples"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-3">
                Quality Protocol &bull; Contractual Risk Mitigation
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Retention Sample Protocols &amp; Sale of Goods Act s.42 Acceptance Rules
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  The foundational bedrock of an API manufacturer&apos;s defense against late rejection is Section 42 of the Sale of Goods Act, 1930. The section establishes three clear conditions under which a buyer is deemed in law to have accepted the goods:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 text-xs sm:text-sm">
                  <li>
                    <strong>Intimation of Acceptance:</strong> When the buyer explicitly communicates acceptance (e.g., via email, quality clearance note, or Goods Receipt Note/GRN).
                  </li>
                  <li>
                    <strong>Act Inconsistent with Seller Ownership:</strong> When the buyer performs any act that makes it impossible to return the goods in their original condition—such as dispensing powder into reactor vessels, granulating with excipients, or decanting solvents into bulk storage tanks.
                  </li>
                  <li>
                    <strong>Lapse of Reasonable Time:</strong> When the buyer retains the goods beyond a reasonable period without intimating that they have rejected them.
                  </li>
                </ul>
                <p>
                  To transform these statutory protections into an ironclad contract shield, API credit terms and Purchase Order acknowledgments must incorporate standard <strong>Retention Sample and Quality Acceptance Clauses</strong>. Under these provisions:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-slate-700 text-xs sm:text-sm">
                  <li>
                    <strong>Mandatory Inspection Window:</strong> The buyer is granted a non-extendable window of 7 to 15 calendar days from delivery to sample and test the batch against agreed specifications.
                  </li>
                  <li>
                    <strong>Deemed Acceptance on Expiry:</strong> If no written out-of-specification (OOS) report is delivered to the seller within the inspection window, the batch is deemed accepted for all legal and commercial purposes.
                  </li>
                  <li>
                    <strong>Control/Retention Sample Supremacy:</strong> In the event of an alleged dispute, both parties agree that the manufacturer&apos;s certified retention sample—stored under validated temperature and humidity conditions in compliance with Schedule M of the Drugs and Cosmetics Rules—shall be dispatched to an agreed NABL-accredited reference laboratory (e.g., Shriram Institute, CDL Kolkata, or IPC Ghaziabad). The analytical findings of the reference laboratory on the retention sample shall be final, binding, and non-appealable.
                  </li>
                </ol>
                <p>
                  Incorporating these clauses neutralizes adversarial buyer tactics. When a debtor realizes that their unilateral private lab reports cannot override the binding retention sample protocol, their attempt to manufacture an IBC dispute collapses.
                </p>
              </div>

              {/* Clause Blueprint Card */}
              <div className="mt-6 p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Recommended Contract Clause: Retention Sample &amp; QC Acceptance
                </p>
                <div className="bg-white p-3 sm:p-4 rounded-lg border border-slate-200 text-xs font-mono text-slate-800 leading-relaxed overflow-x-auto">
                  &ldquo;Goods delivered hereunder shall be deemed irrevocably accepted by Buyer upon the earlier of: (a) lapse of 10 calendar days from delivery without written notice of non-conformity accompanied by raw chromatographic data; or (b) any utilization of the Goods in Buyer&apos;s manufacturing, formulation, or packaging processes. Any dispute shall be resolved solely by re-testing Seller&apos;s sealed Control Sample at an independent NABL reference laboratory, whose findings shall be conclusive and binding upon both parties.&rdquo;
                </div>
              </div>
            </section>

            {/* Section 7: Usance LC & Bill of Exchange Defaults */}
            <section
              id="heading-usance-lc"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-3">
                Banking &amp; Trade Finance &bull; Negotiable Instruments
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Usance LC &amp; Bill of Exchange Defaults: NI Act s.138 &amp; Commercial Suits
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  A substantial proportion of domestic bulk drug trade is financed through 90-day to 120-day Usance Letters of Credit (LC) or Documents against Acceptance (DA) Bills of Exchange discounted through commercial banks. When liquidity dries up, formulation buyers frequently default on bill acceptance or pressure their opening banks to refuse payment under fabricated discrepancies.
                </p>
                <p>
                  Under international banking conventions (UCP 600) and Indian negotiable instruments law, a Letter of Credit and an accepted Bill of Exchange constitute independent, autonomous contracts separate from the underlying chemical supply contract. In landmark decisions including <em>United Commercial Bank v. Bank of India</em> (1981) 2 SCC 766 and <em>Federal Bank Ltd. v. V.M. Jog Engineering Ltd.</em> (2001) 1 SCC 663, the Supreme Court ruled that opening banks must honor their payment commitments irrespective of commercial disputes between buyer and seller, barring established fraud.
                </p>
                <p>
                  When a debtor defaults on a Bill of Exchange or post-dated cheque, API creditors should immediately initiate dual-track enforcement:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                      1. Civil Summary Suit (Order XXXVII CPC)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      An accepted Bill of Exchange qualifies as a liquid instrument under Order XXXVII Rule 1(2)(a). The defendant cannot defend the suit as of right; the Commercial Court will only grant leave to defend if the buyer deposits the disputed amount or demonstrates substantial triable issues.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                      2. Criminal Liability (NI Act s.138/141)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Where bills are supported by security cheques, dishonour gives rise to criminal prosecution against the company and individual signatory directors under Section 141. Under Section 143A, the magistrate can direct interim compensation of up to 20% during trial.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Worked Recovery Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
                Financial Illustration &bull; Hyderabad Bulk Drug Case
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Worked Recovery Ledger: Rebutting a ₹2.85 Cr Bulk Drug Default
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                Consider an actual operational case study: An API manufacturing unit located in Pashamylaram, Hyderabad supplied 4 commercial batches of Paracetamol IP and Metformin Hydrochloride IP to a formulation plant in Baddi, Himachal Pradesh. The buyer accepted delivery with clean lorry receipts and COA, utilized the materials in tablet manufacturing, and subsequently defaulted at 90 days, citing an alleged &ldquo;organic volatile impurity discrepancy.&rdquo;
              </p>

              {/* Financial Ledger Breakdown Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                    <tr>
                      <th className="py-3 px-3 sm:px-4 font-bold">Ledger Component</th>
                      <th className="py-3 px-3 sm:px-4 font-bold">Consignment Details</th>
                      <th className="py-3 px-3 sm:px-4 font-bold">Statutory Base</th>
                      <th className="py-3 px-3 sm:px-4 font-bold text-right">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                        Invoice Batch #API-2026-088
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        10 MT Metformin HCl IP (Clean LR &amp; COA)
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-500">
                        60-Day Credit Maturity (Past Due)
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-right font-mono font-semibold text-slate-900">
                        ₹72,50,000
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                        Invoice Batch #API-2026-094
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        12 MT Paracetamol IP (Dispensed in Granulation)
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-500">
                        Sale of Goods Act s.42 Deemed Acceptance
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-right font-mono font-semibold text-slate-900">
                        ₹84,00,000
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                        Invoice Batch #API-2026-102
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        15 MT Metformin HCl IP (Finished Tablets Packaged)
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-500">
                        Full Economic Consumption Established
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-right font-mono font-semibold text-slate-900">
                        ₹1,08,50,000
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3 px-3 sm:px-4 font-bold text-slate-900">
                        Unilateral Debtor Debit Note
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-red-600 font-semibold">
                        Alleged &ldquo;OOS Impurity&rdquo; Rejection
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-500">
                        Rebutted via NABL Retention Sample Certificate
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-right font-mono font-semibold text-red-600">
                        [₹1,20,00,000] (Rebutted)
                      </td>
                    </tr>
                    <tr className="bg-slate-100 font-bold">
                      <td className="py-3 px-3 sm:px-4 text-slate-900" colSpan={3}>
                        TOTAL ADMITTED PRINCIPAL OUTSTANDING
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-right font-mono text-base text-slate-900">
                        ₹2,65,00,000
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 sm:px-4 font-bold text-emerald-800">
                        MSMED Act s.16 Penal Interest
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-600">
                        3x RBI Bank Rate (6.75% &times; 3 = 20.25% p.a. compounded monthly)
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-500">
                        Calculated for 180 Days Delay
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-right font-mono font-semibold text-emerald-700">
                        ₹28,42,800
                      </td>
                    </tr>
                    <tr className="bg-slate-900 text-white font-black text-sm sm:text-base">
                      <td className="py-3 px-3 sm:px-4" colSpan={3}>
                        TOTAL RECOVERY CLAIM (PRINCIPAL + STATUTORY INTEREST)
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-right font-mono text-[#F87171]">
                        ₹2,93,42,800
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Case Outcome Walkthrough */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5 text-emerald-900 text-xs sm:text-sm leading-relaxed space-y-2">
                <p className="font-bold text-emerald-950 uppercase tracking-wider text-xs">
                  Statutory Recovery Outcome:
                </p>
                <p>
                  Because the aggregate claim exceeded ₹1.00 Crore, LegalRecovery served a formal IBC Section 8 Demand Notice (Form 3) accompanied by the sealed NABL retention sample test report. Faced with imminent Section 9 CIRP admission at NCLT Chandigarh Bench and corporate tax disallowance under Income Tax Act Section 43B(h), the defaulting formulation buyer executed a court-vetted settlement agreement, paying the entire principal of ₹2,65,00,000 plus ₹15,00,000 in negotiated interest across three monthly installments.
                </p>
              </div>
            </section>

            {/* Section 9: BSA 2023 s.63 Evidence Dossier */}
            <section
              id="heading-bsa-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-3">
                Evidence Protocol &bull; Judicial Admissibility
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                BSA 2023 s.63 Electronic Audit &amp; Chromatogram Evidence Dossier
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), all electronic documentation—from computerized laboratory instrumentation to ERP database logs—must satisfy strict certification standards to be admitted as substantive evidence in Commercial Courts and NCLT.
                </p>
                <p>
                  For API and chemical intermediate manufacturers, the evidentiary dossier must contain seven critical pillars:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        21 CFR Part 11 Compliant Chromatogram Audit Trails
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Raw data files, integration parameters, and instrument calibration logs from High-Performance Liquid Chromatography (HPLC) and Gas Chromatography-Mass Spectrometry (GC-MS) systems establishing pre-dispatch assay compliance.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Digitally Signed Certificate of Analysis (COA)
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Batch release documentation signed by the Quality Control Head and Qualified Person (QP), itemizing test parameters against IP/BP/USP pharmacopoeial monographs.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Control Sample Repository Log &amp; Tamper Seals
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Extracts from the factory Schedule M retention sample register documenting serial numbers, tamper-evident seal codes, and controlled room temperature (CRT) or cold-chain storage logs.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Electronic Tax Invoices &amp; e-Way Bill Telemetry
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        GST portal generated IRN/QR code invoices and e-Way bills accompanied by RFID FASTag toll tracking records proving uninterrupted transit to the buyer&apos;s manufacturing plant.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Signed Lorry Receipts (LR) &amp; Weighbridge Slips
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Physical or electronic delivery challans bearing the buyer&apos;s security gate stamp, store manager signature, and gross/tare weighbridge printouts confirming weight integrity.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Electronic Communication &amp; WhatsApp Transmission Trails
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Exported email threads and authenticated WhatsApp business messaging logs demonstrating timely delivery of COA and absence of contemporaneous rejection within the 15-day inspection window.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                      7
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        Mandatory Section 63 BSA Electronic Certificate
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Affidavit signed by the Systems Administrator or IT Head attesting to the continuous, uncompromised operation of servers and laboratory computers that generated the electronic records.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Dual-Track B2B CTAs */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-3">
                Recovery Activation &bull; Institutional Enforcement
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                Deploy Bulk Drug Legal Recovery: Single Test Case or Bulk CSV Desk
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Whether you need to recover a single high-ticket API default exceeding ₹1 Crore or reconcile an entire ledger of overdue formulation accounts across Baddi, Sikkim, and Hyderabad, LegalRecovery provides fact-verified enforcement infrastructure.
              </p>

              {/* Dual-Track CTA Component */}
              <ApiBulkDrugRecoveryCTA />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-3">
                Knowledge Base &bull; Legal Clarifications
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6">
                Frequently Asked Questions on API &amp; Bulk Drug Debt Recovery
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/60 open:bg-white open:shadow-xs transition-colors duration-150"
                  >
                    <summary className="font-bold text-slate-900 cursor-pointer flex justify-between items-center text-sm sm:text-base list-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-[#DC2626] font-bold text-lg shrink-0 group-open:rotate-45 transition-transform duration-200">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Authorities & Precedents */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-3">
                Legal Authorities &bull; Statutory Corpus
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Precedents, Pharmacopoeia Standards &amp; Legal Authorities
              </h2>
              <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-3">
                <p>
                  The operational frameworks and legal strategies detailed in this guide derive from verified statutory enactments and binding judicial decisions:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li>
                    <strong>Insolvency and Bankruptcy Code, 2016 (IBC):</strong> Sections 8 and 9; Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016 (Form 3 and Form 4).
                  </li>
                  <li>
                    <strong>Supreme Court Precedents on Pre-Existing Disputes:</strong> <em>Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.</em> (2018) 1 SCC 353; <em>Swiss Ribbons Pvt. Ltd. v. Union of India</em> (2019) 4 SCC 17.
                  </li>
                  <li>
                    <strong>Sale of Goods Act, 1930:</strong> Section 41 (Buyer&apos;s right of examining the goods) and Section 42 (Acceptance of goods by lapse of time or acts inconsistent with seller ownership).
                  </li>
                  <li>
                    <strong>Drugs and Cosmetics Act, 1940 &amp; Rules, 1945:</strong> Schedule M (Good Manufacturing Practices and Requirements of Premises, Plant and Equipment for Pharmaceutical Products); Rule 65; Indian Pharmacopoeia Commission (IPC) monographs.
                  </li>
                  <li>
                    <strong>Micro, Small and Medium Enterprises Development Act, 2006:</strong> Sections 15, 16, 17, and 18; Income Tax Act, 1961 Section 43B(h).
                  </li>
                  <li>
                    <strong>Code of Civil Procedure, 1908:</strong> Order XXXVII (Summary Procedure on Bills of Exchange and Invoices); Order XXXVIII Rule 5 (Attachment before Judgment); Section 20(c) (Territorial Jurisdiction).
                  </li>
                  <li>
                    <strong>Commercial Courts Act, 2015:</strong> Section 2(1)(c)(xviii) (Commercial dispute arising out of mercantile documents); Section 12A (Pre-institution Mediation and Settlement).
                  </li>
                  <li>
                    <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA):</strong> Section 63 (Admissibility of electronic records and conditions for digital lab data authentication).
                  </li>
                </ul>
              </div>

              {/* Legal Reviewer Badge */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <span>
                  Reviewed by <strong>{LEGAL_REVIEWER.name}</strong>, {LEGAL_REVIEWER.role}
                </span>
                <span>Published &amp; Maintained by LegalRecovery.in Editorial Board</span>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Sibling & Cross-Cluster Navigation */}
      <div className="w-full bg-[#F8F9FB] border-t border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase font-extrabold tracking-widest text-[#DC2626]">
                Pharmaceutical &amp; Healthcare B2B Recovery Network
              </p>
              <p className="text-lg font-black text-slate-900">
                Explore Sibling Recovery Playbooks in IND-04
              </p>
            </div>
            <Link
              href="/industries/pharma-medical-devices-recovery"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DC2626] hover:underline"
            >
              <span>View All 12 Pharma Industry Guides</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/cardiac-stent-orthopedic-implant-hospital-consignment-dues-recovery"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all group"
            >
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Hospital Consignment Dues
              </span>
              <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                Cardiac Stent &amp; Orthopedic Implant OT Consumption Recovery &rarr;
              </p>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Recover unbilled implants consumed in catheterization labs and OTs under Sale of Goods Act s.24 and barcode evidence.
              </p>
            </Link>

            <Link
              href="/medical-equipment-hospital-supply-amc-cmc-payment-default-recovery"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all group"
            >
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                MedTech &amp; Reagents
              </span>
              <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                Medical Equipment, Reagent &amp; Hospital AMC/CMC Recovery &rarr;
              </p>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Enforce Retention of Title under Sale of Goods Act s.25 and recover reagent-rental minimum guarantee shortfalls.
              </p>
            </Link>

            <Link
              href="/pharma-expired-goods-breakage-credit-note-dispute-stockist-recovery"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all group"
            >
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Stockist Recovery
              </span>
              <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                Defeating Expired Stock &amp; Breakage Credit-Note Deductions &rarr;
              </p>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Enforce 1.5%–2% contract caps and CBIC Circular 72 fresh supply rules against defaulting wholesale druggists.
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Global Related Recovery Guides */}
      <RelatedRecoveryGuides />
    </div>
  );
}
