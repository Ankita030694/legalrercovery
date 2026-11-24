import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import AgriKccTableOfContents from "./AgriKccTableOfContents";
import AgriKccScenarioTabs from "./AgriKccScenarioTabs";
import AgriKccNoticeCTA from "./AgriKccNoticeCTA";

export const revalidate = 86400;

const PAGE_PATH = "/agriculture-kcc-kisan-credit-card-non-wilful-npa-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Recovering High-Value Agriculture & KCC NPAs Legally: Navigating SARFAESI Section 31(i), State RRCs & Lok Adalats";

const META_TITLE =
  "Agriculture & KCC NPA Recovery: s.31(i), RRC & Lok Adalat";

const META_DESCRIPTION =
  "Agricultural land is exempt under SARFAESI s.31(i), not commercial agri-ventures. Bank & RRB guide to Blue Coast test, State RRC Acts & Lok Adalats.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "kisan credit card kcc and agriculture npa legal recovery banks",
    "section 31g sarfaesi exemption agricultural land",
    "section 31i sarfaesi agricultural land blue coast hotels",
    "state public moneys recovery act revenue recovery certificate",
    "allied agriculture poultry cold storage sarfaesi applicability",
    "lok adalat and rrc recovery for kcc defaults",
    "tractor and farm equipment hypothecation recovery",
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
        alt: formatAltText(
          "Agriculture and KCC Bank NPA Recovery Playbook: SARFAESI Section 31(i), State RRC and Lok Adalat"
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

const COURT_PRECEDENTS = [
  {
    title: "Actual Use & Intention Test Overrides Revenue Record Entries",
    parties: "ITC Ltd. v. Blue Coast Hotels Ltd. & Ors.",
    citation: "(2018) 15 SCC 99 · Supreme Court of India",
    holding:
      "The Supreme Court ruled that mere classification of land as 'agricultural' in state revenue records (Khasra, Khatauni, or 7/12 extract) does NOT confer Section 31(i) SARFAESI immunity. Courts must examine the actual purpose of the loan, intention of the parties at mortgage creation, and real physical usage of the parcel. Land committed to commercial enterprise, hospitality, or allied agro-industry falls squarely within SARFAESI enforcement.",
    creditorTakeaway:
      "Banks and RRBs can enforce SARFAESI s.13(2) & s.14 against commercial farmhouses, poultry sheds, cold storages, and agro-processing plots even when the borrower deliberately never updated local Tehsil revenue records.",
  },
  {
    title: "Agricultural Status Is a Question of Fact on Date of Mortgage",
    parties: "Indian Bank & Anr. v. K. Pappireddiyar & Anr.",
    citation: "(2018) 18 SCC 252 · Supreme Court of India",
    holding:
      "Clarifying Blue Coast Hotels, the Supreme Court held that whether secured land is 'agricultural land' exempt under Section 31(i) is a question of fact determined by actual agricultural operations carried out on the date the security interest was created—not speculative future farming or stale ancestral revenue entries.",
    creditorTakeaway:
      "Pre-sanction valuation reports, CERSAI security descriptions, and geo-tagged branch field-inspection photos taken at mortgage creation become decisive litigation shields before DRT.",
  },
  {
    title: "Burden of Proving Section 31(i) Immunity Rests on the Borrower",
    parties: "K. Sreedhar v. Raus Constructions Pvt. Ltd. & Ors.",
    citation: "(2023) 11 SCC 169 · Supreme Court of India",
    holding:
      "The Supreme Court explicitly placed the evidentiary burden on the defaulting borrower claiming Section 31(i) protection. Unless the borrower produces affirmative proof of actual agricultural operations at mortgage creation (beyond bare revenue extracts), DRTs and High Courts cannot interdict a bank's SARFAESI auction or possession measures.",
    creditorTakeaway:
      "Authorized Officers must cite K. Sreedhar in every Section 13(3A) representation reply to defeat boilerplate Section 31(i) stalling objections before they reach Section 17 DRT stay applications.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Does SARFAESI Section 31(i) (often mis-searched as Section 31(g)) bar banks from recovering KCC and agricultural loans completely?",
    a: "No. Section 31(i) of the SARFAESI Act, 2002 (distinct from Section 31(g) which covers properties not liable to attachment under CPC Section 60) bars only non-judicial SARFAESI enforcement against genuine agricultural land. It does NOT bar banks or Regional Rural Banks (RRBs) from recovering through State Revenue Recovery Certificates (RRCs), Pre-Litigation Lok Adalats under Section 20 of the Legal Services Authorities Act, e-DRT Section 19 Original Applications (for exposures ≥ ₹20 Lakh), civil recovery suits, or repossession of hypothecated tractors and machinery.",
  },
  {
    q: "Can a bank invoke SARFAESI against a poultry farm, dairy unit, cold storage, or commercial farmhouse built on agricultural land?",
    a: "Yes, provided the lender satisfies the 'actual use and intention' test laid down by the Supreme Court in ITC Ltd. v. Blue Coast Hotels Ltd. (2018) 15 SCC 99 and K. Sreedhar v. Raus Constructions Pvt. Ltd. (2023) 11 SCC 169. If the plot houses commercial poultry sheds, cold rooms, rice/dal mills, warehouses, or non-agricultural commercial structures funded through an allied-agri or business loan, revenue records describing the land as 'agricultural' do not shield the borrower from SARFAESI Section 13(2) and Section 14 action.",
  },
  {
    q: "When does a Kisan Credit Card (KCC) or crop loan legally turn NPA under RBI IRACP norms?",
    a: "Unlike regular EMI loans that follow the 90-day delinquency clock, agricultural advances follow crop-season NPA norms under RBI's IRACP Master Circular. A loan granted for short-duration crops (such as paddy, wheat, cotton, or seasonal Kharif/Rabi KCC limits) is classified as NPA if the installment of principal or interest remains overdue for two crop seasons. A loan granted for long-duration crops (such as sugarcane, banana, or orchards with crop cycles exceeding one year) turns NPA if overdue for one crop season.",
  },
  {
    q: "How does a State Revenue Recovery Certificate (RRC) work for banks and RRBs when farmland is genuinely exempt under Section 31(i)?",
    a: "Most Indian states have enacted Agricultural Credit Operations and Miscellaneous Provisions (Banks) Acts or Public Moneys (Recovery of Dues) Acts (e.g., in Uttar Pradesh, Madhya Pradesh, Maharashtra, Rajasthan, Karnataka, and Haryana). Under these statutes, a Scheduled Commercial Bank or RRB submits a certified NPA ledger and notice proof to the Prescribed Authority (Sub-Divisional Officer / District Collector / Tehsildar), who issues a Revenue Recovery Certificate recovering the bank's dues directly as 'arrears of land revenue'—without filing a slow civil suit.",
  },
  {
    q: "Can banks repossess a hypothecated tractor or combine harvester despite SARFAESI Section 31(i)?",
    a: "Yes. SARFAESI Section 31(i) applies exclusively to immovable agricultural land, never to movable hypothecated farm equipment. Banks can recall the tractor loan via advocate notice, enforce hypothecation rights endorsed on the RC (Motor Vehicles Act Form 34) in strict compliance with RBI Fair Practices guidelines (prior written recall, local police pre- and post-intimation, signed inventory panchnama, independent valuation, and pre-sale redemption notice), and recover any auction deficit via Lok Adalat, Section 25 PSS Act / Section 138 NI Act, or State RRC.",
  },
  {
    q: "How should Regional Rural Banks handle genuine non-wilful KCC defaults stalled by political loan-waiver rumours?",
    a: "Heavy-handed coercive action against small genuine cultivators creates local friction and reputational risk, while total inaction encourages strategic default. The highest-yield institutional SOP is two-tiered: dispatch bilingual advocate pre-litigation notices explaining loss of the 3% Prompt Repayment Incentive (PRI), CIBIL credit freeze, and absence of any notified statutory waiver, then batch willing cultivators into 0%-court-fee harvest-aligned National or Taluka Lok Adalats for binding Section 21 OTS awards—escalating only affluent wilful holdouts to State RRC or DRT.",
  },
  {
    q: "If an agricultural borrower has a composite loan above ₹20 Lakh secured by both farmland and a town house, can the bank file an e-DRT OA?",
    a: "Yes. The Recovery of Debts and Bankruptcy (RDB) Act, 1993 does NOT contain an agricultural land exclusion comparable to SARFAESI Section 31(i). A bank can simultaneously initiate SARFAESI s.13(2)/14 against the non-agricultural town house or commercial godown, invoke personal guarantees under Contract Act Section 128, and file a Section 19 e-DRT Original Application covering the entire ₹20 Lakh+ composite exposure to attach unmortgaged urban assets and accounts.",
  },
];

const PRIMARY_SOURCES = [
  {
    title:
      "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 — Section 31(i) & Section 13 — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title:
      "Recovery of Debts and Bankruptcy (RDB) Act, 1993 — Section 19 Original Applications (≥ ₹20 Lakh) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1958",
  },
  {
    title:
      "Legal Services Authorities Act, 1987 — Sections 19, 20 & 21 (Pre-Litigation & National Lok Adalat Consent Awards) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1924",
  },
  {
    title:
      "Reserve Bank of India (RBI) Master Circular — Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP) for Agricultural Advances",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx",
  },
  {
    title:
      "Reserve Bank of India (RBI) Master Direction — Kisan Credit Card (KCC) Scheme & Fair Lending Practice (Penal Charges in Loan Accounts)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Record Admissibility) & Bankers' Books Evidence Act, 1891 (Section 2A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "NALSA (National Legal Services Authority) — National Lok Adalat Schedules & Bank Pre-Litigation Settlement Guidelines",
    url: "https://nalsa.gov.in/lok-adalat",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  url: CANONICAL_URL,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  inLanguage: "en-IN",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/about`,
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
    "Kisan Credit Card (KCC) NPA Recovery",
    "SARFAESI Act Section 31(i) Agricultural Land Exemption",
    "ITC Ltd. v. Blue Coast Hotels Actual-Use Test",
    "State Revenue Recovery Certificate (RRC)",
    "Pre-Litigation Lok Adalat for Banks and RRBs",
  ],
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Banks & RRBs Recover High-Value Agriculture & KCC NPAs Legally in India",
  description:
    "Four-track institutional workflow separating Blue Coast SARFAESI-eligible commercial agri-assets from genuine farmland governed by State Revenue Recovery Certificates (RRCs), Tractor Hypothecation, and Pre-Litigation Lok Adalats.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Verify RBI Crop-Season NPA Status & Segregate Collateral Type",
      text: "Confirm 2-crop-season (short duration) or 1-crop-season (long duration) IRACP delinquency and split security into (a) genuine cultivated farmland, (b) commercial allied-agri real estate, (c) hypothecated tractors/machinery, and (d) urban/guarantor collateral.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Run the Blue Coast Hotels Geo-Tagged Commercial-Use Audit",
      text: "Inspect allied-agri parcels (poultry sheds, cold storages, rice mills, commercial farmhouses) and compile geo-tagged photos, commercial electricity tariffs, GST/FSSAI licenses, and original sanction memos to defeat false SARFAESI Section 31(i) objections.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Dispatch Bilingual Advocate Loan Recall & Subvention-Loss Notices",
      text: "Serve RBI Penal-Charge compliant recall notices via Speed Post RPAD, WhatsApp, and Email with BSA 2023 Section 63 certificates—clarifying loss of Prompt Repayment Incentive (PRI) and neutralizing political loan-waiver rumours.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Route Accounts to Track-Matched Statutory Enforcement",
      text: "Initiate SARFAESI s.13(2)/14 + e-DRT OA on commercial agri/urban assets, file District Collector State RRC applications for solvent farmland holdouts, execute RBI-compliant tractor repossession, and batch genuine non-wilful KCC farmers into 0%-fee harvest Lok Adalats.",
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
      name: "Banks & Institutional Loan Recovery",
      item: `${SITE_URL}/industries/banks-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Agriculture & KCC NPA Recovery Playbook",
      item: CANONICAL_URL,
    },
  ],
};

export default function AgricultureKccNpaRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data (JSON-LD) */}
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-01 Rural &amp; Agri Banking Playbook</span>
            <span className="text-red-700">&bull;</span>
            <span>SARFAESI s.31(i) &middot; State RRC &middot; Lok Adalat</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40–60 Word Executive Creditor Summary Box with Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/banks-loan-recovery"
              className="text-red-300 underline underline-offset-2 hover:text-white font-bold"
            >
              Indian Banks Loan Recovery Hub
            </Link>
            , SARFAESI Section 31(i) exempts only genuinely cultivated farmland—never commercial poultry sheds, cold storages, farmhouses, or hypothecated tractors (*ITC v. Blue Coast Hotels*). For truly exempt KCC parcels, Regional Rural Banks (RRBs) and commercial lenders recover legally via State Revenue Recovery Certificates (RRCs), 0%-fee harvest Lok Adalats, and e-DRT Original Applications (≥ ₹20 Lakh).
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">
                s.31(i) Test
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Actual use beats 7/12 &amp; Khasra entries (*Blue Coast*)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                2 / 1 Seasons
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                RBI IRACP NPA trigger (short vs long duration crops)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                0% Court Fee
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Pre-Litigation National &amp; Taluka Lok Adalat awards
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                State RRC
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Collector land-revenue arrears recovery for exempt plots
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] sm:text-xs text-slate-400">
            <span>
              Prepared for: <strong className="text-slate-200">Rural / Agri Banking Recovery Heads &amp; RRB General Managers</strong>
            </span>
            <span>&bull;</span>
            <span>
              Legal Review: <strong className="text-slate-200">Anuj Anand Malik</strong> (Advocate, AMA Legal Solutions)
            </span>
            <span>&bull;</span>
            <span>Updated: November 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Banks Loan Recovery",
                href: "/industries/banks-loan-recovery",
              },
              {
                label: "Agriculture & KCC NPA Recovery",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <AgriKccTableOfContents />

          {/* Right Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-waiver-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why Agriculture &amp; KCC NPAs Stall Between Waiver Rumours &amp; s.31(i)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across Scheduled Commercial Banks, Regional Rural Banks (RRBs), Small Finance Banks, and District Central Cooperative Banks (DCCBs), <strong>kisan credit card (KCC) and agriculture NPA legal recovery</strong> suffers from a twin operational blind spot that costs lenders thousands of crores in avoidable provisioning every financial year.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                First, affluent strategic defaulters who borrowed ₹25 Lakh to ₹10 Crore+ for commercial poultry farms, dairy complexes, controlled-atmosphere cold storages, rice mills, or peri-urban farmhouses routinely produce outdated village <em>Khasra</em>, <em>Khatauni</em>, or <em>7/12</em> revenue records describing the land as agricultural. Branch Authorized Officers frequently panic at the mention of <strong>SARFAESI Section 31(i)</strong> (often mistakenly searched by practitioners as <em>Section 31(g) SARFAESI exemption agricultural land</em>) and abandon non-judicial enforcement altogether.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Second, across genuine rural KCC clusters (₹1.60 Lakh to ₹15 Lakh), solvent cultivators delay Kharif and Rabi renewals whenever local political rumours circulate about impending state farm-loan waivers. Because branch managers lack an economical, non-confrontational legal escalation layer between informal field visits and costly civil suits, accounts quietly cross RBI&apos;s <strong>two-crop-season</strong> (short-duration) or <strong>one-crop-season</strong> (long-duration) IRACP delinquency thresholds into Sub-Standard and Doubtful NPA buckets.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                  Statutory Precision Check: Section 31(i) vs Section 31(g) of SARFAESI Act, 2002
                </p>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  In branch legal queries, recovery officers often conflate <strong>Section 31(g)</strong> and <strong>Section 31(i)</strong>. Under the SARFAESI Act, 2002, <strong>Section 31(i)</strong> is the exact clause excluding <em>&ldquo;any security interest created in agricultural land&rdquo;</em>, whereas <strong>Section 31(g)</strong> excludes properties not liable to attachment or sale under the first proviso to Section 60(1) of the Code of Civil Procedure, 1908 (such as an agriculturist&apos;s essential implements of husbandry, seed grain, and dwelling house immediately appurtenant to cultivation). Citing the exact statutory sub-clause accurately prevents technical objections before DRT.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section
              id="heading-blue-coast"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  SARFAESI Section 31(i) &amp; The Blue Coast Actual-Use Test
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Parliament enacted Section 31(i) to protect genuine subsistence and commercial crop cultivators from summary bank dispossession—not to hand real estate developers, poultry integrators, and warehouse promoters a permanent loophole. Three binding Supreme Court decisions now arm bank Authorized Officers to pierce sham agricultural land claims decisively:
              </p>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative bg-slate-50 border border-slate-200 rounded-xl p-5 pl-6 overflow-hidden"
                  >
                    <span
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]"
                      aria-hidden="true"
                    />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                        {item.parties}
                      </h3>
                      <span className="text-[11px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                        {item.citation}
                      </span>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-2">
                      {item.title}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      {item.holding}
                    </p>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                      <p className="text-xs text-emerald-950 leading-relaxed">
                        <strong className="text-emerald-800">
                          Bank Recovery Takeaway:
                        </strong>{" "}
                        {item.creditorTakeaway}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-5 space-y-2.5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                  Allied Agriculture SARFAESI Eligibility Checklist (Pre-13(2) Triage)
                </p>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Before issuing a{" "}
                  <Link
                    href="/law/sarfaesi-section-13-2-demand-notice-bank-guide"
                    className="text-red-300 underline underline-offset-2 hover:text-white font-semibold"
                  >
                    SARFAESI Section 13(2) demand notice
                  </Link>{" "}
                  on an allied-agri facility (poultry shed, commercial dairy, cold storage, polyhouse agribusiness, cotton ginning, or agro-processing plant), verify at least <strong>three</strong> of these five Blue Coast indicators: (1) loan sanctioned for commercial/industrial/allied-agri business rather than crop cultivation, (2) permanent concrete structures, sheds, machinery foundations, or boundary walls on site, (3) commercial/industrial electricity tariff meter rather than rural agricultural pump feeder, (4) GST, FSSAI, Pollution Control Board, or Factory Act registration at the plot address, and (5) borrower&apos;s own valuation report or conversion application acknowledging non-agricultural economic use.
                </p>
              </div>
            </section>

            {/* Section 3: Decision Tree SVG + Mobile Stacked Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Agri-Asset Classification Decision Tree: SARFAESI vs RRC vs Adalat
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every rural branch and Zonal Stressed Asset Cell must triage agricultural NPAs through a four-branch legal filter <strong>before</strong> spending legal fees or triggering borrower injunctions. Use the operational decision flow below—or run exact exposure thresholds through our{" "}
                <Link
                  href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                  className="text-[#DC2626] font-bold underline underline-offset-2 hover:text-[#B91C1C]"
                >
                  SARFAESI &amp; DRT Bank Recovery Forum Calculator
                </Link>
                .
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-50 border border-slate-200 rounded-2xl p-4 overflow-x-auto">
                <svg
                  width={820}
                  height={350}
                  viewBox="0 0 820 350"
                  role="img"
                  aria-label="Agriculture and KCC NPA Legal Recovery Decision Tree comparing Blue Coast SARFAESI, State RRC, Tractor Hypothecation, and Lok Adalat"
                  className="w-full h-auto max-w-[820px] mx-auto"
                >
                  <defs>
                    <marker
                      id="arrow-slate"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#475569" />
                    </marker>
                  </defs>

                  {/* Top Trigger Node */}
                  <rect
                    x="220"
                    y="12"
                    width="380"
                    height="52"
                    rx="12"
                    fill="#0F172A"
                  />
                  <text
                    x="410"
                    y="34"
                    textAnchor="middle"
                    fill="#F87171"
                    fontSize="10"
                    fontWeight="700"
                  >
                    TRIGGER: RBI IRACP AGRI / KCC NPA (2 SHORT / 1 LONG CROP SEASON)
                  </text>
                  <text
                    x="410"
                    y="52"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="800"
                  >
                    Step 1: Advocate Recall Notice + Collateral Classification Audit
                  </text>

                  {/* Connector lines to 4 branches */}
                  <path
                    d="M 410 64 L 410 92 M 105 92 L 715 92 M 105 92 L 105 114 M 308 92 L 308 114 M 512 92 L 512 114 M 715 92 L 715 114"
                    stroke="#475569"
                    strokeWidth="2"
                    fill="none"
                  />
                  <line
                    x1="105"
                    y1="108"
                    x2="105"
                    y2="116"
                    stroke="#475569"
                    strokeWidth="2"
                    markerEnd="url(#arrow-slate)"
                  />
                  <line
                    x1="308"
                    y1="108"
                    x2="308"
                    y2="116"
                    stroke="#475569"
                    strokeWidth="2"
                    markerEnd="url(#arrow-slate)"
                  />
                  <line
                    x1="512"
                    y1="108"
                    x2="512"
                    y2="116"
                    stroke="#475569"
                    strokeWidth="2"
                    markerEnd="url(#arrow-slate)"
                  />
                  <line
                    x1="715"
                    y1="108"
                    x2="715"
                    y2="116"
                    stroke="#475569"
                    strokeWidth="2"
                    markerEnd="url(#arrow-slate)"
                  />

                  {/* Branch 1: Commercial Allied Agri */}
                  <rect
                    x="15"
                    y="120"
                    width="180"
                    height="96"
                    rx="10"
                    fill="#FEF2F2"
                    stroke="#DC2626"
                    strokeWidth="1.5"
                  />
                  <text
                    x="105"
                    y="140"
                    textAnchor="middle"
                    fill="#DC2626"
                    fontSize="10"
                    fontWeight="800"
                  >
                    TRACK A · NON-EXEMPT
                  </text>
                  <text
                    x="105"
                    y="158"
                    textAnchor="middle"
                    fill="#0F172A"
                    fontSize="11.5"
                    fontWeight="800"
                  >
                    Poultry / Cold Storage /
                  </text>
                  <text
                    x="105"
                    y="173"
                    textAnchor="middle"
                    fill="#0F172A"
                    fontSize="11.5"
                    fontWeight="800"
                  >
                    Commercial Farmhouse
                  </text>
                  <text
                    x="105"
                    y="194"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="10"
                  >
                    Fails s.31(i) under Blue Coast
                  </text>
                  <text
                    x="105"
                    y="207"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="10"
                  >
                    Actual-Use Test
                  </text>

                  {/* Branch 2: Genuine Farmland High-Value */}
                  <rect
                    x="218"
                    y="120"
                    width="180"
                    height="96"
                    rx="10"
                    fill="#FFFBEB"
                    stroke="#D97706"
                    strokeWidth="1.5"
                  />
                  <text
                    x="308"
                    y="140"
                    textAnchor="middle"
                    fill="#B45309"
                    fontSize="10"
                    fontWeight="800"
                  >
                    TRACK B · EXEMPT LAND
                  </text>
                  <text
                    x="308"
                    y="158"
                    textAnchor="middle"
                    fill="#0F172A"
                    fontSize="11.5"
                    fontWeight="800"
                  >
                    Solvent KCC / Land Holdout
                  </text>
                  <text
                    x="308"
                    y="173"
                    textAnchor="middle"
                    fill="#0F172A"
                    fontSize="11.5"
                    fontWeight="800"
                  >
                    (&gt; ₹3L Wilful Default)
                  </text>
                  <text
                    x="308"
                    y="194"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="10"
                  >
                    Genuine crop land barred
                  </text>
                  <text
                    x="308"
                    y="207"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="10"
                  >
                    under SARFAESI s.31(i)
                  </text>

                  {/* Branch 3: Hypothecated Tractor / Machinery */}
                  <rect
                    x="422"
                    y="120"
                    width="180"
                    height="96"
                    rx="10"
                    fill="#F0F9FF"
                    stroke="#0284C7"
                    strokeWidth="1.5"
                  />
                  <text
                    x="512"
                    y="140"
                    textAnchor="middle"
                    fill="#0369A1"
                    fontSize="10"
                    fontWeight="800"
                  >
                    TRACK C · MOVABLE ASSET
                  </text>
                  <text
                    x="512"
                    y="158"
                    textAnchor="middle"
                    fill="#0F172A"
                    fontSize="11.5"
                    fontWeight="800"
                  >
                    Tractor, Harvester &amp;
                  </text>
                  <text
                    x="512"
                    y="173"
                    textAnchor="middle"
                    fill="#0F172A"
                    fontSize="11.5"
                    fontWeight="800"
                  >
                    Hypothecated Equipment
                  </text>
                  <text
                    x="512"
                    y="194"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="10"
                  >
                    Outside s.31(i) land shield;
                  </text>
                  <text
                    x="512"
                    y="207"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="10"
                  >
                    Form 34 RC lien applies
                  </text>

                  {/* Branch 4: Non-Wilful Small KCC */}
                  <rect
                    x="625"
                    y="120"
                    width="180"
                    height="96"
                    rx="10"
                    fill="#ECFDF5"
                    stroke="#059669"
                    strokeWidth="1.5"
                  />
                  <text
                    x="715"
                    y="140"
                    textAnchor="middle"
                    fill="#047857"
                    fontSize="10"
                    fontWeight="800"
                  >
                    TRACK D · NON-WILFUL KCC
                  </text>
                  <text
                    x="715"
                    y="158"
                    textAnchor="middle"
                    fill="#0F172A"
                    fontSize="11.5"
                    fontWeight="800"
                  >
                    Crop-Stress / Waiver-Myth
                  </text>
                  <text
                    x="715"
                    y="173"
                    textAnchor="middle"
                    fill="#0F172A"
                    fontSize="11.5"
                    fontWeight="800"
                  >
                    Small KCC (≤ ₹5L–₹15L)
                  </text>
                  <text
                    x="715"
                    y="194"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="10"
                  >
                    Needs high-volume, 0%-fee
                  </text>
                  <text
                    x="715"
                    y="207"
                    textAnchor="middle"
                    fill="#475569"
                    fontSize="10"
                  >
                    seasonal resolution
                  </text>

                  {/* Down arrows to bottom enforcement boxes */}
                  <line
                    x1="105"
                    y1="216"
                    x2="105"
                    y2="246"
                    stroke="#475569"
                    strokeWidth="2"
                    markerEnd="url(#arrow-slate)"
                  />
                  <line
                    x1="308"
                    y1="216"
                    x2="308"
                    y2="246"
                    stroke="#475569"
                    strokeWidth="2"
                    markerEnd="url(#arrow-slate)"
                  />
                  <line
                    x1="512"
                    y1="216"
                    x2="512"
                    y2="246"
                    stroke="#475569"
                    strokeWidth="2"
                    markerEnd="url(#arrow-slate)"
                  />
                  <line
                    x1="715"
                    y1="216"
                    x2="715"
                    y2="246"
                    stroke="#475569"
                    strokeWidth="2"
                    markerEnd="url(#arrow-slate)"
                  />

                  {/* Bottom Execution Boxes */}
                  <rect
                    x="15"
                    y="252"
                    width="180"
                    height="82"
                    rx="10"
                    fill="#1E293B"
                  />
                  <text
                    x="105"
                    y="274"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="800"
                  >
                    SARFAESI s.13(2) &amp; s.14
                  </text>
                  <text
                    x="105"
                    y="293"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="10"
                  >
                    + e-DRT s.19 OA (≥ ₹20L)
                  </text>
                  <text
                    x="105"
                    y="310"
                    textAnchor="middle"
                    fill="#F87171"
                    fontSize="9.5"
                    fontWeight="700"
                  >
                    Attach Geo-Tag &amp; Tariff Proof
                  </text>

                  <rect
                    x="218"
                    y="252"
                    width="180"
                    height="82"
                    rx="10"
                    fill="#1E293B"
                  />
                  <text
                    x="308"
                    y="274"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="800"
                  >
                    State Collector RRC
                  </text>
                  <text
                    x="308"
                    y="293"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="10"
                  >
                    Arrears of Land Revenue
                  </text>
                  <text
                    x="308"
                    y="310"
                    textAnchor="middle"
                    fill="#FBBF24"
                    fontSize="9.5"
                    fontWeight="700"
                  >
                    + e-DRT OA if ≥ ₹20 Lakh
                  </text>

                  <rect
                    x="422"
                    y="252"
                    width="180"
                    height="82"
                    rx="10"
                    fill="#1E293B"
                  />
                  <text
                    x="512"
                    y="274"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="800"
                  >
                    Lawful Repossession
                  </text>
                  <text
                    x="512"
                    y="293"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="10"
                  >
                    Police Intimation + Auction
                  </text>
                  <text
                    x="512"
                    y="310"
                    textAnchor="middle"
                    fill="#38BDF8"
                    fontSize="9.5"
                    fontWeight="700"
                  >
                    + PSS s.25 / NI s.138 Shortfall
                  </text>

                  <rect
                    x="625"
                    y="252"
                    width="180"
                    height="82"
                    rx="10"
                    fill="#1E293B"
                  />
                  <text
                    x="715"
                    y="274"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="800"
                  >
                    National / Taluka Lok Adalat
                  </text>
                  <text
                    x="715"
                    y="293"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="10"
                  >
                    Harvest OTS · Section 21 Award
                  </text>
                  <text
                    x="715"
                    y="310"
                    textAnchor="middle"
                    fill="#34D399"
                    fontSize="9.5"
                    fontWeight="700"
                  >
                    0% Fee · Order XXI Decree
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Flowchart Cards */}
              <div className="md:hidden grid grid-cols-1 gap-3">
                {[
                  {
                    track: "Track A · Commercial Allied-Agri (Non-Exempt)",
                    asset: "Poultry Sheds, Cold Storage, Rice Mill, Farmhouse",
                    action:
                      "SARFAESI s.13(2)/14 + Parallel e-DRT OA (≥ ₹20L) backed by Blue Coast geo-tagged commercial-use proof.",
                    tone: "border-red-200 bg-red-50/70",
                  },
                  {
                    track: "Track B · Genuine Cultivated Farmland (Wilful Holdout)",
                    asset: "High-Value KCC & Land-Mortgaged Agri Term Loans",
                    action:
                      "District Collector State Revenue Recovery Certificate (RRC) as land-revenue arrears + e-DRT OA if ≥ ₹20L.",
                    tone: "border-amber-200 bg-amber-50/70",
                  },
                  {
                    track: "Track C · Hypothecated Movable Equipment",
                    asset: "Tractors, Combine Harvesters, Dairy & Cold-Chain Machinery",
                    action:
                      "Advocate recall + RBI-compliant repossession (police intimation, panchnama, pre-sale notice) + PSS s.25/NI s.138 shortfall.",
                    tone: "border-sky-200 bg-sky-50/70",
                  },
                  {
                    track: "Track D · Non-Wilful / Waiver-Rumour KCC Cohort",
                    asset: "Small & Medium KCC Crop Loans (₹50K – ₹15L)",
                    action:
                      "Bilingual advocate recall + 0%-fee harvest-aligned National/Taluka Lok Adalat bulk batching for Section 21 consent awards.",
                    tone: "border-emerald-200 bg-emerald-50/70",
                  },
                ].map((card) => (
                  <div
                    key={card.track}
                    className={`rounded-xl border p-4 space-y-1.5 ${card.tone}`}
                  >
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800">
                      {card.track}
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      {card.asset}
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {card.action}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Dark-Header Statutory Enforcement Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Enforcement Matrix: KCC, Allied Agri &amp; Tractor NPAs
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Regional Rural Bank General Managers and Commercial Bank Agri Recovery Heads must map every NPA bucket to the exact statute that maximizes cash recovery without crossing jurisdictional floors or Section 31(i) prohibitions:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="py-3.5 px-4 font-bold">
                        Facility &amp; Collateral Profile
                      </th>
                      <th className="py-3.5 px-4 font-bold">
                        SARFAESI s.31(i) Status
                      </th>
                      <th className="py-3.5 px-4 font-bold">
                        Primary Recovery Statute
                      </th>
                      <th className="py-3.5 px-4 font-bold">
                        Court Fee / Cost Profile
                      </th>
                      <th className="py-3.5 px-4 font-bold">
                        Target Recovery Window
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        Commercial Poultry, Cold Storage, Rice Mill, Farmhouse
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs">
                          SARFAESI Eligible
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        SARFAESI s.13(2)/13(4)/14 (*Blue Coast*) + e-DRT s.19 OA (≥ ₹20L)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Low (no ad valorem fee for SARFAESI; DRT capped at ₹1.5L)
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        4–9 Months
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        Genuine KCC Crop Loan (Non-Wilful / Waiver Rumour, ≤ ₹15L)
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-bold text-xs">
                          Farmland Exempt
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Advocate Bilingual Recall + Pre-Litigation Lok Adalat (LSA Act s.20/21)
                      </td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        0% Court Fee (Flat Notice Cost)
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        30–90 Days (Harvest Cycle)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        High-Acreage Solvent KCC / Land Holdout (Refuses Lok Adalat)
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-bold text-xs">
                          Farmland Exempt
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        State Agricultural Credit Operations / Public Moneys Act (Collector RRC)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        State collection charges (typically 5%–10% recovered from defaulter)
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        3–8 Months
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        Tractor, Combine Harvester &amp; Farm Machinery Term Loan
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs">
                          Movable — Not Exempt
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Deed of Hypothecation + MV Act Form 34 + PSS s.25 / NI s.138 + Lok Adalat
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Notice + repossession / valuation vendor fees
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        45–120 Days
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        Composite Agri + Urban House / Godown Exposure (≥ ₹20L)
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-block px-2 py-0.5 rounded bg-sky-50 text-sky-800 border border-sky-200 font-bold text-xs">
                          Split Enforcement
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        SARFAESI on Urban Parcel + e-DRT s.19 OA (full debt) + s.128 Guarantee
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        RDB Rule 7 slab (₹12K base, capped at ₹1.5L)
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        6–14 Months
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: State RRC & Pre-Litigation Lok Adalat */}
            <section
              id="heading-state-rrc"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  State Revenue Recovery Certificates (RRC) for Exempt Farmland
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Where genuine crop cultivation renders a mortgaged parcel exempt under SARFAESI Section 31(i), commercial banks and Regional Rural Banks are far from helpless. Following the Talwar Committee recommendations, most major agricultural states enacted dedicated <strong>State Agricultural Credit Operations and Miscellaneous Provisions (Banks) Acts</strong> and <strong>State Public Moneys (Recovery of Dues) Acts</strong>—including Uttar Pradesh (1972 Act), Madhya Pradesh (<em>Lok Dhan Adhiniyam, 1987</em>), Maharashtra, Rajasthan, Haryana, Karnataka, Bihar, and West Bengal.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2.5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                    How State RRC Execution Operates
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                    <li>
                      <strong>Prescribed Authority Application:</strong> After serving a formal advocate recall notice, the bank submits a certified NPA statement (under Bankers&apos; Books Evidence Act s.2A), mortgage/charge creation extract, and Speed Post RPAD proof to the Sub-Divisional Officer (SDO) or District Collector.
                    </li>
                    <li>
                      <strong>Arrears of Land Revenue Status:</strong> Once verified, the authority issues a <strong>Revenue Recovery Certificate (RRC)</strong> directing the Tehsildar / Revenue Amin to recover the bank&apos;s dues as arrears of land revenue—carrying coercive attachment authority over movable crops, bank accounts, and chargeable property under the State Land Revenue Code.
                    </li>
                    <li>
                      <strong>Limitation &amp; Sub-₹20L Gap Fit:</strong> Unlike DRT (which bars claims below ₹20 Lakh), State RRCs cover sub-₹20L agricultural NPAs cleanly without ad valorem civil court fees. Compare all five sub-₹20L alternatives in our{" "}
                      <Link
                        href="/bank-loan-recovery-below-20-lakhs-drt-threshold-options"
                        className="text-[#DC2626] font-semibold underline underline-offset-2"
                      >
                        Sub-₹20 Lakh Bank Recovery Guide
                      </Link>
                      .
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5 space-y-2.5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    Pairing RRC Pressure With Harvest Lok Adalat Batching
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-800 list-disc pl-4">
                    <li>
                      <strong>0% Court Fee &amp; Binding Decree:</strong> Under Sections 19–21 of the Legal Services Authorities Act, 1987, a{" "}
                      <Link
                        href="/law/lok-adalat-pre-litigation-money-recovery"
                        className="text-emerald-800 font-bold underline underline-offset-2"
                      >
                        Pre-Litigation Lok Adalat
                      </Link>{" "}
                      settlement award carries the force of a non-appealable civil court decree executable under CPC Order XXI.
                    </li>
                    <li>
                      <strong>Defusing Waiver Rumours Humanely:</strong> Dispatching bilingual advocate notices 30 days ahead of the quarterly National Lok Adalat sitting—specifically quantifying the borrower&apos;s lost 3% Prompt Repayment Incentive and offering structured RBI-compliant OTS relief on penal charges—drives 35%–55% attendance in rural belts without local political friction.
                    </li>
                    <li>
                      <strong>Bulk DLSA Docket Execution:</strong> Review branch-level scheduling workflows in our{" "}
                      <Link
                        href="/bank-pre-litigation-lok-adalat-bulk-npa-settlement-guide"
                        className="text-emerald-800 font-bold underline underline-offset-2"
                      >
                        Bank Pre-Litigation Lok Adalat Bulk Playbook
                      </Link>
                      .
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                  <strong className="text-[#DC2626]">
                    RRC Statutory Ceiling &amp; Limitation Warning:
                  </strong>{" "}
                  In <em>Unique Butyle Tube Industries (P) Ltd. v. U.P. Financial Corporation</em> (2003) 2 SCC 455, the Supreme Court held that where an exposure equals or exceeds the RDB Act threshold (currently ₹20 Lakh) and falls within DRT jurisdiction, banks cannot bypass DRT through state recovery machinery unless expressly saved by statute. Always route ₹20 Lakh+ claims to{" "}
                  <Link
                    href="/e-drt-original-application-filing-guide-for-banks"
                    className="text-[#DC2626] font-bold underline underline-offset-2"
                  >
                    e-DRT Section 19 Original Applications
                  </Link>{" "}
                  and verify 3-year / 12-year mortgage limitation windows before filing using our{" "}
                  <Link
                    href="/tools/limitation-period-calculator"
                    className="text-[#DC2626] font-bold underline underline-offset-2"
                  >
                    Limitation Period Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Mid-Page Compact Dual-Track CTA */}
            <AgriKccNoticeCTA variant="compact" />

            {/* Section 6: Tractor & Farm Equipment Hypothecation */}
            <section
              id="heading-tractor-hypothecation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Tractor &amp; Farm Equipment Hypothecation Repossession Protocol
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Tractor loans, combine harvesters, laser land-levellers, and commercial milk-chilling units represent a high-recovery asset class because <strong>Section 31(i) protects only agricultural land, never movable machinery</strong>. However, aggressive ad-hoc seizure by unregulated field agents triggers criminal FIRs for trespass or theft and heavy RBI Ombudsman penalties. Institutional recovery heads must enforce a strict five-step repossession protocol:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {[
                  {
                    step: "01",
                    title: "Advocate Recall & Surrender Notice",
                    desc: "15-day Speed Post RPAD + WhatsApp notice citing Deed of Hypothecation, Form 34 RC endorsement, and PSS s.25/NI s.138 trigger.",
                  },
                  {
                    step: "02",
                    title: "Police Pre-Intimation",
                    desc: "File written intimation with local Thana along with loan recall proof and authorized recovery agency ID before visiting the village.",
                  },
                  {
                    step: "03",
                    title: "Peaceful Seizure & Panchnama",
                    desc: "Take peaceful possession during daylight hours (08:00–19:00), record engine/chassis video, and prepare a signed inventory panchnama.",
                  },
                  {
                    step: "04",
                    title: "Post-Intimation & Valuation",
                    desc: "Submit post-repossession police intimation and obtain an independent surveyor valuation report to fix a fair reserve price.",
                  },
                  {
                    step: "05",
                    title: "Pre-Sale Notice & Shortfall Claim",
                    desc: "Serve a 7–15 day final redemption notice before auction; pursue any post-sale deficit from borrower and guarantors via Lok Adalat or RRC.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5"
                  >
                    <span className="inline-block text-[11px] font-black text-white bg-[#404447] px-2 py-0.5 rounded">
                      STEP {item.step}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: 4 Interactive Scenarios */}
            <section
              id="heading-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Rural &amp; Agri-Banking Default Scenarios &amp; Recovery Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select the operational failure mode matching your branch or RRB stressed-asset cohort to inspect the exact statutory response, notice sequence, and compliance safeguard:
              </p>

              <AgriKccScenarioTabs />
            </section>

            {/* Section 8: Worked Recovery Financial Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Recovery Ledger: ₹48L Poultry Unit vs ₹6.5L KCC Account
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Choosing the wrong forum turns recoverable agricultural credit into dead provisioning. Below is an institutional unit-economics illustration comparing a <strong>Blue Coast commercial allied-agri account</strong> against a <strong>genuine exempt KCC crop loan</strong>—compliant with RBI&apos;s Fair Lending Practice on Penal Charges (penal charges shown separately without capitalization):
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Case A: ₹48L Commercial Poultry Unit */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                        Account A &bull; Allied-Agri (Blue Coast Eligible)
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-white mt-0.5">
                        ₹48.00 Lakh Automated Poultry Farm NPA
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-red-950/80 border border-red-800 text-red-300 text-xs font-bold shrink-0">
                      SARFAESI + DRT
                    </span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Principal Outstanding</span>
                      <span className="font-bold text-white">₹42,50,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Accrued Contractual Interest (11.25% p.a.)</span>
                      <span className="font-bold text-white">₹4,78,125</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Non-Capitalized Penal Charges (2% flat)</span>
                      <span className="font-bold text-amber-300">₹71,875</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Total Claimed Dues (Recall + s.13(2))</span>
                      <span className="font-black text-emerald-400">₹48,00,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Advocate Recall + Blue Coast Audit + DRT Fee</span>
                      <span className="font-bold text-slate-200">₹51,999 (DRT Rule 7: ₹51,000)</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-slate-300 font-semibold">Cost-to-Claim Ratio</span>
                      <span className="font-black text-emerald-400">1.08% (No Civil Stay Delay)</span>
                    </div>
                  </div>
                </div>

                {/* Case B: ₹6.5L Genuine KCC Account */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-emerald-200 pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                        Account B &bull; Genuine Farmland (s.31(i) Exempt)
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                        ₹6.50 Lakh KCC Crop Loan (2 Seasons Overdue)
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold shrink-0">
                      Lok Adalat / RRC
                    </span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between py-1.5 border-b border-emerald-200/80">
                      <span className="text-slate-600">Principal KCC Drawing</span>
                      <span className="font-bold text-slate-900">₹5,40,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-emerald-200/80">
                      <span className="text-slate-600">Un-subvented Interest (PRI Lost on Default)</span>
                      <span className="font-bold text-slate-900">₹96,400</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-emerald-200/80">
                      <span className="text-slate-600">Separate Penal Charges (Waivable in OTS)</span>
                      <span className="font-bold text-amber-700">₹13,600</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-emerald-200/80">
                      <span className="text-slate-600">Total Ledger Outstanding</span>
                      <span className="font-black text-slate-900">₹6,50,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-emerald-200/80">
                      <span className="text-slate-600">Bilingual Advocate Notice + Lok Adalat Fee</span>
                      <span className="font-bold text-emerald-800">₹999 (0% Court Fee)</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-slate-800 font-semibold">Target Harvest OTS Yield (Penal Waived)</span>
                      <span className="font-black text-emerald-800">₹6,36,400 (0.15% Legal Cost)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Geo-Tagged Inspection & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Geo-Tagged Field Inspection &amp; BSA 2023 s.63 Evidence Dossier
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether defending a SARFAESI Section 13(4) possession action before DRT or persuading a District Collector to issue an immediate State RRC, banks win or lose on contemporaneous evidentiary packaging. Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (replacing Evidence Act Section 65B) read with <strong>Section 2A of the Bankers&apos; Books Evidence Act, 1891</strong>, every digital ledger and inspection record must be certified as follows:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Geo-Tagged Commercial-Use Inspection Pack",
                    detail:
                      "Timestamped GPS photographs showing poultry sheds, cold storage compressors, brick boundary walls, commercial signage, or absence of standing crops—accompanied by a signed Branch Officer inspection memo.",
                  },
                  {
                    title: "2. Non-Agricultural Utility & License Proofs",
                    detail:
                      "Copies of commercial/industrial electricity tariff bills, GSTIN/Udyam/FSSAI registrations, municipal or panchayat building permissions, and the borrower's original non-crop project report.",
                  },
                  {
                    title: "3. RBI Penal-Charge Compliant CBS Ledger",
                    detail:
                      "Certified CBS statement separating principal, un-subvented interest (showing exact crop-season NPA date), and non-capitalized penal charges—backed by dual Bankers' Books s.2A and BSA 2023 s.63 certificates.",
                  },
                  {
                    title: "4. Omnichannel Notice Service Manifest",
                    detail:
                      "Fact-verified Loan Recall / Pre-RRC notice paired with India Post Speed Post RPAD tracking printouts, WhatsApp delivery/read logs, and Zoho/SMTP email transmission headers.",
                  },
                  {
                    title: "5. Security Creation & CERSAI / Form 34 Proof",
                    detail:
                      "Registered Memorandum of Deposit of Title Deeds (MODT) or State-Act declaration of charge on farmland, CERSAI registration ID, or RTO Form 34 hypothecation endorsement for tractors.",
                  },
                  {
                    title: "6. Written Acknowledgment & Guarantee Pack",
                    detail:
                      "Executed Revival Letters / Balance Confirmations (extending Limitation Act Section 18 clock) and separate Personal Guarantee deeds with explicit invocation notice copies.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5"
                  >
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Dual-Track Conversion Desk */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-3 px-1">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Deploy Rural Recovery Notices or Bulk RRB Portfolio Desk
                </h2>
              </div>

              <AgriKccNoticeCTA variant="primary" />
            </section>

            {/* Section 11: Internal Network (Tools, Templates & Sibling IND-01 Guides) */}
            <section
              id="heading-internal-network"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Banking Recovery Tools, Recall Templates &amp; IND-01 Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    tag: "Interactive Calculator · T1",
                    title: "SARFAESI & DRT Bank Recovery Forum Calculator",
                    href: "/tools/sarfaesi-drt-bank-recovery-forum-calculator",
                    desc: "Screen SARFAESI s.31(h)/(i)/(j) applicability, compute RDB Rule 7 e-DRT court fees, and map statutory 60+15+30 day calendars.",
                  },
                  {
                    tag: "Editable Template · P1",
                    title: "Bank Loan Recall cum Guarantee Invocation Notice Format",
                    href: "/templates/bank-loan-recall-cum-guarantee-invocation-notice",
                    desc: "RBI Penal-Charge compliant recall & personal guarantee invocation workspace ready for high-value agri and composite NPAs.",
                  },
                  {
                    tag: "IND-01 Seed Service",
                    title: "Send a Legal Notice for Banks to Recover Unpaid Dues",
                    href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues",
                    desc: "Dedicated institutional fact-verified notice desk covering KCC, retail, MSME, and commercial bank NPAs across India.",
                  },
                  {
                    tag: "SARFAESI s.14 Workflow",
                    title: "SARFAESI Section 14 DM/CMM Physical Possession Guide",
                    href: "/sarfaesi-section-14-dm-cmm-physical-possession-workflow",
                    desc: "9-point Authorized Officer affidavit & 30/60-day District Magistrate timeline for Blue Coast eligible agri-commercial assets.",
                  },
                  {
                    tag: "Cooperative Banks · s.84",
                    title: "Cooperative Bank & Credit Society Recovery (s.84 & RRC)",
                    href: "/cooperative-bank-credit-society-arbitration-recovery-section-84",
                    desc: "Multi-State s.84 arbitration, State Registrar Recovery Certificates (MCS s.101), and DCCB rural recovery workflows.",
                  },
                  {
                    tag: "Unsecured MSME / Mudra",
                    title: "Mudra & CGTMSE Collateral-Free Bank Loan Recovery",
                    href: "/mudra-cgtmse-collateral-free-msme-loan-recovery-banks",
                    desc: "CGTMSE / CGFMU claim prerequisites, State RRC escalation for PMEGP units, and bulk Lok Adalat settlement playbooks.",
                  },
                ].map((linkItem) => (
                  <Link
                    key={linkItem.href}
                    href={linkItem.href}
                    className="group block bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626] rounded-xl p-4 transition-all shadow-xs hover:shadow-md"
                  >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {linkItem.tag}
                    </span>
                    <p className="text-sm font-extrabold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {linkItem.title} &rarr;
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {linkItem.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 12: Practitioner FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: Agriculture, KCC &amp; s.31(i) Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-sm sm:text-base font-bold text-slate-900">
                      <span>{faq.q}</span>
                      <span className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#DC2626] font-black text-sm shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 13: Primary Statutory Authorities */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  13
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Statutory Authorities, State RRC Acts &amp; Precedents
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li
                    key={src.url}
                    className="flex items-start gap-2.5 text-slate-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline underline-offset-2 font-medium leading-relaxed"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] sm:text-xs text-slate-500 pt-3 border-t border-slate-100 leading-relaxed">
                <strong>Institutional Legal Note:</strong> State Agricultural Credit Operations and Public Moneys Recovery procedures vary by state Land Revenue Code and state-notified thresholds. Branch Authorized Officers and RRB Recovery Heads should verify local Tehsil RRC rules, state tenancy restrictions on farmland auction, and exact crop-season calendars with empanelled bank counsel prior to enforcement.
              </p>
            </section>
          </article>
        </div>
      </main>

      {/* Related Recovery Guides Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
