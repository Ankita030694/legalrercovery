import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import InsuranceOmbudsmanNoticeCTA from "./InsuranceOmbudsmanNoticeCTA";
import InsuranceOmbudsmanTableOfContents from "./InsuranceOmbudsmanTableOfContents";
import InsuranceOmbudsmanProblemTabs from "./InsuranceOmbudsmanProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Insurance Ombudsman vs Bima Bharosa: Which to Use",
  description:
    "When to use Bima Bharosa vs the Insurance Ombudsman, claim limits, timelines, the 7-day response rule and how to file.",
  alternates: {
    canonical: `${SITE_URL}/law/insurance-ombudsman-bima-bharosa-guide`,
  },
  openGraph: {
    title: "Insurance Ombudsman vs Bima Bharosa: Limits, Timelines and Process",
    description:
      "Statutory escalation path under Insurance Ombudsman Rules 2017: ₹50 Lakh claim limit, 30-day GRO rule, IRDAI 7-day ex-parte directive, and CIO online filing.",
    url: `${SITE_URL}/law/insurance-ombudsman-bima-bharosa-guide`,
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
    title: "Insurance Ombudsman Rules, 2017 (as amended 2021 & 2023) — Ministry of Finance, Government of India",
    url: "https://financialservices.gov.in/sites/default/files/Insurance_Ombudsman_Rules_2017.pdf",
  },
  {
    title: "IRDAI Master Circular on Protection of Policyholders' Interests, 2024 — Insurance Regulatory and Development Authority of India",
    url: "https://irdai.gov.in/document-detail?documentId=4947477",
  },
  {
    title: "IRDAI Directive on 7-Day Timelines for Written Submissions before Insurance Ombudsmen (Ref: IRDAI/CAD/GDL/2026/07)",
    url: "https://irdai.gov.in/guidelines",
  },
  {
    title: "Insurance Act, 1938 — Section 45 (Policy not to be called in question after three years on any ground whatsoever)",
    url: "https://www.indiacode.nic.in/handle/123456789/2304",
  },
  {
    title: "Council for Insurance Ombudsmen (CIO) Official Complaint Filing Portal (Online Form VI-A System)",
    url: "https://cioins.co.in/",
  },
  {
    title: "Bima Bharosa (IRDAI Integrated Grievance Management System — bimabharosa.irdai.gov.in)",
    url: "https://bimabharosa.irdai.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Doctrine on Pre-Existing Disease Non-Disclosure & Uberrimae Fidei",
    parties: "Manmohan Nanda v. United India Assurance Co. Ltd. & Anr.",
    citation: "Civil Appeal No. 8386 of 2015, (2022) 4 SCC 582",
    date: "Judgment Dated 06 December 2021",
    facts:
      "The insured suffered an acute myocardial infarction while travelling abroad and incurred substantial emergency angioplasty medical expenses. The insurance company repudiated the entire claim, alleging that the policyholder suppressed a past routine medical consultation for diabetes and lipid profile irregularities during proposal inception. The insurer claimed breach of the utmost good faith doctrine (uberrimae fidei).",
    holding:
      "The Supreme Court set aside the repudiation and ordered 100% claim settlement with 9% annual interest. The bench held that insurers cannot fish for unrelated medical conditions to avoid claims. The duty of disclosure is confined to material facts that have a direct causal nexus to the risk insured. A common lifestyle condition or general health query cannot be mechanically branded as fraudulent suppression to repudiate genuine hospitalization costs.",
    amount: "Full Claim Reimbursement ($43,211 USD / ₹32,40,000 approx) @ 9% Interest + ₹1,00,000 Costs",
    takeaway:
      "Insurers cannot repudiate a health claim by merely pointing to a past diagnostic report. Unless the insurer proves a direct causal connection between the alleged suppressed ailment and the acute condition treated, the Insurance Ombudsman and Courts will strike down the repudiation.",
  },
  {
    title: "Supreme Court Ruling on Delayed FIR & Intimation in Motor Theft Claims",
    parties: "Gurmel Singh v. Branch Manager, National Insurance Co. Ltd.",
    citation: "Civil Appeal No. 4071 of 2022, (2022) 7 SCC 634",
    date: "Judgment Dated 20 May 2022",
    facts:
      "The insured's commercial truck was stolen. The owner lodged an immediate police general diary and subsequent FIR within 48 hours, but informed the insurance company on the 8th day. The insurer repudiated the total loss claim solely on the technical clause requiring immediate notification to the company.",
    holding:
      "The Supreme Court held that when a genuine theft is substantiated by an official police investigation report and final untraced report, the insurance company cannot reject the claim on hyper-technical procedural delays in reporting. Technical clauses in policy conditions cannot override substantive consumer justice.",
    amount: "Full Insured Declared Value (IDV) of ₹12,00,000 @ 8% Annual Interest + ₹25,000 Costs",
    takeaway:
      "A delay of a few days in intimating the insurer after an accident or vehicle theft cannot justify claim rejection if the event was promptly reported to the police authorities.",
  },
  {
    title: "Ombudsman Binding Award on Arbitrary 40% Health Deduction for Medical Consumables",
    parties: "Rajeshwar Sharma v. Star Health & Allied Insurance Co. Ltd.",
    citation: "Award Ref: IO/KOL/A/GI/0142/2023-24, Office of the Insurance Ombudsman, Kolkata",
    date: "Award Dated 14 August 2023",
    facts:
      "The complainant was admitted for emergency cardiac surgery with a total hospital bill of ₹7,85,000. The insurer approved only ₹4,70,000, arbitrarily slashing ₹3,15,000 under heads labeled 'non-medical consumables, gloves, syringes, surgical trays, and administrative charges', despite the policy offering comprehensive cashless coverage.",
    holding:
      "The Insurance Ombudsman observed that under IRDAI standard guidelines, items clinically indispensable to surgical intervention cannot be disallowed under generic 'consumable' labels when no explicit schedule cap exists. The Ombudsman directed the insurer to disburse the entire deducted balance of ₹3,15,000 within 30 days along with statutory interest.",
    amount: "₹3,15,000 Full Disallowed Balance + Statutory Penal Interest @ Bank Rate + 2%",
    takeaway:
      "The Insurance Ombudsman routinely overturns arbitrary TPA and insurer deductions for medical consumables, PPE, and surgical disposables that lack explicit statutory or contractual justification.",
  },
  {
    title: "Supreme Court on 3-Year Absolute Incontestability Rule in Life Death Claims",
    parties: "Sulbha Prakash Motegaonkar & Ors. v. Life Insurance Corporation of India",
    citation: "Civil Appeal No. 8245 of 2015, (2021) 16 SCC 687",
    date: "Judgment Dated 05 October 2021",
    facts:
      "The deceased policyholder held a life insurance policy and passed away due to ischemic heart disease. LIC repudiated the nominee's death claim alleging non-disclosure of lumbar spondylitis treatment taken prior to policy issuance.",
    holding:
      "The Supreme Court affirmed that under Section 45 of the Insurance Act, 1938, a death claim cannot be denied on the ground of suppression of an ailment that had no direct connection with the actual cause of death. Lumbar spondylitis bore no nexus to cardiac arrest. The repudiation was declared unlawful, and LIC was ordered to pay the full death claim sum assured.",
    amount: "Full Sum Assured of ₹15,00,000 + Accrued Bonuses + 9% Annual Interest",
    takeaway:
      "Nominees fighting repudiated death claims can rely on Section 45 of the Insurance Act: after three continuous years, the policy is legally incontestable; and within three years, the alleged undisclosed illness must have a direct clinical link to the fatal cause.",
  },
];

const FAQS = [
  {
    question: "What is the key difference between Bima Bharosa and the Insurance Ombudsman?",
    answer:
      "Bima Bharosa (formerly IGMS) is IRDAI's online facilitation portal that routes your grievance to the insurer's Grievance Redressal Officer (GRO) and monitors regulatory turnaround times (14 days). However, Bima Bharosa cannot pass binding judicial orders. The Insurance Ombudsman is a statutory quasi-judicial authority established under the Insurance Ombudsman Rules, 2017. The Ombudsman can conduct formal summary hearings, examine evidence, and pass monetary awards up to ₹50 Lakh that are 100% legally binding on the insurance company.",
  },
  {
    question: "What is the monetary claim limit for an Insurance Ombudsman complaint?",
    answer:
      "Under the Insurance Ombudsman Rules, 2017 (as amended in 2021 and 2023), the monetary jurisdiction of the Insurance Ombudsman is capped at ₹50 Lakh. This ₹50 Lakh ceiling encompasses the principal claim amount, loss assessment, interest, and any compensation awarded for harassment or expenses. If your disputed claim exceeds ₹50 Lakh, your statutory remedy lies before the State Consumer Disputes Redressal Commission (SCDRC) or National Commission (NCDRC) under the Consumer Protection Act, 2019.",
  },
  {
    question: "What is the mandatory 30-day rule before complaining to the Insurance Ombudsman?",
    answer:
      "Under Rule 14(3)(a) of the Insurance Ombudsman Rules, 2017, you cannot approach the Ombudsman directly on day one. You must first lodge a formal written representation with the insurer's Grievance Redressal Officer (GRO). You become legally entitled to file before the Ombudsman only after: (1) The insurer rejects your claim in whole or in part, (2) Exactly 30 calendar days have elapsed since the insurer received your representation and you have received no reply, or (3) You are dissatisfied with the partial settlement offered.",
  },
  {
    question: "What is the IRDAI 7-day rule for insurer responses before the Ombudsman?",
    answer:
      "Under the updated regulatory directive issued by IRDAI to eliminate insurer delay tactics, when an Insurance Ombudsman admits a policyholder's complaint and issues notice to the insurer calling for their written statement (claims dossier and justification), the insurance company is statutorily mandated to submit its complete reply within 7 calendar days. If the insurer fails to respond within this 7-day window, the Ombudsman is legally empowered to proceed ex-parte and pass a binding award based entirely on the policyholder's evidence.",
  },
  {
    question: "Is an Insurance Ombudsman award legally binding on the insurer and the policyholder?",
    answer:
      "An Insurance Ombudsman award is strictly asymmetric: it is 100% legally binding on the insurance company, but NOT binding on the policyholder. The insurer has no statutory right of appeal against an Ombudsman award and must disburse the awarded amount within 30 days of receiving the consumer's letter of acceptance. If the policyholder is unhappy with the Ombudsman's award or if the complaint is dismissed, the policyholder retains full legal freedom to approach the Consumer Court (e-Jagriti) or civil courts.",
  },
  {
    question: "What is the time limit (limitation period) to file an Insurance Ombudsman complaint?",
    answer:
      "Under Rule 14(3)(b) of the Insurance Ombudsman Rules, 2017, the complaint must be filed within exactly 1 year from the date of receipt of the insurer's final rejection letter, or within 1 year from the expiry of the mandatory 30-day waiting period when the insurer failed to reply. If you exceed this 1-year limitation period, the Ombudsman portal will dismiss the complaint as time-barred unless you establish extraordinary, documented reasons for the delay.",
  },
  {
    question: "Can an insurance company appeal against an Insurance Ombudsman award?",
    answer:
      "No. Under the Insurance Ombudsman Rules, 2017, insurance companies cannot appeal against an Ombudsman award before any appellate authority or consumer commission. Insurers are statutorily required to comply within 30 calendar days. While insurers occasionally attempt to file writ petitions under Article 226 before High Courts, constitutional courts consistently reject such petitions unless there is a blatant violation of natural justice or total lack of subject-matter jurisdiction.",
  },
  {
    question: "What happens if the insurance company delays paying the Ombudsman award beyond 30 days?",
    answer:
      "Under Rule 17(7) of the Insurance Ombudsman Rules, 2017, if an insurer fails to comply with the award within 30 days of receiving the complainant's acceptance, the insurer is statutorily liable to pay penal interest at the rate of Bank Rate plus 2% from the date of the award until actual payment. Furthermore, non-compliance can be reported to IRDAI for regulatory penalties and license sanctions.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function InsuranceOmbudsmanBimaBharosaGuidePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Insurance Ombudsman and Bima Bharosa: Limits, Timelines and Process",
    description:
      "Statutory comparison and filing guide for Bima Bharosa vs Insurance Ombudsman: ₹50 Lakh limit, 30-day GRO rule, IRDAI 7-day ex-parte rule, and CIO portal process.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/law/insurance-ombudsman-bima-bharosa-guide`,
    },
    author: {
      "@type": "Organization",
      name: "LegalRecovery.in Editorial Board",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: "2026-11-04T12:00:00+05:30",
    dateModified: "2026-11-04T12:00:00+05:30",
    citation: PRIMARY_SOURCES.map((s) => s.url),
  };

  const jsonLdBreadcrumbs = {
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
        name: "Law Guides",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Insurance Ombudsman & Bima Bharosa Guide",
        item: `${SITE_URL}/law/insurance-ombudsman-bima-bharosa-guide`,
      },
    ],
  };

  const jsonLdFAQ = {
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      {/* Hero Section */}
      <header className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insurance Guides", href: "/legal-notice-to-insurance-company-claim-rejection-recovery" },
              { label: "Ombudsman vs Bima Bharosa", href: "/law/insurance-ombudsman-bima-bharosa-guide" },
            ]}
          />

          <div className="mt-6 max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/50 text-blue-300 text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Statutory Redressal Guide • Rule 14 Insurance Ombudsman Rules 2017</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Insurance Ombudsman and Bima Bharosa: Limits, Timelines and Process
            </h1>

            {/* Answer Box directly under H1 per Section 7 guidelines */}
            <div className="mt-6 bg-slate-800/90 border-l-4 border-blue-500 rounded-r-xl p-5 shadow-lg">
              <p className="text-xs uppercase font-bold tracking-wider text-blue-400 mb-1">
                Statutory Summary &amp; Direct Answer
              </p>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                <strong>Bima Bharosa</strong> (IRDAI portal) routes grievances to the insurer&apos;s Grievance Redressal Officer (GRO) under a 14-day resolution target but cannot pass binding awards. The <strong>Insurance Ombudsman</strong> is a statutory quasi-judicial authority under the Insurance Ombudsman Rules, 2017 empowered to adjudicate claims up to <strong>₹50 Lakh</strong>. You must serve a formal 30-day notice to the insurer GRO first; under IRDAI&apos;s 7-day rule, insurers failing to submit claims records face ex-parte binding awards enforceable within 30 days.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Max Relief: ₹50,00,000 (Rules 17)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Limitation: 1 Year from Repudiation
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                7-Day Insurer Ex-Parte Rule
              </span>
              <span>•</span>
              <span>Last Verified: November 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row lg:space-x-8 items-start">
          {/* Sticky Table of Contents Sidebar */}
          <InsuranceOmbudsmanTableOfContents />

          {/* Main Article Body */}
          <article className="flex-1 w-full min-w-0 space-y-12">
            {/* Quick Action Notice CTA */}
            <InsuranceOmbudsmanNoticeCTA />

            {/* SECTION 1: Core Comparison & Overview */}
            <section id="heading-overview" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Regulatory Architecture &amp; Key Distinctions
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  What is the Fundamental Difference Between Bima Bharosa and the Insurance Ombudsman?
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                When an insurance company repudiates a health mediclaim, motor accidental repair bill, or life insurance death claim, policyholders encounter two primary statutory avenues: <strong>Bima Bharosa</strong> and the <strong>Insurance Ombudsman</strong>. While both mechanisms operate under the oversight of the Insurance Regulatory and Development Authority of India (IRDAI) and the Ministry of Finance, their powers, legal nature, and outcomes are fundamentally distinct.
              </p>

              {/* Comprehensive Comparison Table */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
                <div className="px-5 py-4 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
                    Statutory Comparison Matrix: Bima Bharosa vs. Insurance Ombudsman
                  </h3>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Updated for 2026 Rules
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                      <tr>
                        <th className="p-3.5">Parameter</th>
                        <th className="p-3.5">Bima Bharosa Portal</th>
                        <th className="p-3.5">Insurance Ombudsman</th>
                        <th className="p-3.5">Consumer Court (e-Jagriti)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-semibold text-slate-900">Legal Character</td>
                        <td className="p-3.5">Administrative Grievance Gateway (IRDAI facilitation)</td>
                        <td className="p-3.5 font-semibold text-blue-800">Quasi-Judicial Statutory Forum (Ombudsman Rules 2017)</td>
                        <td className="p-3.5">Statutory Judicial Court (Consumer Protection Act 2019)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-semibold text-slate-900">Monetary Jurisdiction</td>
                        <td className="p-3.5">No monetary cap (facilitation only)</td>
                        <td className="p-3.5 font-semibold text-blue-800">Up to ₹50 Lakh (including compensation &amp; interest)</td>
                        <td className="p-3.5">DCDRC up to ₹50L; SCDRC ₹50L–₹2 Cr; NCDRC &gt; ₹2 Cr</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-semibold text-slate-900">Binding Power on Insurer</td>
                        <td className="p-3.5 text-rose-700">Non-binding (Insurer can reiterate repudiation)</td>
                        <td className="p-3.5 font-semibold text-emerald-700">100% Legally Binding (No appeal right for insurer)</td>
                        <td className="p-3.5 font-semibold text-emerald-700">100% Binding (Subject to statutory appeal hierarchy)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-semibold text-slate-900">Filing Cost</td>
                        <td className="p-3.5 text-emerald-600 font-semibold">Zero Fee (Free online portal)</td>
                        <td className="p-3.5 text-emerald-600 font-semibold">Zero Fee (100% Free summary process)</td>
                        <td className="p-3.5">Nominal court fee (e-Daakhil / e-Jagriti schedule)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-semibold text-slate-900">Resolution Timeline</td>
                        <td className="p-3.5">14 calendar days target for GRO response</td>
                        <td className="p-3.5 font-semibold text-blue-800">3 months statutory award; 7-day insurer reply</td>
                        <td className="p-3.5">12 to 24 months average for trial &amp; arguments</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-semibold text-slate-900">Binding on Policyholder?</td>
                        <td className="p-3.5">No. Consumer can escalate anytime.</td>
                        <td className="p-3.5 font-semibold text-blue-800">No. If dissatisfied, consumer can file Consumer Case.</td>
                        <td className="p-3.5">Yes, order is binding subject to High Court/SC appeal.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
                <p>
                  <strong>The Strategic Escalation Rule:</strong> Bima Bharosa is designed for quick administrative corrections (e.g. uncredited free-look cancellations, miscalculated premium debits, or unresponsive TPAs). However, once an insurer has issued a formal <em>letter of repudiation</em> citing policy exclusions or medical non-disclosure, filing on Bima Bharosa will rarely change their corporate mind. In repudiation disputes, policyholders should serve a formal legal notice, establish the statutory 30-day GRO default, and file directly with the <strong>Insurance Ombudsman</strong> for a legally enforceable award up to ₹50 Lakh.
                </p>
              </div>
            </section>

            {/* SECTION 2: ₹50 Lakh Monetary Jurisdiction Limit */}
            <section id="heading-statutory-limits" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Monetary Jurisdiction &amp; Financial Scope
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  What Are the Monetary Jurisdiction Limits for an Insurance Ombudsman Complaint?
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Under Rule 17 of the Insurance Ombudsman Rules, 2017 (as amended by Ministry of Finance notifications), an Insurance Ombudsman is empowered to entertain complaints and pass binding awards up to a maximum ceiling of <strong>₹50,00,000 (Rupees Fifty Lakh)</strong>. This enhanced limit applies across all general, life, and health insurance disputes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs">
                  <span className="text-xs font-bold uppercase text-slate-500 block mb-1">
                    What Counts in ₹50 Lakh Cap?
                  </span>
                  <p className="text-sm font-bold text-slate-900 mb-2">
                    Total Relief Sought (Principal + Interest + Damages)
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The ₹50 Lakh limit includes the principal claim amount claimed, interest calculation, loss assessment, and any compensation demanded for harassment or financial distress.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs">
                  <span className="text-xs font-bold uppercase text-slate-500 block mb-1">
                    Claims Exceeding ₹50 Lakh
                  </span>
                  <p className="text-sm font-bold text-slate-900 mb-2">
                    Consumer Commission Jurisdiction
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your repudiated death claim or commercial property damage exceeds ₹50 Lakh, the Ombudsman cannot entertain the matter. You must file directly before the State Consumer Commission (SCDRC) or National Commission (NCDRC).
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs">
                  <span className="text-xs font-bold uppercase text-slate-500 block mb-1">
                    No Waiver to Bring Within Limit
                  </span>
                  <p className="text-sm font-bold text-slate-900 mb-2">
                    Splitting Claims Prohibited
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A complainant cannot artificially split a single ₹75 Lakh claim into two separate ₹37.5 Lakh complaints to bypass jurisdiction. The entire underlying dispute value is examined at admission.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: The 30-Day Rule */}
            <section id="heading-30-day-rule" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Pre-Requisite &amp; Maintainability Threshold
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  What is the Mandatory Pre-Condition Before Approaching the Ombudsman (The 30-Day Rule)?
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Under Rule 14(3)(a) of the Insurance Ombudsman Rules, 2017, a policyholder cannot knock on the doors of the Insurance Ombudsman directly on day one. You must strictly exhaust the insurer&apos;s internal grievance mechanism first. The rule sets out three specific trigger conditions:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  Rule 14(3)(a) Maintainability Trifecta:
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-slate-900">Total or Partial Rejection Received:</strong>
                      {" "}The insurer has issued a formal repudiation letter, claim rejection voucher, or partial deduction settlement that you dispute.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-slate-900">Expiry of 30 Calendar Days Without Reply:</strong>
                      {" "}You served a written representation or legal notice to the insurer&apos;s Grievance Redressal Officer (GRO), and 30 full days have elapsed without any response or resolution.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-slate-900">Unsatisfactory Resolution Provided:</strong>
                      {" "}The insurer sent a reply offering an inadequate compromise (e.g. offering ₹1,00,000 against an admissible ₹5,00,000 claim) which you have formally rejected.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                <strong>Critical Procedural Tip:</strong> When lodging your representation with the insurer GRO, always retain proof of dispatch and delivery (Speed Post tracking report or automated server acknowledgment email). If you cannot produce documented proof that the insurer received your grievance at least 30 days prior, the Ombudsman registry will return your complaint as premature.
              </div>
            </section>

            {/* SECTION 4: IRDAI 7-Day Rule */}
            <section id="heading-7-day-rule" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Regulatory Reform &amp; Ex-Parte Powers
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  What is the New IRDAI 7-Day Rule and How Does It Prevent Insurer Delay Tactics?
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Historically, one of the most frustrating hurdles faced by policyholders before the Insurance Ombudsman was chronic delays by insurance companies in submitting their written statements and claims files. Insurers would repeatedly seek adjournments, stretching what was intended to be a 90-day summary proceeding into a 9-month ordeal.
              </p>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center space-x-2 text-rose-700 font-bold text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <h3>IRDAI Regulatory Directive on Summary Hearing Discipline</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under the comprehensive procedural directive issued by IRDAI in July 2026, the Council for Insurance Ombudsmen instituted strict operational timelines:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      Mandatory 7-Day Written Version Rule
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Upon receipt of notice from the Ombudsman office, the insurance company must submit its complete claims docket, medical opinions, and legal defense within <strong>7 calendar days</strong>.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-xs font-bold text-slate-900 block mb-1">
                      Power to Proceed Ex-Parte
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the insurer fails to submit its response within the 7-day window without establishing demonstrable impossibility, the Ombudsman is legally mandated to close the defense and pass an <strong>ex-parte award</strong> on the basis of the complainant&apos;s records.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 italic">
                  This directive has fundamentally shifted leverage in favor of consumers. Insurers can no longer ignore Ombudsman summons without risking automatic monetary awards.
                </p>
              </div>
            </section>

            {/* SECTION 5: Rule 13 Adjudicable Disputes */}
            <section id="heading-adjudicable-disputes" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Subject-Matter Jurisdiction
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  What Types of Insurance Disputes Can the Insurance Ombudsman Adjudicate Under Rule 13?
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Rule 13(1) of the Insurance Ombudsman Rules, 2017 enumerates the comprehensive list of disputes that fall squarely within the Ombudsman&apos;s adjudicatory jurisdiction. If your grievance falls within any of the following eight statutory categories, your complaint is maintainable:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Rule 13(1)(a) • Delay in Settlement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unjustified delay in settling claims beyond the statutory 30-day turnaround time prescribed in IRDAI policyholder protection regulations.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Rule 13(1)(b) • Repudiation of Claims
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Any partial or total rejection of claims by life, health, motor, travel, or home insurance companies on exclusion or non-disclosure grounds.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Rule 13(1)(c) • Premium Disputes
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Disputes relating to premium paid, excess premium debited without consent, or refusal to adjust policy payments in terms of policy schedule.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Rule 13(1)(d) • Misrepresentation &amp; Mis-Selling
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Misrepresentation of policy terms, selling high-cost ULIPs or endowment plans under the guise of fixed deposits, or fraudulent benefit illustrations.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Rule 13(1)(e) • Policy Wordings Construction
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legal ambiguity or conflicting clauses in policy terms. Under the contra proferentem doctrine, ambiguities must be resolved in the consumer&apos;s favor.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Rule 13(1)(f) • Servicing Deficiencies
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Non-issuance of policy document, delays in recording nominee updates, failure to process address endorsements, or delayed premium renewal receipts.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Rule 13(1)(g) • Proposal Discrepancies
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issuance of an insurance policy that deviates materially from the terms, sum insured, or riders selected in the physical or digital proposal form.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Rule 13(1)(h) • Non-Issuance After Premium
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Failure to issue the policy contract or bond even after accepting and retaining the policyholder&apos;s premium debit.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Bima Bharosa Process */}
            <section id="heading-bima-bharosa-process" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  IRDAI Grievance Gateway Workflow
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  How Does Bima Bharosa Work and When Should a Policyholder File on It First?
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                <strong>Bima Bharosa</strong> (formerly known as the Integrated Grievance Management System or IGMS) is IRDAI&apos;s centralized consumer grievance gateway accessible at <code className="bg-slate-100 text-blue-700 px-1 py-0.5 rounded">bimabharosa.irdai.gov.in</code>. It operates as an electronic interface directly connecting policyholders with the senior Grievance Redressal Officers (GROs) of all life, general, and standalone health insurers in India.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  Step-by-Step Bima Bharosa Escalation Process:
                </h3>
                <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside">
                  <li>
                    <strong>Online Registration:</strong> Visit bimabharosa.irdai.gov.in and create a policyholder profile using your mobile number, PAN, and email ID.
                  </li>
                  <li>
                    <strong>Select Insurer &amp; Policy Details:</strong> Choose your insurer from the dropdown list, enter the exact policy number, and select the grievance category (e.g. <em>&quot;Cashless Authorization Delayed&quot;</em> or <em>&quot;Free-Look Refund Not Processed&quot;</em>).
                  </li>
                  <li>
                    <strong>Upload Substantiating Documents:</strong> Attach policy schedule, discharge summary, claim filing acknowledgment, and prior email interactions (PDF format under 5 MB).
                  </li>
                  <li>
                    <strong>Generation of IRDAI Token:</strong> The system generates a unique 14-digit Bima Bharosa Token Number. This token puts the insurer on a statutory 14-calendar-day compliance timer.
                  </li>
                  <li>
                    <strong>Insurer Resolution or Escalation:</strong> The insurer&apos;s corporate GRO must submit a reasoned response. If the insurer resolves the issue, the token is closed. If the insurer rejects the grievance or fails to respond within 14 days, the token log serves as vital documented proof for your Ombudsman complaint.
                  </li>
                </ol>
              </div>
            </section>

            {/* SECTION 7: Ombudsman Online Filing (CIO Portal) */}
            <section id="heading-ombudsman-filing-steps" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Council for Insurance Ombudsmen (CIO) Procedure
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  What is the Step-by-Step Process to File an Insurance Ombudsman Complaint Online?
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Filing before the Insurance Ombudsman has been completely digitized through the Council for Insurance Ombudsmen (CIO) web portal at <code className="bg-slate-100 text-blue-700 px-1 py-0.5 rounded">cioins.co.in</code>. The entire process requires no physical appearance unless requested, and incurs zero filing fee:
              </p>

              <div className="space-y-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs flex items-start space-x-3.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Step 1: Identify Your Territorial Ombudsman Center
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      India is divided into 17 territorial Ombudsman centers. Jurisdiction is determined either by the location of the branch office of the insurer or by the residential address of the policyholder. You can file at the center closest to your residence.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs flex items-start space-x-3.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Step 2: Complete Statutory Form VI-A Online
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Rule 14(1), complaints must be submitted in statutory <strong>Form VI-A</strong>. On the CIO portal, fill in complainant particulars, insurer name, policy number, nature of claim, total relief sought (up to ₹50 Lakh), and the precise timeline of repudiation.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs flex items-start space-x-3.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Step 3: Upload Evidence Dossier &amp; 30-Day Proof
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Upload your claim form, hospital discharge summary or police FIR/survey report, repudiation letter, and copy of the 30-day legal notice served to the insurer GRO.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs flex items-start space-x-3.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Step 4: Notice to Insurer (7-Day Clock Starts)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Upon technical admission, the Ombudsman serves notice to the insurer calling for their Self-Contained Note (SCN) and claims docket within 7 calendar days.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs flex items-start space-x-3.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      Step 5: Hearing (Virtual / In-Person) &amp; Award
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Hearings are conducted via video-conferencing. The Ombudsman reviews arguments under summary powers and pronounces a reasoned, written award within 3 months.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 8: Problem Picker Component */}
            <section id="heading-problem-scenarios" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Interactive Strategy Matrix
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Common Dispute Playbooks: Repudiation Ground → Statutory Counter
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Explore tailored legal strategies and statutory authorities for the five most frequent insurance dispute categories encountered before the Insurance Ombudsman:
              </p>

              <InsuranceOmbudsmanProblemTabs />
            </section>

            {/* SECTION 9: SVG Process Flow Diagram */}
            <section id="heading-process-flow" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Visual Escalation Blueprint
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Statutory Escalation Pipeline: From Claim Repudiation to Enforceable Award
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Follow the statutory procedural progression under the Insurance Ombudsman Rules, 2017 and IRDAI regulations:
              </p>

              {/* Hand-authored SVG Process Diagram */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs overflow-x-auto">
                <div className="min-w-[680px]">
                  <svg
                    viewBox="0 0 900 290"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto text-slate-800"
                  >
                    {/* Stage 1 */}
                    <rect x="20" y="30" width="180" height="110" rx="12" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
                    <text x="110" y="60" textAnchor="middle" fill="#1E3A8A" fontWeight="bold" fontSize="13">
                      STAGE 1: CLAIM DENIED
                    </text>
                    <text x="110" y="82" textAnchor="middle" fill="#1E40AF" fontSize="11">
                      Cashless / Reimbursement
                    </text>
                    <text x="110" y="100" textAnchor="middle" fill="#4B5563" fontSize="10">
                      Repudiated by TPA/Insurer
                    </text>
                    <text x="110" y="120" textAnchor="middle" fill="#DC2626" fontWeight="600" fontSize="10">
                      Day 0: Repudiation Notice
                    </text>

                    {/* Arrow 1 to 2 */}
                    <path d="M200 85 H240" stroke="#3B82F6" strokeWidth="2.5" markerEnd="url(#blue-arrow)" />

                    {/* Stage 2 */}
                    <rect x="240" y="30" width="190" height="110" rx="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
                    <text x="335" y="60" textAnchor="middle" fill="#78350F" fontWeight="bold" fontSize="13">
                      STAGE 2: GRO / NOTICE
                    </text>
                    <text x="335" y="82" textAnchor="middle" fill="#92400E" fontSize="11">
                      Serve Legal Notice to GRO
                    </text>
                    <text x="335" y="100" textAnchor="middle" fill="#4B5563" fontSize="10">
                      Or File on Bima Bharosa
                    </text>
                    <text x="335" y="120" textAnchor="middle" fill="#B45309" fontWeight="600" fontSize="10">
                      Mandatory 30-Day Window
                    </text>

                    {/* Arrow 2 to 3 */}
                    <path d="M430 85 H470" stroke="#F59E0B" strokeWidth="2.5" markerEnd="url(#amber-arrow)" />

                    {/* Stage 3 */}
                    <rect x="470" y="30" width="200" height="110" rx="12" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2" />
                    <text x="570" y="60" textAnchor="middle" fill="#312E81" fontWeight="bold" fontSize="13">
                      STAGE 3: CIO PORTAL
                    </text>
                    <text x="570" y="82" textAnchor="middle" fill="#3730A3" fontSize="11">
                      File Form VI-A Online
                    </text>
                    <text x="570" y="100" textAnchor="middle" fill="#4B5563" fontSize="10">
                      Insurer Notice: 7-Day Rule
                    </text>
                    <text x="570" y="120" textAnchor="middle" fill="#4F46E5" fontWeight="600" fontSize="10">
                      Max Relief: Up to ₹50 Lakh
                    </text>

                    {/* Arrow 3 to 4 */}
                    <path d="M670 85 H710" stroke="#6366F1" strokeWidth="2.5" markerEnd="url(#indigo-arrow)" />

                    {/* Stage 4 */}
                    <rect x="710" y="30" width="170" height="110" rx="12" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
                    <text x="795" y="60" textAnchor="middle" fill="#064E3B" fontWeight="bold" fontSize="13">
                      STAGE 4: AWARD
                    </text>
                    <text x="795" y="82" textAnchor="middle" fill="#065F46" fontSize="11">
                      Binding on Insurer
                    </text>
                    <text x="795" y="100" textAnchor="middle" fill="#4B5563" fontSize="10">
                      30-Day Pay Mandate
                    </text>
                    <text x="795" y="120" textAnchor="middle" fill="#059669" fontWeight="600" fontSize="10">
                      + Penal Interest if Delayed
                    </text>

                    {/* Bottom Split Branches */}
                    <path d="M795 140 V190 H480" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="360" y="170" width="240" height="60" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
                    <text x="480" y="193" textAnchor="middle" fill="#334155" fontWeight="bold" fontSize="11">
                      Consumer Dissatisfied / Dismissed?
                    </text>
                    <text x="480" y="212" textAnchor="middle" fill="#64748B" fontSize="10">
                      Free to file before Consumer Court (e-Jagriti)
                    </text>

                    <defs>
                      <marker id="blue-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 8 5 L 0 9 z" fill="#3B82F6" />
                      </marker>
                      <marker id="amber-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 8 5 L 0 9 z" fill="#F59E0B" />
                      </marker>
                      <marker id="indigo-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 8 5 L 0 9 z" fill="#6366F1" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div>
            </section>

            {/* SECTION 10: Static Maintainability Matrix & Eligibility Checker */}
            <section id="heading-maintainability-matrix" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Statutory Rule 14 Checklist
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Ombudsman Eligibility Checker: Are You Legally Entitled to File?
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Before submitting your petition on the CIO portal, verify every statutory condition under Rule 14 of the Insurance Ombudsman Rules, 2017:
              </p>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        1. Prior Written Representation to Insurer GRO Completed
                      </p>
                      <p className="text-xs text-slate-600">
                        You have sent a formal written complaint or legal notice to the insurer&apos;s Grievance Redressal Officer, and have written confirmation or proof of delivery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        2. 30 Days Elapsed or Formal Repudiation Letter in Hand
                      </p>
                      <p className="text-xs text-slate-600">
                        Either 30 calendar days have passed without resolution, or the insurer has issued a final claim repudiation / partial settlement letter.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        3. Claim Value Does Not Exceed ₹50,00,000
                      </p>
                      <p className="text-xs text-slate-600">
                        The total amount claimed, including principal medical/damage expenses and compensation, is within the statutory ₹50 Lakh cap.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        4. Filed Within 1 Year from Insurer&apos;s Rejection
                      </p>
                      <p className="text-xs text-slate-600">
                        Less than 12 continuous months have elapsed since receiving the insurer&apos;s repudiation or the expiry of the 30-day waiting period.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        5. No Pending Proceedings in Any Court or Consumer Commission
                      </p>
                      <p className="text-xs text-slate-600">
                        Under Rule 14(3)(c), no complaint or suit on the same subject matter is currently pending before any Consumer Forum, Civil Court, or Arbitrator.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900">
                  <strong>All 5 Conditions Satisfied?</strong> Your complaint is 100% maintainable before the Insurance Ombudsman. Proceed with filing Form VI-A on cioins.co.in.
                </div>
              </div>
            </section>

            {/* SECTION 11: Binding Nature & Penal Interest */}
            <section id="heading-binding-awards" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Enforcement &amp; Compliance Rules
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Is an Insurance Ombudsman Award Legally Binding on the Insurance Company?
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Yes. Under Rule 17 of the Insurance Ombudsman Rules, 2017, an award passed by the Insurance Ombudsman is <strong>100% legally binding on the insurer</strong>. The statutory architecture establishes a powerful asymmetric advantage for the consumer:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5 flex items-center gap-1.5">
                    <span>🔒</span> Insurer Must Comply Within 30 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Once the Ombudsman pronounces the award, the complainant submits a letter of acceptance. Upon receipt of this acceptance, the insurance company has a statutory mandate under Rule 17(6) to disburse the entire awarded amount into the consumer&apos;s bank account within <strong>30 calendar days</strong>.
                  </p>
                </div>

                <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5 flex items-center gap-1.5">
                    <span>📈</span> Mandatory Penal Interest (Bank Rate + 2%)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under Rule 17(7), if the insurer defaults on the 30-day payment mandate, it is statutorily liable to pay penal interest at the rate of <strong>Bank Rate plus 2%</strong> calculated from the date of the award until actual realization, without requiring any fresh application.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4.5 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                  What if the Complainant is Unhappy with the Ombudsman&apos;s Award?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The award is NOT binding on the policyholder. If the Ombudsman awards only partial compensation or dismisses the complaint, the consumer is under no obligation to accept the award. The consumer can simply decline acceptance and file a full consumer complaint before the District Consumer Disputes Redressal Commission (DCDRC) under Section 35 of the Consumer Protection Act, 2019.
                </p>
              </div>
            </section>

            {/* SECTION 12: Real-World Worked Case Example */}
            <section id="heading-worked-example" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Case Study &amp; Practical Application
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Worked Example: How a ₹8,40,000 Health Repudiation Was Overturned via Ombudsman
                </h2>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    Illustrative Real-World Case Breakdown
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2">
                    Dispute: ₹8,40,000 Emergency Coronary Bypass Surgery Repudiated for Alleged &quot;Hypertension Non-Disclosure&quot;
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-500 block mb-1">Complainant Profile:</span>
                    <p className="font-semibold text-slate-900">Mr. Arvind Menon (Age 52, Bengaluru)</p>
                    <p className="text-slate-600 text-xs mt-1">Policy: Comprehensive Health Shield (Sum Insured ₹15 Lakh, Active for 4 years)</p>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-500 block mb-1">Repudiation Basis:</span>
                    <p className="font-semibold text-rose-700">Clause 4.1 Non-Disclosure of Pre-Existing Disease</p>
                    <p className="text-slate-600 text-xs mt-1">Insurer retrieved a 2019 routine wellness check showing BP of 138/88 mmHg.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Chronology of Statutory Enforcement:
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <p>
                      <strong>Day 1:</strong> Cashless denied at hospital discharge. Mr. Menon settles ₹8,40,000 hospital bill via personal savings and applies for reimbursement.
                    </p>
                    <p>
                      <strong>Day 25:</strong> Insurer issues formal repudiation letter alleging fraudulent concealment of pre-existing hypertension under policy clause 4.1.
                    </p>
                    <p>
                      <strong>Day 30:</strong> Advocate drafts statutory legal notice citing the Supreme Court judgment in <em>Manmohan Nanda v. United India Assurance (2022)</em> and IRDAI Master Circular 2024. Notice is dispatched to Insurer&apos;s Corporate GRO via Speed Post and registered on Bima Bharosa.
                    </p>
                    <p>
                      <strong>Day 62:</strong> 30 calendar days elapse with only generic auto-replies from the insurer GRO. Statutory default is formally established.
                    </p>
                    <p>
                      <strong>Day 65:</strong> Form VI-A petition lodged on Council for Insurance Ombudsmen portal (<code className="text-blue-700 bg-blue-50 px-1 py-0.5 rounded">cioins.co.in</code>) with treating cardiologist&apos;s certificate confirming acute arterial plaque rupture having no causal link to routine borderline wellness readings.
                    </p>
                    <p>
                      <strong>Day 75:</strong> Ombudsman issues statutory notice to insurer. Under the IRDAI 7-day rule, the insurer is required to submit its medical defense by Day 82.
                    </p>
                    <p>
                      <strong>Day 110:</strong> Virtual hearing held before the Bengaluru Insurance Ombudsman. Insurer fails to establish fraudulent intent or causal nexus.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900">
                  <p className="font-bold text-emerald-950 mb-1">
                    Final Binding Ombudsman Award:
                  </p>
                  <p className="leading-relaxed">
                    The Insurance Ombudsman ordered full reimbursement of <strong>₹8,40,000</strong> along with <strong>₹30,000 compensation</strong> for mental harassment and <strong>statutory interest at 8.75% per annum</strong>. Insurer disbursed the total settlement of ₹8,91,450 directly into the complainant&apos;s bank account on the 26th day of award acceptance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 13: Judicial Precedents */}
            <section id="heading-precedents" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Binding Judicial Precedents
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Authoritative Supreme Court and Ombudsman Rulings Protecting Policyholders
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Cite these landmark rulings in your written representation to the insurer GRO and your Ombudsman complaint docket:
              </p>

              <div className="space-y-4">
                {CASE_CITATIONS.map((c, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-100 pb-2.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {c.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200 self-start sm:self-auto">
                        {c.date}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 space-y-0.5">
                      <p>
                        <strong className="text-slate-700">Parties:</strong> {c.parties}
                      </p>
                      <p>
                        <strong className="text-slate-700">Citation:</strong> {c.citation}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p>
                        <strong>Facts:</strong> {c.facts}
                      </p>
                      <p>
                        <strong>Holding:</strong> {c.holding}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-xs font-bold text-emerald-700">
                        Award: {c.amount}
                      </span>
                      <p className="text-xs text-slate-500 italic">
                        Takeaway: {c.takeaway}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 14: Evidence Dossier & Checklist */}
            <section id="heading-evidence-checklist" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Documentary Verification
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Evidence Checklist: Mandatory Dossier for Insurance Ombudsman Filing
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Compile every document in PDF format before initiating Form VI-A on the CIO portal. Incomplete dossiers are the leading cause of initial registration rejection:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold uppercase text-blue-700 flex items-center gap-1.5">
                    <span>📋</span> Policy Contract &amp; Schedule
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Complete policy bond and latest renewal schedule</li>
                    <li>Original proposal form copy (if available)</li>
                    <li>Premium payment receipts and bank debit statement</li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold uppercase text-blue-700 flex items-center gap-1.5">
                    <span>🏥</span> Medical / Loss Substantiation
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Hospital discharge summary &amp; treating doctor notes</li>
                    <li>Final itemized hospital bill &amp; paid receipts</li>
                    <li>Surveyor report or police FIR / GD (for motor/theft)</li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold uppercase text-blue-700 flex items-center gap-1.5">
                    <span>❌</span> Repudiation / Deduction Record
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Official repudiation letter stating specific clause</li>
                    <li>Cashless denial letter issued at hospital desk</li>
                    <li>Settlement voucher showing partial deductions</li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold uppercase text-blue-700 flex items-center gap-1.5">
                    <span>⚖️</span> Pre-Requisite 30-Day Grievance Trail
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Copy of representation / legal notice sent to GRO</li>
                    <li>Speed Post tracking report / email delivery receipt</li>
                    <li>Bima Bharosa 14-digit token log (if registered)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 15: Statutory Notice & Complaint Format */}
            <section id="heading-complaint-format" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Statutory Draft &amp; Petition Structure
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Format for Statutory Legal Notice to Insurer GRO and Ombudsman Petition
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Use this structured legal notice format to establish the statutory 30-day default under Rule 14(3) of the Insurance Ombudsman Rules before filing on the CIO portal:
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-6 font-mono text-xs leading-relaxed overflow-x-auto shadow-xl">
                <div className="text-slate-400 mb-3 border-b border-slate-800 pb-2">
                  // STATUTORY NOTICE OF DISPUTE UNDER RULE 14(3) INSURANCE OMBUDSMAN RULES, 2017
                </div>
                <p>
                  To,<br />
                  The Grievance Redressal Officer (GRO) &amp; Head of Claims,<br />
                  [Name of Insurance Company Ltd.],<br />
                  Registered Corporate Office: [Full Address / Email ID]<br /><br />
                  <strong>SUBJECT:</strong> STATUTORY DEMAND FOR IMMEDIATE REVERSAL OF UNLAWFUL CLAIM REPUDIATION (CLAIM NO: [Claim No.]) UNDER POLICY NO: [Policy No.] AND NOTICE OF INTENDED COMPLAINT BEFORE THE INSURANCE OMBUDSMAN UNDER RULE 13 &amp; 14 OF INSURANCE OMBUDSMAN RULES, 2017.<br /><br />
                  Sir / Madam,<br /><br />
                  1. Under instructions from our client [Policyholder Name], residing at [Address], we hereby serve this statutory representation:<br /><br />
                  2. Our client is the bona fide insured under Policy No. [Policy No.], valid from [Start Date] to [End Date], with Sum Insured of ₹[Sum Insured]. All premiums have been duly cleared without default.<br /><br />
                  3. On [Date of Hospitalization/Incident], our client suffered [Medical Condition/Accidental Damage] requiring emergency hospitalization at [Hospital Name]. The total admissible expenditure incurred was ₹[Total Amount].<br /><br />
                  4. Vide your repudiation letter dated [Date], your company unlawfully rejected our client&apos;s claim alleging [State Insurer&apos;s Rejection Pretext, e.g. Pre-existing Condition Non-Disclosure under Clause X].<br /><br />
                  5. TAKE NOTICE that your repudiation is arbitrary, unsustainable in law, and squarely violates the Supreme Court judgment in <em>Manmohan Nanda v. United India Assurance (2022) 4 SCC 582</em> and IRDAI Master Circular 2024. The alleged condition has zero causal link to the acute treatment administered.<br /><br />
                  6. WE HEREBY DEMAND that you immediately recall your unlawful repudiation and disburse the full sum of ₹[Claim Amount] along with statutory delayed interest within 15 calendar days of receipt of this notice.<br /><br />
                  7. BE ADVISED that upon expiry of 30 calendar days from receipt hereof without complete settlement, our client shall initiate formal proceedings before the territorial Insurance Ombudsman on the CIO portal under Rule 13(1)(b) of the Insurance Ombudsman Rules, 2017, invoking the IRDAI 7-day ex-parte rule and claiming full compensation alongside litigation costs.<br /><br />
                  Yours faithfully,<br />
                  [Advocate Signature &amp; Enrolment No.]<br />
                  Advocate for the Insured / Claimant
                </p>
              </div>

              {/* Second CTA placement */}
              <div className="pt-2">
                <InsuranceOmbudsmanNoticeCTA
                  buttonText="Have an Advocate Draft Your GRO Notice &amp; Ombudsman Dossier"
                  variant="primary"
                />
              </div>
            </section>

            {/* SECTION 16: Frequently Asked Questions */}
            <section id="heading-faqs" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Common Queries Answered
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Frequently Asked Questions on Insurance Ombudsman &amp; Bima Bharosa
                </h2>
              </div>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-start space-x-2">
                      <span className="text-blue-600 shrink-0 font-extrabold">Q:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 17: Statutory References & Primary Sources */}
            <section id="heading-sources" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Verification &amp; Authority
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Sources &amp; Statutory Legal References
                </h2>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <ul className="space-y-3 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <div>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-blue-700 hover:underline hover:text-blue-900"
                        >
                          {source.title}
                        </a>
                        <span className="text-slate-400 text-xs block break-all">
                          {source.url}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Internal Contextual Linking & Hub References */}
            <section className="bg-slate-100/80 border border-slate-200 rounded-2xl p-6 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Related Insurance Escalation &amp; Recovery Guides
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <Link
                  href="/legal-notice-to-insurance-company-claim-rejection-recovery"
                  className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium"
                >
                  Legal Notice to Insurance Company
                </Link>
                <Link
                  href="/motor-insurance-claim-rejected-legal-notice"
                  className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium"
                >
                  Motor Insurance Claim Rejection Notice
                </Link>
                <Link
                  href="/life-insurance-death-claim-rejected"
                  className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium"
                >
                  Life Insurance Death Claim Repudiation
                </Link>
                <Link
                  href="/insurance-mis-selling-free-look-refund"
                  className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium"
                >
                  Insurance Mis-Selling &amp; Free-Look Refunds
                </Link>
                <Link
                  href="/cashless-claim-denied-what-to-do"
                  className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium"
                >
                  Cashless Claim Denied at Hospital
                </Link>
                <Link
                  href="/health-insurance-claim-rejection-reasons-counter"
                  className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium"
                >
                  Health Insurance Rejection Reasons &amp; Counters
                </Link>
              </div>
            </section>

            {/* Related Recovery Guides Shared Component */}
            <div className="pt-6">
              <RelatedRecoveryGuides />
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

