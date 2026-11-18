import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import DiscomKusumTableOfContents from "./DiscomKusumTableOfContents";
import DiscomKusumScenarioTabs from "./DiscomKusumScenarioTabs";
import DiscomKusumCTA from "./DiscomKusumCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/discom-kusum-state-nodal-agency-renewable-payment-delay-lps-rules";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Recovering Overdue DISCOM Tariff Invoices & State Nodal Agency (PM-KUSUM / Solar Pump) Subsidies: Electricity LPS Rules & Section 86(1)(f)";

// Tightened from 66ch PDF draft to 51ch for Screaming Frog 30-60ch compliance
const META_TITLE = "DISCOM & SNA Solar Payment Delays: LPS Rules & SERC";

// Tightened from 167ch PDF draft to 144ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "Enforce PRAAPTI portal triggers, Electricity (LPS) Rules grid-access curbs on defaulting DISCOMs, SERC s.86(1)(f) petitions & SNA KUSUM recovery.";

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
      "The Electricity Act, 2003 (Section 86(1)(f), Section 42 & Section 142 — SERC Exclusive Adjudicatory Jurisdiction & Open Access)",
    url: "https://www.indiacode.nic.in/handle/123456789/2052",
  },
  {
    title:
      "Ministry of Power — Electricity (Late Payment Surcharge and Related Matters) Rules, 2022 & PRAAPTI Portal (Payment Ratification and Analysis)",
    url: "https://praapti.in/",
  },
  {
    title:
      "Ministry of New and Renewable Energy (MNRE) — PM-KUSUM Scheme Operational Guidelines (Components A, B & C)",
    url: "https://mnre.gov.in/",
  },
  {
    title:
      "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 45-Day Cap & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Section 80 — Mandatory 60-Day Pre-Suit Notice to Government & State Nodal Agencies)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of ABT Meter Data, JMRs & PRAAPTI Electronic Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title:
      "Supreme Court on Exclusive SERC Jurisdiction Under Section 86(1)(f) vs General Arbitration",
    parties: "Gujarat Urja Vikas Nigam Ltd. v. Essar Power Ltd.",
    citation: "(2008) 4 SCC 755, Supreme Court of India",
    date: "Judgment Dated 13 March 2008",
    facts:
      "A generating company sought appointment of an arbitrator under Section 11 of the Arbitration and Conciliation Act, 1996 before the High Court for a PPA payment dispute with a state distribution licensee, bypassing the State Electricity Regulatory Commission.",
    holding:
      "The Supreme Court held that Section 86(1)(f) of the Electricity Act, 2003 is a special statutory provision conferring exclusive jurisdiction on the SERC to adjudicate all disputes between licensees and generating companies. A High Court cannot appoint an arbitrator under Section 11; only the SERC may decide the dispute itself or refer it to arbitration.",
    amount:
      "Exclusive Statutory Forum — Section 86(1)(f) Overrides Section 11",
    takeaway:
      "Renewable IPPs and PM-KUSUM Component-A/C feeder solar developers with a PPA against a DISCOM must file directly before the SERC u/s 86(1)(f); filing a Section 11 petition before a High Court invites dismissal on maintainability.",
  },
  {
    title:
      "Supreme Court on 3-Year Limitation Act Applicability to SERC Section 86(1)(f) Claims",
    parties:
      "Andhra Pradesh Power Coordination Committee v. Lanco Kondapalli Power Ltd.",
    citation: "(2016) 3 SCC 468, Supreme Court of India",
    date: "Judgment Dated 16 October 2015",
    facts:
      "A power generator filed tariff and interest arrears claims before the SERC several years after the underlying monthly energy invoices fell due, arguing that the Limitation Act, 1963 did not apply to statutory regulatory commissions.",
    holding:
      "The Supreme Court ruled that the principles of the Limitation Act, 1963 apply in full to adjudicatory petitions filed before the SERC under Section 86(1)(f). Claims beyond three years from the date the right to sue accrued are time-barred unless saved by a written acknowledgment of debt under Section 18 of the Limitation Act.",
    amount:
      "Strict 3-Year Limitation Clock — Saved Only by Section 18 Acknowledgment",
    takeaway:
      "IPPs must audit invoice aging continuously and treat written JMR sign-offs, PRAAPTI portal admissions, or part-payment reconciliations as Section 18 acknowledgments before the 3-year window expires.",
  },
  {
    title:
      "Supreme Court on Regulatory Sanctity & Rejection of Unilateral Tariff Withholding",
    parties: "Energy Watchdog v. Central Electricity Regulatory Commission & Ors.",
    citation: "(2017) 14 SCC 80, Supreme Court of India",
    date: "Judgment Dated 11 April 2017",
    facts:
      "Disputes arose over whether economic hardship, procurement cost shifts, or regulatory changes permitted parties to avoid or unilaterally alter binding PPA tariff obligations outside express Force Majeure and Change in Law clauses.",
    holding:
      "The Supreme Court affirmed that concluded PPAs remain binding and commercial hardship does not constitute Force Majeure under Section 56 of the Contract Act. Tariff relief or withholding is strictly governed by the PPA terms and the statutory regulatory framework of the Electricity Act, 2003.",
    amount:
      "PPA Payment Obligations Cannot Be Suspended for Utility Cash-Flow Hardship",
    takeaway:
      "DISCOMs cannot withhold admitted renewable tariff invoices citing state budget deficits or delayed state subsidies; creditors can enforce full tariff plus Late Payment Surcharge under the PPA and LPS Rules.",
  },
  {
    title:
      "Supreme Court on MSMED Act s.18 Overriding Arbitration for State Procurement Tenders",
    parties:
      "Gujarat State Civil Supplies Corp. Ltd. v. Mahakali Foods Pvt. Ltd.",
    citation: "(2023) 6 SCC 401, Supreme Court of India",
    date: "Judgment Dated 31 October 2022",
    facts:
      "Public-sector procurement buyers challenged MSEFC jurisdiction on the ground that the underlying tender/supply contract contained a standard arbitration clause.",
    holding:
      "The Supreme Court held that Chapter V of the MSMED Act, 2006 (Sections 15 to 24) is a special law that overrides general arbitration agreements under the 1996 Act. A Micro or Small Enterprise registered on Udyam prior to the supply contract can validly refer delayed tender payments to the MSEFC and claim 3x RBI bank rate compound interest.",
    amount:
      "MSMED s.18 Supersedes Tender Arbitration Clauses for Udyam Suppliers",
    takeaway:
      "Solar pump OEMs and street-light EPCs supplying to State Nodal Agencies (MEDA, GEDA, UPNEDA, RRECL) under non-PPA procurement tenders can bypass slow departmental arbitration and recover 3x RBI interest via MSEFC.",
  },
];

const FAQS = [
  {
    q: "How do the Electricity (Late Payment Surcharge) Rules, 2022 force a defaulting DISCOM to pay?",
    a: "Under the Ministry of Power's Electricity (Late Payment Surcharge and Related Matters) Rules, 2022, once a generator uploads an overdue tariff invoice on the PRAAPTI portal and the DISCOM fails to pay or establish a Letter of Credit within 75 days of bill presentation (or 30 days after the due date), the DISCOM faces automatic curtailment of Short-Term Open Access (STOA) on power exchanges. Continued non-payment for another 30 days triggers progressive regulation of Long-Term and Medium-Term Open Access, creating immediate operational pressure on the utility.",
  },
  {
    q: "When must a renewable creditor approach SERC u/s 86(1)(f) vs MSME MSEFC or Writ Court?",
    a: "Forum selection depends on the counterparty and contract type. If the debtor is a Distribution Licensee (DISCOM) and the dispute arises from a Power Purchase Agreement (PPA), PM-KUSUM Component-A/C feeder tariff, or Open Access banking/wheeling, the State Electricity Regulatory Commission (SERC) has exclusive jurisdiction under Section 86(1)(f) of the Electricity Act, 2003. Conversely, if the debtor is a State Nodal Agency (such as MEDA, GEDA, UPNEDA, or RRECL) withholding capital subsidies or milestone dues under a solar pump or street-light supply-and-installation tender, SERC lacks jurisdiction—the vendor must use MSMED Section 18 (MSEFC), contractual Arbitration, Civil Suit (after a 60-day Section 80 CPC notice), or a High Court Writ Petition.",
  },
  {
    q: "Can a solar pump vendor claim 3x RBI compound interest against a State Nodal Agency under PM-KUSUM Component B?",
    a: "Yes, provided the vendor held a valid Udyam (Micro or Small Enterprise) registration prior to the execution of the SNA tender/Work Order and the contract is for supply and installation of goods/equipment rather than a pure works contract excluded by local High Court precedent. Under MSMED Act Section 16 read with Mahakali Foods (2023), the vendor can claim compound interest at three times the RBI bank rate with monthly rests beyond 45 days of verified commissioning.",
  },
  {
    q: "Is a Section 80 CPC 60-day notice mandatory before suing a State Nodal Agency or DISCOM?",
    a: "Section 80 of the Code of Civil Procedure, 1908 mandates a 60-day prior written notice before instituting a civil suit against the Government or a public officer acting in official capacity. While statutory petitions before SERC u/s 86(1)(f), MSEFC references u/s 18, and High Court Writ Petitions under Article 226 do not strictly require a Section 80 notice, serving a structured 60-day Section 80 / Demand Notice is essential whenever a Civil or Commercial Suit is contemplated against a state energy department or nodal society.",
  },
  {
    q: "What if a DISCOM denies Open Access banking credits or lapses banked solar units arbitrarily?",
    a: "Open Access banking, wheeling credit adjustments, and cross-subsidy surcharge disputes between a generator/captive user and a distribution licensee fall squarely within SERC jurisdiction under Section 86(1)(f) read with Section 42 of the Electricity Act, 2003. The creditor should compile SLDC energy accounting statements, 15-minute ABT meter logs, and consumer billing ledgers to seek a mandatory credit-adjustment order and carrying cost before the SERC.",
  },
  {
    q: "Does uploading an invoice on the PRAAPTI portal stop the 3-year limitation clock?",
    a: "No. Uploading an invoice on PRAAPTI creates an official electronic trail and triggers regulatory grid-access sanctions under the LPS Rules, 2022, but it does not automatically toll the Limitation Act, 1963. Under AP Power Coordination Committee v. Lanco Kondapalli (2016), SERC claims must be filed within 3 years of the invoice due date unless the DISCOM issues a clear written acknowledgment of liability (e.g., reconciled JMR/ledger confirmation) under Section 18 of the Limitation Act.",
  },
  {
    q: "What electronic evidence is required under BSA 2023 Section 63 for DISCOM and SNA claims?",
    a: "Creditors must preserve automated ABT/AMR meter data downloads, signed Joint Meter Readings (JMRs), SLDC scheduling sheets, PRAAPTI portal upload acknowledgments, SNA portal commissioning approvals, and geo-tagged farmer pump installation logs, all accompanied by a signed Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023 electronic evidence certificate.",
  },
];

export default function DiscomKusumLpsRulesPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
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
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    inLanguage: "en-IN",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
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
        name: "Solar, Renewable & EV Power Recovery",
        item: `${SITE_URL}/industries/solar-renewable-ev-power-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "DISCOM LPS Rules & SERC Section 86(1)(f)",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            IND-19 Statutory Deep-Dive &bull; Electricity Act s.86(1)(f) &bull;
            LPS Rules 2022 &bull; PM-KUSUM
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + Parent Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/solar-renewable-ev-power-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Solar, Renewable &amp; EV Power Recovery framework
            </Link>
            , unpaid DISCOM PPA and PM-KUSUM feeder invoices trigger PRAAPTI
            grid-access curbs under the Electricity (LPS) Rules, 2022 and
            exclusive SERC adjudication u/s 86(1)(f)—while State Nodal Agency
            solar pump subsidies route via MSEFC, Arbitration, or Writ.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <div className="text-lg sm:text-2xl font-black text-red-400">
                75 Days
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                PRAAPTI STOA Grid-Access Curb Trigger (LPS Rules)
              </div>
            </div>
            <div className="p-2">
              <div className="text-lg sm:text-2xl font-black text-emerald-400">
                s.86(1)(f)
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Exclusive SERC Forum for Licensee PPA Disputes
              </div>
            </div>
            <div className="p-2">
              <div className="text-lg sm:text-2xl font-black text-amber-400">
                3x RBI Rate
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                MSMED s.16 Interest on Eligible SNA Pump Tenders
              </div>
            </div>
            <div className="p-2">
              <div className="text-lg sm:text-2xl font-black text-slate-100">
                60 Days
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Mandatory Section 80 CPC Pre-Suit Govt Notice
              </div>
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
                label: "Solar & Power Recovery",
                href: "/industries/solar-renewable-ev-power-recovery",
              },
              {
                label: "DISCOM LPS & SERC s.86(1)(f)",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <DiscomKusumTableOfContents />

          {/* Main Article Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Statutory Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Renewable Creditors Misfile DISCOM vs SNA Claims
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Small Independent Power Producers (IPPs), PM-KUSUM
                  feeder-level solar developers, and empanelled solar water-pump
                  vendors routinely lose 12 to 24 months of working capital by
                  filing recovery actions in the wrong statutory forum. While
                  both state distribution utilities (DISCOMs) and State Nodal
                  Agencies (SNAs such as MEDA, GEDA, UPNEDA, and RRECL) are
                  government-backed entities, Indian electricity jurisprudence
                  draws a bright jurisdictional wall between{" "}
                  <strong>power purchase obligations</strong> and{" "}
                  <strong>equipment/EPC procurement tenders</strong>.
                </p>
                <p>
                  When a DISCOM delays monthly solar or wind tariff invoices,
                  Open Access banking credits, or PM-KUSUM Component-A /
                  Component-C feeder-levelization payments, the creditor has two
                  interlocking weapons: administrative grid-access regulation
                  through the{" "}
                  <strong>
                    Electricity (Late Payment Surcharge and Related Matters)
                    Rules, 2022
                  </strong>{" "}
                  (LPS Rules) via the PRAAPTI portal, and binding adjudication
                  before the{" "}
                  <strong>
                    State Electricity Regulatory Commission (SERC) under Section
                    86(1)(f)
                  </strong>{" "}
                  of the Electricity Act, 2003.
                </p>
                <p>
                  By contrast, when an SNA withholds capital subsidy tranches or
                  installation milestones for PM-KUSUM Component-B standalone
                  solar pumps or rural solar street lights, the SNA is not a
                  &ldquo;licensee&rdquo; purchasing electricity. Filing an SERC
                  petition against an SNA results in summary rejection. Instead,
                  creditors must route SNA arrears through{" "}
                  <strong>MSMED Act Section 18 (MSEFC)</strong>, tender{" "}
                  <strong>Arbitration</strong>, an{" "}
                  <strong>Article 226 Writ Petition</strong>, or a Commercial
                  Suit preceded by a mandatory{" "}
                  <Link
                    href="/law/section-80-cpc-notice-to-government"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Section 80 CPC 60-day notice to government bodies
                  </Link>
                  . For initial pre-litigation framing, you can also review our{" "}
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    commercial notice &amp; reply workspace
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: Forum Split Matrix */}
            <section
              id="heading-forum-split"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  SERC Section 86(1)(f) vs MSEFC, Arbitration &amp; Writ
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Use the statutory matrix below to match your exact contract
                structure and counterparty before issuing a demand notice or
                initiating litigation.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Criteria</th>
                      <th className="p-3.5 font-bold">
                        DISCOM PPA / KUSUM-A &amp; C (SERC s.86(1)(f))
                      </th>
                      <th className="p-3.5 font-bold">
                        SNA Solar Pump / Street-Light Tender (MSEFC / Arb /
                        Writ)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Counterparty Status
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Distribution Licensee (DISCOM / State Power Utility)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        State Nodal Agency (MEDA, GEDA, UPNEDA, RRECL, HAREDA)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Contract Nature
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Power Purchase Agreement (PPA), Wheeling &amp; Banking
                        Agreement (WBA), Feeder Tariff
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Supply, Installation &amp; Commissioning Tender / LoA
                        with MNRE/State Capital Subsidy
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Exclusive Forum
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        SERC u/s 86(1)(f) (Appeal to APTEL u/s 111)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        MSEFC (for Udyam MSMEs), Tender Arbitration, HC Writ
                        (Art. 226), or Civil Suit
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Interest &amp; Leverage
                      </td>
                      <td className="p-3.5 text-slate-700">
                        LPS Rules 2022 (Base Rate + escalating margin) + PRAAPTI
                        grid-access restriction
                      </td>
                      <td className="p-3.5 text-slate-700">
                        MSMED s.16 (3x RBI compound interest) or Contract Act
                        s.73 interest + s.80 CPC pressure
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Can s.11 Arbitration Bypass Forum?
                      </td>
                      <td className="p-3.5 text-[#DC2626] font-semibold">
                        No — Barred by Gujarat Urja (2008) 4 SCC 755
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Yes for non-MSMEs; MSEFC overrides arbitration for
                        registered MSMEs (Mahakali Foods)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: LPS Rules & Bare-Act Timeline */}
            <section
              id="heading-lps-timeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Electricity LPS Rules, 2022 &amp; Statutory Limitation Stops
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                The Ministry of Power&apos;s{" "}
                <strong>
                  Electricity (Late Payment Surcharge and Related Matters)
                  Rules, 2022
                </strong>{" "}
                automated grid-access consequences for defaulting DISCOMs.
                Creditors must pair PRAAPTI triggers with strict Limitation Act
                tracking so claims never become time-barred.
              </p>

              {/* Desktop SVG Escalation Rail */}
              <div className="hidden md:block mb-6 bg-slate-900 rounded-2xl p-5 border border-slate-800 overflow-x-auto">
                <svg
                  width="760"
                  height="130"
                  viewBox="0 0 760 130"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Stage Electricity LPS Rules and SERC Recovery Timeline"
                >
                  <line
                    x1="60"
                    y1="45"
                    x2="700"
                    y2="45"
                    stroke="#475569"
                    strokeWidth="3"
                  />
                  {[
                    {
                      x: 60,
                      day: "DAY 0",
                      title: "Bill + PRAAPTI",
                      color: "#38BDF8",
                    },
                    {
                      x: 220,
                      day: "DAY 30–45",
                      title: "Due Date / LPS",
                      color: "#FBBF24",
                    },
                    {
                      x: 380,
                      day: "DAY 75",
                      title: "STOA Curbed",
                      color: "#DC2626",
                    },
                    {
                      x: 540,
                      day: "DAY 105",
                      title: "LTOA Curtailed",
                      color: "#EF4444",
                    },
                    {
                      x: 700,
                      day: "< 3 YRS",
                      title: "SERC s.86(1)(f)",
                      color: "#10B981",
                    },
                  ].map((node, idx) => (
                    <g key={idx}>
                      <circle
                        cx={node.x}
                        cy="45"
                        r="14"
                        fill={node.color}
                        stroke="#0F172A"
                        strokeWidth="3"
                      />
                      <text
                        x={node.x}
                        y="82"
                        textAnchor="middle"
                        fill="#F8FAFC"
                        fontSize="11"
                        fontWeight="bold"
                      >
                        {node.day}
                      </text>
                      <text
                        x={node.x}
                        y="102"
                        textAnchor="middle"
                        fill="#CBD5E1"
                        fontSize="11"
                      >
                        {node.title}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden mb-6">
                <div className="p-3.5 rounded-xl bg-slate-900 text-white">
                  <span className="text-[10px] font-bold uppercase text-sky-400">
                    Day 0 &middot; Presentation
                  </span>
                  <p className="text-xs font-semibold mt-1">
                    Upload JMR &amp; Tariff Invoice on PRAAPTI Portal
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 text-white">
                  <span className="text-[10px] font-bold uppercase text-amber-400">
                    Day 30–45 &middot; Default
                  </span>
                  <p className="text-xs font-semibold mt-1">
                    PPA Due Date Expires; LPS Interest Starts Accruing
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 text-white">
                  <span className="text-[10px] font-bold uppercase text-red-400">
                    Day 75 &middot; Rule 7 Trigger
                  </span>
                  <p className="text-xs font-semibold mt-1">
                    Automatic Short-Term Open Access (STOA) Regulation
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 text-white">
                  <span className="text-[10px] font-bold uppercase text-emerald-400">
                    Before 3 Years &middot; Limitation Stop
                  </span>
                  <p className="text-xs font-semibold mt-1">
                    File SERC s.86(1)(f) Petition / Sec 18 Acknowledgment
                  </p>
                </div>
              </div>

              {/* Bare-Act Statutory Timeline Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 font-bold">Statute / Rule</th>
                      <th className="p-3 font-bold">Window</th>
                      <th className="p-3 font-bold">Legal Trigger &amp; Effect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">
                        LPS Rules, 2022 (Rule 7)
                      </td>
                      <td className="p-3 font-bold text-[#DC2626]">75 Days</td>
                      <td className="p-3 text-slate-700">
                        75 days from invoice presentation (or 30 days after due
                        date) without payment/LC: POSOCO/NLDC restricts
                        DISCOM&apos;s Short-Term Open Access.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 font-semibold text-slate-900">
                        LPS Rules, 2022 (Rule 8)
                      </td>
                      <td className="p-3 font-bold text-[#DC2626]">+30 Days</td>
                      <td className="p-3 text-slate-700">
                        Continued default for 30 days post-STOA restriction
                        triggers progressive curtailment of Long-Term and
                        Medium-Term Access.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">
                        MSMED Act, 2006 (s.15–18)
                      </td>
                      <td className="p-3 font-bold text-emerald-700">
                        45d / 90d
                      </td>
                      <td className="p-3 text-slate-700">
                        Maximum 45-day payment cap for SNA tender supplies;
                        MSEFC statutory conciliation &amp; arbitration target
                        disposal of 90 days.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 font-semibold text-slate-900">
                        CPC Section 80
                      </td>
                      <td className="p-3 font-bold text-amber-700">60 Days</td>
                      <td className="p-3 text-slate-700">
                        Mandatory 60-day written notice prior to filing a Civil
                        or Commercial Suit against a State Government or public
                        officer.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">
                        Limitation Act, 1963
                      </td>
                      <td className="p-3 font-bold text-slate-900">
                        3 Years
                      </td>
                      <td className="p-3 text-slate-700">
                        Runs from invoice due date for SERC s.86(1)(f) claims;
                        reset only by written Section 18 acknowledgment or
                        Section 21 arbitration notice (for non-SERC contracts).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Binding Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Landmark Supreme Court Precedents for Power Creditors
                </h2>
              </div>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 pl-6 sm:pl-7 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                        {item.citation}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                      {item.parties}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 mb-3">
                      {item.title}
                    </p>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p>
                        <strong>Facts:</strong> {item.facts}
                      </p>
                      <p>
                        <strong>Holding:</strong> {item.holding}
                      </p>
                      <div className="mt-3 p-3 rounded-xl bg-white border border-slate-200">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-0.5">
                          {item.amount}
                        </span>
                        <p className="text-xs text-slate-800 font-medium">
                          {item.takeaway}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs + Dual CTA */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    4 Renewable Payment Default Scenarios &amp; Action Paths
                  </h2>
                </div>
                <DiscomKusumScenarioTabs />
              </div>

              <DiscomKusumCTA />
            </section>

            {/* Section 6: Debtor Defense Pre-emption Matrix */}
            <section
              id="heading-defense-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Pre-Empting DISCOM &amp; SNA Delay Excuses
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">
                        Utility / SNA Defense Excuse
                      </th>
                      <th className="p-3.5 font-bold">
                        Creditor Statutory Rebuttal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        &ldquo;MNRE / State Subsidy Tranche Not Released&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Privity of contract exists between the vendor and SNA;
                        internal intergovernmental fund transfers do not suspend
                        statutory 45-day MSMED obligations or verified LoA
                        milestone liabilities.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        &ldquo;DISCOM Financial Distress / Budget Deficit&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Rejected under <em>Energy Watchdog</em> (2017) and LPS
                        Rules, 2022. Financial hardship does not excuse PPA
                        tariff payment or stop STOA grid-access regulation.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        &ldquo;JMR or Meter Reconciliation Pending&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Invoke PPA deemed-verification clauses (typically 7–15
                        days to dispute JMR) and file automated ABT/AMR portal
                        downloads certified under BSA 2023 Section 63.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        &ldquo;Must Arbitrate Under General Tender Clause&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        For DISCOM PPAs, SERC s.86(1)(f) overrides general
                        Section 11 arbitration (<em>Gujarat Urja</em>). For SNA
                        tenders, MSEFC s.18 overrides arbitration for registered
                        MSMEs (<em>Mahakali Foods</em>).
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        &ldquo;Post-Commissioning Pump Quality Holdback&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Once Joint Commissioning Certificates (JCC) are signed
                        without contemporaneous defect memos, belated quality
                        allegations fail the bona fide pre-existing dispute
                        threshold.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Worked Financial Illustration */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Ledger: KUSUM-A IPP vs SNA Pump Vendor
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-red-400 mb-2">
                    Case A &middot; 2 MW PM-KUSUM-A Feeder IPP
                  </span>
                  <h3 className="text-base font-bold mb-3">
                    DISCOM Tariff Arrears (LPS Rules + SERC)
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span>Overdue Tariff Principal (10 Months)</span>
                      <span className="font-bold text-white">&#8377;1,40,00,000</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span>LPS Interest (Indicative 15% p.a. avg)</span>
                      <span className="font-bold text-emerald-400">
                        + &#8377;11,37,500
                      </span>
                    </li>
                    <li className="flex justify-between pt-1">
                      <span className="font-bold text-white">
                        Claimable SERC + PRAAPTI Demand
                      </span>
                      <span className="font-black text-emerald-400">
                        &#8377;1,51,37,500
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-2">
                    Case B &middot; Empanelled Solar Pump EPC
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-3">
                    SNA Subsidy Holdback (MSMED s.16 3x RBI)
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex justify-between border-b border-emerald-200 pb-1.5">
                      <span>Unpaid SNA Subsidy Tranche</span>
                      <span className="font-bold text-slate-900">&#8377;85,00,000</span>
                    </li>
                    <li className="flex justify-between border-b border-emerald-200 pb-1.5">
                      <span>3x RBI Rate Compound (14 Mos post-45d)</span>
                      <span className="font-bold text-emerald-700">
                        + &#8377;21,45,000*
                      </span>
                    </li>
                    <li className="flex justify-between pt-1">
                      <span className="font-bold text-slate-900">
                        MSEFC Statutory Claim Value
                      </span>
                      <span className="font-black text-emerald-700">
                        &#8377;1,06,45,000
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-slate-500 mb-4">
                *Illustrative statutory computation assuming 6.50% RBI bank rate
                (3x = 19.50% p.a. compounded monthly under MSMED s.16). Compute
                exact daily compounding for your invoice dates using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSME 3x RBI Delayed Payment Interest Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 8: Evidence Checklist & Related Spokes */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BSA 2023 Section 63 Evidence &amp; Related Guides
                </h2>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 mb-6">
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="block text-slate-900 mb-1">
                    1. Executed PPA / SNA Tender LoA
                  </strong>
                  Complete tariff schedules, Payment Security (LC) clauses, and
                  SERC tariff adoption order.
                </li>
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="block text-slate-900 mb-1">
                    2. Signed JMRs &amp; ABT Meter Data
                  </strong>
                  Monthly Joint Meter Readings, SLDC energy accounting sheets,
                  and automated AMR downloads.
                </li>
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="block text-slate-900 mb-1">
                    3. PRAAPTI &amp; SNA Portal Logs
                  </strong>
                  Timestamped PRAAPTI invoice upload receipts or SNA geo-tagged
                  commissioning approvals.
                </li>
                <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="block text-slate-900 mb-1">
                    4. BSA 2023 s.63 Certificate
                  </strong>
                  Mandatory electronic record affidavit certifying SCADA, meter,
                  and portal extracts.
                </li>
              </ul>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                <p className="font-bold text-slate-900">
                  Related Renewable &amp; Infrastructure Recovery Playbooks:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <Link
                      href="/opex-resco-solar-ppa-tariff-default-termination-buyout-repossession"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      OPEX / RESCO Solar PPA Default, Section 9 Roof Access &amp;
                      Termination Buyout
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/subcontractor-payment-recovery-india"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      EPC Subcontractor &amp; Turnkey Retention Recovery in
                      India
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Bulk CSV Legal Notice Desk for Multi-Site Solar Portfolios
                    </Link>
                  </li>
                </ul>
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
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: DISCOM LPS &amp; KUSUM Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Sources & Reviewer Attribution */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm mb-6">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <li key={idx}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <strong className="text-slate-900">
                  Statutory Review Attribution:
                </strong>{" "}
                Reviewed by Anuj Anand Malik, Advocate &amp; Founder, AMA Legal
                Solutions. This statutory commentary is for B2B creditor
                information and does not replace case-specific counsel review of
                your PPA or State Nodal Agency tender.
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
