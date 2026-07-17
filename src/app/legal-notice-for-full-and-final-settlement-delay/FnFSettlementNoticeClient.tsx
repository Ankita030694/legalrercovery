'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What is the legal timeline for releasing the Full & Final (FnF) settlement?",
    answer: "Under the Payment of Wages Act and state Shop and Establishment regulations, the employer must clear the FnF settlement, including unpaid salaries and accrued leaves, within 7 to 30 days of the employee's last working day. Any delay beyond this statutory timeline is a direct violation of labor laws, making the company liable to pay penal interest. State acts like Maharashtra mandate payment within 3 working days, while others align with a maximum 30-day window from the date of separation."
  },
  {
    question: "Can an employer withhold my relieving letter if there is a dispute?",
    answer: "No. A relieving letter or experience certificate is a factual record of your service and cannot be withheld by the employer as a bargaining tool to settle commercial or operational disputes. Withholding these essential career documents constitutes a serious breach of contract and an unfair labor practice. You can initiate legal action for damages if a withheld letter causes you to lose a new job opportunity. Courts have consistently held that professional documents cannot be linked to outstanding monetary disputes."
  },
  {
    question: "What should I do if the college refuses to return my original certificates?",
    answer: "Under UGC and AICTE regulations, no higher education institution can legally retain a student's original academic certificates (such as 10th or 12th marksheets, passing certificates, or migration certificates) as leverage to force them to pay outstanding fees. Withholding original documents is a punishable offense. If a college does this, you should immediately file a complaint with the regional university board and serve a legal notice to the registrar."
  },
  {
    question: "What should I do if the employer ignores my legal notice for FnF?",
    answer: "If the company ignores your legal notice, it establishes their refusal to settle the dispute amicably. This silence strengthens your position when approaching labor authorities. You can immediately file a claim before the Labor Commissioner or file a civil Summary Suit under Order 37 of the CPC. To prepare for this escalation, you should check what to do if a legal notice is ignored in India to coordinate your litigation strategy and understand the court proceedings."
  },
  {
    question: "Can my employer deduct money from my FnF for training costs?",
    answer: "An employer can deduct training costs only if there is a valid, reasonable employment bond and the company has incurred actual, documented expenses for your specialized training. Vague, one-sided bond clauses designed to penalize employees for resigning are generally unenforceable under Section 27 of the Indian Contract Act. The company cannot unilaterally adjust these hypothetical costs against your earned salary or statutory dues."
  },
  {
    question: "How do Shop and Establishment Acts regulate the FnF process?",
    answer: "Shop and Establishment Acts are state-specific legislations that govern working conditions in offices, shops, and commercial spaces. Most state acts (like the Delhi, Maharashtra, or Karnataka Shop and Establishment Acts) mandate that all earned wages must be paid to the separated employee within a maximum of 3 to 7 working days from the date of termination or resignation, overriding any company policies or internal clearance cycles."
  },
  {
    question: "What is the penalty for employers who delay salaries and FnF dues?",
    answer: "Under the Payment of Wages Act, labor authorities can direct the employer to pay the delayed wages along with compensation that can range up to ten times the delayed amount. Additionally, civil courts can order the company to pay interest of up to 15% per annum on the withheld dues, along with litigation costs, for willful default, and directors can face prosecution for non-compliance."
  },
  {
    question: "Can I file a case in the Labor Court if I am in a managerial role?",
    answer: "The Industrial Disputes Act defines a 'workman' and generally excludes employees who are employed in managerial, administrative, or supervisory roles drawing salaries above statutory limits. If you are in a managerial role, your primary legal remedy is filing a civil suit under Order 37 of the Code of Civil Procedure (CPC) for recovery of dues based on your employment contract, rather than approaching the labor commissioner."
  }
];

const reviews = [
  {
    author: "Shyam Sundar (Pune)",
    rating: "5",
    text: "My previous IT employer withheld my FnF settlement of ₹2.4 Lakhs and refused to issue my relieving letter because I resigned during a critical project. I tried follow-ups for three months to no avail. We drafted and sent a formal legal notice. Within 10 days of receiving the notice, the HR team released my full payment, PF transfer, and the relieving letter. Citing labor laws was the key."
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
      "name": "Legal Notice for Full and Final Settlement Delay",
      "item": "https://www.legalrecovery.in/legal-notice-for-full-and-final-settlement-delay"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice to Employer for Withholding Salary & FnF Settlement | Recovery",
  "description": "How to legally compel a company to release your withheld Full & Final settlement, gratuity, and relieving letter using labour and contract laws.",
  "image": "https://www.legalrecovery.in/og-fnf-delay.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Bhiya",
    "url": "https://www.legalrecovery.in/author/anujbhiya",
    "image": "https://www.legalrecovery.in/anujbhiya.png"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17"
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
  "name": "Employer FnF Delay Notice Guide",
  "image": "https://www.legalrecovery.in/og-fnf-delay.png",
  "description": "Comprehensive legal guide to recovering withheld salaries, gratuity, and relieving letters from defaulting companies in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "1"
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.text
  }))
};

export default function FnFSettlementNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "labor-laws", title: "Labor Laws Governing Full & Final (FnF) Settlements" },
    { id: "drafting-notice", title: "Drafting a Legal Notice for Unpaid FnF Dues" },
    { id: "before-after", title: "Before vs. After: Sending a Notice to Withholding Companies" },
    { id: "employer-excuses", title: "Common Employer Excuses and Legal Counters" },
    { id: "labor-commissioner-claim", title: "Step-by-Step Procedure to File a Claim Before the Labor Commissioner" },
    { id: "summary-suit-cpc", title: "Filing a Summary Suit Under Order 37 of the CPC for Salary Recovery" },
    { id: "director-liability", title: "Penalties and Prosecution of Company Directors under Labor Laws" },
    { id: "pf-rules", title: "Provident Fund (PF) Transfer and Withdrawal Rules during Separation" },
    { id: "recovery-timelines", title: "FnF Recovery Timelines and Success Stories" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "FnF Delay Notice", href: "/legal-notice-for-full-and-final-settlement-delay" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        <header className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Employment Dispute Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Legal Notice to Employer for <span className="text-[#DC2626]">Withholding Salary &amp; FnF Settlement</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              How to legally compel a company to release your withheld Full &amp; Final settlement, gratuity, and relieving letter using labour and contract laws.
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-8xl py-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  In India, withholding an employee's salary, gratuity, or relieving letter beyond 7 to 30 days post-resignation is a direct violation of the Payment of Wages Act and local Shop and Establishment regulations. Employers who intentionally delay Full &amp; Final (FnF) settlements can be sued for interest charges up to 15% per annum.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Resigning from a job is a standard career step, but the transition period can sometimes lead to disputes regarding outstanding dues. Many separated employees face situations where companies delay or withhold their Full and Final settlement. Employers may use various excuses, such as pending handovers, unreturned assets, or non-compete allegations, to delay payouts. In some cases, companies go as far as withholding the relieving letter or experience certificate. This can prevent the employee from joining their next company, causing significant career damage. Under Indian labor jurisprudence, wages earned cannot be adjusted against hypothetical claims. If you are struggling with a defaulting employer, the law provides robust remedies to enforce your rights. The first formal step is serving a legal notice to the management.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Before initiating formal litigation, it is helpful to look at the legal protections available to corporate workers. If you are seeking to recover unpaid dues, you can refer to our guides on <Link href="/how-to-recover-unpaid-salary-legally" className="text-[#DC2626] hover:underline font-medium">how to recover unpaid salary legally</Link> to understand your options under labor courts. For disputes specifically involving withheld documents, you should check our details on <Link href="/employer-withholding-relieving-letter-legal-action" className="text-[#DC2626] hover:underline font-medium">employer withholding relieving letter legal action</Link> to draft your demand. Additionally, understanding the complete process is essential for preparing your case files. You can review the <Link href="/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india" className="text-[#DC2626] hover:underline font-medium">what are the legal steps to recover unpaid salary from an employer in India</Link> guide to outline your recovery plan. Let us analyze the statutory timelines and regional rules governing separated employees.
                </p>
              </div>

              <section id="labor-laws" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Labor Laws Governing Full &amp; Final (FnF) Settlements
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Employment relationships in India are governed by central labor statutes and state-specific regulations. These rules outline clear timelines for disbursing outstanding salaries, PF dues, accrued leaves, and gratuity benefits.
                  </p>
                </div>

                <div className="space-y-12 mt-8">
                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="the-payment-of-wages-act-timeline-to-disburse-salaries" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      The Payment of Wages Act: Timeline to Disburse Salaries
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      The Payment of Wages Act, 1936 regulates the payment of salaries to specific categories of employees. Under Section 5 of the Act, if an employee's services are terminated by the employer, the wages earned by them must be paid before the expiry of the second working day from the date of termination. In cases of resignation, the timeline is typically governed by the employment contract, but it cannot exceed the statutory limit of 30 days.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      The definition of 'wages' under Section 2(vi) includes basic salary, dearness allowance, travel allowances, and any other remuneration payable under the contract. The employer cannot make arbitrary deductions from these wages except those authorized under Section 7, such as income tax, PF contributions, or recovery of advances. Any unauthorized deduction or delay in payment constitutes an offense, making the employer liable to pay compensation to the worker.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      Furthermore, Section 15 of the Payment of Wages Act allows employees to present claims before the regional Authority for delayed wages. If the Authority finds the employer guilty of willful withholding, they can order the company to pay the delayed amount along with substantial compensation. This legal provision provides significant protection for employees, ensuring that corporate management cannot use delayed payments as leverage.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="shop-establishment-acts-regional-state-rules-for-fnf" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Shop &amp; Establishment Acts: Regional State Rules for FnF
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      For corporate offices, IT parks, retail showrooms, and startups, the primary governing law is the state-specific Shop and Commercial Establishment Act. Each state (such as Karnataka, Maharashtra, Delhi, or Tamil Nadu) has its own rules regarding the timelines for separated employees.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      For instance, the Maharashtra Shops and Establishments Act mandates that all accumulated wages must be paid to the employee within three working days of resignation or termination. Similarly, the Karnataka Shops and Establishments Act outlines strict rules for salary disbursement, ensuring that companies cannot delay FnF payments by citing internal audit cycles. If the company fails to pay within the state-mandated timeline, the employee can approach the local Labor Inspector, who has the authority to inspect the company's wage registers and order immediate disbursement.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      In the National Capital Territory of Delhi, the Delhi Shops and Establishments Act requires that all outstanding dues be settled within a short window following separation. Non-compliance with these regional rules can lead to the suspension or non-renewal of the company's establishment registration, which acts as a strong deterrent for employers who try to delay payouts.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="payment-of-gratuity-act-legal-timelines-and-claims" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Payment of Gratuity Act: Legal Timelines and Claims
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      Gratuity is a statutory benefit payable to employees who have completed five years of continuous service with an organization. Under Section 7 of the Payment of Gratuity Act, 1972, the employer must determine the gratuity amount and give notice in writing to the employee and the controlling authority as soon as the gratuity becomes payable.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      The employer must disburse the gratuity amount within 30 days from the date it becomes payable. If the company fails to pay within this period, they must pay simple interest on the gratuity amount from the due date at the rate specified by the central government (currently aligned with long-term bank deposit rates). The only exception is if the delay is due to the employee's fault and the employer has obtained permission from the controlling authority to withhold interest.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      If an employer fails to pay the gratuity on time, the employee can file an application in Form N before the Controlling Authority. This authority has the judicial power to conduct hearings, summon company representatives, and issue a certificate to the District Collector to recover the gratuity amount as arrears of land revenue, ensuring that employees have a clear path to reclaim their funds.
                    </p>
                  </div>
                </div>
              </section>

              <section id="drafting-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting a Legal Notice for Unpaid FnF Dues
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A legal notice to an employer must be drafted with care, focusing on contractual terms and statutory labor rules. It must detail the date of joining, resignation date, notice period served, and the exact breakdown of unpaid dues (including basic salary, leaf encashment, bonuses, and gratuity). It must warn the company of potential labor commission filings and civil suits if the dues are not cleared within 15 days of receiving the notice.
                  </p>
                  
                  <div className="bg-[#111827] text-slate-300 p-6 rounded-2xl border border-slate-800 my-6 font-mono text-xs overflow-x-auto leading-relaxed">
                    <p className="text-white font-bold mb-2">FnF Notice Key Elements:</p>
                    <p>1. Parties: Address to the Managing Director, HR Head, and Registered Office</p>
                    <p>2. Appointment Details: Reference the original Employment Contract and Designation</p>
                    <p>3. Notice Period: Detail notice submission date, last working day, and handover status</p>
                    <p>4. Dues Quantification: List basic salary, gratuity, bonus, and leaf encashment amounts</p>
                    <p>5. Document Demands: Explicitly demand the Relieving Letter and Experience Certificate</p>
                    <p>6. Legal Basis: Cite Payment of Wages Act and state Shops and Establishments Act</p>
                    <p>7. Cure Period: Grant a 15-day window to settle before initiating legal action</p>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Sample Notice Template for Withheld FnF Settlement</h3>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner font-sans text-xs md:text-sm text-slate-700 leading-relaxed space-y-4">
                    <p className="font-bold">LEGAL NOTICE</p>
                    <p>To,<br />The Managing Director / Head of HR<br />[Company Name Private Limited]<br />[Registered Office Address]</p>
                    <p>Dear Sir/Madam,</p>
                    <p>Under instructions from my client, [Employee Name], resident of [Address], I hereby serve you with this legal notice regarding the non-payment of outstanding Full and Final (FnF) dues and the withholding of professional documents.</p>
                    <p>My client joined your organization on [Joining Date] as [Designation] under the employment contract dated [Contract Date]. My client resigned from their services on [Resignation Date] and served the mandatory notice period of [Number of Months] months. My client's last working day was [Last Working Day].</p>
                    <p>Despite completing all handover formalities and obtaining clearances from all departments, your company has failed to release the FnF settlement amounting to ₹[Amount] and has withheld the relieving letter and experience certificate. This failure is a direct violation of Section 5 of the Payment of Wages Act and the state Shop and Establishment Act.</p>
                    <p>We hereby call upon you to release the outstanding amount of ₹[Amount] along with interest at 18% per annum, and issue the relieving letter within 15 days of receiving this notice. Failure to do so will compel my client to initiate civil and criminal proceedings before the Labor Commissioner and appropriate courts, making your company liable for all costs and consequences.</p>
                    <p>Yours faithfully,<br />[Advocate Name]</p>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Sending this notice via Registered Post with Acknowledgment Due (RPAD) creates a court-admissible record. Most established companies have compliance teams that will prioritize clearing these dues once they receive a formal lawyer's notice, as it prevents their board of directors from being named in labor disputes.
                  </p>
                </div>
              </section>

              <section id="before-after" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Before vs. After: Sending a Notice to Withholding Companies
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If you are hesitant about sending a formal notice, it is helpful to look at how the dynamics change before and after the notice is delivered:
                  </p>

                  {/* BEFORE VS AFTER WORKFLOW */}
                  <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 my-8 shadow-sm">
                    <h4 className="text-lg font-bold mb-4 text-[#DC2626]">Before vs. After Comparison</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-red-400 font-bold uppercase tracking-wider text-xs block mb-2">Before Notice</span>
                        <p className="text-slate-300 leading-relaxed">
                          The HR team ignores your emails or gives vague timelines. You are blocked from accessing HR portals, and you cannot join your new job without a relieving letter.
                        </p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs block mb-2">After Notice</span>
                        <p className="text-slate-300 leading-relaxed">
                          The company's legal team instructs HR to release the relieving letter and clear the outstanding dues to prevent corporate litigation and labor commission audits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="employer-excuses" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Common Employer Excuses and Legal Counters
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mb-8">
                  <p className="text-sm md:text-base leading-relaxed">
                    Defaulting employers rely on a standard set of excuses to withhold employee payments. Let us review the common excuses and the legal counters to them:
                  </p>
                </div>

                {/* RED FLAGS LIST (Common Excuses) */}
                <div className="space-y-4">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Excuse: "You did not complete a proper handover."</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        **Counter**: Handover is an operational process. If you served your notice period and attended office, the company cannot withhold your earned salary for operational details unless they prove willful damage in a civil court.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Excuse: "You signed a non-compete bond."</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        **Counter**: Post-employment non-compete agreements are void under Section 27 of the Indian Contract Act, 1872. The company cannot restrict your right to work or withhold your salary based on these illegal clauses.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Excuse: "Internal audit is pending."</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        **Counter**: Internal company processes cannot override statutory labor timelines. Under Shop and Establishment acts, wages must be cleared within 3 to 7 working days, regardless of audit status.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Supreme Court Rulings on Restraint of Trade and Employee Bonds</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Indian courts have maintained a consistent stance regarding employee bonds and non-compete clauses. In the case of *Superintendence Company of India v. Krishan Murgai*, the Supreme Court held that post-service covenants in restraint of trade are void and unenforceable under Section 27 of the Indian Contract Act. The court ruled that an employee cannot be prevented from taking up employment with a competitor after the termination of contract.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Similarly, in *Toshniwal Brothers Private Limited v. Eswar Prasad*, the court established that training bonds are enforceable only if the company has incurred actual, documented expenses for specialized training that enhanced the employee's skills. Employers cannot use vague, high-value penalty clauses to block employees from resigning, nor can they adjust these hypothetical penalty amounts against earned salary, leaf encashment, or gratuity.
                  </p>
                </div>
              </section>

              <section id="labor-commissioner-claim" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Step-by-Step Procedure to File a Claim Before the Labor Commissioner
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If the employer ignores the legal notice or refuses to settle your dues, the next step is filing a formal complaint before the Regional Labor Commissioner. The Labor Commissioner's office has jurisdiction over commercial establishments under the state Shops and Establishments Act. Filing a complaint is a straightforward process that can be done online or physically at the local labor office.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When filing your claim, you must submit: 1) Your employment contract or appointment letter, 2) Pay slips for the last three months, 3) Bank statements showing previous salary credits, 4) Resignation email and proof of serving the notice period, 5) The legal notice served to the company, and 6) Proof of delivery of the notice. The commissioner will verify these documents and issue a notice to the employer to attend a joint conciliation meeting.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    During the conciliation proceedings, the Labor Commissioner acts as a mediator to resolve the dispute. The employer is required to present their wage registers and explain the delay. In most cases, companies settle the dues during these hearings to avoid prosecution and fines under the Payment of Wages Act. If conciliation fails, the commissioner can refer the matter to the Labor Court for formal adjudication.
                  </p>
                </div>
              </section>

              <section id="summary-suit-cpc" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Filing a Summary Suit Under Order 37 of the CPC for Salary Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    For managerial and supervisory employees who do not qualify as 'workmen' under the Industrial Disputes Act, the primary civil remedy is filing a Summary Suit under Order 37 of the Code of Civil Procedure (CPC). A Summary Suit is a fast-track civil remedy designed for recovering liquidated debts arising out of written contracts, including employment agreements.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Unlike regular civil suits, a Summary Suit does not involve a lengthy trial. Once the suit is filed, the court issues a summons to the employer. The employer must enter an appearance within 10 days of receiving the summons. If they fail to do so, the court presumes the allegations to be true and passes an immediate decree in favor of the employee. If the employer enters an appearance, they must apply for 'leave to defend' by showing a genuine defense. If their defense is deemed frivolous or sham, the court rejects it and orders immediate payment.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Filing a Summary Suit is highly effective for recovering high-value FnF settlements, bonuses, and gratuity, as it puts immense pressure on the company's directors. The court can also order the company to pay interest of up to 15% per annum on the withheld amount from the due date, along with the employee's litigation costs.
                  </p>
                </div>
              </section>

              <section id="director-liability" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Penalties and Prosecution of Company Directors under Labor Laws
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Under Section 20 of the Payment of Wages Act and various state Shops and Establishments Acts, withholding salaries and statutory dues is a punishable offense. Company directors and partners can face criminal prosecution, fines, and even imprisonment for willful default. The court can direct the local police to inspect the company's premises and seize accounting records.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When a legal notice is addressed directly to the company directors by name, it highlights their personal liability. Most corporate directors will instruct their HR and legal departments to settle the dispute immediately, as they do not want to risk criminal prosecution or be summoned by a labor court over employee salary disputes.
                  </p>
                </div>
              </section>

              <section id="pf-rules" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Provident Fund (PF) Transfer and Withdrawal Rules during Separation
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    In addition to salary and gratuity, the Full &amp; Final settlement must include the proper processing of your Provident Fund (PF) transfer or withdrawal. Under the Employees' Provident Funds and Miscellaneous Provisions Act, 1952, the employer is legally required to mark the date of exit on the Unified Portal within 30 days of the last working day. If the company fails to mark the date of exit or refuses to credit their matching share of contributions, they are liable for penalties under Section 14B of the Act.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Many employers use the PF exit date as leverage, refusing to mark it until the employee signs one-sided clearance forms. This is completely illegal. If your employer refuses to mark your exit date or delays contribution credits, you can submit a complaint to the regional PF Commissioner. The Commissioner has the power to summon company records and direct the bank to freeze the company's accounts to recover unpaid PF contributions, making this a powerful tool for employee protection.
                  </p>
                </div>
              </section>

              <section id="recovery-timelines" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  FnF Recovery Timelines and Success Stories
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Most employment recovery disputes are resolved during the initial notice phase. Companies want to avoid the legal expenses and negative branding associated with labor court trials.
                  </p>

                  {/* TIMELINE */}
                  <div className="my-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Day 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 1 to 15: Notice Period</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          The legal notice is served to the company's directors. The company's compliance department has 15 days to review the notice and clear the outstanding dues.
                        </p>
                      </div>
                    </div>

                    {/* Day 16 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 16: Escalation to Labor Commissioner</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If the company fails to respond, a formal claim is filed before the regional Labor Commissioner. The commissioner will issue summons to the company representatives.
                        </p>
                      </div>
                    </div>

                    {/* Day 30 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 30 to 60: Mediation and Settlement</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          The Labor Commissioner mediates the dispute. In over 80% of cases, companies release the FnF dues and relieving letters during these hearings to avoid penalties.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed mt-6">
                    A senior engineer in Bengaluru resigned after serving a 3-month notice period. The company withheld their FnF dues of ₹3.5 Lakhs, claiming they did not complete a database handover. The engineer sent a formal notice citing the Karnataka Shop and Establishments Act. The company released the entire amount along with the relieving letter within a week, avoiding further escalation.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    By understanding these timelines, employees can track the progress of their claims. In most cases, serving a formal legal notice prepared by an advocate is sufficient to resolve the dispute, as companies prefer to settle outstanding dues out of court rather than attend hearings before the Labor Commissioner.
                  </p>
                </div>
              </section>

              <section id="frequently-asked-questions" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = expandedFaqs.includes(`faq-${index}`);
                    return (
                      <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <h3 className="font-bold text-sm md:text-base text-slate-800 pr-4">{faq.question}</h3>
                          <span className={`transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#DC2626]' : 'text-slate-400'}`}>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        <div 
                          className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <p className="text-sm text-slate-650 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-24">
              {/* Call Support Card */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your money recovery case with legal experts. We draft and serve legally compliant notices tailored to your transaction.
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

        {/* REVIEWS SECTION */}
        <section className="bg-slate-900 text-white py-16 md:py-24 border-t border-slate-950">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-black mb-4">FnF Delay Settlement Reviews</h2>
              <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                Read how separated employees have successfully resolved FnF delays and retrieved relieving letters using our guides.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 text-left max-w-3xl mx-auto">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50 shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed italic mb-6 font-medium">
                      &quot;{review.text}&quot;
                    </p>
                  </div>
                  <div className="border-t border-slate-700 pt-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-white">{review.author}</h4>
                      <p className="text-[10px] text-slate-500 font-medium">Verified Employee</p>
                    </div>
                    <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-700 font-mono">
                      Rating: {review.rating}.0
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </main>
    </>
  );
}
