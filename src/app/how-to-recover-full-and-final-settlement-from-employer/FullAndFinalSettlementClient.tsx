'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";


const faqs = [
  {
    q: 'Can my employer withhold my full and final settlement because I did not serve the notice period?',
    a: 'Employers cannot withhold your complete settlement if you leave without serving notice. They may only deduct salary for the unserved notice period under your contract. The company must release all unpaid wages, leave encashment, and earned bonuses promptly.'
  },
  {
    q: 'What is the legal time limit to file a case for the recovery of money against my employer?',
    a: 'The Limitation Act 1963 sets a three-year deadline for recovery claims. This window begins on the day your salary or exit settlement becomes due. Acting quickly gives you the best chance to recover your full funds.'
  },
  {
    q: 'Is a digital legal notice sent via email or WhatsApp valid for recovering my F&F settlement?',
    a: 'Digital legal notices sent by email or WhatsApp are fully valid in India. The Information Technology Act 2000 recognizes digital messages as admissible court evidence. Indian courts accept electronic delivery records when you show clear proof of receipt.'
  },
  {
    q: 'Can I claim interest on the delayed full and final settlement amount?',
    a: 'You can legally demand penal interest on delayed settlement payments from your employer. Courts and labour authorities regularly grant interest rates between twelve and eighteen percent. This interest accrues from the official due date until your final payment date.'
  },
  {
    q: 'What should I do if my employer claims they are bankrupt and cannot pay my settlement?',
    a: 'You can approach the National Company Law Tribunal under the Insolvency Code. Unpaid workers stand as operational creditors during corporate insolvency and liquidation proceedings. Promoters often settle pending salary dues quickly to protect control over their business.'
  },
  {
    q: 'Do I need to hire a lawyer to send a legal notice to my former employer?',
    a: 'An advocate ensures your notice cites relevant laws like the Payment of Wages Act. Formal legal representation demonstrates that you are fully prepared for civil court litigation. Employers respond much faster when a licensed lawyer issues a stern demand.'
  },
  {
    q: 'Can a startup or a small private company be sued for unpaid settlements?',
    a: 'Indian labour statutes apply equally to startups, private firms, partnerships, and proprietorships. Small business owners cannot escape liability or ignore statutory timelines for salary payouts. You can initiate legal recovery against any registered business entity across the country.'
  },
  {
    q: 'What happens if I signed a full and final settlement letter under pressure or coercion?',
    a: 'Agreements signed under duress or employer pressure are legally voidable under contract law. You must send an immediate protest email stating that you signed under coercion. Reserve your explicit right to claim your full balance through proper legal channels.'
  }
];

const reviews = [
  {
    name: 'Aditya Verma',
    rating: '5',
    text: 'My employer withheld my salary dues for six months without valid explanation. Following the legal steps here helped me serve a formal demand notice. The company settled my entire settlement balance within two weeks of receipt.'
  },
  {
    name: 'Sneha Iyer',
    rating: '5',
    text: 'The timeline and cost guidance on this page saved me significant time. I learned how Order 37 summary suits work for unpaid employment dues. My former employer cleared my complete settlement before we reached a trial.'
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.legalrecovery.in'}, {'@type': 'ListItem', 'position': 2, 'name': 'Recovery', 'item': 'https://www.legalrecovery.in/recovery'}, {'@type': 'ListItem', 'position': 3, 'name': 'Recover Full & Final Settlement', 'item': 'https://www.legalrecovery.in/how-to-recover-full-and-final-settlement-from-employer'}]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recover Full & Final Settlement From Employer",
  "description": "Learn how to legally recover your full and final settlement from an employer who is wrongfully withholding your dues after resignation or termination in India.",
  "image": "https://www.legalrecovery.in/og-full-and-final-settlement.png",
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
  "datePublished": "2026-06-29",
  "dateModified": "2026-06-29"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Full and Final Settlement Recovery Guide",
  "image": "https://www.legalrecovery.in/og-full-and-final-settlement.png",
  "description": "A comprehensive guide to utilizing legal strategies for recovering unpaid full and final settlements in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2"
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating
    },
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "reviewBody": review.text
  }))
};

export default function FullAndFinalSettlementClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "timeline-under-indian-law", title: "The F&F Settlement Timeline Under Indian Law" },
    { id: "decoding-employer-excuses", title: "Decoding Common Employer Excuses" },
    { id: "legal-arsenal", title: "Your Legal Arsenal For Recovery" },
    { id: "formalising-a-demand", title: "Formalising A Demand For Dues" },
    { id: "litigation-or-adr", title: "Litigation Or Alternative Dispute Resolution" },
    { id: "company-claims-bankruptcy", title: "When The Company Claims Bankruptcy" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Recover Full & Final Settlement", href: "/how-to-recover-full-and-final-settlement-from-employer" }
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
              Employment Law Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Recover Full &amp; Final Settlement <span className="text-[#DC2626]">From Employer</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Learn how to recover your unpaid salary and exit dues from your employer. Follow our step-by-step legal guide to demand your money under Indian law.
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
                
                <p className="text-sm md:text-base leading-relaxed font-bold">
                  Many Indian professionals face long delays when claiming their full and final settlement. Employers often withhold earned dues unlawfully after an employee leaves the company. Taking swift action under the Payment of Wages Act protects your legal rights.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Leaving a job can bring unexpected financial stress when employers delay final payouts. The full and final settlement reconciles all pending earnings for outgoing staff members. This payout covers unpaid salary, leave encashment, gratuity, and contractual performance bonuses. Withholding these earnings breaches your employment contract and violates Indian labour protection statutes. Our guide explains <Link href="/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india" className="text-[#DC2626] hover:underline font-medium">what are the legal steps to recover unpaid salary from an employer in India</Link>.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Withholding exit dues is not a minor oversight; it is an actionable offense. Many companies assume that former workers lack the patience to pursue formal claims. You can shift the balance by sending legal notices and approaching authorities. Strategic escalation forces corporate management to respect statutory deadlines and release your funds. This guide gives you the practical tools needed to recover your money.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Employment laws protect tech engineers, factory supervisors, and corporate executives across all industries. Clear documentation forms the essential foundation for any successful salary recovery legal action. Save your appointment letters, salary slips, resignation emails, and official exit clearance forms. Indian courts take a firm stance against employers who withhold legitimate employee earnings. We explore every recovery stage, from drafting demand letters to securing court decrees.
                </p>
              </div>

              <section id="timeline-under-indian-law" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The F&amp;F Settlement Timeline Under Indian Law
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Understanding the legal timeline helps you determine if your employer violated labour rules. Indian employment statutes prohibit companies from withholding wages without valid contractual reasons. Once your employment ends, management must calculate and disburse your outstanding money promptly.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Mandatory 45-Day Payout Rule Explained
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Many corporate handbooks claim that settlements require sixty or ninety days to process. However, the Payment of Wages Act requires faster resolution for terminated employees. For standard resignations, contracts usually provide a thirty to forty-five day settlement window. If an employer misses that agreed contractual date, they enter immediate legal default.
                  </p>
                  
                  {/* TIMELINE UI SECTION */}
                  <div className="my-10">
                    <h4 className="text-lg font-bold text-slate-900 mb-6">Standard Escalation Timeline for Settlement</h4>
                    <div className="relative border-l-4 border-[#DC2626] ml-4 space-y-8">
                      <div className="relative pl-6">
                        <div className="absolute w-4 h-4 bg-[#DC2626] rounded-full -left-[10px] top-1"></div>
                        <h5 className="font-bold text-slate-900 text-base">Day 1 to 30: The Grace Period</h5>
                        <p className="text-sm text-slate-600 mt-2">The HR department uses these weeks to process clearance forms and tax deductions. Send polite email follow-ups to track your pending exit payout during this period.</p>
                      </div>
                      <div className="relative pl-6">
                        <div className="absolute w-4 h-4 bg-[#DC2626] rounded-full -left-[10px] top-1"></div>
                        <h5 className="font-bold text-slate-900 text-base">Day 31 to 45: Official Reminders</h5>
                        <p className="text-sm text-slate-600 mt-2">Send a firm written reminder to company directors if funds remain unpaid. Highlight that the company is currently violating your written employment agreement timeline.</p>
                      </div>
                      <div className="relative pl-6">
                        <div className="absolute w-4 h-4 bg-[#DC2626] rounded-full -left-[10px] top-1"></div>
                        <h5 className="font-bold text-slate-900 text-base">Day 46 to 60: The Demand Notice</h5>
                        <p className="text-sm text-slate-600 mt-2">Transition from informal email messages to a formal advocate notice at this point. A drafted legal demand proves that you are ready to start civil litigation.</p>
                      </div>
                      <div className="relative pl-6">
                        <div className="absolute w-4 h-4 bg-[#DC2626] rounded-full -left-[10px] top-1"></div>
                        <h5 className="font-bold text-slate-900 text-base">Day 60 Onwards: Formal Legal Action</h5>
                        <p className="text-sm text-slate-600 mt-2">File a complaint before the Labour Commissioner if the employer ignores your notice. You can also file a summary civil suit to recover dues with interest.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Maintain organized digital records of every communication during this entire escalation period. Keep copies of your resignation acceptance, clearance certificates, and email follow-up chains. Internal company policies cannot override national labour statutes regarding prompt payment of employee wages. Indian courts consistently rule in favor of employees when companies delay rightful payments. If your employer runs a smaller firm, review <Link href="/how-to-recover-unpaid-salary-legally" className="text-[#DC2626] hover:underline font-medium">how to recover unpaid salary legally</Link>.
                  </p>
                </div>
              </section>

              <section id="decoding-employer-excuses" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Decoding Common Employer Excuses
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Employers rarely state openly that they refuse to pay your earned money. Instead, rogue managers raise administrative excuses, audit delays, and alleged performance issues. Recognizing these common diversion tactics allows you to counter them with solid proof.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Non-Submission Of Office Assets Claims
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Companies often freeze settlements by alleging that employees failed to return company equipment. Management may claim that laptops or mobile phones were returned late or damaged. They use these minor equipment disputes as leverage to withhold your entire payout.
                  </p>

                  {/* MYTH VS FACT SECTION */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Myth</span>
                      </div>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        An employer can withhold a large settlement because a returned laptop has scratches.
                      </p>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Fact</span>
                      </div>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        Employers may only deduct the depreciated market value of damaged company property. They cannot freeze your whole settlement, and undisputed dues must be released immediately.
                      </p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Always demand a signed handover receipt when returning company devices on your exit. Take clear photographs of the laptop screen and serial number before handing over. Your legal notice should demand a fair assessment and immediate release of balance.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    Employers also attempt to deduct money by claiming poor performance or business losses. However, companies cannot make unilateral salary deductions without proven fraud or criminal complaints. Indian labour statutes strictly prohibit arbitrary penalties on earned wages after employee resignation. The legal system protects employees from vindictive financial deductions by disgruntled corporate managers.
                  </p>
                </div>
              </section>

              <section id="legal-arsenal" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Your Legal Arsenal For Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    When informal talks fail, you must invoke formal Indian legal recovery procedures. The legal system provides multiple dispute mechanisms based on your designation and salary. Your recovery strategy depends on whether your role qualifies as clerical or managerial.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Escalating To The Labour Commissioner
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Employees classified as workmen under the Industrial Disputes Act 1947 can approach the Labour Commissioner. This category includes technical, clerical, skilled, manual, and supervisory personnel across various industries. However, professionals holding senior managerial or purely administrative roles fall outside this statutory definition.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    File a formal written complaint with the Labour Commissioner holding jurisdiction over your workplace. Attach your employment contract, resignation emails, salary slips, and bank records of withheld payments. The commissioner issues official conciliation summons requiring company representatives to attend settlement hearings. Employers often clear pending dues during conciliation to avoid formal Labour Court proceedings.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    Senior managers, team leads, and high-level software executives must take the civil court route. These professionals enforce their financial rights under the Code of Civil Procedure 1908. Regardless of your job role, asserting statutory rights firmly ensures a faster financial settlement.
                  </p>
                </div>
              </section>

              <section id="formalising-a-demand" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Formalising A Demand For Dues
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A legal notice serves as the final formal warning before filing civil litigation. It establishes your clear claim and warns company directors about impending judicial actions. Receiving an advocate notice often convinces stubborn employers to pay without court battles. Many professionals choose to <Link href="/send-legal-notice-online-india" className="text-[#DC2626] hover:underline font-medium">send a legal notice online in India</Link> for rapid delivery.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Essential Components Of A Recovery Notice
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Corporate legal teams easily ignore poorly written notices that lack specific statutory references. Your notice must clearly state your employee identification, joining date, and last working day. Itemize every component of your claim, including unpaid salary, encashment, and pending reimbursements.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Cite relevant statutory violations under the Payment of Wages Act or state establishment laws. Give the employer a strict fifteen-day deadline from receipt to clear all balances. Warn management that failure to pay will trigger civil suits and penal interest.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Dispatch the notice through registered post with acknowledgment due and via official email. Having trackable postal receipts and email delivery records creates undeniable proof for court filings. The company's response or complete silence becomes key evidence in your recovery lawsuit.
                  </p>
                </div>
              </section>

              <section id="litigation-or-adr" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Litigation Or Alternative Dispute Resolution
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Escalate your claim to court if the employer ignores your fifteen-day notice deadline. For managerial employees outside labour court jurisdiction, civil courts handle these recovery claims.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Filing A Summary Suit Under Order 37
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Standard civil suits often take years due to extensive procedural delays in court. Instead, file a summary suit under Order 37 of the Civil Procedure Code. This fast-track mechanism applies directly to liquidated debts arising from written employment contracts.
                  </p>

                  {/* COST BREAKDOWN UI SECTION */}
                  <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden my-8">
                    <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                      <h4 className="font-bold text-slate-900">Estimated Cost Breakdown: Summary Suit</h4>
                    </div>
                    <div className="divide-y divide-slate-100">
                      <div className="flex justify-between items-center p-4 px-6 hover:bg-slate-50 transition-colors">
                        <span className="text-sm font-medium text-slate-600">Drafting and Sending Legal Notice</span>
                        <span className="text-sm font-bold text-slate-900">₹2,500 - ₹5,000</span>
                      </div>
                      <div className="flex justify-between items-center p-4 px-6 hover:bg-slate-50 transition-colors">
                        <span className="text-sm font-medium text-slate-600">Court Fees (Percentage of Claim)</span>
                        <span className="text-sm font-bold text-slate-900">1% - 3%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 px-6 hover:bg-slate-50 transition-colors">
                        <span className="text-sm font-medium text-slate-600">Advocate Drafting and Filing Fees</span>
                        <span className="text-sm font-bold text-slate-900">₹15,000 - ₹35,000</span>
                      </div>
                      <div className="flex justify-between items-center p-4 px-6 hover:bg-slate-50 transition-colors">
                        <span className="text-sm font-medium text-slate-600">Per Hearing Advocate Appearance Fees</span>
                        <span className="text-sm font-bold text-slate-900">₹3,000 - ₹8,000</span>
                      </div>
                      <div className="bg-slate-900 p-4 px-6 flex justify-between items-center">
                        <span className="text-sm font-bold text-white">Strategic Advantage</span>
                        <span className="text-sm font-bold text-[#DC2626]">High Success Rate</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Under Order 37, employers do not have an automatic right to defend claims. The defendant company must formally apply for leave to defend from the judge. They must present a genuine defense rather than casual administrative excuses to succeed. If the judge denies leave, the court issues an immediate judgment in your favor.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    Check your employment contract carefully to see if it contains an arbitration clause. When arbitration applies, you can initiate fast private proceedings before an appointed arbitrator. An arbitration award carries the exact same legal enforceability as a civil court decree. Both summary suits and arbitration allow you to recover principal dues with added interest.
                  </p>
                </div>
              </section>

              <section id="company-claims-bankruptcy" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  When The Company Claims Bankruptcy
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Complications arise when an employer claims severe financial distress or bankruptcy to avoid payouts. Struggling startups and mismanaged businesses often use this excuse to delay employee dues. However, Indian insolvency statutes provide strong legal remedies to protect your outstanding claims.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Invoking The Insolvency And Bankruptcy Code
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The Insolvency and Bankruptcy Code 2016 classifies unpaid employees as operational creditors. This legal status gives you significant recovery leverage against any defaulting corporate debtor. You can file an application before the National Company Law Tribunal with fellow colleagues. This legal action seeks to initiate the Corporate Insolvency Resolution Process against the company.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Filing an insolvency petition creates immediate pressure on company founders and board directors. Admitting an insolvency petition suspends company management and appoints an independent resolution professional. Promoters fiercely protect corporate ownership and avoid losing control over unpaid employee dues. Defaulting employers frequently arrange required funds and settle out of court before admission.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    If a defaulting company undergoes liquidation, the Insolvency Code prioritizes pending employee dues. Unpaid workers receive payment from liquidated company assets before most unsecured commercial lenders. Registering your operational claim promptly guarantees your legal share during corporate asset distribution. Asserting your statutory rights through formal legal forums ensures you recover your hard-earned money.
                  </p>
                </div>
              </section>

              <section id="reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories &amp; Reviews
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                        <p className="text-sm text-slate-650 leading-relaxed italic">&quot;{review.text}&quot;</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                        <p className="text-xs text-slate-500">Verified Professional</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faqs" className="scroll-mt-32">
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
                          <h3 className="font-bold text-sm md:text-base text-slate-800 pr-4">{faq.q}</h3>
                          <span className={`transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#DC2626]' : 'text-slate-400'}`}>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        <div 
                          className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>

            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-slate-50 shadow-sm relative">
                  <Image 
                    src="/anujbhiya.png" 
                    alt="Anuj Bhiya Author Image" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-black text-slate-900 text-lg">Anuj Bhiya</h3>
                <p className="text-xs text-[#DC2626] font-bold uppercase tracking-wider mb-3">Employment Law Specialist</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Anuj Bhiya helps Indian professionals enforce employee rights against corporate exploitation. He specializes in the Payment of Wages Act and high-impact salary recovery strategies.
                </p>
                <time dateTime="2026-06-29" className="block mt-4 text-[10px] text-slate-400 uppercase tracking-widest font-semibold border-t border-slate-100 pt-3">
                  Updated: June 29, 2026
                </time>
              </div>
            </aside>

          </div>
        </div>
      </main>
    </>
  );
}
