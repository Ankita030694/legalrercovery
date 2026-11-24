import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ScaffoldingTableOfContents from "./ScaffoldingTableOfContents";
import ScaffoldingScenarioTabs from "./ScaffoldingScenarioTabs";
import ScaffoldingCTA from "./ScaffoldingCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/unreturned-rented-scaffolding-shuttering-formwork-bns-316-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Contractor Stopped Paying Rent AND Won't Return Your Cuplock Scaffolding / Aluminium Formwork? BNS Section 316 FIR + Replacement-Value Recovery";

// Tightened from 66ch PDF draft to 51ch for Screaming Frog 30-60ch compliance
const META_TITLE = "Rented Scaffolding Not Returned? BNS s.316 Recovery";

// Tightened from 179ch PDF draft to 149ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "Contractors shifting rented shuttering or selling pipes as scrap? Trigger BNS s.316 Criminal Breach of Trust, running rent & replacement-value suits.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(META_TITLE),
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

const PRIMARY_SOURCES = [
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316(2) & (3) — Criminal Breach of Trust by Bailee / Carrier / Warehouse-Keeper; Section 317 — Dishonestly Receiving Stolen Property)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 148–161 — Bailment, Duty of Bailee to Return Hired Goods, Unauthorized Use & Liability for Loss)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Specific Relief Act, 1963 (Sections 7 & 8 — Recovery of Specific Movable Property & Mandatory Injunction Against Wrongful Detention)",
    url: "https://www.indiacode.nic.in/handle/123456789/1583",
  },
  {
    title:
      "Code of Civil Procedure, 1908 (Order XXXVII Summary Suit for Liquidated Hire Arrears & Order XL Rule 1 Court Receiver for Site Seizure)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 & 24 — 3x RBI Compound Interest for Udyam-Registered Rental Yards)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of WhatsApp Admissions, E-Way Bills, GPS Logs & Digital Challans)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    q: "Is non-return of rented scaffolding or shuttering a civil dispute or a criminal offence under BNS Section 316?",
    a: "When a contractor merely delays monthly rent while keeping your material at the disclosed project site, police often treat it as civil. However, the moment you terminate the bailment via a written demand notice and the contractor refuses to return the material, shifts cuplock/Mivan panels to an undisclosed site, or sells centering plates to a kabadi scrap dealer, dishonest misappropriation or conversion is complete—making it a cognizable criminal offence under BNS 2023 Section 316(2)/(3) (erstwhile IPC Section 406).",
  },
  {
    q: "How does CC'ing the jurisdictional Police Station email on a Legal Notice speed up scaffolding return?",
    a: "Most petty civil contractors ignore ordinary fact-verified letters expecting slow civil courts. When a formal BNS s.316 Bailee Termination Notice is dispatched through LegalRecovery with the jurisdictional SHO's official policeStationEmail in CC—attaching outward delivery challans and E-Way Bills—the local beat officer routinely calls the contractor for preliminary verification. Fear of an FIR under BNS s.316 and scrap-dealer investigation under s.317 prompts contractors to load return trucks within days.",
  },
  {
    q: "Can I keep charging daily/monthly rent even after the Hire Agreement period expires?",
    a: "Yes. Under Sections 160 and 161 of the Indian Contract Act, 1872, a bailee must return hired goods on expiry or termination of bailment. If the contractor retains your scaffolding beyond the notice period, the Running Daily Hire Meter continues to accrue until 100% of the material is physically returned at your yard OR full Lost-Material Replacement Value is paid, provided your Hire Agreement or Quotation terms specify post-termination holding charges.",
  },
  {
    q: "What if the main real-estate builder locks my rented shuttering inside the project gate because my contractor defaulted?",
    a: "A main builder or EPC employer cannot legally detain third-party rented scaffolding to recover dues owed by their labour/RCC subcontractor. Serve a dual-addressee Legal Notice on both the subcontractor and the Builder's Project Head, enclosing your GST invoices, E-Way Bills, and Hire Agreement proving title retention. If gate access is still denied, file an urgent CPC Order XL Rule 1 Court Receiver application or Specific Relief Act s.7/8 recovery action.",
  },
  {
    q: "What if the contractor sold my MS centering plates or Acrow props to a local scrap dealer?",
    a: "File a written criminal complaint under BNS Section 316(2) (Criminal Breach of Trust by Bailee) against the contractor and BNS Section 317 (Dishonestly Receiving Stolen Property) against the scrap dealer. Attach original OEM purchase bills, colour-code/stencil/embossing photographs, and challan counts so police can trace and seize identifiable material from scrap yards while you claim full New-for-Old Replacement Value.",
  },
  {
    q: "Can Udyam-registered scaffolding and formwork rental owners claim 3x RBI interest under MSME Samadhaan?",
    a: "Yes. If your rental yard holds an Udyam Registration Certificate covering equipment rental/leasing services (NIC 7730 / 4390) prior to the contract date, unpaid monthly hire invoices attract statutory 45-day payment ceilings under MSMED Act Section 15 and compounding monthly interest at 3x the RBI bank rate under Section 16—plus Income Tax Act Section 43B(h) disallowance pressure on corporate builders.",
  },
  {
    q: "What documents prove challan-wise scaffolding reconciliation in court?",
    a: "Courts look for a clean chain of custody: (1) signed Hire Agreement or Work Order with daily/monthly rates and replacement schedule, (2) numbered Outward Delivery Challans signed by the contractor's site supervisor, (3) GST E-Way Bills and transport bilty/weighbridge slips, (4) Inward Return Challans showing short-return counts, and (5) a BSA 2023 Section 63 certificate for WhatsApp site-shifting admissions and ledger PDFs.",
  },
];

const HOWTO_STEPS = [
  {
    name: "Freeze Challan-Wise Reconciliation & Asset Valuation",
    text: "Compile outward vs. inward delivery challans, calculate unpaid hire arrears, running daily meter charges, and the agreed New-for-Old Replacement Value of unreturned cuplock, props, or Mivan panels.",
  },
  {
    name: "Serve BNS s.316 Bailee Termination Notice with Police Station CC",
    text: "Dispatch a 7-day statutory Demand & Bailment Termination Notice via Email, WhatsApp, and Speed Post RPAD—copying the jurisdictional SHO (policeStationEmail) and the main site Builder.",
  },
  {
    name: "Log Site Verification & Scrap/Shifting Intelligence",
    text: "Capture geo-tagged site gate photos, driver statements, and WhatsApp admissions if the contractor shifted material to an undisclosed site or sold pipes to scrap dealers.",
  },
  {
    name: "File BNS s.316 / s.317 FIR & CPC Order XL Receiver / s.9 Petition",
    text: "Escalate non-return after the 7-day cure window to a formal police FIR under BNS s.316(2)/(3) and seek an urgent Court Receiver (CPC Order XL Rule 1) or Arbitration s.9 seizure order.",
  },
  {
    name: "Enforce Running Rent + Replacement Decree (Order 37 / MSEFC)",
    text: "Recover accrued monthly hire, post-termination holding rent, and missing-material replacement cost via CPC Order XXXVII Summary Suit, Commercial Court, or MSME Samadhaan.",
  },
];

export default function UnreturnedScaffoldingRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "Equipment Rental & Machinery Leasing Recovery",
      href: "/industries/equipment-rental-machinery-leasing-recovery",
    },
    {
      label: "Unreturned Scaffolding & Formwork (BNS 316)",
      href: PAGE_URL,
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    inLanguage: "en-IN",
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    // TODO(reviewer): src/data/reviewers.ts is absent in this repository
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
      url: `${SITE_URL}/about`,
    },
    reviewedBy: {
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
    about: [
      "Unreturned Rented Scaffolding Recovery",
      "BNS Section 316 Criminal Breach of Trust by Bailee",
      "Cuplock and Mivan Aluminium Formwork Repossession",
      "Running Hire Meter and Replacement Value Recovery",
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Recover Unreturned Rented Scaffolding, Shuttering & Formwork Under BNS Section 316 in India",
    description: META_DESCRIPTION,
    totalTime: "P14D",
    step: HOWTO_STEPS.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.name,
      text: s.text,
    })),
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
        name: "Unreturned Scaffolding & Formwork (BNS 316)",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            <span>IND-20 · Scaffolding, Shuttering &amp; Formwork Playbook</span>
            <span className="text-slate-500">&bull;</span>
            <span>BNS s.316 Bailee FIR + Replacement Recovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            When a contractor stops paying hire rent and refuses to return your
            cuplock scaffolding, props, or Mivan formwork, immediately terminate
            the bailment under{" "}
            <strong className="text-white">
              Indian Contract Act s.148–161
            </strong>{" "}
            and serve a 7-day{" "}
            <strong className="text-white">
              BNS Section 316 Criminal Breach of Trust
            </strong>{" "}
            notice copying the local Police Station, while keeping your running
            hire meter active under our{" "}
            <Link
              href="/industries/equipment-rental-machinery-leasing-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Equipment Rental &amp; Machinery Leasing Recovery Hub
            </Link>
            .
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <div className="text-xl sm:text-2xl font-black text-red-400">
                BNS s.316
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Criminal Breach of Trust by Bailee (Up to 5 Yrs + Fine)
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400">
                Running Meter
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Daily/Monthly Rent Accrues Until 100% Yard Return
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-amber-400">
                Police CC
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                SHO Email CC Triggers Fast Site Verification
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-100">
                100% Value
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                New-for-Old Replacement for Scrapped / Lost Material
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky TOC */}
          <ScaffoldingTableOfContents />

          {/* Main Editorial Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Why Contractors Vanish */}
            <section
              id="heading-bailment-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Petty Contractors Vanish Mid-Slab—and How to Stop Asset Loss
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  For cuplock scaffolding yards, aluminium formwork (Mivan)
                  lessors, and Acrow prop rental businesses across India, a
                  defaulting civil contractor is never just an unpaid invoice
                  problem—it is an existential inventory theft crisis. While
                  monthly rental arrears may sit at ₹3–8 Lakh, the underlying
                  steel verticals, ledgers, base jacks, MS centering plates, and
                  Mivan wall panels stuck on site are routinely worth{" "}
                  <strong className="text-slate-900">
                    ₹15 Lakh to ₹1.5 Crore+
                  </strong>
                  .
                </p>
                <p>
                  Unlike heavy cranes that carry RTO registration plates and GPS
                  telematics, shuttering and scaffolding components are modular,
                  high-liquidity commodities. When a petty RCC subcontractor
                  runs out of cash mid-slab or gets terminated by the main
                  builder, three destructive events happen within days: (1) the
                  contractor stops answering calls, (2) they secretly load your
                  rented cuplock onto a tempo at night and shift it to another
                  construction site, or (3) they sell your MS centering plates
                  and pipes to a local <em>kabadi</em> scrap dealer at ₹38–45/kg.
                </p>
                <p>
                  Most rental owners lose months because they treat this solely
                  as a civil{" "}
                  <Link
                    href="/recovery/contractor-payment"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    contractor payment recovery
                  </Link>{" "}
                  issue or file an uncoordinated civil suit that takes years to
                  serve summons. By understanding the boundary between a{" "}
                  <Link
                    href="/law/bns-318-cheating-vs-civil-dispute"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    BNS s.318 cheating vs. civil dispute
                  </Link>{" "}
                  and invoking{" "}
                  <strong className="text-slate-900">
                    BNS Section 316 (Criminal Breach of Trust by a Bailee)
                  </strong>
                  , you convert passive non-payment into an actionable criminal +
                  civil recovery rail that compels immediate truck loading.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage BNS 316 Escalation Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Stage BNS 316 &amp; Replacement-Value Escalation Pipeline
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this sequential operational tree the moment a contractor
                misses two consecutive hire bills or blocks site yard inspection.
                Do not send private bouncers to forcibly pull down shuttering
                under live concrete slabs—use statutory bailment termination
                first.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto pb-2 mb-4">
                <svg
                  width="880"
                  height="210"
                  viewBox="0 0 880 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-Stage Scaffolding Recovery Decision Tree under BNS Section 316"
                  className="w-full h-auto"
                >
                  <rect width="880" height="210" rx="16" fill="#0F172A" />
                  {/* Stage 1 */}
                  <rect x="16" y="34" width="152" height="142" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="40" cy="58" r="12" fill="#DC2626" />
                  <text x="40" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                  <text x="60" y="62" fill="#F8FAFC" fontSize="12" fontWeight="bold">Challan Audit</text>
                  <text x="28" y="88" fill="#CBD5E1" fontSize="10.5">Reconcile Outward vs.</text>
                  <text x="28" y="104" fill="#CBD5E1" fontSize="10.5">Inward Challans &amp; fix</text>
                  <text x="28" y="120" fill="#CBD5E1" fontSize="10.5">Replacement Value +</text>
                  <text x="28" y="136" fill="#34D399" fontSize="10.5" fontWeight="bold">Running Rent Meter</text>

                  <path d="M170 105 L188 105" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <rect x="190" y="34" width="152" height="142" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <circle cx="214" cy="58" r="12" fill="#DC2626" />
                  <text x="214" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                  <text x="234" y="62" fill="#F8FAFC" fontSize="12" fontWeight="bold">Police CC Notice</text>
                  <text x="202" y="88" fill="#CBD5E1" fontSize="10.5">7-Day BNS s.316 Bailee</text>
                  <text x="202" y="104" fill="#CBD5E1" fontSize="10.5">Notice via Email/WA/</text>
                  <text x="202" y="120" fill="#CBD5E1" fontSize="10.5">RPAD + CC to Local</text>
                  <text x="202" y="136" fill="#F87171" fontSize="10.5" fontWeight="bold">SHO &amp; Site Builder</text>

                  <path d="M344 105 L362 105" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 3 */}
                  <rect x="364" y="34" width="152" height="142" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="388" cy="58" r="12" fill="#DC2626" />
                  <text x="388" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                  <text x="408" y="62" fill="#F8FAFC" fontSize="12" fontWeight="bold">Site Trace</text>
                  <text x="376" y="88" fill="#CBD5E1" fontSize="10.5">Log geo-tagged gate</text>
                  <text x="376" y="104" fill="#CBD5E1" fontSize="10.5">photos, shifting intel</text>
                  <text x="376" y="120" fill="#CBD5E1" fontSize="10.5">&amp; BSA s.63 WhatsApp</text>
                  <text x="376" y="136" fill="#FBBF24" fontSize="10.5" fontWeight="bold">Admissions</text>

                  <path d="M518 105 L536 105" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 4 */}
                  <rect x="538" y="34" width="152" height="142" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="562" cy="58" r="12" fill="#DC2626" />
                  <text x="562" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                  <text x="582" y="62" fill="#F8FAFC" fontSize="12" fontWeight="bold">FIR &amp; Receiver</text>
                  <text x="550" y="88" fill="#CBD5E1" fontSize="10.5">BNS s.316(2) / s.317</text>
                  <text x="550" y="104" fill="#CBD5E1" fontSize="10.5">FIR + CPC Order XL</text>
                  <text x="550" y="120" fill="#CBD5E1" fontSize="10.5">Rule 1 Court Receiver</text>
                  <text x="550" y="136" fill="#34D399" fontSize="10.5" fontWeight="bold">for Gate-Pass Entry</text>

                  <path d="M692 105 L710 105" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 5 */}
                  <rect x="712" y="34" width="152" height="142" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="736" cy="58" r="12" fill="#DC2626" />
                  <text x="736" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                  <text x="756" y="62" fill="#F8FAFC" fontSize="12" fontWeight="bold">Money Decree</text>
                  <text x="724" y="88" fill="#CBD5E1" fontSize="10.5">CPC Order 37 Summary</text>
                  <text x="724" y="104" fill="#CBD5E1" fontSize="10.5">Suit / MSEFC 3x RBI</text>
                  <text x="724" y="120" fill="#CBD5E1" fontSize="10.5">Interest for Rent +</text>
                  <text x="724" y="136" fill="#F87171" fontSize="10.5" fontWeight="bold">Replacement Cost</text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {HOWTO_STEPS.map((step, idx) => (
                  <div
                    key={step.name}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h3 className="text-sm font-bold text-white">
                        {step.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory & Forum Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Remedy Matrix: BNS 316, Bailment &amp; Court Receiver
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                A scaffolding lessor holds simultaneous criminal, possessory,
                and monetary remedies under Indian law. Using only one track
                leaves leverage on the table; combining them forces rapid
                settlement.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="p-3.5 font-bold">Statute / Provision</th>
                      <th className="p-3.5 font-bold">Trigger Fact</th>
                      <th className="p-3.5 font-bold">Relief / Penalty</th>
                      <th className="p-3.5 font-bold">Strategic Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">
                        BNS 2023 s.316(2) &amp; (3)
                        <span className="block text-[11px] font-normal text-slate-500">
                          (Erstwhile IPC s.406)
                        </span>
                      </td>
                      <td className="p-3.5">
                        Refusal to return after bailment termination, shifting to
                        secret site, or selling to scrap dealer
                      </td>
                      <td className="p-3.5 text-[#DC2626] font-semibold">
                        Up to 5 yrs imprisonment + fine; police search &amp;
                        seizure
                      </td>
                      <td className="p-3.5">
                        Primary deterrent via Police Station CC Notice &amp; FIR
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        BNS 2023 s.317
                        <span className="block text-[11px] font-normal text-slate-500">
                          (Erstwhile IPC s.411)
                        </span>
                      </td>
                      <td className="p-3.5">
                        Kabadi / scrap dealer knowingly buying embossed or
                        rented shuttering pipes/plates
                      </td>
                      <td className="p-3.5 text-[#DC2626] font-semibold">
                        Up to 3 yrs imprisonment + recovery of stolen stock
                      </td>
                      <td className="p-3.5">
                        Compels scrap yards to surrender identifiable Mivan/MS
                        plates
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">
                        Contract Act s.148–161
                        <span className="block text-[11px] font-normal text-slate-500">
                          Bailment &amp; Holding Rent
                        </span>
                      </td>
                      <td className="p-3.5">
                        Contractor retains shuttering beyond hire period or
                        returns damaged/short quantity
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Running daily hire meter + full Replacement Value
                      </td>
                      <td className="p-3.5">
                        Prevents contractor from capping rent on default date
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        CPC Order XL Rule 1 / Specific Relief s.7–8
                      </td>
                      <td className="p-3.5">
                        Main Builder locks contractor&apos;s rented shuttering
                        inside project gate
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Court Receiver appointment &amp; police-assisted
                        demobilization
                      </td>
                      <td className="p-3.5">
                        Breaks illegal gate-pass holdbacks by third-party
                        builders
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-slate-900">
                        CPC Order XXXVII / MSMED Act s.15–18
                      </td>
                      <td className="p-3.5">
                        Liquidated hire invoices, challan shortages &amp;
                        replacement schedule dues
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Summary Decree or 3x RBI compound interest + s.43B(h)
                      </td>
                      <td className="p-3.5">
                        Fast monetary recovery for Udyam-registered rental yards
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive 4 Scenarios */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Shuttering &amp; Formwork Default Scenarios &amp; Action
                  Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select the exact field situation matching your stuck inventory
                to see the immediate 48-hour action, statutory section, and
                challan proof required.
              </p>

              <ScaffoldingScenarioTabs />
            </section>

            {/* Section 5: Worked Running Rent & Replacement Ledger */}
            <section
              id="heading-replacement-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Ledger: Running Hire Meter + Replacement-Value Claim
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Never draft a demand notice asking only for old unpaid monthly
                bills. Your notice must crystallize{" "}
                <strong className="text-slate-900">both</strong> the running
                hire meter and the liquidated New-for-Old Replacement Rate for
                any unreturned or damaged items. Below is a representative
                ledger for a mid-sized residential slab project:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg mb-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-700">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 block">
                      Sample BNS s.316 &amp; Civil Claim Computation
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white">
                      1,200 Cuplock Verticals/Ledgers + 400 MS Centering Plates
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Total Claim: ₹21,98,500
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      1. Unpaid Monthly Hire Arrears (5 Months @ ₹1,85,000/mo)
                    </span>
                    <span className="font-bold text-white">₹9,25,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      2. Post-Termination Running Hire Meter (38 Days @
                      ₹6,166/day until yard return)
                    </span>
                    <span className="font-bold text-amber-300">₹2,34,308</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      3. Missing / Unreturned 35% Stock Replacement (Agreed
                      Schedule Rate)
                    </span>
                    <span className="font-bold text-red-300">₹9,45,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      4. Contractual 18% p.a. / MSME 3x RBI Interest (Pro-rata
                      on Overdue Rent)
                    </span>
                    <span className="font-bold text-emerald-300">₹94,192</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 text-sm sm:text-base font-black">
                    <span className="text-white">
                      Total Enforceable Demand (Exclusive of Ongoing Daily Rent)
                    </span>
                    <span className="text-emerald-400">₹21,98,500</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Udyam-registered scaffolding yards can compute exact statutory
                compounding interest using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 6: Challan Reconciliation & BSA 2023 s.63 Checklist */}
            <section
              id="heading-challan-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Challan-Wise Reconciliation &amp; BSA 2023 s.63 Evidence
                  Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Police Investigating Officers and Commercial Courts reject vague
                claims like &ldquo;contractor kept 10 tonnes of shuttering.&rdquo;
                Assemble these six records before dispatching your BNS s.316
                notice:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Signed Outward Delivery Challans",
                    desc: "Itemized count of cuplock verticals, ledgers, base jacks, and Mivan panels signed by the contractor's site engineer with site address.",
                  },
                  {
                    title: "2. Hire Agreement & Replacement Schedule",
                    desc: "Contract clause prohibiting site transfer/sub-letting, specifying daily running rent until return, and fixing per-piece replacement rates.",
                  },
                  {
                    title: "3. GST E-Way Bills & Transport Bilty",
                    desc: "Proves physical dispatch of your owned inventory to the project site and defeats any builder claim that the material belonged to the subcontractor.",
                  },
                  {
                    title: "4. Outward vs. Inward Reconciliation Sheet",
                    desc: "Line-by-line net balance table showing issued quantity minus returned quantity, plus video-recorded yard unloading of bent/damaged pieces.",
                  },
                  {
                    title: "5. OEM Purchase Bills & Branding Photos",
                    desc: "Original steel/aluminium purchase invoices and photos of your yard's colour-coding, welded initials, or embossed serial stamps.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Certificate",
                    desc: "Mandatory electronic-evidence certificate authenticating WhatsApp chats, voice notes admitting site shifting, and PDF ledgers.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Police Station CC Advantage */}
            <section
              id="heading-police-cc-edge"
              className="scroll-mt-28 bg-amber-50 border border-amber-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why LegalRecovery&apos;s Police Station Email CC Gets Trucks
                  Loaded
                </h2>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-slate-800 leading-relaxed">
                <p>
                  Petty civil contractors routinely ignore standard postal
                  notices because they know civil suits take years. On
                  LegalRecovery, every BNS Section 316 Bailee Notice lets you
                  enter the jurisdictional{" "}
                  <code className="bg-white px-1.5 py-0.5 rounded border border-amber-300 text-xs font-bold text-[#DC2626]">
                    policeStationName
                  </code>{" "}
                  and{" "}
                  <code className="bg-white px-1.5 py-0.5 rounded border border-amber-300 text-xs font-bold text-[#DC2626]">
                    policeStationEmail
                  </code>{" "}
                  so the local SHO receives an official copy simultaneously via{" "}
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Email + WhatsApp + Speed Post RPAD
                  </Link>
                  .
                </p>
                <p>
                  Because the notice cites your signed outward challans,
                  E-Way Bills, and explicit BNS s.316(2) / s.317 statutory
                  warnings, contractors realize that hiding material at a second
                  site or selling to a scrap yard creates immediate arrest and
                  police-inquiry exposure—prompting return truck loading within
                  days. You can also review our{" "}
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    commercial legal notice format workspace
                  </Link>{" "}
                  to understand how formal demand clauses are structured.
                </p>
              </div>
            </section>

            {/* Section 8: Dual-Track B2B CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Send a Single BNS 316 Notice or Upload Multi-Site Defaults
                </h2>
              </div>

              <ScaffoldingCTA />
            </section>

            {/* Section 9: Related Equipment & B2B Links */}
            <section
              id="heading-related-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Related Equipment Leasing &amp; Contractor Recovery Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm">
                <Link
                  href="/industries/equipment-rental-machinery-leasing-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    Parent Industry Hub
                  </span>
                  <span className="font-bold text-slate-900 block">
                    Equipment Rental, Cranes, Scaffolding &amp; Asset Leasing
                    Recovery
                  </span>
                </Link>
                <Link
                  href="/builder-employer-blocking-gate-pass-demobilization-rented-crane-machinery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Sibling Guide · IND-20
                  </span>
                  <span className="font-bold text-slate-900 block">
                    Builder Blocking Gate Pass for Rented Cranes &amp; Machinery
                  </span>
                </Link>
                <Link
                  href="/diesel-generator-dg-set-temporary-chiller-load-bank-rental-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Sibling Guide · IND-20
                  </span>
                  <span className="font-bold text-slate-900 block">
                    DG Set, Temporary Chiller &amp; Load Bank Rental Recovery
                  </span>
                </Link>
                <Link
                  href="/corporate-it-laptop-macbook-workstation-rental-startup-default-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Sibling Guide · IND-20
                  </span>
                  <span className="font-bold text-slate-900 block">
                    Corporate IT Laptop &amp; Workstation Rental Default Recovery
                  </span>
                </Link>
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
                  Frequently Asked Questions: Scaffolding &amp; BNS 316 Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-3 border-t border-slate-100">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Sources &amp; Official Bare Acts
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] hover:underline font-medium"
                    >
                      {source.title} &rarr;
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides
        currentPath={PAGE_URL}
        cluster="equipmentRentalB2B"
      />
    </div>
  );
}
