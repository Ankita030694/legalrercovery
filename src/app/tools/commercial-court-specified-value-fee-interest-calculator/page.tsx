import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CommercialCourtCalculatorClient from "./CommercialCourtCalculatorClient";
import CommercialCourtTOC from "./CommercialCourtTOC";
import CommercialCourtCTA from "./CommercialCourtCTA";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Reviewer box omitted per §6 rule.

const PAGE_PATH = "/tools/commercial-court-specified-value-fee-interest-calculator";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Interactive Commercial Court Specified-Value (Section 12), Accrued Interest & State-Wise Ad-Valorem Court-Fee Calculator";
const META_TITLE = "Commercial Court Specified Value & Court-Fee Calculator";
const META_DESCRIPTION =
  "Calculate Principal + Pre-Suit Interest under s.12 Commercial Courts Act (₹3L+ threshold) & compare state court fees in Delhi, MH, KA, GJ, TN & UP.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "commercial court specified value and ad valorem court fee calculator",
    "section 12 commercial courts act specified value calculation",
    "state wise court fee calculator money recovery suit delhi mumbai bangalore",
    "pre suit pendente lite commercial interest calculator",
    "does principal plus interest cross 3 lakh commercial court",
    "roi calculator commercial litigation vs write off",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "LegalRecovery.in",
    type: "website",
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

const FAQ_ITEMS = [
  {
    question: "Does Principal plus accrued pre-suit interest count toward the ₹3 Lakh Commercial Court threshold?",
    answer:
      "Yes. Under Section 12(1)(a) of the Commercial Courts Act, 2015, where the relief sought in a suit relates to recovery of money, the 'Specified Value' is the aggregate of the principal amount plus the interest calculated up to the date of filing the suit. If your principal is ₹2,60,000 and accrued contractual interest up to filing is ₹70,200, the Specified Value is ₹3,30,200—qualifying for the Commercial Court.",
  },
  {
    question: "Why is Mumbai (Maharashtra) Commercial Court fee capped at ₹3,00,000 while Delhi is uncapped?",
    answer:
      "Court fees are a State subject under Entry 3 of the State List. Under Article 1 of Schedule I to the Maharashtra Court Fees Act, 1959, the maximum ad-valorem court fee payable on any plaint is strictly capped at ₹3,00,000 (reached around a ₹1.50 Crore claim). Similarly, Gujarat caps court fees at ₹75,000 under the Gujarat Court-Fees Act, 2004. By contrast, Delhi, Karnataka, Tamil Nadu (flat 3%), and Uttar Pradesh have no statutory upper ceiling on ad-valorem court fees.",
  },
  {
    question: "Is Section 12A Pre-Institution Mediation mandatory if Specified Value crosses ₹3,00,000?",
    answer:
      "Yes. Following the Supreme Court's ruling in Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. (2022) 10 SCC 1, Section 12A mediation is strictly mandatory for any commercial suit of ₹3,00,000 or more that does not contemplate urgent interim relief (such as Order 38 Rule 5 attachment before judgment). Non-compliance leads to suo motu rejection of the plaint under Order 7 Rule 11 CPC.",
  },
  {
    question: "Do I get a Court-Fee refund if the debtor settles during Commercial Court proceedings or mediation?",
    answer:
      "Yes. Under Section 16 of the Court-Fees Act, 1870 (and corresponding State amendments such as Section 16A in Delhi or Section 43 in Maharashtra), if the dispute is settled through Section 89 CPC / Section 12A mediation or Lok Adalat, the plaintiff is entitled to a 100% refund of the court fee deposited (or 50% in certain stage-specific state rules). Settling during pre-institution Section 12A mediation avoids depositing ad-valorem court fees altogether.",
  },
  {
    question: "What interest rate can a B2B creditor claim from the default date to the filing date?",
    answer:
      "If the invoice, Purchase Order, or Master Service Agreement stipulates an agreed delayed-payment interest rate (commonly 18% to 24% p.a.), that contractual rate governs pre-suit interest under Section 12(1)(a). If you are a Udyam-registered Micro or Small Enterprise, Section 16 of the MSMED Act, 2006 mandates compound interest with monthly rests at 3x the RBI Bank Rate (currently 20.25% p.a.). Absent a contract, courts typically award commercial usage or Section 34 CPC rates.",
  },
  {
    question: "Should a CFO file a ₹1.2 Crore recovery suit in Commercial Court or NCLT under IBC Section 8?",
    answer:
      "A Commercial Court suit requires upfront ad-valorem court fees (₹75,000 in Gujarat, ₹3,00,000 cap in Maharashtra, or ~₹1.23L in Delhi on ₹1.2 Cr) and yields an executable money decree under Order 21 CPC. An IBC Section 8/9 petition costs a fixed ₹2,000 NCLT filing fee and pressures corporate debtors with insolvency, but cannot be used if any pre-existing dispute exists under Mobilox Innovations. Many CFOs serve both a Commercial Demand Notice and an IBC Form 3/4 notice based on dispute risk.",
  },
];

export default function CommercialCourtSpecifiedValueCalculatorPage() {
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
        name: "B2B Debt Recovery India",
        item: `${SITE_URL}/b2b-debt-recovery-india`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Commercial Court Specified-Value & Fee Calculator",
        item: PAGE_URL,
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: EXACT_H1,
    headline: EXACT_H1,
    url: PAGE_URL,
    description: META_DESCRIPTION,
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    inLanguage: "en-IN",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: EXACT_H1,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: PAGE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Commercial Courts Act s.12(1)(a)</span>
            <span>•</span>
            <span>₹3,00,000+ Threshold Check</span>
            <span>•</span>
            <span>6-State Court-Fee Matrix</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + Parent Hub Link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under <strong>Section 12(1)(a) of the Commercial Courts Act, 2015</strong>, your{" "}
            <strong>Specified Value</strong> equals Principal plus pre-suit interest up to filing.
            Use this tool—part of our{" "}
            <Link
              href="/b2b-debt-recovery-india"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              B2B Debt Recovery India Hub
            </Link>
            —to verify the ₹3 Lakh Commercial Court floor and compare ad-valorem Court Fees across
            Delhi, Maharashtra (₹3L cap), Karnataka, Gujarat (₹75K cap), Tamil Nadu, and UP.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">
                Statutory Floor (s.2(1)(i))
              </span>
              <span className="text-slate-100 font-extrabold text-sm sm:text-base">
                ₹3,00,000+ Specified Value
              </span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">
                Mumbai / Gujarat Caps
              </span>
              <span className="text-emerald-400 font-extrabold text-sm sm:text-base">
                ₹3,00,000 / ₹75,000 Max
              </span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">
                Pre-Suit Interest Rule
              </span>
              <span className="text-amber-400 font-extrabold text-sm sm:text-base">
                Contract / MSME s.16
              </span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 block mb-0.5">
                Settlement Fee Refund
              </span>
              <span className="text-red-400 font-extrabold text-sm sm:text-base">
                Up to 100% (s.16 CFA)
              </span>
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
                label: "B2B Debt Recovery India",
                href: "/b2b-debt-recovery-india",
              },
              {
                label: "Commercial Court Specified-Value & Fee Calculator",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CommercialCourtTOC />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Interactive Calculator */}
            <section
              id="commercial-court-calculator"
              className="scroll-mt-28 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Interactive Specified Value &amp; State Court-Fee Calculator
                </h2>
              </div>
              <CommercialCourtCalculatorClient />
            </section>

            {/* Section 2: Section 12(1)(a) Specified Value */}
            <section
              id="section-12-specified-value"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  How Section 12(1)(a) Calculates Specified Value (₹3L+ Floor)
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following the 2018 Amendment to the Commercial Courts Act, 2015, the pecuniary
                jurisdiction floor under Section 2(1)(i) was reduced from ₹1 Crore to{" "}
                <strong>₹3,00,000</strong>. For CFOs and commercial litigators evaluating{" "}
                <Link
                  href="/recovery-of-unpaid-dues-for-my-business"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  unpaid B2B business dues
                </Link>
                , a common misconception is that only the unpaid invoice principal determines
                Commercial Court eligibility.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Section 12(1)(a)</strong> explicitly mandates that where the relief sought
                is recovery of money, the <em>Specified Value</em> is the aggregate of the principal
                sum claimed <strong>plus interest calculated up to the date of filing the suit</strong>.
                This statutory rule enables suppliers with ₹2.2 Lakh–₹2.9 Lakh principal defaults to
                enter the fast-track Commercial Division once contractual or statutory interest pushes
                the claim past ₹3,00,000.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                <strong>Limitation &amp; Evidence Guardrail:</strong> Ensure your interest clause is
                backed by signed Purchase Orders, Tax Invoices, or an Udyam Registration Certificate,
                and authenticate your Tally/SAP ledger and email reminders with a{" "}
                <Link
                  href="/law/bsa-section-63-electronic-evidence-certificate-tally-erp-whatsapp-b2b"
                  className="text-[#DC2626] font-bold underline"
                >
                  BSA 2023 Section 63 Electronic Evidence Certificate
                </Link>
                .
              </div>
            </section>

            {/* Section 3: State-Wise Court Fees */}
            <section
              id="state-wise-court-fees"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  State-Wise Ad-Valorem Court Fees: Caps vs Uncapped Slabs
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before approving litigation after a Legal Notice expires, General Counsel and CFOs
                invariably ask how much working capital must be locked up in upfront{" "}
                <strong>ad-valorem court fees</strong>. Because Court Fees are governed by State
                statutes, forum selection—where jurisdiction clauses permit—dramatically alters your
                cash outlay.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold">State</th>
                      <th className="py-3 px-4 font-bold">Governing Statute</th>
                      <th className="py-3 px-4 font-bold">Fee on ₹10L</th>
                      <th className="py-3 px-4 font-bold">Fee on ₹1 Cr</th>
                      <th className="py-3 px-4 font-bold">Statutory Cap</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">Gujarat</td>
                      <td className="py-3 px-4 text-slate-600">Gujarat Court-Fees Act, 2004</td>
                      <td className="py-3 px-4 font-semibold">~₹29,500</td>
                      <td className="py-3 px-4 font-bold text-emerald-700">₹75,000</td>
                      <td className="py-3 px-4 text-emerald-700 font-bold">Capped at ₹75,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">Maharashtra</td>
                      <td className="py-3 px-4 text-slate-600">Maharashtra Court Fees Act, 1959</td>
                      <td className="py-3 px-4 font-semibold">~₹20,430</td>
                      <td className="py-3 px-4 font-semibold">~₹2,00,430</td>
                      <td className="py-3 px-4 text-emerald-700 font-bold">Capped at ₹3,00,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">Delhi</td>
                      <td className="py-3 px-4 text-slate-600">Court-Fees (Delhi Amend.) Act</td>
                      <td className="py-3 px-4 font-semibold">~₹12,104</td>
                      <td className="py-3 px-4 font-semibold">~₹99,944</td>
                      <td className="py-3 px-4 text-amber-700 font-bold">Uncapped (~0.98%)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">Karnataka</td>
                      <td className="py-3 px-4 text-slate-600">Karnataka Court-Fees Act, 1958</td>
                      <td className="py-3 px-4 font-semibold">₹47,500</td>
                      <td className="py-3 px-4 font-semibold">₹1,87,500</td>
                      <td className="py-3 px-4 text-amber-700 font-bold">Uncapped (1%–7.5%)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">Tamil Nadu</td>
                      <td className="py-3 px-4 text-slate-600">TN Court-Fees Act, 1955</td>
                      <td className="py-3 px-4 font-semibold">₹30,000</td>
                      <td className="py-3 px-4 font-semibold text-[#DC2626]">₹3,00,000</td>
                      <td className="py-3 px-4 text-amber-700 font-bold">Uncapped (Flat 3%)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">Uttar Pradesh</td>
                      <td className="py-3 px-4 text-slate-600">UP Court-Fees Act, 1870</td>
                      <td className="py-3 px-4 font-semibold">~₹75,500</td>
                      <td className="py-3 px-4 font-semibold text-[#DC2626]">~₹7,50,500</td>
                      <td className="py-3 px-4 text-red-700 font-bold">Uncapped (~7.5%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500">
                Note: Figures above are indicative statutory estimates under Schedule I Article 1
                of each State Act. Always verify exact stamp rounding with local filing counsel.
              </p>
            </section>

            {/* Section 4: Worked CFO Example */}
            <section
              id="worked-cfo-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked CFO Example: ₹2.6L Principal Crossing ₹3L via Interest
                </h2>
              </div>
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Case Study: B2B Engineering Supplier (Delhi Jurisdiction)
                  </span>
                  <span className="text-xs text-slate-400">18 Months Overdue @ 18% p.a.</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block">Unpaid Invoice Principal</span>
                    <span className="text-lg font-extrabold text-white">₹2,60,000</span>
                    <span className="text-[11px] text-amber-300 block">
                      (Below ₹3L if sued alone)
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Pre-Suit Interest (548 days @ 18%)</span>
                    <span className="text-lg font-extrabold text-emerald-400">+ ₹70,264</span>
                    <span className="text-[11px] text-slate-300 block">
                      Under Invoice Clause + s.12(1)(a)
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Total Specified Value</span>
                    <span className="text-lg font-extrabold text-white">₹3,30,264</span>
                    <span className="text-[11px] text-emerald-400 block">
                      ✓ Qualifies for Commercial Court
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 pt-2 border-t border-slate-800 leading-relaxed">
                  <strong>Outcome:</strong> By including accrued interest up to filing, the supplier
                  qualifies for the Commercial Court, triggers mandatory{" "}
                  <Link
                    href="/law/section-12a-commercial-courts-act-pre-institution-mediation-guide"
                    className="text-red-300 underline hover:text-white"
                  >
                    Section 12A Pre-Institution Mediation
                  </Link>
                  , and pays only ₹15,000 in mediation fees—saving the ~₹5,250 Delhi court fee if
                  settled before plaint registration.
                </p>
              </div>
            </section>

            {/* Section 5: SVG Escalation & Fee-Refund Decision Flow */}
            <section
              id="escalation-decision-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Commercial Court Escalation &amp; Fee-Refund Decision Flow
                </h2>
              </div>

              {/* Desktop SVG Diagram */}
              <div className="hidden md:block overflow-x-auto">
                <svg
                  width="760"
                  height="190"
                  viewBox="0 0 760 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Commercial Court Specified Value and Court Fee Escalation Flow"
                >
                  <rect x="10" y="30" width="165" height="120" rx="12" fill="#0F172A" />
                  <text x="92" y="65" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">
                    STEP 1: NOTICE
                  </text>
                  <text x="92" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">
                    Demand Notice
                  </text>
                  <text x="92" y="110" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    Email + WA + RPAD
                  </text>
                  <text x="92" y="128" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    (Zero Court Fee)
                  </text>

                  <path d="M175 90 H205" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="205,85 215,90 205,95" fill="#DC2626" />

                  <rect x="215" y="30" width="165" height="120" rx="12" fill="#1E293B" />
                  <text x="297" y="65" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="700">
                    STEP 2: s.12(1)(a)
                  </text>
                  <text x="297" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">
                    Specified Value
                  </text>
                  <text x="297" y="110" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    Principal + Interest
                  </text>
                  <text x="297" y="128" textAnchor="middle" fill="#34D399" fontSize="10">
                    &gt;= ₹3,00,000 Check
                  </text>

                  <path d="M380 90 H410" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="410,85 420,90 410,95" fill="#DC2626" />

                  <rect x="420" y="30" width="165" height="120" rx="12" fill="#1E293B" />
                  <text x="502" y="65" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="700">
                    STEP 3: s.12A
                  </text>
                  <text x="502" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">
                    Pre-Suit Mediation
                  </text>
                  <text x="502" y="110" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    DLSA / SLSA Form-1
                  </text>
                  <text x="502" y="128" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Saves 100% Court Fee
                  </text>

                  <path d="M585 90 H615" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="615,85 625,90 615,95" fill="#DC2626" />

                  <rect x="625" y="30" width="125" height="120" rx="12" fill="#991B1B" />
                  <text x="687" y="65" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="700">
                    STEP 4: SUIT
                  </text>
                  <text x="687" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">
                    Commercial Plaint
                  </text>
                  <text x="687" y="110" textAnchor="middle" fill="#FECACA" fontSize="11">
                    Pay State Fee
                  </text>
                  <text x="687" y="128" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                    Order 37 / Summary
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "Step 1: Advocate Demand Notice",
                    detail: "Dispatch via Email + WhatsApp + Speed Post RPAD before paying any court fee.",
                  },
                  {
                    step: "Step 2: Section 12(1)(a) Specified Value",
                    detail: "Aggregate Principal + Pre-Suit Interest to check the ₹3,00,000 Commercial Court floor.",
                  },
                  {
                    step: "Step 3: Section 12A Mediation",
                    detail: "Mandatory unless seeking urgent Order 38 Rule 5 attachment; settling here saves 100% court fee.",
                  },
                  {
                    step: "Step 4: Commercial Suit Filing",
                    detail: "Deposit State Ad-Valorem Court Fee (capped in MH/GJ); refundable under s.16 if settled.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
                  >
                    <span className="font-extrabold text-slate-900 block mb-0.5">{item.step}</span>
                    <span className="text-slate-600">{item.detail}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Pre-Suit vs Pendente Lite Interest & Suit ROI */}
            <section
              id="interest-and-litigation-roi"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Pre-Suit vs Pendente Lite Interest &amp; Litigation ROI
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Courts distinguish sharply between <strong>pre-suit interest</strong> (accrued from
                default up to filing—included in Section 12 Specified Value) and{" "}
                <strong>pendente lite / future interest</strong> (from filing until realization,
                governed by Section 34 CPC). While pendente lite interest does not alter your initial
                court fee, claiming a strong contractual rate (18%–24% p.a.) or{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  MSME Section 16 3× Bank Rate compound interest
                </Link>{" "}
                dramatically improves litigation ROI over a write-off.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For larger corporate defaults exceeding ₹1 Crore with zero pre-existing dispute,
                compare your state court-fee outlay against an{" "}
                <Link
                  href="/law/ibc-section-8-demand-notice-form-3-form-4-operational-creditor"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  IBC Section 8 Demand Notice (Form 3 / Form 4)
                </Link>
                . For mid-market accounts (₹3L–₹1 Cr), empirical data in our{" "}
                <Link
                  href="/reports/legal-notice-outcomes-study"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Legal Notice Outcomes Study
                </Link>{" "}
                and{" "}
                <Link
                  href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  multi-channel notice dispatch
                </Link>{" "}
                shows that structured pre-suit notices resolve a major share of solvent B2B arrears
                without paying ad-valorem court fees. If asset dissipation is suspected, pair your
                filing with an{" "}
                <Link
                  href="/order-38-rule-5-attachment-before-judgment-b2b-commodity-recovery"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  Order 38 Rule 5 Attachment Before Judgment
                </Link>{" "}
                application to bypass Section 12A delay.
              </p>
            </section>

            {/* Dual-Track B2B CTA */}
            <CommercialCourtCTA />

            {/* Section 7: FAQs */}
            <section
              id="frequently-asked-questions"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: Section 12 &amp; Court Fees
                </h2>
              </div>
              <div className="space-y-3">
                {FAQ_ITEMS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50/70 p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="cursor-pointer font-bold text-sm sm:text-base text-slate-900 list-none flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 8: Primary Statutory Sources */}
            <section
              id="primary-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Statutory Sources &amp; Court-Fees Acts
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li>
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2156"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    The Commercial Courts Act, 2015 (Sections 2(1)(i), 12 &amp; 12A) — India Code
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2338"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    The Court-Fees Act, 1870 (Sections 7 &amp; 16 Refund on Settlement) — India Code
                  </a>
                </li>
                <li>
                  Maharashtra Court Fees Act, 1959 (Schedule I, Article 1 — ₹3,00,000 Maximum Cap)
                </li>
                <li>
                  Gujarat Court-Fees Act, 2004 (Schedule I, Article 1 — ₹75,000 Maximum Cap)
                </li>
                <li>
                  Karnataka Court-Fees and Suits Valuation Act, 1958 &amp; Tamil Nadu Court-Fees Act, 1955
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
