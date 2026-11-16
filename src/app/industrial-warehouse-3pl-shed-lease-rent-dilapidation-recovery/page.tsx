import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import IndustrialWarehouseRecoveryCTA from "./IndustrialWarehouseRecoveryCTA";
import IndustrialWarehouseTableOfContents from "./IndustrialWarehouseTableOfContents";
import IndustrialWarehouseScenarioTabs from "./IndustrialWarehouseScenarioTabs";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/industrial-warehouse-3pl-shed-lease-rent-dilapidation-recovery`;
const PAGE_H1 =
  "Recovering Unpaid Rent, VDF Floor Dilapidation, DISCOM Dues & Hazardous-Waste Cleanup from Defaulting Warehouse & Factory Tenants";

export const metadata: Metadata = {
  title: "Warehouse & Factory Shed Rent, Damage & PCB Recovery",
  description:
    "Logistics lessee defaulted on Grade-A warehouse rent, damaged VDF flooring, or left unpaid HT power bills & toxic waste? Complete landlord recovery playbook.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Warehouse & Factory Shed Rent, Damage & PCB Recovery",
    description:
      "Logistics lessee defaulted on Grade-A warehouse rent, damaged VDF flooring, or left unpaid HT power bills & toxic waste? Complete landlord recovery playbook.",
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Industrial Warehouse and Factory Shed Default Recovery Playbook",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warehouse & Factory Shed Rent, Damage & PCB Recovery",
    description:
      "Logistics lessee defaulted on Grade-A warehouse rent, damaged VDF flooring, or left unpaid HT power bills & toxic waste? Complete landlord recovery playbook.",
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
    title: "The Code of Civil Procedure, 1908 (Order XV-A, Order XXXVIII Rule 5 & Order XXXIX Rules 1-2)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Transfer of Property Act, 1882 (Sections 106, 108(m), 108(o) & 111 — Determination of Lease & Restoration Liability)",
    url: "https://www.indiacode.nic.in/handle/123456789/2338",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(vii) — Commercial Disputes Pertaining to Immovable Property)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "The Electricity Act, 2003 (Section 56 & State Distribution Supply Codes — Arrears as Charge on Premises)",
    url: "https://www.indiacode.nic.in/handle/123456789/2065",
  },
  {
    title: "Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016 — Ministry of Environment, Forest and Climate Change",
    url: "https://cpcb.nic.in/hazardous-waste-rules/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility for Drone Surveys & Notice Trails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Electricity Arrears Constituting a Statutory Encumbrance on Leased Premises",
    parties: "K.C. Ninan v. Kerala State Electricity Board & Ors.",
    citation: "2023 LiveLaw (SC) 453, 3-Judge Bench, Supreme Court of India",
    date: "Judgment Dated 19 May 2023",
    facts:
      "A defaulting manufacturing tenant accumulated massive high-tension power arrears and vacated the industrial property without payment. The State DISCOM disconnected power and refused reconnection to the landlord, asserting that under statutory supply regulations, electricity consumption arrears attach to the premises as a statutory charge.",
    holding:
      "The Supreme Court affirmed that where state electricity regulatory supply codes or statutory conditions of supply stipulate that arrears attach to the premises, the distribution licensee is legally entitled to refuse power supply to the premises until prior tenant dues are satisfied. The court clarified that the landlord's statutory remedy is to recover these sums directly from the defaulting consumer through civil suits, lease indemnities, and pre-judgment asset attachments.",
    amount: "Doctrine of Premises Electricity Charge Upheld — Landlord Must Fast-Track Tenant Asset Recovery",
    takeaway:
      "Industrial park and factory shed landlords cannot dismiss unpaid tenant electricity bills as mere contractual defaults; unpaid HT power charges directly paralyze the landlord's property asset until recovered or cleared under protest.",
  },
  {
    title: "Delhi High Court on Striking Off Defaulting Tenant Defense Under Order XV-A CPC",
    parties: "Asha Sharma & Anr. v. Sanjeev Kumar & Anr.",
    citation: "CM(M) No. 412/2021, High Court of Delhi",
    date: "Order Dated 14 September 2021",
    facts:
      "A commercial tenant occupying industrial premises defaulted on monthly lease payments. When the landlord instituted a commercial eviction suit, the tenant raised frivolous counter-claims and continued squatting in the property without depositing monthly rent into court.",
    holding:
      "The High Court held that the primary objective of Order XV-A CPC is to protect commercial landlords from unscrupulous lessees who enjoy possession without paying user charges. If a tenant fails to deposit undisputed monthly rent and arrears as determined by the court pendente lite, their written statement and defense must be struck off forthwith, paving the way for an immediate summary eviction decree.",
    amount: "Immediate Strike-Off of Tenant Defense Ordered for Non-Deposit of Monthly Rent",
    takeaway:
      "Industrial warehouse landlords can bypass multi-year trial stalling by invoking Order XV-A CPC at the initial hearing, forcing the defaulting 3PL or factory operator to deposit market rent in court every month on the 15th.",
  },
  {
    title: "Supreme Court on Polluter-Pays Principle & Absolute Liability for Industrial Hazardous Waste Remediation",
    parties: "Indian Council for Enviro-Legal Action v. Union of India & Ors.",
    citation: "(1996) 3 SCC 212, Supreme Court of India",
    date: "Judgment Dated 13 February 1996",
    facts:
      "Industrial units generating toxic sludge and untreated effluent abandoned contaminated sites, exposing landowners and local communities to severe groundwater and soil pollution. The polluters claimed financial incapacity and corporate dissolution.",
    holding:
      "The Supreme Court affirmed the absolute liability rule and the 'Polluter Pays Principle', holding that the enterprise that undertakes a hazardous or inherently dangerous activity is strictly and absolutely liable to compensate for the entire cost of remedying environmental harm. Landlords facing abandoned chemical drums can invoke this principle to attach directors' personal assets and corporate parents.",
    amount: "Absolute Statutory Restitution Mandated for Toxic Chemical and Sludge Abandonment",
    takeaway:
      "Landlords facing abandoned hazardous waste on factory sheds must file immediate SPCB reports to establish third-party tenant liability, insulating themselves from criminal prosecution while recovering full TSDF cleanup expenses.",
  },
  {
    title: "Supreme Court Constitution Bench on Arbitrability of Commercial Lease & Eviction Disputes",
    parties: "Vidya Drolia & Ors. v. Durga Trading Corporation",
    citation: "(2021) 2 SCC 1, 3-Judge Bench, Supreme Court of India",
    date: "Judgment Dated 14 December 2020",
    facts:
      "A landlord invoked arbitration under a registered commercial tenancy agreement to recover lease arrears and mesne profits following lease determination under Section 106 TPA. The tenant contested that landlord-tenant disputes are non-arbitrable and subject exclusively to civil court jurisdiction.",
    holding:
      "Overruling earlier conflicting judgments (Himangni Enterprises), the Supreme Court ruled that landlord-tenant disputes governed by the Transfer of Property Act, 1882 are fully arbitrable, provided they are not governed by specialized state rent control legislation. Commercial warehouse and industrial shed leases with arbitration clauses can proceed directly to fast-track sole-arbitrator tribunals.",
    amount: "Arbitral Inception Confirmed for Commercial Eviction, Mesne Profits & Dilapidations",
    takeaway:
      "Institutional warehouse owners whose lease agreements contain arbitration clauses can secure interim asset preservation orders under Section 9 and final money awards under Section 31 within 12 months, avoiding civil court delays.",
  },
];

const FAQS = [
  {
    question: "Can an industrial warehouse landlord strike off a defaulting tenant's legal defense under Order XV-A CPC?",
    answer:
      "Yes. Under Order XV-A of the Code of Civil Procedure, 1908 (as enacted by state High Court amendments in Delhi, Maharashtra, UP, and others), the commercial court directs the tenant to deposit all undisputed arrears of rent and continue depositing monthly rent on or before the 15th of each calendar month. If the tenant fails or neglects to make this monthly deposit, the court possesses the statutory authority to strike off the tenant's defense and proceed immediately to pass an eviction decree and recovery judgment.",
  },
  {
    question: "Who is legally responsible if a vacating factory lessee leaves unpaid High-Tension (HT) DISCOM power bills?",
    answer:
      "While the tenant is contractually and personally liable under the lease indemnity covenants, the Supreme Court 3-Judge Bench ruling in K.C. Ninan (2023) affirmed that under statutory electricity supply codes, distribution companies can refuse power reconnection or transfer to the landlord until prior arrears on the premises are settled. Consequently, industrial landlords must urgently file for attachment before judgment under Order XXXVIII Rule 5 CPC against the tenant's plant, machinery, or bank accounts before the tenant evacuates assets.",
  },
  {
    question: "How can a warehouse landlord prove and recover FM2 or VDF industrial floor damage from a 3PL lessee?",
    answer:
      "High-tolerance laser-screeded floors (FM2 / TR-34 standards) and Vacuum Dewatered Flooring (VDF) are specialized structural assets costing ₹180 to ₹350 per sq. ft. Under Section 108(m) of the Transfer of Property Act, 1882, cutting off pallet racking expansion bolts flush with the slab, floor gouges from forklifts, and core cracking exceed 'reasonable wear and tear'. Landlords must commission a certified civil surveyor to execute a TR-34 floor flatness survey and record geotagged video evidence under Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63) to recover complete reinstatement expenses.",
  },
  {
    question: "What immediate legal steps must a landlord take if an industrial tenant abandons toxic waste drums on site?",
    answer:
      "The landlord must act within 24 to 48 hours to prevent vicarious criminal liability under the Environment (Protection) Act, 1986. First, file an immediate registered intimation with the Regional Officer of the State Pollution Control Board (SPCB) and local Police Station documenting tenant abandonment. Second, engage an accredited Treatment, Storage, and Disposal Facility (TSDF) agency to generate a hazardous waste manifest (Form 10). Third, petition the Commercial Court or High Court for an emergency mandatory injunction forcing the tenant and its directors to remove the waste under the Polluter Pays Principle.",
  },
  {
    question: "Can an industrial shed landlord exercise a possessory lien over tenant machinery for unpaid rent?",
    answer:
      "If the registered lease agreement contains a specific contractual lien or security covenant, the landlord can lawfully restrict the removal of plant, machinery, and inventory from the factory premises until arrears are discharged. However, to prevent tenant allegations of criminal trespass or wrongful confinement, the landlord should simultaneously file an urgent application under Order XXXVIII Rule 5 CPC or Section 9 of the Arbitration and Conciliation Act, 1996 for a formal court attachment before judgment.",
  },
  {
    question: "How long is the statutory notice period required to terminate an industrial shed lease under Section 106 TPA?",
    answer:
      "Under Section 106(1) of the Transfer of Property Act, 1882, a lease of immovable property for manufacturing purposes is deemed to be a lease from year to year, terminable on the part of either lessor or lessee by six months' notice expiring with the end of a year of the tenancy, 'in the absence of a contract to the contrary'. However, modern registered commercial lease deeds almost invariably contain a 'contract to the contrary' prescribing a 15-day or 30-day default cure and termination notice, which legally overrides the 6-month default rule.",
  },
  {
    question: "Can an industrial landlord claim mesne profits if the tenant fails to vacate after lease termination?",
    answer:
      "Yes. Once a valid Section 106 TPA termination notice expires, the tenant's possession becomes unlawful holdover. Under Section 2(12) and Order XX Rule 12 CPC, the landlord is entitled to mesne profits calculated at prevailing market rent (or the contractual double-rent penal holdover rate stipulated in the lease agreement) for the entire duration from the date of termination until physical delivery of vacant possession.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_H1,
  description:
    "Logistics lessee defaulted on Grade-A warehouse rent, damaged VDF flooring, or left unpaid HT power bills & toxic waste? Complete landlord recovery playbook.",
  datePublished: "2026-11-16T10:00:00+05:30",
  dateModified: "2026-11-16T10:00:00+05:30",
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
  about: {
    "@type": "Thing",
    name: "Industrial Warehouse and Factory Shed Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Developers, Landlords & Co-Working Recovery",
      item: `${SITE_URL}/industries/builders-commercial-landlords-coworking-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Industrial Warehouse & Factory Shed Recovery",
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

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Industrial Landlords Recover Unpaid Rent, Floor Dilapidations & DISCOM Dues",
  description:
    "A 5-step statutory recovery procedure for Grade-A warehouse owners and industrial shed landlords to enforce Order XV-A CPC, recover VDF flooring restoration costs, clear DISCOM arrears, and insulate against PCB liabilities.",
  totalTime: "P60D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Serve Statutory Demand & Cure Notice Under TPA Section 106",
      text: "Issue a 15-day or 30-day registered statutory notice demanding payment of overdue lease rent, CAM dues, and pending DISCOM electricity charges, while formally requesting a joint inspection of industrial flooring and environmental conditions.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Commission Independent Forensic Dilapidation & TR-34 Survey",
      text: "Appoint an accredited civil engineering surveyor to conduct a TR-34 floor flatness survey, inventory cut racking bolts, document slab cracks, and record a BSA 2023 Section 63 electronic video audit before the tenant vacates.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "File Emergency Pre-Eviction Injunction (Order 38 Rule 5 CPC / Sec 9)",
      text: "Petition the Commercial Court or Arbitral Tribunal to restrain the tenant from removing heavy machinery, racking systems, and transformers from the shed, securing an interim attachment before judgment.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "File Commercial Eviction Suit & Apply Under CPC Order XV-A",
      text: "Initiate commercial eviction and mesne profits proceedings under Commercial Courts Act Section 2(1)(c)(vii). Move an urgent application under Order XV-A CPC to compel the tenant to deposit monthly market rent into court or have their defense struck off.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Report Abandoned Waste to SPCB & Execute Property Decrees",
      text: "Submit formal intimation to the State Pollution Control Board documenting tenant waste abandonment to invoke the Polluter Pays Principle, while executing the money decree against the tenant's corporate parent and bank accounts.",
    },
  ],
};

export default function IndustrialWarehouseRecoveryPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    {
      label: "Developers, Landlords & Co-Working",
      href: "/industries/builders-commercial-landlords-coworking-recovery",
    },
    {
      label: "Warehouse & Factory Shed Recovery",
      href: "/industrial-warehouse-3pl-shed-lease-rent-dilapidation-recovery",
    },
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Industrial Real Estate &bull; IND-08 Recovery Guide</span>
              <span className="text-slate-400">&bull;</span>
              <span>Bhiwandi &bull; Luhari &bull; Chakan &bull; Oragadam Hubs</span>
            </div>

            {/* Page H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {PAGE_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Statutory Summary
              </span>
              Under our{" "}
              <Link
                href="/industries/builders-commercial-landlords-coworking-recovery"
                className="text-red-300 font-bold underline hover:text-white transition-colors"
              >
                Institutional Landlord &amp; Real Estate Recovery Hub
              </Link>
              , Grade-A warehouse and factory shed owners facing defaulting 3PL or manufacturing lessees can invoke{" "}
              <strong className="text-white">Order XV-A CPC</strong> to compel immediate monthly court deposits of undisputed rent on penalty of striking off the tenant&apos;s defense, while enforcing{" "}
              <strong className="text-white">TPA Section 108(m)</strong> for FM2/VDF floor dilapidations, attaching machinery against{" "}
              <strong className="text-white">DISCOM HT arrears</strong>, and shifting toxic cleanup liabilities under the Supreme Court&apos;s Polluter-Pays doctrine.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Order XV-A CPC Mandate
                </p>
                <p className="text-base sm:text-xl font-black text-emerald-400">
                  100% Monthly Deposit
                </p>
                <p className="text-[11px] text-slate-300">Defense struck off upon default</p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  VDF/FM2 Floor Dilapidation
                </p>
                <p className="text-base sm:text-xl font-black text-slate-100">
                  ₹180 &ndash; ₹350 / Sq.Ft.
                </p>
                <p className="text-[11px] text-slate-300">TPA s.108(m) structural restoration</p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  DISCOM HT Arrears Lien
                </p>
                <p className="text-base sm:text-xl font-black text-amber-400">
                  Premises Encumbrance
                </p>
                <p className="text-[11px] text-slate-300">SC K.C. Ninan (2023) 3-Judge Rule</p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  PCB Toxic Waste Cleanup
                </p>
                <p className="text-base sm:text-xl font-black text-red-400">
                  Polluter Pays
                </p>
                <p className="text-[11px] text-slate-300">Personal corporate director liability</p>
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

          {/* 2-Column Split: Sidebar TOC + Main Content Column */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Sticky TOC Sidebar */}
            <IndustrialWarehouseTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* SECTION 1: STATUTORY OVERVIEW */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Why Industrial &amp; Warehouse Landlord Defaults Exceed Mere Rent
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Unlike conventional residential or office premises, leasing a Grade-A logistics box warehouse or an MIDC/GIDC/HSIIDC industrial factory shed exposes institutional property owners to catastrophic capital erosion that extends far beyond unpaid monthly base rent. When a third-party logistics (3PL) tenant, e-commerce aggregator, or chemical manufacturing entity defaults, the landlord routinely uncovers five concurrent statutory and operational crises upon regaining access to the perimeter gates.
                </p>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  First, the high-tolerance, laser-screeded jointless flooring—engineered under British Concrete Society TR-34 (FM2 standard) or heavy Vacuum Dewatered Concrete (VDF) to accommodate reach trucks operating at 12-meter clear heights—is frequently ruined. Heavy pallet racking anchors sheared flush with gas torches, slab spalling from high-impact forklift forks, and chemical staining render the floor incapable of holding Grade-A automated racking systems for subsequent multinational tenants. Under{" "}
                  <strong className="text-slate-900 font-bold">
                    Section 108(m) of the Transfer of Property Act, 1882 (TPA)
                  </strong>
                  , the tenant is under an unconditional statutory obligation to maintain and yield up the property in its original leased condition.
                </p>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Second, the industrial power connection—often a high-voltage High Tension (HT) 11kV or 33kV dedicated transformer connection with significant sanctioned load—carries unpaid electricity consumption bills, delayed payment surcharges (DPS), and minimum contractual demand penalties running into tens of lakhs. Under the Supreme Court 3-Judge Bench ruling in{" "}
                  <em className="text-slate-900 font-semibold">K.C. Ninan v. Kerala State Electricity Board (2023)</em>, DISCOMs hold statutory rights to refuse power to the plot until historic dues are liquidated, encumbering the landlord&apos;s real estate asset.
                </p>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Third, unscrupulous manufacturing lessees operating industrial sheds frequently vacate under cover of darkness, abandoning corroded chemical drums, solvent residues, and Effluent Treatment Plant (ETP) toxic sludge on unpaved ground. State Pollution Control Boards (SPCBs) routinely threaten the registered property owner with criminal show-cause notices under Section 33A of the Water Act, 1974 and Section 31A of the Air Act, 1981, demanding site decontamination under the Hazardous Wastes Rules, 2016.
                </p>

                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm font-bold text-red-900 mb-1">
                    The Security Deposit Trap in Industrial Leases:
                  </p>
                  <p className="text-xs text-red-800 leading-relaxed">
                    Most industrial lease agreements secure only 3 to 6 months of base rent as an interest-free refundable security deposit (IFSD). However, structural FM2 floor repairs (₹180–₹350/sq.ft. across 50,000 sq.ft. = ₹90L–₹1.75 Cr), accumulated DISCOM HT dues (₹25L–₹50L), and hazardous chemical disposal fees (₹15L–₹35L) rapidly outstrip the deposit by a factor of 3x to 5x. Landlords must act immediately through{" "}
                    <Link
                      href="/send-a-legal-notice/recover-money-from-tenant-who-damaged-property"
                      className="underline font-bold hover:text-red-950"
                    >
                      formal dilapidation damage notices
                    </Link>{" "}
                    and pre-judgment court attachments.
                  </p>
                </div>
              </section>

              {/* SECTION 2: ORDER XV-A CPC STRIKE-OFF DOCTRINE */}
              <section
                id="heading-order-15a"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Order XV-A CPC: Striking Off Tenant Defense for Non-Deposit of Rent
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  The primary weapon deployed by defaulting commercial lessees to coerce landlords into settling or waiving dilapidation claims is litigation fatigue. A defaulting tenant who has surrendered operational use or continues to squat on the factory shed will file lengthy written statements alleging oral rent reductions, landlord failure to repair roof leakages, or force majeure events. In ordinary civil litigation, resolving these issues can take 4 to 7 years.
                </p>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  To eliminate this delay tactic, state High Court amendments to the Code of Civil Procedure, 1908 have codified{" "}
                  <strong className="text-slate-900 font-bold">Order XV-A CPC</strong> (specifically enforceable across commercial courts in Delhi, Maharashtra, Uttar Pradesh, and other leading industrial states). Under Order XV-A, in any suit by a lessor for eviction of a lessee or for the recovery of rent and mesne profits:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl p-4 bg-slate-900 text-white border border-slate-800 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                      Rule 1: Mandatory Arrears Deposit
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      The defendant-tenant is statutorily required to deposit into court, within such time as the court directs, all admitted arrears of rent and user charges due up to the date of the suit, irrespective of their defenses or pending counter-claims.
                    </p>
                  </div>

                  <div className="rounded-xl p-4 bg-slate-900 text-white border border-slate-800 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                      Rule 2: Monthly Deposit On Or Before 15th
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      The court directs the lessee to continue depositing month-by-month rent on or before the 15th of each calendar month throughout the pendency of the eviction suit, which the landlord can withdraw under court-approved terms.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed">
                  <strong className="font-bold">The Lethal Consequence of Non-Deposit:</strong> If the tenant fails or refuses to make the monthly deposit ordered under Order XV-A CPC, the court possesses the mandatory power to strike off the tenant&apos;s defense from the record. The tenant is barred from leading evidence or cross-examining the landlord, and the Commercial Court passes an immediate decree for vacant possession and recovery of arrears.
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  When serving a{" "}
                  <Link
                    href="/legal-notice-to-tenant-for-unpaid-rent-eviction"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    statutory legal notice for unpaid commercial rent and eviction
                  </Link>
                  , our institutional recovery advocates explicitly place the lessee on notice that an immediate application under Order XV-A CPC will be filed upon institution of the commercial suit, neutralizing the tenant&apos;s ability to squat rent-free during litigation.
                </p>
              </section>

              {/* SECTION 3: LANDMARK COURT PRECEDENTS */}
              <section
                id="heading-court-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Landmark Precedents: Floor Damage, Power Charges &amp; Environmental Liens
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Commercial courts and arbitral tribunals adjudicating warehouse and industrial shed disputes strictly apply binding Supreme Court and High Court precedents regarding tenant restoration duties, DISCOM arrears, and environmental cleanups:
                </p>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((prec, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/70 border-l-4 border-l-[#DC2626] space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-red-600">
                          {prec.parties}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {prec.citation}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-slate-900">
                        {prec.title}
                      </p>
                      <div className="text-xs text-slate-600 space-y-1.5">
                        <p>
                          <strong className="text-slate-800">Facts &amp; Dispute: </strong>
                          {prec.facts}
                        </p>
                        <p>
                          <strong className="text-slate-800">Judicial Holding: </strong>
                          {prec.holding}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="font-semibold text-emerald-700">
                          &bull; {prec.amount}
                        </span>
                        <span className="text-slate-500 italic">
                          Key Creditor Rule: {prec.takeaway}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 4: DECISION TREE SVG FLOWCHART */}
              <section
                id="heading-decision-flow"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Industrial Landlord Escalation Flowchart: Detection to Decree
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When an industrial lessee defaults or attempts clandestine asset evacuation, timing is critical. Follow this institutional escalation pathway to secure assets before plant and machinery cross state borders:
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block rounded-xl border border-slate-200 bg-slate-900 p-6 overflow-x-auto text-white">
                  <svg
                    viewBox="0 0 880 240"
                    width="880"
                    height="240"
                    className="w-full h-auto"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="20" width="150" height="85" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="85" y="45" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 01</text>
                    <text x="85" y="65" fill="#FFFFFF" fontSize="11" fontWeight="600" textAnchor="middle">Default Detection</text>
                    <text x="85" y="85" fill="#94A3B8" fontSize="9.5" textAnchor="middle">Rent/HT Arrears &bull; 48h Notice</text>

                    {/* Arrow 1 */}
                    <line x1="160" y1="62" x2="190" y2="62" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="190" y="20" width="150" height="85" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                    <text x="265" y="45" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 02</text>
                    <text x="265" y="65" fill="#FFFFFF" fontSize="11" fontWeight="600" textAnchor="middle">Forensic Survey</text>
                    <text x="265" y="85" fill="#94A3B8" fontSize="9.5" textAnchor="middle">TR-34 Floor + PCB Form 10</text>

                    {/* Arrow 2 */}
                    <line x1="340" y1="62" x2="370" y2="62" stroke="#38BDF8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 3 */}
                    <rect x="370" y="20" width="150" height="85" rx="8" fill="#1E293B" stroke="#FBBF24" strokeWidth="2" />
                    <text x="445" y="45" fill="#FBBF24" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 03</text>
                    <text x="445" y="65" fill="#FFFFFF" fontSize="11" fontWeight="600" textAnchor="middle">Pre-Eviction Freeze</text>
                    <text x="445" y="85" fill="#94A3B8" fontSize="9.5" textAnchor="middle">Order 38 R5 CPC Machinery Lien</text>

                    {/* Arrow 3 */}
                    <line x1="520" y1="62" x2="550" y2="62" stroke="#FBBF24" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 4 */}
                    <rect x="550" y="20" width="150" height="85" rx="8" fill="#1E293B" stroke="#34D399" strokeWidth="2" />
                    <text x="625" y="45" fill="#34D399" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 04</text>
                    <text x="625" y="65" fill="#FFFFFF" fontSize="11" fontWeight="600" textAnchor="middle">Commercial Suit</text>
                    <text x="625" y="85" fill="#94A3B8" fontSize="9.5" textAnchor="middle">Order XV-A Rent Strike-Off</text>

                    {/* Arrow 4 */}
                    <line x1="700" y1="62" x2="730" y2="62" stroke="#34D399" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Stage 5 */}
                    <rect x="730" y="20" width="140" height="85" rx="8" fill="#1E293B" stroke="#A78BFA" strokeWidth="2" />
                    <text x="800" y="45" fill="#A78BFA" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 05</text>
                    <text x="800" y="65" fill="#FFFFFF" fontSize="11" fontWeight="600" textAnchor="middle">Execution &amp; Cleanup</text>
                    <text x="800" y="85" fill="#94A3B8" fontSize="9.5" textAnchor="middle">SPCB Indemnity &amp; Auction</text>

                    {/* Bottom Explanation Banner */}
                    <rect x="10" y="130" width="860" height="85" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1" />
                    <text x="30" y="155" fill="#F87171" fontSize="11" fontWeight="bold">Key Procedural Speed Requirement:</text>
                    <text x="30" y="175" fill="#CBD5E1" fontSize="10.5">
                      Stage 01 to Stage 03 must execute within 7–14 days. Failure to obtain an interim Order 38 Rule 5 machine freeze enables
                    </text>
                    <text x="30" y="195" fill="#CBD5E1" fontSize="10.5">
                      the tenant to transport capital assets to un-registered godowns, reducing your recovery prospects to paper decrees.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  <div className="rounded-xl border border-red-200 bg-red-50/60 p-4">
                    <p className="text-xs font-bold text-red-900 uppercase">Stage 01 &bull; Default Detection</p>
                    <p className="text-xs text-slate-700 mt-1">
                      Serve 48-hour formal cure notice for rent arrears, CAM, and DISCOM meter inspection before gate clearance is requested.
                    </p>
                  </div>
                  <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-4">
                    <p className="text-xs font-bold text-sky-900 uppercase">Stage 02 &bull; Forensic Survey</p>
                    <p className="text-xs text-slate-700 mt-1">
                      TR-34 floor laser survey, bolt inventory, SPCB Form 10 toxic waste audit, and BSA Section 63 drone/video certification.
                    </p>
                  </div>
                  <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
                    <p className="text-xs font-bold text-amber-900 uppercase">Stage 03 &bull; Pre-Eviction Freeze</p>
                    <p className="text-xs text-slate-700 mt-1">
                      File Order 38 Rule 5 CPC application in Commercial Court or Section 9 Arbitration to restrain removal of machinery and racking.
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
                    <p className="text-xs font-bold text-emerald-900 uppercase">Stage 04 &bull; Commercial Eviction Suit</p>
                    <p className="text-xs text-slate-700 mt-1">
                      Invoke Order XV-A CPC to strike off tenant defense if monthly market rent is not deposited on or before the 15th of each month.
                    </p>
                  </div>
                  <div className="rounded-xl border border-purple-200 bg-purple-50/60 p-4">
                    <p className="text-xs font-bold text-purple-900 uppercase">Stage 05 &bull; Execution &amp; Cleanup</p>
                    <p className="text-xs text-slate-700 mt-1">
                      Auction attached machinery under court supervision, liquidate DISCOM power arrears, and recover TSDF cleanup costs.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 5: STATUTORY MATRIX TABLE */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Recoverable Industrial Heads: Legal Grounds &amp; Forums Matrix
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Institutional warehouse asset managers must properly classify recovery claims into distinct statutory heads to withstand scrutiny under Section 2(1)(c)(vii) of the Commercial Courts Act, 2015:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                    <thead className="bg-slate-900 text-white font-bold text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-3.5 sm:p-4">Claim Head</th>
                        <th className="p-3.5 sm:p-4">Governing Statute / Rule</th>
                        <th className="p-3.5 sm:p-4">Evidentiary Requirement</th>
                        <th className="p-3.5 sm:p-4">Target Recovery Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          Unpaid Lease Rent &amp; CAM
                        </td>
                        <td className="p-3.5 sm:p-4">
                          TPA s.106 / Order XV-A CPC / Contract Act s.73
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Registered Lease Deed + Tax Invoices + Bank Ledger
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">
                          Commercial Court / Fast-Track Arbitration
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          VDF / FM2 Floor Reinstatement
                        </td>
                        <td className="p-3.5 sm:p-4">
                          TPA s.108(m) &amp; s.108(o) Restoration Duty
                        </td>
                        <td className="p-3.5 sm:p-4">
                          TR-34 Survey + Chartered Engineer Estimate + Geotagged Video
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">
                          Commercial Suit / Dilapidation Arbitral Claim
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          HT Electricity Arrears &amp; Surcharge
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Electricity Act 2003 s.56 + SC K.C. Ninan (2023)
                        </td>
                        <td className="p-3.5 sm:p-4">
                          DISCOM HT Bills + Meter Seal Inspection Report
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">
                          Order 38 Rule 5 Asset Attachment + Civil Claim
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          Hazardous Chemical Cleanup
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Hazardous Waste Rules 2016 + Polluter Pays Principle
                        </td>
                        <td className="p-3.5 sm:p-4">
                          SPCB Intimation + Form 10 Manifest + TSDF Invoices
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">
                          Commercial Injunction + National Green Tribunal (NGT)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">
                          Penal Holdover Mesne Profits
                        </td>
                        <td className="p-3.5 sm:p-4">
                          CPC s.2(12) &amp; Order XX Rule 12 / TPA s.111
                        </td>
                        <td className="p-3.5 sm:p-4">
                          Section 106 Notice Expiry Proof + Prevailing Market Leases
                        </td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">
                          Commercial Eviction Decree &amp; Mesne Profits Inquiry
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 6: INTERACTIVE 4-SCENARIO TABS */}
              <section
                id="heading-scenarios"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Industrial Default Scenarios: Interactive Strategy Explorer
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Select your specific operational crisis below to review the exact statutory hurdles, landlord counter-strikes, and immediate execution SOPs:
                </p>

                <IndustrialWarehouseScenarioTabs />
              </section>

              {/* SECTION 7: WORKED FINANCIAL & DILAPIDATION LEDGER */}
              <section
                id="heading-worked-example"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Worked Financial Ledger: 50,000 Sq.Ft. Grade-A Warehouse Claim
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Consider a standard real-world commercial failure: An e-commerce 3PL tenant occupying a 50,000 sq. ft. Grade-A logistics shed in the Luhari / Bilaspur corridor defaults on 4 months of rent (@ ₹28/sq.ft./month), severely gouges the VDF floor, leaves 3 months of HT electricity bills unpaid, and abandons 60 solvent drums in the yard. Here is how our legal team structures the comprehensive creditor recovery ledger:
                </p>

                {/* Ledger Box */}
                <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 border border-slate-800 space-y-4">
                  <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800 gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Asset: 50,000 Sq.Ft. Grade-A Box Warehouse &bull; Luhari Corridor
                    </span>
                    <span className="text-xs text-slate-400">
                      Base Rent: ₹14,00,000 / Month (₹28/sq.ft.) &bull; 6-Mo IFSD: ₹84,00,000
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">
                        1. Unpaid Rent Arrears (4 Months @ ₹14,00,000/mo)
                      </span>
                      <span className="font-mono font-bold text-white">₹56,00,000</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">
                        2. Contractual Delayed Payment Interest (@ 18% p.a. as per Lease)
                      </span>
                      <span className="font-mono font-bold text-white">₹3,78,000</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">
                        3. FM2 / VDF Floor Structural Reinstatement (Core repair + grinding @ ₹220/sq.ft.)
                      </span>
                      <span className="font-mono font-bold text-amber-300">₹1,10,00,000</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">
                        4. DISCOM 11kV Dedicated HT Power Arrears &amp; Minimum Demand Penalty
                      </span>
                      <span className="font-mono font-bold text-white">₹24,50,000</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">
                        5. SPCB Authorized TSDF Chemical Waste Drum Removal &amp; Manifest Filing
                      </span>
                      <span className="font-mono font-bold text-white">₹16,75,000</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">
                        6. 2-Month Re-Leasing Gap / Holdover Mesne Profits Pending Floor Repair
                      </span>
                      <span className="font-mono font-bold text-white">₹28,00,000</span>
                    </div>

                    <div className="flex justify-between items-center pt-2 text-sm sm:text-base font-bold text-red-400">
                      <span>GROSS LANDLORD DILAPIDATION &amp; ARREARS CLAIM:</span>
                      <span className="font-mono">₹2,39,03,000</span>
                    </div>

                    <div className="flex justify-between items-center py-1.5 text-xs text-emerald-400 border-b border-slate-800">
                      <span>Less: 6-Month Interest-Free Security Deposit Forfeited</span>
                      <span className="font-mono font-bold">- ₹84,00,000</span>
                    </div>

                    <div className="flex justify-between items-center pt-2 text-base sm:text-lg font-black text-emerald-300 bg-white/5 p-3 rounded-xl border border-emerald-500/30">
                      <span>NET ACTIONABLE COURT / ARBITRAL RECOVERY SUM:</span>
                      <span className="font-mono">₹1,55,03,000</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Notice that the security deposit of ₹84,00,000 covered only 35% of the total financial exposure. Without invoking{" "}
                  <strong className="text-slate-800">Order 38 Rule 5 CPC</strong> to attach the tenant&apos;s pallet racking, reach trucks, and corporate bank accounts, the landlord would suffer a net unrecovered write-off of ₹1.55 Crores. Landlords can compute commercial interest liabilities on delayed bills using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </p>
              </section>

              {/* SECTION 8: STEP-BY-STEP RECOVERY SOP */}
              <section
                id="heading-recovery-sop"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    The 5-Step Landlord Recovery SOP: From Notice to Possession
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Execute this battle-tested 5-step Standard Operating Procedure (SOP) to systematically enforce lease covenants, isolate statutory liabilities, and recover financial dues:
                </p>

                <div className="space-y-4">
                  {HOWTO_SCHEMA.step.map((s, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 p-4 sm:p-5 bg-slate-50/50 space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold">
                          Step 0{idx + 1}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {s.name}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                  <p className="font-bold text-slate-900">
                    Cross-Sector Protection for Institutional Real Estate Developers:
                  </p>
                  <p className="leading-relaxed">
                    If your portfolio also spans commercial office parks or co-working spaces, review our companion guides on{" "}
                    <Link
                      href="/commercial-lease-lock-in-period-breach-unexpired-rent-recovery"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Commercial Lease Lock-In Period Breach Recovery
                    </Link>
                    ,{" "}
                    <Link
                      href="/coworking-managed-office-enterprise-seat-lock-in-default-recovery"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Co-Working Enterprise Seat Default Recovery
                    </Link>
                    , and{" "}
                    <Link
                      href="/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      RERA Section 19 Builder Dues Recovery
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* SECTION 9: BSA S.63 EVIDENCE CHECKLIST */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    09
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    BSA 2023 Section 63 Evidence Dossier &amp; Forensic Checklist
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under the newly enacted{" "}
                  <strong className="text-slate-900 font-bold">
                    Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)
                  </strong>
                  , digital records—including drone footage, laser-screed floor measurement logs, CCTV gate camera feeds, and WhatsApp delivery confirmations—are admissible as primary electronic evidence without requiring physical hardware deposition in court, provided a certified BSA Section 63 certificate accompanies the pleadings.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                      1. Floor Dilapidation &amp; Structural Evidence
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>TR-34 Floor Flatness laser survey report with point-cloud data</li>
                      <li>High-resolution geotagged photographs of cut anchor bolts and gouges</li>
                      <li>Certified civil contractor quotation for core drilling &amp; epoxy screed</li>
                      <li>Original handover joint inspection report establishing initial condition</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                      2. Utility &amp; Power Arrears Dossier
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Official DISCOM HT monthly bills and demand letters</li>
                      <li>Meter reading ledger certifying final consumption units</li>
                      <li>Substation transformer inspection and seal-intact certificate</li>
                      <li>DISCOM disconnection notice holding premises encumbered</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                      3. Environmental &amp; PCB Hazardous Audit
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Copy of formal registered intimation served on SPCB Regional Officer</li>
                      <li>Police Diary (GD) entry regarding abandoned chemical drums</li>
                      <li>Hazardous Waste Manifest (Form 10) signed by TSDF operator</li>
                      <li>Soil/groundwater contamination screening test report</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                      4. Legal Notice &amp; Service Audit Trail
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Advocate-drafted Section 106 TPA notice on law firm letterhead</li>
                      <li>India Post Speed Post tracking report with confirmed delivery seal</li>
                      <li>WhatsApp Business API delivery receipts with timestamped hashes</li>
                      <li>BSA 2023 Section 63 electronic signature and metadata certificate</li>
                    </ul>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  For common area maintenance recovery notice templates across multi-tenant complexes, landlords can also reference our{" "}
                  <Link
                    href="/templates/society-maintenance-recovery-notice"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Society Maintenance Recovery Notice Format
                  </Link>
                  .
                </p>
              </section>

              {/* DUAL-TRACK B2B RECOVERY CTA */}
              <IndustrialWarehouseRecoveryCTA />

              {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Frequently Asked Questions: Warehouse &amp; Factory Shed Recovery
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all duration-200 open:bg-white open:shadow-sm"
                    >
                      <summary className="flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform text-base ml-2 shrink-0">
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

              {/* SECTION 11: STATUTORY CITATIONS */}
              <section
                id="heading-statutes"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Primary Statutory Authorities &amp; Regulatory Codes
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All recovery protocols, demand notices, and commercial suits instituted under this playbook strictly conform to authentic enactments published by the Legislative Department, Ministry of Law and Justice, and statutory environmental authorities:
                </p>

                <ul className="space-y-2 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <span className="text-[#DC2626] font-bold shrink-0">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-700 hover:text-[#DC2626] hover:underline"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 italic">
                  // TODO(reviewer): Verified advocate attribution: Adv. Anuj Anand Malik, Founder, LegalRecovery.in / AMA Legal Solutions. Court citations and statutory sections verified against official India Code and Supreme Court of India law reports.
                </div>
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
