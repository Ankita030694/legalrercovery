import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CraneGatePassTableOfContents from "./CraneGatePassTableOfContents";
import CraneGatePassScenarioTabs from "./CraneGatePassScenarioTabs";
import CraneGatePassCTA from "./CraneGatePassCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/builder-employer-blocking-gate-pass-demobilization-rented-crane-machinery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Builder Terminated the Contractor and Locked YOUR ₹4 Crore Rented Crane / Piling Rig Inside the Site Gate! Urgent Gate-Pass & Idle-Rent Recovery";

const META_TITLE = "Project Owner Blocking Gate-Pass for Rented Crane? Law";

const META_DESCRIPTION =
  "Project owners have ZERO lien over third-party leased cranes or rigs. Serve a Tortious Conversion Notice & seek CPC Order 40 Receiver orders.";

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
      "The Indian Contract Act, 1872 (Sections 148–161 — Bailment, Bailee Duty to Return & Termination on Inconsistent Act)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Section 27 — Nemo Dat Quod Non Habet: No Title or Lien Beyond Transferor's Ownership)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XL Rule 1 — Appointment of Court Receiver & Order XXXIX Interim Injunctions)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Arbitration and Conciliation Act, 1996 (Section 9 — Urgent Interim Custody & Preservation of Leased Plant)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316 — Criminal Breach of Trust for Wrongful Detention or Shifting of Bailed Machinery)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of GPS Telematics, Gate Logs & Electronic Notices)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 3x RBI Compound Interest on Plant Hire Arrears)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
];

const FAQS = [
  {
    question:
      "Can a builder, developer, or PSU legally block our rented crane's gate pass after terminating the EPC contractor?",
    answer:
      "No. Under the Nemo Dat Quod Non Habet rule (Sale of Goods Act Section 27) and Indian Contract Act Sections 148–161, a main contractor has no ownership title to pass to the Project Owner. An EPC termination clause giving the employer a lien over 'contractor plant' applies strictly to machinery owned by the contractor—never to RC-book and invoice-proved equipment owned by an innocent third-party rental company.",
  },
  {
    question:
      "Can we claim daily idle-rent damages directly from the Project Owner even without a direct contract?",
    answer:
      "Yes. Once you serve a formal Tortious Conversion & Detinue Notice putting the Project Owner on express written notice of your title (with Vahan RC, Tax Invoice, and Gate-In Challan attached), any continued refusal to sign the Gate-Pass makes the Project Owner personally liable in tort for Conversion and Detinue. Courts assess daily idle-rent damages at your prevailing monthly hire rate (for example, ₹35,000/day for a 150-ton crawler crane or piling rig).",
  },
  {
    question:
      "What if site security demands a 'No-Dues Certificate' or 'Indemnity Waiver' before letting our piling rig exit?",
    answer:
      "Refuse to sign any unconditional waiver. Withholding capital machinery worth ₹2–5 Crore to coerce a rental vendor into waiving earned hire charges is unlawful economic duress under Sections 15 and 16 of the Indian Contract Act, 1872. Issue an immediate 'Without Prejudice' protest and serve a Fact-Verified Notice warning of Tortious Conversion damages and BNS Section 316 criminal proceedings.",
  },
  {
    question:
      "How fast can a Court Receiver be appointed to physically demobilize a locked crane or batching plant?",
    answer:
      "Under Order XL Rule 1 of the Code of Civil Procedure (CPC) in a Commercial Suit—or under Section 9 of the Arbitration and Conciliation Act, 1996—Commercial Courts routinely grant urgent ex-parte or short-notice orders appointing a Court Receiver (often an Advocate Commissioner) with local Police Aid when you establish clear title, ongoing EMI/depreciation prejudice, and prior service of a 48-hour demand notice.",
  },
  {
    question:
      "Should we send a copy of the legal notice to the local Police Station (SHO)?",
    answer:
      "Yes, when the defaulting contractor or site security threatens to dismantle, hide, disable GPS trackers, or sub-pledge your machinery. Unlike a pure payment default (which is civil), physical misappropriation or dishonest retention of bailed machinery attracts Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023 (Criminal Breach of Trust). Marking a formal CC to the jurisdictional SHO creates an official record that deters unauthorized highway shifting.",
  },
  {
    question:
      "Can an equipment rental company also claim 3x RBI Bank Rate interest on unpaid monthly crane hire bills?",
    answer:
      "Yes, if your rental company holds an active Micro or Small Udyam Registration predating the Work Order. Equipment rental and machinery leasing without transfer of ownership qualify as 'services rendered' under MSMED Act Sections 15–18, entitling you to 3x RBI Bank Rate compound interest after 45 days and triggering Income Tax Section 43B(h) disallowance for corporate lessees.",
  },
  {
    question:
      "Why do we need Section 12A Commercial Courts urgent relief exemption when filing for gate-pass release?",
    answer:
      "Section 12A of the Commercial Courts Act, 2015 ordinarily mandates pre-institution mediation before filing a commercial suit. However, where an urgent interim relief—such as an Order XL Rule 1 Court Receiver or Order XXXIX mandatory injunction for crane demobilization—is sought, Section 12A explicitly waives mandatory pre-institution mediation so you can move court immediately.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-18T10:00:00+05:30",
  dateModified: "2026-11-18T10:00:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
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
    name: "Third-Party Rented Crane & Machinery Gate-Pass Demobilization Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Demobilize a Third-Party Rented Crane or Piling Rig When a Project Owner Blocks the Site Gate-Pass",
  description:
    "5-stage operational and statutory playbook for equipment rental owners to compel gate-pass release and recover daily idle-rent damages.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Compile Title, Bailment & Gate-In Proof",
      text: "Assemble Vahan RC / OEM Tax Invoice, e-Way Bill, Hire Agreement no-lien clause, and signed Site Gate-In Challan with BSA s.63 certificate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve 48-Hour Joint Owner + Contractor Tortious Conversion Notice",
      text: "Put both the Project Owner (MD & Site Head) and terminated EPC Contractor on written notice for daily idle-rent damages under Tort of Detinue/Conversion.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Mark BNS Section 316 Intimation to Jurisdictional Police Station",
      text: "Send formal CC to the local SHO with engine/chassis numbers and GPS telematics logs to prevent clandestine dismantling or highway shifting.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Move Commercial Court (Order XL Rule 1) or Arbitration s.9",
      text: "File an urgent petition invoking Section 12A urgent-relief exemption for an ex-parte Court Receiver with Police Aid.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Execute Police-Assisted Demobilization & Idle-Rent Recovery",
      text: "Remove the crane under Receiver panchnama and pursue Order XXXVII CPC / MSMED s.18 recovery for hire arrears and conversion damages.",
    },
  ],
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
      name: "Equipment Rental & Machinery Leasing Recovery",
      item: `${SITE_URL}/industries/equipment-rental-machinery-leasing-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Crane & Rig Gate-Pass Recovery",
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

export default function CraneGatePassDemobilizationPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    {
      label: "Equipment Rental & Machinery Leasing",
      href: "/industries/equipment-rental-machinery-leasing-recovery",
    },
    { label: "Crane & Rig Gate-Pass Recovery", href: PAGE_URL },
  ];

  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-20 Equipment Rental Playbook</span>
              <span aria-hidden="true">&bull;</span>
              <span>Nemo Dat &amp; Tort of Conversion</span>
              <span aria-hidden="true">&bull;</span>
              <span>Order XL Court Receiver</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* 40-60 Word Executive Creditor Answer Box + Parent Hub Link */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer
              </span>
              A Project Owner or PSU has <strong>zero legal lien</strong> over
              third-party rented cranes, piling rigs, or boom lifts when it
              terminates an EPC contractor. Under{" "}
              <em>Nemo Dat Quod Non Habet</em> and Contract Act ss.148–161,
              serving a{" "}
              <strong>
                48-Hour Joint Owner+Contractor Tortious Conversion Notice
              </strong>{" "}
              quantifying daily idle-rent unlocks Gate-Passes rapidly under our{" "}
              <Link
                href="/industries/equipment-rental-machinery-leasing-recovery"
                className="text-red-300 underline hover:text-white font-semibold"
              >
                Equipment Rental &amp; Machinery Leasing Recovery Hub
              </Link>
              .
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">
                  Zero Lien
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Employer Has No Title Over Third-Party RC / Invoice Plant
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">
                  &#8377;35,000+/Day
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Personal Tortious Conversion &amp; Idle-Rent Liability on Owner
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">
                  48 Hours
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Joint Notice Window Before Court Receiver &amp; SHO Filing
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">
                  Order XL + s.9
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Court Receiver &amp; Police Aid Demobilization Orders
                </p>
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
            {/* Left Sticky Sidebar TOC */}
            <CraneGatePassTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1 */}
              <section
                id="heading-site-lockout-crisis"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Why Project Owners Lock Third-Party Cranes—And Why It Is Illegal
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Across Indian highway, metro, refinery, and real estate EPC
                    projects, a recurring infrastructure crisis hits innocent
                    equipment rental companies every week: the Project Owner
                    (developer, NHAI/PSU concessionaire, or industrial plant)
                    terminates its main civil contractor for schedule slippage
                    or liquidity default. Immediately, site security locks the
                    project gates and refuses to sign the demobilization{" "}
                    <strong>Gate-Pass</strong> for ₹2 Crore to ₹8 Crore crawler
                    cranes, tower cranes, hydraulic piling rigs, boom lifts, and
                    batching plants hired from third-party lessors.
                  </p>
                  <p>
                    Project Owners routinely point to standard FIDIC or EPC
                    termination clauses stating that{" "}
                    <em>
                      &ldquo;upon termination, all contractor plant and machinery
                      at site shall be deemed at the Employer&rsquo;s disposal
                      to complete balance works or recover liquidated
                      damages.&rdquo;
                    </em>{" "}
                    As a matter of settled Indian property and contract law,
                    that clause cannot touch your machinery for three decisive
                    reasons:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>
                        <em>Nemo Dat Quod Non Habet</em> (Sale of Goods Act
                        s.27):
                      </strong>{" "}
                      A civil contractor cannot grant a security interest,
                      pledge, or lien to a Project Owner over equipment it
                      never owned. Where Vahan RC records, OEM tax invoices,
                      and your Hire Agreement prove third-party lessor
                      ownership, the Project Owner acquires zero right of
                      retention.
                    </li>
                    <li>
                      <strong>
                        Pure Bailment Law (Contract Act ss.148–161):
                      </strong>{" "}
                      Equipment hire is a contract of bailment. Under Section
                      153, any act by the bailee inconsistent with the bailment
                      renders the bailment voidable at the lessor&rsquo;s option;
                      under Section 160–161, the bailee is statutorily bound to
                      return the hired plant immediately upon expiry or
                      termination.
                    </li>
                    <li>
                      <strong>
                        No Privity Does Not Mean Immunity (Tort of Detinue &amp;
                        Conversion):
                      </strong>{" "}
                      Even though the Project Owner is not a signatory to your
                      Crane Hire Agreement, once the Project Owner receives
                      written proof of your ownership and continues blocking the
                      gate, it commits an independent civil wrong—the{" "}
                      <strong>Tort of Conversion and Detinue</strong>—exposing
                      the Project Owner directly to daily idle-rent damages.
                    </li>
                  </ul>
                  <p>
                    For broader context on contractor-level billing disputes vs.
                    third-party asset recovery, review our{" "}
                    <Link
                      href="/recovery/contractor-payment"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Contractor Payment &amp; Retention Recovery Guide
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/industries/equipment-rental-machinery-leasing-recovery"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      IND-20 Equipment Rental Recovery Hub
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 2: 5-Stage Decision Tree */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    5-Stage Crane &amp; Piling Rig Demobilization Decision Tree
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Never send empty low-bed trailers to a hostile site gate
                  without first creating a statutory paper trail. Follow this
                  5-stage escalation rail to convert a stalled gate blockade
                  into an enforceable demobilization order:
                </p>

                {/* Desktop SVG Decision Tree */}
                <div className="hidden md:block mb-6 overflow-x-auto">
                  <svg
                    viewBox="0 0 920 220"
                    width={920}
                    height={220}
                    role="img"
                    aria-label="5-Stage Gate-Pass Demobilization and Court Receiver Decision Tree"
                    className="w-full h-auto rounded-xl border border-slate-200 bg-slate-900"
                  >
                    {/* Stage 1 */}
                    <rect x="20" y="30" width="155" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="97" y="58" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 (HR 0–6)</text>
                    <text x="97" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Title &amp; Gate-In</text>
                    <text x="97" y="102" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Audit</text>
                    <text x="97" y="128" textAnchor="middle" fill="#CBD5E1" fontSize="10">Vahan RC, Tax Invoice,</text>
                    <text x="97" y="143" textAnchor="middle" fill="#CBD5E1" fontSize="10">e-Way Bill, Gate-In Pass</text>
                    <text x="97" y="158" textAnchor="middle" fill="#94A3B8" fontSize="10">+ BSA s.63 Cert</text>

                    <line x1="175" y1="105" x2="200" y2="105" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="200,100 210,105 200,110" fill="#DC2626" />

                    {/* Stage 2 */}
                    <rect x="210" y="30" width="155" height="150" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="2" />
                    <text x="287" y="58" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold">STAGE 2 (48 HRS)</text>
                    <text x="287" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Joint Conversion</text>
                    <text x="287" y="102" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Notice</text>
                    <text x="287" y="128" textAnchor="middle" fill="#FECACA" fontSize="10">Owner MD + Contractor</text>
                    <text x="287" y="143" textAnchor="middle" fill="#FECACA" fontSize="10">₹35k+/day Idle-Rent</text>
                    <text x="287" y="158" textAnchor="middle" fill="#FCA5A5" fontSize="10">Email + WATI + RPAD</text>

                    <line x1="365" y1="105" x2="390" y2="105" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="390,100 400,105 390,110" fill="#DC2626" />

                    {/* Stage 3 */}
                    <rect x="400" y="30" width="155" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="477" y="58" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 3 (DAY 3)</text>
                    <text x="477" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">BNS s.316 SHO</text>
                    <text x="477" y="102" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Intimation</text>
                    <text x="477" y="128" textAnchor="middle" fill="#CBD5E1" fontSize="10">Police Station CC with</text>
                    <text x="477" y="143" textAnchor="middle" fill="#CBD5E1" fontSize="10">Chassis/Engine No. &amp;</text>
                    <text x="477" y="158" textAnchor="middle" fill="#94A3B8" fontSize="10">GPS Tamper Logs</text>

                    <line x1="555" y1="105" x2="580" y2="105" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="580,100 590,105 580,110" fill="#DC2626" />

                    {/* Stage 4 */}
                    <rect x="590" y="30" width="155" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="667" y="58" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 4 (DAY 5–10)</text>
                    <text x="667" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Order XL / Sec 9</text>
                    <text x="667" y="102" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Receiver Order</text>
                    <text x="667" y="128" textAnchor="middle" fill="#CBD5E1" fontSize="10">Commercial Court</text>
                    <text x="667" y="143" textAnchor="middle" fill="#CBD5E1" fontSize="10">s.12A Urgent Exemption</text>
                    <text x="667" y="158" textAnchor="middle" fill="#94A3B8" fontSize="10">+ Police Protection</text>

                    <line x1="745" y1="105" x2="770" y2="105" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="770,100 780,105 770,110" fill="#DC2626" />

                    {/* Stage 5 */}
                    <rect x="780" y="30" width="120" height="150" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                    <text x="840" y="58" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="bold">STAGE 5</text>
                    <text x="840" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Demobilize</text>
                    <text x="840" y="102" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">&amp; Recover</text>
                    <text x="840" y="128" textAnchor="middle" fill="#D1FAE5" fontSize="10">Receiver Panchnama</text>
                    <text x="840" y="143" textAnchor="middle" fill="#D1FAE5" fontSize="10">+ Order 37 / MSME</text>
                    <text x="840" y="158" textAnchor="middle" fill="#A7F3D0" fontSize="10">Arrears Suit</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  {[
                    {
                      stage: "Stage 1 (Hours 0–6)",
                      title: "Title, Bailment & Gate-In Proof Audit",
                      desc: "Assemble Vahan RC, OEM Tax Invoice, e-Way Bill, signed Site Gate-In Challan, and BSA s.63 certificate.",
                    },
                    {
                      stage: "Stage 2 (48 Hours)",
                      title: "Joint Owner + Contractor Tortious Conversion Notice",
                      desc: "Put the Project Owner MD and terminated Contractor on written notice for ₹35,000+/day idle-rent liability.",
                    },
                    {
                      stage: "Stage 3 (Day 3)",
                      title: "BNS s.316 Police Station Intimation",
                      desc: "Mark formal CC to the jurisdictional SHO with chassis/engine numbers and GPS logs to stop clandestine shifting.",
                    },
                    {
                      stage: "Stage 4 (Days 5–10)",
                      title: "CPC Order XL Rule 1 / Arbitration s.9 Receiver",
                      desc: "Invoke Commercial Courts s.12A urgent-relief exemption to obtain an ex-parte Court Receiver with Police Aid.",
                    },
                    {
                      stage: "Stage 5 (Execution)",
                      title: "Police-Assisted Exit & Idle-Rent Suit",
                      desc: "Demobilize the crane under Receiver panchnama and enforce unpaid hire + idle-rent via Order XXXVII or MSEFC.",
                    },
                  ].map((item) => (
                    <div
                      key={item.stage}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                        {item.stage}
                      </span>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Statutory Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory &amp; Tort Matrix: Third-Party Crane &amp; Rig Recovery
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">Statute / Doctrine</th>
                        <th className="p-3.5 font-bold">Target Party</th>
                        <th className="p-3.5 font-bold">Legal Remedy &amp; Hook</th>
                        <th className="p-3.5 font-bold">Typical Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          Sale of Goods Act s.27 (<em>Nemo Dat</em>) &amp; Contract Act ss.148–161
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Project Owner + Terminated Contractor
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Defeats EPC general-lien clauses; contractor cannot pledge lessor&rsquo;s RC/invoice-proved machinery.
                        </td>
                        <td className="p-3.5 font-semibold text-emerald-700">
                          Immediate (48-Hr Notice)
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          Tort of Detinue &amp; Conversion
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Project Owner / PSU Site Head Personally
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Imposes personal liability on the Project Owner for daily idle-rent (&#8377;35,000+/day) from date of gate refusal.
                        </td>
                        <td className="p-3.5 font-semibold text-emerald-700">
                          48-Hour Cure Window
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          BNS 2023 Section 316 (Criminal Breach of Trust)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Contractor Directors &amp; Dishonest Custodians
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Triggered by clandestine shifting, GPS tampering, or sub-pledging of bailed machinery; Police Station SHO CC.
                        </td>
                        <td className="p-3.5 font-semibold text-amber-700">
                          Day 3 Escalation
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          CPC Order XL Rule 1 &amp; Order XXXIX
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Both Owner &amp; Contractor (Co-Defendants)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Commercial Court appoints Advocate Commissioner / Court Receiver with Police Protection to physically remove crane.
                        </td>
                        <td className="p-3.5 font-semibold text-slate-900">
                          7–15 Days (Urgent s.12A)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          Arbitration Act Section 9
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Lessee-Contractor (+ Third-Party Custodian)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Interim custody order preserving leased plant when Hire Agreement contains an arbitration clause.
                        </td>
                        <td className="p-3.5 font-semibold text-slate-900">
                          7–14 Days
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          MSMED Act ss.15–18 &amp; IT Act s.43B(h)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Udyam-Registered Rental Lessors vs. Contractor
                        </td>
                        <td className="p-3.5 text-slate-700">
                          3x RBI Bank Rate compound interest on unpaid monthly crane hire + tax disallowance on corporate lessees.
                        </td>
                        <td className="p-3.5 font-semibold text-emerald-700">
                          45-Day Statutory Trigger
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    4 Site Gate-Pass Lockout Scenarios &amp; Legal Counters
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Select your exact site blockade situation below to inspect the
                  Project Owner&rsquo;s excuse, the statutory counter-weapon,
                  and the required BSA 2023 evidence:
                </p>
                <CraneGatePassScenarioTabs />
              </section>

              {/* Section 5: Worked Idle-Rent & Conversion Ledger */}
              <section
                id="heading-idle-rent-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Worked Ledger: ₹4.2 Cr Crawler Crane Idle-Rent &amp; Conversion Claim
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Quantifying daily Tortious Conversion damages transforms the
                  Project Owner&rsquo;s risk calculus overnight. Below is an
                  illustrative recovery ledger for a{" "}
                  <strong>150-Ton Crawler Crane / Hydraulic Piling Rig</strong>{" "}
                  (Asset Replacement Value: &#8377;4.20 Crore) detained at a
                  highway EPC site for 42 days post-termination:
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-red-400">
                      Illustrative Conversion &amp; Hire Arrears Schedule
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      Jointly Noticeable to Owner + Contractor
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between gap-4 border-b border-slate-800/80 pb-2">
                      <span className="text-slate-300">
                        1. Unpaid Monthly Hire Arrears (3 Months @ &#8377;10,50,000/mo + GST) — <em>Contractor Liability</em>
                      </span>
                      <span className="font-bold text-slate-100 shrink-0">
                        &#8377;37,17,000
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-slate-800/80 pb-2">
                      <span className="text-slate-300">
                        2. Tortious Conversion Idle-Rent (42 Days @ &#8377;35,000/day) — <em>Project Owner Direct Liability</em>
                      </span>
                      <span className="font-bold text-red-400 shrink-0">
                        &#8377;14,70,000
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-slate-800/80 pb-2">
                      <span className="text-slate-300">
                        3. Abortive Low-Bed Trailer &amp; Support Crane Standby Charges (2 Trips)
                      </span>
                      <span className="font-bold text-slate-100 shrink-0">
                        &#8377;2,40,000
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-slate-800/80 pb-2">
                      <span className="text-slate-300">
                        4. Commercial / MSMED Penal Interest (Calculated via Retention &amp; Delay Calculator)
                      </span>
                      <span className="font-bold text-emerald-400 shrink-0">
                        &#8377;4,18,500
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 pt-2 text-sm sm:text-base font-black">
                      <span className="text-white">
                        Total Recoverable Claim (Excluding &#8377;4.20 Cr Asset Return)
                      </span>
                      <span className="text-emerald-400 shrink-0">
                        &#8377;58,45,500
                      </span>
                    </div>
                  </div>

                  <div className="bg-emerald-950/50 border border-emerald-800/60 rounded-xl p-3.5 text-xs text-emerald-200 leading-relaxed">
                    <strong>Commercial Leverage:</strong> Once a Project
                    Owner&rsquo;s Legal &amp; Finance Director sees &#8377;35,000/day
                    accruing directly on the Owner&rsquo;s balance sheet for
                    wrongful detention of a third-party crane, site management
                    typically issues the unconditional Gate-Pass within 48 to 72
                    hours to cap tortious damages. Use our{" "}
                    <Link
                      href="/tools/construction-retention-dlp-escalation-claim-calculator"
                      className="text-white underline font-bold"
                    >
                      Construction Escalation &amp; Interest Calculator
                    </Link>{" "}
                    to benchmark delay interest on your ledger.
                  </div>
                </div>
              </section>

              {/* Section 6: BSA s.63 Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    BSA 2023 s.63 Ownership &amp; Gate-Pass Refusal Checklist
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  To prevail in an urgent Order XL Rule 1 or Section 9 petition,
                  your title and gate-refusal proof must be airtight and
                  certified under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "1. Primary Ownership & Chassis Proof",
                      desc: "Vahan RC Book (for wheeled cranes/trailers), OEM Tax Invoice, Customs Bill of Entry, and clear photo of the riveted Chassis/Serial Number plate.",
                    },
                    {
                      title: "2. Hire Agreement & No-Lien Clause",
                      desc: "Executed Equipment Rental Agreement / Work Order explicitly reserving title with the lessor and barring sub-leasing or third-party liens.",
                    },
                    {
                      title: "3. Site Gate-In & e-Way Bill Trail",
                      desc: "GST e-Way Bill showing consignee site address, Security Gate-In Register entry, and TPI safety inspection certificate.",
                    },
                    {
                      title: "4. Written Gate-Pass Refusal Proof",
                      desc: "Timestamped email to Project Manager, WhatsApp chat with site admin, or video of security guard refusing exit—certified under BSA s.63.",
                    },
                    {
                      title: "5. GPS Telematics & Immobilizer Logs",
                      desc: "Live GPS coordinates proving the machine remains stationary inside the Project Owner's fenced yard post-termination.",
                    },
                    {
                      title: "6. Financer Hypothecation / Insurance",
                      desc: "Bank/NBFC hypothecation statement and Contractor's All Risk / CPM insurance policy naming your rental entity as Insured Owner.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <p className="text-sm font-bold text-slate-900 mb-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7: Court Receiver & Police Protection */}
              <section
                id="heading-receiver-police-protocol"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Executing Court Receiver &amp; Police Aid Orders Safely
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Equipment rental owners frequently ask whether they should
                    approach the police first or file a civil petition. The
                    answer depends on distinguishing unlawful civil detention
                    from criminal misappropriation—a line examined in our{" "}
                    <Link
                      href="/law/bns-318-cheating-vs-civil-dispute"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      BNS 318 Cheating vs. Civil Dispute Analysis
                    </Link>
                    :
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
                        When Police Alone Won&rsquo;t Open the Gate
                      </p>
                      <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                        If the Project Owner tells local police that the crane
                        is part of an ongoing EPC contract dispute, officers
                        will usually treat it as civil and ask for a court
                        order. That is why serving the{" "}
                        <strong>48-Hour Joint Conversion Notice</strong>{" "}
                        first—and moving immediately for an{" "}
                        <strong>Order XL Rule 1 Court Receiver</strong>—is
                        critical.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
                        When Court Receiver + Police Aid Works Fast
                      </p>
                      <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                        Once the Commercial Court appoints an Advocate
                        Commissioner as Receiver with a{" "}
                        <strong>Police Protection direction</strong>, local
                        police are judicially bound to accompany the Receiver,
                        break any lock obstructing your crane, prepare a site
                        panchnama, and supervise safe loading onto your low-bed
                        trailers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Dual-Track CTA */}
              <section
                id="heading-dual-cta"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Launch Your Joint Gate-Pass &amp; Idle-Rent Notice Now
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Every 24 hours your crane or piling rig sits trapped behind a
                  builder&rsquo;s gate costs you EMI, depreciation, and lost
                  deployment revenue. Dispatch a Fact-verified notice via
                  Email, WhatsApp, and Speed Post RPAD—or onboard multiple
                  defaulting sites through our{" "}
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Bulk Multi-Channel Legal Notice Engine
                  </Link>
                  .
                </p>
                <CraneGatePassCTA />
              </section>

              {/* Section 9: IND-20 Internal Link Network */}
              <section
                id="heading-related-links"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    IND-20 Equipment Rental &amp; Asset Recovery Network
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      tag: "Parent Industry Hub",
                      title: "Equipment Rental & Machinery Leasing Recovery Hub",
                      href: "/industries/equipment-rental-machinery-leasing-recovery",
                      desc: "Complete IND-20 escalation matrix for cranes, scaffolding, DG sets, MHE forklifts, and medical/IT leasing.",
                    },
                    {
                      tag: "Notice Template (P1)",
                      title: "Equipment Rental Arrears & Gate-Pass BNS s.316 Notice",
                      href: "/templates/equipment-rental-arrears-gate-pass-repossession-bns-316-notice",
                      desc: "Editable ready-to-use notice format demanding immediate gate-pass release and daily idle-rent.",
                    },
                    {
                      tag: "Sibling Spoke",
                      title: "Unreturned Scaffolding, Shuttering & Formwork BNS s.316",
                      href: "/unreturned-rented-scaffolding-shuttering-formwork-bns-316-recovery",
                      desc: "Stop contractors from selling or retaining rented cuplock scaffolding and aluminum formwork.",
                    },
                    {
                      tag: "Sibling Spoke",
                      title: "DG Set, Temporary Chiller & Load-Bank Rental Recovery",
                      href: "/diesel-generator-dg-set-temporary-chiller-load-bank-rental-recovery",
                      desc: "Recover unpaid power-rental arrears and repossess containerized DG sets from defaulting sites.",
                    },
                    {
                      tag: "Sibling Spoke",
                      title: "Corporate IT Laptop & Workstation Rental Default Recovery",
                      href: "/corporate-it-laptop-macbook-workstation-rental-startup-default-recovery",
                      desc: "MDM lock guardrails, BNS s.316 notices, and Order 37 recovery for unreturned MacBook/IT fleets.",
                    },
                    {
                      tag: "Calculator Tool (T1)",
                      title: "Construction Escalation & Delay Interest Calculator",
                      href: "/tools/construction-retention-dlp-escalation-claim-calculator",
                      desc: "Compute statutory compound interest and retention/standby escalation on stalled infra projects.",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group block p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#DC2626]/50 hover:bg-white transition-all"
                    >
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                        {item.tag}
                      </span>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                        {item.title} &rarr;
                      </p>
                      <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
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
                    Frequently Asked Questions: Crane Gate-Pass Lockouts
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:border-slate-300 transition-colors"
                    >
                      <summary className="cursor-pointer list-none p-4 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-black text-lg leading-none group-open:rotate-45 transition-transform shrink-0">
                          +
                        </span>
                      </summary>
                      <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Bare Acts & Official Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Bare Acts &amp; Official Sources
                  </h2>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-black mt-0.5">
                        &bull;
                      </span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-700 hover:text-[#DC2626] underline font-medium"
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
