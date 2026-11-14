import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import Section25NachCalculatorClient from "./Section25NachCalculatorClient";
import Section25NachCalculatorTOC from "./Section25NachCalculatorTOC";
import Section25NachCalculatorCTA from "./Section25NachCalculatorCTA";

export const revalidate = 86400;

const PAGE_URL = "/tools/section-25-nach-bounce-limitation-calculator";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Section 25 e-NACH Bounce Notice & Filing Deadline Calculator";
const PAGE_DESCRIPTION =
  "Input NPCI e-NACH return memo date and RPAD/electronic notice delivery date to calculate 30-day notice cut-off, 15-day cure & 30-day filing deadlines.";
const H1_TEXT =
  "Interactive Section 25 (PSS Act) e-NACH & AutoPay Bounce Statutory Deadline Calculator for Lenders";

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
    question: "How does Section 25 of the PSS Act 2007 apply to e-NACH and UPI AutoPay bounces?",
    answer:
      "Section 25(1) of the Payment and Settlement Systems Act, 2007 makes dishonour of an electronic funds transfer instruction—including NPCI e-NACH, NACH Debit, ECS, and UPI AutoPay—due to insufficiency of funds or exceeding arrangement a criminal offence punishable with up to 2 years imprisonment, fine up to twice the amount, or both. Section 25(5) expressly applies Chapter XVII of the Negotiable Instruments Act, 1881 (Sections 138 to 147) to electronic mandate dishonour.",
  },
  {
    question: "Is the NPCI return memo receipt date included when counting the 30-day notice period?",
    answer:
      "No. Under the Supreme Court's 3-Judge Bench ruling in Econ Antri Ltd. v. Rom Industries Ltd. (2014) 11 SCC 769 and Saketh India Ltd. v. India Securities Ltd. (1999) 3 SCC 1, the date of receipt of the NPCI/sponsor-bank return memo (Day 0) is excluded. Day 1 starts on the immediately following calendar day, and the statutory demand notice must be dispatched on or before Day 30.",
  },
  {
    question: "How is the 30-day Magistrate complaint window calculated after the 15-day cure period?",
    answer:
      "Once the Section 25 demand notice is delivered or deemed served (Day 0), the borrower gets 15 full days (Day 1 to Day 15) to pay. If unpaid, the cause of action accrues on Day 16. Following Saketh India Ltd., Day 16 itself is excluded when computing the 1-month / 30-day limitation under Section 28(1)(b) of the PSS Act, so the complaint filing window runs from Day 17 through Day 46.",
  },
  {
    question: "Can NBFCs rely on Email and WhatsApp delivery dates instead of Speed Post RPAD POD?",
    answer:
      "Yes, provided the notice is accompanied by a Section 63 Bharatiya Sakshya Adhiniyam (BSA) 2023 electronic evidence certificate and server/WATI delivery logs. However, experienced NBFC litigation desks dispatch tri-channel notices simultaneously—Email, Business WhatsApp, and Speed Post RPAD—so electronic delivery locks an immediate Day 0 timestamp while RPAD prevents address-denial objections.",
  },
  {
    question: "What can an NBFC do if its litigation desk misses the 30-day Section 25 notice cut-off?",
    answer:
      "If the 30-day notice window after the first NPCI bounce lapses, the lender cannot prosecute that specific bounce under Section 25. However, under MSR Leathers v. S. Palaniappan (2013) 1 SCC 177, if the underlying e-NACH mandate remains valid and unrevoked, the NBFC can re-present the mandate in the next billing cycle and issue a fresh 30-day statutory notice on the subsequent dishonour.",
  },
  {
    question: "Where should a lender file a Section 25 PSS Act complaint against an outstation borrower?",
    answer:
      "Because Section 25(5) incorporates NI Act Section 142(2) principles, territorial jurisdiction lies before the Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate having jurisdiction over the branch of the lender's sponsor bank where the electronic funds transfer instruction was presented and dishonoured—enabling centralized NBFC filing rather than chasing borrower districts.",
  },
  {
    question: "Can a Magistrate condone delay if a Section 25 complaint is filed after 30 days?",
    answer:
      "Yes. The proviso to Section 28(1)(b) of the PSS Act (mirroring NI Act s.142(1)(b)) empowers the Magistrate to take cognizance after the 30-day/1-month period if the lender satisfies the Court with documentary proof of sufficient cause for the delay, such as postal POD non-availability, court holiday closures, or force majeure.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Payment and Settlement Systems Act, 2007 (Sections 25 & 28) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2049",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138, 142 & Chapter XVII) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "National Payments Corporation of India (NPCI) — NACH & e-NACH Return Reason Codes",
    url: "https://www.npci.org.in/what-we-do/nach/product-overview",
  },
  {
    title: "Reserve Bank of India (RBI) — Master Direction on Digital Lending & Fair Practices",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Evidence) — India Code",
    url: "https://www.indiacode.nic.in/",
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
      name: "NBFC & Fintech Loan Recovery",
      item: `${SITE_URL}/industries/nbfc-fintech-loan-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Section 25 e-NACH Calculator",
      item: CANONICAL_URL,
    },
  ],
};

export default function Section25NachBounceLimitationCalculatorPage() {
  const breadcrumbItems = [
    { label: "NBFC & Fintech Loan Recovery", href: "/industries/nbfc-fintech-loan-recovery" },
    { label: "Section 25 e-NACH Calculator", href: PAGE_URL },
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
          <div className="max-w-7xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-02 NBFC &amp; Fintech Calculator</span>
              <span className="text-red-500">&bull;</span>
              <span>PSS Act s.25 &amp; s.28 &bull; Saketh / Econ Antri Rules</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 Word Executive Creditor Summary + First-250-Word Parent Hub Link */}
            <div
              aria-label="Executive Creditor Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Summary (NBFC Section 25 Litigation Desks &amp; Panel Advocates)
              </span>
              <p>
                Engineered for our{" "}
                <Link
                  href="/industries/nbfc-fintech-loan-recovery"
                  className="text-red-300 underline hover:text-white font-bold"
                >
                  IND-02 NBFC &amp; Fintech Loan Recovery Hub
                </Link>
                , this calculator applies Supreme Court day-exclusion rules under Section 25(1) and Section 28 of the Payment and Settlement Systems Act, 2007—computing 30-day notice cut-offs, electronic vs RPAD deemed-service dates, 15-day cure expiry, and batch CSV Magistrate filing windows.
              </p>
            </div>

            {/* 4-Card Statutory Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  30 Days
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Notice Cut-Off (Excl. Memo Day)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  15 Days
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Borrower Cure (Excl. Service Day)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  +30 Days
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  JMFC Filing Window (s.28(1)(b))
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  2x Fine / 2 Yr
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  PSS Act s.25 Criminal Penalty
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
            <Section25NachCalculatorTOC />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Interactive Calculator Island */}
              <Section25NachCalculatorClient />

              {/* Section 2: PSS Act Section 25 & 28 Timeline Architecture */}
              <section
                id="pss-act-section-25-framework"
                aria-labelledby="pss-act-section-25-framework-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h2
                      id="pss-act-section-25-framework-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      PSS Act Section 25 &amp; 28 Statutory Timeline Architecture
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Why NBFC e-NACH &amp; UPI AutoPay portfolios require institutional precision beyond cheque calculators
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Unlike individual cheque holders using our{" "}
                  <Link
                    href="/tools/cheque-bounce-deadline-calculator"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Section 138 Cheque Bounce Deadline Calculator
                  </Link>
                  , NBFCs, digital lending fintechs, HFCs, and MFIs collect thousands of monthly EMIs over NPCI e-NACH, NACH Debit, and UPI AutoPay rails. When a mandate bounces with return code <strong>01 (Funds Insufficient)</strong> or <strong>02 (Exceeds Arrangement)</strong>, Section 25(1) of the Payment and Settlement Systems (PSS) Act, 2007 triggers a strict three-stage statutory clock. Missing any single milestone by even 24 hours renders the criminal complaint non-maintainable at cognizance.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3 font-bold">Statutory Stage</th>
                        <th className="p-3 font-bold">Governing Provision</th>
                        <th className="p-3 font-bold">Day-Counting Rule</th>
                        <th className="p-3 font-bold">Operational Trap for NBFCs</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Mandate Presentation</td>
                        <td className="p-3 font-mono text-slate-700">PSS s.25(1) Proviso (a)</td>
                        <td className="p-3 text-slate-700">Within mandate validity period</td>
                        <td className="p-3 text-slate-600">Presenting expired/revoked UMRNs or technical errors</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Demand Notice Dispatch</td>
                        <td className="p-3 font-mono text-slate-700">PSS s.25(1) Proviso (b)</td>
                        <td className="p-3 text-slate-700">30 days from NPCI return memo receipt (Day 0 excluded)</td>
                        <td className="p-3 text-slate-600">LMS batch lag pushing dispatch past Day 30</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Borrower Cure Window</td>
                        <td className="p-3 font-mono text-slate-700">PSS s.25(1) Proviso (c)</td>
                        <td className="p-3 text-slate-700">15 days from notice delivery / deemed service (Day 0 excluded)</td>
                        <td className="p-3 text-slate-600">Premature filing on Day 15 instead of Day 16+</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Magistrate Complaint</td>
                        <td className="p-3 font-mono text-slate-700">PSS s.28(1)(b)</td>
                        <td className="p-3 text-slate-700">1 month / 30 days from Day 16 cause of action (Day 16 excluded)</td>
                        <td className="p-3 text-slate-600">Counting from dispatch date instead of POD/service date</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Saketh India & Econ Antri Day-Exclusion Rules */}
              <section
                id="day-exclusion-computation-rules"
                aria-labelledby="day-exclusion-computation-rules-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h2
                      id="day-exclusion-computation-rules-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Saketh India &amp; Econ Antri Day-Exclusion Computation Rules
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Binding Supreme Court precedent harmonizing Section 9 &amp; Section 10 of the General Clauses Act, 1897
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-200 p-4 border-l-4 border-l-[#DC2626] bg-slate-50 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      Econ Antri Ltd. v. Rom Industries Ltd. (2014) 11 SCC 769
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Settled a long-standing conflict by holding that for computing limitation under NI Act Section 142(b) (and by extension PSS Act Section 28(1)(b)), the day on which the cause of action arises must be <strong>excluded</strong>. The same day-exclusion principle applies when counting the 30-day notice period from receipt of the NPCI return memo.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-4 border-l-4 border-l-[#DC2626] bg-slate-50 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      Saketh India Ltd. v. India Securities Ltd. (1999) 3 SCC 1
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Confirmed that when a notice is served on Day 0, the 15-day cure period runs from Day 1 to Day 15. The offence is complete and the cause of action arises on Day 16. When computing the 1-month / 30-day complaint window, Day 16 is excluded so the filing window commences on Day 17 and closes on Day 46 (or the corresponding date of the next calendar month).
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-950 leading-relaxed">
                  <strong>General Clauses Act Section 10 (Court Holiday Rule):</strong> If the final day of the 30-day Magistrate complaint window falls on a Sunday or declared Court holiday, filing on the immediately next working day when the JMFC/MM Court reopens is valid in law. However, NBFC litigation desks should never treat postal holidays as extending the 30-day <em>notice dispatch</em> window if electronic Email/WhatsApp dispatch is available.
                </div>
              </section>

              {/* Section 4: Electronic Service vs RPAD Deemed Delivery */}
              <section
                id="electronic-vs-rpad-service"
                aria-labelledby="electronic-vs-rpad-service-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h2
                      id="electronic-vs-rpad-service-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Electronic Service vs RPAD Deemed Delivery for NBFCs
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      How tri-channel dispatch eliminates POD tracking gaps and Section 27 General Clauses Act disputes
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  For high-volume lenders, Speed Post RPAD alone introduces two risks: postal delays pushing POD delivery beyond 7&ndash;10 days, and borrowers returning envelopes as &ldquo;Left&rdquo; or &ldquo;Door Locked.&rdquo; Combining instant electronic dispatch with RPAD via an institutional{" "}
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Bulk Recovery Notice Solution (Email + WhatsApp + Speed Post)
                  </Link>{" "}
                  gives your litigation desk two independent proof anchors.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3 font-bold">Service Channel</th>
                        <th className="p-3 font-bold">Day 0 (Service Date)</th>
                        <th className="p-3 font-bold">Evidentiary Standard</th>
                        <th className="p-3 font-bold">Litigation Desk Best Practice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Email + Business WhatsApp</td>
                        <td className="p-3 text-emerald-700 font-bold">Same Day (Dispatch Date)</td>
                        <td className="p-3 text-slate-700">BSA 2023 s.63 Certificate + SMTP/WATI delivery webhook</td>
                        <td className="p-3 text-slate-600">Lock Day 0 immediately using loan-application KYC email &amp; mobile</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Speed Post RPAD (Delivered)</td>
                        <td className="p-3 text-slate-900 font-bold">Actual India Post POD Date</td>
                        <td className="p-3 text-slate-700">Postal receipt + online tracking POD printout</td>
                        <td className="p-3 text-slate-600">Count 15-day cure from later of RPAD POD if relying solely on post</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">RPAD Refused / Unclaimed</td>
                        <td className="p-3 text-amber-700 font-bold">Deemed Service (s.27 GC Act)</td>
                        <td className="p-3 text-slate-700"><em>C.C. Alavi Haji v. Palapetty Muhammed</em> (2007) 6 SCC 555</td>
                        <td className="p-3 text-slate-600">Retain sealed returned envelope + endorsement; add 5&ndash;7d transit buffer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Worked NBFC e-NACH Bounce Examples */}
              <section
                id="worked-enach-examples"
                aria-labelledby="worked-enach-examples-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h2
                      id="worked-enach-examples-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Worked NBFC e-NACH Bounce Timeline Calculations
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Three institutional scenarios demonstrating exact date math for panel advocates
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800">
                      Case A &bull; Tri-Channel Digital
                    </span>
                    <p className="text-sm font-extrabold text-slate-900">
                      &#8377;24,500 Personal Loan EMI
                    </p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>&bull; NPCI Return Memo: <strong>15 Oct 2026</strong></li>
                      <li>&bull; 30d Notice Cut-Off: <strong>14 Nov 2026</strong></li>
                      <li>&bull; Email + WA Sent: <strong>22 Oct 2026</strong></li>
                      <li>&bull; 15d Cure Expiry: <strong>06 Nov 2026</strong></li>
                      <li>&bull; Cause of Action: <strong>07 Nov 2026</strong></li>
                      <li>&bull; Filing Deadline: <strong>07 Dec 2026</strong></li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-100 text-amber-800">
                      Case B &bull; RPAD Refused
                    </span>
                    <p className="text-sm font-extrabold text-slate-900">
                      &#8377;1,18,000 SME Working Capital
                    </p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>&bull; NPCI Return Memo: <strong>10 Oct 2026</strong></li>
                      <li>&bull; RPAD Dispatched: <strong>28 Oct 2026</strong></li>
                      <li>&bull; Deemed Service (+5d): <strong>02 Nov 2026</strong></li>
                      <li>&bull; 15d Cure Expiry: <strong>17 Nov 2026</strong></li>
                      <li>&bull; Cause of Action: <strong>18 Nov 2026</strong></li>
                      <li>&bull; Filing Deadline: <strong>18 Dec 2026</strong></li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-red-100 text-[#DC2626]">
                      Case C &bull; Missed 30d Window
                    </span>
                    <p className="text-sm font-extrabold text-slate-900">
                      &#8377;15,800 BNPL Re-Presentation
                    </p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>&bull; First Bounce: <strong>10 Sep 2026</strong></li>
                      <li>&bull; Notice Sent Late: <strong>18 Oct 2026</strong> (Lapsed)</li>
                      <li>&bull; Remedy: Re-present active UMRN under <em>MSR Leathers</em></li>
                      <li>&bull; Fresh Bounce: <strong>05 Nov 2026</strong></li>
                      <li>&bull; New 30d Cut-Off: <strong>05 Dec 2026</strong></li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: Condonation of Delay, Jurisdiction & Co-Lending Rules */}
              <section
                id="condonation-and-jurisdiction"
                aria-labelledby="condonation-and-jurisdiction-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <h2
                      id="condonation-and-jurisdiction-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Condonation of Delay, Jurisdiction &amp; Co-Lending Rules
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Guardrails for pan-India digital lenders, Servicing POAs, and ODR pre-litigation settlements
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    <strong>1. Condonation of Delay (PSS Act s.28(1)(b) Proviso):</strong> Courts cannot condone delay in issuing the initial 30-day statutory demand notice, because notice within 30 days is a mandatory condition precedent to the offence itself. However, if the <em>Magistrate complaint</em> is delayed beyond 30 days after Day 16, the lender may file an affidavit seeking condonation by establishing sufficient cause (such as delayed India Post POD confirmation or court registry holidays).
                  </p>
                  <p>
                    <strong>2. Centralized Jurisdiction at Lender&apos;s Sponsor Bank:</strong> Under PSS Act s.25(5) read with NI Act s.142(2), complaints are maintainable at the JMFC/MM Court where the NBFC&apos;s sponsor bank account (into which the NPCI e-NACH settlement was routed) is situated—allowing centralized litigation in Mumbai, Delhi-NCR, Bengaluru, or Chennai.
                  </p>
                  <p>
                    <strong>3. Parallel ODR &amp; RBI Fair Practice Compliance:</strong> Before escalating to criminal summons, many NBFCs pair Section 25 cure notices with a 15-day{" "}
                    <Link
                      href="/online-dispute-resolution-india"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Online Dispute Resolution (ODR)
                    </Link>{" "}
                    payment link to resolve temporary liquidity defaults without clogging Magistrate dockets.
                  </p>
                </div>
              </section>

              {/* Section 7: Dual-Track B2B CTA */}
              <section
                id="institutional-dispatch-cta"
                aria-labelledby="institutional-dispatch-cta-title"
                className="scroll-mt-28 space-y-5"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                  <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      7
                    </span>
                    <div>
                      <h2
                        id="institutional-dispatch-cta-title"
                        className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                      >
                        Deploy Single &#8377;999 Test or Bulk e-NACH CSV Notice Desk
                      </h2>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        Advocate-signed PSS Act s.25 notices via Email, WhatsApp &amp; Speed Post RPAD
                      </p>
                    </div>
                  </div>
                  <Section25NachCalculatorCTA />
                </div>
              </section>

              {/* Section 8: Related NBFC Recovery & Section 25 Resources */}
              <section
                id="nbfc-recovery-resources"
                aria-labelledby="nbfc-recovery-resources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    8
                  </span>
                  <div>
                    <h2
                      id="nbfc-recovery-resources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Related NBFC Recovery &amp; Section 25 Legal Resources
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Parent hub, statutory deep-dives, and bulk notice workflows for lending teams
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <Link
                    href="/industries/nbfc-fintech-loan-recovery"
                    className="group rounded-xl border border-slate-200 p-4 hover:border-[#DC2626] transition-colors bg-slate-50"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                      Parent Industry Hub
                    </p>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                      NBFC, Fintech, HFC &amp; MFI Loan Recovery Hub &rarr;
                    </p>
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="group rounded-xl border border-slate-200 p-4 hover:border-[#DC2626] transition-colors bg-slate-50"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      NBFC Legal Notice Service
                    </p>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                      Send Legal Notice for NBFC Unpaid Dues &rarr;
                    </p>
                  </Link>
                  <Link
                    href="/law/section-25-payment-and-settlement-systems-act-nach-bounce"
                    className="group rounded-xl border border-slate-200 p-4 hover:border-[#DC2626] transition-colors bg-slate-50"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Statutory Commentary
                    </p>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                      Section 25 PSS Act NACH Bounce Law Guide &rarr;
                    </p>
                  </Link>
                  <Link
                    href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                    className="group rounded-xl border border-slate-200 p-4 hover:border-[#DC2626] transition-colors bg-slate-50"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      RBI Compliance
                    </p>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                      RBI Recovery Agent Guidelines &amp; Legal Escalation &rarr;
                    </p>
                  </Link>
                  <Link
                    href="/small-ticket-digital-personal-loan-bnpl-recovery-economics"
                    className="group rounded-xl border border-slate-200 p-4 hover:border-[#DC2626] transition-colors bg-slate-50"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Unit Economics
                    </p>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                      Small-Ticket Digital Personal Loan &amp; BNPL Recovery &rarr;
                    </p>
                  </Link>
                  <Link
                    href="/tools/cheque-bounce-deadline-calculator"
                    className="group rounded-xl border border-slate-200 p-4 hover:border-[#DC2626] transition-colors bg-slate-50"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Related Tool
                    </p>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                      NI Act Section 138 Cheque Bounce Calculator &rarr;
                    </p>
                  </Link>
                </div>
              </section>

              {/* Section 9: FAQs */}
              <section
                id="calculator-faqs"
                aria-labelledby="calculator-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    9
                  </span>
                  <div>
                    <h2
                      id="calculator-faqs-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      FAQs: Section 25 e-NACH Bounce Limitation &amp; Notice Dates
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Answers for NBFC litigation managers, fintech legal ops &amp; panel advocates
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-slate-200 bg-slate-50 p-4 open:bg-white open:shadow-sm transition-all"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-4 text-xs sm:text-sm font-bold text-slate-900 list-none">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 10: Primary Statutes & Portals */}
              <section
                id="statutory-sources"
                aria-labelledby="statutory-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    10
                  </span>
                  <div>
                    <h2
                      id="statutory-sources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Primary Statutes, NPCI Circulars &amp; Court Authorities
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Authoritative bare acts and regulatory portals referenced by this calculator
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((src) => (
                    <li key={src.url} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] underline font-medium"
                      >
                        {src.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
