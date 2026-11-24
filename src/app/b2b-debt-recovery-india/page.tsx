import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import B2BHubTableOfContents from "./B2BHubTableOfContents";
import B2BHubScenarioTabs from "./B2BHubScenarioTabs";
import B2BHubCTA from "./B2BHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/b2b-debt-recovery-india";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "B2B & Institutional Debt Recovery India | 25+ Industries";
const PAGE_DESCRIPTION =
  "Pre-litigation & B2B recovery engine for Banks, NBFCs, Hospitals & 25+ industries. Email, WhatsApp & Speed Post RPAD notices via AMA Legal panel.";
const H1_TEXT =
  "India's Institutional & B2B Legal Recovery Infrastructure: From ₹999 Single Fact-Verified Notices to 50,000-Case Enterprise Batch Dispatch";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "b2b debt recovery and commercial legal notice platform india",
    "corporate accounts receivable legal recovery india",
    "enterprise bulk legal notice dispatch software",
    "b2b unpaid invoice recovery services india",
    "commercial debt collection law firm vs platform",
    "institutional loan and trade credit recovery india",
  ],
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

interface IndustryDirectoryItem {
  code: string;
  cluster:
    | "Financial & Lending"
    | "Healthcare & Life Sciences"
    | "Tech, Staffing & Professional Services"
    | "Industrial, Infra & Real Estate"
    | "Trade, Hospitality & Commodities";
  name: string;
  url: string;
  statuteHook: string;
  buyer: string;
}

const ALL_25_INDUSTRIES: IndustryDirectoryItem[] = [
  {
    code: "IND-01",
    cluster: "Financial & Lending",
    name: "Banks & Scheduled Lenders Loan Recovery",
    url: "/industries/banks-loan-recovery",
    statuteHook: "SARFAESI s.13(2) · DRT s.19 · Lok Adalat s.21",
    buyer: "PSU, Private, SFB & Cooperative Banks",
  },
  {
    code: "IND-02",
    cluster: "Financial & Lending",
    name: "NBFC, Fintech, HFC & MFI Loan Recovery",
    url: "/industries/nbfc-fintech-loan-recovery",
    statuteHook: "PSS Act s.25 · RBI Fair Practices · Neutral ODR",
    buyer: "NBFCs, Digital Lenders, HFCs & MFIs",
  },
  {
    code: "IND-03",
    cluster: "Healthcare & Life Sciences",
    name: "Hospitals, Doctors & Healthcare RCM Recovery",
    url: "/industries/hospitals-doctors-healthcare-recovery",
    statuteHook: "Article 21 Safe · IRDAI TPA Interest · s.80 CGHS",
    buyer: "Hospitals, Clinics & Diagnostic Chains",
  },
  {
    code: "IND-04",
    cluster: "Healthcare & Life Sciences",
    name: "Pharma, Medical Devices & Surgical Recovery",
    url: "/industries/pharma-medical-devices-recovery",
    statuteHook: "Sale of Goods s.24 · CGST s.34 · MSMED s.16",
    buyer: "Pharma C&Fs, Super-Stockists & Implant OEMs",
  },
  {
    code: "IND-05",
    cluster: "Tech, Staffing & Professional Services",
    name: "IT Services, B2B SaaS, ERP & Cloud Recovery",
    url: "/industries/it-saas-software-recovery",
    statuteHook: "Commercial Courts s.2(1)(c) · Copyright s.19 · FEMA",
    buyer: "IT Agencies, SaaS Vendors & Cloud Resellers",
  },
  {
    code: "IND-06",
    cluster: "Industrial, Infra & Real Estate",
    name: "Manufacturing, Heavy Machinery & OEM Recovery",
    url: "/industries/manufacturing-machinery-oem-recovery",
    statuteHook: "Sale of Goods s.42 · Bailee Lien s.170 · s.43B(h)",
    buyer: "Capital Goods, Auto-Ancillary & CNC Units",
  },
  {
    code: "IND-07",
    cluster: "Industrial, Infra & Real Estate",
    name: "Construction, Civil, EPC & MEP Contractors",
    url: "/industries/construction-epc-contractor-recovery",
    statuteHook: "Arbitration s.21/s.36 · RA Bills · PBG s.9 Stay",
    buyer: "EPC, Road, Metro & MEP Contractors",
  },
  {
    code: "IND-08",
    cluster: "Industrial, Infra & Real Estate",
    name: "Builders, Commercial Landlords & Co-Working",
    url: "/industries/builders-commercial-landlords-coworking-recovery",
    statuteHook: "TPA s.106 · Lock-In Damages · RERA s.19(6)",
    buyer: "Grade-A Landlords, Malls & Co-Working Operators",
  },
  {
    code: "IND-09",
    cluster: "Industrial, Infra & Real Estate",
    name: "Logistics, Freight, 3PL & CHA Recovery",
    url: "/industries/logistics-freight-3pl-recovery",
    statuteHook: "Carriage by Road Act · Carrier Lien s.170 · Detention",
    buyer: "Fleet Transporters, 3PL Warehouses & CHAs",
  },
  {
    code: "IND-10",
    cluster: "Trade, Hospitality & Commodities",
    name: "FMCG Distributors, Super-Stockists & D2C",
    url: "/industries/fmcg-distributors-super-stockist-recovery",
    statuteHook: "NI s.138/s.20 · Quick-Commerce Reconciliation",
    buyer: "FMCG Brands, C&Fs & Modern Trade Suppliers",
  },
  {
    code: "IND-11",
    cluster: "Tech, Staffing & Professional Services",
    name: "Staffing, Recruitment & Manpower Agencies",
    url: "/industries/staffing-recruitment-manpower-recovery",
    statuteHook: "Backdoor-Hire Buyout · CLRA s.21(4) · MSMED s.16",
    buyer: "C2H Staffing, Executive Search & PSARA Firms",
  },
  {
    code: "IND-12",
    cluster: "Tech, Staffing & Professional Services",
    name: "Advertising, Media, PR & Event Agencies",
    url: "/industries/advertising-marketing-media-event-recovery",
    statuteHook: "Copyright s.17/s.51 · Retainer & Media Spend",
    buyer: "Ad Agencies, Production Houses & Event IPs",
  },
  {
    code: "IND-13",
    cluster: "Trade, Hospitality & Commodities",
    name: "Textiles, Apparel, Spinning & Garment Units",
    url: "/industries/textiles-apparel-garment-recovery",
    statuteHook: "Broker Joint Liability · s.43B(h) · Order 37 CPC",
    buyer: "Spinning Mills, Surat/Tiruppur Wholesalers",
  },
  {
    code: "IND-14",
    cluster: "Industrial, Infra & Real Estate",
    name: "Chemicals, Steel, RMC & Building Materials",
    url: "/industries/chemicals-steel-rmc-building-materials-recovery",
    statuteHook: "IBC s.8 Form 3/4 · E-Way Bill & GSTR-2B Proof",
    buyer: "RMC Plants, Steel/Cement & Polymer Suppliers",
  },
  {
    code: "IND-15",
    cluster: "Trade, Hospitality & Commodities",
    name: "Exporters, Importers & Cross-Border Trade",
    url: "/industries/exporters-cross-border-trade-recovery",
    statuteHook: "RBI EDPMS Write-Off · ECGC Claim · CPC s.44A",
    buyer: "Merchandise & Service Exporters (FOB/CIF)",
  },
  {
    code: "IND-16",
    cluster: "Trade, Hospitality & Commodities",
    name: "Hotels, Banquets & Corporate Travel Desks",
    url: "/industries/hotels-banquets-corporate-travel-recovery",
    statuteHook: "BTC Corporate Credit · IATA Agent Ledger · s.74",
    buyer: "Hotels, Resorts, Banquet Chains & TMCs",
  },
  {
    code: "IND-17",
    cluster: "Tech, Staffing & Professional Services",
    name: "Schools, Universities & EdTech B2B Vendors",
    url: "/industries/schools-universities-edtech-b2b-recovery",
    statuteHook: "RTE & HC Compliant Fee · Smart-Class B2B SaaS",
    buyer: "Private Schools, Universities & EdTechs",
  },
  {
    code: "IND-18",
    cluster: "Tech, Staffing & Professional Services",
    name: "Telecom, ISPs, Data Centers & Managed IT",
    url: "/industries/telecom-isp-datacenter-msp-recovery",
    statuteHook: "IT Act s.43 Safe Suspend · BNS s.316 CPE/Firewall",
    buyer: "ISPs, Colocation Data Centers, CPaaS & MSPs",
  },
  {
    code: "IND-19",
    cluster: "Industrial, Infra & Real Estate",
    name: "Solar EPC, RESCO PPA & EV Power Networks",
    url: "/industries/solar-renewable-ev-power-recovery",
    statuteHook: "RESCO PPA Buyout · Electricity Act · IBC s.8",
    buyer: "Solar EPCs, C&I RESCO Developers & CPOs",
  },
  {
    code: "IND-20",
    cluster: "Industrial, Infra & Real Estate",
    name: "Equipment Rental & Machinery Leasing",
    url: "/industries/equipment-rental-machinery-leasing-recovery",
    statuteHook: "BNS s.316 Detention · Gate-Pass & Crane Lien",
    buyer: "Crane, DG Set, Scaffolding & MHE Lessors",
  },
  {
    code: "IND-21",
    cluster: "Trade, Hospitality & Commodities",
    name: "Agri-Inputs, Cold Storage & Food Processing",
    url: "/industries/agri-inputs-cold-storage-food-processing-recovery",
    statuteHook: "Cold-Storage Lien s.170 · Seasonal Mandi Credit",
    buyer: "Seed, Agrochemical, Feed & Cold-Chain Units",
  },
  {
    code: "IND-22",
    cluster: "Trade, Hospitality & Commodities",
    name: "Packaging, Printing & Paper Mills",
    url: "/industries/packaging-printing-paper-mill-recovery",
    statuteHook: "Cylinder/Plate Lien · Unlifted Custom Stock s.56",
    buyer: "Corrugated Box, Flexible Converters & Mills",
  },
  {
    code: "IND-23",
    cluster: "Tech, Staffing & Professional Services",
    name: "CAs, Architects, Engineers & Consultants",
    url: "/industries/ca-architects-consultants-professional-fee-recovery",
    statuteHook: "ICAI/COA Ethics-Safe · Form 26AS TDS · Order 37",
    buyer: "CA Firms, Architects, Consultants & Advisors",
  },
  {
    code: "IND-24",
    cluster: "Trade, Hospitality & Commodities",
    name: "Franchisors, Brand Licensors & OEM Dealers",
    url: "/industries/franchisors-brand-licensors-oem-dealership-recovery",
    statuteHook: "Trade Marks s.29 · Royalty Arrears · Signboard",
    buyer: "QSR, Preschool, Retail Franchisors & EV OEMs",
  },
  {
    code: "IND-25",
    cluster: "Trade, Hospitality & Commodities",
    name: "Mining, Coal, Petcoke, Metal Scrap & Fuel",
    url: "/industries/mining-minerals-fuel-scrap-commodity-recovery",
    statuteHook: "Sale of Goods s.42 · Order 38 Rule 5 · PESO s.316",
    buyer: "Coal Importers, Scrap Yards, Gas & Mineral Units",
  },
];

const CLUSTER_ORDER: IndustryDirectoryItem["cluster"][] = [
  "Financial & Lending",
  "Industrial, Infra & Real Estate",
  "Tech, Staffing & Professional Services",
  "Healthcare & Life Sciences",
  "Trade, Hospitality & Commodities",
];

const PRIMARY_SOURCES = [
  {
    title: "The Insolvency and Bankruptcy Code, 2016 (Sections 4, 8 & 9 — Operational Creditor Threshold & Demand Notices)",
    url: "https://www.indiacode.nic.in/handle/123456789/15479",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 2(1)(c) Specified Value & Section 12A Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "The Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–19 & MSME Samadhaan Portal)",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "The Negotiable Instruments Act, 1881 (Sections 138, 141, 142 & 143A) & Payment and Settlement Systems Act, 2007 (Section 25)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "The Arbitration and Conciliation Act, 1996 (Sections 9, 12(5), 21, 29A, 29B & 36) & Bharatiya Sakshya Adhiniyam, 2023 (Section 63)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Reserve Bank of India (RBI) Fair Practices Code & Master Directions for Banks and NBFCs",
    url: "https://www.rbi.org.in/",
  },
];

const FAQS = [
  {
    question: "How is LegalRecovery.in different from a traditional collection agency or panel law firm?",
    answer:
      "Telecalling collection agencies lack statutory standing under the Advocates Act, 1961 and expose NBFCs and enterprises to RBI Fair Practices Code penalties, while traditional law firms charge ₹5,000–₹25,000 per notice with manual Word-document workflows. LegalRecovery.in combines empaneled AMA Legal Solutions advocates with automated bulk CSV ingestion, segregated Representees profiles, simultaneous Email + Business WhatsApp + Speed Post RPAD dispatch, and BSA 2023 s.63 delivery logs starting at ₹999 for a single pilot notice.",
  },
  {
    question: "Can enterprises send 1,000 to 50,000 legal notices across multiple GSTINs or NBFC branches?",
    answer:
      "Yes. Inside the Representees portal, institutional creditors can configure separate legal entity names, registered addresses, GSTINs, and authorized signatories for different subsidiaries, NBFC portfolios, or regional depots. You can upload a single CSV ledger segmented by DPD/SMA bucket or invoice aging and trigger automated 4-step escalation waves with Speed Post RPAD manifests.",
  },
  {
    question: "Which statutory track applies if my unpaid B2B invoice is ₹3 Lakh, ₹25 Lakh, or above ₹1 Crore?",
    answer:
      "Claims of ₹3 Lakh and above fall within the Commercial Courts Act, 2015, requiring Section 12A Pre-Institution Mediation unless urgent interim relief (such as Order XXXVIII Rule 5 asset attachment) is sought. Udyam-registered Micro and Small enterprises can additionally invoke MSMED Act Section 16 (3x RBI monthly compound interest) and Income Tax Act Section 43B(h) corporate tax disallowance. Undisputed operational debts crossing ₹1 Crore (principal plus contractual interest) qualify for an IBC Section 8 Form 3/4 Demand Notice.",
  },
  {
    question: "Are Email and WhatsApp legal notices legally admissible alongside Speed Post RPAD?",
    answer:
      "Yes. Under Section 27 of the General Clauses Act, 1897, Speed Post RPAD addressed to the debtor's registered office carries a statutory presumption of service. Simultaneously dispatching via verified email and Business WhatsApp creates time-stamped electronic delivery receipts admissible under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023—eliminating 'never received' excuses in Order XXXVII CPC, Section 138 NI Act, and NCLT proceedings.",
  },
  {
    question: "How do NBFCs and fintechs enforce bounced e-NACH mandates under Section 25 of the PSS Act?",
    answer:
      "Under Section 25 of the Payment and Settlement Systems Act, 2007, an e-NACH or ECS dishonour due to insufficient funds carries criminal liability identical to Section 138 of the NI Act. However, the lender must serve a written statutory demand notice within 30 days of receiving the NPCI return memo, giving the borrower 15 days to cure. Our automated batch engine tracks this 30-day statutory clock per UMRN.",
  },
  {
    question: "What happens if a corporate debtor issues a sham quality debit note after using our goods or services?",
    answer:
      "Under Section 42 of the Sale of Goods Act, 1930, once a buyer consumes, melts, installs, or resells goods—or avails GST Input Tax Credit (GSTR-2B) without timely rejection—the buyer is deemed to have accepted the goods. Our team notices lock this statutory estoppel and rebut belated debit notes on record so the debtor cannot manufacture a fake 'pre-existing dispute' under the Supreme Court Mobilox test.",
  },
  {
    question: "Do Medium Enterprises and EPC Works Contractors qualify for MSME Samadhaan?",
    answer:
      "No—a critical statutory trap. Section 2(n) of the MSMED Act and Section 43B(h) of the Income Tax Act cover Micro and Small enterprises (and exclude Medium enterprises as well as indivisible works contracts under High Court rulings). For Medium enterprises and EPC contractors, LegalRecovery routes claims through Order XXXVII CPC summary suits, Commercial Courts s.12A mediation, and fast-track Section 21 institutional arbitration.",
  },
  {
    question: "Can we test LegalRecovery.in on 1 live overdue case before committing to an enterprise batch?",
    answer:
      "Yes. Track 1 lets any CFO, legal head, or MSME promoter submit a single overdue invoice or bounced cheque/EMI for ₹999. An empaneled advocate reviews your ledger, drafts the sector-specific statutory notice, and dispatches it simultaneously via Email, WhatsApp, and Speed Post RPAD before you scale to bulk CSV batches.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  serviceType: "Institutional & B2B Legal Recovery Infrastructure",
  provider: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "INR",
    description: "Single Fact-Verified Tri-Channel Statutory Notice Pilot",
  },
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  datePublished: "2026-11-20T11:00:00+05:30",
  dateModified: "2026-11-20T11:00:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "25 Indian B2B & Institutional Legal Recovery Industry Hubs",
  numberOfItems: ALL_25_INDUSTRIES.length,
  itemListElement: ALL_25_INDUSTRIES.map((ind, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: `${ind.code}: ${ind.name}`,
    url: `${SITE_URL}${ind.url}`,
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
      name: "B2B & Institutional Debt Recovery India",
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository; attribution uses Anuj Anand Malik directly.
export default function B2BDebtRecoveryIndiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
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
            <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Master B2B Pillar Hub</span>
              <span aria-hidden="true">&bull;</span>
              <span>25+ Industries</span>
              <span aria-hidden="true">&bull;</span>
              <span>AMA Legal Solutions Panel</span>
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Institutional Summary
              </span>
              LegalRecovery.in is India&apos;s fact-verified B2B receivables and loan recovery
              infrastructure connecting 25+ vertical industry hubs to live bulk dispatch. Whether
              testing one ₹999 notice or onboarding 50,000 CSV accounts across segregated GSTIN
              Representees, every claim routes through SARFAESI, PSS s.25, NI s.138, MSMED
              s.43B(h), Order XXXVII, Commercial Courts s.12A, Arbitration, or IBC s.8.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">25 Verticals</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Dedicated Industry Recovery Hubs
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">₹999 Pilot</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Single Advocate Notice + Tri-Channel
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">10–50,000+</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Bulk CSV Batch &amp; RPAD Manifests
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">9 Core Acts</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  SARFAESI, IBC, NI, PSS, MSMED &amp; CPC
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "B2B & Institutional Debt Recovery India", href: PAGE_URL },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <B2BHubTableOfContents />

            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The B2B AR Gap */}
              <section
                id="heading-enterprise-gap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Why Traditional B2B Recovery Fails Enterprise CFOs &amp; CROs
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Indian commercial creditors—from scheduled banks and NBFCs managing millions of
                  retail EMIs to industrial OEMs, hospitals, IT vendors, and commodity traders—lose
                  working capital in a structural dead zone between polite ERP reminders and
                  five-year civil litigation. In-house Accounts Receivable (AR) follow-ups carry
                  zero statutory fear, while third-party telecalling agencies trigger RBI Fair
                  Practices Code penalties, data-privacy exposure, and customer hostility.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Conversely, engaging conventional panel law firms for every ₹40,000 to ₹15 Lakh
                  default is operationally unscalable: manual Word drafting costs ₹5,000–₹25,000 per
                  notice, lacks bulk Speed Post RPAD tracking, misses strict 30-day NI Act s.138 /
                  PSS Act s.25 limitation windows, and fails to capture{" "}
                  <strong>Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> electronic
                  delivery certificates. LegalRecovery.in bridges this exact execution gap by
                  unifying empaneled advocates at <strong>AMA Legal Solutions</strong> with an
                  enterprise-grade legal dispatch engine.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1">
                      Statutory Deadline Leakage
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Missing the 30-day notice window after an e-NACH or cheque return memo
                      permanently extinguishes criminal prosecution under PSS Act s.25 and NI Act
                      s.138.
                    </p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1">
                      Unverified Electronic Proof
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Ad-hoc emails or personal WhatsApp messages without BSA 2023 s.63 hash logs
                      and Speed Post RPAD receipts invite &ldquo;no notice received&rdquo; defences
                      in Order XXXVII suits.
                    </p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-1">
                      Unified Creditor Escalation
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Routing each overdue account to its highest-leverage statutory track—from
                      s.43B(h) tax disallowance to IBC s.8—compresses pre-litigation settlement
                      cycles.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Live Platform Superpowers */}
              <section
                id="heading-platform-superpowers"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Live Platform Superpowers: Representees, CSV Batch &amp; Tri-Channel Dispatch
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Unlike static legal directories or generic collection SaaS tools, LegalRecovery.in
                  runs on a live, production-tested legal operations stack built for multi-entity
                  Indian enterprises and financial institutions:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full mb-2">
                      Multi-Entity Governance
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                      Segregated &ldquo;Representees&rdquo; Workspace
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      Manage distinct subsidiary entities, regional GSTINs, NBFC co-lending SPVs,
                      or hospital units inside{" "}
                      <Link
                        href="/user/representees"
                        className="text-[#DC2626] font-semibold hover:underline"
                      >
                        /user/representees
                      </Link>
                      . Each Representee profile carries its own authorized signatory, letterhead
                      particulars, and statutory notice templates.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full mb-2">
                      10 to 50,000+ Cases
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                      Bulk CSV Ingestion &amp; Speed Post RPAD Manifests
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      Upload aging ERP ledgers, DPD/SMA loan tapes, or bounced UMRN return memos
                      via{" "}
                      <Link
                        href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                        className="text-[#DC2626] font-semibold hover:underline"
                      >
                        Bulk Recovery Solutions
                      </Link>
                      . The engine validates addresses, maps invoice/loan schedules, and generates
                      India Post Speed Post RPAD dispatch manifests automatically.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-slate-800 bg-slate-200 px-2.5 py-0.5 rounded-full mb-2">
                      Simultaneous Tri-Channel
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                      Email + Business WhatsApp + Speed Post RPAD
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      Every fact-verified notice is served simultaneously across verified email,
                      WATI Business WhatsApp, and physical Speed Post RPAD (see{" "}
                      <Link
                        href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                        className="text-[#DC2626] font-semibold hover:underline"
                      >
                        Tri-Channel Bulk Notice Architecture
                      </Link>
                      ), locking deemed service under General Clauses Act s.27 and BSA 2023 s.63.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full mb-2">
                      Closed-Loop Escalation
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                      Automated 4-Step Waves &amp; Inbound Reply Triage
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      Track real-time delivery status, log debtor counter-replies or settlement
                      requests in one dashboard, and escalate non-responders seamlessly to Lok
                      Adalat, Order XXXVII summary suits, neutral ODR arbitration, or IBC Section 8.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Multi-Track Statutory Escalation Matrix */}
              <section
                id="heading-escalation-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Master B2B Statutory Routing Matrix (9 Core Recovery Tracks)
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Selecting the wrong legal forum wastes months in jurisdictional dismissals.
                  LegalRecovery.in routes every commercial claim according to ticket value, security
                  collateral, Udyam status, and payment instrument:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3.5 font-bold">Statutory Track</th>
                        <th className="p-3.5 font-bold">Eligible Claim / Ticket</th>
                        <th className="p-3.5 font-bold">Critical Deadline</th>
                        <th className="p-3.5 font-bold">Primary Creditor Leverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          SARFAESI Act s.13(2) &amp; DRT
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Secured Bank / HFC / Eligible NBFC NPAs (&gt; ₹1L / ₹20L)
                        </td>
                        <td className="p-3.5 text-[#DC2626] font-semibold">
                          60-day statutory cure window
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Non-court possession &amp; auction under s.13(4)
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          PSS Act s.25 &amp; NI Act s.138
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Bounced e-NACH mandates &amp; corporate/dealer cheques
                        </td>
                        <td className="p-3.5 text-[#DC2626] font-semibold">
                          30d notice · 15d cure · 30d complaint
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Criminal summons to directors (s.141) + 20% s.143A interim pay
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          MSMED Act ss.15–18 &amp; IT s.43B(h)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Micro &amp; Small Udyam suppliers (goods/services)
                        </td>
                        <td className="p-3.5 text-[#DC2626] font-semibold">
                          45-day max credit cap · FY-end tax cut-off
                        </td>
                        <td className="p-3.5 text-slate-700">
                          3x RBI monthly compound interest + buyer tax disallowance
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          Order XXXVII CPC Summary Suit
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Written contracts, invoices, dishonoured bills/LCs
                        </td>
                        <td className="p-3.5 text-[#DC2626] font-semibold">
                          10-day defendant appearance window
                        </td>
                        <td className="p-3.5 text-slate-700">
                          No automatic right to defend without court deposit
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          Commercial Courts Act s.12A
                        </td>
                        <td className="p-3.5 text-slate-700">
                          All commercial disputes &ge; ₹3 Lakh Specified Value
                        </td>
                        <td className="p-3.5 text-[#DC2626] font-semibold">
                          3-month mediation (exempt if urgent relief)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Executable settlement or Order 38 Rule 5 attachment
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          Arbitration s.21 / s.29B / s.36
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Contracts &amp; digital loans with neutral ODR clauses
                        </td>
                        <td className="p-3.5 text-[#DC2626] font-semibold">
                          6m fast-track (s.29B) · 12m standard (s.29A)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Award executable as decree (s.36) + salary/bank garnishee
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          IBC Section 8 (Form 3 / Form 4)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Undisputed operational debt &ge; ₹1 Crore
                        </td>
                        <td className="p-3.5 text-[#DC2626] font-semibold">
                          Strict 10-day debtor cure/dispute window
                        </td>
                        <td className="p-3.5 text-slate-700">
                          CIRP insolvency admission threat against corporate debtor
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Multi-Track Escalation Workflow SVG + Mobile Cards */}
              <section
                id="heading-multi-track-rail"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    5-Stage Institutional Recovery Architecture (Pilot to Enforcement)
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Every B2B and lending portfolio follows a structured five-stage escalation rail
                  designed to maximize pre-litigation settlements while building an ironclad
                  evidentiary record for court or tribunal filings:
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block bg-slate-900 rounded-2xl p-5 border border-slate-800 overflow-x-auto">
                  <svg
                    viewBox="0 0 880 200"
                    width={880}
                    height={200}
                    className="w-full h-auto"
                    role="img"
                    aria-label="5-Stage B2B Institutional Recovery Architecture Flowchart"
                  >
                    <defs>
                      <marker
                        id="b2bArrow"
                        markerWidth="8"
                        markerHeight="8"
                        refX="6"
                        refY="4"
                        orient="auto"
                      >
                        <path d="M0,0 L8,4 L0,8 Z" fill="#DC2626" />
                      </marker>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="25" width="152" height="145" rx="12" fill="#1E293B" stroke="#334155" />
                    <text x="24" y="50" fill="#F87171" fontSize="10" fontWeight="700">STAGE 01</text>
                    <text x="24" y="72" fill="#FFFFFF" fontSize="13" fontWeight="800">Representees</text>
                    <text x="24" y="89" fill="#FFFFFF" fontSize="13" fontWeight="800">&amp; CSV Intake</text>
                    <text x="24" y="114" fill="#CBD5E1" fontSize="10">Map GSTINs, DPD/SMA</text>
                    <text x="24" y="129" fill="#CBD5E1" fontSize="10">buckets, UMRNs &amp;</text>
                    <text x="24" y="144" fill="#CBD5E1" fontSize="10">GSTR-2B ledgers</text>

                    <line x1="162" y1="97" x2="184" y2="97" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#b2bArrow)" />

                    {/* Stage 2 */}
                    <rect x="188" y="25" width="152" height="145" rx="12" fill="#1E293B" stroke="#334155" />
                    <text x="202" y="50" fill="#F87171" fontSize="10" fontWeight="700">STAGE 02</text>
                    <text x="202" y="72" fill="#FFFFFF" fontSize="13" fontWeight="800">Advocate</text>
                    <text x="202" y="89" fill="#FFFFFF" fontSize="13" fontWeight="800">Statutory Routing</text>
                    <text x="202" y="114" fill="#CBD5E1" fontSize="10">Assign PSS s.25, NI s.138,</text>
                    <text x="202" y="129" fill="#CBD5E1" fontSize="10">s.43B(h), SARFAESI, or</text>
                    <text x="202" y="144" fill="#CBD5E1" fontSize="10">IBC s.8 Form 3/4</text>

                    <line x1="340" y1="97" x2="362" y2="97" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#b2bArrow)" />

                    {/* Stage 3 */}
                    <rect x="366" y="25" width="152" height="145" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="1.5" />
                    <text x="380" y="50" fill="#FCA5A5" fontSize="10" fontWeight="700">STAGE 03</text>
                    <text x="380" y="72" fill="#FFFFFF" fontSize="13" fontWeight="800">Tri-Channel</text>
                    <text x="380" y="89" fill="#FFFFFF" fontSize="13" fontWeight="800">Batch Dispatch</text>
                    <text x="380" y="114" fill="#FECACA" fontSize="10">Email + Business WA</text>
                    <text x="380" y="129" fill="#FECACA" fontSize="10">+ Speed Post RPAD</text>
                    <text x="380" y="144" fill="#FECACA" fontSize="10">(BSA 2023 s.63 logs)</text>

                    <line x1="518" y1="97" x2="540" y2="97" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#b2bArrow)" />

                    {/* Stage 4 */}
                    <rect x="544" y="25" width="152" height="145" rx="12" fill="#1E293B" stroke="#334155" />
                    <text x="558" y="50" fill="#F87171" fontSize="10" fontWeight="700">STAGE 04</text>
                    <text x="558" y="72" fill="#FFFFFF" fontSize="13" fontWeight="800">4-Wave Follow-Up</text>
                    <text x="558" y="89" fill="#FFFFFF" fontSize="13" fontWeight="800">&amp; Reply Triage</text>
                    <text x="558" y="114" fill="#CBD5E1" fontSize="10">Log RPAD delivery, vet</text>
                    <text x="558" y="129" fill="#CBD5E1" fontSize="10">debtor replies &amp; close</text>
                    <text x="558" y="144" fill="#CBD5E1" fontSize="10">OTS / payment plans</text>

                    <line x1="696" y1="97" x2="718" y2="97" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#b2bArrow)" />

                    {/* Stage 5 */}
                    <rect x="722" y="25" width="148" height="145" rx="12" fill="#064E3B" stroke="#10B981" />
                    <text x="736" y="50" fill="#6EE7B7" fontSize="10" fontWeight="700">STAGE 05</text>
                    <text x="736" y="72" fill="#FFFFFF" fontSize="13" fontWeight="800">Forum Filing</text>
                    <text x="736" y="89" fill="#FFFFFF" fontSize="13" fontWeight="800">&amp; Decree Execution</text>
                    <text x="736" y="114" fill="#D1FAE5" fontSize="10">Lok Adalat, s.12A,</text>
                    <text x="736" y="129" fill="#D1FAE5" fontSize="10">Order 37, ODR Award</text>
                    <text x="736" y="144" fill="#D1FAE5" fontSize="10">or NCLT IBC s.9</text>
                  </svg>
                </div>

                {/* Mobile Stacked Workflow Cards */}
                <div className="md:hidden space-y-3">
                  {[
                    {
                      stage: "Stage 01 • Representees & CSV Intake",
                      desc: "Segregate entity GSTINs/branches and upload aging AR or DPD/SMA loan CSVs.",
                    },
                    {
                      stage: "Stage 02 • Advocate Statutory Routing",
                      desc: "AMA Legal panel maps each account to PSS s.25, NI s.138, s.43B(h), SARFAESI, or IBC s.8.",
                    },
                    {
                      stage: "Stage 03 • Tri-Channel Batch Dispatch",
                      desc: "Simultaneous Email + Business WhatsApp + Speed Post RPAD with BSA 2023 s.63 proof.",
                    },
                    {
                      stage: "Stage 04 • 4-Wave Follow-Up & Reply Triage",
                      desc: "Track RPAD delivery, neutralize sham debit notes, and structure OTS settlements.",
                    },
                    {
                      stage: "Stage 05 • Forum Filing & Decree Execution",
                      desc: "Escalate unresolved accounts to Lok Adalat, Order 37, s.12A, ODR, or NCLT.",
                    },
                  ].map((item) => (
                    <div
                      key={item.stage}
                      className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                    >
                      <p className="text-xs font-black text-red-400 mb-1">{item.stage}</p>
                      <p className="text-xs text-slate-200 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5: Interactive Sector Playbooks */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Interactive Playbooks by Enterprise Buyer &amp; Ticket Tier
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Select your institutional profile below to inspect the exact statutory levers,
                  evidence bundle, and escalation sequence:
                </p>

                <B2BHubScenarioTabs />
              </section>

              {/* Section 6: Complete 25-Industry Directory */}
              <section
                id="heading-25-industries"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Master Directory: All 25 Indian B2B &amp; Institutional Recovery Hubs
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Every Indian sector has distinct commercial customs, regulatory compliance rules,
                  and debtor evasion tactics. Navigate directly to your vertical&apos;s dedicated
                  Industry Pillar Hub below:
                </p>

                <div className="space-y-8">
                  {CLUSTER_ORDER.map((clusterName) => {
                    const items = ALL_25_INDUSTRIES.filter((i) => i.cluster === clusterName);
                    return (
                      <div key={clusterName}>
                        <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-4">
                          <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-900">
                            {clusterName}
                          </h3>
                          <span className="text-[11px] font-bold text-slate-500">
                            {items.length} Industry Hubs
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {items.map((ind) => (
                            <Link
                              key={ind.code}
                              href={ind.url}
                              className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/60 rounded-xl p-4 transition-all flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-1.5">
                                  <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                                    {ind.code}
                                  </span>
                                  <span className="text-[10px] font-semibold text-slate-500 truncate">
                                    {ind.buyer}
                                  </span>
                                </div>
                                <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug mb-2">
                                  {ind.name}
                                </h4>
                              </div>
                              <p className="text-[11px] font-semibold text-slate-600 pt-2 border-t border-slate-200/70">
                                {ind.statuteHook}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Section 7: Dual-Track B2B Conversion Desk */}
              <section
                id="heading-dual-desk"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Start 1 Live Pilot Notice (₹999) or Upload Bulk Defaulter CSV
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Test LegalRecovery.in on a single overdue invoice today, or onboard your entire
                  multi-GSTIN or NBFC branch portfolio through our bulk CSV Representees desk:
                </p>

                <B2BHubCTA />
              </section>

              {/* Section 8: CFO Unit Economics */}
              <section
                id="heading-unit-economics"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    CFO Unit Economics: Platform Infrastructure vs Panel Law Firms
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  For a mid-market enterprise or NBFC holding 200 overdue B2B invoices or loan
                  accounts averaging ₹1.25 Lakh each (₹2.50 Crore total trapped AR), pre-litigation
                  dispatch cost and statutory interest recovery determine net recovery yield:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-5">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3.5 font-bold">Evaluation Dimension</th>
                        <th className="p-3.5 font-bold">Traditional Panel Law Firm</th>
                        <th className="p-3.5 font-bold">Collection Telecalling Agency</th>
                        <th className="p-3.5 font-bold">LegalRecovery.in Infrastructure</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">Cost per Advocate Notice</td>
                        <td className="p-3.5 text-slate-700">₹5,000 – ₹25,000 manual</td>
                        <td className="p-3.5 text-slate-700">No advocate standing (15–25% fee)</td>
                        <td className="p-3.5 text-emerald-700 font-bold">₹999 pilot · Tiered bulk CSV</td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">Dispatch Channels</td>
                        <td className="p-3.5 text-slate-700">Post only (often untracked)</td>
                        <td className="p-3.5 text-slate-700">Calls / unverified SMS</td>
                        <td className="p-3.5 text-slate-900 font-semibold">
                          Email + Business WA + Speed Post RPAD
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">Court Admissibility</td>
                        <td className="p-3.5 text-slate-700">Manual affidavit prep</td>
                        <td className="p-3.5 text-[#DC2626] font-semibold">
                          Zero (RBI compliance risk)
                        </td>
                        <td className="p-3.5 text-slate-900 font-semibold">
                          BSA 2023 s.63 + RPAD manifest
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">Batch Capacity</td>
                        <td className="p-3.5 text-slate-700">10–30 notices / month</td>
                        <td className="p-3.5 text-slate-700">High volume, low legal teeth</td>
                        <td className="p-3.5 text-emerald-700 font-bold">
                          10 to 50,000+ cases via CSV
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                  <p className="text-[11px] font-black uppercase tracking-widest text-red-400 mb-2">
                    Illustrative Statutory Leverage: ₹50 Lakh Overdue MSME Supply Ledger
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                    <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                      <p className="text-slate-400 text-[11px]">Principal Overdue (180 Days)</p>
                      <p className="text-lg font-black text-white mt-0.5">₹50,00,000</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                      <p className="text-slate-400 text-[11px]">MSMED s.16 Interest (3x RBI ~19.5%)</p>
                      <p className="text-lg font-black text-emerald-400 mt-0.5">+ ₹4,95,000+</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                      <p className="text-slate-400 text-[11px]">Buyer s.43B(h) Tax Disallowance</p>
                      <p className="text-lg font-black text-amber-400 mt-0.5">~₹12.5L–₹15L Tax Hit</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Calculators, Templates & Core Guides */}
              <section
                id="heading-tools-templates"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    09
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Interactive Calculators, Notice Templates &amp; Empirical Studies
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Access LegalRecovery&apos;s live statutory calculators, fact-verified notice
                  workspaces, and empirical settlement benchmarks:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      tag: "Bulk Solution",
                      title: "Bulk Recovery Cases All-in-One Solutions",
                      href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                      desc: "Enterprise CSV onboarding, multi-wave notices, and dedicated AMA Legal batch execution.",
                    },
                    {
                      tag: "Tri-Channel Engine",
                      title: "Bulk Notice via Email, WhatsApp & Speed Post",
                      href: "/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution",
                      desc: "How simultaneous digital and RPAD dispatch establishes ironclad statutory service.",
                    },
                    {
                      tag: "Commercial Desk",
                      title: "Recovery of Unpaid Dues for Your Business",
                      href: "/recovery-of-unpaid-dues-for-my-business",
                      desc: "End-to-end B2B invoice, dealer ledger, and commercial contract recovery roadmap.",
                    },
                    {
                      tag: "Empirical Report",
                      title: "Legal Notice Outcomes Study (India)",
                      href: "/reports/legal-notice-outcomes-study",
                      desc: "Data-backed pre-litigation settlement velocity and response benchmarks by dispute type.",
                    },
                    {
                      tag: "Interactive Tool",
                      title: "MSME 3x RBI Delayed Payment Calculator",
                      href: "/tools/msme-delayed-payment-interest-calculator",
                      desc: "Compute exact monthly compounded MSMED s.16 penal interest for Udyam invoices.",
                    },
                    {
                      tag: "Interactive Tool",
                      title: "Section 25 e-NACH Bounce Deadline Calculator",
                      href: "/tools/section-25-nach-bounce-limitation-calculator",
                      desc: "Track 30-day NPCI return memo notice cut-offs and Magistrate filing windows.",
                    },
                    {
                      tag: "Notice Template",
                      title: "Section 43B(h) Tax-Disallowance & Demand Pack",
                      href: "/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice",
                      desc: "2-stage CFO tax-audit advisory plus formal Advocate MSMED s.16 demand notice.",
                    },
                    {
                      tag: "Notice Template",
                      title: "Bank Loan Recall & Guarantee Invocation Notice",
                      href: "/templates/bank-loan-recall-cum-guarantee-invocation-notice",
                      desc: "RBI Penal-Charge compliant pre-DRT loan recall and s.126/128 guarantee notice.",
                    },
                    {
                      tag: "Statutory Guide",
                      title: "Order XXXVII CPC Summary Suit Guide",
                      href: "/law/order-37-summary-suit-money-recovery",
                      desc: "Fast-track commercial decree procedure barring frivolous debtor defences.",
                    },
                  ].map((card) => (
                    <Link
                      key={card.href}
                      href={card.href}
                      className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                        {card.tag}
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1.5">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions: Enterprise &amp; B2B Debt Recovery
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                    >
                      <summary className="list-none flex items-center justify-between gap-3 cursor-pointer font-bold text-sm sm:text-base text-slate-900">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Official Statutory Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Primary Statutory Authorities &amp; Official Portals
                  </h2>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-700 hover:text-[#DC2626] hover:underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                  Reviewed by <strong>Anuj Anand Malik</strong> (Advocate &amp; Founder, AMA Legal
                  Solutions) for statutory accuracy across Indian commercial, banking, and
                  insolvency law.
                </p>
              </section>
            </div>
          </div>
        </main>

        <RelatedRecoveryGuides currentPath={PAGE_URL} cluster="commercialB2B" />
      </div>
    </>
  );
}
