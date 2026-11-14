import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SarfaesiDrtCalculatorClient from "./SarfaesiDrtCalculatorClient";
import SarfaesiDrtCalculatorTOC from "./SarfaesiDrtCalculatorTOC";
import SarfaesiDrtCalculatorCTA from "./SarfaesiDrtCalculatorCTA";

export const revalidate = 86400;

const PAGE_URL = "/tools/sarfaesi-drt-bank-recovery-forum-calculator";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "SARFAESI, DRT Fee & Bank Recovery Forum Calculator India";
const PAGE_DESCRIPTION =
  "Enter lender type, principal + interest, collateral & borrower entity to check SARFAESI/DRT/IBC eligibility, 60-day dates & Rule 7 DRT fees.";
const H1_TEXT =
  "Interactive Bank & Lender Recovery Forum Selector + DRT OA Fee & SARFAESI Timeline Calculator";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "website",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQS = [
  {
    question: "How is the DRT Section 19 Original Application (OA) fee calculated under Rule 7?",
    answer:
      "Under Rule 7(2) of the Debts Recovery Tribunal (Procedure) Rules, 1993, a bank pays ₹12,000 for the first ₹10 Lakh plus ₹1,000 for every additional ₹1 Lakh or part thereof above ₹10 Lakh, strictly capped at ₹1,50,000 per Original Application. Since the RDB Act s.1(4) pecuniary floor is ₹20 Lakh, minimum DRT OA fees start at ₹22,000.",
  },
  {
    question: "What does the SARFAESI Section 31(j) 20% principal and interest exclusion mean?",
    answer:
      "Under Section 31(j) of the SARFAESI Act, 2002, secured creditors cannot invoke non-judicial SARFAESI enforcement if the unpaid amount due is less than 20% of the principal amount and interest thereon. When a borrower has repaid more than 80% of total dues, the bank must recover the residual balance via DRT, Commercial Courts, Order XXXVII CPC, or Lok Adalat.",
  },
  {
    question: "Can NBFCs and Housing Finance Companies invoke SARFAESI below ₹20 Lakh?",
    answer:
      "RBI/NHB-registered Housing Finance Companies (HFCs) qualify as notified financial institutions for secured debts exceeding ₹1,00,000. By contrast, notified NBFCs with assets of ₹100 Crore or more can enforce SARFAESI only when the individual secured debt equals or exceeds ₹20,00,000 under Ministry of Finance Notifications S.O. 856(E) and S.O. 652(E).",
  },
  {
    question: "Are Cooperative Banks eligible to issue SARFAESI Section 13(2) demand notices?",
    answer:
      "Yes. A 5-Judge Constitution Bench of the Supreme Court in Pandurang Ganpati Chaugule v. Vishwasrao Patil Murgud Sahakari Bank Ltd. (2020) confirmed that State and Multi-State Cooperative Banks qualify as banks under Section 2(1)(c) of SARFAESI, letting them issue Section 13(2) notices alongside Section 84 Registrar Arbitration.",
  },
  {
    question: "What happens if a bank fails to reply to borrower objections within 15 days under Section 13(3A)?",
    answer:
      "Section 13(3A) imposes a mandatory duty on the Authorized Officer to examine borrower representations or objections and communicate reasons for non-acceptance within 15 days of receipt. Proceeding directly to Section 13(4) symbolic possession without timely reasoned disposal routinely causes DRTs to set aside possession measures under Section 17.",
  },
  {
    question: "Can banks file DRT OAs for overdue loans below ₹20 Lakh by combining penal interest?",
    answer:
      "Section 1(4) of the RDB Act fixes the DRT pecuniary threshold at ₹20,00,000 inclusive of accrued contractual interest, while RBI Fair Lending Directions prohibit capitalizing or compounding penal charges onto principal. Accounts under ₹20 Lakh must route through Commercial Courts (>=₹3L), Order XXXVII CPC, PSS s.25, NI s.138, or Pre-Litigation Lok Adalat.",
  },
  {
    question: "Why is DRT generally cheaper than Commercial Courts for high-value bank claims?",
    answer:
      "DRT Original Application fees under Rule 7 hit a hard statutory ceiling of ₹1,50,000 above roughly ₹1.48 Crore. In contrast, state ad-valorem Civil and Commercial Court fees in uncapped states can reach 2% to 7.5% of claim value, requiring banks to pay ₹10 Lakh to ₹30 Lakh+ upfront unless settled early in Pre-Litigation Lok Adalat.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 (Sections 2, 13, 14, 26D & 31) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Recovery of Debts and Bankruptcy (RDB) Act, 1993 (Section 1(4) & Section 19) & Rule 7 Procedure Rules — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1964",
  },
  {
    title: "e-DRT Official Filing Portal & Fee Rules — Department of Financial Services, Ministry of Finance",
    url: "https://drt.gov.in/",
  },
  {
    title: "Central Registry of Securitisation Asset Reconstruction and Security Interest (CERSAI s.26D)",
    url: "https://www.cersai.org.in/",
  },
  {
    title: "Insolvency and Bankruptcy Code (IBC), 2016 (Sections 4, 7 & 95) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/15479",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c) & Section 12A PIMS) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Reserve Bank of India (RBI) Fair Lending Practice — Penal Charges in Loan Accounts & IRACP Norms",
    url: "https://www.rbi.org.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const WEB_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: H1_TEXT,
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  provider: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
  },
};

const SOFTWARE_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: H1_TEXT,
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
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
      name: "Banks Loan Recovery",
      item: `${SITE_URL}/industries/banks-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SARFAESI & DRT Calculator",
      item: CANONICAL_URL,
    },
  ],
};

export default function SarfaesiDrtBankRecoveryCalculatorPage() {
  const breadcrumbItems = [
    { label: "Banks Loan Recovery", href: "/industries/banks-loan-recovery" },
    { label: "SARFAESI & DRT Calculator", href: PAGE_URL },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APP_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-01 Bank Calculator</span>
              <span className="text-red-500">&bull;</span>
              <span>RDB Rule 7 &bull; SARFAESI s.31 &bull; IBC &bull; Commercial s.12A</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 Word Statutory Summary Answer Box + First-250-Word Parent Hub Link */}
            <div
              aria-label="Executive Creditor Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Summary (Bank Legal Officers &amp; NBFC Litigation Leads)
              </span>
              <p>
                Built for our{" "}
                <Link
                  href="/industries/banks-loan-recovery"
                  className="text-red-300 underline hover:text-white font-bold"
                >
                  IND-01 Indian Banking Recovery Hub
                </Link>
                , this tool verifies SARFAESI Section 31(h)/(i)/(j) and NBFC &#8377;20 Lakh exemptions, computes exact RDB Act Rule 7 DRT fees (capped at &#8377;1.5 Lakh) versus state civil fees, and plots the 60+15+30 day statutory calendar.
              </p>
            </div>

            {/* 4-Card Statutory Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  &#8377;12K&ndash;&#8377;1.5L
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Rule 7 DRT OA Fee Ceiling
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  &ge; &#8377;20 Lakh
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  DRT OA &amp; Notified NBFC Floor
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  &gt; 20% Due
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  SARFAESI s.31(j) Eligibility Rule
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  60 + 15 + 30d
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  SARFAESI &amp; e-Auction Clock
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
              Statutory Logic Verified by{" "}
              <Link href="/authors/anuj-anand-malik" className="text-slate-200 underline hover:text-white font-semibold">
                Anuj Anand Malik
              </Link>
              , Advocate &amp; Founder, AMA Legal Solutions &bull; Updated November 2026
            </p>
          </div>
        </section>

        {/* Main 2-Column Content Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-2">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky TOC */}
            <SarfaesiDrtCalculatorTOC />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Interactive Calculator Island */}
              <SarfaesiDrtCalculatorClient />

              {/* Section 2: RDB Act Rule 7 Fee Formula & Slabs */}
              <section
                id="rule-7-drt-fee-formula"
                aria-labelledby="rule-7-drt-fee-formula-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h2
                      id="rule-7-drt-fee-formula-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      RDB Act Rule 7 DRT OA Fee Formula &amp; Slab Table
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Debts Recovery Tribunal (Procedure) Rules, 1993 &mdash; Application Fees for s.19 Original Applications
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Following the Ministry of Finance Notification under Section 1(4) of the Recovery of Debts and Bankruptcy (RDB) Act, 1993, banks and notified Financial Institutions can file Section 19 Original Applications (OAs) on e-DRT when total recoverable debt (principal plus accrued contractual interest) reaches &#8377;20,00,000. Rule 7(2) computes the court fee using the base-plus-incremental-lakh formula below:
                </p>

                <div className="rounded-xl bg-slate-900 text-slate-100 p-4 sm:p-5 border border-slate-800 font-mono text-xs sm:text-sm overflow-x-auto">
                  <p className="text-red-400 font-bold mb-1">
                    RULE 7(2) STATUTORY FORMULA (CLAIMS &ge; &#8377;20,00,000):
                  </p>
                  <p className="text-white font-bold">
                    DRT OA Fee = min(&#8377;1,50,000, &#8377;12,000 + &#8377;1,000 &times; ceil((Total Debt &minus; &#8377;10,00,000) / &#8377;1,00,000))
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[580px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Total Claim Value</th>
                        <th className="p-3.5 border-b border-slate-800">Excess Over &#8377;10L (Units)</th>
                        <th className="p-3.5 border-b border-slate-800">Exact Rule 7 Fee</th>
                        <th className="p-3.5 border-b border-slate-800">Cap Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">&#8377;19,50,000 (Sub-DRT)</td>
                        <td className="p-3.5">Below &#8377;20L s.1(4) Floor</td>
                        <td className="p-3.5 font-bold text-[#DC2626]">Ineligible</td>
                        <td className="p-3.5">Route to Commercial Court / Order 37</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">&#8377;20,00,000 (Minimum OA)</td>
                        <td className="p-3.5">10 units &times; &#8377;1,000</td>
                        <td className="p-3.5 font-bold text-slate-900">&#8377;22,000</td>
                        <td className="p-3.5">Uncapped</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">&#8377;50,00,000</td>
                        <td className="p-3.5">40 units &times; &#8377;1,000</td>
                        <td className="p-3.5 font-bold text-slate-900">&#8377;52,000</td>
                        <td className="p-3.5">Uncapped</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">&#8377;1,00,00,000 (&#8377;1 Cr)</td>
                        <td className="p-3.5">90 units &times; &#8377;1,000</td>
                        <td className="p-3.5 font-bold text-slate-900">&#8377;1,02,000</td>
                        <td className="p-3.5">IBC s.7 Also Triggers (&#8377;25K fee)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">&#8377;1,48,00,000+ &amp; &#8377;10 Cr</td>
                        <td className="p-3.5">&ge; 138 units</td>
                        <td className="p-3.5 font-bold text-emerald-700">&#8377;1,50,000</td>
                        <td className="p-3.5 font-semibold text-emerald-700">Statutory Ceiling Reached</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Commercial Court vs DRT Court Fee Comparison */}
              <section
                id="commercial-court-vs-drt-fees"
                aria-labelledby="commercial-court-vs-drt-fees-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h2
                      id="commercial-court-vs-drt-fees-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Commercial Court vs DRT Court-Fee Cost Comparison
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Evaluating Upfront Court Fees, Section 12A Mediation &amp; Recovery Velocity Across Indian Forums
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  For non-DRT lenders (NBFCs, Cooperative Banks) and sub-&#8377;20 Lakh bank loans, litigation teams must budget under state-specific Court-Fees Acts when filing Commercial Suits (Specified Value &ge; &#8377;3 Lakh) or Civil Order XXXVII Summary Suits. Under Commercial Courts Act Section 12A, Pre-Institution Mediation requires a nominal &#8377;1,000&ndash;&#8377;5,000 DLSA fee (settled inside 3+2 months per <em>Patil Automation</em>) unless urgent interim attachment under Order XXXVIII Rule 5 applies (<em>Yamini Manohar</em>). Meanwhile, Pre-Litigation Lok Adalats carry zero court fee and yield an executable decree under Section 21 of the Legal Services Authorities Act.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                      e-DRT (RDB Act s.19)
                    </span>
                    <p className="text-sm font-extrabold text-slate-900">&#8377;22K to &#8377;1.50 Lakh Cap</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Lowest statutory fee above &#8377;1.48 Crore. Supports interim restraint orders (s.19(12)/(13)) and Recovery Officer execution without state ad-valorem escalation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                      Commercial Court (&ge; &#8377;3L)
                    </span>
                    <p className="text-sm font-extrabold text-slate-900">Ad-Valorem State Fee + s.12A</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Essential where DRT is barred (&lt;&#8377;20L bank loan or NBFC default). Some states cap court fees (e.g., Maharashtra &#8377;3L), while others levy uncapped percentages refundable only upon early settlement.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      Lok Adalat &amp; IBC s.7
                    </span>
                    <p className="text-sm font-extrabold text-slate-900">&#8377;0 (Lok Adalat) / &#8377;25K (NCLT)</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Zero fee for bulk sub-&#8377;20L Lok Adalat dockets; flat &#8377;25,000 fee under AAA Rules for corporate insolvencies exceeding &#8377;1 Crore.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: SARFAESI s.31 & NBFC Eligibility Matrix */}
              <section
                id="sarfaesi-section-31-exemptions"
                aria-labelledby="sarfaesi-section-31-exemptions-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h2
                      id="sarfaesi-section-31-exemptions-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      SARFAESI Section 31 Bars &amp; NBFC &#8377;20L Notification Rules
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Statutory Exclusions Triggering Section 17 SA Quashing in DRT If Ignored by Authorized Officers
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[660px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Exclusion / Threshold</th>
                        <th className="p-3.5 border-b border-slate-800">Statutory Rule</th>
                        <th className="p-3.5 border-b border-slate-800">Litigation Consequence</th>
                        <th className="p-3.5 border-b border-slate-800">Correct Recovery Route</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Section 31(h) (&le; &#8377;1 Lakh)</td>
                        <td className="p-3.5">Bars SARFAESI for financial assets not exceeding &#8377;1,00,000</td>
                        <td className="p-3.5">s.13(2) void ab initio</td>
                        <td className="p-3.5">Lok Adalat, PSS s.25, NI s.138</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Section 31(i) Agricultural Land</td>
                        <td className="p-3.5">Security interest over agricultural land is exempt</td>
                        <td className="p-3.5">Tested on actual agro use (<em>ITC v. Blue Coast Hotels</em>)</td>
                        <td className="p-3.5">State RRC Acts &amp; Civil Suit</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Section 31(j) &lt; 20% Due</td>
                        <td className="p-3.5">Bars SARFAESI when unpaid sum &lt; 20% of principal + interest</td>
                        <td className="p-3.5">Mandatory DRT s.17 stay if borrower paid &gt; 80%</td>
                        <td className="p-3.5">Commercial s.12A / Order 37 / DRT</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Notified NBFC (&#8377;100Cr / &#8377;20L)</td>
                        <td className="p-3.5">MoF S.O. 856(E)/652(E) requires &ge; &#8377;100Cr AUM &amp; &ge; &#8377;20L loan</td>
                        <td className="p-3.5">Sub-&#8377;20L NBFC loans barred from SARFAESI &amp; DRT</td>
                        <td className="p-3.5">Commercial Court / ODR / s.25</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">Co-op Banks &amp; HFCs</td>
                        <td className="p-3.5">HFCs from &gt; &#8377;1L; Co-op Banks eligible via <em>Chaugule</em> (2020)</td>
                        <td className="p-3.5">Requires CERSAI s.26D filing prior to s.13(4)</td>
                        <td className="p-3.5">SARFAESI + MSCS s.84 Arbitration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: SVG Workflow Diagram */}
              <section
                id="statutory-recovery-timeline"
                aria-labelledby="statutory-recovery-timeline-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h2
                      id="statutory-recovery-timeline-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      60 + 15 + 30 Day SARFAESI &amp; DRT Statutory Workflow
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Visualizing Mandatory Cure Periods, Authorized Officer Reply Clocks &amp; e-Auction Milestones
                    </p>
                  </div>
                </div>

                {/* Desktop Hand-Authored SVG Diagram */}
                <div className="hidden md:block rounded-xl border border-slate-200 bg-slate-900 p-4 overflow-x-auto">
                  <svg
                    width={920}
                    height={250}
                    viewBox="0 0 920 250"
                    role="img"
                    aria-label="5-stage SARFAESI and DRT recovery statutory timeline showing Day 0 s.13(2), 15-day s.13(3A) reply, Day 61 s.13(4) possession, s.14 DM order and 30-day e-auction"
                    className="w-full h-auto"
                  >
                    <rect x="0" y="0" width="920" height="250" rx="12" fill="#0F172A" />
                    <text x="24" y="30" fill="#F87171" fontSize="11" fontWeight="700" letterSpacing="1">
                      SARFAESI ACT 2002 + RDB ACT s.19 STATUTORY RECOVERY CLOCK
                    </text>

                    {/* Box 1 */}
                    <rect x="20" y="52" width="156" height="162" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="32" y="78" fill="#FBBF24" fontSize="10" fontWeight="700">STAGE 01 &bull; DAY 0</text>
                    <text x="32" y="98" fill="#FFFFFF" fontSize="12" fontWeight="700">NPA &amp; s.13(2)</text>
                    <text x="32" y="120" fill="#CBD5E1" fontSize="10">CERSAI s.26D Check</text>
                    <text x="32" y="138" fill="#CBD5E1" fontSize="10">Uncapitalized Penal</text>
                    <text x="32" y="156" fill="#CBD5E1" fontSize="10">RPAD + Affixation</text>
                    <text x="32" y="192" fill="#34D399" fontSize="9.5" fontWeight="700">60-Day Clock Starts</text>

                    <path d="M176 132 L198 132" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="198,127 206,132 198,137" fill="#DC2626" />

                    {/* Box 2 */}
                    <rect x="206" y="52" width="156" height="162" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="218" y="78" fill="#FBBF24" fontSize="10" fontWeight="700">STAGE 02 &bull; +15d</text>
                    <text x="218" y="98" fill="#FFFFFF" fontSize="12" fontWeight="700">s.13(3A) Reply</text>
                    <text x="218" y="120" fill="#CBD5E1" fontSize="10">Borrower Objections</text>
                    <text x="218" y="138" fill="#CBD5E1" fontSize="10">15-Day Mandatory</text>
                    <text x="218" y="156" fill="#CBD5E1" fontSize="10">Reasoned Disposal</text>
                    <text x="218" y="192" fill="#F87171" fontSize="9.5" fontWeight="700">Strict Compliance</text>

                    <path d="M362 132 L384 132" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="384,127 392,132 384,137" fill="#DC2626" />

                    {/* Box 3 */}
                    <rect x="392" y="52" width="156" height="162" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="404" y="78" fill="#FBBF24" fontSize="10" fontWeight="700">STAGE 03 &bull; DAY 61</text>
                    <text x="404" y="98" fill="#FFFFFF" fontSize="12" fontWeight="700">s.13(4) Possession</text>
                    <text x="404" y="120" fill="#CBD5E1" fontSize="10">Appendix IV Notice</text>
                    <text x="404" y="138" fill="#CBD5E1" fontSize="10">Publish in 2 Papers</text>
                    <text x="404" y="156" fill="#CBD5E1" fontSize="10">Within 7d (Rule 8(2))</text>
                    <text x="404" y="192" fill="#34D399" fontSize="9.5" fontWeight="700">Symbolic Control</text>

                    <path d="M548 132 L570 132" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="570,127 578,132 570,137" fill="#DC2626" />

                    {/* Box 4 */}
                    <rect x="578" y="52" width="156" height="162" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="590" y="78" fill="#FBBF24" fontSize="10" fontWeight="700">STAGE 04 &bull; 30-60d</text>
                    <text x="590" y="98" fill="#FFFFFF" fontSize="12" fontWeight="700">s.14 DM / CMM</text>
                    <text x="590" y="120" fill="#CBD5E1" fontSize="10">9-Point Affidavit</text>
                    <text x="590" y="138" fill="#CBD5E1" fontSize="10">Police Assistance</text>
                    <text x="590" y="156" fill="#CBD5E1" fontSize="10">Physical Takeover</text>
                    <text x="590" y="192" fill="#34D399" fontSize="9.5" fontWeight="700">Asset Custody</text>

                    <path d="M734 132 L756 132" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="756,127 764,132 756,137" fill="#DC2626" />

                    {/* Box 5 */}
                    <rect x="764" y="52" width="136" height="162" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="776" y="78" fill="#34D399" fontSize="10" fontWeight="700">STAGE 05 &bull; +30d</text>
                    <text x="776" y="98" fill="#FFFFFF" fontSize="12" fontWeight="700">Rule 8(6) Sale</text>
                    <text x="776" y="120" fill="#CBD5E1" fontSize="10">30d 1st e-Auction</text>
                    <text x="776" y="138" fill="#CBD5E1" fontSize="10">15d Repeat Sale</text>
                    <text x="776" y="156" fill="#CBD5E1" fontSize="10">+ DRT s.19 OA</text>
                    <text x="776" y="192" fill="#34D399" fontSize="9.5" fontWeight="700">Deficit Recovery</text>

                    <text x="24" y="236" fill="#94A3B8" fontSize="10">
                      Banks can pursue e-DRT s.19 OA or s.138/s.25 bounce prosecution concurrently with SARFAESI possession.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-2.5">
                  {[
                    { num: "01", title: "Day 0: s.13(2) Notice", desc: "Check CERSAI s.26D, separate penal charges, and dispatch via RPAD/WhatsApp." },
                    { num: "02", title: "+15d: s.13(3A) Reply", desc: "Mandatory reasoned reply within 15 days of receiving borrower objections." },
                    { num: "03", title: "Day 61: s.13(4) Symbolic Possession", desc: "Affix Appendix IV and publish in 2 newspapers within 7 days (Rule 8(2))." },
                    { num: "04", title: "30-60d: s.14 DM/CMM Order", desc: "Submit 9-point affidavit for physical possession order." },
                    { num: "05", title: "+30d/15d: Rule 8(6) E-Auction + DRT OA", desc: "30 clear days first sale notice; parallel s.19 OA for unrecovered balance." },
                  ].map((s) => (
                    <div key={s.num} className="p-3.5 rounded-xl bg-slate-900 text-white border border-slate-800 flex gap-3">
                      <span className="w-6 h-6 rounded-md bg-[#DC2626] text-[11px] font-black flex items-center justify-center shrink-0">
                        {s.num}
                      </span>
                      <div>
                        <p className="text-xs font-bold">{s.title}</p>
                        <p className="text-[11px] text-slate-300 mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6: Worked Bank NPA Walkthroughs */}
              <section
                id="worked-bank-npa-examples"
                aria-labelledby="worked-bank-npa-examples-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <h2
                      id="worked-bank-npa-examples-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Worked Bank NPA Calculations: &#8377;68.5L Secured vs &#8377;14.2L Loan
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Step-by-Step Forum Routing, DRT Fee Derivation &amp; Cost Comparison for Credit Officers
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-100 text-[#DC2626]">
                      Case A &bull; &#8377;68.50 Lakh MSME LAP NPA
                    </span>
                    <p className="text-sm font-bold text-slate-900">
                      Original Loan: &#8377;80L | Principal: &#8377;58L + Interest: &#8377;8.5L + Penal: &#8377;2L
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      <strong>SARFAESI s.31(j):</strong> Remaining P+I (&#8377;66.5L) equals 83.1% of &#8377;80L (&ge; 20% threshold met). With CERSAI registered on non-agri property, the branch serves s.13(2) immediately. <strong>DRT Rule 7 Fee:</strong> &#8377;58.5L excess over &#8377;10L rounds to 59 units &rarr; &#8377;12,000 + 59 &times; &#8377;1,000 = <strong>&#8377;71,000</strong> (saving &#8377;2.37 Lakh versus a 4.5% civil suit fee of &#8377;3,08,250).
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      Case B &bull; &#8377;14.20 Lakh Sub-DRT Unsecured Loan
                    </span>
                    <p className="text-sm font-bold text-slate-900">
                      Principal: &#8377;12.40L + Interest: &#8377;1.45L + Penal: &#8377;35K (e-NACH Bounce)
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      <strong>DRT &amp; SARFAESI Status:</strong> Barred from DRT (&lt; &#8377;20L) and SARFAESI (no security interest). <strong>Optimal Routing:</strong> Trigger immediate <strong>PSS Act s.25</strong> criminal e-NACH dishonour notice (30d + 15d cure) alongside a Commercial Court <strong>Section 12A</strong> PIMS docket (&#8377;1,000 fee) or zero-fee Pre-Litigation Lok Adalat settlement.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Edge Cases & Statutory Guardrails */}
              <section
                id="edge-cases-rbi-guardrails"
                aria-labelledby="edge-cases-rbi-guardrails-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    7
                  </span>
                  <div>
                    <h2
                      id="edge-cases-rbi-guardrails-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      RBI Penal-Charge Hygiene, CERSAI s.26D &amp; Forum Guardrails
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Four Procedural Pitfalls That Trigger DRT Quashing Orders Under Section 17
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc list-inside">
                  <li>
                    <strong>RBI Uncapitalized Penal Charges:</strong> Under RBI Fair Lending Directions, penal charges cannot be capitalized into principal or accrue further interest. Mixing compounded penal interest into Section 13(2) or DRT ledger certificates invites objections on s.13(3) itemization.
                  </li>
                  <li>
                    <strong>CERSAI Section 26D Bar:</strong> Secured creditors cannot exercise Chapter III SARFAESI enforcement unless the mortgage or hypothecation is registered with CERSAI before initiating possession.
                  </li>
                  <li>
                    <strong>Guarantor Invocation (s.128 &amp; IBC Form B):</strong> Per <em>Syndicate Bank v. Channaveerappa Beleri</em>, limitation against an on-demand guarantor starts from formal invocation. Never mark guarantors merely as &ldquo;CC&rdquo;; serve separate demand notices prior to DRT or IBC s.95 Form B.
                  </li>
                  <li>
                    <strong>Neutral Arbitrator Rule:</strong> Unilateral appointment clauses violate Section 12(5) (<em>Perkins Eastman</em> &amp; 5-Judge <em>CORE</em>). Route loan arbitrations strictly through neutral institutional ODR rosters.
                  </li>
                </ul>

                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  <strong>Statutory Verification Notice:</strong> Calculations apply statutory rules under the RDB Act, SARFAESI Act, IBC, and Commercial Courts Act as of November 2026. Branches must confirm current state-specific Court-Fees Act schedules, Vakalatnama stamps, and local DRT/NCLT filing portal tariffs before remittance.
                </div>
              </section>

              {/* Section 8: Dual-Track B2B Conversion CTA */}
              <section
                id="institutional-dispatch-cta"
                aria-labelledby="institutional-dispatch-cta-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    8
                  </span>
                  <div>
                    <h2
                      id="institutional-dispatch-cta-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Dispatch Pre-SARFAESI, Recall or Bulk Lok Adalat Notices
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Submit 1 Test NPA Account at &#8377;999 or Launch 10&ndash;10,000+ Zonal CSV Batches via LegalRecovery.in
                    </p>
                  </div>
                </div>
                <SarfaesiDrtCalculatorCTA />
              </section>

              {/* Section 9: Cross-Link Directory */}
              <section
                id="banking-recovery-directory"
                aria-labelledby="banking-recovery-directory-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    9
                  </span>
                  <div>
                    <h2
                      id="banking-recovery-directory-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Related Banking Playbooks, Bulk Solutions &amp; Calculators
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Explore Live Creditor Hubs, Notice Templates &amp; Statutory Deadline Tools
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {[
                    {
                      title: "IND-01 Bank Loan & NPA Legal Recovery Hub",
                      href: "/industries/banks-loan-recovery",
                      tag: "Parent Hub",
                      desc: "Full 17-spoke banking playbook across SARFAESI, DRT, SMA-2 cure & Co-op Banks.",
                    },
                    {
                      title: "Legal Notice for Banks to Recover Unpaid Dues",
                      href: "/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues",
                      tag: "Bank Notice Desk",
                      desc: "Advocate-drafted loan recall, guarantor invocation & security cheque notice process.",
                    },
                    {
                      title: "Bulk Recovery Cases: CSV Batch Institutional Desk",
                      href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                      tag: "10–10,000+ Cases",
                      desc: "Automate Email, WhatsApp & Speed Post RPAD dispatch across zonal NPA portfolios.",
                    },
                    {
                      title: "Pre-Litigation Lok Adalat for Money Recovery",
                      href: "/law/lok-adalat-pre-litigation-money-recovery",
                      tag: "₹0 Court Fee",
                      desc: "Generate Section 21 LSA Act Civil Court decrees without state court fees.",
                    },
                    {
                      title: "NBFC, Fintech, HFC & MFI Recovery Infrastructure",
                      href: "/industries/nbfc-fintech-loan-recovery",
                      tag: "IND-02 Hub",
                      desc: "HFC ₹1L vs NBFC ₹20L SARFAESI rules, PSS s.25 mandates & Gold s.176 auctions.",
                    },
                    {
                      title: "Arbitration for Personal Loan Defaults (Banks)",
                      href: "/arbitration-personal-loan-defaults-bank-recovery-mechanism",
                      tag: "Perkins & CORE",
                      desc: "Neutral institutional ODR arbitration protecting retail awards from s.34 set-asides.",
                    },
                    {
                      title: "Recover Small-Ticket Personal Loans Legally",
                      href: "/recover-small-ticket-personal-loans-legally-banks",
                      tag: "Sub-₹20L Retail",
                      desc: "Cost-effective legal recovery workflows below the ₹20 Lakh DRT limit.",
                    },
                    {
                      title: "Promissory Note & Guarantee Format (Template)",
                      href: "/templates/promissory-note-format-india",
                      tag: "Notice Template",
                      desc: "Enforceable Section 4 NI Act debt instruments supporting Order XXXVII suits.",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626]/60 bg-slate-50/50 hover:bg-white transition-all flex flex-col justify-between gap-2"
                    >
                      <div>
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2 py-0.5 rounded-full mb-1.5">
                          {item.tag}
                        </span>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#DC2626]">
                        Open Guide &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="calculator-faqs"
                aria-labelledby="calculator-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    10
                  </span>
                  <div>
                    <h2
                      id="calculator-faqs-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      FAQs: SARFAESI Eligibility, DRT Rule 7 Fees &amp; Bank Forums
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Direct Statutory Clarifications for Bank Authorized Officers &amp; Credit Legal Teams
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-slate-200 bg-slate-50/50 open:bg-white p-4 sm:p-5 transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-xs sm:text-sm md:text-base cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-base shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Authorities */}
              <section
                id="statutory-sources"
                aria-labelledby="statutory-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    11
                  </span>
                  <div>
                    <h2
                      id="statutory-sources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Official Acts, MoF Notifications &amp; Tribunal Portals
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Primary Statutes, Regulatory Directions &amp; Electronic Registry Portals
                    </p>
                  </div>
                </div>

                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
