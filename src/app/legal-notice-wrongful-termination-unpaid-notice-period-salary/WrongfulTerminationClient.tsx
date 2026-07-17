'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What constitutes wrongful termination under Indian labor laws?",
    answer: "Wrongful termination occurs when an employer dismisses an employee in violation of the employment contract, state Shops and Establishments Act, or central labor laws. This includes firing an employee without the contractually mandated notice period, without paying severance, terminating them during maternity leave, or dismissing them without conducting a fair domestic inquiry for alleged misconduct."
  },
  {
    question: "Can an employer force me to resign immediately?",
    answer: "No. A forced resignation is legally categorized as 'constructive dismissal' or wrongful termination. Employers often use pressure tactics, such as threat of termination or negative background checks, to force resignations. If you are forced to resign, you should document the coercion, send a formal protest email, and refuse to sign one-sided settlement sheets before consulting legal counsel."
  },
  {
    question: "What is the notice period salary rule in India?",
    answer: "Under the Industrial Disputes Act and state Shops and Establishments Acts, if an employer terminates your services without cause, they must either let you serve the notice period defined in your contract or pay you the equivalent basic salary and allowances in lieu of that notice period. Withholding notice pay is a breach of contract and an illegal practice."
  },
  {
    question: "How is retrenchment compensation calculated under the Industrial Disputes Act?",
    answer: "Under Section 25F of the Industrial Disputes Act, 1947, a workman who has completed one year of continuous service is entitled to retrenchment compensation. This is calculated at the rate of 15 days' average pay for every completed year of continuous service or any part thereof in excess of six months, along with one month's notice or wages in lieu of notice."
  },
  {
    question: "What legal options do I have if I am terminated during notice period?",
    answer: "If you are terminated after resigning and during your notice period, the employer must still pay your salary for the remaining notice period days. If they refuse, you can serve a legal notice citing breach of contract. For unpaid notices, you can refer to our guides on <Link href=\"/legal-notice-for-recovery-of-money\" className=\"text-[#DC2626] hover:underline font-medium\">legal notice for recovery of money</Link> to initiate recovery proceedings."
  },
  {
    question: "Can an employer terminate me without cause if my contract has an 'at-will' clause?",
    answer: "While many employment contracts contain 'termination by convenience' clauses allowing either party to end the contract with notice, Indian courts do not recognize pure 'at-will' employment. Employers must show reasonable cause for termination and comply with state-specific Shops and Establishments Acts, which mandate minimum notice or severance pay."
  },
  {
    question: "What is the role of the Labor Commissioner in wrongful termination disputes?",
    answer: "If you file a complaint, the Labor Commissioner will summon the employer for conciliation hearings to negotiate a settlement. If the employer refuses to settle, the commissioner will refer the dispute to the Labor Court. For steps to take when facing non-cooperative employers, check <Link href=\"/what-to-do-if-legal-notice-is-ignored-india\" className=\"text-[#DC2626] hover:underline font-medium\">what to do if legal notice is ignored in India</Link> to plan your court escalation."
  },
  {
    question: "Can I claim compensation for mental harassment in a wrongful dismissal case?",
    answer: "Yes. In addition to recovering unpaid notice salary and severance, you can claim damages for wrongful dismissal, loss of reputation, and mental harassment before a civil court or consumer commission (where applicable). Serving a formal legal notice that quantifies these damages puts immense pressure on corporate legal teams to settle."
  }
];

const reviews = [
  {
    author: "Nisha Sharma (Mumbai)",
    rating: "5",
    text: "I was terminated overnight by a fintech startup without any explanation, and they refused to pay my 2-month notice period salary. I served a formal legal notice citing the Maharashtra Shops and Establishments Act. The company immediately agreed to an out-of-court settlement, releasing my full salary and experience letter. Very helpful guide."
  },
  {
    author: "Vikram Malhotra (Bengaluru)",
    rating: "5",
    text: "After 3 years of service, my company forced me to resign by threatening my background checks. I recorded the conversation and served a legal notice for constructive dismissal. The HR director intervened and cleared my 3-month severance pay along with a positive recommendation letter. Knowing your rights is critical."
  },
  {
    author: "Rohan Kapoor (Gurugram)",
    rating: "5",
    text: "This guide helped me recover ₹2.8 Lakhs in unpaid notice pay. The company laid me off citing restructuring but refused notice compensation. A formal lawyer notice citing the Industrial Disputes Act forced their legal team to settle the dues within 10 days. Do not let employers bully you."
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
      "name": "Wrongful Termination Legal Notice & Unpaid Notice Salary Recovery",
      "item": "https://www.legalrecovery.in/legal-notice-wrongful-termination-unpaid-notice-period-salary"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Wrongful Termination Legal Notice & Unpaid Notice Salary Recovery",
  "description": "Sudden termination without cause or forced resignation? Learn how to recover unpaid notice period salary and severance pay under Indian labor laws.",
  "image": "https://www.legalrecovery.in/og-termination.png",
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
  "name": "Wrongful Termination Notice Guide",
  "image": "https://www.legalrecovery.in/og-termination.png",
  "description": "Comprehensive legal guide to recovering unpaid notice period salaries, severance packages, and disputing forced resignations in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "3"
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

export default function WrongfulTerminationClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "wrongful-termination", title: "Understanding Wrongful Termination and Forced Resignation in India" },
    { id: "severance-rules", title: "Notice Period Pay and Severance Package Rules" },
    { id: "step-procedure", title: "Step-by-Step Procedure to Dispute a Wrongful Termination" },
    { id: "drafting-notice", title: "Drafting a Wrongful Termination Legal Notice" },
    { id: "before-after", title: "Before vs. After: Sending a Notice to the Employer" },
    { id: "director-liability", title: "Legal Liabilities of Directors and Officers for Wrongful Dismissal" },
    { id: "success-stories", title: "Wrongful Termination Success Stories" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Termination Notice Guide", href: "/legal-notice-wrongful-termination-unpaid-notice-period-salary" }
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
              Labor Law Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Wrongful Termination &amp; <span className="text-[#DC2626]">Notice Salary Recovery</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Sudden termination without cause or forced resignation? Learn how to recover unpaid notice period salary and severance pay under Indian labor laws.
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
                  Under the Industrial Disputes Act and state-specific Shops and Establishments Acts, an employer cannot terminate an employee suddenly without cause or force their resignation without paying the contractually defined notice period salary and severance package. If you have been wrongfully terminated, serving a formal legal notice is the first step to recover your dues and challenge the dismissal.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Losing a job is a highly stressful event, but the situation becomes significantly worse when the separation is executed in an illegal or arbitrary manner. Many corporate employers, startups, and private companies in India routinely bypass statutory labor regulations to cut costs. They terminate employees overnight without cause, refusing to pay their notice period salary or contractually defined severance packages. In other cases, companies resort to forced resignations. They pressure employees to resign immediately, threatening to block their relieving letters or ruin their background verification check if they do not comply. Under Indian labor jurisprudence, a forced resignation is legally treated as constructive dismissal, making the company liable to pay full severance and damages. The law provides robust protections to safeguard employees against these corporate abuses.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  If you are seeking to dispute an arbitrary termination and recover your outstanding dues, you must begin by serving a formal legal demand to the company's directors. You can consult our comprehensive guide on the <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> to outline your financial demands and understand the formal drafting structure. If you wish to explore amicable avenues of resolution before heading to court, there are effective strategies you can employ. You can read about <Link href="/how-to-recover-money-without-going-to-court-india" className="text-[#DC2626] hover:underline font-medium">how to recover money without going to court in India</Link> to evaluate out-of-court settlements and mediation. Additionally, if the employer remains completely non-cooperative and ignores your notice, you must plan your next steps. You can review the <Link href="/what-to-do-if-legal-notice-is-ignored-india" className="text-[#DC2626] hover:underline font-medium">what to do if legal notice is ignored in India</Link> guide to prepare for labor court or civil suit escalations. Let us analyze the statutory rules governing wrongful termination.
                </p>
              </div>

              <section id="wrongful-termination" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding Wrongful Termination and Forced Resignation in India
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Employment contracts in India are subject to federal and state labor laws. These laws override any one-sided clauses in appointment letters that attempt to restrict employee rights.
                  </p>
                </div>

                <div className="space-y-12 mt-8">
                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="industrial-disutes-act-and-retrenchment-rules" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Industrial Disputes Act and Retrenchment Rules
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      The Industrial Disputes Act, 1947 is the primary central legislation safeguarding the rights of workmen. Under Section 2(s) of the Act, a 'workman' includes any person employed in an industry to do manual, unskilled, skilled, technical, operational, clerical, or supervisory work. It excludes individuals employed in managerial or administrative capacities.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      Section 25F of the Act mandates that no workman who has completed one year of continuous service can be retrenched (laid off) until they have been given one month's notice in writing indicating the reasons for retrenchment, or have been paid wages in lieu of such notice. Additionally, the employer must pay retrenchment compensation equivalent to 15 days' average pay for every completed year of continuous service. If an employer fails to comply with these conditions, the retrenchment is deemed illegal, and the workman can demand reinstatement with back wages.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="state-shops-and-establishments-acts-governing-termination" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      State Shops and Establishments Acts Governing Termination
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      For white-collar corporate employees, IT professionals, and service sector workers who do not qualify as 'workmen', the primary governing laws are the state-specific Shops and Commercial Establishments Acts.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      For example, the Karnataka Shops and Commercial Establishments Act and the Maharashtra Shops and Establishments Act outline clear termination guidelines. Under these acts, an employer cannot terminate an employee who has been in continuous service for more than six months without providing at least one month's notice or one month's salary in lieu of notice. The termination must be based on a reasonable cause, such as redundancy or misconduct. In cases of alleged misconduct, the employer must conduct a fair domestic inquiry, giving the employee a reasonable opportunity to present their case, before terminating their services.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="constitutional-protections" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Constitutional Protections and Public Sector Employee Rights
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      While private sector employees are primarily governed by contract terms and state Shops Acts, public sector employees in India enjoy constitutional protections under Article 311 of the Constitution. Article 311 provides that no civil servant can be dismissed or removed by an authority subordinate to that by which they were appointed, and no such person can be dismissed except after an inquiry in which they have been informed of the charges and given a reasonable opportunity of being heard.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      For private sector workers, though Article 311 does not directly apply, courts have integrated the principles of natural justice into private employment contracts. If a company terminates an employee on allegations of fraud or misconduct without holding a proper inquiry, it violates the principles of natural justice, making the termination wrongful in the eyes of law. Citing these principles in your legal notice warns the company that they cannot bypass due process.
                    </p>
                  </div>
                </div>
              </section>

              <section id="severance-rules" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Notice Period Pay and Severance Package Rules
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Notice period pay and severance packages are statutory rights designed to provide a financial cushion to employees during transition periods. If an employer terminates your services with immediate effect, they must clear all outstanding dues in your Full &amp; Final (FnF) settlement.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The FnF settlement must include: 1) Earned basic salary up to the last working day, 2) Accrued leaf encashment, 3) Contractual bonus or performance incentives, 4) Gratuity (if you completed 5 years of service), and 5) Notice period salary in lieu of notice. If an employer tries to deduct training costs, recruitment fees, or project damages from your FnF without documented proof of losses, it constitutes an illegal deduction, and you can recover the withheld amount through a legal notice.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When a company releases a severance package or notice period pay as part of the Full &amp; Final settlement, the taxation of these amounts is governed by Section 10(10B) of the Income Tax Act, 1961. Under this section, retrenchment compensation received by a workman is exempt from income tax up to a maximum limit of ₹5 Lakhs, provided the compensation is calculated in accordance with the Industrial Disputes Act. Any amount exceeding this limit is taxable as salary.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    For managerial employees, severance pay is generally taxable as 'profits in lieu of salary' under Section 17(3) of the Act. However, employees can claim tax relief under Section 89(1) by filing Form 10E. The employer is legally required to compute these tax benefits and reflect them correctly in the Form 16 issued during separation. If the employer refuses to compute these tax relief benefits or makes arbitrary tax deductions from your severance, you can include this tax non-compliance as a key grievance in your legal notice.
                  </p>
                </div>
              </section>

              <section id="step-procedure" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Step-by-Step Procedure to Dispute a Wrongful Termination
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mb-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If you are facing a wrongful termination or forced resignation, you should take these steps to secure your legal position:
                  </p>
                </div>

                {/* STEP CHECKLIST */}
                <div className="space-y-4">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Preserve All Written Evidence</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Save copies of your employment contract, appraisal letters, termination email, and performance reports. Backup chat logs showing any coercion or forced resignation demands.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Send a Formal Protest Email</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Reply to the termination or resignation email. State clearly that you dispute the dismissal, and request a detailed explanation of the cause and calculation of notice pay.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Serve a Formal Legal Notice</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Hire a labor lawyer to draft and serve a legal notice to the company's directors. Demand reinstatement or payment of outstanding notice salary and severance within 15 days.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">File Complaint with Labor Commissioner</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the employer refuses to settle, file a complaint before the regional Labor Commissioner under the Shops and Establishments Act or Industrial Disputes Act for conciliation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Filing an Appeal before the Appellate Authority under Shops Acts</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the employer ignores your legal notice, most state Shops and Establishments Acts provide an administrative appeal mechanism. Under the Delhi Shops and Establishments Act, for instance, an employee can file an appeal before the designated Appellate Authority within 30 days of the date of dismissal. The authority has the power to conduct hearings, examine witnesses, and review the reasons for termination.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the Appellate Authority finds that the termination was executed without reasonable cause, they can direct the employer to pay compensation equivalent to one month's salary for every year of service, or order the reinstatement of the employee with full back wages. Filing this appeal is a fast-track administrative remedy that bypasses the lengthy delays of civil courts, making it an excellent option for corporate workers.
                  </p>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Understanding Severance Entitlements</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    To evaluate the notice period salary and severance benefits you are eligible to claim, you must verify the statutory rules based on your designation:
                  </p>
                </div>

                {/* SEVERANCE TABLE */}
                <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white text-xs md:text-sm">
                        <th className="p-4 font-bold border-b border-slate-700">Employee Category</th>
                        <th className="p-4 font-bold border-b border-slate-700">Governing Law</th>
                        <th className="p-4 font-bold border-b border-slate-700">Minimum Notice Period Pay</th>
                        <th className="p-4 font-bold border-b border-slate-700">Severance / Retrenchment Compensation</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs md:text-sm text-slate-700">
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                        <td className="p-4 font-bold bg-slate-50/30">Workman (Non-managerial)</td>
                        <td className="p-4">Industrial Disputes Act, 1947</td>
                        <td className="p-4">1 Month (or wages in lieu of notice)</td>
                        <td className="p-4">15 days' average pay per completed year of service</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-4 font-bold bg-slate-50/30">Executive / Managerial</td>
                        <td className="p-4">State Shops &amp; Establishments Act</td>
                        <td className="p-4">1 Month (or notice period defined in contract)</td>
                        <td className="p-4">Subject to employment contract terms</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="drafting-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting a Wrongful Termination Legal Notice
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A legal notice for wrongful dismissal must be drafted with precision, focusing on the illegality of the termination process and the exact outstanding dues. It must warn the company of potential labor commission filings and civil suits if the dues are not cleared within 15 days of receiving the notice.
                  </p>
                  
                  <div className="bg-[#111827] text-slate-300 p-6 rounded-2xl border border-slate-800 my-6 font-mono text-xs overflow-x-auto leading-relaxed">
                    <p className="text-white font-bold mb-2">Key Notice Elements:</p>
                    <p>1. Parties: Address to the Managing Director, HR Head, and Board of Directors</p>
                    <p>2. Performance Record: Detail past appraisals, promotions, and positive feedback</p>
                    <p>3. Dismissal Sequence: Detail the exact events of the sudden termination or forced resignation</p>
                    <p>4. Legal Violations: Cite Section 25F of Industrial Disputes Act and state Shops Acts</p>
                    <p>5. Quantified Dues: List unpaid notice salary, severance pay, accrued leaves, and gratuity</p>
                    <p>6. Harassment Claims: Quantify damages for mental agony and loss of career reputation</p>
                    <p>7. Cure Period: Grant a strict 15-day window to settle before initiating legal action</p>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Sample Wrongful Termination Notice Template</h3>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner font-sans text-xs md:text-sm text-slate-700 leading-relaxed space-y-4">
                    <p className="font-bold">LEGAL NOTICE</p>
                    <p>To,<br />The Board of Directors / Head of HR<br />[Company Name Private Limited]<br />[Registered Office Address]</p>
                    <p>Dear Sir/Madam,</p>
                    <p>Under instructions from my client, [Employee Name], resident of [Address], I hereby serve you with this legal notice regarding the illegal and wrongful termination of my client's services and the withholding of outstanding dues.</p>
                    <p>My client joined your organization on [Joining Date] as [Designation] under the employment contract dated [Contract Date]. During their service, my client maintained an exemplary performance record, obtaining [Details of Appraisals/Promotions]. On [Termination Date], your company terminated my client's services with immediate effect without providing any reasonable cause, domestic inquiry, or the contractually mandated notice period pay of [Number of Months] months.</p>
                    <p>This arbitrary termination is a direct violation of Section 5 of the state Shops and Establishments Act and Section 25F of the Industrial Disputes Act, 1947. Furthermore, your company has withheld my client's outstanding FnF settlement amounting to ₹[Amount] and refused to issue the relieving letter, causing severe career damage.</p>
                    <p>We hereby call upon you to reinstate my client with full back wages, or in the alternative, pay the outstanding amount of ₹[Amount] along with interest at 18% per annum, and issue the relieving letter within 15 days of receiving this notice. Failure to do so will compel my client to file a complaint before the Labor Commissioner and initiate civil proceedings, making your company liable for all costs.</p>
                    <p>Yours faithfully,<br />[Advocate Name]</p>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Sending this notice via Registered Post with Acknowledgment Due (RPAD) creates a court-admissible record. Most established companies have compliance teams that will prioritize clearing these dues once they receive a formal lawyer's notice, as it prevents their board of directors from being named in labor disputes.
                  </p>
                </div>
              </section>

              <section id="before-after" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Before vs. After: Sending a Notice to the Employer
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
                          The HR team ignores your emails or claims that the termination was due to 'restructuring' or 'performance issues' without providing any evidence. They refuse notice pay.
                        </p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs block mb-2">After Notice</span>
                        <p className="text-slate-300 leading-relaxed">
                          The company's legal team instructs HR to release the notice pay and clear the outstanding dues to prevent corporate litigation, labor commission audits, and director liabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="director-liability" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Legal Liabilities of Directors and Officers for Wrongful Dismissal
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    In India, company directors and partners can face criminal prosecution, fines, and even imprisonment for willful default under labor laws. The court can direct the local police to inspect the company's premises and seize accounting records.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When a legal notice is addressed directly to the company directors by name, it highlights their personal liability. Most corporate directors will instruct their HR and legal departments to settle the dispute immediately, as they do not want to risk criminal prosecution or be summoned by a labor court over employee salary disputes.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Withholding notice period salary or severance dues is not just a breach of contract; it is a punishable offense under Section 20 of the Payment of Wages Act. If a company willfully defaults on salary payments, the local labor inspector can file a criminal complaint in the court of a Metropolitan Magistrate against the company's directors and the designated manager. The directors can face fines, attachment of personal bank accounts, and prosecution.
                  </p>
                </div>
              </section>

              <section id="success-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Wrongful Termination Success Stories
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Most employment recovery disputes are resolved during the initial notice phase. Companies want to avoid the legal expenses and negative branding associated with labor court trials.
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Startup Retrenchment Case</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A senior product manager at an e-commerce startup was terminated with immediate effect during a restructuring phase. The company refused to pay their 3-month notice period salary, claiming that the contract had a termination for convenience clause. The manager served a legal notice prepared by an advocate, citing the Karnataka Shops and Commercial Establishments Act. The company released the entire notice pay along with a positive relieving letter within 10 days, avoiding further escalation.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Forced Resignation Dispute</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      An executive was forced to submit their resignation under pressure during a closed-door meeting with HR. The executive sent a formal protest email and served a legal notice for constructive dismissal and unpaid notice salary. The company's legal cell reviewed the notice and processed a full settlement, including notice compensation, to avoid labor court litigation.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Maternity Leave Termination Dispute</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A senior designer at an advertising agency was terminated immediately after returning from maternity leave. The company claimed redundancy, but refused to pay her 3-month notice period salary and the maternity benefits. The designer served a legal notice prepared by an advocate, citing the Maternity Benefit Act, 1961, and state Shops Acts. The notice highlighted that under Section 12 of the Maternity Benefit Act, it is unlawful for an employer to discharge a woman during her pregnancy or maternity leave. The agency's board settled the matter within a week, paying the full maternity dues, notice pay, and damages to prevent regulatory prosecution.
                    </p>
                  </div>
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
              <h2 className="text-2xl md:text-4xl font-black mb-4">Termination Notice Reviews</h2>
              <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                Read how separated employees have successfully resolved wrongful termination disputes using our legal guides.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
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
