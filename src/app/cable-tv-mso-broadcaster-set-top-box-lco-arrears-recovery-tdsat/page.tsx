import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MsoLcoTableOfContents from "./MsoLcoTableOfContents";
import MsoLcoScenarioTabs from "./MsoLcoScenarioTabs";
import MsoLcoCTA from "./MsoLcoCTA";

export const revalidate = 86400;

const PAGE_URL = "/cable-tv-mso-broadcaster-set-top-box-lco-arrears-recovery-tdsat";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Local Cable Operator (LCO) or Fiber Franchisee Swapped 2,000 Subsidized Set-Top Boxes / ONTs to a Rival Network Without Paying Arrears?";

// Tightened from 63ch PDF draft to 53ch for Screaming Frog 30-60ch compliance
const META_TITLE = "MSO & ISP Partner: LCO Set-Top-Box & Arrears Recovery";

// Tightened from 168ch PDF draft to 149ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "MSOs & ISPs lose crores when LCO/LFP partners swap subsidized STBs/ONTs overnight. Execute TRAI 21-day notices & TDSAT/arbitration arrears recovery.";

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
      "The Telecom Regulatory Authority of India (TRAI) Act, 1997 (Sections 14, 14A & 14N — TDSAT Exclusive Jurisdiction & Decree Execution)",
    url: "https://www.indiacode.nic.in/handle/123456789/1970",
  },
  {
    title:
      "TRAI Telecommunication (Broadcasting and Cable) Services Interconnection (Addressable Systems) Regulations, 2017 (Regs 15 & 17 — 21-Day Disconnection Notice)",
    url: "https://www.trai.gov.in/notifications/press-release/trai-notifies-new-regulatory-framework-broadcasting-and-cable-services",
  },
  {
    title:
      "Telecom Disputes Settlement and Appellate Tribunal (TDSAT) — Filing & Recovery Petition Procedure",
    url: "https://tdsat.gov.in/",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 73, 74 & 148–160 — Bailment of Subsidized STBs/ONTs & Unamortized Hardware Loss)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Bharatiya Nyaya Sanhita, 2023 (Section 316 — Criminal Breach of Trust for Misappropriated Hardware) & Bharatiya Sakshya Adhiniyam, 2023 (Section 63)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question: "Can an MSO file a Civil Suit or Order 37 Summary Suit against a defaulting LCO?",
    answer:
      "No, if both the Multi-System Operator (MSO) and Local Cable Operator (LCO) are registered service providers under the Cable Television Networks (Regulation) Act, 1995. Under Section 14(a)(ii) read with Section 15 of the TRAI Act, 1997, TDSAT exercises exclusive jurisdiction over service-provider-to-service-provider disputes, barring Civil Courts. However, if a regional ISP's Local Fiber Partner (LFP) is an unregistered commercial collection agent without an independent DoT/TRAI license, Commercial Courts or Arbitration retain jurisdiction.",
  },
  {
    question: "Why is the TRAI 21-day disconnection notice mandatory before approaching TDSAT?",
    answer:
      "Regulation 17 of the TRAI Telecommunication (Broadcasting and Cable) Services Interconnection (Addressable Systems) Regulations, 2017 prohibits an MSO or broadcaster from disconnecting signals without serving a 21-day written notice specifying the exact default grounds and overdue amount. Skipping this statutory 21-day notice exposes the MSO to immediate TDSAT restoration orders and damages counterclaims.",
  },
  {
    question: "How can an MSO recover the full cost of subsidized Set-Top Boxes (STBs) swapped to a rival?",
    answer:
      "Standard Model Interconnection Agreements (MIA) and Standard Interconnection Agreements (SIA) stipulate that subsidized STBs and viewing cards remain the MSO's property under bailment (Sections 148–160, Indian Contract Act, 1872). Upon termination, the MSO can claim either physical return of the serialized hardware under Specific Relief Act Sections 7–8 or depreciated replacement cost before TDSAT, backed by signed delivery challans and CAS/SMS pairing logs.",
  },
  {
    question: "Is swapping or flashing an MSO's STBs to a rival network a criminal offence?",
    answer:
      "Yes. Where an LCO or LFP is entrusted with serialized STBs or Dual-Band ONTs on bailment and dishonestly sells, flashes, or diverts those devices to a competing network while refusing return, it attracts Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023 (formerly IPC s.406). A parallel BNS s.316 criminal notice alongside a TDSAT/civil money claim accelerates hardware recovery.",
  },
  {
    question: "How does a regional broadband ISP recover arrears from a defaulting Local Fiber Partner (LFP)?",
    answer:
      "Regional ISPs should first audit the LFP's license status. If the LFP holds a VNO/ISP license, escalate before TDSAT. If the LFP is an unlicensed franchisee, serve a 15-day Advocate Demand Notice quantifying wallet/revenue-share arrears and unreturned ONTs, present any dishonoured security cheques under Section 138 of the NI Act, 1881, and file an Order XXXVII CPC summary suit or Section 21 arbitration.",
  },
  {
    question: "What digital records are required to prove LCO subscription arrears before TDSAT?",
    answer:
      "TDSAT relies heavily on audited Conditional Access System (CAS) and Subscriber Management System (SMS) exports showing active VC/MAC numbers, Monthly Subscriber Reports (MSR), GST e-invoices, partner wallet recharge ledgers, and signed hardware delivery challans. All electronic logs must be accompanied by a Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023 certificate signed by the NOC/SMS custodian.",
  },
  {
    question: "How is a TDSAT recovery decree actually enforced against an LCO's bank accounts?",
    answer:
      "Under Section 14N of the TRAI Act, 1997, an order or money decree passed by TDSAT is executable as a decree of a Civil Court. Once TDSAT passes a recovery award, the MSO or broadcaster can initiate execution proceedings (or seek transfer to the local Civil/Commercial Court where the LCO's assets sit) for bank account attachment, movable property seizure, and garnishee orders.",
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
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
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
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How MSOs & ISPs Recover Swapped Set-Top Boxes, ONTs & LCO Arrears",
  description:
    "5-step TRAI Interconnection Regulation and TDSAT/Arbitration recovery workflow for MSOs, broadcasters, and regional ISPs.",
  step: [
    {
      "@type": "HowToStep",
      name: "Audit CAS/SMS Pairing & Hardware Bailment Challans",
      text: "Export STB/ONT serial numbers, VC-card pairing logs, Monthly Subscriber Reports, and signed delivery challans.",
    },
    {
      "@type": "HowToStep",
      name: "Serve Mandatory TRAI 21-Day Interconnect Disconnection Notice",
      text: "Dispatch a Regulation 17 21-day written notice detailing subscription arrears and hardware return demands.",
    },
    {
      "@type": "HowToStep",
      name: "Bifurcate Forum: TDSAT s.14 vs Commercial Court / Arbitration",
      text: "Route MIB-registered MSO-LCO disputes to TDSAT under TRAI Act s.14; route unlicensed LFP franchisee defaults to Commercial Court or Arbitration.",
    },
    {
      "@type": "HowToStep",
      name: "Issue BNS s.316 Hardware Misappropriation & NI Act s.138 Notices",
      text: "Invoke criminal breach of trust for swapped or flashed STBs/ONTs and prosecute dishonoured security cheques.",
    },
    {
      "@type": "HowToStep",
      name: "Execute TDSAT Money Decree Under TRAI Act s.14N",
      text: "Enforce the final TDSAT recovery order or Commercial Court decree via bank account attachment and garnishee warrants.",
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
      name: "Telecom, ISP & MSP Recovery",
      item: `${SITE_URL}/industries/telecom-isp-datacenter-msp-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MSO & LCO STB Arrears Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function MsoLcoArrearsRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-18 Telecom &amp; Broadcasting</span>
            <span aria-hidden="true">&bull;</span>
            <span>TRAI Interconnect &amp; TDSAT Recovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word AI-Citation Executive Statutory Summary Box + Inline Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/telecom-isp-datacenter-msp-recovery"
              className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
            >
              Telecom, ISP &amp; Broadcasting Recovery Hub
            </Link>
            , Multi-System Operators (MSOs) and regional ISPs recover swapped STBs, ONTs, and unpaid subscription arrears by serving a mandatory 21-day TRAI Regulation 17 notice, filing a Section 14 TRAI Act petition before TDSAT (or Commercial Court for unlicensed LFPs), and invoking Contract Act s.148 bailment and BNS s.316 hardware claims.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-red-400">21 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                TRAI Reg. 17 Mandatory Disconnection Notice
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-slate-100">TRAI s.14</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Exclusive TDSAT Forum for MSO–LCO Disputes
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-amber-400">BNS s.316</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Criminal Breach of Trust on Swapped STBs/ONTs
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3 Years</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Statutory Limitation from Default Ledger Date
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Telecom, ISP & MSP Recovery",
                href: "/industries/telecom-isp-datacenter-msp-recovery",
              },
              {
                label: "MSO & LCO STB Arrears Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <MsoLcoTableOfContents />

          {/* Right Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-lco-migration"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why LCO &amp; LFP Cash-Pocket Migrations Destroy MSO Unit Economics
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across Tier-1, Tier-2, and Tier-3 Indian markets, Multi-System Operators (MSOs) and regional FTTH broadband ISPs scale last-mile distribution through 50 to 500 Local Cable Operators (LCOs) and Local Fiber Partners (LFPs). To capture household density, the MSO or ISP subsidizes Customer Premises Equipment (CPE)—supplying MPEG-4 HD Set-Top Boxes (STBs), Android hybrid boxes, or Dual-Band ONT routers at ₹350–₹500 activation deposits despite actual landed hardware costs of ₹1,650–₹2,800 per unit.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The structural vulnerability surfaces when an LCO collects monthly subscriber cash or UPI payments across 1,500–3,000 homes, withholds the MSO&apos;s wholesale revenue share for 90 to 150 days, and executes an overnight &ldquo;network swap&rdquo;—re-pairing homes onto a rival MSO&apos;s headend or splicing FTTH drop cables onto a competing ISP&apos;s OLT. Worse, defaulting LCOs frequently retain, resell, or flash the subsidized STBs while fabricating retrospective &ldquo;signal blackout&rdquo; excuses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                    The Jurisdiction Trap
                  </p>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    Filing an ordinary Civil Suit or Order XXXVII CPC summary suit against a MIB-registered LCO often triggers immediate dismissal under Section 15 of the TRAI Act, 1997 because TDSAT holds exclusive jurisdiction over MSO–LCO disputes.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                    The Bailment &amp; TRAI Shield
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                    When an MSO pairs Regulation 17 21-day disconnection notices with Contract Act s.148 hardware bailment clauses and CAS/SMS logs, TDSAT and Commercial Courts enforce both subscription arrears and unreturned STB/ONT replacement value.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 — 5-Step Escalation Pipeline + Decision Tree SVG */}
            <section
              id="heading-escalation-pipeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  5-Step TRAI 21-Day Notice &amp; TDSAT Escalation Pipeline
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Abruptly blacking out an LCO&apos;s feed without statutory notice is the single fastest way for an MSO to lose at TDSAT. Follow this sequential 5-stage decision pipeline to lock in admissibility, preserve criminal hardware remedies, and route the claim to the correct forum.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-5 border border-slate-800 overflow-x-auto">
                <svg
                  viewBox="0 0 880 300"
                  width="880"
                  height="300"
                  role="img"
                  aria-label="5-Step MSO and ISP LCO Arrears and STB Recovery Decision Tree"
                  className="w-full h-auto"
                >
                  <rect x="0" y="0" width="880" height="300" rx="12" fill="#0F172A" />
                  {/* Step 1 */}
                  <rect x="20" y="35" width="150" height="90" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="95" y="60" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STEP 1 · DAY 1–7</text>
                  <text x="95" y="80" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">CAS / SMS Audit</text>
                  <text x="95" y="98" textAnchor="middle" fill="#94A3B8" fontSize="10">STB MAC/VC Logs</text>
                  <text x="95" y="112" textAnchor="middle" fill="#94A3B8" fontSize="10">&amp; Bailment Challans</text>
                  <line x1="170" y1="80" x2="195" y2="80" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 2 */}
                  <rect x="195" y="35" width="155" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="272" y="60" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STEP 2 · REG. 17</text>
                  <text x="272" y="80" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">21-Day TRAI Notice</text>
                  <text x="272" y="98" textAnchor="middle" fill="#94A3B8" fontSize="10">RPAD + Email + Scroll</text>
                  <text x="272" y="112" textAnchor="middle" fill="#94A3B8" fontSize="10">Arrears &amp; STB Demand</text>
                  <line x1="350" y1="80" x2="375" y2="80" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 3 Decision */}
                  <rect x="375" y="25" width="160" height="110" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="455" y="50" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STEP 3 · FORUM SPLIT</text>
                  <text x="455" y="70" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">Licensee Check</text>
                  <text x="455" y="90" textAnchor="middle" fill="#CBD5E1" fontSize="10">MIB LCO -&gt; TDSAT s.14</text>
                  <text x="455" y="106" textAnchor="middle" fill="#CBD5E1" fontSize="10">Unlicensed LFP -&gt; Order 37</text>
                  <text x="455" y="122" textAnchor="middle" fill="#CBD5E1" fontSize="10">or Sec. 21 Arbitration</text>
                  <line x1="535" y1="80" x2="560" y2="80" stroke="#DC2626" strokeWidth="2" />

                  {/* Step 4 */}
                  <rect x="560" y="35" width="145" height="90" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="632" y="60" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STEP 4 · PARALLEL</text>
                  <text x="632" y="80" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">Hardware &amp; Cheque</text>
                  <text x="632" y="98" textAnchor="middle" fill="#94A3B8" fontSize="10">BNS s.316 STB/ONT</text>
                  <text x="632" y="112" textAnchor="middle" fill="#94A3B8" fontSize="10">&amp; NI Act s.138</text>
                  <line x1="705" y1="80" x2="725" y2="80" stroke="#10B981" strokeWidth="2" />

                  {/* Step 5 */}
                  <rect x="725" y="35" width="135" height="90" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="792" y="60" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="bold">STEP 5 · ENFORCE</text>
                  <text x="792" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Decree Execution</text>
                  <text x="792" y="98" textAnchor="middle" fill="#A7F3D0" fontSize="10">TRAI s.14N / CPC O.21</text>
                  <text x="792" y="112" textAnchor="middle" fill="#A7F3D0" fontSize="10">Bank &amp; Asset Attach</text>

                  {/* Bottom Summary Bar */}
                  <rect x="20" y="170" width="840" height="105" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                  <text x="40" y="198" fill="#F87171" fontSize="12" fontWeight="bold">CRITICAL COMPLIANCE RULE (TRAI INTERCONNECTION REGULATIONS 2017)</text>
                  <text x="40" y="220" fill="#E2E8F0" fontSize="11">1. Never disconnect an LCO feed without a 21-day written notice under Regulation 17 + consumer scroll where applicable.</text>
                  <text x="40" y="240" fill="#E2E8F0" fontSize="11">2. Separate MSO-vs-LCO disputes (TDSAT exclusive under TRAI s.14) from unlicensed LFP franchisee defaults (Commercial Court / Arbitration).</text>
                  <text x="40" y="260" fill="#E2E8F0" fontSize="11">3. Authenticate all CAS, SMS, OLT, and wallet recharge exports with a BSA 2023 Section 63 certificate before filing.</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "Step 1 · CAS/SMS & Bailment Audit",
                    desc: "Export STB serial/VC logs, OLT MAC bindings, Monthly Subscriber Reports, and signed hardware delivery challans.",
                  },
                  {
                    step: "Step 2 · TRAI 21-Day Disconnection Notice",
                    desc: "Serve mandatory Regulation 17 written notice via RPAD and email detailing exact arrears and STB/ONT return.",
                  },
                  {
                    step: "Step 3 · Forum Split (TDSAT vs Commercial Court)",
                    desc: "Route registered MSO–LCO disputes to TDSAT (TRAI s.14); route unlicensed LFP defaults to Order 37 / Arbitration.",
                  },
                  {
                    step: "Step 4 · BNS s.316 & NI Act s.138 Leverage",
                    desc: "Issue criminal breach of trust demand for swapped hardware and prosecute dishonoured security cheques.",
                  },
                  {
                    step: "Step 5 · Decree Execution (TRAI s.14N / Order 21)",
                    desc: "Enforce TDSAT or Commercial Court money decrees via bank account attachment and garnishee orders.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-xs font-bold text-[#DC2626] mb-1">{item.step}</p>
                    <p className="text-xs text-slate-700 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Need deeper guidance on forum selection? Read our practitioner analysis on{" "}
                <Link
                  href="/tdsat-vs-commercial-court-jurisdiction-telecom-isp-broadcasting-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  TDSAT vs Commercial Court Jurisdiction for Telecom &amp; Broadcasting Recovery
                </Link>
                .
              </p>
            </section>

            {/* Section 3 — Dark-Header Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory &amp; Forum Matrix: TDSAT, Commercial Court &amp; BNS s.316
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Broadcasting and regional broadband disputes sit at the intersection of sectoral telecom regulation and general commercial contract law. The matrix below maps each statutory lever available to MSOs, broadcasters, and regional ISPs.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3.5 font-bold">Statute / Regulation</th>
                      <th className="p-3.5 font-bold">Applicable Parties</th>
                      <th className="p-3.5 font-bold">Mandatory Notice / Timeline</th>
                      <th className="p-3.5 font-bold">Creditor Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        TRAI Interconnection Regs 2017 (Regs 15 &amp; 17)
                      </td>
                      <td className="p-3.5 text-slate-700">Broadcaster &harr; MSO; MSO &harr; LCO</td>
                      <td className="p-3.5 text-slate-700">21-day written disconnection notice</td>
                      <td className="p-3.5 text-slate-700">
                        Lawful signal deactivation, forensic CAS/SMS audit, and arrears crystallization
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        TRAI Act, 1997 (ss. 14, 14A, 14N &amp; 15)
                      </td>
                      <td className="p-3.5 text-slate-700">Licensed Service Providers</td>
                      <td className="p-3.5 text-slate-700">3-year limitation from default</td>
                      <td className="p-3.5 text-slate-700">
                        Exclusive TDSAT recovery petition; decree executable as Civil Court decree
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Contract Act, 1872 (ss. 73, 74, 148–160)
                      </td>
                      <td className="p-3.5 text-slate-700">MSO / ISP &harr; LCO / LFP</td>
                      <td className="p-3.5 text-slate-700">15-day Advocate Demand Notice</td>
                      <td className="p-3.5 text-slate-700">
                        Hardware bailment enforcement &amp; depreciated STB/ONT replacement cost
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        BNS 2023 s.316 &amp; Specific Relief Act ss.7–8
                      </td>
                      <td className="p-3.5 text-slate-700">Defaulting LCO / LFP / Rival</td>
                      <td className="p-3.5 text-slate-700">Immediate upon refusal / swap</td>
                      <td className="p-3.5 text-slate-700">
                        Criminal Breach of Trust action for flashed/sold STBs &amp; specific hardware delivery
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Order XXXVII CPC &amp; NI Act s.138
                      </td>
                      <td className="p-3.5 text-slate-700">ISP &harr; Unlicensed LFP</td>
                      <td className="p-3.5 text-slate-700">30-day cheque notice + 15-day cure</td>
                      <td className="p-3.5 text-slate-700">
                        Summary money suit on franchise ledgers &amp; criminal prosecution of security cheques
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 — Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 LCO / Fiber Partner Default Scenarios &amp; Recovery Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select a commercial failure mode below to inspect the exact statutory basis and 3-step recovery sequence for MSOs, broadcasters, and regional ISPs.
              </p>

              <MsoLcoScenarioTabs />
            </section>

            {/* Section 5 — Worked Financial & Hardware Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Hardware &amp; Arrears Ledger: 2,000 Swapped STBs / ONTs
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In TDSAT petitions and Commercial Court suits, MSOs frequently under-claim by demanding only unpaid monthly subscription bills while writing off subsidized hardware. Below is an illustrative recovery ledger for an LCO managing 2,000 active connections who defaults for 4 months and migrates to a rival network without returning the boxes.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <p className="text-sm font-bold text-red-400 uppercase tracking-wider">
                    Illustrative TDSAT / Arbitration Claim Schedule (2,000 Units)
                  </p>
                  <span className="text-xs font-semibold text-slate-400">
                    MIA Bailment + Reg. 17 Notice
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      1. Unreturned Subsidized HD/Android STBs (2,000 units &times; &#8377;1,650 depreciated cost after &#8377;450 activation)
                    </span>
                    <span className="font-bold text-white shrink-0">&#8377;33,00,000</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      2. Unpaid Wholesale Subscription Arrears (2,000 STBs &times; &#8377;140/mo MSO share &times; 4 months)
                    </span>
                    <span className="font-bold text-white shrink-0">&#8377;11,20,000</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      3. Contractual Delay Interest (18% p.a. on &#8377;11.20L arrears for 120 days + hardware default)
                    </span>
                    <span className="font-bold text-amber-400 shrink-0">&#8377;1,99,200</span>
                  </div>
                  <div className="flex justify-between gap-4 pt-2 text-sm sm:text-base">
                    <span className="font-extrabold text-emerald-400">
                      Total Recoverable Principal + Hardware + Interest Claim
                    </span>
                    <span className="font-black text-emerald-400 shrink-0">&#8377;46,19,200</span>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
                  Note: If the claimant MSO or regional ISP is registered under the MSMED Act, 2006 and the counterparty is a commercial enterprise (non-exempted franchisee), contractual interest may be benchmarked against Section 16 compound interest (3&times; RBI Bank Rate). Compute exact statutory interest using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-400 underline hover:text-red-300"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 6 — Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  CAS/SMS Logs, Interconnect Agreements &amp; BSA 2023 s.63 Proof
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                TDSAT and Commercial Courts reject bare Excel ledger summaries unless corroborated by primary interconnect contracts and admissible electronic records under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023. Assemble this 6-point dossier before serving your 21-day notice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Executed MIA / SIA or Franchise Agreement",
                    desc: "Signed Model/Standard Interconnection Agreement or LFP Revenue-Share Agreement containing explicit hardware ownership and bailment clauses.",
                  },
                  {
                    title: "2. Serialized STB / ONT Delivery Challans",
                    desc: "Signed dispatch notes listing exact MAC addresses, Viewing Card (VC) numbers, and subsidized activation terms.",
                  },
                  {
                    title: "3. CAS & SMS / OLT Activation Exports",
                    desc: "System-generated Conditional Access System (CAS), Subscriber Management System (SMS), or RADIUS/OLT logs proving active signal delivery prior to migration.",
                  },
                  {
                    title: "4. TRAI Reg. 17 21-Day Notice & RPAD Proof",
                    desc: "Copy of the 21-day disconnection notice with Speed Post RPAD tracking receipts, email headers, and WhatsApp delivery ticks.",
                  },
                  {
                    title: "5. GST E-Invoices & Running Wallet Ledger",
                    desc: "Monthly tax invoices, GSTR-1 reconciliation, and partner portal wallet top-up/debit history showing undisputed arrears.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Electronic Certificate",
                    desc: "Statutory hash/device certificate signed by the NOC or SMS database administrator authenticating all digital exports.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7 — Dual-Track B2B CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Launch Single-LCO Recovery or Bulk Franchisee Arrears Desk
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether you are an MSO pursuing a single rogue LCO with 2,000 swapped boxes or a regional broadband ISP cleaning up 150+ defaulting Local Fiber Partners across multiple circles, start with a single-case pilot or onboard your entire partner ledger via CSV.
              </p>

              <MsoLcoCTA />
            </section>

            {/* Section 8 — Related Telecom, Broadcasting & Commercial Recovery Guides */}
            <section
              id="heading-related-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Related Telecom, Broadcasting &amp; Commercial Recovery Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "Telecom, ISP, Data Center & MSP Recovery Hub",
                    href: "/industries/telecom-isp-datacenter-msp-recovery",
                    desc: "Parent IND-18 pillar hub covering MSOs, enterprise ISPs, colocation data centers, CPaaS, and managed MSPs.",
                  },
                  {
                    title: "TDSAT vs Commercial Court Jurisdiction Map",
                    href: "/tdsat-vs-commercial-court-jurisdiction-telecom-isp-broadcasting-recovery",
                    desc: "TRAI Act s.14 & s.15 boundary rules splitting MSO–LCO disputes from enterprise subscriber suits.",
                  },
                  {
                    title: "Enterprise ILL / MPLS / SD-WAN Lock-In Recovery",
                    href: "/enterprise-leased-line-ill-mpls-sdwan-lock-in-breach-recovery-isp",
                    desc: "Recover unamortized last-mile fiber CapEx and MUX CPE under Contract Act s.74.",
                  },
                  {
                    title: "Data Center Colocation Lien & DPDP Suspension Law",
                    href: "/data-center-colocation-bare-metal-hosting-default-suspension-lien-law",
                    desc: "Execute lawful rack suspension and 7-day data export windows without cyber-extortion liability.",
                  },
                  {
                    title: "CPaaS, Bulk SMS & WhatsApp BSP Postpaid Recovery",
                    href: "/cpaas-bulk-sms-whatsapp-bsp-cloud-telephony-postpaid-default-recovery",
                    desc: "Recover high-volume postpaid messaging bursts using BSA s.63 API/DLR logs.",
                  },
                  {
                    title: "Order XXXVII Summary Suit for Commercial Dues",
                    href: "/law/order-37-summary-suit-money-recovery",
                    desc: "Fast-track summary recovery on signed franchisee agreements and acknowledged invoices.",
                  },
                  {
                    title: "Vendor & B2B Invoice Recovery Services",
                    href: "/services/vendor-and-invoice-recoveries",
                    desc: "Advocate-drafted tri-channel demand notices for B2B service providers and channel partners.",
                  },
                  {
                    title: "SaaS & Telecom MSA Payment Default Notice Template",
                    href: "/templates/it-software-saas-msa-payment-default-legal-notice",
                    desc: "Interactive commercial default notice workspace with BSA s.63 electronic log clauses.",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group block bg-slate-50 hover:bg-red-50/50 border border-slate-200 hover:border-red-200 rounded-xl p-4 transition-colors"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-1">
                      {link.title} &rarr;
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{link.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 9 — FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: MSO, LCO &amp; TDSAT Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="list-none flex items-center justify-between gap-3 cursor-pointer text-xs sm:text-sm font-bold text-slate-900">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white text-slate-700 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10 — Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Primary TRAI Regulations, Bare Acts &amp; TDSAT Authorities
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li
                    key={source.url}
                    className="flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] font-medium underline decoration-slate-300 hover:decoration-[#DC2626] transition-colors"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] sm:text-xs text-slate-500 pt-2">
                Reviewed by Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions. Legal content is provided for institutional creditor guidance under Indian telecom and commercial law.
              </p>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
