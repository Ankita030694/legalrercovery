import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SolarDistributorTableOfContents from "./SolarDistributorTableOfContents";
import SolarDistributorScenarioTabs from "./SolarDistributorScenarioTabs";
import SolarDistributorCTA from "./SolarDistributorCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/solar-panel-module-inverter-distributor-installer-credit-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Credit & Forward-Booking Recovery for Solar Module Makers & Inverter Distributors: Serial-Number Warranty Hold & PDC Enforcement";

// Tightened from 64ch PDF draft to 52ch for Screaming Frog 30-60ch compliance
const META_TITLE = "Solar Module, Inverter & BOS Credit Default Recovery";

// Tightened from 175ch PDF draft to 147ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "Local EPC installers lift 500 kW of modules on 30-day PDCs, collect PM Surya Ghar cash & default. Enforce NI Act s.138, SoGA s.56 & warranty hold.";

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
      "Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A — Criminal Cheque Dishonour & 20% Interim Compensation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 46, 54 & 56 — Unpaid Seller Lien, Resale Rights & Damages for Non-Acceptance on Watt-Peak Price Drops)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 51, 54, 73 & 74 — Reciprocal Promises, Conditional Warranty Issuance & Forward-Booking Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 45-Day Cap & 3x RBI Compound Interest) — MSME Samadhaan",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title:
      "Ministry of New and Renewable Energy (MNRE) — ALMM List & PM Surya Ghar: Muft Bijli Yojana Vendor & DCR Compliance Guidelines",
    url: "https://pmsuryaghar.gov.in/",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of Electronic Invoices, e-Way Bills & Flash-Test Serial Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    q: "Can a solar module manufacturer or distributor withhold OEM Serial-Number Warranty Certificates when an installer defaults on 30-day PDCs?",
    a: "Yes, provided the Distributorship Agreement, Proforma Invoice, or Credit Terms expressly stipulate Conditional OEM Warranty Issuance—stating that 25-year linear performance and 12-year product warranty certificates activate strictly upon 100% realization of invoice value. Because DISCOMs, CEIG inspectors, and C&I end-clients require serial-number flash-test reports and warranty certificates for project sign-off, lawful contractual warranty hold creates immediate commercial leverage without interfering with physical rooftop equipment.",
  },
  {
    q: "What if a local PM Surya Ghar installer bounces a 30-day PDC after collecting subsidy milestone payments from homeowners?",
    a: "Serve a mandatory written demand notice under Section 138(b) of the Negotiable Instruments Act, 1881 within 30 days of receiving the bank cheque-return memo. If the installer fails to pay within 15 days of receipt, file a Section 138 criminal complaint (and Section 141 against directors/partners) and move an application under Section 143A for 20% interim compensation. Simultaneously place the dispatched module and inverter serial numbers on Conditional Warranty Hold.",
  },
  {
    q: "Can a module importer or distributor recover losses when a trader cancels a booked container after Watt-Peak (₹/Wp) prices crash?",
    a: "Yes. Under Section 56 of the Sale of Goods Act, 1930, where a buyer wrongfully neglects or refuses to accept and pay for booked solar modules, the seller may sue for damages for non-acceptance. Serve a 7-day Notice of Readiness & Mitigation Resale under Section 54(2), resell the container at the prevailing spot market rate, and recover the exact ₹/Wp price differential plus container demurrage, port detention, and bonded warehousing charges, adjusting any forfeited booking advance.",
  },
  {
    q: "Are 'security cheques' given at the time of solar dealership onboarding enforceable under NI Act Section 138?",
    a: "Yes. The Supreme Court in Sripati Singh v. State of Jharkhand and Sunil Todi v. State of Gujarat affirmed that a post-dated or undated security cheque presented after a crystalized, legally enforceable debt falls due (such as an unpaid 30-day credit invoice ledger) attracts full criminal liability under Section 138 of the NI Act, provided the debt existed on the date of presentation.",
  },
  {
    q: "Can Udyam-registered solar BOS wholesalers, cable makers, and inverter distributors use Section 43B(h) of the Income Tax Act?",
    a: "Yes. If the supplier holds a valid Micro or Small Enterprise Udyam Registration (excluding pure trading entities unless covered under applicable manufacturing/service scopes) and the buyer is a corporate or tax-audited EPC firm, unpaid invoices beyond 45 days (or 15 days without a written agreement) trigger Income Tax disallowance under Section 43B(h) alongside 3x RBI Bank Rate compound interest under MSMED Act Section 16.",
  },
  {
    q: "Is it legal to remotely lock or shut down an inverter sold on credit if the end-customer has already paid the installer?",
    a: "Exercise extreme caution. Once title and possession pass to an innocent third-party homeowner or factory that has paid the local EPC installer in full, remotely disabling an operational inverter without an express end-user tri-partite right or court order risks consumer complaints and IT Act Section 43 / tortious interference claims. Instead, restrict action to pre-commissioning activation locks (where contractually agreed), Conditional OEM Warranty Hold, and direct NI Act s.138 / Order XXXVII CPC / BNS s.316 proceedings against the defaulting installer.",
  },
  {
    q: "How can a regional solar super-stockist recover overdue credit from 30 to 500+ Tier-2/3 installers across multiple states?",
    a: "Super-stockists facing widespread 60-day PDC dishonours across Tier-2/3 districts should batch-upload defaulted installer ledgers, cheque return memos, and serial-number dispatch sheets via a centralized CSV recovery desk. Automated multi-channel NI Act s.138(b) + Sale of Goods s.56 + Conditional Warranty Hold notices delivered simultaneously via Email, WhatsApp, and Speed Post RPAD compress collection cycles before installers wind up operations.",
  },
];

const ARTICLE_SCHEMA = {
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

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Solar Module Makers & Inverter Distributors Recover Installer Credit & Forward-Booking Defaults",
  description:
    "5-stage statutory escalation workflow combining Serial-Number Warranty Hold, NI Act s.138/143A cheque bounce prosecution, and Sale of Goods Act s.56 Watt-Peak price-drop damages.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock Serial-Number Warranty Portal & Reconcile Dispatch",
      text: "Flag all dispatched module flash-test serial numbers and inverter serials as Conditional Warranty Hold in the OEM portal and compile GST e-Invoices, e-Way Bills, and signed LRs.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve Composite s.138(b) / SoGA s.56 Demand Notice",
      text: "Issue a Fact-verified statutory notice within 30 days of PDC dishonour (NI Act s.138) or forward-booking refusal (Sale of Goods Act s.54/56) via Email, WhatsApp, and Speed Post RPAD.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Execute Mitigation Resale for Unlifted Containers",
      text: "After a 7-day cure window on booked containers, resell unlifted modules at spot market price and crystalize the exact ₹/Wp price-differential plus port demurrage claim.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "File NI Act s.138 + s.143A Interim Compensation Application",
      text: "Upon expiry of the 15-day statutory notice period, file a criminal complaint under NI Act s.138/141 and seek 20% interim compensation under Section 143A.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Pursue Parallel Order XXXVII CPC or MSEFC Recovery",
      text: "Initiate Order XXXVII summary suit (with Order XXXVIII Rule 5 inventory attachment) or MSEFC Section 18 arbitration for 3x RBI compound interest on the unpaid balance.",
    },
  ],
};

const FAQ_SCHEMA = {
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
      name: "Solar, Renewable & EV Power Recovery",
      item: `${SITE_URL}/industries/solar-renewable-ev-power-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Module & Inverter Distributor Credit Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function SolarModuleInverterCreditRecoveryPage() {
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-19 &middot; Solar Supply-Chain Credit Desk</span>
            <span className="text-slate-500">&bull;</span>
            <span>NI Act s.138/143A &middot; SoGA s.56 &middot; OEM Warranty Hold</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            ALMM solar module makers, inverter distributors, and BOS wholesalers
            can counter 30-day PDC bounces and Watt-Peak container cancellations
            by combining <strong>Conditional OEM Serial-Number Warranty Hold</strong>,
            criminal prosecution under <strong>NI Act s.138/143A</strong>, and
            price-drop damages under <strong>Sale of Goods Act s.56</strong>. See
            our{" "}
            <Link
              href="/industries/solar-renewable-ev-power-recovery"
              className="text-red-400 underline hover:text-red-300 font-bold"
            >
              Solar, Renewable &amp; EV Power Recovery Hub
            </Link>{" "}
            for sector-wide escalation.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-red-400">
                30 Days
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Strict NI Act s.138(b) Notice Window from Return Memo
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                20% Interim
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Mandatory Deposit Relief under NI Act s.143A
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                SoGA s.56
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Recover ₹/Wp Crash Differential on Refused Containers
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                3x RBI Rate
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                MSMED s.16 Compound Interest for Udyam Suppliers
              </p>
            </div>
          </div>

          {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs text-slate-400">
            <span>
              Legally Reviewed by{" "}
              <strong className="text-slate-200">Anuj Anand Malik</strong>,
              Advocate &amp; Founder, AMA Legal Solutions
            </span>
            <span>&bull;</span>
            <span>Updated November 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Solar, Renewable & EV Power Recovery",
                href: "/industries/solar-renewable-ev-power-recovery",
              },
              {
                label: "Module & Inverter Distributor Credit Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <SolarDistributorTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="heading-credit-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why Tier-2/3 Solar Installers Default After Collecting End-User Cash
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  With more than 15,000 new local rooftop solar installers
                  operating across Tier-2 and Tier-3 India under the{" "}
                  <strong>PM Surya Ghar: Muft Bijli Yojana</strong> and C&amp;I
                  open-access/rooftop booms, ALMM module manufacturers, string
                  and central inverter distributors, and Balance-of-System (BOS)
                  wholesalers face an acute working-capital squeeze. Regional
                  super-stockists routinely extend 30-to-60-day credit backed by
                  post-dated cheques (PDCs) so local EPCs can lift 200 kW to 1 MW
                  of DCR/Non-DCR modules, inverters, DC cables, and mounting
                  structures.
                </p>
                <p>
                  In practice, defaulting installers collect 80%–100% milestone
                  payments directly from homeowners and factory owners—often
                  before DISCOM net-metering or subsidy disbursement—and divert
                  that liquidity into unrelated projects or personal accounts.
                  When the 30-day PDC hits clearing, it returns dishonoured for{" "}
                  <em>&ldquo;Funds Insufficient&rdquo;</em> or{" "}
                  <em>&ldquo;Payment Stopped by Drawer.&rdquo;</em>
                </p>
                <p>
                  Simultaneously, volatile solar cell and wafer supply chains
                  trigger a second crisis: <strong>forward-booking refusal</strong>.
                  When spot module rates drop by ₹1.50 to ₹2.50 per Watt-Peak
                  (Wp) between Proforma Invoice booking and port/ex-works
                  dispatch, traders abandon booked containers and demand refunds
                  of their 10% token advances. Treating both defaults as routine
                  &ldquo;gentleman&rsquo;s ledger follow-ups&rdquo; allows
                  installers to liquidate stock and vanish.
                </p>
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
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  5-Stage Solar Supply-Chain Credit &amp; Warranty Recovery Tree
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Execute this sequential 5-stage workflow the moment a 30-day PDC
                bounces or an EPC buyer refuses a booked module container:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block overflow-x-auto pb-2">
                <svg
                  viewBox="0 0 820 220"
                  width={820}
                  height={220}
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Stage Solar Module and Inverter Distributor Credit Recovery Decision Tree"
                >
                  <defs>
                    <marker
                      id="arrowSolar"
                      markerWidth="8"
                      markerHeight="8"
                      refX="6"
                      refY="3"
                      orient="auto"
                    >
                      <path d="M0,0 L0,6 L6,3 z" fill="#DC2626" />
                    </marker>
                  </defs>

                  {/* Stage 1 */}
                  <rect
                    x="10"
                    y="30"
                    width="140"
                    height="150"
                    rx="12"
                    fill="#0F172A"
                    stroke="#334155"
                  />
                  <text
                    x="80"
                    y="58"
                    textAnchor="middle"
                    fill="#F87171"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    STAGE 1 · DAY 1
                  </text>
                  <text
                    x="80"
                    y="82"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    Serial-Number
                  </text>
                  <text
                    x="80"
                    y="98"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    Warranty Hold
                  </text>
                  <text
                    x="80"
                    y="124"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="10"
                  >
                    Lock OEM Flash-Test
                  </text>
                  <text
                    x="80"
                    y="140"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="10"
                  >
                    &amp; 25-Yr Certificate
                  </text>
                  <text
                    x="80"
                    y="156"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="10"
                  >
                    Portal Issuance
                  </text>

                  <line
                    x1="150"
                    y1="105"
                    x2="174"
                    y2="105"
                    stroke="#DC2626"
                    strokeWidth="2"
                    markerEnd="url(#arrowSolar)"
                  />

                  {/* Stage 2 */}
                  <rect
                    x="176"
                    y="30"
                    width="140"
                    height="150"
                    rx="12"
                    fill="#1E293B"
                    stroke="#475569"
                  />
                  <text
                    x="246"
                    y="58"
                    textAnchor="middle"
                    fill="#F87171"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    STAGE 2 · &lt;30 DAYS
                  </text>
                  <text
                    x="246"
                    y="82"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    NI s.138(b) /
                  </text>
                  <text
                    x="246"
                    y="98"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    SoGA s.56 Notice
                  </text>
                  <text
                    x="246"
                    y="124"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="10"
                  >
                    15-Day Statutory
                  </text>
                  <text
                    x="246"
                    y="140"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="10"
                  >
                    Demand via Email,
                  </text>
                  <text
                    x="246"
                    y="156"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="10"
                  >
                    WhatsApp &amp; RPAD
                  </text>

                  <line
                    x1="316"
                    y1="105"
                    x2="340"
                    y2="105"
                    stroke="#DC2626"
                    strokeWidth="2"
                    markerEnd="url(#arrowSolar)"
                  />

                  {/* Stage 3 */}
                  <rect
                    x="342"
                    y="30"
                    width="140"
                    height="150"
                    rx="12"
                    fill="#1E293B"
                    stroke="#475569"
                  />
                  <text
                    x="412"
                    y="58"
                    textAnchor="middle"
                    fill="#FBBF24"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    STAGE 3 · DAY 20
                  </text>
                  <text
                    x="412"
                    y="82"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    Mitigation Resale
                  </text>
                  <text
                    x="412"
                    y="98"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    &amp; Price Lock
                  </text>
                  <text
                    x="412"
                    y="124"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="10"
                  >
                    Resell Unlifted Stock
                  </text>
                  <text
                    x="412"
                    y="140"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="10"
                  >
                    under SoGA s.54(2);
                  </text>
                  <text
                    x="412"
                    y="156"
                    textAnchor="middle"
                    fill="#CBD5E1"
                    fontSize="10"
                  >
                    Quantify ₹/Wp Loss
                  </text>

                  <line
                    x1="482"
                    y1="105"
                    x2="506"
                    y2="105"
                    stroke="#DC2626"
                    strokeWidth="2"
                    markerEnd="url(#arrowSolar)"
                  />

                  {/* Stage 4 */}
                  <rect
                    x="508"
                    y="30"
                    width="140"
                    height="150"
                    rx="12"
                    fill="#7F1D1D"
                    stroke="#DC2626"
                  />
                  <text
                    x="578"
                    y="58"
                    textAnchor="middle"
                    fill="#FECACA"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    STAGE 4 · DAY 45
                  </text>
                  <text
                    x="578"
                    y="82"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    NI Act s.138 +
                  </text>
                  <text
                    x="578"
                    y="98"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    s.143A Filing
                  </text>
                  <text
                    x="578"
                    y="124"
                    textAnchor="middle"
                    fill="#FEE2E2"
                    fontSize="10"
                  >
                    Criminal Summons +
                  </text>
                  <text
                    x="578"
                    y="140"
                    textAnchor="middle"
                    fill="#FEE2E2"
                    fontSize="10"
                  >
                    20% Interim Deposit
                  </text>
                  <text
                    x="578"
                    y="156"
                    textAnchor="middle"
                    fill="#FEE2E2"
                    fontSize="10"
                  >
                    Order on Directors
                  </text>

                  <line
                    x1="648"
                    y1="105"
                    x2="672"
                    y2="105"
                    stroke="#DC2626"
                    strokeWidth="2"
                    markerEnd="url(#arrowSolar)"
                  />

                  {/* Stage 5 */}
                  <rect
                    x="674"
                    y="30"
                    width="136"
                    height="150"
                    rx="12"
                    fill="#064E3B"
                    stroke="#10B981"
                  />
                  <text
                    x="742"
                    y="58"
                    textAnchor="middle"
                    fill="#6EE7B7"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    STAGE 5 · PARALLEL
                  </text>
                  <text
                    x="742"
                    y="82"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    Order 37 CPC /
                  </text>
                  <text
                    x="742"
                    y="98"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    MSEFC &amp; 43B(h)
                  </text>
                  <text
                    x="742"
                    y="124"
                    textAnchor="middle"
                    fill="#D1FAE5"
                    fontSize="10"
                  >
                    3x RBI Interest +
                  </text>
                  <text
                    x="742"
                    y="140"
                    textAnchor="middle"
                    fill="#D1FAE5"
                    fontSize="10"
                  >
                    Order 38 Rule 5
                  </text>
                  <text
                    x="742"
                    y="156"
                    textAnchor="middle"
                    fill="#D1FAE5"
                    fontSize="10"
                  >
                    Account Attachment
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "Stage 1 · Day 1",
                    title: "Serial-Number Warranty Hold",
                    desc: "Lock OEM flash-test & 25-year performance warranty certificates in the manufacturer portal until 100% invoice realization.",
                  },
                  {
                    step: "Stage 2 · <30 Days",
                    title: "NI s.138(b) / SoGA s.56 Notice",
                    desc: "Serve a 15-day statutory demand notice via Email, WhatsApp, and Speed Post RPAD within 30 days of the bank return memo.",
                  },
                  {
                    step: "Stage 3 · Day 20",
                    title: "Mitigation Resale & Price Lock",
                    desc: "Resell unlifted forward-booked containers under Sale of Goods Act s.54(2) and quantify exact ₹/Wp crash damages.",
                  },
                  {
                    step: "Stage 4 · Day 45",
                    title: "NI Act s.138 + s.143A Filing",
                    desc: "Prosecute defaulting directors under s.138/141 and seek 20% interim compensation under Section 143A.",
                  },
                  {
                    step: "Stage 5 · Parallel",
                    title: "Order XXXVII CPC / MSEFC & s.43B(h)",
                    desc: "Pursue summary decree, Order XXXVIII Rule 5 asset attachment, and 3x RBI compound interest for Udyam suppliers.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {item.step}
                    </p>
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

            {/* Section 3: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory Matrix: PDC Enforcement, Warranty Hold &amp; Price-Drop Claims
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute / Provision</th>
                      <th className="p-3.5 font-bold">Solar Supply-Chain Trigger</th>
                      <th className="p-3.5 font-bold">Creditor Remedy &amp; Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act, 1881
                        <br />
                        <span className="text-[#DC2626] font-semibold">
                          s.138, s.141 &amp; s.143A
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700">
                        30/60-day PDC or onboarding security cheque dishonoured
                        by PM Surya Ghar or C&amp;I installer.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        30-day notice window; criminal summons against
                        proprietor/directors; up to <strong>20% interim deposit</strong>{" "}
                        under s.143A &amp; up to 2x cheque fine.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Sale of Goods Act, 1930
                        <br />
                        <span className="text-[#DC2626] font-semibold">
                          s.46, s.54(2) &amp; s.56
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Trader cancels booked 500 kW–2 MW module container after
                        Watt-Peak (₹/Wp) market prices fall.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Exercise unpaid seller&rsquo;s lien, serve 7-day
                        mitigation resale notice, and sue for exact{" "}
                        <strong>₹/Wp price differential + demurrage</strong>.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Contract Act, 1872
                        <br />
                        <span className="text-[#DC2626] font-semibold">
                          s.51, s.54 &amp; s.73
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700">
                        EPC contractor demands OEM Serial-Number Warranty
                        Certificate &amp; ALMM/DCR declaration despite unpaid
                        credit tranche.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Withhold non-physical warranty issuance as a{" "}
                        <strong>reciprocal promise</strong> until 100% ledger
                        clearance; recover contractual late-payment interest.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        CPC, 1908
                        <br />
                        <span className="text-[#DC2626] font-semibold">
                          Order XXXVII &amp; O.38 R.5
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Admitted GST e-Invoices, signed LRs &amp; balance
                        confirmations above ₹3 Lakh (Commercial Court).
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Summary decree (defendant must seek leave to defend);
                        urgent <strong>attachment before judgment</strong> on
                        defaulter&rsquo;s warehouse stock/bank accounts.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        MSMED Act s.15–18 &amp;
                        <br />
                        <span className="text-[#DC2626] font-semibold">
                          IT Act s.43B(h)
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Udyam-registered BOS structure/cable manufacturer or
                        solar OEM unpaid beyond 45 days.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        <strong>3x RBI Bank Rate</strong> monthly compound
                        interest via MSEFC + Income Tax expense disallowance
                        pressure on corporate buyers.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Bharatiya Nyaya Sanhita
                        <br />
                        <span className="text-[#DC2626] font-semibold">
                          BNS s.316 (Breach of Trust)
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Sub-dealer diverts consigned inverters/cables held under
                        bailment/title-retention without remitting proceeds.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Criminal breach-of-trust notice &amp; FIR pathway when
                        entrusted consignment inventory is misappropriated.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive 4-Scenario Explorer */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 Solar Module, Inverter &amp; BOS Default Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your supply-chain failure mode below to view the exact
                48-hour action, statutory forum, and evidentiary pack:
              </p>

              <SolarDistributorScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Ledger: 500 kW Module PDC Bounce + 1 MW Forward-Booking Crash
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Here is how a regional ALMM module &amp; inverter distributor
                quantifies its statutory claim when a Tier-2 EPC defaults on a
                500 kW credit dispatch and abandons a 1 MW forward-booked
                container after a ₹1.80/Wp market price drop (assuming 120 days
                overdue; illustrative figures):
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-red-400 mb-3">
                    Component Breakdown (Principal + Damages)
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm">
                    <li className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                      <span className="text-slate-300">
                        500 kW ALMM TOPCon Modules + 5x 100 kW Inverters (Bounced 30-Day PDC)
                      </span>
                      <span className="font-bold text-white shrink-0">
                        &#8377;88,50,000
                      </span>
                    </li>
                    <li className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                      <span className="text-slate-300">
                        1 MW Booked Container ₹1.80/Wp Price-Drop Loss (SoGA s.56, Net of ₹15L Advance)
                      </span>
                      <span className="font-bold text-amber-400 shrink-0">
                        &#8377;3,00,000
                      </span>
                    </li>
                    <li className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                      <span className="text-slate-300">
                        Port Demurrage, CFS Detention &amp; Bonded Storage (22 Days)
                      </span>
                      <span className="font-bold text-amber-400 shrink-0">
                        &#8377;2,45,000
                      </span>
                    </li>
                    <li className="flex justify-between gap-4 pt-1">
                      <span className="font-bold text-emerald-400">
                        Total Crystalized Principal &amp; Mitigation Claim
                      </span>
                      <span className="font-black text-emerald-400 text-base shrink-0">
                        &#8377;93,95,000
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-800 mb-3">
                      Statutory Interest &amp; Interim Leverage
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                      <li>
                        <strong>NI Act s.143A Interim Deposit (20% of ₹88.50L PDC):</strong>{" "}
                        <span className="font-bold text-emerald-900">
                          &#8377;17,70,000
                        </span>{" "}
                        payable within 60 days of plea recording.
                      </li>
                      <li>
                        <strong>MSMED s.16 Interest (Illustrative 19.5% p.a. / 3x 6.50% RBI Rate, 120 Days on ₹88.50L):</strong>{" "}
                        <span className="font-bold text-emerald-900">
                          ~&#8377;5,75,000+
                        </span>{" "}
                        compounded monthly (run exact dates in our{" "}
                        <Link
                          href="/tools/msme-delayed-payment-interest-calculator"
                          className="text-[#DC2626] underline font-bold"
                        >
                          MSME Interest Calculator
                        </Link>
                        ).
                      </li>
                      <li>
                        <strong>OEM Warranty Leverage:</strong> 900+ module
                        serial numbers &amp; 5 inverter warranties held until full
                        &#8377;99.70L+ settlement.
                      </li>
                    </ul>
                  </div>
                  <p className="mt-4 text-[11px] text-emerald-800 font-medium">
                    Note: Verify exact RBI Bank Rate and Udyam applicability
                    before filing MSEFC claims.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Flash-Test Serial Mapping &amp; BSA 2023 s.63 Proof Checklist
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                {[
                  {
                    title: "1. Original Dishonoured PDC & Return Memo",
                    desc: "Preserve the physical cheque and bank-stamped Return Memo showing exact dishonour date—the 30-day NI Act s.138(b) clock starts here.",
                  },
                  {
                    title: "2. GST e-Invoice, IRN & e-Way Bill",
                    desc: "Download portal-verified GST e-Invoices, e-Way Bills, and GSTR-1 reconciliation proving actual dispatch and ITC availment by the installer.",
                  },
                  {
                    title: "3. Serial-Number Flash-Test & LR/POD",
                    desc: "Attach the factory IV-Curve / Flash-Test Excel sheet mapping every module & inverter serial number to the signed Lorry Receipt (LR).",
                  },
                  {
                    title: "4. Forward-Booking PO & Mitigation Invoices",
                    desc: "For Watt-Peak price-crash defaults, retain the signed Proforma Invoice, readiness notice, and third-party spot resale GST invoices.",
                  },
                  {
                    title: "5. Conditional Warranty Portal Logs",
                    desc: "Export timestamped OEM warranty-portal hold logs and Distributorship Agreement clauses linking warranty activation to full payment.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Certificate",
                    desc: "Execute a Section 63 Bharatiya Sakshya Adhiniyam electronic record certificate covering Tally/SAP ledgers, WhatsApp chats, and emails.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Guardrails */}
            <section
              id="heading-warranty-guardrails"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Strict Legal Guardrails for Module &amp; Inverter Creditors
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <p className="font-bold text-amber-900 mb-1.5">
                    Never Miss the 30-Day s.138 Window
                  </p>
                  <p className="text-amber-800 leading-relaxed">
                    Waiting 45 days for &ldquo;promised RTGS&rdquo; after a PDC
                    bounces permanently extinguishes criminal NI Act s.138
                    jurisdiction on that presentation. Serve the notice by Day 10.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <p className="font-bold text-[#DC2626] mb-1.5">
                    No Defamatory End-Client Blasts
                  </p>
                  <p className="text-red-900 leading-relaxed">
                    Never label an installer a &ldquo;fraud&rdquo; to their
                    PM Surya Ghar homeowner. Communicate only factual,
                    contractual warranty-issuance status in writing.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-300">
                  <p className="font-bold text-slate-900 mb-1.5">
                    No Unauthorized Live Plant Shutdown
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Do not remotely disable an operational inverter paid for by
                    an innocent end-user without express contractual rights or a
                    court order. Use Conditional Warranty Hold &amp; court writs.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Dual-Track B2B CTA */}
            <section id="heading-dual-cta" className="scroll-mt-28">
              <div className="mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Initiate Solar Distributor Credit &amp; PDC Recovery
                </h2>
              </div>
              <SolarDistributorCTA />
            </section>

            {/* Section 9: Internal Links & Sibling Spokes */}
            <section
              id="heading-related-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  IND-19 Solar, EPC &amp; Supply-Chain Recovery Network
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                {[
                  {
                    title: "Solar, Renewable & EV Power Recovery Hub",
                    href: "/industries/solar-renewable-ev-power-recovery",
                    desc: "Parent IND-19 vertical playbook covering RESCO PPAs, EPCs, EV CPOs & DISCOMs.",
                  },
                  {
                    title: "OPEX / RESCO Solar PPA Default & Buyout",
                    href: "/opex-resco-solar-ppa-tariff-default-termination-buyout-repossession",
                    desc: "Arbitration Act s.9 roof access, remote curtailment & Termination Buyout enforcement.",
                  },
                  {
                    title: "C&I Rooftop Solar EPC Net-Metering Recovery",
                    href: "/commercial-industrial-rooftop-solar-epc-net-metering-balance-recovery",
                    desc: "Recover final 20% commissioning milestones stalled by DISCOM/CEIG delays.",
                  },
                  {
                    title: "DISCOM, KUSUM & State Nodal LPS Rules Recovery",
                    href: "/discom-kusum-state-nodal-agency-renewable-payment-delay-lps-rules",
                    desc: "Enforce Electricity LPS Rules 2022 & CERC/SERC payment security mechanisms.",
                  },
                  {
                    title: "Subcontractor & EPC Vendor Payment Recovery",
                    href: "/subcontractor-payment-recovery-india",
                    desc: "Challenge back-to-back payment withholding & enforce RA bill settlements.",
                  },
                  {
                    title: "Section 80 CPC Notice to Government & PSUs",
                    href: "/law/section-80-cpc-notice-to-government",
                    desc: "Mandatory 60-day statutory notice protocol before suing State Nodal Agencies.",
                  },
                  {
                    title: "MSME Delayed Payment Interest Calculator",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    desc: "Compute exact 3x RBI Bank Rate compound interest under MSMED s.16.",
                  },
                  {
                    title: "Commercial Legal Notice & Reply Formats",
                    href: "/templates/legal-notice-reply-format",
                    desc: "Ready-to-use notice & rebuttal templates for commercial credit disputes.",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="p-4 rounded-xl bg-slate-50 hover:bg-red-50/50 border border-slate-200 hover:border-red-200 transition-colors block"
                  >
                    <p className="font-bold text-slate-900 mb-1">
                      {link.title} &rarr;
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {link.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: Solar Credit &amp; PDC Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:border-red-200 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none text-xs sm:text-sm font-bold text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory Bare Acts &amp; Official Renewable Portals
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
                      className="text-slate-700 hover:text-[#DC2626] underline underline-offset-2 leading-relaxed"
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
