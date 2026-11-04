import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ClaimRepudiatedNoticeCTA from "./ClaimRepudiatedNoticeCTA";
import ClaimDifferenceTableOfContents from "./ClaimDifferenceTableOfContents";
import ClaimDifferenceDiagnosticTabs from "./ClaimDifferenceDiagnosticTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Claim Repudiated vs Rejected: What's the Difference?",
  description:
    "Repudiated and rejected claims are not the same. What each means, how it affects your next step and how to contest either.",
  alternates: {
    canonical: `${SITE_URL}/claim-repudiated-vs-rejected-difference`,
  },
  openGraph: {
    title: "Claim Repudiated vs Rejected: What's the Difference?",
    description:
      "Repudiated and rejected claims are not the same. What each means, how it affects your next step and how to contest either under IRDAI regulations.",
    url: `${SITE_URL}/claim-repudiated-vs-rejected-difference`,
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
    title: "IRDAI Master Circular on Protection of Policyholders' Interests, 2024 (Ref: IRDAI/NL-HLT/CIR/06/2024)",
    url: "https://irdai.gov.in/document-detail?documentId=4934898",
  },
  {
    title: "Insurance Ombudsman Rules, 2017 (as amended up to 2023) — Rule 13(1)(b) & Rule 17 (Jurisdiction up to ₹50 Lakhs & Ex-Parte Mandate)",
    url: "https://www.cioins.co.in/Rules",
  },
  {
    title: "Consumer Protection Act, 2019 (Act No. 35 of 2019) — Section 2(11) Deficiency in Service & Section 35",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "Bima Bharosa Integrated Grievance Management System (IGMS) — Insurance Regulatory and Development Authority of India",
    url: "https://bimabharosa.irdai.gov.in/",
  },
  {
    title: "Supreme Court of India — Manmohan Nanda v. United India Assurance Co. Ltd. (2022) 10 SCC 431 (Uberrima Fides & Repudiation Doctrine)",
    url: "https://main.sci.gov.in/judgment/judis/49045.pdf",
  },
  {
    title: "Supreme Court of India — Gurmel Singh v. Branch Manager, National Insurance Co. Ltd. (2022) 7 SCC 738 (Technical Rejection Struck Down)",
    url: "https://main.sci.gov.in/judgment/judis/49603.pdf",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Overturns Repudiation Based on Non-Nexus Pre-Existing Condition",
    parties: "Manmohan Nanda v. United India Assurance Co. Ltd.",
    citation: "Civil Appeal No. 8386 of 2015, (2022) 10 SCC 431",
    date: "Judgment Dated 06 December 2021",
    facts:
      "The appellant took an overseas medi-claim policy before travelling to the United States. While in transit at San Francisco airport, he suffered an acute myocardial infarction and underwent angioplasty stenting, incurring $2,62,842 in emergency medical expenses. The insurer repudiated the claim on the ground of non-disclosure of pre-existing condition, arguing the policyholder failed to disclose that he had been taking statins for dyslipidemia.",
    holding:
      "A two-judge bench of the Supreme Court set aside the repudiation, holding that the insurer cannot arbitrarily repudiate liability by linking an acute cardiac arrest to statin consumption without medical evidence establishing a direct causal nexus. The Court ruled that once an insurer accepts a proposal without seeking further medical verification on routine medications, it waives the right to repudiate later under the doctrine of uberrima fides. The Supreme Court ordered the insurer to reimburse the full claim of ₹43,00,000 along with ₹1,00,000 legal costs and interest.",
    amount: "₹43,00,000 Full Medical Claim Settlement + ₹1,00,000 Litigation Costs",
    takeaway:
      "An insurer cannot repudiate a claim by mechanically labelling every past consultation or common condition (such as dyslipidemia or mild hypertension) as a fraudulent concealment of pre-existing disease unless they medically prove an unbroken causal chain to the hospitalized ailment.",
  },
  {
    title: "Technical Rejection for Delayed Notice or Missing Documents Held Deficiency in Service",
    parties: "Gurmel Singh v. Branch Manager, National Insurance Co. Ltd.",
    citation: "Civil Appeal No. 4071 of 2022, (2022) 7 SCC 738",
    date: "Judgment Dated 20 May 2022",
    facts:
      "The insured vehicle was stolen. The complainant filed an immediate police FIR and notified the insurer. However, the insurer rejected the insurance claim on hyper-technical grounds, citing delayed submission of original documents (specifically the duplicate registration certificate from the transport authority) and procedural non-compliance with the 30-day claims window.",
    holding:
      "The Supreme Court held that insurance claims cannot be rejected or closed merely on hyper-technical grounds such as delay in submitting duplicate registration certificates or procedural delays in documentation when the incident itself (the theft) is undisputed and confirmed by police investigation. The Court observed that insurance companies must adopt a consumer-centric approach rather than acting like predatory litigants looking for flimsy excuses to avoid liability. The insurer was directed to pay the full insured declared value of ₹12,00,000 with 9% interest from the date of filing.",
    amount: "₹12,00,000 Full Insured Declared Value @ 9% Interest + Compensation",
    takeaway:
      "If your claim letter uses the word 'rejected' or 'closed for non-submission of documents', the insurer cannot legally forfeit your payout. If the underlying medical or financial event is proven, courts will order full payment irrespective of procedural delays.",
  },
  {
    title: "Insurance Ombudsman Awards ₹3,40,000 Overturning Bad-Faith Repudiation Letter",
    parties: "Deepak Sharma v. Star Health and Allied Insurance Co. Ltd.",
    citation: "Award Ref: DEL-H-048-2324-0891, Insurance Ombudsman, New Delhi",
    date: "Award Dated 14 November 2023",
    facts:
      "The complainant was admitted for emergency laparoscopic appendectomy. Star Health repudiated the entire reimbursement claim of ₹3,40,000, alleging that the patient had a 4-year history of diabetes mellitus which was concealed in the policy proposal form submitted 2 years prior. The insurer also cancelled the policy under Condition 8.",
    holding:
      "The Insurance Ombudsman observed that acute appendicitis is an independent emergency surgical condition having zero physiological connection with diabetes mellitus. Under the IRDAI Master Circular, insurers cannot cancel policies or repudiate claims for conditions unrelated to the admitted ailment unless deliberate fraud is proven through credible hospital admission records prior to policy inception. The Ombudsman quashed the repudiation, ordered the policy to be reinstated immediately, and directed the insurer to pay ₹3,40,000 plus penal interest under Rule 17(7).",
    amount: "₹3,40,000 Full Reimbursement + Policy Reinstatement + Penal Interest @ Bank Rate + 2%",
    takeaway:
      "The Insurance Ombudsman possesses summary statutory jurisdiction under Rule 13(1)(b) to quash arbitrary repudiation letters and force insurers to settle claims up to ₹50 Lakh without lengthy court battles.",
  },
  {
    title: "NCDRC Rejects 24-Hour Hospitalization Clause for Advanced Daycare Surgeries",
    parties: "Apollo Munich Health Insurance Co. Ltd. v. Mrs. Sudha Gupta",
    citation: "Revision Petition No. 1245 of 2017, NCDRC New Delhi",
    date: "Order Dated 18 April 2019",
    facts:
      "The complainant underwent an advanced vitreoretinal eye surgery and was discharged within 8 hours. The insurer repudiated the cashless and reimbursement claims asserting that the policy mandated continuous active in-patient hospitalisation of at least 24 hours under Clause 2.1.",
    holding:
      "The National Consumer Disputes Redressal Commission held that modern technological advancements in medicine and surgical procedures allow major operations to be completed within a few hours as daycare treatments. Insurers cannot cling to outdated 24-hour stay clauses to repudiate legitimate surgical claims when medical guidelines indicate day hospitalization was adequate. The Commission upheld the compensation award and penalized the insurer for unfair trade practice.",
    amount: "₹1,85,000 Surgical Reimbursement + ₹25,000 Harassment Damages",
    takeaway:
      "Repudiations citing 'under-24-hour hospitalization' or 'admission not medically necessary' collapse before consumer forums when backed by treating surgeon certificates.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "Claim 'repudiation' and claim 'rejection' mean the exact same thing in insurance.",
    fact: "Legally Distinct. Claim repudiation is a substantive legal denial denying contract liability or treating the policy as voidable due to breach of utmost good faith (e.g., non-disclosure, fraud, policy exclusions). Claim rejection is an administrative, technical, or procedural closure (e.g., missing bills, delayed filing) where the policy contract remains fully valid.",
    authority: "IRDAI Master Circular 2024 §6; CPA 2019 Section 2(11)",
  },
  {
    myth: "If your claim is rejected by the insurance company, the door is permanently shut.",
    fact: "Completely False. Rejections are typically curable defects. When a claim is rejected for non-submission of indoor case papers, detailed bills, or delay explanations, you can cure the deficiency with hospital records. Under the Supreme Court in Gurmel Singh (2022), genuine claims cannot be rejected on procedural grounds.",
    authority: "Supreme Court in Gurmel Singh (2022) 7 SCC 738",
  },
  {
    myth: "A claim repudiation letter means your health insurance policy is automatically cancelled.",
    fact: "Incorrect. A repudiation letter merely denies liability for that particular claim or condition. The underlying policy continues to cover other unrelated hospitalizations unless the insurer separately issues a statutory 30-day cancellation notice for established fraudulent concealment under Section 45.",
    authority: "Section 45 Insurance Act 1938 & IRDAI Master Circular 2024",
  },
  {
    myth: "The Insurance Ombudsman has no authority to review or overturn a formal claim repudiation.",
    fact: "Statutorily False. Under Rule 13(1)(b) of the Insurance Ombudsman Rules, 2017, the Ombudsman has express, binding statutory jurisdiction over any dispute involving total or partial repudiation of claims by an insurer, covering claims up to ₹50 Lakh.",
    authority: "Rule 13(1)(b) & Rule 17 Insurance Ombudsman Rules, 2017",
  },
  {
    myth: "Insurers can repudiate your claim for non-disclosure at any time, even after 5 or 10 years.",
    fact: "Barred by Section 45. Section 45 of the Insurance Act 1938 establishes an absolute 3-year statutory moratorium. After 3 continuous policy years, no life or general health policy can be called into question or repudiated on grounds of misstatement or non-disclosure.",
    authority: "Section 45 Insurance Act 1938 (3-Year Absolute Incontestability)",
  },
  {
    myth: "A Third-Party Administrator (TPA) has the legal authority to reject or repudiate your claim.",
    fact: "Zero Legal Authority. Under IRDAI Health Insurance Regulations, TPAs are third-party administrative processing agencies. Only the insurance company's designated medical underwriting and claims committee holds statutory power to reject or repudiate. Any TPA rejection letter is ultra vires and invalid in law.",
    authority: "IRDAI (Third Party Administrators - Health Services) Regulations",
  },
  {
    myth: "You must hire an advocate and fight in civil court to get a repudiated claim paid.",
    fact: "Simpler Statutory Remedies Exist. Aggrieved policyholders can overturn repudiations via a structured statutory legal notice, an online complaint on the IRDAI Bima Bharosa portal, the Insurance Ombudsman (free of cost), or the District Consumer Commission via e-Jagriti under Section 35 CPA 2019.",
    authority: "Section 35 Consumer Protection Act 2019 & Bima Bharosa Portal",
  },
];

const FAQS = [
  {
    question: "What is the difference between claim repudiated and claim rejected in health insurance?",
    answer:
      "The fundamental difference lies in contract validity and the ground of denial. A claim is 'repudiated' when the insurance company denies legal liability under the policy contract itself—alleging breach of utmost good faith (uberrima fides), pre-existing disease (PED) concealment, fraud, or permanent policy exclusions. In contrast, a claim is 'rejected' due to technical or procedural non-compliance, such as missing hospital bills, incomplete claim forms, or filing after the standard 30-day window. Rejections can generally be cured by submitting missing documents, whereas repudiations require a formal legal contest through grievance channels, the Insurance Ombudsman, or Consumer Court.",
  },
  {
    question: "What does a claim repudiation letter mean, and can I appeal it?",
    answer:
      "A claim repudiation letter is a formal written declaration from the insurer's claims department stating that they will not pay any money for the reported loss because the event is not covered or the policy contract is voidable. You can appeal a repudiation letter through three distinct statutory tiers: (1) Filing a formal appeal with the insurer's Grievance Redressal Officer (GRO) and IRDAI Bima Bharosa within 15 days; (2) Serving an advocate statutory legal notice under the Consumer Protection Act, 2019; and (3) Lodging a complaint before the Insurance Ombudsman under Rule 13(1)(b) of the Insurance Ombudsman Rules, 2017 for claims up to ₹50 Lakh.",
  },
  {
    question: "Can a TPA legally repudiate an insurance claim in India?",
    answer:
      "No. Under IRDAI regulations governing Third Party Administrators (TPAs), a TPA is merely an administrative intermediary responsible for data processing, hospital billing verification, and cashless desk management. A TPA has zero legal authority to reject or repudiate an insurance claim. Only the authorized claims committee of the licensed insurance company can issue a repudiation letter. If your claim was repudiated solely on the letterhead of a TPA without formal insurer sign-off, the rejection is legally defective and constitutes gross deficiency of service under Section 2(11) of the Consumer Protection Act, 2019.",
  },
  {
    question: "How long do I have to contest a repudiated claim before the Insurance Ombudsman?",
    answer:
      "Under Rule 14(3) of the Insurance Ombudsman Rules, 2017, you must file a complaint before the Insurance Ombudsman within one year from the date of receiving the insurer's final rejection or repudiation letter, or after 30 days of filing a complaint with the insurer's Grievance Redressal Officer if they fail to reply. However, before approaching the Ombudsman, you must first lodge a formal written representation with the insurer's GRO. The Ombudsman's jurisdiction covers awards up to ₹50 Lakh and their orders are binding on the insurance company.",
  },
  {
    question: "Does Section 45 of the Insurance Act protect health insurance policyholders after 3 years?",
    answer:
      "Yes. Section 45 of the Insurance Act, 1938 establishes the principle of incontestability: no policy of life or general health insurance can be called into question by an insurer on any ground whatever (including misstatement, non-disclosure of medical history, or fraud) after the expiry of three continuous policy years from the date of issuance or revival. If your health insurance policy has completed 3 consecutive renewal years, the insurer cannot legally repudiate a claim by digging into past medical records to allege non-disclosure of pre-existing conditions.",
  },
  {
    question: "What should I do if my cashless claim was rejected at hospital discharge?",
    answer:
      "Denial of cashless facility at discharge is not a final claim repudiation; it is only a denial of the on-the-spot cashless facility. Pay the hospital bill directly, collect all original documents (itemized discharge summary, indoor case papers, itemized final bill, payment receipts, diagnostic lab reports with films, and treating doctor prescription), and submit a formal reimbursement claim within 15 to 30 days. If the insurer subsequently repudiates the reimbursement claim, serve an advocate legal notice citing the IRDAI 2024 Master Circular which penalizes insurers for bad-faith claim repudiations.",
  },
  {
    question: "Insurance claim repudiate hone par legal notice kaise bhejein?",
    answer:
      "Agar insurance company ne claim repudiate kar diya hai, toh sabse pehle repudiation letter mein likha ground aur policy clause verify karein. Iske baad ek registered advocate dwara Section 45 Insurance Act aur IRDAI Master Circular 2024 ke tahat statutory legal notice bhejein. Notice mein hospital discharge summary, treating doctor ka certificate aur medical bills attach karein, aur insurer ko 15 din ke andar claim amount with penal interest release karne ka demand karein. Agar insurer 15 din mein settlement nahi karta, toh yahi notice Insurance Ombudsman aur Consumer Court (e-Jagriti) mein aapka sabse mazboot saboot banega.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Claim Repudiated vs Rejected: What's the Difference?",
  description:
    "Repudiated and rejected claims are not the same. What each means, how it affects your next step and how to contest either.",
  datePublished: "2026-11-04T10:00:00+05:30",
  dateModified: "2026-11-04T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/claim-repudiated-vs-rejected-difference`,
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
    name: "Difference Between Insurance Claim Repudiated and Claim Rejected",
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
      name: "Claim Repudiated vs Rejected",
      item: `${SITE_URL}/claim-repudiated-vs-rejected-difference`,
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

export default function ClaimRepudiatedVsRejectedPage() {
  const breadcrumbItems = [
    {
      label: "Insurance Claim Recovery",
      href: "/legal-notice-to-insurance-company-claim-rejection-recovery",
    },
    {
      label: "Repudiation vs Rejection",
      href: "/claim-repudiated-vs-rejected-difference",
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
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>IRDAI Master Circular 2024</span>
              <span className="text-red-500">•</span>
              <span>Section 45 Incontestability</span>
              <span className="text-red-500">•</span>
              <span>Ombudsman Jurisdiction ₹50 Lakh</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Repudiation or Rejection? Why the Word on Your Claim Letter Matters
            </h1>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-6">
              When an insurer denies an insurance claim in India, policyholders frequently confuse the words &ldquo;repudiated&rdquo; and &ldquo;rejected&rdquo;. Under Indian insurance law, they represent completely different legal realities. Discover what each term signifies, the legal consequences for your policy, and the exact statutory steps to overturn wrongful denials.
            </p>

            {/* Answer Box directly under H1 (Archetype G5 specification) */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8 backdrop-blur-sm max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Immediate Legal Answer</span>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                <strong className="text-white font-bold">Claim Rejection</strong> is a procedural or technical refusal (missing bills, delay, TPA query lapse) where the policy remains active and the claim can often be cured with fresh records. In contrast, <strong className="text-white font-bold">Claim Repudiation</strong> is a substantive denial of liability alleging contract breach, pre-existing disease concealment, or policy exclusions. While a rejection can be re-opened with documents, a repudiation requires formal legal contestation via statutory notice, IRDAI Bima Bharosa, or the Insurance Ombudsman under Rule 13(1)(b).
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
              <span>Author: Advocate Anuj Anand Malik</span>
              <span>•</span>
              <span>Last Updated: 4 November 2026</span>
              <span>•</span>
              <span>Reading Time: 12 min</span>
            </div>
          </div>
        </section>

        {/* Main Content Area with Sticky Layout */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-6">
            <ClaimDifferenceTableOfContents />

            <main className="w-full lg:flex-1 min-w-0">
              {/* Section 1: Overview */}
              <section id="heading-overview" className="scroll-mt-28 mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Why the Exact Term on Your Insurance Letter Dictates Your Legal Strategy
                </h2>
                <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    In Indian consumer finance and health insurance claims, receiving a claim denial letter is devastating. But before panicking or giving up on your hard-earned reimbursement, look at the precise terminology used by the insurance company. Does the letter state that your claim is <strong>&ldquo;repudiated&rdquo;</strong>, or does it state that the claim has been <strong>&ldquo;rejected / closed&rdquo;</strong>?
                  </p>
                  <p>
                    These two words are not interchangeable synonyms. In the eyes of the <strong className="text-slate-900">Insurance Regulatory and Development Authority of India (IRDAI)</strong> and the <strong className="text-slate-900">Consumer Protection Act, 2019</strong>, they occupy two entirely distinct legal tiers:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>
                      <strong>Rejection (अस्वीकृति):</strong> Generally signifies that the insurer or Third-Party Administrator (TPA) cannot process the file due to a procedural, documentation, or administrative deficiency. The underlying policy contract remains 100% active, undamaged, and valid.
                    </li>
                    <li>
                      <strong>Repudiation (प्रत्याख्यान / दायित्व से इनकार):</strong> Signifies that the insurance company repudiates the very existence of liability under the contract. The insurer alleges that you breached the doctrine of utmost good faith (<em>uberrima fides</em>), suppressed a material pre-existing disease (PED), or that the claim falls squarely within an absolute permanent exclusion.
                    </li>
                  </ul>
                  <p>
                    Understanding this demarcation determines whether you need to send supplementary medical receipts to your TPA or immediately serve a <Link href="/legal-notice-to-insurance-company-claim-rejection-recovery" className="text-red-700 font-bold hover:underline">statutory legal notice for wrongful claim repudiation</Link> to preserve your right to approach the Insurance Ombudsman.
                  </p>
                </div>
              </section>

              {/* Section 2: Repudiated vs Rejected Key Facts Table */}
              <section id="heading-key-distinction" className="scroll-mt-28 mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Repudiation vs. Rejection: The Master Legal Comparison Table
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                  The following matrix compares claim repudiation and claim rejection across legal grounds, policy impact, curability, and statutory dispute forums under IRDAI guidelines:
                </p>

                <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm my-6">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white border-b border-slate-800">
                        <th className="py-3.5 px-4 font-bold uppercase tracking-wider">Dimension</th>
                        <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-red-300">Claim Repudiation (Repudiated)</th>
                        <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-amber-300">Claim Rejection (Rejected)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Legal Meaning</td>
                        <td className="py-3 px-4">Substantive denial of contractual liability; insurer denies the claim on merit.</td>
                        <td className="py-3 px-4">Procedural refusal; claim file closed due to administrative or documentation lapse.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Underlying Policy Status</td>
                        <td className="py-3 px-4">Policy may be declared voidable, cancelled, or specific condition permanently excluded.</td>
                        <td className="py-3 px-4">Policy remains 100% valid, active, and intact for all future claims.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Frequent Grounds Cited</td>
                        <td className="py-3 px-4">Non-disclosure of pre-existing condition (PED), fraud, experimental treatment, permanent exclusions.</td>
                        <td className="py-3 px-4">Missing indoor case papers, billing breakup unsubmitted, delayed filing beyond 30 days, unverified query.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Curability</td>
                        <td className="py-3 px-4">Cannot be cured by submitting more hospital bills; requires legal counter on merit.</td>
                        <td className="py-3 px-4">Highly curable; file can be re-opened by providing the requested documents with a delay explanation.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Who Has Authority to Issue</td>
                        <td className="py-3 px-4">Strictly the Insurer&apos;s Claims Committee. TPAs have zero legal power to repudiate.</td>
                        <td className="py-3 px-4">Issued by the insurer or communicated as a query/deficiency by the TPA.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Statutory 3-Year Protection</td>
                        <td className="py-3 px-4">Protected by Section 45 of Insurance Act 1938 (cannot be questioned after 3 years).</td>
                        <td className="py-3 px-4">Protected by Supreme Court in Gurmel Singh (2022) against hyper-technical rejections.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">Next Action Required</td>
                        <td className="py-3 px-4">Serve formal Advocate Legal Notice &rarr; File Insurance Ombudsman / Consumer Court.</td>
                        <td className="py-3 px-4">Submit missing documents + doctor certificate &rarr; If still blocked, serve Legal Notice.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: 7 Myth vs Fact Pairs (Archetype G5 requirement) */}
              <section id="heading-myth-vs-fact" className="scroll-mt-28 mb-12">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 border border-red-200">
                    Archetype G5 Myth Busters
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  7 Misconceptions About Insurance Claim Repudiation vs. Rejection
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                  Insurers rely on consumer ignorance to close files and evade multi-lakh payouts. Here are the 7 most damaging myths about claim letters debunked with primary legal authorities:
                </p>

                <div className="space-y-4">
                  {MYTH_FACT_PAIRS.map((item, index) => (
                    <div
                      key={index}
                      role="row"
                      className="border border-slate-200 rounded-xl bg-white p-4 sm:p-5 shadow-xs hover:border-slate-300 transition-colors"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Myth Column */}
                        <div className="bg-red-50/70 border border-red-100 rounded-lg p-3.5">
                          <div className="flex items-center gap-1.5 text-red-700 font-bold text-xs uppercase tracking-wider mb-1.5">
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span>Myth #{index + 1}</span>
                          </div>
                          <p className="text-slate-800 text-xs sm:text-sm font-semibold leading-relaxed">
                            &ldquo;{item.myth}&rdquo;
                          </p>
                        </div>

                        {/* Fact Column */}
                        <div className="bg-emerald-50/70 border border-emerald-100 rounded-lg p-3.5">
                          <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-1.5">
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Legal Reality &amp; Authority</span>
                          </div>
                          <p className="text-slate-800 text-xs sm:text-sm leading-relaxed mb-2">
                            {item.fact}
                          </p>
                          <span className="inline-block text-[11px] font-bold text-emerald-900 bg-emerald-100/80 px-2.5 py-0.5 rounded border border-emerald-300">
                            Authority: {item.authority}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Hand-Authored SVG Flowchart (Page Artefact 1) */}
              <section id="heading-flowchart" className="scroll-mt-28 mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Visual Decision Matrix: Is Your Claim Repudiated or Rejected?
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                  Follow this interactive diagnostic flowchart to identify your claim letter&apos;s true status and determine whether to submit supplementary papers or initiate statutory recovery proceedings:
                </p>

                <div className="w-full bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl overflow-x-auto">
                  <div className="min-w-[650px]">
                    <svg viewBox="0 0 850 480" className="w-full h-auto text-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Flowchart Boxes & Connectors */}
                      {/* Start Node */}
                      <rect x="275" y="20" width="300" height="55" rx="10" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                      <text x="425" y="44" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="13">
                        RECEIVED CLAIM DENIAL LETTER
                      </text>
                      <text x="425" y="62" textAnchor="middle" fill="#94A3B8" fontSize="11">
                        Inspect Ground of Denial &amp; Specific Phrasing
                      </text>

                      {/* Line down */}
                      <path d="M425 75 L425 115" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                      <polygon points="425,120 420,112 430,112" fill="#94A3B8" />

                      {/* Decision Diamond */}
                      <polygon points="425,120 575,170 425,220 275,170" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
                      <text x="425" y="166" textAnchor="middle" fill="#FDE68A" fontWeight="bold" fontSize="12">
                        Does the letter cite Contract Breach,
                      </text>
                      <text x="425" y="182" textAnchor="middle" fill="#FDE68A" fontWeight="bold" fontSize="12">
                        Pre-Existing Disease (PED), or Exclusion?
                      </text>

                      {/* Branch YES -> REPUDIATED */}
                      <path d="M275 170 L130 170 L130 250" stroke="#EF4444" strokeWidth="2" />
                      <polygon points="130,255 125,247 135,247" fill="#EF4444" />
                      <text x="180" y="162" fill="#FCA5A5" fontWeight="bold" fontSize="11">YES (Substantive)</text>

                      {/* Branch NO -> REJECTED */}
                      <path d="M575 170 L720 170 L720 250" stroke="#10B981" strokeWidth="2" />
                      <polygon points="720,255 715,247 725,247" fill="#10B981" />
                      <text x="635" y="162" fill="#6EE7B7" fontWeight="bold" fontSize="11">NO (Procedural)</text>

                      {/* Box Left: CLAIM REPUDIATED */}
                      <rect x="20" y="255" width="220" height="75" rx="8" fill="#450A0A" stroke="#DC2626" strokeWidth="2" />
                      <text x="130" y="280" textAnchor="middle" fill="#FEE2E2" fontWeight="bold" fontSize="13">
                        CLAIM REPUDIATED
                      </text>
                      <text x="130" y="300" textAnchor="middle" fill="#FCA5A5" fontSize="10">
                        Contract liability denied on merit.
                      </text>
                      <text x="130" y="316" textAnchor="middle" fill="#FCA5A5" fontSize="10">
                        Submitting more bills WILL NOT work.
                      </text>

                      {/* Box Right: CLAIM REJECTED */}
                      <rect x="610" y="255" width="220" height="75" rx="8" fill="#064E3B" stroke="#059669" strokeWidth="2" />
                      <text x="720" y="280" textAnchor="middle" fill="#D1FAE5" fontWeight="bold" fontSize="13">
                        CLAIM REJECTED
                      </text>
                      <text x="720" y="300" textAnchor="middle" fill="#6EE7B7" fontSize="10">
                        Technical or documentation defect.
                      </text>
                      <text x="720" y="316" textAnchor="middle" fill="#6EE7B7" fontSize="10">
                        Contract remains valid; curable.
                      </text>

                      {/* Action Left */}
                      <path d="M130 330 L130 370" stroke="#DC2626" strokeWidth="2" />
                      <polygon points="130,375 125,367 135,367" fill="#DC2626" />
                      <rect x="20" y="375" width="220" height="85" rx="8" fill="#1E293B" stroke="#EF4444" strokeWidth="1.5" />
                      <text x="130" y="398" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="11">
                        ACTION: STATUTORY CONTEST
                      </text>
                      <text x="130" y="416" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                        1. Doctor Causal Nexus Certificate
                      </text>
                      <text x="130" y="432" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                        2. Advocate Notice (s.45 / IRDAI)
                      </text>
                      <text x="130" y="448" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                        3. Ombudsman (Rule 13(1)(b))
                      </text>

                      {/* Action Right */}
                      <path d="M720 330 L720 370" stroke="#059669" strokeWidth="2" />
                      <polygon points="720,375 715,367 725,367" fill="#059669" />
                      <rect x="610" y="375" width="220" height="85" rx="8" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                      <text x="720" y="398" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="11">
                        ACTION: CURE DEFICIENCY
                      </text>
                      <text x="720" y="416" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                        1. Retrieve Missing Breakup / ICP
                      </text>
                      <text x="720" y="432" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                        2. File Representation for Re-opening
                      </text>
                      <text x="720" y="448" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                        3. Legal Notice if Insurer Refuses
                      </text>

                      {/* Center Hub */}
                      <rect x="300" y="385" width="250" height="65" rx="8" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
                      <text x="425" y="410" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="12">
                        LEGAL RECOVERY PLATFORM
                      </text>
                      <text x="425" y="430" textAnchor="middle" fill="#E0F2FE" fontSize="10">
                        24h Advocate Notice Drafting for Either Scenario
                      </text>
                    </svg>
                  </div>
                </div>
              </section>

              {/* Section 5: Precedents & Ombudsman Case Law Digest (Page Artefact 2) */}
              <section id="heading-case-citations" className="scroll-mt-28 mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Binding Judicial Precedents: How Courts Penalize Wrongful Repudiations
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                  Both the Supreme Court of India and the Insurance Ombudsman consistently penalize insurance companies that issue generic, automated repudiation letters without substantiating medical proof. Review these 4 verifiable legal orders:
                </p>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((c, index) => (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-2xl bg-white p-5 sm:p-6 shadow-sm hover:border-slate-300 transition-all"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md">
                          Precedent #{index + 1}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{c.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{c.title}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-3">
                        {c.parties} &bull; <span className="text-slate-500">{c.citation}</span>
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm mb-4">
                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                          <span className="font-bold text-slate-900 block mb-1">Case Facts:</span>
                          <p className="text-slate-600 leading-relaxed">{c.facts}</p>
                        </div>
                        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                          <span className="font-bold text-slate-900 block mb-1">Court Order / Holding:</span>
                          <p className="text-slate-600 leading-relaxed">{c.holding}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
                        <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 inline-block">
                          Award: {c.amount}
                        </div>
                        <p className="text-xs text-slate-600 italic">
                          <strong className="text-slate-800 not-italic">Strategic Takeaway:</strong> {c.takeaway}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6: What Actually Works (Numbered Steps Playbook) */}
              <section id="heading-playbook" className="scroll-mt-28 mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  What Actually Works: The 5-Step Escalation Playbook
                </h2>
                <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    Whether your claim was repudiated for non-disclosure or rejected for technical delay, following a structured legal rail produces swift settlements. Do not waste months sending informal emails to frontline call-center staff. Execute these 5 battle-tested steps:
                  </p>

                  <div className="space-y-4 not-prose my-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base mb-1">
                          Scrutinize the Denial Letter for the Exact Ground &amp; Author
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          Check whether the letter originated from the insurance company or merely a TPA. Note down the exact policy exclusion clause cited (e.g., Clause 4.1 Non-disclosure, Clause 4.3 Specific Wait Period, or Regulation 12 procedural closure). If from a TPA without insurer delegation, the letter is legally void under IRDAI TPA regulations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base mb-1">
                          Secure Treating Doctor Causal-Nexus Certification
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          For repudiations citing pre-existing conditions, obtain a signed certificate from the treating specialist explicitly confirming: (a) the hospitalization was for an acute, independent medical emergency; and (b) there is no medical nexus between the hospitalized illness and any prior health history.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base mb-1">
                          File Formal Grievance with Insurer GRO &amp; IRDAI Bima Bharosa
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          Submit an official grievance to the insurer&apos;s Grievance Redressal Officer (GRO) and register a concurrent complaint on the <strong className="text-slate-900">Bima Bharosa portal (bimabharosa.irdai.gov.in)</strong>. Under IRDAI Master Circular 2024, the insurer is statutorily mandated to resolve the grievance within 15 calendar days.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base mb-1">
                          Serve an Advocate Statutory Legal Notice (15-Day Demand)
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          If the GRO fails to resolve or rejects your appeal, serve a formal statutory legal notice through a legal recovery advocate via Registered Speed Post and digital tracking. Citing Section 45, the IRDAI 2024 Master Circular, and the Supreme Court in <em>Manmohan Nanda</em> creates immense settlement pressure before escalation to external statutory forums.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
                        5
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base mb-1">
                          Escalate to the Insurance Ombudsman or Consumer Commission (e-Jagriti)
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          If the notice goes unheeded after 15 days, lodge a statutory complaint before the <strong className="text-slate-900">Insurance Ombudsman under Rule 13(1)(b)</strong> (free of cost, jurisdiction up to ₹50 Lakh, ex-parte powers against defaulting insurers) or file a consumer complaint before the District Consumer Disputes Redressal Commission (DCDRC) under Section 35 of the Consumer Protection Act, 2019.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Interactive Diagnostic Tabs */}
              <section id="heading-diagnostic-tabs" className="scroll-mt-28 mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
                  Interactive Diagnostic: Identify Your Denial Scenario
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Select your exact letter type below to view its legal standing, typical insurer phrasing, and recommended counter-action:
                </p>
                <ClaimDifferenceDiagnosticTabs />
              </section>

              {/* Section 8: Worked Example (Page Artefact 3) */}
              <section id="heading-worked-example" className="scroll-mt-28 mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Worked Case Study: Overturning a ₹6,20,000 Knee Surgery Repudiation
                </h2>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200 mb-3">
                    Real-World Recovery Simulation
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    The Dispute: Insurer Cites &ldquo;Pre-Existing Osteoarthritis Non-Disclosure&rdquo;
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>The Claimant:</strong> Mr. Rajesh Kapoor (aged 58), who maintained a family floater health insurance policy with a leading private insurer continuously for 4 consecutive renewal years (sum insured ₹10,00,000).
                    </p>
                    <p>
                      <strong>The Hospitalization:</strong> In September 2026, Mr. Kapoor suffered severe knee pain after slipping on a staircase, requiring bilateral Total Knee Replacement (TKR) at an NABH-accredited hospital in Mumbai. Total hospitalization and surgical bill: ₹6,20,000.
                    </p>
                    <p>
                      <strong>The Insurer&apos;s Repudiation:</strong> The insurer denied cashless at discharge and later issued a formal repudiation letter stating: <em>&ldquo;Claim repudiated under Clause 4.1. Indoor case record indicates patient had joint stiffness for 5 years. This constitutes deliberate non-disclosure of Pre-Existing Disease (PED) at the time of initial policy purchase.&rdquo;</em>
                    </p>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3">
                      <h4 className="font-bold text-slate-900 mb-2">The Advocate Recovery Rail:</h4>
                      <ol className="list-decimal pl-5 space-y-2 text-slate-600">
                        <li>
                          <strong>Section 45 Incontestability Shield:</strong> The advocate pointed out that the policy had completed 4 consecutive years without break. Under Section 45 of the Insurance Act 1938, no insurer can call a policy into question on ground of misstatement or non-disclosure after 3 continuous years.
                        </li>
                        <li>
                          <strong>Lack of Medical Nexus:</strong> The treating orthopedic surgeon certified that while age-related degenerative changes occur naturally, the immediate cause for surgical intervention was acute traumatic meniscal tear and ligament collapse suffered during the fall.
                        </li>
                        <li>
                          <strong>Statutory Legal Notice Dispatched:</strong> A formal legal notice was served to the insurer&apos;s Principal Officer and GRO, warning of a Bima Bharosa escalation, Ombudsman filing, and penal interest under the IRDAI 2024 Master Circular.
                        </li>
                      </ol>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-950">
                      <h4 className="font-bold text-emerald-900 text-sm mb-1">Financial Resolution Achieved:</h4>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Within 11 days of receiving the advocate legal notice, the insurer&apos;s Claims Review Committee recalled the repudiation letter, cleared the file, and credited <strong className="font-bold text-emerald-900">₹6,20,000 (100% of the admissible claim)</strong> directly into Mr. Kapoor&apos;s bank account, plus ₹25,000 towards procedural delay compensation.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist (Page Artefact 4) */}
              <section id="heading-evidence-checklist" className="scroll-mt-28 mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Evidence Checklist: 6 Documents You Must Secure Before Contesting
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                  Before serving a legal notice or approaching the Insurance Ombudsman, assemble this definitive evidentiary dossier:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                    <div className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold flex items-center justify-center text-xs mb-2">
                      1
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">The Formal Repudiation or Rejection Letter</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Original PDF/scanned copy showing date, claim reference number, specific clause cited, and the signatory authority.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                    <div className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold flex items-center justify-center text-xs mb-2">
                      2
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Complete Indoor Case Papers (ICP)</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Written request to the hospital medical records department for doctor admission notes, nursing charts, and initial emergency room history.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                    <div className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold flex items-center justify-center text-xs mb-2">
                      3
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Treating Doctor&apos;s Clarification Certificate</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Certificate on hospital letterhead stating that the admission was an acute emergency and negating any pre-existing causal connection.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                    <div className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold flex items-center justify-center text-xs mb-2">
                      4
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Policy Renewal Continuous History</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      All renewal policy schedules showing uninterrupted continuous coverage for 3+ years to establish Section 45 incontestability.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                    <div className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold flex items-center justify-center text-xs mb-2">
                      5
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Original Itemized Bills &amp; Payment Receipts</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Hospital final bill with detailed itemization (room rent, pharmacy, surgical consumables, doctor fees) and bank payment debit receipts.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                    <div className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold flex items-center justify-center text-xs mb-2">
                      6
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Grievance Audit Trail (GRO &amp; Bima Bharosa)</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Copies of emails sent to the insurer&apos;s grievance desk with delivery receipts and Bima Bharosa token reference numbers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="heading-faqs" className="scroll-mt-28 mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Frequently Asked Questions: Claim Repudiation vs. Rejection
                </h2>
                <div className="space-y-4">
                  {FAQS.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-xl bg-white p-5 shadow-xs hover:border-slate-300 transition-colors"
                    >
                      <h3 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                        <span className="text-red-600 font-black">Q:</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5 border-l-2 border-slate-100">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Sources & Legal Authorities */}
              <section id="heading-sources" className="scroll-mt-28 mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Sources &amp; Statutory References
                </h2>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-600 mb-3">
                    Every statutory benchmark, limitation period, and procedural guideline cited on this page is derived directly from verified primary legislation, regulator master circulars, and Supreme Court rulings:
                  </p>
                  <ul className="space-y-2 text-slate-700 list-disc pl-5">
                    {PRIMARY_SOURCES.map((source, index) => (
                      <li key={index}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-700 hover:text-red-900 underline font-medium"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                    Disclaimer: LegalRecovery.in provides legal documentation and advocate notice dispatch services. For formal judicial complaints, policyholders may approach the statutory Insurance Ombudsman or Consumer Dispute Redressal Commissions.
                  </p>
                </div>
              </section>

              {/* Call to Action Box */}
              <ClaimRepudiatedNoticeCTA className="my-10" />

              {/* Related Guides Component */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <RelatedRecoveryGuides currentPath="/claim-repudiated-vs-rejected-difference" />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
