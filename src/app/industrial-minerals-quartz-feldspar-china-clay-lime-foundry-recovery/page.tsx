import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import IndustrialMineralsTableOfContents from "./IndustrialMineralsTableOfContents";
import IndustrialMineralsScenarioTabs from "./IndustrialMineralsScenarioTabs";
import IndustrialMineralsCTA from "./IndustrialMineralsCTA";

export const revalidate = 86400;

const PAGE_URL = "/industrial-minerals-quartz-feldspar-china-clay-lime-foundry-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const H1_TEXT =
  "Mineral Grinding & Calcining Plants (Beawar, Udaipur, Bhuj, Ongole & Katni): Recovering Ceramic, Glass & Steel-Plant Receivables";

const META_TITLE = "Industrial Minerals (Quartz, Clay & Silica) Debt Recovery";
const META_DESCRIPTION =
  "Mineral grinding MSMEs pay royalty upfront while ceramic & steel buyers stretch credit 120+ days or cut whiteness/mesh. Recover via s.43B(h) & MSEFC.";

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
          "Industrial mineral grinding plant quartz feldspar clay lime debt recovery playbook"
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
    statute: "MSMED Act, 2006",
    provision: "Sections 15, 16, 17 & 18 (Manufacturing MSME Classification)",
    trigger:
      "Ceramic, glass, foundry, or steel-plant buyer delays payment beyond 15 days (no written agreement) or 45 days (max written cap) to an Udyam-registered mineral pulverizer or calciner.",
    remedy:
      "Mandatory monthly compounded interest at 3x the RBI bank rate plus fast-track conciliation and arbitration before the Micro & Small Enterprises Facilitation Council (MSEFC).",
    timeline: "45-Day Cap / 90-Day MSEFC Disposal",
  },
  {
    statute: "Income Tax Act, 1961",
    provision: "Section 43B(h) (Micro & Small Enterprise Disallowance)",
    trigger:
      "Corporate or partnership buyer fails to pay a Micro or Small mineral grinding unit within the 15/45-day Section 15 window across the financial year-end.",
    remedy:
      "Purchase expense is disallowed from the buyer's taxable income until actually paid—creating immediate audit and cash-tax pressure from the buyer's statutory CA.",
    timeline: "FY-End Tax Audit Leverage",
  },
  {
    statute: "Sale of Goods Act, 1930",
    provision: "Section 42 (Deemed Acceptance) & Sections 55–56",
    trigger:
      "Buyer unloads 200–325 mesh quartz, feldspar, or china clay into silos and issues arbitrary 'whiteness/mesh/moisture' debit notes weeks after consumption.",
    remedy:
      "Consumption or retention beyond a reasonable inspection window constitutes deemed acceptance; post-consumption unilateral debit notes are legally unenforceable.",
    timeline: "Immediate Notice Rejection",
  },
  {
    statute: "Code of Civil Procedure, 1908",
    provision: "Order XXXVII (Summary Suit) & Order XXXVIII Rule 5",
    trigger:
      "Confirmed GST e-Invoices, signed e-Way bills, and dishonored cheques remain unpaid by a medium/large buyer or a buyer outside MSEFC pecuniary/procedural comfort.",
    remedy:
      "Fast-track money decree without full trial (buyer must show a triable defense to get leave to defend) plus pre-judgment attachment where plant assets are being stripped.",
    timeline: "4–9 Months (Summary Track)",
  },
  {
    statute: "Negotiable Instruments Act, 1881",
    provision: "Section 138 read with Sections 141 & 143A",
    trigger:
      "Security PDCs or invoice cheques issued by a Morbi tile factory, foundry, or rolling mill bounce for insufficient funds or stop-payment.",
    remedy:
      "Personal criminal prosecution against Managing Directors and authorized signatories, plus up to 20% interim compensation under Section 143A.",
    timeline: "15-Day Notice + 30-Day Filing",
  },
  {
    statute: "Insolvency & Bankruptcy Code, 2016",
    provision: "Section 8 Demand Notice (Form 3 / Form 4) & Section 9",
    trigger:
      "Aggregate undisputed operational debt from a corporate glass, ceramic, or steel buyer crosses the ₹1 Crore statutory threshold.",
    remedy:
      "10-day statutory demand notice forcing immediate payment or corporate insolvency escalation where no pre-existing quality dispute was raised prior to notice.",
    timeline: "10-Day Statutory Demand",
  },
];

const FAQS = [
  {
    question:
      "Do mineral grinding, pulverizing, and calcining plants qualify as Manufacturing MSMEs under Section 43B(h) and the MSMED Act?",
    answer:
      "Yes. This is a critical distinction for mineral processors in Beawar, Udaipur, Bhuj, Ongole, and Katni. While raw mineral extraction and quarrying faced historical Udyam classification exclusions, industrial mineral processing—including crushing, ball-mill grinding, micronizing to 200–500 mesh, magnetic separation, beneficiation, washing/levigation of china clay, and calcining of limestone into quicklime or hydrated lime—transforms raw ore into distinct marketable industrial inputs. Registered under manufacturing NIC codes (Division 23 / Group 239), these plants are full Manufacturing MSMEs eligible for Section 15–18 MSEFC recovery and Section 43B(h) tax disallowance leverage.",
  },
  {
    question:
      "How do we defeat arbitrary 'whiteness, mesh, or moisture' debit notes raised 45 days after unloading in Morbi?",
    answer:
      "Ceramic and sanitaryware buyers frequently raise unilateral debit notes weeks after unloading bulk tankers or jumbo bags into their silos. Under Section 42 of the Sale of Goods Act, 1930, once the buyer unloads and consumes the mineral powder in body or glaze formulations without an immediate written rejection at the factory gate, legal acceptance is complete. Pair your pre-dispatch Certificate of Analysis (whiteness L-value, Fe2O3 %, sieve residue), weighbridge slip, and signed LR/bilty with an Advocate Notice rejecting the belated debit note and demanding full GST invoice value plus 3x RBI compound interest.",
  },
  {
    question:
      "Can we recover upfront State Mining Royalty (e-Ravanna) and freight charges alongside the mineral invoice?",
    answer:
      "Yes. Where your purchase order or tax invoice bills ex-works or FOR delivery inclusive of statutory mining royalty, District Mineral Foundation Trust (DMFT), NMET, and freight, the entire GST invoice value constitutes the principal debt under Section 2(b) and Section 15 of the MSMED Act. If the buyer defaults, the 3x RBI monthly compound interest under Section 16 applies to the full unpaid invoice amount—including the royalty and freight components you already paid upfront to the state mines department and transporters.",
  },
  {
    question:
      "What if our buyer is a trader or large ceramic brand that insists on a 120-day credit period in the Purchase Order?",
    answer:
      "Under Section 15 of the MSMED Act, 2006, no written contract or purchase order can legally extend the payment period for a Micro or Small supplier beyond 45 days from the date of acceptance (or deemed acceptance). Even if a large tile, glass, or steel buyer prints '120 Days Credit' on its vendor portal or PO, that clause is void to the extent it exceeds 45 days—and statutory 3x RBI compound interest plus Section 43B(h) tax disallowance automatically trigger from Day 46.",
  },
  {
    question:
      "Should a quartz or quicklime supplier file before the MSEFC or an Order XXXVII CPC Summary Suit?",
    answer:
      "Choose MSEFC (MSME Samadhaan) when you hold a valid Manufacturing Udyam Registration as a Micro or Small enterprise, the buyer has not raised a genuine pre-existing quality dispute, and you want zero/minimal court fees plus mandatory 3x RBI compound interest. Choose an Order XXXVII CPC Summary Suit (or Commercial Court suit) when you are a Medium enterprise, when the buyer is stripping plant assets requiring urgent Order XXXVIII Rule 5 pre-judgment attachment, or when you hold dishonored cheques and signed balance confirmations.",
  },
  {
    question:
      "What digital and weighbridge records must be preserved under BSA 2023 Section 63 for mineral recovery?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (replacing Section 65B of the Evidence Act), any electronic evidence—including GST e-Invoices, e-Way bills, State Mining Portal e-Ravanna transit passes, digital weighbridge slips, WhatsApp lab-report approvals, and email ledger reconciliations—must be accompanied by a signed Section 63 BSA certificate detailing the device/server hash and custody. Preserving this bundle at the dispatch stage prevents buyers from disputing electronic delivery proofs in MSEFC or Commercial Court.",
  },
];

export default function IndustrialMineralsRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const reviewerName = "Anuj Anand Malik";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: H1_TEXT,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: reviewerName,
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
    },
    datePublished: "2026-11-20",
    dateModified: "2026-11-20",
    inLanguage: "en-IN",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Mineral Grinding & Calcining Plants Recover Overdue Ceramic, Glass & Steel Receivables",
    description:
      "Step-by-step statutory playbook for quartz, feldspar, china clay, bentonite, quicklime, and foundry silica suppliers to defeat arbitrary quality cuts and recover 3x RBI interest.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit Udyam Manufacturing Status & Freeze Quality Cutoffs",
        text: "Verify Manufacturing NIC classification on your Udyam certificate and compile pre-dispatch COA, weighbridge slips, e-Ravanna passes, and signed LR/bilties.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Reject Post-Unloading Debit Notes Under Sale of Goods Act s.42",
        text: "Issue a formal Advocate Notice rejecting belated whiteness, mesh, or moisture cuts raised after the buyer unloaded and consumed the mineral powder.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Trigger Section 43B(h) & 3x RBI Compound Interest Demand",
        text: "Serve a tri-channel statutory notice (Email + WhatsApp + Speed Post RPAD) quantifying 3x RBI monthly compound interest and notifying the buyer of Income Tax s.43B(h) disallowance.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Escalate to MSEFC, Order XXXVII CPC, NI s.138, or IBC s.8",
        text: "File MSME Samadhaan reference for Micro/Small claims, Order 37 Summary Suit + Order 38 Rule 5 attachment for asset-stripping buyers, NI s.138 for bounced PDCs, or IBC s.8 for defaults ≥ ₹1 Crore.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
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
        name: "Mining, Minerals, Fuel & Scrap Recovery",
        item: `${SITE_URL}/industries/mining-minerals-fuel-scrap-commodity-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Industrial Minerals Recovery",
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
            <span>IND-25 Creditor Playbook</span>
            <span aria-hidden="true">&bull;</span>
            <span>Quartz, Feldspar, China Clay, Lime &amp; Silica</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + Parent Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Mineral pulverizing, micronizing, beneficiation, and calcining units qualify as{" "}
            <strong className="text-white">Manufacturing MSMEs</strong> under the MSMED Act, 2006.
            Even when ceramic, glass, or steel buyers stretch credit 120+ days or deduct arbitrary
            &ldquo;whiteness/mesh&rdquo; cuts, suppliers can enforce 45-day recovery, 3x RBI
            compound interest, and Section 43B(h) tax disallowance via our{" "}
            <Link
              href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
              className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
            >
              Mining, Minerals &amp; Commodity Recovery Hub
            </Link>
            .
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">Day 0 Outgo</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                State Royalty &amp; HT Power Paid Upfront
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">Mfg. MSME</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Grinding &amp; Calcining Covered Under s.15
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Monthly Compound Interest Past 45 Days
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">s.43B(h)</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Buyer Tax Disallowance &amp; Order 37 CPC
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
                label: "Mining, Minerals & Commodity Recovery",
                href: "/industries/mining-minerals-fuel-scrap-commodity-recovery",
              },
              {
                label: "Industrial Minerals (Quartz, Clay, Lime & Silica)",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <IndustrialMineralsTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: MSME & 43B(h) Eligibility */}
            <section
              id="heading-msme-eligibility"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Why Grinding Plants Qualify for MSME 43B(h) &amp; MSEFC Protection
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s mineral processing belts—Beawar and Udaipur (quartz, potash/soda
                  feldspar, calcite, soapstone), Bhuj and Morbi-feeding Kachchh units (bentonite,
                  levigated china clay, silica sand), Ongole and Chimakurthy (quartz and mica), and
                  Katni/Maihar (quicklime, hydrated lime, dolomite)—plant owners face an acute
                  structural cash squeeze. Unlike pure traders, mineral processors must pay State
                  Mining Royalty, District Mineral Foundation Trust (DMFT), NMET cess, e-Ravanna
                  transit fees, and high-tension (HT) ball-mill electricity bills{" "}
                  <strong>before a single tonne leaves the factory gate</strong>.
                </p>
                <p>
                  Yet ceramic tile manufacturers, float-glass furnaces, foundries, and steel plants
                  routinely stretch credit to 120–180 days—and often tell suppliers that
                  &ldquo;mining businesses are excluded from MSME benefits.&rdquo; That claim is
                  legally false for processing units. While raw mineral extraction (quarrying)
                  historically faced Udyam exclusions,{" "}
                  <strong>
                    mineral pulverizing, ball-mill micronizing (200–500 mesh), magnetic separation,
                    china clay washing/levigation, resin-coating of foundry sand, and lime calcining
                  </strong>{" "}
                  constitute manufacturing processes (NIC Division 23 / Group 239) that create a
                  commercially distinct industrial product.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
                      Protected as Manufacturing MSMEs
                    </p>
                    <ul className="text-xs sm:text-sm text-emerald-900 space-y-1.5 list-disc pl-4">
                      <li>Quartz &amp; Feldspar ball-mill grinding &amp; iron-free micronizing</li>
                      <li>China Clay / Kaolin washing, levigation &amp; spray-drying</li>
                      <li>Limestone calcining (Quicklime CaO / Hydrated Lime kilns)</li>
                      <li>Foundry Silica Sand washing, grading &amp; resin-coating</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
                      Common Buyer Pretexts Defeated
                    </p>
                    <ul className="text-xs sm:text-sm text-amber-900 space-y-1.5 list-disc pl-4">
                      <li>&ldquo;Our PO says 120 days credit&rdquo; &rarr; Void past 45 days (s.15)</li>
                      <li>&ldquo;Low whiteness / 300-mesh residue&rdquo; &rarr; Barred after silo unloading (s.42)</li>
                      <li>&ldquo;You are a mine owner, not MSME&rdquo; &rarr; Grinding/calcining is Mfg.</li>
                      <li>&ldquo;Wait for ceramic market recovery&rdquo; &rarr; Triggers s.43B(h) tax hit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Operational Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Operational Decision Tree: Lab Cutbacks vs 43B(h) &amp; Order 37
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select the recovery forum based on your Udyam tier, whether the buyer has already
                unloaded/consumed the mineral lot, and whether dishonored cheques or asset-stripping
                risks exist.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  viewBox="0 0 820 290"
                  width="820"
                  height="290"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Industrial mineral supplier recovery decision tree from invoice default to MSEFC, Order 37, NI 138, and IBC Section 8"
                >
                  {/* Root Node */}
                  <rect x="20" y="105" width="165" height="80" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="102" y="135" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">
                    DAY 46+ DEFAULT
                  </text>
                  <text x="102" y="153" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    Unpaid Mineral Bill
                  </text>
                  <text x="102" y="170" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    e-Ravanna + COA + LR
                  </text>

                  {/* Connector Lines */}
                  <path d="M 185 145 L 235 145 L 235 52 L 275 52" fill="none" stroke="#64748B" strokeWidth="2" />
                  <path d="M 185 145 L 275 145" fill="none" stroke="#64748B" strokeWidth="2" />
                  <path d="M 185 145 L 235 145 L 235 238 L 275 238" fill="none" stroke="#64748B" strokeWidth="2" />

                  {/* Track A */}
                  <rect x="275" y="16" width="230" height="72" rx="10" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
                  <text x="390" y="38" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="700">
                    Micro / Small Mfg. Udyam
                  </text>
                  <text x="390" y="55" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Belated Whiteness/Mesh Cut
                  </text>
                  <text x="390" y="72" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Sale of Goods s.42 + s.43B(h)
                  </text>

                  {/* Track B */}
                  <rect x="275" y="109" width="230" height="72" rx="10" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="390" y="131" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="700">
                    Bounced PDCs / Medium Unit
                  </text>
                  <text x="390" y="148" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Foundry / Glass / Steel Buyer
                  </text>
                  <text x="390" y="165" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    NI s.138 + Order 37 CPC
                  </text>

                  {/* Track C */}
                  <rect x="275" y="202" width="230" height="72" rx="10" fill="#0F172A" stroke="#EF4444" strokeWidth="1.5" />
                  <text x="390" y="224" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">
                    Asset Stripping / ≥ ₹1 Cr
                  </text>
                  <text x="390" y="241" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Kiln Shutdown or Sister Shift
                  </text>
                  <text x="390" y="258" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Order 38 R.5 + IBC s.8 Form 3
                  </text>

                  {/* Right Connectors */}
                  <path d="M 505 52 L 555 52" fill="none" stroke="#10B981" strokeWidth="2" />
                  <path d="M 505 145 L 555 145" fill="none" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M 505 238 L 555 238" fill="none" stroke="#EF4444" strokeWidth="2" />

                  {/* Outcomes */}
                  <rect x="555" y="16" width="245" height="72" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="677" y="42" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    MSEFC Reference + 3x RBI
                  </text>
                  <text x="677" y="61" textAnchor="middle" fill="#A7F3D0" fontSize="10.5">
                    Buyer loses FY Tax Deduction (43B(h))
                  </text>

                  <rect x="555" y="109" width="245" height="72" rx="10" fill="#78350F" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="677" y="135" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    20% Interim + Summary Decree
                  </text>
                  <text x="677" y="154" textAnchor="middle" fill="#FDE68A" fontSize="10.5">
                    Director Summons under NI s.141
                  </text>

                  <rect x="555" y="202" width="245" height="72" rx="10" fill="#7F1D1D" stroke="#EF4444" strokeWidth="1.5" />
                  <text x="677" y="228" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    Bank Freeze / Insolvency Pressure
                  </text>
                  <text x="677" y="247" textAnchor="middle" fill="#FECACA" fontSize="10.5">
                    Pre-Judgment Attachment + 10-Day IBC
                  </text>
                </svg>
              </div>

              {/* Mobile Decision Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold text-emerald-800 uppercase">
                    Track A &bull; Micro/Small Mfg. Udyam
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    MSEFC Reference + Section 43B(h) Disallowance
                  </p>
                  <p className="text-xs text-slate-700 mt-1">
                    Best when buyer unloaded mineral powder and issued belated whiteness/mesh debit
                    notes. Enforces 3x RBI compound interest.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold text-amber-800 uppercase">
                    Track B &bull; Bounced PDCs / Medium Unit
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    NI Act s.138/141 + Order XXXVII Summary Suit
                  </p>
                  <p className="text-xs text-slate-700 mt-1">
                    Best for foundry/glass PDC dishonor. Unlocks 20% interim compensation (s.143A)
                    and fast-track civil decree.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-extrabold text-[#DC2626] uppercase">
                    Track C &bull; Asset Stripping / &ge; &#8377;1 Cr
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Order XXXVIII Rule 5 Attachment + IBC Section 8
                  </p>
                  <p className="text-xs text-slate-700 mt-1">
                    Best when kilns/plants are shutting down or diverting assets. Freezes bank
                    receivables or triggers 10-day insolvency notice.
                  </p>
                </div>
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
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Statutory Matrix: MSMED Act, s.43B(h), Sale of Goods &amp; CPC
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Mineral processors hold overlapping statutory remedies across tax, commercial, and
                summary civil law. Deploy the matrix below to match each buyer delay tactic with its
                corresponding statutory weapon.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Statute &amp; Provision</th>
                      <th className="py-3.5 px-4 font-bold">Default / Dispute Trigger</th>
                      <th className="py-3.5 px-4 font-bold">Creditor Remedy</th>
                      <th className="py-3.5 px-4 font-bold">Statutory Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/80"}>
                        <td className="py-3.5 px-4 align-top">
                          <p className="font-extrabold text-slate-900">{row.statute}</p>
                          <p className="text-xs text-[#DC2626] font-semibold mt-0.5">
                            {row.provision}
                          </p>
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 align-top">{row.trigger}</td>
                        <td className="py-3.5 px-4 text-slate-700 align-top">{row.remedy}</td>
                        <td className="py-3.5 px-4 font-bold text-slate-900 align-top whitespace-nowrap">
                          {row.timeline}
                        </td>
                      </tr>
                    ))}
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
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  4 Mineral Buyer Default &amp; Quality-Cut Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select a failure mode below to view the exact commercial trigger, statutory
                counter-position, and 3-step enforcement protocol for ceramic, glass, foundry, and
                steel buyers.
              </p>

              <IndustrialMineralsScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Interest Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Worked Ledger: &#8377;48L Quartz Powder Claim &amp; 3x RBI Interest
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a Beawar/Udaipur 200-mesh Quartz &amp; Potash Feldspar grinding MSME
                supplying 1,200 MT to a Morbi ceramic tile manufacturer at &#8377;4,000/MT FOR
                (total GST invoice value: <strong>&#8377;48,00,000</strong>). By Day 120, the buyer
                has paid &#8377;0 and sends a unilateral &#8377;6,72,000 (14%) &ldquo;whiteness
                &amp; mesh&rdquo; debit note after firing the material.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-700 pb-3">
                  <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-red-400">
                    Creditor Recovery &amp; Upfront Cash-Outgo Ledger (120-Day Overdue)
                  </p>
                  <span className="text-xs font-semibold text-slate-300">
                    Benchmark RBI Bank Rate: 6.75% &rarr; 3x Statutory Rate = 20.25% p.a.
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700 space-y-2">
                    <p className="font-bold text-slate-200">
                      Supplier&apos;s Upfront Cash Already Paid (Day 0):
                    </p>
                    <div className="flex justify-between text-slate-300">
                      <span>State Mining Royalty + DMFT + NMET (e-Ravanna)</span>
                      <span className="font-semibold text-white">&#8377;4,20,000</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>HT Industrial Ball-Mill Power &amp; Grinding Media</span>
                      <span className="font-semibold text-white">&#8377;7,80,000</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Transporter Freight &amp; GST Output Remitted</span>
                      <span className="font-semibold text-white">&#8377;11,40,000</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-700 pt-2 font-bold text-amber-300">
                      <span>Net Cash Blocked Before Buyer Pays &#8377;1</span>
                      <span>&#8377;23,40,000</span>
                    </div>
                  </div>

                  <div className="bg-emerald-950/50 rounded-xl p-4 border border-emerald-800/60 space-y-2">
                    <p className="font-bold text-emerald-300">
                      Enforceable Creditor Claim (MSMED s.16 + s.42):
                    </p>
                    <div className="flex justify-between text-slate-200">
                      <span>Confirmed Principal (Unilateral 14% Cut Rejected)</span>
                      <span className="font-semibold text-white">&#8377;48,00,000</span>
                    </div>
                    <div className="flex justify-between text-slate-200">
                      <span>75 Overdue Days Post-45d Cap (20.25% Monthly Comp.)</span>
                      <span className="font-semibold text-emerald-300">+ &#8377;2,02,500+</span>
                    </div>
                    <div className="flex justify-between text-slate-200">
                      <span>Buyer&apos;s s.43B(h) Tax Disallowance Impact (@ ~25.17%)</span>
                      <span className="font-semibold text-red-300">&#8377;12,08,160 Tax Hit</span>
                    </div>
                    <div className="flex justify-between border-t border-emerald-800/60 pt-2 font-extrabold text-white">
                      <span>Total Immediate Claim + Tax Leverage</span>
                      <span>&#8377;50,02,500+</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Royalty, Weighbridge &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Before filing before the MSEFC or Commercial Court, assemble these six core records
                so the buyer cannot raise a sham &ldquo;quality dispute&rdquo; or challenge
                electronic delivery logs:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Manufacturing Udyam & NIC Code",
                    desc: "Udyam Registration Certificate showing manufacturing/processing activity (grinding, micronizing, beneficiation, or calcining) dated prior to the disputed invoices.",
                  },
                  {
                    title: "2. State e-Ravanna & Royalty Transit Pass",
                    desc: "DMG Rajasthan / Gujarat / AP / MP mineral transit passes proving legal origin, royalty payment, and dispatch tonnage.",
                  },
                  {
                    title: "3. Pre-Dispatch Lab COA (Whiteness & Mesh)",
                    desc: "Batch-wise Certificate of Analysis recording L-value whiteness, Fe2O3 %, CaO/SiO2 purity, and 200/325-mesh sieve retention prior to loading.",
                  },
                  {
                    title: "4. Weighbridge Slip, GST e-Invoice & e-Way Bill",
                    desc: "Dharamkanta gross/tare/net weight slips matched to IRN e-Invoices, e-Way bills, and signed transporter LR/bilties with buyer gate stamp.",
                  },
                  {
                    title: "5. Written POs / Unprotested Ledger & PDCs",
                    desc: "Purchase orders, WhatsApp/email rate confirmations, signed balance confirmations, and original bank dishonor memos for bounced cheques.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Electronic Certificate",
                    desc: "Mandatory certificate authenticating digital tally ledgers, GST portal downloads, email rejections of debit notes, and WhatsApp dispatch threads.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Dual-Track CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Initiate a Mineral Receivables Demand Notice or Bulk CSV
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you are testing one overdue Morbi ceramic or foundry account or onboarding
                an entire cluster ledger of 10 to 10,000+ defaulting buyers, choose your track
                below.
              </p>

              <IndustrialMineralsCTA />
            </section>

            {/* Section 8: Hub, Calculator, Templates & Sibling Guides */}
            <section
              id="heading-related-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Mining Hub, Interest Calculator, Templates &amp; Sibling Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <Link
                  href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Parent Industry Hub
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Mining, Minerals, Fuel &amp; Scrap Recovery Hub &rarr;
                  </p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Interactive T1 Calculator
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    MSME Delayed Payment 3x RBI Interest Calculator &rarr;
                  </p>
                </Link>

                <Link
                  href="/templates/legal-notice-reply-format"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Notice Workspace (P1)
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Commercial Legal Notice &amp; Reply Format Workspace &rarr;
                  </p>
                </Link>

                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Statutory Guide
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Order 37 CPC Summary Suit Money Recovery &rarr;
                  </p>
                </Link>

                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Director Liability
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    NI Act s.138 Cheque Bounce Case Against Directors &rarr;
                  </p>
                </Link>

                <Link
                  href="/recovery/unpaid-invoices"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Core B2B Recovery
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    B2B Unpaid Invoices Legal Recovery Process &rarr;
                  </p>
                </Link>

                <Link
                  href="/imported-coal-petcoke-biomass-supplier-gcv-moisture-deduction-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Sibling IND-25 Spoke
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Imported Coal &amp; Petcoke GCV/Moisture Deduction Recovery &rarr;
                  </p>
                </Link>

                <Link
                  href="/ferrous-non-ferrous-metal-scrap-ingot-rolling-mill-default-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Sibling IND-25 Spoke
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Metal Scrap &amp; Ingot Rolling-Mill Default Recovery &rarr;
                  </p>
                </Link>

                <Link
                  href="/industrial-gas-oxygen-nitrogen-argon-co2-cylinder-retention-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Sibling IND-25 Spoke
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Industrial Gas Cylinder Retention (PESO) &amp; Rent Recovery &rarr;
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Institutional Batch Desk
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Bulk CSV Recovery Solutions (10 to 10,000+ Cases) &rarr;
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Frequently Asked Questions: Mineral &amp; Silica Debt Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/70 open:bg-white open:shadow-xs transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
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

            {/* Section 10: Official Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Official Statutory Portals &amp; Mineral Recovery Authorities
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li>
                  <a
                    href="https://samadhaan.msme.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-semibold text-[#DC2626] hover:underline"
                  >
                    MSME Samadhaan Portal (Ministry of MSME)
                  </a>{" "}
                  &mdash; Online MSEFC delayed payment filing and case tracking for Manufacturing
                  MSMEs.
                </li>
                <li>
                  <a
                    href="https://udyamregistration.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-semibold text-[#DC2626] hover:underline"
                  >
                    Udyam Registration Portal (Ministry of MSME)
                  </a>{" "}
                  &mdash; Manufacturing NIC code verification for mineral pulverizing and calcining
                  plants.
                </li>
                <li>
                  <a
                    href="https://www.indiacode.nic.in/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-semibold text-[#DC2626] hover:underline"
                  >
                    India Code (Legislative Department)
                  </a>{" "}
                  &mdash; Bare acts for MSMED Act 2006, Sale of Goods Act 1930, CPC 1908, and BSA
                  2023.
                </li>
                <li>
                  <a
                    href="https://www.rbi.org.in/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-semibold text-[#DC2626] hover:underline"
                  >
                    Reserve Bank of India (RBI)
                  </a>{" "}
                  &mdash; Official Bank Rate reference governing Section 16 3x compound interest.
                </li>
              </ul>

              <p className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-500">
                Reviewed by <strong className="text-slate-700">{reviewerName}</strong>, Advocate &amp;
                Founder, AMA Legal Solutions. Statutory references verified as of November 2026.
              </p>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
