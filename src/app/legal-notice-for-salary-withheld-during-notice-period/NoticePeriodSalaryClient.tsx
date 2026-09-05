'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can an employer withhold salary during the notice period?",
    answer: "No. An employer cannot legally hold or withhold your salary during the notice period. The salary for the notice period must be paid in the regular monthly payroll cycle, just like any other working month. Withholding salary during this period under the guise of an 'ongoing F&F process' is a direct violation of the Payment of Wages Act and the state's Shop and Establishment Act. Employees who are actively performing transition tasks are fully entitled to their monthly wages."
  },
  {
    question: "What is the full and final (F&F) settlement timeline?",
    answer: "Under most state Shop and Establishment Acts and the new Labour Codes in India, the full and final settlement (including notice period salary, leave encashment, and gratuity) must be cleared within two working days of the employee's last working day. Any delay beyond this timeline is illegal and allows the employee to claim interest on the delayed wages. The company cannot cite administrative procedures or auditor reviews to delay this timeline."
  },
  {
    question: "Can an employer adjust notice period salary if I resign without notice?",
    answer: "Yes. If you resign and fail to serve the contractually mandated notice period, the employer is legally entitled to deduct 'notice pay recovery' from your outstanding dues. This deduction is calculated based on the basic salary for the unserved notice days. However, if you serve the notice period in full, the employer cannot make any such deductions. Unilateral deductions for served days are strictly prohibited under employment laws."
  },
  {
    question: "Is a legal notice effective for recovering notice period salary?",
    answer: "Yes. Serving a formal legal notice is highly effective as it bypasses the company's HR department and escalates the matter directly to the corporate legal team. Employers want to avoid being dragged to the Labour Commissioner or civil courts for relatively small salary amounts, and they often release the withheld salary immediately after receiving the notice to avoid corporate litigation costs."
  },
  {
    question: "What is the role of the Shop and Establishment Act in salary disputes?",
    answer: "The Shop and Establishment Act of each state regulates the terms of employment, working hours, and wage payments. It mandates that wages must be paid before a specific date of the following month (usually the 7th or 10th). Withholding notice period salary is a direct violation of this provision, and the employer can be fined by the state Labour Inspector. It gives the state labor department direct oversight over establishment violations."
  },
  {
    question: "Can my employer withhold my relieving letter if I dispute my notice period salary?",
    answer: "No. Legally, the employer cannot withhold your experience certificate or relieving letter due to a salary dispute. These documents are proof of your employment history, and withholding them is considered an unfair labor practice that can lead to a lawsuit for damages, as it prevents you from joining your next employer. The experience certificate is a factual record of service and cannot be used as collateral."
  },
  {
    question: "What happens if I don't have a written employment contract?",
    answer: "If you do not have a written contract, you can still claim your notice period salary. You must establish the employment relationship through alternative evidence, such as bank statements showing regular monthly salary credits, official email logs, ID cards, or tax filings. You can read about alternative evidence pathways in our dedicated guides. Verbal contracts are fully enforceable under the Indian Contract Act."
  },
  {
    question: "What is the fee to file a salary recovery complaint with the Labour Commissioner?",
    answer: "Filing a complaint with the Labour Commissioner or the Labour Court is virtually free of cost for employees in India. The government provides these forums as accessible, low-cost dispute resolution mechanisms to protect workers from exploitation by employers, making it a highly cost-effective escalation path compared to civil litigation."
  },
  {
    question: "Can I claim interest on withheld notice period salary?",
    answer: "Yes. Under Section 15 of the Payment of Wages Act, the authority can direct the employer to pay the delayed wages along with compensation. This compensation or interest can range from 6 percent to 12 percent per annum, depending on the discretion of the Labour Officer and the duration of the delay. The goal is to discourage employers from retaining employee funds for their own cash flow."
  }
];

const reviews = [
  {
    author: "Harish Kumar (Software Engineer)",
    rating: "5",
    text: "When I resigned from an IT startup, the company withheld my salary for the final two months of my notice period, claiming it would be adjusted in the F&F settlement. After my last working day, they stopped responding. We served a formal legal notice quoting the Shop and Establishment Act. The company released my 1.4 Lakhs salary and relieving letter within 10 days. I am extremely grateful for the clear roadmap."
  },
  {
    author: "Sunita Rao (Operations Manager)",
    rating: "5",
    text: "My employer refused to pay my notice period salary, claiming I did not perform my transition duties properly. This was a completely manufactured excuse to save money. We sent a legal notice demanding accounts settlement and threatened to file a complaint with the Labour Commissioner. They panicked and cleared my dues immediately. It is critical to know your rights."
  },
  {
    author: "Nitin Patel (Logistics Supervisor)",
    rating: "5",
    text: "I was working without a formal contract but had bank statements proving my monthly salary. When I resigned, they withheld my notice period pay. This guide helped me understand how to recover money using alternative proofs. We served a notice, and the company chose to settle the dispute out of court to avoid litigation. A formal demand notice was the turning point."
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
      "name": "Recover Salary Withheld During Notice Period",
      "item": "https://www.legalrecovery.in/legal-notice-for-salary-withheld-during-notice-period"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recover Salary Withheld During Notice Period: Legal Actions",
  "description": "Learn how to recover notice period salary withheld by your employer under the guise of final settlement. Serve a legal notice to employer before your final day.",
  "image": "https://www.legalrecovery.in/og-notice-period-salary.png",
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
  "name": "Notice Period Salary Recovery Action Plan",
  "image": "https://www.legalrecovery.in/og-notice-period-salary.png",
  "description": "A comprehensive legal roadmap to draft, serve, and recover notice period salary and F&F settlements withheld by employers in India.",
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

export default function NoticePeriodSalaryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "notice-salary-withholding", title: "Understanding Notice Period Salary Withholding in India",
      children: [
        { id: "ff-settlement-pretext", title: "The Full and Final Settlement Pretext" },
        { id: "shop-establishment-guidelines", title: "Shop and Establishment Act Guidelines on Timely Wage Payment" }
      ]
    },
    { id: "employee-rights-statutes", title: "Employee Rights and Statutory Protections Against Wage Withholding",
      children: [
        { id: "payment-wages-contracts", title: "Section 15 of the Payment of Wages Act and Employment Contracts" }
      ]
    },
    { id: "notice-vs-labour-commissioner", title: "Notice Period Wage Disputes: Legal Notice vs. Labour Commissioner" },
    { id: "step-by-step-roadmap", title: "The Step-by-Step Roadmap to Settle Dues Before the Final Day" },
    { id: "evidence-checklist", title: "Prerequisites and Evidence Checklist for Withheld Notice Pay" },
    { id: "notice-salary-reviews", title: "Notice Salary Recovery Case Studies and Success Stories" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Recover Salary Withheld During Notice Period", href: "/legal-notice-for-salary-withheld-during-notice-period" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        {/* Banner with dark background #111827 and Red accent */}
        <header className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]" />
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Employment Law Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Notice Period Salary Withheld: <span className="text-[#DC2626]">Legal Remedies</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Learn how to recover notice period salary withheld by your employer under the guise of final settlement. Serve a legal notice to employer before your final day.
            </p>
          </div>
        </header>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          {/* Breadcrumbs Navigation */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          {/* 3-Column Layout: TOC, Content, Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            {/* Left Column Sticky TOC */}
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            {/* Middle Column Main Content */}
            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              {/* Meta details */}
              <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3 border-b border-slate-100 pb-4">
                <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                <span className="hidden sm:inline">•</span>
                <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
              </div>
              
              {/* Introduction */}
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-lg leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  Employers frequently withhold salary during the notice period under the guise of final settlements. Standard salary recovery pages do not cover notice period wage withholding, the Shop and Establishment Act guidelines, and how to draft a legal notice to recover it before the final working day.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  In India's employment ecosystem, resigning from a company is a standard transition. However, for many employees, this transition becomes highly stressful when the employer decides to withhold salary during the notice period. Companies often justify this practice by calling it a standard policy to adjust dues in the Full and Final (F&F) settlement. In reality, withholding monthly wages during active service is illegal. The F&F process is intended to calculate gratuity, leave encashment, and final month adjustments, not to deny monthly salary while the employee continues to work.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Aggrieved employees often face circular arguments from HR managers, leaving them with unpaid bills and delayed joining dates. If a client refuses to pay a vendor, they might send a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link>. In employment disputes, you must cite specific labor acts. Understanding your rights under the Shop and Establishment Act and the Payment of Wages Act is essential to draft a notice that forces your employer to release your notice period salary before your last working day.
                </p>
              </div>

              {/* Section 1: Notice Period Salary Withholding */}
              <section id="notice-salary-withholding" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding Notice Period Salary Withholding in India
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Notice period salary withholding occurs when an employer stops dispersing monthly wages once an employee submits their resignation. The employer continues to expect the employee to work their full hours, complete transitions, and maintain productivity, but refuses to process their monthly payroll. This is a common cost-saving and intimidation tactic used by companies to prevent employees from resigning or to force them to accept unfair terms.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    This practice is highly exploitative. Under Indian labor regulations, wages are defined as compensation for work completed. If an employee is actively working and completing their tasks during the notice period, the employer has no legal authority to delay or hold their salary. Doing so amounts to forced labor and a breach of the employment contract, triggering direct statutory liabilities.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Many corporates operate under the assumption that employees will not pursue legal claims because they want to focus on their next job. Consequently, companies use the threat of withholding relieving letters and F&F pay to silence employees. They exploit the power imbalance to hold wages hostage. However, when employees understand that payroll lockouts are actionable under the law, they can force the management to back down.
                  </p>

                  <h3 id="ff-settlement-pretext" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    The Full and Final Settlement Pretext
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Employers frequently use the 'F&F settlement' as a shield to justify withholding wages. They claim that because the employee is leaving, all outstanding payouts must be calculated in a single consolidated statement, which can take 30 to 45 days after the last working day. While this is true for final-month balances, it does not apply to the salary of prior months served during the notice period.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    For example, if you resign on April 1st and serve a 60-day notice period ending May 30th, the employer must pay your April salary in the regular May payroll cycle. They cannot hold your April salary until the final F&F settlement in July. The only amount that can be deferred to the F&F statement is the salary for the final month of May, which must also be paid within the statutory timeline of two working days from the last day.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When companies mix regular monthly salaries with the F&F calculations, they are intentionally holding onto interest-free funds at the employee's expense. This constitutes an illegal withholding of earned wages. The F&F settlement is meant for non-recurring adjustments like bonus payouts, gratuity releases, and unserved leave encashments, not the primary livelihood salary.
                  </p>

                  <h3 id="shop-establishment-guidelines" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Shop and Establishment Act Guidelines on Timely Wage Payment
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The Shop and Establishment Act of each state regulates the terms of employment for commercial establishments. Under these Acts, employers are mandated to pay wages within a specific period after the wage month ends. For example, in Delhi and Maharashtra, wages must be paid before the 7th of the following month, while in other states, it must be cleared before the 10th.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The Act does not make any exception for employees serving their notice periods. The employer's obligation to pay wages on time remains absolute. Any failure to disburse wages by the mandated date constitutes a statutory offense, and the employee has the right to file a formal complaint with the state's Labour Inspector, who can inspect the company's payroll registers and impose severe penalties.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Additionally, the Shop and Establishment Acts contain clear guidelines on resignation notice times and termination rules. If an establishment violates these provisions, they risk their license suspension. Labour Inspectors have the authority to raid offices and check records, which is a prospect most corporate entities dread. Citing the specific sections of your state's Act in a legal notice shows that you are prepared to escalate the dispute to the licensing authorities.
                  </p>
                </div>
              </section>

              {/* Section 2: Employee Rights and Statutes */}
              <section id="employee-rights-statutes" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Employee Rights and Statutory Protections Against Wage Withholding
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Aggrieved employees are protected by multiple central and state labor statutes in India. Understanding these protections helps you draft an effective demand notice.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The primary legislation protecting employee wages is the Payment of Wages Act, 1936. Section 5 of this Act mandates the timely payment of wages, and Section 15 allows employees to file claims for delayed wages or unauthorized deductions. Under Section 15, the Labour Authority can order the employer to release the outstanding salary along with substantial compensation, which can be up to ten times the delayed amount if the deduction was malicious.
                  </p>

                  <h3 id="payment-wages-contracts" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Section 15 of the Payment of Wages Act and Employment Contracts
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 15 provides a fast-track remedy for employees whose wages have been withheld. The employee can approach the designated Payment of Wages Authority (usually a Labour Officer or Magistrate) to file a claim. The authority will summon the employer and inspect their records. The employer cannot raise general defenses like 'unsatisfactory transition' or 'policy restrictions' to justify withholding salary under Section 15.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Furthermore, the employment contract itself is a legally binding document. If the contract states that you are entitled to a monthly salary in exchange for your services, the employer cannot unilaterally suspend this payment during the notice period. Doing so constitutes a material breach of contract, which releases the employee from their obligations (such as serving the remainder of the notice period) while preserving their right to recover the outstanding dues.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under the Industrial Disputes Act, 1947, individual employees also have rights. Section 2A of the Act clarifies that individual disputes related to discharge, dismissal, or termination of service can be raised directly as an industrial dispute. Withholding all wages during a notice period is seen as a constructive termination, giving the employee access to the industrial dispute conciliation machinery of the government.
                  </p>
                </div>
              </section>

              {/* Section 3: Legal Notice vs. Labour Commissioner */}
              <section id="notice-vs-labour-commissioner" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Notice Period Wage Disputes: Legal Notice vs. Labour Commissioner
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    When dealing with withheld notice period salary, employees have two main escalation paths: serving a formal legal notice or filing a complaint with the Labour Commissioner.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    A formal legal notice is a pre-litigation demand drafted by an advocate and served to the company's directors and HR head. It gives the employer a 15-day compliance window to release the withheld salary and F&F settlement. This is the fastest method, as companies want to avoid being dragged into labor disputes. If the employer ignores the notice, the employee can escalate the matter by filing a complaint with the local Labour Commissioner under the Shop and Establishment Act, or file a <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium">civil suit for recovery of money India</Link>.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Formal Legal Notice</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Labour Commissioner Complaint</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Initial Timeline</td>
                          <td className="px-6 py-4">Fast (typically 15 days compliance window)</td>
                          <td className="px-6 py-4">Slow (takes 30 to 90 days for initial notice and hearings)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Upfront Cost</td>
                          <td className="px-6 py-4">Low (only advocate's drafting and posting fee)</td>
                          <td className="px-6 py-4">Zero (complaints can be filed online for free)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Administrative Effort</td>
                          <td className="px-6 py-4">Minimal (handled entirely by your legal representative)</td>
                          <td className="px-6 py-4">Moderate (requires personal attendance during hearings)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">F&F Resolution Rate</td>
                          <td className="px-6 py-4">High (prompts immediate settlement by company legal cell)</td>
                          <td className="px-6 py-4">High (Labor Officer forces company to present ledger)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Pre-requisite Status</td>
                          <td className="px-6 py-4">Establishes formal record, useful for future filing</td>
                          <td className="px-6 py-4">Can be filed directly, notice serves as corroboration</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 4: Step-by-Step Roadmap */}
              <section id="step-by-step-roadmap" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Step-by-Step Roadmap to Settle Dues Before the Final Day
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To recover notice period salary, you must act before your last working day. Once you exit the company and hand over your assets, your leverage drops significantly. Follow this step-by-step roadmap:
                  </p>

                  {/* Process Map Steps */}
                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 1: Written Follow-Up</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          The moment your regular monthly salary is missed during the notice period, send a formal email to HR and Payroll. Request the immediate release of your monthly wages and cite the payment date clause in your employment contract. Keep this email trail on your personal storage.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 2: Document Compilation</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Download and save all employment-related documents, including your offer letter, resignation submission email, resignation acceptance, transition logs, and bank statements showing past salary credits. Use your personal email to store these records securely.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 3: Serve Legal Notice</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If HR refuses to release the salary or cites policy delays, instruct an advocate to serve a formal legal notice for notice period salary. Send it to the company's registered address and directors, demanding payment within 15 days of receipt.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        4
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 4: Labour Officer Escalation</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If the company fails to comply with the notice, file a complaint with the local Labour Commissioner or the Shop and Establishment Authority. Present your notice proof and bank statements to initiate a departmental inspection of the employer's accounts.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 5: Court Filing</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If the department conciliation fails, instruct your counsel to file a civil claim in the competent court to recover your dues, ensuring you act within the strict <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file a money recovery case in India</Link>.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 5: Prerequisites and Evidence Checklist */}
              <section id="evidence-checklist" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Prerequisites and Evidence Checklist for Withheld Notice Pay
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To ensure your employer's HR or legal team cannot deny your claim, you must compile a robust evidence bundle.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Even if you were working under a verbal agreement or had no signed employment contract, you can establish the employment relationship through alternative evidence. You can read about <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> to understand the alternative proofs acceptable in Indian courts.
                  </p>

                  {/* Checklist */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Notice Period Salary Recovery Evidence Checklist</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Employment Contract or Offer Letter:</strong> Outlines your designation, date of joining, notice period duration, and salary package details.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Resignation records:</strong> Copy of your resignation email and the company's email accepting your resignation and specifying your last working day.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Monthly Pay Slips:</strong> Official pay slips issued by the employer for the months served during the notice period, showing the calculated salary.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Bank Account statements:</strong> Shows regular monthly salary credits from the employer's corporate account, proving the employment relationship.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Work logs and transitions:</strong> Signed hand-over sheets, transition emails, or client communications showing that you actively worked during the notice period.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: Case Studies and Reviews */}
              <section id="notice-salary-reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Notice Salary Recovery Case Studies and Success Stories
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These real-world case studies demonstrate how structured notices and Shop and Establishment Act complaints resolve notice period salary disputes:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {reviews.map((review, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex items-center text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed italic">&quot;{review.text}&quot;</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <p className="font-bold text-slate-900 text-xs md:text-sm">{review.author}</p>
                          <p className="text-[10px] text-slate-500">Verified Case</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 7: FAQs */}
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
                          className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>

            {/* Right Column Sidebar with Requested Advice Card */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-lg font-bold mb-3 text-white">Need Legal Advice?</h3>
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
            </aside>

          </div>
        </div>

        {/* Modal for initiating payment/advice */}
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </main>
    </>
  );
}
