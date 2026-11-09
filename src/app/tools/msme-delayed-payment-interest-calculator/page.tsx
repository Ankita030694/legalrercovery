import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import MsmeInterestCalculatorClient from "./MsmeInterestCalculatorClient";
import MsmeInterestTOC from "./MsmeInterestTOC";
import MsmeInterestCTA from "./MsmeInterestCTA";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Reviewer box omitted per §6 rule.

const SITE_URL = "https://www.legalrecovery.in";
const PAGE_PATH = "/tools/msme-delayed-payment-interest-calculator";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "MSME Delayed Payment Interest Calculator (3x Bank Rate)",
  description:
    "Compute compound interest at three times the RBI bank rate on overdue MSME invoices, with a downloadable claim summary.",
  keywords: [
    "msme delayed payment interest calculator",
    "msme interest calculation",
    "msme delayed payment interest rate",
    "msme interest calculation in excel",
    "section 16 msme interest",
    "msmed act 45 days rule calculator",
    "section 43b h income tax msme calculator",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "MSME Delayed Payment Interest Calculator (3x Bank Rate)",
    description:
      "Compute compound interest at three times the RBI bank rate on overdue MSME invoices, with a downloadable claim summary.",
    url: PAGE_URL,
    siteName: "LegalRecovery.in",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQ_ITEMS = [
  {
    question: "What is the current MSME delayed payment interest rate under Section 16?",
    answer:
      "Under Section 16 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, a buyer who fails to pay an Udyam-registered Micro or Small enterprise on time must pay compound interest with monthly rests at three times (3x) the Bank Rate notified by the Reserve Bank of India (RBI). With the RBI Bank Rate at 6.75% per annum as of November 2026, the statutory Section 16 MSME interest rate is 20.25% per annum compounded monthly.",
  },
  {
    question: "From which exact date does MSME delayed payment interest start running?",
    answer:
      "Interest starts accruing from the 'Appointed Day' defined under Section 2(b) and Section 15 of the MSMED Act. If there is no written credit agreement between the supplier and buyer, the statutory credit period is 15 days from the date of delivery or acceptance, making Day 16 the Appointed Day. If there is a written credit agreement, the credit period cannot exceed 45 days under the proviso to Section 15, even if the Purchase Order specifies 60 or 90 days.",
  },
  {
    question: "How do I do MSME interest calculation in Excel with monthly compounding?",
    answer:
      "To perform MSME interest calculation in Excel for complete overdue months, use the compound future value formula =Principal*((1+(3*BankRate/12))^Months) and subtract the Principal. For invoices with both full months and a partial stub period, multiply the closing balance of the final full month by (3*BankRate)*(RemainingDays/365), or click 'Download Claim CSV' in our calculator above to open a ready-made month-by-month schedule directly in Excel.",
  },
  {
    question: "Can a buyer waive Section 16 MSME interest through a clause in the Purchase Order?",
    answer:
      "No. Section 16 expressly begins with the non-obstante clause 'Notwithstanding anything contained in any agreement between the buyer and the supplier or in any law for the time being in force.' Furthermore, Section 24 gives Sections 15 to 23 overriding effect over any inconsistent contract clause. A Purchase Order stipulating '0% interest on delayed payment' or '90 days credit' is legally void beyond the 45-day statutory ceiling.",
  },
  {
    question: "How does Section 43B(h) of the Income-tax Act help MSMEs recover unpaid invoices?",
    answer:
      "Under Section 43B(h) of the Income-tax Act, 1961, any sum payable by a buyer to a Micro or Small enterprise beyond the Section 15 time limit (15 or 45 days) is allowed as a tax deduction only in the financial year in which it is actually paid. If an overdue MSME invoice remains unpaid on March 31, the entire invoice amount is added back to the buyer's taxable income and taxed at 25.17% to 34.94%. Additionally, under Section 23 of the MSMED Act, the 3x compound interest paid is never deductible as an expense.",
  },
  {
    question: "Are Medium Enterprises or unregistered vendors eligible to claim Section 16 compound interest?",
    answer:
      "No. Under Section 2(n) of the MSMED Act, 2006, a 'supplier' covered by Chapter V (Sections 15 to 24) includes only Micro Enterprises and Small Enterprises holding a valid Udyam Registration prior to entering into the supply contract, as held by the Supreme Court in M/s Silpi Industries v. Kerala State Road Transport Corporation (2021) 18 SCC 790. Medium Enterprises must pursue recovery via commercial civil suits, arbitration, or the Insolvency and Bankruptcy Code (IBC).",
  },
];

export default function MsmeDelayedPaymentInterestCalculatorPage() {
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
        name: "MSME Delayed Payment Recovery",
        item: `${SITE_URL}/msme-delayed-payment-recovery-samadhan-vs-legal-notice`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "MSME Delayed Payment Interest Calculator",
        item: PAGE_URL,
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MSME Delayed Payment Interest Calculator (3x Bank Rate)",
    url: PAGE_URL,
    description:
      "Compute compound interest at three times the RBI bank rate with monthly rests on overdue MSME invoices under Section 16 of the MSMED Act, 2006, with a downloadable CSV claim summary.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    inLanguage: "en-IN",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    featureList: [
      "Section 15 Appointed Day calculator (15-day default and 45-day statutory credit cap)",
      "Section 16 compound interest engine at 3x RBI Bank Rate with monthly rests",
      "Buyer corporate tax disallowance preview under Section 43B(h) Income-tax Act and Section 23 MSMED Act",
      "Downloadable month-by-month CSV schedule for MSEFC / MSME ODR and legal demand notices",
    ],
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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <Breadcrumbs
            items={[
              {
                label: "Business & MSME Recovery",
                href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
              },
              {
                label: "MSME Delayed Payment Interest Calculator",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>
      </div>

      {/* Hero Section (Strictly matching IRCTC & T1 Dark Theme) */}
      <header className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="max-w-4xl">
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/80 text-red-300 text-xs font-semibold mb-4">
              <span>Section 15 &amp; 16 MSMED Act, 2006</span>
              <span>•</span>
              <span>3× RBI Bank Rate (20.25% p.a. Monthly Rests)</span>
              <span>•</span>
              <span>Sec 43B(h) Tax Impact</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
              Calculate the Interest Your Buyer Owes Under the MSMED Act
            </h1>

            {/* Answer Box (40–60 words directly under H1) */}
            <div
              aria-label="Statutory Summary"
              className="bg-slate-900/90 border-l-4 border-[#DC2626] rounded-r-xl p-4 sm:p-5 mb-6 shadow-lg"
            >
              <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed">
                Under <strong>Section 16 of the MSMED Act, 2006</strong>, any buyer delaying payment to a Udyam-registered Micro or Small enterprise beyond <strong>15 days</strong> (or up to <strong>45 days</strong> with a written agreement under Section 15) must pay <strong>compound interest with monthly rests at 3× the RBI Bank Rate (currently 20.25% p.a.)</strong> from the Appointed Day.
              </p>
            </div>

            {/* 4 Key Statutory Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                <span className="text-slate-400 block mb-0.5">Section 15 Credit Cap</span>
                <span className="text-white font-bold text-sm sm:text-base">
                  15 / 45 Days Max
                </span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                <span className="text-slate-400 block mb-0.5">Section 16 Penal Rate</span>
                <span className="text-emerald-400 font-bold text-sm sm:text-base">
                  3× RBI Bank Rate
                </span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                <span className="text-slate-400 block mb-0.5">Compounding Rule</span>
                <span className="text-amber-300 font-bold text-sm sm:text-base">
                  Monthly Rests
                </span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                <span className="text-slate-400 block mb-0.5">Buyer Tax Disallowance</span>
                <span className="text-red-400 font-bold text-sm sm:text-base">
                  Sec 43B(h) &amp; Sec 23
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout: Sticky TOC + Content Column */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <MsmeInterestTOC />

          <main className="flex-1 min-w-0 space-y-10 w-full">
            {/* 1. Interactive Split Calculator */}
            <MsmeInterestCalculatorClient />

            {/* 2. Formula in Words, Legal Basis & Excel Calculation */}
            <section
              id="how-msme-interest-is-calculated"
              className="scroll-mt-28 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                <span>Statutory Formula &amp; Legal Basis</span>
                <span>•</span>
                <span>Sections 2(b), 15 &amp; 16 MSMED Act, 2006</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                How MSME Delayed Payment Interest Is Calculated Under Section 16 (and in Excel)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike regular commercial contracts where interest is calculated on a simple annual basis, <strong>Section 16 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</strong> mandates <strong>compound interest with monthly rests</strong> at three times the Bank Rate notified by the Reserve Bank of India. Every month that an invoice remains unpaid after the statutory credit period, the accrued monthly interest is added to the unpaid invoice balance, and the next month&apos;s interest is computed on that higher compounded principal.
              </p>

              {/* Formula Block */}
              <div className="bg-slate-900 text-slate-100 rounded-xl p-5 border border-slate-800 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-red-400">
                  Section 16 Monthly Compounding Formula
                </div>
                <p className="font-mono text-xs sm:text-sm text-emerald-300 bg-slate-950/80 p-3.5 rounded-lg border border-slate-800 overflow-x-auto">
                  Compounded Balance after M full months = Principal × (1 + (3 × RBI_Bank_Rate) / 12)^M
                  <br />
                  Stub Period Interest (for remaining D days) = Closing_Balance × (3 × RBI_Bank_Rate) × (D / 365)
                  <br />
                  Total Section 16 Interest = (Compounded Balance + Stub Period Interest) − Principal
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>How to do MSME interest calculation in Excel:</strong> In a spreadsheet where cell <code className="text-amber-300">B1</code> is the Invoice Principal (e.g., <code className="text-amber-300">500000</code>), <code className="text-amber-300">B2</code> is the annual RBI Bank Rate (<code className="text-amber-300">0.0675</code>), and <code className="text-amber-300">B3</code> is the number of completed overdue months, enter <code className="text-emerald-300">=FV((3*B2)/12, B3, 0, -B1) - B1</code> to get the exact compounded interest for full monthly rests. You can also click <strong>Download Claim CSV</strong> in the calculator above to export a pre-built month-by-month ledger ready for Excel or Tally verification.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Step 1: Fixing the &ldquo;Appointed Day&rdquo; (Section 15)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 15, if you have no written credit period in your Purchase Order or invoice, the buyer must pay within <strong>15 days</strong> of delivery or deemed acceptance. If a written agreement exists, the credit period is capped at <strong>45 days maximum</strong>. The day immediately following the expiry of this 15-day or 45-day window is the statutory <strong>Appointed Day</strong> under Section 2(b), from which 3× compound interest begins running automatically.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    Step 2: 15-Day Objection Cutoff (Explanation to Sec 2(b))
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Buyers frequently try to defeat MSME interest claims by raising belated quality complaints months after delivery. Under the Explanation to Section 2(b), if a buyer does not raise a <strong>written objection</strong> regarding defects in goods or services within <strong>15 days from the date of delivery</strong>, the goods or services are legally deemed accepted on the actual delivery date.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Key Statutory Rules & Tax Penalties Table */}
            <section
              id="statutory-rules-table"
              className="scroll-mt-28 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                <span>Statutory Reference Matrix</span>
                <span>•</span>
                <span>MSMED Act 2006 &amp; Income-tax Act 1961</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Statutory Deadlines, Interest Rules &amp; Buyer Tax Penalties at a Glance
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                When drafting a demand notice or filing a claim on the MSME ODR / Samadhaan portal, cite these six interrelated statutory provisions together. Combining Section 16 compound interest with Section 43B(h) corporate tax disallowance creates immediate financial pressure on the buyer&apos;s CFO and statutory auditors.
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3 px-4 font-bold">Statutory Provision</th>
                      <th className="py-3 px-4 font-bold">Legal Mandate / Threshold</th>
                      <th className="py-3 px-4 font-bold">Consequence for Defaulting Buyer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Section 15, MSMED Act
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        15 days (no written agreement) or max 45 days (with written agreement)
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Any PO clause stipulating 60, 90, or 120 days credit is statutorily clipped to 45 days.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Section 16, MSMED Act
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        3× RBI Bank Rate (3 × 6.75% = <strong>20.25% p.a.</strong>) with monthly rests
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Overrides lower contractual interest rates or &ldquo;no-interest&rdquo; vendor clauses.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Section 18, MSMED Act
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        MSEFC / MSME ODR Portal Conciliation &amp; Binding Arbitration
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Supplier files in its own state MSEFC; under Section 19, buyer must pre-deposit <strong>75% of the award</strong> to challenge it in court.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Section 22, MSMED Act &amp; MCA Form MSME-1
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Mandatory disclosure in audited annual financial statements
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        Buyer&apos;s statutory auditor must report unpaid MSME principal and accrued Section 16 interest in the balance sheet notes and MCA half-yearly return.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Section 23, MSMED Act
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Permanent disallowance of penal interest under Income-tax Act
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        The 20.25% compound interest paid or payable by the buyer can never be claimed as a business expense deduction.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-red-50/40">
                      <td className="py-3 px-4 font-bold text-[#DC2626]">
                        Section 43B(h), Income-tax Act, 1961
                      </td>
                      <td className="py-3 px-4 text-slate-800 font-medium">
                        Deduction allowed only on actual payment within Sec 15 timeline
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        Unpaid Micro/Small invoices crossing March 31 beyond 15/45 days are added back to buyer&apos;s taxable profit, triggering <strong>25.17%–34.94% income tax outflow</strong>.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. Concrete Worked Example */}
            <section
              id="worked-example"
              className="scroll-mt-28 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                <span>Step-by-Step Numerical Walkthrough</span>
                <span>•</span>
                <span>4 Monthly Rests + 3-Day Stub</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Worked Example: Compounding a ₹5,00,000 Overdue MSME Invoice
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Suppose <strong>Apex Precision Components (Udyam Small Enterprise, Pune)</strong> delivers CNC-machined valves worth <strong>₹5,00,000</strong> (inclusive of GST) to an industrial buyer on <strong>1 May 2026</strong>. The buyer&apos;s Purchase Order mentions a <strong>90-day credit period</strong>. The buyer fails to pay until <strong>18 October 2026</strong>. Here is how Section 15 and Section 16 apply:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <span className="font-bold text-slate-500 uppercase block mb-1">
                    1. Statutory Credit Cap
                  </span>
                  <p className="text-slate-800 leading-relaxed">
                    Although the PO says 90 days, Section 15 caps written credit at <strong>45 days</strong>. Counting 45 days from 1 May 2026 fixes the Due Date on <strong>15 June 2026</strong> and the <strong>Appointed Day on 16 June 2026</strong>.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <span className="font-bold text-slate-500 uppercase block mb-1">
                    2. Effective Monthly Rate
                  </span>
                  <p className="text-slate-800 leading-relaxed">
                    With the RBI Bank Rate at <strong>6.75% p.a.</strong>, the Section 16 rate is <strong>3 × 6.75% = 20.25% p.a.</strong> Divided by 12 monthly rests, each full month compounds at exactly <strong>1.6875%</strong>.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <span className="font-bold text-slate-500 uppercase block mb-1">
                    3. Overdue Span (125 Days)
                  </span>
                  <p className="text-slate-800 leading-relaxed">
                    From 15 June 2026 to 18 October 2026 is <strong>4 full calendar months</strong> (ending 15 Oct 2026) plus a <strong>3-day stub period</strong> (16 Oct to 18 Oct 2026).
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                      <th className="py-2.5 px-3 font-bold">Rest Period</th>
                      <th className="py-2.5 px-3 font-bold">Date Range</th>
                      <th className="py-2.5 px-3 font-bold text-right">Opening Balance</th>
                      <th className="py-2.5 px-3 font-bold text-right">Calculation (@ 20.25% p.a.)</th>
                      <th className="py-2.5 px-3 font-bold text-right">Interest</th>
                      <th className="py-2.5 px-3 font-bold text-right">Closing Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-slate-900">Month 1</td>
                      <td className="py-2.5 px-3 text-slate-600">16 Jun – 15 Jul 2026</td>
                      <td className="py-2.5 px-3 text-right">₹5,00,000.00</td>
                      <td className="py-2.5 px-3 text-right text-slate-500">₹5,00,000 × 1.6875%</td>
                      <td className="py-2.5 px-3 text-right font-bold text-emerald-600">+₹8,437.50</td>
                      <td className="py-2.5 px-3 text-right font-bold">₹5,08,437.50</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-slate-900">Month 2</td>
                      <td className="py-2.5 px-3 text-slate-600">16 Jul – 15 Aug 2026</td>
                      <td className="py-2.5 px-3 text-right">₹5,08,437.50</td>
                      <td className="py-2.5 px-3 text-right text-slate-500">₹5,08,437.50 × 1.6875%</td>
                      <td className="py-2.5 px-3 text-right font-bold text-emerald-600">+₹8,579.88</td>
                      <td className="py-2.5 px-3 text-right font-bold">₹5,17,017.38</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-slate-900">Month 3</td>
                      <td className="py-2.5 px-3 text-slate-600">16 Aug – 15 Sep 2026</td>
                      <td className="py-2.5 px-3 text-right">₹5,17,017.38</td>
                      <td className="py-2.5 px-3 text-right text-slate-500">₹5,17,017.38 × 1.6875%</td>
                      <td className="py-2.5 px-3 text-right font-bold text-emerald-600">+₹8,724.67</td>
                      <td className="py-2.5 px-3 text-right font-bold">₹5,25,742.05</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-slate-900">Month 4</td>
                      <td className="py-2.5 px-3 text-slate-600">16 Sep – 15 Oct 2026</td>
                      <td className="py-2.5 px-3 text-right">₹5,25,742.05</td>
                      <td className="py-2.5 px-3 text-right text-slate-500">₹5,25,742.05 × 1.6875%</td>
                      <td className="py-2.5 px-3 text-right font-bold text-emerald-600">+₹8,871.90</td>
                      <td className="py-2.5 px-3 text-right font-bold">₹5,34,613.95</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-slate-900">Stub (3d)</td>
                      <td className="py-2.5 px-3 text-slate-600">16 Oct – 18 Oct 2026</td>
                      <td className="py-2.5 px-3 text-right">₹5,34,613.95</td>
                      <td className="py-2.5 px-3 text-right text-slate-500">₹5,34,613.95 × 20.25% × (3/365)</td>
                      <td className="py-2.5 px-3 text-right font-bold text-emerald-600">+₹889.81</td>
                      <td className="py-2.5 px-3 text-right font-bold">₹5,35,503.76</td>
                    </tr>
                    <tr className="bg-slate-900 text-white font-bold">
                      <td colSpan={4} className="py-3 px-3">
                        Total Statutory Claim Payable on 18 October 2026
                      </td>
                      <td className="py-3 px-3 text-right text-emerald-400">+₹35,503.76</td>
                      <td className="py-3 px-3 text-right text-base">₹5,35,503.76</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5. Hand-Authored SVG Diagram: Appointed Day to MSME ODR Recovery Flow */}
            <section
              id="escalation-flow-diagram"
              className="scroll-mt-28 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                <span>Statutory Recovery Architecture</span>
                <span>•</span>
                <span>From Invoice Delivery to MSEFC Award</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                How an Overdue MSME Invoice Escalates From Appointed Day to Recovery
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The diagram below maps the statutory timeline from invoice delivery through the Section 15 credit cap, automatic Section 16 monthly compounding, pre-litigation advocate legal notice citing Section 43B(h), and online reference on the MSME ODR / MSEFC portal.
              </p>

              <figure className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 overflow-x-auto">
                <svg
                  viewBox="0 0 920 220"
                  role="img"
                  aria-labelledby="msme-flow-title msme-flow-desc"
                  className="w-full h-auto min-w-[680px]"
                >
                  <title id="msme-flow-title">
                    MSME Delayed Payment Interest and Recovery Escalation Flowchart
                  </title>
                  <desc id="msme-flow-desc">
                    Five-stage timeline: Stage 1 Goods/Services Delivery and 15-day deemed acceptance under Section 2(b); Stage 2 Section 15 Credit Cap of 15 or 45 days; Stage 3 Appointed Day triggering 3x RBI Bank Rate monthly compound interest under Section 16; Stage 4 Advocate Legal Notice warning buyer of Section 43B(h) tax disallowance; Stage 5 MSME ODR / MSEFC conciliation and arbitration with 75% pre-deposit rule under Section 19.
                  </desc>

                  {/* Connector Line */}
                  <line
                    x1="90"
                    y1="95"
                    x2="830"
                    y2="95"
                    stroke="#CBD5E1"
                    strokeWidth="4"
                    strokeDasharray="6 4"
                  />

                  {/* Node 1 */}
                  <g transform="translate(15, 30)">
                    <rect
                      width="155"
                      height="130"
                      rx="12"
                      fill="#111827"
                      stroke="#334155"
                      strokeWidth="2"
                    />
                    <rect
                      x="12"
                      y="12"
                      width="68"
                      height="20"
                      rx="4"
                      fill="#1E293B"
                    />
                    <text
                      x="46"
                      y="26"
                      textAnchor="middle"
                      fill="#94A3B8"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      DAY 0
                    </text>
                    <text
                      x="14"
                      y="52"
                      fill="#FFFFFF"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      1. Delivery &amp; Invoice
                    </text>
                    <text x="14" y="72" fill="#CBD5E1" fontSize="10">
                      Tax invoice + e-Way Bill
                    </text>
                    <text x="14" y="88" fill="#CBD5E1" fontSize="10">
                      Deemed accepted if no
                    </text>
                    <text x="14" y="104" fill="#34D399" fontSize="10" fontWeight="bold">
                      written objection in 15d
                    </text>
                  </g>

                  {/* Node 2 */}
                  <g transform="translate(200, 30)">
                    <rect
                      width="155"
                      height="130"
                      rx="12"
                      fill="#111827"
                      stroke="#334155"
                      strokeWidth="2"
                    />
                    <rect
                      x="12"
                      y="12"
                      width="95"
                      height="20"
                      rx="4"
                      fill="#1E293B"
                    />
                    <text
                      x="59"
                      y="26"
                      textAnchor="middle"
                      fill="#FBBF24"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      DAY 15 OR 45 MAX
                    </text>
                    <text
                      x="14"
                      y="52"
                      fill="#FFFFFF"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      2. Sec 15 Credit Cap
                    </text>
                    <text x="14" y="72" fill="#CBD5E1" fontSize="10">
                      15d if no written contract
                    </text>
                    <text x="14" y="88" fill="#CBD5E1" fontSize="10">
                      Max 45d with agreement
                    </text>
                    <text x="14" y="104" fill="#F87171" fontSize="10" fontWeight="bold">
                      90d PO terms voided
                    </text>
                  </g>

                  {/* Node 3 */}
                  <g transform="translate(385, 30)">
                    <rect
                      width="155"
                      height="130"
                      rx="12"
                      fill="#7F1D1D"
                      stroke="#DC2626"
                      strokeWidth="2"
                    />
                    <rect
                      x="12"
                      y="12"
                      width="95"
                      height="20"
                      rx="4"
                      fill="#991B1B"
                    />
                    <text
                      x="59"
                      y="26"
                      textAnchor="middle"
                      fill="#FCA5A5"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      APPOINTED DAY
                    </text>
                    <text
                      x="14"
                      y="52"
                      fill="#FFFFFF"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      3. Sec 16 Interest
                    </text>
                    <text x="14" y="72" fill="#FECACA" fontSize="10">
                      3× RBI Bank Rate (20.25%)
                    </text>
                    <text x="14" y="88" fill="#FECACA" fontSize="10">
                      Compounded monthly
                    </text>
                    <text x="14" y="104" fill="#FDE047" fontSize="10" fontWeight="bold">
                      Non-deductible (Sec 23)
                    </text>
                  </g>

                  {/* Node 4 */}
                  <g transform="translate(570, 30)">
                    <rect
                      width="155"
                      height="130"
                      rx="12"
                      fill="#111827"
                      stroke="#DC2626"
                      strokeWidth="2"
                    />
                    <rect
                      x="12"
                      y="12"
                      width="95"
                      height="20"
                      rx="4"
                      fill="#DC2626"
                    />
                    <text
                      x="59"
                      y="26"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      15-DAY DEMAND
                    </text>
                    <text
                      x="14"
                      y="52"
                      fill="#FFFFFF"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      4. Advocate Notice
                    </text>
                    <text x="14" y="72" fill="#CBD5E1" fontSize="10">
                      Served on Directors/CFO
                    </text>
                    <text x="14" y="88" fill="#CBD5E1" fontSize="10">
                      Attaches Sec 16 CSV +
                    </text>
                    <text x="14" y="104" fill="#F87171" fontSize="10" fontWeight="bold">
                      Sec 43B(h) 30% tax alert
                    </text>
                  </g>

                  {/* Node 5 */}
                  <g transform="translate(755, 30)">
                    <rect
                      width="150"
                      height="130"
                      rx="12"
                      fill="#064E3B"
                      stroke="#10B981"
                      strokeWidth="2"
                    />
                    <rect
                      x="12"
                      y="12"
                      width="95"
                      height="20"
                      rx="4"
                      fill="#065F46"
                    />
                    <text
                      x="59"
                      y="26"
                      textAnchor="middle"
                      fill="#A7F3D0"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      SEC 18 &amp; SEC 19
                    </text>
                    <text
                      x="14"
                      y="52"
                      fill="#FFFFFF"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      5. MSME ODR / MSEFC
                    </text>
                    <text x="14" y="72" fill="#D1FAE5" fontSize="10">
                      Conciliation &amp; Arbitration
                    </text>
                    <text x="14" y="88" fill="#D1FAE5" fontSize="10">
                      Buyer must deposit 75%
                    </text>
                    <text x="14" y="104" fill="#6EE7B7" fontSize="10" fontWeight="bold">
                      to appeal award (Sec 19)
                    </text>
                  </g>
                </svg>
                <figcaption className="text-[11px] text-slate-500 mt-3 text-center">
                  Figure 1: Five-stage statutory lifecycle of an overdue Micro or Small Enterprise invoice under Chapter V of the MSMED Act, 2006.
                </figcaption>
              </figure>
            </section>

            {/* 6. Assumptions, Statutory Eligibility & Legal Limits + Honest Scope */}
            <section
              id="assumptions-and-limits"
              className="scroll-mt-28 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                <span>Statutory Boundaries &amp; Assumptions</span>
                <span>•</span>
                <span>Chapter V MSMED Act</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Assumptions, Statutory Eligibility &amp; Legal Limits of This Calculator
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Before serving a formal demand notice or filing a reference before the Micro and Small Enterprises Facilitation Council (MSEFC), verify that your invoice meets these five statutory conditions:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[#DC2626] font-black mt-0.5">1.</span>
                  <div>
                    <strong>Prior Udyam Registration Required for MSEFC Jurisdiction:</strong> Per the Supreme Court&apos;s ruling in <em>M/s Silpi Industries v. KSRTC</em>, a supplier must hold a valid Udyam Registration (as a Micro or Small enterprise) at the time of entering into the contract or supplying the goods/services to invoke Section 18 MSEFC arbitration. However, since the 2021 Ministry of MSME Office Memorandum included wholesale and retail traders (NIC Codes 45, 46, and 47) exclusively for Priority Sector Lending, pure traders without manufacturing or service activity cannot file Section 18 MSEFC claims.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[#DC2626] font-black mt-0.5">2.</span>
                  <div>
                    <strong>Medium Enterprises Excluded From Section 16 &amp; Section 43B(h):</strong> Section 2(n) defines a &ldquo;supplier&rdquo; strictly as a Micro Enterprise (investment ≤ ₹1 Cr, turnover ≤ ₹5 Cr) or Small Enterprise (investment ≤ ₹10 Cr, turnover ≤ ₹50 Cr). Medium Enterprises are not covered by Section 16 compound interest or Section 43B(h) tax disallowance.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[#DC2626] font-black mt-0.5">3.</span>
                  <div>
                    <strong>RBI Bank Rate Fluctuations Over Multi-Year Delays:</strong> This calculator applies the user-selected RBI Bank Rate (defaulting to <strong>6.75% p.a.</strong> as of November 2026) across the overdue period. If your dispute spans multiple years during which the RBI Monetary Policy Committee revised the Bank Rate (Marginal Standing Facility rate), MSEFC arbitrators may compute interest using the rate prevailing during each respective period.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[#DC2626] font-black mt-0.5">4.</span>
                  <div>
                    <strong>Timely Written Objection by Buyer (Section 2(b)):</strong> If the buyer raised a bona fide written objection specifying quality defects or short delivery within 15 days of delivery, the &ldquo;day of acceptance&rdquo; shifts to the date on which the supplier removes those defects.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-[#DC2626] font-black mt-0.5">5.</span>
                  <div>
                    <strong>Calendar-Month Rests + 365-Day Stub Convention:</strong> Full months of delay are compounded at <code>(3 × Bank Rate) / 12</code> per monthly rest, while any partial month stub at the end of the period is computed pro-rata on a <code>Days / 365</code> basis.
                  </div>
                </li>
              </ul>

              {/* Honest Scope Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-emerald-900 mb-2">
                    ✓ What LegalRecovery Can Do For Your MSME Claim
                  </h3>
                  <ul className="space-y-1.5 text-xs text-emerald-950">
                    <li>• Draft and serve a formal advocate legal demand notice attaching your Section 16 month-by-month compound interest schedule.</li>
                    <li>• Put the buyer&apos;s Directors, CFO, and Company Secretary on formal notice of Section 43B(h) corporate tax disallowance and Section 22 audit disclosure obligations.</li>
                    <li>• Provide postal barcode tracking (Registered Speed Post) and Section 63 BSA electronic service records required as pre-filing proof on the MSME ODR / Samadhaan portal.</li>
                  </ul>
                </div>
                <div className="bg-slate-100 border border-slate-300 rounded-xl p-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
                    ✕ What This Calculator &amp; Notice Cannot Do
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li>• This tool is a statutory arithmetic calculator and does not constitute an MSEFC arbitral award or formal tax audit opinion.</li>
                    <li>• A legal demand notice cannot freeze a buyer&apos;s bank account on its own; coercive attachment requires an MSEFC arbitral award executed as a civil court decree under Section 36 of the Arbitration Act.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. Supreme Court Precedents */}
            <section
              id="supreme-court-precedents"
              className="scroll-mt-28 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                <span>Binding Judicial Precedents</span>
                <span>•</span>
                <span>Supreme Court of India</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Supreme Court Precedents on Section 16 Compound Interest &amp; MSEFC Jurisdiction
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Corporate buyers frequently argue that a private arbitration clause in their Purchase Order bars the supplier from approaching the MSEFC, or that contractual interest overrides Section 16. The Supreme Court of India has settled both questions in favour of MSME suppliers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <article className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-[#DC2626] mb-2">
                      Supreme Court • (2023) 6 SCC 401
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      Gujarat State Civil Supplies Corp. Ltd. v. Mahakali Foods Pvt. Ltd.
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Held that Chapter V (Sections 15 to 23) of the MSMED Act, 2006 is a special statutory regime that overrides the Arbitration and Conciliation Act, 1996. Even if a buyer&apos;s Purchase Order contains an exclusive private arbitration clause or foreign seat, the MSME supplier can still invoke statutory MSEFC conciliation and arbitration under Section 18 and claim 3× compound interest under Section 16.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] font-semibold text-slate-500">
                    Ratio: Section 24 overrides private PO arbitration clauses
                  </div>
                </article>

                <article className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-[#DC2626] mb-2">
                      Supreme Court • (2021) 18 SCC 790
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      M/s Silpi Industries v. Kerala State Road Transport Corporation
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Clarified two critical rules: first, the Limitation Act, 1963 applies to Section 18 MSEFC arbitrations (3 years from the Appointed Day or last part-payment); second, to avail the beneficial jurisdiction of the MSEFC under Section 18, the supplier must have held Udyam / EM-II registration prior to entering into the contract and supplying the goods or services.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] font-semibold text-slate-500">
                    Ratio: Prior Udyam registration &amp; 3-year limitation
                  </div>
                </article>

                <article className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-[#DC2626] mb-2">
                      Supreme Court • (2010) 5 SCC 44
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      Modern Industries v. Steel Authority of India Ltd. (SAIL)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Affirmed that the statutory obligation to pay compound interest with monthly rests at three times the RBI Bank Rate is mandatory and cannot be contracted out of by a dominant PSU or corporate buyer. Also confirmed that a supplier can pursue an independent claim for statutory delayed-payment interest even where the buyer belatedly released only the principal invoice amount.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] font-semibold text-slate-500">
                    Ratio: Interest-only claim valid after late principal payment
                  </div>
                </article>
              </div>
            </section>

            {/* 8. Next Steps & Internal Links + Primary CTA */}
            <section
              id="next-steps-recovery"
              className="scroll-mt-28 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                <span>Action Plan</span>
                <span>•</span>
                <span>From Calculation to Bank Credit</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                What to Do With Your Interest Calculation: Demand Notice to MSME ODR
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Once you have computed your Section 16 compound interest and downloaded the CSV claim schedule above, execute this three-step recovery sequence:
              </p>

              <ol className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <strong className="text-slate-900 block mb-1">
                    Step 1: Assemble Your Delivery &amp; Acceptance Dossier
                  </strong>
                  Compile the GST tax invoice, Purchase Order (or email confirmation), e-Way Bill, signed delivery challan / Lorry Receipt (LR) or client email acknowledging service milestones, your Udyam Registration Certificate, and the downloaded Section 16 CSV calculation sheet.
                </li>
                <li className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <strong className="text-slate-900 block mb-1">
                    Step 2: Serve a 15-Day Advocate Legal Notice on the Buyer &amp; CFO
                  </strong>
                  Before lodging a formal MSEFC case, serve an advocate demand notice on the buyer company&apos;s Registered Office, Managing Director, and CFO. Explicitly cite <strong>Section 16 (20.25% monthly compound interest)</strong>, <strong>Section 22 (mandatory statutory auditor disclosure in financial statements)</strong>, and <strong>Section 43B(h) of the Income-tax Act</strong>. Read our detailed comparison in{" "}
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    MSME Samadhaan vs. Advocate Legal Notice
                  </Link>{" "}
                  to see why most solvent corporate buyers settle during the 15-day notice window to avoid audit qualifications and tax disallowance.
                </li>
                <li className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <strong className="text-slate-900 block mb-1">
                    Step 3: File an Online Reference on the MSME ODR / Samadhaan Portal
                  </strong>
                  If the buyer fails to clear the dues within 15 days of receiving your legal notice, upload your invoice, delivery proof, Udyam certificate, and the served Legal Notice + Speed Post tracking receipt on the official MSME Samadhaan / ODR portal under Section 18.
                </li>
              </ol>

              {/* Contextual Internal Links Strip */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3">
                  Related B2B &amp; Commercial Payment Recovery Guides
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    <span>MSME Samadhaan vs. Legal Notice Recovery Guide</span>
                    <span className="text-[#DC2626]">→</span>
                  </Link>
                  <Link
                    href="/msme-odr-portal-delayed-payment-guide"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    <span>MSME ODR Portal: File a Delayed Payment Case</span>
                    <span className="text-[#DC2626]">→</span>
                  </Link>
                  <Link
                    href="/law/msmed-amendment-act-2026"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    <span>MSMED Amendment Act 2026: Supplier Rights</span>
                    <span className="text-[#DC2626]">→</span>
                  </Link>
                  <Link
                    href="/recovery/delayed-payment-interest-under-msme"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    <span>Delayed Payment Interest Under MSMED Act Explained</span>
                    <span className="text-[#DC2626]">→</span>
                  </Link>
                  <Link
                    href="/recovery-of-unpaid-dues-for-my-business"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    <span>B2B Unpaid Invoice &amp; Business Dues Recovery</span>
                    <span className="text-[#DC2626]">→</span>
                  </Link>
                  <Link
                    href="/send-legal-notice-online-india"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold transition-colors"
                  >
                    <span>Send an Advocate Legal Notice Online in India</span>
                    <span className="text-[#DC2626]">→</span>
                  </Link>
                </div>
              </div>

              <div id="statutory-cta" className="scroll-mt-28 pt-2">
                <MsmeInterestCTA />
              </div>
            </section>

            {/* 9. Frequently Asked Questions */}
            <section
              id="frequently-asked-questions"
              className="scroll-mt-28 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                <span>Statutory Q&amp;A</span>
                <span>•</span>
                <span>Section 16, Excel Formula &amp; Sec 43B(h)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Frequently Asked Questions on MSME Delayed Payment Interest
              </h2>

              <div className="space-y-3">
                {FAQ_ITEMS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-xs font-black group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* 10. Primary Statutory Sources */}
            <section
              id="primary-statutory-sources"
              className="scroll-mt-28 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4"
            >
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Primary Statutory Sources &amp; Official Regulatory References
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                <li>
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DC2626] hover:underline font-medium"
                  >
                    Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Act No. 27 of 2006) — Chapter V (Sections 15 to 24), India Code
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.rbi.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DC2626] hover:underline font-medium"
                  >
                    Reserve Bank of India (RBI) — Current Policy &amp; Bank Rate (Marginal Standing Facility Rate: 6.75% p.a.)
                  </a>
                </li>
                <li>
                  <a
                    href="https://incometaxindia.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DC2626] hover:underline font-medium"
                  >
                    Income-tax Act, 1961 — Section 43B(h) (Deduction only on actual payment to Micro and Small Enterprises within Section 15 MSMED Act time limits)
                  </a>
                </li>
                <li>
                  <a
                    href="https://samadhaan.msme.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DC2626] hover:underline font-medium"
                  >
                    Ministry of MSME — Delayed Payment Monitoring System (MSME Samadhaan &amp; MSME ODR Portal)
                  </a>
                </li>
                <li>
                  <span className="text-[#DC2626] font-medium">
                    Supreme Court of India — Gujarat State Civil Supplies Corp. Ltd. v. Mahakali Foods Pvt. Ltd. (2023) 6 SCC 401 &amp; M/s Silpi Industries v. KSRTC (2021) 18 SCC 790
                  </span>
                </li>
              </ol>
            </section>
          </main>
        </div>
      </div>

      {/* Site-Wide Related Recovery Guides */}
      <RelatedRecoveryGuides currentPath={PAGE_PATH} />
    </div>
  );
}
