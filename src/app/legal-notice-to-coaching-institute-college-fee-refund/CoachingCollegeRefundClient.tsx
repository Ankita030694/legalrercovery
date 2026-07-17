'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Are non-refundable fee clauses in coaching center forms legally binding?",
    answer: "No. The Central Consumer Protection Authority (CCPA) and National Consumer Disputes Redressal Commission (NCDRC) have repeatedly ruled that non-refundable fee clauses printed on prospectus forms are one-sided and constitute an unfair contract under Section 2(46) of the Consumer Protection Act, 2019. Coaching centers cannot legally withhold fees for services they have not rendered. Any agreement that forces you to forfeit your money is considered void in the eyes of consumer law."
  },
  {
    question: "What is the UGC guidelines policy for college fee refunds?",
    answer: "The University Grants Commission (UGC) issues a comprehensive fee refund policy every academic year. Under these guidelines, if a student withdraws their admission up to 15 days before the formally notified last date of admission, the college must refund 100% of the fees collected, deducting a maximum processing charge of ₹1,000. The refund percentage decreases gradually if the student withdraws after the classes commence, ensuring that students are not financially penalized for choosing a better academic option."
  },
  {
    question: "Can a coaching center charge the full course fee if I leave mid-term?",
    answer: "No. If a student leaves a coaching institute mid-session due to dissatisfaction with the teaching quality, health issues, or relocation, the center can only charge fees proportionally for the period the student attended. Demanding or withholding the full course fee for the remainder of the year is deemed a restrictive trade practice and deficiency in service under consumer law. The institute must refund the balance amount."
  },
  {
    question: "What should I do if the college refuses to return my original certificates?",
    answer: "Under UGC and AICTE regulations, no higher education institution can legally retain a student's original academic certificates (such as 10th or 12th marksheets, passing certificates, or migration certificates) as leverage to force them to pay outstanding fees. Withholding original documents is a punishable offense. If a college does this, you should immediately file a complaint with the regional university board and serve a legal notice to the registrar."
  },
  {
    question: "Can I approach the Consumer Court for a fee refund from a school or college?",
    answer: "While the Supreme Court has held that core educational institutions (like schools and universities imparting regular academic degrees) do not provide a commercial 'service' under the Consumer Protection Act, private colleges, self-financed courses, and vocational coaching centers are generally considered service providers. Even for regular colleges, you can file a complaint for recovery of fees based on contract violations, or serve a formal notice citing UGC guidelines."
  },
  {
    question: "What is the first step to recover fees from a defaulting coaching institute?",
    answer: "The first step is sending a formal written refund request via email and registered post to the branch director. If they ignore your request, you must serve a legal notice through an advocate. This notice must cite the CCPA guidelines on unfair contracts, the Consumer Protection Act, and relevant case laws. Most institutes settle the refund at this stage to avoid litigation and regulatory audits."
  },
  {
    question: "How long does a college have to process a fee refund under rules?",
    answer: "Under UGC guidelines, colleges must process and disburse the eligible refund amount within 15 days from the date of receiving the written withdrawal application. If the college delays the refund beyond this period, the student can claim interest on the delayed amount, and the college can face penalties, including loss of university grants or cancellation of their affiliation with the board."
  },
  {
    question: "Can I get a refund if I signed a fee declaration form during admission?",
    answer: "Yes. Even if you signed a declaration stating that you agree to a non-refundable fee structure, such declarations have no legal standing if they violate statutory rules. The law overrides private agreements, and one-sided declarations signed under the pressure of securing admission are considered void as unfair contracts under Section 27 of the Indian Contract Act."
  }
];

const reviews = [
  {
    author: "Meenakshi Iyer (Chennai)",
    rating: "5",
    text: "My son secured admission to a private engineering college but later cleared the national exam. The college refused to refund the booking amount of ₹1.5 Lakhs, pointing to their non-refundable clause. We sent a legal notice citing UGC guidelines. The college processed the refund within 10 days, deducting only ₹1,000. Highly effective guide."
  },
  {
    author: "Rajesh Shrivastava (Kota)",
    rating: "5",
    text: "A famous coaching institute in Kota refused to refund ₹80,000 when my daughter decided to leave the batch after one month due to health issues. We drafted a notice citing the CCPA guidelines on unfair contracts. The center's legal head called us and settled the refund proportionally. Act firmly with these centers."
  },
  {
    author: "Pranav Dixit (Pune)",
    rating: "5",
    text: "This guide helped me recover my MBA admission fee of ₹2 Lakhs. The private institute delayed my refund for two months. Once we served a formal legal notice threatening escalation to the Consumer Forum, they credited the entire amount back. Citing NCDRC judgments was key."
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
      "name": "Fee Refund Legal Notice to Coaching Institute & Private College",
      "item": "https://www.legalrecovery.in/legal-notice-to-coaching-institute-college-fee-refund"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Fee Refund Legal Notice to Coaching Institute & Private College",
  "description": "Many educational centers claim that fees are entirely non-refundable. Learn how to recover tuition and college admission fees using CCPA and UGC guidelines.",
  "image": "https://www.legalrecovery.in/og-fee-refund.png",
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
  "name": "Fee Refund Legal Notice Guide",
  "image": "https://www.legalrecovery.in/og-fee-refund.png",
  "description": "Comprehensive legal guide to recovering tuition fees, admission booking amounts, and original academic certificates from private institutes.",
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

export default function CoachingCollegeRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "legal-standing", title: "The Legal Standing of Non-Refundable Fee Clauses in India" },
    { id: "step-procedure", title: "Step-by-Step Procedure to Demand a Fee Refund" },
    { id: "drafting-notice", title: "Drafting a Legal Notice to Educational Institutions" },
    { id: "before-after", title: "Before vs. After: Sending a Notice to Educational Centers" },
    { id: "legal-protections", title: "Legal Protections and Consumer Protection Act Remedies" },
    { id: "restrictive-trade-practices", title: "Restrictive Trade Practices and Unfair Contracts by Coaching Classes" },
    { id: "success-stories", title: "Fee Refund Success Stories" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Fee Refund Notice Guide", href: "/legal-notice-to-coaching-institute-college-fee-refund" }
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
              Education Rights
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Fee Refund Legal Notice to <span className="text-[#DC2626]">Coaching &amp; Private College</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Many educational centers claim that fees are entirely non-refundable. Learn how to recover tuition and college admission fees using CCPA and UGC guidelines.
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
                  Under consumer protection laws and guidelines issued by the Central Consumer Protection Authority (CCPA), non-refundable fee clauses in educational contracts are categorized as unfair contracts. If a student withdraws before the session begins or due to a change of mind, coaching institutes and private colleges are legally bound to refund the admission fee, deducting only a nominal administrative charge.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Every year, millions of students secure admissions in coaching institutes for competitive exams like JEE, NEET, and UPSC, or join private engineering, medical, and management colleges across India. However, many students face circumstances that compel them to withdraw their admission, such as securing a seat in a better college, financial difficulties, health issues, or finding the course curriculum unsuitable. When parents or students approach these educational centers for a refund, they are often met with outright refusals. Institutions point to bold non-refundable fee declarations printed on their prospectus forms and admission receipts. Parents, unaware of their legal rights, assume these private clauses are binding. This is a complete legal misconception. The regulatory frameworks of the University Grants Commission (UGC), AICTE, and the Consumer Protection Act, 2019 override any private agreements, declaring such clauses to be void and unenforceable.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  If you are struggling with a defaulting institute that refuses to return your fees, understanding the available legal remedies is the first step toward recovery. You should start by drafting a formal demand notice to the institute's director. To understand the structure and legal terminology of such notices, you can check the details on our main page for <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link>. For disputes that can be settled outside the courts, there are standard mechanisms you can explore. You can read about <Link href="/how-to-recover-money-without-going-to-court-india" className="text-[#DC2626] hover:underline font-medium">how to recover money without going to court in India</Link> to evaluate out of court settlements. Additionally, if the institution refuses to respond to your legal demands, you must prepare for further steps. You can review the <Link href="/what-to-do-if-legal-notice-is-ignored-india" className="text-[#DC2626] hover:underline font-medium">what to do if legal notice is ignored in India</Link> guide to coordinate your litigation strategy. Let us analyze the statutory rules governing fee refunds.
                </p>
              </div>

              <section id="legal-standing" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Legal Standing of Non-Refundable Fee Clauses in India
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Educational institutions cannot operate outside the law. Central authorities have established strict regulations that govern how schools, colleges, and coaching centers collect and refund fees.
                  </p>
                </div>

                <div className="space-y-12 mt-8">
                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="ccpa-guidelines-declaring-non-refundable-clauses-as-unfair-contracts" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      CCPA Guidelines Declaring Non-Refundable Clauses as Unfair Contracts
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      The Central Consumer Protection Authority (CCPA), established under the Consumer Protection Act, 2019, has targeted unfair trade practices in the education sector. Under Section 2(46) of the Act, an 'unfair contract' is defined as a contract between a consumer and a trader or service provider that contains terms that cause a significant imbalance in the rights of the consumer.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      The CCPA guidelines state that printing 'non-refundable fee' clauses, forcing students to sign one-sided declarations, or charging the entire course fee upfront without the option of a proportional refund constitutes an unfair contract. The authority has fined several national coaching brands for these practices, establishing that coaching centers can only charge for the period a student has actually attended.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      Many coaching centers try to bypass these rules by stating that the seat remains vacant after the student exits. However, courts have ruled that if a center has a waiting list or fills the seat, they cannot claim a loss. Even if the seat remains vacant, withholding the full year's fee is disproportionate and constitutes an illegal enrichment under the law.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="ugc-and-aicte-fee-refund-rules-for-private-colleges" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      UGC and AICTE Fee Refund Rules for Private Colleges
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      For regular degree colleges and technical universities, the University Grants Commission (UGC) and the All India Council for Technical Education (AICTE) issue mandatory fee refund circulars every academic year. These circulars apply to all central, state, private, and deemed universities.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      The UGC rules follow a percentage-based system based on when the student submits their withdrawal request relative to the college's last date of admission. If a student withdraws up to 15 days before the admission deadline, the college must refund 100% of the fees, deducting a processing charge of no more than ₹1,000. If they withdraw within 15 days after the deadline, the refund is 80%. The refund decreases to 50% if the request is submitted between 16 and 30 days after the deadline, and no refund is mandated if the request is submitted beyond 30 days. These guidelines ensure that colleges cannot arbitrarily detain student funds.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      Under the UGC Grievance Redressal Regulations, 2023, universities are also required to appoint an independent Ombudsman to address student disputes. If a private deemed university fails to comply with the fee refund notification, the Ombudsman has the power to recommend disciplinary action, which can include the withholding of central grants, suspension of the college's portal access, or complete revocation of the university status.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      Similarly, AICTE guidelines for technical institutions (offering MBA, MCA, Engineering, and Pharmacy courses) state that colleges cannot withhold original academic transcripts under any circumstances. If a college retains migration certificates or passing degrees to force payment of outstanding dues, it constitutes a major regulatory violation, exposing the college management to heavy financial penalties.
                    </p>
                  </div>
                </div>
              </section>

              <section id="step-procedure" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Step-by-Step Procedure to Demand a Fee Refund
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mb-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To claim a fee refund from a private college or coaching institute, you must follow a structured process to build a strong legal case:
                  </p>
                </div>

                {/* STEP CHECKLIST */}
                <div className="space-y-4">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Submit Written Withdrawal Application</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Submit a formal admission withdrawal and fee refund application via email and registered post. Clearly state the reason for withdrawal and date of submission.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Document the Timeline</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Keep copies of the admission receipt, prospectus, class commencement notice, and all communications with the institute's staff regarding the refund.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Serve a Formal Legal Notice</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the institute ignores your application or rejects it citing non-refundable policies, serve a legal notice through a consumer lawyer, granting them 15 days to refund.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Escalate to Consumer Court or Regulator</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the notice period expires without resolution, file a complaint before the Consumer Disputes Redressal Commission or file a complaint with the UGC/AICTE grievance cell.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Drafting the Initial Refund Application</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    When you draft the initial withdrawal application, keep the tone formal and objective. You must clearly state the date on which you paid the fees and details of the payment method (online transfer receipt or demand draft). Attach a cancelled cheque of your bank account to facilitate the electronic fund transfer. Ensure you send the application through an email address registered with the institute, and duplicate it by sending a physical copy via Speed Post to secure a delivery receipt. This receipt acts as proof of the date you initiated the withdrawal, which is crucial for determining your eligible refund slab under UGC rules.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Never rely on oral promises from branch staff or counselors who promise refunds. Staff members are incentivized to maintain high student numbers and will delay your withdrawal request until the refund deadline passes.
                  </p>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Understanding the UGC Refund System</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    To evaluate the refund amount you are eligible for, you must check the timeline of your withdrawal relative to the formally announced last date of admission. The table below details the percentage of refund applicable:
                  </p>
                </div>

                {/* UGC REFUND TABLE */}
                <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white text-xs md:text-sm">
                        <th className="p-4 font-bold border-b border-slate-700">Withdrawal Submission Timeline</th>
                        <th className="p-4 font-bold border-b border-slate-700">Refund Percentage</th>
                        <th className="p-4 font-bold border-b border-slate-700">Maximum Deduction Allowed</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs md:text-sm text-slate-700">
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                        <td className="p-4 font-bold bg-slate-50/30">15 days or more before the last date of admission</td>
                        <td className="p-4 text-emerald-600 font-bold">100% Refund</td>
                        <td className="p-4">₹1,000 as processing fee</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                        <td className="p-4 font-bold bg-slate-50/30">Less than 15 days before the last date of admission</td>
                        <td className="p-4 text-emerald-600 font-bold">90% Refund</td>
                        <td className="p-4">10% of total course fees</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                        <td className="p-4 font-bold bg-slate-50/30">15 days or less after the last date of admission</td>
                        <td className="p-4 text-orange-600 font-bold">80% Refund</td>
                        <td className="p-4">20% of total course fees</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                        <td className="p-4 font-bold bg-slate-50/30">More than 15 days but less than 30 days after admission deadline</td>
                        <td className="p-4 text-orange-600 font-bold">50% Refund</td>
                        <td className="p-4">50% of total course fees</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-4 font-bold bg-slate-50/30">More than 30 days after the last date of admission</td>
                        <td className="p-4 text-red-600 font-bold">0% Refund</td>
                        <td className="p-4">100% of total course fees</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="drafting-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting a Legal Notice to Educational Institutions
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A legal notice to a college or coaching center must be drafted with care, focusing on consumer rights and regulatory guidelines. It must detail the date of admission, the total amount paid, the date the withdrawal request was submitted, and the specific guidelines violated by the institution (such as the UGC circulars or the CCPA guidelines on unfair contracts).
                  </p>
                  
                  <div className="bg-[#111827] text-slate-300 p-6 rounded-2xl border border-slate-800 my-6 font-mono text-xs overflow-x-auto leading-relaxed">
                    <p className="text-white font-bold mb-2">Key Legal Notice Elements:</p>
                    <p>1. Parties: Address to the Director, Chairperson, and local Branch Head</p>
                    <p>2. Course Details: Specify course name, batch timing, roll number, and fee paid</p>
                    <p>3. Timeline: Date of admission, date of class commencement, and date of withdrawal request</p>
                    <p>4. Legal Basis: Cite CCPA Guidelines 2024 and Section 2(46) of Consumer Protection Act</p>
                    <p>5. UGC Regulations: Cite relevant UGC Fee Refund Notification for academic sessions</p>
                    <p>6. Precedents: Reference NCDRC judgments penalizing coaching centers for one-sided clauses</p>
                    <p>7. Cure Period: Grant a 15-day window to settle before initiating legal action</p>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    When drafting this legal notice, you must ensure that all communication details are precise. Educational brands often operate under a complex structure of regional franchises, national parent corporations, and local branch offices. Your legal notice must be addressed to the specific local branch manager where the admission was taken, as well as the managing director at the registered corporate headquarters. This dual delivery ensures that the notice cannot be dismissed as a localized branch issue. You must clearly state the student's enrollment details, transaction IDs, date of admission, and the timeline of your withdrawal request. Cite the exact clauses of the CCPA guidelines to demonstrate that your demand is backed by statutory authority.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Sample Fee Refund Legal Notice Template</h3>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner font-sans text-xs md:text-sm text-slate-700 leading-relaxed space-y-4">
                    <p className="font-bold">LEGAL NOTICE</p>
                    <p>To,<br />The Director / Chairperson<br />[Coaching Institute / Private College Name]<br />[Registered Corporate Address]</p>
                    <p>Dear Sir/Madam,</p>
                    <p>Under instructions from my client, [Parent/Student Name], resident of [Address], I hereby serve you with this legal notice regarding the non-refund of tuition fees amounting to ₹[Amount].</p>
                    <p>My client secured admission for the [Course Name] at your institute on [Admission Date] and paid a total fee of ₹[Amount] vide transaction receipt number [Receipt Number]. Due to [Relocation / Medical Reasons / Change of Mind], my client submitted a written withdrawal application on [Withdrawal Date], which was [Number of Days] days before the commencement of classes.</p>
                    <p>Despite receiving the withdrawal application on time, your institute has refused to refund the fees, pointing to a 'non-refundable fee' clause in your prospectus. I draw your attention to the guidelines issued by the Central Consumer Protection Authority (CCPA) and Section 2(46) of the Consumer Protection Act, 2019, which declare such clauses to be unfair contracts and restrictive trade practices. Coaching centers cannot legally withhold fees for services they have not rendered.</p>
                    <p>We hereby call upon you to refund the amount of ₹[Amount] within 15 days of receiving this notice. Failure to do so will compel my client to file a complaint before the Consumer Disputes Redressal Commission and approach the UGC/AICTE grievance cell, making your institute liable for all costs and consequences.</p>
                    <p>Yours faithfully,<br />[Advocate Name]</p>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Serving this notice via Registered Post with Acknowledgment Due (RPAD) creates a court-admissible record. Most educational brands have compliance departments that will settle the refund to avoid negative publicity and fines.
                  </p>
                </div>
              </section>

              <section id="before-after" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Before vs. After: Sending a Notice to Educational Centers
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
                          The institute administrators refuse to cooperate, citing internal policies. They ignore your emails, and point to the non-refundable clause signed during admission.
                        </p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs block mb-2">After Notice</span>
                        <p className="text-slate-300 leading-relaxed">
                          The institute's legal department reviews the CCPA and UGC compliance parameters. They often approve a proportional refund to avoid consumer court fines and loss of affiliation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="legal-protections" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Legal Protections and Consumer Protection Act Remedies
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Consumer Court Rulings on Coaching Centers</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The National Consumer Disputes Redressal Commission (NCDRC) has issued several landmark judgments regarding coaching center refunds. In the case of *Seema Chawla v. FIITJEE*, the commission held that coaching centers cannot charge the entire course fee upfront for multi-year programs. The commission ruled that forcing students to pay the entire fee at the beginning of the year restricts their right to exit, which is an unfair trade practice.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Similarly, in *Brilliant Tutorials v. Consumer Protection Forum*, the courts held that if a student leaves a course midway due to dissatisfaction with the teaching quality, the center can only charge fees proportionally. Any clause that allows the center to retain the full fee for services not rendered is void as an unfair contract. These rulings provide significant leverage to students demanding refunds.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under the Consumer Protection Act, 2019, the filing procedure has been simplified. If an institute refuses to settle, parents can file a complaint online through the Integrated Consumer Grievance Portal called E-Daakhil. This online portal allows you to file complaints directly from home without requiring physical visits to the District Consumer Disputes Redressal Commission. The complaint should demand the refund amount along with interest and compensation for mental harassment.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Consumer commissions have the power to award significant compensation to students and parents. Under the Consumer Protection Act, 2019, if an educational institution is found guilty of withholding refunds illegally, the commission can order the refund of the principal amount along with interest rates of up to 12% per annum from the date of deposit. In addition to the financial refund, the court can award punitive damages for mental harassment, inconvenience, and the loss of an academic year. If the institution's conduct is found to be particularly egregious, the commission can report the matter to the state education department and local licensing authorities, urging them to cancel the center's commercial trade license.
                  </p>
                </div>
              </section>

              <section id="restrictive-trade-practices" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Restrictive Trade Practices and Unfair Contracts by Coaching Classes
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Many coaching institutes engage in Restrictive Trade Practices as defined under Section 2(41) of the Consumer Protection Act. This includes forcing students to buy uniform, books, or online test series from the institute at inflated prices as a condition of admission. Forcing students into a package deal instead of offering individual course modules is considered restrictive.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Similarly, clauses that state that fees will not be refunded under any circumstances, or that the institute is not liable for changes in faculty, are one-sided and constitute unfair contracts. By identifying these practices and citing the relevant provisions in your legal notice, you can prove that the institute's operations violate consumer protection standards, leaving their compliance team with no choice but to settle.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Restrictive trade practices in the coaching industry are not limited to one-sided fee refunds. Many institutes compel students to buy expensive tablet computers pre-loaded with study material, or force them to subscribe to specific online test portals. The Supreme Court of India and various consumer commissions have established that tying services in this manner is a direct violation of consumer rights. If a student decides to leave the course, the institute cannot force them to pay for the remaining period of these tied services. A student is only liable to pay for the classes they have physically attended and the materials they have actually consumed.
                  </p>
                </div>
              </section>

              <section id="success-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Fee Refund Success Stories
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Successful recovery cases show that institutions do comply when faced with formal legal notices. Let us look at two real-life cases.
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Kota Coaching Refund Success</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A student in Kota left a medical entrance batch after two months due to severe health issues. The coaching center refused to refund the remaining balance of ₹95,000, citing their non-refundable policy. The parent served a formal legal notice prepared by an advocate, citing the CCPA guidelines. The center's corporate legal cell reviewed the notice and processed a proportional refund of ₹65,000, deducting only the fees for the attended period.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Private Deemed University Refund Case</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A student withdrew their admission from a private deemed university 10 days before classes commenced. The university delayed the refund of ₹1.8 Lakhs for three months, claiming that the seat remained vacant. The parent sent a legal notice citing the UGC fee refund circular and threatening escalation to the university board. The registrar's office immediately processed the refund, deducting a processing fee of ₹1,000.
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
              <h2 className="text-2xl md:text-4xl font-black mb-4">Fee Refund Notice Reviews</h2>
              <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                Read how students and parents have successfully secured fee refunds from colleges and coaching centers using our guides.
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
                      <p className="text-[10px] text-slate-500 font-medium">Verified Parent</p>
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
