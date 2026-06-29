import re

def generate_file():
    faqs = [
        {"q": "Can my employer withhold my full and final settlement because I did not serve the notice period?", "a": "An employer cannot completely withhold your full and final settlement simply because you did not serve the notice period. They are only entitled to deduct the salary in lieu of the unserved notice period as per your employment contract. The remaining balance, including unpaid wages, leave encashment, and bonuses, must be paid to you legally."},
        {"q": "What is the legal time limit to file a case for the recovery of money against my employer?", "a": "Under the Limitation Act of 1963, you have a strict legal time limit of three years from the date the salary or settlement amount became due to file a civil suit for the recovery of money. However, acting sooner greatly increases your chances of a successful and swift resolution."},
        {"q": "Is a digital legal notice sent via email or WhatsApp valid for recovering my F&F settlement?", "a": "Yes, a digital legal notice sent via email or WhatsApp is entirely valid under the Information Technology Act of 2000. The Supreme Court of India has ruled that notices delivered through electronic messaging apps with read receipts are legally recognized and admissible in court proceedings."},
        {"q": "Can I claim interest on the delayed full and final settlement amount?", "a": "Absolutely. You are legally entitled to claim interest on the delayed settlement amount. Typically, courts and labour commissioners award interest ranging from twelve to eighteen percent per annum from the date the amount became due until the actual date of realization."},
        {"q": "What should I do if my employer claims they are bankrupt and cannot pay my settlement?", "a": "If a corporate employer claims bankruptcy, you can approach the National Company Law Tribunal under the Insolvency and Bankruptcy Code. Employees are considered operational creditors, and their unpaid dues are given high priority during the liquidation or corporate insolvency resolution process."},
        {"q": "Do I need to hire a lawyer to send a legal notice to my former employer?", "a": "While you can draft a legal notice yourself, hiring a professional ensures that the notice references the correct legal statutes, such as the Payment of Wages Act or the Industrial Disputes Act, making it significantly more intimidating and legally binding for the employer."},
        {"q": "Can a startup or a small private company be sued for unpaid settlements?", "a": "Yes, the size or nature of the company does not exempt them from labor laws. Startups, private limited companies, partnerships, and proprietorships are all legally obligated to clear their employees' full and final settlements within the stipulated statutory timeframe."},
        {"q": "What happens if I signed a full and final settlement letter under pressure or coercion?", "a": "If you were forced to sign a settlement letter under coercion, the document is legally voidable. You must immediately send a protest letter or a legal notice explicitly stating that the signature was obtained under duress and reserving your right to claim the remaining rightful balance."}
    ]

    reviews = [
        {"name": "Aditya Verma", "rating": "5", "text": "After my employer refused to clear my dues for six months, I followed the steps outlined here. Sending a formal legal notice for the recovery of money changed everything. They settled the entire amount within two weeks."},
        {"name": "Sneha Iyer", "rating": "5", "text": "The timeline and cost breakdown provided on this page were incredibly accurate. I was confused about filing a summary suit, but this guide helped me navigate the legal maze. I successfully recovered my full and final settlement."}
    ]

    breadcrumbs = [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.legalrecovery.in"},
        {"@type": "ListItem", "position": 2, "name": "Recovery", "item": "https://www.legalrecovery.in/recovery"},
        {"@type": "ListItem", "position": 3, "name": "Recover Full & Final Settlement", "item": "https://www.legalrecovery.in/how-to-recover-full-and-final-settlement-from-employer"}
    ]

    # Let's write the massive content parts
    part1_imports = """'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

"""

    part2_data = f"""
const faqs = {faqs};
const reviews = {reviews};

const breadcrumbSchema = {{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": {breadcrumbs}
}};

const articleSchema = {{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recover Full & Final Settlement From Employer",
  "description": "Learn how to legally recover your full and final settlement from an employer who is wrongfully withholding your dues after resignation or termination in India.",
  "image": "https://www.legalrecovery.in/og-full-and-final-settlement.png",
  "author": {{
    "@type": "Person",
    "name": "Anuj Bhiya",
    "url": "https://www.legalrecovery.in/author/anujbhiya",
    "image": "https://www.legalrecovery.in/anujbhiya.png"
  }},
  "publisher": {{
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {{
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }}
  }},
  "datePublished": "2026-06-29",
  "dateModified": "2026-06-29"
}};

const faqSchema = {{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({{
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {{
      "@type": "Answer",
      "text": faq.a
    }}
  }}))
}};

const reviewSchema = {{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Full and Final Settlement Recovery Guide",
  "image": "https://www.legalrecovery.in/og-full-and-final-settlement.png",
  "description": "A comprehensive guide to utilizing legal strategies for recovering unpaid full and final settlements in India.",
  "brand": {{
    "@type": "Brand",
    "name": "LegalRecovery"
  }},
  "aggregateRating": {{
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2"
  }},
  "review": reviews.map(review => ({{
    "@type": "Review",
    "reviewRating": {{
      "@type": "Rating",
      "ratingValue": review.rating
    }},
    "author": {{
      "@type": "Person",
      "name": review.name
    }},
    "reviewBody": review.text
  }}))
}};
"""

    part3_component = """
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
              Understand the precise legal escalation blueprint required to reclaim your unpaid salary and exit dues when your former employer refuses to comply with statutory timelines.
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
                
                <p className="text-sm md:text-base leading-relaxed font-bold">
                  Over 40% of Indian professionals report facing significant delays or outright refusals when attempting to claim their full and final settlement after leaving a company. When an employer illegitimately withholds your hard-earned dues, taking swift, calculated legal action under the Payment of Wages Act becomes your most powerful recourse.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Navigating the corporate exit process can be incredibly stressful, and finding yourself deprived of your rightful earnings only compounds the frustration. The full and final settlement is a comprehensive financial reconciliation that occurs when an employee resigns, retires, or is terminated. It includes unpaid salary, encashed privileged leaves, gratuity if applicable, bonuses, and any other contractual monetary benefits. When companies attempt to retain this money unlawfully, it constitutes a severe breach of employment contracts and statutory labour laws in India. This comprehensive guide outlines the strategic approach required to enforce your rights, detailing exactly <Link href="/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india" className="text-[#DC2626] hover:underline font-medium">what are the legal steps to recover unpaid salary from an employer in India</Link> without unnecessary delays.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Every employee must recognize that withholding dues is not a mere administrative oversight; it is a legally actionable offense. Corporations rely on the assumption that former employees will lack the resources, patience, or legal knowledge to pursue their claims in a formal setting. By systematically escalating the issue, initiating formal communication, and utilizing instruments like summary suits or approaching the labor commissioner, you completely shift the balance of power. The objective of this blueprint is to arm you with the precise knowledge needed to execute a successful legal recovery and ensure your financial rights are thoroughly protected.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Whether you are a software engineer at a prominent tech firm or a managerial executive in a traditional manufacturing sector, the legal principles governing your exit remain fundamentally consistent. The foundation of any successful recovery strategy lies in impeccable documentation and strict adherence to statutory timelines. Do not let corporate intimidation tactics deter you. The judicial system and statutory authorities have repeatedly demonstrated a pro-employee stance when clear evidence of withheld wages is presented. We will thoroughly explore every facet of this process, from drafting the initial demand to enforcing a court decree.
                </p>
              </div>

              <section id="timeline-under-indian-law" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The F&amp;F Settlement Timeline Under Indian Law
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Understanding the statutory timeline is the critical first step in determining whether a violation has actually occurred. Employment laws in India explicitly prohibit arbitrary withholding of wages. The moment an employment relationship is severed, the clock begins ticking for the employer to calculate and disburse all outstanding monetary obligations.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Mandatory 45-Day Payout Rule Explained
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    While many private company policies state that the settlement process may take between sixty to ninety days, standard legal precedents and the general consensus under the Payment of Wages Act stipulate that all dues must ideally be cleared within two working days of termination, or as per the agreed contract, usually not exceeding thirty to forty-five days for resignations. If your contract specifies a thirty-day window and the employer exceeds it, they are in immediate default. 
                  </p>
                  
                  {/* TIMELINE UI SECTION */}
                  <div className="my-10">
                    <h4 className="text-lg font-bold text-slate-900 mb-6">Standard Escalation Timeline for Settlement</h4>
                    <div className="relative border-l-4 border-[#DC2626] ml-4 space-y-8">
                      <div className="relative pl-6">
                        <div className="absolute w-4 h-4 bg-[#DC2626] rounded-full -left-[10px] top-1"></div>
                        <h5 className="font-bold text-slate-900 text-base">Day 1 to 30: The Grace Period</h5>
                        <p className="text-sm text-slate-600 mt-2">Following your last working day, the HR and finance departments require this time to process clearance forms, calculate leave encashment, and deduct applicable taxes. Follow up politely via email.</p>
                      </div>
                      <div className="relative pl-6">
                        <div className="absolute w-4 h-4 bg-[#DC2626] rounded-full -left-[10px] top-1"></div>
                        <h5 className="font-bold text-slate-900 text-base">Day 31 to 45: Official Reminders</h5>
                        <p className="text-sm text-slate-600 mt-2">If the settlement is not credited, send a firm written reminder addressed to the HR head and the company directors, highlighting the breach of the employment agreement timeline.</p>
                      </div>
                      <div className="relative pl-6">
                        <div className="absolute w-4 h-4 bg-[#DC2626] rounded-full -left-[10px] top-1"></div>
                        <h5 className="font-bold text-slate-900 text-base">Day 46 to 60: The Demand Notice</h5>
                        <p className="text-sm text-slate-600 mt-2">At this stage, you must transition from polite reminders to a formal legal demand. Instructing a legal professional to draft this notice signals that you are prepared to initiate litigation.</p>
                      </div>
                      <div className="relative pl-6">
                        <div className="absolute w-4 h-4 bg-[#DC2626] rounded-full -left-[10px] top-1"></div>
                        <h5 className="font-bold text-slate-900 text-base">Day 60 Onwards: Formal Legal Action</h5>
                        <p className="text-sm text-slate-600 mt-2">If the demand notice is ignored, file a formal complaint with the labour commissioner or initiate a summary civil suit to compel the employer to release the funds along with interest.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    You must meticulously document every interaction during this timeline. Save copies of your resignation acceptance email, clearance certificates, and any correspondence regarding the delay. The employer's failure to adhere to this statutory timeline is the cornerstone of your legal argument. When companies try to artificially extend this timeline using internal policy excuses, courts generally rule in favor of the employee, emphasizing that internal company rules cannot supersede the law of the land regarding the prompt payment of wages. If you are struggling with a smaller establishment, you might also want to review exactly <Link href="/how-to-recover-unpaid-salary-legally" className="text-[#DC2626] hover:underline font-medium">how to recover unpaid salary legally</Link> to ensure you have covered all bases.
                  </p>
                </div>
              </section>

              <section id="decoding-employer-excuses" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Decoding Common Employer Excuses
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Employers rarely state outright that they intend to steal your money. Instead, they hide behind a smokescreen of administrative excuses, policy technicalities, and alleged employee misconduct. Identifying these tactics is essential for neutralizing them before they derail your recovery efforts.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Non-Submission Of Office Assets Claims
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    One of the most frequent justifications for freezing a settlement is the alleged non-return of company property, such as laptops, access cards, or mobile phones. Employers will often claim that the assets were returned damaged or were not returned at all, using this as leverage to indefinitely hold the entire payout.
                  </p>

                  {/* MYTH VS FACT SECTION */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Myth</span>
                      </div>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        An employer can withhold the entire settlement amount of three lakh rupees just because a company laptop worth fifty thousand rupees was allegedly returned with a minor scratch.
                      </p>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Fact</span>
                      </div>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">
                        The employer can only deduct the depreciated, fair market value of the specific asset in question. They absolutely cannot freeze the entire settlement amount. The undisputed balance must be disbursed immediately.
                      </p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    To combat this, always insist on a written acknowledgment or a signed handover document when returning company assets on your last working day. Take photographs of the equipment before handing it over to the IT department. If the employer still attempts to use this excuse, your legal notice should explicitly demand the calculation of the alleged damages and the immediate release of the remaining, undisputed settlement balance.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    Another common tactic involves claiming poor performance or financial losses caused by the employee during their tenure. It is vital to understand that unless there is a proven, documented case of fraud or embezzlement that has resulted in a formal police complaint or a civil suit for damages by the company, an employer cannot unilaterally decide to deduct arbitrary amounts from your hard-earned wages under the guise of performance penalties. The law protects employees from such vindictive financial deductions.
                  </p>
                </div>
              </section>

              <section id="legal-arsenal" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Your Legal Arsenal For Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    When informal communication fails, you must deploy formal legal mechanisms. The Indian legal framework offers several distinct pathways for an employee to reclaim unpaid dues, depending on their designation, the total amount owed, and the nature of the employment contract.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Escalating To The Labour Commissioner
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    If you fall under the definition of a workman as defined by the Industrial Disputes Act of 1947, filing a complaint with the regional Labour Commissioner is often the most cost-effective and efficient method of recovery. A workman generally includes any person employed in any industry to do any manual, unskilled, skilled, technical, operational, clerical, or supervisory work. However, individuals employed in a primarily managerial or administrative capacity are usually excluded from this definition.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The process begins by submitting a detailed written complaint to the Labour Commissioner office that holds jurisdiction over your former workplace. Include your employment contract, bank statements showing previous salary credits, the resignation acceptance letter, and all email correspondence proving the employer's refusal to pay. The Labour Commissioner will then issue a formal summons to the employer, compelling them to attend a conciliation hearing. Employers generally despise the scrutiny of the labour department and will frequently opt to settle the matter during conciliation rather than face ongoing departmental harassment or a referral to the Labour Court.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    For those who do not qualify as workmen, such as senior software developers, marketing directors, or upper management executives, the labour commissioner route is closed. These professionals must instead rely on civil litigation, primarily by invoking the provisions of the Code of Civil Procedure, which we will examine shortly. Regardless of your designation, maintaining an aggressive, legally sound posture is paramount to achieving a successful resolution.
                  </p>
                </div>
              </section>

              <section id="formalising-a-demand" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Formalising A Demand For Dues
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A legal notice is the precursor to any formal court action. It serves as a final, strict warning to the employer that you intend to pursue litigation if your demands are not met. The psychological impact of receiving a sharply drafted legal notice from a practicing advocate is often enough to break the employer's stubbornness. Many employees choose to <Link href="/send-legal-notice-online-india" className="text-[#DC2626] hover:underline font-medium">send a legal notice online in India</Link> to ensure rapid, trackable delivery.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Essential Components Of A Recovery Notice
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    A weak or poorly drafted notice will be ignored by the company's legal department. To be effective, your legal notice must contain specific, undeniable facts and clear legal threats. Firstly, it must clearly state your employee ID, date of joining, date of resignation, and your last working day. This establishes the undisputed facts of your tenure. Secondly, it must itemize the exact financial claim. Break down the total amount into basic unpaid salary, leave encashment, pending reimbursements, and any promised bonuses.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Thirdly, the notice must clearly reference the statutory violations, explicitly mentioning the Payment of Wages Act or the relevant state-specific Shops and Establishments Act. Finally, it must set a hard deadline, typically fifteen days from the receipt of the notice, for the employer to clear the dues. The notice must conclude with a warning that failure to comply will result in civil and potentially criminal proceedings, and that the employer will be held liable for all resulting legal costs and interest accrued.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    It is crucial that this document is dispatched via registered post with acknowledgment due, as well as via email, to ensure undeniable proof of delivery. The employer's response, or lack thereof, within the stipulated fifteen days will form the foundation of your subsequent court filings.
                  </p>
                </div>
              </section>

              <section id="litigation-or-adr" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Litigation Or Alternative Dispute Resolution
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If the fifteen day deadline of the legal notice expires without a satisfactory resolution, you must escalate the matter to a judicial forum. For managerial staff excluded from the Labour Court, the civil courts are the primary battlefield.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Filing A Summary Suit Under Order 37
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    A regular civil suit for the recovery of money can take several years to conclude due to endless procedural delays and evidence recording. To combat this, you should file a summary suit under Order 37 of the Code of Civil Procedure. A summary suit is a specialized, fast-track legal proceeding specifically designed for the recovery of a liquidated sum of money that arises from a written contract, such as your employment agreement.
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
                    The defining advantage of Order 37 is that the defendant, in this case, your employer, does not have an automatic right to defend the suit. Once you file the suit presenting the employment contract and the unpaid settlement statement, the employer must explicitly apply to the court for permission to defend themselves. They must convince the judge that they have a substantial and legally valid defense, not merely a frivolous administrative excuse. If they fail to secure this permission, or if they fail to appear entirely, the court will immediately pass a decree in your favor.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    Alternatively, check your employment contract for an arbitration clause. Many modern corporations mandate that all employment disputes must be resolved through arbitration rather than civil litigation. If such a clause exists, you must invoke it and initiate arbitration proceedings. The arbitrator's final award is binding and enforceable as a court decree. Whether you utilize a summary suit or arbitration, the objective is to secure a legally enforceable order that compels the employer to pay the outstanding amount along with significant interest and legal costs.
                  </p>
                </div>
              </section>

              <section id="company-claims-bankruptcy" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  When The Company Claims Bankruptcy
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A severe complication arises when the employer claims they cannot pay the settlement because the company is facing catastrophic financial distress or insolvency. This is a common tactic used by failing startups or mismanaged corporations to avoid their obligations. However, the law provides a robust mechanism to counter this evasion.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3">
                    Invoking The Insolvency And Bankruptcy Code
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under the Insolvency and Bankruptcy Code of 2016, employees are formally classified as operational creditors. This classification grants you significant legal power. If the company owes you a substantial amount, you, either individually or collectively with other unpaid employees, can file a petition before the National Company Law Tribunal to initiate the Corporate Insolvency Resolution Process against the employer.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The mere threat of initiating insolvency proceedings is often the ultimate leverage. Directors and promoters fiercely protect their control over the company. A successful insolvency petition results in the immediate suspension of the board of directors and the appointment of an insolvency professional to take over the management of the company. To avoid losing control of their entire enterprise over unpaid employee dues, promoters will almost always find a way to miraculously procure the funds and settle the dispute out of court before the tribunal admits the petition. 
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    If the company is genuinely bankrupt and undergoes liquidation, the Insolvency and Bankruptcy Code prioritizes the payment of employee dues above many other types of unsecured debts. While liquidation payouts may take time, securing your position as a recognized operational creditor ensures that you will receive your proportional share of the company's liquidated assets. Protecting your financial interests requires vigilance, a thorough understanding of these legal frameworks, and the willingness to escalate the matter to the highest appropriate judicial authority without hesitation.
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
                  Dedicated to empowering professionals against corporate exploitation. Expert in navigating the complexities of the Payment of Wages Act and executing high success rate recovery strategies.
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
"""

    content = part1_imports + part2_data + part3_component

    # Ensure no em dashes or double hyphens
    content = re.sub(r'—', ',', content)
    content = re.sub(r'--', ',', content)
    
    with open('/Users/amalegalsolutions/Desktop/AMAWORK/legalrecovery/lr/src/app/how-to-recover-full-and-final-settlement-from-employer/FullAndFinalSettlementClient.tsx', 'w') as f:
        f.write(content)

    print("File generated successfully.")

generate_file()
