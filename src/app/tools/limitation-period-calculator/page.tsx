import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import LimitationNoticeCTA from "./LimitationNoticeCTA";
import LimitationCalculatorTOC from "./LimitationCalculatorTOC";
import LimitationCalculatorClient from "./LimitationCalculatorClient";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Limitation Period Calculator: Is Your Claim Time-Barred?",
  description:
    "Check the limitation period for money, cheque, consumer and salary claims, including extensions from acknowledgment or part-payment.",
  alternates: {
    canonical: `${SITE_URL}/tools/limitation-period-calculator`,
  },
  openGraph: {
    title: "Limitation Period Calculator: Is Your Claim Time-Barred?",
    description:
      "Statutory limitation period calculator for money recovery, commercial invoices, personal loans, consumer claims, and employment dues under the Limitation Act, 1963.",
    url: `${SITE_URL}/tools/limitation-period-calculator`,
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
    title: "Limitation Act, 1963 (Act No. 36 of 1963) — Section 3 (Bar of Limitation), Section 18 (Acknowledgment), Section 19 (Part-Payment) & Schedule Articles",
    url: "https://www.indiacode.nic.in/handle/123456789/1557",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Act No. 26 of 1881) — Section 138 & Section 142 (Cognizance of Cheque Dishonour Offence)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Code of Civil Procedure, 1908 (CPC) — Order XXXVII (Summary Procedure on Negotiable Instruments & Written Contracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Supreme Court of India — Sampuran Singh & Ors. v. Niranjan Kaur & Ors. (1999) 2 SCC 679 (Acknowledgment Must Precede Expiry of Limitation)",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Supreme Court of India — State of Kerala & Ors. v. V.R. Kalliyanikutty & Anr. (1999) 3 SCC 657 (Time-Barred Debts Cannot Be Recovered via Coercive Revenue Recovery)",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of WhatsApp & Email Debt Acknowledgments)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Acknowledgment Must Be Made Prior to Expiration of Prescribed Limitation Period",
    parties: "Sampuran Singh & Ors. v. Niranjan Kaur & Ors.",
    citation: "(1999) 2 SCC 679, Supreme Court of India",
    date: "Judgment Dated 2 February 1999",
    facts:
      "A mortgagor sought redemption of an oral mortgage created in 1893. The suit was instituted in 1980, far exceeding the 60-year limitation period then applicable for mortgage redemption. The plaintiffs relied on an acknowledgment executed in 1960 to argue that a fresh period of limitation commenced under Section 18 of the Limitation Act, 1963.",
    holding:
      "The Supreme Court affirmed that under Section 18 of the Limitation Act, an acknowledgment of liability must be made in writing before the expiration of the prescribed period for a suit or application. An acknowledgment made after the expiry of the limitation period cannot revive a debt or right that is already dead. Acknowledgment can only prolong an existing, live cause of action; it cannot resurrect an extinct claim.",
    amount: "Doctrine of Live Cause of Action (Section 18 Pre-Expiry Mandate)",
    takeaway:
      "If 3 years pass without any written admission or part-payment, a subsequent casual text message or balance confirmation cannot revive the debt under Section 18. Creditors must capture written admissions while the initial 3-year window is still active.",
  },
  {
    title: "Time-Barred Debts Cannot Be Recovered Through Coercive Recovery or Summary Proceedings",
    parties: "State of Kerala & Ors. v. V.R. Kalliyanikutty & Anr.",
    citation: "(1999) 3 SCC 657, Supreme Court of India (3-Judge Bench)",
    date: "Judgment Dated 31 March 1999",
    facts:
      "A state financial corporation initiated coercive recovery proceedings under the Kerala Revenue Recovery Act to recover loan arrears that were undisputedly time-barred under the Limitation Act. The debtor challenged the recovery certificates, arguing that statutory revenue recovery processes cannot bypass civil limitation statutes.",
    holding:
      "The Supreme Court held that the phrase 'amounts due' in revenue recovery statutes means amounts legally recoverable. Since Section 3 of the Limitation Act bars any suit instituted after the prescribed period, a time-barred debt ceases to be legally recoverable. Statutory recovery machinery cannot be used as an engine to bypass limitation periods and recover debts that could no longer be enforced in a civil court.",
    amount: "Unenforceability of Time-Barred Debts Across All Administrative Machinery",
    takeaway:
      "Once a money claim crosses the 3-year statutory boundary, it cannot be recovered through revenue recovery certificates, police intervention, or coercive executive notices. Legal enforceability is permanently extinguished.",
  },
  {
    title: "Balance Confirmation in Running Account & Email Records Constitute Valid Section 18 Acknowledgment",
    parties: "J.C. Budhiraja v. Chairman, Orissa Mining Corporation Ltd.",
    citation: "(2008) 2 SCC 444, Supreme Court of India",
    date: "Judgment Dated 11 January 2008",
    facts:
      "A contractor executed mining excavation contracts and submitted final measurement claims. When payment was withheld, the contractor relied on correspondence, ledger entries, and audit confirmation letters from the state corporation acknowledging liability to establish that the 3-year limitation under Article 18 had been repeatedly reset.",
    holding:
      "The Supreme Court ruled that for an acknowledgment under Section 18 to be valid, it need not specify the exact quantified sum, provided there is a clear, unequivocal admission of a jural relationship of debtor and creditor. Written confirmations, signed audit balance sheets, and formal commercial emails constitute legally binding Section 18 acknowledgments that reset the 3-year limitation clock from the date of dispatch.",
    amount: "Commercial Ledger & Electronic Audit Trail Validated for Clock Resets",
    takeaway:
      "You do not need a formal stamp paper agreement to reset the limitation clock. A WhatsApp message, email reply promising payment, or signed balance confirmation letter from a borrower or corporate vendor extends your right to sue by another full 3 years.",
  },
];

const FAQS = [
  {
    question: "What is the limitation period for recovery of money in India?",
    answer:
      "Under the Limitation Act, 1963, the limitation period for recovery of money is generally 3 years. For personal loans, friendly hand loans, and commercial invoices, Article 19, Article 21, and Article 14 prescribe 3 years from the date the loan was disbursed, demanded, or when the invoice fell due. For consumer disputes before District Consumer Commissions, Section 69 of the Consumer Protection Act, 2019 sets a strict 2-year limitation period.",
  },
  {
    question: "What is the limitation for money recovery suit under Order 37 CPC?",
    answer:
      "A summary suit under Order XXXVII of the Code of Civil Procedure (CPC) must be instituted within 3 years from the date the cause of action accrued (e.g. dishonour of a cheque, breach of a written promissory note, or unpaid invoice under Article 35 or 55). Under Section 3 of the Limitation Act, civil courts are statutorily required to dismiss any recovery suit filed after 3 years, even if the defendant fails to raise the limitation defence.",
  },
  {
    question: "How does written acknowledgment under Section 18 extend the 3-year limitation period?",
    answer:
      "Under Section 18 of the Limitation Act, if the debtor acknowledges liability in writing (including emails, WhatsApp messages, signed settlement agreements, or balance confirmations) before the initial 3-year period expires, a fresh limitation period of 3 years begins from the date of the acknowledgment. Under Supreme Court rulings in Sampuran Singh v. Niranjan Kaur, an acknowledgment made after the initial 3 years has expired cannot revive a time-barred debt.",
  },
  {
    question: "Does part-payment of a debt restart the limitation clock under Section 19?",
    answer:
      "Yes. Under Section 19 of the Limitation Act, 1963, where payment on account of a debt or interest is made by the debtor before the expiration of the prescribed period, a fresh period of 3 years is computed from the time when the payment was made. The payment must be evidenced by an acknowledged receipt, bank statement, or electronic UPI transfer record.",
  },
  {
    question: "What happens if the last day of the limitation period falls on a Sunday or court holiday?",
    answer:
      "Under Section 4 of the Limitation Act, 1963, where the prescribed period for any suit, appeal, or application expires on a day when the court is closed (such as a Sunday, gazetted public holiday, or annual court vacation), the suit or application may be instituted on the exact day that the court reopens. However, Section 4 does not extend the limitation period itself; it merely permits institution on the reopening day.",
  },
  {
    question: "Can court delay be condoned in a civil money recovery suit under Section 5?",
    answer:
      "No. Section 5 of the Limitation Act (extension of prescribed period in certain cases for 'sufficient cause') applies strictly to appeals, review applications, and revision petitions. It expressly does not apply to suits. A civil court has zero statutory power to condone delay in filing an ordinary money recovery suit or Order 37 summary suit if filed beyond 3 years.",
  },
  {
    question: "Kya udhar diya hua paisa 3 saal baad wapas mil sakta hai agar time limit nikal gayi ho?",
    answer:
      "Agar paise udhar diye huye 3 saal se zyada ho gaye hain aur debtor ne beech mein koi written acknowledgment (WhatsApp message, email ya chitthi) nahi diya ya koi part-payment nahi kiya, toh Limitation Act ke Section 3 ke tehat civil court mein recovery suit time-barred ho jati hai. Aisi sthiti mein court case kharij ho sakta hai. Lekin agar debtor Section 25(3) Indian Contract Act ke tehat time-barred debt chukane ka naya written promise kare, ya Lok Adalat mein pre-litigation settlement mein sahmati de, toh recovery sambhav ho sakti hai.",
  },
];

const WEB_APPLICATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Limitation Period Calculator: Is Your Claim Time-Barred?",
  url: `${SITE_URL}/tools/limitation-period-calculator`,
  description:
    "Check the limitation period for money, cheque, consumer and salary claims, including extensions from acknowledgment or part-payment.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
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
      name: "Tools",
      item: `${SITE_URL}/sitemap`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Limitation Period Calculator",
      item: `${SITE_URL}/tools/limitation-period-calculator`,
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

export default function LimitationPeriodCalculatorPage() {
  const breadcrumbItems = [
    { label: "Tools", href: "/sitemap" },
    { label: "Limitation Period Calculator", href: "/tools/limitation-period-calculator" },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
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
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Limitation Act, 1963</span>
              <span className="text-red-500">•</span>
              <span>Statutory Debt Expiry &amp; Revival Engine</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Check if Your Money Claim Is Still Within the Limitation Period
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Limitation Period &amp; Revival Rules)
              </p>
              <p>
                In India, civil suits for money recovery, unpaid invoices, and loan debts carry a strict 3-year limitation period under the Limitation Act, 1963. Consumer complaints allow 2 years under Section 69 CPA. However, a written acknowledgment under Section 18 or a part-payment under Section 19 made before expiry restarts a fresh 3-year limitation period. Under Section 3, time-barred suits are dismissed mandatorily by courts.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Money Recovery &amp; Contract Suits</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">2 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Consumer Dispute (CPA s.69)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Section 18</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Written Ack Restarts 3-Yr Clock</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Section 3</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Dismissal if Time-Barred</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <LimitationCalculatorTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Interactive Calculator Island */}
              <section id="heading-calculator" aria-labelledby="heading-calculator-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-calculator-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Limitation Period &amp; Time-Barred Debt Calculator
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Engine
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select your dispute category, enter the date when the cause of action or default occurred, and check if your claim has been extended by written WhatsApp/email acknowledgments or partial payments. The calculator computes the exact statutory expiry date and warns you if immediate pre-litigation action is required.
                </p>

                {/* Client Calculator Component */}
                <LimitationCalculatorClient />
              </section>

              {/* Section 2: H2 - Legal Basis & Rules */}
              <section id="heading-legal-basis" aria-labelledby="heading-legal-basis-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-legal-basis-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Calculating the Limitation Period for Money Recovery in India
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Limitation Act 1963
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In Indian jurisprudence, limitation law is governed by the Latin maxim <em>Interest reipublicae ut sit finis litium</em> (it is in the interest of the state that there should be an end to litigation) and <em>Vigilantibus non dormientibus jura subveniunt</em> (the laws assist the vigilant, not those who sleep over their rights).
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under <strong>Section 3(1) of the Limitation Act, 1963</strong>, every suit instituted, appeal preferred, and application made after the prescribed period shall be dismissed, even though limitation has not been set up as a defence by the opposite party. This makes limitation a substantive jurisdictional bar, not a mere procedural technicality. If a creditor files a recovery suit even one day after the 3-year boundary without a valid statutory extension, the judge is legally obligated to dismiss the case with zero recovery.
                </p>
                <div className="p-4 sm:p-5 bg-slate-100 rounded-2xl border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-800">
                  <strong className="text-slate-900 font-bold block">
                    Three Critical Pillars of the Limitation Clock:
                  </strong>
                  <ul className="list-disc pl-5 space-y-1.5 leading-relaxed">
                    <li>
                      <strong>Accrual of Cause of Action:</strong> Time begins running from the earliest date on which the right to sue accrued (e.g., loan transfer date, default on promised repayment date, or invoice due date).
                    </li>
                    <li>
                      <strong>Continuous Running of Time (Section 9):</strong> Once time has begun to run, no subsequent disability or inability to institute a suit or make an application stops it, unless expressly paused by a statutory provision.
                    </li>
                    <li>
                      <strong>No Condonation for Civil Suits (Section 5 Exclusion):</strong> While delay in appeals can be condoned for sufficient cause, Section 5 expressly excludes original suits. Delay in filing a money recovery suit cannot be excused by the court.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: H2 - Statutory Schedule Table */}
              <section id="heading-statutory-schedule" aria-labelledby="heading-statutory-schedule-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-schedule-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Limitation Schedule: Articles Governing Debts and Unpaid Dues
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Reference Matrix
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Schedule to the Limitation Act, 1963 categorizes civil disputes into specific articles. Identifying the correct article is vital because the starting point of the 3-year clock depends strictly on the legal nature of your transaction:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-bold">Claim Type</th>
                        <th className="py-3.5 px-4 font-bold">Governing Statute &amp; Article</th>
                        <th className="py-3.5 px-4 font-bold">Limitation Period</th>
                        <th className="py-3.5 px-4 font-bold">When Time Begins to Run</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-medium">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Personal Loan / Friendly Loan</td>
                        <td className="py-3 px-4">Limitation Act, Article 19 &amp; 21</td>
                        <td className="py-3 px-4 text-[#DC2626] font-bold">3 Years</td>
                        <td className="py-3 px-4">When loan is made, or when demand is made (if payable on demand)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Goods Sold &amp; Delivered (Vendor Dues)</td>
                        <td className="py-3 px-4">Limitation Act, Article 14 &amp; 15</td>
                        <td className="py-3 px-4 text-[#DC2626] font-bold">3 Years</td>
                        <td className="py-3 px-4">Date of goods delivery, or expiry of the agreed credit period</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Work Done / Professional Services</td>
                        <td className="py-3 px-4">Limitation Act, Article 18</td>
                        <td className="py-3 px-4 text-[#DC2626] font-bold">3 Years</td>
                        <td className="py-3 px-4">When the work is done / milestone service delivered</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Promissory Note / Pro-Note</td>
                        <td className="py-3 px-4">Limitation Act, Article 34 &amp; 35</td>
                        <td className="py-3 px-4 text-[#DC2626] font-bold">3 Years</td>
                        <td className="py-3 px-4">Date of execution, or date of demand / presentation</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Breach of Contract / Security Deposit</td>
                        <td className="py-3 px-4">Limitation Act, Article 55 &amp; 113</td>
                        <td className="py-3 px-4 text-[#DC2626] font-bold">3 Years</td>
                        <td className="py-3 px-4">When contract is broken or deposit refund refused</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Unpaid Salary / Notice Pay / Wages</td>
                        <td className="py-3 px-4">Limitation Act, Article 7</td>
                        <td className="py-3 px-4 text-[#DC2626] font-bold">3 Years</td>
                        <td className="py-3 px-4">When wages accrue or last working day of employment</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Consumer Court Complaint</td>
                        <td className="py-3 px-4">Consumer Protection Act 2019, Section 69</td>
                        <td className="py-3 px-4 text-emerald-700 font-bold">2 Years</td>
                        <td className="py-3 px-4">Date when cause of action (defect/deficiency) arose</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Cheque Dishonour Criminal Action</td>
                        <td className="py-3 px-4">NI Act, Section 138(b) &amp; 142(1)(b)</td>
                        <td className="py-3 px-4 text-amber-700 font-bold">30 + 15 + 30 Days</td>
                        <td className="py-3 px-4">Bank memo date triggers 30-day notice; Day 16 triggers 30-day court filing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: H2 - Section 18 and 19 Extensions */}
              <section id="heading-revival-rules" aria-labelledby="heading-revival-rules-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-revival-rules-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    How Sections 18 and 19 Extend or Restart the 3-Year Clock
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Clock Resets
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Many creditors mistakenly assume that if 3 years pass after lending money or sending an invoice, their claim is forever forfeited. However, Parliament embedded two powerful clock-reset mechanisms under Sections 18 and 19 of the Limitation Act, 1963:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Section 18: Effect of Acknowledgment in Writing
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Where, before the expiration of the prescribed period for a suit in respect of any property or right, an acknowledgment of liability has been made in writing signed by the party against whom such property or right is claimed, a <strong>fresh period of limitation</strong> shall be computed from the time when the acknowledgment was so signed.
                    </p>
                    <div className="p-3 bg-red-50 rounded-xl border border-red-100 text-xs text-red-900 space-y-1">
                      <strong className="block font-bold">Crucial Condition (Sampuran Singh Rule):</strong>
                      <p>
                        The written acknowledgment <strong>must be made BEFORE the initial 3 years expire</strong>. If you obtain an acknowledgment after the 36-month window has already closed, Section 18 cannot revive the debt.
                      </p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, emails, WhatsApp messages where the debtor states <em>&quot;Please give me 2 months, I will clear your dues&quot;</em>, and balance confirmation letters are fully admissible electronic admissions.
                    </p>
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Section 19: Effect of Part-Payment of Debt
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Where payment on account of a debt or of interest on a legacy is made before the expiration of the prescribed period by the person liable to pay, a <strong>fresh period of limitation</strong> of 3 years shall be computed from the time when the payment was made.
                    </p>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-900 space-y-1">
                      <strong className="block font-bold">Proof of Part-Payment:</strong>
                      <p>
                        Under the proviso to Section 19, an acknowledgment of the payment must appear in the handwriting of, or in a writing signed by, the person making the payment. Bank account statements, NEFT/RTGS transaction records, and UPI credit receipts conclusively satisfy this requirement.
                      </p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Even a token payment of ₹1,000 against a ₹5,00,000 outstanding debt completely restarts the full 3-year clock from the date of the credit entry, extending your legal recovery window by another 36 months.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      What if the 3-Year Limitation Has Already Expired?
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      If 3 years have lapsed with zero acknowledgment or payment, the debt is time-barred under Section 3. However, under <strong>Section 25(3) of the Indian Contract Act, 1872</strong>, if the debtor signs a fresh written agreement or promise to pay the time-barred debt, that new agreement forms a fresh, legally enforceable contract!
                    </p>
                  </div>
                  <Link
                    href="/send-legal-notice-online-india"
                    className="shrink-0 px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-xl transition-colors text-center"
                  >
                    Send Legal Notice to Provoke Admission
                  </Link>
                </div>
              </section>

              {/* Section 5: H2 - Decision Flowchart SVG */}
              <section id="heading-flowchart" aria-labelledby="heading-flowchart-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-flowchart-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Limitation Calculation &amp; Debt Revival Decision Flowchart
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Logic Tree
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Use this visual decision pathway to determine whether your debt is legally enforceable in court or whether you need pre-litigation restructuring:
                </p>

                {/* Hand-Authored Responsive SVG Diagram */}
                <div className="w-full bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs overflow-x-auto">
                  <svg
                    viewBox="0 0 900 520"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="Limitation Calculation and Section 18/19 Revival Decision Flowchart"
                  >
                    {/* Background Grid Accent */}
                    <rect width="900" height="520" fill="#F8FAFC" rx="16" />

                    {/* Step 1: Cause of Action */}
                    <rect x="50" y="40" width="220" height="70" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                    <text x="160" y="70" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                      1. Cause of Action Accrues
                    </text>
                    <text x="160" y="90" fill="#94A3B8" fontSize="11" textAnchor="middle">
                      Loan given, invoice due, breach
                    </text>

                    {/* Arrow 1 to Step 2 */}
                    <path d="M270 75 H340" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowhead)" />

                    {/* Step 2: Prescribed Window */}
                    <rect x="340" y="40" width="220" height="70" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                    <text x="450" y="70" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                      2. Prescribed Limitation Clock
                    </text>
                    <text x="450" y="90" fill="#38BDF8" fontSize="11" textAnchor="middle">
                      3 Yrs (Civil) / 2 Yrs (Consumer)
                    </text>

                    {/* Arrow 2 to Decision Diamond */}
                    <path d="M560 75 H630" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowhead)" />

                    {/* Decision 1: Did Debtor Pay or Acknowledge? */}
                    <polygon points="740,30 850,75 740,120 630,75" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
                    <text x="740" y="70" fill="#991B1B" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Did Debtor Pay or
                    </text>
                    <text x="740" y="85" fill="#991B1B" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Ack in Writing?
                    </text>

                    {/* Branch YES (Downwards from Decision 1) */}
                    <path d="M740 120 V180" stroke="#16A34A" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
                    <rect x="745" y="135" width="45" height="20" rx="4" fill="#DCFCE7" />
                    <text x="767" y="149" fill="#15803D" fontSize="11" fontWeight="bold" textAnchor="middle">
                      YES
                    </text>

                    {/* Check: Was it before 3-Yr Expiry? */}
                    <polygon points="740,180 850,225 740,270 630,225" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
                    <text x="740" y="220" fill="#92400E" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Was it BEFORE original
                    </text>
                    <text x="740" y="235" fill="#92400E" fontSize="11" fontWeight="bold" textAnchor="middle">
                      3-Yr limitation expired?
                    </text>

                    {/* Sub-Branch YES: Section 18 / 19 Clock Reset */}
                    <path d="M630 225 H450 V290" stroke="#16A34A" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead)" />
                    <rect x="520" y="215" width="45" height="20" rx="4" fill="#DCFCE7" />
                    <text x="542" y="229" fill="#15803D" fontSize="11" fontWeight="bold" textAnchor="middle">
                      YES
                    </text>

                    <rect x="330" y="290" width="240" height="85" rx="10" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2" />
                    <text x="450" y="315" fill="#166534" fontSize="12" fontWeight="bold" textAnchor="middle">
                      ✓ Fresh 3-Year Clock Starts
                    </text>
                    <text x="450" y="335" fill="#15803D" fontSize="11" textAnchor="middle">
                      Section 18 (Ack) or Section 19 (Payment)
                    </text>
                    <text x="450" y="355" fill="#15803D" fontSize="10" textAnchor="middle">
                      Valid for Order 37 CPC Summary Suit
                    </text>

                    {/* Sub-Branch NO: Sampuran Singh Doctrine */}
                    <path d="M740 270 V340" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
                    <rect x="745" y="285" width="40" height="20" rx="4" fill="#FEE2E2" />
                    <text x="765" y="299" fill="#B91C1C" fontSize="11" fontWeight="bold" textAnchor="middle">
                      NO
                    </text>

                    <rect x="620" y="340" width="240" height="85" rx="10" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
                    <text x="740" y="365" fill="#991B1B" fontSize="12" fontWeight="bold" textAnchor="middle">
                      ⚠️ Section 18 Inapplicable
                    </text>
                    <text x="740" y="385" fill="#7F1D1D" fontSize="10" textAnchor="middle">
                      Acknowledgment after 3 yrs cannot revive debt
                    </text>
                    <text x="740" y="405" fill="#7F1D1D" fontSize="10" textAnchor="middle">
                      (Need s.25(3) Contract Act Written Promise)
                    </text>

                    {/* Branch NO from Decision 1 (Right outwards then down) */}
                    <path d="M850 75 H880 V470 H450" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" fill="none" markerEnd="url(#arrowhead)" />

                    {/* Box 4: Has 3 Years Passed? */}
                    <rect x="50" y="190" width="220" height="75" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                    <text x="160" y="215" fill="#0F172A" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Are you within 3 Years?
                    </text>
                    <text x="160" y="235" fill="#64748B" fontSize="11" textAnchor="middle">
                      Check calendar from cause date
                    </text>
                    <text x="160" y="250" fill="#DC2626" fontSize="10" fontWeight="bold" textAnchor="middle">
                      &lt; 60 Days: Urgent Filing Window
                    </text>

                    {/* Connect Step 1 to Box 4 */}
                    <path d="M160 110 V190" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)" />

                    {/* Action outcomes */}
                    <rect x="50" y="430" width="370" height="65" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="235" y="455" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Recommended Legal Action
                    </text>
                    <text x="235" y="475" fill="#94A3B8" fontSize="11" textAnchor="middle">
                      Serve 15-Day Advocate Legal Notice • Summary Suit Order 37 CPC
                    </text>

                    <defs>
                      <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#DC2626" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </section>

              {/* Section 6: H2 - Worked Examples */}
              <section id="heading-worked-examples" aria-labelledby="heading-worked-examples-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-examples-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Worked Examples: Calculating Debt Limitation Periods
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Case Studies
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  These real-world case studies show how the Limitation Act applies in practice, and how clock-resets can salvage debts that appear expired:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Example 1 */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <span className="text-[10px] font-black px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full uppercase tracking-wider">
                      Scenario 1 • Friendly Loan with WhatsApp Ack
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      ₹4,00,000 Lent to Colleague with Section 18 Extension
                    </h3>
                    <div className="space-y-1.5 text-xs text-slate-700">
                      <p>
                        <strong>Facts:</strong> Rajesh transferred ₹4,00,000 via IMPS to his former colleague on 10 January 2023, repayable in 6 months (due 10 July 2023). In May 2025 (1 year 10 months after default), the borrower sent a WhatsApp message: <em>&quot;Rajesh bhai, please wait till Diwali 2025, I will clear all ₹4 lakh.&quot;</em>
                      </p>
                      <p>
                        <strong>Limitation Analysis:</strong> The original 3-year limitation under Article 19 would expire on 10 July 2026. Because the borrower acknowledged the debt in writing on 15 May 2025 (well before 10 July 2026), Section 18 triggered a fresh 3-year clock.
                      </p>
                      <p className="font-bold text-emerald-700">
                        Result: Limitation is extended up to 15 May 2028. Rajesh has ample time to serve a statutory legal notice and file a summary suit.
                      </p>
                    </div>
                  </div>

                  {/* Example 2 */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <span className="text-[10px] font-black px-2.5 py-1 bg-blue-50 text-blue-800 rounded-full uppercase tracking-wider">
                      Scenario 2 • Commercial B2B Invoice with Part-Payment
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      ₹8,50,000 Unpaid Vendor Invoice Saved by Section 19
                    </h3>
                    <div className="space-y-1.5 text-xs text-slate-700">
                      <p>
                        <strong>Facts:</strong> An MSME packaging supplier delivered corrugated boxes on 15 March 2022 with a 30-day payment term (due 15 April 2022). The buyer went silent. On 10 February 2025 (2 years 10 months after due date), the buyer transferred ₹50,000 via NEFT mentioning &quot;part payment packaging&quot;.
                      </p>
                      <p>
                        <strong>Limitation Analysis:</strong> Original 3-year limitation under Article 14 was set to expire on 15 April 2025. Because part-payment was credited before expiry, Section 19 computed a fresh 3-year limitation from the payment date.
                      </p>
                      <p className="font-bold text-blue-700">
                        Result: The limitation period is extended to 10 February 2028 for the remaining balance of ₹8,00,000.
                      </p>
                    </div>
                  </div>

                  {/* Example 3 */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <span className="text-[10px] font-black px-2.5 py-1 bg-red-50 text-red-800 rounded-full uppercase tracking-wider">
                      Scenario 3 • Unpaid Salary Beyond 3-Year Boundary
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      ₹2,80,000 Withheld F&amp;F Salary (Time-Barred under Section 3)
                    </h3>
                    <div className="space-y-1.5 text-xs text-slate-700">
                      <p>
                        <strong>Facts:</strong> Priya resigned from a software firm on 30 August 2022. The company withheld her FnF settlement. Priya made telephonic calls but received zero written emails or partial payments. She approached an advocate on 15 October 2025 (3 years and 1.5 months later).
                      </p>
                      <p>
                        <strong>Limitation Analysis:</strong> Under Article 7 of the Limitation Act, wages carry a 3-year limitation expiring on 30 August 2025. Because 36 months elapsed without any Section 18 written acknowledgment or Section 19 payment, the claim became time-barred.
                      </p>
                      <p className="font-bold text-red-700">
                        Result: A civil recovery suit will be dismissed under Section 3. Priya&apos;s remaining recourse is approaching the Labour Commissioner under the Code on Wages or exploring pre-litigation <Link href="/law/lok-adalat-pre-litigation-money-recovery" className="underline font-bold text-red-800">Lok Adalat conciliation</Link>.
                      </p>
                    </div>
                  </div>

                  {/* Example 4 */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <span className="text-[10px] font-black px-2.5 py-1 bg-purple-50 text-purple-800 rounded-full uppercase tracking-wider">
                      Scenario 4 • Consumer Court Defective Product
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      ₹1,20,000 Air Conditioner Malfunction under CPA Section 69
                    </h3>
                    <div className="space-y-1.5 text-xs text-slate-700">
                      <p>
                        <strong>Facts:</strong> An electronics brand delivered a defective central AC system on 5 November 2024. Service technicians visited multiple times, and on 20 January 2025, the brand formally closed the complaint stating &quot;Warranty Void due to external voltage fluctuations&quot;.
                      </p>
                      <p>
                        <strong>Limitation Analysis:</strong> Under Section 69 of the Consumer Protection Act, 2019, the limitation period is exactly 2 years from the date the cause of action arose (20 January 2025).
                      </p>
                      <p className="font-bold text-purple-700">
                        Result: Consumer complaint on e-Jagriti must be filed before 20 January 2027. (Check <Link href="/tools/consumer-commission-fee-jurisdiction-calculator" className="underline font-bold text-purple-800">Consumer Court Fees &amp; Jurisdiction</Link> before filing).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: H2 - Exceptions & Exclusions */}
              <section id="heading-statutory-exceptions" aria-labelledby="heading-statutory-exceptions-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-exceptions-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Exceptions and Exclusions Under the Limitation Act
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Exclusions
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While time generally runs continuously under Section 9, the Limitation Act contains statutory exclusions where specific days are deducted from the calendar calculation:
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 font-bold block text-sm">
                      1. Section 4: Expiry of Period When Court Is Closed
                    </strong>
                    <p className="leading-relaxed">
                      If the 3-year deadline expires on a Sunday, second Saturday, court summer vacation, or gazetted public holiday, the suit or application may be instituted on the exact day when the court reopens. The Supreme Court has clarified that Section 4 does not extend the limitation period; it simply prevents the litigant from being penalized for an act of God or the court (<em>Lex non cogit ad impossibilia</em>).
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 font-bold block text-sm">
                      2. Section 12: Exclusion of Time in Legal Proceedings
                    </strong>
                    <p className="leading-relaxed">
                      In computing limitation for an appeal or application, the day from which the period begins is excluded, along with the time requisite for obtaining a certified copy of the decree, sentence, or order appealed against.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 font-bold block text-sm">
                      3. Section 14: Exclusion of Time Spent in Good Faith in Court Lacking Jurisdiction
                    </strong>
                    <p className="leading-relaxed">
                      If you instituted a recovery proceeding in good faith and with due diligence before a forum that ultimately dismissed it for defect of jurisdiction (e.g., filing in a civil court instead of the MSME Samadhaan Council or NCLT), the entire time spent prosecuting that prior proceeding is excluded from the 3-year calculation.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 font-bold block text-sm">
                      4. Section 17: Effect of Fraud or Concealment
                    </strong>
                    <p className="leading-relaxed">
                      Where a suit is based on the fraud of the defendant, or where documents necessary to establish the plaintiff&apos;s right have been fraudulently concealed, the 3-year limitation clock does not begin to run until the plaintiff discovers the fraud or could have discovered it with reasonable diligence.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: H2 - Action Plan Before Expiry */}
              <section id="heading-next-steps" aria-labelledby="heading-next-steps-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-next-steps-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    What to Do Before Your Claim Hits the Limitation Deadline
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Action Plan
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If your claim is nearing the 3-year or 2-year boundary, waiting for informal phone calls or casual promises will cause permanent financial forfeiture. Take these four statutory steps:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black flex items-center justify-center text-xs">
                      1
                    </span>
                    <strong className="text-slate-900 font-bold block">
                      Serve a Formal Statutory Advocate Legal Notice
                    </strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      Issuing an advocate demand notice via Speed Post and electronic mail puts the debtor on a strict 15-day timeline. Most debtors reply in writing, which often inadvertently constitutes a fresh <Link href="/send-legal-notice-online-india" className="text-[#DC2626] font-bold underline">Section 18 written acknowledgment</Link> that resets your 3-year window. Check our transparent <Link href="/legal-notice-charges" className="text-[#DC2626] font-bold underline">legal notice charges</Link> before proceeding.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black flex items-center justify-center text-xs">
                      2
                    </span>
                    <strong className="text-slate-900 font-bold block">
                      File a Summary Suit Under Order XXXVII CPC
                    </strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      For dishonoured cheques, written promissory notes, and undisputed contracts, file an Order 37 summary suit in civil court. The defendant cannot contest without obtaining leave to defend from the judge, dramatically speeding up decree issuance.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black flex items-center justify-center text-xs">
                      3
                    </span>
                    <strong className="text-slate-900 font-bold block">
                      Approach e-Jagriti for Consumer Disputes
                    </strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      If the dispute involves defective products, airline refunds, builder delays, or telecom deficiency, file an online complaint on e-Jagriti within 2 years. Calculating correct fees via the <Link href="/tools/consumer-commission-fee-jurisdiction-calculator" className="text-[#DC2626] font-bold underline">consumer commission fee calculator</Link> avoids procedural rejections.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black flex items-center justify-center text-xs">
                      4
                    </span>
                    <strong className="text-slate-900 font-bold block">
                      Pre-Litigation Lok Adalat Conciliation
                    </strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      For family or friend loans where formal litigation feels combative, initiate pre-litigation settlement through <Link href="/law/lok-adalat-pre-litigation-money-recovery" className="text-[#DC2626] font-bold underline">Lok Adalat money recovery</Link>. An award passed by Lok Adalat is deemed a civil court decree with zero court fee. For Hindi guidance, read <Link href="/hi/legal-notice-kaise-bheje" className="text-[#DC2626] font-bold underline">legal notice kaise bheje</Link>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: H2 - Landmark Judicial Precedents */}
              <section id="heading-case-law" aria-labelledby="heading-case-law-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-law-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Supreme Court Judgments on Limitation &amp; Debt Revival
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Precedent #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Legal Principle Established
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Authority
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All High Courts &amp; Subordinate Civil Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong className="text-slate-900 font-bold">Practical Litigation Takeaway: </strong>
                          {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 10: H2 - Evidence Checklist */}
              <section id="heading-evidence" aria-labelledby="heading-evidence-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Documentary Evidence Checklist to Prove Limitation &amp; Debt Revival
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Court-Ready Checklist
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When filing a money recovery suit, the plaint must expressly state under Order VII Rule 6 of the CPC how the suit is within limitation. Assemble these documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <strong className="text-slate-900 font-bold block">1. Bank Account Statement &amp; UTR Details</strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      Certified bank statement showing the primary debit transfer to the debtor, plus any credit entries demonstrating partial payments under Section 19.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <strong className="text-slate-900 font-bold block">2. Electronic Admissions (BSA Section 63 Certificate)</strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      WhatsApp exports, SMS trails, and emails where the debtor admits the debt or requests more time, supported by a Section 63 electronic record certificate.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <strong className="text-slate-900 font-bold block">3. Invoices, Work Orders &amp; Delivery Proof</strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      Signed delivery challans, tax invoices with agreed credit terms, client emails approving milestones, or employment contracts.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
                    <strong className="text-slate-900 font-bold block">4. Postal Tracking &amp; Statutory Legal Notice Copy</strong>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      Copy of the advocate legal demand notice served via Registered Speed Post along with the India Post electronic delivery confirmation receipt.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: H2 - FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Limitation Period for Money Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Authoritative Answers
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2.5">
                        <span className="text-[#DC2626] font-black shrink-0">Q{idx + 1}.</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 12: Primary Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Primary Sources &amp; Authoritative Legal References
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Gazettes &amp; Judgments
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">•</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#DC2626] underline transition-colors"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Full Width CTA Banner */}
              <LimitationNoticeCTA />

              {/* Related Recovery Guides */}
              <RelatedRecoveryGuides />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
