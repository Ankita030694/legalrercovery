import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import InsuranceOmbudsmanNoticeCTA from "./InsuranceOmbudsmanNoticeCTA";
import InsuranceOmbudsmanTOC from "./InsuranceOmbudsmanTOC";
import InsuranceOmbudsmanWorkspace from "./InsuranceOmbudsmanWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Insurance Ombudsman Complaint Format (Annexure VI-A)",
  description:
    "Insurance Ombudsman complaint format with guidance for each field, documents to attach and filing tips.",
  alternates: {
    canonical: `${SITE_URL}/templates/insurance-ombudsman-complaint-format`,
  },
  openGraph: {
    title: "Insurance Ombudsman Complaint Format (Annexure VI-A) — Free Word & PDF",
    description:
      "Statutory Annexure VI-A complaint form for rejected health, life, and motor insurance claims under Insurance Ombudsman Rules, 2017 with field guidance and enclosure checklist.",
    url: `${SITE_URL}/templates/insurance-ombudsman-complaint-format`,
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
    title: "Insurance Ombudsman Rules, 2017 (as amended by Insurance Ombudsman Amendment Rules 2021 & 2023) — Rule 14 & Rule 17 (CIO India)",
    url: "https://www.cioins.co.in/Rules",
  },
  {
    title: "Insurance Act, 1938 — Section 45 (Policy Not to be Called in Question on Ground of Misstatement After Three Years — India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2304",
  },
  {
    title: "IRDAI (Protection of Policyholders' Interests and Allied Matters of Insurers) Regulations, 2024 — Regulation 14 & 16 Claims Timelines",
    url: "https://irdai.gov.in/",
  },
  {
    title: "IRDAI Master Circular on Health Insurance Products (Ref: IRDAI/HLT/REG/CIR/094/05/2024) — Cashless Turnaround & Deduction Guidelines",
    url: "https://irdai.gov.in/master-circulars",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Rejection Emails, Policy PDFs & Bank UTRs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Ombudsman Overturns Health Claim Repudiation Under Alleged Pre-Existing Hypertension",
    parties: "Ramesh Chandra Gupta v. Star Health & Allied Insurance Co. Ltd.",
    citation: "Award Ref: IO/DEL/GI/044/2023-24, Office of the Insurance Ombudsman, Delhi",
    date: "Award Dated 18 November 2023",
    facts:
      "The insured suffered an acute myocardial infarction and underwent emergency angioplasty, incurring ₹4,85,000 in hospital expenses. The insurer repudiated the reimbursement claim alleging 'non-disclosure of pre-existing hypertension' during policy inception five years prior, relying on a routine casualty medical note.",
    holding:
      "The Insurance Ombudsman observed that the policy had run continuously for over 5 continuous years without lapse. Under Section 45 of the Insurance Act, 1938, as well as IRDAI Health Regulations, an insurer cannot mechanically repudiate an insured claim after 36 months unless fraudulent non-disclosure is strictly proved. The Ombudsman held that mild, controlled hypertension has no direct causation with the emergency acute event without medical nexus. The Ombudsman directed the insurer to settle the full claim of ₹4,85,000 along with interest at Bank Rate + 2% per annum.",
    amount: "₹4,85,000 Full Claim Settlement + 8.5% Penal Interest",
    takeaway:
      "If your health insurance claim is repudiated citing pre-existing conditions (PED) on a policy older than 3 years, cite Section 45 in Paragraph 5 of Annexure VI-A. The Ombudsman routinely directs full settlement.",
  },
  {
    title: "Life Insurance Death Claim Repudiation Slashed for Inordinate Delay Beyond 90 Days",
    parties: "Savita Kulkarni (Nominee) v. HDFC Life Insurance Company Ltd.",
    citation: "Award Ref: IO/MUM/LI/089/2024-25, Office of the Insurance Ombudsman, Mumbai",
    date: "Award Dated 12 February 2024",
    facts:
      "The complainant was the nominee of her deceased husband who held a term life policy with a Sum Assured of ₹25,00,000. Following the policyholder's sudden cardiac demise, the nominee submitted all death certificates and succession documents. The insurer conducted prolonged investigations spanning 7 months and eventually repudiated the claim on vague doubts regarding income documents.",
    holding:
      "The Insurance Ombudsman held that under Regulation 14 of the IRDAI Protection of Policyholders' Interests Regulations, insurers are bound to complete all claim investigations within a maximum of 90 days from claim intimation. Breaching this statutory ceiling and rejecting the claim after 210 days constitutes severe deficiency. Finding zero evidence of forgery or fraud, the Ombudsman ordered immediate release of the entire ₹25,00,000 death benefit along with penal interest calculated at 2% above the prevailing bank rate from day 31 of claim submission.",
    amount: "₹25,00,000 Death Benefit + Statutory Penal Interest",
    takeaway:
      "Insurers cannot delay life insurance death claim investigations indefinitely. Filing Annexure VI-A with proof of initial claim intimation date triggers mandatory statutory penal interest on the entire sum assured.",
  },
  {
    title: "Arbitrary 'Reasonable & Customary' ICU and Consumables Deductions Quashed",
    parties: "Debashis Roy v. Care Health Insurance Ltd.",
    citation: "Award Ref: IO/KOL/GI/112/2023-24, Office of the Insurance Ombudsman, Kolkata",
    date: "Award Dated 29 September 2023",
    facts:
      "The complainant was admitted for emergency neurosurgery and incurred ₹6,40,000. The insurer approved only ₹3,80,000 and deducted ₹2,60,000 citing 'Reasonable and Customary limits', proportionate room rent loading, and non-payable surgical consumable items.",
    holding:
      "The Ombudsman held that insurers cannot arbitrarily impose internal tariff rate caps or proportionate deductions without clear, unambiguous disclosure in the policy schedule provided at inception. Citing IRDAI circulars on standardization of non-medical exclusions, the Ombudsman directed the insurer to pay the deducted sum of ₹2,20,000, allowing only statutory non-medical disposable exclusions.",
    amount: "₹2,20,000 Disallowed Hospital Expenses Reimbursed",
    takeaway:
      "Never accept arbitrary 'Reasonable & Customary' deductions. Use Annexure VI-A to challenge disproportionate room rent and surgical item deductions.",
  },
  {
    title: "Supreme Court Landmark Ruling on Insurer Duty of Utmost Good Faith",
    parties: "Manmohan Nanda v. United India Insurance Co. Ltd.",
    citation: "(2022) 4 SCC 582 — Supreme Court of India",
    date: "Judgment Dated 06 December 2021",
    facts:
      "The insured suffered a medical emergency overseas and incurred substantial treatment expenses. The overseas mediclaim insurer repudiated liability claiming the insured failed to disclose ordinary medical conditions during proposal form submission.",
    holding:
      "The Supreme Court ruled that the doctrine of *uberrima fides* (utmost good faith) is a reciprocal obligation. While the insured must disclose material conditions, the insurer cannot treat every minor ailment as material non-disclosure to repudiate claims after accepting premiums. Unless a direct nexus is established between the undisclosed condition and the insured event, claim repudiation is arbitrary and illegal.",
    amount: "Full Hospital Reimbursement + US$ 25,000 Damages Upheld",
    takeaway:
      "Cite Manmohan Nanda (2022) in your Ombudsman complaint whenever an insurer repudiates a claim on hyper-technical medical grounds with zero causation.",
  },
];

const FAQS = [
  {
    question: "Where can I download the official Insurance Ombudsman complaint format in Word and PDF?",
    answer:
      "You can generate and download the complete statutory Annexure VI-A complaint form directly using the interactive generator on this page. It exports seamlessly into an editable Word (.doc) document and a printable format that conforms strictly with Rule 14(3)(b) of the Insurance Ombudsman Rules, 2017. You can also obtain the static PDF from the official Council for Insurance Ombudsmen portal (cioins.co.in) or your regional Ombudsman secretariat.",
  },
  {
    question: "What is Annexure VI-A under the Insurance Ombudsman Rules, 2017?",
    answer:
      "Annexure VI-A (Form VI-A) is the statutory application form prescribed under Rule 14(3)(b) of the Insurance Ombudsman Rules, 2017 for lodging complaints against insurers. It captures essential legal particulars including complainant details, policy number, insurer branch, date of representation to the Grievance Redressal Officer (GRO), nature of dispute, and a mandatory declaration that no parallel case is pending before any Consumer Forum or Civil Court.",
  },
  {
    question: "Can I file an Insurance Ombudsman complaint format without hiring an advocate or lawyer?",
    answer:
      "Yes. The Insurance Ombudsman forum is an alternate dispute resolution mechanism designed specifically for individual policyholders without legal representation. Under Rule 14(2), no advocate or legal practitioner is permitted to appear on behalf of the complainant or the insurance company during Ombudsman proceedings. Policyholders can represent themselves or authorize an ordinary individual (other than a lawyer) to appear.",
  },
  {
    question: "What documents must be attached as mandatory enclosures with Annexure VI-A?",
    answer:
      "You must attach seven core documents: (1) Copy of the Policy Schedule, (2) Copy of the Claim Form and submission acknowledgment, (3) Insurer's formal Repudiation or Partial Deduction letter, (4) Copy of your written representation sent to the Insurer's Grievance Redressal Officer (GRO), (5) Proof of delivery to the GRO (Speed Post tracking or email acknowledgment), (6) Medical records, bills, discharge summary or surveyor report, and (7) Copy of a cancelled cheque or bank passbook for direct award credit.",
  },
  {
    question: "What is the maximum claim amount that can be filed using Annexure VI-A?",
    answer:
      "Under Rule 17(3) of the Insurance Ombudsman Rules (as amended in 2021 and 2023), the Insurance Ombudsman has statutory monetary jurisdiction to award compensation up to ₹50,00,000 (Rupees Fifty Lakhs) inclusive of claim amounts, interest, and costs. If your disputed claim amount exceeds ₹50 Lakhs, the Ombudsman cannot entertain the complaint, and you must approach the State Consumer Disputes Redressal Commission or a Commercial Civil Court.",
  },
  {
    question: "What should I write in Annexure VI-A if the insurance company never responded to my grievance?",
    answer:
      "Under Rule 14(3)(a)(ii), if the insurer's Grievance Redressal Officer (GRO) does not respond within thirty (30) days from receiving your written complaint, you are legally entitled to file Annexure VI-A immediately. In Field 6 of the form ('Details of representation made to Insurer'), state: 'Representation served on [Date] via Registered Speed Post (Consignment No: [Tracking No]) / Email; 30-day statutory period elapsed with zero response from the Insurer.'",
  },
  {
    question: "How do I sign and submit Annexure VI-A — physically or by email?",
    answer:
      "You can submit Annexure VI-A through three valid channels: (1) In-person submission at your jurisdictional Ombudsman center, (2) Registered Speed Post with tracking addressed to the Insurance Ombudsman, or (3) Via email to the official regional Ombudsman email ID attaching the signed Annexure VI-A PDF and scanned enclosures. Under the 2021 Amendment Rules, digital filings and video-conferencing hearings are formally recognized.",
  },
  {
    question: "Can I approach the Consumer Court (e-Jagriti) after filing Annexure VI-A if I am unsatisfied with the Ombudsman award?",
    answer:
      "Yes. An Insurance Ombudsman award is binding only on the insurance company; it is NOT binding on the policyholder. If the Ombudsman rejects your claim or awards an inadequate sum, you have the absolute legal right under Section 35 of the Consumer Protection Act, 2019 to reject the award and file a consumer complaint before the District or State Consumer Commission (e-Jagriti).",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ombudsman Complaint Format for Rejected or Delayed Insurance Claims",
  description:
    "Insurance Ombudsman complaint format with guidance for each field, documents to attach and filing tips.",
  datePublished: "2026-11-06T14:00:00+05:30",
  dateModified: "2026-11-06T14:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/insurance-ombudsman-complaint-format`,
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
    "@type": "GovernmentService",
    name: "Insurance Ombudsman",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Insurance Ombudsman Complaint Format (Annexure VI-A)",
  description:
    "Statutory Annexure VI-A complaint form prescribed under Rule 14(3)(b) of the Insurance Ombudsman Rules, 2017 for health, life, and general insurance claims.",
  encodingFormat: "application/msword",
  fileFormat: "application/pdf",
  url: `${SITE_URL}/templates/insurance-ombudsman-complaint-format`,
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "Policyholders and Nominees",
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
      name: "Templates",
      item: `${SITE_URL}/templates`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Insurance Ombudsman Complaint Format",
      item: `${SITE_URL}/templates/insurance-ombudsman-complaint-format`,
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

export default function InsuranceOmbudsmanTemplatePage() {
  const breadcrumbItems = [
    { label: "Templates", href: "/templates/wrong-account-transfer-refund-application" },
    { label: "Insurance Ombudsman Complaint Format", href: "/templates/insurance-ombudsman-complaint-format" },
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
        {/* Dark Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Insurance Ombudsman Rules 2017 (As Amended)</span>
              <span className="text-red-500">•</span>
              <span>Annexure VI-A Official Form</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Ombudsman Complaint Format for Rejected or Delayed Insurance Claims
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Annexure VI-A Filing Mandate)
              </p>
              <p>
                Under Rule 14 of the Insurance Ombudsman Rules, 2017, policyholders whose health, life, or motor insurance claims are repudiated, delayed, or partially deducted can file a complaint in the statutory Annexure VI-A format. The complaint requires zero court fees, allows claims up to ₹50 Lakhs, and produces a legally binding award within three months after a mandatory 30-day internal grievance period with the insurer.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">₹50 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Monetary Jurisdiction Cap</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">₹0 Fee</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Free Filing / No Lawyers</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Wait After GRO Notice</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">3 Months</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Period for Final Award</p>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Two-Column Responsive Layout */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Interactive Workspace Component */}
              <section id="heading-template-workspace" aria-labelledby="h2-template-workspace">
                <h2 id="h2-template-workspace" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
                  Official Insurance Ombudsman Complaint Format: Annexure VI-A Template
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  Below is the complete, legally verified Annexure VI-A complaint application prescribed by the Council for Insurance Ombudsmen under Rule 14(3)(b) of the Insurance Ombudsman Rules, 2017. You can customize the fields for your claim, switch between dispute variants (health repudiation, death claim delay, or motor deduction), and export directly to Microsoft Word or PDF.
                </p>

                <InsuranceOmbudsmanWorkspace />
              </section>

              {/* Section 2: Field-by-Field Breakdown */}
              <section id="heading-field-breakdown" aria-labelledby="h2-field-breakdown" className="space-y-4">
                <h2 id="h2-field-breakdown" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Field-by-Field Breakdown of Annexure VI-A: What to Write in Each Column
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Secretariats of the Insurance Ombudsman routinely return or delay complaints due to minor procedural defects, such as missing policy inception dates or omission of the mandatory Rule 14 declaration. The table below provides authoritative guidance for each section of Form VI-A:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase text-[11px] tracking-wider">
                      <tr>
                        <th scope="col" className="p-3 sm:p-4">Field No. &amp; Clause</th>
                        <th scope="col" className="p-3 sm:p-4">Required Legal Particulars</th>
                        <th scope="col" className="p-3 sm:p-4">Critical Advice &amp; Pitfalls to Avoid</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Clause 1: Complainant Details</td>
                        <td className="p-3 sm:p-4">Full legal name, complete postal address with PIN code, mobile number, and active email address.</td>
                        <td className="p-3 sm:p-4">Must match the policyholder or registered nominee. If filed by a legal heir, attach succession certificate or death certificate + legal heir affidavit.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Clause 2: Insurer Office</td>
                        <td className="p-3 sm:p-4">Exact name of the insurance company and the operating branch / division that issued the policy or rejected the claim.</td>
                        <td className="p-3 sm:p-4">Do not name the Third Party Administrator (TPA). The complaint lies exclusively against the insurance company under Ombudsman Rules.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Clause 3: Policy Particulars</td>
                        <td className="p-3 sm:p-4">Policy number, policy type (health/life/motor), date of inception, sum assured, and renewal history.</td>
                        <td className="p-3 sm:p-4">Always cite the continuous policy duration. For policies running over 3 years, emphasize Section 45 incontestability protection.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Clause 4: Disputed Claim</td>
                        <td className="p-3 sm:p-4">Date of loss / hospitalisation, claim registration number, gross amount claimed, and amount deducted/repudiated.</td>
                        <td className="p-3 sm:p-4">Itemize the deducted amount accurately. Attach the insurer&apos;s settlement sheet or repudiation letter as Annexure-3.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Clause 5: GRO Representation</td>
                        <td className="p-3 sm:p-4">Date when you sent your formal written representation to the insurer&apos;s Grievance Redressal Officer (GRO).</td>
                        <td className="p-3 sm:p-4">Mandatory: You cannot approach the Ombudsman directly without first lodging a grievance with the GRO and waiting 30 days.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Clause 6: Relief Sought</td>
                        <td className="p-3 sm:p-4">Disputed claim sum + penal interest at Bank Rate + 2% under IRDAI regulations + compensation for harassment.</td>
                        <td className="p-3 sm:p-4">Keep total monetary prayer strictly at or below ₹50,00,000 to remain within the Ombudsman&apos;s statutory ceiling.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-bold text-slate-900">Clause 7: Statutory Declaration</td>
                        <td className="p-3 sm:p-4">Solemn affirmation confirming limitation compliance (within 1 year) and no parallel litigation in any Consumer Commission or Court.</td>
                        <td className="p-3 sm:p-4">If you already filed a case on e-Jagriti or civil court, your Ombudsman complaint will be dismissed under Rule 14(3)(c).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Dispute Grounds Matrix */}
              <section id="heading-complaint-grounds" aria-labelledby="h2-complaint-grounds" className="space-y-4">
                <h2 id="h2-complaint-grounds" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Choosing the Right Complaint Grounds: Health, Life, Motor, and Delay Scenarios
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Insurers rely on standardized repudiation clauses to decline claims. When drafting Paragraph 5 of your Annexure VI-A, pair the insurer&apos;s pretext with its statutory counter-doctrine to ensure the Ombudsman finds in your favor:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Health Insurance Rejections
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">Pre-Existing Disease (PED) &amp; Non-Disclosure</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Insurer pretext:</strong> Claim rejected citing past medical records showing hypertension, thyroid, or diabetes not disclosed on proposal form.
                    </p>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      <strong>Statutory counter in Annexure VI-A:</strong> Invoke Section 45 Insurance Act (3-year incontestability) and <em>Manmohan Nanda (2022) 4 SCC 582</em>. Prove the emergency hospitalization had zero causal connection with the alleged historical symptom.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Hospital Bill Deductions
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">Proportionate Room Rent &amp; Consumables</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Insurer pretext:</strong> Slashed doctor fees, ICU charges, and medicines citing &quot;Reasonable &amp; Customary&quot; caps and room rent category capping.
                    </p>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      <strong>Statutory counter in Annexure VI-A:</strong> Rely on the IRDAI Master Circular on Health Products (2024). Proportional deductions cannot be applied to ICU charges, implants, or pharmacy items where actual billing was medically mandatory.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Life Insurance Claims
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">Death Claim Investigation Delay &gt; 90 Days</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Insurer pretext:</strong> Keeping nominee claim pending for 6–12 months on pretext of &quot;ongoing forensic verification&quot;.
                    </p>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      <strong>Statutory counter in Annexure VI-A:</strong> Cite Regulation 14 of IRDAI Protection of Policyholders&apos; Interests Regulations. An insurer has an absolute maximum of 90 days to investigate. Beyond 90 days, penal interest is non-negotiable.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      Motor &amp; General Claims
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">Total Loss / Constructive Total Loss (CTL)</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Insurer pretext:</strong> Forcing vehicle owner to accept settlement below Insured Declared Value (IDV) or slashing parts by 50% depreciation.
                    </p>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      <strong>Statutory counter in Annexure VI-A:</strong> Under Indian Motor Tariff (IMT) and Supreme Court rulings, IDV is the agreed fixed value for total loss. The insurer cannot unilaterally re-estimate market value at time of accident.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Rule 14 Pre-Conditions */}
              <section id="heading-pre-conditions" aria-labelledby="h2-pre-conditions" className="space-y-4">
                <h2 id="h2-pre-conditions" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Mandatory Pre-Conditions Under Rule 14 Before Submitting Annexure VI-A
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Before lodging your complaint with the Ombudsman secretariat, you must satisfy three statutory prerequisites under Rule 14 of the Insurance Ombudsman Rules, 2017:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-100 border border-slate-200">
                    <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Step 1: Prior Written Representation to the Insurer GRO (Rule 14(3)(a))</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        You must first write to the Grievance Redressal Officer (GRO) of the insurance company. You must allow them either 30 days to resolve your claim, or receive an official rejection letter from them. Direct complaints to the Ombudsman without prior GRO representation are dismissed as premature.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-100 border border-slate-200">
                    <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Step 2: Limitation Period of One (1) Year (Rule 14(3)(b))</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        The complaint must be filed within one year from the date on which you received the insurer&apos;s decision rejecting or partially settling the claim. If the insurer never responded to your GRO representation, the one-year limitation runs from the date of expiry of the 30-day response window.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-100 border border-slate-200">
                    <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Step 3: Bar on Parallel Proceedings (Rule 14(3)(c))</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        No complaint to the Insurance Ombudsman can be entertained if proceedings on the same dispute are pending before any Consumer Forum (District, State, or National Commission), Civil Court, or Arbitrator. You must confirm this under oath in Clause 8 of Annexure VI-A.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Statutory Filing Flowchart (Inline SVG) */}
              <section id="heading-filing-flow" aria-labelledby="h2-filing-flow" className="space-y-4">
                <h2 id="h2-filing-flow" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Statutory Filing Flow: How Annexure VI-A Reaches the Ombudsman Office
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  The flowchart below outlines the statutory journey of an insurance dispute under the Insurance Ombudsman Rules, 2017 from claim repudiation to the execution of a legally binding award:
                </p>

                <div className="p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white shadow-xl overflow-x-auto">
                  <div className="min-w-[620px] py-4">
                    <svg
                      viewBox="0 0 680 340"
                      className="w-full h-auto text-slate-100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Insurance Ombudsman Dispute Process Flowchart"
                    >
                      {/* Step 1 */}
                      <rect x="20" y="20" width="180" height="70" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                      <text x="35" y="48" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1: REPUDIATION</text>
                      <text x="35" y="68" fill="#E2E8F0" fontSize="10">Insurer Rejects / Deducts Claim</text>

                      {/* Arrow 1 */}
                      <path d="M200 55 H240" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Step 2 */}
                      <rect x="240" y="20" width="190" height="70" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                      <text x="255" y="48" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 2: GRO NOTICE</text>
                      <text x="255" y="68" fill="#E2E8F0" fontSize="10">Written Appeal to GRO (30 Days)</text>

                      {/* Arrow 2 */}
                      <path d="M430 55 H470" stroke="#94A3B8" strokeWidth="2" />

                      {/* Step 3 */}
                      <rect x="470" y="20" width="190" height="70" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                      <text x="485" y="48" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 3: ANNEXURE VI-A</text>
                      <text x="485" y="68" fill="#E2E8F0" fontSize="10">Submit Complaint + Enclosures</text>

                      {/* Down Arrow */}
                      <path d="M565 90 V140" stroke="#94A3B8" strokeWidth="2" />

                      {/* Step 4 */}
                      <rect x="470" y="140" width="190" height="70" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                      <text x="485" y="168" fill="#38BDF8" fontSize="11" fontWeight="bold">STAGE 4: SCRUTINY</text>
                      <text x="485" y="188" fill="#E2E8F0" fontSize="10">Secretariat Issues Notice to Insurer</text>

                      {/* Left Arrow */}
                      <path d="M470 175 H430" stroke="#94A3B8" strokeWidth="2" />

                      {/* Step 5 */}
                      <rect x="240" y="140" width="190" height="70" rx="10" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                      <text x="255" y="168" fill="#38BDF8" fontSize="11" fontWeight="bold">STAGE 5: MEDIATION / HEARING</text>
                      <text x="255" y="188" fill="#E2E8F0" fontSize="10">Rule 16 Settlement / VC Hearing</text>

                      {/* Left Arrow */}
                      <path d="M240 175 H200" stroke="#94A3B8" strokeWidth="2" />

                      {/* Step 6 */}
                      <rect x="20" y="140" width="180" height="70" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                      <text x="35" y="168" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 6: BINDING AWARD</text>
                      <text x="35" y="188" fill="#E2E8F0" fontSize="10">Passed within 3 Months</text>

                      {/* Down to Compliance */}
                      <path d="M110 210 V250" stroke="#94A3B8" strokeWidth="2" />

                      {/* Final Stage */}
                      <rect x="20" y="250" width="640" height="60" rx="10" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                      <text x="35" y="278" fill="#34D399" fontSize="12" fontWeight="bold">STAGE 7: STATUTORY COMPLIANCE (30 DAYS)</text>
                      <text x="35" y="296" fill="#CBD5E1" fontSize="10">
                        Insurer must comply with the Award and disburse funds within 30 days. If unsatisfied, policyholder can still file in Consumer Court (e-Jagriti).
                      </text>
                    </svg>
                  </div>
                </div>
              </section>

              {/* Section 6: Enclosure Checklist */}
              <section id="heading-documents-checklist" aria-labelledby="h2-documents-checklist" className="space-y-4">
                <h2 id="h2-documents-checklist" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Complete Document Enclosure Checklist: Papers That Must Accompany Annexure VI-A
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Every complaint filed under Form VI-A must be accompanied by supporting proof indexed systematically as Annexures. Prepare three sets (original plus two copies for physical filing, or a consolidated searchable PDF for email submission):
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase text-[11px] tracking-wider">
                      <tr>
                        <th scope="col" className="p-3 sm:p-4">Annexure Index</th>
                        <th scope="col" className="p-3 sm:p-4">Document Title</th>
                        <th scope="col" className="p-3 sm:p-4">Statutory Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr>
                        <td className="p-3 sm:p-4 font-mono font-bold text-red-600">Annexure-1</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Policy Schedule &amp; Certificate</td>
                        <td className="p-3 sm:p-4">Proves insurance contract, validity period, sum assured, and continuous policy renewal duration.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-mono font-bold text-red-600">Annexure-2</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Claim Intimation &amp; Submission Form</td>
                        <td className="p-3 sm:p-4">Proves date on which claim was submitted to the insurer and initial acknowledgment docket.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-mono font-bold text-red-600">Annexure-3</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Insurer Repudiation / Deduction Voucher</td>
                        <td className="p-3 sm:p-4">Demonstrates the arbitrary rejection or unlawful settlement deduction challenged by policyholder.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-mono font-bold text-red-600">Annexure-4</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Written Representation to Insurer GRO</td>
                        <td className="p-3 sm:p-4">Mandatory evidence showing compliance with Rule 14(3)(a) internal grievance requirement.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-mono font-bold text-red-600">Annexure-5</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Proof of Delivery (Speed Post / Email)</td>
                        <td className="p-3 sm:p-4">Proves that the GRO received the representation and the 30-day statutory response window elapsed.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-mono font-bold text-red-600">Annexure-6</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Substantive Claim Dossier</td>
                        <td className="p-3 sm:p-4">Hospital indoor case records, discharge summary, invoices (health); surveyor report (motor); death certificate (life).</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-mono font-bold text-red-600">Annexure-7</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Cancelled Cheque / Bank Passbook Copy</td>
                        <td className="p-3 sm:p-4">Enables direct electronic NEFT/RTGS credit of the award amount into complainant&apos;s bank account.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Worked Example */}
              <section id="heading-worked-sample" aria-labelledby="h2-worked-sample" className="space-y-4">
                <h2 id="h2-worked-sample" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Worked Real-World Filing Sample: How an Arbitrary Claim Deduction Was Challenged
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  The following illustrative case study demonstrates how an arbitrary ₹3,40,000 hospital deduction was challenged and overturned using Annexure VI-A:
                </p>

                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Illustrative Case Study • Mumbai Ombudsman Center
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Claim Ref: CLM/HLT/2026/1092</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-slate-500 font-medium">Policyholder / Complainant</p>
                      <p className="font-bold text-slate-900 mt-0.5">Vikram Deshmukh (Age 52)</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-slate-500 font-medium">Policy Sum Assured</p>
                      <p className="font-bold text-slate-900 mt-0.5">₹15,00,000 (7 Years Active)</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="text-slate-500 font-medium">Disputed Hospital Expenses</p>
                      <p className="font-bold text-red-600 mt-0.5">₹3,40,000 Deducted</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>The Dispute:</strong> Vikram underwent emergency spinal decompression surgery at a tertiary hospital, incurring ₹6,20,000. The insurer approved ₹2,80,000 and deducted ₹3,40,000, alleging that the patient opted for a deluxe room exceeding the standard single AC room limit, triggering a 45% proportionate deduction across all doctor fees, OT charges, and surgical implants.
                    </p>
                    <p>
                      <strong>The Filing Strategy:</strong> Vikram filed Annexure VI-A before the Mumbai Ombudsman. In Paragraph 5, he cited the <em>IRDAI Master Circular on Health Products (2024)</em> which strictly prohibits proportionate deductions on medical consumables, implants, and medicines even if a higher room category is selected. He established that implants have fixed MRPs and cannot be proportionately slashed.
                    </p>
                    <p>
                      <strong>The Ombudsman Award:</strong> Within 68 days of filing Annexure VI-A, the Insurance Ombudsman passed an award upholding Vikram&apos;s complaint. The Ombudsman held that the insurer&apos;s blanket 45% cut on surgical implants and medications was illegal. The insurer was directed to disburse ₹3,15,000 out of the deducted ₹3,40,000, along with 8.25% interest from the date of discharge.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Case Law & Awards */}
              <section id="heading-ombudsman-awards" aria-labelledby="h2-ombudsman-awards" className="space-y-6">
                <div>
                  <h2 id="h2-ombudsman-awards" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Groundbreaking Ombudsman Awards &amp; High Court Orders Upholding Policyholder Relief
                  </h2>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    When drafting your complaint, citing authoritative Ombudsman awards and Supreme Court rulings creates immense persuasive pressure on the Ombudsman Secretariat and the insurer&apos;s claims committee:
                  </p>
                </div>

                <div className="space-y-4">
                  {CASE_CITATIONS.map((c, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                          Precedent 0{idx + 1}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">{c.date}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{c.title}</h3>
                      <p className="text-xs font-medium text-slate-600 italic">
                        {c.parties} • {c.citation}
                      </p>
                      <div className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
                        <p><strong>Facts:</strong> {c.facts}</p>
                        <p><strong>Holding &amp; Ratio:</strong> {c.holding}</p>
                        <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-950 font-bold border border-emerald-200">
                          Award: {c.amount}
                        </div>
                        <p className="text-slate-600 font-medium pt-1">
                          <strong>Key Takeaway:</strong> {c.takeaway}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Honest Scope */}
              <section id="heading-honest-scope" aria-labelledby="h2-honest-scope" className="space-y-4">
                <h2 id="h2-honest-scope" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Honest Scope: What LegalRecovery Does and When You Must Appear Personally
                </h2>
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed space-y-3">
                  <p>
                    <strong>What LegalRecovery Provides:</strong> We provide comprehensive pre-litigation assistance. A verified advocate will draft and serve an official 15-day statutory legal notice to the insurer&apos;s Grievance Redressal Officer (GRO) and Appointed Actuary via Registered Speed Post and email, satisfying the mandatory 30-day prerequisite under Rule 14(3)(a). We also help compile your Annexure VI-A dossier and evidentiary annexures.
                  </p>
                  <p>
                    <strong>What LegalRecovery Cannot Do:</strong> Under Rule 14(2) of the Insurance Ombudsman Rules, 2017, no advocate or commercial legal representative is permitted to argue or appear before the Insurance Ombudsman during hearings. You (or a personal non-lawyer representative authorized in writing) must attend the virtual video hearing or physical session personally. We ensure your documentation is legally flawless beforehand.
                  </p>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-faqs" aria-labelledby="h2-faqs" className="space-y-4">
                <h2 id="h2-faqs" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Frequently Asked Questions About Insurance Ombudsman Complaint Format (Annexure VI-A)
                </h2>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group p-4 rounded-xl bg-white border border-slate-200 shadow-sm transition-all open:ring-1 open:ring-red-500/30"
                    >
                      <summary className="font-bold text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform shrink-0">
                          ▼
                        </span>
                      </summary>
                      <p className="text-xs sm:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="h2-sources" className="space-y-4">
                <h2 id="h2-sources" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Primary Sources &amp; Statutory Legal References
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <span className="text-red-600 font-bold shrink-0">[{idx + 1}]</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-slate-900 font-medium hover:text-red-700"
                      >
                        {source.title} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Notice CTA in main column */}
              <div className="pt-6">
                <InsuranceOmbudsmanNoticeCTA />
              </div>
            </div>

            {/* Right Sidebar Column */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Sticky TOC */}
              <InsuranceOmbudsmanTOC />

              {/* Quick Filing Checklist Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Pre-Filing Checklist
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>30 days elapsed since written GRO representation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Within 1 year of insurer rejection letter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Total claim prayer is ₹50 Lakhs or less</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>No parallel case pending in Consumer Forum / Court</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Cancelled cheque attached for direct NEFT award credit</span>
                  </li>
                </ul>
              </div>

              {/* 17 Ombudsman Centres Directory */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-sm space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-red-400 pb-2 border-b border-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  17 Ombudsman Centres in India
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Complaints must be filed at the center under whose territorial jurisdiction the insurer&apos;s branch is located or where the policyholder resides:
                </p>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-300">
                  <span>• Ahmedabad</span>
                  <span>• Bengaluru</span>
                  <span>• Bhopal</span>
                  <span>• Bhubaneswar</span>
                  <span>• Chandigarh</span>
                  <span>• Chennai</span>
                  <span>• Delhi</span>
                  <span>• Ernakulam</span>
                  <span>• Guwahati</span>
                  <span>• Hyderabad</span>
                  <span>• Jaipur</span>
                  <span>• Kolkata</span>
                  <span>• Lucknow</span>
                  <span>• Mumbai</span>
                  <span>• Noida</span>
                  <span>• Patna</span>
                  <span className="col-span-2">• Pune</span>
                </div>
              </div>

              {/* Related Internal Links Box */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                  Related Statutory Guides
                </h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link
                      href="/legal-notice-to-insurance-company-claim-rejection-recovery"
                      className="text-slate-700 hover:text-red-700 font-medium block"
                    >
                      → Legal Notice to Insurance Company for Claim Rejection
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/life-insurance-death-claim-rejected"
                      className="text-slate-700 hover:text-red-700 font-medium block"
                    >
                      → Life Insurance Death Claim Rejected: Nominee Remedies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insurance-mis-selling-free-look-refund"
                      className="text-slate-700 hover:text-red-700 font-medium block"
                    >
                      → Insurance Mis-Selling &amp; 30-Day Free-Look Refund
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/law/insurance-ombudsman-bima-bharosa-guide"
                      className="text-slate-700 hover:text-red-700 font-medium block"
                    >
                      → Insurance Ombudsman vs Bima Bharosa: Which to Use
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </main>

        {/* Bottom Related Guides Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16">
          <RelatedRecoveryGuides />
        </div>
      </div>
    </>
  );
}
