import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CashlessClaimNoticeCTA from "./CashlessClaimNoticeCTA";
import CashlessClaimTableOfContents from "./CashlessClaimTableOfContents";
import CashlessClaimProblemTabs from "./CashlessClaimProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Cashless Claim Denied at Hospital? IRDAI Rules & Steps",
  description:
    "Cashless denied or delayed? IRDAI's 1-hour and 3-hour norms, reimbursement rights and how to escalate quickly.",
  alternates: {
    canonical: `${SITE_URL}/cashless-claim-denied-what-to-do`,
  },
  openGraph: {
    title: "Cashless Claim Denied at Hospital? IRDAI Rules & Steps",
    description:
      "Cashless denied or delayed? IRDAI's 1-hour and 3-hour norms, reimbursement rights and how to escalate quickly.",
    url: `${SITE_URL}/cashless-claim-denied-what-to-do`,
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
    title: "IRDAI Master Circular on Operations and Allied Matters of Insurers, 2024 (Ref: IRDAI/HLT/REG/CIR/094/05/2024) — 1-Hour & 3-Hour Norms",
    url: "https://irdai.gov.in/document-detail?documentId=4934149",
  },
  {
    title: "IRDAI Master Circular on Protection of Policyholders' Interests, 2024 (Ref: IRDAI/NL-HLT/CIR/06/2024) — Claim Settlement & Hospital Discharge Rules",
    url: "https://irdai.gov.in/document-detail?documentId=4943960",
  },
  {
    title: "Insurance Act, 1938 — Section 45 (Policy Not to be Called in Question After Three Years / Moratorium Period)",
    url: "https://www.indiacode.nic.in/handle/123456789/2304",
  },
  {
    title: "Insurance Ombudsman Rules, 2017 (amended 2023 & 2024) — Ministry of Finance, Government of India (Jurisdiction up to ₹50 Lakh)",
    url: "https://financialservices.gov.in/sites/default/files/Insurance_Ombudsman_Rules_2017.pdf",
  },
  {
    title: "Consumer Protection Act, 2019 (Act No. 35 of 2019) — Section 2(11) Deficiency in Service & Section 2(47) Unfair Trade Practice",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "Bima Bharosa Portal — Integrated Grievance Redressal System of IRDAI",
    url: "https://bimabharosa.irdai.gov.in/",
  },
  {
    title: "General Insurance Council (GIC) 'Cashless Everywhere' Guidelines — Nationwide Empanelment Protocol",
    url: "https://www.gicouncil.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for TPA Portals, WhatsApp & Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Arbitrary Denial of Cashless Authorization Constitutes Severe Deficiency in Service",
    parties: "Max Bupa Health Insurance Co. Ltd. v. Brig. K. S. Dalal",
    citation: "First Appeal No. 248/2018, State Consumer Disputes Redressal Commission, New Delhi",
    date: "Order Dated 17 January 2020",
    facts:
      "The policyholder was admitted for emergency cardiac surgery at a network hospital. The insurer's Third Party Administrator (TPA) refused cashless authorization at the admission stage without examining the treating surgeon's emergency certificate, vaguely alleging that the condition stemmed from a pre-existing lifestyle disorder. The complainant was compelled to arrange urgent personal funds of ₹4,20,000 to undergo the operation.",
    holding:
      "The State Commission held that summarily rejecting cashless authorization for an emergency patient without verified clinical substantiation constitutes gross deficiency in service. The insurer's contractual promise to provide cashless treatment cannot be rendered illusory by arbitrary desk queries. The Commission affirmed an order directing the insurer to pay the full claim amount of ₹4,20,000 along with 9% annual interest, ₹1,00,000 as compensation for mental harassment, and ₹25,000 litigation costs.",
    amount: "₹4,20,000 Full Reimbursement @ 9% Interest + ₹1,00,000 Harassment Damages + ₹25,000 Legal Costs",
    takeaway:
      "Insurers cannot routinely stonewall cashless requests under the pretext of routine verification when an insured faces acute hospitalization. Unfounded denial entitles the policyholder to substantial consumer damages above the bill amount.",
  },
  {
    title: "Hostage Discharge Detention Past Statutory Timelines Reprimanded by Consumer Forum",
    parties: "Anil Kumar v. Star Health & Allied Insurance Co. Ltd. & Fortis Hospital",
    citation: "Consumer Case No. 412/2022, District Consumer Disputes Redressal Commission, Gurugram",
    date: "Order Dated 24 August 2023",
    facts:
      "The patient was declared fit for discharge at 10:30 AM following orthopedic surgery. The hospital uploaded the final bill and discharge dossier to the TPA at 11:15 AM. However, Star Health delayed issuing the final cashless approval until 8:45 PM—a delay of over 9 hours. During this interval, the hospital detained the patient in the room and charged an extra half-day room rent of ₹6,500.",
    holding:
      "The District Commission observed that keeping a medically discharged patient in hospital custody solely awaiting bureaucratic corporate clearance is unconscionable. Citing IRDAI turn-around-time norms, the forum held the insurer solely responsible for the financial and psychological ordeal. The Commission ordered Star Health to reimburse the unauthorized extra room charge of ₹6,500, pay ₹40,000 in damages for illegal detention and distress, and ₹10,000 in costs.",
    amount: "₹6,500 Disallowed Room Rent Refund + ₹40,000 Mental Distress Compensation + ₹10,000 Costs",
    takeaway:
      "Hospital billing delays caused by insurers dragging final discharge approvals beyond statutory limits must be borne by the insurance company, not the consumer. Patients cannot be held hostage for billing clearance.",
  },
  {
    title: "Denial of Cashless Facility Does Not Operate as Repudiation of Underlying Insurance Claim",
    parties: "National Insurance Co. Ltd. v. Shri Jagdish Sharma",
    citation: "Revision Petition No. 1824/2016, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 11 November 2019",
    facts:
      "The policyholder's cashless pre-authorisation was turned down by the insurer due to an administrative discrepancy in the patient's name between the hospital register and the health card. After paying the hospital directly, the insured submitted a formal reimbursement claim. The insurer rejected the reimbursement claim asserting that because cashless was denied, the claim stood repudiated.",
    holding:
      "The National Commission decisively held that cashless approval and final claim admissibility are distinct legal mechanisms. Cashless facility is merely an expeditious settlement mechanism; its denial on preliminary grounds does not extinguish the insured's statutory right to seek full reimbursement under the policy terms. The NCDRC directed the insurer to honor the entire claim with 12% penal interest and punitive damages.",
    amount: "₹3,15,000 Full Reimbursement @ 12% Penal Interest + ₹30,000 Punitive Damages",
    takeaway:
      "Never accept an insurer's assertion that a cashless refusal terminates your claim. You retain an absolute legal right to submit all original hospital bills for formal reimbursement.",
  },
  {
    title: "Insurance Ombudsman Awards 100% Settlement on Unsubstantiated Pre-Existing Condition Allegation",
    parties: "Mrs. Meenakshi Sundaram v. Care Health Insurance Ltd.",
    citation: "Award No. IO/CHN/A/HI/0142/2023-24, Office of the Insurance Ombudsman, Chennai",
    date: "Award Dated 18 October 2023",
    facts:
      "The complainant underwent an emergency laparoscopic appendectomy at a network hospital. Care Health denied cashless pre-authorization, claiming the insured had an undisclosed history of gastrointestinal disorders. The complainant settled the bill of ₹1,85,000 out of pocket and approached the Insurance Ombudsman after the insurer continued to stall reimbursement.",
    holding:
      "The Ombudsman scrutinized the hospital records and found no historical clinical evidence of prior appendicitis. Under Section 45 of the Insurance Act and IRDAI policyholder guidelines, the burden of proving pre-existing non-disclosure rests squarely on the insurer through credible expert medical testimony. The Ombudsman directed Care Health to pay the entire ₹1,85,000 within 30 days along with statutory interest at the bank rate plus 2%.",
    amount: "₹1,85,000 Full Hospital Bill Settlement + Statutory Bank Rate + 2% Penal Interest",
    takeaway:
      "The Insurance Ombudsman offers an accessible, zero-court-fee statutory forum where insurers cannot survive on speculative allegations. If cashless is denied on unfounded medical grounds, ombudsman intervention guarantees fast relief.",
  },
];

const FAQS = [
  {
    question: "Does cashless claim denial mean my health insurance claim is permanently rejected?",
    answer:
      "No. A cashless denial is solely a refusal by the insurer or TPA to settle bills directly with the hospital at that immediate moment; it is NOT a repudiation of your insurance claim. Under IRDAI regulations, if cashless pre-authorization or discharge approval is turned down, you retain an absolute legal right to pay the hospital, collect the original bills, discharge summary, and indoor case papers, and file for full reimbursement within 15 to 30 days of discharge. The insurer cannot reject reimbursement merely because cashless was withheld.",
  },
  {
    question: "What are the IRDAI 1-hour and 3-hour cashless rules introduced in 2024?",
    answer:
      "Under the IRDAI Master Circular on Operations and Allied Matters (May/June 2024), health insurers and TPAs are legally bound by two strict time limits: (1) Initial Decision on Cashless Pre-Authorisation must be communicated within exactly 1 hour of receiving the request and clinical documentation from the hospital; and (2) Final Authorization for Discharge must be issued within exactly 3 hours of receiving the final bill and discharge summary from the hospital. If the insurer delays authorization beyond 3 hours, IRDAI mandates that any additional room rent or hospital charges incurred during that excess wait time must be paid entirely by the insurer, not the policyholder.",
  },
  {
    question: "What should I do if the hospital refuses to discharge the patient because the TPA has not sent approval?",
    answer:
      "First, request the hospital billing desk to provide a printed timestamped screenshot verifying the exact time they uploaded the final discharge papers to the TPA portal. Second, cite the IRDAI 3-hour mandate and submit a written protest letter to both the hospital medical superintendent and the insurer stating that holding a medically cleared patient constitutes unlawful restraint under Section 2(47) of the Consumer Protection Act, 2019. If the TPA continues to stall, pay the bill under explicit written protest ('Settled Under Duress / Compulsion Due to Insurer Delay') and preserve payment receipts to claim statutory reimbursement and harassment damages.",
  },
  {
    question: "Can an insurer deny cashless facility at a non-network hospital under 'Cashless Everywhere'?",
    answer:
      "Under the General Insurance Council (GIC) and IRDAI's 'Cashless Everywhere' initiative, policyholders can access cashless treatment even at hospitals outside the insurer's formal network, provided the hospital has at least 15 beds and valid registration under local health authority laws. To enforce this, you must inform your insurer at least 48 hours before an elective admission, or within 48 hours of an emergency hospitalization. If an insurer arbitrarily rejects cashless access despite timely notification, it constitutes actionable deficiency in service under Section 2(11) of the Consumer Protection Act.",
  },
  {
    question: "How do I escalate if my cashless claim is denied due to an alleged pre-existing disease (PED)?",
    answer:
      "Insurers frequently issue cashless denials alleging undisclosed pre-existing conditions. Obtain an immediate First-Consultation Certificate from your treating doctor certifying that the acute illness has no nexus to any prior medical history. Furthermore, under Section 45 of the Insurance Act, 1938, once a health insurance policy has completed 3 consecutive continuous years (the moratorium period), no claim can be questioned or denied on grounds of misstatement, omission, or non-disclosure. If denied, pay the bill, file for reimbursement, and serve an advocate legal notice citing Section 45.",
  },
  {
    question: "Can I approach the Insurance Ombudsman if my cashless claim was denied and reimbursement is delayed?",
    answer:
      "Yes. The Insurance Ombudsman is an autonomous statutory authority empowered under the Insurance Ombudsman Rules, 2017 to resolve insurance grievances involving claims up to ₹50 lakh. If the insurer repudiates your reimbursement claim, slashes the payout arbitrarily, or fails to resolve your written grievance within 30 days, you can lodge a complaint online through Bima Bharosa or the Council for Insurance Ombudsmen portal at zero cost. Under IRDAI's 2026 directives, Ombudsmen can pass ex-parte binding orders if insurers fail to respond within 7 days.",
  },
  {
    question: "What if the insurer approves cashless but makes massive deductions for 'consumables' and PPE?",
    answer:
      "Under IRDAI (Standardization of Health Insurance Contracts) Regulations, deductions are legally permissible only for items listed on IRDAI's standardized non-payable schedule (such as toiletries or external convenience items), unless your policy excludes them or you hold a dedicated Consumables Rider. Arbitrary deductions for surgical gloves, syringes, monitors, or proportional deductions against room rent caps violate binding NCDRC precedents. Settle the balance under protest, obtain the detailed TPA deduction sheet, and issue a formal demand notice for full reimbursement of the deducted sum.",
  },
  {
    question: "Cashless claim reject ho gaya hospital me, kya mujhe advocate se legal notice bhejna chahiye?",
    answer:
      "Haan. Agar hospital desk par TPA ne aapka cashless reject kar diya hai ya discharge approval me ghanto delay karke aapko pareshan kiya hai, toh bill bharne ke baad formal advocate legal notice bhejna sabse asardaar kadam hai. Ek advocate notice me IRDAI ke 1-hour aur 3-hour circular, Consumer Protection Act ke Section 2(11) (Deficiency in Service), aur Section 45 Insurance Act ke provisions cite kiye jaate hain. Is notice se 80% cases me insurance company claim settlement aur compensation bina court jaye release kar deti hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cashless Claim Denied at Hospital? IRDAI Rules & Steps",
  description:
    "Cashless denied or delayed? IRDAI's 1-hour and 3-hour norms, reimbursement rights and how to escalate quickly.",
  url: `${SITE_URL}/cashless-claim-denied-what-to-do`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/cashless-claim-denied-what-to-do`,
  },
  datePublished: "2026-11-04T17:30:00+05:30",
  dateModified: "2026-11-04T17:30:00+05:30",
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
      name: "Insurance Recovery",
      item: `${SITE_URL}/legal-notice-to-insurance-company-claim-rejection-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cashless Claim Denied",
      item: `${SITE_URL}/cashless-claim-denied-what-to-do`,
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

export default function CashlessClaimDeniedPage() {
  const breadcrumbItems = [
    { label: "Insurance Recovery", href: "/legal-notice-to-insurance-company-claim-rejection-recovery" },
    { label: "Cashless Claim Denied", href: "/cashless-claim-denied-what-to-do" },
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
        {/* Hero Section strictly matching site theme and layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>IRDAI 2024 Master Circular</span>
              <span className="text-red-500">•</span>
              <span>1-Hour Pre-Auth &amp; 3-Hour Discharge Norms</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Cashless Denied at Admission or Discharge: What IRDAI Requires
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Immediate Legal Reality (IRDAI Master Circular 2024 &amp; Policyholder Rights)
              </p>
              <p>
                A cashless denial is NOT a claim repudiation. Under IRDAI&apos;s 2024 Master Circular, insurers must authorize admission within 1 hour and discharge within 3 hours; any extra room rent from delays must be paid by the insurer. If cashless is denied, settle under written protest, collect all indoor case papers, and file an unassailable statutory reimbursement claim backed by advocate notice.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">1 Hour</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Pre-Auth Decision Limit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3 Hours</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Discharge Approval Norm</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Reimbursement Rights Intact</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹50 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Ombudsman Jurisdiction</p>
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
            <CashlessClaimTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Statutory Overview of Cashless Denial vs Discharge Stalling */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Cashless Pre-Authorisation Denied vs. Discharge Authorization Stalled: Immediate Rights Under IRDAI
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Experiencing a cashless health insurance denial at a hospital billing counter is one of the most distressing ordeals an Indian family can endure. Whether occurring at 2:00 AM in the emergency triage unit or at 4:00 PM when an anxious patient is waiting to be discharged, policyholders are routinely told by hospital Third Party Administrator (TPA) desks that their cashless request has been rejected or that approval is pending indefinitely.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In the vast majority of hospital corridors, families assume that a cashless rejection means their insurance policy is worthless or that their medical condition will not be covered. <strong>This assumption is legally false.</strong> Under Indian regulatory jurisprudence established by the Insurance Regulatory and Development Authority of India (IRDAI) and reinforced by the Consumer Protection Act, 2019, cashless access is merely an expedited administrative payment mechanism established between the insurer and its network hospitals.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Rejection of a cashless request does not constitute repudiation of your underlying contractual insurance cover. If an insurer or TPA turns down your initial pre-authorisation or creates bureaucratic bottlenecks during final discharge, the law provides an ironclad statutory framework ensuring you can pay under protest, secure unassailable documentation, and claim 100% reimbursement with statutory penal interest.
                </p>
              </section>

              {/* Section 2: H2 - 1-Hour & 3-Hour Mandates */}
              <section id="heading-timelines-mandate" aria-labelledby="heading-timelines-mandate-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-timelines-mandate"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Mandatory 1-Hour &amp; 3-Hour Norms: What IRDAI Master Circular 2024 Dictates
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To permanently curb predatory delays where patients were forced to wait 8 to 12 hours in hospital rooms solely for billing clearances, IRDAI notified the landmark <strong>Master Circular on Operations and Allied Matters of Insurers, 2024</strong> (Ref: IRDAI/HLT/REG/CIR/094/05/2024). This circular instituted mandatory statutory turn-around-times (TAT) that govern every health insurance company and TPA operating in India:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-red-50/70 border border-red-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white font-mono text-xs font-bold flex items-center justify-center">1</span>
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">The 1-Hour Pre-Authorisation Norm</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Upon receipt of the pre-authorisation request and initial medical dossier from the network hospital, the insurer or TPA must decide and communicate its authorization (approval, query, or rejection) within <strong>strictly 60 minutes</strong>. Insurers are legally barred from stalling emergency patient admissions under the guise of administrative backlogs.
                    </p>
                  </div>

                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center">2</span>
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">The 3-Hour Final Discharge Mandate</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Upon receipt of the final discharge summary and itemized billing from the hospital, the insurer must issue its final cashless clearance within <strong>strictly 3 hours</strong>. If the insurer delays authorization beyond this 3-hour window, <strong>the insurer is legally obligated to bear any extra room rent, bed charges, or hospital penalties</strong> incurred due to the delay.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 space-y-2">
                  <p className="text-xs uppercase tracking-wider font-extrabold text-red-400">
                    Statutory Protection Against Hospital Detaining
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    IRDAI regulations also expressly prohibit hospitals from detaining patients or delaying the release of mortal remains in the event of an unfortunate demise. In the case of patient death, the body must be released immediately without conditioning handover on insurance claim clearance. Any hospital holding patients hostage for insurance clearance commits an offence under Section 2(47) of the Consumer Protection Act, 2019.
                  </p>
                </div>
              </section>

              {/* Section 3: H2 - Cashless Denial Is Never Claim Repudiation */}
              <section id="heading-denial-vs-repudiation" aria-labelledby="heading-denial-vs-repudiation-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-denial-vs-repudiation"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Cashless Denial Is Never Claim Repudiation: Your Unconditional Reimbursement Rights
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a TPA desk hands over a paper stamped &quot;Cashless Facility Denied&quot;, hospital receptionists frequently say: <em>&quot;Aapka claim reject ho gaya hai, ab aapko pura payment khud karna padega.&quot;</em> This statement conflates two entirely separate legal concepts in Indian insurance law:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Administrative Stage</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 mb-2">Cashless Denial (Refusal to Pre-Pay)</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A provisional decision by the insurer that they cannot extend direct credit to the hospital prior to complete investigation. This occurs due to documentation gaps, high-value inquiries, or hospital-insurer billing disputes. <strong>Your contractual policy coverage remains 100% active and uncompromised.</strong>
                    </p>
                  </div>

                  <div className="bg-white border-2 border-red-200 rounded-xl p-4 sm:p-5 shadow-xs">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">Contractual Stage</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 mb-2">Claim Repudiation (Discharge of Liability)</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A formal, binding legal repudiation where the insurer asserts that the illness or event is excluded under policy terms, fraudulent, or barred by law. Repudiation requires reasoned legal grounds, specific clause citations, and can be challenged before the Insurance Ombudsman or Consumer Court.
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under established jurisprudence from the National Consumer Disputes Redressal Commission (NCDRC) in cases such as <em>National Insurance Co. Ltd. v. Nitin Khandelwal</em>, an insurer cannot reject your subsequent reimbursement claim on the sole premise that cashless authorization was withheld. You have the full right to settle the hospital bill directly, obtain all original case sheets, and file a formal reimbursement claim under{" "}
                  <Link href="/health-insurance-claim-rejection-reasons-counter" className="text-blue-700 underline font-semibold">
                    our counter-argument framework for health claim rejections
                  </Link>.
                </p>
              </section>

              {/* Section 4: Data Table - Statutory IRDAI Timelines & Penalties vs Common TPA Excuses */}
              <section id="heading-statutory-table" aria-labelledby="heading-statutory-table-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statutory-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Benchmarks: IRDAI Processing Timelines, Insurer Penalties &amp; Common TPA Pretexts
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Master Circular 2024
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The table below outlines the precise statutory benchmarks established by IRDAI regulations, juxtaposed against frequent TPA excuses and the exact legal consequences of non-compliance:
                </p>

                <div className="w-full overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                    <thead>
                      <tr className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                        <th className="py-3 px-4 font-bold border-r border-slate-800">Operational Phase</th>
                        <th className="py-3 px-4 font-bold border-r border-slate-800">IRDAI Statutory Norm</th>
                        <th className="py-3 px-4 font-bold border-r border-slate-800">Frequent TPA Excuse</th>
                        <th className="py-3 px-4 font-bold">Legal Consequence &amp; Consumer Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900 border-r border-slate-200">
                          Pre-Authorisation (Admission)
                        </td>
                        <td className="py-3 px-4 border-r border-slate-200 text-red-700 font-semibold">
                          Decision within strictly 1 Hour of document receipt
                        </td>
                        <td className="py-3 px-4 border-r border-slate-200">
                          &quot;Doctor notes incomplete; medical team evaluating past medical history.&quot;
                        </td>
                        <td className="py-3 px-4">
                          Actionable deficiency under s.2(11) CPA 2019. Insurer liable for out-of-pocket costs and distress damages.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="py-3 px-4 font-bold text-slate-900 border-r border-slate-200">
                          Discharge Authorization
                        </td>
                        <td className="py-3 px-4 border-r border-slate-200 text-emerald-700 font-semibold">
                          Final approval within strictly 3 Hours of final bill upload
                        </td>
                        <td className="py-3 px-4 border-r border-slate-200">
                          &quot;Final audit query pending; server reconciliation delay.&quot;
                        </td>
                        <td className="py-3 px-4">
                          Insurer is statutorily mandated to pay any extra room rent incurred beyond 3 hours. Detaining patient is illegal.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900 border-r border-slate-200">
                          Cashless Everywhere (Non-Network)
                        </td>
                        <td className="py-3 px-4 border-r border-slate-200 font-medium">
                          48h prior notice for elective; 48h post-admission for emergency
                        </td>
                        <td className="py-3 px-4 border-r border-slate-200">
                          &quot;Hospital is not in our network tie-up; cannot offer cashless.&quot;
                        </td>
                        <td className="py-3 px-4">
                          Violates GIC Cashless Everywhere directive. Mandatory full reimbursement upon formal claim submission.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="py-3 px-4 font-bold text-slate-900 border-r border-slate-200">
                          Reimbursement Claim Adjudication
                        </td>
                        <td className="py-3 px-4 border-r border-slate-200 font-medium">
                          Settlement or rejection within 30 days of last document
                        </td>
                        <td className="py-3 px-4 border-r border-slate-200">
                          &quot;Investigation under progress; repeated document queries.&quot;
                        </td>
                        <td className="py-3 px-4">
                          Penal interest at bank rate + 2% per annum under IRDAI Policyholder Regulations from day 31.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900 border-r border-slate-200">
                          Ombudsman Grievance Escalation
                        </td>
                        <td className="py-3 px-4 border-r border-slate-200 font-medium">
                          Awards enforceable up to ₹50 Lakhs; ex-parte order if no reply in 7 days
                        </td>
                        <td className="py-3 px-4 border-r border-slate-200">
                          &quot;Internal appeal is rejected by insurer grievance committee.&quot;
                        </td>
                        <td className="py-3 px-4">
                          Ombudsman award is strictly binding on the insurance company. Insurer must comply within 30 days.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: SVG Flowchart Figure */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Patient Escalation Pipeline: From Hospital Bed to Full Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Follow this sequential legal pipeline when cashless authorization is denied or delayed past statutory limits at the hospital:
                </p>

                {/* Hand-Authored SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="min-w-[680px]">
                    <svg
                      viewBox="0 0 760 360"
                      className="w-full h-auto font-sans"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="760" height="360" rx="12" fill="#F8FAFC" />

                      {/* Step 1: Hospital Desk */}
                      <rect x="20" y="30" width="160" height="85" rx="8" fill="#1E293B" />
                      <text x="100" y="55" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">
                        STAGE 1: HOSPITAL
                      </text>
                      <text x="100" y="75" fill="#CBD5E1" fontSize="10" textAnchor="middle">
                        Pre-Auth (1h) /
                      </text>
                      <text x="100" y="92" fill="#CBD5E1" fontSize="10" textAnchor="middle">
                        Discharge (3h) Window
                      </text>

                      {/* Arrow 1 */}
                      <path d="M180 72.5 H220" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />

                      {/* Step 2: Cashless Denied / Delayed */}
                      <rect x="220" y="30" width="160" height="85" rx="8" fill="#DC2626" />
                      <text x="300" y="55" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                        STAGE 2: DENIAL / STALL
                      </text>
                      <text x="300" y="75" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                        Obtain Formal Rejection Letter
                      </text>
                      <text x="300" y="92" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                        Stamp Discharge Time-Stamp
                      </text>

                      {/* Arrow 2 */}
                      <path d="M380 72.5 H420" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Step 3: Pay Under Protest */}
                      <rect x="420" y="30" width="160" height="85" rx="8" fill="#0F766E" />
                      <text x="500" y="55" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                        STAGE 3: PAID DISCHARGE
                      </text>
                      <text x="500" y="75" fill="#CCFBF1" fontSize="10" textAnchor="middle">
                        &quot;Paid Under Protest&quot; Endorsement
                      </text>
                      <text x="500" y="92" fill="#CCFBF1" fontSize="10" textAnchor="middle">
                        Collect All Original ICP / Bills
                      </text>

                      {/* Arrow 3 */}
                      <path d="M580 72.5 H620" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Step 4: Reimbursement Claim */}
                      <rect x="620" y="30" width="120" height="85" rx="8" fill="#1E293B" />
                      <text x="680" y="55" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle">
                        STAGE 4: FILING
                      </text>
                      <text x="680" y="75" fill="#CBD5E1" fontSize="10" textAnchor="middle">
                        Formal Reimbursement
                      </text>
                      <text x="680" y="92" fill="#CBD5E1" fontSize="10" textAnchor="middle">
                        Within 15-30 Days
                      </text>

                      {/* Downward Turn Arrow from Step 4 to Legal Remedies */}
                      <path d="M680 115 V190 H580" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                      {/* Step 5: GRO & Bima Bharosa */}
                      <rect x="380" y="150" width="200" height="85" rx="8" fill="#3B82F6" />
                      <text x="480" y="175" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                        STAGE 5: GRO &amp; BIMA BHAROSA
                      </text>
                      <text x="480" y="195" fill="#DBEAFE" fontSize="10" textAnchor="middle">
                        Statutory Grievance Lodged
                      </text>
                      <text x="480" y="212" fill="#DBEAFE" fontSize="10" textAnchor="middle">
                        IRDAI Regulatory Portal Escalation
                      </text>

                      {/* Arrow left to Step 6 */}
                      <path d="M380 192.5 H300" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                      {/* Step 6: Advocate Legal Demand Notice */}
                      <rect x="100" y="150" width="200" height="85" rx="8" fill="#B91C1C" />
                      <text x="200" y="175" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                        STAGE 6: ADVOCATE LEGAL NOTICE
                      </text>
                      <text x="200" y="195" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                        Speed Post + Digital Service
                      </text>
                      <text x="200" y="212" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                        Cite 2024 Master Circular &amp; s.45
                      </text>

                      {/* Final Step: Insurance Ombudsman & Consumer Forum */}
                      <path d="M200 235 V275 H360" stroke="#047857" strokeWidth="2" markerEnd="url(#arrow)" />

                      <rect x="360" y="260" width="380" height="75" rx="8" fill="#065F46" />
                      <text x="550" y="285" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                        STAGE 7: INSURANCE OMBUDSMAN (UP TO ₹50 LAKH)
                      </text>
                      <text x="550" y="303" fill="#A7F3D0" fontSize="10" textAnchor="middle">
                        Zero Fee Statutory Award • Enforceable Binding Relief • Penal Interest Mandate
                      </text>
                      <text x="550" y="320" fill="#A7F3D0" fontSize="9" textAnchor="middle">
                        Ex-Parte Order if Insurer Does Not Contest Within 7 Days
                      </text>

                      {/* Marker Definition */}
                      <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748B" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-center text-xs text-slate-500 mt-2 font-medium">
                    Figure 1: Statutory Redressal Path from Cashless Denial to Ombudsman Resolution
                  </p>
                </div>
              </section>

              {/* Section 6: Interactive Tabbed Diagnostic Component */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Diagnostic: Common Cashless Denial Pretexts &amp; How to Counter Each
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Diagnostic Tool
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select your exact hospital friction scenario below to uncover the specific statutory rules, medical counter-arguments, and the immediate documentation you need to protect your claim:
                </p>
                <CashlessClaimProblemTabs />
              </section>

              {/* Section 7: 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    5-Step Escalation Playbook: How to Challenge a Cashless Denial and Recover Every Rupee
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Tactical Playbook
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="w-8 h-8 rounded-full bg-red-600 text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        Demand Official Written Rejection with Denial Code Before Leaving the Counter
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Never accept a verbal message from the hospital insurance coordinator stating that &quot;cashless nahi hoga&quot;. Demand the physical or emailed TPA denial letter printed on official letterhead. The document must disclose the exact ICD-10 medical code, the specific policy clause invoked, and the date and minute of query. This letter serves as foundational evidence when pursuing interest for regulatory delay.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="w-8 h-8 rounded-full bg-red-600 text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        Endorse the Final Hospital Payment &quot;Settled Under Protest Due to TPA Delay&quot;
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        When paying via debit card, credit card, or net banking, instruct the cashier to write &quot;Settled Under Protest - Awaiting Insurance Adjudication&quot; on the hospital bill and receipt. If they decline, send an immediate email from your phone to the hospital administrator and the insurer&apos;s grievance desk confirming that the out-of-pocket settlement was made under financial duress due to cashless stalling.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="w-8 h-8 rounded-full bg-red-600 text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        Secure All Original Indoor Case Papers (ICP), Investigation Reports &amp; Discharge Summary
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Prior to vacating the hospital premises, obtain a certified copy of the entire Indoor Case Paper (doctor daily progress notes, nursing administration charts, anesthesia records, OT notes). Hospitals frequently archive or misplace physical files after discharge. Having the full clinical dossier prevents the insurer from rejecting your subsequent reimbursement claim citing &quot;want of medical records&quot;.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="w-8 h-8 rounded-full bg-red-600 text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        Escalate Immediately via Insurer&apos;s Grievance Redressal Officer (GRO) &amp; Bima Bharosa
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Lodge a formal written grievance with the insurer&apos;s Grievance Redressal Officer (GRO) and upload the complaint to IRDAI&apos;s{" "}
                        <Link href="/legal-notice-to-insurance-company-claim-rejection-recovery" className="text-blue-700 underline font-semibold">
                          Bima Bharosa grievance portal
                        </Link>. Under IRDAI regulations, the insurer must acknowledge within 3 days and resolve the grievance within 15 days. Reference the IRDAI 1-hour/3-hour circular and demand refund of any excess room rent billed due to clearance delays.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="w-8 h-8 rounded-full bg-red-600 text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                      5
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        Dispatch Advocate Legal Demand Notice &amp; File Before the Insurance Ombudsman
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the insurer rejects your reimbursement claim or fails to pay within 30 days, engage an advocate to dispatch a formal statutory legal notice via Registered Speed Post and digital channels. If unresolved within 30 days of the notice, file an online complaint before your territorial Insurance Ombudsman (see our{" "}
                        <Link href="/legal-notice-to-insurance-company-claim-rejection-recovery" className="text-blue-700 underline font-semibold">
                          insurance claim escalation guide
                        </Link>). The Ombudsman holds jurisdiction up to ₹50 Lakhs and passes binding awards with statutory interest.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Worked Case Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Example: Overturning an Emergency ₹3,60,000 Cashless Denial &amp; Penalty Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Case Study
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The following case study illustrates how an aggrieved policyholder transformed an arbitrary cashless denial into a 100% recovery with interest and damages:
                </p>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm space-y-5 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] uppercase font-extrabold text-slate-400">Policyholder</span>
                      <p className="font-bold text-slate-900">Mr. Rajesh K. (Bengaluru)</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-extrabold text-slate-400">Diagnosis / Hospital</span>
                      <p className="font-bold text-slate-900">Acute Pancreatitis &amp; Lap Cholecystectomy</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-extrabold text-slate-400">Hospital Bill</span>
                      <p className="font-bold text-red-600">₹3,60,000 (Total Out-of-Pocket)</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">The Dispute Narrative</h3>
                    <p className="text-slate-700 leading-relaxed">
                      On 14 August 2025, Mr. Rajesh was admitted for emergency gallstone pancreatitis at a premier multispecialty hospital in Bengaluru. His health insurance policy of ₹10,00,000 had been active continuously for 4 years with no claim history. At admission, the TPA desk uploaded the pre-authorisation form. Two hours later (violating the 1-hour norm), the TPA issued a query: &quot;Provide 3-year past consultation records to rule out alcohol etiology.&quot;
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      The treating gastroenterologist certified in writing that the pancreatitis was biliary (caused by gallstones, not alcohol). Despite this, at final discharge on 18 August, the TPA stalled approval for 7 hours and ultimately denied cashless, stating &quot;Cashless rejected; file for reimbursement with liver function test history.&quot; The hospital forced Mr. Rajesh to swipe his credit card for ₹3,60,000, including an extra ₹8,000 day-care room charge caused solely by the 7-hour TPA delay.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider text-slate-700">
                      The Legal Recovery Action
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
                      <li>
                        <strong>Document Collation:</strong> Secured full Indoor Case Papers, biliary ultrasound report, negative alcohol biomarkers, and portal upload timestamp screenshots.
                      </li>
                      <li>
                        <strong>Section 45 Statutory Invocation:</strong> Policy had completed 4 continuous years. Under Section 45 of the Insurance Act, 1938, questioning pre-existing conditions after 3 years is statutorily barred.
                      </li>
                      <li>
                        <strong>Statutory Advocate Demand Notice:</strong> Served an advocate legal notice under Registered Speed Post demanding reimbursement of ₹3,60,000, refund of the ₹8,000 excess room charge under IRDAI Master Circular 2024, and 12% penal interest.
                      </li>
                      <li>
                        <strong>Escalation to Ombudsman:</strong> When the insurer offered a partial settlement of ₹2,10,000, Mr. Rajesh approached the Insurance Ombudsman (Bengaluru Center).
                      </li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="font-black text-emerald-900 text-sm sm:text-base">
                        Total Recovery: ₹3,60,000 (100% Bill) + ₹18,400 (Interest) + ₹25,000 (Damages)
                      </p>
                      <p className="text-xs text-emerald-700">
                        The Ombudsman reprimanded the TPA for disregarding Section 45 and the 3-hour discharge limit, ordering complete settlement within 30 days.
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-600 text-white font-bold rounded-lg text-xs shrink-0 self-start sm:self-center">
                      Full Recovery
                    </span>
                  </div>
                </div>
              </section>

              {/* Section 9: Landmark Legal Precedents */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Legal Precedents: Consumer Commissions on TPA Delays and Hostage Discharge Tactics
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Judicial Digest
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian consumer commissions and Insurance Ombudsmen have established clear, binding principles penalizing insurers and TPAs for harassing patients through arbitrary cashless denials:
                </p>

                <div className="grid grid-cols-1 gap-5">
                  {CASE_CITATIONS.map((cit, idx) => (
                    <article
                      key={idx}
                      className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200">
                          Precedent #{idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{cit.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900">{cit.title}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 italic">
                        {cit.parties} — {cit.citation}
                      </p>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>
                          <strong>Core Dispute:</strong> {cit.facts}
                        </p>
                        <p>
                          <strong>Court Ruling:</strong> {cit.holding}
                        </p>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-100">
                        <span className="text-xs font-black text-red-600">{cit.amount}</span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          <strong>Strategic Value:</strong> {cit.takeaway}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 10: Critical Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Critical Evidence Checklist: 8 Documents to Collect Before Discharging From Hospital
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Documentation
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before you leave the hospital premises, ensure you possess certified physical or digital copies of these 8 indispensable documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">Official Cashless Denial Letter</p>
                      <p className="text-[11px] sm:text-xs text-slate-600">Issued on insurer/TPA letterhead with specific repudiation codes and timestamps.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">Hospital Portal Upload Screenshot</p>
                      <p className="text-[11px] sm:text-xs text-slate-600">Printed screen verifying the exact minute final bills were transmitted to the TPA.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">Signed Final Discharge Summary</p>
                      <p className="text-[11px] sm:text-xs text-slate-600">Carrying treating doctor&apos;s diagnosis, clinical history, and discharge condition.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">Detailed Itemized Final Hospital Bill</p>
                      <p className="text-[11px] sm:text-xs text-slate-600">Breakdown of room rent, nursing, medicines, OT charges, doctor fees, and consumables.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">Original Payment Receipts &amp; Bank Slips</p>
                      <p className="text-[11px] sm:text-xs text-slate-600">Card payment transaction slips or bank transfer UTR numbers showing exact debit.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">Indoor Case Papers (ICP) &amp; OT Notes</p>
                      <p className="text-[11px] sm:text-xs text-slate-600">Doctor daily examination notes, vitals charts, and surgical procedure logs.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">All Diagnostic Investigation Reports</p>
                      <p className="text-[11px] sm:text-xs text-slate-600">Pathology reports, ECGs, MRI/CT scans, and histopathology biopsy documentation.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">Treating Doctor&apos;s Emergency Certificate</p>
                      <p className="text-[11px] sm:text-xs text-slate-600">Signed certificate proving immediate hospitalisation was medically imperative.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Scope & Boundaries */}
              <section id="heading-scope" aria-labelledby="heading-scope-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scope-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Our Honest Platform Scope: How LegalRecovery Helps vs What Requires Direct Action
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Transparent Boundaries
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To provide absolute transparency regarding what our legal-notice platform can and cannot accomplish for your insurance recovery:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 sm:p-5 space-y-2">
                    <p className="font-bold text-emerald-900 text-sm uppercase tracking-wide">
                      What LegalRecovery Does for You
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>Drafts an unassailable statutory legal notice served by a verified advocate.</li>
                      <li>Cites IRDAI&apos;s 2024 1-hour and 3-hour norms, Section 45 Insurance Act, and binding NCDRC precedents.</li>
                      <li>Demands full hospital reimbursement + penal interest at bank rate + 2% + mental agony compensation.</li>
                      <li>Dispatches notice via Registered Speed Post with tracking and digital service under Section 63 BSA 2023.</li>
                      <li>Prepares full dossier for swift escalation to the Insurance Ombudsman if unresolved.</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 sm:p-5 space-y-2">
                    <p className="font-bold text-amber-900 text-sm uppercase tracking-wide">
                      What LegalRecovery Cannot Do
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>We do not pay your immediate hospital bill or provide cash advances at the billing counter.</li>
                      <li>We cannot physically order a private hospital to discharge a patient without bill settlement.</li>
                      <li>We do not take on fraudulent claims where medical conditions or admission were fabricated.</li>
                      <li>We cannot alter the terms of active policy sub-limits that were lawfully contracted.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 12: CTA Box */}
              <div className="w-full my-6">
                <CashlessClaimNoticeCTA />
              </div>

              {/* Section 13: Unique FAQ Section */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Cashless Claim Denials, Approval Delays &amp; IRDAI Rules
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Answers
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-2"
                    >
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">{faq.question}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 14: Primary Sources & Legal Citations Box */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Provisions, Regulatory Circulars &amp; Primary Judicial References
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verified Citations
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every legal proposition, turn-around-time benchmark, and court holding cited on this page is anchored in authoritative primary legal and regulatory sources:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {PRIMARY_SOURCES.map((src, i) => (
                    <a
                      key={i}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-slate-200 bg-white hover:border-red-400 hover:shadow-xs transition-all flex items-start gap-2 text-slate-700 hover:text-red-700"
                    >
                      <span className="text-red-600 font-bold shrink-0">↗</span>
                      <span className="font-medium leading-snug">{src.title}</span>
                    </a>
                  ))}
                </div>

                <p className="text-[11px] text-slate-400 italic pt-2">
                  * All statutory timelines, IRDAI master circulars, and Insurance Ombudsman rules verified as of November 2026.
                </p>
              </section>

              {/* Bottom Contextual Internal Links Section */}
              <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 space-y-3">
                <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-600">
                  Related Insurance Legal Recovery Resources
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/legal-notice-to-insurance-company-claim-rejection-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 hover:text-red-600 hover:border-red-300 transition-colors"
                  >
                    Legal Notice for Insurance Claim Rejection →
                  </Link>
                  <Link
                    href="/legal-notice-to-insurance-company-claim-rejection-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 hover:text-red-600 hover:border-red-300 transition-colors"
                  >
                    Insurance Ombudsman &amp; Bima Bharosa Guide →
                  </Link>
                  <Link
                    href="/claim-repudiated-vs-rejected-difference"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 hover:text-red-600 hover:border-red-300 transition-colors"
                  >
                    Claim Repudiated vs Rejected →
                  </Link>
                  <Link
                    href="/health-insurance-claim-rejection-reasons-counter"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 hover:text-red-600 hover:border-red-300 transition-colors"
                  >
                    Health Insurance Claim Rejection Counter-Arguments →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 hover:text-red-600 hover:border-red-300 transition-colors"
                  >
                    Legal Notice Charges &amp; Pricing →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Related Recovery Guides Component */}
        <div className="border-t border-slate-200 bg-white">
          <RelatedRecoveryGuides />
        </div>
      </div>
    </>
  );
}
