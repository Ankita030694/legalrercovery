'use client';

import { useState } from "react";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What are the UGC-mandated refund slabs for college fee withdrawal in 2024–25?",
    answer: "The University Grants Commission (UGC) issues specific fee refund guidelines for each academic session. For 2024–25, the framework is: (1) Full refund for cancellations up to September 30, with no deduction or only a nominal processing fee if specified by the institution. (2) Refund minus a processing fee of no more than ₹1,000 for cancellations between October 1 and October 31. (3) For admissions that commence or have last dates after October 31, the UGC 2018 Notification applies—100% refund if withdrawing 15 or more days before the last date of admission; 90% if less than 15 days before; 80% if within 15 days after; 50% if between 15 and 30 days after; and 0% if more than 30 days after the last date of admission. These slabs are mandatory for all UGC-recognized universities, deemed universities, and affiliated colleges. Any college retaining more than these limits is in direct violation of UGC norms."
  },
  {
    question: "My engineering college is not refunding fees. Does AICTE have any guidelines?",
    answer: "Yes. The All India Council for Technical Education (AICTE) has its own Approval Process Handbook that governs fee refunds for AICTE-approved technical institutions. AICTE-affiliated colleges—including engineering, management, pharmacy, architecture, and hotel management institutes—are prohibited from collecting any fee beyond the amounts approved by the State Fee Committee or the AICTE-designated authority. In case of withdrawal, these colleges must follow refund norms broadly aligned with UGC guidelines. If your engineering or MBA college retains your fee beyond what AICTE norms permit, you can file a formal complaint at the AICTE Centralized Support System (css.aicte-india.org). Additionally, if the college collected a management quota or NRI quota fee that exceeded the State Admission Authority's approved limits, the entire excess is recoverable as an illegally collected amount."
  },
  {
    question: "Can a college legally refuse to return my original mark sheets and certificates?",
    answer: "Absolutely not. Both UGC guidelines and AICTE norms explicitly prohibit Higher Education Institutions from retaining a student's original academic and personal certificates—including Class 10 and Class 12 mark sheets, school leaving certificates, birth certificates, migration certificates, and character certificates—under any circumstances, including fee disputes. Colleges are only permitted to verify original documents in the student's presence and must return them immediately, retaining only self-attested photocopies for their records. Withholding original certificates to coerce payment of disputed fees is classified as an unfair trade practice under the Consumer Protection Act, 2019, and courts have additionally treated it as an infringement on the student's right to pursue higher education or employment. Such conduct can also be challenged before the High Court through a writ petition seeking immediate return of documents."
  },
  {
    question: "What is the UGC e-Samadhan portal and how does it help me recover college fees?",
    answer: "The UGC e-Samadhan portal (samadhaan.ugc.ac.in) is a dedicated online grievance platform for students of UGC-recognized institutions. It allows you to file a formal complaint against a college for non-refund of fees, withholding of original documents, arbitrary fee hikes, or any other violation of UGC norms. Once you submit a complaint with supporting documents (fee receipts, withdrawal application, correspondence with the college), the UGC forwards it to the institution and mandates a time-bound response. The portal tracks the complaint with a unique Grievance ID and creates an official government record of the violation. Even if the complaint does not resolve in your favour through the portal alone, having a UGC Grievance ID significantly strengthens your consumer complaint by demonstrating that you exhausted the prescribed regulatory channel first. The UGC also has the power to impose sanctions on non-compliant colleges, including withdrawal of recognition."
  },
  {
    question: "I paid a 'management quota' or 'NRI quota' fee that was much higher than the regular fee. Can I get that money back if I withdraw?",
    answer: "This is one of the most complex but also most potentially rewarding categories of college fee recovery. Management quota and NRI quota seats carry significantly higher fees—often several times the regular merit quota fee—approved through a separate process by the State Admission Authority or the institution's own fee committee. If you paid management quota fees and then withdrew, the refund entitlement depends on the same UGC/state authority timelines. However, if the management quota fee was collected without the proper approval of the relevant State Fee Committee, or if it exceeded the approved management quota fee ceiling, the excess component is recoverable as an unauthorized charge. We audit the State Fee Committee's approved fee schedule against what you were actually charged and identify the recoverable excess before drafting the legal notice."
  },
  {
    question: "The college is offering to 'adjust' my fees against next year's admission instead of a cash refund. Must I accept this?",
    answer: "No. A fee adjustment or carry-forward is not a refund. If you are withdrawing from the institution—whether to join a different college, pursue a different course, or for personal reasons—you have no intention of returning for the next academic year. Offering to adjust fees against future years is a commercially convenient offer for the college but is meaningless to you. The UGC guidelines mandate a cash refund of the applicable percentage within 15 days of receiving your written withdrawal application. Refusing to pay cash and offering only an adjustment is a violation of UGC norms. At LegalRecovery, we reject such offers on your behalf and demand the cash refund you are legally entitled to."
  },
  {
    question: "My college is a private deemed-to-be university. Do UGC guidelines apply to it?",
    answer: "Yes. Deemed-to-be universities—institutions granted university status by the Government of India on the recommendation of the UGC under Section 3 of the UGC Act, 1956—are fully subject to all UGC guidelines, including the fee refund notification. They are not exempt by virtue of their deemed status or their private management. In fact, deemed universities often charge substantially higher fees than state universities, making the financial stakes in fee refund disputes much higher. Some deemed universities have attempted to argue that their autonomy under the deed of grant exempts them from UGC fee guidelines—this argument has been consistently rejected by consumer commissions and by courts."
  },
  {
    question: "What should I do if the college asks me to sign a 'No Dues Certificate' or a waiver as a condition for returning my documents?",
    answer: "Be extremely careful. Many colleges condition the return of original documents on the signing of a 'No Dues Certificate' or a broad settlement waiver that includes language releasing the college from all claims including the right to seek a refund. If you sign such a document, it can be used against you in any subsequent consumer complaint or legal proceeding. The return of your original documents and your right to a fee refund are two completely separate legal obligations of the college. The college cannot make the return of your property—your academic certificates—conditional on you surrendering your financial rights. If the college refuses to return documents without a waiver, treat it as an emergency and contact LegalRecovery immediately for intervention through the DEO and AICTE/UGC channels."
  },
  {
    question: "I changed my course after one year. Is the refund calculation based on the annual fee or the full course fee?",
    answer: "Refund calculations for mid-programme withdrawals are based on the fees actually collected for the academic year in which you are withdrawing, not on the total multi-year course fee. If you withdraw after completing one year of a four-year engineering programme, you are entitled to a refund of the second year's fees in proportion to how much of the second year you attended before withdrawing, subject to the UGC refund slab timelines. The college cannot claim that your first year's tuition subsidises the second year's non-usage, or refuse a refund because you already received value for the first year. Each academic year is treated as a distinct fee period for refund calculation purposes."
  },
  {
    question: "Can I file a consumer complaint even if the college says disputes must go to arbitration under the admission agreement?",
    answer: "Yes. Many college admission agreements include an arbitration clause stating that all disputes will be resolved through private arbitration. Consumer commissions have consistently held that such clauses cannot strip a student of the right to approach a Consumer Disputes Redressal Commission. The Consumer Protection Act, 2019, specifically provides that consumers have an additional right to approach the consumer commission, and this right cannot be contracted away through a private arbitration clause in a take-it-or-leave-it admission form. The Supreme Court has also affirmed in multiple cases that consumer commissions retain jurisdiction over disputes involving educational fees even where the agreement contains arbitration clauses."
  },
  {
    question: "How quickly does LegalRecovery's legal notice typically result in a refund from a college?",
    answer: "In our experience across hundreds of college fee refund cases, approximately 65–70% of disputes are resolved within 15 to 25 days of serving the legal notice—particularly when the notice precisely cites the applicable UGC slab, the AICTE Handbook provision, and the Consumer Protection Act sections. Colleges affiliated with reputed national or state universities are especially responsive because non-compliance risks their regulatory standing, accreditation, and affiliation status. For deemed universities and private colleges with no government affiliation to protect, we escalate simultaneously to the UGC e-Samadhan portal and the consumer commission, combining regulatory and judicial pressure. In stubborn cases, a consumer commission notice to the college's registered address and personal addresses of all trustees or directors typically produces a settlement within the first two hearings."
  },
  {
    question: "The college refunded only 50% of my fees citing their own internal policy. Is that enough?",
    answer: "Not if the UGC slab entitles you to a higher percentage. A college's internal refund policy cannot override UGC-mandated refund norms, which are statutory guidelines applicable to all recognized institutions. If the UGC slab applicable to your withdrawal date entitles you to 80% or 90% of the fee, the college cannot substitute its own 50% policy. The difference between what you received and what you are entitled to under UGC guidelines is a legally recoverable amount. At LegalRecovery, we calculate the shortfall precisely and file for recovery of the balance along with interest and compensation for the delay and harassment of receiving less than what you were owed."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.legalrecovery.in" },
    { "@type": "ListItem", "position": 2, "name": "Recovery", "item": "https://www.legalrecovery.in/recovery" },
    { "@type": "ListItem", "position": 3, "name": "College Fee Refund", "item": "https://www.legalrecovery.in/recovery/college-fee-refund" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "College or University Not Refunding Fees? Your Legal Rights and UGC-Backed Recovery Options in India",
  "description": "Comprehensive guide on recovering college and university admission fees in India. Covers UGC mandatory refund slabs, AICTE norms, original document withholding, UGC e-Samadhan portal, deemed universities, management quota fees, and consumer court remedies.",
  "image": "https://www.legalrecovery.in/og-college-fee-refund.png",
  "author": { "@type": "Organization", "name": "Team LegalRecovery", "url": "https://www.legalrecovery.in" },
  "publisher": { "@type": "Organization", "name": "LegalRecovery", "logo": { "@type": "ImageObject", "url": "https://www.legalrecovery.in/logo.png" } },
  "datePublished": "2026-06-09",
  "dateModified": "2026-06-09"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "College Fee Refund Recovery Services",
  "image": "https://www.legalrecovery.in/og-college-fee-refund.png",
  "description": "Expert legal assistance to recover college and university admission fees, fight original certificate withholding, and enforce UGC/AICTE refund norms across India.",
  "brand": { "@type": "Brand", "name": "LegalRecovery" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "375" },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Rohan Verma" },
      "reviewBody": "My engineering college in Pune refused to refund ₹1.4 lakh and held my Class 12 mark sheets for 8 months. LegalRecovery served a notice, filed on the AICTE portal, and recovered both my documents and the full refund in 22 days."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Meera Pillai" },
      "reviewBody": "A deemed university in Coimbatore collected ₹3.5 lakh as management quota fee and then offered only ₹50,000 back when I withdrew. LegalRecovery filed through UGC e-Samadhan and a consumer complaint. Full ₹3.5 lakh plus interest recovered."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Ajay Bhardwaj" },
      "reviewBody": "My MBA college insisted disputes go to their internal arbitration panel and flatly refused a consumer forum. LegalRecovery proved the arbitration clause was invalid under consumer law. Got ₹2.1 lakh back within 30 days."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Preethi Subramaniam" },
      "reviewBody": "My daughter changed her course after the first year. The college refused any refund citing their 'no refund after one year' policy. LegalRecovery cited the UGC slab applicable to our withdrawal date and recovered ₹68,000 within 3 weeks."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Neeraj Tiwari" },
      "reviewBody": "The college demanded I sign a waiver to get my 10th and 12th originals back. LegalRecovery immediately intervened with a AICTE complaint and the documents were returned the next day without any waiver. Exceptional response time."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4" },
      "author": { "@type": "Person", "name": "Shreya Kulkarni" },
      "reviewBody": "I withdrew before classes began but the college offered only a 'fee adjustment' for next year. LegalRecovery insisted on a cash refund citing UGC norms. Got ₹85,000 in cash credited to my account within 20 days."
    }
  ]
};

export default function CollegeFeeRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const id = `faq-${index}`;
    setExpandedFaqs(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const tocSections = [
    { id: "introduction",          title: "Introduction" },
    { id: "ugc-refund-slabs",      title: "UGC Mandated Refund Slabs" },
    { id: "aicte-technical-rules", title: "AICTE & Technical Education Rules" },
    { id: "documents-withheld",    title: "Original Documents Held Hostage" },
    { id: "deemed-mgmt-quota",     title: "Deemed Universities & Management Quota" },
    { id: "esamadhan-escalation",  title: "UGC e-Samadhan & Regulatory Path" },
    { id: "legal-notice-forum",    title: "Legal Notice & Consumer Forum" },
    { id: "case-studies",          title: "Success Stories" },
    { id: "testimonials",          title: "Client Reviews" },
    { id: "why-choose-us",         title: "Why Choose Us?" },
    { id: "faqs",                  title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "College Fee Refund", href: "/recovery/college-fee-refund" },
  ];

  return (
    <>
      <Script id="bc-schema"      type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="art-schema"     type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema"     type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema"  type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">

        {/* ── Hero ── */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]" />
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Largest Legal Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              College or University <span className="text-[#DC2626]">Not Refunding</span> Your Admission Fees?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              UGC mandates specific refund slabs for every withdrawal date. AICTE prohibits retaining original certificates. Consumer law backs your right to recover every rupee. Let LegalRecovery put India&apos;s full regulatory machinery to work for you.
            </p>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Recover College Fees Now
            </button>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="container mx-auto px-4 max-w-8xl py-10">
          <div className="mb-6"><Breadcrumbs items={breadcrumbItems} /></div>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">

            {/* Left TOC – Desktop */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">

                {/* ── Introduction ── */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Introduction</h2>
                  <div className="space-y-5 text-sm md:text-base text-slate-650 leading-relaxed">
                    <p>
                      Securing admission to a college or university in India is, for most families, the culmination of years of preparation, sacrifice, and financial planning. Whether it is a government engineering college, a private business school, a deemed-to-be university, a medical college, or a law school, the admission fee payment is a high-stakes, high-pressure moment. Families liquidate fixed deposits, take education loans, borrow from relatives, and in some cases sell assets—all to secure a seat that represents their child&apos;s professional future. The fee amounts involved are often substantial: ₹50,000 to ₹5,00,000 for a single year at a private college, and several multiples of that for professional programmes like MBBS, BDS, MBA, or engineering at a premium institution.
                    </p>
                    <p>
                      What makes the college fee refund landscape particularly treacherous—and distinctly different from school fee disputes—is the <strong>compounding of financial pressure with academic urgency</strong>. A student who withdraws from a college in August to join a better institution discovered through a late counselling round is simultaneously navigating admission deadlines at the new college, relocation logistics, and financial transactions, often without any legal support. The original college knows this. And it uses the student&apos;s time pressure and information asymmetry to its maximum advantage: refusing refunds, delaying responses, demanding in-person visits, and withholding original certificates as collateral to trap the student in an impossible position. <strong>The student either gives up the refund—abandoning lakhs of rupees—or risks missing the deadline at the new institution.</strong> Both outcomes serve the college&apos;s financial interests. Neither outcome is legally permissible.
                    </p>
                    <p>
                      What most students and parents do not know—and what colleges count on them not knowing—is that the University Grants Commission has issued comprehensive, legally binding guidelines that specify <em>exactly</em> what percentage of fees must be refunded based on the date of withdrawal, that AICTE prohibits engineering colleges from retaining original academic certificates under any circumstances, and that consumer commissions have repeatedly exercised jurisdiction over college fee disputes and ordered full refunds with interest and compensation. The legal framework protecting students in higher education fee disputes is, if anything, <em>stronger</em> and more precisely calibrated than the framework for school fee disputes, because the UGC has issued date-specific, percentage-specific refund slabs that leave colleges with almost no room for discretionary fee retention. <strong>LegalRecovery exists to translate that legal framework into actual money recovered for actual students.</strong>
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A college that retains fees beyond the UGC-mandated percentage is not exercising institutional autonomy—it is violating a statutory norm. The distinction between these two is not subtle; it is the difference between a lawful policy and an illegal act.&quot;
                    </div>
                  </div>
                </section>

                {/* ── UGC Refund Slabs ── */}
                <section id="ugc-refund-slabs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">UGC Mandated Refund Slabs</h2>
                  <div className="space-y-5 text-sm md:text-base text-slate-650 leading-relaxed">
                    <p>
                      The University Grants Commission&apos;s fee refund guidelines are the single most powerful tool in a student&apos;s legal arsenal when dealing with a college that refuses to return admission money. Unlike the Consumer Protection Act—which requires a court to interpret whether the college&apos;s conduct constitutes deficiency in service—UGC guidelines are <strong>specific, numerical, and unambiguous</strong>. They tell you, to the percentage point, exactly what you are owed based on the date you submitted your withdrawal application. Any college that retains more than the prescribed percentage has committed a quantifiable regulatory violation, and that violation is directly actionable both through the UGC&apos;s own grievance mechanism and through consumer forums.
                    </p>
                    <p>
                      For the academic session 2024–25, the UGC&apos;s framework operates in two tiers. The first tier is a simplified rule for the typical admission season: <strong>full refund</strong> for cancellations received by the institution on or before September 30, with a deduction of no more than ₹1,000 as a processing fee at the institution&apos;s discretion. For cancellations submitted between October 1 and October 31, the institution may deduct no more than ₹1,000—meaning you are still entitled to receive back the entire fee minus that nominal amount. This simplified rule reflects the UGC&apos;s recognition that October is a month of intense second-round counselling activity, where students frequently shift between institutions as merit lists are released, and that penalising such mobility with heavy fee forfeitures discourages students from accessing their rightful allotments.
                    </p>

                    <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-x-auto">
                      <table className="w-full text-xs sm:text-sm text-slate-700">
                        <thead className="bg-[#111827] text-white">
                          <tr>
                            <th className="text-left p-4 font-extrabold">Withdrawal Timing</th>
                            <th className="text-left p-4 font-extrabold">Refund Entitlement</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr className="hover:bg-slate-50/70">
                            <td className="p-4">On or before 30 September</td>
                            <td className="p-4 font-bold text-green-700">Full refund (deduction ≤ ₹1,000)</td>
                          </tr>
                          <tr className="hover:bg-slate-50/70">
                            <td className="p-4">1 October – 31 October</td>
                            <td className="p-4 font-bold text-green-700">Full refund minus max ₹1,000</td>
                          </tr>
                          <tr className="hover:bg-slate-50/70">
                            <td className="p-4">≥15 days before last admission date (post Oct 31)</td>
                            <td className="p-4 font-bold text-blue-700">100% refund</td>
                          </tr>
                          <tr className="hover:bg-slate-50/70">
                            <td className="p-4">&lt;15 days before last admission date</td>
                            <td className="p-4 font-bold text-blue-700">90% refund</td>
                          </tr>
                          <tr className="hover:bg-slate-50/70">
                            <td className="p-4">Within 15 days after last admission date</td>
                            <td className="p-4 font-bold text-yellow-700">80% refund</td>
                          </tr>
                          <tr className="hover:bg-slate-50/70">
                            <td className="p-4">15–30 days after last admission date</td>
                            <td className="p-4 font-bold text-orange-700">50% refund</td>
                          </tr>
                          <tr className="hover:bg-slate-50/70">
                            <td className="p-4">More than 30 days after last admission date</td>
                            <td className="p-4 font-bold text-red-700">0% refund</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p>
                      For the 0% slab, one important nuance applies: even if a student withdraws more than 30 days after the last admission date, the institution must still refund any <strong>caution deposit or security deposit</strong> collected, since these are inherently refundable sums distinct from the tuition and development fees that are subject to the slab structure. Additionally, if the withdrawal was triggered by a medical emergency, a natural disaster, or a death in the family—rather than a voluntary academic decision—consumer commissions and courts have applied equitable principles to override the 0% slab and order partial or full refunds. The UGC guidelines are a mandatory floor; they do not prevent a consumer commission from awarding more in exceptional circumstances.
                    </p>
                    <p>
                      The critical procedural requirement is that your withdrawal application must be <strong>in writing</strong> and submitted to the institution formally—not communicated verbally, not sent through an intermediary, and not merely implied by the fact that you stopped attending classes. The date on which the institution receives your written withdrawal application is the trigger date for the refund slab calculation. We always advise clients to submit withdrawal applications via registered speed post with acknowledgment due (AD) to the institution&apos;s registered address, email to the admissions office and the registrar simultaneously, and in-person submission with an acknowledgment copy stamped by the institution. This triple-channel submission ensures that the trigger date is irrefutably established.
                    </p>
                    <p>
                      The institution is required to process and credit the refund <strong>within 15 days</strong> of receiving the withdrawal application. Delay beyond 15 days is itself a violation of UGC norms and entitles the student to claim interest on the delayed refund from the 16th day onwards. Consumer commissions have awarded interest at rates between 9% and 12% per annum on delayed refunds, which in cases involving lakhs of rupees over several months can add up to a meaningful additional recovery.
                    </p>
                  </div>
                </section>

                {/* ── AICTE & Technical Education ── */}
                <section id="aicte-technical-rules" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">AICTE &amp; Technical Education Rules</h2>
                  <div className="space-y-5 text-sm md:text-base text-slate-650 leading-relaxed">
                    <p>
                      Students at AICTE-approved technical institutions—engineering colleges, management institutes, pharmacy schools, hotel management institutes, architecture colleges, and polytechnics—are protected by a distinct regulatory framework that operates parallel to and in conjunction with UGC guidelines. The All India Council for Technical Education (AICTE), established under the AICTE Act, 1987, is the statutory body responsible for planning and coordinated development of technical education in India. Every AICTE-approved institution must comply with the <strong>AICTE Approval Process Handbook</strong>—updated annually—which governs virtually every aspect of institutional conduct including admissions, fee structures, faculty qualifications, infrastructure requirements, and student grievance redressal.
                    </p>
                    <p>
                      On fee regulation, the AICTE Handbook is categorical: no AICTE-approved institution may charge any fee other than those approved by the relevant State Government or State Fee Determination Committee. This is not a guideline or a recommendation—it is a binding condition of AICTE approval, and institutions that violate it risk having their approval revoked. The practical significance for students is enormous: if your engineering or management college charged you more than the approved fee—whether as tuition, development charge, laboratory fee, library fee, or any other head—the excess is an unauthorized collection and must be refunded. At LegalRecovery, we routinely cross-reference the State Fee Committee&apos;s approved fee schedule (publicly available on the state&apos;s technical education directorate website) against the fee collected receipt by receipt, identifying every rupee of unauthorized excess.
                    </p>
                    <p>
                      The AICTE&apos;s <strong>Centralized Support System (css.aicte-india.org)</strong> is the official grievance portal for complaints against AICTE-approved institutions. When a student files a complaint on this portal—attaching fee receipts, the withdrawal letter, and any correspondence with the college—the AICTE forwards it to the institution and requires a formal, time-bound response. The AICTE also conducts periodic compliance inspections, and an active complaint from a student creates an institutional risk that compliance officers at most colleges take very seriously. In our experience, filing a complaint on the AICTE portal simultaneously with a legal notice creates a compound pressure that resolves a significantly higher percentage of cases at the pre-litigation stage compared to a legal notice alone.
                    </p>
                    <p>
                      For disputes involving admissions through state centralised counselling systems—like Maharashtra&apos;s MHT-CET cap rounds, Tamil Nadu&apos;s TNEA counselling, Karnataka&apos;s KEA, or Rajasthan&apos;s JoSAA-equivalent process—there is an additional layer of protection: the State Admission Authority itself has jurisdiction over fee disputes arising from its centralised admissions. If a college refuses to follow the refund rules applicable to state-centralised admissions, the student can approach the State Admission Authority directly, in addition to the AICTE and the consumer forum. This is a powerful additional forum that many students are unaware of, and LegalRecovery consistently invokes it in relevant cases.
                    </p>
                  </div>
                </section>

                {/* ── Documents Withheld ── */}
                <section id="documents-withheld" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Original Documents Held Hostage</h2>
                  <div className="space-y-5 text-sm md:text-base text-slate-650 leading-relaxed">
                    <p>
                      The single most coercive tool available to a college in a fee dispute is the retention of a student&apos;s original academic documents—the Class 10 and Class 12 mark sheets and certificates, the school leaving certificate, the migration certificate, the birth certificate, and any other original document collected at the time of admission. The student who wants to withdraw and join another institution cannot complete admission at the new college without these originals. The old college knows this. And in the absence of legal knowledge on the student&apos;s part, it exploits this leverage to force the student to abandon the refund claim, accept a grossly inadequate partial refund, or sign a comprehensive waiver of all rights—in exchange for documents that legally should never have been withheld in the first place.
                    </p>
                    <p>
                      Both UGC guidelines and AICTE norms are crystal clear on this point, and they have been for years: <strong>Higher Education Institutions are strictly prohibited from retaining original academic and personal certificates of students.</strong> The prescribed procedure is for institutions to verify original documents in the student&apos;s presence during the admission process, immediately return them, and retain only self-attested photocopies for institutional record-keeping. A college that takes originals and keeps them—let alone uses them as leverage in a fee dispute—is acting in direct violation of statutory guidelines.
                    </p>
                    <p>
                      The legal framework for recovering withheld documents operates on multiple fronts simultaneously. First, the <strong>AICTE Centralized Support System</strong> accepts complaints about document withholding and can direct institutions to return documents as a condition of continued AICTE approval—an existential threat for any technical college. Second, the <strong>UGC e-Samadhan portal</strong> serves the same function for UGC-recognized universities and affiliated colleges. Third, the <strong>Directorate of Technical Education (DTE)</strong> or the corresponding State Education Department for non-technical colleges can issue directions to release documents. Fourth—and most immediately effective in urgent situations—a <strong>writ petition under Article 226 of the Constitution</strong> filed in the relevant High Court, seeking an order of mandamus directing the college to return the documents forthwith, is routinely granted by High Courts within one to three hearings when the facts are clear. Consumer commissions, in addition to ordering refunds, have also passed orders directing the immediate return of withheld certificates.
                    </p>
                    <p>
                      For students who need an immediate resolution—because the new college&apos;s admission deadline is imminent—LegalRecovery&apos;s emergency protocol compresses the intervention into 24 to 48 hours: simultaneous AICTE/UGC complaint filing, legal notice to the college management and all directors personally, and DTE complaint, with the explicit warning that a High Court writ petition will be filed the following morning if the documents are not returned by end of day. In the vast majority of cases, the college complies within 24 hours rather than face the reputational and regulatory consequences of a High Court writ petition being admitted against it.
                    </p>
                  </div>
                </section>

                {/* ── Deemed Universities & Management Quota ── */}
                <section id="deemed-mgmt-quota" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Deemed Universities &amp; Management Quota</h2>
                  <div className="space-y-5 text-sm md:text-base text-slate-650 leading-relaxed">
                    <p>
                      Two categories of college fee disputes deserve special attention because of the large amounts involved and the specific legal challenges they present: disputes involving <strong>deemed-to-be universities</strong> and disputes involving <strong>management quota or NRI quota admissions</strong>. Both categories involve fee amounts that are substantially higher than regular merit quota fees—often by a factor of two to five—and both categories are subject to legal frameworks that many students and parents are unfamiliar with.
                    </p>
                    <p>
                      <strong>Deemed-to-be universities</strong>—often called &quot;deemed universities&quot;—are institutions granted university status by the Ministry of Education on the recommendation of the UGC under Section 3 of the UGC Act, 1956. India has over 350 deemed universities, ranging from world-class research institutions to institutions of questionable quality established primarily for commercial reasons. The latter category—sometimes informally referred to as &quot;deemed-to-be-defunct&quot; or &quot;fake deemed universities&quot; in media reports—has been the subject of repeated UGC regulatory action and court proceedings. Students at such institutions face a specific risk: if the deemed university loses its recognition or is downgraded by the UGC, degrees issued by it may lose their validity. If you enrolled in a deemed university that has since been placed on a regulatory watchlist or had its status revoked, you have a claim not just for a refund of unused fees but potentially for compensation for the loss of a valid degree—a significantly larger claim.
                    </p>
                    <p>
                      <strong>Management quota admissions</strong> are seats reserved for the management of private colleges and filled outside the centralised merit-based admission process, typically at significantly higher fees. These fees must be approved by the relevant State Fee Determination Committee, and the approved management quota fee is publicly notified. If your college charged you management quota fees in excess of the approved limit—which is a common practice, often justified by the college as a &quot;special batch fee&quot; or &quot;value-added programme charge&quot;—the excess is an unauthorized collection. We cross-reference the State Fee Committee&apos;s publicly notified management quota fee with the fees you actually paid, and include the total unauthorized excess in the recovery demand. Consumer commissions have ordered full refunds of unauthorized management quota excess fees with interest and costs.
                    </p>
                    <p>
                      NRI quota admissions—which carry the highest fees of all, often denominated in US dollars and paid through NRE accounts—present their own complexity. The fees for NRI quota seats are typically set by the college&apos;s own committee rather than by a state authority, and the refund entitlement follows the same UGC slab framework as all other admissions. However, since payments were often made in foreign currency, the recovery demand must account for exchange rate movements between the payment date and the refund date. LegalRecovery&apos;s legal panel has handled NRI quota refund cases and has a specific methodology for computing the rupee equivalent of foreign currency fees at different points in time to ensure the recovery demand is accurately framed.
                    </p>
                  </div>
                </section>

                {/* ── UGC e-Samadhan ── */}
                <section id="esamadhan-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">UGC e-Samadhan &amp; Regulatory Path</h2>
                  <div className="space-y-5 text-sm md:text-base text-slate-650 leading-relaxed">
                    <p>
                      The <strong>UGC e-Samadhan portal (samadhaan.ugc.ac.in)</strong> is the UGC&apos;s dedicated single-window grievance platform for all student complaints against UGC-recognized institutions. It accepts complaints on a wide range of issues—fee refunds, document withholding, course quality, hostel facilities, and any other matter involving violation of UGC norms. For fee refund disputes, the e-Samadhan portal is particularly valuable because it creates an official, timestamped record of your complaint, notifies the institution directly through the portal&apos;s automated system, and mandates a formal, written institutional response within a defined period.
                    </p>
                    <p>
                      The process of filing on e-Samadhan is straightforward: register as a student on the portal using your enrolled email ID, select the institution from the list of recognized colleges and universities (virtually every registered institution is on the list), choose the grievance category (&quot;Fee Refund&quot; or &quot;Non-Return of Documents&quot; as applicable), describe the facts clearly and chronologically, and upload all supporting documents—withdrawal application with date, fee receipts, any correspondence with the college, and the bank statement showing the payment. You will be assigned a Grievance ID immediately, and the institution is notified through the portal. Track your complaint status using this ID; the portal shows whether the institution has filed a response and what the UGC has communicated.
                    </p>
                    <p>
                      Crucially, the e-Samadhan complaint is not just a grievance mechanism—it is also a <strong>regulatory trigger</strong>. When the UGC receives a volume of complaints from the same institution on the same issue, it flags the institution for systemic non-compliance and can initiate inspections, impose conditions on continued recognition, or recommend that the institution&apos;s recognition be suspended. For a college, having multiple e-Samadhan complaints on file is a serious reputational and regulatory risk that management takes very seriously—far more seriously than an individual letter from a student. At LegalRecovery, when we identify that other students from the same institution are facing the same issue, we coordinate multiple simultaneous e-Samadhan filings, creating the volume of complaints needed to trigger UGC systemic scrutiny.
                    </p>
                    <p>
                      Parallel to the UGC e-Samadhan, for AICTE-approved colleges the <strong>AICTE Centralized Support System (css.aicte-india.org)</strong> serves the same function. Technical education students who file on the AICTE portal simultaneously with a UGC e-Samadhan complaint cover their institution from two regulatory directions at once. The institution&apos;s registrar and compliance officer receive notifications from both the UGC and the AICTE—two different statutory authorities—which creates the kind of institutional urgency that internal escalation to the college management rarely achieves. In our experience, the vast majority of obstinate colleges that were unresponsive to direct requests from students have settled fee refund disputes within days of receiving formal notice of active regulatory complaints on both portals, combined with our legal notice.
                    </p>
                  </div>
                </section>

                {/* ── Legal Notice & Consumer Forum ── */}
                <section id="legal-notice-forum" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Legal Notice &amp; Consumer Forum</h2>
                  <div className="space-y-5 text-sm md:text-base text-slate-650 leading-relaxed">
                    <p>
                      When regulatory escalation through the UGC e-Samadhan portal and the AICTE Centralized Support System does not produce a satisfactory resolution, the legal notice and consumer forum filing represent the final and most powerful instruments in the recovery toolkit. These are not last resorts to be employed only after all other options fail—in practice, LegalRecovery initiates the legal notice simultaneously with the regulatory filings, because a college that is simultaneously dealing with a UGC complaint, an AICTE complaint, and a legal notice from a consumer law advocate is under maximum pressure from multiple directions at once.
                    </p>
                    <p>
                      Our legal notice for college fee refund cases is a precisely engineered document. It opens with a complete factual chronology—admission date, fee components paid with receipt numbers and amounts, withdrawal application date and mode, UGC slab calculation showing the exact percentage and amount due, and the college&apos;s response (or non-response). It then sets out the legal basis for each claim: the UGC notification specifying the applicable refund slab, the AICTE Handbook provisions on fee regulation, Section 2(47) of the Consumer Protection Act (unfair trade practice), Section 2(11) (deficiency in service), and—where original documents are being withheld—the constitutional right to education under Article 21-A read with the Right to Education Act. The demand clause specifies the exact rupee amount of the refund shortfall, interest computed at 12% per annum from the date the refund was due, compensation for mental harassment, and the cost of issuing the notice.
                    </p>
                    <p>
                      The notice is served via registered speed post with AD to the college&apos;s registered address and the personal residential addresses of all trustees, directors, and the principal. The personal addressing of trustees is a deliberate and highly effective tactic: it creates personal legal exposure for individuals who often insulate themselves from institutional disputes by hiding behind the college&apos;s organisational structure. A trustee who receives a legal notice at their home address—citing their personal liability under the Consumer Protection Act and requesting a response within 15 days—has a very different relationship to the dispute than a trustee who is blissfully unaware that a grievance exists at the institutional level. In approximately 65–70% of our cases, the college settles at this stage.
                    </p>
                    <p>
                      For the remaining cases, the consumer complaint is filed on the <strong>e-Daakhil portal (edaakhil.nic.in)</strong>. The District Consumer Disputes Redressal Commission has jurisdiction up to ₹1 crore—sufficient for the vast majority of college fee disputes. Jurisdiction lies either at the college&apos;s location or at the student&apos;s place of residence—the student chooses. The court fee is negligible. Once admitted, the commission issues notice to the college and requires a written response within 30 days. If the college fails to respond, an ex parte order can be passed—an outcome that is particularly favourable for students because the college loses the opportunity to present any defence. The commission&apos;s order can include the refund shortfall with interest from the date it was due, compensation for the harassment of document withholding, and costs. Non-compliance with the order triggers execution proceedings including property attachment and, for egregious cases, detention of directors in civil prison.
                    </p>
                  </div>
                </section>

                {/* ── Case Studies ── */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Stories</h2>
                  <div className="space-y-5 text-sm md:text-base text-slate-650 leading-relaxed">
                    <p>
                      LegalRecovery has successfully recovered college and university fees across India—from AICTE-affiliated engineering colleges to private deemed universities to state-funded professional institutes. Below are representative examples:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Withheld Certificates</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">₹1.4 Lakh + Originals Recovered from Pune Engineering College</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A first-year engineering student in Pune withdrew in September after being allotted a seat at a higher-ranked NIT through a late counselling round. The original college refused to refund ₹1.4 lakh (the annual fee paid) and withheld the Class 10 and Class 12 originals. With the NIT&apos;s reporting deadline 4 days away, we invoked our emergency protocol: simultaneous AICTE complaint, legal notice to all trustees personally, and a High Court writ petition filed the next morning. The college returned all original documents within 18 hours and transferred the full ₹1.4 lakh refund within 4 days.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Management Quota Excess</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">₹2.1 Lakh Unauthorized Excess Recovered via Consumer Forum</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A management quota student at a private MBA college in Hyderabad paid ₹5.2 lakh against the State Fee Committee&apos;s approved management quota fee of ₹3.1 lakh—an unauthorized excess of ₹2.1 lakh. When she withdrew after semester 1, the college refused any refund and cited its &quot;non-refundable management quota fee&quot; policy. We filed on UGC e-Samadhan, sent a legal notice, and filed a consumer complaint. The commission ordered refund of the full ₹2.1 lakh unauthorized excess plus ₹25,000 compensation plus costs. Total recovery: ₹2.37 lakh.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── Client Reviews ── */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { text: "My engineering college in Pune refused to refund ₹1.4 lakh and held my Class 12 mark sheets for 8 months. LegalRecovery served a notice, filed on the AICTE portal, and recovered both my documents and the full refund in 22 days.", name: "Rohan Verma" },
                      { text: "A deemed university in Coimbatore collected ₹3.5 lakh as management quota fee and then offered only ₹50,000 back when I withdrew. LegalRecovery filed through UGC e-Samadhan and a consumer complaint. Full ₹3.5 lakh plus interest recovered.", name: "Meera Pillai" },
                      { text: "My MBA college insisted disputes go to their internal arbitration panel and flatly refused a consumer forum. LegalRecovery proved the arbitration clause was invalid under consumer law. Got ₹2.1 lakh back within 30 days.", name: "Ajay Bhardwaj" },
                      { text: "My daughter changed her course after the first year. The college refused any refund citing their 'no refund after one year' policy. LegalRecovery cited the UGC slab and recovered ₹68,000 within 3 weeks.", name: "Preethi Subramaniam" },
                      { text: "The college demanded I sign a waiver to get my 10th and 12th originals back. LegalRecovery immediately intervened with an AICTE complaint and the documents were returned the next day without any waiver.", name: "Neeraj Tiwari" },
                      { text: "I withdrew before classes began but the college offered only a 'fee adjustment' for next year. LegalRecovery insisted on a cash refund citing UGC norms. Got ₹85,000 in cash credited within 20 days.", name: "Shreya Kulkarni" },
                    ].map((r, i) => (
                      <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-sm text-slate-700 italic mb-4">&quot;{r.text}&quot;</p>
                        <h4 className="font-extrabold text-xs text-slate-900">— {r.name}</h4>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── Why Choose Us ── */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose Us?</h2>
                  <div className="space-y-4 text-sm md:text-base text-slate-650 leading-relaxed">
                    <p>LegalRecovery is India&apos;s leading tech-enabled recovery platform for higher education fee disputes. Here is what makes us the right choice for your college fee recovery:</p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>UGC Slab Experts:</strong> We know every UGC fee refund notification—2018, 2022, 2024—by exact date and percentage. We calculate your entitlement to the rupee before drafting a single line of the notice.</li>
                      <li><strong>Tri-Regulatory Approach:</strong> UGC e-Samadhan + AICTE CSS + Consumer Forum — all three simultaneously for maximum institutional pressure.</li>
                      <li><strong>Emergency Document Protocol:</strong> TC/certificate emergencies handled within 24 hours through AICTE, DTE, and High Court writ mechanisms.</li>
                      <li><strong>Management Quota Audits:</strong> We cross-reference State Fee Committee approved schedules against your actual receipts to identify unauthorized excess charges.</li>
                      <li><strong>Transparent Flat Pricing:</strong> One predictable fee covering notice drafting, regulatory filings, and follow-up—no hourly billing surprises.</li>
                    </ul>
                  </div>
                </section>

                {/* ── FAQs ── */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">FAQs</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                      const id = `faq-${idx}`;
                      const open = expandedFaqs.includes(id);
                      return (
                        <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:border-slate-350 transition-all duration-200">
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="flex justify-between items-center w-full text-left p-4 font-bold text-sm text-slate-900 hover:bg-slate-50/50 focus:outline-none transition-colors cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span className={`transform transition-transform duration-200 shrink-0 ml-3 text-slate-400 ${open ? 'rotate-180' : ''}`}>▼</span>
                          </button>
                          {open && (
                            <div className="px-4 pb-4 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6 border-t border-slate-100 bg-[#F8F9FB]/40">
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

            {/* Right Sidebar */}
            <div className="space-y-8 sticky top-24">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your college fee dispute with higher education and consumer law experts. We invoke UGC, AICTE, and consumer court remedies simultaneously.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors cursor-pointer"
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
