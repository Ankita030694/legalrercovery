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
    answer: "Wrongful termination happens when an employer fires an employee in violation of labor laws. Firing staff without proper notice or severance pay is illegal. Firing female employees during maternity leave is strictly barred by law. Employers also cannot dismiss staff without holding a fair domestic inquiry first."
  },
  {
    question: "Can an employer force me to resign immediately?",
    answer: "No. An employer cannot legally force you to resign. Indian courts treat forced resignation as illegal constructive dismissal. Companies often use termination threats or bad background checks to pressure staff. You should save all emails, keep calm, and refuse to sign forced exit papers."
  },
  {
    question: "What is the notice period salary rule in India?",
    answer: "Employers must give contractual notice or pay salary in lieu of notice upon sudden dismissal. State Shops and Establishments Acts require basic salary plus regular allowances. Withholding notice pay breaks your contract and violates labor laws. You can demand your full notice pay through an advocate's notice."
  },
  {
    question: "How is retrenchment compensation calculated under the Industrial Disputes Act?",
    answer: "Section 25F of the Industrial Disputes Act, 1947, sets statutory retrenchment pay. Eligible workmen must have completed one full year of service. Compensation equals 15 days of average pay for every completed year of work. The employer must also provide one month of notice or wages in lieu."
  },
  {
    question: "What legal options do I have if I am terminated during notice period?",
    answer: "If you are fired during your notice period, the employer must pay you for the remaining days. Withholding this salary breaches your contract and state labor rules. You can send an advocate legal notice demanding immediate payment. If the company refuses, you can file a complaint with the Labor Commissioner."
  },
  {
    question: "Can an employer terminate me without cause if my contract has an 'at-will' clause?",
    answer: "No. Indian law does not recognize pure at-will employment. Employers must show a reasonable, documented cause to dismiss confirmed staff. State Shops and Establishments Acts mandate statutory notice or severance pay. Arbitrary dismissals without fair cause can be challenged in labor court."
  },
  {
    question: "What is the role of the Labor Commissioner in wrongful termination disputes?",
    answer: "The Labor Commissioner summons employers for conciliation talks after receiving an employee complaint. If talks fail, the officer refers the dispute to labor court. Conciliation puts strong pressure on companies to clear unpaid dues quickly without a trial."
  },
  {
    question: "Can I claim compensation for mental harassment in a wrongful dismissal case?",
    answer: "Yes. You can claim damages for mental distress caused by an unfair firing. You can also claim compensation for harm to your career and reputation. A formal legal notice that lists these damages pushes management to settle out of court."
  }
];

const reviews = [
  {
    author: "Nisha Sharma (Mumbai)",
    rating: "5",
    text: "A fintech startup fired me overnight and held back my notice pay. I sent a formal legal notice citing state labor welfare laws. Management agreed to settle all dues in full and gave me my experience letter."
  },
  {
    author: "Vikram Malhotra (Bengaluru)",
    rating: "5",
    text: "My company tried to force my resignation by threatening bad verification remarks. I saved all emails and sent an advocate notice for forced dismissal. They settled three months of severance pay and gave me a clean reference."
  },
  {
    author: "Rohan Kapoor (Gurugram)",
    rating: "5",
    text: "This guide helped me recover ₹2.8 lakhs in notice pay. My company laid off staff citing restructuring without paying legal severance. A formal legal notice pushed their legal team to settle within days."
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
    "name": "Advocate Aman Chawla",
    "url": "https://www.legalrecovery.in/authors/advocate-aman-chawla"
  },
  "reviewedBy": {
    "@type": "Person",
    "name": "Advocate Sneha Sharma",
    "url": "https://www.legalrecovery.in/authors/advocate-sneha-sharma"
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
              Sudden firing without cause or forced resignation breaks Indian labor laws. Learn how to recover your unpaid notice period salary and legal severance pay. Our platform helps you enforce your rights and get full compensation.
            </p>
          </div>
        </header>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              {/* Meta details */}
              <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3 border-b border-slate-100 pb-4">
                <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                <span className="hidden sm:inline">•</span>
                <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
              </div>
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  The Industrial Disputes Act and state Shops Acts protect employees against unfair dismissal. Employers cannot fire staff without cause or force resignations without paying dues. Sending a formal legal notice is the fastest way to recover your unpaid salary.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Losing a job suddenly causes deep stress and leaves families in financial trouble. The pain is worse when employers break the law during dismissals. Many startups and private firms cut corners to save money. They fire staff overnight and refuse contractual notice pay or earned severance. Employers also pressure employees to resign by threatening bad background checks. Indian courts treat forced resignation as illegal dismissal. As an employee, you have strong legal rights to demand your full pay and damages.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Challenging an illegal firing starts with a formal notice to company directors. A clear legal notice details the labor law violations and lists the exact amount owed. Most employers prefer to settle quickly rather than face labor court trials. Mediation and conciliation offer fast recovery without years of litigation. If your company ignores the notice, you can take your case to the Labor Commissioner.
                </p>
              </div>

              <section id="wrongful-termination" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding Wrongful Termination and Forced Resignation in India
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Indian labor laws govern all employment contracts. Statutory employee rights always override contract clauses that try to take those rights away.
                  </p>
                </div>

                <div className="space-y-12 mt-8">
                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="industrial-disutes-act-and-retrenchment-rules" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Industrial Disputes Act and Retrenchment Rules
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      The Industrial Disputes Act of 1947 protects workmen from unfair labor practices. Section 2(s) covers technical, clerical, and operational staff as statutory workmen. Managerial and supervisory personnel are not covered under this definition.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      Section 25F states that workmen with one year of service must receive written notice. The company must give one month of notice or pay wages instead. In addition, the employer must pay 15 days of average pay for each year of service. Any layoff done without this compensation is illegal under Indian law. In such cases, workmen can claim reinstatement with full back wages.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="state-shops-and-establishments-acts-governing-termination" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      State Shops and Establishments Acts Governing Termination
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      State Shops and Commercial Establishments Acts protect corporate executives and white-collar staff. These laws govern office working hours, leaves, and termination rules.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      For example, the Karnataka and Maharashtra Shops Acts require 30 days of notice for confirmed employees. The employer must give one month of notice or pay salary in lieu of notice. Dismissals also require an objective reason, such as verified redundancy or severe misconduct. If an employer alleges misconduct, they must hold an impartial inquiry first. Employees must get a fair chance to defend themselves before any termination order is passed.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="constitutional-protections" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Constitutional Protections and Public Sector Employee Rights
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      Public sector staff enjoy special constitutional safeguards under Article 311. Government servants cannot be dismissed without a formal inquiry. Only the appointing authority has the legal power to dismiss public service personnel.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      Courts also apply basic rules of natural justice to private sector jobs. Firing staff for unproven misconduct without an inquiry breaks legal standards. Citing these procedural lapses in your legal notice puts strong pressure on employers.
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
                    Notice pay and severance packages provide vital financial support during job transitions. When firing an employee, the employer must clear all statutory dues in full.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The full and final settlement must include earned salary up to the last working day. It must also cover unused leave encashment, pending bonuses, and gratuity dues. If the company terminates you on the spot, they must pay full notice period salary. Employers cannot deduct arbitrary training costs or recruitment fees from your dues. You can recover any withheld wages by sending an advocate legal notice.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 10(10B) of the Income Tax Act, 1961, covers retrenchment tax rules. Retrenchment compensation for workmen is tax-exempt up to ₹5 lakhs, provided it follows the statutory formula under the Industrial Disputes Act. Any amount above this limit is taxed under regular income slabs.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    For managerial employees, severance pay is treated as profit in lieu of salary. You can claim tax relief under Section 89(1) by filing Form 10E. Employers must calculate this relief correctly on your Form 16. Any improper tax deductions can be challenged in your legal notice.
                  </p>
                </div>
              </section>

              <section id="step-procedure" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Step-by-Step Procedure to Dispute a Wrongful Termination
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mb-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Follow these systematic legal steps to challenge wrongful terminations and forced resignations:
                  </p>
                </div>

                {/* STEP CHECKLIST */}
                <div className="space-y-4">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">1</span>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Preserve All Written Evidence</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Save your offer letter, salary slips, performance emails, and appraisal records. Keep backups of chats and voice notes showing coercion or forced resignation pressure.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">2</span>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Send a Formal Protest Email</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Send a written email contesting the unfair firing or forced exit. Ask for clear written reasons for dismissal and request a full calculation of your dues.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">3</span>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Serve a Formal Legal Notice</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Hire an experienced labor advocate to send a formal legal demand notice. Demand full payment of your notice salary, severance, and gratuity within 15 days.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">4</span>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">File Complaint with Labor Commissioner</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        File a complaint before your local Labor Commissioner for conciliation. The commissioner will summon company leadership to resolve the unpaid salary dispute.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Filing an Appeal before the Appellate Authority under Shops Acts</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    State Shops Acts provide accessible appeal forums for office staff. For instance, the Delhi Shops Act allows employees to appeal a dismissal within 30 days. The appellate authority reviews employment files, hears both sides, and evaluates the dismissal.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the authority finds the firing wrongful, it can order payment of full severance pay. It can also order reinstatement with back pay. This process offers quick relief without the delays of civil courts.
                  </p>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Understanding Severance Entitlements</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Verify your legal severance entitlements based on your designation and governing statute:
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
                    A legal notice for wrongful dismissal must set out the facts and legal violations clearly. It must state the exact unpaid salary, leave balance, and compensation for harassment. It gives the employer a strict 15-day deadline before you start formal legal action.
                  </p>
                  
                  <div className="bg-[#111827] text-slate-300 p-6 rounded-2xl border border-slate-800 my-6 font-mono text-xs overflow-x-auto leading-relaxed">
                    <p className="text-white font-bold mb-2">Key Notice Elements:</p>
                    <p>1. Parties: Address the Managing Director, HR Head, and Board of Directors.</p>
                    <p>2. Track Record: Mention past promotions, appraisals, and positive feedback.</p>
                    <p>3. Event Timeline: Detail the exact events of the sudden firing or forced resignation.</p>
                    <p>4. Legal Breaches: Cite Section 25F of the Industrial Disputes Act and state Shops Acts.</p>
                    <p>5. Exact Claim: List unpaid notice salary, severance pay, accrued leaves, and gratuity.</p>
                    <p>6. Harassment Damages: Claim compensation for mental distress and harm to your career.</p>
                    <p>7. Grace Period: Grant a strict 15-day window to pay before you take legal action.</p>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Sample Wrongful Termination Notice Template</h3>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner font-sans text-xs md:text-sm text-slate-700 leading-relaxed space-y-4">
                    <p className="font-bold">LEGAL NOTICE</p>
                    <p>To,<br />The Board of Directors and Head of Human Resources<br />[Company Name Private Limited]<br />[Registered Office Address]</p>
                    <p>Dear Sir or Madam,</p>
                    <p>Under instructions from my client, [Employee Name], resident of [Address], I hereby serve this legal notice. This notice concerns the illegal termination of my client and the withholding of outstanding dues.</p>
                    <p>My client joined your company on [Joining Date] as [Designation] under the employment contract dated [Contract Date]. My client maintained an excellent work record throughout their tenure. On [Termination Date], your company terminated my client without reasonable cause, inquiry, or notice pay.</p>
                    <p>This arbitrary termination violates Section 25F of the Industrial Disputes Act, 1947, and state Shops Acts. Your company has withheld full and final dues of ₹[Amount] and refused to issue relieving letters.</p>
                    <p>We call upon you to pay the outstanding dues of ₹[Amount] with 18% interest within 15 days. If you fail to pay, my client will file complaints before the Labor Commissioner and begin civil proceedings.</p>
                    <p>Yours faithfully,<br />[Advocate Name]</p>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Serving legal notices by email and speed post creates solid proof of formal delivery. Corporate compliance teams often clear dues quickly to avoid personal lawsuits against directors.
                  </p>
                </div>
              </section>

              <section id="before-after" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Before vs. After: Sending a Notice to the Employer
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Sending a formal notice changes the conversation. It prompts corporate lawyers to review the case immediately:
                  </p>

                  {/* BEFORE VS AFTER WORKFLOW */}
                  <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 my-8 shadow-sm">
                    <h3 className="text-lg font-bold mb-4 text-[#DC2626]">Before vs. After Comparison</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-red-400 font-bold uppercase tracking-wider text-xs block mb-2">Before Notice</span>
                        <p className="text-slate-300 leading-relaxed">
                          HR teams often ignore employee emails and claim company restructuring without proof. Management holds back notice pay and exit letters to discourage salary claims.
                        </p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs block mb-2">After Notice</span>
                        <p className="text-slate-300 leading-relaxed">
                          Company lawyers advise HR to pay notice salary and settle all dues. Firms settle quickly to avoid labor court inquiries, fines, and personal liability for directors.
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
                    Company directors and partners face real legal risks for withholding employee salaries. Magistrates can issue summons and launch criminal proceedings for willful non-payment of wages.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Addressing the notice to directors personally creates direct accountability. Directors often tell HR to settle the matter right away rather than risk court summons.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 20 of the Payment of Wages Act penalizes willful salary withholding. Labor inspectors can file criminal cases before magistrates against defaulting directors. Directors risk fines, company account freezes, and ongoing criminal prosecution.
                  </p>
                </div>
              </section>

              <section id="success-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Wrongful Termination Success Stories
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Most employee termination disputes get settled during the initial legal notice stage. Companies prefer resolving claims quietly to protect their brand and avoid court costs:
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-base mb-2">The Startup Retrenchment Case</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      An e-commerce product manager was fired during sudden company restructuring. The company refused three months of notice pay. The manager sent a legal notice through an advocate under state Shops and Establishments rules. The company paid the full notice salary and issued positive relieving letters within ten days.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-base mb-2">The Forced Resignation Dispute</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      An executive was pressured during closed-door meetings to resign right away. The executive sent a written protest email and followed up with a formal legal notice. The company legal team reviewed the notice and released a complete severance package.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-base mb-2">The Maternity Leave Termination Dispute</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A designer was dismissed right after returning from maternity leave. The agency refused notice pay and statutory maternity benefits. The designer sent a legal notice citing the Maternity Benefit Act, 1961. Section 12 makes firing pregnant or nursing employees strictly illegal in India. The company board settled the dispute within a week by paying full compensation.
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
                  Discuss your employment recovery case with experienced labor law advocates. We draft legally compliant notices tailored to recover your outstanding salary and severance.
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
                Read how separated employees successfully resolved wrongful termination disputes using our legal guides.
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
                      <h3 className="font-bold text-sm text-white">{review.author}</h3>
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
