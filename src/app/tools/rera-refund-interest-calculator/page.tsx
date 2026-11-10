import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ReraRefundCalculatorClient from "./ReraRefundCalculatorClient";
import ReraRefundCalculatorTOC from "./ReraRefundCalculatorTOC";
import ReraRefundNoticeCTA from "./ReraRefundNoticeCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "RERA Refund Interest Calculator (SBI MCLR + 2%)",
  description:
    "Calculate the interest a builder owes on your refund or delay compensation under RERA, using state rules on MCLR plus 2%.",
  keywords: [
    "rera interest calculator",
    "rera interest rate on refund",
    "delay possession interest calculation",
    "rera section 18 interest",
    "builder delay compensation calculator",
    "sbi mclr plus 2 percent rera",
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/rera-refund-interest-calculator`,
  },
  openGraph: {
    title: "RERA Section 18 Refund & Delay Interest Calculator (SBI MCLR + 2%)",
    description:
      "Multi-instalment RERA Section 18 calculator: compute simple interest at SBI highest MCLR + 2% (or UP RERA MCLR + 1%) on delayed flat or plot handovers.",
    url: `${SITE_URL}/tools/rera-refund-interest-calculator`,
    type: "website",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title:
      "Real Estate (Regulation and Development) Act, 2016 (Act No. 16 of 2016) — Section 2(za), Section 18, Section 31 & Section 40",
    url: "https://www.indiacode.nic.in/handle/123456789/2158",
  },
  {
    title:
      "Supreme Court of India — M/s Newtech Promoters and Developers Pvt. Ltd. v. State of U.P. & Ors., (2021) 18 SCC 1 (3-Judge Bench)",
    url: "https://main.sci.gov.in/supremecourt/2020/36577/36577_2020_34_1501_31510_Judgement_11-Nov-2021.pdf",
  },
  {
    title:
      "Supreme Court of India — Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor, (2022) 15 SCC 286 (Interest From Each Payment Date)",
    url: "https://main.sci.gov.in/supremecourt/2021/14045/14045_2021_4_1501_34821_Judgement_07-Apr-2022.pdf",
  },
  {
    title:
      "Supreme Court of India — Imperia Structures Ltd. v. Anil Patni & Anr., (2020) 10 SCC 783 (Concurrent RERA & CPA Remedies)",
    url: "https://main.sci.gov.in/supremecourt/2019/9796/9796_2019_35_1501_24532_Judgement_02-Nov-2020.pdf",
  },
  {
    title:
      "State Bank of India (SBI) — Marginal Cost of Funds-Based Lending Rate (MCLR) Official Schedule",
    url: "https://sbi.co.in/web/interest-rates/interest-rates/mclr-historical-data",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Payment Receipts, Demand Letters & RERA Portal Extracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const FAQS = [
  {
    question: "What is the current RERA interest rate on refund under Section 18?",
    answer:
      "Under Section 18(1) read with Section 2(za) of the Real Estate (Regulation and Development) Act, 2016 and the rules notified by most states (including Maharashtra, Haryana, Karnataka, Tamil Nadu, Rajasthan, and Gujarat), the statutory interest rate is the State Bank of India (SBI) highest Marginal Cost of Funds-based Lending Rate (MCLR) plus 2% per annum. With the SBI 3-year highest tenor MCLR at 8.95% as of October–November 2026, the effective RERA refund interest rate is 10.95% p.a. simple interest (9.95% p.a. in Uttar Pradesh under the MCLR + 1% rule).",
  },
  {
    question: "Does RERA refund interest run from each payment date or from the promised possession date?",
    answer:
      "It depends on which Section 18 remedy you choose. When an allottee withdraws from a delayed project under Section 18(1)(a), the Supreme Court held in Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor (2022) 15 SCC 286 that simple interest must be paid on each instalment from the exact date it was deposited with the builder until actual realisation. Conversely, if the allottee stays in the project under the proviso to Section 18(1), monthly delay interest runs from the promised possession date in the Agreement for Sale until actual handover with an Occupancy Certificate.",
  },
  {
    question: "Can a builder pay ₹5 per sq. ft. as delay compensation instead of the RERA SBI MCLR + 2% rate?",
    answer:
      "No. Under Section 2(za)(i) of RERA 2016, the rate of interest payable by the promoter to the allottee must equal the rate of interest chargeable by the promoter from the allottee for default. In Pioneer Urban Land and Infrastructure Ltd. v. Govindan Raghavan (2019) 5 SCC 725, the Supreme Court struck down one-sided Builder-Buyer Agreement clauses that charged buyers 18% interest while offering ₹5 per sq. ft. (around 1.5% p.a.) for builder delay.",
  },
  {
    question: "Within how many days must a builder pay the calculated refund and interest under RERA?",
    answer:
      "Under Rule 18 of the Central RERA Model Rules and corresponding state rules (such as Maharashtra, Karnataka, and Uttar Pradesh), the promoter must refund the entire principal along with accrued SBI MCLR + 2% (or +1%) interest within 45 days (60 days in Haryana under HRERA rules) of the refund claim or RERA authority order.",
  },
  {
    question: "Is my right to a RERA Section 18 refund affected if the builder claims Force Majeure or NGT bans?",
    answer:
      "In M/s Newtech Promoters and Developers Pvt. Ltd. v. State of U.P. (2021) 18 SCC 1, a 3-Judge Bench of the Supreme Court ruled that an allottee's right to seek a refund with interest under Section 18(1) is unqualified and unconditional once the builder fails to hand over possession by the timeline specified in the Agreement for Sale, excluding only officially notified statutory COVID-19 or NGT moratoria.",
  },
  {
    question: "What happens if the builder ignores the RERA refund and interest order?",
    answer:
      "If a builder fails to pay within the 45-to-60-day statutory window after a RERA order, the homebuyer can file an execution application under Section 40(1) of RERA 2016. The State RERA Authority issues a Recovery Certificate (RC) to the District Collector (Tehsildar) to recover the principal and MCLR + 2% interest as arrears of land revenue by attaching the builder's bank accounts and unsold inventory.",
  },
  {
    question: "Builder flat possession late kare ya refund na de toh RERA interest ke saath paisa wapas kaise le?",
    answer:
      "Agar builder Agreement for Sale ki date tak possession nahi deta, toh RERA Section 18 ke tehat aap 100% principal amount aur SBI MCLR + 2% (lagbhag 10.95% salana) interest ke saath refund maang sakte hain. Sabse pehle upar diye calculator se har payment ki interest schedule nikalein aur advocate ke madhyam se builder ke directors ko 15-day statutory legal demand notice bhejein, jiske baad State RERA ya e-Jagriti Consumer Commission mein case darj kiya ja sakta hai.",
  },
];

const WEB_APPLICATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "RERA Refund Interest Calculator (SBI MCLR + 2%)",
  url: `${SITE_URL}/tools/rera-refund-interest-calculator`,
  description:
    "Calculate the interest a builder owes on your refund or delay compensation under RERA Section 18, using state rules on SBI highest MCLR plus 2%.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "All",
  inLanguage: "en-IN",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  featureList: [
    "Multi-instalment RERA Section 18(1)(a) complete withdrawal refund interest calculator",
    "Section 18(1) proviso monthly delay possession compensation calculator",
    "State-wise RERA interest presets (SBI Highest MCLR + 2%, UP RERA MCLR + 1%, NCDRC 9% benchmark)",
    "Downloadable Excel CSV & copy-ready legal notice schedule",
  ],
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
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
      name: "Builder Booking Cancellation & RERA Hub",
      item: `${SITE_URL}/builder-booking-cancellation-refund-legal-notice`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "RERA Refund Interest Calculator",
      item: `${SITE_URL}/tools/rera-refund-interest-calculator`,
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Reviewer box omitted per Section 7 guidelines.

export default function ReraRefundInterestCalculatorPage() {
  const breadcrumbItems = [
    {
      label: "Builder & RERA Refunds",
      href: "/builder-booking-cancellation-refund-legal-notice",
    },
    {
      label: "RERA Refund Interest Calculator",
      href: "/tools/rera-refund-interest-calculator",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APPLICATION_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching IRCTC & T2 dark theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 18 &amp; 2(za) RERA Act, 2016</span>
              <span className="text-red-500">•</span>
              <span>SBI Highest MCLR + 2% Calculator</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Calculate Refund With Interest Under RERA Section 18
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Section 18 RERA &amp; SBI MCLR + 2% Mandate)
              </p>
              <p>
                Under Section 18(1) and Section 2(za) of the Real Estate (Regulation and Development) Act, 2016, a builder who misses the Agreement for Sale possession date must refund 100% of your payments with simple interest at SBI&apos;s highest MCLR plus 2% (currently 10.95% p.a.) from each instalment date within 45–60 days.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  10.95% p.a.
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  SBI 3-Yr MCLR (8.95%) + 2%
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  100% Refund
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Unqualified Right (Newtech SC)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  45–60 Days
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Statutory Builder Payout Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  Sec 40(1) RC
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Arrears of Land Revenue Recovery
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <ReraRefundCalculatorTOC />

            <main className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Archetype T2 Stepper Tool Island */}
              <section
                id="heading-calculator"
                aria-labelledby="heading-calculator-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-calculator-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive RERA Section 18 Refund &amp; Delay Interest Calculator
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Select your state RERA rule, adjust the SBI highest MCLR rate if needed, and enter each payment instalment with its receipt date to generate an itemised claim schedule.
                  </p>
                </div>

                <ReraRefundCalculatorClient />
              </section>

              {/* Section 2: Result Interpretation & State-Wise RERA Interest Rules Table */}
              <section
                id="heading-interpretation-table"
                aria-labelledby="heading-interpretation-table-title"
                className="scroll-mt-28 space-y-5"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-interpretation-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    How to Interpret Results &amp; State RERA Interest Rules
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Your legal remedy, interest start date, and filing forum depend on whether you want to exit the stalled project completely or retain the apartment with monthly delay compensation:
                  </p>
                </div>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      RERA Section 18 Result Interpretation &amp; State-by-State Interest Rate Matrix
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5">
                          State / Forum Authority
                        </th>
                        <th scope="col" className="py-3 px-3.5">
                          Statutory Interest Formula
                        </th>
                        <th scope="col" className="py-3 px-3.5">
                          Effective Rate (Nov 2026)
                        </th>
                        <th scope="col" className="py-3 px-3.5">
                          Payout Window &amp; Next Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-semibold text-slate-900">
                          Maharashtra (MahaRERA), Karnataka (KRERA), Tamil Nadu (TNRERA), Gujarat
                        </th>
                        <td className="py-3 px-3.5 text-xs font-mono">
                          SBI Highest MCLR + 2% (Rule 18)
                        </td>
                        <td className="py-3 px-3.5 text-emerald-700 font-bold">
                          10.95% p.a. Simple
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          45 days from demand; serve Section 18 notice then file online RERA complaint.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-semibold text-slate-900">
                          Haryana (HRERA Gurugram &amp; Panchkula) &amp; Rajasthan (R-RERA)
                        </th>
                        <td className="py-3 px-3.5 text-xs font-mono">
                          SBI Highest MCLR + 2% (Rule 15)
                        </td>
                        <td className="py-3 px-3.5 text-emerald-700 font-bold">
                          10.95% p.a. Simple
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          60 days (Haryana) / 45 days (Rajasthan); execute via Section 40 RC if unpaid.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-semibold text-slate-900">
                          Uttar Pradesh (UP RERA — Noida, Greater Noida, Lucknow)
                        </th>
                        <td className="py-3 px-3.5 text-xs font-mono">
                          SBI MCLR + 1% (UP Rules)
                        </td>
                        <td className="py-3 px-3.5 text-blue-700 font-bold">
                          9.95% p.a. Simple
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          45 days from order; District Magistrate recovers via e-RC attachment.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-semibold text-slate-900">
                          Consumer Commissions (e-Jagriti — District / State / NCDRC)
                        </th>
                        <td className="py-3 px-3.5 text-xs font-mono">
                          Experion Developers SC Standard
                        </td>
                        <td className="py-3 px-3.5 text-amber-700 font-bold">
                          9.00% p.a. + Damages
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Best when claiming additional mental agony compensation and litigation costs.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 font-semibold text-slate-900">
                          Carpet Area Shortfall (&gt;3% Reduction on Handover)
                        </th>
                        <td className="py-3 px-3.5 text-xs font-mono">
                          Section 14(2) &amp; BBA Clause
                        </td>
                        <td className="py-3 px-3.5 text-red-700 font-bold">
                          Pro-Rata + 10.95% Interest
                        </td>
                        <td className="py-3 px-3.5 text-xs">
                          Builder must refund excess per-sq.-ft. price within 45 days with MCLR + 2%.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic">
                  Cancelling a booking before possession delay? Check our{" "}
                  <Link
                    href="/builder-booking-cancellation-refund-legal-notice"
                    className="text-blue-700 underline font-semibold"
                  >
                    builder booking cancellation refund legal notice guide
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/templates/flat-booking-cancellation-letter"
                    className="text-blue-700 underline font-semibold"
                  >
                    flat booking cancellation letter format
                  </Link>
                  .
                </p>
              </section>

              {/* Section 3: Method, Formula & Legal Basis */}
              <section
                id="heading-method-legal-basis"
                aria-labelledby="heading-method-legal-basis-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-method-legal-basis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  How Section 18 RERA Interest Is Computed Per Instalment
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under <strong>Section 18(1) of RERA 2016</strong>, if a promoter fails to give possession of an apartment, plot, or building in accordance with the terms of the Agreement for Sale by the specified date, the allottee&apos;s right to claim a refund with interest is absolute. Unlike MSME invoices where interest compounds monthly, State RERA rules mandate <strong>simple interest calculated separately on each payment tranche</strong> from the date the builder received that tranche:
                </p>

                <div className="bg-slate-900 text-slate-100 rounded-xl p-5 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Statutory Per-Instalment Simple Interest Formula
                  </div>
                  <p className="font-mono text-xs sm:text-sm text-emerald-300 bg-slate-950/80 p-3.5 rounded-lg border border-slate-800 overflow-x-auto">
                    Effective_Rate = SBI_Highest_MCLR + 2.00% (or +1.00% under UP RERA)
                    <br />
                    Instalment_Interest(i) = Amount_Paid(i) × (Effective_Rate / 100) × (Days_Elapsed(i) / 365)
                    <br />
                    Total_Section_18_Claim = Σ Amount_Paid(i) + Σ Instalment_Interest(i)
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Excel Formula for Homebuyers:</strong> If cell <code className="text-amber-300">B2</code> is the Instalment Amount, <code className="text-amber-300">C2</code> is the Payment Date, <code className="text-amber-300">D2</code> is the Refund Cut-Off Date, and <code className="text-amber-300">E2</code> is the annual rate (<code className="text-amber-300">0.1095</code>), enter <code className="text-emerald-300">=B2 * E2 * ((D2 - C2) / 365)</code>.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 bg-red-50 text-[#DC2626] rounded-md uppercase tracking-wider">
                      Newtech Promoters (SC 2021)
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Unqualified Right to Exit &amp; Refund
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      In <em>M/s Newtech Promoters and Developers Pvt. Ltd. v. State of U.P., (2021) 18 SCC 1</em>, a 3-Judge Supreme Court Bench held that once the promised handover date passes, the allottee has an unconditional statutory right under Section 18(1) to demand a full refund with interest.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-md uppercase tracking-wider">
                      Experion Developers (SC 2022)
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Interest Runs From Each Deposit Date
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      In <em>Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor, (2022) 15 SCC 286</em>, the Supreme Court ruled that refund interest is both restitutionary and compensatory, and must be calculated from the date each respective instalment was deposited—not merely from the date of default.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-md uppercase tracking-wider">
                      Imperia Structures (SC 2020)
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      RERA vs Consumer Court Choice
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      In <em>Imperia Structures Ltd. v. Anil Patni, (2020) 10 SCC 783</em>, the Supreme Court held that Section 79 of RERA does not bar homebuyers from approaching Consumer Commissions on e-Jagriti as an alternative to State RERA.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Hand-Authored SVG Escalation Flowchart */}
              <section
                id="heading-escalation-flow"
                aria-labelledby="heading-escalation-flow-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Recovery Flowchart: Possession Default to Attachment
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this 5-stage legal escalation hierarchy to convert your calculated Section 18 interest schedule into an enforceable bank credit:
                </p>

                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <svg
                    viewBox="0 0 840 245"
                    className="w-full h-auto text-xs font-sans min-w-[680px]"
                    role="img"
                    aria-label="RERA Section 18 Refund and Interest Recovery Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="reraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="reraAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="reraSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#reraGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">BBA Date Missed</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">No OC / Handover</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Sec 18 Right Triggers</text>

                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">MCLR+2% Ledger</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Compute Per Receipt</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Export Claim CSV</text>

                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    <rect x="350" y="20" width="140" height="90" rx="10" fill="url(#reraAlert)" />
                    <text x="420" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="420" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Final Demand</text>
                    <text x="420" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Promoter + Directors</text>

                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    <rect x="520" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="590" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Sec 31 Complaint</text>
                    <text x="590" y="82" fill="#334155" fontSize="10" textAnchor="middle">State RERA / e-Jagriti</text>
                    <text x="590" y="98" fill="#475569" fontSize="9" textAnchor="middle">45–60d Refund Order</text>

                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#reraSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Sec 40 Execution</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Recovery Certificate</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Bank &amp; Land Attachment</text>

                    <rect x="10" y="135" width="820" height="90" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="158" fill="#0F172A" fontWeight="bold" fontSize="11">
                      STATUTORY BENCHMARKS FOR BUILDER REFUND &amp; DELAY COMPENSATION:
                    </text>
                    <text x="25" y="178" fill="#475569" fontSize="10">
                      • Interest Parity (Section 2(za)): Builder must pay the exact same rate (SBI MCLR + 2%) that it charges buyers for late payments
                    </text>
                    <text x="25" y="194" fill="#475569" fontSize="10">
                      • Statutory Payout Window: 45 calendar days under Central / MahaRERA / UP RERA / KRERA rules (60 days under HRERA Haryana)
                    </text>
                    <text x="25" y="210" fill="#475569" fontSize="10">
                      • Promoter Appeal Barrier (Section 43(5)): Builder must pre-deposit 30% to 100% of the total order amount before filing any RERA appeal
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 5: Archetype T2 Edge Cases Accordion (<details>) */}
              <section
                id="heading-edge-cases"
                aria-labelledby="heading-edge-cases-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-edge-cases-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Builder Defences &amp; Section 18 Edge Cases: How Courts Rule
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Builders routinely cite technical contract clauses to deny or reduce MCLR + 2% interest. Here is how RERA Tribunals and the Supreme Court deal with each edge case:
                  </p>
                </div>

                <div className="space-y-3">
                  <details className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span>1. Builder Claims Force Majeure, NGT Construction Ban, or Approval Delay</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform font-bold">▼</span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p>
                        Routine delays in obtaining fire NOCs, environmental clearances, or Occupancy Certificates are the promoter&apos;s sole statutory risk under Section 11(4) of RERA. Only officially notified Section 6 COVID-19 moratoria (typically 6 months in 2020) or specific court-verified NGT stop-work days can be excluded from the delay period; they never extinguish your right to exit with full principal and interest.
                      </p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span>2. Tripartite Subvention Scheme: Builder Stopped Paying Pre-EMIs to the Bank</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform font-bold">▼</span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p>
                        When a builder defaults on subvention Pre-EMIs under a tripartite agreement, allottees are entitled to claim both the own-contribution booking money AND the entire bank loan principal plus Pre-EMI interest debited from their account, with SBI MCLR + 2% interest running from each disbursement date.
                      </p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span>3. Buyer Cancels Before Possession Deadline — 10% Earnest Money Forfeiture Cap</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform font-bold">▼</span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p>
                        If the builder has not defaulted on the possession timeline and the allottee cancels for personal reasons, the builder cannot forfeit 100% of the paid amount. Under Model RERA Agreement for Sale clauses and NCDRC rulings (<em>DLF Ltd. v. Bhagwanti Narula</em>), forfeiture is capped at a maximum of 10% of the basic sale price (or booking token if no BBA was signed), and the balance must be refunded within 45 days. See our{" "}
                        <Link
                          href="/token-money-refund-property-deal"
                          className="text-blue-700 underline font-semibold"
                        >
                          token &amp; bayana money refund rules guide
                        </Link>
                        .
                      </p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span>4. Plotted Developments &amp; Carpet Area Shortfall Refunds</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform font-bold">▼</span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p>
                        Section 18 applies equally to residential plots where internal development works are incomplete. Similarly, if the final RERA carpet area on possession is smaller than promised in the Agreement for Sale, the builder must refund the pro-rata excess consideration with SBI MCLR + 2% interest within 45 days. Read our guides on{" "}
                        <Link
                          href="/plot-booking-refund-legal-notice"
                          className="text-blue-700 underline font-semibold"
                        >
                          plot booking refund legal notices
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/carpet-area-shortfall-refund"
                          className="text-blue-700 underline font-semibold"
                        >
                          carpet area shortfall refunds
                        </Link>
                        .
                      </p>
                    </div>
                  </details>
                </div>
              </section>

              {/* Section 6: Worked Case Study */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹45L Principal + ₹19.1L RERA Interest
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Section 18 Computation
                    </span>
                    <span className="text-xs text-slate-400">
                      Sector 106 Gurugram (HRERA) • Rate: 10.95% p.a. (SBI MCLR 8.95% + 2%)
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Facts:</strong> Siddharth &amp; Meera Nair booked a 3BHK apartment in Sector 106, Gurugram, paying <strong>₹45,00,000</strong> across four instalments between March 2022 and August 2023. The registered Builder-Buyer Agreement promised possession by <strong>31 March 2025</strong>. By November 2026, tower finishing remained stalled without an Occupancy Certificate.
                    </p>
                    <p>
                      <strong>The Section 18(1)(a) Calculation (Cut-Off Date: 4 Nov 2026 @ 10.95% p.a.):</strong>
                      <br />
                      • <strong>Instalment 1 (15 Mar 2022 — ₹5,00,000):</strong> 1,695 days × 10.95% = <strong>₹2,54,250</strong> interest.
                      <br />
                      • <strong>Instalment 2 (10 Jul 2022 — ₹15,00,000):</strong> 1,578 days × 10.95% = <strong>₹7,10,100</strong> interest.
                      <br />
                      • <strong>Instalment 3 (20 Jan 2023 — ₹12,50,000):</strong> 1,384 days × 10.95% = <strong>₹5,19,000</strong> interest.
                      <br />
                      • <strong>Instalment 4 (05 Aug 2023 — ₹12,50,000):</strong> 1,187 days × 10.95% = <strong>₹4,45,125</strong> interest.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution:</strong>
                      Armed with the itemised CSV ledger showing a total statutory liability of <strong>₹64,28,475</strong> (₹45,00,000 principal + ₹19,28,475 simple interest), Siddharth served a formal 15-day Section 18 advocate demand notice on the developer&apos;s directors. Facing a 100% pre-deposit barrier under Section 43(5) if a RERA decree was passed, the promoter executed a consent settlement refunding ₹45,00,000 principal plus ₹17,80,000 interest in two RTGS tranches within 35 days.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Homebuyer Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Documents for Section 18 Claim
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Keep these six primary records ready under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 before serving a{" "}
                  <Link
                    href="/legal-notice-to-builder-for-delayed-possession-refund"
                    className="text-blue-700 underline font-semibold"
                  >
                    legal notice to the builder for delayed possession refund
                  </Link>{" "}
                  (see transparent{" "}
                  <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">
                    legal notice charges
                  </Link>
                  ):
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Allotment Letter &amp; Registered BBA / Agreement for Sale:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Proving the promised possession date, grace period clause, and allotted unit carpet area.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Builder Payment Receipts &amp; Customer Ledger Statement:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Every receipt issued by the developer along with the consolidated applicant statement of account.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Bank Account Statements &amp; Home Loan Disbursement Schedule:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Showing exact NEFT/RTGS/cheque clearance dates from which Section 18 interest starts running.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        State RERA Project Registration &amp; QPR Status Extract:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Screenshot from the State RERA portal showing lapsed completion dates and missing OC.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Itemised Section 18 Interest CSV Computation Sheet:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Downloaded from our calculator above, detailing per-instalment days and SBI MCLR + 2% math.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Prior Cancellation Emails &amp; Site Photographs:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Dated photos of incomplete construction and email trail with the builder&apos;s CRM desk.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4 sm:space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: RERA Refund Interest Calculator &amp; Section 18
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Answers Grounded in RERA 2016, State MCLR Rules, and Supreme Court Judgments
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base md:text-lg cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          ↓
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 9: Primary Sources */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Supreme Court Judgments &amp; Official MCLR Sources
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Statutory verification note: LegalRecovery drafts and serves pre-litigation Section 18 demand notices and assists with RERA / e-Jagriti filings; physical execution of Recovery Certificates is carried out by the District Collector under Section 40(1). Checked against SBI MCLR rates and RERA provisions as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Section 18 Builder Refund Legal Notice
                </h2>
                <ReraRefundNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Builder, RERA &amp; Property Refund Resources
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/builder-booking-cancellation-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Builder Booking Cancellation Refund Hub →
                  </Link>
                  <Link
                    href="/legal-notice-to-builder-for-delayed-possession-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Delayed Possession Refund Legal Notice →
                  </Link>
                  <Link
                    href="/carpet-area-shortfall-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Carpet Area Shortfall Refund Claim →
                  </Link>
                  <Link
                    href="/plot-booking-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Plot Booking Amount Refund Notice →
                  </Link>
                  <Link
                    href="/templates/flat-booking-cancellation-letter"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Flat Booking Cancellation Letter Template →
                  </Link>
                  <Link
                    href="/token-money-refund-property-deal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Property Deal Token &amp; Bayana Refund Rules →
                  </Link>
                  <Link
                    href="/rera-refund-order-not-paid-recovery-certificate"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Enforce Unpaid RERA Order (Recovery Certificate) →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Schedule →
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
