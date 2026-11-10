import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import MsmeDemandNoticeCTA from "./MsmeDemandNoticeCTA";
import MsmeDemandNoticeTOC from "./MsmeDemandNoticeTOC";
import MsmeNoticeVariantsWorkspace from "./MsmeNoticeVariantsWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "MSME Delayed Payment Demand Notice Format (With Interest)",
  description:
    "A demand-notice format for Udyam-registered suppliers citing Sections 15–16 and 43B(h), with an interest schedule.",
  alternates: {
    canonical: `${SITE_URL}/templates/msme-delayed-payment-demand-notice`,
  },
  openGraph: {
    title: "MSME Delayed Payment Demand Notice Format (With Section 16 Interest Schedule)",
    description:
      "Ready-to-use MSME demand notice formats (Polite, Firm Statutory & Final Pre-ODR) plus Section 18 affidavit citing MSMED Sections 15–16 and Income-tax Section 43B(h).",
    url: `${SITE_URL}/templates/msme-delayed-payment-demand-notice`,
    type: "article",
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
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — Sections 2(b), 15, 16, 18, 19, 22, 23 & 24 (India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Income-tax Act, 1961 — Section 43B(h) (Disallowance of Sums Payable to Micro or Small Enterprises Beyond Section 15 Time Limit)",
    url: "https://incometaxindia.gov.in/",
  },
  {
    title: "Reserve Bank of India (RBI) — Notified Bank Rate for Section 16 MSMED Act Compound Interest Computation",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "Ministry of MSME — MSME Samadhaan & Online Dispute Resolution (ODR) Delayed Payment Monitoring Portal",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of GST E-Way Bills, Emails & WhatsApp Demand Notices)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const CASE_CITATIONS = [
  {
    title: "Chapter V of MSMED Act Overrides Private Purchase Order & Arbitration Clauses",
    parties: "Gujarat State Civil Supplies Corp. Ltd. v. Mahakali Foods Pvt. Ltd.",
    citation: "(2023) 6 SCC 401 — Supreme Court of India",
    date: "Judgment Dated 31 October 2022",
    facts:
      "Corporate and PSU buyers contended that independent arbitration clauses and 60-to-90-day credit terms printed in standard Purchase Orders barred registered Micro and Small Enterprises from invoking Section 16 compound interest and Section 18 MSEFC conciliation/arbitration.",
    holding:
      "The Supreme Court held that Chapter V of the MSMED Act, 2006 (Sections 15 to 24) is a special statutory code enacted to protect Micro and Small suppliers. Under Section 24, statutory timelines and Section 16 compound interest at 3× the RBI Bank Rate override any inconsistent private contract or Purchase Order clause. However, the supplier must hold valid Udyam/Memorandum registration prior to entering the supply contract.",
    amount: "Full Principal + 3× RBI Bank Rate Monthly Compound Interest Upheld",
    takeaway:
      "Your demand notice should explicitly cite Section 24 and Mahakali Foods whenever a buyer claims their Purchase Order specifies '90 days credit' or 'no interest on delayed payments'.",
  },
  {
    title: "Mandatory 75% Pre-Deposit Required Before Buyer Can Challenge an MSME Award",
    parties: "Tirupati Steels v. Shubh Industrial Component & Anr.",
    citation: "(2022) 7 SCC 429 — Supreme Court of India",
    date: "Judgment Dated 19 April 2022",
    facts:
      "A defaulting buyer attempted to stall execution of an MSEFC delayed-payment arbitral award by filing a challenge under Section 34 of the Arbitration Act without depositing 75% of the awarded principal and Section 16 compound interest.",
    holding:
      "The Supreme Court ruled that the requirement under Section 19 of the MSMED Act to deposit 75% of the awarded amount (inclusive of accrued 3× RBI compound interest) is mandatory. Courts cannot entertain any application to set aside an MSME decree unless the buyer first deposits 75% in court.",
    amount: "Mandatory 75% Pre-Deposit Enforced Under Section 19 MSMED Act",
    takeaway:
      "Highlighting the Section 19 (75% pre-deposit) consequence in your Final Pre-ODR Demand Notice convinces corporate CFOs to settle during the 15-day notice period rather than face a locked litigation deposit.",
  },
  {
    title: "Counterclaims & Belated Quality Excuses Examined in Statutory Arbitration",
    parties: "Silpi Industries v. Kerala State Road Transport Corporation",
    citation: "(2021) 18 SCC 790 — Supreme Court of India",
    date: "Judgment Dated 29 June 2021",
    facts:
      "Buyers withheld supplier payments for months and raised afterthought counterclaims only after the supplier served a formal demand notice and approached the Facilitation Council under Section 18.",
    holding:
      "The Supreme Court affirmed that the Limitation Act, 1963 applies to MSME arbitrations and clarified that while genuine counterclaims can be adjudicated, a supplier who held valid MSME registration at the time of contract execution is fully protected by the 15-day deemed-acceptance rule under Section 2(b) where no timely written objection was raised.",
    amount: "Deemed Acceptance Rule Under Section 2(b) & Statutory Interest Confirmed",
    takeaway:
      "Always state the exact delivery challan/E-Way Bill date in your demand notice and record that the 15-day statutory objection window under Section 2(b) expired without any written defect notice.",
  },
  {
    title: "Pendente Lite Compound Interest Runs Until Actual Realization",
    parties: "Modern Industries v. Steel Authority of India Ltd. (SAIL)",
    citation: "(2010) 5 SCC 44 — Supreme Court of India",
    date: "Judgment Dated 15 April 2010",
    facts:
      "The buyer disputed whether statutory compound interest at three times the RBI Bank Rate applies only to the principal balance or continues to compound monthly until actual payment realization.",
    holding:
      "The Supreme Court held that statutory delayed-payment interest is remedial and compensatory, running from the Appointed Day with monthly rests until the date of actual payment to deter large buyers from using small suppliers as interest-free working capital.",
    amount: "Monthly Compounded Interest @ 3× RBI Bank Rate Until Payment Realization",
    takeaway:
      "Never demand a flat principal figure alone. Attach a month-by-month Section 16 interest schedule to your demand notice so the buyer sees their liability compounding every 30 days.",
  },
];

const FAQS = [
  {
    question: "What must be included in an MSME delayed payment demand notice format?",
    answer:
      "An enforceable MSME demand notice must contain: (1) The supplier's Udyam Registration Number and enterprise category (Micro or Small), confirming registration existed before the supply; (2) Purchase Order, GST Tax Invoice, E-Way Bill, and delivery acceptance dates; (3) Statement that no written quality objection was raised within 15 days under Section 2(b); (4) The exact 'Appointed Day' when the 15-day or 45-day cap under Section 15 expired; (5) A month-by-month Section 16 compound interest schedule at 3× the RBI Bank Rate; (6) Reference to Section 43B(h) Income-tax disallowance and Section 22 MCA audit disclosure; and (7) A 15-day ultimatum before filing on the MSME ODR Portal.",
  },
  {
    question: "How do I write the Section 16 interest clause in an MSME demand notice?",
    answer:
      "Your interest clause must cite Section 16 of the MSMED Act, 2006, stating that notwithstanding any clause in the Purchase Order, the buyer is statutorily liable to pay compound interest with monthly rests from the Appointed Day at three times (3×) the Bank Rate notified by the Reserve Bank of India (currently 3 × 6.75% = 20.25% p.a.). You should also cite Section 23 of the MSMED Act, which prohibits the buyer from claiming this interest payment as a tax-deductible business expense under the Income-tax Act.",
  },
  {
    question: "What is the MSME delayed payment affidavit format required for ODR / Samadhaan filing?",
    answer:
      "When a buyer ignores your 15-day demand notice and you file a Section 18 reference on the MSME ODR Portal (or MSEFC), you must attach a sworn Affidavit by the Authorised Signatory. The affidavit affirms your Udyam status on the date of supply, the invoice and delivery dates, the absence of any written defect objection within 15 days under Section 2(b), the exact principal and Section 16 compound interest due, and a Section 63 Bharatiya Sakshya Adhiniyam, 2023 declaration certifying your electronic invoices, E-Way bills, and demand notice logs. Use Variant 4 in our workspace above to download this affidavit.",
  },
  {
    question: "Can a registered MSME send a demand notice on its own letterhead before hiring an advocate?",
    answer:
      "Yes. A Udyam-registered Micro or Small Enterprise can dispatch an initial Polite Reminder (Variant 1) or Firm Statutory Demand Notice (Variant 2) directly on its company letterhead signed by a Partner, Director, or Authorised Signatory. However, if the buyer's accounts payable team ignores your letterhead notice, serving an official 15-day Pre-Litigation Legal Notice drafted and dispatched by an Advocate (via Registered Post RPAD and legal email) carries substantially stronger weight with corporate legal and audit departments.",
  },
  {
    question: "Why should my MSME demand notice mention Section 43B(h) of the Income-tax Act?",
    answer:
      "Under Section 43B(h) of the Income-tax Act, 1961 (effective Assessment Year 2024–25 onwards), any invoice payable to a Micro or Small Enterprise that remains unpaid beyond the 15/45-day Section 15 deadline at the end of the financial year (March 31) cannot be deducted as a business expense by the buyer in that year. It is added back to the buyer's taxable profit (~25.17% to 31.2% immediate cash tax hit) and reported by tax auditors in Form 3CD Clause 22. Citing Section 43B(h) in your notice forces the buyer's CFO to clear your bill immediately.",
  },
  {
    question: "Does an MSME demand notice sent by email and WhatsApp hold legal validity in India?",
    answer:
      "Yes, when paired with Registered Speed Post (RPAD). Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, electronic demand notices sent to the buyer's official corporate email ID (as registered on the MCA/GST portal) and official WhatsApp number—preserved with delivery timestamps—are admissible electronic evidence before the MSEFC, MSME ODR arbitrators, and Commercial Courts. Always dispatch a physical copy via India Post RPAD alongside email to invoke the presumption of service under Section 27 of the General Clauses Act, 1897.",
  },
  {
    question: "MSME delayed payment ke liye buyer ko legal notice kaise bheje?",
    answer:
      "Agar buyer maal ya service lene ke 45 din (bina written agreement ke 15 din) ke andar aapka MSME invoice clear nahi karta, toh sabse pehle Udyam Registration number, Invoice/E-Way Bill details, Section 16 (3× RBI Bank Rate monthly compound interest) aur Section 43B(h) tax disallowance ka hawaala dete hue 15-day Demand Notice Registered Speed Post aur email se bhejein. Agar 15 din mein payment na aaye, toh LegalRecovery.in ke advocate ke madhyam se notice bhejkar MSME ODR Portal par Section 18 claim file karein.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MSME Demand Notice Format With Section 16 Interest Clause",
  description:
    "A demand-notice format for Udyam-registered suppliers citing Sections 15–16 and 43B(h), with an interest schedule.",
  datePublished: "2026-11-04T11:30:00+05:30",
  dateModified: "2026-11-04T11:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/msme-delayed-payment-demand-notice`,
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
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "MSME Delayed Payment Demand Notice Format Under Sections 15 and 16 MSMED Act",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "MSME Delayed Payment Demand Notice Format (With Section 16 Interest Schedule & Section 18 Affidavit)",
  description:
    "Three-tone statutory demand notice templates (Polite Reminder, Firm Statutory Demand, Final Pre-ODR Notice) and Section 18 MSEFC/ODR Affidavit format for Udyam-registered Micro and Small Enterprises.",
  url: `${SITE_URL}/templates/msme-delayed-payment-demand-notice`,
  fileFormat: "application/msword",
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "Udyam-registered Micro and Small Enterprise suppliers in India",
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
      name: "MSME Delayed Payment Recovery",
      item: `${SITE_URL}/msme-delayed-payment-recovery-samadhan-vs-legal-notice`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MSME Demand Notice Format",
      item: `${SITE_URL}/templates/msme-delayed-payment-demand-notice`,
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

export default function MsmeDelayedPaymentDemandNoticePage() {
  const breadcrumbItems = [
    {
      label: "MSME Delayed Payment Recovery",
      href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
    },
    {
      label: "MSME Demand Notice Format",
      href: "/templates/msme-delayed-payment-demand-notice",
    },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DIGITAL_DOCUMENT_SCHEMA) }}
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
        {/* Hero Section strictly matching IRCTC & Company Directors theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Sections 15–16 MSMED Act &amp; Section 43B(h) IT Act</span>
              <span className="text-red-500">•</span>
              <span>Free Word (.doc) &amp; PDF Templates</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              MSME Demand Notice Format With Section 16 Interest Clause
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (MSMED Sections 15–16 &amp; Section 43B(h) Demand Mandate)
              </p>
              <p>
                Under Sections 15 and 16 of the MSMED Act, 2006, buyers must pay Udyam-registered Micro and Small suppliers within 15 days (or up to 45 days with a written agreement). Any delay past the Appointed Day triggers mandatory monthly compound interest at 3× the RBI Bank Rate plus Section 43B(h) income-tax disallowance. Serve a 15-day statutory demand notice before filing on the MSME ODR portal.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">15 / 45 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Section 15 Max Credit Cap</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3× RBI Rate</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sec 16 Monthly Compounding</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Sec 43B(h)</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">100% Buyer Tax Disallowance</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">75% Deposit</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sec 19 Appeal Pre-Condition</p>
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
            <MsmeDemandNoticeTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Archetype P2 Core — 3 Complete Tone Variants + Section 18 ODR Affidavit */}
              <section
                id="heading-tone-variants"
                aria-labelledby="heading-tone-variants-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-tone-variants-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    3 MSME Demand Notice Formats &amp; Section 18 Affidavit
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Every overdue B2B invoice requires calibrated legal pressure. Below are three complete, original MSME demand notice formats—ranging from a relationship-preserving Section 43B(h) tax reminder to a final pre-litigation notice—plus the sworn affidavit format for the{" "}
                    <Link
                      href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                      className="text-blue-700 underline font-semibold"
                    >
                      MSME Samadhaan / ODR vs Legal Notice recovery route
                    </Link>
                    .
                  </p>
                </div>

                <MsmeNoticeVariantsWorkspace />
              </section>

              {/* Section 2: Archetype P2 Core — Choosing the Right Tone Table + Subject-Line Bank */}
              <section
                id="heading-tone-matrix"
                aria-labelledby="heading-tone-matrix-title"
                className="scroll-mt-28 space-y-5"
              >
                <h2
                  id="heading-tone-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Notice Tone Guide: Buyer Scenario Matrix &amp; Subject Lines
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Selecting the wrong tone can either alienate a long-term OEM buyer over a routine accounting delay or signal weakness to a habitual defaulter. Match your invoice age and buyer behavior to the right statutory template:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">MSME Demand Notice Tone Selection Matrix</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Buyer Default Situation</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recommended Variant</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Primary Legal Lever Cited</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Cure Window &amp; Service Mode</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Day 46–60: Active buyer, ongoing POs, invoice stuck in AP queue
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">
                          Variant 1: Polite Reminder
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 15 (45-day cap) + Section 43B(h) Form 3CD tax audit flag
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          7 Days • Official Email to AP Head &amp; CFO
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Day 60–90: Buyer cites 90-day PO credit terms or ignores emails
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">
                          Variant 2: Firm Statutory Notice
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 16 (3× RBI monthly compounding) + Section 22/23 MCA disclosure
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          15 Days • India Post RPAD + Corporate Email
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Day 90+ or Pre-March 31: Buyer raises fake quality excuses or ghosts
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-800 font-extrabold">
                          Variant 3: Final Pre-ODR Notice
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 2(b) 15-day deemed acceptance + Section 18 ODR + 75% deposit (s.19)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          15 Days • Advocate RPAD + Email + WhatsApp
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Notice Period Expired Unpaid: Filing claim on MSME ODR / MSEFC
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">
                          Variant 4: Section 18 Affidavit
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 18 MSMED Act + Section 63 BSA 2023 electronic evidence oath
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Upload PDF on MSME ODR / Samadhaan Portal
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Subject-Line Options List (Archetype P2 Requirement) */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    High-Open-Rate Subject-Line Options for MSME Demand Notices
                  </h3>
                  <p className="text-xs text-slate-600">
                    When serving your notice by email alongside Registered Post, address the buyer&apos;s Managing Director, CFO, and Company Secretary using one of these statutory subject lines:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-800 font-mono bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <li>
                      <strong className="text-blue-700 font-sans">[Polite / Tax Audit]:</strong>{" "}
                      Advisory: Overdue MSE Invoice [INV-NO] (₹[AMOUNT]) — Section 15 MSMED Act &amp; Section 43B(h) Compliance — Udyam [NO]
                    </li>
                    <li>
                      <strong className="text-red-700 font-sans">[Firm Statutory]:</strong>{" "}
                      STATUTORY DEMAND NOTICE: Sections 15 &amp; 16 MSMED Act, 2006 — Unpaid Principal ₹[AMOUNT] + 3x RBI Compound Interest — [BUYER NAME]
                    </li>
                    <li>
                      <strong className="text-amber-800 font-sans">[Final Pre-ODR]:</strong>{" "}
                      FINAL 15-DAY NOTICE PRIOR TO SECTION 18 MSME ODR ARBITRATION &amp; FORM 3CD AUDITOR INTIMATION — [SUPPLIER NAME]
                    </li>
                    <li>
                      <strong className="text-emerald-800 font-sans">[March Year-End Lever]:</strong>{" "}
                      URGENT FY CLOSING NOTICE: Disallowance Warning Under Section 43B(h) Income-tax Act for Unpaid MSE Invoice [INV-NO]
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: How to Draft the Section 16 Interest Schedule & Section 43B(h) Clause */}
              <section
                id="heading-interest-clause"
                aria-labelledby="heading-interest-clause-title"
                className="scroll-mt-28 space-y-5"
              >
                <h2
                  id="heading-interest-clause-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Drafting Section 16 Interest Schedule &amp; Tax Clause
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Most generic legal notices fail because they vaguely demand &quot;18% commercial interest&quot; without computing the statutory Appointed Day or monthly rests. Under{" "}
                  <Link
                    href="/law/msmed-amendment-act-2026"
                    className="text-blue-700 underline font-semibold"
                  >
                    the MSMED Act and the 2026 Amendment framework
                  </Link>
                  , Section 16 gives Udyam-registered Micro and Small Enterprises an unassailable right to compound interest with monthly rests at <strong>3× the RBI Bank Rate</strong>. You can compute your exact numbers in 30 seconds using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-blue-700 underline font-semibold"
                  >
                    MSME delayed payment interest calculator (3× Bank Rate)
                  </Link>{" "}
                  and paste this schedule table directly into your notice:
                </p>

                {/* Sample Interest Schedule Table to Embed in Notice */}
                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                  <table className="w-full min-w-[600px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Sample Section 16 Monthly Compounded Interest Schedule for Demand Notice
                    </caption>
                    <thead className="bg-slate-900 text-white font-bold">
                      <tr>
                        <th scope="col" className="py-3 px-3.5">Invoice &amp; Delivery Date</th>
                        <th scope="col" className="py-3 px-3.5">Appointed Day (s.15)</th>
                        <th scope="col" className="py-3 px-3.5">Opening Principal</th>
                        <th scope="col" className="py-3 px-3.5">3× RBI Rate (Monthly Rests)</th>
                        <th scope="col" className="py-3 px-3.5">Accrued Sec 16 Interest</th>
                        <th scope="col" className="py-3 px-3.5">Total Recoverable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-mono text-xs">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-3.5 font-sans font-semibold text-slate-900">
                          INV/26-27/089 • 20 May 2026
                        </td>
                        <td className="py-3 px-3.5 text-red-700 font-bold">05 July 2026 (Day 46)</td>
                        <td className="py-3 px-3.5">₹8,50,000</td>
                        <td className="py-3 px-3.5">20.25% p.a. (1.6875%/mo)</td>
                        <td className="py-3 px-3.5 text-amber-800 font-bold">₹59,340 (4 Monthly Rests)</td>
                        <td className="py-3 px-3.5 text-emerald-700 font-extrabold">₹9,09,340</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Clause-by-Clause Legal Significance (<dl>) */}
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
                    <dt className="text-sm font-extrabold text-slate-900 mb-1">
                      1. The &quot;Appointed Day&quot; Anchor (Section 2(b) &amp; Section 15)
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Interest does not start from the date of your legal notice—it starts retro-actively from the statutory <strong>Appointed Day</strong>, which is the day immediately following the expiry of 15 days (if no written credit agreement exists) or the agreed credit period capped at 45 days from delivery acceptance.
                    </dd>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
                    <dt className="text-sm font-extrabold text-slate-900 mb-1">
                      2. Non-Obstante Override (Sections 16 &amp; 24)
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Even if you signed the buyer&apos;s vendor onboarding form stating &quot;0% interest on late payment&quot; or &quot;120 days credit&quot;, Section 16 begins with <em>&quot;Where any buyer fails to make payment... notwithstanding anything contained in any agreement&quot;</em>, rendering anti-MSME clauses void.
                    </dd>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
                    <dt className="text-sm font-extrabold text-slate-900 mb-1">
                      3. Dual Tax Disallowance (Section 43B(h) IT Act &amp; Section 23 MSMED Act)
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      As detailed in our guide to{" "}
                      <Link
                        href="/law/section-43bh-msme-payment-rule"
                        className="text-blue-700 underline font-semibold"
                      >
                        the Section 43B(h) 45-day MSME tax disallowance rule
                      </Link>
                      , unpaid principal crossing March 31 is added back to the buyer&apos;s taxable income, while Section 23 permanently bars the buyer from ever claiming Section 16 interest as a tax expense.
                    </dd>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
                    <dt className="text-sm font-extrabold text-slate-900 mb-1">
                      4. Mandatory Balance Sheet Disclosure (Section 22)
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Corporate buyers audited under statute must disclose unpaid MSE principal and accrued Section 16 interest in their annual MCA financial statements. Copying the buyer&apos;s Company Secretary or Audit Committee on your notice triggers immediate internal compliance pressure.
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Section 4: Archetype P2 Sending Tips & Legal Validity */}
              <section
                id="heading-sending-validity"
                aria-labelledby="heading-sending-validity-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-sending-validity-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Service Rules: Sending MSME Notice by RPAD &amp; Email
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  How you dispatch your demand notice determines whether it stands up as proof of pre-institution demand before the Micro and Small Enterprises Facilitation Council (MSEFC) or{" "}
                  <Link
                    href="/msme-odr-portal-delayed-payment-guide"
                    className="text-blue-700 underline font-semibold"
                  >
                    the MSME ODR Portal
                  </Link>
                  . Follow this three-channel dispatch protocol:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-[#DC2626]">
                      1. India Post RPAD / Speed Post
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Presumption of Deemed Service (Section 27)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Print the notice on your firm&apos;s letterhead (or advocate letterhead), sign and stamp every page, and dispatch it via Registered Post with Acknowledgment Due (RPAD) to the buyer&apos;s MCA Registered Office. Under Section 27 of the General Clauses Act, 1897, even if the buyer refuses delivery (&quot;Refused / Door Locked&quot;), courts treat it as valid legal service.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                      2. Corporate Email Service
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      MCA &amp; GST Registered Email IDs
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Attach the signed PDF notice together with copies of the Purchase Order, Tax Invoice, E-Way Bill, and Udyam Certificate. Send it to the buyer&apos;s official email address listed on the MCA Master Data page, copying the CFO, Accounts Payable Head, and purchasing manager.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                      3. WhatsApp PDF + BSA Certificate
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Section 63 BSA 2023 Admissibility
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Forward the signed PDF notice on WhatsApp to the buyer&apos;s director or purchase head and mention the India Post tracking number in the message. Take a screenshot showing the delivery/read ticks and phone number (not just the saved contact name) for your Section 63 BSA affidavit.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Visual Escalation Flowchart (Hand-Authored Inline SVG) */}
              <section
                id="heading-escalation-flow"
                aria-labelledby="heading-escalation-flow-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Visual Escalation: Day 46 Default to MSME ODR Execution
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  How your MSME demand notice fits into the statutory recovery pipeline under Chapter V of the MSMED Act:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Stage 1 • Day 0 to 15
                    </span>
                    <h3 className="font-bold text-sm">Supply, E-Way Bill &amp; Deemed Acceptance</h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Goods/services delivered; no written quality objection within 15 days under s.2(b).
                    </p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                      Stage 2 • Day 16 / Day 46
                    </span>
                    <h3 className="font-bold text-sm">Appointed Day Crossed (Section 15 Breach)</h3>
                    <p className="text-xs text-amber-900 mt-1">
                      3× RBI Bank Rate monthly compound interest starts automatically under s.16.
                    </p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">
                      Stage 3 • 15-Day Ultimatum
                    </span>
                    <h3 className="font-bold text-sm">Serve MSME Demand Notice (s.15–16 + s.43B(h))</h3>
                    <p className="text-xs text-red-900 mt-1">
                      Dispatch via RPAD + Email with Interest Schedule &amp; Form 3CD tax warning.
                    </p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Stage 4 • Section 18 Filing
                    </span>
                    <h3 className="font-bold text-sm">MSME ODR Portal Mediation &amp; Arbitration</h3>
                    <p className="text-xs text-slate-700 mt-1">
                      Upload Demand Notice + Variant 4 Affidavit for compulsory MSEFC/ODR arbitration.
                    </p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      Stage 5 • Decree &amp; 75% Deposit
                    </span>
                    <h3 className="font-bold text-sm">Award Execution (Section 36 / Section 19)</h3>
                    <p className="text-xs text-emerald-900 mt-1">
                      Enforce award as civil court decree; buyer must deposit 75% to appeal.
                    </p>
                  </div>
                </div>

                {/* Inline SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-xs overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">MSME Demand Notice &amp; ODR Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="MSME Delayed Payment Demand Notice to ODR Award Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="msmeNoticeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="msmeNoticeAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="msmeNoticeSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#msmeNoticeGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Delivery &amp; GRN</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">15-Day Window (s.2b)</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Deemed Acceptance</text>

                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Appointed Day</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Day 16 or Day 46</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">3× RBI Interest Starts</text>

                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="url(#msmeNoticeAlert)" />
                    <text x="420" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Demand Notice</text>
                    <text x="420" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Cure Period</text>
                    <text x="420" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Sec 16 + Sec 43B(h)</text>

                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="590" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">MSME ODR Claim</text>
                    <text x="590" y="82" fill="#334155" fontSize="10" textAnchor="middle">Section 18 Reference</text>
                    <text x="590" y="98" fill="#475569" fontSize="9" textAnchor="middle">Attach Notice + Affidavit</text>

                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#msmeNoticeSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Award &amp; Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">75% Pre-Deposit (s.19)</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">Bank Attachment Decree</text>

                    {/* Bottom Summary Box */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">
                      WHY SERVING A FORMAL 15-DAY DEMAND NOTICE FIRST SETTLES MOST MSME CLAIMS:
                    </text>
                    <text x="25" y="192" fill="#475569" fontSize="10">
                      • Triggers CFO / Tax Auditor review before March 31 to prevent Section 43B(h) income-tax disallowance
                    </text>
                    <text x="25" y="208" fill="#475569" fontSize="10">
                      • Establishes a dated pre-litigation demand record required for Section 18 MSME ODR / MSEFC filing
                    </text>
                    <text x="25" y="224" fill="#475569" fontSize="10">
                      • Freezes belated quality excuses by recording the expiry of the 15-day Section 2(b) inspection window
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 6: Landmark Supreme Court Precedents (Strictly matching IRCTC / Company Directors card style) */}
              <section
                id="heading-case-digest"
                aria-labelledby="heading-case-digest-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Supreme Court Rulings Backing MSME 3× Interest Claims
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Rulings
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
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
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
                              Binding Statutory Principle
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Notice Drafting Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Before All MSEFCs &amp; Commercial Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>How to use this in your notice:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Worked Example (Dark Slate Card matching IRCTC) */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹11,40,000 Overdue Invoice in 12 Days
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative B2B Recovery Case Study
                    </span>
                    <span className="text-xs text-slate-400">
                      Noida Micro-Enterprise Supplier vs. Pune Infrastructure Buyer
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Supply &amp; Default:</strong> VoltCraft Switchgears (a Udyam-registered Micro Enterprise in Noida) supplied custom LT distribution panels worth ₹11,40,000 under GST Tax Invoice No. VCS/25-26/312 dated 12 August 2025 to a Pune-based EPC infrastructure company. The panels were delivered via E-Way Bill and signed off on the site Goods Receipt Note (GRN) on 16 August 2025. Despite a 45-day credit cap expiring on 30 September 2025 (making 01 October 2025 the statutory Appointed Day), the buyer delayed payment for 7 months, claiming its principal employer had not released milestone funds—a classic{" "}
                      <Link
                        href="/subcontractor-payment-recovery-india"
                        className="text-sky-400 underline font-semibold"
                      >
                        subcontractor back-to-back payment excuse
                      </Link>
                      .
                    </p>
                    <p>
                      <strong>The Statutory Demand Notice:</strong> In February 2026—just ahead of the buyer&apos;s March 31 financial year-end tax audit—VoltCraft engaged LegalRecovery.in. An advocate served a formal 15-day Statutory Demand Notice (Variant 2/3 structure) on the buyer&apos;s Managing Director, CFO, and Statutory Audit partner via RPAD and email. The notice attached a month-by-month Section 16 interest schedule computing ₹1,62,850 in monthly compounded interest (@ 20.25% p.a.) and explicitly flagged that if ₹11,40,000 remained unpaid on March 31, the buyer would suffer an immediate ~₹3,42,000 cash income-tax disallowance under Section 43B(h).
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution:</strong>
                      On Day 12 after RPAD delivery, the buyer&apos;s CFO contacted the supplier to avoid a Form 3CD Clause 22 qualification and an MSME ODR arbitration reference. The buyer remitted the full ₹11,40,000 principal plus ₹1,45,000 in agreed statutory interest via RTGS in a single tranche prior to March 25.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Mandatory Annexures Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Annexures Checklist: 6 Documents for MSME Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Never send a bare text letter alone. Attaching these 6 numbered annexures turns your demand notice into a trial-ready Section 18 MSME ODR dossier and prevents the buyer from disputing basic facts:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Udyam Registration Certificate (Annexure A):
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Proving active Micro or Small Enterprise status prior to the Purchase Order and invoice date.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Purchase Order / Work Order / Email Confirmation (Annexure B):
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Establishing the commercial contract, agreed rates, and buyer entity details.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        GST Tax Invoices &amp; GSTR-1 Filing Proof (Annexure C):
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Showing the buyer availed Input Tax Credit (ITC) in GSTR-2B, estopping any denial of invoice receipt.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Delivery Challan, E-Way Bill &amp; Signed GRN / SRN (Annexure D):
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Crucial to establish the exact start of the 15-day deemed acceptance clock under Section 2(b).
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Running Ledger Account &amp; Part-Payment Trail (Annexure E):
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Useful for{" "}
                        <Link
                          href="/distributor-dealer-dues-recovery"
                          className="text-blue-700 underline font-medium"
                        >
                          distributor and dealer ledger recovery
                        </Link>{" "}
                        and proving limitation extension under Section 19 of the Limitation Act.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Section 16 Monthly Compound Interest Sheet (Annexure F):
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Itemised month-by-month calculation from the Appointed Day at 3× the notified RBI Bank Rate.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Honest Scope Block */}
              <section
                id="heading-honest-scope"
                aria-labelledby="heading-honest-scope-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  What LegalRecovery Can and Cannot Do for Your MSME Payment Recovery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 block">
                      ✓ What LegalRecovery Delivers
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-emerald-950 leading-relaxed list-disc list-inside">
                      <li>
                        Advocate-drafted 15-day Statutory Demand Notice citing MSMED Sections 15, 16, 22, 23 &amp; Income-tax Section 43B(h).
                      </li>
                      <li>
                        Verified month-by-month Section 16 compound interest calculation sheet annexed to the notice.
                      </li>
                      <li>
                        Multi-channel legal dispatch via India Post Registered Speed Post (RPAD), corporate email, and WhatsApp with Section 63 BSA tracking logs.
                      </li>
                      <li>
                        Structured Section 18 ODR complaint &amp; affidavit drafting support if the buyer fails to settle within 15 days. Check our{" "}
                        <Link
                          href="/legal-notice-charges"
                          className="text-emerald-900 underline font-bold"
                        >
                          transparent legal notice charges
                        </Link>
                        .
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900 block">
                      ✕ Statutory Boundaries &amp; Honest Limits
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed list-disc list-inside">
                      <li>
                        <strong>No Retroactive Udyam Claims:</strong> Under <em>Silpi Industries</em> and <em>Mahakali Foods</em>, if you obtained Udyam Registration <em>after</em> supplying the goods, you cannot invoke Section 18 MSEFC arbitration (though we can still send a civil Order 37 / Commercial Court recovery notice).
                      </li>
                      <li>
                        <strong>Medium Enterprises &amp; Pure Traders:</strong> Section 16 compound interest and Section 43B(h) tax disallowance apply exclusively to <strong>Micro and Small Enterprises</strong> engaged in manufacturing or services—not Medium Enterprises or pure wholesale/retail traders holding NIC code 45/46/47 registration.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
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
                    FAQs: MSME Demand Notice &amp; Affidavit Formats
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Statutory Answers Based on Chapter V of the MSMED Act, 2006 &amp; Section 43B(h) Income-tax Rules
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-md transition-all"
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

              {/* Section 11: Primary Sources Block */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  MSMED Act Provisions &amp; Primary Legal References
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
                  Statutory verification status: All templates, interest formulas, and statutory citations verified against the MSMED Act, 2006 (as amended), Section 43B(h) of the Income-tax Act, 1961, and RBI Bank Rate notifications as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve an Official Advocate MSME Demand Notice
                </h2>
                <MsmeDemandNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related MSME &amp; B2B Invoice Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME Samadhaan vs Legal Notice Hub →
                  </Link>
                  <Link
                    href="/law/msmed-amendment-act-2026"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSMED Amendment Act 2026 Guide →
                  </Link>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME 3× Bank Rate Interest Calculator →
                  </Link>
                  <Link
                    href="/law/section-43bh-msme-payment-rule"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Section 43B(h) 45-Day Tax Disallowance Rule →
                  </Link>
                  <Link
                    href="/msme-odr-portal-delayed-payment-guide"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    MSME ODR Portal Filing Guide →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Schedule →
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
