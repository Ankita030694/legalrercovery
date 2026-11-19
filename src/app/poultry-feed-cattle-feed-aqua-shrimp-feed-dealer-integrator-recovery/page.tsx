import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import FeedDealerTableOfContents from "./FeedDealerTableOfContents";
import FeedDealerScenarioTabs from "./FeedDealerScenarioTabs";
import FeedDealerCTA from "./FeedDealerCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/poultry-feed-cattle-feed-aqua-shrimp-feed-dealer-integrator-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Recovering Overdue Poultry, Dairy & Aqua-Feed Dealer Ledgers: Countering 'High FCR / Disease Mortality' Blame & Illegal Chick Diversion";

// Tightened from 65ch PDF draft to 58ch for Screaming Frog 30-60ch compliance
const META_TITLE =
  "Poultry, Cattle & Aqua Feed Dealer Credit Default Recovery";

// Tightened from 170ch PDF draft to 145ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "Aqua-feed (AP/Odisha) & poultry-feed (Namakkal/Pune/Telangana) run on 60–120d credit. Defeat disease feed-blame, bird-lifting & bounced PDCs.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "poultry cattle shrimp aqua feed dealer credit default recovery",
    "shrimp aqua feed dealer andhra odisha credit recovery",
    "poultry farmer blaming bird mortality fcr on feed company",
    "contract poultry farming chick lifting breach farmer",
    "veterinary lab mycotoxin test defense feed manufacturer",
    "security mortgage pdc recovery feed distributor",
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
      "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316 & Section 318 — Criminal Breach of Trust in Contract Farming Bailment & Dishonest Bird Diversion)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "Indian Contract Act, 1872 (Sections 148–161 & 128 — Bailment of Integrator Chicks/Feed & Co-Extensive Liability of Dealer Guarantors)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 16 & 42 — Implied Quality Conditions & Deemed Acceptance After Unsealed Feed Consumption)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 139 & 143A — Prosecution of Harvest Security PDCs & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 & 24 — 3x RBI Compound Interest for Udyam Feed Mills)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of Batch Retention Lab COAs, E-Way Bills, Farm Mortality Logs & WhatsApp Chats)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    q: "How can a poultry or shrimp feed manufacturer defeat oral 'high FCR' or 'viral mortality' blame raised after harvest?",
    a: "Under Section 42 of the Sale of Goods Act, 1930, once feed bags are opened, fed across a 45–120 day culture cycle, and consumed without contemporaneous written rejection or independent veterinary/NABL lab sampling, the dealer is deemed to have accepted the feed. Producing your factory's sealed Batch Retention Sample Mycotoxin/Aflatoxin & Proximate Analysis Lab Report shifts the burden entirely onto the dealer, defeating unsubstantiated WSSV, EMS, or Ranikhet feed-blame.",
  },
  {
    q: "What legal action can a broiler integrator take when a contract farmer secretly sells live birds at night ('bird lifting theft')?",
    a: "In contract broiler integration, Day-Old Chicks (DOCs) and feed are supplied under a bailment arrangement (Sections 148–161 of the Indian Contract Act, 1872) where legal title remains with the integrator. Secretly selling grown birds to cash traders and reporting fake mortality constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023, enabling immediate police complaint, BNS s.316 notice, and civil recovery of flock market value.",
  },
  {
    q: "Are post-dated or undated security cheques taken from aqua-feed dealers in Andhra Pradesh and Odisha enforceable under Section 138?",
    a: "Yes. The Supreme Court in Sripati Singh v. State of Jharkhand (2021) confirmed that a security cheque becomes fully actionable under Section 138 of the NI Act, 1881 once the underlying 60–120 day harvest credit ledger falls due. Even if the dealer issues a 'Stop Payment' instruction, a 30-day statutory demand notice followed by a Magistrate complaint entitles the feed company to seek 20% interim compensation under Section 143A.",
  },
  {
    q: "Can a cattle or poultry feed mill recover 3x RBI compound interest from defaulting dealers under the MSMED Act, 2006?",
    a: "Yes, if your feed mill holds a valid Udyam Registration as a Micro or Small Enterprise on the date of supply. Under Sections 15 and 16 of the MSMED Act, 2006, any 60–120 day credit understanding exceeding 45 days is void by statute, and the defaulting distributor owes compound interest with monthly rests at three times the RBI bank rate—enforceable via MSEFC Samadhaan conciliation and arbitration.",
  },
  {
    q: "How do we enforce an equitable mortgage or personal guarantee taken from a high-ticket feed distributor?",
    a: "If the distributor deposited original title deeds (equitable mortgage under Section 58(f) of the Transfer of Property Act, 1882) or executed a personal guarantee (Section 128 Contract Act), serve a joint demand notice on the dealer and guarantors, file an Order XXXIV CPC mortgage suit or Order XXXVII summary suit, and seek urgent Attachment Before Judgment under Order XXXVIII Rule 5 CPC to block property alienation.",
  },
  {
    q: "What digital records must our credit and QC teams preserve under BSA 2023 Section 63 before issuing a demand notice?",
    a: "Preserve: (1) Batch Retention Sample Mycotoxin/Aflatoxin Lab Reports matching invoice batch numbers, (2) signed Integration/Dealership Agreement, (3) GST Tax Invoices, E-Way Bills, and weighbridge/gate-pass slips, (4) daily farm supervisor mortality & FCR logs, (5) WhatsApp/SMS ledger confirmations, and (6) a signed BSA 2023 Section 63 electronic-record certificate.",
  },
  {
    q: "Can a regional feed manufacturer issue legal notices to 100–500 defaulting dealers or contract farmers in one post-harvest batch?",
    a: "Yes. Using LegalRecovery.in's Bulk Institutional Desk, credit heads can upload a single CSV of overdue dealer ledgers across Namakkal, Telangana, Haryana, Pune, Andhra Pradesh, and Odisha to dispatch advocate-vetted Section 138, BNS s.316, and MSMED notices simultaneously via Email, WhatsApp, and Speed Post RPAD.",
  },
];

export default function PoultryAquaFeedDealerRecoveryPage() {
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
        datePublished: "2026-11-19",
        dateModified: "2026-11-19",
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
        name: "How to Recover Overdue Poultry, Dairy & Aqua-Feed Dealer Ledgers in India",
        description:
          "5-stage statutory recovery sequence for feed manufacturers and broiler integrators to defeat oral disease-mortality blame, prosecute bird-lifting under BNS s.316, and enforce NI s.138 PDCs.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Pull Batch Retention Lab COA & Flock Reconciliation",
            text: "Match invoice batch numbers against factory retention sample mycotoxin/aflatoxin reports and daily farm mortality/FCR supervisor logs.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Reconcile Rebates & Lock BSA 2023 s.63 Digital Trail",
            text: "Adjust FCR bonuses, empty bag credits, and issue a BSA s.63 certified ledger statement alongside E-Way bills and WhatsApp acknowledgments.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Dispatch Advocate Estoppel / BNS s.316 / NI s.138 Notice",
            text: "Serve a 7–15 day statutory notice via Email, WhatsApp, and Speed Post RPAD demanding NABL/vet lab proof or immediate payment.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Trigger Section 138 Prosecution & Police Complaint",
            text: "Present reconciled security PDCs and file NI Act s.138 complaints within 30 days of return memo, or BNS s.316 FIR for illegal night bird lifting.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Enforce MSEFC 3x RBI Interest, Order 37 CPC or Mortgage",
            text: "Escalate high-ticket arrears to MSEFC Samadhaan, Commercial Court Order XXXVII summary suits, or Order XXXIV mortgage enforcement.",
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
            name: "Agri-Inputs & Food Recovery",
            item: `${SITE_URL}/industries/agri-inputs-cold-storage-food-processing-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Poultry, Cattle & Aqua-Feed Dealer Recovery",
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
            <span>IND-21 · AGRI-INPUTS &amp; FEED SECTOR</span>
            <span className="text-red-700">|</span>
            <span>CREDITOR OPERATIONAL PLAYBOOK</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40–60 Word Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer · IND-21 Feed &amp; Integrator Playbook
            </span>
            Under{" "}
            <Link
              href="/industries/agri-inputs-cold-storage-food-processing-recovery"
              className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
            >
              Indian agri-inputs &amp; food-chain recovery law
            </Link>
            , feed mills defeat post-harvest &ldquo;high FCR / viral mortality&rdquo; blame using{" "}
            <strong>Batch Retention Mycotoxin Lab Reports</strong> and{" "}
            <strong>Sale of Goods Act s.42</strong> deemed acceptance, while prosecuting illegal night{" "}
            <strong>bird-lifting theft</strong> under <strong>BNS s.316</strong> bailment and enforcing{" "}
            <strong>NI Act s.138</strong> harvest PDCs.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">60–120 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Aqua &amp; Poultry Harvest Credit Cycle
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.16 Compound Interest (Udyam Mills)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">BNS s.316</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Criminal Breach of Trust for Bird Lifting
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">30d / 15d</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                NI s.138 PDC Notice &amp; 20% Interim Deposit
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
                label: "Agri-Inputs & Food Recovery",
                href: "/industries/agri-inputs-cold-storage-food-processing-recovery",
              },
              {
                label: "Poultry, Cattle & Aqua-Feed Dealer Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <FeedDealerTableOfContents />

          {/* Main Article Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Poultry, Dairy &amp; Aqua-Feed Ledgers Collapse at Harvest
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  India&apos;s commercial animal-feed ecosystem—spanning vannamei shrimp and fish
                  aqua-feed belts in <strong>Andhra Pradesh (West &amp; East Godavari, Nellore)</strong>{" "}
                  and <strong>Odisha (Balasore, Bhadrak)</strong>, broiler and layer hubs in{" "}
                  <strong>Namakkal, Telangana, Pune/Baramati, and Haryana (Karnal/Jind)</strong>, and
                  organized dairy cattle-feed networks—operates on deep{" "}
                  <strong>60 to 120-day harvest-linked open credit</strong>. Unlike retail FMCG,
                  feed manufacturers and contract broiler integrators finance an entire biological
                  production cycle upfront, expecting settlement only after pond harvest or live-bird
                  lifting.
                </p>
                <p>
                  When wholesale shrimp or broiler farm-gate prices dip—or when a pond suffers viral
                  outbreaks like <strong>White Spot Syndrome Virus (WSSV)</strong> or{" "}
                  <strong>Early Mortality Syndrome (EMS)</strong>—two coordinated default patterns
                  emerge across dealer ledgers:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Retroactive &ldquo;High FCR / Disease Mortality&rdquo; Feed Blame:</strong>{" "}
                    After feeding 30–60 metric tonnes of starter, grower, and finisher pellets over
                    3 months, the aqua or poultry dealer refuses to clear ₹10 lakh to ₹85 lakh in
                    overdue bills, orally blaming &ldquo;excessive FCR,&rdquo; &ldquo;aflatoxin,&rdquo;
                    or &ldquo;contaminated feed&rdquo; for viral mortality—despite never raising a
                    written quality objection or lab sample during the culture cycle.
                  </li>
                  <li>
                    <strong>Contract Broiler &ldquo;Bird Lifting Theft&rdquo;:</strong> In contract
                    broiler integration, the company supplies Day-Old Chicks (DOCs), feed, and
                    vaccines while retaining legal ownership. At Week 5–6, defaulting farmers
                    secretly sell grown birds at night to cash traders (<em>bird lifting theft</em>)
                    and report fake &ldquo;heatstroke or Ranikhet mortality&rdquo; to the area
                    supervisor.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2: Statutory Defense */}
            <section
              id="heading-statutory-defense"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Batch Retention Mycotoxin Reports &amp; BNS s.316 Bailment Law
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Feed credit heads routinely lose leverage when field sales teams try to negotiate
                  informal 15–20% &ldquo;mortality discounts&rdquo; instead of asserting two
                  decisive statutory pillars:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-emerald-900 mb-2">
                      1. Batch Retention Lab Reports + Sale of Goods Act s.42
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-950/90 leading-relaxed">
                      Every compliant feed mill retains sealed control samples of every production
                      batch. Producing an NABL-accredited or veterinary laboratory{" "}
                      <strong>Mycotoxin / Aflatoxin &amp; Proximate Analysis Report</strong> for the
                      exact batch number on the E-Way Bill—paired with{" "}
                      <strong>Section 42 of the Sale of Goods Act, 1930</strong> (deemed acceptance
                      after unsealed consumption)—estops the dealer from raising post-harvest
                      quality excuses.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-[#DC2626] mb-2">
                      2. Contract-Farming Bailment + BNS Section 316
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      Under a standard poultry integration agreement, DOCs and feed remain the
                      integrator&apos;s property held by the farmer as a{" "}
                      <strong>bailee under Sections 148–161 of the Indian Contract Act, 1872</strong>.
                      Clandestine night sale of grown birds to cash traders is{" "}
                      <strong>Criminal Breach of Trust under BNS Section 316</strong>, attracting
                      non-compoundable criminal prosecution alongside civil recovery.
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Step Feed Dealer &amp; Contract Integrator Recovery Flowchart
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Execute this sequential legal workflow the moment a 60–120 day harvest invoice
                turns overdue or a contract flock shows unexplained mortality variance:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800 mb-4">
                <svg
                  viewBox="0 0 820 220"
                  width={820}
                  height={220}
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Step Feed Dealer and Contract Broiler Integrator Recovery Flowchart"
                >
                  {/* Step 1 */}
                  <rect x="10" y="30" width="142" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="34" cy="54" r="12" fill="#DC2626" />
                  <text x="34" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                  <text x="54" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Lab &amp; Flock Audit</text>
                  <text x="22" y="84" fill="#CBD5E1" fontSize="10">Pull batch retention</text>
                  <text x="22" y="99" fill="#CBD5E1" fontSize="10">mycotoxin COA &amp;</text>
                  <text x="22" y="114" fill="#CBD5E1" fontSize="10">supervisor mortality</text>
                  <text x="22" y="129" fill="#CBD5E1" fontSize="10">register (Day 1–3)</text>
                  <text x="22" y="160" fill="#34D399" fontSize="9.5" fontWeight="bold">Rebuts FCR Blame</text>

                  <path d="M154 105 L172 105" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="174" y="30" width="142" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="198" cy="54" r="12" fill="#DC2626" />
                  <text x="198" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                  <text x="218" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">BSA s.63 Freeze</text>
                  <text x="186" y="84" fill="#CBD5E1" fontSize="10">Reconcile rebates,</text>
                  <text x="186" y="99" fill="#CBD5E1" fontSize="10">lock E-Way bills,</text>
                  <text x="186" y="114" fill="#CBD5E1" fontSize="10">weighbridge slips</text>
                  <text x="186" y="129" fill="#CBD5E1" fontSize="10">&amp; WhatsApp chats</text>
                  <text x="186" y="160" fill="#FBBF24" fontSize="9.5" fontWeight="bold">Court-Ready Trail</text>

                  <path d="M318 105 L336 105" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Step 3 */}
                  <rect x="338" y="30" width="142" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <circle cx="362" cy="54" r="12" fill="#DC2626" />
                  <text x="362" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                  <text x="382" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Advocate Notice</text>
                  <text x="350" y="84" fill="#CBD5E1" fontSize="10">Serve 7–15d demand</text>
                  <text x="350" y="99" fill="#CBD5E1" fontSize="10">via Email, WhatsApp</text>
                  <text x="350" y="114" fill="#CBD5E1" fontSize="10">&amp; Speed Post RPAD</text>
                  <text x="350" y="129" fill="#CBD5E1" fontSize="10">(BNS s.316 / s.42)</text>
                  <text x="350" y="160" fill="#F87171" fontSize="9.5" fontWeight="bold">₹999 / Bulk CSV</text>

                  <path d="M482 105 L500 105" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Step 4 */}
                  <rect x="502" y="30" width="142" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="526" cy="54" r="12" fill="#DC2626" />
                  <text x="526" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                  <text x="546" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">NI s.138 / FIR</text>
                  <text x="514" y="84" fill="#CBD5E1" fontSize="10">Present security</text>
                  <text x="514" y="99" fill="#CBD5E1" fontSize="10">PDCs; file s.138</text>
                  <text x="514" y="114" fill="#CBD5E1" fontSize="10">(20% deposit) or</text>
                  <text x="514" y="129" fill="#CBD5E1" fontSize="10">BNS s.316 FIR</text>
                  <text x="514" y="160" fill="#34D399" fontSize="9.5" fontWeight="bold">Penal Leverage</text>

                  <path d="M646 105 L664 105" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Step 5 */}
                  <rect x="666" y="30" width="144" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="690" cy="54" r="12" fill="#DC2626" />
                  <text x="690" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                  <text x="710" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">MSEFC / Decree</text>
                  <text x="678" y="84" fill="#CBD5E1" fontSize="10">Claim 3x RBI rate,</text>
                  <text x="678" y="99" fill="#CBD5E1" fontSize="10">Order 37 Summary</text>
                  <text x="678" y="114" fill="#CBD5E1" fontSize="10">Suit or Order 34</text>
                  <text x="678" y="129" fill="#CBD5E1" fontSize="10">Mortgage Decree</text>
                  <text x="678" y="160" fill="#FBBF24" fontSize="9.5" fontWeight="bold">Asset Attachment</text>
                </svg>
              </div>

              {/* Mobile Stacked Flowchart Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    n: "1",
                    t: "Lab COA & Flock Audit (Day 1–3)",
                    d: "Pull sealed factory batch retention mycotoxin/aflatoxin reports and daily supervisor mortality logs.",
                  },
                  {
                    n: "2",
                    t: "BSA s.63 Evidence Lock",
                    d: "Reconcile FCR bonuses/rebates and certify GST invoices, E-Way bills, weighbridge slips, and WhatsApp chats.",
                  },
                  {
                    n: "3",
                    t: "Advocate Estoppel & BNS s.316 Notice",
                    d: "Serve 7–15 day statutory demand via Email, WhatsApp, and Speed Post RPAD demanding lab proof or restitution.",
                  },
                  {
                    n: "4",
                    t: "NI Act s.138 PDC Prosecution / FIR",
                    d: "Present security PDCs; file s.138 complaint (seek 20% s.143A deposit) or BNS s.316 FIR for bird lifting.",
                  },
                  {
                    n: "5",
                    t: "MSEFC 3x Interest / Order 37 / Mortgage",
                    d: "Recover principal + 3x RBI compound interest via MSEFC Samadhaan, Order 37 CPC, or Order 34 mortgage execution.",
                  },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 flex items-start gap-3"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{s.t}</p>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{s.d}</p>
                    </div>
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Enforcement Matrix for Feed Mills &amp; Integrators
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Default Scenario</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Statutory Deadline</th>
                      <th className="p-3.5 font-bold">Creditor Remedy &amp; Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Oral &ldquo;High FCR / Viral Mortality&rdquo; Feed Blame
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Sale of Goods Act, 1930 s.42 &amp; s.16
                      </td>
                      <td className="p-3.5 text-slate-700">Reasonable time (pre-consumption)</td>
                      <td className="p-3.5 text-slate-700">
                        Deemed acceptance + Batch Retention Mycotoxin Lab COA estops oral quality excuses
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Contract Broiler &ldquo;Bird Lifting Theft&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        BNS 2023 s.316 &amp; Contract Act ss.148–161
                      </td>
                      <td className="p-3.5 text-slate-700">Immediate (48–72 hr notice)</td>
                      <td className="p-3.5 text-slate-700">
                        Criminal Breach of Trust FIR against bailee farmer + market-value recovery
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        60–120 Day Harvest Security PDC Bounce
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NI Act, 1881 ss.138, 139 &amp; 143A
                      </td>
                      <td className="p-3.5 text-slate-700">30d notice; 15d cure; 30d filing</td>
                      <td className="p-3.5 text-slate-700">
                        Magistrate prosecution + 20% interim compensation (<em>Sripati Singh</em>)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Overdue Udyam Feed Mill Invoices
                      </td>
                      <td className="p-3.5 text-slate-700">
                        MSMED Act, 2006 ss.15–18 &amp; 24
                      </td>
                      <td className="p-3.5 text-slate-700">45-day statutory ceiling</td>
                      <td className="p-3.5 text-slate-700">
                        3x RBI compound interest (monthly rests) + 75% pre-deposit for buyer appeals
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Equitable Mortgage / Personal Guarantee
                      </td>
                      <td className="p-3.5 text-slate-700">
                        TPA s.58(f), Contract Act s.128, CPC Order XXXIV / XXXVIII R.5
                      </td>
                      <td className="p-3.5 text-slate-700">3–12 yrs (Limitation Act)</td>
                      <td className="p-3.5 text-slate-700">
                        Co-extensive guarantor liability + urgent attachment before judgment
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Feed Credit Default &amp; Bird-Lifting Playbooks (Interactive)
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select an operational failure mode below to view the dealer/farmer tactic, the
                exact statutory counter-argument, and the 3-step advocate execution plan:
              </p>
              <FeedDealerScenarioTabs />
            </section>

            {/* Section 6: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Ledger: ₹28.5 Lakh Aqua &amp; Broiler Credit
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a typical regional Udyam-registered aqua and poultry feed manufacturer
                recovering an overdue <strong>₹28,50,000</strong> ledger across two defaulting
                accounts in West Godavari (AP) and Namakkal (TN) delayed by 180 days beyond the
                45-day MSMED statutory limit (assuming an illustrative RBI Bank Rate of 6.75%, i.e.,{" "}
                <strong>3x = 20.25% p.a.</strong> compounded monthly):
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-700 pb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                      Principal Overdue Ledger
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-white mt-1">₹28,50,000</p>
                    <p className="text-xs text-slate-400">60 MT shrimp + broiler feed + lifted flock</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold">
                      MSMED s.16 Compound Interest (180d)
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">
                      + ₹2,99,840
                    </p>
                    <p className="text-xs text-slate-400">At 20.25% p.a. monthly rests (6 months)</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">
                      Total Statutory Claim
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-amber-400 mt-1">
                      ₹31,49,840
                    </p>
                    <p className="text-xs text-slate-400">Plus ₹999 notice / MSEFC filing costs</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong>Why this forces settlement:</strong> Once served with an Advocate Notice
                  quantifying <strong>₹31.50 lakh</strong> (including 3x RBI interest under MSMED
                  s.16), attaching the factory&apos;s Batch Retention Mycotoxin Lab Report, and
                  warning of <strong>NI Act s.138</strong> presentation (20% interim deposit) or{" "}
                  <strong>BNS s.316</strong> FIR for bird lifting, most solvent dealers settle
                  before litigation to avoid criminal summons and 75% appeal pre-deposit.
                </p>
              </div>
            </section>

            {/* Section 7: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BSA 2023 s.63 Feed Mill, Lab &amp; Farm Evidence Checklist
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Batch Retention Sample Lab COA",
                    desc: "Sealed factory control sample mycotoxin, aflatoxin, moisture & protein report matching invoice batch codes.",
                  },
                  {
                    title: "2. Signed Dealership / Integration Deed",
                    desc: "Credit limit terms, bailment ownership clause for DOCs/feed, and jurisdiction/arbitration clause.",
                  },
                  {
                    title: "3. GST Invoices, E-Way Bills & LRs",
                    desc: "Signed weighbridge slips, factory gate-passes, and transporter bilty proving physical bag delivery.",
                  },
                  {
                    title: "4. Daily Farm Mortality & FCR Logs",
                    desc: "Area supervisor visit sheets, vet prescriptions, and GPS-tagged shed inspection photos (for BNS s.316).",
                  },
                  {
                    title: "5. Security PDCs & Return Memos",
                    desc: "Original bounced cheques, bank return memos with reason codes, and reconciled ledger balance.",
                  },
                  {
                    title: "6. Equitable Mortgage / Guarantee Deed",
                    desc: "Title-deed deposit memo (TPA s.58(f)) and co-extensive guarantor KYC/PAN records.",
                  },
                  {
                    title: "7. WhatsApp & SMS Ledger Admissions",
                    desc: "Exported chats showing balance confirmation, part-payment promises, or zero prior quality complaints.",
                  },
                  {
                    title: "8. BSA 2023 Section 63 Certificate",
                    desc: "Signed electronic-record certificate from your ERP/accounts head authenticating digital ledgers & logs.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Dual-Track B2B CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Launch Single ₹999 Test Notice or Bulk Feed Dealer CSV
                </h2>
              </div>
              <FeedDealerCTA />
            </section>

            {/* Section 9: Related Tools, Templates & IND-21 Sibling Guides */}
            <section
              id="heading-related"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  IND-21 Agri-Feed Calculators, Templates &amp; Sibling Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    href: "/industries/agri-inputs-cold-storage-food-processing-recovery",
                    tag: "Parent Hub",
                    title: "Agri-Inputs, Cold Storage & Food Processing Hub",
                  },
                  {
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    tag: "T1 Calculator",
                    title: "MSME 3x RBI Compound Interest Calculator",
                  },
                  {
                    href: "/tools/cheque-bounce-deadline-calculator",
                    tag: "T1 Calculator",
                    title: "NI Act s.138 Cheque Bounce Deadline Calculator",
                  },
                  {
                    href: "/templates/security-cheque-presentation-intimation-cum-ledger-notice",
                    tag: "P1 Template",
                    title: "Security Cheque Presentation & Ledger Notice Format",
                  },
                  {
                    href: "/templates/msme-delayed-payment-demand-notice",
                    tag: "P1 Template",
                    title: "MSME Delayed Payment Statutory Demand Notice",
                  },
                  {
                    href: "/agrochemical-pesticide-seed-dealer-seasonal-credit-default-recovery",
                    tag: "IND-21 Spoke",
                    title: "Agrochemical & Seed Dealer Credit Default Recovery",
                  },
                  {
                    href: "/rice-dal-flour-sugar-edible-oil-mill-wholesale-buyer-recovery",
                    tag: "IND-21 Spoke",
                    title: "Rice, Dal, Flour & Edible-Oil Mill Buyer Recovery",
                  },
                  {
                    href: "/distributor-dealer-dues-recovery",
                    tag: "Core B2B",
                    title: "Distributor & Dealer Dues Recovery in India",
                  },
                  {
                    href: "/cheque-bounce-notice-timeline-section-138",
                    tag: "Core B2B",
                    title: "Section 138 Cheque Bounce Notice Timeline",
                  },
                  {
                    href: "/hi/legal-notice-kaise-bheje",
                    tag: "Hindi SOP",
                    title: "व्यापारी लीगल नोटिस कैसे भेजें (Hindi Guide)",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex flex-col justify-between p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {link.tag}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {link.title} &rarr;
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FAQs: Poultry, Cattle &amp; Shrimp/Aqua-Feed Credit Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
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

            {/* Section 11: Statutory Authorities & Official Portals */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Official Statutory Portals &amp; Bare Act Authorities
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.title} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 underline-offset-2"
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
