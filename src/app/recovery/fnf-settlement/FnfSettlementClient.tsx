'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// FAQ list focused strictly on exit clearances, relieving letters, and final accounting (10 FAQs)
const faqs = [
  {
    question: "Under the new Code on Wages, when must my employer clear my exit dues?",
    answer: "Section 17(2) of the Code on Wages, 2019 mandates that when an employee resigns, is terminated, retrenched, or leaves due to company closure, the employer must pay all due wages within two working days of the last working day. This 48-hour timeline replaces the older 30-to-45-day window for basic wage and accrued leave clearances, although statutory benefits like gratuity still follow a 30-day timeline."
  },
  {
    question: "Is it legal for my employer to withhold my experience certificate and relieving letter?",
    answer: "No, it is completely illegal. Relieving letters and experience certificates are service records that belong to the employee. Under state Shops and Commercial Establishments Acts, an employer cannot legally withhold these documents as a leverage tool during financial disputes or negotiations. Withholding these certificates constitutes an illegal restraint on your right to seek future employment."
  },
  {
    question: "Can HR withhold my entire FNF payout if I haven't returned a single asset like a mouse or ID card?",
    answer: "No. While the employer can deduct the fair, depreciated book value of any unreturned company asset (such as a laptop, charger, or access badge) from your final settlement, they are not legally permitted to withhold the entire F&F payout. The company must provide an itemized deduction for the specific unreturned asset and release the rest of the FNF balance."
  },
  {
    question: "How do I claim my gratuity if the company says I resigned at 4.9 years of service?",
    answer: "Under the Payment of Gratuity Act, 1972, the requirement is 5 years of continuous service. However, under the 240-day rule, if an employee has worked for 4 years and 240 days in the final year (or 190 days in a 5-day week setup), they are eligible for gratuity. If the company denies your claim, you can file a petition (Form N) before the Controlling Authority under the Act."
  },
  {
    question: "What is the tax exemption limit for leave encashment in the final settlement?",
    answer: "Leave encashment received by a non-government employee at the time of resignation or retirement is exempt from income tax up to a statutory cap under Section 10(10AA) of the Income Tax Act. Any amount received above this limit is taxable as salary. The HR must calculate this exemption properly in the final tax deduction statement."
  },
  {
    question: "Can an employer deduct notice pay from FNF if my manager accepted a notice period waiver?",
    answer: "No. If your reporting manager or HR approved a notice period waiver in writing (via email or on the HR portal), they cannot later deduct notice pay from your final settlement sheet. Any subsequent deduction by the finance team represents an unauthorized and illegal deduction under labor regulations."
  },
  {
    question: "What if the company demands payment for a training bond or lock-in period at the time of exit?",
    answer: "Under Section 27 of the Indian Contract Act, 1872, training bonds are only enforceable if the employer can prove they spent actual capital on specialized, third-party training for you. The company cannot unilaterally deduct the bond amount from your earned wages or FNF settlement without your consent and a formal legal determination."
  },
  {
    question: "Is variable pay or pro-rata annual bonus legally required to be paid in the FNF?",
    answer: "Yes. If you have worked during the performance period and met the targets, variable pay and commissions are considered accrued wages. Under the Payment of Bonus Act, 1965, if you meet the basic eligibility criteria, you are entitled to a pro-rata statutory exit bonus for the months worked, regardless of internal policies."
  },
  {
    question: "How do I ensure the company updates my date of exit on the EPFO portal?",
    answer: "The employer is legally required to update your Date of Exit (DOE) on the EPFO portal within 30 days of your last working day. If they fail to do so, it blocks your ability to withdraw or transfer your provident fund (PF) balance. You can report this default to the Regional PF Commissioner if the company refuses to update it."
  },
  {
    question: "What should I do if my FNF sheet shows a 'negative balance' that I disagree with?",
    answer: "Send an immediate, formal email disputing the calculations line-by-line and requesting a detailed breakdown. Do not sign any exit clearance or settlement deed that declares you have 'no further claims'. If they ignore your email, you can file a complaint with the state's Shops and Establishments Inspectorate."
  }
];

// Client reviews focused strictly on exit clearances, gratuity, leave encashment, and document recovery (6 Reviews)
const reviews = [
  {
    id: "rev-fnf-1",
    name: "Aishwarya Sen (Senior UI Designer)",
    rating: 5,
    review: "After my resignation from an advertising agency, the HR withheld my FNF and relieving letter for three months, claiming my handover was incomplete. LegalRecovery served a formal notice to the board of directors. Fearing a Shops Act audit and legal complications, the agency processed my entire FNF and emailed my relieving letter within a week. Highly efficient!"
  },
  {
    id: "rev-fnf-2",
    name: "Rajesh Kannan (Technical Architect)",
    rating: 5,
    review: "I completed 4 years and 10 months of service, but the company refused to pay my Gratuity, citing the 5-year rule. LegalRecovery drafted a highly technical notice citing the 240-day rule under the Gratuity Act. The finance head accepted the statutory interpretation and credited my Gratuity along with my pending leave encashment within 12 days."
  },
  {
    id: "rev-fnf-3",
    name: "Nikhil Mehra (Sales Operations Manager)",
    rating: 5,
    review: "My employer sent me a negative FNF sheet, recovering ₹1.5 Lakhs for notice period buyout even though my manager had waived it in writing. LegalRecovery helped me file a complaint on the SAMADHAN portal. The Conciliation Officer summoned the company, and they had to restore the waiver and pay my FNF. Great legal-tech assistance!"
  },
  {
    id: "rev-fnf-4",
    name: "Tanya Grover (HR Specialist)",
    rating: 5,
    review: "The company withheld my FNF and variable pay because I joined a competitor, citing a non-compete clause. LegalRecovery served a notice pointing out that Section 27 of the Contract Act makes non-compete clauses void after employment. The company legal team immediately agreed to settle my dues to avoid litigation. Incredible support!"
  },
  {
    id: "rev-fnf-5",
    name: "Jitendra Singh (Product Manager)",
    rating: 5,
    review: "My previous organization delayed my F&F by five months. I was facing home loan EMI stress. LegalRecovery served a strong demand notice claiming 18% interest and compensation for bank bounce charges. The company cleared my dues and paid a portion of the interest penalties. The flat-rate pricing is completely worth it."
  },
  {
    id: "rev-fnf-6",
    name: "Srinivas Rao (Consultant)",
    rating: 5,
    review: "As an exit consultant, my final milestone payment was withheld by the startup for four months. LegalRecovery drafted a legal notice under the Contract Act. The startup finance team processed the payment within 10 days of receiving the notice. The digital dashboard tracking made the entire process transparent."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.legalrecovery.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Recovery",
      "item": "https://www.legalrecovery.in/recovery"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Full and Final (FNF) Settlement Recovery",
      "item": "https://www.legalrecovery.in/recovery/fnf-settlement"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Withholding Full and Final (FNF) Settlement? Recover Exit Dues Legally in India",
  "description": "Comprehensive legal guide on recovering withheld FNF settlements, unpaid gratuity, leave encashment, and exit clearance dues under Indian labor codes and acts.",
  "image": "https://www.legalrecovery.in/og-fnf-recovery.png",
  "author": {
    "@type": "Organization",
    "name": "Team LegalRecovery",
    "url": "https://www.legalrecovery.in"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-06-05",
  "dateModified": "2026-06-05"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "FNF Settlement Recovery Service",
  "image": "https://www.legalrecovery.in/og-fnf-recovery.png",
  "description": "Expert assistance for recovering withheld full and final settlements, gratuity, and leave encashment from employers in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
  },
  "review": reviews.map(rev => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": String(rev.rating)
    },
    "author": {
      "@type": "Person",
      "name": rev.name
    },
    "reviewBody": rev.review
  }))
};

export default function FnfSettlementClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "exit-accounting-anatomy", title: "Exit Accounting: CTC vs Net Payable" },
    { id: "wage-code-2day-rule", title: "The 48-Hour Exit Wage Mandate" },
    { id: "gratuity-controlling-authority", title: "Gratuity Auditing & Claims" },
    { id: "leave-encashment-taxation", title: "Leave Encashment & Section 10(10AA)" },
    { id: "notice-period-recovery", title: "Notice Buy-Outs & Waiver Adjustments" },
    { id: "exit-clearance-asset-logs", title: "Asset Clearance Logs & Valuations" },
    { id: "withholding-relieving-documents", title: "Withholding Relieving Letters" },
    { id: "prorata-bonus-variable-pay", title: "Pro-rata Variable Pay & Bonuses" },
    { id: "exit-tds-form16-compliance", title: "Final TDS & Form 16 Compliance" },
    { id: "post-employment-noncompetes", title: "Non-Compete & NDA Disputes" },
    { id: "epfo-exit-date-uan", title: "EPFO Exit Dates & Pension Transfers" },
    { id: "fnf-discrepancy-dispute-flow", title: "Zero-Payout FNF Dispute Protocol" },
    { id: "severance-pay-retrenchment", title: "Severance Pay & Chapter VA Rules" },
    { id: "shops-inspectorate-grievances", title: "Shops & Establishments Grievances" },
    { id: "gratuity-controlling-authority-form-n", title: "Filing Form N for Gratuity" },
    { id: "liquidator-exit-claims-nclt", title: "Exit Claims in Corporate Liquidation" },
    { id: "executive-arbitration-exits", title: "Arbitration for C-Suite Exits" },
    { id: "final-payout-cheque-bounce", title: "Bounced F&F Cheques & Drafts" },
    { id: "damages-career-disruption", title: "Damages for Delayed exit documents" },
    { id: "preserving-exit-evidence-trail", title: "Preserving Handover Sign-off Records" },
    { id: "exit-recovery-case-studies", title: "FNF Recovery Case Studies" },
    { id: "client-exit-testimonials", title: "Client Testimonials & Ratings" },
    { id: "why-choose-legalrecovery", title: "Why LegalRecovery Platform?" },
    { id: "faq-accordion", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "FNF Settlement Recovery", href: "/recovery/fnf-settlement" }
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        {/* Expanded Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Largest Legal Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Is Your Company <span className="text-[#DC2626]">Withholding Your FNF</span> Settlement?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Do not let employers withhold your hard-earned gratuity, leave encashment, or final salary. Recover your full exit dues and secure your relieving documents legally.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Recovery Now
            </button>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
                
                {/* Exit Accounting: CTC vs Final Net Payable */}
                <section id="exit-accounting-anatomy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Exit Accounting: CTC vs Final Net Payable</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Exiting an establishment initiates a complex accounting procedure known as the Full and Final (FNF) settlement. FNF is not simply a regular monthly pay cycle. Instead, it is a comprehensive financial reconciliation that translates your overall Cost to Company (CTC) into a final net payable figure. The payroll division must analyze every line item of your compensation structure, factoring in accrued benefits, pending claims, and exit deductions to compute the ultimate balance.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The calculation begins with your gross earned salary for the final active days of the notice period. Added to this are accrued statutory benefits, such as gratuity (if eligible) and privilege leave encashment. Contractual benefits, including approved variable pay, pro-rata bonuses, sales commissions, and pending out-of-pocket reimbursements, are then consolidated. This total represents the gross exit asset.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      From this gross amount, the employer is legally permitted to make authorized deductions. These include Income Tax (TDS) calculated for the final period, the employee&apos;s share of Provident Fund (EPF), and professional tax. Crucially, the employer can recover notice period buy-out costs or adjust the depreciated value of unreturned physical assets. If the company fails to provide an itemized statement detailing these assets and deductions, it constitutes a non-compliant accounting practice. Exited employees are entitled to receive a detailed FNF statement showing these calculations.
                    </p>
                  </div>
                </section>

                {/* The 48-Hour Exit Wage Mandate */}
                <section id="wage-code-2day-rule" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">The 48-Hour Exit Wage Mandate</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For decades, private-sector establishments operated on a self-declared timeline for exit settlements, typically ranging from 30 to 45 days. However, the legal framework has changed with the introduction of the <strong>Code on Wages, 2019</strong>. Under Section 17(2) of the Code, a strict statutory timeline has been established for processing exit wages.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Code mandates that when an employee leaves their employment—whether due to resignation, dismissal, retrenchment, termination, or retirement—the employer is required to pay all due wages within <strong>two working days</strong> of the last working day. This 48-hour rule has significantly compressed the exit process, forcing corporate finance and HR teams to accelerate clearances.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This two-day mandate applies to all wage-related components, including basic pay, dearness allowance, and accrued leave encashment. While separate statutory payouts like gratuity have their own 30-day timeline under separate acts, the core salary settlement cannot be delayed. Any contract clause or company policy that seeks to extend the FNF payment window beyond two working days is legally non-compliant and can be challenged.
                    </p>
                  </div>
                </section>

                {/* Gratuity Auditing & Claims */}
                <section id="gratuity-controlling-authority" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Gratuity Auditing &amp; Claims</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Gratuity is a statutory exit benefit regulated by the <strong>Payment of Gratuity Act, 1972</strong>. Establishments with 10 or more employees must pay gratuity to workers who have rendered continuous service. Under Section 4 of the Act, the basic eligibility requirement is 5 years of continuous service. However, employers frequently deny this benefit to employees who resign after 4.5 to 4.9 years.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This denial is often legally incorrect. Under the <strong>240-day rule</strong>, which has been upheld by the Supreme Court of India:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>If an employee has completed 4 years of active service and has worked for at least 240 days in the 5th year (or 190 days in a 5-day work week setup), they are legally eligible for gratuity.</li>
                      <li>Continuous service includes weekends, national holidays, and approved paid leaves, meaning the calculation is based on tenure, not just attendance.</li>
                      <li>The employer is required to calculate gratuity using the statutory formula: <code>(Last Drawn Basic + DA) x (15 / 26) x (Years of Service)</code>.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 7 of the Act, employers must process and pay gratuity within 30 days of the exit. If they delay payment, they are legally liable to pay simple interest on the delayed amount, calculated from the date the gratuity became due.
                    </p>
                  </div>
                </section>

                {/* Leave Encashment & Section 10(10AA) */}
                <section id="leave-encashment-taxation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Leave Encashment &amp; Section 10(10AA)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Accrued leaves represent a deferred remuneration asset. During your employment, you accumulate Privilege Leave (PL) or Earned Leave (EL) according to the company&apos;s leave policy, which must align with the state&apos;s Shops and Establishments Act. At exit, any unused, accumulated leaves must be converted to cash as part of your FNF.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The calculation for leave encashment is based on your last drawn basic salary, using the formula: <code>(Basic Salary / 30) x (Accrued Leave Days)</code>. State Shops Acts define the maximum number of leaves that can be carried forward. For example, the Karnataka Shops Act allows accumulation up to 45 days. Any leaves within this limit cannot be arbitrarily lapsed by the company and must be encashed.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      From a tax perspective, leave encashment received at the time of exit is exempt from income tax up to a statutory cap under <strong>Section 10(10AA) of the Income Tax Act, 1961</strong>. Any amount received beyond this limit is taxed as part of your salary income. The HR division must calculate this exemption properly in the final tax deduction statement.
                    </p>
                  </div>
                </section>

                {/* Notice Buy-Outs & Waiver Adjustments */}
                <section id="notice-period-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Notice Buy-Outs &amp; Waiver Adjustments</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Notice period clauses are contractually designed to manage operational handovers. If an employee resigns and is unable to serve the complete notice period, the contract usually provides for a <strong>Notice Buy-Out</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      There are two sides to notice period adjustments in FNF sheets:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Notice Pay Recovery (By Employer):</strong> If you leave before serving the notice period, the company will recover salary for the short served days from your FNF. This recovery must be calculated strictly on basic salary, not gross salary, unless specified otherwise in the contract.</li>
                      <li><strong>Notice Pay Payment (By Employer):</strong> If the company terminates your services immediately (without cause), they must pay you basic salary for the notice period in lieu of notice. Failing to include this payment is an illegal deduction.</li>
                      <li><strong>Notice Waivers:</strong> If your reporting manager or HR waives your notice period in writing (via email or on the HR portal), the company cannot subsequently deduct notice pay in the final FNF sheet.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      We frequently see finance teams ignoring written waivers approved by managers and deducting notice pay from the final FNF credit. We help employees challenge these unauthorized deductions by presenting the digital waiver trail.
                    </p>
                  </div>
                </section>

                {/* Asset Clearance Logs & Valuations */}
                <section id="exit-clearance-asset-logs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Asset Clearance Logs &amp; Valuations</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To complete the exit process, employees must obtain a &quot;No Dues Certificate&quot; (NDC) by returning all company assets, including laptops, access cards, ID badges, and corporate credit cards, and completing knowledge handovers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A common tactic used by employers is withholding relieving letters, experience certificates, and the entire FNF settlement, claiming that the handover is incomplete or that assets are damaged. The legal position on this is clear:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>No Hostage of Service Documents:</strong> Relieving and experience letters are records of your employment history. Withholding them is an illegal restraint on your right to work under Section 27 of the Contract Act.</li>
                      <li><strong>Depreciated Deductions Only:</strong> If an asset is lost or damaged, the company can only deduct the depreciated book value of the asset from your FNF. They cannot withhold the entire FNF or charge the replacement cost of a brand new device.</li>
                      <li><strong>Clearance Sign-offs:</strong> Ensure you document the physical return of assets, obtaining an acknowledgment email or receipt from the IT and administration teams.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you have proof of returning company property, the employer has no legal basis to delay your exit documents or FNF. A legal notice from our advocate panel can demand the immediate release of these documents.
                    </p>
                  </div>
                </section>

                {/* Withholding Relieving Letters */}
                <section id="withholding-relieving-documents" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Withholding Relieving Letters</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Relieving letters and experience certificates are critical service documents required by new employers to verify professional history. A common corporate practice is withholding these documents to force employees to drop their financial claims.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian labor jurisprudence, an employer cannot legally withhold these documents. They are considered the property of the employee. Withholding them to force a settlement constitutes an illegal restraint on your right to work, which violates Section 27 of the Contract Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your employer refuses to issue these documents, you can file a complaint with the local Labour Inspector under the state Shops and Establishments Act. The inspector has the authority to audit company records and direct the immediate release of your relieving certificates.
                    </p>
                  </div>
                </section>

                {/* Pro-rata Variable Pay & Bonuses */}
                <section id="prorata-bonus-variable-pay" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Pro-rata Variable Pay &amp; Bonuses</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Variable pay, incentives, and annual bonuses are frequently disputed during the FNF process. Employers often cite internal policies stating that the employee must be on the payroll on the payout date to deny these payments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This position is highly contestable:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Pro-rata Variable Pay:</strong> If you worked during the performance period and achieved the targets, the variable pay is considered earned wages. Denying the pro-rata amount constitutes an arbitrary breach of contract.</li>
                      <li><strong>Statutory Bonus:</strong> The <strong>Payment of Bonus Act, 1965</strong> is a central legislation. If your basic salary is within the statutory limit, you are entitled to a pro-rata statutory bonus for the months served, regardless of exit policies.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your FNF sheet omits variable pay that you had earned, you do not have to accept the loss. We assist you in gathering performance reports and target achievement emails to build a claim for these incentive payments.
                    </p>
                  </div>
                </section>

                {/* Final TDS & Form 16 Compliance */}
                <section id="exit-tds-form16-compliance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Final TDS &amp; Form 16 Compliance</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The FNF settlement process includes the final tax assessment for the financial year. The finance team must calculate your total income, deduct applicable exemptions (like HRA, LTA, or investment proofs submitted during exit), and make final TDS adjustments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Critical aspects of exit tax calculations include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>TDS Settlement:</strong> The employer must deduct the final tax due from your FNF. They must provide a detailed calculation showing how the TDS was computed.</li>
                      <li><strong>Mandated Form 16 Issuance:</strong> Under Section 203 of the Income Tax Act, the employer is legally obligated to issue Form 16 (TDS certificate) by the statutory deadline (usually June 15th of the next financial year). They cannot withhold Form 16 as a tool for negotiation.</li>
                      <li><strong>Form 12BB Declarations:</strong> exiting employees have the right to submit their final investment proofs during the exit window to reduce final TDS deductions.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employer fails to deposit the deducted TDS with the Income Tax Department or refuses to issue Form 16, they commit a statutory violation. We assist employees in reporting these defaults to the income tax authorities.
                    </p>
                  </div>
                </section>

                {/* Non-Compete & NDA Disputes */}
                <section id="post-employment-noncompetes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Non-Compete &amp; NDA Disputes</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many companies insert post-employment non-compete covenants and non-disclosure agreements (NDAs) into their contracts. If an employee resigns and joins a competitor, the previous employer may threaten to withhold their FNF or take legal action.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 27 of the Indian Contract Act, 1872</strong>, any agreement that restrains anyone from exercising a lawful profession, trade, or business is void. The Indian judiciary has consistently held that:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>Post-employment non-compete restrictions are completely unenforceable in India. An employer cannot restrict you from working for a competitor after your employment ends.</li>
                      <li>The company cannot withhold your accrued salary, leave encashment, or gratuity as a penalty for joining a competitor.</li>
                      <li>While confidentiality clauses (NDAs) are valid regarding proprietary trade secrets, they cannot be used as a general excuse to deny exit payouts without proof of actual theft or damage.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your previous company is using non-compete arguments to block your FNF or clear your exit, they are violating statutory rights. We serve notices that point out the invalidity of post-employment restrictions under Section 27, prompting employers to clear the dues.
                    </p>
                  </div>
                </section>

                {/* EPFO Exit Dates & Pension Transfers */}
                <section id="epfo-exit-date-uan" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">EPFO Exit Dates &amp; Pension Transfers</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Provident Fund (EPF) and Pension Scheme (EPS) contributions are critical retirement assets. During employment, the employer and employee shares are deposited into your UAN account. When you resign, you cannot easily withdraw or transfer these funds until the employer updates your Date of Exit (DOE) on the EPFO portal.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under EPFO regulations, the employer is legally obligated to update the exit date within 30 days of your last working day. However, companies sometimes delay updating the portal to pressure employees during exit disputes.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your employer refuses to update your exit date, you can report the default to the Regional PF Commissioner, who has the power to initiate recovery actions and audit company accounts under Section 7A of the EPF Act. We assist clients in drafting these statutory reports.
                    </p>
                  </div>
                </section>

                {/* Zero-Payout FNF Dispute Protocol */}
                <section id="fnf-discrepancy-dispute-flow" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Zero-Payout FNF Dispute Protocol</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If you receive a zero-payout or negative balance FNF sheet, following a structured escalation process is crucial. It protects your professional position while building a solid documentary record:
                    </p>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-6">
                      <div>
                        <span className="font-extrabold text-sm text-[#DC2626] uppercase">Stage 1: Contest the Calculations (Days 1 to 5)</span>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          Send a formal email to HR and payroll disputing the calculations line-by-line. Request a detailed breakdown and proof of any deductions. Do not sign any exit clearance or settlement deed that declares you have 'no further claims'.
                        </p>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <span className="font-extrabold text-sm text-[#DC2626] uppercase">Stage 2: Formal Written Demand (Days 6 to 15)</span>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          If the HR and payroll teams ignore your email, send a registered demand letter to the company&apos;s registered office. State that if the dues are not cleared, you will initiate formal legal action.
                        </p>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <span className="font-extrabold text-sm text-[#DC2626] uppercase">Stage 3: Executive Legal Notice (Days 16 to 30)</span>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          If the company leadership ignores your representation, engage our legal-tech platform to serve an advocate-signed demand notice to the company and the board of directors.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Severance Pay & Chapter VA Rules */}
                <section id="severance-pay-retrenchment" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Severance Pay &amp; Chapter VA Rules</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your employment is terminated due to retrenchment, layoffs, or company closure, you are entitled to statutory severance pay. Under Chapter VA of the <strong>Industrial Disputes Act, 1947</strong>, establishments employing 50 or more workmen must comply with strict rules.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 25F of the Act, an employer must provide:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>One month&apos;s notice in writing indicating the reasons for retrenchment, or wages in lieu of notice.</li>
                      <li>Retrenchment compensation equal to <strong>15 days&apos; average pay</strong> for every completed year of continuous service or any part thereof in excess of six months.</li>
                      <li>Failure to pay this severance at the time of retrenchment makes the termination illegal under labor laws.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you have been retrenched without receiving statutory severance pay in your final settlement, you can file a recovery petition in the Labour Court to claim full back wages.
                    </p>
                  </div>
                </section>

                {/* Shops & Establishments Grievances */}
                <section id="shops-inspectorate-grievances" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Shops &amp; Establishments Grievances</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For most private-sector employees, the state-specific <strong>Shops and Commercial Establishments Act</strong> regulates employment terms and wage payments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      State Shops Acts establish local rules to prevent employers from delaying salaries. For instance:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>Under the <strong>Karnataka Shops and Commercial Establishments Act, 1961</strong>, every employer must pay monthly salaries on or before the 7th of the following month. The Act empowers local inspectors to audit company payroll ledgers.</li>
                      <li>The <strong>Delhi Shops and Establishments Act, 1954</strong> mandates that all wages must be credited on a monthly basis within the first 7 days, and failure to do so allows employees to file a direct grievance with the Chief Inspector.</li>
                      <li>The <strong>Maharashtra Shops and Establishments Act, 2017</strong> contains strict penalty clauses, including compounding fines and prosecution of directors, if salaries are persistently delayed.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      These state acts create a direct administrative grievance channel. Employees can file complaints to the local Labour Inspector, who is empowered to inspect payrolls, summon employers, and issue directions for wage credit.
                    </p>
                  </div>
                </section>

                {/* Filing Form N for Gratuity */}
                <section id="gratuity-controlling-authority-form-n" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Filing Form N for Gratuity</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If an employer fails to pay your gratuity within 30 days of exit, you can initiate recovery under the Payment of Gratuity Act. The primary step is filing a formal application in <strong>Form N</strong> before the Controlling Authority.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Controlling Authority (typically a labor officer of the region) will issue summons to the employer, directing them to appear and explain why the gratuity was delayed. The authority will compute the exact dues along with simple interest from the date it became due.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employer fails to pay despite the authority&apos;s directions, the Controlling Authority will issue a recovery certificate to the Collector, who can recover the amount as land revenue arrears. We assist clients in drafting and filing Form N.
                    </p>
                  </div>
                </section>

                {/* Exit Claims in Corporate Liquidation */}
                <section id="liquidator-exit-claims-nclt" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Exit Claims in Corporate Liquidation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your corporate employer has defaulted on salaries for multiple employees and is facing insolvency, employees have a powerful remedy under the <strong>Insolvency and Bankruptcy Code (IBC), 2016</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the IBC, employees are classified as <strong>Operational Creditors</strong>. If a company defaults on salary payments:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>Employees can jointly file a corporate insolvency resolution petition under <strong>Section 9 of the IBC</strong> before the National Company Law Tribunal (NCLT).</li>
                      <li>While the individual threshold is ₹1 crore, multiple employees from the same defaulting company can combine their pending salary claims to meet the threshold.</li>
                      <li>Once the NCLT admits the petition, an Interim Resolution Professional (IRP) is appointed, and the existing board of directors is suspended.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Fearing the complete loss of control over their company, promoters and directors almost always settle employee dues immediately upon the filing of an IBC petition.
                    </p>
                  </div>
                </section>

                {/* Arbitration for C-Suite Exits */}
                <section id="executive-arbitration-exits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Arbitration for C-Suite Exits</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For senior executives, managing directors, and key management personnel (KMPs), employment contracts often contain an <strong>Arbitration Clause</strong>. This clause mandates that any dispute arising out of the contract must be resolved through arbitration, rather than in the civil courts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Arbitration and Conciliation Act, 1996</strong>, arbitration is a private, binding dispute resolution process. It is faster than civil courts and maintains confidentiality, which is crucial for high-profile executive transitions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your executive exit package is withheld, we help you invoke the arbitration clause. This includes drafting the Section 21 notice to trigger the appointment of an arbitrator and filing claims for the recovery of your contractual exit dues, stock options, and severance pay.
                    </p>
                  </div>
                </section>

                {/* Bounced F&F Cheques & Drafts */}
                <section id="final-payout-cheque-bounce" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Bounced F&amp;F Cheques &amp; Drafts</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your employer issues a cheque for your FNF settlement and it bounces due to 'insufficient funds' or 'stop payment' instructions, the matter shifts from a civil contract breach to a serious criminal offense.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>, the drawer of a bounced cheque faces severe consequences. To prosecute under this section, you must follow a strict statutory process:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-650">
                      <li>You must serve a formal <strong>30-day Demand Notice</strong> to the employer within 30 days of receiving the bank return memo.</li>
                      <li>The employer is given 15 days from the receipt of the notice to clear the outstanding cheque amount.</li>
                      <li>If they fail to pay within 15 days, you can file a criminal complaint in the Magistrate's Court within the next 30 days.</li>
                    </ol>
                    <p className="text-sm md:text-base leading-relaxed">
                      Section 138 is a criminal proceeding. The signing director faces an imprisonment term of up to 2 years, a fine of up to double the cheque amount, or both. We draft and serve these notices to ensure the company clears its obligations.
                    </p>
                  </div>
                </section>

                {/* Damages for Delayed exit documents */}
                <section id="damages-career-disruption" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Damages for Delayed exit documents</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Withholding relieving letters and experience certificates can cause severe damage. Exited employees often face the cancellation of a new job offer or a delay in their new joining date, resulting in career gaps and financial losses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 73 of the Indian Contract Act, 1872</strong>, you have the right to claim compensation for these damages. We calculate the exact financial losses you suffered due to the delay and add them as special damages in your legal notice.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This includes the loss of salary for the delayed period, mental harassment damages, and compensation for any damage to your professional reputation caused by the employer's actions.
                    </p>
                  </div>
                </section>

                {/* Preserving Handover Sign-off Records */}
                <section id="preserving-exit-evidence-trail" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Preserving Handover Sign-off Records</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To successfully recover your FNF settlement, you must compile documentary evidence before exit clearance. Establishments often block access to corporate portals, making it difficult to retrieve records later.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Compile a secure personal backup of the following files:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Employment Baseline:</strong> Appointment Letter, salary slips, increment letters, and copy of the resignation email with timestamp.</li>
                      <li><strong>Waivers &amp; Clearances:</strong> Emails accept the resignation, notice period waiver approvals, and physical or digital IT clearance logs.</li>
                      <li><strong>Gratuity &amp; Bonus Proofs:</strong> UAN provident fund entries, Form 26AS, performance appraisal reviews, and target achievement dashboards.</li>
                      <li><strong>Communications:</strong> PDFs of Slack, MS Teams, or WhatsApp messages where managers promise FNF credit dates.</li>
                    </ul>
                  </div>
                </section>

                {/* FNF Recovery Case Studies */}
                <section id="exit-recovery-case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">FNF Recovery Case Studies</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal-tech platform has assisted thousands of employees in recovering their exit settlements. Below are two representative case studies:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Exit Clearance Hold</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹4.2 Lakhs and Relieving Letter</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A software engineer in Bangalore was denied her relieving letter and FNF for four months, with the company claiming she did not complete a proper handover. We served a legal notice highlighting Shops Act violations and director liability. The company processed the F&amp;F and released all documents within 9 days.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Notice Pay Deduction Challenged</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Restored ₹1.8 Lakhs in Notice Pay Recovery</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A sales lead resigned with manager approval for a notice period waiver. However, HR deducted ₹1.8 Lakhs for notice buy-out in the FNF sheet. We helped him file a dispute on the SAMADHAN portal, showing the manager&apos;s waiver email. The company settled the dispute during conciliation, paying the deducted amount in full.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Client Testimonials & Ratings */}
                <section id="client-exit-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Testimonials &amp; Ratings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((rev) => (
                      <div key={rev.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex items-center mb-3">
                          <span className="text-yellow-500 text-sm">★★★★★</span>
                          <span className="text-xs text-slate-400 ml-2">Verified Client</span>
                        </div>
                        <p className="text-sm text-slate-700 italic mb-4">
                          &quot;{rev.review}&quot;
                        </p>
                        <h4 className="font-extrabold text-xs text-slate-900">— {rev.name}</h4>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Why LegalRecovery Platform? */}
                <section id="why-choose-legalrecovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why LegalRecovery Platform?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled recovery platform. We combine the legal authority of veteran labor advocates with advanced workflow automation to deliver unmatched speed, transparency, and resolution rates. Here is what sets us apart:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Attorney-Drafted Quality:</strong> Your notice is individually reviewed and drafted by a qualified legal professional, ensuring precise statutory citations tailored to your specific case facts.</li>
                      <li><strong>VC/Director Escalation:</strong> We do not just email HR. We dispatch physical registered letters to the registered company office and personal residences of all active directors, maximizing pressure.</li>
                      <li><strong>Digital Dashboard:</strong> Track the drafting progress, post dispatch tracking, and delivery status of your legal notices in real-time from your secure client dashboard.</li>
                      <li><strong>Transparent Flat Pricing:</strong> No hourly bills, no retention fee surprises. You pay a single transparent flat fee for the entire notice pipeline.</li>
                    </ul>
                  </div>
                </section>

                {/* Frequently Asked Questions */}
                <section id="faq-accordion" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                      const faqId = `faq-${idx}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div 
                          key={idx} 
                          className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-350"
                        >
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="flex justify-between items-center w-full text-left p-4 font-bold text-sm text-slate-900 hover:bg-slate-50/50 focus:outline-none transition-colors cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span className={`transform transition-transform duration-205 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-650 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-24">
              {/* Call Support Card */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your unpaid salary case with legal experts. We serve verified notices with full compliance support.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Recovery Now
                </button>
              </div>
            </div>

          </div>
        </div>
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </div>
    </>
  );
}
