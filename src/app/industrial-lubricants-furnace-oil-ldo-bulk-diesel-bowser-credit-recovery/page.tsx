import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import FuelDieselTableOfContents from "./FuelDieselTableOfContents";
import FuelDieselScenarioTabs from "./FuelDieselScenarioTabs";
import FuelDieselCTA from "./FuelDieselCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/industrial-lubricants-furnace-oil-ldo-bulk-diesel-bowser-credit-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Credit Recovery for Industrial Lubricant Distributors, Furnace-Oil Traders & Highway/Doorstep Fleet-Diesel Suppliers";

// Tightened from 63ch PDF draft to 57ch for Screaming Frog 30-60ch compliance
const META_TITLE =
  "Industrial Lubricants, Furnace Oil & Bulk Diesel Recovery";

// Tightened from 163ch PDF draft to 152ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "Petroleum/HSD credit has <2% margin & zero GST cushion. Turn signed fuel indents & bowser flow-meter slips into rapid Order 37 CPC & NI s.138 recoveries.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "industrial lubricant furnace oil bulk diesel credit recovery",
    "petrol pump fleet transporter credit ledger unpaid recovery",
    "doorstep mobile diesel bowser startup mining infra client default",
    "vat non gst petroleum invoice summary suit order 37",
    "cutting oil hydraulic oil OEM distributor overdue recovery",
    "fuel slip signed by driver fleet owner liability",
  ],
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
      "Code of Civil Procedure, 1908 (Order XXXVII & Order XXXVIII Rule 5 — Summary Suits on Signed Fuel Indents & Attachment Before Judgment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 139, 141 & 143A — Fleet/Distributor PDC Prosecution & 20% Interim Deposit)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Indian Contract Act, 1872 (Sections 188 & 237 — Ostensible Authority of Fleet Drivers & Site Supervisors Signing Fuel Indents)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 16 & 42 — Deemed Acceptance of Consumed HSD, Furnace Oil, LDO & Industrial Lubricants)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 — 3x RBI Compound Interest for Udyam Lube & Bio-Diesel Units)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of RFID Bowser Receipts, IoT Flow-Meter Logs, CCTV & WhatsApp Confirmations)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    q: "Can a fleet owner refuse to pay a highway petrol pump's 15-day diesel credit ledger by claiming the truck driver signed the fuel slip without permission?",
    a: "No. Under Sections 188 and 237 of the Indian Contract Act, 1872 (Ostensible Authority of Agent), once a transporter opens a credit account and issues a numbered indent book or vehicle list to a petrol pump, drivers carry implied authority to refuel until written revocation is communicated. Pairing signed indent slips with dispenser nozzle-totalizer logs and forecourt CCTV/ANPR frames establishes a liquidated debt for an Order XXXVII CPC summary suit.",
  },
  {
    q: "Are digital RFID and IoT flow-meter receipts from a doorstep mobile diesel-delivery bowser admissible in an Order 37 summary suit?",
    a: "Yes. Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, electronic bowser delivery challans, Legal Metrology flow-meter printouts, geo-fenced GPS decanting logs, and site-engineer OTP confirmations are fully admissible as primary/electronic evidence when accompanied by a signed BSA s.63 certificate. Coupled with the master Fuel Supply Agreement, they constitute a written contract for liquidated money recovery under Order XXXVII CPC.",
  },
  {
    q: "How does the absence of GST Input Tax Credit (ITC) on HSD affect recovery compared to industrial lubricants and furnace oil?",
    a: "High-Speed Diesel (HSD) falls outside GST and is taxed under State VAT, meaning fuel-station and bowser suppliers cannot rely on GSTR-2B ITC reversals as leverage—making immediate Order XXXVII CPC summary suits and NI Act s.138 prosecution essential. Conversely, industrial lubricants, cutting oils, hydraulic oils, and Furnace Oil (FO) attract 18% GST: the buyer's GSTR-2B ITC availment acts as a statutory admission of receipt and debt, while non-payment beyond 180 days triggers ITC reversal under Section 16(2) CGST Act.",
  },
  {
    q: "What if a textile or steel rolling mill burns an entire tanker of Furnace Oil (FO) or LDO and then raises a 20% 'water/sludge quality' debit note?",
    a: "Under Section 42 of the Sale of Goods Act, 1930, once a buyer unloads, stores, and burns the Furnace Oil or LDO in its boilers without preserving a joint sealed sample or issuing a contemporaneous NABL lab rejection report before consumption, the buyer is deemed to have accepted the fuel. Your refinery/terminal Certificate of Analysis (COA) at 15°C density and Dharamkanta weighbridge slip render belated debit notes legally untenable.",
  },
  {
    q: "Can a doorstep diesel startup or oil trader freeze a defaulting mining contractor's excavators or bank accounts before final judgment?",
    a: "Yes. If a mining or EPC highway contractor is demobilizing earthmoving machinery from a project site or diverting project RA bill receipts to evade a ₹25 lakh–₹1.2 Crore diesel ledger, you can move an urgent application under Order XXXVIII Rule 5 CPC for Attachment Before Judgment alongside an Order XXXVII summary suit or Commercial Court action.",
  },
  {
    q: "Are undated security cheques collected at fleet account opening valid under Section 138 of the NI Act?",
    a: "Yes. The Supreme Court in Sripati Singh v. State of Jharkhand (2021) affirmed that a security cheque becomes fully enforceable under Section 138 of the NI Act, 1881 once the underlying 15-day or 30-day fuel/lubricant credit ledger falls due. Ensure you adjust any empty-drum or volume-rebate credits first so the cheque amount matches the exact enforceable balance, then serve the mandatory 30-day demand notice.",
  },
  {
    q: "Can a petrol pump group or lubricant distributor send legal notices to 25–200 defaulting fleet accounts and contractors in one batch?",
    a: "Yes. Through LegalRecovery.in's Bulk Institutional Desk, petroleum dealers, bowser startups, and lubricant distributors can upload a single CSV of overdue fleet ledgers to dispatch advocate-vetted Order 37, Contract Act s.237, and NI s.138 notices simultaneously via Email, WhatsApp, and Speed Post RPAD.",
  },
];

export default function IndustrialLubricantsFuelDieselRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${CANONICAL_URL}#article`,
        headline: EXACT_H1,
        description: META_DESCRIPTION,
        url: CANONICAL_URL,
        mainEntityOfPage: CANONICAL_URL,
        inLanguage: "en-IN",
        datePublished: "2026-11-20",
        dateModified: "2026-11-20",
        author: {
          "@type": "Person",
          name: "Anuj Anand Malik",
          jobTitle: "Advocate & Founder, AMA Legal Solutions",
        },
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
        },
        image: {
          "@type": "ImageObject",
          url: `${SITE_URL}/blog_money_recovery.png`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "HowTo",
        "@id": `${CANONICAL_URL}#howto`,
        name: "How to Recover Unpaid Industrial Lubricant, Furnace Oil & Bulk Diesel Credit Ledgers",
        description:
          "5-stage statutory recovery sequence for highway petrol pumps, doorstep diesel-delivery startups, FO/LDO traders, and lubricant distributors using Order XXXVII CPC, NI Act s.138, and BSA 2023 s.63.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Lock Signed Fuel Indents, RFID Flow-Meter & Weighbridge Trail",
            text: "Compile signed pump indent slips, dispenser nozzle-totalizer logs, bowser GPS/RFID receipts, tanker COAs, and GSTR-2B/VAT schedules.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Reconcile Fleet Rebates & Issue BSA 2023 s.63 Certificate",
            text: "Adjust empty-drum credits or volume discounts so the net principal is undisputed and certify all digital telemetry under BSA s.63.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Serve Order 37 / Contract Act s.237 / NI s.138 Demand Notice",
            text: "Dispatch an advocate-drafted notice via Email, WhatsApp, and Speed Post RPAD invoking driver ostensible authority and Sale of Goods s.42 estoppel.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Prosecute Bounced Security PDCs & Seek 20% Deposit",
            text: "File NI Act s.138/s.141 complaints against fleet proprietors or company directors within 30 days of cause of action and move for 20% s.143A deposit.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "File Order XXXVII Summary Suit & Order 38 Rule 5 Attachment",
            text: "Institute a summary suit on signed fuel indents/written contracts and seek urgent asset attachment if mining or infra debtors demobilize.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumbs`,
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
            name: "Coal, Metal Scrap, Mineral & Fuel Recovery",
            item: `${SITE_URL}/industries/mining-minerals-fuel-scrap-commodity-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Industrial Lubricants, Furnace Oil & Bulk Diesel Recovery",
            item: CANONICAL_URL,
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

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-25 · PETROLEUM, LUBES &amp; BULK FUEL</span>
            <span className="text-red-700">|</span>
            <span>CREDITOR OPERATIONAL PLAYBOOK</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40–60 Word Executive Creditor Answer Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer · IND-25 Fuel &amp; Lubricant Playbook
            </span>
            Under{" "}
            <Link
              href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
              className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
            >
              Indian bulk commodity &amp; industrial fuel recovery law
            </Link>
            , petrol pumps, mobile diesel-bowser startups, and FO/LDO or lubricant distributors turn{" "}
            <strong>driver-signed indent slips</strong> and{" "}
            <strong>RFID flow-meter receipts</strong> into rapid{" "}
            <strong>Order XXXVII CPC summary suits</strong>, defeat driver-dispute excuses via{" "}
            <strong>Contract Act s.237</strong>, and prosecute bounced fleet PDCs under{" "}
            <strong>NI Act s.138</strong>.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">&lt; 2% Margin</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                HSD Dealer Commission (1 Default = 6m Profit)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">Order 37 CPC</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Summary Suit on Signed Fuel Indents &amp; RFID
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">NI Act s.138</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                30d Notice &amp; 20% Interim Deposit (s.143A)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">BSA s.63</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                IoT Bowser Flow-Meter &amp; ANPR CCTV Proof
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
                label: "Coal, Scrap, Mineral & Fuel Recovery",
                href: "/industries/mining-minerals-fuel-scrap-commodity-recovery",
              },
              {
                label: "Industrial Lubricants, Furnace Oil & Bulk Diesel Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <FuelDieselTableOfContents />

          {/* Main Article Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Petroleum, Bowser &amp; Lube Credit Carries Asymmetric Default Risk
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s national highways, mining corridors, and industrial clusters,
                  <strong> highway petrol-pump owners</strong>,{" "}
                  <strong>PESO-licensed doorstep diesel-delivery startups</strong>,{" "}
                  <strong>Furnace Oil (FO) / Light Diesel Oil (LDO) / bio-diesel traders</strong>,
                  and <strong>OEM cutting-oil &amp; hydraulic-oil distributors</strong> operate on
                  razor-thin margins while extending massive 15-to-45-day working-capital credit.
                  Unlike software or high-margin manufacturing, retail High-Speed Diesel (HSD)
                  dealers earn <strong>less than 2% gross dealer commission</strong> after paying
                  Oil Marketing Companies (IOCL, BPCL, HPCL) upfront via RTGS.
                </p>
                <p>
                  That unit-economics math is unforgiving: a single{" "}
                  <strong>₹10 lakh to ₹1 Crore default</strong> by a mining sub-contractor, road
                  EPC firm, or fleet transporter immediately wipes out{" "}
                  <strong>6 months or more of net pump profit</strong>. Worse, borrowers routinely
                  weaponize three predictable excuses once invoices cross 30 days:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      1. &ldquo;Driver Signed Without Authority&rdquo;
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Fleet owners disown carbon-copy pump indent slips claiming the truck driver
                      left the company or filled unauthorized diesel.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      2. &ldquo;Bowser Flow-Meter Mismatch&rdquo;
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mining and quarry contractors dispute doorstep diesel deliveries weeks after
                      burning the fuel in excavators and DG sets.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      3. &ldquo;FO / Lube Quality Debit Note&rdquo;
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Rolling mills and factories burn full FO/LDO tankers or cutting-oil drums,
                      then issue 20% sludge or viscosity debit notes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: VAT vs GST & Driver Ostensible Authority */}
            <section
              id="heading-vat-gst-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  VAT vs. GST Cushion &amp; Driver-Signed Fuel Slip Liability
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  A critical statutory divide separates{" "}
                  <strong>bulk diesel (HSD)</strong> from{" "}
                  <strong>industrial lubricants, cutting oils, and Furnace Oil (FO)</strong>.
                  Because HSD remains outside the GST regime and is billed under State VAT,
                  petroleum dealers have <strong>zero GST Input Tax Credit (ITC) leverage</strong>
                  —meaning a defaulting transporter faces no automatic GSTR-2B ITC reversal under
                  Section 16(2) of the CGST Act if it withholds payment beyond 180 days.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300 mb-2">
                      State VAT Regime (HSD / Bulk Diesel)
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                      Zero GST Cushion: Move Straight to Order 37 &amp; s.138
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Without GST ITC leverage, highway pumps and bowser startups must rely on{" "}
                      <strong>signed fuel indent books</strong>,{" "}
                      <strong>digital RFID/OTP bowser receipts</strong>, and{" "}
                      <strong>Contract Act s.237 ostensible agency</strong> to file Order XXXVII
                      CPC summary suits and NI Act s.138 director complaints immediately at DPD 15–30.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 mb-2">
                      18% GST Regime (Lubes, Cutting Oil, FO &amp; LDO)
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
                      GSTR-2B Availment Proves Delivery &amp; Unlocks Order 37
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Industrial lubricants, hydraulic oils, FO, and LDO carry{" "}
                      <strong>18% GST</strong>. When the buyer avails ITC on your tax invoice in
                      its GSTR-2B/3B filings, that electronic tax credit constitutes a{" "}
                      <strong>binding statutory admission of receipt and price</strong>—defeating
                      post-burning quality excuses under Sale of Goods Act s.42.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: 5-Step Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Step Fuel Indent, Bowser &amp; Lubricant Recovery Flowchart
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Follow this sequential escalation path from Day 15 credit expiry to Order XXXVII
                decree and NI s.138 director prosecution.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto pb-2">
                <svg
                  viewBox="0 0 920 190"
                  width={920}
                  height={190}
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-step recovery flowchart for industrial lubricants, furnace oil and bulk diesel credit"
                >
                  <defs>
                    <marker
                      id="arrowFuel"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {[
                    { x: 10, step: "STEP 1 · DPD 15", title: "Lock Slip & IoT", sub: "Indents, RFID, COA" },
                    { x: 194, step: "STEP 2 · DPD 20", title: "BSA s.63 Pack", sub: "CCTV, GPS, GSTR-2B" },
                    { x: 378, step: "STEP 3 · DPD 25", title: "Advocate Notice", sub: "s.237 & s.42 Estoppel" },
                    { x: 562, step: "STEP 4 · DPD 35", title: "NI s.138 / s.143A", sub: "PDC + 20% Deposit" },
                    { x: 746, step: "STEP 5 · DPD 45+", title: "Order 37 & 38 r.5", sub: "Summary Suit / Freeze" },
                  ].map((node, i) => (
                    <g key={node.step}>
                      <rect
                        x={node.x}
                        y={20}
                        width={164}
                        height={140}
                        rx={14}
                        fill={i === 2 ? "#111827" : "#F8FAFC"}
                        stroke={i === 2 ? "#DC2626" : "#CBD5E1"}
                        strokeWidth={2}
                      />
                      <rect
                        x={node.x + 14}
                        y={34}
                        width={116}
                        height={22}
                        rx={11}
                        fill={i === 2 ? "#DC2626" : "#FEE2E2"}
                      />
                      <text
                        x={node.x + 72}
                        y={49}
                        textAnchor="middle"
                        fontSize="10"
                        fontWeight="800"
                        fill={i === 2 ? "#FFFFFF" : "#DC2626"}
                      >
                        {node.step}
                      </text>
                      <text
                        x={node.x + 82}
                        y={88}
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="800"
                        fill={i === 2 ? "#FFFFFF" : "#0F172A"}
                      >
                        {node.title}
                      </text>
                      <text
                        x={node.x + 82}
                        y={114}
                        textAnchor="middle"
                        fontSize="11"
                        fontWeight="500"
                        fill={i === 2 ? "#CBD5E1" : "#475569"}
                      >
                        {node.sub}
                      </text>
                      {i < 4 && (
                        <line
                          x1={node.x + 164}
                          y1={90}
                          x2={node.x + 190}
                          y2={90}
                          stroke="#DC2626"
                          strokeWidth={2.5}
                          markerEnd="url(#arrowFuel)"
                        />
                      )}
                    </g>
                  ))}
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "Step 1 · DPD 15",
                    title: "Lock Signed Indents, RFID & Tanker COA",
                    desc: "Export signed pump slips, bowser flow-meter logs, or refinery density COAs.",
                  },
                  {
                    step: "Step 2 · DPD 20",
                    title: "Prepare BSA 2023 s.63 Telemetry Pack",
                    desc: "Certify ANPR CCTV frames, GPS decanting coordinates, and GSTR-2B ITC records.",
                  },
                  {
                    step: "Step 3 · DPD 25",
                    title: "Dispatch Advocate Estoppel & s.237 Notice",
                    desc: "Invoke driver ostensible authority and Sale of Goods s.42 deemed acceptance.",
                  },
                  {
                    step: "Step 4 · DPD 35",
                    title: "Prosecute NI Act s.138 & Claim 20% Deposit",
                    desc: "Issue 30-day cheque bounce notice against company directors and seek s.143A relief.",
                  },
                  {
                    step: "Step 5 · DPD 45+",
                    title: "File Order XXXVII Summary Suit & Attachment",
                    desc: "Seek Order XXXVIII Rule 5 asset attachment if mining or infra fleets demobilize.",
                  },
                ].map((item) => (
                  <div key={item.step} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                      {item.step}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-0.5 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Dark-Header Statutory Enforcement Matrix */}
            <section
              id="heading-remedy-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Matrix: Fuel Indents, Bowser IoT &amp; Lube Recovery
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Supply Segment</th>
                      <th className="p-3.5 font-bold">Primary Evidence</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Fastest Recovery Forum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Highway Petrol Pump Fleet HSD
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Driver-signed indent book, nozzle totalizer log &amp; ANPR CCTV
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contract Act ss.188, 237 + Order XXXVII CPC
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        Order 37 Summary Suit + NI s.138
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Doorstep Mobile Diesel Bowser
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Digital RFID/OTP slip, Legal Metrology flow-meter &amp; GPS pin
                      </td>
                      <td className="p-3.5 text-slate-700">
                        BSA 2023 s.63 + Sale of Goods s.42 + Order 38 r.5
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        Commercial Court + Asset Freeze
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Furnace Oil (FO) / LDO / Bio-Diesel
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Refinery 15&deg;C COA, Dharamkanta slip, E-Way Bill &amp; GSTR-2B
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Sale of Goods s.42 + MSMED Act ss.15–18
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        MSEFC 3x RBI Rate / Order 37
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Cutting Oil &amp; Hydraulic Lubricants
                      </td>
                      <td className="p-3.5 text-slate-700">
                        18% GST tax invoice, drum batch COA &amp; GSTR-2B ITC credit
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NI Act ss.138, 141, 143A + CGST s.16(2)
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        Magistrate s.138 (20% Deposit)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        &ge; ₹1 Crore Multi-Site EPC Arrears
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Consolidated fuel ledger + 18–24% contractual interest clause
                      </td>
                      <td className="p-3.5 text-slate-700">
                        IBC 2016 ss.4, 8 &amp; 9 (Operational Creditor)
                      </td>
                      <td className="p-3.5 font-semibold text-slate-900">
                        10-Day Form 3/4 Notice (NCLT)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Interactive 4-Scenario Playbooks */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Petroleum, Bowser &amp; Lubricant Default Playbooks
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Select your supply model below to inspect the exact debtor excuse and the
                creditor&apos;s statutory counter-move.
              </p>

              <FuelDieselScenarioTabs />
            </section>

            {/* Section 6: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Ledger: ₹24.80 Lakh Bulk Diesel Default
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/70 text-red-400 border border-red-800/60 mb-3">
                    Pump Margin Erosion Reality
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-white mb-3">
                    Why 1 Default Wipes Out 6+ Months of Pump Profit
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span>Unpaid 15-Day Fleet HSD Ledger (28,000 L)</span>
                      <span className="font-bold text-white">₹24,80,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span>Dealer Gross Commission (~2.0% on HSD)</span>
                      <span className="font-bold text-amber-400">₹49,600</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span>Turnover Required to Recover ₹24.8L Loss</span>
                      <span className="font-black text-red-400">₹12.40 Crore</span>
                    </div>
                    <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                      At a net margin under 2%, writing off ₹24.80 lakh forces a highway pump to
                      sell 1.4 million+ extra litres just to break even.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 mb-3">
                    Order 37 + NI s.138 Claim Stack
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3">
                    Total Enforceable Statutory Claim (180 Days Overdue)
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex justify-between py-1.5 border-b border-emerald-200">
                      <span>Liquidated Principal (Signed Indents / RFID)</span>
                      <span className="font-bold text-slate-900">₹24,80,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-emerald-200">
                      <span>Contractual Commercial Interest (18% p.a. &times; 6m)</span>
                      <span className="font-bold text-emerald-700">+ ₹2,23,200</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-emerald-200">
                      <span>Mandatory NI s.143A Interim Deposit (20%)</span>
                      <span className="font-bold text-emerald-800">₹4,96,000</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="font-bold">Total Order XXXVII Summary Decree Claim</span>
                      <span className="font-black text-slate-900">₹27,03,200</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BSA 2023 s.63 Pump, Bowser &amp; Tanker Evidence Checklist
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Assemble these 8 records before dispatching your statutory notice so the debtor
                cannot obtain unconditional leave to defend under Order XXXVII CPC:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Signed Fleet Credit Account Form & Authorized Driver List (Contract Act s.237)",
                  "Carbon-Copy Signed Fuel Indent Slips or Digital RFID / OTP Bowser Receipts",
                  "Forecourt Dispenser Nozzle-Totalizer Logs & Legal Metrology Flow-Meter Calibration",
                  "ANPR / CCTV Frames or Geo-Fenced GPS Decanting Coordinates at Quarry/Site",
                  "Refinery/Terminal 15°C Density COA & Dharamkanta Weighbridge Slips (FO/LDO)",
                  "VAT Invoices (HSD) or 18% GST Tax Invoices + GSTR-2B ITC Proof (Lubes/FO)",
                  "Bounced Security/Fleet PDCs + Original Bank Return Memos (NI Act s.138)",
                  "Signed BSA 2023 Section 63 Certificate for All IoT, POS & WhatsApp Exports",
                ].map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Dual-Track B2B Conversion Funnel CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Start 1 Pilot Notice (₹999) or Upload Fleet Defaulter CSV
                </h2>
              </div>

              <FuelDieselCTA />
            </section>

            {/* Section 9: Hub, Calculators, Templates & Sibling Guides */}
            <section
              id="heading-related"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  IND-25 Hub, Calculators, Templates &amp; Sibling Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    IND-25 Parent Hub
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1">
                    Coal, Petcoke, Metal Scrap, Mineral &amp; Fuel Recovery
                  </h3>
                  <p className="text-xs text-slate-600">
                    Full vertical escalation matrix, Order 38 Rule 5 attachment &amp; IBC s.8 thresholds.
                  </p>
                </Link>

                <Link
                  href="/tools/cheque-bounce-deadline-calculator"
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Interactive Calculator
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1">
                    NI Act s.138 Cheque Bounce Deadline Calculator
                  </h3>
                  <p className="text-xs text-slate-600">
                    Compute exact 30-day notice, 15-day cure &amp; 30-day Magistrate filing clocks.
                  </p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Interactive Calculator
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1">
                    MSME 3x RBI Delayed Payment Interest Calculator
                  </h3>
                  <p className="text-xs text-slate-600">
                    Calculate monthly compounded s.16 interest for Udyam bio-diesel &amp; lube blenders.
                  </p>
                </Link>

                <Link
                  href="/templates/security-cheque-presentation-intimation-cum-ledger-notice"
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Notice Template
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1">
                    Security Cheque Presentation &amp; Ledger Demand Notice
                  </h3>
                  <p className="text-xs text-slate-600">
                    Advocate-vetted intimation before depositing fleet or distributor security PDCs.
                  </p>
                </Link>

                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Core Statutory Guide
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1">
                    Order XXXVII CPC Summary Suit for Money Recovery
                  </h3>
                  <p className="text-xs text-slate-600">
                    Fast-track summary decree procedure on signed fuel indents and written contracts.
                  </p>
                </Link>

                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Director Liability
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1">
                    Cheque Bounce Case Against Company Directors (s.138/141)
                  </h3>
                  <p className="text-xs text-slate-600">
                    Hold signatory and managing directors personally liable on corporate fleet PDCs.
                  </p>
                </Link>

                <Link
                  href="/imported-coal-petcoke-biomass-supplier-gcv-moisture-deduction-recovery"
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    IND-25 Sibling Spoke
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1">
                    Imported Coal, Petcoke &amp; Biomass GCV Deduction Recovery
                  </h3>
                  <p className="text-xs text-slate-600">
                    Defeat post-burning boiler GCV and moisture debit notes with NABL umpire reports.
                  </p>
                </Link>

                <Link
                  href="/ferrous-non-ferrous-metal-scrap-ingot-rolling-mill-default-recovery"
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    IND-25 Sibling Spoke
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1">
                    Metal Scrap &amp; Rolling Mill Default Recovery
                  </h3>
                  <p className="text-xs text-slate-600">
                    Defeat post-melting slag deductions using Dharamkanta slips and Order 38 Rule 5.
                  </p>
                </Link>

                <Link
                  href="/industrial-gas-oxygen-nitrogen-argon-co2-cylinder-retention-recovery"
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    IND-25 Sibling Spoke
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1">
                    Industrial Gas Cylinder Retention &amp; BNS s.316 Recovery
                  </h3>
                  <p className="text-xs text-slate-600">
                    Enforce PESO neck-ring title, stop rival refilling, and recover cylinder demurrage.
                  </p>
                </Link>

                <Link
                  href="/recovery/unpaid-invoices"
                  className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/50 rounded-xl p-4 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    B2B Invoice Desk
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-1 mb-1">
                    Unpaid B2B Invoices &amp; Commercial Ledger Recovery
                  </h3>
                  <p className="text-xs text-slate-600">
                    End-to-end advocate demand notices and multi-channel BSA s.63 delivery proof.
                  </p>
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
                  FAQs: Lubricant, Furnace Oil &amp; Bulk Diesel Credit Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="list-none flex items-center justify-between gap-3 cursor-pointer font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
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
                  Official Statutory Portals &amp; Bare Act Authorities
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
                Solutions) for statutory accuracy under Indian commercial and petroleum credit law.
              </p>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_URL} />
    </div>
  );
}
