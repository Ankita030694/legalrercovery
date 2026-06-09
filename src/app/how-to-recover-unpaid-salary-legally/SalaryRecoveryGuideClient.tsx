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
    question: "Is there a salary ceiling for filing a complaint under the Payment of Wages Act?",
    answer: "Yes. The Payment of Wages Act, 1936, has a statutory wage ceiling. Currently, the Act applies to employees drawing wages up to ₹24,000 per month (notified by the Central Government). If your monthly salary exceeds this threshold, you cannot file claims under the summary procedures of the Payment of Wages Act. However, you are fully entitled to seek recovery under the Industrial Disputes Act, 1847 (if you qualify as a 'workman'), state-specific Shops and Establishments Acts, or file a Summary Suit under Order 37 of the CPC before a Civil Court."
  },
  {
    question: "Who is classified as a 'workman' under the Industrial Disputes Act, and why does it matter?",
    answer: "Under Section 2(s) of the Industrial Disputes Act, 1947, a 'workman' is any person employed in an industry to do manual, unskilled, skilled, technical, operational, clerical, or supervisory work. It excludes individuals employed in a primarily managerial, administrative, or highly-paid supervisory capacity (drawing more than ₹10,000 per month). If you are a workman, you have access to specialized labor department channels, conciliation proceedings, and the fast-track Labour Court under Section 33-C(2). If you are classified as a manager or executive, your remedy lies in the civil court system."
  },
  {
    question: "Can an employer withhold my salary under the pretext of 'poor performance' or 'business losses'?",
    answer: "No, absolutely not. Earned salary is a statutory right and a form of personal property under the Constitution of India. An employer cannot unilaterally deduct or withhold salary by citing poor performance, target shortfalls, or company losses unless a formal disciplinary inquiry has been conducted and a written order passed. Any such unauthorized deduction violates Section 7 of the Payment of Wages Act and represents a clear breach of the employment contract."
  },
  {
    question: "What should I do if my employer has deducted TDS but it is not reflecting on my Form 26AS?",
    answer: "This is a serious financial default. When an employer deducts Tax Deducted at Source (TDS) from your salary but fails to deposit it with the Income Tax Department, they violate the Income Tax Act, 1961. You should download your Annual Information Statement (AIS) and Form 26AS to confirm the default. You can file a formal complaint with the Income Tax Commissioner (TDS cell) and report it to the Regional PF Commissioner if they also defaulted on EPF. Naming the directors in an advocate notice for statutory defaults is highly effective."
  },
  {
    question: "How long does a Labour Court take to decide a salary recovery case under Section 33-C(2)?",
    answer: "While the Industrial Disputes Act mandates that conciliation and recovery proceedings should be concluded quickly, in practice, a Labour Court case under Section 33-C(2) can take 6 to 18 months, depending on the court's case backlog and the employer's appearances. Because Section 33-C(2) operates as an executing court (focusing solely on computing the amount due based on existing records), the trial is much shorter than a standard civil dispute. The court's final order results in a Revenue Recovery Certificate issued to the District Collector."
  },
  {
    question: "Can I legally claim interest on delayed salary payments?",
    answer: "Yes. You can claim interest on all delayed salary payments. Depending on the forum, courts and commissions routinely award simple interest ranging from 6% to 12% per annum from the date the payment became due. For specific statutory dues like Gratuity, Section 7(3A) of the Payment of Gratuity Act, 1972, mandates that if gratuity is not paid within 30 days of termination, the employer must pay simple interest at the rate notified by the Central Government."
  },
  {
    question: "Can an employer legally withhold my relieving letter if I raise a salary dispute?",
    answer: "No. High Courts have repeatedly ruled that service records, including relieving letters, experience certificates, and Form 16, are the personal property of the employee. An employer cannot legally withhold these documents as a bargaining tool to force you to drop financial claims. If they do, they violate your right to earn a livelihood under Article 21 of the Constitution. You can send a formal legal notice demanding these documents, and they can be held liable for any loss of alternative employment caused by the delay."
  },
  {
    question: "What is the minimum default threshold for employees to initiate NCLT bankruptcy proceedings?",
    answer: "Under the Insolvency and Bankruptcy Code (IBC), 2016, employees are classified as operational creditors. The minimum default threshold to file a corporate insolvency petition before the NCLT is ₹1 Crore. While an individual employee's pending salary is rarely this high, the law allows multiple employees of the same defaulting company to club their unpaid wage claims together. If the combined outstanding amount meets the ₹1 Crore threshold, they can file a joint petition."
  },
  {
    question: "What is the limitation period for filing a case to recover unpaid wages?",
    answer: "Under Article 7 of the Schedule to the Limitation Act, 1963, the limitation period to file a civil suit or a Summary Suit for recovery of unpaid wages or salary is three (3) years. This clock starts ticking from the date the salary became due. For filing claims before the authority under Section 15 of the Payment of Wages Act, the limitation period is twelve (12) months from the date of default."
  },
  {
    question: "Can I file a criminal case for non-payment of salary?",
    answer: "Non-payment of salary is primarily a civil contract dispute. However, if the employer has deducted statutory contributions (such as EPF or TDS) from your salary but failed to deposit them, they commit Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS). Additionally, if the employer issued a cheque for your salary arrears that bounced, you can initiate criminal proceedings under Section 138 of the Negotiable Instruments Act."
  }
];

const reviews = [
  {
    id: "rev-rs-1",
    name: "Tushar Deshmukh (Operations Head)",
    rating: 5,
    review: "I was owed ₹5.2 Lakhs in salary arrears and notice pay from a logistics firm. The management kept avoiding my calls. LegalRecovery drafted a formal notice on advocate letterhead and served it to the directors' residences. Faced with the threat of a Summary Suit under Order 37 CPC and personal liability, the board cleared my entire payment with interest in 12 days. Incredibly professional!"
  },
  {
    id: "rev-rs-2",
    name: "Nandini Sen (Software Architect)",
    rating: 5,
    review: "My previous employer deducted PF and TDS from my salary slip but never deposited it, and withheld my last two months of salary. LegalRecovery served a statutory warning notice outlining criminal liability under BNS Section 316 for breach of trust. Fearing regulatory audits, the directors deposited my PF dues and transferred my salary arrears immediately. Highly recommended!"
  },
  {
    id: "rev-rs-3",
    name: "Dr. Sandeep Verma (Medical Consultant)",
    rating: 5,
    review: "A private healthcare group withheld my final settlement of ₹3.8 Lakhs, claiming I violated a non-compete clause. LegalRecovery's notice showed how their clause was legally invalid under Section 27 of the Contract Act and demanded immediate release of dues. The group withdrew their objections and processed my FNF within a week. Outstanding legal tech service!"
  },
  {
    id: "rev-rs-4",
    name: "Anjali Gupta (Senior Designer)",
    rating: 5,
    review: "My employer placed us on forced unpaid leave and stopped paying our salaries while expecting us to work. LegalRecovery helped us prepare a dispute on the SAMADHAN portal. The threat of a Labour Court trial forced the management to conciliate and clear our salaries for the active months. The flat pricing was very transparent."
  },
  {
    id: "rev-rs-5",
    name: "Rajesh Kannan (Technical Writer)",
    rating: 5,
    review: "Recovered my caution deposit and three months of unpaid wages from a media startup. LegalRecovery guided me through compiling our email agreements and delivered a high-impact notice. The founders processed a bank transfer to avoid litigation."
  },
  {
    id: "rev-rs-6",
    name: "Vikram Malhotra (Lead Frontend Developer)",
    rating: 5,
    review: "The firm withheld my experience letter and salary to force me to extend my notice period. LegalRecovery served a notice pointing out that service records cannot be withheld. The firm backed down immediately, restored my original exit date, and cleared my FNF. Truly professional."
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
      "name": "How to Recover Unpaid Salary Legally",
      "item": "https://www.legalrecovery.in/how-to-recover-unpaid-salary-legally"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Recover Unpaid Salary Legally in India: Complete Procedure & Remedies",
  "description": "Comprehensive legal guide on recovering unpaid salaries, delayed monthly wages, and FNF settlements in India under labor codes, summary suits, and bankruptcy laws.",
  "image": "https://www.legalrecovery.in/og-salary-recovery-guide.png",
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
  "datePublished": "2026-06-09",
  "dateModified": "2026-06-09"
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
  "name": "Salary Recovery Legal Services Guide",
  "image": "https://www.legalrecovery.in/og-salary-recovery-guide.png",
  "description": "Expert legal assistance for recovering unpaid salaries, delayed wages, and withheld relieving documents from employers in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "910"
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

export default function SalaryRecoveryGuideClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "unpaid-salary-legal-landscape", title: "1. The Indian Employment Landscape & Rights" },
    { id: "labour-commissioner-dept-role", title: "2. Action via Labour Commissioner (SAMADHAN)" },
    { id: "cpc-order-37-employee-recovery", title: "3. Summary Suits (Order 37, CPC) for Managers" },
    { id: "payment-of-wages-claim", title: "4. Claims under the Payment of Wages Act, 1936" },
    { id: "insolvency-corporate-debts-ibc", title: "5. Operational Creditor Claims under the IBC" },
    { id: "criminal-recourse-cheque-bounce", title: "6. Cheque Bounces & BNS Criminal Recourse" },
    { id: "documentary-trail-BSA-compliance", title: "7. Building the Evidence Trail & BSA Compliance" },
    { id: "advocate-notice-mediation-flow", title: "8. The Legal Notice Strategy & Mediation" },
    { id: "faqs", title: "9. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Salary Recovery Guide", href: "/how-to-recover-unpaid-salary-legally" }
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
              How to Recover <span className="text-[#DC2626]">Unpaid Salary</span> Legally in India
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Don&apos;t tolerate wage default, delayed settlements, or withheld relieving letters. Settle your salary disputes, demand your statutory benefits, and hold defaulting employers accountable. 
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
                
                {/* 1. The Indian Employment Landscape & Rights */}
                <section id="unpaid-salary-legal-landscape" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. The Indian Employment Landscape &amp; Rights</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employment is the primary vehicle of livelihood for millions of professionals across India. In active service, you dedicate your technical skills, time, and labor to an organization with a clear contractual expectation of monthly compensation. However, salary delay and non-payment of final settlements have emerged as a significant grievance in the Indian corporate landscape—affecting IT professionals in Bengaluru, Noida, and Pune as well as employees in manufacturing, startups, and service sectors.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Unpaid salary is not merely a breach of an employment agreement. Under Indian jurisprudence, earned salary represents a form of personal property and is directly linked to the employee&apos;s fundamental right to life and livelihood under <strong>Article 21 of the Constitution of India</strong>. The Supreme Court has repeatedly held that wages are not a bounty or charity, and any unauthorized deduction, delay, or refusal to pay earned wages is a direct violation of statutory and constitutional rights.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers often exploit the employee&apos;s lack of information, using the exit notice period, pending handovers, or vague performance allegations as leverage to withhold dues. Many employees tolerate delays for months, hoping for a voluntary credit, only to find the company shut down or their access to office portals revoked. Proactive legal action is essential. As time passes, proving the claim becomes more complex, and you run the risk of exceeding the strict limitation periods defined under Indian laws.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we combine deep labor law expertise with advanced digital workflows to deliver fast, transparent recovery services. We help you identify your legal classification, gather necessary evidence, and launch a coordinated legal notice and recovery campaign to hold defaulting employers accountable.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Salary is the hard-earned remuneration for labor rendered. Under the laws of India, employers have an absolute statutory obligation to credit salaries on time, and any willful delay is a punishable default.&quot;
                    </div>
                  </div>
                </section>

                {/* 2. Action via Labour Commissioner (SAMADHAN) */}
                <section id="labour-commissioner-dept-role" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Action via Labour Commissioner (SAMADHAN)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For employees classified as &quot;workmen&quot; under Section 2(s) of the <strong>Industrial Disputes Act, 1947</strong>, the primary government channel for resolving wage disputes is the Office of the Labour Commissioner. The department provides an administrative conciliation mechanism designed to mediate disputes and secure settlements without putting the employee through a full civil court trial.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To streamline this process, the Ministry of Labour and Employment launched the **SAMADHAN portal** (Software for Application, Monitoring and Disposal of Industrial Disputes). Through this portal, employees can register their wage claims online:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Filing the Grievance:</strong> Upload your appointment letter, bank statements showing missing credits, and monthly payslips to the portal. The case is reviewed and assigned to a jurisdictional Conciliation Officer (CO).</li>
                      <li><strong>Summons to Management:</strong> The CO has the statutory power to issue summons to the employer&apos;s management and directors, directing them to appear in person for joint conciliation meetings.</li>
                      <li><strong>Production of Records:</strong> During conciliation, the employer must produce their official payroll records, biometric attendance sheets, and bank transaction histories. If they fail to appear, the officer views it as a non-compliance issue.</li>
                      <li><strong>Binding Settlement:</strong> If a settlement is reached, a formal Settlement Deed is signed under Section 18(1) of the Industrial Disputes Act, which has the force of a court decree. If conciliation fails, the officer issues a Failure of Conciliation (FOC) report, permitting the case to be referred directly to the Labour Court.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      In the Labour Court, the most effective provision is <strong>Section 33-C(2)</strong>. Under this section, the court does not conduct a prolonged trial on the merits of the employment; it acts as an executing court to compute the exact monetary value of the dues. The court&apos;s final order results in a Revenue Recovery Certificate issued to the District Collector, who can attach the employer&apos;s bank accounts and properties to recover your wages.
                    </p>
                  </div>
                </section>

                {/* 3. Summary Suits (Order 37, CPC) for Managers */}
                <section id="cpc-order-37-employee-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. Summary Suits (Order 37, CPC) for Managers</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If you are employed in a managerial, executive, or highly-paid supervisory role, you do not fall under the definition of a &quot;workman&quot; under labor laws. Consequently, you cannot file claims under Section 33-C(2). Your primary civil remedy is filing a **Summary Suit** under **Order XXXVII of the Code of Civil Procedure, 1908 (CPC)**.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A summary suit is a fast-track civil recovery proceeding specifically designed for monetary claims arising out of written contracts (such as your employment contract or a signed FNF settlement sheet). Order 37 restricts the employer&apos;s ability to delay:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Appearance in 10 Days:</strong> Once summons are served, the employer must enter an appearance within <strong>10 days</strong>. If they fail, the court assumes they admit the claim and passes a decree in your favor immediately.</li>
                      <li><strong>Leave to Defend:</strong> If they appear, the employee serves a &quot;Summons for Judgment.&quot; The employer must then file a petition seeking 'Leave to Defend'. The court will deny leave if their defense is found to be a sham or a delay tactic.</li>
                      <li><strong>Conditional Deposit of Dues:</strong> If the court grants leave, it often makes it conditional on the company depositing the entire disputed salary amount in the court's bank account. This prevents them from hiding assets or dragging the trial out for years.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Order 37 is a highly effective tool for recovering high-value executive salaries, as companies cannot afford to keep their capital blocked in court deposits.
                    </p>
                  </div>
                </section>

                {/* 4. Claims under the Payment of Wages Act, 1936 */}
                <section id="payment-of-wages-claim" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Claims under the Payment of Wages Act, 1936</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The <strong>Payment of Wages Act, 1936</strong> is the primary central legislation protecting employee salaries in India. It mandates that wages must be paid in cash, bank transfers, or cheques, and establishes clear rules for the timing of payments and permissible deductions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key provisions of the Act that safeguard your salary payments include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Responsibility for Payment (Section 3):</strong> The employer, partners, and designated managers are personally responsible for the payment of all wages required to be paid under the Act.</li>
                      <li><strong>Timely Payment (Section 5):</strong> Salaries must be credited before the 7th of the following month for establishments employing fewer than 1,000 workers. For larger establishments, wages must be paid before the 10th of the month.</li>
                      <li><strong>Authorized Deductions (Section 7):</strong> Deductions are strictly limited to statutory items like Income Tax, EPF, and Professional Tax. Any deduction for performance issues, business losses, or disciplinary actions not backed by a formal inquiry is classified as an unauthorized deduction.</li>
                      <li><strong>Claims for Delayed Wages (Section 15):</strong> If wages are delayed or unauthorized deductions are made, the employee can file a claim before the designated Authority under Section 15. The Authority can direct the refund of the deducted amount and award compensation up to <strong>ten times</strong> the amount deducted.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Please note that the summary proceedings under the Payment of Wages Act apply to employees drawing up to <strong>₹24,000 per month</strong>. For higher income brackets, the general contract principles under civil law remain applicable.
                    </p>
                  </div>
                </section>

                {/* 5. Operational Creditor Claims under the IBC */}
                <section id="insolvency-corporate-debts-ibc" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Operational Creditor Claims under the IBC</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When companies experience cash flow crises, they often default on salaries for multiple employees simultaneously. If the employer is a corporate entity (Private Limited or Public Limited company) and is facing insolvency, employees have a powerful remedy under the <strong>Insolvency and Bankruptcy Code (IBC), 2016</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the IBC, employees are classified as **Operational Creditors**. The recovery process involves two key steps:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Section 8 Demand Notice:</strong> Before approaching the NCLT, you must serve a statutory Demand Notice under Section 8 of the IBC. This notice gives the company exactly <strong>10 days</strong> to either clear the dues or prove a pre-existing dispute (which must have been raised before the notice was sent).</li>
                      <li><strong>Section 9 Insolvency Petition:</strong> If the company fails to pay within 10 days, the employees can file a petition under Section 9 before the National Company Law Tribunal (NCLT). If admitted, the NCLT can suspend the company's board of directors, appoint an administrator, and initiate bankruptcy proceedings.</li>
                      <li><strong>Joint Petitions:</strong> While the minimum default threshold for NCLT petitions is ₹1 Crore, multiple employees of the same defaulting company can club their unpaid wage claims together to meet this threshold.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Faced with a Section 8 demand notice and the existential threat of corporate insolvency, companies almost universally settle outstanding dues immediately, as they cannot risk NCLT intervention.
                    </p>
                  </div>
                </section>

                {/* 6. Cheque Bounces & BNS Criminal Recourse */}
                <section id="criminal-recourse-cheque-bounce" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">6. Cheque Bounces &amp; BNS Criminal Recourse</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When pushed for final settlements, employers sometimes issue cheques that are subsequently dishonored. Under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>, a bounced cheque is a criminal offense. The criminal nature of cheque bounce proceedings provides significant leverage, as it exposes the client or corporate directors to personal prosecution, arrest warrants, and criminal records.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal procedure for a Section 138 claim has strict statutory timelines:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Presentation &amp; Memo:</strong> The cheque must be presented to the bank within its 3-month validity period. If dishonored, the bank issues a &quot;Cheque Return Memo.&quot;</li>
                      <li><strong>Statutory Demand Notice:</strong> The employee must serve a formal statutory demand notice to the drawer within <strong>30 days</strong> of receiving the return memo, demanding payment of the cheque amount and giving the drawer <strong>15 days</strong> from receipt to clear the dues.</li>
                      <li><strong>Filing Criminal Complaint:</strong> If the drawer fails to pay within 15 days, the employee must file a criminal complaint in the Magistrate court within <strong>30 days</strong> thereafter.</li>
                      <li><strong>Interim Compensation (Section 143A):</strong> The Magistrate court can order the drawer to pay interim compensation up to <strong>20% of the cheque amount</strong> to the complainant during the trial.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, if the employer has deducted EPF or TDS from your salary but failed to deposit it, they commit Criminal Breach of Trust under <strong>Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>. This carries an imprisonment term of up to 3 years. Naming directors personally in these criminal disclosures encourages rapid settlements.
                    </p>
                  </div>
                </section>

                {/* 7. Building the Evidence Trail & BSA Compliance */}
                <section id="documentary-trail-BSA-compliance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">7. Building the Evidence Trail &amp; BSA Compliance</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In a court of law, your word against the company&apos;s word is useless without documentation. Before initiating legal proceedings, you must compile a secure personal backup of your employment records, as companies often revoke access to corporate email accounts, Slack channels, and HR portals to destroy evidence.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Ensure you have downloaded and saved the following documents to a personal device:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Employment Proof:</strong> Original Appointment Letter, salary slips, Form 16, and TDS certificates.</li>
                      <li><strong>Financial Records:</strong> Download your Annual Information Statement (AIS) and Form 26AS to confirm TDS deductions. Highlighting missing credits on your bank statement is also critical.</li>
                      <li><strong>Separation Trace:</strong> Resignation email, resignation acceptance, notice period waivers, and IT/Admin clearance cards.</li>
                      <li><strong>Digital Communications:</strong> Screenshot critical chats (Slack, MS Teams, WhatsApp) where managers acknowledge your work or promise payment dates. Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, you must provide a signed certificate verifying the authenticity of these electronic records to ensure they are admitted as evidence.</li>
                    </ul>
                  </div>
                </section>

                {/* 8. The Legal Notice Strategy & Mediation */}
                <section id="advocate-notice-mediation-flow" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">8. The Legal Notice Strategy &amp; Mediation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A **Legal Notice** is a formal, advocate-signed communication that acts as the mandatory prelude to litigation. It is designed to establish a clear cause of action, demand the payment of outstanding dues within a strict window (typically 15 days), and lay down the evidentiary foundation for future court proceedings. Serving a legal notice is not just a procedural formality; it is a critical strategic move that notifies the employer of impending civil and criminal actions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our panel of experienced labor attorneys drafts custom notices tailored to the specific violations in your case. We do not use generic templates. Instead, we cite precise statutes—such as the relevant state&apos;s Shops and Establishments Act, the Payment of Wages Act, 1936, and the Indian Contract Act, 1872. The notice is physically dispatched via registered speed post to the company’s registered office and is copied to the personal residential addresses of all active directors to establish personal liability.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Statistics show that approximately 85% of employer wage disputes are resolved successfully within 15 days of serving a professional legal notice. Most corporate entities prefer to settle the undisputed FNF dues immediately rather than risk facing public litigation, labor inspector audits, or damage to their corporate reputation. A formal notice on our legal panel&apos;s letterhead signals that you are fully prepared to enforce your rights.
                    </p>
                  </div>
                </section>

                {/* Reviews Section */}
                <section id="reviews-section" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-slate-600 text-xs sm:text-sm italic mb-4 leading-relaxed">
                          &quot;{rev.reviewBody}&quot;
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="font-extrabold text-slate-800 text-xs sm:text-sm">{rev.author.name}</span>
                          <div className="flex items-center gap-0.5 text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs-section" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = expandedFaqs.includes(`faq-${index}`);
                      return (
                        <div key={index} className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all bg-white hover:border-slate-300">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left font-extrabold text-slate-900 hover:text-[#DC2626] transition-colors focus:outline-none text-xs sm:text-base"
                          >
                            <span>{faq.question}</span>
                            <span className="ml-4 flex-shrink-0 text-slate-400">
                              {isOpen ? (
                                <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>
                              )}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 text-slate-650 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
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

            {/* Right Sidebar - CTA Cards */}
            <div className="hidden lg:block sticky top-24 space-y-6">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Need Salary Recovery?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your unpaid salary or FNF dispute with experienced labor and contract advocates. We serve registered notices with tracking support.
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
