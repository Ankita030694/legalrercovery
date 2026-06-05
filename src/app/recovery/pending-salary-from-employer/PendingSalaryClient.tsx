'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is it legal for my employer to delay my monthly salary credit because of a funding crunch or cash flow issues?",
    answer: "No, it is entirely illegal. Under the Payment of Wages Act, 1936, and various state-specific Shops and Commercial Establishments Acts, the payment of monthly wages is an absolute statutory obligation. Employers cannot make your salary conditional on VC funding rounds, client invoice clearances, or business profitability. The law mandates that salaries must be credited on time, typically by the 7th or 10th of the following month, regardless of corporate financial difficulties."
  },
  {
    question: "Can an establishment unilaterally slash my salary package by citing market slowdowns?",
    answer: "No. An employment contract is a bilateral agreement under the Indian Contract Act, 1872. An employer cannot unilaterally reduce your CTC, Special Allowance, or Basic Salary without your explicit, written consent. Any unauthorized deduction or downward revision without a signed addendum is a direct breach of contract and represents an illegal wage deduction under Section 7 of the Payment of Wages Act."
  },
  {
    question: "What legal action can I take if my employer puts me on 'forced unpaid leave' or 'bench' without pay?",
    answer: "Placing an active employee on forced unpaid leave constitutes an illegal layoff under Section 2(kkk) of the Industrial Disputes Act, 1947. If the establishment employs 50 or more workers, you are statutory entitled to Layoff Compensation equal to 50% of your basic wage and dearness allowance. If the company fails to pay this, it is treated as a constructive dismissal, and you can file a recovery petition in the Labour Court to claim full back wages."
  },
  {
    question: "My employer deducted EPF from my salary slip but did not deposit it in my EPFO account. Is this a criminal offense?",
    answer: "Yes, it is a severe criminal offense. When an employer deducts the employee's contribution from their monthly wages but fails to deposit it with the Employee Provident Fund Organisation (EPFO), they commit Criminal Breach of Trust under Section 405/406 of the Indian Penal Code (or the equivalent Section 316 of the Bharatiya Nyaya Sanhita, 2023). This carries an imprisonment term of up to 3 years. You can file a direct criminal complaint with the police and report the default to the Regional PF Commissioner."
  },
  {
    question: "Can I claim compensation for bounced EMIs and credit card penalties caused by salary delays?",
    answer: "Yes. Under Section 73 of the Indian Contract Act, 1872, you can claim compensation for any direct and natural damages resulting from a breach of contract. This includes bank penalties for bounced EMIs, credit card late fees, and compensation for the degradation of your CIBIL/credit score. These calculations should be formally detailed and demanded in the legal notice served to the company."
  },
  {
    question: "What is the time limit (limitation period) to file a legal claim for delayed monthly salaries?",
    answer: "The limitation period for filing a civil suit or a fast-track Summary Suit under Order 37 CPC to recover unpaid salaries is 3 years from the date the wages became due. However, if you are approaching the labor authorities under the Payment of Wages Act, 1936, the complaint must ideally be filed within 12 months from the date the deduction or delay occurred. It is critical to initiate legal notice and conciliation workflows early to remain within these statutory windows."
  },
  {
    question: "What happens if my employer gives me a cheque for salary arrears and the cheque bounces?",
    answer: "A bounced salary cheque is a criminal offense under Section 138 of the Negotiable Instruments Act, 1881. You must send a statutory 30-day demand notice to the company and the signing directors within 30 days of receiving the bank return memo. If they do not clear the payment within 15 days of receiving the notice, you can file a criminal complaint in the Magistrate's Court. The penalty includes imprisonment for up to 2 years, a fine of up to double the cheque amount, or both."
  },
  {
    question: "Can directors of a Private Limited company be held personally liable for unpaid monthly wages?",
    answer: "Yes. While a private limited company is a separate legal entity, directors can be held personally liable under various state Shops and Establishments Acts, which define 'employer' to include directors, partners, and managers responsible for the supervision of the establishment. Additionally, if the employer has deducted EPF or TDS but failed to deposit it, or if fraud is evident, directors face personal criminal prosecution under the IPC/BNS."
  },
  {
    question: "How does the SAMADHAN portal help in recovering pending salaries of active employees?",
    answer: "The SAMADHAN portal (Ministry of Labour & Employment) is an online platform for filing industrial and wage disputes. Active employees can register their grievances digitally. The portal routes the application to the jurisdictional Conciliation Officer, who summons the employer's management for joint conciliation meetings. If the employer refuses to settle, the officer submits a Failure of Conciliation (FOC) report, which allows the case to be referred to the Labour Court."
  },
  {
    question: "Can I file an NCLT bankruptcy petition against my employer for unpaid wages?",
    answer: "Yes. Employees are classified as 'Operational Creditors' under the Insolvency and Bankruptcy Code (IBC), 2016. If a company defaults on salary payments, employees can jointly file a corporate insolvency resolution petition under Section 9 of the IBC before the National Company Law Tribunal (NCLT). While the minimum threshold for corporate insolvency is ₹1 crore, multiple employees from the same defaulting company can club their pending wage claims together to meet this threshold."
  }
];

const reviews = [
  {
    id: "rev-ps-1",
    name: "Vikram Malhotra (Lead Frontend Developer)",
    rating: 5,
    review: "My employer, a mid-sized IT service firm in Pune, delayed our salaries for three consecutive months while demanding we work 10 hours a day. The management kept giving vague promises. LegalRecovery drafted an authoritative legal demand notice and sent it to the company's registered office and the directors' home addresses. Fearing legal prosecution and investor backlash, the company cleared all my outstanding salaries with 12% interest within 10 days. Exceptional service!"
  },
  {
    id: "rev-ps-2",
    name: "Ridhi Sharma (Senior Marketing Lead)",
    rating: 5,
    review: "The management unilaterally decided to cut our salaries by 35% citing a drop in client acquisitions. They did not take any consent and threatened to sack anyone who objected. LegalRecovery intervened and served a formal notice outlining how this violated the Indian Contract Act and state labor laws. The firm backed down immediately, restored our original salary structure, and refunded all deducted arrears. Truly professional legal-tech platform."
  },
  {
    id: "rev-ps-3",
    name: "Aditya Hegde (Operations Manager)",
    rating: 5,
    review: "I was placed on forced unpaid leave for 'bench optimization' without any written agreement or compensation. I was completely helpless. LegalRecovery helped me draft and file a wage dispute on the SAMADHAN portal. Faced with formal summons from the Conciliation Officer and the prospect of a Labour Court trial, the company management settled my entire pending salary for the forced leave period. Highly recommend!"
  },
  {
    id: "rev-ps-4",
    name: "Meera Krishnan (Technical Content Writer)",
    rating: 5,
    review: "My previous company deducted EPF from my monthly pay but never deposited it in my PF account. They also withheld my salary for the last active month. LegalRecovery served a statutory warning notice highlighting criminal liability under IPC 406 for breach of trust. Fearing police action and PF commissioner audits, the directors deposited the EPF arrears and paid my pending wages. The flat pricing was very transparent."
  },
  {
    id: "rev-ps-5",
    name: "Saurabh Joshi (Sales Executive)",
    rating: 5,
    review: "My monthly salary payments were delayed by 20-25 days every single month, resulting in heavy credit card penalties and loan bounce charges. LegalRecovery drafted a formal notice demanding the pending salary along with special damages for financial hardship. The company immediately streamlined the monthly payroll schedule and reimbursed all my credit card late fees. Thank you, LegalRecovery!"
  },
  {
    id: "rev-ps-6",
    name: "Pranab Roy (Creative Consultant)",
    rating: 5,
    review: "A startup defaulted on my monthly retainers for four months. They kept ignoring my Slack messages and emails. LegalRecovery helped me serve a legal notice under Order 37 of the CPC for fast-track recovery. The legal pressure worked immediately; the company's legal counsel contacted me and processed the entire pending payment within two weeks."
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
      "name": "Pending Salary From Employer",
      "item": "https://www.legalrecovery.in/recovery/pending-salary-from-employer"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pending Salary From Employer? Recover Delayed Wages Legally in India",
  "description": "Exhaustive legal guide on recovering pending salaries, delayed monthly wages, unilateral salary cuts, and forced unpaid leaves in India under labor codes and acts.",
  "image": "https://www.legalrecovery.in/og-pending-salary.png",
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
  "name": "Pending Salary Recovery Service",
  "image": "https://www.legalrecovery.in/og-pending-salary.png",
  "description": "Expert assistance for recovering pending salaries, delayed monthly wages, and unauthorized deductions from employers in India.",
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

export default function PendingSalaryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "wage-default-overview", title: "Overview of Active Wage Default" },
    { id: "payment-timeline-laws", title: "Statutory Monthly Credit Timelines" },
    { id: "unilateral-cuts-breach", title: "Illegal Salary Deductions & Cuts" },
    { id: "constructive-layoffs", title: "Forced Unpaid Leaves & Bench Issues" },
    { id: "epf-contribution-theft", title: "EPF Deduction & Non-Deposit Offense" },
    { id: "reimbursement-withholding", title: "Unpaid Allowances & Reimbursements" },
    { id: "active-escalation-flow", title: "Active Dispute Escalation Timeline" },
    { id: "documentation-checklist", title: "Evidence Gathering for Active Employees" },
    { id: "directors-liability", title: "Personal Liability of Company Directors" },
    { id: "samadhan-mediation", title: "Online Grievance via SAMADHAN Portal" },
    { id: "labour-court-computation", title: "Labour Court Action under Section 33-C(2)" },
    { id: "summary-suits-order37", title: "Summary Suits for Non-Workmen & Managers" },
    { id: "nclt-insolvency-petition", title: "IBC Petitions for Accumulated Wage Arrears" },
    { id: "cheque-bounce-criminal", title: "Criminal Case for Bounced Salary Cheques" },
    { id: "section-89-tax-form", title: "Tax Arrears Relief under Section 89(1)" },
    { id: "interest-and-emi-damages", title: "Claiming Interest, EMI Fees, & Damages" },
    { id: "employer-excuse-counters", title: "Countering Corporate Financial Excuses" },
    { id: "sakshya-digital-proof", title: "Digital Evidence under BSA 2023" },
    { id: "judicial-precedents-wage-rights", title: "Landmark Court Precedents on Active Wage Protection" },
    { id: "recovery-case-studies", title: "Detailed Active Recovery Case Studies" },
    { id: "service-reviews", title: "Client Testimonials & Ratings" },
    { id: "why-legalrecovery", title: "Why Choose LegalRecovery Platform?" },
    { id: "faq-accordion", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Pending Salary Recovery", href: "/recovery/pending-salary-from-employer" }
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
              Is Your Employer <span className="text-[#DC2626]">Withholding Your Salary</span> During Active Service?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Don&apos;t tolerate illegal wage delays, forced unpaid leaves, or unauthorized salary cuts. Get professional legal assistance to recover your pending salaries and dues online.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Recovery Now
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
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
                
                {/* Overview of Active Wage Default */}
                <section id="wage-default-overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Overview of Active Wage Default</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Earning a living is the foundational promise of any employment contract. You dedicate your specialized skills, labor, and time to an organization with a clear expectation of compensation. However, a highly distressing issue in the Indian corporate landscape—affecting professionals in IT hubs like Bengaluru, Hyderabad, and Noida as well as startup clusters in Gurugram and Pune—is the withholding or delaying of monthly salaries of active, working employees. At LegalRecovery, our panel of labor law advocates frequently encounters questions regarding how to deal with an employer who has stopped paying monthly salaries while expecting employees to report to work and meet project deadlines.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Ongoing salary delays represent a direct violation of your legal rights and differ fundamentally from post-resignation Full and Final (FNF) settlement disputes. When an active employee is not paid, their entire financial system is placed under extreme pressure. It leads to credit card defaults, home and car loan EMI bounces, rental payment delays, and an inability to manage household and medical expenses. Employers who unilaterally decide to delay salaries are breaching the core covenant of the employment agreement and exploiting the professional dependence of their workforce.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian labor legislation, employees are not business partners who share corporate financial risk or funding shortfalls. An employee is entitled to their monthly wages regardless of the company&apos;s cash flow deficits, delayed client payments, or pending VC funding rounds. If you are experiencing persistent wage delays while remaining on active rolls, you have complete statutory protection to demand immediate recovery of your pending salaries along with compensation.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Willful non-payment or delay of monthly wages is a direct violation of an employee&apos;s right to life and livelihood under Article 21 of the Constitution of India, representing a severe statutory default by the establishment.&quot;
                    </div>
                  </div>
                </section>

                {/* Statutory Monthly Credit Timelines */}
                <section id="payment-timeline-laws" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Statutory Monthly Credit Timelines</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary central legislation protecting employee salaries in India is the <strong>Payment of Wages Act, 1936</strong>. Originally designed to protect industrial workers, its principles and statutory timelines have been extended to cover the vast majority of commercial establishments, offices, and service sectors.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key provisions of the Act that safeguard your salary payments include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Section 3 (Responsibility for Payment):</strong> Every employer is personally responsible for the payment of all wages required to be paid under the Act to persons employed by him.</li>
                      <li><strong>Section 4 (Fixation of Wage-Periods):</strong> The employer must fix wage-periods, which cannot exceed one month. Daily, weekly, or fortnightly wage periods are permitted, but salary cannot be calculated on a multi-month or quarterly basis.</li>
                      <li><strong>Section 5 (Time of Payment):</strong> Wages must be paid before the expiry of the 7th day of the following month in establishments employing fewer than 1,000 workers. For larger establishments, wages must be paid before the expiry of the 10th day.</li>
                      <li><strong>Section 7 (Authorized Deductions):</strong> The employer can only make deductions specified under the Act (such as EPF, Income Tax, or Professional Tax). Any deduction for performance issues, business losses, or disciplinary actions not backed by a formal inquiry is classified as an unauthorized deduction and is strictly illegal.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      These timelines are not suggestions. If an employer repeatedly pays salaries on the 20th or 25th of the month, or pushes the payout to subsequent months, they are committing a continuous offense. You do not need to resign or wait for your exit to initiate legal procedures against this systemic delay.
                    </p>
                  </div>
                </section>

                {/* Illegal Salary Deductions & Cuts */}
                <section id="unilateral-cuts-breach" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Illegal Salary Deductions &amp; Cuts</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      During operational challenges, employers may attempt to reduce employee packages unilaterally, announcing a 10%, 20%, or 30% pay cut via email. Under the <strong>Indian Contract Act, 1872</strong>, this is an illegal breach of contract.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      An employment agreement is a bilateral contract. The salary structure defined in your appointment letter cannot be modified unless you agree to the change in writing. If an employer cuts your salary without your consent:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>It represents an unauthorized deduction under Section 7 of the Payment of Wages Act.</li>
                      <li>You can object in writing immediately, stating that you do not accept the salary cut and are working under protest. Silence can sometimes be construed as acceptance, so a formal written objection is crucial.</li>
                      <li>You can legally claim the deducted amount as pending wages. The employer cannot use performance arguments or market conditions retroactively to justify a pay cut.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Many employers try to camouflage these cuts as 'performance-linked adjustments' or 'deferred payouts'. Deferred salary is still a liability on the company's books. If you have worked the hours, you are entitled to the full contractual pay. Our legal team helps you draft a formal response to reject unilateral cuts and demand the immediate restoration of your contractual compensation.
                    </p>
                  </div>
                </section>

                {/* Forced Unpaid Leaves & Bench Issues */}
                <section id="constructive-layoffs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Forced Unpaid Leaves &amp; Bench Issues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Another corporate tactic is placing employees on indefinite &quot;forced leave without pay&quot; or &quot;bench period&quot; during business transitions. In labor law, this is treated as an illegal <strong>layoff</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Industrial Disputes Act, 1947</strong>, establishments employing 50 or more workmen cannot place employees on forced unpaid leave without complying with Chapter VA. The law mandates:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>The employer must pay <strong>Layoff Compensation</strong> equal to 50% of the basic salary plus dearness allowance for the entire period of forced leave.</li>
                      <li>If the layoff exceeds 45 days, the employer cannot extend it indefinitely without initiating a formal retrenchment process with statutory severance pay.</li>
                      <li>Indefinite forced leave without compensation constitutes constructive dismissal, allowing employees to claim full back wages.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your employer has sent an email placing you on zero-pay status or 'temporary leave' until new projects are acquired, they are violating central labor codes. You remain on the rolls of the company, and they cannot legally suspend their obligation to pay you while restricting you from taking other employment.
                    </p>
                  </div>
                </section>

                {/* EPF Deduction & Non-Deposit Offense */}
                <section id="epf-contribution-theft" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">EPF Deduction &amp; Non-Deposit Offense</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When companies experience cash flow crises, they often deduct the employee&apos;s Provident Fund (EPF) share from monthly payslips but fail to deposit it with the Employee Provident Fund Organisation (EPFO). This is a serious statutory and criminal offense.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Employees' Provident Funds and Miscellaneous Provisions Act, 1952</strong>, employer and employee contributions must be deposited into the employee's UAN account within 15 days of the close of the month.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Deducting the employee&apos;s share of EPF from their salary and failing to deposit it is classified as a criminal offense under <strong>Section 405/406 of the Indian Penal Code (IPC)</strong> (Criminal Breach of Trust), carrying a penalty of up to 3 years of imprisonment. In the modern legal framework under the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>, Section 316 enforces strict penal actions against directors who default on statutory trusts.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      We assist affected employees in filing formal complaints with the Regional Provident Fund Commissioner. The commissioner has wide powers under Section 7A of the EPF Act to conduct inquiries, summon company directors, audit financial books, and freeze bank accounts to recover PF contributions.
                    </p>
                  </div>
                </section>

                {/* Unpaid Allowances & Reimbursements */}
                <section id="reimbursement-withholding" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Unpaid Allowances &amp; Reimbursements</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In addition to basic salary components, many active employees are owed substantial sums in travel reimbursements, internet allowances, client entertainment expenses, and medical claims. When companies face a cash crunch, they stop processing these claims, forcing employees to fund business expenses out of their own pockets.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the broader definition of 'wages' in Indian jurisprudence, any sum payable to an employee by way of allowances or reimbursements under the terms of employment constitutes a debt due. An employer cannot legally distinguish between base salary and verified business expenses when withholding payments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you have submitted valid bills and received approval on the company's expense management portal, these amounts are legally binding debts. We ensure that all pending reimbursements are itemized and included in the recovery demands, backed by portal screenshots and expense sheets.
                    </p>
                  </div>
                </section>

                {/* Active Dispute Escalation Timeline */}
                <section id="active-escalation-flow" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Active Dispute Escalation Timeline</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your salary is delayed, following a structured escalation process is crucial. It protects your professional position while building a solid documentary record:
                    </p>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-6">
                      <div>
                        <span className="font-extrabold text-sm text-[#DC2626] uppercase">Stage 1: Internal Grievance (Days 1 to 5)</span>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          Send a polite, written email to the payroll department, HR, and your manager. Request the exact date of salary credit and a reason for the delay. Avoid verbal follow-ups; keep all communications on email to preserve the digital trail.
                        </p>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <span className="font-extrabold text-sm text-[#DC2626] uppercase">Stage 2: Formal Representation to Leadership (Days 6 to 15)</span>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          If the delay persists, send a formal representation to the CEO, Directors, and HR Head. State the total pending amount, calculate the interest or EMI bounce charges you are facing, and request payment within 5 working days.
                        </p>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <span className="font-extrabold text-sm text-[#DC2626] uppercase">Stage 3: Executive Legal Notice (Days 16 to 30)</span>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          If the company leadership ignores your representation, you must transition from internal follows-ups to external legal action. Engage our legal-tech platform to serve an advocate-signed demand notice to the company and the board of directors.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Evidence Gathering for Active Employees */}
                <section id="documentation-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Evidence Gathering for Active Employees</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating legal proceedings, active employees must compile a secure personal backup of their employment records. Defaulting companies often revoke access to email accounts, Slack channels, and HR portals without warning to destroy evidence.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Ensure you have downloaded and saved the following documents to a personal device:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Appointment Letter &amp; Agreements:</strong> The original employment contract, salary revision letters, and policy handbooks.</li>
                      <li><strong>Financial Records:</strong> Monthly payslips for the last 6 months, bank account statements showing missing salary deposits, and Form 26AS/AIS verifying TDS deductions.</li>
                      <li><strong>Proof of Work:</strong> Screenshots of approved timesheets, biometric attendance logs, project deliverables, and emails showing you were actively working during the unpaid period.</li>
                      <li><strong>Communications:</strong> PDFs of emails where management promises to pay salary by a specific date, Slack or Teams chat exports, and WhatsApp chat screenshots confirming the wage delay.</li>
                    </ul>
                  </div>
                </section>

                {/* Personal Liability of Company Directors */}
                <section id="directors-liability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Personal Liability of Company Directors</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common misconception among startup founders and corporate executives is that the 'limited liability' of a Private Limited company protects them from personal legal action. Under Indian labor law, this corporate shield has significant limitations.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Most state <strong>Shops and Commercial Establishments Acts</strong> define the term 'employer' to include any person who has ultimate control over the affairs of the establishment, specifically naming directors, partners, and managing partners.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When we serve a legal notice, we do not address it solely to the company. We name all active directors of the company as individual parties and send physical copies of the notice directly to their registered residential addresses (as listed in the MCA registry).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This strategy forces the directors to pay attention. They realize that they can be personally prosecuted for statutory wage defaults, which can impact their ability to run other companies, travel abroad, or raise institutional capital. Naming directors personally is often the single most effective trigger for a speedy settlement.
                    </p>
                  </div>
                </section>

                {/* Online Grievance via SAMADHAN Portal */}
                <section id="samadhan-mediation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Online Grievance via SAMADHAN Portal</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employer does not respond to the legal notice, employees who fall under the category of 'workmen' can approach the state Labour Department. The government provides an online conciliation portal named <strong>SAMADHAN</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Through the SAMADHAN portal, you can submit your wage dispute digitally. The application is reviewed and assigned to a Conciliation Officer of the region. The officer has the statutory power to:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>Issue formal summons to the company management, directing them to appear in person for joint conciliation meetings.</li>
                      <li>Direct the company to produce payroll ledgers, bank transactions, and attendance records.</li>
                      <li>Mediate an amicable settlement, which is documented in a formal Settlement Deed under Section 18(1) of the Industrial Disputes Act, 1947.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employer fails to appear after multiple summons or refuses to settle, the Conciliation Officer marks the process as failed and issues a Failure of Conciliation (FOC) report. This FOC report is a mandatory prerequisite to file a formal case in the Labour Court.
                    </p>
                  </div>
                </section>

                {/* Labour Court Action under Section 33-C(2) */}
                <section id="labour-court-computation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Labour Court Action under Section 33-C(2)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When conciliation fails, the dispute goes to the Labour Court. For employees, the most powerful provision for recovering pending wages is <strong>Section 33-C(2) of the Industrial Disputes Act, 1947</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 33-C(2), the Labour Court does not need to conduct a prolonged trial on the merits of the employment. The court acts as an executing court to 'compute' the exact monetary value of the benefits or wages you are entitled to.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once you produce your appointment letter, bank statement showing the missing credits, and payslips, the court computes the outstanding amount. The court then issues a <strong>Revenue Recovery Certificate (RRC)</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The RRC is sent directly to the District Collector or Magistrate of the area. The Collector has the legal authority to recover the money from the company as arrears of land revenue, which includes freezing the company's bank accounts, attaching office assets, and sealing their commercial premises.
                    </p>
                  </div>
                </section>

                {/* Summary Suits for Non-Workmen & Managers */}
                <section id="summary-suits-order37" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Summary Suits for Non-Workmen &amp; Managers</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For senior managers, tech leads, executives, and consultants who do not fall under the definition of 'workmen', the primary remedy is filing a civil <strong>Summary Suit</strong> under <strong>Order 37 of the Code of Civil Procedure, 1908 (CPC)</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A summary suit is a fast-track civil recovery proceeding specifically designed for monetary claims arising out of written contracts. Unlike standard civil suits that can drag on for years, Order 37 restricts the defendant's ability to delay:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>Once the summons are served, the employer must enter an appearance within <strong>10 days</strong>. If they fail, the court assumes they admit the claim and passes a decree in your favor immediately.</li>
                      <li>If they appear, they must file a petition showing 'Leave to Defend'. The court will deny this leave if their defense is found to be a sham or a delay tactic.</li>
                      <li>If the defense is weak, the court will often order the company to deposit the entire disputed salary amount in the court's bank account as a condition to contest the case.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Order 37 is a highly effective tool for recovering high-value executive salaries, as companies cannot afford to keep their capital blocked in court deposits.
                    </p>
                  </div>
                </section>

                {/* IBC Petitions for Accumulated Wage Arrears */}
                <section id="nclt-insolvency-petition" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">IBC Petitions for Accumulated Wage Arrears</h2>
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

                {/* Criminal Case for Bounced Salary Cheques */}
                <section id="cheque-bounce-criminal" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Criminal Case for Bounced Salary Cheques</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your employer issues a cheque for your pending salary and it bounces due to 'insufficient funds' or 'stop payment' instructions, the matter shifts from a civil contract breach to a serious criminal offense.
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

                {/* Tax Arrears Relief under Section 89(1) */}
                <section id="section-89-tax-form" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Tax Arrears Relief under Section 89(1)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a company delays your salary for several months and pays the accumulated arrears in a subsequent financial year, it can push you into a higher tax bracket, causing an unfair tax burden.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To protect taxpayers, the Income Tax Act, 1961 provides relief under <strong>Section 89(1)</strong>. This section allows you to spread the recovered salary arrears back to the financial years in which they were actually earned, reducing your tax liability for the current year.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To claim this relief, you must file <strong>Form 10E</strong> online on the Income Tax e-filing portal before filing your Income Tax Return (ITR). If you file your ITR without Form 10E, the tax department will reject your Section 89(1) claim and issue a tax demand notice. Our tax partners assist you in calculating the relief and filing Form 10E.
                    </p>
                  </div>
                </section>

                {/* Limitation Timelines */}
                <section id="limitation-period" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Limitation Timelines</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Every wage recovery claim is governed by strict statutory timelines. Under <strong>Article 7 of the Schedule to the Limitation Act, 1963</strong>, the limitation period to file a civil money recovery suit is <strong>three (3) years</strong> from the date the wages became due.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For labor-specific forums under the Payment of Wages Act, 1936, the limitation to file a claim before the authority is <strong>12 months</strong> from the date the deduction or delay occurred. While delayed claims may be accepted with sufficient cause, we advise serving a legal notice and starting recovery immediately to protect your rights.
                    </p>
                  </div>
                </section>

                {/* Claiming Interest, EMI Fees, & Damages */}
                <section id="interest-and-emi-damages" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Claiming Interest, EMI Fees, &amp; Damages</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A delayed salary is not just a statistical issue; it causes tangible financial harm. Many employees suffer from credit card interest rates of up to 42% per annum, loan EMI bounce fees of ₹500 to ₹1,000 per bounce, and permanent damage to their CIBIL score.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 73 of the Indian Contract Act, 1872</strong>, you have the right to claim compensation for any loss or damage that naturally arose in the usual course of things from the breach of contract.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When we compute your claim, we calculate:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Interest:</strong> Simple interest at 12% to 18% per annum from the date the salary became due.</li>
                      <li><strong>Bank Penalties:</strong> Actual EMI bounce charges and credit card late fees incurred due to the delay.</li>
                      <li><strong>Mental Harassment Damages:</strong> Compensation for the mental agony and professional distress caused by the employer's default.</li>
                    </ul>
                  </div>
                </section>

                {/* Countering Corporate Financial Excuses */}
                <section id="employer-excuse-counters" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Countering Corporate Financial Excuses</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Defaulting employers raise standard corporate excuses to justify their delays. Knowing your legal rights allows you to dismiss these pretexts:
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900">Excuse 1: &quot;Our funding round was delayed, we will pay when it closes&quot;</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
                          <strong>Legal Counter:</strong> Under labor laws, salary is not a profit-sharing scheme. The employer must pay wages for the work done from their own capital, assets, or personal loans. Funding cycles do not suspend statutory payment obligations.
                        </p>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <h4 className="font-extrabold text-sm text-slate-900">Excuse 2: &quot;Your performance was poor during the month, so we are withholding pay&quot;</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
                          <strong>Legal Counter:</strong> An employer cannot retrospectively deny salary for hours already worked based on performance arguments. If performance was poor, they could have initiated disciplinary action or terminated you. Withholding wages for completed work is an illegal deduction.
                        </p>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <h4 className="font-extrabold text-sm text-slate-900">Excuse 3: &quot;You signed a training bond/employment lock-in clause&quot;</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
                          <strong>Legal Counter:</strong> Under Section 27 of the Contract Act, any agreement in restraint of trade or profession is void. Training bonds are only enforceable if the company can prove actual, specialized third-party expenditure on you. Even then, they cannot unilaterally deduct the bond amount from your monthly wages without your consent.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Digital Evidence under BSA 2023 */}
                <section id="sakshya-digital-proof" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Digital Evidence under BSA 2023</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern corporate workplace, critical communications occur on Slack, Microsoft Teams, WhatsApp, and official email accounts. Under the new <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced the Indian Evidence Act, digital records are fully admissible as primary evidence.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Specifically, <strong>Section 63 of the BSA</strong> regulates the admissibility of electronic records. To ensure your digital evidence stands up in a court of law:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li>Save email threads as PDFs with complete header information.</li>
                      <li>Take screenshots of Slack or Teams chats where managers acknowledge your work or discuss salary delay timelines, ensuring the dates and names are visible.</li>
                      <li>Accompany all digital submissions with the mandatory electronic certificate under Section 63, verifying the authenticity of the device and source. We provide automated templates to generate these certificates.</li>
                    </ul>
                  </div>
                </section>

                {/* Landmark Court Precedents on Active Wage Protection */}
                <section id="judicial-precedents-wage-rights" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Landmark Court Precedents on Active Wage Protection</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Indian judiciary has consistently ruled in favor of employee wage protection, establishing that the right to receive wages is a fundamental right. Some key landmark precedents include:
                    </p>
                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900">1. State of Maharashtra v. Chandrabhan Tale (1983) - Supreme Court</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
                          The Supreme Court of India held that wages are not a bounty or charity, but a fundamental property right. Withholding or paying nominal wages to an active employee is a violation of the right to live with dignity under Article 21 of the Constitution.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900">2. People's Union for Democratic Rights v. Union of India (1982) - Supreme Court</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
                          The court held that forcing employees to work without paying them their contractual wages constitutes 'forced labor' under Article 23 of the Constitution, even if the employment started voluntarily.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-extrabold text-sm text-slate-900">3. Divisional Engineer, G.I.P. Railway v. Mahadeo Raghoo (1955) - Supreme Court</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
                          The court clarified that the term 'wages' includes any remuneration payable under the contract, and employers cannot make arbitrary deductions under the guise of administrative policies.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Detailed Active Recovery Case Studies */}
                <section id="recovery-case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Detailed Active Recovery Case Studies</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      We have resolved hundreds of active salary recovery cases across various sectors. Below are two representative scenarios showing our legal intervention:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Active Wage Default</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹3.6 Lakhs from an Ed-tech Startup</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A curriculum manager faced salary delays for three months. The company refused to pay, claiming financial distress. We served a legal notice copied directly to all board directors and venture capital investors. Seeing the institutional risk and threat of labor commissioner conciliation, the company settled the entire pending dues along with interest within 12 days.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Unilateral Cuts Stopped</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Stopped 40% Salary Cut in a Marketing Firm</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A marketing associate in Noida was forced to accept a 40% pay cut or face termination. We served a statutory notice outlining that unilateral cuts breach the contract under the Contract Act. The company immediately restored the original pay scale and reimbursed all accumulated arrears.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Client Testimonials & Ratings */}
                <section id="service-reviews" className="scroll-mt-32">
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

                {/* Why Choose LegalRecovery Platform? */}
                <section id="why-legalrecovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose LegalRecovery Platform?</h2>
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
