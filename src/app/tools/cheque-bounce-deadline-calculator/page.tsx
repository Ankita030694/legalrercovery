import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ChequeBounceNoticeCTA from "./ChequeBounceNoticeCTA";
import ChequeBounceCalculatorTOC from "./ChequeBounceCalculatorTOC";
import ChequeBounceCalculatorClient from "./ChequeBounceCalculatorClient";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Cheque Bounce Deadline Calculator (Section 138)",
  description:
    "Enter the return-memo date to get your 30-day notice deadline, 15-day payment window and complaint filing date under Section 138.",
  alternates: {
    canonical: `${SITE_URL}/tools/cheque-bounce-deadline-calculator`,
  },
  openGraph: {
    title: "Cheque Bounce Deadline Calculator (Section 138 NI Act) | LegalRecovery",
    description:
      "Calculate your 30-day statutory notice time limit, 15-day cure window, and Section 142 complaint filing deadline under the Negotiable Instruments Act.",
    url: `${SITE_URL}/tools/cheque-bounce-deadline-calculator`,
    type: "website",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Cheque Bounce Deadline Calculator (Section 138 NI Act) | LegalRecovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheque Bounce Deadline Calculator (Section 138 NI Act) | LegalRecovery",
    description:
      "Calculate your 30-day statutory notice time limit, 15-day cure window, and Section 142 complaint filing deadline under the Negotiable Instruments Act.",
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
    title: "Negotiable Instruments Act, 1881 (Act No. 26 of 1881) — Section 138, Section 141, Section 142 & Section 143A",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Supreme Court of India — Sanjabij Tari v. Kishore S. Borcar (Criminal Appeal No. 3968 of 2025, Decided 25 September 2025)",
    url: "https://main.sci.gov.in/judgments",
  },
  {
    title: "Reserve Bank of India (RBI) Notification on Cheque Validity Period (DBOD.AML.BC.No.47/14.01.001/2011-12)",
    url: "https://www.rbi.org.in/scripts/BS_CircularIndexDisplay.aspx?Id=6802",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Notice Dispatch & Bank Memos)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Supreme Court Landmark Rulings on NI Act: NEPC Micon (Account Closed), Goaplast (Stop Payment) & Laxmi Dyechem (Signature Differs)",
    url: "https://indiankanoon.org/doc/1821108/",
  },
  {
    title: "National Judicial Data Grid (NJDG) — Summary Procedure & Compounding Timelines under Section 143 NI Act",
    url: "https://njdg.ecourts.gov.in/",
  },
];

const FAQS = [
  {
    question: "What is the cheque bounce notice time limit under Section 138?",
    answer:
      "Under Section 138(b) of the Negotiable Instruments Act, 1881, the legal notice must be issued within exactly 30 calendar days from the date you receive information of dishonour (the bank return memo). This 30-day limit is strictly mandatory; missing it extinguishes your criminal remedy under Section 138, leaving only a civil suit for debt recovery.",
  },
  {
    question: "Cheque bounce notice in how many days should be answered by the drawer?",
    answer:
      "Under Section 138(c) of the NI Act, the drawer has 15 calendar days from the date of receiving the legal demand notice to pay the full cheque amount. If full payment is made within this 15-day cure window, no criminal offence is committed. The payee cannot file a court complaint until these 15 days expire.",
  },
  {
    question: "What is the cheque bounce case time limit for filing a complaint in court?",
    answer:
      "Under Section 142(1)(b) of the NI Act, the payee must file a formal criminal complaint before the Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate (MM) within 1 month (30 days) from the date the cause of action arises—which is Day 16 after the drawer receives the legal notice. Unlike the 30-day notice window, court filing delay can be condoned by the Magistrate upon showing sufficient cause.",
  },
  {
    question: "Can I send a cheque bounce notice after 30 days of receiving the return memo?",
    answer:
      "You can send a notice, but it will not support a criminal complaint under Section 138 because the Supreme Court has consistently held that the 30-day notice period under Section 138(b) cannot be extended or condoned by courts. However, you can still send a civil legal notice and institute a Summary Suit under Order XXXVII of the Code of Civil Procedure (CPC) or an ordinary recovery suit within 3 years under the Limitation Act.",
  },
  {
    question: "What is the 138 notice period if the drawer refuses or avoids delivery of the notice?",
    answer:
      "Under Section 27 of the General Clauses Act, 1897 and established Supreme Court rulings (C.C. Alavi Haji v. Palapetty Muhammed), if a legal notice is dispatched to the correct address of the drawer via Registered Speed Post, service is presumed. If the postal endorsement states 'refused', 'unclaimed', or 'not available', the 15-day cure clock begins from the date of the postal endorsement or return.",
  },
  {
    question: "Does Section 138 apply if the cheque bounced due to 'Account Closed' or 'Stop Payment'?",
    answer:
      "Yes. The Supreme Court has conclusively held that dishonour reasons such as 'Account Closed' (NEPC Micon Ltd. v. Magma Leasing), 'Payment Stopped by Drawer' (Goaplast Pvt. Ltd. v. Chico Ursula D'Souza), and 'Signature Differs' (Laxmi Dyechem v. State of Gujarat) fall squarely within the criminal ambit of Section 138, provided the underlying debt is legally enforceable.",
  },
  {
    question: "What did the Supreme Court change in cheque bounce guidelines in September 2025?",
    answer:
      "In Sanjabij Tari v. Kishore S. Borcar (decided 25 September 2025), the Supreme Court mandated nationwide procedural reforms for Section 138 cases, including mandatory e-summons via WhatsApp and email, early settlement protocols with graded compounding fees before charge framing, and expedited Section 143A interim compensation orders of up to 20% within 60 days.",
  },
  {
    question: "Cheque bounce hone ke kitne din baad legal notice bhejna padta hai?",
    answer:
      "Bank se cheque bounce ki return memo milne ke 30 dino ke andar drawer ko Section 138 ka statutory legal demand notice bhejna anivarya hota hai. Notice milne ke baad drawer ko 15 din ka samay milta hai payment karne ke liye. Agar 15 din mein payment nahi hota, toh agle 30 din (1 month) ke andar court mein case file karna hota hai.",
  },
];

const WEB_APPLICATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Cheque Bounce Deadline Calculator (Section 138 NI Act)",
  url: `${SITE_URL}/tools/cheque-bounce-deadline-calculator`,
  description:
    "Enter the return-memo date to get your 30-day notice deadline, 15-day payment window and complaint filing date under Section 138.",
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cheque Bounce Notice Timeline",
      item: `${SITE_URL}/cheque-bounce-notice-timeline-section-138`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Cheque Bounce Deadline Calculator",
      item: `${SITE_URL}/tools/cheque-bounce-deadline-calculator`,
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

export default function ChequeBounceCalculatorPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Cheque Bounce Hub", href: "/cheque-bounce-notice-timeline-section-138" },
    { label: "Deadline Calculator", href: "/tools/cheque-bounce-deadline-calculator" },
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
              <span>Section 138 Negotiable Instruments Act</span>
              <span className="text-red-500">•</span>
              <span>Statutory Deadline Calculator</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Cheque Bounced? Calculate Your Section 138 Deadlines
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Section 138 NI Act Mandate)
              </p>
              <p>
                Under Section 138 of the Negotiable Instruments Act, 1881, the payee must issue a statutory demand notice within 30 days of receiving the bank dishonour memo. The drawer has 15 days from notice delivery to pay. If unpaid, the cause of action arises on Day 16, granting a strict 1-month window to file a criminal complaint before the Magistrate.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Demand Notice Window (s.138(b))
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Drawer Cure Period (s.138(c))
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">1 Month</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Court Complaint Window (s.142(1))
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">2x Value</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Max Fine + Up to 2 Yrs Jail
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
            <ChequeBounceCalculatorTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Interactive Stepper Tool Island (Archetype T2) */}
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
                    Section 138 Deadline Calculator: Notice &amp; Court Timelines
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Enter the date on your cheque and the date you received the bank return memo to compute your legally binding notice, cure, and court filing countdowns.
                  </p>
                </div>

                {/* Client Calculator Component */}
                <ChequeBounceCalculatorClient />
              </section>

              {/* Section 2: Statutory Result Interpretation Table */}
              <section
                id="heading-statutory-table"
                aria-labelledby="heading-statutory-table-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    NI Act Timelines: Section 138 &amp; 142 Action Schedule
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Every stage of a cheque dishonour dispute operates under rigid statutory deadlines. Missing even one procedural step can invalidate the entire criminal proceeding:
                  </p>
                </div>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Section 138 &amp; 142 Statutory Timelines, Action Rules and Fatal Pitfalls
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Statutory Milestone
                        </th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Section &amp; Legal Benchmark
                        </th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Mandatory Time Limit
                        </th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Required Legal Action
                        </th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          Fatal Error / Legal Pitfall
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          1. Cheque Presentation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">
                          Section 138(a) NI Act
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">
                          Within 3 Months
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Deposit cheque with payee&apos;s clearing bank before 3 calendar months elapse.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-red-700 font-medium">
                          Stale cheque presentation completely bars Section 138 prosecution.
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          2. Statutory Demand Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">
                          Section 138(b) NI Act
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">
                          Within 30 Days
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Dispatch written demand notice to drawer via Registered Speed Post + BSA Email.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-red-700 font-medium">
                          Notice sent on Day 31 is fatal; courts cannot condone delay in sending notice.
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          3. Drawer Cure / Payment Period
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">
                          Section 138(c) NI Act
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">
                          15 Calendar Days
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Drawer must remit full cheque amount; payee must await window expiry.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-red-700 font-medium">
                          Filing a court complaint before 15 days is premature and will be dismissed.
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          4. Criminal Complaint in Court
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">
                          Section 142(1)(b) NI Act
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">
                          1 Month (30 Days)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          File criminal complaint before competent JMFC/MM having territorial jurisdiction.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-amber-700 font-medium">
                          Delay requires formal Condonation of Delay application showing sufficient cause.
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          5. Civil Recovery Fallback
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-mono">
                          Order 37 CPC / Limitation Act
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">
                          3 Years from Cheque Date
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          File Summary Suit for recovery of commercial or personal debt.
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-slate-600">
                          No criminal pressure or imprisonment; requires paying ad-valorem court fees.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Want to learn more about the complete statutory framework? Check our detailed guide on the{" "}
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="text-blue-700 underline font-semibold"
                  >
                    Cheque Bounce Notice Timeline (30 + 15 Day Rule)
                  </Link>
                  .
                </p>
              </section>

              {/* Section 3: Legal Method & Statutory Basis */}
              <section
                id="heading-legal-basis"
                aria-labelledby="heading-legal-basis-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-legal-basis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Legal Basis: How NI Act Enforces Cheque Honours
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Section 138 was inserted into the Negotiable Instruments Act to infuse credibility into commercial transactions by creating criminal liability for the dishonour of negotiable paper. However, because criminal sanctions (up to two years imprisonment and double the cheque amount as fine) are severe, Indian courts hold complainants to the strictest procedural standards:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 bg-red-50 text-[#DC2626] rounded-md uppercase tracking-wider">
                      Section 138(b) • The 30-Day Notice Rule
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Why the 30-Day Limit Cannot Be Extended
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      In landmark judgments including <em>Subodh S. Salaskar v. Jayprakash M. Shah</em>, the Supreme Court ruled that the 30-day period under Section 138(b) is a condition precedent to the commission of the offence. If no notice is sent within 30 days of receiving the return memo, no offence under Section 138 is committed in law, and no court possesses jurisdiction to condone delay in sending notice.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-md uppercase tracking-wider">
                      Section 142(1)(b) Proviso • Court Condonation
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Condonation of Delay in Court Complaint Filing
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      While the notice window cannot be relaxed, Parliament inserted a proviso to Section 142(1)(b) enabling Magistrates to take cognizance of a complaint after the 1-month window if the complainant demonstrates &quot;sufficient cause&quot; (such as medical incapacitation or postal delay). An application under Section 142(1)(b) proviso must accompany late complaints.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-md uppercase tracking-wider">
                      Section 143A • 20% Interim Compensation
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Financial Relief During Trial
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Section 143A introduced by the 2018 amendment, the trial court can order the drawer to deposit interim compensation of up to 20% of the cheque face value within 60 days of framing charges. This provision deters frivolous delay tactics by dishonest drawers.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 bg-purple-50 text-purple-800 rounded-md uppercase tracking-wider">
                      Sanjabij Tari (SC 2025) • E-Summons &amp; Compounding
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Supreme Court Nationwide 2025 Directives
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      On 25 September 2025, in <em>Sanjabij Tari v. Kishore S. Borcar</em>, the Supreme Court laid down nationwide standard operating procedures: trial courts must issue e-summons via WhatsApp and verified email, encourage early compounding at lower costs (10% before charge framing), and enforce electronic notice proofs under Section 63 BSA 2023. Read our complete analysis in{" "}
                      <Link
                        href="/law/cheque-bounce-supreme-court-guidelines-2025"
                        className="text-blue-700 underline font-semibold"
                      >
                        Supreme Court Cheque Bounce Guidelines 2025
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Resolution Flowchart (Hand-authored SVG strictly matching irctc style) */}
              <section
                id="heading-flowchart"
                aria-labelledby="heading-flowchart-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-flowchart-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    Escalation Flowchart: Return Memo to Criminal Trial
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Follow the statutory sequence from receipt of the dishonour memo to securing recovery or filing a complaint before the Magistrate:
                  </p>
                </div>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Step 1
                    </span>
                    <h3 className="font-bold text-sm">Cheque Dishonour Memo Received</h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Bank issues CTS return memo (Code 01, 02, 11, etc.). Day 0 clock starts immediately.
                    </p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-300">
                    <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider block mb-1">
                      Step 2
                    </span>
                    <h3 className="font-bold text-sm">Draft &amp; Serve Statutory Demand Notice</h3>
                    <p className="text-xs text-red-900 mt-1">
                      Must dispatch via Registered Speed Post + BSA Email within strictly 30 days.
                    </p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                      Step 3
                    </span>
                    <h3 className="font-bold text-sm">15-Day Drawer Cure Window</h3>
                    <p className="text-xs text-amber-900 mt-1">
                      Drawer has 15 calendar days to pay in full. Payee cannot file complaint during this period.
                    </p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-300">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                      Step 4
                    </span>
                    <h3 className="font-bold text-sm">Cause of Action &amp; Court Filing</h3>
                    <p className="text-xs text-emerald-900 mt-1">
                      Cause of action arises on Day 16. File criminal complaint under Section 142 within 1 month.
                    </p>
                  </div>
                  <div className="bg-purple-50 text-purple-950 p-4 rounded-xl border border-purple-300">
                    <span className="text-[10px] font-bold text-purple-800 uppercase tracking-wider block mb-1">
                      Step 5
                    </span>
                    <h3 className="font-bold text-sm">Compounding Settlement or Trial Conviction</h3>
                    <p className="text-xs text-purple-900 mt-1">
                      Claim 20% interim compensation under Section 143A or settle with early compounding costs.
                    </p>
                  </div>
                </div>

                {/* Hand-authored SVG Diagram with Smooth Horizontal Scroll */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Statutory Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Section 138 Cheque Bounce Statutory Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="chqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="chqAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="chqWarn" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D97706" />
                        <stop offset="100%" stopColor="#B45309" />
                      </linearGradient>
                      <linearGradient id="chqSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#chqGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">
                      STEP 1
                    </text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      Return Memo
                    </text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                      Day 0: Dishonour Slip
                    </text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">
                      Funds / Signature / Stop
                    </text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="url(#chqAlert)" />
                    <text x="250" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">
                      STEP 2
                    </text>
                    <text x="250" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      30-Day Notice
                    </text>
                    <text x="250" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                      Section 138(b) Demand
                    </text>
                    <text x="250" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">
                      Speed Post + BSA Email
                    </text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="url(#chqWarn)" />
                    <text x="420" y="45" fill="#FEF3C7" fontWeight="bold" textAnchor="middle">
                      STEP 3
                    </text>
                    <text x="420" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      15-Day Cure
                    </text>
                    <text x="420" y="82" fill="#FEF3C7" fontSize="10" textAnchor="middle">
                      Section 138(c) Window
                    </text>
                    <text x="420" y="98" fill="#FDE68A" fontSize="9" textAnchor="middle">
                      Drawer Must Settle
                    </text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
                    <text x="590" y="45" fill="#93C5FD" fontWeight="bold" textAnchor="middle">
                      STEP 4
                    </text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      Court Complaint
                    </text>
                    <text x="590" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                      Section 142(1)(b)
                    </text>
                    <text x="590" y="98" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      1 Month from Cause of Action
                    </text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#chqSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">
                      STEP 5
                    </text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      Recovery / Trial
                    </text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">
                      20% Interim Comp (143A)
                    </text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">
                      or Compounding Accord
                    </text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">
                      STATUTORY COUNTDOWN FORMULAS UNDER SECTIONS 138 &amp; 142:
                    </text>
                    <text x="25" y="192" fill="#475569" fontSize="10">
                      • Notice Window: Return-Memo Date + Strictly 30 Calendar Days (Section 138(b)) — Fatal if missed
                    </text>
                    <text x="25" y="208" fill="#475569" fontSize="10">
                      • Cure Period: Notice Receipt Date + 15 Calendar Days (Section 138(c)) — Filing complaint early is invalid
                    </text>
                    <text x="25" y="224" fill="#475569" fontSize="10">
                      • Court Limitation: Day 16 of Notice Receipt + 1 Month (Section 142(1)(b)) — Condonable upon showing sufficient cause
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 5: Dishonour Reasons & Edge Cases Accordion */}
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
                    Dishonour Reasons &amp; Edge Cases: Does Section 138 Apply?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Drawers frequently use technical return reasons to evade liability. The Supreme Court has systematically shut down these loopholes:
                  </p>
                </div>

                <div className="space-y-3">
                  <details className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                        Cheque Bounced with &quot;Account Closed&quot; — Is Section 138 Maintainable?
                      </span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform font-bold text-base">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>
                        <strong>Yes, absolutely.</strong> In the landmark ruling <em>NEPC Micon Ltd. v. Magma Leasing Ltd. (1999) 4 SCC 253</em>, the Supreme Court held that closing a bank account before the cheque is presented is equivalent to dishonour due to insufficiency of funds. The drawer cannot escape Section 138 liability by voluntarily terminating the account relationship with the bank.
                      </p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                        Cheque Bounced with &quot;Signature Differs&quot; or &quot;Incomplete Signature&quot;
                      </span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform font-bold text-base">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>
                        <strong>Yes.</strong> In <em>Laxmi Dyechem v. State of Gujarat (2012) 13 SCC 375</em>, the Supreme Court held that dishonour on grounds of signature mismatch, signature incomplete, or mismatch in figures and words falls squarely within the preview of Section 138. If the drawer intentionally alters their signature to avoid clearance, it does not defeat the statutory offence.
                      </p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                        &quot;Payment Stopped by Drawer&quot; (Stop Payment Notice)
                      </span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform font-bold text-base">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>
                        <strong>Yes, fully maintainable.</strong> In <em>Goaplast Pvt. Ltd. v. Chico Ursula D&apos;Souza (2003) 3 SCC 232</em> and <em>MMTC Ltd. v. Medchl Chemicals</em>, the Supreme Court established that once a cheque is issued, the drawer cannot defeat Section 138 merely by issuing a stop-payment instruction to the bank. The drawer must prove before the trial court that there was no existing debt or liability at the time the instruction was given.
                      </p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                        Security Cheque Defense: Given to NBFC, Builder, or Landlord
                      </span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform font-bold text-base">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>
                        <strong>Section 138 applies once debt matures.</strong> Under Section 139 of the NI Act, there is a statutory presumption that the holder received the cheque for the discharge of a debt. In <em>Bir Singh v. Mukesh Kumar (2019) 4 SCC 197</em> and <em>Sripati Singh v. State of Jharkhand (2021)</em>, the Supreme Court ruled that even a blank signed cheque handed over as security matures into a legally enforceable instrument the moment the underlying liability becomes due and unpaid.
                      </p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                        Cheque Bounced Against a Company: Liability of Directors under Section 141
                      </span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform font-bold text-base">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>
                        Under Section 141 of the NI Act, when a company or LLP commits an offence under Section 138, every person who was in charge of and responsible for the conduct of the business at the time the offence was committed is vicariously liable. The legal demand notice must be served on both the company (Corporate Office) and the signatory director/Managing Director. Nominating independent or non-executive directors requires specific averments of active day-to-day management (<em>SMS Pharmaceuticals Ltd. v. Neeta Bhalla</em>).
                      </p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all">
                    <summary className="font-bold text-slate-900 text-sm sm:text-base cursor-pointer flex justify-between items-center list-none select-none">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                        Notice Delay vs Court Complaint Delay: Which One Is Fatal?
                      </span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform font-bold text-base">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                      <p>
                        <strong>Critical Distinction:</strong> Delay in dispatching the statutory demand notice beyond 30 days of receiving the return memo is <strong>FATAL</strong>. No court in India has the legal power to condone notice delay. Conversely, delay in filing the criminal complaint in court beyond 1 month after the cause of action arises is <strong>CONDONABLE</strong> by the Magistrate under the proviso to Section 142(1)(b) upon sufficient cause being shown.
                      </p>
                    </div>
                  </details>
                </div>
              </section>

              {/* Section 6: Worked Case Study */}
              <section
                id="heading-case-study"
                aria-labelledby="heading-case-study-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-study-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    Case Study: Recovers ₹18.5L Cheque Dishonour in 28 Days
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    An illustrative breakdown demonstrating how rigorous statutory timeline tracking converted a bounced corporate cheque into full recovery:
                  </p>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Recovery Case Study
                    </span>
                    <span className="text-xs text-slate-400">
                      Commercial Supply Contract • Cheque Amount: ₹18,50,000
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Dispute:</strong> SunTech Fabrication Pvt. Ltd. (Pune) supplied industrial sheet metal components to AutoCore Automations (Gurugram) against GST tax invoices totaling ₹18,50,000. AutoCore issued HDFC Bank Cheque No. 582104 dated 10 September 2026 for the balance dues.
                    </p>
                    <p>
                      <strong>The Dishonour Event:</strong> SunTech presented the cheque through their SBI Industrial Finance branch in Pune on 18 September 2026. On 23 September 2026, SBI issued an electronic CTS Return Memo stating reason code &quot;Funds Insufficient (01)&quot;.
                    </p>
                    <p>
                      <strong>The Section 138 Countdown:</strong>
                      <br />
                      • <strong>Day 0 (23 Sep 2026):</strong> Return memo received. Notice countdown initiated.
                      <br />
                      • <strong>Day 12 (05 Oct 2026):</strong> Well within the 30-day statutory window, SunTech&apos;s recovery advocate issued a formal Section 138 demand notice to AutoCore&apos;s registered office and Managing Director via Registered Speed Post and Section 63 BSA electronic mail.
                      <br />
                      • <strong>Day 15 (08 Oct 2026):</strong> Postal tracking confirmed notice delivery at AutoCore&apos;s Gurugram facility. The 15-day cure window opened.
                      <br />
                      • <strong>Day 30 (23 Oct 2026):</strong> The 15-day payment period expired without payment. AutoCore&apos;s director cited working capital delays.
                      <br />
                      • <strong>Day 31 (24 Oct 2026):</strong> Statutory cause of action arose under Section 142(1)(b).
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution:</strong>
                      Before the Section 142 complaint was scheduled for preliminary verification before the Judicial Magistrate in Pune, AutoCore&apos;s counsel realized that under the Supreme Court&apos;s 2025 <em>Sanjabij Tari</em> nationwide compounding directives and Section 143A, the company faced immediate 20% interim deposit orders alongside personal arrest warrants against the Managing Director. On Day 28 following notice delivery, AutoCore executed a full RTGS settlement of ₹18,50,000 alongside ₹75,000 towards commercial interest and legal costs.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Evidence Checklist */}
              <section
                id="heading-evidence"
                aria-labelledby="heading-evidence-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    Evidence Checklist: 6 Documents for Section 138 Notice
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), assembling clean documentary proof prevents preliminary challenges before the Magistrate:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Original Dishonoured Cheque Leaf:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Showing payee name, date, numerical and written amounts, drawer signature, and MICR strip intact.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Original Bank Return Memo with Stamp:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Containing bank clearing date, CTS return reason code, and official branch seal or digital CTS watermark.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Proof of Underlying Legally Enforceable Debt:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Tax invoices, loan agreement, promissory note, ledger extract, or WhatsApp debt acknowledgment.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Postal Registration Receipt &amp; Tracking Consignment:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Speed Post dispatch receipt with tracking number proving dispatch within 30 days of the return memo.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Section 63 BSA Electronic Certificate:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Statutory affidavit for WhatsApp message delivery, email transmission logs, and electronic bank statements.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Corporate Board Resolution / Power of Attorney:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        If complainant is a company, firm, or trust, certified copy of board resolution authorizing the signatory advocate.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Frequently Asked Questions */}
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
                    FAQs: Section 138 Notice Timelines &amp; Deadlines
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Negotiable Instruments Act and Supreme Court Precedents
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

              {/* Section 9: Primary Sources & Legal Authorities */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Supreme Court Precedents &amp; Official References
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
                  Statutory verification status: All provisions verified against the Negotiable Instruments Act, 1881, Bharatiya Sakshya Adhiniyam, 2023, and active Supreme Court directives including Sanjabij Tari (September 2025) as of November 2026.
                </p>
              </section>

              {/* Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Section 138 Legal Demand Notice
                </h2>
                <ChequeBounceNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Cheque Bounce &amp; Debt Recovery Resources
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Notice Timeline Hub →
                  </Link>
                  <Link
                    href="/law/cheque-bounce-supreme-court-guidelines-2025"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Supreme Court Guidelines 2025 Analysis →
                  </Link>
                  <Link
                    href="/templates/cheque-bounce-notice-format-hindi"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cheque Bounce Notice Format in Hindi →
                  </Link>
                  <Link
                    href="/hi/cheque-bounce-notice-kitne-din-mein"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    चेक बाउंस नोटिस कितने दिन में देना चाहिए →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Schedule →
                  </Link>
                  <Link
                    href="/sitemap"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Full Recovery &amp; Tools Directory (Sitemap) →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
