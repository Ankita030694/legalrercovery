import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BusFleetTableOfContents from "./BusFleetTableOfContents";
import BusFleetScenarioTabs from "./BusFleetScenarioTabs";
import BusFleetNoticeCTA from "./BusFleetNoticeCTA";

export const revalidate = 86400;

const PAGE_PATH = "/school-bus-transport-fleet-contractor-unpaid-trust-dues-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const EXACT_H1 =
  "School Collected Annual Transport Fees From 1,500 Parents—Yet Hasn't Paid Your Yellow-Bus Fleet Contract for 4 Months? Recovery Guide";
const META_TITLE = "School Bus Fleet Contractor Unpaid Trust Bill Recovery";
const META_DESC =
  "Yellow school buses face state permit limits & fixed EMIs even in May–June vacations. Enforce 12-month standing charges & Trust recovery via MSMED s.15–18.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("School Bus Fleet Contractor Unpaid Trust Bill Recovery Guide"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
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
    q: "Can a school trust refuse to pay May and June bus fleet bills citing summer vacations?",
    a: "Not where your transport agreement provides a 12-month fixed standing charge, minimum monthly guarantee, or annual retainer. Yellow-painted school buses carry state Motor Vehicles permit restrictions and RTO branding that prevent commercial deployment during vacations, while your bank EMIs, insurance, and driver wages run year-round. Under Sections 70, 73, and 74 of the Indian Contract Act, 1872, a school that collects annual transport fees from parents cannot withhold vacation standing charges.",
  },
  {
    q: "How does the Fiduciary / Escrow Admission Argument help recover unpaid school bus bills?",
    a: "Private schools typically collect quarterly or annual transport fees upfront from parents in April under a dedicated 'Transport Fee' head. Once the school trust has collected earmarked transport money from parents for your buses, retaining those funds without paying the fleet operator strengthens a fiduciary accounting and unjust enrichment claim under Section 70 of the Indian Contract Act, 1872, and defeats 'cash-flow hardship' excuses.",
  },
  {
    q: "Who should be named in a legal notice when 'XYZ Public School' withholds transport dues?",
    a: "Never address a legal notice or civil suit solely to the school's brand name. Under Section 6 of the Societies Registration Act, 1860, a registered society must be sued through its President, Chairman, or Secretary. For a Public Charitable Trust, Order XXXI CPC requires impleading the Trust and its Managing/all Trustees. If the institution is run by a Section 8 Company, name the company and its authorized directors.",
  },
  {
    q: "Can a school bus fleet operator file on MSME Samadhaan against a charitable school trust?",
    a: "Yes. If your transport proprietorship, partnership, or private limited company holds a valid Udyam Registration as a Micro or Small Enterprise, a private school trust, society, or university qualifies as a 'buyer' under Section 2(d) of the MSMED Act, 2006. Unpaid monthly fleet invoices beyond 45 days attract compound interest at 3x the RBI bank rate with monthly rests under Section 16 before the MSEFC.",
  },
  {
    q: "What if the school trust refuses to pay diesel escalation or extra-kilometre shuttle bills?",
    a: "If your Transport Agreement includes a Diesel Price Variation formula linked to PSU retail pump rates and the school transport in-charge signed daily route logbooks, the differential is a liquidated contractual debt. Under Section 2(b) of the MSMED Act, if the school did not raise a written dispute within 15 days of receiving the monthly bill, the invoice is deemed accepted.",
  },
  {
    q: "Should we stop sending buses to the campus immediately if 4 months of bills are unpaid?",
    a: "Avoid abrupt, unannounced mid-term withdrawal. Stranding students on a school morning triggers RTO, police, and CBSE/state education department complaints that the school trust will weaponize as a 'deficiency of service' counter-claim. Instead, serve a formal 15-day Advocate Cure-cum-Suspension Notice first, documenting unpaid arrears while continuing logged operations during the notice window.",
  },
  {
    q: "What if a post-dated cheque (PDC) or NACH mandate issued by the school trust bounces?",
    a: "Dishonour of a school trust cheque attracts criminal liability under Section 138 read with Section 141 of the Negotiable Instruments Act, 1881 against the authorized signatories (Secretary, Treasurer, or Managing Trustee). You must dispatch a statutory demand notice within 30 days of the bank return memo. For bounced NACH/ECS mandates, Section 25 of the Payment and Settlement Systems Act, 2007 provides parallel criminal remedies.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Societies Registration Act, 1860 (Section 6 — Suits by and against Societies) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2262",
  },
  {
    title: "The Indian Trusts Act, 1882 & Code of Civil Procedure, 1908 (Order XXXI — Suits by or against Trustees)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18) — MSME Samadhaan",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "The Negotiable Instruments Act, 1881 (Section 138) & Payment and Settlement Systems Act, 2007 (Section 25)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic GPS, RFID & Logbook Evidence)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "NGO Darpan / NITI Aayog Portal (School Trust & Society Registration Verification)",
    url: "https://ngodarpan.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const REVIEWER_NAME = "Anuj Anand Malik";
const REVIEWER_ROLE = "Advocate & Founder, AMA Legal Solutions";

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESC,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  author: {
    "@type": "Person",
    name: REVIEWER_NAME,
    jobTitle: REVIEWER_ROLE,
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
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How School Bus Fleet Contractors Recover Unpaid Trust Dues & Standing Charges",
  description:
    "5-stage statutory recovery workflow for school and university transport fleet contractors facing unpaid monthly bills, vacation standing-charge cuts, and bounced trust cheques.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Verify Underlying Society, Trust, or Section 8 Entity",
      text: "Cross-check CBSE/ICSE Mandatory Public Disclosure, GSTIN, and Form 26AS TAN to identify the Registered Society, Public Trust, or Section 8 Company behind the school brand name.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Compile Parent-Fee Circulars, Route Logbooks & BSA s.63 GPS Logs",
      text: "Assemble transport fee circulars proving upfront parent fee collection, signed monthly route logbooks, diesel escalation charts, and Section 63 BSA 2023 certificates for GPS/RFID data.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve Composite Fact-Verified Demand Notice (Fiduciary + MSMED s.15–18)",
      text: "Dispatch a fact-verified notice via Email, WhatsApp, and Speed Post RPAD demanding principal arrears, 12-month standing charges, and 3x RBI bank rate compound interest.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Trigger Parallel s.138 NI Act / s.25 PSS Act for Bounced PDCs",
      text: "Where post-dated cheques or NACH mandates dishonour, serve a strict 30-day statutory demand notice against the Trust and authorized signatories.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Escalate to MSEFC Samadhaan, Order XXXVII CPC, or Arbitration",
      text: "File on MSME Samadhaan for 18-to-20%+ statutory interest or institute an Order XXXVII CPC summary suit / Section 9 Arbitration petition against the Trust and Trustees.",
    },
  ],
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
      name: "Schools, Universities & EdTech Recovery",
      item: `${SITE_URL}/industries/schools-universities-edtech-b2b-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "School Bus Fleet Trust Dues Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function SchoolBusFleetRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data */}
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
            <span>IND-17 &bull; EDUCATION TRANSPORT CREDITOR PLAYBOOK</span>
            <span className="text-red-500/70">&bull;</span>
            <span>FIDUCIARY ESCROW + MSMED s.15–18</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Summary + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Private schools that collect annual transport fees from parents cannot legally withhold
            your yellow-bus bills or May–June standing charges. Under our{" "}
            <Link
              href="/industries/schools-universities-edtech-b2b-recovery"
              className="text-red-300 underline decoration-red-400/70 hover:text-white font-semibold"
            >
              Schools, Universities &amp; EdTech B2B Recovery Hub
            </Link>
            , fleet contractors enforce fiduciary parent-fee admissions,{" "}
            <strong className="text-white">MSMED Act s.15–18</strong> (3x RBI interest), and{" "}
            <strong className="text-white">Section 6 Societies Act / Order XXXI CPC</strong> suits
            directly against the Registered Trust.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.16 compound interest from Day 46
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">12 Months</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Standing charges enforceable under yellow-bus permit lock-in
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">15 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Buyer objection limit under MSMED s.2(b) deemed acceptance
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">30 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Mandatory s.138 NI Act notice window on bounced Trust PDCs
              </p>
            </div>
          </div>

          <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
            Reviewed by <strong className="text-slate-200">{REVIEWER_NAME}</strong> ({REVIEWER_ROLE})
            &bull; Updated November 2026
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Schools & EdTech Recovery",
                href: "/industries/schools-universities-edtech-b2b-recovery",
              },
              {
                label: "School Bus Fleet Trust Recovery",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <BusFleetTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why Schools Withhold Bus Bills After Collecting Parent Fees
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s private K-12 schools, CBSE/ICSE chains, and residential
                  universities, a predictable cash-flow squeeze hits transport contractors every
                  academic cycle. In April and July, the school management collects quarterly or
                  annual transport fees upfront from 1,500+ parents—often ₹2,500 to ₹4,500 per
                  student per month—depositing crores into the Society or Trust bank account. Yet
                  when the fleet contractor submits monthly invoices for 10 to 40 buses, the Trust
                  routinely delays payouts by 90 to 150 days, slashes May–June summer vacation
                  bills, and freezes diesel escalation differentials.
                </p>
                <p>
                  Unlike general freight carriers, a school bus operator cannot simply pivot idle
                  vehicles to inter-city tourist or corporate shuttle work during summer breaks.
                  State Motor Vehicles Rules and CBSE/state school-safety mandates require
                  dedicated yellow-painted bodies, reflective school branding, speed governors,
                  CCTV/GPS telemetry, and restricted educational-institution permits. Meanwhile,
                  your commercial vehicle loan EMIs, annual third-party insurance, RTO fitness
                  fees, and driver retainers remain 100% fixed across all 12 months.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                  <strong className="block font-extrabold text-amber-800 mb-1">
                    The Fiduciary / Escrow Admission Advantage:
                  </strong>
                  Because the school billed parents specifically under a{" "}
                  <em>&ldquo;Transport Fee&rdquo;</em> head for the academic year, the Trust holds
                  those earmarked collections in a quasi-fiduciary capacity. Retaining parent
                  transport fees while starving the fleet operator violates Section 70 of the
                  Indian Contract Act, 1872 (obligation of person enjoying benefit of non-gratuitous
                  act) and collapses any &ldquo;financial hardship&rdquo; defense in court.
                </div>
              </div>
            </section>

            {/* Section 2: 5-Stage Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Fleet Contractor Escalation Decision Tree (5-Stage Workflow)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Never pull buses off school routes without a documented statutory paper trail—and
                never send a demand notice addressed only to the school&apos;s brand name. Follow
                this 5-stage escalation sequence to convert stalled transport bills into
                enforceable settlements.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block overflow-x-auto pb-2">
                <svg
                  width="860"
                  height="250"
                  viewBox="0 0 860 250"
                  className="w-full h-auto max-w-full"
                  role="img"
                  aria-label="5-stage school bus fleet contractor recovery escalation workflow"
                >
                  <rect width="860" height="250" rx="16" fill="#0F172A" />
                  {/* Stage 1 */}
                  <rect x="20" y="35" width="145" height="175" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="44" cy="59" r="12" fill="#DC2626" />
                  <text x="44" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                  <text x="64" y="63" fill="#F8FAFC" fontSize="11" fontWeight="bold">Entity Audit</text>
                  <text x="32" y="92" fill="#CBD5E1" fontSize="10">Map Registered</text>
                  <text x="32" y="107" fill="#CBD5E1" fontSize="10">Society / Trust /</text>
                  <text x="32" y="122" fill="#CBD5E1" fontSize="10">Sec. 8 Co. via</text>
                  <text x="32" y="137" fill="#CBD5E1" fontSize="10">GSTIN &amp; Form 26AS</text>
                  <text x="32" y="185" fill="#F87171" fontSize="10" fontWeight="bold">Day 1–3</text>

                  <path d="M165 122 L188 122" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="188,117 196,122 188,127" fill="#DC2626" />

                  {/* Stage 2 */}
                  <rect x="196" y="35" width="145" height="175" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="220" cy="59" r="12" fill="#DC2626" />
                  <text x="220" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                  <text x="240" y="63" fill="#F8FAFC" fontSize="11" fontWeight="bold">Evidence Lock</text>
                  <text x="208" y="92" fill="#CBD5E1" fontSize="10">Parent Fee Circular,</text>
                  <text x="208" y="107" fill="#CBD5E1" fontSize="10">Signed Logbooks,</text>
                  <text x="208" y="122" fill="#CBD5E1" fontSize="10">GPS + BSA s.63</text>
                  <text x="208" y="137" fill="#CBD5E1" fontSize="10">Diesel Rate Sheet</text>
                  <text x="208" y="185" fill="#F87171" fontSize="10" fontWeight="bold">Day 4–7</text>

                  <path d="M341 122 L364 122" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="364,117 372,122 364,127" fill="#DC2626" />

                  {/* Stage 3 */}
                  <rect x="372" y="35" width="145" height="175" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <circle cx="396" cy="59" r="12" fill="#DC2626" />
                  <text x="396" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                  <text x="416" y="63" fill="#F8FAFC" fontSize="11" fontWeight="bold">Advocate Notice</text>
                  <text x="384" y="92" fill="#CBD5E1" fontSize="10">Fiduciary Escrow +</text>
                  <text x="384" y="107" fill="#CBD5E1" fontSize="10">12-Mo Standing +</text>
                  <text x="384" y="122" fill="#CBD5E1" fontSize="10">MSMED s.15–18 via</text>
                  <text x="384" y="137" fill="#CBD5E1" fontSize="10">Email + WA + RPAD</text>
                  <text x="384" y="185" fill="#34D399" fontSize="10" fontWeight="bold">15-Day Cure</text>

                  <path d="M517 122 L540 122" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="540,117 548,122 540,127" fill="#DC2626" />

                  {/* Stage 4 */}
                  <rect x="548" y="35" width="145" height="175" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="572" cy="59" r="12" fill="#DC2626" />
                  <text x="572" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                  <text x="592" y="63" fill="#F8FAFC" fontSize="11" fontWeight="bold">PDC / NACH</text>
                  <text x="560" y="92" fill="#CBD5E1" fontSize="10">s.138 NI Act or</text>
                  <text x="560" y="107" fill="#CBD5E1" fontSize="10">s.25 PSS Act on</text>
                  <text x="560" y="122" fill="#CBD5E1" fontSize="10">Trust Signatories</text>
                  <text x="560" y="137" fill="#CBD5E1" fontSize="10">(Strict 30d Clock)</text>
                  <text x="560" y="185" fill="#FBBF24" fontSize="10" fontWeight="bold">Parallel Track</text>

                  <path d="M693 122 L716 122" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="716,117 724,122 716,127" fill="#DC2626" />

                  {/* Stage 5 */}
                  <rect x="724" y="35" width="116" height="175" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <circle cx="746" cy="59" r="12" fill="#10B981" />
                  <text x="746" y="63" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">5</text>
                  <text x="764" y="63" fill="#F8FAFC" fontSize="11" fontWeight="bold">Forum Filing</text>
                  <text x="734" y="92" fill="#CBD5E1" fontSize="10">MSEFC Samadhaan</text>
                  <text x="734" y="107" fill="#CBD5E1" fontSize="10">or Order XXXVII</text>
                  <text x="734" y="122" fill="#CBD5E1" fontSize="10">CPC / Sec. 9</text>
                  <text x="734" y="137" fill="#CBD5E1" fontSize="10">Arbitration</text>
                  <text x="734" y="185" fill="#34D399" fontSize="10" fontWeight="bold">Decree / Award</text>
                </svg>
              </div>

              {/* Mobile Stacked Workflow Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "1. Entity Audit (Day 1–3)",
                    desc: "Map the Registered Society, Public Trust, or Section 8 Company from CBSE disclosure, GSTIN, and Form 26AS.",
                  },
                  {
                    step: "2. Evidence Lock (Day 4–7)",
                    desc: "Compile parent transport fee circulars, signed route logbooks, diesel escalation sheets, and BSA s.63 GPS logs.",
                  },
                  {
                    step: "3. Advocate Notice (15-Day Cure)",
                    desc: "Serve Email + WhatsApp + Speed Post RPAD notice citing Fiduciary Admission, 12-month standing charges, and MSMED s.15–18.",
                  },
                  {
                    step: "4. Parallel PDC / NACH Action",
                    desc: "Trigger s.138 NI Act or s.25 PSS Act within 30 days of any cheque/mandate dishonour against Trust signatories.",
                  },
                  {
                    step: "5. Forum Escalation",
                    desc: "File MSEFC Samadhaan (3x RBI interest) or Order XXXVII CPC / Section 9 Arbitration against Trustees.",
                  },
                ].map((card) => (
                  <div
                    key={card.step}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-xs font-extrabold text-red-400 uppercase tracking-wider">
                      {card.step}
                    </p>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">{card.desc}</p>
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Matrix: Fiduciary Admission, MSMED &amp; Trust Suits
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Every school transport dispute requires matching the defaulting institution&apos;s
                legal structure and payment instrument to the fastest statutory forum. Use this
                creditor matrix before drafting your demand notice:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold">Default Trigger</th>
                      <th className="py-3.5 px-4 font-bold">Governing Statute</th>
                      <th className="py-3.5 px-4 font-bold">Limitation / Cure Window</th>
                      <th className="py-3.5 px-4 font-bold">Creditor Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        School collected parent fees; withheld bus bills
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Indian Contract Act s.70, s.73 &amp; s.74
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">3 years from invoice due date</td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        Fiduciary/Escrow admission + Order XXXVII summary suit
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Delayed monthly bills beyond 45 days (Udyam fleet)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        MSMED Act, 2006 s.2(b), s.15–18
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        15-day buyer objection bar; 45-day max credit
                      </td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        MSEFC Samadhaan + 3x RBI compound interest
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Notice/suit against &ldquo;XYZ Public School&rdquo; rejected
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Societies Act s.6 / Order XXXI CPC / Trusts Act
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Array Society Secretary or all Trustees upfront
                      </td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        Prevents Order VII Rule 11 plaint rejection
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Bounced Trust PDC or NACH/ECS mandate
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        NI Act s.138 &amp; s.141 / PSS Act s.25
                      </td>
                      <td className="py-3.5 px-4 text-red-700 font-semibold">
                        30 days from bank memo to serve notice
                      </td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        Criminal summons to Trustee/Secretary signatories
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Government / Sainik / Aided School contract dues
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Section 80 CPC / Commercial Courts Act s.12A
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Mandatory 2-month statutory notice
                      </td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        Pre-suit{" "}
                        <Link
                          href="/law/section-80-cpc-notice-to-government"
                          className="text-[#DC2626] underline"
                        >
                          Section 80 CPC Notice
                        </Link>{" "}
                        before civil filing
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Yellow-Bus Fleet Default Scenarios &amp; Recovery Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select the exact commercial bottleneck your transport company is facing to view the
                statutory basis and 3-step recovery protocol:
              </p>

              <BusFleetScenarioTabs />
            </section>

            {/* Section 5: Worked Financial Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked ₹28.8 Lakh Fleet Arrears &amp; 3x RBI Interest Ledger
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a typical 12-bus fleet contractor operating 42-seater yellow buses for a
                CBSE school trust at ₹55,000/bus/month (₹6.60 Lakh/month base billing), where the
                school collected annual transport fees from 1,500 parents in April yet withheld 4
                months of bills (including May–June summer standing charges) and ₹2.40 Lakh in
                diesel escalation:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-700/80 mb-4">
                  <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-red-400">
                    Illustrative 12-Bus Fleet Claim Schedule (4 Months Unpaid)
                  </p>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-950/70 text-emerald-400 border border-emerald-800/60">
                    MSMED s.16 Compounding Applicable
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      2 Active Academic Months (12 buses &times; ₹55,000 &times; 2)
                    </span>
                    <span className="font-bold text-white">₹13,20,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      May–June Summer Vacation 100% Standing Charges (12 buses &times; ₹55,000 &times; 2)
                    </span>
                    <span className="font-bold text-white">₹13,20,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      Contractual Diesel Escalation &amp; Extra Exam Shuttles
                    </span>
                    <span className="font-bold text-white">₹2,40,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="font-bold text-slate-100">Total Unpaid Principal Arrears</span>
                    <span className="font-black text-amber-400 text-base">₹28,80,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      MSMED s.16 Interest (3x RBI Bank Rate @ ~19.5% p.a. compounded monthly, ~6 mo avg delay)
                    </span>
                    <span className="font-bold text-emerald-400">+ ₹2,91,800</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-extrabold text-white text-sm sm:text-base">
                      Total Recoverable Demand Claim
                    </span>
                    <span className="font-black text-emerald-400 text-lg sm:text-xl">
                      ₹31,71,800
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs text-slate-400">
                    Calculate exact day-by-day monthly compounding on your unpaid transport bills:
                  </p>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-colors"
                  >
                    Open MSME Interest Calculator &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Standing Charges & Diesel Escalation */}
            <section
              id="heading-standing-charges"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Enforcing 12-Month Standing Charges &amp; Diesel Escalation
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  The single biggest battleground in school transport litigation is the
                  &ldquo;May–June Vacation Deduction&rdquo;. School trustees frequently argue that
                  because buses did not run daily routes during summer holidays or unscheduled
                  weather/pollution closures, zero monthly hire is payable. To defeat this defense
                  in your legal notice and pleadings, anchor your claim on three legal pillars:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                      1. Yellow-Bus Permit Lock-In
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under state Motor Vehicles Rules, school buses carry exclusive yellow livery,
                      school-name painting, and educational permits—legally barring alternative
                      commercial passenger hire during May–June.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                      2. Parent Fee Parity Proof
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Where the school&apos;s own fee schedule bills parents for 11 or 12 months
                      (including summer months), withholding contractor standing charges constitutes
                      unjust enrichment under Section 70 of the Contract Act.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                      3. Liquidated Diesel Formula
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      When contracts link monthly rates to a base diesel benchmark (e.g., ₹88/litre),
                      every ₹2/litre hike triggers an automatic percentage adjustment enforceable
                      under Order XXXVII CPC.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900">
                  Need a formal notice template to assert carrier/fleet arrears and prevent
                  unlawful set-offs? Review our{" "}
                  <Link
                    href="/templates/transporter-freight-detention-carrier-lien-legal-notice"
                    className="font-bold text-emerald-800 underline hover:text-slate-900"
                  >
                    Transporter &amp; Fleet Legal Notice Template
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/templates/security-cheque-presentation-intimation-cum-ledger-notice"
                    className="font-bold text-emerald-800 underline hover:text-slate-900"
                  >
                    Security Cheque &amp; Ledger Intimation Notice
                  </Link>
                  .
                </div>
              </div>
            </section>

            {/* Section 7: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  GPS, Route Logbook &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (replacing Section 65B of
                the Indian Evidence Act), digital fleet telemetry, WhatsApp route approvals, and
                email invoices require a signed electronic-record certificate to be admissible in
                Commercial Courts or Arbitrations. Assemble these 6 records before serving notice:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "Registered Trust / Society Verification",
                    detail:
                      "CBSE/ICSE Mandatory Public Disclosure, Trust Deed/Society Registration No., GSTIN, and Form 26AS TDS entries.",
                  },
                  {
                    title: "Transport Agreement & Standing-Charge Clause",
                    detail:
                      "Executed contract specifying per-bus monthly hire, 12-month billing or summer retainer, and diesel escalation formula.",
                  },
                  {
                    title: "School Parent Transport Fee Circular",
                    detail:
                      "Fee booklet or ERP screenshot proving parents were billed quarterly/annually for transport during the disputed period.",
                  },
                  {
                    title: "Signed Monthly Route Logbooks",
                    detail:
                      "Trip sheets countersigned by the School Transport In-Charge or Principal, plus extra-shuttle requisition slips.",
                  },
                  {
                    title: "GPS Telemetry & RFID Boarding Logs (BSA s.63)",
                    detail:
                      "Monthly vehicle tracking exports, odometer logs, and student RFID tap reports certified under Section 63 BSA, 2023.",
                  },
                  {
                    title: "Bounced Cheque Memos & Ledger Reconciliation",
                    detail:
                      "Original dishonoured PDCs, bank return memos, and WhatsApp/email payment assurances from the Trust Secretary.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      &#10003;
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</p>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Multi-Campus Batch Recovery & Dual CTAs */}
            <section
              id="heading-batch-workflow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Multi-Campus University &amp; Fleet Batch Recovery Workflow
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                If your transport fleet serves multiple partner schools, coaching campuses, or
                university trusts—or if a single education group owes arrears across 10+ route
                contracts—fragmented follow-ups drain working capital. Launch either a single-trust
                advocate notice test or upload a consolidated CSV batch for simultaneous dispatch.
              </p>

              <BusFleetNoticeCTA className="mb-8" />

              {/* Cross-Links inside IND-17 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Related Education, Transport &amp; Cheque-Bounce Resources
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  <Link
                    href="/industries/schools-universities-edtech-b2b-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    &rarr; Schools, Universities &amp; EdTech B2B Recovery Hub
                  </Link>
                  <Link
                    href="/edtech-b2b-smart-class-school-erp-robotics-lab-unpaid-dues-from-schools"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    &rarr; EdTech Smart-Class &amp; School ERP Trust Recovery
                  </Link>
                  <Link
                    href="/how-private-schools-recover-unpaid-fees-without-withholding-tc"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    &rarr; How Schools Recover Unpaid Fees Without Holding TC
                  </Link>
                  <Link
                    href="/school-textbook-publisher-uniform-stationery-distributor-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    &rarr; School Textbook &amp; Uniform Distributor Recovery
                  </Link>
                  <Link
                    href="/cheque-bounce-account-closed-signature-mismatch"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    &rarr; Cheque Bounce: Account Closed &amp; Signature Mismatch
                  </Link>
                  <Link
                    href="/tools/cheque-bounce-deadline-calculator"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    &rarr; Section 138 Cheque Bounce Deadline Calculator
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: School Bus Fleet Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((item) => (
                  <details
                    key={item.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{item.q}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Statutory Authorities &amp; Transport Portals
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
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
