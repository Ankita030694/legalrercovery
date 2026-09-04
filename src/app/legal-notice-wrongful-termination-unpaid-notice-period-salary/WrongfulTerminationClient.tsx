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
    answer: "Wrongful termination occurs when an employer fires an employee violating statutory labor laws. Dismissing staff without contractual notice or paying required severance is illegal under law. Terminating female employees during maternity leave violates mandatory federal employee protection rules. Employers cannot dismiss employees without conducting fair internal domestic inquiry proceedings first."
  },
  {
    question: "Can an employer force me to resign immediately?",
    answer: "Employers cannot legally coerce any employee into submitting an immediate forced resignation. Forced resignation is treated as constructive dismissal under Indian employment legal jurisprudence. Companies often use termination threats or background check intimidation to pressure staff. You should preserve all coercive communications and refuse one-sided exit settlement agreements."
  },
  {
    question: "What is the notice period salary rule in India?",
    answer: "Employers must provide contractual notice or pay equivalent salary upon sudden termination. State Shops and Establishments Acts require basic salary plus regular earned allowances. Withholding notice period salary breaches employment contracts and violates statutory state rules. Employees can demand full notice pay through an advocate served legal notice."
  },
  {
    question: "How is retrenchment compensation calculated under the Industrial Disputes Act?",
    answer: "Section 25F of the Industrial Disputes Act 1947 governs statutory retrenchment compensation. Eligible workmen must have completed one continuous year of active company service. Compensation equals fifteen days average pay for every completed year of service. The employer must also provide one month written notice or wages instead."
  },
  {
    question: "What legal options do I have if I am terminated during notice period?",
    answer: "Employers terminating staff during an active notice period must pay remaining days. Withholding notice salary violates employment contracts and state labor welfare statutory regulations. Employees can serve an advocate legal notice demanding immediate payment of dues. You can initiate formal recovery proceedings if the employer refuses out-of-court settlement."
  },
  {
    question: "Can an employer terminate me without cause if my contract has an 'at-will' clause?",
    answer: "Indian employment jurisprudence does not recognize pure at-will termination contractual terms. Employers must demonstrate reasonable objective cause before terminating any confirmed corporate employee. State Shops and Establishments Acts mandate statutory notice periods or severance compensation. Arbitrary terminations without reasonable cause remain legally challengeable before jurisdictional labor courts."
  },
  {
    question: "What is the role of the Labor Commissioner in wrongful termination disputes?",
    answer: "The Labor Commissioner summons employers for conciliation proceedings after receiving employee complaints. If conciliation fails, the commissioner refers the labor dispute to court. Conciliation creates substantial pressure on employers to resolve pending unpaid salary dues. Employees can escalate to labor tribunals if employers ignore statutory conciliation summons."
  },
  {
    question: "Can I claim compensation for mental harassment in a wrongful dismissal case?",
    answer: "Employees can legally claim damages for mental agony resulting from wrongful termination. You can demand compensation for reputational harm before civil or labor courts. A formal legal notice quantifying emotional damages pressures corporate leadership to settle. Companies frequently settle out of court to prevent costly public court litigation."
  }
];

const reviews = [
  {
    author: "Nisha Sharma (Mumbai)",
    rating: "5",
    text: "A fintech startup terminated me overnight and withheld my earned notice salary. I served a formal legal notice under state labor welfare protection laws. The management quickly agreed to settle all dues and issued experience certificates."
  },
  {
    author: "Vikram Malhotra (Bengaluru)",
    rating: "5",
    text: "My company forced my resignation by threatening negative employment verification remarks. I preserved evidence and served an advocate notice for illegal constructive dismissal. The management settled three months severance pay and provided positive reference letters."
  },
  {
    author: "Rohan Kapoor (Gurugram)",
    rating: "5",
    text: "This legal guide helped me recover two point eight lakhs notice pay. The company laid off staff citing restructuring without providing statutory severance compensation. A formal legal notice forced their corporate counsel to settle within days."
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
              Sudden termination without cause or forced resignation violates Indian labor welfare laws. Learn how to recover unpaid notice period salary and statutory severance pay. Our specialized legal platform enforces employer compliance to secure full employee dues.
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
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  The Industrial Disputes Act and state Shops Acts protect employees against dismissal. Employers cannot terminate staff without cause or coerce resignations without paying dues. Serving a formal legal notice initiates recovery of unpaid notice period salaries.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Job loss causes severe emotional stress and creates sudden financial distress for families. The situation worsens when corporate employers execute dismissals through illegal arbitrary methods. Many corporate startups and private firms bypass labor welfare statutes to cut costs. Companies terminate employees overnight while refusing contractual notice pay and earned severance. Employers often coerce immediate resignations by threatening negative background verification remarks. Indian labor jurisprudence treats forced resignations as actionable illegal constructive dismissals. Aggrieved employees have strong statutory rights to recover complete severance and damages.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Disputing arbitrary terminations begins by serving a formal legal notice to directors. A detailed legal notice outlines statutory violations and quantifies all outstanding dues. Employers often settle disputes amicably when faced with potential labor tribunal proceedings. Exploring conciliation and mediation enables swift recovery without prolonged court litigation. If the company ignores your legal notice, escalate the matter before authorities. Understanding relevant labor regulations ensures effective enforcement against defaulting corporate employers.
                </p>
              </div>

              <section id="wrongful-termination" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding Wrongful Termination and Forced Resignation in India
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Indian labor statutes govern all corporate employment contracts and commercial appointments. Statutory labor provisions override unilateral contractual clauses that restrict fundamental employee rights.
                  </p>
                </div>

                <div className="space-y-12 mt-8">
                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="industrial-disutes-act-and-retrenchment-rules" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Industrial Disputes Act and Retrenchment Rules
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      The Industrial Disputes Act 1947 protects workmen against unfair industrial labor practices. Section 2(s) classifies operational, clerical, technical, and skilled personnel as statutory workmen. Managerial and administrative personnel are excluded from the definition of a workman.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      Section 25F mandates that workmen with one year service receive written notice. Employers must provide one month advance notice or pay wages instead. Furthermore, employers must pay retrenchment compensation of fifteen days per service year. Retrenchments executed without statutory compensation remain illegal under Indian industrial law. Workmen can claim reinstatement with full back wages before labor tribunals.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="state-shops-and-establishments-acts-governing-termination" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      State Shops and Establishments Acts Governing Termination
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      State Shops and Commercial Establishments Acts protect corporate executives and service employees. These statutes regulate working conditions and termination rules for non-workman office professionals.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      Karnataka and Maharashtra Shops Acts mandate thirty days notice for confirmed employees. Employers must provide one month notice or equivalent salary in lieu. Dismissals require reasonable objective justification like proven redundancy or gross personal misconduct. Employers alleging misconduct must conduct a fair domestic inquiry following natural justice. Employees must receive full opportunity to present defense before termination orders.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="constitutional-protections" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Constitutional Protections and Public Sector Employee Rights
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      Public sector employees enjoy specialized constitutional safeguards under Article 311 of the Constitution. Civil servants cannot be dismissed without holding formal departmental disciplinary inquiry proceedings. The appointing authority alone holds statutory jurisdiction to terminate public service personnel.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      Courts enforce natural justice principles across private sector commercial employment contracts as well. Dismissals based on unproven misconduct without domestic inquiries violate recognized legal standards. Citing procedural violations in your legal notice puts immense pressure on employers.
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
                    Notice period pay and severance packages provide essential financial cushions during transitions. Terminating employers must disburse complete statutory dues in full and final settlements.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Full and final settlements must include earned wages until the final day. Settlements must include accrued leave encashment, performance bonuses, and statutory gratuity dues. Employers must also pay notice period salary if immediate termination occurred. Deducting arbitrary training expenses or recruitment costs from employee settlements is illegal. Employees can recover unlawfully withheld salary amounts through a formal legal notice.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 10(10B) of the Income Tax Act 1961 governs retrenchment taxation. Retrenchment compensation for workmen is tax-exempt up to five lakh rupees. Compensation amounts must follow statutory formulas prescribed by the Industrial Disputes Act. Amounts exceeding statutory thresholds are taxable under standard personal income tax slabs.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Managerial severance payments are classified as profits in lieu of salary. Employees can claim tax relief under Section 89(1) using Form 10E. Employers must compute statutory tax benefits correctly on issued Form 16 certificates. Arbitrary tax withholdings can be challenged as non-compliance in legal notices.
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
                      <h4 className="font-bold text-slate-900 mb-1">Preserve All Written Evidence</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Preserve appointment letters, appraisal emails, termination notices, and positive performance evaluation records. Save chat logs and audio recordings documenting coercion or forced resignation pressure.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Send a Formal Protest Email</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Send a written protest email contesting the unfair dismissal or forced resignation. Demand clear written explanations regarding termination grounds and full notice salary calculations.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Serve a Formal Legal Notice</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Engage an experienced labor advocate to serve a formal legal notice. Demand immediate payment of unpaid notice pay, severance, and gratuity within fifteen days.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">File Complaint with Labor Commissioner</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        File a formal complaint before the local Labor Commissioner for conciliation hearings. The commissioner summons corporate leadership to resolve outstanding unpaid salary and severance disputes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Filing an Appeal before the Appellate Authority under Shops Acts</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    State Shops and Establishments Acts provide accessible administrative appeal forums for employees. The Delhi Shops Act permits employees to appeal dismissals within thirty days. Appellate authorities conduct hearings, examine employment records, and review termination justifications impartially.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Authorities ordering wrongful dismissal remedies direct employers to pay substantial severance compensation. Appellate authorities can also mandate full reinstatement with complete back salary benefits. This administrative mechanism provides fast resolution without lengthy civil court trial delays.
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
                    A wrongful dismissal legal notice requires precise drafting detailing all statutory violations. The notice must specify outstanding salary amounts, leave encashment, and damages for harassment. It gives employers a strict fifteen-day deadline before initiating formal labor litigation.
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
                    <p>To,<br />The Board of Directors and Head of Human Resources<br />[Company Name Private Limited]<br />[Registered Office Address]</p>
                    <p>Dear Sir or Madam,</p>
                    <p>Under instructions from my client, [Employee Name], resident of [Address], I hereby serve this legal notice regarding the illegal termination of my client and withholding of outstanding dues.</p>
                    <p>My client joined your organization on [Joining Date] as [Designation] under the employment contract dated [Contract Date]. My client maintained an exemplary performance record throughout the tenure with your organization. On [Termination Date], your company terminated my client without reasonable cause, inquiry, or contractual notice salary.</p>
                    <p>This arbitrary termination violates Section 25F of the Industrial Disputes Act 1947 and state Shops Acts. Your company has withheld outstanding full and final dues amounting to ₹[Amount] and refused to issue relieving documents.</p>
                    <p>We call upon you to pay the outstanding dues of ₹[Amount] with eighteen percent interest within fifteen days. Failure to comply will compel my client to file complaints before the Labor Commissioner and initiate civil proceedings.</p>
                    <p>Yours faithfully,<br />[Advocate Name]</p>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Serving legal notices via verified digital channels creates court-admissible evidence of formal delivery. Corporate compliance teams typically clear outstanding dues quickly to prevent director litigation.
                  </p>
                </div>
              </section>

              <section id="before-after" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Before vs. After: Sending a Notice to the Employer
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Notice delivery alters corporate dynamics and prompts immediate action from company legal counsel:
                  </p>

                  {/* BEFORE VS AFTER WORKFLOW */}
                  <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 my-8 shadow-sm">
                    <h4 className="text-lg font-bold mb-4 text-[#DC2626]">Before vs. After Comparison</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-red-400 font-bold uppercase tracking-wider text-xs block mb-2">Before Notice</span>
                        <p className="text-slate-300 leading-relaxed">
                          HR departments ignore employee emails and claim restructuring without presenting objective evidence. Management refuses notice pay and withholding relieving documents to discourage salary claims.
                        </p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs block mb-2">After Notice</span>
                        <p className="text-slate-300 leading-relaxed">
                          Corporate legal advisors instruct HR to disburse notice pay and settle dues. Companies settle promptly to prevent labor commission inquiries, regulatory penalties, and director liabilities.
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
                    Company directors and partners face severe legal liability for willful labor defaults. Magistrates can issue summons and initiate criminal proceedings for deliberate salary non-payment.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Addressing legal notices to directors personally creates immediate accountability for corporate leadership. Directors instruct legal departments to settle claims quickly rather than face court appearances.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 20 of the Payment of Wages Act penalizes willful salary withholding. Labor inspectors can file criminal complaints before Metropolitan Magistrates against defaulting company directors. Directors face monetary fines, company bank account attachments, and ongoing criminal prosecution.
                  </p>
                </div>
              </section>

              <section id="success-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Wrongful Termination Success Stories
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Most employee termination disputes reach full settlement during the initial legal notice stage. Companies prefer resolving claims quietly to protect corporate branding and avoid litigation expenses:
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Startup Retrenchment Case</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      An e-commerce product manager faced immediate termination during sudden organizational restructuring. The company refused three months notice pay citing termination for convenience contractual clauses. The manager served an advocate legal notice under state Shops and Establishments regulations. The company released the entire notice pay and issued positive relieving letters.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Forced Resignation Dispute</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      An executive faced intense coercion during closed-door meetings to submit immediate resignation. The executive issued formal written protest emails and served an advocate legal notice. The company legal department reviewed the notice and released complete severance settlement.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Maternity Leave Termination Dispute</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      An advertising agency designer faced termination immediately after resuming duties following maternity leave. The agency refused three months notice pay and statutory maternity benefit payments. The designer served a legal notice under the Maternity Benefit Act 1961. Section 12 makes discharging pregnant or nursing employees strictly unlawful under Indian law. The company board settled the dispute within a week by paying full compensation.
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
