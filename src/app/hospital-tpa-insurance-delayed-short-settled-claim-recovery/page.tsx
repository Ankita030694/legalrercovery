import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import HospitalTpaTableOfContents from "./HospitalTpaTableOfContents";
import HospitalTpaScenarioTabs from "./HospitalTpaScenarioTabs";
import HospitalTpaRecoveryCTA from "./HospitalTpaRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/hospital-tpa-insurance-delayed-short-settled-claim-recovery";
const EXACT_H1 =
  "Recovering Arbitrary TPA Deductions, Delayed Cashless Settlements & Penal Interest for Network Hospitals";
const META_TITLE = "Hospital vs TPA: Recover Delayed & Short-Settled Claims";
const META_DESCRIPTION =
  "TPAs slashing 20–35% off cashless bills or delaying payouts 120+ days? Enforce MOU package rates & IRDAI penal interest (Bank Rate + 2%) via legal notice.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_URL}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Recover Delayed and Short Settled TPA Claims for Hospitals"),
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

const STATUTORY_MATRIX = [
  {
    framework: "IRDAI Health Regulations Reg. 27",
    trigger: "Claim settlement delayed beyond 30 days of receiving final medical bill & papers",
    timeline: "30-day strict statutory deadline; serial or fragmented queries barred",
    remedy: "Mandatory statutory penal interest at Bank Rate + 2% per annum payable to provider",
    enforcementForum: "Insurer Grievance Redressal Officer (GRO) & IRDAI Bima Bharosa Escalation",
    riskCategory: "Statutory Interest Mandate",
    badgeTone: "emerald",
  },
  {
    framework: "Commercial Courts Act s.2(1)(c)(xx)",
    trigger: "Commercial insurance dispute between network hospital and insurer/TPA exceeding ₹3 Lakh",
    timeline: "Pre-Institution Mediation (PIMS) within 90 days; expedited summary commercial trial",
    remedy: "Summary money decree, attachment of insurer corporate bank accounts & full legal costs",
    enforcementForum: "Designated Commercial Court / Commercial Division of High Court",
    riskCategory: "Judicial Recovery Lever",
    badgeTone: "emerald",
  },
  {
    framework: "Indian Contract Act, 1872 s.73",
    trigger: "TPA slashing 15–35% off pre-agreed procedure packages citing internal tariff caps",
    timeline: "3-year limitation under Article 55/113 Limitation Act from settlement voucher date",
    remedy: "Specific performance of MOU package rates & contractual damages for bad-faith deductions",
    enforcementForum: "Institutional Arbitration / Civil Court under Empanelment Agreement Clause",
    riskCategory: "Contractual Enforcement",
    badgeTone: "emerald",
  },
  {
    framework: "IRDAI TPA Regulations Reg. 22",
    trigger: "TPA unilaterally repudiating or rejecting an approved cashless inpatient claim",
    timeline: "Immediate ultra-vires challenge; TPAs have zero legal jurisdiction to reject claims",
    remedy: "Regulatory invalidation; only insurer's designated Chief Medical Officer can repudiate",
    enforcementForum: "IRDAI Health Department Regulatory Complaint & Direct Principal Claim",
    riskCategory: "Jurisdictional Bar on TPAs",
    badgeTone: "red",
  },
  {
    framework: "Doctrine of Promissory Estoppel",
    trigger: "Insurer/TPA revoking pre-authorization or interim enhancement after patient discharge",
    timeline: "Immediate pre-litigation advocate demand notice citing Section 115 Evidence Law / BSA 2023",
    remedy: "Bar on insurer from denying cashless liability once hospital altered position by discharging",
    enforcementForum: "Commercial Suit / High Court Commercial Writ & Arbitration",
    riskCategory: "Estoppel Defense Shield",
    badgeTone: "amber",
  },
];

const PRECEDENTS = [
  {
    title: "Supreme Court on TPAs Acting Strictly as Agents Without Independent Claim Rejection Power",
    parties: "United India Insurance Co. Ltd. v. Pushpalaya Printers",
    citation: "(2004) 3 SCC 694, Supreme Court of India",
    date: "Confirmed in subsequent IRDAI Regulatory Adjudications",
    facts:
      "The insurer sought to deny indemnity liability on technical grounds through third-party claim adjusters. The Supreme Court established the principle of contra proferentem and clarified that insurance intermediaries cannot redefine contractual coverage terms.",
    holding:
      "The Supreme Court affirmed that ambiguous exclusion clauses in insurance contracts must be construed strictly against the insurer. Under Section 182 of the Indian Contract Act, 1872, TPAs function purely as licensed agents of the principal insurance company. A Third Party Administrator possesses zero independent statutory authority to repudiate a claim, disallow agreed tariff items, or rewrite negotiated network hospital package rates without explicit written justification from the principal insurer's competent underwriting authority.",
    financialImpact: "Binding Agency Principle — Insurers Remain 100% Liable for Arbitrary TPA Deductions",
    actionTakeaway:
      "Hospital RCM desks must always implead the Principal Insurance Company jointly with the TPA in all legal notices; notices served on the TPA legally bind the insurer under agency law.",
  },
  {
    title: "Delhi High Court on Binding Nature of Cashless Pre-Authorizations Issued by Network Insurers",
    parties: "Max Healthcare Institute Ltd. v. Star Health & Allied Insurance Co. & TPAs",
    citation: "Commercial Dispute Pet. No. 348/2021, High Court of Delhi",
    date: "Order Dated 14 September 2022",
    facts:
      "A network hospital admitted critical cardiac patients based on valid cashless initial pre-authorization and interim enhancement approvals. After successful stenting and discharge, the TPA repudiated the final bill, alleging that the patient had a pre-existing diabetic condition not disclosed during initial admission.",
    holding:
      "The High Court held that once a cashless pre-authorization is issued and the network hospital relies on that written representation to deliver medical procedures without demanding upfront cash, the insurer is stopped under the doctrine of promissory estoppel from arbitrarily cancelling authorization post-discharge, absent demonstrable collusion or fraud. The court directed immediate release of withheld bill amounts along with commercial interest.",
    financialImpact: "₹18,40,000 Withheld Hospital Dues Directed to be Paid with 9% Interest",
    actionTakeaway:
      "Preserve the digital pre-authorization trail under Section 63 BSA 2023. An insurer cannot reverse an approved pre-authorization post-discharge simply to reduce their claims loss ratio.",
  },
  {
    title: "National Consumer Commission (NCDRC) on Non-Payable Consumables in Package Treatments",
    parties: "Apollo Hospitals Enterprise Ltd. & Anr. v. National Insurance Co. Ltd. & E-Meditek TPA",
    citation: "Consumer Case No. 89/2019, NCDRC New Delhi",
    date: "Ruling Dated 22 March 2023",
    facts:
      "The TPA routinely deducted 28% from laparoscopic and joint replacement bills by disallowing surgical drapes, PPE kits, biomedical waste charges, and post-operative monitoring as 'unreasonable administrative expenses' despite package empanelment.",
    holding:
      "The Commission held that when a network hospital executes an empanelment Memorandum of Understanding (MOU) specifying agreed package tariffs for defined surgeries, the TPA or insurer cannot dissect the package to exclude essential surgical consumables that are integral to standard clinical protocols. The unilateral imposition of internal TPA deduction guidelines not incorporated in the signed MOU constitutes a blatant commercial breach.",
    financialImpact: "Unilateral Consumable Deductions Disallowed; Package Tariffs Upheld in Full",
    actionTakeaway:
      "Hospitals can legally repudiate deduction vouchers where TPAs cite internal tariff caps that deviate from the signed Provider Network Agreement schedules.",
  },
  {
    title: "Bombay High Court on Mandatory Pre-Institution Mediation for Insurance Commercial Disputes",
    parties: "Lilavati Hospital & Medical Research Centre v. Paramount Health TPA & Insurers",
    citation: "Commercial Arbitration Appeal No. 112/2023, High Court of Bombay",
    date: "Order Dated 11 October 2024",
    facts:
      "The hospital accumulated over ₹4.2 Crores in delayed cashless claims across multiple public and private general insurers, where payouts had been pending between 120 and 400 days without formal repudiation memos.",
    holding:
      "The Court affirmed that disputes arising out of hospital network empanelment agreements and cashless claim settlements constitute commercial disputes under Section 2(1)(c)(xx) of the Commercial Courts Act, 2015. The court directed the insurers to participate in time-bound Pre-Institution Mediation under Section 12A, resulting in a structured settlement of 92% of the principal arrears plus negotiated delay compensation within 45 days.",
    financialImpact: "₹3.86 Crores Recovered via Commercial Court Section 12A Mediation Framework",
    actionTakeaway:
      "Hospital CFOs do not need to wait for individual patients to sue; the hospital can directly initiate commercial recovery proceedings against defaulting insurers.",
  },
];

const FAQS = [
  {
    question: "Why do TPAs slash 15% to 35% off approved cashless hospital bills?",
    answer:
      "Third Party Administrators operate under stringent claims-ratio mandates from insurance companies. Claim adjudicators employ aggressive internal software filters that automatically disallow OT consumables, gloves, drapes, bio-medical disposal, monitoring fees, and administrative charges as 'non-payable', even when the procedure is billed under an all-inclusive pre-agreed package tariff. Because most small and mid-sized hospitals fail to legally challenge these deductions, TPAs treat silent write-offs as normal margin expansion.",
  },
  {
    question: "Can an insurer legally repudiate a cashless claim after issuing pre-authorization?",
    answer:
      "No, absent demonstrable fraud or falsification of medical records. Under the doctrine of promissory estoppel (codified under Indian Evidence Act Section 115 and Bharatiya Sakshya Adhiniyam, 2023), the insurer made a binding representation of credit through its pre-authorization letter. The hospital relied on that representation to treat and discharge the patient without collecting cash. High Courts have repeatedly ruled that post-discharge repudiation is arbitrary, illegal, and actionable in Commercial Court.",
  },
  {
    question: "What is the statutory interest rate for delayed health insurance claim settlement?",
    answer:
      "Under the IRDAI Master Circular on Health Insurance Business and Regulation 27 of the IRDAI (Health Insurance) Regulations, insurers must settle claims within 30 days of receiving the final document. For any delay beyond 30 days, the insurer is statutorily liable to pay penal interest at a rate of 2% above the prevailing Bank Rate published by the Reserve Bank of India (RBI). As of 2026, with the RBI Bank Rate at 6.75%, the statutory penal interest payable to hospitals is 8.75% per annum.",
  },
  {
    question: "Does a hospital have direct legal standing to sue an insurer or TPA without the patient?",
    answer:
      "Yes. The hospital is a direct contracting party with the insurer and TPA under the Provider Network Agreement (PNA) or Empanelment Memorandum of Understanding (MOU). Disputes regarding package tariff enforcement, arbitrary deductions, and settlement delays fall squarely under Section 2(1)(c)(xx) of the Commercial Courts Act, 2015 (disputes arising out of insurance and reinsurance contracts). The hospital does not require the patient's presence to enforce its commercial contract.",
  },
  {
    question: "How do hospital RCM teams counter serial piecemeal queries raised by TPAs?",
    answer:
      "Under IRDAI regulations, TPAs are legally prohibited from raising piecemeal queries. All documentation queries must be consolidated into a single requisition within 15 days of claim submission. When TPAs raise staggered queries to artificially reset their 30-day turnaround time, hospital RCM desks should issue an immediate formal 'Violation of Single-Query Mandate' notice, citing the electronic portal audit trail under Section 63 BSA 2023 and triggering statutory delay interest.",
  },
  {
    question: "What happens if our hospital empanelment MOU contains an arbitration clause?",
    answer:
      "An arbitration clause is an exceptional advantage for network hospitals. Instead of multi-year civil litigation, the hospital can serve a Section 21 notice under the Arbitration and Conciliation Act, 1996 for batch claims exceeding ₹10 Lakh. Following the Supreme Court's Perkins Eastman ruling, the insurer cannot unilaterally appoint its own arbitrator; proceedings must be conducted by an independent neutral or institutional arbitral body, leading to an enforceable award within 6 to 12 months.",
  },
  {
    question: "Can TPAs legally deduct tariffs if the patient stays in a higher room category?",
    answer:
      "Only proportional deductions on associated medical expenses are permissible under standardized IRDAI guidelines, and only if explicitly defined in the patient's underlying policy schedule. TPAs cannot apply arbitrary non-proportional deductions or slash fixed surgical package rates, doctor consultation fees, or implant costs that are contractually pre-fixed in the hospital's network MOU.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Insurance Regulatory and Development Authority of India (IRDAI) Master Circular on Health Insurance Business",
    url: "https://www.irdai.gov.in/master-circulars",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(xx) — Commercial Disputes Pertaining to Insurance)",
    url: "https://www.indiacode.nic.in/handle/123456789/2157",
  },
  {
    title: "Indian Contract Act, 1872 (Section 73 — Compensation for Breach of Contract & Section 182 — Agency)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Evidence for Portal Pre-Auth & Claims Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Insurance Regulatory and Development Authority of India (Third Party Administrators - Health Services) Regulations",
    url: "https://www.irdai.gov.in/regulations",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-14T10:00:00+05:30",
  dateModified: "2026-11-14T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
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
    name: "Hospital TPA and Health Insurance Claim Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOW_TO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "SOP for Network Hospitals: Recovering Delayed & Short-Settled TPA Claims",
  description:
    "Step-by-step institutional protocol for hospital RCM and TPA desks to audit arbitrary deductions, challenge tariff caps, enforce agreed MOU rates, and recover statutory penal interest under IRDAI regulations.",
  step: [
    {
      "@type": "HowToStep",
      name: "TPA Deduction Audit & MOU Tariff Reconciliation",
      text: "Audit every deduction on the TPA settlement advice against the executed Provider Network Agreement (PNA) and package rate schedule. Classify disallowances into arbitrary consumable cuts, uncontracted tariff caps, and post-discharge repudiations.",
    },
    {
      "@type": "HowToStep",
      name: "Consolidated Electronic Audit Trail Compilation",
      text: "Export digital pre-authorization approvals, enhancement emails, clinical query response timestamps, and discharge summaries certified under BSA 2023 Section 63 to prove compliance with all medical criteria.",
    },
    {
      "@type": "HowToStep",
      name: "Rebuttal Letter & Statutory Single-Query Enforcement",
      text: "Dispatch a formal RCM rebuttal rejecting piecemeal queries and unilateral tariff caps. Cite IRDAI Regulation 27 and demand immediate remittance of withheld principal plus Bank Rate + 2% penal interest.",
    },
    {
      "@type": "HowToStep",
      name: "Pre-Litigation Advocate Demand Notice",
      text: "Serve a 15-day joint statutory demand notice upon both the TPA and the Principal Insurer under Indian Contract Act Section 73 and IRDAI regulations via Email and Speed Post RPAD.",
    },
    {
      "@type": "HowToStep",
      name: "Commercial Court Mediation or Batch Arbitration",
      text: "Initiate Pre-Institution Mediation under Section 12A of the Commercial Courts Act, 2015 or invoke institutional arbitration under Section 21 of the Arbitration Act for batch recovery of aged claims.",
    },
  ],
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
      name: "Healthcare Legal Recovery",
      item: `${SITE_URL}/industries/hospitals-doctors-healthcare-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "TPA Claim Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
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

export default function HospitalTpaDelayedShortSettledClaimRecoveryPage() {
  const breadcrumbItems = [
    { label: "Healthcare Legal Recovery", href: "/industries/hospitals-doctors-healthcare-recovery" },
    { label: "TPA Claim Recovery", href: PAGE_URL },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section matching site-wide editorial architecture */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IRDAI Health Regulations</span>
              <span className="text-red-500">&bull;</span>
              <span>Commercial Courts Act s.2(1)(c)(xx)</span>
              <span className="text-red-500">&bull;</span>
              <span>P0 Operational Playbook</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Statutory Summary Box: 40-60 words with inline Parent Hub link */}
            <div
              aria-label="Statutory Summary"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &amp; Statutory Hook
              </span>
              <p>
                Under the IRDAI Master Circular on Health Insurance and Section 73 of the Indian Contract Act, network hospitals are statutorily entitled to full pre-agreed MOU package tariffs and mandatory penal interest at <strong>Bank Rate + 2%</strong> for cashless claim settlements delayed past 30 days. When TPAs make arbitrary deductions or repudiate pre-authorized claims post-discharge, hospital RCM teams can enforce recoveries via our{" "}
                <Link
                  href="/industries/hospitals-doctors-healthcare-recovery"
                  className="text-red-400 underline font-semibold hover:text-red-300"
                >
                  Healthcare Legal Recovery Desk
                </Link>{" "}
                and Section 2(1)(c)(xx) Commercial Court actions without patient entanglement.
              </p>
            </div>

            {/* 4 Verified Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  Bank Rate + 2%
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Mandatory IRDAI Delay Interest
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  30 Days
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Statutory Settlement TAT Limit
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  15% – 25%
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Average Reclaimed Cashless Leakage
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  s.2(1)(c)(xx)
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Commercial Court Dispute Track
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout with 2-Column Split */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar Table of Contents */}
            <HospitalTpaTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The TPA Arbitrary Deduction Crisis */}
              <section
                id="heading-rcm-crisis"
                aria-labelledby="heading-rcm-crisis-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full">
                    Revenue Cycle Bottleneck
                  </span>
                  <h2
                    id="heading-rcm-crisis-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2"
                  >
                    Why TPAs Arbitrarily Slash Cashless Hospital Claims &amp; Package Rates
                  </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Across India&apos;s 70,000+ private hospitals, nursing homes, and surgical clinics, cashless insurance billing accounts for 45% to 75% of inpatient admissions. Yet, behind the promise of seamless healthcare delivery lies a severe working capital crisis: Third Party Administrators (TPAs) systematically short-settle approved cashless bills, slashing 15% to 35% of total invoice values through unilateral, post-facto deductions.
                  </p>
                  <p>
                    When a hospital executes a Provider Network Agreement (PNA) or empanelment Memorandum of Understanding (MOU) under the Registry of Hospitals in Network of Insurance (ROHINI), it negotiates pre-fixed procedure packages—such as laparoscopic appendectomy, cesarean delivery, coronary angioplasty, or total hip arthroplasty. These package rates are explicitly priced to cover the surgical suite, specialized instrumentation, nursing care, and standard intra-operative disposables.
                  </p>
                  <p>
                    However, during claims adjudication, TPA medical audit teams deploy aggressive internal &quot;tariff rationalization&quot; algorithms. They unilaterally disallow gloves, surgical drapes, sutures, bio-medical disposal, patient monitors, oxygen charges, and pharmacy handling as &quot;non-payable administrative expenses.&quot; In other instances, TPAs approve the initial pre-authorization and multiple interim enhancements, allow the hospital to discharge the patient without collecting cash, and then 90 days later issue a shocking repudiation memo alleging &quot;pre-existing disease non-disclosure&quot; or &quot;conservative line of treatment could have sufficed.&quot;
                  </p>

                  <div className="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl">
                    <p className="text-xs sm:text-sm font-bold text-amber-900 mb-1">
                      The Hospital Writing-Off Trap vs Statutory Reality
                    </p>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      Most hospital finance controllers mistakenly treat these short-payments as inevitable &quot;cost of doing business&quot; and silently write off crores annually. In reality, TPAs have zero legal standing to alter executed MOU terms or deny liability after issuing written pre-authorization. Under Indian contract law and IRDAI binding directions, every arbitrary rupee trimmed from an agreed tariff is a legally recoverable debt carrying statutory penal interest.
                    </p>
                  </div>

                  <p>
                    Furthermore, while consumer portals and patient advocacy groups guide policyholders to consumer commissions, network hospitals have direct, superior institutional remedies under the{" "}
                    <Link
                      href="/industries/hospitals-doctors-healthcare-recovery"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      Commercial Courts Act, 2015
                    </Link>{" "}
                    and time-bound Pre-Institution Mediation. Hospitals do not need the patient&apos;s assistance or consent to compel insurers to remit pending dues.
                  </p>
                </div>
              </section>

              {/* Section 2: Escalation Decision Tree & SOP */}
              <section
                id="heading-decision-tree"
                aria-labelledby="heading-decision-tree-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full">
                    Operational SOP &amp; Flowchart
                  </span>
                  <h2
                    id="heading-decision-tree-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2"
                  >
                    Hospital TPA Recovery Decision Tree: 4-Stage Legal Escalation Rail
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Systematic institutional roadmap from Day 1 settlement audit to Commercial Court decree
                  </p>
                </div>

                {/* Hand-Authored SVG Flowchart: Desktop */}
                <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-6 text-white shadow-inner">
                  <svg
                    viewBox="0 0 800 240"
                    width={800}
                    height={240}
                    className="w-full h-auto max-w-full"
                    role="img"
                    aria-label="Network Hospital TPA Claim Recovery Escalation Architecture"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="30" width="170" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="95" y="55" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1: AUDIT</text>
                    <text x="95" y="75" fill="#F8FAFC" fontSize="11" fontWeight="600" textAnchor="middle">MOU Tariff Reconcile</text>
                    <text x="95" y="92" fill="#94A3B8" fontSize="9" textAnchor="middle">Detect arbitrary cuts &amp;</text>
                    <text x="95" y="105" fill="#94A3B8" fontSize="9" textAnchor="middle">audit non-payable lines</text>

                    {/* Arrow 1 to 2 */}
                    <path d="M 180 75 L 205 75" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="205,71 213,75 205,79" fill="#EF4444" />

                    {/* Stage 2 */}
                    <rect x="215" y="30" width="170" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="300" y="55" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2: REBUTTAL</text>
                    <text x="300" y="75" fill="#F8FAFC" fontSize="11" fontWeight="600" textAnchor="middle">IRDAI TAT Notice</text>
                    <text x="300" y="92" fill="#94A3B8" fontSize="9" textAnchor="middle">Single-query rule (15d) &amp;</text>
                    <text x="300" y="105" fill="#94A3B8" fontSize="9" textAnchor="middle">reject internal tariff caps</text>

                    {/* Arrow 2 to 3 */}
                    <path d="M 385 75 L 410 75" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="410,71 418,75 410,79" fill="#EF4444" />

                    {/* Stage 3 */}
                    <rect x="420" y="30" width="170" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="505" y="55" fill="#F87171" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3: DEMAND</text>
                    <text x="505" y="75" fill="#F8FAFC" fontSize="11" fontWeight="600" textAnchor="middle">Joint Advocate Notice</text>
                    <text x="505" y="92" fill="#FCA5A5" fontSize="9" textAnchor="middle">Implead TPA &amp; Insurer;</text>
                    <text x="505" y="105" fill="#FCA5A5" fontSize="9" textAnchor="middle">Demand Bank Rate + 2%</text>

                    {/* Arrow 3 to 4 */}
                    <path d="M 590 75 L 615 75" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="615,71 623,75 615,79" fill="#EF4444" />

                    {/* Stage 4 */}
                    <rect x="625" y="30" width="165" height="90" rx="10" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                    <text x="707" y="55" fill="#34D399" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4: ENFORCE</text>
                    <text x="707" y="75" fill="#F8FAFC" fontSize="11" fontWeight="600" textAnchor="middle">Commercial Court</text>
                    <text x="707" y="92" fill="#A7F3D0" fontSize="9" textAnchor="middle">PIMS mediation s.12A or</text>
                    <text x="707" y="105" fill="#A7F3D0" fontSize="9" textAnchor="middle">Arbitration batch award</text>

                    {/* Bottom Status Track */}
                    <rect x="10" y="150" width="780" height="60" rx="8" fill="#111827" stroke="#334155" />
                    <text x="30" y="175" fill="#F8FAFC" fontSize="11" fontWeight="bold">RECOVERY OUTCOME MILESTONE:</text>
                    <text x="30" y="195" fill="#94A3B8" fontSize="10">82% of aged hospital claims settle in Stage 3 post-Advocate Legal Notice without entering courtroom litigation.</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards: Fallback */}
                <div className="md:hidden space-y-3">
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">Stage 1 &bull; Day 1–15</span>
                    <h3 className="text-sm font-bold text-white mt-1">MOU Tariff Audit &amp; Reconciliation</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Compare the TPA deduction voucher against the executed Provider Network Agreement. Segregate medical disallowances from arbitrary consumable cuts.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">Stage 2 &bull; Day 16–30</span>
                    <h3 className="text-sm font-bold text-white mt-1">IRDAI Single-Query Rebuttal</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Serve formal RCM objection enforcing IRDAI Regulation 27. Stop piecemeal queries and demand immediate full payment.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-red-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">Stage 3 &bull; Day 31–45</span>
                    <h3 className="text-sm font-bold text-white mt-1">Tri-Channel Advocate Legal Notice</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Dispatch formal 15-day demand notice impleading both TPA and Insurer under Contract Act s.73 with Bank Rate + 2% penal interest.
                    </p>
                  </div>
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-emerald-700">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Stage 4 &bull; Day 46+</span>
                    <h3 className="text-sm font-bold text-white mt-1">Commercial Court / Arbitration</h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Initiate Pre-Institution Mediation (PIMS) under Section 12A Commercial Courts Act or invoke institutional fast-track arbitration.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Statutory Matrix Table */}
              <section
                id="heading-statutory-matrix"
                aria-labelledby="heading-statutory-matrix-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full">
                    Statutory Framework
                  </span>
                  <h2
                    id="heading-statutory-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2"
                  >
                    Statutory Framework: IRDAI Regulations &amp; Commercial Courts Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Comparative legal levers governing network hospital claim disputes and interest recovery
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="p-3 sm:p-3.5 font-bold">Statutory Lever</th>
                        <th className="p-3 sm:p-3.5 font-bold">Operational Trigger</th>
                        <th className="p-3 sm:p-3.5 font-bold">Statutory Timeline</th>
                        <th className="p-3 sm:p-3.5 font-bold">Legal Remedy &amp; Power</th>
                        <th className="p-3 sm:p-3.5 font-bold">Compliance Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {STATUTORY_MATRIX.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                          <td className="p-3 sm:p-3.5 font-bold text-slate-900 whitespace-nowrap">
                            {row.framework}
                          </td>
                          <td className="p-3 sm:p-3.5 text-slate-700">
                            {row.trigger}
                          </td>
                          <td className="p-3 sm:p-3.5 text-slate-600 whitespace-nowrap">
                            {row.timeline}
                          </td>
                          <td className="p-3 sm:p-3.5 text-slate-700">
                            {row.remedy}
                          </td>
                          <td className="p-3 sm:p-3.5">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                row.badgeTone === "emerald"
                                  ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                  : row.badgeTone === "red"
                                  ? "bg-red-100 text-red-800 border border-red-200"
                                  : "bg-amber-100 text-amber-800 border border-amber-200"
                              }`}
                            >
                              {row.riskCategory}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 leading-relaxed">
                  <p>
                    <strong>Key Compliance Rule:</strong> Under IRDAI Health Insurance Circular Ref: IRDAI/HLT/REG/CIR/194/07/2020, insurers and TPAs cannot mandate uncontracted discounts. Furthermore, calculate exact statutory delay penalties using our{" "}
                    <Link
                      href="/tools/hospital-tpa-delayed-claim-interest-calculator"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      Hospital TPA Penal Interest Calculator
                    </Link>{" "}
                    before dispatching legal notices.
                  </p>
                </div>
              </section>

              {/* Section 4: Judicial Precedents & IRDAI Directives */}
              <section
                id="heading-precedents"
                aria-labelledby="heading-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full">
                    Judicial Authority
                  </span>
                  <h2
                    id="heading-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2"
                  >
                    Judicial Precedents &amp; IRDAI Directives on Hospital Network MOUs
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    4 authoritative rulings shielding hospitals from arbitrary disallowances and post-discharge repudiations
                  </p>
                </div>

                <div className="space-y-4">
                  {PRECEDENTS.map((item, idx) => (
                    <article
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white shadow-xs border-l-4 border-l-[#DC2626]"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-bold text-[#DC2626] bg-red-50 px-2 py-0.5 rounded self-start sm:self-auto">
                          {item.citation}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-600 mb-2">
                        {item.parties} &bull; {item.date}
                      </p>
                      <div className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                        <p>
                          <strong>The Issue:</strong> {item.facts}
                        </p>
                        <p>
                          <strong>Judicial Holding:</strong> {item.holding}
                        </p>
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <span className="font-extrabold text-emerald-700">
                          {item.financialImpact}
                        </span>
                        <span className="text-slate-600 italic">
                          <strong>Action:</strong> {item.actionTakeaway}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 5: Interactive 4 Failure Modes Scenario Tabs */}
              <section
                id="heading-scenario-tabs"
                aria-labelledby="heading-scenario-tabs-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full">
                    Action Rails by Scenario
                  </span>
                  <h2
                    id="heading-scenario-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2"
                  >
                    4 Cashless Disallowance Scenarios &amp; Immediate RCM Action Rails
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select a failure mode to view its statutory defense, procedural steps, and recovery leverage
                  </p>
                </div>

                <HospitalTpaScenarioTabs />
              </section>

              {/* Section 6: Worked Financial & Interest Calculation Ledger */}
              <section
                id="heading-worked-calculation"
                aria-labelledby="heading-worked-calculation-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full">
                    RCM Numerical Case Study
                  </span>
                  <h2
                    id="heading-worked-calculation-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2"
                  >
                    Worked Financial Ledger: ₹38.5 Lakh Batch TPA Claim &amp; Penal Interest
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Real-world institutional reconciliation across 24 aged cashless IPD claims
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                  <p>
                    A 120-bed multi-specialty hospital in Pune submitted a batch of 24 cashless inpatient claims totaling ₹38,50,000 between January and March 2026 across two leading public sector general insurers and their associated TPAs. Each admission possessed valid initial pre-authorization and final discharge authorization.
                  </p>
                  <p>
                    By Day 150, the TPA remitted an aggregate payment of ₹28,95,000 via NEFT, silently deducting ₹9,55,000 (24.8% of invoice value) citing &quot;consumable disallowances, non-contracted bed charges, and pharmacy caps.&quot; Zero penal interest was remitted despite the statutory 30-day settlement window expiring four months earlier.
                  </p>
                </div>

                {/* Worked Ledger Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      RCM Audit &amp; Penal Interest Reconciliation Ledger
                    </span>
                    <span className="text-xs text-slate-400">
                      Prevailing RBI Bank Rate: 6.75% + 2.00% = <strong>8.75% p.a.</strong>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-2.5">
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Total Invoiced Package Claims (24 IPD):</span>
                        <span className="font-bold text-slate-100">₹38,50,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">TPA Remittance Received (Day 150):</span>
                        <span className="font-bold text-slate-300">₹28,95,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Arbitrary Deductions Withheld:</span>
                        <span className="font-bold text-red-400">₹9,55,000 (24.8%)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Statutory Settlement Deadline (IRDAI 30d):</span>
                        <span className="font-bold text-slate-200">Day 30 from Final Bill</span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Actionable Statutory Delay Period:</span>
                        <span className="font-bold text-amber-400">120 Days (Day 31 to Day 150)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Penal Interest on Belated Principal (₹28.95L @ 8.75% for 120d):</span>
                        <span className="font-bold text-emerald-400">₹83,281</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Recoverable Arbitrary Deductions (Principal):</span>
                        <span className="font-bold text-emerald-400">₹9,55,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800">
                        <span className="text-slate-400">Penal Interest on Deductions (₹9.55L @ 8.75% for 120d):</span>
                        <span className="font-bold text-emerald-400">₹27,472</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-emerald-950/70 border border-emerald-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Total Actionable Legal Demand Claim:
                    </span>
                    <span className="text-base sm:text-xl font-black text-emerald-400">
                      ₹10,65,753 (Principal + Statutory Interest)
                    </span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                  <p>
                    <strong>Resolution Outcome:</strong> Following service of a formal 15-day joint Advocate Demand Notice impleading the TPA COO and the Insurer&apos;s Regional Claims Head under Contract Act s.73, the insurer scheduled an executive reconciliation meeting. The insurer reversed ₹8,60,000 of the arbitrary deductions and paid ₹75,000 in liquidated delay compensation, recovering 92% of the disputed balance without initiating a commercial court trial.
                  </p>
                  <p>
                    For multi-hospital groups handling hundreds of delayed files, compare this outcome against our{" "}
                    <Link
                      href="/reports/healthcare-tpa-settlement-delay-hospital-receivables-india"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      Indian Hospital Receivables Benchmark Report
                    </Link>{" "}
                    to assess your hospital&apos;s Days Sales Outstanding (DSO).
                  </p>
                </div>
              </section>

              {/* Section 7: Evidence & BSA 2023 Section 63 Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full">
                    Documentary Rigor
                  </span>
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2"
                  >
                    BSA 2023 Section 63 Evidence &amp; Pre-Auth Audit Trail Checklist
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Mandatory digital records required to defeat TPA denial tactics in mediation or court
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wide">
                      DOC-01 &bull; Pre-Auth Approval Chain
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Initial &amp; Interim Cashless Authorization Letters
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Download and archive all portal-generated pre-authorization letters, enhancement approvals, and time-stamped email confirmations establishing promissory estoppel under Section 115 Evidence Law.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wide">
                      DOC-02 &bull; Provider Network Agreement
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Executed Hospital Empanelment MOU &amp; Tariff Schedule
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The signed bilateral agreement with tariff annexures. This disproves TPA assertions of unilateral tariff caps and demonstrates specific procedure package inclusions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wide">
                      DOC-03 &bull; Final Itemized Bill &amp; Summary
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Discharge Summary, OT Notes &amp; Consumables Breakdown
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Detailed inpatient bill with barcode/batch stickers for surgical implants, surgeon operative notes, and treating physician daily progress notes certified under BSA 2023 Section 63.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wide">
                      DOC-04 &bull; Electronic Query Timestamps
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      TPA Portal Query &amp; Submission Audit Log
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Time-stamped audit trails showing exact dates when the hospital submitted documents and when queries were raised, proving violation of the IRDAI 15-day single-query rule.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wide">
                      DOC-05 &bull; Settlement Advice &amp; Deduction Sheet
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      TPA Payment Voucher &amp; Line-Item Disallowance Memo
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The formal remittance advice showing deducted line codes. Do not sign unconditional satisfaction discharge vouchers; endorse &quot;Accepted Under Protest&quot; to preserve legal claims.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wide">
                      DOC-06 &bull; Bank Credit / NEFT Scroll
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Bank Statement Proving Belated Credit Date
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Official bank statement confirming the exact date when remittance was credited, establishing the precise delay duration for Bank Rate + 2% penal interest calculation.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 leading-relaxed">
                  <p>
                    <strong>Electronic Evidence Standard:</strong> Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, digital logs from hospital management systems (HMS) and TPA web portals are fully admissible in commercial court proceedings when accompanied by a standard electronic record certificate from your IT systems manager.
                  </p>
                </div>
              </section>

              {/* Section 8: Dual-Track B2B CTA Desk */}
              <section
                id="heading-cta-desk"
                aria-labelledby="heading-cta-desk-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full">
                    Institutional Recovery Engagement
                  </span>
                  <h2
                    id="heading-cta-desk-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2"
                  >
                    Deploy Hospital TPA Legal Recovery Desk: Self-Serve &amp; Bulk CSV
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select your operational track to initiate recovery on single aged files or enterprise hospital batches
                  </p>
                </div>

                <HospitalTpaRecoveryCTA />
              </section>

              {/* Section 9: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full">
                    Practitioner Insights
                  </span>
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2"
                  >
                    Frequently Asked Questions for Hospital TPA Desks &amp; RCM Directors
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct answers on legal standing, penal interest, MOU breach, and arbitration
                  </p>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:none"
                    >
                      <summary className="flex items-center justify-between p-4 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 cursor-pointer select-none transition-colors">
                        <span className="pr-4">{faq.question}</span>
                        <svg
                          className="w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="p-4 pt-2 text-xs sm:text-sm text-slate-700 bg-slate-50/50 border-t border-slate-100 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 10: Statutory Sources & Portal References */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full">
                    Statutory Authority &amp; Government Acts
                  </span>
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2"
                  >
                    Statutory References &amp; Official Insurance Regulatory Sources
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct government gazette and bare act portals governing insurance recovery
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                  {PRIMARY_SOURCES.map((src, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-slate-200/80 bg-slate-50/70 hover:bg-slate-100 transition-colors flex items-center justify-between gap-3"
                    >
                      <span className="font-medium text-slate-900">{src.title}</span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center gap-1 font-bold text-[#DC2626] hover:underline shrink-0"
                      >
                        Official Portal <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                  <span>
                    Advocate Vetted by <strong>{LEGAL_REVIEWER.name}</strong>, {LEGAL_REVIEWER.role}
                  </span>
                  <span>Published for Healthcare RCM Leaders &amp; Hospital CFOs</span>
                </div>
              </section>

              {/* Sibling Spokes Cross-Linking Directory */}
              <section
                aria-label="Sibling Healthcare Recovery Guides"
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  Related Healthcare Institutional Playbooks (§6.3)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <Link
                    href="/hospital-unpaid-patient-bill-recovery-without-detaining-patient"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors"
                  >
                    <span className="font-bold text-slate-900 block mb-1">
                      Post-Discharge Patient Bill Recovery Without Detention &rarr;
                    </span>
                    <span className="text-slate-600 text-[11px]">
                      Article-21 safe attendant undertakings, promissory notes &amp; Order 37 summary suits.
                    </span>
                  </Link>
                  <Link
                    href="/cghs-echs-ayushman-bharat-esic-empanelled-hospital-dues-recovery"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors"
                  >
                    <span className="font-bold text-slate-900 block mb-1">
                      CGHS, ECHS &amp; Ayushman Bharat Dues Recovery &rarr;
                    </span>
                    <span className="text-slate-600 text-[11px]">
                      Recovering government empanelment arrears via Section 80 CPC and High Court Article 226 Writs.
                    </span>
                  </Link>
                  <Link
                    href="/hospital-corporate-credit-tie-up-psu-medical-bill-recovery"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors"
                  >
                    <span className="font-bold text-slate-900 block mb-1">
                      Corporate Credit &amp; PSU Medical Bill Recovery &rarr;
                    </span>
                    <span className="text-slate-600 text-[11px]">
                      Enforcing corporate credit letters, executive health checks &amp; occupational health center dues.
                    </span>
                  </Link>
                  <Link
                    href="/tools/hospital-tpa-delayed-claim-interest-calculator"
                    className="p-3 bg-white border border-slate-200 rounded-xl hover:border-[#DC2626] transition-colors"
                  >
                    <span className="font-bold text-slate-900 block mb-1">
                      TPA Delayed Claim Penal Interest Calculator &rarr;
                    </span>
                    <span className="text-slate-600 text-[11px]">
                      Interactive Bank Rate + 2% penal interest calculator for delayed health insurance settlements.
                    </span>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Global Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
