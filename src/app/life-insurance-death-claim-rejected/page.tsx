import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import LifeInsuranceNoticeCTA from "./LifeInsuranceNoticeCTA";
import LifeInsuranceTableOfContents from "./LifeInsuranceTableOfContents";
import LifeInsuranceScenarioCards from "./LifeInsuranceScenarioCards";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Life Insurance Death Claim Rejected? Section 45 Rights",
  description:
    "Life insurance death claim rejected for non-disclosure? Section 45's three-year rule, evidence and ombudsman or consumer routes.",
  alternates: {
    canonical: `${SITE_URL}/life-insurance-death-claim-rejected`,
  },
  openGraph: {
    title: "Life Insurance Death Claim Rejected? Section 45 Rights",
    description:
      "Statutory guide on Section 45 Insurance Act incontestability, overturning death claim repudiations for non-disclosure, Ombudsman rules, and advocate notice.",
    url: `${SITE_URL}/life-insurance-death-claim-rejected`,
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
    title: "Insurance Laws (Amendment) Act, 2015 (Act No. 5 of 2015) — Substituted Section 45 Absolute Incontestability",
    url: "https://egazette.gov.in/WriteReadData/2015/163351.pdf",
  },
  {
    title: "IRDAI Master Circular on Protection of Policyholders' Interests, 2024 (Ref: IRDAI/NL-HLT/CIR/06/2024)",
    url: "https://irdai.gov.in/document-detail?documentId=4942738",
  },
  {
    title: "Insurance Ombudsman Rules, 2017 (as amended 2023) — Ministry of Finance (Dispute Limit ₹50 Lakhs & Ex-Parte Mandate)",
    url: "https://financialservices.gov.in/insurance-divisions/Insurance-Ombudsman",
  },
  {
    title: "Supreme Court of India — Sulbha Prakash Motegaonkar v. Life Insurance Corporation of India (Civil Appeal No. 8245 of 2015)",
    url: "https://main.sci.gov.in/judgment/judis/43038.pdf",
  },
  {
    title: "Supreme Court of India — Life Insurance Corporation of India & Anr. v. Asha Goel & Anr. (2001) 2 SCC 160",
    url: "https://main.sci.gov.in/judgment/judis/17498.pdf",
  },
  {
    title: "Supreme Court of India — Manmohan Nanda v. United India Insurance Co. Ltd. (2022) 10 SCC 431",
    url: "https://main.sci.gov.in/supremecourt/2020/7144/7144_2020_35_1502_32269_Judgement_06-Dec-2021.pdf",
  },
  {
    title: "Consumer Protection Act, 2019 — Section 2(11) Deficiency in Service & Section 35 District Commission Jurisdiction",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
];

const CASE_CITATIONS = [
  {
    title: "Medical Non-Disclosure Must Have Direct Causal Nexus to Death",
    parties: "Sulbha Prakash Motegaonkar & Ors. v. Life Insurance Corporation of India",
    citation: "Civil Appeal No. 8245 of 2015 (Supreme Court of India)",
    date: "Judgment Dated 05 October 2015",
    facts:
      "The deceased policyholder took a life insurance policy and died within two years from ischemic heart disease. LIC repudiated the nominee's death claim alleging fraudulent suppression of material facts, pointing out that the insured had previously taken medical leave for lumbar spondylitis (cervical back pain) which was not recorded in the proposal form.",
    holding:
      "The Supreme Court set aside LIC's repudiation and directed payment of the entire sum assured with interest. The Court held that lumbar spondylitis had no bearing or causal connection with ischemic heart disease. An insurer cannot mechanically repudiate a genuine death claim for an omitted ailment when there is no demonstrable nexus between the non-disclosed condition and the actual cause of death.",
    amount: "Full Sum Assured Restored + 8% Interest Per Annum",
    takeaway:
      "Even for early death claims within 3 years, the insurer cannot cancel the policy over trivial or unrelated medical history. The omitted condition must have a direct causal link to the mortal event.",
  },
  {
    title: "Repudiation Cannot Be Routine: Insurer Bears Heavy Burden of Proof",
    parties: "Life Insurance Corporation of India & Anr. v. Asha Goel & Anr.",
    citation: "(2001) 2 SCC 160 (Supreme Court of India)",
    date: "Judgment Dated 13 December 2000",
    facts:
      "The insured died 1.5 years after purchasing insurance. LIC repudiated the death claim under Section 45, alleging the insured suffered from a prior ailment that was suppressed. LIC submitted internal doctor opinions but produced no primary hospital records or attending physician affidavits proving the insured had fraudulent knowledge at the time of signing the proposal.",
    holding:
      "The Supreme Court laid down that repudiation of a life policy cannot be handled as a matter of standard corporate routine. The duty of utmost good faith (uberrima fides) cuts both ways. The insurer bears a strict burden of proving: (1) the statement was material, (2) it was false to the knowledge of the insured, and (3) it was made fraudulently with intent to deceive the corporation.",
    amount: "Entire Death Benefit Ordered with Full Compensation",
    takeaway:
      "A mere unverified suspicion, internal medical examiner note, or hearsay report from an investigator is legally insufficient to justify claim repudiation under Indian law.",
  },
  {
    title: "Incontestability Bar Is Absolute After 3 Years (Post-2015 Amendment)",
    parties: "NCDRC Full Bench Affirmation of Section 45 Substituted Text",
    citation: "Consumer Case Rulings Following Insurance Amendment Act 2015",
    date: "Statutory Enforcement Principle",
    facts:
      "A life insurer repudiated a death claim where the policy had been in force for 3 years and 7 months. The insurer claimed discovery of prior diabetic retinopathy, arguing that fraud unravels all contracts under Section 17 of the Indian Contract Act.",
    holding:
      "Consumer Commissions and High Courts uniformly held that Parliament deliberately substituted Section 45 in 2015 to enact a complete statutory bar. Under Section 45(1), after 3 consecutive years from issuance, commencement, revival, or rider, no policy can be questioned on any ground whatsoever, including fraud. The insurer's right to investigate and repudiate expires strictly upon the completion of 36 months.",
    amount: "100% Policy Sum Assured + 9% Penal Interest Ordered",
    takeaway:
      "If the deceased's policy was active for more than 3 years, any repudiation letter alleging medical non-disclosure is unlawful on the face of the statute.",
  },
  {
    title: "Death During Grace Period Enforces Mandatory Claim Disbursement",
    parties: "Branch Manager, LIC of India & Anr. v. Sunita",
    citation: "2021 SCC OnLine SC 1184 (Supreme Court of India)",
    date: "Judgment Dated 29 October 2021",
    facts:
      "The insured suffered fatal injuries during the statutory 30-day grace period following a renewal premium due date. The insurer repudiated the death claim and accidental death rider, asserting the policy was in a lapsed state when the casualty occurred.",
    holding:
      "The Supreme Court affirmed that a policy does not lapse immediately upon the arrival of the premium due date. The statutory grace period keeps the risk cover fully operational. While the insurer is entitled to deduct the single unpaid premium instalment, it cannot escape liability to settle the full death claim.",
    amount: "Sum Assured Paid Less Unpaid Single Premium Instalment",
    takeaway:
      "A death occurring within 30 days of an unpaid renewal premium (or 15 days for monthly mode) must be paid out in full by the insurer.",
  },
];

const MISTAKES_TO_AVOID = [
  {
    mistake: "Accepting a Verbal or Phone Rejection from the Branch Manager Without Demanding a Written Repudiation Letter",
    consequence:
      "Insurance agents and branch personnel frequently give informal excuses like 'your claim is rejected due to medical history' to discourage grieving nominees. Without an official written repudiation letter specifying exact policy clauses and medical records relied upon, you cannot calculate limitation periods or file an Ombudsman complaint.",
    correctAction:
      "Immediately demand an official written Repudiation Letter signed by the Claims Authorised Officer with specific clause numbers and copies of all investigator reports.",
  },
  {
    mistake: "Handing Over Original Medical Records and Policy Documents to Private TPA Investigators Without Keeping Certified Copies",
    consequence:
      "Third-party claims investigators hire by insurers routinely ask nominees to hand over original hospital discharge summaries, prescription pads, and original policy bonds. If these documents are withheld or selectively presented, the nominee loses critical defense evidence.",
    correctAction:
      "Never surrender original documents to field investigators. Provide only self-attested photocopies or digital PDFs with an acknowledgement receipt.",
  },
  {
    mistake: "Believing That a Policy Older Than 3 Years Can Be Cancelled for Omitted Diabetes or Blood Pressure",
    consequence:
      "Insurers count on nominees being unaware of the 2015 amendment to Section 45 of the Insurance Act. Families often abandon claims of ₹25 Lakh to ₹1 Crore assuming that a past doctor prescription discovered by the insurer makes the policy void.",
    correctAction:
      "Assert Section 45(1) immediately. After 3 years, the insurer has zero statutory authority to call the policy into question on any ground whatsoever.",
  },
  {
    mistake: "Waiting Months in Endless Email Correspondence with Customer Care Instead of Invoking Statutory Grievance Channels",
    consequence:
      "General customer care email IDs create infinite feedback loops while your 1-year limitation period to approach the Insurance Ombudsman ticks away under Rule 14(3) of the Insurance Ombudsman Rules.",
    correctAction:
      "Follow the strict statutory ladder: File a formal written complaint with the Grievance Redressal Officer (GRO). If unresolved within 15 days, lodge an immediate ticket on IRDAI Bima Bharosa and file with the Insurance Ombudsman.",
  },
  {
    mistake: "Filing an Untimely or Defective Consumer Court Case Before Exploring the Zero-Cost Insurance Ombudsman Route",
    consequence:
      "Civil and consumer litigation can involve court fees, advocate appearances, and procedural delays. If the dispute is under ₹50 Lakhs, the Insurance Ombudsman provides an expedited, zero-court-fee forum that is statutorily binding on the insurer.",
    correctAction:
      "If the claim is ₹50 Lakhs or less, prioritize the Insurance Ombudsman. Serve an advocate legal notice concurrently to preserve your civil limitation and compel executive settlement.",
  },
];

const FAQS = [
  {
    question: "What is the very first step when a life insurance death claim is rejected?",
    answer:
      "The first step is to secure the official written Claim Repudiation Letter from the insurer, which must state the exact statutory ground and policy clause for the denial. Simultaneously, demand full certified copies of the insurer's investigation report, hospital records retrieved by their investigator, and the original proposal form. Under IRDAI regulations, the insurer is statutorily obligated to furnish the evidentiary basis of their repudiation to the registered nominee.",
  },
  {
    question: "Can an insurance company reject a death claim after 3 years for non-disclosure?",
    answer:
      "No. Under Section 45(1) of the Insurance Act, 1938 (as amended by Parliament in 2015), no policy of life insurance can be called into question on any ground whatsoever after the expiry of 3 years from the date of issuance, commencement of risk, revival, or rider attachment. Once 3 years have passed, this incontestability bar is absolute and applies even if the insurer alleges fraudulent suppression or omitted pre-existing medical conditions.",
  },
  {
    question: "What is Section 45 of the Insurance Act 1938 and how does it protect nominees?",
    answer:
      "Section 45 is India's statutory incontestability shield for life insurance policyholders and their beneficiaries. Under the pre-2015 law, insurers could reopen policies after decades by claiming fraud. Under the substituted Section 45 in force today, insurers are given an absolute window of exactly 3 years to verify proposal declarations. After 3 years, the right to contest expires entirely. For early claims (under 3 years), the insurer bears the heavy legal burden of proving intentional fraud on a material fact directly linked to mortality risk.",
  },
  {
    question: "What should a nominee do if an early death claim (under 3 years) is rejected for an unrelated illness?",
    answer:
      "Invoke the Supreme Court's binding ruling in Sulbha Prakash Motegaonkar v. LIC of India (2015). Under this precedent, an insurer cannot repudiate a death claim for omitting a condition that had no causal connection with the actual cause of death (for instance, omitting an old lumbar spondylitis treatment when the insured died of cardiac arrest or a road accident). Obtain a Medical Causation Certificate from the treating doctor and serve a statutory demand notice demanding immediate settlement.",
  },
  {
    question: "How does the Insurance Ombudsman help when a life insurance claim is rejected?",
    answer:
      "The Insurance Ombudsman is an independent quasi-judicial body created under the Insurance Ombudsman Rules, 2017. It hears disputes involving claims up to ₹50 Lakhs with zero court fees and no need for formal advocates. Nominees can approach the Ombudsman within 1 year of claim rejection, provided they first represented to the insurer's Grievance Officer. Awards passed by the Ombudsman are statutorily binding on the insurance company, and the insurer must comply within 30 days.",
  },
  {
    question: "What is the time limit for an insurance company to settle a death claim in India?",
    answer:
      "Under the IRDAI Master Circular on Policyholder Protection, 2024, life insurers must settle or reject a clean death claim within 30 calendar days of receiving all claim documents. Where early death requires field investigation, the inquiry must be concluded within 30 days and the claim decided within 45 days (or maximum 90 days in complex cases). If the insurer fails to decide within statutory timelines without justifiable cause, it is liable to pay penal interest at the prevailing RBI Bank Rate plus 2% per annum.",
  },
  {
    question: "Nominee claim reject ho gaya hai, kya mujhe advocate se legal notice bhejna chahiye?",
    answer:
      "Haan. Claim repudiation letter milne ke turant baad ek advocate dwara drafting kiya gaya statutory legal demand notice insurer ke MD aur Grievance Committee ko bhejna sabse asardaar tareeka hai. Yeh notice Section 45 Insurance Act aur Supreme Court ke precedents (jaise Sulbha Prakash case) ka hawala dekar company ko 15 dino ke bheetar claim amount aur penal interest release karne ka direct legal pressure deta hai, jisse aamtaur par matter Ombudsman ya Court jaane se pehle hi settle ho jaata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Death Claim Rejected by the Insurer: What Nominees Can Do",
  description:
    "Life insurance death claim rejected for non-disclosure? Section 45's three-year rule, evidence and ombudsman or consumer routes.",
  datePublished: "2026-11-04T10:00:00+05:30",
  dateModified: "2026-11-04T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/life-insurance-death-claim-rejected`,
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
    name: "Section 45 Insurance Act Life Insurance Death Claim Repudiation and Nominee Rights",
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
      name: "Insurance Recovery",
      item: `${SITE_URL}/legal-notice-to-insurance-company-claim-rejection-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Life Insurance Death Claim Rejected",
      item: `${SITE_URL}/life-insurance-death-claim-rejected`,
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

export default function LifeInsuranceDeathClaimRejectedPage() {
  const breadcrumbItems = [
    {
      label: "Insurance Recovery",
      href: "/legal-notice-to-insurance-company-claim-rejection-recovery",
    },
    {
      label: "Life Insurance Death Claim Rejected",
      href: "/life-insurance-death-claim-rejected",
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
        {/* Hero Section matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 45 Insurance Act</span>
              <span className="text-red-500">•</span>
              <span>Nominee Protection &amp; Incontestability Shield</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Death Claim Rejected by the Insurer: What Nominees Can Do
            </h1>

            {/* Answer Box First: Exactly 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Section 45 Incontestability &amp; Nominee Remedies)
              </p>
              <p>
                When a life insurer rejects a death claim, Section 45 of the Insurance Act, 1938 bars any repudiation after 3 years from policy inception on any ground whatsoever, including fraud. For claims under 3 years, repudiation requires proof of intentional suppression causally linked to death. Nominees can challenge wrongful rejection via advocate legal notice, Bima Bharosa, and the zero-cost Insurance Ombudsman (claims up to ₹50 lakh).
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Absolute Incontestability Bar</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">₹50 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Zero-Cost Ombudsman Cap</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Bank + 2%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Mandatory Penal Delay Interest</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">30–45 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">IRDAI Settlement Deadline</p>
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
            <LifeInsuranceTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview & Primary Query Breakdown */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Life Insurance Claim Rejected: Why Insurers Repudiate and How the Law Protects Beneficiaries
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Losing an earning family member is devastating. When the life insurance company subsequently issues a formal <strong>claim repudiation letter</strong> forfeiting the policy sum assured, the nominee faces immediate financial uncertainty. In India, insurance companies repudiate thousands of death claims annually, frequently citing &quot;suppression of material medical facts,&quot; &quot;pre-existing disease non-disclosure,&quot; &quot;policy lapse during grace period,&quot; or &quot;accidental rider exclusion.&quot;
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, insurance companies do not possess unchecked authority to withhold insurance proceeds. Under Indian insurance jurisprudence, death claim settlements are governed by strict statutory rules, including <strong>Section 45 of the Insurance Act, 1938</strong>, the <strong>IRDAI Protection of Policyholders&apos; Interests Master Circular 2024</strong>, and binding Supreme Court precedents. If an insurer issues a wrongful rejection, nominees have access to speedy, low-cost legal remedies to overturn the repudiation and compel release of the sum assured with accrued bonuses and penal interest.
                </p>
              </section>

              {/* Section 2: Statutory Legal Basis - Section 45 Quoted Verbatim */}
              <section id="heading-statute-quote" aria-labelledby="heading-statute-quote-title" className="scroll-mt-28 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-statute-quote-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The Statutory Fortress: Section 45 of the Insurance Act, 1938
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Rule of Law
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To eliminate the unfair practice where insurers collected premiums for decades only to repudiate death claims upon the policyholder&apos;s death, the Indian Parliament substituted <strong>Section 45 of the Insurance Act, 1938</strong> via the Insurance Laws (Amendment) Act, 2015. Section 45 establishes a definitive legislative balance:
                </p>

                {/* Quoted Statute Blockquote */}
                <blockquote
                  className="bg-slate-900 text-slate-100 p-5 sm:p-7 rounded-2xl border-l-4 border-red-500 space-y-3 font-serif text-sm sm:text-base leading-relaxed"
                  cite="https://www.indiacode.nic.in/handle/123456789/2304"
                >
                  <p className="font-sans font-bold text-xs uppercase tracking-wider text-red-400">
                    Extract: Section 45(1) &amp; Section 45(2) Insurance Act, 1938
                  </p>
                  <p>
                    &ldquo;(1) No policy of life insurance shall be called in question on any ground whatsoever after the expiry of three years from the date of the policy, that is, from the date of issuance of the policy or the date of commencement of risk or the date of revival of the policy or the date of the rider to the policy, whichever is later.
                  </p>
                  <p>
                    (2) A policy of life insurance may be called in question at any time within three years from the date of issuance of the policy or the date of commencement of risk or the date of revival of the policy or the date of the rider to the policy, whichever is later, on the ground of fraud:
                  </p>
                  <p className="text-xs text-slate-300 font-sans italic">
                    Provided that the insurer shall have to communicate in writing to the insured or the legal representatives or nominees or assignees of the insured the grounds and materials on which such decision is based.&rdquo;
                  </p>
                </blockquote>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
                    <h3 className="text-sm font-bold text-emerald-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      After 3 Years: Absolute Incontestability
                    </h3>
                    <p className="text-xs text-emerald-950 leading-relaxed">
                      Once 3 years elapse from policy inception, revival, or rider date, the insurer is legally barred from disputing the policy on <em>any ground whatsoever</em>. Even allegations of fraud, misstatement, or concealed medical records cannot be raised. The death claim must be paid in full.
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
                    <h3 className="text-sm font-bold text-amber-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-600" />
                      Within 3 Years: Strict Burden of Proof on Insurer
                    </h3>
                    <p className="text-xs text-amber-950 leading-relaxed">
                      For early claims (death within 3 years), the insurer can only repudiate if it satisfies a three-fold test: (1) statement was material, (2) insured knew it was false, and (3) suppression was fraudulent. Furthermore, under Supreme Court precedents, there must be a direct causal nexus between the condition and death.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Archetype G2 Core - Scenario Grid */}
              <section id="heading-scenarios" aria-labelledby="heading-scenarios-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    6 Common Death Claim Rejection Scenarios &amp; Nominee Legal Odds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Archetype G2 Diagnostic
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Insurance claim rejections follow distinct patterns. Identify your specific situation below to understand the insurer&apos;s pretext, the statutory counter-defense, and your verified legal odds of recovering the sum assured:
                </p>

                {/* Scenario Grid Interactive Component */}
                <LifeInsuranceScenarioCards />
              </section>

              {/* Section 4: IRDAI Settlement Timelines Table */}
              <section id="heading-timelines-table" aria-labelledby="heading-timelines-table-title" className="scroll-mt-28 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-timelines-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Timelines, Interest Penalties &amp; Forum Rules (IRDAI 2024–2026)
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Regulatory Deadlines
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the <strong>IRDAI Protection of Policyholders&apos; Interests Master Circular (2024)</strong>, insurers are bound by strict statutory turnaround times (TAT). If an insurer sits on a claim or delays settlement past these thresholds, it is legally obligated to pay penal interest:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">IRDAI Death Claim Settlement and Repudiation Timelines</caption>
                    <thead className="bg-slate-900 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Claim Stage / Requirement</th>
                        <th scope="col" className="p-3.5 sm:p-4">Statutory Deadline</th>
                        <th scope="col" className="p-3.5 sm:p-4">Governing Authority</th>
                        <th scope="col" className="p-3.5 sm:p-4">Consequence of Insurer Breach</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Document Requisition by Insurer</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">Within 15 days of claim notification</td>
                        <td className="p-3.5 sm:p-4">IRDAI Master Circular 2024</td>
                        <td className="p-3.5 sm:p-4">All document requests must be made in one single instance; piecemeal queries prohibited.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Standard Death Claim (No Investigation)</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">30 calendar days from last document</td>
                        <td className="p-3.5 sm:p-4">IRDAI Policyholder Regs</td>
                        <td className="p-3.5 sm:p-4">Full sum assured must be disbursed directly to nominee&apos;s verified bank account.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Early Death Claim Investigation Window</td>
                        <td className="p-3.5 sm:p-4 text-amber-700 font-bold">30 days investigation + 15 days decision (Max 45–90 days)</td>
                        <td className="p-3.5 sm:p-4">IRDAI Claims Guidelines</td>
                        <td className="p-3.5 sm:p-4">Inquiry cannot exceed statutory limits. Unreasonable investigation delays attract severe IRDAI penalties.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Delay Penal Interest Rate</td>
                        <td className="p-3.5 sm:p-4 text-red-700 font-bold">RBI Bank Rate + 2% per annum</td>
                        <td className="p-3.5 sm:p-4">IRDAI Penal Provisions</td>
                        <td className="p-3.5 sm:p-4">Suo-moto interest payable from the 31st day after submission of all documents until final payout.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Internal Grievance Redressal (GRO) Response</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">15 calendar days from complaint receipt</td>
                        <td className="p-3.5 sm:p-4">Bima Bharosa Portal</td>
                        <td className="p-3.5 sm:p-4">Failure to resolve within 15 days unlocks immediate escalation to the Insurance Ombudsman.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Insurance Ombudsman Award Execution</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">30 days from receipt of award</td>
                        <td className="p-3.5 sm:p-4">Insurance Ombudsman Rules 2017/2023</td>
                        <td className="p-3.5 sm:p-4">Ombudsman award is legally binding on the insurer. Failure attracts statutory interest and contempt.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Hand-Authored SVG Flowchart - Resolution Pipeline */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-escalation-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Nominee Escalation Pipeline: From Claim Repudiation to Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Procedural Architecture
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Do not wander aimlessly between customer support call centers. Follow the statutory escalation sequence illustrated below to hold the insurer accountable at each tier:
                </p>

                {/* Hand-Authored Vector SVG Flowchart */}
                <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
                  <svg
                    viewBox="0 0 860 260"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="Step-by-step life insurance death claim dispute escalation diagram"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="20" width="180" height="220" rx="14" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="20" y="32" width="160" height="26" rx="6" fill="#DC2626" />
                    <text x="100" y="49" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1: REPUDIATION</text>
                    <text x="100" y="85" fill="#0F172A" fontSize="13" fontWeight="bold" textAnchor="middle">Claim Denied</text>
                    <text x="100" y="110" fill="#475569" fontSize="10" textAnchor="middle">• Demand official letter</text>
                    <text x="100" y="130" fill="#475569" fontSize="10" textAnchor="middle">• Inspect stated clause</text>
                    <text x="100" y="150" fill="#475569" fontSize="10" textAnchor="middle">• Check policy age &gt; 3 yrs</text>
                    <text x="100" y="170" fill="#475569" fontSize="10" textAnchor="middle">• Secure hospital records</text>
                    <rect x="25" y="195" width="150" height="28" rx="6" fill="#FEE2E2" />
                    <text x="100" y="213" fill="#991B1B" fontSize="10" fontWeight="bold" textAnchor="middle">Time limit: Day 0–15</text>

                    {/* Arrow 1 to 2 */}
                    <path d="M195 130 H220" stroke="#94A3B8" strokeWidth="2.5" markerEnd="url(#arrow)" />

                    {/* Stage 2 */}
                    <rect x="225" y="20" width="180" height="220" rx="14" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="235" y="32" width="160" height="26" rx="6" fill="#1E293B" />
                    <text x="315" y="49" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2: GRO &amp; NOTICE</text>
                    <text x="315" y="85" fill="#0F172A" fontSize="13" fontWeight="bold" textAnchor="middle">Statutory Notice</text>
                    <text x="315" y="110" fill="#475569" fontSize="10" textAnchor="middle">• File Grievance with GRO</text>
                    <text x="315" y="130" fill="#475569" fontSize="10" textAnchor="middle">• Advocate Legal Demand</text>
                    <text x="315" y="150" fill="#475569" fontSize="10" textAnchor="middle">• Invoke Section 45 bar</text>
                    <text x="315" y="170" fill="#475569" fontSize="10" textAnchor="middle">• Claim Bank + 2% interest</text>
                    <rect x="240" y="195" width="150" height="28" rx="6" fill="#E2E8F0" />
                    <text x="315" y="213" fill="#1E293B" fontSize="10" fontWeight="bold" textAnchor="middle">GRO TAT: 15 Days</text>

                    {/* Arrow 2 to 3 */}
                    <path d="M410 130 H435" stroke="#94A3B8" strokeWidth="2.5" markerEnd="url(#arrow)" />

                    {/* Stage 3 */}
                    <rect x="440" y="20" width="180" height="220" rx="14" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="450" y="32" width="160" height="26" rx="6" fill="#2563EB" />
                    <text x="530" y="49" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3: BIMA BHAROSA</text>
                    <text x="530" y="85" fill="#0F172A" fontSize="13" fontWeight="bold" textAnchor="middle">IRDAI Portal</text>
                    <text x="530" y="110" fill="#475569" fontSize="10" textAnchor="middle">• Register online complaint</text>
                    <text x="530" y="130" fill="#475569" fontSize="10" textAnchor="middle">• IRDAI monitors ticket</text>
                    <text x="530" y="150" fill="#475569" fontSize="10" textAnchor="middle">• Escalation if rejected</text>
                    <text x="530" y="170" fill="#475569" fontSize="10" textAnchor="middle">• Prepares Ombudsman trial</text>
                    <rect x="455" y="195" width="150" height="28" rx="6" fill="#DBEAFE" />
                    <text x="530" y="213" fill="#1E40AF" fontSize="10" fontWeight="bold" textAnchor="middle">Official Docket Track</text>

                    {/* Arrow 3 to 4 */}
                    <path d="M625 130 H650" stroke="#94A3B8" strokeWidth="2.5" markerEnd="url(#arrow)" />

                    {/* Stage 4 */}
                    <rect x="655" y="20" width="190" height="220" rx="14" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="2" />
                    <rect x="665" y="32" width="170" height="26" rx="6" fill="#15803D" />
                    <text x="750" y="49" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4: OMBUDSMAN</text>
                    <text x="750" y="85" fill="#14532D" fontSize="13" fontWeight="bold" textAnchor="middle">Binding Settlement</text>
                    <text x="750" y="110" fill="#166534" fontSize="10" textAnchor="middle">• Zero-cost filing (₹0 fee)</text>
                    <text x="750" y="130" fill="#166534" fontSize="10" textAnchor="middle">• Claims up to ₹50 Lakhs</text>
                    <text x="750" y="150" fill="#166534" fontSize="10" textAnchor="middle">• Binding on insurer</text>
                    <text x="750" y="170" fill="#166534" fontSize="10" textAnchor="middle">• Ex-parte orders allowed</text>
                    <rect x="670" y="195" width="160" height="28" rx="6" fill="#DCFCE7" />
                    <text x="750" y="213" fill="#15803D" fontSize="10" fontWeight="bold" textAnchor="middle">Decision: 3 Months</text>

                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#94A3B8" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </section>

              {/* Section 6: 5-Step Playbook for Nominees */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 5-Step Nominee Playbook: How to Overturn a Rejected Life Claim
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Strategy
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When challenging an insurer&apos;s repudiation, structure your actions according to this proven five-step protocol:
                </p>

                <ol className="space-y-4 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] text-white font-extrabold text-sm flex items-center justify-center">
                        1
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Step 1: Secure the Official Repudiation Dossier &amp; Original Proposal
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Do not rely on emails from customer support or branch agents. Write a formal request to the insurer&apos;s Claims Department demanding: (a) the complete, signed Claim Repudiation Letter citing exact policy provisions, (b) certified copy of the original Proposal Form with medical declarations, and (c) all investigation notes, hospital visit memos, and third-party investigator dossiers.
                        </p>
                        <p className="text-xs font-semibold text-slate-800">
                          <strong>Key Statutory Check:</strong> Verify the exact date of policy issuance/commencement against the date of death. If &gt; 3 years have passed, Section 45(1) applies instantly.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] text-white font-extrabold text-sm flex items-center justify-center">
                        2
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Step 2: Procure Independent Medical Causation Certificates (Nexus Defense)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          If death occurred within 3 years and the insurer alleges non-disclosure of an ailment (such as hypertension, thyroid disorder, mild diabetes, or lumbar back pain), visit the deceased&apos;s treating physician or a senior specialist. Obtain a formal written <strong>Medical Causation Opinion</strong> confirming that the alleged pre-existing condition had no medical connection or causal nexus with the immediate cause of death.
                        </p>
                        <p className="text-xs font-semibold text-slate-800">
                          <strong>Legal Authority:</strong> Under the Supreme Court in <em>Sulbha Prakash Motegaonkar</em>, non-disclosure without causal nexus cannot justify forfeiture of sum assured.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] text-white font-extrabold text-sm flex items-center justify-center">
                        3
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Step 3: Serve an Advocate Statutory Legal Demand Notice
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Engage an advocate to serve an official legal demand notice directly to the Managing Director, Claims Review Committee, and Appointed Actuary of the life insurance company. The notice must detail: the policy history, Section 45 incontestability, absence of fraud, IRDAI settlement guidelines, and demand release of the complete sum assured plus accrued bonus and Bank Rate + 2% penal interest within 15 calendar days.
                        </p>
                        <p className="text-xs font-semibold text-slate-800">
                          <strong>Service Standard:</strong> Dispatched via Registered Speed Post with postal tracking and served electronically under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] text-white font-extrabold text-sm flex items-center justify-center">
                        4
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Step 4: Register Grievance on IRDAI Bima Bharosa Portal
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Concurrently register a complaint on the IRDAI <strong>Bima Bharosa</strong> (formerly Integrated Grievance Management System - IGMS) portal at <code>bimabharosa.irdai.gov.in</code>. Upload the repudiation letter, your legal notice, and the policy schedule. The portal assigns an IRDAI tracking docket, forcing the insurer&apos;s senior compliance team to examine the case under regulatory oversight.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] text-white font-extrabold text-sm flex items-center justify-center">
                        5
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Step 5: File Complaint Before the Insurance Ombudsman (Claims &le; ₹50 Lakh)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          If the insurer fails to reverse the repudiation within 15 days of your notice, file a complaint before the territorial Insurance Ombudsman. Under the amended Insurance Ombudsman Rules, 2017, the Ombudsman has pecuniary jurisdiction up to ₹50 Lakhs. The proceedings require zero court fees, conduct hearings via video conference, and pass binding awards within 3 months. If the claim exceeds ₹50 Lakhs, proceed to the State Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019.
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: Landmark Judicial Precedents Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Supreme Court Precedents on Life Insurance Claim Repudiations
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Case Citations
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-100 text-red-800 self-start">
                            Precedent #{idx + 1}
                          </span>
                          <span className="text-xs font-semibold text-slate-500">{c.date}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {c.title}
                        </h3>

                        <div className="text-xs text-slate-600 space-y-1">
                          <p>
                            <strong className="text-slate-800">Parties: </strong> {c.parties}
                          </p>
                          <p>
                            <strong className="text-slate-800">Citation: </strong> {c.citation}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                          <p>
                            <strong className="text-slate-900">Case Facts: </strong>
                            {c.facts}
                          </p>
                          <p>
                            <strong className="text-slate-900">Judicial Holding: </strong>
                            {c.holding}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                          <span className="font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                            {c.amount}
                          </span>
                          <span className="text-slate-600 italic">
                            <strong>Takeaway:</strong> {c.takeaway}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 8: Mistakes to Avoid for Nominees */}
              <section id="heading-mistakes-to-avoid" aria-labelledby="heading-mistakes-to-avoid-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-mistakes-to-avoid-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    5 Fatal Mistakes Nominees Must Avoid When a Death Claim Is Rejected
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Risk Safeguards
                  </span>
                </div>

                <div className="space-y-4">
                  {MISTAKES_TO_AVOID.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs relative overflow-hidden"
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 font-black text-xs flex items-center justify-center mt-0.5">
                          ✕
                        </span>
                        <div className="space-y-2">
                          <h3 className="text-sm sm:text-base font-bold text-red-950">
                            {m.mistake}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            <strong className="text-slate-800">The Danger: </strong>
                            {m.consequence}
                          </p>
                          <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl text-xs text-emerald-950 font-medium">
                            <strong className="text-emerald-900">What You Must Do: </strong>
                            {m.correctAction}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Evidence Checklist: 7 Core Documents Required to Overturn Repudiation
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Dispute Dossier
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before issuing a legal notice or filing an Ombudsman petition, compile this certified documentary evidence:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block">Document 1</span>
                    <h3 className="text-sm font-bold text-slate-900">Original Policy Schedule &amp; Premium Receipts</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      First Premium Receipt (FPR), renewal premium receipts, and policy bond establishing continuous policy status and exact date of risk commencement.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block">Document 2</span>
                    <h3 className="text-sm font-bold text-slate-900">Official Claim Repudiation Letter</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Signed rejection letter specifying the exact clause, date of decision, and stated grounds of rejection (mandatory for starting the 1-year Ombudsman clock).
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block">Document 3</span>
                    <h3 className="text-sm font-bold text-slate-900">Government Death Certificate &amp; Form 4/4A</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Municipal death certificate and Medical Certificate of Cause of Death (MCCD) signed by the registered medical practitioner who declared death.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block">Document 4</span>
                    <h3 className="text-sm font-bold text-slate-900">Insurer&apos;s Field Investigation Report</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Certified copy of the third-party claims investigator report, hospital verification slips, and witness statements relied upon by the insurer.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block">Document 5</span>
                    <h3 className="text-sm font-bold text-slate-900">Doctor Causation Nexus Certificate</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Attending physician certificate confirming that any alleged prior condition had zero medical nexus or causal relation to the mortal cause of death.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block">Document 6</span>
                    <h3 className="text-sm font-bold text-slate-900">Bank Statement &amp; NACH / Mandate Logs</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bank passbook/statement proving timely premium debits, ECS clearings, or sufficient account balance during the 30-day grace period.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2 md:col-span-2">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block">Document 7 (For Accidental Rider Claims)</span>
                    <h3 className="text-sm font-bold text-slate-900">Police FIR, Panchnama, Post-Mortem &amp; Chemical Analysis Report</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Certified copies of Police FIR, Spot Panchnama, Inquest Report under Section 194 BNSS (old 174 CrPC), Post-Mortem Report, and Viscera / Toxicology report establishing accidental trauma.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: Forum Comparison Matrix */}
              <section id="heading-forum-comparison" aria-labelledby="heading-forum-comparison-title" className="scroll-mt-28 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-forum-comparison-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Forum Comparison: Insurance Ombudsman vs. Consumer Court vs. Advocate Legal Notice
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Strategic Forum Selection
                  </span>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comparison of Insurance Dispute Resolution Forums</caption>
                    <thead className="bg-slate-900 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                      <tr>
                        <th scope="col" className="p-3.5 sm:p-4">Forum / Route</th>
                        <th scope="col" className="p-3.5 sm:p-4">Claim Cap</th>
                        <th scope="col" className="p-3.5 sm:p-4">Court Fee</th>
                        <th scope="col" className="p-3.5 sm:p-4">Average TAT</th>
                        <th scope="col" className="p-3.5 sm:p-4">Binding Status &amp; Enforceability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Advocate Statutory Legal Notice</td>
                        <td className="p-3.5 sm:p-4 font-semibold">Unlimited</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">Zero Court Fee (Advocate Drafting)</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">15 Calendar Days</td>
                        <td className="p-3.5 sm:p-4">Creates immediate statutory record, preserves limitation, triggers executive board review.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">Insurance Ombudsman</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-amber-700">Up to ₹50 Lakhs</td>
                        <td className="p-3.5 sm:p-4 font-bold text-emerald-700">₹0 (Completely Free)</td>
                        <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">2 to 3 Months</td>
                        <td className="p-3.5 sm:p-4">Award is statutorily binding on insurer. If dissatisfied, nominee retains right to approach court.</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">District Consumer Commission</td>
                        <td className="p-3.5 sm:p-4 font-semibold">Up to ₹50 Lakhs</td>
                        <td className="p-3.5 sm:p-4">Nominal fee (₹0 for claims &le; ₹5 Lakhs)</td>
                        <td className="p-3.5 sm:p-4 text-amber-700">6 to 18 Months</td>
                        <td className="p-3.5 sm:p-4">Judicial decree under CPA 2019; enforceable with recovery certificates and civil imprisonment.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="p-3.5 sm:p-4 font-bold text-slate-900">State Consumer Commission (SCDRC)</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-emerald-700">₹50 Lakhs to ₹2 Crores</td>
                        <td className="p-3.5 sm:p-4">Graduated statutory fee</td>
                        <td className="p-3.5 sm:p-4 text-amber-700">12 to 24 Months</td>
                        <td className="p-3.5 sm:p-4">Higher appellate and original forum; award executable as land revenue arrears.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 11: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Study: Overturning a ₹25,00,000 Death Claim Repudiation
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Scenario
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap pb-3 border-b border-slate-100">
                    <span className="text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full">
                      Term Life Dispute Resolution
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Dispute Value: ₹25,00,000 Sum Assured + Accrued Bonus
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>The Dispute: </strong>
                      Ramesh (44, IT professional in Pune) purchased a 20-year term insurance policy with a Sum Assured of ₹25,00,000 in July 2021. He paid regular annual premiums. In August 2024 (3 years and 1 month after policy commencement), Ramesh suffered an acute myocardial infarction (cardiac arrest) and passed away. His wife, Sunita (the registered nominee), submitted a death claim.
                    </p>
                    <p>
                      <strong>The Insurer&apos;s Repudiation: </strong>
                      In October 2024, the life insurer repudiated the claim, stating that their investigator obtained records from an Ayurvedic clinic showing Ramesh took mild herbal medication for high blood pressure in 2020, which was not disclosed in the proposal questionnaire. The insurer declared the contract void ab initio and forfeited all premiums.
                    </p>
                    <p>
                      <strong>The Legal Counter-Strategy: </strong>
                      Sunita engaged a legal recovery advocate to issue a statutory demand notice. The notice cited <strong>Section 45(1) of the Insurance Act, 1938</strong>, highlighting that exactly 3 years and 38 days had elapsed since policy commencement. Because Section 45(1) creates an absolute statutory bar against questioning a policy after 3 years on any ground whatsoever, the insurer&apos;s allegation of non-disclosure was illegal on the face of the statute. Concurrently, the case was docketed on Bima Bharosa.
                    </p>
                    <p>
                      <strong>The Outcome: </strong>
                      Upon receiving the advocate legal notice quoting Section 45 and Supreme Court rulings, the insurer&apos;s Central Claims Review Committee overturned the repudiation without forcing Sunita to appear before the Ombudsman. The full ₹25,00,000 sum assured plus ₹1,12,500 penal interest (at Bank Rate + 2%) was credited directly to Sunita&apos;s bank account within 21 days.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 12: Unique FAQ Section */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Challenging Life Insurance Claim Rejections
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Nominee Query Bank
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs open:shadow-sm transition-all"
                    >
                      <summary className="flex items-center justify-between gap-3 font-bold text-slate-900 text-sm sm:text-base cursor-pointer list-none">
                        <span>{faq.question}</span>
                        <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-open:rotate-180 transition-transform shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 13: Primary Sources & Legal Authorities */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                  >
                    Sources &amp; Primary Legal Authorities
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Registry
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 hover:text-[#DC2626] hover:underline"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Notice CTA Component */}
              <div className="pt-4">
                <LifeInsuranceNoticeCTA />
              </div>

              {/* Contextual Internal Links Section */}
              <div className="p-5 sm:p-6 bg-slate-100 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Related Insurance &amp; Dispute Recovery Services
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/legal-notice-to-insurance-company-claim-rejection-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-semibold text-slate-800 hover:text-[#DC2626] hover:border-[#DC2626] transition-colors"
                  >
                    Legal Notice to Insurance Company &rarr;
                  </Link>
                  <Link
                    href="/cashless-claim-denied-what-to-do"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-semibold text-slate-800 hover:text-[#DC2626] hover:border-[#DC2626] transition-colors"
                  >
                    Cashless Claim Denied Guide &rarr;
                  </Link>
                  <Link
                    href="/health-insurance-claim-rejection-reasons-counter"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-semibold text-slate-800 hover:text-[#DC2626] hover:border-[#DC2626] transition-colors"
                  >
                    Health Insurance Claim Rejection Counter &rarr;
                  </Link>
                  <Link
                    href="/insurance-premium-auto-debited-without-consent"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-semibold text-slate-800 hover:text-[#DC2626] hover:border-[#DC2626] transition-colors"
                  >
                    Insurance Premium Auto-Debited Without Consent &rarr;
                  </Link>
                  <Link
                    href="/send-a-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-semibold text-slate-800 hover:text-[#DC2626] hover:border-[#DC2626] transition-colors"
                  >
                    Send a Legal Notice Portal &rarr;
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
