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
    question: "How long can an employer legally sit on my final settlement in India?",
    answer: "Generally, the full and final settlement (FNF) should be cleared within 30 to 45 days of the last working day. However, according to the Payment of Wages Act, if an employee is terminated, the wages earned must be paid before the expiry of the second working day after termination. For resignation, the timeline is usually governed by the employment contract, but 30 days is the standard industry practice."
  },
  {
    question: "Can an employer withhold salary due to a missing notice period?",
    answer: "If you fail to serve the mandatory notice period, the employer has the right to adjust notice pay from your final dues. However, they cannot withhold your entire salary if the notice pay amount is less than the total outstanding. They must provide a detailed calculation of the recovery."
  },
  {
    question: "What should I do if my employer is not responding to my FNF emails?",
    answer: "If your polite follows-ups are ignored, send a formal registered letter with acknowledgment due (AD) to the company's registered office. If that also fails, the next logical step is to serve a formal legal notice through a labor lawyer. This creates a legal record of your demand."
  },
  {
    question: "Can I file a police complaint for non-payment of salary?",
    answer: "Non-payment of salary is primarily a civil and labor dispute. While you can try to file a complaint for 'criminal breach of trust' or 'cheating', the police often advise approaching the Labour Court. However, if there is documented fraud, an FIR might be possible."
  },
  {
    question: "What is the time limit for filing a case against an employer for unpaid wages?",
    answer: "Under the Payment of Wages Act, the limitation period is generally 12 months from the date the wages were due. For civil recovery suits, the limitation period is 3 years. It is always better to initiate legal action as soon as the standard 45-day window for FNF expires."
  },
  {
    question: "Do I need to go to court personally for salary recovery?",
    answer: "For conciliation proceedings before the Labour Commissioner, you may need to appear. In Labor Court or Civil Court, your advocate can represent you for most hearings, but your presence might be required for evidence and cross-examination."
  },
  {
    question: "Can I claim interest on my unpaid salary?",
    answer: "Yes, you can claim interest on delayed payments. Depending on the forum, courts often grant interest ranging from 6% to 12% per annum. In cases of gratuity, the Payment of Gratuity Act specifically mandates simple interest for delays beyond 30 days."
  },
  {
    question: "What if the company says I haven't returned company property?",
    answer: "Employers often use the 'pending handover' excuse to withhold FNF. It is vital to have an acknowledgment from your manager or IT department that all assets were returned. If you have this proof, they cannot legally withhold your salary."
  },
  {
    question: "Can I approach the Labour Commissioner if my salary is high?",
    answer: "The Payment of Wages Act applies to employees earning below a certain threshold (currently ₹24,000 per month). If you earn more, you might not fall under this specific act but can still approach the Labour Court under the Industrial Disputes Act (if you are a 'workman') or file a Civil Suit for recovery."
  },
  {
    question: "Does non-payment of salary affect my experience certificate?",
    answer: "Legally, an experience certificate and salary are two different things, but employers often withhold both to pressure employees. A legal notice can demand both the unpaid dues and the issuance of your service certificate and relieving letter."
  },
  {
    question: "What happens if the employer has closed down the company?",
    answer: "If the company is in liquidation, you become a creditor. Employees are usually given priority during the distribution of assets. You would need to file your claim with the Official Liquidator."
  },
  {
    question: "Can a legal notice stop an employer's harassment?",
    answer: "Yes, a formal legal notice from a reputed law firm like AMA Legal Solutions often signals to the employer that you are serious. Most companies prefer settling the dues rather than spending on litigation and risking their reputation."
  },
  {
    question: "Is holding my relieving letter legal if my FNF is pending?",
    answer: "No. Service records like relieving letters and experience certificates are your property and proof of your professional history. An employer cannot legally link the issuance of these documents to financial settlements unless specifically stated and justified by a contract (which is also highly contestable)."
  },
  {
    question: "What is the '240-day rule' for Gratuity eligibility?",
    answer: "While the standard rule is 5 years, the 240-day rule implies that if you have worked for 4 years and 240 days in the final year (or 190 days in a 6-day week), you are eligible for gratuity. Courts have repeatedly upheld this in favor of employees."
  },
  {
    question: "Can directors be held personally liable for unpaid salary?",
    answer: "In cases of private limited companies, while the company is a separate legal entity, directors can be held personally liable under certain labor laws and if 'Criminal Breach of Trust' is proven. A well-drafted legal notice often names directors to pierce the corporate veil."
  },
  {
    question: "What is the SAMADHAN portal and how does it help?",
    answer: "The SAMADHAN portal is a government initiative for online filing of industrial disputes. It allows employees to approach the Labour Commissioner digitally, initiating a conciliation process where a government officer mediates between you and your employer."
  },
  {
    question: "What is a Summary Suit in salary recovery?",
    answer: "Under Order 37 of the CPC, a Summary Suit is a fast-track civil remedy for recovering debts based on written contracts. It is much faster than regular civil suits as the defendant must seek 'leave to defend' from the court."
  },
  {
    question: "What if my employer sent me a cheque that bounced?",
    answer: "A bounced FNF cheque is a criminal offense under Section 138 of the Negotiable Instruments Act. You must send a statutory notice within 30 days and can thereafter file a criminal case which carries a penalty of up to double the cheque amount."
  },
  {
    question: "Can I claim compensation for mental agony caused by delayed pay?",
    answer: "Yes, in your legal claim, you can demand damages for mental agony, professional harassment, and financial hardship caused by the delay, especially if it resulted in loan defaults or medical emergencies."
  },
  {
    question: "How do I prove my performance if an employer claims 'poor performance' during FNF?",
    answer: "Vague claims of poor performance post-resignation are rarely accepted by courts. You can counter this by presenting previous performance appraisals, bonus letters, appreciation emails, and your resignation acceptance letter."
  },
  {
    question: "What is Section 89(1) tax relief for salary arrears?",
    answer: "If you receive several months of unpaid salary at once, it might push you into a higher tax bracket. Section 89(1) allows you to spread this income over the years it belongs to, thereby reducing your tax liability. You must file Form 10E to claim this."
  },
  {
    question: "Is WhatsApp evidence admissible in Labour Court?",
    answer: "Yes, under Section 65B of the Indian Evidence Act, digital communications like WhatsApp chats and emails are admissible as evidence in court, provided they are accompanied by a specific certificate verifying their authenticity."
  },
  {
    question: "What happens if an EPF deposit is defaulted?",
    answer: "Non-deposit of PF after deduction is a criminal offense. You can report this to the Regional PF Commissioner, who has the power to conduct an inquiry under Section 7A and even issue arrest warrants against defaulting employers."
  },
  {
    question: "Can I settle the case out of court after initiating legal action?",
    answer: "Absolutely. Most labor disputes are settled 'out of court' or during the conciliation phase. However, ensure that any such settlement is documented in a formal 'Settlement Deed' and the payment is received before you withdraw your cases."
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
      "name": "Employer Not Paying Salary After Resignation",
      "item": "https://www.legalrecovery.in/recovery/unpaid-salary"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Employer Not Paying Salary After Resignation? Legal Remedies for Salary Recovery in India",
  "description": "Comprehensive guide on what to do when your employer refuses to pay your salary or FNF after resignation. Learn about legal notices, labor court procedures, and your rights.",
  "image": "https://www.legalrecovery.in/og-salary-recovery.png",
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
  "name": "Salary Recovery Legal Services",
  "image": "https://www.legalrecovery.in/og-salary-recovery.png",
  "description": "Expert legal assistance for recovering unpaid salary and FNF dues from employers in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "850"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ananya Verma"
      },
      "reviewBody": "My previous startup refused to pay my three months of pending salary. LegalRecovery sent a strong legal notice and within 15 days, my FNF was cleared. Truly grateful!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sandeep Malhotra"
      },
      "reviewBody": "Professional approach. They handled my labor court case with extreme diligence. Highly recommend for any employment-related legal issues."
    }
  ]
};

export default function UnpaidSalaryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "rights-of-employees", title: "Your Rights" },
    { id: "fnf-components", title: "Settlement Components" },
    { id: "pre-legal-steps", title: "Initial Steps" },
    { id: "documentation", title: "Evidence Needed" },
    { id: "legal-notice", title: "Legal Notice" },
    { id: "labour-commissioner", title: "Labour Dept" },
    { id: "labour-court", title: "Labour Court" },
    { id: "civil-suit", title: "Summary Suit" },
    { id: "limitation", title: "Limitation Period" },
    { id: "gratuity-bonus", title: "Gratuity & Bonus" },
    { id: "mental-harassment", title: "Mental Harassment" },
    { id: "employer-defenses", title: "Employer Defenses" },
    { id: "digital-evidence", title: "Digital Evidence" },
    { id: "epf-impact", title: "EPF & PF Impact" },
    { id: "cheque-bounce", title: "Cheque Bounce" },
    { id: "tax-implications", title: "Tax Relief" },
    { id: "state-procedures", title: "State Procedures" },
    { id: "case-studies", title: "Success Stories" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "why-choose-us", title: "Why Choose Us?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Unpaid Salary Recovery", href: "/recovery/unpaid-salary" },
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
              Is Your <span className="text-[#DC2626]">Employer Not Paying Salary</span> After Resignation?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Don&apos;t lose your hard-earned money. Get expert legal representation to recover your unpaid salary, FNF dues, and gratuity. We hold defaulting employers accountable.
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
                               {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Introduction</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Resigning from a job is often the start of a new chapter—a moment of transition that should ideally be marked by mutual respect and professional closure. You expect a smooth handover, a proper farewell, and the timely receipt of your Full and Final (FNF) settlement. However, for a significant number of employees across India—from the tech hubs of Bangalore and Gurugram to the financial centers of Mumbai—this transition turns into a grueling legal battleground. At LegalRecovery, the most frequent and distress-laden query we encounter is: <strong>&quot;What legal recourse do I have if my employer is withholding my salary after my resignation?&quot;</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The impact of an unpaid salary extends far beyond mere financial inconvenience. It is a profound breach of the employment contract and a violation of trust that can disrupt your entire financial ecosystem. Many employees rely on their FNF settlement to fund their notice period buy-outs at new companies, clear pending loans, or manage their household expenses during a career break. When a company unilaterally decides to &quot;sit&quot; on these funds, they aren&apos;t just withholding money; they are jeopardizing your livelihood and peace of mind.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Whether you worked for a high-growth startup that just hit a funding crunch, a legacy conglomerate with slow administrative cycles, or a mid-sized firm using salary as a tool for coercion, your right to receive wages for the work you have performed is absolute. Indian labor laws are some of the most protective in the world for employees, yet they are often poorly understood by the very people they are meant to safeguard.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is a dangerous and common misconception that an employer has total, arbitrary control over your final payout. We often see HR departments using the notice period, &quot;pending handovers,&quot; or &quot;unreturned assets&quot; as ransom to delay or deny payments. This is, in most cases, legally unsustainable. If you have performed the work, the employer is legally obligated to pay you. Our specialized labor law team at LegalRecovery has spent years debunking these corporate myths and ensuring that every single rupee owed to our clients—including interest and damages—is recovered through efficient legal intervention.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Wages are not a bounty or a matter of charity; they are the hard-earned remuneration for labor rendered, and any delay in their payment is a direct assault on the employee&apos;s right to life and dignity under the Constitution of India.&quot;
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Legal Framework</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      India's legal system provides a multi-layered shield for employees. Depending on your role, salary, and the nature of your employer's business, several statutes come into play. Understanding which \"lane\" of the law you fall into is the first step toward a successful recovery.
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">1. The Payment of Wages Act, 1936</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          This is the primary act governing the timely payment of earned wages. While it traditionally applied to lower-income brackets (currently capped at ₹24,000 per month for summarized proceedings), its principles form the bedrock of all wage-related litigation.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-slate-650">
                          <li><strong>Section 5(2):</strong> Explicitly states that where an employee's service is terminated by the employer, the wages earned by him shall be paid before the expiry of the second working day from the day on which his employment is terminated.</li>
                          <li><strong>Section 15:</strong> Allows for claims of up to 10 times the amount of the deduction as compensation, in addition to the unpaid wages.</li>
                        </ul>
                      </div>

                      <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                        <h3 className="text-base md:text-lg font-black text-red-950 mb-2">Constitutional Right: Article 21</h3>
                        <p className="text-sm text-red-900 leading-relaxed">
                          The Supreme Court of India, in landmark cases like <strong>*State of Maharashtra v. Chandrabhan Tale (1983)*</strong> and <strong>*Deokinandan Prasad v. State of Bihar (1971)*</strong>, has established that the right to receive wages and pension is a fundamental right part of the \"Right to Life\" under Article 21. Wages are recognized as property, and no person can be deprived of their property without the authority of law. This means your employer's failure to pay you isn't just a \"company policy\" issue; it's a potential violation of your constitutional rights.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">2. The Industrial Disputes Act, 1947</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          If you fall under the definition of a \"workman\"—which includes most non-managerial and technical staff regardless of salary—this Act provides the most streamlined recovery path.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-slate-650">
                          <li><strong>Section 33-C(2):</strong> This is the most powerful tool in our arsenal. It allows an employee to approach the Labour Court directly to \"compute\" the money due to them. Once the court quantifies the amount, it issues a recovery certificate to the Collector, who can then recover the money from the employer as arrears of land revenue (including sealing their premises if necessary).</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">3. Shops and Commercial Establishments Acts (State Specific)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Each state (Delhi, Maharashtra, Karnataka, etc.) has its own Shops Act. These acts cover almost all private-sector employees who might not fall under the Industrial Disputes Act. They mandate clear rules for termination, notice periods, and the settlement of final dues. In cities like Bangalore or Mumbai, the local Labour Inspector has significant powers to summon your employer based on a complaint filed under these acts.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">4. The Indian Contract Act, 1872</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          For senior executives, directors, and consultants who may not be classified as \"workmen,\" the employment contract is the holy grail. Failure to pay is a \"Breach of Contract.\" We use the principles of the Contract Act to file Summary Suits (Order 37 of the CPC), which are fast-track recovery proceedings where the burden of proof is heavily on the employer to explain why they haven't paid.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Your Rights */}
                <section id="rights-of-employees" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Your Rights</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Knowledge is your first line of defense. Employers often rely on your hesitation or lack of information to justify their delays. Here are the absolute rights you hold the moment you submit your resignation:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Right to Timely Settlement:</strong> Generally, the full and final settlement (FNF) should be cleared within 30 to 45 days of the last working day. Any contract clause extending this past 45 days is legally vulnerable.</li>
                      <li><strong>Right to Relief Documents:</strong> An employer cannot legally withhold your experience certificate or relieving letter as a way to force you to drop your financial claims. These are service records and your property.</li>
                      <li><strong>Right to Leave Encashment:</strong> If your contract allows for leave carry-forward, those accrued days are equivalent to cash. Denying this is a direct, unauthorized wage deduction under labor codes.</li>
                      <li><strong>Right against Unilateral Deductions:</strong> An employer cannot suddenly \"discover\" a loss or a performance issue after you resign and deduct it from your salary without a formal inquiry and your consent.</li>
                      <li><strong>Right to Statutory Dues:</strong> Gratuity, Bonus, and EPF contributions are not \"perks\"—they are statutory mandates. No \"zero-payout\" policy can override these central laws.</li>
                      <li><strong>Right to Legal Advocacy:</strong> You have the right to be represented by a lawyer in communications with the company. A formal notice from a law firm must be acknowledged and answered.</li>
                    </ul>
                  </div>
                </section>

                {/* Settlement Components */}
                <section id="fnf-components" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Settlement Components</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A common tactic used by defaulting employers is to provide a lump-sum figure without a breakdown. We insist on a detailed \"Settlement Sheet.\" Here is a comprehensive list of what should be in your pocket:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Arrears of Salary:</strong> Salary for the last working month, plus any previous months that were delayed. It must include all components: Basic, HRA, Special Allowance, etc.</li>
                      <li><strong>Accrued Benefits (LTA & Medical):</strong> If you haven't claimed your Leave Travel Allowance (LTA) or medical reimbursements for the year, you are entitled to the pro-rata amount as part of your FNF.</li>
                      <li><strong>Variable Pay and Sales Incentives:</strong> Many companies try to skip variable pay by saying \"the employee must be on the payroll on the date of payout.\" This is highly contestable if you have already achieved the targets during your tenure.</li>
                      <li><strong>Reimbursements and Pending Bills:</strong> Travel bills, client entertainment expenses, and internet allowances that you paid out of pocket must be cleared down to the last rupee.</li>
                    </ul>
                  </div>
                </section>

                {/* Initial Steps */}
                <section id="pre-legal-steps" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Initial Steps</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When your salary is delayed, your immediate reaction might be panic or anger. However, a structured, documented approach is far more effective. At LegalRecovery, we recommend a 45-day cycle of administrative &quot;triggering&quot; before moving to hard litigation.
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li><strong>Day 1-7 (Soft Follow-up & Audit):</strong> Send a polite but formal email to HR and your immediate manager. Do not assume malice yet; request a tentative date for the FNF credit and a draft copy of the FNF calculation sheet.</li>
                      <li><strong>Day 8-15 (Demand Statement):</strong> If the first week yields no result, escalate. Send a \"Dues Statement\" where YOU calculate what you are owed, attaching proof of asset handover and IT clearance.</li>
                      <li><strong>Day 16-30 (Final Intimation):</strong> Send a formal registered letter (hard copy) to the company's registered office. State clearly that if the dues are not cleared within 7 days, you will be forced to initiate legal proceedings and claim 18% annual interest.</li>
                    </ol>
                  </div>
                </section>

                {/* Evidence Needed */}
                <section id="documentation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Evidence Needed</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In a court of law, your word against the company's word is useless without documentation. We need a \"Digital Trail\" that proves four things: Your employment, your performance, your resignation, and their silence.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Employment Proof:</strong> Original Appointment Letter, salary slips, Form 16, and TDS certificates.</li>
                      <li><strong>Separation Trace:</strong> Resignation email, resignation acceptance, notice period waivers, and IT/Admin clearance cards.</li>
                      <li><strong>Performance Tracking:</strong> Performance appraisals, target achievement sheets, and client feedback records to counter claims of poor performance.</li>
                      <li><strong>Digital Communications:</strong> Screenshot critical chats (Slack, MS Teams, WhatsApp) where managers acknowledge your work or promise payment dates.</li>
                    </ul>
                  </div>
                </section>

                {/* Legal Notice */}
                <section id="legal-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Legal Notice</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A Legal Notice is a formal, advocate-signed communication that acts as the mandatory prelude to litigation. It is designed to establish a clear cause of action, demand the payment of outstanding dues within a strict window (typically 15 days), and lay down the evidentiary foundation for future court proceedings. Serving a legal notice is not just a procedural formality; it is a critical strategic move that notifies the employer of impending civil and criminal actions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our panel of experienced labor attorneys drafts custom notices tailored to the specific violations in your case. We do not use generic templates. Instead, we cite precise statutes—such as the relevant state&apos;s Shops and Establishments Act, the Payment of Wages Act, 1936, and the Indian Contract Act, 1872. The notice is digitally dispatched via verified email and WhatsApp to the company’s registered office and is copied to the personal residential addresses of all active directors to establish personal liability.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Statistics show that approximately 85% of employer wage disputes are resolved successfully within 15 days of serving a professional legal notice. Most corporate entities prefer to settle the undisputed FNF dues immediately rather than risk facing public litigation, labor inspector audits, or damage to their corporate reputation. A formal notice on our legal panel&apos;s letterhead signals that you are fully prepared to enforce your rights.
                    </p>
                  </div>
                </section>

                {/* Labour Dept */}
                <section id="labour-commissioner" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Labour Dept</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employer fails to comply with the legal notice, the next logical step is to approach the state&apos;s Labour Department. The government provides an administrative conciliation mechanism through the Office of the Labour Commissioner. The primary goal of this department is to mediate disputes between employers and employees and achieve an amicable settlement without putting the employee through lengthy court trials.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To streamline this process, the Ministry of Labour and Employment has launched the <strong>SAMADHAN portal</strong> (Software for Application, Monitoring and Disposal of Industrial Disputes). Through this portal, you can file your salary recovery dispute online. Once the application is admitted, the case is assigned to a Conciliation Officer (CO) who acts as a mediator. The CO has the statutory power to issue summons to the employer&apos;s management and direct them to appear for joint conciliation meetings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      During these proceedings, the employer must produce payroll registers, attendance sheets, and asset clearance logs. If a settlement is reached, a formal &quot;Settlement Deed&quot; is signed under Section 18(1) of the Industrial Disputes Act, 1947, which is legally binding. If the employer fails to appear or refuses to settle despite clear evidence, the Conciliation Officer submits a &quot;Failure of Conciliation Report&quot; (FOC) to the government, paving the way to refer the dispute directly to the Labour Court.
                    </p>
                  </div>
                </section>

                {/* Labour Court */}
                <section id="labour-court" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Labour Court</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When mediation through the Labour Commissioner fails to yield a resolution, the dispute is escalated to the Labour Court. For employees classified as &quot;workmen&quot; under Section 2(s) of the Industrial Disputes Act, 1947, the Labour Court provides a powerful, specialized forum. The most effective provision in our arsenal for salary recovery is <strong>Section 33-C(2)</strong> of the Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 33-C(2), an employee can file an application to &quot;compute&quot; the monetary value of any benefit or wage they are entitled to receive. Unlike regular civil suits that can drag on for years, a proceeding under Section 33-C(2) is focused primarily on the calculation of existing dues. The court acts as an executing court: once you produce your appointment letter, resignation acceptance, and salary slips, the burden shifts to the employer to prove that they paid you.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Upon satisfying itself that the salary is due, the Labour Court passes a binding order and issues a <strong>Revenue Recovery Certificate (RRC)</strong>. This certificate is forwarded to the District Collector or Magistrate of the area where the company is located. The Collector is legally empowered to recover the calculated dues from the employer as &quot;arrears of land revenue.&quot; This includes the power to freeze the company’s bank accounts, attach their physical office assets, or seal their premises to recover your hard-earned wages.
                    </p>
                  </div>
                </section>

                {/* Summary Suit */}
                <section id="civil-suit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Summary Suit</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For senior managers, executives, directors, or consultants who may not qualify as &quot;workmen&quot; under labor laws, the primary civil remedy is filing a <strong>Summary Suit</strong> under <strong>Order 37 of the Code of Civil Procedure, 1908 (CPC)</strong>. A summary suit is a fast-track civil trial specifically designed for recovering liquidated debts or monetary claims arising out of written contracts, such as employment agreements, appointment letters, or signed full-and-final settlement sheets.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In a standard civil suit, the defendant can delay the trial by filing endless replies and applications. However, Order 37 changes the rules entirely in favor of the employee. Once the summary suit is filed and summons are served, the employer must enter an appearance within <strong>10 days</strong>. If they fail to do so, the allegations in the plaintiff&apos;s petition are deemed admitted, and the court immediately passes a judgment and decree in favor of the employee.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the employer enters an appearance, the employee serves a &quot;Summons for Judgment.&quot; The employer must then file a petition showing &quot;Leave to Defend.&quot; The court will inspect the company&apos;s defense: if it is found to be a sham, vexatious, or merely an attempt to delay the trial, the court will deny leave and pass a decree, or order the company to deposit the entire disputed amount in court as a condition to contest the case. This makes Order 37 an exceptionally lethal tool for recovering senior executive salaries.
                    </p>
                  </div>
                </section>

                {/* Limitation Period */}
                <section id="limitation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Limitation Period</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      One of the most critical aspects of salary recovery is timing. Under the Indian legal system, you cannot sleep over your rights and expect the courts to assist you years later. The law of limitation imposes strict statutory timelines within which legal actions must be initiated, failing which your right to seek legal remedies is legally extinguished.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Article 7 of the Schedule to the Limitation Act, 1963</strong>, the limitation period to file a civil recovery suit or a Summary Suit for unpaid wages or salary is <strong>three (3) years</strong>. This clock begins ticking from the date the salary actually became due and payable—usually the last working day or the standard 45-day contract settlement window.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For labor-specific remedies, the timelines are even shorter. Section 15(2) of the <strong>Payment of Wages Act, 1936</strong> specifies a limitation period of <strong>12 months</strong> from the date on which the wages were deducted or due. While courts have the discretion to condone delays under Section 5 of the Limitation Act if you can prove &quot;sufficient cause&quot; (such as a medical emergency or active settlement negotiations), we strongly advise serving a legal notice and initiating formal action immediately after the standard 45-day FNF window expires.
                    </p>
                  </div>
                </section>

                {/* Gratuity & Bonus */}
                <section id="gratuity-bonus" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Gratuity & Bonus</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Full and final settlements must include all statutory dues, not just your base monthly salary. Two of the most commonly withheld components are Gratuity and Statutory Bonus. These are governed by central legislations, and an employer cannot deny them under the guise of &quot;company policy&quot; or &quot;internal rules.&quot;
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Payment of Gratuity Act, 1972</strong>, an employee who has completed 5 years of continuous service with an establishment (defined as having 10 or more employees) is eligible for gratuity. Note that under the &quot;240-day rule&quot; upheld by various High Courts, if you have worked for 4 years and 240 days in the final year, you are eligible. Section 7 of the Act mandates that the employer must pay the gratuity within <strong>30 days</strong> of separation. If they delay, Section 7(3A) obligates them to pay simple interest (currently 10% per annum) for the delay period.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Similarly, the <strong>Payment of Bonus Act, 1965</strong> mandates that every employee who has worked for at least 30 working days in a financial year is entitled to a statutory bonus (ranging from a minimum of 8.33% to a maximum of 20% of their salary). This bonus must be paid within 8 months of the close of the financial year. Withholding these statutory dues is a punishable offence, and we draft specific clauses in our legal notices to highlight these criminal liabilities to the management.
                    </p>
                  </div>
                </section>

                {/* Mental Harassment */}
                <section id="mental-harassment" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Mental Harassment</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The non-payment of salary is not merely a financial contract breach; it is a direct source of immense psychological trauma, emotional distress, and reputational harm. When a company unilaterally decides to sit on your earned salary, it triggers a chain reaction of financial crises, including credit card defaults, missed loan EMIs, rental defaults, and an inability to support family members during medical emergencies.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian civil law, you have the right to claim compensation for this mental harassment. When drafting our recovery notices, we establish a robust claim under <strong>Section 73 of the Indian Contract Act, 1872</strong>, which allows for damages arising from a breach of contract. We calculate the exact financial penalties you suffered (such as EMI bounce charges or credit score degradation) and add a specific claim for general damages for mental agony and professional harassment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Courts have increasingly recognized that withholding an employee’s livelihood is a violation of the &quot;Right to Life with Dignity&quot; under Article 21 of the Constitution. By documenting the exact psychological and financial impact of the delay, our notices make it clear to the employer&apos;s legal department that they are liable to pay substantial damages in addition to the principal salary amount, raising the stakes for them.
                    </p>
                  </div>
                </section>

                {/* Employer Defenses */}
                <section id="employer-defenses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Employer Defenses</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Defaulting employers frequently hide behind standard excuses to justify their failure to clear dues. As legal recovery specialists, we have analyzed and dismantled these defenses in hundreds of cases. Here are the three most common defenses and their legal counters:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Excuse 1: &quot;Poor Performance / KPI Failures&quot;</strong> — Employers often claim post-resignation that the employee&apos;s work was subpar. Legally, performance issues must be addressed during active employment through formal warnings, performance improvement plans (PIPs), and documentation. Retroactive performance claims made after accepting a resignation are viewed by courts as bad-faith tactics and are rejected.</li>
                      <li><strong>Excuse 2: &quot;Enforcing Training Bonds / Lock-in Periods&quot;</strong> — Under Section 27 of the Indian Contract Act, 1872, agreements that restrain trade or profession are void. A training bond is only enforceable if the employer can prove they spent actual, substantial funds on specialized third-party training. Even then, they cannot unilaterally deduct the bond amount from your earned salary; they must pay the salary and file a separate civil claim.</li>
                      <li><strong>Excuse 3: &quot;Asset Handover &amp; Pending Clearances&quot;</strong> — While you are obligated to return company assets, an employer cannot legally block your entire salary over minor clearance disputes. If you have returned key assets (laptops, security badges) and have basic email handovers, the employer is legally required to release your salary and cannot hold your livelihood hostaged.</li>
                    </ul>
                  </div>
                </section>

                {/* Digital Evidence */}
                <section id="digital-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Digital Evidence</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In modern employment disputes, the paper trail is almost entirely digital. Corporate communications occur over email, Slack channels, Microsoft Teams, and WhatsApp. It is a common concern among employees whether these digital conversations hold weight in a court of law. The answer is a resounding yes, provided they are formatted and backed by the correct legal certificates.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 65B of the Indian Evidence Act, 1872</strong> (now replaced by <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023</strong>), electronic records are fully admissible as secondary evidence in legal proceedings. This includes email acknowledgments from HR promising a payment date, WhatsApp chats with your manager discussing pending FNF amounts, and Slack screenshots proving your active participation in handovers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To make this evidence admissible, you must provide a signed <strong>65B Certificate</strong> (or a Section 63 Certificate under the new code). This certificate is a written declaration confirming that the device used to print or retrieve the digital record (your laptop or phone) was in active, working condition, and the data has not been tampered with. We guide our clients on how to preserve their chat histories, archive emails, and prepare these certificates to build an airtight evidentiary file.
                    </p>
                  </div>
                </section>

                {/* EPF & PF Impact */}
                <section id="epf-impact" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">EPF &amp; PF Impact</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      During salary delays, employers often fail to deposit Employee Provident Fund (EPF) contributions. This is a severe statutory violation. Under the <strong>Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1952</strong>, both the employer and employee shares must be deposited with the EPFO by the 15th of the following month.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your salary slips show deductions for EPF, but your EPFO portal shows that no deposits have been made, the employer is guilty of a criminal offense. Specifically, deducting money from an employee&apos;s salary and failing to deposit it with the government constitutes <strong>Criminal Breach of Trust under Section 405/406 of the Indian Penal Code (IPC)</strong> (now under corresponding sections of the Bharatiya Nyaya Sanhita, 2023). This offense carries a penalty of up to three years of imprisonment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Employees can file a formal complaint with the Regional PF Commissioner. The EPFO has the power to initiate an inquiry under <strong>Section 7A</strong> of the EPF Act. The department has judicial powers to summon directors, conduct audits, and issue recovery warrants. If default is proven, the EPFO can freeze the employer&apos;s bank accounts to recover the dues, providing a powerful parallel channel to pressure defaulting managements.
                    </p>
                  </div>
                </section>

                {/* Cheque Bounce */}
                <section id="cheque-bounce" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Cheque Bounce</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Sometimes, a defaulting employer will issue a cheque for your full and final settlement, but when you present it at your bank, it bounces due to &quot;insufficient funds&quot; or &quot;stop payment.&quot; While this is initially frustrating, it actually changes the entire legal landscape in your favor by converting a civil contractual dispute into a serious criminal offense.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A bounced cheque is prosecuted under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>. This is a criminal offense punishable by up to two years of imprisonment, a fine that can go up to double the cheque amount, or both. However, Section 138 is subject to strict, non-negotiable statutory timelines:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The cheque must be presented to the bank within three months of its date of issue.</li>
                      <li>Upon receiving the bank&apos;s return memo confirming the bounce, you must serve a statutory <strong>30-Day Demand Notice</strong> to the drawer of the cheque (the company and the signing director).</li>
                      <li>The employer has 15 days from the receipt of the notice to clear the payment.</li>
                      <li>If they fail to pay within 15 days, you must file a criminal complaint in the Magistrate&apos;s Court within 30 days from the expiry of the 15-day period.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Because Section 138 proceedings lead to the personal arrest and criminal trial of directors, employers almost always settle the outstanding amount immediately upon receiving a statutory Section 138 notice.
                    </p>
                  </div>
                </section>

                {/* Tax Relief */}
                <section id="tax-implications" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Tax Relief</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When your salary is delayed and finally recovered as a lump sum in a subsequent financial year, it can create an unintended tax problem. Receiving several months of accumulated salary along with interest and arrears at once can push your total income into a much higher tax bracket, resulting in a significantly larger tax deduction than if the salary had been paid on time.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To prevent this unfair tax burden, the Income Tax Act, 1961 provides relief under <strong>Section 89(1)</strong>. This section allows you to spread the recovered salary arrears back to the financial years in which they were actually earned. The tax is then recalculated based on the tax slabs of those respective years, effectively reducing your overall tax liability.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To claim Section 89(1) tax relief, you must file <strong>Form 10E</strong> online through the Income Tax e-filing portal before submitting your Income Tax Return (ITR). If you fail to file Form 10E and claim the relief on your ITR, the tax department will issue a tax demand notice and disallow the relief. Our legal-tech platform assists clients by providing clear FNF calculators and referral services to expert chartered accountants to file Form 10E correctly.
                    </p>
                  </div>
                </section>

                {/* State Procedures */}
                <section id="state-procedures" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">State Procedures</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While central labor codes provide a uniform framework, the administration of private-sector employment is heavily governed by state-specific legislations. Every state in India has enacted its own <strong>Shops and Commercial Establishments Act</strong>, which governs office employees, tech professionals, startups, and retail establishments. The timelines and procedures for recovering unpaid dues vary across states.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For example, under the <strong>Delhi Shops and Establishments Act, 1954</strong>, an employer is legally obligated to clear all outstanding F&amp;F dues within three (3) working days of termination or resignation. In contrast, under the <strong>Karnataka Shops and Commercial Establishments Act, 1961</strong> (governing Bangalore&apos;s tech sector), the standard practice is 15 to 30 days, and complaints are filed with the local Assistant Labour Commissioner.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In states like Maharashtra (under the <strong>Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017</strong>), the local Labour Inspector has strong supervisory powers. They can conduct sudden audits of payroll records, summon the directors, and initiate prosecution against the company. At LegalRecovery, we have mapped the specific local procedures, authority jurisdictions, and state-specific formats across major commercial hubs (Delhi NCR, Mumbai, Bangalore, Pune, Chennai, and Hyderabad) to ensure that your complaint is routed to the exact office that will yield the fastest results.
                    </p>
                  </div>
                </section>

                {/* Success Stories */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Stories</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Over the years, we have successfully resolved hundreds of complex salary recovery and employment dues disputes across India. Our data-driven legal notice strategy and structured escalation flow have proven effective against startups, mid-sized firms, and large multinational corporations alike. Below are representative examples of recoveries handled by our legal panel:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Startup Funding Crunch</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹3.6 Lakhs from an Ed-tech Startup</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A senior curriculum manager resigned when the company delayed salaries for three months. The company refused to pay their FNF dues, claiming financial distress. We served a legal notice copied directly to all board directors and venture capital investors. Seeing the institutional risk and threat of labor department escalation, the founders settled the entire pending dues along with interest within 12 days.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Notice Period Disputes</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered Relieving Letter and ₹1.85 Lakhs FNF</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A software engineer in Bangalore was denied their salary and relieving letter because they completed their notice period on a work-from-home basis. The company claimed the handover was incomplete. We served a statutory notice outlining that withholding relieving certificates is illegal and counters performance records. The HR released both the letter and outstanding payment within 48 hours of notice delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My previous startup refused to pay my three months of pending salary. LegalRecovery sent a strong legal notice and within 15 days, my FNF was cleared. Truly grateful!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Ananya Verma</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Professional approach. They handled my labor court case with extreme diligence. Highly recommend for any employment-related legal issues.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Sandeep Malhotra</h4>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us? */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose Us?</h2>
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

                {/* FAQs Accordion */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">FAQs</h2>
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
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40">
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
