import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BuildersHubTableOfContents from "./BuildersHubTableOfContents";
import BuildersHubScenarioTabs from "./BuildersHubScenarioTabs";
import BuildersHubCTA from "./BuildersHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/builders-commercial-landlords-coworking-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Builders, Landlords & Co-Working Debt Recovery India";
const PAGE_DESCRIPTION =
  "Recover RERA s.19 allottee defaults, commercial lock-in rent, CAM & HVAC arrears, unpaid 194-I TDS, and co-working seat defaults across India.";
const H1_TEXT =
  "Institutional Receivables & Lease Recovery for Real Estate Promoters, Grade-A Landlords, Malls, Warehouses & Co-Working Operators";

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
  archetype: "L1" | "G1" | "P1";
  archetypeLabel: string;
  track: "promoters" | "leasing" | "facilities" | "templates";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_08_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-102",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "promoters",
    title: "Promoter Rights Under RERA s.19(6), s.19(7) & s.11(5)",
    url: "/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee",
    statute: "RERA 2016 s.19(6), s.19(7) & s.11(5)",
    summary:
      "Enforce SBI MCLR + 2% delayed interest on construction-linked slabs and execute RERA-compliant registered unit cancellations.",
  },
  {
    id: "B2B-109",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "promoters",
    title: "Post-OC Allottee Possession, Holding & IFMS Corpus Recovery",
    url: "/builder-society-handover-ifms-corpus-maintenance-arrears-allottee-recovery",
    statute: "RERA 2016 s.19(10) & s.19(6)",
    summary:
      "Enforce the mandatory 2-month post-OC possession duty against investor-allottees stalling registration and monthly maintenance.",
  },
  {
    id: "B2B-110",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "promoters",
    title: "Joint Development Agreement (JDA) Revenue-Share & s.9 Freezes",
    url: "/joint-development-agreement-jda-revenue-share-default-recovery",
    statute: "Commercial Courts s.2(1)(c)(vii)/(xi), RERA s.4(2)(l)(D) & s.9",
    summary:
      "Audit designated 70% RERA escrow waterfalls and secure Section 9 interim injunctions over unsold co-developer inventory.",
  },
  {
    id: "B2B-103",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "leasing",
    title: "Commercial Tenant Mid-Lock-In Breach: Rent & CapEx Recovery",
    url: "/commercial-lease-lock-in-period-breach-unexpired-rent-recovery",
    statute: "Indian Contract Act s.74 & Tower Vision / Deepak Chopra",
    summary:
      "Survive mitigation defenses by documenting actual vacancy lag, unamortized custom fit-outs, brokerage, and rent-free clawbacks.",
  },
  {
    id: "B2B-108",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "leasing",
    title: "Section 106 TPA Termination, Mesne Profits & Vidya Drolia",
    url: "/commercial-property-section-106-termination-mesne-profits-suit-guide",
    statute: "TPA s.106, CPC Order XX Rule 12 & Vidya Drolia (SC)",
    summary:
      "Serve 15-day commercial lease termination notices, claim double-rent holdover mesne profits, and invoke fast-track arbitration.",
  },
  {
    id: "B2B-107",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "leasing",
    title: "Tenant Deducted 10% Rent TDS (194-I) Without 26AS Deposit",
    url: "/commercial-tenant-deducted-tds-194i-not-deposited-form-26as-recovery",
    statute: "Income Tax Act s.194-I, s.205, s.271C & s.276B",
    summary:
      "Shield landlords under Yashpal Sahni / s.205 and compel 7-day challan compliance via CIT (TDS) prosecution warnings.",
  },
  {
    id: "B2B-104",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "facilities",
    title: "Co-Working & Managed-Office Enterprise Seat Default Playbook",
    url: "/coworking-managed-office-enterprise-seat-lock-in-default-recovery",
    statute: "Indian Easements Act s.52–64 & Order XXXVII CPC",
    summary:
      "Enforce revocable license revocation, lawful RFID card suspension, abandoned equipment notices, and bespoke CapEx recovery.",
  },
  {
    id: "B2B-105",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "facilities",
    title: "Mall, IT Park & Plaza CAM, HVAC & DG Power Arrears Recovery",
    url: "/commercial-it-park-mall-cam-common-area-maintenance-arrears-recovery",
    statute: "State Apartment Ownership Acts & Tripartite Covenants",
    summary:
      "Recover unpaid CAM and central chiller bills from locked investor shops and anchor tenants using lawful service cutoffs.",
  },
  {
    id: "B2B-106",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "facilities",
    title: "Warehouse & Factory Shed Rent, VDF Floor & PCB Cleanup",
    url: "/industrial-warehouse-3pl-shed-lease-rent-dilapidation-recovery",
    statute: "CPC Order XV-A, TPA s.108(m) & Commercial Courts s.2(1)(c)(vii)",
    summary:
      "Force court rent deposits under Order XV-A CPC while recovering FM2/VDF floor dilapidation, HT DISCOM dues, and PCB waste.",
  },
  {
    id: "B2B-111",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "facilities",
    title: "Mall & Food-Court MMG Rent & Tenant UPI/POS Diversion",
    url: "/retail-mall-revenue-share-minimum-guarantee-pos-underreporting-recovery",
    statute: "Commercial Audit Covenants, Easements Act & Order XXXVII",
    summary:
      "Audit off-POS personal UPI QR code diversions in retail/F&B outlets and enforce Minimum Monthly Guarantee arrears.",
  },
  {
    id: "B2B-112",
    archetype: "P1",
    archetypeLabel: "P1 Notice Template",
    track: "templates",
    title: "Commercial Lease s.106 Termination, Lock-In & 194-I Template",
    url: "/templates/commercial-lease-lock-in-breach-section-106-termination-notice",
    statute: "TPA s.106, IT Act s.194-I/205, Contract s.74 & Order XV-A",
    summary:
      "Advocate-vetted commercial notice format with 18% GST rent ledger, Form 26AS TDS schedule, CAM/DG arrears & fit-out clawback.",
  },
];

const SPOKE_TRACKS = [
  {
    key: "promoters",
    heading: "Track A: RERA Promoters, Post-OC Holding & JDA Landowners",
    badgeClass: "bg-red-50 border-red-200 text-[#DC2626]",
    items: IND_08_SPOKES.filter((s) => s.track === "promoters"),
  },
  {
    key: "leasing",
    heading: "Track B: Commercial Lease Lock-In, s.106 Termination & 194-I TDS",
    badgeClass: "bg-emerald-50 border-emerald-200 text-emerald-700",
    items: IND_08_SPOKES.filter((s) => s.track === "leasing"),
  },
  {
    key: "facilities",
    heading: "Track C: Co-Working Licenses, Mall CAM/MMG & Grade-A Warehouses",
    badgeClass: "bg-amber-50 border-amber-200 text-amber-800",
    items: IND_08_SPOKES.filter((s) => s.track === "facilities"),
  },
  {
    key: "templates",
    heading: "Track D: Advocate-Drafted Commercial Lease & Lock-In Notice Template",
    badgeClass: "bg-slate-100 border-slate-200 text-slate-800",
    items: IND_08_SPOKES.filter((s) => s.track === "templates"),
  },
];

const ESCALATION_MATRIX_ROWS = [
  {
    assetFormat: "RERA Residential / Commercial Allottee",
    ticket: "₹2L – ₹3Cr+",
    trigger: "Slab Demand > 30d / Post-OC 60d",
    primaryForum: "RERA s.19(6)–(7) Cure Notice + s.11(5) Cancellation / Promoter Complaint",
    statutoryGuardrail:
      "Attach Architect Stage Certificate + charge exact SBI MCLR + 2% before cancelling",
  },
  {
    assetFormat: "Grade-A Office & High-Street Lease",
    ticket: "₹5L – ₹5Cr+",
    trigger: "Rent Default / Mid-Lock-In Exit",
    primaryForum: "TPA s.106 (15d) + Commercial Court s.2(1)(c)(vii) / Vidya Drolia Arbitration",
    statutoryGuardrail:
      "Itemize actual vacancy months, CapEx amortization & rent-free clawback under s.74",
  },
  {
    assetFormat: "Co-Working & Managed Office Seats",
    ticket: "₹1L – ₹1.5Cr",
    trigger: "2 Invoices Overdue / Abandonment",
    primaryForum: "Easements Act s.52–64 License Revocation + RFID Cut + Order XXXVII CPC",
    statutoryGuardrail:
      "Issue witnessed video-logged Abandoned Goods Inventory Notice before clearing cabins",
  },
  {
    assetFormat: "Shopping Mall, IT Park & Food Court",
    ticket: "₹1.5L – ₹2Cr+",
    trigger: "CAM/HVAC Arrears / Off-POS QR",
    primaryForum: "Tripartite Facility Notice + Lawful Chiller/DG Cutoff + POS Audit",
    statutoryGuardrail:
      "Vacant investor units remain liable for base CAM/sinking fund under Apartment Acts",
  },
  {
    assetFormat: "Industrial Warehouse & 3PL Shed",
    ticket: "₹5L – ₹3Cr+",
    trigger: "Rent Holdover / VDF Floor Damage",
    primaryForum: "CPC Order XV-A Deposit Motion + TPA s.108(m) Restoration + Mesne Profits",
    statutoryGuardrail:
      "Execute Joint Dilapidation Survey covering FM2/VDF slabs, HT power & PCB waste",
  },
  {
    assetFormat: "JDA Landowner vs Co-Developer",
    ticket: "₹25L – ₹5Cr+",
    trigger: "Escrow Diversion / Area Shortfall",
    primaryForum: "Arbitration s.9 Inventory Freeze + RERA s.4(2)(l)(D) Designated Account Audit",
    statutoryGuardrail:
      "Commercial Courts Act s.2(1)(c)(xi) covers JV/JDA property agreements directly",
  },
];

const JUDICIAL_MANDATES = [
  {
    title: "Commercial Leases Outside Rent Control Are Arbitrable",
    citation: "Vidya Drolia v. Durga Trading Corporation (Supreme Court 3-Judge Bench, 2021)",
    holding:
      "Overruling Himangni Enterprises, the Supreme Court held that landlord-tenant disputes governed by the Transfer of Property Act, 1882 (and not protected by special Rent Control eviction bars) are fully arbitrable. Institutional landlords and REITs can combine 15-day Section 106 notices with fast-track arbitration and Section 9 interim asset freezes.",
    operationalRule:
      "Draft commercial lease dispute clauses with neutral institutional arbitration rather than relying on outdated civil court assumptions.",
  },
  {
    title: "Lock-In Rent Recovery Requires Proof of Mitigation & Unamortized CapEx",
    citation: "Indian Contract Act, 1872 s.74 & Delhi/Bombay HC Lock-In Precedents (Tower Vision / Deepak Chopra)",
    holding:
      "High Courts refuse automatic windfall decrees for the full balance of an unexpired 36-month lock-in if the landlord re-lets the office immediately at equal or higher rent. However, lessors recover 100% of documented actual vacancy lag, unamortized custom fit-out CapEx, brokerage, and rent-free period clawbacks.",
    operationalRule:
      "Attach a line-by-line CapEx amortization schedule and re-marketing chronology inside the very first legal notice.",
  },
  {
    title: "Section 205 Bars Direct Tax Demand Against Landlord When 194-I TDS Is Deducted",
    citation: "Income Tax Act, 1961 s.194-I, s.205, s.271C/276B & Yashpal Sahni / CBDT Circular",
    holding:
      "When a corporate tenant deducts 10% TDS from monthly rent—paying only 90%—but fails to deposit it with the Government, Section 205 bars the Income Tax Department from recovering that TDS directly from the landlord. Simultaneously, the defaulting corporate tenant and its principal officers face Section 271C penalties and Section 276B prosecution.",
    operationalRule:
      "Serve a structured 194-I TDS mismatch notice threatening formal intimation to the Commissioner of Income Tax (TDS) within 7 days.",
  },
  {
    title: "Promoter Cancellations Must Follow Agreement Cure Timelines & s.19(6)–(10) Discipline",
    citation: "RERA Act, 2016 s.11(5), s.19(6), s.19(7) & s.19(10)",
    holding:
      "Section 19(6) imposes a binding statutory duty on every allottee to pay construction milestones and maintenance/registration dues on time, while Section 19(7) mandates SBI MCLR + 2% interest on delays and Section 19(10) mandates possession within 2 months of OC. Yet under Section 11(5), RERA Authorities strike down builder cancellations executed without strict Agreement-compliant registered cure notices.",
    operationalRule:
      "Replace informal CRM emails with auditable, Architect-stage-backed Speed Post RPAD cure notices across defaulting towers.",
  },
];

const LIVE_SEED_LINKS = [
  {
    label: "Legal Notice to Tenant for Unpaid Rent & Eviction",
    href: "/legal-notice-to-tenant-for-unpaid-rent-eviction",
    note: "Foundational Section 106 TPA notice guide covering rent arrears, mesne profits, and termination service.",
  },
  {
    label: "Society Maintenance Recovery Notice Format",
    href: "/templates/society-maintenance-recovery-notice",
    note: "Live 15-day maintenance arrears recovery draft for RWAs, condominium boards, and facility teams.",
  },
  {
    label: "Recover Money from Tenant Who Damaged Property",
    href: "/send-a-legal-notice/recover-money-from-tenant-who-damaged-property",
    note: "Pre-litigation notice workflow for dilapidation, fixture destruction, and security deposit set-off shortfalls.",
  },
  {
    label: "Bulk Recovery Cases All-in-One CSV Solutions",
    href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
    note: "Enterprise batch onboarding for 10 to 10,000+ defaulting allottees, retail tenants, or co-working accounts.",
  },
  {
    label: "RERA Refund & Statutory MCLR + 2% Interest Calculator",
    href: "/tools/rera-refund-interest-calculator",
    note: "Verify SBI highest MCLR + 2% statutory interest compounding rules applicable symmetrically under RERA.",
  },
  {
    label: "MSME Delayed Payment Interest Calculator (3x RBI Rate)",
    href: "/tools/msme-delayed-payment-interest-calculator",
    note: "Applicable where registered MSME facility, fit-out, or co-working service vendors claim unpaid B2B invoices.",
  },
  {
    label: "Online Dispute Resolution (ODR) India Platform",
    href: "/online-dispute-resolution-india",
    note: "Institutional neutral arbitration and digital settlement workflow for commercial lease & B2B disputes.",
  },
  {
    label: "IND-01 Bank Loan & NPA Recovery Hub",
    href: "/industries/banks-loan-recovery",
    note: "Sibling institutional hub for project-finance lenders, HFC construction loans, and SARFAESI recovery.",
  },
];

const FAQS = [
  {
    question:
      "Can a real estate builder cancel an allotment if an investor-allottee stops paying construction-linked RERA milestones?",
    answer:
      "Yes, under Section 11(5) read with Section 19(6) and Section 19(7) of the RERA Act, 2016, a promoter may charge prescribed interest (SBI MCLR + 2%) and cancel an allotment strictly in accordance with the registered Agreement for Sale. However, State RERA Authorities routinely reverse cancellations where CRM teams relied on informal emails or failed to serve a registered due-process cure notice attaching the Architect Stage Certificate.",
  },
  {
    question:
      "Can a commercial landlord recover the full unexpired 3-year lock-in rent if a corporate tenant vacates early?",
    answer:
      "Under Section 74 of the Indian Contract Act, 1872 and Delhi/Bombay High Court lock-in rulings (including Tower Vision and Deepak Chopra), courts disallow automatic windfall recovery if the landlord re-lets the premises immediately at equal or higher rent. Landlords can, however, recover actual documented vacancy months during re-marketing, unamortized custom fit-out CapEx, brokerage, and clawed-back rent-free concessions if itemized cleanly from the initial legal notice.",
  },
  {
    question:
      "How can co-working and managed-office operators evict a defaulting startup without a multi-year rent suit?",
    answer:
      "Co-working and managed-office arrangements structured as B2B Membership or License Service Agreements fall under Sections 52–64 of the Indian Easements Act, 1882 rather than tenancy or Rent Control statutes. Because the operator retains legal possession, a properly drafted license-revocation notice enables lawful RFID/biometric access suspension, witnessed video-logged inventorying of abandoned IT equipment, and Order XXXVII CPC recovery of seat lock-in and bespoke CapEx arrears.",
  },
  {
    question:
      "What can a landlord do if a commercial tenant deducts 10% TDS under Section 194-I but fails to deposit it in Form 26AS?",
    answer:
      "Under Section 205 of the Income Tax Act, 1961 (and CBDT circulars following Yashpal Sahni), the tax department cannot enforce direct recovery against a landlord once rent TDS deduction is evidenced by rent receipts, bank credits, and lease terms. To compel the defaulting tenant to deposit the withheld 10% immediately, serve an Advocate Notice warning of formal intimation to the Jurisdictional Commissioner of Income Tax (TDS) under Sections 271C and 276B.",
  },
  {
    question:
      "Can mall or IT-park facility managers recover CAM charges when an investor keeps a commercial shop or office locked and vacant?",
    answer:
      "Yes. Under State Apartment Ownership Acts, RERA commercial project covenants, and Tripartite Facility Management Agreements, liability for base Common Area Maintenance (CAM), central chiller/HVAC fixed charges, DG infrastructure, and sinking funds attaches to unit ownership/allotment—not physical occupancy. Bulk advocate notices paired with lawful common-utility restriction clauses drive rapid settlement without starving building operations.",
  },
  {
    question:
      "Are commercial landlord-tenant disputes arbitrable in India after the Supreme Court ruling in Vidya Drolia?",
    answer:
      "Yes. In Vidya Drolia v. Durga Trading Corporation (2021), a 3-Judge Bench of the Supreme Court overruled Himangni Enterprises and confirmed that landlord-tenant disputes governed by the Transfer of Property Act, 1882—outside special statutory Rent Control eviction bars—are fully arbitrable. Commercial landlords can combine 15-day Section 106 termination notices with Section 9 interim protection and fast-track commercial arbitration.",
  },
  {
    question:
      "How does Order XV-A CPC help warehouse and commercial landlords against tenants who stop paying rent during court proceedings?",
    answer:
      "Where applicable in commercial eviction and mesne-profit suits (such as Delhi and Maharashtra commercial courts), Order XV-A of the Code of Civil Procedure empowers the court to direct the occupying tenant to deposit admitted arrears and ongoing monthly market rent pendente lite. Failure to comply entitles the landlord to seek striking off of the tenant's defense—preventing years of rent-free occupation.",
  },
];

const OFFICIAL_SOURCES = [
  {
    label: "India Code — Real Estate (Regulation and Development) Act, 2016 (Sections 11, 19 & 4)",
    url: "https://www.indiacode.nic.in/",
  },
  {
    label: "India Code — Transfer of Property Act, 1882 (Sections 106 & 108) & Indian Easements Act, 1882",
    url: "https://www.indiacode.nic.in/",
  },
  {
    label: "India Code — Commercial Courts Act, 2015 (Section 2(1)(c)(vii) & Section 12A)",
    url: "https://www.indiacode.nic.in/",
  },
  {
    label: "Income Tax Department India — Section 194-I, Section 205 & Section 276B TDS Compliance",
    url: "https://www.incometaxindia.gov.in/",
  },
  {
    label: "MahaRERA / State RERA Portals — Promoter & Allottee Statutory Compliance Rules",
    url: "https://maharera.maharashtra.gov.in/",
  },
  {
    label: "India Code — Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Record Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    label: "Supreme Court of India — Commercial Arbitration & Civil Justice Jurisprudence",
    url: "https://www.sci.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType:
    "Institutional Real Estate Promoter, Commercial Lease, Warehouse & Co-Working Legal Recovery",
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
      "Real Estate Developers, Commercial IT-Park & Mall Landlords, REITs, Warehouse Lessors, Co-Working Operators & RWA/Condo Associations",
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
  name: "IND-08 Real Estate Promoters, Commercial Landlords & Co-Working Spokes",
  numberOfItems: IND_08_SPOKES.length,
  itemListElement: IND_08_SPOKES.map((spoke, index) => ({
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
      name: "Builders, Landlords & Co-Working Recovery",
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

export default function BuildersCommercialLandlordsCoworkingRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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

      {/* Dark Gradient Institutional Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-08 Pillar Hub</span>
            <span>•</span>
            <span>Promoters, Commercial Lessors &amp; Co-Working</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* 40-60 Word Executive Creditor Summary + Inline Directory Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            LegalRecovery.in equips real estate promoters, REITs, Grade-A landlords, warehouses, and
            co-working chains to enforce{" "}
            <strong className="text-white">RERA s.19(6)–(10)</strong> allottee dues,{" "}
            <strong className="text-white">s.106 TPA</strong> lock-in &amp; mesne profits, CAM/HVAC
            arrears, and <strong className="text-white">s.194-I TDS</strong> compliance—integrated
            with our{" "}
            <Link
              href="/services"
              className="text-red-300 underline decoration-red-400/60 hover:text-white"
            >
              institutional legal recovery services
            </Link>{" "}
            and bulk CSV dispatch engine.
          </div>

          {/* 4-Card Key Statutory Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-5">
            <div>
              <p className="text-base sm:text-xl font-black text-slate-100">SBI MCLR + 2%</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                RERA s.19(7) Allottee Delay Interest
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-emerald-400">2 Months Post-OC</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                RERA s.19(10) Possession &amp; CAM Clock
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-amber-400">15-Day s.106 TPA</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Commercial Termination + Mesne Profits
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-red-400">s.205 / s.276B</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                10% Rent TDS 194-I Enforcement Shield
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <p>
              Legal Architecture Reviewed by{" "}
              <Link
                href="/authors/anuj-anand-malik"
                className="text-slate-200 font-semibold underline decoration-slate-500 hover:text-white"
              >
                Anuj Anand Malik, Advocate &amp; Founder (AMA Legal Solutions)
              </Link>
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/templates/commercial-lease-lock-in-breach-section-106-termination-notice"
                className="px-3 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold transition-colors"
              >
                s.106 Notice Template →
              </Link>
              <a
                href="#dual-track-cta"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
              >
                ₹999 Live Test / CSV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Builders, Landlords & Co-Working", href: PAGE_URL },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <BuildersHubTableOfContents />

          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Institutional Positioning */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Why Builders, Commercial Lessors &amp; Co-Working Teams Lose Recovery
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s real estate and commercial leasing ecosystem, asset owners,
                  developers, and facility operators routinely lose crores in recoverable cash flow
                  not because the law lacks teeth, but because collections are executed with
                  informal CRM reminders or residential eviction templates. When an investor-allottee
                  stops paying construction-linked slabs—or stalls post-Occupancy Certificate (OC)
                  handover to dodge monthly maintenance—sending casual emails without a formal{" "}
                  <strong className="text-slate-900">RERA Section 19(6) &amp; 11(5)</strong>{" "}
                  registered cure notice triggers adverse restoration orders before State RERA
                  Benches.
                </p>
                <p>
                  Commercial office lessors, shopping malls, REITs, industrial warehouse parks, and
                  managed co-working operators face equally distinct creditor traps. Startups vacate
                  36-month lock-in leases after 10 months despite ₹40 Lakh+ in bespoke landlord
                  fit-out CapEx; corporate tenants pay 90% rent while pocketing the 10%{" "}
                  <strong className="text-slate-900">Section 194-I TDS</strong> without depositing
                  it into Form 26AS; retail kiosks route food-court billing through personal UPI QR
                  codes to evade revenue-share rent; and flex-space clients abandon custom cabins
                  leaving unpaid GST invoices and IT assets behind.
                </p>
                <p>
                  Because commercial leases, JDA revenue waterfalls, and warehouse sheds qualify as
                  commercial disputes under{" "}
                  <strong className="text-slate-900">
                    Section 2(1)(c)(vii) of the Commercial Courts Act, 2015
                  </strong>
                  —and non-Rent-Control leases are arbitrable post-<em>Vidya Drolia</em>—property
                  creditors hold formidable statutory leverage when notices are drafted accurately on
                  day one. Review our dedicated{" "}
                  <Link
                    href="/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Promoter RERA s.19(6)–(7) enforcement guide
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/commercial-lease-lock-in-period-breach-unexpired-rent-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Commercial Lock-In &amp; Fit-Out CapEx playbook
                  </Link>{" "}
                  below.
                </p>
              </div>
            </section>

            {/* Section 2: 6-Format Escalation Matrix */}
            <section
              id="heading-escalation-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Commercial Asset &amp; Promoter Escalation Matrix Across 6 Formats
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Treating a co-working license like a tenanted shop, or cancelling a RERA allotment
                without an Architect Stage Certificate, invites immediate judicial stays. Match each
                asset class to its governing statutory forum and evidentiary trigger below:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold border-b border-slate-800">Asset / Creditor Format</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">Ticket Band</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">Default Trigger</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">Primary Legal Track</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">Mandatory Safeguard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {ESCALATION_MATRIX_ROWS.map((row) => (
                      <tr key={row.assetFormat} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 align-top">
                          {row.assetFormat}
                        </td>
                        <td className="p-3.5 font-semibold text-[#DC2626] whitespace-nowrap align-top">
                          {row.ticket}
                        </td>
                        <td className="p-3.5 text-slate-600 whitespace-nowrap align-top">
                          {row.trigger}
                        </td>
                        <td className="p-3.5 text-slate-800 font-medium align-top">
                          {row.primaryForum}
                        </td>
                        <td className="p-3.5 text-slate-600 align-top">
                          {row.statutoryGuardrail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: 4-Stage Property, Lease & License Enforcement Pipeline (SVG + Mobile Cards) */}
            <section
              id="heading-pipeline-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  4-Stage Property, Lease &amp; License Enforcement Pipeline
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                From single high-value Commercial Court lease disputes to 500-unit RERA milestone
                cleanups, every account moves through four structured stages designed to establish
                indisputable statutory proof before a single court fee is paid.
              </p>

              {/* Desktop Hand-Authored SVG Pipeline Diagram */}
              <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-800 bg-[#0F172A] p-4">
                <svg
                  viewBox="0 0 920 310"
                  width={920}
                  height={310}
                  role="img"
                  aria-label="Four-stage real estate promoter, commercial landlord and co-working legal recovery workflow"
                  className="w-full h-auto"
                >
                  <rect x="0" y="0" width="920" height="310" rx="14" fill="#0F172A" />

                  <text
                    x="30"
                    y="36"
                    fill="#F87171"
                    fontSize="12"
                    fontWeight="bold"
                    letterSpacing="1.5"
                  >
                    IND-08 REAL ESTATE &amp; LEASING PIPELINE: LEDGER AUDIT TO EXECUTION
                  </text>

                  {/* Stage 1 */}
                  <rect x="30" y="64" width="195" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="30" y="64" width="195" height="32" rx="12" fill="#DC2626" />
                  <text x="127" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    01. CONTRACT &amp; LEDGER AUDIT
                  </text>
                  <text x="44" y="122" fill="#E2E8F0" fontSize="12" fontWeight="bold">• Classify Tenure Mode</text>
                  <text x="44" y="148" fill="#CBD5E1" fontSize="11">RERA Agreement vs TPA Lease</text>
                  <text x="44" y="168" fill="#CBD5E1" fontSize="11">vs Easements s.52 License</text>
                  <text x="44" y="194" fill="#34D399" fontSize="11" fontWeight="bold">Verify Statutory Annexures</text>
                  <text x="44" y="214" fill="#94A3B8" fontSize="10">Architect Cert / 26AS / CAM</text>
                  <text x="44" y="236" fill="#94A3B8" fontSize="10">CapEx Amortization &amp; GST</text>

                  <line x1="225" y1="159" x2="255" y2="159" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="253,153 265,159 253,165" fill="#DC2626" />

                  {/* Stage 2 */}
                  <rect x="265" y="64" width="195" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="265" y="64" width="195" height="32" rx="12" fill="#334155" />
                  <text x="362" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    02. ADVOCATE NOTICE DRAFT
                  </text>
                  <text x="279" y="122" fill="#E2E8F0" fontSize="12" fontWeight="bold">• Precision Statutory Hook</text>
                  <text x="279" y="148" fill="#CBD5E1" fontSize="11">RERA s.19(6)-(7) / s.11(5)</text>
                  <text x="279" y="168" fill="#CBD5E1" fontSize="11">TPA s.106 15-Day Termination</text>
                  <text x="279" y="194" fill="#FBBF24" fontSize="11" fontWeight="bold">194-I TDS / CIT Warning</text>
                  <text x="279" y="214" fill="#94A3B8" fontSize="10">Mesne Profits &amp; s.74 CapEx</text>
                  <text x="279" y="236" fill="#94A3B8" fontSize="10">RFID / CAM Cutoff Notice</text>

                  <line x1="460" y1="159" x2="490" y2="159" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="488,153 500,159 488,165" fill="#DC2626" />

                  {/* Stage 3 */}
                  <rect x="500" y="64" width="195" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="500" y="64" width="195" height="32" rx="12" fill="#059669" />
                  <text x="597" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    03. TRI-CHANNEL SERVICE
                  </text>
                  <text x="514" y="122" fill="#E2E8F0" fontSize="12" fontWeight="bold">• Verifiable Delivery</text>
                  <text x="514" y="148" fill="#CBD5E1" fontSize="11">Registered Speed Post RPAD</text>
                  <text x="514" y="168" fill="#CBD5E1" fontSize="11">Official Lease Email + PDF</text>
                  <text x="514" y="194" fill="#34D399" fontSize="11" fontWeight="bold">WhatsApp Business Notice</text>
                  <text x="514" y="214" fill="#94A3B8" fontSize="10">BSA 2023 s.63 Hash Cert</text>
                  <text x="514" y="236" fill="#94A3B8" fontSize="10">Affixation / RPAD Receipt</text>

                  <line x1="695" y1="159" x2="725" y2="159" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="723,153 735,159 723,165" fill="#DC2626" />

                  {/* Stage 4 */}
                  <rect x="735" y="64" width="155" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="735" y="64" width="155" height="32" rx="12" fill="#B45309" />
                  <text x="812" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    04. FORUM ESCALATION
                  </text>
                  <text x="747" y="122" fill="#34D399" fontSize="11" fontWeight="bold">✓ Cure / Deposit Set-Off</text>
                  <text x="747" y="150" fill="#CBD5E1" fontSize="11">• Commercial Court s.12A</text>
                  <text x="747" y="176" fill="#CBD5E1" fontSize="11">• Order XV-A / O.37 Suit</text>
                  <text x="747" y="202" fill="#CBD5E1" fontSize="11">• Vidya Drolia Arb / s.9</text>
                  <text x="747" y="228" fill="#F87171" fontSize="10" fontWeight="bold">• Promoter RERA / CIT TDS</text>

                  <text x="460" y="288" textAnchor="middle" fill="#94A3B8" fontSize="11">
                    Separate SPV / RERA Project / Facility Co Board Resolutions stored cleanly in the Representee Vault
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Pipeline Cards */}
              <div className="md:hidden grid grid-cols-1 gap-3">
                {[
                  {
                    step: "01. Contract & Ledger Audit",
                    text: "Separate RERA allotments, registered TPA commercial leases, and Easements s.52 co-working licenses while validating Architect Stage Certificates, Form 26AS gaps, and CapEx amortization.",
                  },
                  {
                    step: "02. Advocate Notice Drafting",
                    text: "Emit precise statutory demands citing RERA s.19(6)–(7)/11(5), TPA s.106 termination + mesne profits, s.276B TDS warnings, or RFID/CAM cutoff clauses.",
                  },
                  {
                    step: "03. Tri-Channel Dispatch",
                    text: "Serve simultaneously via India Post Speed Post RPAD, contract-designated Email, and WhatsApp Business API backed by BSA 2023 s.63 server certificates.",
                  },
                  {
                    step: "04. Forum Escalation & Execution",
                    text: "Escalate uncured accounts to Commercial Courts s.2(1)(c)(vii), Order XV-A rent deposits, Vidya Drolia arbitration, s.9 inventory freezes, or Promoter RERA complaints.",
                  },
                ].map((stage) => (
                  <div
                    key={stage.step}
                    className="rounded-xl bg-slate-900 text-white p-4 border border-slate-800"
                  >
                    <p className="text-xs font-extrabold text-red-400 mb-1">{stage.step}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{stage.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Vertical Scenario Explorer */}
            <section
              id="heading-vertical-playbooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Explore Real Estate, Mall, Warehouse &amp; Flex-Space Playbooks
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Switch between the four core property creditor segments below to inspect statutory
                authorities, operational workflows, and legal guardrails tailored to your asset
                portfolio.
              </p>

              <BuildersHubScenarioTabs />
            </section>

            {/* Section 5: RERA Cure Notices, Commercial Court s.2(1)(c)(vii) & Bulk CSV */}
            <section
              id="heading-rera-commercial-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  RERA Cure Notices, Commercial Court s.2(1)(c)(vii) &amp; Bulk CSV
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                <p>
                  Property owners and developers frequently operate across multiple SPVs, RERA
                  registration numbers, and Facility Management entities. Issuing an unsigned ERP
                  email reminder or sending an ambiguous tenant termination letter destroys
                  litigation leverage. LegalRecovery.in pairs enrolled advocate drafting with a
                  centralized{" "}
                  <Link
                    href="/user/representees"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Representee Mandate Vault
                  </Link>{" "}
                  so CRM, Leasing, and Mall Operations teams can run single-unit tests or 500-unit
                  bulk dispatches cleanly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-2">
                    Developer CRM &amp; Post-OC Bulk Desk
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-2">
                    200+ Defaulting Units Cleared Without s.11(5) Reversals
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Upload tower-wise allottee arrears on{" "}
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="text-[#DC2626] font-semibold underline"
                    >
                      /bulk-recovery-cases-all-in-one-affordable-solutions
                    </Link>{" "}
                    mapping Agreement date, milestone slab, Architect Stage Certificate ref, SBI MCLR
                    + 2% accrued interest, and post-OC 2-month statutory holding dates.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">
                    Commercial Court &amp; Mall CAM Ledger Readiness
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-2">
                    GST Rent, CAM/HVAC, 194-I TDS &amp; Fit-Out Schedules
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Every notice generated for commercial offices, warehouses, or co-working spaces
                    segregates 18% GST rent arrears, central chiller/DG meter readings, Form 26AS
                    194-I TDS defaults, and unamortized fit-out CapEx—making your file ready for
                    Section 12A Commercial Court mediation or{" "}
                    <Link
                      href="/online-dispute-resolution-india"
                      className="text-emerald-700 font-semibold underline"
                    >
                      institutional ODR
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Dual-Track B2B Conversion Funnel */}
            <BuildersHubCTA />

            {/* Section 6: Key Supreme Court, High Court & CBDT Mandates */}
            <section
              id="heading-judicial-mandates"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Key Supreme Court, High Court &amp; CBDT Rules for Property Creditors
                </h2>
              </div>

              <div className="space-y-4">
                {JUDICIAL_MANDATES.map((item) => (
                  <div
                    key={item.title}
                    className="relative pl-5 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]"
                    />
                    <p className="text-sm sm:text-base font-extrabold text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-xs font-bold text-[#DC2626] mt-0.5 mb-2">{item.citation}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      {item.holding}
                    </p>
                    <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5 inline-block">
                      Creditor Action Rule: {item.operationalRule}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Worked Financial & Recovery Math */}
            <section
              id="heading-worked-math"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Worked Recovery Math: ₹45L Lock-In Breach vs ₹18L RERA Milestone
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                <strong>Illustrative Statutory Quantification Model:</strong> Proper line-item
                segregation inside the initial advocate notice separates recoverable losses from
                claims courts reject as windfall penalties.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Scenario A */}
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold mb-2">
                    Scenario A • Commercial Office Lock-In Breach
                  </span>
                  <p className="text-base font-extrabold text-slate-900 mb-2">
                    ₹45L Unexpired Lock-In Claim + ₹36L Custom Fit-Out CapEx
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Vulnerable Demand:</strong> Claiming a flat ₹45,00,000 for 18
                      remaining lock-in months without proving vacancy lag or fit-out spend invites
                      Section 74 disallowance once the unit is re-let.
                    </li>
                    <li>
                      <strong>IND-08 Structured Notice:</strong> Itemizes 4 months actual vacancy
                      during re-leasing (₹10,00,000), unamortized custom fit-out balance
                      (₹26,00,000), 2-month rent-free clawback (₹5,00,000), and ₹2,40,000 unpaid
                      194-I TDS—with security deposit adjusted transparently.
                    </li>
                    <li className="text-emerald-800 font-semibold">
                      Legal Leverage: Survives judicial mitigation review while giving Commercial
                      Courts and Vidya Drolia arbitrators a quantifiable liquidated decree base.
                    </li>
                  </ul>
                </div>

                {/* Scenario B */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold mb-2">
                    Scenario B • RERA Allottee Slab &amp; Post-OC Default
                  </span>
                  <p className="text-base font-extrabold text-slate-900 mb-2">
                    ₹18,00,000 Superstructure Milestone + 9 Months Delay
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Broken Approach:</strong> Sending an unverified CRM termination email
                      after 60 days without attaching the Architect Stage Certificate or Registered
                      Speed Post notice—causing RERA to reinstate the unit.
                    </li>
                    <li>
                      <strong>IND-08 Statutory Notice:</strong> Computes{" "}
                      <strong>RERA s.19(7) SBI MCLR + 2%</strong> delayed interest on the ₹18L slab,
                      attaches the Architect Stage Certificate, and grants the exact Agreement cure
                      period prior to valid Section 11(5) cancellation or Promoter RERA recovery.
                    </li>
                    <li className="text-amber-900 font-semibold">
                      Legal Leverage: Protects 10% earnest-money forfeiture rights and unlocks
                      post-OC s.19(10) holding and CAM collection across entire investor towers.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Complete IND-08 Hub-and-Spoke Directory (All 11 Spokes) */}
            <section
              id="heading-ind08-directory"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Complete IND-08 Directory: All 11 Spokes &amp; Notice Template
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Explore every creditor-side RERA statute commentary, commercial lease recovery
                playbook, warehouse/co-working SOP, and downloadable Section 106 notice workspace in
                the IND-08 cluster:
              </p>

              <div className="space-y-8">
                {SPOKE_TRACKS.map((track) => (
                  <div key={track.key}>
                    <p className="text-sm sm:text-base font-extrabold text-slate-900 border-b border-slate-200 pb-2 mb-4">
                      {track.heading}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {track.items.map((spoke) => (
                        <Link
                          key={spoke.id}
                          href={spoke.url}
                          className="group rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/70 hover:bg-white p-4 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span
                                className={`px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase ${track.badgeClass}`}
                              >
                                {spoke.id} • {spoke.archetypeLabel}
                              </span>
                            </div>
                            <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1.5">
                              {spoke.title}
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed mb-2">
                              {spoke.summary}
                            </p>
                          </div>
                          <p className="text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-200/80">
                            {spoke.statute}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Live Tenant, Maintenance & Bulk Recovery Cross-Links */}
            <section
              id="heading-seed-guides"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Live Tenant, Maintenance &amp; Bulk Recovery Links on LegalRecovery
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Complement the IND-08 institutional cluster above with our existing live landlord,
                society maintenance, calculator, ODR, and bulk dispatch tools:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {LIVE_SEED_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-slate-200 hover:border-slate-900 p-4 bg-slate-50 hover:bg-white transition-all block"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {item.label} →
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.note}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: Institutional FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  FAQs: RERA Builder Claims, Commercial Lock-In &amp; Flex Defaults
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="cursor-pointer list-none px-4 sm:px-5 py-4 flex items-center justify-between gap-4 font-bold text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-base font-black shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: RERA Authorities, Tax Codes & Official Portals */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  RERA Authorities, Tax Codes &amp; Commercial Court References
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {OFFICIAL_SOURCES.map((src) => (
                  <li key={src.label} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">•</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 transition-colors"
                    >
                      {src.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_URL} cluster="commercialProperty" />
    </div>
  );
}
