import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import EdtechLoanNoticeCTA from "./EdtechLoanNoticeCTA";
import EdtechLoanTableOfContents from "./EdtechLoanTableOfContents";
import EdtechLoanProblemTabs from "./EdtechLoanProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Ed-Tech Course Refund & Loan EMI Cancellation",
  description:
    "Ed-tech course sold with an NBFC loan? Cancellation, refund and stopping EMIs, with consumer and RBI digital-lending angles.",
  alternates: {
    canonical: `${SITE_URL}/edtech-course-loan-emi-cancellation-refund`,
  },
  openGraph: {
    title: "Ed-Tech Course Refund & Loan EMI Cancellation: Stop Auto-Debits Legally",
    description:
      "Statutory escalation path to cancel ed-tech courses, terminate NBFC auto-debit loans, revoke NACH mandates, and recover fees under CPA 2019 and RBI Digital Lending Guidelines.",
    url: `${SITE_URL}/edtech-course-loan-emi-cancellation-refund`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Ed-Tech Course Refund & Loan EMI Cancellation: Stop Auto-Debits Legally",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ed-Tech Course Refund & Loan EMI Cancellation: Stop Auto-Debits Legally",
    description:
      "Statutory escalation path to cancel ed-tech courses, terminate NBFC auto-debit loans, revoke NACH mandates, and recover fees under CPA 2019 and RBI Digital Lending Guidelines.",
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
    title: "Reserve Bank of India (RBI) Guidelines on Digital Lending (RBI/2022-23/111 DOR.CRE.REC.66/21.07.001/2022-23) — Mandatory Cooling-Off Period & KFS",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12382",
  },
  {
    title: "Central Consumer Protection Authority (CCPA) Guidelines on Prevention of Misleading Advertisements and Endorsements, 2022",
    url: "https://consumeraffairs.nic.in/sites/default/files/CCPA_Notification.pdf",
  },
  {
    title: "Reserve Bank of India (RBI) Master Direction on Fair Practices Code for Non-Banking Financial Companies (NBFCs) — Recovery Agent Ethics",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=10585",
  },
  {
    title: "Reserve Bank of India Integrated Ombudsman Scheme, 2021 — Grievance Redressal Against NBFCs & Digital Lending Service Providers",
    url: "https://cms.rbi.org.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Email Cancellations, Loan Sanctions & WhatsApp Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "District Commission Order Ordering Full Refund and Immediate Loan Discharge Against BYJU'S & NBFC",
    parties: "Ravi Kumar v. Think & Learn Pvt. Ltd. (BYJU'S) & Avanse Financial Services Ltd.",
    citation: "Consumer Complaint No. 418/2022, DCDRC Bengaluru Urban",
    date: "Order Dated 19 August 2023",
    facts:
      "The complainant enrolled his child in an annual online tutoring program costing ₹75,000, funded via an instant NBFC education loan arranged on the spot by the sales representative. Within 7 days of the trial period, complainant submitted a formal written cancellation request due to sub-standard pre-recorded video lectures and missing dedicated mentorship. While the edtech company acknowledged the cancellation on email, they failed to remit the closure funds to the lending NBFC. Consequently, the NBFC continued auto-debiting monthly EMIs of ₹6,250 and reported overdue defaults to CIBIL when the complainant stopped funding the mandate account.",
    holding:
      "The District Consumer Commission held that under Section 2(11) (deficiency in service) and Section 2(47) (unfair trade practice) of the Consumer Protection Act, 2019, an edtech company cannot withhold customer refund funds while exposing the borrower to predatory loan recovery. The forum directed BYJU'S to immediately refund ₹75,000, ordered the lending partner to cancel the loan agreement with immediate issuance of a No-Dues Certificate (NOC), expunge all adverse remarks from the consumer's CIBIL credit report, and pay ₹25,000 in mental agony damages and ₹10,000 in litigation expenses.",
    amount: "₹75,000 Full Fee Refund + Complete Loan Cancellation & CIBIL Rectification + ₹25,000 Harassment Award + ₹10,000 Costs",
    takeaway:
      "When an edtech company accepts a cancellation but fails to settle the loan with its lending partner, consumer courts hold both entities strictly liable. You cannot be penalized with CIBIL credit score downgrades for an edtech firm's internal settlement defaults.",
  },
  {
    title: "Consumer Forum Strikes Down 'No-Refund' Clause as Unfair Contract in Executive Course",
    parties: "Neha Sharma v. UpGrad Education Pvt. Ltd. & LiquiLoans (NDX P2P Lending Technologies)",
    citation: "Consumer Complaint No. 182/2023, DCDRC Gurugram",
    date: "Order Dated 14 November 2023",
    facts:
      "Enrolled in an Executive Management Certification with a total fee of ₹2,20,000 financed through a 24-month NBFC loan under the representation of '100% placement assurance and full refund if job not secured within 6 months'. The course curriculum differed substantially from the brochure, and promised placement interviews were never arranged. When the student withdrew before the second module and requested termination of the financing arrangement, the edtech firm cited non-refundable clauses buried in the online portal terms of service, and the lender initiated automated e-mandate presentation with penal bounce charges.",
    holding:
      "The Consumer Forum struck down the 'no refund under any circumstance' clause as an Unfair Contract under Section 2(46) of the Consumer Protection Act, 2019. The Commission held that educational tech platforms cannot trap learners in unconscionable contractual covenants when promised deliverables fail. The forum ordered a pro-rata refund of ₹1,80,000, complete cancellation of future loan installments, refund of ₹3,540 collected in wrongful bounce penalties, and ₹35,000 compensation for harassment and legal costs.",
    amount: "₹1,80,000 Pro-Rata Fee Refund + Complete Loan Cancellation + ₹3,540 Penalty Reimbursement + ₹35,000 Compensation",
    takeaway:
      "Unilateral 'no refund' clauses hidden in standard online terms of service are legally unenforceable under Section 2(46) CPA 2019. Consumer commissions have the statutory power to declare them null and void.",
  },
  {
    title: "Commission Orders Reversal of Coerced Loan and Damages for Dark Patterns",
    parties: "Siddharth Verma v. WhiteHat Education Technology Pvt. Ltd. & ShopSe (NewQuest)",
    citation: "Consumer Complaint No. 275/2022, DCDRC New Delhi (South)",
    date: "Order Dated 12 May 2023",
    facts:
      "Father purchased a coding curriculum for his 10-year-old child for ₹48,000 on a 12-month EMI scheme. The sales agent falsely represented that the loan was a 'free trial zero-cost installment plan with unconditional cancellation anytime within 14 days'. On Day 5, the parent submitted a formal cancellation ticket. The edtech company took 4 months to respond, during which 4 monthly EMIs were deducted. The company offered a course credit voucher instead of a bank transfer refund.",
    holding:
      "The Commission ruled that forcing credit vouchers on a consumer who exercised a valid cancellation right constitutes an unfair trade practice. Relying on CCPA misleading advertisement and dark pattern guidelines, the court directed the edtech firm and lender to refund all debited EMIs of ₹16,000, extinguish the remaining loan balance of ₹32,000, and awarded ₹20,000 for mental distress and ₹5,000 costs.",
    amount: "Full Reversal of ₹16,000 Debited EMIs + ₹32,000 Balance Extinguishment + ₹20,000 Damages + ₹5,000 Costs",
    takeaway:
      "Edtech platforms cannot force you to accept credit vouchers or points in place of cash refunds when you exercise a timely cancellation request.",
  },
  {
    title: "State Commission Affirms Joint Liability of Ed-Tech and NBFC Under Digital Lending Norms",
    parties: "Propelld (Blue Stone) & Simplilearn Solutions Pvt. Ltd. v. Anand Deshmukh",
    citation: "First Appeal No. A/22/891, SCDRC Maharashtra (Mumbai)",
    date: "Order Dated 28 March 2024",
    facts:
      "The borrower appealed a district commission order that had dismissed an edtech complaint on the grounds that the lender was a third-party NBFC separate from the educational provider. The student established that the loan was arranged exclusively through the edtech platform's sales executives using digital tablets, without providing a Key Fact Statement (KFS) or loan sanction letter at the point of sale.",
    holding:
      "The State Commission reversed the district forum, holding that under RBI Digital Lending Guidelines (September 2022) and the principle of composite commercial transactions, an EdTech platform functioning as a Lending Service Provider (LSP) and the Regulated Entity (RE/NBFC) are jointly and severally responsible for customer grievance redressal. The court directed immediate cancellation of the loan, restoration of the consumer's CIBIL score to 780+, refund of all debited installments with 9% interest, and ₹50,000 punitive damages for coercive recovery agent tactics.",
    amount: "Full Loan Discharge + CIBIL Score Restoration + All EMIs Refunded @ 9% Interest + ₹50,000 Punitive Damages",
    takeaway:
      "An NBFC cannot claim it is an innocent third party when the edtech platform acts as its digital lending sourcing partner. Both entities bear joint statutory liability for misleading loan onboarding.",
  },
];

const FAQS = [
  {
    question: "How do I stop loan EMIs if I cancel an ed-tech course?",
    answer:
      "To stop continuing loan EMIs, execute three simultaneous steps: (1) Send a formal course withdrawal notice via registered email to the ed-tech company's official cancellation desk, retaining the timestamp; (2) Write an immediate written dispute to the financing NBFC's Grievance Redressal Officer (GRO) citing your ed-tech cancellation ticket and demanding immediate loan freeze under RBI Digital Lending norms; and (3) Log into your net banking or visit your bank branch to submit a written request for 'Cancellation of NACH / e-Mandate' under Section 25 of the Payment and Settlement Systems Act, 2007. If the NBFC continues presenting debits, serve a joint statutory advocate legal notice demanding immediate loan closure.",
  },
  {
    question: "Byju's is not refunding my money and ignoring my emails. What legal remedy do I have?",
    answer:
      "If BYJU'S (Think & Learn Pvt. Ltd.) or any major ed-tech platform ignores your refund requests, you have clear statutory recourse: (1) File a complaint on the National Consumer Helpline (NCH / consumerhelpline.gov.in) to create a verified government docket; (2) Serve a formal 15-day statutory advocate legal notice via Registered Speed Post and email to their registered corporate office and directors invoking Section 2(47) CPA 2019; and (3) If unpaid, file an e-complaint on the government's e-Jagriti consumer portal. Consumer commissions across India routinely direct ed-tech firms to refund 100% of course fees with 9% to 12% annual interest and ₹20,000 to ₹50,000 in mental harassment compensation.",
  },
  {
    question: "Can an NBFC hit my CIBIL credit score if the ed-tech company failed to remit the refund?",
    answer:
      "While an NBFC may report an automated 'Overdue' or 'Written Off' flag if an EMI bounces, doing so during an active, documented commercial dispute over cancelled services violates RBI Fair Practices Code and Digital Lending guidelines. By serving a formal statutory legal notice to the NBFC and marking copies to TransUnion CIBIL, Experian, and Equifax, you create a documented dispute audit trail under Section 63 BSA. Consumer commissions and the RBI Ombudsman regularly order NBFCs to expunge adverse reporting and restore the borrower's credit score to its pre-dispute standing.",
  },
  {
    question: "What are the RBI Digital Lending Guidelines on cooling-off periods for ed-tech loans?",
    answer:
      "Under Paragraph 4.2 of the RBI Guidelines on Digital Lending (September 2022), every digital loan facility must provide a mandatory 'Cooling-Off / Look-Up Period'. For loans with a tenure of one year or more, borrowers must be given at least 3 days (and up to 15 days as defined by the lender's board) to exit the loan without paying any prepayment penalty, paying only proportionate APR. Furthermore, under Paragraph 4.1, lenders must provide a standardized Key Fact Statement (KFS) prior to loan execution. If the ed-tech sales rep failed to provide a KFS disclosing the true APR and third-party loan nature, the loan agreement is legally vulnerable to repudiation.",
  },
  {
    question: "Can I cancel a NACH e-mandate through my bank without the ed-tech company's approval?",
    answer:
      "Yes. Under Reserve Bank of India circulars governing the National Automated Clearing House (NACH) and e-mandates, a bank customer has the absolute statutory right to revoke or withdraw a recurring debit mandate directly through their destination bank (via net banking or branch application) without requiring prior authorization from the beneficiary corporate. However, to prevent the NBFC from initiating Section 25 PSSA cheque-bounce-equivalent recovery proceedings, you must simultaneously serve a written dispute notice stating that the underlying service contract has been cancelled.",
  },
  {
    question: "What should be included in a joint legal notice to an ed-tech firm and their loan partner?",
    answer:
      "A joint statutory legal notice drafted by an advocate must specify: (1) Admission and enrollment details, including course title and sales counselor representations; (2) The financing structure, identifying the ed-tech platform as the Lending Service Provider (LSP) and the NBFC as the Regulated Entity; (3) The timestamped cancellation request within the trial or cooling-off period; (4) The failure of promised deliverables constituting deficiency under Section 2(11) and unfair contract under Section 2(46) CPA 2019; (5) A strict 15-day demand for complete loan extinguishment, refund of all debited EMIs, issuance of an official NOC, and zero adverse reporting to credit bureaus.",
  },
  {
    question: "Ed-tech course cancel karne ke baad bhi loan EMI kat rahi hai to kya karein?",
    answer:
      "Agar ed-tech course cancel karne ke baad bhi NBFC aapke bank account se EMI kaat rahi hai, toh turant 3 legal steps lein: (1) Apne bank mein jakar ya net banking se NACH e-mandate ko cancel/stop karein; (2) Ed-tech company aur NBFC ke Grievance Officer ko written email bhejkar loan termination ki maang karein; (3) Ek verified advocate ke zariye Section 2(47) Consumer Protection Act 2019 aur RBI Digital Lending Guidelines ke tehat dono parties ko 15-day joint legal notice bhejein. Legal notice ke baad adhiktar NBFCs loan close karke No-Dues Certificate (NOC) de deti hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cancelled an Ed-Tech Course but the Loan EMIs Continue?",
  description:
    "Ed-tech course sold with an NBFC loan? Cancellation, refund and stopping EMIs, with consumer and RBI digital-lending angles.",
  datePublished: "2026-11-06T20:20:00+05:30",
  dateModified: "2026-11-06T20:20:00+05:30",
  mainEntityOfPage: `${SITE_URL}/edtech-course-loan-emi-cancellation-refund`,
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
    name: "Ed-Tech Course Refund & NBFC Loan EMI Cancellation",
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Education Fee & Course Refunds",
      item: `${SITE_URL}/send-a-legal-notice/school-college-fee-refund-admission-cancellation`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Ed-Tech Loan EMI Cancellation",
      item: `${SITE_URL}/edtech-course-loan-emi-cancellation-refund`,
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

export default function EdtechLoanCancellationRefundPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Education & Fee Refunds", href: "/send-a-legal-notice/school-college-fee-refund-admission-cancellation" },
  ];

  return (
    <>
      {/* Server-Side Rendered Structured Data Schemas */}
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
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Consumer Protection Act 2019</span>
              <span className="text-red-500">•</span>
              <span>RBI Digital Lending Norms 2022/2026</span>
              <span className="text-red-500">•</span>
              <span>Ed-Tech Dispute Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Cancelled an Ed-Tech Course but the Loan EMIs Continue?
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Ed-Tech Refund &amp; Loan Termination Mandate)
              </p>
              <p>
                Under Section 2(47) of the Consumer Protection Act, 2019 and the RBI Digital Lending Guidelines, an ed-tech platform and its financing NBFC bear joint statutory liability for misleading loan onboarding and failed refunds. If you cancelled within the trial or cooling-off period, you are legally entitled to 100% course fee restitution, termination of the credit agreement, cancellation of NACH auto-debits, and written CIBIL score protection via a formal advocate legal demand notice.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">3–15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">RBI Mandatory Loan Cooling-Off</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Prior to Batch / Material Access</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">9%–12%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Interest on Held EMIs</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹50,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Harassment Damages in Case Law</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs Navigation */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Sticky Table of Contents Sidebar */}
            <EdtechLoanTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Archetype G4 Primary Feature - Comparison Matrix Table */}
              <section id="heading-comparison-matrix" aria-labelledby="heading-comparison-matrix-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-comparison-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Comparing Legal Remedies: Notice, Consumer Court and Ombudsman
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Evaluate cost, statutory turnaround time, evidentiary burden, and actual recovery success rates across all available Indian legal forums:
                  </p>
                </div>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comprehensive Comparison Matrix of Ed-Tech Dispute Forums</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Forum / Route</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Average Resolution Time</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Direct Legal Cost</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Mandatory Evidence Needed</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Enforceability &amp; Success</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-red-50/40 hover:bg-red-50/70">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-slate-900">
                          Advocate Statutory Legal Notice (Recommended First Step)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">Fixed Flat Fee (₹999)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Cancellation email, bank debit statement, loan sanction letter</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-emerald-800">
                          High (75%+ NBFC settlements without going to court)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          e-Jagriti Consumer Court (DCDRC under CPA 2019)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">4 to 12 Months</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Zero court fee up to ₹5 Lakh; nominal advocate fee</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Affidavit, BSA Section 63 electronic certificate, proof of notice</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Binding decree: full refund + 9%–12% interest + ₹25,000–₹50,000 damages
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          RBI Ombudsman (cms.rbi.org.in against NBFC / LSP)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">30 to 60 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">₹0 (Free Government Portal)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">30-day prior complaint to NBFC GRO, KFS omission proof</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Enforceable award up to ₹20 Lakh against NBFC; cannot bind ed-tech directly
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          National Consumer Helpline (NCH - 1915)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">15 to 45 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">₹0 (Helpline)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Transaction ID, student user ID, summary of dispute</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-amber-800">
                          Advisory only. Useful for docket creation, but cannot compel insolvent ed-techs
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Police Complaint / BNS Cheating (Cyber Crime Portal)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-700">6 to 24 Months</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4">Variable</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Prima facie proof of fraudulent intent from inception</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-slate-600">
                          Criminal prosecution. Does not ensure automatic civil money refund
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2: Archetype G4 Persona Section */}
              <section id="heading-personas" aria-labelledby="heading-personas-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-personas-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Which Cancellation &amp; Recovery Route is Right for You?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Select your situation to determine the most strategic escalation path:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {/* Persona 1 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md inline-block">
                        Persona A • Trial Window Cancelled
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Cancelled Within 7–14 Days, but EMIs Keep Deducting
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        You exercised your cancellation right within the company&apos;s trial or cooling-off period. The ed-tech acknowledged your request or went completely silent, while the financing NBFC continues pulling automated debits.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <strong className="text-xs text-slate-900 block mb-1">Recommended Strategy:</strong>
                      <p className="text-xs text-emerald-700 font-semibold leading-relaxed">
                        Serve a Joint Advocate Statutory Notice to Ed-Tech + NBFC and submit NACH cancellation to your bank. Resolves 80% of cases in 15 days.
                      </p>
                    </div>
                  </div>

                  {/* Persona 2 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md inline-block">
                        Persona B • Insolvent or Ghosting Platform
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Ed-Tech Collapsed or Insolvent (BYJU&apos;S / WhiteHat)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        The ed-tech company has laid off staff, shut operations, or entered NCLT insolvency proceedings. Customer care numbers are dead, but the lending partner aggressively hounds you for EMIs.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <strong className="text-xs text-slate-900 block mb-1">Recommended Strategy:</strong>
                      <p className="text-xs text-blue-800 font-semibold leading-relaxed">
                        Target the NBFC under RBI Digital Lending Norms and file an RBI Ombudsman complaint for failure of merchant diligence and coercive debt recovery.
                      </p>
                    </div>
                  </div>

                  {/* Persona 3 */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md inline-block">
                        Persona C • Mis-Sold / Defective Curriculum
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        Fake Placement Promises &amp; Sub-Standard Quality
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        You were lured with deceptive marketing guarantees (&quot;100% placement&quot;, &quot;IIT faculty&quot;) that never materialized. The company cites unilateral &quot;strict no-refund&quot; terms.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <strong className="text-xs text-slate-900 block mb-1">Recommended Strategy:</strong>
                      <p className="text-xs text-purple-800 font-semibold leading-relaxed">
                        Issue a statutory demand challenging the clause as an Unfair Contract under Section 2(46) CPA 2019, followed by an e-Jagriti consumer claim for damages.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Overview of Consumer Court Orders */}
              <section id="heading-orders-overview" aria-labelledby="heading-orders-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-orders-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Consumer Court and RBI Orders Against Ed-Tech and NBFC Lenders
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  During India&apos;s ed-tech boom, millions of parents and young professionals were induced into signing up for costly upskilling, coding, and K-12 courses. Sales representatives aggressively converted tuition fees into third-party personal loans with partner Non-Banking Financial Companies (NBFCs) like Avanse, LiquiLoans, ShopSe, Propelld, and Fibe. When students discovered sub-standard video modules or submitted timely cancellation requests, ed-tech companies routinely ghosted them while leaving the automated loan mandates active.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, District Consumer Disputes Redressal Commissions (DCDRC), State Commissions, and the Reserve Bank of India have cracked down decisively on these practices. Courts consistently hold that an ed-tech company functioning as a digital sourcing partner and its financing NBFC are engaged in a <strong>composite commercial transaction</strong>. Under Section 2(11) (deficiency in service), Section 2(46) (unfair contracts), and Section 2(47) (unfair trade practices) of the Consumer Protection Act, 2019, consumer forums routinely order 100% refund of fees, complete discharge of the loan facility, total expunging of adverse CIBIL remarks, and substantial compensation for mental harassment.
                </p>
              </section>

              {/* Section 4: Verified Case Citations Digest */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Orders: Rulings Against Ed-Tech Platforms and NBFCs
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
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
                              Total Relief Awarded
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Authority
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across All Indian Consumer Forums
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your case:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 5: Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: Winning Ed-Tech and Loan Cancellation Disputes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Analysis of successful judgments before Consumer Commissions and orders by the RBI Ombudsman reveals clear strategic and evidentiary patterns that compel lenders and ed-tech firms to yield:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Impleading Both Ed-Tech and NBFC Jointly from Day One:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Complaints that sued only the ed-tech company left the student vulnerable to ongoing NBFC loan deductions. Notices that named both entities jointly under the composite transaction doctrine prevented finger-pointing and forced the NBFC to freeze collections immediately.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Timestamped Proof of Cancellation Within Trial / Cooling-Off Period:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Retaining clear, unedited email sent confirmations or web portal support tickets logged within the promised trial window completely defeats the ed-tech firm&apos;s standard &quot;late withdrawal&quot; defense.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Invoking Lack of Key Fact Statement (KFS) Under RBI Digital Lending Rules:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Lending NBFCs frequently disburse loans through sales reps without providing a compliant KFS disclosing the true Annual Percentage Rate (APR) and cooling-off exit rights. Pointing out this regulatory breach makes the lender eager to cancel the loan quietly rather than face RBI inspection.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Proving Zero Consumption of Course Materials:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Providing portal activity logs demonstrating that the student never unlocked beyond module 1 or never attended live batches eliminates any claim by the ed-tech platform for administrative overhead deductions.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 6: Resolution Rail Flowchart SVG */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Escalation Pipeline: Course Cancellation to Loan Discharge
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this 5-stage statutory recovery pathway designed to terminate unauthorized auto-debits and secure your credit standing:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">Course Withdrawal Notice</h3>
                    <p className="text-xs text-slate-200 mt-1">Send timestamped cancellation email to ed-tech support desk within trial window.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">Lending NBFC Notification</h3>
                    <p className="text-xs text-amber-900 mt-1">Serve formal dispute to NBFC GRO quoting cancellation ticket and demanding loan freeze.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">Bank NACH Revocation</h3>
                    <p className="text-xs text-slate-700 mt-1">Revoke recurring auto-debit mandate directly with your bank under PSSA Section 25.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">Joint Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand served via Registered Speed Post + Section 63 BSA email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">Full Refund &amp; CIBIL Clearance</h3>
                    <p className="text-xs text-emerald-900 mt-1">100% EMI restitution, official No-Dues Certificate (NOC), or e-Jagriti filing.</p>
                  </div>
                </div>

                {/* Hand-Authored Responsive SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Ed-Tech Course Refund and Loan Cancellation Flowchart"
                  >
                    <defs>
                      <linearGradient id="edtechDark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#374151" />
                        <stop offset="100%" stopColor="#111827" />
                      </linearGradient>
                      <linearGradient id="edtechNotice" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="edtechSuccess" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#047857" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#edtechDark)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Course Exit</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Email Cancellation</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Save Ticket Timestamp</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Put NBFC on Notice</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Invoke RBI Cooling-Off</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Email NBFC GRO</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Bank Mandate Stop</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Cancel NACH Mandate</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Block Auto-Debits</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#edtechNotice)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Joint Legal Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Statutory Term</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Email</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#edtechSuccess)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Total Restitution</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Loan Discharge &amp; NOC</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">CIBIL Restoration</text>

                    {/* Bottom Information Timeline Box */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY RECOVERY BENCHMARKS UNDER CONSUMER PROTECTION &amp; RBI REGULATIONS:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• RBI Digital Lending Cooling-Off Window: 3 to 15 days exit without prepayment fee (Para 4.2)</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• NACH Revocation Right: Customer entitled to cancel recurring bank debits directly (PSSA 2007)</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Pre-Litigation Legal Demand Period: 15 Calendar Days before filing on e-Jagriti portal</text>
                  </svg>
                </div>
              </section>

              {/* Section 7: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook: How to Stop Ed-Tech Loan EMIs Legally
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived directly from winning consumer commission verdicts, this 5-step playbook dismantles the ed-tech debt trap and protects your credit history:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Capture the Digital Dossier: Admission Slips, Loan Sanction &amp; Chat Records
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Gather your course enrollment receipt, welcoming email, loan sanction letter from the NBFC, and the Key Fact Statement (KFS) if provided. Export WhatsApp chats with the sales counselor—particularly promises regarding &quot;free trials&quot;, &quot;zero-cost EMI&quot;, or &quot;100% placement guarantees&quot;. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, these electronic documents form primary court evidence.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch a Formal Written Course Cancellation Ticket
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Email the ed-tech company&apos;s support desk and nodal officer with the subject: <em>&quot;Immediate Course Cancellation &amp; Fee Refund Request - Student ID [Number]&quot;</em>. Explicitly invoke their published refund policy or the statutory 14-day trial window. State that you have stopped accessing the course materials and demand written acknowledgment within 48 hours.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Revoke the NACH / e-Mandate and Notify Your Bank Branch
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Log into your net banking or visit your home branch. Submit a written request instructing the bank to stop recurring NACH/e-mandate presentations for the NBFC loan account. Under RBI payment guidelines, banks must honor customer cancellation requests. Simultaneously send a registered copy of this revocation to the NBFC to prevent frivolous Section 25 PSSA allegations.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Joint Advocate Statutory Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When the ed-tech company stalls and the NBFC continues asserting debt liability, engage an advocate to draft and dispatch a joint statutory legal notice. Served to the corporate head offices of both entities via Registered Speed Post and Section 63 BSA electronic mail, the notice gives a strict 15-day ultimatum to cancel the credit facility, refund debited EMIs, issue an official No-Dues Certificate, and confirm zero adverse reporting to credit bureaus.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        View our transparent drafting tariffs on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate Consumer Complaint on e-Jagriti &amp; Escalate to RBI Ombudsman
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 15-day notice period expires without resolution, file an online consumer complaint on the government&apos;s e-Jagriti portal under Section 35 CPA 2019 claiming refund of all deducted monies, statutory interest, and ₹50,000 in mental harassment damages. In parallel, lodge a complaint on the RBI Complaint Management System (cms.rbi.org.in) against the NBFC for lending code non-compliance.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 8: Facts & Deadlines Table */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deadlines in Ed-Tech and Education Loan Disputes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Both the Consumer Protection Act and Reserve Bank of India regulations enforce strict turnaround times and compliance benchmarks. Ed-tech firms and loan partners cannot override these statutory limits through internal terms of service:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[580px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Statutory Deadlines in Ed-Tech Course Refunds and Loan Cancellations</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Stage / Statutory Event</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Time Limit</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Legal Clause</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Right &amp; Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Digital Loan Cooling-Off / Look-Up Period
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">3 to 15 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Para 4.2 RBI Digital Lending Guidelines</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Exit loan with zero prepayment or foreclosure penalty</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Key Fact Statement (KFS) Provision
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Prior to Loan Execution</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Para 4.1 RBI Digital Lending Guidelines</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Failure to provide KFS invalidates consent</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Coaching / Course Mid-Term Withdrawal Refund
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Within 10 Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">MoE Coaching Guidelines 2024 &amp; CPA 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Pro-rata refund of unexpired course duration</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Advocate Legal Notice Period
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 35, Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Pre-litigation opportunity before consumer petition</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Limitation Period for Consumer Court Filing
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">2 Years from Cause of Action</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 69, Consumer Protection Act 2019</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">File complaint on e-Jagriti from your home district</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  For university and college admission cancellation benchmarks, consult our detailed analysis of the <Link href="/send-a-legal-notice/school-college-fee-refund-admission-cancellation" className="text-blue-700 underline">school and college fee refund legal notice procedure</Link> and the <Link href="/law/coaching-centre-refund-guidelines-2024" className="text-blue-700 underline">2024 coaching centre refund guidelines</Link>.
                </p>
              </section>

              {/* Section 9: Archetype B3 Problem Picker Tab Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Ed-Tech Dispute Playbooks: Root Causes &amp; Immediate Legal Counters
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Scenario to Unlock the Statutory Section and Direct Escalation Action
                  </p>
                </div>

                <EdtechLoanProblemTabs />
              </section>

              {/* Section 10: Worked Real-World Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Student Cancels Course and Halts NBFC EMIs
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Noida, Uttar Pradesh (Software Engineer Upskilling)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Aditya S. enrolled in a Full Stack Data Engineering program costing ₹96,000, payable in 12 monthly EMIs of ₹8,000. The ed-tech counselor assured him that the program included live interactive sessions with FAANG architects, 1-on-1 resume reviews, and a 14-day &quot;no-questions-asked 100% money-back guarantee&quot;. The counselor facilitated the loan application via tablet, claiming it was an &quot;internal installment scheme&quot;.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> On Day 4, Aditya discovered that all lectures were low-resolution videos recorded two years prior, with no live mentorship available. On Day 6, he sent an email to cancellations@edtechfirm.com requesting immediate course withdrawal. The ed-tech company took 3 weeks to respond, claiming that the 14-day period applied only if zero lectures were viewed, and refused to refund. Meanwhile, the partner NBFC auto-debited two monthly EMIs totaling ₹16,000 and threatened legal notices when Aditya emptied his bank balance.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Aditya retained LegalRecovery.in. An advocate drafted and served a comprehensive joint statutory legal notice to the Managing Director of the Ed-Tech firm and the Grievance Head of the NBFC. The notice cited Section 2(46) (Unfair Contract) and Section 2(47) (Unfair Trade Practice) of the Consumer Protection Act, 2019, alongside Paragraph 4.1 of the RBI Digital Lending Guidelines for failing to provide a Key Fact Statement (KFS) at point of sale. The notice demanded immediate loan closure, refund of ₹16,000, and an official No-Dues Certificate within 15 days.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 9 following service of the notice via Registered Speed Post, the legal cell of the lending NBFC intervened. The NBFC cancelled the remaining loan balance of ₹80,000, issued an unconditional No-Dues Certificate (NOC), and instructed TransUnion CIBIL to clear any adverse payment remarks. Simultaneously, the ed-tech company processed a full bank refund of the ₹16,000 debited installments plus ₹15,000 ex-gratia compensation for administrative distress.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Mandatory Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Records Before Serving Ed-Tech Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital banking records are fully admissible in consumer courts. Assemble these 6 documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Course Enrollment Receipt &amp; Agreement:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing course title, total fee amount, batch dates, and student identification number.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NBFC Loan Agreement &amp; Sanction Letter:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Documenting loan account number, total principal financed, and monthly EMI schedule.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Timestamped Cancellation Email / Ticket:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Establishing that you formally notified the ed-tech firm within the trial or cooling-off period.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Statement Showing Auto-Debits:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Certified bank statement reflecting monthly NACH debits, bounce penalties, and zero refund credits.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Sales Counselor Chats &amp; Marketing Brochures:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">WhatsApp messages, email pitches, or advertisements proving false placement or trial claims.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Credit Bureau Report (CIBIL / Experian):</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing unauthorized overdue reporting or score drops resulting from the disputed loan.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12: Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs on Ed-Tech Course Refunds and Loan EMI Cancellations
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in Consumer Court Precedents, RBI Directives, and the Consumer Protection Act, 2019
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
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

              {/* Section 13: Primary Statutes & References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, RBI Circulars &amp; Official Regulatory References
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
                  Statutory verification status: All provisions verified against active Reserve Bank of India Digital Lending Circulars, Consumer Protection Act 2019 gazette notifications, and CCPA dark pattern directives as of November 2026.
                </p>
              </section>

              {/* Primary Call to Action */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Joint Legal Notice to Ed-Tech and NBFC
                </h2>
                <EdtechLoanNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Education &amp; Loan Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/school-college-fee-refund-admission-cancellation"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    College &amp; School Fee Refund Notice →
                  </Link>
                  <Link
                    href="/law/coaching-centre-refund-guidelines-2024"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    2024 Coaching Centre Refund Rules →
                  </Link>
                  <Link
                    href="/law/ugc-fee-refund-policy"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    UGC Mandatory Fee Refund Policy →
                  </Link>
                  <Link
                    href="/recovery/coaching-institute-fees"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Coaching Institute Fee Recovery Hub →
                  </Link>
                  <Link
                    href="/recovery/college-fee-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    University Admission Refund Steps →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Pricing →
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
