import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MetalScrapTableOfContents from "./MetalScrapTableOfContents";
import MetalScrapScenarioTabs from "./MetalScrapScenarioTabs";
import MetalScrapCTA from "./MetalScrapCTA";

export const revalidate = 86400;

const PAGE_PATH = "/ferrous-non-ferrous-metal-scrap-ingot-rolling-mill-default-recovery";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Induction Furnace Melted Your Scrap Truckload in 12 Hours—and Now Withholds ₹45 Lakh Blaming 'Excess Slag / Recovery Loss'?";

const META_TITLE = "Metal Scrap (HMS / Copper / Aluminium) & Ingot Recovery";
const META_DESCRIPTION =
  "Scrap trades on 24h RTGS at 1.5% margins. Defeat post-melting slag excuses (s.42) & win Order 38 Rule 5 attachment before distressed mills strip assets.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Ferrous and non-ferrous metal scrap and ingot rolling mill payment recovery"),
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

const FAQ_ITEMS = [
  {
    q: "Can an induction furnace deduct money for 'excess slag or burning loss' after melting our scrap?",
    a: "No. Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have accepted the goods once they perform any act inconsistent with the seller's ownership—such as charging HMS, shredded scrap, or sponge iron into a furnace. Without a pre-melting joint inspection memo, post-melting slag or recovery-loss debit notes are legally barred.",
  },
  {
    q: "What if a copper, brass, or aluminium buyer rejects or cuts rates after an LME/MCX price drop?",
    a: "Under Sections 26 and 42 of the Sale of Goods Act, 1930, risk and property in ascertained scrap or ingots pass upon weighbridge/gate delivery. A 4%–8% LME or MCX market correction after dispatch does not entitle a foundry to withhold RTGS or impose unilateral rate cuts; the supplier can claim full invoice value plus Section 61 commercial interest.",
  },
  {
    q: "How can we stop a distressed rolling mill from stripping billets before secured banks seize the plant?",
    a: "Move urgently for Attachment Before Judgment (ABJ) under Order XXXVIII Rule 5 of the Code of Civil Procedure, 1908 alongside an Order XXXVII Commercial Summary Suit. Courts can attach finished billets, TMT bars, aluminium ingots, or third-party buyer receivables when asset dissipation or impending SARFAESI action is demonstrated.",
  },
  {
    q: "How do genuine scrap suppliers defeat false 'GST fake invoice' or ITC mismatch excuses?",
    a: "Present a certified physical-movement dossier under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023: GST E-Way Bill (Part-A and Part-B vehicle details), origin and destination Dharamkanta weighment slips, highway FASTag logs, gate-entry CCTV timestamps, and GSTR-1/2B tax-paid records. Once the buyer has claimed ITC under CGST Act s.16, denying physical receipt is estopped.",
  },
  {
    q: "Are post-dated security cheques taken from rolling mill directors enforceable under Section 138?",
    a: "Yes. Security cheques issued against ongoing scrap or ingot supply become enforceable once a crystalized invoice debt exists on the date of presentation. Presenting the cheque after prior written ledger intimation and serving a 15-day statutory demand notice within 30 days of the bank return memo triggers NI Act s.138 prosecution and up to 20% interim compensation under s.143A.",
  },
  {
    q: "Which industrial clusters see the highest scrap and ingot payment defaults in India?",
    a: "High-velocity defaults concentrate in induction-furnace and secondary-steel hubs including Mandi Gobindgarh (Punjab), Jalna (Maharashtra), Raipur and Bilaspur (Chhattisgarh), Bhiwadi (Rajasthan), Muzaffarnagar (UP), Alang/Bhavnagar (Gujarat), and Chennai/Coimbatore foundry belts, where ₹25L–₹80L truckloads trade on 24-hour RTGS or 7-day credit.",
  },
  {
    q: "Can a scrap importer or yard recover multiple unpaid truckloads across 20+ mills at once?",
    a: "Yes. Importers and regional yards can onboard as an institutional Representee on LegalRecovery.in, upload a single CSV of defaulting mills with E-Way Bill and weighbridge references, and dispatch synchronized Fact-Verified Legal Notices via Email, WhatsApp, and Speed Post RPAD in one batch.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Sale of Goods Act, 1930 (Sections 26, 42 & 61 — Acceptance by Consumption & Unpaid Seller Interest) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXXVIII Rule 5 Attachment Before Judgment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Negotiable Instruments Act, 1881 (Sections 138, 139, 141 & 143A — Dishonoured PDCs & Director Liability) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Weighbridge, FASTag & Gate-Camera Admissibility) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Central Goods and Services Tax Act, 2017 (Section 16 — Input Tax Credit & E-Way Bill Movement Proof) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/15689",
  },
  {
    title: "Insolvency and Bankruptcy Code, 2016 (Section 8 & 9 — Operational Creditor Demand Notice) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/15479",
  },
];

const STATUTORY_MATRIX = [
  {
    breach: "Furnace Melts Scrap in 12–24 Hrs, Then Raises Slag / Burning-Loss Debit",
    statute: "Sale of Goods Act, 1930 s.42",
    evidence: "Origin + Mill Dharamkanta Slips, Gate Register & Furnace Heat-Log",
    remedy: "Consumption Estoppel Bar + Order XXXVII Summary Suit",
    timeline: "7-Day Notice / 45–90d Suit",
  },
  {
    breach: "LME / MCX Price Dip Triggers Copper, Brass or Aluminium Rate-Cut Demand",
    statute: "Sale of Goods Act ss.26, 42 & 61",
    evidence: "XRF/OES Assay Slip + WhatsApp Rate Lock + Signed Bilty",
    remedy: "Full Contract Price + 24% p.a. Commercial Interest",
    timeline: "7-Day RTGS Demand",
  },
  {
    breach: "Distressed Rolling Mill Strips Billets Before Bank SARFAESI Seizure",
    statute: "CPC Order XXXVIII Rule 5 + Order XXXVII",
    evidence: "Night-Clearance Proof, Electricity Arrears & Peer Defaults",
    remedy: "Urgent Attachment Before Judgment (ABJ) & Garnishee Freeze",
    timeline: "3–14 Days Interim Relief",
  },
  {
    breach: "Dishonoured 24-Hr / 7-Day RTGS Security PDCs by Mill Directors",
    statute: "NI Act, 1881 ss.138, 141 & 143A",
    evidence: "Original Cheque, Bank Return Memo & Prior Ledger Intimation",
    remedy: "Criminal Summons vs. Directors + 20% Interim Deposit",
    timeline: "30d Notice + 15d Cure",
  },
  {
    breach: "Buyer Alleges 'GST Fake Invoice / ITC Mismatch' to Freeze ₹40L+ Ledger",
    statute: "CGST Act s.16(2) + BSA 2023 s.63",
    evidence: "E-Way Bill Part-B, FASTag Toll Log, Gate CCTV & GSTR-1/2B",
    remedy: "Estoppel Against Buyer + Commercial Court Recovery",
    timeline: "15-Day Pre-Suit Notice",
  },
];

const EVIDENCE_CHECKLIST = [
  "Origin & Destination Dharamkanta Weighbridge Slips: Preserve gross, tare, and net weight printouts with timestamped vehicle registration numbers.",
  "GST E-Way Bill (Part-A & Part-B): Download portal PDFs showing exact dispatch time, HSN code (7204 ferrous / 7404 copper / 7602 aluminium), and transporter ID.",
  "Highway FASTag & GPS Fleet Logs: Export toll-plaza crossing timestamps proving uninterrupted physical transit from port/yard to the mill's industrial belt.",
  "Mill Gate-Entry Register & Security CCTV Frame: Retain driver-signed gate passes and timestamped unloading photos inside the buyer's scrap bay.",
  "Pre-Dispatch XRF / Spectrometer Assay Report: Attach chemical purity certificates for non-ferrous copper, brass, SS 304/316, and aluminium ADC-12 ingot lots.",
  "WhatsApp / Email Rate-Lock & 24-Hour RTGS Terms: Export complete chat threads confirming grade, rate per MT, and 24-hour/7-day payment commitment.",
  "GSTR-1 & GSTR-2B Tax-Paid Reconciliation: Prove tax remittance and buyer ITC availment to demolish bad-faith 'bogus billing' excuses.",
  "BSA 2023 Section 63 Electronic Certificate: Execute a signed s.63 certificate covering all digital weighbridge, FASTag, GST portal, and WhatsApp records.",
];

const DECISION_STEPS = [
  {
    step: "01. Freeze Evidence (Day 0–2)",
    detail: "Lock Dharamkanta slips, E-Way Bill, FASTag & gate unloading photos under BSA s.63.",
  },
  {
    step: "02. Bar Slag Excuses (Day 3)",
    detail: "Serve s.42 Sale of Goods notice: furnace melting = irrevocable acceptance.",
  },
  {
    step: "03. Present PDCs (Day 7–15)",
    detail: "Intimate ledger balance & present security cheques to trigger NI s.138/143A.",
  },
  {
    step: "04. Attach Stock (Day 15–30)",
    detail: "File Order 37 + Order 38 Rule 5 ABJ on billets/ingots before bank seizure.",
  },
  {
    step: "05. IBC / ODR Exit (₹1Cr+)",
    detail: "Issue IBC Form 3 Demand Notice or batch CSV notices for priority payout.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-20T10:00:00+05:30",
  dateModified: "2026-11-20T10:00:00+05:30",
  mainEntityOfPage: PAGE_URL,
  author: {
    "@type": "Person",
    // TODO(reviewer): src/data/reviewers.ts is absent in this repository
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
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
  image: `${SITE_URL}/blog_money_recovery.png`,
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Metal Scrap & Ingot Traders Recover Defaulted Rolling Mill Payments",
  description:
    "5-step creditor workflow to defeat post-melting slag deductions under Sale of Goods Act s.42 and attach mill assets under CPC Order XXXVIII Rule 5.",
  step: DECISION_STEPS.map((s, idx) => ({
    "@type": "HowToStep",
    position: idx + 1,
    name: s.step,
    text: s.detail,
  })),
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
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
      name: "Mining, Minerals & Metal Scrap Recovery",
      item: `${SITE_URL}/industries/mining-minerals-fuel-scrap-commodity-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Metal Scrap & Ingot Recovery",
      item: PAGE_URL,
    },
  ],
};

export default function MetalScrapRollingMillRecoveryPage() {
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
            <span>IND-25</span>
            <span>&bull;</span>
            <span>Metal Scrap &amp; Rolling Mill Recovery Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under Section 42 of the Sale of Goods Act, 1930, melting HMS, shredded, or non-ferrous scrap in an induction furnace extinguishes all buyer rejection rights. Part of our{" "}
            <Link
              href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
              className="text-red-400 underline hover:text-red-300 font-semibold"
            >
              IND-25 Mining, Fuel &amp; Metal Scrap Recovery Hub
            </Link>
            , this playbook pairs Dharamkanta slips with urgent Order XXXVIII Rule 5 attachment before banks seize distressed mills.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">₹25L–₹80L</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Single Scrap / Ingot Truckload</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">1.5%–3%</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Thin Trading Margin wiped by 1 default</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">Section 42</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Furnace Melting = Irrevocable Acceptance</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">Order 38 R.5</p>
              <p className="text-[10px] sm:text-xs text-slate-400">Urgent Billet &amp; Receivable Attachment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Mining, Minerals & Scrap Recovery",
              href: "/industries/mining-minerals-fuel-scrap-commodity-recovery",
            },
            {
              label: "Metal Scrap & Ingot Default Recovery",
              href: PAGE_PATH,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          <MetalScrapTableOfContents />

          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Why Scrap Traders Lose 1.5% Margins Inside Induction Furnaces
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Ferrous Heavy Melting Scrap (HMS 1&amp;2), shredded scrap, sponge iron, and high-value non-ferrous lots—copper wire, brass honey, SS 304/316, and aluminium ADC-12 ingots—trade on razor-thin <strong>1.5% to 3% gross margins</strong>. Whether supplying from Mumbai/Nhava Sheva import yards, Mundra, Kandla, or Alang ship-breaking plots, traders commit <strong>₹25 Lakh to ₹80 Lakh per truckload</strong> against 24-hour RTGS or 7-day bill terms.
                </p>
                <p>
                  Because a single defaulted copper or HMS truckload wipes out the net profit of <strong>40 to 50 clean dispatches</strong>, rolling mills and induction furnaces in Mandi Gobindgarh, Jalna, Raipur, Bhiwadi, and Muzaffarnagar exploit a predictable liquidity tactic: they unload the vehicle, pass the Dharamkanta weighbridge, charge the scrap into the furnace within 12 hours, and then withhold payment 15–30 days later blaming <em>&ldquo;excess slag, rust, or recovery loss.&rdquo;</em>
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                  <strong>Critical Distress Window:</strong> When an induction furnace stops honouring 24-hour RTGS commitments, weeks—not months—determine recovery. If a scrap supplier waits 60 days sending informal broker reminders, secured consortium banks invoke SARFAESI Act Section 13(2)/(4) and seal the plant, relegating unsecured scrap creditors behind bank collateral. Early Advocate Legal Notices paired with PDC Section 138 action move your claim to the front of the queue.
                </div>
              </div>
            </section>

            {/* Section 2: 5-Step Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  5-Step Scrap Truckload &amp; Furnace Recovery Decision Tree
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Execute this 30-day escalation ladder the moment a 24-hour RTGS or 7-day rolling mill invoice turns overdue, before the plant&apos;s finished billets are cleared or attached by secured lenders.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto pb-2">
                <svg
                  viewBox="0 0 920 210"
                  width="920"
                  height="210"
                  role="img"
                  aria-label="5-step metal scrap and rolling mill payment recovery decision tree"
                  className="w-full h-auto"
                >
                  <rect x="0" y="0" width="920" height="210" rx="16" fill="#0F172A" />
                  {DECISION_STEPS.map((item, idx) => {
                    const x = 18 + idx * 180;
                    const isRed = idx === 1 || idx === 3;
                    return (
                      <g key={item.step}>
                        <rect
                          x={x}
                          y="28"
                          width="162"
                          height="154"
                          rx="12"
                          fill={isRed ? "#7F1D1D" : "#1E293B"}
                          stroke={isRed ? "#DC2626" : "#334155"}
                          strokeWidth="1.5"
                        />
                        <text x={x + 12} y="54" fill="#F87171" fontSize="11" fontWeight="700">
                          {item.step.split(".")[0]}
                        </text>
                        <text x={x + 12} y="74" fill="#FFFFFF" fontSize="12" fontWeight="700">
                          {item.step.split(". ")[1]}
                        </text>
                        <foreignObject x={x + 10} y="86" width="142" height="86">
                          <div className="text-[11px] leading-snug text-slate-300 font-sans">
                            {item.detail}
                          </div>
                        </foreignObject>
                        {idx < DECISION_STEPS.length - 1 && (
                          <path
                            d={`M ${x + 164} 105 L ${x + 178} 105`}
                            stroke="#EF4444"
                            strokeWidth="2.5"
                            markerEnd="url(#arrow)"
                          />
                        )}
                      </g>
                    );
                  })}
                  <defs>
                    <marker
                      id="arrow"
                      markerWidth="6"
                      markerHeight="6"
                      refX="5"
                      refY="3"
                      orient="auto"
                    >
                      <path d="M0,0 L6,3 L0,6 Z" fill="#EF4444" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {DECISION_STEPS.map((item, idx) => (
                  <div
                    key={item.step}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                      Step {idx + 1} &bull; {item.step}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
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
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory Matrix: Sale of Goods s.42, Order 38 Rule 5 &amp; s.138
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Match the rolling mill or foundry&apos;s exact delay tactic to the statutory remedy that blocks triable defences and attaches liquid assets fastest.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Mill / Buyer Excuse</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Mandatory Proof</th>
                      <th className="p-3.5 font-bold">Creditor Remedy</th>
                      <th className="p-3.5 font-bold">Action Window</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row) => (
                      <tr key={row.breach} className="hover:bg-slate-50">
                        <td className="p-3.5 font-semibold text-slate-900">{row.breach}</td>
                        <td className="p-3.5 text-[#DC2626] font-bold">{row.statute}</td>
                        <td className="p-3.5 text-slate-600">{row.evidence}</td>
                        <td className="p-3.5 text-emerald-700 font-semibold">{row.remedy}</td>
                        <td className="p-3.5 text-slate-700 whitespace-nowrap">{row.timeline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive 4 Scenarios */}
            <section
              id="heading-scrap-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  4 Metal Scrap &amp; Ingot Default Playbooks (Interactive)
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Select your exact dispute profile—post-melting slag deductions, LME/MCX copper rate-drop rejections, GST ITC accusations, or distressed plant asset stripping.
              </p>

              <MetalScrapScenarioTabs />
            </section>

            {/* Section 5: Worked Recovery Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Worked Recovery Ledger: ₹45 Lakh HMS &amp; Copper Scrap Default
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Illustration of a single 32 MT HMS/copper-alloy dispatch on 24-hour RTGS terms where the rolling mill melted the lot and raised an unsubstantiated 12% slag deduction 18 days later:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Unpaid Principal &amp; Statutory Interest
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Tax Invoice Value (32 MT + 18% GST)</span>
                      <span className="font-bold">₹45,00,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Disputed Post-Melting Slag Debit (Barred s.42)</span>
                      <span className="font-bold text-red-400">₹0 Allowed</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Contractual / s.61 Interest (24% p.a. &times; 90d)</span>
                      <span className="font-bold text-emerald-400">+ ₹2,66,301</span>
                    </div>
                    <div className="flex justify-between pt-1 text-base font-black">
                      <span>Total Recoverable Claim</span>
                      <span className="text-emerald-400">₹47,66,301</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-3 text-emerald-950">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Parallel Leverage &amp; Margin Protection
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm leading-relaxed">
                    <li>
                      <strong>Trader Net Margin at 1.5%:</strong> Only ₹67,500 profit on a ₹45L load—meaning absorbing a 12% slag cut (₹5.40L) destroys 8x your entire trade margin.
                    </li>
                    <li>
                      <strong>NI Act s.143A Interim Relief:</strong> On a dishonoured ₹45L security PDC, the Magistrate can order 20% interim compensation (<strong>₹9,00,000</strong>) within 60 days of plea.
                    </li>
                    <li>
                      <strong>Order 38 Rule 5 Security:</strong> Attaching ~75 MT of finished MS billets or aluminium ingots in the mill yard secures 100% of the principal before bank SARFAESI action.
                    </li>
                  </ul>
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
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  BSA 2023 s.63 Weighbridge, E-Way Bill &amp; Furnace Checklist
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5">
                Assemble these eight records before serving your Advocate Legal Notice or moving Commercial Court for Order XXXVII / Order XXXVIII Rule 5 relief:
              </p>

              <ul className="space-y-3">
                {EVIDENCE_CHECKLIST.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs sm:text-sm text-slate-700"
                  >
                    <span className="w-6 h-6 rounded-md bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 7: Dual-Track CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Serve 1 Pilot Notice (₹999) or Upload Mill Defaulter CSV
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Act within the critical pre-SARFAESI window: test our Fact-verified notice on one overdue rolling mill today, or upload your entire yard&apos;s overdue ledger via Representee CSV.
              </p>

              <MetalScrapCTA />
            </section>

            {/* Section 8: Hub, Calculators, Templates & Sibling Guides */}
            <section
              id="heading-hub-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  IND-25 Hub, Calculators, Templates &amp; Recovery Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <Link
                  href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">IND-25 Mining, Fuel &amp; Metal Scrap Hub &rarr;</p>
                  <p className="text-slate-600">Complete sector playbook for coal, petcoke, scrap, industrial gas &amp; mineral suppliers.</p>
                </Link>

                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">Order XXXVII CPC Summary Suit Guide &rarr;</p>
                  <p className="text-slate-600">Fast-track liquidated invoice recovery without full-trial leave to defend.</p>
                </Link>

                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">Cheque Bounce Case Against Mill Directors &rarr;</p>
                  <p className="text-slate-600">Enforce NI Act ss.138/141 personal liability and 20% s.143A interim deposit.</p>
                </Link>

                <Link
                  href="/recovery/unpaid-invoices"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">B2B Unpaid Commercial Invoice Recovery &rarr;</p>
                  <p className="text-slate-600">End-to-end commercial invoice demand, interest &amp; pre-litigation workflow.</p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">MSME 3x RBI Compound Interest Calculator &rarr;</p>
                  <p className="text-slate-600">Compute statutory delayed-payment interest for Udyam-registered recyclers &amp; processors.</p>
                </Link>

                <Link
                  href="/tools/cheque-bounce-deadline-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">NI s.138 Cheque Bounce Deadline Calculator &rarr;</p>
                  <p className="text-slate-600">Track exact 30-day statutory notice and 15-day cure deadlines from return memo date.</p>
                </Link>

                <Link
                  href="/templates/rmc-steel-chemical-building-material-demand-legal-notice"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">Steel &amp; Bulk Industrial Material Demand Notice &rarr;</p>
                  <p className="text-slate-600">Ready-to-use notice template with Sale of Goods s.42 &amp; weighbridge clauses.</p>
                </Link>

                <Link
                  href="/templates/security-cheque-presentation-intimation-cum-ledger-notice"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <p className="font-bold text-slate-900 mb-1">Security Cheque Presentation Intimation Notice &rarr;</p>
                  <p className="text-slate-600">Pre-presentation ledger notice locking debt crystalization before s.138 filing.</p>
                </Link>
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  FAQs: Ferrous, Non-Ferrous Scrap &amp; Rolling Mill Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((item) => (
                  <details
                    key={item.q}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{item.q}</span>
                      <span className="text-[#DC2626] font-black shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Official Statutory Portals &amp; Bare Act Authorities
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline underline-offset-2"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <div className="bg-[#F8F9FB] border-t border-slate-200">
        <RelatedRecoveryGuides />
      </div>
    </div>
  );
}
