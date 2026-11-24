import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import AgriMachineryTableOfContents from "./AgriMachineryTableOfContents";
import AgriMachineryScenarioTabs from "./AgriMachineryScenarioTabs";
import AgriMachineryCTA from "./AgriMachineryCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/drip-irrigation-tractor-implement-greenhouse-dealer-subsidy-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Recovering Agri-Machinery Dealer Credit Ledgers & Stuck PMKSY / State Horticulture Micro-Irrigation Subsidies";

// 52 chars — tightened from 67ch PDF draft for Screaming Frog 30-60ch compliance
const META_TITLE = "Drip Irrigation, Polyhouse Dealer & Subsidy Recovery";

// 155 chars — exact PDF/JSON meta description within 120-155ch
const META_DESCRIPTION =
  "Farm-implement, rotavator, polyhouse & drip-irrigation manufacturers battle both rural dealer credit defaults and 18-month State Horticulture subsidy lags.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "drip irrigation polyhouse farm machinery dealer and subsidy recovery",
    "pmksy micro irrigation state horticulture subsidy delayed manufacturer",
    "farm machinery implement dealer channel credit default",
    "polyhouse turnkey farmer beneficiary share unpaid",
    "combine harvester rotavator dealer cheque bounce",
    "section 80 cpc horticulture department subsidy release",
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
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 & 24 — 3x RBI Compound Interest & MSEFC Recovery)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 139 & 143A — Dealer Security PDC Prosecution & 20% Interim Deposit)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Section 80 Statutory Notice to State Governments & Order XXXVII Summary Suits)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY — Per Drop More Crop Operational Guidelines & DBT/Nodal Release Norms)",
    url: "https://pmksy.gov.in/",
  },
  {
    title:
      "Mission for Integrated Development of Horticulture (MIDH — Protected Cultivation / Polyhouse Subsidy Guidelines)",
    url: "https://midh.gov.in/",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of GPS Geo-Tagged JIR Photos, Portal Logs & WhatsApp Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    q: "Can a micro-irrigation or polyhouse manufacturer sue the State Horticulture Department for 18-month delayed PMKSY subsidies?",
    a: "Yes. Once your field team and the District Horticulture Officer (DHO) complete physical verification and sign the Joint Inspection Report (JIR) with geo-tagged GPS photographs, the subsidy amount becomes an admitted public liability. Serve a mandatory 60-day statutory notice under Section 80 of the Code of Civil Procedure, 1908 on the Commissioner of Horticulture and District Collector. If funds remain withheld without a recorded defect, you can file a Writ Petition under Article 226 of the Constitution before the jurisdictional High Court seeking a Writ of Mandamus for time-bound release with interest.",
  },
  {
    q: "Can we invoke the MSMED Act (3x RBI compound interest) against State Agro-Industries Corporations or Nodal Agencies?",
    a: "Yes. Whenever micro-irrigation, solar water pump, or farm-implement supplies are billed through a State Agro-Industries Development Corporation, State Seed/Horticulture Nodal PSU, or cooperative federation, that entity qualifies as a 'buyer' under Section 2(d) of the MSMED Act, 2006. If your manufacturing unit holds Udyam Registration as a Micro or Small Enterprise, any payment delay beyond 45 days attracts mandatory monthly-compounded interest at three times the RBI bank rate through the MSEFC Samadhaan portal.",
  },
  {
    q: "How do we recover the unpaid 25%–50% farmer beneficiary margin share on a turnkey polyhouse or greenhouse?",
    a: "Under MIDH protected cultivation guidelines, the farmer's non-subsidy share is a private contractual obligation independent of government subsidy release. Confront the beneficiary with their own signed Joint Inspection / Commissioning Certificate submitted for subsidy approval—which operates as written acceptance under Section 42 of the Sale of Goods Act, 1930—present any margin PDCs under Section 138 NI Act, and file an Order XXXVII Summary Suit for the balance BoQ amount.",
  },
  {
    q: "A rotavator and combine harvester dealer claims our security cheque cannot be prosecuted under Section 138—is that valid?",
    a: "No. In Sripati Singh v. State of Jharkhand (2021), the Supreme Court held that a post-dated or undated security cheque presented after credit maturity for an ascertained ledger balance attracts full criminal prosecution under Section 138 of the NI Act, 1881. Ensure you serve the statutory 15-day demand notice within 30 days of receiving the Bank Return Memo and reconcile all credit notes beforehand.",
  },
  {
    q: "What if a tractor-implement dealer raises false 'gearbox vibration' or 'blade breakage' excuses 6 months after delivery?",
    a: "Post-sale mechanical complaints raised months after resale to end-farmers—without contemporaneous warranty job cards, factory PDI rejection memos, or written notice under Section 42 of the Sale of Goods Act, 1930—are legally barred as afterthoughts. An Advocate Demand Notice enforcing deemed acceptance and demanding immediate ledger clearance neutralizes such fabricated defenses before MSEFC or Commercial Court.",
  },
  {
    q: "How can Rajkot, Jalgaon, Ludhiana, or Coimbatore manufacturers recover from 100+ rural dealers at once?",
    a: "Instead of litigating 100 separate taluka claims ad hoc, export your overdue dealer ledger into a structured CSV segmented by aging bucket, PDC status, and Udyam eligibility. Running a synchronized bilingual (English + Hindi/regional) Batch Legal Notice Drive via Email, WhatsApp, and Speed Post RPAD prior to Kharif or Rabi booking cycles routinely triggers 40%–65% voluntary settlements within 15–21 days.",
  },
  {
    q: "What electronic records must we preserve under BSA 2023 Section 63 for subsidy writs and dealer suits?",
    a: "Maintain a hash-certified Section 63 BSA dossier containing: (1) GST Tax Invoices with implement chassis/serial numbers and E-Way Bills, (2) Signed Lorry Receipts (Bilty), (3) PMKSY / State Horticulture portal upload receipts, geo-tagged GPS field photos, and signed JIR PDFs, and (4) Dealer WhatsApp ledger confirmations and Bank Cheque Return Memos.",
  },
];

export default function DripIrrigationAgriMachineryRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${CANONICAL_URL}#article`,
        headline: EXACT_H1,
        description: META_DESCRIPTION,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": CANONICAL_URL,
        },
        datePublished: "2026-11-19T09:00:00+05:30",
        dateModified: "2026-11-19T09:45:00+05:30",
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
        image: `${SITE_URL}/blog_money_recovery.png`,
        inLanguage: "en-IN",
      },
      {
        "@type": "HowTo",
        name: "How to Recover Agri-Machinery Dealer Dues and Stuck PMKSY Horticulture Subsidies",
        description:
          "Step-by-step statutory recovery playbook combining MSMED s.15-18, NI Act s.138, Section 80 CPC notices, and Article 226 High Court Writs.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Segregate Private Dealer Arrears vs Verified Government Subsidy Files",
            text: "Split your receivables CSV into (a) rural implement/drip dealer credit ledgers, (b) unpaid polyhouse farmer margin shares, and (c) State Horticulture / PMKSY invoices with signed Joint Inspection Reports (JIR).",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Assemble BSA 2023 Section 63 Dispatch & Geo-Tagged JIR Dossier",
            text: "Compile GST Tax Invoices, E-Way Bills, signed Bilty/LRs, chassis/serial logs, geo-tagged GPS installation photos, signed JIRs, and bounced PDC Bank Return Memos.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Dispatch Track-Specific Statutory Notices (NI s.138 / MSMED / CPC s.80)",
            text: "Serve 15-day Section 138 notices within 30 days of PDC bounce, 15-day MSMED demand notices for private/PSU buyers, and 60-day Section 80 CPC notices on Horticulture Commissioners for verified subsidy arrears.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Escalate to MSEFC Samadhaan, Order XXXVII Suits, or Article 226 Writ",
            text: "File MSEFC claims for 3x RBI compound interest, Order XXXVII Summary Suits against defaulting dealers/farmers, and High Court Writs of Mandamus for undisputed JIR-verified subsidy bills.",
          },
        ],
      },
      {
        "@type": "FAQPage",
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
            name: "Agri-Inputs, Cold Storage & Food Processing Hub",
            item: `${SITE_URL}/industries/agri-inputs-cold-storage-food-processing-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Drip Irrigation, Polyhouse & Agri-Machinery Recovery",
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
            <span>IND-21 · Agri-Machinery &amp; Micro-Irrigation</span>
            <span aria-hidden="true">&bull;</span>
            <span>Creditor Recovery Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + inline Parent Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Part of our{" "}
            <Link
              href="/industries/agri-inputs-cold-storage-food-processing-recovery"
              className="text-red-400 underline hover:text-red-300 font-semibold"
            >
              Agri-Inputs &amp; Food Processing Recovery Hub
            </Link>
            : Drip-irrigation, polyhouse, solar pump, and farm-implement OEMs can recover
            unpaid dealer ledgers via <strong>NI Act s.138</strong> &amp;{" "}
            <strong>MSMED ss.15–18</strong> (3x RBI interest), while compelling 18-month
            delayed <strong>PMKSY / State Horticulture</strong> subsidies through{" "}
            <strong>Section 80 CPC</strong> notices and <strong>Article 226</strong>{" "}
            High Court Writs once Joint Inspection Reports are signed.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED ss.15–18 Monthly Compound Interest (Day 46+)
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-red-400">15-Day / 30-Day</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                NI Act s.138 PDC Notice &amp; 20% Interim Deposit (s.143A)
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-amber-400">CPC s.80 + Writ</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                60-Day Notice &amp; Art. 226 Mandamus for Signed JIR Bills
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-slate-100">&#8377;40,000 Cr</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Rajkot, Pune, Jalgaon, Ludhiana, Karnal &amp; Coimbatore Belt
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
                label: "Agri-Inputs & Food Processing Hub",
                href: "/industries/agri-inputs-cold-storage-food-processing-recovery",
              },
              {
                label: "Drip Irrigation, Polyhouse & Agri-Machinery Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <AgriMachineryTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  The Dual Squeeze: Rural Dealer Defaults &amp; Stuck PMKSY Subsidies
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  India&apos;s &#8377;40,000 crore farm mechanization, solar water pump,
                  polyhouse, and micro-irrigation manufacturing ecosystem—anchored in{" "}
                  <strong>Rajkot, Pune, Jalgaon, Ludhiana, Karnal, and Coimbatore</strong>
                  —operates under a unique two-front working-capital squeeze that generic
                  B2B debt collectors fail to understand.
                </p>
                <p>
                  On the <strong>private channel front</strong>, tractor-implement OEMs
                  (rotavators, laser land levellers, combine harvesters, threshers,
                  power tillers) extend 45-to-90-day seasonal credit to taluka dealers.
                  Once farmers pay cash or draw Kisan Credit Card (KCC) funds, defaulting
                  dealers divert collections and bounce security PDCs citing fabricated
                  &ldquo;implement vibration&rdquo; or &ldquo;warranty delay&rdquo;
                  excuses. On the <strong>institutional subsidy front</strong>, empanelled
                  drip-irrigation and greenhouse turnkey contractors complete installation,
                  upload geo-tagged GPS proof, and secure signed Joint Inspection Reports
                  (JIR)—only to wait 12 to 18 months for{" "}
                  <strong>PMKSY (Per Drop More Crop)</strong> or{" "}
                  <strong>MIDH State Horticulture</strong> disbursements.
                </p>
                <p>
                  Treating both bottlenecks with a single generic reminder wastes months
                  and risks statutory limitation expiry. Manufacturers must split their
                  receivables into parallel legal tracks: criminal-civil pressure (
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    NI Act Section 138
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Dealer Channel Recovery
                  </Link>
                  ) for private dealers and farmer margin shares, alongside{" "}
                  <strong>Section 80 CPC / Article 226 Writ</strong> escalation for
                  verified government subsidy arrears.
                </p>
              </div>
            </section>

            {/* Section 2: CPC 80 & Writ Remedies */}
            <section
              id="heading-cpc80-writ"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Section 80 CPC &amp; Writ Remedies for State Horticulture Arrears
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Many micro-irrigation and solar pump manufacturers hesitate to serve
                  statutory notices on State Horticulture Directorates or State
                  Agro-Industries Corporations fearing blacklisting from future tenders.
                  However, Indian constitutional law draws a sharp distinction between{" "}
                  <em>disputed contract claims</em> and{" "}
                  <em>admitted, verified public dues</em>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                    <p className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1">
                      Supreme Court Precedent · Undisputed Public Bills
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 font-semibold mb-1">
                      Surya Constructions v. State of Uttar Pradesh (2019) &amp; ABL
                      International (2004)
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Where a State agency or department does not dispute satisfactory
                      work completion—evidenced by a signed Joint Inspection Report
                      (JIR)—arbitrary non-payment violates Article 14, empowering High
                      Courts to direct immediate release under Article 226.
                    </p>
                  </div>
                  <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl">
                    <p className="text-xs font-black uppercase tracking-wider text-amber-800 mb-1">
                      Mandatory Pre-Suit Step · Section 80 CPC
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 font-semibold mb-1">
                      60-Day Statutory Notice to State / Public Officers
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Before filing a civil recovery suit against a State Government or
                      District Horticulture Officer, Section 80 CPC mandates a 60-day
                      written notice detailing the cause of action, JIR dates, and
                      principal claim—often triggering administrative file clearance
                      without court filing.
                    </p>
                  </div>
                </div>

                <p>
                  Furthermore, when billing is routed through a State Nodal PSU (such as
                  Gujarat Green Revolution Company, MahaDBT Nodal Agencies, or State Agro
                  Corporations), Udyam-registered manufacturers can invoke{" "}
                  <strong>MSEFC Samadhaan</strong> under{" "}
                  <strong>Sections 15–18 of the MSMED Act, 2006</strong>, forcing the
                  nodal buyer to either settle or face 3x RBI monthly compound interest
                  and a mandatory 75% pre-deposit under Section 19 before challenging any
                  award.
                </p>
              </div>
            </section>

            {/* Section 3: 5-Stage Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  5-Stage Recovery Flowchart: Dealer Credit vs Subsidy Claims
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Follow this bifurcated operational decision tree to route private dealer
                defaults, polyhouse farmer margin balances, and verified PMKSY subsidy
                arrears into their fastest statutory enforcement track.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-4 border border-slate-800">
                <svg
                  viewBox="0 0 960 440"
                  width={960}
                  height={440}
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Stage Agri-Machinery Dealer Credit and PMKSY Subsidy Recovery Decision Flowchart"
                >
                  <defs>
                    <marker
                      id="arrowRed"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
                    </marker>
                    <marker
                      id="arrowEmerald"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
                    </marker>
                  </defs>

                  {/* Stage 1 */}
                  <rect x="20" y="165" width="160" height="110" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="100" y="192" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 · AUDIT</text>
                  <text x="100" y="215" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Segregate Ledger</text>
                  <text x="100" y="235" textAnchor="middle" fill="#CBD5E1" fontSize="11">Dealer Credit vs</text>
                  <text x="100" y="252" textAnchor="middle" fill="#CBD5E1" fontSize="11">Signed JIR Subsidy</text>

                  {/* Arrows to Stage 2A & 2B */}
                  <line x1="180" y1="200" x2="235" y2="115" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
                  <line x1="180" y1="240" x2="235" y2="325" stroke="#10B981" strokeWidth="2.5" markerEnd="url(#arrowEmerald)" />

                  {/* Stage 2A: Private Dealer / Farmer Share */}
                  <rect x="240" y="45" width="195" height="130" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="337" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 2A · PRIVATE DEBT</text>
                  <text x="337" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Dealer &amp; Margin Share</text>
                  <text x="337" y="114" textAnchor="middle" fill="#CBD5E1" fontSize="11">1. Reconcile E-Way + Serials</text>
                  <text x="337" y="132" textAnchor="middle" fill="#CBD5E1" fontSize="11">2. Present Security PDCs</text>
                  <text x="337" y="150" textAnchor="middle" fill="#CBD5E1" fontSize="11">3. Lock Sale of Goods s.42</text>

                  {/* Stage 2B: State Subsidy */}
                  <rect x="240" y="265" width="195" height="130" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="337" y="290" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 2B · SUBSIDY ARREAR</text>
                  <text x="337" y="312" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">PMKSY / MIDH Verified</text>
                  <text x="337" y="334" textAnchor="middle" fill="#CBD5E1" fontSize="11">1. Signed JIR + GPS Photos</text>
                  <text x="337" y="352" textAnchor="middle" fill="#CBD5E1" fontSize="11">2. Portal Sanction Printout</text>
                  <text x="337" y="370" textAnchor="middle" fill="#CBD5E1" fontSize="11">3. RTI File Movement Check</text>

                  {/* Arrows to Stage 3 */}
                  <line x1="435" y1="110" x2="495" y2="110" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
                  <line x1="435" y1="330" x2="495" y2="330" stroke="#10B981" strokeWidth="2.5" markerEnd="url(#arrowEmerald)" />

                  {/* Stage 3A */}
                  <rect x="500" y="45" width="200" height="130" rx="12" fill="#7F1D1D" stroke="#F87171" strokeWidth="2" />
                  <text x="600" y="70" textAnchor="middle" fill="#FECACA" fontSize="11" fontWeight="bold">STAGE 3A · STATUTORY NOTICE</text>
                  <text x="600" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">15-Day Demand Drive</text>
                  <text x="600" y="114" textAnchor="middle" fill="#FEE2E2" fontSize="11">NI s.138 (within 30d bounce)</text>
                  <text x="600" y="132" textAnchor="middle" fill="#FEE2E2" fontSize="11">+ MSMED 3x RBI Interest</text>
                  <text x="600" y="150" textAnchor="middle" fill="#FEE2E2" fontSize="11">+ RPAD / Email / WhatsApp</text>

                  {/* Stage 3B */}
                  <rect x="500" y="265" width="200" height="130" rx="12" fill="#064E3B" stroke="#34D399" strokeWidth="2" />
                  <text x="600" y="290" textAnchor="middle" fill="#A7F3D0" fontSize="11" fontWeight="bold">STAGE 3B · GOVT NOTICE</text>
                  <text x="600" y="312" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">CPC s.80 / Nodal Notice</text>
                  <text x="600" y="334" textAnchor="middle" fill="#D1FAE5" fontSize="11">60-Day Notice to DHO &amp; Secy</text>
                  <text x="600" y="352" textAnchor="middle" fill="#D1FAE5" fontSize="11">Or MSEFC Notice to Nodal PSU</text>
                  <text x="600" y="370" textAnchor="middle" fill="#D1FAE5" fontSize="11">Annex Signed JIR &amp; Bills</text>

                  {/* Arrows to Stage 4 */}
                  <line x1="700" y1="110" x2="755" y2="110" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
                  <line x1="700" y1="330" x2="755" y2="330" stroke="#10B981" strokeWidth="2.5" markerEnd="url(#arrowEmerald)" />

                  {/* Stage 4A */}
                  <rect x="760" y="45" width="180" height="130" rx="12" fill="#1E293B" stroke="#94A3B8" strokeWidth="2" />
                  <text x="850" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 4A · ENFORCE</text>
                  <text x="850" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Magistrate / MSEFC</text>
                  <text x="850" y="114" textAnchor="middle" fill="#CBD5E1" fontSize="11">s.143A 20% Interim Deposit</text>
                  <text x="850" y="132" textAnchor="middle" fill="#CBD5E1" fontSize="11">Order XXXVII Summary Suit</text>
                  <text x="850" y="150" textAnchor="middle" fill="#CBD5E1" fontSize="11">MSEFC Award (75% Pre-Dep)</text>

                  {/* Stage 4B */}
                  <rect x="760" y="265" width="180" height="130" rx="12" fill="#1E293B" stroke="#94A3B8" strokeWidth="2" />
                  <text x="850" y="290" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 4B · HIGH COURT</text>
                  <text x="850" y="312" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Art. 226 Writ Release</text>
                  <text x="850" y="334" textAnchor="middle" fill="#CBD5E1" fontSize="11">Writ of Mandamus on</text>
                  <text x="850" y="352" textAnchor="middle" fill="#CBD5E1" fontSize="11">Admitted JIR Subsidy Bills</text>
                  <text x="850" y="370" textAnchor="middle" fill="#CBD5E1" fontSize="11">+ Interest for Delay</text>
                </svg>
              </div>

              {/* Mobile Stacked Flowchart Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    stage: "STAGE 1 · AUDIT",
                    title: "Segregate Dealer Credit vs Signed JIR Subsidy Files",
                    detail:
                      "Split receivables into private implement/drip dealer ledgers, polyhouse farmer shares, and verified PMKSY/MIDH subsidy invoices.",
                  },
                  {
                    stage: "STAGE 2 · EVIDENCE",
                    title: "Lock BSA 2023 s.63 Dispatch & Geo-Tagged JIR Proof",
                    detail:
                      "Compile E-Way bills, chassis/serial invoices, signed JIRs, GPS installation photos, and Bank Return Memos.",
                  },
                  {
                    stage: "STAGE 3 · STATUTORY NOTICE",
                    title: "15-Day NI s.138 / MSMED Notice or 60-Day CPC s.80 Notice",
                    detail:
                      "Serve synchronized Fact-verified notices via Email, WhatsApp, and Speed Post RPAD—triggering 40%–65% pre-litigation settlements.",
                  },
                  {
                    stage: "STAGE 4 · ESCALATION",
                    title: "MSEFC Samadhaan, Order XXXVII Suit, or Art. 226 Writ",
                    detail:
                      "Enforce 3x RBI interest, s.143A 20% interim deposits, or High Court Mandamus for undisputed government subsidy releases.",
                  },
                ].map((card) => (
                  <div
                    key={card.stage}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-[10px] font-black uppercase tracking-wider text-red-400 mb-1">
                      {card.stage}
                    </p>
                    <p className="text-sm font-bold mb-1">{card.title}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{card.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Dark-Header Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Statutory Matrix: MSMED Act, NI s.138, CPC s.80 &amp; MIDH Rules
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Select the sharpest statutory weapon based on whether your debtor is a
                private taluka dealer, a polyhouse beneficiary, a State Nodal PSU, or a
                Horticulture Department.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Default Track</th>
                      <th className="p-3.5 font-bold">Primary Statute</th>
                      <th className="p-3.5 font-bold">Statutory Timeline</th>
                      <th className="p-3.5 font-bold">Creditor Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Rotavator / Harvester Dealer PDC Bounce
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NI Act 1881 ss.138, 139 &amp; 143A
                      </td>
                      <td className="p-3.5 text-slate-700">
                        30d Notice from Return Memo + 15d Pay Window
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Criminal summons + 20% interim deposit (s.143A)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Udyam OEM vs Dealer / Nodal PSU
                      </td>
                      <td className="p-3.5 text-slate-700">
                        MSMED Act 2006 ss.15–18 &amp; 19
                      </td>
                      <td className="p-3.5 text-slate-700">
                        45-Day Cap; 90-Day MSEFC Disposal Mandate
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        3x RBI compound interest + 75% appeal pre-deposit
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Verified PMKSY / State Subsidy Lag
                      </td>
                      <td className="p-3.5 text-slate-700">
                        CPC s.80 + Constitution Art. 226
                      </td>
                      <td className="p-3.5 text-slate-700">
                        60-Day Statutory Notice &rarr; High Court Writ
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Mandamus for undisputed JIR bills without civil trial
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Polyhouse Farmer Margin Share Unpaid
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Sale of Goods Act s.42 + CPC Order XXXVII
                      </td>
                      <td className="p-3.5 text-slate-700">
                        10-Day Leave-to-Defend Window Post-Summons
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Signed JIR bars post-hoc quality excuses
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Dealer Stock Diversion / Shop Closure
                      </td>
                      <td className="p-3.5 text-slate-700">
                        BNS 2023 ss.316, 318 &amp; CPC O.38 R.5
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Immediate Attachment / Criminal Complaint
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Freezes proprietor bank accounts &amp; assets
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  4 Agri-Machinery &amp; Polyhouse Failure Modes (Interactive Playbook)
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Select a failure mode below to inspect the exact debtor tactic, statutory
                counter-argument, and 3-step recovery sequence.
              </p>

              <AgriMachineryScenarioTabs />
            </section>

            {/* Section 6: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Worked Ledger: &#8377;32 Lakh Drip &amp; Rotavator Recovery Breakdown
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Illustrative statutory recovery computation for a Rajkot/Jalgaon Udyam
                manufacturer holding both an overdue dealer ledger (12 months) and a
                verified PMKSY subsidy tranche (15 months post-JIR):
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
                      Track A · Private Dealer Arrears (12 Months Overdue)
                    </p>
                    <p className="text-xl font-black text-white">&#8377;18,00,000 Principal</p>
                    <ul className="text-xs text-slate-300 space-y-1.5 mt-3">
                      <li>
                        &bull; <strong>MSMED 3x RBI Interest</strong> (illustrative 19.5%
                        p.a. compounded monthly beyond Day 45):{" "}
                        <span className="text-emerald-400 font-bold">+&#8377;3,52,800</span>
                      </li>
                      <li>
                        &bull; <strong>NI s.143A Interim Relief</strong> (20% of bounced
                        PDC):{" "}
                        <span className="text-amber-400 font-bold">&#8377;3,60,000</span>{" "}
                        upfront deposit
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                      Track B · Verified PMKSY Subsidy (15 Months Post-JIR)
                    </p>
                    <p className="text-xl font-black text-white">&#8377;14,00,000 Principal</p>
                    <ul className="text-xs text-slate-300 space-y-1.5 mt-3">
                      <li>
                        &bull; <strong>Section 80 CPC + Art. 226 Writ Claim</strong> (or
                        MSEFC vs Nodal PSU):{" "}
                        <span className="text-emerald-400 font-bold">+&#8377;1,75,000</span>{" "}
                        to{" "}
                        <span className="text-emerald-400 font-bold">+&#8377;3,78,000</span>{" "}
                        statutory/court interest
                      </li>
                      <li>
                        &bull; <strong>Supporting Proof</strong>: Signed DHO Joint
                        Inspection Report + Geo-Tagged GPS PDF
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-emerald-950/60 border border-emerald-700/50 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold text-emerald-300">
                      Total Statutory Recovery Exposure (Principal + Interest)
                    </p>
                    <p className="text-lg sm:text-2xl font-black text-white">
                      &#8377;37,27,800 – &#8377;39,30,800
                    </p>
                  </div>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shrink-0"
                  >
                    Compute Exact MSMED Interest &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 7: BSA 2023 s.63 & Joint-Inspection Evidence Dossier */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Joint-Inspection &amp; BSA 2023 s.63 Evidence Dossier
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Both Magistrate Courts and High Courts reject uncertified screenshots.
                Before issuing your legal notice, assemble these four evidence quadrants
                with a signed <strong>Section 63 BSA 2023</strong> hash certificate:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Implement & Drip Dispatch Trail",
                    items: [
                      "Signed Dealership / Stockist Agreement with credit terms",
                      "GST Tax Invoices listing tractor-implement chassis/serial numbers",
                      "GST E-Way Bills & signed Lorry Receipts (Bilty/LR)",
                    ],
                  },
                  {
                    title: "2. PMKSY / MIDH Subsidy Verification",
                    items: [
                      "Portal Work Order / Farmer Sanction Letter",
                      "DHO-signed Joint Inspection Report (JIR) & Completion Certificate",
                      "Geo-tagged GPS installation photographs with timestamps",
                    ],
                  },
                  {
                    title: "3. Negotiable Instruments & Banking",
                    items: [
                      "Original bounced PDCs (dealer or polyhouse beneficiary)",
                      "Original Bank Cheque Return Memo with exact bounce date",
                      "Reconciled ERP ledger adjusting all credit notes & rebates",
                    ],
                  },
                  {
                    title: "4. BSA 2023 s.63 Digital Admissions",
                    items: [
                      "WhatsApp order, dispatch & balance confirmations (exported with metadata)",
                      "State Horticulture portal status screenshots & RTI replies",
                      "Speed Post RPAD receipts & Email delivery logs",
                    ],
                  },
                ].map((quad) => (
                  <div
                    key={quad.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <h3 className="text-sm font-bold text-slate-900 mb-2">{quad.title}</h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {quad.items.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <span className="text-[#DC2626] font-bold mt-0.5">&#10003;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Launch a Single Dealer Notice or Bulk Network Drive
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Whether you need one urgent Section 138 / Section 80 CPC notice or a
                coordinated multi-district dealer recovery campaign, choose your track
                below:
              </p>

              <AgriMachineryCTA />
            </section>

            {/* Section 9: Calculators, Templates & Sibling Guides */}
            <section
              id="heading-related"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Calculators, Notice Templates &amp; Agri-Machinery Guides
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {[
                  {
                    label: "MSME Delayed Payment 3x RBI Interest Calculator",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    tag: "Interactive Tool",
                  },
                  {
                    label: "Advocate Commercial Legal Notice Reply & Demand Format",
                    href: "/templates/legal-notice-reply-format",
                    tag: "Notice Workspace",
                  },
                  {
                    label: "Agrochemical & Seed Dealer Seasonal Credit Recovery",
                    href: "/agrochemical-pesticide-seed-dealer-seasonal-credit-default-recovery",
                    tag: "IND-21 Sibling",
                  },
                  {
                    label: "Rice, Dal, Flour & Oil Mill Wholesale Buyer Recovery",
                    href: "/rice-dal-flour-sugar-edible-oil-mill-wholesale-buyer-recovery",
                    tag: "IND-21 Sibling",
                  },
                  {
                    label: "FPO & Cooperative Dairy B2B Buyer Recovery",
                    href: "/fpo-farmer-producer-company-cooperative-dairy-b2b-buyer-recovery",
                    tag: "IND-21 Sibling",
                  },
                  {
                    label: "Hindi Guide: Legal Notice Kaise Bheje (व्यापारी बकाया)",
                    href: "/hi/legal-notice-kaise-bheje",
                    tag: "Hindi Guide",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between gap-2 p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="font-semibold text-slate-900">{item.label}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                      {item.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  FAQs: Drip Irrigation, Polyhouse &amp; Farm Implement Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-slate-200 rounded-xl p-4 open:bg-slate-50 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] text-lg font-black shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&rsaquo;</span>
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

      <RelatedRecoveryGuides currentPath={PAGE_URL} />
    </div>
  );
}
