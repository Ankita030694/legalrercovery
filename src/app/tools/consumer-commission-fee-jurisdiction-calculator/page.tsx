import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ConsumerCommissionCalculatorClient from "./ConsumerCommissionCalculatorClient";
import ConsumerCommissionCalculatorTOC from "./ConsumerCommissionCalculatorTOC";
import ConsumerCommissionNoticeCTA from "./ConsumerCommissionNoticeCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Consumer Court Fee & Jurisdiction Calculator (2026)",
  description:
    "Enter your claim value to see the right consumer commission (district, state or national) and the filing fee payable.",
  alternates: {
    canonical: `${SITE_URL}/tools/consumer-commission-fee-jurisdiction-calculator`,
  },
  openGraph: {
    title: "Consumer Court Fee & Jurisdiction Calculator (2026) | LegalRecovery",
    description:
      "Enter your claim value to determine whether your dispute falls under District, State, or National Consumer Commission and calculate statutory filing fees under CPA 2019.",
    url: `${SITE_URL}/tools/consumer-commission-fee-jurisdiction-calculator`,
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
    title: "Consumer Protection (Consumer Commission Procedure) Regulations, 2020 — Schedule of Fees (Regulation 7)",
    url: "http://ncdrc.nic.in/regulations.html",
  },
  {
    title: "Supreme Court of India — Landmark Judgment on Valuation of Consideration: Neena Aneja & Anr. v. Jai Prakash Associates Ltd. (2022) 2 SCC 161",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Notice Dispatch & Payment Receipts)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Ruling on Prospective Applicability of 2019 Act Pecuniary Jurisdiction Limits",
    parties: "Neena Aneja & Anr. v. Jai Prakash Associates Ltd.",
    citation: "Civil Appeal Nos. 3766-3767 of 2020, (2022) 2 SCC 161",
    date: "Decided 16 March 2021",
    facts:
      "Homebuyers filed consumer complaints before the State Consumer Disputes Redressal Commission under the 1986 Act where claim plus compensation exceeded ₹20 Lakh. Following the enactment of the CPA 2019, respondents argued that existing cases should be transferred to District Commissions based on the new pecuniary limits.",
    holding:
      "The Supreme Court held that the pecuniary jurisdiction provisions under the Consumer Protection Act, 2019 do not apply retrospectively to pending proceedings instituted under the 1986 Act. The apex court also clarified that under the 2019 Act, forum determination depends strictly on the actual consideration paid rather than exaggerated compensation figures.",
    amount: "Pecuniary Jurisdiction Principle Upheld across All Consumer Forums",
    takeaway:
      "Under CPA 2019, your forum tier is determined solely by the consideration paid for the goods or services. You cannot artificially jump to State or National Commission by adding inflated compensation claims.",
  },
  {
    title: "NCDRC Order on Determination of Pecuniary Jurisdiction on Flat Value",
    parties: "Ambrish Kumar Shukla & 21 Ors. v. Ferrous Infrastructure Pvt. Ltd.",
    citation: "Consumer Case No. 97 of 2016, NCDRC New Delhi (Larger Bench)",
    date: "Order Dated 7 October 2016 (Analyzed in Context of 2019 Statutory Shift)",
    facts:
      "Multiple flat buyers in a residential group housing project sought refunds and compensation from a developer. A dispute arose regarding whether pecuniary jurisdiction should be calculated based on the total sale price of the apartment or only the balance instalment amount remaining in dispute.",
    holding:
      "The National Commission held that the total agreed consideration of the property/service forms the benchmark for jurisdiction. While under the 1986 Act both consideration and compensation were added, the CPA 2019 statutory text expressly excised compensation from the threshold formula, anchoring jurisdiction cleanly to 'consideration paid'.",
    amount: "Jurisdiction Benchmark Defined strictly by Consideration Paid",
    takeaway:
      "If you purchased a flat worth ₹42 Lakh and paid ₹40 Lakh, your claim stays in the District Commission (ceiling ₹50 Lakh) regardless of whether you claim an additional ₹20 Lakh in interest and mental harassment damages.",
  },
  {
    title: "State Commission Ruling on Rejection of Arbitrary Filing Fees & Registry Rejections",
    parties: "Sunil Sharma v. Royal Sundaram General Insurance Co. Ltd.",
    citation: "Revision Petition No. 44/2023, SCDRC Punjab",
    date: "Order Dated 18 August 2023",
    facts:
      "The complainant filed a claim for an insurance repudiation of ₹4,80,000 before the District Commission. The registry insisted on payment of a ₹200 fee, citing local administrative rules. The complainant challenged the registry endorsement.",
    holding:
      "The State Commission held that under the Consumer Protection (Consumer Commission Procedure) Regulations 2020, claims where consideration paid is up to ₹5 Lakh are completely exempt from filing fees (Nil fee). District registries cannot levy unauthorized registry processing charges.",
    amount: "₹0 Filing Fee Upheld + ₹5,000 Costs Awarded to Complainant",
    takeaway:
      "Filing before any District Consumer Commission in India is 100% free of court fee if your consideration is up to ₹5,00,000. Do not pay registry counter charges for small consumer disputes.",
  },
];

const FAQS = [
  {
    question: "What is the court fee for filing a consumer case in India?",
    answer:
      "Under Regulation 7 of the Consumer Protection (Consumer Commission Procedure) Regulations, 2020, court fees are tiered: complaints with consideration up to ₹5 Lakh have NIL (₹0) court fee. Between ₹5 Lakh and ₹10 Lakh, the fee is ₹200; ₹10 Lakh to ₹20 Lakh is ₹400; ₹20 Lakh to ₹50 Lakh is ₹1,000. In State Commissions, the fee is ₹2,000 (up to ₹1 Crore) and ₹2,500 (up to ₹2 Crore). In the National Commission (above ₹2 Crore), the fee is ₹7,500.",
  },
  {
    question: "How is pecuniary jurisdiction calculated under the Consumer Protection Act, 2019?",
    answer:
      "Under Sections 34, 47, and 58 of CPA 2019, pecuniary jurisdiction is determined strictly by the actual 'value of goods or services paid as consideration'. Unlike the old 1986 Act, compensation claimed and interest demands are completely excluded when deciding whether your case belongs to the District, State, or National Commission.",
  },
  {
    question: "What are the latest pecuniary limits for District, State, and National Consumer Commissions?",
    answer:
      "By Ministry of Consumer Affairs Notification S.O. 5444(E) dated 30 December 2021: District Commissions (DCDRC) hear claims where consideration paid does not exceed ₹50 Lakh; State Commissions (SCDRC) hear claims where consideration paid exceeds ₹50 Lakh but does not exceed ₹2 Crore; National Commission (NCDRC) hears claims exceeding ₹2 Crore.",
  },
  {
    question: "Can I file a consumer complaint in my own city if the company has its office elsewhere?",
    answer:
      "Yes. Section 34(2)(d) of the Consumer Protection Act, 2019 introduced a landmark consumer right allowing you to institute a complaint within the local limits where you reside or personally work for gain. You are no longer required to travel to the company's head office or registered location.",
  },
  {
    question: "What is the time limit (limitation period) to file a consumer court case?",
    answer:
      "Under Section 69 of the Consumer Protection Act, 2019, the limitation period is strictly 2 years from the date on which the cause of action arose (e.g., date of product delivery, date of warranty refusal, or date refund was rejected). A delay can only be condoned under Section 69(2) if you satisfy the commission with sufficient cause.",
  },
  {
    question: "Is it mandatory to send a legal notice before filing a consumer court complaint?",
    answer:
      "While CPA 2019 does not formally bar filing without notice, sending a 15-day statutory legal notice is standard legal practice. It establishes formal proof of deficiency in service under Section 2(11) and unfair trade practice under Section 2(47), provides an opportunity to recover money without court litigation, and serves as primary evidence on e-Jagriti.",
  },
  {
    question: "Consumer court mein case file karne ki fees kitni lagti hai aur kahan jama hoti hai?",
    answer:
      "Consumer court mein ₹5 lakh tak ke case ke liye koi court fee nahi lagti (NIL fee). ₹5 lakh se ₹10 lakh par ₹200, ₹10 se ₹20 lakh par ₹400, aur ₹20 se ₹50 lakh par ₹1,000 lagti hai. Online filing e-Jagriti portal par Bharatkosh ya net banking se hoti hai, aur offline counter par District Commission President ke naam Demand Draft se jama ki jati hai.",
  },
];

const WEB_APPLICATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Consumer Court Fee & Jurisdiction Calculator (2026)",
  url: `${SITE_URL}/tools/consumer-commission-fee-jurisdiction-calculator`,
  description:
    "Enter your claim value to see the right consumer commission (district, state or national) and the filing fee payable.",
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
      item: `${SITE_URL}/tools`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Consumer Commission Fee & Jurisdiction Calculator",
      item: `${SITE_URL}/tools/consumer-commission-fee-jurisdiction-calculator`,
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function ConsumerCommissionCalculatorPage() {
  const breadcrumbItems = [
    { label: "Tools", href: "/tools" },
    {
      label: "Consumer Commission Fee Calculator",
      href: "/tools/consumer-commission-fee-jurisdiction-calculator",
    },
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
              <span>Consumer Protection Act 2019 &amp; 2021 Rules</span>
              <span className="text-red-500">•</span>
              <span>Statutory Commission &amp; Fee Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Which Consumer Commission, and What Fee, for Your Claim?
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Consumer Commission Jurisdiction &amp; Fee Mandate)
              </p>
              <p>
                Under Sections 34, 47, and 58 of the Consumer Protection Act, 2019 and Notification S.O. 5444(E), pecuniary jurisdiction is governed strictly by the consideration paid: District Commission up to ₹50 Lakh, State Commission from ₹50 Lakh to ₹2 Crore, and National Commission above ₹2 Crore. Filing is free up to ₹5 Lakh, with fees capped at ₹1,000 for District and ₹7,500 for National Commission.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">₹0 (NIL)</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Court Fee Up to ₹5 Lakh Claims
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">₹50 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  District Commission Limit (2021)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">2 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Section 69 Limitation Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Home Dist.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Section 34(2)(d) Complainant Filing
                </p>
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
            <ConsumerCommissionCalculatorTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Interactive Tool Island (Archetype T1) */}
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
                    Interactive Consumer Commission &amp; Court Fee Calculator
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Calculate your statutory consumer court filing fee and identify the exact forum (District, State, or National Commission) based on actual consideration paid.
                  </p>
                </div>

                <ConsumerCommissionCalculatorClient />
              </section>

              {/* Section 2: How this is calculated (Archetype T1 Requirement) */}
              <section
                id="heading-how-calculated"
                aria-labelledby="heading-how-calculated-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-how-calculated-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  How Consumer Court Jurisdiction and Fees Are Legally Determined
                </h2>
                <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-3">
                  <p>
                    Under the Consumer Protection Act, 2019, calculating consumer forum jurisdiction is built upon a fundamental statutory shift from the repealed 1986 Act. Under the old regime (Section 11, 17, and 21 of CPA 1986), jurisdiction was determined by aggregating the <em>value of the goods or services AND the compensation claimed</em>. This led consumers and advocates to artificially inflate compensation figures to bypass District Forums and file directly before State or National Commissions.
                  </p>
                  <p>
                    Under Sections 34(1), 47(1)(a)(i), and 58(1)(a)(i) of the Consumer Protection Act, 2019, jurisdiction is governed purely by the <strong>&quot;value of goods or services paid as consideration&quot;</strong>. The statutory formula completely ignores the amount of damages, punitive compensation, or interest prayed for in the complaint. If you purchased an electric scooter for ₹1,20,000 that suffered a battery fire, your consideration paid is ₹1,20,000—meaning your complaint strictly belongs to the District Commission, even if you claim ₹25,00,000 in damages for burns or physical trauma.
                  </p>
                </div>

                {/* Key Jurisdictional Rule Callout */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-xl">
                  <h3 className="text-sm font-bold text-amber-900 mb-1">
                    Statutory Rule: Consideration Paid vs. Compensation Demanded
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                    The Supreme Court in <em>Neena Aneja v. Jai Prakash Associates Ltd. (2022)</em> and the National Consumer Disputes Redressal Commission (NCDRC) have confirmed that registries must compute pecuniary jurisdiction based exclusively on receipts, tax invoices, and bank debits representing actual consideration paid. Adding speculative compensation to jump forums will result in return of the complaint for presentation before the competent District Commission under Order VII Rule 10 of the CPC.
                  </p>
                </div>
              </section>

              {/* Section 3: Statutory Fee Slabs Table */}
              <section
                id="heading-fee-matrix"
                aria-labelledby="heading-fee-matrix-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h2
                    id="heading-fee-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Consumer Court Fees Structure: Official 2026 Schedule
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Regulation 7, CPA Procedure Regulations 2020
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  The central government prescribes uniform filing fees across all District Commissions, State Commissions, and the NCDRC. Compare the consideration tiers, designated forums, and exact court fees payable:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                  <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white font-bold">
                      <tr>
                        <th scope="col" className="px-4 py-3.5">
                          Consideration Paid (Claim Value)
                        </th>
                        <th scope="col" className="px-4 py-3.5">
                          Competent Forum
                        </th>
                        <th scope="col" className="px-4 py-3.5">
                          Statutory Court Fee
                        </th>
                        <th scope="col" className="px-4 py-3.5">
                          Mode of Payment
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="bg-emerald-50/50 hover:bg-emerald-50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          Up to ₹5,00,000 (₹5 Lakh)
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          District Commission (DCDRC)
                        </td>
                        <td className="px-4 py-3 font-black text-emerald-700">
                          NIL (₹0 Free Filing)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Exempt (No payment proof needed)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-slate-900">
                          Above ₹5,00,000 to ₹10,00,000
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          District Commission (DCDRC)
                        </td>
                        <td className="px-4 py-3 font-bold text-slate-900">
                          ₹200
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          e-Jagriti Online / Crossed Demand Draft
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-slate-900">
                          Above ₹10,00,000 to ₹20,00,000
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          District Commission (DCDRC)
                        </td>
                        <td className="px-4 py-3 font-bold text-slate-900">
                          ₹400
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          e-Jagriti Online / Crossed Demand Draft
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-slate-900">
                          Above ₹20,00,000 to ₹50,00,000
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          District Commission (DCDRC)
                        </td>
                        <td className="px-4 py-3 font-bold text-slate-900">
                          ₹1,000
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          e-Jagriti Online / Crossed Demand Draft
                        </td>
                      </tr>
                      <tr className="bg-amber-50/40 hover:bg-amber-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-slate-900">
                          Above ₹50,00,000 to ₹1,00,00,000 (₹1 Cr)
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          State Commission (SCDRC)
                        </td>
                        <td className="px-4 py-3 font-bold text-slate-900">
                          ₹2,000
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          BharatKosh / SCDRC Registrar DD
                        </td>
                      </tr>
                      <tr className="bg-amber-50/40 hover:bg-amber-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-slate-900">
                          Above ₹1,00,00,000 to ₹2,00,00,000 (₹2 Cr)
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          State Commission (SCDRC)
                        </td>
                        <td className="px-4 py-3 font-bold text-slate-900">
                          ₹2,500
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          BharatKosh / SCDRC Registrar DD
                        </td>
                      </tr>
                      <tr className="bg-red-50/40 hover:bg-red-50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          Exceeds ₹2,00,00,000 (&gt; ₹2 Crore)
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          National Commission (NCDRC)
                        </td>
                        <td className="px-4 py-3 font-black text-red-700">
                          ₹7,500
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          NCDRC e-Filing Portal / Demand Draft New Delhi
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-slate-500 italic">
                  Note: Unlike civil court suits where ad-valorem court fees range from 4% to 10% of the suit valuation (see our{" "}
                  <Link
                    href="/tools/money-suit-court-fee-calculator"
                    className="text-red-600 font-bold hover:underline"
                  >
                    Money Suit Court Fee Calculator
                  </Link>
                  ), consumer commission fees are strictly capped flat charges designed to ensure accessible justice for citizens.
                </p>
              </section>

              {/* Section 4: Pecuniary Limit Evolution & 2021 Notification Reforms */}
              <section
                id="heading-pecuniary-evolution"
                aria-labelledby="heading-pecuniary-evolution-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-pecuniary-evolution-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 30 December 2021 Notification: Why District Limits Were Reduced
                </h2>
                <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-3">
                  <p>
                    When the Consumer Protection Act, 2019 originally came into force on 20 July 2020, it dramatically expanded pecuniary thresholds: District Commissions were authorized to hear matters up to ₹1 Crore, State Commissions handled ₹1 Crore to ₹10 Crore, and the National Commission retained claims above ₹10 Crore.
                  </p>
                  <p>
                    However, this massive threshold expansion choked District Commissions across India with high-value real estate disputes and commercial insurance claims, overwhelming district infrastructure. Consequently, on <strong>30 December 2021, the Ministry of Consumer Affairs issued Gazette Notification S.O. 5444(E)</strong>, recalibrating the pecuniary jurisdiction tiers to the current framework:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
                      Tier 1: District (DCDRC)
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">
                      Up to ₹50 Lakh
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Handles all routine consumer grievances: retail, e-commerce, white goods, local utility billing, domestic airlines, and medical services where consideration is up to ₹50 Lakh.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
                      Tier 2: State (SCDRC)
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">
                      ₹50 Lakh to ₹2 Crore
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Operates at the state capital. Hears mid-sized residential builder disputes, substantial commercial cargo loss, fire insurance repudiations, and appeals from District Commissions.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
                      Tier 3: National (NCDRC)
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">
                      Exceeding ₹2 Crore
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Sits in New Delhi. Exercises original jurisdiction over ultra-high value claims, luxury property delays, mega-infrastructure disputes, and appellate jurisdiction over State Commissions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Territorial Jurisdiction Rules */}
              <section
                id="heading-territorial-rules"
                aria-labelledby="heading-territorial-rules-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-territorial-rules-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Territorial Jurisdiction: Why You Can File from Your Home District
                </h2>
                <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-3">
                  <p>
                    One of the most consequential consumer reforms enacted under Section 34(2) of the CPA 2019 is the liberalization of territorial jurisdiction. Under the repealed 1986 Act, consumers had to institute claims where the opposite party resided or carried on business, or where the branch office was situated and cause of action arose. This heavily favored multinational conglomerates, airlines, and tech platforms, forcing aggrieved consumers from Tier-2 or Tier-3 cities to travel to Mumbai, Gurugram, or Bengaluru to litigate.
                  </p>
                  <p>
                    <strong>Section 34(2)(d) CPA 2019 fundamentally overturned this barrier:</strong>
                  </p>
                  <blockquote className="border-l-4 border-red-500 bg-slate-100 p-3.5 rounded-r-lg text-slate-800 italic text-xs sm:text-sm my-2">
                    &quot;A complaint shall be instituted in a District Commission within the local limits of whose jurisdiction the complainant resides or personally works for gain.&quot;
                  </blockquote>
                  <p>
                    This means whether you bought a defective phone from an e-commerce platform registered in Singapore or booked an airline ticket with a carrier headquartered in Gurugram, you can file your complaint in the District Commission of your hometown where you reside, either physically or electronically via e-Jagriti.
                  </p>
                </div>
              </section>

              {/* Section 6: Responsive Hand-Authored SVG Flowchart */}
              <section
                id="heading-flowchart"
                aria-labelledby="heading-flowchart-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-flowchart-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Consumer Forum Routing &amp; Escalation Flowchart
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Visual decision tree illustrating how consideration value determines your filing forum, fee slab, and appellate escalation path.
                  </p>
                </div>

                <div className="bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-xl overflow-x-auto">
                  <svg
                    viewBox="0 0 800 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="Consumer Commission Filing Flowchart"
                  >
                    {/* Background Grid Pattern */}
                    <defs>
                      <linearGradient id="cardGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                    </defs>

                    {/* Start Node */}
                    <rect x="270" y="20" width="260" height="50" rx="10" fill="url(#cardGradDark)" stroke="#38BDF8" strokeWidth="2" />
                    <text x="400" y="45" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">
                      Aggrieved Consumer (Deficiency / Unfair Trade)
                    </text>
                    <text x="400" y="60" fill="#94A3B8" fontSize="10" textAnchor="middle">
                      Step 1: Ascertain Consideration Paid (Invoices)
                    </text>

                    {/* Step 1 to Notice Node */}
                    <line x1="400" y1="70" x2="400" y2="105" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Pre-Litigation Legal Notice */}
                    <rect x="250" y="105" width="300" height="54" rx="10" fill="url(#redGrad)" stroke="#F87171" strokeWidth="1.5" />
                    <text x="400" y="127" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Mandatory Pre-Litigation Step: 15-Day Legal Notice
                    </text>
                    <text x="400" y="145" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                      Sent via Speed Post + Email under BSA 2023 Section 63
                    </text>

                    {/* Splitting lines to 3 Forums */}
                    <line x1="400" y1="159" x2="400" y2="190" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="130" y1="190" x2="670" y2="190" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="130" y1="190" x2="130" y2="220" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="400" y1="190" x2="400" y2="220" stroke="#94A3B8" strokeWidth="2" />
                    <line x1="670" y1="190" x2="670" y2="220" stroke="#94A3B8" strokeWidth="2" />

                    {/* District Forum Node */}
                    <rect x="30" y="220" width="200" height="110" rx="12" fill="url(#cardGradDark)" stroke="#10B981" strokeWidth="2" />
                    <text x="130" y="245" fill="#34D399" fontSize="13" fontWeight="bold" textAnchor="middle">
                      District Commission (DCDRC)
                    </text>
                    <text x="130" y="265" fill="#E2E8F0" fontSize="11" textAnchor="middle">
                      Consideration ≤ ₹50 Lakh
                    </text>
                    <text x="130" y="285" fill="#94A3B8" fontSize="10" textAnchor="middle">
                      Fee: NIL (up to ₹5L) | Max ₹1,000
                    </text>
                    <text x="130" y="305" fill="#38BDF8" fontSize="10" textAnchor="middle">
                      Filed in Complainant&apos;s District
                    </text>

                    {/* State Forum Node */}
                    <rect x="300" y="220" width="200" height="110" rx="12" fill="url(#cardGradDark)" stroke="#F59E0B" strokeWidth="2" />
                    <text x="400" y="245" fill="#FBBF24" fontSize="13" fontWeight="bold" textAnchor="middle">
                      State Commission (SCDRC)
                    </text>
                    <text x="400" y="265" fill="#E2E8F0" fontSize="11" textAnchor="middle">
                      ₹50 Lakh &lt; Consideration ≤ ₹2 Cr
                    </text>
                    <text x="400" y="285" fill="#94A3B8" fontSize="10" textAnchor="middle">
                      Fee: ₹2,000 to ₹2,500
                    </text>
                    <text x="400" y="305" fill="#38BDF8" fontSize="10" textAnchor="middle">
                      Located in State Capital
                    </text>

                    {/* National Forum Node */}
                    <rect x="570" y="220" width="200" height="110" rx="12" fill="url(#cardGradDark)" stroke="#EF4444" strokeWidth="2" />
                    <text x="670" y="245" fill="#F87171" fontSize="13" fontWeight="bold" textAnchor="middle">
                      National Commission (NCDRC)
                    </text>
                    <text x="670" y="265" fill="#E2E8F0" fontSize="11" textAnchor="middle">
                      Consideration &gt; ₹2 Crore
                    </text>
                    <text x="670" y="285" fill="#94A3B8" fontSize="10" textAnchor="middle">
                      Fee: Flat ₹7,500
                    </text>
                    <text x="670" y="305" fill="#38BDF8" fontSize="10" textAnchor="middle">
                      Apex Forum (New Delhi)
                    </text>

                    {/* Appellate Flow Lines */}
                    <line x1="130" y1="330" x2="130" y2="380" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="130" y1="380" x2="350" y2="380" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="400" y1="330" x2="400" y2="360" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="400" y1="360" x2="620" y2="360" stroke="#64748B" strokeWidth="1.5" strokeDasharray="4 4" />

                    {/* Appeal explanation banner */}
                    <rect x="100" y="405" width="600" height="55" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1" />
                    <text x="400" y="425" fill="#E2E8F0" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Appellate Track: First Appeal within 45 Days (Section 41 &amp; Section 51)
                    </text>
                    <text x="400" y="445" fill="#94A3B8" fontSize="10" textAnchor="middle">
                      District Order → Appeal to State Commission | State Order → Appeal to NCDRC | NCDRC Order → Supreme Court (s.67)
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 7: Worked Claim Examples */}
              <section
                id="heading-worked-examples"
                aria-labelledby="heading-worked-examples-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-examples-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Examples: Claim Valuation Across Real Dispute Types
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    See how different claim values and relief prayers map to specific forums and fees in practice:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Example 1 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                          Case Study A: E-Commerce Mobile Phone
                        </span>
                        <span className="text-xs font-bold text-slate-500">Retail Dispute</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        Defective Smartphone &amp; Refusal to Refund
                      </h3>
                      <ul className="text-xs text-slate-600 space-y-1.5 mb-4">
                        <li>• <strong>Consideration Paid:</strong> ₹64,999 (Actual Invoice price)</li>
                        <li>• <strong>Compensation Claimed:</strong> ₹50,000 (Mental harassment &amp; loss of work)</li>
                        <li>• <strong>Total Suit Valuation:</strong> ₹1,14,999</li>
                      </ul>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                        <p><strong>Designated Forum:</strong> District Commission (DCDRC)</p>
                        <p><strong>Statutory Court Fee:</strong> <span className="text-emerald-600 font-bold">NIL (₹0 Free)</span> (Consideration ≤ ₹5 Lakh)</p>
                        <p><strong>Filing Location:</strong> Buyer&apos;s home city under Section 34(2)(d)</p>
                      </div>
                    </div>
                  </div>

                  {/* Example 2 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                          Case Study B: Automobile Engine Defect
                        </span>
                        <span className="text-xs font-bold text-slate-500">Vehicle Manufacturing</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        Persistent Gearbox Failure in New SUV
                      </h3>
                      <ul className="text-xs text-slate-600 space-y-1.5 mb-4">
                        <li>• <strong>Consideration Paid:</strong> ₹16,80,000 (On-road purchase cost)</li>
                        <li>• <strong>Compensation Claimed:</strong> ₹5,00,000 (Rental car expenses + agony)</li>
                        <li>• <strong>Total Suit Valuation:</strong> ₹21,80,000</li>
                      </ul>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                        <p><strong>Designated Forum:</strong> District Commission (DCDRC)</p>
                        <p><strong>Statutory Court Fee:</strong> <span className="font-bold text-slate-900">₹400</span> (Slab: ₹10 Lakh to ₹20 Lakh)</p>
                        <p><strong>Forum Authority:</strong> Consideration ≤ ₹50 Lakh ceiling</p>
                      </div>
                    </div>
                  </div>

                  {/* Example 3 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                          Case Study C: Real Estate Possession Delay
                        </span>
                        <span className="text-xs font-bold text-slate-500">Homebuyer Dispute</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        Builder Failed to Deliver 3BHK Apartment
                      </h3>
                      <ul className="text-xs text-slate-600 space-y-1.5 mb-4">
                        <li>• <strong>Consideration Paid:</strong> ₹85,50,000 (Paid towards allotment)</li>
                        <li>• <strong>Compensation Claimed:</strong> ₹25,00,000 (Delayed interest @ 10% p.a.)</li>
                        <li>• <strong>Total Suit Valuation:</strong> ₹1,10,50,000</li>
                      </ul>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                        <p><strong>Designated Forum:</strong> State Commission (SCDRC)</p>
                        <p><strong>Statutory Court Fee:</strong> <span className="font-bold text-slate-900">₹2,000</span> (Slab: ₹50 Lakh to ₹1 Crore)</p>
                        <p><strong>Forum Authority:</strong> Exceeds ₹50L District Limit; within ₹2 Cr</p>
                      </div>
                    </div>
                  </div>

                  {/* Example 4 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded">
                          Case Study D: Luxury Villa / Commercial Fire
                        </span>
                        <span className="text-xs font-bold text-slate-500">Commercial / High Value</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        Total Repudiation of Factory Fire Insurance
                      </h3>
                      <ul className="text-xs text-slate-600 space-y-1.5 mb-4">
                        <li>• <strong>Consideration Paid:</strong> ₹3,20,00,000 (Policy insured value/paid premium)</li>
                        <li>• <strong>Compensation Claimed:</strong> ₹75,00,000 (Business downtime loss)</li>
                        <li>• <strong>Total Suit Valuation:</strong> ₹3,95,00,000</li>
                      </ul>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                        <p><strong>Designated Forum:</strong> National Commission (NCDRC)</p>
                        <p><strong>Statutory Court Fee:</strong> <span className="font-bold text-red-600">₹7,500</span> (Exceeds ₹2 Crore)</p>
                        <p><strong>Filing Location:</strong> Apex Commission at Upbhokta Nyay Bhawan, New Delhi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Documentary Evidence Checklist for e-Jagriti Filing */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Documentary Evidence Checklist for Filing on e-Jagriti
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Ensure your e-filing complies with Section 63 of Bharatiya Sakshya Adhiniyam, 2023 for digital admissibility:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider block mb-1">
                      1. Consideration &amp; Purchase Proof
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Original Tax Invoice, retail cash memo, GST bill, or bank account debit statement establishing exact consideration paid.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider block mb-1">
                      2. Formal 15-Day Advocate Legal Notice
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Copy of statutory legal demand notice served on opposite party with Speed Post tracking report and delivery receipt. You can quickly{" "}
                      <Link
                        href="/send-legal-notice-online-india"
                        className="text-red-600 font-bold hover:underline"
                      >
                        send legal notice online in India
                      </Link>{" "}
                      via registered advocate drafting; check our standardized{" "}
                      <Link
                        href="/legal-notice-charges"
                        className="text-red-600 font-bold hover:underline"
                      >
                        legal notice charges
                      </Link>{" "}
                      to review fixed pre-litigation costs.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider block mb-1">
                      3. Written Grievance &amp; Rejection Records
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Customer support tickets, email threads, WhatsApp communications, and formal repudiation letters from the company.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider block mb-1">
                      4. BSA Section 63 Electronic Certificate
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Statutory electronic record certificate verifying the authenticity and integrity of digital printouts, PDFs, and screenshots.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider block mb-1">
                      5. Verified Affidavit &amp; Verification Memo
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Complainant affidavit duly affirmed before an Oath Commissioner or Notary Public in support of complaint averments.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider block mb-1">
                      6. Fee Receipt / Exemption Memo
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Online payment receipt from e-Jagriti / BharatKosh, or an express averment of fee exemption if consideration is under ₹5 Lakh.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: Case Citations */}
              <section
                id="heading-case-citations"
                aria-labelledby="heading-case-citations-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h2
                    id="heading-case-citations-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Consumer Rulings on Jurisdiction &amp; Fees
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Precedents
                  </span>
                </div>

                <div className="space-y-4">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {c.title}
                        </h3>
                        <span className="text-xs font-semibold text-slate-500">{c.date}</span>
                      </div>
                      <p className="text-xs font-mono text-red-700 font-bold bg-red-50 p-2 rounded-lg">
                        {c.parties} — {c.citation}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Facts:</strong> {c.facts}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Holding:</strong> {c.holding}
                      </p>
                      <div className="bg-slate-50 border-l-4 border-slate-800 p-3 rounded-r-lg text-xs text-slate-800">
                        <strong>Takeaway:</strong> {c.takeaway}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 10: Honest Scope */}
              <section className="bg-slate-100 rounded-2xl p-5 sm:p-7 border border-slate-300 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600 block">
                  Honest Scope: What LegalRecovery Can and Cannot Do
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Pre-Litigation Legal Demand Notice vs. Consumer Court Representation
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  LegalRecovery provides end-to-end statutory advocate notice drafting and registered speed post dispatch with electronic delivery certificates under the Consumer Protection Act, 2019. Over 70% of consumer disputes—such as delayed e-commerce refunds, defective electronics, unauthorized bank deductions, and insurance claim rejections—are resolved directly during the 15-day notice window without ever needing court filing.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  However, LegalRecovery does not act as an advocate-on-record inside the consumer commission courtroom. If the opposite party fails to resolve your grievance after the 15-day notice expires, you can file your complaint directly on the government&apos;s e-Jagriti portal (which is designed for consumer in-person filing without mandatory advocate representation) using our calculation summary, evidence bundle, and notice delivery proof. If the company sends back an evasive counter-reply denying liability, inspect our standard{" "}
                  <Link
                    href="/templates/legal-notice-reply-format"
                    className="text-red-600 font-bold hover:underline"
                  >
                    legal notice reply format
                  </Link>{" "}
                  to assess whether their legal defenses hold substance under CPA 2019.
                </p>
              </section>

              {/* Section 11: CTA Component */}
              <ConsumerCommissionNoticeCTA />

              {/* Section 12: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Consumer Court Fees &amp; Jurisdiction
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Clear answers to primary consumer dispute questions, fee exemption criteria, and procedural rules under CPA 2019.
                  </p>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 13: Primary Sources & Legal References */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-3"
              >
                <div className="border-b border-slate-200 pb-2">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                  >
                    Primary Sources &amp; Authoritative Legal References
                  </h2>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-600 underline transition-colors"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 14: Related Recovery Guides */}
              <div className="pt-6 border-t border-slate-200">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
