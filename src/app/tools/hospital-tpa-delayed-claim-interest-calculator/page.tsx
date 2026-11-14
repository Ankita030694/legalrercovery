import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HospitalTpaCalculatorClient from "./HospitalTpaCalculatorClient";
import HospitalTpaCalculatorTOC from "./HospitalTpaCalculatorTOC";
import HospitalTpaCalculatorCTA from "./HospitalTpaCalculatorCTA";

export const revalidate = 86400;

const PAGE_PATH = "/tools/hospital-tpa-delayed-claim-interest-calculator";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Hospital TPA Delayed Claim Penal Interest Calculator (IRDAI)";
const PAGE_DESCRIPTION =
  "Calculate statutory penal interest owed by Health Insurers & TPAs to hospitals on delayed cashless claims & wrongful deductions under IRDAI norms.";
const H1_TEXT =
  "Interactive Hospital RCM & IRDAI Delayed TPA/Insurance Claim Penal Interest Calculator (Bank Rate + 2%)";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "irdai delayed claim settlement penal interest calculator hospital",
    "bank rate plus 2 percent irdai interest calculator",
    "tpa cashless claim settlement delay penalty calculator",
    "batch hospital insurance claim ageing interest tool",
    "irdai master circular health insurance claim timeline",
    "hospital rcm disallowance recovery calculator",
    "commercial courts act section 2 1 c xx insurance claim",
  ],
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
    question: "What is the statutory interest rate mandated by IRDAI for delayed health insurance and TPA claim settlements?",
    answer:
      "Under the IRDAI (Protection of Policyholders' Interests and Allied Matters of Insurers) Regulations, 2024 and Clause 19 of the IRDAI Master Circular on Operations and Allied Matters of Health Insurance Business, health insurers and Third Party Administrators (TPAs) must pay penal interest at a rate of 2% above the bank rate fixed by the Reserve Bank of India (RBI) prevalent at the beginning of the financial year. With the RBI Bank Rate established at 6.75% per annum, the mandatory statutory penal rate is 8.75% per annum on all delayed cashless balances and wrongful disallowances.",
  },
  {
    question: "When does the statutory delay clock start running against a TPA or Health Insurer?",
    answer:
      "The statutory timeline begins the moment the network hospital uploads or furnishes the complete final claim docket, discharge summary, and itemized billing ledger following patient discharge. Under IRDAI directives, insurers and TPAs have a maximum turnaround time (TAT) of 30 days to process, adjudicate, and disburse full settlement. If the insurer seeks additional queries, they must do so within 15 days; once answered, the balance TAT cannot exceed 30 total calendar days. Day 31 marks the automatic trigger of penal interest.",
  },
  {
    question: "Can an Insurer or TPA disallow statutory penal interest by citing network MOU clauses?",
    answer:
      "No. Statutory regulations issued by the Insurance Regulatory and Development Authority of India (IRDAI) under Sections 14 and 114A of the Insurance Act, 1938 have overriding statutory force over private Service Level Agreements (SLAs) or Network Provider Memorandums of Understanding (MOUs). Any contractual clause in a TPA agreement purporting to waive penal interest or grant unilateral 90-to-180-day settlement credit is void ab initio under Section 23 of the Indian Contract Act, 1872 as contrary to statutory public policy.",
  },
  {
    question: "How can hospital RCM teams legally challenge arbitrary TPA deductions on consumables and tariff packages?",
    answer:
      "Arbitrary disallowances on surgical consumables, gloves, PPE, biomedical waste disposal, and ICU tariff caps can be successfully recovered if they violate the agreed GIPSA schedule or bilateral Network Hospital MOU. The hospital RCM desk must issue a formal Legal Demand Notice under Section 2(1)(c)(xx) of the Commercial Courts Act, 2015, establishing that pre-authorization was unconditionally approved and that unilateral post-discharge deductions constitute actionable breach of commercial contract.",
  },
  {
    question: "What legal forum has jurisdiction if an Insurer or TPA ignores the statutory demand notice?",
    answer:
      "Unlike retail consumers who approach Consumer Dispute Redressal Commissions (DCDRC/SCDRC), network hospitals operate as institutional commercial creditors. If the total unpaid principal plus accrued IRDAI penal interest equals or exceeds ₹3,00,000 (Specified Value under Section 2(1)(i) of the Commercial Courts Act, 2015), the hospital can invoke Section 12-A Pre-Institution Mediation and file a Commercial Suit. Alternatively, hospitals can initiate contractual Arbitration under Section 21 of the Arbitration and Conciliation Act, 1996 or escalate non-compliance to the IRDAI Bima Bharosa grievance cell.",
  },
  {
    question: "What electronic evidence is mandatory under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)?",
    answer:
      "To enforce delayed claim penalties in court or mediation, hospitals must maintain an unimpeachable digital audit trail certified under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (replacing Section 65B of the Indian Evidence Act). Mandatory records include: (1) Initial and final pre-authorization approval letters with digital stamps, (2) TPA portal submission logs showing docket upload dates, (3) Email correspondence with claim query timestamps, and (4) Bank statement extracts confirming partial short-settlement remittances.",
  },
  {
    question: "What is the limitation period for a hospital to recover aged TPA deductions and statutory interest?",
    answer:
      "Under Articles 24, 55, and 113 of the Schedule to the Limitation Act, 1963, the limitation period for recovering unpaid commercial dues and breach of network MOU is three (3) years. The limitation clock begins on the date of partial short-settlement voucher issuance or the expiry of the statutory 30-day settlement window. Any interim acknowledgment of claim in writing or portal balance credit confirmation resets the 3-year limitation clock under Section 18 of the Limitation Act.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "IRDAI Master Circular on Operations and Allied Matters of Health Insurance Business (Clause 19)",
    url: "https://irdai.gov.in/",
  },
  {
    title: "IRDAI (Protection of Policyholders' Interests and Allied Matters of Insurers) Regulations, 2024",
    url: "https://irdai.gov.in/",
  },
  {
    title: "Commercial Courts Act, 2015 — Section 2(1)(c)(xx) Insurance Disputes & Section 12-A Mediation",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Reserve Bank of India (RBI) — Bank Rate Notifications & Monetary Policy Framework",
    url: "https://www.rbi.org.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 Admissibility of Electronic Records",
    url: "https://www.indiacode.nic.in/",
  },
  {
    title: "Limitation Act, 1963 — Articles 24, 55 & Section 18 Written Acknowledgment of Debt",
    url: "https://www.indiacode.nic.in/handle/123456789/1566",
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
      name: "Healthcare & Hospital Recovery",
      item: `${SITE_URL}/industries/hospitals-doctors-healthcare-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hospital TPA Penal Interest Calculator",
      item: CANONICAL_URL,
    },
  ],
};

export default function HospitalTpaDelayedClaimInterestCalculatorPage() {
  const breadcrumbItems = [
    { label: "Healthcare & Hospital Recovery", href: "/industries/hospitals-doctors-healthcare-recovery" },
    { label: "Hospital TPA Penal Interest Calculator", href: PAGE_PATH },
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
              <span>IND-03 Healthcare &amp; Hospital Calculator</span>
              <span className="text-red-500">&bull;</span>
              <span>IRDAI Health Master Circular &bull; Bank Rate + 2%</span>
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
                Executive Creditor Summary (Hospital RCM Heads, Billing Managers &amp; Healthcare CFOs)
              </span>
              <p>
                Integrated with our{" "}
                <Link
                  href="/industries/hospitals-doctors-healthcare-recovery"
                  className="text-red-300 underline hover:text-white font-bold"
                >
                  IND-03 Healthcare &amp; Hospital Recovery Hub
                </Link>
                , this calculator computes statutory penal interest at RBI Bank Rate + 2% (8.75% p.a.) owed by Third Party Administrators (TPAs) and health insurers under the IRDAI Master Circular for delayed cashless settlements beyond 30 days and arbitrary package deductions.
              </p>
            </div>

            {/* 4-Card Statutory Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  30 Days
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Statutory Settlement TAT (IRDAI)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  Bank Rate + 2%
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Mandatory Penal Interest Spread
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  8.75% p.a.
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Effective Penal Rate (RBI 6.75%)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  ₹3 Lakhs
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Commercial Court S.12 Threshold
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
            <HospitalTpaCalculatorTOC />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Interactive React Tool */}
              <HospitalTpaCalculatorClient />

              {/* Section 2: IRDAI Statutory Settlement TAT */}
              <section
                id="irdai-statutory-tat"
                aria-labelledby="irdai-statutory-tat-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h2
                      id="irdai-statutory-tat-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      IRDAI Health Insurance Master Circular &amp; Statutory Settlement TAT
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Why network hospitals hold statutory rights to 30-day cashless settlement beyond TPA delays
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Across India, multi-specialty hospitals, nursing homes, and diagnostic chains face systemic working-capital paralysis caused by Third Party Administrators (TPAs) and health insurers delaying cashless claims for 90 to 180+ days. Most hospital Revenue Cycle Management (RCM) teams treat these delays as commercial negotiation bottlenecks, unaware that the Insurance Regulatory and Development Authority of India (IRDAI) has established a strict statutory settlement timetable.
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under the <strong>IRDAI Master Circular on Operations and Allied Matters of Health Insurance Business</strong> read with the <strong>IRDAI (Protection of Policyholders&apos; Interests and Allied Matters of Insurers) Regulations, 2024</strong>, insurers and their licensed TPAs are legally bound to adjudicate, settle, and disburse full payment within <strong>30 calendar days</strong> from the receipt of the final claim docket and discharge summary.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3 font-bold">Settlement Stage</th>
                        <th className="p-3 font-bold">Governing IRDAI Mandate</th>
                        <th className="p-3 font-bold">Statutory TAT</th>
                        <th className="p-3 font-bold">Consequence of Insurer Breach</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Pre-Authorization Approval</td>
                        <td className="p-3 font-mono text-slate-700">IRDAI Master Circular Cl. 16</td>
                        <td className="p-3 text-slate-700">Within 1 hour of request</td>
                        <td className="p-3 text-slate-600">Patient cannot be detained; hospital proceeds with cashless treatment</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Final Discharge Authorization</td>
                        <td className="p-3 font-mono text-slate-700">IRDAI Master Circular Cl. 17</td>
                        <td className="p-3 text-slate-700">Within 3 hours of discharge summary</td>
                        <td className="p-3 text-slate-600">Unjustified delay penalizes insurer; hospital releases patient without bill retention</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Query Raising Ceiling</td>
                        <td className="p-3 font-mono text-slate-700">IRDAI Claims Guidelines</td>
                        <td className="p-3 text-slate-700">Within 15 days of docket upload</td>
                        <td className="p-3 text-slate-600">Piecemeal repetitive queries barred; single unified query permitted</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Final Settlement &amp; Disbursement</td>
                        <td className="p-3 font-mono text-slate-700">IRDAI Master Circular Cl. 19</td>
                        <td className="p-3 text-slate-700">30 days from final document receipt</td>
                        <td className="p-3 font-bold text-red-600">Mandatory penal interest: Bank Rate + 2% per annum from Day 31</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs text-amber-900 leading-relaxed">
                  <strong>Statutory Supremacy Over Network Provider MOUs:</strong> TPAs frequently claim that their bilateral Service Level Agreements allow 60 or 90 days for claim audit. As held in judicial precedents under the Insurance Act, statutory regulations promulgated by IRDAI have overriding public-policy effect over conflicting private contracts under Section 23 of the Indian Contract Act, 1872.
                </div>
              </section>

              {/* Section 3: Bank Rate + 2% Penal Interest Formula */}
              <section
                id="bank-rate-formula"
                aria-labelledby="bank-rate-formula-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h2
                      id="bank-rate-formula-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      The Bank Rate + 2% Penal Interest Formula &amp; Statutory Accounting
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Exact mathematical methodology for computing institutional interest on aged healthcare receivables
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Clause 19 of the IRDAI Master Circular explicitly mandates that where a claim payment is delayed beyond the statutory TAT, the insurer or TPA <em>&quot;shall be liable to pay interest at a rate which is 2% above the bank rate prevalent at the beginning of the financial year in which the claim is reviewed.&quot;</em>
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Statutory Mathematical Formula
                    </span>
                    <span className="text-xs text-slate-400">IRDAI Master Circular Cl. 19</span>
                  </div>

                  <div className="font-mono text-xs sm:text-sm bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <p className="text-emerald-400 font-bold">
                      Penal Interest = Principal Withheld &times; [ (RBI Bank Rate + 2.0%) / 100 ] &times; [ Delay Days / 365 ]
                    </p>
                    <p className="text-slate-400 text-xs mt-2">
                      Where:
                      <br />
                      &bull; <strong>Principal Withheld</strong> = Total Approved / Invoiced Bill &minus; Admitted TPA Settlement
                      <br />
                      &bull; <strong>RBI Bank Rate</strong> = Reserve Bank of India statutory rate (currently 6.75% p.a.)
                      <br />
                      &bull; <strong>Statutory Spread</strong> = 2.00% p.a. fixed by IRDAI
                      <br />
                      &bull; <strong>Total Penal Rate</strong> = 6.75% + 2.00% = <strong>8.75% p.a.</strong>
                      <br />
                      &bull; <strong>Delay Days</strong> = Calculation Date &minus; (Final Submission Date + 30 Days)
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  For hospitals whose Network Hospital MOU includes contractual arbitration or monthly interest compounding terms, Section 31(7) of the Arbitration and Conciliation Act, 1996 and commercial civil principles allow compounding of interest from the date of wrongful withholding until actual realization.
                </p>
              </section>

              {/* Section 4: Wrongful TPA Disallowances & Arbitrary Deductions */}
              <section
                id="wrongful-tpa-disallowances"
                aria-labelledby="wrongful-tpa-disallowances-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h2
                      id="wrongful-tpa-disallowances-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Challenging Arbitrary TPA Deductions: Consumables &amp; Tariff Package Mismatches
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      How TPAs unilaterally shave 15% to 30% off hospital bills and how to legally overturn them
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Beyond outright payment delays, hospital finance departments lose crores annually to arbitrary post-discharge disallowances. While pre-authorization is initially granted for full package procedures, TPAs routinely slash payment upon final billing by applying unapproved internal deduction rules:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700 block">
                      Category 1: Blanket Consumables Disallowance
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      TPAs classify essential surgical consumables (trocars, laparoscopic staplers, surgical mesh, disposable drapes, PPE kits, biomedical charges) as &quot;non-payable administrative overheads&quot; without statutory grounding or contractual basis in the hospital MOU.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700 block">
                      Category 2: Retroactive Tariff Capping
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Imposing lower GIPSA (General Insurance Public Sector Association) package rates or PPN rates on tertiary private hospitals that never executed GIPSA tariff schedules, or capping ICU bed charges below signed MOU schedules.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700 block">
                      Category 3: Length of Stay (LOS) Arbitrary Cuts
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      TPA medical auditors unilaterally disallowing ICU or ward days certified by treating senior surgeons, claiming &quot;treatment could have been completed earlier&quot;—an illegal substitution of clinical judgment by remote administrative staff.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700 block">
                      Category 4: Post-Auth Cashless Repudiation
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Approving initial pre-authorization and interim enhancement, but repudiating the entire claim at discharge citing alleged &quot;pre-existing disease non-disclosure&quot;—leaving the hospital with an unpaid discharged patient.
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  When a hospital serves a formal Legal Notice citing the binding effect of initial pre-authorizations under the doctrine of promissory estoppel and IRDAI circulars, TPAs and insurers frequently release 80% to 95% of disallowed sums during pre-litigation triage to prevent regulatory audit penalties.
                </p>
              </section>

              {/* Section 5: Worked Financial Recovery Ledger */}
              <section
                id="worked-rcm-claim-ledger"
                aria-labelledby="worked-rcm-claim-ledger-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h2
                      id="worked-rcm-claim-ledger-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Worked Recovery Ledger: ₹48.5 Lakh Aged Hospital Portfolio
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Empirical simulation of multi-specialty hospital recovery using the IRDAI Bank Rate + 2% formula
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Consider a 150-bed multi-specialty hospital in NCR with ₹48,50,000 in aged receivables across 22 cashless claims spanning three major private insurers and two public-sector TPAs. The final claim dockets were submitted between January and June 2026, remaining unsettled as of November 2026:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3 font-bold">Aging Bucket</th>
                        <th className="p-3 font-bold">Claims Count</th>
                        <th className="p-3 font-bold">Total Invoiced (₹)</th>
                        <th className="p-3 font-bold">Admitted (₹)</th>
                        <th className="p-3 font-bold">Withheld Principal (₹)</th>
                        <th className="p-3 font-bold">Avg Delay (Days)</th>
                        <th className="p-3 font-bold">IRDAI Interest @ 8.75% (₹)</th>
                        <th className="p-3 font-bold">Total Demand (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3 font-bold text-slate-900">31–60 Days</td>
                        <td className="p-3 text-slate-700">6 claims</td>
                        <td className="p-3 font-mono text-slate-600">₹14,20,000</td>
                        <td className="p-3 font-mono text-slate-600">₹9,80,000</td>
                        <td className="p-3 font-mono font-bold text-red-600">₹4,40,000</td>
                        <td className="p-3 text-slate-700">22 days</td>
                        <td className="p-3 font-mono font-bold text-emerald-600">₹23,205</td>
                        <td className="p-3 font-mono font-black text-slate-900">₹4,63,205</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">61–90 Days</td>
                        <td className="p-3 text-slate-700">7 claims</td>
                        <td className="p-3 font-mono text-slate-600">₹18,50,000</td>
                        <td className="p-3 font-mono text-slate-600">₹11,20,000</td>
                        <td className="p-3 font-mono font-bold text-red-600">₹7,30,000</td>
                        <td className="p-3 text-slate-700">51 days</td>
                        <td className="p-3 font-mono font-bold text-emerald-600">₹89,235</td>
                        <td className="p-3 font-mono font-black text-slate-900">₹8,19,235</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">91–180 Days</td>
                        <td className="p-3 text-slate-700">5 claims</td>
                        <td className="p-3 font-mono text-slate-600">₹12,40,000</td>
                        <td className="p-3 font-mono text-slate-600">₹6,50,000</td>
                        <td className="p-3 font-mono font-bold text-red-600">₹5,90,000</td>
                        <td className="p-3 text-slate-700">114 days</td>
                        <td className="p-3 font-mono font-bold text-emerald-600">₹1,61,280</td>
                        <td className="p-3 font-mono font-black text-slate-900">₹7,51,280</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">&gt;180 Days (Chronic)</td>
                        <td className="p-3 text-slate-700">4 claims</td>
                        <td className="p-3 font-mono text-slate-600">₹9,80,000</td>
                        <td className="p-3 font-mono text-slate-600">₹2,10,000</td>
                        <td className="p-3 font-mono font-bold text-red-600">₹7,70,000</td>
                        <td className="p-3 text-slate-700">210 days</td>
                        <td className="p-3 font-mono font-bold text-emerald-600">₹3,87,636</td>
                        <td className="p-3 font-mono font-black text-slate-900">₹11,57,636</td>
                      </tr>
                      <tr className="bg-slate-900 text-white font-bold">
                        <td className="p-3">CONSOLIDATED PORTFOLIO</td>
                        <td className="p-3">22 Claims</td>
                        <td className="p-3 font-mono">₹54,90,000</td>
                        <td className="p-3 font-mono">₹29,60,000</td>
                        <td className="p-3 font-mono text-red-400">₹25,30,000</td>
                        <td className="p-3">99d Avg</td>
                        <td className="p-3 font-mono text-emerald-400">₹6,61,356</td>
                        <td className="p-3 font-mono text-white text-sm">₹31,91,356</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900 leading-relaxed">
                  <strong>Strategic Impact for Hospital CFO:</strong> By asserting statutory penal interest, the hospital adds <strong>₹6.61 Lakhs</strong> in enforceable statutory yield to its principal recovery. When packaged into institutional legal notices, insurers recognize that continuing to delay settlement will steadily increase court fee and interest liability under the Commercial Courts Act.
                </div>
              </section>

              {/* Section 6: Legal Escalation Matrix */}
              <section
                id="legal-escalation-matrix"
                aria-labelledby="legal-escalation-matrix-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <h2
                      id="legal-escalation-matrix-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Multi-Tier Legal Escalation: CCO Notice, Ombudsman &amp; Commercial Courts
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      The four-stage institutional recovery protocol from regulatory escalation to binding court decree
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Unlike policyholders who frequently utilize consumer forums, network hospitals must operate through institutional commercial channels. The legal escalation pathway consists of four progressive tiers:
                </p>

                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-white hover:border-slate-300 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-slate-900">
                        Tier 1: Statutory Demand Notice to Insurer Chief Compliance Officer (CCO)
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        Days 1–15
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A formal advocate-drafted demand notice issued simultaneously to the TPA Managing Director and the Health Insurer&apos;s CCO. It details claim IDs, submission dates, TAT calculations, and statutory interest claims, giving a 15-day cure window to release funds before court institution.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white hover:border-slate-300 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-slate-900">
                        Tier 2: IRDAI Bima Bharosa &amp; Regulatory Non-Compliance Complaint
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        Days 16–30
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Escalation via IRDAI&apos;s Bima Bharosa portal and Department of Non-Life Supervision citing violation of Clause 19 Master Circular norms. Regulatory audit notices compel insurers to explain chronic TAT breaches or face supervisory inspections.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white hover:border-slate-300 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-slate-900">
                        Tier 3: Commercial Courts Act Section 12-A Pre-Institution Mediation
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                        Days 31–75
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 2(1)(c)(xx) of the Commercial Courts Act, 2015, claims arising out of insurance contracts are classified as &quot;Commercial Disputes.&quot; If the aggregated hospital dues exceed ₹3,00,000, Section 12-A mandates pre-institution mediation before the District Legal Services Authority (DLSA), achieving binding settlements without trial delays.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white hover:border-slate-300 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-slate-900">
                        Tier 4: Commercial Suit / Institutional Arbitration Under Section 21
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
                        Days 75+
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Where mediation fails or MOU mandates arbitration, hospital counsel files a Commercial Suit or Section 11/21 arbitration petition. Fast-track summary judgment under Order XIII-A of CPC allows decreeing admitted dues without protracted evidence.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: BSA Section 63 Electronic Evidence Checklist */}
              <section
                id="bsa-63-rcm-evidence"
                aria-labelledby="bsa-63-rcm-evidence-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    7
                  </span>
                  <div>
                    <h2
                      id="bsa-63-rcm-evidence-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Section 63 BSA 2023 Electronic Evidence Audit Checklist for Hospital RCM
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Mandatory digital audit trail requirements replacing Section 65B Indian Evidence Act certificates
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which governs all legal proceedings initiated post-July 2024, digital evidence must comply with the strict certification standards of <strong>Section 63</strong>. Hospital IT and RCM teams must maintain tamper-evident records to prove the exact Day 0 docket upload:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 uppercase">
                      1. TPA Portal Submission Timestamp
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Unedited screenshot and export log of the TPA web portal (e.g. Medi Assist, Vidal, Paramount) displaying claim docket upload date, file hash, and &quot;Pending Adjudication&quot; status.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 uppercase">
                      2. Pre-Authorization Sanction Letter
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Digital copy of the insurer&apos;s pre-authorization approval letter bearing approval code, sanctioned amount, and authorized room rent slab.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 uppercase">
                      3. Query &amp; Rebuttal Email Threads
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Complete RFC 822 email headers of all clinical queries raised by the TPA and the hospital&apos;s prompt submission of medical justification records.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 uppercase">
                      4. Short-Settlement Advice &amp; Bank UTR
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Insurer payment advice statement itemizing arbitrary deduction heads alongside the corresponding bank account credit statement verifying partial remittance.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-xl p-4 text-xs leading-relaxed">
                  <span className="text-red-400 font-bold block mb-1">
                    Section 63 BSA Certificate Compliance:
                  </span>
                  Every demand docket assembled by LegalRecovery.in includes a signed Section 63 BSA certificate from the hospital IT administrator, ensuring that electronic records are instantly admissible in mediation and civil court.
                </div>
              </section>

              {/* Section 8: Healthcare Legal Recovery Network & Sibling Guides */}
              <section
                id="hospital-rcm-resources"
                aria-labelledby="hospital-rcm-resources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    8
                  </span>
                  <div>
                    <h2
                      id="hospital-rcm-resources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Institutional Healthcare Legal Recovery Network &amp; Related Playbooks
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Interconnected legal mechanisms across private, government scheme and patient healthcare dues
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Healthcare providers operate under complex multi-payer reimbursement architectures. Explore our specialized statutory guides and legal notice templates:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-white hover:border-slate-300 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                      Sibling Playbook &bull; TPA Claims
                    </span>
                    <Link
                      href="/hospital-tpa-insurance-delayed-short-settled-claim-recovery"
                      className="text-xs font-bold text-slate-900 hover:text-[#DC2626] transition-colors block"
                    >
                      Hospital TPA &amp; Insurance Short-Settled Claim Recovery &rarr;
                    </Link>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Comprehensive playbook for overturning arbitrary deductions, ROHINI network breaches, and consumable cuts.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white hover:border-slate-300 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                      Sibling Playbook &bull; Government Schemes
                    </span>
                    <Link
                      href="/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery"
                      className="text-xs font-bold text-slate-900 hover:text-[#DC2626] transition-colors block"
                    >
                      CGHS, ECHS, Ayushman Bharat &amp; ESIC Empanelled Hospital Dues &rarr;
                    </Link>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Recovering aged scheme receivables via mandatory Section 80 CPC notices and Article 226 High Court writs.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white hover:border-slate-300 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                      Sibling Playbook &bull; Patient Dues
                    </span>
                    <Link
                      href="/hospital-unpaid-patient-bill-recovery-without-detaining-patient"
                      className="text-xs font-bold text-slate-900 hover:text-[#DC2626] transition-colors block"
                    >
                      Hospital Unpaid Patient Bill Recovery (Without Detaining Patients) &rarr;
                    </Link>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Article 21-compliant post-discharge legal notices, attendant guarantees, and civil recovery mechanisms.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white hover:border-slate-300 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                      Statutory Templates &amp; Notice Formats
                    </span>
                    <Link
                      href="/templates/promissory-note-format-india"
                      className="text-xs font-bold text-slate-900 hover:text-[#DC2626] transition-colors block"
                    >
                      Promissory Note &amp; Attendant Undertaking Format &rarr;
                    </Link>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Advocate-vetted discharge undertaking for unpaid patient co-pays, deductible balances, and bounced cheques.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                  <span className="font-bold text-slate-800">Additional Statutory Resources:</span>
                  <Link href="/law/section-80-cpc-notice-to-government" className="underline hover:text-[#DC2626]">
                    Section 80 CPC Notice Guide
                  </Link>
                  <span>&bull;</span>
                  <Link href="/cheque-bounce-notice-timeline-section-138" className="underline hover:text-[#DC2626]">
                    Section 138 Cheque Bounce Timeline
                  </Link>
                  <span>&bull;</span>
                  <Link href="/industries/hospitals-doctors-healthcare-recovery" className="font-bold text-[#DC2626] underline">
                    IND-03 Healthcare Hub
                  </Link>
                </div>
              </section>

              {/* Section 9: Dual-Track B2B Action Desk */}
              <section
                id="hospital-batch-cta"
                aria-labelledby="hospital-batch-cta-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="hospital-batch-cta-title"
                    className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Deploy Healthcare RCM Legal Recovery: Single Notice or Batch CSV
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Choose between a single-case statutory demand test or dedicated institutional portfolio management
                  </p>
                </div>

                <HospitalTpaCalculatorCTA />
              </section>

              {/* Section 10: Frequently Asked Questions */}
              <section
                id="tpa-calculator-faqs"
                aria-labelledby="tpa-calculator-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    10
                  </span>
                  <div>
                    <h2
                      id="tpa-calculator-faqs-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Frequently Asked Questions on Hospital TPA Delayed Claims &amp; Penal Interest
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Legal answers for hospital CFOs, billing heads, and network hospital administration
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, index) => (
                    <details
                      key={index}
                      className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-colors hover:bg-slate-50 open:bg-white open:shadow-sm"
                    >
                      <summary className="flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none gap-3">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-bold text-base transition-transform group-open:rotate-180 shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Authorities & Sources */}
              <section
                id="statutory-authorities"
                aria-labelledby="statutory-authorities-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    11
                  </span>
                  <div>
                    <h2
                      id="statutory-authorities-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Statutory Authorities, IRDAI Circulars &amp; Legal Citations
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Verified primary legal sources governing healthcare claim settlement timelines and penal interest
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3 font-bold">Statutory Instrument</th>
                        <th className="p-3 font-bold">Key Provision &amp; Principle</th>
                        <th className="p-3 font-bold">Official Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {PRIMARY_SOURCES.map((source, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-900">{source.title}</td>
                          <td className="p-3 text-slate-600">
                            Mandatory settlement TAT, statutory penal interest calculation, and commercial dispute jurisdiction.
                          </td>
                          <td className="p-3">
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="text-[#DC2626] hover:underline font-semibold"
                            >
                              Official Portal &rarr;
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                  <strong>Disclaimer:</strong> This calculator and guidance document are engineered for institutional healthcare hospital management, RCM heads, and healthcare corporate counsel. While statutory penal rates reflect IRDAI Master Circular directives and prevailing RBI Bank Rates, individual claims depend on specific network provider MOUs, clinical documentation adequacy, and valid pre-authorization dockets.
                </div>
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
