import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import EquipmentRentalNoticeCTA from "./EquipmentRentalNoticeCTA";
import EquipmentRentalNoticeTOC from "./EquipmentRentalNoticeTOC";
import EquipmentRentalNoticeWorkspace from "./EquipmentRentalNoticeWorkspace";

export const revalidate = 86400;

const PAGE_PATH =
  "/templates/equipment-rental-arrears-gate-pass-repossession-bns-316-notice";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "3-in-1 Equipment Rental Legal Notice Pack: Hire-Arrears Demand, BNS Section 316 Bailee Return Notice & Project-Owner Gate-Pass Release Notice";

const EXACT_TITLE = "Unreturned Rented Machinery, Arrears & Gate-Pass Notice";

const EXACT_DESCRIPTION =
  "Equipment rental notice templates covering Challan/Serial schedules, daily hire meters, replacement value, BNS s.316 Police CC & Gate-Pass demands.";

export const metadata: Metadata = {
  title: EXACT_TITLE,
  description: EXACT_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(EXACT_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
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
    title:
      "Indian Contract Act, 1872 — Sections 148, 160 & 161 (Bailment, Duty to Return Goods & Bailee Liability for Detention)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 — Section 316 (Criminal Breach of Trust for Unreturned Leased Machinery & Assets)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 — Sections 497 & 503 (Interim Custody & Superdari Release of Seized Machinery)",
    url: "https://www.indiacode.nic.in/handle/123456789/20099",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 — Section 63 (Electronic Admissibility of GPS Logs, Challan Scans & Gate-Pass Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "MSMED Act, 2006 — Sections 15–18 & Income Tax Act Section 43B(h) (3x RBI Interest & Tax Disallowance on Hire Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
];

const FAQS = [
  {
    q: "Why do equipment lessors need a 3-in-1 notice instead of a standard invoice reminder?",
    a: "A generic payment reminder only demands money and ignores physical asset recovery. In crane, scaffolding, DG set, and IT laptop leasing defaults, the lessor faces two simultaneous risks: unpaid monthly hire bills and unlawful detention of high-value machinery at a third-party project site. Combining (1) Hire-Arrears with a running daily meter, (2) a BNS Section 316 bailee return demand, and (3) a Tortious Detinue Gate-Pass notice to the Project Owner forces both the contractor and the site employer to act immediately.",
  },
  {
    q: "Can a builder or project owner legally block a crane or scaffolding Gate-Pass for the contractor's dues?",
    a: "No. Under Indian contract and tort law, a project owner or main employer has no lien over third-party rented machinery belonging to an independent equipment lessor. Detaining a crane, piling rig, or shuttering lot because the EPC contractor has unresolved RA bill disputes amounts to Tortious Detinue and Conversion. Serving Noticee No. 2 with Challan and RC/Serial proof exposes the project owner to direct Court Receiver costs and daily detention damages.",
  },
  {
    q: "How does CC'ing the jurisdictional Police Station (SHO) work under BNS Section 316?",
    a: "Once a lease or bailment period expires and the bailee refuses to return entrusted movable property despite written demand, dishonest retention triggers Criminal Breach of Trust under BNS Section 316. Using LegalRecovery's multi-recipient dispatch fields (policeStationName and policeStationEmail), your advocate notice formally endorses a copy with serial/chassis schedules to the local SHO—creating an official pre-FIR record that deters midnight shifting or scrapping of your assets.",
  },
  {
    q: "What is a 'running daily hire meter' and why must it be quantified in the notice?",
    a: "Under Indian Contract Act Section 161, if a bailee fails to return goods at the proper time, the bailee is responsible to the bailor for any loss, destruction, or ongoing deprivation from that date. Expressly stating the daily hire rate (for example, ₹35,000/day for a 150MT crane or ₹14,500/day for scaffolding and DG sets) prevents the lessee from arguing that rent stopped on the termination letter date while continuing to hold your machinery on site.",
  },
  {
    q: "Can IT laptop, MacBook, and medical equipment lessors use this same BNS s.316 template?",
    a: "Yes. Select the 'IT / Medical DaaS' preset in the interactive workspace above. It swaps crane gate-pass clauses for serialized asset-tag and MDM/device-lock schedules, establishes movable chattel ownership against co-working or hospital facility desks, and pairs BNS Section 316 bailee criminal liability with MSMED s.15–18 compound interest.",
  },
  {
    q: "How should this 3-in-1 notice be served for maximum enforceability in Commercial Court or Police Station?",
    a: "Dispatch the signed notice simultaneously via (1) India Post Speed Post / Registered Post AD (RPAD) to the lessee's MCA-registered office, the project site office, and the jurisdictional SHO, (2) official email to the CFO, Site Head, and policeStationEmail, and (3) WhatsApp to the authorized signatory, preserving all delivery proofs with a BSA 2023 Section 63 electronic certificate.",
  },
];

export default function EquipmentRentalNoticePage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: EXACT_DESCRIPTION,
    url: CANONICAL_URL,
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
  };

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: EXACT_TITLE,
    headline: EXACT_H1,
    description: EXACT_DESCRIPTION,
    url: CANONICAL_URL,
    inLanguage: "en-IN",
    learningResourceType: "Legal Notice Template",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

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
        name: "Equipment Rental & Machinery Leasing Recovery",
        item: `${SITE_URL}/industries/equipment-rental-machinery-leasing-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "3-in-1 Equipment Rental Legal Notice Pack",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-20 P1 Template Workspace</span>
            <span>&bull;</span>
            <span>Hire Arrears + BNS s.316 + Gate-Pass + Police SHO CC</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + Parent Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Summary
            </span>
            Part of our{" "}
            <Link
              href="/industries/equipment-rental-machinery-leasing-recovery"
              className="text-red-300 underline underline-offset-2 hover:text-white font-semibold"
            >
              Equipment Rental, Cranes, Scaffolding &amp; IT Leasing Recovery Hub
            </Link>
            , this 3-in-1 notice workspace empowers lessors to demand{" "}
            <strong className="text-white">unpaid hire arrears + running daily meters</strong>, invoke{" "}
            <strong className="text-white">Contract Act s.160–161 &amp; BNS s.316</strong> with{" "}
            <strong className="text-white">Police SHO CC</strong>, and compel{" "}
            <strong className="text-white">72-hour Project-Owner Gate-Pass release</strong>.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <span className="block text-lg sm:text-xl font-black text-red-400">72-Hour</span>
              <span className="block text-[10px] sm:text-xs text-slate-400">
                Project-Owner Gate-Pass Release Demand
              </span>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black text-amber-400">s.160–161</span>
              <span className="block text-[10px] sm:text-xs text-slate-400">
                Contract Act Bailee Return &amp; Daily Meter
              </span>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black text-emerald-400">BNS s.316</span>
              <span className="block text-[10px] sm:text-xs text-slate-400">
                Criminal Breach of Trust + Police SHO CC
              </span>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-black text-slate-100">3x RBI</span>
              <span className="block text-[10px] sm:text-xs text-slate-400">
                MSMED s.16 Interest &amp; s.43B(h) Tax Hook
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Equipment Rental & Leasing Recovery",
              href: "/industries/equipment-rental-machinery-leasing-recovery",
            },
            {
              label: "3-in-1 Equipment Rental Notice Pack",
              href: PAGE_PATH,
            },
          ]}
        />

        <div className="mt-6 flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <EquipmentRentalNoticeTOC />

          <main className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-notice-overview"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200 mb-3">
                3-in-1 Commercial Asset &amp; Hire Recovery
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Why Standard Payment Notices Fail for Unreturned Rented Equipment
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                When a construction contractor, infrastructure EPC, or corporate lessee stops paying monthly hire charges, the lessor suffers a compounding double loss: frozen working capital on unpaid invoices and immobilized fleet earning zero revenue at a hostile site. Standard debt collection letters only ask for money, allowing defaulters to stall for months while your crane, piling rig, DG set, or shuttering material remains trapped behind a locked project gate.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                This <strong className="text-slate-900">3-in-1 Equipment Rental Legal Notice Pack</strong> solves all three pressure points simultaneously: it quantifies overdue hire plus a <strong className="text-slate-900">running daily hire meter</strong>, serves a statutory <strong className="text-slate-900">BNS Section 316</strong> criminal breach of trust warning with <strong className="text-slate-900">Police SHO CC</strong>, and puts the <strong className="text-slate-900">Project Owner / Site Principal</strong> on Tortious Detinue notice to release the Gate-Pass.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Explore sector-specific playbooks for{" "}
                <Link
                  href="/unreturned-rented-scaffolding-shuttering-formwork-bns-316-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  unreturned scaffolding &amp; shuttering recovery
                </Link>
                ,{" "}
                <Link
                  href="/builder-employer-blocking-gate-pass-demobilization-rented-crane-machinery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  builder Gate-Pass crane blockades
                </Link>
                , and{" "}
                <Link
                  href="/lessee-pledged-or-sold-rented-machinery-criminal-recovery-court-receiver"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  rogue lessee machinery sale &amp; Court Receiver remedies
                </Link>
                .
              </p>
            </section>

            {/* Section 2: Interactive Workspace */}
            <section id="heading-notice-workspace" className="scroll-mt-28">
              <EquipmentRentalNoticeWorkspace />
            </section>

            {/* Section 3: Ready-to-Fill Challan, Meter & Replacement Value Schedules */}
            <section
              id="heading-ready-tables"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28 space-y-8"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  Ready-to-Fill Challan, Daily Hire Meter &amp; Replacement Schedules
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Attach these standardized schedules as <strong className="text-slate-900">Annexure A &amp; B</strong> to your notice. Police officers, Commercial Courts, and Arbitral Tribunals require exact serial numbers, chassis IDs, and daily meter math rather than vague asset descriptions.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                  Annexure A: Delivery Challan, Serial / Chassis &amp; Replacement Value Schedule
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 font-bold">Asset Category</th>
                        <th className="p-3 font-bold">Challan / Handover Ref</th>
                        <th className="p-3 font-bold">Serial / Chassis / Tag ID</th>
                        <th className="p-3 font-bold">Daily Hire Meter</th>
                        <th className="p-3 font-bold">Lost-Asset Replacement Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">150MT Crawler Crane</td>
                        <td className="p-3 text-slate-700">DC/VHL/2026/0419 (12 Jan 2026)</td>
                        <td className="p-3 text-slate-700">ZCC1500-24-8814 (RC Attached)</td>
                        <td className="p-3 text-slate-700">&#8377;35,000 / day</td>
                        <td className="p-3 font-bold text-[#DC2626]">&#8377;1,85,00,000</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">Cuplock Scaffolding + 250kVA DG</td>
                        <td className="p-3 text-slate-700">DC/901–914 (Lot Manifest)</td>
                        <td className="p-3 text-slate-700">12,900 pcs + KOE-250-99182</td>
                        <td className="p-3 text-slate-700">&#8377;14,500 / day</td>
                        <td className="p-3 font-bold text-[#DC2626]">&#8377;38,40,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">65 MacBook Pro M3 Fleet</td>
                        <td className="p-3 text-slate-700">HM/2025/882 (Signed Manifest)</td>
                        <td className="p-3 text-slate-700">Tags TL-MBP-401 to 465 (MDM)</td>
                        <td className="p-3 text-slate-700">&#8377;9,800 / day</td>
                        <td className="p-3 font-bold text-[#DC2626]">&#8377;92,50,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                  Annexure B: Multi-Recipient Service &amp; Cure Timeline Matrix
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 font-bold">Noticee / Recipient</th>
                        <th className="p-3 font-bold">Legal Capacity</th>
                        <th className="p-3 font-bold">Statutory Action Triggered</th>
                        <th className="p-3 font-bold">Cure Window</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">Noticee No. 1 (Lessee / Contractor)</td>
                        <td className="p-3 text-slate-700">Bailee under Contract Act s.148</td>
                        <td className="p-3 text-slate-700">Hire Arrears + Daily Meter + BNS s.316 Return</td>
                        <td className="p-3 font-bold text-[#DC2626]">7 Days</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">Noticee No. 2 (Project Owner / Builder)</td>
                        <td className="p-3 text-slate-700">Site Principal in Possession</td>
                        <td className="p-3 text-slate-700">Tortious Detinue &amp; Gate-Pass Release</td>
                        <td className="p-3 font-bold text-amber-700">72 Hours</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-900">CC: Jurisdictional Police Station (SHO)</td>
                        <td className="p-3 text-slate-700">Law Enforcement Record</td>
                        <td className="p-3 text-slate-700">Pre-FIR Intimation under BNS s.316</td>
                        <td className="p-3 font-bold text-emerald-700">Immediate Record</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 4: 5 Mandatory Clauses */}
            <section
              id="heading-statutory-clauses"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                5 Statutory Clauses That Break Gate-Pass &amp; Bailee Deadlocks
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-5">
                Every clause in our generator maps to an enforceable statutory hook. Before finalizing your demand figure, calculate exact 3x RBI Bank Rate compound interest with our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>{" "}
                and review{" "}
                <Link
                  href="/recovery/contractor-payment"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  contractor payment recovery workflows
                </Link>{" "}
                where back-to-back EPC billing is stalled.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Contract Act s.160–161 Bailee Return & Running Meter",
                    desc: "Establishes that bailment ended upon default/termination and holds the lessee strictly liable for daily hire charges and asset deterioration until physical yard return.",
                  },
                  {
                    title: "2. BNS 2023 s.316 Criminal Breach of Trust",
                    desc: "Converts passive 'civil payment delay' excuses into cognizable criminal liability when serialized machinery, scaffolding, or laptops are dishonestly detained or concealed.",
                  },
                  {
                    title: "3. Tortious Detinue Gate-Pass Notice to Project Owner",
                    desc: "Strips the site developer or main employer of any pretext to hold third-party rented cranes or DG sets hostage over contractor RA bill disputes.",
                  },
                  {
                    title: "4. Lost-Asset Replacement Value Acceleration",
                    desc: "Quantifies full OEM replacement cost alongside accrued hire arrears so the lessee cannot settle cheaply for partial rent while keeping the equipment.",
                  },
                  {
                    title: "5. MSMED s.15–18 & Income Tax s.43B(h) Leverage",
                    desc: "Triggers 3x RBI Bank Rate compound interest and corporate tax audit disallowance for Micro/Small equipment lessors on overdue hire invoices.",
                  },
                  {
                    title: "6. Distinguishing Civil vs Criminal Intent (BNS s.318)",
                    desc: "Pairs BNS s.316 entrustment facts with Challan proof so police do not dismiss the complaint as a pure civil dispute—see our BNS s.318 vs civil dispute guide.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                For deeper criminal vs. civil framing before approaching the Magistrate or SHO, read our analysis on{" "}
                <Link
                  href="/law/bns-318-cheating-vs-civil-dispute"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  BNS Section 318 Cheating vs. Civil Dispute Standards
                </Link>
                .
              </p>
            </section>

            {/* Section 5: Police SHO CC Protocol */}
            <section
              id="heading-police-cc-dispatch"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 mb-3">
                Multi-Recipient Dispatch Engine Integration
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                How to CC the Jurisdictional Police Station (SHO) Legally
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                When high-value cranes, forklifts, DG sets, or IT laptop fleets are at risk of being shifted overnight from a project site, serving only the defaulting contractor is insufficient. LegalRecovery&apos;s multi-recipient dispatch engine accepts{" "}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-[#DC2626]">
                  policeStationName
                </code>{" "}
                and{" "}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-[#DC2626]">
                  policeStationEmail
                </code>{" "}
                so your advocate notice is endorsed directly to the jurisdictional Station House Officer (SHO) alongside the Lessee and Project Owner.
              </p>
              <div className="bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-5 text-xs sm:text-sm space-y-2">
                <p className="font-bold text-red-400 uppercase tracking-wider text-[11px]">
                  3 Rules for Lawful Police Station CC Endorsement
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                  <li>
                    <strong className="text-white">Attach Identifiable Asset Proof:</strong> Include RC/chassis numbers, engine serials, or MDM asset tags so the SHO can verify movable ownership immediately.
                  </li>
                  <li>
                    <strong className="text-white">Cite Specific Entrustment (BNS s.316):</strong> State the exact Delivery Challan date and site location to establish criminal breach of trust rather than a generic recovery request.
                  </li>
                  <li>
                    <strong className="text-white">Maintain Professional Restraint:</strong> Frame the CC as a statutory intimation to prevent unlawful removal or alienation of entrusted property—never as a threat.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6: Annexure & BSA 2023 s.63 Checklist */}
            <section
              id="heading-annexure-checklist"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                Mandatory Annexure &amp; BSA 2023 Section 63 Evidence Checklist
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Before dispatching your notice, assemble these five evidentiary records. Under{" "}
                <strong className="text-slate-900">Bharatiya Sakshya Adhiniyam (BSA), 2023 Section 63</strong>, GPS telematics, WhatsApp gate-pass refusals, and digital challan logs require an electronic device/hash certificate to be admissible in Commercial Court or criminal proceedings.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {[
                  {
                    title: "Signed Hire Agreement / Work Order & Daily Rate Clause:",
                    desc: "Executed contract specifying monthly/daily hire tariff, demobilization responsibility, and owner title retention.",
                  },
                  {
                    title: "Delivery Challans (DC) & Site Entry Gate Stamps:",
                    desc: "Signed receiving challans, security gate inward stamps, and e-Way bills proving physical handover at the project site.",
                  },
                  {
                    title: "RC Book, Chassis / Engine Serials & MDM Logs:",
                    desc: "Ownership registration, OEM invoices, or IT MDM device serials proving exclusive title over the detained equipment.",
                  },
                  {
                    title: "GPS / Telematics & Gate-Pass Refusal Emails (BSA s.63):",
                    desc: "Last known GPS coordinates, hour-meter logs, and WhatsApp/email screenshots showing Gate-Pass denial, certified under BSA s.63.",
                  },
                  {
                    title: "Udyam Registration & GST Ledger Statement:",
                    desc: "Micro/Small Udyam certificate (prior to PO date), unpaid GST tax invoices, and running daily hire calculation sheet.",
                  },
                ].map((item, idx) => (
                  <li key={item.title} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs">
                      {idx + 1}
                    </span>
                    <span>
                      <strong className="text-slate-900">{item.title}</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 7: Service Protocol */}
            <section
              id="heading-service-protocol"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                Multi-Channel RPAD, Email &amp; WhatsApp Service Protocol
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Serve the finalized notice simultaneously across all three recipients via{" "}
                <strong className="text-slate-900">India Post Speed Post / RPAD</strong>,{" "}
                <strong className="text-slate-900">official email</strong>, and{" "}
                <strong className="text-slate-900">WhatsApp</strong>. If you manage multiple defaulting sites or rental yards, automate multi-channel dispatch using our{" "}
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Bulk Email, WhatsApp &amp; Speed Post Notice Solution
                </Link>
                .
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 font-bold">Dispatch Channel</th>
                      <th className="p-3 font-bold">Target Recipients</th>
                      <th className="p-3 font-bold">Evidentiary Proof Preserved</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Speed Post / RPAD</td>
                      <td className="p-3 text-slate-700">Lessee MCA Office + Project Site + Local SHO</td>
                      <td className="p-3 text-slate-700">Original Postal Receipts + India Post Delivery Track</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">Official Email</td>
                      <td className="p-3 text-slate-700">Lessee CFO + Site Admin + policeStationEmail</td>
                      <td className="p-3 text-slate-700">EML Headers + BSA 2023 s.63 Hash Certificate</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">WhatsApp Business</td>
                      <td className="p-3 text-slate-700">Authorized Signatory + Site Project Manager</td>
                      <td className="p-3 text-slate-700">Timestamped PDF Delivery + Double-Tick Screenshot</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8: Dual CTA */}
            <section id="heading-dual-cta" className="scroll-mt-28">
              <EquipmentRentalNoticeCTA />
            </section>

            {/* Section 9: Related Guides */}
            <section id="heading-related-links" className="scroll-mt-28">
              <RelatedRecoveryGuides />
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6">
                Frequently Asked Questions: Equipment Rental &amp; Gate-Pass Notices
              </h2>
              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 open:bg-white open:border-red-200 transition-colors"
                  >
                    <summary className="text-sm sm:text-base font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-28"
            >
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-4">
                Primary Statutory Authorities &amp; Official Portals
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.title} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] font-medium underline underline-offset-2"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
