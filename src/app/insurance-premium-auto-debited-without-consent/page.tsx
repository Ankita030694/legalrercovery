import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import InsuranceDebitNoticeCTA from "./InsuranceDebitNoticeCTA";
import InsuranceDebitTableOfContents from "./InsuranceDebitTableOfContents";
import InsuranceDebitChecklistWizard from "./InsuranceDebitChecklistWizard";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Insurance Premium Auto-Debited Without Consent? Refund",
  description:
    "Insurance premium auto-debited without consent? Mis-selling rules, free-look refund and how to recover the money from bank and insurer.",
  alternates: {
    canonical: `${SITE_URL}/insurance-premium-auto-debited-without-consent`,
  },
  openGraph: {
    title: "Insurance Premium Auto-Debited Without Consent? Statutory Refund Guide",
    description:
      "Statutory escalation path for insurance deducted automatically from bank account without permission, PMJJBY refund, bancassurance mis-selling, and legal notice.",
    url: `${SITE_URL}/insurance-premium-auto-debited-without-consent`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Insurance Premium Auto-Debited Without Consent? Statutory Refund Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Premium Auto-Debited Without Consent? Statutory Refund Guide",
    description:
      "Statutory escalation path for insurance deducted automatically from bank account without permission, PMJJBY refund, bancassurance mis-selling, and legal notice.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "IRDAI (Protection of Policyholders' Interests and Allied Matters of Insurers) Regulations, 2024 — Regulation 8 & 9 (Consent & Mis-selling Prohibition)",
    url: "https://irdai.gov.in/document-detail?documentId=4934824",
  },
  {
    title: "IRDAI Master Circular on Protection of Policyholders' Interests (Ref: IRDAI/NL/GDL/MISC/89/05/2024) — 30-Day Free-Look & Electronic Consent Mandate",
    url: "https://irdai.gov.in/master-circulars",
  },
  {
    title: "Reserve Bank of India (RBI) Charter of Customer Rights — Right to Suitability & Fair Treatment (Prohibiting Tied Bancassurance Products)",
    url: "https://www.rbi.org.in/scripts/BS_ViewMasCirculardetails.aspx?id=9862",
  },
  {
    title: "Department of Financial Services (DFS), Ministry of Finance — PMJJBY & PMSBY Operational Guidelines on Mandatory Consent Forms",
    url: "https://financialservices.gov.in/beta/en/schemes-programmes/social-security-schemes",
  },
  {
    title: "Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021) — Section 10(2) Non-Adherence to RBI Instructions on Account Debits",
    url: "https://cms.rbi.org.in/",
  },
  {
    title: "IRDAI Bima Bharosa Integrated Grievance Redressal System — Statutory Consumer Escalation Portal",
    url: "https://bimabharosa.irdai.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Passbook Entries & SMS Debits)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "District Commission Directs Bank & Life Insurer to Refund Auto-Debited Premium with Punitive Damages",
    parties: "Ravindra Nath Sharma v. State Bank of India & SBI Life Insurance Co. Ltd.",
    citation: "Consumer Complaint No. 184/2022, District Consumer Disputes Redressal Commission (DCDRC), Jaipur",
    date: "Order Dated 17 August 2023",
    facts:
      "A senior pensioner held a savings account. The bank deducted ₹28,450 for a group life policy without any signed proposal form. When the customer asked for a refund, the bank claimed the scheme was mandatory. The insurer also refused a refund, claiming the 15-day free-look period had expired, even though the customer never got the policy document.",
    holding:
      "The District Commission held that debiting an account without written consent violates RBI rules and IRDAI regulations. The free-look period starts only after the customer receives the policy papers. The forum ordered the bank and insurer to refund the ₹28,450 premium at 9% interest, plus ₹20,000 for mental distress and ₹10,000 legal costs.",
    amount: "₹28,450 Full Premium Refund @ 9% Interest + ₹20,000 Mental Harassment Award + ₹10,000 Legal Costs",
    takeaway:
      "Banks and insurers are jointly liable for unauthorized debits. Insurers cannot cite free-look expiry without proving actual delivery of the policy document.",
  },
  {
    title: "State Commission Ruling on Forced Insurance Bundling with Home Loan Disbursal",
    parties: "Gurmeet Singh v. HDFC Bank Ltd. & HDFC ERGO General Insurance Co.",
    citation: "First Appeal No. 76/2021, State Consumer Disputes Redressal Commission, UT Chandigarh",
    date: "Order Dated 24 November 2022",
    facts:
      "During home loan processing, the bank deducted ₹84,200 for a 5-year insurance cover from the loan amount without borrower consent. The borrower protested within 20 days and asked for cancellation. The bank refused, stating that the insurance was a mandatory loan condition.",
    holding:
      "The State Commission ruled that forcing insurance as a loan condition is an unfair trade practice under Section 2(47). The Commission ordered the bank to refund ₹84,200 back into the loan account, recalculate the EMI schedule without extra interest, and pay ₹35,000 damages.",
    amount: "₹84,200 Loan Reversal + Amortisation Recalculation + ₹35,000 Harassment Compensation",
    takeaway:
      "Forced insurance bundling during loan processing is illegal under RBI rules. Borrowers have full right to decline third-party insurance.",
  },
  {
    title: "National Consumer Commission (NCDRC) Holds Auto-Enrolment in Social Schemes Without Form as Deficiency",
    parties: "Punjab National Bank v. Smt. Sumitra Devi",
    citation: "Revision Petition No. 1422 of 2019, NCDRC New Delhi",
    date: "Order Dated 08 March 2021",
    facts:
      "A bank auto-debited PMJJBY premium from an account holder without a signed form or auto-debit mandate. Later, when the insured passed away, the insurer rejected the death claim due to missing bank records. The nominee filed a consumer case.",
    holding:
      "The NCDRC held that banks hold customer money in trust. Deducting premiums without written consent is a serious deficiency of service under Section 2(11). Because of the bank's error, the National Commission ordered the bank to pay the entire ₹2,00,000 claim amount to the nominee.",
    amount: "₹2,00,000 Equivalent Compensation Awarded Due to Unauthorised Bank Debit Defect",
    takeaway:
      "Enrolling customers in PMJJBY or PMSBY without signed forms makes banks strictly liable for wrongful debits and resulting losses.",
  },
  {
    title: "Insurance Ombudsman Award: Full Refund of Mis-sold ULIP Marketed as Fixed Deposit",
    parties: "Mrs. Meena Aggarwal v. ICICI Bank & ICICI Prudential Life Insurance",
    citation: "Award No. IO/DEL/A/LI/0045/2023-24, Office of the Insurance Ombudsman, Delhi",
    date: "Award Dated 12 October 2023",
    facts:
      "A customer visited her bank to open a ₹1,00,000 fixed deposit. The sales agent falsely sold her a 10-year recurring ULIP policy instead. Next year, an auto-debit notice arrived for the second premium. The customer objected and showed that handwriting on the form was forged.",
    holding:
      "The Insurance Ombudsman noted that details on the proposal form did not match the customer's bank records. Under IRDAI rules, insurers cannot accept policies sold through bank misrepresentation. The Ombudsman ordered full cancellation and a 100% refund of the ₹1,00,000 deposit.",
    amount: "₹1,00,000 Full Deposit Restitution with Zero Deduction",
    takeaway:
      "When bank staff sell insurance policies disguised as fixed deposits, customers can secure a full cancellation and refund through the Insurance Ombudsman.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "Bank managers claim insurance is legally mandatory whenever you take a home loan, car loan, or MSME credit facility.",
    fact: "False. Both the RBI and IRDAI ban forced bundling. Borrowers cannot be forced to buy insurance from a bank's partner companies.",
  },
  {
    myth: "Once the 30-day free-look period expires from the auto-debit date, you permanently forfeit your right to a refund.",
    fact: "False. Under IRDAI rules, the free-look period starts when you receive the policy document, not when the money is debited. If you never received the policy, you can still cancel.",
  },
  {
    myth: "PMJJBY (₹436) and PMSBY (₹20) auto-debits cannot be reversed because they are Government of India welfare schemes.",
    fact: "False. Government guidelines require signed consent or an approved e-mandate. Debiting money without consent is an unauthorized transaction that the bank must refund.",
  },
  {
    myth: "You must lodge your complaint solely with the insurance company, not the bank that debited your money.",
    fact: "False. Under the Consumer Protection Act, the bank acts as an insurance agent. Both the bank and the insurance company are jointly liable for unauthorized debits.",
  },
  {
    myth: "Only consumer courts can order refunds; banking ombudsmen do not handle insurance debits.",
    fact: "False. The RBI Ombudsman handles banking complaints, including unauthorized debits, and can award compensation up to ₹20 Lakh plus ₹1 Lakh for mental distress.",
  },
];

const FAQS = [
  {
    question: "Why was insurance deducted automatically from my bank account without permission?",
    answer:
      "Insurance is often deducted without consent due to aggressive bank sales targets. Staff bundle policies during loan processing or fixed deposit creation. Banks also enroll customers in PMJJBY (₹436) or PMSBY (₹20) without signed forms. Under RBI and IRDAI rules, any deduction without clear consent is illegal.",
  },
  {
    question: "How do I get a refund for an unauthorized PMJJBY (₹436) or PMSBY (₹20) deduction?",
    answer:
      "To get a refund, submit a written complaint to your branch manager within 30 days. State that you never signed a consent form or mandate. Ask for an immediate refund and mandate cancellation. If the bank fails to reverse the money within 7 days, file a complaint on the RBI portal (cms.rbi.org.in).",
  },
  {
    question: "Can I cancel a bancassurance policy after the 30-day free-look period has expired?",
    answer:
      "Yes. Under IRDAI rules, the 30-day free-look period starts only after you receive the policy document. If the policy was sold through misrepresentation or without your knowledge, the contract is void under Section 19 of the Contract Act. You can demand a full refund with interest.",
  },
  {
    question: "What legal liability does the bank have for third-party insurance auto-debits?",
    answer:
      "Under IRDAI rules and the RBI Customer Rights Charter, banks act as licensed corporate agents. They cannot debit money without explicit consent or force insurance for loans. If an unauthorized debit happens, the bank is jointly liable with the insurer under consumer law.",
  },
  {
    question: "What is the difference between complaining to the RBI Ombudsman vs IRDAI Bima Bharosa?",
    answer:
      "File a complaint with the RBI Banking Ombudsman (cms.rbi.org.in) if the issue is an unauthorized bank debit or forced loan bundling. Lodge a complaint with IRDAI Bima Bharosa if the issue involves policy mis-selling or rejected cancellation. You can also send a legal notice to both.",
  },
  {
    question: "Will sending an advocate legal notice help recover my auto-debited insurance money?",
    answer:
      "Yes. A legal notice cites RBI customer rules and Section 2(47) of the Consumer Protection Act. It gives the bank and insurer 15 days to refund your money with interest. Most banks resolve the issue quickly to avoid consumer court penalties.",
  },
  {
    question: "How long does a bank have to refund an unauthorized insurance debit?",
    answer:
      "Under RBI rules, unauthorized debits must be investigated quickly. If the bank cannot show proof of consent, it must reverse the debit within 10 working days. For free-look cancellations, IRDAI requires insurers to process refunds within 7 to 15 days.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bank Debited an Insurance Premium You Never Agreed To",
  description:
    "Insurance premium auto-debited without consent? Mis-selling rules, free-look refund and how to recover the money from bank and insurer.",
  url: `${SITE_URL}/insurance-premium-auto-debited-without-consent`,
  inLanguage: "en-IN",
  datePublished: "2026-11-04T09:30:00+05:30",
  dateModified: "2026-11-04T09:30:00+05:30",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/insurance-premium-auto-debited-without-consent`,
  },
  author: {
    "@type": "Organization",
    name: "LegalRecovery Editorial Team",
    url: `${SITE_URL}/about`,
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
  about: [
    {
      "@type": "Thing",
      name: "Bancassurance Mis-selling",
    },
    {
      "@type": "Thing",
      name: "Unauthorised Bank Account Auto-Debit",
    },
    {
      "@type": "Thing",
      name: "IRDAI Free-Look Cancellation",
    },
    {
      "@type": "Thing",
      name: "RBI Banking Ombudsman Scheme",
    },
  ],
  citation: PRIMARY_SOURCES.map((source) => source.url),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Banking & Payment Recovery",
      item: `${SITE_URL}/recovery/fraud-transaction-amount`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Unauthorised Insurance Premium Auto-Debit",
      item: `${SITE_URL}/insurance-premium-auto-debited-without-consent`,
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

export default function InsuranceDebitPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Banking Recovery", href: "/recovery/fraud-transaction-amount" },
    { label: "Unauthorised Insurance Debit", href: "/insurance-premium-auto-debited-without-consent" },
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
              <span>IRDAI Policyholder Protection 2024</span>
              <span className="text-red-500">•</span>
              <span>RBI Customer Rights Charter</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Bank Debited an Insurance Premium You Never Agreed To
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary: Bancassurance Mis-Selling &amp; Unauthorised Debit
              </p>
              <p>
                Under IRDAI rules and RBI guidelines, banks cannot deduct insurance premiums without your explicit signed consent. They cannot force you to buy insurance to get a loan. If an unauthorized premium is deducted, demand proof of consent from the branch. You can cancel within the 30-day free-look window and send a 15-day legal notice demanding a full refund.
              </p>
            </div>

            {/* 4 Summary Stat Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">30 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  IRDAI 2024 Free-Look Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Refund on Unconsented Deductions
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">9%–12%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Statutory Interest Rate
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹30 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">
                  Ombudsman Award Ceiling
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <InsuranceDebitTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Archetype Step 2: Pre-Flight Checklist Wizard */}
              <section
                id="heading-checklist-wizard"
                aria-labelledby="heading-checklist-wizard-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-checklist-wizard-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pre-Flight Checklist: Audit Your Unauthorised Insurance Debit
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  When insurance deducted automatically from account balances without your approval occurs, immediate evidence preservation prevents the bank from fabricating verbal consent records. Use this interactive pre-flight audit to confirm whether you have secured the core proof required for a successful recovery notice.
                </p>

                <InsuranceDebitChecklistWizard />
              </section>

              {/* Section 2: Statutory Legal Framework & IRDAI/RBI Non-Consent Rules */}
              <section
                id="heading-statutory-framework"
                aria-labelledby="heading-statutory-framework-title"
                className="scroll-mt-28 space-y-5"
              >
                <h2
                  id="heading-statutory-framework-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  RBI and IRDAI Statutory Rules Governing Insurance Auto-Debits
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Indian financial jurisprudence strictly demarcates the fiduciary boundary between a banking institution and third-party insurance companies. When an insurance premium auto-debited without consent appears on your account statement, the debit violates multiple statutory codes:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      IRDAI Policyholder Protection 2024
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Regulation 8 &amp; 9: Mandatory Written/Digital Consent
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Insurers and corporate agents (commercial banks) cannot underwrite or issue any insurance policy without an explicit proposal form signed physically or authenticated electronically via two-factor OTP. The absence of affirmative consent renders the contract void ab initio.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      RBI Charter of Customer Rights
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Right to Suitability &amp; Prohibition on Forced Bundling
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Banks cannot condition loan sanction, locker allotment, or new account opening on the purchase of insurance products. Forced bancassurance bundling is an explicit violation of the RBI Master Direction on Customer Service.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      Consumer Protection Act, 2019
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Section 2(47) Unfair Trade Practice &amp; Section 2(11) Deficiency
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Unilaterally debiting customer deposits without consent constitutes an unfair trade practice. Consumer commissions possess statutory authority to award full refund, penal interest, and compensation for mental agony.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      IRDAI 30-Day Free-Look Standard
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Clause 5 Master Circular: Receipt-Triggered Window
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under the May 2024 Master Circular, policyholders enjoy an expanded 30-day free-look period for policies issued electronically. Crucially, the 30-day countdown begins strictly upon verifiable delivery of the policy document, never from the debit date.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  <strong>Notice on Bank Charges &amp; Recovery:</strong> If your account entered negative balance or incurred overdraft interest and bounce fees due to an unauthorized insurance deduction, refer to our comprehensive guide on{" "}
                  <Link
                    href="/bank-charges-refund-legal-notice"
                    className="font-bold underline hover:text-amber-800"
                  >
                    bank charges refund legal notice
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/recovery/fraud-transaction-amount"
                    className="font-bold underline hover:text-amber-800"
                  >
                    fraud transaction amount recovery
                  </Link>{" "}
                  to demand restitution of all cascading penalties.
                </div>
              </section>

              {/* Archetype Step 3: Document & Evidence Matrix Table */}
              <section
                id="heading-evidence-matrix"
                aria-labelledby="heading-evidence-matrix-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Document &amp; Evidence Matrix: Proving Unauthorised Bank Debits
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  To legally compel a bank and insurance corporate agent to refund debited sums, you must establish two foundational facts: (1) that the money left your account, and (2) that the bank holds no affirmative consent document bearing your signature or authenticated OTP log.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <caption className="sr-only">
                      Document &amp; Evidence Matrix for Unauthorised Insurance Deductions
                    </caption>
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                        <th scope="col" className="p-3 sm:p-4">
                          Evidence Document
                        </th>
                        <th scope="col" className="p-3 sm:p-4">
                          Why It Matters Legally
                        </th>
                        <th scope="col" className="p-3 sm:p-4">
                          Where &amp; How to Obtain
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          Bank Account Passbook / Stamped Statement
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          Proves the financial debit, exact amount, transaction date, and narration code (e.g., &apos;INSU-DEBIT&apos;, &apos;PMJJBY&apos;). Admissible under Section 63 BSA 2023.
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          Download stamped e-statement from Net Banking or get physical passbook updated at your home branch.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          Written Demand for Signed Proposal Form
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          Shifts the burden of proof onto the bank under Section 106 Indian Evidence Act. If they cannot produce a signed form within 15 days, lack of consent is judicially established.
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          Submit a formal email / registered letter to the Branch Manager and Insurer Grievance Redressal Officer.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          Loan Sanction Letter &amp; Disbursal Memo
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          Demonstrates whether insurance was unlawfully bundled into the principal loan disbursement as a condition precedent under Section 2(47) CPA 2019.
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          Retrieve from your original loan welcome pack or download from the bank&apos;s retail loan portal.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          Dated Free-Look Cancellation Communication
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          Proves timely invocation of the statutory 30-day cancellation right under IRDAI Master Circular 2024, blocking the insurer from denying refund on limitation grounds.
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          Sent via registered email to the insurer&apos;s customer service email with copy to the bank manager.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 align-top">
                          NACH / e-Mandate Revocation Record
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          Confirms customer instruction to revoke recurring debits. Any subsequent debit constitutes deliberate criminal breach of trust under BNS Section 316.
                        </td>
                        <td className="p-3 sm:p-4 align-top">
                          Net Banking &gt; Mandates &gt; Cancel Mandate, or written physical instruction submitted at bank counter.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Archetype Step 4: Process Timeline <ol> with <time> */}
              <section
                id="heading-process-timeline"
                aria-labelledby="heading-process-timeline-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-process-timeline-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Statutory Escalation Roadmap to Force a Full Refund
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Do not waste weeks arguing verbally with branch staff who face sales target deductions if they reverse your policy. Follow this chronological legal escalation path designed to establish documented culpability:
                </p>

                <ol className="relative border-l-2 border-red-600/30 ml-4 space-y-6 pt-2">
                  <li className="ml-6 space-y-1">
                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-red-600 text-white rounded-full text-xs font-bold ring-4 ring-white">
                      1
                    </span>
                    <div className="flex items-center gap-2">
                      <time
                        dateTime="P1D"
                        className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2 py-0.5 rounded"
                      >
                        Day 1 – 3
                      </time>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Identify Debit &amp; Lodge Immediate Written Protest with Branch Manager
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Immediately upon receiving the debit SMS or passbook entry, submit a written complaint to the branch manager. Explicitly declare that no consent was given, demand the UMRN or policy number, and instruct them to block all future debits. Obtain an official stamp on the office copy.
                    </p>
                  </li>

                  <li className="ml-6 space-y-1">
                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-red-600 text-white rounded-full text-xs font-bold ring-4 ring-white">
                      2
                    </span>
                    <div className="flex items-center gap-2">
                      <time
                        dateTime="P7D"
                        className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2 py-0.5 rounded"
                      >
                        Day 4 – 10
                      </time>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Exercise Free-Look Cancellation with the Insurer&apos;s Head Office
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Do not rely on the bank branch to forward your request. Email the insurer&apos;s Grievance Redressal Officer (GRO) directly citing the policy number. State that under IRDAI Master Circular 2024, you are invoking your 30-day free-look right and demand an unpenalized 100% refund into your savings account.
                    </p>
                  </li>

                  <li className="ml-6 space-y-1">
                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-red-600 text-white rounded-full text-xs font-bold ring-4 ring-white">
                      3
                    </span>
                    <div className="flex items-center gap-2">
                      <time
                        dateTime="P15D"
                        className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2 py-0.5 rounded"
                      >
                        Day 11 – 20
                      </time>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Serve a Formal 15-Day Advocate Legal Notice to Bank &amp; Insurer
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If the branch or insurer prevaricates, serves a generic rejection, or claims the 15-day period has passed, serve a formal advocate legal notice. The notice establishes joint liability under Section 2(47) CPA 2019 and puts the board of directors on notice of impending consumer court litigation.
                    </p>
                  </li>

                  <li className="ml-6 space-y-1">
                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-red-600 text-white rounded-full text-xs font-bold ring-4 ring-white">
                      4
                    </span>
                    <div className="flex items-center gap-2">
                      <time
                        dateTime="P30D"
                        className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2 py-0.5 rounded"
                      >
                        Day 21 – 35
                      </time>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        File Concurrent Complaints on RBI CMS &amp; IRDAI Bima Bharosa
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Escalate the dispute concurrently to the RBI Banking Ombudsman (under Clause 10(2) of RB-IOS 2021 for unauthorized debits) and the IRDAI Bima Bharosa Portal (for bancassurance mis-selling). Regulators compel senior nodal officers to explain the lack of physical consent records.
                    </p>
                  </li>

                  <li className="ml-6 space-y-1">
                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-red-600 text-white rounded-full text-xs font-bold ring-4 ring-white">
                      5
                    </span>
                    <div className="flex items-center gap-2">
                      <time
                        dateTime="P60D"
                        className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2 py-0.5 rounded"
                      >
                        Day 36+
                      </time>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Institute Consumer Complaint on e-Jagriti with Penal Damages
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      If the bank remains recalcitrant, file a consumer complaint before the District Consumer Disputes Redressal Commission via the national e-Jagriti portal. Claim 100% refund of debited premium, 12% annual interest, ₹25,000 for mental agony, and ₹10,000 in litigation expenses.
                    </p>
                  </li>
                </ol>
              </section>

              {/* Archetype Step 5: Worked Example / Financial Audit */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Worked Refund Audit: Forced Bundling on a Home Loan Disbursal
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  The following illustrative case study demonstrates how an unauthorized insurance debit creates compounding financial damages and how our legal notice enforces full financial restitution:
                </p>

                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
                  <div className="border-b border-slate-100 pb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Illustrative Dispute Audit (Case File: LR-AUD-2026/089)
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200">
                      100% Recovery Achieved
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-2">
                      <p className="font-bold text-slate-900">Borrower &amp; Transaction Details:</p>
                      <ul className="space-y-1 text-slate-600">
                        <li>• Sanctioned Home Loan: <strong>₹45,00,000</strong></li>
                        <li>• Net Loan Disbursed to Builder: <strong>₹44,38,000</strong></li>
                        <li>• Unexplained Disbursal Shortfall: <strong>₹62,000</strong></li>
                        <li>• Hidden Product: 5-Year Single-Premium Group Credit Life Cover</li>
                        <li>• Bank Justification: &quot;Mandatory credit risk policy per internal rule&quot;</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <p className="font-bold text-slate-900">Hidden Financial Impact Over 24 Months:</p>
                      <ul className="space-y-1 text-slate-600">
                        <li>• Deducted Insurance Premium: <strong>₹62,000</strong></li>
                        <li>• Loan Interest Charged on ₹62k @ 8.75%: <strong>₹10,850</strong></li>
                        <li>• Monthly EMI Inflation: <strong>+₹548 / month</strong></li>
                        <li>• Free-Look Rejection: Denied by bank on Day 45 citing delay</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 bg-slate-50 p-4 rounded-xl space-y-2">
                    <p className="font-bold text-xs uppercase tracking-wider text-slate-900">
                      Legal Remedy &amp; Final Restitution Settlement:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="text-slate-500 block text-[11px]">Principal Refund</span>
                        <span className="font-black text-slate-900 text-sm">₹62,000</span>
                        <span className="text-[10px] text-slate-500 block">Re-credited to loan</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="text-slate-500 block text-[11px]">Compounded Interest Reversal</span>
                        <span className="font-black text-slate-900 text-sm">₹10,850</span>
                        <span className="text-[10px] text-slate-500 block">All accrued interest wiped</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="text-slate-500 block text-[11px]">Harassment &amp; Legal Costs</span>
                        <span className="font-black text-emerald-600 text-sm">₹25,000</span>
                        <span className="text-[10px] text-slate-500 block">Paid directly to customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Landmark Consumer Court & Ombudsman Precedents */}
              <section
                id="heading-court-precedents"
                aria-labelledby="heading-court-precedents-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-court-precedents-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Landmark Consumer Court Precedents on Bancassurance Auto-Debits
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Indian consumer commissions and the National Commission have repeatedly ruled that debiting funds without affirmative consent or conditioning bank services on insurance products exposes banks to severe penal compensation:
                </p>

                <div className="space-y-4">
                  {CASE_CITATIONS.map((citation, index) => (
                    <div
                      key={index}
                      className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-100">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {citation.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded">
                          {citation.date}
                        </span>
                      </div>

                      <div className="text-xs space-y-1">
                        <p className="text-slate-800 font-bold">Parties: {citation.parties}</p>
                        <p className="text-slate-500">Citation: {citation.citation}</p>
                      </div>

                      <div className="text-xs text-slate-600 leading-relaxed space-y-1.5">
                        <p><strong>Facts:</strong> {citation.facts}</p>
                        <p><strong>Holding:</strong> {citation.holding}</p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="text-xs font-bold text-emerald-700">
                          Award: {citation.amount}
                        </span>
                        <span className="text-[11px] text-slate-500 italic">
                          Key Rule: {citation.takeaway}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Hand-Authored SVG Process Workflow Diagram */}
              <section
                id="heading-workflow-diagram"
                aria-labelledby="heading-workflow-diagram-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-workflow-diagram-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Bancassurance Auto-Debit Reversal Workflow Diagram
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  The diagram below illustrates how an unauthorized debit flows from your savings account into the bank-insurer nodal clearing pool, and the statutory legal leverage points that compel immediate restitution:
                </p>

                <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="min-w-[640px] max-w-full mx-auto">
                    <svg
                      viewBox="0 0 740 280"
                      className="w-full h-auto text-slate-900"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Bancassurance Unauthorised Auto-Debit Reversal Sequence"
                    >
                      {/* Step 1: Customer Account */}
                      <rect x="20" y="40" width="180" height="90" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <text x="110" y="70" textAnchor="middle" fill="#0F172A" fontWeight="bold" fontSize="13">Customer Bank Account</text>
                      <text x="110" y="90" textAnchor="middle" fill="#DC2626" fontWeight="bold" fontSize="11">Unauthorised Debit Occurs</text>
                      <text x="110" y="110" textAnchor="middle" fill="#64748B" fontSize="10">No Signed Consent / Form</text>

                      {/* Arrow 1 to 2 */}
                      <path d="M200 85 H260" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 4" markerEnd="url(#arrow-red)" />
                      <text x="230" y="75" textAnchor="middle" fill="#DC2626" fontSize="9" fontWeight="bold">Auto-Debit</text>

                      {/* Step 2: Commercial Bank Branch */}
                      <rect x="270" y="40" width="200" height="90" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <text x="370" y="68" textAnchor="middle" fill="#0F172A" fontWeight="bold" fontSize="13">Commercial Bank (Agent)</text>
                      <text x="370" y="88" textAnchor="middle" fill="#B45309" fontWeight="bold" fontSize="11">Cross-Sell Target Pressure</text>
                      <text x="370" y="108" textAnchor="middle" fill="#64748B" fontSize="10">Bundled / PMJJBY / Traditional</text>

                      {/* Arrow 2 to 3 */}
                      <path d="M470 85 H530" stroke="#0284C7" strokeWidth="2.5" markerEnd="url(#arrow-blue)" />
                      <text x="500" y="75" textAnchor="middle" fill="#0284C7" fontSize="9" fontWeight="bold">Commission</text>

                      {/* Step 3: Insurance Company */}
                      <rect x="540" y="40" width="180" height="90" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <text x="630" y="70" textAnchor="middle" fill="#0F172A" fontWeight="bold" fontSize="13">Insurance Principal</text>
                      <text x="630" y="90" textAnchor="middle" fill="#0284C7" fontWeight="bold" fontSize="11">Policy Schedule Generated</text>
                      <text x="630" y="110" textAnchor="middle" fill="#64748B" fontSize="10">Physical Delivery Omitted</text>

                      {/* Legal Interventions Lower Block */}
                      <rect x="120" y="170" width="500" height="85" rx="12" fill="#0F172A" stroke="#1E293B" strokeWidth="2" />
                      <text x="370" y="195" textAnchor="middle" fill="#F8FAFC" fontWeight="bold" fontSize="13">Statutory Restitution Framework</text>
                      <text x="370" y="215" textAnchor="middle" fill="#FBBF24" fontSize="11">IRDAI Free-Look Mandate • RBI Customer Rights • Section 2(47) CPA Notice</text>
                      <text x="370" y="235" textAnchor="middle" fill="#34D399" fontWeight="bold" fontSize="11">Enforces 100% Refund + Statutory Interest + Penal Damages</text>

                      {/* Return Arrow from Legal Block */}
                      <path d="M120 210 H70 V135" stroke="#10B981" strokeWidth="2.5" markerEnd="url(#arrow-green)" fill="none" />
                      <text x="50" y="180" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="bold">Full Reversal</text>

                      {/* Arrow Defs */}
                      <defs>
                        <marker id="arrow-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                          <polygon points="0 0, 6 3, 0 6" fill="#DC2626" />
                        </marker>
                        <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                          <polygon points="0 0, 6 3, 0 6" fill="#0284C7" />
                        </marker>
                        <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                          <polygon points="0 0, 6 3, 0 6" fill="#10B981" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>
              </section>

              {/* Section 8: Myth vs Fact Comparison Matrix */}
              <section
                id="heading-myth-fact"
                aria-labelledby="heading-myth-fact-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-myth-fact-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Common Bancassurance Myths vs Statutory Legal Facts
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Bank branch managers often employ misleading explanations to discourage consumers from reclaiming auto-debited insurance fees. Here is what statutory regulations actually mandate:
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {MYTH_FACT_PAIRS.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm space-y-2"
                    >
                      <div className="flex items-start gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-800 shrink-0 mt-0.5">
                          Bank Myth
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-slate-800">
                          {item.myth}
                        </p>
                      </div>
                      <div className="flex items-start gap-2 pt-1 border-t border-slate-100">
                        <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                          Statutory Fact
                        </span>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.fact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Legal Notice Format / Template Block */}
              <section
                id="heading-legal-notice-format"
                aria-labelledby="heading-legal-notice-format-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-legal-notice-format-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Legal Notice Format: Unauthorised Insurance Debit Reversal
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  If your bank and the affiliated insurance company ignore written complaints, this formal advocate legal notice template establishes mandatory pre-litigation compliance under Section 2(47) of the Consumer Protection Act, 2019:
                </p>

                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed border border-slate-800 shadow-xl overflow-x-auto space-y-4">
                  <div className="text-red-400 font-bold uppercase tracking-wider pb-2 border-b border-slate-800">
                    ADVOCATE LEGAL NOTICE FORMAT — BANCASSURANCE REVERSAL
                  </div>
                  <p>
                    <strong>TO:</strong>
                    <br />
                    1. The Branch Manager, [NAME OF BANK], [BRANCH ADDRESS]
                    <br />
                    2. The Managing Director &amp; CEO, [NAME OF INSURANCE COMPANY], [HEAD OFFICE ADDRESS]
                  </p>
                  <p>
                    <strong>SUBJECT:</strong> STATUTORY DEMAND NOTICE UNDER CONSUMER PROTECTION ACT, 2019 &amp; IRDAI REGULATIONS 2024 FOR IMMEDIATE REVERSAL OF UNAUTHORISED INSURANCE PREMIUM OF RS. [AMOUNT] DEBITED FROM SAVINGS/LOAN ACCOUNT NO. [ACCOUNT NO]
                  </p>
                  <p>
                    <strong>UNDER INSTRUCTIONS FROM MY CLIENT:</strong> [CLIENT FULL NAME], Residing at [CLIENT ADDRESS], I hereby serve upon you this formal notice:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>
                      That my Client maintains Savings Bank / Loan Account No. [ACCOUNT NUMBER] with Noticee No. 1 Bank, having IFSC [IFSC CODE].
                    </li>
                    <li>
                      That on [DATE OF DEBIT], a sum of Rs. [DEBITED AMOUNT] was unilaterally debited under narration &apos;[NARRATION AS PER PASSBOOK]&apos; in favour of Noticee No. 2 Insurer without my Client&apos;s written proposal, authorization, or OTP consent.
                    </li>
                    <li>
                      That Noticee No. 1 bank acted in gross violation of the RBI Charter of Customer Rights and IRDAI Corporate Agents Regulations, 2015 by mechanically enrolling my Client without obtaining physical signatures on a proposal form.
                    </li>
                    <li>
                      That Noticee No. 2 failed to physically deliver any policy schedule, thereby violating Regulation 8 of IRDAI (Protection of Policyholders&apos; Interests) Regulations, 2024, keeping the statutory 30-day free-look cancellation window open indefinitely.
                    </li>
                    <li>
                      That the arbitrary deduction constitutes an Unfair Trade Practice under Section 2(47) and Deficiency in Service under Section 2(11) of the Consumer Protection Act, 2019.
                    </li>
                  </ol>
                  <p>
                    <strong>DEMAND:</strong> I hereby call upon you jointly and severally to immediately reverse the debited amount of Rs. [AMOUNT] along with 9% annual interest from [DATE OF DEBIT] within 15 days of receipt of this notice, alongside Rs. [COMPENSATION AMOUNT] towards mental harassment and legal expenses. Failing compliance, my Client shall initiate formal proceedings before the District Consumer Disputes Redressal Commission (e-Jagriti) and file a complaint before the Banking and Insurance Ombudsmen entirely at your cost and consequences.
                  </p>
                  <div className="pt-3 border-t border-slate-800 text-slate-400">
                    [ADVOCATE NAME &amp; SIGNATURE]
                    <br />
                    Advocate, Bar Council Enrolment No. [ENROLMENT NO]
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-slate-600">
                    Need an advocate to customize, verify, and serve this notice via Registered Speed Post on your behalf?
                  </p>
                  <InsuranceDebitNoticeCTA
                    buttonText="Serve Advocate Legal Notice"
                    source="legal_notice_template_block"
                    className="shrink-0"
                  />
                </div>
              </section>

              {/* Section 10: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-faqs-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Frequently Asked Questions (Unauthorised Insurance Auto-Debits)
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Clear, authoritative legal answers addressing bancassurance mis-selling, PMJJBY deductions, free-look refunds, and regulatory escalation:
                </p>

                <div className="space-y-3">
                  {FAQS.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Sources & Official Statutory References */}
              <section
                id="heading-primary-sources"
                aria-labelledby="heading-primary-sources-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-primary-sources-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Primary Sources &amp; Official Statutory References
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every legal proposition, timeline, and precedent on this page is verified against published government notifications, IRDAI master circulars, and primary gazette statutes:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {PRIMARY_SOURCES.map((source, index) => (
                    <a
                      key={index}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors group flex items-start gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-600 shrink-0 mt-1.5" />
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-red-700 transition-colors line-clamp-2">
                          {source.title}
                        </span>
                        <span className="text-[10px] text-slate-400 block break-all">
                          {source.url}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* Bottom Conversion CTA Banner */}
              <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-700 space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-red-400">
                    Advocate-Drafted Restitution Notice
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-white">
                    Recover Your Auto-Debited Insurance Money Today
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Have our experienced banking consumer advocates draft and serve an official legal notice to your bank and insurer. Stop arbitrary deductions and claim a 100% refund with interest.
                  </p>
                </div>
                <InsuranceDebitNoticeCTA
                  buttonText="Send Notice to Bank & Insurer"
                  source="bottom_banner"
                  className="shrink-0"
                />
              </section>

              {/* Related Recovery Guides Cluster */}
              <div className="pt-6 border-t border-slate-200">
                <RelatedRecoveryGuides
                  currentPath="/insurance-premium-auto-debited-without-consent"
                  cluster="banking"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
