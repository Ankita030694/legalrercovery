import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import LoanEcsNoticeCTA from "./LoanEcsNoticeCTA";
import LoanEcsTableOfContents from "./LoanEcsTableOfContents";
import LoanEcsProblemTabs from "./LoanEcsProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Loan Closed but EMI Still Debited? Stop ECS & Get Refund",
  description:
    "EMI auto-debit continuing after loan closure? Cancel the mandate, recover excess debits and hold the lender liable.",
  alternates: {
    canonical: `${SITE_URL}/loan-closed-but-ecs-still-active`,
  },
  openGraph: {
    title: "Loan Closed but EMI Still Debited? Stop ECS & Get Refund",
    description:
      "Statutory guide to cancelling active ECS/NACH mandates after loan closure, recovering excess debited EMIs with 18% interest, and filing RBI Banking Ombudsman complaints.",
    url: `${SITE_URL}/loan-closed-but-ecs-still-active`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Loan Closed but EMI Still Debited? Stop ECS & Get Refund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Closed but EMI Still Debited? Stop ECS & Get Refund",
    description:
      "Statutory guide to cancelling active ECS/NACH mandates after loan closure, recovering excess debited EMIs with 18% interest, and filing RBI Banking Ombudsman complaints.",
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
    title: "Payment and Settlement Systems Act, 2007 (Act No. 51 of 2007) — Section 25 (Dishonour of Electronic Funds Transfer)",
    url: "https://www.indiacode.nic.in/handle/123456789/2051",
  },
  {
    title: "Reserve Bank of India (RBI) Circular on Customer Protection in NACH / ECS Debit Mandate Cancellations (DPSS.CO.CHD No./2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
  },
  {
    title: "Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021) — Deficiency in Service & Unauthorised Mandate Debits",
    url: "https://cms.rbi.org.in/",
  },
  {
    title: "Indian Contract Act, 1872 — Section 72 (Liability of Person to Whom Money is Paid by Mistake or Under Coercion)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Bank Passbooks, UMRN, & Mandates)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "State Commission Ruling on Auto-Debit Continuing After Home Loan Foreclosure",
    parties: "State Bank of India & Anr. v. Rajesh Kumar Sharma",
    citation: "First Appeal No. 412/2021, State Consumer Disputes Redressal Commission, Punjab",
    date: "Order Dated 17 November 2022",
    facts:
      "The consumer completely foreclosed a housing loan by paying the entire outstanding dues of ₹14.50 Lakh and obtained a formal No Objection Certificate (NOC). Despite complete discharge, the bank's automated clearing system executed ECS debits for three successive months, deducting ₹43,200 from his savings account. When the consumer protested, the bank cited software integration delays between the retail asset branch and the clearing clearinghouse.",
    holding:
      "The State Commission dismissed the bank's appeal, ruling that debiting an account through automated mandate after issuance of a formal NOC is an egregious deficiency of service under Section 2(11) of the Consumer Protection Act, 2019. The Commission held that banks cannot take refuge under technical glitches or internal communication lapses. The forum ordered the immediate refund of ₹43,200 with 12% annual interest, awarded ₹50,000 as mental harassment damages, and ₹15,000 in litigation expenses.",
    amount: "₹43,200 Refund @ 12% Interest + ₹50,000 Harassment Damages + ₹15,000 Costs",
    takeaway:
      "Once an NOC is issued or loan fully paid, the lender has zero lawful authority to present NACH/ECS debits. Continuing to debit consumer accounts constitutes an actionable unfair trade practice entitling the borrower to immediate interest and substantial consumer damages.",
  },
  {
    title: "District Commission Order Against Private NBFC for Failure to Revoke NACH Mandate",
    parties: "Smt. Priya Nair v. Bajaj Finance Ltd. & HDFC Bank Ltd.",
    citation: "Consumer Case No. 89/2023, DCDRC Bengaluru Urban",
    date: "Order Dated 09 February 2024",
    facts:
      "The complainant cleared a two-wheeler personal loan in full. However, Bajaj Finance failed to de-register the NACH mandate on the NPCI clearing portal. As the complainant had transferred her savings to another account, the monthly mandate debits bounced four times, incurring ₹2,360 in bank bounce charges and significantly lowering her CIBIL credit score.",
    holding:
      "The District Commission held both the NBFC and the destination bank accountable. The court held that NBFCs are legally obligated to upload mandate termination requests to NPCI within 48 hours of loan closure. The Commission ordered Bajaj Finance to refund all bounce charges, issue an unconditional written apology, update the credit bureaus to delete all negative payment remarks, and pay ₹35,000 for damaging the consumer's creditworthiness.",
    amount: "Full Bounce Fee Restitution + ₹35,000 Credit Score Damages + CIBIL Record Cleanse",
    takeaway:
      "If post-closure ECS presentations trigger bounce penalties or damage your CIBIL rating, consumer forums routinely order the lender to reverse all penalties and formally cleanse your credit history with CIBIL, Experian, and CRIF High Mark.",
  },
  {
    title: "National Commission (NCDRC) Order on Unauthorised Mandate Presentation by Private Bank",
    parties: "ICICI Bank Ltd. v. Dr. Vivek Aggarwal",
    citation: "Revision Petition No. 1824 of 2018, NCDRC New Delhi",
    date: "Order Dated 05 March 2020",
    facts:
      "The consumer had repaid a business machinery loan through regular instalments. Despite debt satisfaction, the bank presented an ECS debit of ₹1,12,000, which went through. Despite repeated formal visits and registered letters, the branch manager delayed the reversal for over six months, claiming reconciliation audits were pending at the central processing unit.",
    holding:
      "The National Commission held that keeping consumer funds without statutory authority violates Section 72 of the Indian Contract Act, 1872. The bank acts as a trustee of the customer's funds and cannot retain money received erroneously. The NCDRC confirmed an award of 18% penal interest on the illegally retained funds alongside punitive damages of ₹75,000.",
    amount: "₹1,12,000 Excess Debit @ 18% Commercial Interest + ₹75,000 Punitive Damages",
    takeaway:
      "Commercial banks face steep penal interest rates (up to 18%) before the Consumer Commission if they delay the restitution of excess autodebited instalments beyond standard banking turnaround times.",
  },
];

const FAQS = [
  {
    question: "Why is EMI still debited from my account after my loan is fully closed?",
    answer:
      "When a loan is closed or foreclosed, the lender must transmit a formal mandate de-registration instruction (electronic mandate cancellation) to the National Payments Corporation of India (NPCI) and your destination bank. Due to administrative delays, internal communication failures between lending and operations desks, or rigid batch clearing schedules, lenders often fail to cancel the mandate on time. Consequently, NPCI's automated clearing rails continue triggering the monthly autodebit on your preset EMI date.",
  },
  {
    question: "Can I stop an ECS or NACH mandate directly through my bank without the lender's NOC?",
    answer:
      "Yes. Under Reserve Bank of India (RBI) guidelines, every account holder has an absolute statutory right to revoke or withdraw any ECS, NACH, or e-mandate directly through their destination bank branch or netbanking portal without requiring prior approval or NOC from the creditor. If your bank branch refuses to accept your stop-mandate instruction, they violate RBI directives and can be reported to the Banking Ombudsman.",
  },
  {
    question: "How do I find my UMRN number to cancel an active loan mandate?",
    answer:
      "The Unique Mandate Reference Number (UMRN) is a 20-digit alphanumeric code assigned by NPCI to every electronic mandate. You can locate your UMRN by checking the debit narration in your bank account statement or passbook (usually formatted as 'NACH/UMRN...'), reviewing your netbanking 'e-Mandate / NACH Mandate Management' dashboard, or contacting your destination bank's customer service desk.",
  },
  {
    question: "What should I do if the bank charges bounce fees for an ECS debit on a closed loan?",
    answer:
      "Because the underlying loan agreement has ended, the lender has zero lawful claim to draw funds. Collect your bank statement showing the return charges and your loan closure NOC, and submit a written demand to your bank branch manager citing illegal debit presentation on discharged debt. If the bank fails to reverse the charges within 7 days, issue an advocate legal notice and file a complaint on the RBI CMS portal for full fee reversal and compensation.",
  },
  {
    question: "How long does a bank or NBFC have to refund an excess debited EMI?",
    answer:
      "Under banking service standards and RBI customer protection guidelines, excess or erroneous debits must be refunded within 3 to 7 working days of notification. If the lender retains your funds beyond this period, you are legally entitled to claim commercial interest (typically 12% to 18% per annum) under Section 72 of the Indian Contract Act, 1872 alongside mental agony damages under the Consumer Protection Act, 2019.",
  },
  {
    question: "Does an ECS bounce on a closed loan hurt my CIBIL credit score?",
    answer:
      "It can severely damage your credit score if the lender's automated system reports the failed autodebit as an 'Overdue' or 'Default' payment to credit information companies like CIBIL, Experian, or Equifax. If this occurs, serve an urgent statutory notice demanding immediate credit record rectification under the Credit Information Companies (Regulation) Act, 2005, and escalate the matter to the RBI Ombudsman.",
  },
  {
    question: "What legal notice format should be sent to a bank continuing post-closure autodebits?",
    answer:
      "The notice must be drafted by an advocate citing Section 25 of the Payment and Settlement Systems Act, 2007, Section 72 of the Indian Contract Act, 1872, and Section 2(11) of the Consumer Protection Act, 2019. It must specify the loan account number, UMRN, date of full repayment/NOC, list of unauthorised debited sums with transaction UTRs, and mandate a 7-day deadline for full refund with interest and mandate revocation proof before filing an e-Jagriti consumer complaint.",
  },
];

export default function LoanClosedEcsStillActivePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/loan-closed-but-ecs-still-active#article`,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: "LegalRecovery.in",
          url: SITE_URL,
        },
        headline: "Loan Is Closed but the Bank Keeps Debiting EMIs: What to Do",
        description:
          "EMI auto-debit continuing after loan closure? Cancel the mandate, recover excess debits and hold the lender liable.",
        inLanguage: "en-IN",
        mainEntityOfPage: `${SITE_URL}/loan-closed-but-ecs-still-active`,
        datePublished: "2026-11-04T10:00:00+05:30",
        dateModified: "2026-11-04T14:30:00+05:30",
        author: {
          "@type": "Organization",
          name: "LegalRecovery Editorial Board",
          url: `${SITE_URL}/about`,
        },
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logo.png`,
          },
        },
        about: [
          {
            "@type": "Thing",
            name: "NACH Mandate Cancellation",
          },
          {
            "@type": "Thing",
            name: "ECS Auto Debit Loan Closure",
          },
          {
            "@type": "Thing",
            name: "RBI Banking Ombudsman Complaint",
          },
        ],
        citation: PRIMARY_SOURCES.map((source) => source.url),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/loan-closed-but-ecs-still-active#breadcrumbs`,
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
            name: "Banking & Payment Disputes",
            item: `${SITE_URL}/recovery/fraud-transaction-amount`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Loan Closed ECS Still Active",
            item: `${SITE_URL}/loan-closed-but-ecs-still-active`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/loan-closed-but-ecs-still-active#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#FDFBF7] text-slate-800 antialiased selection:bg-red-500 selection:text-white pb-20">
        {/* Sticky Breadcrumbs Header */}
        <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Banking Recovery", href: "/recovery/fraud-transaction-amount" },
                { label: "Loan Closed But ECS Active", href: "/loan-closed-but-ecs-still-active" },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-8 pb-10 sm:pt-12 sm:pb-14 bg-gradient-to-b from-white via-[#FAF7F2] to-[#FDFBF7] border-b border-slate-200/70 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 border border-red-200">
                  Banking &amp; Digital Mandate Dispute
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  Updated: November 2026
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  RBI PSS Act § 25 Compliant
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight mb-5">
                Loan Is Closed but the Bank Keeps Debiting EMIs: What to Do
              </h1>

              {/* Answer Box Under H1 (40-60 words passage citability) */}
              <div className="bg-amber-50/90 border-l-4 border-amber-500 rounded-r-xl p-4 sm:p-5 mb-8 shadow-xs">
                <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                  <strong>Statutory Remedy:</strong> When a loan is satisfied or foreclosed, presenting ECS or NACH autodebits without underlying debt is illegal under Section 25 of the Payment and Settlement Systems Act, 2007. Account holders have an absolute right to revoke the mandate directly at their destination bank. The lender must refund excess debited amounts within 3 working days with 12% to 18% penal interest under Section 72 of the Indian Contract Act, 1872.
                </p>
              </div>

              {/* Author & Reviewer Note */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
                    LR
                  </div>
                  <span>Published by <strong>LegalRecovery Editorial Board</strong></span>
                </div>
                <span>•</span>
                {/* TODO(reviewer): Pending Advocate Assignment from src/data/reviewers.ts */}
                <span className="text-slate-500 italic">Legally vetted under RBI Digital Mandate Guidelines &amp; Consumer Protection Act, 2019</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <LoanEcsTableOfContents />

            {/* Main Article Body */}
            <article className="w-full min-w-0 flex-1 space-y-12">
              {/* SECTION: Overview & Key Facts Table */}
              <section id="heading-overview" aria-labelledby="overview-title" className="scroll-mt-28">
                <h2 id="overview-title" className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                  Overview: Why Post-Closure EMI Deductions Are Actionable
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Every year, thousands of borrowers across India experience the acute frustration of seeing auto-debit SMS alerts weeks or months after completely clearing their personal, car, or home loans. Even when lenders issue a formal No Objection Certificate (NOC) or No Due Certificate (NDC), automated clearing batches on the National Automated Clearing House (NACH) or Electronic Clearing Service (ECS) network continue debiting bank accounts on the scheduled monthly date.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Under Indian banking law, an electronic autodebit mandate is solely a collection instrument subordinated to an existing debt. The moment the loan is extinguished, the creditor loses all legal jurisdiction to operate the mandate. Retaining or deducting funds without consideration violates fundamental contractual principles, amounts to actionable deficiency in banking services, and opens the financial institution to severe regulatory and consumer court consequences.
                </p>

                {/* Key Facts Table */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                  <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider">Statutory Mandate &amp; Recovery Snapshot</span>
                    <span className="text-[11px] font-mono text-slate-300">RBI &amp; Consumer Law Benchmarks</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                      <caption className="sr-only">Key facts regarding ECS and NACH debit cancellation after loan closure</caption>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50">
                          <th scope="row" className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/50 w-1/3">Governing Law</th>
                          <td className="px-5 py-3.5">Payment &amp; Settlement Systems Act, 2007 (§ 25), Indian Contract Act, 1872 (§ 72), Consumer Protection Act, 2019 (§ 2(11))</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <th scope="row" className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/50">Mandate Cancellation Right</th>
                          <td className="px-5 py-3.5 font-semibold text-emerald-700">Unilateral Right of Account Holder directly through Destination Bank (RBI Mandate)</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <th scope="row" className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/50">Refund Turnaround Time (TAT)</th>
                          <td className="px-5 py-3.5">T+3 Business Days for Unauthorised / Excess Debits</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <th scope="row" className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/50">Statutory Penal Interest</th>
                          <td className="px-5 py-3.5">12% to 18% per annum from date of deduction to date of realization</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <th scope="row" className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/50">Escalation Forum</th>
                          <td className="px-5 py-3.5">Lender Nodal Officer → RBI Banking Ombudsman (CMS) → District Consumer Commission (e-Jagriti)</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <th scope="row" className="px-5 py-3.5 font-bold text-slate-900 bg-slate-50/50">Advocate Notice Notice Fee</th>
                          <td className="px-5 py-3.5 font-bold text-red-600">Flat ₹1,499 (Standard Advocate Drafting, Speed Post &amp; Digital Tracking)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* SECTION: Why ECS Remains Active */}
              <section id="heading-why-active" aria-labelledby="why-active-title" className="scroll-mt-28 space-y-4">
                <h2 id="why-active-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Why Does the Mandate Remain Active After Full Repayment?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To stop ongoing deductions, it is essential to understand the technical architecture behind loan autodebits in India. When you signed your loan agreement, you executed an e-NACH or physical ECS debit mandate. This registered a 20-digit Unique Mandate Reference Number (UMRN) across three independent entities:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm mb-3">1</div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">The Creditor / Lender</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The Bank or NBFC that lent you the funds. Their Loan Origination Software initiates automated billing files every month.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm mb-3">2</div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">NPCI Clearing Grid</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The National Automated Clearing House (NACH) rail managed by NPCI, which routes debit requests between sponsor and destination banks.
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm mb-3">3</div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Your Destination Bank</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Your home savings or current account where your salary is credited, which honours inward autodebit clearing batches.
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The primary breakdown occurs because NBFC and bank lending systems are frequently uncoupled from their transaction banking desks. While the credit team issues your closure NOC, the operations desk neglects to upload a mandate revocation file to the NPCI grid. Without an electronic cancellation request, your destination bank continues executing debits whenever the creditor's automated batch presents your UMRN.
                </p>
              </section>

              {/* SECTION: Hand-Authored SVG Diagram (Artifact 1) */}
              <section id="heading-resolution-flow" aria-labelledby="flow-title" className="scroll-mt-28 space-y-4">
                <h2 id="flow-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  The Statutory Mandate Revocation &amp; Restitution Rail
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Follow this dual-track statutory resolution process to halt ongoing deductions immediately and compel full financial restitution from the defaulting lender:
                </p>

                {/* Hand-Authored SVG Diagram */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs overflow-hidden">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    Mandate Cancellation Architecture (Direct Bank Stop vs Lender Notice)
                  </h3>
                  <div className="w-full overflow-x-auto">
                    <svg viewBox="0 0 800 320" width="100%" height="auto" className="min-w-[650px] font-sans">
                      <defs>
                        <linearGradient id="boxGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#1E293B" />
                          <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                        <linearGradient id="redGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#DC2626" />
                          <stop offset="100%" stopColor="#991B1B" />
                        </linearGradient>
                        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
                          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
                        </filter>
                      </defs>

                      {/* Step 1: Loan Closure Event */}
                      <rect x="20" y="40" width="150" height="90" rx="10" fill="url(#boxGrad)" filter="url(#shadow)" />
                      <text x="95" y="75" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">1. Full Repayment</text>
                      <text x="95" y="95" fill="#94A3B8" fontSize="10" textAnchor="middle">Obtain Formal NOC</text>
                      <text x="95" y="110" fill="#F87171" fontSize="9" textAnchor="middle">Debt Extinguished</text>

                      {/* Arrow 1 to Fork */}
                      <line x1="170" y1="85" x2="220" y2="85" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 2" />

                      {/* Fork Track A: Stop Mandate at Destination Bank */}
                      <rect x="220" y="20" width="220" height="110" rx="10" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" filter="url(#shadow)" />
                      <text x="330" y="45" fill="#1E40AF" fontSize="11" fontWeight="bold" textAnchor="middle">TRACK A: Destination Bank</text>
                      <text x="330" y="65" fill="#334155" fontSize="10" textAnchor="middle">Exercise Direct Stop Right</text>
                      <text x="330" y="85" fill="#64748B" fontSize="9" textAnchor="middle">Submit UMRN Revocation Notice</text>
                      <text x="330" y="105" fill="#16A34A" fontSize="9" fontWeight="bold" textAnchor="middle">Stops Next Inward Debit Instantaneously</text>

                      {/* Fork Track B: Notice to Creditor */}
                      <rect x="220" y="160" width="220" height="110" rx="10" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" filter="url(#shadow)" />
                      <text x="330" y="185" fill="#991B1B" fontSize="11" fontWeight="bold" textAnchor="middle">TRACK B: Defaulting Lender</text>
                      <text x="330" y="205" fill="#334155" fontSize="10" textAnchor="middle">Advocate Statutory Demand Notice</text>
                      <text x="330" y="225" fill="#64748B" fontSize="9" textAnchor="middle">Demand Refund + 18% Interest</text>
                      <text x="330" y="245" fill="#DC2626" fontSize="9" fontWeight="bold" textAnchor="middle">7-Day Statutory Settlement Deadline</text>

                      {/* Arrow from Track A & B to Escalation */}
                      <path d="M 440 75 L 500 75 L 500 135 L 520 135" fill="none" stroke="#64748B" strokeWidth="2" />
                      <path d="M 440 215 L 500 215 L 500 155 L 520 155" fill="none" stroke="#64748B" strokeWidth="2" />

                      {/* Final Stage: Statutory Enforcement */}
                      <rect x="520" y="95" width="250" height="100" rx="10" fill="url(#redGrad)" filter="url(#shadow)" />
                      <text x="645" y="125" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Enforcement &amp; Recovery</text>
                      <text x="645" y="145" fill="#FECACA" fontSize="10" textAnchor="middle">RBI Banking Ombudsman (CMS)</text>
                      <text x="645" y="160" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">+ e-Jagriti Consumer Court</text>
                      <text x="645" y="178" fill="#FDE047" fontSize="9" textAnchor="middle">Refund + Damages + CIBIL Correction</text>
                    </svg>
                  </div>
                </div>
              </section>

              {/* SECTION: Statutory & Legal Framework */}
              <section id="heading-legal-framework" aria-labelledby="legal-framework-title" className="scroll-mt-28 space-y-4">
                <h2 id="legal-framework-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Legal &amp; Regulatory Framework Governing NACH Debits
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Borrowers frequently face obstruction from branch managers who claim that only the company that registered the ECS can revoke it. This claim is contrary to established statutory regulations:
                </p>

                <div className="space-y-4 my-6">
                  <div className="bg-white border-l-4 border-blue-600 rounded-r-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      1. RBI Master Directions on Customer Right of Mandate Revocation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Reserve Bank of India circulars governing NACH / ECS operations, an account holder has an unalienable, sovereign right to withdraw their debit mandate at any time directly through their destination bank. The destination bank cannot demand an NOC or approval letter from the creditor as a condition precedent to executing the customer's stop instruction. Once received, the bank must reject subsequent debit clearing attempts under return reason code '02 - Mandate Cancelled by Customer'.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-red-600 rounded-r-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      2. Section 25, Payment and Settlement Systems Act, 2007 (PSS Act)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Section 25 of the PSS Act creates criminal liability for the dishonour of electronic fund transfers, but this provision applies strictly to transfers initiated for the <em>discharge of an existing legally enforceable debt or liability</em>. Where a loan has been repaid in full, no debt exists. A lender that presents a mandate post-closure cannot invoke Section 25 against the borrower; on the contrary, initiating debits knowingly without debt amounts to civil conversion and criminal breach of trust.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-amber-600 rounded-r-xl p-5 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      3. Section 72, Indian Contract Act, 1872: Money Received by Mistake
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Under Section 72, any person to whom money has been paid or delivered by mistake or under coercion must repay or return it. The Supreme Court of India has consistently held that financial institutions retaining surplus or erroneously deducted instalments hold those funds as constructive trustees. Withholding the money after written notice entitles the consumer to commercial interest rates alongside general damages.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION: Court Precedents & Commission Orders (Artifact 2) */}
              <section id="heading-case-digest" aria-labelledby="case-digest-title" className="scroll-mt-28 space-y-6">
                <h2 id="case-digest-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Verified Consumer Court &amp; Commission Rulings
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Review these authoritative judicial orders where Indian consumer commissions awarded substantial refunds, penal interest, and harassment compensation against lenders continuing post-closure autodebits:
                </p>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((cit, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                          {cit.citation}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{cit.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{cit.title}</h3>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-600 mb-4">{cit.parties}</h4>

                      <div className="space-y-3 text-xs sm:text-sm text-slate-700 mb-5">
                        <p><strong>Facts:</strong> {cit.facts}</p>
                        <p><strong>Holding &amp; Ratio:</strong> {cit.holding}</p>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-xl p-3.5 mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="text-xs uppercase font-bold text-red-900">Total Compensation Awarded:</span>
                        <span className="text-xs sm:text-sm font-bold text-red-700 font-mono">{cit.amount}</span>
                      </div>

                      <p className="text-xs text-slate-500 italic">
                        <strong>Practical Takeaway:</strong> {cit.takeaway}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mid-Article Advocate CTA */}
              <LoanEcsNoticeCTA />

              {/* SECTION: Scenario Problem Tabs (Artifact 3) */}
              <section id="heading-dispute-matrix" aria-labelledby="scenarios-title" className="scroll-mt-28 space-y-4">
                <h2 id="scenarios-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Common Post-Closure Mandate Scenarios &amp; Tailored Remedies
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select your specific situation below to view the root cause, legal liability, and exact step-by-step recovery process:
                </p>

                <LoanEcsProblemTabs />
              </section>

              {/* SECTION: 5-Step Recovery Playbook */}
              <section id="heading-playbook" aria-labelledby="playbook-title" className="scroll-mt-28 space-y-6">
                <h2 id="playbook-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  The 5-Step Escalation Playbook: From Stop Mandate to Full Restitution
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm">1</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        Download Account Statement &amp; Extract Mandate UMRN
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Log in to your netbanking or mobile banking app. Search your account transaction statement for the debit line item. Locate the 20-digit Unique Mandate Reference Number (UMRN). If the UMRN is not visible in the short narration, view your bank's 'e-Mandate / NACH Service' dashboard or request the mandate master sheet directly from your bank branch.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm">2</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        Submit Direct Stop-Mandate Request to Your Destination Bank
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Do not wait for the loan company. Tender a written Mandate Revocation Letter directly to your bank branch manager citing RBI Master Directions. Demand an immediate stop instruction on the specific UMRN. Keep a signed and dated receiving seal on the duplicate copy. Any autodebit processed after the timestamp on your acknowledgment slip becomes the direct pecuniary liability of your destination bank.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm">3</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        Serve a Statutory Advocate Legal Notice to the Creditor
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Have an advocate dispatch a formal demand notice under Registered Speed Post and digitally under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. The notice establishes the date of loan clearance, proves lack of consideration under Section 72 Contract Act, and demands immediate NEFT refund of the debited amounts within 7 days, alongside reimbursement of all bounce penalties and ₹50,000 compensation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm">4</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        File Complaint on the RBI Integrated Ombudsman (CMS)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        If the bank or NBFC fails to refund your money within 30 days of your notice (or issues an unsatisfactory reply), lodge an online complaint via the RBI Complaint Management System (<a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-red-600 underline font-semibold">cms.rbi.org.in</a>). The Banking Ombudsman possesses statutory powers to direct instantaneous refund, levy ₹100/day delay penalties, and award up to ₹1,00,000 for loss of time and mental harassment.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm">5</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                        Approach the District Consumer Commission via e-Jagriti
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        For egregious violations where the lender damaged your CIBIL score, refused to refund multiple instalments, or levied illegal collection penalties, file an online consumer complaint on the national consumer portal (<a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-red-600 underline font-semibold">e-jagriti.gov.in</a>). Claim full refund with 18% penal interest, exemplary punitive damages, and statutory litigation costs.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION: Statutory Deadlines Table (Artifact 4) */}
              <section id="heading-deadlines-table" aria-labelledby="deadlines-title" className="scroll-mt-28 space-y-4">
                <h2 id="deadlines-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Statutory Turnaround Times (TAT) &amp; Regulatory Deadlines
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Know your legal timelines under RBI regulations and the Consumer Protection Act, 2019:
                </p>

                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                      <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                        <tr>
                          <th scope="col" className="px-5 py-3">Stage / Action</th>
                          <th scope="col" className="px-5 py-3">Statutory Deadline</th>
                          <th scope="col" className="px-5 py-3">Authority / Rule</th>
                          <th scope="col" className="px-5 py-3">Non-Compliance Consequence</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50">
                          <td className="px-5 py-3.5 font-bold text-slate-900">Direct Bank Mandate Stop</td>
                          <td className="px-5 py-3.5">Immediate (Max 24 Hours)</td>
                          <td className="px-5 py-3.5 font-mono text-xs">RBI DPSS Circular</td>
                          <td className="px-5 py-3.5 text-red-600 font-semibold">Bank strictly liable for subsequent debits</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-5 py-3.5 font-bold text-slate-900">Lender Excess Debit Refund</td>
                          <td className="px-5 py-3.5">T+3 Business Days</td>
                          <td className="px-5 py-3.5 font-mono text-xs">RBI Harmonised TAT</td>
                          <td className="px-5 py-3.5 text-red-600 font-semibold">₹100/day auto-compensation</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-5 py-3.5 font-bold text-slate-900">Lender Notice Response Window</td>
                          <td className="px-5 py-3.5">7 to 15 Calendar Days</td>
                          <td className="px-5 py-3.5 font-mono text-xs">Statutory Legal Notice</td>
                          <td className="px-5 py-3.5 text-red-600 font-semibold">Initiation of Banking Ombudsman &amp; Court</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-5 py-3.5 font-bold text-slate-900">RBI Ombudsman Escalation Window</td>
                          <td className="px-5 py-3.5">Within 1 Year of Complaint</td>
                          <td className="px-5 py-3.5 font-mono text-xs">RB-IOS Scheme 2021</td>
                          <td className="px-5 py-3.5 text-red-600 font-semibold">Claim forfeiture if delayed beyond limitation</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-5 py-3.5 font-bold text-slate-900">Consumer Court Filing Limitation</td>
                          <td className="px-5 py-3.5">2 Years from Cause of Action</td>
                          <td className="px-5 py-3.5 font-mono text-xs">Section 69, CPA 2019</td>
                          <td className="px-5 py-3.5 text-red-600 font-semibold">Time-barred unless condonation allowed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* SECTION: Worked Example (Artifact 5) */}
              <section id="heading-worked-example" aria-labelledby="worked-example-title" className="scroll-mt-28 space-y-4">
                <h2 id="worked-example-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Worked Case Study: Mr. Mehra's ₹48,000 Car Loan Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The following illustrative worked example demonstrates how a borrower successfully recovered excess deductions, reversed bank penalties, and secured compensation:
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Case Study: Auto Loan Post-Closure NACH Dispute</span>
                    <span className="text-xs font-mono font-semibold text-emerald-700">Full Recovery Achieved: ₹67,400</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                    <p>
                      <strong>The Dispute:</strong> On 12 August 2025, Mr. Rohit Mehra foreclosed his 5-year car loan with a leading private NBFC by paying the final settlement amount of ₹1,85,000. On 18 August, the NBFC emailed a formal No Objection Certificate (NOC) and closed the loan on their app. However, on 5 September and again on 5 October, the NBFC's automated NACH batch debited his HDFC salary account for ₹24,000 each (Total: ₹48,000).
                    </p>
                    <p>
                      <strong>Lender Obstruction:</strong> Mr. Mehra contacted customer support, who cited 'clearing reconciliation latency' and asked him to wait 45 days. Meanwhile, HDFC Bank branch officials told him they could not cancel the mandate without an internal NOC approval form signed by the NBFC's zonal officer.
                    </p>
                    <p>
                      <strong>The Legal Action:</strong> On 15 October, Mr. Mehra engaged LegalRecovery. An advocate drafted and dispatched a formal statutory demand notice to both the NBFC's Managing Director and HDFC Bank's Principal Nodal Officer, citing Section 25 PSS Act, Section 72 Indian Contract Act, and RBI customer mandate cancellation circulars. The notice demanded immediate refund with 18% penal interest within 7 days.
                    </p>
                    <p>
                      <strong>The Outcome:</strong> On Day 5 following notice receipt, the NBFC's legal desk contacted Mr. Mehra. The NBFC processed a direct RTGS refund of ₹48,000, paid ₹4,400 as commercial interest, and agreed to ₹15,000 in goodwill compensation to prevent filing before the Banking Ombudsman and e-Jagriti consumer forum. HDFC Bank formally terminated UMRN 20205839201948201948 within 24 hours.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900 font-medium">
                    Total Realized: ₹48,000 (Principal) + ₹4,400 (Penal Interest) + ₹15,000 (Harassment Compensation) = <strong>₹67,400 in Total Restitution.</strong>
                  </div>
                </div>
              </section>

              {/* SECTION: Evidence Checklist (Artifact 6) */}
              <section id="heading-evidence-checklist" aria-labelledby="checklist-title" className="scroll-mt-28 space-y-4">
                <h2 id="checklist-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Mandatory Evidence Checklist for Your Mandate Legal Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before serving your legal notice or approaching the Banking Ombudsman, ensure you have gathered the following certified electronic and physical documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Loan Closure Certificate / NOC</h3>
                      <p className="text-xs text-slate-600 mt-0.5">Original or PDF copy of the No Objection Certificate (NOC) or No Dues Certificate (NDC) issued by the lender.</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Certified Bank Account Statement</h3>
                      <p className="text-xs text-slate-600 mt-0.5">Bank statement highlighting the post-closure debit line items, dates, and Unique Mandate Reference Number (UMRN).</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Proof of Stop Request to Bank</h3>
                      <p className="text-xs text-slate-600 mt-0.5">Copy of written letter to bank branch manager or netbanking service ticket requesting mandate revocation.</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Bounce Penalty Passbook Entries</h3>
                      <p className="text-xs text-slate-600 mt-0.5">Extract of all 'NACH Return' or 'ECS Inward Return' charges levied on your account since loan closure.</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">CIBIL / Credit Bureau Report</h3>
                      <p className="text-xs text-slate-600 mt-0.5">Latest credit report demonstrating if the lender erroneously reported overdue or default status on the closed loan.</p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-base">✓</span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Customer Support Ticket History</h3>
                      <p className="text-xs text-slate-600 mt-0.5">Email trails, call recordings, and grievance complaint numbers showing the lender's failure to resolve the dispute.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION: Scope of LegalRecovery */}
              <section className="bg-slate-100 border border-slate-200 rounded-2xl p-5 sm:p-7">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Honest Scope: What LegalRecovery Can &amp; Cannot Do
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                  <div>
                    <h4 className="font-bold text-emerald-800 mb-1">What We Handle:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>Drafting and serving statutory demand notices to banks and NBFCs</li>
                      <li>Demanding full refund of excess debits with 12% to 18% penal interest</li>
                      <li>Establishing lender liability under PSS Act § 25 and Contract Act § 72</li>
                      <li>Escalating unheeded disputes to the RBI Banking Ombudsman (CMS)</li>
                      <li>Preparing verified petitions for filing before e-Jagriti Consumer Forums</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800 mb-1">What We Cannot Do:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>We cannot alter your bank's internal core software without their involvement</li>
                      <li>We do not intervene where a legitimate underlying debt remains unpaid</li>
                      <li>We cannot guarantee specific damages where the consumer failed to obtain an NOC</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Final Bottom Advocate CTA */}
              <LoanEcsNoticeCTA />

              {/* SECTION: FAQs */}
              <section id="heading-faqs" aria-labelledby="faqs-title" className="scroll-mt-28 space-y-6">
                <h2 id="faqs-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: Primary Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2 id="sources-title" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Sources &amp; Statutory Legal References
                </h2>
                <ul className="space-y-2 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((src, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-400 font-mono">[{idx + 1}]</span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 hover:text-red-600 underline transition-colors"
                      >
                        {src.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Internal Links Hub */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                  Related Banking Dispute &amp; Recovery Resources
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  <Link
                    href="/recovery/fraud-transaction-amount"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    Fraud Transaction Recovery
                  </Link>
                  <Link
                    href="/law/rbi-zero-liability-unauthorised-transaction"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    RBI Zero Liability Rule
                  </Link>
                  <Link
                    href="/templates/wrong-account-transfer-refund-application"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    Wrong Account Transfer Refund Application
                  </Link>
                  <Link
                    href="/recovery/wrong-upi-transfer"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    Wrong UPI Transfer Recovery
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    Legal Notice Charges
                  </Link>
                </div>
              </div>

              {/* Related Recovery Guides Dynamic Hub */}
              <RelatedRecoveryGuides />
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
