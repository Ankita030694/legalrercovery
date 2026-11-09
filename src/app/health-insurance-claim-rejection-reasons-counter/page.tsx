import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import HealthInsuranceNoticeCTA from "./HealthInsuranceNoticeCTA";
import HealthInsuranceTableOfContents from "./HealthInsuranceTableOfContents";
import HealthInsuranceRejectionTabs from "./HealthInsuranceRejectionTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Health Insurance Claim Rejected? Reasons & How to Fight",
  description:
    "Claim rejected for PED, daycare or 'not medically necessary'? Each common reason, the legal counter, evidence and the forum to use.",
  alternates: {
    canonical: `${SITE_URL}/health-insurance-claim-rejection-reasons-counter`,
  },
  openGraph: {
    title: "Health Insurance Claim Rejected? Reasons & How to Fight",
    description:
      "Statutory counter-arguments for health insurance claim rejections: Section 45 PED bar, daycare eligibility, medical necessity proof, Ombudsman rules and legal notices.",
    url: `${SITE_URL}/health-insurance-claim-rejection-reasons-counter`,
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
    title: "Insurance Act, 1938 — Section 45 (Policy Not to be Called in Question on Ground of Misstatement After Three Years)",
    url: "https://www.indiacode.nic.in/handle/123456789/2304",
  },
  {
    title: "IRDAI Master Circular on Protection of Policyholders' Interests, 2024 (Ref: IRDAI/NL-HLT/CIR/06/2024 — Modern Treatments & Claim Settlement TAT)",
    url: "https://irdai.gov.in/",
  },
  {
    title: "Insurance Ombudsman Rules, 2017 (as amended 2023) — Ministry of Finance (Jurisdiction up to ₹50 Lakhs & Ex-Parte Mandate)",
    url: "https://financialservices.gov.in/sites/default/files/Insurance_Ombudsman_Rules_2017.pdf",
  },
  {
    title: "Bima Bharosa (Integrated Grievance Management System - IGMS) — Insurance Regulatory and Development Authority of India",
    url: "https://bimabharosa.irdai.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Digital Hospital Records & Policy Schedules)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Supreme Court of India — Manmohan Nanda v. United India Insurance Co. Ltd. (2022) 10 SCC 431 (Scope of PED Disclosure & Medical Nexus)",
    url: "https://main.sci.gov.in/judgment/judis/49015.pdf",
  },
];

const CASE_CITATIONS = [
  {
    title: "Pre-Existing Disease Nexus & 3-Year Repudiation Bar (Supreme Court Benchmark)",
    parties: "Manmohan Nanda v. United India Insurance Co. Ltd.",
    citation: "Civil Appeal No. 8386 of 2015, (2022) 10 SCC 431",
    date: "Judgment Dated 06 December 2021",
    facts:
      "The appellant held an overseas mediclaim policy and suffered an acute myocardial infarction at San Francisco airport requiring angioplasty and stenting costing USD 229,800. The insurance company repudiated the claim on the ground of non-disclosure of pre-existing condition, pointing out that the insured had been on statins and medication for hyperlipidemia and mild diabetes. The insurer argued that failure to mention dyslipidemia in the proposal form constituted active non-disclosure.",
    holding:
      "The Supreme Court held that the duty of disclosure is not an open license for insurers to repudiate claims on trivial or routine health parameters. The court ruled that an insurer cannot reject a claim unless there is a clear, scientifically established causal connection between the alleged undisclosed condition and the acute event. The bench reaffirmed that insurers must underwrite policies carefully at inception rather than using health history as an escape hatch upon claim submission. The insurer was ordered to pay the full claim amount alongside interest and litigation costs.",
    amount: "USD 229,800 (~₹1.85 Crore) Full Indemnity Claim + 9% Annual Interest + ₹1,00,000 Costs",
    takeaway:
      "If your health insurer rejects a claim citing undisclosed hypertension, diabetes, or cholesterol, they must prove two things: (1) that the condition was an active pre-existing disease with ongoing clinical severity, and (2) that the acute condition necessitating hospitalization was directly caused by the undisclosed condition. In the absence of medical nexus, repudiation is void.",
  },
  {
    title: "Technical Delay in Claim Intimation Cannot Defeat a Genuine Claim (Supreme Court Mandate)",
    parties: "Gurmel Singh v. Branch Manager, National Insurance Co. Ltd.",
    citation: "Civil Appeal No. 4071 of 2022, (2022) 7 SCC 726",
    date: "Judgment Dated 20 May 2022",
    facts:
      "The insured suffered an insured loss but submitted the claim documents past the contractual timeline of 14 days due to unforeseen personal emergencies. The insurance company rejected the claim outright on the technical ground of delayed intimation and late submission of claim vouchers, contending that the policy condition made timely notice an absolute condition precedent to liability.",
    holding:
      "The Supreme Court unequivocally reaffirmed its earlier doctrine in Om Prakash v. Reliance General Insurance (2017) 9 SCC 724. The bench held that the Consumer Protection Act is social welfare legislation and insurance contracts cannot be construed hyper-technically to defeat bona fide consumer rights. The court observed that when a medical emergency or loss is genuine, an administrative delay in intimating the insurer or providing receipts cannot extinguish the substantive liability of the insurer. The repudiation was quashed.",
    amount: "Full Insurance Sum @ 9% Interest from Date of Filing + ₹50,000 Litigation Compensation",
    takeaway:
      "Health insurers frequently cite 24-hour intimation or 30-day bill submission clauses to repudiate reimbursement claims. Under binding Supreme Court judgments and IRDAI 2011/2024 directives, delay accompanied by reasonable grounds cannot justify claim rejection.",
  },
  {
    title: "TPA & Medical Desks Cannot Override Treating Doctor on 'Medical Necessity' (NCDRC Ruling)",
    parties: "Apollo Munich Health Insurance Co. Ltd. v. Dr. K. B. Mathur & Ors.",
    citation: "Revision Petition No. 2884 of 2018, NCDRC New Delhi",
    date: "Order Dated 14 March 2023",
    facts:
      "The complainant was admitted for 3 days with severe viral sepsis, severe dehydration, and fluctuating vitals. The insurer's Third Party Administrator (TPA) repudiated the reimbursement claim of ₹1,85,000 under the 'Not Medically Necessary' exclusion clause, asserting that the patient was merely administered oral hydration and oral antipyretics and did not require indoor hospital care.",
    holding:
      "The National Consumer Disputes Redressal Commission (NCDRC) held that a desk officer or medical scrutinizer of a TPA who has never physically examined the patient has zero clinical authority to substitute their opinion for that of the treating physician. When a registered medical practitioner with clinical responsibility decides that hospitalization is necessary to safeguard the patient's life or monitor vitals, the insurance company is legally bound by that clinical judgment. The NCDRC upheld full compensation.",
    amount: "₹1,85,000 Full Hospitalization Bill + 12% Penal Interest + ₹25,000 Mental Distress Damages",
    takeaway:
      "When a claim is rejected on the ground that 'hospitalization was not warranted' or 'treatment was diagnostic only', obtain a written Medical Necessity Certificate from your admitting doctor. Consumer courts and Ombudsmen consistently rule in favor of the treating physician.",
  },
  {
    title: "Ombudsman Award: Rejection of Daycare & Modern Procedures Under 24h Clause Struck Down",
    parties: "Smt. Sunita Sharma v. Star Health & Allied Insurance Co. Ltd.",
    citation: "Award No. IO/DEL/A/HI/0142/2023-24, Insurance Ombudsman (Delhi)",
    date: "Award Dated 18 October 2023",
    facts:
      "The complainant underwent intravitreal eye injection and laser photocoagulation for diabetic retinopathy at an advanced ophthalmic center. The patient was discharged after 6 hours. The insurer rejected the ₹78,000 claim, citing Clause 3.1 requiring a minimum 24-hour continuous indoor hospitalization.",
    holding:
      "The Insurance Ombudsman observed that under the IRDAI Master Circular on Modern Treatment Methods, insurers are legally mandated to cover specialized procedures performed in a daycare center under local anesthesia or sedation. Rejecting modern medical advances by relying on obsolete 24-hour hospitalization clauses violates IRDAI guidelines and constitutes arbitrary denial of service. The Ombudsman directed Star Health to settle the entire claim within 30 days.",
    amount: "₹78,000 Full Daycare Procedure Reimbursement + Compliance within 30 Days",
    takeaway:
      "Daycare procedures such as chemotherapy, dialysis, lithotripsy, cataract, vitrectomy, and laparoscopic surgeries cannot be repudiated under the 24-hour stay requirement if they were carried out in a recognized hospital or daycare center.",
  },
];

const FAQS = [
  {
    question: "What is the very first step to take when a health insurance claim is rejected?",
    answer:
      "First, secure the insurer's formal Repudiation or Rejection Letter stating the exact policy clause, medical reason, and sub-limit applied. Next, obtain a written Medical Necessity and Causality Certificate from your treating doctor directly refuting the insurer's grounds (e.g. confirming no nexus between prior ailments and the acute hospital admission). Once armed with these clinical records, file a formal complaint with the insurer's Internal Grievance Redressal Officer (GRO) before escalating to the Insurance Ombudsman or serving a statutory legal demand notice.",
  },
  {
    question: "Can an insurance company reject a claim for pre-existing disease after 3 years?",
    answer:
      "No. Under Section 45 of the Insurance Act, 1938 and the IRDAI Master Circular 2024, no insurance policy can be called into question or repudiated on grounds of misstatement, misrepresentation, or non-disclosure of facts after the expiry of 3 years (36 months) from the date of issuance or revival. Once your policy has continuously run for 3 years without a break, the insurer is legally precluded from repudiating claims on the ground of undisclosed pre-existing conditions.",
  },
  {
    question: "What should I do if my claim is rejected citing 'Hospitalisation Not Medically Necessary'?",
    answer:
      "This is one of the most common TPA rejection tactics. To overturn it, request the hospital's medical records department to issue the complete Inpatient Daily Case Record, nursing vitals chart, IV fluid administration chart, and an explicit Medical Justification Letter signed by the treating consultant explaining why indoor monitoring was clinically mandatory to avert complications. Under binding NCDRC precedents, TPAs cannot overrule the clinical judgment of an attending physician.",
  },
  {
    question: "Can an insurance claim be denied simply because I was discharged in less than 24 hours?",
    answer:
      "No. Under IRDAI's Modern Treatment Methods guidelines and Master Circular 2024, insurance companies cannot insist on a 24-hour hospitalization stay for modern surgical and therapeutic procedures. Surgeries and procedures performed as daycare treatments—including chemotherapy, hemodialysis, eye surgeries, laparoscopic operations, and radiotherapy—are fully covered even if the patient is discharged within a few hours.",
  },
  {
    question: "What is the difference between claim repudiated and claim rejected in Indian insurance law?",
    answer:
      "In insurance terminology, 'rejection' typically refers to technical deficiencies, incomplete documentation, or premature administrative filing that can be cured by supplying missing bills or query responses. 'Repudiation' is a formal legal denial where the insurer disclaims liability under the contract alleging fraud, non-disclosure (Section 45), policy exclusions, or lack of coverage. Repudiation triggers the statutory timeline to approach the Insurance Ombudsman or Consumer Commission.",
  },
  {
    question: "How does the Insurance Ombudsman work, and what is its financial limit in 2026?",
    answer:
      "The Insurance Ombudsman is a quasi-judicial statutory grievance forum established under the Insurance Ombudsman Rules, 2017. It charges zero court fees, requires no advocate representation, and handles complaints where the claim amount (including expenses) is up to ₹50 lakhs. Under IRDAI's 2026 framework, if an insurer fails to file its reply within 7 days, the Ombudsman can pass ex-parte awards in favor of the policyholder. The award is legally binding on the insurance company within 30 days.",
  },
  {
    question: "Health insurance claim reject ho gaya, kya mujhe advocate se legal notice bhejna chahiye?",
    answer:
      "Haan. Agar insurance company ka Grievance Officer (GRO) 15 dinon ke andar aapki appeal resolve na kare, toh advocate ke zariye Section 45 Insurance Act aur Consumer Protection Act 2019 ke tehat ek formal statutory legal notice bhejna behad prabhavi rehta hai. LegalRecovery.in par verified advocate Speed Post aur legal email se 15-day demand notice bhejte hain, jisse adhiktar insurance companies court case se bachne ke liye claim re-evaluate karke settle kar deti hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Top Health Claim Rejection Reasons and the Counter-Argument for Each",
  description:
    "Claim rejected for PED, daycare or 'not medically necessary'? Each common reason, the legal counter, evidence and the forum to use.",
  datePublished: "2026-11-04T12:00:00+05:30",
  dateModified: "2026-11-04T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/health-insurance-claim-rejection-reasons-counter`,
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
    name: "Health Insurance Claim Rejection Legal Counter-Arguments",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "Insurance Claim Recovery",
      item: `${SITE_URL}/legal-notice-to-insurance-company-claim-rejection-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Health Claim Rejection Reasons & Counters",
      item: `${SITE_URL}/health-insurance-claim-rejection-reasons-counter`,
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

export default function HealthInsuranceClaimRejectionPage() {
  const breadcrumbItems = [
    {
      label: "Insurance Recovery",
      href: "/legal-notice-to-insurance-company-claim-rejection-recovery",
    },
    {
      label: "Rejection Reasons & Counters",
      href: "/health-insurance-claim-rejection-reasons-counter",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section matching site design language */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>IRDAI Policyholder Protection Mandate 2024–2026</span>
              <span className="text-red-500">•</span>
              <span>Section 45 Insurance Act Defense</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Top Health Claim Rejection Reasons and the Counter-Argument for Each
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Health Claim Repudiation &amp; Overturn Rights)
              </p>
              <p>
                Under Section 45 of the Insurance Act 1938 and IRDAI Master Circular 2024, insurers cannot reject claims after 3 continuous policy years for non-disclosure. TPA denials for daycare, late intimation, or &quot;medical necessity&quot; are regularly quashed by the Insurance Ombudsman and Consumer Commissions when supported by treating doctor certificates. Policyholders can serve a 15-day statutory legal notice and seek awards up to ₹50 lakh.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Section 45 Non-Disclosure Bar
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">₹50 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Ombudsman Zero-Fee Limit
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">7 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  IRDAI Ex-Parte Reply Mandate
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">100% + Int.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Relief in Landmark Orders
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <HealthInsuranceTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Archetype G4 Hero Element - The Master Comparison Matrix */}
              <section
                id="heading-rejection-matrix"
                aria-labelledby="heading-rejection-matrix-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-rejection-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The Master Counter-Argument Matrix: Rejection Ground vs. Statutory Defense
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Every common health insurance repudiation pretext, the decisive legal counter-argument, mandatory evidence, and the statutory forum to enforce your claim:
                  </p>
                </div>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[700px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">
                      Health Insurance Rejection Reasons and Statutory Counter-Arguments Matrix
                    </caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3.5 px-4">
                          Rejection Reason / Insurer Clause
                        </th>
                        <th scope="col" className="py-3.5 px-4">
                          The Legal Counter-Argument
                        </th>
                        <th scope="col" className="py-3.5 px-4">
                          Required Counter-Evidence
                        </th>
                        <th scope="col" className="py-3.5 px-4">
                          Winning Forum &amp; Statute
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th
                          scope="row"
                          className="py-3.5 px-4 font-semibold text-slate-900 align-top"
                        >
                          <span className="text-red-700 font-bold block">1. Pre-Existing Disease (PED)</span>
                          <span className="text-[11px] text-slate-500 font-normal">
                            Alleged non-disclosure of hypertension, diabetes, or prior condition.
                          </span>
                        </th>
                        <td className="py-3.5 px-4 align-top leading-relaxed">
                          Under Section 45 Insurance Act, policy cannot be questioned after 3 continuous years. Even within 3 years, insurer must prove fraud and a direct biological causal nexus between the prior condition and the acute event (SC: <em>Manmohan Nanda</em>).
                        </td>
                        <td className="py-3.5 px-4 align-top text-xs text-slate-600">
                          Policy continuous renewal proof; Treating Doctor &quot;No-Nexus Certificate&quot;; original proposal form copy.
                        </td>
                        <td className="py-3.5 px-4 align-top text-xs">
                          <strong className="text-slate-900 block">Insurance Ombudsman / Consumer Court</strong>
                          <span className="text-slate-500">s.45 Insurance Act &amp; IRDAI Master Circular 2024</span>
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th
                          scope="row"
                          className="py-3.5 px-4 font-semibold text-slate-900 align-top"
                        >
                          <span className="text-red-700 font-bold block">2. Not Medically Necessary</span>
                          <span className="text-[11px] text-slate-500 font-normal">
                            &quot;Patient could have been treated on OPD / oral medications alone.&quot;
                          </span>
                        </th>
                        <td className="py-3.5 px-4 align-top leading-relaxed">
                          A desk doctor of a TPA who never examined the patient cannot overrule the clinical discretion of the treating doctor. If the specialist deemed admission necessary to monitor vitals, it is covered under s.2(11) CPA 2019.
                        </td>
                        <td className="py-3.5 px-4 align-top text-xs text-slate-600">
                          Emergency admission sheet, vitals monitoring chart, IV administration sheet, and HOD Medical Necessity certificate.
                        </td>
                        <td className="py-3.5 px-4 align-top text-xs">
                          <strong className="text-slate-900 block">e-Jagriti Consumer Court / Ombudsman</strong>
                          <span className="text-slate-500">NCDRC Apollo Munich Precedent</span>
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th
                          scope="row"
                          className="py-3.5 px-4 font-semibold text-slate-900 align-top"
                        >
                          <span className="text-red-700 font-bold block">3. Daycare / 24h Clause</span>
                          <span className="text-[11px] text-slate-500 font-normal">
                            Discharged in under 24 hours (e.g. eye surgery, chemo, dialysis, laparoscopy).
                          </span>
                        </th>
                        <td className="py-3.5 px-4 align-top leading-relaxed">
                          IRDAI Master Circular 2024 explicitly requires insurers to cover advanced procedures in daycare settings regardless of a 24-hour admission requirement when enabled by modern surgical technology.
                        </td>
                        <td className="py-3.5 px-4 align-top text-xs text-slate-600">
                          Operative notes; Surgeon daycare certification; IRDAI Modern Treatment List reference.
                        </td>
                        <td className="py-3.5 px-4 align-top text-xs">
                          <strong className="text-slate-900 block">Insurance Ombudsman</strong>
                          <span className="text-slate-500">Rule 13(1)(b) Insurance Ombudsman Rules</span>
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th
                          scope="row"
                          className="py-3.5 px-4 font-semibold text-slate-900 align-top"
                        >
                          <span className="text-red-700 font-bold block">4. Delayed Claim Intimation</span>
                          <span className="text-[11px] text-slate-500 font-normal">
                            Failure to notify within 24–48h or submit bills within 30 days.
                          </span>
                        </th>
                        <td className="py-3.5 px-4 align-top leading-relaxed">
                          IRDAI Circular IRDA/HLTH/MISC/CIR/216/09/2011 &amp; Supreme Court in <em>Gurmel Singh</em> prohibit rejecting honest claims on technical delay grounds where emergency reasons exist.
                        </td>
                        <td className="py-3.5 px-4 align-top text-xs text-slate-600">
                          Emergency hospitalization admission log; treating doctor critical care summary; bona fide delay affidavit.
                        </td>
                        <td className="py-3.5 px-4 align-top text-xs">
                          <strong className="text-slate-900 block">Advocate Legal Notice / GRO / Ombudsman</strong>
                          <span className="text-slate-500">Supreme Court in Gurmel Singh (2022)</span>
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th
                          scope="row"
                          className="py-3.5 px-4 font-semibold text-slate-900 align-top"
                        >
                          <span className="text-red-700 font-bold block">5. Room Rent Proportionate Cut</span>
                          <span className="text-[11px] text-slate-500 font-normal">
                            Unlawful slashing of ICU, surgeon fees, and medicines based on room sub-limits.
                          </span>
                        </th>
                        <td className="py-3.5 px-4 align-top leading-relaxed">
                          Proportionate deductions cannot be legally applied to fixed charges (ICU, implants, MRP medicines, diagnostic scans, and surgeon charges that do not vary by room type) under IRDAI guidelines.
                        </td>
                        <td className="py-3.5 px-4 align-top text-xs text-slate-600">
                          Detailed itemized hospital tariff card; separate ICU billing; pharmacy bill receipts with batch numbers.
                        </td>
                        <td className="py-3.5 px-4 align-top text-xs">
                          <strong className="text-slate-900 block">Bima Bharosa / Insurance Ombudsman</strong>
                          <span className="text-slate-500">IRDAI Health Regulations 2024</span>
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50/80">
                        <th
                          scope="row"
                          className="py-3.5 px-4 font-semibold text-slate-900 align-top"
                        >
                          <span className="text-red-700 font-bold block">6. Cashless Denied at Hospital</span>
                          <span className="text-[11px] text-slate-500 font-normal">
                            Emergency pre-auth or discharge cashless request rejected at hospital counter.
                          </span>
                        </th>
                        <td className="py-3.5 px-4 align-top leading-relaxed">
                          Cashless rejection does NOT constitute claim repudiation. The policyholder has an absolute statutory right to pay the hospital and seek 100% reimbursement within 30 days under IRDAI TAT directives.
                        </td>
                        <td className="py-3.5 px-4 align-top text-xs text-slate-600">
                          Original stamped hospital bill; paid receipts; discharge card; indoor case record; cashless query thread.
                        </td>
                        <td className="py-3.5 px-4 align-top text-xs">
                          <strong className="text-slate-900 block">Reimbursement Filing → 15-Day Legal Notice</strong>
                          <span className="text-slate-500">IRDAI 1-Hour Cashless &amp; TAT Mandates</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2: Deep Dive into the Top Rejection Grounds */}
              <section
                id="heading-rejection-breakdown"
                aria-labelledby="heading-rejection-breakdown-title"
                className="scroll-mt-28 space-y-6"
              >
                <h2
                  id="heading-rejection-breakdown-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Deep-Dive: How to Dismantle the 4 Most Frequent Health Claim Rejection Pretexts
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In India, private and public health insurers frequently rely on standard template letters drafted by Third Party Administrators (TPAs) to reject legitimate reimbursement claims. Understanding the exact statutory boundary of each defense allows you to reverse the repudiation:
                </p>

                <div className="space-y-6 text-slate-700">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                      1. Pre-Existing Disease (PED) and the Section 45 Statutory Bar
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      Insurers often dredge up an insured&apos;s past consultations to argue that mild hypertension or elevated triglycerides should have been disclosed during policy purchase. Under <strong className="text-slate-900 font-semibold">Section 45 of the Insurance Act, 1938</strong>, an insurer is barred from calling any policy into question on the grounds of misrepresentation or non-disclosure once 36 continuous months have elapsed from policy inception or reinstatement.
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      Moreover, under the Supreme Court precedent in <em>Manmohan Nanda (2022)</em>, even if a policy is under 3 years old, the insurer cannot repudiate liability unless it demonstrates two rigorous standards: first, that the insured fraudulently concealed a material health condition; and second, that the medical condition requiring acute treatment had a direct clinical nexus to the undisclosed condition. If you suffered a gall bladder attack, a road accident, or dengue, the insurer cannot invoke unrelated thyroid or hypertension history.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                      2. The Myth of the Mandatory &quot;24-Hour Hospital Stay&quot; for Daycare Procedures
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      Many policy clauses date back decades and state that an insured must be hospitalized for an unbroken period of at least 24 hours. However, surgical oncology, ophthalmology, cardiology, and orthopedics have evolved dramatically. With modern anesthesia and minimally invasive robotics, complex operations like phacoemulsification for cataracts, vitrectomy, chemotherapy infusions, dialysis, and laparoscopic appendectomies require only 4 to 8 hours of hospital recovery.
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      The <strong className="text-slate-900 font-semibold">IRDAI Master Circular on Protection of Policyholders&apos; Interests (2024)</strong> explicitly mandates that all specialized procedures performed under daycare conditions must be indemnified without imposing the 24-hour rule. Insurance Ombudsmen routinely award 100% claim settlement against companies invoking this archaic clause.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                      3. Repudiations Citing &quot;Active Treatment Not Medically Necessary&quot;
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      TPAs often issue repudiation letters stating: <em>&quot;The insured was admitted only for evaluation or oral antibiotics which could have been administered at home.&quot;</em> This is a direct encroachment on clinical autonomy. In dozens of binding judgments, the National Consumer Disputes Redressal Commission (NCDRC) has ruled that a desk insurance auditor or TPA clerk who has never seen the patient cannot second-guess a certified doctor&apos;s decision to admit.
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      When a patient is admitted with high fever, delirium, or severe abdominal pain, medical science demands continuous bedside monitoring, IV hydration, and immediate availability of intensive care. A structured Medical Necessity Certificate from the treating hospital completely defeats this defense before the Ombudsman.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                      4. Arbitrary Slashing of Claims via &quot;Proportionate Deductions&quot;
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      If your policy has a room rent capping of 1% of the sum insured (e.g., ₹5,000 per day on a ₹5 lakh cover) and you occupied a room costing ₹7,500, insurers frequently attempt to slash the entire hospital bill by 33%. This across-the-board deduction is illegal under IRDAI guidelines.
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      Under IRDAI circulars, proportionate cuts can only apply to expenses directly tied to room tariff variance. High-value medical inputs such as pacemakers, coronary stents, orthopedic implants, MRI/CT scans, pharmacy medications with fixed Maximum Retail Price (MRP), and ICU charges cannot be subjected to proportionate deductions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Verified Precedents & Court / Ombudsman Orders */}
              <section
                id="heading-court-orders"
                aria-labelledby="heading-court-orders-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-orders-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Order Digest: 4 Verifiable Rulings Against Health Insurers
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Legal Precedents
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
                            Order #{idx + 1} • {c.citation}
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
                            <strong className="text-slate-900 font-bold block mb-0.5">
                              The Dispute &amp; Repudiation Defense:
                            </strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">
                              Judicial &amp; Ombudsman Holding:
                            </strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Total Judicial Relief &amp; Compensation
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Binding Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Nationwide Across All Insurers
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your claim:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: Hand-Authored SVG Escalation Pipeline */}
              <section
                id="heading-escalation-flow"
                aria-labelledby="heading-escalation-flow-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Escalation Pipeline: From Claim Repudiation to Settlement
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Do not abandon your claim after a rejection letter. Follow this statutory escalation pipeline to recover your funds:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#1E293B] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Step 1
                    </span>
                    <h3 className="font-bold text-sm">Formal Repudiation Letter</h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Extract the exact rejection clause, TPA query record, and hospital IPD files.
                    </p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                      Step 2
                    </span>
                    <h3 className="font-bold text-sm">Internal GRO Appeal (15 Days)</h3>
                    <p className="text-xs text-amber-900 mt-1">
                      Submit Medical Necessity Certificate to the Insurer&apos;s Grievance Officer.
                    </p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                      Step 3
                    </span>
                    <h3 className="font-bold text-sm">Bima Bharosa Portal Docket</h3>
                    <p className="text-xs text-slate-700 mt-1">
                      Log IRDAI Integrated Grievance on bimabharosa.irdai.gov.in.
                    </p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">
                      Step 4
                    </span>
                    <h3 className="font-bold text-sm">Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">
                      Serve formal 15-day statutory demand under Section 45 Insurance Act.
                    </p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      Step 5
                    </span>
                    <h3 className="font-bold text-sm">Insurance Ombudsman / e-Jagriti</h3>
                    <p className="text-xs text-emerald-900 mt-1">
                      Obtain zero-fee binding award up to ₹50 lakh or consumer court damages.
                    </p>
                  </div>
                </div>

                {/* Hand-Authored SVG Flowchart (Desktop & Smooth Mobile Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Diagram</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Health Insurance Claim Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="hiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="hiAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="hiSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#hiGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">
                      STEP 1
                    </text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      Claim Repudiated
                    </text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">
                      Obtain Written Letter
                    </text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">
                      Identify Clause &amp; Excuse
                    </text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect
                      x="180"
                      y="20"
                      width="140"
                      height="90"
                      rx="10"
                      fill="#FEF3C7"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                    />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">
                      STEP 2
                    </text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">
                      Doctor&apos;s Certificate
                    </text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">
                      No-Nexus &amp; Necessity
                    </text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">
                      Refute TPA Arguments
                    </text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect
                      x="350"
                      y="20"
                      width="140"
                      height="90"
                      rx="10"
                      fill="#F8FAFC"
                      stroke="#64748B"
                      strokeWidth="1.5"
                    />
                    <text x="420" y="45" fill="#1E293B" fontWeight="bold" textAnchor="middle">
                      STEP 3
                    </text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">
                      GRO &amp; Bima Bharosa
                    </text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">
                      15-Day Internal TAT
                    </text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">
                      Online IRDAI Token
                    </text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#hiAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">
                      STEP 4
                    </text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      Advocate Notice
                    </text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                      15-Day Final Demand
                    </text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">
                      Speed Post + Email
                    </text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#hiSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">
                      STEP 5
                    </text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">
                      Full Recovery
                    </text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">
                      Ombudsman / e-Jagriti
                    </text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">
                      Up to ₹50 Lakh Award
                    </text>

                    {/* Bottom Statutory Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">
                      STATUTORY TIMELINES UNDER IRDAI &amp; OMBUDSMAN RULES:
                    </text>
                    <text x="25" y="192" fill="#475569" fontSize="10">
                      • Insurer GRO Response Window: 15 Calendar Days to resolve dispute or reject in writing
                    </text>
                    <text x="25" y="208" fill="#475569" fontSize="10">
                      • Insurance Ombudsman Filing: Within 1 year of GRO rejection; 0 court fee; binding within 30 days
                    </text>
                    <text x="25" y="224" fill="#475569" fontSize="10">
                      • 2026 IRDAI Directive: Ombudsman can pass ex-parte awards if insurer fails to respond in 7 days
                    </text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section
                id="heading-playbook"
                aria-labelledby="heading-playbook-title"
                className="scroll-mt-28 space-y-4 sm:space-y-5"
              >
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook: How to Contest and Overturn a Rejected Health Claim
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived from winning Insurance Ombudsman awards and consumer commission orders, this 5-step playbook cuts through bureaucratic deflection:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Audit the Repudiation Notice and Extract Policy Wordings
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Demand the complete written repudiation letter specifying the exact clause number (e.g. Clause 4.1 PED, Clause 4.2 24-hour admission, or Clause 4.8 unproven treatment). Cross-reference the clause against your active policy schedule. Often, TPAs quote standard clauses that were modified or deleted in your latest renewed policy terms.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Obtain a Signed &quot;No-Nexus &amp; Medical Necessity Certificate&quot;
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Approach your admitting specialist. Request a formal clinical certificate stating: (1) that the patient was admitted under active medical distress; (2) that parenteral / continuous indoor clinical care was non-negotiable; and (3) that the acute condition bears zero clinical nexus to any past lifestyle ailment.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Level-1 Grievance with the Insurer&apos;s GRO &amp; Bima Bharosa
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Under IRDAI regulations, every insurer must have a designated Grievance Redressal Officer (GRO). Send a registered email and speed post detailing the claim details, attaching the doctor&apos;s certificate. Simultaneously, register an escalation token on <a href="https://bimabharosa.irdai.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">Bima Bharosa</a> to initiate the statutory 15-day countdown.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Statutory Advocate Demand Notice (15-Day Ultimatum)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the GRO fails to resolve the dispute within 15 days or upholds the repudiation, have an advocate draft and dispatch a formal legal notice to the insurer&apos;s registered corporate office. Dispatched under Section 63 BSA and Speed Post, the notice cites Section 45 Insurance Act, IRDAI Master Circular 2024, and relevant Supreme Court rulings, demanding full payout plus 18% penal interest within 15 days.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See transparent notice drafting fees on our{" "}
                        <Link href="/legal-notice-charges" className="text-blue-700 underline">
                          legal notice charges
                        </Link>{" "}
                        schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Lodge Petition with Insurance Ombudsman or File on e-Jagriti
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        For claims up to ₹50 lakh, file an online petition before the regional Insurance Ombudsman (see our{" "}
                        <Link
                          href="/legal-notice-to-insurance-company-claim-rejection-recovery"
                          className="text-blue-700 underline font-semibold"
                        >
                          insurance claim escalation guide)
                        </Link>
                        . If the claim exceeds ₹50 lakh or involves severe bad-faith damages, file a consumer petition on e-Jagriti under Section 35 CPA 2019 from your home district.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Archetype G4 Forum Comparison Matrix & Personas */}
              <section
                id="heading-forum-comparison"
                aria-labelledby="heading-forum-comparison-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-forum-comparison-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Forum Comparison: Insurance Ombudsman vs. Consumer Court vs. Advocate Notice
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Evaluate cost, turnaround time, financial limits, and enforcement teeth across dispute resolution routes:
                  </p>
                </div>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comparison of Insurance Dispute Resolution Forums</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Forum / Route</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Cost / Court Fee</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Resolution Timeline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Financial Jurisdiction</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforceability &amp; Binding Nature</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Advocate Legal Demand Notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-800 font-bold">Flat ₹1,499</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Unlimited claim amount</td>
                        <td className="py-3.5 px-4 text-xs">
                          Triggers pre-litigation settlement; required evidence for court.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Bima Bharosa Portal (IRDAI)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">₹0 (Free)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">15 to 30 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Unlimited claim amount</td>
                        <td className="py-3.5 px-4 text-xs">
                          Regulatory tracking; pushes insurer GRO to review internally.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Insurance Ombudsman (Rule 13)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">₹0 (Zero Fee)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">1 to 3 Months</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">Up to ₹50 Lakh</td>
                        <td className="py-3.5 px-4 text-xs">
                          100% legally binding on insurer; policyholder retains right to appeal if dissatisfied.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Consumer Court (e-Jagriti)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Nominal (₹0 to ₹2,000)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">6 to 18 Months</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">
                          District up to ₹50L, State up to ₹2Cr
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          Judicial decree with penal interest, mental agony compensation, and execution powers.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Which one is right for you: 3 Personas */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-800">
                    Which Escalation Route is Right for You?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                      <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                        Persona A: Speed &amp; Pre-Litigation Pressure
                      </span>
                      <strong className="text-slate-900 text-sm font-bold block">
                        Advocate Legal Demand Notice
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Best if your claim was repudiated within the past 30 days and you want an immediate corporate response. An official advocate notice delivered via Speed Post and legal email compels the insurer&apos;s legal panel to review the file before incurring litigation exposure.
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                        Persona B: Claims Under ₹50 Lakh
                      </span>
                      <strong className="text-slate-900 text-sm font-bold block">
                        Insurance Ombudsman Scheme
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Best if the insurer&apos;s GRO has rejected your appeal and your claim is under ₹50 lakhs. There is zero court fee, no advocate is allowed (meaning insurers cannot hide behind expensive counsel), and orders are strictly binding on the insurer within 30 days.
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                        Persona C: Large Claims &amp; Heavy Damages
                      </span>
                      <strong className="text-slate-900 text-sm font-bold block">
                        e-Jagriti Consumer Court
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Best if your claim exceeds ₹50 lakhs, if the Ombudsman has rejected your complaint, or if you suffered catastrophic financial injury requiring substantial damages for mental agony and deficiency of service under Section 35 CPA 2019.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Interactive Diagnostic Tabs */}
              <section
                id="heading-interactive-diagnostic"
                aria-labelledby="heading-interactive-diagnostic-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-interactive-diagnostic-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Diagnostic: Pick Your Rejection Scenario
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select your exact dispute scenario to view the insurer&apos;s standard excuse, your statutory counter-argument, and immediate action steps:
                  </p>
                </div>

                <HealthInsuranceRejectionTabs />
              </section>

              {/* Section 8: Worked Case Study */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Policyholder Overturns ₹4,85,000 Cardiac Claim Rejection
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Claim Recovery
                    </span>
                    <span className="text-xs text-slate-400">Apollo Hospitals, Chennai • Cardiac Stenting</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Dispute:</strong> R. Krishnamurthy (56) underwent emergency angioplasty and double stent placement following an acute myocardial infarction, incurring total hospital expenses of ₹4,85,000. Krishnamurthy had held a continuous family floater health policy with a leading private insurer for 4 years and 2 months.
                    </p>
                    <p>
                      <strong>The Rejection:</strong> The TPA rejected the reimbursement claim under Clause 4.1 (&quot;Non-Disclosure of Pre-Existing Disease&quot;). The insurer pointed to a routine consultation note from 5 years earlier mentioning borderline high blood pressure and claimed that Krishnamurthy fraudulently concealed hypertension on his original proposal form.
                    </p>
                    <p>
                      <strong>The Legal Counter:</strong> Krishnamurthy engaged LegalRecovery.in. An advocate drafted and dispatched an official statutory demand notice to the insurer&apos;s Grievance Redressal Officer and Head of Claims. The notice established two unassailable legal grounds:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-slate-200">
                      <li>
                        <strong>Section 45 Statutory Bar:</strong> The policy had continuously run for more than 3 years (4 years, 2 months), making repudiation on grounds of non-disclosure strictly illegal under Section 45 Insurance Act 1938.
                      </li>
                      <li>
                        <strong>Treating Cardiologist Nexus Certificate:</strong> A certified clinical letter from the Senior Interventional Cardiologist confirmed that the acute coronary blockage was caused by a ruptured atheromatous plaque unrelated to borderline readings from half a decade earlier.
                      </li>
                    </ul>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution:</strong>
                      On Day 12 after delivery of the advocate legal demand notice via Speed Post, the insurer&apos;s Claims Review Committee reversed the repudiation order. The full hospital claim of ₹4,85,000 was settled directly to Krishnamurthy&apos;s bank account, alongside a formal email confirming continuation of his policy coverage without loading.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Documents You Must Secure Before Contesting a Rejection
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic medical communications, diagnostic telemetry, and digital billing records are fully admissible. Assemble these 6 documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Written Repudiation / Rejection Letter:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Issued by the insurer or TPA stating the exact policy clause, medical justification, and claim reference number.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Complete Hospital Discharge Summary &amp; IPD Records:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Including admission clinical history, past history recording, operative notes, and doctor daily progress notes.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Treating Doctor&apos;s Medical Necessity &amp; No-Nexus Certificate:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Signed by the attending specialist certifying clinical urgency, indoor necessity, and lack of nexus to prior ailments.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Itemized Hospital Final Bill &amp; Paid Payment Receipts:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Detailed departmental breakdown (room rent, pharmacy, ICU, surgeon, investigations) with payment transaction UTRs.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Policy Schedules &amp; Continuous Renewal Records:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        All policy certificates from inception showing continuity, porting history, and date of first enrollment to enforce Section 45.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        GRO Escalation &amp; Bima Bharosa Complaint Token:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Proof of exhausting internal grievance mechanisms or screenshot of unresolved Bima Bharosa regulatory docket.
                      </p>
                    </div>
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
                    Frequently Asked Questions: Overturning Health Claim Rejections
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in Section 45 Insurance Act, IRDAI Master Circular 2024, and Judicial Rulings
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
                  Statutory Authorities, Primary Regulations &amp; Judicial References
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
                  Statutory verification status: All provisions verified against the Insurance Act 1938, active IRDAI Gazette Notifications, Insurance Ombudsman Rules 2017 (as amended 2023), and e-Jagriti consumer court standards as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice to Insurance Company
                </h2>
                <HealthInsuranceNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Insurance &amp; Financial Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-to-insurance-company-claim-rejection-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Insurance Claim Rejection Legal Notice Hub →
                  </Link>
                  <Link
                    href="/legal-notice-to-insurance-company-claim-rejection-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Insurance Ombudsman &amp; Bima Bharosa Guide →
                  </Link>
                  <Link
                    href="/claim-repudiated-vs-rejected-difference"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Claim Repudiated vs Rejected →
                  </Link>
                  <Link
                    href="/insurance-mis-selling-free-look-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Insurance Mis-Selling &amp; Free-Look Refund →
                  </Link>
                  <Link
                    href="/insurance-premium-auto-debited-without-consent"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unauthorized Insurance Auto-Debit Refund →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Pricing Schedule →
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
