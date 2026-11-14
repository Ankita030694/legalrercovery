import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PharmaHubTableOfContents from "./PharmaHubTableOfContents";
import PharmaHubScenarioTabs from "./PharmaHubScenarioTabs";
import PharmaHubCTA from "./PharmaHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/pharma-medical-devices-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Pharma, Medical Device & Surgical Distributor Debt Recovery";
const PAGE_DESCRIPTION =
  "Recover overdue chemist/stockist ledgers, unbilled hospital cath-lab/ortho consignments, medical equipment EMIs & CDMO batch invoices across India.";
const H1_TEXT =
  "Specialized Commercial Debt & Ledger Recovery for Pharma Companies, Super-Stockists, Implant Distributors & CDMO Units";

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
  archetype: "G1" | "P1";
  archetypeLabel: string;
  track: "hospital" | "stockist" | "manufacturing";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_04_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-054",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "hospital",
    title: "Cardiac Stent & Ortho Implant Consignment Dues Recovery",
    url: "/cardiac-stent-orthopedic-implant-hospital-consignment-dues-recovery",
    statute: "Sale of Goods Act s.24 & BNS s.316",
    summary:
      "Enforce payment when hospitals implant OT/cath-lab consignment stock without issuing POs using UDI barcode stickers and s.24 deemed sale rules.",
  },
  {
    id: "B2B-055",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "hospital",
    title: "Medical Equipment, Reagent-Rental & Hospital AMC/CMC Recovery",
    url: "/medical-equipment-hospital-supply-amc-cmc-payment-default-recovery",
    statute: "Sale of Goods Act s.25 & PCPNDT Rules",
    summary:
      "Recover diagnostic analyzer reagent-rental shortfalls, post-installation milestones, and ultrasound equipment without breaching PCPNDT sealing norms.",
  },
  {
    id: "B2B-061",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "hospital",
    title: "Cold-Chain Vaccine, Oncology & Biologics Invoice Recovery",
    url: "/cold-chain-vaccine-biologics-temperature-dispute-invoice-recovery",
    statute: "BSA s.63 Logger Proof & Risk Transfer",
    summary:
      "Defeat retroactive 2-8 degree C excursion claims using timestamped USB temperature data-logger readouts and signed cold-box delivery receipts.",
  },
  {
    id: "B2B-063",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "hospital",
    title: "Surgical Consumables, Disposables & Medical Gas Vendor Recovery",
    url: "/surgical-consumables-ppe-hospital-linen-vendor-payment-recovery",
    statute: "Income Tax Act s.43B(h) & MSMED s.16",
    summary:
      "Compel corporate hospitals sitting on 180-day approved GRNs to clear suture, syringe, and liquid medical oxygen invoices ahead of Q4 tax audits.",
  },
  {
    id: "B2B-057",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "stockist",
    title: "Defeating Arbitrary Pharma Expiry & Breakage Credit-Note Claims",
    url: "/pharma-expired-goods-breakage-credit-note-dispute-stockist-recovery",
    statute: "CBIC Circular 72/46/2018-GST & CGST s.34",
    summary:
      "Block defaulting stockists from dumping 3-year-old expired stock against running ledgers by enforcing contractual 1.5-2% caps and GST credit-note cutoffs.",
  },
  {
    id: "B2B-060",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "stockist",
    title: "PCD Pharma Franchise Default & Monopoly Revocation Playbook",
    url: "/pcd-pharma-franchise-monopoly-distributor-default-recovery",
    statute: "NI Act s.138, s.142(2) & Territory Notice",
    summary:
      "Revoke upcountry district monopoly rights cleanly and prosecute bounced franchisee security cheques in your home-bank court under s.142(2).",
  },
  {
    id: "B2B-062",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "stockist",
    title: "Veterinary Pharma, AYUSH & Nutraceutical Distributor Recovery",
    url: "/veterinary-pharma-nutraceutical-ayurvedic-distributor-recovery",
    statute: "MSMED Act s.15-18 & Order XXXVII CPC",
    summary:
      "Tighten 90-120 day rural vet, dairy/poultry, Ayurvedic, and FSSAI private-label credit cycles where AIOCD NOC norms offer zero protection.",
  },
  {
    id: "B2B-064",
    archetype: "P1",
    archetypeLabel: "P1 Notice Template",
    track: "stockist",
    title: "Pharma & Surgical Stockist Ledger Demand Notice Template",
    url: "/templates/pharma-surgical-stockist-ledger-demand-legal-notice",
    statute: "Order XXXVII CPC & NI Act s.20 Notice",
    summary:
      "Advocate-vetted demand notice featuring Form 20B/21B Drug License schedule, expiry-deduction bar, and s.20 security-cheque fill-up intimation.",
  },
  {
    id: "B2B-056",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "manufacturing",
    title: "Pharma Third-Party / CDMO Unpaid & Unlifted Batch Recovery",
    url: "/pharma-third-party-contract-manufacturing-cdmo-batch-payment-recovery",
    statute: "Sale of Goods s.44, MSMED & s.43B(h)",
    summary:
      "Recover 70% balance payments and storage/destruction costs from PCD buyers refusing to lift custom brand-printed batches before expiry.",
  },
  {
    id: "B2B-058",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "manufacturing",
    title: "State Medical Corp (UPMSCL/BMSICL/RMSCL) & GeM Tender Recovery",
    url: "/state-medical-services-corporation-hospital-tender-payment-recovery",
    statute: "GeM 10-Day CRAC, MSMED s.16 & Art. 226",
    summary:
      "Override tender 'no-interest' clauses via Silpi Industries MSEFC compounding and challenge arbitrary debarment or NSKQ deductions safely.",
  },
  {
    id: "B2B-059",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "manufacturing",
    title: "API, Bulk Drug & Excipient High-Ticket B2B Invoice Recovery",
    url: "/api-bulk-drug-chemical-intermediate-b2b-invoice-recovery",
    statute: "IBC s.8/s.9 (>= ₹1Cr) & Sale of Goods s.42",
    summary:
      "Shut down belated USP/IP/BP pharmacopoeia assay pretexts on ₹25L-₹5Cr+ API batches using retention-sample COA acceptance windows.",
  },
];

const SPOKE_TRACKS = [
  {
    key: "hospital" as const,
    heading: "Track A: Hospital Consignments, Implants, Capital Equipment & Disposables",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
    items: IND_04_SPOKES.filter((s) => s.track === "hospital"),
  },
  {
    key: "stockist" as const,
    heading: "Track B: Chemist/Stockist Ledgers, Expiry Disputes, PCD Franchises & Template",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    items: IND_04_SPOKES.filter((s) => s.track === "stockist"),
  },
  {
    key: "manufacturing" as const,
    heading: "Track C: CDMO Unlifted Batches, API Bulk Drugs & State Medical Corp Tenders",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
    items: IND_04_SPOKES.filter((s) => s.track === "manufacturing"),
  },
];

const ESCALATION_MATRIX_ROWS = [
  {
    segment: "Chemist & Retail Pharmacy Ledgers",
    ticket: "₹50,000 – ₹15 Lakh",
    trigger: "45–90 DPD / Expired Deduction",
    statutoryLever: "Order XXXVII CPC, NI Act s.138/s.20 & CBIC Circular 72/46/2018-GST",
    forum: "Magistrate Court (s.138) / Civil Summary Suit",
  },
  {
    segment: "Cardiac Stent & Ortho OT Consignments",
    ticket: "₹2 Lakh – ₹40 Lakh",
    trigger: "Implanted in OT Without PO/GRN",
    statutoryLever: "Sale of Goods Act s.24 (Sale on Approval), BNS s.316 & BSA s.63 Stickers",
    forum: "Commercial Court s.12A / Order 37 / Pre-FIR Notice",
  },
  {
    segment: "PCD Pharma, Vet, AYUSH & Nutraceuticals",
    ticket: "₹1.5 Lakh – ₹25 Lakh",
    trigger: "60–120 DPD / Upcountry Default",
    statutoryLever: "NI Act s.142(2) Home-Bank Jurisdiction, Territory Revocation & MSMED s.15",
    forum: "Home HQ Magistrate Court / MSME ODR",
  },
  {
    segment: "Diagnostic Reagent-Rental & MRI/CT Capex",
    ticket: "₹10 Lakh – ₹2.5 Crore",
    trigger: "Minimum Offtake Breach / EMI Stop",
    statutoryLever: "Sale of Goods Act s.25 (Retention of Title), PCPNDT Notice & Arb. s.9",
    forum: "Commercial Court Order 39 / Institutional Arbitration",
  },
  {
    segment: "CDMO Batches & Surgical Disposables",
    ticket: "₹3 Lakh – ₹1.5 Crore",
    trigger: "Unlifted Branded Stock / >45d GRN",
    statutoryLever: "Income Tax Act s.43B(h), MSMED s.16 (3× RBI) & Sale of Goods Act s.44",
    forum: "MSME ODR / MSEFC / Commercial Court",
  },
  {
    segment: "API Bulk Drugs & State Medical Tenders",
    ticket: "₹25 Lakh – ₹8 Crore+",
    trigger: "Late Assay Pretext / 12m Tender Hold",
    statutoryLever: "IBC s.8 Form 3/4 (>=₹1Cr), GeM 10d CRAC, Silpi Industries & Art. 226",
    forum: "NCLT (s.9) / MSEFC / High Court Writ",
  },
];

const APEX_MANDATES = [
  {
    title: "Security Cheques Crystallize Into Enforceable Criminal Debt Upon Ledger Default",
    parties: "Sripati Singh (Since Deceased) Through His Son Gaurav Singh v. State of Jharkhand & Anr.",
    citation: "Supreme Court of India — 2021 SCC OnLine SC 1002",
    holding:
      "A blank or post-dated security cheque handed over during distributor or stockist onboarding is not an unenforceable scrap of paper. Once credit terms expire and the debt crystallizes upon default, presenting the cheque—after issuing a Section 20 NI Act reconciliation intimation—attracts full Section 138 criminal prosecution.",
    impact:
      "Empowers pharma C&Fs, super-stockists, and PCD companies to enforce security PDCs backed by Section 141 corporate director liability (Aneeta Hada) and 20% interim compensation (s.143A).",
  },
  {
    title: "MSMED Act Statutory Compound Interest Overrides 'No-Interest' Tender & Buyer Contracts",
    parties: "Silpi Industries v. Kerala State Road Transport Corporation",
    citation: "Supreme Court of India — 2021 SCC OnLine SC 439 (MSMED Act s.15–18 & s.24)",
    holding:
      "The MSMED Act is a special statute whose Sections 15 to 24 carry overriding statutory force against conflicting general contract or government tender clauses—provided Udyam Registration existed prior to the supply contract. Buyers cannot contract out of the 45-day payment cap or 3× RBI Bank Rate monthly compound interest.",
    impact:
      "Unlocks statutory compound interest for Udyam-registered CDMO plants, surgical disposable manufacturers, and State Medical Corporation suppliers while reinforcing Section 43B(h) Q4 tax leverage.",
  },
  {
    title: "Mandatory Pre-Institution Mediation Except Where Urgent Asset/Stock Injunction Is Needed",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "Supreme Court of India — (2022) 10 SCC 1 (Commercial Courts Act s.12A)",
    holding:
      "For commercial disputes of Specified Value ₹3 Lakh and above, Section 12A pre-institution mediation (3 months, extendable by 2) is mandatory before filing suit—unless the creditor demonstrates genuine urgency requiring immediate interim relief such as attachment before judgment or asset preservation.",
    impact:
      "Enables medical equipment OEMs and implant distributors facing imminent shelf-stock dissipation or third-party sale to pair Order XXXVIII Rule 5 / Order XXXIX applications, while routing routine ledger claims cleanly through s.12A.",
  },
  {
    title: "Belated Quality or Expiry Pretexts Raised Post-Demand Fail the IBC Pre-Existing Dispute Test",
    parties: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd.",
    citation: "Supreme Court of India — (2018) 1 SCC 353 (IBC Sections 8 & 9)",
    holding:
      "Only a genuine, plausible dispute existing prior to receipt of the Section 8 Operational Creditor Demand Notice (supported by contemporaneous quality memos or COA rejection letters) bars an NCLT Section 9 petition. Fabricated or belated excuses raised for the first time in a Section 8 reply are rejected as 'moonshine' defenses.",
    impact:
      "Gives API, bulk drug, and high-ticket device manufacturers (>= ₹1 Crore aggregate dues) decisive NCLT leverage when buyers raise spurious USP/IP assay or cold-chain claims months after consuming stock.",
  },
];

const LIVE_SEED_RESOURCES = [
  {
    title: "Legal Notice for Unpaid Pharmacy / Medical Store Invoice",
    href: "/send-a-legal-notice/pharmacy-invoice-not-cleared",
    tag: "IND-04 Seed Asset",
    desc: "Dedicated recovery workflow for unpaid retail chemist and medical store drug invoices.",
  },
  {
    title: "Distributor or Dealer Not Paying Dues? Legal Recovery",
    href: "/distributor-dealer-dues-recovery",
    tag: "Channel Recovery",
    desc: "Signed ledger confirmations, NI Act s.20/s.138 security PDC enforcement, and Order 37 summary suits.",
  },
  {
    title: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
    href: "/law/section-43bh-msme-payment-rule",
    tag: "Tax-Audit Leverage",
    desc: "How Form 3CD Clause 22 buyer expense disallowance compels hospitals and corporates to clear MSME bills.",
  },
  {
    title: "Order XXXVII Summary Suit: Fast Civil Money Recovery",
    href: "/law/order-37-summary-suit-money-recovery",
    tag: "Order 37 CPC",
    desc: "10-day leave-to-defend civil suits built on written tax invoices, signed challans, and cheques.",
  },
  {
    title: "MSME Delayed Payment Interest Calculator (3× RBI Rate)",
    href: "/tools/msme-delayed-payment-interest-calculator",
    tag: "Interactive Calculator",
    desc: "Compute Section 16 monthly compound interest and Section 43B(h) buyer disallowance tax impact.",
  },
  {
    title: "Cheque Bounce Deadline Calculator (Section 138 NI Act)",
    href: "/tools/cheque-bounce-deadline-calculator",
    tag: "Interactive Calculator",
    desc: "Verify exact 30-day demand notice, 15-day cure, and Magistrate complaint deadlines on bounced stockist PDCs.",
  },
  {
    title: "Company Cheque Bounce: Prosecuting Directors (s.141)",
    href: "/cheque-bounce-case-against-company-directors",
    tag: "Aneeta Hada Compliance",
    desc: "Avoid fatal Section 141 quashing by correctly arraigning corporate hospitals, PCD buyers, and active directors.",
  },
  {
    title: "Bulk Recovery Cases: All-in-One CSV Solutions",
    href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
    tag: "Enterprise Batch Desk",
    desc: "Batch-recover 10 to 10,000+ overdue chemist, hospital, and dealer accounts via single CSV upload.",
  },
];

const FAQS = [
  {
    question:
      "How can an implant distributor recover payment if a hospital used consignment stents or ortho kits in OT without issuing a PO?",
    answer:
      "Under Section 24 of the Sale of Goods Act, 1930 ('goods delivered on approval or sale-or-return'), ownership passes and the invoice price becomes legally due the moment the hospital adopts the goods—namely, surgical implantation. Combine your Delivery Challan with peel-off patient-file UDI/barcode consumption stickers, OT register entries, and WhatsApp implant requests certified under Section 63 BSA, 2023 to serve a 15-day advocate demand notice, backed by Section 316 BNS breach-of-trust action for any missing unreturned shelf stock.",
  },
  {
    question:
      "Can a defaulting pharma stockist deduct arbitrary 'expired and breakage' credit notes from overdue invoices?",
    answer:
      "No. Unless the distributorship agreement permits unlimited returns, unilateral expiry dumping violates contractual caps (typically 1.5%–2% of net billing) and statutory GST timelines. Under CGST Act Section 34 and CBIC Circular No. 72/46/2018-GST, GST credit notes cannot be issued after the statutory September/November annual cut-off; time-expired returns beyond that window require a fresh reverse GST tax invoice. An advocate notice itemized by batch and Drug License challan bars unlawful set-offs.",
  },
  {
    question:
      "How do Chandigarh, Panchkula, Ambala, or Gujarat PCD pharma companies recover dues from outstation district franchisees without traveling to remote courts?",
    answer:
      "For bounced franchisee cheques or crystallized security PDCs (after a Section 20 NI Act prior intimation notice), Section 142(2)(a) of the Negotiable Instruments Act vests criminal prosecution jurisdiction in the Magistrate court where the creditor's own home collection bank branch is situated—not the debtor's remote district. Simultaneously, a formal territory-revocation notice terminates exclusive district monopoly rights so you can re-appoint a paying distributor.",
  },
  {
    question:
      "What legal precaution is mandatory before repossessing an unpaid Ultrasound machine from a defaulting diagnostic center?",
    answer:
      "While Section 25 of the Sale of Goods Act and Retention-of-Title clauses allow OEMs to reclaim unpaid capital equipment, Ultrasound and Color Doppler systems are strictly regulated under the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act. Seizing or transporting an active machine without notifying the District Appropriate Authority for sealing/de-registration exposes both parties to statutory penalties. Always precede repossession with a formal compliance-cum-recall notice and District Authority intimation.",
  },
  {
    question:
      "How does Section 43B(h) help surgical disposable and CDMO manufacturers recover money from profitable corporate hospital chains?",
    answer:
      "Corporate hospital chains and large pharma marketing companies pay corporate income tax (25.17%–30%+). Under Income-tax Act Section 43B(h), any sum payable to a Udyam-registered Micro or Small manufacturer beyond 15 days (or 45 days with written agreement) that remains unpaid on March 31 is 100% disallowed as a deductible expense in that financial year and reported in Form 3CD Clause 22. Serving a formal Q4 Section 43B(h) Tax-Audit Disallowance Intimation moves your invoice to the top of the hospital CFO's payout queue.",
  },
  {
    question:
      "What can a third-party CDMO manufacturer do when a PCD marketing company refuses to pay the 70% balance or lift custom-printed batches?",
    answer:
      "Under Section 44 of the Sale of Goods Act, 1930, when a buyer wrongfully neglects or refuses to take delivery of manufactured goods after notice of readiness and COA release, the buyer becomes liable for the full contract price, cold/ambient warehousing charges, and any statutory loss on shelf-life expiry or Drugs and Cosmetics Act destruction. Udyam-registered CDMOs can combine an urgent Section 44 + Section 43B(h) demand notice with MSME ODR / MSEFC compounding at 3× RBI Bank Rate.",
  },
  {
    question:
      "Can pure pharma wholesalers or traders use MSME Samadhaan and Section 43B(h), or only manufacturers?",
    answer:
      "Pure retail and wholesale traders holding Udyam registration for trading activities only are excluded from MSMED Act Section 15–18 delayed-payment recovery and Section 43B(h) disallowance leverage (which apply strictly to Micro and Small manufacturers and service providers—not Medium enterprises or pure traders). However, pharma wholesalers, C&Fs, and super-stockists unlock immediate fast-track recovery via Order XXXVII CPC summary suits, NI Act Section 138/141, Commercial Court Section 12A mediation, and multi-invoice bulk notices.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Sale of Goods Act, 1930 (Sections 24, 25, 42, 44 & 55) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–19) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Income Tax Department — Section 43B(h) & Tax Audit Form 3CD Clause 22",
    url: "https://www.incometaxindia.gov.in/",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 20, 138, 141, 142(2) & 143A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Central Board of Indirect Taxes & Customs (CBIC) — CGST Act s.34 & Circular No. 72/46/2018-GST",
    url: "https://www.cbic.gov.in/",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXXVIII Rule 5) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c) & Section 12A Pre-Institution Mediation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Evidence Certification) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Central Drugs Standard Control Organization (CDSCO) & Drugs and Cosmetics Rules (Form 20B/21B)",
    url: "https://cdsco.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType: "Pharmaceutical, Medical Device, Implant & CDMO B2B Commercial Debt Recovery",
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
      "Pharma C&F Agents, Super-Stockists, Cardiac & Ortho Implant Distributors, Medical Equipment CFOs, CDMO & API Manufacturers",
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
  name: "IND-04 Pharmaceuticals, Medical Devices, Implants & Surgical Distributors Recovery Spokes",
  numberOfItems: IND_04_SPOKES.length,
  itemListElement: IND_04_SPOKES.map((spoke, index) => ({
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
      name: "Pharma & Medical Devices Recovery",
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

export default function PharmaMedicalDevicesRecoveryHubPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Pharma & Medical Devices Recovery", href: PAGE_URL },
  ];

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
              <span>IND-04 Life-Sciences Pillar Hub</span>
              <span className="text-red-500">&bull;</span>
              <span>Order 37 CPC &bull; s.43B(h) &bull; Sale of Goods s.24/25</span>
              <span className="text-red-500">&bull;</span>
              <span>Pharma, Implants &amp; CDMO</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 Word Executive Creditor Answer Box */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer (Pharma C&amp;Fs, MedTech CFOs &amp; CDMO Units)
              </span>
              <p>
                Pharmaceutical companies, super-stockists, implant distributors, and CDMO plants can recover overdue chemist, hospital, and PCD ledgers before batches cross expiry by deploying multi-invoice advocate notices combining Order XXXVII CPC summary leverage, Sale of Goods Act s.24/s.25 consignment &amp; retention rules, NI Act s.138 security-cheque enforcement, and Income Tax s.43B(h) Q4 disallowance alerts.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  &rupee;50K&ndash;8Cr+
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Chemist Ledgers to API &amp; Tender Claims
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  3&times; RBI Rate
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  MSMED s.16 Monthly Compounding (Mfg)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  15 / 45 Days
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Section 43B(h) Buyer Tax-Audit Clock
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  &rupee;999 &rarr; CSV
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  1 Live Test Case or 30&ndash;200+ Batch
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
              Statutory Architecture Reviewed by{" "}
              <Link href="/authors/anuj-anand-malik" className="text-slate-200 underline hover:text-white font-semibold">
                Anuj Anand Malik
              </Link>
              , Advocate &amp; Founder, AMA Legal Solutions &bull; Updated November 2026
            </p>
          </div>
        </section>

        {/* Main 2-Column Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-2">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky TOC */}
            <PharmaHubTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview */}
              <section
                id="heading-overview"
                aria-labelledby="heading-overview-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h2
                      id="heading-overview-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Why Pharma &amp; MedTech Creditors Lose Margin to Unbilled Credit
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Closing the Shelf-Life Expiry Trap, Unbilled OT Consignments &amp; Arbitrary Stockist Deductions
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Unlike consumer e-commerce or generic trade, credit defaults in India&apos;s pharmaceutical and medical device ecosystem destroy value on two clocks simultaneously: working-capital lock-up and product shelf-life expiry. A pharma C&amp;F agent or super-stockist waiting 120 days on overdue retail chemist accounts cannot repossess short-dated strips once formulations approach the 6-month marketability barrier. Similarly, a Baddi or Gujarat contract manufacturer (CDMO) holding custom brand-printed cartons faces total destruction liability if a PCD buyer refuses to lift the batch.
                  </p>
                  <p>
                    Generic legal-tech portals treat a ₹15 Lakh hospital cath-lab stent dispute or a ₹40 Lakh MRI reagent-rental breach identically to an individual personal loan. Earlier, our single-page resource on{" "}
                    <Link
                      href="/send-a-legal-notice/pharmacy-invoice-not-cleared"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      unpaid pharmacy invoices
                    </Link>{" "}
                    addressed basic medical-store billing delays. This IND-04 Industry Hub expands that foundation into a complete institutional life-sciences command center, bridging{" "}
                    <Link
                      href="/distributor-dealer-dues-recovery"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      channel distributor recovery
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/law/section-43bh-msme-payment-rule"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Section 43B(h) MSME tax leverage
                    </Link>{" "}
                    across 11 specialized vertical playbooks.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      OT &amp; Cath-Lab Consignments
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      Sale of Goods Act s.24
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Patient UDI barcode stickers prove surgical adoption even when hospital purchase stalls PO issuance.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Manufacturer Leverage
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      MSMED s.16 + s.43B(h)
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Udyam formulation, surgical &amp; CDMO units trigger Q4 corporate tax disallowance and 3&times; RBI interest.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Stockist &amp; PCD Discipline
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      NI s.138 + CGST s.34
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Block unlawful expired-stock set-offs and prosecute bounced PDCs in your home-bank court u/s 142(2).
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Multi-Track Escalation Matrix */}
              <section
                id="heading-escalation-matrix"
                aria-labelledby="heading-escalation-matrix-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h2
                      id="heading-escalation-matrix-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Life-Sciences Escalation Matrix: Chemist Ledgers to CDMO Claims
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Mapping Ticket Size, Commercial Trigger, Primary Statutory Hook &amp; Optimal Adjudication Forum
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[740px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Vertical &amp; Creditor Role</th>
                        <th className="p-3.5 border-b border-slate-800">Typical Ticket</th>
                        <th className="p-3.5 border-b border-slate-800">Default / Dispute Trigger</th>
                        <th className="p-3.5 border-b border-slate-800">Primary Statutory Lever</th>
                        <th className="p-3.5 border-b border-slate-800">Escalation Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {ESCALATION_MATRIX_ROWS.map((row) => (
                        <tr key={row.segment} className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">{row.segment}</td>
                          <td className="p-3.5 font-semibold text-slate-800">{row.ticket}</td>
                          <td className="p-3.5">{row.trigger}</td>
                          <td className="p-3.5 text-slate-700">{row.statutoryLever}</td>
                          <td className="p-3.5 font-semibold text-[#DC2626]">{row.forum}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
                  <strong>Important MSME Trader Boundary:</strong> Pure pharma distributors, super-stockists, and retail chemists registered on Udyam strictly as wholesale/retail traders cannot file MSEFC claims or invoke Section 43B(h) tax disallowance—only Udyam Micro &amp; Small <em>manufacturers</em> (formulation/CDMO/API/surgical units) qualify. Wholesalers and distributors achieve maximum leverage through <strong>Order XXXVII CPC Summary Suits</strong>, <strong>NI Act s.138/s.20</strong>, <strong>Commercial Court s.12A</strong>, and multi-invoice batch notices.
                </div>
              </section>

              {/* Section 3: 5-Stage SVG Workflow + Mobile Stacked Cards */}
              <section
                id="heading-workflow-architecture"
                aria-labelledby="heading-workflow-architecture-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h2
                      id="heading-workflow-architecture-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Batch-to-Bank Workflow: 5-Stage Pharma &amp; Implant Recovery Rail
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      From ERP Invoice &amp; Drug-Challan Ingestion to Tri-Channel Dispatch, Reply Triage &amp; Forum Enforcement
                    </p>
                  </div>
                </div>

                {/* Desktop SVG Diagram */}
                <div className="hidden md:block rounded-xl border border-slate-200 bg-slate-900 p-4 overflow-x-auto">
                  <svg
                    width={920}
                    height={300}
                    viewBox="0 0 920 300"
                    role="img"
                    aria-label="5-stage pharmaceutical and medical device commercial debt recovery workflow from ERP ledger ingestion to execution"
                    className="w-full h-auto"
                  >
                    <rect x="0" y="0" width="920" height="300" rx="12" fill="#0F172A" />
                    <text x="24" y="34" fill="#F87171" fontSize="11" fontWeight="700" letterSpacing="1.2">
                      LEGALRECOVERY.IN &bull; IND-04 PHARMA, IMPLANT &amp; MEDTECH RECOVERY PIPELINE
                    </text>

                    {/* Stage 1 */}
                    <rect x="24" y="58" width="156" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="48" cy="84" r="13" fill="#DC2626" />
                    <text x="48" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">01</text>
                    <text x="70" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Ledger Array</text>
                    <text x="36" y="116" fill="#CBD5E1" fontSize="10.5">invoices[] CSV Upload</text>
                    <text x="36" y="134" fill="#CBD5E1" fontSize="10.5">Form 20B/21B DL Nos.</text>
                    <text x="36" y="152" fill="#CBD5E1" fontSize="10.5">e-Way / UDI Stickers</text>
                    <rect x="36" y="176" width="132" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="44" y="196" fill="#34D399" fontSize="10" fontWeight="700">Expiry Bar Audit</text>
                    <text x="44" y="213" fill="#94A3B8" fontSize="9.5">CGST s.34 / COA Logs</text>

                    <path d="M180 152 L202 152" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="202,147 212,152 202,157" fill="#DC2626" />

                    {/* Stage 2 */}
                    <rect x="212" y="58" width="156" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="236" cy="84" r="13" fill="#DC2626" />
                    <text x="236" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">02</text>
                    <text x="258" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Statutory Tag</text>
                    <text x="224" y="116" fill="#CBD5E1" fontSize="10.5">Mfg: s.43B(h) + s.16</text>
                    <text x="224" y="134" fill="#CBD5E1" fontSize="10.5">Implant: Sale Goods s.24</text>
                    <text x="224" y="152" fill="#CBD5E1" fontSize="10.5">PDC: NI s.20 Notice</text>
                    <rect x="224" y="176" width="132" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="232" y="196" fill="#FBBF24" fontSize="10" fontWeight="700">Advocate Sign-Off</text>
                    <text x="232" y="213" fill="#94A3B8" fontSize="9.5">Division Representee</text>

                    <path d="M368 152 L390 152" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="390,147 400,152 390,157" fill="#DC2626" />

                    {/* Stage 3 */}
                    <rect x="400" y="58" width="156" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="424" cy="84" r="13" fill="#DC2626" />
                    <text x="424" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">03</text>
                    <text x="446" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Tri-Channel</text>
                    <text x="412" y="116" fill="#CBD5E1" fontSize="10.5">Zoho Verified Email</text>
                    <text x="412" y="134" fill="#CBD5E1" fontSize="10.5">WATI Blue-Tick WA</text>
                    <text x="412" y="152" fill="#CBD5E1" fontSize="10.5">Speed Post RPAD</text>
                    <rect x="412" y="176" width="132" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="420" y="196" fill="#34D399" fontSize="10" fontWeight="700">BSA s.63 Hash Seal</text>
                    <text x="420" y="213" fill="#94A3B8" fontSize="9.5">2-8C Logger &amp; RPAD</text>

                    <path d="M556 152 L578 152" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="578,147 588,152 578,157" fill="#DC2626" />

                    {/* Stage 4 */}
                    <rect x="588" y="58" width="156" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="612" cy="84" r="13" fill="#DC2626" />
                    <text x="612" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">04</text>
                    <text x="634" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Reply Triage</text>
                    <text x="600" y="116" fill="#CBD5E1" fontSize="10.5">Credit-Note Rejection</text>
                    <text x="600" y="134" fill="#CBD5E1" fontSize="10.5">Shelf-Stock Audit</text>
                    <text x="600" y="152" fill="#CBD5E1" fontSize="10.5">Balance Confirmation</text>
                    <rect x="600" y="176" width="132" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="608" y="196" fill="#FBBF24" fontSize="10" fontWeight="700">PDC Presentation</text>
                    <text x="608" y="213" fill="#94A3B8" fontSize="9.5">Sripati Singh Ready</text>

                    <path d="M744 152 L766 152" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="766,147 776,152 766,157" fill="#DC2626" />

                    {/* Stage 5 */}
                    <rect x="776" y="58" width="120" height="190" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="800" cy="84" r="13" fill="#10B981" />
                    <text x="800" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">05</text>
                    <text x="820" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Forum Win</text>
                    <text x="788" y="116" fill="#CBD5E1" fontSize="10.5">Order 37 / s.12A</text>
                    <text x="788" y="134" fill="#CBD5E1" fontSize="10.5">NI s.138 / s.142(2)</text>
                    <text x="788" y="152" fill="#CBD5E1" fontSize="10.5">MSME ODR / IBC</text>
                    <rect x="788" y="176" width="96" height="54" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="794" y="196" fill="#34D399" fontSize="10" fontWeight="700">Cash Cleared</text>
                    <text x="794" y="213" fill="#94A3B8" fontSize="9.5">Principal + Interest</text>

                    <text x="24" y="280" fill="#94A3B8" fontSize="10">
                      Every notice preserves Section 63 BSA 2023 electronic hash trails for ERP ledgers, e-Way bills, OT stickers &amp; cold-chain loggers.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  {[
                    {
                      num: "01",
                      title: "Multi-Invoice Ledger & Drug Challan Ingestion",
                      desc: "Import invoices[], Drug License (Form 20B/21B) details, e-Way bills, and OT UDI barcode logs.",
                    },
                    {
                      num: "02",
                      title: "Vertical Statutory Tagging & Advocate Sign-Off",
                      desc: "Select Order 37, s.43B(h)/MSMED s.16, Sale of Goods s.24/25, or NI Act s.20 PDC crystallization.",
                    },
                    {
                      num: "03",
                      title: "Simultaneous Tri-Channel Dispatch & BSA s.63 Seal",
                      desc: "Serve Verified Email, Business WhatsApp, and Speed Post RPAD with cryptographic delivery proof.",
                    },
                    {
                      num: "04",
                      title: "Inbound Reply Triage & Credit-Note Screening",
                      desc: "Reject time-barred expiry deductions under CGST s.34 and lock written s.18 acknowledgments.",
                    },
                    {
                      num: "05",
                      title: "Fast-Track Forum Escalation & Realization",
                      desc: "Enforce home-bank s.138 (s.142(2)), Order 37 summary suits, MSME ODR, or >=₹1Cr IBC s.8 notices.",
                    },
                  ].map((stage) => (
                    <div
                      key={stage.num}
                      className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 flex items-start gap-3"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#DC2626] text-white font-black text-xs flex items-center justify-center shrink-0">
                        {stage.num}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{stage.title}</p>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">{stage.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Interactive Sector Playbooks */}
              <section
                id="heading-scenario-playbooks"
                aria-labelledby="heading-scenario-playbooks-title"
                className="scroll-mt-28 space-y-5"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                  <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h2
                        id="heading-scenario-playbooks-title"
                        className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                      >
                        Interactive Sector Playbooks: Consignments, CDMO, Stockists &amp; Tenders
                      </h2>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        Explore Statutory Hooks, Buyer Pretexts, and 3-Step Execution Rails Across Four Life-Sciences Verticals
                      </p>
                    </div>
                  </div>
                  <PharmaHubScenarioTabs />
                </div>
              </section>

              {/* Section 5: Multi-Invoice Ledger Engine & Dual-Track CTA */}
              <section
                id="heading-ledger-engine"
                aria-labelledby="heading-ledger-engine-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h2
                      id="heading-ledger-engine-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Multi-Invoice Ledger Engine: Recover Before Drugs Cross Expiry
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Purpose-Built Dispatch Plumbing: Dynamic <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">invoices[]</code> Array, Representee Vault &amp; Tri-Channel BSA s.63 Proof
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      1. Multi-Invoice Ledger Array (invoices[])
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Running Chemist &amp; Hospital Accounts
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Attach 5 to 100+ overdue GST tax invoices, batch numbers, e-Way bills, and Delivery Challans inside one consolidated statutory demand notice instead of drafting single-bill letters.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      2. Multi-Division Representees Workspace
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      C&amp;F Depots, Surgical &amp; PCD Divisions
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Segregate cardiac, ortho, dermatology, and generic divisions under dedicated sender profiles and authorized signatories via{" "}
                      <Link href="/user/representees" className="text-[#DC2626] font-semibold underline">
                        Representees management
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      3. Tri-Channel Dispatch &amp; AIOCD/Trade Hygiene
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Email + Blue-Tick WhatsApp + Speed Post RPAD
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Simultaneous delivery creates indisputable proof for Commercial Courts and Magistrate hearings, while preserving option to copy regional druggist reconciliation desks where helpful.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      4. Centralized Inbound Reply Triage
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Track Credit-Note Disputes &amp; Part-Payments
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Capture stockist WhatsApp acknowledgments and email ledger confirmations—automatically creating Section 18 Limitation Act debt-revival evidence and filtering spurious expiry claims.
                    </p>
                  </div>
                </div>

                <div id="heading-cta-block" className="scroll-mt-28 pt-2">
                  <PharmaHubCTA />
                </div>
              </section>

              {/* Section 6: Apex Rulings & Statutory Directives */}
              <section
                id="heading-apex-mandates"
                aria-labelledby="heading-apex-mandates-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <h2
                      id="heading-apex-mandates-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Apex Rulings &amp; Statutory Directives Powering Pharma Recovery
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Binding Supreme Court Precedents Engineered Into Every IND-04 Demand Notice &amp; Litigation Strategy
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {APEX_MANDATES.map((item) => (
                    <article
                      key={item.parties}
                      className="relative pl-5 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2"
                    >
                      <span className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-[#DC2626]" aria-hidden="true" />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {item.citation}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                          Creditor Precedent
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs font-semibold text-slate-600">{item.parties}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.holding}</p>
                      <p className="text-xs font-bold text-slate-900 pt-1">
                        Operational Impact: <span className="font-medium text-slate-700">{item.impact}</span>
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Worked Economics & Statutory Math */}
              <section
                id="heading-worked-economics"
                aria-labelledby="heading-worked-economics-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    7
                  </span>
                  <div>
                    <h2
                      id="heading-worked-economics-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Worked Economics: Consignment Stents vs Section 43B(h) MSME Claims
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Illustrative Recovery Modeling Across Two High-Frequency Life-Sciences Credit Scenarios
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Track A Calculation */}
                  <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
                      Scenario A &bull; Trader / Implant Distributor
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      &rupee;18.40 Lakh OT Consignment Implants (140 Days Unbilled)
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      A cardiac/ortho distributor supplies ₹18,40,000 in consignment stents and trauma plates to a corporate hospital. Hospital implants 14 units (₹12.80L) without issuing POs and holds ₹5.60L unreturned on OT shelves.
                    </p>
                    <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside pt-1">
                      <li><strong>Note:</strong> Pure distributors cannot invoke s.43B(h) or MSEFC.</li>
                      <li><strong>Action:</strong> Advocate notice under <strong>Sale of Goods Act s.24</strong> (attaching UDI peel-off stickers) + <strong>BNS s.316</strong> audit demand for ₹5.60L shelf kits.</li>
                      <li><strong>Forum Lever:</strong> Commercial Court s.12A / Order XXXVII CPC + Order XXXVIII Rule 5 urgency plea.</li>
                    </ul>
                  </div>

                  {/* Track B Calculation */}
                  <div className="p-4 sm:p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                      Scenario B &bull; Udyam Micro/Small Manufacturer
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      &rupee;24.00 Lakh Surgical / CDMO Invoice Crossing March 31
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      A Udyam-registered Small manufacturer supplies ₹24,00,000 of sterile sutures/CDMO formulations to a corporate hospital or pharma marketer on 45-day terms, unpaid at 90 days across March 31.
                    </p>
                    <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside pt-1">
                      <li><strong>Section 43B(h) Tax Hit:</strong> Buyer faces 100% expense disallowance on ₹24L (~<strong>₹6.04 Lakh</strong> immediate cash tax outflow at 25.17% corporate rate).</li>
                      <li><strong>MSMED s.16 Interest:</strong> 3&times; RBI Bank Rate (e.g., 19.50% p.a. at 6.50% RBI rate) compounded monthly, plus 75% deposit bar (s.19) on any buyer appeal.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-900 text-slate-100 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Compute Exact Section 16 Compound Interest &amp; s.43B(h) Buyer Tax Disallowance</strong>
                    <span className="text-slate-300">
                      Generate invoice-wise MSME claim schedules or check Section 138 cheque-bounce 30/15/30 day cutoffs right now.
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5 shrink-0">
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="px-4 py-2.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold text-center transition-colors"
                    >
                      MSME Interest Calculator &rarr;
                    </Link>
                    <Link
                      href="/tools/cheque-bounce-deadline-calculator"
                      className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold text-center border border-white/15 transition-colors"
                    >
                      s.138 Deadline Tool
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 8: Complete 11-Spoke Downward Directory */}
              <section
                id="heading-spokes-directory"
                aria-labelledby="heading-spokes-directory-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    8
                  </span>
                  <div>
                    <h2
                      id="heading-spokes-directory-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Complete IND-04 Directory: 11 Pharma &amp; MedTech Spokes &amp; Template
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Full Hub-and-Spoke Map Covering B2B-054 Through B2B-064 Across Implants, Equipment, Stockists, CDMO, API &amp; Tenders
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {SPOKE_TRACKS.map((group) => (
                    <div key={group.key} className="space-y-3.5">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 border-l-4 border-[#DC2626] pl-3">
                        {group.heading}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {group.items.map((spoke) => (
                          <Link
                            key={spoke.id}
                            href={spoke.url}
                            className="group p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#DC2626]/60 hover:shadow-sm transition-all flex flex-col justify-between gap-2.5"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span
                                  className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${group.badgeClass}`}
                                >
                                  {spoke.archetypeLabel}
                                </span>
                                <span className="text-[10px] font-mono text-slate-400">{spoke.id}</span>
                              </div>
                              <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug">
                                {spoke.title}
                              </p>
                              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                                {spoke.summary}
                              </p>
                            </div>
                            <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between gap-2 text-[11px]">
                              <span className="font-semibold text-slate-500 truncate">{spoke.statute}</span>
                              <span className="font-bold text-[#DC2626] shrink-0">Open &rarr;</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Live Seed Resources & Tools */}
              <section
                id="heading-seed-resources"
                aria-labelledby="heading-seed-resources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    9
                  </span>
                  <div>
                    <h2
                      id="heading-seed-resources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Live Commercial, MSME &amp; Cheque-Bounce Guides for Life Sciences
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Production Calculators, Notice Formats &amp; Statutory Guides Ready to Use Immediately
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {LIVE_SEED_RESOURCES.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626]/60 bg-slate-50/40 hover:bg-white transition-all flex flex-col justify-between gap-2"
                    >
                      <div>
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2 py-0.5 rounded-full mb-1.5">
                          {item.tag}
                        </span>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#DC2626]">
                        Open Live Resource &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    10
                  </span>
                  <div>
                    <h2
                      id="heading-faqs-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      FAQs: Pharma Stockist, Implant &amp; Medical Device Debt Recovery
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Direct Answers for Pharma CFOs, Credit Controllers, Implant Distributors &amp; CDMO Promoters
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-slate-200 bg-slate-50/50 open:bg-white p-4 sm:p-5 transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-xs sm:text-sm md:text-base cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-base shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Authorities & Official Sources */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    11
                  </span>
                  <div>
                    <h2
                      id="heading-sources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Statutory Authorities, Drug Laws &amp; Regulatory Portals Cited
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Primary Legislative Statutes, CBIC GST Circulars, Income Tax Rules &amp; CDSCO References
                    </p>
                  </div>
                </div>

                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
