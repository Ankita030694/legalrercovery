import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MiningHEMMTableOfContents from "./MiningHEMMTableOfContents";
import MiningHEMMScenarioTabs from "./MiningHEMMScenarioTabs";
import MiningHEMMCTA from "./MiningHEMMCTA";

export const revalidate = 86400;

const PAGE_URL = "/mining-overburden-removal-drilling-blasting-hems-contractor-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const H1_TEXT =
  "Mining Leaseholder Suspended Operations or Disputed Volumetric Survey Measurements—Withholding Crores on Your HEMM / Overburden Fleet?";

const META_TITLE = "Mining Overburden, Drilling & HEMM Contractor Recovery";
const META_DESCRIPTION =
  "Recover ₹1 Cr–₹25 Cr HEMM, overburden (OB) & rock-blasting arrears via joint Total-Station/Drone survey sheets, s.9/21 Arbitration & idle-fleet claims.";

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
        alt: formatAltText(
          "Mining overburden removal drilling blasting and HEMM contractor bill recovery playbook"
        ),
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

const STATUTORY_MATRIX = [
  {
    statute: "Arbitration & Conciliation Act, 1996",
    provision: "Section 9 (Interim Relief) & Section 21 (Invocation)",
    trigger:
      "Leaseholder blocks demobilization gate passes for financed dumpers/excavators or disputes joint Total-Station / Drone OB survey sheets.",
    remedy:
      "Urgent Commercial Court order appointing an Advocate Commissioner / Court Receiver to release HEMM fleet, freeze mineral escrow, and start limitation.",
    timeline: "48–72 Hrs Urgent s.9 / 21-Day Notice",
  },
  {
    statute: "Indian Contract Act, 1872",
    provision: "Sections 55, 73 & 74 (Prevention, Idle Charges & Set-Off)",
    trigger:
      "Mine operations halt due to the leaseholder's EC, Forest Clearance (FC), or DGMS lapse, leaving ₹20L+/month EMI fleets stranded idle.",
    remedy:
      "Enforcement of contractual idle-fleet standing charges, minimum guaranteed BCM shortfall damages, and voiding of arbitrary diesel/explosive set-offs.",
    timeline: "Day-1 Idle Log + 15-Day Demand",
  },
  {
    statute: "Commercial Courts Act, 2015 & CPC",
    provision: "Section 2(1)(c), Order XXXVII & Order XXXVIII Rule 5",
    trigger:
      "Certified RA bills, retention money, or tipper-hire invoices remain unpaid without an arbitration clause while the MDO strips pit assets.",
    remedy:
      "Fast-track Summary Suit on counter-signed MB/RA certificates plus pre-judgment attachment of coal/ore dispatch receivables or bank accounts.",
    timeline: "4–9 Months (Summary Track)",
  },
  {
    statute: "Insolvency & Bankruptcy Code, 2016",
    provision: "Section 8 Demand Notice (Form 3/4) & Section 9 CIRP",
    trigger:
      "Undisputed operational debt across certified OB RA bills and equipment hire crosses the ₹1 Crore statutory threshold.",
    remedy:
      "10-day statutory IBC demand notice against the corporate MDO or mine leaseholder, triggering board-level settlement before NCLT admission.",
    timeline: "10-Day Statutory Cure Window",
  },
  {
    statute: "MSMED Act, 2006 & IT Act s.43B(h)",
    provision: "Sections 15–18 (MSEFC) & 3x RBI Compound Interest",
    trigger:
      "Udyam-registered rock-drilling, blasting, or tipper-hire subcontractor faces payment delay beyond 45 days on non-works pure service/supply bills.",
    remedy:
      "Monthly compounded 3x RBI bank rate interest and statutory Income Tax disallowance on the principal's audited P&L under Section 43B(h).",
    timeline: "45-Day Cap / 90-Day MSEFC",
  },
  {
    statute: "BNS 2023 & NI Act, 1881",
    provision: "BNS s.316 (Criminal Breach of Trust) & NI s.138/141",
    trigger:
      "Mine security unlawfully detains NBFC-hypothecated HEMM machinery or RA-bill security cheques bounce for insufficient funds.",
    remedy:
      "Criminal prosecution for misappropriation of bailed/contractor machinery and personal director liability with 20% interim compensation under s.143A.",
    timeline: "7-Day Recall / 15-Day s.138 Notice",
  },
];

const FAQS = [
  {
    question:
      "Can an MDO or mining leaseholder deduct 15% from our OB bill weeks after blasting and backfilling the bench?",
    answer:
      "No. In open-cast coal, iron ore, and limestone mining, overburden excavation is irreversible once subsequent benches are drilled, blasted, or backfilled. Under Indian Contract Act estoppel and standard MDO measurement clauses, once pre-excavation and post-excavation Total-Station or Drone LiDAR surveys are jointly signed—or once the principal alters the pit topography without preserving a joint re-survey—unilateral volumetric deductions are legally unsustainable and can be challenged via Section 9/21 Arbitration or Commercial Court recovery.",
  },
  {
    question:
      "Are we entitled to idle-fleet charges if the mine shuts down due to the leaseholder's EC or Forest Clearance suspension?",
    answer:
      "Yes, provided you document idle deployment from Day 1. When operations stop because of the leaseholder's Environmental Clearance (EC), Forest Clearance (FC), Consent to Operate (CTO), or DGMS safety violation, the stoppage is an employer-attributed prevention under Sections 55 and 73 of the Indian Contract Act, 1872—not a neutral Force Majeure event. Serving daily machine-wise idle attendance logs, GPS hours, and a formal standing-charge notice preserves your right to recover fixed fleet overheads.",
  },
  {
    question:
      "What can we do if mine security blocks gate passes for our 40-ton dumpers and excavators?",
    answer:
      "A mine leaseholder or MDO has no statutory lien over your financed HEMM fleet for disputed RA bill or diesel reconciliation counter-claims. Immediately serve a 48-hour tri-channel Advocate Notice listing every machine's chassis number, RC registration, and NBFC hypothecation details, warning of BNS Section 316 liability, and simultaneously file an urgent Section 9 petition under the Arbitration and Conciliation Act, 1996 (or Order 39/40 CPC) seeking an Advocate Commissioner to escort your equipment safely off-site.",
  },
  {
    question:
      "How do overburden contractors defeat arbitrary free-issue diesel (HSD) and explosive recovery deductions?",
    answer:
      "Principals often raise backdated HSD or powder-factor debit notes at final billing without accounting for uncalibrated bowser meters, hard-rock strata, or extended haul gradients. To defeat these set-offs, compile daily signed HSD bowser issue slips, OEM hour-meter telemetry, PESO Form RE-11/RE-12 explosive magazine issue registers, and site emails flagging rock-hardness shifts, certified under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023.",
  },
  {
    question:
      "Can a mining subcontractor file an IBC Section 8 demand notice for ₹1 Cr+ in unpaid RA bills?",
    answer:
      "Yes, if the ₹1 Crore+ debt is based on counter-signed Measurement Books (MBs), certified RA bills, or GST-acknowledged invoices with no pre-existing written dispute raised before your demand notice. Under Mobilox Innovations norms, a genuine pre-existing dispute blocks NCLT admission, so it is critical to lock undisputed certified RA bills separately from contested extra-item or idle-fleet claims before serving IBC Form 3/4.",
  },
  {
    question:
      "Do rock-drilling, blasting, and tipper-hire contractors qualify for MSMED 3x RBI interest?",
    answer:
      "It depends on contract classification. Pure equipment-hire, tipper-transport, or standalone drilling service contracts held by an Udyam-registered MSME generally qualify for MSEFC Samadhaan and 3x RBI monthly compounded interest under Sections 15–18 of the MSMED Act, 2006. However, composite EPC/works contracts may be excluded by High Court precedents, in which case Commercial Courts, Order XXXVII CPC, and Section 21 Arbitration remain the fastest recovery tracks.",
  },
];

const PRIMARY_SOURCES = [
  {
    title:
      "Arbitration and Conciliation Act, 1996 (Section 9 Interim Measures & Section 21 Commencement) — IndiaCode",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "Directorate General of Mines Safety (DGMS) — Metalliferous Mines & Coal Mines Regulations Portal",
    url: "https://www.dgms.gov.in",
  },
  {
    title:
      "Ministry of Mines, Government of India — MMDR Act & Mineral Concession Rules",
    url: "https://mines.gov.in",
  },
  {
    title:
      "Commercial Courts Act, 2015 & Code of Civil Procedure, 1908 (Order XXXVII & XXXVIII Rule 5) — IndiaCode",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Insolvency and Bankruptcy Code, 2016 (Section 8 & 9 Operational Creditor Remedies) — IBBI",
    url: "https://ibbi.gov.in",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 Electronic Evidence Certificate) — IndiaCode",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
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
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Mining Overburden & HEMM Contractors Recover Unpaid RA Bills & Idle-Fleet Claims",
  description:
    "Step-by-step creditor playbook using joint Total-Station/Drone survey sheets, Arbitration Act Section 9/21, Demobilization Gate-Pass injunctions, and IBC Section 8.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Freeze Joint Volumetric Survey & Daily Idle Logs",
      text: "Archive counter-signed Total-Station/Drone LiDAR OB survey sheets, MB entries, HSD slips, and GPS idle-hour logs with a BSA 2023 Section 63 certificate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve Arbitration s.21 / Gate-Pass Demobilization Notice",
      text: "Dispatch a tri-channel Fact-Verified Notice (RPAD, Email, WhatsApp) demanding release of certified RA bills, reversal of arbitrary HSD cuts, and immediate HEMM gate passes.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Enforce Section 9 Fleet Release & IBC s.8 / Commercial Suit",
      text: "Move an urgent Section 9 Commercial Court petition to appoint a Court Receiver for fleet demobilization while escalating ₹1 Cr+ undisputed dues via IBC s.8 or Arbitration.",
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
      name: "Mining, Fuel & Commodity Recovery",
      item: `${SITE_URL}/industries/mining-minerals-fuel-scrap-commodity-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Mining Overburden & HEMM Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function MiningOverburdenHEMMRecoveryPage() {
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
            <span>IND-25 Mining Playbook</span>
            <span>&bull;</span>
            <span>Arbitration s.9 &amp; s.21</span>
            <span>&bull;</span>
            <span>HEMM Gate-Pass Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box with Inline Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Joint Total-Station and Drone LiDAR survey sheets bar post-excavation volumetric cuts once benches are altered. Leaseholder EC/FC stoppages trigger idle-fleet standing charges under Contract Act s.73, while Arbitration s.9 unlocks blocked HEMM gate passes—anchored in our{" "}
            <Link
              href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              IND-25 mining &amp; commodity recovery hub
            </Link>
            .
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                &#8377;1 Cr&ndash;&#8377;25 Cr
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Typical OB &amp; MDO RA-Bill Ticket
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                &#8377;20L&ndash;&#8377;60L/mo
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Dumper &amp; Drill Fleet EMI Load
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                48&ndash;72 Hrs
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Urgent s.9 Gate-Pass Relief
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">
                18% / 3x RBI
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Commercial &amp; MSME Interest
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Mining, Fuel & Commodity Recovery",
                href: "/industries/mining-minerals-fuel-scrap-commodity-recovery",
              },
              {
                label: "Mining Overburden & HEMM Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <MiningHEMMTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Fleet EMI Economics */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Why &#8377;20L/Month HEMM EMIs Make Mining OB Defaults Existential
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across India&apos;s open-cast coal, iron ore, bauxite, and limestone belts—spanning Talcher, Keonjhar, and Sundargarh in Odisha; Dhanbad, Bokaro, and West Singhbhum in Jharkhand; Korba and Raigarh in Chhattisgarh; Bellary-Hospet in Karnataka; Goa; and Rajasthan&apos;s Bhilwara-Udaipur quarry corridors—overburden (OB) removal, rock drilling, blasting, and Heavy Earth Moving Machinery (HEMM) subcontractors operate on razor-thin cash-flow margins against massive capital leverage.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A mid-sized MDO subcontractor deploying ten 40-ton Volvo/Scania/BharatBenz tippers, three 50-ton hydraulic excavators, two blast-hole DTH drill rigs, and a motor grader carries ₹20 Lakh to ₹60 Lakh in non-negotiable monthly NBFC equipment EMIs, plus ₹12 Lakh+ in operator payroll and spares. When a mine leaseholder or principal MDO withholds two consecutive Running Account (RA) bills worth ₹2 Cr to ₹8 Cr—or freezes operations over an Environmental Clearance (EC) notice while refusing demobilization gate passes—the contractor faces imminent CIBIL default and asset repossession unless statutory recovery is triggered within 15 days.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">
                    Survey Haircuts
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    10–18% unilateral BCM volume deductions raised after blasting/backfilling erases original bench levels.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase text-amber-700 mb-1">
                    Idle-Fleet Bleeding
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    EC/FC/DGMS suspensions strand ₹10 Cr+ fleets in-pit while NBFC EMIs accrue daily without BCM billing.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase text-emerald-700 mb-1">
                    Gate-Pass Leverage
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700">
                    Arbitration s.9 + BNS s.316 strips the leaseholder&apos;s illegal hostage hold over financed dumpers &amp; drills.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Decision Tree: Joint Survey Freeze, Idle Fleet &amp; s.9 Repossession
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Mining OB disputes fail in court when contractors keep working orally on promises of &ldquo;next-month adjustment&rdquo; until the pit geometry changes and diesel logs scatter. Follow this 4-stage escalation decision tree to separate undisputed certified BCM bills from contested deductions and protect your fleet.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  width={820}
                  height={300}
                  viewBox="0 0 820 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Mining Overburden and HEMM Contractor 4-Stage Recovery Decision Tree"
                >
                  {/* Step 1 */}
                  <rect x="16" y="30" width="175" height="110" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="30" y="55" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 (DAY 1–3)</text>
                  <text x="30" y="76" fill="#FFFFFF" fontSize="13" fontWeight="700">Survey &amp; Log Freeze</text>
                  <text x="30" y="96" fill="#CBD5E1" fontSize="10.5">Lock Total-Station / Drone</text>
                  <text x="30" y="112" fill="#CBD5E1" fontSize="10.5">DXF, MBs, HSD slips &amp; GPS</text>
                  <text x="30" y="128" fill="#CBD5E1" fontSize="10.5">idle hours (BSA s.63).</text>

                  <path d="M191 85 H221" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="221" y="30" width="175" height="110" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="235" y="55" fill="#FBBF24" fontSize="11" fontWeight="700">STAGE 2 (DAY 4–10)</text>
                  <text x="235" y="76" fill="#FFFFFF" fontSize="13" fontWeight="700">Tri-Channel Notice</text>
                  <text x="235" y="96" fill="#CBD5E1" fontSize="10.5">Serve RA Bill + Idle-Fleet</text>
                  <text x="235" y="112" fill="#CBD5E1" fontSize="10.5">Demand + 48-Hr Gate-Pass</text>
                  <text x="235" y="128" fill="#CBD5E1" fontSize="10.5">Notice (RPAD + Email).</text>

                  <path d="M396 85 H426" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Step 3 */}
                  <rect x="426" y="30" width="175" height="110" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="440" y="55" fill="#34D399" fontSize="11" fontWeight="700">STAGE 3 (URGENT)</text>
                  <text x="440" y="76" fill="#FFFFFF" fontSize="13" fontWeight="700">Fleet / Arb. s.9 Track</text>
                  <text x="440" y="96" fill="#CBD5E1" fontSize="10.5">If Gate Blocked: s.9 Court</text>
                  <text x="440" y="112" fill="#CBD5E1" fontSize="10.5">Receiver + BNS s.316 to</text>
                  <text x="440" y="128" fill="#CBD5E1" fontSize="10.5">evacuate dumpers &amp; drills.</text>

                  <path d="M601 85 H631" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Step 4 */}
                  <rect x="631" y="30" width="175" height="110" rx="12" fill="#0F172A" stroke="#34D399" strokeWidth="2" />
                  <text x="645" y="55" fill="#34D399" fontSize="11" fontWeight="700">STAGE 4 (RECOVERY)</text>
                  <text x="645" y="76" fill="#FFFFFF" fontSize="13" fontWeight="700">s.21 / IBC s.8 / O.37</text>
                  <text x="645" y="96" fill="#CBD5E1" fontSize="10.5">Invoke Arb. s.21, IBC Form 3</text>
                  <text x="645" y="112" fill="#CBD5E1" fontSize="10.5">(&gt;=₹1 Cr certified) or Order</text>
                  <text x="645" y="128" fill="#CBD5E1" fontSize="10.5">37/38 attachment on ore.</text>

                  {/* Bottom Branching Guidance Bar */}
                  <rect x="16" y="175" width="790" height="95" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                  <text x="34" y="202" fill="#F87171" fontSize="11.5" fontWeight="700">FORUM ROUTING RULE:</text>
                  <text x="34" y="224" fill="#E2E8F0" fontSize="11">• Written Arbitration Clause Present → Section 9 Urgent Fleet/Escrow Protection + Section 21 Notice</text>
                  <text x="34" y="244" fill="#E2E8F0" fontSize="11">• Certified RA Bills &gt;= ₹1 Cr &amp; No Pre-Existing Dispute → IBC Section 8 Form 3/4 (10-Day Cure)</text>
                  <text x="34" y="264" fill="#E2E8F0" fontSize="11">• Pure Tipper/Drill Hire by Udyam MSME → MSEFC Samadhaan (3x RBI Compound Interest + s.43B(h))</text>

                  <defs>
                    <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                      <path d="M0,0 L8,4 L0,8 Z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    stage: "Stage 1 (Day 1–3): Survey & Log Freeze",
                    detail: "Lock Total-Station/Drone DXF files, MBs, daily HSD slips & GPS idle-hour logs under BSA s.63.",
                  },
                  {
                    stage: "Stage 2 (Day 4–10): Tri-Channel Demand Notice",
                    detail: "Serve RA Bill + Idle-Fleet Demand + 48-Hr Demobilization Gate-Pass Notice via RPAD, Email & WhatsApp.",
                  },
                  {
                    stage: "Stage 3 (Urgent): Arbitration s.9 & BNS s.316",
                    detail: "If gate passes are blocked, move Commercial Court under s.9 for Court Receiver to evacuate HEMM fleet.",
                  },
                  {
                    stage: "Stage 4 (Recovery): s.21 / IBC s.8 / Order 37",
                    detail: "Invoke Arbitration s.21, IBC Form 3 (>= ₹1 Cr certified RA), or Order 37/38 attachment on mineral proceeds.",
                  },
                ].map((c, i) => (
                  <div key={i} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-xs font-bold text-red-400 mb-1">{c.stage}</p>
                    <p className="text-xs text-slate-300">{c.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Statutory Matrix: Arbitration s.9/21, Commercial Courts &amp; IBC s.8
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                High-ticket mining and MDO contracts typically combine a commercial arbitration clause with statutory rights under the Contract Act, Commercial Courts Act, and IBC. Selecting the right statutory lever prevents years of civil-court stagnation.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="p-3.5 font-bold">Statute &amp; Provision</th>
                      <th className="p-3.5 font-bold">Site Trigger</th>
                      <th className="p-3.5 font-bold">Creditor Remedy</th>
                      <th className="p-3.5 font-bold">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 align-top">
                          <p className="font-bold text-slate-900">{row.statute}</p>
                          <p className="text-xs text-[#DC2626] font-semibold mt-0.5">
                            {row.provision}
                          </p>
                        </td>
                        <td className="p-3.5 text-slate-700 align-top">{row.trigger}</td>
                        <td className="p-3.5 text-slate-700 align-top">{row.remedy}</td>
                        <td className="p-3.5 font-semibold text-slate-900 align-top whitespace-nowrap">
                          {row.timeline}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive 4-Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4 Mining OB, Drilling &amp; HEMM Fleet Dispute Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select your active site bottleneck below to inspect the exact contractual failure mode, statutory counter-move, and 3-step execution protocol.
              </p>

              <MiningHEMMScenarioTabs />
            </section>

            {/* Section 5: Worked Recovery Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Worked Ledger: &#8377;3.40 Cr OB Volume Cut, Idle Charges &amp; HSD Recovery
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider a typical Odisha/Jharkhand coal-mine overburden subcontractor operating 12 tippers, 3 excavators, and 2 drill rigs at ₹145/BCM. When the MDO withholds RA-08 &amp; RA-09, imposes a 14% unilateral survey deduction, pauses the pit for 22 days over an EC compliance lapse, and deducts ₹38 Lakh as &ldquo;excess HSD burn,&rdquo; here is how the total recoverable claim is structured:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Illustrative OB &amp; HEMM Claim Ledger
                  </span>
                  <span className="text-xs text-slate-400">
                    3,20,000 BCM @ &#8377;145/BCM + 22 Idle Days
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      1. Unpaid Certified RA-08 &amp; RA-09 OB Excavation Balance
                    </span>
                    <span className="font-bold text-white shrink-0">&#8377;1,84,00,000</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      2. Reversed Unilateral 14% Post-Blast Volumetric Survey Cut
                    </span>
                    <span className="font-bold text-emerald-400 shrink-0">&#8377;64,96,000</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      3. 22-Day EC Suspension Idle-Fleet Standing Charges (17 HEMM Units)
                    </span>
                    <span className="font-bold text-emerald-400 shrink-0">&#8377;39,60,000</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      4. Reversed Arbitrary Free-Issue HSD &amp; Explosive Debit Note
                    </span>
                    <span className="font-bold text-emerald-400 shrink-0">&#8377;38,00,000</span>
                  </div>
                  <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">
                      5. Contractual 18% p.a. Delayed-Payment Interest (90 Days Accrued)
                    </span>
                    <span className="font-bold text-amber-400 shrink-0">&#8377;14,48,000</span>
                  </div>
                  <div className="flex justify-between gap-4 pt-3 text-sm sm:text-base font-black">
                    <span className="text-white">Total Statutory Demand &amp; Arbitral Claim</span>
                    <span className="text-red-400 shrink-0">&#8377;3,41,04,000</span>
                  </div>
                </div>

                <div className="bg-emerald-950/60 border border-emerald-800/60 rounded-xl p-3.5 text-xs text-emerald-200 leading-relaxed">
                  <strong>Strategic Split:</strong> Item 1 (&#8377;1.84 Cr certified RA balance) crosses the &#8377;1 Cr IBC Section 8 floor independently, while Items 2&ndash;5 (&#8377;1.57 Cr) are simultaneously pressed via Arbitration Section 21 + Section 9 security so the principal cannot use contested HSD or survey set-offs to stall payment of certified bills.
                </div>
              </div>
            </section>

            {/* Section 6: BSA 2023 s.63 & Survey Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Joint Survey, Logbook &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In mining arbitrations and Commercial Court proceedings, digital survey data and telematics are rejected if tendered without proper electronic certification. Assemble these six record sets before issuing your statutory notice:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Joint Total-Station & Drone LiDAR Files",
                    desc: "Pre- and post-excavation .dxf/.csv coordinates, orthomosaic maps, and counter-signed Measurement Book (MB) / joint survey sheets.",
                  },
                  {
                    title: "2. HEMM Chassis, RC & NBFC Hypothecation Dossier",
                    desc: "Asset-wise RC books, chassis/engine serials, and bank/NBFC loan schedules proving third-party/creditor title for Section 9 gate-pass relief.",
                  },
                  {
                    title: "3. Daily Idle-Fleet & GPS Telematics Logs",
                    desc: "Shift-wise operator attendance, machine hour-meter readings, and GPS geofence idle logs emailed daily to the mine manager during EC/FC halts.",
                  },
                  {
                    title: "4. HSD Bowser & PESO Magazine Registers",
                    desc: "Counter-signed daily diesel issue slips, bowser calibration certificates, and PESO Form RE-11/RE-12 explosive issue records.",
                  },
                  {
                    title: "5. GST Tax Invoices, GSTR-2B & Dishonored PDCs",
                    desc: "Certified RA bills, retention-money ledgers, and bank return memos for any bounced security cheques (NI Act s.138/141).",
                  },
                  {
                    title: "6. Section 63 BSA 2023 Electronic Certificate",
                    desc: "Mandatory statutory hash-value and device certification covering all WhatsApp pit-group instructions, survey exports, and email approvals.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
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

            {/* Section 7: Dual-Track CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Serve an Arbitration s.21 &amp; OB Recovery Notice Today
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether you need an urgent single-mine RA bill &amp; gate-pass demand notice or institutional recovery across multiple MDO pits and subcontractors, choose your execution track below.
              </p>

              <MiningHEMMCTA />
            </section>

            {/* Section 8: Hub, Calculators, Templates & Sibling Spokes */}
            <section
              id="heading-related-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  IND-25 Hub, Calculators, Templates &amp; Recovery Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-[#DC2626] mb-1">
                    IND-25 Pillar Hub
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Mining, Minerals, Fuel &amp; Commodity Recovery Hub
                  </p>
                </Link>
                <Link
                  href="/imported-coal-petcoke-biomass-supplier-gcv-moisture-deduction-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-slate-600 mb-1">
                    Sibling Playbook
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Imported Coal &amp; Petcoke GCV / Moisture Recovery
                  </p>
                </Link>
                <Link
                  href="/ferrous-non-ferrous-metal-scrap-ingot-rolling-mill-default-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-slate-600 mb-1">
                    Sibling Playbook
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Metal Scrap &amp; Rolling Mill Default Recovery
                  </p>
                </Link>
                <Link
                  href="/industrial-gas-oxygen-nitrogen-argon-co2-cylinder-retention-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-slate-600 mb-1">
                    Sibling Playbook
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Industrial Gas Cylinder Retention &amp; Rent Recovery
                  </p>
                </Link>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-emerald-700 mb-1">
                    Interactive Calculator (T1)
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    MSME 3x RBI Delayed Payment Interest Calculator
                  </p>
                </Link>
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-amber-700 mb-1">
                    Notice Workspace (P1)
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Ready-to-Use Commercial Notice &amp; Reply Template
                  </p>
                </Link>
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-slate-600 mb-1">
                    Statutory Deep-Dive (L1)
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Order XXXVII CPC Summary Suit Money Recovery
                  </p>
                </Link>
                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-slate-600 mb-1">
                    Director Liability
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Section 138 NI Act Case Against Company Directors
                  </p>
                </Link>
                <Link
                  href="/recovery/unpaid-invoices"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                >
                  <p className="text-xs font-bold uppercase text-slate-600 mb-1">
                    B2B Invoices
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Unpaid B2B Invoices &amp; Commercial Ledger Recovery
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: Mining OB &amp; HEMM Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-base shrink-0 group-open:rotate-45 transition-transform">
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

            {/* Section 10: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
              <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500">
                Reviewed for statutory accuracy by{" "}
                <strong className="text-slate-700">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions.
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
